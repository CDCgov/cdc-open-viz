import { r as c, R as e } from "./storybook-index-45401197.es.js";
import { T as Ke, H as K } from "./storybook-index-e5bf02db.es.js";
import { a as ea, g as aa } from "./storybook-isSolr-6a0136d5.es.js";
import { f as ta } from "./storybook-fetchRemoteData-6254352f.es.js";
import { E as Ve, L as na } from "./storybook-Loading-f180d060.es.js";
import { A as ee } from "./storybook-Accordion-96627862.es.js";
import { B as la } from "./storybook-Button-d74e310e.es.js";
import { a as de } from "./storybook-Icon-ee109bed.es.js";
import { T as P } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as T } from "./storybook-editor-05e6f487.es.js";
import { I as z } from "./storybook-InputSelect-a65afd95.es.js";
import { P as ae } from "./storybook-index-43433e35.es.js";
import { S as oa, B as be, C as ra, c as sa } from "./storybook-icon-check-d4f3700e.es.js";
import "./storybook-index-4ed993c7.es.js";
import { u as ia } from "./storybook-updateFieldFactory-c006040a.es.js";
import { p as ca, u as ma } from "./storybook-useDataVizClasses-809f874d.es.js";
import { a as ua } from "./storybook-coveUpdateWorker-2db8648a.es.js";
import { G as _e } from "./storybook-Group-e6c0d0df.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-year-bedc547d.es.js";
const $e = c.createContext({}), M = c.memo(
  ({
    label: t,
    size: a = "small",
    activeColor: v = null,
    activeCheckColor: y = null,
    section: _ = null,
    subsection: N = null,
    fieldName: g,
    updateField: E,
    value: m,
    i: x = null,
    min: G = null,
    max: F = null,
    ...l
  }) => {
    const [C, A] = c.useState(m);
    let R = N ? `${_}-${N}-${g}` : `${_}-${N}-${g}`;
    return c.useEffect(() => {
      m !== void 0 && m !== C && A(m);
    }, [m]), c.useEffect(() => {
      m !== void 0 && m !== C && E && E(_, N, g, C, x);
    }, [C]), /* @__PURE__ */ e.createElement("div", { className: "input-group" }, t && /* @__PURE__ */ e.createElement("label", null, t), /* @__PURE__ */ e.createElement("div", { className: "cove-input__checkbox" + (a === "small" ? "--small" : a === "large" ? "--large" : "") + (C ? " active" : ""), onClick: () => A(!C) }, /* @__PURE__ */ e.createElement("div", { className: `cove-input__checkbox-box${v ? " custom-color" : ""}`, style: C && v ? { backgroundColor: v } : null }, /* @__PURE__ */ e.createElement(oa, { className: "cove-input__checkbox-check", style: { fill: y || "#025eaa" } })), /* @__PURE__ */ e.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: R, checked: C || !1, readOnly: !0 })));
  }
);
M.propTypes = {
  label: ae.string,
  size: ae.oneOf(["small", "medium", "large"]),
  activeColor: ae.string,
  activeCheckColor: ae.string
};
const da = (t) => /* @__PURE__ */ c.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...t }, /* @__PURE__ */ c.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), pa = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
c.memo(({ label: t, value: a, fieldName: v, section: y = null, subsection: _ = null, tooltip: N, updateField: g, ...E }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: v,
    checked: a,
    onChange: () => {
      g(y, _, v, !a);
    },
    ...E
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, N)));
const fa = c.memo((t) => {
  const { config: a, updateConfig: v, loading: y, data: _, setParentConfig: N, isDashboard: g } = c.useContext($e), [E, m] = c.useState(!0), [x, G] = c.useState(!1), F = (o) => o ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, l = ia(a, v, !0);
  c.useEffect(() => {
    if (N) {
      const o = b();
      N(o);
    }
  }, [a]), c.useEffect(() => {
    if (!x) {
      let o = { ...a };
      delete o.newViz, v(o);
    }
  }, []), c.useEffect(() => {
    let o = ["<", ">", "<=", ">="];
    a.dataConditionalComparate !== "" ? o.indexOf(a.dataConditionalOperator) > -1 && isNaN(a.dataConditionalComparate) ? v({ ...a, invalidComparate: !0 }) : a.invalidComparate && v({ ...a, invalidComparate: !1 }) : v({ ...a, invalidComparate: !1 });
  }, [a.dataConditionalOperator, a.dataConditionalComparate]);
  const C = () => {
    m(!E);
  }, A = () => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, a.runtime.editorErrorMessage))), R = () => {
    const o = (u) => {
      u.preventDefault();
      let d = { ...a };
      delete d.newViz, v(d);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: o }, "I'm Done")));
  }, b = () => {
    let o = JSON.parse(JSON.stringify(a));
    return delete o.newViz, delete o.runtime, o;
  }, r = () => {
    let o = a.filters ? [...a.filters] : [];
    o.push({ values: [] }), v({ ...a, filters: o });
  }, s = (o) => {
    let u = [...a.filters];
    u.splice(o, 1), v({ ...a, filters: u });
  }, D = (o, u, d) => {
    let h = [...a.filters];
    h[u][o] = d, v({ ...a, filters: h });
  }, I = (o = !0) => {
    let u = {};
    return _.map((d) => Object.keys(d).forEach((h) => u[h] = !0)), Object.keys(u);
  }, j = (o) => {
    let u = [];
    const d = a.filters[o].columnName;
    return _ && d && (_.forEach(function(h) {
      h[d] !== void 0 && u.indexOf(h[d]) === -1 && u.push(h[d]);
    }), u.sort()), u;
  }, V = ["Waffle", "Gauge"], Y = /* @__PURE__ */ e.createElement(ee, null, /* @__PURE__ */ e.createElement(ee.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(z, { value: a.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: l, options: V, className: "cove-input" }), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(z, { value: a.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: l, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(T, { value: a.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: l }), /* @__PURE__ */ e.createElement(
    T,
    {
      type: "textarea",
      value: a.content,
      fieldName: "content",
      label: "Message",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(P.Target, null, /* @__PURE__ */ e.createElement(de, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(P.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    T,
    {
      value: a.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(P.Target, null, /* @__PURE__ */ e.createElement(de, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(P.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(ee.Section, { icon: !a.dataColumn || !a.dataFunction ? /* @__PURE__ */ e.createElement(da, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(z, { style: F(!a.dataColumn), value: a.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: l, initial: "Select", options: I(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(z, { style: F(!a.dataFunction), value: a.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: l, initial: "Select", options: we, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(z, { value: a.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: l, initial: "Select", options: I(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(z, { value: a.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: l, initial: "Select", options: wa, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { value: a.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: l, className: a.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), a.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(M, { size: "small", value: a.customDenom, fieldName: "customDenom", updateField: l })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !a.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { value: a.dataDenom, fieldName: "dataDenom", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), a.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(z, { value: a.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: l, initial: "Select", options: I() }), /* @__PURE__ */ e.createElement(z, { value: a.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: l, initial: "Select", options: we }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(T, { value: a.prefix, fieldName: "prefix", label: "Prefix", updateField: l })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(T, { value: a.suffix, fieldName: "suffix", label: "Suffix", updateField: l })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: l })))), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(T, { inline: !0, size: "small", value: a.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: l }), /* @__PURE__ */ e.createElement(M, { inline: !0, size: "small", value: a.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: l }), /* @__PURE__ */ e.createElement(M, { inline: !0, size: "small", label: "Show Denominator", value: a.showDenominator, fieldName: "showDenominator", updateField: l }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(P.Target, null, /* @__PURE__ */ e.createElement(de, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(P.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), a.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, a.filters.map((o, u) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: u }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        s(u);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnName,
      onChange: (d) => {
        D("columnName", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    I().map((d, h) => /* @__PURE__ */ e.createElement("option", { value: d, key: h }, d))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnValue,
      onChange: (d) => {
        D("columnValue", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    j(u).map((d, h) => /* @__PURE__ */ e.createElement("option", { value: d, key: h }, d))
  ))))), /* @__PURE__ */ e.createElement(la, { onClick: r, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(ee.Section, { title: "Visual" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(z, { value: a.shape, fieldName: "shape", label: "Shape", updateField: l, options: ["circle", "square", "person"], className: "cove-input" }), a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: l }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(z, { value: a.orientation, fieldName: "orientation", label: "Layout", updateField: l, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.fontSize, fieldName: "fontSize", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(z, { value: a.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: l, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, pa.map((o) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: o,
      key: o,
      onClick: () => {
        v({ ...a, theme: o });
      },
      className: a.theme === o ? "selected " + o : o
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(M, { inline: !0, size: "small", value: a.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: l }), /* @__PURE__ */ e.createElement(M, { inline: !0, size: "small", value: a.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: l }), /* @__PURE__ */ e.createElement(M, { size: "small", value: a.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: l }), /* @__PURE__ */ e.createElement(M, { size: "small", value: a.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: l }), /* @__PURE__ */ e.createElement(M, { size: "small", value: a.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: l }))));
  return y ? null : /* @__PURE__ */ e.createElement(Ve, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor" }, !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(A, null), a.newViz && x && /* @__PURE__ */ e.createElement(R, null), /* @__PURE__ */ e.createElement("button", { className: "cove-editor--toggle" + (E ? "" : " collapsed"), title: E ? "Collapse Editor" : "Expand Editor", onClick: C }), /* @__PURE__ */ e.createElement("section", { className: "cove-editor__panel" + (E ? "" : " hidden") }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor__panel-container" }, /* @__PURE__ */ e.createElement("h2", { className: "cove-editor__heading" }, "Configure Chart"), /* @__PURE__ */ e.createElement("section", { className: "cove-editor__content" }, Y))), /* @__PURE__ */ e.createElement("div", { className: "cove-editor__content" }, /* @__PURE__ */ e.createElement("div", { className: "cove-editor__content-wrap" }, t.children))));
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
const ha = ({ config: t, isEditor: a, link: v = "" }) => {
  const { title: y, theme: _, shape: N, nodeWidth: g, nodeSpacer: E, prefix: m, suffix: x, subtext: G, content: F, orientation: l, filters: C, dataColumn: A, dataFunction: R, dataConditionalColumn: b, dataConditionalOperator: r, dataConditionalComparate: s, customDenom: D, dataDenom: I, dataDenomColumn: j, dataDenomFunction: V, roundToPlace: Y } = t, o = t.visual.colors[t.theme];
  let u = t.fontSize ? { fontSize: t.fontSize + "px" } : null;
  const d = c.useCallback(() => {
    if (!A || !R)
      return "";
    const $ = (n) => {
      if (Array.isArray(n) && n.length > 0) {
        const f = n.reduce((O, L) => O + L);
        return i(f);
      }
    }, k = (n) => {
      const f = n.length > 1 ? n.reduce((O, L) => O + L) / n.length : n[0];
      return i(f);
    }, H = (n) => {
      let f = {}, O = -1 / 0;
      for (let S = 0; S < n.length; S++)
        f[n[S]] ? f[n[S]] += 1 : f[n[S]] = 1, f[n[S]] > O && (O = f[n[S]]);
      let L = [];
      for (let S in f)
        f[S] === O && L.push(S);
      return L;
    }, q = (n) => {
      const f = Math.floor(n.length / 2), O = [...n].sort((S, Ze) => S - Ze), L = n.length % 2 !== 0 ? O[f] : (O[f - 1] + O[f]) / 2;
      return i(L);
    }, i = (n) => (Y !== "" && !isNaN(Y) && Number(Y) > -1 && (n = Number(n).toFixed(Number(Y))), n);
    let p = t.data;
    C.map((n) => {
      if (n.columnName && n.columnValue)
        p = p.filter(function(f) {
          return f[n.columnName] === n.columnValue;
        });
      else
        return !1;
    });
    let w = [];
    if (b !== "" && r !== "" && s !== "")
      switch (r) {
        case "<":
          w = p.filter((n) => n[b] < s);
          break;
        case ">":
          w = p.filter((n) => n[b] > s);
          break;
        case "<=":
          w = p.filter((n) => n[b] <= s);
          break;
        case ">=":
          w = p.filter((n) => n[b] >= s);
          break;
        case "=":
          isNaN(Number(s)) ? w = p.filter((n) => String(n[b]) === s) : w = p.filter((n) => n[b] === s);
          break;
        case "≠":
          isNaN(Number(s)) ? w = p.filter((n) => String(n[b]) !== s) : w = p.filter((n) => n[b] !== s);
          break;
        default:
          w = [];
      }
    const Q = w.length > 0 ? w.map((n) => n[A]) : p.map((n) => n[A]), X = p.map((n) => n[j]);
    let W = Q.filter((n) => {
      let f = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (f = !0), f;
    }).map(Number), B = X.filter((n) => {
      let f = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (f = !0), f;
    }).map(Number), ue = "";
    ue = {
      [fe]: String(W.length),
      [Ne]: String($(W)),
      [ve]: String(k(W)),
      [he]: q(W).toString(),
      [pe]: Math.max(...W).toString(),
      [ge]: Math.min(...W).toString(),
      [Ee]: H(W).join(", ")
    }[R];
    let Z = null;
    const Xe = {
      [fe]: String(B.length),
      [Ne]: String($(B)),
      [ve]: String(k(B)),
      [he]: q(B).toString(),
      [pe]: Math.max(...B).toString(),
      [ge]: Math.min(...B).toString(),
      [Ee]: H(B).join(", ")
    };
    return D && j && V ? Z = Xe[V] : Z = I > 0 ? I : 100, [i(ue / Z * 100), Z, i(ue)];
  }, [A, R, t.data, C, b, r, s, D, j, V, Y, I]), [h, ce, Ce] = d(), He = c.useCallback(() => {
    let $ = [], k = parseInt(g, 10), H = parseInt(E, 10);
    const q = (i, p, w, Q, X) => {
      let W = p === "x" ? w % 10 : p === "y" ? Math.floor(w / 10) : null;
      return i === "circle" ? W * (Q + X) + Q / 2 : W * (Q + X);
    };
    for (let i = 0; i < 100; i++) {
      let p = {
        shape: N,
        x: q(N, "x", i, k, H),
        y: q(N, "y", i, k, H),
        color: t.visual.colors[_],
        opacity: i + 1 > 100 - Math.round(h) ? 1 : 0.35
      };
      $.push(p);
    }
    return $.map(
      (i, p) => i.shape === "square" ? /* @__PURE__ */ e.createElement(be, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * p}ms` }, x: i.x, y: i.y, width: k, height: k, fill: i.color, fillOpacity: i.opacity, key: p }) : i.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: { transform: `translateX(${i.x + k / 4}px) translateY(${i.y}px) scale(${k / 20})` },
          fill: i.color,
          fillOpacity: i.opacity,
          key: p,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(ra, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * p}ms` }, cx: i.x, cy: i.y, r: k / 2, fill: i.color, fillOpacity: i.opacity, key: p })
    );
  }, [_, h, N, g, E]), me = c.useCallback(() => g * 10 + E * 9, [g, E]), { innerContainerClasses: qe, contentClasses: Qe } = ma(t), Je = sa({
    domain: [0, ce],
    range: [0, t.gauge.width]
  });
  return /* @__PURE__ */ e.createElement("div", { className: qe.join(" ") }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Ke, { title: y, config: t, classes: ["chart-title", `${t.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: Qe.join(" ") }, /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: u }, m || " ", t.showPercent ? h : Ce, x ? x + " " : " ", " ", t.valueDescription, " ", t.showDenominator && ce ? ce : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, K(F)), /* @__PURE__ */ e.createElement("svg", { height: t.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: t.gauge.width, height: t.gauge.height, fill: "#fff" }), /* @__PURE__ */ e.createElement(be, { x: 0, y: 0, width: Je(Ce), height: t.gauge.height, fill: o }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, K(G)))), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-waffle-chart${l === "vertical" ? " cove-waffle-chart--verical" : ""}${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: me() } }, /* @__PURE__ */ e.createElement("svg", { width: me(), height: me() }, /* @__PURE__ */ e.createElement(_e, null, He()))), (h || F) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, h && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: u }, m || null, h, x || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, K(F)), G && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, K(G)))))), v && v));
}, U = ({ configUrl: t, config: a, isDashboard: v = !1, isEditor: y = !1, setConfig: _ }) => {
  const [N, g] = c.useReducer(va, { config: a ?? J, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: E, config: m, viewport: x, coveLoadedHasRan: G, container: F } = N, l = (r) => {
    Object.keys(J).forEach((s) => {
      r[s] && typeof r[s] == "object" && !Array.isArray(r[s]) && (r[s] = { ...J[s], ...r[s] });
    }), r.runtime = {}, r.runtime.uniqueId = Date.now(), r.runtime.editorErrorMessage = "", g({ type: "SET_CONFIG", payload: r });
  }, C = c.useCallback(async () => {
    let r = a || await (await fetch(t)).json(), s = r.data ?? {};
    r.dataUrl && (s = await ta(r.dataUrl)), r.data = s;
    const D = { ...await ua(r) };
    l({ ...J, ...D }), g({ type: "SET_LOADING", payload: !1 });
  }, []), A = new ea((r) => {
    for (let s of r) {
      let D = aa(s.contentRect.width * 2);
      g({ type: "SET_VIEWPORT", payload: D });
    }
  }), R = c.useCallback((r) => {
    r !== null && A.observe(r), g({ type: "SET_CONTAINER", payload: r });
  }, []);
  c.useEffect(() => {
    C().catch((r) => console.log(r));
  }, []), c.useEffect(() => {
    m && !G && F && (ca("cove_loaded", { config: m }), g({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [m, F]), c.useEffect(() => {
    C().catch((r) => console.log(r));
  }, []), a && c.useEffect(() => {
    a.dataUrl || l({ ...J, ...a });
  }, [a.data]);
  let b = /* @__PURE__ */ e.createElement(na, null);
  if (E === !1) {
    let r = ["cove", "cdc-open-viz-module", "type-waffle-chart", x, m.theme, "font-" + m.overallFontSize];
    y && r.push("is-editor");
    let s = ["cove-component", "waffle-chart"], D = /* @__PURE__ */ e.createElement("div", { className: `${s.join(" ")}`, ref: R }, /* @__PURE__ */ e.createElement(ha, { config: m, isEditor: y }));
    b = /* @__PURE__ */ e.createElement("div", { className: r.join(" ") }, y && /* @__PURE__ */ e.createElement(fa, null, D), !y && D);
  }
  return /* @__PURE__ */ e.createElement(Ve, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement($e.Provider, { value: { config: m, updateConfig: l, loading: E, data: m.data, setParentConfig: _, isDashboard: v, outerContainerRef: R } }, b));
}, pe = "Max", fe = "Count", ve = "Mean (Average)", he = "Median", ge = "Min", Ee = "Mode", Ne = "Sum", we = [fe, pe, ve, he, ge, Ee, Ne], ga = "<", Ea = ">", Na = "<=", Ca = ">=", ba = "=", _a = "≠", wa = [ga, Ea, Na, Ca, ba, _a], Qa = {
  title: "Components/Templates/WaffleChart",
  component: U
}, te = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(U, {
    ...t
  }))
}, ne = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(U, {
    ...t
  }))
}, le = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(U, {
    ...t
  }))
}, oe = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(U, {
    ...t
  }))
}, re = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(U, {
    ...t
  }))
}, se = {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(U, {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(U, {
    ...t
  }))
};
var ye, De, Se;
te.parameters = {
  ...te.parameters,
  docs: {
    ...(ye = te.parameters) == null ? void 0 : ye.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Se = (De = te.parameters) == null ? void 0 : De.docs) == null ? void 0 : Se.source
    }
  }
};
var Te, xe, Ae;
ne.parameters = {
  ...ne.parameters,
  docs: {
    ...(Te = ne.parameters) == null ? void 0 : Te.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Ae = (xe = ne.parameters) == null ? void 0 : xe.docs) == null ? void 0 : Ae.source
    }
  }
};
var Oe, ze, Fe;
le.parameters = {
  ...le.parameters,
  docs: {
    ...(Oe = le.parameters) == null ? void 0 : Oe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Fe = (ze = le.parameters) == null ? void 0 : ze.docs) == null ? void 0 : Fe.source
    }
  }
};
var Re, ke, We;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Re = oe.parameters) == null ? void 0 : Re.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(We = (ke = oe.parameters) == null ? void 0 : ke.docs) == null ? void 0 : We.source
    }
  }
};
var Pe, Me, Ie;
re.parameters = {
  ...re.parameters,
  docs: {
    ...(Pe = re.parameters) == null ? void 0 : Pe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Ie = (Me = re.parameters) == null ? void 0 : Me.docs) == null ? void 0 : Ie.source
    }
  }
};
var Le, Ue, Ge;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(Le = se.parameters) == null ? void 0 : Le.docs,
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
      ...(Ge = (Ue = se.parameters) == null ? void 0 : Ue.docs) == null ? void 0 : Ge.source
    }
  }
};
var Ye, Be, je;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...(Ye = ie.parameters) == null ? void 0 : Ye.docs,
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
      ...(je = (Be = ie.parameters) == null ? void 0 : Be.docs) == null ? void 0 : je.source
    }
  }
};
const Ja = ["Example_Waffle_Chart_Count", "Waffle_Chart_Average_Max", "Waffle_Chart_Demographics", "Linear_Gauge", "Linear_Gauge_With_Message", "Person", "Gauge"];
export {
  te as Example_Waffle_Chart_Count,
  ie as Gauge,
  oe as Linear_Gauge,
  re as Linear_Gauge_With_Message,
  se as Person,
  ne as Waffle_Chart_Average_Max,
  le as Waffle_Chart_Demographics,
  Ja as __namedExportsOrder,
  Qa as default
};
