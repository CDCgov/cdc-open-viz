import { r as u, R as e } from "./storybook-e61d95ab.es.js";
import { T as ea, H as ne } from "./storybook-826feda6.es.js";
import { i as aa, g as ta } from "./storybook-a2b11335.es.js";
import { f as na } from "./storybook-03c45984.es.js";
import { E as Ve } from "./storybook-3ef3756f.es.js";
import { L as la } from "./storybook-dde0ecd5.es.js";
import { A as le } from "./storybook-73bd1479.es.js";
import { B as ra } from "./storybook-8d78bf52.es.js";
import { a as he } from "./storybook-6c0329fc.es.js";
import { T as U } from "./storybook-46a89ba7.es.js";
import { I as x } from "./storybook-462d9620.es.js";
import { I as F } from "./storybook-deb084b6.es.js";
import { P as re } from "./storybook-b8c9afe4.es.js";
import { S as oa, B as ye, C as sa, c as ia } from "./storybook-e28248b2.es.js";
import "./storybook-4ed993c7.es.js";
import { c as ca, p as ma, u as ua } from "./storybook-25f566e3.es.js";
import { G as we } from "./storybook-43478234.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-76833471.es.js";
import "./storybook-9c9b89fe.es.js";
import "./storybook-d3e946a2.es.js";
import "./storybook-7df1b381.es.js";
import "./storybook-bedc547d.es.js";
const qe = u.createContext({}), G = u.memo(
  ({
    label: t,
    size: a = "small",
    activeColor: d = null,
    activeCheckColor: w = null,
    section: _ = null,
    subsection: C = null,
    fieldName: g,
    updateField: E,
    value: p,
    i: A = null,
    min: $ = null,
    max: R = null,
    ...r
  }) => {
    const [N, O] = u.useState(p);
    let k = C ? `${_}-${C}-${g}` : `${_}-${C}-${g}`;
    return u.useEffect(() => {
      p !== void 0 && p !== N && O(p);
    }, [p]), u.useEffect(() => {
      p !== void 0 && p !== N && E && E(_, C, g, N, A);
    }, [N]), /* @__PURE__ */ e.createElement("div", { className: "input-group" }, t && /* @__PURE__ */ e.createElement("label", null, t), /* @__PURE__ */ e.createElement("div", { className: "cove-input__checkbox" + (a === "small" ? "--small" : a === "large" ? "--large" : "") + (N ? " active" : ""), onClick: () => O(!N) }, /* @__PURE__ */ e.createElement("div", { className: `cove-input__checkbox-box${d ? " custom-color" : ""}`, style: N && d ? { backgroundColor: d } : null }, /* @__PURE__ */ e.createElement(oa, { className: "cove-input__checkbox-check", style: { fill: w || "#025eaa" } })), /* @__PURE__ */ e.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: k, checked: N || !1, readOnly: !0 })));
  }
);
G.propTypes = {
  label: re.string,
  size: re.oneOf(["small", "medium", "large"]),
  activeColor: re.string,
  activeCheckColor: re.string
};
const da = (t) => /* @__PURE__ */ u.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...t }, /* @__PURE__ */ u.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), pa = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
u.memo(({ label: t, value: a, fieldName: d, section: w = null, subsection: _ = null, tooltip: C, updateField: g, ...E }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: d,
    checked: a,
    onChange: () => {
      g(w, _, d, !a);
    },
    ...E
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, C)));
const fa = u.memo((t) => {
  const { config: a, updateConfig: d, loading: w, data: _, setParentConfig: C, isDashboard: g } = u.useContext(qe), [E, p] = u.useState(!0), [A, $] = u.useState(!1), R = (l) => l ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, r = (l, s, i, v) => {
    if (l === null && s === null) {
      let ee = { ...a, [i]: v };
      i === "filterColumn" && (ee.filterValue = ""), d(ee);
      return;
    }
    const L = Array.isArray(a[l]);
    let W = L ? [...a[l], v] : { ...a[l], [i]: v };
    s !== null && (L ? (W = [...a[l]], W[s] = { ...W[s], [i]: v }) : typeof v == "string" ? W[s] = v : W = { ...a[l], [s]: { ...a[l][s], [i]: v } });
    let K = { ...a, [l]: W };
    d(K);
  };
  u.useEffect(() => {
    if (C) {
      const l = b();
      C(l);
    }
  }, [a]), u.useEffect(() => {
    if (!A) {
      let l = { ...a };
      delete l.newViz, d(l);
    }
  }, []), u.useEffect(() => {
    let l = ["<", ">", "<=", ">="];
    a.dataConditionalComparate !== "" ? l.indexOf(a.dataConditionalOperator) > -1 && isNaN(a.dataConditionalComparate) ? d({ ...a, invalidComparate: !0 }) : a.invalidComparate && d({ ...a, invalidComparate: !1 }) : d({ ...a, invalidComparate: !1 });
  }, [a.dataConditionalOperator, a.dataConditionalComparate]);
  const N = () => {
    p(!E);
  }, O = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, a.runtime.editorErrorMessage))), k = () => {
    const l = (s) => {
      s.preventDefault();
      let i = { ...a };
      delete i.newViz, d(i);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: l }, "I'm Done")));
  }, b = () => {
    let l = JSON.parse(JSON.stringify(a));
    return delete l.newViz, delete l.runtime, l;
  }, o = () => {
    let l = a.filters ? [...a.filters] : [];
    l.push({ values: [] }), d({ ...a, filters: l });
  }, c = (l) => {
    let s = [...a.filters];
    s.splice(l, 1), d({ ...a, filters: s });
  }, D = (l, s, i) => {
    let v = [...a.filters];
    v[s][l] = i, d({ ...a, filters: v });
  }, Y = (l = !0) => {
    let s = {};
    return _.map((i) => Object.keys(i).forEach((v) => s[v] = !0)), Object.keys(s);
  }, q = (l) => {
    let s = [];
    const i = a.filters[l].columnName;
    return _ && i && (_.forEach(function(v) {
      v[i] !== void 0 && s.indexOf(v[i]) === -1 && s.push(v[i]);
    }), s.sort()), s;
  }, Q = ["Waffle", "Gauge"], H = /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(le.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(F, { value: a.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: r, options: Q, className: "cove-input" }), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(F, { value: a.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: r, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(x, { value: a.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: r }), /* @__PURE__ */ e.createElement(
    x,
    {
      type: "textarea",
      value: a.content,
      fieldName: "content",
      label: "Message",
      updateField: r,
      tooltip: /* @__PURE__ */ e.createElement(U, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(U.Target, null, /* @__PURE__ */ e.createElement(he, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(U.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    x,
    {
      value: a.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: r,
      tooltip: /* @__PURE__ */ e.createElement(U, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(U.Target, null, /* @__PURE__ */ e.createElement(he, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(U.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(le.Section, { icon: !a.dataColumn || !a.dataFunction ? /* @__PURE__ */ e.createElement(da, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(F, { style: R(!a.dataColumn), value: a.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: r, initial: "Select", options: Y(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(F, { style: R(!a.dataFunction), value: a.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: r, initial: "Select", options: De, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(F, { value: a.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: r, initial: "Select", options: Y(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(F, { value: a.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: r, initial: "Select", options: ya, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { value: a.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: r, className: a.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), a.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(G, { size: "small", value: a.customDenom, fieldName: "customDenom", updateField: r })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !a.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { value: a.dataDenom, fieldName: "dataDenom", updateField: r })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), a.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(F, { value: a.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: r, initial: "Select", options: Y() }), /* @__PURE__ */ e.createElement(F, { value: a.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: r, initial: "Select", options: De }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(x, { value: a.prefix, fieldName: "prefix", label: "Prefix", updateField: r })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(x, { value: a.suffix, fieldName: "suffix", label: "Suffix", updateField: r })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: r })))), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(x, { inline: !0, size: "small", value: a.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: r }), /* @__PURE__ */ e.createElement(G, { inline: !0, size: "small", value: a.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: r }), /* @__PURE__ */ e.createElement(G, { inline: !0, size: "small", label: "Show Denominator", value: a.showDenominator, fieldName: "showDenominator", updateField: r }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(U, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(U.Target, null, /* @__PURE__ */ e.createElement(he, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(U.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), a.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, a.filters.map((l, s) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: s }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        c(s);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columnName,
      onChange: (i) => {
        D("columnName", s, i.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    Y().map((i, v) => /* @__PURE__ */ e.createElement("option", { value: i, key: v }, i))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columnValue,
      onChange: (i) => {
        D("columnValue", s, i.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    q(s).map((i, v) => /* @__PURE__ */ e.createElement("option", { value: i, key: v }, i))
  ))))), /* @__PURE__ */ e.createElement(ra, { onClick: o, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(le.Section, { title: "Visual" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(F, { value: a.shape, fieldName: "shape", label: "Shape", updateField: r, options: ["circle", "square", "person"], className: "cove-input" }), a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: r })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: r }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(F, { value: a.orientation, fieldName: "orientation", label: "Layout", updateField: r, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.fontSize, fieldName: "fontSize", updateField: r })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(F, { value: a.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: r, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, pa.map((l) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: l,
      key: l,
      onClick: () => {
        d({ ...a, theme: l });
      },
      className: a.theme === l ? "selected " + l : l
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(G, { inline: !0, size: "small", value: a.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: r }), /* @__PURE__ */ e.createElement(G, { inline: !0, size: "small", value: a.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: r }), /* @__PURE__ */ e.createElement(G, { size: "small", value: a.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: r }), /* @__PURE__ */ e.createElement(G, { size: "small", value: a.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: r }), /* @__PURE__ */ e.createElement(G, { size: "small", value: a.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: r }))));
  return w ? null : /* @__PURE__ */ e.createElement(Ve, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor" }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(O, null), a.newViz && A && /* @__PURE__ */ e.createElement(k, null), /* @__PURE__ */ e.createElement("button", { className: "cove-editor--toggle" + (E ? "" : " collapsed"), title: E ? "Collapse Editor" : "Expand Editor", onClick: N }), /* @__PURE__ */ e.createElement("section", { className: "cove-editor__panel" + (E ? "" : " hidden") }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor__panel-container" }, /* @__PURE__ */ e.createElement("h2", { className: "cove-editor__heading" }, "Configure Chart"), /* @__PURE__ */ e.createElement("section", { className: "cove-editor__content" }, H))), /* @__PURE__ */ e.createElement("div", { className: "cove-editor__content" }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor__content-wrap" }, t.children))));
}), Z = {
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
}, ha = (t, a) => {
  switch (a.type) {
    case "SET_CONFIG":
      return { ...t, config: a.payload };
    case "SET_LOADING":
      return { ...t, loading: a.payload };
    case "SET_VIEWPORT":
      return { ...t, viewport: a.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...t, coveLoadedHasRan: a.payload };
    case "SET_CONTAINER":
      return { ...t, container: a.payload };
  }
};
const va = ({ config: t, isEditor: a, link: d = "" }) => {
  const { title: w, theme: _, shape: C, nodeWidth: g, nodeSpacer: E, prefix: p, suffix: A, subtext: $, content: R, orientation: r, filters: N, dataColumn: O, dataFunction: k, dataConditionalColumn: b, dataConditionalOperator: o, dataConditionalComparate: c, customDenom: D, dataDenom: Y, dataDenomColumn: q, dataDenomFunction: Q, roundToPlace: H } = t, l = (I, S = !1) => {
    S && console.log("handleWaffleChartAriaLabels Testing On:", I);
    try {
      let P = "Waffle chart";
      return I.title && (P += ` with the title: ${I.title}`), P;
    } catch (P) {
      console.error(P.message);
    }
  }, s = t.visual.colors[t.theme];
  let i = t.fontSize ? { fontSize: t.fontSize + "px" } : null;
  const v = u.useCallback(() => {
    if (!O || !k)
      return "";
    const I = (n) => {
      if (Array.isArray(n) && n.length > 0) {
        const h = n.reduce((z, B) => z + B);
        return m(h);
      }
    }, S = (n) => {
      const h = n.length > 1 ? n.reduce((z, B) => z + B) / n.length : n[0];
      return m(h);
    }, P = (n) => {
      let h = {}, z = -1 / 0;
      for (let T = 0; T < n.length; T++)
        h[n[T]] ? h[n[T]] += 1 : h[n[T]] = 1, h[n[T]] > z && (z = h[n[T]]);
      let B = [];
      for (let T in h)
        h[T] === z && B.push(T);
      return B;
    }, J = (n) => {
      const h = Math.floor(n.length / 2), z = [...n].sort((T, Ke) => T - Ke), B = n.length % 2 !== 0 ? z[h] : (z[h - 1] + z[h]) / 2;
      return m(B);
    }, m = (n) => (H !== "" && !isNaN(H) && Number(H) > -1 && (n = Number(n).toFixed(Number(H))), n);
    let f = t.data;
    N.map((n) => {
      if (n.columnName && n.columnValue)
        f = f.filter(function(h) {
          return h[n.columnName] === n.columnValue;
        });
      else
        return !1;
    });
    let y = [];
    if (b !== "" && o !== "" && c !== "")
      switch (o) {
        case "<":
          y = f.filter((n) => n[b] < c);
          break;
        case ">":
          y = f.filter((n) => n[b] > c);
          break;
        case "<=":
          y = f.filter((n) => n[b] <= c);
          break;
        case ">=":
          y = f.filter((n) => n[b] >= c);
          break;
        case "=":
          isNaN(Number(c)) ? y = f.filter((n) => String(n[b]) === c) : y = f.filter((n) => n[b] === c);
          break;
        case "≠":
          isNaN(Number(c)) ? y = f.filter((n) => String(n[b]) !== c) : y = f.filter((n) => n[b] !== c);
          break;
        default:
          y = [];
      }
    const X = y.length > 0 ? y.map((n) => n[O]) : f.map((n) => n[O]), ae = f.map((n) => n[q]);
    let M = X.filter((n) => {
      let h = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (h = !0), h;
    }).map(Number), V = ae.filter((n) => {
      let h = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (h = !0), h;
    }).map(Number), fe = "";
    fe = {
      [ge]: String(M.length),
      [_e]: String(I(M)),
      [Ee]: String(S(M)),
      [Ce]: J(M).toString(),
      [ve]: Math.max(...M).toString(),
      [Ne]: Math.min(...M).toString(),
      [be]: P(M).join(", ")
    }[k];
    let te = null;
    const Ze = {
      [ge]: String(V.length),
      [_e]: String(I(V)),
      [Ee]: String(S(V)),
      [Ce]: J(V).toString(),
      [ve]: Math.max(...V).toString(),
      [Ne]: Math.min(...V).toString(),
      [be]: P(V).join(", ")
    };
    return D && q && Q ? te = Ze[Q] : te = Y > 0 ? Y : 100, [m(fe / te * 100), te, m(fe)];
  }, [O, k, t.data, N, b, o, c, D, q, Q, H, Y]), [L, W, K] = v(), ee = u.useCallback(() => {
    let I = [], S = parseInt(g, 10), P = parseInt(E, 10);
    const J = (m, f, y, X, ae) => {
      let M = f === "x" ? y % 10 : f === "y" ? Math.floor(y / 10) : null;
      return m === "circle" ? M * (X + ae) + X / 2 : M * (X + ae);
    };
    for (let m = 0; m < 100; m++) {
      let f = {
        shape: C,
        x: J(C, "x", m, S, P),
        y: J(C, "y", m, S, P),
        color: t.visual.colors[_],
        opacity: m + 1 > 100 - Math.round(L) ? 1 : 0.35
      };
      I.push(f);
    }
    return I.map(
      (m, f) => m.shape === "square" ? /* @__PURE__ */ e.createElement(ye, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * f}ms` }, x: m.x, y: m.y, width: S, height: S, fill: m.color, fillOpacity: m.opacity, key: f }) : m.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: { transform: `translateX(${m.x + S / 4}px) translateY(${m.y}px) scale(${S / 20})` },
          fill: m.color,
          fillOpacity: m.opacity,
          key: f,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(sa, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * f}ms` }, cx: m.x, cy: m.y, r: S / 2, fill: m.color, fillOpacity: m.opacity, key: f })
    );
  }, [_, L, C, g, E]), pe = u.useCallback(() => g * 10 + E * 9, [g, E]), { innerContainerClasses: Qe, contentClasses: Je } = ua(t), Xe = ia({
    domain: [0, W],
    range: [0, t.gauge.width]
  });
  return /* @__PURE__ */ e.createElement("div", { className: Qe.join(" ") }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(ea, { title: w, config: t, classes: ["chart-title", `${t.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: Je.join(" ") }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: i }, p || " ", t.showPercent ? L : K, A ? A + " " : " ", " ", t.valueDescription, " ", t.showDenominator && W ? W : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, ne(R)), /* @__PURE__ */ e.createElement("svg", { height: t.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(we, null, /* @__PURE__ */ e.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: t.gauge.width, height: t.gauge.height, fill: "#fff" }), /* @__PURE__ */ e.createElement(ye, { x: 0, y: 0, width: Xe(K), height: t.gauge.height, fill: s }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, ne($)))), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-waffle-chart${r === "vertical" ? " cove-waffle-chart--verical" : ""}${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: pe() } }, /* @__PURE__ */ e.createElement("svg", { width: pe(), height: pe(), role: "img", "aria-label": l(t), tabIndex: 0 }, /* @__PURE__ */ e.createElement(we, null, ee()))), (L || R) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, L && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: i }, p || null, L, A || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, ne(R)), $ && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, ne($)))))), d && d));
}, j = ({ configUrl: t, config: a, isDashboard: d = !1, isEditor: w = !1, setConfig: _ }) => {
  const [C, g] = u.useReducer(ha, { config: a ?? Z, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: E, config: p, viewport: A, coveLoadedHasRan: $, container: R } = C, r = (o) => {
    Object.keys(Z).forEach((c) => {
      o[c] && typeof o[c] == "object" && !Array.isArray(o[c]) && (o[c] = { ...Z[c], ...o[c] });
    }), o.runtime = {}, o.runtime.uniqueId = Date.now(), o.runtime.editorErrorMessage = "", g({ type: "SET_CONFIG", payload: o });
  }, N = u.useCallback(async () => {
    let o = a || await (await fetch(t)).json(), c = o.data ?? {};
    o.dataUrl && (c = await na(o.dataUrl)), o.data = c;
    const D = { ...await ca(o) };
    r({ ...Z, ...D }), g({ type: "SET_LOADING", payload: !1 });
  }, []), O = new aa((o) => {
    for (let c of o) {
      let D = ta(c.contentRect.width * 2);
      g({ type: "SET_VIEWPORT", payload: D });
    }
  }), k = u.useCallback((o) => {
    o !== null && O.observe(o), g({ type: "SET_CONTAINER", payload: o });
  }, []);
  u.useEffect(() => {
    N().catch((o) => console.log(o));
  }, []), u.useEffect(() => {
    p && !$ && R && (ma("cove_loaded", { config: p }), g({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [p, R]), u.useEffect(() => {
    N().catch((o) => console.log(o));
  }, []), a && u.useEffect(() => {
    a.dataUrl || r({ ...Z, ...a });
  }, [a.data]);
  let b = /* @__PURE__ */ e.createElement(la, null);
  if (E === !1) {
    let o = ["cove", "cdc-open-viz-module", "type-waffle-chart", A, p.theme, "font-" + p.overallFontSize];
    w && o.push("is-editor");
    let c = ["cove-component", "waffle-chart"], D = /* @__PURE__ */ e.createElement("div", { className: `${c.join(" ")}`, ref: k }, /* @__PURE__ */ e.createElement(va, { config: p, isEditor: w }));
    b = /* @__PURE__ */ e.createElement("div", { className: o.join(" ") }, w && /* @__PURE__ */ e.createElement(fa, null, D), !w && D);
  }
  return /* @__PURE__ */ e.createElement(Ve, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement(qe.Provider, { value: { config: p, updateConfig: r, loading: E, data: p.data, setParentConfig: _, isDashboard: d, outerContainerRef: k } }, b));
}, ve = "Max", ge = "Count", Ee = "Mean (Average)", Ce = "Median", Ne = "Min", be = "Mode", _e = "Sum", De = [ge, ve, Ee, Ce, Ne, be, _e], ga = "<", Ea = ">", Ca = "<=", Na = ">=", ba = "=", _a = "≠", ya = [ga, Ea, Ca, Na, ba, _a], qa = {
  title: "Components/Templates/WaffleChart",
  component: j
}, oe = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(j, { ...t }))
}, se = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(j, { ...t }))
}, ie = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(j, { ...t }))
}, ce = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(j, { ...t }))
}, me = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(j, { ...t }))
}, ue = {
  args: {
    config: {
      type: "waffle-chart",
      shape: "person",
      title: "Overdose Mortality Rates",
      content: "of overdoses resulted in death.",
      subtext: "This data is an example and does not reflect actual averages",
      orientation: "horizontal",
      data: [{
        "Resulted in Death": 250,
        "Number of Overdoses": 600,
        state: "Alabama",
        Year: "2010"
      }, {
        "Resulted in Death": 16,
        "Number of Overdoses": 80,
        state: "Alaska",
        Year: "2008"
      }, {
        "Resulted in Death": 19,
        "Number of Overdoses": 100,
        state: "Alaska",
        Year: "2010"
      }, {
        "Resulted in Death": 93,
        "Number of Overdoses": 400,
        state: "Alaska",
        Year: "2012"
      }, {
        "Resulted in Death": 82,
        "Number of Overdoses": 400,
        state: "Arizona",
        Year: "2010"
      }],
      filters: [],
      fontSize: null,
      overallFontSize: "medium",
      dataColumn: "Resulted in Death",
      dataFunction: "Sum",
      dataConditionalColumn: "",
      dataConditionalOperator: null,
      dataConditionalComparate: "",
      customDenom: !0,
      dataDenom: null,
      dataDenomColumn: "Number of Overdoses",
      dataDenomFunction: "Sum",
      prefix: "",
      suffix: "%",
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: "theme-blue",
      visualizationType: "Waffle",
      visualizationSubType: "",
      invalidComparate: !1,
      showDenominator: !1,
      showPercent: !0,
      valueDescription: "testing",
      visual: {
        border: !0,
        accent: !0,
        background: !0,
        hideBackgroundColor: !0,
        borderColorTheme: !0
      }
    }
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(j, { ...t }))
}, de = {
  args: {
    config: {
      type: "waffle-chart",
      shape: "person",
      title: "Overdose Mortality Rates",
      content: "of overdoses resulted in death.",
      subtext: "This data is an example and does not reflect actual averages",
      orientation: "horizontal",
      data: [{
        "Resulted in Death": 250,
        "Number of Overdoses": 600,
        state: "Alabama",
        Year: "2010"
      }, {
        "Resulted in Death": 16,
        "Number of Overdoses": 80,
        state: "Alaska",
        Year: "2008"
      }, {
        "Resulted in Death": 19,
        "Number of Overdoses": 100,
        state: "Alaska",
        Year: "2010"
      }, {
        "Resulted in Death": 93,
        "Number of Overdoses": 400,
        state: "Alaska",
        Year: "2012"
      }, {
        "Resulted in Death": 82,
        "Number of Overdoses": 400,
        state: "Arizona",
        Year: "2010"
      }],
      filters: [],
      fontSize: null,
      overallFontSize: "medium",
      dataColumn: "Resulted in Death",
      dataFunction: "Sum",
      dataConditionalColumn: "",
      dataConditionalOperator: null,
      dataConditionalComparate: "",
      customDenom: !0,
      dataDenom: null,
      dataDenomColumn: "Number of Overdoses",
      dataDenomFunction: "Sum",
      prefix: "",
      suffix: "%",
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: "theme-blue",
      visualizationType: "Gauge",
      visualizationSubType: "",
      invalidComparate: !1,
      showDenominator: !1,
      showPercent: !0,
      valueDescription: "testing",
      visual: {
        border: !0,
        accent: !0,
        background: !0,
        hideBackgroundColor: !0,
        borderColorTheme: !0
      }
    }
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(j, { ...t }))
};
var Se, Te, xe;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Se = oe.parameters) == null ? void 0 : Se.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(xe = (Te = oe.parameters) == null ? void 0 : Te.docs) == null ? void 0 : xe.source
    }
  }
};
var Ae, Oe, ze;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(Ae = se.parameters) == null ? void 0 : Ae.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(ze = (Oe = se.parameters) == null ? void 0 : Oe.docs) == null ? void 0 : ze.source
    }
  }
};
var Fe, Re, ke;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...(Fe = ie.parameters) == null ? void 0 : Fe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(ke = (Re = ie.parameters) == null ? void 0 : Re.docs) == null ? void 0 : ke.source
    }
  }
};
var We, Pe, Me;
ce.parameters = {
  ...ce.parameters,
  docs: {
    ...(We = ce.parameters) == null ? void 0 : We.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Me = (Pe = ce.parameters) == null ? void 0 : Pe.docs) == null ? void 0 : Me.source
    }
  }
};
var Le, Ie, Ue;
me.parameters = {
  ...me.parameters,
  docs: {
    ...(Le = me.parameters) == null ? void 0 : Le.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Ue = (Ie = me.parameters) == null ? void 0 : Ie.docs) == null ? void 0 : Ue.source
    }
  }
};
var Ge, Ye, Be;
ue.parameters = {
  ...ue.parameters,
  docs: {
    ...(Ge = ue.parameters) == null ? void 0 : Ge.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'waffle-chart',
      shape: 'person',
      title: 'Overdose Mortality Rates',
      content: 'of overdoses resulted in death.',
      subtext: 'This data is an example and does not reflect actual averages',
      orientation: 'horizontal',
      data: [{
        'Resulted in Death': 250,
        'Number of Overdoses': 600,
        state: 'Alabama',
        Year: '2010'
      }, {
        'Resulted in Death': 16,
        'Number of Overdoses': 80,
        state: 'Alaska',
        Year: '2008'
      }, {
        'Resulted in Death': 19,
        'Number of Overdoses': 100,
        state: 'Alaska',
        Year: '2010'
      }, {
        'Resulted in Death': 93,
        'Number of Overdoses': 400,
        state: 'Alaska',
        Year: '2012'
      }, {
        'Resulted in Death': 82,
        'Number of Overdoses': 400,
        state: 'Arizona',
        Year: '2010'
      }],
      filters: [],
      fontSize: null,
      overallFontSize: 'medium',
      dataColumn: 'Resulted in Death',
      dataFunction: 'Sum',
      dataConditionalColumn: '',
      dataConditionalOperator: null,
      dataConditionalComparate: '',
      customDenom: true,
      dataDenom: null,
      dataDenomColumn: 'Number of Overdoses',
      dataDenomFunction: 'Sum',
      prefix: '',
      suffix: '%',
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: 'theme-blue',
      visualizationType: 'Waffle',
      visualizationSubType: '',
      invalidComparate: false,
      showDenominator: false,
      showPercent: true,
      valueDescription: 'testing',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: true,
        borderColorTheme: true
      }
    }
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Be = (Ye = ue.parameters) == null ? void 0 : Ye.docs) == null ? void 0 : Be.source
    }
  }
};
var je, $e, He;
de.parameters = {
  ...de.parameters,
  docs: {
    ...(je = de.parameters) == null ? void 0 : je.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'waffle-chart',
      shape: 'person',
      title: 'Overdose Mortality Rates',
      content: 'of overdoses resulted in death.',
      subtext: 'This data is an example and does not reflect actual averages',
      orientation: 'horizontal',
      data: [{
        'Resulted in Death': 250,
        'Number of Overdoses': 600,
        state: 'Alabama',
        Year: '2010'
      }, {
        'Resulted in Death': 16,
        'Number of Overdoses': 80,
        state: 'Alaska',
        Year: '2008'
      }, {
        'Resulted in Death': 19,
        'Number of Overdoses': 100,
        state: 'Alaska',
        Year: '2010'
      }, {
        'Resulted in Death': 93,
        'Number of Overdoses': 400,
        state: 'Alaska',
        Year: '2012'
      }, {
        'Resulted in Death': 82,
        'Number of Overdoses': 400,
        state: 'Arizona',
        Year: '2010'
      }],
      filters: [],
      fontSize: null,
      overallFontSize: 'medium',
      dataColumn: 'Resulted in Death',
      dataFunction: 'Sum',
      dataConditionalColumn: '',
      dataConditionalOperator: null,
      dataConditionalComparate: '',
      customDenom: true,
      dataDenom: null,
      dataDenomColumn: 'Number of Overdoses',
      dataDenomFunction: 'Sum',
      prefix: '',
      suffix: '%',
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: 'theme-blue',
      visualizationType: 'Gauge',
      visualizationSubType: '',
      invalidComparate: false,
      showDenominator: false,
      showPercent: true,
      valueDescription: 'testing',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: true,
        borderColorTheme: true
      }
    }
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(He = ($e = de.parameters) == null ? void 0 : $e.docs) == null ? void 0 : He.source
    }
  }
};
const Qa = ["Example_Waffle_Chart_Count", "Waffle_Chart_Average_Max", "Waffle_Chart_Demographics", "Linear_Gauge", "Linear_Gauge_With_Message", "Person", "Gauge"];
export {
  oe as Example_Waffle_Chart_Count,
  de as Gauge,
  ce as Linear_Gauge,
  me as Linear_Gauge_With_Message,
  ue as Person,
  se as Waffle_Chart_Average_Max,
  ie as Waffle_Chart_Demographics,
  Qa as __namedExportsOrder,
  qa as default
};
