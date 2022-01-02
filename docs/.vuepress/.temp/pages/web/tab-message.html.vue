<template><h1 id="web-间通信" tabindex="-1"><a class="header-anchor" href="#web-间通信" aria-hidden="true">#</a> Web 间通信</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#一、场景">一、场景</RouterLink></li><li><RouterLink to="#二、同源网站下-tab-页间的通信方式">二、同源网站下 Tab 页间的通信方式</RouterLink><ul><li><RouterLink to="#_2-1-window-postmessge">2.1 window.postMessge</RouterLink></li><li><RouterLink to="#_2-2-broadcast-channel">2.2 BroadCast Channel</RouterLink></li><li><RouterLink to="#_2-3-service-worker">2.3 Service Worker</RouterLink></li><li><RouterLink to="#_2-4-localstorage">2.4 LocalStorage</RouterLink></li></ul></li><li><RouterLink to="#_2-5-indexeddb">2.5 IndexedDB</RouterLink></li><li><RouterLink to="#三、非同源页面间的通信">三、非同源页面间的通信</RouterLink><ul><li><RouterLink to="#_3-1-iframe">3.1 iframe</RouterLink></li></ul></li></ul></nav>
<h2 id="一、场景" tabindex="-1"><a class="header-anchor" href="#一、场景" aria-hidden="true">#</a> 一、场景</h2>
<p>Tab 间通信存在不同的场景：</p>
<ul>
<li>同源网站下的 Tab 页间通信</li>
<li>非同源网站下的 Tab 页间通信</li>
</ul>
<h2 id="二、同源网站下-tab-页间的通信方式" tabindex="-1"><a class="header-anchor" href="#二、同源网站下-tab-页间的通信方式" aria-hidden="true">#</a> 二、同源网站下 Tab 页间的通信方式</h2>
<p>按照通信的特征，分为三种方式点对点通信、广播通信、轮询通信</p>
<ul>
<li>点对点通信
<ul>
<li>window.postMessge</li>
</ul>
</li>
<li>广播通信
<ul>
<li>BroadCast Channel</li>
<li>Service Worker</li>
<li>LocalStorage</li>
</ul>
</li>
<li>轮询通信
<ul>
<li>IndexedDB</li>
</ul>
</li>
</ul>
<h3 id="_2-1-window-postmessge" tabindex="-1"><a class="header-anchor" href="#_2-1-window-postmessge" aria-hidden="true">#</a> 2.1 window.postMessge</h3>
<p>当使用 window.open 打开一个新页面时，若两个 Tab 之间需要主动通信，则可以使用<code>window.postMessage</code>实现通信。</p>
<p>场景：在<code>A页面</code>使用<code>window.open</code>打开<code>B页面</code>，在<code>B页面</code>向<code>A页面</code>发送消息。</p>
<p>特点：类似于点对点间的通信，其它的同源页面无法收到消息。</p>
<p>原理：</p>
<ul>
<li>A 页面监听<code>message</code>事件</li>
<li>B 页面使用<code>postMessage</code>发送消息</li>
<li>B 页面可以获取 A 页面的 window 对象，一般使用 window.opener</li>
</ul>
<p>具体实现(<a href="https://github.com/swlws/swlws.github.io/blob/master/shared/tool/tab-message.ts" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a>)：</p>
<p>A 页面监听消息</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 事件映射
 */</span>
