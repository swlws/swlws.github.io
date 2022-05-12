# 浅谈 ASM

ASM 全称为 Attack Surface Management(ASM)，是由 Gartner 在 2021 年 7 月 14 日发布《2021 安全运营技术成熟度曲线》提出的概念。

带着疑问阅读：

- ToB 中的资产？
- ASM 是什么？
- ASM 要解决什么问题？
- ASM 带来了什么价值？
- ASM 的核心能力？
- ASM 产品有哪些？

## ToB 中的资产

谈 ASM 之前，先聊下资产。在 ToB 中资产的分类，大致可以分为四类：

- 已知资产。指一个组织明确知道、并在管理中的资产。如 Web 站点、服务。
- 未知资产。通常指影子资产，这类不被组织机构感知、管理的。比如被遗忘的网络站点、服务等。
- 供应商资产。来自第三方厂商、或者伙伴公司的资产。
- 附属资产。属于同一个组织，但来自于合并或收购的附属公司的资产。可能是已知资产、未知资产、厂商资产。

按照部署方式，可以划分为：

- 本地资产
- 云资产

再细分的话，可以化为：

- 操作系统。Windows、Linux...
- 硬件信息。主板、硬盘、内存条...
- 指纹。IP、Domain、Cert、端口、进程、服务...
- 应用程序。
  - 系统程序。ssh、c++...
  - 用户程序。数据库、中间件...
- Web 站点

**常见的资产收集方式：**

- CMDB
- 网络空间资产测绘，外部视角下的资产
- Agent 探针，内部视角下的资产

## 攻击面是什么

ASM 是强调从`外部攻击者的角度`，对组织机构的资产的攻击面进行持续发现、清点、分类、优先级排序和监控。

ASM 帮助组织识别暴露在互联网和攻击者的 IT 资产，并监控它们是否存在增加攻击风险的意外变化（用户提权、文件提权等）和漏洞（漏洞、补丁、基线配置、入侵等）。

从外部攻击者的角度来看，安全团队很容易根据这些资产的可攻击性级别（资产对攻击者的吸引力）确定优先级进行修复。

ASM 通常在站在外部的角度描述的，因此也被称作 EASM（External Attack Surface Management ），即外部攻击面管理。另外还有一种新型的技术 CAASM（Cyber Asset Attack Surface Management），即网络资产攻击面管理。

### 一个攻击面包含哪些东西

攻击面涉及的资产有许多种类型，它包含所有在互联网上可见的硬件、软件、SaaS、云资产等等，攻击者通过这些能够被发现、并加以利用的资产，从而达到破坏企业安全的目的。

攻击面产品 VS 资产管理产品：

- 对于一个组织机构，资产指的是其所拥有的全部的硬件、软件；
- 攻击面更倾向于描述，这个组织机构中暴露给攻击者的资产。所以，可以认为攻击面是资产的一个子集。

攻击面 VS 攻击向量（Attack Vector）：

- 攻击向量是一种方法，它用于窃取一个网络、设备的访问权限。
- 攻击面可以视为攻击向量的集合，攻击者使用攻击面，操纵网络、计算机系统，或者窃取数据。

## 哪些因素会影响攻击面

攻击面应该是一个动态的结构，每时每刻都会不一样。影响攻击面范围的因素主要有三种因素：

- 未知资产。这类不受控的资产，存在大量被攻击的潜能。
- 新发现的漏洞、补丁。权威机构机构发布的漏洞补丁信息，会直接响应攻击面的输出值。比如之前发布的 log4j 漏洞。
- 持续增加的云资产。云部署的便利性，导致最大的不受控风险。

## ASM 的价值

常见的 ToB 类的安全产品，资产管理、漏洞管理、渗透测试、红蓝对抗（BAS）等，都是从单维度解决服务器的安全问题。ASM 意图综合这些工具，将数据汇总，统一评估设备的风险信息。

ASM 产品期望带来的收益：

- 持续发现资产（已知资产、未知资产、供应商资产、附属资产），评定风险等级。
- 减少攻击面、减少不必要的响应处理。并不是漏洞就一定需要修复（广义的漏洞，包括配置项、漏洞、补丁、弱口令等），找出真正需要处理的漏洞。
- 加固网络安全态势。通过修复手段，防御网络安全。

## ASM 的核心能力

