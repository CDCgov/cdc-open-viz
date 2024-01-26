import { r as g, R as e } from "./storybook-e61d95ab.es.js";
import { A as We, a as re, b as le, c as oe, d as ce, e as $e } from "./storybook-7cc24c1b.es.js";
import { a as fe, c as Ze } from "./storybook-5071fd94.es.js";
import { T as Q } from "./storybook-46a89ba7.es.js";
import { E as Je, L as Qe } from "./storybook-a0c99f4a.es.js";
import { T as Xe, H as ge } from "./storybook-826feda6.es.js";
import { i as Ye, g as Ke } from "./storybook-c15fd298.es.js";
import { D as et } from "./storybook-b554456e.es.js";
import { n as tt } from "./storybook-24623c03.es.js";
import { f as at } from "./storybook-03c45984.es.js";
import { u as nt, p as Ee, c as rt } from "./storybook-25f566e3.es.js";
import { c as lt } from "./storybook-7a3dd9ba.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-76833471.es.js";
const ie = {
  type: "data-bite",
  data: [],
  dataBite: "",
  dataFunction: "",
  dataColumn: "",
  bitePosition: "Left",
  biteFontSize: 24,
  fontSize: "medium",
  biteBody: "",
  imageData: {
    display: "none",
    url: "",
    alt: "",
    options: []
  },
  dataFormat: {
    roundToPlace: 0,
    commas: !0,
    prefix: "",
    suffix: "%"
  },
  biteStyle: "graphic",
  filters: [],
  subtext: "",
  title: "",
  theme: "theme-blue",
  shadow: !1,
  visual: {
    border: !1,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1
  },
  general: {
    isCompactStyle: !1
  }
}, Re = g.createContext({});
function ot(t, l, d) {
  var b = this, f = g.useRef(null), T = g.useRef(0), E = g.useRef(null), D = g.useRef([]), m = g.useRef(), A = g.useRef(), o = g.useRef(t), N = g.useRef(!0);
  o.current = t;
  var I = !l && l !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  l = +l || 0, d = d || {};
  var Z = !!d.leading, q = "trailing" in d ? !!d.trailing : !0, B = "maxWait" in d, U = B ? Math.max(+d.maxWait || 0, l) : null;
  g.useEffect(function() {
    return N.current = !0, function() {
      N.current = !1;
    };
  }, []);
  var P = g.useMemo(function() {
    var S = function(_) {
      var w = D.current, z = m.current;
      return D.current = m.current = null, T.current = _, A.current = o.current.apply(z, w);
    }, L = function(_, w) {
      I && cancelAnimationFrame(E.current), E.current = I ? requestAnimationFrame(_) : setTimeout(_, w);
    }, j = function(_) {
      if (!N.current)
        return !1;
      var w = _ - f.current, z = _ - T.current;
      return !f.current || w >= l || w < 0 || B && z >= U;
    }, W = function(_) {
      return E.current = null, q && D.current ? S(_) : (D.current = m.current = null, A.current);
    }, M = function() {
      var _ = Date.now();
      if (j(_))
        return W(_);
      if (N.current) {
        var w = _ - f.current, z = _ - T.current, J = l - w, ee = B ? Math.min(J, U - z) : J;
        L(M, ee);
      }
    }, X = function() {
      for (var _ = [], w = 0; w < arguments.length; w++)
        _[w] = arguments[w];
      var z = Date.now(), J = j(z);
      if (D.current = _, m.current = b, f.current = z, J) {
        if (!E.current && N.current)
          return T.current = f.current, L(M, l), Z ? S(f.current) : A.current;
        if (B)
          return L(M, l), S(f.current);
      }
      return E.current || L(M, l), A.current;
    };
    return X.cancel = function() {
      E.current && (I ? cancelAnimationFrame(E.current) : clearTimeout(E.current)), T.current = 0, D.current = f.current = m.current = E.current = null;
    }, X.isPending = function() {
      return !!E.current;
    }, X.flush = function() {
      return E.current ? W(Date.now()) : A.current;
    }, X;
  }, [Z, B, l, U, q, I]);
  return P;
}
function ct(t, l) {
  return t === l;
}
function he(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function it(t) {
  var l = g.useState(he(t)), d = l[0], b = l[1], f = g.useCallback(function(T) {
    return b(he(T));
  }, []);
  return [d, f];
}
function st(t, l, d) {
  var b = d && d.equalityFn || ct, f = it(t), T = f[0], E = f[1], D = ot(g.useCallback(function(A) {
    return E(A);
  }, [E]), l, d), m = g.useRef(t);
  return b(m.current, t) || (D(t), m.current = t), [T, D];
}
const $ = g.memo(({ label: t, section: l = null, subsection: d = null, fieldName: b, updateField: f, value: T, tooltip: E, type: D = "input", i: m = null, min: A = null, max: o = null, ...N }) => {
  const [I, Z] = g.useState(T), [q] = st(I, 500);
  g.useEffect(() => {
    typeof q == "string" && T !== q && f(l, d, b, q, m);
  }, [q, l, d, b, m, T, f]);
  let B = d ? `${l}-${d}-${b}` : `${l}-${d}-${b}`;
  const U = (S) => {
    D !== "number" || A === null || !S.target.value || parseFloat(A) <= parseFloat(S.target.value) & parseFloat(o) >= parseFloat(S.target.value) ? Z(S.target.value) : Z(A.toString());
  };
  let P = /* @__PURE__ */ e.createElement("input", { type: "text", name: B, onChange: U, ...N, value: I });
  return D === "textarea" && (P = /* @__PURE__ */ e.createElement("textarea", { name: B, onChange: U, ...N, value: I })), D === "number" && (P = /* @__PURE__ */ e.createElement("input", { type: "number", name: B, onChange: U, ...N, value: I })), /* @__PURE__ */ e.createElement(e.Fragment, null, t && t.length > 0 && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t, E), P), (!t || t.length === 0) && P);
}), K = g.memo(({ label: t, value: l, fieldName: d, section: b = null, subsection: f = null, tooltip: T, updateField: E, ...D }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: d,
    checked: l,
    onChange: () => {
      E(b, f, d, !l);
    },
    ...D
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, T))), te = g.memo(({ label: t, value: l, options: d, fieldName: b, section: f = null, subsection: T = null, required: E = !1, updateField: D, initial: m, ...A }) => {
  let o = "";
  if (Array.isArray(d))
    o = d.map((N) => /* @__PURE__ */ e.createElement("option", { value: N, key: N }, N));
  else {
    o = [];
    for (const [N, I] of Object.entries(d))
      o.push(
        /* @__PURE__ */ e.createElement("option", { value: N, key: N }, I)
      );
  }
  return m && o.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, m)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, t), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: E && !l ? "warning" : "",
      name: b,
      value: l,
      onChange: (N) => {
        D(f, T, b, N.target.value);
      },
      ...A
    },
    o
  ));
}), mt = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], ut = g.memo(() => {
  var _, w, z, J, ee;
  const { config: t, updateConfig: l, loading: d, data: b, setParentConfig: f, isDashboard: T } = g.useContext(Re), [E, D] = g.useState(!0), m = (a, r, c, u) => {
    if (a === null && r === null) {
      let i = { ...t, [c]: u };
      c === "filterColumn" && (i.filterValue = ""), l(i);
      return;
    }
    const k = Array.isArray(t[a]);
    let F = k ? [...t[a], u] : { ...t[a], [c]: u };
    r !== null && (k ? (F = [...t[a]], F[r] = { ...F[r], [c]: u }) : typeof u == "string" ? F[r] = u : F = { ...t[a], [r]: { ...t[a][r], [c]: u } });
    let h = { ...t, [a]: F };
    l(h);
  }, A = () => !1;
  g.useEffect(() => {
    if (f) {
      const a = Z();
      delete a.newViz, f(a);
    }
  }, [t]);
  const o = () => {
    D(!E);
  }, N = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, t.runtime.editorErrorMessage))), I = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn",
      style: { margin: "1em auto" },
      disabled: A(),
      onClick: (a) => {
        a.preventDefault(), l({ ...t, newViz: !1 });
      }
    },
    "I'm Done"
  ))), Z = () => {
    let a = JSON.parse(JSON.stringify(t));
    return delete a.runtime, a;
  }, q = (a) => {
    let r = [...t.filters];
    r.splice(a, 1), l({ ...t, filters: r });
  }, B = (a, r, c) => {
    let u = [...t.filters];
    u[r][a] = c, l({ ...t, filters: u });
  }, U = () => {
    let a = t.filters ? [...t.filters] : [];
    a.push({ values: [] }), l({ ...t, filters: a });
  }, P = (a = !0) => {
    let r = {};
    return b.length && b.map((c) => Object.keys(c).forEach((u) => r[u] = !0)), Object.keys(r);
  }, S = (a) => {
    let r = [];
    const c = t.filters[a].columnName;
    return b && c && (b.forEach(function(u) {
      u[c] !== void 0 && r.indexOf(u[c]) === -1 && r.push(u[c]);
    }), r.sort()), r;
  }, L = (a, r, c = null, u) => {
    let k = [...t.imageData.options];
    c === null ? k[r][a] = u : k[r].arguments[c][a] = u;
    let F = { ...t.imageData, options: k };
    l({ ...t, imageData: F });
  }, j = (a, r, c) => {
    let u = [...t.imageData.options[a].arguments];
    u[1] = { ...u[1], [r]: c };
    let k = { ...t.imageData.options[a], arguments: u }, F = [...t.imageData.options];
    F[a] = k;
    let h = { ...t.imageData, options: F };
    l({ ...t, imageData: h });
  }, W = (a) => {
    if (t.imageData.options[a].arguments.length > 1) {
      let r = [...t.imageData.options[a].arguments];
      r.pop();
      let c = { ...t.imageData.options[a], arguments: r }, u = [...t.imageData.options];
      u[a] = c;
      let k = { ...t.imageData, options: u };
      l({ ...t, imageData: k });
    }
  }, M = () => {
    let a = t.imageData.options ? [...t.imageData.options] : [];
    a.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let r = { ...t.imageData, options: a };
    l({ ...t, imageData: r });
  }, X = (a) => {
    let r = [...t.imageData.options];
    r.splice(a, 1);
    let c = { ...t.imageData, options: r };
    l({ ...t, imageData: c });
  };
  return d ? null : /* @__PURE__ */ e.createElement(Je, { component: "EditorPanel" }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(N, null), (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(I, null), /* @__PURE__ */ e.createElement("button", { className: E ? "editor-toggle" : "editor-toggle collapsed", title: E ? "Collapse Editor" : "Expand Editor", onClick: o }), /* @__PURE__ */ e.createElement("section", { className: E ? "editor-panel cove" : "hidden editor-panel cove" }, /* @__PURE__ */ e.createElement("div", { className: "heading-2" }, "Configure Data Bite"), /* @__PURE__ */ e.createElement("section", { className: "form-container" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement(We, { allowZeroExpanded: !0 }, /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "General")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(te, { value: t.biteStyle, fieldName: "biteStyle", label: "Data Bite Style", updateField: m, options: gt, initial: "Select" }), /* @__PURE__ */ e.createElement($, { value: t.title, fieldName: "title", label: "Title", placeholder: "Data Bite Title", updateField: m }), /* @__PURE__ */ e.createElement(
    $,
    {
      type: "textarea",
      value: t.biteBody,
      fieldName: "biteBody",
      label: "Message",
      updateField: m,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    $,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Data Bite Subtext or Citation",
      updateField: m,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Data ", (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(Ze, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "two-col" }, /* @__PURE__ */ e.createElement(te, { value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: m, initial: "Select", required: !0, options: P() }), /* @__PURE__ */ e.createElement(te, { value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: m, initial: "Select", required: !0, options: pt }))), /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement($, { value: t.dataFormat.prefix, section: "dataFormat", fieldName: "prefix", label: "Prefix", updateField: m }), /* @__PURE__ */ e.createElement($, { value: t.dataFormat.suffix, section: "dataFormat", fieldName: "suffix", label: "Suffix", updateField: m }), /* @__PURE__ */ e.createElement($, { type: "number", value: t.dataFormat.roundToPlace, section: "dataFormat", fieldName: "roundToPlace", label: "Round", updateField: m, min: "0", max: "99" }))), /* @__PURE__ */ e.createElement(K, { value: t.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: m }), /* @__PURE__ */ e.createElement(K, { value: t.dataFormat.ignoreZeros, section: "dataFormat", fieldName: "ignoreZeros", label: "Ignore Zeros", updateField: m }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((a, r) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: r }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        q(r);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: a.columnName ? a.columnName : "",
      onChange: (c) => {
        B("columnName", r, c.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    P().map((c, u) => /* @__PURE__ */ e.createElement("option", { value: c, key: u }, c))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: a.columnValue,
      onChange: (c) => {
        B("columnValue", r, c.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    S(r).map((c, u) => /* @__PURE__ */ e.createElement("option", { value: c, key: u }, c))
  ))))), (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: U, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Visual")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement($, { type: "number", value: t.biteFontSize, fieldName: "biteFontSize", label: "Bite Font Size", updateField: m, min: "17", max: "65" }), /* @__PURE__ */ e.createElement(te, { value: t.fontSize, fieldName: "fontSize", label: "Overall Font Size", updateField: m, options: ["small", "medium", "large"] }), /* @__PURE__ */ e.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ e.createElement(K, { value: (_ = t.visual) == null ? void 0 : _.border, section: "visual", fieldName: "border", label: "Display Border", updateField: m }), /* @__PURE__ */ e.createElement(K, { value: (w = t.visual) == null ? void 0 : w.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: m }), /* @__PURE__ */ e.createElement(K, { value: (z = t.visual) == null ? void 0 : z.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: m }), /* @__PURE__ */ e.createElement(K, { value: (J = t.visual) == null ? void 0 : J.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: m }), /* @__PURE__ */ e.createElement(K, { value: (ee = t.visual) == null ? void 0 : ee.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: m })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, mt.map((a) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: a,
      key: a,
      onClick: () => {
        l({ ...t, theme: a });
      },
      className: t.theme === a ? "selected " + a : a
    }
  )))))), ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Image", ["dynamic"].includes(t.imageData.display) && "s")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(te, { value: t.imageData.display || "", section: "imageData", fieldName: "display", label: "Image Display Type", updateField: m, options: ["none", "static", "dynamic"] }), /* @__PURE__ */ e.createElement(te, { value: t.bitePosition || "", fieldName: "bitePosition", label: "Image/Graphic Position", updateField: m, initial: "Select", options: Et }), ["static"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement($, { value: t.imageData.url, section: "imageData", fieldName: "url", label: "Image URL", updateField: m }), /* @__PURE__ */ e.createElement($, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text", updateField: m })), ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement($, { value: t.imageData.url || "", section: "imageData", fieldName: "url", label: "Image URL (default)", updateField: m }), /* @__PURE__ */ e.createElement($, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text (default)", updateField: m }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), (!t.imageData.options || t.imageData.options.length === 0) && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no dynamic images."), t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", null, t.imageData.options.map((a, r) => {
    var c, u, k, F;
    return /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: r }, /* @__PURE__ */ e.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: () => {
          X(r);
        }
      },
      "Remove"
    ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, /* @__PURE__ */ e.createElement("strong", null, "Image #" + (r + 1))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((c = a.arguments[0]) == null ? void 0 : c.operator) || "",
        onChange: (h) => {
          L("operator", r, 0, h.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      ye.map((h, i) => /* @__PURE__ */ e.createElement("option", { value: h, key: i }, h))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((u = a.arguments[0]) == null ? void 0 : u.threshold) || "",
        onChange: (h) => {
          L("threshold", r, 0, h.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        className: "border-dashed text-center",
        value: a.secondArgument ? "and" : "then",
        onChange: (h) => {
          h.target.value === "then" && (L("secondArgument", r, null, !1), W(r)), h.target.value === "and" && L("secondArgument", r, null, !0);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "then" }, "Then"),
      /* @__PURE__ */ e.createElement("option", { value: "and" }, "And")
    ))), a.secondArgument && a.secondArgument === !0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((k = a.arguments[1]) == null ? void 0 : k.operator) || "",
        onChange: (h) => {
          j(r, "operator", h.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      ye.map((h, i) => /* @__PURE__ */ e.createElement("option", { value: h, key: i }, h))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((F = a.arguments[1]) == null ? void 0 : F.threshold) || "",
        onChange: (h) => {
          j(r, "threshold", h.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: a.source || "",
        onChange: (h) => {
          L("source", r, null, h.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: a.alt || "",
        onChange: (h) => {
          L("alt", r, null, h.target.value);
        }
      }
    )))));
  }))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: M, className: "btn full-width" }, "Add Dynamic Image")))))))));
}), ve = {
  "theme-blue": {
    primary: "#005eaa",
    secondary: "#88c3ea",
    tertiary: "#c0e9ff",
    quaternary: "#edf9ff"
  },
  "theme-purple": {
    primary: "#712177",
    secondary: "#b890bb",
    tertiary: "#e3d3e4",
    quaternary: "#f7f2f7"
  },
  "theme-brown": {
    primary: "#705043",
    secondary: "#ad907b",
    tertiary: "#d7ccc8",
    quaternary: "#f2ebe8"
  },
  "theme-teal": {
    primary: "#00695c",
    secondary: "#4ebaaa",
    tertiary: "#ceece7",
    quaternary: "#ebf7f5"
  },
  "theme-pink": {
    primary: "#af4448",
    secondary: "#e57373",
    tertiary: "#ffc2c2",
    quaternary: "#ffe7e7"
  },
  "theme-orange": {
    primary: "#bb4d00",
    secondary: "#ffad42",
    tertiary: "#ffe97d",
    quaternary: "#fff4cf"
  },
  "theme-slate": {
    primary: "#29434e",
    secondary: "#7e9ba5",
    tertiary: "#b6c6d2",
    quaternary: "#e2e8ed"
  },
  "theme-indigo": {
    primary: "#26418f",
    secondary: "#92a6dd",
    tertiary: "#dee8ff",
    quaternary: "#f2f6ff"
  },
  "theme-cyan": {
    primary: "#006778",
    secondary: "#65b0bd",
    tertiary: "#cce5e9",
    quaternary: "#ebf5f6"
  },
  "theme-green": {
    primary: "#4b830d",
    secondary: "#84bc49",
    tertiary: "#dcedc8",
    quaternary: "#f1f8e9"
  },
  "theme-amber": {
    primary: "#fbab18",
    secondary: "#ffd54f",
    tertiary: "#ffecb3",
    quaternary: "#fff7e1"
  }
}, be = ({ text: t, theme: l = "theme-blue", dataFormat: d, biteFontSize: b }) => {
  const f = {
    outerRing: {
      fill: ve[l].primary
    },
    innerRing: {
      fill: $e(ve[l].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ e.createElement("circle", { cx: "50", cy: "50", r: "45", style: f.innerRing, strokeWidth: "10", stroke: f.outerRing.fill }), /* @__PURE__ */ e.createElement("text", { y: "50%", x: "50%", fontSize: b, style: f.text, textAnchor: "middle", dominantBaseline: "central" }, t));
}, dt = (t, l) => {
  switch (l.type) {
    case "SET_CONFIG":
      return { ...t, config: l.payload };
    case "SET_LOADING":
      return { ...t, loading: l.payload };
    case "SET_CURRENT_VIEWPORT":
      return { ...t, currentViewport: l.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...t, coveLoadedHasRan: l.payload };
    case "SET_CONTAINER":
      return { ...t, container: l.payload };
  }
};
const ft = (t) => {
  const { configUrl: l, config: d, isDashboard: b = !1, isEditor: f = !1, setConfig: T, link: E } = t, D = {
    config: d ?? ie,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [m, A] = g.useReducer(dt, D), { config: o, loading: N, currentViewport: I, coveLoadedHasRan: Z, container: q } = m, { title: B, dataColumn: U, dataFunction: P, imageData: S, biteBody: L, biteFontSize: j, dataFormat: W, biteStyle: M, filters: X, subtext: _ } = o, { innerContainerClasses: w, contentClasses: z } = nt(o), J = new et(), ee = new Ye((i) => {
    for (let p of i) {
      let G = Ke(p.contentRect.width * 2);
      A({ type: "SET_CURRENT_VIEWPORT", payload: G });
    }
  }), a = (i) => {
    Object.keys(ie).forEach((p) => {
      i[p] && typeof i[p] == "object" && !Array.isArray(i[p]) && (i[p] = { ...ie[p], ...i[p] });
    }), i.runtime = {}, i.runtime.uniqueId = Date.now(), i.runtime.editorErrorMessage = "", A({ type: "SET_CONFIG", payload: i });
  }, r = async () => {
    let i = d || await (await fetch(l)).json(), p = i.data ?? [];
    if (i.dataUrl) {
      i.dataUrl = `${i.dataUrl}?${lt()}`;
      let x = await at(i.dataUrl);
      x && i.dataDescription && (x = J.autoStandardize(x), x = J.developerStandardize(x, i.dataDescription)), x && (p = x);
    }
    i.data = p;
    const G = { ...await rt(i) };
    a({ ...ie, ...G }), A({ type: "SET_LOADING", payload: !1 });
  }, c = (i = !0) => {
    if (!U || !P)
      return "";
    const p = (n) => {
      if (n == null) {
        console.error('Enter correct value to "applyPrecision()" function ');
        return;
      }
      if (Number.isNaN(n)) {
        console.error(' Argunment isNaN, "applyPrecision()" function ');
        return;
      }
      let s = n, y = Number(o.dataFormat.roundToPlace);
      if (y < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ');
        return;
      }
      return typeof y == "number" && y > -1 && (s = Number(s).toFixed(y)), String(s);
    }, G = (n) => (o.dataFormat.ignoreZeros && (C = C.filter((s) => s && s)), C.length), x = (n) => {
      if (n == null) {
        console.error("Enter valid value for getColumnSum function ");
        return;
      }
      if (n.length === 0 || !Array.isArray(n)) {
        console.error("Arguments are not valid getColumnSum function ");
        return;
      }
      let s = 0;
      return n.length > 1 ? s = n.map((y) => Number(y)).reduce((y, V) => y + V) : s = Number(n[0]), p(s);
    }, R = (n) => {
      if (n == null || !Array.isArray(n)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      o.dataFormat.ignoreZeros && (n = n.filter((y) => y !== 0));
      let s = 0;
      return n.length > 1 ? s = n.map((y) => Number(y)).reduce((y, V) => y + V) / n.length : s = Number(n[0]), p(s);
    }, O = (n = []) => {
      let s = {}, y = -1 / 0;
      for (let H = 0; H < n.length; H++)
        s[n[H]] ? s[n[H]] += 1 : s[n[H]] = 1, s[n[H]] > y && (y = s[n[H]]);
      let V = [];
      for (let H in s)
        s[H] === y && V.push(H);
      return V;
    }, ae = (n) => {
      if (!n.length)
        return;
      const s = Math.floor(n.length / 2), y = [...n].sort((H, He) => H - He), V = n.length % 2 !== 0 ? y[s] : (y[s - 1] + y[s]) / 2;
      return p(V);
    }, ne = (n) => {
      if (n == null)
        return;
      (Number.isNaN(n) || typeof n == "number") && (n = String(n));
      const s = "en-US";
      let y = parseFloat(n).toLocaleString(s, {
        useGrouping: !0,
        maximumFractionDigits: 6
      });
      const V = n.match(/\.\d*?(0*)$/);
      return V && (y += /[1-9]/.test(V[0]) ? V[1] : V[0]), y;
    };
    let v = "", Y = o.data;
    X.map((n) => n.columnName && n.columnValue ? Y = Y.filter(function(s) {
      return s[n.columnName] === n.columnValue;
    }) : !1);
    let C = [];
    switch (Y.length ? Y.forEach((n) => {
      let s = tt(n[U]);
      typeof s == "number" && C.push(s);
    }) : o.dataColumn && o.data && (C = o.data.map((n) => Number(n[o.dataColumn]))), P) {
      case Pe:
        v = G();
        break;
      case ze:
        v = x(C);
        break;
      case Be:
        v = R(C);
        break;
      case Me:
        v = ae(C);
        break;
      case Ie:
        v = Math.max(...C);
        break;
      case Ue:
        v = Math.min(...C);
        break;
      case Le:
        v = O(C).join("");
        break;
      case pe:
        let n = Math.min(...C), s = Math.max(...C);
        n = p(n), s = p(s), o.dataFormat.commas && (n = ne(n), s = ne(s)), v = o.dataFormat.prefix + n + o.dataFormat.suffix + " - " + o.dataFormat.prefix + s + o.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + P);
    }
    return P !== pe && (v = p(v), o.dataFormat.commas && (v = ne(v))), i ? W.prefix + v + W.suffix : v;
  }, u = g.useCallback((i) => {
    i !== null && ee.observe(i), A({ type: "SET_CONTAINER", payload: i });
  }, []);
  g.useEffect(() => {
    r(), Ee("cove_loaded", { loadConfigHasRun: !0 });
  }, []), g.useEffect(() => {
    o && !Z && q && (Ee("cove_loaded", { config: o }), A({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [o, q]), d && o && JSON.stringify(d.data) !== JSON.stringify(o.data) && r();
  let k = /* @__PURE__ */ e.createElement(Qe, null);
  const F = g.useCallback(() => {
    var x;
    let i = {
      "<": (R, O) => R < O,
      ">": (R, O) => R > O,
      "<=": (R, O) => R <= O,
      ">=": (R, O) => R >= O,
      "≠": (R, O) => R !== O,
      "=": (R, O) => R === O
    }, p = S.url, G = S.alt;
    if (S.display === "dynamic" && S.options && ((x = S.options) == null ? void 0 : x.length) > 0) {
      let R = Number(c(!1)), O = !1;
      S.options.forEach((ae, ne) => {
        var n, s;
        let v = ae.arguments, { source: Y, alt: C } = ae;
        O === !1 && v.length > 0 && v[0].operator.length > 0 && v[0].threshold.length > 0 && i[v[0].operator](R, v[0].threshold) && (v[1] !== void 0 ? ((n = v[1].operator) == null ? void 0 : n.length) > 0 && ((s = v[1].threshold) == null ? void 0 : s.length) > 0 && i[v[1].operator](R, v[1].threshold) && (p = Y, C !== "" && C !== void 0 && (G = C), O = !0) : (p = Y, C !== "" && C !== void 0 && (G = C), O = !0));
      });
    }
    return p.length > 0 && M !== "graphic" && S.display !== "none" ? /* @__PURE__ */ e.createElement("img", { alt: G, src: p, className: "bite-image callout" }) : null;
  }, [S]);
  if (N === !1) {
    let i = [], p = !1, G = !1;
    switch (o.bitePosition) {
      case Ve:
        i.push("bite-left"), p = !0;
        break;
      case qe:
        i.push("bite-right"), p = !0;
        break;
      case je:
        i.push("bite-top"), p = !0;
        break;
      case Ge:
        i.push("bite-bottom"), G = !0;
        break;
    }
    const x = U !== void 0 && P !== void 0;
    k = /* @__PURE__ */ e.createElement(e.Fragment, null, f && /* @__PURE__ */ e.createElement(ut, null), /* @__PURE__ */ e.createElement("div", { className: f ? "spacing-wrapper" : "" }, /* @__PURE__ */ e.createElement("div", { className: w.join(" ") }, /* @__PURE__ */ e.createElement(Xe, { config: o, title: B, isDashboard: b, classes: ["bite-header", `${o.theme}`] }), /* @__PURE__ */ e.createElement("div", { className: `bite ${i.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: `bite-content-container ${z.join(" ")}` }, x && M === "graphic" && p && /* @__PURE__ */ e.createElement(be, { theme: o.theme, text: c(), biteFontSize: j, dataFormat: W }), p && /* @__PURE__ */ e.createElement(F, null), /* @__PURE__ */ e.createElement("div", { className: "bite-content" }, x && M === "title" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: j + "px" } }, c()), x && M === "split" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: j + "px" } }, c()), /* @__PURE__ */ e.createElement(g.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ e.createElement("p", { className: "bite-text" }, x && M === "body" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: j + "px" } }, c()), ge(L)), x && M === "end" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: j + "px" } }, c()), _ && !o.general.isCompactStyle && /* @__PURE__ */ e.createElement("p", { className: "bite-subtext" }, ge(_))))), G && /* @__PURE__ */ e.createElement(F, null), x && M === "graphic" && !p && /* @__PURE__ */ e.createElement(be, { theme: o.theme, text: c(), biteFontSize: j, dataFormat: W })))), E && E));
  }
  let h = ["cove", "cdc-open-viz-module", "type-data-bite", I, o.theme, "font-" + o.fontSize];
  return f && h.push("is-editor"), /* @__PURE__ */ e.createElement(Re.Provider, { value: { config: o, updateConfig: a, loading: N, data: o.data, setParentConfig: T, isDashboard: b } }, /* @__PURE__ */ e.createElement("div", { className: h.join(" "), ref: u }, k));
}, Ie = "Max", Pe = "Count", Be = "Mean (Average)", Me = "Median", Ue = "Min", Le = "Mode", pe = "Range", ze = "Sum", pt = [Pe, Ie, Be, Me, Ue, Le, pe, ze], gt = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message"
}, Ve = "Left", qe = "Right", je = "Top", Ge = "Bottom", Et = [Ve, qe, je, Ge], ht = "<", vt = ">", bt = "<=", yt = ">=", Nt = "=", _t = "≠", ye = [ht, vt, bt, yt, Nt, _t], Ut = {
  title: "Components/Templates/Data Bite",
  component: ft
}, se = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json"
  }
}, me = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json"
  }
}, ue = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json"
  }
}, de = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json"
  }
};
var Ne, _e, De;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(Ne = se.parameters) == null ? void 0 : Ne.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json'
  }
}`,
      ...(De = (_e = se.parameters) == null ? void 0 : _e.docs) == null ? void 0 : De.source
    }
  }
};
var Ae, Ce, Te;
me.parameters = {
  ...me.parameters,
  docs: {
    ...(Ae = me.parameters) == null ? void 0 : Ae.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json'
  }
}`,
      ...(Te = (Ce = me.parameters) == null ? void 0 : Ce.docs) == null ? void 0 : Te.source
    }
  }
};
var Se, xe, we;
ue.parameters = {
  ...ue.parameters,
  docs: {
    ...(Se = ue.parameters) == null ? void 0 : Se.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json'
  }
}`,
      ...(we = (xe = ue.parameters) == null ? void 0 : xe.docs) == null ? void 0 : we.source
    }
  }
};
var Fe, Oe, ke;
de.parameters = {
  ...de.parameters,
  docs: {
    ...(Fe = de.parameters) == null ? void 0 : Fe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json'
  }
}`,
      ...(ke = (Oe = de.parameters) == null ? void 0 : Oe.docs) == null ? void 0 : ke.source
    }
  }
};
const Lt = ["Data_Bite_Circle_Average", "Data_Bite_Text_Max_Pic", "Data_Bite_Circle_Sum", "Data_Bite_Text_Average_Pic"];
export {
  se as Data_Bite_Circle_Average,
  ue as Data_Bite_Circle_Sum,
  de as Data_Bite_Text_Average_Pic,
  me as Data_Bite_Text_Max_Pic,
  Lt as __namedExportsOrder,
  Ut as default
};
