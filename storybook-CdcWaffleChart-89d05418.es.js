import { r as f, R as e } from "./storybook-index-45401197.es.js";
import { T as De, H as Z } from "./storybook-index-3b47b3f7.es.js";
import { i as Ae, g as xe } from "./storybook-getViewport-513ec896.es.js";
import { f as ze } from "./storybook-fetchRemoteData-1d0a5295.es.js";
import { E as Ee, L as Fe } from "./storybook-viewports-5c5d7af1.es.js";
import { A as j } from "./storybook-Accordion-2501c7d9.es.js";
import { B as Oe } from "./storybook-Button-63da743c.es.js";
import { a as ae } from "./storybook-Icon-4f5978ba.es.js";
import { T as R } from "./storybook-Tooltip-4102bd69.es.js";
import { I as b, a as L } from "./storybook-editor-57986c01.es.js";
import { I as D } from "./storybook-InputSelect-20478396.es.js";
import { u as Re } from "./storybook-updateFieldFactory-c006040a.es.js";
import { L as le, c as Pe, p as ke, u as Me } from "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import { B as pe, C as Ie, c as Le } from "./storybook-linear-bc5fb9aa.es.js";
import { G as fe } from "./storybook-linear-ef79b404.es.js";
const he = f.createContext({}), Ve = (l) => /* @__PURE__ */ f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...l }, /* @__PURE__ */ f.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), We = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
f.memo(({ label: l, value: t, fieldName: v, section: y = null, subsection: A = null, tooltip: P, updateField: g, ...S }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: v,
    checked: t,
    onChange: () => {
      g(y, A, v, !t);
    },
    ...S
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, l), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, P)));
const Ue = f.memo((l) => {
  const { config: t, updateConfig: v, loading: y, data: A, setParentConfig: P, isDashboard: g } = f.useContext(he), { showConfigConfirm: S } = l, [p, V] = f.useState(!0), z = (o) => o ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, n = Re(t, v, !0);
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
  }, r = ["Waffle", "Gauge"], c = /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(j.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(D, { value: t.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: r, className: "cove-input" }), t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(D, { value: t.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(b, { value: t.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: n }), /* @__PURE__ */ e.createElement(
    b,
    {
      type: "textarea",
      value: t.content,
      fieldName: "content",
      label: "Message",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(ae, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    b,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(ae, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(j.Section, { icon: !t.dataColumn || !t.dataFunction ? /* @__PURE__ */ e.createElement(Ve, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(D, { style: z(!t.dataColumn), value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: n, initial: "Select", options: T(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(D, { style: z(!t.dataFunction), value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: n, initial: "Select", options: ve, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { value: t.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: n, initial: "Select", options: T(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { value: t.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: n, initial: "Select", options: Ye, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(b, { value: t.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: n, className: t.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), t.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(L, { size: "small", value: t.customDenom, fieldName: "customDenom", updateField: n })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !t.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(b, { value: t.dataDenom, fieldName: "dataDenom", updateField: n })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), t.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(D, { value: t.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: n, initial: "Select", options: T() }), /* @__PURE__ */ e.createElement(D, { value: t.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: n, initial: "Select", options: ve }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(b, { value: t.prefix, fieldName: "prefix", label: "Prefix", updateField: n })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(b, { value: t.suffix, fieldName: "suffix", label: "Suffix", updateField: n })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(b, { type: "number", value: t.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: n })))), t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(b, { inline: !0, size: "small", value: t.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: n }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", value: t.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: n }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", label: "Show Denominator", value: t.showDenominator, fieldName: "showDenominator", updateField: n }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(ae, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((o, u) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: u }, /* @__PURE__ */ e.createElement(
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
  ))))), /* @__PURE__ */ e.createElement(Oe, { onClick: M, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(j.Section, { title: "Visual" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(D, { value: t.shape, fieldName: "shape", label: "Shape", updateField: n, options: ["circle", "square", "person"], className: "cove-input" }), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(b, { type: "number", value: t.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: n })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(b, { type: "number", value: t.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: n }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(D, { value: t.orientation, fieldName: "orientation", label: "Layout", updateField: n, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(b, { type: "number", value: t.fontSize, fieldName: "fontSize", updateField: n })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(D, { value: t.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: n, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, We.map((o) => /* @__PURE__ */ e.createElement(
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
  return y ? null : /* @__PURE__ */ e.createElement(Ee, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(le.Sidebar, { displayPanel: p, onBackClick: k, isDashboard: g, title: "Configure Waffle Chart", showEditorPanel: p }, c), l.children));
}), J = {
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
  const {
    title: P,
    theme: g,
    shape: S,
    nodeWidth: p,
    nodeSpacer: V,
    prefix: z,
    suffix: n,
    subtext: k,
    content: B,
    orientation: M,
    filters: H,
    dataColumn: F,
    dataFunction: T,
    dataConditionalColumn: h,
    dataConditionalOperator: r,
    dataConditionalComparate: c,
    customDenom: o,
    dataDenom: u,
    dataDenomColumn: d,
    dataDenomFunction: E,
    roundToPlace: q
  } = l, Ne = l.visual.colors[l.theme];
  let ue = l.fontSize ? { fontSize: l.fontSize + "px" } : null;
  const Ce = f.useCallback(() => {
    if (!F || !T)
      return "";
    const O = (a) => {
      if (Array.isArray(a) && a.length > 0) {
        const m = a.reduce((w, I) => w + I);
        return i(m);
      }
    }, C = (a) => {
      const m = a.length > 1 ? a.reduce((w, I) => w + I) / a.length : a[0];
      return i(m);
    }, W = (a) => {
      let m = {}, w = -1 / 0;
      for (let _ = 0; _ < a.length; _++)
        m[a[_]] ? m[a[_]] += 1 : m[a[_]] = 1, m[a[_]] > w && (w = m[a[_]]);
      let I = [];
      for (let _ in m)
        m[_] === w && I.push(_);
      return I;
    }, U = (a) => {
      const m = Math.floor(a.length / 2), w = [...a].sort((_, we) => _ - we), I = a.length % 2 !== 0 ? w[m] : (w[m - 1] + w[m]) / 2;
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
    const Q = N.length > 0 ? N.map((a) => a[F]) : s.map((a) => a[F]), X = s.map((a) => a[d]);
    let x = Q.filter((a) => {
      let m = !1;
      return (Number(a) || Number.isFinite(Number(a))) && (m = !0), m;
    }).map(Number), G = X.filter((a) => {
      let m = !1;
      return (Number(a) || Number.isFinite(Number(a))) && (m = !0), m;
    }).map(Number), te = "";
    te = {
      [oe]: String(x.length),
      [me]: String(O(x)),
      [re]: String(C(x)),
      [ie]: U(x).toString(),
      [ne]: Math.max(...x).toString(),
      [ce]: Math.min(...x).toString(),
      [se]: W(x).join(", ")
    }[T];
    let Y = null;
    const Te = {
      [oe]: String(G.length),
      [me]: String(O(G)),
      [re]: String(C(G)),
      [ie]: U(G).toString(),
      [ne]: Math.max(...G).toString(),
      [ce]: Math.min(...G).toString(),
      [se]: W(G).join(", ")
    };
    return o && d && E ? Y = Te[E] : Y = u > 0 ? u : 100, [
      i(te / Y * 100),
      Y,
      i(te)
    ];
  }, [
    F,
    T,
    l.data,
    H,
    h,
    r,
    c,
    o,
    d,
    E,
    q,
    u
  ]), [$, K, de] = Ce(), ge = f.useCallback(() => {
    let O = [], C = parseInt(p, 10), W = parseInt(V, 10);
    const U = (i, s, N, Q, X) => {
      let x = s === "x" ? N % 10 : s === "y" ? Math.floor(N / 10) : null;
      return i === "circle" ? x * (Q + X) + Q / 2 : x * (Q + X);
    };
    for (let i = 0; i < 100; i++) {
      let s = {
        shape: S,
        x: U(S, "x", i, C, W),
        y: U(S, "y", i, C, W),
        color: l.visual.colors[g],
        opacity: i + 1 > 100 - Math.round($) ? 1 : 0.35
      };
      O.push(s);
    }
    return O.map(
      (i, s) => i.shape === "square" ? /* @__PURE__ */ e.createElement(
        pe,
        {
          className: "cdc-waffle-chart__node",
          style: { transitionDelay: `${0.1 * s}ms` },
          x: i.x,
          y: i.y,
          width: C,
          height: C,
          fill: i.color,
          fillOpacity: i.opacity,
          key: s
        }
      ) : i.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: {
            transform: `translateX(${i.x + C / 4}px) translateY(${i.y}px) scale(${C / 20})`
          },
          fill: i.color,
          fillOpacity: i.opacity,
          key: s,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,\r
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,\r
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(
        Ie,
        {
          className: "cdc-waffle-chart__node",
          style: { transitionDelay: `${0.1 * s}ms` },
          cx: i.x,
          cy: i.y,
          r: C / 2,
          fill: i.color,
          fillOpacity: i.opacity,
          key: s
        }
      )
    );
  }, [g, $, S, p, V]), ee = f.useCallback(() => p * 10 + V * 9, [p, V]), { innerContainerClasses: Ze, contentClasses: _e } = Me(l), be = Le({
    domain: [0, K],
    range: [0, l.gauge.width]
  }), ye = ({ config: O, updateConfig: C }) => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, O.runtime.editorErrorMessage))), Se = ({ updateConfig: O, config: C }) => {
    const W = (U) => {
      U.preventDefault();
      let i = { ...C };
      delete i.newViz, O(i);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: W }, "I'm Done")));
  };
  return /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, /* @__PURE__ */ e.createElement(De, { title: P, config: l, classes: ["chart-title", `${l.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: _e.join(" ") }, !l.newViz && l.runtime && l.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(ye, { updateConfig: A, config: l }), l.newViz && y && /* @__PURE__ */ e.createElement(Se, { updateConfig: A, config: l }), /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, l.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${l.overallFontSize ? " font-" + l.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: ue }, z || " ", l.showPercent ? $ : de, n ? n + " " : " ", " ", l.valueDescription, " ", l.showDenominator && K ? K : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Z(B)), /* @__PURE__ */ e.createElement("svg", { height: l.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(fe, null, /* @__PURE__ */ e.createElement(
    "foreignObject",
    {
      style: { border: "1px solid black" },
      x: 0,
      y: 0,
      width: l.gauge.width,
      height: l.gauge.height,
      fill: "#fff"
    }
  ), /* @__PURE__ */ e.createElement(pe, { x: 0, y: 0, width: be(de), height: l.gauge.height, fill: Ne }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Z(k)))), l.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `cove-waffle-chart${M === "vertical" ? " cove-waffle-chart--verical" : ""}${l.overallFontSize ? " font-" + l.overallFontSize : ""}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: ee() } }, /* @__PURE__ */ e.createElement("svg", { width: ee(), height: ee() }, /* @__PURE__ */ e.createElement(fe, null, ge()))),
    ($ || B) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, $ && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: ue }, z || null, $, n || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Z(B)), k && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Z(k)))
  ))), v && v);
}, ft = ({
  configUrl: l,
  config: t,
  isDashboard: v = !1,
  isEditor: y = !1,
  setConfig: A
}) => {
  const [P, g] = f.useReducer(Ge, {
    config: t ?? J,
    loading: !0,
    preview: !1,
    viewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }), { loading: S, config: p, viewport: V, coveLoadedHasRan: z, container: n } = P, [k, B] = f.useState(!1), M = (r) => {
    Object.keys(J).forEach((c) => {
      r[c] && typeof r[c] == "object" && !Array.isArray(r[c]) && (r[c] = { ...J[c], ...r[c] });
    }), r.runtime = {}, r.runtime.uniqueId = Date.now(), r.runtime.editorErrorMessage = "", g({ type: "SET_CONFIG", payload: r });
  }, H = f.useCallback(async () => {
    let r = t || await (await fetch(l)).json(), c = r.data ?? {};
    r.dataUrl && (c = await ze(r.dataUrl)), r.data = c;
    const o = { ...Pe(r) };
    M({ ...J, ...o }), g({ type: "SET_LOADING", payload: !1 });
  }, []), F = new Ae((r) => {
    for (let c of r) {
      let o = xe(c.contentRect.width * 2);
      g({ type: "SET_VIEWPORT", payload: o });
    }
  }), T = f.useCallback((r) => {
    r !== null && F.observe(r), g({ type: "SET_CONTAINER", payload: r });
  }, []);
  f.useEffect(() => {
    H().catch((r) => console.log(r));
  }, []), f.useEffect(() => {
    p && !z && n && (ke("cove_loaded", { config: p }), g({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [p, n]), f.useEffect(() => {
    t != null && t.dataUrl || M({ ...J, ...t });
  }, [t == null ? void 0 : t.data]);
  let h = /* @__PURE__ */ e.createElement(Fe, null);
  if (S === !1) {
    let r = /* @__PURE__ */ e.createElement(le.Responsive, { isEditor: y }, /* @__PURE__ */ e.createElement(
      Be,
      {
        config: p,
        isEditor: y,
        showConfigConfirm: k,
        updateConfig: M
      }
    ));
    h = /* @__PURE__ */ e.createElement(e.Fragment, null, y && /* @__PURE__ */ e.createElement(Ue, { showConfigConfirm: k }, r), !y && r);
  }
  return /* @__PURE__ */ e.createElement(Ee, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement(
    he.Provider,
    {
      value: { config: p, updateConfig: M, loading: S, data: p.data, setParentConfig: A, isDashboard: v, outerContainerRef: T }
    },
    /* @__PURE__ */ e.createElement(
      le.VisualizationWrapper,
      {
        config: p,
        isEditor: y,
        ref: T,
        showEditorPanel: p == null ? void 0 : p.showEditorPanel
      },
      h
    )
  ));
}, ne = "Max", oe = "Count", re = "Mean (Average)", ie = "Median", ce = "Min", se = "Mode", me = "Sum", ve = [
  oe,
  ne,
  re,
  ie,
  ce,
  se,
  me
], He = "<", $e = ">", qe = "<=", Qe = ">=", Je = "=", Xe = "≠", Ye = [
  He,
  $e,
  qe,
  Qe,
  Je,
  Xe
];
export {
  ft as C
};
