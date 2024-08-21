import { R as e, r as C } from "./storybook-index-45401197.es.js";
import { _ as O } from "./storybook-lodash-c15d8e1c.es.js";
import { g as Ke } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { a as Ye } from "./storybook-axios-01170075.es.js";
import { u as Je, p as ye } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { L as he, a as Xe } from "./storybook-coveUpdateWorker-e9c9259f.es.js";
import { u as Qe } from "./storybook-updateFieldFactory-c006040a.es.js";
import { I as pe, a as Y } from "./storybook-editor-975c51b2.es.js";
import { E as Fe, L as Ze } from "./storybook-Loading-f180d060.es.js";
import { I as X } from "./storybook-Icon-9a8d8f01.es.js";
import { T as Q } from "./storybook-Tooltip-edc0f7ab.es.js";
import { A as ne } from "./storybook-Accordion-a22107f6.es.js";
import { C as et } from "./storybook-Inputs-88e145b4.es.js";
import { T as tt } from "./storybook-index-e5bf02db.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-e502eacf.es.js";
const y = 1, je = 2, qe = 4, L = 8, fe = 16, re = 32, P = 64, Ee = {
  a: {
    content: y | L,
    self: !1,
    type: y | L | re | P
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: y | L,
    void: !0
  },
  body: {
    content: y | je | qe | L | fe | re | P
  },
  button: {
    content: L,
    type: y | L | re | P
  },
  caption: {
    content: y,
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
    type: y | re | P
  },
  dd: {
    content: y,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: y
  },
  dt: {
    content: y,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: y,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: y,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: y,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: y
  },
  picture: {
    children: ["source", "img"],
    type: y | L | fe
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
    type: y
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: y,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: y,
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
    type: y
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: y | L,
    void: !0
  }
};
function W(i) {
  return (t) => {
    Ee[t] = {
      ...i,
      ...Ee[t]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(W({
  content: y,
  type: y | P
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(W({
  content: L,
  type: y | L | P
}));
["p", "pre"].forEach(W({
  content: L,
  type: y | P
}));
["s", "small", "span", "del", "ins"].forEach(W({
  content: L,
  type: y | L
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(W({
  content: y,
  type: y | je | P
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(W({
  content: L,
  type: y | qe | P
}));
["audio", "canvas", "iframe", "img", "video"].forEach(W({
  type: y | L | fe | P
}));
const ge = Object.freeze(Ee), at = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], nt = Object.keys(ge).filter((i) => i !== "canvas" && i !== "iframe"), w = 1, rt = 2, te = 3, J = 4, ze = 5, Ne = Object.freeze({
  alt: w,
  cite: w,
  class: w,
  colspan: te,
  controls: J,
  datetime: w,
  default: J,
  disabled: J,
  dir: w,
  height: w,
  href: w,
  id: w,
  kind: w,
  label: w,
  lang: w,
  loading: w,
  loop: J,
  media: w,
  muted: J,
  poster: w,
  rel: w,
  role: w,
  rowspan: te,
  scope: w,
  sizes: w,
  span: te,
  start: te,
  style: ze,
  src: w,
  srclang: w,
  srcset: w,
  tabindex: w,
  target: w,
  title: w,
  type: w,
  width: w
}), ot = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function ue() {
  return ue = Object.assign || function(i) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (i[n] = a[n]);
    }
    return i;
  }, ue.apply(this, arguments);
}
function We({
  attributes: i = {},
  className: t,
  children: a = null,
  selfClose: n = !1,
  tagName: o
}) {
  const s = o;
  return n ? /* @__PURE__ */ e.createElement(s, ue({
    className: t
  }, i)) : /* @__PURE__ */ e.createElement(s, ue({
    className: t
  }, i), a);
}
class st {
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
var lt = /["'&<>]/, it = ct;
function ct(i) {
  var t = "" + i, a = lt.exec(t);
  if (!a)
    return t;
  var n, o = "", s = 0, m = 0;
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
    m !== s && (o += t.substring(m, s)), m = s + 1, o += n;
  }
  return m !== s ? o + t.substring(m, s) : o;
}
const dt = /* @__PURE__ */ Ke(it);
function U(i, t, a) {
  return t in i ? Object.defineProperty(i, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : i[t] = a, i;
}
const ut = /(url|image|image-set)\(/i;
class mt extends st {
  attribute(t, a) {
    return t === "style" && Object.keys(a).forEach((n) => {
      String(a[n]).match(ut) && delete a[n];
    }), a;
  }
}
const we = 1, pt = 3, ht = /^<(!doctype|(html|head|body)(\s|>))/i, ft = /^(aria-|data-|\w+:)/iu, Et = /{{{(\w+)\/?}}}/;
function gt() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class bt {
  constructor(t, a = {}, n = [], o = []) {
    var s;
    if (U(this, "allowed", void 0), U(this, "banned", void 0), U(this, "blocked", void 0), U(this, "container", void 0), U(this, "content", []), U(this, "props", void 0), U(this, "matchers", void 0), U(this, "filters", void 0), U(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && t && typeof t != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = a, this.matchers = n, this.filters = [...o, new mt()], this.keyIndex = -1, this.container = this.createContainer(t || ""), this.allowed = new Set((s = a.allowList) !== null && s !== void 0 ? s : nt), this.banned = new Set(at), this.blocked = new Set(a.blockList);
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
    let s = t, m = 0, d = null;
    return this.matchers.forEach((r) => {
      const b = r.asTag().toLowerCase(), f = this.getTagConfig(b);
      if (o[r.inverseName] || !this.isTagAllowed(b) || !this.canRenderChild(a, f))
        return;
      let N = "";
      for (; s && (d = r.match(s)); ) {
        const {
          index: c,
          length: v,
          match: p,
          valid: S,
          void: h,
          ...A
        } = d, u = r.propName + String(m);
        c > 0 && (N += s.slice(0, c)), S ? (N += h ? `{{{${u}/}}}` : `{{{${u}}}}${p}{{{/${u}}}}`, this.keyIndex += 1, m += 1, n[u] = {
          children: p,
          matcher: r,
          props: {
            ...o,
            ...A,
            key: this.keyIndex
          }
        }) : N += p, r.greedy ? (s = N + s.slice(c + v), N = "") : s = s.slice(c + (v || p.length));
      }
      r.greedy || (s = N + s);
    }), m === 0 ? t : this.replaceTokens(s, n);
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
    const o = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || gt)();
    if (!o)
      return;
    const s = (a = this.props.containerTagName) !== null && a !== void 0 ? a : "body", m = s === "body" || s === "fragment" ? o.body : o.createElement(s);
    if (t.match(ht)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      m.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? dt(t) : t);
    return m;
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
    return t.nodeType !== we || !t.attributes || ([...t.attributes].forEach((s) => {
      const {
        name: m,
        value: d
      } = s, r = m.toLowerCase(), b = Ne[r] || Ne[m];
      if (!this.isSafe(t) || !r.match(ft) && (!a && (!b || b === rt) || r.startsWith("on") || d.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let f = r === "style" ? this.extractStyleAttribute(t) : d;
      b === J ? f = !0 : b === te ? f = Number.parseFloat(String(f)) : b !== ze && (f = String(f)), n[ot[r] || r] = this.applyAttributeFilters(r, f), o += 1;
    }), o === 0) ? null : n;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(t) {
    const a = {};
    return Array.from(t.style).forEach((n) => {
      const o = t.style[n];
      (typeof o == "string" || typeof o == "number") && (a[n.replace(/-([a-z])/g, (s, m) => String(m).toUpperCase())] = o);
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
      transform: m,
      transformOnlyAllowList: d
    } = this.props;
    let r = [], b = "";
    return [...t.childNodes].forEach((f) => {
      if (f.nodeType === we) {
        const c = f.nodeName.toLowerCase(), v = this.getTagConfig(c);
        b && (r.push(b), b = "");
        const p = this.applyNodeFilters(c, f);
        if (!p)
          return;
        let S;
        if (m && !(d && !this.isTagAllowed(c))) {
          this.keyIndex += 1;
          const h = this.keyIndex;
          S = this.parseNode(p, v);
          const A = m(p, S, v);
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
        if (!(n || o && c !== "br") && this.isTagAllowed(c) && (s || this.canRenderChild(a, v))) {
          var N;
          this.keyIndex += 1;
          const h = this.extractAttributes(p), A = {
            tagName: c
          };
          h && (A.attributes = h), v.void && (A.selfClose = v.void), r.push(/* @__PURE__ */ e.createElement(We, {
            ...A,
            key: this.keyIndex
          }, (N = S) !== null && N !== void 0 ? N : this.parseNode(p, v)));
        } else
          r = [...r, ...this.parseNode(p, v.tagName ? v : a)];
      } else if (f.nodeType === pt) {
        const c = n && !o ? f.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(f.textContent || "", a)
        );
        Array.isArray(c) ? r = [...r, ...c] : b += c;
      }
    }), b && r.push(b), r;
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
    for (; s = o.match(Et); ) {
      const [m, d] = s, r = s.index, b = m.includes("/");
      if (process.env.NODE_ENV !== "production" && !a[d])
        throw new Error(`Token "${d}" found but no matching element to replace with.`);
      r > 0 && (n.push(o.slice(0, r)), o = o.slice(r));
      const {
        children: f,
        matcher: N,
        props: c
      } = a[d];
      let v;
      if (b)
        v = m.length, n.push(N.createElement(f, c));
      else {
        const p = o.match(new RegExp(`{{{/${d}}}}`));
        if (process.env.NODE_ENV !== "production" && !p)
          throw new Error(`Closing token missing for interpolated element "${d}".`);
        v = p.index + p[0].length, n.push(N.createElement(this.replaceTokens(o.slice(m.length, p.index), a), c));
      }
      o = o.slice(v);
    }
    return o.length > 0 && n.push(o), n.length === 0 ? "" : n.length === 1 && typeof n[0] == "string" ? n[0] : n;
  }
}
function vt(i) {
  var t;
  const {
    attributes: a,
    className: n,
    containerTagName: o,
    content: s,
    emptyContent: m,
    parsedContent: d,
    tagName: r,
    noWrap: b
  } = i, f = (t = o ?? r) !== null && t !== void 0 ? t : "span", N = f === "fragment" ? !0 : b;
  let c;
  if (d)
    c = d;
  else {
    const v = new bt(s ?? "", i).parse();
    v.length > 0 && (c = v);
  }
  return c || (c = m), N ? /* @__PURE__ */ e.createElement(e.Fragment, null, c) : /* @__PURE__ */ e.createElement(We, {
    attributes: a,
    className: n,
    tagName: f
  }, c);
}
const Ge = C.createContext({});
const yt = ({ conditionControls: i, conditionLookup: t, conditionSettings: a, conditionIndex: n, removeCondition: o, selectedColumn: s, updateConditionsList: m }) => {
  var A;
  const [d, r] = i, b = d[n], f = (u, x) => {
    const H = [...d];
    H[u] = x, r(H);
  }, c = Object.keys(t).filter((u) => u !== s), { columnName: v, isOrIsNotEqualTo: p, value: S } = a, h = (u, x) => {
    const H = O.cloneDeep(a);
    x === "columnName" && (H.value = ""), H[x] = u, m(H, n);
  };
  return b ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => {
        const u = [...d];
        u[n] = !1, r(u);
      }
    },
    /* @__PURE__ */ e.createElement(X, { display: "caretDown" })
  ), /* @__PURE__ */ e.createElement("button", { className: "btn btn-danger btn-sm mt-0 ml-2", onClick: () => o(n) }, "Remove")), /* @__PURE__ */ e.createElement("div", { id: `condition_${n}` }, /* @__PURE__ */ e.createElement("label", { className: "d-block" }, /* @__PURE__ */ e.createElement("span", null, "Condition : "), /* @__PURE__ */ e.createElement("div", { className: "pt-1" }, /* @__PURE__ */ e.createElement("select", { className: "ml-1", value: v, onChange: (u) => h(u.target.value, "columnName") }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Select"), c == null ? void 0 : c.map((u) => /* @__PURE__ */ e.createElement("option", { key: u, value: u }, u))), /* @__PURE__ */ e.createElement("select", { className: "ml-1", value: p, onChange: (u) => h(u.target.value, "isOrIsNotEqualTo") }, /* @__PURE__ */ e.createElement("option", { value: "is" }, "is"), /* @__PURE__ */ e.createElement("option", { value: "isNot" }, "is not")), /* @__PURE__ */ e.createElement("select", { className: "ml-1", value: S, onChange: (u) => h(u.target.value, "value") }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Select"), (A = t[v]) == null ? void 0 : A.map((u) => /* @__PURE__ */ e.createElement("option", { key: u, value: u }, u))))))) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => f(n, !0) }, /* @__PURE__ */ e.createElement(X, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", S ? `${v} ${p === "is" ? "is" : "is not"} ${S}` : "New Condition")));
}, Nt = ({ controls: i, data: t, deleteVariable: a, updateVariableArray: n, variableConfig: o, variableIndex: s }) => {
  const [m, d] = i, r = m[s], b = (E, k) => {
    d({ openVariableControls: m, [E]: k });
  }, f = C.useState([]), N = Object.keys((t == null ? void 0 : t[0]) || {}), [c, v] = C.useState(o.columnName), [p, S] = C.useState(o.conditions), [h, A] = C.useState(o.name), [u, x] = C.useState(o.addCommas), H = C.useMemo(() => N.reduce((E, k) => (E[k] = O.uniq(t.map((_) => _[k])), E), {}), [N]), R = () => {
    x(!u);
  }, M = (E) => {
    v(E), S([]);
  }, Z = (E, k) => {
    const { columnName: _, isOrIsNotEqualTo: g, value: I } = E, l = O.cloneDeep(p);
    l[k] = {
      columnName: _,
      isOrIsNotEqualTo: g,
      value: I
    }, S(l);
  }, ee = (E) => {
    const k = O.cloneDeep(p);
    k.splice(E, 1), S(k);
  }, G = () => {
    S([
      ...p,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [E, k] = f, _ = [...E];
    _[p.length + 1] = !0, k(_);
  }, B = () => {
    const E = p.filter((_) => _.columnName !== "" && _.value !== ""), k = {
      columnName: c,
      conditions: E,
      name: h,
      tag: `{{${h}}}`,
      addCommas: u
    };
    n(k, s), b(s, !1);
  }, F = h === "", j = F || c === "";
  return /* @__PURE__ */ e.createElement(e.Fragment, null, r ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: s }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: B, disabled: j }, /* @__PURE__ */ e.createElement(X, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm mt-0 ml-2",
      onClick: (E) => {
        E.preventDefault(), a(s);
      }
    },
    "Delete"
  )), /* @__PURE__ */ e.createElement("label", { className: "d-block" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Variable Name:"), /* @__PURE__ */ e.createElement("input", { className: `variable-${s} ml-1`, type: "text", value: h, onChange: (E) => A(E.target.value) })), /* @__PURE__ */ e.createElement("div", { className: "pt-2" }, /* @__PURE__ */ e.createElement("label", { className: "d-block" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column:"), /* @__PURE__ */ e.createElement("select", { className: `variable-${s} ml-1`, onChange: (E) => M(E.target.value), value: c, disabled: F }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Select"), N.map((E) => /* @__PURE__ */ e.createElement("option", { key: E, value: E }, E))))), /* @__PURE__ */ e.createElement("div", { className: "pt-2" }, /* @__PURE__ */ e.createElement(
    et,
    {
      value: u,
      label: "Add Commas to Number",
      updateField: R,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(X, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Selecting this option will add commas to the numeric value.")))
    }
  )), /* @__PURE__ */ e.createElement("label", { className: "d-block py-2" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Conditions:"), p.map((E, k) => /* @__PURE__ */ e.createElement("div", { className: "condition-section mt-2" }, /* @__PURE__ */ e.createElement(
    yt,
    {
      key: h + "-condition-" + k,
      conditionControls: f,
      conditionLookup: H,
      conditionSettings: E,
      conditionIndex: k,
      removeCondition: ee,
      selectedColumn: c,
      updateConditionsList: Z
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "mt-1" }, /* @__PURE__ */ e.createElement("button", { onClick: G, disabled: j }, "Add Condition"), /* @__PURE__ */ e.createElement("button", { className: "ml-2", onClick: B, disabled: j }, "Done"))) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("button", { onClick: () => b(s, !0) }, /* @__PURE__ */ e.createElement(X, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", h ? `${h}` : "New Variable"))));
}, wt = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], Tt = () => {
  const { config: i, data: t, isDashboard: a, loading: n, setParentConfig: o, updateConfig: s } = C.useContext(Ge), { contentEditor: m, theme: d, visual: r } = i, { inlineHTML: b, markupVariables: f, srcUrl: N, title: c, useInlineHTML: v } = m, [p, S] = C.useState(!0), h = Qe(i, s, !0), A = (t == null ? void 0 : t[0]) !== void 0, u = C.useState([]);
  C.useEffect(() => {
    if (o) {
      const g = H();
      o(g);
    }
  }, [i]), C.useEffect(() => {
    const g = { ...i };
    delete g.newViz, s(g);
  }, []);
  const x = () => {
    S(!p), s({
      ...i,
      showEditorPanel: !p
    });
  }, H = () => {
    const g = JSON.parse(JSON.stringify(i));
    return delete g.newViz, delete g.runtime, g;
  }, [R, M] = C.useState([...f]), [Z, ee] = C.useState(!1), G = C.useRef(null), [B, F] = u, j = () => {
    const g = [...O.cloneDeep(R)], I = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    F({ ...B, [R.length + 1]: !0 }), g.push(I), M(g), ee(!Z);
  }, E = (g, I) => {
    const l = O.cloneDeep(R);
    l[I] = g, M(l), h("contentEditor", null, "markupVariables", l);
  }, k = (g) => {
    const I = O.cloneDeep(R);
    I.splice(g, 1), M(I), h("contentEditor", null, "markupVariables", I);
    const l = O.cloneDeep(B);
    delete l[g], F(l);
  }, _ = /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ne.Section, { title: "General" }, /* @__PURE__ */ e.createElement(pe, { value: c || "", section: "contentEditor", fieldName: "title", label: "Title", placeholder: "Markup Include Title", updateField: h })), /* @__PURE__ */ e.createElement(ne.Section, { title: "Content Editor" }, /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Enter Markup"), /* @__PURE__ */ e.createElement(Y, { inline: !0, value: v, section: "contentEditor", fieldName: "useInlineHTML", label: "Use Inline HTML ", updateField: h }), /* @__PURE__ */ e.createElement("div", { className: "column-edit" }, v ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { ref: G }, /* @__PURE__ */ e.createElement(pe, { value: b, section: "contentEditor", fieldName: "inlineHTML", label: "HTML", placeholder: "Add HTML here", type: "textarea", rows: 10, updateField: h }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" })), /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Variables", /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(X, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML")))), A === !1 && /* @__PURE__ */ e.createElement("span", { className: "need-data-source-prompt" }, "To use variables, add data source."), R && R.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "section-border" }, R == null ? void 0 : R.map((g, I) => /* @__PURE__ */ e.createElement(Nt, { key: `${g.name}-${I}`, controls: u, data: t, deleteVariable: k, updateVariableArray: E, variableConfig: g, variableIndex: I }))), /* @__PURE__ */ e.createElement("div", { className: "mb-1 d-flex" }, /* @__PURE__ */ e.createElement("button", { className: "btn btn-primary", onClick: j, disabled: !A }, "Create New Variable")))) : /* @__PURE__ */ e.createElement(pe, { value: N || "", section: "contentEditor", fieldName: "srcUrl", label: "Source URL;", placeholder: "https://www.example.com/file.html", updateField: h }))), /* @__PURE__ */ e.createElement(ne.Section, { title: "Visual" }, /* @__PURE__ */ e.createElement("div", { className: "input-group" }, /* @__PURE__ */ e.createElement("label", null, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, wt.map((g) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: g,
      key: g,
      onClick: () => {
        s({ ...i, theme: g });
      },
      className: d === g ? "selected " + g : g
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ e.createElement(Y, { value: r.border, section: "visual", fieldName: "border", label: "Display Border ", updateField: h }), /* @__PURE__ */ e.createElement(Y, { value: r.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme ", updateField: h }), /* @__PURE__ */ e.createElement(Y, { value: r.accent, section: "visual", fieldName: "accent", label: "Use Accent Style ", updateField: h }), /* @__PURE__ */ e.createElement(Y, { value: r.background, section: "visual", fieldName: "background", label: "Use Theme Background Color ", updateField: h }), /* @__PURE__ */ e.createElement(Y, { value: r.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color ", updateField: h }))));
  return n && !(i != null && i.showEditorPanel) ? null : /* @__PURE__ */ e.createElement(Fe, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(he.Sidebar, { displayPanel: p, isDashboard: a, title: "Configure Markup Include", onBackClick: x }, _));
}, Te = {
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
}, Ct = (i, t) => {
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
const kt = ({ configUrl: i, config: t, isDashboard: a = !0, isEditor: n = !1, setConfig: o }) => {
  const s = { config: t, loading: !0, urlMarkup: "", markupError: null, errorMessage: null, coveLoadedHasRan: !1 }, [m, d] = C.useReducer(Ct, s), { config: r, loading: b, urlMarkup: f, markupError: N, errorMessage: c, coveLoadedHasRan: v } = m, p = C.useRef(), { innerContainerClasses: S, contentClasses: h } = Je(r || {}), { contentEditor: A, theme: u } = r || {}, x = t == null ? void 0 : t.data, { inlineHTML: H, markupVariables: R, srcUrl: M, title: Z, useInlineHTML: ee } = A || {}, G = (l) => {
    Object.keys(Te).forEach((T) => {
      l[T] && typeof l[T] == "object" && !Array.isArray(l[T]) && (l[T] = { ...Te[T], ...l[T] });
    }), l.runtime = {}, l.runtime.uniqueId = Date.now(), l.runtime.editorErrorMessage = "", d({ type: "SET_CONFIG", payload: l });
  }, B = C.useCallback(async () => {
    let l = t || await (await fetch(i)).json(), T = l.data ?? {};
    l.dataUrl && (T = await (await fetch(l.dataUrl)).json()), l.data = T;
    const V = { ...await Xe(l) };
    G({ ...t, ...V }), d({ type: "SET_LOADING", payload: !1 });
  }, []);
  C.useEffect(() => {
    if (N) {
      let l = N, T = "There was a problem retrieving the content from " + M + ". ", V = /https?:\/\//g;
      l === 404 && !M.match(V) && (l = "proto"), T += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[l], d({ type: "SET_ERROR_MESSAGE", payload: T });
    } else
      d({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [N]);
  const F = C.useCallback(async () => {
    if (d({ type: "SET_MARKUP_ERROR", payload: null }), M)
      if (M === "#example")
        d({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await Ye.get(M).then((l) => {
            l.data && d({ type: "SET_URL_MARKUP", payload: l.data });
          });
        } catch (l) {
          l.response ? d({ type: "SET_MARKUP_ERROR", payload: l.response.status }) : l.request && d({ type: "SET_MARKUP_ERROR", payload: 200 }), d({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      d({ type: "SET_URL_MARKUP", payload: "" });
  }, [M]), j = (l, T) => {
    const { columnName: V, isOrIsNotEqualTo: q, value: D } = T[0], K = q === "is" ? l.filter(($) => $[V] === D) : l.filter(($) => $[V] !== D);
    return T.shift(), T.length === 0 ? K : j(K, T);
  }, E = (l) => {
    if (O.isEmpty(R))
      return l;
    const T = /{{(.*?)}}/g;
    return l.replace(T, (q) => {
      const D = R.filter((me) => me.tag === q)[0];
      if (D === void 0)
        return [q];
      const K = D && D.conditions.length === 0 ? x : j(x, [...D.conditions]), $ = O.uniq(K == null ? void 0 : K.map((me) => me[D.columnName])), be = [], ve = n ? "or" : "and", ae = $.length;
      ae === 2 && $.push($.join(` ${ve} `)), ae > 2 && ($[ae - 1] = `${ve} ${$[ae - 1]}`), be.push($.join(", "));
      let z = be[0];
      return D.addCommas && !isNaN(parseFloat(z)) && (z = parseFloat(z), z = z.toLocaleString("en-US", { useGrouping: !0 })), `<span class="cove-tooltip-variable">${q}<span class="cove-tooltip-value"><span class="font-weight-bold display-Info-message">One or more of the following values will appear in the place of this variable placeholder:</span><br/>${z}</span></span><span class="cove-markup-include-variable-value">${z}</span>`;
    });
  }, k = (l) => {
    let T, V = !1;
    return l && l !== "" && l !== null && (l.toString().match(/<body[^>]*>/i) && l.toString().match(/<\/body\s*>/i) ? (V = !0, T = l.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : T = l.toString()), V ? T[1] : T;
  };
  C.useEffect(() => {
    B().catch((l) => console.log(l)), ye("cove_loaded", { loadConfigHasRun: !0 });
  }, []), C.useEffect(() => {
    r && !v && p && (ye("cove_loaded", { config: r }), d({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [r, p]), C.useEffect(() => {
    B().catch((l) => console.log(l));
  }, [t == null ? void 0 : t.data]), C.useEffect(() => {
    F().catch((l) => console.log(l));
  }, [F]);
  let _ = /* @__PURE__ */ e.createElement(Ze, null);
  const g = ee ? E(H) : k(f);
  b === !1 && (_ = /* @__PURE__ */ e.createElement(e.Fragment, null, n && /* @__PURE__ */ e.createElement(Tt, null), /* @__PURE__ */ e.createElement(he.Responsive, { isEditor: n }, /* @__PURE__ */ e.createElement("div", { className: "markup-include-content-container cove-component__content no-borders" }, /* @__PURE__ */ e.createElement("div", { className: `markup-include-component ${h.join(" ")}` }, /* @__PURE__ */ e.createElement(tt, { title: Z, isDashboard: a, classes: [`${u}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: `${S.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, !N && /* @__PURE__ */ e.createElement(vt, { allowElements: !!f, content: g }), N && M && /* @__PURE__ */ e.createElement("div", { className: "warning" }, c))))))));
  const I = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, r == null ? void 0 : r.runtime.editorErrorMessage)));
  return /* @__PURE__ */ e.createElement(Fe, { component: "CdcMarkupInclude" }, /* @__PURE__ */ e.createElement(Ge.Provider, { value: { config: r, updateConfig: G, loading: b, data: x, setParentConfig: o, isDashboard: a } }, !(r != null && r.newViz) && (r == null ? void 0 : r.runtime) && (r == null ? void 0 : r.runtime.editorErrorMessage) && /* @__PURE__ */ e.createElement(I, null), /* @__PURE__ */ e.createElement(he.VisualizationWrapper, { config: r, isEditor: n, showEditorPanel: r == null ? void 0 : r.showEditorPanel }, _)));
}, At = {
  inlineHTML: "<h2>Inline HTML</h2>",
  markupVariables: [],
  showHeader: !0,
  srcUrl: "#example",
  title: "Markup Include",
  useInlineHTML: !1
}, St = [], Lt = {}, Rt = !0, _t = "theme-blue", It = "markup-include", Mt = null, xt = {
  border: !1,
  accent: !1,
  background: !1,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Ht = {
  contentEditor: At,
  data: St,
  legend: Lt,
  newViz: Rt,
  theme: _t,
  type: It,
  runtime: Mt,
  visual: xt
}, Vt = {
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
}, $t = [
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
], Ot = {}, Pt = !0, Dt = "theme-blue", Ut = "markup-include", Bt = null, Ft = {
  border: !1,
  accent: !1,
  background: !1,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, jt = {
  contentEditor: Vt,
  data: $t,
  legend: Ot,
  newViz: Pt,
  theme: Dt,
  type: Ut,
  runtime: Bt,
  visual: Ft
}, qt = {
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
}, zt = [
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
], Wt = {}, Gt = !0, Kt = "theme-amber", Yt = "markup-include", Jt = null, Xt = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Qt = {
  contentEditor: qt,
  data: zt,
  legend: Wt,
  newViz: Gt,
  theme: Kt,
  type: Yt,
  runtime: Jt,
  visual: Xt
}, Zt = {
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
}, ea = [
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
], ta = {}, aa = !0, na = "theme-amber", ra = "markup-include", oa = null, sa = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, la = {
  contentEditor: Zt,
  data: ea,
  legend: ta,
  newViz: aa,
  theme: na,
  type: ra,
  runtime: oa,
  visual: sa
}, ia = {
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
}, ca = [
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
], da = {}, ua = !0, ma = "theme-purple", pa = "markup-include", ha = null, fa = {
  border: !0,
  accent: !0,
  background: !1,
  hideBackgroundColor: !0,
  borderColorTheme: !1
}, Ea = !0, ga = !0, ba = {
  contentEditor: ia,
  data: ca,
  legend: da,
  newViz: ua,
  theme: ma,
  type: pa,
  runtime: ha,
  visual: fa,
  isEditor: Ea,
  showEditorPanel: ga
}, va = {
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
}, ya = [
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
], Na = {}, wa = !0, Ta = "theme-slate", Ca = "markup-include", ka = null, Aa = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Sa = !0, La = !0, Ra = {
  contentEditor: va,
  data: ya,
  legend: Na,
  newViz: wa,
  theme: Ta,
  type: Ca,
  runtime: ka,
  visual: Aa,
  isEditor: Sa,
  showEditorPanel: La
}, Ja = {
  title: "Components/Pages/Markup Include",
  component: kt
}, oe = {
  args: {
    config: Ht,
    isEditor: !1
  }
}, se = {
  args: {
    config: jt,
    isEditor: !1
  }
}, le = {
  args: {
    config: Qt,
    isEditor: !1
  }
}, ie = {
  args: {
    config: la,
    isEditor: !1
  }
}, ce = {
  args: {
    config: ba,
    isEditor: !1
  }
}, de = {
  args: {
    config: Ra,
    isEditor: !1
  }
};
var Ce, ke, Ae;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Ce = oe.parameters) == null ? void 0 : Ce.docs,
    source: {
      originalSource: `{
  args: {
    config: primary,
    isEditor: false
  }
}`,
      ...(Ae = (ke = oe.parameters) == null ? void 0 : ke.docs) == null ? void 0 : Ae.source
    }
  }
};
var Se, Le, Re;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(Se = se.parameters) == null ? void 0 : Se.docs,
    source: {
      originalSource: `{
  args: {
    config: noConditions,
    isEditor: false
  }
}`,
      ...(Re = (Le = se.parameters) == null ? void 0 : Le.docs) == null ? void 0 : Re.source
    }
  }
};
var _e, Ie, Me;
le.parameters = {
  ...le.parameters,
  docs: {
    ...(_e = le.parameters) == null ? void 0 : _e.docs,
    source: {
      originalSource: `{
  args: {
    config: withConditions,
    isEditor: false
  }
}`,
      ...(Me = (Ie = le.parameters) == null ? void 0 : Ie.docs) == null ? void 0 : Me.source
    }
  }
};
var xe, He, Ve;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...(xe = ie.parameters) == null ? void 0 : xe.docs,
    source: {
      originalSource: `{
  args: {
    config: buttonAndText,
    isEditor: false
  }
}`,
      ...(Ve = (He = ie.parameters) == null ? void 0 : He.docs) == null ? void 0 : Ve.source
    }
  }
};
var $e, Oe, Pe;
ce.parameters = {
  ...ce.parameters,
  docs: {
    ...($e = ce.parameters) == null ? void 0 : $e.docs,
    source: {
      originalSource: `{
  args: {
    config: iconNoText,
    isEditor: false
  }
}`,
      ...(Pe = (Oe = ce.parameters) == null ? void 0 : Oe.docs) == null ? void 0 : Pe.source
    }
  }
};
var De, Ue, Be;
de.parameters = {
  ...de.parameters,
  docs: {
    ...(De = de.parameters) == null ? void 0 : De.docs,
    source: {
      originalSource: `{
  args: {
    config: imageWithText,
    isEditor: false
  }
}`,
      ...(Be = (Ue = de.parameters) == null ? void 0 : Ue.docs) == null ? void 0 : Be.source
    }
  }
};
const Xa = ["Primary", "No_Conditions", "With_conditions", "Button_and_text", "icon_no_text", "image_with_text"];
export {
  ie as Button_and_text,
  se as No_Conditions,
  oe as Primary,
  le as With_conditions,
  Xa as __namedExportsOrder,
  Ja as default,
  ce as icon_no_text,
  de as image_with_text
};
