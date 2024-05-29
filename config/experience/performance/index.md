# 性能

## 当浏览器输入一个 URL, 会发生什么？

为什么会问这个问题？主要考察：

1. 页面渲染流程
2. 页面首屏优化

当浏览器输入一个URL,会发生什么?

- URL解析,包括协议(如http)、域名、端口、路径和参数等
- 处理缓存,包括强缓存,协商缓存命中等
- dns解析,解析域名,获取ip地址
- 建立链接,请求服务器资源,Nginx,CLB,CDN等
- 处理响应,资源的加载顺序,资源阻塞等
- 构建Dom树,CSS树,渲染页面,js执行等

上面url的加载过程,其实就是我们可以优化的过程,比如:

1. dns解析慢,我们可以找运维更换dns解析服务商
2. 缓存不生效,我们可以调整缓存策略
3. 部分地区网络慢,我们可以上cdn
4. 资源加载慢,处理响应慢,我们可以拆包,gzip压缩,优化资源加载顺序,上http2
5. 页面渲染慢,减少dom树层级,减少css选择器复杂度,减少js执行时间

## 性能指标

### 加载性能指标

- DCL（DOMContentLoaded），DOM解析完毕，不包含css、图像和子框架的完成加载。
- load（Onload Event），它代表页面中依赖的所有资源加载完的事件。
- FP（First Paint），表示渲染出第一个像素点。FP一般在HTML解析完成或者解析一部分时候触发。
- FCP（First Contentful Paint），表示渲染出第一个内容，这里的“内容”可以是文本、图片、canvas。
- FMP（First Meaningful Paint），首次渲染有意义的内容的时间，“有意义”没有一个标准的定义，FMP的计算方法也很复杂。
- LCP（largest contentful Paint），最大内容渲染时间。
- INP （Interaction to Next Paint），与下一次绘制的交互。

#### DCL

DOMContentLoaded 事件，当 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，无需等待样式表、图像和子框架的完成加载。

```js
document.addeventListener('DOMContentLoaded', function() {}, false)
```

```js
const dclTime = performance.timing.domContentLoadedEventEnd - performance.timing.domContentLoadedEventStart
```

#### load 事件

onload Event 代表页面中依赖的所有资源：DOM、图片、CSS、Flash等都加载完，window.onload注册的回调就会在load事件触发时候被调用。

```js
const loadTime = performance.timing.loadEventEnd - performance.timing.loadEventStart;
```

#### LCP

最大内容绘制时间，用于记录视窗内最大的元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变，另外该指标会在用户第一次交互后停止记录。

```js
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});
```

#### FP 和 FCP

浏览器渲染的界面可能是“内容”，例如文本，也可能不是“内容”，比如一个背景为红色的div标签。

FCP 事件指渲染出第一个内容的事件,而 FP 指渲染出第一个像素点，渲染出的东西可能是内容，也可能不是

有节点不一定有渲染，如果没有任何样式，是没有界面的，也不需要渲染。下面代码就没有FP事件：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>no FP</title>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

