import path from "path";
import { PluginConfig, PluginOptions } from "@vuepress/core";

const plugins: PluginConfig<PluginOptions>[] = [
  [
    "@vuepress/register-components",
    {
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html#componentsdir
      componentsDir: path.resolve(__dirname, "..", "src", "view"),
      componentsPatterns: ["**/index.vue"],
      getComponentName: (filename) => {
        console.log(filename);
        return filename.replace("/index.vue", "");
      },
    },
  ],
  [
    "@vuepress/plugin-search",
    {
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    },
  ],
];

export default plugins;
