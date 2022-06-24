---
editLink: false
head:
  - - meta
    - name: author
      content: swlws
  - - meta
    - name: description
      content: 页面关闭前，如何发送一个可靠请求
  - - meta
    - name: keywords
      content: request fetch sendBeacon ping
---

---

<img src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzg2OTc0MzIxOA==&mid=2247483694&idx=1&sn=c2043de91c2f228153516fb715205599&send_time="/><br/>

---

# 页面关闭前，如何发送一个可靠请求

## 一、问题

从 A 页面进入到 B 页面前，向后台发送一个`/log`请求，如何保证这个请求一定会被接收并处理。

**场景复现**

```js
function nextPage() {
  fetch("/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      some: "data",
    }),
  });

  window.location.href = "/other.html";
}
```

这段代码里，页面切换成功后，后台是接收不到`/log`请求的。原因：

1. js 的执行可以认为分为`主线程`、`异步线程`
2. 当页面进入`terminated`状态时，会释放所有的资源。也就是说，此时`异步线程`中未执行的上下文，不会再被处理。

## 二、解决方案

### 2.1 async/await

既然是因为异步导致的请求被执行，那改为同步即可。

```js
async function nextPage() {
  await fetch("/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      some: "data",
    }),
  });

  window.location.href = "/other.html";
}
```

这种方式会阻塞代码执行

### 2.2 keepAlive

`fetch`中设置`keepalive`为`true`时，即使发起请求的页面处于`terminated`状态，也会保持连接。利用这哥特性，可以发送可靠的请求。

```js
function nextPage() {
  fetch("/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      some: "data",
    }),
    keepalive: true,
  });

  window.location.href = "/other.html";
}
```

### 2.3 navigator.sendBeacon

使用 `sendBeacon()` 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能，这意味着：

- 数据发送是可靠的。
- 数据异步传输。
- 不影响下一导航的载入。

代码示例：

```js
function nextPage() {
  navigator.sendBeacon(
    "/log",
    JSON.stringify({
      some: "data",
    })
  );

  window.location.href = "/other.html";
}
```

`sendBeacon()`API 不支持添加请求头，可以利用`Blob`做一些改动支持请求头

```js
function nextPage() {
  const blob = new Blob([JSON.stringify({ some: "data" })], {
    type: "application/json; charset=UTF-8",
  });
  navigator.sendBeacon("/log", blob);

  window.location.href = "/other.html";
}
```

需要注意的是，在`Chrome`的`network`面板下，它的文档类型为`ping`，不是常见的`fetch、xhr`类型。

### 2.4 `<a>`标签的 ping 属性

越来越多的厂商支持`ping`属性了。示例：

```html
<a href="/other.html" ping="/log">other page</a>
```

点击`a`标签时，会额外发送一个请求`/log`，它的请求头中包含几个特殊的值：

```json
{
  "ping-from": "http://127.0.0.1:3000/",
  "ping-to": "http://127.0.0.1:3000/other.html",
  "content-type": "text/ping"
}
```

## 三、方案选择

**如果出现以下情况，可以使用 fetch（）+keepalive：**

- 需要自定义请求头。
- 使用 GET 请求，不是 POST 请求。
- 支持较旧的浏览器（如 IE），并且已经加载了 fetch polyfill。

**但如果满足以下条件，sendBeacon（）可能是更好的选择：**

- 进行简单的服务请求，不需要太多定制化。
- 更喜欢更干净、更优雅的 API。
- 希望保证您的请求不会与应用程序中发送的其他高优先级请求竞争。

参考：

- [可靠的请求](https://css-tricks.com/send-an-http-request-on-page-exit/)
- [navigator.sendBeacon() API](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)
- [a 标签上的 ping 属性](https://www.stefanjudis.com/today-i-learned/html-defines-a-ping-attribute-on-anchor-elements-links/)
