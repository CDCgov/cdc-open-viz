import { r as f, R as e } from "./storybook-index-45401197.es.js";
import { T as De, H as Y } from "./storybook-index-e5bf02db.es.js";
import { a as Ae, g as xe } from "./storybook-isSolr-cb863e7a.es.js";
import { f as ze } from "./storybook-fetchRemoteData-9428020c.es.js";
import { E as Ee, L as Fe } from "./storybook-Loading-f180d060.es.js";
import { A as Z } from "./storybook-Accordion-f47153d9.es.js";
import { B as Oe } from "./storybook-Button-d74e310e.es.js";
import { a as ae } from "./storybook-Icon-73ec66ec.es.js";
import { T as R } from "./storybook-Tooltip-4102bd69.es.js";
import { I as _, a as L } from "./storybook-editor-dff456fd.es.js";
import { I as D } from "./storybook-InputSelect-20478396.es.js";
import { u as Re } from "./storybook-updateFieldFactory-c006040a.es.js";
import { L as le, c as Pe, p as ke, u as Me } from "./storybook-coveUpdateWorker-2249800a.es.js";
import { B as pe, C as Ie, c as Le } from "./storybook-Circle-f595886d.es.js";
import { G as fe } from "./storybook-Group-eff0b1b9.es.js";
const he = f.createContext({}), Ve = (l) => /* @__PURE__ */ f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...l }, /* @__PURE__ */ f.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), We = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
f.memo(({ label: l, value: t, fieldName: v, section: y = null, subsection: A = null, tooltip: P, updateField: C, ...S }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: v,
    checked: t,
    onChange: () => {
      C(y, A, v, !t);
    },
    ...S
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, l), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, P)));
const Ue = f.memo((l) => {
  const { config: t, updateConfig: v, loading: y, data: A, setParentConfig: P, isDashboard: C } = f.useContext(he), { showConfigConfirm: S } = l, [p, V] = f.useState(!0), z = (o) => o ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, n = Re(t, v, !0);
  f.useEffect(() => {
    if (P) {
      const o = B();
      P(o);
    }
  }, [t]), f.useEffect(() => {
    if (!S) {
      let o = { ...t };
      delete o.newViz, v(o);
    }
  }, []), f.useEffect(() => {
    let o = ["<", ">", "<=", ">="];
    t.dataConditionalComparate !== "" ? o.indexOf(t.dataConditionalOperator) > -1 && isNaN(t.dataConditionalComparate) ? v({ ...t, invalidComparate: !0 }) : t.invalidComparate && v({ ...t, invalidComparate: !1 }) : v({ ...t, invalidComparate: !1 });
  }, [t.dataConditionalOperator, t.dataConditionalComparate]);
  const k = () => {
    V(!p), v({
      ...t,
      showEditorPanel: !p
    });
  }, B = () => {
    let o = JSON.parse(JSON.stringify(t));
    return delete o.newViz, delete o.runtime, o;
  }, M = () => {
    let o = t.filters ? [...t.filters] : [];
    o.push({ values: [] }), v({ ...t, filters: o });
  }, H = (o) => {
    let u = [...t.filters];
    u.splice(o, 1), v({ ...t, filters: u });
  }, F = (o, u, d) => {
    let E = [...t.filters];
    E[u][o] = d, v({ ...t, filters: E });
  }, T = (o = !0) => {
    let u = {};
    return A.map((d) => Object.keys(d).forEach((E) => u[E] = !0)), Object.keys(u);
  }, h = (o) => {
    let u = [];
    const d = t.filters[o].columnName;
    return A && d && (A.forEach(function(E) {
      E[d] !== void 0 && u.indexOf(E[d]) === -1 && u.push(E[d]);
    }), u.sort()), u;
  }, r = ["Waffle", "Gauge"], c = /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(D, { value: t.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: r, className: "cove-input" }), t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(D, { value: t.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(_, { value: t.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: n }), /* @__PURE__ */ e.createElement(
    _,
    {
      type: "textarea",
      value: t.content,
      fieldName: "content",
      label: "Message",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(ae, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    _,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(ae, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(Z.Section, { icon: !t.dataColumn || !t.dataFunction ? /* @__PURE__ */ e.createElement(Ve, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(D, { style: z(!t.dataColumn), value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: n, initial: "Select", options: T(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(D, { style: z(!t.dataFunction), value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: n, initial: "Select", options: ve, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { value: t.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: n, initial: "Select", options: T(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { value: t.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: n, initial: "Select", options: Xe, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { value: t.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: n, className: t.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), t.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(L, { size: "small", value: t.customDenom, fieldName: "customDenom", updateField: n })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !t.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { value: t.dataDenom, fieldName: "dataDenom", updateField: n })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), t.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(D, { value: t.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: n, initial: "Select", options: T() }), /* @__PURE__ */ e.createElement(D, { value: t.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: n, initial: "Select", options: ve }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(_, { value: t.prefix, fieldName: "prefix", label: "Prefix", updateField: n })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(_, { value: t.suffix, fieldName: "suffix", label: "Suffix", updateField: n })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(_, { type: "number", value: t.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: n })))), t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(_, { inline: !0, size: "small", value: t.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: n }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", value: t.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: n }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", label: "Show Denominator", value: t.showDenominator, fieldName: "showDenominator", updateField: n }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(ae, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((o, u) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: u }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        H(u);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnName,
      onChange: (d) => {
        F("columnName", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    T().map((d, E) => /* @__PURE__ */ e.createElement("option", { value: d, key: E }, d))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnValue,
      onChange: (d) => {
        F("columnValue", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    h(u).map((d, E) => /* @__PURE__ */ e.createElement("option", { value: d, key: E }, d))
  ))))), /* @__PURE__ */ e.createElement(Oe, { onClick: M, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(Z.Section, { title: "Visual" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(D, { value: t.shape, fieldName: "shape", label: "Shape", updateField: n, options: ["circle", "square", "person"], className: "cove-input" }), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { type: "number", value: t.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: n })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { type: "number", value: t.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: n }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(D, { value: t.orientation, fieldName: "orientation", label: "Layout", updateField: n, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { type: "number", value: t.fontSize, fieldName: "fontSize", updateField: n })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(D, { value: t.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: n, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, We.map((o) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: o,
      key: o,
      onClick: () => {
        v({ ...t, theme: o });
      },
      className: t.theme === o ? "selected " + o : o
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", value: t.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: n }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", value: t.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: n }), /* @__PURE__ */ e.createElement(L, { size: "small", value: t.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: n }), /* @__PURE__ */ e.createElement(L, { size: "small", value: t.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: n }), /* @__PURE__ */ e.createElement(L, { size: "small", value: t.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: n }))));
  return y ? null : /* @__PURE__ */ e.createElement(Ee, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(le.Sidebar, { displayPanel: p, onBackClick: k, isDashboard: C, title: "Configure Waffle Chart", showEditorPanel: p }, c), l.children));
}), j = {
  title: "Chart Title",
  visualizationType: "Waffle",
  visualizationSubType: "linear",
  showPercent: !0,
  showDenominator: !0,
  valueDescription: "out of",
  content: "",
  subtext: "",
  orientation: "horizontal",
  data: "",
  filters: [],
  fontSize: "",
  overallFontSize: "medium",
  dataColumn: "",
  dataFunction: "",
  dataConditionalColumn: "",
  dataConditionalOperator: "",
  dataConditionalComparate: "",
  invalidComparate: !1,
  customDenom: !1,
  dataDenom: "100",
  dataDenomColumn: "",
  dataDenomFunction: "",
  suffix: "%",
  roundToPlace: "0",
  shape: "circle",
  nodeWidth: "10",
  nodeSpacer: "2",
  theme: "theme-blue",
  type: "waffle-chart",
  gauge: {
    height: 35,
    width: "100%"
  },
  visual: {
    border: !0,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1,
    colors: {
      "theme-blue": "#005eaa",
      "theme-purple": "#712177",
      "theme-brown": "#705043",
      "theme-teal": "#00695c",
      "theme-pink": "#af4448",
      "theme-orange": "#bb4d00",
      "theme-slate": "#29434e",
      "theme-indigo": "#26418f",
      "theme-cyan": "#006778",
      "theme-green": "#4b830d",
      "theme-amber": "#fbab18"
    }
  }
}, Ge = (l, t) => {
  switch (t.type) {
    case "SET_CONFIG":
      return { ...l, config: t.payload };
    case "SET_LOADING":
      return { ...l, loading: t.payload };
    case "SET_VIEWPORT":
      return { ...l, viewport: t.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...l, coveLoadedHasRan: t.payload };
    case "SET_CONTAINER":
      return { ...l, container: t.payload };
  }
};
const Be = ({ config: l, isEditor: t, link: v = "", showConfigConfirm: y, updateConfig: A }) => {
  const { title: P, theme: C, shape: S, nodeWidth: p, nodeSpacer: V, prefix: z, suffix: n, subtext: k, content: B, orientation: M, filters: H, dataColumn: F, dataFunction: T, dataConditionalColumn: h, dataConditionalOperator: r, dataConditionalComparate: c, customDenom: o, dataDenom: u, dataDenomColumn: d, dataDenomFunction: E, roundToPlace: q } = l, Ne = l.visual.colors[l.theme];
  let ue = l.fontSize ? { fontSize: l.fontSize + "px" } : null;
  const ge = f.useCallback(() => {
    if (!F || !T)
      return "";
    const O = (a) => {
      if (Array.isArray(a) && a.length > 0) {
        const m = a.reduce((w, I) => w + I);
        return i(m);
      }
    }, g = (a) => {
      const m = a.length > 1 ? a.reduce((w, I) => w + I) / a.length : a[0];
      return i(m);
    }, W = (a) => {
      let m = {}, w = -1 / 0;
      for (let b = 0; b < a.length; b++)
        m[a[b]] ? m[a[b]] += 1 : m[a[b]] = 1, m[a[b]] > w && (w = m[a[b]]);
      let I = [];
      for (let b in m)
        m[b] === w && I.push(b);
      return I;
    }, U = (a) => {
      const m = Math.floor(a.length / 2), w = [...a].sort((b, we) => b - we), I = a.length % 2 !== 0 ? w[m] : (w[m - 1] + w[m]) / 2;
      return i(I);
    }, i = (a) => (q !== "" && !isNaN(q) && Number(q) > -1 && (a = Number(a).toFixed(Number(q))), a);
    let s = l.data;
    H.map((a) => {
      if (a.columnName && a.columnValue)
        s = s.filter(function(m) {
          return m[a.columnName] === a.columnValue;
        });
      else
        return !1;
    });
    let N = [];
    if (h !== "" && r !== "" && c !== "")
      switch (r) {
        case "<":
          N = s.filter((a) => a[h] < c);
          break;
        case ">":
          N = s.filter((a) => a[h] > c);
          break;
        case "<=":
          N = s.filter((a) => a[h] <= c);
          break;
        case ">=":
          N = s.filter((a) => a[h] >= c);
          break;
        case "=":
          isNaN(Number(c)) ? N = s.filter((a) => String(a[h]) === c) : N = s.filter((a) => a[h] === c);
          break;
        case "≠":
          isNaN(Number(c)) ? N = s.filter((a) => String(a[h]) !== c) : N = s.filter((a) => a[h] !== c);
          break;
        default:
          N = [];
      }
    const Q = N.length > 0 ? N.map((a) => a[F]) : s.map((a) => a[F]), J = s.map((a) => a[d]);
    let x = Q.filter((a) => {
      let m = !1;
      return (Number(a) || Number.isFinite(Number(a))) && (m = !0), m;
    }).map(Number), G = J.filter((a) => {
      let m = !1;
      return (Number(a) || Number.isFinite(Number(a))) && (m = !0), m;
    }).map(Number), te = "";
    te = {
      [oe]: String(x.length),
      [me]: String(O(x)),
      [re]: String(g(x)),
      [ie]: U(x).toString(),
      [ne]: Math.max(...x).toString(),
      [ce]: Math.min(...x).toString(),
      [se]: W(x).join(", ")
    }[T];
    let X = null;
    const Te = {
      [oe]: String(G.length),
      [me]: String(O(G)),
      [re]: String(g(G)),
      [ie]: U(G).toString(),
      [ne]: Math.max(...G).toString(),
      [ce]: Math.min(...G).toString(),
      [se]: W(G).join(", ")
    };
    return o && d && E ? X = Te[E] : X = u > 0 ? u : 100, [i(te / X * 100), X, i(te)];
  }, [F, T, l.data, H, h, r, c, o, d, E, q, u]), [$, K, de] = ge(), Ce = f.useCallback(() => {
    let O = [], g = parseInt(p, 10), W = parseInt(V, 10);
    const U = (i, s, N, Q, J) => {
      let x = s === "x" ? N % 10 : s === "y" ? Math.floor(N / 10) : null;
      return i === "circle" ? x * (Q + J) + Q / 2 : x * (Q + J);
    };
    for (let i = 0; i < 100; i++) {
      let s = {
        shape: S,
        x: U(S, "x", i, g, W),
        y: U(S, "y", i, g, W),
        color: l.visual.colors[C],
        opacity: i + 1 > 100 - Math.round($) ? 1 : 0.35
      };
      O.push(s);
    }
    return O.map(
      (i, s) => i.shape === "square" ? /* @__PURE__ */ e.createElement(pe, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * s}ms` }, x: i.x, y: i.y, width: g, height: g, fill: i.color, fillOpacity: i.opacity, key: s }) : i.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: { transform: `translateX(${i.x + g / 4}px) translateY(${i.y}px) scale(${g / 20})` },
          fill: i.color,
          fillOpacity: i.opacity,
          key: s,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,\r
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,\r
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(Ie, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * s}ms` }, cx: i.x, cy: i.y, r: g / 2, fill: i.color, fillOpacity: i.opacity, key: s })
    );
  }, [C, $, S, p, V]), ee = f.useCallback(() => p * 10 + V * 9, [p, V]), { innerContainerClasses: Ye, contentClasses: be } = Me(l), _e = Le({
    domain: [0, K],
    range: [0, l.gauge.width]
  }), ye = ({ config: O, updateConfig: g }) => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, O.runtime.editorErrorMessage))), Se = ({ updateConfig: O, config: g }) => {
    const W = (U) => {
      U.preventDefault();
      let i = { ...g };
      delete i.newViz, O(i);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: W }, "I'm Done")));
  };
  return /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, /* @__PURE__ */ e.createElement(De, { title: P, config: l, classes: ["chart-title", `${l.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: be.join(" ") }, !l.newViz && l.runtime && l.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(ye, { updateConfig: A, config: l }), l.newViz && y && /* @__PURE__ */ e.createElement(Se, { updateConfig: A, config: l }), /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, l.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${l.overallFontSize ? " font-" + l.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: ue }, z || " ", l.showPercent ? $ : de, n ? n + " " : " ", " ", l.valueDescription, " ", l.showDenominator && K ? K : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Y(B)), /* @__PURE__ */ e.createElement("svg", { height: l.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(fe, null, /* @__PURE__ */ e.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: l.gauge.width, height: l.gauge.height, fill: "#fff" }), /* @__PURE__ */ e.createElement(pe, { x: 0, y: 0, width: _e(de), height: l.gauge.height, fill: Ne }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Y(k)))), l.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-waffle-chart${M === "vertical" ? " cove-waffle-chart--verical" : ""}${l.overallFontSize ? " font-" + l.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: ee() } }, /* @__PURE__ */ e.createElement("svg", { width: ee(), height: ee() }, /* @__PURE__ */ e.createElement(fe, null, Ce()))), ($ || B) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, $ && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: ue }, z || null, $, n || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Y(B)), k && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Y(k)))))), v && v);
}, ft = ({ configUrl: l, config: t, isDashboard: v = !1, isEditor: y = !1, setConfig: A }) => {
  const [P, C] = f.useReducer(Ge, { config: t ?? j, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: S, config: p, viewport: V, coveLoadedHasRan: z, container: n } = P, [k, B] = f.useState(!1), M = (r) => {
    Object.keys(j).forEach((c) => {
      r[c] && typeof r[c] == "object" && !Array.isArray(r[c]) && (r[c] = { ...j[c], ...r[c] });
    }), r.runtime = {}, r.runtime.uniqueId = Date.now(), r.runtime.editorErrorMessage = "", C({ type: "SET_CONFIG", payload: r });
  }, H = f.useCallback(async () => {
    let r = t || await (await fetch(l)).json(), c = r.data ?? {};
    r.dataUrl && (c = await ze(r.dataUrl)), r.data = c;
    const o = { ...Pe(r) };
    M({ ...j, ...o }), C({ type: "SET_LOADING", payload: !1 });
  }, []), F = new Ae((r) => {
    for (let c of r) {
      let o = xe(c.contentRect.width * 2);
      C({ type: "SET_VIEWPORT", payload: o });
    }
  }), T = f.useCallback((r) => {
    r !== null && F.observe(r), C({ type: "SET_CONTAINER", payload: r });
  }, []);
  f.useEffect(() => {
    H().catch((r) => console.log(r));
  }, []), f.useEffect(() => {
    p && !z && n && (ke("cove_loaded", { config: p }), C({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [p, n]), f.useEffect(() => {
    t.dataUrl || M({ ...j, ...t });
  }, [t == null ? void 0 : t.data]);
  let h = /* @__PURE__ */ e.createElement(Fe, null);
  if (S === !1) {
    let r = /* @__PURE__ */ e.createElement(le.Responsive, { isEditor: y }, /* @__PURE__ */ e.createElement(Be, { config: p, isEditor: y, showConfigConfirm: k, updateConfig: M }));
    h = /* @__PURE__ */ e.createElement(e.Fragment, null, y && /* @__PURE__ */ e.createElement(Ue, { showConfigConfirm: k }, r), !y && r);
  }
  return /* @__PURE__ */ e.createElement(Ee, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement(he.Provider, { value: { config: p, updateConfig: M, loading: S, data: p.data, setParentConfig: A, isDashboard: v, outerContainerRef: T } }, /* @__PURE__ */ e.createElement(le.VisualizationWrapper, { config: p, isEditor: y, ref: T, showEditorPanel: p == null ? void 0 : p.showEditorPanel }, h)));
}, ne = "Max", oe = "Count", re = "Mean (Average)", ie = "Median", ce = "Min", se = "Mode", me = "Sum", ve = [oe, ne, re, ie, ce, se, me], He = "<", $e = ">", qe = "<=", Qe = ">=", je = "=", Je = "≠", Xe = [He, $e, qe, Qe, je, Je];
export {
  ft as C
};
