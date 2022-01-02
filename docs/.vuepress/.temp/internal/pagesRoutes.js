import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Welcome"},["/index.html","/readme.md"]],
  ["v-1a4400a0","/tool/id.html",{"title":"随机 ID 生成器"},["/tool/id","/tool/id.md"]],
  ["v-1559ca3e","/tool/",{"title":"Tool"},["/tool/index.html","/tool/readme.md"]],
  ["v-744e6dd4","/web/",{"title":"概览"},["/web/index.html","/web/readme.md"]],
  ["v-e168db84","/web/tab-message.html",{"title":"Web 间通信"},["/web/tab-message","/web/tab-message.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
