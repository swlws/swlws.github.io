"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
var uuid = require("uuid");
var dayjs = require("dayjs");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
var dayjs__default = /* @__PURE__ */ _interopDefaultLegacy(dayjs);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$k;
  })),
  "v-7e25fb5f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$i;
  })),
  "v-66a4a9c9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return tabMessage_html$2;
  })),
  "v-350a936e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return outNetScan_html$2;
  })),
  "v-4114f302": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$g;
  })),
  "v-1559a150": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$e;
  })),
  "v-1a4400a0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return id_html$2;
  })),
  "v-1559ca3e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$c;
  })),
  "v-c0ec2056": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return todo_html$2;
  })),
  "v-3ce30bc0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _2LinkLayer_html$2;
  })),
  "v-7b2e4b21": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _3NetworkLayer_html$2;
  })),
  "v-e52a1136": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _4TransportLayer_html$2;
  })),
  "v-7733477d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _5ApplicationLayer_html$2;
  })),
  "v-10c3048b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _6Secure_html$2;
  })),
  "v-c07620de": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return concept_html$2;
  })),
  "v-14abcfc0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$a;
  })),
  "v-062cec8e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return demand_html$2;
  })),
  "v-6bd94495": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$8;
  })),
  "v-3dd6c0ca": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return pool_html$2;
  })),
  "v-5b77245b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return code_html$2;
  })),
  "v-84cde9a4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return type_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$6;
  }).then(({ data: data2 }) => data2),
  "v-7e25fb5f": () => Promise.resolve().then(function() {
    return index_html$5;
  }).then(({ data: data2 }) => data2),
  "v-66a4a9c9": () => Promise.resolve().then(function() {
    return tabMessage_html;
  }).then(({ data: data2 }) => data2),
  "v-350a936e": () => Promise.resolve().then(function() {
    return outNetScan_html;
  }).then(({ data: data2 }) => data2),
  "v-4114f302": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-1559a150": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-1a4400a0": () => Promise.resolve().then(function() {
    return id_html;
  }).then(({ data: data2 }) => data2),
  "v-1559ca3e": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-c0ec2056": () => Promise.resolve().then(function() {
    return todo_html;
  }).then(({ data: data2 }) => data2),
  "v-3ce30bc0": () => Promise.resolve().then(function() {
    return _2LinkLayer_html;
  }).then(({ data: data2 }) => data2),
  "v-7b2e4b21": () => Promise.resolve().then(function() {
    return _3NetworkLayer_html;
  }).then(({ data: data2 }) => data2),
  "v-e52a1136": () => Promise.resolve().then(function() {
    return _4TransportLayer_html;
  }).then(({ data: data2 }) => data2),
  "v-7733477d": () => Promise.resolve().then(function() {
    return _5ApplicationLayer_html;
  }).then(({ data: data2 }) => data2),
  "v-10c3048b": () => Promise.resolve().then(function() {
    return _6Secure_html;
  }).then(({ data: data2 }) => data2),
  "v-c07620de": () => Promise.resolve().then(function() {
    return concept_html;
  }).then(({ data: data2 }) => data2),
  "v-14abcfc0": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-062cec8e": () => Promise.resolve().then(function() {
    return demand_html;
  }).then(({ data: data2 }) => data2),
  "v-6bd94495": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-3dd6c0ca": () => Promise.resolve().then(function() {
    return pool_html;
  }).then(({ data: data2 }) => data2),
  "v-5b77245b": () => Promise.resolve().then(function() {
    return code_html;
  }).then(({ data: data2 }) => data2),
  "v-84cde9a4": () => Promise.resolve().then(function() {
    return type_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/",
  "lang": "zh-CN",
  "title": "Code\u601D\u7EF4",
  "description": "\u591A\u8BFB\u4E66 \u591A\u770B\u62A5 \u591A\u601D\u8003",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/imgs/logo.png"
      }
    ]
  ],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var vars$4 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales$1 = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales: locales$1 }));
});
var vars$3 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "repo": "https://github.com/swlws",
  "logo": "/imgs/logo.png",
  "navbar": [
    {
      "text": "\u524D\u7AEF",
      "link": "/front/"
    },
    {
      "text": "\u5B89\u5168",
      "link": "/secure/"
    },
    {
      "text": "\u5DE5\u5177",
      "link": "/tool/"
    }
  ],
  "sidebar": {
    "/front/": [
      {
        "text": "TS",
        "collapsible": true,
        "children": [
          "/front/ts/code.md"
        ]
      },
      {
        "text": "\u901A\u4FE1",
        "collapsible": true,
        "children": [
          "/front/tab-message.md"
        ]
      },
      {
        "text": "\u8BA1\u7B97\u673A\u7F51\u8DEF",
        "collapsible": true,
        "link": "/front/network/",
        "children": [
          "/front/network/concept.md",
          "/front/network/2-link-layer.md",
          "/front/network/3-network-layer.md",
          "/front/network/4-transport-layer.md",
          "/front/network/5-application-layer.md"
        ]
      },
      {
        "text": "\u9879\u76EE\u7BA1\u7406",
        "collapsible": true,
        "children": [
          "/front/project/demand.md"
        ]
      }
    ],
    "/secure/": [
      {
        "text": "\u6982\u89C8",
        "link": "/secure/"
      },
      "/secure/out-net-scan.md"
    ]
  },
  "sidebarDepth": 12,
  "docsRepo": true,
  "lastUpdated": false,
  "contributors": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$K = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$J = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index$4 = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$K);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$J);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var clientAppEnhance4 = ({ app }) => {
  app.component("generate-id", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index$3;
  }))), app.component("todo", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index$1;
  })));
};
const useHotKeys = ({ input, hotKeys: hotKeys2 }) => {
  const onKeydown = (event) => {
    if (!input.value || hotKeys2.value.length === 0)
      return;
    if (event.target === document.body && hotKeys2.value.includes(event.key)) {
      input.value.focus();
      event.preventDefault();
    }
  };
  vue.onMounted(() => {
    document.addEventListener("keydown", onKeydown);
  });
  vue.onBeforeUnmount(() => {
    document.removeEventListener("keydown", onKeydown);
  });
};
const searchIndex$1 = [
  {
    "title": "Welcome",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/front/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Web \u95F4\u901A\u4FE1",
    "headers": [
      {
        "level": 2,
        "title": "\u4E00\u3001\u573A\u666F",
        "slug": "\u4E00\u3001\u573A\u666F",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B Tab \u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F",
        "slug": "\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B-tab-\u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F",
        "children": [
          {
            "level": 3,
            "title": "2.1 window.postMessge",
            "slug": "_2-1-window-postmessge",
            "children": []
          },
          {
            "level": 3,
            "title": "2.2 BroadCast Channel",
            "slug": "_2-2-broadcast-channel",
            "children": []
          },
          {
            "level": 3,
            "title": "2.3 Service Worker",
            "slug": "_2-3-service-worker",
            "children": []
          },
          {
            "level": 3,
            "title": "2.4 LocalStorage",
            "slug": "_2-4-localstorage",
            "children": []
          },
          {
            "level": 3,
            "title": "2.5 IndexedDB",
            "slug": "_2-5-indexeddb",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1",
        "slug": "\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1",
        "children": [
          {
            "level": 3,
            "title": "3.1 iframe",
            "slug": "_3-1-iframe",
            "children": []
          }
        ]
      }
    ],
    "path": "/front/tab-message.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u5916\u7F51\u63A2\u6D4B",
    "headers": [
      {
        "level": 2,
        "title": "\u8D44\u4EA7\u6D4B\u7ED8",
        "slug": "\u8D44\u4EA7\u6D4B\u7ED8",
        "children": []
      },
      {
        "level": 2,
        "title": "\u57DF\u540D\u89E3\u6790",
        "slug": "\u57DF\u540D\u89E3\u6790",
        "children": [
          {
            "level": 3,
            "title": "\u57DF\u540D --> IP \u5730\u5740",
            "slug": "\u57DF\u540D-ip-\u5730\u5740",
            "children": []
          },
          {
            "level": 3,
            "title": "IP \u5730\u5740 --> \u57DF\u540D",
            "slug": "ip-\u5730\u5740-\u57DF\u540D",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u57DF\u540D\u7206\u7834",
        "slug": "\u57DF\u540D\u7206\u7834",
        "children": [
          {
            "level": 3,
            "title": "\u57DF\u540D\u5B57\u5178",
            "slug": "\u57DF\u540D\u5B57\u5178",
            "children": []
          },
          {
            "level": 3,
            "title": "\u641C\u7D22\u5F15\u64CE",
            "slug": "\u641C\u7D22\u5F15\u64CE",
            "children": []
          },
          {
            "level": 3,
            "title": "\u8BC1\u4E66\u900F\u660E",
            "slug": "\u8BC1\u4E66\u900F\u660E",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5728\u7EBF\u5DE5\u5177",
            "slug": "\u5728\u7EBF\u5DE5\u5177",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "IP \u63A2\u6D4B",
        "slug": "ip-\u63A2\u6D4B",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7AEF\u53E3\u63A2\u6D4B",
        "slug": "\u7AEF\u53E3\u63A2\u6D4B",
        "children": []
      },
      {
        "level": 2,
        "title": "Web \u7AD9\u70B9\u63A2\u6D4B",
        "slug": "web-\u7AD9\u70B9\u63A2\u6D4B",
        "children": []
      },
      {
        "level": 2,
        "title": "Web \u7AD9\u70B9\u6307\u7EB9",
        "slug": "web-\u7AD9\u70B9\u6307\u7EB9",
        "children": []
      },
      {
        "level": 2,
        "title": "\u53C2\u8003",
        "slug": "\u53C2\u8003",
        "children": []
      }
    ],
    "path": "/secure/out-net-scan.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/secure/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Todo",
    "headers": [],
    "path": "/todo/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u968F\u673A ID \u751F\u6210\u5668",
    "headers": [
      {
        "level": 2,
        "title": "UUID-V4",
        "slug": "uuid-v4",
        "children": []
      }
    ],
    "path": "/tool/id.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u5DE5\u5177",
    "headers": [],
    "path": "/tool/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Todo",
    "headers": [],
    "path": "/tool/todo.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u6570\u636E\u94FE\u8DEF\u5C42",
    "headers": [],
    "path": "/front/network/2-link-layer.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u7F51\u7EDC\u5C42",
    "headers": [
      {
        "level": 2,
        "title": "\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1",
        "slug": "\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7F51\u9645\u534F\u8BAE IP\uFF08Internet Protocol\uFF09",
        "slug": "\u7F51\u9645\u534F\u8BAE-ip-internet-protocol",
        "children": [
          {
            "level": 3,
            "title": "IP \u5730\u5740\u548C\u786C\u4EF6\u5730\u5740",
            "slug": "ip-\u5730\u5740\u548C\u786C\u4EF6\u5730\u5740",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5206\u7C7B\u7684 IP \u5730\u5740",
            "slug": "\u5206\u7C7B\u7684-ip-\u5730\u5740",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5730\u5740\u89E3\u6790\u534F\u8BAE ARP",
            "slug": "\u5730\u5740\u89E3\u6790\u534F\u8BAE-arp",
            "children": []
          },
          {
            "level": 3,
            "title": "IP \u6570\u636E\u62A5",
            "slug": "ip-\u6570\u636E\u62A5",
            "children": []
          },
          {
            "level": 3,
            "title": "IP \u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B\uFF08\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4\uFF09",
            "slug": "ip-\u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B-\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51",
        "slug": "\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE ICMP",
        "slug": "\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE-icmp",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
        "slug": "\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
        "children": [
          {
            "level": 3,
            "title": "\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5",
            "slug": "\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
            "slug": "\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
            "children": []
          },
          {
            "level": 3,
            "title": "\u8DEF\u7531\u5668\u7684\u6784\u6210",
            "slug": "\u8DEF\u7531\u5668\u7684\u6784\u6210",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "IPv6",
        "slug": "ipv6",
        "children": [
          {
            "level": 3,
            "title": "IPv6 \u7684\u5730\u5740",
            "slug": "ipv6-\u7684\u5730\u5740",
            "children": []
          },
          {
            "level": 3,
            "title": "IPv6 \u6570\u636E\u62A5",
            "slug": "ipv6-\u6570\u636E\u62A5",
            "children": []
          },
          {
            "level": 3,
            "title": "IPv4 \u5411 IPv6 \u8FC7\u6E21",
            "slug": "ipv4-\u5411-ipv6-\u8FC7\u6E21",
            "children": []
          },
          {
            "level": 3,
            "title": "ICMPv6",
            "slug": "icmpv6",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "IP \u591A\u64AD",
        "slug": "ip-\u591A\u64AD",
        "children": [
          {
            "level": 3,
            "title": "IP \u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE",
            "slug": "ip-\u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u865A\u62DF\u4E13\u7528\u7F51 VPN \u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT",
        "slug": "\u865A\u62DF\u4E13\u7528\u7F51-vpn-\u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat",
        "children": [
          {
            "level": 3,
            "title": "\u865A\u62DF\u4E13\u7528\u7F51 VPN",
            "slug": "\u865A\u62DF\u4E13\u7528\u7F51-vpn",
            "children": []
          },
          {
            "level": 3,
            "title": "\u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT",
            "slug": "\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat",
            "children": []
          }
        ]
      }
    ],
    "path": "/front/network/3-network-layer.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u8FD0\u8F93\u5C42",
    "headers": [
      {
        "level": 2,
        "title": "\u6982\u8FF0",
        "slug": "\u6982\u8FF0",
        "children": [
          {
            "level": 3,
            "title": "\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1",
            "slug": "\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1",
            "children": []
          },
          {
            "level": 3,
            "title": "\u8FD0\u8F93\u5C42\u7684\u4E24\u79CD\u534F\u8BAE",
            "slug": "\u8FD0\u8F93\u5C42\u7684\u4E24\u79CD\u534F\u8BAE",
            "children": []
          },
          {
            "level": 3,
            "title": "\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3",
            "slug": "\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE UDP",
        "slug": "\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE-udp",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4F20\u8F93\u63A7\u5236\u534F\u8BAE TCP",
        "slug": "\u4F20\u8F93\u63A7\u5236\u534F\u8BAE-tcp",
        "children": [
          {
            "level": 3,
            "title": "TCP \u7684\u8FDE\u63A5",
            "slug": "tcp-\u7684\u8FDE\u63A5",
            "children": []
          },
          {
            "level": 3,
            "title": "\u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406",
            "slug": "\u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406",
            "children": []
          },
          {
            "level": 3,
            "title": "TCP \u62A5\u6587\u6BB5\u7684\u9996\u90E8",
            "slug": "tcp-\u62A5\u6587\u6BB5\u7684\u9996\u90E8",
            "children": []
          },
          {
            "level": 3,
            "title": "TCP \u53EF\u9760\u4F20\u8F93\u7684\u5B9E\u73B0",
            "slug": "tcp-\u53EF\u9760\u4F20\u8F93\u7684\u5B9E\u73B0",
            "children": []
          },
          {
            "level": 3,
            "title": "TCP \u7684\u6D41\u91CF\u63A7\u5236",
            "slug": "tcp-\u7684\u6D41\u91CF\u63A7\u5236",
            "children": []
          },
          {
            "level": 3,
            "title": "TCP \u7684\u4F20\u8F93",
            "slug": "tcp-\u7684\u4F20\u8F93",
            "children": []
          },
          {
            "level": 3,
            "title": "TCP \u7684\u62E5\u585E\u63A7\u5236",
            "slug": "tcp-\u7684\u62E5\u585E\u63A7\u5236",
            "children": []
          },
          {
            "level": 3,
            "title": "TCP \u7684\u8FD0\u8F93\u8FDE\u63A5\u7BA1\u7406",
            "slug": "tcp-\u7684\u8FD0\u8F93\u8FDE\u63A5\u7BA1\u7406",
            "children": []
          }
        ]
      }
    ],
    "path": "/front/network/4-transport-layer.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u5E94\u7528\u5C42",
    "headers": [
      {
        "level": 2,
        "title": "\u57DF\u540D\u7CFB\u7EDF DNS\uFF08Domain Name Systen\uFF09",
        "slug": "\u57DF\u540D\u7CFB\u7EDF-dns-domain-name-systen",
        "children": [
          {
            "level": 3,
            "title": "\u4E92\u8054\u7F51\u7684\u57DF\u540D\u7ED3\u6784",
            "slug": "\u4E92\u8054\u7F51\u7684\u57DF\u540D\u7ED3\u6784",
            "children": []
          },
          {
            "level": 3,
            "title": "\u57DF\u540D\u670D\u52A1\u5668",
            "slug": "\u57DF\u540D\u670D\u52A1\u5668",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u6587\u4EF6\u4F20\u9001\u534F\u8BAE",
        "slug": "\u6587\u4EF6\u4F20\u9001\u534F\u8BAE",
        "children": [
          {
            "level": 3,
            "title": "FTP \u7684\u57FA\u672C\u5DE5\u4F5C\u539F\u7406",
            "slug": "ftp-\u7684\u57FA\u672C\u5DE5\u4F5C\u539F\u7406",
            "children": []
          },
          {
            "level": 3,
            "title": "\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE TFTP\uFF08Trivial File Transfer Protocol\uFF09",
            "slug": "\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE-tftp-trivial-file-transfer-protocol",
            "children": []
          },
          {
            "level": 3,
            "title": "\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF NFS",
            "slug": "\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF-nfs",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE TELNET",
        "slug": "\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE-telnet",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E07\u7EF4\u7F51 WWW\uFF08World Wide Web\uFF09",
        "slug": "\u4E07\u7EF4\u7F51-www-world-wide-web",
        "children": [
          {
            "level": 3,
            "title": "\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26 URL\uFF08Uniform Resource Locator\uFF09",
            "slug": "\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26-url-uniform-resource-locator",
            "children": []
          },
          {
            "level": 3,
            "title": "\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE HTTP\uFF08HyperText Transfer Protocol\uFF09",
            "slug": "\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE-http-hypertext-transfer-protocol",
            "children": []
          },
          {
            "level": 3,
            "title": "\u4E07\u7EF4\u7F51\u7684\u6587\u6863",
            "slug": "\u4E07\u7EF4\u7F51\u7684\u6587\u6863",
            "children": []
          },
          {
            "level": 3,
            "title": "\u4E07\u7EF4\u7F51\u7684\u4FE1\u606F\u68C0\u7D22\u7CFB\u7EDF",
            "slug": "\u4E07\u7EF4\u7F51\u7684\u4FE1\u606F\u68C0\u7D22\u7CFB\u7EDF",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u7535\u5B50\u90AE\u4EF6\uFF08e-mail\uFF09",
        "slug": "\u7535\u5B50\u90AE\u4EF6-e-mail",
        "children": [
          {
            "level": 3,
            "title": "\u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE POP3 \u548C IMAP",
            "slug": "\u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE-pop3-\u548C-imap",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE DHCP",
        "slug": "\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE-dhcp",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5E94\u7528\u8FDB\u7A0B\u8DE8\u8D8A\u7F51\u7EDC\u7684\u901A\u4FE1",
        "slug": "\u5E94\u7528\u8FDB\u7A0B\u8DE8\u8D8A\u7F51\u7EDC\u7684\u901A\u4FE1",
        "children": []
      },
      {
        "level": 2,
        "title": "P2P \u5E94\u7528",
        "slug": "p2p-\u5E94\u7528",
        "children": []
      },
      {
        "level": 2,
        "title": "SSH",
        "slug": "ssh",
        "children": []
      }
    ],
    "path": "/front/network/5-application-layer.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u7F51\u7EDC\u5B89\u5168",
    "headers": [
      {
        "level": 2,
        "title": "\u7F51\u7EDC\u5B89\u5168\u95EE\u9898",
        "slug": "\u7F51\u7EDC\u5B89\u5168\u95EE\u9898",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC",
        "slug": "\u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E24\u7C7B\u5BC6\u7801\u4F53\u5236",
        "slug": "\u4E24\u7C7B\u5BC6\u7801\u4F53\u5236",
        "children": [
          {
            "level": 3,
            "title": "\u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u7CFB",
            "slug": "\u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u7CFB",
            "children": []
          },
          {
            "level": 3,
            "title": "\u516C\u94A5\u5BC6\u7801\u4F53\u5236\uFF08public key crypto-system\uFF09",
            "slug": "\u516C\u94A5\u5BC6\u7801\u4F53\u5236-public-key-crypto-system",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u6570\u5B57\u7B7E\u540D",
        "slug": "\u6570\u5B57\u7B7E\u540D",
        "children": []
      },
      {
        "level": 2,
        "title": "\u9274\u522B",
        "slug": "\u9274\u522B",
        "children": [
          {
            "level": 3,
            "title": "\u62A5\u6587\u9274\u522B",
            "slug": "\u62A5\u6587\u9274\u522B",
            "children": []
          }
        ]
      }
    ],
    "path": "/front/network/6-secure.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u6982\u8FF0",
    "headers": [
      {
        "level": 2,
        "title": "\u7F51\u7EDC\uFF08\u8BA1\u7B97\u673A\u7F51\u7EDC\uFF09",
        "slug": "\u7F51\u7EDC-\u8BA1\u7B97\u673A\u7F51\u7EDC",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E92\u8FDE\u7F51",
        "slug": "\u4E92\u8FDE\u7F51",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E92\u8054\u7F51\uFF08\u56E0\u7279\u7F51\uFF09",
        "slug": "\u4E92\u8054\u7F51-\u56E0\u7279\u7F51",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E92\u8054\u7F51\u7684\u4E24\u4E2A\u91CD\u8981\u57FA\u672C\u7279\u70B9",
        "slug": "\u4E92\u8054\u7F51\u7684\u4E24\u4E2A\u91CD\u8981\u57FA\u672C\u7279\u70B9",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E92\u8054\u7F51\u53D1\u5C55\u7684\u4E09\u4E2A\u9636\u6BB5",
        "slug": "\u4E92\u8054\u7F51\u53D1\u5C55\u7684\u4E09\u4E2A\u9636\u6BB5",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4E92\u8054\u7F51\u7684\u7EC4\u6210",
        "slug": "\u4E92\u8054\u7F51\u7684\u7EC4\u6210",
        "children": []
      },
      {
        "level": 2,
        "title": "\u8BA1\u7B97\u673A\u901A\u4FE1",
        "slug": "\u8BA1\u7B97\u673A\u901A\u4FE1",
        "children": []
      },
      {
        "level": 2,
        "title": "\u8DEF\u7531\u5668",
        "slug": "\u8DEF\u7531\u5668",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7535\u8DEF\u4EA4\u6362\u3001\u62A5\u6587\u4EA4\u6362\u3001\u5206\u7EC4\u4EA4\u6362",
        "slug": "\u7535\u8DEF\u4EA4\u6362\u3001\u62A5\u6587\u4EA4\u6362\u3001\u5206\u7EC4\u4EA4\u6362",
        "children": []
      },
      {
        "level": 2,
        "title": "\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u6027\u80FD",
        "slug": "\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u6027\u80FD",
        "children": []
      },
      {
        "level": 2,
        "title": "OSI",
        "slug": "osi",
        "children": []
      },
      {
        "level": 2,
        "title": "\u534F\u8BAE\uFF08\u7F51\u7EDC\u534F\u8BAE\uFF09\u4E09\u8981\u7D20\uFF1A",
        "slug": "\u534F\u8BAE-\u7F51\u7EDC\u534F\u8BAE-\u4E09\u8981\u7D20",
        "children": [
          {
            "level": 3,
            "title": "OSI \u4E03\u5C42\u534F\u8BAE",
            "slug": "osi-\u4E03\u5C42\u534F\u8BAE",
            "children": []
          },
          {
            "level": 3,
            "title": "TCP/IP \u56DB\u5C42\u534F\u8BAE",
            "slug": "tcp-ip-\u56DB\u5C42\u534F\u8BAE",
            "children": []
          },
          {
            "level": 3,
            "title": "\u4E94\u5C42\u534F\u8BAE",
            "slug": "\u4E94\u5C42\u534F\u8BAE",
            "children": []
          }
        ]
      }
    ],
    "path": "/front/network/concept.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/front/network/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u9700\u6C42\uFF08Demand\uFF09\u5728\u54EA\u91CC",
    "headers": [
      {
        "level": 2,
        "title": "\u4EC0\u4E48\u662F\u9700\u6C42",
        "slug": "\u4EC0\u4E48\u662F\u9700\u6C42",
        "children": []
      },
      {
        "level": 2,
        "title": "\u9700\u6C42\u5B58\u5728\u7684\u610F\u4E49",
        "slug": "\u9700\u6C42\u5B58\u5728\u7684\u610F\u4E49",
        "children": []
      },
      {
        "level": 2,
        "title": "\u8BC6\u522B\u9700\u6C42",
        "slug": "\u8BC6\u522B\u9700\u6C42",
        "children": []
      },
      {
        "level": 2,
        "title": "\u63D0\u7EAF\u9700\u6C42",
        "slug": "\u63D0\u7EAF\u9700\u6C42",
        "children": [
          {
            "level": 3,
            "title": "\u9700\u6C42\uFF1F\u89E3\u51B3\u65B9\u6848\uFF1F",
            "slug": "\u9700\u6C42-\u89E3\u51B3\u65B9\u6848",
            "children": []
          },
          {
            "level": 3,
            "title": "\u8BA8\u8BBA\uFF1F\u4E89\u8FA9\uFF1F",
            "slug": "\u8BA8\u8BBA-\u4E89\u8FA9",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u9610\u660E\u9700\u6C42",
        "slug": "\u9610\u660E\u9700\u6C42",
        "children": []
      },
      {
        "level": 2,
        "title": "\u9700\u6C42\u5728\u4F55\u65F6\u4EA7\u751F",
        "slug": "\u9700\u6C42\u5728\u4F55\u65F6\u4EA7\u751F",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4EC0\u4E48\u53D1\u751F\u53D8\u5316\u4E86",
        "slug": "\u4EC0\u4E48\u53D1\u751F\u53D8\u5316\u4E86",
        "children": [
          {
            "level": 3,
            "title": "\u9700\u6C42\u53D8\u5316",
            "slug": "\u9700\u6C42\u53D8\u5316",
            "children": []
          },
          {
            "level": 3,
            "title": "\u9700\u6C42\u8FED\u4EE3",
            "slug": "\u9700\u6C42\u8FED\u4EE3",
            "children": []
          },
          {
            "level": 3,
            "title": "\u8BA1\u5212\u53D8\u66F4",
            "slug": "\u8BA1\u5212\u53D8\u66F4",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u4F1A\u8BB2\u8BDD\u3001\u80FD\u542C\u61C2",
        "slug": "\u4F1A\u8BB2\u8BDD\u3001\u80FD\u542C\u61C2",
        "children": []
      }
    ],
    "path": "/front/project/demand.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/front/project/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Promise \u5E76\u53D1",
    "headers": [
      {
        "level": 2,
        "title": "\u6ED1\u52A8\u7A97\u53E3",
        "slug": "\u6ED1\u52A8\u7A97\u53E3",
        "children": []
      }
    ],
    "path": "/front/promise/pool.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u4EE3\u7801\u7247\u6BB5",
    "headers": [],
    "path": "/front/ts/code.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "TS \u7C7B\u578B\u7F16\u7A0B",
    "headers": [],
    "path": "/front/ts/type.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
];
const searchIndex = vue.ref(searchIndex$1);
const useSearchIndex = () => searchIndex;
if (false) {
  __VUE_HMR_RUNTIME__.updateSearchIndex = (data2) => {
    searchIndex.value = data2;
  };
}
const nonASCIIRegExp = /[^\x00-\x7F]/;
const splitWords = (str) => str.split(/\s+/g).map((str2) => str2.trim()).filter((str2) => !!str2);
const escapeRegExp = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
const isQueryMatched = (query, toMatch) => {
  const toMatchStr = toMatch.join(" ");
  const words = splitWords(query);
  if (nonASCIIRegExp.test(query)) {
    return words.some((word) => toMatchStr.toLowerCase().indexOf(word) > -1);
  }
  const hasTrailingSpace = query.endsWith(" ");
  const searchRegex = new RegExp(words.map((word, index2) => {
    if (words.length === index2 + 1 && !hasTrailingSpace) {
      return `(?=.*\\b${escapeRegExp(word)})`;
    }
    return `(?=.*\\b${escapeRegExp(word)}\\b)`;
  }).join("") + ".+", "gi");
  return searchRegex.test(toMatchStr);
};
const useSearchSuggestions = ({ searchIndex: searchIndex2, routeLocale, query, maxSuggestions: maxSuggestions2 }) => {
  const localeSearchIndex = vue.computed(() => searchIndex2.value.filter((item) => item.pathLocale === routeLocale.value));
  return vue.computed(() => {
    const searchStr = query.value.trim().toLowerCase();
    if (!searchStr)
      return [];
    const suggestions = [];
    const matchPageHeader = (searchIndexItem, header) => {
      if (isQueryMatched(searchStr, [header.title])) {
        suggestions.push({
          link: `${searchIndexItem.path}#${header.slug}`,
          title: searchIndexItem.title,
          header: header.title
        });
      }
      for (const child of header.children) {
        if (suggestions.length >= maxSuggestions2.value) {
          return;
        }
        matchPageHeader(searchIndexItem, child);
      }
    };
    for (const searchIndexItem of localeSearchIndex.value) {
      if (suggestions.length >= maxSuggestions2.value) {
        break;
      }
      if (isQueryMatched(searchStr, [
        searchIndexItem.title,
        ...searchIndexItem.extraFields
      ])) {
        suggestions.push({
          link: searchIndexItem.path,
          title: searchIndexItem.title
        });
        continue;
      }
      for (const header of searchIndexItem.headers) {
        if (suggestions.length >= maxSuggestions2.value) {
          break;
        }
        matchPageHeader(searchIndexItem, header);
      }
    }
    return suggestions;
  });
};
const useSuggestionsFocus = (suggestions) => {
  const focusIndex = vue.ref(0);
  const focusNext = () => {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value += 1;
    } else {
      focusIndex.value = 0;
    }
  };
  const focusPrev = () => {
    if (focusIndex.value > 0) {
      focusIndex.value -= 1;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  };
  return {
    focusIndex,
    focusNext,
    focusPrev
  };
};
const SearchBox = vue.defineComponent({
  name: "SearchBox",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    },
    hotKeys: {
      type: Array,
      required: false,
      default: () => []
    },
    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },
  setup(props) {
    const { locales: locales2, hotKeys: hotKeys2, maxSuggestions: maxSuggestions2 } = vue.toRefs(props);
    const router = vueRouter.useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex2 = useSearchIndex();
    const input = vue.ref(null);
    const isActive = vue.ref(false);
    const query = vue.ref("");
    const locale = vue.computed(() => {
      var _a;
      return (_a = locales2.value[routeLocale.value]) !== null && _a !== void 0 ? _a : {};
    });
    const suggestions = useSearchSuggestions({
      searchIndex: searchIndex2,
      routeLocale,
      query,
      maxSuggestions: maxSuggestions2
    });
    const { focusIndex, focusNext, focusPrev } = useSuggestionsFocus(suggestions);
    useHotKeys({ input, hotKeys: hotKeys2 });
    const showSuggestions = vue.computed(() => isActive.value && !!suggestions.value.length);
    const onArrowUp = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusPrev();
    };
    const onArrowDown = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusNext();
    };
    const goTo = (index2) => {
      if (!showSuggestions.value) {
        return;
      }
      const suggestion = suggestions.value[index2];
      if (!suggestion) {
        return;
      }
      router.push(suggestion.link).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };
    return () => vue.h("form", {
      class: "search-box",
      role: "search"
    }, [
      vue.h("input", {
        ref: input,
        type: "search",
        placeholder: locale.value.placeholder,
        autocomplete: "off",
        spellcheck: false,
        value: query.value,
        onFocus: () => isActive.value = true,
        onBlur: () => isActive.value = false,
        onInput: (event) => query.value = event.target.value,
        onKeydown: (event) => {
          switch (event.key) {
            case "ArrowUp": {
              onArrowUp();
              break;
            }
            case "ArrowDown": {
              onArrowDown();
              break;
            }
            case "Enter": {
              event.preventDefault();
              goTo(focusIndex.value);
              break;
            }
          }
        }
      }),
      showSuggestions.value && vue.h("ul", {
        class: "suggestions",
        onMouseleave: () => focusIndex.value = -1
      }, suggestions.value.map(({ link, title, header }, index2) => vue.h("li", {
        class: [
          "suggestion",
          {
            focus: focusIndex.value === index2
          }
        ],
        onMouseenter: () => focusIndex.value = index2,
        onMousedown: () => goTo(index2)
      }, vue.h("a", {
        href: link,
        onClick: (event) => event.preventDefault()
      }, [
        vue.h("span", {
          class: "page-title"
        }, title),
        header && vue.h("span", { class: "page-header" }, `> ${header}`)
      ]))))
    ]);
  }
});
var vars$2 = "";
var search = "";
const locales = { "/": { "placeholder": "Search" }, "/zh/": { "placeholder": "\u641C\u7D22" } };
const hotKeys = ["s", "/"];
const maxSuggestions = 5;
var clientAppEnhance5 = defineClientAppEnhance(({ app }) => {
  app.component("SearchBox", (props) => vue.h(SearchBox, __spreadValues({
    locales,
    hotKeys,
    maxSuggestions
  }, props)));
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4,
  clientAppEnhance5
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "Welcome" }, ["/index.html", "/readme.md"]],
  ["v-7e25fb5f", "/front/", { "title": "" }, ["/front/index.html", "/front/readme.md"]],
  ["v-66a4a9c9", "/front/tab-message.html", { "title": "Web \u95F4\u901A\u4FE1" }, ["/front/tab-message", "/front/tab-message.md"]],
  ["v-350a936e", "/secure/out-net-scan.html", { "title": "\u5916\u7F51\u63A2\u6D4B" }, ["/secure/out-net-scan", "/secure/out-net-scan.md"]],
  ["v-4114f302", "/secure/", { "title": "" }, ["/secure/index.html", "/secure/readme.md"]],
  ["v-1559a150", "/todo/", { "title": "Todo" }, ["/todo/index.html", "/todo/readme.md"]],
  ["v-1a4400a0", "/tool/id.html", { "title": "\u968F\u673A ID \u751F\u6210\u5668" }, ["/tool/id", "/tool/id.md"]],
  ["v-1559ca3e", "/tool/", { "title": "\u5DE5\u5177" }, ["/tool/index.html", "/tool/readme.md"]],
  ["v-c0ec2056", "/tool/todo.html", { "title": "Todo" }, ["/tool/todo", "/tool/todo.md"]],
  ["v-3ce30bc0", "/front/network/2-link-layer.html", { "title": "\u6570\u636E\u94FE\u8DEF\u5C42" }, ["/front/network/2-link-layer", "/front/network/2-link-layer.md"]],
  ["v-7b2e4b21", "/front/network/3-network-layer.html", { "title": "\u7F51\u7EDC\u5C42" }, ["/front/network/3-network-layer", "/front/network/3-network-layer.md"]],
  ["v-e52a1136", "/front/network/4-transport-layer.html", { "title": "\u8FD0\u8F93\u5C42" }, ["/front/network/4-transport-layer", "/front/network/4-transport-layer.md"]],
  ["v-7733477d", "/front/network/5-application-layer.html", { "title": "\u5E94\u7528\u5C42" }, ["/front/network/5-application-layer", "/front/network/5-application-layer.md"]],
  ["v-10c3048b", "/front/network/6-secure.html", { "title": "\u7F51\u7EDC\u5B89\u5168" }, ["/front/network/6-secure", "/front/network/6-secure.md"]],
  ["v-c07620de", "/front/network/concept.html", { "title": "\u6982\u8FF0" }, ["/front/network/concept", "/front/network/concept.md"]],
  ["v-14abcfc0", "/front/network/", { "title": "" }, ["/front/network/index.html", "/front/network/readme.md"]],
  ["v-062cec8e", "/front/project/demand.html", { "title": "\u9700\u6C42\uFF08Demand\uFF09\u5728\u54EA\u91CC" }, ["/front/project/demand", "/front/project/demand.md"]],
  ["v-6bd94495", "/front/project/", { "title": "" }, ["/front/project/index.html", "/front/project/readme.md"]],
  ["v-3dd6c0ca", "/front/promise/pool.html", { "title": "Promise \u5E76\u53D1" }, ["/front/promise/pool", "/front/promise/pool.md"]],
  ["v-5b77245b", "/front/ts/code.html", { "title": "\u4EE3\u7801\u7247\u6BB5" }, ["/front/ts/code", "/front/ts/code.md"]],
  ["v-84cde9a4", "/front/ts/type.html", { "title": "TS \u7C7B\u578B\u7F16\u7A0B" }, ["/front/ts/type", "/front/ts/type.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _imports_0$2 = "/imgs/wechat_article.jpg";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$I = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ style: { "text-align": "center" } }, _attrs))}><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)}><br><span>\u5FAE\u4FE1\u516C\u4F17\u53F7</span></p></div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var index_html$j = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$m]]);
var index_html$k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>\u{1F6A2} \u{1F6A2} \u{1F6A2} \u5411\u4F1F\u5927\u822A\u9053\u8FDB\u53D1 \u2693 \u2693 \u2693</p><p>\u5730\u56FE\u561E\uFF1F\u{1F9D0}</p><p>\u{1F644} \u{1F644} \u{1F644}</p><p>\u8239\u561E\uFF1F\u{1F635}</p><p>\u{1F4AB} \u{1F4AB} \u{1F4AB}</p><!--]-->`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/index.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var index_html$h = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$l]]);
var index_html$i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="web-\u95F4\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#web-\u95F4\u901A\u4FE1" aria-hidden="true">#</a> Web \u95F4\u901A\u4FE1</h1><nav class="table-of-contents"><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u4E00\u3001\u573A\u666F" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4E00\u3001\u573A\u666F`);
      } else {
        return [
          vue.createTextVNode("\u4E00\u3001\u573A\u666F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B-tab-\u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B Tab \u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F`);
      } else {
        return [
          vue.createTextVNode("\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B Tab \u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#_2-1-window-postmessge" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2.1 window.postMessge`);
      } else {
        return [
          vue.createTextVNode("2.1 window.postMessge")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#_2-2-broadcast-channel" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2.2 BroadCast Channel`);
      } else {
        return [
          vue.createTextVNode("2.2 BroadCast Channel")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#_2-3-service-worker" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2.3 Service Worker`);
      } else {
        return [
          vue.createTextVNode("2.3 Service Worker")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#_2-4-localstorage" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2.4 LocalStorage`);
      } else {
        return [
          vue.createTextVNode("2.4 LocalStorage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#_2-5-indexeddb" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2.5 IndexedDB`);
      } else {
        return [
          vue.createTextVNode("2.5 IndexedDB")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1`);
      } else {
        return [
          vue.createTextVNode("\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#_3-1-iframe" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`3.1 iframe`);
      } else {
        return [
          vue.createTextVNode("3.1 iframe")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul></nav><h2 id="\u4E00\u3001\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u573A\u666F" aria-hidden="true">#</a> \u4E00\u3001\u573A\u666F</h2><p>Tab \u95F4\u901A\u4FE1\u5B58\u5728\u4E0D\u540C\u7684\u573A\u666F\uFF1A</p><ul><li>\u540C\u6E90\u7F51\u7AD9\u4E0B\u7684 Tab \u9875\u95F4\u901A\u4FE1</li><li>\u975E\u540C\u6E90\u7F51\u7AD9\u4E0B\u7684 Tab \u9875\u95F4\u901A\u4FE1</li></ul><h2 id="\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B-tab-\u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B-tab-\u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F" aria-hidden="true">#</a> \u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B Tab \u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F</h2><p>\u6309\u7167\u901A\u4FE1\u7684\u7279\u5F81\uFF0C\u5206\u4E3A\u4E09\u79CD\u65B9\u5F0F\u70B9\u5BF9\u70B9\u901A\u4FE1\u3001\u5E7F\u64AD\u901A\u4FE1\u3001\u8F6E\u8BE2\u901A\u4FE1</p><ul><li>\u70B9\u5BF9\u70B9\u901A\u4FE1 <ul><li>window.postMessge</li></ul></li><li>\u5E7F\u64AD\u901A\u4FE1 <ul><li>BroadCast Channel</li><li>Service Worker</li><li>LocalStorage</li></ul></li><li>\u8F6E\u8BE2\u901A\u4FE1 <ul><li>IndexedDB</li></ul></li></ul><h3 id="_2-1-window-postmessge" tabindex="-1"><a class="header-anchor" href="#_2-1-window-postmessge" aria-hidden="true">#</a> 2.1 window.postMessge</h3><p>\u5F53\u4F7F\u7528 window.open \u6253\u5F00\u4E00\u4E2A\u65B0\u9875\u9762\u65F6\uFF0C\u82E5\u4E24\u4E2A Tab \u4E4B\u95F4\u9700\u8981\u4E3B\u52A8\u901A\u4FE1\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528<code>window.postMessage</code>\u5B9E\u73B0\u901A\u4FE1\u3002</p><p>\u573A\u666F\uFF1A\u5728<code>A\u9875\u9762</code>\u4F7F\u7528<code>window.open</code>\u6253\u5F00<code>B\u9875\u9762</code>\uFF0C\u5728<code>B\u9875\u9762</code>\u5411<code>A\u9875\u9762</code>\u53D1\u9001\u6D88\u606F\u3002</p><p>\u7279\u70B9\uFF1A\u7C7B\u4F3C\u4E8E\u70B9\u5BF9\u70B9\u95F4\u7684\u901A\u4FE1\uFF0C\u5176\u5B83\u7684\u540C\u6E90\u9875\u9762\u65E0\u6CD5\u6536\u5230\u6D88\u606F\u3002</p><p>\u539F\u7406\uFF1A</p><ul><li>A \u9875\u9762\u76D1\u542C<code>message</code>\u4E8B\u4EF6</li><li>B \u9875\u9762\u4F7F\u7528<code>postMessage</code>\u53D1\u9001\u6D88\u606F</li><li>B \u9875\u9762\u53EF\u4EE5\u83B7\u53D6 A \u9875\u9762\u7684 window \u5BF9\u8C61\uFF0C\u4E00\u822C\u4F7F\u7528 window.opener</li></ul><p>\u5177\u4F53\u5B9E\u73B0(<a href="https://github.com/swlws/swlws.github.io/blob/master/shared/tool/tab-message.ts" target="_blank" rel="noopener noreferrer">\u6E90\u7801`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>)\uFF1A</p><p>A \u9875\u9762\u76D1\u542C\u6D88\u606F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u4E8B\u4EF6\u6620\u5C04
 */</span>
<span class="token keyword">const</span> eventMap<span class="token operator">:</span> PlainObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ev<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> ev<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&quot;[object Object]&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> <span class="token punctuation">{</span> key<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token keyword">let</span> fn <span class="token operator">=</span> eventMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span> args <span class="token operator">=</span> <span class="token punctuation">[</span>args<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u6CE8\u518CTab\u9875\u4E8B\u4EF6
 *
 * <span class="token keyword">@param</span> <span class="token parameter">key</span>
 * <span class="token keyword">@param</span> <span class="token parameter">fn</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerTabEvent</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  eventMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> fn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>B \u9875\u9762\u53D1\u9001\u6D88\u606F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TMessage</span> <span class="token operator">=</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> args<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u53D1\u9001\u6D88\u606F
 *
 * <span class="token keyword">@param</span> <span class="token parameter">data</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sendTabMessage</span><span class="token punctuation">(</span>data<span class="token operator">:</span> TMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> opener <span class="token operator">=</span> window<span class="token punctuation">.</span>opener<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>opener<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  opener<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_2-2-broadcast-channel" tabindex="-1"><a class="header-anchor" href="#_2-2-broadcast-channel" aria-hidden="true">#</a> 2.2 BroadCast Channel</h3><p>BroadcastChannel \u63A5\u53E3\u4EE3\u7406\u4E86\u4E00\u4E2A\u547D\u540D\u9891\u9053\uFF0C\u53EF\u4EE5\u8BA9\u6307\u5B9A origin \u4E0B\u7684\u4EFB\u610F browsing context \u6765\u8BA2\u9605\u5B83\u3002\u5B83\u5141\u8BB8\u540C\u6E90\u7684\u4E0D\u540C\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0CTab \u9875\uFF0Cframe \u6216\u8005 iframe \u4E0B\u7684\u4E0D\u540C\u6587\u6863\u4E4B\u95F4\u76F8\u4E92\u901A\u4FE1\u3002\u901A\u8FC7\u89E6\u53D1\u4E00\u4E2A message \u4E8B\u4EF6\uFF0C\u6D88\u606F\u53EF\u4EE5\u5E7F\u64AD\u5230\u6240\u6709\u76D1\u542C\u4E86\u8BE5\u9891\u9053\u7684 BroadcastChannel \u5BF9\u8C61\u3002</p><p>\u7279\u70B9\uFF1A</p><ul><li>\u5E7F\u64AD\u901A\u4FE1</li></ul><p>\u539F\u7406\uFF1A</p><ul><li>\u9875\u9762\u521B\u5EFA<code>BroadCast Channel</code>\u5B9E\u4F8B</li><li>\u4E3A\u5B9E\u4F8B\u6CE8\u518C<code>message</code>\u4E8B\u4EF6</li></ul><p>\u5B9E\u73B0\uFF1A</p><p><a href="https://swlws.github.io/site-client/#/tab-message-broadcast-channel" target="_blank" rel="noopener noreferrer">Demo`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> outmsg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> bc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastChannel</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bc<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      outmsg<span class="token punctuation">.</span>value <span class="token operator">=</span> ev<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">sendMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      bc<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>instr<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      instr<span class="token punctuation">,</span>
      outmsg<span class="token punctuation">,</span>
      sendMsg<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_2-3-service-worker" tabindex="-1"><a class="header-anchor" href="#_2-3-service-worker" aria-hidden="true">#</a> 2.3 Service Worker</h3><p>Service Worker \u662F\u4E00\u4E2A\u8FD0\u884C\u5728\u540E\u53F0\u7684 Worker\uFF0C\u591A\u9875\u9762\u95F4\u53EF\u4EE5\u5171\u4EAB Worker\uFF0C\u4F7F\u7528 Worker \u5145\u5F53\u6D88\u606F\u8F6C\u53D1\u4E2D\u5FC3\uFF0C\u5B9E\u73B0\u591A\u9875\u9762\u95F4\u7684\u901A\u4FE1\u3002</p><p>\u539F\u7406\uFF1A</p><ul><li>\u591A Tab \u5171\u7528\u540C\u4E00\u4EFD Service Worker\uFF0C\u6BCF\u4E00\u4E2A Tab \u662F\u4E3A Client\uFF0C\u901A\u8FC7 Service Worker \u5411\u6BCF\u4E00\u5BA2\u6237\u7AEF\u63A8\u9001\u6D88\u606F\u5B9E\u73B0\u901A\u4FE1</li></ul><p>\u5B9E\u73B0\uFF1A</p><p><a href="https://swlws.github.io/site-client/#/tab-message-service-worker" target="_blank" rel="noopener noreferrer">Demo`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>ServiceWorker \u6CE8\u518C<code>message</code>\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ServiceWorkerGlobalScope\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518Cmessage\u4E8B\u4EF6</span>
<span class="token comment">// \u5F53\u76D1\u542C\u5230\u6D88\u606F\u65F6\uFF0C\u8F6C\u53D1\u7ED9\u6BCF\u4E00\u4E2A\u5BA2\u6237\u7AEF</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ev<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">clients</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clients <span class="token operator">||</span> clients<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5411\u6BCF\u4E00\u4E2A\u5BA2\u6237\u7AEF\u53D1\u9001\u6D88\u606F\uFF0C\u5305\u62EC\u81EA\u8EAB</span>
      clients<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        client<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>ev<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5728\u5BA2\u6237\u7AEF\u63A5\u6536\u3001\u53D1\u9001\u6D88\u606F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> outmsg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">sendMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;serviceWorker&quot;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span>controller<span class="token operator">?.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>instr<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;serviceWorker&quot;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;./tab-message.sw.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Service Worker\u6CE8\u518C\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        outmsg<span class="token punctuation">.</span>value <span class="token operator">=</span> ev<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 serviceWorker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      instr<span class="token punctuation">,</span>
      outmsg<span class="token punctuation">,</span>
      sendMsg<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="_2-4-localstorage" tabindex="-1"><a class="header-anchor" href="#_2-4-localstorage" aria-hidden="true">#</a> 2.4 LocalStorage</h3><p>localstorage \u53EF\u4EE5\u5B58\u50A8\u6D4F\u89C8\u5668\u6570\u636E\uFF0C\u540C\u6E90\u65F6\uFF0C\u5171\u4EAB\u6570\u636E\u3002\u5F53\u540C\u6E90\u4E0B\u7684\u4E24\u4E2A Tab \u9875\u9700\u8981\u76D1\u542C\u5BF9\u65B9\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F7F\u7528 localstorage \u662F\u6BD4\u8F83\u597D\u7684\u65B9\u5F0F\u3002</p><p>\u539F\u7406\uFF1A</p><ul><li>\u4E24\u4E2A Tab \u9875\u540C\u6E90</li><li>A \u9875\u9762\u76D1\u542C<code>storage</code></li><li>B \u9875\u9762\u4F7F\u7528<code>setItem</code>\u66F4\u65B0\u6570\u636E\u65F6\uFF0C\u6B64\u65F6 A \u9875\u9762\u53EF\u4EE5\u76D1\u542C\u5230<code>localstorage</code>\u6570\u636E\u7684\u53D8\u5316</li></ul><p>\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;storage&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">,</span> e<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-5-indexeddb" tabindex="-1"><a class="header-anchor" href="#_2-5-indexeddb" aria-hidden="true">#</a> 2.5 IndexedDB</h3><p>\u540C\u6E90\u4E0B\u7684 Tab \u53EF\u4EE5\u8BBF\u95EE\u76F8\u540C\u7684 IndexedDB\uFF0C\u5229\u7528\u6570\u636E\u7684\u5168\u5C40\u5B58\u50A8\u7279\u6027\uFF0C\u5B9E\u73B0\u901A\u4FE1\u3002</p><p>\u539F\u7406\uFF1A</p><ul><li>A \u9875\u9762\u5C06\u6570\u636E\u5B58\u50A8\u5230 IndexedDB \u4E2D</li><li>B \u9875\u9762\u8F6E\u8BE2\u67E5\u8BE2 IndexedDB \u4E2D\u6570\u636E\u7684\u53D8\u5316</li></ul><p>\u57FA\u4E8E\u540C\u6837\u7684\u539F\u7406\uFF0Clocalstorage\u3001sessionstorage \u90FD\u53EF\u4EE5\u91C7\u7528\u8FD9\u79CD\u65B9\u6848</p><h2 id="\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1" aria-hidden="true">#</a> \u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1</h2><ul><li>iframe</li></ul><h3 id="_3-1-iframe" tabindex="-1"><a class="header-anchor" href="#_3-1-iframe" aria-hidden="true">#</a> 3.1 iframe</h3><p>\u4F9D\u9760 iframe \u4E3A\u5A92\u4ECB\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1</p><!--]-->`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/tab-message.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var tabMessage_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$k]]);
var tabMessage_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tabMessage_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="\u5916\u7F51\u63A2\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u5916\u7F51\u63A2\u6D4B" aria-hidden="true">#</a> \u5916\u7F51\u63A2\u6D4B</h1><p>\u5916\u7F51\u626B\u63CF\u5668\uFF0C\u4ECE\u5916\u90E8\u89C6\u89D2\u67E5\u770B\u670D\u52A1\u5668\u7684\u5B89\u5168\u4FE1\u606F</p><h2 id="\u8D44\u4EA7\u6D4B\u7ED8" tabindex="-1"><a class="header-anchor" href="#\u8D44\u4EA7\u6D4B\u7ED8" aria-hidden="true">#</a> \u8D44\u4EA7\u6D4B\u7ED8</h2><p>\u63A2\u6D4B\u76EE\u6807\u673A\u5668\u7684\u53EF\u80FD\u5B58\u5728\u7684\u8D44\u4EA7</p><p>\u8D44\u4EA7\u5C5E\u6027</p><ul><li>\u540D\u79F0</li><li>\u7248\u672C\u53F7</li></ul><h2 id="\u57DF\u540D\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u57DF\u540D\u89E3\u6790" aria-hidden="true">#</a> \u57DF\u540D\u89E3\u6790</h2><p>\u4F7F\u7528 DNS \u57DF\u540D\u7CFB\u7EDF\u89E3\u6790\uFF0C\u4E24\u79CD\u5F62\u5F0F\uFF1A</p><ul><li>\u57DF\u540D --&gt; IP \u5730\u5740</li><li>IP \u5730\u5740 --&gt; \u57DF\u540D</li></ul><h3 id="\u57DF\u540D-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u57DF\u540D-ip-\u5730\u5740" aria-hidden="true">#</a> \u57DF\u540D --&gt; IP \u5730\u5740</h3><ul><li><a href="https://nodejs.org/dist/latest-v17.x/docs/api/dns.html#dnslookuphostname-options-callback" target="_blank" rel="noopener noreferrer">node.js api - dns.lookup`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://nodejs.org/dist/latest-v17.x/docs/api/dns.html#dnsresolvehostname-rrtype-callback" target="_blank" rel="noopener noreferrer">node.js api - dns.resolve`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://api.riskiq.net/api/concepts.html" target="_blank" rel="noopener noreferrer">riskiq api`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h3 id="ip-\u5730\u5740-\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#ip-\u5730\u5740-\u57DF\u540D" aria-hidden="true">#</a> IP \u5730\u5740 --&gt; \u57DF\u540D</h3><ul><li><a href="https://nodejs.org/dist/latest-v17.x/docs/api/dns.html#dnsreverseip-callback" target="_blank" rel="noopener noreferrer">node.js api - dns.reverse`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h2 id="\u57DF\u540D\u7206\u7834" tabindex="-1"><a class="header-anchor" href="#\u57DF\u540D\u7206\u7834" aria-hidden="true">#</a> \u57DF\u540D\u7206\u7834</h2><p>\u627E\u51FA\u7ED9\u5B9A\u57DF\u540D\u7684\u5B50\u57DF\u540D\uFF0C\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><ul><li>\u57DF\u540D\u5B57\u5178</li><li>\u641C\u7D22\u5F15\u64CE</li><li>\u8BC1\u4E66\u900F\u660E\uFF08Certificate Transparency\uFF09</li><li>\u5728\u7EBF\u5DE5\u5177</li></ul><h3 id="\u57DF\u540D\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#\u57DF\u540D\u5B57\u5178" aria-hidden="true">#</a> \u57DF\u540D\u5B57\u5178</h3><ul><li><a href="https://github.com/lijiejie/subDomainsBrute/blob/master/dict/subnames_full.txt" target="_blank" rel="noopener noreferrer">github - subDomainsBrute`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://phpinfo.me/domain/" target="_blank" rel="noopener noreferrer">\u5728\u7EBF\u5DE5\u5177 - \u57DF\u540D\u5B57\u5178\u5B9E\u73B0`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h3 id="\u641C\u7D22\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u5F15\u64CE" aria-hidden="true">#</a> \u641C\u7D22\u5F15\u64CE</h3><ul><li>bing.cn\uFF08\u5FC5\u5E94\uFF09</li><li>baidu.com\uFF08\u767E\u5EA6\uFF09</li></ul><p>\u8BED\u6CD5\uFF1A</p><blockquote><p>site:abc.com -site:www.abc.com</p></blockquote><h3 id="\u8BC1\u4E66\u900F\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BC1\u4E66\u900F\u660E" aria-hidden="true">#</a> \u8BC1\u4E66\u900F\u660E</h3><p>\u4E00\u4E2A SSL/TLS \u8BC1\u4E66\u901A\u5E38\u5305\u542B\u57DF\u540D\u3001\u5B50\u57DF\u540D\u548C\u90AE\u4EF6\u5730\u5740\u3002\u793A\u4F8B<code>cn.bing.com</code>\u7684\u8BC1\u4E66\u5141\u8BB8\u7684\u57DF\u540D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token constant">CN</span><span class="token operator">:</span> <span class="token string">&#39;www.bing.com&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">C</span><span class="token operator">:</span> <span class="token string">&#39;US&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">O</span><span class="token operator">:</span> <span class="token string">&#39;Microsoft Corporation&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">CN</span><span class="token operator">:</span> <span class="token string">&#39;Microsoft RSA TLS CA 01&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subjectaltname</span><span class="token operator">:</span> <span class="token string">&#39;DNS:www.bing.com, DNS:dict.bing.com.cn, DNS:*.platform.bing.com, DNS:*.bing.com, DNS:bing.com, DNS:ieonline.microsoft.com, DNS:*.windowssearch.com, DNS:cn.ieonline.microsoft.com, DNS:*.origin.bing.com, DNS:*.mm.bing.net, DNS:*.api.bing.com, DNS:ecn.dev.virtualearth.net, DNS:*.cn.bing.net, DNS:*.cn.bing.com, DNS:ssl-api.bing.com, DNS:ssl-api.bing.net, DNS:*.api.bing.net, DNS:*.bingapis.com, DNS:bingsandbox.com, DNS:feedback.microsoft.com, DNS:insertmedia.bing.office.net, DNS:r.bat.bing.com, DNS:*.r.bat.bing.com, DNS:*.dict.bing.com.cn, DNS:*.dict.bing.com, DNS:*.ssl.bing.com, DNS:*.appex.bing.com, DNS:*.platform.cn.bing.com, DNS:wp.m.bing.com, DNS:*.m.bing.com, DNS:global.bing.com, DNS:windowssearch.com, DNS:search.msn.com, DNS:*.bingsandbox.com, DNS:*.api.tiles.ditu.live.com, DNS:*.ditu.live.com, DNS:*.t0.tiles.ditu.live.com, DNS:*.t1.tiles.ditu.live.com, DNS:*.t2.tiles.ditu.live.com, DNS:*.t3.tiles.ditu.live.com, DNS:*.tiles.ditu.live.com, DNS:3d.live.com, DNS:api.search.live.com, DNS:beta.search.live.com, DNS:cnweb.search.live.com, DNS:dev.live.com, DNS:ditu.live.com, DNS:farecast.live.com, DNS:image.live.com, DNS:images.live.com, DNS:local.live.com.au, DNS:localsearch.live.com, DNS:ls4d.search.live.com, DNS:mail.live.com, DNS:mapindia.live.com, DNS:local.live.com, DNS:maps.live.com, DNS:maps.live.com.au, DNS:mindia.live.com, DNS:news.live.com, DNS:origin.cnweb.search.live.com, DNS:preview.local.live.com, DNS:search.live.com, DNS:test.maps.live.com, DNS:video.live.com, DNS:videos.live.com, DNS:virtualearth.live.com, DNS:wap.live.com, DNS:webmaster.live.com, DNS:webmasters.live.com, DNS:www.local.live.com.au, DNS:www.maps.live.com.au&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u67E5\u627E\u67D0\u4E2A\u57DF\u540D\u6240\u5C5E\u8BC1\u4E66\u7684\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u4F7F\u7528\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u4E00\u4E9B\u516C\u5F00\u7684 CT \u65E5\u5FD7\u3002</p><p>\u5728\u7EBF\u5DE5\u5177\uFF1A</p><ul><li>https://crt.sh/</li></ul><p>API \u5B9E\u73B0\uFF1A</p><ul><li><a href="http://nodejs.cn/api/tls.html#tlssocketgetpeerfinished" target="_blank" rel="noopener noreferrer">node.js api - tlsSocket.getPeerFinished`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h3 id="\u5728\u7EBF\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF\u5DE5\u5177" aria-hidden="true">#</a> \u5728\u7EBF\u5DE5\u5177</h3><ul><li>https://phpinfo.me/domain/</li></ul><h2 id="ip-\u63A2\u6D4B" tabindex="-1"><a class="header-anchor" href="#ip-\u63A2\u6D4B" aria-hidden="true">#</a> IP \u63A2\u6D4B</h2><p>\u4ECE\u5916\u90E8\u89C6\u89D2\uFF0C\u67E5\u770B\u53EF\u8FDE\u63A5\u7684 IP \u5730\u5740\u3002 \u7ED9\u5B9A IP \u6BB5\uFF08192.168.10.1/24\uFF09\uFF0C\u89E3\u6790\u51FA\u5B58\u6D3B\u7684 IP</p><p>\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><ul><li>ping</li><li>tcpping</li></ul><h2 id="\u7AEF\u53E3\u63A2\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u7AEF\u53E3\u63A2\u6D4B" aria-hidden="true">#</a> \u7AEF\u53E3\u63A2\u6D4B</h2><p>\u4ECE\u5916\u90E8\u89C6\u89D2\uFF0C\u67E5\u770B\u673A\u5668\u4E0A\u5B58\u6D3B\u7684\u7AEF\u53E3\uFF08\u5F00\u653E\u7AEF\u53E3\uFF09\u3002\u7ED9\u5B9A IP \u5730\u5740\uFF0C\u68C0\u6D4B\u5B58\u6D3B\u7AEF\u53E3\uFF08\u76D1\u542C\u7AEF\u53E3\u662F\u5B58\u6D3B\u7AEF\u53E3\u7684\u5B50\u96C6\uFF09\u3002</p><p>\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><ul><li>tcpping</li></ul><h2 id="web-\u7AD9\u70B9\u63A2\u6D4B" tabindex="-1"><a class="header-anchor" href="#web-\u7AD9\u70B9\u63A2\u6D4B" aria-hidden="true">#</a> Web \u7AD9\u70B9\u63A2\u6D4B</h2><p>\u63A2\u6D4B\u76EE\u6807\u670D\u52A1\u5668\u4E0A\u53EF\u80FD\u5B58\u5728\u7684\u7AD9\u70B9\u4FE1\u606F\uFF0C\u5C3D\u53EF\u80FD\u591A\u7684\u4FE1\u606F</p><p>\u7AD9\u70B9\u5C5E\u6027\uFF1A</p><ul><li>\u7AD9\u70B9\u8DEF\u5F84</li><li>Web \u5BB9\u5668\u7C7B\u578B\u3001\u7248\u672C\u53F7</li></ul><h2 id="web-\u7AD9\u70B9\u6307\u7EB9" tabindex="-1"><a class="header-anchor" href="#web-\u7AD9\u70B9\u6307\u7EB9" aria-hidden="true">#</a> Web \u7AD9\u70B9\u6307\u7EB9</h2><p>\u4F7F\u7528\u6587\u4EF6 md5\u3001Response \u7B49\u751F\u6210\u7F51\u7AD9\u7684\u6307\u7EB9</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p><a href="https://www.cnblogs.com/forforever/p/14197630.html" target="_blank" rel="noopener noreferrer">\u53C2\u8003\uFF1A\u5B50\u57DF\u540D\u63A2\u6D4B\u65B9\u6CD5\u5927\u5168`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><!--]-->`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/secure/out-net-scan.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var outNetScan_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$j]]);
var outNetScan_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": outNetScan_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>\u{1F6A2} \u{1F6A2} \u{1F6A2} \u5411\u4F1F\u5927\u822A\u9053\u8FDB\u53D1 \u2693 \u2693 \u2693</p><p>\u5730\u56FE\u561E\uFF1F\u{1F9D0}</p><p>\u{1F644} \u{1F644} \u{1F644}</p><p>\u8239\u561E\uFF1F\u{1F635}</p><p>\u{1F4AB} \u{1F4AB} \u{1F4AB}</p><!--]-->`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/secure/index.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var index_html$f = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$i]]);
var index_html$g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  const _component_todo = vue.resolveComponent("todo");
  _push(`<!--[--><h1 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> Todo</h1>`);
  _push(serverRenderer.ssrRenderComponent(_component_todo, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/todo/index.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var index_html$d = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$h]]);
var index_html$e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  const _component_generate_id = vue.resolveComponent("generate-id");
  _push(`<!--[--><h1 id="\u968F\u673A-id-\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u968F\u673A-id-\u751F\u6210\u5668" aria-hidden="true">#</a> \u968F\u673A ID \u751F\u6210\u5668</h1><h2 id="uuid-v4" tabindex="-1"><a class="header-anchor" href="#uuid-v4" aria-hidden="true">#</a> UUID-V4</h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_generate_id, null, null, _parent));
  _push(`<p>\u4F7F\u7528\u573A\u666F\uFF1A</p><ul><li>UAA \u7684\u4E3B\u952E</li></ul><!--]-->`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tool/id.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var id_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$g]]);
var id_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": id_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h1 id="\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177" aria-hidden="true">#</a> \u5DE5\u5177</h1><p>\u7B80\u5355\u5C0F\u5DE5\u5177</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/tool/id.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u81EA\u52A8\u751F\u6210\u968F\u673A UUID-V4`);
      } else {
        return [
          vue.createTextVNode("\u81EA\u52A8\u751F\u6210\u968F\u673A UUID-V4")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/tool/todo.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Todo \u4EE3\u529E\u4E8B\u9879`);
      } else {
        return [
          vue.createTextVNode("Todo \u4EE3\u529E\u4E8B\u9879")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tool/index.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var index_html$b = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$f]]);
var index_html$c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  const _component_todo = vue.resolveComponent("todo");
  _push(`<!--[--><h1 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> Todo</h1>`);
  _push(serverRenderer.ssrRenderComponent(_component_todo, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tool/todo.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var todo_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$e]]);
var todo_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": todo_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u6570\u636E\u94FE\u8DEF\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u94FE\u8DEF\u5C42" aria-hidden="true">#</a> \u6570\u636E\u94FE\u8DEF\u5C42</h1><ul><li>\u70B9\u5BF9\u70B9\u901A\u4FE1\u3001\u5E7F\u64AD\u901A\u4FE1\uFF0C\u53CA\u5BF9\u5E94\u7684 PPP \u534F\u8BAE\u3001CSMA/CD \u534F\u8BAE</li><li>\u4E09\u4E2A\u57FA\u672C\u95EE\u9898\uFF1A\u5C01\u88C5\u6210\u5E27\u3001\u900F\u660E\u4F20\u8F93\u3001\u5DEE\u9519\u68C0\u6D4B</li><li>\u4EE5\u592A\u7F51 MAC \u5C42\u7684\u786C\u4EF6\u5730\u5740</li><li>\u9002\u914D\u5668\u3001\u8F6C\u53D1\u5668\u3001\u96C6\u7EBF\u5668\u3001\u7F51\u6865\u3001\u4EE5\u592A\u7F51\u4EA4\u6362\u673A\u7684\u4F5C\u7528\u4EE5\u53CA\u4F7F\u7528\u573A\u5408</li></ul><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/network/2-link-layer.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var _2LinkLayer_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$d]]);
var _2LinkLayer_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _2LinkLayer_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTc0MzIxOA==&amp;mid=2247483668&amp;idx=1&amp;sn=0d26071c34efc912c8ffd27351be5ea3&amp;chksm=ce992e09f9eea71fc4d83f10fd3f5bae2ac8085d1d3d02e411b95a0e598f25d8ef3b76990f31&amp;token=923323399&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">\u9996\u5148\u53D1\u5E03\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><hr><h1 id="\u7F51\u7EDC\u5C42" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5C42" aria-hidden="true">#</a> \u7F51\u7EDC\u5C42</h1><h2 id="\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1" aria-hidden="true">#</a> \u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1</h2><ul><li>\u865A\u7535\u8DEF\u670D\u52A1\u3002\u9762\u5411\u8FDE\u63A5\u3001\u53EF\u9760\u7684\u670D\u52A1\u3002</li><li>\u6570\u636E\u62A5\u670D\u52A1\u3002\u65E0\u8FDE\u63A5\u3001\u6700\u5927\u52AA\u529B\u4EA4\u4ED8\u7684\u670D\u52A1\u3002</li></ul><p>TCP/IP \u4F53\u7CFB\u4E2D\uFF0C\u7F51\u7EDC\u5C42\u5411\u4E0A\u5C42\uFF08\u8FD0\u8F93\u5C42\uFF09\u53EA\u63D0\u4F9B\u7B80\u5355\u7075\u6D3B\u7684\u3001\u65E0\u8FDE\u63A5\u7684\u3001\u5C3D\u6700\u5927\u52AA\u529B\u4EA4\u4ED8\u7684\u6570\u636E\u62A5\uFF08IP \u6570\u636E\u62A5\uFF09\u670D\u52A1\u3002\u7F51\u7EDC\u5C42\u4E0D\u63D0\u4F9B\u670D\u52A1\u8D28\u91CF\u7684\u627F\u8BFA\u3002</p><h2 id="\u7F51\u9645\u534F\u8BAE-ip-internet-protocol" tabindex="-1"><a class="header-anchor" href="#\u7F51\u9645\u534F\u8BAE-ip-internet-protocol" aria-hidden="true">#</a> \u7F51\u9645\u534F\u8BAE IP\uFF08Internet Protocol\uFF09</h2><p>\u8FD9\u91CC\u7684 IP \u534F\u8BAE\uFF0C\u6307\u7684\u662F TCP/IP \u4F53\u7CFB\u4E2D\u7684 IPv4 \u534F\u8BAE\u3002</p><p>\u4E0E IP \u534F\u8BAE\u914D\u5957\u7684\u534F\u8BAE\uFF1A</p><ul><li>\u5730\u5740\u89E3\u6790\u534F\u8BAE ARP\uFF08Address Resolution Protocol\uFF09</li><li>\u7F51\u9645\u62A5\u6587\u63A7\u5236\u534F\u8BAE ICMP\uFF08Internet Control Message Protocol\uFF09</li><li>\u7F51\u9645\u7EC4\u7BA1\u7406\u534F\u8BAE IGMP\uFF08Internet Group Management Protocol\uFF09</li></ul><p>\u6CA1\u6709\u4E00\u79CD\u5355\u4E00\u7684\u7F51\u7EDC\u80FD\u9002\u5E94\u6240\u6709\u7528\u6237\u7684\u9700\u6C42\uFF08\u6709\u5404\u79CD\u5404\u6837\u7684\u7F51\u7EDC\uFF09\uFF0C\u5C06\u7F51\u7EDC\u4E92\u76F8\u8FDE\u63A5\u8D77\u6765\u9700\u8981\u4E00\u4E9B\u4E2D\u95F4\u8BBE\u5907\uFF1A</p><ul><li>\u7269\u7406\u5C42\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u8F6C\u53D1\u5668</code></li><li>\u6570\u636E\u94FE\u8DEF\u5C42\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u7F51\u6865</code>\u6216<code>\u6865\u63A5\u5668</code></li><li>\u7F51\u7EDC\u5C42\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u8DEF\u7531\u5668</code></li><li>\u7F51\u7EDC\u5C42\u4EE5\u4E0A\uFF0C\u4F7F\u7528\u7684\u4E2D\u95F4\u8BBE\u5907\u4E3A<code>\u7F51\u5173</code></li></ul><h3 id="ip-\u5730\u5740\u548C\u786C\u4EF6\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#ip-\u5730\u5740\u548C\u786C\u4EF6\u5730\u5740" aria-hidden="true">#</a> IP \u5730\u5740\u548C\u786C\u4EF6\u5730\u5740</h3><p><code>IP \u5730\u5740</code></p><ul><li>\u5373\u7F51\u7EDC\u5730\u5740\uFF0C\u4E3B\u673A\u5728\u7F51\u7EDC\u4E0A\u7684\u552F\u4E00\u6807\u8BC6\u3002\u662F\u7F51\u7EDC\u5C42\u548C\u4EE5\u4E0A\u5404\u5C42\u4F7F\u7528\u7684\u5730\u5740\uFF0C\u662F\u4E00\u79CD\u903B\u8F91\u5730\u5740\u3002</li><li>\u957F\u5EA6 32 \u4F4D</li></ul><p><code>\u786C\u4EF6\u5730\u5740\uFF08\u6216\u7269\u7406\u5730\u5740\u3001\u6216MAC\u5730\u5740\uFF09</code></p><ul><li>\u662F\u6570\u636E\u94FE\u8DEF\u5C42\u548C\u7269\u7406\u5C42\u4F7F\u7528\u7684\u5730\u5740\u3002</li><li>\u957F\u5EA6 48 \u4F4D</li></ul><blockquote><p>\u5C40\u57DF\u7F51\u4E2D\uFF0C\u786C\u4EF6\u5730\u5740\u5DF2\u7ECF\u56FA\u5316\u5728\u7F51\u5361\u7684 ROM \u4E2D\u3002</p></blockquote><h3 id="\u5206\u7C7B\u7684-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B\u7684-ip-\u5730\u5740" aria-hidden="true">#</a> \u5206\u7C7B\u7684 IP \u5730\u5740</h3><p><code>\u5206\u7C7B\u7684 IP \u5730\u5740</code>\u5C06 IP \u5730\u5740\u56FA\u5B9A\u7684\u5212\u5206\u4E3A\u82E5\u5E72\u7C7B\uFF0C\u6BCF\u4E00\u7C7B\u7531<code>\u7F51\u7EDC\u53F7(net-id)</code>\u548C<code>\u4E3B\u673A\u53F7(host-id)</code>\u7EC4\u6210\uFF0C\u683C\u5F0F\uFF1A</p><blockquote><p>IP \u5730\u5740 ::= {&lt;\u7F51\u7EDC\u53F7&gt;, &lt;\u4E3B\u673A\u53F7&gt;}</p></blockquote><p>\u5206\u7C7B\uFF1A</p><ul><li>A \u7C7B\u5730\u5740\uFF0C{8, 24}\uFF0C\u7F51\u7EDC\u53F7\u7684\u7B2C\u4E00\u4F4D\u4E3A<code>0</code></li><li>B \u7C7B\u5730\u5740\uFF0C{16, 16}\uFF0C\u7F51\u7EDC\u53F7\u7684\u524D\u4E24\u4F4D\u4E3A<code>10</code>\uFF0C\u6700\u5C0F\u5730\u5740<code>128.1.0.0</code></li><li>C \u7C7B\u5730\u5740\uFF0C{24, 8}\uFF0C\u7F51\u7EDC\u53F7\u7684\u524D\u4E09\u4F4D\u4E3A<code>110</code>\uFF0C\u6700\u5C0F\u5730\u5740<code>192.0.1.0</code></li><li>D \u7C7B\u5730\u5740\uFF0C\u524D\u56DB\u4F4D<code>1110</code>\uFF0C\u7528\u4E8E\u591A\u64AD\uFF08\u4E00\u5BF9\u591A\u901A\u4FE1\uFF09</li><li>E \u7C7B\u5730\u5740\uFF0C\u524D\u56DB\u4F4D<code>1111</code>\uFF0C\u4FDD\u7559\u4E3A\u4EE5\u540E\u7528</li></ul><p>\u4E24\u4E2A\u7279\u6B8A IP \u5730\u5740\uFF1A</p><ul><li><code>0.0.0.0</code>\u8868\u793A\u672C\u7F51\u7EDC\u3002</li><li><code>127.0.0.1</code>\u4FDD\u7559\u4F5C\u4E3A\u672C\u5730\u8F6F\u4EF6<code>\u56DE\u73AF\u6D4B\u8BD5\uFF08lookback test\uFF09</code>\u672C\u4E3B\u673A\u8FDB\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\u4E4B\u7528\u3002</li></ul><p>\u8DEF\u7531\u5668\u7684\u7279\u6027\uFF1A</p><ul><li>\u8DEF\u7531\u5668\u81F3\u5C11\u8FDE\u63A5\u4E24\u4E2A\u7F51\u7EDC\uFF0C\u81F3\u5C11\u5177\u5907\u4E24\u4E2A\u4E0D\u540C\u7684\u7F51\u7EDC\u53F7\u3002</li><li>\u8DEF\u7531\u5668\u53EA\u6839\u636E\u76EE\u7684\u7AD9\u7684 IP \u5730\u5740\u7684\u7F51\u7EDC\u53F7\u8FDB\u884C\u8DEF\u7531\u8F6C\u53D1\u3002</li></ul><h3 id="\u5730\u5740\u89E3\u6790\u534F\u8BAE-arp" tabindex="-1"><a class="header-anchor" href="#\u5730\u5740\u89E3\u6790\u534F\u8BAE-arp" aria-hidden="true">#</a> \u5730\u5740\u89E3\u6790\u534F\u8BAE ARP</h3><p>\u5C06<code>IP\u5730\u5740</code>\u89E3\u6790\u4E3A<code>\u786C\u4EF6\u5730\u5740</code>\uFF08\u5907\u6CE8\uFF1A\u53EA\u80FD\u89E3\u6790\u540C\u7F51\u7EDC\u7684 IP \u5730\u5740\uFF09.</p><p>\u6BCF\u53F0\u4E3B\u673A\u90FD\u6709\u4E00\u4E2A<code>ARP\u9AD8\u901F\u7F13\u5B58\uFF08ARP cache\uFF09</code>\uFF0C\u91CC\u9762\u6709\u672C\u5C40\u57DF\u7F51\u4E0A\u5404\u79CD\u4E3B\u673A\u548C\u8DEF\u7531\u5668\u7684<code>IP\u5730\u5740</code>\u5230<code>\u786C\u4EF6\u5730\u5740</code>\u7684\u6620\u5C04\uFF0C\u6BCF\u6761\u8BB0\u5F55\u90FD\u6709<code>\u751F\u5B58\u65F6\u95F4</code>(\u5982\uFF1A10-20 \u5206\u949F)</p><blockquote><p>linux \u73AF\u5883\u4E0B\uFF0C\u6570\u636E\u5B58\u50A8\u5728/proc/net/arp\uFF0C\u6267\u884C\u547D\u4EE4\u884C arp \u4E5F\u53EF\u67E5\u770B\u6570\u636E</p></blockquote><p>\u62FC\u63A5 MAC \u5E27\u65F6\uFF0CMAC \u5730\u5740\u7684\u67E5\u627E\u89C4\u5219\uFF1A</p><ul><li>\u627E\u5230 MAC \u5730\u5740\uFF0C\u76F4\u63A5\u5199\u5165</li><li>\u672A\u627E\u5230 MAC \u5730\u5740 <ul><li>ARP \u8FDB\u7A0B\u5728\u5C40\u57DF\u7F51\u7F51\u4E2D\uFF0C\u53D1\u9001\u5E7F\u64AD\u67E5\u627E <ul><li>\u627E\u5230\u76EE\u7684\u4E3B\u673A\u7684 MAC \u5730\u5740</li><li>\u627E\u5230\u8DEF\u7531\u5668\u7684 MAC \u5730\u5740</li></ul></li></ul></li></ul><p>Question\uFF1A\u65E2\u7136\u94FE\u8DEF\u5C42\u4E0A\u4F20\u9001\u7684\u5E27\u6700\u7EC8\u662F\u6309\u7167<code>\u786C\u4EF6\u5730\u5740</code>\u627E\u5230\u76EE\u6807\u4E3B\u673A\uFF0C\u4E3A\u4F55\u8981\u4F7F\u7528\u62BD\u8C61\u7684 IP \u5730\u5740\uFF0C\u4E0D\u76F4\u63A5\u4F7F\u7528<code>\u786C\u4EF6\u5730\u5740</code>\u8FDB\u884C\u901A\u4FE1\uFF1F</p><ol><li>\u5404\u79CD\u5404\u6837\u7684\u7F51\u7EDC\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u786C\u4EF6\u5730\u5740\u3002</li><li>\u5F02\u6784\u7684\u7F51\u7EDC\u80FD\u591F\u4E92\u76F8\u901A\u4FE1\uFF0C\u5FC5\u987B\u8FDB\u884C<code>\u975E\u5E38\u590D\u6742\u786C\u4EF6\u5730\u5740\u8F6C\u6362\u5DE5\u4F5C</code>\uFF0C\u7531\u7528\u6237\u3001\u7528\u6237\u4E3B\u673A\u5B8C\u6210\u8FD9\u4E2A\u5DE5\u4F5C\u51E0\u4E4E\u662F\u4E0D\u53EF\u80FD\u7684\u4E8B\u60C5\u3002</li><li>\u4E3B\u673A\u62E5\u6709\u4E00\u4E2A\u552F\u4E00\u7684 IP \u5730\u5740\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u7684\u901A\u4FE1\u5C31\u50CF\u8FDE\u63A5\u5728\u540C\u4E00\u4E2A\u7F51\u7EDC\u4E0A\u90A3\u4E48\u7B80\u5355\u3002</li></ol><h3 id="ip-\u6570\u636E\u62A5" tabindex="-1"><a class="header-anchor" href="#ip-\u6570\u636E\u62A5" aria-hidden="true">#</a> IP \u6570\u636E\u62A5</h3><p>\u683C\u5F0F\uFF1A{\u56FA\u5B9A 20 \u4E2A\u5B57\u8282\u7684\u9996\u90E8} {\u53EF\u53D8\u957F\u5EA6\u7684\u53EF\u9009\u5B57\u6BB5} {\u6570\u636E\u90E8\u5206}</p><p>\u5907\u6CE8\uFF1A\u6570\u636E\u62A5\u4E2D\u603B\u957F\u5EA6\u5B57\u6BB5\uFF0C\u5360 16 \u4F4D\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF0C\u56E0\u6B64 IP \u6570\u636E\u62A5\u7684\u6700\u5927\u957F\u5EA6\u4E3A 2^16 -1 = 65535 \u4E2A\u5B57\u8282</p><h3 id="ip-\u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B-\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#ip-\u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B-\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4" aria-hidden="true">#</a> IP \u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B\uFF08\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4\uFF09</h3><p>\u8DEF\u7531\u8868\u4E2D\u6BCF\u6761\u8DEF\u7531\u8BB0\u5F55\u6700\u4E3B\u8981\u7684\u4FE1\u606F\uFF1A&lt;\u76EE\u7684\u7F51\u7EDC\u5730\u5740, \u4E0B\u4E00\u8DF3\u5730\u5740&gt;</p><p><code>\u8DEF\u7531\u8868</code>\u4E2D\u4E09\u79CD<code>\u8DEF\u7531\u8BB0\u5F55</code>:</p><ul><li><code>\u57FA\u4E8E\u76EE\u7684\u4E3B\u673A\u6240\u5728\u7F51\u7EDC\u7684\u4EA4\u4ED8</code><ol><li>IP \u6570\u636E\u62A5\uFF0C\u6700\u7EC8\u4E00\u5B9A\u80FD\u627E\u5230\u76EE\u7684\u4E3B\u673A\u6240\u5728\u7684\u76EE\u7684\u7F51\u7EDC\u4E0A\u7684\u8DEF\u7531\u5668\uFF08\u53EF\u80FD\u8981\u901A\u8FC7\u591A\u6B21\u95F4\u63A5\u4EA4\u4ED8\uFF09\u3002</li><li>\u53EA\u6709\u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u8DEF\u7531\u5668\uFF0C\u624D\u8BD5\u56FE\u5411\u76EE\u7684\u4E3B\u673A\u8FDB\u884C\u76F4\u63A5\u4EA4\u4ED8\u3002</li></ol></li><li><code>\u7279\u5B9A\u4E3B\u673A\u8DEF\u7531</code></li><li><code>\u9ED8\u8BA4\u8DEF\u7531</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># host ip\u4E3A192.168.5.12\u7684\u8DEF\u7531\u8868</span>

<span class="token punctuation">[</span>root@localhost<span class="token punctuation">]</span><span class="token comment"># route -n</span>
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
<span class="token number">0.0</span>.0.0         <span class="token number">192.168</span>.5.1     <span class="token number">0.0</span>.0.0         UG    <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> ens33
<span class="token number">192.168</span>.5.0     <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> ens33
<span class="token number">192.168</span>.6.0     <span class="token number">192.168</span>.5.2     <span class="token number">255.255</span>.255.0   UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> ens33
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8DEF\u7531\u8868\u89E3\u91CA\uFF1A</p><ul><li>\u7B2C\u4E00\u6761\u8BB0\u5F55\u4E3A<code>\u9ED8\u8BA4\u8DEF\u7531</code>\uFF0C\u4E0B\u4E00\u8DF3\u5730\u5740\u4E3A<code>192.168.5.1</code></li><li>\u7B2C\u4E8C\u6761\u8BB0\u5F55\u4E3A\u672C\u7F51\u7EDC\u7684\u76F4\u63A5\u4EA4\u4ED8</li><li>\u7B2C\u4E09\u6761\u8BB0\u5F55\u4E3A\uFF0C\u5230<code>192.168.6.0</code>\u7F51\u7EDC\u7684\u4E0B\u4E00\u8DF3\u5730\u5740\u4E3A<code>192.168.5.2</code></li><li>Flags \u4E2D\u7684 <ul><li><code>U</code>\u8868\u793A<code>\u8DEF\u7531\u662F\u53EF\u7528\u7684</code></li><li><code>G</code>\u8868\u793A\u4E0B\u4E00\u8DF3\u4E3A<code>\u8DEF\u7531\u5668</code>\uFF1B<code>G\u5B58\u5728</code>\u4E3A<code>\u95F4\u63A5\u4EA4\u4ED8</code>\uFF0C<code>G\u4E0D\u5B58\u5728</code>\u4E3A<code>\u76F4\u63A5\u4EA4\u4ED8</code></li><li><code>H</code>\u8868\u793A\u8BE5\u8DEF\u7531\u662F\u5230\u4E00\u53F0<code>\u4E3B\u673A</code>\uFF0C\u82E5<code>\u4E0D\u8BBE\u7F6EH</code>\uFF0C\u5219\u8868\u793A\u8BE5\u8DEF\u7531\u662F\u4E00\u4E2A<code>\u7F51\u7EDC</code></li></ul></li></ul><p>\u5206\u7EC4\u8F6C\u53D1\u7B97\u6CD5\uFF0C\u8DEF\u7531\u4F18\u5148\u7EA7\uFF1A</p><ul><li>\u4E0E\u8DEF\u7531\u5668\u76F4\u8FDE\u7684\u7F51\u7EDC\uFF0C\u76F4\u63A5\u4EA4\u4ED8</li><li>\u8DEF\u7531\u8868\u4E2D\u7279\u5B9A\u4E3B\u673A\u8DEF\u7531\uFF0C\u6267\u884C\u4E0B\u4E00\u8DF3</li><li>\u8DEF\u7531\u8868\u4E2D\u7684\u7F51\u7EDC\u8DEF\u7531\uFF0C\u6267\u884C\u4E0B\u4E00\u8DF3</li><li>\u8DEF\u7531\u8868\u4E2D\u7684\u9ED8\u8BA4\u8DEF\u7531\uFF0C\u6267\u884C\u4E0B\u4E00\u8DF3</li><li>\u62A5\u544A\u5206\u7EC4\u8F6C\u53D1\u5931\u8D25</li></ul><h2 id="\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51" aria-hidden="true">#</a> \u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51</h2><p><code>\u4E24\u7EA7 IP \u5730\u5740</code> ::= { &lt;\u7F51\u7EDC\u53F7&gt;, &lt;\u4E3B\u673A\u53F7&gt; }</p><p><code>\u4E09\u7EA7 IP \u5730\u5740</code> ::= { &lt;\u7F51\u7EDC\u53F7&gt;, &lt;\u5B50\u7F51\u53F7&gt;, &lt;\u4E3B\u673A\u53F7&gt; }</p><p><code>\u5B50\u7F51\u7684\u7F51\u7EDC\u5730\u5740</code> := &lt;IP \u5730\u5740&gt; AND &lt;\u5B50\u7F51\u63A9\u7801&gt;</p><p><code>\u65E0\u5206\u7C7B\u7F16\u5740CIDR\uFF08\u6784\u9020\u8D85\u7F51\uFF09</code> ::= { &lt;\u7F51\u7EDC\u524D\u7F00&gt;, &lt;\u4E3B\u673A\u53F7&gt; }</p><p>\u65E0\u5206\u7C7B\u57DF\u95F4\u8DEF\u7531\u9009\u62E9 CIDR\uFF08Classless Inter-Domain Routing\uFF09\uFF1A</p><ul><li>CIDR \u6D88\u9664\u4E86\u4F20\u7EDF\u7684 A \u7C7B\u3001B \u7C7B\u3001C \u7C7B\u5730\u5740\u4EE5\u53CA\u5212\u5206\u5B50\u7F51\u7684\u6982\u5FF5</li><li>CIDR \u628A<code>\u7F51\u7EDC\u524D\u7F00</code>\u90FD\u76F8\u540C\u7684\u8FDE\u7EED\u7684 IP \u5730\u5740\u7EC4\u6210\u4E00\u4E2A<code>CIDR\u5730\u5740\u5757</code></li></ul><blockquote><p>\u8D85\u7F51\uFF1A\u4E00\u6BB5\u8FDE\u7EED\u7684 IP \u5730\u5740\u6BB5\uFF0C\u76F8\u5F53\u4E8E\u5176\u4E2D\u53EF\u4EE5\u5305\u542B\u591A\u4E2A B \u7C7B\u3001C \u7C7B\u5730\u5740</p></blockquote><p>\u8D85\u7F51<code>128.14.35.7/20</code>\uFF0C\u8BED\u610F\uFF1A</p><ul><li>\u6700\u5C0F\u5730\u5740\u4E3A\uFF0C128.14.32.0</li><li>\u6700\u5927\u5730\u5740\u4E3A\uFF0C128.14.27.255</li></ul><h2 id="\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE-icmp" tabindex="-1"><a class="header-anchor" href="#\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE-icmp" aria-hidden="true">#</a> \u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE ICMP</h2><p>\u4E3A\u4E86\u66F4\u6709\u6548\u7684\u8F6C\u53D1 IP \u6570\u636E\u62A5\u548C\u63D0\u9AD8\u4EA4\u4ED8\u6210\u529F\u7684\u673A\u4F1A\uFF0C\u5728\u7F51\u9645\u5C42\u4F7F\u7528 ICMP\uFF08Internet Control Message Protocol\uFF09\u534F\u8BAE\u3002\u5B83\u4E0D\u662F\u9AD8\u5C42\u534F\u8BAE\uFF0C\u800C\u662F IP \u5C42\uFF08\u7F51\u7EDC\u5C42\uFF09\u7684\u534F\u8BAE\u3002</p><p>ICMP \u62A5\u6587\u79CD\u7C7B\uFF1A</p><ul><li>ICMP \u5DEE\u9519\u62A5\u544A\u62A5\u6587</li><li>ICMP \u8BE2\u95EE\u62A5\u6587\u3002\u6709\u4E24\u79CD\uFF1A <ul><li>\u56DE\u9001\u8BF7\u6C42\u548C\u56DE\u7B54</li><li>\u65F6\u95F4\u6233\u8BF7\u6C42\u548C\u56DE\u7B54</li></ul></li></ul><p>ICMP \u7684\u5E94\u7528\u4E3E\u4F8B\uFF1A</p><ul><li>ping <ul><li>\u4F7F\u7528\u7684\u662F<code>\u56DE\u9001\u8BF7\u6C42\u548C\u56DE\u7B54</code>\uFF0C\u6D4B\u8BD5\u4E24\u53F0\u4E3B\u673A\u4E4B\u95F4\u7684<code>\u8FDE\u901A\u6027</code></li><li>\u5728\u5E94\u7528\u5C42\u76F4\u63A5\u4F7F\u7528\u7F51\u7EDC\u5C42 ICMP\uFF0C\u5B83\u6CA1\u6709\u4F7F\u7528 TCP/UDP</li><li>\u6709\u7684\u4E3B\u673A\u4E3A\u4E86\u9632\u6B62\u6076\u610F\u653B\u51FB\u5C31\u4E0D\u7406\u776C\u5916\u754C\u53D1\u9001\u8FC7\u6765\u7684<code>ICMP\u56DE\u9001\u8BF7\u6C42</code>\u62A5\u6587\uFF0C\u4F8B\u5982\uFF1Awindows \u673A\u5668</li></ul></li><li>traceroute <ul><li>\u7528\u4E8E\u8FFD\u8E2A\u4E00\u4E2A\u5206\u7EC4\u4ECE\u6E90\u70B9\u5230\u7EC8\u70B9\u7684\u8DEF\u5F84</li><li>\u4ECE\u6E90\u4E3B\u673A\u5411\u76EE\u7684\u4E3B\u673A\u53D1\u9001\u4E00\u8FDE\u4E32\u7684<code>IP \u6570\u636E\u62A5</code>\uFF0C\u6570\u636E\u62A5\u4E2D\u5C01\u88C5\u7684\u662F\u65E0\u6CD5\u4EA4\u4ED8\u7684 UDP \u7528\u6237\u6570\u636E\u62A5</li></ul></li></ul><h2 id="\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</h2><h3 id="\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5" aria-hidden="true">#</a> \u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5</h3><p><code>\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5</code>\u7684\u7279\u70B9\uFF1A</p><ul><li>\u7B97\u6CD5\u5FC5\u987B\u662F\u6B63\u786E\u7684\u3001\u5B8C\u6574\u7684\u3002</li><li>\u7B97\u6CD5\u5728\u8BA1\u7B97\u4E0A\u5E94\u7B80\u5355\u3002\u4E0D\u4F7F\u7F51\u7EDC\u901A\u4FE1\u91CF\u589E\u52A0\u592A\u591A\u7684\u989D\u5916\u5F00\u9500</li><li>\u7B97\u6CD5\u80FD\u9002\u5E94\u901A\u4FE1\u91CF\u548C\u7F51\u7EDC\u62D3\u6251\u7684\u53D8\u5316\uFF0C\u5373\u81EA\u9002\u5E94\u6027\u3001\u7A33\u5065\u6027</li><li>\u7B97\u6CD5\u5E94\u5177\u6709\u7A33\u5B9A\u6027\u3002\u5E94\u6536\u655B\u4E8E\u4E00\u4E2A\u53EF\u63A5\u53D7\u7684\u89E3\uFF0C\u4E0D\u5E94\u4F7F\u5F97\u8DEF\u7531\u4E0D\u505C\u7684\u53D8\u5316</li><li>\u7B97\u6CD5\u662F\u516C\u5E73\u7684\u3002\u6240\u6709\u7528\u6237\u4F18\u5148\u7EA7\u76F8\u540C\u3002</li><li>\u7B97\u6CD5\u5E94\u662F\u6700\u4F73\u7684\u3002\u76F8\u5BF9\u4E8E\u67D0\u4E00\u79CD\u7279\u5B9A\u8981\u6C42\u4E0B\u5F97\u51FA\u8F83\u4E3A\u5408\u7406\u7684\u9009\u62E9</li></ul><h3 id="\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE" aria-hidden="true">#</a> \u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</h3><p><code>\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</code>\uFF0C\u5C06\u4E92\u8054\u7F51\u5212\u5206\u4E3A\u8BB8\u591A\u8F83\u5C0F\u7684 <code>\u81EA\u6D3D\u7CFB\u7EDF\uFF08autonomous system\uFF09</code>\uFF0C\u4E00\u822C\u6807\u8BB0\u4E3A<code>AS</code>.</p><p>\u4F7F\u7528<code>\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5</code>\uFF0C\u53EF\u5C06\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE\u5212\u5206\u4E3A\uFF1A</p><ul><li>\u5185\u90E8\u7F51\u5173\u534F\u8BAE IGP\uFF08Interior Gateway Protocol\uFF09\uFF0C\u5177\u4F53\u7684\u534F\u8BAE\u5982\uFF1A <ul><li>\u8DEF\u7531\u4FE1\u606F\u534F\u8BAE RIP\uFF08Routing Information Protocol\uFF09</li><li>\u5F00\u653E\u6700\u77ED\u8DEF\u5F84\u4F18\u5148 OSPF\uFF08Open Shortest Path First\uFF09</li></ul></li><li>\u5916\u90E8\u7F51\u5173\u534F\u8BAE XGP\uFF08External Gateway Protocol\uFF09\uFF0C\u5177\u4F53\u7684\u534F\u8BAE\uFF1A <ul><li>\u8FB9\u754C\u7F51\u5173\u534F\u8BAE BGP</li></ul></li></ul><h3 id="\u8DEF\u7531\u5668\u7684\u6784\u6210" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668\u7684\u6784\u6210" aria-hidden="true">#</a> \u8DEF\u7531\u5668\u7684\u6784\u6210</h3><p>\u8DEF\u7531\u5668\u7684\u4EFB\u52A1\uFF1A</p><ul><li>\u8DEF\u7531\u9009\u62E9</li><li>\u8F6C\u53D1\u5206\u7EC4</li></ul><p>\u8DEF\u7531\u5668\u7684\u7ED3\u6784\uFF1A</p><ul><li>\u591A\u4E2A\u8F93\u5165\u7AEF\u53E3\u3001\u591A\u4E2A\u8F93\u51FA\u7AEF\u53E3</li></ul><p><code>\u8DEF\u7531\u8868\u548C\u8F6C\u53D1\u8868</code>\u5BF9\u6BD4:</p><blockquote><p>\u5728\u8BA8\u8BBA\u8DEF\u7531\u9009\u62E9\u539F\u7406\u65F6\uFF0C\u4E0D\u533A\u5206\u8F6C\u53D1\u8868\u3001\u8DEF\u7531\u8868\u7684\u533A\u522B\uFF0C\u7B3C\u7EDF\u7684\u4F7F\u7528\u8DEF\u7531\u8868\u4E00\u8BCD</p></blockquote><table><thead><tr><th></th><th>\u8DEF\u7531\u8868</th><th>\u8F6C\u53D1\u8868</th></tr></thead><tbody><tr><td>\u8BB0\u5F55\u6765\u6E90</td><td>\u662F\u8BB8\u591A\u8DEF\u7531\u5668\u534F\u540C\u5DE5\u4F5C\u5F97\u51FA\u7684\u7ED3\u679C</td><td>\u4ECE\u8DEF\u7531\u8868\u5F97\u51FA</td></tr><tr><td>\u5355\u884C\u8BB0\u5F55</td><td>\u76EE\u7684\u7F51\u7EDC\u5230\u4E0B\u4E00\u8DF3\u5730\u5740\u7684\u6620\u5C04</td><td>\u8981\u5230\u8FBE\u7684\u76EE\u7684\u7F51\u7EDC\uFF0C\u5230\u8F93\u51FA\u7AEF\u53E3\u3001MAC \u5730\u5740\u4FE1\u606F\u7684\u6620\u5C04</td></tr><tr><td>\u5206\u7EC4\u8F6C\u53D1\u65F6\u7684\u4F18\u70B9</td><td>\u8DEF\u7531\u8868\u662F\u5BF9\u7F51\u7EDC\u62D3\u6251\u53D8\u5316\u7684\u8BA1\u7B97\u6700\u4F18\u5316</td><td>\u8F6C\u53D1\u8868\u7684\u7ED3\u6784\u4F7F\u67E5\u627E\u8FC7\u7A0B\u6700\u4F18\u5316</td></tr><tr><td>\u5B9E\u73B0\u65B9\u5F0F</td><td>\u603B\u662F\u4F7F\u7528\u8F6F\u4EF6</td><td>\u8F6F\u4EF6\u3001\u786C\u4EF6\u90FD\u53EF\u4EE5</td></tr></tbody></table><h2 id="ipv6" tabindex="-1"><a class="header-anchor" href="#ipv6" aria-hidden="true">#</a> IPv6</h2><h3 id="ipv6-\u7684\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#ipv6-\u7684\u5730\u5740" aria-hidden="true">#</a> IPv6 \u7684\u5730\u5740</h3><p>IPv6 \u5730\u5740\u957F\u5EA6\uFF1A128 \u4F4D</p><p>\u4E66\u5199\u65B9\u5F0F\uFF0C\u91C7\u7528<code>\u5192\u53F7\u5341\u516D\u8FDB\u5236\u8BB0\u6CD5</code>\uFF0Ceg\uFF1A</p><blockquote><p>6836:8c64:0:0:0:0:2222:ffff</p></blockquote><p>\u4E66\u5199\u89C4\u5219\uFF1A</p><ul><li>\u5341\u516D\u8FDB\u5236\u4E2D\uFF0C\u5141\u8BB8\u628A\u6570\u5B57\u524D\u7684 0 \u7701\u7565</li><li>\u5141\u8BB8<code>\u96F6\u538B\u7F29</code>,\u5373\u591A\u4E2A\u76F8\u8FDE\u7684<code>0</code>\uFF0C\u53EF\u4EE5\u538B\u7F29\u4E3A<code>6836:8c64::2222:ffff</code></li><li>\u5141\u8BB8\u7ED3\u5408\u4F7F\u7528<code>\u70B9\u5206\u5341\u8FDB\u5236</code>\u7684\u540E\u7F00\uFF0C\u5982\uFF1A<code>::128.0.0.1</code></li><li>\u65E0\u5206\u7C7B\u7F16\u5740 CIDR\uFF08\u6784\u9020\u8D85\u7F51\uFF09\u7684\u659C\u7EBF\u8868\u793A\u6CD5\u4F9D\u7136\u53EF\u7528\uFF0C\u5982<code>12AB:0:0:CD30::/60</code></li></ul><p>\u4E00\u4E2A IPv6 \u6570\u636E\u62A5\u7684\u76EE\u7684\u5730\u5740\u53EF\u4EE5\u662F yi \u4E00\u4E0B\u4E09\u79CD\u57FA\u672C\u7C7B\u578B\u5730\u5740\u4E4B\u4E00\uFF1A</p><ul><li>\u5355\u64AD\u5730\u5740\u3002\u4F20\u7EDF\u7684\u70B9\u5BF9\u70B9\u901A\u4FE1\u3002</li><li>\u591A\u64AD\u5730\u5740\u3002\u4E00\u70B9\u5BF9\u591A\u70B9\u901A\u4FE1\u3002</li><li>\u4EFB\u64AD\u5730\u5740\u3002IPv6 \u65B0\u589E\u7C7B\u578B\uFF0C\u4EFB\u64AD\u7684\u7EC8\u70B9\u662F\u4E00\u7EC4\u8BA1\u7B97\u673A\uFF0C\u4F46\u6570\u636E\u62A5\u53EA\u4EA4\u4ED8\u7ED9\u5176\u4E2D\u4E00\u4E2A\uFF0C\u901A\u5E38\u662F\u8DDD\u79BB\u6700\u8FD1\u7684\u3002</li></ul><h3 id="ipv6-\u6570\u636E\u62A5" tabindex="-1"><a class="header-anchor" href="#ipv6-\u6570\u636E\u62A5" aria-hidden="true">#</a> IPv6 \u6570\u636E\u62A5</h3><ul><li>\u57FA\u672C\u9996\u90E8\uFF08\u56FA\u5B9A 40 \u4E2A\u5B57\u8282\uFF09 + \u6709\u6548\u8F7D\u8377\uFF08\u6700\u5927 64KB\uFF09</li></ul><p>\u5907\u6CE8\uFF1A\u6570\u636E\u62A5\u4E2D\u6709\u6548\u8F7D\u8377\u5360 16 \u4F4D\uFF0C\u5B83\u8868\u660E\u9664\u57FA\u672C\u9996\u90E8\u4EE5\u5916\u7684\u5B57\u8282\u6570\uFF0C\u6700\u5927\u4E3A 64KB\uFF08\u5373 65535 \u5B57\u8282\uFF09</p><h3 id="ipv4-\u5411-ipv6-\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#ipv4-\u5411-ipv6-\u8FC7\u6E21" aria-hidden="true">#</a> IPv4 \u5411 IPv6 \u8FC7\u6E21</h3><p>\u4E24\u79CD\u8FC7\u6E21\u7B56\u7565\uFF1A</p><ul><li>\u53CC\u534F\u8BAE\u6808\uFF08dual stack\uFF09 <ul><li>\u540C\u65F6\u652F\u6301 IPv4 \u548C IPv6 \u534F\u8BAE</li></ul></li><li>\u96A7\u9053\u6280\u672F\uFF08tunneling\uFF09 <ul><li>IPv6 \u6570\u636E\u62A5\u8FDB\u5165 IPv4 \u7F51\u7EDC\u65F6\uFF0C\u628A IPv6 \u6570\u636E\u62A5\u5C01\u88C5\u6210 IPv4 \u6570\u636E\u62A5</li></ul></li></ul><h3 id="icmpv6" tabindex="-1"><a class="header-anchor" href="#icmpv6" aria-hidden="true">#</a> ICMPv6</h3><p>\u4E0E IPv4 \u4E00\u6837\uFF0C\u4E0D\u4FDD\u8BC1\u53EF\u9760\u4EA4\u4ED8\u3002\u65B0\u7248\u7684 ICMPv6\uFF0C\u5C06 ARP\uFF08\u5730\u5740\u89E3\u6790\u534F\u8BAE\uFF09 \u548C IGMP\uFF08\u7F51\u9645\u7EC4\u7BA1\u7406\u534F\u8BAE\uFF09 \u5408\u5E76\u5230\u4E86 ICMPv6 \u4E2D\u3002</p><h2 id="ip-\u591A\u64AD" tabindex="-1"><a class="header-anchor" href="#ip-\u591A\u64AD" aria-hidden="true">#</a> IP \u591A\u64AD</h2><blockquote><p>TODO: \u8FD9\u5757\u4EE5\u540E\u518D\u7EC6\u770B\uFF08\u53EF\u80FD\u6C38\u8FDC\u4E0D\u770B&lt;_&lt;\uFF09</p></blockquote><p>\u5728\u4E92\u8054\u7F51\u4E0A\u8FDB\u884C\u591A\u64AD\u5C31\u53EB\u505A<code>IP\u591A\u64AD</code>.</p><p>IP \u591A\u64AD\u7684\u76EE\u7684\u5730\u5740\uFF0C<code>D\u7C7BIP\u5730\u5740</code>\uFF0C\u5373\u8303\u56F4\uFF08D \u7C7B\u5730\u5740\u7684\u5343\u56DB\u4F4D\u7684\u524D\u7F00\u662F 1110\uFF09\u4E3A<code>224.0.0.0\u5230239.255.255.255</code></p><p><code>\u591A\u64AD\u8DEF\u7531\u5668</code>\uFF0C\u7528\u4E8E\u5B9E\u73B0\u5728\u4E92\u8054\u7F51\u8303\u56F4\u7684\u591A\u64AD\uFF0C\u4E5F\u53EF\u4EE5\u8F6C\u53D1\u666E\u901A\u7684\u5355\u64AD IP \u6570\u636E\u62A5\u3002</p><p>IP \u591A\u64AD\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u672C\u5C40\u57DF\u7F51\u4E0A\u8FDB\u884C\u786C\u4EF6\u591A\u64AD</li><li>\u4E92\u8054\u7F51\u8303\u56F4\u8FDB\u884C\u591A\u64AD</li></ul><h3 id="ip-\u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#ip-\u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE" aria-hidden="true">#</a> IP \u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE</h3><p>\u9700\u8981\u7684\u534F\u8BAE\uFF1A</p><ul><li><code>\u7F51\u9645\u7EC4\u7BA1\u7406\u534F\u8BAEIGMP\uFF08Internet Group Manangement Protocol\uFF09</code>\uFF0C\u8BA9\u8FDE\u63A5\u5728<code>\u672C\u5730\u5C40\u57DF\u7F51</code>\u7684\u591A\u64AD\u8DEF\u7531\u5668\u77E5\u9053<code>\u672C\u5C40\u57DF\u7F51</code>\u4E0A\u662F\u5426\u6709\u4E3B\u673A\uFF08\u4E25\u683C\u8BB2\uFF0C\u662F\u4E3B\u673A\u4E0A\u7684\u8FDB\u7A0B\uFF09\u53C2\u52A0\u6216\u9000\u51FA\u591A\u64AD\u7EC4\u3002</li><li><code>\u591A\u64AD\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</code><ul><li>\u6D2A\u6CDB\u548C\u7FE6\u9664</li><li>\u96A7\u9053\u6280\u672F</li><li>\u57FA\u4E8E\u6838\u5FC3\u7684\u53D1\u73B0\u6280\u672F</li></ul></li></ul><h2 id="\u865A\u62DF\u4E13\u7528\u7F51-vpn-\u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E13\u7528\u7F51-vpn-\u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" aria-hidden="true">#</a> \u865A\u62DF\u4E13\u7528\u7F51 VPN \u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT</h2><h3 id="\u865A\u62DF\u4E13\u7528\u7F51-vpn" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E13\u7528\u7F51-vpn" aria-hidden="true">#</a> \u865A\u62DF\u4E13\u7528\u7F51 VPN</h3><p><code>\u4E13\u7528\u5730\u5740</code>\uFF0C\u53EA\u80FD\u7528\u4E8E\u4E00\u4E2A\u673A\u6784\u5185\u7684\u901A\u4FE1\uFF0C\u4E0D\u80FD\u7528\u4E8E\u548C\u4E92\u8054\u7F51\u4E0A\u7684\u4E3B\u673A\u901A\u4FE1\u3002\u5373\u5728\u4E92\u8054\u7F51\u4E2D\u7684\u6240\u6709\u8DEF\u7531\u5668\uFF0C\u5BF9<code>\u76EE\u7684\u5730\u5740\u662F\u4E13\u7528\u5730\u5740</code>\u7684\u6570\u636E\u62A5\u4E00\u5F8B\u4E0D\u8FDB\u884C\u8F6C\u53D1\u3002</p><p>\u4E13\u7528\u7F51 IP \u5730\u5740\u6BB5</p><ul><li>A \u7C7B\uFF1A10.0.0.0 \u5230 10.255.255.255 \uFF081658 \u4E07\u4E2A\uFF09</li><li>B \u7C7B\uFF1A172.16.0.0 \u5230 172.31.255.255 \uFF08104 \u4E07\u4E2A\uFF09</li><li>C \u7C7B\uFF1A192.168.0.0 \u5230 192.168.255.255 \uFF086.5 \u4E07\u4E2A\uFF09</li></ul><p>\u4E92\u8054\u7F51 IP\uFF08\u5168\u7403\u5408\u6CD5 IP\uFF09 \u5730\u5740\u6BB5\uFF1A</p><ul><li>A \u7C7B\uFF1A <ul><li>1.0.0.0----9.255.255.255 \uFF081.5 \u4EBF\u4E2A\uFF09</li><li>11.0.0.0-----126.255.255.255 \uFF0819.23 \u4EBF\u4E2A\uFF09</li></ul></li><li>B \u7C7B\uFF1A <ul><li>128.0.0.0-----172.15.255.255 \uFF087.3 \u4EBF\u4E2A\uFF09</li><li>172.32.0.0-----191.255.255.255 \uFF083.3 \u4EBF\u4E2A\uFF09</li></ul></li><li>C \u7C7B\uFF1A <ul><li>192.0.0.0-------192.167.255.255 \uFF080.11 \u4EBF\u4E2A\uFF09</li><li>192.169.0.0-----223.255.255.255 \uFF085.03 \u4EBF\u4E2A\uFF09</li></ul></li></ul><p>VPN \u7684\u5E94\u7528\uFF1A</p><ol><li>\u4E13\u7528\u7F51\u4E4B\u95F4\u4E4B\u95F4\u5EFA\u7ACB\u901A\u4FE1\uFF0C\u7279\u70B9\uFF1A</li></ol><ul><li>\u4E0E\u4E13\u7528\u7F51\u8FDE\u63A5\u7684\u8DEF\u7531\u5668\u5177\u6709<code>\u5408\u6CD5\u7684\u5168\u7403IP</code></li></ul><ol start="2"><li>\u4E2A\u4EBA\u4E0E\u4E13\u7528\u7F51\u5EFA\u7ACB\u901A\u4FE1\uFF0C\u7279\u70B9\uFF1A</li></ol><ul><li>\u5458\u5DE5\u901A\u8FC7\u62E8\u53F7\u8FDB\u5165\u4E92\u8054\u7F51</li><li>\u9A7B\u7559\u5728\u4E2A\u4EBA\u7535\u8111\u4E2D VPN \u8F6F\u4EF6\uFF0C\u5728\u4E2A\u4EBA\u7535\u8111\u548C\u516C\u53F8\u4E3B\u673A\u4E4B\u95F4\u5EFA\u7ACB VPN \u96A7\u9053</li></ul><h3 id="\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat" aria-hidden="true">#</a> \u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT</h3><p>\u89E3\u51B3\u7684\u95EE\u9898\uFF1A\u4E13\u7528\u7F51\u7684\u4E3B\u673A\uFF0C\u9700\u8981\u548C\u4E92\u8054\u7F51\u4E0A\u7684\u4E3B\u673A\u901A\u4FE1\u3002</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u5728\u4E13\u7528\u7F51\u8FDE\u63A5\u5230\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u5668\u4E0A\u5B89\u88C5 NAT \u8F6F\u4EF6\uFF0C\u8FD9\u79CD\u8DEF\u7531\u5668\u79F0\u4E3A<code>NAT\u8DEF\u7531\u5668</code>\uFF0C\u5B83\u81F3\u5C11\u6709\u4E00\u4E2A\u6709\u6548\u7684\u5916\u90E8\u5168\u7403 IP \u5730\u5740\u3002</p><p><code>NAT\u8DEF\u7531\u5668</code>\u7684\u4F5C\u7528\uFF1A</p><ul><li>NAT \u8DEF\u7531\u5668\u7684\u901A\u4FE1\uFF0C\u5FC5\u987B\u7531<code>\u4E13\u7528\u7F51\u53D1\u8D77</code></li><li>\u5C06\u4E13\u7528\u7F51\u4E2D\u4E3B\u673A\u53D1\u9001\u7684 IP \u6570\u636E\u62A5\u4E2D\u7684\u6E90 IP \u5730\u5740\uFF0C\u4FEE\u6539\u4E3A NAT \u8DEF\u7531\u5668\u7684\u5168\u7403 IP \u5730\u5740\uFF0C\u7136\u540E\u8F6C\u53D1\u51FA\u53BB\u3002</li><li>\u5C06\u4ECE\u4E92\u8054\u7F51\u6536\u5230\u7684 IP \u6570\u636E\u62A5\u4E2D\u7684\u76EE\u6807\u5730\u5740\uFF0C\u901A\u8FC7 <code>NAT \u5730\u5740\u8F6C\u6362\u8868</code>\uFF0C\u8F6C\u5316\u4E3A\u4E13\u7528\u7F51\u7684\u76EE\u7684\u4E3B\u673A\u7684 IP \u5730\u5740\u3002</li></ul><p>\u5907\u6CE8\uFF1A\u5F53 NAT \u8F6C\u6362\u8868\uFF0C\u4EC5\u8BB0\u5F55 IP \u65F6\uFF0C\u540C\u4E00\u65F6\u95F4\uFF0C\u4EC5\u80FD\u6709\u4E00\u53F0\u4E13\u7528\u7F51\u7684\u4E3B\u673A\uFF0C\u4F7F\u7528 NAT \u8DEF\u7531\u5668\u5411\u4E92\u8054\u7F51\u901A\u4FE1\u3002\u5F53 NAT \u8F6C\u6362\u8868\uFF0C\u8BB0\u5F55&lt;ip, port&gt;\u65F6\uFF0C\u540C\u4E00\u65F6\u95F4\uFF0C\u652F\u6301\u591A\u4E2A\u4E13\u7528\u7F51\u4E3B\u673A\u5411\u4E92\u8054\u7F51\u901A\u4FE1\u3002</p><p>\u4F20\u7EDF NAT\uFF08traditional NAT\uFF09\uFF0C\u4F7F\u7528 IP \u7684\u8F6C\u6362\u8868\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u65B9\u5411</th><th>\u5B57\u6BB5</th><th>\u65E7\u7684 IP \u5730\u5740</th><th>\u65B0\u7684 IP \u5730\u5740</th></tr></thead><tbody><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740</td><td>192.168.0.3</td><td>172.38.1.5</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740</td><td>172.38.1.5</td><td>192.168.0.3</td></tr><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740</td><td>192.168.0.7</td><td>172.38.1.6</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740</td><td>172.38.1.6</td><td>192.168.0.7</td></tr></tbody></table><p>NAPT\uFF08Network Address And Port Translation\uFF09,\u4F7F\u7528 IP\u3001\u7AEF\u53E3\u7684\u8F6C\u6362\u8868\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u65B9\u5411</th><th>\u5B57\u6BB5</th><th>\u65E7\u7684 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7</th><th>\u65B0\u7684 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7</th></tr></thead><tbody><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740:TCP \u6E90\u7AEF\u53E3</td><td>192.168.0.3:3000</td><td>172.38.1.5:40001</td></tr><tr><td>\u51FA</td><td>\u6E90 IP \u5730\u5740:TCP \u6E90\u7AEF\u53E3</td><td>192.168.0.4:3000</td><td>172.38.1.5:40002</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740:TCP \u76EE\u7684\u7AEF\u53E3</td><td>172.38.1.5:40001</td><td>172.38.0.3:3000</td></tr><tr><td>\u5165</td><td>\u76EE\u7684 IP \u5730\u5740:TCP \u76EE\u7684\u7AEF\u53E3</td><td>172.38.1.5:40002</td><td>172.38.0.4:3000</td></tr></tbody></table><p>\u5907\u6CE8\uFF1A\u8DEF\u7531\u5668\u662F\u5DE5\u4F5C\u5728\u7F51\u7EDC\u5C42\u7684\u8BBE\u5907\uFF0CNAPT \u8DEF\u7531\u5668\uFF0C\u8FD8\u8981\u67E5\u770B\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3\u3002</p><hr><div style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)}><br><span>\u5FAE\u4FE1\u516C\u4F17\u53F7</span></p></div><!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/network/3-network-layer.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var _3NetworkLayer_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$c]]);
var _3NetworkLayer_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _3NetworkLayer_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTc0MzIxOA==&amp;mid=2247483674&amp;idx=1&amp;sn=5a3965005250c9a5ea8c6119c0b1e049&amp;chksm=ce992e07f9eea7116f25c25f92479af23a0af13d793229c74ce10e8eb3d6c74f09359cf9b514&amp;token=923323399&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">\u9996\u5148\u53D1\u5E03\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><hr><h1 id="\u8FD0\u8F93\u5C42" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u8F93\u5C42" aria-hidden="true">#</a> \u8FD0\u8F93\u5C42</h1><p>\u91CD\u8981\u6982\u5FF5\uFF1A</p><ol><li>\u8FD0\u8F93\u5C42\u4E3A\u76F8\u4E92\u901A\u4FE1\u7684\u5E94\u7528\u8FDB\u7A0B\u63D0\u4F9B\u903B\u8F91\u901A\u4FE1\u3002</li><li>\u7AEF\u53E3\u548C\u5957\u63A5\u5B57\u7684\u610F\u4E49\u3002</li><li>\u65E0\u8FDE\u63A5\u7684 UDP \u7684\u7279\u70B9\u3002</li><li>\u9762\u5411\u8FDE\u63A5\u7684 TCP \u7684\u7279\u70B9\u3002</li><li>\u5728\u4E0D\u53EF\u9760\u7684\u7F51\u7EDC\u4E0A\u5B9E\u73B0\u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u505C\u6B62\u7B49\u5F85\u534F\u8BAE\u548C ARQ \u534F\u8BAE\u3002</li><li>TCP \u6ED1\u52A8\u7A97\u53E3\u3001\u6D41\u91CF\u63A7\u5236\u3001\u62E5\u585E\u63A7\u5236\u548C\u8FDE\u63A5\u7BA1\u7406\u3002</li></ol><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><h3 id="\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1" aria-hidden="true">#</a> \u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1</h3><p>\u4ECE\u901A\u4FE1\u4FE1\u606F\u5904\u7406\u7684\u89D2\u5EA6\uFF0C\u8FD0\u8F93\u5C42\u5411\u5B83\u4E0A\u5C42\u7684\u5E94\u7528\u5C42\u63D0\u4F9B\u901A\u4FE1\u670D\u52A1\uFF0C\u5B83\u5C5E\u4E8E\u9762\u5411\u901A\u4FE1\u90E8\u5206\u7684\u6700\u9AD8\u5C42\uFF0C\u540C\u65F6\u4E5F\u662F\u7528\u6237\u529F\u80FD\u533A\u7684\u6700\u5E95\u5C42\u3002</p><p>\u4ECE <code>IP \u5C42</code>\u770B\uFF0C\u901A\u4FE1\u7684<code>\u4E24\u7AEF</code>\u662F<code>\u4E24\u53F0\u4E3B\u673A</code>\u3002\u4ECE<code>\u8FD0\u8F93\u5C42</code>\u770B\uFF0C\u901A\u4FE1\u7684\u7AEF\u70B9<code>\u4E0D\u662F\u4E3B\u673A</code>\uFF0C\u662F<code>\u4E3B\u673A\u4E2D\u7684\u8FDB\u7A0B</code>\u3002\u5373<code>\u7AEF\u5230\u7AEF\u7684\u901A\u4FE1</code>\uFF0C\u662F\u5E94\u7528\u8FDB\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\u3002</p><p>\u8FD0\u8F93\u5C42\u91CD\u8981\u7684\u529F\u80FD\uFF1A</p><ul><li>\u590D\u7528\u3002\u5728\u53D1\u9001\u65B9\uFF0C\u4E0D\u540C\u7684\u5E94\u7528\u8FDB\u7A0B\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528\u540C\u4E00\u4E2A\u8FD0\u8F93\u5C42\u4F20\u9001\u6570\u636E\u3002</li><li>\u5206\u7528\u3002\u5728\u63A5\u6536\u65B9\uFF0C\u5265\u53BB\u62A5\u6587\u7684\u9996\u90E8\u540E\u80FD\u591F\u628A\u6570\u636E\u6B63\u786E\u4EA4\u4ED8\u76EE\u7684<code>\u5E94\u7528\u8FDB\u7A0B</code>\u3002</li></ul><blockquote><p>IP \u5C42\u4E5F\u5B58\u5728\u590D\u7528\u548C\u5206\u7528 \u590D\u7528\uFF1A\u5728\u53D1\u9001\u65B9\uFF0C\u4E0D\u540C\u534F\u8BAE\u7684\u6570\u636E\u90FD\u53EF\u4EE5\u5C01\u88C5\u6210 IP \u6570\u636E\u5305\u53D1\u9001\u51FA\u53BB\u3002 \u5206\u7528\uFF1A\u5728\u63A5\u6536\u65B9\uFF0C\u6839\u636E IP \u9996\u90E8\u4E2D\u7684\u534F\u8BAE\u5B57\u6BB5\uFF0C\u628A\u5265\u53BB\u9996\u90E8\u540E\u7684\u6570\u636E\u5E94\u5F53\u63A5\u6536\u8FD9\u4E9B\u6570\u636E\u7684\u534F\u8BAE\u3002</p></blockquote><p>\u901A\u4FE1\u7684\u533A\u522B\uFF1A</p><ul><li><code>\u7F51\u7EDC\u5C42</code>\u4E3A<code>\u4E3B\u673A\u4E4B\u95F4</code>\u63D0\u4F9B\u903B\u8F91\u901A\u4FE1\u3002</li><li><code>\u8FD0\u8F93\u5C42</code>\u4E3A<code>\u5E94\u7528\u8FDB\u7A0B\u4E4B\u95F4</code>\u63D0\u4F9B\u7AEF\u5230\u7AEF\u7684\u903B\u8F91\u901A\u4FE1\u3002</li></ul><h3 id="\u8FD0\u8F93\u5C42\u7684\u4E24\u79CD\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u8F93\u5C42\u7684\u4E24\u79CD\u534F\u8BAE" aria-hidden="true">#</a> \u8FD0\u8F93\u5C42\u7684\u4E24\u79CD\u534F\u8BAE</h3><p>\u4E24\u4E2A\u534F\u8BAE\uFF1A</p><ul><li>\u65E0\u8FDE\u63A5\u7684 UDP <ul><li>\u6570\u636E\u5355\u4F4D\uFF1AUDP \u7528\u6237\u6570\u636E\u62A5</li><li>\u4E0D\u9700\u8981\u5148\u5EFA\u7ACB\u8FDE\u63A5</li><li>\u4E0D\u63D0\u4F9B\u53EF\u9760\u4EA4\u4ED8</li></ul></li><li>\u9762\u5411\u8FDE\u63A5\u7684 TCP <ul><li>\u6570\u636E\u5355\u4F4D\uFF1ATCP \u62A5\u6587\u6BB5</li><li>\u53D1\u9001\u6570\u636E\u524D\uFF0C\u5FC5\u987B\u5148\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u53D1\u9001\u7ED3\u675F\u540E\u8981\u91CA\u653E\u8FDE\u63A5</li><li>\u63D0\u4F9B\u53EF\u9760\u4EA4\u4ED8</li><li>\u4E0D\u63D0\u4F9B\u5E7F\u64AD\u3001\u591A\u64AD\u670D\u52A1</li></ul></li></ul><p>\u4F7F\u7528\u4E86 UDP\u3001TCP \u7684\u5E94\u7528\u3001\u5E94\u7528\u534F\u8BAE\uFF1A</p><table><thead><tr><th>\u5E94\u7528</th><th>\u5E94\u7528\u534F\u8BAE</th><th>\u8FD0\u8F93\u5C42\u534F\u8BAE</th></tr></thead><tbody><tr><td>\u540D\u5B57\u8F6C\u6362</td><td>NDS\uFF0C\u57DF\u540D\u7CFB\u7EDF</td><td>UDP</td></tr><tr><td>\u6587\u4EF6\u4F20\u9001</td><td>TFTP\uFF0C\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE</td><td>UDP</td></tr><tr><td>\u8DEF\u7531\u9009\u62E9\u534F\u8BAE</td><td>RIP\uFF0C\u8DEF\u7531\u4FE1\u606F\u534F\u8BAE</td><td>UDP</td></tr><tr><td>IP \u5730\u5740\u914D\u7F6E</td><td>DHCP\uFF0C\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE</td><td>UDP</td></tr><tr><td>\u7F51\u7EDC\u7BA1\u7406</td><td>SNMP\uFF0C\u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE</td><td>UDP</td></tr><tr><td>\u8FDC\u7A0B\u6587\u4EF6\u670D\u52A1\u5668</td><td>NFS\uFF0C\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF</td><td>UDP</td></tr><tr><td>\u591A\u64AD</td><td>IGMP\uFF0C\u7F51\u9645\u7EC4\u7BA1\u7406\u534F\u8BAE</td><td>UDP</td></tr><tr><td>\u7535\u5B50\u90AE\u4EF6</td><td>SMTP\uFF0C\u7B80\u5355\u90AE\u4EF6\u4F20\u8F93\u534F\u8BAE</td><td>TCP</td></tr><tr><td>\u8FDC\u7A0B\u7EC8\u7AEF\u63A5\u5165</td><td>TELNET\uFF0C\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE</td><td>TCP</td></tr><tr><td>\u4E07\u7EF4\u7F51</td><td>HTTP\uFF0C\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE</td><td>TCP</td></tr><tr><td>\u6587\u4EF6\u4F20\u9001</td><td>FTP\uFF0C\u6587\u4EF6\u4F20\u9001\u534F\u8BAE</td><td>TCP</td></tr></tbody></table><h3 id="\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3" aria-hidden="true">#</a> \u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3</h3><p><code>\u786C\u4EF6\u7AEF\u53E3</code>\u662F<code>\u4E0D\u540C\u786C\u4EF6\u8BBE\u5907</code>\u8FDB\u884C\u4EA4\u4E92\u7684\u63A5\u53E3\u3002 <code>\u8F6F\u4EF6\u7AEF\u53E3</code>\uFF0C\u662F\u5728<code>\u534F\u8BAE\u6808\u5C42\u95F4</code>\u7684\u62BD\u8C61\u7684\u534F\u8BAE\u7AEF\u53E3\uFF0C\u662F<code>\u5E94\u7528\u5C42\u7684\u5404\u79CD\u534F\u8BAE</code>\u8FDB\u884C\u4E0E<code>\u8FD0\u8F93\u5B9E\u4F53</code>\u8FDB\u884C\u5C42\u95F4\u4EA4\u4E92\u7684\u4E00\u79CD\u5730\u5740\u3002</p><p>\u7AEF\u53E3\u53F7\u7684\u5206\u7C7B\uFF1A</p><ul><li>\u670D\u52A1\u5668\u7AEF\u4F7F\u7528\u7684\u7AEF\u53E3\u53F7 <ul><li>\u719F\u77E5\u7AEF\u53E3\u53F7\uFF08\u6216\u7CFB\u7EDF\u7AEF\u53E3\u53F7\uFF09\uFF0C\u8303\u56F4 0-1023\u3002\u8FD9\u4E9B\u6570\u503C\u53EF\u4EE5\u5728<a href="https://www.iana.org/" target="_blank" rel="noopener noreferrer">iana.org`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u67E5\u8BE2\u5230\u3002</li><li>\u7B49\u7EA7\u7AEF\u53E3\uFF0C\u8303\u56F4 1024-49151\u3002</li></ul></li><li>\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u7AEF\u53E3\u53F7\uFF08\u6216\u77ED\u6682\u7AEF\u53E3\u53F7\uFF09\uFF0C\u8303\u56F4 49152-65535\u3002</li></ul><h2 id="\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE-udp" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE-udp" aria-hidden="true">#</a> \u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE UDP</h2><p>UDP \u7684\u4E3B\u8981\u7279\u70B9\uFF1A</p><ul><li>\u65E0\u8FDE\u63A5</li><li>\u5C3D\u6700\u5927\u52AA\u529B\u4EA4\u4ED8</li><li>\u9762\u5411\u62A5\u6587\u3002UDP \u5BF9\u5E94\u7528\u5C42\u4EA4\u4E0B\u6765\u7684\u62A5\u6587\uFF0C\u4E0D\u5408\u5E76\u3001\u4E0D\u62C6\u5206\uFF1B\u5BF9 IP \u5C42\u4EA4\u4E0A\u6765\u7684 UDP \u7528\u6237\u6570\u636E\u62A5\uFF0C\u53BB\u9664\u9996\u90E8\uFF0C\u76F4\u63A5\u7ED9\u5E94\u7528\u5C42\u3002</li><li>\u6CA1\u6709\u62E5\u585E\u63A7\u5236\u3002\u65E0\u8BBA\u7F51\u8DEF\u662F\u5426\u62E5\u585E\uFF0C\u6052\u5B9A\u901F\u7387\u53D1\u6570\u636E\u3002</li><li>\u652F\u6301\u4E00\u5BF9\u4E00\u3001\u4E00\u5BF9\u591A\u3001\u591A\u5BF9\u4E00\u3001\u591A\u5BF9\u591A\u7684\u4EA4\u4E92\u901A\u4FE1\u3002</li><li>\u9996\u90E8\u5F00\u9500\u5C0F\uFF0C\u53EA\u6709 8 \u4E2A\u5B57\u8282\uFF08TCP20 \u4E2A\u5B57\u8282\uFF09</li></ul><h2 id="\u4F20\u8F93\u63A7\u5236\u534F\u8BAE-tcp" tabindex="-1"><a class="header-anchor" href="#\u4F20\u8F93\u63A7\u5236\u534F\u8BAE-tcp" aria-hidden="true">#</a> \u4F20\u8F93\u63A7\u5236\u534F\u8BAE TCP</h2><p>TCP \u4E3B\u8981\u7279\u70B9\uFF1A</p><ul><li>\u9762\u5411\u8FDE\u63A5\u3002\u901A\u4FE1\u524D\u5148\u5EFA\u7ACB TCP \u8FDE\u63A5\uFF0C\u7ED3\u675F\u540E\uFF0C\u91CA\u653E\u8FDE\u63A5\u3002</li><li>\u4E00\u5BF9\u4E00\u670D\u52A1\u3002TCP \u8FDE\u63A5\u53EA\u80FD\u6709\u4E24\u4E2A\u7AEF\u70B9\u3002</li><li>\u53EF\u9760\u4EA4\u4ED8</li><li>\u5168\u53CC\u5DE5\u901A\u4FE1\u3002\u5141\u8BB8\u901A\u4FE1\u53CC\u65B9\u7684\u5E94\u7528\u8FDB\u7A0B\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u80FD\u53D1\u9001\u6570\u636E\u3002</li><li>\u9762\u5411\u5B57\u8282\u6D41\u3002TCP \u4E2D\u7684\u6D41\u6307\u6D41\u5165\u5230\u8FDB\u7A0B\u6216\u4ECE\u8FDB\u7A0B\u6D41\u51FA\u7684\u5B57\u8282\u5E8F\u5217\u3002</li></ul><h3 id="tcp-\u7684\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u8FDE\u63A5" aria-hidden="true">#</a> TCP \u7684\u8FDE\u63A5</h3><p>TCP \u628A<code>\u8FDE\u63A5</code>\u4F5C\u4E3A\u6700\u57FA\u672C\u7684\u62BD\u8C61\uFF0C\u6BCF\u4E00\u4E2A<code>TCP\u8FDE\u63A5</code>\u90FD\u6709\u4E24\u4E2A<code>\u7AEF\u70B9</code>\uFF0CTCP \u8FDE\u63A5\u7684\u7AEF\u70B9\u53EB\u505A<code>\u5957\u63A5\u5B57\uFF08socket\uFF09</code>\u6216<code>\u63D2\u53E3</code>\u3002</p><p>\u5957\u63A5\u5B57\u7684\u5B9A\u4E49\uFF1A\u7AEF\u53E3\u53F7\u62FC\u63A5\u5230 IP \u5730\u5740\u5373\u4E3A\u5957\u63A5\u5B57\u3002</p><blockquote><p>\u5957\u63A5\u5B57 socket = \uFF08IP \u5730\u5740:\u7AEF\u53E3\u53F7\uFF09</p></blockquote><p>\u6BCF\u4E00\u4E2A TCP \u8FDE\u63A5\u552F\u4E00\u5730\u88AB\u901A\u4FE1\u4E24\u7AEF\u7684\u4E24\u4E2A\u7AEF\u70B9\uFF08\u5373\u4E24\u4E2A\u5957\u63A5\u5B57\uFF09\u6240\u786E\u5B9A\u3002\u5373\uFF1A</p><blockquote><p>TCP \u8FDE\u63A5 :== {socket01, socket02} = {(IP01:Port01), (IP02,Port02)}</p></blockquote><p>\u540C\u4E00\u4E2A IP \u5730\u5740\u53EF\u4EE5\u6709\u591A\u4E2A\u4E0D\u540C\u7684 TCP \u8FDE\u63A5\uFF0C\u540C\u4E00\u4E2A\u7AEF\u53E3\u53F7\u4E5F\u53EF\u4EE5\u51FA\u73B0\u5728\u591A\u4E2A\u4E0D\u540C\u7684 TCP \u8FDE\u63A5\u4E2D\u3002</p><h3 id="\u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406</h3><p>\u5904\u7406\u601D\u8DEF\uFF1A</p><ul><li>\u5F53\u51FA\u73B0\u5DEE\u9519\u65F6\uFF0C\u8BA9\u53D1\u9001\u65B9\u91CD\u4F20\u51FA\u73B0\u5DEE\u9519\u7684\u6570\u636E</li><li>\u5F53\u63A5\u6536\u65B9\u6765\u4E0D\u53CA\u5904\u7406\u6536\u5230\u7684\u6570\u636E\u65F6\uFF0C\u53CA\u65F6\u544A\u77E5\u53D1\u9001\u65B9\u9002\u5F53\u964D\u4F4E\u53D1\u9001\u6570\u636E\u7684\u901F\u5EA6\u3002</li></ul><p>\u65B9\u6848\u4E00\uFF0C<code>\u505C\u6B62\u7B49\u5F85\u534F\u8BAE</code>\u6D41\u7A0B\uFF1A</p><ul><li>\u53D1\u9001\u65B9\u53D1\u9001\u5206\u7EC4\u540E\uFF0C\u7B49\u5F85\u63A5\u6536\u65B9\u7684\u786E\u8BA4\u4FE1\u606F <ul><li>\u53D1\u9001\u65B9\uFF0C\u63A5\u6536\u5230\u786E\u8BA4\uFF0C\u53D1\u9001\u4E0B\u4E00\u4E2A\u5206\u7EC4</li><li>\u53D1\u9001\u65B9\uFF0C\u4E00\u6BB5\u65F6\u95F4\u540E\u672A\u8BF4\u5230\u786E\u8BA4\uFF0C\u91CD\u65B0\u53D1\u9001\u5206\u7EC4\uFF0C\u5373<code>\u8D85\u65F6\u91CD\u4F20</code></li></ul></li></ul><p>\u4F18\u7F3A\u70B9\uFF1A</p><ul><li>\u4F18\u70B9\u7B80\u5355</li><li>\u7F3A\u70B9\uFF0C\u8D44\u6E90\u5360\u7528\u9AD8</li></ul><p>\u65B9\u6848\u4E8C\uFF0C<code>\u8FDE\u7EEDARQ\u534F\u8BAE\uFF08\u6ED1\u52A8\u7A97\u53E3\u534F\u8BAE\uFF09</code>\u6D41\u7A0B\uFF1A</p><p>\u4E8B\u5148\u5BF9\u5206\u7EC4\u6309\u5E8F\u6392\u961F\uFF0C\u5047\u8BBE\u53D1\u9001\u7A97\u53E3\u5927\u5C0F\u4E3A 5</p><ul><li>\u53D1\u9001\u65B9\u7EF4\u6301<code>\u53D1\u9001\u7A97\u53E3</code>\uFF0C\u53D1\u9001\u7A97\u53E3\u5185\u7684 5 \u4E2A\u5206\u7EC4<code>\u540C\u65F6\u53D1\u9001</code><ul><li>\u63A5\u6536\u65B9\u4E00\u822C\u91C7\u7528<code>\u7D2F\u79EF\u786E\u8BA4</code>\uFF0C\u5BF9\u6309\u5E8F\u5230\u8FBE\u7684\u6700\u540E\u4E00\u4E2A\u5206\u7EC4\u53D1\u9001\u786E\u8BA4\u3002\u4F8B\u5982\uFF0C\u63A5\u6536\u65B9\u6536\u5230\u5206\u7EC4 5\u30016\u30018\u30019\uFF0C\u53EA\u5BF9\u5206\u7EC4 6 \u53D1\u51FA\u786E\u8BA4\u3002 <ul><li>\u53D1\u9001\u65B9\u6536\u5230<code>\u5206\u7EC46</code>\u7684\u786E\u8BA4\uFF0C\u5219<code>\u6ED1\u52A8\u7A97\u53E3</code>\u7684<code>\u8D77\u59CB\u4F4D\u7F6E</code>\u56DE\u5230<code>\u5206\u7EC47</code>\uFF0C\u518D\u6B21\u540C\u65F6\u53D1\u9001\u6ED1\u52A8\u7A97\u53E3\u4E2D\u7684 5 \u4E2A\u5206\u7EC4</li></ul></li></ul></li></ul><p><code>\u7D2F\u79EF\u786E\u8BA4</code>\u7684\u4F18\u7F3A\u70B9\uFF1A</p><ul><li>\u4F18\u70B9\uFF0C\u6613\u4E8E\u5B9E\u73B0</li><li>\u7F3A\u70B9\uFF0C\u4E0D\u80FD\u5411\u53D1\u9001\u65B9\u53CD\u6620\u51FA\u5DF2\u6B63\u786E\u63A5\u6536\u5230\u7684\u6240\u6709\u5206\u7EC4\u4FE1\u606F</li></ul><h3 id="tcp-\u62A5\u6587\u6BB5\u7684\u9996\u90E8" tabindex="-1"><a class="header-anchor" href="#tcp-\u62A5\u6587\u6BB5\u7684\u9996\u90E8" aria-hidden="true">#</a> TCP \u62A5\u6587\u6BB5\u7684\u9996\u90E8</h3><p>TCP \u9996\u90E8\u7684\u6700\u5C0F\u957F\u5EA6\u4E3A 20 \u5B57\u8282\u3002</p><p>\u9996\u90E8\u4E2D\u90E8\u5206\u91CD\u8981\u5B57\u6BB5\u7684\u542B\u4E49\uFF1A</p><ul><li><strong>\u786E\u8BA4 ACK</strong>\u3002\u5728\u8FDE\u63A5\u5EFA\u7ACB\u540E\u6240\u6709\u4F20\u9001\u7684\u62A5\u6587\u6BB5\u90FD\u5FC5\u987B\u628A ACK \u7F6E 1.</li><li><strong>\u63A8\u9001 PSH</strong>\u3002\u5C3D\u5FEB\u5C06\u62A5\u6587\u4EA4\u4ED8\u7ED9\u5E94\u7528\u8FDB\u7A0B\uFF0C\u800C\u4E0D\u662F\u7B49\u5230\u6574\u4E2A\u7F13\u5B58\u533A\u90FD\u586B\u6EE1\u540E\u518D\u5411\u4E0A\u4EA4\u4ED8\u3002</li><li><strong>\u590D\u4F4D RST</strong>\u3002TCP \u8FDE\u63A5\u4E2D\u51FA\u73B0\u4E25\u91CD\u5DEE\u9519\uFF0C\u5FC5\u987B\u91CA\u653E\u8FDE\u63A5\uFF0C\u7136\u540E\u91CD\u65B0\u5EFA\u7ACB\u8FD0\u8F93\u8FDE\u63A5\u3002</li><li><strong>\u540C\u6B65 SYN</strong>\u3002\u5728\u8FDE\u63A5\u5EFA\u7ACB\u65F6\u540C\u6B65\u5E8F\u53F7\u3002</li><li><strong>\u7EC8\u6B62 FIN</strong>\u3002\u7528\u6765\u91CA\u653E\u4E00\u4E2A\u8FDE\u63A5\u3002</li></ul><h3 id="tcp-\u53EF\u9760\u4F20\u8F93\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#tcp-\u53EF\u9760\u4F20\u8F93\u7684\u5B9E\u73B0" aria-hidden="true">#</a> TCP \u53EF\u9760\u4F20\u8F93\u7684\u5B9E\u73B0</h3><ol><li>\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u7684\u6ED1\u52A8\u7A97\u53E3</li><li>\u8D85\u65F6\u91CD\u4F20\u65F6\u95F4\u7684\u9009\u62E9\u3002\u5373\u901A\u8FC7\u4E00\u4E2A\u7A33\u5B9A\u7B97\u6CD5\uFF0C\u5F97\u51FA\u91CD\u4F20\u65F6\u95F4\u7684\u5927\u5C0F\u3002</li><li>\u9009\u62E9\u786E\u8BA4 SACK\uFF08Selective ACK\uFF09\u3002\u89E3\u51B3\u7684\u95EE\u9898\u662F\uFF0C\u53EA\u4F20\u9001\u7F3A\u5C11\u7684\u6570\u636E\u800C\u4E0D\u91CD\u4F20\u5DF2\u7ECF\u6B63\u786E\u5230\u8FBE\u63A5\u6536\u65B9\u7684\u6570\u636E\u3002</li></ol><h3 id="tcp-\u7684\u6D41\u91CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a> TCP \u7684\u6D41\u91CF\u63A7\u5236</h3><p>\u6D41\u91CF\u63A7\u5236\u7684\u76EE\u7684\uFF1A\u8BA9\u53D1\u9001\u65B9\u7684\u53D1\u9001\u901F\u7387\u4E0D\u8981\u592A\u5FEB\uFF0C\u8981\u8BA9\u63A5\u6536\u65B9\u6765\u5F97\u53CA\u63A5\u6536\u3002</p><h3 id="tcp-\u7684\u4F20\u8F93" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u4F20\u8F93" aria-hidden="true">#</a> TCP \u7684\u4F20\u8F93</h3><p>\u6570\u636E\u8FDB\u5165 TCP \u7684\u53D1\u9001\u7F13\u5B58\u540E\uFF0CTCP \u62A5\u6587\u6BB5\u7684\u53D1\u9001\u65F6\u673A\u7684\u673A\u5236</p><ul><li>\u7B2C\u4E00\u79CD\u673A\u5236\uFF1ATCP \u7EF4\u6301\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5B83\u7B49\u4E8E<code>\u6700\u5927\u62A5\u6587\u6BB5\u957F\u5EA6MSS</code>\uFF0C\u53EA\u8981\u7F13\u5B58\u4E2D\u7684\u5B57\u8282\u8FBE\u5230 M<code>MSS</code>\u5B57\u8282\u65F6\uFF0C\u5219\u7EC4\u88C5\u6210\u62A5\u6587\u6BB5\u53D1\u9001\u51FA\u53BB\u3002</li><li>\u7B2C\u4E8C\u79CD\u673A\u5236\uFF1A\u7531\u53D1\u9001\u65B9\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u6307\u660E\u8981\u6C42\u53D1\u9001\u62A5\u6587\u6BB5\uFF0C\u5373 TCP \u652F\u6301\u7684<code>\u63A8\u9001</code>\u64CD\u4F5C\u3002</li><li>\u7B2C\u4E09\u79CD\u673A\u5236\uFF1A\u7531\u53D1\u9001\u53D1\u4E00\u4E2A\u8BA1\u65F6\u5668\u671F\u9650\u5230\u4E86\u4E4B\u540E\uFF0C\u8FD9\u65F6\u5C31\u628A\u5F53\u524D\u5DF2\u6709\u7684\u7F13\u5B58\u6570\u636E\u88C5\u5165\u62A5\u6587\u6BB5\uFF08\u4F46\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 MSS\uFF09\u53D1\u9001\u51FA\u53BB\u3002</li></ul><h3 id="tcp-\u7684\u62E5\u585E\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u62E5\u585E\u63A7\u5236" aria-hidden="true">#</a> TCP \u7684\u62E5\u585E\u63A7\u5236</h3><p><code>\u62E5\u585E\u7684\u5B9A\u4E49</code>\uFF1A\u8BA1\u7B97\u673A\u7F51\u7EDC\u4E2D\u7684\u94FE\u8DEF\u5BB9\u91CF\uFF08\u5373\u5E26\u5BBD\uFF09\u3001\u4EA4\u6362\u8282\u70B9\u4E2D\u7684\u7F13\u5B58\u548C\u5904\u7406\u673A\u7B49\uFF0C\u90FD\u662F\u7F51\u7EDC\u4E2D\u7684\u8D44\u6E90\u3002\u5728\u67D0\u6BB5\u65F6\u95F4\uFF0C\u82E5\u5BF9\u7F51\u7EDC\u4E2D\u67D0\u4E00\u8D44\u6E90\u7684\u9700\u6C42\u8D85\u8FC7\u4E86\u8BE5\u8D44\u6E90\u6240\u80FD\u63D0\u4F9B\u7684\u53EF\u7528\u90E8\u5206\uFF0C\u7F51\u7EDC\u7684\u6027\u80FD\u5C31\u8981\u53D8\u574F\u3002\u8FD9\u79CD\u60C5\u51B5\u79F0\u4E3A<code>\u62E5\u585E</code>\u3002</p><p>\u5F15\u8D77<code>\u62E5\u585E</code>\u7684\u53EF\u80FD\u539F\u56E0\uFF1A</p><ul><li>\u4EA4\u6362\u8282\u70B9\u7684\u7F13\u5B58\u7684\u5B58\u50A8\u7A7A\u95F4\u4E0D\u591F\u7528</li><li>\u5904\u7406\u673A\u5904\u7406\u7684\u901F\u7387\u592A\u6162</li></ul><p><code>\u62E5\u585E\u63A7\u5236</code>\u7684\u76EE\u7684\uFF0C\u9632\u6B62\u8FC7\u591A\u7684\u6570\u636E\u6CE8\u5165\u5230\u7F51\u7EDC\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u7F51\u7EDC\u4E2D\u7684\u8DEF\u7531\u5668\u6216\u94FE\u8DEF\u4E0D\u81F4\u8FC7\u8F7D\u3002</p><p><code>\u6D41\u91CF\u63A7\u5236</code>\uFF0C\u5F80\u5F80\u6307\u70B9\u5BF9\u70B9\u901A\u4FE1\u91CF\u7684\u63A7\u5236\uFF0C\u662F\u4E2A\u7AEF\u5230\u7AEF\u7684\u95EE\u9898\u3002\u6D41\u91CF\u63A7\u5236\u6240\u8981\u505A\u7684\u662F\uFF0C\u6291\u5236\u53D1\u9001\u7AEF\u53D1\u9001\u6570\u636E\u7684\u901F\u7387\uFF0C\u4EE5\u4FBF\u4F7F\u63A5\u6536\u7AEF\u6765\u5F97\u53CA\u63A5\u6536\u3002</p><h4 id="tcp-\u62E5\u585E\u63A7\u5236\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#tcp-\u62E5\u585E\u63A7\u5236\u7684\u65B9\u6CD5" aria-hidden="true">#</a> TCP \u62E5\u585E\u63A7\u5236\u7684\u65B9\u6CD5</h4><p>\u62E5\u585E\u63A7\u5236\u65B9\u6CD5\u7684\u524D\u63D0\u5047\u8BBE\u6761\u4EF6\uFF1A</p><ol><li>\u6570\u636E\u662F\u5355\u65B9\u5411\u4F20\u9001\u7684\uFF0C\u5BF9\u65B9\u53EA\u4F20\u9001\u786E\u8BA4\u62A5\u6587\u3002</li><li>\u63A5\u6536\u65B9\u603B\u6709\u8DB3\u591F\u5927\u7684\u7F13\u5B58\u7A7A\u95F4\uFF0C\u56E0\u800C\u53D1\u9001\u7A97\u53E3\u7684\u5927\u5C0F\u7531\u7F51\u7EDC\u7684\u62E5\u585E\u7A0B\u5EA6\u6765\u51B3\u5B9A\u3002</li></ol><p>\u53D1\u9001\u65B9\u7684\u9650\u5236\u6761\u4EF6\uFF1A</p><ol><li>\u7EF4\u6301\u4E00\u4E2A\u53EB\u505A<code>\u62E5\u585E\u7A97\u53E3cwnd</code>\uFF08congestion window\uFF09\u7684\u72B6\u6001\u53D8\u91CF.</li><li>\u62E5\u585E\u7A97\u53E3\u7684\u5927\u5C0F\u53D6\u51B3\u4E8E\u7F51\u7EDC\u7684\u62E5\u585E\u7A0B\u5EA6\u3002</li><li>\u53D1\u9001\u65B9\u7684<code>\u53D1\u9001\u7A97\u53E3</code>\u5927\u5C0F\u7B49\u4E8E<code>\u62E5\u585E\u7A97\u53E3</code>\u5927\u5C0F\u3002</li></ol><p>\u63A7\u5236\u62E5\u585E\u65B9\u6CD5\u7684\u539F\u5219\uFF1A</p><ul><li>\u7F51\u7EDC\u6CA1\u6709\u53D1\u751F\u62E5\u585E\uFF0C\u5219\u589E\u52A0\u62E5\u585E\u7A97\u53E3\u5927\u5C0F\uFF0C\u4EE5\u4FBF\u53D1\u9001\u66F4\u591A\u7684\u5206\u7EC4\u3002</li><li>\u7F51\u7EDC\u53D1\u751F\u62E5\u585E\uFF0C\u5219\u51CF\u5C0F\u7F51\u7EDC\u7A97\u53E3\uFF0C\u7F13\u89E3\u62E5\u585E\u3002</li></ul><blockquote><p>\u5982\u4F55\u77E5\u9053\u7F51\u7EDC\u53D1\u751F\u62E5\u585E\uFF1A\u5F53\u53D1\u9001\u65B9\u672A\u6CA1\u6709\u6309\u65F6\u63A5\u6536\u5230\u786E\u8BA4\u62A5\u6587\uFF0C\u5219\u731C\u60F3\u7F51\u7EDC\u53D1\u751F\u62E5\u585E\u3002</p></blockquote><p>TCP \u62E5\u585E\u63A7\u5236 \u662F\u4E00\u79CD<code>\u57FA\u4E8E\u7A97\u53E3</code>\u7684\u62E5\u585E\u63A7\u5236\u65B9\u6CD5\uFF0C\u6D89\u53CA\u5230\u7684\u56DB\u79CD\u7B97\u6CD5\uFF1A</p><ul><li>\u6162\u5F00\u59CB\uFF08slow-start\uFF09\u3002\u968F\u7740<code>\u4F20\u8F93\u8F6E\u6B21</code>\u7684\u589E\u52A0\uFF0C\u6162\u5F00\u59CB\u7684<code>\u62E5\u585E\u7A97\u53E3</code>\u7684\u5927\u5C0F\uFF0C\u662F\u500D\u6570\u589E\u52A0\u3002</li><li>\u62E5\u585E\u907F\u514D\uFF08congestion avoidance\uFF09\u3002\u968F\u7740<code>\u4F20\u8F93\u8F6E\u6B21</code>\u7684\u589E\u52A0\uFF0C\u6162\u5F00\u59CB\u7684<code>\u62E5\u585E\u7A97\u53E3</code>\u7684\u5927\u5C0F\u81EA\u52A8+1\uFF0C\u7EBF\u6027\u589E\u52A0\u3002</li><li>\u5FEB\u91CD\u4F20\uFF08fast retransmit\uFF09\u3002\u5047\u8BBE\u6709\u62A5\u6587\u6BB5 M1\u3001M2\u3001M3\u3001M4\u3001M5\u3001M6\uFF0C\u63A5\u6536\u65B9\u4EC5\u63A5\u6536\u5230 M1\u3001M2\u3001M4\u3001M5\u3001M6\uFF0C\u672A\u6536\u5230 M3 \u65F6\u3002M4\u3001M5\u3001M6 \u7684\u56DE\u590D\u62A5\u6587\u8FD4\u56DE\u5BF9 M2 \u7684\u786E\u8BA4\u3002\u5F53\u63A5\u53D1\u9001\u65B9\u4E00\u8FDE\u6536\u5230\u4E09\u4E2A\u91CD\u590D\u786E\u8BA4\uFF0C\u5E94\u5F53\u7ACB\u5373\u8FDB\u884C\u91CD\u4F20 M3\uFF08\u5373<code>\u5FEB\u91CD\u4F20</code>\uFF09.</li><li>\u5FEB\u6062\u590D\uFF08fast recovery\uFF09\u3002\u95E8\u9650\u503C\u51CF\u534A\uFF0C\u6267\u884C<code>\u62E5\u585E\u907F\u514D</code>\u7B97\u6CD5\u3002</li></ul><p>\u57FA\u4E8E<code>\u62E5\u585E\u7A97\u53E3</code>\u7684\u62E5\u585E\u63A7\u5236\u6D41\u7A0B\uFF1A</p><ul><li>\u521D\u59CB cwnd \u4E3A 1\uFF0C<code>\u95E8\u9650\u5236\u4E3AN</code>\u3002</li><li>\u542F\u52A8<code>\u6162\u5F00\u59CB</code>\u7B97\u6CD5\uFF0C\u76F4\u81F3\u5230\u8FBE<code>\u95E8\u9650\u503C</code>\u3002\u5373 cwnd \u4E3A N \u65F6\u3002</li><li>\u5207\u6362\u4E3A<code>\u62E5\u585E\u907F\u514D</code>\u7B97\u6CD5\uFF0C\u76F4\u81F3 cwnd \u503C\u4E3A N+M\u3002 <ul><li>cwnd \u4E3A N+M \u65F6\uFF0C\u53D1\u751F\u4E86\u62E5\u585E\uFF0C\u5219 cwnd \u91CD\u7F6E\u4E3A 1\uFF0C\u95E8\u9650\u5236\u8BBE\u7F6E\u4E3A(N+M)/2\u3002\u91CD\u65B0\u6267\u884C<code>\u6162\u5F00\u59CB</code>+<code>\u62E5\u585E\u907F\u514D</code>\u7B97\u6CD5\u3002</li><li>cwnd \u4E3A N+M \u65F6\uFF0C\u672A\u53D1\u751F\u4E86\u62E5\u585E\uFF0C\u800C\u662F\u53D1\u751F\u4E86<code>\u5FEB\u91CD\u4F20</code>\uFF0C\u5219\u6267\u884C<code>\u5FEB\u6062\u590D</code>\u7B97\u6CD5\u3002\u5373<code>\u95E8\u9650\u503C</code>\u8BBE\u7F6E\u4E3A(N+M)/2\uFF0C\u7EE7\u7EED\u6267\u884C<code>\u62E5\u585E\u907F\u514D</code>\u7B97\u6CD5\u3002</li><li>cwnd \u4E3A N+M \u65F6\uFF0C\u672A\u53D1\u751F\u4E86\u62E5\u585E\uFF0C\u7EE7\u7EED\u6267\u884C<code>\u62E5\u585E\u907F\u514D</code>\u7B97\u6CD5\u3002</li></ul></li></ul><h4 id="\u4E3B\u52A8\u961F\u5217\u7BA1\u7406-aqm-active-queue-management" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u52A8\u961F\u5217\u7BA1\u7406-aqm-active-queue-management" aria-hidden="true">#</a> \u4E3B\u52A8\u961F\u5217\u7BA1\u7406 AQM(Active Queue Management)</h4><p>\u573A\u666F\uFF1A\u7F51\u7EDC\u5C42\u7684\u7B56\u7565\u5BF9 <code>TCP \u62E5\u585E\u63A7\u5236</code>\u5F71\u54CD\u6700\u5927\u7684\u5C31\u662F\u8DEF\u7531\u5668\u7684<code>\u5206\u7EC4\u4E22\u5931\u7B56\u7565</code>\uFF0C\u53EF\u80FD\u9020\u6210<code>\u5168\u5C40\u540C\u6B65</code>\u3002</p><blockquote><p>\u5168\u5C40\u540C\u6B65\u3002\u56E0\u4E3A\u5206\u7EC4\u4E22\u5931\u7B56\u7565\u5BFC\u81F4\u7684\u8D85\u65F6\uFF0C\u8BEF\u8BA4\u4E3A\u53D1\u751F\u62E5\u585E\uFF0C\u5BFC\u81F4\u8FDB\u5165\u6162\u5F00\u59CB\u3002\u8868\u73B0\u4E3A\u5168\u7F51\u7684\u901A\u4FE1\u91CF\u7A81\u7136\u4E0B\u964D\u5F88\u591A\uFF0C\u800C\u5728\u7F51\u7EDC\u6062\u590D\u6B63\u5E38\u540E\uFF0C\u4FE1\u606F\u91CF\u53C8\u7A81\u7136\u589E\u52A0\u5F88\u591A\u3002</p></blockquote><p>\u89E3\u51B3\u601D\u8DEF\uFF1A\u4E0D\u8981\u7B49\u5230<code>\u8DEF\u7531\u5668</code>\u7684<code>\u961F\u5217\u957F\u5EA6</code>\u8FBE\u5230<code>\u6700\u5927\u503C</code>\u65F6\uFF0C\u624D\u4E0D\u5F97\u4E0D\u4E22\u5F03\u540E\u9762\u7684\u5206\u7EC4\u3002\u5E94\u8BE5\u5728\u961F\u5217\u957F\u5EA6\u8FBE\u5230\u67D0\u4E2A<code>\u8B66\u60D5\u503C</code>\u65F6\uFF0C\u4E3B\u52A8\u4E22\u5F03\u5206\u7EC4\u3002\u8FD9\u6837\u53EF\u4EE5<code>\u51CF\u7F13\u62E5\u585E</code>\uFF0C\u751A\u81F3<code>\u4E0D\u51FA\u73B0\u62E5\u585E</code>\u3002</p><p>AQM \u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><ul><li>\u968F\u673A\u65E9\u671F\u68C0\u6D4B RED\uFF08Random Early Detection\uFF09</li></ul><h3 id="tcp-\u7684\u8FD0\u8F93\u8FDE\u63A5\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u8FD0\u8F93\u8FDE\u63A5\u7BA1\u7406" aria-hidden="true">#</a> TCP \u7684\u8FD0\u8F93\u8FDE\u63A5\u7BA1\u7406</h3><p>\u8FD0\u8F93\u8FDE\u63A5\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u5EFA\u7ACB\u8FDE\u63A5</li><li>\u6570\u636E\u4F20\u9001</li><li>\u8FDE\u63A5\u91CA\u653E</li></ul><h4 id="tcp-\u7684\u8FDE\u63A5\u5EFA\u7ACB" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u8FDE\u63A5\u5EFA\u7ACB" aria-hidden="true">#</a> TCP \u7684\u8FDE\u63A5\u5EFA\u7ACB</h4><p>TCP \u7684\u8FDE\u63A5\u5EFA\u7ACB\u8FC7\u7A0B\u4E2D\u9700\u8981\u89E3\u51B3\u7684\u4E09\u4E2A\u95EE\u9898\uFF1A</p><ol><li>\u4F7F\u6BCF\u4E00\u65B9\u77E5\u9053\u5BF9\u65B9\u7684\u5B58\u5728</li><li>\u8981\u5141\u8BB8\u53CC\u65B9\u534F\u5546\u4E00\u4E9B\u53C2\u6570\uFF08eg\uFF1A\u6700\u5927\u7A97\u53E3\u503C\u3001\u662F\u5426\u4F7F\u7528\u7A97\u53E3\u6269\u5927\u9009\u9879\u3001\u65F6\u95F4\u6233\u9009\u9879\u3001\u670D\u52A1\u8D28\u91CF\uFF09</li><li>\u80FD\u591F\u5BF9\u8FD0\u8F93\u5B9E\u4F53\u8D44\u6E90\uFF08eg\uFF1A\u7F13\u5B58\u5927\u5C0F\u3001\u8FDE\u63A5\u8868\u4E2D\u7684\u9879\u76EE\uFF09\u8FDB\u884C\u5206\u914D\u3002</li></ol><p>\u4E09\u62A5\u6587\u63E1\u624B\uFF08\u4E09\u6B21\u63E1\u624B\uFF09\u6D41\u7A0B\uFF0CA \u4E3A\u5BA2\u6237\u7AEF\uFF0CB \u4E3A\u670D\u52A1\u7AEF\uFF1A</p><ul><li>A -&gt; B. SYN=1,seq=x</li><li>B -&gt; A. ACK=1,ack=x+1,SYN=1,seq=y</li><li>A -&gt; B. ACK=1,ack=y+1,seq=x+1</li></ul><blockquote><p>seq \u7A97\u53E3\u7684\u521D\u59CB\u5E8F\u53F7</p></blockquote><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Question\uFF1A\u4E09\u6B21\u63E1\u624B\uFF0C\u80FD\u5426\u6539\u4E3A\u56DB\u6B21\u63E1\u624B\uFF1F
Answer\uFF1A\u53EF\u4EE5\uFF0C\u5C06 B-&gt;A \u7684\u62A5\u6587\uFF0C\u62C6\u5206\u4E3A\u4E24\u4E2A\u3002\u4E00\u4E2A\u786E\u8BA4\u62A5\u6587\uFF08ACK=1,seq=x+1\uFF09\uFF0C\u7136\u540E\u518D\u53D1\u9001\u4E00\u4E2A\u540C\u6B65\u62A5\u6587\uFF08SYN=1,seq=y\uFF09

Question: \u4E3A\u4EC0\u4E48\u6700\u540E\u8FD8\u8981\u53D1\u9001\u4E00\u6B21\u786E\u8BA4\uFF1F
Answer\uFF1A\u9632\u6B62\u5DF2\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\uFF08\u5728\u7F51\u7EDC\u4E2D\u6EDE\u7559\u65F6\u95F4\u8FC7\u957F\u800C\u88ABA\u8BA4\u4E3A\u5931\u6548\u7684\u8FDE\u63A5\uFF0CB\u4E0D\u8BA4\u4E3A\u662F\u5931\u6548\u7684\uFF09\u7A81\u7136\u4F20\u9001\u5230B\uFF0C\u56E0\u800C\u4EA7\u751F\u9519\u8BEF\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="tcp-\u7684\u8FDE\u63A5\u91CA\u653E" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u8FDE\u63A5\u91CA\u653E" aria-hidden="true">#</a> TCP \u7684\u8FDE\u63A5\u91CA\u653E</h4><p>\u56DB\u6B21\u6325\u624B\u6D41\u7A0B\uFF1A</p><ul><li>A -&gt; B. FIN=1,seq=u</li><li>B -&gt; A. ACK=1,ack=u+1,seq=v</li><li>B -&gt; A. FIN=1,seq=w,ACK=1,ack=u+1</li><li>A -&gt; B. ACK=1,ack=w+1,seq=u+1</li></ul><h4 id="tcp-\u7684\u6709\u9650\u72B6\u6001\u673A" tabindex="-1"><a class="header-anchor" href="#tcp-\u7684\u6709\u9650\u72B6\u6001\u673A" aria-hidden="true">#</a> TCP \u7684\u6709\u9650\u72B6\u6001\u673A</h4><p>TCP \u7684\u72B6\u6001\u5171\u6D89\u53CA\u5230 11 \u4E2A\u72B6\u6001\u7684\u4E92\u76F8\u8F6C\u6362 \u200B\u3002\u200B</p><hr><div style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)}><br><span>\u5FAE\u4FE1\u516C\u4F17\u53F7</span></p></div><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/network/4-transport-layer.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var _4TransportLayer_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$b]]);
var _4TransportLayer_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _4TransportLayer_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTc0MzIxOA==&amp;mid=2247483678&amp;idx=1&amp;sn=a0725d3e5d8a5ca4e968a1a6d05ca87f&amp;chksm=ce992e03f9eea7150e2f8eccf2dd449be68b67ad7532795d91aafeeadc07f50b86e02425892b&amp;token=2017381279&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">\u9996\u5148\u53D1\u5E03\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><hr><h1 id="\u5E94\u7528\u5C42" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u5C42" aria-hidden="true">#</a> \u5E94\u7528\u5C42</h1><p>\u6BCF\u4E00\u79CD<code>\u5E94\u7528\u5C42\u534F\u8BAE</code>\uFF0C\u90FD\u662F\u4E3A\u4E86<code>\u89E3\u51B3\u67D0\u4E00\u7C7B\u95EE\u9898</code>\uFF0C\u800C\u95EE\u9898\u7684\u89E3\u51B3\u5FC5\u987B\u901A\u8FC7\u4F4D\u4E8E<code>\u4E0D\u540C\u4E3B\u673A</code>\u4E2D\u7684<code>\u591A\u4E2A\u5E94\u7528\u8FDB\u7A0B</code>\u4E4B\u95F4\u7684\u901A\u4FE1\u548C\u534F\u540C\u5DE5\u4F5C\u6765\u5B8C\u6210\u3002</p><p>\u5E94\u7528\u5C42\u534F\u8BAE\u5E94\u5F53\u5B9A\u4E49\uFF1A</p><ul><li>\u5E94\u7528\u8FDB\u7A0B\u4EA4\u6362\u7684<code>\u62A5\u6587\u7C7B\u578B</code>\uFF0C\u5982\u8BF7\u6C42\u62A5\u6587\u548C\u54CD\u5E94\u62A5\u6587\u3002</li><li>\u5404\u79CD\u62A5\u6587\u7C7B\u578B\u7684\u8BED\u6CD5\uFF0C\u5982\u62A5\u6587\u4E2D\u5404\u4E2A\u5B57\u6BB5\u7684\u542B\u4E49\u53CA\u5176\u8BE6\u7EC6\u63CF\u8FF0\u3002</li><li>\u5B57\u6BB5\u7684\u8BED\u610F\uFF0C\u5373\u5305\u542B\u5728\u5B57\u6BB5\u4E2D\u7684\u4FE1\u606F\u7684\u542B\u4E49\u3002</li><li>\u8FDB\u7A0B\u4F55\u65F6\u3001\u5982\u4F55\u53D1\u9001\u62A5\u6587\uFF0C\u4EE5\u53CA\u5BF9\u62A5\u6587\u8FDB\u884C\u54CD\u5E94\u7684\u89C4\u5219\u3002</li></ul><h2 id="\u57DF\u540D\u7CFB\u7EDF-dns-domain-name-systen" tabindex="-1"><a class="header-anchor" href="#\u57DF\u540D\u7CFB\u7EDF-dns-domain-name-systen" aria-hidden="true">#</a> \u57DF\u540D\u7CFB\u7EDF DNS\uFF08Domain Name Systen\uFF09</h2><p>DNS \u7684\u4F5C\u7528\uFF1A\u5C06\u4E92\u8054\u7F51\u4E0A\u7684\u4E3B\u673A\u540D\u5B57\u8F6C\u6362\u4E3A IP \u5730\u5740\uFF0C\u57DF\u540D\u5230 IP \u5730\u5740\u7684\u89E3\u6790\uFF0C\u7531\u5206\u5E03\u5728\u4E92\u8054\u7F51\u4E0A\u8BB8\u591A\u57DF\u540D\u670D\u52A1\u7A0B\u5E8F\uFF08\u5373\u57DF\u540D\u670D\u52A1\u5668\uFF09\u5171\u540C\u5B8C\u6210\u7684\u3002</p><blockquote><p>\u4E92\u8054\u7F51\u7684\u57DF\u540D\u7CFB\u7EDF DNS \u88AB\u8BBE\u8BA1\u4E3A\u6210\u4E3A\u4E00\u4E2A\u8054\u673A\u5206\u5E03\u5F0F\u6570\u636E\u5E93\uFF0C\u5E76\u91C7\u7528\u5BA2\u6237\u670D\u52A1\u5668\u65B9\u5F0F\u3002</p></blockquote><h3 id="\u4E92\u8054\u7F51\u7684\u57DF\u540D\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u7684\u57DF\u540D\u7ED3\u6784" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u7684\u57DF\u540D\u7ED3\u6784</h3><p>\u793A\u4F8B\uFF1Amail.cctv.com ---&gt; \u4E09\u7EA7\u57DF\u540D.\u4E8C\u7EA7\u57DF\u540D.\u9876\u7EA7\u57DF\u540D</p><p>\u9876\u7EA7\u57DF\u540D\u7684\u5206\u7C7B\uFF1A</p><ul><li>\u56FD\u5BB6\u9876\u7EA7\u57DF\u540D nTLD\u3002eg\uFF1A <ul><li>cn \u4E2D\u56FD</li><li>us \u7F8E\u56FD</li><li>uk \u82F1\u56FD</li></ul></li><li>\u901A\u7528\u9876\u7EA7\u57DF\u540D gTLD\u3002eg\uFF1A <ul><li>com \u516C\u53F8\u4F01\u4E1A</li><li>net \u7F51\u7EDC\u670D\u52A1\u673A\u6784</li><li>org \u975E\u8425\u5229\u6027\u7EC4\u7EC7</li><li>int \u56FD\u9645\u7EC4\u7EC7</li><li>edu \u6559\u80B2\u673A\u6784</li><li>gov \u653F\u5E9C\u90E8\u95E8</li><li>mil \u519B\u4E8B\u90E8\u95E8</li></ul></li><li>\u57FA\u7840\u7ED3\u6784\u57DF\u540D\u3002\u4EC5\u6709\u4E00\u4E2A\uFF1A <ul><li>arpa \u7528\u4E8E\u53CD\u5411\u57DF\u540D\u89E3\u6790</li></ul></li></ul><h3 id="\u57DF\u540D\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u57DF\u540D\u670D\u52A1\u5668" aria-hidden="true">#</a> \u57DF\u540D\u670D\u52A1\u5668</h3><p>\u57DF\u540D\u670D\u52A1\u5668\u7684\u56DB\u79CD\u7C7B\u578B\uFF1A</p><ul><li>\u6839\u57DF\u540D\u670D\u52A1\u5668\uFF08root name server\uFF09 <ul><li>\u6240\u6709\u7684<code>\u6839\u57DF\u540D\u670D\u52A1\u5668</code>\uFF0C\u90FD\u77E5\u9053\u6240\u6709\u7684<code>\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668</code>\u7684<code>\u57DF\u540D</code>\u548C<code>IP</code>\u3002</li><li>\u6240\u6709\u7684<code>\u6839\u57DF\u540D\u670D\u52A1\u5668</code>\uFF0C\u5171\u540C\u4F7F\u7528 13 \u4E2A IP \u5730\u5740\u3002</li><li>\u4E92\u8054\u7F51\u4E2D\u6709 <code>13 \u5957\u88C5\u7F6E</code>\uFF0C\u6784\u6210\u4E86 <code>13 \u7EC4</code>\u6839\u57DF\u540D\u670D\u52A1\u5668\u3002</li></ul></li><li>\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\uFF08\u5373 TLD \u670D\u52A1\u5668\uFF09 <ul><li>\u8D1F\u8D23\u5728\u7BA1\u7406\u5728\u8BE5<code>\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668</code>\u6CE8\u518C\u7684\u6240\u6709<code>\u4E8C\u7EA7\u57DF\u540D</code>\u3002</li></ul></li><li>\u6743\u9650\u57DF\u540D\u670D\u52A1\u5668 <ul><li>\u4E00\u4E2A\u670D\u52A1\u5668\u6240\u8D1F\u8D23\u7BA1\u8F96\u7684\uFF08\u6216\u6709\u6743\u9650\u7684\uFF09\u8303\u56F4\u53EB<code>\u533A</code>\u3002</li><li>\u6BCF\u4E00\u4E2A\u533A\u8BBE\u7F6E\u76F8\u5E94\u7684<code>\u6743\u9650\u57DF\u540D\u670D\u52A1\u5668</code>\uFF0C\u7528\u6765\u4FDD\u5B58\u8BE5\u533A\u4E2D\u7684\u6240\u6709\u4E3B\u673A\u7684\u57DF\u540D\u5230 IP \u5730\u5740\u7684\u6620\u5C04\u3002</li></ul></li><li>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\uFF08local name server\uFF09 <ul><li>\u6BCF\u4E00\u4E2A\u4E92\u8054\u7F51\u670D\u52A1\u63D0\u4F9B\u8005 ISP\uFF0C\u6216\u4E00\u4E2A\u5927\u5B66\uFF0C\u751A\u81F3\u5927\u5B66\u7684\u4E00\u4E2A\u7CFB\uFF0C\u90FD\u53EF\u4EE5\u62E5\u6709\u4E00\u4E2A<code>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668</code>\u3002</li></ul></li></ul><p>\u57DF\u540D\u7684\u89E3\u6790\u8FC7\u7A0B\uFF1A</p><ul><li><code>\u4E3B\u673A</code>\u5411<code>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668</code>\u7684\u67E5\u8BE2\uFF0C\u4E00\u822C\u91C7\u7528<code>\u9012\u5F52\u67E5\u8BE2\uFF08recursive query\uFF09</code>\u3002</li><li><code>\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668</code>\u5411<code>\u6839\u57DF\u540D\u670D\u52A1\u5668</code>\u7684\u67E5\u8BE2\uFF0C\u901A\u5E38\u91C7\u7528<code>\u8FED\u4EE3\u67E5\u8BE2\uFF08iterative query\uFF09</code>\u3002 <ul><li>\u4E5F\u53EF\u4EE5\u91C7\u7528<code>\u9012\u5F52\u67E5\u8BE2</code>\uFF0C\u7531\u8BF7\u6C42\u62A5\u6587\u7684\u8BBE\u7F6E\u51B3\u5B9A\u3002</li></ul></li></ul><p>DNS \u67E5\u8BE2\u4F18\u5316\uFF1A</p><p>\u4E3A\u4E86\u51CF\u8F7B\u6839\u57DF\u540D\u670D\u52A1\u5668\u7684\u8D1F\u8377\u548C\u51CF\u5C11\u4E92\u8054\u7F51\u4E0A\u7684 DNS \u67E5\u8BE2\u62A5\u6587\u6570\u91CF\uFF0C\u57DF\u540D\u670D\u52A1\u5668\u4E2D\u5E7F\u6CDB\u4F7F\u7528<code>\u9AD8\u901F\u7F13\u5B58</code>(\u4E5F\u79F0\u4E3A<code>\u9AD8\u901F\u7F13\u5B58\u57DF\u540D\u670D\u52A1\u5668</code>)\uFF0C\u5B58\u653E\u6700\u8FD1\u67E5\u8BE2\u8FC7\u7684\u57DF\u540D\u4EE5\u53CA\u4ECE\u4F55\u5904\u83B7\u5F97\u57DF\u540D\u6620\u5C04\u4FE1\u606F\u7684\u8BB0\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># linux\u73AF\u5883\u4E0B\uFF0C\u4F7F\u7528host\u547D\u4EE4\u89E3\u6790\u57DF\u540D\u7684IP</span>

<span class="token operator">&gt;</span> <span class="token function">host</span> baidu.com

baidu.com has address <span class="token number">220.181</span>.38.148
baidu.com has address <span class="token number">220.181</span>.38.251
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u6587\u4EF6\u4F20\u9001\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4F20\u9001\u534F\u8BAE" aria-hidden="true">#</a> \u6587\u4EF6\u4F20\u9001\u534F\u8BAE</h2><p>\u5C5E\u4E8E\u6587\u4EF6\u5171\u4EAB\u534F\u8BAE\u7684\u6709\uFF1A</p><ul><li>\u6587\u4EF6\u4F20\u9001\u534F\u8BAE FTP\uFF08File Transfer Protocol\uFF09\uFF0C\u57FA\u4E8E TCP \u534F\u8BAE\uFF1B\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE TFTP\uFF0C\u57FA\u4E8E UDP \u534F\u8BAE\u3002</li><li>\u8054\u673A\u8BBF\u95EE\uFF08on-line access\uFF09\u3002 <ul><li>\u5141\u8BB8<code>\u591A\u4E2A\u7A0B\u5E8F</code>\u540C\u65F6\u5BF9<code>\u540C\u4E00\u4E2A\u6587\u4EF6</code>\u8FDB\u884C\u5B58\u53D6\u3002</li><li>\u7531<code>\u64CD\u4F5C\u7CFB\u7EDF</code>\u63D0\u4F9B\u5BF9<code>\u8FDC\u5730\u5171\u4EAB\u6587\u4EF6</code>\u8FDB\u884C\u8BBF\u95EE\u670D\u52A1\uFF0C\u5C31\u5982\u540C\u5BF9\u672C\u5730\u6587\u4EF6\u7684\u8BBF\u95EE\u4E00\u6837\u3002</li><li>\u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u6587\u4EF6\uFF0C\u63D0\u4F9B<code>\u900F\u660E\u5B58\u53D6</code>\uFF0C\u5373\u5C06\u539F\u6765\u7528\u4E8E\u5904\u7406\u672C\u5730\u6587\u4EF6\u7684\u5E94\u7528\u7A0B\u5E8F\u7528\u6765\u5904\u7406\u672C\u5730\u6587\u4EF6\u65F6\uFF0C\u4E0D\u9700\u8981\u5BF9\u7A0B\u5E8F\u505A\u660E\u663E\u7684\u6539\u52A8\u3002</li></ul></li><li>\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF NFS\uFF08Network File System\uFF09 <ul><li>\u53EF\u4F7F\u672C\u5730\u8BA1\u7B97\u673A\u5171\u4EAB<code>\u8FDC\u5730\u7684\u8D44\u6E90</code>\uFF0C\u5C31\u50CF\u8FD9\u4E9B\u8D44\u6E90\u5728\u672C\u5730\u4E00\u6837\u3002</li></ul></li></ul><h3 id="ftp-\u7684\u57FA\u672C\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#ftp-\u7684\u57FA\u672C\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> FTP \u7684\u57FA\u672C\u5DE5\u4F5C\u539F\u7406</h3><p>FTP \u91C7\u7528\u5BA2\u6237\u7AEF/\u670D\u52A1\u7AEF\u6A21\u5F0F\uFF0C\u4F7F\u7528 TCP\u3002</p><p>FTP \u670D\u52A1\u7AEF\u7684\u7279\u70B9\uFF1A</p><ul><li>\u4E00\u4E2A\u4E3B\u8FDB\u7A0B\uFF0C\u7528\u4E0E\u63A5\u53D7\u65B0\u7684\u8BF7\u6C42\u3002</li><li>\u82E5\u5E72\u4E2A\u4ECE\u5C5E\u8FDB\u7A0B\uFF0C\u8D1F\u8D23\u5904\u7406\u5355\u4E2A\u8BF7\u6C42\u3002 <ul><li>\u63A7\u5236\u8FDB\u7A0B</li><li>\u6570\u636E\u4F20\u9001\u8FDB\u7A0B</li></ul></li></ul><p>\u8FDB\u884C\u6587\u4EF6\u4F20\u8F93\u65F6\uFF0CFTP \u7684\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\u8981\u5EFA\u7ACB\u4E24\u4E2A\u5E76\u884C\u7684 TCP \u8FDE\u63A5\uFF1A</p><ul><li><code>\u63A7\u5236\u8FDE\u63A5</code>\u7279\u70B9\uFF1A <ul><li>\u6574\u4E2A\u4F1A\u8BDD\u671F\u95F4\uFF0C\u4E00\u76F4\u4FDD\u6301\u6253\u5F00</li><li>\u5BA2\u6237\u7AEF\u53D1\u51FA\u7684<code>\u4F20\u9001\u8BF7\u6C42</code>\uFF0C\u901A\u8FC7<code>\u63A7\u5236\u8FDE\u63A5</code>\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u7AEF\u7684<code>\u63A7\u5236\u8FDB\u7A0B</code></li></ul></li><li><code>\u6570\u636E\u8FDE\u63A5</code>\u7279\u70B9\uFF1A <ul><li>\u7528\u4E8E<code>\u4F20\u8F93\u6587\u4EF6</code></li></ul></li></ul><h3 id="\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE-tftp-trivial-file-transfer-protocol" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE-tftp-trivial-file-transfer-protocol" aria-hidden="true">#</a> \u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE TFTP\uFF08Trivial File Transfer Protocol\uFF09</h3><p>\u4F7F\u7528 UDP\uFF0C\u53EA\u652F\u6301\u6587\u4EF6\u4F20\u9001\uFF0C\u4E0D\u652F\u6301\u4EA4\u4E92\u3002\u4F18\u70B9\uFF1A</p><ul><li>\u53EF\u7528\u4E8E UDP \u73AF\u5883</li><li>TFTP \u4EE3\u7801\u5360\u7528\u5185\u5B58\u5C0F</li></ul><h3 id="\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF-nfs" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF-nfs" aria-hidden="true">#</a> \u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF NFS</h3><p>NFS \u5141\u8BB8\u5E94\u7528\u8FDB\u7A0B\u6253\u5F00\u4E00\u4E2A\u8FDB\u7A0B\u6587\u4EF6\uFF0C\u5E76\u80FD\u5728\u8BE5\u6587\u4EF6\u7684\u67D0\u4E00\u7279\u5B9A\u7684\u4F4D\u7F6E\u4E0A\u5F00\u59CB\u8BFB\u5199\u6570\u636E\u3002\u7B80\u5355\u7684\u8BF4\uFF0C\u5C31\u662F\u50CF\u8BFB\u5199\u672C\u5730\u6587\u4EF6\u4E00\u6837\u8BFB\u5199\u8FDC\u5730\u6587\u4EF6\u3002</p><p>\u5B9E\u6218\u8BAD\u7EC3\uFF0C<a href="https://cloud.tencent.com/developer/article/1721166" target="_blank" rel="noopener noreferrer">CentOS 7 \u4E2D\u642D\u5EFA NFS \u6587\u4EF6\u5171\u4EAB\u5B58\u50A8\u670D\u52A1\u7684\u5B8C\u6574\u6B65\u9AA4`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u3002</p><p>NFS \u53EF\u80FD\u7684\u4F7F\u7528\u573A\u666F\uFF1A</p><ul><li>vscode \u4E0A\u6709\u4E00\u6B3E ssh \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u7F16\u8F91\u8FDC\u7A0B\u6587\u4EF6</li><li>\u4E91\u6587\u4EF6\u5B58\u50A8</li></ul><blockquote><p>Question: rpcbind \u670D\u52A1\u7684\u4F5C\u7528\uFF1F</p></blockquote><h2 id="\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE-telnet" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE-telnet" aria-hidden="true">#</a> \u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE TELNET</h2><p>\u4F5C\u7528\uFF1A</p><ul><li>\u901A\u8FC7 TELNET \u5C31\u53EF\u5728\u5176\u6240\u5728\u5730\u901A\u8FC7 TCP \u8FDE\u63A5\u6CE8\u518C\uFF08\u767B\u5F55\uFF09\u5230\u8FDC\u5730\u7684\u53E6\u4E00\u53F0\u4E3B\u673A\u4E0A\u3002</li><li>\u80FD\u5C06\u51FB\u952E\u4F20\u5230\u8FDC\u5730\u4E3B\u673A\uFF0C\u540C\u65F6\u4E5F\u80FD\u8FDC\u5730\u4E3B\u673A\u7684\u8F93\u51FA\u901A\u8FC7 TCP \u8FDE\u63A5\u8FD4\u56DE\u5230\u7528\u6237\u5C4F\u5E55\u3002</li></ul><p>\u7279\u70B9\uFF1A</p><ul><li>\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE\u3002</li><li>\u4F7F\u7528 TCP\u3002</li><li>\u4F7F\u7528\u5BA2\u6237\u670D\u52A1\u5668\u65B9\u5F0F\u3002\u672C\u5730\u8FD0\u884C TELNET \u5BA2\u6237\u7AEF\u8FDB\u7A0B\uFF0C\u8FDC\u5730\u670D\u52A1\u5668\u8FD0\u884C TELNET \u670D\u52A1\u5668\u8FDB\u7A0B\u3002</li><li>\u7C7B\u4F3C FTP\uFF0C\u670D\u52A1\u5668\u4E2D\u7684\u4E3B\u8FDB\u7A0B\u7B49\u5F85\u65B0\u7684\u8BF7\u6C42\uFF0C\u5E76\u4EA7\u751F\u4ECE\u5C5E\u8FDB\u7A0B\u6765\u5904\u7406\u6BCF\u4E00\u8FDE\u63A5\u3002</li><li>\u4E5F\u88AB\u79F0\u4E3A\u7EC8\u7AEF\u4EFF\u771F\u534F\u8BAE\u3002</li></ul><p><strong>\u7F51\u7EDC\u865A\u62DF\u7EC8\u7AEF NVT\uFF08Network Virtual Terminal\uFF09</strong></p><p>TELNET \u80FD\u9002\u5E94\u8BB8\u591A<code>\u8BA1\u7B97\u673A</code>\u548C<code>\u64CD\u4F5C\u7CFB\u7EDF</code>\u7684<code>\u5DEE\u5F02</code>\uFF0C\u5B83\u5B9A\u4E49\u4E86<code>\u6570\u636E\u548C\u547D\u4EE4</code>\u5E94\u600E\u6837\u901A\u8FC7<code>\u4E92\u8054\u7F51</code>\uFF0C\u8FD9\u4E9B\u5B9A\u4E49\u5C31\u662F\u6240\u8C13\u7684<code>\u7F51\u7EDC\u865A\u62DF\u7EC8\u7AEF NVT\uFF08Network Virtual Terminal\uFF09</code></p><p>TELNET \u5DE5\u4F5C\u6D41\u7A0B\uFF1A</p><ol><li>\u5BA2\u6237\u7AEF\u628A\u7528\u6237\u7684\u51FB\u952E\u3001\u547D\u4EE4\u8F6C\u5316\u4E3A<code>NVT\u683C\u5F0F</code>\uFF0C\u5E76\u9012\u4EA4\u7ED9\u670D\u52A1\u7AEF\u3002</li><li>\u670D\u52A1\u7AEF\u5C06\u6536\u5230\u7684<code>NVT\u683C\u5F0F</code>\uFF0C<code>\u8F6C\u5316</code>\u4E3A\u8FDC\u5730\u670D\u52A1\u5668\u6240\u9700\u7684\u683C\u5F0F\u3002</li><li>\u5411\u7528\u6237\u8FD4\u56DE\u6570\u636E\u65F6\uFF0C<code>\u670D\u52A1\u7AEF</code>\u5C06<code>\u8FDC\u5730\u670D\u52A1\u5668\u7684\u683C\u5F0F</code>\u8F6C\u5316\u4E3A <code>NVT \u683C\u5F0F</code>\uFF0C\u8FD4\u56DE\u5230\u5BA2\u6237\u7AEF\u3002</li><li>\u5BA2\u6237\u7AEF\u518D\u5C06 <code>NVT \u683C\u5F0F</code>\uFF0C\u8F6C\u5316\u4E3A<code>\u672C\u5730\u7CFB\u7EDF\u6240\u9700\u7684\u683C\u5F0F</code>\u3002</li></ol><h2 id="\u4E07\u7EF4\u7F51-www-world-wide-web" tabindex="-1"><a class="header-anchor" href="#\u4E07\u7EF4\u7F51-www-world-wide-web" aria-hidden="true">#</a> \u4E07\u7EF4\u7F51 WWW\uFF08World Wide Web\uFF09</h2><p><code>\u4E07\u7EF4\u7F51\u662F\u4E00\u4E2A\u5927\u89C4\u6A21\u7684\u3001\u8054\u673A\u5F0F\u7684\u4FE1\u606F\u50A8\u5B58\u6240\uFF0C\u82F1\u6587\u7B80\u79F0 Web</code>\u3002</p><p><code>\u4E07\u7EF4\u7F51</code>\u4EE5<code>\u5BA2\u6237\u670D\u52A1\u5668\u65B9\u5F0F</code>\u5DE5\u4F5C\uFF0C<code>\u5BA2\u6237\u7A0B\u5E8F</code>\uFF08eg\uFF1A<code>\u6D4F\u89C8\u5668</code>\uFF09\u5411<code>\u670D\u52A1\u7AEF\u7A0B\u5E8F</code>\uFF08<code>\u4E07\u7EF4\u7F51\u670D\u52A1\u5668</code>\uFF09\u53D1\u51FA\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u7A0B\u5E8F\u5411\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u9001\u56DE\u5BA2\u6237\u6240\u8981\u7684<code>\u4E07\u7EF4\u7F51\u6587\u6863</code>\u3002</p><p><strong>\u4E07\u7EF4\u7F51\u9700\u8981\u89E3\u51B3\u7684\u95EE\u9898\uFF1A</strong></p><ol><li>\u5982\u4F55\u552F\u4E00\u6807\u5FD7\u5206\u5E03\u5728\u6574\u4E2A\u4E92\u8054\u7F51\u4E0A\u7684\u6BCF\u4E00\u4E2A\u6587\u6863\uFF1F<code>\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26URL\uFF08Uniform Resource Locator\uFF09</code></li><li>\u7528\u4EC0\u4E48\u534F\u8BAE\u5B9E\u73B0\u4E07\u7EF4\u7F51\u4E0A\u7684\u5404\u79CD\u8FDE\u63A5\uFF1F<code>\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAEHTTP\uFF08HyperText Transfer Protocol\uFF09</code></li><li>\u600E\u4E48\u5C55\u793A\u4E0D\u540C\u98CE\u683C\u7684\u4E07\u7EF4\u7F51\u6587\u6863\uFF1F<code>\u8D85\u6587\u672C\u6807\u8BB0\u8BED\u8A00HTML\uFF08HyperText Markup Language\uFF09</code></li></ol><h3 id="\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26-url-uniform-resource-locator" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26-url-uniform-resource-locator" aria-hidden="true">#</a> \u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26 URL\uFF08Uniform Resource Locator\uFF09</h3><p>URL \u7684\u4E00\u822C\u683C\u5F0F\uFF1A</p><blockquote><p>&lt;\u534F\u8BAE&gt;://&lt;\u4E3B\u673A&gt;:&lt;\u7AEF\u53E3&gt;/&lt;\u8DEF\u5F84&gt;</p></blockquote><h3 id="\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE-http-hypertext-transfer-protocol" tabindex="-1"><a class="header-anchor" href="#\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE-http-hypertext-transfer-protocol" aria-hidden="true">#</a> \u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE HTTP\uFF08HyperText Transfer Protocol\uFF09</h3><p>HTTP \u5B9A\u4E49\u4E86\u6D4F\u89C8\u5668\uFF08\u5373\u4E07\u7EF4\u7F51\u5BA2\u6237\u7AEF\u8FDB\u7A0B\uFF09\u5982\u4F55\u5411\u4E07\u7EF4\u7F51\u8BF7\u6C42\u4E07\u7EF4\u7F51\u6587\u6863\uFF0C\u4EE5\u53CA\u670D\u52A1\u5668\u600E\u6837\u628A\u6587\u6863\u4F20\u7ED9\u6D4F\u89C8\u5668\u3002HTTP \u534F\u8BAE\u662F\u9762\u5411\u4E8B\u7269\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u3002</p><blockquote><p>\u4E8B\u52A1\uFF1A\u6307\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u4EA4\u6362\uFF0C\u800C\u8FD9\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u4EA4\u6362\u662F\u4E00\u4E2A\u4E0D\u53EF\u5206\u5272\u7684\u6574\u4F53\u3002\u5373\u8981\u4E48\u6240\u6709\u4FE1\u606F\u4EA4\u6362\u90FD\u5B8C\u6210\uFF0C\u8981\u4E48\u4E00\u6B21\u4EA4\u6362\u90FD\u4E0D\u8FDB\u884C\u3002</p></blockquote><p>HTTP \u534F\u8BAE\u7684\u7279\u70B9\uFF1A</p><ul><li>\u4F7F\u7528\u4E86<code>\u9762\u5411\u8FDE\u63A5</code>\u7684 <code>TCP \u534F\u8BAE</code>\u4F5C\u4E3A\u8FD0\u8F93\u5C42\u534F\u8BAE\uFF0C\u4FDD\u8BC1\u4E86\u6570\u636E\u7684<code>\u53EF\u9760\u4F20\u8F93</code>\u3002</li><li>HTTP \u534F\u8BAE\u4E0D\u8003\u8651\u5728\u6570\u636E\u4F20\u8F93\u8FC7\u7A0B\u4E2D\uFF0C\u88AB\u4E22\u5F03\u540E\u53C8\u600E\u4E48\u88AB\u4F20\u91CD\u3002</li><li>HTTP \u534F\u8BAE\u672C\u8EAB\u662F<code>\u65E0\u8FDE\u63A5\u7684</code>\uFF0C\u5373<code>\u901A\u4FE1\u7684\u53CC\u65B9</code>\u5728\u4EA4\u6362 HTTP \u62A5\u6587\u4E4B\u524D<code>\u4E0D\u9700\u8981\u5148\u5EFA\u7ACB HTTP \u8FDE\u63A5</code>\u3002</li><li>HTTP \u534F\u8BAE\u662F<code>\u65E0\u72B6\u6001\u7684</code>\u3002\u5373\u540C\u4E00\u5BA2\u6237\uFF0C\u7B2C\u4E8C\u6B21\u8BBF\u95EE\u540C\u4E00\u4E2A\u670D\u52A1\u5668\u4E0A\u7684\u9875\u9762\u65F6\uFF0C\u670D\u52A1\u5668\u7684\u76F8\u5E94\u4E0E\u7B2C\u4E00\u6B21\u76F8\u540C\u3002</li></ul><h4 id="\u8BF7\u6C42\u4E00\u4E2A\u4E07\u7EF4\u7F51\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u4E00\u4E2A\u4E07\u7EF4\u7F51\u6587\u6863" aria-hidden="true">#</a> \u8BF7\u6C42\u4E00\u4E2A\u4E07\u7EF4\u7F51\u6587\u6863</h4><p>\u6D41\u7A0B\uFF1A</p><ol><li>\u4F7F\u7528\u4E09\u6B21\u63E1\u624B\u5EFA\u7ACB\u8FDE\u63A5\u3002</li><li>\u4E09\u6B21\u63E1\u624B\u7684<code>\u524D\u4E24\u90E8\u5206\u5B8C\u6210\u540E</code>\uFF0C\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u62A5\u6587\uFF0C\u4F5C\u4E3A\u5EFA\u7ACB\u8FDE\u63A5\u7684\u4E09\u63E1\u624B\u4E2D\u7684<code>\u7B2C\u4E09\u4E2A\u62A5\u6587</code>\uFF0C\u53D1\u9001\u5230\u4E07\u7EF4\u7F51\u670D\u52A1\u5668\u3002</li><li>\u670D\u52A1\u5668\u6536\u5230 HTTP \u8BF7\u6C42\u62A5\u6587\u540E\uFF0C\u5C06\u6240\u8BF7\u6C42\u7684\u6587\u6863\u4F5C\u4E3A\u54CD\u5E94\u62A5\u6587\u8FD4\u56DE<code>\u5BA2\u6237\u7AEF</code>\u3002</li></ol><p>\u8017\u65F6 = {\u4E24\u500D\u5F80\u8FD4 RTT} + {\u6587\u6863\u4F20\u8F93\u65F6\u95F4}</p><blockquote><p>RTT(Round trip time)\uFF0C\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\u7684\u7F51\u7EDC\u8BF7\u6C42\u4ECE\u8D77\u70B9\u5230\u76EE\u7684\u5730\u5E76\u518D\u6B21\u8FD4\u56DE\u5230\u8D77\u70B9\u6240\u9700\u7684\u6301\u7EED\u65F6\u95F4\u3002</p></blockquote><p>HTTP/1.0 \u7F3A\u70B9\uFF1A</p><ol><li>\u6BCF\u8BF7\u6C42\u4E00\u4E2A\u6587\u6863\u7684<code>\u4E24\u500D RTT \u5F00\u9500</code>\u3002</li><li>\u670D\u52A1\u5668\u6BCF\u4E00\u6B21\u5EFA\u7ACB TCP \u8FDE\u63A5\u90FD\u8981<code>\u5206\u914D\u7F13\u5B58\u548C\u53D8\u91CF</code>\u3002</li></ol><p>HTTP/1.1 \u4F18\u70B9\uFF1A\u91C7\u7528<code>\u6301\u7EED\u8FDE\u63A5</code>\u3002\u5373\u4E07\u7EF4\u7F51\u670D\u52A1\u5668\u5728\u53D1\u9001\u54CD\u5E94\u62A5\u6587\u540E\uFF0C\u4ECD\u7136\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u4FDD\u6301\u8FD9\u4E2A\u8FDE\u63A5\u3002\u6301\u7EED\u8FDE\u63A5\u7684\u6709\u4E24\u79CD\u5DE5\u4F5C\u6A21\u5F0F\uFF1A</p><ul><li>\u975E\u6D41\u6C34\u7EBF\u65B9\u5F0F <ul><li>\u7279\u70B9\u662F\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u524D\u4E00\u4E2A\u54CD\u5E94\u540E\uFF0C\u624D\u80FD\u53D1\u9001\u4E0B\u4E00\u4E2A\u8BF7\u6C42\u3002</li><li>\u4F18\u70B9\uFF0C\u8282\u7701\u5EFA\u7ACB TCP \u8FDE\u63A5\u6240\u9700\u7684\u4E00\u4E2A RTT \u65F6\u95F4\uFF1B\u7F3A\u70B9\uFF0C\u670D\u52A1\u5668\u5728\u53D1\u9001\u5B8C\u54CD\u5E94\u62A5\u6587\u540E\uFF0C\u5176 TCP \u8FDE\u63A5\u5904\u4E8E\u7A7A\u95F2\u72B6\u6001\u3002</li></ul></li><li>\u6D41\u6C34\u7EBF\u65B9\u5F0F <ul><li>\u7279\u70B9\u662F\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230 HTTP \u54CD\u5E94\u62A5\u6587\u4E4B\u524D\uFF0C\u5C31\u80FD\u591F\u63A5\u7740\u53D1\u9001\u65B0\u7684\u8BF7\u6C42\u62A5\u6587\uFF0C\u670D\u52A1\u5668\u53EF\u8FDE\u7EED\u53D1\u56DE\u54CD\u5E94\u62A5\u6587\u3002</li></ul></li></ul><h4 id="\u4EE3\u7406\u670D\u52A1\u5668-proxy-server" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u670D\u52A1\u5668-proxy-server" aria-hidden="true">#</a> \u4EE3\u7406\u670D\u52A1\u5668\uFF08proxy server\uFF09</h4><p>\u4EE3\u7406\u670D\u52A1\u5668\u662F\u4E00\u79CD<code>\u7F51\u7EDC\u5B9E\u4F53</code>\uFF0C\u53C8\u88AB\u79F0\u4E3A<code>\u4E07\u7EF4\u7F51\u9AD8\u901F\u7F13\u5B58</code>\u3002\u4EE3\u7406\u670D\u52A1\u5668\u7684\u4F5C\u7528\uFF1A</p><ol><li>\u628A\u6700\u8FD1\u7684\u4E00\u4E9B<code>\u8BF7\u6C42</code>\u548C<code>\u54CD\u5E94</code>\u6682\u5B58\u5728<code>\u672C\u5730\u78C1\u76D8</code></li><li>\u5F53\u65B0\u8BF7\u6C42\u5230\u8FBE\u65F6 <ul><li>\u82E5\u8BF7\u6C42\u5185\u5BB9\u4E0E\u7F13\u5B58\u5339\u914D\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</li><li>\u5426\u5219\uFF0C<code>\u4F5C\u4E3A\u5BA2\u6237</code>\u53BB<code>\u4E92\u8054\u7F51</code>\u83B7\u53D6\u8D44\u6E90\uFF0C\u5B58\u50A8\u5728\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u518D\u8FD4\u56DE</li></ul></li></ol><h4 id="http-\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#http-\u62A5\u6587" aria-hidden="true">#</a> HTTP \u62A5\u6587</h4><p>HTTP \u62A5\u6587\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><ul><li>\u8BF7\u6C42\u62A5\u6587\uFF0C\u4ECE\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u8BF7\u6C42\u62A5\u6587\u3002</li><li>\u54CD\u5E94\u62A5\u6587\uFF0C\u4ECE\u670D\u52A1\u7AEF\u5230\u5BA2\u6237\u7684\u5E94\u7B54\u3002</li></ul><blockquote><p>HTTP \u662F\u9762\u5411\u6587\u672C\u7684</p></blockquote><p><code>\u8BF7\u6C42\u62A5\u6587</code>\u7684\u4E00\u4E9B\u65B9\u6CD5\uFF1A</p><ul><li>OPTION\u3002\u8BF7\u6C42\u4E00\u4E9B\u9009\u9879\u7684\u4FE1\u606F</li><li>HEAD\u3002\u8BF7\u6C42\u8BFB\u53D6\u7531 URL \u6240\u6807\u5FD7\u7684\u4FE1\u606F</li><li>TRACE\u3002\u7528\u4E8E\u8FDB\u884C\u56DE\u73AF\u6D4B\u8BD5\u7684\u8BF7\u6C42\u62A5\u6587</li><li>CONNECT\u3002\u7528\u4E8E\u4EE3\u7406\u670D\u52A1\u5668</li><li>Get</li><li>POST</li><li>DELETE</li><li>PUT</li></ul><p><code>\u54CD\u5E94\u62A5\u6587</code>\u7684\u72B6\u6001\u7801\uFF1A</p><ul><li>1xx \u8868\u793A\u901A\u77E5\u4FE1\u606F\uFF0C\u5982\u8BF7\u6C42\u6536\u5230\u4E86\u6D3B\u6B63\u5728\u5904\u7406</li><li>2xx \u8868\u793A\u6210\u529F\uFF0C\u5982\u63A5\u6536\u6216\u77E5\u9053\u4E86</li><li>3xx \u8868\u793A\u91CD\u5B9A\u5411\uFF0C</li><li>4xx \u8868\u793A\u5BA2\u6237\u7684\u5DEE\u9519</li><li>5xx \u8868\u793A\u670D\u52A1\u5668\u7684\u5DEE\u9519</li></ul><h4 id="\u5728\u670D\u52A1\u5668\u4E0A\u5B58\u653E\u5BA2\u6237\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5728\u670D\u52A1\u5668\u4E0A\u5B58\u653E\u5BA2\u6237\u7684\u4FE1\u606F" aria-hidden="true">#</a> \u5728\u670D\u52A1\u5668\u4E0A\u5B58\u653E\u5BA2\u6237\u7684\u4FE1\u606F</h4><p>HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Cookie</code> \u8BC6\u522B\u3001\u8FFD\u8E2A\u7528\u6237\u3002\u5F53\u7F51\u7AD9\u4F7F\u7528 Cookie \u65F6\uFF0C\u5DE5\u4F5C\u6D41\u7A0B\uFF1A</p><ol><li>\u670D\u52A1\u5668\u4E3A<code>\u7528\u6237A</code>\u4EA7\u751F\u4E00\u4E2A\u552F\u4E00\u7684\u8BC6\u522B\u7801\uFF0C\u5E76\u4EE5\u6B64\u4F5C\u4E3A\u7D22\u5F15\u5728\u670D\u52A1\u5668\u7684\u540E\u7AEF\u6570\u636E\u5E93\u4E2D\u4EA7\u751F\u4E00\u4E2A\u9879\u76EE\u3002</li><li>\u670D\u52A1\u5668\u7ED9\u7528\u6237 A \u7684\u54CD\u5E94\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u4E3A<code>Set-Cookie</code>\u7684\u9996\u90E8\u884C\u3002</li><li>\u7528\u6237 A \u6536\u5230\u5E26\u6709<code>Set-Cookie</code>\u9996\u90E8\u884C\u7684\u54CD\u5E94\u540E\uFF0C\u5176\u6D4F\u89C8\u5668\u5C31\u5728\u5B83\u7BA1\u7406\u7684\u7279\u5B9A <code>Cookie\u6587\u4EF6</code>\u4E2D\u6DFB\u52A0\u4E00\u884C\uFF0C\u8BB0\u5F55\u5305\u542B<code>\u670D\u52A1\u5668\u7684\u4E3B\u673A\u540D</code>\u548C <code>Set-Cookie \u4E2D\u7684\u8BC6\u522B\u7801</code>\u3002</li><li>\u4E4B\u540E\uFF0CA \u7684\u6240\u6709 HTTP \u8BF7\u6C42\uFF0C\u5176\u6D4F\u89C8\u5668\u90FD\u4F1A\u4ECE Cookie \u6587\u4EF6\u4E2D\u8BFB\u53D6\u8FD9\u4E2A\u7F51\u7AD9\u7684\u8BC6\u522B\u7801\uFF0C\u5E76\u653E\u5230 <code>HTTP \u8BF7\u6C42\u62A5\u6587</code>\u7684 <code>Cookie \u9996\u90E8</code>\u4E2D\u3002</li></ol><h3 id="\u4E07\u7EF4\u7F51\u7684\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u4E07\u7EF4\u7F51\u7684\u6587\u6863" aria-hidden="true">#</a> \u4E07\u7EF4\u7F51\u7684\u6587\u6863</h3><p>HTML \u4E0D\u662F\u5E94\u7528\u5C42\u7684\u534F\u8BAE\uFF0C\u662F\u4E07\u7EF4\u7F51\u6D4F\u89C8\u5668\u4F7F\u7528\u7684\u4E00\u79CD\u8BED\u8A00\u3002</p><p>\u4E07\u7EF4\u7F51\u7684\u6587\u6863\uFF0C\u5206\u4E3A\u4E24\u79CD\uFF1A</p><ul><li>\u9759\u6001\u6587\u6863</li><li>\u52A8\u6001\u6587\u6863</li></ul><p>\u8981\u5B9E\u73B0\u52A8\u6001\u6587\u6863\uFF0C\u9700\u8981\u5BF9\u5728<code>\u4E24\u4E2A\u65B9\u9762</code>\u5BF9<code>\u4E07\u7EF4\u7F51\u670D\u52A1\u5668\u7684\u529F\u80FD</code>\u8FDB\u884C<code>\u6269\u5145</code>\uFF1A</p><ol><li>\u5E94\u589E\u52A0\u4E00\u4E2A<code>\u5E94\u7528\u7A0B\u5E8F</code>\uFF08<code>CGI\u7A0B\u5E8F</code>\uFF09 <ol><li>\u7528\u6765\u5904\u7406\u6D4F\u89C8\u5668\u53D1\u6765\u7684\u6570\u636E</li><li>\u5E76\u52A8\u6001\u521B\u5EFA\u6587\u6863\u3002</li></ol></li><li>\u5E94\u589E\u52A0\u4E00\u4E2A<code>\u673A\u5236</code>\uFF08<code>\u901A\u7528\u7F51\u5173\u63A5\u53E3CGI</code>\uFF09 <ol><li>\u7528\u6765\u4F7F\u4E07\u7EF4\u7F51\u670D\u52A1\u5668\u5C06\u6D4F\u89C8\u5668\u53D1\u9001\u7684\u6570\u636E\u4F20\u9001\u7ED9\u8FD9\u4E2A\u5E94\u7528\u7A0B\u5E8F</li><li>\u4E07\u7EF4\u7F51\u670D\u52A1\u5668\u80FD\u7406\u89E3\u8FD9\u4E2A\u5E94\u7528\u670D\u52A1\u5668\u7684\u6570\u636E\uFF0C\u5E76\u5411\u6D4F\u89C8\u5668\u8FD4\u56DE HTML</li></ol></li></ol><p><code>\u901A\u7528\u7F51\u5173\u63A5\u53E3CGI(Common Gateway Interface)</code>\uFF0C\u662F\u4E00\u79CD\u6807\u51C6\uFF0C\u5B83\u5B9A\u4E49\u4E86\uFF1A</p><ol><li>\u52A8\u6001\u6587\u6863\u5E94\u5982\u4F55\u521B\u5EFA</li><li><code>\u6D4F\u89C8\u5668\u8F93\u5165\u7684\u6570\u636E</code>\u5E94\u5982\u4F55\u63D0\u4F9B\u7ED9<code>\u5E94\u7528\u7A0B\u5E8F</code>\uFF0C</li><li><code>\u5E94\u7528\u7A0B\u5E8F\u7684\u8F93\u51FA\u7ED3\u679C</code>\u5E94\u5982\u4F55<code>\u5E94\u7528</code>\u3002</li></ol><blockquote><p>\u5728\u770B\u5230 CGI \u8FD9\u4E2A\u540D\u8BCD\u65F6\uFF0C\u5E94\u5F04\u6E05\u662F\u6307 CGI \u6807\u51C6\uFF0C\u8FD8\u662F CGI \u7A0B\u5E8F\u3002</p></blockquote><p><code>CGI \u7A0B\u5E8F</code>\u7684\u6B63\u5F0F\u540D\u79F0\u4E3A <code>CGI \u811A\u672C</code>\uFF0C\u4E5F\u88AB\u79F0\u4E3A <code>cgi-bin \u811A\u672C</code>\u3002</p><h3 id="\u4E07\u7EF4\u7F51\u7684\u4FE1\u606F\u68C0\u7D22\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u4E07\u7EF4\u7F51\u7684\u4FE1\u606F\u68C0\u7D22\u7CFB\u7EDF" aria-hidden="true">#</a> \u4E07\u7EF4\u7F51\u7684\u4FE1\u606F\u68C0\u7D22\u7CFB\u7EDF</h3><p>\u641C\u7D22\u5F15\u64CE\u7684\u5206\u7C7B\uFF1A</p><ul><li>\u5168\u6587\u68C0\u7D22\u641C\u7D22\u5F15\u64CE <ul><li><a href="cn.bing.com">\u5FC5\u5E94</a></li><li><a href="www.baidu.com">\u767E\u5EA6</a></li><li><a href="www.google.com">\u8C37\u6B4C</a></li></ul></li><li>\u76EE\u5F55\u68C0\u7D22\u641C\u7D22\u5F15\u8D77 <ul><li><a href="www.yahoo.com">\u96C5\u864E</a></li><li><a href="cn.yahoo.com">\u96C5\u864E\u4E2D\u56FD</a></li><li><a href="sina.com.cn">\u65B0\u6D6A</a></li><li><a href="www.sohu.com">\u641C\u72D0</a></li><li><a href="www.163.com">\u7F51\u6613</a></li></ul></li><li>\u5782\u76F4\u641C\u7D22\u5F15\u64CE\uFF08Vertical Search Engine\uFF09\u3002\u9488\u5BF9<code>\u67D0\u4E00\u7279\u5B9A\u9886\u57DF</code>\u3001<code>\u7279\u5B9A\u4EBA\u7FA4</code>\u6216<code>\u67D0\u4E00\u7279\u5B9A\u9700\u6C42</code>\u63D0\u4F9B\u641C\u7D22\u670D\u52A1\u3002</li><li>\u5143\u641C\u7D22\u5F15\u64CE\uFF08Meta Search Engine\uFF09\u3002\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u641C\u7D22\u8BF7\u6C42\u53D1\u9001\u5230<code>\u591A\u4E2A\u72EC\u7ACB\u7684\u641C\u7D22\u5F15\u64CE</code>\u4E0A\u53BB\u641C\u7D22\uFF0C\u7136\u540E<code>\u6574\u5408\u68C0\u7D22\u7ED3\u679C</code>\uFF0C\u6309<code>\u7EDF\u4E00\u683C\u5F0F\u5C55\u793A</code>\u3002</li></ul><h2 id="\u7535\u5B50\u90AE\u4EF6-e-mail" tabindex="-1"><a class="header-anchor" href="#\u7535\u5B50\u90AE\u4EF6-e-mail" aria-hidden="true">#</a> \u7535\u5B50\u90AE\u4EF6\uFF08e-mail\uFF09</h2><p>\u7535\u5B50\u90AE\u4EF6\u7684\u4E24\u4E2A\u91CD\u8981\u6807\u51C6\uFF1A</p><ul><li>\u7B80\u5355\u90AE\u4EF6\u4F20\u9001\u534F\u8BAE SMTP\uFF08Simple Mail Transfer Protocol\uFF09</li><li>\u4E92\u8054\u7F51\u6587\u672C\u62A5\u6587\u683C\u5F0F</li></ul><p>\u7535\u5B50\u90AE\u4EF6\u4E09\u4E2A\u7EC4\u6210\u6784\u4EF6\uFF1A</p><ul><li>\u7528\u6237\u4EE3\u7406</li><li>\u90AE\u4EF6\u670D\u52A1\u5668</li><li>\u90AE\u4EF6\u53D1\u9001\u534F\u8BAE\uFF08\u5982 SMTP\uFF09\u548C\u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE\uFF08\u5982 POP3\uFF09</li></ul><blockquote><p>POP3 \u6307\u90AE\u5C40\u534F\u8BAE\uFF08Post Office Protocol\uFF09\u7684\u7248\u672C 3</p></blockquote><p><code>\u7528\u6237\u4EE3\u7406UA\uFF08User Agent\uFF09</code>\uFF0C\u4E5F\u79F0\u4E3A<code>\u7535\u5B50\u90AE\u4EF6\u5BA2\u6237\u7AEF\u8F6F\u4EF6</code>\uFF0C\u5C31\u662F\u7528\u6237\u4E0E\u7535\u5B50\u90AE\u4EF6\u7CFB\u7EDF\u7684\u63A5\u53E3\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5C31\u662F\u8FD0\u884C\u5728\u7528\u6237\u7535\u8111\u4E2D\u7684\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u5982 <code>Outlook</code>\u3001<code>Foxmail</code>.</p><p><strong>\u90AE\u4EF6\u670D\u52A1\u5668\uFF1A</strong></p><ol><li>\u6309\u7167<code>\u5BA2\u6237\u670D\u52A1\u5668</code>\u65B9\u5F0F\u5DE5\u4F5C\uFF0CSMTP \u670D\u52A1\u5668\u4F7F\u7528\u7684 TCP \u7AEF\u53E3\u4E3A 25\u3002</li><li>\u4F7F\u7528\u4E24\u79CD\u4E0D\u540C\u7684\u534F\u8BAE <ol><li>\u4E00\u79CD\u7528\u4E8E<code>\u7528\u6237\u4EE3\u7406</code>\u5411<code>\u90AE\u4EF6\u670D\u52A1\u5668</code>\u53D1\u9001\u90AE\u4EF6\u6216\u5728<code>\u90AE\u4EF6\u670D\u52A1\u5668\u4E4B\u95F4</code>\u53D1\u9001\u90AE\u4EF6\uFF0C\u5982 SMTP</li><li>\u4E00\u79CD\u7528\u4E8E<code>\u7528\u6237\u4EE3\u7406</code>\u4ECE<code>\u90AE\u4EF6\u670D\u52A1\u5668</code>\u8BFB\u53D6\u90AE\u4EF6\uFF0C\u5982\u90AE\u5C40\u534F\u8BAE POP3</li></ol></li><li>\u80FD\u591F\u540C\u65F6\u5145\u5F53\u5BA2\u6237\u548C\u670D\u52A1\u5668</li></ol><h3 id="\u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE-pop3-\u548C-imap" tabindex="-1"><a class="header-anchor" href="#\u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE-pop3-\u548C-imap" aria-hidden="true">#</a> \u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE POP3 \u548C IMAP</h3><p>\u90AE\u5C40\u534F\u8BAE POP3 \uFF08Post Office Protocol\uFF09\u7684\u7279\u70B9\uFF1A</p><ul><li><code>\u5BA2\u6237\u670D\u52A1\u5668</code>\u7684\u5DE5\u4F5C\u65B9\u5F0F</li><li>\u7528\u6237\u4ECE POP3 \u670D\u52A1\u5668<code>\u8BFB\u53D6\u90AE\u4EF6\u540E</code>\uFF0CPOP3 \u5C31<code>\u628A\u8BE5\u90AE\u4EF6\u5220\u9664</code></li></ul><p>\u7F51\u9645\u62A5\u6587\u5B58\u53D6\u534F\u8BAE IMAP\uFF08Internet Message Access Protocol\uFF09\u7279\u70B9\uFF1A</p><ul><li><code>\u5BA2\u6237\u670D\u52A1\u5668</code>\u7684\u5DE5\u4F5C\u65B9\u5F0F</li><li>\u662F\u4E00\u4E2A<code>\u8054\u673A\u534F\u8BAE</code>\u3002\u7528\u6237\u53EF\u4EE5\u5728\u81EA\u5DF1\u7684\u673A\u5668\u4E0A\u64CD\u4F5C\u90AE\u4EF6\u670D\u52A1\u5668\u7684\u90AE\u7BB1\uFF0C\u5C31\u50CF\u5728\u672C\u5730\u64CD\u4F5C\u4E00\u6837\u3002</li><li>\u53EF\u4EE5\u5728<code>\u4E0D\u540C\u7684\u5730\u65B9</code>\u3001<code>\u4E0D\u540C\u7684\u673A\u5668</code>\uFF0C\u968F\u65F6\u4E0A\u7F51\u9605\u8BFB\u548C\u5904\u7406\u90AE\u4EF6</li></ul><p><code>\u57FA\u4E8E\u4E07\u7EF4\u7F51\u7684\u7535\u5B50\u90AE\u4EF6</code>\uFF0C\u76F4\u63A5\u4F7F\u7528\u6D4F\u89C8\u5668\u64CD\u4F5C\u7535\u5B50\u90AE\u4EF6\u3002</p><h2 id="\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE-dhcp" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE-dhcp" aria-hidden="true">#</a> \u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE DHCP</h2><p>DHCP \u63D0\u4F9B\u4E00\u79CD\u673A\u5236\uFF0C\u79F0\u4E3A<code>\u5373\u63D2\u5373\u7528\u8FDE\u7F51\uFF08plug-and-play networking\uFF09</code>\uFF0C\u8FD9\u79CD\u673A\u5236\u5141\u8BB8\u4E00\u53F0\u8BA1\u7B97<code>\u52A0\u5165\u65B0\u7684\u7F51\u7EDC</code>\u548C<code>\u83B7\u53D6\u65B0\u7684 IP \u5730\u5740</code>\u4E0D\u7528\u624B\u5DE5\u914D\u7F6E\u3002</p><p>\u4E00\u53F0\u4E3B\u673A\u83B7\u53D6 IP \u7684\u6D41\u7A0B\uFF1A</p><ul><li>\u65B9\u5F0F\u4E00\uFF1A\u672C\u7F51\u7EDC\u5E7F\u64AD\uFF0CDHCP \u670D\u52A1\u5668 \u8FD4\u56DE IP \u5730\u5740</li><li>\u65B9\u5F0F\u4E8C\uFF1A\u672C\u7F51\u7EDC\u5E7F\u64AD\uFF0CDHCP \u4E2D\u7EE7\u4EE3\u7406\u5411 DHCP \u670D\u52A1\u5668\u5355\u64AD\uFF0CDHCP \u670D\u52A1\u5668 \u8FD4\u56DE IP \u5730\u5740</li></ul><p>DHCP \u83B7\u53D6\u7684 IP \u5730\u5740\uFF0C\u662F<code>\u6709\u65F6\u6548\u671F</code>\u7684\uFF0C\u8FD9\u6BB5\u65F6\u95F4\u79F0\u4E3A<code>\u79DF\u7528\u671F\uFF08lease period\uFF09</code>\uFF0C\u8FD9\u4E2A\u65F6\u957F\u6709 DHCP \u670D\u52A1\u5668\u81EA\u5DF1\u51B3\u5B9A\u3002</p><h2 id="\u5E94\u7528\u8FDB\u7A0B\u8DE8\u8D8A\u7F51\u7EDC\u7684\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u8FDB\u7A0B\u8DE8\u8D8A\u7F51\u7EDC\u7684\u901A\u4FE1" aria-hidden="true">#</a> \u5E94\u7528\u8FDB\u7A0B\u8DE8\u8D8A\u7F51\u7EDC\u7684\u901A\u4FE1</h2><p>\u5927\u591A\u6570\u64CD\u4F5C\u7CFB\u7EDF\u4F7F\u7528<code>\u7CFB\u7EDF\u8C03\u7528(system call)</code>\u7684\u673A\u5236\uFF0C\u5728<code>\u5E94\u7528\u7A0B\u5E8F</code>\u548C<code>\u64CD\u4F5C\u7CFB\u7EDF</code>\u4E4B\u95F4\u4F20\u9012\u63A7\u5236\u6743\u3002</p><p><code>\u7CFB\u7EDF\u8C03\u7528\u63A5\u53E3</code>\uFF0C\u4E5F\u79F0\u4E3A<code>\u5E94\u7528\u7F16\u7A0B\u63A5\u53E3 API\uFF08Application Programming Interface\uFF09</code>\uFF0C\u5B9E\u9645\u4E0A\u662F<code>\u5E94\u7528\u8FDB\u7A0B\u7684\u63A7\u5236\u6743</code>\u4E0E<code>\u64CD\u4F5C\u7CFB\u7EDF\u7684\u63A7\u5236\u6743</code>\u8FDB\u884C<code>\u8F6C\u6362</code>\u7684\u4E00\u4E2A\u63A5\u53E3\u3002</p><p>\u51E0\u79CD\u5E38\u7528\u7684\u7CFB\u7EDF\u8C03\u7528\uFF1A</p><ul><li>\u8FDE\u63A5\u5EFA\u7ACB\u9636\u6BB5 <ul><li><code>bind\uFF08\u7ED1\u5B9A\uFF09</code>\u3002\u6307\u660E\u5957\u63A5\u5B57\u7684\u672C\u5730\u5730\u5740\uFF08\u672C\u5730\u7AEF\u53E3\u53F7\u548C\u672C\u5730 IP \u5730\u5740\uFF09\u3002</li><li><code>listen\uFF08\u6536\u542C\uFF09</code>\u3002\u628A\u5957\u63A5\u5B57\u8BBE\u7F6E\u4E3A\u88AB\u52A8\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u968F\u65F6\u63A5\u6536\u5BA2\u6237\u7684\u8BF7\u6C42\u3002</li><li><code>access\uFF08\u63A5\u53D7\uFF09</code>\u3002\u628A\u8FDC\u5730\u5BA2\u6237\u8FDB\u7A0B\u53D1\u9001\u7684\u8FDE\u63A5\u8BF7\u6C42\u63D0\u53D6\u51FA\u6765\u3002</li><li><code>connect</code>\u3002\u5BA2\u6237\u7AEF\u8FDB\u7A0B\u4F7F\u7528 connect \u548C\u8FDC\u5730\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u3002</li></ul></li><li>\u6570\u636E\u4F20\u8F93\u9636\u6BB5 <ul><li><code>send</code>\u3002\u5BA2\u6237\u7AEF\u3001\u670D\u52A1\u7AEF\u90FD\u53EF\u4EE5\u4F7F\u7528 send \u53D1\u9001\u6570\u636E</li><li><code>recv</code>\u3002\u5BA2\u6237\u7AEF\u3001\u670D\u52A1\u7AEF\u90FD\u53EF\u4EE5\u4F7F\u7528 send \u63A5\u6536\u6570\u636E</li></ul></li><li>\u8FDE\u63A5\u91CA\u653E\u9636\u6BB5 <ul><li><code>close</code>\u3002\u91CA\u653E\u8FDE\u63A5\u548C\u64A4\u9500\u5957\u63A5\u5B57</li></ul></li></ul><h2 id="p2p-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#p2p-\u5E94\u7528" aria-hidden="true">#</a> P2P \u5E94\u7528</h2><p><code>P2P \u5E94\u7528</code>\u6307\u5177\u6709 P2P \u4F53\u7CFB\u7ED3\u6784\u7684<code>\u7F51\u7EDC\u5E94\u7528</code>\uFF0C\u6CA1\u6709\uFF08\u6216\u53EA\u6709\u6781\u5C11\u6570\u7684\uFF09\u56FA\u5B9A\u7684\u670D\u52A1\u5668\uFF0C\u7EDD\u5927\u591A\u6570\u7684\u4EA4\u4E92\u90FD\u662F\u4F7F\u7528<code>\u5BF9\u7B49\u65B9\u5F0F\uFF08P2P \u65B9\u5F0F\uFF09\u8FDB\u884C</code>\u3002</p><p><strong>\u5B9E\u73B0\u65B9\u5F0F\uFF1A</strong></p><ul><li><code>\u5177\u6709\u96C6\u4E2D\u76EE\u5F55\u670D\u52A1\u5668\u7684 P2P \u5DE5\u4F5C\u65B9\u5F0F</code><ul><li>\u7B2C\u4E00\u4EE3 P2P \u5E94\u7528\uFF1ANapster \u7F51\u7AD9 <ul><li>\u7279\u70B9\uFF1A <ul><li><code>\u96C6\u4E2D\u5F0F\u7684\u76EE\u5F55\u67E5\u8BE2\u670D\u52A1\u5668</code></li></ul></li></ul></li></ul></li><li><code>\u5177\u6709\u5168\u5206\u5E03\u5F0F\u7ED3\u6784\u7684 P2P \u6587\u4EF6\u5171\u4EAB\u7A0B\u5E8F</code><ul><li>\u7B2C\u4E8C\u4EE3 P2P \u5E94\u7528\uFF1AGnutella \u7F51\u7AD9 <ul><li>\u7279\u70B9\uFF1A <ul><li>\u4E0D\u91C7\u7528\u96C6\u4E2D\u5F0F\u7684\u76EE\u5F55\u67E5\u8BE2\u670D\u52A1\u5668\uFF0C\u91C7\u7528<code>\u6709\u9650\u8303\u56F4\u7684\u6D2A\u6CDB\u6CD5</code>\u3002</li></ul></li></ul></li><li>\u7B2C\u4E09\u4EE3 P2P \u5E94\u7528\uFF1AKaZaA\u3001\u7535\u9AA1 eMule\u3001\u6BD4\u7279\u6D2A\u6D41 BT\uFF08Bit Torrent\uFF09 <ul><li>\u7279\u70B9\uFF1A <ul><li>\u4F7F\u7528\u5206\u6563\u5B9A\u4F4D\u3001\u5206\u6563\u4F20\u8F93\u6280\u672F</li></ul></li></ul></li></ul></li></ul><p><code>\u5206\u5E03\u5F0F\u6563\u5217\u8868 DHT\uFF08Distributed Hash Table\uFF09</code>\uFF0C\u4E5F\u79F0\u4F5C<code>\u5206\u5E03\u5F0F\u54C8\u5E0C\u8868</code>\uFF0C\u5B83\u662F\u7531<code>\u5927\u91CF\u5BF9\u7B49\u65B9</code>\u5171\u540C\u7EF4\u62A4\u7684\u3002\u57FA\u4E8E DHT \u7684\u7B97\u6CD5\uFF1A</p><ul><li>Chord</li><li>Pastry</li><li>CAN(Content Address Network)</li><li>Kademilia</li></ul><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h2><p>\u5B89\u5168\u767B\u5F55\uFF0C\u91C7\u7528\u5BA2\u6237\u670D\u52A1\u5668\u7684\u5DE5\u4F5C\u65B9\u5F0F\u3002</p><hr><div style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)}><br><span>\u5FAE\u4FE1\u516C\u4F17\u53F7</span></p></div><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/network/5-application-layer.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var _5ApplicationLayer_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$a]]);
var _5ApplicationLayer_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _5ApplicationLayer_html$1
}, Symbol.toStringTag, { value: "Module" }));
var _imports_0$1 = "/net-secure/signature.png";
var _imports_1 = "/net-secure/MessageAuthenticationCode.png";
const _sfc_main$v = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_center = vue.resolveComponent("center");
  _push(`<!--[--><h1 id="\u7F51\u7EDC\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5B89\u5168" aria-hidden="true">#</a> \u7F51\u7EDC\u5B89\u5168</h1><h2 id="\u7F51\u7EDC\u5B89\u5168\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u5B89\u5168\u95EE\u9898" aria-hidden="true">#</a> \u7F51\u7EDC\u5B89\u5168\u95EE\u9898</h2><p>\u8BA1\u7B97\u673A\u7F51\u7EDC\u901A\u4FE1\u9762\u4E34\u7684\u4E24\u5927\u7C7B\u5A01\u80C1\uFF0C\u5373<code>\u88AB\u52A8\u653B\u51FB</code>\u548C<code>\u4E3B\u52A8\u653B\u51FB</code>\u3002</p><p><code>\u88AB\u52A8\u653B\u51FB</code>\u6307\u653B\u51FB\u8005\u4ECE\u7F51\u7EDC\u4E0A\u7A83\u542C\u4ED6\u4EBA\u7684\u901A\u4FE1\u5185\u5BB9\uFF0C\u4E5F\u88AB\u79F0\u4E3A<code>\u622A\u83B7</code>\u3002\u5305\u542B\uFF1A</p><ul><li><code>\u6D41\u91CF\u5206\u6790</code>\u3002\u653B\u51FB\u8005\u53EA\u662F<code>\u89C2\u5BDF</code>\u3001<code>\u5206\u6790</code>\u534F\u8BAE\u6570\u636E\u5355\u5143\u800C<code>\u4E0D\u5E72\u6270</code>\u4FE1\u606F\u6D41\uFF0C\u4ECE\u800C\u4E86\u89E3\u6240\u4EA4\u6362\u6570\u636E\u7684\u67D0\u79CD\u7279\u5F81\u3002</li></ul><p><code>\u4E3B\u52A8\u653B\u51FB</code>\u7684\u5E38\u89C1\u65B9\u5F0F\uFF1A</p><ul><li><code>\u7BE1\u6539</code>\u3002\u653B\u51FB\u8005\u6545\u610F\u7BE1\u6539\u7F51\u7EDC\u4E0A\u4F20\u9001\u7684\u62A5\u6587\u3002</li><li><code>\u6076\u610F\u7A0B\u5E8F</code>\uFF0C\u4E3B\u8981\u79CD\u7C7B\uFF1A <ul><li><code>\u8BA1\u7B97\u673A\u75C5\u6BD2\uFF08computer virus\uFF09</code>\u3002\u4E00\u79CD\u4F1A\u201C\u4F20\u67D3\u201D\u5176\u5B83\u7A0B\u5E8F\u7684\u7A0B\u5E8F\uFF0C\u4F20\u67D3\u662F\u901A\u8FC7<code>\u4FEE\u6539\u5176\u5B83\u7A0B\u5E8F</code>\u6765\u628A<code>\u81EA\u8EAB\u6216\u81EA\u5DF1\u7684\u53D8\u79CD</code>\u590D\u5236\u8FDB\u53BB\u800C\u5B8C\u6210\u7684\u3002</li><li><code>\u8BA1\u7B97\u673A\u8815\u866B\uFF08computer worm\uFF09</code>\u3002\u901A\u8FC7<code>\u7F51\u7EDC\u901A\u4FE1</code>\u529F\u80FD\uFF0C\u5C06\u81EA\u8EAB\u4ECE\u4E00\u4E2A\u8282\u70B9\u53D1\u9001\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u5E76<code>\u81EA\u52A8\u542F\u52A8\u8FD0\u884C</code>\u7684\u7A0B\u5E8F\u3002</li><li><code>\u7279\u6D1B\u4F0A\u6728\u9A6C\uFF08Trojan horse\uFF09</code>\u3002\u4E00\u79CD\u7A0B\u5E8F\uFF0C\u5B83\u6267\u884C\u7684\u529F\u80FD\u5E76\u975E\u5B83\u6240<code>\u58F0\u79F0</code>\u7684\u529F\u80FD\uFF0C\u800C\u662F\u67D0\u79CD<code>\u6076\u610F\u529F\u80FD</code>\u3002</li><li><code>\u903B\u8F91\u70B8\u5F39\uFF08logic bomb\uFF09</code>\u3002\u4E00\u79CD\u5F53\u8FD0\u884C\u73AF\u5883\u6EE1\u8DB3\u67D0\u79CD\u7279\u5B9A\u6761\u4EF6\u65F6\uFF0C\u6267\u884C\u5176\u4ED6<code>\u7279\u6B8A\u529F\u80FD</code>\u7684\u7A0B\u5E8F\u3002</li><li><code>\u540E\u95E8\u5165\u4FB5\uFF08backdoor knocking\uFF09</code>\u3002\u5229\u7528<code>\u7CFB\u7EDF</code>\u5B9E\u73B0\u8FC7\u7A0B\u4E2D\u7684<code>\u6F0F\u6D1E</code>\u901A\u8FC7<code>\u7F51\u7EDC</code>\u5165\u4FB5\u7CFB\u7EDF\u3002</li><li><code>\u6D41\u6C13\u8F6F\u4EF6</code>\u3002\u4E00\u79CD<code>\u672A\u7ECF\u5BA2\u6237\u5141\u8BB8</code>\u5C31\u5728\u7528\u6237\u8BA1\u7B97\u673A\u4E0A<code>\u5B89\u88C5\u8FD0\u884C</code>\u5E76<code>\u635F\u5BB3\u7528\u6237\u5229\u76CA</code>\u7684\u8F6F\u4EF6\u3002</li></ul></li><li><code>\u62D2\u7EDD\u670D\u52A1Dos (Denial of Service)</code>\u3002\u6307\u653B\u51FB\u8005\u5411\u4E92\u8054\u7F51\u4E0A\u7684\u67D0\u53F0\u670D\u52A1\u5668\u4E0D\u505C\u7684\u53D1\u9001\u5927\u91CF\u5206\u7EC4\uFF0C\u4F7F\u8BE5\u670D\u52A1\u5668\u65E0\u6CD5\u63D0\u4F9B\u6B63\u5E38\u670D\u52A1\uFF0C\u751A\u81F3\u5B8C\u5168\u762B\u75EA\u3002 <ul><li><code>\u5206\u5E03\u5F0F\u62D2\u7EDD\u670D\u52A1 DDoS\uFF08Distributed Denial of Service\uFF09</code>\u3002\u4ECE\u4E92\u8054\u7F51\u4E0A <code>N \u4E2A\u7F51\u7AD9</code>\u96C6\u4E2D\u653B\u51FB<code>\u4E00\u4E2A\u7F51\u7AD9</code>\u3002</li><li><code>\u4EA4\u6362\u673A\u4E2D\u6BD2</code>\u3002\u5728\u4F7F\u7528\u4EE5\u592A\u7F51\u4EA4\u6362\u673A\u7684\u7F51\u7EDC\u4E2D\uFF0C\u653B\u51FB\u8005\u5411\u67D0\u4E2A\u4EA4\u6362\u673A\u53D1\u9001\u5927\u91CF\u4F2A\u9020\u7684\u6E90 MAC \u5730\u5740\u7684\u5E27\uFF0C\u4EA4\u6362\u673A\u7684\u4EA4\u6362\u8868\u56E0\u5199\u5165\u5927\u91CF\u6E90 MAC \u800C\u5B58\u50A8\u4E0D\u591F\u7528\uFF0C\u5BFC\u81F4\u4EA4\u6362\u673A\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002</li></ul></li></ul><p><strong>\u8BA1\u7B97\u673A\u7684\u5B89\u5168\u76EE\u6807\u5982\u4E0B\uFF1A</strong></p><ol><li>\u9632\u6B62\u6790\u51FA\u62A5\u6587\u5185\u5BB9\u548C\u6D41\u91CF\u5206\u6790</li><li>\u9632\u6B62\u6076\u610F\u7A0B\u5E8F</li><li>\u68C0\u6D4B\u66F4\u6539\u62A5\u6587\u6D41\u548C\u62D2\u7EDD\u670D\u52A1</li></ol><h2 id="\u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC" aria-hidden="true">#</a> \u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC</h2><p>\u4E00\u4E2A\u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC\u5E94\u8BBE\u6CD5\u8FBE\u5230\u4E00\u4E0B\u56DB\u4E2A\u76EE\u6807\uFF1A</p><ol><li><code>\u4FDD\u5BC6\u6027</code>\u3002\u4FE1\u606F\u7684\u5185\u5BB9\uFF0C\u4EC5\u6709\u4FE1\u606F\u7684\u53D1\u9001\u65B9\u548C\u63A5\u6536\u65B9\u61C2\u3002</li><li><code>\u7AEF\u70B9\u8BC6\u522B</code>\u3002\u80FD\u591F\u9274\u522B\u53D1\u9001\u65B9\u3001\u63A5\u6536\u65B9\u7684\u771F\u5B9E\u8EAB\u4EFD\u3002</li><li><code>\u4FE1\u606F\u7684\u5B8C\u6574\u6027</code>\u3002\u4FE1\u606F\u7684\u5185\u5BB9\u672A\u88AB\u4EBA\u7BE1\u6539\u8FC7\u3002</li><li><code>\u8FD0\u884C\u7684\u5B89\u5168\u6027</code>\u3002\u8BA1\u7B97\u673A\u7F51\u7EDC\u80FD\u591F\u6B63\u5E38\u3001\u5B89\u5168\u7684\u8FD0\u884C\u3002</li></ol><h2 id="\u4E24\u7C7B\u5BC6\u7801\u4F53\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E24\u7C7B\u5BC6\u7801\u4F53\u5236" aria-hidden="true">#</a> \u4E24\u7C7B\u5BC6\u7801\u4F53\u5236</h2><p><code>\u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u5236</code>\u548C<code>\u516C\u94A5\u5BC6\u7801\u4F53\u5236</code></p><h3 id="\u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u7CFB" aria-hidden="true">#</a> \u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u7CFB</h3><p>\u5373\u52A0\u5BC6\u5BC6\u94A5\u3001\u89E3\u5BC6\u5BC6\u94A5\u662F\u4F7F\u7528\u76F8\u540C\u7684\u5BC6\u7801\u4F53\u5236\u3002</p><p>\u5E38\u7528\u7B97\u6CD5\uFF1A</p><ul><li><code>\u6570\u636E\u52A0\u5BC6\u6807\u51C6 DES\uFF08Data Encryption Standard\uFF09</code><ul><li>\u4FDD\u5BC6\u6027\u4EC5\u53D6\u51B3\u4E8E\u5BF9\u5BC6\u94A5\u7684\u4FDD\u5BC6\uFF0C\u7B97\u6CD5\u516C\u5F00\u3002</li></ul></li><li><code>\u4E09\u91CD DES</code>\uFF0C\u7B97\u6CD5\u6D41\u7A0B <ul><li>\u5148\u7528 KEY1 \u4F7F\u7528 DES \u7B97\u6CD5\u52A0\u5BC6</li><li>\u518D\u7528 KEY2 \u8FDB\u884C DES \u89E3\u5BC6</li><li>\u6700\u540E\u7528 KEY1 \u8FDB\u884C DES \u52A0\u5BC6\uFF0C\u5F97\u5230\u6700\u7EC8\u7684\u79D8\u6587</li></ul></li><li><code>\u9AD8\u7EA7\u52A0\u5BC6\u6807\u51C6 AES\uFF08Advanced Encryption Standard\uFF09</code></li></ul><h3 id="\u516C\u94A5\u5BC6\u7801\u4F53\u5236-public-key-crypto-system" tabindex="-1"><a class="header-anchor" href="#\u516C\u94A5\u5BC6\u7801\u4F53\u5236-public-key-crypto-system" aria-hidden="true">#</a> \u516C\u94A5\u5BC6\u7801\u4F53\u5236\uFF08public key crypto-system\uFF09</h3><p>\u4F7F\u7528<code>\u4E00\u5BF9</code>\u5BC6\u94A5\uFF0C<code>\u52A0\u5BC6\u5BC6\u94A5</code>\u5411\u516C\u4F17\u516C\u5F00\uFF0C<code>\u89E3\u5BC6\u5BC6\u94A5</code>\u5219\u662F\u9700\u8981\u4FDD\u5BC6\u7684\u3002\u52A0\u5BC6\u7B97\u6CD5\u3001\u89E3\u5BC6\u7B97\u6CD5\u4E5F\u90FD\u662F\u516C\u5F00\u6EF4\u3002</p><p>\u5F15\u5165\u516C\u94A5\u5BC6\u7801\u4F53\u5236\u7684\u539F\u56E0\uFF1A</p><ul><li><code>\u5BF9\u79F0\u5BC6\u7801\u4F53\u5236</code>\u7684<code>\u5BC6\u94A5\u5206\u914D</code>\u95EE\u9898\uFF0C\u5206\u914D\u7684\u65B9\u5F0F\u6709\uFF1A <ul><li><code>\u4E8B\u5148\u7EA6\u5B9A</code>\u3002\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u9020\u6210\u5BC6\u94A5\u7684\u7BA1\u7406\u3001\u66F4\u6362\u6781\u5927\u7684\u4E0D\u4FBF\u3002</li><li><code>\u4FE1\u4F7F\u4F20\u8FBE</code>\u3002\u5728\u9AD8\u5EA6\u81EA\u52A8\u5316\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC\u4E2D\uFF0C\u4F7F\u7528\u4FE1\u606F\u4F20\u8FBE\u5BC6\u94A5\u660E\u663E\u4E0D\u5408\u9002\u3002</li><li><code>\u4F7F\u7528\u9AD8\u5EA6\u5B89\u5168\u7684\u5BC6\u94A5\u5206\u914D\u4E2D\u5FC3 KDC\uFF08Key Distributed Center\uFF09</code>\u3002\u4F1A\u4F7F\u7F51\u7EDC\u6210\u672C\u589E\u52A0\u3002</li></ul></li><li>\u6570\u5B57\u7B7E\u540D\u7684\u9700\u6C42</li></ul><p><code>\u7B97\u6CD5\u5B9E\u73B0\uFF1A</code></p><ul><li>RSA \u7B97\u6CD5</li></ul><p><code>\u516C\u94A5\u5BC6\u7801\u4F53\u5236d\u7684\u7279\u70B9\uFF1A</code></p><ul><li>\u5BC6\u94A5\u6210\u5BF9\u5B58\u5728</li><li>\u516C\u94A5\u52A0\u5BC6\uFF0C\u79C1\u94A5\u89E3\u5BC6</li><li>\u79C1\u94A5\u52A0\u5BC6\uFF0C\u516C\u94A5\u9A8C\u7B7E</li></ul><h2 id="\u6570\u5B57\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u7B7E\u540D" aria-hidden="true">#</a> \u6570\u5B57\u7B7E\u540D</h2><p>\u6570\u5B57\u7B7E\u540D\u5FC5\u987B\u5177\u5907\u7684\u80FD\u529B\uFF1A</p><ol><li><code>\u62A5\u6587\u9274\u522B</code>\u3002\u5373\u63A5\u6536\u8005\u80FD\u591F\u786E\u4FE1\u8BE5\u62A5\u6587\u7684\u786E\u662F\u53D1\u9001\u8005\u53D1\u9001\u7684\u3002</li><li><code>\u62A5\u6587\u7684\u5B8C\u6574\u6027</code>\u3002\u63A5\u6536\u8005\u63A5\u6536\u5230\u7684\u6570\u636E\uFF0C\u4E0E\u53D1\u9001\u8005\u53D1\u9001\u7684\u62A5\u6587\u4FDD\u6301\u4E00\u81F4\u3002</li><li><code>\u4E0D\u53EF\u5426\u8BA4</code>\u3002\u53D1\u9001\u7740\u4E8B\u540E\u4E0D\u80FD\u62B5\u8D56\u5BF9\u62A5\u6587\u7684\u7B7E\u540D\u3002</li></ol><img${serverRenderer.ssrRenderAttr("src", _imports_0$1)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_center, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b${_scopeId}>\u6570\u636E\u7B7E\u540D\u7684\u6D41\u7A0B</b>`);
      } else {
        return [
          vue.createVNode("b", null, "\u6570\u636E\u7B7E\u540D\u7684\u6D41\u7A0B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<blockquote><p>D \u8FD0\u7B97\uFF1A\u89E3\u5BC6\u7B97\u6CD5\uFF1B E \u8FD0\u7B97\uFF1A\u52A0\u5BC6\u7B97\u6CD5</p></blockquote><p>\u5907\u6CE8\uFF1ARSA \u7684 E \u8FD0\u7B97\u3001D \u8FD0\u7B97\u9700\u8981\u5360\u7528\u975E\u5E38\u591A\u7684\u8BA1\u7B97\u673A\u7684 CPU \u65F6\u95F4\u3002</p><h2 id="\u9274\u522B" tabindex="-1"><a class="header-anchor" href="#\u9274\u522B" aria-hidden="true">#</a> \u9274\u522B</h2><ul><li>\u62A5\u6587\u9274\u522B\uFF0C\u5BF9\u6BCF\u4E00\u4E2A\u6536\u5230\u7684\u62A5\u6587\u90FD\u8981\u9274\u522B\u62A5\u6587\u7684\u53D1\u9001\u8005\u3002\u5305\u542B\uFF1A <ul><li>\u7AEF\u70B9\u9274\u522B\u3002</li><li>\u6587\u4EF6\u5B8C\u6574\u6027\u9274\u522B\u3002</li></ul></li><li>\u5B9E\u4F53\u9274\u522B\uFF0C\u5728\u7CFB\u7EDF\u63A5\u5165\u7684\u5168\u90E8\u65F6\u95F4\u5185\uFF0C\u5BF9\u548C\u81EA\u5DF1\u901A\u4FE1\u7684\u5BF9\u65B9\u5B9E\u4F53\u53EA\u9700\u9A8C\u8BC1\u4E00\u6B21\u3002 <ul><li>\u5B9E\u4F53\u53EF\u4EE5\u662F\u4EBA\u3001\u8FDB\u7A0B\uFF08\u5BA2\u6237\u6216\u670D\u52A1\u5668\uFF09\uFF0C\u5373\u7AEF\u70B9\u9274\u522B</li></ul></li></ul><h3 id="\u62A5\u6587\u9274\u522B" tabindex="-1"><a class="header-anchor" href="#\u62A5\u6587\u9274\u522B" aria-hidden="true">#</a> \u62A5\u6587\u9274\u522B</h3><h4 id="\u5BC6\u7801\u6563\u5217\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u7801\u6563\u5217\u51FD\u6570" aria-hidden="true">#</a> \u5BC6\u7801\u6563\u5217\u51FD\u6570</h4><p><code>\u6563\u5217\u51FD\u6570\u7684\u7279\u70B9\uFF1A</code></p><ol><li>\u8F93\u5165\u53EF\u4EE5\u5F88\u957F\uFF0C\u8F93\u51FA\u957F\u5EA6\u56FA\u5B9A\uFF0C\u5E76\u4E14\u8F83\u77ED\u3002</li><li>\u4E0D\u540C\u7684\u8F93\u5165\u53EF\u4EE5\u5BF9\u5E94\u540C\u4E00\u4E2A\u8F93\u51FA\u3002</li></ol><p><code>\u5BC6\u7801\u5B66</code>\u4E2D\u4F7F\u7528\u7684<code>\u5BC6\u7801\u6563\u5217\u51FD\u6570</code>\uFF0C\u6700\u91CD\u8981\u7684\u4E00\u4E2A\u7279\u70B9\uFF1A<code>\u8981\u627E\u5230\u4E0D\u540C\u7684\u62A5\u6587\uFF0C\u5177\u6709\u540C\u6837\u7684\u5BC6\u7801\u6563\u5217\u51FD\u6570\u8F93\u51FA\uFF0C\u5728\u8BA1\u7B97\u4E0A\u662F\u4E0D\u53EF\u884C\u7684</code>\u3002</p><p>\u5B9E\u7528\u7684\u5BC6\u7801\u6563\u5217\u51FD\u6570 MD5 \u548C SHA-1</p><ul><li>\u62A5\u6587\u6458\u8981 MD5(Message Digest)</li><li>\u5B89\u5168\u6563\u5217\u7B97\u6CD5 SHA\uFF08Secure Hash Algorithm\uFF09</li></ul><h4 id="\u62A5\u6587\u9274\u522B\u7801-mac-message-authentication-code" tabindex="-1"><a class="header-anchor" href="#\u62A5\u6587\u9274\u522B\u7801-mac-message-authentication-code" aria-hidden="true">#</a> \u62A5\u6587\u9274\u522B\u7801 MAC\uFF08Message Authentication Code\uFF09</h4><p>\u4F7F\u7528\u6563\u5217\u51FD\u6570\u6784\u5EFA\u62A5\u6587\u9274\u522B\u7801</p><img${serverRenderer.ssrRenderAttr("src", _imports_1)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_center, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b${_scopeId}>\u7528\u62A5\u6587\u9274\u522B\u7801 MAC\u9274\u522B\u62A5\u6587</b>`);
      } else {
        return [
          vue.createVNode("b", null, "\u7528\u62A5\u6587\u9274\u522B\u7801 MAC\u9274\u522B\u62A5\u6587")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u7531\u4E8E\u5165\u4FB5\u8005\u4E0D\u638C\u63E1\u5BC6\u94A5 K\uFF0C\u6240\u4EE5\u5165\u4FB5\u8005\u65E0\u6CD5\u4F2A\u9020 A \u7684\u62A5\u6587\u9274\u522B\u7801 MAC\uFF0C\u56E0\u4E3A\u65E0\u6CD5\u4F2A\u9020 A \u53D1\u9001\u7684\u62A5\u6587\u3002\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u5BF9\u62A5\u6587\u7684\u9274\u522B\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684\u5BC6\u94A5 K\uFF0C\u53EF\u4EE5\u662F\u5BF9\u79F0\u5BC6\u94A5\u4F53\u7CFB\uFF0C\u4E5F\u53EF\u4EE5\u516C\u94A5\u4F53\u7CFB\u3002\u6240\u4EE5\u5728\u6B63\u5F0F\u901A\u4FE1\u524D\uFF0C\u4F1A\u6709\u4E00\u6B21\u5BC6\u94A5\u4EA4\u6362\u8FC7\u7A0B\u3002</p></blockquote><h4 id="\u5B9E\u4F53\u9274\u522B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53\u9274\u522B" aria-hidden="true">#</a> \u5B9E\u4F53\u9274\u522B</h4><p>\u5B9E\u4F53\u9274\u522B\u6240\u9762\u4E34\u7684\u95EE\u9898\uFF1A</p><p><strong>1. \u91CD\u653E\u653B\u51FB</strong></p><ul><li>\u539F\u7406\uFF1A <ul><li>C \u62E6\u622A\u5230 A \u5411 B \u53D1\u9001\u62A5\u6587</li><li>C \u4E0D\u7834\u8BD1\u79D8\u6587\uFF0C\u76F4\u63A5\u5C06\u79D8\u6587\u53D1\u9001\u7ED9 B\uFF0C</li><li>\u4F7F B \u8BEF\u8BA4\u4E3A C \u5C31\u662F A\uFF0C\u7136\u540E\uFF0CB \u5C06\u62A5\u6587\u53D1\u56DE\u7ED9\u4F2A\u88C5 A \u7684 B</li></ul></li><li>\u89E3\u51B3\u65B9\u6848\uFF1A <ul><li>\u4F7F\u7528\u4E0D\u91CD\u6570\u89E3\u51B3</li><li>\u91CD\u8981\u7684\u7406\u8BBA\u4F9D\u636E\u662F\uFF1AA \u548C B \u5BF9\u4E0D\u540C\u7684\u4F1A\u8BDD\u4F7F\u7528\u4E0D\u540C\u7684\u4E0D\u91CD\u6570\u96C6\u3002</li></ul></li></ul><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/network/6-secure.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var _6Secure_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$9]]);
var _6Secure_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _6Secure_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p>\u7B80\u8981\u6982\u8FF0</p><h2 id="\u7F51\u7EDC-\u8BA1\u7B97\u673A\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC-\u8BA1\u7B97\u673A\u7F51\u7EDC" aria-hidden="true">#</a> \u7F51\u7EDC\uFF08\u8BA1\u7B97\u673A\u7F51\u7EDC\uFF09</h2><p>\u7531\u82E5\u5E72\u8282\u70B9\uFF08\u8BA1\u7B97\u673A\uFF09\u548C\u8FDE\u63A5\u8FD9\u4E9B\u8282\u70B9\u7684\u94FE\u8DEF\u7EC4\u6210\u3002</p><ul><li>\u8282\u70B9\u3002\u8BA1\u7B97\u673A\u3001\u96C6\u7EBF\u5668\u3001\u4EA4\u6362\u673A\u3001\u8DEF\u7531\u5668\u7B49</li></ul><h2 id="\u4E92\u8FDE\u7F51" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8FDE\u7F51" aria-hidden="true">#</a> \u4E92\u8FDE\u7F51</h2><p>\u7F51\u7EDC\u7684\u7F51\u7EDC\uFF0C\u5373\u591A\u4E2A\u7F51\u7EDC\u901A\u8FC7\u8DEF\u7531\u5668\u8FDE\u63A5\uFF0C\u7EC4\u6210\u66F4\u5927\u7684\u7F51\u7EDC\u3002 \u4E92\u8054\u7F51\u53EF\u4EE5\u6709\u591A\u79CD\u5F02\u6784\u7F51\u7EDC\u6784\u6210\u3002</p><h2 id="\u4E92\u8054\u7F51-\u56E0\u7279\u7F51" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51-\u56E0\u7279\u7F51" aria-hidden="true">#</a> \u4E92\u8054\u7F51\uFF08\u56E0\u7279\u7F51\uFF09</h2><p>Internet\uFF0C\u662F\u7531\u6570\u91CF\u6781\u5927\u7684\u5404\u79CD\u8BA1\u7B97\u7F51\u7EDC\u4E92\u8FDE\u8D77\u6765\u7684\u3002</p><h2 id="\u4E92\u8054\u7F51\u7684\u4E24\u4E2A\u91CD\u8981\u57FA\u672C\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u7684\u4E24\u4E2A\u91CD\u8981\u57FA\u672C\u7279\u70B9" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u7684\u4E24\u4E2A\u91CD\u8981\u57FA\u672C\u7279\u70B9</h2><ul><li>\u8FDE\u901A\u6027\u3002\u4E0D\u7BA1\u76F8\u8DDD\u79BB\u591A\u8FDC\uFF0C\u53EF\u4EE5\u4FBF\u6377\u3001\u975E\u5E38\u7ECF\u6D4E\u7684\u4EA4\u6362\u4FE1\u606F\u3002</li><li>\u5171\u4EAB\u3002\u8D44\u6E90\u5171\u4EAB</li></ul><h2 id="\u4E92\u8054\u7F51\u53D1\u5C55\u7684\u4E09\u4E2A\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u53D1\u5C55\u7684\u4E09\u4E2A\u9636\u6BB5" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u53D1\u5C55\u7684\u4E09\u4E2A\u9636\u6BB5</h2><ul><li>\u4ECE\u5355\u4E00 ARPANET \u5411<code>\u4E92\u8FDE\u7F51</code>\u53D1\u5C55\u7684\u8FC7\u7A0B <ul><li>1983 \u5E74\uFF0CTCP/IP \u534F\u8BAE\u6210\u4E3A ARPANET \u7684\u6807\u51C6\u534F\u8BAE\uFF0C\u4E92\u8054\u7F51\u7684\u96CF\u5F62</li></ul></li><li>\u4E09\u7EA7\u7ED3\u6784\u7684\u4E92\u8054\u7F51\u3002\u4E3B\u5E72\u7F51\u3001\u5730\u533A\u7F51\u3001\u6821\u56ED\u7F51</li><li>\u591A\u5C42\u6B21\u7684 ISP \u7ED3\u6784\u7684\u4E92\u8054\u7F51 <ul><li>ISP\uFF08Internet Service Provider\uFF09\uFF0C\u4E92\u8054\u7F51\u670D\u52A1\u63D0\u4F9B\u8005\u3001\u4E92\u8054\u7F51\u670D\u52A1\u63D0\u4F9B\u5546</li></ul></li></ul><h2 id="\u4E92\u8054\u7F51\u7684\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#\u4E92\u8054\u7F51\u7684\u7EC4\u6210" aria-hidden="true">#</a> \u4E92\u8054\u7F51\u7684\u7EC4\u6210</h2><ul><li>\u8FB9\u7F18\u90E8\u5206\uFF0C\u7531\u6240\u6709\u8FDE\u63A5\u5728\u4E92\u8054\u7F51\u4E0A\u7684\u4E3B\u673A\u7EC4\u6210</li><li>\u6838\u5FC3\u90E8\u5206\uFF0C\u7531\u5927\u91CF\u7F51\u7EDC\u548C\u8FDE\u63A5\u8FD9\u4E9B\u7F51\u7EDC\u7684\u8DEF\u7531\u5668\u7EC4\u6210</li></ul><h2 id="\u8BA1\u7B97\u673A\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u673A\u901A\u4FE1" aria-hidden="true">#</a> \u8BA1\u7B97\u673A\u901A\u4FE1</h2><ul><li>\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u6307\u5728\u4E3B\u673A A \u4E0A\u7684\u67D0\u4E2A\u7A0B\u5E8F\u548C\u8FD0\u884C\u5728\u4E3B\u673A B \u4E0A\u7684\u53E6\u4E00\u4E2A\u7A0B\u5E8F\u8FDB\u884C\u901A\u4FE1</li><li>\u901A\u4FE1\u65B9\u5F0F\uFF1A\u5BA2\u6237-\u670D\u52A1\u7AEF\uFF08C/S \u65B9\u5F0F\uFF09\u548C\u5BF9\u7B49\u65B9\u5F0F\uFF08P2P \u65B9\u5F0F\uFF09</li></ul><h2 id="\u8DEF\u7531\u5668" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668" aria-hidden="true">#</a> \u8DEF\u7531\u5668</h2><ul><li>\u4E00\u79CD\u4E13\u7528\u8BA1\u7B97\u673A</li><li>\u5B9E\u73B0\u5206\u7EC4\u4EA4\u6362\u7684\u5173\u952E\u6784\u5EFA\uFF0C\u4EFB\u52A1\u662F\u8F6C\u53D1\u6536\u5230\u7684\u5206\u7EC4</li></ul><h2 id="\u7535\u8DEF\u4EA4\u6362\u3001\u62A5\u6587\u4EA4\u6362\u3001\u5206\u7EC4\u4EA4\u6362" tabindex="-1"><a class="header-anchor" href="#\u7535\u8DEF\u4EA4\u6362\u3001\u62A5\u6587\u4EA4\u6362\u3001\u5206\u7EC4\u4EA4\u6362" aria-hidden="true">#</a> \u7535\u8DEF\u4EA4\u6362\u3001\u62A5\u6587\u4EA4\u6362\u3001\u5206\u7EC4\u4EA4\u6362</h2><ul><li>\u7535\u8DEF\u4EA4\u6362 <ul><li>\u6D41\u7A0B\uFF1A\u5EFA\u7ACB\u8FDE\u63A5 -&gt; \u901A\u8BDD -&gt; \u91CA\u653E\u8FDE\u63A5</li><li>\u7279\u70B9\uFF1A\u5728\u901A\u8BDD\u7684\u5168\u90E8\u65F6\u95F4\u5185\uFF0C\u901A\u8BDD\u7684\u4E24\u4E2A\u7528\u6237\u59CB\u7EC8\u5360\u7528\u7AEF\u5230\u7AEF\u7684\u901A\u4FE1\u8D44\u6E90</li></ul></li><li>\u62A5\u6587\u4EA4\u6362 <ul><li>\u57FA\u4E8E\u5B58\u50A8\u8F6C\u53D1\u7406\u8BBA</li><li>\u5B9E\u8DF5\uFF1A\u7535\u62A5\u901A\u4FE1</li></ul></li><li>\u5206\u7EC4\u4EA4\u6362 <ul><li>\u5B58\u50A8\u8F6C\u53D1\u6280\u672F</li><li>\u5206\u7EC4\uFF1A\u62A5\u6587\u5207\u5206\u4E3A\u591A\u4E2A\u6570\u636E\u6BB5\uFF0C\u9996\u90E8\u3001\u6570\u636E\u6BB5\uFF081024bit\uFF09\u7EC4\u6210\u5206\u7EC4</li><li>\u7279\u70B9\uFF1A\u9AD8\u6548\u3001\u7075\u6D3B\u3001\u8FC5\u901F\u3001\u53EF\u9760</li></ul></li></ul><h2 id="\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u6027\u80FD" aria-hidden="true">#</a> \u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u6027\u80FD</h2><ul><li>\u901F\u7387\uFF0Cbit/s\uFF08\u6BD4\u7279\u6BCF\u79D2\uFF09 <ul><li>k(kilo) = 10^3 = \u5343</li><li>M(Mega) = 10^6 = \u5146</li><li>G(Giga) = 10^9 = \u5409</li><li>T(Tera) = 10^12 = \u592A</li><li>\u2026\u2026</li></ul></li><li>\u5E26\u5BBD\uFF0C\u5355\u4F4D\u65F6\u95F4\u5185\u67D0\u4FE1\u9053\u6240\u80FD\u901A\u8FC7\u7684\u6700\u9AD8\u6570\u636E\u7387</li><li>\u541E\u5410\u91CF\uFF0C\u5355\u4F4D\u65F6\u95F4\u5185\u901A\u8FC7\u67D0\u4E2A\u7F51\u7EDC\uFF08\u6216\u4FE1\u9053\u3001\u63A5\u53E3\uFF09\u7684\u5B9E\u9645\u7684\u6570\u636E\u91CF</li><li>\u65F6\u5EF6\uFF0C\u6570\u636E\uFF08\u4E00\u4E2A\u62A5\u6587\u6216\u5206\u7EC4\u3001\u751A\u81F3\u6BD4\u7279\uFF09\u4ECE\u7F51\u7EDC\uFF08\u6216\u94FE\u8DEF\uFF09\u7684\u4E00\u7AEF\u4F20\u9001\u5230\u53E6\u4E00\u7AEF\u6240\u9700\u7684\u65F6\u95F4\u3002 <ul><li>\u53D1\u9001\u65F6\u5EF6\u3002\u6570\u636E\u5E27\u957F\u5EA6\uFF08bit\uFF09/ \u53D1\u9001\u901F\u7387\uFF08bit/s\uFF09</li><li>\u4F20\u64AD\u65F6\u5EF6\u3002\u4FE1\u9053\u957F\u5EA6\uFF08m\uFF09 / \u7535\u78C1\u6CE2\u5728\u4FE1\u9053\u4E0A\u7684\u4F20\u64AD\u901F\u7387\uFF08m/s\uFF09</li><li>\u5904\u7406\u65F6\u5EF6\u3002\u8DEF\u7531\u5668\u6536\u5230\u5206\u7EC4\u65F6\uFF0C\u9700\u8981\u82B1\u8D39\u4E00\u5B9A\u65F6\u95F4\u8FDB\u884C\u5904\u7406</li><li>\u6392\u961F\u65F6\u5EF6\u3002 <ul><li>\u5206\u7EC4\u8FDB\u5165\u8DEF\u7531\u5668\u540E\uFF0C\u8981\u5148\u5728\u8F93\u5165\u961F\u5217\u6392\u961F\u7B49\u5F85\u5904\u7406\u3002</li><li>\u786E\u5B9A\u8F6C\u53D1\u63A5\u53E3\u540E\uFF0C\u8FD8\u5728\u8F93\u5165\u961F\u5217\u4E2D\u6392\u961F\u8F6C\u53D1\u3002</li></ul></li></ul></li></ul><h2 id="osi" tabindex="-1"><a class="header-anchor" href="#osi" aria-hidden="true">#</a> OSI</h2><p>OSI/RM\uFF08Open System Interconnection Reference Mode\uFF09\u5F00\u653E\u7CFB\u7EDF\u4E92\u8FDE\u57FA\u672C\u53C2\u8003\u6A21\u578B\uFF0C\u53EA\u8981\u9075\u5FAA\u6B64\u6807\u51C6\uFF0C\u4E00\u4E2A\u7CFB\u7EDF\u53EF\u4EE5\u4E0E\u4F4D\u4E8E\u8FD9\u4E2A\u4E16\u754C\u4E0A\u4EFB\u4F55\u4F4D\u7F6E\u3001\u4E5F\u9075\u5FAA OSI \u6807\u51C6\u7684\u5176\u5B83\u4EFB\u4F55\u7CFB\u7EDF\u8FDB\u884C\u901A\u4FE1\u3002</p><p>OSI \u7684\u5931\u8D25\u539F\u56E0\u70B9\uFF1A</p><ul><li>OSI \u7684\u4E13\u5BB6\u4EEC\u7F3A\u4E4F\u5B9E\u9645\u7ECF\u9A8C\uFF0C\u4ED6\u4EEC\u5728\u5B8C\u6210 OSI \u6807\u51C6\u65F6\u7F3A\u4E4F\u5546\u4E1A\u9A71\u52A8\u529B</li><li>OSI \u534F\u8BAE\u5B9E\u73B0\u8FC7\u5206\u590D\u6742\uFF0C\u800C\u4E14\u8FD0\u884C\u4F4E\u6548</li><li>OSI \u6807\u51C6\u7684\u5236\u5B9A\u5468\u671F\u8FC7\u957F\uFF0C\u4F7F\u5F97\u6309\u7167 OSI \u6807\u51C6\u751F\u4EA7\u7684\u8BBE\u5907\u65E0\u6CD5\u53CA\u65F6\u8FDB\u5165\u5E02\u573A</li><li>OSI \u6807\u51C6\u7684\u5C42\u6B21\u5212\u5206\u4E0D\u5408\u7406\uFF0C\u6709\u4E9B\u529F\u80FD\u5728\u591A\u4E2A\u5C42\u6B21\u4E2D\u91CD\u590D\u51FA\u73B0</li></ul><blockquote><p>\u6700\u5E7F\u6CDB\u5E94\u7528\u7684\u4E0D\u662F\u6CD5\u5F8B\u4E0A\u7684\u56FD\u9645\u6807\u51C6 OSI\uFF0C\u800C\u662F\u975E\u6807\u51C6\u7684 TCP/IP\u3002\u8FD9\u6837\uFF0CTCP/IP \u5E38\u88AB\u79F0\u4E3A\u4E8B\u5B9E\u4E0A\u7684\u56FD\u9645\u6807\u51C6</p></blockquote><h2 id="\u534F\u8BAE-\u7F51\u7EDC\u534F\u8BAE-\u4E09\u8981\u7D20" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE-\u7F51\u7EDC\u534F\u8BAE-\u4E09\u8981\u7D20" aria-hidden="true">#</a> \u534F\u8BAE\uFF08\u7F51\u7EDC\u534F\u8BAE\uFF09\u4E09\u8981\u7D20\uFF1A</h2><ul><li>\u8BED\u6CD5\u3002\u6570\u636E\u4E0E\u63A7\u5236\u4FE1\u606F\u7684\u7ED3\u6784\u6216\u683C\u5F0F</li><li>\u8BED\u610F\u3002\u53D1\u51FA\u4F55\u79CD\u63A7\u5236\u4FE1\u606F\uFF0C\u5B8C\u6210\u4F55\u79CD\u52A8\u4F5C\u4EE5\u53CA\u4F5C\u51FA\u4F55\u79CD\u54CD\u5E94\u3002</li><li>\u540C\u6B65\u3002\u4E8B\u4EF6\u5B9E\u73B0\u987A\u5E8F\u7684\u8BE6\u7EC6\u8BF4\u660E</li></ul><p>\u5206\u5C42\u8BBE\u8BA1\u7684\u4F18\u70B9\uFF1A</p><ul><li>\u5404\u5C42\u4E4B\u95F4\u662F\u72EC\u7ACB\u7684\u3002\u4EC5\u505A\u72EC\u7ACB\u7684\u4E8B\u60C5\uFF0C\u7EF4\u6301\u597D\u81EA\u8EAB\u7684\u63A5\u53E3\u5373\u53EF\uFF0C\u4E0D\u5173\u5FC3\u5176\u4ED6\u5C42\u3002</li><li>\u7075\u6D3B\u6027\u597D\u3002\u63A5\u53E3\u4E0D\u53D8\uFF0C\u5185\u5BB9\u53EF\u4EE5\u968F\u610F\u66FF\u6362</li><li>\u6613\u4E8E\u5B9E\u73B0\u4E0E\u7EF4\u62A4\u3002</li></ul><h3 id="osi-\u4E03\u5C42\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#osi-\u4E03\u5C42\u534F\u8BAE" aria-hidden="true">#</a> OSI \u4E03\u5C42\u534F\u8BAE</h3><ul><li>\u5E94\u7528\u5C42</li><li>\u8868\u793A\u5C42</li><li>\u4F1A\u8BDD\u5C42</li><li>\u8FD0\u8F93\u5C42</li><li>\u7F51\u7EDC\u5C42</li><li>\u94FE\u8DEF\u6570\u636E\u5C42</li><li>\u7269\u7406\u5C42</li></ul><h3 id="tcp-ip-\u56DB\u5C42\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#tcp-ip-\u56DB\u5C42\u534F\u8BAE" aria-hidden="true">#</a> TCP/IP \u56DB\u5C42\u534F\u8BAE</h3><ul><li>\u5E94\u7528\u5C42</li><li>\u8FD0\u8F93\u5C42\uFF08TCP\u3001UDP\uFF09</li><li>\u7F51\u9645\u5C42 IP</li><li>\u7F51\u7EDC\u63A5\u53E3\u5C42</li></ul><h3 id="\u4E94\u5C42\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4E94\u5C42\u534F\u8BAE" aria-hidden="true">#</a> \u4E94\u5C42\u534F\u8BAE</h3><ul><li>\u5E94\u7528\u5C42 <ul><li>\u57DF\u540D\u7CFB\u7EDF DNS</li><li>\u652F\u6301\u4E07\u7EF4\u7F51\u5E94\u7528\u7684 HTTP \u534F\u8BAE</li><li>\u652F\u6301\u7535\u5B50\u90AE\u4EF6\u7684 SMTP \u534F\u8BAE</li></ul></li><li>\u8FD0\u8F93\u5C42\uFF08\u6216\u4F20\u8F93\u5C42\uFF09 <ul><li>TCP\u3001UDP</li></ul></li><li>\u7F51\u7EDC\u5C42\uFF08\u6216\u7F51\u9645\u5C42\u3001IP \u5C42\uFF09 <ul><li>IP \u6570\u636E\u62A5\uFF08\u5373\u5206\u7EC4\uFF09</li></ul></li><li>\u6570\u636E\u94FE\u8DEF\u5C42 <ul><li>\u5E27\uFF08\u6216 MAC \u5E27\uFF09\u3002\u5C06 IP \u6570\u636E\u5305\u7EC4\u88C5\u6210\u5E27\uFF0C\u5305\u542B\u6570\u636E\u548C\u5FC5\u8981\u7684\u63A7\u5236\u4FE1\u606F\uFF08\u540C\u6B65\u4FE1\u606F\u3001\u5730\u5740\u4FE1\u606F\u3001\u5DEE\u9519\u4FE1\u606F\uFF09</li></ul></li><li>\u7269\u7406\u5C42 <ul><li>\u6570\u636E\u5355\u4F4D\u4E3A\u6BD4\u7279\uFF08bit\uFF09</li></ul></li></ul><p>\u5907\u6CE8\uFF1A\u8BBE\u5907\u53EF\u80FD\u53EA\u7528\u5230\u534F\u8BAE\u4E2D\u7684\u90E8\u5206\u5C42\uFF0C\u6BD4\u5982\u8DEF\u7531\u5668\u53EA\u7528\u7269\u7406\u5C42\u3001\u6570\u636E\u94FE\u8DEF\u5C42\u3001\u7F51\u7EDC\u5C42</p><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/network/concept.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var concept_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$8]]);
var concept_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": concept_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><p>\u8BA1\u7B97\u673A\u7F51\u7EDC</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/front/network/concept/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6982\u8FF0`);
      } else {
        return [
          vue.createTextVNode("\u6982\u8FF0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/front/network/2-link-layer/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6570\u636E\u94FE\u8DEF\u5C42`);
      } else {
        return [
          vue.createTextVNode("\u6570\u636E\u94FE\u8DEF\u5C42")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/front/network/3-network-layer/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7F51\u7EDC\u5C42`);
      } else {
        return [
          vue.createTextVNode("\u7F51\u7EDC\u5C42")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/front/network/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8FD0\u8F93\u5C42`);
      } else {
        return [
          vue.createTextVNode("\u8FD0\u8F93\u5C42")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/front/network/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7F51\u8DEF\u5C42`);
      } else {
        return [
          vue.createTextVNode("\u7F51\u8DEF\u5C42")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/network/index.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var index_html$9 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$7]]);
var index_html$a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$9
}, Symbol.toStringTag, { value: "Module" }));
var _imports_0 = "/project/xuqiu.png";
const _sfc_main$s = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTc0MzIxOA==&amp;mid=2247483685&amp;idx=1&amp;sn=9d6a1b8c33722c1f9c01f0eca47ff036&amp;chksm=ce992e38f9eea72e612e4236b1f6138d3a13a7458d4f88040fbac3e3a4941d99eaef575cb915&amp;token=3063493&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">\u9996\u5148\u53D1\u5E03\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><hr><p><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="\u9700\u6C42"></p><h1 id="\u9700\u6C42-demand-\u5728\u54EA\u91CC" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42-demand-\u5728\u54EA\u91CC" aria-hidden="true">#</a> \u9700\u6C42\uFF08Demand\uFF09\u5728\u54EA\u91CC</h1><h2 id="\u4EC0\u4E48\u662F\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u9700\u6C42" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u9700\u6C42</h2><p>\u9700\u6C42\u662F\u7531\u7528\u6237\u3001\u573A\u666F\u3001\u8BC9\u6C42\u3001\u4EFB\u52A1\u56DB\u90E8\u5206\u6784\u6210\u3002\u7B80\u5355\u7684\u8BF4\uFF0C\u67D0\u4EBA\u5728\u67D0\u65F6\u67D0\u523B\uFF0C\u67D0\u4E2A\u5730\u70B9\uFF0C\u505A\u4E86\u4EC0\u4E48\uFF0C\u83B7\u5F97\u4E86\u4EC0\u4E48\u76CA\u5904\uFF0C\u8FD9\u5C31\u662F\u9700\u6C42\u3002</p><p>\u6BD4\u5982\uFF1A<code>\u4E2D\u5B66\u751F\u9700\u8981\u81EA\u884C\u8F66\uFF0C\u7528\u4E8E\u4E0A\u4E0B\u5B66\u65F6\uFF0C\u5F80\u8FD4\u4E8E\u5B66\u6821\u3001\u5BB6\u5EAD\u4E4B\u95F4\u3002</code></p><h2 id="\u9700\u6C42\u5B58\u5728\u7684\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5B58\u5728\u7684\u610F\u4E49" aria-hidden="true">#</a> \u9700\u6C42\u5B58\u5728\u7684\u610F\u4E49</h2><p>\u9700\u6C42\u90FD\u662F\u6709\u76EE\u7684\u6EF4\uFF0C\u9700\u6C42\u90FD\u662F\u4E3A\u4E86\u89E3\u51B3\u4E00\u4E2A\u95EE\u9898\u3001\u6216\u4E00\u7C7B\u95EE\u9898\u800C\u63D0\u51FA\u7684\u3002\u9700\u6C42\u5B58\u5728\u7684\u540C\u65F6\uFF0C\u610F\u5473\u7740\u5C31\u6709\u4EFB\u52A1\u5B58\u5728\uFF0C\u4EFB\u52A1\u7684\u6267\u884C\u5219\u610F\u5473\u7740\u6210\u672C\uFF08\u65F6\u95F4\u3001\u4EBA\u529B\u3001\u91D1\u94B1\uFF09\u7684\u6D88\u8017\uFF0C\u5F53\u4ED8\u51FA\u5927\u4E8E\u635F\u8017\u7684\u65F6\u5019\uFF0C\u5219\u9700\u8981\u8003\u8651\u8FD9\u4E2A\u9700\u6C42\u662F\u5426\u6709\u5B58\u5728\u7684\u5FC5\u8981\u3002\u5F53\u7136\uFF0C\u82E5\u662F\u6709\u94B1\u4EFB\u6027\uFF0C\u53EF\u4EE5\u4E0D\u7528\u8003\u8651\u6210\u672C\u3002</p><p>\u8FD8\u662F\u4E0A\u6587\u7684\u4F8B\u5B50\uFF1A<code>\u4E2D\u5B66\u751F\u9700\u8981\u81EA\u884C\u8F66\uFF0C\u7528\u4E8E\u4E0A\u4E0B\u5B66\u65F6\uFF0C\u5F80\u8FD4\u4E8E\u5B66\u6821\u3001\u5BB6\u5EAD\u4E4B\u95F4\u3002</code></p><p>\u7B80\u5355\u7684\u5224\u65AD\u4E0B\uFF0C\u5728\u8FD9\u91CC\u7684\u6536\u76CA\u662F\uFF1A\u4E0A\u4E0B\u5B66\u4F7F\u7528\u65F6\u95F4\u7684\u51CF\u5C11\uFF0C\u6D88\u8017\uFF1A\u8D2D\u4E70\u81EA\u884C\u8F66\u3002</p><h2 id="\u8BC6\u522B\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u8BC6\u522B\u9700\u6C42" aria-hidden="true">#</a> \u8BC6\u522B\u9700\u6C42</h2><p>\u7EE7\u7EED\u56DE\u5230\u4E0A\u6587\u7684\u4F8B\u5B50\uFF1A<code>\u4E2D\u5B66\u751F\u9700\u8981\u81EA\u884C\u8F66\uFF0C\u7528\u4E8E\u4E0A\u4E0B\u5B66\u65F6\uFF0C\u5F80\u8FD4\u4E8E\u5B66\u6821\u3001\u5BB6\u5EAD\u4E4B\u95F4\u3002</code></p><p>\u5047\u8BBE\u4E00\u6BB5\u60C5\u666F\u6A21\u62DF\uFF1A</p><ul><li>\u4E2D\u5B66\u751F\uFF1A\u4E70\u4E00\u8F86\u81EA\u884C\u8F66</li><li>\u7236\u6BCD\uFF1A\u4E3A\u5565\u8981\u4E70</li><li>\u4E2D\u5B66\u751F\uFF1A\u4E0A\u4E0B\u5B66\u7528</li><li>\u7236\u6BCD\uFF1A\u4E8C\u5341\u516C\u91CC\u7684\u8DEF\u7A0B\u5462\uFF0C\u4E3A\u5565\u4E0D\u5750\u5730\u94C1\u4E86</li><li>\u4E2D\u5B66\u751F\uFF1A\u75AB\u60C5\u4E25\u91CD\uFF0C\u4EBA\u591A\u6BD4\u8F83\u5371\u9669</li><li>\u7236\u6BCD\uFF1A\u90A3\u5E26\u4E0A\u53E3\u7F69\u5440\uFF0C\u505A\u597D\u9632\u62A4\u5C31\u884C</li><li>\u4E2D\u5B66\u751F\uFF1A\u53E3\u7F69\u7684\u5E26\u5B50\u52D2\u7684\u8033\u6735\u75BC</li><li>\u7236\u6BCD\uFF1A\u90A3\u4E70\u957F\u5E26\u5B50\u7684\u53E3\u7F69</li><li>\u4E2D\u5B66\u751F\uFF1A\u4E70\u4E0D\u5230\u559C\u6B22\u7684\u7C7B\u578B\uFF0C\u4E0D\u4E70</li><li>\u7236\u6BCD\uFF1A...\u90A3\u5F00\u54B1\u5BB6\u7684\u8F66\u9001\u4F60\u4E0A\u4E0B\u5B66</li><li>\u4E2D\u5B66\u751F\uFF1A\u597D\u5440\u597D\u5440</li></ul><p>\u4ECE\u8FD9\u6BB5\u5BF9\u8BDD\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u9700\u6C42\u4E00\u76F4\u5728\u53D8\u52A8\uFF0C\u4ECE\u81EA\u884C\u8F66\u5230\u5730\u94C1\u3001\u5230\u53E3\u7F69\u3001\u5230\u81EA\u9A7E\u8F66\uFF0C\u9700\u6C42\u4E00\u76F4\u5728\u6F14\u53D8\u3002\u5F53\u7136\u8FD9\u91CC\u8BF4\u6210\u89E3\u51B3\u65B9\u6848\u5728\u53D8\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u6709\u65F6\u5019\u89E3\u51B3\u65B9\u6848\u4E0E\u9700\u6C42\u603B\u662F\u76F8\u4E92\u4F9D\u5B58\u3002</p><h2 id="\u63D0\u7EAF\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u63D0\u7EAF\u9700\u6C42" aria-hidden="true">#</a> \u63D0\u7EAF\u9700\u6C42</h2><p>\u9700\u6C42\u8BA8\u8BBA\u65F6\uFF0C\u7ECF\u5E38\u4F1A\u9762\u4E34\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li>\u5C06<code>\u89E3\u51B3\u65B9\u6848</code>\u5F53\u4F5C<code>\u9700\u6C42</code></li><li>\u5C06<code>\u8BA8\u8BBA</code>\u53D8\u4E3A\u4E86<code>\u4E89\u8FA9</code></li></ol><h3 id="\u9700\u6C42-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u9700\u6C42\uFF1F\u89E3\u51B3\u65B9\u6848\uFF1F</h3><p>\u7ECF\u5E38\u5728\u8BA8\u8BBA\u9700\u6C42\u65F6\uFF0C\u9700\u6C42\u7684\u63D0\u51FA\u8005\u4F1A\u4E0D\u7531\u81EA\u4E3B\u7684\u5C06\u89E3\u51B3\u65B9\u6848\u5F53\u4F5C\u9700\u6C42\u63D0\u51FA\u3002</p><p>\u7EE7\u7EED\u4E0A\u6587\u4E2D\u7684\u4F8B\u5B50\uFF1A<code>\u4E2D\u5B66\u751F\u9700\u8981\u81EA\u884C\u8F66\uFF0C\u7528\u4E8E\u4E0A\u4E0B\u5B66\u65F6\uFF0C\u5F80\u8FD4\u4E8E\u5B66\u6821\u3001\u5BB6\u5EAD\u4E4B\u95F4\u3002</code></p><p>\u4E2D\u5B66\u751F\u7ED9\u51FA\u7684\u9700\u6C42\u662F<code>\u9700\u8981\u81EA\u884C\u8F66</code>\uFF0C\u7ECF\u8FC7\u7236\u6BCD\u7684\u4E00\u756A\u8FFD\u95EE\uFF0C\u6700\u7EC8\u7ED9\u51FA\u7684\u9700\u6C42<code>\u7236\u6BCD\u5F00\u8F66\u63A5\u9001</code>\u3002\u8FFD\u95EE\u7684\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u53EF\u4EE5\u79F0\u4E4B\u4E3A<code>\u9700\u6C42\u7684\u9700\u6C42</code>\u3002</p><p><code>\u9700\u6C42\u7684\u9700\u6C42</code>\uFF0C\u9700\u6C42\u7684\u63D0\u51FA\u8005\uFF0C\u6709\u65F6\u5019\u5E76\u672A\u610F\u8BC6\u5230<code>\u539F\u59CB\u9700\u6C42</code>\u5DF2\u7ECF\u88AB<code>\u8F6C\u8BD1\u4E86\u4E00\u6B21\u3001\u6216\u591A\u6B21</code>\uFF0C\u6B64\u65F6\u63D0\u51FA\u7684\u9700\u6C42\u5176\u5B9E\u5DF2\u7ECF\u662F\u89E3\u51B3\u65B9\u6848\u4E86\u3002\u90A3\u8FD9\u65F6\u5019\u9700\u8981\u505A\u7684\u5C31\u662F\u4E00\u5C42\u4E00\u5C42\u7684\u6EAF\u672C\u6C42\u6E90\u3002\u50CF\u5265\u6D0B\u8471\u4E00\u6837\uFF0C\u627E\u5230<code>\u6700\u539F\u59CB\u7684\u8BC9\u6C42</code>\uFF0C\u8FDB\u800C\u7ED9\u51FA\u591A\u4E2A\u89E3\u51B3\u65B9\u6848\uFF0C\u7136\u540E\u9009\u51FA<code>\u6700\u4F18\u89E3</code>\u3002</p><h3 id="\u8BA8\u8BBA-\u4E89\u8FA9" tabindex="-1"><a class="header-anchor" href="#\u8BA8\u8BBA-\u4E89\u8FA9" aria-hidden="true">#</a> \u8BA8\u8BBA\uFF1F\u4E89\u8FA9\uFF1F</h3><p>\u9700\u6C42\u5206\u6790\u4E2D\u7ECF\u5E38\u63D0\u8D77<code>\u53BB\u4F2A\u5B58\u771F</code>\uFF0C\u90A3\u4EC0\u4E48\u662F<code>\u4F2A</code>\uFF0C\u4EC0\u4E48\u662F<code>\u771F</code>\uFF1F</p><p>\u5F53\u8BA8\u8BBA\u9700\u6C42\u65F6\uFF0C\u65E0\u8BBA\u662F<code>\u6709\u610F\u6216\u65E0\u610F</code>\u63D0\u5230<code>\u771F\u9700\u6C42</code>\u3001<code>\u5047\u9700\u6C42</code>\u65F6\uFF0C<code>\u9700\u6C42\u7684\u63D0\u51FA\u8005</code>\u4E0E<code>\u53C2\u4E0E\u8BA8\u8BBA\u7684\u4EBA</code>\uFF0C\u90FD\u4F1A\u4E0D\u7531\u81EA\u4E3B\u7684\u5C06\u6CE8\u610F\u529B\u96C6\u4E2D\u5728<code>\u771F\u4E0E\u5047</code>\u7684<code>\u8FA9\u9A73</code>\u4E2D\u3002\u6CE8\u610F\u8FD9\u91CC\u7684\u7528\u8BCD\u662F<code>\u8FA9\u9A73</code>\uFF0C\u610F\u5473\u7740\u662F\u5728<code>\u5E26\u7740\u60C5\u7EEA</code>\u53BB<code>\u4E89\u8FA9</code>\u81EA\u5DF1\u7684\u89C2\u70B9\uFF0C\u6B64\u65F6\u7684<code>\u8BA8\u8BBA\u7126\u70B9</code>\u5DF2\u7ECF\u4ECE<code>\u9700\u6C42\u8BC6\u522B</code>\u8F6C\u53D8\u4E3A<code>\u4E2A\u4EBA\u5BF9\u4E0E\u9519</code>\u7684<code>\u4E89\u8FA9</code>\u3002\u8FD9\u5B8C\u5168\u662F\u4E00\u6B21\u7CDF\u7CD5\u7684\u6C9F\u901A\uFF0C\u5931\u8D25\u7684\u8BA8\u8BBA\u3002</p><p>\u9700\u6C42\u8BA8\u8BBA\u65F6\uFF0C\u53C2\u4E0E\u8BA8\u8BBA\u7684\u4EBA\uFF0C\u5982\u4F55\u6B63\u786E\u7684\u5904\u7406\u8FD9\u79CD\u95EE\u9898\u5462\uFF1F</p><ol><li>\u7B2C\u4E00\u6B65\uFF0C\u901A\u8FC7<code>\u9700\u6C42\u7684\u9700\u6C42</code>\u7684\u65B9\u5F0F\uFF0C<code>\u5C3D\u53EF\u80FD\u7684</code>\u7406\u89E3<code>\u9700\u6C42\u63D0\u51FA\u8005\u6700\u521D\u7684\u8BC9\u6C42</code>\uFF0C\u5C06\u6CE8\u610F\u529B\u96C6\u4E2D\u5728\u8BC9\u6C42\uFF0C\u800C\u4E0D\u662F\u89E3\u51B3\u65B9\u6848\u4E0A</li><li>\u7136\u540E\uFF0C\u4ECE\u573A\u666F\u51FA\u53D1\uFF0C\u63D0\u51FA\u4E0D\u540C\u7684\u89E3\u51B3\u65B9\u6848</li><li>\u6700\u7EC8\uFF0C\u518D\u7528\u6BCF\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF0C\u53BB\u9A8C\u8BC1\u5404\u79CD\u573A\u666F\uFF0C\u627E\u51FA\u6700\u4F18\u89E3</li></ol><blockquote><p>\u5907\u6CE8\uFF1A\u9700\u6C42\u7684\u9700\u6C42\uFF0C\u4F7F\u7528\u8FFD\u95EE\u7684\u65B9\u5F0F\u83B7\u53D6\u4FE1\u606F\uFF0C\u8FD9\u4E00\u8FC7\u7A0B\u7C7B\u4F3C\u4E8E\u627E\u832C\uFF0C\u5C3D\u91CF\u5FC3\u5E73\u6C14\u548C</p></blockquote><h2 id="\u9610\u660E\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9610\u660E\u9700\u6C42" aria-hidden="true">#</a> \u9610\u660E\u9700\u6C42</h2><p>\u5728\u63D0\u51FA\u4E00\u4E2A\u9700\u6C42\u65F6\uFF0C\u5982\u4F55\u660E\u786E\u7684\u9610\u8FF0\u4E00\u4E2A\u9700\u6C42\u5462\uFF1F\u8BA9\u542C\u4F17\u80FD\u591F\u6B63\u786E\u7684\u7406\u89E3\u5230\u521D\u59CB\u7684\u8BC9\u6C42\uFF0C\u800C\u4E0D\u662F\u96C6\u4E2D\u5728\u65B9\u6848\u7684\u8BA8\u8BBA\u4E0A\u3002</p><p>\u7EE7\u7EED\u4E0A\u6587\u7684\u4F8B\u5B50\uFF1A<code>\u4E2D\u5B66\u751F\u9700\u8981\u81EA\u884C\u8F66\uFF0C\u7528\u4E8E\u4E0A\u4E0B\u5B66\u65F6\uFF0C\u5F80\u8FD4\u4E8E\u5B66\u6821\u3001\u5BB6\u5EAD\u4E4B\u95F4\u3002</code></p><p>\u901A\u5E38\u62FF\u5230\u4E00\u4E2A\u8FD9\u6837\u7684\u9700\u6C42\u65F6\uFF0C\u5927\u5BB6\u7684\u7B2C\u4E00\u53CD\u5E94\u662F\uFF0C\u8981\u4E70\u81EA\u884C\u8F66\u5440\uFF0C\u90A3\u5C31\u7ED9\u51FA\u4E86\u66F4\u660E\u786E\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6BD4\u5982\uFF1A\u81EA\u884C\u8F66\u7684\u54C1\u724C\u3001\u81EA\u884C\u8F66\u7684\u989C\u8272\u3001\u81EA\u884C\u8F66\u7684\u5C3A\u5BF8\uFF08\u5F53\u7136\u6211\u4E5F\u5E38\u5E38\u8FDB\u5165\u5230\u8FD9\u6837\u7684\u8BEF\u533A\uFF09\u3002\u5F53\u7136\uFF0C\u4E5F\u6709\u8111\u888B\u7075\u6D3B\u7684\u4EBA\u4F1A\u60F3\u5230\uFF0C\u4E0D\u8981\u81EA\u884C\u8F66\uFF0C\u4E70\u4E2A\u7535\u52A8\u8F66\u662F\u4E0D\u662F\u66F4\u597D\u5462\uFF1F\u8FD9\u5C31\u662F\u5F88\u660E\u663E\u7684\u5C06\u89E3\u51B3\u65B9\u6848\u5F53\u9700\u6C42\uFF0C\u5F15\u53D1\u7684\u8BEF\u533A\u3002\u90A3\u5982\u4F55\u907F\u514D\u8D70\u51FA\u8FD9\u6837\u7684\u8BEF\u5BFC\u5462\uFF1F</p><p>\u9700\u6C42\u7684\u63D0\u51FA\u8005\u627F\u62C5\u7740\u5F88\u91CD\u8981\u7684\u8D23\u4EFB\uFF0C\u5F53\u9700\u6C42\u63D0\u51FA\u8005\u63D0\u51FA\u89E3\u51B3\u65B9\u6848\u65F6\uFF0C\u53C2\u4E0E\u8BA8\u8BBA\u7684\u4EBA\uFF08\u6216\u8005\u4EFB\u52A1\u6267\u884C\u8005\uFF09\u4F1A\u4E0D\u7531\u81EA\u4E3B\u7684\u8003\u8651\u65B9\u6848\u7684\u5B9E\u884C\u6027\uFF0C\u800C\u4E0D\u662F\u4E3B\u52A8\u7684\u610F\u8BC6\u5230\u521D\u59CB\u8BC9\u6C42\u3002\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u9700\u6C42\u63D0\u51FA\u8005\uFF0C\u80FD\u591F\u660E\u786E\u7684\u6307\u51FA\uFF1A</p><ol><li>\u63D0\u51FA\u8BC9\u6C42\u65F6\u7684\u573A\u666F\u662F\u4EC0\u4E48\uFF1F</li><li>\u63D0\u51FA\u89E3\u51B3\u65B9\u6848\u7684\u521D\u8877\u662F\u662F\u4EC0\u4E48\uFF1F</li><li>\u4F7F\u53C2\u4E0E\u8005\u80FD\u4F53\u4F1A\u5230\u9700\u6C42\u63D0\u51FA\u65F6\u7684\u51FA\u53D1\u70B9\u662F\u4EC0\u4E48\u3002</li><li>\u6700\u540E\u518D\u7ED9\u51FA\u81EA\u5DF1\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u629B\u7816\u5F15\u7389</li></ol><p>\u7EE7\u7EED\u4E0A\u6587\u7684\u4F8B\u5B50\uFF1A<code>\u4E2D\u5B66\u751F\u9700\u8981\u81EA\u884C\u8F66\uFF0C\u7528\u4E8E\u4E0A\u4E0B\u5B66\u65F6\uFF0C\u5F80\u8FD4\u4E8E\u5B66\u6821\u3001\u5BB6\u5EAD\u4E4B\u95F4\u3002</code>\u548B\u773C\u4E00\u770B\uFF0C\u89C9\u5F97\u8FD9\u662F\u4E00\u4E2A\u5F88\u660E\u786E\u7684\u9700\u6C42\uFF1A\u5C31\u662F\u9A91\u8F66\u4E0A\u4E0B\u5B66\u3002\u4F46\u662F</p><p>\u5B83\u7684\u573A\u666F\u662F\uFF1A</p><ol><li>\u5BB6\u8DDD\u79BB\u5B66\u6821\u4E8C\u5341\u516C\u91CC</li><li>\u5730\u94C1\u4EBA\u591A</li><li>\u5E26\u53E3\u7F69\u4E45\u4E86\u8033\u6735\u75BC</li></ol><p>\u5B83\u63D0\u51FA\u9700\u6C42\u7684\u521D\u8877\u662F\uFF1A</p><ol><li>\u66F4\u8212\u9002\u7684\u4E0A\u4E0B\u5B66</li></ol><p>\u6700\u7EC8\u7ED9\u51FA\u7684\u89E3\u51B3\u65B9\u6848\u662F\uFF1A</p><ol><li>\u957F\u5E26\u5B50\u7684\u53E3\u7F69 + \u5730\u94C1</li><li>\u7236\u6BCD\u5F00\u8F66\u63A5\u9001\u4E0A\u4E0B\u5B66</li></ol><p>\u4F60\u4F1A\u53D1\u73B0\uFF0C\u7ECF\u8FC7\u7236\u6BCD\u6709<code>\u5F15\u5BFC\u6027\u7684\u8BA8\u8BBA</code>\uFF0C\u9700\u6C42\u4E3A\uFF1A\u4E0A\u4E0B\u5B66\u7684\u4EA4\u901A\u65B9\u5F0F\u3002\u53EF\u80FD\u7684\u89E3\u51B3\u65B9\u6848\uFF1A\u81EA\u884C\u8F66\u3001\u5730\u94C1\u3001\u5F00\u8F66\u63A5\u9001\u3002\u8FD9\u91CC\u7684\u7236\u6BCD\u5F88\u6709\u667A\u6167\uFF0C\u80FD\u591F\u5C06\u95EE\u9898\u805A\u7126\u5728\u539F\u59CB\u8BC9\u6C42\u4E0A\uFF0C\u8FDB\u800C\u7ED9\u51FA\u591A\u4E2A\u89E3\u51B3\u65B9\u6848\uFF0C\u800C\u6CA1\u6709\u5728\u8BDD\u9898\u5F00\u59CB\u65F6\uFF0C\u5728\u81EA\u884C\u8F66\u7684\u95EE\u9898\u4E0A\u8FDB\u884C\u8BA8\u8BBA\u3002</p><h2 id="\u9700\u6C42\u5728\u4F55\u65F6\u4EA7\u751F" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5728\u4F55\u65F6\u4EA7\u751F" aria-hidden="true">#</a> \u9700\u6C42\u5728\u4F55\u65F6\u4EA7\u751F</h2><p>\u6309\u7167 PDCA \u5FAA\u73AF\u6A21\u578B\uFF0C\u5728\u8BA1\u5212\u3001\u6267\u884C\u3001\u68C0\u67E5\u3001\u5904\u7406\u7684\u6BCF\u4E2A\u9636\u6BB5\u90FD\u4F1A\u4EA7\u751F\u9700\u6C42\u3002\u8981\u76F8\u4FE1\u603B\u6709\u610F\u5916\u53D1\u751F\uFF0C\u6709\u610F\u5916\u5C31\u6709\u9700\u6C42\u3002\u6216\u8005\u8BF4\uFF0C\u4E0D\u540C\u7684\u573A\u666F\u4E0B\uFF0C\u5C31\u5B58\u5728\u4E0D\u540C\u7684\u9700\u6C42\u3002\u6BD4\u5982\u5728\u4E0A\u6587\u4E2D\uFF0C\u5B9A\u4E0B<code>\u7236\u6BCD\u5F00\u8F66\u63A5\u9001\u4E0A\u4E0B\u5B66</code>\u7684\u8BA1\u5212\u3002</p><p>\u5728\u6267\u884C\u9636\u6BB5\u53EF\u80FD\u7684\u573A\u666F\uFF1A</p><ul><li>\u7535\u52A8\u8F66\u3001\u655E\u7BF7\u8F66\u3001\u8F7F\u8F66\uFF0C\u5F00\u54EA\u4E00\u8F86\u5462\uFF1F</li><li>\u51FA\u884C\u7684\u8DEF\u4E0A\u51E0\u70B9\u949F\u51FA\u95E8\uFF1F\u4EA4\u901A\u987A\u7545\u5417\uFF1F</li><li>\u8F66\u5B50\u5728\u884C\u9A76\u9014\u4E2D\u51FA\u73B0\u4E86\u6545\u969C\u4E86\uFF0C\u600E\u4E48\u529E\u5462\uFF1F</li></ul><p>\u8FD9\u4E9B\u573A\u666F\u7684\u679A\u4E3E\uFF0C\u53EF\u80FD\u7ED9\u4EBA\u4E00\u79CD\u6709\u70B9\u675E\u4EBA\u5FE7\u5929\u7684\u611F\u89C9\uFF0C\u6216\u8005\u5728\u627E\u832C\u7684\u610F\u601D\u3002\u4F46\u662F\uFF0C\u8FD9\u662F\u5728\u505A\u8BBE\u8BA1\u65F6\uFF0C\u5FC5\u987B\u8003\u8651\u7684\u95EE\u9898\u3002\u5148\u63D0\u51FA\u573A\u666F\uFF0C\u518D\u6839\u636E\u73B0\u6709\u7684<code>\u8D44\u6E90\u80FD\u529B</code>\u4F5C\u51FA<code>\u53D6\u820D</code>\u3002</p><p>\u8FD9\u91CC\u8FD8\u662F\u8981\u5F3A\u8C03\u4E00\u4E0B\uFF0C\u9700\u6C42\u662F\u6709\u6210\u672C\u7684\u3002\u5728\u9700\u6C42\u8BA8\u8BBA\u9636\u6BB5\uFF0C\u5C3D\u53EF\u80FD\u7684\u679A\u4E3E\u6240\u6709\u7684\u3001\u53EF\u80FD\u5B58\u5728\u7684\u573A\u666F\uFF0C\u63D0\u7EAF\u51FA\u6700\u539F\u59CB\u7684\u8BC9\u6C42\uFF0C\u518D\u7528\u89E3\u51B3\u65B9\u6848\uFF0C\u4E00\u4E00\u9A8C\u8BC1\u573A\u666F\u3002\u5B81\u53EF\u524D\u671F\u9EBB\u70E6\u4E00\u70B9\uFF0C\u907F\u514D\u540E\u671F\u505A\u65E0\u7528\u529F\uFF0C</p><h2 id="\u4EC0\u4E48\u53D1\u751F\u53D8\u5316\u4E86" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u53D1\u751F\u53D8\u5316\u4E86" aria-hidden="true">#</a> \u4EC0\u4E48\u53D1\u751F\u53D8\u5316\u4E86</h2><p>\u4E92\u8054\u7F51\u516C\u53F8\u7ECF\u5E38\u4F1A\u63D0\u5230<code>\u62E5\u62B1\u53D8\u5316</code>\uFF0C\u90A3\u4E48\u53D8\u5316\u7684\u4E3B\u4F53\u662F\u4EC0\u4E48\u5462\uFF1F\u662F\u9700\u6C42\u53D8\u4E86\uFF1F\u8FD8\u662F\u89E3\u51B3\u65B9\u6848\u53D8\u4E86\u5462\uFF1F</p><h3 id="\u9700\u6C42\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u53D8\u5316" aria-hidden="true">#</a> \u9700\u6C42\u53D8\u5316</h3><p>\u9700\u6C42\u8BA8\u8BBA\u662F\u9879\u76EE\u7684\u8D77\u59CB\u70B9\uFF0C\u9700\u6C42\u8BA8\u8BBA\u7684\u7ED3\u679C\uFF0C\u5BFC\u81F4\u4E86\u6574\u4E2A\u8BA1\u5212\u7684\u540E\u7EED\u6267\u884C\u3002\u5018\u82E5\u662F\u9700\u6C42\u672A\u5B9A\u4E49\u6E05\u695A\u3001\u672A\u7406\u89E3\u5230\u4F4D\uFF0C\u540E\u7EED\u7684\u4E00\u5207\u7684\u8BA1\u5212\u90FD\u662F\u778E\u641E\u3002\u8FD9\u79CD\u7684\u53D8\u5316\uFF0C\u5BF9\u6267\u884C\u8BA1\u5212\u7684\u4EBA\u5458\u6765\u8BB2\uFF0C\u771F\u5FC3\u4E0D\u60F3\u62E5\u62B1\u3002</p><h3 id="\u9700\u6C42\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u8FED\u4EE3" aria-hidden="true">#</a> \u9700\u6C42\u8FED\u4EE3</h3><p>\u8F6F\u4EF6\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u6C42\u662F\u8D2F\u7A7F\u6574\u4E2A\u6D41\u7A0B\u7684\u3002\u9700\u6C42\u5206\u6790\u3001\u6982\u8981\u8BBE\u8BA1\u3001\u8BE6\u7EC6\u8BBE\u8BA1\u3001\u7F16\u7801\u3001\u6D4B\u8BD5\uFF0C\u5728\u4E0D\u540C\u7684\u65F6\u671F\u3001\u4E0D\u540C\u7684\u9636\u6BB5\u5B58\u5728\u4E0D\u540C\u7684\u9700\u6C42\u3002\u9700\u6C42\u4E0D\u662F\u4E00\u6210\u4E0D\u53D8\u7684\uFF0C\u5728\u4E0D\u540C\u7684\u9636\u6BB5\u3001\u573A\u666F\u4E0B\uFF0C\u9700\u6C42\u662F\u9700\u8981\u6301\u7EED\u8FED\u4EE3\u7684\u3002</p><p>\u8FED\u4EE3\u4E0E\u53D8\u5316\u7684\u6027\u8D28\u662F\u4E0D\u540C\u7684\uFF0C\u8FED\u4EE3\u662F\u968F\u7740\u5BF9\u9700\u6C42\u7684\u7406\u89E3\u52A0\u6DF1\u3001\u573A\u666F\u7684\u6316\u6398\u4E0E\u8F6C\u6362\uFF0C\u63D0\u51FA\u65B0\u7684\u66F4\u7EC6\u81F4\u7684\u9700\u6C42\uFF1B\u53D8\u5316\u662F\u56E0\u4E3A\u9700\u6C42\u5206\u6790\u9636\u6BB5\uFF0C\u672A\u80FD\u5B9A\u4E49\u51FA\u6700\u539F\u59CB\u7684\u9700\u6C42\uFF0C\u5BFC\u81F4\u8BA1\u5212\u5B9E\u65BD\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4E0E\u6700\u7EC8\u7684\u76EE\u7684\u53D1\u751F\u504F\u79BB\u800C\u4E0D\u5F97\u4E0D\u505A\u7684\u53D8\u66F4\u3002</p><h3 id="\u8BA1\u5212\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u5212\u53D8\u66F4" aria-hidden="true">#</a> \u8BA1\u5212\u53D8\u66F4</h3><p><code>\u573A\u666F\uFF01\u573A\u666F\uFF01\u573A\u666F\uFF01</code></p><p>\u573A\u666F\u5F88\u91CD\u8981\uFF0C\u53EA\u6709\u5F53\u89E3\u51B3\u65B9\u6848\u8986\u76D6\u4E86\u6240\u6709\u7684\u573A\u666F\uFF0C\u4F5C\u51FA\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u624D\u53EF\u80FD\u5C3D\u5584\u5C3D\u7F8E\u3002\u5341\u5168\u5341\u7F8E\u662F\u4E0D\u80FD\u6EF4\uFF0C\u53CD\u6B63\u6211\u662F\u6CA1\u9047\u89C1\u8FC7\u3002\u5F53\u8BBE\u8BA1\u5B58\u5728\u7F3A\u9677\u65F6\uFF0C\u65F6\u65F6\u523B\u523B\u90FD\u4F1A\u5B58\u5728\u53D8\u5316\u3002\u6240\u4EE5\u8BF4\uFF0C\u573A\u666F\u5F88\u91CD\u8981\u3002\u4E0D\u8981\u6015\u9EBB\u70E6\uFF0C\u590D\u6742\u573A\u666F\u4E0B\uFF0C\u65F6\u5E8F\u56FE\u3001\u6D41\u7A0B\u56FE\u80FD\u591F\u5F88\u597D\u534F\u52A9\u68B3\u7406\u601D\u8DEF\u3002</p><h2 id="\u4F1A\u8BB2\u8BDD\u3001\u80FD\u542C\u61C2" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u8BB2\u8BDD\u3001\u80FD\u542C\u61C2" aria-hidden="true">#</a> \u4F1A\u8BB2\u8BDD\u3001\u80FD\u542C\u61C2</h2><p>\u6240\u6709\u7684\u9700\u6C42\u3001\u8BA1\u5212\u3001\u6267\u884C\u90FD\u662F\u7531\u4EBA\u6765\u5B8C\u6210\u7684\uFF0C<code>\u6C9F\u901A\u975E\u5E38\u91CD\u8981</code>\uFF0C\u6C9F\u901A\u8981\u65F6\u8981\u80FD\u591F<code>\u542C\u61C2\u5BF9\u65B9\u7684\u8BDD\u3001\u80FD\u591F\u91CD\u8FF0\u5BF9\u65B9\u7684\u542B\u4E49</code>\uFF0C\u8981\u6709\u8010\u5FC3\uFF0C\u4E0D\u8981\u70E6\u8E81\u3002</p><p>\u9879\u76EE\u5F00\u53D1\u7684\u8FC7\u7A0B\uFF0C\u51FA\u73B0 BUG \u65F6\uFF0C\u901A\u5E38\u78B0\u89C1\uFF0C<code>A \u5BF9 B \u8BB2\u6211\u4EE5\u4E3A\u4F60\u662F\u90A3\u4E2A\u610F\u601D</code>\uFF0C<code>B \u5BF9 A \u8BB2\u4ECE\u6765\u6CA1\u90A3\u4E2A\u610F\u601D</code>\uFF0C\u63A5\u4E0B\u6765\u5C31\u7B49\u7740\u52A0\u73ED\u5427...</p><p>\u8FD9\u91CC\u5F88\u91CD\u8981\u7684\u4E00\u70B9\uFF0C<code>\u628A\u8BDD\u8BB2\u6E05\u695A\u3001\u628A\u8BDD\u8BB2\u6E05\u695A\u3001\u628A\u8BDD\u8BB2\u6E05\u695A</code>\uFF0C\u540C\u65F6\uFF0C<code>\u628A\u8BDD\u542C\u61C2\u4E86\uFF0C\u628A\u8BDD\u542C\u61C2\u4E86\uFF0C\u628A\u8BDD\u542C\u61C2\u4E86</code>\u3002\u4F60\u8BF4\u4E86\u4E00\u53E5\u8BDD\uFF0C\u4E0D\u4EE3\u8868 B \u7406\u89E3\u4E86\u8FD9\u53E5\u8BDD\uFF0C\u5373\u4FBF\u7406\u89E3\u4E86\uFF0C\u4E5F\u4E0D\u4EE3\u8868 B \u7406\u89E3\u7684\u542B\u4E49\u4E0E\u4F60\u8981\u8868\u8FBE\u7684\u662F\u540C\u4E00\u4E2A\u542B\u4E49\u3002\u8FD9\u5927\u6982\u5C31\u662F\u5E38\u8BF4\u7684\u9A74\u5507\u4E0D\u5BF9\u9A6C\u5634\uFF0C\u795E\u5947\u7684\u6C9F\u901A\u3002</p><p>\u5F00\u53D1\u4EBA\u5458\u90FD\u8BA8\u538C\u5199\u6587\u6863\uFF0C\u4F46\u5E26\u9886\u56E2\u961F\u65F6\uFF0C\u9700\u8981\u4F1A\u5199\u6587\u6863\uFF0C\u9700\u6C42\u6587\u6863\u3001\u8BBE\u8BA1\u6587\u6863\u3001\u63A5\u53E3\u6587\u6863\u7B49\u7B49\u3002\u8BED\u8A00\u535A\u5927\u7CBE\u6DF1\uFF0C\u4E00\u4E2A\u8BCD\u3001\u4E00\u53E5\u8BDD\u53EF\u4EE5\u88AB\u7406\u89E3\u4E3A\u4E0D\u540C\u7684\u542B\u4E49\uFF0C\u6700\u597D\u8FD8\u662F\u7559\u4E0B\u6587\u5B57\u8F85\u52A9\u8BF4\u660E\uFF0C\u907F\u514D\u6B67\u4E49\u3002</p><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/project/demand.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var demand_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$6]]);
var demand_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": demand_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p><strong>\u9879\u76EE\u7BA1\u7406</strong></p><p>\u6D41\u7A0B\uFF1A</p><ul><li>\u83B7\u53D6\u9700\u6C42</li><li>\u63D0\u7EAF\u9700\u6C42\u3002\u63D0\u7EAF\u672C\u8D28\u9700\u6C42\u3002</li><li>\u679A\u4E3E\u573A\u666F\u3002\u679A\u4E3E\u6240\u6709\u53EF\u80FD\u5B58\u5728\u573A\u666F\uFF0C\u6709\u65F6\uFF0C\u573A\u666F\u4E0E\u573A\u666F\u4E4B\u95F4\u53EF\u80FD\u4E92\u6709\u8054\u7CFB\u3002</li><li>\u4EFB\u52A1\u68B3\u7406\u3002\u6309\u7167\u573A\u666F\uFF0C\u68B3\u7406\u53EF\u80FD\u5B58\u5728\u7684\u4EFB\u52A1\u3002</li><li>\u4EFB\u52A1\u5BA3\u8BB2\u3002\u5BA3\u8BB2\u4EFB\u52A1\u9700\u6C42\uFF0C\u786E\u4FDD\u6BCF\u4E2A\u4EBA\u7406\u89E3\u5927\u81F4\u7684\u4EFB\u52A1\u9700\u6C42\uFF0C\u540C\u65F6\u68C0\u67E5\u4EFB\u52A1\u662F\u5426\u5408\u7406\u3002 <ul><li>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5BA3\u8BB2\u65F6\uFF0C\u4E0D\u662F\u6BCF\u4E2A\u4EBA\u90FD\u5728\u8BA4\u8BA4\u771F\u771F\uFF0C\u4E00\u5B57\u4E0D\u62C9\u7684\u542C\u3002\u5373\u4FBF\u518D\u542C\uFF0C\u542C\u5230\u7684\u610F\u601D\u4E5F\u53EF\u80FD\u4E0E\u4F60\u8BF4\u7684\u542B\u4E49\u5927\u76F8\u5F84\u5EAD\u3002</li></ul></li><li>UML \u7684\u91CD\u8981\u6027\u3002\u56E0\u4E3A\u542C\u548C\u8BB2\u7684\u4EBA\uFF0C\u7406\u89E3\u53EF\u80FD\u662F\u4E0D\u540C\uFF0C\u4EC5\u9760\u8BF4\u4E0D\u591F\u3002\u9700\u8981 UML\u3001\u4E3A\u4EE3\u7801\u7B49\u8FDB\u4E00\u6B65\u8BF4\u660E\u3002</li><li>\u4EFB\u52A1\u7EC6\u5316\u3002\u5C06\u4EFB\u52A1\u843D\u5730\uFF0C\u53D8\u4E3A\u53EF\u5B9E\u65BD\u7684\u4EFB\u52A1\u3002 <ul><li>\u4EFB\u52A1\u5206\u5C42\u3002\u7C7B\u6BD4\u7F51\u7EDC\u7684 OSI \u6A21\u578B\uFF0C\u5212\u5206\u6BCF\u4E00\u5C42\u5E94\u8BE5\u505A\u7684\u4E8B\u60C5\u3002</li><li>\u5C42\u7EA7\u62C6\u5206\u3002\u4E3A\u6BCF\u4E00\u5C42\u7684\u62C6\u5206\u5355\u4E2A\u5C0F\u4EFB\u52A1\u3002</li><li>\u4EFB\u52A1\u6D41\u7A0B\u8BF4\u660E\u3002\u8BE6\u7EC6\u8BF4\u660E\u5355\u4E2A\u4EFB\u52A1\u7684\u5177\u4F53\u5B9E\u65BD\u8FC7\u7A0B\u3002</li></ul></li><li>\u4EFB\u52A1\u9A8C\u6536\u3002\u786E\u4FDD\u6B63\u786E\u5B8C\u6210\u4EFB\u52A1 <ul><li>\u6309\u7167\u573A\u666F\u9A8C\u6536\u4EFB\u52A1\u8F93\u51FA</li></ul></li><li>\u4EFB\u52A1\u6536\u5C3E\u3002\u5904\u7406\u9A8C\u6536\u95EE\u9898\u3002</li></ul><p>PDCA \u5FAA\u73AF\u3002Plan\u3001Do\u3001Check\u3001Act\uFF08\u5904\u7406\uFF09</p><p>\u4E07\u4E08\u6DF1\u6F6D\u7EC8\u6709\u5E95\uFF0C\u53EA\u6709\u4EBA\u5FC3\u4E0D\u53EF\u91CF\uFF0C\u864E\u8C79\u4E0D\u582A\u9A91\uFF0C\u4EBA\u5FC3\u9694\u809A\u76AE</p><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/project/index.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var index_html$7 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$5]]);
var index_html$8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="promise-\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#promise-\u5E76\u53D1" aria-hidden="true">#</a> Promise \u5E76\u53D1</h1><h2 id="\u6ED1\u52A8\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6ED1\u52A8\u7A97\u53E3" aria-hidden="true">#</a> \u6ED1\u52A8\u7A97\u53E3</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">r</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token parameter">limit<span class="token punctuation">,</span> params<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">ge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      num<span class="token operator">--</span><span class="token punctuation">;</span>
      values<span class="token punctuation">[</span>p<span class="token punctuation">.</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">;</span>

      <span class="token keyword">const</span> el <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      el <span class="token operator">?</span> <span class="token function">ge</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span>

      num <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token function">r</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> limit<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">ge</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">]</span><span class="token punctuation">,</span> log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/promise/pool.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var pool_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$4]]);
var pool_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pool_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u4EE3\u7801\u7247\u6BB5</h1><p>class</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TPlainObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../typings&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Size<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> TPlainObject <span class="token operator">|</span> TPlainObject<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span>
  <span class="token keyword">implements</span> <span class="token class-name">TSizeAction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">,</span> TSizeAction2
<span class="token punctuation">{</span>
  data<span class="token operator">!</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> v<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">call method size</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> len<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TSizeConstructor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> TSizeAction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> TSizeAction2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">TSizeAction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token function-variable function">length</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">TSizeAction2</span> <span class="token punctuation">{</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createSiz</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>c<span class="token operator">:</span> TSizeConstructor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> v<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">c</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">createSiz</span><span class="token punctuation">(</span>Size<span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/ts/code.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var code_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$3]]);
var code_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": code_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="ts-\u7C7B\u578B\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#ts-\u7C7B\u578B\u7F16\u7A0B" aria-hidden="true">#</a> TS \u7C7B\u578B\u7F16\u7A0B</h1><p>\u6797\u4E0D\u6E21 \u6398\u91D1/\u77E5\u4E4E</p><p>\u7D22\u5F15\u7C7B\u578B</p><p>\u7D22\u5F15\u7B7E\u540D\u7C7B\u578B interface Foo{ [key: string]: any; }</p><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/front/ts/type.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var type_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$2]]);
var type_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": type_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html$1
}, Symbol.toStringTag, { value: "Module" }));
const data$l = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Welcome",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "lang": "zh-CN",
    "title": "Welcome",
    "description": "Money",
    "features": [
      {
        "title": "\u57FA\u7840",
        "details": "\u4E00\u4E9B\u8BA1\u7B97\u673A\u57FA\u7840\u77E5\u8BC6"
      },
      {
        "title": "\u5F00\u53D1",
        "details": "\u4E00\u4E9B\u5F00\u53D1\u6280\u5DE7"
      },
      {
        "title": "\u5DE5\u5177",
        "details": "\u4E00\u4E9B\u6709\u7528\u7684\u5C0F\u5DE5\u5177"
      }
    ],
    "footer": "MIT Licensed | Copyright \xA9 2022-present swlws"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "readme.md"
};
var index_html$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$l
}, Symbol.toStringTag, { value: "Module" }));
const data$k = {
  "key": "v-7e25fb5f",
  "path": "/front/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "front/readme.md"
};
var index_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$k
}, Symbol.toStringTag, { value: "Module" }));
const data$j = {
  "key": "v-66a4a9c9",
  "path": "/front/tab-message.html",
  "title": "Web \u95F4\u901A\u4FE1",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4E00\u3001\u573A\u666F",
      "slug": "\u4E00\u3001\u573A\u666F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B Tab \u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F",
      "slug": "\u4E8C\u3001\u540C\u6E90\u7F51\u7AD9\u4E0B-tab-\u9875\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F",
      "children": [
        {
          "level": 3,
          "title": "2.1 window.postMessge",
          "slug": "_2-1-window-postmessge",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 BroadCast Channel",
          "slug": "_2-2-broadcast-channel",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 Service Worker",
          "slug": "_2-3-service-worker",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 LocalStorage",
          "slug": "_2-4-localstorage",
          "children": []
        },
        {
          "level": 3,
          "title": "2.5 IndexedDB",
          "slug": "_2-5-indexeddb",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1",
      "slug": "\u4E09\u3001\u975E\u540C\u6E90\u9875\u9762\u95F4\u7684\u901A\u4FE1",
      "children": [
        {
          "level": 3,
          "title": "3.1 iframe",
          "slug": "_3-1-iframe",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "front/tab-message.md"
};
var tabMessage_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$j
}, Symbol.toStringTag, { value: "Module" }));
const data$i = {
  "key": "v-350a936e",
  "path": "/secure/out-net-scan.html",
  "title": "\u5916\u7F51\u63A2\u6D4B",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "head": [
      [
        "meta",
        {
          "name": "author",
          "content": "swlws"
        }
      ],
      [
        "meta",
        {
          "name": "description",
          "content": "\u4ECE\u5916\u90E8\u89C6\u89D2\u67E5\u770B\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u4EA7"
        }
      ],
      [
        "meta",
        {
          "name": "keywords",
          "content": "\u626B\u63CF\u5668 \u8D44\u4EA7 \u57DF\u540D \u8BC1\u4E66 \u7AEF\u53E3 \u7AD9\u70B9"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u8D44\u4EA7\u6D4B\u7ED8",
      "slug": "\u8D44\u4EA7\u6D4B\u7ED8",
      "children": []
    },
    {
      "level": 2,
      "title": "\u57DF\u540D\u89E3\u6790",
      "slug": "\u57DF\u540D\u89E3\u6790",
      "children": [
        {
          "level": 3,
          "title": "\u57DF\u540D --> IP \u5730\u5740",
          "slug": "\u57DF\u540D-ip-\u5730\u5740",
          "children": []
        },
        {
          "level": 3,
          "title": "IP \u5730\u5740 --> \u57DF\u540D",
          "slug": "ip-\u5730\u5740-\u57DF\u540D",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u57DF\u540D\u7206\u7834",
      "slug": "\u57DF\u540D\u7206\u7834",
      "children": [
        {
          "level": 3,
          "title": "\u57DF\u540D\u5B57\u5178",
          "slug": "\u57DF\u540D\u5B57\u5178",
          "children": []
        },
        {
          "level": 3,
          "title": "\u641C\u7D22\u5F15\u64CE",
          "slug": "\u641C\u7D22\u5F15\u64CE",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8BC1\u4E66\u900F\u660E",
          "slug": "\u8BC1\u4E66\u900F\u660E",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5728\u7EBF\u5DE5\u5177",
          "slug": "\u5728\u7EBF\u5DE5\u5177",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "IP \u63A2\u6D4B",
      "slug": "ip-\u63A2\u6D4B",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7AEF\u53E3\u63A2\u6D4B",
      "slug": "\u7AEF\u53E3\u63A2\u6D4B",
      "children": []
    },
    {
      "level": 2,
      "title": "Web \u7AD9\u70B9\u63A2\u6D4B",
      "slug": "web-\u7AD9\u70B9\u63A2\u6D4B",
      "children": []
    },
    {
      "level": 2,
      "title": "Web \u7AD9\u70B9\u6307\u7EB9",
      "slug": "web-\u7AD9\u70B9\u6307\u7EB9",
      "children": []
    },
    {
      "level": 2,
      "title": "\u53C2\u8003",
      "slug": "\u53C2\u8003",
      "children": []
    }
  ],
  "filePathRelative": "secure/out-net-scan.md"
};
var outNetScan_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$i
}, Symbol.toStringTag, { value: "Module" }));
const data$h = {
  "key": "v-4114f302",
  "path": "/secure/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "secure/readme.md"
};
var index_html$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$h
}, Symbol.toStringTag, { value: "Module" }));
const data$g = {
  "key": "v-1559a150",
  "path": "/todo/",
  "title": "Todo",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "todo/readme.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$g
}, Symbol.toStringTag, { value: "Module" }));
const data$f = {
  "key": "v-1a4400a0",
  "path": "/tool/id.html",
  "title": "\u968F\u673A ID \u751F\u6210\u5668",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "UUID-V4",
      "slug": "uuid-v4",
      "children": []
    }
  ],
  "filePathRelative": "tool/id.md"
};
var id_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$f
}, Symbol.toStringTag, { value: "Module" }));
const data$e = {
  "key": "v-1559ca3e",
  "path": "/tool/",
  "title": "\u5DE5\u5177",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "tool/readme.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$e
}, Symbol.toStringTag, { value: "Module" }));
const data$d = {
  "key": "v-c0ec2056",
  "path": "/tool/todo.html",
  "title": "Todo",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "tool/todo.md"
};
var todo_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$d
}, Symbol.toStringTag, { value: "Module" }));
const data$c = {
  "key": "v-3ce30bc0",
  "path": "/front/network/2-link-layer.html",
  "title": "\u6570\u636E\u94FE\u8DEF\u5C42",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "front/network/2-link-layer.md"
};
var _2LinkLayer_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$c
}, Symbol.toStringTag, { value: "Module" }));
const data$b = {
  "key": "v-7b2e4b21",
  "path": "/front/network/3-network-layer.html",
  "title": "\u7F51\u7EDC\u5C42",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "head": [
      [
        "meta",
        {
          "name": "author",
          "content": "swlws"
        }
      ],
      [
        "meta",
        {
          "name": "description",
          "content": "\u8BA1\u7B97\u673A\u7F51\u7EDC-\u7F51\u7EDC\u5C42\u6982\u8FF0"
        }
      ],
      [
        "meta",
        {
          "name": "keywords",
          "content": "\u7F51\u7EDC\u5C42 IP\u5C42 ARP ICMP \u7F51\u6BB5 \u5B50\u7F51 \u7F51\u6BB5\u5212\u5206 \u5B50\u7F51\u5212\u5206 IP\u6570\u636E\u62A5 \u8DEF\u7531 IPv6 NAT"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1",
      "slug": "\u7F51\u7EDC\u5C42\u7684\u4E24\u79CD\u670D\u52A1",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7F51\u9645\u534F\u8BAE IP\uFF08Internet Protocol\uFF09",
      "slug": "\u7F51\u9645\u534F\u8BAE-ip-internet-protocol",
      "children": [
        {
          "level": 3,
          "title": "IP \u5730\u5740\u548C\u786C\u4EF6\u5730\u5740",
          "slug": "ip-\u5730\u5740\u548C\u786C\u4EF6\u5730\u5740",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5206\u7C7B\u7684 IP \u5730\u5740",
          "slug": "\u5206\u7C7B\u7684-ip-\u5730\u5740",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5730\u5740\u89E3\u6790\u534F\u8BAE ARP",
          "slug": "\u5730\u5740\u89E3\u6790\u534F\u8BAE-arp",
          "children": []
        },
        {
          "level": 3,
          "title": "IP \u6570\u636E\u62A5",
          "slug": "ip-\u6570\u636E\u62A5",
          "children": []
        },
        {
          "level": 3,
          "title": "IP \u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B\uFF08\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4\uFF09",
          "slug": "ip-\u5C42\u8F6C\u53D1\u5206\u7EC4\u6D41\u7A0B-\u8DEF\u7531\u5668\u8F6C\u53D1\u5206\u7EC4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51",
      "slug": "\u5B50\u7F51\u5212\u5206\u548C\u6784\u9020\u8D85\u7F51",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE ICMP",
      "slug": "\u7F51\u9645\u63A7\u5236\u62A5\u6587\u534F\u8BAE-icmp",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
      "slug": "\u4E92\u8054\u7F51\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
      "children": [
        {
          "level": 3,
          "title": "\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5",
          "slug": "\u7406\u60F3\u7684\u8DEF\u7531\u9009\u62E9\u7B97\u6CD5",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
          "slug": "\u5206\u5C42\u6B21\u7684\u8DEF\u7531\u9009\u62E9\u534F\u8BAE",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8DEF\u7531\u5668\u7684\u6784\u6210",
          "slug": "\u8DEF\u7531\u5668\u7684\u6784\u6210",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "IPv6",
      "slug": "ipv6",
      "children": [
        {
          "level": 3,
          "title": "IPv6 \u7684\u5730\u5740",
          "slug": "ipv6-\u7684\u5730\u5740",
          "children": []
        },
        {
          "level": 3,
          "title": "IPv6 \u6570\u636E\u62A5",
          "slug": "ipv6-\u6570\u636E\u62A5",
          "children": []
        },
        {
          "level": 3,
          "title": "IPv4 \u5411 IPv6 \u8FC7\u6E21",
          "slug": "ipv4-\u5411-ipv6-\u8FC7\u6E21",
          "children": []
        },
        {
          "level": 3,
          "title": "ICMPv6",
          "slug": "icmpv6",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "IP \u591A\u64AD",
      "slug": "ip-\u591A\u64AD",
      "children": [
        {
          "level": 3,
          "title": "IP \u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE",
          "slug": "ip-\u591A\u64AD\u5B9E\u73B0\u9700\u8981\u7684\u534F\u8BAE",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u865A\u62DF\u4E13\u7528\u7F51 VPN \u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT",
      "slug": "\u865A\u62DF\u4E13\u7528\u7F51-vpn-\u548C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat",
      "children": [
        {
          "level": 3,
          "title": "\u865A\u62DF\u4E13\u7528\u7F51 VPN",
          "slug": "\u865A\u62DF\u4E13\u7528\u7F51-vpn",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7F51\u7EDC\u5730\u5740\u8F6C\u6362 NAT",
          "slug": "\u7F51\u7EDC\u5730\u5740\u8F6C\u6362-nat",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "front/network/3-network-layer.md"
};
var _3NetworkLayer_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = {
  "key": "v-e52a1136",
  "path": "/front/network/4-transport-layer.html",
  "title": "\u8FD0\u8F93\u5C42",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "head": [
      [
        "meta",
        {
          "name": "author",
          "content": "swlws"
        }
      ],
      [
        "meta",
        {
          "name": "description",
          "content": "\u8BA1\u7B97\u673A\u7F51\u7EDC-\u8FD0\u8F93\u5C42"
        }
      ],
      [
        "meta",
        {
          "name": "keywords",
          "content": "\u8FD0\u8F93\u5C42 TCP UDP \u8FDB\u7A0B\u901A\u4FE1 \u53EF\u9760\u4F20\u8F93 \u505C\u6B62\u7B49\u5F85\u534F\u8BAE \u8D85\u65F6\u91CD\u4F20 \u6ED1\u52A8\u7A97\u53E3 \u62E5\u585E\u63A7\u5236 \u4E09\u6B21\u63E1\u624B \u56DB\u6B21\u6325\u624B"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6982\u8FF0",
      "slug": "\u6982\u8FF0",
      "children": [
        {
          "level": 3,
          "title": "\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1",
          "slug": "\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8FD0\u8F93\u5C42\u7684\u4E24\u79CD\u534F\u8BAE",
          "slug": "\u8FD0\u8F93\u5C42\u7684\u4E24\u79CD\u534F\u8BAE",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3",
          "slug": "\u8FD0\u8F93\u5C42\u7684\u7AEF\u53E3",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE UDP",
      "slug": "\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE-udp",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F20\u8F93\u63A7\u5236\u534F\u8BAE TCP",
      "slug": "\u4F20\u8F93\u63A7\u5236\u534F\u8BAE-tcp",
      "children": [
        {
          "level": 3,
          "title": "TCP \u7684\u8FDE\u63A5",
          "slug": "tcp-\u7684\u8FDE\u63A5",
          "children": []
        },
        {
          "level": 3,
          "title": "\u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406",
          "slug": "\u53EF\u9760\u4F20\u8F93\u7684\u5DE5\u4F5C\u539F\u7406",
          "children": []
        },
        {
          "level": 3,
          "title": "TCP \u62A5\u6587\u6BB5\u7684\u9996\u90E8",
          "slug": "tcp-\u62A5\u6587\u6BB5\u7684\u9996\u90E8",
          "children": []
        },
        {
          "level": 3,
          "title": "TCP \u53EF\u9760\u4F20\u8F93\u7684\u5B9E\u73B0",
          "slug": "tcp-\u53EF\u9760\u4F20\u8F93\u7684\u5B9E\u73B0",
          "children": []
        },
        {
          "level": 3,
          "title": "TCP \u7684\u6D41\u91CF\u63A7\u5236",
          "slug": "tcp-\u7684\u6D41\u91CF\u63A7\u5236",
          "children": []
        },
        {
          "level": 3,
          "title": "TCP \u7684\u4F20\u8F93",
          "slug": "tcp-\u7684\u4F20\u8F93",
          "children": []
        },
        {
          "level": 3,
          "title": "TCP \u7684\u62E5\u585E\u63A7\u5236",
          "slug": "tcp-\u7684\u62E5\u585E\u63A7\u5236",
          "children": []
        },
        {
          "level": 3,
          "title": "TCP \u7684\u8FD0\u8F93\u8FDE\u63A5\u7BA1\u7406",
          "slug": "tcp-\u7684\u8FD0\u8F93\u8FDE\u63A5\u7BA1\u7406",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "front/network/4-transport-layer.md"
};
var _4TransportLayer_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = {
  "key": "v-7733477d",
  "path": "/front/network/5-application-layer.html",
  "title": "\u5E94\u7528\u5C42",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "head": [
      [
        "meta",
        {
          "name": "author",
          "content": "swlws"
        }
      ],
      [
        "meta",
        {
          "name": "description",
          "content": "\u8BA1\u7B97\u673A\u7F51\u7EDC-\u5E94\u7528\u5C42"
        }
      ],
      [
        "meta",
        {
          "name": "keywords",
          "content": "dns ftp nfs telnet www email smtp pop3 imap dhcp system call p2p"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u57DF\u540D\u7CFB\u7EDF DNS\uFF08Domain Name Systen\uFF09",
      "slug": "\u57DF\u540D\u7CFB\u7EDF-dns-domain-name-systen",
      "children": [
        {
          "level": 3,
          "title": "\u4E92\u8054\u7F51\u7684\u57DF\u540D\u7ED3\u6784",
          "slug": "\u4E92\u8054\u7F51\u7684\u57DF\u540D\u7ED3\u6784",
          "children": []
        },
        {
          "level": 3,
          "title": "\u57DF\u540D\u670D\u52A1\u5668",
          "slug": "\u57DF\u540D\u670D\u52A1\u5668",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u6587\u4EF6\u4F20\u9001\u534F\u8BAE",
      "slug": "\u6587\u4EF6\u4F20\u9001\u534F\u8BAE",
      "children": [
        {
          "level": 3,
          "title": "FTP \u7684\u57FA\u672C\u5DE5\u4F5C\u539F\u7406",
          "slug": "ftp-\u7684\u57FA\u672C\u5DE5\u4F5C\u539F\u7406",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE TFTP\uFF08Trivial File Transfer Protocol\uFF09",
          "slug": "\u7B80\u5355\u6587\u4EF6\u4F20\u9001\u534F\u8BAE-tftp-trivial-file-transfer-protocol",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF NFS",
          "slug": "\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF-nfs",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE TELNET",
      "slug": "\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE-telnet",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E07\u7EF4\u7F51 WWW\uFF08World Wide Web\uFF09",
      "slug": "\u4E07\u7EF4\u7F51-www-world-wide-web",
      "children": [
        {
          "level": 3,
          "title": "\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26 URL\uFF08Uniform Resource Locator\uFF09",
          "slug": "\u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26-url-uniform-resource-locator",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE HTTP\uFF08HyperText Transfer Protocol\uFF09",
          "slug": "\u8D85\u6587\u672C\u4F20\u9001\u534F\u8BAE-http-hypertext-transfer-protocol",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4E07\u7EF4\u7F51\u7684\u6587\u6863",
          "slug": "\u4E07\u7EF4\u7F51\u7684\u6587\u6863",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4E07\u7EF4\u7F51\u7684\u4FE1\u606F\u68C0\u7D22\u7CFB\u7EDF",
          "slug": "\u4E07\u7EF4\u7F51\u7684\u4FE1\u606F\u68C0\u7D22\u7CFB\u7EDF",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u7535\u5B50\u90AE\u4EF6\uFF08e-mail\uFF09",
      "slug": "\u7535\u5B50\u90AE\u4EF6-e-mail",
      "children": [
        {
          "level": 3,
          "title": "\u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE POP3 \u548C IMAP",
          "slug": "\u90AE\u4EF6\u8BFB\u53D6\u534F\u8BAE-pop3-\u548C-imap",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE DHCP",
      "slug": "\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE-dhcp",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5E94\u7528\u8FDB\u7A0B\u8DE8\u8D8A\u7F51\u7EDC\u7684\u901A\u4FE1",
      "slug": "\u5E94\u7528\u8FDB\u7A0B\u8DE8\u8D8A\u7F51\u7EDC\u7684\u901A\u4FE1",
      "children": []
    },
    {
      "level": 2,
      "title": "P2P \u5E94\u7528",
      "slug": "p2p-\u5E94\u7528",
      "children": []
    },
    {
      "level": 2,
      "title": "SSH",
      "slug": "ssh",
      "children": []
    }
  ],
  "filePathRelative": "front/network/5-application-layer.md"
};
var _5ApplicationLayer_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = {
  "key": "v-10c3048b",
  "path": "/front/network/6-secure.html",
  "title": "\u7F51\u7EDC\u5B89\u5168",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7F51\u7EDC\u5B89\u5168\u95EE\u9898",
      "slug": "\u7F51\u7EDC\u5B89\u5168\u95EE\u9898",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC",
      "slug": "\u5B89\u5168\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E24\u7C7B\u5BC6\u7801\u4F53\u5236",
      "slug": "\u4E24\u7C7B\u5BC6\u7801\u4F53\u5236",
      "children": [
        {
          "level": 3,
          "title": "\u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u7CFB",
          "slug": "\u5BF9\u79F0\u5BC6\u94A5\u5BC6\u7801\u4F53\u7CFB",
          "children": []
        },
        {
          "level": 3,
          "title": "\u516C\u94A5\u5BC6\u7801\u4F53\u5236\uFF08public key crypto-system\uFF09",
          "slug": "\u516C\u94A5\u5BC6\u7801\u4F53\u5236-public-key-crypto-system",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u6570\u5B57\u7B7E\u540D",
      "slug": "\u6570\u5B57\u7B7E\u540D",
      "children": []
    },
    {
      "level": 2,
      "title": "\u9274\u522B",
      "slug": "\u9274\u522B",
      "children": [
        {
          "level": 3,
          "title": "\u62A5\u6587\u9274\u522B",
          "slug": "\u62A5\u6587\u9274\u522B",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "front/network/6-secure.md"
};
var _6Secure_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = {
  "key": "v-c07620de",
  "path": "/front/network/concept.html",
  "title": "\u6982\u8FF0",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "head": [
      [
        "meta",
        {
          "name": "author",
          "content": "swlws"
        }
      ],
      [
        "meta",
        {
          "name": "description",
          "content": "\u8BA1\u7B97\u673A\u7F51\u7EDC-\u6982\u8FF0"
        }
      ],
      [
        "meta",
        {
          "name": "keywords",
          "content": "\u7F51\u7EDC \u4E92\u8FDE\u7F51 \u4E92\u8054\u7F51 OSI TCP/IP \u4E94\u5C42\u534F\u8BAE"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7F51\u7EDC\uFF08\u8BA1\u7B97\u673A\u7F51\u7EDC\uFF09",
      "slug": "\u7F51\u7EDC-\u8BA1\u7B97\u673A\u7F51\u7EDC",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E92\u8FDE\u7F51",
      "slug": "\u4E92\u8FDE\u7F51",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E92\u8054\u7F51\uFF08\u56E0\u7279\u7F51\uFF09",
      "slug": "\u4E92\u8054\u7F51-\u56E0\u7279\u7F51",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E92\u8054\u7F51\u7684\u4E24\u4E2A\u91CD\u8981\u57FA\u672C\u7279\u70B9",
      "slug": "\u4E92\u8054\u7F51\u7684\u4E24\u4E2A\u91CD\u8981\u57FA\u672C\u7279\u70B9",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E92\u8054\u7F51\u53D1\u5C55\u7684\u4E09\u4E2A\u9636\u6BB5",
      "slug": "\u4E92\u8054\u7F51\u53D1\u5C55\u7684\u4E09\u4E2A\u9636\u6BB5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E92\u8054\u7F51\u7684\u7EC4\u6210",
      "slug": "\u4E92\u8054\u7F51\u7684\u7EC4\u6210",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BA1\u7B97\u673A\u901A\u4FE1",
      "slug": "\u8BA1\u7B97\u673A\u901A\u4FE1",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8DEF\u7531\u5668",
      "slug": "\u8DEF\u7531\u5668",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7535\u8DEF\u4EA4\u6362\u3001\u62A5\u6587\u4EA4\u6362\u3001\u5206\u7EC4\u4EA4\u6362",
      "slug": "\u7535\u8DEF\u4EA4\u6362\u3001\u62A5\u6587\u4EA4\u6362\u3001\u5206\u7EC4\u4EA4\u6362",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u6027\u80FD",
      "slug": "\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u6027\u80FD",
      "children": []
    },
    {
      "level": 2,
      "title": "OSI",
      "slug": "osi",
      "children": []
    },
    {
      "level": 2,
      "title": "\u534F\u8BAE\uFF08\u7F51\u7EDC\u534F\u8BAE\uFF09\u4E09\u8981\u7D20\uFF1A",
      "slug": "\u534F\u8BAE-\u7F51\u7EDC\u534F\u8BAE-\u4E09\u8981\u7D20",
      "children": [
        {
          "level": 3,
          "title": "OSI \u4E03\u5C42\u534F\u8BAE",
          "slug": "osi-\u4E03\u5C42\u534F\u8BAE",
          "children": []
        },
        {
          "level": 3,
          "title": "TCP/IP \u56DB\u5C42\u534F\u8BAE",
          "slug": "tcp-ip-\u56DB\u5C42\u534F\u8BAE",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4E94\u5C42\u534F\u8BAE",
          "slug": "\u4E94\u5C42\u534F\u8BAE",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "front/network/concept.md"
};
var concept_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = {
  "key": "v-14abcfc0",
  "path": "/front/network/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "front/network/readme.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = {
  "key": "v-062cec8e",
  "path": "/front/project/demand.html",
  "title": "\u9700\u6C42\uFF08Demand\uFF09\u5728\u54EA\u91CC",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "head": [
      [
        "meta",
        {
          "name": "author",
          "content": "swlws"
        }
      ],
      [
        "meta",
        {
          "name": "description",
          "content": "\u9879\u76EE\u7BA1\u7406-\u9700\u6C42"
        }
      ],
      [
        "meta",
        {
          "name": "keywords",
          "content": "\u9879\u76EE\u7BA1\u7406 \u9700\u6C42 \u8BA1\u5212 \u6C9F\u901A \u53D8\u5316 PDCA"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4EC0\u4E48\u662F\u9700\u6C42",
      "slug": "\u4EC0\u4E48\u662F\u9700\u6C42",
      "children": []
    },
    {
      "level": 2,
      "title": "\u9700\u6C42\u5B58\u5728\u7684\u610F\u4E49",
      "slug": "\u9700\u6C42\u5B58\u5728\u7684\u610F\u4E49",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BC6\u522B\u9700\u6C42",
      "slug": "\u8BC6\u522B\u9700\u6C42",
      "children": []
    },
    {
      "level": 2,
      "title": "\u63D0\u7EAF\u9700\u6C42",
      "slug": "\u63D0\u7EAF\u9700\u6C42",
      "children": [
        {
          "level": 3,
          "title": "\u9700\u6C42\uFF1F\u89E3\u51B3\u65B9\u6848\uFF1F",
          "slug": "\u9700\u6C42-\u89E3\u51B3\u65B9\u6848",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8BA8\u8BBA\uFF1F\u4E89\u8FA9\uFF1F",
          "slug": "\u8BA8\u8BBA-\u4E89\u8FA9",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u9610\u660E\u9700\u6C42",
      "slug": "\u9610\u660E\u9700\u6C42",
      "children": []
    },
    {
      "level": 2,
      "title": "\u9700\u6C42\u5728\u4F55\u65F6\u4EA7\u751F",
      "slug": "\u9700\u6C42\u5728\u4F55\u65F6\u4EA7\u751F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4EC0\u4E48\u53D1\u751F\u53D8\u5316\u4E86",
      "slug": "\u4EC0\u4E48\u53D1\u751F\u53D8\u5316\u4E86",
      "children": [
        {
          "level": 3,
          "title": "\u9700\u6C42\u53D8\u5316",
          "slug": "\u9700\u6C42\u53D8\u5316",
          "children": []
        },
        {
          "level": 3,
          "title": "\u9700\u6C42\u8FED\u4EE3",
          "slug": "\u9700\u6C42\u8FED\u4EE3",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8BA1\u5212\u53D8\u66F4",
          "slug": "\u8BA1\u5212\u53D8\u66F4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4F1A\u8BB2\u8BDD\u3001\u80FD\u542C\u61C2",
      "slug": "\u4F1A\u8BB2\u8BDD\u3001\u80FD\u542C\u61C2",
      "children": []
    }
  ],
  "filePathRelative": "front/project/demand.md"
};
var demand_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = {
  "key": "v-6bd94495",
  "path": "/front/project/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "front/project/readme.md"
};
var index_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = {
  "key": "v-3dd6c0ca",
  "path": "/front/promise/pool.html",
  "title": "Promise \u5E76\u53D1",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6ED1\u52A8\u7A97\u53E3",
      "slug": "\u6ED1\u52A8\u7A97\u53E3",
      "children": []
    }
  ],
  "filePathRelative": "front/promise/pool.md"
};
var pool_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = {
  "key": "v-5b77245b",
  "path": "/front/ts/code.html",
  "title": "\u4EE3\u7801\u7247\u6BB5",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "front/ts/code.md"
};
var code_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = {
  "key": "v-84cde9a4",
  "path": "/front/ts/type.html",
  "title": "TS \u7C7B\u578B\u7F16\u7A0B",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "front/ts/type.md"
};
var type_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$i, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$i, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$i, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$i, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$i, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$i, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$i, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$d, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$i, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$b, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$i, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$i, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$i, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$i, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$5, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$3, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$6, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const ids = vue.ref([]);
    function make() {
      ids.value.length = 0;
      let len = 10;
      while (len--) {
        ids.value.push(uuid.v4());
      }
    }
    make();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${serverRenderer.ssrRenderAttrs(_attrs)} data-v-1170594b><header data-v-1170594b><span data-v-1170594b>UUID-v4</span><button data-v-1170594b>\u5237\u65B0</button></header><section data-v-1170594b><!--[-->`);
      serverRenderer.ssrRenderList(ids.value, (v) => {
        _push(`<div data-v-1170594b>${serverRenderer.ssrInterpolate(v)}</div>`);
      });
      _push(`<!--]--></section></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../src/view/generate-id/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1170594b"]]);
var index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$2
}, Symbol.toStringTag, { value: "Module" }));
const NAMESPACE = "__code__";
class Storge {
  constructor(state, name = "default") {
    this.name = name;
    this.state = vue.reactive(state);
  }
  init() {
    Object.entries(this.getCache(this.name)).forEach(([key, value]) => {
      this.state[key] = value;
    });
  }
  getCache(prop) {
    try {
      const storage = window.localStorage.getItem(NAMESPACE) || "{}";
      const cache = JSON.parse(storage);
      return prop ? cache[prop] || {} : cache;
    } catch (e) {
      console.error(e);
      return {};
    }
  }
  setCache() {
    const data2 = vue.toRaw(this.state);
    try {
      const cache = this.getCache();
      cache[this.name] = data2;
      window.localStorage.setItem(NAMESPACE, JSON.stringify(cache));
    } catch (e) {
      console.error(e);
    }
  }
  watch() {
    vue.watch(this.state, () => {
      console.log("change");
      this.setCache();
    });
  }
}
function usePersistentState(state, name) {
  const ins = new Storge(state, name);
  ins.init();
  ins.watch();
  return ins.state;
}
function c_date() {
  return dayjs__default["default"]().format("YYYY-MM-DD");
}
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    c_date();
    let todoList = usePersistentState({}, "todo");
    const content = vue.ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header data-v-c5180e6c><input type="text"${serverRenderer.ssrRenderAttr("value", content.value)} data-v-c5180e6c><button data-v-c5180e6c>add</button><button data-v-c5180e6c>clear all</button></header><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(todoList), (items, group) => {
        _push(`<article class="group" data-v-c5180e6c><header data-v-c5180e6c>${serverRenderer.ssrInterpolate(group)}</header><section data-v-c5180e6c><ul data-v-c5180e6c><!--[-->`);
        serverRenderer.ssrRenderList(items, (item, i) => {
          _push(`<li class="${serverRenderer.ssrRenderClass([item.state ? "green" : ""])}" data-v-c5180e6c><input type="checkbox"${serverRenderer.ssrIncludeBooleanAttr(Array.isArray(item.state) ? serverRenderer.ssrLooseContain(item.state, null) : item.state) ? " checked" : ""} data-v-c5180e6c><span data-v-c5180e6c>${serverRenderer.ssrInterpolate(item.label)}</span><div class="rm-btn" data-v-c5180e6c>X</div></li>`);
        });
        _push(`<!--]--></ul></section></article>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../src/view/todo/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5180e6c"]]);
var index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
