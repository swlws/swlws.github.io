import{_ as t,c as a,o as e,a2 as o}from"./chunks/framework.aTtkxbT6.js";const b=JSON.parse('{"title":"算法图解","description":"","frontmatter":{},"headers":[],"relativePath":"book/算法图解.md","filePath":"book/算法图解.md"}'),d={name:"book/算法图解.md"},r=o('<h1 id="算法图解" tabindex="-1">算法图解 <a class="header-anchor" href="#算法图解" aria-label="Permalink to &quot;算法图解&quot;">​</a></h1><h2 id="大o表示法" tabindex="-1">大O表示法 <a class="header-anchor" href="#大o表示法" aria-label="Permalink to &quot;大O表示法&quot;">​</a></h2><p>大 O 表示法指出了最糟糕情况下的运行时间</p><ul><li>算法的速度指的并非时间，而是操作数的增速。</li><li>谈论算法的速度时，我们说的是随着输入的增加，其运行时间将以什么样的速度增加。</li><li>算法的运行时间用大O表示法表示。</li><li>O(logn)比O(n)快，当需要搜索的元素越多时，前者比后者快得越多。</li></ul><p>旅行商问题，它的时间复杂度为 O(n!)</p><h2 id="链表和数组" tabindex="-1">链表和数组 <a class="header-anchor" href="#链表和数组" aria-label="Permalink to &quot;链表和数组&quot;">​</a></h2><p>链表擅长插入和删除，数组擅长随机访问</p><p>常见数组和链表操作的运行时间：</p><table><thead><tr><th></th><th>数组</th><th>链表</th></tr></thead><tbody><tr><td>读取</td><td>O(1)</td><td>O(n)</td></tr><tr><td>插入</td><td>O(n)</td><td>O(1)</td></tr><tr><td>删除</td><td>O(n)</td><td>O(1)</td></tr></tbody></table>',9),l=[r];function i(n,_,h,s,c,p){return e(),a("div",null,l)}const u=t(d,[["render",i]]);export{b as __pageData,u as default};
