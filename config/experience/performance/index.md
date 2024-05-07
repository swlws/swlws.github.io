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
