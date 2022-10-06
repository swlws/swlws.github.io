---
editLink: false
head:
  - - meta
    - name: author
      content: swlws
  - - meta
    - name: description
      content: Vue 3 Api List
  - - meta
    - name: keywords
      content: vue vue3 api 
---

---

<img src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzg2OTc0MzIxOA==&mid=2247483694&idx=1&sn=c2043de91c2f228153516fb715205599&send_time="/><br/>

---

# Vue 3 Api 清单

[vue3 在线编译工具](https://sfc.vuejs.org/)


## 一、响应式

### 1.1 reactive

API`reactive`默认是`Deep Reactivity`，它将普通引用对象变为 proxy 对象，当为 proxy 添加一个新属性（值为引用对象）时，新添加的属性值也为 proxy。

```js
import { reactive } from "vue";
const raw = {};
const proxy = reactive(raw);

console.log(proxy === raw); // false
console.log(reactive(raw) === proxy); // true

const num = 10;
proxy.num = num;
console.log(proxy.num === num); // true

const obj = {};
proxy.nested = obj;
console.log(proxy.nested === obj); // false
```

`reactive`的两个限制：

1. 仅在参数为对象类型（Object、Array 或者集合类型 Map、Set）时工作，不支持基本数据类型（数字、布尔、字符串）
2. vue 的响应式追踪系统是基于属性访问的，在响应式对象中必须保持引用不变，才能生效。

响应式失效的示例：

```js
const state = reactive({ count: 0 });

// n is a local variable that is disconnected
// from state.count.
let n = state.count;
// does not affect original state
n++;

// count is also disconnected from state.count.
let { count } = state;
// does not affect original state
count++;

// the function receives a plain number and
// won't be able to track changes to state.count
callSomeFunction(state.count);
```

### 1.2 shallowReactive

若是，仅需要第一层为响应式的，可以使用`shallowReactive`

### 1.3 ref

它可以接受任何类型的参数，将其变为响应式对象。

### 1.4 `ref`、`reactive`混用的场景

场景一：reactive object 中引用 ref

```js
import { reactive, ref } from "vue";
const count = ref(0);
const proxy = reactive({ count }); // count会自动unwrapped，表现的像一个正常的属性

count.value++;
proxy.count++;
```

场景一：reactive array 中引用 ref

```js
import { reactive, ref } from "vue";
const count = ref(0);
const proxy = reactive([count]); // 在数组中，不会自动unwrapped

proxy[0].value++;
```

## 二、计算属性

### 2.1 Cache

需要了解的是，`computed properties`基于依赖的响应式对象实现响应式的。仅当它依赖的响应式对象发生变化时，才会再次触发计算。

下面的示例，永远不会被更新：

```js
const now = computed(() => Date.now());
```

### 2.2 setter

默认`computed`仅可读方法，可以为其添加 setter。

```js
import { ref, computed } from "vue";

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
```

## 三、为 HTMLElement 动态绑定 Class、Style

### 3.1 Class

通过对象：

```js
const classObj = reactive({
  active: true,
  "text-danger": false,
});
```

```html
<div :class="classObj"></div>
```

通过数组：

```js
const classArr = reactive(["active", "text-danger"]);
```

```html
<div :class="classArr"></div>
```

备注，为组件添加 `class` 时。组件需要有一个根节点，这个根节点原有的 class 值，会与新添加的值自动合并。

### 3.2 Style

通过对象：

```js
const styleObject = reactive({
  color: "red",
  fontSize: "13px",
});
```

```html
<div :style="styleObject"></div>
```

通过数组：

```js
const baseStyle = reactive({
  color: "#333",
});

const styleObject = reactive({
  color: "red",
  fontSize: "13px",
});
```

```html
<div :style="[baseStyle, styleObject]"></div>
```

## 四、条件渲染

### 4.1 指令

- `v-if`
- `v-else-if`
- `v-else`
- `v-show`

当想一次性控制多个元素时，可以使用在`template上`添加控制指令：

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

### 4.2 `v-if` VS `v-show`

`v-if`:

- 真正的条件渲染，随着值的切换，DOM 及其子 DOM、以及事件，被销毁或重新新建。
- 惰性执行。当值为 false，不做任何事情；为 true 时，才渲染

`v-show`:

- 无论值为 false 或 true，初始化时都会渲染。
- 值变化时，通过 CSS 隐藏、显示。

总结：`v-if`在切换时，资源消耗高； `v-show`，在初始化时，资源消耗高。

## 五、遍历`v-for`

### 5.1 遍历数组

```js
import { reactive } from "vue";
const proxy = reactive(["abc", "def", "ghi"]);
```

```html
<ul>
  <li v-for="(item, index) in proxy" :key="index">{{ index }}: {{ item }}</li>
</ul>
```

### 5.2 遍历对象

```js
import { reactive } from "vue";
const proxy = reactive({
  name: "小明",
  age: 10,
  sex: "XX",
});
```

```html
<ul>
  <li v-for="(value, key) in proxy" :key="key">{{ key }}: {{ value }}</li>
</ul>
```

### 5.3 循环 N 次

```html
<ul>
  <li v-for="n in 10" :key="n">{{ n }}</li>
</ul>
```

## 六、事件处理

### 6.1 行内处理器

```js
const count = ref(0);
```

```html
<button @click="count++">Add 1</button>
```

### 6.2 方法

```js
function show(event) {
  alert(event.target.tagName);
}
```

```html
<button @click="show">show</button>
```

### 6.3 Event

```js
function show(msg, event) {
  alert(msg, event.target.tagName);
}
```

```html
<button @click="show('show message', $event)">show</button>
```

### 6.4 点击事件修饰符

- .stop
- .prevent
- .self
- .capture
- .once
- .passive

```html
<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div @scroll.passive="onScroll">...</div>
```

### 6.5 键盘事件修饰符

- .enter
- .tab
- .delete (captures both "Delete" and "Backspace" keys)
- .esc
- .space
- .up
- .down
- .left
- .right
- .ctrl
- .alt
- .shift
- .meta

```html
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />
```

### 6.6 鼠标事件修饰符

- .left
- .right
- .middle

## 七、表单输入绑定

### 7.1 v-model

```html
<input v-model="text" />
```

等价于

```html
<input :value="text" @input="event => text = event.target.value" />
```

`v-model`可以使用在不同的表单元素上，它会根据使用的元素类型，自动扩展到不同的 DOM 属性和事件上。

- `text` 类型的`<input>`和 `<textarea>` 使用 `value` 属性和 `input` 事件
- `<input type="checkbox">` 和 `<input type="radio">` 使用 `checked` 属性 and `change` 事件
- `<select>` 使用 `value` 作为属性， `change` 作为事件

`<select>` ，单选示例：

```html
<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

`<select>` ，多选示例：

```html
<div>Selected: {{ selected }}</div>

<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

`Checkbox` 默认选中时值为 `true`、未选中时值为 `false`， Vue 中可以为 `Checkbox` 自定义值，示例：

```html
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
```

### 7.2 修饰符

- `.lazy` 默认表单元素触发 `input` 事件时即修改值，这里变更为 `change` 事件时才修改值
- `.number`
- `.trim`

## 八、生命周期钩子函数

- `onMounted()`
- `onUpdated()`
- `onUnmounted()`
- `onBeforeMount()`
- `onBeforeUpdate()`
- `onBeforeUnmount()`
- `onErrorCaptured()`
- `onRenderTracked()` 开发模式生效
- `onRenderTriggered()` 开发模式生效
- `onActivated()` 通过`<KeepAlive>`缓存，将组件实例插入 DOM 树后，将触发回掉函数
- `onDeactivated()` 通过`<KeepAlive>`缓存，将组件实例从 DOM 树中移除后，将触发回掉函数
- `onServerPrefetch()` 仅在 SSR 模式生效

## 九、依赖注入

### 9.1 provide

提供一个值，供子孙组件访问

```js
function provide<T>(key: InjectionKey<T> | string, value: T): void
```

### 9.2 inject

获取祖先组件传递的值

```js
// without default value
function inject<T>(key: InjectionKey<T> | string): T | undefined

// with default value
function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T

// with factory
function inject<T>(
  key: InjectionKey<T> | string,
  defaultValue: () => T,
  treatDefaultAsFactory: true
): T
```

## 十、内置的指令、组件、元素

### 10.1 内置指令

- `v-text`
- `v-html`
- `v-show`
- `v-if`
- `v-else`
- `v-else-if`
- `v-for`
- `v-on`
- `v-bind`
- `v-model`
- `v-slot`
- `v-pre`
- `v-once`
- `v-memo`
- `v-cloak`

**v-pre**

当前元素及其子孙元素，不使用 Vue 进行编译，保持原样

```html
<span v-pre>{{ this will not be compiled }}</span>
```

**v-once**

元素或组件，仅渲染一次，不会触发更新

```html
<!-- single element -->
<span v-once>This will never change: {{msg}}</span>
<!-- the element have children -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- component -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` directive -->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

**v-memo**

`3.2版本`新加的内置指令，选择性的更新元素或组件。当它的当前值，于上一次的值保持一致时，将忽略更新，使用示例：

```html
<div v-memo="[valueA, valueB]">...</div>
```

与 v-for 配合使用（当数组长度大于 1000 时，会有所帮助）

```html
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
```

### 10.2 内置组件

- Transition
- TransitionGroup
- KeepAlive
- Teleport

### 10.3 内置的特殊元素

- component
- slot

### 10.4 内置的特殊属性

- key
- ref
- is

**ref**

它的值可以是`Ref`对象，也可以是个函数

```html
<script setup>
  import { ref } from "vue";

  const p = ref();
</script>

<template>
  <p ref="p">hello</p>
</template>
```

```html
<ChildComponent :ref="(el) => child = el" />
```

## 十一、SFC

- defineProps
- withDefaults
- defineEmits
- defineExpose
- useSlots
- useAttrs
- useCssModule

### 11.1 script、template

带有初始值的 Props（Composition Api）

```html
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      index: number;
    }>(),
    {
      index: 0,
    }
  );

  // JS中访问Props中的属性
  console.log(props.index);
</script>

<template>
  <!-- html中直接使用Key访问 -->
  <div>{{ index }}</div>
</template>
```

备注：

1. `<script>` 和 `<script setup>`可以在同一个文件中，一起使用
2. `<script setup>`中可以直接使用`await`

### 11.2 CSS scoped

**Deep Selectors**

```css
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```

**Slotted Selectors**

```css
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```

**Global Selectors**

```css
<style scoped>
:global(.red) {
  color: red;
}
</style>
```

### 11.3 CSS Module

使用`$style`访问 CSS

```html
<template>
  <p :class="$style.red">This should be red</p>
</template>

<style module>
  .red {
    color: red;
  }
</style>
```

自定义 Module 名

```html
<template>
  <p :class="classes.red">red</p>
</template>

<style module="classes">
  .red {
    color: red;
  }
</style>
```

使用 Composition Api 访问 CSS

```js
import { useCssModule } from "vue";

// inside setup() scope...
// default, returns classes for <style module>
useCssModule();

// named, returns classes for <style module="classes">
useCssModule("classes");
```

通过 v-bind 在 CSS 中使用变量

```html
<script setup>
  const theme = {
    color: "red",
  };
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
  p {
    color: v-bind("theme.color");
  }
</style>
```

## 十二、高级 API

- `h()`
- `mergeProps()`
- `cloneVNode()`
- `isVNode()`
- `resolveComponent()`
- `resolveDirective()`
- `withDirectives()`
- `withModifiers()`
