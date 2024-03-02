// import { defineConfig } from "vitepress";

// https://github.com/emersonbottero/vitepress-plugin-mermaid
import { withMermaid } from "vitepress-plugin-mermaid";

import dateJson from "./json/date.json";
import weekJson from "./json/week.json";

withMermaid({});

// https://vitepress.dev/reference/site-config
// https://github.com/emersonbottero/vitepress-plugin-mermaid
export default withMermaid({
  // your existing vitepress config...
  // optionally, you can pass MermaidConfig
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },

  title: "swlws",
  description: "安安静静的小世界",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://www.github.com/swlws.png",
      },
    ],
  ],
  lastUpdated: false,
  lang: "en-US",
  ignoreDeadLinks: true,
  outDir: "../docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://www.github.com/swlws.png",

    nav: [
      { text: "主页", link: "/" },
      { text: "每日", link: dateJson[0].items[0].link },
      { text: "双周", link: weekJson[0].link },
      { text: "WeLink", link: "https://swlws.github.io/WeLink/" },
      // { text: "工具", link: "/tool" },
    ],

    sidebar: {
      "/date": dateJson,
      "/week": weekJson,
      "/tool": [],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/swlws" },
      {
        icon: {
          svg: `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1708838653601" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1491" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M0 0h1024v1024H0z" fill="#FF6633" p-id="1492"></path><path d="M698.9824 42.3936c-158.8736-32.5632-289.536 31.2832-324.9152 48.5888-94.72 46.2848-147.712 108.288-174.4896 140.288-25.9584 31.0272-82.7392 105.9328-108.288 215.8592-21.6576 93.1328-10.752 167.7824-6.0416 194.2528 11.4688 64.3072 33.28 186.88 150.4256 275.2 132.5056 99.8912 293.4784 85.5552 342.9888 80.9472 107.264-10.0352 289.4848-57.2928 300.8512-145.7152 5.1712-39.936-24.4224-89.4464-66.2016-102.5024-65.6384-20.5312-108.3392 63.5392-228.6592 80.9472-8.5504 1.2288-126.5664 16.6912-216.6272-48.5888-105.8816-76.6976-98.9696-211.3024-96.256-264.3968 1.536-30.5664 5.5808-93.5424 48.128-161.8944 14.7968-23.7568 60.3136-94.5664 156.4672-134.912 25.2928-10.5984 76.8512-31.5904 144.4352-26.9824 70.0416 4.7616 120.9856 34.5088 144.4352 48.5888 75.8272 45.4144 86.528 90.0608 120.3712 86.3232 35.8912-3.9424 69.9904-59.2896 66.2016-107.9296-7.424-93.7984-155.5968-158.1056-252.8256-178.0736z" fill="#FFFFFF" p-id="1493"></path></svg>`,
        },
        link: "https://blog.csdn.net/swl979623074",
      },
    ],

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2020-present swlws",
    },
  },
});
