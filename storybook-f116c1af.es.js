import { r as p, R as e } from "./storybook-e61d95ab.es.js";
import { A as We, a as re, b as le, c as oe, d as ce, D as $e } from "./storybook-441ad5c2.es.js";
import { a as fe, c as Ze } from "./storybook-2ad7d390.es.js";
import { T as Q } from "./storybook-a16f6c8c.es.js";
import { E as Je, L as Qe } from "./storybook-a0c99f4a.es.js";
import { u as Xe } from "./storybook-c006040a.es.js";
import { T as Ye, H as ge } from "./storybook-826feda6.es.js";
import { c as Ke } from "./storybook-1d43892b.es.js";
import { a as et, g as tt } from "./storybook-6a0136d5.es.js";
import { n as at } from "./storybook-24623c03.es.js";
import { f as nt } from "./storybook-b6bb4d22.es.js";
import { u as rt, p as Ee, c as lt } from "./storybook-a9880235.es.js";
import { c as ot } from "./storybook-7a3dd9ba.es.js";
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
}, Re = p.createContext({});
function ct(t, r, u) {
  var b = this, d = p.useRef(null), C = p.useRef(0), g = p.useRef(null), D = p.useRef([]), i = p.useRef(), T = p.useRef(), o = p.useRef(t), N = p.useRef(!0);
  o.current = t;
  var k = !r && r !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, u = u || {};
  var $ = !!u.leading, z = "trailing" in u ? !!u.trailing : !0, I = "maxWait" in u, B = I ? Math.max(+u.maxWait || 0, r) : null;
  p.useEffect(function() {
    return N.current = !0, function() {
      N.current = !1;
    };
  }, []);
  var R = p.useMemo(function() {
    var S = function(_) {
      var w = D.current, U = i.current;
      return D.current = i.current = null, C.current = _, T.current = o.current.apply(U, w);
    }, M = function(_, w) {
      k && cancelAnimationFrame(g.current), g.current = k ? requestAnimationFrame(_) : setTimeout(_, w);
    }, q = function(_) {
      if (!N.current)
        return !1;
      var w = _ - d.current, U = _ - C.current;
      return !d.current || w >= r || w < 0 || I && U >= B;
    }, H = function(_) {
      return g.current = null, z && D.current ? S(_) : (D.current = i.current = null, T.current);
    }, P = function() {
      var _ = Date.now();
      if (q(_))
        return H(_);
      if (N.current) {
        var w = _ - d.current, U = _ - C.current, Z = r - w, ee = I ? Math.min(Z, B - U) : Z;
        M(P, ee);
      }
    }, X = function() {
      for (var _ = [], w = 0; w < arguments.length; w++)
        _[w] = arguments[w];
      var U = Date.now(), Z = q(U);
      if (D.current = _, i.current = b, d.current = U, Z) {
        if (!g.current && N.current)
          return C.current = d.current, M(P, r), $ ? S(d.current) : T.current;
        if (I)
          return M(P, r), S(d.current);
      }
      return g.current || M(P, r), T.current;
    };
    return X.cancel = function() {
      g.current && (k ? cancelAnimationFrame(g.current) : clearTimeout(g.current)), C.current = 0, D.current = d.current = i.current = g.current = null;
    }, X.isPending = function() {
      return !!g.current;
    }, X.flush = function() {
      return g.current ? H(Date.now()) : T.current;
    }, X;
  }, [$, I, r, B, z, k]);
  return R;
}
function it(t, r) {
  return t === r;
}
function he(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function st(t) {
  var r = p.useState(he(t)), u = r[0], b = r[1], d = p.useCallback(function(C) {
    return b(he(C));
  }, []);
  return [u, d];
}
function mt(t, r, u) {
  var b = u && u.equalityFn || it, d = st(t), C = d[0], g = d[1], D = ct(p.useCallback(function(T) {
    return g(T);
  }, [g]), r, u), i = p.useRef(t);
  return b(i.current, t) || (D(t), i.current = t), [C, D];
}
const W = p.memo(({ label: t, section: r = null, subsection: u = null, fieldName: b, updateField: d, value: C, tooltip: g, type: D = "input", i = null, min: T = null, max: o = null, ...N }) => {
  const [k, $] = p.useState(C), [z] = mt(k, 500);
  p.useEffect(() => {
    typeof z == "string" && C !== z && d(r, u, b, z, i);
  }, [z, r, u, b, i, C, d]);
  let I = u ? `${r}-${u}-${b}` : `${r}-${u}-${b}`;
  const B = (S) => {
    D !== "number" || T === null || !S.target.value || parseFloat(T) <= parseFloat(S.target.value) & parseFloat(o) >= parseFloat(S.target.value) ? $(S.target.value) : $(T.toString());
  };
  let R = /* @__PURE__ */ e.createElement("input", { type: "text", name: I, onChange: B, ...N, value: k });
  return D === "textarea" && (R = /* @__PURE__ */ e.createElement("textarea", { name: I, onChange: B, ...N, value: k })), D === "number" && (R = /* @__PURE__ */ e.createElement("input", { type: "number", name: I, onChange: B, ...N, value: k })), /* @__PURE__ */ e.createElement(e.Fragment, null, t && t.length > 0 && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t, g), R), (!t || t.length === 0) && R);
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
    for (const [N, k] of Object.entries(u))
      o.push(
        /* @__PURE__ */ e.createElement("option", { value: N, key: N }, k)
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
}), ut = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], dt = p.memo(() => {
  var _, w, U, Z, ee;
  const { config: t, updateConfig: r, loading: u, data: b, setParentConfig: d, isDashboard: C } = p.useContext(Re), [g, D] = p.useState(!0), i = Xe(t, r, !0), T = () => !1;
  p.useEffect(() => {
    if (d) {
      const n = $();
      delete n.newViz, d(n);
    }
  }, [t]);
  const o = () => {
    D(!g);
  }, N = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, t.runtime.editorErrorMessage))), k = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement(
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
  }, I = (n, l, m) => {
    let E = [...t.filters];
    E[l][n] = m, r({ ...t, filters: E });
  }, B = () => {
    let n = t.filters ? [...t.filters] : [];
    n.push({ values: [] }), r({ ...t, filters: n });
  }, R = (n = !0) => {
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
    let v = { ...t.imageData, options: J };
    r({ ...t, imageData: v });
  }, H = (n) => {
    if (t.imageData.options[n].arguments.length > 1) {
      let l = [...t.imageData.options[n].arguments];
      l.pop();
      let m = { ...t.imageData.options[n], arguments: l }, E = [...t.imageData.options];
      E[n] = m;
      let L = { ...t.imageData, options: E };
      r({ ...t, imageData: L });
    }
  }, P = () => {
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
  return u ? null : /* @__PURE__ */ e.createElement(Je, { component: "EditorPanel" }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(N, null), (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(k, null), /* @__PURE__ */ e.createElement("button", { className: g ? "editor-toggle" : "editor-toggle collapsed", title: g ? "Collapse Editor" : "Expand Editor", onClick: o }), /* @__PURE__ */ e.createElement("section", { className: g ? "editor-panel cove" : "hidden editor-panel cove" }, /* @__PURE__ */ e.createElement("div", { className: "heading-2" }, "Configure Data Bite"), /* @__PURE__ */ e.createElement("section", { className: "form-container" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement(We, { allowZeroExpanded: !0 }, /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "General")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(te, { value: t.biteStyle, fieldName: "biteStyle", label: "Data Bite Style", updateField: i, options: Et, initial: "Select" }), /* @__PURE__ */ e.createElement(W, { value: t.title, fieldName: "title", label: "Title", placeholder: "Data Bite Title", updateField: i }), /* @__PURE__ */ e.createElement(
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
  ))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Data ", (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(Ze, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "two-col" }, /* @__PURE__ */ e.createElement(te, { value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: i, initial: "Select", required: !0, options: R() }), /* @__PURE__ */ e.createElement(te, { value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: i, initial: "Select", required: !0, options: gt }))), /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(W, { value: t.dataFormat.prefix, section: "dataFormat", fieldName: "prefix", label: "Prefix", updateField: i }), /* @__PURE__ */ e.createElement(W, { value: t.dataFormat.suffix, section: "dataFormat", fieldName: "suffix", label: "Suffix", updateField: i }), /* @__PURE__ */ e.createElement(W, { type: "number", value: t.dataFormat.roundToPlace, section: "dataFormat", fieldName: "roundToPlace", label: "Round", updateField: i, min: "0", max: "99" }))), /* @__PURE__ */ e.createElement(K, { value: t.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: t.dataFormat.ignoreZeros, section: "dataFormat", fieldName: "ignoreZeros", label: "Ignore Zeros", updateField: i }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((n, l) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: l }, /* @__PURE__ */ e.createElement(
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
        I("columnName", l, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    R().map((m, E) => /* @__PURE__ */ e.createElement("option", { value: m, key: E }, m))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: n.columnValue,
      onChange: (m) => {
        I("columnValue", l, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    S(l).map((m, E) => /* @__PURE__ */ e.createElement("option", { value: m, key: E }, m))
  ))))), (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: B, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Visual")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(W, { type: "number", value: t.biteFontSize, fieldName: "biteFontSize", label: "Bite Font Size", updateField: i, min: "17", max: "65" }), /* @__PURE__ */ e.createElement(te, { value: t.fontSize, fieldName: "fontSize", label: "Overall Font Size", updateField: i, options: ["small", "medium", "large"] }), /* @__PURE__ */ e.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ e.createElement(K, { value: (_ = t.visual) == null ? void 0 : _.border, section: "visual", fieldName: "border", label: "Display Border", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (w = t.visual) == null ? void 0 : w.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (U = t.visual) == null ? void 0 : U.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (Z = t.visual) == null ? void 0 : Z.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: i }), /* @__PURE__ */ e.createElement(K, { value: (ee = t.visual) == null ? void 0 : ee.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: i })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, ut.map((n) => /* @__PURE__ */ e.createElement(
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
        onChange: (v) => {
          M("operator", l, 0, v.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      ye.map((v, s) => /* @__PURE__ */ e.createElement("option", { value: v, key: s }, v))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((E = n.arguments[0]) == null ? void 0 : E.threshold) || "",
        onChange: (v) => {
          M("threshold", l, 0, v.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        className: "border-dashed text-center",
        value: n.secondArgument ? "and" : "then",
        onChange: (v) => {
          v.target.value === "then" && (M("secondArgument", l, null, !1), H(l)), v.target.value === "and" && M("secondArgument", l, null, !0);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "then" }, "Then"),
      /* @__PURE__ */ e.createElement("option", { value: "and" }, "And")
    ))), n.secondArgument && n.secondArgument === !0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((L = n.arguments[1]) == null ? void 0 : L.operator) || "",
        onChange: (v) => {
          q(l, "operator", v.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      ye.map((v, s) => /* @__PURE__ */ e.createElement("option", { value: v, key: s }, v))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((J = n.arguments[1]) == null ? void 0 : J.threshold) || "",
        onChange: (v) => {
          q(l, "threshold", v.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: n.source || "",
        onChange: (v) => {
          M("source", l, null, v.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: n.alt || "",
        onChange: (v) => {
          M("alt", l, null, v.target.value);
        }
      }
    )))));
  }))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: P, className: "btn full-width" }, "Add Dynamic Image")))))))));
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
}, ve = ({ text: t, theme: r = "theme-blue", dataFormat: u, biteFontSize: b }) => {
  const d = {
    outerRing: {
      fill: be[r].primary
    },
    innerRing: {
      fill: Ke(be[r].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ e.createElement("circle", { cx: "50", cy: "50", r: "45", style: d.innerRing, strokeWidth: "10", stroke: d.outerRing.fill }), /* @__PURE__ */ e.createElement("text", { y: "50%", x: "50%", fontSize: b, style: d.text, textAnchor: "middle", dominantBaseline: "central" }, t));
}, ft = (t, r) => {
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
const pt = (t) => {
  const { configUrl: r, config: u, isDashboard: b = !1, isEditor: d = !1, setConfig: C, link: g } = t, D = {
    config: u ?? ie,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [i, T] = p.useReducer(ft, D), { config: o, loading: N, currentViewport: k, coveLoadedHasRan: $, container: z } = i, { title: I, dataColumn: B, dataFunction: R, imageData: S, biteBody: M, biteFontSize: q, dataFormat: H, biteStyle: P, filters: X, subtext: _ } = o, { innerContainerClasses: w, contentClasses: U } = rt(o), Z = new $e(), ee = new et((s) => {
    for (let f of s) {
      let j = tt(f.contentRect.width * 2);
      T({ type: "SET_CURRENT_VIEWPORT", payload: j });
    }
  }), n = (s) => {
    Object.keys(ie).forEach((f) => {
      s[f] && typeof s[f] == "object" && !Array.isArray(s[f]) && (s[f] = { ...ie[f], ...s[f] });
    }), s.runtime = {}, s.runtime.uniqueId = Date.now(), s.runtime.editorErrorMessage = "", T({ type: "SET_CONFIG", payload: s });
  }, l = async () => {
    let s = u || await (await fetch(r)).json(), f = s.data ?? [];
    if (s.dataUrl) {
      s.dataUrl = `${s.dataUrl}?${ot()}`;
      let x = await nt(s.dataUrl);
      x && s.dataDescription && (x = Z.autoStandardize(x), x = Z.developerStandardize(x, s.dataDescription)), x && (f = x);
    }
    s.data = f;
    const j = { ...await lt(s) };
    n({ ...ie, ...j }), T({ type: "SET_LOADING", payload: !1 });
  }, m = (s = !0) => {
    if (!B || !R)
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
    }, O = (a) => {
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
      const c = Math.floor(a.length / 2), y = [...a].sort((G, He) => G - He), V = a.length % 2 !== 0 ? y[c] : (y[c - 1] + y[c]) / 2;
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
    let h = "", Y = o.data;
    X.map((a) => a.columnName && a.columnValue ? Y = Y.filter(function(c) {
      return c[a.columnName] === a.columnValue;
    }) : !1);
    let A = [];
    switch (Y.length ? Y.forEach((a) => {
      let c = at(a[B]);
      typeof c == "number" && A.push(c);
    }) : o.dataColumn && o.data && (A = o.data.map((a) => Number(a[o.dataColumn]))), R) {
      case Pe:
        h = j();
        break;
      case Ve:
        h = x(A);
        break;
      case Be:
        h = O(A);
        break;
      case Me:
        h = ae(A);
        break;
      case Ie:
        h = Math.max(...A);
        break;
      case Ue:
        h = Math.min(...A);
        break;
      case Le:
        h = F(A).join("");
        break;
      case pe:
        let a = Math.min(...A), c = Math.max(...A);
        a = f(a), c = f(c), o.dataFormat.commas && (a = ne(a), c = ne(c)), h = o.dataFormat.prefix + a + o.dataFormat.suffix + " - " + o.dataFormat.prefix + c + o.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + R);
    }
    return R !== pe && (h = f(h), o.dataFormat.commas && (h = ne(h))), s ? H.prefix + h + H.suffix : h;
  }, E = p.useCallback((s) => {
    s !== null && ee.observe(s), T({ type: "SET_CONTAINER", payload: s });
  }, []);
  p.useEffect(() => {
    l(), Ee("cove_loaded", { loadConfigHasRun: !0 });
  }, []), p.useEffect(() => {
    o && !$ && z && (Ee("cove_loaded", { config: o }), T({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [o, z]), u && o && JSON.stringify(u.data) !== JSON.stringify(o.data) && l();
  let L = /* @__PURE__ */ e.createElement(Qe, null);
  const J = p.useCallback(() => {
    var x;
    let s = {
      "<": (O, F) => O < F,
      ">": (O, F) => O > F,
      "<=": (O, F) => O <= F,
      ">=": (O, F) => O >= F,
      "≠": (O, F) => O !== F,
      "=": (O, F) => O === F
    }, f = S.url, j = S.alt;
    if (S.display === "dynamic" && S.options && ((x = S.options) == null ? void 0 : x.length) > 0) {
      let O = Number(m(!1)), F = !1;
      S.options.forEach((ae, ne) => {
        var a, c;
        let h = ae.arguments, { source: Y, alt: A } = ae;
        F === !1 && h.length > 0 && h[0].operator.length > 0 && h[0].threshold.length > 0 && s[h[0].operator](O, h[0].threshold) && (h[1] !== void 0 ? ((a = h[1].operator) == null ? void 0 : a.length) > 0 && ((c = h[1].threshold) == null ? void 0 : c.length) > 0 && s[h[1].operator](O, h[1].threshold) && (f = Y, A !== "" && A !== void 0 && (j = A), F = !0) : (f = Y, A !== "" && A !== void 0 && (j = A), F = !0));
      });
    }
    return f.length > 0 && P !== "graphic" && S.display !== "none" ? /* @__PURE__ */ e.createElement("img", { alt: j, src: f, className: "bite-image callout" }) : null;
  }, [S]);
  if (N === !1) {
    let s = [], f = !1, j = !1;
    switch (o.bitePosition) {
      case ze:
        s.push("bite-left"), f = !0;
        break;
      case qe:
        s.push("bite-right"), f = !0;
        break;
      case je:
        s.push("bite-top"), f = !0;
        break;
      case Ge:
        s.push("bite-bottom"), j = !0;
        break;
    }
    const x = B !== void 0 && R !== void 0;
    L = /* @__PURE__ */ e.createElement(e.Fragment, null, d && /* @__PURE__ */ e.createElement(dt, null), /* @__PURE__ */ e.createElement("div", { className: d ? "spacing-wrapper" : "" }, /* @__PURE__ */ e.createElement("div", { className: w.join(" ") }, /* @__PURE__ */ e.createElement(Ye, { config: o, title: I, isDashboard: b, classes: ["bite-header", `${o.theme}`] }), /* @__PURE__ */ e.createElement("div", { className: `bite ${s.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: `bite-content-container ${U.join(" ")}` }, x && P === "graphic" && f && /* @__PURE__ */ e.createElement(ve, { theme: o.theme, text: m(), biteFontSize: q, dataFormat: H }), f && /* @__PURE__ */ e.createElement(J, null), /* @__PURE__ */ e.createElement("div", { className: "bite-content" }, x && P === "title" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: q + "px" } }, m()), x && P === "split" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: q + "px" } }, m()), /* @__PURE__ */ e.createElement(p.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ e.createElement("p", { className: "bite-text" }, x && P === "body" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: q + "px" } }, m()), ge(M)), x && P === "end" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: q + "px" } }, m()), _ && !o.general.isCompactStyle && /* @__PURE__ */ e.createElement("p", { className: "bite-subtext" }, ge(_))))), j && /* @__PURE__ */ e.createElement(J, null), x && P === "graphic" && !f && /* @__PURE__ */ e.createElement(ve, { theme: o.theme, text: m(), biteFontSize: q, dataFormat: H })))), g && g));
  }
  let v = ["cove", "cdc-open-viz-module", "type-data-bite", k, o.theme, "font-" + o.fontSize];
  return d && v.push("is-editor"), /* @__PURE__ */ e.createElement(Re.Provider, { value: { config: o, updateConfig: n, loading: N, data: o.data, setParentConfig: C, isDashboard: b } }, /* @__PURE__ */ e.createElement("div", { className: v.join(" "), ref: E }, L));
}, Ie = "Max", Pe = "Count", Be = "Mean (Average)", Me = "Median", Ue = "Min", Le = "Mode", pe = "Range", Ve = "Sum", gt = [Pe, Ie, Be, Me, Ue, Le, pe, Ve], Et = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message"
}, ze = "Left", qe = "Right", je = "Top", Ge = "Bottom", ht = [ze, qe, je, Ge], bt = "<", vt = ">", yt = "<=", Nt = ">=", _t = "=", Dt = "≠", ye = [bt, vt, yt, Nt, _t, Dt], Vt = {
  title: "Components/Templates/Data Bite",
  component: pt
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
var Te, Ae, Ce;
me.parameters = {
  ...me.parameters,
  docs: {
    ...(Te = me.parameters) == null ? void 0 : Te.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json'
  }
}`,
      ...(Ce = (Ae = me.parameters) == null ? void 0 : Ae.docs) == null ? void 0 : Ce.source
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
const zt = ["Data_Bite_Circle_Average", "Data_Bite_Text_Max_Pic", "Data_Bite_Circle_Sum", "Data_Bite_Text_Average_Pic"];
export {
  se as Data_Bite_Circle_Average,
  ue as Data_Bite_Circle_Sum,
  de as Data_Bite_Text_Average_Pic,
  me as Data_Bite_Text_Max_Pic,
  zt as __namedExportsOrder,
  Vt as default
};
