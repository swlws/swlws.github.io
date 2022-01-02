export const data = {
  "key": "v-6d579c06",
  "path": "/web/http/11.html",
  "title": "http 通信",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "hello world",
      "slug": "hello-world",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "web/http/11.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
