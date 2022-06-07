import{m as r,o as n,c as o,a as e,q as i,F as s,l as a,x as t}from"./app.e4e7519f.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const h={},u=a('<h1 id="\u6D45\u8C08-asm" tabindex="-1"><a class="header-anchor" href="#\u6D45\u8C08-asm" aria-hidden="true">#</a> \u6D45\u8C08 ASM</h1><p>ASM \u5168\u79F0\u4E3A Attack Surface Management(ASM)\uFF0C\u662F\u7531 Gartner \u5728 2021 \u5E74 7 \u6708 14 \u65E5\u53D1\u5E03\u300A2021 \u5B89\u5168\u8FD0\u8425\u6280\u672F\u6210\u719F\u5EA6\u66F2\u7EBF\u300B\u63D0\u51FA\u7684\u6982\u5FF5\u3002</p><p>\u5E26\u7740\u7591\u95EE\u9605\u8BFB\uFF1A</p><ul><li>ToB \u4E2D\u7684\u8D44\u4EA7\uFF1F</li><li>ASM \u662F\u4EC0\u4E48\uFF1F</li><li>ASM \u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F</li><li>ASM \u5E26\u6765\u4E86\u4EC0\u4E48\u4EF7\u503C\uFF1F</li><li>ASM \u7684\u6838\u5FC3\u80FD\u529B\uFF1F</li><li>ASM \u4EA7\u54C1\u6709\u54EA\u4E9B\uFF1F</li></ul><h2 id="tob-\u4E2D\u7684\u8D44\u4EA7" tabindex="-1"><a class="header-anchor" href="#tob-\u4E2D\u7684\u8D44\u4EA7" aria-hidden="true">#</a> ToB \u4E2D\u7684\u8D44\u4EA7</h2><p>\u8C08 ASM \u4E4B\u524D\uFF0C\u5148\u804A\u4E0B\u8D44\u4EA7\u3002\u5728 ToB \u4E2D\u8D44\u4EA7\u7684\u5206\u7C7B\uFF0C\u5927\u81F4\u53EF\u4EE5\u5206\u4E3A\u56DB\u7C7B\uFF1A</p><ul><li>\u5DF2\u77E5\u8D44\u4EA7\u3002\u6307\u4E00\u4E2A\u7EC4\u7EC7\u660E\u786E\u77E5\u9053\u3001\u5E76\u5728\u7BA1\u7406\u4E2D\u7684\u8D44\u4EA7\u3002\u5982 Web \u7AD9\u70B9\u3001\u670D\u52A1\u3002</li><li>\u672A\u77E5\u8D44\u4EA7\u3002\u901A\u5E38\u6307\u5F71\u5B50\u8D44\u4EA7\uFF0C\u8FD9\u7C7B\u4E0D\u88AB\u7EC4\u7EC7\u673A\u6784\u611F\u77E5\u3001\u7BA1\u7406\u7684\u3002\u6BD4\u5982\u88AB\u9057\u5FD8\u7684\u7F51\u7EDC\u7AD9\u70B9\u3001\u670D\u52A1\u7B49\u3002</li><li>\u4F9B\u5E94\u5546\u8D44\u4EA7\u3002\u6765\u81EA\u7B2C\u4E09\u65B9\u5382\u5546\u3001\u6216\u8005\u4F19\u4F34\u516C\u53F8\u7684\u8D44\u4EA7\u3002</li><li>\u9644\u5C5E\u8D44\u4EA7\u3002\u5C5E\u4E8E\u540C\u4E00\u4E2A\u7EC4\u7EC7\uFF0C\u4F46\u6765\u81EA\u4E8E\u5408\u5E76\u6216\u6536\u8D2D\u7684\u9644\u5C5E\u516C\u53F8\u7684\u8D44\u4EA7\u3002\u53EF\u80FD\u662F\u5DF2\u77E5\u8D44\u4EA7\u3001\u672A\u77E5\u8D44\u4EA7\u3001\u5382\u5546\u8D44\u4EA7\u3002</li></ul><p>\u6309\u7167\u90E8\u7F72\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5212\u5206\u4E3A\uFF1A</p><ul><li>\u672C\u5730\u8D44\u4EA7</li><li>\u4E91\u8D44\u4EA7</li></ul><p>\u518D\u7EC6\u5206\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5316\u4E3A\uFF1A</p><ul><li>\u64CD\u4F5C\u7CFB\u7EDF\u3002Windows\u3001Linux...</li><li>\u786C\u4EF6\u4FE1\u606F\u3002\u4E3B\u677F\u3001\u786C\u76D8\u3001\u5185\u5B58\u6761...</li><li>\u6307\u7EB9\u3002IP\u3001Domain\u3001Cert\u3001\u7AEF\u53E3\u3001\u8FDB\u7A0B\u3001\u670D\u52A1...</li><li>\u5E94\u7528\u7A0B\u5E8F\u3002 <ul><li>\u7CFB\u7EDF\u7A0B\u5E8F\u3002ssh\u3001c++...</li><li>\u7528\u6237\u7A0B\u5E8F\u3002\u6570\u636E\u5E93\u3001\u4E2D\u95F4\u4EF6...</li></ul></li><li>Web \u7AD9\u70B9</li></ul><p><strong>\u5E38\u89C1\u7684\u8D44\u4EA7\u6536\u96C6\u65B9\u5F0F\uFF1A</strong></p><ul><li>CMDB</li><li>\u7F51\u7EDC\u7A7A\u95F4\u8D44\u4EA7\u6D4B\u7ED8\uFF0C\u5916\u90E8\u89C6\u89D2\u4E0B\u7684\u8D44\u4EA7</li><li>Agent \u63A2\u9488\uFF0C\u5185\u90E8\u89C6\u89D2\u4E0B\u7684\u8D44\u4EA7</li></ul><h2 id="\u653B\u51FB\u9762\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u653B\u51FB\u9762\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u653B\u51FB\u9762\u662F\u4EC0\u4E48</h2><p>ASM \u662F\u5F3A\u8C03\u4ECE<code>\u5916\u90E8\u653B\u51FB\u8005\u7684\u89D2\u5EA6</code>\uFF0C\u5BF9\u7EC4\u7EC7\u673A\u6784\u7684\u8D44\u4EA7\u7684\u653B\u51FB\u9762\u8FDB\u884C\u6301\u7EED\u53D1\u73B0\u3001\u6E05\u70B9\u3001\u5206\u7C7B\u3001\u4F18\u5148\u7EA7\u6392\u5E8F\u548C\u76D1\u63A7\u3002</p><p>ASM \u5E2E\u52A9\u7EC4\u7EC7\u8BC6\u522B\u66B4\u9732\u5728\u4E92\u8054\u7F51\u548C\u653B\u51FB\u8005\u7684 IT \u8D44\u4EA7\uFF0C\u5E76\u76D1\u63A7\u5B83\u4EEC\u662F\u5426\u5B58\u5728\u589E\u52A0\u653B\u51FB\u98CE\u9669\u7684\u610F\u5916\u53D8\u5316\uFF08\u7528\u6237\u63D0\u6743\u3001\u6587\u4EF6\u63D0\u6743\u7B49\uFF09\u548C\u6F0F\u6D1E\uFF08\u6F0F\u6D1E\u3001\u8865\u4E01\u3001\u57FA\u7EBF\u914D\u7F6E\u3001\u5165\u4FB5\u7B49\uFF09\u3002</p><p>\u4ECE\u5916\u90E8\u653B\u51FB\u8005\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u5B89\u5168\u56E2\u961F\u5F88\u5BB9\u6613\u6839\u636E\u8FD9\u4E9B\u8D44\u4EA7\u7684\u53EF\u653B\u51FB\u6027\u7EA7\u522B\uFF08\u8D44\u4EA7\u5BF9\u653B\u51FB\u8005\u7684\u5438\u5F15\u529B\uFF09\u786E\u5B9A\u4F18\u5148\u7EA7\u8FDB\u884C\u4FEE\u590D\u3002</p><p>ASM \u901A\u5E38\u5728\u7AD9\u5728\u5916\u90E8\u7684\u89D2\u5EA6\u63CF\u8FF0\u7684\uFF0C\u56E0\u6B64\u4E5F\u88AB\u79F0\u4F5C EASM\uFF08External Attack Surface Management \uFF09\uFF0C\u5373\u5916\u90E8\u653B\u51FB\u9762\u7BA1\u7406\u3002\u53E6\u5916\u8FD8\u6709\u4E00\u79CD\u65B0\u578B\u7684\u6280\u672F CAASM\uFF08Cyber Asset Attack Surface Management\uFF09\uFF0C\u5373\u7F51\u7EDC\u8D44\u4EA7\u653B\u51FB\u9762\u7BA1\u7406\u3002</p><h3 id="\u4E00\u4E2A\u653B\u51FB\u9762\u5305\u542B\u54EA\u4E9B\u4E1C\u897F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u653B\u51FB\u9762\u5305\u542B\u54EA\u4E9B\u4E1C\u897F" aria-hidden="true">#</a> \u4E00\u4E2A\u653B\u51FB\u9762\u5305\u542B\u54EA\u4E9B\u4E1C\u897F</h3><p>\u653B\u51FB\u9762\u6D89\u53CA\u7684\u8D44\u4EA7\u6709\u8BB8\u591A\u79CD\u7C7B\u578B\uFF0C\u5B83\u5305\u542B\u6240\u6709\u5728\u4E92\u8054\u7F51\u4E0A\u53EF\u89C1\u7684\u786C\u4EF6\u3001\u8F6F\u4EF6\u3001SaaS\u3001\u4E91\u8D44\u4EA7\u7B49\u7B49\uFF0C\u653B\u51FB\u8005\u901A\u8FC7\u8FD9\u4E9B\u80FD\u591F\u88AB\u53D1\u73B0\u3001\u5E76\u52A0\u4EE5\u5229\u7528\u7684\u8D44\u4EA7\uFF0C\u4ECE\u800C\u8FBE\u5230\u7834\u574F\u4F01\u4E1A\u5B89\u5168\u7684\u76EE\u7684\u3002</p><p>\u653B\u51FB\u9762\u4EA7\u54C1 VS \u8D44\u4EA7\u7BA1\u7406\u4EA7\u54C1\uFF1A</p><ul><li>\u5BF9\u4E8E\u4E00\u4E2A\u7EC4\u7EC7\u673A\u6784\uFF0C\u8D44\u4EA7\u6307\u7684\u662F\u5176\u6240\u62E5\u6709\u7684\u5168\u90E8\u7684\u786C\u4EF6\u3001\u8F6F\u4EF6\uFF1B</li><li>\u653B\u51FB\u9762\u66F4\u503E\u5411\u4E8E\u63CF\u8FF0\uFF0C\u8FD9\u4E2A\u7EC4\u7EC7\u673A\u6784\u4E2D\u66B4\u9732\u7ED9\u653B\u51FB\u8005\u7684\u8D44\u4EA7\u3002\u6240\u4EE5\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u653B\u51FB\u9762\u662F\u8D44\u4EA7\u7684\u4E00\u4E2A\u5B50\u96C6\u3002</li></ul><p>\u653B\u51FB\u9762 VS \u653B\u51FB\u5411\u91CF\uFF08Attack Vector\uFF09\uFF1A</p><ul><li>\u653B\u51FB\u5411\u91CF\u662F\u4E00\u79CD\u65B9\u6CD5\uFF0C\u5B83\u7528\u4E8E\u7A83\u53D6\u4E00\u4E2A\u7F51\u7EDC\u3001\u8BBE\u5907\u7684\u8BBF\u95EE\u6743\u9650\u3002</li><li>\u653B\u51FB\u9762\u53EF\u4EE5\u89C6\u4E3A\u653B\u51FB\u5411\u91CF\u7684\u96C6\u5408\uFF0C\u653B\u51FB\u8005\u4F7F\u7528\u653B\u51FB\u9762\uFF0C\u64CD\u7EB5\u7F51\u7EDC\u3001\u8BA1\u7B97\u673A\u7CFB\u7EDF\uFF0C\u6216\u8005\u7A83\u53D6\u6570\u636E\u3002</li></ul><h2 id="\u54EA\u4E9B\u56E0\u7D20\u4F1A\u5F71\u54CD\u653B\u51FB\u9762" tabindex="-1"><a class="header-anchor" href="#\u54EA\u4E9B\u56E0\u7D20\u4F1A\u5F71\u54CD\u653B\u51FB\u9762" aria-hidden="true">#</a> \u54EA\u4E9B\u56E0\u7D20\u4F1A\u5F71\u54CD\u653B\u51FB\u9762</h2><p>\u653B\u51FB\u9762\u5E94\u8BE5\u662F\u4E00\u4E2A\u52A8\u6001\u7684\u7ED3\u6784\uFF0C\u6BCF\u65F6\u6BCF\u523B\u90FD\u4F1A\u4E0D\u4E00\u6837\u3002\u5F71\u54CD\u653B\u51FB\u9762\u8303\u56F4\u7684\u56E0\u7D20\u4E3B\u8981\u6709\u4E09\u79CD\u56E0\u7D20\uFF1A</p><ul><li>\u672A\u77E5\u8D44\u4EA7\u3002\u8FD9\u7C7B\u4E0D\u53D7\u63A7\u7684\u8D44\u4EA7\uFF0C\u5B58\u5728\u5927\u91CF\u88AB\u653B\u51FB\u7684\u6F5C\u80FD\u3002</li><li>\u65B0\u53D1\u73B0\u7684\u6F0F\u6D1E\u3001\u8865\u4E01\u3002\u6743\u5A01\u673A\u6784\u673A\u6784\u53D1\u5E03\u7684\u6F0F\u6D1E\u8865\u4E01\u4FE1\u606F\uFF0C\u4F1A\u76F4\u63A5\u54CD\u5E94\u653B\u51FB\u9762\u7684\u8F93\u51FA\u503C\u3002\u6BD4\u5982\u4E4B\u524D\u53D1\u5E03\u7684 log4j \u6F0F\u6D1E\u3002</li><li>\u6301\u7EED\u589E\u52A0\u7684\u4E91\u8D44\u4EA7\u3002\u4E91\u90E8\u7F72\u7684\u4FBF\u5229\u6027\uFF0C\u5BFC\u81F4\u6700\u5927\u7684\u4E0D\u53D7\u63A7\u98CE\u9669\u3002</li></ul><h2 id="asm-\u7684\u4EF7\u503C" tabindex="-1"><a class="header-anchor" href="#asm-\u7684\u4EF7\u503C" aria-hidden="true">#</a> ASM \u7684\u4EF7\u503C</h2><p>\u5E38\u89C1\u7684 ToB \u7C7B\u7684\u5B89\u5168\u4EA7\u54C1\uFF0C\u8D44\u4EA7\u7BA1\u7406\u3001\u6F0F\u6D1E\u7BA1\u7406\u3001\u6E17\u900F\u6D4B\u8BD5\u3001\u7EA2\u84DD\u5BF9\u6297\uFF08BAS\uFF09\u7B49\uFF0C\u90FD\u662F\u4ECE\u5355\u7EF4\u5EA6\u89E3\u51B3\u670D\u52A1\u5668\u7684\u5B89\u5168\u95EE\u9898\u3002ASM \u610F\u56FE\u7EFC\u5408\u8FD9\u4E9B\u5DE5\u5177\uFF0C\u5C06\u6570\u636E\u6C47\u603B\uFF0C\u7EDF\u4E00\u8BC4\u4F30\u8BBE\u5907\u7684\u98CE\u9669\u4FE1\u606F\u3002</p><p>ASM \u4EA7\u54C1\u671F\u671B\u5E26\u6765\u7684\u6536\u76CA\uFF1A</p><ul><li>\u6301\u7EED\u53D1\u73B0\u8D44\u4EA7\uFF08\u5DF2\u77E5\u8D44\u4EA7\u3001\u672A\u77E5\u8D44\u4EA7\u3001\u4F9B\u5E94\u5546\u8D44\u4EA7\u3001\u9644\u5C5E\u8D44\u4EA7\uFF09\uFF0C\u8BC4\u5B9A\u98CE\u9669\u7B49\u7EA7\u3002</li><li>\u51CF\u5C11\u653B\u51FB\u9762\u3001\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u54CD\u5E94\u5904\u7406\u3002\u5E76\u4E0D\u662F\u6F0F\u6D1E\u5C31\u4E00\u5B9A\u9700\u8981\u4FEE\u590D\uFF08\u5E7F\u4E49\u7684\u6F0F\u6D1E\uFF0C\u5305\u62EC\u914D\u7F6E\u9879\u3001\u6F0F\u6D1E\u3001\u8865\u4E01\u3001\u5F31\u53E3\u4EE4\u7B49\uFF09\uFF0C\u627E\u51FA\u771F\u6B63\u9700\u8981\u5904\u7406\u7684\u6F0F\u6D1E\u3002</li><li>\u52A0\u56FA\u7F51\u7EDC\u5B89\u5168\u6001\u52BF\u3002\u901A\u8FC7\u4FEE\u590D\u624B\u6BB5\uFF0C\u9632\u5FA1\u7F51\u7EDC\u5B89\u5168\u3002</li></ul><h2 id="asm-\u7684\u6838\u5FC3\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#asm-\u7684\u6838\u5FC3\u80FD\u529B" aria-hidden="true">#</a> ASM \u7684\u6838\u5FC3\u80FD\u529B</h2><ul><li>\u6301\u7EED\u53D1\u73B0\u5168\u65B9\u4F4D\u8D44\u4EA7\u3002</li><li>\u52A8\u6001\u751F\u6210\u653B\u51FB\u9762\u3002\u7531\u4E8E\u65B0\u8BBE\u5907\u7684\u6269\u589E\u3001\u5E94\u7528\u7684\u589E\u52A0\u3001\u65B0\u589E\u7528\u6237\u7B49\u56E0\u7D20\uFF0C\u653B\u51FB\u9762\u5E94\u8BE5\u662F\u4E00\u4E2A\u52A8\u6001\u7684\u751F\u6210\u8FC7\u7A0B\u3002</li><li>\u4E0A\u4E0B\u6587\u68C0\u6D4B\u3002\u540C\u4E00\u4E2A\u8D44\u4EA7\u5728\u4E0D\u540C\u7684 IT \u73AF\u5883\u4E0B\uFF0C\u5B83\u7684\u653B\u51FB\u9762\u662F\u4E0D\u76F8\u540C\u7684\u3002\u9700\u8981\u8003\u8651\u591A\u79CD\u56E0\u7D20\uFF0C\u6BD4\u5982\u4E00\u4E2A\u8D44\u4EA7\uFF0C\u88AB\u8C01\u62E5\u6709\u3001\u5728\u4EC0\u4E48\u65F6\u95F4\u3001\u4EC0\u4E48\u4F4D\u7F6E\u3001\u5982\u4F55\u88AB\u4F7F\u7528\uFF0C\u4EE5\u53CA\u4F7F\u7528\u73AF\u5883\u3001\u4F7F\u7528\u8005\u7684 IP \u5730\u5740\u3001\u7F51\u7EDC\u8FDE\u63A5\u7B49\u4FE1\u606F\uFF0C\u90FD\u53EF\u4EE5\u5F71\u54CD\u653B\u51FB\u9762\u3002</li><li>\u8BC4\u5B9A\u4F18\u5148\u7EA7\u3002\u4F9D\u636E\u8D44\u4EA7\u7684\u98CE\u9669\u7B49\u7EA7\u3001\u5B89\u5168\u7B49\u7EA7\uFF0C\u786E\u5B9A\u8D44\u4EA7\u7684\u4FEE\u590D\u4F18\u5148\u7EA7\u3002\u8FD9\u4E2A\u8BC4\u5B9A\u662F\u57FA\u4E8E\u5BA2\u89C2\u7684\u73AF\u5883\uFF0C\u6BD4\u5982\uFF1A\u4E00\u4E2A\u4F7F\u7528\u4E86\u9AD8\u5371\u6F0F\u6D1E\u7684 log4j \u7684\u8D44\u4EA7\uFF0C\u5B83\u7684\u4FEE\u590D\u4F18\u5148\u7EA7\u53EF\u80FD\u662F\u6700\u4F4E\u7684\uFF08\u53EF\u80FD\u7684\u539F\u56E0\uFF0C\u8BBE\u5907\u672A\u8054\u7F51\uFF09\u3002</li><li>\u4FEE\u590D\u3002\u5BF9\u6F0F\u6D1E\u3001\u8865\u4E01\u3001\u914D\u7F6E\u3001\u5F31\u53E3\u4EE4\u7B49\u7684\u4FEE\u590D\u5DE5\u4F5C\u3002</li></ul><p>\u6982\u62EC\u7684\u6765\u8BB2\uFF0C\u4E00\u4E2A\u7406\u60F3\u7684 ASM \u4EA7\u54C1\u5E94\u8BE5\u5177\u5907\u7684\u80FD\u529B\uFF1A</p><ul><li>\u52A8\u6001\u7684\u81EA\u52A8\u6E05\u70B9\u8D44\u4EA7</li><li>\u4ECE\u653B\u51FB\u8005\u7684\u89C6\u89D2\u770B\u5F85\u8D44\u4EA7\uFF0C\u5E76\u8BC4\u4F30\u8D44\u4EA7\u7684\u98CE\u9669</li><li>\u57FA\u4E8E\u4E0A\u4E0B\u6587\u73AF\u5883\u3001\u98CE\u9669\u7B49\u7EA7\uFF0C\u8BC4\u5B9A\u5904\u7406\u4F18\u5148\u7EA7</li><li>\u52A8\u6001\u66F4\u65B0\u653B\u51FB\u9762</li><li>\u53CA\u65F6\u544A\u8B66</li><li>\u63D0\u4F9B API \u63A5\u53E3\uFF0C\u80FD\u591F\u96C6\u6210\u5176\u5B83\u7684\u5B89\u5168\u4EA7\u54C1</li></ul><h2 id="asm-\u4EA7\u54C1" tabindex="-1"><a class="header-anchor" href="#asm-\u4EA7\u54C1" aria-hidden="true">#</a> ASM \u4EA7\u54C1</h2>',36),d={href:"https://www.upguard.com/product/breachsight",target:"_blank",rel:"noopener noreferrer"},p=t("UpGuard Breaksight"),m=e("ul",null,[e("li",null,"\u504F\u5411\u4E8E\u6570\u636E\u3001\u51ED\u8BC1\u6CC4\u9732\u7684\u68C0\u6D4B\uFF0C\u6BD4\u5982\uFF1AS3\u3001\u540C\u6B65\u670D\u52A1\u3001Github \u4E0A\u7684\u6CC4\u5BC6\u4FE1\u606F"),e("li",null,"\u96C6\u6210\u80FD\u529B\uFF0C\u53EF\u4EE5\u96C6\u6210 RiskIQ")],-1),w={href:"https://www.riskiq.com/products/illuminate/",target:"_blank",rel:"noopener noreferrer"},_=t("RiskIQ"),f=e("ul",null,[e("li",null,"\u504F\u5411\u4E8E\u5A01\u80C1\u60C5\u62A5")],-1),S={href:"https://censys.io/attack-surface-management/",target:"_blank",rel:"noopener noreferrer"},g=t("censys"),k=e("ul",null,[e("li",null,"\u4FA7\u91CD\u4E8E\u7F51\u7EDC\u653B\u51FB\u9762\u7BA1\u7406\uFF0C\u65E0\u5185\u90E8\u89C6\u89D2\u7684\u8D44\u4EA7\u3002")],-1),A={href:"https://elevatesecurity.com/why-elevate/",target:"_blank",rel:"noopener noreferrer"},b=t("Elevate Security"),M=e("ul",null,[e("li",null,"\u5B83\u8BA4\u4E3A 90%\u5B89\u5168\u95EE\u9898\uFF0C\u662F\u7531\u4EBA\u4E3A\u64CD\u4F5C\u5F15\u8D77\u7684\uFF0C\u5C06\u4EBA\u7684\u884C\u4E3A\u5F53\u4F5C\u98CE\u9669\u8FDB\u884C\u7BA1\u7406")],-1),y={href:"https://www.tenable.com/products/tenable-lumin",target:"_blank",rel:"noopener noreferrer"},x=t("tenable lumin"),v=e("ul",null,[e("li",null,"\u57FA\u4E8E\u6F0F\u6D1E\u7684 Cyber Exposure Score")],-1),I={href:"https://www.cycognito.com/demo-video",target:"_blank",rel:"noopener noreferrer"},R=t("CYCOGNITO"),B=e("ul",null,[e("li",null,"\u5916\u90E8\u89C6\u89D2\u7684 ASM")],-1),C=a('<h2 id="\u7ED3\u675F\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u675F\u8BED" aria-hidden="true">#</a> \u7ED3\u675F\u8BED</h2><p>\u9053\u9AD8\u4E00\u5C3A\uFF0C\u9B54\u9AD8\u4E00\u4E08\u3002\u7F51\u7EDC\u5B89\u5168\u4E2D\uFF0C\u653B\u51FB\u8005\u7684\u653B\u51FB\u65B9\u5F0F\u6C38\u8FDC\u6BD4\u7EC4\u7EC7\u673A\u6784\u77E5\u9053\u66F4\u591A\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u662F\u5C3D\u53EF\u80FD\u7684\u51CF\u5C11\u653B\u51FB\u9762\u3002</p><p>ASM \u672C\u8D28\u662F\u96C6\u6210\u5404\u7C7B\u5B89\u5168\u4EA7\u54C1\uFF0C\u5BF9\u5DF2\u77E5\u98CE\u9669\u7684\u7BA1\u7406\u4F5C\u51FA\u4E00\u4E2A\u6307\u5F15\uFF0C\u8BA9\u4EA7\u54C1\u4F7F\u7528\u8005\u80FD\u591F\u4ECE\u653B\u51FB\u8005\u7684\u89C6\u89D2\uFF0C\u4E86\u89E3\u5230\u8BBE\u5907\u5177\u5907\u7684\u98CE\u9669\uFF0C\u4EE5\u53CA\u54EA\u4E9B\u98CE\u9669\u662F\u9700\u8981\u53CA\u65F6\u4FEE\u590D\u7684\u3001\u54EA\u4E9B\u98CE\u9669\u5B9E\u9645\u4E0A\u662F\u53EF\u4EE5\u4E0D\u7528\u7406\u4F1A\u7684\u3002</p><p>ASM \u662F\u4E00\u4E2A\u7EFC\u5408\u7684\u4F53\u7CFB\uFF0C\u5B83\u6D89\u53CA\u5F88\u591A\u65B9\u9762\uFF0C\u914D\u7F6E\u3001\u6F0F\u6D1E\u3001\u8865\u4E01\u3001\u5165\u4FB5\u7B49\u3002</p><p>\u4EA7\u54C1\u7684\u96BE\u70B9\uFF1A</p><ol><li>\u5168\u9762\u7684\u8D44\u4EA7\u6E05\u70B9\u3002\u5982\u4F55\u6E05\u70B9\u3001\u5F52\u7C7B\u6240\u6709\u7684\u8D44\u4EA7\uFF1F</li><li>\u653B\u51FB\u8005\u7684\u89C6\u89D2\u3002\u66B4\u9732\u9762\u5982\u4F55\u5904\u7406\uFF0C\u4EC0\u4E48\u6837\u7684\u8D44\u4EA7\u624D\u662F\u88AB\u66B4\u9732\u7684\u5462\uFF1F\u653B\u51FB\u9762\u5982\u4F55\u5B9A\u4E49\uFF1F</li><li>\u4E0A\u4E0B\u6587\u3002\u5982\u4F55\u8BA1\u7B97\u4E00\u4E2A\u8D44\u4EA7\u7684\u4E0A\u4E0B\u6587\uFF1F</li><li>\u98CE\u9669\u8BC4\u7EA7\u7B97\u6CD5\u3002\u54EA\u4E9B\u56E0\u7D20\u9700\u8981\u52A0\u5165\u98CE\u9669\u7684\u8BA1\u7B97\uFF1F</li></ol><hr><p><strong>Product:</strong></p><ul><li>UpGuard Breaksight https://www.upguard.com/product/breachsight</li><li>RiskIQ https://www.riskiq.com/products/illuminate/</li><li>Elevate Security https://elevatesecurity.com/why-elevate/</li><li>censys https://censys.io/attack-surface-management/</li><li>Elevate Security https://elevatesecurity.com/why-elevate/</li><li>tenable lumin https://www.tenable.com/products/tenable-lumin</li><li>CYCOGNITO https://www.cycognito.com/demo-video</li></ul><p><strong>Reference:</strong></p><ul><li>[^1]: Top Security and Risk Management Trends for 2022 https://www.gartner.com/en/newsroom/press-releases/2022-03-07-gartner-identifies-top-security-and-risk-management-trends-for-2022</li><li>[^2]: Randori ASM Reference https://www.randori.com/guides/attack-surface-management-the-definitive-guide/</li><li>[^3]: UpGard ASM Reference https://www.upguard.com/blog/attack-surface-management</li><li>[^4]: RiskIQ ASM Reference https://www.riskiq.com/what-is-attack-surface-management/</li><li>[^5]: CrowdStrike ASM Reference https://www.crowdstrike.com/cybersecurity-101/attack-surface-management/</li><li>[^6]: CrowdStrike&#39;s RiskIQ https://www.crowdstrike.com/falcon/2020/wp-content/uploads/2020/10/RiskIQ-Store-Partner-Solution-Brief.pdf</li><li>[^7]: Attack Vector https://www.upguard.com/blog/attack-vector</li><li>[^8]: \u7F51\u7EDC\u5B89\u5168\u9632\u5FA1\u6280\u672F https://websec.readthedocs.io/zh/latest/defense/index.html</li><li>[^9]: \u8D44\u4EA7\u66B4\u9732\u9762\u7684\u8BEF\u533A http://www.hackdig.com/07/hack-421252.htm</li></ul>',11);function T(E,V){const l=r("ExternalLinkIcon");return n(),o(s,null,[u,e("ul",null,[e("li",null,[e("a",d,[p,i(l)]),m]),e("li",null,[e("a",w,[_,i(l)]),f]),e("li",null,[e("a",S,[g,i(l)]),k]),e("li",null,[e("a",A,[b,i(l)]),M]),e("li",null,[e("a",y,[x,i(l)]),v]),e("li",null,[e("a",I,[R,i(l)]),B])]),C],64)}var Q=c(h,[["render",T]]);export{Q as default};
