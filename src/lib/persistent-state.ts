import { watch, toRaw, reactive, UnwrapNestedRefs } from "vue";

const NAMESPACE = "__code__";

class Storge<T extends object> {
  name: string;
  state: UnwrapNestedRefs<T>;
  constructor(state: T, name = "default") {
    this.name = name;
    this.state = reactive(state);
  }

  init() {
    Object.entries(this.getCache(this.name)).forEach(([key, value]) => {
      this.state[key] = value;
    });
  }

  getCache(prop?: string) {
    try {
      const storage = localStorage.getItem(NAMESPACE) || "{}";
      const cache = JSON.parse(storage);
      return prop ? cache[prop] || {} : cache;
    } catch (e) {
      console.error(e);
      return {};
    }
  }

  setCache() {
    const data = toRaw(this.state);
    try {
      const cache = this.getCache();
      cache[this.name] = data;
      localStorage.setItem(NAMESPACE, JSON.stringify(cache));
    } catch (e) {
      console.error(e);
    }
  }

  watch() {
    watch(this.state, () => {
      console.log("change");
      this.setCache();
    });
  }
}

export function usePersistentState<T extends object>(state: T, name?: string) {
  const ins = new Storge(state, name);
  ins.init();
  ins.watch();

  return ins.state;
}
