import { r as c, R as e } from "./storybook-e61d95ab.es.js";
import { T as ea, H as ee } from "./storybook-826feda6.es.js";
import { i as aa, g as ta } from "./storybook-a2b11335.es.js";
import { f as na } from "./storybook-03c45984.es.js";
import { E as $e, L as la } from "./storybook-a0c99f4a.es.js";
import { A as ae } from "./storybook-3ed09dac.es.js";
import { B as oa } from "./storybook-8d78bf52.es.js";
import { a as pe } from "./storybook-e798b70d.es.js";
import { T as L } from "./storybook-46a89ba7.es.js";
import { I as x } from "./storybook-462d9620.es.js";
import { I as F } from "./storybook-deb084b6.es.js";
import { P as te } from "./storybook-b8c9afe4.es.js";
import { S as ra, B as _e, C as sa, c as ia } from "./storybook-0cd4c30f.es.js";
import "./storybook-4ed993c7.es.js";
import { u as ca } from "./storybook-c006040a.es.js";
import { c as ma, p as ua, u as da } from "./storybook-a9880235.es.js";
import { G as we } from "./storybook-14e8f9f9.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-76833471.es.js";
import "./storybook-9c9b89fe.es.js";
import "./storybook-d3e946a2.es.js";
import "./storybook-7df1b381.es.js";
import "./storybook-bedc547d.es.js";
const He = c.createContext({}), I = c.memo(
  ({
    label: t,
    size: a = "small",
    activeColor: f = null,
    activeCheckColor: y = null,
    section: b = null,
    subsection: E = null,
    fieldName: v,
    updateField: g,
    value: u,
    i: A = null,
    min: B = null,
    max: R = null,
    ...l
  }) => {
    const [N, O] = c.useState(u);
    let k = E ? `${b}-${E}-${v}` : `${b}-${E}-${v}`;
    return c.useEffect(() => {
      u !== void 0 && u !== N && O(u);
    }, [u]), c.useEffect(() => {
      u !== void 0 && u !== N && g && g(b, E, v, N, A);
    }, [N]), /* @__PURE__ */ e.createElement("div", { className: "input-group" }, t && /* @__PURE__ */ e.createElement("label", null, t), /* @__PURE__ */ e.createElement("div", { className: "cove-input__checkbox" + (a === "small" ? "--small" : a === "large" ? "--large" : "") + (N ? " active" : ""), onClick: () => O(!N) }, /* @__PURE__ */ e.createElement("div", { className: `cove-input__checkbox-box${f ? " custom-color" : ""}`, style: N && f ? { backgroundColor: f } : null }, /* @__PURE__ */ e.createElement(ra, { className: "cove-input__checkbox-check", style: { fill: y || "#025eaa" } })), /* @__PURE__ */ e.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: k, checked: N || !1, readOnly: !0 })));
  }
);
I.propTypes = {
  label: te.string,
  size: te.oneOf(["small", "medium", "large"]),
  activeColor: te.string,
  activeCheckColor: te.string
};
const pa = (t) => /* @__PURE__ */ c.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...t }, /* @__PURE__ */ c.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), fa = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
c.memo(({ label: t, value: a, fieldName: f, section: y = null, subsection: b = null, tooltip: E, updateField: v, ...g }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: f,
    checked: a,
    onChange: () => {
      v(y, b, f, !a);
    },
    ...g
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, E)));
const ha = c.memo((t) => {
  const { config: a, updateConfig: f, loading: y, data: b, setParentConfig: E, isDashboard: v } = c.useContext(He), [g, u] = c.useState(!0), [A, B] = c.useState(!1), R = (o) => o ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, l = ca(f, a, !0);
  c.useEffect(() => {
    if (E) {
      const o = C();
      E(o);
    }
  }, [a]), c.useEffect(() => {
    if (!A) {
      let o = { ...a };
      delete o.newViz, f(o);
    }
  }, []), c.useEffect(() => {
    let o = ["<", ">", "<=", ">="];
    a.dataConditionalComparate !== "" ? o.indexOf(a.dataConditionalOperator) > -1 && isNaN(a.dataConditionalComparate) ? f({ ...a, invalidComparate: !0 }) : a.invalidComparate && f({ ...a, invalidComparate: !1 }) : f({ ...a, invalidComparate: !1 });
  }, [a.dataConditionalOperator, a.dataConditionalComparate]);
  const N = () => {
    u(!g);
  }, O = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, a.runtime.editorErrorMessage))), k = () => {
    const o = (h) => {
      h.preventDefault();
      let m = { ...a };
      delete m.newViz, f(m);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: o }, "I'm Done")));
  }, C = () => {
    let o = JSON.parse(JSON.stringify(a));
    return delete o.newViz, delete o.runtime, o;
  }, r = () => {
    let o = a.filters ? [...a.filters] : [];
    o.push({ values: [] }), f({ ...a, filters: o });
  }, s = (o) => {
    let h = [...a.filters];
    h.splice(o, 1), f({ ...a, filters: h });
  }, D = (o, h, m) => {
    let _ = [...a.filters];
    _[h][o] = m, f({ ...a, filters: _ });
  }, U = (o = !0) => {
    let h = {};
    return b.map((m) => Object.keys(m).forEach((_) => h[_] = !0)), Object.keys(h);
  }, H = (o) => {
    let h = [];
    const m = a.filters[o].columnName;
    return b && m && (b.forEach(function(_) {
      _[m] !== void 0 && h.indexOf(_[m]) === -1 && h.push(_[m]);
    }), h.sort()), h;
  }, q = ["Waffle", "Gauge"], j = /* @__PURE__ */ e.createElement(ae, null, /* @__PURE__ */ e.createElement(ae.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(F, { value: a.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: l, options: q, className: "cove-input" }), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(F, { value: a.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: l, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(x, { value: a.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: l }), /* @__PURE__ */ e.createElement(
    x,
    {
      type: "textarea",
      value: a.content,
      fieldName: "content",
      label: "Message",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(L.Target, null, /* @__PURE__ */ e.createElement(pe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(L.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    x,
    {
      value: a.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(L.Target, null, /* @__PURE__ */ e.createElement(pe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(L.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(ae.Section, { icon: !a.dataColumn || !a.dataFunction ? /* @__PURE__ */ e.createElement(pa, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(F, { style: R(!a.dataColumn), value: a.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: l, initial: "Select", options: U(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(F, { style: R(!a.dataFunction), value: a.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: l, initial: "Select", options: ye, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(F, { value: a.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: l, initial: "Select", options: U(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(F, { value: a.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: l, initial: "Select", options: ya, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { value: a.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: l, className: a.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), a.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(I, { size: "small", value: a.customDenom, fieldName: "customDenom", updateField: l })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !a.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { value: a.dataDenom, fieldName: "dataDenom", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), a.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(F, { value: a.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: l, initial: "Select", options: U() }), /* @__PURE__ */ e.createElement(F, { value: a.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: l, initial: "Select", options: ye }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(x, { value: a.prefix, fieldName: "prefix", label: "Prefix", updateField: l })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(x, { value: a.suffix, fieldName: "suffix", label: "Suffix", updateField: l })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: l })))), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(x, { inline: !0, size: "small", value: a.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: l }), /* @__PURE__ */ e.createElement(I, { inline: !0, size: "small", value: a.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: l }), /* @__PURE__ */ e.createElement(I, { inline: !0, size: "small", label: "Show Denominator", value: a.showDenominator, fieldName: "showDenominator", updateField: l }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(L.Target, null, /* @__PURE__ */ e.createElement(pe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(L.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), a.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, a.filters.map((o, h) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: h }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        s(h);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnName,
      onChange: (m) => {
        D("columnName", h, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    U().map((m, _) => /* @__PURE__ */ e.createElement("option", { value: m, key: _ }, m))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnValue,
      onChange: (m) => {
        D("columnValue", h, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    H(h).map((m, _) => /* @__PURE__ */ e.createElement("option", { value: m, key: _ }, m))
  ))))), /* @__PURE__ */ e.createElement(oa, { onClick: r, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(ae.Section, { title: "Visual" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(F, { value: a.shape, fieldName: "shape", label: "Shape", updateField: l, options: ["circle", "square", "person"], className: "cove-input" }), a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: l }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(F, { value: a.orientation, fieldName: "orientation", label: "Layout", updateField: l, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(x, { type: "number", value: a.fontSize, fieldName: "fontSize", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(F, { value: a.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: l, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, fa.map((o) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: o,
      key: o,
      onClick: () => {
        f({ ...a, theme: o });
      },
      className: a.theme === o ? "selected " + o : o
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(I, { inline: !0, size: "small", value: a.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: l }), /* @__PURE__ */ e.createElement(I, { inline: !0, size: "small", value: a.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: l }), /* @__PURE__ */ e.createElement(I, { size: "small", value: a.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: l }), /* @__PURE__ */ e.createElement(I, { size: "small", value: a.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: l }), /* @__PURE__ */ e.createElement(I, { size: "small", value: a.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: l }))));
  return y ? null : /* @__PURE__ */ e.createElement($e, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor" }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(O, null), a.newViz && A && /* @__PURE__ */ e.createElement(k, null), /* @__PURE__ */ e.createElement("button", { className: "cove-editor--toggle" + (g ? "" : " collapsed"), title: g ? "Collapse Editor" : "Expand Editor", onClick: N }), /* @__PURE__ */ e.createElement("section", { className: "cove-editor__panel" + (g ? "" : " hidden") }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor__panel-container" }, /* @__PURE__ */ e.createElement("h2", { className: "cove-editor__heading" }, "Configure Chart"), /* @__PURE__ */ e.createElement("section", { className: "cove-editor__content" }, j))), /* @__PURE__ */ e.createElement("div", { className: "cove-editor__content" }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor__content-wrap" }, t.children))));
}), X = {
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
}, va = (t, a) => {
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
const ga = ({ config: t, isEditor: a, link: f = "" }) => {
  const { title: y, theme: b, shape: E, nodeWidth: v, nodeSpacer: g, prefix: u, suffix: A, subtext: B, content: R, orientation: l, filters: N, dataColumn: O, dataFunction: k, dataConditionalColumn: C, dataConditionalOperator: r, dataConditionalComparate: s, customDenom: D, dataDenom: U, dataDenomColumn: H, dataDenomFunction: q, roundToPlace: j } = t, o = (M, S = !1) => {
    S && console.log("handleWaffleChartAriaLabels Testing On:", M);
    try {
      let W = "Waffle chart";
      return M.title && (W += ` with the title: ${M.title}`), W;
    } catch (W) {
      console.error(W.message);
    }
  }, h = t.visual.colors[t.theme];
  let m = t.fontSize ? { fontSize: t.fontSize + "px" } : null;
  const _ = c.useCallback(() => {
    if (!O || !k)
      return "";
    const M = (n) => {
      if (Array.isArray(n) && n.length > 0) {
        const p = n.reduce((z, G) => z + G);
        return i(p);
      }
    }, S = (n) => {
      const p = n.length > 1 ? n.reduce((z, G) => z + G) / n.length : n[0];
      return i(p);
    }, W = (n) => {
      let p = {}, z = -1 / 0;
      for (let T = 0; T < n.length; T++)
        p[n[T]] ? p[n[T]] += 1 : p[n[T]] = 1, p[n[T]] > z && (z = p[n[T]]);
      let G = [];
      for (let T in p)
        p[T] === z && G.push(T);
      return G;
    }, Q = (n) => {
      const p = Math.floor(n.length / 2), z = [...n].sort((T, Ke) => T - Ke), G = n.length % 2 !== 0 ? z[p] : (z[p - 1] + z[p]) / 2;
      return i(G);
    }, i = (n) => (j !== "" && !isNaN(j) && Number(j) > -1 && (n = Number(n).toFixed(Number(j))), n);
    let d = t.data;
    N.map((n) => {
      if (n.columnName && n.columnValue)
        d = d.filter(function(p) {
          return p[n.columnName] === n.columnValue;
        });
      else
        return !1;
    });
    let w = [];
    if (C !== "" && r !== "" && s !== "")
      switch (r) {
        case "<":
          w = d.filter((n) => n[C] < s);
          break;
        case ">":
          w = d.filter((n) => n[C] > s);
          break;
        case "<=":
          w = d.filter((n) => n[C] <= s);
          break;
        case ">=":
          w = d.filter((n) => n[C] >= s);
          break;
        case "=":
          isNaN(Number(s)) ? w = d.filter((n) => String(n[C]) === s) : w = d.filter((n) => n[C] === s);
          break;
        case "≠":
          isNaN(Number(s)) ? w = d.filter((n) => String(n[C]) !== s) : w = d.filter((n) => n[C] !== s);
          break;
        default:
          w = [];
      }
    const J = w.length > 0 ? w.map((n) => n[O]) : d.map((n) => n[O]), Z = d.map((n) => n[H]);
    let P = J.filter((n) => {
      let p = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (p = !0), p;
    }).map(Number), V = Z.filter((n) => {
      let p = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (p = !0), p;
    }).map(Number), de = "";
    de = {
      [he]: String(P.length),
      [Ce]: String(M(P)),
      [ve]: String(S(P)),
      [ge]: Q(P).toString(),
      [fe]: Math.max(...P).toString(),
      [Ee]: Math.min(...P).toString(),
      [Ne]: W(P).join(", ")
    }[k];
    let K = null;
    const Ze = {
      [he]: String(V.length),
      [Ce]: String(M(V)),
      [ve]: String(S(V)),
      [ge]: Q(V).toString(),
      [fe]: Math.max(...V).toString(),
      [Ee]: Math.min(...V).toString(),
      [Ne]: W(V).join(", ")
    };
    return D && H && q ? K = Ze[q] : K = U > 0 ? U : 100, [i(de / K * 100), K, i(de)];
  }, [O, k, t.data, N, C, r, s, D, H, q, j, U]), [$, me, be] = _(), qe = c.useCallback(() => {
    let M = [], S = parseInt(v, 10), W = parseInt(g, 10);
    const Q = (i, d, w, J, Z) => {
      let P = d === "x" ? w % 10 : d === "y" ? Math.floor(w / 10) : null;
      return i === "circle" ? P * (J + Z) + J / 2 : P * (J + Z);
    };
    for (let i = 0; i < 100; i++) {
      let d = {
        shape: E,
        x: Q(E, "x", i, S, W),
        y: Q(E, "y", i, S, W),
        color: t.visual.colors[b],
        opacity: i + 1 > 100 - Math.round($) ? 1 : 0.35
      };
      M.push(d);
    }
    return M.map(
      (i, d) => i.shape === "square" ? /* @__PURE__ */ e.createElement(_e, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * d}ms` }, x: i.x, y: i.y, width: S, height: S, fill: i.color, fillOpacity: i.opacity, key: d }) : i.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: { transform: `translateX(${i.x + S / 4}px) translateY(${i.y}px) scale(${S / 20})` },
          fill: i.color,
          fillOpacity: i.opacity,
          key: d,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(sa, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * d}ms` }, cx: i.x, cy: i.y, r: S / 2, fill: i.color, fillOpacity: i.opacity, key: d })
    );
  }, [b, $, E, v, g]), ue = c.useCallback(() => v * 10 + g * 9, [v, g]), { innerContainerClasses: Qe, contentClasses: Je } = da(t), Xe = ia({
    domain: [0, me],
    range: [0, t.gauge.width]
  });
  return /* @__PURE__ */ e.createElement("div", { className: Qe.join(" ") }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(ea, { title: y, config: t, classes: ["chart-title", `${t.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: Je.join(" ") }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: m }, u || " ", t.showPercent ? $ : be, A ? A + " " : " ", " ", t.valueDescription, " ", t.showDenominator && me ? me : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, ee(R)), /* @__PURE__ */ e.createElement("svg", { height: t.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(we, null, /* @__PURE__ */ e.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: t.gauge.width, height: t.gauge.height, fill: "#fff" }), /* @__PURE__ */ e.createElement(_e, { x: 0, y: 0, width: Xe(be), height: t.gauge.height, fill: h }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, ee(B)))), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-waffle-chart${l === "vertical" ? " cove-waffle-chart--verical" : ""}${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: ue() } }, /* @__PURE__ */ e.createElement("svg", { width: ue(), height: ue(), role: "img", "aria-label": o(t), tabIndex: 0 }, /* @__PURE__ */ e.createElement(we, null, qe()))), ($ || R) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, $ && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: m }, u || null, $, A || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, ee(R)), B && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, ee(B)))))), f && f));
}, Y = ({ configUrl: t, config: a, isDashboard: f = !1, isEditor: y = !1, setConfig: b }) => {
  const [E, v] = c.useReducer(va, { config: a ?? X, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: g, config: u, viewport: A, coveLoadedHasRan: B, container: R } = E, l = (r) => {
    Object.keys(X).forEach((s) => {
      r[s] && typeof r[s] == "object" && !Array.isArray(r[s]) && (r[s] = { ...X[s], ...r[s] });
    }), r.runtime = {}, r.runtime.uniqueId = Date.now(), r.runtime.editorErrorMessage = "", v({ type: "SET_CONFIG", payload: r });
  }, N = c.useCallback(async () => {
    let r = a || await (await fetch(t)).json(), s = r.data ?? {};
    r.dataUrl && (s = await na(r.dataUrl)), r.data = s;
    const D = { ...await ma(r) };
    l({ ...X, ...D }), v({ type: "SET_LOADING", payload: !1 });
  }, []), O = new aa((r) => {
    for (let s of r) {
      let D = ta(s.contentRect.width * 2);
      v({ type: "SET_VIEWPORT", payload: D });
    }
  }), k = c.useCallback((r) => {
    r !== null && O.observe(r), v({ type: "SET_CONTAINER", payload: r });
  }, []);
  c.useEffect(() => {
    N().catch((r) => console.log(r));
  }, []), c.useEffect(() => {
    u && !B && R && (ua("cove_loaded", { config: u }), v({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [u, R]), c.useEffect(() => {
    N().catch((r) => console.log(r));
  }, []), a && c.useEffect(() => {
    a.dataUrl || l({ ...X, ...a });
  }, [a.data]);
  let C = /* @__PURE__ */ e.createElement(la, null);
  if (g === !1) {
    let r = ["cove", "cdc-open-viz-module", "type-waffle-chart", A, u.theme, "font-" + u.overallFontSize];
    y && r.push("is-editor");
    let s = ["cove-component", "waffle-chart"], D = /* @__PURE__ */ e.createElement("div", { className: `${s.join(" ")}`, ref: k }, /* @__PURE__ */ e.createElement(ga, { config: u, isEditor: y }));
    C = /* @__PURE__ */ e.createElement("div", { className: r.join(" ") }, y && /* @__PURE__ */ e.createElement(ha, null, D), !y && D);
  }
  return /* @__PURE__ */ e.createElement($e, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement(He.Provider, { value: { config: u, updateConfig: l, loading: g, data: u.data, setParentConfig: b, isDashboard: f, outerContainerRef: k } }, C));
}, fe = "Max", he = "Count", ve = "Mean (Average)", ge = "Median", Ee = "Min", Ne = "Mode", Ce = "Sum", ye = [he, fe, ve, ge, Ee, Ne, Ce], Ea = "<", Na = ">", Ca = "<=", ba = ">=", _a = "=", wa = "≠", ya = [Ea, Na, Ca, ba, _a, wa], Qa = {
  title: "Components/Templates/WaffleChart",
  component: Y
}, ne = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, le = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, oe = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, re = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, se = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, ie = {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, ce = {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
};
var De, Se, Te;
ne.parameters = {
  ...ne.parameters,
  docs: {
    ...(De = ne.parameters) == null ? void 0 : De.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Te = (Se = ne.parameters) == null ? void 0 : Se.docs) == null ? void 0 : Te.source
    }
  }
};
var xe, Ae, Oe;
le.parameters = {
  ...le.parameters,
  docs: {
    ...(xe = le.parameters) == null ? void 0 : xe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Oe = (Ae = le.parameters) == null ? void 0 : Ae.docs) == null ? void 0 : Oe.source
    }
  }
};
var ze, Fe, Re;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(ze = oe.parameters) == null ? void 0 : ze.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Re = (Fe = oe.parameters) == null ? void 0 : Fe.docs) == null ? void 0 : Re.source
    }
  }
};
var ke, We, Pe;
re.parameters = {
  ...re.parameters,
  docs: {
    ...(ke = re.parameters) == null ? void 0 : ke.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Pe = (We = re.parameters) == null ? void 0 : We.docs) == null ? void 0 : Pe.source
    }
  }
};
var Me, Le, Ie;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(Me = se.parameters) == null ? void 0 : Me.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Ie = (Le = se.parameters) == null ? void 0 : Le.docs) == null ? void 0 : Ie.source
    }
  }
};
var Ue, Ge, Ye;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...(Ue = ie.parameters) == null ? void 0 : Ue.docs,
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
      ...(Ye = (Ge = ie.parameters) == null ? void 0 : Ge.docs) == null ? void 0 : Ye.source
    }
  }
};
var Be, je, Ve;
ce.parameters = {
  ...ce.parameters,
  docs: {
    ...(Be = ce.parameters) == null ? void 0 : Be.docs,
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
      ...(Ve = (je = ce.parameters) == null ? void 0 : je.docs) == null ? void 0 : Ve.source
    }
  }
};
const Ja = ["Example_Waffle_Chart_Count", "Waffle_Chart_Average_Max", "Waffle_Chart_Demographics", "Linear_Gauge", "Linear_Gauge_With_Message", "Person", "Gauge"];
export {
  ne as Example_Waffle_Chart_Count,
  ce as Gauge,
  re as Linear_Gauge,
  se as Linear_Gauge_With_Message,
  ie as Person,
  le as Waffle_Chart_Average_Max,
  oe as Waffle_Chart_Demographics,
  Ja as __namedExportsOrder,
  Qa as default
};
