export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Welcome",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "lang": "zh-CN",
    "title": "Welcome",
    "actions": [
      {
        "text": "Go Into",
        "link": "/base/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "Basic",
        "details": "Some Basic Knowledge"
      },
      {
        "title": "Vue",
        "details": "Vue Code"
      },
      {
        "title": "Tool",
        "details": "Some simple and no serve tool"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present swlws"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "readme.md"
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
