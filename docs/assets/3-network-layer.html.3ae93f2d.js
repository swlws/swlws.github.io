import{e}from"./app.f82ffac1.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},i=e(`<h1 id="\u7F51\u7EDC\u5C42" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5C42" aria-hidden="true">#</a> \u7F51\u7EDC\u5C42</h1><h2 id="\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1" aria-hidden="true">#</a> \u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1</h2><ul><li>\u865A\u7535\u8DEF\u670D\u52A1\u3002\u9762\u5411\u8FDE\u63A5\u3001\u53EF\u9760\u7684\u670D\u52A1\u3002</li><li>\u6570\u636E\u62A5\u670D\u52A1\u3002\u65E0\u8FDE\u63A5\u3001\u6700\u5927\u52AA\u529B\u4EA4\u4ED8\u7684\u670D\u52A1\u3002</li></ul><p>TCP/IP \u4F53\u7CFB\u4E2D\uFF0C\u7F51\u7EDC\u5C42\u5411\u4E0A\u5C42\uFF08\u8FD0\u8F93\u5C42\uFF09\u53EA\u63D0\u4F9B\u7B80\u5355\u7075\u6D3B\u7684\u3001\u65E0\u8FDE\u63A5\u7684\u3001\u5C3D\u6700\u5927\u52AA\u529B\u4EA4\u4ED8\u7684\u6570\u636E\u62A5\uFF08IP \u6570\u636E\u62A5\uFF09\u670D\u52A1\u3002\u7F51\u7EDC\u5C42\u4E0D\u63D0\u4F9B\u670D\u52A1\u8D28\u91CF\u7684\u627F\u8BFA\u3002</p><h2 id="\u7F51\u9645\u534F\u8BAE-ip-internet-protocol" tabindex="-1"><a class="header-anchor" href="#\u7F51\u9645\u534F\u8BAE-ip-internet-protocol" aria-hidden="true">#</a> \u7F51\u9645\u534F\u8BAE IP\uFF08Internet Protocol\uFF09</h2><p>\u8FD9\u91CC\u7684 IP \u534F\u8BAE\uFF0C\u6307\u7684\u662F TCP/IP \u4F53\u7CFB\u4E2D\u7684 IPv4 \u534F\u8BAE\u3002</p><p>\u4E0E IP \u534F\u8BAE\u914D\u5957\u7684\u534F\u8BAE\uFF1A</p><ul><li>\u5730\u5740\u89E3\u6790\u534F\u8BAE ARP\uFF08Address Resolution Protocol\uFF09</li><li>\u7F51\u9645\u62A5\u6587\u63A7\u5236\u534F\u8BAE ICMP\uFF08Internet Control Message Protocol\uFF09</li><li>\u7F51\u9645\u7EC4\u7BA1\u7406\u534F\u8BAE IGMP\uFF08Internet Group Management Protocol\uFF09</li></ul><p>\u6CA1\u6709\u4E00\u79CD\u5355\u4E00\u7684\u7F51\u7EDC\u80FD\u9002\u5E94\u6240\u6709\u7528\u6237\u7684\u9700\u6C42\uFF08\u6709\u5404\u79CD\u5404\u6837\u7684\u7F51\u7EDC\uFF09\uFF0C\u5C06\u7F51\u7EDC\u4E92\u76F8\u8FDE\u63A5\u8D77\u6765\u9700\u8981\u4E00\u4E9B\u4E2D\u95F4\u8BBE\u5907\uFF1A</p><ul><li>\u7269\u7406\u5C42\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u8F6C\u53D1\u5668</code></li><li>\u6570\u636E\u94FE\u8DEF\u5C42\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u7F51\u6865</code>\u6216<code>\u6865\u63A5\u5668</code></li><li>\u7F51\u7EDC\u5C42\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u8DEF\u7531\u5668</code></li><li>\u7F51\u7EDC\u5C42\u4EE5\u4E0A\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u7F51\u5173</code></li></ul><h3 id="ip-\u5730\u5740\u548C\u786C\u4EF6\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#ip-\u5730\u5740\u548C\u786C\u4EF6\u5730\u5740" aria-hidden="true">#</a> IP \u5730\u5740\u548C\u786C\u4EF6\u5730\u5740</h3><p><code>IP \u5730\u5740</code></p><ul><li>\u5373\u7F51\u7EDC\u5730\u5740\uFF0C\u4E3B\u673A\u5728\u7F51\u7EDC\u4E0A\u7684\u552F\u4E00\u6807\u8BC6\u3002\u662F\u7F51\u7EDC\u5C42\u548C\u4EE5\u4E0A\u5404\u5C42\u662F\u7528\u7684\u5730\u5740\uFF0C\u662F\u4E00\u79CD\u903B\u8F91\u5730\u5740\u3002</li><li>\u957F\u5EA6 32 \u4F4D</li></ul><p><code>\u786C\u4EF6\u5730\u5740\uFF08\u6216\u7269\u7406\u5730\u5740\u3001\u6216MAC\u5730\u5740\uFF09</code></p><ul><li>\u662F\u6570\u636E\u94FE\u8DEF\u5C42\u548C\u7269\u7406\u5C42\u662F\u7528\u7684\u5730\u5740\u3002</li><li>\u957F\u5EA6 48 \u4F4D</li></ul><blockquote><p>\u5C40\u57DF\u7F51\u4E2D\uFF0C\u786C\u4EF6\u5730\u5740\u5DF2\u7ECF\u56FA\u5316\u5728\u7F51\u5361\u7684 ROM \u4E2D\u3002</p></blockquote><h3 id="\u5206\u7C7B\u7684-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B\u7684-ip-\u5730\u5740" aria-hidden="true">#</a> \u5206\u7C7B\u7684 IP \u5730\u5740</h3><p><code>\u5206\u7C7B\u7684 IP \u5730\u5740</code>\u5C06 IP \u5730\u5740\u56FA\u5B9A\u7684\u5212\u5206\u4E3A\u82E5\u5E72\u7C7B\uFF0C\u6BCF\u4E00\u7C7B\u7531<code>\u7F51\u7EDC\u53F7(net-id)</code>\u548C<code>\u4E3B\u673A\u53F7(host-id)</code>\u7EC4\u6210\uFF0C\u683C\u5F0F\uFF1A</p><blockquote><p>IP \u5730\u5740 ::= {&lt;\u7F51\u7EDC\u53F7&gt;, &lt;\u4E3B\u673A\u53F7&gt;}</p></blockquote><p>\u5206\u7C7B\uFF1A</p><ul><li>A \u7C7B\u5730\u5740\uFF0C{8, 24}\uFF0C\u7F51\u7EDC\u53F7\u7684\u7B2C\u4E00\u4F4D\u4E3A<code>0</code></li><li>B \u7C7B\u5730\u5740\uFF0C{16, 16}\uFF0C\u7F51\u7EDC\u53F7\u7684\u524D\u4E24\u4F4D\u4E3A<code>10</code>\uFF0C\u6700\u5C0F\u5730\u5740<code>128.1.0.0</code></li><li>C \u7C7B\u5730\u5740\uFF0C{24, 8}\uFF0C\u7F51\u7EDC\u53F7\u7684\u524D\u4E09\u4F4D\u4E3A<code>110</code>\uFF0C\u6700\u5C0F\u5730\u5740<code>192.0.1.0</code></li><li>D \u7C7B\u5730\u5740\uFF0C\u524D\u56DB\u4F4D<code>1110</code>\uFF0C\u7528\u4E8E\u591A\u64AD\uFF08\u4E00\u5BF9\u591A\u901A\u4FE1\uFF09</li><li>E \u7C7B\u5730\u5740\uFF0C\u524D\u56DB\u4F4D<code>1111</code>\uFF0C\u4FDD\u7559\u4F4D\u4EE5\u540E\u7528</li></ul><p>\u4E24\u4E2A\u7279\u6B8A IP \u5730\u5740\uFF1A</p><ul><li><code>0.0.0.0</code>\u8868\u793A\u672C\u7F51\u7EDC\u3002</li><li><code>127.0.0.1</code>\u4FDD\u7559\u4F5C\u4E3A\u672C\u5730\u8F6F\u4EF6<code>\u56DE\u73AF\u6D4B\u8BD5\uFF08lookback test\uFF09</code>\u672C\u4E3B\u673A\u8FDB\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\u4E4B\u7528\u3002</li></ul><p>\u8DEF\u7531\u5668\u7684\u7279\u6027\uFF1A</p><ul><li>\u8DEF\u7531\u5668\u81F3\u5C11\u8FDE\u63A5\u4E24\u4E2A\u7F51\u7EDC\uFF0C\u81F3\u5C11\u5177\u5907\u4E24\u4E2A\u4E0D\u540C\u7684\u7F51\u7EDC\u53F7\u3002</li><li>\u8DEF\u7531\u5668\u53EA\u6839\u636E\u76EE\u7684\u7AD9\u7684 IP \u5730\u5740\u7684\u7F51\u7EDC\u53F7\u8FDB\u884C\u8DEF\u7531\u8F6C\u53D1\u3002</li></ul><h3 id="\u5730\u5740\u89E3\u6790\u534F\u8BAE-arp" tabindex="-1"><a class="header-anchor" href="#\u5730\u5740\u89E3\u6790\u534F\u8BAE-arp" aria-hidden="true">#</a> \u5730\u5740\u89E3\u6790\u534F\u8BAE ARP</h3><p>\u5C06<code>IP\u5730\u5740</code>\u89E3\u6790\u4E3A<code>\u786C\u4EF6\u5730\u5740</code>\uFF08\u5907\u6CE8\uFF1A\u53EA\u80FD\u89E3\u6790\u540C\u7F51\u7EDC\u7684 IP \u5730\u5740\uFF09.</p><p>\u6BCF\u53F0\u4E3B\u673A\u90FD\u6709\u4E00\u4E2A<code>ARP\u9AD8\u901F\u6362\u7C97\uFF08ARP cache\uFF09</code>\uFF0C\u91CC\u9762\u6709\u672C\u5C40\u57DF\u7F51\u4E0A\u5404\u79CD\u4E3B\u673A\u548C\u8DEF\u7531\u5668\u7684<code>IP\u5730\u5740</code>\u5230<code>\u786C\u4EF6\u5730\u5740</code>\u7684\u6620\u5C04\uFF0C\u6BCF\u6761\u8BB0\u5F55\u90FD\u6709<code>\u751F\u5B58\u65F6\u95F4</code>(\u5982\uFF1A10-20 \u5206\u949F)</p><blockquote><p>linux \u73AF\u5883\u4E0B\uFF0C\u6570\u636E\u5B58\u50A8\u5728/proc/net/arp\uFF0C\u6267\u884C\u547D\u4EE4\u884C arp \u4E5F\u53EF\u67E5\u770B\u6570\u636E</p></blockquote><p>\u62FC\u63A5 MAC \u5E27\u65F6\uFF0CMAC \u5730\u5740\u7684\u67E5\u627E\u89C4\u5219\uFF1A</p><ul><li>\u627E\u5230 MAC \u5730\u5740\uFF0C\u76F4\u63A5\u5199\u5165</li><li>\u672A\u627E\u5230 MAC \u5730\u5740 <ul><li>ARP \u8FDB\u7A0B\u5728\u5C40\u57DF\u7F51\u7F51\u4E2D\uFF0C\u53D1\u9001\u5E7F\u64AD\u67E5\u627E <ul><li>\u627E\u5230\u76EE\u7684\u4E3B\u673A\u7684 MAC \u5730\u5740</li><li>\u627E\u5230\u8DEF\u7531\u5668\u7684 MAC \u5730\u5740</li></ul></li></ul></li></ul><p>Question\uFF1A\u65E2\u7136\u94FE\u8DEF\u5C42\u4E0A\u4F20\u9001\u7684\u5E27\u6700\u7EC8\u65F6\u6309\u7167<code>\u786C\u4EF6\u5730\u5740</code>\u627E\u5230\u76EE\u6807\u4E3B\u673A\uFF0C\u4E3A\u4F55\u8981\u4F7F\u7528\u62BD\u8C61\u7684 IP \u5730\u5740\uFF0C\u4E0D\u76F4\u63A5\u4F7F\u7528<code>\u786C\u4EF6\u5730\u5740</code>\u8FDB\u884C\u901A\u4FE1\uFF1F</p><ol><li>\u5404\u79CD\u5404\u6837\u7684\u7F51\u7EDC\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u786C\u4EF6\u5730\u5740\u3002</li><li>\u5F02\u6784\u7684\u7F51\u7EDC\u80FD\u591F\u4E92\u76F8\u901A\u4FE1\uFF0C\u5FC5\u987B\u8FDB\u884C<code>\u975E\u5E38\u590D\u6742\u786C\u4EF6\u5730\u5740\u8F6C\u6362\u5DE5\u4F5C</code>\uFF0C\u7531\u7528\u6237\u3001\u7528\u6237\u4E3B\u673A\u5B8C\u6210\u8FD9\u4E2A\u5DE5\u4F5C\u51E0\u4E4E\u662F\u4E0D\u53EF\u80FD\u7684\u4E8B\u60C5\u3002</li><li>\u4E3B\u673A\u62E5\u6709\u4E00\u4E2A\u552F\u4E00\u7684 IP \u5730\u5740\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u7684\u901A\u4FE1\u5C31\u50CF\u8FDE\u63A5\u5728\u540C\u4E00\u4E2A\u7F51\u7EDC\u4E0A\u90A3\u4E48\u7B80\u5355\u3002</li></ol><h3 id="ip-\u6570\u636E\u62A5" tabindex="-1"><a class="header-anchor" href="#ip-\u6570\u636E\u62A5" aria-hidden="true">#</a> IP \u6570\u636E\u62A5</h3><p>\u683C\u5F0F\uFF1A{\u56FA\u5B9A 20 \u4E2A\u5B57\u8282\u7684\u9996\u90E8} {\u53EF\u53D8\u957F\u5EA6\u7684\u53EF\u9009\u5B57\u6BB5} {\u6570\u636E\u90E8\u5206}</p><p>\u5907\u6CE8\uFF1A\u6570\u636E\u62A5\u4E2D\u603B\u957F\u5EA6\u5B57\u6BB5\uFF0C\u5360 16 \u4F4D\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF0C\u56E0\u6B64 IP \u6570\u636E\u62A5\u7684\u6700\u5927\u957F\u5EA6\u4E3A 2^16 -1 = 65535 \u4E2A\u5B57\u8282</p><h3 id="ip-\u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B-\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#ip-\u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B-\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4" aria-hidden="true">#</a> IP \u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B\uFF08\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4\uFF09</h3><p>\u8DEF\u7531\u8868\u4E2D\u6BCF\u6761\u8DEF\u7531\u8BB0\u5F55\u6700\u4E3B\u8981\u7684\u4FE1\u606F\uFF1A&lt;\u76EE\u7684\u7F51\u7EDC\u5730\u5740, \u4E0B\u4E00\u8DF3\u5730\u5740&gt;</p><p><code>\u8DEF\u7531\u8868</code>\u4E2D\u4E09\u79CD<code>\u8DEF\u7531\u8BB0\u5F55</code>:</p><ul><li><code>\u57FA\u4E8E\u76EE\u7684\u4E3B\u673A\u6240\u5728\u7F51\u7EDC\u7684\u4EA4\u4ED8</code><ol><li>IP \u6570\u636E\u62A5\uFF0C\u6700\u7EC8\u4E00\u5B9A\u80FD\u627E\u5230\u76EE\u7684\u4E3B\u673A\u6240\u5728\u7684\u76EE\u7684\u7F51\u7EDC\u4E0A\u7684\u8DEF\u7531\u5668\uFF08\u53EF\u80FD\u8981\u901A\u8FC7\u591A\u6B21\u95F4\u63A5\u4EA4\u4ED8\uFF09\u3002</li><li>\u53EA\u6709\u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u8DEF\u7531\u5668\uFF0C\u624D\u8BD5\u56FE\u5411\u76EE\u7684\u4E3B\u673A\u8FDB\u884C\u76F4\u63A5\u4EA4\u4ED8\u3002</li></ol></li><li><code>\u7279\u5B9A\u4E3B\u673A\u8DEF\u7531</code></li><li><code>\u9ED8\u8BA4\u8DEF\u7531</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># host ip\u4E3A192.168.5.12\u7684\u8DEF\u7531\u8868</span>

