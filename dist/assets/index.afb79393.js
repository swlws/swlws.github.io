import{f as c,g as f,o as d,c as p,b as r,F as m,h as g,p as v,i as _,t as y}from"./app.374451dc.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var u,x=new Uint8Array(16);function b(){if(!u&&(u=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(x)}var w=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function C(e){return typeof e=="string"&&w.test(e)}var n=[];for(var i=0;i<256;++i)n.push((i+256).toString(16).substr(1));function R(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase();if(!C(o))throw TypeError("Stringified UUID is invalid");return o}function S(e,t,o){e=e||{};var a=e.random||(e.rng||b)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){o=o||0;for(var s=0;s<16;++s)t[o+s]=a[s];return t}return R(a)}const V=e=>(v("data-v-1170594b"),e=e(),_(),e),I=V(()=>r("span",null,"UUID-v4",-1)),k=c({setup(e){const t=f([]);function o(){t.value.length=0;let a=10;for(;a--;)t.value.push(S())}return o(),(a,s)=>(d(),p("article",null,[r("header",null,[I,r("button",{onClick:o},"\u5237\u65B0")]),r("section",null,[(d(!0),p(m,null,g(t.value,l=>(d(),p("div",{key:l},y(l),1))),128))])]))}});var B=h(k,[["__scopeId","data-v-1170594b"]]);export{B as default};
