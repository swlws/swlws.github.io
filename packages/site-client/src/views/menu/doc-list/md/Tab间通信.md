# Tab 间通信

同源网站，不同 Tab 之间通信，三种方式：

- windows.postMessage
- localstorage
- BroadcastChannel

# postMessage

当使用 window.open 打开一个新页面时，若两个 Tab 之间需要通信，则可以使用`window.postMessage`实现通信。

场景：在`A页面`使用`window.open`打开`B页面`，在`B页面`向`A页面`发送消息。

原理：

- A 页面监听`message`事件
- B 页面使用`postMessage`发送消息

具体实现([源码](https://github.com/swlws/swlws.github.io/blob/master/shared/tool/tab-message.ts))：

A 页面监听消息

```ts
/**
 * 事件映射
 */
const eventMap: PlainObject = {};

window.addEventListener('message', (ev) => {
  let { data } = ev;
  if (Object.prototype.toString.call(data) !== '[object Object]') return;

  let { key, args = [] } = data;
  let fn = eventMap[key];
  if (typeof fn === 'function') {
    if (!Array.isArray(args)) args = [args];
    fn(...args);
  }
});

/**
 * 注册Tab页事件
 *
 * @param key
 * @param fn
 */
export function registerTabEvent(key: string, fn: (...args: any[]) => void) {
  eventMap[key] = fn;
}
```

B 页面发送消息

```ts
type TMessage = { key: string; args?: any[] };
/**
 * 发送消息
 *
 * @param data
 * @returns
 */
export function sendTabMessage(data: TMessage) {
  let opener = window.opener;
  if (!opener) return;

  opener.postMessage(data, '/');
}
```

# localstorage

localstorage 可以存储浏览器数据，同源时，共享数据。当使用`setItem`设置数据时，`storage`事件可以监听到数据的变化（必须是不同的 Tab 页）

原理也是 window 的监听事件，实现与 postMessage 类似

# BroadcastChannel
