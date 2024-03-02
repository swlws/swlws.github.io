---
outline: deep

head:
  - - meta
    - name: author
      content: swlws
  - - meta
    - name: description
      content: 双周回顾
  - - meta
    - name: keywords
      content: swlws 双周回顾 文昌阁 前端 后端 xss SonarQube SonarLint wakeLock NoSleep

date: 2024/2/26
---

# 双周回顾#007 - 前端与后端

![route](./img/岔路口.jpeg)

前端的问题不是难，而是它面对最终用户。只要用户的喜好和口味发生变化，前端就必须跟上。

这导致前端不得不快速变化，因为用户的口味正在越来越快地改变。

后端不需要面对最终用户，需要解决的都是一些经典的计算机科学问题，比如算法和数据结构。这些问题很少变化，可以利用以前的研究成果，所以变化速度慢得多。

## 价值

### AIGC

元宵节当天与朋友畅聊，他建议公司要引入 AIGC，用它做什么不重要，重要的是要去主动的拥抱它。AI 是趋势，是未来！！

[GPT](https://openai.com/chatgpt)、[SORA](https://openai.com/sora)，AI 发展的如此之快，一年之后、三年之后、五年之后，这个世界的运行模式会变成什么样呢？

## 文章

### [Web Component 转图片](https://swlws.github.io/date/202403/clone-node-deep.html)

当前主流的 `HTML 转图片` 的方式是利用 `svg 的 foreignObject` 特性实现，当 HTML 中遭遇 `Web Component` 时，会导致 `Web Component` 无法正常显示。

[@swl/clone-node-deep](https://www.npmjs.com/package/@swl/clone-node-deep)通过降级方案解决 `Web Component` 的兼容

## 工具

### XSS 问题的解决方案

Web 中 XSS 攻击是个长谈的话题，基本的原理大家都知晓，那应该如何防御呢？

重复的造轮子吗？不再需要造轮子了，或许你仅需要一个[DOMPurify](https://github.com/cure53/DOMPurify)

### SonarQube - Code Review 神器

[sonarqube](https://docs.sonarsource.com/sonarqube/9.9/) 是一个自我管理的自动代码审查工具，支持 30+编程语言，可以系统地帮助您提供干净的代码。该工具的能力：

- 代码重复率检测
- 代码圈复杂度检测
- 异味代码检测
- ...

通常使用此工具定位上述的三个问题。

它支持可视化的界面展示，同时也提供了 [SCode 插件 - sonarlint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

### [NoSleep.js](https://github.com/richtr/NoSleep.js/blob/master/src/index.js)

防止电脑进入休眠模式，通常你会怎么操作呢？

一个奇思妙想，通过浏览器控制设备的休眠状态，它的原理：

- 方案一：一个隐藏的、不停止的视频播放器
- 方案二：利用 `navigator` 提供的 `wakeLock`，阻止屏幕熄屏

在线演示：[www.keepscreenon.com](https://www.keepscreenon.com/)

## 生活

### 文昌阁

静极思动，搜索了下周边的景点，看到一个文昌阁，兴之所至，败兴而归。

<center>

![文昌阁](./img/文昌阁.png)

</center>
