# Webpack 系列

## 动态导入的问题

```js
// 第一种写法，Webpack 会发出报错
const moduleName = '@/src/components/HelloWorld.vue'
import(moduleName)

// 第二种写法，webpack 执行正常
const moduleName = 'HelloWorld'
import(`@/src/components/${moduleName}.vue`)
```

在Webpack中，`import() 函数`是用来`动态加载`模块的，但是在使用动态导入时，Webpack 需要在`编译时`就知道要加载的模块路径。

在第一个代码示例中，moduleName 是一个变量，Webpack 在`编译时`无法确定 moduleName 的值是什么，因此无法静态分析模块路径，这就导致了报错。

在第二个代码示例中，moduleName 是一个字符串，Webpack 在`编译时`可以通过`字符串插值`确定模块路径，因此不会报错。

## url-loader

webpack 中导入图片时，当图片小于 1 Kb 时，`url-loader` 会将图片转为 base64

这种策略的目的，性能优化，减少 HTTP 次数

默认值是 1 Kb, 可以通过配置参数，增大阈值，或者配置为 -1 ，不启用此策略

webpack url-loader: <https://v4.webpack.docschina.org/loaders/url-loader/#limit>
