import { r as g, R as e } from "./storybook-index-45401197.es.js";
import { A as ke, a as re, b as le, c as oe, d as ie, e as Ie, D as Re } from "./storybook-DataTransform-6163e156.es.js";
import { a as se, b as we } from "./storybook-Icon-4f5978ba.es.js";
import { T as Q } from "./storybook-Tooltip-4102bd69.es.js";
import { E as Pe, L as Me } from "./storybook-viewports-5c5d7af1.es.js";
import { u as Le } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as Be, H as ue } from "./storybook-index-3b47b3f7.es.js";
import { L as ne, u as Ve, p as de, c as ze } from "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import { i as Ue, g as qe } from "./storybook-getViewport-513ec896.es.js";
import { n as Ge } from "./storybook-numberFromString-24623c03.es.js";
import { f as We } from "./storybook-fetchRemoteData-1d0a5295.es.js";
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
}, he = g.createContext({});
function je(t, l, m) {
  var b = this, u = g.useRef(null), _ = g.useRef(0), v = g.useRef(null), N = g.useRef([]), O = g.useRef(), i = g.useRef(), a = g.useRef(t), T = g.useRef(!0);
  a.current = t;
  var w = !l && l !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  l = +l || 0, m = m || {};
  var G = !!m.leading, z = "trailing" in m ? !!m.trailing : !0, P = "maxWait" in m, L = P ? Math.max(+m.maxWait || 0, l) : null;
  g.useEffect(function() {
    return T.current = !0, function() {
      T.current = !1;
    };
  }, []);
  var S = g.useMemo(function() {
    var C = function(A) {
      var R = N.current, B = O.current;
      return N.current = O.current = null, _.current = A, i.current = a.current.apply(B, R);
    }, X = function(A, R) {
      w && cancelAnimationFrame(v.current), v.current = w ? requestAnimationFrame(A) : setTimeout(A, R);
    }, W = function(A) {
      if (!T.current)
        return !1;
      var R = A - u.current, B = A - _.current;
      return !u.current || R >= l || R < 0 || P && B >= L;
    }, j = function(A) {
      return v.current = null, z && N.current ? C(A) : (N.current = O.current = null, i.current);
    }, I = function() {
      var A = Date.now();
      if (W(A))
        return j(A);
      if (T.current) {
        var R = A - u.current, B = A - _.current, r = l - R, o = P ? Math.min(r, L - B) : r;
        X(I, o);
      }
    }, J = function() {
      for (var A = [], R = 0; R < arguments.length; R++)
        A[R] = arguments[R];
      var B = Date.now(), r = W(B);
      if (N.current = A, O.current = b, u.current = B, r) {
        if (!v.current && T.current)
          return _.current = u.current, X(I, l), G ? C(u.current) : i.current;
        if (P)
          return X(I, l), C(u.current);
      }
      return v.current || X(I, l), i.current;
    };
    return J.cancel = function() {
      v.current && (w ? cancelAnimationFrame(v.current) : clearTimeout(v.current)), _.current = 0, N.current = u.current = O.current = v.current = null;
    }, J.isPending = function() {
      return !!v.current;
    }, J.flush = function() {
      return v.current ? j(Date.now()) : i.current;
    }, J;
  }, [G, P, l, L, z, w]);
  return S;
}
function He(t, l) {
  return t === l;
}
function fe(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function $e(t) {
  var l = g.useState(fe(t)), m = l[0], b = l[1], u = g.useCallback(function(_) {
    return b(fe(_));
  }, []);
  return [m, u];
}
function Ze(t, l, m) {
  var b = m && m.equalityFn || He, u = $e(t), _ = u[0], v = u[1], N = je(g.useCallback(function(i) {
    return v(i);
  }, [v]), l, m), O = g.useRef(t);
  return b(O.current, t) || (N(t), O.current = t), [_, N];
}
const $ = g.memo(
  ({
    label: t,
    section: l = null,
    subsection: m = null,
    fieldName: b,
    updateField: u,
    value: _,
    tooltip: v,
    type: N = "input",
    i: O = null,
    min: i = null,
    max: a = null,
    ...T
  }) => {
    const [w, G] = g.useState(_), [z] = Ze(w, 500);
    g.useEffect(() => {
      typeof z == "string" && _ !== z && u(l, m, b, z, O);
    }, [z, l, m, b, O, _, u]);
    let P = m ? `${l}-${m}-${b}` : `${l}-${m}-${b}`;
    const L = (C) => {
      N !== "number" || i === null || !C.target.value || parseFloat(i) <= parseFloat(C.target.value) & parseFloat(a) >= parseFloat(C.target.value) ? G(C.target.value) : G(i.toString());
    };
    let S = /* @__PURE__ */ e.createElement("input", { type: "text", name: P, onChange: L, ...T, value: w });
    return N === "textarea" && (S = /* @__PURE__ */ e.createElement("textarea", { name: P, onChange: L, ...T, value: w })), N === "number" && (S = /* @__PURE__ */ e.createElement("input", { type: "number", name: P, onChange: L, ...T, value: w })), /* @__PURE__ */ e.createElement(e.Fragment, null, t && t.length > 0 && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t, v), S), (!t || t.length === 0) && S);
  }
), ee = g.memo(
  ({ label: t, value: l, fieldName: m, section: b = null, subsection: u = null, tooltip: _, updateField: v, ...N }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: m,
      checked: l,
      onChange: () => {
        v(b, u, m, !l);
      },
      ...N
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, _))
), ae = g.memo(
  ({
    label: t,
    value: l,
    options: m,
    fieldName: b,
    section: u = null,
    subsection: _ = null,
    required: v = !1,
    updateField: N,
    initial: O,
    ...i
  }) => {
    let a = "";
    if (Array.isArray(m))
      a = m.map((T) => /* @__PURE__ */ e.createElement("option", { value: T, key: T }, T));
    else {
      a = [];
      for (const [T, w] of Object.entries(m))
        a.push(
          /* @__PURE__ */ e.createElement("option", { value: T, key: T }, w)
        );
    }
    return O && a.unshift(
      /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, O)
    ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, t), /* @__PURE__ */ e.createElement(
      "select",
      {
        className: v && !l ? "warning" : "",
        name: b,
        value: l,
        onChange: (T) => {
          N(u, _, b, T.target.value);
        },
        ...i
      },
      a
    ));
  }
), Je = [
  "theme-blue",
  "theme-purple",
  "theme-brown",
  "theme-teal",
  "theme-pink",
  "theme-orange",
  "theme-slate",
  "theme-indigo",
  "theme-cyan",
  "theme-green",
  "theme-amber"
], ge = g.memo(() => {
  var I, J, A, R, B;
  const { config: t, updateConfig: l, loading: m, data: b, setParentConfig: u, isDashboard: _, isEditor: v } = g.useContext(he), [N, O] = g.useState(!0), i = Le(t, l, !0);
  g.useEffect(() => {
    if (u) {
      const r = T();
      delete r.newViz, u(r);
    }
  }, [t]);
  const a = () => {
    O(!N), l({
      ...t,
      showEditorPanel: !N
    });
  }, T = () => {
    let r = JSON.parse(JSON.stringify(t));
    return delete r.runtime, r;
  }, w = (r) => {
    let o = [...t.filters];
    o.splice(r, 1), l({ ...t, filters: o });
  }, G = (r, o, d) => {
    let E = [...t.filters];
    E[o][r] = d, l({ ...t, filters: E });
  }, z = () => {
    let r = t.filters ? [...t.filters] : [];
    r.push({ values: [] }), l({ ...t, filters: r });
  }, P = (r = !0) => {
    let o = {};
    return b.length && b.map((d) => Object.keys(d).forEach((E) => o[E] = !0)), Object.keys(o);
  }, L = (r) => {
    let o = [];
    const d = t.filters[r].columnName;
    return b && d && (b.forEach(function(E) {
      E[d] !== void 0 && o.indexOf(E[d]) === -1 && o.push(E[d]);
    }), o.sort()), o;
  }, S = (r, o, d = null, E) => {
    let x = [...t.imageData.options];
    d === null ? x[o][r] = E : x[o].arguments[d][r] = E;
    let Z = { ...t.imageData, options: x };
    l({ ...t, imageData: Z });
  }, C = (r, o, d) => {
    let E = [...t.imageData.options[r].arguments];
    E[1] = { ...E[1], [o]: d };
    let x = { ...t.imageData.options[r], arguments: E }, Z = [...t.imageData.options];
    Z[r] = x;
    let h = { ...t.imageData, options: Z };
    l({ ...t, imageData: h });
  }, X = (r) => {
    if (t.imageData.options[r].arguments.length > 1) {
      let o = [...t.imageData.options[r].arguments];
      o.pop();
      let d = { ...t.imageData.options[r], arguments: o }, E = [...t.imageData.options];
      E[r] = d;
      let x = { ...t.imageData, options: E };
      l({ ...t, imageData: x });
    }
  }, W = () => {
    let r = t.imageData.options ? [...t.imageData.options] : [];
    r.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let o = { ...t.imageData, options: r };
    l({ ...t, imageData: o });
  }, j = (r) => {
    let o = [...t.imageData.options];
    o.splice(r, 1);
    let d = { ...t.imageData, options: o };
    l({ ...t, imageData: d });
  };
  return m ? null : /* @__PURE__ */ e.createElement(Pe, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(
    ne.Sidebar,
    {
      isEditor: !0,
      config: t,
      title: "Configure Data Bites",
      onBackClick: a,
      displayPanel: N
    },
    /* @__PURE__ */ e.createElement("section", { className: "form-container" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement(ke, { allowZeroExpanded: !0 }, /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "General")), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement(
      ae,
      {
        value: t.biteStyle,
        fieldName: "biteStyle",
        label: "Data Bite Style",
        updateField: i,
        options: et,
        initial: "Select"
      }
    ), /* @__PURE__ */ e.createElement(
      $,
      {
        value: t.title,
        fieldName: "title",
        label: "Title",
        placeholder: "Data Bite Title",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
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
    ))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Data", " ", (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(we, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "two-col" }, /* @__PURE__ */ e.createElement(
      ae,
      {
        value: t.dataColumn || "",
        fieldName: "dataColumn",
        label: "Data Column",
        updateField: i,
        initial: "Select",
        required: !0,
        options: P()
      }
    ), /* @__PURE__ */ e.createElement(
      ae,
      {
        value: t.dataFunction || "",
        fieldName: "dataFunction",
        label: "Data Function",
        updateField: i,
        initial: "Select",
        required: !0,
        options: Ke
      }
    ))), /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(
      $,
      {
        value: t.dataFormat.prefix,
        section: "dataFormat",
        fieldName: "prefix",
        label: "Prefix",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      $,
      {
        value: t.dataFormat.suffix,
        section: "dataFormat",
        fieldName: "suffix",
        label: "Suffix",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      $,
      {
        type: "number",
        value: t.dataFormat.roundToPlace,
        section: "dataFormat",
        fieldName: "roundToPlace",
        label: "Round",
        updateField: i,
        min: "0",
        max: "99"
      }
    ))), /* @__PURE__ */ e.createElement(
      ee,
      {
        value: t.dataFormat.commas,
        section: "dataFormat",
        fieldName: "commas",
        label: "Add commas",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      ee,
      {
        value: t.dataFormat.ignoreZeros,
        section: "dataFormat",
        fieldName: "ignoreZeros",
        label: "Ignore Zeros",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ e.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(Q.Target, null, /* @__PURE__ */ e.createElement(se, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(Q.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((r, o) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: o }, /* @__PURE__ */ e.createElement(
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
        value: r.columnName ? r.columnName : "",
        onChange: (d) => {
          G("columnName", o, d.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
      P().map((d, E) => /* @__PURE__ */ e.createElement("option", { value: d, key: E }, d))
    )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
      "select",
      {
        value: r.columnValue,
        onChange: (d) => {
          G("columnValue", o, d.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
      L(o).map((d, E) => /* @__PURE__ */ e.createElement("option", { value: d, key: E }, d))
    ))))), (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: z, className: "btn btn-primary full-width" }, "Add Filter"))), /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Visual")), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement(
      $,
      {
        type: "number",
        value: t.biteFontSize,
        fieldName: "biteFontSize",
        label: "Bite Font Size",
        updateField: i,
        min: "17",
        max: "65"
      }
    ), /* @__PURE__ */ e.createElement(
      ae,
      {
        value: t.fontSize,
        fieldName: "fontSize",
        label: "Overall Font Size",
        updateField: i,
        options: ["small", "medium", "large"]
      }
    ), /* @__PURE__ */ e.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ e.createElement(
      ee,
      {
        value: (I = t.visual) == null ? void 0 : I.border,
        section: "visual",
        fieldName: "border",
        label: "Display Border",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      ee,
      {
        value: (J = t.visual) == null ? void 0 : J.borderColorTheme,
        section: "visual",
        fieldName: "borderColorTheme",
        label: "Use Border Color Theme",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      ee,
      {
        value: (A = t.visual) == null ? void 0 : A.accent,
        section: "visual",
        fieldName: "accent",
        label: "Use Accent Style",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      ee,
      {
        value: (R = t.visual) == null ? void 0 : R.background,
        section: "visual",
        fieldName: "background",
        label: "Use Theme Background Color",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      ee,
      {
        value: (B = t.visual) == null ? void 0 : B.hideBackgroundColor,
        section: "visual",
        fieldName: "hideBackgroundColor",
        label: "Hide Background Color",
        updateField: i
      }
    )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, Je.map((r) => /* @__PURE__ */ e.createElement(
      "li",
      {
        title: r,
        key: r,
        onClick: () => {
          l({ ...t, theme: r });
        },
        className: t.theme === r ? "selected " + r : r
      }
    )))))), ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ e.createElement(re, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(oe, null, "Image", ["dynamic"].includes(t.imageData.display) && "s")), /* @__PURE__ */ e.createElement(ie, null, /* @__PURE__ */ e.createElement(
      ae,
      {
        value: t.imageData.display || "",
        section: "imageData",
        fieldName: "display",
        label: "Image Display Type",
        updateField: i,
        options: ["none", "static", "dynamic"]
      }
    ), /* @__PURE__ */ e.createElement(
      ae,
      {
        value: t.bitePosition || "",
        fieldName: "bitePosition",
        label: "Image/Graphic Position",
        updateField: i,
        initial: "Select",
        options: tt
      }
    ), ["static"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      $,
      {
        value: t.imageData.url,
        section: "imageData",
        fieldName: "url",
        label: "Image URL",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      $,
      {
        value: t.imageData.alt,
        section: "imageData",
        fieldName: "alt",
        label: "Alt Text",
        updateField: i
      }
    )), ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      $,
      {
        value: t.imageData.url || "",
        section: "imageData",
        fieldName: "url",
        label: "Image URL (default)",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement(
      $,
      {
        value: t.imageData.alt,
        section: "imageData",
        fieldName: "alt",
        label: "Alt Text (default)",
        updateField: i
      }
    ), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), (!t.imageData.options || t.imageData.options.length === 0) && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no dynamic images."), t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", null, t.imageData.options.map((r, o) => {
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
          value: ((d = r.arguments[0]) == null ? void 0 : d.operator) || "",
          onChange: (h) => {
            S("operator", o, 0, h.target.value);
          }
        },
        /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
        be.map((h, te) => /* @__PURE__ */ e.createElement("option", { value: h, key: te }, h))
      )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          type: "number",
          value: ((E = r.arguments[0]) == null ? void 0 : E.threshold) || "",
          onChange: (h) => {
            S("threshold", o, 0, h.target.value);
          }
        }
      ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
        "select",
        {
          className: "border-dashed text-center",
          value: r.secondArgument ? "and" : "then",
          onChange: (h) => {
            h.target.value === "then" && (S("secondArgument", o, null, !1), X(o)), h.target.value === "and" && S("secondArgument", o, null, !0);
          }
        },
        /* @__PURE__ */ e.createElement("option", { value: "then" }, "Then"),
        /* @__PURE__ */ e.createElement("option", { value: "and" }, "And")
      ))), r.secondArgument && r.secondArgument === !0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
        "select",
        {
          value: ((x = r.arguments[1]) == null ? void 0 : x.operator) || "",
          onChange: (h) => {
            C(o, "operator", h.target.value);
          }
        },
        /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
        be.map((h, te) => /* @__PURE__ */ e.createElement("option", { value: h, key: te }, h))
      )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          type: "number",
          value: ((Z = r.arguments[1]) == null ? void 0 : Z.threshold) || "",
          onChange: (h) => {
            C(o, "threshold", h.target.value);
          }
        }
      ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          type: "text",
          value: r.source || "",
          onChange: (h) => {
            S("source", o, null, h.target.value);
          }
        }
      ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          type: "text",
          value: r.alt || "",
          onChange: (h) => {
            S("alt", o, null, h.target.value);
          }
        }
      )))));
    }))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: W, className: "btn btn-primary full-width" }, "Add Dynamic Image")))))))
  ));
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
}, Ee = ({ text: t, theme: l = "theme-blue", dataFormat: m, biteFontSize: b }) => {
  const u = {
    outerRing: {
      fill: pe[l].primary
    },
    innerRing: {
      fill: Ie(pe[l].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ e.createElement("circle", { cx: "50", cy: "50", r: "45", style: u.innerRing, strokeWidth: "10", stroke: u.outerRing.fill }), /* @__PURE__ */ e.createElement("text", { y: "50%", x: "50%", fontSize: b, style: u.text, textAnchor: "middle", dominantBaseline: "central" }, t));
};
const Qe = ({ label: t, value: l }) => /* @__PURE__ */ e.createElement("div", { className: "cove-component__content kpi-container" }, /* @__PURE__ */ e.createElement("div", { className: "kpi-content" }, /* @__PURE__ */ e.createElement("div", { className: "label-container" }, /* @__PURE__ */ e.createElement("span", { className: "label" }, /* @__PURE__ */ e.createElement("strong", null, t))), /* @__PURE__ */ e.createElement("div", { className: "value-container" }, /* @__PURE__ */ e.createElement("span", { className: "value" }, /* @__PURE__ */ e.createElement("strong", null, l)))));
function Xe() {
  const l = /* @__PURE__ */ new Date();
  return new Date(l.getTime() - l.getTime() % 9e5).toISOString();
}
const Ye = (t, l) => {
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
const yt = (t) => {
  const {
    configUrl: l,
    config: m,
    isDashboard: b = !1,
    isEditor: u = !1,
    setConfig: _,
    link: v
  } = t, N = {
    config: m ?? ce,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [O, i] = g.useReducer(Ye, N), { config: a, loading: T, currentViewport: w, coveLoadedHasRan: G, container: z } = O, {
    title: P,
    dataColumn: L,
    dataFunction: S,
    imageData: C,
    biteBody: X,
    biteFontSize: W,
    dataFormat: j,
    biteStyle: I,
    filters: J,
    subtext: A
  } = a, { innerContainerClasses: R, contentClasses: B } = Ve(a), r = new Re(), o = new Ue((s) => {
    for (let f of s) {
      let U = qe(f.contentRect.width * 2);
      i({ type: "SET_CURRENT_VIEWPORT", payload: U });
    }
  }), d = (s) => {
    Object.keys(ce).forEach((f) => {
      s[f] && typeof s[f] == "object" && !Array.isArray(s[f]) && (s[f] = { ...ce[f], ...s[f] });
    }), s.runtime = {}, s.runtime.uniqueId = Date.now(), s.runtime.editorErrorMessage = "", i({ type: "SET_CONFIG", payload: s });
  }, E = async () => {
    let s = m || await (await fetch(l)).json(), f = s.data ?? [];
    if (s.dataUrl) {
      s.dataUrl = `${s.dataUrl}?${Xe()}`;
      let M = await We(s.dataUrl);
      M && s.dataDescription && (M = r.autoStandardize(M), M = r.developerStandardize(M, s.dataDescription)), M && (f = M);
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
      case Te:
        p = H(D);
        break;
      case ye:
        p = Math.max(...D);
        break;
      case Ae:
        p = Math.min(...D);
        break;
      case Ce:
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
  let h = /* @__PURE__ */ e.createElement(Me, null);
  const te = g.useCallback(() => {
    var M;
    let s = {
      "<": (k, F) => k < F,
      ">": (k, F) => k > F,
      "<=": (k, F) => k <= F,
      ">=": (k, F) => k >= F,
      "≠": (k, F) => k !== F,
      "=": (k, F) => k === F
    }, f = C.url, U = C.alt;
    if (C.display === "dynamic" && C.options && ((M = C.options) == null ? void 0 : M.length) > 0) {
      let k = Number(x(!1)), F = !1;
      C.options.forEach((H, Y) => {
        var n, c;
        let p = H.arguments, { source: K, alt: D } = H;
        F === !1 && p.length > 0 && p[0].operator.length > 0 && p[0].threshold.length > 0 && s[p[0].operator](k, p[0].threshold) && (p[1] !== void 0 ? ((n = p[1].operator) == null ? void 0 : n.length) > 0 && ((c = p[1].threshold) == null ? void 0 : c.length) > 0 && s[p[1].operator](k, p[1].threshold) && (f = K, D !== "" && D !== void 0 && (U = D), F = !0) : (f = K, D !== "" && D !== void 0 && (U = D), F = !0));
      });
    }
    return f.length > 0 && I !== "graphic" && C.display !== "none" ? /* @__PURE__ */ e.createElement("img", { alt: U, src: f, className: "bite-image callout" }) : null;
  }, [C]);
  if (T === !1) {
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
          className: "btn btn-primary",
          style: { margin: "1em auto" },
          disabled: M(),
          onClick: (p) => {
            p.preventDefault(), d({ ...a, newViz: !1 });
          }
        },
        "I'm Done"
      )));
    }, H = L !== void 0 && S !== void 0;
    h = /* @__PURE__ */ e.createElement(e.Fragment, null, u && /* @__PURE__ */ e.createElement(ge, null), /* @__PURE__ */ e.createElement(ne.Responsive, { isEditor: u }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(k, null), (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e.createElement(F, null), /* @__PURE__ */ e.createElement(
      Be,
      {
        config: a,
        title: P,
        isDashboard: b,
        classes: ["bite-header", `${a.theme}`]
      }
    ), /* @__PURE__ */ e.createElement("div", { className: `bite ${s.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: `bite-content-container ${B.join(" ")}` }, H && I === "graphic" && f && /* @__PURE__ */ e.createElement(
      Ee,
      {
        theme: a.theme,
        text: x(),
        biteFontSize: W,
        dataFormat: j
      }
    ), f && /* @__PURE__ */ e.createElement(te, null), /* @__PURE__ */ e.createElement("div", { className: "bite-content" }, H && I === "title" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: W + "px" } }, x()), H && I === "split" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: W + "px" } }, x()), /* @__PURE__ */ e.createElement(g.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ e.createElement("p", { className: "bite-text" }, H && I === "body" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" } }, x()), ue(X)), H && I === "end" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" } }, x()), A && !a.general.isCompactStyle && /* @__PURE__ */ e.createElement("p", { className: "bite-subtext" }, ue(A))))), U && /* @__PURE__ */ e.createElement(te, null), H && I === "graphic" && !f && /* @__PURE__ */ e.createElement(
      Ee,
      {
        theme: a.theme,
        text: x(),
        biteFontSize: W,
        dataFormat: j
      }
    )))), v && v));
  }
  return /* @__PURE__ */ e.createElement(he.Provider, { value: { config: a, updateConfig: d, loading: T, data: a.data, setParentConfig: _, isDashboard: b } }, I !== "gradient" && /* @__PURE__ */ e.createElement(
    ne.VisualizationWrapper,
    {
      ref: Z,
      config: a,
      isEditor: u,
      showEditorPanel: a == null ? void 0 : a.showEditorPanel
    },
    h
  ), I === "gradient" && /* @__PURE__ */ e.createElement(
    ne.VisualizationWrapper,
    {
      ref: Z,
      config: a,
      isEditor: u,
      showEditorPanel: a == null ? void 0 : a.showEditorPanel
    },
    u && /* @__PURE__ */ e.createElement(ge, null),
    /* @__PURE__ */ e.createElement(ne.Responsive, { isEditor: u }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(Error, null), (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e.createElement(Confirm, null), /* @__PURE__ */ e.createElement(Qe, { label: a.title, value: x() }))
  ));
}, ye = "Max", ve = "Count", Ne = "Mean (Average)", Te = "Median", Ae = "Min", Ce = "Mode", me = "Range", De = "Sum", Ke = [
  ve,
  ye,
  Ne,
  Te,
  Ae,
  Ce,
  me,
  De
], et = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message",
  gradient: "Gradient"
}, _e = "Left", Se = "Right", xe = "Top", Fe = "Bottom", tt = [_e, Se, xe, Fe], at = "<", nt = ">", rt = "<=", lt = ">=", ot = "=", it = "≠", be = [
  at,
  nt,
  rt,
  lt,
  ot,
  it
];
export {
  yt as C
};
