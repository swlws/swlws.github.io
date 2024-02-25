import{_ as t,c as s,o as a,a2 as i}from"./chunks/framework.aTtkxbT6.js";const u=JSON.parse('{"title":"DOM 监测","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"date/202305/DOM监测.md","filePath":"date/202305/DOM监测.md","lastUpdated":null}'),e={name:"date/202305/DOM监测.md"},n=i(`<h1 id="dom-监测" tabindex="-1">DOM 监测 <a class="header-anchor" href="#dom-监测" aria-label="Permalink to &quot;DOM 监测&quot;">​</a></h1><p>如何定义<code>DOM监测</code>：</p><ul><li>新加 DOM</li><li>DOM 属性变更</li><li>移除 DOM</li></ul><p>通常有两种方式，早期使用 DOM 事件监听节点的变化，目前已不再推荐。当前推荐使用<code>MutationObserver</code>。</p><h2 id="一、dom-事件" tabindex="-1">一、DOM 事件 <a class="header-anchor" href="#一、dom-事件" aria-label="Permalink to &quot;一、DOM 事件&quot;">​</a></h2><table><thead><tr><th>事件</th><th>作用</th><th>注意事项</th></tr></thead><tbody><tr><td>DOMNodeInsertedIntoDocument</td><td>用于检测节点的插入</td><td>当 Node 被插入到 Document 时，才会触发此事件</td></tr><tr><td>DOMNodeInserted</td><td>用于检测节点的插入</td><td>当 Node 被插入到 Document 或非 Document 时，都会被触发</td></tr><tr><td>DOMNodeRemovedFromDocument</td><td>用于检测节点的移除</td><td>当 Node 从 Document 移除时，才会触发此事件</td></tr><tr><td>DOMNodeRemoved</td><td>用于检测节点的移除</td><td>当 Node 从 Document 或非 Document 时移除时，才会触发此事件</td></tr><tr><td>DOMAttributeModified</td><td>用于检测 DOM 属性变化</td><td></td></tr><tr><td>DOMCharacterDataModified</td><td>检测 DOM 节点的文本变化</td><td></td></tr><tr><td>DOMSubtreeModified</td><td>用于代替（DOMAttributeModified、DOMCharacterDataModified、DOMNodeInserted、DOMNodeInsertedIntoDocument、DOMNodeRemoved 和 DOMNodeRemovedFromDocument）</td><td>IE9 环境存在 BUG，当 Node 第一时间被插入时，不会立即触发此事件</td></tr></tbody></table><p>这里的<code>非Document</code>指的是，节点不在 DOM 树上的场景。如节点存放与内存中，<a href="https://github.com/swlws/blog/tree/master/202305/code/watch-dom.html" target="_blank" rel="noreferrer">Code 演示</a></p><h2 id="二、mutationobserver" tabindex="-1">二、MutationObserver <a class="header-anchor" href="#二、mutationobserver" aria-label="Permalink to &quot;二、MutationObserver&quot;">​</a></h2><p><code>MutationObserver</code>提供了一种监控自身节点以及子节点变化的能力，包括新增、移除、属性变化。示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mutationRecords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> observer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MutationObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(callback);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> targetNode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> option</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subtree: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  childList: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  attributes: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  attributeFilter: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  attributeOldValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  characterData: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  characterDataOldValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">observer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">observe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(targetNode, option);</span></span></code></pre></div><table><thead><tr><th>配置</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>subtree</td><td>false</td><td>监听目标节点的所有后代节点</td></tr><tr><td>childList</td><td>false</td><td>监听目标节点的新增、移除子节点的行为</td></tr><tr><td>attributes</td><td>false</td><td>监听目标节点的属性的变化</td></tr><tr><td>attributeFilter</td><td>undefined</td><td>当值为数组时，仅检测指定的属性的值的变化。</td></tr><tr><td>attributeOldValue</td><td>false</td><td>是否记录属性的旧值</td></tr><tr><td>characterData</td><td>false</td><td>是否监控文本节点的变化</td></tr><tr><td>characterDataOldValue</td><td>false</td><td>是否记录文本节点的旧值</td></tr></tbody></table><h2 id="三、参考" tabindex="-1">三、参考 <a class="header-anchor" href="#三、参考" aria-label="Permalink to &quot;三、参考&quot;">​</a></h2><ul><li>[^1] <a href="http://help.dottoro.com/larrqqck.php" target="_blank" rel="noreferrer">Event In JavaScript</a></li><li>[^2] <a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationEvent" target="_blank" rel="noreferrer">MutationEvent</a></li><li>[^3] <a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe" target="_blank" rel="noreferrer">MutationObserver: observe()</a></li></ul>`,13),d=[n];function l(r,h,p,k,o,E){return a(),s("div",null,d)}const g=t(e,[["render",l]]);export{u as __pageData,g as default};
