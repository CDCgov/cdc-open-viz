import { R as i, r as T } from "./storybook-index-BmAYD2Ot.es.js";
import { _ as O } from "./storybook-lodash-QEop74tm.es.js";
import { g as Ge } from "./storybook-_commonjsHelpers-CT_km90n.es.js";
import { a as Ke } from "./storybook-axios-BiqJCU1V.es.js";
import { u as Ye, p as ve } from "./storybook-useDataVizClasses-BwbaCKu-.es.js";
import { L as he, a as Je } from "./storybook-coveUpdateWorker-D1xxZDqt.es.js";
import { u as Xe } from "./storybook-updateFieldFactory-BcswjCX8.es.js";
import { I as me, a as K } from "./storybook-editor-oEm-zD-g.es.js";
import { E as Be, L as Qe } from "./storybook-Loading-DS8g8-4Q.es.js";
import { a as Z } from "./storybook-Icon-B5TlldJZ.es.js";
import { T as pe } from "./storybook-Tooltip-BxtpAmS8.es.js";
import { A as te } from "./storybook-Accordion-BJt7AwfQ.es.js";
import { T as Ze } from "./storybook-index-R_DM8DTt.es.js";
const v = 1, je = 2, Fe = 4, S = 8, fe = 16, ae = 32, P = 64, Ee = {
  a: {
    content: v | S,
    self: !1,
    type: v | S | ae | P
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: v | S,
    void: !0
  },
  body: {
    content: v | je | Fe | S | fe | ae | P
  },
  button: {
    content: S,
    type: v | S | ae | P
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
    type: v | S | fe
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: S,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: S,
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
    content: S,
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
    type: v | S,
    void: !0
  }
};
function z(l) {
  return (e) => {
    Ee[e] = {
      ...l,
      ...Ee[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(z({
  content: v,
  type: v | P
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(z({
  content: S,
  type: v | S | P
}));
["p", "pre"].forEach(z({
  content: S,
  type: v | P
}));
["s", "small", "span", "del", "ins"].forEach(z({
  content: S,
  type: v | S
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(z({
  content: v,
  type: v | je | P
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(z({
  content: S,
  type: v | Fe | P
}));
["audio", "canvas", "iframe", "img", "video"].forEach(z({
  type: v | S | fe | P
}));
const ge = Object.freeze(Ee), et = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], tt = Object.keys(ge).filter((l) => l !== "canvas" && l !== "iframe"), N = 1, at = 2, Q = 3, Y = 4, ze = 5, ye = Object.freeze({
  alt: N,
  cite: N,
  class: N,
  colspan: Q,
  controls: Y,
  datetime: N,
  default: Y,
  disabled: Y,
  dir: N,
  height: N,
  href: N,
  id: N,
  kind: N,
  label: N,
  lang: N,
  loading: N,
  loop: Y,
  media: N,
  muted: Y,
  poster: N,
  rel: N,
  role: N,
  rowspan: Q,
  scope: N,
  sizes: N,
  span: Q,
  start: Q,
  style: ze,
  src: N,
  srclang: N,
  srcset: N,
  tabindex: N,
  target: N,
  title: N,
  type: N,
  width: N
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
  return ce = Object.assign || function(l) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (l[a] = t[a]);
    }
    return l;
  }, ce.apply(this, arguments);
}
function We({
  attributes: l = {},
  className: e,
  children: t = null,
  selfClose: a = !1,
  tagName: r
}) {
  const o = r;
  return a ? /* @__PURE__ */ i.createElement(o, ce({
    className: e
  }, l)) : /* @__PURE__ */ i.createElement(o, ce({
    className: e
  }, l), t);
}
class rt {
  /**
   * Filter and clean an HTML attribute value.
   */
  attribute(e, t) {
    return t;
  }
  /**
   * Filter and clean an HTML node.
   */
  node(e, t) {
    return t;
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
function lt(l) {
  var e = "" + l, t = ot.exec(e);
  if (!t)
    return e;
  var a, r = "", o = 0, u = 0;
  for (o = t.index; o < e.length; o++) {
    switch (e.charCodeAt(o)) {
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
    u !== o && (r += e.substring(u, o)), u = o + 1, r += a;
  }
  return u !== o ? r + e.substring(u, o) : r;
}
const it = /* @__PURE__ */ Ge(st);
function D(l, e, t) {
  return e in l ? Object.defineProperty(l, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : l[e] = t, l;
}
const ct = /(url|image|image-set)\(/i;
class dt extends rt {
  attribute(e, t) {
    return e === "style" && Object.keys(t).forEach((a) => {
      String(t[a]).match(ct) && delete t[a];
    }), t;
  }
}
const Re = 1, ut = 3, mt = /^<(!doctype|(html|head|body)(\s|>))/i, pt = /^(aria-|data-|\w+:)/iu, ht = /{{{(\w+)\/?}}}/;
function ft() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class Et {
  constructor(e, t = {}, a = [], r = []) {
    var o;
    if (D(this, "allowed", void 0), D(this, "banned", void 0), D(this, "blocked", void 0), D(this, "container", void 0), D(this, "content", []), D(this, "props", void 0), D(this, "matchers", void 0), D(this, "filters", void 0), D(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = t, this.matchers = a, this.filters = [...r, new dt()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = t.allowList) !== null && o !== void 0 ? o : tt), this.banned = new Set(et), this.blocked = new Set(t.blockList);
  }
  /**
   * Loop through and apply all registered attribute filters.
   */
  applyAttributeFilters(e, t) {
    return this.filters.reduce((a, r) => a !== null && typeof r.attribute == "function" ? r.attribute(e, a) : a, t);
  }
  /**
   * Loop through and apply all registered node filters.
   */
  applyNodeFilters(e, t) {
    return this.filters.reduce((a, r) => a !== null && typeof r.node == "function" ? r.node(e, a) : a, t);
  }
  /**
   * Loop through and apply all registered matchers to the string.
   * If a match is found, create a React element, and build a new array.
   * This array allows React to interpolate and render accordingly.
   */
  applyMatchers(e, t) {
    const a = {}, {
      props: r
    } = this;
    let o = e, u = 0, d = null;
    return this.matchers.forEach((n) => {
      const g = n.asTag().toLowerCase(), E = this.getTagConfig(g);
      if (r[n.inverseName] || !this.isTagAllowed(g) || !this.canRenderChild(t, E))
        return;
      let y = "";
      for (; o && (d = n.match(o)); ) {
        const {
          index: c,
          length: b,
          match: p,
          valid: A,
          void: h,
          ...k
        } = d, m = n.propName + String(u);
        c > 0 && (y += o.slice(0, c)), A ? (y += h ? `{{{${m}/}}}` : `{{{${m}}}}${p}{{{/${m}}}}`, this.keyIndex += 1, u += 1, a[m] = {
          children: p,
          matcher: n,
          props: {
            ...r,
            ...k,
            key: this.keyIndex
          }
        }) : y += p, n.greedy ? (o = y + o.slice(c + b), y = "") : o = o.slice(c + (b || p.length));
      }
      n.greedy || (o = y + o);
    }), u === 0 ? e : this.replaceTokens(o, a);
  }
  /**
   * Determine whether the child can be rendered within the parent.
   */
  canRenderChild(e, t) {
    return !e.tagName || !t.tagName || e.void ? !1 : e.children.length > 0 ? e.children.includes(t.tagName) : e.invalid.length > 0 && e.invalid.includes(t.tagName) ? !1 : t.parent.length > 0 ? t.parent.includes(e.tagName) : !e.self && e.tagName === t.tagName ? !1 : !!(e && e.content & t.type);
  }
  /**
   * Convert line breaks in a string to HTML `<br/>` tags.
   * If the string contains HTML, we should not convert anything,
   * as line breaks should be handled by `<br/>`s in the markup itself.
   */
  convertLineBreaks(e) {
    const {
      noHtml: t,
      disableLineBreaks: a
    } = this.props;
    if (t || a || e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))
      return e;
    let r = e.replace(/\r\n/g, `
`);
    return r = r.replace(/\n{3,}/g, `


`), r = r.replace(/\n/g, "<br/>"), r;
  }
  /**
   * Create a detached HTML document that allows for easy HTML
   * parsing while not triggering scripts or loading external
   * resources.
   */
  createContainer(e) {
    var t;
    const r = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || ft)();
    if (!r)
      return;
    const o = (t = this.props.containerTagName) !== null && t !== void 0 ? t : "body", u = o === "body" || o === "fragment" ? r.body : r.createElement(o);
    if (e.match(mt)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      u.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? it(e) : e);
    return u;
  }
  /**
   * Convert an elements attribute map to an object map.
   * Returns null if no attributes are defined.
   */
  extractAttributes(e) {
    const {
      allowAttributes: t
    } = this.props, a = {};
    let r = 0;
    return e.nodeType !== Re || !e.attributes || ([...e.attributes].forEach((o) => {
      const {
        name: u,
        value: d
      } = o, n = u.toLowerCase(), g = ye[n] || ye[u];
      if (!this.isSafe(e) || !n.match(pt) && (!t && (!g || g === at) || n.startsWith("on") || d.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let E = n === "style" ? this.extractStyleAttribute(e) : d;
      g === Y ? E = !0 : g === Q ? E = Number.parseFloat(String(E)) : g !== ze && (E = String(E)), a[nt[n] || n] = this.applyAttributeFilters(n, E), r += 1;
    }), r === 0) ? null : a;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(e) {
    const t = {};
    return Array.from(e.style).forEach((a) => {
      const r = e.style[a];
      (typeof r == "string" || typeof r == "number") && (t[a.replace(/-([a-z])/g, (o, u) => String(u).toUpperCase())] = r);
    }), t;
  }
  /**
   * Return configuration for a specific tag.
   */
  getTagConfig(e) {
    const t = {
      children: [],
      content: 0,
      invalid: [],
      parent: [],
      self: !0,
      tagName: "",
      type: 0,
      void: !1
    };
    return ge[e] ? {
      ...t,
      ...ge[e],
      tagName: e
    } : t;
  }
  /**
   * Verify that a node is safe from XSS and injection attacks.
   */
  isSafe(e) {
    if (typeof HTMLAnchorElement < "u" && e instanceof HTMLAnchorElement) {
      const t = e.getAttribute("href");
      if (t != null && t.startsWith("#"))
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
  parseNode(e, t) {
    const {
      noHtml: a,
      noHtmlExceptMatchers: r,
      allowElements: o,
      transform: u,
      transformOnlyAllowList: d
    } = this.props;
    let n = [], g = "";
    return [...e.childNodes].forEach((E) => {
      if (E.nodeType === Re) {
        const c = E.nodeName.toLowerCase(), b = this.getTagConfig(c);
        g && (n.push(g), g = "");
        const p = this.applyNodeFilters(c, E);
        if (!p)
          return;
        let A;
        if (u && !(d && !this.isTagAllowed(c))) {
          this.keyIndex += 1;
          const h = this.keyIndex;
          A = this.parseNode(p, b);
          const k = u(p, A, b);
          if (k === null)
            return;
          if (typeof k < "u") {
            n.push(/* @__PURE__ */ i.cloneElement(k, {
              key: h
            }));
            return;
          }
          this.keyIndex = h - 1;
        }
        if (this.banned.has(c))
          return;
        if (!(a || r && c !== "br") && this.isTagAllowed(c) && (o || this.canRenderChild(t, b))) {
          var y;
          this.keyIndex += 1;
          const h = this.extractAttributes(p), k = {
            tagName: c
          };
          h && (k.attributes = h), b.void && (k.selfClose = b.void), n.push(/* @__PURE__ */ i.createElement(We, {
            ...k,
            key: this.keyIndex
          }, (y = A) !== null && y !== void 0 ? y : this.parseNode(p, b)));
        } else
          n = [...n, ...this.parseNode(p, b.tagName ? b : t)];
      } else if (E.nodeType === ut) {
        const c = a && !r ? E.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(E.textContent || "", t)
        );
        Array.isArray(c) ? n = [...n, ...c] : g += c;
      }
    }), g && n.push(g), n;
  }
  /**
   * Deconstruct the string into an array, by replacing custom tokens with React elements,
   * so that React can render it correctly.
   */
  replaceTokens(e, t) {
    if (!e.includes("{{{"))
      return e;
    const a = [];
    let r = e, o = null;
    for (; o = r.match(ht); ) {
      const [u, d] = o, n = o.index, g = u.includes("/");
      if (process.env.NODE_ENV !== "production" && !t[d])
        throw new Error(`Token "${d}" found but no matching element to replace with.`);
      n > 0 && (a.push(r.slice(0, n)), r = r.slice(n));
      const {
        children: E,
        matcher: y,
        props: c
      } = t[d];
      let b;
      if (g)
        b = u.length, a.push(y.createElement(E, c));
      else {
        const p = r.match(new RegExp(`{{{/${d}}}}`));
        if (process.env.NODE_ENV !== "production" && !p)
          throw new Error(`Closing token missing for interpolated element "${d}".`);
        b = p.index + p[0].length, a.push(y.createElement(this.replaceTokens(r.slice(u.length, p.index), t), c));
      }
      r = r.slice(b);
    }
    return r.length > 0 && a.push(r), a.length === 0 ? "" : a.length === 1 && typeof a[0] == "string" ? a[0] : a;
  }
}
function gt(l) {
  var e;
  const {
    attributes: t,
    className: a,
    containerTagName: r,
    content: o,
    emptyContent: u,
    parsedContent: d,
    tagName: n,
    noWrap: g
  } = l, E = (e = r ?? n) !== null && e !== void 0 ? e : "span", y = E === "fragment" ? !0 : g;
  let c;
  if (d)
    c = d;
  else {
    const b = new Et(o ?? "", l).parse();
    b.length > 0 && (c = b);
  }
  return c || (c = u), y ? /* @__PURE__ */ i.createElement(i.Fragment, null, c) : /* @__PURE__ */ i.createElement(We, {
    attributes: t,
    className: a,
    tagName: E
  }, c);
}
const qe = T.createContext({}), bt = ({ conditionControls: l, conditionLookup: e, conditionSettings: t, conditionIndex: a, removeCondition: r, selectedColumn: o, updateConditionsList: u }) => {
  var k;
  const [d, n] = l, g = d[a], E = (m, M) => {
    const x = [...d];
    x[m] = M, n(x);
  }, c = Object.keys(e).filter((m) => m !== o), { columnName: b, isOrIsNotEqualTo: p, value: A } = t, h = (m, M) => {
    const x = O.cloneDeep(t);
    M === "columnName" && (x.value = ""), x[M] = m, u(x, a);
  };
  return g ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        const m = [...d];
        m[a] = !1, n(m);
      }
    },
    /* @__PURE__ */ React.createElement(Z, { display: "caretDown" })
  ), /* @__PURE__ */ React.createElement("button", { className: "btn btn-danger btn-sm mt-0 ml-2", onClick: () => r(a) }, "Remove")), /* @__PURE__ */ React.createElement("div", { id: `condition_${a}` }, /* @__PURE__ */ React.createElement("label", { className: "d-block" }, /* @__PURE__ */ React.createElement("span", null, "Condition : "), /* @__PURE__ */ React.createElement("div", { className: "pt-1" }, /* @__PURE__ */ React.createElement("select", { className: "ml-1", value: b, onChange: (m) => h(m.target.value, "columnName") }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select"), c == null ? void 0 : c.map((m) => /* @__PURE__ */ React.createElement("option", { key: m, value: m }, m))), /* @__PURE__ */ React.createElement("select", { className: "ml-1", value: p, onChange: (m) => h(m.target.value, "isOrIsNotEqualTo") }, /* @__PURE__ */ React.createElement("option", { value: "is" }, "is"), /* @__PURE__ */ React.createElement("option", { value: "isNot" }, "is not")), /* @__PURE__ */ React.createElement("select", { className: "ml-1", value: A, onChange: (m) => h(m.target.value, "value") }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select"), (k = e[b]) == null ? void 0 : k.map((m) => /* @__PURE__ */ React.createElement("option", { key: m, value: m }, m))))))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => E(a, !0) }, /* @__PURE__ */ React.createElement(Z, { display: "caretDown" })), /* @__PURE__ */ React.createElement("span", null, " ", A ? `${b} ${p === "is" ? "is" : "is not"} ${A}` : "New Condition")));
}, vt = ({ controls: l, data: e, deleteVariable: t, updateVariableArray: a, variableConfig: r, variableIndex: o }) => {
  const [u, d] = l, n = u[o], g = (f, C) => {
    d({ openVariableControls: u, [f]: C });
  }, E = T.useState([]), y = Object.keys((e == null ? void 0 : e[0]) || {}), [c, b] = T.useState(r.columnName), [p, A] = T.useState(r.conditions), [h, k] = T.useState(r.name), m = T.useMemo(() => y.reduce((f, C) => (f[C] = O.uniq(e.map((_) => _[C])), f), {}), [y]), M = (f) => {
    b(f), A([]);
  }, x = (f, C) => {
    const { columnName: _, isOrIsNotEqualTo: J, value: X } = f, j = O.cloneDeep(p);
    j[C] = {
      columnName: _,
      isOrIsNotEqualTo: J,
      value: X
    }, A(j);
  }, L = (f) => {
    const C = O.cloneDeep(p);
    C.splice(f, 1), A(C);
  }, I = () => {
    A([
      ...p,
      {
        columnName: "",
        isOrIsNotEqualTo: "is",
        value: ""
      }
    ]);
    const [f, C] = E, _ = [...f];
    _[p.length + 1] = !0, C(_);
  }, W = () => {
    const f = p.filter((_) => _.columnName !== "" && _.value !== ""), C = {
      columnName: c,
      conditions: f,
      name: h,
      tag: `{{${h}}}`
    };
    a(C, o), g(o, !1);
  }, q = h === "", U = q || c === "";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, n ? /* @__PURE__ */ React.createElement("fieldset", { className: "edit-block mb-1", key: o }, /* @__PURE__ */ React.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ React.createElement("button", { onClick: W, disabled: U }, /* @__PURE__ */ React.createElement(Z, { display: "caretUp" })), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm mt-0 ml-2",
      onClick: (f) => {
        f.preventDefault(), t(o);
      }
    },
    "Delete"
  )), /* @__PURE__ */ React.createElement("label", { className: "d-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Variable Name:"), /* @__PURE__ */ React.createElement("input", { className: `variable-${o} ml-1`, type: "text", value: h, onChange: (f) => k(f.target.value) })), /* @__PURE__ */ React.createElement("div", { className: "pt-2" }, /* @__PURE__ */ React.createElement("label", { className: "d-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Column:"), /* @__PURE__ */ React.createElement("select", { className: `variable-${o} ml-1`, onChange: (f) => M(f.target.value), value: c, disabled: q }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select"), y.map((f) => /* @__PURE__ */ React.createElement("option", { key: f, value: f }, f))))), /* @__PURE__ */ React.createElement("label", { className: "d-block py-2" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Conditions:"), p.map((f, C) => /* @__PURE__ */ React.createElement("div", { className: "condition-section mt-2" }, /* @__PURE__ */ React.createElement(
    bt,
    {
      key: h + "-condition-" + C,
      conditionControls: E,
      conditionLookup: m,
      conditionSettings: f,
      conditionIndex: C,
      removeCondition: L,
      selectedColumn: c,
      updateConditionsList: x
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "mt-1" }, /* @__PURE__ */ React.createElement("button", { onClick: I, disabled: U }, "Add Condition"), /* @__PURE__ */ React.createElement("button", { className: "ml-2", onClick: W, disabled: U }, "Done"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => g(o, !0) }, /* @__PURE__ */ React.createElement(Z, { display: "caretDown" })), /* @__PURE__ */ React.createElement("span", null, " ", h ? `${h}` : "New Variable"))));
}, yt = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], Rt = () => {
  const { config: l, data: e, isDashboard: t, loading: a, setParentConfig: r, updateConfig: o } = T.useContext(qe), { contentEditor: u, theme: d, visual: n } = l, { inlineHTML: g, markupVariables: E, srcUrl: y, title: c, useInlineHTML: b } = u, [p, A] = T.useState(!0), h = Xe(l, o, !0), k = (e == null ? void 0 : e[0]) !== void 0, m = T.useState([]);
  T.useEffect(() => {
    if (r) {
      const R = x();
      r(R);
    }
  }, [l]), T.useEffect(() => {
    const R = { ...l };
    delete R.newViz, o(R);
  }, []);
  const M = () => {
    A(!p), o({
      ...l,
      showEditorPanel: !p
    });
  }, x = () => {
    const R = JSON.parse(JSON.stringify(l));
    return delete R.newViz, delete R.runtime, R;
  }, [L, I] = T.useState([...E]), [W, q] = T.useState(!1), U = T.useRef(null), [f, C] = m, _ = () => {
    const R = [...O.cloneDeep(L)], H = {
      columnName: "",
      conditions: [],
      name: "",
      tag: ""
    };
    C({ ...f, [L.length + 1]: !0 }), R.push(H), I(R), q(!W);
  }, J = (R, H) => {
    const s = O.cloneDeep(L);
    s[H] = R, I(s), h("contentEditor", null, "markupVariables", s);
  }, X = (R) => {
    const H = O.cloneDeep(L);
    H.splice(R, 1), I(H), h("contentEditor", null, "markupVariables", H);
    const s = O.cloneDeep(f);
    delete s[R], C(s);
  }, j = /* @__PURE__ */ i.createElement(te, null, /* @__PURE__ */ i.createElement(te.Section, { title: "General" }, /* @__PURE__ */ i.createElement(me, { value: c || "", section: "contentEditor", fieldName: "title", label: "Title", placeholder: "Markup Include Title", updateField: h })), /* @__PURE__ */ i.createElement(te.Section, { title: "Content Editor" }, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Enter Markup"), /* @__PURE__ */ i.createElement(K, { inline: !0, value: b, section: "contentEditor", fieldName: "useInlineHTML", label: "Use Inline HTML ", updateField: h }), /* @__PURE__ */ i.createElement("div", { className: "column-edit" }, b ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { ref: U }, /* @__PURE__ */ i.createElement(me, { value: g, section: "contentEditor", fieldName: "inlineHTML", label: "HTML", placeholder: "Add HTML here", type: "textarea", rows: 10, updateField: h }), /* @__PURE__ */ i.createElement("hr", { className: "accordion__divider" })), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Variables", /* @__PURE__ */ i.createElement(pe, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(pe.Target, null, /* @__PURE__ */ i.createElement(Z, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(pe.Content, null, "To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML")))), k === !1 && /* @__PURE__ */ i.createElement("span", { className: "need-data-source-prompt" }, "To use variables, add data source."), L && L.length > 0 && /* @__PURE__ */ i.createElement("div", { className: "section-border" }, L == null ? void 0 : L.map((R, H) => /* @__PURE__ */ i.createElement(vt, { key: `${R.name}-${H}`, controls: m, data: e, deleteVariable: X, updateVariableArray: J, variableConfig: R, variableIndex: H }))), /* @__PURE__ */ i.createElement("div", { className: "mb-1 d-flex" }, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: _, disabled: !k }, "Create New Variable")))) : /* @__PURE__ */ i.createElement(me, { value: y || "", section: "contentEditor", fieldName: "srcUrl", label: "Source URL;", placeholder: "https://www.example.com/file.html", updateField: h }))), /* @__PURE__ */ i.createElement(te.Section, { title: "Visual" }, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", null, "Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, yt.map((R) => /* @__PURE__ */ i.createElement(
    "li",
    {
      title: R,
      key: R,
      onClick: () => {
        o({ ...l, theme: R });
      },
      className: d === R ? "selected " + R : R
    }
  )))), /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(K, { value: n.border, section: "visual", fieldName: "border", label: "Display Border ", updateField: h }), /* @__PURE__ */ i.createElement(K, { value: n.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme ", updateField: h }), /* @__PURE__ */ i.createElement(K, { value: n.accent, section: "visual", fieldName: "accent", label: "Use Accent Style ", updateField: h }), /* @__PURE__ */ i.createElement(K, { value: n.background, section: "visual", fieldName: "background", label: "Use Theme Background Color ", updateField: h }), /* @__PURE__ */ i.createElement(K, { value: n.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color ", updateField: h }))));
  return a && !(l != null && l.showEditorPanel) ? null : /* @__PURE__ */ i.createElement(Be, { component: "EditorPanel" }, /* @__PURE__ */ i.createElement(he.Sidebar, { displayPanel: p, isDashboard: t, title: "Configure Markup Include", onBackClick: M }, j));
}, Ne = {
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
}, Nt = (l, e) => {
  switch (e.type) {
    case "SET_CONFIG":
      return { ...l, config: e.payload };
    case "SET_LOADING":
      return { ...l, loading: e.payload };
    case "SET_URL_MARKUP":
      return { ...l, urlMarkup: e.payload };
    case "SET_MARKUP_ERROR":
      return { ...l, markupError: e.payload };
    case "SET_ERROR_MESSAGE":
      return { ...l, errorMessage: e.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...l, coveLoadedHasRan: e.payload };
  }
}, wt = ({ configUrl: l, config: e, isDashboard: t = !0, isEditor: a = !1, setConfig: r }) => {
  const o = { config: e, loading: !0, urlMarkup: "", markupError: null, errorMessage: null, coveLoadedHasRan: !1 }, [u, d] = T.useReducer(Nt, o), { config: n, loading: g, urlMarkup: E, markupError: y, errorMessage: c, coveLoadedHasRan: b } = u, p = T.useRef(), { innerContainerClasses: A, contentClasses: h } = Ye(n || {}), { contentEditor: k, theme: m } = n || {}, M = e == null ? void 0 : e.data, { inlineHTML: x, markupVariables: L, srcUrl: I, title: W, useInlineHTML: q } = k || {}, U = (s) => {
    Object.keys(Ne).forEach((w) => {
      s[w] && typeof s[w] == "object" && !Array.isArray(s[w]) && (s[w] = { ...Ne[w], ...s[w] });
    }), s.runtime = {}, s.runtime.uniqueId = Date.now(), s.runtime.editorErrorMessage = "", d({ type: "SET_CONFIG", payload: s });
  }, f = T.useCallback(async () => {
    let s = e || await (await fetch(l)).json(), w = s.data ?? {};
    s.dataUrl && (w = await (await fetch(s.dataUrl)).json()), s.data = w;
    const V = { ...await Je(s) };
    U({ ...e, ...V }), d({ type: "SET_LOADING", payload: !1 });
  }, []);
  T.useEffect(() => {
    if (y) {
      let s = y, w = "There was a problem retrieving the content from " + I + ". ", V = /https?:\/\//g;
      s === 404 && !I.match(V) && (s = "proto"), w += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[s], d({ type: "SET_ERROR_MESSAGE", payload: w });
    } else
      d({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [y]);
  const C = T.useCallback(async () => {
    if (d({ type: "SET_MARKUP_ERROR", payload: null }), I)
      if (I === "#example")
        d({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await Ke.get(I).then((s) => {
            s.data && d({ type: "SET_URL_MARKUP", payload: s.data });
          });
        } catch (s) {
          s.response ? d({ type: "SET_MARKUP_ERROR", payload: s.response.status }) : s.request && d({ type: "SET_MARKUP_ERROR", payload: 200 }), d({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      d({ type: "SET_URL_MARKUP", payload: "" });
  }, [I]), _ = (s, w) => {
    const { columnName: V, isOrIsNotEqualTo: F, value: B } = w[0], G = F === "is" ? s.filter(($) => $[V] === B) : s.filter(($) => $[V] !== B);
    return w.shift(), w.length === 0 ? G : _(G, w);
  }, J = (s) => {
    if (O.isEmpty(L))
      return s;
    const w = /{{(.*?)}}/g;
    return s.replace(w, (F) => {
      const B = L.filter((ue) => ue.tag === F)[0];
      if (B === void 0)
        return [F];
      const G = B && B.conditions.length === 0 ? M : _(M, [...B.conditions]), $ = O.uniq(G == null ? void 0 : G.map((ue) => ue[B.columnName])), de = [], be = a ? "or" : "and", ee = $.length;
      return ee === 2 && $.push($.join(` ${be} `)), ee > 2 && ($[ee - 1] = `${be} ${$[ee - 1]}`), de.push($.join(", ")), `<span class="cove-tooltip-variable">${F}<span class="cove-tooltip-value"><span class="font-weight-bold display-Info-message">One or more of the following values will appear in the place of this variable placeholder:</span><br/>${de[0]}</span></span><span class="cove-markup-include-variable-value">${de[0].trim()}</span>`;
    });
  }, X = (s) => {
    let w, V = !1;
    return s && s !== "" && s !== null && (s.toString().match(/<body[^>]*>/i) && s.toString().match(/<\/body\s*>/i) ? (V = !0, w = s.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : w = s.toString()), V ? w[1] : w;
  };
  T.useEffect(() => {
    f().catch((s) => console.log(s)), ve("cove_loaded", { loadConfigHasRun: !0 });
  }, []), T.useEffect(() => {
    n && !b && p && (ve("cove_loaded", { config: n }), d({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [n, p]), T.useEffect(() => {
    f().catch((s) => console.log(s));
  }, [e == null ? void 0 : e.data]), T.useEffect(() => {
    C().catch((s) => console.log(s));
  }, [C]);
  let j = /* @__PURE__ */ React.createElement(Qe, null);
  const R = q ? J(x) : X(E);
  g === !1 && (j = /* @__PURE__ */ React.createElement(React.Fragment, null, a && /* @__PURE__ */ React.createElement(Rt, null), /* @__PURE__ */ React.createElement(he.Responsive, { isEditor: a }, /* @__PURE__ */ React.createElement("div", { className: "markup-include-content-container cove-component__content no-borders" }, /* @__PURE__ */ React.createElement("div", { className: `markup-include-component ${h.join(" ")}` }, /* @__PURE__ */ React.createElement(Ze, { title: W, isDashboard: t, classes: [`${m}`, "mb-0"] }), /* @__PURE__ */ React.createElement("div", { className: `${A.join(" ")}` }, /* @__PURE__ */ React.createElement("div", { className: "cove-component__content-wrap" }, !y && /* @__PURE__ */ React.createElement(gt, { allowElements: !!E, content: R }), y && I && /* @__PURE__ */ React.createElement("div", { className: "warning" }, c))))))));
  const H = () => /* @__PURE__ */ React.createElement("section", { className: "waiting" }, /* @__PURE__ */ React.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ React.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ React.createElement("p", null, n == null ? void 0 : n.runtime.editorErrorMessage)));
  return /* @__PURE__ */ React.createElement(Be, { component: "CdcMarkupInclude" }, /* @__PURE__ */ React.createElement(qe.Provider, { value: { config: n, updateConfig: U, loading: g, data: M, setParentConfig: r, isDashboard: t } }, !(n != null && n.newViz) && (n == null ? void 0 : n.runtime) && (n == null ? void 0 : n.runtime.editorErrorMessage) && /* @__PURE__ */ React.createElement(H, null), /* @__PURE__ */ React.createElement(he.VisualizationWrapper, { config: n, isEditor: a, showEditorPanel: n == null ? void 0 : n.showEditorPanel }, j)));
}, Tt = {
  inlineHTML: "<h2>Inline HTML</h2>",
  markupVariables: [],
  showHeader: !0,
  srcUrl: "#example",
  title: "Markup Include",
  useInlineHTML: !1
}, Ct = [], kt = {}, At = !0, St = "theme-blue", Lt = "markup-include", _t = null, It = {
  border: !1,
  accent: !1,
  background: !1,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Mt = {
  contentEditor: Tt,
  data: Ct,
  legend: kt,
  newViz: At,
  theme: St,
  type: Lt,
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
], va = {}, ya = !0, Ra = "theme-slate", Na = "markup-include", wa = null, Ta = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, Ca = !0, ka = !0, Aa = {
  contentEditor: ga,
  data: ba,
  legend: va,
  newViz: ya,
  theme: Ra,
  type: Na,
  runtime: wa,
  visual: Ta,
  isEditor: Ca,
  showEditorPanel: ka
}, Fa = {
  title: "Components/Pages/Markup Include",
  component: wt
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
    config: Aa,
    isEditor: !1
  }
};
var we, Te, Ce;
ne.parameters = {
  ...ne.parameters,
  docs: {
    ...(we = ne.parameters) == null ? void 0 : we.docs,
    source: {
      originalSource: `{
  args: {
    config: primary,
    isEditor: false
  }
}`,
      ...(Ce = (Te = ne.parameters) == null ? void 0 : Te.docs) == null ? void 0 : Ce.source
    }
  }
};
var ke, Ae, Se;
re.parameters = {
  ...re.parameters,
  docs: {
    ...(ke = re.parameters) == null ? void 0 : ke.docs,
    source: {
      originalSource: `{
  args: {
    config: noConditions,
    isEditor: false
  }
}`,
      ...(Se = (Ae = re.parameters) == null ? void 0 : Ae.docs) == null ? void 0 : Se.source
    }
  }
};
var Le, _e, Ie;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Le = oe.parameters) == null ? void 0 : Le.docs,
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
const za = ["Primary", "No_Conditions", "With_conditions", "Button_and_text", "icon_no_text", "image_with_text"];
export {
  se as Button_and_text,
  re as No_Conditions,
  ne as Primary,
  oe as With_conditions,
  za as __namedExportsOrder,
  Fa as default,
  le as icon_no_text,
  ie as image_with_text
};