<span class="token keyword">const</span> eventMap<span class="token operator">:</span> PlainObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ev<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> ev<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">"[object Object]"</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> <span class="token punctuation">{</span> key<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token keyword">let</span> fn <span class="token operator">=</span> eventMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span> args <span class="token operator">=</span> <span class="token punctuation">[</span>args<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 注册Tab页事件
 *
 * <span class="token keyword">@param</span> <span class="token parameter">key</span>
 * <span class="token keyword">@param</span> <span class="token parameter">fn</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerTabEvent</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  eventMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> fn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>B 页面发送消息</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TMessage</span> <span class="token operator">=</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> args<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 发送消息
 *
 * <span class="token keyword">@param</span> <span class="token parameter">data</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sendTabMessage</span><span class="token punctuation">(</span>data<span class="token operator">:</span> TMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> opener <span class="token operator">=</span> window<span class="token punctuation">.</span>opener<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>opener<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  opener<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_2-2-broadcast-channel" tabindex="-1"><a class="header-anchor" href="#_2-2-broadcast-channel" aria-hidden="true">#</a> 2.2 BroadCast Channel</h3>
<p>BroadcastChannel 接口代理了一个命名频道，可以让指定 origin 下的任意 browsing context 来订阅它。它允许同源的不同浏览器窗口，Tab 页，frame 或者 iframe 下的不同文档之间相互通信。通过触发一个 message 事件，消息可以广播到所有监听了该频道的 BroadcastChannel 对象。</p>
<p>特点：</p>
<ul>
<li>广播通信</li>
</ul>
<p>原理：</p>
<ul>
<li>页面创建<code>BroadCast Channel</code>实例</li>
<li>为实例注册<code>message</code>事件</li>
</ul>
<p>实现：</p>
<p><a href="https://swlws.github.io/site-client/#/tab-message-broadcast-channel" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> outmsg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> bc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastChannel</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bc<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      outmsg<span class="token punctuation">.</span>value <span class="token operator">=</span> ev<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">sendMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      bc<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>instr<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      instr<span class="token punctuation">,</span>
      outmsg<span class="token punctuation">,</span>
      sendMsg<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_2-3-service-worker" tabindex="-1"><a class="header-anchor" href="#_2-3-service-worker" aria-hidden="true">#</a> 2.3 Service Worker</h3>
<p>Service Worker 是一个运行在后台的 Worker，多页面间可以共享 Worker，使用 Worker 充当消息转发中心，实现多页面间的通信。</p>
<p>原理：</p>
<ul>
<li>多 Tab 共用同一份 Service Worker，每一个 Tab 是为 Client，通过 Service Worker 向每一客户端推送消息实现通信</li>
</ul>
<p>实现：</p>
<p><a href="https://swlws.github.io/site-client/#/tab-message-service-worker" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a></p>
<p>ServiceWorker 注册<code>message</code>事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ServiceWorkerGlobalScope上下文中注册message事件</span>
<span class="token comment">// 当监听到消息时，转发给每一个客户端</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ev<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">clients</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clients <span class="token operator">||</span> clients<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 向每一个客户端发送消息，包括自身</span>
      clients<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        client<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>ev<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在客户端接收、发送消息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> outmsg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">sendMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"serviceWorker"</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span>controller<span class="token operator">?.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>instr<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"serviceWorker"</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">"./tab-message.sw.js"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Service Worker注册成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        outmsg<span class="token punctuation">.</span>value <span class="token operator">=</span> ev<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"浏览器不支持 serviceWorker"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      instr<span class="token punctuation">,</span>
      outmsg<span class="token punctuation">,</span>
      sendMsg<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="_2-4-localstorage" tabindex="-1"><a class="header-anchor" href="#_2-4-localstorage" aria-hidden="true">#</a> 2.4 LocalStorage</h3>
<p>localstorage 可以存储浏览器数据，同源时，共享数据。当同源下的两个 Tab 页需要监听对方数据变化时，使用 localstorage 是比较好的方式。</p>
<p>原理：</p>
<ul>
<li>两个 Tab 页同源</li>
<li>A 页面监听<code>storage</code></li>
<li>B 页面使用<code>setItem</code>更新数据时，此时 A 页面可以监听到<code>localstorage</code>数据的变化</li>
</ul>
<p>实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"storage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">,</span> e<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-5-indexeddb" tabindex="-1"><a class="header-anchor" href="#_2-5-indexeddb" aria-hidden="true">#</a> 2.5 IndexedDB</h2>
<p>同源下的 Tab 可以访问相同的 IndexedDB，利用数据的全局存储特性，实现通信。</p>
<p>原理：</p>
<ul>
<li>A 页面将数据存储到 IndexedDB 中</li>
<li>B 页面轮询查询 IndexedDB 中数据的变化</li>
</ul>
<p>基于同样的原理，localstorage、sessionstorage 都可以采用这种方案</p>
<h2 id="三、非同源页面间的通信" tabindex="-1"><a class="header-anchor" href="#三、非同源页面间的通信" aria-hidden="true">#</a> 三、非同源页面间的通信</h2>
<ul>
<li>iframe</li>
</ul>
<h3 id="_3-1-iframe" tabindex="-1"><a class="header-anchor" href="#_3-1-iframe" aria-hidden="true">#</a> 3.1 iframe</h3>
<p>依靠 iframe 为媒介，可以实现非同源页面间的通信</p>
</template>
