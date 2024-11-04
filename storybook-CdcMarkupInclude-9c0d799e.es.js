import { R as c, r as k } from "./storybook-index-45401197.es.js";
import { _ as W } from "./storybook-lodash-a4231e1c.es.js";
import { g as Zt } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { L as Me, u as en, c as tn, p as ot } from "./storybook-coveUpdateWorker-2249800a.es.js";
import { u as nn } from "./storybook-updateFieldFactory-c006040a.es.js";
import { I as De, a as ae } from "./storybook-editor-dff456fd.es.js";
import { E as Rt, L as rn } from "./storybook-Loading-f180d060.es.js";
import { a as le } from "./storybook-Icon-73ec66ec.es.js";
import { T as ce } from "./storybook-Tooltip-4102bd69.es.js";
import { A as be } from "./storybook-Accordion-f47153d9.es.js";
import { C as sn } from "./storybook-Inputs-776ab3df.es.js";
import { T as on } from "./storybook-index-e5bf02db.es.js";
const O = 1, Nt = 2, Ct = 4, F = 8, He = 16, ge = 32, J = 64, je = {
  a: {
    content: O | F,
    self: !1,
    type: O | F | ge | J
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
    content: O | Nt | Ct | F | He | ge | J
  },
  button: {
    content: F,
    type: O | F | ge | J
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
    type: O | ge | J
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
    type: O | F | He
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
function re(t) {
  return (e) => {
    je[e] = {
      ...t,
      ...je[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(re({
  content: O,
  type: O | J
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(re({
  content: F,
  type: O | F | J
}));
["p", "pre"].forEach(re({
  content: F,
  type: O | J
}));
["s", "small", "span", "del", "ins"].forEach(re({
  content: F,
  type: O | F
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(re({
  content: O,
  type: O | Nt | J
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(re({
  content: F,
  type: O | Ct | J
}));
["audio", "canvas", "iframe", "img", "video"].forEach(re({
  type: O | F | He | J
}));
const qe = Object.freeze(je), an = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], ln = Object.keys(qe).filter((t) => t !== "canvas" && t !== "iframe"), v = 1, cn = 2, pe = 3, ie = 4, At = 5, at = Object.freeze({
  alt: v,
  cite: v,
  class: v,
  colspan: pe,
  controls: ie,
  datetime: v,
  default: ie,
  disabled: ie,
  dir: v,
  height: v,
  href: v,
  id: v,
  kind: v,
  label: v,
  lang: v,
  loading: v,
  loop: ie,
  media: v,
  muted: ie,
  poster: v,
  rel: v,
  role: v,
  rowspan: pe,
  scope: v,
  sizes: v,
  span: pe,
  start: pe,
  style: At,
  src: v,
  srclang: v,
  srcset: v,
  tabindex: v,
  target: v,
  title: v,
  type: v,
  width: v
}), un = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function Re() {
  return Re = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Re.apply(this, arguments);
}
function Ot({
  attributes: t = {},
  className: e,
  children: n = null,
  selfClose: r = !1,
  tagName: s
}) {
  const o = s;
  return r ? /* @__PURE__ */ c.createElement(o, Re({
    className: e
  }, t)) : /* @__PURE__ */ c.createElement(o, Re({
    className: e
  }, t), n);
}
class dn {
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
var fn = /["'&<>]/, pn = mn;
function mn(t) {
  var e = "" + t, n = fn.exec(e);
  if (!n)
    return e;
  var r, s = "", o = 0, a = 0;
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
    a !== o && (s += e.substring(a, o)), a = o + 1, s += r;
  }
  return a !== o ? s + e.substring(a, o) : s;
}
const hn = /* @__PURE__ */ Zt(pn);
function X(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
const En = /(url|image|image-set)\(/i;
class yn extends dn {
  attribute(e, n) {
    return e === "style" && Object.keys(n).forEach((r) => {
      String(n[r]).match(En) && delete n[r];
    }), n;
  }
}
const it = 1, bn = 3, gn = /^<(!doctype|(html|head|body)(\s|>))/i, wn = /^(aria-|data-|\w+:)/iu, Sn = /{{{(\w+)\/?}}}/;
function Tn() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class Rn {
  constructor(e, n = {}, r = [], s = []) {
    var o;
    if (X(this, "allowed", void 0), X(this, "banned", void 0), X(this, "blocked", void 0), X(this, "container", void 0), X(this, "content", []), X(this, "props", void 0), X(this, "matchers", void 0), X(this, "filters", void 0), X(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = n, this.matchers = r, this.filters = [...s, new yn()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = n.allowList) !== null && o !== void 0 ? o : ln), this.banned = new Set(an), this.blocked = new Set(n.blockList);
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
    let o = e, a = 0, i = null;
    return this.matchers.forEach((u) => {
      const d = u.asTag().toLowerCase(), f = this.getTagConfig(d);
      if (s[u.inverseName] || !this.isTagAllowed(d) || !this.canRenderChild(n, f))
        return;
      let h = "";
      for (; o && (i = u.match(o)); ) {
        const {
          index: E,
          length: w,
          match: p,
          valid: y,
          void: m,
          ...T
        } = i, b = u.propName + String(a);
        E > 0 && (h += o.slice(0, E)), y ? (h += m ? `{{{${b}/}}}` : `{{{${b}}}}${p}{{{/${b}}}}`, this.keyIndex += 1, a += 1, r[b] = {
          children: p,
          matcher: u,
          props: {
            ...s,
            ...T,
            key: this.keyIndex
          }
        }) : h += p, u.greedy ? (o = h + o.slice(E + w), h = "") : o = o.slice(E + (w || p.length));
      }
      u.greedy || (o = h + o);
    }), a === 0 ? e : this.replaceTokens(o, r);
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
    const s = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || Tn)();
    if (!s)
      return;
    const o = (n = this.props.containerTagName) !== null && n !== void 0 ? n : "body", a = o === "body" || o === "fragment" ? s.body : s.createElement(o);
    if (e.match(gn)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      a.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? hn(e) : e);
    return a;
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
    return e.nodeType !== it || !e.attributes || ([...e.attributes].forEach((o) => {
      const {
        name: a,
        value: i
      } = o, u = a.toLowerCase(), d = at[u] || at[a];
      if (!this.isSafe(e) || !u.match(wn) && (!n && (!d || d === cn) || u.startsWith("on") || i.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let f = u === "style" ? this.extractStyleAttribute(e) : i;
      d === ie ? f = !0 : d === pe ? f = Number.parseFloat(String(f)) : d !== At && (f = String(f)), r[un[u] || u] = this.applyAttributeFilters(u, f), s += 1;
    }), s === 0) ? null : r;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(e) {
    const n = {};
    return Array.from(e.style).forEach((r) => {
      const s = e.style[r];
      (typeof s == "string" || typeof s == "number") && (n[r.replace(/-([a-z])/g, (o, a) => String(a).toUpperCase())] = s);
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
    return qe[e] ? {
      ...n,
      ...qe[e],
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
      transform: a,
      transformOnlyAllowList: i
    } = this.props;
    let u = [], d = "";
    return [...e.childNodes].forEach((f) => {
      if (f.nodeType === it) {
        const E = f.nodeName.toLowerCase(), w = this.getTagConfig(E);
        d && (u.push(d), d = "");
        const p = this.applyNodeFilters(E, f);
        if (!p)
          return;
        let y;
        if (a && !(i && !this.isTagAllowed(E))) {
          this.keyIndex += 1;
          const m = this.keyIndex;
          y = this.parseNode(p, w);
          const T = a(p, y, w);
          if (T === null)
            return;
          if (typeof T < "u") {
            u.push(/* @__PURE__ */ c.cloneElement(T, {
              key: m
            }));
            return;
          }
          this.keyIndex = m - 1;
        }
        if (this.banned.has(E))
          return;
        if (!(r || s && E !== "br") && this.isTagAllowed(E) && (o || this.canRenderChild(n, w))) {
          var h;
          this.keyIndex += 1;
          const m = this.extractAttributes(p), T = {
            tagName: E
          };
          m && (T.attributes = m), w.void && (T.selfClose = w.void), u.push(/* @__PURE__ */ c.createElement(Ot, {
            ...T,
            key: this.keyIndex
          }, (h = y) !== null && h !== void 0 ? h : this.parseNode(p, w)));
        } else
          u = [...u, ...this.parseNode(p, w.tagName ? w : n)];
      } else if (f.nodeType === bn) {
        const E = r && !s ? f.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(f.textContent || "", n)
        );
        Array.isArray(E) ? u = [...u, ...E] : d += E;
      }
    }), d && u.push(d), u;
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
    for (; o = s.match(Sn); ) {
      const [a, i] = o, u = o.index, d = a.includes("/");
      if (process.env.NODE_ENV !== "production" && !n[i])
        throw new Error(`Token "${i}" found but no matching element to replace with.`);
      u > 0 && (r.push(s.slice(0, u)), s = s.slice(u));
      const {
        children: f,
        matcher: h,
        props: E
      } = n[i];
      let w;
      if (d)
        w = a.length, r.push(h.createElement(f, E));
      else {
        const p = s.match(new RegExp(`{{{/${i}}}}`));
        if (process.env.NODE_ENV !== "production" && !p)
          throw new Error(`Closing token missing for interpolated element "${i}".`);
        w = p.index + p[0].length, r.push(h.createElement(this.replaceTokens(s.slice(a.length, p.index), n), E));
      }
      s = s.slice(w);
    }
    return s.length > 0 && r.push(s), r.length === 0 ? "" : r.length === 1 && typeof r[0] == "string" ? r[0] : r;
  }
}
function Nn(t) {
  var e;
  const {
    attributes: n,
    className: r,
    containerTagName: s,
    content: o,
    emptyContent: a,
    parsedContent: i,
    tagName: u,
    noWrap: d
  } = t, f = (e = s ?? u) !== null && e !== void 0 ? e : "span", h = f === "fragment" ? !0 : d;
  let E;
  if (i)
    E = i;
  else {
    const w = new Rn(o ?? "", t).parse();
    w.length > 0 && (E = w);
  }
  return E || (E = a), h ? /* @__PURE__ */ c.createElement(c.Fragment, null, E) : /* @__PURE__ */ c.createElement(Ot, {
    attributes: n,
    className: r,
    tagName: f
  }, E);
}
function vt(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Cn } = Object.prototype, { getPrototypeOf: Xe } = Object, Oe = ((t) => (e) => {
  const n = Cn.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), q = (t) => (t = t.toLowerCase(), (e) => Oe(e) === t), ve = (t) => (e) => typeof e === t, { isArray: ue } = Array, me = ve("undefined");
function An(t) {
  return t !== null && !me(t) && t.constructor !== null && !me(t.constructor) && H(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const _t = q("ArrayBuffer");
function On(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && _t(t.buffer), e;
}
const vn = ve("string"), H = ve("function"), kt = ve("number"), _e = (t) => t !== null && typeof t == "object", _n = (t) => t === !0 || t === !1, we = (t) => {
  if (Oe(t) !== "object")
    return !1;
  const e = Xe(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, kn = q("Date"), Ln = q("File"), xn = q("Blob"), Pn = q("FileList"), Dn = (t) => _e(t) && H(t.pipe), Fn = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || H(t.append) && ((e = Oe(t)) === "formdata" || // detect form-data instance
  e === "object" && H(t.toString) && t.toString() === "[object FormData]"));
}, Un = q("URLSearchParams"), [Bn, In, Mn, Hn] = ["ReadableStream", "Request", "Response", "Headers"].map(q), jn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function he(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), ue(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), a = o.length;
    let i;
    for (r = 0; r < a; r++)
      i = o[r], e.call(null, t[i], i, t);
  }
}
function Lt(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const te = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), xt = (t) => !me(t) && t !== te;
function Ve() {
  const { caseless: t } = xt(this) && this || {}, e = {}, n = (r, s) => {
    const o = t && Lt(e, s) || s;
    we(e[o]) && we(r) ? e[o] = Ve(e[o], r) : we(r) ? e[o] = Ve({}, r) : ue(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && he(arguments[r], n);
  return e;
}
const qn = (t, e, n, { allOwnKeys: r } = {}) => (he(e, (s, o) => {
  n && H(s) ? t[o] = vt(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), Vn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), $n = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, zn = (t, e, n, r) => {
  let s, o, a;
  const i = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, t, e)) && !i[a] && (e[a] = t[a], i[a] = !0);
    t = n !== !1 && Xe(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Wn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Jn = (t) => {
  if (!t)
    return null;
  if (ue(t))
    return t;
  let e = t.length;
  if (!kt(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Kn = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Xe(Uint8Array)), Gn = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, Xn = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Yn = q("HTMLFormElement"), Qn = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), lt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Zn = q("RegExp"), Pt = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  he(n, (s, o) => {
    let a;
    (a = e(s, o, t)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(t, r);
}, er = (t) => {
  Pt(t, (e, n) => {
    if (H(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (H(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, tr = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return ue(t) ? r(t) : r(String(t).split(e)), n;
}, nr = () => {
}, rr = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Fe = "abcdefghijklmnopqrstuvwxyz", ct = "0123456789", Dt = {
  DIGIT: ct,
  ALPHA: Fe,
  ALPHA_DIGIT: Fe + Fe.toUpperCase() + ct
}, sr = (t = 16, e = Dt.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function or(t) {
  return !!(t && H(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const ar = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (_e(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = ue(r) ? [] : {};
        return he(r, (a, i) => {
          const u = n(a, s + 1);
          !me(u) && (o[i] = u);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, ir = q("AsyncFunction"), lr = (t) => t && (_e(t) || H(t)) && H(t.then) && H(t.catch), Ft = ((t, e) => t ? setImmediate : e ? ((n, r) => (te.addEventListener("message", ({ source: s, data: o }) => {
  s === te && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), te.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  H(te.postMessage)
), cr = typeof queueMicrotask < "u" ? queueMicrotask.bind(te) : typeof process < "u" && process.nextTick || Ft, l = {
  isArray: ue,
  isArrayBuffer: _t,
  isBuffer: An,
  isFormData: Fn,
  isArrayBufferView: On,
  isString: vn,
  isNumber: kt,
  isBoolean: _n,
  isObject: _e,
  isPlainObject: we,
  isReadableStream: Bn,
  isRequest: In,
  isResponse: Mn,
  isHeaders: Hn,
  isUndefined: me,
  isDate: kn,
  isFile: Ln,
  isBlob: xn,
  isRegExp: Zn,
  isFunction: H,
  isStream: Dn,
  isURLSearchParams: Un,
  isTypedArray: Kn,
  isFileList: Pn,
  forEach: he,
  merge: Ve,
  extend: qn,
  trim: jn,
  stripBOM: Vn,
  inherits: $n,
  toFlatObject: zn,
  kindOf: Oe,
  kindOfTest: q,
  endsWith: Wn,
  toArray: Jn,
  forEachEntry: Gn,
  matchAll: Xn,
  isHTMLForm: Yn,
  hasOwnProperty: lt,
  hasOwnProp: lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pt,
  freezeMethods: er,
  toObjectSet: tr,
  toCamelCase: Qn,
  noop: nr,
  toFiniteNumber: rr,
  findKey: Lt,
  global: te,
  isContextDefined: xt,
  ALPHABET: Dt,
  generateString: sr,
  isSpecCompliantForm: or,
  toJSONObject: ar,
  isAsyncFn: ir,
  isThenable: lr,
  setImmediate: Ft,
  asap: cr
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
const Ut = S.prototype, Bt = {};
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
  Bt[t] = { value: t };
});
Object.defineProperties(S, Bt);
Object.defineProperty(Ut, "isAxiosError", { value: !0 });
S.from = (t, e, n, r, s, o) => {
  const a = Object.create(Ut);
  return l.toFlatObject(t, a, function(u) {
    return u !== Error.prototype;
  }, (i) => i !== "isAxiosError"), S.call(a, t.message, e, n, r, s), a.cause = t, a.name = t.name, o && Object.assign(a, o), a;
};
const ur = null;
function $e(t) {
  return l.isPlainObject(t) || l.isArray(t);
}
function It(t) {
  return l.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ut(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = It(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function dr(t) {
  return l.isArray(t) && !t.some($e);
}
const fr = l.toFlatObject(l, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ke(t, e, n) {
  if (!l.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !l.isUndefined(m[y]);
  });
  const r = n.metaTokens, s = n.visitor || f, o = n.dots, a = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(e);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(p) {
    if (p === null)
      return "";
    if (l.isDate(p))
      return p.toISOString();
    if (!u && l.isBlob(p))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(p) || l.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, y, m) {
    let T = p;
    if (p && !m && typeof p == "object") {
      if (l.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (l.isArray(p) && dr(p) || (l.isFileList(p) || l.endsWith(y, "[]")) && (T = l.toArray(p)))
        return y = It(y), T.forEach(function(R, L) {
          !(l.isUndefined(R) || R === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ut([y], L, o) : a === null ? y : y + "[]",
            d(R)
          );
        }), !1;
    }
    return $e(p) ? !0 : (e.append(ut(m, y, o), d(p)), !1);
  }
  const h = [], E = Object.assign(fr, {
    defaultVisitor: f,
    convertValue: d,
    isVisitable: $e
  });
  function w(p, y) {
    if (!l.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      h.push(p), l.forEach(p, function(T, b) {
        (!(l.isUndefined(T) || T === null) && s.call(
          e,
          T,
          l.isString(b) ? b.trim() : b,
          y,
          E
        )) === !0 && w(T, y ? y.concat(b) : [b]);
      }), h.pop();
    }
  }
  if (!l.isObject(t))
    throw new TypeError("data must be an object");
  return w(t), e;
}
function dt(t) {
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
function Ye(t, e) {
  this._pairs = [], t && ke(t, this, e);
}
const Mt = Ye.prototype;
Mt.append = function(e, n) {
  this._pairs.push([e, n]);
};
Mt.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, dt);
  } : dt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function pr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ht(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || pr, s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = l.isURLSearchParams(e) ? e.toString() : new Ye(e, n).toString(r), o) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class mr {
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
const ft = mr, jt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, hr = typeof URLSearchParams < "u" ? URLSearchParams : Ye, Er = typeof FormData < "u" ? FormData : null, yr = typeof Blob < "u" ? Blob : null, br = {
  isBrowser: !0,
  classes: {
    URLSearchParams: hr,
    FormData: Er,
    Blob: yr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Qe = typeof window < "u" && typeof document < "u", ze = typeof navigator == "object" && navigator || void 0, gr = Qe && (!ze || ["ReactNative", "NativeScript", "NS"].indexOf(ze.product) < 0), wr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Sr = Qe && window.location.href || "http://localhost", Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Qe,
  hasStandardBrowserEnv: gr,
  hasStandardBrowserWebWorkerEnv: wr,
  navigator: ze,
  origin: Sr
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...Tr,
  ...br
};
function Rr(t, e) {
  return ke(t, new I.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return I.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Nr(t) {
  return l.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Cr(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function qt(t) {
  function e(n, r, s, o) {
    let a = n[o++];
    if (a === "__proto__")
      return !0;
    const i = Number.isFinite(+a), u = o >= n.length;
    return a = !a && l.isArray(s) ? s.length : a, u ? (l.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !i) : ((!s[a] || !l.isObject(s[a])) && (s[a] = []), e(n, r, s[a], o) && l.isArray(s[a]) && (s[a] = Cr(s[a])), !i);
  }
  if (l.isFormData(t) && l.isFunction(t.entries)) {
    const n = {};
    return l.forEachEntry(t, (r, s) => {
      e(Nr(r), s, n, 0);
    }), n;
  }
  return null;
}
function Ar(t, e, n) {
  if (l.isString(t))
    try {
      return (e || JSON.parse)(t), l.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Ze = {
  transitional: jt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(e);
    if (o && l.isHTMLForm(e) && (e = new FormData(e)), l.isFormData(e))
      return s ? JSON.stringify(qt(e)) : e;
    if (l.isArrayBuffer(e) || l.isBuffer(e) || l.isStream(e) || l.isFile(e) || l.isBlob(e) || l.isReadableStream(e))
      return e;
    if (l.isArrayBufferView(e))
      return e.buffer;
    if (l.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Rr(e, this.formSerializer).toString();
      if ((i = l.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ke(
          i ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Ar(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Ze.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(e) || l.isReadableStream(e))
      return e;
    if (e && l.isString(e) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? S.from(i, S.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
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
  Ze.headers[t] = {};
});
const et = Ze, Or = l.toObjectSet([
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
]), vr = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || e[n] && Or[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, pt = Symbol("internals");
function fe(t) {
  return t && String(t).trim().toLowerCase();
}
function Se(t) {
  return t === !1 || t == null ? t : l.isArray(t) ? t.map(Se) : String(t);
}
function _r(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const kr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ue(t, e, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!l.isString(e)) {
    if (l.isString(r))
      return e.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(e);
  }
}
function Lr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function xr(t, e) {
  const n = l.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, o, a) {
        return this[r].call(this, e, s, o, a);
      },
      configurable: !0
    });
  });
}
class Le {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(i, u, d) {
      const f = fe(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(s, f);
      (!h || s[h] === void 0 || d === !0 || d === void 0 && s[h] !== !1) && (s[h || u] = Se(i));
    }
    const a = (i, u) => l.forEach(i, (d, f) => o(d, f, u));
    if (l.isPlainObject(e) || e instanceof this.constructor)
      a(e, n);
    else if (l.isString(e) && (e = e.trim()) && !kr(e))
      a(vr(e), n);
    else if (l.isHeaders(e))
      for (const [i, u] of e.entries())
        o(u, i, r);
    else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = fe(e), e) {
      const r = l.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return _r(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = fe(e), e) {
      const r = l.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Ue(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = fe(a), a) {
        const i = l.findKey(r, a);
        i && (!n || Ue(r, r[i], i, n)) && (delete r[i], s = !0);
      }
    }
    return l.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || Ue(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return l.forEach(this, (s, o) => {
      const a = l.findKey(r, o);
      if (a) {
        n[a] = Se(s), delete n[o];
        return;
      }
      const i = e ? Lr(o) : String(o).trim();
      i !== o && delete n[o], n[i] = Se(s), r[i] = !0;
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
    const r = (this[pt] = this[pt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = fe(a);
      r[i] || (xr(s, a), r[i] = !0);
    }
    return l.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(Le.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(Le);
const j = Le;
function Be(t, e) {
  const n = this || et, r = e || n, s = j.from(r.headers);
  let o = r.data;
  return l.forEach(t, function(i) {
    o = i.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Vt(t) {
  return !!(t && t.__CANCEL__);
}
function de(t, e, n) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, e, n), this.name = "CanceledError";
}
l.inherits(de, S, {
  __CANCEL__: !0
});
function $t(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Pr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Dr(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, a;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const d = Date.now(), f = r[o];
    a || (a = d), n[s] = u, r[s] = d;
    let h = o, E = 0;
    for (; h !== s; )
      E += n[h++], h = h % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), d - a < e)
      return;
    const w = f && d - f;
    return w ? Math.round(E * 1e3 / w) : void 0;
  };
}
function Fr(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const a = (d, f = Date.now()) => {
    n = f, s = null, o && (clearTimeout(o), o = null), t.apply(null, d);
  };
  return [(...d) => {
    const f = Date.now(), h = f - n;
    h >= r ? a(d, f) : (s = d, o || (o = setTimeout(() => {
      o = null, a(s);
    }, r - h)));
  }, () => s && a(s)];
}
const Ne = (t, e, n = 3) => {
  let r = 0;
  const s = Dr(50, 250);
  return Fr((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, u = a - r, d = s(u), f = a <= i;
    r = a;
    const h = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: u,
      rate: d || void 0,
      estimated: d && i && f ? (i - a) / d : void 0,
      event: o,
      lengthComputable: i != null,
      [e ? "download" : "upload"]: !0
    };
    t(h);
  }, n);
}, mt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, ht = (t) => (...e) => l.asap(() => t(...e)), Ur = I.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = I.navigator && /(msie|trident)/i.test(I.navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let a = o;
      return e && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(a) {
      const i = l.isString(a) ? s(a) : a;
      return i.protocol === r.protocol && i.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
), Br = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o) {
      const a = [t + "=" + encodeURIComponent(e)];
      l.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), l.isString(r) && a.push("path=" + r), l.isString(s) && a.push("domain=" + s), o === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function Ir(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Mr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function zt(t, e) {
  return t && !Ir(e) ? Mr(t, e) : e;
}
const Et = (t) => t instanceof j ? { ...t } : t;
function ne(t, e) {
  e = e || {};
  const n = {};
  function r(d, f, h) {
    return l.isPlainObject(d) && l.isPlainObject(f) ? l.merge.call({ caseless: h }, d, f) : l.isPlainObject(f) ? l.merge({}, f) : l.isArray(f) ? f.slice() : f;
  }
  function s(d, f, h) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(d))
        return r(void 0, d, h);
    } else
      return r(d, f, h);
  }
  function o(d, f) {
    if (!l.isUndefined(f))
      return r(void 0, f);
  }
  function a(d, f) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(d))
        return r(void 0, d);
    } else
      return r(void 0, f);
  }
  function i(d, f, h) {
    if (h in e)
      return r(d, f);
    if (h in t)
      return r(void 0, d);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (d, f) => s(Et(d), Et(f), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const h = u[f] || s, E = h(t[f], e[f], f);
    l.isUndefined(E) && h !== i || (n[f] = E);
  }), n;
}
const Wt = (t) => {
  const e = ne({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: i } = e;
  e.headers = a = j.from(a), e.url = Ht(zt(e.baseURL, e.url), t.params, t.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let u;
  if (l.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((u = a.getContentType()) !== !1) {
      const [d, ...f] = u ? u.split(";").map((h) => h.trim()).filter(Boolean) : [];
      a.setContentType([d || "multipart/form-data", ...f].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(e)), r || r !== !1 && Ur(e.url))) {
    const d = s && o && Br.read(o);
    d && a.set(s, d);
  }
  return e;
}, Hr = typeof XMLHttpRequest < "u", jr = Hr && function(t) {
  return new Promise(function(n, r) {
    const s = Wt(t);
    let o = s.data;
    const a = j.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: u, onDownloadProgress: d } = s, f, h, E, w, p;
    function y() {
      w && w(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function T() {
      if (!m)
        return;
      const R = j.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), A = {
        data: !i || i === "text" || i === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: R,
        config: t,
        request: m
      };
      $t(function(M) {
        n(M), y();
      }, function(M) {
        r(M), y();
      }, A), m = null;
    }
    "onloadend" in m ? m.onloadend = T : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, m.onabort = function() {
      m && (r(new S("Request aborted", S.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, t, m)), m = null;
    }, m.ontimeout = function() {
      let L = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const A = s.transitional || jt;
      s.timeoutErrorMessage && (L = s.timeoutErrorMessage), r(new S(
        L,
        A.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        t,
        m
      )), m = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in m && l.forEach(a.toJSON(), function(L, A) {
      m.setRequestHeader(A, L);
    }), l.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), i && i !== "json" && (m.responseType = s.responseType), d && ([E, p] = Ne(d, !0), m.addEventListener("progress", E)), u && m.upload && ([h, w] = Ne(u), m.upload.addEventListener("progress", h), m.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (f = (R) => {
      m && (r(!R || R.type ? new de(null, t, m) : R), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const b = Pr(s.url);
    if (b && I.protocols.indexOf(b) === -1) {
      r(new S("Unsupported protocol " + b + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(o || null);
  });
}, qr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(d) {
      if (!s) {
        s = !0, i();
        const f = d instanceof Error ? d : this.reason;
        r.abort(f instanceof S ? f : new de(f instanceof Error ? f.message : f));
      }
    };
    let a = e && setTimeout(() => {
      a = null, o(new S(`timeout ${e} of ms exceeded`, S.ETIMEDOUT));
    }, e);
    const i = () => {
      t && (a && clearTimeout(a), a = null, t.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((d) => d.addEventListener("abort", o));
    const { signal: u } = r;
    return u.unsubscribe = () => l.asap(i), u;
  }
}, Vr = qr, $r = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, zr = async function* (t, e) {
  for await (const n of Wr(t))
    yield* $r(n, e);
}, Wr = async function* (t) {
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
}, yt = (t, e, n, r) => {
  const s = zr(t, e);
  let o = 0, a, i = (u) => {
    a || (a = !0, r && r(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: d, value: f } = await s.next();
        if (d) {
          i(), u.close();
          return;
        }
        let h = f.byteLength;
        if (n) {
          let E = o += h;
          n(E);
        }
        u.enqueue(new Uint8Array(f));
      } catch (d) {
        throw i(d), d;
      }
    },
    cancel(u) {
      return i(u), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, xe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Jt = xe && typeof ReadableStream == "function", Jr = xe && (typeof TextEncoder == "function" ? ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Kt = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Kr = Jt && Kt(() => {
  let t = !1;
  const e = new Request(I.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), bt = 64 * 1024, We = Jt && Kt(() => l.isReadableStream(new Response("").body)), Ce = {
  stream: We && ((t) => t.body)
};
xe && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Ce[e] && (Ce[e] = l.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new S(`Response type '${e}' is not supported`, S.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Gr = async (t) => {
  if (t == null)
    return 0;
  if (l.isBlob(t))
    return t.size;
  if (l.isSpecCompliantForm(t))
    return (await new Request(I.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (l.isArrayBufferView(t) || l.isArrayBuffer(t))
    return t.byteLength;
  if (l.isURLSearchParams(t) && (t = t + ""), l.isString(t))
    return (await Jr(t)).byteLength;
}, Xr = async (t, e) => {
  const n = l.toFiniteNumber(t.getContentLength());
  return n ?? Gr(e);
}, Yr = xe && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: a,
    onDownloadProgress: i,
    onUploadProgress: u,
    responseType: d,
    headers: f,
    withCredentials: h = "same-origin",
    fetchOptions: E
  } = Wt(t);
  d = d ? (d + "").toLowerCase() : "text";
  let w = Vr([s, o && o.toAbortSignal()], a), p;
  const y = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let m;
  try {
    if (u && Kr && n !== "get" && n !== "head" && (m = await Xr(f, r)) !== 0) {
      let A = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), x;
      if (l.isFormData(r) && (x = A.headers.get("content-type")) && f.setContentType(x), A.body) {
        const [M, V] = mt(
          m,
          Ne(ht(u))
        );
        r = yt(A.body, bt, M, V);
      }
    }
    l.isString(h) || (h = h ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    p = new Request(e, {
      ...E,
      signal: w,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: T ? h : void 0
    });
    let b = await fetch(p);
    const R = We && (d === "stream" || d === "response");
    if (We && (i || R && y)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((K) => {
        A[K] = b[K];
      });
      const x = l.toFiniteNumber(b.headers.get("content-length")), [M, V] = i && mt(
        x,
        Ne(ht(i), !0)
      ) || [];
      b = new Response(
        yt(b.body, bt, M, () => {
          V && V(), y && y();
        }),
        A
      );
    }
    d = d || "text";
    let L = await Ce[l.findKey(Ce, d) || "text"](b, t);
    return !R && y && y(), await new Promise((A, x) => {
      $t(A, x, {
        data: L,
        headers: j.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: p
      });
    });
  } catch (T) {
    throw y && y(), T && T.name === "TypeError" && /fetch/i.test(T.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, t, p),
      {
        cause: T.cause || T
      }
    ) : S.from(T, T && T.code, t, p);
  }
}), Je = {
  http: ur,
  xhr: jr,
  fetch: Yr
};
l.forEach(Je, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const gt = (t) => `- ${t}`, Qr = (t) => l.isFunction(t) || t === null || t === !1, Gt = {
  getAdapter: (t) => {
    t = l.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let a;
      if (r = n, !Qr(n) && (r = Je[(a = String(n)).toLowerCase()], r === void 0))
        throw new S(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([i, u]) => `adapter ${i} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = e ? o.length > 1 ? `since :
` + o.map(gt).join(`
`) : " " + gt(o[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Je
};
function Ie(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new de(null, t);
}
function wt(t) {
  return Ie(t), t.headers = j.from(t.headers), t.data = Be.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Gt.getAdapter(t.adapter || et.adapter)(t).then(function(r) {
    return Ie(t), r.data = Be.call(
      t,
      t.transformResponse,
      r
    ), r.headers = j.from(r.headers), r;
  }, function(r) {
    return Vt(r) || (Ie(t), r && r.response && (r.response.data = Be.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = j.from(r.response.headers))), Promise.reject(r);
  });
}
const Xt = "1.7.7", tt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  tt[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const St = {};
tt.transitional = function(e, n, r) {
  function s(o, a) {
    return "[Axios v" + Xt + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, i) => {
    if (e === !1)
      throw new S(
        s(a, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !St[a] && (St[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, a, i) : !0;
  };
};
function Zr(t, e, n) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = e[o];
    if (a) {
      const i = t[o], u = i === void 0 || a(i, o, t);
      if (u !== !0)
        throw new S("option " + o + " must be " + u, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
  }
}
const Ke = {
  assertOptions: Zr,
  validators: tt
}, Z = Ke.validators;
class Ae {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ft(),
      response: new ft()
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
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ne(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ke.assertOptions(r, {
      silentJSONParsing: Z.transitional(Z.boolean),
      forcedJSONParsing: Z.transitional(Z.boolean),
      clarifyTimeoutError: Z.transitional(Z.boolean)
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ke.assertOptions(s, {
      encode: Z.function,
      serialize: Z.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && l.merge(
      o.common,
      o[n.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = j.concat(a, o);
    const i = [];
    let u = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (u = u && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(y) {
      d.push(y.fulfilled, y.rejected);
    });
    let f, h = 0, E;
    if (!u) {
      const p = [wt.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, d), E = p.length, f = Promise.resolve(n); h < E; )
        f = f.then(p[h++], p[h++]);
      return f;
    }
    E = i.length;
    let w = n;
    for (h = 0; h < E; ) {
      const p = i[h++], y = i[h++];
      try {
        w = p(w);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      f = wt.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, E = d.length; h < E; )
      f = f.then(d[h++], d[h++]);
    return f;
  }
  getUri(e) {
    e = ne(this.defaults, e);
    const n = zt(e.baseURL, e.url);
    return Ht(n, e.params, e.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(e) {
  Ae.prototype[e] = function(n, r) {
    return this.request(ne(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, a, i) {
      return this.request(ne(i || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Ae.prototype[e] = n(), Ae.prototype[e + "Form"] = n(!0);
});
const Te = Ae;
class nt {
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
      const a = new Promise((i) => {
        r.subscribe(i), o = i;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, e(function(o, a, i) {
      r.reason || (r.reason = new de(o, a, i), n(r.reason));
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
      token: new nt(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
const es = nt;
function ts(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function ns(t) {
  return l.isObject(t) && t.isAxiosError === !0;
}
const Ge = {
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
Object.entries(Ge).forEach(([t, e]) => {
  Ge[e] = t;
});
const rs = Ge;
function Yt(t) {
  const e = new Te(t), n = vt(Te.prototype.request, e);
  return l.extend(n, Te.prototype, e, { allOwnKeys: !0 }), l.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Yt(ne(t, s));
  }, n;
}
const D = Yt(et);
D.Axios = Te;
D.CanceledError = de;
D.CancelToken = es;
D.isCancel = Vt;
D.VERSION = Xt;
D.toFormData = ke;
D.AxiosError = S;
D.Cancel = D.CanceledError;
D.all = function(e) {
  return Promise.all(e);
};
D.spread = ts;
D.isAxiosError = ns;
D.mergeConfig = ne;
D.AxiosHeaders = j;
D.formToJSON = (t) => qt(l.isHTMLForm(t) ? new FormData(t) : t);
D.getAdapter = Gt.getAdapter;
D.HttpStatusCode = rs;
D.default = D;
const ss = D, Qt = k.createContext({});
const os = ({ conditionControls: t, conditionLookup: e, conditionSettings: n, conditionIndex: r, removeCondition: s, selectedColumn: o, updateConditionsList: a }) => {
  var T;
  const [i, u] = t, d = i[r], f = (b, R) => {
    const L = [...i];
    L[b] = R, u(L);
  }, E = Object.keys(e).filter((b) => b !== o), { columnName: w, isOrIsNotEqualTo: p, value: y } = n, m = (b, R) => {
    const L = W.cloneDeep(n);
    R === "columnName" && (L.value = ""), L[R] = b, a(L, r);
  };
  return d ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ c.createElement(
    "button",
    {
      onClick: () => {
        const b = [...i];
        b[r] = !1, u(b);
      }
    },
    /* @__PURE__ */ c.createElement(le, { display: "caretDown" })
  ), /* @__PURE__ */ c.createElement("button", { className: "btn btn-danger btn-sm mt-0 ml-2", onClick: () => s(r) }, "Remove")), /* @__PURE__ */ c.createElement("div", { id: `condition_${r}` }, /* @__PURE__ */ c.createElement("label", { className: "d-block" }, /* @__PURE__ */ c.createElement("span", null, "Condition : "), /* @__PURE__ */ c.createElement("div", { className: "pt-1" }, /* @__PURE__ */ c.createElement("select", { className: "ml-1", value: w, onChange: (b) => m(b.target.value, "columnName") }, /* @__PURE__ */ c.createElement("option", { value: "" }, "Select"), E == null ? void 0 : E.map((b) => /* @__PURE__ */ c.createElement("option", { key: b, value: b }, b))), /* @__PURE__ */ c.createElement("select", { className: "ml-1", value: p, onChange: (b) => m(b.target.value, "isOrIsNotEqualTo") }, /* @__PURE__ */ c.createElement("option", { value: "is" }, "is"), /* @__PURE__ */ c.createElement("option", { value: "isNot" }, "is not")), /* @__PURE__ */ c.createElement("select", { className: "ml-1", value: y, onChange: (b) => m(b.target.value, "value") }, /* @__PURE__ */ c.createElement("option", { value: "" }, "Select"), (T = e[w]) == null ? void 0 : T.map((b) => /* @__PURE__ */ c.createElement("option", { key: b, value: b }, b))))))) : /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "mb-1" }, /* @__PURE__ */ c.createElement("button", { onClick: () => f(r, !0) }, /* @__PURE__ */ c.createElement(le, { display: "caretDown" })), /* @__PURE__ */ c.createElement("span", null, " ", y ? `${w} ${p === "is" ? "is" : "is not"} ${y}` : "New Condition")));
}, as = ({ controls: t, data: e, deleteVariable: n, updateVariableArray: r, variableConfig: s, variableIndex: o }) => {
  const [a, i] = t, u = a[o], d = (N, P) => {
    i({ openVariableControls: a, [N]: P });
  }, f = k.useState([]), h = Object.keys((e == null ? void 0 : e[0]) || {}), [E, w] = k.useState(s.columnName), [p, y] = k.useState(s.conditions), [m, T] = k.useState(s.name), [b, R] = k.useState(s.addCommas), L = k.useMemo(() => h.reduce((N, P) => (N[P] = W.uniq(e.map((U) => U[P])), N), {}), [h]), A = () => {
    R(!b);
  }, x = (N) => {
    w(N), y([]);
  }, M = (N, P) => {
    const { columnName: U, isOrIsNotEqualTo: C, value: B } = N, g = W.cloneDeep(p);
    g[P] = {
      columnName: U,
      isOrIsNotEqualTo: C,
      value: B
    }, y(g);
  }, V = (N) => {
    const P = W.cloneDeep(p);
    P.splice(N, 1), y(P);
  }, K = () => {
    y([
      ...p,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [N, P] = f, U = [...N];
    U[p.length + 1] = !0, P(U);
  }, ee = () => {
    const N = p.filter((U) => U.columnName !== "" && U.value !== ""), P = {
      columnName: E,
      conditions: N,
      name: m,
      tag: `{{${m}}}`,
      addCommas: b
    };
    r(P, o), d(o, !1);
  }, Y = m === "", Q = Y || E === "";
  return /* @__PURE__ */ c.createElement(c.Fragment, null, u ? /* @__PURE__ */ c.createElement("fieldset", { className: "edit-block mb-1", key: o }, /* @__PURE__ */ c.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ c.createElement("button", { onClick: ee, disabled: Q }, /* @__PURE__ */ c.createElement(le, { display: "caretUp" })), /* @__PURE__ */ c.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm mt-0 ml-2",
      onClick: (N) => {
        N.preventDefault(), n(o);
      }
    },
    "Delete"
  )), /* @__PURE__ */ c.createElement("label", { className: "d-block" }, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Variable Name:"), /* @__PURE__ */ c.createElement("input", { className: `variable-${o} ml-1`, type: "text", value: m, onChange: (N) => T(N.target.value) })), /* @__PURE__ */ c.createElement("div", { className: "pt-2" }, /* @__PURE__ */ c.createElement("label", { className: "d-block" }, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Column:"), /* @__PURE__ */ c.createElement("select", { className: `variable-${o} ml-1`, onChange: (N) => x(N.target.value), value: E, disabled: Y }, /* @__PURE__ */ c.createElement("option", { value: "" }, "Select"), h.map((N) => /* @__PURE__ */ c.createElement("option", { key: N, value: N }, N))))), /* @__PURE__ */ c.createElement("div", { className: "pt-2" }, /* @__PURE__ */ c.createElement(
    sn,
    {
      value: b,
      label: "Add Commas to Number",
      updateField: A,
      tooltip: /* @__PURE__ */ c.createElement(ce, { style: { textTransform: "none" } }, /* @__PURE__ */ c.createElement(ce.Target, null, /* @__PURE__ */ c.createElement(le, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ c.createElement(ce.Content, null, /* @__PURE__ */ c.createElement("p", null, "Selecting this option will add commas to the numeric value.")))
    }
  )), /* @__PURE__ */ c.createElement("label", { className: "d-block py-2" }, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Conditions:"), p.map((N, P) => /* @__PURE__ */ c.createElement("div", { className: "condition-section mt-2" }, /* @__PURE__ */ c.createElement(
    os,
    {
      key: m + "-condition-" + P,
      conditionControls: f,
      conditionLookup: L,
      conditionSettings: N,
      conditionIndex: P,
      removeCondition: V,
      selectedColumn: E,
      updateConditionsList: M
    }
  )))), /* @__PURE__ */ c.createElement("div", { className: "mt-1" }, /* @__PURE__ */ c.createElement("button", { onClick: K, disabled: Q }, "Add Condition"), /* @__PURE__ */ c.createElement("button", { className: "ml-2", onClick: ee, disabled: Q }, "Done"))) : /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "mb-2" }, /* @__PURE__ */ c.createElement("button", { onClick: () => d(o, !0) }, /* @__PURE__ */ c.createElement(le, { display: "caretDown" })), /* @__PURE__ */ c.createElement("span", null, " ", m ? `${m}` : "New Variable"))));
}, is = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], ls = () => {
  const { config: t, data: e, isDashboard: n, loading: r, setParentConfig: s, updateConfig: o } = k.useContext(Qt), { contentEditor: a, theme: i, visual: u } = t, { inlineHTML: d, markupVariables: f, srcUrl: h, title: E, useInlineHTML: w } = a, [p, y] = k.useState(!0), m = nn(t, o, !0), T = (e == null ? void 0 : e[0]) !== void 0, b = k.useState([]);
  k.useEffect(() => {
    if (s) {
      const C = L();
      s(C);
    }
  }, [t]), k.useEffect(() => {
    const C = { ...t };
    delete C.newViz, o(C);
  }, []);
  const R = () => {
    y(!p), o({
      ...t,
      showEditorPanel: !p
    });
  }, L = () => {
    const C = JSON.parse(JSON.stringify(t));
    return delete C.newViz, delete C.runtime, C;
  }, [A, x] = k.useState([...f]), [M, V] = k.useState(!1), K = k.useRef(null), [ee, Y] = b, Q = () => {
    const C = [...W.cloneDeep(A)], B = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    Y({ ...ee, [A.length + 1]: !0 }), C.push(B), x(C), V(!M);
  }, N = (C, B) => {
    const g = W.cloneDeep(A);
    g[B] = C, x(g), m("contentEditor", null, "markupVariables", g);
  }, P = (C) => {
    const B = W.cloneDeep(A);
    B.splice(C, 1), x(B), m("contentEditor", null, "markupVariables", B);
    const g = W.cloneDeep(ee);
    delete g[C], Y(g);
  }, U = /* @__PURE__ */ c.createElement(be, null, /* @__PURE__ */ c.createElement(be.Section, { title: "General" }, /* @__PURE__ */ c.createElement(De, { value: E || "", section: "contentEditor", fieldName: "title", label: "Title", placeholder: "Markup Include Title", updateField: m })), /* @__PURE__ */ c.createElement(be.Section, { title: "Content Editor" }, /* @__PURE__ */ c.createElement("span", { className: "divider-heading" }, "Enter Markup"), /* @__PURE__ */ c.createElement(ae, { inline: !0, value: w, section: "contentEditor", fieldName: "useInlineHTML", label: "Use Inline HTML ", updateField: m }), /* @__PURE__ */ c.createElement("div", { className: "column-edit" }, w ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { ref: K }, /* @__PURE__ */ c.createElement(De, { value: d, section: "contentEditor", fieldName: "inlineHTML", label: "HTML", placeholder: "Add HTML here", type: "textarea", rows: 10, updateField: m }), /* @__PURE__ */ c.createElement("hr", { className: "accordion__divider" })), /* @__PURE__ */ c.createElement("fieldset", null, /* @__PURE__ */ c.createElement("label", null, /* @__PURE__ */ c.createElement("span", { className: "edit-label" }, "Variables", /* @__PURE__ */ c.createElement(ce, { style: { textTransform: "none" } }, /* @__PURE__ */ c.createElement(ce.Target, null, /* @__PURE__ */ c.createElement(le, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ c.createElement(ce.Content, null, "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML")))), T === !1 && /* @__PURE__ */ c.createElement("span", { className: "need-data-source-prompt" }, "To use variables, add data source."), A && A.length > 0 && /* @__PURE__ */ c.createElement("div", { className: "section-border" }, A == null ? void 0 : A.map((C, B) => /* @__PURE__ */ c.createElement(as, { key: `${C.name}-${B}`, controls: b, data: e, deleteVariable: P, updateVariableArray: N, variableConfig: C, variableIndex: B }))), /* @__PURE__ */ c.createElement("div", { className: "mb-1 d-flex" }, /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary", onClick: Q, disabled: !T }, "Create New Variable")))) : /* @__PURE__ */ c.createElement(De, { value: h || "", section: "contentEditor", fieldName: "srcUrl", label: "Source URL;", placeholder: "https://www.example.com/file.html", updateField: m }))), /* @__PURE__ */ c.createElement(be.Section, { title: "Visual" }, /* @__PURE__ */ c.createElement("div", { className: "input-group" }, /* @__PURE__ */ c.createElement("label", null, "Theme"), /* @__PURE__ */ c.createElement("ul", { className: "color-palette" }, is.map((C) => /* @__PURE__ */ c.createElement(
    "li",
    {
      title: C,
      key: C,
      onClick: () => {
        o({ ...t, theme: C });
      },
      className: i === C ? "selected " + C : C
    }
  )))), /* @__PURE__ */ c.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ c.createElement(ae, { value: u.border, section: "visual", fieldName: "border", label: "Display Border ", updateField: m }), /* @__PURE__ */ c.createElement(ae, { value: u.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme ", updateField: m }), /* @__PURE__ */ c.createElement(ae, { value: u.accent, section: "visual", fieldName: "accent", label: "Use Accent Style ", updateField: m }), /* @__PURE__ */ c.createElement(ae, { value: u.background, section: "visual", fieldName: "background", label: "Use Theme Background Color ", updateField: m }), /* @__PURE__ */ c.createElement(ae, { value: u.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color ", updateField: m }))));
  return r && !(t != null && t.showEditorPanel) ? null : /* @__PURE__ */ c.createElement(Rt, { component: "EditorPanel" }, /* @__PURE__ */ c.createElement(Me.Sidebar, { displayPanel: p, isDashboard: n, title: "Configure Markup Include", onBackClick: R }, U));
}, Tt = {
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
}, cs = (t, e) => {
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
const Ts = ({
  configUrl: t,
  config: e,
  isDashboard: n = !0,
  isEditor: r = !1,
  setConfig: s
}) => {
  const o = {
    config: e,
    loading: !0,
    urlMarkup: "",
    markupError: null,
    errorMessage: null,
    coveLoadedHasRan: !1
  }, [a, i] = k.useReducer(cs, o), { config: u, loading: d, urlMarkup: f, markupError: h, errorMessage: E, coveLoadedHasRan: w } = a, p = k.useRef(), { innerContainerClasses: y, contentClasses: m } = en(u || {}), { contentEditor: T, theme: b } = u || {}, R = e == null ? void 0 : e.data, { inlineHTML: L, markupVariables: A, srcUrl: x, title: M, useInlineHTML: V } = T || {}, K = (g) => {
    Object.keys(Tt).forEach((_) => {
      g[_] && typeof g[_] == "object" && !Array.isArray(g[_]) && (g[_] = { ...Tt[_], ...g[_] });
    }), g.runtime = {}, g.runtime.uniqueId = Date.now(), g.runtime.editorErrorMessage = "", i({ type: "SET_CONFIG", payload: g });
  }, ee = k.useCallback(async () => {
    let g = e || await (await fetch(t)).json(), _ = g.data ?? {};
    g.dataUrl && (_ = await (await fetch(g.dataUrl)).json()), g.data = _;
    const $ = { ...tn(g) };
    K({ ...e, ...$ }), i({ type: "SET_LOADING", payload: !1 });
  }, []);
  k.useEffect(() => {
    if (h) {
      let g = h, _ = "There was a problem retrieving the content from " + x + ". ", $ = /https?:\/\//g;
      g === 404 && !x.match($) && (g = "proto"), _ += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[g], i({ type: "SET_ERROR_MESSAGE", payload: _ });
    } else
      i({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [h]);
  const Y = k.useCallback(async () => {
    if (i({ type: "SET_MARKUP_ERROR", payload: null }), x)
      if (x === "#example")
        i({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await ss.get(x).then((g) => {
            g.data && i({ type: "SET_URL_MARKUP", payload: g.data });
          });
        } catch (g) {
          g.response ? i({ type: "SET_MARKUP_ERROR", payload: g.response.status }) : g.request && i({ type: "SET_MARKUP_ERROR", payload: 200 }), i({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      i({ type: "SET_URL_MARKUP", payload: "" });
  }, [x]), Q = (g, _) => {
    const { columnName: $, isOrIsNotEqualTo: se, value: G } = _[0], Ee = se === "is" ? g.filter((z) => z[$] === G) : g.filter((z) => z[$] !== G);
    return _.shift(), _.length === 0 ? Ee : Q(Ee, _);
  }, N = (g) => {
    if (W.isEmpty(A))
      return g;
    const _ = /{{(.*?)}}/g;
    return g.replace(_, (se) => {
      const G = A.filter((Pe) => Pe.tag === se)[0];
      if (G === void 0)
        return [se];
      const Ee = G && G.conditions.length === 0 ? R : Q(R, [...G.conditions]), z = W.uniq(
        (Ee || []).map((Pe) => Pe[G.columnName])
      ), rt = [], st = r ? "or" : "and", ye = z.length;
      ye === 2 && z.push(z.join(` ${st} `)), ye > 2 && (z[ye - 1] = `${st} ${z[ye - 1]}`), rt.push(z.join(", "));
      let oe = rt[0];
      return G.addCommas && !isNaN(parseFloat(oe)) && (oe = parseFloat(oe), oe = oe.toLocaleString("en-US", { useGrouping: !0 })), oe;
    });
  }, P = (g) => {
    let _, $ = !1;
    return g && g !== "" && g !== null && (g.toString().match(/<body[^>]*>/i) && g.toString().match(/<\/body\s*>/i) ? ($ = !0, _ = g.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : _ = g.toString()), $ ? _[1] : _;
  };
  k.useEffect(() => {
    ee().catch((g) => console.log(g)), ot("cove_loaded", { loadConfigHasRun: !0 });
  }, []), k.useEffect(() => {
    u && !w && p && (ot("cove_loaded", { config: u }), i({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [u, p]), k.useEffect(() => {
    Y().catch((g) => console.log(g));
  }, [Y]);
  let U = /* @__PURE__ */ c.createElement(rn, null);
  const C = V ? N(L) : P(f);
  d === !1 && (U = /* @__PURE__ */ c.createElement(c.Fragment, null, r && /* @__PURE__ */ c.createElement(ls, null), /* @__PURE__ */ c.createElement(Me.Responsive, { isEditor: r }, /* @__PURE__ */ c.createElement("div", { className: "markup-include-content-container cove-component__content no-borders" }, /* @__PURE__ */ c.createElement("div", { className: `markup-include-component ${m.join(" ")}` }, /* @__PURE__ */ c.createElement(on, { title: M, isDashboard: n, classes: [`${b}`, "mb-0"] }), /* @__PURE__ */ c.createElement("div", { className: `${y.join(" ")}` }, /* @__PURE__ */ c.createElement("div", { className: "cove-component__content-wrap" }, !h && /* @__PURE__ */ c.createElement(Nn, { allowElements: !!f, content: C }), h && x && /* @__PURE__ */ c.createElement("div", { className: "warning" }, E))))))));
  const B = () => /* @__PURE__ */ c.createElement("section", { className: "waiting" }, /* @__PURE__ */ c.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ c.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ c.createElement("p", null, u == null ? void 0 : u.runtime.editorErrorMessage)));
  return /* @__PURE__ */ c.createElement(Rt, { component: "CdcMarkupInclude" }, /* @__PURE__ */ c.createElement(Qt.Provider, { value: { config: u, updateConfig: K, loading: d, data: R, setParentConfig: s, isDashboard: n } }, !(u != null && u.newViz) && (u == null ? void 0 : u.runtime) && (u == null ? void 0 : u.runtime.editorErrorMessage) && /* @__PURE__ */ c.createElement(B, null), /* @__PURE__ */ c.createElement(Me.VisualizationWrapper, { config: u, isEditor: r, showEditorPanel: u == null ? void 0 : u.showEditorPanel }, U)));
};
export {
  Ts as C,
  ss as a
};
