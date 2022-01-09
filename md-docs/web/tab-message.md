---
editLink: false
---

# Web 间通信

[[toc]]

## 一、场景

Tab 间通信存在不同的场景：

- 同源网站下的 Tab 页间通信
- 非同源网站下的 Tab 页间通信

## 二、同源网站下 Tab 页间的通信方式

按照通信的特征，分为三种方式点对点通信、广播通信、轮询通信

- 点对点通信
  - window.postMessge
- 广播通信
  - BroadCast Channel
  - Service Worker
  - LocalStorage
- 轮询通信
  - IndexedDB

### 2.1 window.postMessge

当使用 window.open 打开一个新页面时，若两个 Tab 之间需要主动通信，则可以使用`window.postMessage`实现通信。

场景：在`A页面`使用`window.open`打开`B页面`，在`B页面`向`A页面`发送消息。

特点：类似于点对点间的通信，其它的同源页面无法收到消息。

原理：

- A 页面监听`message`事件
- B 页面使用`postMessage`发送消息
- B 页面可以获取 A 页面的 window 对象，一般使用 window.opener

具体实现([源码](https://github.com/swlws/swlws.github.io/blob/master/shared/tool/tab-message.ts))：

A 页面监听消息

```ts
/**
 * 事件映射
 */
const eventMap: PlainObject = {};

window.addEventListener("message", (ev) => {
  let { data } = ev;
  if (Object.prototype.toString.call(data) !== "[object Object]") return;

  let { key, args = [] } = data;
  let fn = eventMap[key];
  if (typeof fn === "function") {
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

  opener.postMessage(data, "/");
}
```

### 2.2 BroadCast Channel

BroadcastChannel 接口代理了一个命名频道，可以让指定 origin 下的任意 browsing context 来订阅它。它允许同源的不同浏览器窗口，Tab 页，frame 或者 iframe 下的不同文档之间相互通信。通过触发一个 message 事件，消息可以广播到所有监听了该频道的 BroadcastChannel 对象。

特点：

- 广播通信

原理：

- 页面创建`BroadCast Channel`实例
- 为实例注册`message`事件

实现：

[Demo](https://swlws.github.io/site-client/#/tab-message-broadcast-channel)

```js
export default defineComponent({
  setup() {
    const instr = ref("");
    const outmsg = ref("");

    let bc = new BroadcastChannel("test");
    bc.onmessage = (ev) => {
      outmsg.value = ev.data;
    };

    const sendMsg = () => {
      bc.postMessage(instr.value);
    };

    return {
      instr,
      outmsg,
      sendMsg,
    };
  },
});
```

### 2.3 Service Worker

Service Worker 是一个运行在后台的 Worker，多页面间可以共享 Worker，使用 Worker 充当消息转发中心，实现多页面间的通信。

原理：

- 多 Tab 共用同一份 Service Worker，每一个 Tab 是为 Client，通过 Service Worker 向每一客户端推送消息实现通信

实现：

[Demo](https://swlws.github.io/site-client/#/tab-message-service-worker)

ServiceWorker 注册`message`事件

```js
// ServiceWorkerGlobalScope上下文中注册message事件
// 当监听到消息时，转发给每一个客户端
self.addEventListener("message", function (ev) {
  ev.waitUntil(
    self.clients.matchAll().then(function (clients) {
      if (!clients || clients.length === 0) {
        return;
      }

      // 向每一个客户端发送消息，包括自身
      clients.forEach(function (client) {
        client.postMessage(ev.data);
      });
    })
  );
});
```

在客户端接收、发送消息

```js
export default defineComponent({
  setup() {
    const instr = ref("");
    const outmsg = ref("");

    const sendMsg = () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.controller?.postMessage(instr.value);
      }
    };

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./tab-message.sw.js").then((data) => {
        console.log("Service Worker注册成功");
      });

      navigator.serviceWorker.addEventListener("message", (ev) => {
        outmsg.value = ev.data;
      });
    } else {
      console.log("浏览器不支持 serviceWorker");
    }

    return {
      instr,
      outmsg,
      sendMsg,
    };
  },
});
```

### 2.4 LocalStorage

localstorage 可以存储浏览器数据，同源时，共享数据。当同源下的两个 Tab 页需要监听对方数据变化时，使用 localstorage 是比较好的方式。

原理：

- 两个 Tab 页同源
- A 页面监听`storage`
- B 页面使用`setItem`更新数据时，此时 A 页面可以监听到`localstorage`数据的变化

实现：

```js
window.addEventListener("storage", function (e) {
  console.log(e.key, e.newValue);
});
```

### 2.5 IndexedDB

同源下的 Tab 可以访问相同的 IndexedDB，利用数据的全局存储特性，实现通信。

原理：

- A 页面将数据存储到 IndexedDB 中
- B 页面轮询查询 IndexedDB 中数据的变化

基于同样的原理，localstorage、sessionstorage 都可以采用这种方案

## 三、非同源页面间的通信

- iframe

### 3.1 iframe

依靠 iframe 为媒介，可以实现非同源页面间的通信
