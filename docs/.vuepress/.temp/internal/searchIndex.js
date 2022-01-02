export const searchIndex = [
  {
    "title": "Welcome",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "随机 ID 生成器",
    "headers": [
      {
        "level": 2,
        "title": "UUID-V4",
        "slug": "uuid-v4",
        "children": []
      }
    ],
    "path": "/tool/id.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Tool",
    "headers": [],
    "path": "/tool/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "概览",
    "headers": [],
    "path": "/web/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Web 间通信",
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
    "path": "/web/tab-message.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
