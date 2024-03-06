import { r as p, R as e } from "./storybook-index-45401197.es.js";
import { A as $e, a as re, b as le, c as oe, d as ce, D as Ze } from "./storybook-index-964548d8.es.js";
import { a as fe, c as Je } from "./storybook-Icon-58d1c99f.es.js";
import { T as Q } from "./storybook-Tooltip-edc0f7ab.es.js";
import { E as Qe, L as Xe } from "./storybook-Loading-f180d060.es.js";
import { u as Ye } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as Ke, H as ge } from "./storybook-index-d4b80c61.es.js";
import { c as et } from "./storybook-chroma-b564050a.es.js";
import { a as tt, g as at } from "./storybook-isSolr-6a0136d5.es.js";
import { n as nt } from "./storybook-numberFromString-24623c03.es.js";
import { f as rt } from "./storybook-fetchRemoteData-6254352f.es.js";
import { u as lt, p as Ee, c as ot } from "./storybook-coveUpdateWorker-a9880235.es.js";
import { c as ct } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
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
}, Ie = p.createContext({});
function it(t, r, u) {
  var b = this, d = p.useRef(null), C = p.useRef(0), g = p.useRef(null), D = p.useRef([]), i = p.useRef(), T = p.useRef(), o = p.useRef(t), N = p.useRef(!0);
  o.current = t;
  var R = !r && r !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, u = u || {};
  var $ = !!u.leading, z = "trailing" in u ? !!u.trailing : !0, P = "maxWait" in u, B = P ? Math.max(+u.maxWait || 0, r) : null;
  p.useEffect(function() {
    return N.current = !0, function() {
      N.current = !1;
    };
  }, []);
  var I = p.useMemo(function() {
    var S = function(_) {
      var w = D.current, U = i.current;
      return D.current = i.current = null, C.current = _, T.current = o.current.apply(U, w);
    }, M = function(_, w) {
      R && cancelAnimationFrame(g.current), g.current = R ? requestAnimationFrame(_) : setTimeout(_, w);
    }, q = function(_) {
      if (!N.current)
        return !1;
      var w = _ - d.current, U = _ - C.current;
      return !d.current || w >= r || w < 0 || P && U >= B;
    }, H = function(_) {
      return g.current = null, z && D.current ? S(_) : (D.current = i.current = null, T.current);
    }, O = function() {
      var _ = Date.now();
      if (q(_))
        return H(_);
      if (N.current) {
        var w = _ - d.current, U = _ - C.current, Z = r - w, ee = P ? Math.min(Z, B - U) : Z;
        M(O, ee);
      }
    }, X = function() {
      for (var _ = [], w = 0; w < arguments.length; w++)
        _[w] = arguments[w];
      var U = Date.now(), Z = q(U);
      if (D.current = _, i.current = b, d.current = U, Z) {
        if (!g.current && N.current)
          return C.current = d.current, M(O, r), $ ? S(d.current) : T.current;
        if (P)
          return M(O, r), S(d.current);
      }
      return g.current || M(O, r), T.current;
    };
    return X.cancel = function() {
      g.current && (R ? cancelAnimationFrame(g.current) : clearTimeout(g.current)), C.current = 0, D.current = d.current = i.current = g.current = null;
    }, X.isPending = function() {
      return !!g.current;
    }, X.flush = function() {
      return g.current ? H(Date.now()) : T.current;
    }, X;
  }, [$, P, r, B, z, R]);
  return I;
}
function st(t, r) {
  return t === r;
}
function ve(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function mt(t) {
  var r = p.useState(ve(t)), u = r[0], b = r[1], d = p.useCallback(function(C) {
    return b(ve(C));
  }, []);
  return [u, d];
}
function ut(t, r, u) {
  var b = u && u.equalityFn || st, d = mt(t), C = d[0], g = d[1], D = it(p.useCallback(function(T) {
    return g(T);
  }, [g]), r, u), i = p.useRef(t);
  return b(i.current, t) || (D(t), i.current = t), [C, D];
}
const W = p.memo(({ label: t, section: r = null, subsection: u = null, fieldName: b, updateField: d, value: C, tooltip: g, type: D = "input", i = null, min: T = null, max: o = null, ...N }) => {
  const [R, $] = p.useState(C), [z] = ut(R, 500);
  p.useEffect(() => {
    typeof z == "string" && C !== z && d(r, u, b, z, i);
  }, [z, r, u, b, i, C, d]);
  let P = u ? `${r}-${u}-${b}` : `${r}-${u}-${b}`;
  const B = (S) => {
    D !== "number" || T === null || !S.target.value || parseFloat(T) <= parseFloat(S.target.value) & parseFloat(o) >= parseFloat(S.target.value) ? $(S.target.value) : $(T.toString());
  };
  let I = /* @__PURE__ */ e.createElement("input", { type: "text", name: P, onChange: B, ...N, value: R });
  return D === "textarea" && (I = /* @__PURE__ */ e.createElement("textarea", { name: P, onChange: B, ...N, value: R })), D === "number" && (I = /* @__PURE__ */ e.createElement("input", { type: "number", name: P, onChange: B, ...N, value: R })), /* @__PURE__ */ e.createElement(e.Fragment, null, t && t.length > 0 && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t, g), I), (!t || t.length === 0) && I);
}), K = p.memo(({ label: t, value: r, fieldName: u, section: b = null, subsection: d = null, tooltip: C, updateField: g, ...D }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: u,
    checked: r,
    onChange: () => {
      g(b, d, u, !r);
    },
    ...D
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, C))), te = p.memo(({ label: t, value: r, options: u, fieldName: b, section: d = null, subsection: C = null, required: g = !1, updateField: D, initial: i, ...T }) => {
  let o = "";
  if (Array.isArray(u))
    o = u.map((N) => /* @__PURE__ */ e.createElement("option", { value: N, key: N }, N));
  else {
    o = [];
    for (const [N, R] of Object.entries(u))
      o.push(
        /* @__PURE__ */ e.createElement("option", { value: N, key: N }, R)
      );
  }
  return i && o.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, i)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, t), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: g && !r ? "warning" : "",
      name: b,
      value: r,
      onChange: (N) => {
        D(d, C, b, N.target.value);
      },
      ...T
    },
    o
  ));
}), dt = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], he = p.memo(() => {
  var _, w, U, Z, ee;
  const { config: t, updateConfig: r, loading: u, data: b, setParentConfig: d, isDashboard: C } = p.useContext(Ie), [g, D] = p.useState(!0), i = Ye(t, r, !0), T = () => !1;
  p.useEffect(() => {
    if (d) {
      const n = $();
      delete n.newViz, d(n);
    }
  }, [t]);
  const o = () => {
    D(!g);
  }, N = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, t.runtime.editorErrorMessage))), R = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn",
      style: { margin: "1em auto" },
      disabled: T(),
      onClick: (n) => {
        n.preventDefault(), r({ ...t, newViz: !1 });
      }
    },
    "I'm Done"
  ))), $ = () => {
    let n = JSON.parse(JSON.stringify(t));
    return delete n.runtime, n;
  }, z = (n) => {
    let l = [...t.filters];
    l.splice(n, 1), r({ ...t, filters: l });
  }, P = (n, l, m) => {
    let E = [...t.filters];
    E[l][n] = m, r({ ...t, filters: E });
  }, B = () => {
    let n = t.filters ? [...t.filters] : [];
    n.push({ values: [] }), r({ ...t, filters: n });
  }, I = (n = !0) => {
    let l = {};
    return b.length && b.map((m) => Object.keys(m).forEach((E) => l[E] = !0)), Object.keys(l);
  }, S = (n) => {
    let l = [];
    const m = t.filters[n].columnName;
    return b && m && (b.forEach(function(E) {
      E[m] !== void 0 && l.indexOf(E[m]) === -1 && l.push(E[m]);
    }), l.sort()), l;
  }, M = (n, l, m = null, E) => {
    let L = [...t.imageData.options];
    m === null ? L[l][n] = E : L[l].arguments[m][n] = E;
    let J = { ...t.imageData, options: L };
    r({ ...t, imageData: J });
  }, q = (n, l, m) => {
    let E = [...t.imageData.options[n].arguments];
    E[1] = { ...E[1], [l]: m };
    let L = { ...t.imageData.options[n], arguments: E }, J = [...t.imageData.options];
    J[n] = L;
    let h = { ...t.imageData, options: J };
    r({ ...t, imageData: h });
  }, H = (n) => {
    if (t.imageData.options[n].arguments.length > 1) {
      let l = [...t.imageData.options[n].arguments];
      l.pop();
      let m = { ...t.imageData.options[n], arguments: l }, E = [...t.imageData.options];
      E[n] = m;
      let L = { ...t.imageData, options: E };
      r({ ...t, imageData: L });
    }
  }, O = () => {
    let n = t.imageData.options ? [...t.imageData.options] : [];
    n.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let l = { ...t.imageData, options: n };
    r({ ...t, imageData: l });
  }, X = (n) => {
    let l = [...t.imageData.options];
    l.splice(n, 1);
    let m = { ...t.imageData, options: l };
    r({ ...t, imageData: m });
  };
  return u ? null : /* @__PURE__ */ e.createElement(Qe, { component: "EditorPanel" }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(N, null), (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(R, null), /* @__PURE__ */ e.createElement("button", { className: g ? "editor-toggle" : "editor-toggle collapsed", title: g ? "Collapse Editor" : "Expand Editor", onClick: o }), /* @__PURE__ */ e.createElement("section", { className: g ? "editor-panel cove" : "hidden editor-panel cove" }, /* @__PURE__ */ e.createElement("div", { className: "heading-2" }, "Configure Data Bite"), /* @__PURE__ */ e.createElement("section", { className: "form-container" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement($e, { allowZeroExpanded: !0 }, /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "General")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(te, { value: t.biteStyle, fieldName: "biteStyle", label: "Data Bite Style", updateField: i, options: vt, initial: "Select" }), /* @__PURE__ */ e.createElement(W, { value: t.title, fieldName: "title", label: "Title", placeholder: "Data Bite Title", updateField: i }), /* @__PURE__ */ e.createElement(
    W,
    {
      type: "textarea",
      value: t.biteBody,
      fieldName: "biteBody",
      label: "Message",
      updateField: i,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    W,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Data Bite Subtext or Citation",
      updateField: i,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Data ", (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(Je, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "two-col" }, /* @__PURE__ */ e.createElement(te, { value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: i, initial: "Select", required: !0, options: I() }), /* @__PURE__ */ e.createElement(te, { value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: i, initial: "Select", required: !0, options: Et }))), /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(W, { value: t.dataFormat.prefix, section: "dataFormat", fieldName: "prefix", label: "Prefix", updateField: i }), /* @__PURE__ */ e.createElement(W, { value: t.dataFormat.suffix, section: "dataFormat", fieldName: "suffix", label: "Suffix", updateField: i }), /* @__PURE__ */ e.createElement(W, { type: "number", value: t.dataFormat.roundToPlace, section: "dataFormat", fieldName: "roundToPlace", label: "Round", updateField: i, min: "0", max: "99" }))), /* @__PURE__ */ e.createElement(K, { value: t.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: t.dataFormat.ignoreZeros, section: "dataFormat", fieldName: "ignoreZeros", label: "Ignore Zeros", updateField: i }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((n, l) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: l }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        z(l);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: n.columnName ? n.columnName : "",
      onChange: (m) => {
        P("columnName", l, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    I().map((m, E) => /* @__PURE__ */ e.createElement("option", { value: m, key: E }, m))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: n.columnValue,
      onChange: (m) => {
        P("columnValue", l, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    S(l).map((m, E) => /* @__PURE__ */ e.createElement("option", { value: m, key: E }, m))
  ))))), (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: B, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Visual")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(W, { type: "number", value: t.biteFontSize, fieldName: "biteFontSize", label: "Bite Font Size", updateField: i, min: "17", max: "65" }), /* @__PURE__ */ e.createElement(te, { value: t.fontSize, fieldName: "fontSize", label: "Overall Font Size", updateField: i, options: ["small", "medium", "large"] }), /* @__PURE__ */ e.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ e.createElement(K, { value: (_ = t.visual) == null ? void 0 : _.border, section: "visual", fieldName: "border", label: "Display Border", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (w = t.visual) == null ? void 0 : w.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (U = t.visual) == null ? void 0 : U.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (Z = t.visual) == null ? void 0 : Z.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (ee = t.visual) == null ? void 0 : ee.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: i })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, dt.map((n) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: n,
      key: n,
      onClick: () => {
        r({ ...t, theme: n });
      },
      className: t.theme === n ? "selected " + n : n
    }
  )))))), ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Image", ["dynamic"].includes(t.imageData.display) && "s")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(te, { value: t.imageData.display || "", section: "imageData", fieldName: "display", label: "Image Display Type", updateField: i, options: ["none", "static", "dynamic"] }), /* @__PURE__ */ e.createElement(te, { value: t.bitePosition || "", fieldName: "bitePosition", label: "Image/Graphic Position", updateField: i, initial: "Select", options: ht }), ["static"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(W, { value: t.imageData.url, section: "imageData", fieldName: "url", label: "Image URL", updateField: i }), /* @__PURE__ */ e.createElement(W, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text", updateField: i })), ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(W, { value: t.imageData.url || "", section: "imageData", fieldName: "url", label: "Image URL (default)", updateField: i }), /* @__PURE__ */ e.createElement(W, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text (default)", updateField: i }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), (!t.imageData.options || t.imageData.options.length === 0) && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no dynamic images."), t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", null, t.imageData.options.map((n, l) => {
    var m, E, L, J;
    return /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: l }, /* @__PURE__ */ e.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: () => {
          X(l);
        }
      },
      "Remove"
    ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, /* @__PURE__ */ e.createElement("strong", null, "Image #" + (l + 1))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((m = n.arguments[0]) == null ? void 0 : m.operator) || "",
        onChange: (h) => {
          M("operator", l, 0, h.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      Ne.map((h, s) => /* @__PURE__ */ e.createElement("option", { value: h, key: s }, h))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((E = n.arguments[0]) == null ? void 0 : E.threshold) || "",
        onChange: (h) => {
          M("threshold", l, 0, h.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        className: "border-dashed text-center",
        value: n.secondArgument ? "and" : "then",
        onChange: (h) => {
          h.target.value === "then" && (M("secondArgument", l, null, !1), H(l)), h.target.value === "and" && M("secondArgument", l, null, !0);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "then" }, "Then"),
      /* @__PURE__ */ e.createElement("option", { value: "and" }, "And")
    ))), n.secondArgument && n.secondArgument === !0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((L = n.arguments[1]) == null ? void 0 : L.operator) || "",
        onChange: (h) => {
          q(l, "operator", h.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      Ne.map((h, s) => /* @__PURE__ */ e.createElement("option", { value: h, key: s }, h))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((J = n.arguments[1]) == null ? void 0 : J.threshold) || "",
        onChange: (h) => {
          q(l, "threshold", h.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: n.source || "",
        onChange: (h) => {
          M("source", l, null, h.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: n.alt || "",
        onChange: (h) => {
          M("alt", l, null, h.target.value);
        }
      }
    )))));
  }))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: O, className: "btn full-width" }, "Add Dynamic Image")))))))));
}), be = {
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
}, ye = ({ text: t, theme: r = "theme-blue", dataFormat: u, biteFontSize: b }) => {
  const d = {
    outerRing: {
      fill: be[r].primary
    },
    innerRing: {
      fill: et(be[r].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ e.createElement("circle", { cx: "50", cy: "50", r: "45", style: d.innerRing, strokeWidth: "10", stroke: d.outerRing.fill }), /* @__PURE__ */ e.createElement("text", { y: "50%", x: "50%", fontSize: b, style: d.text, textAnchor: "middle", dominantBaseline: "central" }, t));
};
const ft = ({ label: t, value: r }) => /* @__PURE__ */ e.createElement("div", { className: "kpi-container" }, /* @__PURE__ */ e.createElement("div", { className: "kpi-content" }, /* @__PURE__ */ e.createElement("div", { className: "label-container" }, /* @__PURE__ */ e.createElement("span", { className: "label" }, /* @__PURE__ */ e.createElement("strong", null, t))), /* @__PURE__ */ e.createElement("div", { className: "value-container" }, /* @__PURE__ */ e.createElement("span", { className: "value" }, /* @__PURE__ */ e.createElement("strong", null, r))))), pt = (t, r) => {
  switch (r.type) {
    case "SET_CONFIG":
      return { ...t, config: r.payload };
    case "SET_LOADING":
      return { ...t, loading: r.payload };
    case "SET_CURRENT_VIEWPORT":
      return { ...t, currentViewport: r.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...t, coveLoadedHasRan: r.payload };
    case "SET_CONTAINER":
      return { ...t, container: r.payload };
  }
};
const gt = (t) => {
  const { configUrl: r, config: u, isDashboard: b = !1, isEditor: d = !1, setConfig: C, link: g } = t, D = {
    config: u ?? ie,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [i, T] = p.useReducer(pt, D), { config: o, loading: N, currentViewport: R, coveLoadedHasRan: $, container: z } = i, { title: P, dataColumn: B, dataFunction: I, imageData: S, biteBody: M, biteFontSize: q, dataFormat: H, biteStyle: O, filters: X, subtext: _ } = o, { innerContainerClasses: w, contentClasses: U } = lt(o), Z = new Ze(), ee = new tt((s) => {
    for (let f of s) {
      let j = at(f.contentRect.width * 2);
      T({ type: "SET_CURRENT_VIEWPORT", payload: j });
    }
  }), n = (s) => {
    Object.keys(ie).forEach((f) => {
      s[f] && typeof s[f] == "object" && !Array.isArray(s[f]) && (s[f] = { ...ie[f], ...s[f] });
    }), s.runtime = {}, s.runtime.uniqueId = Date.now(), s.runtime.editorErrorMessage = "", T({ type: "SET_CONFIG", payload: s });
  }, l = async () => {
    let s = u || await (await fetch(r)).json(), f = s.data ?? [];
    if (s.dataUrl) {
      s.dataUrl = `${s.dataUrl}?${ct()}`;
      let x = await rt(s.dataUrl);
      x && s.dataDescription && (x = Z.autoStandardize(x), x = Z.developerStandardize(x, s.dataDescription)), x && (f = x);
    }
    s.data = f;
    const j = { ...await ot(s) };
    n({ ...ie, ...j }), T({ type: "SET_LOADING", payload: !1 });
  }, m = (s = !0) => {
    if (!B || !I)
      return "";
    const f = (a) => {
      if (a == null) {
        console.error('Enter correct value to "applyPrecision()" function ');
        return;
      }
      if (Number.isNaN(a)) {
        console.error(' Argunment isNaN, "applyPrecision()" function ');
        return;
      }
      let c = a, y = Number(o.dataFormat.roundToPlace);
      if (y < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ');
        return;
      }
      return typeof y == "number" && y > -1 && (c = Number(c).toFixed(y)), String(c);
    }, j = (a) => (o.dataFormat.ignoreZeros && (A = A.filter((c) => c && c)), A.length), x = (a) => {
      if (a == null) {
        console.error("Enter valid value for getColumnSum function ");
        return;
      }
      if (a.length === 0 || !Array.isArray(a)) {
        console.error("Arguments are not valid getColumnSum function ");
        return;
      }
      let c = 0;
      return a.length > 1 ? c = a.map((y) => Number(y)).reduce((y, V) => y + V) : c = Number(a[0]), f(c);
    }, k = (a) => {
      if (a == null || !Array.isArray(a)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      o.dataFormat.ignoreZeros && (a = a.filter((y) => y !== 0));
      let c = 0;
      return a.length > 1 ? c = a.map((y) => Number(y)).reduce((y, V) => y + V) / a.length : c = Number(a[0]), f(c);
    }, F = (a = []) => {
      let c = {}, y = -1 / 0;
      for (let G = 0; G < a.length; G++)
        c[a[G]] ? c[a[G]] += 1 : c[a[G]] = 1, c[a[G]] > y && (y = c[a[G]]);
      let V = [];
      for (let G in c)
        c[G] === y && V.push(G);
      return V;
    }, ae = (a) => {
      if (!a.length)
        return;
      const c = Math.floor(a.length / 2), y = [...a].sort((G, We) => G - We), V = a.length % 2 !== 0 ? y[c] : (y[c - 1] + y[c]) / 2;
      return f(V);
    }, ne = (a) => {
      if (a == null)
        return;
      (Number.isNaN(a) || typeof a == "number") && (a = String(a));
      const c = "en-US";
      let y = parseFloat(a).toLocaleString(c, {
        useGrouping: !0,
        maximumFractionDigits: 6
      });
      const V = a.match(/\.\d*?(0*)$/);
      return V && (y += /[1-9]/.test(V[0]) ? V[1] : V[0]), y;
    };
    let v = "", Y = o.data;
    X.map((a) => a.columnName && a.columnValue ? Y = Y.filter(function(c) {
      return c[a.columnName] === a.columnValue;
    }) : !1);
    let A = [];
    switch (Y.length ? Y.forEach((a) => {
      let c = nt(a[B]);
      typeof c == "number" && A.push(c);
    }) : o.dataColumn && o.data && (A = o.data.map((a) => Number(a[o.dataColumn]))), I) {
      case Be:
        v = j();
        break;
      case ze:
        v = x(A);
        break;
      case Me:
        v = k(A);
        break;
      case Ue:
        v = ae(A);
        break;
      case Pe:
        v = Math.max(...A);
        break;
      case Le:
        v = Math.min(...A);
        break;
      case Ve:
        v = F(A).join("");
        break;
      case pe:
        let a = Math.min(...A), c = Math.max(...A);
        a = f(a), c = f(c), o.dataFormat.commas && (a = ne(a), c = ne(c)), v = o.dataFormat.prefix + a + o.dataFormat.suffix + " - " + o.dataFormat.prefix + c + o.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + I);
    }
    return I !== pe && (v = f(v), o.dataFormat.commas && (v = ne(v))), s ? H.prefix + v + H.suffix : v;
  }, E = p.useCallback((s) => {
    s !== null && ee.observe(s), T({ type: "SET_CONTAINER", payload: s });
  }, []);
  p.useEffect(() => {
    l(), Ee("cove_loaded", { loadConfigHasRun: !0 });
  }, []), p.useEffect(() => {
    o && !$ && z && (Ee("cove_loaded", { config: o }), T({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [o, z]), u && o && JSON.stringify(u.data) !== JSON.stringify(o.data) && l();
  let L = /* @__PURE__ */ e.createElement(Xe, null);
  const J = p.useCallback(() => {
    var x;
    let s = {
      "<": (k, F) => k < F,
      ">": (k, F) => k > F,
      "<=": (k, F) => k <= F,
      ">=": (k, F) => k >= F,
      "≠": (k, F) => k !== F,
      "=": (k, F) => k === F
    }, f = S.url, j = S.alt;
    if (S.display === "dynamic" && S.options && ((x = S.options) == null ? void 0 : x.length) > 0) {
      let k = Number(m(!1)), F = !1;
      S.options.forEach((ae, ne) => {
        var a, c;
        let v = ae.arguments, { source: Y, alt: A } = ae;
        F === !1 && v.length > 0 && v[0].operator.length > 0 && v[0].threshold.length > 0 && s[v[0].operator](k, v[0].threshold) && (v[1] !== void 0 ? ((a = v[1].operator) == null ? void 0 : a.length) > 0 && ((c = v[1].threshold) == null ? void 0 : c.length) > 0 && s[v[1].operator](k, v[1].threshold) && (f = Y, A !== "" && A !== void 0 && (j = A), F = !0) : (f = Y, A !== "" && A !== void 0 && (j = A), F = !0));
      });
    }
    return f.length > 0 && O !== "graphic" && S.display !== "none" ? /* @__PURE__ */ e.createElement("img", { alt: j, src: f, className: "bite-image callout" }) : null;
  }, [S]);
  if (N === !1) {
    let s = [], f = !1, j = !1;
    switch (o.bitePosition) {
      case qe:
        s.push("bite-left"), f = !0;
        break;
      case je:
        s.push("bite-right"), f = !0;
        break;
      case Ge:
        s.push("bite-top"), f = !0;
        break;
      case He:
        s.push("bite-bottom"), j = !0;
        break;
    }
    const x = B !== void 0 && I !== void 0;
    L = /* @__PURE__ */ e.createElement(e.Fragment, null, d && /* @__PURE__ */ e.createElement(he, null), /* @__PURE__ */ e.createElement("div", { className: d ? "spacing-wrapper" : "" }, /* @__PURE__ */ e.createElement("div", { className: w.join(" ") }, /* @__PURE__ */ e.createElement(Ke, { config: o, title: P, isDashboard: b, classes: ["bite-header", `${o.theme}`] }), /* @__PURE__ */ e.createElement("div", { className: `bite ${s.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: `bite-content-container ${U.join(" ")}` }, x && O === "graphic" && f && /* @__PURE__ */ e.createElement(ye, { theme: o.theme, text: m(), biteFontSize: q, dataFormat: H }), f && /* @__PURE__ */ e.createElement(J, null), /* @__PURE__ */ e.createElement("div", { className: "bite-content" }, x && O === "title" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: q + "px" } }, m()), x && O === "split" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: q + "px" } }, m()), /* @__PURE__ */ e.createElement(p.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ e.createElement("p", { className: "bite-text" }, x && O === "body" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: q + "px" } }, m()), ge(M)), x && O === "end" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: q + "px" } }, m()), _ && !o.general.isCompactStyle && /* @__PURE__ */ e.createElement("p", { className: "bite-subtext" }, ge(_))))), j && /* @__PURE__ */ e.createElement(J, null), x && O === "graphic" && !f && /* @__PURE__ */ e.createElement(ye, { theme: o.theme, text: m(), biteFontSize: q, dataFormat: H })))), g && g));
  }
  let h = ["cove", "cdc-open-viz-module", "type-data-bite", R, o.theme, "font-" + o.fontSize];
  return d && h.push("is-editor"), /* @__PURE__ */ e.createElement(Ie.Provider, { value: { config: o, updateConfig: n, loading: N, data: o.data, setParentConfig: C, isDashboard: b } }, O !== "gradient" && /* @__PURE__ */ e.createElement("div", { className: h.join(" "), ref: E }, L), O === "gradient" && /* @__PURE__ */ e.createElement("div", { className: h.join(" "), ref: E }, d && /* @__PURE__ */ e.createElement(he, null), /* @__PURE__ */ e.createElement("div", { className: d ? "spacing-wrapper" : "" }, /* @__PURE__ */ e.createElement(ft, { label: o.title, value: m() }))));
}, Pe = "Max", Be = "Count", Me = "Mean (Average)", Ue = "Median", Le = "Min", Ve = "Mode", pe = "Range", ze = "Sum", Et = [Be, Pe, Me, Ue, Le, Ve, pe, ze], vt = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message",
  gradient: "Gradient"
}, qe = "Left", je = "Right", Ge = "Top", He = "Bottom", ht = [qe, je, Ge, He], bt = "<", yt = ">", Nt = "<=", _t = ">=", Dt = "=", Tt = "≠", Ne = [bt, yt, Nt, _t, Dt, Tt], zt = {
  title: "Components/Templates/Data Bite",
  component: gt
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
var _e, De, Te;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(_e = se.parameters) == null ? void 0 : _e.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json'
  }
}`,
      ...(Te = (De = se.parameters) == null ? void 0 : De.docs) == null ? void 0 : Te.source
    }
  }
};
var Ae, Ce, Se;
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
      ...(Se = (Ce = me.parameters) == null ? void 0 : Ce.docs) == null ? void 0 : Se.source
    }
  }
};
var xe, we, Fe;
ue.parameters = {
  ...ue.parameters,
  docs: {
    ...(xe = ue.parameters) == null ? void 0 : xe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json'
  }
}`,
      ...(Fe = (we = ue.parameters) == null ? void 0 : we.docs) == null ? void 0 : Fe.source
    }
  }
};
var Oe, ke, Re;
de.parameters = {
  ...de.parameters,
  docs: {
    ...(Oe = de.parameters) == null ? void 0 : Oe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json'
  }
}`,
      ...(Re = (ke = de.parameters) == null ? void 0 : ke.docs) == null ? void 0 : Re.source
    }
  }
};
const qt = ["Data_Bite_Circle_Average", "Data_Bite_Text_Max_Pic", "Data_Bite_Circle_Sum", "Data_Bite_Text_Average_Pic"];
export {
  se as Data_Bite_Circle_Average,
  ue as Data_Bite_Circle_Sum,
  de as Data_Bite_Text_Average_Pic,
  me as Data_Bite_Text_Max_Pic,
  qt as __namedExportsOrder,
  zt as default
};
