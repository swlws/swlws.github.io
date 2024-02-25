import{_ as a,c as e,o as n,a2 as i}from"./chunks/framework.aTtkxbT6.js";const s=JSON.parse('{"title":"【微前端】qiankun","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"date/202303/qiankun.md","filePath":"date/202303/qiankun.md","lastUpdated":null}'),l={name:"date/202303/qiankun.md"},o=i('<h1 id="【微前端】qiankun" tabindex="-1">【微前端】qiankun <a class="header-anchor" href="#【微前端】qiankun" aria-label="Permalink to &quot;【微前端】qiankun&quot;">​</a></h1><p>专栏：</p><ul><li><a href="https://blog.csdn.net/swl979623074/article/details/129648756" target="_blank" rel="noreferrer">【微前端】什么是微前端</a></li><li><a href="https://blog.csdn.net/swl979623074/article/details/129649129" target="_blank" rel="noreferrer">【微前端】qiankun</a></li><li><a href="https://blog.csdn.net/swl979623074/article/details/129651079" target="_blank" rel="noreferrer">【微前端】qiankun + vite + vue</a></li></ul><p>目录：</p><ul><li>[一、qiankun 是什么](#一、qiankun 是什么)</li><li>[二、qiankun 的设计思路](#二、qiankun 的设计思路)</li><li>[三、qiankun 的子应用切换原理](#三、qiankun 的子应用切换原理)</li><li><a href="#四、沙箱机制">四、沙箱机制</a></li><li><a href="#五、优劣点">五、优劣点</a></li></ul><h2 id="一、qiankun-是什么" tabindex="-1">一、qiankun 是什么 <a class="header-anchor" href="#一、qiankun-是什么" aria-label="Permalink to &quot;一、qiankun 是什么&quot;">​</a></h2><p><code>qiankun</code>是一种前端微服务架构，旨在解决大型复杂应用的拆分和管理问题。</p><h2 id="二、qiankun-的设计思路" tabindex="-1">二、qiankun 的设计思路 <a class="header-anchor" href="#二、qiankun-的设计思路" aria-label="Permalink to &quot;二、qiankun 的设计思路&quot;">​</a></h2><p><code>qiankun</code>的设计思路是基于“微服务”架构和“大前端”思想的，通过拆分前端应用、动态加载、状态共享、兼容性和稳定性等特性，帮助开发者构建复杂的前端应用，并实现快速、稳定、可扩展的部署和管理。</p><p>它的设计思路主要包括以下几个方面：</p><h3 id="_2-1-从大前端角度出发" tabindex="-1">2.1 从大前端角度出发 <a class="header-anchor" href="#_2-1-从大前端角度出发" aria-label="Permalink to &quot;2.1 从大前端角度出发&quot;">​</a></h3><p><code>qiankun</code>从<code>大前端</code>的角度出发，将前端应用分为多个子应用，每个子应用相对独立，可以单独部署、独立运行。</p><p>这种方式类似于<code>微服务</code>架构，将前端应用拆分成多个小块，降低了整个应用的耦合度和复杂度。</p><h3 id="_2-2-基于路由的动态加载" tabindex="-1">2.2 基于路由的动态加载 <a class="header-anchor" href="#_2-2-基于路由的动态加载" aria-label="Permalink to &quot;2.2 基于路由的动态加载&quot;">​</a></h3><p><code>qiankun</code>的路由系统可以实现根据路由动态加载子应用。</p><p>在用户访问不同的页面时，<code>qiankun</code>会根据当前页面的路由信息动态加载相应的子应用，从而实现多个子应用的集成。</p><h3 id="_2-3-统一状态管理" tabindex="-1">2.3 统一状态管理 <a class="header-anchor" href="#_2-3-统一状态管理" aria-label="Permalink to &quot;2.3 统一状态管理&quot;">​</a></h3><p><code>qiankun</code>通过提供一个全局状态管理器来实现多个子应用之间的状态共享。</p><p>子应用可以将自己的状态注册到全局状态管理器中，并在需要的时候获取全局状态，从而实现子应用之间的数据交换和共享。</p><h3 id="_2-4-兼容性和稳定性" tabindex="-1">2.4 兼容性和稳定性 <a class="header-anchor" href="#_2-4-兼容性和稳定性" aria-label="Permalink to &quot;2.4 兼容性和稳定性&quot;">​</a></h3><p><code>qiankun</code>采用了“双向通信”技术来实现子应用之间的通信，同时也提供了多种兼容性解决方案，可以在不同的浏览器和环境中运行，从而保证了整个应用的稳定性和兼容性。</p><h2 id="三、qiankun-的子应用切换原理" tabindex="-1">三、qiankun 的子应用切换原理 <a class="header-anchor" href="#三、qiankun-的子应用切换原理" aria-label="Permalink to &quot;三、qiankun 的子应用切换原理&quot;">​</a></h2><p><code>qiankun</code>的应用切换原理是通过<code>动态加载</code>、<code>应用卸载</code>和<code>挂载</code>、以及<code>全局状态共享</code>等机制来实现的。这些机制保证了多个子应用之间的隔离和独立性，同时又实现了数据和状态的共享，从而为用户提供了无缝的应用切换体验。</p><p><code>qiankun</code>的应用切换原理可以概括为以下几个步骤：</p><ol><li><code>qiankun</code>主应用加载</li></ol><p>当用户访问<code>qiankun</code>主应用时，<code>qiankun</code>主应用会被加载和初始化。</p><p>在这个过程中，<code>qiankun</code>主应用会根据预定义的子应用列表（包括子应用的名称、入口文件路径、路由等信息）来预加载子应用的代码和资源文件。</p><ol start="2"><li>子应用懒加载</li></ol><p>当用户访问某个子应用时，<code>qiankun</code>主应用会根据路由信息动态加载相应的子应用。</p><p>这个过程中，<code>qiankun</code>会先检查子应用是否已经加载过，如果没有加载过，则会懒加载相应的子应用代码和资源文件。</p><ol start="3"><li>应用切换</li></ol><p>当用户从一个子应用切换到另一个子应用时，<code>qiankun</code>会首先将当前子应用卸载，并清除其对应的 DOM 节点和事件监听器。然后，<code>qiankun</code>会加载新的子应用，并将其挂载到 DOM 节点上，同时调用子应用的生命周期函数来初始化新的应用。</p><ol start="4"><li>全局状态共享</li></ol><p><code>qiankun</code>提供了一个全局状态管理器来实现子应用之间的状态共享。</p><p>当用户从一个子应用切换到另一个子应用时，<code>qiankun</code>会自动将当前子应用的状态保存到全局状态管理器中，然后再将新的子应用的状态从全局状态管理器中获取并更新到新的子应用中。</p><h2 id="四、沙箱机制" tabindex="-1">四、沙箱机制 <a class="header-anchor" href="#四、沙箱机制" aria-label="Permalink to &quot;四、沙箱机制&quot;">​</a></h2><p>为了避免不同子应用之间的代码冲突和安全问题，采用了沙箱机制来隔离不同子应用的代码执行环境。具体来说，<code>qiankun</code>沙箱机制主要有以下几个方面：</p><ul><li>应用级别的沙箱</li></ul><p><code>qiankun</code>将每个子应用都视为一个独立的应用，每个子应用都有自己的独立沙箱环境，因此每个子应用都可以独立运行、独立调试、独立部署，互不影响。</p><ul><li>模块级别的沙箱</li></ul><p>在子应用中，<code>qiankun</code>会使用自定义的模块加载器来加载和执行子应用的代码，这些代码都运行在独立的模块沙箱环境中，避免了子应用之间的代码污染和冲突。</p><ul><li>样式隔离</li></ul><p><code>qiankun</code>还提供了样式隔离机制，可以在不同子应用之间隔离样式，避免了样式冲突的问题。</p><ul><li>生命周期隔离</li></ul><p>在<code>qiankun</code>中，每个子应用都有自己的生命周期管理机制，这些生命周期钩子函数运行在独立的沙箱环境中，避免了子应用之间的生命周期冲突和影响。</p><p><code>qiankun</code>的沙箱机制可以有效地隔离不同子应用之间的代码执行环境，避免了代码冲突和安全问题。开发者可以放心地在<code>qiankun</code>架构下开发和部署多个子应用，并且不必担心子应用之间的代码污染和冲突问题。</p><h2 id="五、优劣点" tabindex="-1">五、优劣点 <a class="header-anchor" href="#五、优劣点" aria-label="Permalink to &quot;五、优劣点&quot;">​</a></h2><ul><li>优势 <ul><li>模块化</li><li>动态加载</li><li>全局状态管理</li><li>兼容性和稳定性</li></ul></li><li>劣势 <ul><li>复杂性：工程复杂，主应用、子应用。</li><li>调试困难：多个子应用之间存在状态共享时，调试困难。</li><li>性能问题：在网络条件不佳的情况下，动态加载可能会导致用户等待时间过长。</li><li>安全性：跨站点脚本攻击（XSS）和跨站点请求伪造（CSRF）等。</li></ul></li></ul>',48),d=[o];function c(t,u,r,q,k,p){return n(),e("div",null,d)}const _=a(l,[["render",c]]);export{s as __pageData,_ as default};
