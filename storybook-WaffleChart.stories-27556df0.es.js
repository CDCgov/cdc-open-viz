import { r as m, R as e } from "./storybook-index-45401197.es.js";
import { T as na, H as Z } from "./storybook-index-e5bf02db.es.js";
import { a as la, g as ra } from "./storybook-isSolr-6a0136d5.es.js";
import { f as oa } from "./storybook-fetchRemoteData-6254352f.es.js";
import { E as je, L as sa } from "./storybook-Loading-f180d060.es.js";
import { A as K } from "./storybook-Accordion-cdb4bf78.es.js";
import { B as ia } from "./storybook-Button-d74e310e.es.js";
import { a as ue } from "./storybook-Icon-48ed169f.es.js";
import { T as I } from "./storybook-Tooltip-5f8a49cd.es.js";
import { I as T } from "./storybook-editor-ae22741e.es.js";
import { I as z } from "./storybook-InputSelect-a65afd95.es.js";
import { P as ee } from "./storybook-index-43433e35.es.js";
import { S as ca, B as _e, C as ma, c as ua } from "./storybook-icon-check-c4a42d0f.es.js";
import "./storybook-index-4ed993c7.es.js";
import { u as da } from "./storybook-updateFieldFactory-c006040a.es.js";
import { L as de, a as pa } from "./storybook-coveUpdateWorker-36d7a51c.es.js";
import { p as fa, u as ha } from "./storybook-useDataVizClasses-d9099587.es.js";
import { G as we } from "./storybook-Group-6a29c5f6.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-a12b60a7.es.js";
import "./storybook-useDebounce-b9224b8d.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
const He = m.createContext({}), U = m.memo(
  ({
    label: t,
    size: a = "small",
    activeColor: p = null,
    activeCheckColor: w = null,
    section: N = null,
    subsection: y = null,
    fieldName: v,
    updateField: b,
    value: i,
    i: k = null,
    min: F = null,
    max: l = null,
    ...P
  }) => {
    const [E, x] = m.useState(i);
    let W = y ? `${N}-${y}-${v}` : `${N}-${y}-${v}`;
    return m.useEffect(() => {
      i !== void 0 && i !== E && x(i);
    }, [i]), m.useEffect(() => {
      i !== void 0 && i !== E && b && b(N, y, v, E, k);
    }, [E]), /* @__PURE__ */ e.createElement("div", { className: "input-group" }, t && /* @__PURE__ */ e.createElement("label", null, t), /* @__PURE__ */ e.createElement("div", { className: "cove-input__checkbox" + (a === "small" ? "--small" : a === "large" ? "--large" : "") + (E ? " active" : ""), onClick: () => x(!E) }, /* @__PURE__ */ e.createElement("div", { className: `cove-input__checkbox-box${p ? " custom-color" : ""}`, style: E && p ? { backgroundColor: p } : null }, /* @__PURE__ */ e.createElement(ca, { className: "cove-input__checkbox-check", style: { fill: w || "#025eaa" } })), /* @__PURE__ */ e.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: W, checked: E || !1, readOnly: !0 })));
  }
);
U.propTypes = {
  label: ee.string,
  size: ee.oneOf(["small", "medium", "large"]),
  activeColor: ee.string,
  activeCheckColor: ee.string
};
const va = (t) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...t }, /* @__PURE__ */ m.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), ga = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
m.memo(({ label: t, value: a, fieldName: p, section: w = null, subsection: N = null, tooltip: y, updateField: v, ...b }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: p,
    checked: a,
    onChange: () => {
      v(w, N, p, !a);
    },
    ...b
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, y)));
const Ea = m.memo((t) => {
  const { config: a, updateConfig: p, loading: w, data: N, setParentConfig: y, isDashboard: v } = m.useContext(He), { showConfigConfirm: b } = t, [i, k] = m.useState(!0), F = (r) => r ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, l = da(a, p, !0);
  m.useEffect(() => {
    if (y) {
      const r = E();
      y(r);
    }
  }, [a]), m.useEffect(() => {
    if (!b) {
      let r = { ...a };
      delete r.newViz, p(r);
    }
  }, []), m.useEffect(() => {
    let r = ["<", ">", "<=", ">="];
    a.dataConditionalComparate !== "" ? r.indexOf(a.dataConditionalOperator) > -1 && isNaN(a.dataConditionalComparate) ? p({ ...a, invalidComparate: !0 }) : a.invalidComparate && p({ ...a, invalidComparate: !1 }) : p({ ...a, invalidComparate: !1 });
  }, [a.dataConditionalOperator, a.dataConditionalComparate]);
  const P = () => {
    k(!i), p({
      ...a,
      showEditorPanel: !i
    });
  }, E = () => {
    let r = JSON.parse(JSON.stringify(a));
    return delete r.newViz, delete r.runtime, r;
  }, x = () => {
    let r = a.filters ? [...a.filters] : [];
    r.push({ values: [] }), p({ ...a, filters: r });
  }, W = (r) => {
    let f = [...a.filters];
    f.splice(r, 1), p({ ...a, filters: f });
  }, M = (r, f, h) => {
    let g = [...a.filters];
    g[f][r] = h, p({ ...a, filters: g });
  }, A = (r = !0) => {
    let f = {};
    return N.map((h) => Object.keys(h).forEach((g) => f[g] = !0)), Object.keys(f);
  }, C = (r) => {
    let f = [];
    const h = a.filters[r].columnName;
    return N && h && (N.forEach(function(g) {
      g[h] !== void 0 && f.indexOf(g[h]) === -1 && f.push(g[h]);
    }), f.sort()), f;
  }, o = ["Waffle", "Gauge"], c = /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(K.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(z, { value: a.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: l, options: o, className: "cove-input" }), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(z, { value: a.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: l, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(T, { value: a.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: l }), /* @__PURE__ */ e.createElement(
    T,
    {
      type: "textarea",
      value: a.content,
      fieldName: "content",
      label: "Message",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(I, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(I.Target, null, /* @__PURE__ */ e.createElement(ue, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(I.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    T,
    {
      value: a.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(I, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(I.Target, null, /* @__PURE__ */ e.createElement(ue, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(I.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(K.Section, { icon: !a.dataColumn || !a.dataFunction ? /* @__PURE__ */ e.createElement(va, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(z, { style: F(!a.dataColumn), value: a.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: l, initial: "Select", options: A(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(z, { style: F(!a.dataFunction), value: a.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: l, initial: "Select", options: ye, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(z, { value: a.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: l, initial: "Select", options: A(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(z, { value: a.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: l, initial: "Select", options: Ta, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { value: a.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: l, className: a.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), a.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(U, { size: "small", value: a.customDenom, fieldName: "customDenom", updateField: l })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !a.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { value: a.dataDenom, fieldName: "dataDenom", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), a.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(z, { value: a.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: l, initial: "Select", options: A() }), /* @__PURE__ */ e.createElement(z, { value: a.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: l, initial: "Select", options: ye }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(T, { value: a.prefix, fieldName: "prefix", label: "Prefix", updateField: l })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(T, { value: a.suffix, fieldName: "suffix", label: "Suffix", updateField: l })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: l })))), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(T, { inline: !0, size: "small", value: a.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: l }), /* @__PURE__ */ e.createElement(U, { inline: !0, size: "small", value: a.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: l }), /* @__PURE__ */ e.createElement(U, { inline: !0, size: "small", label: "Show Denominator", value: a.showDenominator, fieldName: "showDenominator", updateField: l }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(I, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(I.Target, null, /* @__PURE__ */ e.createElement(ue, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(I.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), a.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, a.filters.map((r, f) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: f }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        W(f);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnName,
      onChange: (h) => {
        M("columnName", f, h.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    A().map((h, g) => /* @__PURE__ */ e.createElement("option", { value: h, key: g }, h))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnValue,
      onChange: (h) => {
        M("columnValue", f, h.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    C(f).map((h, g) => /* @__PURE__ */ e.createElement("option", { value: h, key: g }, h))
  ))))), /* @__PURE__ */ e.createElement(ia, { onClick: x, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(K.Section, { title: "Visual" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(z, { value: a.shape, fieldName: "shape", label: "Shape", updateField: l, options: ["circle", "square", "person"], className: "cove-input" }), a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: l }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(z, { value: a.orientation, fieldName: "orientation", label: "Layout", updateField: l, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { type: "number", value: a.fontSize, fieldName: "fontSize", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(z, { value: a.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: l, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, ga.map((r) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: r,
      key: r,
      onClick: () => {
        p({ ...a, theme: r });
      },
      className: a.theme === r ? "selected " + r : r
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(U, { inline: !0, size: "small", value: a.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: l }), /* @__PURE__ */ e.createElement(U, { inline: !0, size: "small", value: a.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: l }), /* @__PURE__ */ e.createElement(U, { size: "small", value: a.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: l }), /* @__PURE__ */ e.createElement(U, { size: "small", value: a.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: l }), /* @__PURE__ */ e.createElement(U, { size: "small", value: a.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: l }))));
  return w ? null : /* @__PURE__ */ e.createElement(je, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(de.Sidebar, { displayPanel: i, onBackClick: P, isDashboard: v, title: "Configure Waffle Chart", showEditorPanel: i }, c), t.children));
}), Q = {
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
}, Ca = (t, a) => {
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
const Na = ({ config: t, isEditor: a, link: p = "", showConfigConfirm: w, updateConfig: N }) => {
  const { title: y, theme: v, shape: b, nodeWidth: i, nodeSpacer: k, prefix: F, suffix: l, subtext: P, content: E, orientation: x, filters: W, dataColumn: M, dataFunction: A, dataConditionalColumn: C, dataConditionalOperator: o, dataConditionalComparate: c, customDenom: r, dataDenom: f, dataDenomColumn: h, dataDenomFunction: g, roundToPlace: H } = t, qe = t.visual.colors[t.theme];
  let Ne = t.fontSize ? { fontSize: t.fontSize + "px" } : null;
  const Qe = m.useCallback(() => {
    if (!M || !A)
      return "";
    const L = (n) => {
      if (Array.isArray(n) && n.length > 0) {
        const d = n.reduce((O, G) => O + G);
        return s(d);
      }
    }, D = (n) => {
      const d = n.length > 1 ? n.reduce((O, G) => O + G) / n.length : n[0];
      return s(d);
    }, B = (n) => {
      let d = {}, O = -1 / 0;
      for (let S = 0; S < n.length; S++)
        d[n[S]] ? d[n[S]] += 1 : d[n[S]] = 1, d[n[S]] > O && (O = d[n[S]]);
      let G = [];
      for (let S in d)
        d[S] === O && G.push(S);
      return G;
    }, V = (n) => {
      const d = Math.floor(n.length / 2), O = [...n].sort((S, ta) => S - ta), G = n.length % 2 !== 0 ? O[d] : (O[d - 1] + O[d]) / 2;
      return s(G);
    }, s = (n) => (H !== "" && !isNaN(H) && Number(H) > -1 && (n = Number(n).toFixed(Number(H))), n);
    let u = t.data;
    W.map((n) => {
      if (n.columnName && n.columnValue)
        u = u.filter(function(d) {
          return d[n.columnName] === n.columnValue;
        });
      else
        return !1;
    });
    let _ = [];
    if (C !== "" && o !== "" && c !== "")
      switch (o) {
        case "<":
          _ = u.filter((n) => n[C] < c);
          break;
        case ">":
          _ = u.filter((n) => n[C] > c);
          break;
        case "<=":
          _ = u.filter((n) => n[C] <= c);
          break;
        case ">=":
          _ = u.filter((n) => n[C] >= c);
          break;
        case "=":
          isNaN(Number(c)) ? _ = u.filter((n) => String(n[C]) === c) : _ = u.filter((n) => n[C] === c);
          break;
        case "≠":
          isNaN(Number(c)) ? _ = u.filter((n) => String(n[C]) !== c) : _ = u.filter((n) => n[C] !== c);
          break;
        default:
          _ = [];
      }
    const q = _.length > 0 ? _.map((n) => n[M]) : u.map((n) => n[M]), J = u.map((n) => n[h]);
    let R = q.filter((n) => {
      let d = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (d = !0), d;
    }).map(Number), $ = J.filter((n) => {
      let d = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (d = !0), d;
    }).map(Number), me = "";
    me = {
      [fe]: String(R.length),
      [Ce]: String(L(R)),
      [he]: String(D(R)),
      [ve]: V(R).toString(),
      [pe]: Math.max(...R).toString(),
      [ge]: Math.min(...R).toString(),
      [Ee]: B(R).join(", ")
    }[A];
    let X = null;
    const aa = {
      [fe]: String($.length),
      [Ce]: String(L($)),
      [he]: String(D($)),
      [ve]: V($).toString(),
      [pe]: Math.max(...$).toString(),
      [ge]: Math.min(...$).toString(),
      [Ee]: B($).join(", ")
    };
    return r && h && g ? X = aa[g] : X = f > 0 ? f : 100, [s(me / X * 100), X, s(me)];
  }, [M, A, t.data, W, C, o, c, r, h, g, H, f]), [j, ie, be] = Qe(), Je = m.useCallback(() => {
    let L = [], D = parseInt(i, 10), B = parseInt(k, 10);
    const V = (s, u, _, q, J) => {
      let R = u === "x" ? _ % 10 : u === "y" ? Math.floor(_ / 10) : null;
      return s === "circle" ? R * (q + J) + q / 2 : R * (q + J);
    };
    for (let s = 0; s < 100; s++) {
      let u = {
        shape: b,
        x: V(b, "x", s, D, B),
        y: V(b, "y", s, D, B),
        color: t.visual.colors[v],
        opacity: s + 1 > 100 - Math.round(j) ? 1 : 0.35
      };
      L.push(u);
    }
    return L.map(
      (s, u) => s.shape === "square" ? /* @__PURE__ */ e.createElement(_e, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * u}ms` }, x: s.x, y: s.y, width: D, height: D, fill: s.color, fillOpacity: s.opacity, key: u }) : s.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: { transform: `translateX(${s.x + D / 4}px) translateY(${s.y}px) scale(${D / 20})` },
          fill: s.color,
          fillOpacity: s.opacity,
          key: u,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(ma, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * u}ms` }, cx: s.x, cy: s.y, r: D / 2, fill: s.color, fillOpacity: s.opacity, key: u })
    );
  }, [v, j, b, i, k]), ce = m.useCallback(() => i * 10 + k * 9, [i, k]), { innerContainerClasses: xa, contentClasses: Xe } = ha(t), Ze = ua({
    domain: [0, ie],
    range: [0, t.gauge.width]
  }), Ke = ({ config: L, updateConfig: D }) => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, L.runtime.editorErrorMessage))), ea = ({ updateConfig: L, config: D }) => {
    const B = (V) => {
      V.preventDefault();
      let s = { ...D };
      delete s.newViz, L(s);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: B }, "I'm Done")));
  };
  return /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, /* @__PURE__ */ e.createElement(na, { title: y, config: t, classes: ["chart-title", `${t.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: Xe.join(" ") }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(Ke, { updateConfig: N, config: t }), t.newViz && w && /* @__PURE__ */ e.createElement(ea, { updateConfig: N, config: t }), /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: Ne }, F || " ", t.showPercent ? j : be, l ? l + " " : " ", " ", t.valueDescription, " ", t.showDenominator && ie ? ie : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Z(E)), /* @__PURE__ */ e.createElement("svg", { height: t.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(we, null, /* @__PURE__ */ e.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: t.gauge.width, height: t.gauge.height, fill: "#fff" }), /* @__PURE__ */ e.createElement(_e, { x: 0, y: 0, width: Ze(be), height: t.gauge.height, fill: qe }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Z(P)))), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-waffle-chart${x === "vertical" ? " cove-waffle-chart--verical" : ""}${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: ce() } }, /* @__PURE__ */ e.createElement("svg", { width: ce(), height: ce() }, /* @__PURE__ */ e.createElement(we, null, Je()))), (j || E) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, j && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: Ne }, F || null, j, l || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Z(E)), P && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Z(P)))))), p && p);
}, Y = ({ configUrl: t, config: a, isDashboard: p = !1, isEditor: w = !1, setConfig: N }) => {
  const [y, v] = m.useReducer(Ca, { config: a ?? Q, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: b, config: i, viewport: k, coveLoadedHasRan: F, container: l } = y, [P, E] = m.useState(!1), x = (o) => {
    Object.keys(Q).forEach((c) => {
      o[c] && typeof o[c] == "object" && !Array.isArray(o[c]) && (o[c] = { ...Q[c], ...o[c] });
    }), o.runtime = {}, o.runtime.uniqueId = Date.now(), o.runtime.editorErrorMessage = "", v({ type: "SET_CONFIG", payload: o });
  }, W = m.useCallback(async () => {
    let o = a || await (await fetch(t)).json(), c = o.data ?? {};
    o.dataUrl && (c = await oa(o.dataUrl)), o.data = c;
    const r = { ...await pa(o) };
    x({ ...Q, ...r }), v({ type: "SET_LOADING", payload: !1 });
  }, []), M = new la((o) => {
    for (let c of o) {
      let r = ra(c.contentRect.width * 2);
      v({ type: "SET_VIEWPORT", payload: r });
    }
  }), A = m.useCallback((o) => {
    o !== null && M.observe(o), v({ type: "SET_CONTAINER", payload: o });
  }, []);
  m.useEffect(() => {
    W().catch((o) => console.log(o));
  }, []), m.useEffect(() => {
    i && !F && l && (fa("cove_loaded", { config: i }), v({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [i, l]), m.useEffect(() => {
    W().catch((o) => console.log(o));
  }, []), a && m.useEffect(() => {
    a.dataUrl || x({ ...Q, ...a });
  }, [a.data]);
  let C = /* @__PURE__ */ e.createElement(sa, null);
  if (b === !1) {
    let o = /* @__PURE__ */ e.createElement(de.Responsive, { isEditor: w }, /* @__PURE__ */ e.createElement(Na, { config: i, isEditor: w, showConfigConfirm: P, updateConfig: x }));
    C = /* @__PURE__ */ e.createElement(e.Fragment, null, w && /* @__PURE__ */ e.createElement(Ea, { showConfigConfirm: P }, o), !w && o);
  }
  return /* @__PURE__ */ e.createElement(je, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement(He.Provider, { value: { config: i, updateConfig: x, loading: b, data: i.data, setParentConfig: N, isDashboard: p, outerContainerRef: A } }, /* @__PURE__ */ e.createElement(de.VisualizationWrapper, { config: i, isEditor: w, ref: A, showEditorPanel: i == null ? void 0 : i.showEditorPanel }, C)));
}, pe = "Max", fe = "Count", he = "Mean (Average)", ve = "Median", ge = "Min", Ee = "Mode", Ce = "Sum", ye = [fe, pe, he, ve, ge, Ee, Ce], ba = "<", _a = ">", wa = "<=", ya = ">=", Da = "=", Sa = "≠", Ta = [ba, _a, wa, ya, Da, Sa], at = {
  title: "Components/Templates/WaffleChart",
  component: Y
}, ae = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, te = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, ne = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, le = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, re = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Y, {
    ...t
  }))
}, oe = {
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
ae.parameters = {
  ...ae.parameters,
  docs: {
    ...(De = ae.parameters) == null ? void 0 : De.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Te = (Se = ae.parameters) == null ? void 0 : Se.docs) == null ? void 0 : Te.source
    }
  }
};
var xe, Ae, Oe;
te.parameters = {
  ...te.parameters,
  docs: {
    ...(xe = te.parameters) == null ? void 0 : xe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Oe = (Ae = te.parameters) == null ? void 0 : Ae.docs) == null ? void 0 : Oe.source
    }
  }
};
var ze, Fe, Re;
ne.parameters = {
  ...ne.parameters,
  docs: {
    ...(ze = ne.parameters) == null ? void 0 : ze.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Re = (Fe = ne.parameters) == null ? void 0 : Fe.docs) == null ? void 0 : Re.source
    }
  }
};
var ke, Pe, We;
le.parameters = {
  ...le.parameters,
  docs: {
    ...(ke = le.parameters) == null ? void 0 : ke.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(We = (Pe = le.parameters) == null ? void 0 : Pe.docs) == null ? void 0 : We.source
    }
  }
};
var Me, Le, Ie;
re.parameters = {
  ...re.parameters,
  docs: {
    ...(Me = re.parameters) == null ? void 0 : Me.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Ie = (Le = re.parameters) == null ? void 0 : Le.docs) == null ? void 0 : Ie.source
    }
  }
};
var Ue, Ge, Ye;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Ue = oe.parameters) == null ? void 0 : Ue.docs,
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
      ...(Ye = (Ge = oe.parameters) == null ? void 0 : Ge.docs) == null ? void 0 : Ye.source
    }
  }
};
var Be, Ve, $e;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(Be = se.parameters) == null ? void 0 : Be.docs,
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
      ...($e = (Ve = se.parameters) == null ? void 0 : Ve.docs) == null ? void 0 : $e.source
    }
  }
};
const tt = ["Example_Waffle_Chart_Count", "Waffle_Chart_Average_Max", "Waffle_Chart_Demographics", "Linear_Gauge", "Linear_Gauge_With_Message", "Person", "Gauge"];
export {
  ae as Example_Waffle_Chart_Count,
  se as Gauge,
  le as Linear_Gauge,
  re as Linear_Gauge_With_Message,
  oe as Person,
  te as Waffle_Chart_Average_Max,
  ne as Waffle_Chart_Demographics,
  tt as __namedExportsOrder,
  at as default
};
