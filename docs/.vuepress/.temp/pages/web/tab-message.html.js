export const data = {
  "key": "v-e168db84",
  "path": "/web/tab-message.html",
  "title": "Web 间通信",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、场景",
      "slug": "一、场景",
      "children": []
    },
    {
      "level": 2,
      "title": "二、同源网站下 Tab 页间的通信方式",
      "slug": "二、同源网站下-tab-页间的通信方式",
      "children": [
        {
          "level": 3,
          "title": "2.1 window.postMessge",
          "slug": "_2-1-window-postmessge",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 BroadCast Channel",
          "slug": "_2-2-broadcast-channel",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 Service Worker",
          "slug": "_2-3-service-worker",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 LocalStorage",
          "slug": "_2-4-localstorage",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2.5 IndexedDB",
      "slug": "_2-5-indexeddb",
      "children": []
    },
    {
      "level": 2,
      "title": "三、非同源页面间的通信",
      "slug": "三、非同源页面间的通信",
      "children": [
        {
          "level": 3,
          "title": "3.1 iframe",
          "slug": "_3-1-iframe",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "web/tab-message.md"
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
