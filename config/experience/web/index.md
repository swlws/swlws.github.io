# Web 踩坑经验

## 文字偶现乱码

现象：通过 css 属性 content 填充的文字，偶尔会显示成乱码。

解决：是将文字改为 unicode 编码，例如 content: '展开' 应改为 content: ''\5c55\5f00''；

## 符号”_“偶现不显示

现象：文字父容器设置了 overflow: hidden，在窗口缩放时，缩放到一定比例（不同显示器不一样）会发现"_"消看不见了。

原因：猜测可能是浏览器底层渲染时，对不足1px的内容发生了偏移导致，在特定屏幕特定缩放率下会导致”_“向下偏移了1个像素，加上父容器设置了 overflow: hidden，所及就看不见了。

解决：对文字增加样式 padding-bottom: 1px 即可解决此类问题，修改后怎么缩放都不会再消失。

## JSON 数字精度丢失

除了数值的 JS 代码使用大整形数值时，会发生精度丢失问题外。在 JSON 序列化外也会丢失精度。

所以，HTTP 传输时，若有大整形数字，必须要求后端以`字符串`的格式返回。

```js
// bad
{
    "value": 258431607934229718
}

// good
{
    "value": "258431607934229718"
}
```

## display:inline-block

某些浏览器在渲染 display: inline-block; 元素的时候,默认元素的样式不一样，可能会造成该元素的上移或下移，可以尝试：

- 设置line-height:1试试
- 或者在父级元素上使用display:flex

## 自动播放音频

audio 标签，加个 autoplay 属性，这样写了并没有生效，而是报了个错：

> Auto play failed: DOMException: play() failed because the user didn't interact with the document first. <https://goo.gl/xX8pDD>

解决方案是监听用户进来的第一次点击事件，触发播放按钮。

```js
document.addEventListener('click', this.playPause, { once: true })
```
