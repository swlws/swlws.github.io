# CSS

## CSS 是渲染阻塞的

浏览器会阻塞页面渲染直到它接收和执行了所有的 CSS

## 渲染树

渲染树只包含了可见内容。头部（通常）不包含任何可见信息，因此不会被包含在渲染树中。如果有元素上有 display: none;，它本身和其后代都不会出现在渲染树中。

## 标准化 CSS 和重置 CSS

- [https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css](https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css)

## 图层

少数 CSS 属性会触发一个新的层叠上下文，例如`opacity`小于 1，`filter`不是`none`，`transform`不是`none`。

`z-index`只能影响`position`值不是`static`的元素。

## BFC（块级格式化上下文）

[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：

- `float`的值不是`none`.
- `position`的值不是`static`或`relative`.
- `display`的值是`table-cell`、`table-caption`、`inline-block`、`flex`、或`inline-flex`。
- `overflow`的值不是`visible`。

## BEM（block element modify）

- [文档](https://bem.info/)
- [文档](https://blog.csdn.net/swl979623074/article/details/138091431)

## 除了`screen`， @media 其它的属性

- all<br>
适用于所有设备。
- print<br>
为了加载合适的文档到当前使用的可视窗口. 需要提前咨询 paged media（媒体屏幕尺寸）, 以满足个别设备网页尺寸不匹配等问题。
- screen<br>
主要适用于彩色的电脑屏幕
- speech<br>
解析speech这个合成器. 注意: CSS2已经有一个相似的媒体类型叫aural.<br>
<https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media>
