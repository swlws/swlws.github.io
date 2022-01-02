export const themeData = {
  "repo": "https://github.com/swlws",
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Web",
      "link": "/web/"
    },
    {
      "text": "Tool",
      "link": "/tool/"
    }
  ],
  "sidebar": {
    "/web/": [
      {
        "text": "概览",
        "link": "/web/"
      },
      {
        "text": "通信",
        "collapsible": true,
        "children": [
          "/web/tab-message.md"
        ]
      }
    ],
    "/tool/": [
      {
        "text": "概览",
        "link": "/tool/"
      },
      "/tool/id.md"
    ]
  },
  "sidebarDepth": 12,
  "docsRepo": true,
  "lastUpdated": true,
  "contributors": true,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
