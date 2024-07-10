import { r as p, R as e } from "./storybook-index-9_ikpx_Z.es.js";
import { A as $e, a as re, b as le, c as oe, d as ce, e as Ze } from "./storybook-index-Csii8Ds0.es.js";
import { a as fe, S as Je } from "./storybook-Icon-avKQaL8M.es.js";
import { T as Q } from "./storybook-Tooltip-DCJgUFyx.es.js";
import { E as Qe, L as Xe } from "./storybook-Loading-BWOxMRmm.es.js";
import { u as Ye } from "./storybook-updateFieldFactory-BcswjCX8.es.js";
import { L as ne, a as Ke } from "./storybook-coveUpdateWorker-DJPjOpA5.es.js";
import { T as et, H as ge } from "./storybook-index-BQ51CJ1t.es.js";
import { a as tt, g as at } from "./storybook-isSolr-Dnxk31O3.es.js";
import { D as nt } from "./storybook-DataTransform-CIGrt-HV.es.js";
import { n as rt } from "./storybook-numberFromString-F9iyDl4b.es.js";
import { f as lt } from "./storybook-fetchRemoteData-CYJw3rkn.es.js";
import { u as ot, p as Ee } from "./storybook-useDataVizClasses-BwbaCKu-.es.js";
import { c as ct } from "./storybook-cacheBustingString-Dx7lC4Lx.es.js";
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
function it(t, l, d) {
  var h = this, m = p.useRef(null), T = p.useRef(0), y = p.useRef(null), N = p.useRef([]), F = p.useRef(), c = p.useRef(), a = p.useRef(t), _ = p.useRef(!0);
  a.current = t;
  var R = !l && l !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  l = +l || 0, d = d || {};
  var j = !!d.leading, V = "trailing" in d ? !!d.trailing : !0, P = "maxWait" in d, M = P ? Math.max(+d.maxWait || 0, l) : null;
  p.useEffect(function() {
    return _.current = !0, function() {
      _.current = !1;
    };
  }, []);
  var S = p.useMemo(function() {
    var A = function(D) {
      var I = N.current, U = F.current;
      return N.current = F.current = null, T.current = D, c.current = a.current.apply(U, I);
    }, X = function(D, I) {
      R && cancelAnimationFrame(y.current), y.current = R ? requestAnimationFrame(D) : setTimeout(D, I);
    }, G = function(D) {
      if (!_.current)
        return !1;
      var I = D - m.current, U = D - T.current;
      return !m.current || I >= l || I < 0 || P && U >= M;
    }, W = function(D) {
      return y.current = null, V && N.current ? A(D) : (N.current = F.current = null, c.current);
    }, k = function() {
      var D = Date.now();
      if (G(D))
        return W(D);
      if (_.current) {
        var I = D - m.current, U = D - T.current, r = l - I, o = P ? Math.min(r, M - U) : r;
        X(k, o);
      }
    }, J = function() {
      for (var D = [], I = 0; I < arguments.length; I++)
        D[I] = arguments[I];
      var U = Date.now(), r = G(U);
      if (N.current = D, F.current = h, m.current = U, r) {
        if (!y.current && _.current)
          return T.current = m.current, X(k, l), j ? A(m.current) : c.current;
        if (P)
          return X(k, l), A(m.current);
      }
      return y.current || X(k, l), c.current;
    };
    return J.cancel = function() {
      y.current && (R ? cancelAnimationFrame(y.current) : clearTimeout(y.current)), T.current = 0, N.current = m.current = F.current = y.current = null;
    }, J.isPending = function() {
      return !!y.current;
    }, J.flush = function() {
      return y.current ? W(Date.now()) : c.current;
    }, J;
  }, [j, P, l, M, V, R]);
  return S;
}
function st(t, l) {
  return t === l;
}
function he(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function mt(t) {
  var l = p.useState(he(t)), d = l[0], h = l[1], m = p.useCallback(function(T) {
    return h(he(T));
  }, []);
  return [d, m];
}
function ut(t, l, d) {
  var h = st, m = mt(t), T = m[0], y = m[1], N = it(p.useCallback(function(c) {
    return y(c);
  }, [y]), l, d), F = p.useRef(t);
  return h(F.current, t) || (N(t), F.current = t), [T, N];
}
const $ = p.memo(({ label: t, section: l = null, subsection: d = null, fieldName: h, updateField: m, value: T, tooltip: y, type: N = "input", i: F = null, min: c = null, max: a = null, ..._ }) => {
  const [R, j] = p.useState(T), [V] = ut(R, 500);
  p.useEffect(() => {
    typeof V == "string" && T !== V && m(l, d, h, V, F);
  }, [V, l, d, h, F, T, m]);
  let P = d ? `${l}-${d}-${h}` : `${l}-${d}-${h}`;
  const M = (A) => {
    N !== "number" || c === null || !A.target.value || parseFloat(c) <= parseFloat(A.target.value) & parseFloat(a) >= parseFloat(A.target.value) ? j(A.target.value) : j(c.toString());
  };
  let S = /* @__PURE__ */ e.createElement("input", { type: "text", name: P, onChange: M, ..._, value: R });
  return N === "textarea" && (S = /* @__PURE__ */ e.createElement("textarea", { name: P, onChange: M, ..._, value: R })), N === "number" && (S = /* @__PURE__ */ e.createElement("input", { type: "number", name: P, onChange: M, ..._, value: R })), /* @__PURE__ */ e.createElement(e.Fragment, null, t && t.length > 0 && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t, y), S), (!t || t.length === 0) && S);
}), ee = p.memo(({ label: t, value: l, fieldName: d, section: h = null, subsection: m = null, tooltip: T, updateField: y, ...N }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: d,
    checked: l,
    onChange: () => {
      y(h, m, d, !l);
    },
    ...N
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, T))), ae = p.memo(({ label: t, value: l, options: d, fieldName: h, section: m = null, subsection: T = null, required: y = !1, updateField: N, initial: F, ...c }) => {
  let a = "";
  if (Array.isArray(d))
    a = d.map((_) => /* @__PURE__ */ e.createElement("option", { value: _, key: _ }, _));
  else {
    a = [];
    for (const [_, R] of Object.entries(d))
      a.push(
        /* @__PURE__ */ e.createElement("option", { value: _, key: _ }, R)
      );
  }
  return F && a.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, F)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, t), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: y && !l ? "warning" : "",
      name: h,
      value: l,
      onChange: (_) => {
        N(m, T, h, _.target.value);
      },
      ...c
    },
    a
  ));
}), dt = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], be = p.memo(() => {
  var k, J, D, I, U;
  const { config: t, updateConfig: l, loading: d, data: h, setParentConfig: m, isDashboard: T, isEditor: y } = p.useContext(Re), [N, F] = p.useState(!0), c = Ye(t, l, !0);
  p.useEffect(() => {
    if (m) {
      const r = _();
      delete r.newViz, m(r);
    }
  }, [t]);
  const a = () => {
    F(!N), l({
      ...t,
      showEditorPanel: !N
    });
  }, _ = () => {
    let r = JSON.parse(JSON.stringify(t));
    return delete r.runtime, r;
  }, R = (r) => {
    let o = [...t.filters];
    o.splice(r, 1), l({ ...t, filters: o });
  }, j = (r, o, u) => {
    let E = [...t.filters];
    E[o][r] = u, l({ ...t, filters: E });
  }, V = () => {
    let r = t.filters ? [...t.filters] : [];
    r.push({ values: [] }), l({ ...t, filters: r });
  }, P = (r = !0) => {
    let o = {};
    return h.length && h.map((u) => Object.keys(u).forEach((E) => o[E] = !0)), Object.keys(o);
  }, M = (r) => {
    let o = [];
    const u = t.filters[r].columnName;
    return h && u && (h.forEach(function(E) {
      E[u] !== void 0 && o.indexOf(E[u]) === -1 && o.push(E[u]);
    }), o.sort()), o;
  }, S = (r, o, u = null, E) => {
    let x = [...t.imageData.options];
    u === null ? x[o][r] = E : x[o].arguments[u][r] = E;
    let Z = { ...t.imageData, options: x };
    l({ ...t, imageData: Z });
  }, A = (r, o, u) => {
    let E = [...t.imageData.options[r].arguments];
    E[1] = { ...E[1], [o]: u };
    let x = { ...t.imageData.options[r], arguments: E }, Z = [...t.imageData.options];
    Z[r] = x;
    let b = { ...t.imageData, options: Z };
    l({ ...t, imageData: b });
  }, X = (r) => {
    if (t.imageData.options[r].arguments.length > 1) {
      let o = [...t.imageData.options[r].arguments];
      o.pop();
      let u = { ...t.imageData.options[r], arguments: o }, E = [...t.imageData.options];
      E[r] = u;
      let x = { ...t.imageData, options: E };
      l({ ...t, imageData: x });
    }
  }, G = () => {
    let r = t.imageData.options ? [...t.imageData.options] : [];
    r.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let o = { ...t.imageData, options: r };
    l({ ...t, imageData: o });
  }, W = (r) => {
    let o = [...t.imageData.options];
    o.splice(r, 1);
    let u = { ...t.imageData, options: o };
    l({ ...t, imageData: u });
  };
  return d ? null : /* @__PURE__ */ e.createElement(Qe, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(ne.Sidebar, { isEditor: !0, config: t, title: "Configure Data Bites", onBackClick: a, displayPanel: N }, /* @__PURE__ */ e.createElement("section", { className: "form-container" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement($e, { allowZeroExpanded: !0 }, /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "General")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(ae, { value: t.biteStyle, fieldName: "biteStyle", label: "Data Bite Style", updateField: c, options: ht, initial: "Select" }), /* @__PURE__ */ e.createElement($, { value: t.title, fieldName: "title", label: "Title", placeholder: "Data Bite Title", updateField: c }), /* @__PURE__ */ e.createElement(
    $,
    {
      type: "textarea",
      value: t.biteBody,
      fieldName: "biteBody",
      label: "Message",
      updateField: c,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    $,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Data Bite Subtext or Citation",
      updateField: c,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Data ", (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(Je, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "two-col" }, /* @__PURE__ */ e.createElement(ae, { value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: c, initial: "Select", required: !0, options: P() }), /* @__PURE__ */ e.createElement(ae, { value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: c, initial: "Select", required: !0, options: Et }))), /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement($, { value: t.dataFormat.prefix, section: "dataFormat", fieldName: "prefix", label: "Prefix", updateField: c }), /* @__PURE__ */ e.createElement($, { value: t.dataFormat.suffix, section: "dataFormat", fieldName: "suffix", label: "Suffix", updateField: c }), /* @__PURE__ */ e.createElement($, { type: "number", value: t.dataFormat.roundToPlace, section: "dataFormat", fieldName: "roundToPlace", label: "Round", updateField: c, min: "0", max: "99" }))), /* @__PURE__ */ e.createElement(ee, { value: t.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: c }), /* @__PURE__ */ e.createElement(ee, { value: t.dataFormat.ignoreZeros, section: "dataFormat", fieldName: "ignoreZeros", label: "Ignore Zeros", updateField: c }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(fe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((r, o) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: o }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        R(o);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnName ? r.columnName : "",
      onChange: (u) => {
        j("columnName", o, u.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    P().map((u, E) => /* @__PURE__ */ e.createElement("option", { value: u, key: E }, u))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnValue,
      onChange: (u) => {
        j("columnValue", o, u.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    M(o).map((u, E) => /* @__PURE__ */ e.createElement("option", { value: u, key: E }, u))
  ))))), (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: V, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Visual")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement($, { type: "number", value: t.biteFontSize, fieldName: "biteFontSize", label: "Bite Font Size", updateField: c, min: "17", max: "65" }), /* @__PURE__ */ e.createElement(ae, { value: t.fontSize, fieldName: "fontSize", label: "Overall Font Size", updateField: c, options: ["small", "medium", "large"] }), /* @__PURE__ */ e.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ e.createElement(ee, { value: (k = t.visual) == null ? void 0 : k.border, section: "visual", fieldName: "border", label: "Display Border", updateField: c }), /* @__PURE__ */ e.createElement(ee, { value: (J = t.visual) == null ? void 0 : J.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: c }), /* @__PURE__ */ e.createElement(ee, { value: (D = t.visual) == null ? void 0 : D.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: c }), /* @__PURE__ */ e.createElement(ee, { value: (I = t.visual) == null ? void 0 : I.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: c }), /* @__PURE__ */ e.createElement(ee, { value: (U = t.visual) == null ? void 0 : U.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: c })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, dt.map((r) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: r,
      key: r,
      onClick: () => {
        l({ ...t, theme: r });
      },
      className: t.theme === r ? "selected " + r : r
    }
  )))))), ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Image", ["dynamic"].includes(t.imageData.display) && "s")), /* @__PURE__ */ e.createElement(ce, null, /* @__PURE__ */ e.createElement(ae, { value: t.imageData.display || "", section: "imageData", fieldName: "display", label: "Image Display Type", updateField: c, options: ["none", "static", "dynamic"] }), /* @__PURE__ */ e.createElement(ae, { value: t.bitePosition || "", fieldName: "bitePosition", label: "Image/Graphic Position", updateField: c, initial: "Select", options: bt }), ["static"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement($, { value: t.imageData.url, section: "imageData", fieldName: "url", label: "Image URL", updateField: c }), /* @__PURE__ */ e.createElement($, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text", updateField: c })), ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement($, { value: t.imageData.url || "", section: "imageData", fieldName: "url", label: "Image URL (default)", updateField: c }), /* @__PURE__ */ e.createElement($, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text (default)", updateField: c }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), (!t.imageData.options || t.imageData.options.length === 0) && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no dynamic images."), t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", null, t.imageData.options.map((r, o) => {
    var u, E, x, Z;
    return /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: o }, /* @__PURE__ */ e.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: () => {
          W(o);
        }
      },
      "Remove"
    ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, /* @__PURE__ */ e.createElement("strong", null, "Image #" + (o + 1))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((u = r.arguments[0]) == null ? void 0 : u.operator) || "",
        onChange: (b) => {
          S("operator", o, 0, b.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      Ne.map((b, te) => /* @__PURE__ */ e.createElement("option", { value: b, key: te }, b))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((E = r.arguments[0]) == null ? void 0 : E.threshold) || "",
        onChange: (b) => {
          S("threshold", o, 0, b.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        className: "border-dashed text-center",
        value: r.secondArgument ? "and" : "then",
        onChange: (b) => {
          b.target.value === "then" && (S("secondArgument", o, null, !1), X(o)), b.target.value === "and" && S("secondArgument", o, null, !0);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "then" }, "Then"),
      /* @__PURE__ */ e.createElement("option", { value: "and" }, "And")
    ))), r.secondArgument && r.secondArgument === !0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((x = r.arguments[1]) == null ? void 0 : x.operator) || "",
        onChange: (b) => {
          A(o, "operator", b.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      Ne.map((b, te) => /* @__PURE__ */ e.createElement("option", { value: b, key: te }, b))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((Z = r.arguments[1]) == null ? void 0 : Z.threshold) || "",
        onChange: (b) => {
          A(o, "threshold", b.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: r.source || "",
        onChange: (b) => {
          S("source", o, null, b.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: r.alt || "",
        onChange: (b) => {
          S("alt", o, null, b.target.value);
        }
      }
    )))));
  }))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: G, className: "btn full-width" }, "Add Dynamic Image")))))))));
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
}, ye = ({ text: t, theme: l = "theme-blue", dataFormat: d, biteFontSize: h }) => {
  const m = {
    outerRing: {
      fill: ve[l].primary
    },
    innerRing: {
      fill: Ze(ve[l].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ e.createElement("circle", { cx: "50", cy: "50", r: "45", style: m.innerRing, strokeWidth: "10", stroke: m.outerRing.fill }), /* @__PURE__ */ e.createElement("text", { y: "50%", x: "50%", fontSize: h, style: m.text, textAnchor: "middle", dominantBaseline: "central" }, t));
}, ft = ({ label: t, value: l }) => /* @__PURE__ */ e.createElement("div", { className: "cove-component__content kpi-container" }, /* @__PURE__ */ e.createElement("div", { className: "kpi-content" }, /* @__PURE__ */ e.createElement("div", { className: "label-container" }, /* @__PURE__ */ e.createElement("span", { className: "label" }, /* @__PURE__ */ e.createElement("strong", null, t))), /* @__PURE__ */ e.createElement("div", { className: "value-container" }, /* @__PURE__ */ e.createElement("span", { className: "value" }, /* @__PURE__ */ e.createElement("strong", null, l))))), pt = (t, l) => {
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
}, gt = (t) => {
  const { configUrl: l, config: d, isDashboard: h = !1, isEditor: m = !1, setConfig: T, link: y } = t, N = {
    config: d ?? ie,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [F, c] = p.useReducer(pt, N), { config: a, loading: _, currentViewport: R, coveLoadedHasRan: j, container: V } = F, { title: P, dataColumn: M, dataFunction: S, imageData: A, biteBody: X, biteFontSize: G, dataFormat: W, biteStyle: k, filters: J, subtext: D } = a, { innerContainerClasses: I, contentClasses: U } = ot(a), r = new nt(), o = new tt((s) => {
    for (let f of s) {
      let z = at(f.contentRect.width * 2);
      c({ type: "SET_CURRENT_VIEWPORT", payload: z });
    }
  }), u = (s) => {
    Object.keys(ie).forEach((f) => {
      s[f] && typeof s[f] == "object" && !Array.isArray(s[f]) && (s[f] = { ...ie[f], ...s[f] });
    }), s.runtime = {}, s.runtime.uniqueId = Date.now(), s.runtime.editorErrorMessage = "", c({ type: "SET_CONFIG", payload: s });
  }, E = async () => {
    let s = d || await (await fetch(l)).json(), f = s.data ?? [];
    if (s.dataUrl) {
      s.dataUrl = `${s.dataUrl}?${ct()}`;
      let B = await lt(s.dataUrl);
      B && s.dataDescription && (B = r.autoStandardize(B), B = r.developerStandardize(B, s.dataDescription)), B && (f = B);
    }
    s.data = f;
    const z = { ...await Ke(s) };
    u({ ...ie, ...z }), c({ type: "SET_LOADING", payload: !1 });
  }, x = (s = !0) => {
    if (!M || !S)
      return "";
    const f = (n) => {
      if (n == null) {
        console.error('Enter correct value to "applyPrecision()" function ');
        return;
      }
      if (Number.isNaN(n)) {
        console.error(' Argunment isNaN, "applyPrecision()" function ');
        return;
      }
      let i = n, v = Number(a.dataFormat.roundToPlace);
      if (v < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ');
        return;
      }
      return typeof v == "number" && v > -1 && (i = Number(i).toFixed(v)), String(i);
    }, z = (n) => (a.dataFormat.ignoreZeros && (C = C.filter((i) => i && i)), C.length), B = (n) => {
      if (n == null) {
        console.error("Enter valid value for getColumnSum function ");
        return;
      }
      if (n.length === 0 || !Array.isArray(n)) {
        console.error("Arguments are not valid getColumnSum function ");
        return;
      }
      let i = 0;
      return n.length > 1 ? i = n.map((v) => Number(v)).reduce((v, L) => v + L) : i = Number(n[0]), f(i);
    }, O = (n) => {
      if (n == null || !Array.isArray(n)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      a.dataFormat.ignoreZeros && (n = n.filter((v) => v !== 0));
      let i = 0;
      return n.length > 1 ? i = n.map((v) => Number(v)).reduce((v, L) => v + L) / n.length : i = Number(n[0]), f(i);
    }, w = (n = []) => {
      let i = {}, v = -1 / 0;
      for (let q = 0; q < n.length; q++)
        i[n[q]] ? i[n[q]] += 1 : i[n[q]] = 1, i[n[q]] > v && (v = i[n[q]]);
      let L = [];
      for (let q in i)
        i[q] === v && L.push(q);
      return L;
    }, H = (n) => {
      if (!n.length) return;
      const i = Math.floor(n.length / 2), v = [...n].sort((q, He) => q - He), L = n.length % 2 !== 0 ? v[i] : (v[i - 1] + v[i]) / 2;
      return f(L);
    }, Y = (n) => {
      if (n == null) return;
      (Number.isNaN(n) || typeof n == "number") && (n = String(n));
      let v = parseFloat(n).toLocaleString("en-US", {
        useGrouping: !0,
        maximumFractionDigits: 6
      });
      const L = n.match(/\.\d*?(0*)$/);
      return L && (v += /[1-9]/.test(L[0]) ? L[1] : L[0]), v;
    };
    let g = "", K = a.data;
    J.map((n) => n.columnName && n.columnValue ? K = K.filter(function(i) {
      return i[n.columnName] === n.columnValue;
    }) : !1);
    let C = [];
    switch (K.length ? K.forEach((n) => {
      let i = rt(n[M]);
      typeof i == "number" && C.push(i);
    }) : a.dataColumn && a.data && (C = a.data.map((n) => Number(n[a.dataColumn]))), S) {
      case Be:
        g = z();
        break;
      case ze:
        g = B(C);
        break;
      case Me:
        g = O(C);
        break;
      case Ue:
        g = H(C);
        break;
      case Pe:
        g = Math.max(...C);
        break;
      case Le:
        g = Math.min(...C);
        break;
      case Ve:
        g = w(C).join("");
        break;
      case pe:
        let n = Math.min(...C), i = Math.max(...C);
        n = f(n), i = f(i), a.dataFormat.commas && (n = Y(n), i = Y(i)), g = a.dataFormat.prefix + n + a.dataFormat.suffix + " - " + a.dataFormat.prefix + i + a.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + S);
    }
    return S !== pe && (g = f(g), a.dataFormat.commas && (g = Y(g))), s ? W.prefix + g + W.suffix : g;
  }, Z = p.useCallback((s) => {
    s !== null && o.observe(s), c({ type: "SET_CONTAINER", payload: s });
  }, []);
  p.useEffect(() => {
    E(), Ee("cove_loaded", { loadConfigHasRun: !0 });
  }, []), p.useEffect(() => {
    a && !j && V && (Ee("cove_loaded", { config: a }), c({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [a, V]), d && a && JSON.stringify(d.data) !== JSON.stringify(a.data) && E();
  let b = /* @__PURE__ */ e.createElement(Xe, null);
  const te = p.useCallback(() => {
    var B;
    let s = {
      "<": (O, w) => O < w,
      ">": (O, w) => O > w,
      "<=": (O, w) => O <= w,
      ">=": (O, w) => O >= w,
      "≠": (O, w) => O !== w,
      "=": (O, w) => O === w
    }, f = A.url, z = A.alt;
    if (A.display === "dynamic" && A.options && ((B = A.options) == null ? void 0 : B.length) > 0) {
      let O = Number(x(!1)), w = !1;
      A.options.forEach((H, Y) => {
        var n, i;
        let g = H.arguments, { source: K, alt: C } = H;
        w === !1 && g.length > 0 && g[0].operator.length > 0 && g[0].threshold.length > 0 && s[g[0].operator](O, g[0].threshold) && (g[1] !== void 0 ? ((n = g[1].operator) == null ? void 0 : n.length) > 0 && ((i = g[1].threshold) == null ? void 0 : i.length) > 0 && s[g[1].operator](O, g[1].threshold) && (f = K, C !== "" && C !== void 0 && (z = C), w = !0) : (f = K, C !== "" && C !== void 0 && (z = C), w = !0));
      });
    }
    return f.length > 0 && k !== "graphic" && A.display !== "none" ? /* @__PURE__ */ e.createElement("img", { alt: z, src: f, className: "bite-image callout" }) : null;
  }, [A]);
  if (_ === !1) {
    let s = [], f = !1, z = !1;
    switch (a.bitePosition) {
      case qe:
        s.push("bite-left"), f = !0;
        break;
      case je:
        s.push("bite-right"), f = !0;
        break;
      case Ge:
        s.push("bite-top"), f = !0;
        break;
      case We:
        s.push("bite-bottom"), z = !0;
        break;
    }
    const B = () => !1, O = () => {
      const Y = {
        position: "absolute",
        background: "white",
        zIndex: "999",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridArea: "content"
      };
      return /* @__PURE__ */ e.createElement("section", { className: "waiting", style: Y }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, a.runtime.editorErrorMessage)));
    }, w = () => {
      const Y = {
        position: "absolute",
        background: "white",
        zIndex: "999",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridArea: "content"
      };
      return /* @__PURE__ */ e.createElement("section", { className: "waiting", style: Y }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement(
        "button",
        {
          className: "btn",
          style: { margin: "1em auto" },
          disabled: B(),
          onClick: (g) => {
            g.preventDefault(), u({ ...a, newViz: !1 });
          }
        },
        "I'm Done"
      )));
    }, H = M !== void 0 && S !== void 0;
    b = /* @__PURE__ */ e.createElement(e.Fragment, null, m && /* @__PURE__ */ e.createElement(be, null), /* @__PURE__ */ e.createElement(ne.Responsive, { isEditor: m }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(O, null), (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e.createElement(w, null), /* @__PURE__ */ e.createElement(et, { config: a, title: P, isDashboard: h, classes: ["bite-header", `${a.theme}`] }), /* @__PURE__ */ e.createElement("div", { className: `bite ${s.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: `bite-content-container ${U.join(" ")}` }, H && k === "graphic" && f && /* @__PURE__ */ e.createElement(ye, { theme: a.theme, text: x(), biteFontSize: G, dataFormat: W }), f && /* @__PURE__ */ e.createElement(te, null), /* @__PURE__ */ e.createElement("div", { className: "bite-content" }, H && k === "title" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: G + "px" } }, x()), H && k === "split" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: G + "px" } }, x()), /* @__PURE__ */ e.createElement(p.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ e.createElement("p", { className: "bite-text" }, H && k === "body" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: G + "px" } }, x()), ge(X)), H && k === "end" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: G + "px" } }, x()), D && !a.general.isCompactStyle && /* @__PURE__ */ e.createElement("p", { className: "bite-subtext" }, ge(D))))), z && /* @__PURE__ */ e.createElement(te, null), H && k === "graphic" && !f && /* @__PURE__ */ e.createElement(ye, { theme: a.theme, text: x(), biteFontSize: G, dataFormat: W })))), y && y));
  }
  return /* @__PURE__ */ e.createElement(Re.Provider, { value: { config: a, updateConfig: u, loading: _, data: a.data, setParentConfig: T, isDashboard: h } }, k !== "gradient" && /* @__PURE__ */ e.createElement(ne.VisualizationWrapper, { ref: Z, config: a, isEditor: m, showEditorPanel: a == null ? void 0 : a.showEditorPanel }, b), k === "gradient" && /* @__PURE__ */ e.createElement(ne.VisualizationWrapper, { ref: Z, config: a, isEditor: m, showEditorPanel: a == null ? void 0 : a.showEditorPanel }, m && /* @__PURE__ */ e.createElement(be, null), /* @__PURE__ */ e.createElement(ne.Responsive, { isEditor: m }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(Error, null), (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e.createElement(Confirm, null), /* @__PURE__ */ e.createElement(ft, { label: a.title, value: x() }))));
}, Pe = "Max", Be = "Count", Me = "Mean (Average)", Ue = "Median", Le = "Min", Ve = "Mode", pe = "Range", ze = "Sum", Et = [Be, Pe, Me, Ue, Le, Ve, pe, ze], ht = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message",
  gradient: "Gradient"
}, qe = "Left", je = "Right", Ge = "Top", We = "Bottom", bt = [qe, je, Ge, We], vt = "<", yt = ">", Nt = "<=", _t = ">=", Dt = "=", At = "≠", Ne = [vt, yt, Nt, _t, Dt, At], Lt = {
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
var _e, De, Ae;
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
      ...(Ae = (De = se.parameters) == null ? void 0 : De.docs) == null ? void 0 : Ae.source
    }
  }
};
var Ce, Te, Se;
me.parameters = {
  ...me.parameters,
  docs: {
    ...(Ce = me.parameters) == null ? void 0 : Ce.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json'
  }
}`,
      ...(Se = (Te = me.parameters) == null ? void 0 : Te.docs) == null ? void 0 : Se.source
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
var Oe, ke, Ie;
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
      ...(Ie = (ke = de.parameters) == null ? void 0 : ke.docs) == null ? void 0 : Ie.source
    }
  }
};
const Vt = ["Data_Bite_Circle_Average", "Data_Bite_Text_Max_Pic", "Data_Bite_Circle_Sum", "Data_Bite_Text_Average_Pic"];
export {
  se as Data_Bite_Circle_Average,
  ue as Data_Bite_Circle_Sum,
  de as Data_Bite_Text_Average_Pic,
  me as Data_Bite_Text_Max_Pic,
  Vt as __namedExportsOrder,
  Lt as default
};
