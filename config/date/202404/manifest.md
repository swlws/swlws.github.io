# 如何动态生成一个 manifest.json

## mainfest.json

`manifest.json` 文件通常包含有关 Web 应用程序的元数据信息，这些信息会影响到浏览器如何展示和处理这个应用程序。常见的信息包括：

- name：应用程序的名称。
- short_name：应用程序的简短名称，通常用于手机屏幕上的应用程序图标。
- start_url：应用程序启动时加载的 URL。
- display：定义应用程序的显示模式，如 "fullscreen"、"standalone"、"minimal-ui" 等。
- background_color：应用程序启动时的背景颜色。
- theme_color：应用程序的主题颜色，影响浏览器工具栏、状态栏等。
- icons：包含各种尺寸的图标，用于不同的设备和分辨率。
- scope：应用程序的范围，指定了应用程序可以控制的 URL 范围。
- description：应用程序的描述信息。
- categories：应用程序所属的分类，用于 App Stores 等。
- lang：应用程序使用的语言。
- orientation：应用程序的方向，如 "landscape" 或 "portrait"。
- prefer_related_applications：指示是否更喜欢用户使用相关的本机应用程序，而不是 Web 应用程序。
- related_applications：如果应用程序有相关的本机应用程序，则提供相关应用程序的信息。

## 利用 Webpack 的特性生成文件

Webpack 编译完成阶段，生成一个  manifest.json 文件

```js
class MakeManifestPlugin {
  constructor(options) {
    this.opts = options
  }
 
  apply (compiler) {
    const _this = this
    // webpack4
    if (compiler.plugin) {
      // 完成输出事件
      compiler.plugin('after-emit', function (compilation, done) {
        _this.generateVersion()
        done()
      })
      return
    }

    // webpack5
    compiler.hooks.compile.tap('MakeManifestPlugin', (compilation) => {
      _this.generateVersion()
    })
  }
 
  generateVersion () {
    fs.writeFile('public/manifest.json', JSON.stringify(this.opts), function (err) {
      if (err) {
        return err
      }
    })
  }
}
```

使用插件

```js
{
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
        config.plugins.push(
            new GenerateVersionPlugin({
            version,
            isOpenVersion
            })
        )
        }
  }
}
```

## 使用 manifest.json 做什么

### 提醒用户刷新浏览器

现在有了版本号信息，就可以主动判断是否需要最新的资源了。当版本号发生变换时，页面提醒用户有新版本发布，请刷新浏览器。

### 优化缓存文件

通常针对为了获取最新鲜的静态资源，会有如下写法：

```js
const now = new Date().getTime()

const url = `https://www.unpkg.com/browse/react@16.7.0/index.js?t=${now}`
```

不是所有的静态都需要时刻最新，合理运用缓存。当版本发生变化时，再拿最新的资源。

```js
const url = `https://www.unpkg.com/browse/react@16.7.0/index.js?v=${version}`
```
