---
outline: deep

head:
  - - meta
    - name: author
      content: swlws
  - - meta
    - name: description
      content: CSS 命名规范
  - - meta
    - name: keywords
      content: swlws css 命名规范 bem
---

# CSS 命名规范 - BEM

## 规范化命名

CSS 的选择器按照规范命名的优点：

1. 提高代码的 **可读性** 和 **可维护性**
2. 提高 **可重用性**
3. 可以有效地避免组件或模块间样式的相互污染，减少嵌套层级

## BEM 格式

```css
[prefix]-[block]__[element]--[modifier]
```

- Prefix。全局前缀，比如 ElementUI 的前缀为 el
- 块（Block）：块是指页面上的独立组件或模块，它们是页面的一部分并且有自己的意义。比如，一个导航栏、一个按钮、一个表单等都可以作为一个块。
- 元素（Element）：元素是块的组成部分，它们不能单独存在，并且依赖于块的存在。元素在块的范围内起作用，用以描述块的不同部分。比如，导航栏的链接、按钮的图标等都可以作为元素。
- 修饰符（Modifier）：修饰符用于定义块或元素的外观、状态或行为的变化。它们允许我们为相同的块或元素提供不同的变体，而无需改变其名称。比如，按钮可以有不同的大小、颜色或状态（如激活或禁用），这些可以通过修饰符来表示。

## BEM 命名规则

以示例讲述

### 1. 无子元素和修饰类的块

```html
<style>
.el-btn {}
</style>

<button class="el-btn"></button>
```

### 2. 包含子元素的元素

稍微复杂的结构通常有子元素。

- 每个需要设置样式的子元素必须包含一个类名。
- 不要省略 HTML 中子元素的类名，否则会对组件中的元素使用更高权重的选择器。BEM 目的之一是保持样式一致和较低的权重值
- 如果结构具有多个层级的子元素，类名无需反映出每个层级，表示组件中子元素的 BEM 类名只需包含块名和元素名

```html
<!-- GOOD -->
<style>
  .el-card { }
  .el-card__title { }
  .el-card__description { }
</style>
<div class="el-card">
  <h1 class="el-card__title"></h1>
  <p class="el-card__description"></p>
</div>
```

```html
<!-- BAD -->
<style>
  .el-card { }
  .el-card h1 { }
  .el-card p { }
</style>
<div class="el-card">
  <h1></p>
  <p></p>
</div>
```

### 3. 含修饰类的元素

在某些情况下，你可能希望更改组件中的单个元素的样式，基于修饰类调整元素样式。在这种情况下，可以在元素上添加修饰类。

**修饰类不能单独使用**。修饰类旨在增强而非替代基类。

```html
<style>
  .el-card { }
  .el-card__title { }
  .el-card__title--big { }
</style>

<div class="el-card">
  <h1 class="el-card__title el-card__title--big"></h1>
</div>
```

### 4. 状态

很多组件具有多种状态，比如 tab 组件有激活状态、禁用状态。

- 使用独立的状态钩子来表示状态，状态类名以 el-is- 开头，推荐使用的状态类名（见附）供君选用
- 设置状态样式时，状态类名必须与其作用的元素类名或者块类名联合使用 **（.a.b 形式）**，不能使用后代选择器、子选择器等其他方式设置样式，以减小对全局样式的污染
- 修饰类的作用是用来表示组件的另外一个变体，而非另外一种状态，所以状态 **不使用** 修饰符的形式（如 el-tabs__tab-disabled）

```html
<!-- GOOD -->
<style>
  .el-tabs { }
  .el-tabs__tab { }
  .el-tabs__tab-name.el-is-active { }
  .el-tabs__tab-name.el-is-disabled { }
</style>
<ul class="el-tabs">
    <li class="el-tabs__item">
        <a href="" class="el-tabs__tab-name el-is-active">tab 1</a>
    </li>
    <li class="el-tabs__item">
        <a href="" class="el-tabstab-name el-is-disabled">tab 2</a>
    </li>
    <li class="el-tabs__item">
        <a href="" class="el-tabstab-name">tab 3</a>
    </li>
</ul>
```

## 常见类名

### 状态类

|状态 |类名 |
|--|--|
|加载 |el-is-loading |
|禁用 |el-is-disabled |
|成功 |el-is-success |
|报错 |el-is-error |
|警告 |el-is-warning |
|聚焦 |el-is-focused |
|选中 |el-is-selected |
|勾选 |el-is-checked |
|关闭 |el-is-closable |
|激活 |el-is-active |
|当前项 |el-is-current |
|隐藏/显示 |el-is-hidden/el-is-visible |
|展开/折叠 |el-is-expanded/el-is-collapsed |
|对齐方式 |el-align-center/el-align-left/el-align-right|

### 尺寸类

|尺寸 |类名 |
|--|--|
|较小 |el-size-xs |
|小 |el-size-s |
|中（默认） |el-size-m |
|大 |el-size-l |
|较大 |el-size-xl |
|高度100% |el-size-full-height |
|宽度100% |el-size-full-width |
|宽度自适应 |el-size-auto-width|