<span class="token punctuation">[</span>root@localhost<span class="token punctuation">]</span><span class="token comment"># route -n</span>
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
<span class="token number">0.0</span>.0.0         <span class="token number">192.168</span>.5.1     <span class="token number">0.0</span>.0.0         UG    <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> ens33
<span class="token number">192.168</span>.5.0     <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> ens33
<span class="token number">192.168</span>.6.0     <span class="token number">192.168</span>.5.2     <span class="token number">255.255</span>.255.0   UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> ens33
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8DEF\u7531\u8868\u89E3\u91CA\uFF1A</p><ul><li>\u7B2C\u4E00\u6761\u8BB0\u5F55\u4E3A<code>\u9ED8\u8BA4\u8DEF\u7531</code>\uFF0C\u4E0B\u4E00\u8DF3\u5730\u5740\u4E3A<code>192.168.5.1</code></li><li>\u7B2C\u4E8C\u6761\u8BB0\u5F55\u4E3A\u672C\u7F51\u7EDC\u7684\u76F4\u63A5\u4EA4\u4ED8</li><li>\u7B2C\u4E8C\u6761\u8BB0\u5F55\u4E3A\uFF0C\u5230<code>192.168.6.0</code>\u7F51\u7EDC\u7684\u4E0B\u4E00\u8DF3\u5730\u5740\u4E3A<code>192.168.5.2</code></li><li>Flags \u4E2D\u7684 <ul><li><code>U</code>\u8868\u793A<code>\u8DEF\u7531\u662F\u53EF\u7528\u7684</code></li><li><code>G</code>\u8868\u793A\u4E0B\u4E00\u8DF3\u4E3A<code>\u8DEF\u7531\u5668</code>\uFF1B<code>G\u5B58\u5728</code>\u4E3A<code>\u95F4\u63A5\u4EA4\u4ED8</code>\uFF0C<code>G\u4E0D\u5B58\u5728</code>\u4E3A<code>\u76F4\u63A5\u4EA4\u4ED8</code></li><li><code>H</code>\u8868\u793A\u8BE5\u8DEF\u7531\u662F\u5230\u4E00\u53F0<code>\u4E3B\u673A</code>\uFF0C\u82E5<code>\u4E0D\u8BBE\u7F6EH</code>\uFF0C\u5219\u8868\u793A\u8BE5\u8DEF\u7531\u662F\u4E00\u4E2A<code>\u7F51\u7EDC</code></li></ul></li></ul><p>\u5206\u7EC4\u8F6C\u53D1\u7B97\u6CD5\uFF0C\u8DEF\u6709\u4F18\u5148\u7EA7\uFF1A</p><ul><li>\u4E0E\u8DEF\u7531\u5668\u76F4\u8FDE\u7684\u7F51\u7EDC\uFF0C\u76F4\u63A5\u4EA4\u4ED8</li><li>\u8DEF\u7531\u8868\u4E2D\u7279\u5B9A\u4E3B\u673A\u8DEF\u7531\uFF0C\u6267\u884C\u4E0B\u4E00\u8DF3</li><li>\u8DEF\u7531\u8868\u4E2D\u7684\u7F51\u7EDC\u8DEF\u7531\uFF0C\u6267\u884C\u4E0B\u4E00\u8DF3</li><li>\u8DEF\u7531\u8868\u4E2D\u7684\u9ED8\u8BA4\u8DEF\u7531\uFF0C\u6267\u884C\u4E0B\u4E00\u8DF3</li><li>\u62A5\u544A\u5206\u7EC4\u8F6C\u53D1\u5931\u8D25</li></ul><h2 id="\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51" aria-hidden="true">#</a> \u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51</h2><p><code>\u4E24\u7EA7 IP \u5730\u5740</code> ::= { &lt;\u7F51\u7EDC\u53F7&gt;, &lt;\u4E3B\u673A\u53F7&gt; }</p><p><code>\u4E09\u7EA7 IP \u5730\u5740</code> ::= { &lt;\u7F51\u7EDC\u53F7&gt;, &lt;\u5B50\u7F51\u53F7&gt;, &lt;\u4E3B\u673A\u53F7&gt; }</p><p><code>\u5B50\u7F51\u7684\u7F51\u7EDC\u5730\u5740</code> := &lt;IP \u5730\u5740&gt; AND &lt;\u5B50\u7F51\u63A9\u7801&gt;</p><p><code>\u65E0\u5206\u7C7B\u7F16\u5740CIDR\uFF08\u6784\u9020\u8D85\u7F51\uFF09</code> ::= { &lt;\u7F51\u7EDC\u524D\u7F00&gt;, &lt;\u4E3B\u673A\u53F7&gt; }</p><p>\u65E0\u5206\u7C7B\u57DF\u95F4\u8DEF\u7531\u9009\u62E9 CIDR\uFF08Classless Inter-Domain Routing\uFF09\uFF1A</p><ul><li>CIDR \u6D88\u9664\u4E86\u4F20\u7EDF\u7684 A \u7C7B\u3001B \u7C7B\u3001C \u7C7B\u5730\u5740\u4EE5\u53CA\u5212\u5206\u5B50\u7F51\u7684\u6982\u5FF5</li><li>CIDR \u628A<code>\u7F51\u7EDC\u524D\u7F00</code>\u90FD\u76F8\u540C\u7684\u8FDE\u7EED\u7684 IP \u5730\u5740\u7EC4\u6210\u4E00\u4E2A<code>CIDR\u5730\u5740\u5757</code></li></ul><blockquote><p>\u8D85\u7F51\uFF1A\u4E00\u6BB5\u8FDE\u7EED\u7684 IP \u5730\u5740\u6BB5\uFF0C\u76F8\u5F53\u4E8E\u5176\u4E2D\u53EF\u4EE5\u5305\u542B\u591A\u4E2A B \u7C7B\u3001C \u7C7B\u5730\u5740</p></blockquote><p>\u8D85\u7F51<code>128.14.35.7/20</code>\uFF0C\u8BED\u610F\uFF1A</p><ul><li>\u6700\u5C0F\u5730\u5740\u4E3A\uFF0C128.14.32.0</li><li>\u6700\u5927\u5730\u5740\u4E3A\uFF0C128.14.27.255</li></ul><h2 id="\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE-icmp" tabindex="-1"><a class="header-anchor" href="#\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE-icmp" aria-hidden="true">#</a> \u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE ICMP</h2><p>\u4E3A\u4E86\u66F4\u6709\u6548\u7684\u8F6C\u53D1 IP \u6570\u636E\u62A5\u548C\u63D0\u9AD8\u4EA4\u4ED8\u6210\u529F\u7684\u673A\u4F1A\uFF0C\u5728\u7F51\u9645\u5C42\u4F7F\u7528 ICMP\uFF08Internet Control Message Protocol\uFF09\u534F\u8BAE\u3002\u5B83\u4E0D\u662F\u9AD8\u5C42\u534F\u8BAE\uFF0C\u800C\u662F IP \u5C42\uFF08\u7F51\u7EDC\u5C42\uFF09\u7684\u534F\u8BAE\u3002</p><p>ICMP \u62A5\u6587\u79CD\u7C7B\uFF1A</p><ul><li>ICMP \u5DEE\u9519\u62A5\u544A\u62A5\u6587</li><li>ICMP \u8BE2\u95EE\u62A5\u6587\u3002\u6709\u4E24\u79CD\uFF1A <ul><li>\u56DE\u9001\u8BF7\u6C42\u548C\u56DE\u7B54</li><li>\u65F6\u95F4\u6233\u8BF7\u6C42\u548C\u56DE\u7B54</li></ul></li></ul><p>ICMP \u7684\u5E94\u7528\u4E3E\u4F8B\uFF1A</p><ul><li>ping <ul><li>\u4F7F\u7528\u7684\u662F<code>\u56DE\u9001\u8BF7\u6C42\u548C\u56DE\u7B54</code>\uFF0C\u6D4B\u8BD5\u4E24\u53F0\u4E3B\u673A\u4E4B\u95F4\u7684<code>\u8FDE\u901A\u6027</code></li><li>\u5728\u5E94\u7528\u5C42\u76F4\u63A5\u4F7F\u7528\u7F51\u7EDC\u5C42 ICMP\uFF0C\u5B83\u6CA1\u6709\u4F7F\u7528 TCP/UDP</li><li>\u6709\u7684\u4E3B\u673A\u4E3A\u4E86\u9632\u6B62\u6076\u610F\u653B\u51FB\u5C31\u4E0D\u7406\u776C\u5916\u754C\u53D1\u9001\u8FC7\u6765\u7684<code>ICMP\u56DE\u9001\u8BF7\u6C42</code>\u62A5\u6587\uFF0C\u4F8B\u5982\uFF1Awindows \u673A\u5668</li></ul></li><li>traceroute <ul><li>\u7528\u4E8E\u8FFD\u8E2A\u4E00\u4E2A\u5206\u7EC4\u4ECE\u6E90\u70B9\u5230\u7EC8\u70B9\u7684\u8DEF\u5F84</li><li>\u4ECE\u6E90\u4E3B\u673A\u5411\u76EE\u7684\u4E3B\u673A\u53D1\u9001\u4E00\u8FDE\u4E32\u7684<code>IP \u6570\u636E\u62A5</code>\uFF0C\u6570\u636E\u62A5\u4E2D\u5C01\u88C5\u7684\u662F\u65E0\u6CD5\u4EA4\u4ED8\u7684 UDP \u7528\u6237\u6570\u636E\u62A5</li></ul></li></ul><h2 id="\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</h2><h3 id="\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5" aria-hidden="true">#</a> \u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5</h3><p><code>\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5</code>\u7684\u7279\u70B9\uFF1A</p><ul><li>\u7B97\u6CD5\u5FC5\u987B\u662F\u6B63\u786E\u7684\u3001\u5B8C\u6574\u7684\u3002</li><li>\u7B97\u6CD5\u5728\u8BA1\u7B97\u4E0A\u5E94\u7B80\u5355\u3002\u4E0D\u4F7F\u7F51\u7EDC\u901A\u4FE1\u91CF\u589E\u52A0\u592A\u591A\u7684\u989D\u5916\u5F00\u9500</li><li>\u7B97\u6CD5\u80FD\u9002\u5E94\u901A\u4FE1\u91CF\u548C\u7F51\u7EDC\u62D3\u6251\u7684\u53D8\u5316\uFF0C\u5373\u81EA\u9002\u5E94\u6027\u3001\u7A33\u5065\u6027</li><li>\u7B97\u6CD5\u5E94\u5177\u6709\u7A33\u5B9A\u6027\u3002\u5E94\u6536\u655B\u4E8E\u4E00\u4E2A\u53EF\u63A5\u53D7\u7684\u89E3\uFF0C\u4E0D\u5E94\u4F7F\u5F97\u8DEF\u7531\u4E0D\u505C\u7684\u53D8\u5316</li><li>\u7B97\u6CD5\u662F\u516C\u5E73\u7684\u3002\u6240\u6709\u7528\u6237\u4F18\u5148\u7EA7\u76F8\u540C\u3002</li><li>\u7B97\u6CD5\u5E94\u662F\u6700\u4F73\u7684\u3002\u76F8\u5BF9\u4E8E\u67D0\u4E00\u79CD\u7279\u5B9A\u8981\u6C42\u4E0B\u5F97\u51FA\u8F83\u4E3A\u5408\u7406\u7684\u9009\u62E9</li></ul><h3 id="\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" aria-hidden="true">#</a> \u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</h3><p><code>\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</code>\uFF0C\u5C06\u4E92\u8054\u7F51\u5212\u5206\u4E3A\u8BB8\u591A\u8F83\u5C0F\u7684 <code>\u81EA\u6D3D\u7CFB\u7EDF\uFF08autonomous system\uFF09</code>\uFF0C\u4E00\u822C\u6807\u8BB0\u4E3A<code>AS</code>.</p><p>\u4F7F\u7528<code>\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5</code>\uFF0C\u53EF\u5C06\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE\u5212\u5206\u4E3A\uFF1A</p><ul><li>\u5185\u90E8\u7F51\u5173\u534F\u8BAE IGP\uFF08Interior Gateway Protocol\uFF09\uFF0C\u5177\u4F53\u7684\u534F\u8BAE\u5982\uFF1A <ul><li>\u8DEF\u7531\u4FE1\u606F\u534F\u8BAE RIP\uFF08Routing Information Protocol\uFF09</li><li>\u5F00\u653E\u6700\u77ED\u8DEF\u5F84\u4F18\u5148 OSPF\uFF08Open Shortest Path First\uFF09</li></ul></li><li>\u5916\u90E8\u7F51\u5173\u534F\u8BAE XGP\uFF08External Gateway Protocol\uFF09\uFF0C\u5177\u4F53\u7684\u534F\u8BAE\uFF1A <ul><li>\u8FB9\u754C\u7F51\u5173\u534F\u8BAE BGP</li></ul></li></ul><h3 id="\u8DEF\u7531\u5668\u7684\u6784\u6210" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668\u7684\u6784\u6210" aria-hidden="true">#</a> \u8DEF\u7531\u5668\u7684\u6784\u6210</h3><p>\u8DEF\u7531\u5668\u7684\u4EFB\u52A1\uFF1A</p><ul><li>\u8DEF\u7531\u9009\u62E9</li><li>\u8F6C\u53D1\u5206\u7EC4</li></ul><p>\u8DEF\u7531\u5668\u7684\u7ED3\u6784\uFF1A</p><ul><li>\u591A\u4E2A\u8F93\u5165\u7AEF\u53E3\u3001\u591A\u4E2A\u8F93\u51FA\u7AEF\u53E3</li></ul><p><code>\u8DEF\u7531\u8868\u548C\u8F6C\u53D1\u8868</code>\u5BF9\u6BD4:</p><blockquote><p>\u5728\u8BA8\u8BBA\u8DEF\u7531\u9009\u62E9\u539F\u7406\u65F6\uFF0C\u4E0D\u533A\u5206\u8F6C\u53D1\u8868\u3001\u8DEF\u7531\u8868\u7684\u533A\u522B\uFF0C\u7B3C\u7EDF\u7684\u4F7F\u7528\u8DEF\u7531\u8868\u4E00\u8BCD</p></blockquote><table><thead><tr><th></th><th>\u8DEF\u7531\u8868</th><th>\u8F6C\u53D1\u8868</th></tr></thead><tbody><tr><td>\u8BB0\u5F55\u6765\u6E90</td><td>\u662F\u8BB8\u591A\u8DEF\u7531\u5668\u534F\u540C\u5DE5\u4F5C\u5F97\u51FA\u7684\u7ED3\u679C</td><td>\u4ECE\u8DEF\u7531\u8868\u5F97\u51FA</td></tr><tr><td>\u5355\u884C\u8BB0\u5F55</td><td>\u76EE\u7684\u7F51\u7EDC\u5230\u4E0B\u4E00\u8DF3\u5730\u5740\u7684\u6620\u5C04</td><td>\u8981\u5230\u8FBE\u7684\u76EE\u7684\u7F51\u7EDC\uFF0C\u5230\u8F93\u51FA\u7AEF\u53E3\u3001MAC \u5730\u5740\u4FE1\u606F\u7684\u6620\u5C04</td></tr><tr><td>\u5206\u7EC4\u8F6C\u53D1\u65F6\u7684\u4F18\u70B9</td><td>\u8DEF\u7531\u8868\u65F6\u5BF9\u7F51\u7EDC\u62D3\u6251\u53D8\u5316\u7684\u8BA1\u7B97\u6700\u4F18\u5316</td><td>\u8F6C\u53D1\u8868\u7684\u7ED3\u6784\u4F7F\u67E5\u627E\u8FC7\u7A0B\u6700\u4F18\u5316</td></tr><tr><td>\u5B9E\u73B0\u65B9\u5F0F</td><td>\u603B\u662F\u4F7F\u7528\u8F6F\u4EF6</td><td>\u8F6F\u4EF6\u3001\u786C\u4EF6\u90FD\u53EF\u4EE5</td></tr></tbody></table><h2 id="ipv6" tabindex="-1"><a class="header-anchor" href="#ipv6" aria-hidden="true">#</a> IPv6</h2><h3 id="ipv6-\u7684\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#ipv6-\u7684\u5730\u5740" aria-hidden="true">#</a> IPv6 \u7684\u5730\u5740</h3><p>IPv6 \u5730\u5740\u957F\u5EA6\uFF1A128 \u4F4D</p><p>\u4E66\u5199\u65B9\u5F0F\uFF0C\u91C7\u7528<code>\u5192\u53F7\u5341\u516D\u8FDB\u5236\u8BB0\u6CD5</code>\uFF0Ceg\uFF1A</p><blockquote><p>6836:8c64:0:0:0:0:2222:ffff</p></blockquote><p>\u4E66\u5199\u89C4\u5219\uFF1A</p><ul><li>\u5341\u516D\u8FDB\u5236\u4E2D\uFF0C\u5141\u8BB8\u628A\u6570\u5B57\u524D\u7684 0 \u7701\u7565</li><li>\u5141\u8BB8<code>\u96F6\u538B\u7F29</code>,\u5373\u591A\u4E2A\u76F8\u8FDE\u7684<code>0</code>\uFF0C\u53EF\u4EE5\u538B\u7F29\u4E3A<code>6836:8c64::2222:ffff</code></li><li>\u5141\u8BB8\u7ED3\u5408\u4F7F\u7528<code>\u70B9\u5206\u5341\u8FDB\u5236</code>\u7684\u540E\u7F00\uFF0C\u5982\uFF1A<code>::128.0.0.1</code></li><li>\u65E0\u5206\u7C7B\u7F16\u5740 CIDR\uFF08\u6784\u9020\u8D85\u7F51\uFF09\u7684\u659C\u7EBF\u8868\u793A\u6CD5\u4F9D\u7136\u53EF\u7528\uFF0C\u5982<code>12AB:0:0:CD30::/60</code></li></ul><p>\u4E00\u4E2A IPv6 \u6570\u636E\u62A5\u7684\u76EE\u7684\u5730\u5740\u53EF\u4EE5\u662F yi \u4E00\u4E0B\u4E09\u79CD\u57FA\u672C\u7C7B\u578B\u5730\u5740\u4E4B\u4E00\uFF1A</p><ul><li>\u5355\u64AD\u5730\u5740\u3002\u4F20\u7EDF\u7684\u70B9\u5BF9\u70B9\u901A\u4FE1\u3002</li><li>\u591A\u64AD\u5730\u5740\u3002\u4E00\u70B9\u5BF9\u591A\u70B9\u901A\u4FE1\u3002</li><li>\u4EFB\u64AD\u5730\u5740\u3002IPv6 \u65B0\u589E\u7C7B\u578B\uFF0C\u4EFB\u64AD\u7684\u7EC8\u70B9\u662F\u4E00\u7EC4\u8BA1\u7B97\u673A\uFF0C\u4F46\u6570\u636E\u62A5\u53EA\u4EA4\u4ED8\u7ED9\u5176\u4E2D\u4E00\u4E2A\uFF0C\u901A\u5E38\u662F\u8DDD\u79BB\u6700\u8FD1\u7684\u3002</li></ul><h3 id="ipv6-\u6570\u636E\u62A5" tabindex="-1"><a class="header-anchor" href="#ipv6-\u6570\u636E\u62A5" aria-hidden="true">#</a> IPv6 \u6570\u636E\u62A5</h3><ul><li>\u57FA\u672C\u9996\u90E8\uFF08\u56FA\u5B9A 40 \u4E2A\u5B57\u8282\uFF09 + \u6709\u6548\u8F7D\u8377\uFF08\u6700\u5927 64KB\uFF09</li></ul><p>\u5907\u6CE8\uFF1A\u6570\u636E\u62A5\u4E2D\u6709\u6548\u8F7D\u8377\u5360 16 \u4F4D\uFF0C\u5B83\u8868\u660E\u9664\u57FA\u672C\u9996\u90E8\u4EE5\u5916\u7684\u5B57\u8282\u6570\uFF0C\u6700\u5927\u4E3A 64KB\uFF08\u5373 65535 \u5B57\u8282\uFF09</p><h3 id="ipv4-\u5411-ipv6-\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#ipv4-\u5411-ipv6-\u8FC7\u6E21" aria-hidden="true">#</a> IPv4 \u5411 IPv6 \u8FC7\u6E21</h3><p>\u4E24\u79CD\u8FC7\u6E21\u7B56\u7565\uFF1A</p><ul><li>\u53CC\u534F\u8BAE\u6808\uFF08dual stack\uFF09 <ul><li>\u540C\u65F6\u652F\u6301 IPv4 \u548C IPv6 \u534F\u8BAE</li></ul></li><li>\u96A7\u9053\u6280\u672F\uFF08tunneling\uFF09 <ul><li>IPv6 \u6570\u636E\u62A5\u8FDB\u5165 IPv4 \u7F51\u7EDC\u65F6\uFF0C\u628A IPv6 \u6570\u636E\u62A5\u5C01\u88C5\u6210 IPv4 \u6570\u636E\u62A5</li></ul></li></ul><h3 id="icmpv6" tabindex="-1"><a class="header-anchor" href="#icmpv6" aria-hidden="true">#</a> ICMPv6</h3><p>\u4E0E IPv4 \u4E00\u6837\uFF0C\u4E0D\u4FDD\u8BC1\u53EF\u9760\u4EA4\u4ED8\u3002\u65B0\u7248\u7684 ICMPv6\uFF0C\u5C06 ARP\uFF08\u5730\u5740\u89E3\u6790\u534F\u8BAE\uFF09 \u548C IGMP\uFF08\u7F51\u9645\u7EC4\u7BA1\u7406\u534F\u8BAE\uFF09 \u5408\u5E76\u5230\u4E86 ICMPv6 \u4E2D\u3002</p><h2 id="ip-\u591A\u64AD" tabindex="-1"><a class="header-anchor" href="#ip-\u591A\u64AD" aria-hidden="true">#</a> IP \u591A\u64AD</h2><blockquote><p>TODO: \u8FD9\u5757\u4EE5\u540E\u5728\u7EC6\u770B\uFF08\u53EF\u80FD\u6C38\u8FDC\u4E0D\u770B&lt;_&lt;\uFF09</p></blockquote><p>\u5728\u4E92\u8054\u7F51\u4E0A\u8FDB\u884C\u591A\u64AD\u5C31\u53EB\u505A<code>IP\u591A\u64AD</code>.</p><p>IP \u591A\u64AD\u7684\u76EE\u7684\u5730\u5740\uFF0C<code>D\u7C7BIP\u5730\u5740</code>\uFF0C\u5373\u8303\u56F4\uFF08D \u7C7B\u5730\u5740\u7684\u5343\u56DB\u4F4D\u7684\u524D\u7F00\u662F 1110\uFF09\u4E3A<code>224.0.0.0\u5230239.255.255.255</code></p><p><code>\u591A\u64AD\u8DEF\u7531\u5668</code>\uFF0C\u7528\u4E8E\u5B9E\u73B0\u5728\u4E92\u8054\u7F51\u8303\u56F4\u7684\u591A\u64AD\uFF0C\u4E5F\u53EF\u4EE5\u8F6C\u53D1\u666E\u901A\u7684\u5355\u64AD IP \u6570\u636E\u62A5\u3002</p><p>IP \u591A\u64AD\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u672C\u5C40\u57DF\u7F51\u4E0A\u8FDB\u884C\u786C\u4EF6\u591A\u64AD</li><li>\u4E92\u8054\u7F51\u8303\u56F4\u8FDB\u884C\u591A\u64AD</li></ul><h3 id="ip-\u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#ip-\u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE" aria-hidden="true">#</a> IP \u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE</h3><p>\u9700\u8981\u7684\u534F\u8BAE\uFF1A</p><ul><li><code>\u7F51\u9645\u7EC4\u7BA1\u7406\u534F\u8BAEIGMP\uFF08Internet Group Manangement Protocol\uFF09</code>\uFF0C\u8BA9\u8FDE\u63A5\u5728<code>\u672C\u5730\u5C40\u57DF\u7F51</code>\u7684\u591A\u64AD\u8DEF\u7531\u5668\u77E5\u9053<code>\u672C\u5C40\u57DF\u7F51</code>\u4E0A\u662F\u5426\u6709\u4E3B\u673A\uFF08\u4E25\u683C\u8BB2\uFF0C\u662F\u4E3B\u673A\u4E0A\u7684\u8FDB\u7A0B\uFF09\u53C2\u52A0\u6216\u9000\u51FA\u591A\u64AD\u7EC4\u3002</li><li><code>\u591A\u64AD\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</code><ul><li>\u6D2A\u6CDB\u548C\u7FE6\u9664</li><li>\u96A7\u9053\u6280\u672F</li><li>\u57FA\u4E8E\u6838\u5FC3\u7684\u53D1\u73B0\u6280\u672F</li></ul></li></ul><h2 id="\u865A\u62DF\u4E13\u7528\u7F51-vpn-\u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E13\u7528\u7F51-vpn-\u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" aria-hidden="true">#</a> \u865A\u62DF\u4E13\u7528\u7F51 VPN \u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT</h2><h3 id="\u865A\u62DF\u4E13\u7528\u7F51-vpn" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E13\u7528\u7F51-vpn" aria-hidden="true">#</a> \u865A\u62DF\u4E13\u7528\u7F51 VPN</h3><p><code>\u4E13\u7528\u5730\u5740</code>\uFF0C\u53EA\u80FD\u7528\u4E8E\u4E00\u4E2A\u673A\u6784\u5185\u7684\u901A\u4FE1\uFF0C\u4E0D\u80FD\u7528\u4E8E\u548C\u4E92\u8054\u7F51\u4E0A\u7684\u4E3B\u673A\u901A\u4FE1\u3002\u5373\u5728\u4E92\u8054\u7F51\u4E2D\u7684\u6240\u6709\u8DEF\u7531\u5668\uFF0C\u5BF9<code>\u76EE\u7684\u5730\u5740\u662F\u4E13\u7528\u5730\u5740</code>\u7684\u6570\u636E\u62A5\u4E00\u5F8B\u4E0D\u8FDB\u884C\u8F6C\u53D1\u3002</p><p>\u4E13\u7528\u7F51 IP \u5730\u5740\u6BB5</p><ul><li>A \u7C7B\uFF1A10.0.0.0 \u5230 10.255.255.255 \uFF081658 \u4E07\u4E2A\uFF09</li><li>B \u7C7B\uFF1A172.16.0.0 \u5230 172.31.255.255 \uFF08104 \u4E07\u4E2A\uFF09</li><li>C \u7C7B\uFF1A192.168.0.0 \u5230 192.168.255.255 \uFF086.5 \u4E07\u4E2A\uFF09</li></ul><p>\u4E92\u8054\u7F51 IP\uFF08\u5168\u7403\u5408\u6CD5 IP\uFF09 \u5730\u5740\u6BB5\uFF1A</p><ul><li>A \u7C7B\uFF1A <ul><li>1.0.0.0----9.255.255.255 \uFF081.5 \u4EBF\u4E2A\uFF09</li><li>11.0.0.0-----126.255.255.255 \uFF0819.23 \u4EBF\u4E2A\uFF09</li></ul></li><li>B \u7C7B\uFF1A <ul><li>128.0.0.0-----172.15.255.255 \uFF087.3 \u4EBF\u4E2A\uFF09</li><li>172.32.0.0-----191.255.255.255 \uFF083.3 \u4EBF\u4E2A\uFF09</li></ul></li><li>C \u7C7B\uFF1A <ul><li>192.0.0.0-------192.167.255.255 \uFF080.11 \u4EBF\u4E2A\uFF09</li><li>192.169.0.0-----223.255.255.255 \uFF085.03 \u4EBF\u4E2A\uFF09</li></ul></li></ul><p>VPN \u7684\u5E94\u7528\uFF1A</p><ol><li>\u4E13\u7528\u7F51\u4E4B\u95F4\u4E4B\u95F4\u5EFA\u7ACB\u901A\u4FE1\uFF0C\u7279\u70B9\uFF1A</li></ol><ul><li>\u4E0E\u4E13\u7528\u7F51\u8FDE\u63A5\u7684\u8DEF\u7531\u5668\u5177\u6709<code>\u5408\u6CD5\u7684\u5168\u7403IP</code></li></ul><ol start="2"><li>\u4E2A\u4EBA\u4E0E\u4E13\u7528\u7F51\u5EFA\u7ACB\u901A\u4FE1\uFF0C\u7279\u70B9\uFF1A</li></ol><ul><li>\u5458\u5DE5\u901A\u8FC7\u62E8\u53F7\u8FDB\u5165\u4E92\u8054\u7F51</li><li>\u9A7B\u7559\u5728\u4E2A\u4EBA\u7535\u8111\u4E2D VPN \u8F6F\u4EF6\uFF0C\u5728\u4E2A\u4EBA\u7535\u8111\u548C\u516C\u53F8\u4E3B\u673A\u4E4B\u95F4\u5EFA\u7ACB VPN \u96A7\u9053</li></ul><h3 id="\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" aria-hidden="true">#</a> \u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT</h3><p>\u89E3\u51B3\u7684\u95EE\u9898\uFF1A\u4E13\u7528\u7F51\u7684\u4E3B\u673A\uFF0C\u9700\u8981\u548C\u4E92\u8054\u7F51\u4E0A\u7684\u4E3B\u673A\u901A\u4FE1\u3002</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u5728\u4E13\u7528\u7F51\u8FDE\u63A5\u5230\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u5668\u4E0A\u5B89\u88C5 NAT \u8F6F\u4EF6\uFF0C\u8FD9\u79CD\u8DEF\u7531\u5668\u79F0\u4E3A<code>NAT\u8DEF\u7531\u5668</code>\uFF0C\u5B83\u81F3\u5C11\u6709\u4E00\u4E2A\u6709\u6548\u7684\u5916\u90E8\u5168\u7403 IP \u5730\u5740\u3002</p><p><code>NAT\u8DEF\u7531\u5668</code>\u7684\u4F5C\u7528\uFF1A</p><ul><li>NAT \u8DEF\u7531\u5668\u7684\u901A\u4FE1\uFF0C\u5FC5\u987B\u7531<code>\u4E13\u7528\u7F51\u53D1\u8D77</code></li><li>\u5C06\u4E13\u7528\u7F51\u4E2D\u4E3B\u673A\u53D1\u9001\u7684 IP \u6570\u636E\u62A5\u4E2D\u7684\u6E90 IP \u5730\u5740\uFF0C\u4FEE\u6539\u4E3A NAT \u8DEF\u7531\u5668\u7684\u5168\u7403 IP \u5730\u5740\uFF0C\u7136\u540E\u8F6C\u53D1\u51FA\u53BB\u3002</li><li>\u5C06\u4ECE\u4E92\u8054\u7F51\u6536\u5230\u7684 IP \u6570\u636E\u62A5\u4E2D\u7684\u76EE\u6807\u5730\u5740\uFF0C\u901A\u8FC7 <code>NAT \u5730\u5740\u8F6C\u6362\u8868</code>\uFF0C\u8F6C\u5316\u4E3A\u4E13\u7528\u7F51\u7684\u76EE\u7684\u4E3B\u673A\u7684 IP \u5730\u5740\u3002</li></ul><p>\u5907\u6CE8\uFF1A\u5F53 NAT \u8F6C\u6362\u8868\uFF0C\u4EC5\u8BB0\u5F55 IP \u65F6\uFF0C\u540C\u4E00\u65F6\u95F4\uFF0C\u4EC5\u80FD\u6709\u4E00\u53F0\u4E13\u7528\u7F51\u7684\u4E3B\u673A\uFF0C\u4F7F\u7528 NAT \u8DEF\u7531\u5668\u5411\u4E92\u8054\u7F51\u901A\u4FE1\u3002\u5F53 NAT \u8F6C\u6362\u8868\uFF0C\u8BB0\u5F55&lt;ip, port&gt;\u65F6\uFF0C\u540C\u4E00\u65F6\u95F4\uFF0C\u652F\u6301\u591A\u4E2A\u4E13\u7528\u7F51\u4E3B\u673A\u5411\u4E92\u8054\u7F51\u901A\u4FE1\u3002</p><p>\u4F20\u7EDF NAT\uFF08traditional NAT\uFF09\uFF0C\u4F7F\u7528 IP \u7684\u8F6C\u6362\u8868\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u65B9\u5411</th><th>\u5B57\u6BB5</th><th>\u65E7\u7684 IP \u5730\u5740</th><th>\u65B0\u7684 IP \u5730\u5740</th></tr></thead><tbody><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740</td><td>192.168.0.3</td><td>172.38.1.5</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740</td><td>172.38.1.5</td><td>192.168.0.3</td></tr><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740</td><td>192.168.0.7</td><td>172.38.1.6</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740</td><td>172.38.1.6</td><td>192.168.0.7</td></tr></tbody></table><p>NAPT\uFF08Network Address And Port Translation\uFF09,\u4F7F\u7528 IP\u3001\u7AEF\u53E3\u7684\u8F6C\u6362\u8868\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u65B9\u5411</th><th>\u5B57\u6BB5</th><th>\u65E7\u7684 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7</th><th>\u65B0\u7684 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7</th></tr></thead><tbody><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740:TCP \u6E90\u7AEF\u53E3</td><td>192.168.0.3:3000</td><td>172.38.1.5:40001</td></tr><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740:TCP \u6E90\u7AEF\u53E3</td><td>192.168.0.4:3000</td><td>172.38.1.5:40002</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740:TCP \u76EE\u7684\u7AEF\u53E3</td><td>172.38.1.5:40001</td><td>172.38.0.3:3000</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740:TCP \u76EE\u7684\u7AEF\u53E3</td><td>172.38.1.5:40002</td><td>172.38.0.4:3000</td></tr></tbody></table><p>\u5907\u6CE8\uFF1A\u8DEF\u7531\u5668\u662F\u5DE5\u4F5C\u5728\u7F51\u7EDC\u5C42\u7684\u8BBE\u5907\uFF0CNAPT \u8DEF\u7531\u5668\uFF0C\u8FD8\u8981\u67E5\u770B\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3\u3002</p>`,127);function t(a,o){return i}var r=l(d,[["render",t]]);export{r as default};
