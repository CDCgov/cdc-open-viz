import { j as f, F as he, a as R } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { R as oe, r as P } from "./storybook-index-f2fed736.es.js";
import { _ as $ } from "./storybook-lodash-a4231e1c.es.js";
import { g as an } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { L as Je, u as ln, b as cn, p as ft } from "./storybook-useDataVizClasses-2dec1abb.es.js";
import { c as un } from "./storybook-coveUpdateWorker-2d39117f.es.js";
import { I as Ve, a as de } from "./storybook-editor-f86b5faa.es.js";
import { E as _t, L as dn } from "./storybook-viewports-6b80499f.es.js";
import { a as ie } from "./storybook-Icon-e250778e.es.js";
import { T as Z } from "./storybook-Tooltip-5b6ee371.es.js";
import { A as Ee } from "./storybook-Accordion-edcda35b.es.js";
import { C as kt, F as fn, a as hn } from "./storybook-FootnotesStandAlone-282ea454.es.js";
import { T as pn } from "./storybook-index-4a64ea6e.es.js";
const O = 1, xt = 2, Lt = 4, F = 8, Ke = 16, Ce = 32, X = 64, Ge = {
  a: {
    content: O | F,
    self: !1,
    type: O | F | Ce | X
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: O | F,
    void: !0
  },
  body: {
    content: O | xt | Lt | F | Ke | Ce | X
  },
  button: {
    content: F,
    type: O | F | Ce | X
  },
  caption: {
    content: O,
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
    type: O | Ce | X
  },
  dd: {
    content: O,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: O
  },
  dt: {
    content: O,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: O,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: O,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: O,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: O
  },
  picture: {
    children: ["source", "img"],
    type: O | F | Ke
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: F,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: F,
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
    content: F,
    parent: ["details"]
  },
  table: {
    children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr"],
    type: O
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: O,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: O,
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
    type: O
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: O | F,
    void: !0
  }
};
function le(t) {
  return (e) => {
    Ge[e] = {
      ...t,
      ...Ge[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(le({
  content: O,
  type: O | X
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(le({
  content: F,
  type: O | F | X
}));
["p", "pre"].forEach(le({
  content: F,
  type: O | X
}));
["s", "small", "span", "del", "ins"].forEach(le({
  content: F,
  type: O | F
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(le({
  content: O,
  type: O | xt | X
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(le({
  content: F,
  type: O | Lt | X
}));
["audio", "canvas", "iframe", "img", "video"].forEach(le({
  type: O | F | Ke | X
}));
const Xe = Object.freeze(Ge), mn = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], bn = Object.keys(Xe).filter((t) => t !== "canvas" && t !== "iframe"), _ = 1, yn = 2, ge = 3, fe = 4, Pt = 5, ht = Object.freeze({
  alt: _,
  cite: _,
  class: _,
  colspan: ge,
  controls: fe,
  datetime: _,
  default: fe,
  disabled: fe,
  dir: _,
  height: _,
  href: _,
  id: _,
  kind: _,
  label: _,
  lang: _,
  loading: _,
  loop: fe,
  media: _,
  muted: fe,
  poster: _,
  rel: _,
  role: _,
  rowspan: ge,
  scope: _,
  sizes: _,
  span: ge,
  start: ge,
  style: Pt,
  src: _,
  srclang: _,
  srcset: _,
  tabindex: _,
  target: _,
  title: _,
  type: _,
  width: _
}), En = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function ke() {
  return ke = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ke.apply(this, arguments);
}
function Ut({
  attributes: t = {},
  className: e,
  children: n = null,
  selfClose: r = !1,
  tagName: s
}) {
  const o = s;
  return r ? /* @__PURE__ */ oe.createElement(o, ke({
    className: e
  }, t)) : /* @__PURE__ */ oe.createElement(o, ke({
    className: e
  }, t), n);
}
class wn {
  /**
   * Filter and clean an HTML attribute value.
   */
  attribute(e, n) {
    return n;
  }
  /**
   * Filter and clean an HTML node.
   */
  node(e, n) {
    return n;
  }
}
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var gn = /["'&<>]/, Sn = Tn;
function Tn(t) {
  var e = "" + t, n = gn.exec(e);
  if (!n)
    return e;
  var r, s = "", o = 0, i = 0;
  for (o = n.index; o < e.length; o++) {
    switch (e.charCodeAt(o)) {
      case 34:
        r = "&quot;";
        break;
      case 38:
        r = "&amp;";
        break;
      case 39:
        r = "&#39;";
        break;
      case 60:
        r = "&lt;";
        break;
      case 62:
        r = "&gt;";
        break;
      default:
        continue;
    }
    i !== o && (s += e.substring(i, o)), i = o + 1, s += r;
  }
  return i !== o ? s + e.substring(i, o) : s;
}
const Rn = /* @__PURE__ */ an(Sn);
function Q(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
const Nn = /(url|image|image-set)\(/i;
class Cn extends wn {
  attribute(e, n) {
    return e === "style" && Object.keys(n).forEach((r) => {
      String(n[r]).match(Nn) && delete n[r];
    }), n;
  }
}
const pt = 1, An = 3, On = /^<(!doctype|(html|head|body)(\s|>))/i, vn = /^(aria-|data-|\w+:)/iu, _n = /{{{(\w+)\/?}}}/;
function kn() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class xn {
  constructor(e, n = {}, r = [], s = []) {
    var o;
    if (Q(this, "allowed", void 0), Q(this, "banned", void 0), Q(this, "blocked", void 0), Q(this, "container", void 0), Q(this, "content", []), Q(this, "props", void 0), Q(this, "matchers", void 0), Q(this, "filters", void 0), Q(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = n, this.matchers = r, this.filters = [...s, new Cn()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = n.allowList) !== null && o !== void 0 ? o : bn), this.banned = new Set(mn), this.blocked = new Set(n.blockList);
  }
  /**
   * Loop through and apply all registered attribute filters.
   */
  applyAttributeFilters(e, n) {
    return this.filters.reduce((r, s) => r !== null && typeof s.attribute == "function" ? s.attribute(e, r) : r, n);
  }
  /**
   * Loop through and apply all registered node filters.
   */
  applyNodeFilters(e, n) {
    return this.filters.reduce((r, s) => r !== null && typeof s.node == "function" ? s.node(e, r) : r, n);
  }
  /**
   * Loop through and apply all registered matchers to the string.
   * If a match is found, create a React element, and build a new array.
   * This array allows React to interpolate and render accordingly.
   */
  applyMatchers(e, n) {
    const r = {}, {
      props: s
    } = this;
    let o = e, i = 0, c = null;
    return this.matchers.forEach((d) => {
      const a = d.asTag().toLowerCase(), u = this.getTagConfig(a);
      if (s[d.inverseName] || !this.isTagAllowed(a) || !this.canRenderChild(n, u))
        return;
      let p = "";
      for (; o && (c = d.match(o)); ) {
        const {
          index: y,
          length: w,
          match: h,
          valid: E,
          void: m,
          ...T
        } = c, b = d.propName + String(i);
        y > 0 && (p += o.slice(0, y)), E ? (p += m ? `{{{${b}/}}}` : `{{{${b}}}}${h}{{{/${b}}}}`, this.keyIndex += 1, i += 1, r[b] = {
          children: h,
          matcher: d,
          props: {
            ...s,
            ...T,
            key: this.keyIndex
          }
        }) : p += h, d.greedy ? (o = p + o.slice(y + w), p = "") : o = o.slice(y + (w || h.length));
      }
      d.greedy || (o = p + o);
    }), i === 0 ? e : this.replaceTokens(o, r);
  }
  /**
   * Determine whether the child can be rendered within the parent.
   */
  canRenderChild(e, n) {
    return !e.tagName || !n.tagName || e.void ? !1 : e.children.length > 0 ? e.children.includes(n.tagName) : e.invalid.length > 0 && e.invalid.includes(n.tagName) ? !1 : n.parent.length > 0 ? n.parent.includes(e.tagName) : !e.self && e.tagName === n.tagName ? !1 : !!(e && e.content & n.type);
  }
  /**
   * Convert line breaks in a string to HTML `<br/>` tags.
   * If the string contains HTML, we should not convert anything,
   * as line breaks should be handled by `<br/>`s in the markup itself.
   */
  convertLineBreaks(e) {
    const {
      noHtml: n,
      disableLineBreaks: r
    } = this.props;
    if (n || r || e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))
      return e;
    let s = e.replace(/\r\n/g, `
`);
    return s = s.replace(/\n{3,}/g, `


`), s = s.replace(/\n/g, "<br/>"), s;
  }
  /**
   * Create a detached HTML document that allows for easy HTML
   * parsing while not triggering scripts or loading external
   * resources.
   */
  createContainer(e) {
    var n;
    const s = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || kn)();
    if (!s)
      return;
    const o = (n = this.props.containerTagName) !== null && n !== void 0 ? n : "body", i = o === "body" || o === "fragment" ? s.body : s.createElement(o);
    if (e.match(On)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      i.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? Rn(e) : e);
    return i;
  }
  /**
   * Convert an elements attribute map to an object map.
   * Returns null if no attributes are defined.
   */
  extractAttributes(e) {
    const {
      allowAttributes: n
    } = this.props, r = {};
    let s = 0;
    return e.nodeType !== pt || !e.attributes || ([...e.attributes].forEach((o) => {
      const {
        name: i,
        value: c
      } = o, d = i.toLowerCase(), a = ht[d] || ht[i];
      if (!this.isSafe(e) || !d.match(vn) && (!n && (!a || a === yn) || d.startsWith("on") || c.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let u = d === "style" ? this.extractStyleAttribute(e) : c;
      a === fe ? u = !0 : a === ge ? u = Number.parseFloat(String(u)) : a !== Pt && (u = String(u)), r[En[d] || d] = this.applyAttributeFilters(d, u), s += 1;
    }), s === 0) ? null : r;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(e) {
    const n = {};
    return Array.from(e.style).forEach((r) => {
      const s = e.style[r];
      (typeof s == "string" || typeof s == "number") && (n[r.replace(/-([a-z])/g, (o, i) => String(i).toUpperCase())] = s);
    }), n;
  }
  /**
   * Return configuration for a specific tag.
   */
  getTagConfig(e) {
    const n = {
      children: [],
      content: 0,
      invalid: [],
      parent: [],
      self: !0,
      tagName: "",
      type: 0,
      void: !1
    };
    return Xe[e] ? {
      ...n,
      ...Xe[e],
      tagName: e
    } : n;
  }
  /**
   * Verify that a node is safe from XSS and injection attacks.
   */
  isSafe(e) {
    if (typeof HTMLAnchorElement < "u" && e instanceof HTMLAnchorElement) {
      const n = e.getAttribute("href");
      if (n != null && n.startsWith("#"))
        return !0;
      const r = e.protocol.toLowerCase();
      return r === ":" || r === "http:" || r === "https:" || r === "mailto:" || r === "tel:";
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
  parseNode(e, n) {
    const {
      noHtml: r,
      noHtmlExceptMatchers: s,
      allowElements: o,
      transform: i,
      transformOnlyAllowList: c
    } = this.props;
    let d = [], a = "";
    return [...e.childNodes].forEach((u) => {
      if (u.nodeType === pt) {
        const y = u.nodeName.toLowerCase(), w = this.getTagConfig(y);
        a && (d.push(a), a = "");
        const h = this.applyNodeFilters(y, u);
        if (!h)
          return;
        let E;
        if (i && !(c && !this.isTagAllowed(y))) {
          this.keyIndex += 1;
          const m = this.keyIndex;
          E = this.parseNode(h, w);
          const T = i(h, E, w);
          if (T === null)
            return;
          if (typeof T < "u") {
            d.push(/* @__PURE__ */ oe.cloneElement(T, {
              key: m
            }));
            return;
          }
          this.keyIndex = m - 1;
        }
        if (this.banned.has(y))
          return;
        if (!(r || s && y !== "br") && this.isTagAllowed(y) && (o || this.canRenderChild(n, w))) {
          var p;
          this.keyIndex += 1;
          const m = this.extractAttributes(h), T = {
            tagName: y
          };
          m && (T.attributes = m), w.void && (T.selfClose = w.void), d.push(/* @__PURE__ */ oe.createElement(Ut, {
            ...T,
            key: this.keyIndex
          }, (p = E) !== null && p !== void 0 ? p : this.parseNode(h, w)));
        } else
          d = [...d, ...this.parseNode(h, w.tagName ? w : n)];
      } else if (u.nodeType === An) {
        const y = r && !s ? u.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(u.textContent || "", n)
        );
        Array.isArray(y) ? d = [...d, ...y] : a += y;
      }
    }), a && d.push(a), d;
  }
  /**
   * Deconstruct the string into an array, by replacing custom tokens with React elements,
   * so that React can render it correctly.
   */
  replaceTokens(e, n) {
    if (!e.includes("{{{"))
      return e;
    const r = [];
    let s = e, o = null;
    for (; o = s.match(_n); ) {
      const [i, c] = o, d = o.index, a = i.includes("/");
      if (process.env.NODE_ENV !== "production" && !n[c])
        throw new Error(`Token "${c}" found but no matching element to replace with.`);
      d > 0 && (r.push(s.slice(0, d)), s = s.slice(d));
      const {
        children: u,
        matcher: p,
        props: y
      } = n[c];
      let w;
      if (a)
        w = i.length, r.push(p.createElement(u, y));
      else {
        const h = s.match(new RegExp(`{{{/${c}}}}`));
        if (process.env.NODE_ENV !== "production" && !h)
          throw new Error(`Closing token missing for interpolated element "${c}".`);
        w = h.index + h[0].length, r.push(p.createElement(this.replaceTokens(s.slice(i.length, h.index), n), y));
      }
      s = s.slice(w);
    }
    return s.length > 0 && r.push(s), r.length === 0 ? "" : r.length === 1 && typeof r[0] == "string" ? r[0] : r;
  }
}
function Ln(t) {
  var e;
  const {
    attributes: n,
    className: r,
    containerTagName: s,
    content: o,
    emptyContent: i,
    parsedContent: c,
    tagName: d,
    noWrap: a
  } = t, u = (e = s ?? d) !== null && e !== void 0 ? e : "span", p = u === "fragment" ? !0 : a;
  let y;
  if (c)
    y = c;
  else {
    const w = new xn(o ?? "", t).parse();
    w.length > 0 && (y = w);
  }
  return y || (y = i), p ? /* @__PURE__ */ oe.createElement(oe.Fragment, null, y) : /* @__PURE__ */ oe.createElement(Ut, {
    attributes: n,
    className: r,
    tagName: u
  }, y);
}
function Dt(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Pn } = Object.prototype, { getPrototypeOf: rt } = Object, { iterator: Ue, toStringTag: Ft } = Symbol, De = ((t) => (e) => {
  const n = Pn.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), W = (t) => (t = t.toLowerCase(), (e) => De(e) === t), Fe = (t) => (e) => typeof e === t, { isArray: pe } = Array, Se = Fe("undefined");
function Un(t) {
  return t !== null && !Se(t) && t.constructor !== null && !Se(t.constructor) && I(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Bt = W("ArrayBuffer");
function Dn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Bt(t.buffer), e;
}
const Fn = Fe("string"), I = Fe("function"), Mt = Fe("number"), Be = (t) => t !== null && typeof t == "object", Bn = (t) => t === !0 || t === !1, Ae = (t) => {
  if (De(t) !== "object")
    return !1;
  const e = rt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Ft in t) && !(Ue in t);
}, Mn = W("Date"), In = W("File"), Hn = W("Blob"), jn = W("FileList"), qn = (t) => Be(t) && I(t.pipe), Vn = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || I(t.append) && ((e = De(t)) === "formdata" || // detect form-data instance
  e === "object" && I(t.toString) && t.toString() === "[object FormData]"));
}, $n = W("URLSearchParams"), [zn, Wn, Jn, Kn] = ["ReadableStream", "Request", "Response", "Headers"].map(W), Gn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Te(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), pe(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], e.call(null, t[c], c, t);
  }
}
function It(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const se = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ht = (t) => !Se(t) && t !== se;
function Ye() {
  const { caseless: t } = Ht(this) && this || {}, e = {}, n = (r, s) => {
    const o = t && It(e, s) || s;
    Ae(e[o]) && Ae(r) ? e[o] = Ye(e[o], r) : Ae(r) ? e[o] = Ye({}, r) : pe(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Te(arguments[r], n);
  return e;
}
const Xn = (t, e, n, { allOwnKeys: r } = {}) => (Te(e, (s, o) => {
  n && I(s) ? t[o] = Dt(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), Yn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Qn = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Zn = (t, e, n, r) => {
  let s, o, i;
  const c = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !c[i] && (e[i] = t[i], c[i] = !0);
    t = n !== !1 && rt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, er = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, tr = (t) => {
  if (!t)
    return null;
  if (pe(t))
    return t;
  let e = t.length;
  if (!Mt(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, nr = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && rt(Uint8Array)), rr = (t, e) => {
  const r = (t && t[Ue]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, sr = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, or = W("HTMLFormElement"), ir = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), mt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), ar = W("RegExp"), jt = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Te(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, lr = (t) => {
  jt(t, (e, n) => {
    if (I(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (I(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, cr = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return pe(t) ? r(t) : r(String(t).split(e)), n;
}, ur = () => {
}, dr = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function fr(t) {
  return !!(t && I(t.append) && t[Ft] === "FormData" && t[Ue]);
}
const hr = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (Be(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = pe(r) ? [] : {};
        return Te(r, (i, c) => {
          const d = n(i, s + 1);
          !Se(d) && (o[c] = d);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, pr = W("AsyncFunction"), mr = (t) => t && (Be(t) || I(t)) && I(t.then) && I(t.catch), qt = ((t, e) => t ? setImmediate : e ? ((n, r) => (se.addEventListener("message", ({ source: s, data: o }) => {
  s === se && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), se.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  I(se.postMessage)
), br = typeof queueMicrotask < "u" ? queueMicrotask.bind(se) : typeof process < "u" && process.nextTick || qt, yr = (t) => t != null && I(t[Ue]), l = {
  isArray: pe,
  isArrayBuffer: Bt,
  isBuffer: Un,
  isFormData: Vn,
  isArrayBufferView: Dn,
  isString: Fn,
  isNumber: Mt,
  isBoolean: Bn,
  isObject: Be,
  isPlainObject: Ae,
  isReadableStream: zn,
  isRequest: Wn,
  isResponse: Jn,
  isHeaders: Kn,
  isUndefined: Se,
  isDate: Mn,
  isFile: In,
  isBlob: Hn,
  isRegExp: ar,
  isFunction: I,
  isStream: qn,
  isURLSearchParams: $n,
  isTypedArray: nr,
  isFileList: jn,
  forEach: Te,
  merge: Ye,
  extend: Xn,
  trim: Gn,
  stripBOM: Yn,
  inherits: Qn,
  toFlatObject: Zn,
  kindOf: De,
  kindOfTest: W,
  endsWith: er,
  toArray: tr,
  forEachEntry: rr,
  matchAll: sr,
  isHTMLForm: or,
  hasOwnProperty: mt,
  hasOwnProp: mt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jt,
  freezeMethods: lr,
  toObjectSet: cr,
  toCamelCase: ir,
  noop: ur,
  toFiniteNumber: dr,
  findKey: It,
  global: se,
  isContextDefined: Ht,
  isSpecCompliantForm: fr,
  toJSONObject: hr,
  isAsyncFn: pr,
  isThenable: mr,
  setImmediate: qt,
  asap: br,
  isIterable: yr
};
function S(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
l.inherits(S, Error, {
  toJSON: function() {
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Vt = S.prototype, $t = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  $t[t] = { value: t };
});
Object.defineProperties(S, $t);
Object.defineProperty(Vt, "isAxiosError", { value: !0 });
S.from = (t, e, n, r, s, o) => {
  const i = Object.create(Vt);
  return l.toFlatObject(t, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), S.call(i, t.message, e, n, r, s), i.cause = t, i.name = t.name, o && Object.assign(i, o), i;
};
const Er = null;
function Qe(t) {
  return l.isPlainObject(t) || l.isArray(t);
}
function zt(t) {
  return l.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function bt(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = zt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function wr(t) {
  return l.isArray(t) && !t.some(Qe);
}
const gr = l.toFlatObject(l, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Me(t, e, n) {
  if (!l.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, m) {
    return !l.isUndefined(m[E]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(e);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function a(h) {
    if (h === null)
      return "";
    if (l.isDate(h))
      return h.toISOString();
    if (!d && l.isBlob(h))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(h) || l.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, E, m) {
    let T = h;
    if (h && !m && typeof h == "object") {
      if (l.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), h = JSON.stringify(h);
      else if (l.isArray(h) && wr(h) || (l.isFileList(h) || l.endsWith(E, "[]")) && (T = l.toArray(h)))
        return E = zt(E), T.forEach(function(A, k) {
          !(l.isUndefined(A) || A === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bt([E], k, o) : i === null ? E : E + "[]",
            a(A)
          );
        }), !1;
    }
    return Qe(h) ? !0 : (e.append(bt(m, E, o), a(h)), !1);
  }
  const p = [], y = Object.assign(gr, {
    defaultVisitor: u,
    convertValue: a,
    isVisitable: Qe
  });
  function w(h, E) {
    if (!l.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      p.push(h), l.forEach(h, function(T, b) {
        (!(l.isUndefined(T) || T === null) && s.call(
          e,
          T,
          l.isString(b) ? b.trim() : b,
          E,
          y
        )) === !0 && w(T, E ? E.concat(b) : [b]);
      }), p.pop();
    }
  }
  if (!l.isObject(t))
    throw new TypeError("data must be an object");
  return w(t), e;
}
function yt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function st(t, e) {
  this._pairs = [], t && Me(t, this, e);
}
const Wt = st.prototype;
Wt.append = function(e, n) {
  this._pairs.push([e, n]);
};
Wt.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, yt);
  } : yt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Sr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jt(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Sr;
  l.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = l.isURLSearchParams(e) ? e.toString() : new st(e, n).toString(r), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class Tr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    l.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Et = Tr, Kt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rr = typeof URLSearchParams < "u" ? URLSearchParams : st, Nr = typeof FormData < "u" ? FormData : null, Cr = typeof Blob < "u" ? Blob : null, Ar = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rr,
    FormData: Nr,
    Blob: Cr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ot = typeof window < "u" && typeof document < "u", Ze = typeof navigator == "object" && navigator || void 0, Or = ot && (!Ze || ["ReactNative", "NativeScript", "NS"].indexOf(Ze.product) < 0), vr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _r = ot && window.location.href || "http://localhost", kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ot,
  hasStandardBrowserEnv: Or,
  hasStandardBrowserWebWorkerEnv: vr,
  navigator: Ze,
  origin: _r
}, Symbol.toStringTag, { value: "Module" })), B = {
  ...kr,
  ...Ar
};
function xr(t, e) {
  return Me(t, new B.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return B.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Lr(t) {
  return l.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Pr(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function Gt(t) {
  function e(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), d = o >= n.length;
    return i = !i && l.isArray(s) ? s.length : i, d ? (l.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !l.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && l.isArray(s[i]) && (s[i] = Pr(s[i])), !c);
  }
  if (l.isFormData(t) && l.isFunction(t.entries)) {
    const n = {};
    return l.forEachEntry(t, (r, s) => {
      e(Lr(r), s, n, 0);
    }), n;
  }
  return null;
}
function Ur(t, e, n) {
  if (l.isString(t))
    try {
      return (e || JSON.parse)(t), l.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const it = {
  transitional: Kt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(e);
    if (o && l.isHTMLForm(e) && (e = new FormData(e)), l.isFormData(e))
      return s ? JSON.stringify(Gt(e)) : e;
    if (l.isArrayBuffer(e) || l.isBuffer(e) || l.isStream(e) || l.isFile(e) || l.isBlob(e) || l.isReadableStream(e))
      return e;
    if (l.isArrayBufferView(e))
      return e.buffer;
    if (l.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return xr(e, this.formSerializer).toString();
      if ((c = l.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return Me(
          c ? { "files[]": e } : e,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Ur(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || it.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(e) || l.isReadableStream(e))
      return e;
    if (e && l.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? S.from(c, S.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
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
  env: {
    FormData: B.classes.FormData,
    Blob: B.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
l.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  it.headers[t] = {};
});
const at = it, Dr = l.toObjectSet([
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
]), Fr = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && Dr[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, wt = Symbol("internals");
function we(t) {
  return t && String(t).trim().toLowerCase();
}
function Oe(t) {
  return t === !1 || t == null ? t : l.isArray(t) ? t.map(Oe) : String(t);
}
function Br(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Mr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function $e(t, e, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!l.isString(e)) {
    if (l.isString(r))
      return e.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(e);
  }
}
function Ir(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Hr(t, e) {
  const n = l.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
class Ie {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(c, d, a) {
      const u = we(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(s, u);
      (!p || s[p] === void 0 || a === !0 || a === void 0 && s[p] !== !1) && (s[p || d] = Oe(c));
    }
    const i = (c, d) => l.forEach(c, (a, u) => o(a, u, d));
    if (l.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (l.isString(e) && (e = e.trim()) && !Mr(e))
      i(Fr(e), n);
    else if (l.isObject(e) && l.isIterable(e)) {
      let c = {}, d, a;
      for (const u of e) {
        if (!l.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        c[a = u[0]] = (d = c[a]) ? l.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      i(c, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = we(e), e) {
      const r = l.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Br(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = we(e), e) {
      const r = l.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || $e(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = we(i), i) {
        const c = l.findKey(r, i);
        c && (!n || $e(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return l.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || $e(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return l.forEach(this, (s, o) => {
      const i = l.findKey(r, o);
      if (i) {
        n[i] = Oe(s), delete n[o];
        return;
      }
      const c = e ? Ir(o) : String(o).trim();
      c !== o && delete n[o], n[c] = Oe(s), r[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && l.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[wt] = this[wt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = we(i);
      r[c] || (Hr(s, i), r[c] = !0);
    }
    return l.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Ie.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(Ie.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(Ie);
const z = Ie;
function ze(t, e) {
  const n = this || at, r = e || n, s = z.from(r.headers);
  let o = r.data;
  return l.forEach(t, function(c) {
    o = c.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Xt(t) {
  return !!(t && t.__CANCEL__);
}
function me(t, e, n) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, e, n), this.name = "CanceledError";
}
l.inherits(me, S, {
  __CANCEL__: !0
});
function Yt(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function jr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function qr(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(d) {
    const a = Date.now(), u = r[o];
    i || (i = a), n[s] = d, r[s] = a;
    let p = o, y = 0;
    for (; p !== s; )
      y += n[p++], p = p % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), a - i < e)
      return;
    const w = u && a - u;
    return w ? Math.round(y * 1e3 / w) : void 0;
  };
}
function Vr(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (a, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), t.apply(null, a);
  };
  return [(...a) => {
    const u = Date.now(), p = u - n;
    p >= r ? i(a, u) : (s = a, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const xe = (t, e, n = 3) => {
  let r = 0;
  const s = qr(50, 250);
  return Vr((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - r, a = s(d), u = i <= c;
    r = i;
    const p = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: a || void 0,
      estimated: a && c && u ? (c - i) / a : void 0,
      event: o,
      lengthComputable: c != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, n);
}, gt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, St = (t) => (...e) => l.asap(() => t(...e)), $r = B.hasStandardBrowserEnv ? ((t, e) => (n) => (n = new URL(n, B.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(B.origin),
  B.navigator && /(msie|trident)/i.test(B.navigator.userAgent)
) : () => !0, zr = B.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o) {
      const i = [t + "=" + encodeURIComponent(e)];
      l.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), l.isString(r) && i.push("path=" + r), l.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Wr(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Jr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Qt(t, e, n) {
  let r = !Wr(e);
  return t && (r || n == !1) ? Jr(t, e) : e;
}
const Tt = (t) => t instanceof z ? { ...t } : t;
function ae(t, e) {
  e = e || {};
  const n = {};
  function r(a, u, p, y) {
    return l.isPlainObject(a) && l.isPlainObject(u) ? l.merge.call({ caseless: y }, a, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function s(a, u, p, y) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(a))
        return r(void 0, a, p, y);
    } else
      return r(a, u, p, y);
  }
  function o(a, u) {
    if (!l.isUndefined(u))
      return r(void 0, u);
  }
  function i(a, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(a))
        return r(void 0, a);
    } else
      return r(void 0, u);
  }
  function c(a, u, p) {
    if (p in e)
      return r(a, u);
    if (p in t)
      return r(void 0, a);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (a, u, p) => s(Tt(a), Tt(u), p, !0)
  };
  return l.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const p = d[u] || s, y = p(t[u], e[u], u);
    l.isUndefined(y) && p !== c || (n[u] = y);
  }), n;
}
const Zt = (t) => {
  const e = ae({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = e;
  e.headers = i = z.from(i), e.url = Jt(Qt(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (l.isFormData(n)) {
    if (B.hasStandardBrowserEnv || B.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [a, ...u] = d ? d.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([a || "multipart/form-data", ...u].join("; "));
    }
  }
  if (B.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(e)), r || r !== !1 && $r(e.url))) {
    const a = s && o && zr.read(o);
    a && i.set(s, a);
  }
  return e;
}, Kr = typeof XMLHttpRequest < "u", Gr = Kr && function(t) {
  return new Promise(function(n, r) {
    const s = Zt(t);
    let o = s.data;
    const i = z.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: a } = s, u, p, y, w, h;
    function E() {
      w && w(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function T() {
      if (!m)
        return;
      const A = z.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), U = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: A,
        config: t,
        request: m
      };
      Yt(function(v) {
        n(v), E();
      }, function(v) {
        r(v), E();
      }, U), m = null;
    }
    "onloadend" in m ? m.onloadend = T : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, m.onabort = function() {
      m && (r(new S("Request aborted", S.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, t, m)), m = null;
    }, m.ontimeout = function() {
      let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const U = s.transitional || Kt;
      s.timeoutErrorMessage && (k = s.timeoutErrorMessage), r(new S(
        k,
        U.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        t,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && l.forEach(i.toJSON(), function(k, U) {
      m.setRequestHeader(U, k);
    }), l.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), c && c !== "json" && (m.responseType = s.responseType), a && ([y, h] = xe(a, !0), m.addEventListener("progress", y)), d && m.upload && ([p, w] = xe(d), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (u = (A) => {
      m && (r(!A || A.type ? new me(null, t, m) : A), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const b = jr(s.url);
    if (b && B.protocols.indexOf(b) === -1) {
      r(new S("Unsupported protocol " + b + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(o || null);
  });
}, Xr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(a) {
      if (!s) {
        s = !0, c();
        const u = a instanceof Error ? a : this.reason;
        r.abort(u instanceof S ? u : new me(u instanceof Error ? u.message : u));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new S(`timeout ${e} of ms exceeded`, S.ETIMEDOUT));
    }, e);
    const c = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((a) => {
        a.unsubscribe ? a.unsubscribe(o) : a.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((a) => a.addEventListener("abort", o));
    const { signal: d } = r;
    return d.unsubscribe = () => l.asap(c), d;
  }
}, Yr = Xr, Qr = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Zr = async function* (t, e) {
  for await (const n of es(t))
    yield* Qr(n, e);
}, es = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, Rt = (t, e, n, r) => {
  const s = Zr(t, e);
  let o = 0, i, c = (d) => {
    i || (i = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: a, value: u } = await s.next();
        if (a) {
          c(), d.close();
          return;
        }
        let p = u.byteLength;
        if (n) {
          let y = o += p;
          n(y);
        }
        d.enqueue(new Uint8Array(u));
      } catch (a) {
        throw c(a), a;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, He = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", en = He && typeof ReadableStream == "function", ts = He && (typeof TextEncoder == "function" ? ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), tn = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, ns = en && tn(() => {
  let t = !1;
  const e = new Request(B.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Nt = 64 * 1024, et = en && tn(() => l.isReadableStream(new Response("").body)), Le = {
  stream: et && ((t) => t.body)
};
He && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Le[e] && (Le[e] = l.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new S(`Response type '${e}' is not supported`, S.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const rs = async (t) => {
  if (t == null)
    return 0;
  if (l.isBlob(t))
    return t.size;
  if (l.isSpecCompliantForm(t))
    return (await new Request(B.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (l.isArrayBufferView(t) || l.isArrayBuffer(t))
    return t.byteLength;
  if (l.isURLSearchParams(t) && (t = t + ""), l.isString(t))
    return (await ts(t)).byteLength;
}, ss = async (t, e) => {
  const n = l.toFiniteNumber(t.getContentLength());
  return n ?? rs(e);
}, os = He && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: a,
    headers: u,
    withCredentials: p = "same-origin",
    fetchOptions: y
  } = Zt(t);
  a = a ? (a + "").toLowerCase() : "text";
  let w = Yr([s, o && o.toAbortSignal()], i), h;
  const E = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let m;
  try {
    if (d && ns && n !== "get" && n !== "head" && (m = await ss(u, r)) !== 0) {
      let U = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), M;
      if (l.isFormData(r) && (M = U.headers.get("content-type")) && u.setContentType(M), U.body) {
        const [v, j] = gt(
          m,
          xe(St(d))
        );
        r = Rt(U.body, Nt, v, j);
      }
    }
    l.isString(p) || (p = p ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    h = new Request(e, {
      ...y,
      signal: w,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: T ? p : void 0
    });
    let b = await fetch(h);
    const A = et && (a === "stream" || a === "response");
    if (et && (c || A && E)) {
      const U = {};
      ["status", "statusText", "headers"].forEach((ee) => {
        U[ee] = b[ee];
      });
      const M = l.toFiniteNumber(b.headers.get("content-length")), [v, j] = c && gt(
        M,
        xe(St(c), !0)
      ) || [];
      b = new Response(
        Rt(b.body, Nt, v, () => {
          j && j(), E && E();
        }),
        U
      );
    }
    a = a || "text";
    let k = await Le[l.findKey(Le, a) || "text"](b, t);
    return !A && E && E(), await new Promise((U, M) => {
      Yt(U, M, {
        data: k,
        headers: z.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: h
      });
    });
  } catch (T) {
    throw E && E(), T && T.name === "TypeError" && /Load failed|fetch/i.test(T.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, t, h),
      {
        cause: T.cause || T
      }
    ) : S.from(T, T && T.code, t, h);
  }
}), tt = {
  http: Er,
  xhr: Gr,
  fetch: os
};
l.forEach(tt, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ct = (t) => `- ${t}`, is = (t) => l.isFunction(t) || t === null || t === !1, nn = {
  getAdapter: (t) => {
    t = l.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let i;
      if (r = n, !is(n) && (r = tt[(i = String(n)).toLowerCase()], r === void 0))
        throw new S(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? o.length > 1 ? `since :
` + o.map(Ct).join(`
`) : " " + Ct(o[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: tt
};
function We(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new me(null, t);
}
function At(t) {
  return We(t), t.headers = z.from(t.headers), t.data = ze.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), nn.getAdapter(t.adapter || at.adapter)(t).then(function(r) {
    return We(t), r.data = ze.call(
      t,
      t.transformResponse,
      r
    ), r.headers = z.from(r.headers), r;
  }, function(r) {
    return Xt(r) || (We(t), r && r.response && (r.response.data = ze.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = z.from(r.response.headers))), Promise.reject(r);
  });
}
const rn = "1.9.0", je = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  je[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ot = {};
je.transitional = function(e, n, r) {
  function s(o, i) {
    return "[Axios v" + rn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (e === !1)
      throw new S(
        s(i, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !Ot[i] && (Ot[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, i, c) : !0;
  };
};
je.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function as(t, e, n) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const c = t[o], d = c === void 0 || i(c, o, t);
      if (d !== !0)
        throw new S("option " + o + " must be " + d, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
  }
}
const ve = {
  assertOptions: as,
  validators: je
}, G = ve.validators;
class Pe {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Et(),
      response: new Et()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ae(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ve.assertOptions(r, {
      silentJSONParsing: G.transitional(G.boolean),
      forcedJSONParsing: G.transitional(G.boolean),
      clarifyTimeoutError: G.transitional(G.boolean)
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ve.assertOptions(s, {
      encode: G.function,
      serialize: G.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ve.assertOptions(n, {
      baseUrl: G.spelling("baseURL"),
      withXsrfToken: G.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && l.merge(
      o.common,
      o[n.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = z.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (d = d && E.synchronous, c.unshift(E.fulfilled, E.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function(E) {
      a.push(E.fulfilled, E.rejected);
    });
    let u, p = 0, y;
    if (!d) {
      const h = [At.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, a), y = h.length, u = Promise.resolve(n); p < y; )
        u = u.then(h[p++], h[p++]);
      return u;
    }
    y = c.length;
    let w = n;
    for (p = 0; p < y; ) {
      const h = c[p++], E = c[p++];
      try {
        w = h(w);
      } catch (m) {
        E.call(this, m);
        break;
      }
    }
    try {
      u = At.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, y = a.length; p < y; )
      u = u.then(a[p++], a[p++]);
    return u;
  }
  getUri(e) {
    e = ae(this.defaults, e);
    const n = Qt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Jt(n, e.params, e.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(e) {
  Pe.prototype[e] = function(n, r) {
    return this.request(ae(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, c) {
      return this.request(ae(c || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Pe.prototype[e] = n(), Pe.prototype[e + "Form"] = n(!0);
});
const _e = Pe;
class lt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, e(function(o, i, c) {
      r.reason || (r.reason = new me(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new lt(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
const ls = lt;
function cs(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function us(t) {
  return l.isObject(t) && t.isAxiosError === !0;
}
const nt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(nt).forEach(([t, e]) => {
  nt[e] = t;
});
const ds = nt;
function sn(t) {
  const e = new _e(t), n = Dt(_e.prototype.request, e);
  return l.extend(n, _e.prototype, e, { allOwnKeys: !0 }), l.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return sn(ae(t, s));
  }, n;
}
const D = sn(at);
D.Axios = _e;
D.CanceledError = me;
D.CancelToken = ls;
D.isCancel = Xt;
D.VERSION = rn;
D.toFormData = Me;
D.AxiosError = S;
D.Cancel = D.CanceledError;
D.all = function(e) {
  return Promise.all(e);
};
D.spread = cs;
D.isAxiosError = us;
D.mergeConfig = ae;
D.AxiosHeaders = z;
D.formToJSON = (t) => Gt(l.isHTMLForm(t) ? new FormData(t) : t);
D.getAdapter = nn.getAdapter;
D.HttpStatusCode = ds;
D.default = D;
const fs = D, on = P.createContext({});
const hs = ({
  conditionControls: t,
  conditionLookup: e,
  conditionSettings: n,
  conditionIndex: r,
  removeCondition: s,
  selectedColumn: o,
  updateConditionsList: i
}) => {
  var T;
  const [c, d] = t, a = c[r], u = (b, A) => {
    const k = [...c];
    k[b] = A, d(k);
  }, y = Object.keys(e).filter((b) => b !== o), { columnName: w, isOrIsNotEqualTo: h, value: E } = n, m = (b, A) => {
    const k = $.cloneDeep(n);
    A === "columnName" && (k.value = ""), k[A] = b, i(k, r);
  };
  return a ? /* @__PURE__ */ R(he, { children: [
    /* @__PURE__ */ R("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => {
            const b = [...c];
            b[r] = !1, d(b);
          },
          children: /* @__PURE__ */ f(ie, { display: "caretDown" })
        }
      ),
      /* @__PURE__ */ f("button", { className: "btn btn-warn btn-sm mt-0 ms-2", onClick: () => s(r), children: "Remove" })
    ] }),
    /* @__PURE__ */ f("div", { id: `condition_${r}`, children: /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ f("span", { children: "Condition : " }),
      /* @__PURE__ */ R("div", { className: "pt-1", children: [
        /* @__PURE__ */ R(
          "select",
          {
            className: "ms-1",
            value: w,
            onChange: (b) => m(b.target.value, "columnName"),
            children: [
              /* @__PURE__ */ f("option", { value: "", children: "Select" }),
              y == null ? void 0 : y.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
            ]
          }
        ),
        /* @__PURE__ */ R(
          "select",
          {
            className: "ms-1",
            value: h,
            onChange: (b) => m(b.target.value, "isOrIsNotEqualTo"),
            children: [
              /* @__PURE__ */ f("option", { value: "is", children: "is" }),
              /* @__PURE__ */ f("option", { value: "isNot", children: "is not" })
            ]
          }
        ),
        /* @__PURE__ */ R("select", { className: "ms-1", value: E, onChange: (b) => m(b.target.value, "value"), children: [
          /* @__PURE__ */ f("option", { value: "", children: "Select" }),
          (T = e[w]) == null ? void 0 : T.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
        ] })
      ] })
    ] }) })
  ] }) : /* @__PURE__ */ f(he, { children: /* @__PURE__ */ R("div", { className: "mb-1", children: [
    /* @__PURE__ */ f("button", { onClick: () => u(r, !0), children: /* @__PURE__ */ f(ie, { display: "caretDown" }) }),
    /* @__PURE__ */ R("span", { children: [
      " ",
      E ? `${w} ${h === "is" ? "is" : "is not"} ${E}` : "New Condition"
    ] })
  ] }) });
}, ps = ({
  controls: t,
  data: e,
  deleteVariable: n,
  updateVariableArray: r,
  variableConfig: s,
  variableIndex: o
}) => {
  const [i, c] = t, d = i[o], a = (N, L) => {
    c({ openVariableControls: i, [N]: L });
  }, u = P.useState([]), p = Object.keys((e == null ? void 0 : e[0]) || {}), [y, w] = P.useState(s.columnName), [h, E] = P.useState(s.conditions), [m, T] = P.useState(s.name), [b, A] = P.useState(s.addCommas), k = P.useMemo(() => p.reduce((N, L) => (N[L] = $.uniq(e.map((H) => H[L])), N), {}), [p]), U = () => {
    A(!b);
  }, M = (N) => {
    w(N), E([]);
  }, v = (N, L) => {
    const { columnName: H, isOrIsNotEqualTo: be, value: ue } = N, C = $.cloneDeep(h);
    C[L] = {
      columnName: H,
      isOrIsNotEqualTo: be,
      value: ue
    }, E(C);
  }, j = (N) => {
    const L = $.cloneDeep(h);
    L.splice(N, 1), E(L);
  }, ee = () => {
    E([
      ...h,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [N, L] = u, H = [...N];
    H[h.length + 1] = !0, L(H);
  }, re = () => {
    const N = h.filter(
      (H) => H.columnName !== "" && H.value !== ""
    ), L = {
      columnName: y,
      conditions: N,
      name: m,
      tag: `{{${m}}}`,
      addCommas: b
    };
    r(L, o), a(o, !1);
  }, ce = m === "", te = ce || y === "";
  return /* @__PURE__ */ f(he, { children: d ? /* @__PURE__ */ R("fieldset", { className: "edit-block mb-1", children: [
    /* @__PURE__ */ R("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ f("button", { onClick: re, disabled: te, children: /* @__PURE__ */ f(ie, { display: "caretUp" }) }),
      /* @__PURE__ */ f(
        "button",
        {
          className: "btn btn-danger btn-sm mt-0 ms-2",
          onClick: (N) => {
            N.preventDefault(), n(o);
          },
          children: "Delete"
        }
      )
    ] }),
    /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: "Variable Name:" }),
      /* @__PURE__ */ f(
        "input",
        {
          className: `variable-${o} ms-1`,
          type: "text",
          value: m,
          onChange: (N) => T(N.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ f("div", { className: "pt-2", children: /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: "Column:" }),
      /* @__PURE__ */ R(
        "select",
        {
          className: `variable-${o} ms-1`,
          onChange: (N) => M(N.target.value),
          value: y,
          disabled: ce,
          children: [
            /* @__PURE__ */ f("option", { value: "", children: "Select" }),
            p.map((N) => /* @__PURE__ */ f("option", { value: N, children: N }, N))
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ f("div", { className: "pt-2", children: /* @__PURE__ */ f(
      kt,
      {
        value: b,
        label: "Add Commas to Number",
        updateField: U,
        tooltip: /* @__PURE__ */ R(Z, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ f(Z.Target, { children: /* @__PURE__ */ f(
            ie,
            {
              display: "question",
              style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
            }
          ) }),
          /* @__PURE__ */ f(Z.Content, { children: /* @__PURE__ */ f("p", { children: "Selecting this option will add commas to the numeric value." }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ R("label", { className: "d-block py-2", children: [
      /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: "Conditions:" }),
      h.map((N, L) => /* @__PURE__ */ f("div", { className: "condition-section mt-2", children: /* @__PURE__ */ f(
        hs,
        {
          conditionControls: u,
          conditionLookup: k,
          conditionSettings: N,
          conditionIndex: L,
          removeCondition: j,
          selectedColumn: y,
          updateConditionsList: v
        },
        m + "-condition-" + L
      ) }))
    ] }),
    /* @__PURE__ */ R("div", { className: "mt-1", children: [
      /* @__PURE__ */ f("button", { onClick: ee, disabled: te, children: "Add Condition" }),
      /* @__PURE__ */ f("button", { className: "ms-2", onClick: re, disabled: te, children: "Done" })
    ] })
  ] }, o) : /* @__PURE__ */ f(he, { children: /* @__PURE__ */ R("div", { className: "mb-2", children: [
    /* @__PURE__ */ f("button", { onClick: () => a(o, !0), children: /* @__PURE__ */ f(ie, { display: "caretDown" }) }),
    /* @__PURE__ */ R("span", { children: [
      " ",
      m ? `${m}` : "New Variable"
    ] })
  ] }) }) });
}, ms = [
  "theme-blue",
  "theme-purple",
  "theme-brown",
  "theme-teal",
  "theme-pink",
  "theme-orange",
  "theme-slate",
  "theme-indigo",
  "theme-cyan",
  "theme-green",
  "theme-amber"
], bs = ({ datasets: t }) => {
  const { config: e, data: n, isDashboard: r, loading: s, setParentConfig: o, updateConfig: i } = P.useContext(on), { contentEditor: c, theme: d, visual: a } = e, { inlineHTML: u, markupVariables: p, srcUrl: y, title: w, useInlineHTML: h, allowHideSection: E } = c, [m, T] = P.useState(!0), b = ln(e, i, !0), A = (n == null ? void 0 : n[0]) !== void 0, k = P.useState([]);
  P.useEffect(() => {
    if (o) {
      const C = M();
      o(C);
    }
  }, [e]), P.useEffect(() => {
    const C = { ...e };
    delete C.newViz, i(C);
  }, []);
  const U = () => {
    T(!m), i({
      ...e,
      showEditorPanel: !m
    });
  }, M = () => {
    const C = $.cloneDeep(e);
    return delete C.newViz, delete C.runtime, C;
  }, [v, j] = P.useState([...p]), [ee, re] = P.useState(!1), ce = P.useRef(null), [te, N] = k, L = () => {
    const C = [...$.cloneDeep(v)], q = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    N({ ...te, [v.length + 1]: !0 }), C.push(q), j(C), re(!ee);
  }, H = (C, q) => {
    const ne = $.cloneDeep(v);
    ne[q] = C, j(ne), b("contentEditor", null, "markupVariables", ne);
  }, be = (C) => {
    const q = $.cloneDeep(v);
    q.splice(C, 1), j(q), b("contentEditor", null, "markupVariables", q);
    const ne = $.cloneDeep(te);
    delete ne[C], N(ne);
  }, ue = /* @__PURE__ */ R(Ee, { children: [
    /* @__PURE__ */ f(Ee.Section, { title: "General", children: /* @__PURE__ */ f(
      Ve,
      {
        value: w || "",
        section: "contentEditor",
        fieldName: "title",
        label: "Title",
        placeholder: "Markup Include Title",
        updateField: b
      }
    ) }),
    /* @__PURE__ */ R(Ee.Section, { title: "Content Editor", children: [
      /* @__PURE__ */ f("span", { className: "divider-heading", children: "Enter Markup" }),
      /* @__PURE__ */ f(
        de,
        {
          inline: !0,
          value: h,
          section: "contentEditor",
          fieldName: "useInlineHTML",
          label: "Use Inline HTML ",
          updateField: b
        }
      ),
      /* @__PURE__ */ f("div", { className: "column-edit", children: h ? /* @__PURE__ */ R(he, { children: [
        /* @__PURE__ */ R("div", { ref: ce, children: [
          /* @__PURE__ */ f(
            Ve,
            {
              value: u,
              section: "contentEditor",
              fieldName: "inlineHTML",
              label: "HTML",
              placeholder: "Add HTML here",
              type: "textarea",
              rows: 10,
              updateField: b
            }
          ),
          /* @__PURE__ */ f("hr", { className: "accordion__divider" })
        ] }),
        /* @__PURE__ */ R("fieldset", { children: [
          /* @__PURE__ */ f("label", { children: /* @__PURE__ */ R("span", { className: "edit-label", children: [
            "Variables",
            /* @__PURE__ */ R(Z, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ f(Z.Target, { children: /* @__PURE__ */ f(ie, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ f(Z.Content, { children: "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML" })
            ] })
          ] }) }),
          A === !1 && /* @__PURE__ */ f("span", { className: "need-data-source-prompt", children: "To use variables, add data source." }),
          v && v.length > 0 && /* @__PURE__ */ f("div", { className: "section-border", children: v == null ? void 0 : v.map((C, q) => /* @__PURE__ */ f(
            ps,
            {
              controls: k,
              data: n,
              deleteVariable: be,
              updateVariableArray: H,
              variableConfig: C,
              variableIndex: q
            },
            `${C.name}-${q}`
          )) }),
          /* @__PURE__ */ f("div", { className: "pt-2", children: /* @__PURE__ */ f(
            kt,
            {
              value: E,
              section: "contentEditor",
              fieldName: "allowHideSection",
              label: "Hide Section on Null",
              updateField: b,
              tooltip: /* @__PURE__ */ R(Z, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ f(Z.Target, { children: /* @__PURE__ */ f(
                  ie,
                  {
                    display: "question",
                    style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                  }
                ) }),
                /* @__PURE__ */ f(Z.Content, { children: /* @__PURE__ */ f("p", { children: "Hide this entire Markup Include section if any variable is null or blank." }) })
              ] })
            }
          ) }),
          /* @__PURE__ */ f("div", { className: "mb-1 d-flex", children: /* @__PURE__ */ f(
            "button",
            {
              className: "btn btn-primary",
              onClick: L,
              disabled: !A,
              children: "Create New Variable"
            }
          ) })
        ] })
      ] }) : /* @__PURE__ */ f(
        Ve,
        {
          value: y || "",
          section: "contentEditor",
          fieldName: "srcUrl",
          label: "Source URL;",
          placeholder: "https://www.example.com/file.html",
          updateField: b
        }
      ) })
    ] }),
    /* @__PURE__ */ R(Ee.Section, { title: "Visual", children: [
      /* @__PURE__ */ R("div", { className: "input-group", children: [
        /* @__PURE__ */ f("label", { children: "Theme" }),
        /* @__PURE__ */ f("ul", { className: "color-palette", children: ms.map((C) => /* @__PURE__ */ f(
          "li",
          {
            title: C,
            onClick: () => {
              i({ ...e, theme: C });
            },
            className: d === C ? "selected " + C : C
          },
          C
        )) })
      ] }),
      /* @__PURE__ */ R("div", { className: "cove-accordion__panel-section checkbox-group", children: [
        /* @__PURE__ */ f(
          de,
          {
            value: a.border,
            section: "visual",
            fieldName: "border",
            label: "Display Border ",
            updateField: b
          }
        ),
        /* @__PURE__ */ f(
          de,
          {
            value: a.borderColorTheme,
            section: "visual",
            fieldName: "borderColorTheme",
            label: "Use Border Color Theme ",
            updateField: b
          }
        ),
        /* @__PURE__ */ f(
          de,
          {
            value: a.accent,
            section: "visual",
            fieldName: "accent",
            label: "Use Accent Style ",
            updateField: b
          }
        ),
        /* @__PURE__ */ f(
          de,
          {
            value: a.background,
            section: "visual",
            fieldName: "background",
            label: "Use Theme Background Color ",
            updateField: b
          }
        ),
        /* @__PURE__ */ f(
          de,
          {
            value: a.hideBackgroundColor,
            section: "visual",
            fieldName: "hideBackgroundColor",
            label: "Hide Background Color ",
            updateField: b
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ f(Ee.Section, { title: "Footnotes", children: /* @__PURE__ */ f(fn, { config: e, updateField: b, datasets: t }) })
  ] });
  return s && !(e != null && e.showEditorPanel) ? null : /* @__PURE__ */ f(_t, { component: "EditorPanel", children: /* @__PURE__ */ f(
    Je.Sidebar,
    {
      displayPanel: m,
      isDashboard: r,
      title: "Configure Markup Include",
      onBackClick: U,
      children: ue
    }
  ) });
}, vt = {
  contentEditor: {
    inlineHTML: "<h2>Inline HTML</h2>",
    markupVariables: [],
    showHeader: !0,
    srcUrl: "#example",
    title: "Markup Include",
    useInlineHTML: !1
  },
  data: [],
  legend: {},
  newViz: !0,
  theme: "theme-blue",
  type: "markup-include",
  runtime: null,
  visual: {
    border: !1,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1
  }
}, ys = (t, e) => {
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
const xs = ({
  configUrl: t,
  config: e,
  datasets: n,
  isDashboard: r = !0,
  isEditor: s = !1,
  setConfig: o
}) => {
  const i = {
    config: e,
    loading: !0,
    urlMarkup: "",
    markupError: null,
    errorMessage: null,
    coveLoadedHasRan: !1
  }, [c, d] = P.useReducer(ys, i), { config: a, loading: u, urlMarkup: p, markupError: y, errorMessage: w, coveLoadedHasRan: h } = c, E = P.useRef(), { innerContainerClasses: m, contentClasses: T } = cn(a || {}), { contentEditor: b, theme: A } = a || {}, k = e == null ? void 0 : e.data, { inlineHTML: U, markupVariables: M, srcUrl: v, title: j, useInlineHTML: ee } = b || {}, re = (g) => {
    Object.keys(vt).forEach((x) => {
      g[x] && typeof g[x] == "object" && !Array.isArray(g[x]) && (g[x] = { ...vt[x], ...g[x] });
    }), g.runtime = {}, g.runtime.uniqueId = Date.now(), g.runtime.editorErrorMessage = "", d({ type: "SET_CONFIG", payload: g });
  }, ce = async () => {
    let g = e || await (await fetch(t)).json(), x = g.data ?? {};
    g.dataUrl && (x = await (await fetch(g.dataUrl)).json()), g.data = x;
    const J = { ...un(g) };
    re({ ...e, ...J }), d({ type: "SET_LOADING", payload: !1 });
  };
  P.useEffect(() => {
    if (y) {
      let g = y, x = "There was a problem retrieving the content from " + v + ". ", J = /https?:\/\//g;
      g === 404 && !v.match(J) && (g = "proto"), x += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[g], d({ type: "SET_ERROR_MESSAGE", payload: x });
    } else
      d({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [y]);
  const te = async () => {
    if (d({ type: "SET_MARKUP_ERROR", payload: null }), v)
      if (v === "#example")
        d({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await fs.get(v).then((g) => {
            g.data && d({ type: "SET_URL_MARKUP", payload: g.data });
          });
        } catch (g) {
          g.response ? d({ type: "SET_MARKUP_ERROR", payload: g.response.status }) : g.request && d({ type: "SET_MARKUP_ERROR", payload: 200 }), d({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      d({ type: "SET_URL_MARKUP", payload: "" });
  }, N = (g, x) => {
    const { columnName: J, isOrIsNotEqualTo: V, value: Y } = x[0], Re = V === "is" ? g == null ? void 0 : g.filter((K) => K[J] === Y) : g == null ? void 0 : g.filter((K) => K[J] !== Y);
    return x.shift(), x.length === 0 ? Re : N(Re, x);
  }, L = [], H = (g) => {
    if ($.isEmpty(M))
      return g;
    const x = /{{(.*?)}}/g;
    return g.replace(x, (V) => {
      if (L.length > 0)
        return;
      const Y = M.filter((ye) => ye.tag === V)[0];
      if (Y === void 0)
        return [V];
      const Re = Y && Y.conditions.length === 0 ? k : N(k, [...Y.conditions]), K = $.uniq(
        (Re || []).map((ye) => {
          const qe = ye[Y.columnName];
          return Y.addCommas && !isNaN(parseFloat(qe)) ? parseFloat(qe).toLocaleString("en-US", { useGrouping: !0 }) : qe;
        })
      ), ct = [], ut = s ? "or" : "and", Ne = K.length;
      if (Ne === 2) {
        const ye = K.join(` ${ut} `);
        K.splice(0, 2, ye);
      }
      Ne > 2 && (K[Ne - 1] = `${ut} ${K[Ne - 1]}`), ct.push(K.join(", "));
      const dt = ct[0];
      return dt === "" && b.allowHideSection && L.push(!0), dt;
    });
  }, be = (g) => {
    let x, J = !1;
    if (g && g !== "" && g !== null) {
      const V = g.toString();
      V.match(/<body[^>]*>/i) && V.match(/<\/body\s*>/i) ? (J = !0, x = V.match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : x = V;
    }
    return J ? x[1] : x;
  };
  P.useEffect(() => {
    ce().catch((g) => console.log(g)), ft("cove_loaded", { loadConfigHasRun: !0 });
  }, []), P.useEffect(() => {
    a && !h && E && (ft("cove_loaded", { config: a }), d({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [a, E]), P.useEffect(() => {
    te().catch((g) => console.log(g));
  }, [a]);
  let ue = /* @__PURE__ */ f(dn, {});
  const C = ee ? H(U) : be(p), q = (b == null ? void 0 : b.allowHideSection) && L.length > 0 && !s;
  u === !1 && (ue = /* @__PURE__ */ R(he, { children: [
    s && /* @__PURE__ */ f(bs, { datasets: n }),
    !q && /* @__PURE__ */ f(Je.Responsive, { isEditor: s, children: /* @__PURE__ */ R("div", { className: "markup-include-content-container cove-component__content no-borders", children: [
      /* @__PURE__ */ R("div", { className: `markup-include-component ${T.join(" ")}`, children: [
        /* @__PURE__ */ f(pn, { title: j, isDashboard: r, classes: [`${A}`, "mb-0"] }),
        /* @__PURE__ */ f("div", { className: `${m.join(" ")}`, children: /* @__PURE__ */ R("div", { className: "cove-component__content-wrap", children: [
          !y && /* @__PURE__ */ f(Ln, { allowElements: !!p, content: C }),
          y && v && /* @__PURE__ */ f("div", { className: "warning", children: w })
        ] }) })
      ] }),
      /* @__PURE__ */ f(hn, { config: e.footnotes, filters: [] })
    ] }) })
  ] }));
  const ne = () => /* @__PURE__ */ f("section", { className: "waiting", children: /* @__PURE__ */ R("section", { className: "waiting-container", children: [
    /* @__PURE__ */ f("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ f("p", { children: a == null ? void 0 : a.runtime.editorErrorMessage })
  ] }) });
  return /* @__PURE__ */ f(_t, { component: "CdcMarkupInclude", children: /* @__PURE__ */ R(on.Provider, { value: { config: a, updateConfig: re, loading: u, data: k, setParentConfig: o, isDashboard: r }, children: [
    !(a != null && a.newViz) && (a == null ? void 0 : a.runtime) && (a == null ? void 0 : a.runtime.editorErrorMessage) && /* @__PURE__ */ f(ne, {}),
    /* @__PURE__ */ f(Je.VisualizationWrapper, { config: a, isEditor: s, showEditorPanel: a == null ? void 0 : a.showEditorPanel, children: ue })
  ] }) });
};
export {
  xs as C,
  fs as a
};
