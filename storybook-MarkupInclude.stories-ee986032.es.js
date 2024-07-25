import { R as e, r as C } from "./storybook-index-45401197.es.js";
import { _ as O } from "./storybook-lodash-c15d8e1c.es.js";
import { g as Ge } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { a as Ke } from "./storybook-axios-01170075.es.js";
import { u as Ye, p as ve } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { L as he, a as Je } from "./storybook-coveUpdateWorker-83f86c17.es.js";
import { u as Xe } from "./storybook-updateFieldFactory-c006040a.es.js";
import { I as me, a as K } from "./storybook-editor-8c6d0e73.es.js";
import { E as Be, L as Qe } from "./storybook-Loading-f180d060.es.js";
import { a as Z } from "./storybook-Icon-96a1fdd8.es.js";
import { T as pe } from "./storybook-Tooltip-edc0f7ab.es.js";
import { A as te } from "./storybook-Accordion-0408a951.es.js";
import { T as Ze } from "./storybook-index-e5bf02db.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-icon-check-0ef17e76.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-e502eacf.es.js";
const v = 1, je = 2, Fe = 4, L = 8, fe = 16, ae = 32, P = 64, Ee = {
  a: {
    content: v | L,
    self: !1,
    type: v | L | ae | P
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: v | L,
    void: !0
  },
  body: {
    content: v | je | Fe | L | fe | ae | P
  },
  button: {
    content: L,
    type: v | L | ae | P
  },
  caption: {
    content: v,
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
    type: v | ae | P
  },
  dd: {
    content: v,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: v
  },
  dt: {
    content: v,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: v,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: v,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: v,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: v
  },
  picture: {
    children: ["source", "img"],
    type: v | L | fe
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: L,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: L,
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
    content: L,
    parent: ["details"]
  },
  table: {
    children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr"],
    type: v
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: v,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: v,
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
    type: v
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: v | L,
    void: !0
  }
};
function z(i) {
  return (t) => {
    Ee[t] = {
      ...i,
      ...Ee[t]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(z({
  content: v,
  type: v | P
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(z({
  content: L,
  type: v | L | P
}));
["p", "pre"].forEach(z({
  content: L,
  type: v | P
}));
["s", "small", "span", "del", "ins"].forEach(z({
  content: L,
  type: v | L
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(z({
  content: v,
  type: v | je | P
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(z({
  content: L,
  type: v | Fe | P
}));
["audio", "canvas", "iframe", "img", "video"].forEach(z({
  type: v | L | fe | P
}));
const ge = Object.freeze(Ee), et = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], tt = Object.keys(ge).filter((i) => i !== "canvas" && i !== "iframe"), w = 1, at = 2, Q = 3, Y = 4, ze = 5, ye = Object.freeze({
  alt: w,
  cite: w,
  class: w,
  colspan: Q,
  controls: Y,
  datetime: w,
  default: Y,
  disabled: Y,
  dir: w,
  height: w,
  href: w,
  id: w,
  kind: w,
  label: w,
  lang: w,
  loading: w,
  loop: Y,
  media: w,
  muted: Y,
  poster: w,
  rel: w,
  role: w,
  rowspan: Q,
  scope: w,
  sizes: w,
  span: Q,
  start: Q,
  style: ze,
  src: w,
  srclang: w,
  srcset: w,
  tabindex: w,
  target: w,
  title: w,
  type: w,
  width: w
}), nt = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function ce() {
  return ce = Object.assign || function(i) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (i[n] = a[n]);
    }
    return i;
  }, ce.apply(this, arguments);
}
function We({
  attributes: i = {},
  className: t,
  children: a = null,
  selfClose: n = !1,
  tagName: o
}) {
  const s = o;
  return n ? /* @__PURE__ */ e.createElement(s, ce({
    className: t
  }, i)) : /* @__PURE__ */ e.createElement(s, ce({
    className: t
  }, i), a);
}
class rt {
  /**
   * Filter and clean an HTML attribute value.
   */
  attribute(t, a) {
    return a;
  }
  /**
   * Filter and clean an HTML node.
   */
  node(t, a) {
    return a;
  }
}
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var ot = /["'&<>]/, st = lt;
function lt(i) {
  var t = "" + i, a = ot.exec(t);
  if (!a)
    return t;
  var n, o = "", s = 0, u = 0;
  for (s = a.index; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
      case 34:
        n = "&quot;";
        break;
      case 38:
        n = "&amp;";
        break;
      case 39:
        n = "&#39;";
        break;
      case 60:
        n = "&lt;";
        break;
      case 62:
        n = "&gt;";
        break;
      default:
        continue;
    }
    u !== s && (o += t.substring(u, s)), u = s + 1, o += n;
  }
  return u !== s ? o + t.substring(u, s) : o;
}
const it = /* @__PURE__ */ Ge(st);
function D(i, t, a) {
  return t in i ? Object.defineProperty(i, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : i[t] = a, i;
}
const ct = /(url|image|image-set)\(/i;
class dt extends rt {
  attribute(t, a) {
    return t === "style" && Object.keys(a).forEach((n) => {
      String(a[n]).match(ct) && delete a[n];
    }), a;
  }
}
const Ne = 1, ut = 3, mt = /^<(!doctype|(html|head|body)(\s|>))/i, pt = /^(aria-|data-|\w+:)/iu, ht = /{{{(\w+)\/?}}}/;
function ft() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class Et {
  constructor(t, a = {}, n = [], o = []) {
    var s;
    if (D(this, "allowed", void 0), D(this, "banned", void 0), D(this, "blocked", void 0), D(this, "container", void 0), D(this, "content", []), D(this, "props", void 0), D(this, "matchers", void 0), D(this, "filters", void 0), D(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && t && typeof t != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = a, this.matchers = n, this.filters = [...o, new dt()], this.keyIndex = -1, this.container = this.createContainer(t || ""), this.allowed = new Set((s = a.allowList) !== null && s !== void 0 ? s : tt), this.banned = new Set(et), this.blocked = new Set(a.blockList);
  }
  /**
   * Loop through and apply all registered attribute filters.
   */
  applyAttributeFilters(t, a) {
    return this.filters.reduce((n, o) => n !== null && typeof o.attribute == "function" ? o.attribute(t, n) : n, a);
  }
  /**
   * Loop through and apply all registered node filters.
   */
  applyNodeFilters(t, a) {
    return this.filters.reduce((n, o) => n !== null && typeof o.node == "function" ? o.node(t, n) : n, a);
  }
  /**
   * Loop through and apply all registered matchers to the string.
   * If a match is found, create a React element, and build a new array.
   * This array allows React to interpolate and render accordingly.
   */
  applyMatchers(t, a) {
    const n = {}, {
      props: o
    } = this;
    let s = t, u = 0, d = null;
    return this.matchers.forEach((r) => {
      const g = r.asTag().toLowerCase(), E = this.getTagConfig(g);
      if (o[r.inverseName] || !this.isTagAllowed(g) || !this.canRenderChild(a, E))
        return;
      let y = "";
      for (; s && (d = r.match(s)); ) {
        const {
          index: c,
          length: b,
          match: p,
          valid: S,
          void: h,
          ...A
        } = d, m = r.propName + String(u);
        c > 0 && (y += s.slice(0, c)), S ? (y += h ? `{{{${m}/}}}` : `{{{${m}}}}${p}{{{/${m}}}}`, this.keyIndex += 1, u += 1, n[m] = {
          children: p,
          matcher: r,
          props: {
            ...o,
            ...A,
            key: this.keyIndex
          }
        }) : y += p, r.greedy ? (s = y + s.slice(c + b), y = "") : s = s.slice(c + (b || p.length));
      }
      r.greedy || (s = y + s);
    }), u === 0 ? t : this.replaceTokens(s, n);
  }
  /**
   * Determine whether the child can be rendered within the parent.
   */
  canRenderChild(t, a) {
    return !t.tagName || !a.tagName || t.void ? !1 : t.children.length > 0 ? t.children.includes(a.tagName) : t.invalid.length > 0 && t.invalid.includes(a.tagName) ? !1 : a.parent.length > 0 ? a.parent.includes(t.tagName) : !t.self && t.tagName === a.tagName ? !1 : !!(t && t.content & a.type);
  }
  /**
   * Convert line breaks in a string to HTML `<br/>` tags.
   * If the string contains HTML, we should not convert anything,
   * as line breaks should be handled by `<br/>`s in the markup itself.
   */
  convertLineBreaks(t) {
    const {
      noHtml: a,
      disableLineBreaks: n
    } = this.props;
    if (a || n || t.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))
      return t;
    let o = t.replace(/\r\n/g, `
`);
    return o = o.replace(/\n{3,}/g, `


`), o = o.replace(/\n/g, "<br/>"), o;
  }
  /**
   * Create a detached HTML document that allows for easy HTML
   * parsing while not triggering scripts or loading external
   * resources.
   */
  createContainer(t) {
    var a;
    const o = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || ft)();
    if (!o)
      return;
    const s = (a = this.props.containerTagName) !== null && a !== void 0 ? a : "body", u = s === "body" || s === "fragment" ? o.body : o.createElement(s);
    if (t.match(mt)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      u.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? it(t) : t);
    return u;
  }
  /**
   * Convert an elements attribute map to an object map.
   * Returns null if no attributes are defined.
   */
  extractAttributes(t) {
    const {
      allowAttributes: a
    } = this.props, n = {};
    let o = 0;
    return t.nodeType !== Ne || !t.attributes || ([...t.attributes].forEach((s) => {
      const {
        name: u,
        value: d
      } = s, r = u.toLowerCase(), g = ye[r] || ye[u];
      if (!this.isSafe(t) || !r.match(pt) && (!a && (!g || g === at) || r.startsWith("on") || d.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let E = r === "style" ? this.extractStyleAttribute(t) : d;
      g === Y ? E = !0 : g === Q ? E = Number.parseFloat(String(E)) : g !== ze && (E = String(E)), n[nt[r] || r] = this.applyAttributeFilters(r, E), o += 1;
    }), o === 0) ? null : n;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(t) {
    const a = {};
    return Array.from(t.style).forEach((n) => {
      const o = t.style[n];
      (typeof o == "string" || typeof o == "number") && (a[n.replace(/-([a-z])/g, (s, u) => String(u).toUpperCase())] = o);
    }), a;
  }
  /**
   * Return configuration for a specific tag.
   */
  getTagConfig(t) {
    const a = {
      children: [],
      content: 0,
      invalid: [],
      parent: [],
      self: !0,
      tagName: "",
      type: 0,
      void: !1
    };
    return ge[t] ? {
      ...a,
      ...ge[t],
      tagName: t
    } : a;
  }
  /**
   * Verify that a node is safe from XSS and injection attacks.
   */
  isSafe(t) {
    if (typeof HTMLAnchorElement < "u" && t instanceof HTMLAnchorElement) {
      const a = t.getAttribute("href");
      if (a != null && a.startsWith("#"))
        return !0;
      const n = t.protocol.toLowerCase();
      return n === ":" || n === "http:" || n === "https:" || n === "mailto:" || n === "tel:";
    }
    return !0;
  }
  /**
   * Verify that an HTML tag is allowed to render.
   */
  isTagAllowed(t) {
    return this.banned.has(t) || this.blocked.has(t) ? !1 : this.props.allowElements || this.allowed.has(t);
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
  parseNode(t, a) {
    const {
      noHtml: n,
      noHtmlExceptMatchers: o,
      allowElements: s,
      transform: u,
      transformOnlyAllowList: d
    } = this.props;
    let r = [], g = "";
    return [...t.childNodes].forEach((E) => {
      if (E.nodeType === Ne) {
        const c = E.nodeName.toLowerCase(), b = this.getTagConfig(c);
        g && (r.push(g), g = "");
        const p = this.applyNodeFilters(c, E);
        if (!p)
          return;
        let S;
        if (u && !(d && !this.isTagAllowed(c))) {
          this.keyIndex += 1;
          const h = this.keyIndex;
          S = this.parseNode(p, b);
          const A = u(p, S, b);
          if (A === null)
            return;
          if (typeof A < "u") {
            r.push(/* @__PURE__ */ e.cloneElement(A, {
              key: h
            }));
            return;
          }
          this.keyIndex = h - 1;
        }
        if (this.banned.has(c))
          return;
        if (!(n || o && c !== "br") && this.isTagAllowed(c) && (s || this.canRenderChild(a, b))) {
          var y;
          this.keyIndex += 1;
          const h = this.extractAttributes(p), A = {
            tagName: c
          };
          h && (A.attributes = h), b.void && (A.selfClose = b.void), r.push(/* @__PURE__ */ e.createElement(We, {
            ...A,
            key: this.keyIndex
          }, (y = S) !== null && y !== void 0 ? y : this.parseNode(p, b)));
        } else
          r = [...r, ...this.parseNode(p, b.tagName ? b : a)];
      } else if (E.nodeType === ut) {
        const c = n && !o ? E.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(E.textContent || "", a)
        );
        Array.isArray(c) ? r = [...r, ...c] : g += c;
      }
    }), g && r.push(g), r;
  }
  /**
   * Deconstruct the string into an array, by replacing custom tokens with React elements,
   * so that React can render it correctly.
   */
  replaceTokens(t, a) {
    if (!t.includes("{{{"))
      return t;
    const n = [];
    let o = t, s = null;
    for (; s = o.match(ht); ) {
      const [u, d] = s, r = s.index, g = u.includes("/");
      if (process.env.NODE_ENV !== "production" && !a[d])
        throw new Error(`Token "${d}" found but no matching element to replace with.`);
      r > 0 && (n.push(o.slice(0, r)), o = o.slice(r));
      const {
        children: E,
        matcher: y,
        props: c
      } = a[d];
      let b;
      if (g)
        b = u.length, n.push(y.createElement(E, c));
      else {
        const p = o.match(new RegExp(`{{{/${d}}}}`));
        if (process.env.NODE_ENV !== "production" && !p)
          throw new Error(`Closing token missing for interpolated element "${d}".`);
        b = p.index + p[0].length, n.push(y.createElement(this.replaceTokens(o.slice(u.length, p.index), a), c));
      }
      o = o.slice(b);
    }
    return o.length > 0 && n.push(o), n.length === 0 ? "" : n.length === 1 && typeof n[0] == "string" ? n[0] : n;
  }
}
function gt(i) {
  var t;
  const {
    attributes: a,
    className: n,
    containerTagName: o,
    content: s,
    emptyContent: u,
    parsedContent: d,
    tagName: r,
    noWrap: g
  } = i, E = (t = o ?? r) !== null && t !== void 0 ? t : "span", y = E === "fragment" ? !0 : g;
  let c;
  if (d)
    c = d;
  else {
    const b = new Et(s ?? "", i).parse();
    b.length > 0 && (c = b);
  }
  return c || (c = u), y ? /* @__PURE__ */ e.createElement(e.Fragment, null, c) : /* @__PURE__ */ e.createElement(We, {
    attributes: a,
    className: n,
    tagName: E
  }, c);
}
const qe = C.createContext({});
const bt = ({ conditionControls: i, conditionLookup: t, conditionSettings: a, conditionIndex: n, removeCondition: o, selectedColumn: s, updateConditionsList: u }) => {
  var A;
  const [d, r] = i, g = d[n], E = (m, M) => {
    const x = [...d];
    x[m] = M, r(x);
  }, c = Object.keys(t).filter((m) => m !== s), { columnName: b, isOrIsNotEqualTo: p, value: S } = a, h = (m, M) => {
    const x = O.cloneDeep(a);
    M === "columnName" && (x.value = ""), x[M] = m, u(x, n);
  };
  return g ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => {
        const m = [...d];
        m[n] = !1, r(m);
      }
    },
    /* @__PURE__ */ e.createElement(Z, { display: "caretDown" })
  ), /* @__PURE__ */ e.createElement("button", { className: "btn btn-danger btn-sm mt-0 ml-2", onClick: () => o(n) }, "Remove")), /* @__PURE__ */ e.createElement("div", { id: `condition_${n}` }, /* @__PURE__ */ e.createElement("label", { className: "d-block" }, /* @__PURE__ */ e.createElement("span", null, "Condition : "), /* @__PURE__ */ e.createElement("div", { className: "pt-1" }, /* @__PURE__ */ e.createElement("select", { className: "ml-1", value: b, onChange: (m) => h(m.target.value, "columnName") }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Select"), c == null ? void 0 : c.map((m) => /* @__PURE__ */ e.createElement("option", { key: m, value: m }, m))), /* @__PURE__ */ e.createElement("select", { className: "ml-1", value: p, onChange: (m) => h(m.target.value, "isOrIsNotEqualTo") }, /* @__PURE__ */ e.createElement("option", { value: "is" }, "is"), /* @__PURE__ */ e.createElement("option", { value: "isNot" }, "is not")), /* @__PURE__ */ e.createElement("select", { className: "ml-1", value: S, onChange: (m) => h(m.target.value, "value") }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Select"), (A = t[b]) == null ? void 0 : A.map((m) => /* @__PURE__ */ e.createElement("option", { key: m, value: m }, m))))))) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => E(n, !0) }, /* @__PURE__ */ e.createElement(Z, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", S ? `${b} ${p === "is" ? "is" : "is not"} ${S}` : "New Condition")));
}, vt = ({ controls: i, data: t, deleteVariable: a, updateVariableArray: n, variableConfig: o, variableIndex: s }) => {
  const [u, d] = i, r = u[s], g = (f, k) => {
    d({ openVariableControls: u, [f]: k });
  }, E = C.useState([]), y = Object.keys((t == null ? void 0 : t[0]) || {}), [c, b] = C.useState(o.columnName), [p, S] = C.useState(o.conditions), [h, A] = C.useState(o.name), m = C.useMemo(() => y.reduce((f, k) => (f[k] = O.uniq(t.map((_) => _[k])), f), {}), [y]), M = (f) => {
    b(f), S([]);
  }, x = (f, k) => {
    const { columnName: _, isOrIsNotEqualTo: J, value: X } = f, j = O.cloneDeep(p);
    j[k] = {
      columnName: _,
      isOrIsNotEqualTo: J,
      value: X
    }, S(j);
  }, R = (f) => {
    const k = O.cloneDeep(p);
    k.splice(f, 1), S(k);
  }, I = () => {
    S([
      ...p,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [f, k] = E, _ = [...f];
    _[p.length + 1] = !0, k(_);
  }, W = () => {
    const f = p.filter((_) => _.columnName !== "" && _.value !== ""), k = {
      columnName: c,
      conditions: f,
      name: h,
      tag: `{{${h}}}`
    };
    n(k, s), g(s, !1);
  }, q = h === "", U = q || c === "";
  return /* @__PURE__ */ e.createElement(e.Fragment, null, r ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: s }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: W, disabled: U }, /* @__PURE__ */ e.createElement(Z, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm mt-0 ml-2",
      onClick: (f) => {
        f.preventDefault(), a(s);
      }
    },
    "Delete"
  )), /* @__PURE__ */ e.createElement("label", { className: "d-block" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Variable Name:"), /* @__PURE__ */ e.createElement("input", { className: `variable-${s} ml-1`, type: "text", value: h, onChange: (f) => A(f.target.value) })), /* @__PURE__ */ e.createElement("div", { className: "pt-2" }, /* @__PURE__ */ e.createElement("label", { className: "d-block" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column:"), /* @__PURE__ */ e.createElement("select", { className: `variable-${s} ml-1`, onChange: (f) => M(f.target.value), value: c, disabled: q }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Select"), y.map((f) => /* @__PURE__ */ e.createElement("option", { key: f, value: f }, f))))), /* @__PURE__ */ e.createElement("label", { className: "d-block py-2" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Conditions:"), p.map((f, k) => /* @__PURE__ */ e.createElement("div", { className: "condition-section mt-2" }, /* @__PURE__ */ e.createElement(
    bt,
    {
      key: h + "-condition-" + k,
      conditionControls: E,
      conditionLookup: m,
      conditionSettings: f,
      conditionIndex: k,
      removeCondition: R,
      selectedColumn: c,
      updateConditionsList: x
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "mt-1" }, /* @__PURE__ */ e.createElement("button", { onClick: I, disabled: U }, "Add Condition"), /* @__PURE__ */ e.createElement("button", { className: "ml-2", onClick: W, disabled: U }, "Done"))) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("button", { onClick: () => g(s, !0) }, /* @__PURE__ */ e.createElement(Z, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", h ? `${h}` : "New Variable"))));
}, yt = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], Nt = () => {
  const { config: i, data: t, isDashboard: a, loading: n, setParentConfig: o, updateConfig: s } = C.useContext(qe), { contentEditor: u, theme: d, visual: r } = i, { inlineHTML: g, markupVariables: E, srcUrl: y, title: c, useInlineHTML: b } = u, [p, S] = C.useState(!0), h = Xe(i, s, !0), A = (t == null ? void 0 : t[0]) !== void 0, m = C.useState([]);
  C.useEffect(() => {
    if (o) {
      const N = x();
      o(N);
    }
  }, [i]), C.useEffect(() => {
    const N = { ...i };
    delete N.newViz, s(N);
  }, []);
  const M = () => {
    S(!p), s({
      ...i,
      showEditorPanel: !p
    });
  }, x = () => {
    const N = JSON.parse(JSON.stringify(i));
    return delete N.newViz, delete N.runtime, N;
  }, [R, I] = C.useState([...E]), [W, q] = C.useState(!1), U = C.useRef(null), [f, k] = m, _ = () => {
    const N = [...O.cloneDeep(R)], H = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    k({ ...f, [R.length + 1]: !0 }), N.push(H), I(N), q(!W);
  }, J = (N, H) => {
    const l = O.cloneDeep(R);
    l[H] = N, I(l), h("contentEditor", null, "markupVariables", l);
  }, X = (N) => {
    const H = O.cloneDeep(R);
    H.splice(N, 1), I(H), h("contentEditor", null, "markupVariables", H);
    const l = O.cloneDeep(f);
    delete l[N], k(l);
  }, j = /* @__PURE__ */ e.createElement(te, null, /* @__PURE__ */ e.createElement(te.Section, { title: "General" }, /* @__PURE__ */ e.createElement(me, { value: c || "", section: "contentEditor", fieldName: "title", label: "Title", placeholder: "Markup Include Title", updateField: h })), /* @__PURE__ */ e.createElement(te.Section, { title: "Content Editor" }, /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Enter Markup"), /* @__PURE__ */ e.createElement(K, { inline: !0, value: b, section: "contentEditor", fieldName: "useInlineHTML", label: "Use Inline HTML ", updateField: h }), /* @__PURE__ */ e.createElement("div", { className: "column-edit" }, b ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { ref: U }, /* @__PURE__ */ e.createElement(me, { value: g, section: "contentEditor", fieldName: "inlineHTML", label: "HTML", placeholder: "Add HTML here", type: "textarea", rows: 10, updateField: h }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" })), /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Variables", /* @__PURE__ */ e.createElement(pe, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(pe.Target, null, /* @__PURE__ */ e.createElement(Z, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(pe.Content, null, "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML")))), A === !1 && /* @__PURE__ */ e.createElement("span", { className: "need-data-source-prompt" }, "To use variables, add data source."), R && R.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "section-border" }, R == null ? void 0 : R.map((N, H) => /* @__PURE__ */ e.createElement(vt, { key: `${N.name}-${H}`, controls: m, data: t, deleteVariable: X, updateVariableArray: J, variableConfig: N, variableIndex: H }))), /* @__PURE__ */ e.createElement("div", { className: "mb-1 d-flex" }, /* @__PURE__ */ e.createElement("button", { className: "btn btn-primary", onClick: _, disabled: !A }, "Create New Variable")))) : /* @__PURE__ */ e.createElement(me, { value: y || "", section: "contentEditor", fieldName: "srcUrl", label: "Source URL;", placeholder: "https://www.example.com/file.html", updateField: h }))), /* @__PURE__ */ e.createElement(te.Section, { title: "Visual" }, /* @__PURE__ */ e.createElement("div", { className: "input-group" }, /* @__PURE__ */ e.createElement("label", null, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, yt.map((N) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: N,
      key: N,
      onClick: () => {
        s({ ...i, theme: N });
      },
      className: d === N ? "selected " + N : N
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ e.createElement(K, { value: r.border, section: "visual", fieldName: "border", label: "Display Border ", updateField: h }), /* @__PURE__ */ e.createElement(K, { value: r.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme ", updateField: h }), /* @__PURE__ */ e.createElement(K, { value: r.accent, section: "visual", fieldName: "accent", label: "Use Accent Style ", updateField: h }), /* @__PURE__ */ e.createElement(K, { value: r.background, section: "visual", fieldName: "background", label: "Use Theme Background Color ", updateField: h }), /* @__PURE__ */ e.createElement(K, { value: r.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color ", updateField: h }))));
  return n && !(i != null && i.showEditorPanel) ? null : /* @__PURE__ */ e.createElement(Be, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(he.Sidebar, { displayPanel: p, isDashboard: a, title: "Configure Markup Include", onBackClick: M }, j));
}, we = {
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
}, wt = (i, t) => {
  switch (t.type) {
    case "SET_CONFIG":
      return { ...i, config: t.payload };
    case "SET_LOADING":
      return { ...i, loading: t.payload };
    case "SET_URL_MARKUP":
      return { ...i, urlMarkup: t.payload };
    case "SET_MARKUP_ERROR":
      return { ...i, markupError: t.payload };
    case "SET_ERROR_MESSAGE":
      return { ...i, errorMessage: t.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...i, coveLoadedHasRan: t.payload };
  }
};
const Tt = ({ configUrl: i, config: t, isDashboard: a = !0, isEditor: n = !1, setConfig: o }) => {
  const s = { config: t, loading: !0, urlMarkup: "", markupError: null, errorMessage: null, coveLoadedHasRan: !1 }, [u, d] = C.useReducer(wt, s), { config: r, loading: g, urlMarkup: E, markupError: y, errorMessage: c, coveLoadedHasRan: b } = u, p = C.useRef(), { innerContainerClasses: S, contentClasses: h } = Ye(r || {}), { contentEditor: A, theme: m } = r || {}, M = t == null ? void 0 : t.data, { inlineHTML: x, markupVariables: R, srcUrl: I, title: W, useInlineHTML: q } = A || {}, U = (l) => {
    Object.keys(we).forEach((T) => {
      l[T] && typeof l[T] == "object" && !Array.isArray(l[T]) && (l[T] = { ...we[T], ...l[T] });
    }), l.runtime = {}, l.runtime.uniqueId = Date.now(), l.runtime.editorErrorMessage = "", d({ type: "SET_CONFIG", payload: l });
  }, f = C.useCallback(async () => {
    let l = t || await (await fetch(i)).json(), T = l.data ?? {};
    l.dataUrl && (T = await (await fetch(l.dataUrl)).json()), l.data = T;
    const V = { ...await Je(l) };
    U({ ...t, ...V }), d({ type: "SET_LOADING", payload: !1 });
  }, []);
  C.useEffect(() => {
    if (y) {
      let l = y, T = "There was a problem retrieving the content from " + I + ". ", V = /https?:\/\//g;
      l === 404 && !I.match(V) && (l = "proto"), T += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[l], d({ type: "SET_ERROR_MESSAGE", payload: T });
    } else
      d({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [y]);
  const k = C.useCallback(async () => {
    if (d({ type: "SET_MARKUP_ERROR", payload: null }), I)
      if (I === "#example")
        d({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await Ke.get(I).then((l) => {
            l.data && d({ type: "SET_URL_MARKUP", payload: l.data });
          });
        } catch (l) {
          l.response ? d({ type: "SET_MARKUP_ERROR", payload: l.response.status }) : l.request && d({ type: "SET_MARKUP_ERROR", payload: 200 }), d({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      d({ type: "SET_URL_MARKUP", payload: "" });
  }, [I]), _ = (l, T) => {
    const { columnName: V, isOrIsNotEqualTo: F, value: B } = T[0], G = F === "is" ? l.filter(($) => $[V] === B) : l.filter(($) => $[V] !== B);
    return T.shift(), T.length === 0 ? G : _(G, T);
  }, J = (l) => {
    if (O.isEmpty(R))
      return l;
    const T = /{{(.*?)}}/g;
    return l.replace(T, (F) => {
      const B = R.filter((ue) => ue.tag === F)[0];
      if (B === void 0)
        return [F];
      const G = B && B.conditions.length === 0 ? M : _(M, [...B.conditions]), $ = O.uniq(G == null ? void 0 : G.map((ue) => ue[B.columnName])), de = [], be = n ? "or" : "and", ee = $.length;
      return ee === 2 && $.push($.join(` ${be} `)), ee > 2 && ($[ee - 1] = `${be} ${$[ee - 1]}`), de.push($.join(", ")), `<span class="cove-tooltip-variable">${F}<span class="cove-tooltip-value"><span class="font-weight-bold display-Info-message">One or more of the following values will appear in the place of this variable placeholder:</span><br/>${de[0]}</span></span><span class="cove-markup-include-variable-value">${de[0].trim()}</span>`;
    });
  }, X = (l) => {
    let T, V = !1;
    return l && l !== "" && l !== null && (l.toString().match(/<body[^>]*>/i) && l.toString().match(/<\/body\s*>/i) ? (V = !0, T = l.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : T = l.toString()), V ? T[1] : T;
  };
  C.useEffect(() => {
    f().catch((l) => console.log(l)), ve("cove_loaded", { loadConfigHasRun: !0 });
  }, []), C.useEffect(() => {
    r && !b && p && (ve("cove_loaded", { config: r }), d({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [r, p]), C.useEffect(() => {
    f().catch((l) => console.log(l));
  }, [t == null ? void 0 : t.data]), C.useEffect(() => {
    k().catch((l) => console.log(l));
  }, [k]);
  let j = /* @__PURE__ */ e.createElement(Qe, null);
  const N = q ? J(x) : X(E);
  g === !1 && (j = /* @__PURE__ */ e.createElement(e.Fragment, null, n && /* @__PURE__ */ e.createElement(Nt, null), /* @__PURE__ */ e.createElement(he.Responsive, { isEditor: n }, /* @__PURE__ */ e.createElement("div", { className: "markup-include-content-container cove-component__content no-borders" }, /* @__PURE__ */ e.createElement("div", { className: `markup-include-component ${h.join(" ")}` }, /* @__PURE__ */ e.createElement(Ze, { title: W, isDashboard: a, classes: [`${m}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: `${S.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, !y && /* @__PURE__ */ e.createElement(gt, { allowElements: !!E, content: N }), y && I && /* @__PURE__ */ e.createElement("div", { className: "warning" }, c))))))));
  const H = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, r == null ? void 0 : r.runtime.editorErrorMessage)));
  return /* @__PURE__ */ e.createElement(Be, { component: "CdcMarkupInclude" }, /* @__PURE__ */ e.createElement(qe.Provider, { value: { config: r, updateConfig: U, loading: g, data: M, setParentConfig: o, isDashboard: a } }, !(r != null && r.newViz) && (r == null ? void 0 : r.runtime) && (r == null ? void 0 : r.runtime.editorErrorMessage) && /* @__PURE__ */ e.createElement(H, null), /* @__PURE__ */ e.createElement(he.VisualizationWrapper, { config: r, isEditor: n, showEditorPanel: r == null ? void 0 : r.showEditorPanel }, j)));
}, Ct = {
  inlineHTML: "<h2>Inline HTML</h2>",
  markupVariables: [],
  showHeader: !0,
  srcUrl: "#example",
  title: "Markup Include",
  useInlineHTML: !1
}, kt = [], At = {}, St = !0, Lt = "theme-blue", Rt = "markup-include", _t = null, It = {
  border: !1,
  accent: !1,
  background: !1,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Mt = {
  contentEditor: Ct,
  data: kt,
  legend: At,
  newViz: St,
  theme: Lt,
  type: Rt,
  runtime: _t,
  visual: It
}, xt = {
  inlineHTML: "<div>In the state of {{state}}, the overall rate was {{rate}} for {{location}}</div> <div>For more information visit {{url}}{{state}}/{{location}}</div>",
  markupVariables: [
    {
      name: "state",
      tag: "{{state}}",
      columnName: "STATE",
      conditions: []
    },
    {
      name: "rate",
      tag: "{{rate}}",
      columnName: "Rate",
      conditions: []
    },
    {
      name: "location",
      tag: "{{location}}",
      columnName: "Location",
      conditions: []
    },
    {
      name: "url",
      tag: "{{url}}",
      columnName: "URL",
      conditions: []
    }
  ],
  showHeader: !0,
  srcUrl: "#example",
  title: "Current Rate by Location",
  useInlineHTML: !0
}, Ht = [
  {
    STATE: "Alabama",
    Rate: "130",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alaska",
    Rate: "80",
    Location: "Home",
    URL: "https://www.cdc.gov/"
  }
], Vt = {}, $t = !0, Ot = "theme-blue", Pt = "markup-include", Dt = null, Ut = {
  border: !1,
  accent: !1,
  background: !1,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Bt = {
  contentEditor: xt,
  data: Ht,
  legend: Vt,
  newViz: $t,
  theme: Ot,
  type: Pt,
  runtime: Dt,
  visual: Ut
}, jt = {
  inlineHTML: "<div>{{state}} does have a rate 130 compared to the over all rate of {{overall-rate}}</div>",
  markupVariables: [
    {
      name: "state",
      tag: "{{state}}",
      columnName: "STATE",
      conditions: [
        {
          columnName: "Rate",
          isOrIsNotEqualTo: "is",
          value: "130"
        }
      ]
    },
    {
      name: "overall-rate",
      tag: "{{overall-rate}}",
      columnName: "Rate",
      conditions: [
        {
          columnName: "STATE",
          isOrIsNotEqualTo: "is",
          value: "Overall"
        }
      ]
    }
  ],
  showHeader: !0,
  srcUrl: "#example",
  title: "",
  useInlineHTML: !0
}, Ft = [
  {
    STATE: "Overall",
    Rate: "80",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alabama",
    Rate: "130",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  }
], zt = {}, Wt = !0, qt = "theme-amber", Gt = "markup-include", Kt = null, Yt = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Jt = {
  contentEditor: jt,
  data: Ft,
  legend: zt,
  newViz: Wt,
  theme: qt,
  type: Gt,
  runtime: Kt,
  visual: Yt
}, Xt = {
  inlineHTML: "<div>The age adjusted rate for {{race}} was 644.2, compared to Non-Hispanic American Indian, which was {{ageAdjustedRate}}.</div>",
  markupVariables: [
    {
      name: "race",
      tag: "{{race}}",
      columnName: "Race",
      conditions: [
        {
          columnName: "Age-adjusted rate",
          isOrIsNotEqualTo: "is",
          value: "644.2"
        }
      ]
    },
    {
      name: "ageAdjustedRate",
      tag: "{{ageAdjustedRate}}",
      columnName: "Age-adjusted rate",
      conditions: [
        {
          columnName: "Race",
          isOrIsNotEqualTo: "is",
          value: "Non-Hispanic American Indian"
        }
      ]
    }
  ],
  showHeader: !1,
  srcUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Markup-Include-Button-and-Text.html",
  title: "",
  useInlineHTML: !1
}, Qt = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], Zt = {}, ea = !0, ta = "theme-amber", aa = "markup-include", na = null, ra = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, oa = {
  contentEditor: Xt,
  data: Qt,
  legend: Zt,
  newViz: ea,
  theme: ta,
  type: aa,
  runtime: na,
  visual: ra
}, sa = {
  inlineHTML: "<div>{{race}} did not have an age adjusted rate of 644.2.</div>",
  markupVariables: [
    {
      name: "race",
      tag: "{{race}}",
      columnName: "Race",
      conditions: [
        {
          columnName: "Age-adjusted rate",
          isOrIsNotEqualTo: "isNot",
          value: "644.2"
        }
      ]
    }
  ],
  showHeader: !1,
  srcUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/SSI-Example-Markup-Include.html",
  title: "",
  useInlineHTML: !1
}, la = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], ia = {}, ca = !0, da = "theme-purple", ua = "markup-include", ma = null, pa = {
  border: !0,
  accent: !0,
  background: !1,
  hideBackgroundColor: !0,
  borderColorTheme: !1
}, ha = !0, fa = !0, Ea = {
  contentEditor: sa,
  data: la,
  legend: ia,
  newViz: ca,
  theme: da,
  type: ua,
  runtime: ma,
  visual: pa,
  isEditor: ha,
  showEditorPanel: fa
}, ga = {
  inlineHTML: "<div>{{race}} did not have an age adjusted rate of 644.2.</div>",
  markupVariables: [
    {
      name: "race",
      tag: "{{race}}",
      columnName: "Race",
      conditions: [
        {
          columnName: "Age-adjusted rate",
          isOrIsNotEqualTo: "isNot",
          value: "644.2"
        }
      ]
    }
  ],
  showHeader: !1,
  srcUrl: "/wcms/4.0/cdc-wp/data-presentation/examples/SSI-Image-With-Text.html",
  title: "<strong>Markup Include</strong> - Image with Text",
  useInlineHTML: !1
}, ba = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], va = {}, ya = !0, Na = "theme-slate", wa = "markup-include", Ta = null, Ca = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, ka = !0, Aa = !0, Sa = {
  contentEditor: ga,
  data: ba,
  legend: va,
  newViz: ya,
  theme: Na,
  type: wa,
  runtime: Ta,
  visual: Ca,
  isEditor: ka,
  showEditorPanel: Aa
}, Ka = {
  title: "Components/Pages/Markup Include",
  component: Tt
}, ne = {
  args: {
    config: Mt,
    isEditor: !1
  }
}, re = {
  args: {
    config: Bt,
    isEditor: !1
  }
}, oe = {
  args: {
    config: Jt,
    isEditor: !1
  }
}, se = {
  args: {
    config: oa,
    isEditor: !1
  }
}, le = {
  args: {
    config: Ea,
    isEditor: !1
  }
}, ie = {
  args: {
    config: Sa,
    isEditor: !1
  }
};
var Te, Ce, ke;
ne.parameters = {
  ...ne.parameters,
  docs: {
    ...(Te = ne.parameters) == null ? void 0 : Te.docs,
    source: {
      originalSource: `{
  args: {
    config: primary,
    isEditor: false
  }
}`,
      ...(ke = (Ce = ne.parameters) == null ? void 0 : Ce.docs) == null ? void 0 : ke.source
    }
  }
};
var Ae, Se, Le;
re.parameters = {
  ...re.parameters,
  docs: {
    ...(Ae = re.parameters) == null ? void 0 : Ae.docs,
    source: {
      originalSource: `{
  args: {
    config: noConditions,
    isEditor: false
  }
}`,
      ...(Le = (Se = re.parameters) == null ? void 0 : Se.docs) == null ? void 0 : Le.source
    }
  }
};
var Re, _e, Ie;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Re = oe.parameters) == null ? void 0 : Re.docs,
    source: {
      originalSource: `{
  args: {
    config: withConditions,
    isEditor: false
  }
}`,
      ...(Ie = (_e = oe.parameters) == null ? void 0 : _e.docs) == null ? void 0 : Ie.source
    }
  }
};
var Me, xe, He;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(Me = se.parameters) == null ? void 0 : Me.docs,
    source: {
      originalSource: `{
  args: {
    config: buttonAndText,
    isEditor: false
  }
}`,
      ...(He = (xe = se.parameters) == null ? void 0 : xe.docs) == null ? void 0 : He.source
    }
  }
};
var Ve, $e, Oe;
le.parameters = {
  ...le.parameters,
  docs: {
    ...(Ve = le.parameters) == null ? void 0 : Ve.docs,
    source: {
      originalSource: `{
  args: {
    config: iconNoText,
    isEditor: false
  }
}`,
      ...(Oe = ($e = le.parameters) == null ? void 0 : $e.docs) == null ? void 0 : Oe.source
    }
  }
};
var Pe, De, Ue;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...(Pe = ie.parameters) == null ? void 0 : Pe.docs,
    source: {
      originalSource: `{
  args: {
    config: imageWithText,
    isEditor: false
  }
}`,
      ...(Ue = (De = ie.parameters) == null ? void 0 : De.docs) == null ? void 0 : Ue.source
    }
  }
};
const Ya = ["Primary", "No_Conditions", "With_conditions", "Button_and_text", "icon_no_text", "image_with_text"];
export {
  se as Button_and_text,
  re as No_Conditions,
  ne as Primary,
  oe as With_conditions,
  Ya as __namedExportsOrder,
  Ka as default,
  le as icon_no_text,
  ie as image_with_text
};