- 持续发现全方位资产。
- 动态生成攻击面。由于新设备的扩增、应用的增加、新增用户等因素，攻击面应该是一个动态的生成过程。
- 上下文检测。同一个资产在不同的 IT 环境下，它的攻击面是不相同的。需要考虑多种因素，比如一个资产，被谁拥有、在什么时间、什么位置、如何被使用，以及使用环境、使用者的 IP 地址、网络连接等信息，都可以影响攻击面。
- 评定优先级。依据资产的风险等级、安全等级，确定资产的修复优先级。这个评定是基于客观的环境，比如：一个使用了高危漏洞的 log4j 的资产，它的修复优先级可能是最低的（可能的原因，设备未联网）。
- 修复。对漏洞、补丁、配置、弱口令等的修复工作。

概括的来讲，一个理想的 ASM 产品应该具备的能力：

- 动态的自动清点资产
- 从攻击者的视角看待资产，并评估资产的风险
- 基于上下文环境、风险等级，评定处理优先级
- 动态更新攻击面
- 及时告警
- 提供 API 接口，能够集成其它的安全产品

## ASM 产品

- [UpGuard Breaksight](https://www.upguard.com/product/breachsight)
  - 偏向于数据、凭证泄露的检测，比如：S3、同步服务、Github 上的泄密信息
  - 集成能力，可以集成 RiskIQ
- [RiskIQ](https://www.riskiq.com/products/illuminate/)
  - 偏向于威胁情报
- [censys](https://censys.io/attack-surface-management/)
  - 侧重于网络攻击面管理，无内部视角的资产。
- [Elevate Security](https://elevatesecurity.com/why-elevate/)
  - 它认为 90%安全问题，是由人为操作引起的，将人的行为当作风险进行管理
- [tenable lumin](https://www.tenable.com/products/tenable-lumin)
  - 基于漏洞的 Cyber Exposure Score
- [CYCOGNITO](https://www.cycognito.com/demo-video)
  - 外部视角的 ASM

## 结束语

道高一尺，魔高一丈。网络安全中，攻击者的攻击方式永远比组织机构知道更多，我们需要做是尽可能的减少攻击面。

ASM 本质是集成各类安全产品，对已知风险的管理作出一个指引，让产品使用者能够从攻击者的视角，了解到设备具备的风险，以及哪些风险是需要及时修复的、哪些风险实际上是可以不用理会的。

ASM 是一个综合的体系，它涉及很多方面，配置、漏洞、补丁、入侵等。

产品的难点：

1. 全面的资产清点。如何清点、归类所有的资产？
2. 攻击者的视角。暴露面如何处理，什么样的资产才是被暴露的呢？攻击面如何定义？
3. 上下文。如何计算一个资产的上下文？
4. 风险评级算法。哪些因素需要加入风险的计算？

---

**Product:**

- UpGuard Breaksight https://www.upguard.com/product/breachsight
- RiskIQ https://www.riskiq.com/products/illuminate/
- Elevate Security https://elevatesecurity.com/why-elevate/
- censys https://censys.io/attack-surface-management/
- Elevate Security https://elevatesecurity.com/why-elevate/
- tenable lumin https://www.tenable.com/products/tenable-lumin
- CYCOGNITO https://www.cycognito.com/demo-video

**Reference:**

- [^1]: Top Security and Risk Management Trends for 2022 https://www.gartner.com/en/newsroom/press-releases/2022-03-07-gartner-identifies-top-security-and-risk-management-trends-for-2022
- [^2]: Randori ASM Reference https://www.randori.com/guides/attack-surface-management-the-definitive-guide/
- [^3]: UpGard ASM Reference https://www.upguard.com/blog/attack-surface-management
- [^4]: RiskIQ ASM Reference https://www.riskiq.com/what-is-attack-surface-management/
- [^5]: CrowdStrike ASM Reference https://www.crowdstrike.com/cybersecurity-101/attack-surface-management/
- [^6]: CrowdStrike's RiskIQ https://www.crowdstrike.com/falcon/2020/wp-content/uploads/2020/10/RiskIQ-Store-Partner-Solution-Brief.pdf
- [^7]: Attack Vector https://www.upguard.com/blog/attack-vector
- [^8]: 网络安全防御技术 https://websec.readthedocs.io/zh/latest/defense/index.html
- [^9]: 资产暴露面的误区 http://www.hackdig.com/07/hack-421252.htm
