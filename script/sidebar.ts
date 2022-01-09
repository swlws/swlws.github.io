// https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
export default {
  // 设置/web/路由下的侧边栏
  "/web/": [
    // 第一个分组，名为WEB
    // Web分组下有一个子页面
    { text: "概览", link: "/web/" },
    {
      text: "通信",
      collapsible: true,
      children: ["/web/tab-message.md"],
    },
  ],
  "/secure/": [
    { text: "概览", link: "/secure/" },
    "/secure/out-net-scan.md",
    // {
    //   text: "外网探测",
    //   link: "/secure/out-net-scan.md",
    // },
  ],
  "/tool/": [{ text: "概览", link: "/tool/" }, "/tool/id.md"],
};
