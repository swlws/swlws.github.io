interface TodoItem {
  label: string;
  state: 1 | 2; // 1代办、2完成
  date: string; // 日期
}

class StorageMgr {
  name: string;
  cache: { [key: string]: any } | null;

  constructor() {
    this.name = "CodeLife";
    this.cache = null;
  }

  getItems(key: string) {
    localStorage.getItem(this.name);
  }
}

class TodoStore {
  lists: TodoItem[];

  constructor() {
    this.lists = [];
  }
}
