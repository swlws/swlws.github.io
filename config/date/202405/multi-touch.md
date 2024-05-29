---
outline: deep

head:
  - - meta
    - name: author
      content: swlws
  - - meta
    - name: description
      content: 多点触碰
  - - meta
    - name: keywords
      content: swlws multi touch 多点触碰
---


# 多点触碰

触摸屏能够同时触发多个位置的点击事件，这种功能称为多点触控（Multi-Touch）。

多点触控技术允许用户使用多个手指同时与设备交互，支持手势操作如缩放、旋转等。
实现这种功能的关键在于硬件和软件的协同工作。

以下是实现多点触控的主要步骤和原理：

- 硬件支持
  - 触摸屏类型：现代多点触控设备通常使用电容式触摸屏，这种触摸屏可以检测多个触点，并精确感知触摸位置和触摸压力。
  - 触摸传感器：这些传感器能够感知多个触点的电荷变化，并将这些信息传递给触摸控制器。
- 软件支持
  - 触摸控制器和驱动程序：触摸控制器处理来自触摸传感器的数据，将其转化为数字信号，并通过驱动程序传递给操作系统。
  - 操作系统：现代操作系统（如Android、iOS、Windows等）内置了多点触控支持，能够处理和解释多点触摸事件。
  - 应用程序开发：开发者可以使用操作系统提供的API来处理多点触控事件。例如，在移动应用开发中，Android提供了MotionEvent类，而iOS提供了UITouch类，供开发者识别和处理多点触摸。

在Web大屏场景中解决多点触控问题，可以采用HTML5和JavaScript结合的方式来实现。主要是通过监听触摸事件（Touch Events）来处理多点触控。

确保设备支持多点触控
 大多数现代触摸屏设备和浏览器都支持多点触控。需要确保设备支持触摸事件，可以使用JavaScript检测设备是否支持触摸。

## 虚拟摇杆

 设置多个热区检测触碰事件

 [开源库-nipplejs](https://yoannmoi.net/nipplejs/)

## 多点触碰

### 设备检测

 [在线设备多点检测]<https://cps-check.com/cn/multi-touch-test>

 iPhone 11 同时最多支持 5 个点

[原理文档](https://blog.csdn.net/qq_21197033/article/details/128314345)

### 开源库

- [百度手势库-hammerjs](https://hammerjs.github.io/)
- [腾讯-AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)
- [移动端七个手势库](https://cloud.tencent.com/developer/article/1141418)

### 在线演示

- <https://alloyteam.github.io/AlloyFinger/example/picture/>
