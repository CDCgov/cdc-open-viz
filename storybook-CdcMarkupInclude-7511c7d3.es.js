import { j as p, F as pe, a as R } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { R as oe, r as P } from "./storybook-index-f2fed736.es.js";
import { _ as V } from "./storybook-lodash-a4231e1c.es.js";
import { g as on } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { L as We, u as an, p as dt } from "./storybook-useDataVizClasses-3bf30247.es.js";
import { c as ln } from "./storybook-coveUpdateWorker-2b7600bb.es.js";
import { u as cn } from "./storybook-updateFieldFactory-c006040a.es.js";
import { I as qe, a as de } from "./storybook-editor-8aca7312.es.js";
import { E as vt, L as un } from "./storybook-viewports-61111b6b.es.js";
import { a as ie } from "./storybook-Icon-e250778e.es.js";
import { T as te } from "./storybook-Tooltip-7cf39805.es.js";
import { A as Re } from "./storybook-Accordion-e71370da.es.js";
import { C as _t } from "./storybook-Inputs-f2c63984.es.js";
import { T as dn } from "./storybook-index-8e186da8.es.js";
const O = 1, kt = 2, xt = 4, F = 8, Je = 16, Ne = 32, X = 64, Ke = {
  a: {
    content: O | F,
    self: !1,
    type: O | F | Ne | X
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
    content: O | kt | xt | F | Je | Ne | X
  },
  button: {
    content: F,
    type: O | F | Ne | X
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
    type: O | Ne | X
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
    type: O | F | Je
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
    Ke[e] = {
      ...t,
      ...Ke[e]
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
  type: O | kt | X
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(le({
  content: F,
  type: O | xt | X
}));
["audio", "canvas", "iframe", "img", "video"].forEach(le({
  type: O | F | Je | X
}));
const Ge = Object.freeze(Ke), fn = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], pn = Object.keys(Ge).filter((t) => t !== "canvas" && t !== "iframe"), _ = 1, hn = 2, Ee = 3, fe = 4, Lt = 5, ft = Object.freeze({
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
  style: Lt,
  src: _,
  srclang: _,
  srcset: _,
  tabindex: _,
  target: _,
  title: _,
  type: _,
  width: _
}), mn = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function _e() {
  return _e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, _e.apply(this, arguments);
}
function Pt({
  attributes: t = {},
  className: e,
  children: n = null,
  selfClose: r = !1,
  tagName: s
}) {
  const o = s;
  return r ? /* @__PURE__ */ oe.createElement(o, _e({
    className: e
  }, t)) : /* @__PURE__ */ oe.createElement(o, _e({
    className: e
  }, t), n);
}
class bn {
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
var yn = /["'&<>]/, En = wn;
function wn(t) {
  var e = "" + t, n = yn.exec(e);
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
const gn = /* @__PURE__ */ on(En);
function ee(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
const Sn = /(url|image|image-set)\(/i;
class Tn extends bn {
  attribute(e, n) {
    return e === "style" && Object.keys(n).forEach((r) => {
      String(n[r]).match(Sn) && delete n[r];
    }), n;
  }
}
const pt = 1, Rn = 3, Nn = /^<(!doctype|(html|head|body)(\s|>))/i, Cn = /^(aria-|data-|\w+:)/iu, An = /{{{(\w+)\/?}}}/;
function On() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class vn {
  constructor(e, n = {}, r = [], s = []) {
    var o;
    if (ee(this, "allowed", void 0), ee(this, "banned", void 0), ee(this, "blocked", void 0), ee(this, "container", void 0), ee(this, "content", []), ee(this, "props", void 0), ee(this, "matchers", void 0), ee(this, "filters", void 0), ee(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = n, this.matchers = r, this.filters = [...s, new Tn()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = n.allowList) !== null && o !== void 0 ? o : pn), this.banned = new Set(fn), this.blocked = new Set(n.blockList);
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
      const d = c.asTag().toLowerCase(), u = this.getTagConfig(d);
      if (s[c.inverseName] || !this.isTagAllowed(d) || !this.canRenderChild(n, u))
        return;
      let h = "";
      for (; o && (a = c.match(o)); ) {
        const {
          index: b,
          length: g,
          match: f,
          valid: y,
          void: m,
          ...w
        } = a, E = c.propName + String(i);
        b > 0 && (h += o.slice(0, b)), y ? (h += m ? `{{{${E}/}}}` : `{{{${E}}}}${f}{{{/${E}}}}`, this.keyIndex += 1, i += 1, r[E] = {
          children: f,
          matcher: c,
          props: {
            ...s,
            ...w,
            key: this.keyIndex
          }
        }) : h += f, c.greedy ? (o = h + o.slice(b + g), h = "") : o = o.slice(b + (g || f.length));
      }
      c.greedy || (o = h + o);
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
    const s = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || On)();
    if (!s)
      return;
    const o = (n = this.props.containerTagName) !== null && n !== void 0 ? n : "body", i = o === "body" || o === "fragment" ? s.body : s.createElement(o);
    if (e.match(Nn)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      i.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? gn(e) : e);
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
        value: a
      } = o, c = i.toLowerCase(), d = ft[c] || ft[i];
      if (!this.isSafe(e) || !c.match(Cn) && (!n && (!d || d === hn) || c.startsWith("on") || a.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let u = c === "style" ? this.extractStyleAttribute(e) : a;
      d === fe ? u = !0 : d === Ee ? u = Number.parseFloat(String(u)) : d !== Lt && (u = String(u)), r[mn[c] || c] = this.applyAttributeFilters(c, u), s += 1;
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
    return Ge[e] ? {
      ...n,
      ...Ge[e],
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
    let c = [], d = "";
    return [...e.childNodes].forEach((u) => {
      if (u.nodeType === pt) {
        const b = u.nodeName.toLowerCase(), g = this.getTagConfig(b);
        d && (c.push(d), d = "");
        const f = this.applyNodeFilters(b, u);
        if (!f)
          return;
        let y;
        if (i && !(a && !this.isTagAllowed(b))) {
          this.keyIndex += 1;
          const m = this.keyIndex;
          y = this.parseNode(f, g);
          const w = i(f, y, g);
          if (w === null)
            return;
          if (typeof w < "u") {
            c.push(/* @__PURE__ */ oe.cloneElement(w, {
              key: m
            }));
            return;
          }
          this.keyIndex = m - 1;
        }
        if (this.banned.has(b))
          return;
        if (!(r || s && b !== "br") && this.isTagAllowed(b) && (o || this.canRenderChild(n, g))) {
          var h;
          this.keyIndex += 1;
          const m = this.extractAttributes(f), w = {
            tagName: b
          };
          m && (w.attributes = m), g.void && (w.selfClose = g.void), c.push(/* @__PURE__ */ oe.createElement(Pt, {
            ...w,
            key: this.keyIndex
          }, (h = y) !== null && h !== void 0 ? h : this.parseNode(f, g)));
        } else
          c = [...c, ...this.parseNode(f, g.tagName ? g : n)];
      } else if (u.nodeType === Rn) {
        const b = r && !s ? u.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(u.textContent || "", n)
        );
        Array.isArray(b) ? c = [...c, ...b] : d += b;
      }
    }), d && c.push(d), c;
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
    for (; o = s.match(An); ) {
      const [i, a] = o, c = o.index, d = i.includes("/");
      if (process.env.NODE_ENV !== "production" && !n[a])
        throw new Error(`Token "${a}" found but no matching element to replace with.`);
      c > 0 && (r.push(s.slice(0, c)), s = s.slice(c));
      const {
        children: u,
        matcher: h,
        props: b
      } = n[a];
      let g;
      if (d)
        g = i.length, r.push(h.createElement(u, b));
      else {
        const f = s.match(new RegExp(`{{{/${a}}}}`));
        if (process.env.NODE_ENV !== "production" && !f)
          throw new Error(`Closing token missing for interpolated element "${a}".`);
        g = f.index + f[0].length, r.push(h.createElement(this.replaceTokens(s.slice(i.length, f.index), n), b));
      }
      s = s.slice(g);
    }
    return s.length > 0 && r.push(s), r.length === 0 ? "" : r.length === 1 && typeof r[0] == "string" ? r[0] : r;
  }
}
function _n(t) {
  var e;
  const {
    attributes: n,
    className: r,
    containerTagName: s,
    content: o,
    emptyContent: i,
    parsedContent: a,
    tagName: c,
    noWrap: d
  } = t, u = (e = s ?? c) !== null && e !== void 0 ? e : "span", h = u === "fragment" ? !0 : d;
  let b;
  if (a)
    b = a;
  else {
    const g = new vn(o ?? "", t).parse();
    g.length > 0 && (b = g);
  }
  return b || (b = i), h ? /* @__PURE__ */ oe.createElement(oe.Fragment, null, b) : /* @__PURE__ */ oe.createElement(Pt, {
    attributes: n,
    className: r,
    tagName: u
  }, b);
}
function Ut(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: kn } = Object.prototype, { getPrototypeOf: nt } = Object, { iterator: Pe, toStringTag: Dt } = Symbol, Ue = ((t) => (e) => {
  const n = kn.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), z = (t) => (t = t.toLowerCase(), (e) => Ue(e) === t), De = (t) => (e) => typeof e === t, { isArray: he } = Array, we = De("undefined");
function xn(t) {
  return t !== null && !we(t) && t.constructor !== null && !we(t.constructor) && H(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ft = z("ArrayBuffer");
function Ln(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ft(t.buffer), e;
}
const Pn = De("string"), H = De("function"), Bt = De("number"), Fe = (t) => t !== null && typeof t == "object", Un = (t) => t === !0 || t === !1, Ce = (t) => {
  if (Ue(t) !== "object")
    return !1;
  const e = nt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Dt in t) && !(Pe in t);
}, Dn = z("Date"), Fn = z("File"), Bn = z("Blob"), Mn = z("FileList"), In = (t) => Fe(t) && H(t.pipe), Hn = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || H(t.append) && ((e = Ue(t)) === "formdata" || // detect form-data instance
  e === "object" && H(t.toString) && t.toString() === "[object FormData]"));
}, jn = z("URLSearchParams"), [qn, Vn, $n, zn] = ["ReadableStream", "Request", "Response", "Headers"].map(z), Wn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ge(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), he(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], e.call(null, t[a], a, t);
  }
}
function Mt(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const se = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), It = (t) => !we(t) && t !== se;
function Xe() {
  const { caseless: t } = It(this) && this || {}, e = {}, n = (r, s) => {
    const o = t && Mt(e, s) || s;
    Ce(e[o]) && Ce(r) ? e[o] = Xe(e[o], r) : Ce(r) ? e[o] = Xe({}, r) : he(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ge(arguments[r], n);
  return e;
}
const Jn = (t, e, n, { allOwnKeys: r } = {}) => (ge(e, (s, o) => {
  n && H(s) ? t[o] = Ut(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), Kn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Gn = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Xn = (t, e, n, r) => {
  let s, o, i;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && nt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Yn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Qn = (t) => {
  if (!t)
    return null;
  if (he(t))
    return t;
  let e = t.length;
  if (!Bt(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Zn = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && nt(Uint8Array)), er = (t, e) => {
  const r = (t && t[Pe]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, tr = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, nr = z("HTMLFormElement"), rr = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), ht = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), sr = z("RegExp"), Ht = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  ge(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, or = (t) => {
  Ht(t, (e, n) => {
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
}, ir = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return he(t) ? r(t) : r(String(t).split(e)), n;
}, ar = () => {
}, lr = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function cr(t) {
  return !!(t && H(t.append) && t[Dt] === "FormData" && t[Pe]);
}
const ur = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (Fe(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = he(r) ? [] : {};
        return ge(r, (i, a) => {
          const c = n(i, s + 1);
          !we(c) && (o[a] = c);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, dr = z("AsyncFunction"), fr = (t) => t && (Fe(t) || H(t)) && H(t.then) && H(t.catch), jt = ((t, e) => t ? setImmediate : e ? ((n, r) => (se.addEventListener("message", ({ source: s, data: o }) => {
  s === se && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), se.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  H(se.postMessage)
), pr = typeof queueMicrotask < "u" ? queueMicrotask.bind(se) : typeof process < "u" && process.nextTick || jt, hr = (t) => t != null && H(t[Pe]), l = {
  isArray: he,
  isArrayBuffer: Ft,
  isBuffer: xn,
  isFormData: Hn,
  isArrayBufferView: Ln,
  isString: Pn,
  isNumber: Bt,
  isBoolean: Un,
  isObject: Fe,
  isPlainObject: Ce,
  isReadableStream: qn,
  isRequest: Vn,
  isResponse: $n,
  isHeaders: zn,
  isUndefined: we,
  isDate: Dn,
  isFile: Fn,
  isBlob: Bn,
  isRegExp: sr,
  isFunction: H,
  isStream: In,
  isURLSearchParams: jn,
  isTypedArray: Zn,
  isFileList: Mn,
  forEach: ge,
  merge: Xe,
  extend: Jn,
  trim: Wn,
  stripBOM: Kn,
  inherits: Gn,
  toFlatObject: Xn,
  kindOf: Ue,
  kindOfTest: z,
  endsWith: Yn,
  toArray: Qn,
  forEachEntry: er,
  matchAll: tr,
  isHTMLForm: nr,
  hasOwnProperty: ht,
  hasOwnProp: ht,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ht,
  freezeMethods: or,
  toObjectSet: ir,
  toCamelCase: rr,
  noop: ar,
  toFiniteNumber: lr,
  findKey: Mt,
  global: se,
  isContextDefined: It,
  isSpecCompliantForm: cr,
  toJSONObject: ur,
  isAsyncFn: dr,
  isThenable: fr,
  setImmediate: jt,
  asap: pr,
  isIterable: hr
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
const qt = T.prototype, Vt = {};
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
Object.defineProperty(qt, "isAxiosError", { value: !0 });
T.from = (t, e, n, r, s, o) => {
  const i = Object.create(qt);
  return l.toFlatObject(t, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), T.call(i, t.message, e, n, r, s), i.cause = t, i.name = t.name, o && Object.assign(i, o), i;
};
const mr = null;
function Ye(t) {
  return l.isPlainObject(t) || l.isArray(t);
}
function $t(t) {
  return l.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function mt(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = $t(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function br(t) {
  return l.isArray(t) && !t.some(Ye);
}
const yr = l.toFlatObject(l, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Be(t, e, n) {
  if (!l.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !l.isUndefined(m[y]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(e);
  if (!l.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(f) {
    if (f === null)
      return "";
    if (l.isDate(f))
      return f.toISOString();
    if (!c && l.isBlob(f))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(f) || l.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, y, m) {
    let w = f;
    if (f && !m && typeof f == "object") {
      if (l.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), f = JSON.stringify(f);
      else if (l.isArray(f) && br(f) || (l.isFileList(f) || l.endsWith(y, "[]")) && (w = l.toArray(f)))
        return y = $t(y), w.forEach(function(N, x) {
          !(l.isUndefined(N) || N === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? mt([y], x, o) : i === null ? y : y + "[]",
            d(N)
          );
        }), !1;
    }
    return Ye(f) ? !0 : (e.append(mt(m, y, o), d(f)), !1);
  }
  const h = [], b = Object.assign(yr, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: Ye
  });
  function g(f, y) {
    if (!l.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      h.push(f), l.forEach(f, function(w, E) {
        (!(l.isUndefined(w) || w === null) && s.call(
          e,
          w,
          l.isString(E) ? E.trim() : E,
          y,
          b
        )) === !0 && g(w, y ? y.concat(E) : [E]);
      }), h.pop();
    }
  }
  if (!l.isObject(t))
    throw new TypeError("data must be an object");
  return g(t), e;
}
function bt(t) {
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
function rt(t, e) {
  this._pairs = [], t && Be(t, this, e);
}
const zt = rt.prototype;
zt.append = function(e, n) {
  this._pairs.push([e, n]);
};
zt.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, bt);
  } : bt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Er(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Wt(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Er;
  l.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = l.isURLSearchParams(e) ? e.toString() : new rt(e, n).toString(r), o) {
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
const yt = wr, Jt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gr = typeof URLSearchParams < "u" ? URLSearchParams : rt, Sr = typeof FormData < "u" ? FormData : null, Tr = typeof Blob < "u" ? Blob : null, Rr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gr,
    FormData: Sr,
    Blob: Tr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, st = typeof window < "u" && typeof document < "u", Qe = typeof navigator == "object" && navigator || void 0, Nr = st && (!Qe || ["ReactNative", "NativeScript", "NS"].indexOf(Qe.product) < 0), Cr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ar = st && window.location.href || "http://localhost", Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: st,
  hasStandardBrowserEnv: Nr,
  hasStandardBrowserWebWorkerEnv: Cr,
  navigator: Qe,
  origin: Ar
}, Symbol.toStringTag, { value: "Module" })), B = {
  ...Or,
  ...Rr
};
function vr(t, e) {
  return Be(t, new B.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return B.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function _r(t) {
  return l.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function kr(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function Kt(t) {
  function e(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), c = o >= n.length;
    return i = !i && l.isArray(s) ? s.length : i, c ? (l.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !l.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && l.isArray(s[i]) && (s[i] = kr(s[i])), !a);
  }
  if (l.isFormData(t) && l.isFunction(t.entries)) {
    const n = {};
    return l.forEachEntry(t, (r, s) => {
      e(_r(r), s, n, 0);
    }), n;
  }
  return null;
}
function xr(t, e, n) {
  if (l.isString(t))
    try {
      return (e || JSON.parse)(t), l.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const ot = {
  transitional: Jt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = l.isObject(e);
    if (o && l.isHTMLForm(e) && (e = new FormData(e)), l.isFormData(e))
      return s ? JSON.stringify(Kt(e)) : e;
    if (l.isArrayBuffer(e) || l.isBuffer(e) || l.isStream(e) || l.isFile(e) || l.isBlob(e) || l.isReadableStream(e))
      return e;
    if (l.isArrayBufferView(e))
      return e.buffer;
    if (l.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return vr(e, this.formSerializer).toString();
      if ((a = l.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Be(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), xr(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || ot.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  ot.headers[t] = {};
});
const it = ot, Lr = l.toObjectSet([
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
]), Pr = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && Lr[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Et = Symbol("internals");
function ye(t) {
  return t && String(t).trim().toLowerCase();
}
function Ae(t) {
  return t === !1 || t == null ? t : l.isArray(t) ? t.map(Ae) : String(t);
}
function Ur(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Dr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ve(t, e, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!l.isString(e)) {
    if (l.isString(r))
      return e.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(e);
  }
}
function Fr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Br(t, e) {
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
class Me {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(a, c, d) {
      const u = ye(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(s, u);
      (!h || s[h] === void 0 || d === !0 || d === void 0 && s[h] !== !1) && (s[h || c] = Ae(a));
    }
    const i = (a, c) => l.forEach(a, (d, u) => o(d, u, c));
    if (l.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (l.isString(e) && (e = e.trim()) && !Dr(e))
      i(Pr(e), n);
    else if (l.isObject(e) && l.isIterable(e)) {
      let a = {}, c, d;
      for (const u of e) {
        if (!l.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[d = u[0]] = (c = a[d]) ? l.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      i(a, n);
    } else
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
          return Ur(s);
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
      return !!(r && this[r] !== void 0 && (!n || Ve(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = ye(i), i) {
        const a = l.findKey(r, i);
        a && (!n || Ve(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return l.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || Ve(this, this[o], o, e, !0)) && (delete this[o], s = !0);
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
      const a = e ? Fr(o) : String(o).trim();
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
    const r = (this[Et] = this[Et] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = ye(i);
      r[a] || (Br(s, i), r[a] = !0);
    }
    return l.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(Me.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(Me);
const $ = Me;
function $e(t, e) {
  const n = this || it, r = e || n, s = $.from(r.headers);
  let o = r.data;
  return l.forEach(t, function(a) {
    o = a.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Gt(t) {
  return !!(t && t.__CANCEL__);
}
function me(t, e, n) {
  T.call(this, t ?? "canceled", T.ERR_CANCELED, e, n), this.name = "CanceledError";
}
l.inherits(me, T, {
  __CANCEL__: !0
});
function Xt(t, e, n) {
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
function Ir(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const d = Date.now(), u = r[o];
    i || (i = d), n[s] = c, r[s] = d;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), d - i < e)
      return;
    const g = u && d - u;
    return g ? Math.round(b * 1e3 / g) : void 0;
  };
}
function Hr(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (d, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), t.apply(null, d);
  };
  return [(...d) => {
    const u = Date.now(), h = u - n;
    h >= r ? i(d, u) : (s = d, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const ke = (t, e, n = 3) => {
  let r = 0;
  const s = Ir(50, 250);
  return Hr((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, c = i - r, d = s(c), u = i <= a;
    r = i;
    const h = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && a && u ? (a - i) / d : void 0,
      event: o,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(h);
  }, n);
}, wt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, gt = (t) => (...e) => l.asap(() => t(...e)), jr = B.hasStandardBrowserEnv ? ((t, e) => (n) => (n = new URL(n, B.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(B.origin),
  B.navigator && /(msie|trident)/i.test(B.navigator.userAgent)
) : () => !0, qr = B.hasStandardBrowserEnv ? (
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
function Vr(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function $r(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Yt(t, e, n) {
  let r = !Vr(e);
  return t && (r || n == !1) ? $r(t, e) : e;
}
const St = (t) => t instanceof $ ? { ...t } : t;
function ae(t, e) {
  e = e || {};
  const n = {};
  function r(d, u, h, b) {
    return l.isPlainObject(d) && l.isPlainObject(u) ? l.merge.call({ caseless: b }, d, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function s(d, u, h, b) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(d))
        return r(void 0, d, h, b);
    } else
      return r(d, u, h, b);
  }
  function o(d, u) {
    if (!l.isUndefined(u))
      return r(void 0, u);
  }
  function i(d, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(d))
        return r(void 0, d);
    } else
      return r(void 0, u);
  }
  function a(d, u, h) {
    if (h in e)
      return r(d, u);
    if (h in t)
      return r(void 0, d);
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
    headers: (d, u, h) => s(St(d), St(u), h, !0)
  };
  return l.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const h = c[u] || s, b = h(t[u], e[u], u);
    l.isUndefined(b) && h !== a || (n[u] = b);
  }), n;
}
const Qt = (t) => {
  const e = ae({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = e;
  e.headers = i = $.from(i), e.url = Wt(Yt(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (l.isFormData(n)) {
    if (B.hasStandardBrowserEnv || B.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [d, ...u] = c ? c.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([d || "multipart/form-data", ...u].join("; "));
    }
  }
  if (B.hasStandardBrowserEnv && (r && l.isFunction(r) && (r = r(e)), r || r !== !1 && jr(e.url))) {
    const d = s && o && qr.read(o);
    d && i.set(s, d);
  }
  return e;
}, zr = typeof XMLHttpRequest < "u", Wr = zr && function(t) {
  return new Promise(function(n, r) {
    const s = Qt(t);
    let o = s.data;
    const i = $.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: d } = s, u, h, b, g, f;
    function y() {
      g && g(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function w() {
      if (!m)
        return;
      const N = $.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), L = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: N,
        config: t,
        request: m
      };
      Xt(function(M) {
        n(M), y();
      }, function(M) {
        r(M), y();
      }, L), m = null;
    }
    "onloadend" in m ? m.onloadend = w : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, m.onabort = function() {
      m && (r(new T("Request aborted", T.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function() {
      r(new T("Network Error", T.ERR_NETWORK, t, m)), m = null;
    }, m.ontimeout = function() {
      let x = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const L = s.transitional || Jt;
      s.timeoutErrorMessage && (x = s.timeoutErrorMessage), r(new T(
        x,
        L.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        t,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && l.forEach(i.toJSON(), function(x, L) {
      m.setRequestHeader(L, x);
    }), l.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), a && a !== "json" && (m.responseType = s.responseType), d && ([b, f] = ke(d, !0), m.addEventListener("progress", b)), c && m.upload && ([h, g] = ke(c), m.upload.addEventListener("progress", h), m.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (u = (N) => {
      m && (r(!N || N.type ? new me(null, t, m) : N), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const E = Mr(s.url);
    if (E && B.protocols.indexOf(E) === -1) {
      r(new T("Unsupported protocol " + E + ":", T.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(o || null);
  });
}, Jr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(d) {
      if (!s) {
        s = !0, a();
        const u = d instanceof Error ? d : this.reason;
        r.abort(u instanceof T ? u : new me(u instanceof Error ? u.message : u));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new T(`timeout ${e} of ms exceeded`, T.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((d) => d.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => l.asap(a), c;
  }
}, Kr = Jr, Gr = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Xr = async function* (t, e) {
  for await (const n of Yr(t))
    yield* Gr(n, e);
}, Yr = async function* (t) {
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
}, Tt = (t, e, n, r) => {
  const s = Xr(t, e);
  let o = 0, i, a = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: d, value: u } = await s.next();
        if (d) {
          a(), c.close();
          return;
        }
        let h = u.byteLength;
        if (n) {
          let b = o += h;
          n(b);
        }
        c.enqueue(new Uint8Array(u));
      } catch (d) {
        throw a(d), d;
      }
    },
    cancel(c) {
      return a(c), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ie = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Zt = Ie && typeof ReadableStream == "function", Qr = Ie && (typeof TextEncoder == "function" ? ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), en = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Zr = Zt && en(() => {
  let t = !1;
  const e = new Request(B.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Rt = 64 * 1024, Ze = Zt && en(() => l.isReadableStream(new Response("").body)), xe = {
  stream: Ze && ((t) => t.body)
};
Ie && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !xe[e] && (xe[e] = l.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new T(`Response type '${e}' is not supported`, T.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const es = async (t) => {
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
    return (await Qr(t)).byteLength;
}, ts = async (t, e) => {
  const n = l.toFiniteNumber(t.getContentLength());
  return n ?? es(e);
}, ns = Ie && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: d,
    headers: u,
    withCredentials: h = "same-origin",
    fetchOptions: b
  } = Qt(t);
  d = d ? (d + "").toLowerCase() : "text";
  let g = Kr([s, o && o.toAbortSignal()], i), f;
  const y = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let m;
  try {
    if (c && Zr && n !== "get" && n !== "head" && (m = await ts(u, r)) !== 0) {
      let L = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), v;
      if (l.isFormData(r) && (v = L.headers.get("content-type")) && u.setContentType(v), L.body) {
        const [M, W] = wt(
          m,
          ke(gt(c))
        );
        r = Tt(L.body, Rt, M, W);
      }
    }
    l.isString(h) || (h = h ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    f = new Request(e, {
      ...b,
      signal: g,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? h : void 0
    });
    let E = await fetch(f);
    const N = Ze && (d === "stream" || d === "response");
    if (Ze && (a || N && y)) {
      const L = {};
      ["status", "statusText", "headers"].forEach((Y) => {
        L[Y] = E[Y];
      });
      const v = l.toFiniteNumber(E.headers.get("content-length")), [M, W] = a && wt(
        v,
        ke(gt(a), !0)
      ) || [];
      E = new Response(
        Tt(E.body, Rt, M, () => {
          W && W(), y && y();
        }),
        L
      );
    }
    d = d || "text";
    let x = await xe[l.findKey(xe, d) || "text"](E, t);
    return !N && y && y(), await new Promise((L, v) => {
      Xt(L, v, {
        data: x,
        headers: $.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: t,
        request: f
      });
    });
  } catch (w) {
    throw y && y(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new T("Network Error", T.ERR_NETWORK, t, f),
      {
        cause: w.cause || w
      }
    ) : T.from(w, w && w.code, t, f);
  }
}), et = {
  http: mr,
  xhr: Wr,
  fetch: ns
};
l.forEach(et, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Nt = (t) => `- ${t}`, rs = (t) => l.isFunction(t) || t === null || t === !1, tn = {
  getAdapter: (t) => {
    t = l.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let i;
      if (r = n, !rs(n) && (r = et[(i = String(n)).toLowerCase()], r === void 0))
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
` + o.map(Nt).join(`
`) : " " + Nt(o[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: et
};
function ze(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new me(null, t);
}
function Ct(t) {
  return ze(t), t.headers = $.from(t.headers), t.data = $e.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), tn.getAdapter(t.adapter || it.adapter)(t).then(function(r) {
    return ze(t), r.data = $e.call(
      t,
      t.transformResponse,
      r
    ), r.headers = $.from(r.headers), r;
  }, function(r) {
    return Gt(r) || (ze(t), r && r.response && (r.response.data = $e.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = $.from(r.response.headers))), Promise.reject(r);
  });
}
const nn = "1.9.0", He = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  He[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const At = {};
He.transitional = function(e, n, r) {
  function s(o, i) {
    return "[Axios v" + nn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (e === !1)
      throw new T(
        s(i, " has been removed" + (n ? " in " + n : "")),
        T.ERR_DEPRECATED
      );
    return n && !At[i] && (At[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, i, a) : !0;
  };
};
He.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function ss(t, e, n) {
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
const Oe = {
  assertOptions: ss,
  validators: He
}, G = Oe.validators;
class Le {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new yt(),
      response: new yt()
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
    r !== void 0 && Oe.assertOptions(r, {
      silentJSONParsing: G.transitional(G.boolean),
      forcedJSONParsing: G.transitional(G.boolean),
      clarifyTimeoutError: G.transitional(G.boolean)
    }, !1), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Oe.assertOptions(s, {
      encode: G.function,
      serialize: G.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Oe.assertOptions(n, {
      baseUrl: G.spelling("baseURL"),
      withXsrfToken: G.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && l.merge(
      o.common,
      o[n.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = $.concat(i, o);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (c = c && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(y) {
      d.push(y.fulfilled, y.rejected);
    });
    let u, h = 0, b;
    if (!c) {
      const f = [Ct.bind(this), void 0];
      for (f.unshift.apply(f, a), f.push.apply(f, d), b = f.length, u = Promise.resolve(n); h < b; )
        u = u.then(f[h++], f[h++]);
      return u;
    }
    b = a.length;
    let g = n;
    for (h = 0; h < b; ) {
      const f = a[h++], y = a[h++];
      try {
        g = f(g);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      u = Ct.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, b = d.length; h < b; )
      u = u.then(d[h++], d[h++]);
    return u;
  }
  getUri(e) {
    e = ae(this.defaults, e);
    const n = Yt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Wt(n, e.params, e.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(e) {
  Le.prototype[e] = function(n, r) {
    return this.request(ae(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, a) {
      return this.request(ae(a || {}, {
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
const ve = Le;
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
const os = at;
function is(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function as(t) {
  return l.isObject(t) && t.isAxiosError === !0;
}
const tt = {
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
Object.entries(tt).forEach(([t, e]) => {
  tt[e] = t;
});
const ls = tt;
function rn(t) {
  const e = new ve(t), n = Ut(ve.prototype.request, e);
  return l.extend(n, ve.prototype, e, { allOwnKeys: !0 }), l.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return rn(ae(t, s));
  }, n;
}
const D = rn(it);
D.Axios = ve;
D.CanceledError = me;
D.CancelToken = os;
D.isCancel = Gt;
D.VERSION = nn;
D.toFormData = Be;
D.AxiosError = T;
D.Cancel = D.CanceledError;
D.all = function(e) {
  return Promise.all(e);
};
D.spread = is;
D.isAxiosError = as;
D.mergeConfig = ae;
D.AxiosHeaders = $;
D.formToJSON = (t) => Kt(l.isHTMLForm(t) ? new FormData(t) : t);
D.getAdapter = tn.getAdapter;
D.HttpStatusCode = ls;
D.default = D;
const cs = D, sn = P.createContext({});
const us = ({
  conditionControls: t,
  conditionLookup: e,
  conditionSettings: n,
  conditionIndex: r,
  removeCondition: s,
  selectedColumn: o,
  updateConditionsList: i
}) => {
  var w;
  const [a, c] = t, d = a[r], u = (E, N) => {
    const x = [...a];
    x[E] = N, c(x);
  }, b = Object.keys(e).filter((E) => E !== o), { columnName: g, isOrIsNotEqualTo: f, value: y } = n, m = (E, N) => {
    const x = V.cloneDeep(n);
    N === "columnName" && (x.value = ""), x[N] = E, i(x, r);
  };
  return d ? /* @__PURE__ */ R(pe, { children: [
    /* @__PURE__ */ R("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ p(
        "button",
        {
          onClick: () => {
            const E = [...a];
            E[r] = !1, c(E);
          },
          children: /* @__PURE__ */ p(ie, { display: "caretDown" })
        }
      ),
      /* @__PURE__ */ p("button", { className: "btn btn-warn btn-sm mt-0 ms-2", onClick: () => s(r), children: "Remove" })
    ] }),
    /* @__PURE__ */ p("div", { id: `condition_${r}`, children: /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ p("span", { children: "Condition : " }),
      /* @__PURE__ */ R("div", { className: "pt-1", children: [
        /* @__PURE__ */ R(
          "select",
          {
            className: "ms-1",
            value: g,
            onChange: (E) => m(E.target.value, "columnName"),
            children: [
              /* @__PURE__ */ p("option", { value: "", children: "Select" }),
              b == null ? void 0 : b.map((E) => /* @__PURE__ */ p("option", { value: E, children: E }, E))
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
              /* @__PURE__ */ p("option", { value: "is", children: "is" }),
              /* @__PURE__ */ p("option", { value: "isNot", children: "is not" })
            ]
          }
        ),
        /* @__PURE__ */ R("select", { className: "ms-1", value: y, onChange: (E) => m(E.target.value, "value"), children: [
          /* @__PURE__ */ p("option", { value: "", children: "Select" }),
          (w = e[g]) == null ? void 0 : w.map((E) => /* @__PURE__ */ p("option", { value: E, children: E }, E))
        ] })
      ] })
    ] }) })
  ] }) : /* @__PURE__ */ p(pe, { children: /* @__PURE__ */ R("div", { className: "mb-1", children: [
    /* @__PURE__ */ p("button", { onClick: () => u(r, !0), children: /* @__PURE__ */ p(ie, { display: "caretDown" }) }),
    /* @__PURE__ */ R("span", { children: [
      " ",
      y ? `${g} ${f === "is" ? "is" : "is not"} ${y}` : "New Condition"
    ] })
  ] }) });
}, ds = ({
  controls: t,
  data: e,
  deleteVariable: n,
  updateVariableArray: r,
  variableConfig: s,
  variableIndex: o
}) => {
  const [i, a] = t, c = i[o], d = (C, U) => {
    a({ openVariableControls: i, [C]: U });
  }, u = P.useState([]), h = Object.keys((e == null ? void 0 : e[0]) || {}), [b, g] = P.useState(s.columnName), [f, y] = P.useState(s.conditions), [m, w] = P.useState(s.name), [E, N] = P.useState(s.addCommas), x = P.useMemo(() => h.reduce((C, U) => (C[U] = V.uniq(e.map((j) => j[U])), C), {}), [h]), L = () => {
    N(!E);
  }, v = (C) => {
    g(C), y([]);
  }, M = (C, U) => {
    const { columnName: j, isOrIsNotEqualTo: ue, value: A } = C, I = V.cloneDeep(f);
    I[U] = {
      columnName: j,
      isOrIsNotEqualTo: ue,
      value: A
    }, y(I);
  }, W = (C) => {
    const U = V.cloneDeep(f);
    U.splice(C, 1), y(U);
  }, Y = () => {
    y([
      ...f,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [C, U] = u, j = [...C];
    j[f.length + 1] = !0, U(j);
  }, ce = () => {
    const C = f.filter(
      (j) => j.columnName !== "" && j.value !== ""
    ), U = {
      columnName: b,
      conditions: C,
      name: m,
      tag: `{{${m}}}`,
      addCommas: E
    };
    r(U, o), d(o, !1);
  }, re = m === "", Q = re || b === "";
  return /* @__PURE__ */ p(pe, { children: c ? /* @__PURE__ */ R("fieldset", { className: "edit-block mb-1", children: [
    /* @__PURE__ */ R("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ p("button", { onClick: ce, disabled: Q, children: /* @__PURE__ */ p(ie, { display: "caretUp" }) }),
      /* @__PURE__ */ p(
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
      /* @__PURE__ */ p("span", { className: "edit-label column-heading", children: "Variable Name:" }),
      /* @__PURE__ */ p(
        "input",
        {
          className: `variable-${o} ms-1`,
          type: "text",
          value: m,
          onChange: (C) => w(C.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ p("div", { className: "pt-2", children: /* @__PURE__ */ R("label", { className: "d-block", children: [
      /* @__PURE__ */ p("span", { className: "edit-label column-heading", children: "Column:" }),
      /* @__PURE__ */ R(
        "select",
        {
          className: `variable-${o} ms-1`,
          onChange: (C) => v(C.target.value),
          value: b,
          disabled: re,
          children: [
            /* @__PURE__ */ p("option", { value: "", children: "Select" }),
            h.map((C) => /* @__PURE__ */ p("option", { value: C, children: C }, C))
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ p("div", { className: "pt-2", children: /* @__PURE__ */ p(
      _t,
      {
        value: E,
        label: "Add Commas to Number",
        updateField: L,
        tooltip: /* @__PURE__ */ R(te, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ p(te.Target, { children: /* @__PURE__ */ p(
            ie,
            {
              display: "question",
              style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
            }
          ) }),
          /* @__PURE__ */ p(te.Content, { children: /* @__PURE__ */ p("p", { children: "Selecting this option will add commas to the numeric value." }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ R("label", { className: "d-block py-2", children: [
      /* @__PURE__ */ p("span", { className: "edit-label column-heading", children: "Conditions:" }),
      f.map((C, U) => /* @__PURE__ */ p("div", { className: "condition-section mt-2", children: /* @__PURE__ */ p(
        us,
        {
          conditionControls: u,
          conditionLookup: x,
          conditionSettings: C,
          conditionIndex: U,
          removeCondition: W,
          selectedColumn: b,
          updateConditionsList: M
        },
        m + "-condition-" + U
      ) }))
    ] }),
    /* @__PURE__ */ R("div", { className: "mt-1", children: [
      /* @__PURE__ */ p("button", { onClick: Y, disabled: Q, children: "Add Condition" }),
      /* @__PURE__ */ p("button", { className: "ms-2", onClick: ce, disabled: Q, children: "Done" })
    ] })
  ] }, o) : /* @__PURE__ */ p(pe, { children: /* @__PURE__ */ R("div", { className: "mb-2", children: [
    /* @__PURE__ */ p("button", { onClick: () => d(o, !0), children: /* @__PURE__ */ p(ie, { display: "caretDown" }) }),
    /* @__PURE__ */ R("span", { children: [
      " ",
      m ? `${m}` : "New Variable"
    ] })
  ] }) }) });
}, fs = [
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
  const { config: t, data: e, isDashboard: n, loading: r, setParentConfig: s, updateConfig: o } = P.useContext(sn), { contentEditor: i, theme: a, visual: c } = t, { inlineHTML: d, markupVariables: u, srcUrl: h, title: b, useInlineHTML: g, allowHideSection: f } = i, [y, m] = P.useState(!0), w = cn(t, o, !0), E = (e == null ? void 0 : e[0]) !== void 0, N = P.useState([]);
  P.useEffect(() => {
    if (s) {
      const A = L();
      s(A);
    }
  }, [t]), P.useEffect(() => {
    const A = { ...t };
    delete A.newViz, o(A);
  }, []);
  const x = () => {
    m(!y), o({
      ...t,
      showEditorPanel: !y
    });
  }, L = () => {
    const A = V.cloneDeep(t);
    return delete A.newViz, delete A.runtime, A;
  }, [v, M] = P.useState([...u]), [W, Y] = P.useState(!1), ce = P.useRef(null), [re, Q] = N, C = () => {
    const A = [...V.cloneDeep(v)], I = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    Q({ ...re, [v.length + 1]: !0 }), A.push(I), M(A), Y(!W);
  }, U = (A, I) => {
    const ne = V.cloneDeep(v);
    ne[I] = A, M(ne), w("contentEditor", null, "markupVariables", ne);
  }, j = (A) => {
    const I = V.cloneDeep(v);
    I.splice(A, 1), M(I), w("contentEditor", null, "markupVariables", I);
    const ne = V.cloneDeep(re);
    delete ne[A], Q(ne);
  }, ue = /* @__PURE__ */ R(Re, { children: [
    /* @__PURE__ */ p(Re.Section, { title: "General", children: /* @__PURE__ */ p(
      qe,
      {
        value: b || "",
        section: "contentEditor",
        fieldName: "title",
        label: "Title",
        placeholder: "Markup Include Title",
        updateField: w
      }
    ) }),
    /* @__PURE__ */ R(Re.Section, { title: "Content Editor", children: [
      /* @__PURE__ */ p("span", { className: "divider-heading", children: "Enter Markup" }),
      /* @__PURE__ */ p(
        de,
        {
          inline: !0,
          value: g,
          section: "contentEditor",
          fieldName: "useInlineHTML",
          label: "Use Inline HTML ",
          updateField: w
        }
      ),
      /* @__PURE__ */ p("div", { className: "column-edit", children: g ? /* @__PURE__ */ R(pe, { children: [
        /* @__PURE__ */ R("div", { ref: ce, children: [
          /* @__PURE__ */ p(
            qe,
            {
              value: d,
              section: "contentEditor",
              fieldName: "inlineHTML",
              label: "HTML",
              placeholder: "Add HTML here",
              type: "textarea",
              rows: 10,
              updateField: w
            }
          ),
          /* @__PURE__ */ p("hr", { className: "accordion__divider" })
        ] }),
        /* @__PURE__ */ R("fieldset", { children: [
          /* @__PURE__ */ p("label", { children: /* @__PURE__ */ R("span", { className: "edit-label", children: [
            "Variables",
            /* @__PURE__ */ R(te, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ p(te.Target, { children: /* @__PURE__ */ p(ie, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ p(te.Content, { children: "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML" })
            ] })
          ] }) }),
          E === !1 && /* @__PURE__ */ p("span", { className: "need-data-source-prompt", children: "To use variables, add data source." }),
          v && v.length > 0 && /* @__PURE__ */ p("div", { className: "section-border", children: v == null ? void 0 : v.map((A, I) => /* @__PURE__ */ p(
            ds,
            {
              controls: N,
              data: e,
              deleteVariable: j,
              updateVariableArray: U,
              variableConfig: A,
              variableIndex: I
            },
            `${A.name}-${I}`
          )) }),
          /* @__PURE__ */ p("div", { className: "pt-2", children: /* @__PURE__ */ p(
            _t,
            {
              value: f,
              section: "contentEditor",
              fieldName: "allowHideSection",
              label: "Hide Section on Null",
              updateField: w,
              tooltip: /* @__PURE__ */ R(te, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ p(te.Target, { children: /* @__PURE__ */ p(
                  ie,
                  {
                    display: "question",
                    style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                  }
                ) }),
                /* @__PURE__ */ p(te.Content, { children: /* @__PURE__ */ p("p", { children: "Hide this entire Markup Include section if any variable is null or blank." }) })
              ] })
            }
          ) }),
          /* @__PURE__ */ p("div", { className: "mb-1 d-flex", children: /* @__PURE__ */ p(
            "button",
            {
              className: "btn btn-primary",
              onClick: C,
              disabled: !E,
              children: "Create New Variable"
            }
          ) })
        ] })
      ] }) : /* @__PURE__ */ p(
        qe,
        {
          value: h || "",
          section: "contentEditor",
          fieldName: "srcUrl",
          label: "Source URL;",
          placeholder: "https://www.example.com/file.html",
          updateField: w
        }
      ) })
    ] }),
    /* @__PURE__ */ R(Re.Section, { title: "Visual", children: [
      /* @__PURE__ */ R("div", { className: "input-group", children: [
        /* @__PURE__ */ p("label", { children: "Theme" }),
        /* @__PURE__ */ p("ul", { className: "color-palette", children: fs.map((A) => /* @__PURE__ */ p(
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
        /* @__PURE__ */ p(
          de,
          {
            value: c.border,
            section: "visual",
            fieldName: "border",
            label: "Display Border ",
            updateField: w
          }
        ),
        /* @__PURE__ */ p(
          de,
          {
            value: c.borderColorTheme,
            section: "visual",
            fieldName: "borderColorTheme",
            label: "Use Border Color Theme ",
            updateField: w
          }
        ),
        /* @__PURE__ */ p(
          de,
          {
            value: c.accent,
            section: "visual",
            fieldName: "accent",
            label: "Use Accent Style ",
            updateField: w
          }
        ),
        /* @__PURE__ */ p(
          de,
          {
            value: c.background,
            section: "visual",
            fieldName: "background",
            label: "Use Theme Background Color ",
            updateField: w
          }
        ),
        /* @__PURE__ */ p(
          de,
          {
            value: c.hideBackgroundColor,
            section: "visual",
            fieldName: "hideBackgroundColor",
            label: "Hide Background Color ",
            updateField: w
          }
        )
      ] })
    ] })
  ] });
  return r && !(t != null && t.showEditorPanel) ? null : /* @__PURE__ */ p(vt, { component: "EditorPanel", children: /* @__PURE__ */ p(
    We.Sidebar,
    {
      displayPanel: y,
      isDashboard: n,
      title: "Configure Markup Include",
      onBackClick: x,
      children: ue
    }
  ) });
}, Ot = {
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
}, hs = (t, e) => {
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
  }, [i, a] = P.useReducer(hs, o), { config: c, loading: d, urlMarkup: u, markupError: h, errorMessage: b, coveLoadedHasRan: g } = i, f = P.useRef(), { innerContainerClasses: y, contentClasses: m } = an(c || {}), { contentEditor: w, theme: E } = c || {}, N = e == null ? void 0 : e.data, { inlineHTML: x, markupVariables: L, srcUrl: v, title: M, useInlineHTML: W } = w || {}, Y = (S) => {
    Object.keys(Ot).forEach((k) => {
      S[k] && typeof S[k] == "object" && !Array.isArray(S[k]) && (S[k] = { ...Ot[k], ...S[k] });
    }), S.runtime = {}, S.runtime.uniqueId = Date.now(), S.runtime.editorErrorMessage = "", a({ type: "SET_CONFIG", payload: S });
  }, ce = async () => {
    let S = e || await (await fetch(t)).json(), k = S.data ?? {};
    S.dataUrl && (k = await (await fetch(S.dataUrl)).json()), S.data = k;
    const J = { ...ln(S) };
    Y({ ...e, ...J }), a({ type: "SET_LOADING", payload: !1 });
  };
  P.useEffect(() => {
    if (h) {
      let S = h, k = "There was a problem retrieving the content from " + v + ". ", J = /https?:\/\//g;
      S === 404 && !v.match(J) && (S = "proto"), k += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[S], a({ type: "SET_ERROR_MESSAGE", payload: k });
    } else
      a({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [h]);
  const re = async () => {
    if (a({ type: "SET_MARKUP_ERROR", payload: null }), v)
      if (v === "#example")
        a({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await cs.get(v).then((S) => {
            S.data && a({ type: "SET_URL_MARKUP", payload: S.data });
          });
        } catch (S) {
          S.response ? a({ type: "SET_MARKUP_ERROR", payload: S.response.status }) : S.request && a({ type: "SET_MARKUP_ERROR", payload: 200 }), a({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      a({ type: "SET_URL_MARKUP", payload: "" });
  }, Q = (S, k) => {
    const { columnName: J, isOrIsNotEqualTo: q, value: Z } = k[0], Se = q === "is" ? S == null ? void 0 : S.filter((K) => K[J] === Z) : S == null ? void 0 : S.filter((K) => K[J] !== Z);
    return k.shift(), k.length === 0 ? Se : Q(Se, k);
  }, C = [], U = (S) => {
    if (V.isEmpty(L))
      return S;
    const k = /{{(.*?)}}/g;
    return S.replace(k, (q) => {
      if (C.length > 0)
        return;
      const Z = L.filter((be) => be.tag === q)[0];
      if (Z === void 0)
        return [q];
      const Se = Z && Z.conditions.length === 0 ? N : Q(N, [...Z.conditions]), K = V.uniq(
        (Se || []).map((be) => {
          const je = be[Z.columnName];
          return Z.addCommas && !isNaN(parseFloat(je)) ? parseFloat(je).toLocaleString("en-US", { useGrouping: !0 }) : je;
        })
      ), lt = [], ct = r ? "or" : "and", Te = K.length;
      if (Te === 2) {
        const be = K.join(` ${ct} `);
        K.splice(0, 2, be);
      }
      Te > 2 && (K[Te - 1] = `${ct} ${K[Te - 1]}`), lt.push(K.join(", "));
      const ut = lt[0];
      return ut === "" && w.allowHideSection && C.push(!0), ut;
    });
  }, j = (S) => {
    let k, J = !1;
    if (S && S !== "" && S !== null) {
      const q = S.toString();
      q.match(/<body[^>]*>/i) && q.match(/<\/body\s*>/i) ? (J = !0, k = q.match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : k = q;
    }
    return J ? k[1] : k;
  };
  P.useEffect(() => {
    ce().catch((S) => console.log(S)), dt("cove_loaded", { loadConfigHasRun: !0 });
  }, []), P.useEffect(() => {
    c && !g && f && (dt("cove_loaded", { config: c }), a({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [c, f]), P.useEffect(() => {
    re().catch((S) => console.log(S));
  }, [c]);
  let ue = /* @__PURE__ */ p(un, {});
  const A = W ? U(x) : j(u), I = (w == null ? void 0 : w.allowHideSection) && C.length > 0 && !r;
  d === !1 && (ue = /* @__PURE__ */ R(pe, { children: [
    r && /* @__PURE__ */ p(ps, {}),
    !I && /* @__PURE__ */ p(We.Responsive, { isEditor: r, children: /* @__PURE__ */ p("div", { className: "markup-include-content-container cove-component__content no-borders", children: /* @__PURE__ */ R("div", { className: `markup-include-component ${m.join(" ")}`, children: [
      /* @__PURE__ */ p(dn, { title: M, isDashboard: n, classes: [`${E}`, "mb-0"] }),
      /* @__PURE__ */ p("div", { className: `${y.join(" ")}`, children: /* @__PURE__ */ R("div", { className: "cove-component__content-wrap", children: [
        !h && /* @__PURE__ */ p(_n, { allowElements: !!u, content: A }),
        h && v && /* @__PURE__ */ p("div", { className: "warning", children: b })
      ] }) })
    ] }) }) })
  ] }));
  const ne = () => /* @__PURE__ */ p("section", { className: "waiting", children: /* @__PURE__ */ R("section", { className: "waiting-container", children: [
    /* @__PURE__ */ p("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ p("p", { children: c == null ? void 0 : c.runtime.editorErrorMessage })
  ] }) });
  return /* @__PURE__ */ p(vt, { component: "CdcMarkupInclude", children: /* @__PURE__ */ R(sn.Provider, { value: { config: c, updateConfig: Y, loading: d, data: N, setParentConfig: s, isDashboard: n }, children: [
    !(c != null && c.newViz) && (c == null ? void 0 : c.runtime) && (c == null ? void 0 : c.runtime.editorErrorMessage) && /* @__PURE__ */ p(ne, {}),
    /* @__PURE__ */ p(We.VisualizationWrapper, { config: c, isEditor: r, showEditorPanel: c == null ? void 0 : c.showEditorPanel, children: ue })
  ] }) });
};
export {
  _s as C,
  cs as a
};
