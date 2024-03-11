import { R as a, r as _ } from "./storybook-index-45401197.es.js";
import { g as se } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { a as le } from "./storybook-axios-01170075.es.js";
import { u as ie, c as ce, p as z } from "./storybook-coveUpdateWorker-10963690.es.js";
import { E as Z, L as de } from "./storybook-Loading-f180d060.es.js";
import { A as $ } from "./storybook-Accordion-1ac9cbd9.es.js";
import { I as q } from "./storybook-editor-05e6f487.es.js";
import { u as ue } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as pe } from "./storybook-index-e5bf02db.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Icon-58d1c99f.es.js";
import "./storybook-Tooltip-edc0f7ab.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-4ed993c7.es.js";
const O = {
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
}, p = 1, ee = 2, te = 4, v = 8, j = 16, D = 32, k = 64, G = {
  a: {
    content: p | v,
    self: !1,
    type: p | v | D | k
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: p | v,
    void: !0
  },
  body: {
    content: p | ee | te | v | j | D | k
  },
  button: {
    content: v,
    type: p | v | D | k
  },
  caption: {
    content: p,
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
    type: p | D | k
  },
  dd: {
    content: p,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: p
  },
  dt: {
    content: p,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: p,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: p,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: p,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: p
  },
  picture: {
    children: ["source", "img"],
    type: p | v | j
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: v,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: v,
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
    content: v,
    parent: ["details"]
  },
  table: {
    children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr"],
    type: p
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: p,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: p,
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
    type: p
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: p | v,
    void: !0
  }
};
function L(c) {
  return (e) => {
    G[e] = {
      ...c,
      ...G[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(L({
  content: p,
  type: p | k
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(L({
  content: v,
  type: p | v | k
}));
["p", "pre"].forEach(L({
  content: v,
  type: p | k
}));
["s", "small", "span", "del", "ins"].forEach(L({
  content: v,
  type: p | v
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(L({
  content: p,
  type: p | ee | k
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(L({
  content: v,
  type: p | te | k
}));
["audio", "canvas", "iframe", "img", "video"].forEach(L({
  type: p | v | j | k
}));
const W = Object.freeze(G), me = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], he = Object.keys(W).filter((c) => c !== "canvas" && c !== "iframe"), f = 1, fe = 2, M = 3, I = 4, re = 5, K = Object.freeze({
  alt: f,
  cite: f,
  class: f,
  colspan: M,
  controls: I,
  datetime: f,
  default: I,
  disabled: I,
  dir: f,
  height: f,
  href: f,
  id: f,
  kind: f,
  label: f,
  lang: f,
  loading: f,
  loop: I,
  media: f,
  muted: I,
  poster: f,
  rel: f,
  role: f,
  rowspan: M,
  scope: f,
  sizes: f,
  span: M,
  start: M,
  style: re,
  src: f,
  srclang: f,
  srcset: f,
  tabindex: f,
  target: f,
  title: f,
  type: f,
  width: f
}), Ee = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function F() {
  return F = Object.assign || function(c) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (c[r] = t[r]);
    }
    return c;
  }, F.apply(this, arguments);
}
function ae({
  attributes: c = {},
  className: e,
  children: t = null,
  selfClose: r = !1,
  tagName: n
}) {
  const o = n;
  return r ? /* @__PURE__ */ a.createElement(o, F({
    className: e
  }, c)) : /* @__PURE__ */ a.createElement(o, F({
    className: e
  }, c), t);
}
class ge {
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
var ye = /["'&<>]/, be = ve;
function ve(c) {
  var e = "" + c, t = ye.exec(e);
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
const Te = /* @__PURE__ */ se(be);
function C(c, e, t) {
  return e in c ? Object.defineProperty(c, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : c[e] = t, c;
}
const _e = /(url|image|image-set)\(/i;
class Ne extends ge {
  attribute(e, t) {
    return e === "style" && Object.keys(t).forEach((r) => {
      String(t[r]).match(_e) && delete t[r];
    }), t;
  }
}
const Y = 1, we = 3, Se = /^<(!doctype|(html|head|body)(\s|>))/i, ke = /^(aria-|data-|\w+:)/iu, Ce = /{{{(\w+)\/?}}}/;
function Ae() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class Re {
  constructor(e, t = {}, r = [], n = []) {
    var o;
    if (C(this, "allowed", void 0), C(this, "banned", void 0), C(this, "blocked", void 0), C(this, "container", void 0), C(this, "content", []), C(this, "props", void 0), C(this, "matchers", void 0), C(this, "filters", void 0), C(this, "keyIndex", void 0), process.env.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = t, this.matchers = r, this.filters = [...n, new Ne()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((o = t.allowList) !== null && o !== void 0 ? o : he), this.banned = new Set(me), this.blocked = new Set(t.blockList);
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
    let o = e, u = 0, g = null;
    return this.matchers.forEach((s) => {
      const i = s.asTag().toLowerCase(), E = this.getTagConfig(i);
      if (n[s.inverseName] || !this.isTagAllowed(i) || !this.canRenderChild(t, E))
        return;
      let m = "";
      for (; o && (g = s.match(o)); ) {
        const {
          index: d,
          length: y,
          match: b,
          valid: S,
          void: N,
          ...w
        } = g, h = s.propName + String(u);
        d > 0 && (m += o.slice(0, d)), S ? (m += N ? `{{{${h}/}}}` : `{{{${h}}}}${b}{{{/${h}}}}`, this.keyIndex += 1, u += 1, r[h] = {
          children: b,
          matcher: s,
          props: {
            ...n,
            ...w,
            key: this.keyIndex
          }
        }) : m += b, s.greedy ? (o = m + o.slice(d + y), m = "") : o = o.slice(d + (y || b.length));
      }
      s.greedy || (o = m + o);
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
    const n = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || Ae)();
    if (!n)
      return;
    const o = (t = this.props.containerTagName) !== null && t !== void 0 ? t : "body", u = o === "body" || o === "fragment" ? n.body : n.createElement(o);
    if (e.match(Se)) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      u.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? Te(e) : e);
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
    return e.nodeType !== Y || !e.attributes || ([...e.attributes].forEach((o) => {
      const {
        name: u,
        value: g
      } = o, s = u.toLowerCase(), i = K[s] || K[u];
      if (!this.isSafe(e) || !s.match(ke) && (!t && (!i || i === fe) || s.startsWith("on") || g.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let E = s === "style" ? this.extractStyleAttribute(e) : g;
      i === I ? E = !0 : i === M ? E = Number.parseFloat(String(E)) : i !== re && (E = String(E)), r[Ee[s] || s] = this.applyAttributeFilters(s, E), n += 1;
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
    return W[e] ? {
      ...t,
      ...W[e],
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
      transformOnlyAllowList: g
    } = this.props;
    let s = [], i = "";
    return [...e.childNodes].forEach((E) => {
      if (E.nodeType === Y) {
        const d = E.nodeName.toLowerCase(), y = this.getTagConfig(d);
        i && (s.push(i), i = "");
        const b = this.applyNodeFilters(d, E);
        if (!b)
          return;
        let S;
        if (u && !(g && !this.isTagAllowed(d))) {
          this.keyIndex += 1;
          const N = this.keyIndex;
          S = this.parseNode(b, y);
          const w = u(b, S, y);
          if (w === null)
            return;
          if (typeof w < "u") {
            s.push(/* @__PURE__ */ a.cloneElement(w, {
              key: N
            }));
            return;
          }
          this.keyIndex = N - 1;
        }
        if (this.banned.has(d))
          return;
        if (!(r || n && d !== "br") && this.isTagAllowed(d) && (o || this.canRenderChild(t, y))) {
          var m;
          this.keyIndex += 1;
          const N = this.extractAttributes(b), w = {
            tagName: d
          };
          N && (w.attributes = N), y.void && (w.selfClose = y.void), s.push(/* @__PURE__ */ a.createElement(ae, {
            ...w,
            key: this.keyIndex
          }, (m = S) !== null && m !== void 0 ? m : this.parseNode(b, y)));
        } else
          s = [...s, ...this.parseNode(b, y.tagName ? y : t)];
      } else if (E.nodeType === we) {
        const d = r && !n ? E.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(E.textContent || "", t)
        );
        Array.isArray(d) ? s = [...s, ...d] : i += d;
      }
    }), i && s.push(i), s;
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
    for (; o = n.match(Ce); ) {
      const [u, g] = o, s = o.index, i = u.includes("/");
      if (process.env.NODE_ENV !== "production" && !t[g])
        throw new Error(`Token "${g}" found but no matching element to replace with.`);
      s > 0 && (r.push(n.slice(0, s)), n = n.slice(s));
      const {
        children: E,
        matcher: m,
        props: d
      } = t[g];
      let y;
      if (i)
        y = u.length, r.push(m.createElement(E, d));
      else {
        const b = n.match(new RegExp(`{{{/${g}}}}`));
        if (process.env.NODE_ENV !== "production" && !b)
          throw new Error(`Closing token missing for interpolated element "${g}".`);
        y = b.index + b[0].length, r.push(m.createElement(this.replaceTokens(n.slice(u.length, b.index), t), d));
      }
      n = n.slice(y);
    }
    return n.length > 0 && r.push(n), r.length === 0 ? "" : r.length === 1 && typeof r[0] == "string" ? r[0] : r;
  }
}
function Le(c) {
  var e;
  const {
    attributes: t,
    className: r,
    containerTagName: n,
    content: o,
    emptyContent: u,
    parsedContent: g,
    tagName: s,
    noWrap: i
  } = c, E = (e = n ?? s) !== null && e !== void 0 ? e : "span", m = E === "fragment" ? !0 : i;
  let d;
  if (g)
    d = g;
  else {
    const y = new Re(o ?? "", c).parse();
    y.length > 0 && (d = y);
  }
  return d || (d = u), m ? /* @__PURE__ */ a.createElement(a.Fragment, null, d) : /* @__PURE__ */ a.createElement(ae, {
    attributes: t,
    className: r,
    tagName: E
  }, d);
}
const ne = _.createContext({}), xe = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], Ie = _.memo((c) => {
  const { config: e, updateConfig: t, loading: r, data: n, setParentConfig: o, isDashboard: u } = _.useContext(ne), [g, s] = _.useState(!0), [i, E] = _.useState(!1), m = ue(e, t, !0);
  _.useEffect(() => {
    if (o) {
      const h = S();
      o(h);
    }
  }, [e]), _.useEffect(() => {
    if (!i) {
      let h = { ...e };
      delete h.newViz, t(h);
    }
  }, []);
  const d = () => {
    s(!g);
  }, y = () => /* @__PURE__ */ a.createElement("section", { className: "waiting" }, /* @__PURE__ */ a.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ a.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ a.createElement("p", null, e.runtime.editorErrorMessage))), b = () => {
    const h = (R) => {
      R.preventDefault();
      let A = { ...e };
      delete A.newViz, t(A);
    };
    return /* @__PURE__ */ a.createElement("section", { className: "waiting" }, /* @__PURE__ */ a.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ a.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ a.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ a.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: h }, "I'm Done")));
  }, S = () => {
    let h = JSON.parse(JSON.stringify(e));
    return delete h.newViz, delete h.runtime, h;
  }, N = _.memo(({ label: h, value: R, fieldName: A, section: P = null, subsection: H = null, tooltip: U, updateField: V, ...l }) => /* @__PURE__ */ a.createElement("label", { className: "checkbox" }, /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "checkbox",
      name: A,
      checked: R,
      onChange: () => {
        V(P, H, A, !R);
      },
      ...l
    }
  ), /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, h), /* @__PURE__ */ a.createElement("span", { className: "cove-icon" }, U))), w = /* @__PURE__ */ a.createElement($, null, /* @__PURE__ */ a.createElement($.Section, { title: "General" }, /* @__PURE__ */ a.createElement(q, { value: e.title || "", fieldName: "title", label: "Title", placeholder: "Markup Include Title", updateField: m }), /* @__PURE__ */ a.createElement(q, { value: e.srcUrl || "", fieldName: "srcUrl", label: "Source URL", placeholder: "https://www.example.com/file.html", updateField: m })), /* @__PURE__ */ a.createElement($.Section, { title: "Visual" }, /* @__PURE__ */ a.createElement("div", { className: "input-group" }, /* @__PURE__ */ a.createElement("label", null, "Theme"), /* @__PURE__ */ a.createElement("ul", { className: "color-palette" }, xe.map((h) => /* @__PURE__ */ a.createElement(
    "li",
    {
      title: h,
      key: h,
      onClick: () => {
        t({ ...e, theme: h });
      },
      className: e.theme === h ? "selected " + h : h
    }
  )))), /* @__PURE__ */ a.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ a.createElement(N, { value: e.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: m }), /* @__PURE__ */ a.createElement(N, { value: e.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: m }), /* @__PURE__ */ a.createElement(N, { value: e.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: m }), /* @__PURE__ */ a.createElement(N, { value: e.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: m }), /* @__PURE__ */ a.createElement(N, { value: e.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: m }))));
  return r ? null : /* @__PURE__ */ a.createElement(Z, { component: "EditorPanel" }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor" }, !e.newViz && e.runtime && e.runtime.editorErrorMessage && /* @__PURE__ */ a.createElement(y, null), e.newViz && i && /* @__PURE__ */ a.createElement(b, null), /* @__PURE__ */ a.createElement("button", { className: "cove-editor--toggle" + (g ? "" : " collapsed"), title: g ? "Collapse Editor" : "Expand Editor", onClick: d }), /* @__PURE__ */ a.createElement("section", { className: "cove-editor__panel" + (g ? "" : " hidden") }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor__panel-container" }, /* @__PURE__ */ a.createElement("h2", { className: "cove-editor__heading" }, "Configure Markup Include"), /* @__PURE__ */ a.createElement("section", { className: "cove-editor__content" }, w))), /* @__PURE__ */ a.createElement("div", { className: "cove-editor__content" }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor__content-wrap" }, c.children))));
}), Oe = (c, e) => {
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
const Me = (c) => {
  const { configUrl: e, config: t, isDashboard: r = !1, isEditor: n = !1, setConfig: o } = c, u = { config: t ?? O, loading: !0, urlMarkup: "", markupError: null, errorMessage: null, coveLoadedHasRan: !1 }, [g, s] = _.useReducer(Oe, u), { config: i, loading: E, urlMarkup: m, markupError: d, errorMessage: y, coveLoadedHasRan: b } = g, S = _.useRef(), { innerContainerClasses: N, contentClasses: w } = ie(i);
  let { title: h } = i;
  const R = (l) => {
    Object.keys(O).forEach((T) => {
      l[T] && typeof l[T] == "object" && !Array.isArray(l[T]) && (l[T] = { ...O[T], ...l[T] });
    }), l.runtime = {}, l.runtime.uniqueId = Date.now(), l.runtime.editorErrorMessage = "", s({ type: "SET_CONFIG", payload: l });
  }, A = _.useCallback(async () => {
    let l = t || await (await fetch(e)).json(), T = l.data ?? {};
    l.dataUrl && (T = await (await fetch(l.dataUrl)).json()), l.data = T;
    const x = { ...await ce(l) };
    R({ ...O, ...x }), s({ type: "SET_LOADING", payload: !1 });
  }, []);
  _.useEffect(() => {
    if (d) {
      let l = d, T = "There was a problem retrieving the content from " + i.srcUrl + ". ", x = /https?:\/\//g;
      l === 404 && !i.srcUrl.match(x) && (l = "proto"), T += {
        200: "This is likely due to a CORS restriction policy from the remote origin address.",
        404: "The requested source URL cannot be found. Please verify the link address provided.",
        proto: "Provided source URL must include https:// or http:// before the address (depending on the source content type)."
      }[l], s({ type: "SET_ERROR_MESSAGE", payload: T });
    } else
      s({ type: "SET_ERROR_MESSAGE", payload: null });
  }, [d]);
  const P = _.useCallback(async () => {
    if (s({ type: "SET_MARKUP_ERROR", payload: null }), i.srcUrl)
      if (i.srcUrl === "#example")
        s({ type: "SET_URL_MARKUP", payload: '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>' });
      else
        try {
          await le.get(i.srcUrl).then((l) => {
            l.data && s({ type: "SET_URL_MARKUP", payload: l.data });
          });
        } catch (l) {
          l.response ? s({ type: "SET_MARKUP_ERROR", payload: l.response.status }) : l.request && s({ type: "SET_MARKUP_ERROR", payload: 200 }), s({ type: "SET_URL_MARKUP", payload: "" });
        }
    else
      s({ type: "SET_URL_MARKUP", payload: "" });
  }, [i.srcUrl]), H = (l) => {
    let T, x = !1;
    return l && l !== "" && l !== null && (l.toString().match(/<body[^>]*>/i) && l.toString().match(/<\/body\s*>/i) ? (x = !0, T = l.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)) : T = l.toString()), x ? T[1] : T;
  };
  _.useEffect(() => {
    A().catch((l) => console.log(l)), z("cove_loaded", { loadConfigHasRun: !0 });
  }, []), _.useEffect(() => {
    i && !b && S && (z("cove_loaded", { config: i }), s({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [i, S]), _.useEffect(() => {
    A().catch((l) => console.log(l));
  }, [t == null ? void 0 : t.data]), _.useEffect(() => {
    P().catch((l) => console.log(l));
  }, [P]);
  let U = /* @__PURE__ */ a.createElement(de, null), V = ["markup-include"];
  if (E === !1) {
    let l = /* @__PURE__ */ a.createElement("div", { className: V.join(" "), ref: S }, /* @__PURE__ */ a.createElement(pe, { title: h, isDashboard: r, classes: [`${i.theme}`, "mb-0"] }), /* @__PURE__ */ a.createElement("div", { className: `cove-component__content ${w.join(" ")}` }, /* @__PURE__ */ a.createElement("div", { className: `${N.join(" ")}` }, /* @__PURE__ */ a.createElement("div", { className: "cove-component__content-wrap" }, !d && m && /* @__PURE__ */ a.createElement(Le, { content: H(m) }), d && i.srcUrl && /* @__PURE__ */ a.createElement("div", { className: "warning" }, y)))));
    U = /* @__PURE__ */ a.createElement("div", { className: `cove markup-include ${i.theme}` }, n && /* @__PURE__ */ a.createElement(Ie, null, l), !n && l);
  }
  return /* @__PURE__ */ a.createElement(Z, { component: "CdcMarkupInclude" }, /* @__PURE__ */ a.createElement(ne.Provider, { value: { config: i, updateConfig: R, loading: E, data: i.data, setParentConfig: o, isDashboard: r } }, U));
}, Je = {
  title: "Components/Templates/Markup Include",
  component: Me
}, B = {
  args: {
    config: O
  }
};
var J, X, Q;
B.parameters = {
  ...B.parameters,
  docs: {
    ...(J = B.parameters) == null ? void 0 : J.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_1 as unknown) as Config)
  }
}`,
      ...(Q = (X = B.parameters) == null ? void 0 : X.docs) == null ? void 0 : Q.source
    }
  }
};
const Xe = ["Initial_State"];
export {
  B as Initial_State,
  Xe as __namedExportsOrder,
  Je as default
};
