# Web 踩坑经验

1. 文字偶现乱码：

现象：通过 css 属性 content 填充的文字，偶尔会显示成乱码。

解决：是将文字改为 unicode 编码，例如 content: '展开' 应改为 content: ''\5c55\5f00''；

2. 符号”_“偶现不显示：

现象：文字父容器设置了 overflow: hidden，在窗口缩放时，缩放到一定比例（不同显示器不一样）会发现"_"消看不见了。

原因：猜测可能是浏览器底层渲染时，对不足1px的内容发生了偏移导致，在特定屏幕特定缩放率下会导致”_“向下偏移了1个像素，加上父容器设置了 overflow: hidden，所及就看不见了。

解决：对文字增加样式 padding-bottom: 1px 即可解决此类问题，修改后怎么缩放都不会再消失。