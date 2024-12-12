import { R as l, r as k } from "./storybook-index-45401197.es.js";
import { _ as W } from "./storybook-lodash-a4231e1c.es.js";
import { g as rn } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { L as Ve, u as sn, c as on, p as lt } from "./storybook-coveUpdateWorker-91c2d978.es.js";
import { u as an } from "./storybook-updateFieldFactory-c006040a.es.js";
import { I as Ue, a as ce } from "./storybook-editor-57986c01.es.js";
import { E as At, L as ln } from "./storybook-Loading-f180d060.es.js";
import { a as re } from "./storybook-Icon-4f5978ba.es.js";
import { T as Q } from "./storybook-Tooltip-4102bd69.es.js";
import { A as we } from "./storybook-Accordion-2501c7d9.es.js";
import { C as Ot } from "./storybook-Inputs-b80d0cf3.es.js";
import { T as cn } from "./storybook-index-e5bf02db.es.js";
const A = 1, vt = 2, _t = 4, F = 8, je = 16, Se = 32, J = 64, qe = {
  a: {
    content: A | F,
    self: !1,
    type: A | F | Se | J
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: A | F,
    void: !0
  },
  body: {
    content: A | vt | _t | F | je | Se | J
  },
  button: {
    content: F,
    type: A | F | Se | J
  },
  caption: {
    content: A,
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
    type: A | Se | J
  },
  dd: {
    content: A,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: A
  },
  dt: {
    content: A,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: A,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: A,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: A,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: A
  },
  picture: {
    children: ["source", "img"],
    type: A | F | je
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
    type: A
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: A,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: A,
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
    type: A
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: A | F,
    void: !0
  }
};
function oe(t) {
  return (e) => {
    qe[e] = {
      ...t,
      ...qe[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(oe({
  content: A,
  type: A | J
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(oe({
  content: F,
  type: A | F | J
}));
["p", "pre"].forEach(oe({
  content: F,
  type: A | J
}));
["s", "small", "span", "del", "ins"].forEach(oe({
  content: F,
  type: A | F
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(oe({
  content: A,
  type: A | vt | J
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(oe({
  content: F,
  type: A | _t | J
}));
["audio", "canvas", "iframe", "img", "video"].forEach(oe({
  type: A | F | je | J
}));
const $e = Object.freeze(qe), un = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], dn = Object.keys($e).filter((t) => t !== "canvas" && t !== "iframe"), v = 1, fn = 2, he = 3, ue = 4, kt = 5, ct = Object.freeze({
  alt: v,
  cite: v,
  class: v,
  colspan: he,
  controls: ue,
  datetime: v,
  default: ue,
  disabled: ue,
  dir: v,
  height: v,
  href: v,
  id: v,
  kind: v,
  label: v,
  lang: v,
  loading: v,
  loop: ue,
  media: v,
  muted: ue,
  poster: v,
  rel: v,
  role: v,
  rowspan: he,
  scope: v,
  sizes: v,
  span: he,
  start: he,
  style: kt,
  src: v,
  srclang: v,
  srcset: v,
  tabindex: v,
  target: v,
  title: v,
  type: v,
  width: v
}), pn = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function Ce() {
  return Ce = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ce.apply(this, arguments);
}
function Lt({
  attributes: t = {},
  className: e,
  children: n = null,
  selfClose: r = !1,
  tagName: s
}) {
  const o = s;
  return r ? /* @__PURE__ */ l.createElement(o, Ce({
    className: e
  }, t)) : /* @__PURE__ */ l.createElement(o, Ce({
    className: e
  }, t), n);
}
class mn {
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
var hn = /["'&<>]/, En = yn;
function yn(t) {
  var e = "" + t, n = hn.exec(e);
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
const bn = /* @__PURE__ */ rn(En);
function Y(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
const gn = /(url|image|image-set)\(/i;
class wn extends mn {
  attribute(e, n) {
    return e === "style" && Object.keys(n).forEach((r) => {
      String(n[r]).match(gn) && delete n[r];
    }), n;
  }
}
const ut = 1, Sn = 3, Tn = /^<(!doctype|(html|head|body)(\s|>))/i, Rn = /^(aria-|data-|\w+:)/iu, Nn = /{{{(\w+)\/?}}}/;
function Cn() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class An {
  constructor(e, n = {}, r = [], s = []) {
    var o;
    if (Y(this, "allowed", void 0), Y(this, "banned", void 0), Y(this, "blocked", void 0), Y(this, "container", void 0), Y(this, "content", []), Y(this, "props", void 0), Y(this, "matchers", void 0), Y(this, "filters", void 0), Y(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = n, this.matchers = r, this.filters = [...s, new wn()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = n.allowList) !== null && o !== void 0 ? o : dn), this.banned = new Set(un), this.blocked = new Set(n.blockList);
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
      let m = "";
      for (; o && (i = u.match(o)); ) {
        const {
          index: E,
          length: w,
          match: p,
          valid: y,
          void: h,
          ...g
        } = i, b = u.propName + String(a);
        E > 0 && (m += o.slice(0, E)), y ? (m += h ? `{{{${b}/}}}` : `{{{${b}}}}${p}{{{/${b}}}}`, this.keyIndex += 1, a += 1, r[b] = {
          children: p,
          matcher: u,
          props: {
            ...s,
            ...g,
            key: this.keyIndex
          }
        }) : m += p, u.greedy ? (o = m + o.slice(E + w), m = "") : o = o.slice(E + (w || p.length));
      }
      u.greedy || (o = m + o);
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
    const s = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || Cn)();
    if (!s)
      return;
    const o = (n = this.props.containerTagName) !== null && n !== void 0 ? n : "body", a = o === "body" || o === "fragment" ? s.body : s.createElement(o);
    if (e.match(Tn)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      a.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? bn(e) : e);
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
    return e.nodeType !== ut || !e.attributes || ([...e.attributes].forEach((o) => {
      const {
        name: a,
        value: i
      } = o, u = a.toLowerCase(), d = ct[u] || ct[a];
      if (!this.isSafe(e) || !u.match(Rn) && (!n && (!d || d === fn) || u.startsWith("on") || i.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let f = u === "style" ? this.extractStyleAttribute(e) : i;
      d === ue ? f = !0 : d === he ? f = Number.parseFloat(String(f)) : d !== kt && (f = String(f)), r[pn[u] || u] = this.applyAttributeFilters(u, f), s += 1;
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
    return $e[e] ? {
      ...n,
      ...$e[e],
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
      if (f.nodeType === ut) {
        const E = f.nodeName.toLowerCase(), w = this.getTagConfig(E);
        d && (u.push(d), d = "");
        const p = this.applyNodeFilters(E, f);
        if (!p)
          return;
        let y;
        if (a && !(i && !this.isTagAllowed(E))) {
          this.keyIndex += 1;
          const h = this.keyIndex;
          y = this.parseNode(p, w);
          const g = a(p, y, w);
          if (g === null)
            return;
          if (typeof g < "u") {
            u.push(/* @__PURE__ */ l.cloneElement(g, {
              key: h
            }));
            return;
          }
          this.keyIndex = h - 1;
        }
        if (this.banned.has(E))
          return;
        if (!(r || s && E !== "br") && this.isTagAllowed(E) && (o || this.canRenderChild(n, w))) {
          var m;
          this.keyIndex += 1;
          const h = this.extractAttributes(p), g = {
            tagName: E
          };
          h && (g.attributes = h), w.void && (g.selfClose = w.void), u.push(/* @__PURE__ */ l.createElement(Lt, {
            ...g,
            key: this.keyIndex
          }, (m = y) !== null && m !== void 0 ? m : this.parseNode(p, w)));
        } else
          u = [...u, ...this.parseNode(p, w.tagName ? w : n)];
      } else if (f.nodeType === Sn) {
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
    for (; o = s.match(Nn); ) {
      const [a, i] = o, u = o.index, d = a.includes("/");
      if (process.env.NODE_ENV !== "production" && !n[i])
        throw new Error(`Token "${i}" found but no matching element to replace with.`);
      u > 0 && (r.push(s.slice(0, u)), s = s.slice(u));
      const {
        children: f,
        matcher: m,
        props: E
      } = n[i];
      let w;
      if (d)
        w = a.length, r.push(m.createElement(f, E));
      else {
        const p = s.match(new RegExp(`{{{/${i}}}}`));
        if (process.env.NODE_ENV !== "production" && !p)
          throw new Error(`Closing token missing for interpolated element "${i}".`);
        w = p.index + p[0].length, r.push(m.createElement(this.replaceTokens(s.slice(a.length, p.index), n), E));
      }
      s = s.slice(w);
    }
    return s.length > 0 && r.push(s), r.length === 0 ? "" : r.length === 1 && typeof r[0] == "string" ? r[0] : r;
  }
}
function On(t) {
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
  } = t, f = (e = s ?? u) !== null && e !== void 0 ? e : "span", m = f === "fragment" ? !0 : d;
  let E;
  if (i)
    E = i;
  else {
    const w = new An(o ?? "", t).parse();
    w.length > 0 && (E = w);
  }
  return E || (E = a), m ? /* @__PURE__ */ l.createElement(l.Fragment, null, E) : /* @__PURE__ */ l.createElement(Lt, {
    attributes: n,
    className: r,
    tagName: f
  }, E);
}
function xt(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: vn } = Object.prototype, { getPrototypeOf: Qe } = Object, _e = ((t) => (e) => {
  const n = vn.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (t) => (t = t.toLowerCase(), (e) => _e(e) === t), ke = (t) => (e) => typeof e === t, { isArray: de } = Array, Ee = ke("undefined");
function _n(t) {
  return t !== null && !Ee(t) && t.constructor !== null && !Ee(t.constructor) && H(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Pt = j("ArrayBuffer");
function kn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Pt(t.buffer), e;
}
const Ln = ke("string"), H = ke("function"), Dt = ke("number"), Le = (t) => t !== null && typeof t == "object", xn = (t) => t === !0 || t === !1, Te = (t) => {
  if (_e(t) !== "object")
    return !1;
  const e = Qe(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Pn = j("Date"), Dn = j("File"), Fn = j("Blob"), Un = j("FileList"), Bn = (t) => Le(t) && H(t.pipe), In = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || H(t.append) && ((e = _e(t)) === "formdata" || // detect form-data instance
  e === "object" && H(t.toString) && t.toString() === "[object FormData]"));
}, Mn = j("URLSearchParams"), [Hn, Vn, jn, qn] = ["ReadableStream", "Request", "Response", "Headers"].map(j), $n = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ye(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), de(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), a = o.length;
    let i;
    for (r = 0; r < a; r++)
      i = o[r], e.call(null, t[i], i, t);
  }
}
function Ft(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const ne = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ut = (t) => !Ee(t) && t !== ne;
function ze() {
  const { caseless: t } = Ut(this) && this || {}, e = {}, n = (r, s) => {
    const o = t && Ft(e, s) || s;
    Te(e[o]) && Te(r) ? e[o] = ze(e[o], r) : Te(r) ? e[o] = ze({}, r) : de(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ye(arguments[r], n);
  return e;
}
const zn = (t, e, n, { allOwnKeys: r } = {}) => (ye(e, (s, o) => {
  n && H(s) ? t[o] = xt(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), Wn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Jn = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Kn = (t, e, n, r) => {
  let s, o, a;
  const i = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, t, e)) && !i[a] && (e[a] = t[a], i[a] = !0);
    t = n !== !1 && Qe(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Gn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Xn = (t) => {
  if (!t)
    return null;
  if (de(t))
    return t;
  let e = t.length;
  if (!Dt(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Yn = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Qe(Uint8Array)), Qn = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, Zn = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, er = j("HTMLFormElement"), tr = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), dt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), nr = j("RegExp"), Bt = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  ye(n, (s, o) => {
    let a;
    (a = e(s, o, t)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(t, r);
}, rr = (t) => {
  Bt(t, (e, n) => {
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
}, sr = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return de(t) ? r(t) : r(String(t).split(e)), n;
}, or = () => {
}, ar = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Be = "abcdefghijklmnopqrstuvwxyz", ft = "0123456789", It = {
  DIGIT: ft,
  ALPHA: Be,
  ALPHA_DIGIT: Be + Be.toUpperCase() + ft
}, ir = (t = 16, e = It.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function lr(t) {
  return !!(t && H(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const cr = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (Le(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = de(r) ? [] : {};
        return ye(r, (a, i) => {
          const u = n(a, s + 1);
          !Ee(u) && (o[i] = u);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, ur = j("AsyncFunction"), dr = (t) => t && (Le(t) || H(t)) && H(t.then) && H(t.catch), Mt = ((t, e) => t ? setImmediate : e ? ((n, r) => (ne.addEventListener("message", ({ source: s, data: o }) => {
  s === ne && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), ne.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  H(ne.postMessage)
), fr = typeof queueMicrotask < "u" ? queueMicrotask.bind(ne) : typeof process < "u" && process.nextTick || Mt, c = {
  isArray: de,
  isArrayBuffer: Pt,
  isBuffer: _n,
  isFormData: In,
  isArrayBufferView: kn,
  isString: Ln,
  isNumber: Dt,
  isBoolean: xn,
  isObject: Le,
  isPlainObject: Te,
  isReadableStream: Hn,
  isRequest: Vn,
  isResponse: jn,
  isHeaders: qn,
  isUndefined: Ee,
  isDate: Pn,
  isFile: Dn,
  isBlob: Fn,
  isRegExp: nr,
  isFunction: H,
  isStream: Bn,
  isURLSearchParams: Mn,
  isTypedArray: Yn,
  isFileList: Un,
  forEach: ye,
  merge: ze,
  extend: zn,
  trim: $n,
  stripBOM: Wn,
  inherits: Jn,
  toFlatObject: Kn,
  kindOf: _e,
  kindOfTest: j,
  endsWith: Gn,
  toArray: Xn,
  forEachEntry: Qn,
  matchAll: Zn,
  isHTMLForm: er,
  hasOwnProperty: dt,
  hasOwnProp: dt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bt,
  freezeMethods: rr,
  toObjectSet: sr,
  toCamelCase: tr,
  noop: or,
  toFiniteNumber: ar,
  findKey: Ft,
  global: ne,
  isContextDefined: Ut,
  ALPHABET: It,
  generateString: ir,
  isSpecCompliantForm: lr,
  toJSONObject: cr,
  isAsyncFn: ur,
  isThenable: dr,
  setImmediate: Mt,
  asap: fr
};
function T(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(T, Error, {
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
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ht = T.prototype, Vt = {};
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
  Vt[t] = { value: t };
});
Object.defineProperties(T, Vt);
Object.defineProperty(Ht, "isAxiosError", { value: !0 });
T.from = (t, e, n, r, s, o) => {
  const a = Object.create(Ht);
  return c.toFlatObject(t, a, function(u) {
    return u !== Error.prototype;
  }, (i) => i !== "isAxiosError"), T.call(a, t.message, e, n, r, s), a.cause = t, a.name = t.name, o && Object.assign(a, o), a;
};
const pr = null;
function We(t) {
  return c.isPlainObject(t) || c.isArray(t);
}
function jt(t) {
  return c.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function pt(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = jt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function mr(t) {
  return c.isArray(t) && !t.some(We);
}
const hr = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function xe(t, e, n) {
  if (!c.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !c.isUndefined(h[y]);
  });
  const r = n.metaTokens, s = n.visitor || f, o = n.dots, a = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(p) {
    if (p === null)
      return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!u && c.isBlob(p))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, y, h) {
    let g = p;
    if (p && !h && typeof p == "object") {
      if (c.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && mr(p) || (c.isFileList(p) || c.endsWith(y, "[]")) && (g = c.toArray(p)))
        return y = jt(y), g.forEach(function(R, L) {
          !(c.isUndefined(R) || R === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? pt([y], L, o) : a === null ? y : y + "[]",
            d(R)
          );
        }), !1;
    }
    return We(p) ? !0 : (e.append(pt(h, y, o), d(p)), !1);
  }
  const m = [], E = Object.assign(hr, {
    defaultVisitor: f,
    convertValue: d,
    isVisitable: We
  });
  function w(p, y) {
    if (!c.isUndefined(p)) {
      if (m.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      m.push(p), c.forEach(p, function(g, b) {
        (!(c.isUndefined(g) || g === null) && s.call(
          e,
          g,
          c.isString(b) ? b.trim() : b,
          y,
          E
        )) === !0 && w(g, y ? y.concat(b) : [b]);
      }), m.pop();
    }
  }
  if (!c.isObject(t))
    throw new TypeError("data must be an object");
  return w(t), e;
}
function mt(t) {
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
function Ze(t, e) {
  this._pairs = [], t && xe(t, this, e);
}
const qt = Ze.prototype;
qt.append = function(e, n) {
  this._pairs.push([e, n]);
};
qt.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, mt);
  } : mt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Er(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $t(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Er, s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = c.isURLSearchParams(e) ? e.toString() : new Ze(e, n).toString(r), o) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class yr {
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
    c.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const ht = yr, zt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, br = typeof URLSearchParams < "u" ? URLSearchParams : Ze, gr = typeof FormData < "u" ? FormData : null, wr = typeof Blob < "u" ? Blob : null, Sr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: br,
    FormData: gr,
    Blob: wr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, et = typeof window < "u" && typeof document < "u", Je = typeof navigator == "object" && navigator || void 0, Tr = et && (!Je || ["ReactNative", "NativeScript", "NS"].indexOf(Je.product) < 0), Rr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Nr = et && window.location.href || "http://localhost", Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: et,
  hasStandardBrowserEnv: Tr,
  hasStandardBrowserWebWorkerEnv: Rr,
  navigator: Je,
  origin: Nr
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...Cr,
  ...Sr
};
function Ar(t, e) {
  return xe(t, new I.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return I.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Or(t) {
  return c.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function vr(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function Wt(t) {
  function e(n, r, s, o) {
    let a = n[o++];
    if (a === "__proto__")
      return !0;
    const i = Number.isFinite(+a), u = o >= n.length;
    return a = !a && c.isArray(s) ? s.length : a, u ? (c.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !i) : ((!s[a] || !c.isObject(s[a])) && (s[a] = []), e(n, r, s[a], o) && c.isArray(s[a]) && (s[a] = vr(s[a])), !i);
  }
  if (c.isFormData(t) && c.isFunction(t.entries)) {
    const n = {};
    return c.forEachEntry(t, (r, s) => {
      e(Or(r), s, n, 0);
    }), n;
  }
  return null;
}
function _r(t, e, n) {
  if (c.isString(t))
    try {
      return (e || JSON.parse)(t), c.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const tt = {
  transitional: zt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = c.isObject(e);
    if (o && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return s ? JSON.stringify(Wt(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ar(e, this.formSerializer).toString();
      if ((i = c.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return xe(
          i ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), _r(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || tt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(e) || c.isReadableStream(e))
      return e;
    if (e && c.isString(e) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? T.from(i, T.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
c.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  tt.headers[t] = {};
});
const nt = tt, kr = c.toObjectSet([
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
]), Lr = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || e[n] && kr[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Et = Symbol("internals");
function me(t) {
  return t && String(t).trim().toLowerCase();
}
function Re(t) {
  return t === !1 || t == null ? t : c.isArray(t) ? t.map(Re) : String(t);
}
function xr(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Pr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ie(t, e, n, r, s) {
  if (c.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!c.isString(e)) {
    if (c.isString(r))
      return e.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(e);
  }
}
function Dr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Fr(t, e) {
  const n = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, o, a) {
        return this[r].call(this, e, s, o, a);
      },
      configurable: !0
    });
  });
}
class Pe {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(i, u, d) {
      const f = me(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const m = c.findKey(s, f);
      (!m || s[m] === void 0 || d === !0 || d === void 0 && s[m] !== !1) && (s[m || u] = Re(i));
    }
    const a = (i, u) => c.forEach(i, (d, f) => o(d, f, u));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      a(e, n);
    else if (c.isString(e) && (e = e.trim()) && !Pr(e))
      a(Lr(e), n);
    else if (c.isHeaders(e))
      for (const [i, u] of e.entries())
        o(u, i, r);
    else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = me(e), e) {
      const r = c.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return xr(s);
        if (c.isFunction(n))
          return n.call(this, s, r);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = me(e), e) {
      const r = c.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Ie(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = me(a), a) {
        const i = c.findKey(r, a);
        i && (!n || Ie(r, r[i], i, n)) && (delete r[i], s = !0);
      }
    }
    return c.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || Ie(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return c.forEach(this, (s, o) => {
      const a = c.findKey(r, o);
      if (a) {
        n[a] = Re(s), delete n[o];
        return;
      }
      const i = e ? Dr(o) : String(o).trim();
      i !== o && delete n[o], n[i] = Re(s), r[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && c.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Et] = this[Et] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = me(a);
      r[i] || (Fr(s, a), r[i] = !0);
    }
    return c.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(Pe.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(Pe);
const V = Pe;
function Me(t, e) {
  const n = this || nt, r = e || n, s = V.from(r.headers);
  let o = r.data;
  return c.forEach(t, function(i) {
    o = i.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Jt(t) {
  return !!(t && t.__CANCEL__);
}
function fe(t, e, n) {
  T.call(this, t ?? "canceled", T.ERR_CANCELED, e, n), this.name = "CanceledError";
}
c.inherits(fe, T, {
  __CANCEL__: !0
});
function Kt(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new T(
    "Request failed with status code " + n.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ur(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Br(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, a;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const d = Date.now(), f = r[o];
    a || (a = d), n[s] = u, r[s] = d;
    let m = o, E = 0;
    for (; m !== s; )
      E += n[m++], m = m % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), d - a < e)
      return;
    const w = f && d - f;
    return w ? Math.round(E * 1e3 / w) : void 0;
  };
}
function Ir(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const a = (d, f = Date.now()) => {
    n = f, s = null, o && (clearTimeout(o), o = null), t.apply(null, d);
  };
  return [(...d) => {
    const f = Date.now(), m = f - n;
    m >= r ? a(d, f) : (s = d, o || (o = setTimeout(() => {
      o = null, a(s);
    }, r - m)));
  }, () => s && a(s)];
}
const Ae = (t, e, n = 3) => {
  let r = 0;
  const s = Br(50, 250);
  return Ir((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, u = a - r, d = s(u), f = a <= i;
    r = a;
    const m = {
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
    t(m);
  }, n);
}, yt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, bt = (t) => (...e) => c.asap(() => t(...e)), Mr = I.hasStandardBrowserEnv ? (
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
      const i = c.isString(a) ? s(a) : a;
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
), Hr = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o) {
      const a = [t + "=" + encodeURIComponent(e)];
      c.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), c.isString(r) && a.push("path=" + r), c.isString(s) && a.push("domain=" + s), o === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function Vr(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function jr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Gt(t, e) {
  return t && !Vr(e) ? jr(t, e) : e;
}
const gt = (t) => t instanceof V ? { ...t } : t;
function se(t, e) {
  e = e || {};
  const n = {};
  function r(d, f, m) {
    return c.isPlainObject(d) && c.isPlainObject(f) ? c.merge.call({ caseless: m }, d, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
  }
  function s(d, f, m) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(d))
        return r(void 0, d, m);
    } else
      return r(d, f, m);
  }
  function o(d, f) {
    if (!c.isUndefined(f))
      return r(void 0, f);
  }
  function a(d, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(d))
        return r(void 0, d);
    } else
      return r(void 0, f);
  }
  function i(d, f, m) {
    if (m in e)
      return r(d, f);
    if (m in t)
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
    headers: (d, f) => s(gt(d), gt(f), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const m = u[f] || s, E = m(t[f], e[f], f);
    c.isUndefined(E) && m !== i || (n[f] = E);
  }), n;
}
const Xt = (t) => {
  const e = se({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: i } = e;
  e.headers = a = V.from(a), e.url = $t(Gt(e.baseURL, e.url), t.params, t.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let u;
  if (c.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((u = a.getContentType()) !== !1) {
      const [d, ...f] = u ? u.split(";").map((m) => m.trim()).filter(Boolean) : [];
      a.setContentType([d || "multipart/form-data", ...f].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(e)), r || r !== !1 && Mr(e.url))) {
    const d = s && o && Hr.read(o);
    d && a.set(s, d);
  }
  return e;
}, qr = typeof XMLHttpRequest < "u", $r = qr && function(t) {
  return new Promise(function(n, r) {
    const s = Xt(t);
    let o = s.data;
    const a = V.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: u, onDownloadProgress: d } = s, f, m, E, w, p;
    function y() {
      w && w(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function g() {
      if (!h)
        return;
      const R = V.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), x = {
        data: !i || i === "text" || i === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: R,
        config: t,
        request: h
      };
      Kt(function(U) {
        n(U), y();
      }, function(U) {
        r(U), y();
      }, x), h = null;
    }
    "onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, h.onabort = function() {
      h && (r(new T("Request aborted", T.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      r(new T("Network Error", T.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let L = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || zt;
      s.timeoutErrorMessage && (L = s.timeoutErrorMessage), r(new T(
        L,
        x.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        t,
        h
      )), h = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in h && c.forEach(a.toJSON(), function(L, x) {
      h.setRequestHeader(x, L);
    }), c.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), i && i !== "json" && (h.responseType = s.responseType), d && ([E, p] = Ae(d, !0), h.addEventListener("progress", E)), u && h.upload && ([m, w] = Ae(u), h.upload.addEventListener("progress", m), h.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (f = (R) => {
      h && (r(!R || R.type ? new fe(null, t, h) : R), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const b = Ur(s.url);
    if (b && I.protocols.indexOf(b) === -1) {
      r(new T("Unsupported protocol " + b + ":", T.ERR_BAD_REQUEST, t));
      return;
    }
    h.send(o || null);
  });
}, zr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(d) {
      if (!s) {
        s = !0, i();
        const f = d instanceof Error ? d : this.reason;
        r.abort(f instanceof T ? f : new fe(f instanceof Error ? f.message : f));
      }
    };
    let a = e && setTimeout(() => {
      a = null, o(new T(`timeout ${e} of ms exceeded`, T.ETIMEDOUT));
    }, e);
    const i = () => {
      t && (a && clearTimeout(a), a = null, t.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((d) => d.addEventListener("abort", o));
    const { signal: u } = r;
    return u.unsubscribe = () => c.asap(i), u;
  }
}, Wr = zr, Jr = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Kr = async function* (t, e) {
  for await (const n of Gr(t))
    yield* Jr(n, e);
}, Gr = async function* (t) {
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
}, wt = (t, e, n, r) => {
  const s = Kr(t, e);
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
        let m = f.byteLength;
        if (n) {
          let E = o += m;
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
}, De = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Yt = De && typeof ReadableStream == "function", Xr = De && (typeof TextEncoder == "function" ? ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Qt = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Yr = Yt && Qt(() => {
  let t = !1;
  const e = new Request(I.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), St = 64 * 1024, Ke = Yt && Qt(() => c.isReadableStream(new Response("").body)), Oe = {
  stream: Ke && ((t) => t.body)
};
De && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Oe[e] && (Oe[e] = c.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new T(`Response type '${e}' is not supported`, T.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Qr = async (t) => {
  if (t == null)
    return 0;
  if (c.isBlob(t))
    return t.size;
  if (c.isSpecCompliantForm(t))
    return (await new Request(I.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(t) || c.isArrayBuffer(t))
    return t.byteLength;
  if (c.isURLSearchParams(t) && (t = t + ""), c.isString(t))
    return (await Xr(t)).byteLength;
}, Zr = async (t, e) => {
  const n = c.toFiniteNumber(t.getContentLength());
  return n ?? Qr(e);
}, es = De && (async (t) => {
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
    withCredentials: m = "same-origin",
    fetchOptions: E
  } = Xt(t);
  d = d ? (d + "").toLowerCase() : "text";
  let w = Wr([s, o && o.toAbortSignal()], a), p;
  const y = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let h;
  try {
    if (u && Yr && n !== "get" && n !== "head" && (h = await Zr(f, r)) !== 0) {
      let x = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (c.isFormData(r) && (O = x.headers.get("content-type")) && f.setContentType(O), x.body) {
        const [U, q] = yt(
          h,
          Ae(bt(u))
        );
        r = wt(x.body, St, U, q);
      }
    }
    c.isString(m) || (m = m ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    p = new Request(e, {
      ...E,
      signal: w,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: g ? m : void 0
    });
    let b = await fetch(p);
    const R = Ke && (d === "stream" || d === "response");
    if (Ke && (i || R && y)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((K) => {
        x[K] = b[K];
      });
      const O = c.toFiniteNumber(b.headers.get("content-length")), [U, q] = i && yt(
        O,
        Ae(bt(i), !0)
      ) || [];
      b = new Response(
        wt(b.body, St, U, () => {
          q && q(), y && y();
        }),
        x
      );
    }
    d = d || "text";
    let L = await Oe[c.findKey(Oe, d) || "text"](b, t);
    return !R && y && y(), await new Promise((x, O) => {
      Kt(x, O, {
        data: L,
        headers: V.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: p
      });
    });
  } catch (g) {
    throw y && y(), g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(
      new T("Network Error", T.ERR_NETWORK, t, p),
      {
        cause: g.cause || g
      }
    ) : T.from(g, g && g.code, t, p);
  }
}), Ge = {
  http: pr,
  xhr: $r,
  fetch: es
};
c.forEach(Ge, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Tt = (t) => `- ${t}`, ts = (t) => c.isFunction(t) || t === null || t === !1, Zt = {
  getAdapter: (t) => {
    t = c.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let a;
      if (r = n, !ts(n) && (r = Ge[(a = String(n)).toLowerCase()], r === void 0))
        throw new T(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([i, u]) => `adapter ${i} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = e ? o.length > 1 ? `since :
` + o.map(Tt).join(`
`) : " " + Tt(o[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ge
};
function He(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new fe(null, t);
}
function Rt(t) {
  return He(t), t.headers = V.from(t.headers), t.data = Me.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Zt.getAdapter(t.adapter || nt.adapter)(t).then(function(r) {
    return He(t), r.data = Me.call(
      t,
      t.transformResponse,
      r
    ), r.headers = V.from(r.headers), r;
  }, function(r) {
    return Jt(r) || (He(t), r && r.response && (r.response.data = Me.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = V.from(r.response.headers))), Promise.reject(r);
  });
}
const en = "1.7.7", rt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  rt[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Nt = {};
rt.transitional = function(e, n, r) {
  function s(o, a) {
    return "[Axios v" + en + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, i) => {
    if (e === !1)
      throw new T(
        s(a, " has been removed" + (n ? " in " + n : "")),
        T.ERR_DEPRECATED
      );
    return n && !Nt[a] && (Nt[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, a, i) : !0;
  };
};
function ns(t, e, n) {
  if (typeof t != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = e[o];
    if (a) {
      const i = t[o], u = i === void 0 || a(i, o, t);
      if (u !== !0)
        throw new T("option " + o + " must be " + u, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new T("Unknown option " + o, T.ERR_BAD_OPTION);
  }
}
const Xe = {
  assertOptions: ns,
  validators: rt
}, te = Xe.validators;
class ve {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ht(),
      response: new ht()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = se(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Xe.assertOptions(r, {
      silentJSONParsing: te.transitional(te.boolean),
      forcedJSONParsing: te.transitional(te.boolean),
      clarifyTimeoutError: te.transitional(te.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Xe.assertOptions(s, {
      encode: te.function,
      serialize: te.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && c.merge(
      o.common,
      o[n.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = V.concat(a, o);
    const i = [];
    let u = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (u = u && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(y) {
      d.push(y.fulfilled, y.rejected);
    });
    let f, m = 0, E;
    if (!u) {
      const p = [Rt.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, d), E = p.length, f = Promise.resolve(n); m < E; )
        f = f.then(p[m++], p[m++]);
      return f;
    }
    E = i.length;
    let w = n;
    for (m = 0; m < E; ) {
      const p = i[m++], y = i[m++];
      try {
        w = p(w);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      f = Rt.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (m = 0, E = d.length; m < E; )
      f = f.then(d[m++], d[m++]);
    return f;
  }
  getUri(e) {
    e = se(this.defaults, e);
    const n = Gt(e.baseURL, e.url);
    return $t(n, e.params, e.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(e) {
  ve.prototype[e] = function(n, r) {
    return this.request(se(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, a, i) {
      return this.request(se(i || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  ve.prototype[e] = n(), ve.prototype[e + "Form"] = n(!0);
});
const Ne = ve;
class st {
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
      r.reason || (r.reason = new fe(o, a, i), n(r.reason));
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
      token: new st(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
const rs = st;
function ss(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function os(t) {
  return c.isObject(t) && t.isAxiosError === !0;
}
const Ye = {
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
Object.entries(Ye).forEach(([t, e]) => {
  Ye[e] = t;
});
const as = Ye;
function tn(t) {
  const e = new Ne(t), n = xt(Ne.prototype.request, e);
  return c.extend(n, Ne.prototype, e, { allOwnKeys: !0 }), c.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return tn(se(t, s));
  }, n;
}
const D = tn(nt);
D.Axios = Ne;
D.CanceledError = fe;
D.CancelToken = rs;
D.isCancel = Jt;
D.VERSION = en;
D.toFormData = xe;
D.AxiosError = T;
D.Cancel = D.CanceledError;
D.all = function(e) {
  return Promise.all(e);
};
D.spread = ss;
D.isAxiosError = os;
D.mergeConfig = se;
D.AxiosHeaders = V;
D.formToJSON = (t) => Wt(c.isHTMLForm(t) ? new FormData(t) : t);
D.getAdapter = Zt.getAdapter;
D.HttpStatusCode = as;
D.default = D;
const is = D, nn = k.createContext({});
const ls = ({
  conditionControls: t,
  conditionLookup: e,
  conditionSettings: n,
  conditionIndex: r,
  removeCondition: s,
  selectedColumn: o,
  updateConditionsList: a
}) => {
  var g;
  const [i, u] = t, d = i[r], f = (b, R) => {
    const L = [...i];
    L[b] = R, u(L);
  }, E = Object.keys(e).filter((b) => b !== o), { columnName: w, isOrIsNotEqualTo: p, value: y } = n, h = (b, R) => {
    const L = W.cloneDeep(n);
    R === "columnName" && (L.value = ""), L[R] = b, a(L, r);
  };
  return d ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ l.createElement(
    "button",
    {
      onClick: () => {
        const b = [...i];
        b[r] = !1, u(b);
      }
    },
    /* @__PURE__ */ l.createElement(re, { display: "caretDown" })
  ), /* @__PURE__ */ l.createElement("button", { className: "btn btn-warn btn-sm mt-0 ml-2", onClick: () => s(r) }, "Remove")), /* @__PURE__ */ l.createElement("div", { id: `condition_${r}` }, /* @__PURE__ */ l.createElement("label", { className: "d-block" }, /* @__PURE__ */ l.createElement("span", null, "Condition : "), /* @__PURE__ */ l.createElement("div", { className: "pt-1" }, /* @__PURE__ */ l.createElement(
    "select",
    {
      className: "ml-1",
      value: w,
      onChange: (b) => h(b.target.value, "columnName")
    },
    /* @__PURE__ */ l.createElement("option", { value: "" }, "Select"),
    E == null ? void 0 : E.map((b) => /* @__PURE__ */ l.createElement("option", { key: b, value: b }, b))
  ), /* @__PURE__ */ l.createElement(
    "select",
    {
      className: "ml-1",
      value: p,
      onChange: (b) => h(b.target.value, "isOrIsNotEqualTo")
    },
    /* @__PURE__ */ l.createElement("option", { value: "is" }, "is"),
    /* @__PURE__ */ l.createElement("option", { value: "isNot" }, "is not")
  ), /* @__PURE__ */ l.createElement("select", { className: "ml-1", value: y, onChange: (b) => h(b.target.value, "value") }, /* @__PURE__ */ l.createElement("option", { value: "" }, "Select"), (g = e[w]) == null ? void 0 : g.map((b) => /* @__PURE__ */ l.createElement("option", { key: b, value: b }, b))))))) : /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "mb-1" }, /* @__PURE__ */ l.createElement("button", { onClick: () => f(r, !0) }, /* @__PURE__ */ l.createElement(re, { display: "caretDown" })), /* @__PURE__ */ l.createElement("span", null, " ", y ? `${w} ${p === "is" ? "is" : "is not"} ${y}` : "New Condition")));
}, cs = ({ controls: t, data: e, deleteVariable: n, updateVariableArray: r, variableConfig: s, variableIndex: o }) => {
  const [a, i] = t, u = a[o], d = (N, P) => {
    i({ openVariableControls: a, [N]: P });
  }, f = k.useState([]), m = Object.keys((e == null ? void 0 : e[0]) || {}), [E, w] = k.useState(s.columnName), [p, y] = k.useState(s.conditions), [h, g] = k.useState(s.name), [b, R] = k.useState(s.addCommas), L = k.useMemo(() => m.reduce((N, P) => (N[P] = W.uniq(e.map((M) => M[P])), N), {}), [m]), x = () => {
    R(!b);
  }, O = (N) => {
    w(N), y([]);
  }, U = (N, P) => {
    const { columnName: M, isOrIsNotEqualTo: ie, value: C } = N, B = W.cloneDeep(p);
    B[P] = {
      columnName: M,
      isOrIsNotEqualTo: ie,
      value: C
    }, y(B);
  }, q = (N) => {
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
    const [N, P] = f, M = [...N];
    M[p.length + 1] = !0, P(M);
  }, ae = () => {
    const N = p.filter((M) => M.columnName !== "" && M.value !== ""), P = {
      columnName: E,
      conditions: N,
      name: h,
      tag: `{{${h}}}`,
      addCommas: b
    };
    r(P, o), d(o, !1);
  }, Z = h === "", G = Z || E === "";
  return /* @__PURE__ */ l.createElement(l.Fragment, null, u ? /* @__PURE__ */ l.createElement("fieldset", { className: "edit-block mb-1", key: o }, /* @__PURE__ */ l.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ l.createElement("button", { onClick: ae, disabled: G }, /* @__PURE__ */ l.createElement(re, { display: "caretUp" })), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm mt-0 ml-2",
      onClick: (N) => {
        N.preventDefault(), n(o);
      }
    },
    "Delete"
  )), /* @__PURE__ */ l.createElement("label", { className: "d-block" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Variable Name:"), /* @__PURE__ */ l.createElement("input", { className: `variable-${o} ml-1`, type: "text", value: h, onChange: (N) => g(N.target.value) })), /* @__PURE__ */ l.createElement("div", { className: "pt-2" }, /* @__PURE__ */ l.createElement("label", { className: "d-block" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Column:"), /* @__PURE__ */ l.createElement("select", { className: `variable-${o} ml-1`, onChange: (N) => O(N.target.value), value: E, disabled: Z }, /* @__PURE__ */ l.createElement("option", { value: "" }, "Select"), m.map((N) => /* @__PURE__ */ l.createElement("option", { key: N, value: N }, N))))), /* @__PURE__ */ l.createElement("div", { className: "pt-2" }, /* @__PURE__ */ l.createElement(
    Ot,
    {
      value: b,
      label: "Add Commas to Number",
      updateField: x,
      tooltip: /* @__PURE__ */ l.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(Q.Target, null, /* @__PURE__ */ l.createElement(re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(Q.Content, null, /* @__PURE__ */ l.createElement("p", null, "Selecting this option will add commas to the numeric value.")))
    }
  )), /* @__PURE__ */ l.createElement("label", { className: "d-block py-2" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Conditions:"), p.map((N, P) => /* @__PURE__ */ l.createElement("div", { className: "condition-section mt-2" }, /* @__PURE__ */ l.createElement(
    ls,
    {
      key: h + "-condition-" + P,
      conditionControls: f,
      conditionLookup: L,
      conditionSettings: N,
      conditionIndex: P,
      removeCondition: q,
      selectedColumn: E,
      updateConditionsList: U
    }
  )))), /* @__PURE__ */ l.createElement("div", { className: "mt-1" }, /* @__PURE__ */ l.createElement("button", { onClick: K, disabled: G }, "Add Condition"), /* @__PURE__ */ l.createElement("button", { className: "ml-2", onClick: ae, disabled: G }, "Done"))) : /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "mb-2" }, /* @__PURE__ */ l.createElement("button", { onClick: () => d(o, !0) }, /* @__PURE__ */ l.createElement(re, { display: "caretDown" })), /* @__PURE__ */ l.createElement("span", null, " ", h ? `${h}` : "New Variable"))));
}, us = [
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
], ds = () => {
  const { config: t, data: e, isDashboard: n, loading: r, setParentConfig: s, updateConfig: o } = k.useContext(nn), { contentEditor: a, theme: i, visual: u } = t, { inlineHTML: d, markupVariables: f, srcUrl: m, title: E, useInlineHTML: w, allowHideSection: p } = a, [y, h] = k.useState(!0), g = an(t, o, !0), b = (e == null ? void 0 : e[0]) !== void 0, R = k.useState([]);
  k.useEffect(() => {
    if (s) {
      const C = x();
      s(C);
    }
  }, [t]), k.useEffect(() => {
    const C = { ...t };
    delete C.newViz, o(C);
  }, []);
  const L = () => {
    h(!y), o({
      ...t,
      showEditorPanel: !y
    });
  }, x = () => {
    const C = JSON.parse(JSON.stringify(t));
    return delete C.newViz, delete C.runtime, C;
  }, [O, U] = k.useState([...f]), [q, K] = k.useState(!1), ae = k.useRef(null), [Z, G] = R, N = () => {
    const C = [...W.cloneDeep(O)], B = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    G({ ...Z, [O.length + 1]: !0 }), C.push(B), U(C), K(!q);
  }, P = (C, B) => {
    const ee = W.cloneDeep(O);
    ee[B] = C, U(ee), g("contentEditor", null, "markupVariables", ee);
  }, M = (C) => {
    const B = W.cloneDeep(O);
    B.splice(C, 1), U(B), g("contentEditor", null, "markupVariables", B);
    const ee = W.cloneDeep(Z);
    delete ee[C], G(ee);
  }, ie = /* @__PURE__ */ l.createElement(we, null, /* @__PURE__ */ l.createElement(we.Section, { title: "General" }, /* @__PURE__ */ l.createElement(
    Ue,
    {
      value: E || "",
      section: "contentEditor",
      fieldName: "title",
      label: "Title",
      placeholder: "Markup Include Title",
      updateField: g
    }
  )), /* @__PURE__ */ l.createElement(we.Section, { title: "Content Editor" }, /* @__PURE__ */ l.createElement("span", { className: "divider-heading" }, "Enter Markup"), /* @__PURE__ */ l.createElement(
    ce,
    {
      inline: !0,
      value: w,
      section: "contentEditor",
      fieldName: "useInlineHTML",
      label: "Use Inline HTML ",
      updateField: g
    }
  ), /* @__PURE__ */ l.createElement("div", { className: "column-edit" }, w ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { ref: ae }, /* @__PURE__ */ l.createElement(
    Ue,
    {
      value: d,
      section: "contentEditor",
      fieldName: "inlineHTML",
      label: "HTML",
      placeholder: "Add HTML here",
      type: "textarea",
      rows: 10,
      updateField: g
    }
  ), /* @__PURE__ */ l.createElement("hr", { className: "accordion__divider" })), /* @__PURE__ */ l.createElement("fieldset", null, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Variables", /* @__PURE__ */ l.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(Q.Target, null, /* @__PURE__ */ l.createElement(re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(Q.Content, null, "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML")))), b === !1 && /* @__PURE__ */ l.createElement("span", { className: "need-data-source-prompt" }, "To use variables, add data source."), O && O.length > 0 && /* @__PURE__ */ l.createElement("div", { className: "section-border" }, O == null ? void 0 : O.map((C, B) => /* @__PURE__ */ l.createElement(
    cs,
    {
      key: `${C.name}-${B}`,
      controls: R,
      data: e,
      deleteVariable: M,
      updateVariableArray: P,
      variableConfig: C,
      variableIndex: B
    }
  ))), /* @__PURE__ */ l.createElement("div", { className: "pt-2" }, /* @__PURE__ */ l.createElement(
    Ot,
    {
      value: p,
      section: "contentEditor",
      fieldName: "allowHideSection",
      label: "Hide Section on Null",
      updateField: g,
      tooltip: /* @__PURE__ */ l.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(Q.Target, null, /* @__PURE__ */ l.createElement(
        re,
        {
          display: "question",
          style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
        }
      )), /* @__PURE__ */ l.createElement(Q.Content, null, /* @__PURE__ */ l.createElement("p", null, "Hide this entire Markup Include section if any variable is null or blank.")))
    }
  )), /* @__PURE__ */ l.createElement("div", { className: "mb-1 d-flex" }, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: N,
      disabled: !b
    },
    "Create New Variable"
  )))) : /* @__PURE__ */ l.createElement(
    Ue,
    {
      value: m || "",
      section: "contentEditor",
      fieldName: "srcUrl",
      label: "Source URL;",
      placeholder: "https://www.example.com/file.html",
      updateField: g
    }
  ))), /* @__PURE__ */ l.createElement(we.Section, { title: "Visual" }, /* @__PURE__ */ l.createElement("div", { className: "input-group" }, /* @__PURE__ */ l.createElement("label", null, "Theme"), /* @__PURE__ */ l.createElement("ul", { className: "color-palette" }, us.map((C) => /* @__PURE__ */ l.createElement(
    "li",
    {
      title: C,
      key: C,
      onClick: () => {
        o({ ...t, theme: C });
      },
      className: i === C ? "selected " + C : C
    }
  )))), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ l.createElement(
    ce,
    {
      value: u.border,
      section: "visual",
      fieldName: "border",
      label: "Display Border ",
      updateField: g
    }
  ), /* @__PURE__ */ l.createElement(
    ce,
    {
      value: u.borderColorTheme,
      section: "visual",
      fieldName: "borderColorTheme",
      label: "Use Border Color Theme ",
      updateField: g
    }
  ), /* @__PURE__ */ l.createElement(
    ce,
    {
      value: u.accent,
      section: "visual",
      fieldName: "accent",
      label: "Use Accent Style ",
      updateField: g
    }
  ), /* @__PURE__ */ l.createElement(
    ce,
    {
      value: u.background,
      section: "visual",
      fieldName: "background",
      label: "Use Theme Background Color ",
      updateField: g
    }
  ), /* @__PURE__ */ l.createElement(
    ce,
    {
      value: u.hideBackgroundColor,
      section: "visual",
      fieldName: "hideBackgroundColor",
      label: "Hide Background Color ",
      updateField: g
    }
  ))));
  return r && !(t != null && t.showEditorPanel) ? null : /* @__PURE__ */ l.createElement(At, { component: "EditorPanel" }, /* @__PURE__ */ l.createElement(
    Ve.Sidebar,
    {
      displayPanel: y,
      isDashboard: n,
      title: "Configure Markup Include",
      onBackClick: L
    },
    ie
  ));
}, Ct = {
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
}, fs = (t, e) => {
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
const Cs = ({
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
  }, [a, i] = k.useReducer(fs, o), { config: u, loading: d, urlMarkup: f, markupError: m, errorMessage: E, coveLoadedHasRan: w } = a, p = k.useRef(), { innerContainerClasses: y, contentClasses: h } = sn(u || {}), { contentEditor: g, theme: b } = u || {}, R = e == null ? void 0 : e.data, { inlineHTML: L, markupVariables: x, srcUrl: O, title: U, useInlineHTML: q } = g || {}, K = (S) => {
    Object.keys(Ct).forEach((_) => {
      S[_] && typeof S[_] == "object" && !Array.isArray(S[_]) && (S[_] = { ...Ct[_], ...S[_] });
    }), S.runtime = {}, S.runtime.uniqueId = Date.now(), S.runtime.editorErrorMessage = "", i({ type: "SET_CONFIG", payload: S });
  }, ae = k.useCallback(async () => {
    let S = e || await (await fetch(t)).json(), _ = S.data ?? {};
    S.dataUrl && (_ = await (await fetch(S.dataUrl)).json()), S.data = _;
    const $ = { ...on(S) };
    K({ ...e, ...$ }), i({ type: "SET_LOADING", payload: !1 });
  }, []);
  k.useEffect(() => {
    if (m) {
      let S = m, _ = "There was a problem retrieving the content from " + O + ". ", $ = /https?:\/\//g;
      S === 404 && !O.match($) && (S = "proto"), _ += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[S], i({ type: "SET_ERROR_MESSAGE", payload: _ });
    } else
      i({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [m]);
  const Z = k.useCallback(async () => {
    if (i({ type: "SET_MARKUP_ERROR", payload: null }), O)
      if (O === "#example")
        i({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await is.get(O).then((S) => {
            S.data && i({ type: "SET_URL_MARKUP", payload: S.data });
          });
        } catch (S) {
          S.response ? i({ type: "SET_MARKUP_ERROR", payload: S.response.status }) : S.request && i({ type: "SET_MARKUP_ERROR", payload: 200 }), i({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      i({ type: "SET_URL_MARKUP", payload: "" });
  }, [O]), G = (S, _) => {
    const { columnName: $, isOrIsNotEqualTo: le, value: X } = _[0], be = le === "is" ? S == null ? void 0 : S.filter((z) => z[$] === X) : S == null ? void 0 : S.filter((z) => z[$] !== X);
    return _.shift(), _.length === 0 ? be : G(be, _);
  }, N = [], P = (S) => {
    if (W.isEmpty(x))
      return S;
    const _ = /{{(.*?)}}/g;
    return S.replace(_, (le) => {
      if (N.length > 0)
        return;
      const X = x.filter((pe) => pe.tag === le)[0];
      if (X === void 0)
        return [le];
      const be = X && X.conditions.length === 0 ? R : G(R, [...X.conditions]), z = W.uniq(
        (be || []).map((pe) => {
          const Fe = pe[X.columnName];
          return X.addCommas && !isNaN(parseFloat(Fe)) ? parseFloat(Fe).toLocaleString("en-US", { useGrouping: !0 }) : Fe;
        })
      ), ot = [], at = r ? "or" : "and", ge = z.length;
      if (ge === 2) {
        const pe = z.join(` ${at} `);
        z.splice(0, 2, pe);
      }
      ge > 2 && (z[ge - 1] = `${at} ${z[ge - 1]}`), ot.push(z.join(", "));
      const it = ot[0];
      return it === "" && g.allowHideSection && N.push(!0), it;
    });
  }, M = (S) => {
    let _, $ = !1;
    return S && S !== "" && S !== null && (S.toString().match(/<body[^>]*>/i) && S.toString().match(/<\/body\s*>/i) ? ($ = !0, _ = S.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : _ = S.toString()), $ ? _[1] : _;
  };
  k.useEffect(() => {
    ae().catch((S) => console.log(S)), lt("cove_loaded", { loadConfigHasRun: !0 });
  }, []), k.useEffect(() => {
    u && !w && p && (lt("cove_loaded", { config: u }), i({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [u, p]), k.useEffect(() => {
    Z().catch((S) => console.log(S));
  }, [Z]);
  let ie = /* @__PURE__ */ l.createElement(ln, null);
  const C = q ? P(L) : M(f), B = (g == null ? void 0 : g.allowHideSection) && N.length > 0 && !r;
  d === !1 && (ie = /* @__PURE__ */ l.createElement(l.Fragment, null, r && /* @__PURE__ */ l.createElement(ds, null), !B && /* @__PURE__ */ l.createElement(Ve.Responsive, { isEditor: r }, /* @__PURE__ */ l.createElement("div", { className: "markup-include-content-container cove-component__content no-borders" }, /* @__PURE__ */ l.createElement("div", { className: `markup-include-component ${h.join(" ")}` }, /* @__PURE__ */ l.createElement(cn, { title: U, isDashboard: n, classes: [`${b}`, "mb-0"] }), /* @__PURE__ */ l.createElement("div", { className: `${y.join(" ")}` }, /* @__PURE__ */ l.createElement("div", { className: "cove-component__content-wrap" }, !m && /* @__PURE__ */ l.createElement(On, { allowElements: !!f, content: C }), m && O && /* @__PURE__ */ l.createElement("div", { className: "warning" }, E))))))));
  const ee = () => /* @__PURE__ */ l.createElement("section", { className: "waiting" }, /* @__PURE__ */ l.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ l.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ l.createElement("p", null, u == null ? void 0 : u.runtime.editorErrorMessage)));
  return /* @__PURE__ */ l.createElement(At, { component: "CdcMarkupInclude" }, /* @__PURE__ */ l.createElement(nn.Provider, { value: { config: u, updateConfig: K, loading: d, data: R, setParentConfig: s, isDashboard: n } }, !(u != null && u.newViz) && (u == null ? void 0 : u.runtime) && (u == null ? void 0 : u.runtime.editorErrorMessage) && /* @__PURE__ */ l.createElement(ee, null), /* @__PURE__ */ l.createElement(Ve.VisualizationWrapper, { config: u, isEditor: r, showEditorPanel: u == null ? void 0 : u.showEditorPanel }, ie)));
};
export {
  Cs as C,
  is as a
};
