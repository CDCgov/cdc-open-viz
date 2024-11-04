import { r as g, R as e } from "./storybook-index-45401197.es.js";
import { A as ke, a as le, b as re, c as oe, d as ie, e as Ie, D as Re } from "./storybook-DataTransform-8cd95c19.es.js";
import { a as se, b as we } from "./storybook-Icon-73ec66ec.es.js";
import { T as Q } from "./storybook-Tooltip-4102bd69.es.js";
import { E as Pe, L as Me } from "./storybook-Loading-f180d060.es.js";
import { u as Le } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as Be, H as ue } from "./storybook-index-e5bf02db.es.js";
import { L as ne, u as Ve, p as de, c as ze } from "./storybook-coveUpdateWorker-2249800a.es.js";
import { a as Ue, g as qe } from "./storybook-isSolr-cb863e7a.es.js";
import { n as Ge } from "./storybook-numberFromString-24623c03.es.js";
import { f as We } from "./storybook-fetchRemoteData-9428020c.es.js";
import { c as je } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
const ce = {
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
}, be = g.createContext({});
function He(t, r, m) {
  var h = this, u = g.useRef(null), _ = g.useRef(0), v = g.useRef(null), N = g.useRef([]), O = g.useRef(), i = g.useRef(), a = g.useRef(t), A = g.useRef(!0);
  a.current = t;
  var w = !r && r !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, m = m || {};
  var G = !!m.leading, z = "trailing" in m ? !!m.trailing : !0, P = "maxWait" in m, L = P ? Math.max(+m.maxWait || 0, r) : null;
  g.useEffect(function() {
    return A.current = !0, function() {
      A.current = !1;
    };
  }, []);
  var S = g.useMemo(function() {
    var T = function(C) {
      var R = N.current, B = O.current;
      return N.current = O.current = null, _.current = C, i.current = a.current.apply(B, R);
    }, X = function(C, R) {
      w && cancelAnimationFrame(v.current), v.current = w ? requestAnimationFrame(C) : setTimeout(C, R);
    }, W = function(C) {
      if (!A.current)
        return !1;
      var R = C - u.current, B = C - _.current;
      return !u.current || R >= r || R < 0 || P && B >= L;
    }, j = function(C) {
      return v.current = null, z && N.current ? T(C) : (N.current = O.current = null, i.current);
    }, I = function() {
      var C = Date.now();
      if (W(C))
        return j(C);
      if (A.current) {
        var R = C - u.current, B = C - _.current, l = r - R, o = P ? Math.min(l, L - B) : l;
        X(I, o);
      }
    }, J = function() {
      for (var C = [], R = 0; R < arguments.length; R++)
        C[R] = arguments[R];
      var B = Date.now(), l = W(B);
      if (N.current = C, O.current = h, u.current = B, l) {
        if (!v.current && A.current)
          return _.current = u.current, X(I, r), G ? T(u.current) : i.current;
        if (P)
          return X(I, r), T(u.current);
      }
      return v.current || X(I, r), i.current;
    };
    return J.cancel = function() {
      v.current && (w ? cancelAnimationFrame(v.current) : clearTimeout(v.current)), _.current = 0, N.current = u.current = O.current = v.current = null;
    }, J.isPending = function() {
      return !!v.current;
    }, J.flush = function() {
      return v.current ? j(Date.now()) : i.current;
    }, J;
  }, [G, P, r, L, z, w]);
  return S;
}
function $e(t, r) {
  return t === r;
}
function fe(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function Ze(t) {
  var r = g.useState(fe(t)), m = r[0], h = r[1], u = g.useCallback(function(_) {
    return h(fe(_));
  }, []);
  return [m, u];
}
function Je(t, r, m) {
  var h = m && m.equalityFn || $e, u = Ze(t), _ = u[0], v = u[1], N = He(g.useCallback(function(i) {
    return v(i);
  }, [v]), r, m), O = g.useRef(t);
  return h(O.current, t) || (N(t), O.current = t), [_, N];
}
const $ = g.memo(({ label: t, section: r = null, subsection: m = null, fieldName: h, updateField: u, value: _, tooltip: v, type: N = "input", i: O = null, min: i = null, max: a = null, ...A }) => {
  const [w, G] = g.useState(_), [z] = Je(w, 500);
  g.useEffect(() => {
    typeof z == "string" && _ !== z && u(r, m, h, z, O);
  }, [z, r, m, h, O, _, u]);
  let P = m ? `${r}-${m}-${h}` : `${r}-${m}-${h}`;
  const L = (T) => {
    N !== "number" || i === null || !T.target.value || parseFloat(i) <= parseFloat(T.target.value) & parseFloat(a) >= parseFloat(T.target.value) ? G(T.target.value) : G(i.toString());
  };
  let S = /* @__PURE__ */ e.createElement("input", { type: "text", name: P, onChange: L, ...A, value: w });
  return N === "textarea" && (S = /* @__PURE__ */ e.createElement("textarea", { name: P, onChange: L, ...A, value: w })), N === "number" && (S = /* @__PURE__ */ e.createElement("input", { type: "number", name: P, onChange: L, ...A, value: w })), /* @__PURE__ */ e.createElement(e.Fragment, null, t && t.length > 0 && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t, v), S), (!t || t.length === 0) && S);
}), ee = g.memo(({ label: t, value: r, fieldName: m, section: h = null, subsection: u = null, tooltip: _, updateField: v, ...N }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: m,
    checked: r,
    onChange: () => {
      v(h, u, m, !r);
    },
    ...N
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, _))), ae = g.memo(({ label: t, value: r, options: m, fieldName: h, section: u = null, subsection: _ = null, required: v = !1, updateField: N, initial: O, ...i }) => {
  let a = "";
  if (Array.isArray(m))
    a = m.map((A) => /* @__PURE__ */ e.createElement("option", { value: A, key: A }, A));
  else {
    a = [];
    for (const [A, w] of Object.entries(m))
      a.push(
        /* @__PURE__ */ e.createElement("option", { value: A, key: A }, w)
      );
  }
  return O && a.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, O)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, t), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: v && !r ? "warning" : "",
      name: h,
      value: r,
      onChange: (A) => {
        N(u, _, h, A.target.value);
      },
      ...i
    },
    a
  ));
}), Qe = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], ge = g.memo(() => {
  var I, J, C, R, B;
  const { config: t, updateConfig: r, loading: m, data: h, setParentConfig: u, isDashboard: _, isEditor: v } = g.useContext(be), [N, O] = g.useState(!0), i = Le(t, r, !0);
  g.useEffect(() => {
    if (u) {
      const l = A();
      delete l.newViz, u(l);
    }
  }, [t]);
  const a = () => {
    O(!N), r({
      ...t,
      showEditorPanel: !N
    });
  }, A = () => {
    let l = JSON.parse(JSON.stringify(t));
    return delete l.runtime, l;
  }, w = (l) => {
    let o = [...t.filters];
    o.splice(l, 1), r({ ...t, filters: o });
  }, G = (l, o, d) => {
    let E = [...t.filters];
    E[o][l] = d, r({ ...t, filters: E });
  }, z = () => {
    let l = t.filters ? [...t.filters] : [];
    l.push({ values: [] }), r({ ...t, filters: l });
  }, P = (l = !0) => {
    let o = {};
    return h.length && h.map((d) => Object.keys(d).forEach((E) => o[E] = !0)), Object.keys(o);
  }, L = (l) => {
    let o = [];
    const d = t.filters[l].columnName;
    return h && d && (h.forEach(function(E) {
      E[d] !== void 0 && o.indexOf(E[d]) === -1 && o.push(E[d]);
    }), o.sort()), o;
  }, S = (l, o, d = null, E) => {
    let x = [...t.imageData.options];
    d === null ? x[o][l] = E : x[o].arguments[d][l] = E;
    let Z = { ...t.imageData, options: x };
    r({ ...t, imageData: Z });
  }, T = (l, o, d) => {
    let E = [...t.imageData.options[l].arguments];
    E[1] = { ...E[1], [o]: d };
    let x = { ...t.imageData.options[l], arguments: E }, Z = [...t.imageData.options];
    Z[l] = x;
    let b = { ...t.imageData, options: Z };
    r({ ...t, imageData: b });
  }, X = (l) => {
    if (t.imageData.options[l].arguments.length > 1) {
      let o = [...t.imageData.options[l].arguments];
      o.pop();
      let d = { ...t.imageData.options[l], arguments: o }, E = [...t.imageData.options];
      E[l] = d;
      let x = { ...t.imageData, options: E };
      r({ ...t, imageData: x });
    }
  }, W = () => {
    let l = t.imageData.options ? [...t.imageData.options] : [];
    l.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let o = { ...t.imageData, options: l };
    r({ ...t, imageData: o });
  }, j = (l) => {
    let o = [...t.imageData.options];
    o.splice(l, 1);
    let d = { ...t.imageData, options: o };
    r({ ...t, imageData: d });
  };
  return m ? null : /* @__PURE__ */ e.createElement(Pe, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(ne.Sidebar, { isEditor: !0, config: t, title: "Configure Data Bites", onBackClick: a, displayPanel: N }, /* @__PURE__ */ e.createElement("section", { className: "form-container" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement(ke, { allowZeroExpanded: !0 }, /* @__PURE__ */ e.createElement(le, null, " ", /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(oe, null, "General")), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement(ae, { value: t.biteStyle, fieldName: "biteStyle", label: "Data Bite Style", updateField: i, options: et, initial: "Select" }), /* @__PURE__ */ e.createElement($, { value: t.title, fieldName: "title", label: "Title", placeholder: "Data Bite Title", updateField: i }), /* @__PURE__ */ e.createElement(
    $,
    {
      type: "textarea",
      value: t.biteBody,
      fieldName: "biteBody",
      label: "Message",
      updateField: i,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(se, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    $,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Data Bite Subtext or Citation",
      updateField: i,
      tooltip: /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(se, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ))), /* @__PURE__ */ e.createElement(le, null, " ", /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(oe, null, "Data ", (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(we, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "two-col" }, /* @__PURE__ */ e.createElement(ae, { value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: i, initial: "Select", required: !0, options: P() }), /* @__PURE__ */ e.createElement(ae, { value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: i, initial: "Select", required: !0, options: Ke }))), /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement($, { value: t.dataFormat.prefix, section: "dataFormat", fieldName: "prefix", label: "Prefix", updateField: i }), /* @__PURE__ */ e.createElement($, { value: t.dataFormat.suffix, section: "dataFormat", fieldName: "suffix", label: "Suffix", updateField: i }), /* @__PURE__ */ e.createElement($, { type: "number", value: t.dataFormat.roundToPlace, section: "dataFormat", fieldName: "roundToPlace", label: "Round", updateField: i, min: "0", max: "99" }))), /* @__PURE__ */ e.createElement(ee, { value: t.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: i }), /* @__PURE__ */ e.createElement(ee, { value: t.dataFormat.ignoreZeros, section: "dataFormat", fieldName: "ignoreZeros", label: "Ignore Zeros", updateField: i }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(se, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((l, o) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: o }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        w(o);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columnName ? l.columnName : "",
      onChange: (d) => {
        G("columnName", o, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    P().map((d, E) => /* @__PURE__ */ e.createElement("option", { value: d, key: E }, d))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columnValue,
      onChange: (d) => {
        G("columnValue", o, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    L(o).map((d, E) => /* @__PURE__ */ e.createElement("option", { value: d, key: E }, d))
  ))))), (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: z, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ e.createElement(le, null, " ", /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(oe, null, "Visual")), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement($, { type: "number", value: t.biteFontSize, fieldName: "biteFontSize", label: "Bite Font Size", updateField: i, min: "17", max: "65" }), /* @__PURE__ */ e.createElement(ae, { value: t.fontSize, fieldName: "fontSize", label: "Overall Font Size", updateField: i, options: ["small", "medium", "large"] }), /* @__PURE__ */ e.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ e.createElement(ee, { value: (I = t.visual) == null ? void 0 : I.border, section: "visual", fieldName: "border", label: "Display Border", updateField: i }), /* @__PURE__ */ e.createElement(ee, { value: (J = t.visual) == null ? void 0 : J.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: i }), /* @__PURE__ */ e.createElement(ee, { value: (C = t.visual) == null ? void 0 : C.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: i }), /* @__PURE__ */ e.createElement(ee, { value: (R = t.visual) == null ? void 0 : R.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: i }), /* @__PURE__ */ e.createElement(ee, { value: (B = t.visual) == null ? void 0 : B.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: i })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, Qe.map((l) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: l,
      key: l,
      onClick: () => {
        r({ ...t, theme: l });
      },
      className: t.theme === l ? "selected " + l : l
    }
  )))))), ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ e.createElement(le, null, " ", /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(oe, null, "Image", ["dynamic"].includes(t.imageData.display) && "s")), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement(ae, { value: t.imageData.display || "", section: "imageData", fieldName: "display", label: "Image Display Type", updateField: i, options: ["none", "static", "dynamic"] }), /* @__PURE__ */ e.createElement(ae, { value: t.bitePosition || "", fieldName: "bitePosition", label: "Image/Graphic Position", updateField: i, initial: "Select", options: tt }), ["static"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement($, { value: t.imageData.url, section: "imageData", fieldName: "url", label: "Image URL", updateField: i }), /* @__PURE__ */ e.createElement($, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text", updateField: i })), ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement($, { value: t.imageData.url || "", section: "imageData", fieldName: "url", label: "Image URL (default)", updateField: i }), /* @__PURE__ */ e.createElement($, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text (default)", updateField: i }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), (!t.imageData.options || t.imageData.options.length === 0) && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no dynamic images."), t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", null, t.imageData.options.map((l, o) => {
    var d, E, x, Z;
    return /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: o }, /* @__PURE__ */ e.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: () => {
          j(o);
        }
      },
      "Remove"
    ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, /* @__PURE__ */ e.createElement("strong", null, "Image #" + (o + 1))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((d = l.arguments[0]) == null ? void 0 : d.operator) || "",
        onChange: (b) => {
          S("operator", o, 0, b.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      he.map((b, te) => /* @__PURE__ */ e.createElement("option", { value: b, key: te }, b))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((E = l.arguments[0]) == null ? void 0 : E.threshold) || "",
        onChange: (b) => {
          S("threshold", o, 0, b.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        className: "border-dashed text-center",
        value: l.secondArgument ? "and" : "then",
        onChange: (b) => {
          b.target.value === "then" && (S("secondArgument", o, null, !1), X(o)), b.target.value === "and" && S("secondArgument", o, null, !0);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "then" }, "Then"),
      /* @__PURE__ */ e.createElement("option", { value: "and" }, "And")
    ))), l.secondArgument && l.secondArgument === !0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((x = l.arguments[1]) == null ? void 0 : x.operator) || "",
        onChange: (b) => {
          T(o, "operator", b.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      he.map((b, te) => /* @__PURE__ */ e.createElement("option", { value: b, key: te }, b))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((Z = l.arguments[1]) == null ? void 0 : Z.threshold) || "",
        onChange: (b) => {
          T(o, "threshold", b.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: l.source || "",
        onChange: (b) => {
          S("source", o, null, b.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: l.alt || "",
        onChange: (b) => {
          S("alt", o, null, b.target.value);
        }
      }
    )))));
  }))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: W, className: "btn full-width" }, "Add Dynamic Image")))))))));
}), pe = {
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
}, Ee = ({ text: t, theme: r = "theme-blue", dataFormat: m, biteFontSize: h }) => {
  const u = {
    outerRing: {
      fill: pe[r].primary
    },
    innerRing: {
      fill: Ie(pe[r].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ e.createElement("circle", { cx: "50", cy: "50", r: "45", style: u.innerRing, strokeWidth: "10", stroke: u.outerRing.fill }), /* @__PURE__ */ e.createElement("text", { y: "50%", x: "50%", fontSize: h, style: u.text, textAnchor: "middle", dominantBaseline: "central" }, t));
};
const Xe = ({ label: t, value: r }) => /* @__PURE__ */ e.createElement("div", { className: "cove-component__content kpi-container" }, /* @__PURE__ */ e.createElement("div", { className: "kpi-content" }, /* @__PURE__ */ e.createElement("div", { className: "label-container" }, /* @__PURE__ */ e.createElement("span", { className: "label" }, /* @__PURE__ */ e.createElement("strong", null, t))), /* @__PURE__ */ e.createElement("div", { className: "value-container" }, /* @__PURE__ */ e.createElement("span", { className: "value" }, /* @__PURE__ */ e.createElement("strong", null, r))))), Ye = (t, r) => {
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
const vt = (t) => {
  const { configUrl: r, config: m, isDashboard: h = !1, isEditor: u = !1, setConfig: _, link: v } = t, N = {
    config: m ?? ce,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [O, i] = g.useReducer(Ye, N), { config: a, loading: A, currentViewport: w, coveLoadedHasRan: G, container: z } = O, { title: P, dataColumn: L, dataFunction: S, imageData: T, biteBody: X, biteFontSize: W, dataFormat: j, biteStyle: I, filters: J, subtext: C } = a, { innerContainerClasses: R, contentClasses: B } = Ve(a), l = new Re(), o = new Ue((s) => {
    for (let f of s) {
      let U = qe(f.contentRect.width * 2);
      i({ type: "SET_CURRENT_VIEWPORT", payload: U });
    }
  }), d = (s) => {
    Object.keys(ce).forEach((f) => {
      s[f] && typeof s[f] == "object" && !Array.isArray(s[f]) && (s[f] = { ...ce[f], ...s[f] });
    }), s.runtime = {}, s.runtime.uniqueId = Date.now(), s.runtime.editorErrorMessage = "", i({ type: "SET_CONFIG", payload: s });
  }, E = async () => {
    let s = m || await (await fetch(r)).json(), f = s.data ?? [];
    if (s.dataUrl) {
      s.dataUrl = `${s.dataUrl}?${je()}`;
      let M = await We(s.dataUrl);
      M && s.dataDescription && (M = l.autoStandardize(M), M = l.developerStandardize(M, s.dataDescription)), M && (f = M);
    }
    s.data = f;
    const U = { ...ze(s) };
    d({ ...ce, ...U }), i({ type: "SET_LOADING", payload: !1 });
  }, x = (s = !0) => {
    if (!L || !S)
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
      let c = n, y = Number(a.dataFormat.roundToPlace);
      if (y < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ');
        return;
      }
      return typeof y == "number" && y > -1 && (c = Number(c).toFixed(y)), String(c);
    }, U = (n) => (a.dataFormat.ignoreZeros && (D = D.filter((c) => c && c)), D.length), M = (n) => {
      if (n == null) {
        console.error("Enter valid value for getColumnSum function ");
        return;
      }
      if (n.length === 0 || !Array.isArray(n)) {
        console.error("Arguments are not valid getColumnSum function ");
        return;
      }
      let c = 0;
      return n.length > 1 ? c = n.map((y) => Number(y)).reduce((y, V) => y + V) : c = Number(n[0]), f(c);
    }, k = (n) => {
      if (n == null || !Array.isArray(n)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      a.dataFormat.ignoreZeros && (n = n.filter((y) => y !== 0));
      let c = 0;
      return n.length > 1 ? c = n.map((y) => Number(y)).reduce((y, V) => y + V) / n.length : c = Number(n[0]), f(c);
    }, F = (n = []) => {
      let c = {}, y = -1 / 0;
      for (let q = 0; q < n.length; q++)
        c[n[q]] ? c[n[q]] += 1 : c[n[q]] = 1, c[n[q]] > y && (y = c[n[q]]);
      let V = [];
      for (let q in c)
        c[q] === y && V.push(q);
      return V;
    }, H = (n) => {
      if (!n.length)
        return;
      const c = Math.floor(n.length / 2), y = [...n].sort((q, Oe) => q - Oe), V = n.length % 2 !== 0 ? y[c] : (y[c - 1] + y[c]) / 2;
      return f(V);
    }, Y = (n) => {
      if (n == null)
        return;
      (Number.isNaN(n) || typeof n == "number") && (n = String(n));
      const c = "en-US";
      let y = parseFloat(n).toLocaleString(c, {
        useGrouping: !0,
        maximumFractionDigits: 6
      });
      const V = n.match(/\.\d*?(0*)$/);
      return V && (y += /[1-9]/.test(V[0]) ? V[1] : V[0]), y;
    };
    let p = "", K = a.data;
    J.map((n) => n.columnName && n.columnValue ? K = K.filter(function(c) {
      return c[n.columnName] === n.columnValue;
    }) : !1);
    let D = [];
    switch (K.length ? K.forEach((n) => {
      let c = Ge(n[L]);
      typeof c == "number" && D.push(c);
    }) : a.dataColumn && a.data && (D = a.data.map((n) => Number(n[a.dataColumn]))), S) {
      case ve:
        p = U();
        break;
      case De:
        p = M(D);
        break;
      case Ne:
        p = k(D);
        break;
      case Ae:
        p = H(D);
        break;
      case ye:
        p = Math.max(...D);
        break;
      case Ce:
        p = Math.min(...D);
        break;
      case Te:
        p = F(D).join("");
        break;
      case me:
        let n = Math.min(...D), c = Math.max(...D);
        n = f(n), c = f(c), a.dataFormat.commas && (n = Y(n), c = Y(c)), p = a.dataFormat.prefix + n + a.dataFormat.suffix + " - " + a.dataFormat.prefix + c + a.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + S);
    }
    return S !== me && (p = f(p), a.dataFormat.commas && (p = Y(p))), s ? j.prefix + p + j.suffix : p;
  }, Z = g.useCallback((s) => {
    s !== null && o.observe(s), i({ type: "SET_CONTAINER", payload: s });
  }, []);
  g.useEffect(() => {
    E(), de("cove_loaded", { loadConfigHasRun: !0 });
  }, []), g.useEffect(() => {
    a && !G && z && (de("cove_loaded", { config: a }), i({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [a, z]), m && a && JSON.stringify(m.data) !== JSON.stringify(a.data) && E();
  let b = /* @__PURE__ */ e.createElement(Me, null);
  const te = g.useCallback(() => {
    var M;
    let s = {
      "<": (k, F) => k < F,
      ">": (k, F) => k > F,
      "<=": (k, F) => k <= F,
      ">=": (k, F) => k >= F,
      "≠": (k, F) => k !== F,
      "=": (k, F) => k === F
    }, f = T.url, U = T.alt;
    if (T.display === "dynamic" && T.options && ((M = T.options) == null ? void 0 : M.length) > 0) {
      let k = Number(x(!1)), F = !1;
      T.options.forEach((H, Y) => {
        var n, c;
        let p = H.arguments, { source: K, alt: D } = H;
        F === !1 && p.length > 0 && p[0].operator.length > 0 && p[0].threshold.length > 0 && s[p[0].operator](k, p[0].threshold) && (p[1] !== void 0 ? ((n = p[1].operator) == null ? void 0 : n.length) > 0 && ((c = p[1].threshold) == null ? void 0 : c.length) > 0 && s[p[1].operator](k, p[1].threshold) && (f = K, D !== "" && D !== void 0 && (U = D), F = !0) : (f = K, D !== "" && D !== void 0 && (U = D), F = !0));
      });
    }
    return f.length > 0 && I !== "graphic" && T.display !== "none" ? /* @__PURE__ */ e.createElement("img", { alt: U, src: f, className: "bite-image callout" }) : null;
  }, [T]);
  if (A === !1) {
    let s = [], f = !1, U = !1;
    switch (a.bitePosition) {
      case _e:
        s.push("bite-left"), f = !0;
        break;
      case Se:
        s.push("bite-right"), f = !0;
        break;
      case xe:
        s.push("bite-top"), f = !0;
        break;
      case Fe:
        s.push("bite-bottom"), U = !0;
        break;
    }
    const M = () => !1, k = () => {
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
    }, F = () => {
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
          disabled: M(),
          onClick: (p) => {
            p.preventDefault(), d({ ...a, newViz: !1 });
          }
        },
        "I'm Done"
      )));
    }, H = L !== void 0 && S !== void 0;
    b = /* @__PURE__ */ e.createElement(e.Fragment, null, u && /* @__PURE__ */ e.createElement(ge, null), /* @__PURE__ */ e.createElement(ne.Responsive, { isEditor: u }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(k, null), (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e.createElement(F, null), /* @__PURE__ */ e.createElement(Be, { config: a, title: P, isDashboard: h, classes: ["bite-header", `${a.theme}`] }), /* @__PURE__ */ e.createElement("div", { className: `bite ${s.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: `bite-content-container ${B.join(" ")}` }, H && I === "graphic" && f && /* @__PURE__ */ e.createElement(Ee, { theme: a.theme, text: x(), biteFontSize: W, dataFormat: j }), f && /* @__PURE__ */ e.createElement(te, null), /* @__PURE__ */ e.createElement("div", { className: "bite-content" }, H && I === "title" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: W + "px" } }, x()), H && I === "split" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: W + "px" } }, x()), /* @__PURE__ */ e.createElement(g.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ e.createElement("p", { className: "bite-text" }, H && I === "body" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" } }, x()), ue(X)), H && I === "end" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" } }, x()), C && !a.general.isCompactStyle && /* @__PURE__ */ e.createElement("p", { className: "bite-subtext" }, ue(C))))), U && /* @__PURE__ */ e.createElement(te, null), H && I === "graphic" && !f && /* @__PURE__ */ e.createElement(Ee, { theme: a.theme, text: x(), biteFontSize: W, dataFormat: j })))), v && v));
  }
  return /* @__PURE__ */ e.createElement(be.Provider, { value: { config: a, updateConfig: d, loading: A, data: a.data, setParentConfig: _, isDashboard: h } }, I !== "gradient" && /* @__PURE__ */ e.createElement(ne.VisualizationWrapper, { ref: Z, config: a, isEditor: u, showEditorPanel: a == null ? void 0 : a.showEditorPanel }, b), I === "gradient" && /* @__PURE__ */ e.createElement(ne.VisualizationWrapper, { ref: Z, config: a, isEditor: u, showEditorPanel: a == null ? void 0 : a.showEditorPanel }, u && /* @__PURE__ */ e.createElement(ge, null), /* @__PURE__ */ e.createElement(ne.Responsive, { isEditor: u }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(Error, null), (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e.createElement(Confirm, null), /* @__PURE__ */ e.createElement(Xe, { label: a.title, value: x() }))));
}, ye = "Max", ve = "Count", Ne = "Mean (Average)", Ae = "Median", Ce = "Min", Te = "Mode", me = "Range", De = "Sum", Ke = [ve, ye, Ne, Ae, Ce, Te, me, De], et = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message",
  gradient: "Gradient"
}, _e = "Left", Se = "Right", xe = "Top", Fe = "Bottom", tt = [_e, Se, xe, Fe], at = "<", nt = ">", lt = "<=", rt = ">=", ot = "=", it = "≠", he = [at, nt, lt, rt, ot, it];
export {
  vt as C
};
