import { defineUserConfig } from "vuepress";
import plugins from "./script/plugins";
import navbar from "./script/navbar";
import sidebar from "./script/sidebar";

export default defineUserConfig({
  base: "/",
  title: "CodeLife",
  description: "Code Life",
  lang: "zh-CN",
  plugins,
  theme: "@vuepress/theme-default",
  themeConfig: {
    repo: "https://github.com/swlws",
    navbar,
    sidebar,
    // 设置根据页面标题自动生成的侧边栏的最大深度。
    sidebarDepth: 12,
    docsRepo: true,
    lastUpdated: true,
    contributors: true,
  },
});