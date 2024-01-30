import { R as d, r as _ } from "./storybook-e61d95ab.es.js";
import { g as ut } from "./storybook-c5d32002.es.js";
import { u as Lt, c as kt, p as ke } from "./storybook-25f566e3.es.js";
import { E as ct } from "./storybook-3ef3756f.es.js";
import { A as ae } from "./storybook-73bd1479.es.js";
import { I as Pe } from "./storybook-462d9620.es.js";
import { L as Pt } from "./storybook-dde0ecd5.es.js";
import { T as Ut } from "./storybook-826feda6.es.js";
import "./storybook-9c9b89fe.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-6c0329fc.es.js";
import "./storybook-46a89ba7.es.js";
import "./storybook-d3e946a2.es.js";
import "./storybook-4ed993c7.es.js";
const z = {
  title: "Markup Include",
  showHeader: !1,
  type: "markup-include",
  srcUrl: "#example",
  theme: "theme-blue",
  visual: {
    border: !1,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1
  }
}, b = 1, dt = 2, ft = 4, C = 8, Se = 16, G = 32, U = 64, Te = {
  a: {
    content: b | C,
    self: !1,
    type: b | C | G | U
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: b | C,
    void: !0
  },
  body: {
    content: b | dt | ft | C | Se | G | U
  },
  button: {
    content: C,
    type: b | C | G | U
  },
  caption: {
    content: b,
    parent: ["table"]
  },
  col: {
    parent: ["colgroup"],
    void: !0
  },
  colgroup: {
    children: ["col"],
    parent: ["table"]
  },
  details: {
    children: ["summary"],
    type: b | G | U
  },
  dd: {
    content: b,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: b
  },
  dt: {
    content: b,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: b,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: b,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: b,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: b
  },
  picture: {
    children: ["source", "img"],
    type: b | C | Se
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: C,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: C,
    parent: ["ruby"]
  },
  ruby: {
    children: ["rb", "rp", "rt", "rtc"]
  },
  source: {
    parent: ["audio", "video", "picture"],
    void: !0
  },
  summary: {
    content: C,
    parent: ["details"]
  },
  table: {
    children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr"],
    type: b
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: b,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: b,
    parent: ["tr"]
  },
  thead: {
    parent: ["table"],
    children: ["tr"]
  },
  tr: {
    parent: ["table", "tbody", "thead", "tfoot"],
    children: ["th", "td"]
  },
  track: {
    parent: ["audio", "video"],
    void: !0
  },
  ul: {
    children: ["li"],
    type: b
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: b | C,
    void: !0
  }
};
function $(t) {
  return (e) => {
    Te[e] = {
      ...t,
      ...Te[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach($({
  content: b,
  type: b | U
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach($({
  content: C,
  type: b | C | U
}));
["p", "pre"].forEach($({
  content: C,
  type: b | U
}));
["s", "small", "span", "del", "ins"].forEach($({
  content: C,
  type: b | C
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach($({
  content: b,
  type: b | dt | U
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach($({
  content: C,
  type: b | ft | U
}));
["audio", "canvas", "iframe", "img", "video"].forEach($({
  type: b | C | Se | U
}));
const Re = Object.freeze(Te), It = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], Dt = Object.keys(Re).filter((t) => t !== "canvas" && t !== "iframe"), w = 1, qt = 2, W = 3, V = 4, ht = 5, Ue = Object.freeze({
  alt: w,
  cite: w,
  class: w,
  colspan: W,
  controls: V,
  datetime: w,
  default: V,
  disabled: V,
  dir: w,
  height: w,
  href: w,
  id: w,
  kind: w,
  label: w,
  lang: w,
  loading: w,
  loop: V,
  media: w,
  muted: V,
  poster: w,
  rel: w,
  role: w,
  rowspan: W,
  scope: w,
  sizes: w,
  span: W,
  start: W,
  style: ht,
  src: w,
  srclang: w,
  srcset: w,
  tabindex: w,
  target: w,
  title: w,
  type: w,
  width: w
}), Bt = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function Q() {
  return Q = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Q.apply(this, arguments);
}
function pt({
  attributes: t = {},
  className: e,
  children: r = null,
  selfClose: a = !1,
  tagName: n
}) {
  const s = n;
  return a ? /* @__PURE__ */ d.createElement(s, Q({
    className: e
  }, t)) : /* @__PURE__ */ d.createElement(s, Q({
    className: e
  }, t), r);
}
class Mt {
  /**
   * Filter and clean an HTML attribute value.
   */
  attribute(e, r) {
    return r;
  }
  /**
   * Filter and clean an HTML node.
   */
  node(e, r) {
    return r;
  }
}
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var jt = /["'&<>]/, $t = Ft;
function Ft(t) {
  var e = "" + t, r = jt.exec(e);
  if (!r)
    return e;
  var a, n = "", s = 0, o = 0;
  for (s = r.index; s < e.length; s++) {
    switch (e.charCodeAt(s)) {
      case 34:
        a = "&quot;";
        break;
      case 38:
        a = "&amp;";
        break;
      case 39:
        a = "&#39;";
        break;
      case 60:
        a = "&lt;";
        break;
      case 62:
        a = "&gt;";
        break;
      default:
        continue;
    }
    o !== s && (n += e.substring(o, s)), o = s + 1, n += a;
  }
  return o !== s ? n + e.substring(o, s) : n;
}
const Ht = /* @__PURE__ */ ut($t);
function q(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
const Vt = /(url|image|image-set)\(/i;
class zt extends Mt {
  attribute(e, r) {
    return e === "style" && Object.keys(r).forEach((a) => {
      String(r[a]).match(Vt) && delete r[a];
    }), r;
  }
}
const Ie = 1, Wt = 3, Jt = /^<(!doctype|(html|head|body)(\s|>))/i, Gt = /^(aria-|data-|\w+:)/iu, Kt = /{{{(\w+)\/?}}}/;
function Yt() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class Xt {
  constructor(e, r = {}, a = [], n = []) {
    var s;
    if (q(this, "allowed", void 0), q(this, "banned", void 0), q(this, "blocked", void 0), q(this, "container", void 0), q(this, "content", []), q(this, "props", void 0), q(this, "matchers", void 0), q(this, "filters", void 0), q(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = r, this.matchers = a, this.filters = [...n, new zt()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((s = r.allowList) !== null && s !== void 0 ? s : Dt), this.banned = new Set(It), this.blocked = new Set(r.blockList);
  }
  /**
   * Loop through and apply all registered attribute filters.
   */
  applyAttributeFilters(e, r) {
    return this.filters.reduce((a, n) => a !== null && typeof n.attribute == "function" ? n.attribute(e, a) : a, r);
  }
  /**
   * Loop through and apply all registered node filters.
   */
  applyNodeFilters(e, r) {
    return this.filters.reduce((a, n) => a !== null && typeof n.node == "function" ? n.node(e, a) : a, r);
  }
  /**
   * Loop through and apply all registered matchers to the string.
   * If a match is found, create a React element, and build a new array.
   * This array allows React to interpolate and render accordingly.
   */
  applyMatchers(e, r) {
    const a = {}, {
      props: n
    } = this;
    let s = e, o = 0, l = null;
    return this.matchers.forEach((u) => {
      const c = u.asTag().toLowerCase(), h = this.getTagConfig(c);
      if (n[u.inverseName] || !this.isTagAllowed(c) || !this.canRenderChild(r, h))
        return;
      let i = "";
      for (; s && (l = u.match(s)); ) {
        const {
          index: m,
          length: E,
          match: g,
          valid: N,
          void: S,
          ...T
        } = l, v = u.propName + String(o);
        m > 0 && (i += s.slice(0, m)), N ? (i += S ? `{{{${v}/}}}` : `{{{${v}}}}${g}{{{/${v}}}}`, this.keyIndex += 1, o += 1, a[v] = {
          children: g,
          matcher: u,
          props: {
            ...n,
            ...T,
            key: this.keyIndex
          }
        }) : i += g, u.greedy ? (s = i + s.slice(m + E), i = "") : s = s.slice(m + (E || g.length));
      }
      u.greedy || (s = i + s);
    }), o === 0 ? e : this.replaceTokens(s, a);
  }
  /**
   * Determine whether the child can be rendered within the parent.
   */
  canRenderChild(e, r) {
    return !e.tagName || !r.tagName || e.void ? !1 : e.children.length > 0 ? e.children.includes(r.tagName) : e.invalid.length > 0 && e.invalid.includes(r.tagName) ? !1 : r.parent.length > 0 ? r.parent.includes(e.tagName) : !e.self && e.tagName === r.tagName ? !1 : !!(e && e.content & r.type);
  }
  /**
   * Convert line breaks in a string to HTML `<br/>` tags.
   * If the string contains HTML, we should not convert anything,
   * as line breaks should be handled by `<br/>`s in the markup itself.
   */
  convertLineBreaks(e) {
    const {
      noHtml: r,
      disableLineBreaks: a
    } = this.props;
    if (r || a || e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))
      return e;
    let n = e.replace(/\r\n/g, `
`);
    return n = n.replace(/\n{3,}/g, `


`), n = n.replace(/\n/g, "<br/>"), n;
  }
  /**
   * Create a detached HTML document that allows for easy HTML
   * parsing while not triggering scripts or loading external
   * resources.
   */
  createContainer(e) {
    var r;
    const n = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || Yt)();
    if (!n)
      return;
    const s = (r = this.props.containerTagName) !== null && r !== void 0 ? r : "body", o = s === "body" || s === "fragment" ? n.body : n.createElement(s);
    if (e.match(Jt)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      o.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? Ht(e) : e);
    return o;
  }
  /**
   * Convert an elements attribute map to an object map.
   * Returns null if no attributes are defined.
   */
  extractAttributes(e) {
    const {
      allowAttributes: r
    } = this.props, a = {};
    let n = 0;
    return e.nodeType !== Ie || !e.attributes || ([...e.attributes].forEach((s) => {
      const {
        name: o,
        value: l
      } = s, u = o.toLowerCase(), c = Ue[u] || Ue[o];
      if (!this.isSafe(e) || !u.match(Gt) && (!r && (!c || c === qt) || u.startsWith("on") || l.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let h = u === "style" ? this.extractStyleAttribute(e) : l;
      c === V ? h = !0 : c === W ? h = Number.parseFloat(String(h)) : c !== ht && (h = String(h)), a[Bt[u] || u] = this.applyAttributeFilters(u, h), n += 1;
    }), n === 0) ? null : a;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(e) {
    const r = {};
    return Array.from(e.style).forEach((a) => {
      const n = e.style[a];
      (typeof n == "string" || typeof n == "number") && (r[a.replace(/-([a-z])/g, (s, o) => String(o).toUpperCase())] = n);
    }), r;
  }
  /**
   * Return configuration for a specific tag.
   */
  getTagConfig(e) {
    const r = {
      children: [],
      content: 0,
      invalid: [],
      parent: [],
      self: !0,
      tagName: "",
      type: 0,
      void: !1
    };
    return Re[e] ? {
      ...r,
      ...Re[e],
      tagName: e
    } : r;
  }
  /**
   * Verify that a node is safe from XSS and injection attacks.
   */
  isSafe(e) {
    if (typeof HTMLAnchorElement < "u" && e instanceof HTMLAnchorElement) {
      const r = e.getAttribute("href");
      if (r != null && r.startsWith("#"))
        return !0;
      const a = e.protocol.toLowerCase();
      return a === ":" || a === "http:" || a === "https:" || a === "mailto:" || a === "tel:";
    }
    return !0;
  }
  /**
   * Verify that an HTML tag is allowed to render.
   */
  isTagAllowed(e) {
    return this.banned.has(e) || this.blocked.has(e) ? !1 : this.props.allowElements || this.allowed.has(e);
  }
  /**
   * Parse the markup by injecting it into a detached document,
   * while looping over all child nodes and generating an
   * array to interpolate into JSX.
   */
  parse() {
    return this.container ? this.parseNode(this.container, this.getTagConfig(this.container.nodeName.toLowerCase())) : [];
  }
  /**
   * Loop over the nodes children and generate a
   * list of text nodes and React elements.
   */
  parseNode(e, r) {
    const {
      noHtml: a,
      noHtmlExceptMatchers: n,
      allowElements: s,
      transform: o,
      transformOnlyAllowList: l
    } = this.props;
    let u = [], c = "";
    return [...e.childNodes].forEach((h) => {
      if (h.nodeType === Ie) {
        const m = h.nodeName.toLowerCase(), E = this.getTagConfig(m);
        c && (u.push(c), c = "");
        const g = this.applyNodeFilters(m, h);
        if (!g)
          return;
        let N;
        if (o && !(l && !this.isTagAllowed(m))) {
          this.keyIndex += 1;
          const S = this.keyIndex;
          N = this.parseNode(g, E);
          const T = o(g, N, E);
          if (T === null)
            return;
          if (typeof T < "u") {
            u.push(/* @__PURE__ */ d.cloneElement(T, {
              key: S
            }));
            return;
          }
          this.keyIndex = S - 1;
        }
        if (this.banned.has(m))
          return;
        if (!(a || n && m !== "br") && this.isTagAllowed(m) && (s || this.canRenderChild(r, E))) {
          var i;
          this.keyIndex += 1;
          const S = this.extractAttributes(g), T = {
            tagName: m
          };
          S && (T.attributes = S), E.void && (T.selfClose = E.void), u.push(/* @__PURE__ */ d.createElement(pt, {
            ...T,
            key: this.keyIndex
          }, (i = N) !== null && i !== void 0 ? i : this.parseNode(g, E)));
        } else
          u = [...u, ...this.parseNode(g, E.tagName ? E : r)];
      } else if (h.nodeType === Wt) {
        const m = a && !n ? h.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(h.textContent || "", r)
        );
        Array.isArray(m) ? u = [...u, ...m] : c += m;
      }
    }), c && u.push(c), u;
  }
  /**
   * Deconstruct the string into an array, by replacing custom tokens with React elements,
   * so that React can render it correctly.
   */
  replaceTokens(e, r) {
    if (!e.includes("{{{"))
      return e;
    const a = [];
    let n = e, s = null;
    for (; s = n.match(Kt); ) {
      const [o, l] = s, u = s.index, c = o.includes("/");
      if (process.env.NODE_ENV !== "production" && !r[l])
        throw new Error(`Token "${l}" found but no matching element to replace with.`);
      u > 0 && (a.push(n.slice(0, u)), n = n.slice(u));
      const {
        children: h,
        matcher: i,
        props: m
      } = r[l];
      let E;
      if (c)
        E = o.length, a.push(i.createElement(h, m));
      else {
        const g = n.match(new RegExp(`{{{/${l}}}}`));
        if (process.env.NODE_ENV !== "production" && !g)
          throw new Error(`Closing token missing for interpolated element "${l}".`);
        E = g.index + g[0].length, a.push(i.createElement(this.replaceTokens(n.slice(o.length, g.index), r), m));
      }
      n = n.slice(E);
    }
    return n.length > 0 && a.push(n), a.length === 0 ? "" : a.length === 1 && typeof a[0] == "string" ? a[0] : a;
  }
}
function Qt(t) {
  var e;
  const {
    attributes: r,
    className: a,
    containerTagName: n,
    content: s,
    emptyContent: o,
    parsedContent: l,
    tagName: u,
    noWrap: c
  } = t, h = (e = n ?? u) !== null && e !== void 0 ? e : "span", i = h === "fragment" ? !0 : c;
  let m;
  if (l)
    m = l;
  else {
    const E = new Xt(s ?? "", t).parse();
    E.length > 0 && (m = E);
  }
  return m || (m = o), i ? /* @__PURE__ */ d.createElement(d.Fragment, null, m) : /* @__PURE__ */ d.createElement(pt, {
    attributes: r,
    className: a,
    tagName: h
  }, m);
}
var Ae = { exports: {} }, mt = function(e, r) {
  return function() {
    for (var n = new Array(arguments.length), s = 0; s < n.length; s++)
      n[s] = arguments[s];
    return e.apply(r, n);
  };
}, Zt = mt, j = Object.prototype.toString;
function _e(t) {
  return Array.isArray(t);
}
function Ce(t) {
  return typeof t > "u";
}
function er(t) {
  return t !== null && !Ce(t) && t.constructor !== null && !Ce(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function vt(t) {
  return j.call(t) === "[object ArrayBuffer]";
}
function tr(t) {
  return j.call(t) === "[object FormData]";
}
function rr(t) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && vt(t.buffer), e;
}
function nr(t) {
  return typeof t == "string";
}
function ar(t) {
  return typeof t == "number";
}
function Et(t) {
  return t !== null && typeof t == "object";
}
function Y(t) {
  if (j.call(t) !== "[object Object]")
    return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function sr(t) {
  return j.call(t) === "[object Date]";
}
function ir(t) {
  return j.call(t) === "[object File]";
}
function or(t) {
  return j.call(t) === "[object Blob]";
}
function yt(t) {
  return j.call(t) === "[object Function]";
}
function lr(t) {
  return Et(t) && yt(t.pipe);
}
function ur(t) {
  return j.call(t) === "[object URLSearchParams]";
}
function cr(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function dr() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function xe(t, e) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), _e(t))
      for (var r = 0, a = t.length; r < a; r++)
        e.call(null, t[r], r, t);
    else
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && e.call(null, t[n], n, t);
}
function Ne() {
  var t = {};
  function e(n, s) {
    Y(t[s]) && Y(n) ? t[s] = Ne(t[s], n) : Y(n) ? t[s] = Ne({}, n) : _e(n) ? t[s] = n.slice() : t[s] = n;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    xe(arguments[r], e);
  return t;
}
function fr(t, e, r) {
  return xe(e, function(n, s) {
    r && typeof n == "function" ? t[s] = Zt(n, r) : t[s] = n;
  }), t;
}
function hr(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
var L = {
  isArray: _e,
  isArrayBuffer: vt,
  isBuffer: er,
  isFormData: tr,
  isArrayBufferView: rr,
  isString: nr,
  isNumber: ar,
  isObject: Et,
  isPlainObject: Y,
  isUndefined: Ce,
  isDate: sr,
  isFile: ir,
  isBlob: or,
  isFunction: yt,
  isStream: lr,
  isURLSearchParams: ur,
  isStandardBrowserEnv: dr,
  forEach: xe,
  merge: Ne,
  extend: fr,
  trim: cr,
  stripBOM: hr
}, F = L;
function De(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var bt = function(e, r, a) {
  if (!r)
    return e;
  var n;
  if (a)
    n = a(r);
  else if (F.isURLSearchParams(r))
    n = r.toString();
  else {
    var s = [];
    F.forEach(r, function(u, c) {
      u === null || typeof u > "u" || (F.isArray(u) ? c = c + "[]" : u = [u], F.forEach(u, function(i) {
        F.isDate(i) ? i = i.toISOString() : F.isObject(i) && (i = JSON.stringify(i)), s.push(De(c) + "=" + De(i));
      }));
    }), n = s.join("&");
  }
  if (n) {
    var o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}, pr = L;
function Z() {
  this.handlers = [];
}
Z.prototype.use = function(e, r, a) {
  return this.handlers.push({
    fulfilled: e,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
Z.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
Z.prototype.forEach = function(e) {
  pr.forEach(this.handlers, function(a) {
    a !== null && e(a);
  });
};
var mr = Z, vr = L, Er = function(e, r) {
  vr.forEach(e, function(n, s) {
    s !== r && s.toUpperCase() === r.toUpperCase() && (e[r] = n, delete e[s]);
  });
}, gt = function(e, r, a, n, s) {
  return e.config = r, a && (e.code = a), e.request = n, e.response = s, e.isAxiosError = !0, e.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }, e;
}, wt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, se, qe;
function St() {
  if (qe)
    return se;
  qe = 1;
  var t = gt;
  return se = function(r, a, n, s, o) {
    var l = new Error(r);
    return t(l, a, n, s, o);
  }, se;
}
var ie, Be;
function yr() {
  if (Be)
    return ie;
  Be = 1;
  var t = St();
  return ie = function(r, a, n) {
    var s = n.config.validateStatus;
    !n.status || !s || s(n.status) ? r(n) : a(t(
      "Request failed with status code " + n.status,
      n.config,
      null,
      n.request,
      n
    ));
  }, ie;
}
var oe, Me;
function br() {
  if (Me)
    return oe;
  Me = 1;
  var t = L;
  return oe = t.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(a, n, s, o, l, u) {
          var c = [];
          c.push(a + "=" + encodeURIComponent(n)), t.isNumber(s) && c.push("expires=" + new Date(s).toGMTString()), t.isString(o) && c.push("path=" + o), t.isString(l) && c.push("domain=" + l), u === !0 && c.push("secure"), document.cookie = c.join("; ");
        },
        read: function(a) {
          var n = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove: function(a) {
          this.write(a, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), oe;
}
var le, je;
function gr() {
  return je || (je = 1, le = function(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }), le;
}
var ue, $e;
function wr() {
  return $e || ($e = 1, ue = function(e, r) {
    return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
  }), ue;
}
var ce, Fe;
function Sr() {
  if (Fe)
    return ce;
  Fe = 1;
  var t = gr(), e = wr();
  return ce = function(a, n) {
    return a && !t(n) ? e(a, n) : n;
  }, ce;
}
var de, He;
function Tr() {
  if (He)
    return de;
  He = 1;
  var t = L, e = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return de = function(a) {
    var n = {}, s, o, l;
    return a && t.forEach(a.split(`
`), function(c) {
      if (l = c.indexOf(":"), s = t.trim(c.substr(0, l)).toLowerCase(), o = t.trim(c.substr(l + 1)), s) {
        if (n[s] && e.indexOf(s) >= 0)
          return;
        s === "set-cookie" ? n[s] = (n[s] ? n[s] : []).concat([o]) : n[s] = n[s] ? n[s] + ", " + o : o;
      }
    }), n;
  }, de;
}
var fe, Ve;
function Rr() {
  if (Ve)
    return fe;
  Ve = 1;
  var t = L;
  return fe = t.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), n;
      function s(o) {
        var l = o;
        return r && (a.setAttribute("href", l), l = a.href), a.setAttribute("href", l), {
          href: a.href,
          protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
          host: a.host,
          search: a.search ? a.search.replace(/^\?/, "") : "",
          hash: a.hash ? a.hash.replace(/^#/, "") : "",
          hostname: a.hostname,
          port: a.port,
          pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
        };
      }
      return n = s(window.location.href), function(l) {
        var u = t.isString(l) ? s(l) : l;
        return u.protocol === n.protocol && u.host === n.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), fe;
}
var he, ze;
function ee() {
  if (ze)
    return he;
  ze = 1;
  function t(e) {
    this.message = e;
  }
  return t.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, t.prototype.__CANCEL__ = !0, he = t, he;
}
var pe, We;
function Je() {
  if (We)
    return pe;
  We = 1;
  var t = L, e = yr(), r = br(), a = bt, n = Sr(), s = Tr(), o = Rr(), l = St(), u = wt, c = ee();
  return pe = function(i) {
    return new Promise(function(E, g) {
      var N = i.data, S = i.headers, T = i.responseType, v;
      function R() {
        i.cancelToken && i.cancelToken.unsubscribe(v), i.signal && i.signal.removeEventListener("abort", v);
      }
      t.isFormData(N) && delete S["Content-Type"];
      var f = new XMLHttpRequest();
      if (i.auth) {
        var x = i.auth.username || "", B = i.auth.password ? unescape(encodeURIComponent(i.auth.password)) : "";
        S.Authorization = "Basic " + btoa(x + ":" + B);
      }
      var O = n(i.baseURL, i.url);
      f.open(i.method.toUpperCase(), a(O, i.params, i.paramsSerializer), !0), f.timeout = i.timeout;
      function M() {
        if (f) {
          var y = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null, k = !T || T === "text" || T === "json" ? f.responseText : f.response, D = {
            data: k,
            status: f.status,
            statusText: f.statusText,
            headers: y,
            config: i,
            request: f
          };
          e(function(ne) {
            E(ne), R();
          }, function(ne) {
            g(ne), R();
          }, D), f = null;
        }
      }
      if ("onloadend" in f ? f.onloadend = M : f.onreadystatechange = function() {
        !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(M);
      }, f.onabort = function() {
        f && (g(l("Request aborted", i, "ECONNABORTED", f)), f = null);
      }, f.onerror = function() {
        g(l("Network Error", i, null, f)), f = null;
      }, f.ontimeout = function() {
        var k = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded", D = i.transitional || u;
        i.timeoutErrorMessage && (k = i.timeoutErrorMessage), g(l(
          k,
          i,
          D.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          f
        )), f = null;
      }, t.isStandardBrowserEnv()) {
        var p = (i.withCredentials || o(O)) && i.xsrfCookieName ? r.read(i.xsrfCookieName) : void 0;
        p && (S[i.xsrfHeaderName] = p);
      }
      "setRequestHeader" in f && t.forEach(S, function(k, D) {
        typeof N > "u" && D.toLowerCase() === "content-type" ? delete S[D] : f.setRequestHeader(D, k);
      }), t.isUndefined(i.withCredentials) || (f.withCredentials = !!i.withCredentials), T && T !== "json" && (f.responseType = i.responseType), typeof i.onDownloadProgress == "function" && f.addEventListener("progress", i.onDownloadProgress), typeof i.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", i.onUploadProgress), (i.cancelToken || i.signal) && (v = function(y) {
        f && (g(!y || y && y.type ? new c("canceled") : y), f.abort(), f = null);
      }, i.cancelToken && i.cancelToken.subscribe(v), i.signal && (i.signal.aborted ? v() : i.signal.addEventListener("abort", v))), N || (N = null), f.send(N);
    });
  }, pe;
}
var A = L, Ge = Er, Cr = gt, Nr = wt, Ar = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ke(t, e) {
  !A.isUndefined(t) && A.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
}
function _r() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Je()), t;
}
function xr(t, e, r) {
  if (A.isString(t))
    try {
      return (e || JSON.parse)(t), A.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var te = {
  transitional: Nr,
  adapter: _r(),
  transformRequest: [function(e, r) {
    return Ge(r, "Accept"), Ge(r, "Content-Type"), A.isFormData(e) || A.isArrayBuffer(e) || A.isBuffer(e) || A.isStream(e) || A.isFile(e) || A.isBlob(e) ? e : A.isArrayBufferView(e) ? e.buffer : A.isURLSearchParams(e) ? (Ke(r, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : A.isObject(e) || r && r["Content-Type"] === "application/json" ? (Ke(r, "application/json"), xr(e)) : e;
  }],
  transformResponse: [function(e) {
    var r = this.transitional || te.transitional, a = r && r.silentJSONParsing, n = r && r.forcedJSONParsing, s = !a && this.responseType === "json";
    if (s || n && A.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (o) {
        if (s)
          throw o.name === "SyntaxError" ? Cr(o, this, "E_JSON_PARSE") : o;
      }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
A.forEach(["delete", "get", "head"], function(e) {
  te.headers[e] = {};
});
A.forEach(["post", "put", "patch"], function(e) {
  te.headers[e] = A.merge(Ar);
});
var Oe = te, Or = L, Lr = Oe, kr = function(e, r, a) {
  var n = this || Lr;
  return Or.forEach(a, function(o) {
    e = o.call(n, e, r);
  }), e;
}, me, Ye;
function Tt() {
  return Ye || (Ye = 1, me = function(e) {
    return !!(e && e.__CANCEL__);
  }), me;
}
var Xe = L, ve = kr, Pr = Tt(), Ur = Oe, Ir = ee();
function Ee(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ir("canceled");
}
var Dr = function(e) {
  Ee(e), e.headers = e.headers || {}, e.data = ve.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = Xe.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), Xe.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(n) {
      delete e.headers[n];
    }
  );
  var r = e.adapter || Ur.adapter;
  return r(e).then(function(n) {
    return Ee(e), n.data = ve.call(
      e,
      n.data,
      n.headers,
      e.transformResponse
    ), n;
  }, function(n) {
    return Pr(n) || (Ee(e), n && n.response && (n.response.data = ve.call(
      e,
      n.response.data,
      n.response.headers,
      e.transformResponse
    ))), Promise.reject(n);
  });
}, P = L, Rt = function(e, r) {
  r = r || {};
  var a = {};
  function n(h, i) {
    return P.isPlainObject(h) && P.isPlainObject(i) ? P.merge(h, i) : P.isPlainObject(i) ? P.merge({}, i) : P.isArray(i) ? i.slice() : i;
  }
  function s(h) {
    if (P.isUndefined(r[h])) {
      if (!P.isUndefined(e[h]))
        return n(void 0, e[h]);
    } else
      return n(e[h], r[h]);
  }
  function o(h) {
    if (!P.isUndefined(r[h]))
      return n(void 0, r[h]);
  }
  function l(h) {
    if (P.isUndefined(r[h])) {
      if (!P.isUndefined(e[h]))
        return n(void 0, e[h]);
    } else
      return n(void 0, r[h]);
  }
  function u(h) {
    if (h in r)
      return n(e[h], r[h]);
    if (h in e)
      return n(void 0, e[h]);
  }
  var c = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u
  };
  return P.forEach(Object.keys(e).concat(Object.keys(r)), function(i) {
    var m = c[i] || s, E = m(i);
    P.isUndefined(E) && m !== u || (a[i] = E);
  }), a;
}, ye, Qe;
function Ct() {
  return Qe || (Qe = 1, ye = {
    version: "0.26.1"
  }), ye;
}
var qr = Ct().version, Le = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, e) {
  Le[t] = function(a) {
    return typeof a === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
var Ze = {};
Le.transitional = function(e, r, a) {
  function n(s, o) {
    return "[Axios v" + qr + "] Transitional option '" + s + "'" + o + (a ? ". " + a : "");
  }
  return function(s, o, l) {
    if (e === !1)
      throw new Error(n(o, " has been removed" + (r ? " in " + r : "")));
    return r && !Ze[o] && (Ze[o] = !0, console.warn(
      n(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, o, l) : !0;
  };
};
function Br(t, e, r) {
  if (typeof t != "object")
    throw new TypeError("options must be an object");
  for (var a = Object.keys(t), n = a.length; n-- > 0; ) {
    var s = a[n], o = e[s];
    if (o) {
      var l = t[s], u = l === void 0 || o(l, s, t);
      if (u !== !0)
        throw new TypeError("option " + s + " must be " + u);
      continue;
    }
    if (r !== !0)
      throw Error("Unknown option " + s);
  }
}
var Mr = {
  assertOptions: Br,
  validators: Le
}, Nt = L, jr = bt, et = mr, tt = Dr, re = Rt, At = Mr, H = At.validators;
function J(t) {
  this.defaults = t, this.interceptors = {
    request: new et(),
    response: new et()
  };
}
J.prototype.request = function(e, r) {
  typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = re(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && At.assertOptions(a, {
    silentJSONParsing: H.transitional(H.boolean),
    forcedJSONParsing: H.transitional(H.boolean),
    clarifyTimeoutError: H.transitional(H.boolean)
  }, !1);
  var n = [], s = !0;
  this.interceptors.request.forEach(function(E) {
    typeof E.runWhen == "function" && E.runWhen(r) === !1 || (s = s && E.synchronous, n.unshift(E.fulfilled, E.rejected));
  });
  var o = [];
  this.interceptors.response.forEach(function(E) {
    o.push(E.fulfilled, E.rejected);
  });
  var l;
  if (!s) {
    var u = [tt, void 0];
    for (Array.prototype.unshift.apply(u, n), u = u.concat(o), l = Promise.resolve(r); u.length; )
      l = l.then(u.shift(), u.shift());
    return l;
  }
  for (var c = r; n.length; ) {
    var h = n.shift(), i = n.shift();
    try {
      c = h(c);
    } catch (m) {
      i(m);
      break;
    }
  }
  try {
    l = tt(c);
  } catch (m) {
    return Promise.reject(m);
  }
  for (; o.length; )
    l = l.then(o.shift(), o.shift());
  return l;
};
J.prototype.getUri = function(e) {
  return e = re(this.defaults, e), jr(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};
Nt.forEach(["delete", "get", "head", "options"], function(e) {
  J.prototype[e] = function(r, a) {
    return this.request(re(a || {}, {
      method: e,
      url: r,
      data: (a || {}).data
    }));
  };
});
Nt.forEach(["post", "put", "patch"], function(e) {
  J.prototype[e] = function(r, a, n) {
    return this.request(re(n || {}, {
      method: e,
      url: r,
      data: a
    }));
  };
});
var $r = J, be, rt;
function Fr() {
  if (rt)
    return be;
  rt = 1;
  var t = ee();
  function e(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(o) {
      a = o;
    });
    var n = this;
    this.promise.then(function(s) {
      if (n._listeners) {
        var o, l = n._listeners.length;
        for (o = 0; o < l; o++)
          n._listeners[o](s);
        n._listeners = null;
      }
    }), this.promise.then = function(s) {
      var o, l = new Promise(function(u) {
        n.subscribe(u), o = u;
      }).then(s);
      return l.cancel = function() {
        n.unsubscribe(o);
      }, l;
    }, r(function(o) {
      n.reason || (n.reason = new t(o), a(n.reason));
    });
  }
  return e.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, e.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, e.prototype.unsubscribe = function(a) {
    if (this._listeners) {
      var n = this._listeners.indexOf(a);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }, e.source = function() {
    var a, n = new e(function(o) {
      a = o;
    });
    return {
      token: n,
      cancel: a
    };
  }, be = e, be;
}
var ge, nt;
function Hr() {
  return nt || (nt = 1, ge = function(e) {
    return function(a) {
      return e.apply(null, a);
    };
  }), ge;
}
var we, at;
function Vr() {
  if (at)
    return we;
  at = 1;
  var t = L;
  return we = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, we;
}
var st = L, zr = mt, X = $r, Wr = Rt, Jr = Oe;
function _t(t) {
  var e = new X(t), r = zr(X.prototype.request, e);
  return st.extend(r, X.prototype, e), st.extend(r, e), r.create = function(n) {
    return _t(Wr(t, n));
  }, r;
}
var I = _t(Jr);
I.Axios = X;
I.Cancel = ee();
I.CancelToken = Fr();
I.isCancel = Tt();
I.VERSION = Ct().version;
I.all = function(e) {
  return Promise.all(e);
};
I.spread = Hr();
I.isAxiosError = Vr();
Ae.exports = I;
Ae.exports.default = I;
var Gr = Ae.exports, Kr = Gr;
const Yr = /* @__PURE__ */ ut(Kr), xt = _.createContext({}), Xr = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], Qr = _.memo((t) => {
  const { config: e, updateConfig: r, loading: a, data: n, setParentConfig: s, isDashboard: o } = _.useContext(xt), [l, u] = _.useState(!0), [c, h] = _.useState(!1), i = (v, R, f, x) => {
    if (v === null && R === null) {
      let p = { ...e, [f]: x };
      f === "filterColumn" && (p.filterValue = ""), r(p);
      return;
    }
    const B = Array.isArray(e[v]);
    let O = B ? [...e[v], x] : { ...e[v], [f]: x };
    R !== null && (B ? (O = [...e[v]], O[R] = { ...O[R], [f]: x }) : typeof x == "string" ? O[R] = x : O = { ...e[v], [R]: { ...e[v][R], [f]: x } });
    let M = { ...e, [v]: O };
    r(M);
  };
  _.useEffect(() => {
    if (s) {
      const v = N();
      s(v);
    }
  }, [e]), _.useEffect(() => {
    if (!c) {
      let v = { ...e };
      delete v.newViz, r(v);
    }
  }, []);
  const m = () => {
    u(!l);
  }, E = () => /* @__PURE__ */ d.createElement("section", { className: "waiting" }, /* @__PURE__ */ d.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ d.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ d.createElement("p", null, e.runtime.editorErrorMessage))), g = () => {
    const v = (R) => {
      R.preventDefault();
      let f = { ...e };
      delete f.newViz, r(f);
    };
    return /* @__PURE__ */ d.createElement("section", { className: "waiting" }, /* @__PURE__ */ d.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ d.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ d.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ d.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: v }, "I'm Done")));
  }, N = () => {
    let v = JSON.parse(JSON.stringify(e));
    return delete v.newViz, delete v.runtime, v;
  }, S = _.memo(({ label: v, value: R, fieldName: f, section: x = null, subsection: B = null, tooltip: O, updateField: M, ...p }) => /* @__PURE__ */ d.createElement("label", { className: "checkbox" }, /* @__PURE__ */ d.createElement(
    "input",
    {
      type: "checkbox",
      name: f,
      checked: R,
      onChange: () => {
        M(x, B, f, !R);
      },
      ...p
    }
  ), /* @__PURE__ */ d.createElement("span", { className: "edit-label column-heading" }, v), /* @__PURE__ */ d.createElement("span", { className: "cove-icon" }, O))), T = /* @__PURE__ */ d.createElement(ae, null, /* @__PURE__ */ d.createElement(ae.Section, { title: "General" }, /* @__PURE__ */ d.createElement(Pe, { value: e.title || "", fieldName: "title", label: "Title", placeholder: "Markup Include Title", updateField: i }), /* @__PURE__ */ d.createElement(Pe, { value: e.srcUrl || "", fieldName: "srcUrl", label: "Source URL", placeholder: "https://www.example.com/file.html", updateField: i })), /* @__PURE__ */ d.createElement(ae.Section, { title: "Visual" }, /* @__PURE__ */ d.createElement("div", { className: "input-group" }, /* @__PURE__ */ d.createElement("label", null, "Theme"), /* @__PURE__ */ d.createElement("ul", { className: "color-palette" }, Xr.map((v) => /* @__PURE__ */ d.createElement(
    "li",
    {
      title: v,
      key: v,
      onClick: () => {
        r({ ...e, theme: v });
      },
      className: e.theme === v ? "selected " + v : v
    }
  )))), /* @__PURE__ */ d.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ d.createElement(S, { value: e.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: i }), /* @__PURE__ */ d.createElement(S, { value: e.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: i }), /* @__PURE__ */ d.createElement(S, { value: e.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: i }), /* @__PURE__ */ d.createElement(S, { value: e.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: i }), /* @__PURE__ */ d.createElement(S, { value: e.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: i }))));
  return a ? null : /* @__PURE__ */ d.createElement(ct, { component: "EditorPanel" }, /* @__PURE__ */ d.createElement("div", { className: "cove-editor" }, !e.newViz && e.runtime && e.runtime.editorErrorMessage && /* @__PURE__ */ d.createElement(E, null), e.newViz && c && /* @__PURE__ */ d.createElement(g, null), /* @__PURE__ */ d.createElement("button", { className: "cove-editor--toggle" + (l ? "" : " collapsed"), title: l ? "Collapse Editor" : "Expand Editor", onClick: m }), /* @__PURE__ */ d.createElement("section", { className: "cove-editor__panel" + (l ? "" : " hidden") }, /* @__PURE__ */ d.createElement("div", { className: "cove-editor__panel-container" }, /* @__PURE__ */ d.createElement("h2", { className: "cove-editor__heading" }, "Configure Markup Include"), /* @__PURE__ */ d.createElement("section", { className: "cove-editor__content" }, T))), /* @__PURE__ */ d.createElement("div", { className: "cove-editor__content" }, /* @__PURE__ */ d.createElement("div", { className: "cove-editor__content-wrap" }, t.children))));
}), Zr = (t, e) => {
  switch (e.type) {
    case "SET_CONFIG":
      return { ...t, config: e.payload };
    case "SET_LOADING":
      return { ...t, loading: e.payload };
    case "SET_URL_MARKUP":
      return { ...t, urlMarkup: e.payload };
    case "SET_MARKUP_ERROR":
      return { ...t, markupError: e.payload };
    case "SET_ERROR_MESSAGE":
      return { ...t, errorMessage: e.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...t, coveLoadedHasRan: e.payload };
  }
};
const en = (t) => {
  const { configUrl: e, config: r, isDashboard: a = !1, isEditor: n = !1, setConfig: s } = t, o = { config: r ?? z, loading: !0, urlMarkup: "", markupError: null, errorMessage: null, coveLoadedHasRan: !1 }, [l, u] = _.useReducer(Zr, o), { config: c, loading: h, urlMarkup: i, markupError: m, errorMessage: E, coveLoadedHasRan: g } = l, N = _.useRef(), { innerContainerClasses: S, contentClasses: T } = Lt(c);
  let { title: v } = c;
  const R = (p) => {
    Object.keys(z).forEach((y) => {
      p[y] && typeof p[y] == "object" && !Array.isArray(p[y]) && (p[y] = { ...z[y], ...p[y] });
    }), p.runtime = {}, p.runtime.uniqueId = Date.now(), p.runtime.editorErrorMessage = "", u({ type: "SET_CONFIG", payload: p });
  }, f = _.useCallback(async () => {
    let p = r || await (await fetch(e)).json(), y = p.data ?? {};
    p.dataUrl && (y = await (await fetch(p.dataUrl)).json()), p.data = y;
    const k = { ...await kt(p) };
    R({ ...z, ...k }), u({ type: "SET_LOADING", payload: !1 });
  }, []);
  _.useEffect(() => {
    if (m) {
      let p = m, y = "There was a problem retrieving the content from " + c.srcUrl + ". ", k = /https?:\/\//g;
      p === 404 && !c.srcUrl.match(k) && (p = "proto"), y += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[p], u({ type: "SET_ERROR_MESSAGE", payload: y });
    } else
      u({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [m]);
  const x = _.useCallback(async () => {
    if (u({ type: "SET_MARKUP_ERROR", payload: null }), c.srcUrl)
      if (c.srcUrl === "#example")
        u({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await Yr.get(c.srcUrl).then((p) => {
            p.data && u({ type: "SET_URL_MARKUP", payload: p.data });
          });
        } catch (p) {
          p.response ? u({ type: "SET_MARKUP_ERROR", payload: p.response.status }) : p.request && u({ type: "SET_MARKUP_ERROR", payload: 200 }), u({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      u({ type: "SET_URL_MARKUP", payload: "" });
  }, [c.srcUrl]), B = (p) => {
    let y, k = !1;
    return p && p !== "" && p !== null && (p.toString().match(/<body[^>]*>/i) && p.toString().match(/<\/body\s*>/i) ? (k = !0, y = p.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : y = p.toString()), k ? y[1] : y;
  };
  _.useEffect(() => {
    f().catch((p) => console.log(p)), ke("cove_loaded", { loadConfigHasRun: !0 });
  }, []), _.useEffect(() => {
    c && !g && N && (ke("cove_loaded", { config: c }), u({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [c, N]), _.useEffect(() => {
    f().catch((p) => console.log(p));
  }, [r == null ? void 0 : r.data]), _.useEffect(() => {
    x().catch((p) => console.log(p));
  }, [x]);
  let O = /* @__PURE__ */ d.createElement(Pt, null), M = ["markup-include"];
  if (h === !1) {
    let p = /* @__PURE__ */ d.createElement("div", { className: M.join(" "), ref: N }, /* @__PURE__ */ d.createElement(Ut, { title: v, isDashboard: a, classes: [`${c.theme}`, "mb-0"] }), /* @__PURE__ */ d.createElement("div", { className: `cove-component__content ${T.join(" ")}` }, /* @__PURE__ */ d.createElement("div", { className: `${S.join(" ")}` }, /* @__PURE__ */ d.createElement("div", { className: "cove-component__content-wrap" }, !m && i && /* @__PURE__ */ d.createElement(Qt, { content: B(i) }), m && c.srcUrl && /* @__PURE__ */ d.createElement("div", { className: "warning" }, E)))));
    O = /* @__PURE__ */ d.createElement("div", { className: `cove markup-include ${c.theme}` }, n && /* @__PURE__ */ d.createElement(Qr, null, p), !n && p);
  }
  return /* @__PURE__ */ d.createElement(ct, { component: "CdcMarkupInclude" }, /* @__PURE__ */ d.createElement(xt.Provider, { value: { config: c, updateConfig: R, loading: h, data: c.data, setParentConfig: s, isDashboard: a } }, O));
}, vn = {
  title: "Components/Templates/Markup Include",
  component: en
}, K = {
  args: {
    config: z
  }
};
var it, ot, lt;
K.parameters = {
  ...K.parameters,
  docs: {
    ...(it = K.parameters) == null ? void 0 : it.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_1 as unknown) as Config)
  }
}`,
      ...(lt = (ot = K.parameters) == null ? void 0 : ot.docs) == null ? void 0 : lt.source
    }
  }
};
const En = ["Initial_State"];
export {
  K as Initial_State,
  En as __namedExportsOrder,
  vn as default
};
