var Me=Object.defineProperty,Be=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var ve=(l,t,e)=>t in l?Me(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,Y=(l,t)=>{for(var e in t||(t={}))Ne.call(t,e)&&ve(l,e,t[e]);if(de)for(var e of de(t))Ee.call(t,e)&&ve(l,e,t[e]);return l},J=(l,t)=>Be(l,De(t));import{r as I,o as a,c,d as k,e as y,h as P,i as p,j as pe,g as n,F as B,k as R,l as w,a as g,t as T,m as W,n as Q,p as C,w as M,q as he,s as x,b as j,v as U,x as Ie,y as Pe,z as Re,A as V,B as Z,C as G,D as _e,E as fe,G as H,u as me,f as D,H as He,I as Ae,T as be,J as z,K as ze,L as q,M as K,N as ee,O as ge,P as ke,Q as Oe,R as $e,S as Fe,U as X,V as te,W as We,X as je,Y as Ue}from"./app.7063835e.js";import{_ as Ve}from"./plugin-vue_export-helper.21dcd24c.js";const Ge={},qe={class:"theme-default-content custom"};function Ke(l,t){const e=I("Content");return a(),c("div",qe,[k(e)])}var Xe=Ve(Ge,[["render",Ke]]);const Ye={key:0,class:"features"},Je=y({setup(l){const t=P(),e=p(()=>pe(t.value.features)?t.value.features:[]);return(i,r)=>n(e).length?(a(),c("div",Ye,[(a(!0),c(B,null,R(n(e),_=>(a(),c("div",{key:_.title,class:"feature"},[g("h2",null,T(_.title),1),g("p",null,T(_.details),1)]))),128))])):w("",!0)}}),Qe=["innerHTML"],Ze=["textContent"],et=y({setup(l){const t=P(),e=p(()=>t.value.footer),i=p(()=>t.value.footerHtml);return(r,_)=>n(e)?(a(),c(B,{key:0},[n(i)?(a(),c("div",{key:0,class:"footer",innerHTML:n(e)},null,8,Qe)):(a(),c("div",{key:1,class:"footer",textContent:T(n(e))},null,8,Ze))],64)):w("",!0)}}),tt=["href","rel","target","aria-label"],nt=y({inheritAttrs:!1}),E=y(J(Y({},nt),{props:{item:{type:Object,required:!0}},setup(l){const t=l,e=W(),i=Re(),{item:r}=Q(t),_=p(()=>U(r.value.link)),f=p(()=>Ie(r.value.link)||Pe(r.value.link)),h=p(()=>{if(!f.value){if(r.value.target)return r.value.target;if(_.value)return"_blank"}}),s=p(()=>h.value==="_blank"),o=p(()=>!_.value&&!f.value&&!s.value),u=p(()=>{if(!f.value){if(r.value.rel)return r.value.rel;if(s.value)return"noopener noreferrer"}}),d=p(()=>r.value.ariaLabel||r.value.text),v=p(()=>{const L=Object.keys(i.value.locales);return L.length?!L.some(m=>m===r.value.link):r.value.link!=="/"}),b=p(()=>v.value?e.path.startsWith(r.value.link):!1),$=p(()=>o.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(L,m)=>{const S=I("RouterLink"),N=I("ExternalLinkIcon");return n(o)?(a(),C(S,he({key:0,class:{"router-link-active":n($)},to:n(r).link,"aria-label":n(d)},L.$attrs),{default:M(()=>[x(L.$slots,"before"),j(" "+T(n(r).text)+" ",1),x(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),c("a",he({key:1,class:"external-link",href:n(r).link,rel:n(u),target:n(h),"aria-label":n(d)},L.$attrs),[x(L.$slots,"before"),j(" "+T(n(r).text)+" ",1),n(s)?(a(),C(N,{key:0})):w("",!0),x(L.$slots,"after")],16,tt))}}})),at={class:"hero"},st={key:0,id:"main-title"},rt={key:1,class:"description"},ot={key:2,class:"actions"},lt=y({setup(l){const t=P(),e=V(),i=Z(),r=p(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),_=p(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=p(()=>t.value.heroAlt||_.value||"hero"),h=p(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),s=p(()=>pe(t.value.actions)?t.value.actions.map(({text:u,link:d,type:v="primary"})=>({text:u,link:d,type:v})):[]),o=()=>{if(!r.value)return null;const u=G("img",{src:_e(r.value),alt:f.value});return t.value.heroImageDark===void 0?u:G(fe,u)};return(u,d)=>(a(),c("header",at,[k(o),n(_)?(a(),c("h1",st,T(n(_)),1)):w("",!0),n(h)?(a(),c("p",rt,T(n(h)),1)):w("",!0),n(s).length?(a(),c("p",ot,[(a(!0),c(B,null,R(n(s),v=>(a(),C(E,{key:v.text,class:H(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):w("",!0)]))}}),ut={class:"home"},it=y({setup(l){return(t,e)=>(a(),c("main",ut,[k(lt),k(Je),k(Xe),k(et)]))}}),ct=y({setup(l){const t=me(),e=V(),i=D(),r=Z(),_=p(()=>i.value.home||t.value),f=p(()=>e.value.title),h=p(()=>r.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),s=()=>{if(!h.value)return null;const o=G("img",{class:"logo",src:_e(h.value),alt:f.value});return i.value.logoDark===void 0?o:G(fe,o)};return(o,u)=>{const d=I("RouterLink");return a(),C(d,{to:n(_)},{default:M(()=>[k(s),n(f)?(a(),c("span",{key:0,class:H(["site-name",{"can-hide":n(h)}])},T(n(f)),3)):w("",!0)]),_:1},8,["to"])}}}),Le=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),dt=(l,t)=>{if(t.hash===l)return!0;const e=Le(t.path),i=Le(l);return e===i},ye=(l,t)=>l.link&&dt(l.link,t)?!0:l.children?l.children.some(e=>ye(e,t)):!1,we=l=>!U(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,vt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},pt=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=we(l);return e!==null?vt[e]:null},ht=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:r})=>{if(!i)return null;const _=pt({docsRepo:l,editLinkPattern:r});return _?_.replace(/:repo/,U(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,He(`${Ae(e)}/${i}`)):null},xe=y({setup(l){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,r)=>(a(),C(be,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:M(()=>[x(i.$slots,"default")]),_:3}))}}),_t=["aria-label"],ft={class:"title"},mt=g("span",{class:"arrow down"},null,-1),bt=["aria-label"],gt={class:"title"},kt={class:"navbar-dropdown"},$t={class:"navbar-dropdown-subtitle"},Lt={key:1},yt={class:"navbar-dropdown-subitem-wrapper"},wt=y({props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=Q(t),i=p(()=>e.value.ariaLabel||e.value.text),r=z(!1),_=W();ze(()=>_.path,()=>{r.value=!1});const f=s=>{s.detail===0?r.value=!r.value:r.value=!1},h=(s,o)=>o[o.length-1]===s;return(s,o)=>(a(),c("div",{class:H(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":n(i),onClick:f},[g("span",ft,T(n(e).text),1),mt],8,_t),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n(i),onClick:o[0]||(o[0]=u=>r.value=!r.value)},[g("span",gt,T(n(e).text),1),g("span",{class:H(["arrow",r.value?"down":"right"])},null,2)],8,bt),k(xe,null,{default:M(()=>[q(g("ul",kt,[(a(!0),c(B,null,R(n(e).children,u=>(a(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(a(),c(B,{key:0},[g("h4",$t,[u.link?(a(),C(E,{key:0,item:u,onFocusout:d=>h(u,n(e).children)&&u.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(a(),c("span",Lt,T(u.text),1))]),g("ul",yt,[(a(!0),c(B,null,R(u.children,d=>(a(),c("li",{key:d.link,class:"navbar-dropdown-subitem"},[k(E,{item:d,onFocusout:v=>h(d,u.children)&&h(u,n(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),C(E,{key:1,item:u,onFocusout:d=>h(u,n(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[K,r.value]])]),_:1})],2))}}),xt={key:0,class:"navbar-items"},Ce=y({setup(l){const t=()=>{const o=ee(),u=me(),d=V(),v=D();return p(()=>{var S,N;const b=Object.keys(d.value.locales);if(b.length<2)return[];const $=o.currentRoute.value.path,L=o.currentRoute.value.fullPath;return[{text:(S=v.value.selectLanguageText)!=null?S:"unknown language",ariaLabel:(N=v.value.selectLanguageAriaLabel)!=null?N:"unkown language",children:b.map(A=>{var se,re,oe,le,ue,ie;const O=(re=(se=d.value.locales)==null?void 0:se[A])!=null?re:{},ne=(le=(oe=v.value.locales)==null?void 0:oe[A])!=null?le:{},ae=`${O.lang}`,Te=(ue=ne.selectLanguageName)!=null?ue:ae;let F;if(ae===d.value.lang)F=L;else{const ce=$.replace(u.value,A);o.getRoutes().some(Se=>Se.path===ce)?F=ce:F=(ie=ne.home)!=null?ie:A}return{text:Te,link:F}})}]})},e=()=>{const o=D(),u=p(()=>o.value.repo),d=p(()=>u.value?we(u.value):null),v=p(()=>u.value&&!U(u.value)?`https://github.com/${u.value}`:u.value),b=p(()=>v.value?o.value.repoLabel?o.value.repoLabel:d.value===null?"Source":d.value:null);return p(()=>!v.value||!b.value?[]:[{text:b.value,link:v.value}])},i=o=>ge(o)?ke(o):o.children?J(Y({},o),{children:o.children.map(i)}):o,_=(()=>{const o=D();return p(()=>(o.value.navbar||[]).map(i))})(),f=t(),h=e(),s=p(()=>[..._.value,...f.value,...h.value]);return(o,u)=>n(s).length?(a(),c("nav",xt,[(a(!0),c(B,null,R(n(s),d=>(a(),c("div",{key:d.text,class:"navbar-item"},[d.children?(a(),C(wt,{key:0,item:d},null,8,["item"])):(a(),C(E,{key:1,item:d},null,8,["item"]))]))),128))])):w("",!0)}}),Ct=["title"],Tt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},St=Oe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Mt=[St],Bt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Dt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Nt=[Dt],Et=y({setup(l){const t=D(),e=Z(),i=()=>{e.value=!e.value};return(r,_)=>(a(),c("button",{class:"toggle-dark-button",title:n(t).toggleDarkMode,onClick:i},[q((a(),c("svg",Tt,Mt,512)),[[K,!n(e)]]),q((a(),c("svg",Bt,Nt,512)),[[K,n(e)]])],8,Ct))}}),It=["title"],Pt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),Rt=[Pt],Ht=y({emits:["toggle"],setup(l){const t=D();return(e,i)=>(a(),c("div",{class:"toggle-sidebar-button",title:n(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=r=>e.$emit("toggle"))},Rt,8,It))}}),At=y({emits:["toggle-sidebar"],setup(l){const t=D(),e=z(null),i=z(null),r=z(0),_=p(()=>r.value?{maxWidth:r.value+"px"}:{}),f=p(()=>t.value.darkMode);$e(()=>{const s=719,o=h(e.value,"paddingLeft")+h(e.value,"paddingRight"),u=()=>{var d;window.innerWidth<=s?r.value=0:r.value=e.value.offsetWidth-o-(((d=i.value)==null?void 0:d.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(s,o){var v,b,$;const u=($=(b=(v=s==null?void 0:s.ownerDocument)==null?void 0:v.defaultView)==null?void 0:b.getComputedStyle(s,null))==null?void 0:$[o],d=Number.parseInt(u,10);return Number.isNaN(d)?0:d}return(s,o)=>{const u=I("NavbarSearch");return a(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[k(Ht,{onToggle:o[0]||(o[0]=d=>s.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:i},[k(ct)],512),g("div",{class:"navbar-items-wrapper",style:Fe(n(_))},[x(s.$slots,"before"),k(Ce,{class:"can-hide"}),x(s.$slots,"after"),n(f)?(a(),C(Et,{key:0})):w("",!0),k(u)],4)],512)}}}),zt={class:"page-meta"},Ot={key:0,class:"meta-item edit-link"},Ft={key:1,class:"meta-item last-updated"},Wt={class:"meta-item-label"},jt={class:"meta-item-info"},Ut={key:2,class:"meta-item contributors"},Vt={class:"meta-item-label"},Gt={class:"meta-item-info"},qt=["title"],Kt=j(", "),Xt=y({setup(l){const t=()=>{const s=D(),o=X(),u=P();return p(()=>{var N,A,O;if(!((A=(N=u.value.editLink)!=null?N:s.value.editLink)!=null?A:!0))return null;const{repo:v,docsRepo:b=v,docsBranch:$="main",docsDir:L="",editLinkText:m}=s.value;if(!b)return null;const S=ht({docsRepo:b,docsBranch:$,docsDir:L,filePathRelative:o.value.filePathRelative,editLinkPattern:(O=u.value.editLinkPattern)!=null?O:s.value.editLinkPattern});return S?{text:m!=null?m:"Edit this page",link:S}:null})},e=()=>{V();const s=D(),o=X(),u=P();return p(()=>{var b,$,L,m;return!(($=(b=u.value.lastUpdated)!=null?b:s.value.lastUpdated)!=null?$:!0)||!((L=o.value.git)==null?void 0:L.updatedTime)?null:new Date((m=o.value.git)==null?void 0:m.updatedTime).toLocaleString()})},i=()=>{const s=D(),o=X(),u=P();return p(()=>{var v,b,$,L;return((b=(v=u.value.contributors)!=null?v:s.value.contributors)!=null?b:!0)&&(L=($=o.value.git)==null?void 0:$.contributors)!=null?L:null})},r=D(),_=t(),f=e(),h=i();return(s,o)=>{const u=I("ClientOnly");return a(),c("footer",zt,[n(_)?(a(),c("div",Ot,[k(E,{class:"meta-item-label",item:n(_)},null,8,["item"])])):w("",!0),n(f)?(a(),c("div",Ft,[g("span",Wt,T(n(r).lastUpdatedText)+": ",1),k(u,null,{default:M(()=>[g("span",jt,T(n(f)),1)]),_:1})])):w("",!0),n(h)&&n(h).length?(a(),c("div",Ut,[g("span",Vt,T(n(r).contributorsText)+": ",1),g("span",Gt,[(a(!0),c(B,null,R(n(h),(d,v)=>(a(),c(B,{key:v},[g("span",{class:"contributor",title:`email: ${d.email}`},T(d.name),9,qt),v!==n(h).length-1?(a(),c(B,{key:0},[Kt],64)):w("",!0)],64))),128))])])):w("",!0)])}}}),Yt={key:0,class:"page-nav"},Jt={class:"inner"},Qt={key:0,class:"prev"},Zt={key:1,class:"next"},en=y({setup(l){const t=s=>s===!1?null:ge(s)?ke(s):We(s)?s:!1,e=(s,o,u)=>{const d=s.findIndex(v=>v.link===o);if(d!==-1){const v=s[d+u];return(v==null?void 0:v.link)?v:null}for(const v of s)if(v.children){const b=e(v.children,o,u);if(b)return b}return null},i=P(),r=te(),_=W(),f=p(()=>{const s=t(i.value.prev);return s!==!1?s:e(r.value,_.path,-1)}),h=p(()=>{const s=t(i.value.next);return s!==!1?s:e(r.value,_.path,1)});return(s,o)=>n(f)||n(h)?(a(),c("nav",Yt,[g("p",Jt,[n(f)?(a(),c("span",Qt,[k(E,{item:n(f)},null,8,["item"])])):w("",!0),n(h)?(a(),c("span",Zt,[k(E,{item:n(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}}),tn={class:"page"},nn={class:"theme-default-content"},an=y({setup(l){return(t,e)=>{const i=I("Content");return a(),c("main",tn,[x(t.$slots,"top"),g("div",nn,[k(i)]),k(Xt),k(en),x(t.$slots,"bottom")])}}}),sn={class:"sidebar-item-children"},rn=y({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:i}=Q(t),r=W(),_=ee(),f=p(()=>ye(e.value,r)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:f.value,collapsible:e.value.collapsible})),s=z(!0),o=z(void 0);return e.value.collapsible&&(s.value=f.value,o.value=()=>{s.value=!s.value},_.afterEach(()=>{s.value=f.value})),(u,d)=>{var b;const v=I("SidebarItem",!0);return a(),c("li",null,[n(e).link?(a(),C(E,{key:0,class:H(n(h)),item:n(e)},null,8,["class","item"])):(a(),c("p",{key:1,class:H(n(h)),onClick:d[0]||(d[0]=(...$)=>o.value&&o.value(...$))},[j(T(n(e).text)+" ",1),n(e).collapsible?(a(),c("span",{key:0,class:H(["arrow",s.value?"down":"right"])},null,2)):w("",!0)],2)),((b=n(e).children)==null?void 0:b.length)?(a(),C(xe,{key:2},{default:M(()=>[q(g("ul",sn,[(a(!0),c(B,null,R(n(e).children,$=>(a(),C(v,{key:`${n(i)}${$.text}${$.link}`,item:$,depth:n(i)+1},null,8,["item","depth"]))),128))],512),[[K,s.value]])]),_:1})):w("",!0)])}}}),on={key:0,class:"sidebar-items"},ln=y({setup(l){const t=te();return(e,i)=>n(t).length?(a(),c("ul",on,[(a(!0),c(B,null,R(n(t),r=>(a(),C(rn,{key:r.link||r.text,item:r},null,8,["item"]))),128))])):w("",!0)}}),un={class:"sidebar"},cn=y({setup(l){return(t,e)=>(a(),c("aside",un,[k(Ce),x(t.$slots,"top"),k(ln),x(t.$slots,"bottom")]))}}),hn=y({setup(l){const t=X(),e=P(),i=D(),r=p(()=>e.value.navbar!==!1&&i.value.navbar!==!1),_=te(),f=z(!1),h=m=>{f.value=typeof m=="boolean"?m:!f.value},s={x:0,y:0},o=m=>{s.x=m.changedTouches[0].clientX,s.y=m.changedTouches[0].clientY},u=m=>{const S=m.changedTouches[0].clientX-s.x,N=m.changedTouches[0].clientY-s.y;Math.abs(S)>Math.abs(N)&&Math.abs(S)>40&&(S>0&&s.x<=80?h(!0):h(!1))},d=p(()=>[{"no-navbar":!r.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},e.value.pageClass]);let v;$e(()=>{v=ee().afterEach(()=>{h(!1)})}),je(()=>{v()});const b=Ue(),$=b.resolve,L=b.pending;return(m,S)=>(a(),c("div",{class:H(["theme-container",n(d)]),onTouchstart:o,onTouchend:u},[x(m.$slots,"navbar",{},()=>[n(r)?(a(),C(At,{key:0,onToggleSidebar:h},{before:M(()=>[x(m.$slots,"navbar-before")]),after:M(()=>[x(m.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=N=>h(!1))}),x(m.$slots,"sidebar",{},()=>[k(cn,null,{top:M(()=>[x(m.$slots,"sidebar-top")]),bottom:M(()=>[x(m.$slots,"sidebar-bottom")]),_:3})]),x(m.$slots,"page",{},()=>[n(e).home?(a(),C(it,{key:0})):(a(),C(be,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:n($),onBeforeLeave:n(L)},{default:M(()=>[(a(),C(an,{key:n(t).path},{top:M(()=>[x(m.$slots,"page-top")]),bottom:M(()=>[x(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{hn as default};
