import { R as g, r as k } from "./storybook-index-45401197.es.js";
import { _ as W } from "./storybook-lodash-a4231e1c.es.js";
import { g as rn } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { L as Ve, u as sn, c as on, p as lt } from "./storybook-coveUpdateWorker-e42c85d9.es.js";
import { u as an } from "./storybook-updateFieldFactory-c006040a.es.js";
import { I as Ue, a as ce } from "./storybook-editor-390d9f4b.es.js";
import { E as At, L as ln } from "./storybook-viewports-5c5d7af1.es.js";
import { a as re } from "./storybook-Icon-d8cd8abc.es.js";
import { T as Q } from "./storybook-Tooltip-8bb9dfa2.es.js";
import { A as we } from "./storybook-Accordion-aed5218d.es.js";
import { C as Ot } from "./storybook-Inputs-0111192f.es.js";
import { T as cn } from "./storybook-index-3b47b3f7.es.js";
const A = 1, vt = 2, _t = 4, F = 8, je = 16, Re = 32, J = 64, qe = {
  a: {
    content: A | F,
    self: !1,
    type: A | F | Re | J
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
    content: A | vt | _t | F | je | Re | J
  },
  button: {
    content: F,
    type: A | F | Re | J
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
    type: A | Re | J
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
  return r ? /* @__PURE__ */ g.createElement(o, Ce({
    className: e
  }, t)) : /* @__PURE__ */ g.createElement(o, Ce({
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
const ut = 1, Rn = 3, Sn = /^<(!doctype|(html|head|body)(\s|>))/i, Tn = /^(aria-|data-|\w+:)/iu, Nn = /{{{(\w+)\/?}}}/;
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
    return this.matchers.forEach((c) => {
      const u = c.asTag().toLowerCase(), d = this.getTagConfig(u);
      if (s[c.inverseName] || !this.isTagAllowed(u) || !this.canRenderChild(n, d))
        return;
      let p = "";
      for (; o && (i = c.match(o)); ) {
        const {
          index: h,
          length: w,
          match: f,
          valid: E,
          void: m,
          ...b
        } = i, y = c.propName + String(a);
        h > 0 && (p += o.slice(0, h)), E ? (p += m ? `{{{${y}/}}}` : `{{{${y}}}}${f}{{{/${y}}}}`, this.keyIndex += 1, a += 1, r[y] = {
          children: f,
          matcher: c,
          props: {
            ...s,
            ...b,
            key: this.keyIndex
          }
        }) : p += f, c.greedy ? (o = p + o.slice(h + w), p = "") : o = o.slice(h + (w || f.length));
      }
      c.greedy || (o = p + o);
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
    if (e.match(Sn)) {
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
      } = o, c = a.toLowerCase(), u = ct[c] || ct[a];
      if (!this.isSafe(e) || !c.match(Tn) && (!n && (!u || u === fn) || c.startsWith("on") || i.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let d = c === "style" ? this.extractStyleAttribute(e) : i;
      u === ue ? d = !0 : u === he ? d = Number.parseFloat(String(d)) : u !== kt && (d = String(d)), r[pn[c] || c] = this.applyAttributeFilters(c, d), s += 1;
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
    let c = [], u = "";
    return [...e.childNodes].forEach((d) => {
      if (d.nodeType === ut) {
        const h = d.nodeName.toLowerCase(), w = this.getTagConfig(h);
        u && (c.push(u), u = "");
        const f = this.applyNodeFilters(h, d);
        if (!f)
          return;
        let E;
        if (a && !(i && !this.isTagAllowed(h))) {
          this.keyIndex += 1;
          const m = this.keyIndex;
          E = this.parseNode(f, w);
          const b = a(f, E, w);
          if (b === null)
            return;
          if (typeof b < "u") {
            c.push(/* @__PURE__ */ g.cloneElement(b, {
              key: m
            }));
            return;
          }
          this.keyIndex = m - 1;
        }
        if (this.banned.has(h))
          return;
        if (!(r || s && h !== "br") && this.isTagAllowed(h) && (o || this.canRenderChild(n, w))) {
          var p;
          this.keyIndex += 1;
          const m = this.extractAttributes(f), b = {
            tagName: h
          };
          m && (b.attributes = m), w.void && (b.selfClose = w.void), c.push(/* @__PURE__ */ g.createElement(Lt, {
            ...b,
            key: this.keyIndex
          }, (p = E) !== null && p !== void 0 ? p : this.parseNode(f, w)));
        } else
          c = [...c, ...this.parseNode(f, w.tagName ? w : n)];
      } else if (d.nodeType === Rn) {
        const h = r && !s ? d.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(d.textContent || "", n)
        );
        Array.isArray(h) ? c = [...c, ...h] : u += h;
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
    for (; o = s.match(Nn); ) {
      const [a, i] = o, c = o.index, u = a.includes("/");
      if (process.env.NODE_ENV !== "production" && !n[i])
        throw new Error(`Token "${i}" found but no matching element to replace with.`);
      c > 0 && (r.push(s.slice(0, c)), s = s.slice(c));
      const {
        children: d,
        matcher: p,
        props: h
      } = n[i];
      let w;
      if (u)
        w = a.length, r.push(p.createElement(d, h));
      else {
        const f = s.match(new RegExp(`{{{/${i}}}}`));
        if (process.env.NODE_ENV !== "production" && !f)
          throw new Error(`Closing token missing for interpolated element "${i}".`);
        w = f.index + f[0].length, r.push(p.createElement(this.replaceTokens(s.slice(a.length, f.index), n), h));
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
    tagName: c,
    noWrap: u
  } = t, d = (e = s ?? c) !== null && e !== void 0 ? e : "span", p = d === "fragment" ? !0 : u;
  let h;
  if (i)
    h = i;
  else {
    const w = new An(o ?? "", t).parse();
    w.length > 0 && (h = w);
  }
  return h || (h = a), p ? /* @__PURE__ */ g.createElement(g.Fragment, null, h) : /* @__PURE__ */ g.createElement(Lt, {
    attributes: n,
    className: r,
    tagName: d
  }, h);
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
const Ln = ke("string"), H = ke("function"), Dt = ke("number"), Le = (t) => t !== null && typeof t == "object", xn = (t) => t === !0 || t === !1, Se = (t) => {
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
    Se(e[o]) && Se(r) ? e[o] = ze(e[o], r) : Se(r) ? e[o] = ze({}, r) : de(r) ? e[o] = r.slice() : e[o] = r;
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
          const c = n(a, s + 1);
          !Ee(c) && (o[i] = c);
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
), fr = typeof queueMicrotask < "u" ? queueMicrotask.bind(ne) : typeof process < "u" && process.nextTick || Mt, l = {
  isArray: de,
  isArrayBuffer: Pt,
  isBuffer: _n,
  isFormData: In,
  isArrayBufferView: kn,
  isString: Ln,
  isNumber: Dt,
  isBoolean: xn,
  isObject: Le,
  isPlainObject: Se,
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
const Ht = S.prototype, Vt = {};
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
Object.defineProperties(S, Vt);
Object.defineProperty(Ht, "isAxiosError", { value: !0 });
S.from = (t, e, n, r, s, o) => {
  const a = Object.create(Ht);
  return l.toFlatObject(t, a, function(c) {
    return c !== Error.prototype;
  }, (i) => i !== "isAxiosError"), S.call(a, t.message, e, n, r, s), a.cause = t, a.name = t.name, o && Object.assign(a, o), a;
};
const pr = null;
function We(t) {
  return l.isPlainObject(t) || l.isArray(t);
}
function jt(t) {
  return l.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function pt(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = jt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function mr(t) {
  return l.isArray(t) && !t.some(We);
}
const hr = l.toFlatObject(l, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function xe(t, e, n) {
  if (!l.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, m) {
    return !l.isUndefined(m[E]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(e);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null)
      return "";
    if (l.isDate(f))
      return f.toISOString();
    if (!c && l.isBlob(f))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(f) || l.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, E, m) {
    let b = f;
    if (f && !m && typeof f == "object") {
      if (l.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), f = JSON.stringify(f);
      else if (l.isArray(f) && mr(f) || (l.isFileList(f) || l.endsWith(E, "[]")) && (b = l.toArray(f)))
        return E = jt(E), b.forEach(function(T, L) {
          !(l.isUndefined(T) || T === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? pt([E], L, o) : a === null ? E : E + "[]",
            u(T)
          );
        }), !1;
    }
    return We(f) ? !0 : (e.append(pt(m, E, o), u(f)), !1);
  }
  const p = [], h = Object.assign(hr, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: We
  });
  function w(f, E) {
    if (!l.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      p.push(f), l.forEach(f, function(b, y) {
        (!(l.isUndefined(b) || b === null) && s.call(
          e,
          b,
          l.isString(y) ? y.trim() : y,
          E,
          h
        )) === !0 && w(b, E ? E.concat(y) : [y]);
      }), p.pop();
    }
  }
  if (!l.isObject(t))
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
  if (s ? o = s(e, n) : o = l.isURLSearchParams(e) ? e.toString() : new Ze(e, n).toString(r), o) {
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
    l.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const ht = yr, zt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, br = typeof URLSearchParams < "u" ? URLSearchParams : Ze, gr = typeof FormData < "u" ? FormData : null, wr = typeof Blob < "u" ? Blob : null, Rr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: br,
    FormData: gr,
    Blob: wr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, et = typeof window < "u" && typeof document < "u", Je = typeof navigator == "object" && navigator || void 0, Sr = et && (!Je || ["ReactNative", "NativeScript", "NS"].indexOf(Je.product) < 0), Tr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Nr = et && window.location.href || "http://localhost", Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: et,
  hasStandardBrowserEnv: Sr,
  hasStandardBrowserWebWorkerEnv: Tr,
  navigator: Je,
  origin: Nr
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...Cr,
  ...Rr
};
function Ar(t, e) {
  return xe(t, new I.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return I.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Or(t) {
  return l.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
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
    const i = Number.isFinite(+a), c = o >= n.length;
    return a = !a && l.isArray(s) ? s.length : a, c ? (l.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !i) : ((!s[a] || !l.isObject(s[a])) && (s[a] = []), e(n, r, s[a], o) && l.isArray(s[a]) && (s[a] = vr(s[a])), !i);
  }
  if (l.isFormData(t) && l.isFunction(t.entries)) {
    const n = {};
    return l.forEachEntry(t, (r, s) => {
      e(Or(r), s, n, 0);
    }), n;
  }
  return null;
}
function _r(t, e, n) {
  if (l.isString(t))
    try {
      return (e || JSON.parse)(t), l.trim(t);
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
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(e);
    if (o && l.isHTMLForm(e) && (e = new FormData(e)), l.isFormData(e))
      return s ? JSON.stringify(Wt(e)) : e;
    if (l.isArrayBuffer(e) || l.isBuffer(e) || l.isStream(e) || l.isFile(e) || l.isBlob(e) || l.isReadableStream(e))
      return e;
    if (l.isArrayBufferView(e))
      return e.buffer;
    if (l.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ar(e, this.formSerializer).toString();
      if ((i = l.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return xe(
          i ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), _r(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || tt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  tt.headers[t] = {};
});
const nt = tt, kr = l.toObjectSet([
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
function Te(t) {
  return t === !1 || t == null ? t : l.isArray(t) ? t.map(Te) : String(t);
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
  if (l.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!l.isString(e)) {
    if (l.isString(r))
      return e.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(e);
  }
}
function Dr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Fr(t, e) {
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
class Pe {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(i, c, u) {
      const d = me(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(s, d);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || c] = Te(i));
    }
    const a = (i, c) => l.forEach(i, (u, d) => o(u, d, c));
    if (l.isPlainObject(e) || e instanceof this.constructor)
      a(e, n);
    else if (l.isString(e) && (e = e.trim()) && !Pr(e))
      a(Lr(e), n);
    else if (l.isHeaders(e))
      for (const [i, c] of e.entries())
        o(c, i, r);
    else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = me(e), e) {
      const r = l.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return xr(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = me(e), e) {
      const r = l.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Ie(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = me(a), a) {
        const i = l.findKey(r, a);
        i && (!n || Ie(r, r[i], i, n)) && (delete r[i], s = !0);
      }
    }
    return l.isArray(e) ? e.forEach(o) : o(e), s;
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
    return l.forEach(this, (s, o) => {
      const a = l.findKey(r, o);
      if (a) {
        n[a] = Te(s), delete n[o];
        return;
      }
      const i = e ? Dr(o) : String(o).trim();
      i !== o && delete n[o], n[i] = Te(s), r[i] = !0;
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
    const r = (this[Et] = this[Et] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = me(a);
      r[i] || (Fr(s, a), r[i] = !0);
    }
    return l.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(Pe.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(Pe);
const V = Pe;
function Me(t, e) {
  const n = this || nt, r = e || n, s = V.from(r.headers);
  let o = r.data;
  return l.forEach(t, function(i) {
    o = i.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Jt(t) {
  return !!(t && t.__CANCEL__);
}
function fe(t, e, n) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, e, n), this.name = "CanceledError";
}
l.inherits(fe, S, {
  __CANCEL__: !0
});
function Kt(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
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
  return e = e !== void 0 ? e : 1e3, function(c) {
    const u = Date.now(), d = r[o];
    a || (a = u), n[s] = c, r[s] = u;
    let p = o, h = 0;
    for (; p !== s; )
      h += n[p++], p = p % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), u - a < e)
      return;
    const w = d && u - d;
    return w ? Math.round(h * 1e3 / w) : void 0;
  };
}
function Ir(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const a = (u, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), t.apply(null, u);
  };
  return [(...u) => {
    const d = Date.now(), p = d - n;
    p >= r ? a(u, d) : (s = u, o || (o = setTimeout(() => {
      o = null, a(s);
    }, r - p)));
  }, () => s && a(s)];
}
const Ae = (t, e, n = 3) => {
  let r = 0;
  const s = Br(50, 250);
  return Ir((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, c = a - r, u = s(c), d = a <= i;
    r = a;
    const p = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && i && d ? (i - a) / u : void 0,
      event: o,
      lengthComputable: i != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, n);
}, yt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, bt = (t) => (...e) => l.asap(() => t(...e)), Mr = I.hasStandardBrowserEnv ? (
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
), Hr = I.hasStandardBrowserEnv ? (
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
  function a(u, d) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, d);
  }
  function i(u, d, p) {
    if (p in e)
      return r(u, d);
    if (p in t)
      return r(void 0, u);
  }
  const c = {
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
    headers: (u, d) => s(gt(u), gt(d), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, t, e)), function(d) {
    const p = c[d] || s, h = p(t[d], e[d], d);
    l.isUndefined(h) && p !== i || (n[d] = h);
  }), n;
}
const Xt = (t) => {
  const e = se({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: i } = e;
  e.headers = a = V.from(a), e.url = $t(Gt(e.baseURL, e.url), t.params, t.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let c;
  if (l.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [u, ...d] = c ? c.split(";").map((p) => p.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(e)), r || r !== !1 && Mr(e.url))) {
    const u = s && o && Hr.read(o);
    u && a.set(s, u);
  }
  return e;
}, qr = typeof XMLHttpRequest < "u", $r = qr && function(t) {
  return new Promise(function(n, r) {
    const s = Xt(t);
    let o = s.data;
    const a = V.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: c, onDownloadProgress: u } = s, d, p, h, w, f;
    function E() {
      w && w(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function b() {
      if (!m)
        return;
      const T = V.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), x = {
        data: !i || i === "text" || i === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: T,
        config: t,
        request: m
      };
      Kt(function(U) {
        n(U), E();
      }, function(U) {
        r(U), E();
      }, x), m = null;
    }
    "onloadend" in m ? m.onloadend = b : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, m.onabort = function() {
      m && (r(new S("Request aborted", S.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, t, m)), m = null;
    }, m.ontimeout = function() {
      let L = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || zt;
      s.timeoutErrorMessage && (L = s.timeoutErrorMessage), r(new S(
        L,
        x.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        t,
        m
      )), m = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in m && l.forEach(a.toJSON(), function(L, x) {
      m.setRequestHeader(x, L);
    }), l.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), i && i !== "json" && (m.responseType = s.responseType), u && ([h, f] = Ae(u, !0), m.addEventListener("progress", h)), c && m.upload && ([p, w] = Ae(c), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (d = (T) => {
      m && (r(!T || T.type ? new fe(null, t, m) : T), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const y = Ur(s.url);
    if (y && I.protocols.indexOf(y) === -1) {
      r(new S("Unsupported protocol " + y + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(o || null);
  });
}, zr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, i();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof S ? d : new fe(d instanceof Error ? d.message : d));
      }
    };
    let a = e && setTimeout(() => {
      a = null, o(new S(`timeout ${e} of ms exceeded`, S.ETIMEDOUT));
    }, e);
    const i = () => {
      t && (a && clearTimeout(a), a = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => l.asap(i), c;
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
  let o = 0, a, i = (c) => {
    a || (a = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: d } = await s.next();
        if (u) {
          i(), c.close();
          return;
        }
        let p = d.byteLength;
        if (n) {
          let h = o += p;
          n(h);
        }
        c.enqueue(new Uint8Array(d));
      } catch (u) {
        throw i(u), u;
      }
    },
    cancel(c) {
      return i(c), s.return();
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
}), Rt = 64 * 1024, Ke = Yt && Qt(() => l.isReadableStream(new Response("").body)), Oe = {
  stream: Ke && ((t) => t.body)
};
De && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Oe[e] && (Oe[e] = l.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new S(`Response type '${e}' is not supported`, S.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Qr = async (t) => {
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
    return (await Xr(t)).byteLength;
}, Zr = async (t, e) => {
  const n = l.toFiniteNumber(t.getContentLength());
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
    onUploadProgress: c,
    responseType: u,
    headers: d,
    withCredentials: p = "same-origin",
    fetchOptions: h
  } = Xt(t);
  u = u ? (u + "").toLowerCase() : "text";
  let w = Wr([s, o && o.toAbortSignal()], a), f;
  const E = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let m;
  try {
    if (c && Yr && n !== "get" && n !== "head" && (m = await Zr(d, r)) !== 0) {
      let x = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (l.isFormData(r) && (O = x.headers.get("content-type")) && d.setContentType(O), x.body) {
        const [U, q] = yt(
          m,
          Ae(bt(c))
        );
        r = wt(x.body, Rt, U, q);
      }
    }
    l.isString(p) || (p = p ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    f = new Request(e, {
      ...h,
      signal: w,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? p : void 0
    });
    let y = await fetch(f);
    const T = Ke && (u === "stream" || u === "response");
    if (Ke && (i || T && E)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((K) => {
        x[K] = y[K];
      });
      const O = l.toFiniteNumber(y.headers.get("content-length")), [U, q] = i && yt(
        O,
        Ae(bt(i), !0)
      ) || [];
      y = new Response(
        wt(y.body, Rt, U, () => {
          q && q(), E && E();
        }),
        x
      );
    }
    u = u || "text";
    let L = await Oe[l.findKey(Oe, u) || "text"](y, t);
    return !T && E && E(), await new Promise((x, O) => {
      Kt(x, O, {
        data: L,
        headers: V.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: t,
        request: f
      });
    });
  } catch (b) {
    throw E && E(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, t, f),
      {
        cause: b.cause || b
      }
    ) : S.from(b, b && b.code, t, f);
  }
}), Ge = {
  http: pr,
  xhr: $r,
  fetch: es
};
l.forEach(Ge, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const St = (t) => `- ${t}`, ts = (t) => l.isFunction(t) || t === null || t === !1, Zt = {
  getAdapter: (t) => {
    t = l.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let a;
      if (r = n, !ts(n) && (r = Ge[(a = String(n)).toLowerCase()], r === void 0))
        throw new S(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([i, c]) => `adapter ${i} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = e ? o.length > 1 ? `since :
` + o.map(St).join(`
`) : " " + St(o[0]) : "as no adapter specified";
      throw new S(
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
function Tt(t) {
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
      throw new S(
        s(a, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
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
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = e[o];
    if (a) {
      const i = t[o], c = i === void 0 || a(i, o, t);
      if (c !== !0)
        throw new S("option " + o + " must be " + c, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
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
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Xe.assertOptions(s, {
      encode: te.function,
      serialize: te.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && l.merge(
      o.common,
      o[n.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = V.concat(a, o);
    const i = [];
    let c = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (c = c && E.synchronous, i.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(E) {
      u.push(E.fulfilled, E.rejected);
    });
    let d, p = 0, h;
    if (!c) {
      const f = [Tt.bind(this), void 0];
      for (f.unshift.apply(f, i), f.push.apply(f, u), h = f.length, d = Promise.resolve(n); p < h; )
        d = d.then(f[p++], f[p++]);
      return d;
    }
    h = i.length;
    let w = n;
    for (p = 0; p < h; ) {
      const f = i[p++], E = i[p++];
      try {
        w = f(w);
      } catch (m) {
        E.call(this, m);
        break;
      }
    }
    try {
      d = Tt.call(this, w);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, h = u.length; p < h; )
      d = d.then(u[p++], u[p++]);
    return d;
  }
  getUri(e) {
    e = se(this.defaults, e);
    const n = Gt(e.baseURL, e.url);
    return $t(n, e.params, e.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(e) {
  ve.prototype[e] = function(n, r) {
    return this.request(se(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(e) {
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
  return l.isObject(t) && t.isAxiosError === !0;
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
  return l.extend(n, Ne.prototype, e, { allOwnKeys: !0 }), l.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
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
D.AxiosError = S;
D.Cancel = D.CanceledError;
D.all = function(e) {
  return Promise.all(e);
};
D.spread = ss;
D.isAxiosError = os;
D.mergeConfig = se;
D.AxiosHeaders = V;
D.formToJSON = (t) => Wt(l.isHTMLForm(t) ? new FormData(t) : t);
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
  var b;
  const [i, c] = t, u = i[r], d = (y, T) => {
    const L = [...i];
    L[y] = T, c(L);
  }, h = Object.keys(e).filter((y) => y !== o), { columnName: w, isOrIsNotEqualTo: f, value: E } = n, m = (y, T) => {
    const L = W.cloneDeep(n);
    T === "columnName" && (L.value = ""), L[T] = y, a(L, r);
  };
  return u ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        const y = [...i];
        y[r] = !1, c(y);
      }
    },
    /* @__PURE__ */ React.createElement(re, { display: "caretDown" })
  ), /* @__PURE__ */ React.createElement("button", { className: "btn btn-warn btn-sm mt-0 ms-2", onClick: () => s(r) }, "Remove")), /* @__PURE__ */ React.createElement("div", { id: `condition_${r}` }, /* @__PURE__ */ React.createElement("label", { className: "d-block" }, /* @__PURE__ */ React.createElement("span", null, "Condition : "), /* @__PURE__ */ React.createElement("div", { className: "pt-1" }, /* @__PURE__ */ React.createElement(
    "select",
    {
      className: "ms-1",
      value: w,
      onChange: (y) => m(y.target.value, "columnName")
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Select"),
    h == null ? void 0 : h.map((y) => /* @__PURE__ */ React.createElement("option", { key: y, value: y }, y))
  ), /* @__PURE__ */ React.createElement(
    "select",
    {
      className: "ms-1",
      value: f,
      onChange: (y) => m(y.target.value, "isOrIsNotEqualTo")
    },
    /* @__PURE__ */ React.createElement("option", { value: "is" }, "is"),
    /* @__PURE__ */ React.createElement("option", { value: "isNot" }, "is not")
  ), /* @__PURE__ */ React.createElement("select", { className: "ms-1", value: E, onChange: (y) => m(y.target.value, "value") }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select"), (b = e[w]) == null ? void 0 : b.map((y) => /* @__PURE__ */ React.createElement("option", { key: y, value: y }, y))))))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => d(r, !0) }, /* @__PURE__ */ React.createElement(re, { display: "caretDown" })), /* @__PURE__ */ React.createElement("span", null, " ", E ? `${w} ${f === "is" ? "is" : "is not"} ${E}` : "New Condition")));
}, cs = ({
  controls: t,
  data: e,
  deleteVariable: n,
  updateVariableArray: r,
  variableConfig: s,
  variableIndex: o
}) => {
  const [a, i] = t, c = a[o], u = (N, P) => {
    i({ openVariableControls: a, [N]: P });
  }, d = k.useState([]), p = Object.keys((e == null ? void 0 : e[0]) || {}), [h, w] = k.useState(s.columnName), [f, E] = k.useState(s.conditions), [m, b] = k.useState(s.name), [y, T] = k.useState(s.addCommas), L = k.useMemo(() => p.reduce((N, P) => (N[P] = W.uniq(e.map((M) => M[P])), N), {}), [p]), x = () => {
    T(!y);
  }, O = (N) => {
    w(N), E([]);
  }, U = (N, P) => {
    const { columnName: M, isOrIsNotEqualTo: ie, value: C } = N, B = W.cloneDeep(f);
    B[P] = {
      columnName: M,
      isOrIsNotEqualTo: ie,
      value: C
    }, E(B);
  }, q = (N) => {
    const P = W.cloneDeep(f);
    P.splice(N, 1), E(P);
  }, K = () => {
    E([
      ...f,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [N, P] = d, M = [...N];
    M[f.length + 1] = !0, P(M);
  }, ae = () => {
    const N = f.filter(
      (M) => M.columnName !== "" && M.value !== ""
    ), P = {
      columnName: h,
      conditions: N,
      name: m,
      tag: `{{${m}}}`,
      addCommas: y
    };
    r(P, o), u(o, !1);
  }, Z = m === "", G = Z || h === "";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, c ? /* @__PURE__ */ React.createElement("fieldset", { className: "edit-block mb-1", key: o }, /* @__PURE__ */ React.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ React.createElement("button", { onClick: ae, disabled: G }, /* @__PURE__ */ React.createElement(re, { display: "caretUp" })), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm mt-0 ms-2",
      onClick: (N) => {
        N.preventDefault(), n(o);
      }
    },
    "Delete"
  )), /* @__PURE__ */ React.createElement("label", { className: "d-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Variable Name:"), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: `variable-${o} ms-1`,
      type: "text",
      value: m,
      onChange: (N) => b(N.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "pt-2" }, /* @__PURE__ */ React.createElement("label", { className: "d-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Column:"), /* @__PURE__ */ React.createElement(
    "select",
    {
      className: `variable-${o} ms-1`,
      onChange: (N) => O(N.target.value),
      value: h,
      disabled: Z
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Select"),
    p.map((N) => /* @__PURE__ */ React.createElement("option", { key: N, value: N }, N))
  ))), /* @__PURE__ */ React.createElement("div", { className: "pt-2" }, /* @__PURE__ */ React.createElement(
    Ot,
    {
      value: y,
      label: "Add Commas to Number",
      updateField: x,
      tooltip: /* @__PURE__ */ React.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(Q.Target, null, /* @__PURE__ */ React.createElement(
        re,
        {
          display: "question",
          style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
        }
      )), /* @__PURE__ */ React.createElement(Q.Content, null, /* @__PURE__ */ React.createElement("p", null, "Selecting this option will add commas to the numeric value.")))
    }
  )), /* @__PURE__ */ React.createElement("label", { className: "d-block py-2" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Conditions:"), f.map((N, P) => /* @__PURE__ */ React.createElement("div", { className: "condition-section mt-2" }, /* @__PURE__ */ React.createElement(
    ls,
    {
      key: m + "-condition-" + P,
      conditionControls: d,
      conditionLookup: L,
      conditionSettings: N,
      conditionIndex: P,
      removeCondition: q,
      selectedColumn: h,
      updateConditionsList: U
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "mt-1" }, /* @__PURE__ */ React.createElement("button", { onClick: K, disabled: G }, "Add Condition"), /* @__PURE__ */ React.createElement("button", { className: "ms-2", onClick: ae, disabled: G }, "Done"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => u(o, !0) }, /* @__PURE__ */ React.createElement(re, { display: "caretDown" })), /* @__PURE__ */ React.createElement("span", null, " ", m ? `${m}` : "New Variable"))));
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
  const { config: t, data: e, isDashboard: n, loading: r, setParentConfig: s, updateConfig: o } = k.useContext(nn), { contentEditor: a, theme: i, visual: c } = t, { inlineHTML: u, markupVariables: d, srcUrl: p, title: h, useInlineHTML: w, allowHideSection: f } = a, [E, m] = k.useState(!0), b = an(t, o, !0), y = (e == null ? void 0 : e[0]) !== void 0, T = k.useState([]);
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
    m(!E), o({
      ...t,
      showEditorPanel: !E
    });
  }, x = () => {
    const C = JSON.parse(JSON.stringify(t));
    return delete C.newViz, delete C.runtime, C;
  }, [O, U] = k.useState([...d]), [q, K] = k.useState(!1), ae = k.useRef(null), [Z, G] = T, N = () => {
    const C = [...W.cloneDeep(O)], B = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    G({ ...Z, [O.length + 1]: !0 }), C.push(B), U(C), K(!q);
  }, P = (C, B) => {
    const ee = W.cloneDeep(O);
    ee[B] = C, U(ee), b("contentEditor", null, "markupVariables", ee);
  }, M = (C) => {
    const B = W.cloneDeep(O);
    B.splice(C, 1), U(B), b("contentEditor", null, "markupVariables", B);
    const ee = W.cloneDeep(Z);
    delete ee[C], G(ee);
  }, ie = /* @__PURE__ */ g.createElement(we, null, /* @__PURE__ */ g.createElement(we.Section, { title: "General" }, /* @__PURE__ */ g.createElement(
    Ue,
    {
      value: h || "",
      section: "contentEditor",
      fieldName: "title",
      label: "Title",
      placeholder: "Markup Include Title",
      updateField: b
    }
  )), /* @__PURE__ */ g.createElement(we.Section, { title: "Content Editor" }, /* @__PURE__ */ g.createElement("span", { className: "divider-heading" }, "Enter Markup"), /* @__PURE__ */ g.createElement(
    ce,
    {
      inline: !0,
      value: w,
      section: "contentEditor",
      fieldName: "useInlineHTML",
      label: "Use Inline HTML ",
      updateField: b
    }
  ), /* @__PURE__ */ g.createElement("div", { className: "column-edit" }, w ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { ref: ae }, /* @__PURE__ */ g.createElement(
    Ue,
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
  ), /* @__PURE__ */ g.createElement("hr", { className: "accordion__divider" })), /* @__PURE__ */ g.createElement("fieldset", null, /* @__PURE__ */ g.createElement("label", null, /* @__PURE__ */ g.createElement("span", { className: "edit-label" }, "Variables", /* @__PURE__ */ g.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ g.createElement(Q.Target, null, /* @__PURE__ */ g.createElement(re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ g.createElement(Q.Content, null, "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML")))), y === !1 && /* @__PURE__ */ g.createElement("span", { className: "need-data-source-prompt" }, "To use variables, add data source."), O && O.length > 0 && /* @__PURE__ */ g.createElement("div", { className: "section-border" }, O == null ? void 0 : O.map((C, B) => /* @__PURE__ */ g.createElement(
    cs,
    {
      key: `${C.name}-${B}`,
      controls: T,
      data: e,
      deleteVariable: M,
      updateVariableArray: P,
      variableConfig: C,
      variableIndex: B
    }
  ))), /* @__PURE__ */ g.createElement("div", { className: "pt-2" }, /* @__PURE__ */ g.createElement(
    Ot,
    {
      value: f,
      section: "contentEditor",
      fieldName: "allowHideSection",
      label: "Hide Section on Null",
      updateField: b,
      tooltip: /* @__PURE__ */ g.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ g.createElement(Q.Target, null, /* @__PURE__ */ g.createElement(
        re,
        {
          display: "question",
          style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
        }
      )), /* @__PURE__ */ g.createElement(Q.Content, null, /* @__PURE__ */ g.createElement("p", null, "Hide this entire Markup Include section if any variable is null or blank.")))
    }
  )), /* @__PURE__ */ g.createElement("div", { className: "mb-1 d-flex" }, /* @__PURE__ */ g.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: N,
      disabled: !y
    },
    "Create New Variable"
  )))) : /* @__PURE__ */ g.createElement(
    Ue,
    {
      value: p || "",
      section: "contentEditor",
      fieldName: "srcUrl",
      label: "Source URL;",
      placeholder: "https://www.example.com/file.html",
      updateField: b
    }
  ))), /* @__PURE__ */ g.createElement(we.Section, { title: "Visual" }, /* @__PURE__ */ g.createElement("div", { className: "input-group" }, /* @__PURE__ */ g.createElement("label", null, "Theme"), /* @__PURE__ */ g.createElement("ul", { className: "color-palette" }, us.map((C) => /* @__PURE__ */ g.createElement(
    "li",
    {
      title: C,
      key: C,
      onClick: () => {
        o({ ...t, theme: C });
      },
      className: i === C ? "selected " + C : C
    }
  )))), /* @__PURE__ */ g.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ g.createElement(
    ce,
    {
      value: c.border,
      section: "visual",
      fieldName: "border",
      label: "Display Border ",
      updateField: b
    }
  ), /* @__PURE__ */ g.createElement(
    ce,
    {
      value: c.borderColorTheme,
      section: "visual",
      fieldName: "borderColorTheme",
      label: "Use Border Color Theme ",
      updateField: b
    }
  ), /* @__PURE__ */ g.createElement(
    ce,
    {
      value: c.accent,
      section: "visual",
      fieldName: "accent",
      label: "Use Accent Style ",
      updateField: b
    }
  ), /* @__PURE__ */ g.createElement(
    ce,
    {
      value: c.background,
      section: "visual",
      fieldName: "background",
      label: "Use Theme Background Color ",
      updateField: b
    }
  ), /* @__PURE__ */ g.createElement(
    ce,
    {
      value: c.hideBackgroundColor,
      section: "visual",
      fieldName: "hideBackgroundColor",
      label: "Hide Background Color ",
      updateField: b
    }
  ))));
  return r && !(t != null && t.showEditorPanel) ? null : /* @__PURE__ */ g.createElement(At, { component: "EditorPanel" }, /* @__PURE__ */ g.createElement(
    Ve.Sidebar,
    {
      displayPanel: E,
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
  }, [a, i] = k.useReducer(fs, o), { config: c, loading: u, urlMarkup: d, markupError: p, errorMessage: h, coveLoadedHasRan: w } = a, f = k.useRef(), { innerContainerClasses: E, contentClasses: m } = sn(c || {}), { contentEditor: b, theme: y } = c || {}, T = e == null ? void 0 : e.data, { inlineHTML: L, markupVariables: x, srcUrl: O, title: U, useInlineHTML: q } = b || {}, K = (R) => {
    Object.keys(Ct).forEach((_) => {
      R[_] && typeof R[_] == "object" && !Array.isArray(R[_]) && (R[_] = { ...Ct[_], ...R[_] });
    }), R.runtime = {}, R.runtime.uniqueId = Date.now(), R.runtime.editorErrorMessage = "", i({ type: "SET_CONFIG", payload: R });
  }, ae = k.useCallback(async () => {
    let R = e || await (await fetch(t)).json(), _ = R.data ?? {};
    R.dataUrl && (_ = await (await fetch(R.dataUrl)).json()), R.data = _;
    const $ = { ...on(R) };
    K({ ...e, ...$ }), i({ type: "SET_LOADING", payload: !1 });
  }, []);
  k.useEffect(() => {
    if (p) {
      let R = p, _ = "There was a problem retrieving the content from " + O + ". ", $ = /https?:\/\//g;
      R === 404 && !O.match($) && (R = "proto"), _ += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[R], i({ type: "SET_ERROR_MESSAGE", payload: _ });
    } else
      i({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [p]);
  const Z = k.useCallback(async () => {
    if (i({ type: "SET_MARKUP_ERROR", payload: null }), O)
      if (O === "#example")
        i({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await is.get(O).then((R) => {
            R.data && i({ type: "SET_URL_MARKUP", payload: R.data });
          });
        } catch (R) {
          R.response ? i({ type: "SET_MARKUP_ERROR", payload: R.response.status }) : R.request && i({ type: "SET_MARKUP_ERROR", payload: 200 }), i({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      i({ type: "SET_URL_MARKUP", payload: "" });
  }, [O]), G = (R, _) => {
    const { columnName: $, isOrIsNotEqualTo: le, value: X } = _[0], be = le === "is" ? R == null ? void 0 : R.filter((z) => z[$] === X) : R == null ? void 0 : R.filter((z) => z[$] !== X);
    return _.shift(), _.length === 0 ? be : G(be, _);
  }, N = [], P = (R) => {
    if (W.isEmpty(x))
      return R;
    const _ = /{{(.*?)}}/g;
    return R.replace(_, (le) => {
      if (N.length > 0)
        return;
      const X = x.filter((pe) => pe.tag === le)[0];
      if (X === void 0)
        return [le];
      const be = X && X.conditions.length === 0 ? T : G(T, [...X.conditions]), z = W.uniq(
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
      return it === "" && b.allowHideSection && N.push(!0), it;
    });
  }, M = (R) => {
    let _, $ = !1;
    return R && R !== "" && R !== null && (R.toString().match(/<body[^>]*>/i) && R.toString().match(/<\/body\s*>/i) ? ($ = !0, _ = R.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : _ = R.toString()), $ ? _[1] : _;
  };
  k.useEffect(() => {
    ae().catch((R) => console.log(R)), lt("cove_loaded", { loadConfigHasRun: !0 });
  }, []), k.useEffect(() => {
    c && !w && f && (lt("cove_loaded", { config: c }), i({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [c, f]), k.useEffect(() => {
    Z().catch((R) => console.log(R));
  }, [Z]);
  let ie = /* @__PURE__ */ React.createElement(ln, null);
  const C = q ? P(L) : M(d), B = (b == null ? void 0 : b.allowHideSection) && N.length > 0 && !r;
  u === !1 && (ie = /* @__PURE__ */ React.createElement(React.Fragment, null, r && /* @__PURE__ */ React.createElement(ds, null), !B && /* @__PURE__ */ React.createElement(Ve.Responsive, { isEditor: r }, /* @__PURE__ */ React.createElement("div", { className: "markup-include-content-container cove-component__content no-borders" }, /* @__PURE__ */ React.createElement("div", { className: `markup-include-component ${m.join(" ")}` }, /* @__PURE__ */ React.createElement(cn, { title: U, isDashboard: n, classes: [`${y}`, "mb-0"] }), /* @__PURE__ */ React.createElement("div", { className: `${E.join(" ")}` }, /* @__PURE__ */ React.createElement("div", { className: "cove-component__content-wrap" }, !p && /* @__PURE__ */ React.createElement(On, { allowElements: !!d, content: C }), p && O && /* @__PURE__ */ React.createElement("div", { className: "warning" }, h))))))));
  const ee = () => /* @__PURE__ */ React.createElement("section", { className: "waiting" }, /* @__PURE__ */ React.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ React.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ React.createElement("p", null, c == null ? void 0 : c.runtime.editorErrorMessage)));
  return /* @__PURE__ */ React.createElement(At, { component: "CdcMarkupInclude" }, /* @__PURE__ */ React.createElement(nn.Provider, { value: { config: c, updateConfig: K, loading: u, data: T, setParentConfig: s, isDashboard: n } }, !(c != null && c.newViz) && (c == null ? void 0 : c.runtime) && (c == null ? void 0 : c.runtime.editorErrorMessage) && /* @__PURE__ */ React.createElement(ee, null), /* @__PURE__ */ React.createElement(Ve.VisualizationWrapper, { config: c, isEditor: r, showEditorPanel: c == null ? void 0 : c.showEditorPanel }, ie)));
};
export {
  Cs as C,
  is as a
};