下面代码，会渲染界面，因此会触发FP事件，但是不会触发FCP，因为没有内容。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>has FP, no FCP</title>
    <style>
        div {
            width: 1px;
            height: 1px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

#### TTI（Time to Interactive）

可交互时间。这个指标计算过程略微复杂，它需要满足以下几个条件：

1.从 FCP 指标后开始计算；
2.持续 5 秒内无长任务（执行时间超过 50 ms）且无两个以上正在进行中的 GET 请求；
3.往前回溯至 5 秒前的最后一个长任务结束的时间。

```js
const timeToInteractive = performance.timing.domInteractive - performance.timing.fetchStart
```

#### FID（First Input Delay）

首次输入延迟时间，记录在 FCP 和 TTI 之间用户首次与页面交互时响应的延迟。

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('fid', entry.processingStart - entry.startTime);
  }
});
observer.observe({type: 'first-input', buffer: true});
```

#### [INP（Interaction to Next Paint）](https://juejin.cn/post/7267436042507091979)

### 白屏和首屏

白屏时间 = 地址栏输入网址后回车 - 浏览器出现第一个元素

白屏结束时间 = FP事件触发时间

首屏时间 = 地址栏输入网址后回车 - 浏览器第一屏渲染完成

首屏结束时间 = FCP事件触发时间 或 FMP、LCP

### performance.timing

- 重定向时间：redirectEnd - redirectStart
- 页面加载耗时：loadEventEnd - navigationStart
- DNS查询耗时：domainLookupEnd - domainLookupStart
- TCP链接耗时：connectEnd - connectStart
- request请求耗时：responseEnd - responseStart
- 解析dom树耗时：domComplete - domInteractive
- 白屏时间：domloading - fetchStart
- domready可操作时间：domContentLoadedEventEnd - fetchStart
- onload总下载时间：loadEventEnd - fetchStart

## 浏览器缓存

强缓存和协商缓存

- Expires
  - Last-Modified / If-Modified-Since
- Cache-Control
  - ETag / If-None-Match

缓存位置

- from memory cahce. 浏览器会在js和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)
- from disk cache. css文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)。

## 回流与重绘

- 回流：当涉及到DOM节点的布局属性发生变化时，就会重新计算该属性，浏览器会重新描绘相应的元素，此过程叫Reflow（回流或重排）
- 重绘：当影响DOM元素可见性的属性发生变化 (如 color) 时, 浏览器会重新描绘相应的元素, 此过程称为Repaint（重绘）。因此重排必然会引起重绘。

优化方向：

- 避免逐条更改样式。建议集中修改样式，例如操作className。
- 避免频繁操作DOM。创建一个documentFragment或div，在它上面应用所有DOM操作，最后添加到文档里。设置display:none的元素上操作，最后显示出来。
- 避免频繁读取元素几何属性（例如scrollTop）。绝对定位具有复杂动画的元素。
- 绝对定位使它脱离文档流，避免引起父元素及后续元素大量的回流

## 节流与防抖

- 节流（Throttling）
  - 定义：指在一段时间内只允许某个函数执行一次，即使在这段时间内该函数被多次触发。
  - 作用：它的目的在于限制函数的调用频率。
- 防抖（Debouncing）
  - 定义：指在事件被触发后，等待一段时间再执行，如果在这段时间内事件再次被触发，则重新计时。
  - 目的：它的目的在于减少高频率事件触发时的函数执行次数。

## 文件加载

### 把`<link>`放在`<head>`中

这种做法可以让页面逐步呈现，提高了用户体验。将样式表放在文档底部附近，会使许多浏览器（包括 Internet Explorer）不能逐步呈现页面。一些浏览器会阻止渲染，以避免在页面样式发生变化时，重新绘制页面中的元素。这种做法可以防止呈现给用户空白的页面或没有样式的内容。

**PS**：等待加载 CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。另外，它也会阻塞 JavaScript，因为 JavaScript 经常用于查询元素的 CSS 属性。

### 把`<script>`标签恰好放在`</body>`之前

脚本在下载和执行期间会阻止 HTML 解析。把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

如果一定要放在 `<head>` 中，可以让 `<script>` 标签使用 `defer` 属性。

### defer、async、perfetch、perload

- defer：脚本异步加载，HTML 解析完成后按顺序执行。
- async：脚本异步加载，加载完成后立即执行，执行顺序不保证。
- prefetch：在浏览器空闲时预取未来可能需要的资源，低优先级。
- preload：提前加载当前页面需要的关键资源，高优先级。

## Web 存储

- LocalStorage
  - 最大值：主流浏览器，大约 5 MB
- SessionStroage
- Cookie
  - 会话 Cookie（Session Cookie）
    - 会话 Cookie 是指没有指定过期时间的 Cookie，它的生命周期只在当前会话期间有效。一旦用户关闭浏览器，这类 Cookie 就会被删除。
  - 持久化 Cookie（Persistent Cookie）
    - 持久化 Cookie 是指带有过期时间（expires）或最大存活时间（max-age）的 Cookie，它会在指定时间后自动失效，即使关闭浏览器后也会保留到失效时间。
  - 安全属性
    - path：指定 Cookie 的作用路径。默认为当前路径。
    - domain：指定 Cookie 的作用域。默认为当前域名。
    - secure：指示 Cookie 只能通过 HTTPS 连接传输。
    - HttpOnly：指示 Cookie 只能在服务器端访问，JavaScript 无法读取。
    - SameSite：用于防止跨站请求伪造（CSRF）攻击。可选值为 Strict、Lax 和 None。
- IndexedDB：一种更强大的数据库解决方案，适用于存储大容量结构化数据。
- Service Workers Cache：用于缓存请求和响应，可以存储较大数据量。

## Web 安全

- XSS（跨站脚本攻击）
- CSRF（跨站请求伪造攻击）
- SQL 注入
