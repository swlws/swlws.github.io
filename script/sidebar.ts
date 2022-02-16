// https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
export default {
  // 设置/front/路由下的侧边栏
  "/front/": [
    // 第一个分组，名为front
    // front分组下有一个子页面
    { text: "TS", collapsible: true, children: ["/front/ts/code.md"] },
    {
      text: "通信",
      collapsible: true,
      children: ["/front/tab-message.md"],
    },
    {
      text: "计算机网路",
      collapsible: true,
      link: "/front/network/",
      children: [
        "/front/network/concept.md",
        "/front/network/2-link-layer.md",
        "/front/network/3-network-layer.md",
        "/front/network/4-transport-layer.md",
      ],
    },
  ],
  "/secure/": [{ text: "概览", link: "/secure/" }, "/secure/out-net-scan.md"],
};
