import { R as a, r as w } from "./storybook-index-45401197.es.js";
import { g as de } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { a as ue } from "./storybook-axios-01170075.es.js";
import { u as pe, p as q } from "./storybook-useDataVizClasses-d9099587.es.js";
import { L as V, a as he } from "./storybook-coveUpdateWorker-d90b7f10.es.js";
import { E as ee, L as me } from "./storybook-Loading-f180d060.es.js";
import { A as H } from "./storybook-Accordion-814ea38f.es.js";
import { I as K } from "./storybook-editor-05e6f487.es.js";
import { u as fe } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as Ee } from "./storybook-index-e5bf02db.es.js";
import "./storybook-Icon-adc4a8a7.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-Tooltip-edc0f7ab.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-4ed993c7.es.js";
const I = {
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
}, h = 1, te = 2, re = 4, T = 8, W = 16, P = 32, N = 64, G = {
  a: {
    content: h | T,
    self: !1,
    type: h | T | P | N
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: h | T,
    void: !0
  },
  body: {
    content: h | te | re | T | W | P | N
  },
  button: {
    content: T,
    type: h | T | P | N
  },
  caption: {
    content: h,
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
    type: h | P | N
  },
  dd: {
    content: h,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: h
  },
  dt: {
    content: h,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: h,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: h,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: h,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: h
  },
  picture: {
    children: ["source", "img"],
    type: h | T | W
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: T,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: T,
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
    content: T,
    parent: ["details"]
  },
  table: {
    children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr"],
    type: h
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: h,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: h,
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
    type: h
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: h | T,
    void: !0
  }
};
function A(c) {
  return (e) => {
    G[e] = {
      ...c,
      ...G[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(A({
  content: h,
  type: h | N
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(A({
  content: T,
  type: h | T | N
}));
["p", "pre"].forEach(A({
  content: T,
  type: h | N
}));
["s", "small", "span", "del", "ins"].forEach(A({
  content: T,
  type: h | T
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(A({
  content: h,
  type: h | te | N
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(A({
  content: T,
  type: h | re | N
}));
["audio", "canvas", "iframe", "img", "video"].forEach(A({
  type: h | T | W | N
}));
const $ = Object.freeze(G), ge = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], ye = Object.keys($).filter((c) => c !== "canvas" && c !== "iframe"), f = 1, be = 2, O = 3, L = 4, ne = 5, Y = Object.freeze({
  alt: f,
  cite: f,
  class: f,
  colspan: O,
  controls: L,
  datetime: f,
  default: L,
  disabled: L,
  dir: f,
  height: f,
  href: f,
  id: f,
  kind: f,
  label: f,
  lang: f,
  loading: f,
  loop: L,
  media: f,
  muted: L,
  poster: f,
  rel: f,
  role: f,
  rowspan: O,
  scope: f,
  sizes: f,
  span: O,
  start: O,
  style: ne,
  src: f,
  srclang: f,
  srcset: f,
  tabindex: f,
  target: f,
  title: f,
  type: f,
  width: f
}), ve = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function U() {
  return U = Object.assign || function(c) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (c[r] = t[r]);
    }
    return c;
  }, U.apply(this, arguments);
}
function ae({
  attributes: c = {},
  className: e,
  children: t = null,
  selfClose: r = !1,
  tagName: n
}) {
  const o = n;
  return r ? /* @__PURE__ */ a.createElement(o, U({
    className: e
  }, c)) : /* @__PURE__ */ a.createElement(o, U({
    className: e
  }, c), t);
}
class Te {
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
var we = /["'&<>]/, Se = _e;
function _e(c) {
  var e = "" + c, t = we.exec(e);
  if (!t)
    return e;
  var r, n = "", o = 0, u = 0;
  for (o = t.index; o < e.length; o++) {
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
    u !== o && (n += e.substring(u, o)), u = o + 1, n += r;
  }
  return u !== o ? n + e.substring(u, o) : n;
}
const Ne = /* @__PURE__ */ de(Se);
function C(c, e, t) {
  return e in c ? Object.defineProperty(c, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : c[e] = t, c;
}
const ke = /(url|image|image-set)\(/i;
class Ce extends Te {
  attribute(e, t) {
    return e === "style" && Object.keys(t).forEach((r) => {
      String(t[r]).match(ke) && delete t[r];
    }), t;
  }
}
const J = 1, Re = 3, Ae = /^<(!doctype|(html|head|body)(\s|>))/i, Le = /^(aria-|data-|\w+:)/iu, xe = /{{{(\w+)\/?}}}/;
function Ie() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class Oe {
  constructor(e, t = {}, r = [], n = []) {
    var o;
    if (C(this, "allowed", void 0), C(this, "banned", void 0), C(this, "blocked", void 0), C(this, "container", void 0), C(this, "content", []), C(this, "props", void 0), C(this, "matchers", void 0), C(this, "filters", void 0), C(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = t, this.matchers = r, this.filters = [...n, new Ce()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = t.allowList) !== null && o !== void 0 ? o : ye), this.banned = new Set(ge), this.blocked = new Set(t.blockList);
  }
  /**
   * Loop through and apply all registered attribute filters.
   */
  applyAttributeFilters(e, t) {
    return this.filters.reduce((r, n) => r !== null && typeof n.attribute == "function" ? n.attribute(e, r) : r, t);
  }
  /**
   * Loop through and apply all registered node filters.
   */
  applyNodeFilters(e, t) {
    return this.filters.reduce((r, n) => r !== null && typeof n.node == "function" ? n.node(e, r) : r, t);
  }
  /**
   * Loop through and apply all registered matchers to the string.
   * If a match is found, create a React element, and build a new array.
   * This array allows React to interpolate and render accordingly.
   */
  applyMatchers(e, t) {
    const r = {}, {
      props: n
    } = this;
    let o = e, u = 0, b = null;
    return this.matchers.forEach((s) => {
      const g = s.asTag().toLowerCase(), p = this.getTagConfig(g);
      if (n[s.inverseName] || !this.isTagAllowed(g) || !this.canRenderChild(t, p))
        return;
      let l = "";
      for (; o && (b = s.match(o)); ) {
        const {
          index: d,
          length: m,
          match: y,
          valid: E,
          void: _,
          ...S
        } = b, R = s.propName + String(u);
        d > 0 && (l += o.slice(0, d)), E ? (l += _ ? `{{{${R}/}}}` : `{{{${R}}}}${y}{{{/${R}}}}`, this.keyIndex += 1, u += 1, r[R] = {
          children: y,
          matcher: s,
          props: {
            ...n,
            ...S,
            key: this.keyIndex
          }
        }) : l += y, s.greedy ? (o = l + o.slice(d + m), l = "") : o = o.slice(d + (m || y.length));
      }
      s.greedy || (o = l + o);
    }), u === 0 ? e : this.replaceTokens(o, r);
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
      disableLineBreaks: r
    } = this.props;
    if (t || r || e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))
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
    var t;
    const n = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || Ie)();
    if (!n)
      return;
    const o = (t = this.props.containerTagName) !== null && t !== void 0 ? t : "body", u = o === "body" || o === "fragment" ? n.body : n.createElement(o);
    if (e.match(Ae)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      u.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? Ne(e) : e);
    return u;
  }
  /**
   * Convert an elements attribute map to an object map.
   * Returns null if no attributes are defined.
   */
  extractAttributes(e) {
    const {
      allowAttributes: t
    } = this.props, r = {};
    let n = 0;
    return e.nodeType !== J || !e.attributes || ([...e.attributes].forEach((o) => {
      const {
        name: u,
        value: b
      } = o, s = u.toLowerCase(), g = Y[s] || Y[u];
      if (!this.isSafe(e) || !s.match(Le) && (!t && (!g || g === be) || s.startsWith("on") || b.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let p = s === "style" ? this.extractStyleAttribute(e) : b;
      g === L ? p = !0 : g === O ? p = Number.parseFloat(String(p)) : g !== ne && (p = String(p)), r[ve[s] || s] = this.applyAttributeFilters(s, p), n += 1;
    }), n === 0) ? null : r;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(e) {
    const t = {};
    return Array.from(e.style).forEach((r) => {
      const n = e.style[r];
      (typeof n == "string" || typeof n == "number") && (t[r.replace(/-([a-z])/g, (o, u) => String(u).toUpperCase())] = n);
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
    return $[e] ? {
      ...t,
      ...$[e],
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
  parseNode(e, t) {
    const {
      noHtml: r,
      noHtmlExceptMatchers: n,
      allowElements: o,
      transform: u,
      transformOnlyAllowList: b
    } = this.props;
    let s = [], g = "";
    return [...e.childNodes].forEach((p) => {
      if (p.nodeType === J) {
        const d = p.nodeName.toLowerCase(), m = this.getTagConfig(d);
        g && (s.push(g), g = "");
        const y = this.applyNodeFilters(d, p);
        if (!y)
          return;
        let E;
        if (u && !(b && !this.isTagAllowed(d))) {
          this.keyIndex += 1;
          const _ = this.keyIndex;
          E = this.parseNode(y, m);
          const S = u(y, E, m);
          if (S === null)
            return;
          if (typeof S < "u") {
            s.push(/* @__PURE__ */ a.cloneElement(S, {
              key: _
            }));
            return;
          }
          this.keyIndex = _ - 1;
        }
        if (this.banned.has(d))
          return;
        if (!(r || n && d !== "br") && this.isTagAllowed(d) && (o || this.canRenderChild(t, m))) {
          var l;
          this.keyIndex += 1;
          const _ = this.extractAttributes(y), S = {
            tagName: d
          };
          _ && (S.attributes = _), m.void && (S.selfClose = m.void), s.push(/* @__PURE__ */ a.createElement(ae, {
            ...S,
            key: this.keyIndex
          }, (l = E) !== null && l !== void 0 ? l : this.parseNode(y, m)));
        } else
          s = [...s, ...this.parseNode(y, m.tagName ? m : t)];
      } else if (p.nodeType === Re) {
        const d = r && !n ? p.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(p.textContent || "", t)
        );
        Array.isArray(d) ? s = [...s, ...d] : g += d;
      }
    }), g && s.push(g), s;
  }
  /**
   * Deconstruct the string into an array, by replacing custom tokens with React elements,
   * so that React can render it correctly.
   */
  replaceTokens(e, t) {
    if (!e.includes("{{{"))
      return e;
    const r = [];
    let n = e, o = null;
    for (; o = n.match(xe); ) {
      const [u, b] = o, s = o.index, g = u.includes("/");
      if (process.env.NODE_ENV !== "production" && !t[b])
        throw new Error(`Token "${b}" found but no matching element to replace with.`);
      s > 0 && (r.push(n.slice(0, s)), n = n.slice(s));
      const {
        children: p,
        matcher: l,
        props: d
      } = t[b];
      let m;
      if (g)
        m = u.length, r.push(l.createElement(p, d));
      else {
        const y = n.match(new RegExp(`{{{/${b}}}}`));
        if (process.env.NODE_ENV !== "production" && !y)
          throw new Error(`Closing token missing for interpolated element "${b}".`);
        m = y.index + y[0].length, r.push(l.createElement(this.replaceTokens(n.slice(u.length, y.index), t), d));
      }
      n = n.slice(m);
    }
    return n.length > 0 && r.push(n), r.length === 0 ? "" : r.length === 1 && typeof r[0] == "string" ? r[0] : r;
  }
}
function Me(c) {
  var e;
  const {
    attributes: t,
    className: r,
    containerTagName: n,
    content: o,
    emptyContent: u,
    parsedContent: b,
    tagName: s,
    noWrap: g
  } = c, p = (e = n ?? s) !== null && e !== void 0 ? e : "span", l = p === "fragment" ? !0 : g;
  let d;
  if (b)
    d = b;
  else {
    const m = new Oe(o ?? "", c).parse();
    m.length > 0 && (d = m);
  }
  return d || (d = u), l ? /* @__PURE__ */ a.createElement(a.Fragment, null, d) : /* @__PURE__ */ a.createElement(ae, {
    attributes: t,
    className: r,
    tagName: p
  }, d);
}
const oe = w.createContext({}), Pe = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], De = w.memo((c) => {
  const { config: e, updateConfig: t, loading: r, data: n, setParentConfig: o, isDashboard: u, showConfigConfirm: b } = w.useContext(oe), [s, g] = w.useState(!0), p = fe(e, t, !0);
  w.useEffect(() => {
    if (o) {
      const E = d();
      o(E);
    }
  }, [e]), w.useEffect(() => {
    if (!b) {
      let E = { ...e };
      delete E.newViz, t(E);
    }
  }, []);
  const l = () => {
    g(!s), t({
      ...e,
      showEditorPanel: !s
    });
  }, d = () => {
    let E = JSON.parse(JSON.stringify(e));
    return delete E.newViz, delete E.runtime, E;
  }, m = w.memo(({ label: E, value: _, fieldName: S, section: R = null, subsection: B = null, tooltip: F, updateField: x, ...M }) => /* @__PURE__ */ a.createElement("label", { className: "checkbox" }, /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "checkbox",
      name: S,
      checked: _,
      onChange: () => {
        x(R, B, S, !_);
      },
      ...M
    }
  ), /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, E), /* @__PURE__ */ a.createElement("span", { className: "cove-icon" }, F))), y = /* @__PURE__ */ a.createElement(H, null, /* @__PURE__ */ a.createElement(H.Section, { title: "General" }, /* @__PURE__ */ a.createElement(K, { value: e.title || "", fieldName: "title", label: "Title", placeholder: "Markup Include Title", updateField: p }), /* @__PURE__ */ a.createElement(K, { value: e.srcUrl || "", fieldName: "srcUrl", label: "Source URL", placeholder: "https://www.example.com/file.html", updateField: p })), /* @__PURE__ */ a.createElement(H.Section, { title: "Visual" }, /* @__PURE__ */ a.createElement("div", { className: "input-group" }, /* @__PURE__ */ a.createElement("label", null, "Theme"), /* @__PURE__ */ a.createElement("ul", { className: "color-palette" }, Pe.map((E) => /* @__PURE__ */ a.createElement(
    "li",
    {
      title: E,
      key: E,
      onClick: () => {
        t({ ...e, theme: E });
      },
      className: e.theme === E ? "selected " + E : E
    }
  )))), /* @__PURE__ */ a.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ a.createElement(m, { value: e.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: p }), /* @__PURE__ */ a.createElement(m, { value: e.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: p }), /* @__PURE__ */ a.createElement(m, { value: e.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: p }), /* @__PURE__ */ a.createElement(m, { value: e.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: p }), /* @__PURE__ */ a.createElement(m, { value: e.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: p }))));
  return r ? null : /* @__PURE__ */ a.createElement(ee, { component: "EditorPanel" }, /* @__PURE__ */ a.createElement(V.Sidebar, { displayPanel: s, onBackClick: l, isDashboard: u, title: "Configure Markup Include" }, y));
}), Ue = (c, e) => {
  switch (e.type) {
    case "SET_CONFIG":
      return { ...c, config: e.payload };
    case "SET_LOADING":
      return { ...c, loading: e.payload };
    case "SET_URL_MARKUP":
      return { ...c, urlMarkup: e.payload };
    case "SET_MARKUP_ERROR":
      return { ...c, markupError: e.payload };
    case "SET_ERROR_MESSAGE":
      return { ...c, errorMessage: e.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...c, coveLoadedHasRan: e.payload };
  }
};
const Be = (c) => {
  const { configUrl: e, config: t, isDashboard: r = !1, isEditor: n = !1, setConfig: o } = c, u = { config: t ?? I, loading: !0, urlMarkup: "", markupError: null, errorMessage: null, coveLoadedHasRan: !1 }, [b, s] = w.useReducer(Ue, u), [g, p] = w.useState(!1), { config: l, loading: d, urlMarkup: m, markupError: y, errorMessage: E, coveLoadedHasRan: _ } = b, S = w.useRef(), { innerContainerClasses: R, contentClasses: B } = pe(l);
  let { title: F } = l;
  const x = (i) => {
    Object.keys(I).forEach((v) => {
      i[v] && typeof i[v] == "object" && !Array.isArray(i[v]) && (i[v] = { ...I[v], ...i[v] });
    }), i.runtime = {}, i.runtime.uniqueId = Date.now(), i.runtime.editorErrorMessage = "", s({ type: "SET_CONFIG", payload: i });
  }, M = w.useCallback(async () => {
    let i = t || await (await fetch(e)).json(), v = i.data ?? {};
    i.dataUrl && (v = await (await fetch(i.dataUrl)).json()), i.data = v;
    const k = { ...await he(i) };
    x({ ...I, ...k }), s({ type: "SET_LOADING", payload: !1 });
  }, []);
  w.useEffect(() => {
    if (y) {
      let i = y, v = "There was a problem retrieving the content from " + l.srcUrl + ". ", k = /https?:\/\//g;
      i === 404 && !l.srcUrl.match(k) && (i = "proto"), v += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[i], s({ type: "SET_ERROR_MESSAGE", payload: v });
    } else
      s({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [y]);
  const j = w.useCallback(async () => {
    if (s({ type: "SET_MARKUP_ERROR", payload: null }), l.srcUrl)
      if (l.srcUrl === "#example")
        s({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await ue.get(l.srcUrl).then((i) => {
            i.data && s({ type: "SET_URL_MARKUP", payload: i.data });
          });
        } catch (i) {
          i.response ? s({ type: "SET_MARKUP_ERROR", payload: i.response.status }) : i.request && s({ type: "SET_MARKUP_ERROR", payload: 200 }), s({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      s({ type: "SET_URL_MARKUP", payload: "" });
  }, [l.srcUrl]), se = (i) => {
    let v, k = !1;
    return i && i !== "" && i !== null && (i.toString().match(/<body[^>]*>/i) && i.toString().match(/<\/body\s*>/i) ? (k = !0, v = i.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : v = i.toString()), k ? v[1] : v;
  };
  w.useEffect(() => {
    M().catch((i) => console.log(i)), q("cove_loaded", { loadConfigHasRun: !0 });
  }, []), w.useEffect(() => {
    l && !_ && S && (q("cove_loaded", { config: l }), s({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [l, S]), w.useEffect(() => {
    M().catch((i) => console.log(i));
  }, [t == null ? void 0 : t.data]), w.useEffect(() => {
    j().catch((i) => console.log(i));
  }, [j]);
  let z = /* @__PURE__ */ a.createElement(me, null);
  if (d === !1) {
    let i = /* @__PURE__ */ a.createElement(V.Responsive, { isEditor: n }, /* @__PURE__ */ a.createElement("div", { className: `cove-component__content ${B.join(" ")}` }, /* @__PURE__ */ a.createElement(Ee, { title: F, isDashboard: r, classes: [`${l.theme}`, "mb-0"] }), /* @__PURE__ */ a.createElement("div", { className: `${R.join(" ")}` }, /* @__PURE__ */ a.createElement("div", { className: "cove-component__content-wrap" }, !y && m && /* @__PURE__ */ a.createElement(Me, { content: se(m) }), y && l.srcUrl && /* @__PURE__ */ a.createElement("div", { className: "warning" }, E)))));
    z = /* @__PURE__ */ a.createElement(a.Fragment, null, n && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(De, null), i), !n && i);
  }
  const ie = () => /* @__PURE__ */ a.createElement("section", { className: "waiting" }, /* @__PURE__ */ a.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ a.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ a.createElement("p", null, l.runtime.editorErrorMessage))), le = () => {
    const i = (v) => {
      v.preventDefault();
      let k = { ...l };
      delete k.newViz, x(k);
    };
    return /* @__PURE__ */ a.createElement("section", { className: "waiting" }, /* @__PURE__ */ a.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ a.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ a.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ a.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: i }, "I'm Done")));
  };
  return /* @__PURE__ */ a.createElement(ee, { component: "CdcMarkupInclude" }, /* @__PURE__ */ a.createElement(oe.Provider, { value: { config: l, updateConfig: x, loading: d, data: l.data, setParentConfig: o, isDashboard: r, showConfigConfirm: g } }, !l.newViz && l.runtime && l.runtime.editorErrorMessage && /* @__PURE__ */ a.createElement(ie, null), l.newViz && g && /* @__PURE__ */ a.createElement(le, null), /* @__PURE__ */ a.createElement(V.VisualizationWrapper, { config: l, isEditor: n, ref: S, showEditorPanel: l == null ? void 0 : l.showEditorPanel }, z)));
}, tt = {
  title: "Components/Templates/Markup Include",
  component: Be
}, D = {
  args: {
    config: I
  }
};
var X, Q, Z;
D.parameters = {
  ...D.parameters,
  docs: {
    ...(X = D.parameters) == null ? void 0 : X.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_1 as unknown) as Config)
  }
}`,
      ...(Z = (Q = D.parameters) == null ? void 0 : Q.docs) == null ? void 0 : Z.source
    }
  }
};
const rt = ["Initial_State"];
export {
  D as Initial_State,
  rt as __namedExportsOrder,
  tt as default
};
