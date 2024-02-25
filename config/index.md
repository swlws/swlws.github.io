---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

head:
  - - meta
    - name: author
      content: swlws
  - - meta
    - name: keywords
      content: swlws 双周回顾

hero:
  # name: "swlws"
  text: 安安静静的小世界
  tagline: 输出、分享、推广
  actions:
    - theme: brand
      text: 双周回顾#006 这三个月
      link: /week/006/readme
    - theme: alt
      text: 一次特殊的项目开发过程
      link: /date/202312/一次特殊的项目开发过程

features:
  - title: 每日
    details: 每日随意记录，开发过程中的踩坑记录、经验总结
  - title: 周
    details: 固定双周回顾（不出意外的话），回顾经历、总结成长、展望未来
  - title: 工具
    details: 小工具
---

---

::: tip 埃隆·马斯克

对于所有曾被我冒犯的人，我只想对你们说，我重新发明了电动车，我要用火箭飞船把人类送上火星。

可我要是个冷静、随和的普通人，你们觉得我还能做到这些吗？

:::

::: warning 史蒂夫·乔布斯

只有疯狂到认为自己可以改变世界的人才能改变世界。

:::

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/swlws.png',
    name: 'swlws',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/swlws' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />

---

<footer style="text-align: center">
  <img style="display: inline-block" src="/static/wechat_article.jpg" alt="" />
  <p>微信公众号</p>
</footer>
