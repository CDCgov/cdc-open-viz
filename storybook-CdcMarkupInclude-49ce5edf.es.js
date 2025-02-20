import { j as h, F as he, a as R } from "./storybook-jsx-runtime-36872362.es.js";
import { R as se, r as L } from "./storybook-index-45401197.es.js";
import { _ as J } from "./storybook-lodash-a4231e1c.es.js";
import { g as an } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { L as $e, u as ln, c as cn, p as dt } from "./storybook-coveUpdateWorker-f0e4685a.es.js";
import { u as un } from "./storybook-updateFieldFactory-c006040a.es.js";
import { I as Me, a as de } from "./storybook-editor-8c1f9105.es.js";
import { E as _t, L as dn } from "./storybook-viewports-678eca6e.es.js";
import { a as oe } from "./storybook-Icon-5df8fab3.es.js";
import { T as Z } from "./storybook-Tooltip-b155742f.es.js";
import { A as Re } from "./storybook-Accordion-e48d2b15.es.js";
import { C as xt } from "./storybook-Inputs-dfb97e80.es.js";
import { T as fn } from "./storybook-index-88ba5a71.es.js";
const O = 1, Lt = 2, kt = 4, U = 8, ze = 16, Ne = 32, K = 64, We = {
  a: {
    content: O | U,
    self: !1,
    type: O | U | Ne | K
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: O | U,
    void: !0
  },
  body: {
    content: O | Lt | kt | U | ze | Ne | K
  },
  button: {
    content: U,
    type: O | U | Ne | K
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
    type: O | Ne | K
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
    type: O | U | ze
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: U,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: U,
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
    content: U,
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
    type: O | U,
    void: !0
  }
};
function ae(t) {
  return (e) => {
    We[e] = {
      ...t,
      ...We[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(ae({
  content: O,
  type: O | K
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(ae({
  content: U,
  type: O | U | K
}));
["p", "pre"].forEach(ae({
  content: U,
  type: O | K
}));
["s", "small", "span", "del", "ins"].forEach(ae({
  content: U,
  type: O | U
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(ae({
  content: O,
  type: O | Lt | K
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(ae({
  content: U,
  type: O | kt | K
}));
["audio", "canvas", "iframe", "img", "video"].forEach(ae({
  type: O | U | ze | K
}));
const Je = Object.freeze(We), hn = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], pn = Object.keys(Je).filter((t) => t !== "canvas" && t !== "iframe"), _ = 1, mn = 2, Ee = 3, fe = 4, Pt = 5, ft = Object.freeze({
  alt: _,
  cite: _,
  class: _,
  colspan: Ee,
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
  rowspan: Ee,
  scope: _,
  sizes: _,
  span: Ee,
  start: Ee,
  style: Pt,
  src: _,
  srclang: _,
  srcset: _,
  tabindex: _,
  target: _,
  title: _,
  type: _,
  width: _
}), bn = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function ve() {
  return ve = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ve.apply(this, arguments);
}
function Dt({
  attributes: t = {},
  className: e,
  children: n = null,
  selfClose: r = !1,
  tagName: s
}) {
  const o = s;
  return r ? /* @__PURE__ */ se.createElement(o, ve({
    className: e
  }, t)) : /* @__PURE__ */ se.createElement(o, ve({
    className: e
  }, t), n);
}
class yn {
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
var En = /["'&<>]/, gn = wn;
function wn(t) {
  var e = "" + t, n = En.exec(e);
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
const Sn = /* @__PURE__ */ an(gn);
function Q(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
const Tn = /(url|image|image-set)\(/i;
class Rn extends yn {
  attribute(e, n) {
    return e === "style" && Object.keys(n).forEach((r) => {
      String(n[r]).match(Tn) && delete n[r];
    }), n;
  }
}
const ht = 1, Nn = 3, Cn = /^<(!doctype|(html|head|body)(\s|>))/i, An = /^(aria-|data-|\w+:)/iu, On = /{{{(\w+)\/?}}}/;
function vn() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class _n {
  constructor(e, n = {}, r = [], s = []) {
    var o;
    if (Q(this, "allowed", void 0), Q(this, "banned", void 0), Q(this, "blocked", void 0), Q(this, "container", void 0), Q(this, "content", []), Q(this, "props", void 0), Q(this, "matchers", void 0), Q(this, "filters", void 0), Q(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = n, this.matchers = r, this.filters = [...s, new Rn()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = n.allowList) !== null && o !== void 0 ? o : pn), this.banned = new Set(hn), this.blocked = new Set(n.blockList);
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
    let o = e, i = 0, a = null;
    return this.matchers.forEach((c) => {
      const u = c.asTag().toLowerCase(), d = this.getTagConfig(u);
      if (s[c.inverseName] || !this.isTagAllowed(u) || !this.canRenderChild(n, d))
        return;
      let p = "";
      for (; o && (a = c.match(o)); ) {
        const {
          index: b,
          length: w,
          match: f,
          valid: y,
          void: m,
          ...g
        } = a, E = c.propName + String(i);
        b > 0 && (p += o.slice(0, b)), y ? (p += m ? `{{{${E}/}}}` : `{{{${E}}}}${f}{{{/${E}}}}`, this.keyIndex += 1, i += 1, r[E] = {
          children: f,
          matcher: c,
          props: {
            ...s,
            ...g,
            key: this.keyIndex
          }
        }) : p += f, c.greedy ? (o = p + o.slice(b + w), p = "") : o = o.slice(b + (w || f.length));
      }
      c.greedy || (o = p + o);
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
    const s = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || vn)();
    if (!s)
      return;
    const o = (n = this.props.containerTagName) !== null && n !== void 0 ? n : "body", i = o === "body" || o === "fragment" ? s.body : s.createElement(o);
    if (e.match(Cn)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      i.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? Sn(e) : e);
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
    return e.nodeType !== ht || !e.attributes || ([...e.attributes].forEach((o) => {
      const {
        name: i,
        value: a
      } = o, c = i.toLowerCase(), u = ft[c] || ft[i];
      if (!this.isSafe(e) || !c.match(An) && (!n && (!u || u === mn) || c.startsWith("on") || a.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let d = c === "style" ? this.extractStyleAttribute(e) : a;
      u === fe ? d = !0 : u === Ee ? d = Number.parseFloat(String(d)) : u !== Pt && (d = String(d)), r[bn[c] || c] = this.applyAttributeFilters(c, d), s += 1;
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
    return Je[e] ? {
      ...n,
      ...Je[e],
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
      transformOnlyAllowList: a
    } = this.props;
    let c = [], u = "";
    return [...e.childNodes].forEach((d) => {
      if (d.nodeType === ht) {
        const b = d.nodeName.toLowerCase(), w = this.getTagConfig(b);
        u && (c.push(u), u = "");
        const f = this.applyNodeFilters(b, d);
        if (!f)
          return;
        let y;
        if (i && !(a && !this.isTagAllowed(b))) {
          this.keyIndex += 1;
          const m = this.keyIndex;
          y = this.parseNode(f, w);
          const g = i(f, y, w);
          if (g === null)
            return;
          if (typeof g < "u") {
            c.push(/* @__PURE__ */ se.cloneElement(g, {
              key: m
            }));
            return;
          }
          this.keyIndex = m - 1;
        }
        if (this.banned.has(b))
          return;
        if (!(r || s && b !== "br") && this.isTagAllowed(b) && (o || this.canRenderChild(n, w))) {
          var p;
          this.keyIndex += 1;
          const m = this.extractAttributes(f), g = {
            tagName: b
          };
          m && (g.attributes = m), w.void && (g.selfClose = w.void), c.push(/* @__PURE__ */ se.createElement(Dt, {
            ...g,
            key: this.keyIndex
          }, (p = y) !== null && p !== void 0 ? p : this.parseNode(f, w)));
        } else
          c = [...c, ...this.parseNode(f, w.tagName ? w : n)];
      } else if (d.nodeType === Nn) {
        const b = r && !s ? d.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(d.textContent || "", n)
        );
        Array.isArray(b) ? c = [...c, ...b] : u += b;
      }
    }), u && c.push(u), c;
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
    for (; o = s.match(On); ) {
      const [i, a] = o, c = o.index, u = i.includes("/");
      if (process.env.NODE_ENV !== "production" && !n[a])
        throw new Error(`Token "${a}" found but no matching element to replace with.`);
      c > 0 && (r.push(s.slice(0, c)), s = s.slice(c));
      const {
        children: d,
        matcher: p,
        props: b
      } = n[a];
      let w;
      if (u)
        w = i.length, r.push(p.createElement(d, b));
      else {
        const f = s.match(new RegExp(`{{{/${a}}}}`));
        if (process.env.NODE_ENV !== "production" && !f)
          throw new Error(`Closing token missing for interpolated element "${a}".`);
        w = f.index + f[0].length, r.push(p.createElement(this.replaceTokens(s.slice(i.length, f.index), n), b));
      }
      s = s.slice(w);
    }
    return s.length > 0 && r.push(s), r.length === 0 ? "" : r.length === 1 && typeof r[0] == "string" ? r[0] : r;
  }
}
function xn(t) {
  var e;
  const {
    attributes: n,
    className: r,
    containerTagName: s,
    content: o,
    emptyContent: i,
    parsedContent: a,
    tagName: c,
    noWrap: u
  } = t, d = (e = s ?? c) !== null && e !== void 0 ? e : "span", p = d === "fragment" ? !0 : u;
  let b;
  if (a)
    b = a;
  else {
    const w = new _n(o ?? "", t).parse();
    w.length > 0 && (b = w);
  }
  return b || (b = i), p ? /* @__PURE__ */ se.createElement(se.Fragment, null, b) : /* @__PURE__ */ se.createElement(Dt, {
    attributes: n,
    className: r,
    tagName: d
  }, b);
}
function Ft(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Ln } = Object.prototype, { getPrototypeOf: tt } = Object, ke = ((t) => (e) => {
  const n = Ln.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), q = (t) => (t = t.toLowerCase(), (e) => ke(e) === t), Pe = (t) => (e) => typeof e === t, { isArray: pe } = Array, ge = Pe("undefined");
function kn(t) {
  return t !== null && !ge(t) && t.constructor !== null && !ge(t.constructor) && j(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ut = q("ArrayBuffer");
function Pn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ut(t.buffer), e;
}
const Dn = Pe("string"), j = Pe("function"), Bt = Pe("number"), De = (t) => t !== null && typeof t == "object", Fn = (t) => t === !0 || t === !1, Ce = (t) => {
  if (ke(t) !== "object")
    return !1;
  const e = tt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Un = q("Date"), Bn = q("File"), In = q("Blob"), Mn = q("FileList"), Hn = (t) => De(t) && j(t.pipe), jn = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || j(t.append) && ((e = ke(t)) === "formdata" || // detect form-data instance
  e === "object" && j(t.toString) && t.toString() === "[object FormData]"));
}, Vn = q("URLSearchParams"), [qn, $n, zn, Wn] = ["ReadableStream", "Request", "Response", "Headers"].map(q), Jn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function we(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), pe(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], e.call(null, t[a], a, t);
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
const re = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Mt = (t) => !ge(t) && t !== re;
function Ke() {
  const { caseless: t } = Mt(this) && this || {}, e = {}, n = (r, s) => {
    const o = t && It(e, s) || s;
    Ce(e[o]) && Ce(r) ? e[o] = Ke(e[o], r) : Ce(r) ? e[o] = Ke({}, r) : pe(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && we(arguments[r], n);
  return e;
}
const Kn = (t, e, n, { allOwnKeys: r } = {}) => (we(e, (s, o) => {
  n && j(s) ? t[o] = Ft(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), Gn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Xn = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Yn = (t, e, n, r) => {
  let s, o, i;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && tt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Qn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Zn = (t) => {
  if (!t)
    return null;
  if (pe(t))
    return t;
  let e = t.length;
  if (!Bt(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, er = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && tt(Uint8Array)), tr = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, nr = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, rr = q("HTMLFormElement"), sr = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), pt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), or = q("RegExp"), Ht = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  we(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, ir = (t) => {
  Ht(t, (e, n) => {
    if (j(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (j(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ar = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return pe(t) ? r(t) : r(String(t).split(e)), n;
}, lr = () => {
}, cr = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, He = "abcdefghijklmnopqrstuvwxyz", mt = "0123456789", jt = {
  DIGIT: mt,
  ALPHA: He,
  ALPHA_DIGIT: He + He.toUpperCase() + mt
}, ur = (t = 16, e = jt.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function dr(t) {
  return !!(t && j(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const fr = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (De(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = pe(r) ? [] : {};
        return we(r, (i, a) => {
          const c = n(i, s + 1);
          !ge(c) && (o[a] = c);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, hr = q("AsyncFunction"), pr = (t) => t && (De(t) || j(t)) && j(t.then) && j(t.catch), Vt = ((t, e) => t ? setImmediate : e ? ((n, r) => (re.addEventListener("message", ({ source: s, data: o }) => {
  s === re && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), re.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  j(re.postMessage)
), mr = typeof queueMicrotask < "u" ? queueMicrotask.bind(re) : typeof process < "u" && process.nextTick || Vt, l = {
  isArray: pe,
  isArrayBuffer: Ut,
  isBuffer: kn,
  isFormData: jn,
  isArrayBufferView: Pn,
  isString: Dn,
  isNumber: Bt,
  isBoolean: Fn,
  isObject: De,
  isPlainObject: Ce,
  isReadableStream: qn,
  isRequest: $n,
  isResponse: zn,
  isHeaders: Wn,
  isUndefined: ge,
  isDate: Un,
  isFile: Bn,
  isBlob: In,
  isRegExp: or,
  isFunction: j,
  isStream: Hn,
  isURLSearchParams: Vn,
  isTypedArray: er,
  isFileList: Mn,
  forEach: we,
  merge: Ke,
  extend: Kn,
  trim: Jn,
  stripBOM: Gn,
  inherits: Xn,
  toFlatObject: Yn,
  kindOf: ke,
  kindOfTest: q,
  endsWith: Qn,
  toArray: Zn,
  forEachEntry: tr,
  matchAll: nr,
  isHTMLForm: rr,
  hasOwnProperty: pt,
  hasOwnProp: pt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ht,
  freezeMethods: ir,
  toObjectSet: ar,
  toCamelCase: sr,
  noop: lr,
  toFiniteNumber: cr,
  findKey: It,
  global: re,
  isContextDefined: Mt,
  ALPHABET: jt,
  generateString: ur,
  isSpecCompliantForm: dr,
  toJSONObject: fr,
  isAsyncFn: hr,
  isThenable: pr,
  setImmediate: Vt,
  asap: mr
};
function T(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
l.inherits(T, Error, {
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
const qt = T.prototype, $t = {};
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
Object.defineProperties(T, $t);
Object.defineProperty(qt, "isAxiosError", { value: !0 });
T.from = (t, e, n, r, s, o) => {
  const i = Object.create(qt);
  return l.toFlatObject(t, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), T.call(i, t.message, e, n, r, s), i.cause = t, i.name = t.name, o && Object.assign(i, o), i;
};
const br = null;
function Ge(t) {
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
function yr(t) {
  return l.isArray(t) && !t.some(Ge);
}
const Er = l.toFlatObject(l, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Fe(t, e, n) {
  if (!l.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !l.isUndefined(m[y]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(e);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null)
      return "";
    if (l.isDate(f))
      return f.toISOString();
    if (!c && l.isBlob(f))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(f) || l.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, y, m) {
    let g = f;
    if (f && !m && typeof f == "object") {
      if (l.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), f = JSON.stringify(f);
      else if (l.isArray(f) && yr(f) || (l.isFileList(f) || l.endsWith(y, "[]")) && (g = l.toArray(f)))
        return y = zt(y), g.forEach(function(N, k) {
          !(l.isUndefined(N) || N === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bt([y], k, o) : i === null ? y : y + "[]",
            u(N)
          );
        }), !1;
    }
    return Ge(f) ? !0 : (e.append(bt(m, y, o), u(f)), !1);
  }
  const p = [], b = Object.assign(Er, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Ge
  });
  function w(f, y) {
    if (!l.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(f), l.forEach(f, function(g, E) {
        (!(l.isUndefined(g) || g === null) && s.call(
          e,
          g,
          l.isString(E) ? E.trim() : E,
          y,
          b
        )) === !0 && w(g, y ? y.concat(E) : [E]);
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
function nt(t, e) {
  this._pairs = [], t && Fe(t, this, e);
}
const Wt = nt.prototype;
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
function gr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jt(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || gr, s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = l.isURLSearchParams(e) ? e.toString() : new nt(e, n).toString(r), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class wr {
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
const Et = wr, Kt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Sr = typeof URLSearchParams < "u" ? URLSearchParams : nt, Tr = typeof FormData < "u" ? FormData : null, Rr = typeof Blob < "u" ? Blob : null, Nr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sr,
    FormData: Tr,
    Blob: Rr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, rt = typeof window < "u" && typeof document < "u", Xe = typeof navigator == "object" && navigator || void 0, Cr = rt && (!Xe || ["ReactNative", "NativeScript", "NS"].indexOf(Xe.product) < 0), Ar = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Or = rt && window.location.href || "http://localhost", vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: rt,
  hasStandardBrowserEnv: Cr,
  hasStandardBrowserWebWorkerEnv: Ar,
  navigator: Xe,
  origin: Or
}, Symbol.toStringTag, { value: "Module" })), M = {
  ...vr,
  ...Nr
};
function _r(t, e) {
  return Fe(t, new M.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return M.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function xr(t) {
  return l.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Lr(t) {
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
    const a = Number.isFinite(+i), c = o >= n.length;
    return i = !i && l.isArray(s) ? s.length : i, c ? (l.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !l.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && l.isArray(s[i]) && (s[i] = Lr(s[i])), !a);
  }
  if (l.isFormData(t) && l.isFunction(t.entries)) {
    const n = {};
    return l.forEachEntry(t, (r, s) => {
      e(xr(r), s, n, 0);
    }), n;
  }
  return null;
}
function kr(t, e, n) {
  if (l.isString(t))
    try {
      return (e || JSON.parse)(t), l.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const st = {
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
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return _r(e, this.formSerializer).toString();
      if ((a = l.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Fe(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), kr(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || st.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (l.isResponse(e) || l.isReadableStream(e))
      return e;
    if (e && l.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? T.from(a, T.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: M.classes.FormData,
    Blob: M.classes.Blob
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
  st.headers[t] = {};
});
const ot = st, Pr = l.toObjectSet([
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
]), Dr = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && Pr[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, gt = Symbol("internals");
function ye(t) {
  return t && String(t).trim().toLowerCase();
}
function Ae(t) {
  return t === !1 || t == null ? t : l.isArray(t) ? t.map(Ae) : String(t);
}
function Fr(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Ur = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function je(t, e, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!l.isString(e)) {
    if (l.isString(r))
      return e.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(e);
  }
}
function Br(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Ir(t, e) {
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
class Ue {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(a, c, u) {
      const d = ye(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(s, d);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || c] = Ae(a));
    }
    const i = (a, c) => l.forEach(a, (u, d) => o(u, d, c));
    if (l.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (l.isString(e) && (e = e.trim()) && !Ur(e))
      i(Dr(e), n);
    else if (l.isHeaders(e))
      for (const [a, c] of e.entries())
        o(c, a, r);
    else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = ye(e), e) {
      const r = l.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Fr(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ye(e), e) {
      const r = l.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || je(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = ye(i), i) {
        const a = l.findKey(r, i);
        a && (!n || je(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return l.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || je(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return l.forEach(this, (s, o) => {
      const i = l.findKey(r, o);
      if (i) {
        n[i] = Ae(s), delete n[o];
        return;
      }
      const a = e ? Br(o) : String(o).trim();
      a !== o && delete n[o], n[a] = Ae(s), r[a] = !0;
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
    const r = (this[gt] = this[gt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = ye(i);
      r[a] || (Ir(s, i), r[a] = !0);
    }
    return l.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Ue.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(Ue.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(Ue);
const V = Ue;
function Ve(t, e) {
  const n = this || ot, r = e || n, s = V.from(r.headers);
  let o = r.data;
  return l.forEach(t, function(a) {
    o = a.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Xt(t) {
  return !!(t && t.__CANCEL__);
}
function me(t, e, n) {
  T.call(this, t ?? "canceled", T.ERR_CANCELED, e, n), this.name = "CanceledError";
}
l.inherits(me, T, {
  __CANCEL__: !0
});
function Yt(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new T(
    "Request failed with status code " + n.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Mr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Hr(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const u = Date.now(), d = r[o];
    i || (i = u), n[s] = c, r[s] = u;
    let p = o, b = 0;
    for (; p !== s; )
      b += n[p++], p = p % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), u - i < e)
      return;
    const w = d && u - d;
    return w ? Math.round(b * 1e3 / w) : void 0;
  };
}
function jr(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (u, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), t.apply(null, u);
  };
  return [(...u) => {
    const d = Date.now(), p = d - n;
    p >= r ? i(u, d) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const _e = (t, e, n = 3) => {
  let r = 0;
  const s = Hr(50, 250);
  return jr((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, c = i - r, u = s(c), d = i <= a;
    r = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && a && d ? (a - i) / u : void 0,
      event: o,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, n);
}, wt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, St = (t) => (...e) => l.asap(() => t(...e)), Vr = M.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = M.navigator && /(msie|trident)/i.test(M.navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return e && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
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
    return r = s(window.location.href), function(i) {
      const a = l.isString(i) ? s(i) : i;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
), qr = M.hasStandardBrowserEnv ? (
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
function $r(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function zr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Qt(t, e) {
  return t && !$r(e) ? zr(t, e) : e;
}
const Tt = (t) => t instanceof V ? { ...t } : t;
function ie(t, e) {
  e = e || {};
  const n = {};
  function r(u, d, p) {
    return l.isPlainObject(u) && l.isPlainObject(d) ? l.merge.call({ caseless: p }, u, d) : l.isPlainObject(d) ? l.merge({}, d) : l.isArray(d) ? d.slice() : d;
  }
  function s(u, d, p) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(u))
        return r(void 0, u, p);
    } else
      return r(u, d, p);
  }
  function o(u, d) {
    if (!l.isUndefined(d))
      return r(void 0, d);
  }
  function i(u, d) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, d);
  }
  function a(u, d, p) {
    if (p in e)
      return r(u, d);
    if (p in t)
      return r(void 0, u);
  }
  const c = {
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
    validateStatus: a,
    headers: (u, d) => s(Tt(u), Tt(d), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, t, e)), function(d) {
    const p = c[d] || s, b = p(t[d], e[d], d);
    l.isUndefined(b) && p !== a || (n[d] = b);
  }), n;
}
const Zt = (t) => {
  const e = ie({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = e;
  e.headers = i = V.from(i), e.url = Jt(Qt(e.baseURL, e.url), t.params, t.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (l.isFormData(n)) {
    if (M.hasStandardBrowserEnv || M.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [u, ...d] = c ? c.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (M.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(e)), r || r !== !1 && Vr(e.url))) {
    const u = s && o && qr.read(o);
    u && i.set(s, u);
  }
  return e;
}, Wr = typeof XMLHttpRequest < "u", Jr = Wr && function(t) {
  return new Promise(function(n, r) {
    const s = Zt(t);
    let o = s.data;
    const i = V.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = s, d, p, b, w, f;
    function y() {
      w && w(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function g() {
      if (!m)
        return;
      const N = V.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: N,
        config: t,
        request: m
      };
      Yt(function(B) {
        n(B), y();
      }, function(B) {
        r(B), y();
      }, P), m = null;
    }
    "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, m.onabort = function() {
      m && (r(new T("Request aborted", T.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function() {
      r(new T("Network Error", T.ERR_NETWORK, t, m)), m = null;
    }, m.ontimeout = function() {
      let k = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || Kt;
      s.timeoutErrorMessage && (k = s.timeoutErrorMessage), r(new T(
        k,
        P.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        t,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && l.forEach(i.toJSON(), function(k, P) {
      m.setRequestHeader(P, k);
    }), l.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), a && a !== "json" && (m.responseType = s.responseType), u && ([b, f] = _e(u, !0), m.addEventListener("progress", b)), c && m.upload && ([p, w] = _e(c), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (d = (N) => {
      m && (r(!N || N.type ? new me(null, t, m) : N), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const E = Mr(s.url);
    if (E && M.protocols.indexOf(E) === -1) {
      r(new T("Unsupported protocol " + E + ":", T.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(o || null);
  });
}, Kr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, a();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof T ? d : new me(d instanceof Error ? d.message : d));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new T(`timeout ${e} of ms exceeded`, T.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => l.asap(a), c;
  }
}, Gr = Kr, Xr = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Yr = async function* (t, e) {
  for await (const n of Qr(t))
    yield* Xr(n, e);
}, Qr = async function* (t) {
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
  const s = Yr(t, e);
  let o = 0, i, a = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: d } = await s.next();
        if (u) {
          a(), c.close();
          return;
        }
        let p = d.byteLength;
        if (n) {
          let b = o += p;
          n(b);
        }
        c.enqueue(new Uint8Array(d));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(c) {
      return a(c), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Be = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", en = Be && typeof ReadableStream == "function", Zr = Be && (typeof TextEncoder == "function" ? ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), tn = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, es = en && tn(() => {
  let t = !1;
  const e = new Request(M.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Nt = 64 * 1024, Ye = en && tn(() => l.isReadableStream(new Response("").body)), xe = {
  stream: Ye && ((t) => t.body)
};
Be && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !xe[e] && (xe[e] = l.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new T(`Response type '${e}' is not supported`, T.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const ts = async (t) => {
  if (t == null)
    return 0;
  if (l.isBlob(t))
    return t.size;
  if (l.isSpecCompliantForm(t))
    return (await new Request(M.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (l.isArrayBufferView(t) || l.isArrayBuffer(t))
    return t.byteLength;
  if (l.isURLSearchParams(t) && (t = t + ""), l.isString(t))
    return (await Zr(t)).byteLength;
}, ns = async (t, e) => {
  const n = l.toFiniteNumber(t.getContentLength());
  return n ?? ts(e);
}, rs = Be && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: u,
    headers: d,
    withCredentials: p = "same-origin",
    fetchOptions: b
  } = Zt(t);
  u = u ? (u + "").toLowerCase() : "text";
  let w = Gr([s, o && o.toAbortSignal()], i), f;
  const y = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let m;
  try {
    if (c && es && n !== "get" && n !== "head" && (m = await ns(d, r)) !== 0) {
      let P = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), v;
      if (l.isFormData(r) && (v = P.headers.get("content-type")) && d.setContentType(v), P.body) {
        const [B, $] = wt(
          m,
          _e(St(c))
        );
        r = Rt(P.body, Nt, B, $);
      }
    }
    l.isString(p) || (p = p ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    f = new Request(e, {
      ...b,
      signal: w,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: g ? p : void 0
    });
    let E = await fetch(f);
    const N = Ye && (u === "stream" || u === "response");
    if (Ye && (a || N && y)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((G) => {
        P[G] = E[G];
      });
      const v = l.toFiniteNumber(E.headers.get("content-length")), [B, $] = a && wt(
        v,
        _e(St(a), !0)
      ) || [];
      E = new Response(
        Rt(E.body, Nt, B, () => {
          $ && $(), y && y();
        }),
        P
      );
    }
    u = u || "text";
    let k = await xe[l.findKey(xe, u) || "text"](E, t);
    return !N && y && y(), await new Promise((P, v) => {
      Yt(P, v, {
        data: k,
        headers: V.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: t,
        request: f
      });
    });
  } catch (g) {
    throw y && y(), g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(
      new T("Network Error", T.ERR_NETWORK, t, f),
      {
        cause: g.cause || g
      }
    ) : T.from(g, g && g.code, t, f);
  }
}), Qe = {
  http: br,
  xhr: Jr,
  fetch: rs
};
l.forEach(Qe, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ct = (t) => `- ${t}`, ss = (t) => l.isFunction(t) || t === null || t === !1, nn = {
  getAdapter: (t) => {
    t = l.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let i;
      if (r = n, !ss(n) && (r = Qe[(i = String(n)).toLowerCase()], r === void 0))
        throw new T(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? o.length > 1 ? `since :
` + o.map(Ct).join(`
`) : " " + Ct(o[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Qe
};
function qe(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new me(null, t);
}
function At(t) {
  return qe(t), t.headers = V.from(t.headers), t.data = Ve.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), nn.getAdapter(t.adapter || ot.adapter)(t).then(function(r) {
    return qe(t), r.data = Ve.call(
      t,
      t.transformResponse,
      r
    ), r.headers = V.from(r.headers), r;
  }, function(r) {
    return Xt(r) || (qe(t), r && r.response && (r.response.data = Ve.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = V.from(r.response.headers))), Promise.reject(r);
  });
}
const rn = "1.7.7", it = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  it[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ot = {};
it.transitional = function(e, n, r) {
  function s(o, i) {
    return "[Axios v" + rn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (e === !1)
      throw new T(
        s(i, " has been removed" + (n ? " in " + n : "")),
        T.ERR_DEPRECATED
      );
    return n && !Ot[i] && (Ot[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, i, a) : !0;
  };
};
function os(t, e, n) {
  if (typeof t != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const a = t[o], c = a === void 0 || i(a, o, t);
      if (c !== !0)
        throw new T("option " + o + " must be " + c, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new T("Unknown option " + o, T.ERR_BAD_OPTION);
  }
}
const Ze = {
  assertOptions: os,
  validators: it
}, ne = Ze.validators;
class Le {
  constructor(e) {
    this.defaults = e, this.interceptors = {
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ie(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ze.assertOptions(r, {
      silentJSONParsing: ne.transitional(ne.boolean),
      forcedJSONParsing: ne.transitional(ne.boolean),
      clarifyTimeoutError: ne.transitional(ne.boolean)
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ze.assertOptions(s, {
      encode: ne.function,
      serialize: ne.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && l.merge(
      o.common,
      o[n.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = V.concat(i, o);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (c = c && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let d, p = 0, b;
    if (!c) {
      const f = [At.bind(this), void 0];
      for (f.unshift.apply(f, a), f.push.apply(f, u), b = f.length, d = Promise.resolve(n); p < b; )
        d = d.then(f[p++], f[p++]);
      return d;
    }
    b = a.length;
    let w = n;
    for (p = 0; p < b; ) {
      const f = a[p++], y = a[p++];
      try {
        w = f(w);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      d = At.call(this, w);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, b = u.length; p < b; )
      d = d.then(u[p++], u[p++]);
    return d;
  }
  getUri(e) {
    e = ie(this.defaults, e);
    const n = Qt(e.baseURL, e.url);
    return Jt(n, e.params, e.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(e) {
  Le.prototype[e] = function(n, r) {
    return this.request(ie(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, a) {
      return this.request(ie(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Le.prototype[e] = n(), Le.prototype[e + "Form"] = n(!0);
});
const Oe = Le;
class at {
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
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, e(function(o, i, a) {
      r.reason || (r.reason = new me(o, i, a), n(r.reason));
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
      token: new at(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
const is = at;
function as(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function ls(t) {
  return l.isObject(t) && t.isAxiosError === !0;
}
const et = {
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
Object.entries(et).forEach(([t, e]) => {
  et[e] = t;
});
const cs = et;
function sn(t) {
  const e = new Oe(t), n = Ft(Oe.prototype.request, e);
  return l.extend(n, Oe.prototype, e, { allOwnKeys: !0 }), l.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return sn(ie(t, s));
  }, n;
}
const F = sn(ot);
F.Axios = Oe;
F.CanceledError = me;
F.CancelToken = is;
F.isCancel = Xt;
F.VERSION = rn;
F.toFormData = Fe;
F.AxiosError = T;
F.Cancel = F.CanceledError;
F.all = function(e) {
  return Promise.all(e);
};
F.spread = as;
F.isAxiosError = ls;
F.mergeConfig = ie;
F.AxiosHeaders = V;
F.formToJSON = (t) => Gt(l.isHTMLForm(t) ? new FormData(t) : t);
F.getAdapter = nn.getAdapter;
F.HttpStatusCode = cs;
F.default = F;
const us = F, on = L.createContext({});
const ds = ({
  conditionControls: t,
  conditionLookup: e,
  conditionSettings: n,
  conditionIndex: r,
  removeCondition: s,
  selectedColumn: o,
  updateConditionsList: i
}) => {
  var g;
  const [a, c] = t, u = a[r], d = (E, N) => {
    const k = [...a];
    k[E] = N, c(k);
  }, b = Object.keys(e).filter((E) => E !== o), { columnName: w, isOrIsNotEqualTo: f, value: y } = n, m = (E, N) => {
    const k = J.cloneDeep(n);
    N === "columnName" && (k.value = ""), k[N] = E, i(k, r);
  };
  return u ? /* @__PURE__ */ R(he, { children: [
    /* @__PURE__ */ R("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ h(
        "button",
        {
          onClick: () => {
            const E = [...a];
            E[r] = !1, c(E);
          },
          children: /* @__PURE__ */ h(oe, { display: "caretDown" })
        }
      ),
      /* @__PURE__ */ h("button", { className: "btn btn-warn btn-sm mt-0 ms-2", onClick: () => s(r), children: "Remove" })
    ] }),
    /* @__PURE__ */ h("div", { id: `condition_${r}`, children: /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ h("span", { children: "Condition : " }),
      /* @__PURE__ */ R("div", { className: "pt-1", children: [
        /* @__PURE__ */ R(
          "select",
          {
            className: "ms-1",
            value: w,
            onChange: (E) => m(E.target.value, "columnName"),
            children: [
              /* @__PURE__ */ h("option", { value: "", children: "Select" }),
              b == null ? void 0 : b.map((E) => /* @__PURE__ */ h("option", { value: E, children: E }, E))
            ]
          }
        ),
        /* @__PURE__ */ R(
          "select",
          {
            className: "ms-1",
            value: f,
            onChange: (E) => m(E.target.value, "isOrIsNotEqualTo"),
            children: [
              /* @__PURE__ */ h("option", { value: "is", children: "is" }),
              /* @__PURE__ */ h("option", { value: "isNot", children: "is not" })
            ]
          }
        ),
        /* @__PURE__ */ R("select", { className: "ms-1", value: y, onChange: (E) => m(E.target.value, "value"), children: [
          /* @__PURE__ */ h("option", { value: "", children: "Select" }),
          (g = e[w]) == null ? void 0 : g.map((E) => /* @__PURE__ */ h("option", { value: E, children: E }, E))
        ] })
      ] })
    ] }) })
  ] }) : /* @__PURE__ */ h(he, { children: /* @__PURE__ */ R("div", { className: "mb-1", children: [
    /* @__PURE__ */ h("button", { onClick: () => d(r, !0), children: /* @__PURE__ */ h(oe, { display: "caretDown" }) }),
    /* @__PURE__ */ R("span", { children: [
      " ",
      y ? `${w} ${f === "is" ? "is" : "is not"} ${y}` : "New Condition"
    ] })
  ] }) });
}, fs = ({
  controls: t,
  data: e,
  deleteVariable: n,
  updateVariableArray: r,
  variableConfig: s,
  variableIndex: o
}) => {
  const [i, a] = t, c = i[o], u = (C, D) => {
    a({ openVariableControls: i, [C]: D });
  }, d = L.useState([]), p = Object.keys((e == null ? void 0 : e[0]) || {}), [b, w] = L.useState(s.columnName), [f, y] = L.useState(s.conditions), [m, g] = L.useState(s.name), [E, N] = L.useState(s.addCommas), k = L.useMemo(() => p.reduce((C, D) => (C[D] = J.uniq(e.map((H) => H[D])), C), {}), [p]), P = () => {
    N(!E);
  }, v = (C) => {
    w(C), y([]);
  }, B = (C, D) => {
    const { columnName: H, isOrIsNotEqualTo: ce, value: A } = C, I = J.cloneDeep(f);
    I[D] = {
      columnName: H,
      isOrIsNotEqualTo: ce,
      value: A
    }, y(I);
  }, $ = (C) => {
    const D = J.cloneDeep(f);
    D.splice(C, 1), y(D);
  }, G = () => {
    y([
      ...f,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [C, D] = d, H = [...C];
    H[f.length + 1] = !0, D(H);
  }, le = () => {
    const C = f.filter(
      (H) => H.columnName !== "" && H.value !== ""
    ), D = {
      columnName: b,
      conditions: C,
      name: m,
      tag: `{{${m}}}`,
      addCommas: E
    };
    r(D, o), u(o, !1);
  }, ee = m === "", X = ee || b === "";
  return /* @__PURE__ */ h(he, { children: c ? /* @__PURE__ */ R("fieldset", { className: "edit-block mb-1", children: [
    /* @__PURE__ */ R("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ h("button", { onClick: le, disabled: X, children: /* @__PURE__ */ h(oe, { display: "caretUp" }) }),
      /* @__PURE__ */ h(
        "button",
        {
          className: "btn btn-danger btn-sm mt-0 ms-2",
          onClick: (C) => {
            C.preventDefault(), n(o);
          },
          children: "Delete"
        }
      )
    ] }),
    /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ h("span", { className: "edit-label column-heading", children: "Variable Name:" }),
      /* @__PURE__ */ h(
        "input",
        {
          className: `variable-${o} ms-1`,
          type: "text",
          value: m,
          onChange: (C) => g(C.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "pt-2", children: /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ h("span", { className: "edit-label column-heading", children: "Column:" }),
      /* @__PURE__ */ R(
        "select",
        {
          className: `variable-${o} ms-1`,
          onChange: (C) => v(C.target.value),
          value: b,
          disabled: ee,
          children: [
            /* @__PURE__ */ h("option", { value: "", children: "Select" }),
            p.map((C) => /* @__PURE__ */ h("option", { value: C, children: C }, C))
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ h("div", { className: "pt-2", children: /* @__PURE__ */ h(
      xt,
      {
        value: E,
        label: "Add Commas to Number",
        updateField: P,
        tooltip: /* @__PURE__ */ R(Z, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ h(Z.Target, { children: /* @__PURE__ */ h(
            oe,
            {
              display: "question",
              style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
            }
          ) }),
          /* @__PURE__ */ h(Z.Content, { children: /* @__PURE__ */ h("p", { children: "Selecting this option will add commas to the numeric value." }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ R("label", { className: "d-block py-2", children: [
      /* @__PURE__ */ h("span", { className: "edit-label column-heading", children: "Conditions:" }),
      f.map((C, D) => /* @__PURE__ */ h("div", { className: "condition-section mt-2", children: /* @__PURE__ */ h(
        ds,
        {
          conditionControls: d,
          conditionLookup: k,
          conditionSettings: C,
          conditionIndex: D,
          removeCondition: $,
          selectedColumn: b,
          updateConditionsList: B
        },
        m + "-condition-" + D
      ) }))
    ] }),
    /* @__PURE__ */ R("div", { className: "mt-1", children: [
      /* @__PURE__ */ h("button", { onClick: G, disabled: X, children: "Add Condition" }),
      /* @__PURE__ */ h("button", { className: "ms-2", onClick: le, disabled: X, children: "Done" })
    ] })
  ] }, o) : /* @__PURE__ */ h(he, { children: /* @__PURE__ */ R("div", { className: "mb-2", children: [
    /* @__PURE__ */ h("button", { onClick: () => u(o, !0), children: /* @__PURE__ */ h(oe, { display: "caretDown" }) }),
    /* @__PURE__ */ R("span", { children: [
      " ",
      m ? `${m}` : "New Variable"
    ] })
  ] }) }) });
}, hs = [
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
], ps = () => {
  const { config: t, data: e, isDashboard: n, loading: r, setParentConfig: s, updateConfig: o } = L.useContext(on), { contentEditor: i, theme: a, visual: c } = t, { inlineHTML: u, markupVariables: d, srcUrl: p, title: b, useInlineHTML: w, allowHideSection: f } = i, [y, m] = L.useState(!0), g = un(t, o, !0), E = (e == null ? void 0 : e[0]) !== void 0, N = L.useState([]);
  L.useEffect(() => {
    if (s) {
      const A = P();
      s(A);
    }
  }, [t]), L.useEffect(() => {
    const A = { ...t };
    delete A.newViz, o(A);
  }, []);
  const k = () => {
    m(!y), o({
      ...t,
      showEditorPanel: !y
    });
  }, P = () => {
    const A = JSON.parse(JSON.stringify(t));
    return delete A.newViz, delete A.runtime, A;
  }, [v, B] = L.useState([...d]), [$, G] = L.useState(!1), le = L.useRef(null), [ee, X] = N, C = () => {
    const A = [...J.cloneDeep(v)], I = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    X({ ...ee, [v.length + 1]: !0 }), A.push(I), B(A), G(!$);
  }, D = (A, I) => {
    const te = J.cloneDeep(v);
    te[I] = A, B(te), g("contentEditor", null, "markupVariables", te);
  }, H = (A) => {
    const I = J.cloneDeep(v);
    I.splice(A, 1), B(I), g("contentEditor", null, "markupVariables", I);
    const te = J.cloneDeep(ee);
    delete te[A], X(te);
  }, ce = /* @__PURE__ */ R(Re, { children: [
    /* @__PURE__ */ h(Re.Section, { title: "General", children: /* @__PURE__ */ h(
      Me,
      {
        value: b || "",
        section: "contentEditor",
        fieldName: "title",
        label: "Title",
        placeholder: "Markup Include Title",
        updateField: g
      }
    ) }),
    /* @__PURE__ */ R(Re.Section, { title: "Content Editor", children: [
      /* @__PURE__ */ h("span", { className: "divider-heading", children: "Enter Markup" }),
      /* @__PURE__ */ h(
        de,
        {
          inline: !0,
          value: w,
          section: "contentEditor",
          fieldName: "useInlineHTML",
          label: "Use Inline HTML ",
          updateField: g
        }
      ),
      /* @__PURE__ */ h("div", { className: "column-edit", children: w ? /* @__PURE__ */ R(he, { children: [
        /* @__PURE__ */ R("div", { ref: le, children: [
          /* @__PURE__ */ h(
            Me,
            {
              value: u,
              section: "contentEditor",
              fieldName: "inlineHTML",
              label: "HTML",
              placeholder: "Add HTML here",
              type: "textarea",
              rows: 10,
              updateField: g
            }
          ),
          /* @__PURE__ */ h("hr", { className: "accordion__divider" })
        ] }),
        /* @__PURE__ */ R("fieldset", { children: [
          /* @__PURE__ */ h("label", { children: /* @__PURE__ */ R("span", { className: "edit-label", children: [
            "Variables",
            /* @__PURE__ */ R(Z, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ h(Z.Target, { children: /* @__PURE__ */ h(oe, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ h(Z.Content, { children: "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML" })
            ] })
          ] }) }),
          E === !1 && /* @__PURE__ */ h("span", { className: "need-data-source-prompt", children: "To use variables, add data source." }),
          v && v.length > 0 && /* @__PURE__ */ h("div", { className: "section-border", children: v == null ? void 0 : v.map((A, I) => /* @__PURE__ */ h(
            fs,
            {
              controls: N,
              data: e,
              deleteVariable: H,
              updateVariableArray: D,
              variableConfig: A,
              variableIndex: I
            },
            `${A.name}-${I}`
          )) }),
          /* @__PURE__ */ h("div", { className: "pt-2", children: /* @__PURE__ */ h(
            xt,
            {
              value: f,
              section: "contentEditor",
              fieldName: "allowHideSection",
              label: "Hide Section on Null",
              updateField: g,
              tooltip: /* @__PURE__ */ R(Z, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ h(Z.Target, { children: /* @__PURE__ */ h(
                  oe,
                  {
                    display: "question",
                    style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                  }
                ) }),
                /* @__PURE__ */ h(Z.Content, { children: /* @__PURE__ */ h("p", { children: "Hide this entire Markup Include section if any variable is null or blank." }) })
              ] })
            }
          ) }),
          /* @__PURE__ */ h("div", { className: "mb-1 d-flex", children: /* @__PURE__ */ h(
            "button",
            {
              className: "btn btn-primary",
              onClick: C,
              disabled: !E,
              children: "Create New Variable"
            }
          ) })
        ] })
      ] }) : /* @__PURE__ */ h(
        Me,
        {
          value: p || "",
          section: "contentEditor",
          fieldName: "srcUrl",
          label: "Source URL;",
          placeholder: "https://www.example.com/file.html",
          updateField: g
        }
      ) })
    ] }),
    /* @__PURE__ */ R(Re.Section, { title: "Visual", children: [
      /* @__PURE__ */ R("div", { className: "input-group", children: [
        /* @__PURE__ */ h("label", { children: "Theme" }),
        /* @__PURE__ */ h("ul", { className: "color-palette", children: hs.map((A) => /* @__PURE__ */ h(
          "li",
          {
            title: A,
            onClick: () => {
              o({ ...t, theme: A });
            },
            className: a === A ? "selected " + A : A
          },
          A
        )) })
      ] }),
      /* @__PURE__ */ R("div", { className: "cove-accordion__panel-section checkbox-group", children: [
        /* @__PURE__ */ h(
          de,
          {
            value: c.border,
            section: "visual",
            fieldName: "border",
            label: "Display Border ",
            updateField: g
          }
        ),
        /* @__PURE__ */ h(
          de,
          {
            value: c.borderColorTheme,
            section: "visual",
            fieldName: "borderColorTheme",
            label: "Use Border Color Theme ",
            updateField: g
          }
        ),
        /* @__PURE__ */ h(
          de,
          {
            value: c.accent,
            section: "visual",
            fieldName: "accent",
            label: "Use Accent Style ",
            updateField: g
          }
        ),
        /* @__PURE__ */ h(
          de,
          {
            value: c.background,
            section: "visual",
            fieldName: "background",
            label: "Use Theme Background Color ",
            updateField: g
          }
        ),
        /* @__PURE__ */ h(
          de,
          {
            value: c.hideBackgroundColor,
            section: "visual",
            fieldName: "hideBackgroundColor",
            label: "Hide Background Color ",
            updateField: g
          }
        )
      ] })
    ] })
  ] });
  return r && !(t != null && t.showEditorPanel) ? null : /* @__PURE__ */ h(_t, { component: "EditorPanel", children: /* @__PURE__ */ h(
    $e.Sidebar,
    {
      displayPanel: y,
      isDashboard: n,
      title: "Configure Markup Include",
      onBackClick: k,
      children: ce
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
}, ms = (t, e) => {
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
const _s = ({
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
  }, [i, a] = L.useReducer(ms, o), { config: c, loading: u, urlMarkup: d, markupError: p, errorMessage: b, coveLoadedHasRan: w } = i, f = L.useRef(), { innerContainerClasses: y, contentClasses: m } = ln(c || {}), { contentEditor: g, theme: E } = c || {}, N = e == null ? void 0 : e.data, { inlineHTML: k, markupVariables: P, srcUrl: v, title: B, useInlineHTML: $ } = g || {}, G = (S) => {
    Object.keys(vt).forEach((x) => {
      S[x] && typeof S[x] == "object" && !Array.isArray(S[x]) && (S[x] = { ...vt[x], ...S[x] });
    }), S.runtime = {}, S.runtime.uniqueId = Date.now(), S.runtime.editorErrorMessage = "", a({ type: "SET_CONFIG", payload: S });
  }, le = L.useCallback(async () => {
    let S = e || await (await fetch(t)).json(), x = S.data ?? {};
    S.dataUrl && (x = await (await fetch(S.dataUrl)).json()), S.data = x;
    const z = { ...cn(S) };
    G({ ...e, ...z }), a({ type: "SET_LOADING", payload: !1 });
  }, []);
  L.useEffect(() => {
    if (p) {
      let S = p, x = "There was a problem retrieving the content from " + v + ". ", z = /https?:\/\//g;
      S === 404 && !v.match(z) && (S = "proto"), x += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[S], a({ type: "SET_ERROR_MESSAGE", payload: x });
    } else
      a({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [p]);
  const ee = L.useCallback(async () => {
    if (a({ type: "SET_MARKUP_ERROR", payload: null }), v)
      if (v === "#example")
        a({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await us.get(v).then((S) => {
            S.data && a({ type: "SET_URL_MARKUP", payload: S.data });
          });
        } catch (S) {
          S.response ? a({ type: "SET_MARKUP_ERROR", payload: S.response.status }) : S.request && a({ type: "SET_MARKUP_ERROR", payload: 200 }), a({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      a({ type: "SET_URL_MARKUP", payload: "" });
  }, [v]), X = (S, x) => {
    const { columnName: z, isOrIsNotEqualTo: ue, value: Y } = x[0], Se = ue === "is" ? S == null ? void 0 : S.filter((W) => W[z] === Y) : S == null ? void 0 : S.filter((W) => W[z] !== Y);
    return x.shift(), x.length === 0 ? Se : X(Se, x);
  }, C = [], D = (S) => {
    if (J.isEmpty(P))
      return S;
    const x = /{{(.*?)}}/g;
    return S.replace(x, (ue) => {
      if (C.length > 0)
        return;
      const Y = P.filter((be) => be.tag === ue)[0];
      if (Y === void 0)
        return [ue];
      const Se = Y && Y.conditions.length === 0 ? N : X(N, [...Y.conditions]), W = J.uniq(
        (Se || []).map((be) => {
          const Ie = be[Y.columnName];
          return Y.addCommas && !isNaN(parseFloat(Ie)) ? parseFloat(Ie).toLocaleString("en-US", { useGrouping: !0 }) : Ie;
        })
      ), lt = [], ct = r ? "or" : "and", Te = W.length;
      if (Te === 2) {
        const be = W.join(` ${ct} `);
        W.splice(0, 2, be);
      }
      Te > 2 && (W[Te - 1] = `${ct} ${W[Te - 1]}`), lt.push(W.join(", "));
      const ut = lt[0];
      return ut === "" && g.allowHideSection && C.push(!0), ut;
    });
  }, H = (S) => {
    let x, z = !1;
    return S && S !== "" && S !== null && (S.toString().match(/<body[^>]*>/i) && S.toString().match(/<\/body\s*>/i) ? (z = !0, x = S.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : x = S.toString()), z ? x[1] : x;
  };
  L.useEffect(() => {
    le().catch((S) => console.log(S)), dt("cove_loaded", { loadConfigHasRun: !0 });
  }, []), L.useEffect(() => {
    c && !w && f && (dt("cove_loaded", { config: c }), a({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [c, f]), L.useEffect(() => {
    ee().catch((S) => console.log(S));
  }, [ee]);
  let ce = /* @__PURE__ */ h(dn, {});
  const A = $ ? D(k) : H(d), I = (g == null ? void 0 : g.allowHideSection) && C.length > 0 && !r;
  u === !1 && (ce = /* @__PURE__ */ R(he, { children: [
    r && /* @__PURE__ */ h(ps, {}),
    !I && /* @__PURE__ */ h($e.Responsive, { isEditor: r, children: /* @__PURE__ */ h("div", { className: "markup-include-content-container cove-component__content no-borders", children: /* @__PURE__ */ R("div", { className: `markup-include-component ${m.join(" ")}`, children: [
      /* @__PURE__ */ h(fn, { title: B, isDashboard: n, classes: [`${E}`, "mb-0"] }),
      /* @__PURE__ */ h("div", { className: `${y.join(" ")}`, children: /* @__PURE__ */ R("div", { className: "cove-component__content-wrap", children: [
        !p && /* @__PURE__ */ h(xn, { allowElements: !!d, content: A }),
        p && v && /* @__PURE__ */ h("div", { className: "warning", children: b })
      ] }) })
    ] }) }) })
  ] }));
  const te = () => /* @__PURE__ */ h("section", { className: "waiting", children: /* @__PURE__ */ R("section", { className: "waiting-container", children: [
    /* @__PURE__ */ h("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ h("p", { children: c == null ? void 0 : c.runtime.editorErrorMessage })
  ] }) });
  return /* @__PURE__ */ h(_t, { component: "CdcMarkupInclude", children: /* @__PURE__ */ R(on.Provider, { value: { config: c, updateConfig: G, loading: u, data: N, setParentConfig: s, isDashboard: n }, children: [
    !(c != null && c.newViz) && (c == null ? void 0 : c.runtime) && (c == null ? void 0 : c.runtime.editorErrorMessage) && /* @__PURE__ */ h(te, {}),
    /* @__PURE__ */ h($e.VisualizationWrapper, { config: c, isEditor: r, showEditorPanel: c == null ? void 0 : c.showEditorPanel, children: ce })
  ] }) });
};
export {
  _s as C,
  us as a
};
