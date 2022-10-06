# Babel

需要搞懂的问题：

1. Bebal 是啥，做了什么事？
2. 为啥需要使用 Babel？它带来了什么收益？
3. Babel 怎么与项目集成？

## 做了啥

Babel 是一个工具链，主要用于在当前和旧的浏览器或环境中，将 ECMAScript 2015+ 代码转换为 JavaScript 向后兼容版本的代码

- Babel 可以删除类型注释，可以安装 TypeScript 来使用类型检查

## 依赖模块

`@babel/core`：Babel 的核心模块，负责编译代码

`@babel/env`：预定义的解析规则，用于编译 ES2015+ 语法

`@babel/cli`：Babel 的命令行接口

## 配置文件

- `babel.config.json`。使用场景：一个单体式仓库；想要编译 node_modules。
- `.babelrc.json`。使用场景：仅适用于项目的单个部分

优先级： babel.config.json < .babelrc < @babel/cli 可编程选项
