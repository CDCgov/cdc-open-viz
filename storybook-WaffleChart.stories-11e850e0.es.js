import { r as f, R as e } from "./storybook-index-45401197.es.js";
import { T as ta, H as X } from "./storybook-index-e5bf02db.es.js";
import { a as na, g as la } from "./storybook-isSolr-cb863e7a.es.js";
import { f as oa } from "./storybook-fetchRemoteData-8fd8b50f.es.js";
import { E as Be, L as ra } from "./storybook-Loading-f180d060.es.js";
import { A as K } from "./storybook-Accordion-798fc615.es.js";
import { B as sa } from "./storybook-Button-d74e310e.es.js";
import { a as me } from "./storybook-Icon-736fb775.es.js";
import { T as F } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as D, a as W } from "./storybook-editor-1c1aae5a.es.js";
import { I as S } from "./storybook-InputSelect-20478396.es.js";
import { u as ia } from "./storybook-updateFieldFactory-c006040a.es.js";
import { L as ue, a as ca } from "./storybook-coveUpdateWorker-785760a1.es.js";
import { p as ma, u as ua } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { B as be, C as da, c as pa } from "./storybook-Circle-c4db6c75.es.js";
import { G as De } from "./storybook-Group-e6c0d0df.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-icon-check-50959323.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-year-bedc547d.es.js";
const Qe = f.createContext({}), fa = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01MDQgMjU2YzAgMTM2Ljk5Ny0xMTEuMDQzIDI0OC0yNDggMjQ4UzggMzkyLjk5NyA4IDI1NkM4IDExOS4wODMgMTE5LjA0MyA4IDI1NiA4czI0OCAxMTEuMDgzIDI0OCAyNDh6bS0yNDggNTBjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHoiLz48L3N2Zz4=", ha = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
f.memo(({ label: t, value: a, fieldName: h, section: _ = null, subsection: A = null, tooltip: R, updateField: C, ...y }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: h,
    checked: a,
    onChange: () => {
      C(_, A, h, !a);
    },
    ...y
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, R)));
const va = f.memo((t) => {
  const { config: a, updateConfig: h, loading: _, data: A, setParentConfig: R, isDashboard: C } = f.useContext(Qe), { showConfigConfirm: y } = t, [p, U] = f.useState(!0), O = (o) => o ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, l = ia(a, h, !0);
  f.useEffect(() => {
    if (R) {
      const o = B();
      R(o);
    }
  }, [a]), f.useEffect(() => {
    if (!y) {
      let o = { ...a };
      delete o.newViz, h(o);
    }
  }, []), f.useEffect(() => {
    let o = ["<", ">", "<=", ">="];
    a.dataConditionalComparate !== "" ? o.indexOf(a.dataConditionalOperator) > -1 && isNaN(a.dataConditionalComparate) ? h({ ...a, invalidComparate: !0 }) : a.invalidComparate && h({ ...a, invalidComparate: !1 }) : h({ ...a, invalidComparate: !1 });
  }, [a.dataConditionalOperator, a.dataConditionalComparate]);
  const I = () => {
    U(!p), h({
      ...a,
      showEditorPanel: !p
    });
  }, B = () => {
    let o = JSON.parse(JSON.stringify(a));
    return delete o.newViz, delete o.runtime, o;
  }, k = () => {
    let o = a.filters ? [...a.filters] : [];
    o.push({ values: [] }), h({ ...a, filters: o });
  }, j = (o) => {
    let u = [...a.filters];
    u.splice(o, 1), h({ ...a, filters: u });
  }, z = (o, u, d) => {
    let v = [...a.filters];
    v[u][o] = d, h({ ...a, filters: v });
  }, w = (o = !0) => {
    let u = {};
    return A.map((d) => Object.keys(d).forEach((v) => u[v] = !0)), Object.keys(u);
  }, g = (o) => {
    let u = [];
    const d = a.filters[o].columnName;
    return A && d && (A.forEach(function(v) {
      v[d] !== void 0 && u.indexOf(v[d]) === -1 && u.push(v[d]);
    }), u.sort()), u;
  }, r = ["Waffle", "Gauge"], i = /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(K.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(S, { value: a.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: l, options: r, className: "cove-input" }), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(S, { value: a.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: l, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(D, { value: a.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: l }), /* @__PURE__ */ e.createElement(
    D,
    {
      type: "textarea",
      value: a.content,
      fieldName: "content",
      label: "Message",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(F, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(F.Target, null, /* @__PURE__ */ e.createElement(me, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(F.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    D,
    {
      value: a.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(F, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(F.Target, null, /* @__PURE__ */ e.createElement(me, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(F.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(K.Section, { icon: !a.dataColumn || !a.dataFunction ? /* @__PURE__ */ e.createElement(fa, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(S, { style: O(!a.dataColumn), value: a.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: l, initial: "Select", options: w(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(S, { style: O(!a.dataFunction), value: a.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: l, initial: "Select", options: _e, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(S, { value: a.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: l, initial: "Select", options: w(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(S, { value: a.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: l, initial: "Select", options: wa, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { value: a.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: l, className: a.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), a.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(W, { size: "small", value: a.customDenom, fieldName: "customDenom", updateField: l })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !a.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { value: a.dataDenom, fieldName: "dataDenom", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), a.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(S, { value: a.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: l, initial: "Select", options: w() }), /* @__PURE__ */ e.createElement(S, { value: a.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: l, initial: "Select", options: _e }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(D, { value: a.prefix, fieldName: "prefix", label: "Prefix", updateField: l })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(D, { value: a.suffix, fieldName: "suffix", label: "Suffix", updateField: l })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(D, { type: "number", value: a.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: l })))), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(D, { inline: !0, size: "small", value: a.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: l }), /* @__PURE__ */ e.createElement(W, { inline: !0, size: "small", value: a.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: l }), /* @__PURE__ */ e.createElement(W, { inline: !0, size: "small", label: "Show Denominator", value: a.showDenominator, fieldName: "showDenominator", updateField: l }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(F, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(F.Target, null, /* @__PURE__ */ e.createElement(me, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(F.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), a.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, a.filters.map((o, u) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: u }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        j(u);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnName,
      onChange: (d) => {
        z("columnName", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    w().map((d, v) => /* @__PURE__ */ e.createElement("option", { value: d, key: v }, d))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnValue,
      onChange: (d) => {
        z("columnValue", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    g(u).map((d, v) => /* @__PURE__ */ e.createElement("option", { value: d, key: v }, d))
  ))))), /* @__PURE__ */ e.createElement(sa, { onClick: k, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(K.Section, { title: "Visual" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(S, { value: a.shape, fieldName: "shape", label: "Shape", updateField: l, options: ["circle", "square", "person"], className: "cove-input" }), a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { type: "number", value: a.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { type: "number", value: a.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: l }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(S, { value: a.orientation, fieldName: "orientation", label: "Layout", updateField: l, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(D, { type: "number", value: a.fontSize, fieldName: "fontSize", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(S, { value: a.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: l, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, ha.map((o) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: o,
      key: o,
      onClick: () => {
        h({ ...a, theme: o });
      },
      className: a.theme === o ? "selected " + o : o
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(W, { inline: !0, size: "small", value: a.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: l }), /* @__PURE__ */ e.createElement(W, { inline: !0, size: "small", value: a.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: l }), /* @__PURE__ */ e.createElement(W, { size: "small", value: a.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: l }), /* @__PURE__ */ e.createElement(W, { size: "small", value: a.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: l }), /* @__PURE__ */ e.createElement(W, { size: "small", value: a.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: l }))));
  return _ ? null : /* @__PURE__ */ e.createElement(Be, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(ue.Sidebar, { displayPanel: p, onBackClick: I, isDashboard: C, title: "Configure Waffle Chart", showEditorPanel: p }, i), t.children));
}), q = {
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
}, ga = (t, a) => {
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
const Ea = ({ config: t, isEditor: a, link: h = "", showConfigConfirm: _, updateConfig: A }) => {
  const { title: R, theme: C, shape: y, nodeWidth: p, nodeSpacer: U, prefix: O, suffix: l, subtext: I, content: B, orientation: k, filters: j, dataColumn: z, dataFunction: w, dataConditionalColumn: g, dataConditionalOperator: r, dataConditionalComparate: i, customDenom: o, dataDenom: u, dataDenomColumn: d, dataDenomFunction: v, roundToPlace: H } = t, He = t.visual.colors[t.theme];
  let Ne = t.fontSize ? { fontSize: t.fontSize + "px" } : null;
  const $e = f.useCallback(() => {
    if (!z || !w)
      return "";
    const M = (n) => {
      if (Array.isArray(n) && n.length > 0) {
        const m = n.reduce((T, L) => T + L);
        return s(m);
      }
    }, N = (n) => {
      const m = n.length > 1 ? n.reduce((T, L) => T + L) / n.length : n[0];
      return s(m);
    }, Y = (n) => {
      let m = {}, T = -1 / 0;
      for (let b = 0; b < n.length; b++)
        m[n[b]] ? m[n[b]] += 1 : m[n[b]] = 1, m[n[b]] > T && (T = m[n[b]]);
      let L = [];
      for (let b in m)
        m[b] === T && L.push(b);
      return L;
    }, G = (n) => {
      const m = Math.floor(n.length / 2), T = [...n].sort((b, aa) => b - aa), L = n.length % 2 !== 0 ? T[m] : (T[m - 1] + T[m]) / 2;
      return s(L);
    }, s = (n) => (H !== "" && !isNaN(H) && Number(H) > -1 && (n = Number(n).toFixed(Number(H))), n);
    let c = t.data;
    j.map((n) => {
      if (n.columnName && n.columnValue)
        c = c.filter(function(m) {
          return m[n.columnName] === n.columnValue;
        });
      else
        return !1;
    });
    let E = [];
    if (g !== "" && r !== "" && i !== "")
      switch (r) {
        case "<":
          E = c.filter((n) => n[g] < i);
          break;
        case ">":
          E = c.filter((n) => n[g] > i);
          break;
        case "<=":
          E = c.filter((n) => n[g] <= i);
          break;
        case ">=":
          E = c.filter((n) => n[g] >= i);
          break;
        case "=":
          isNaN(Number(i)) ? E = c.filter((n) => String(n[g]) === i) : E = c.filter((n) => n[g] === i);
          break;
        case "≠":
          isNaN(Number(i)) ? E = c.filter((n) => String(n[g]) !== i) : E = c.filter((n) => n[g] !== i);
          break;
        default:
          E = [];
      }
    const $ = E.length > 0 ? E.map((n) => n[z]) : c.map((n) => n[z]), Z = c.map((n) => n[d]);
    let x = $.filter((n) => {
      let m = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (m = !0), m;
    }).map(Number), V = Z.filter((n) => {
      let m = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (m = !0), m;
    }).map(Number), ce = "";
    ce = {
      [pe]: String(x.length),
      [Ee]: String(M(x)),
      [fe]: String(N(x)),
      [he]: G(x).toString(),
      [de]: Math.max(...x).toString(),
      [ve]: Math.min(...x).toString(),
      [ge]: Y(x).join(", ")
    }[w];
    let J = null;
    const ea = {
      [pe]: String(V.length),
      [Ee]: String(M(V)),
      [fe]: String(N(V)),
      [he]: G(V).toString(),
      [de]: Math.max(...V).toString(),
      [ve]: Math.min(...V).toString(),
      [ge]: Y(V).join(", ")
    };
    return o && d && v ? J = ea[v] : J = u > 0 ? u : 100, [s(ce / J * 100), J, s(ce)];
  }, [z, w, t.data, j, g, r, i, o, d, v, H, u]), [Q, se, Ce] = $e(), qe = f.useCallback(() => {
    let M = [], N = parseInt(p, 10), Y = parseInt(U, 10);
    const G = (s, c, E, $, Z) => {
      let x = c === "x" ? E % 10 : c === "y" ? Math.floor(E / 10) : null;
      return s === "circle" ? x * ($ + Z) + $ / 2 : x * ($ + Z);
    };
    for (let s = 0; s < 100; s++) {
      let c = {
        shape: y,
        x: G(y, "x", s, N, Y),
        y: G(y, "y", s, N, Y),
        color: t.visual.colors[C],
        opacity: s + 1 > 100 - Math.round(Q) ? 1 : 0.35
      };
      M.push(c);
    }
    return M.map(
      (s, c) => s.shape === "square" ? /* @__PURE__ */ e.createElement(be, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * c}ms` }, x: s.x, y: s.y, width: N, height: N, fill: s.color, fillOpacity: s.opacity, key: c }) : s.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: { transform: `translateX(${s.x + N / 4}px) translateY(${s.y}px) scale(${N / 20})` },
          fill: s.color,
          fillOpacity: s.opacity,
          key: c,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(da, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * c}ms` }, cx: s.x, cy: s.y, r: N / 2, fill: s.color, fillOpacity: s.opacity, key: c })
    );
  }, [C, Q, y, p, U]), ie = f.useCallback(() => p * 10 + U * 9, [p, U]), { innerContainerClasses: Ta, contentClasses: Ze } = ua(t), Je = pa({
    domain: [0, se],
    range: [0, t.gauge.width]
  }), Xe = ({ config: M, updateConfig: N }) => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, M.runtime.editorErrorMessage))), Ke = ({ updateConfig: M, config: N }) => {
    const Y = (G) => {
      G.preventDefault();
      let s = { ...N };
      delete s.newViz, M(s);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: Y }, "I'm Done")));
  };
  return /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, /* @__PURE__ */ e.createElement(ta, { title: R, config: t, classes: ["chart-title", `${t.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: Ze.join(" ") }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(Xe, { updateConfig: A, config: t }), t.newViz && _ && /* @__PURE__ */ e.createElement(Ke, { updateConfig: A, config: t }), /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: Ne }, O || " ", t.showPercent ? Q : Ce, l ? l + " " : " ", " ", t.valueDescription, " ", t.showDenominator && se ? se : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, X(B)), /* @__PURE__ */ e.createElement("svg", { height: t.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(De, null, /* @__PURE__ */ e.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: t.gauge.width, height: t.gauge.height, fill: "#fff" }), /* @__PURE__ */ e.createElement(be, { x: 0, y: 0, width: Je(Ce), height: t.gauge.height, fill: He }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, X(I)))), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-waffle-chart${k === "vertical" ? " cove-waffle-chart--verical" : ""}${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: ie() } }, /* @__PURE__ */ e.createElement("svg", { width: ie(), height: ie() }, /* @__PURE__ */ e.createElement(De, null, qe()))), (Q || B) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, Q && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: Ne }, O || null, Q, l || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, X(B)), I && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, X(I)))))), h && h);
}, P = ({ configUrl: t, config: a, isDashboard: h = !1, isEditor: _ = !1, setConfig: A }) => {
  const [R, C] = f.useReducer(ga, { config: a ?? q, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: y, config: p, viewport: U, coveLoadedHasRan: O, container: l } = R, [I, B] = f.useState(!1), k = (r) => {
    Object.keys(q).forEach((i) => {
      r[i] && typeof r[i] == "object" && !Array.isArray(r[i]) && (r[i] = { ...q[i], ...r[i] });
    }), r.runtime = {}, r.runtime.uniqueId = Date.now(), r.runtime.editorErrorMessage = "", C({ type: "SET_CONFIG", payload: r });
  }, j = f.useCallback(async () => {
    let r = a || await (await fetch(t)).json(), i = r.data ?? {};
    r.dataUrl && (i = await oa(r.dataUrl)), r.data = i;
    const o = { ...await ca(r) };
    k({ ...q, ...o }), C({ type: "SET_LOADING", payload: !1 });
  }, []), z = new na((r) => {
    for (let i of r) {
      let o = la(i.contentRect.width * 2);
      C({ type: "SET_VIEWPORT", payload: o });
    }
  }), w = f.useCallback((r) => {
    r !== null && z.observe(r), C({ type: "SET_CONTAINER", payload: r });
  }, []);
  f.useEffect(() => {
    j().catch((r) => console.log(r));
  }, []), f.useEffect(() => {
    p && !O && l && (ma("cove_loaded", { config: p }), C({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [p, l]), f.useEffect(() => {
    j().catch((r) => console.log(r));
  }, []), a && f.useEffect(() => {
    a.dataUrl || k({ ...q, ...a });
  }, [a.data]);
  let g = /* @__PURE__ */ e.createElement(ra, null);
  if (y === !1) {
    let r = /* @__PURE__ */ e.createElement(ue.Responsive, { isEditor: _ }, /* @__PURE__ */ e.createElement(Ea, { config: p, isEditor: _, showConfigConfirm: I, updateConfig: k }));
    g = /* @__PURE__ */ e.createElement(e.Fragment, null, _ && /* @__PURE__ */ e.createElement(va, { showConfigConfirm: I }, r), !_ && r);
  }
  return /* @__PURE__ */ e.createElement(Be, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement(Qe.Provider, { value: { config: p, updateConfig: k, loading: y, data: p.data, setParentConfig: A, isDashboard: h, outerContainerRef: w } }, /* @__PURE__ */ e.createElement(ue.VisualizationWrapper, { config: p, isEditor: _, ref: w, showEditorPanel: p == null ? void 0 : p.showEditorPanel }, g)));
}, de = "Max", pe = "Count", fe = "Mean (Average)", he = "Median", ve = "Min", ge = "Mode", Ee = "Sum", _e = [pe, de, fe, he, ve, ge, Ee], Na = "<", Ca = ">", ba = "<=", Da = ">=", _a = "=", ya = "≠", wa = [Na, Ca, ba, Da, _a, ya], et = {
  title: "Components/Templates/WaffleChart",
  component: P
}, ee = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, {
    ...t
  }))
}, ae = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, {
    ...t
  }))
}, te = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, {
    ...t
  }))
}, ne = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, {
    ...t
  }))
}, le = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, {
    ...t
  }))
}, re = {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, {
    ...t
  }))
};
var ye, we, Te;
ee.parameters = {
  ...ee.parameters,
  docs: {
    ...(ye = ee.parameters) == null ? void 0 : ye.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(Te = (we = ee.parameters) == null ? void 0 : we.docs) == null ? void 0 : Te.source
    }
  }
};
var Se, Ae, xe;
ae.parameters = {
  ...ae.parameters,
  docs: {
    ...(Se = ae.parameters) == null ? void 0 : Se.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(xe = (Ae = ae.parameters) == null ? void 0 : Ae.docs) == null ? void 0 : xe.source
    }
  }
};
var Oe, ze, Me;
te.parameters = {
  ...te.parameters,
  docs: {
    ...(Oe = te.parameters) == null ? void 0 : Oe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(Me = (ze = te.parameters) == null ? void 0 : ze.docs) == null ? void 0 : Me.source
    }
  }
};
var Fe, Re, Ie;
ne.parameters = {
  ...ne.parameters,
  docs: {
    ...(Fe = ne.parameters) == null ? void 0 : Fe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(Ie = (Re = ne.parameters) == null ? void 0 : Re.docs) == null ? void 0 : Ie.source
    }
  }
};
var ke, Le, We;
le.parameters = {
  ...le.parameters,
  docs: {
    ...(ke = le.parameters) == null ? void 0 : ke.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(We = (Le = le.parameters) == null ? void 0 : Le.docs) == null ? void 0 : We.source
    }
  }
};
var Pe, Ue, je;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Pe = oe.parameters) == null ? void 0 : Pe.docs,
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
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(je = (Ue = oe.parameters) == null ? void 0 : Ue.docs) == null ? void 0 : je.source
    }
  }
};
var Ye, Ge, Ve;
re.parameters = {
  ...re.parameters,
  docs: {
    ...(Ye = re.parameters) == null ? void 0 : Ye.docs,
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
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(Ve = (Ge = re.parameters) == null ? void 0 : Ge.docs) == null ? void 0 : Ve.source
    }
  }
};
const at = ["Example_Waffle_Chart_Count", "Waffle_Chart_Average_Max", "Waffle_Chart_Demographics", "Linear_Gauge", "Linear_Gauge_With_Message", "Person", "Gauge"];
export {
  ee as Example_Waffle_Chart_Count,
  re as Gauge,
  ne as Linear_Gauge,
  le as Linear_Gauge_With_Message,
  oe as Person,
  ae as Waffle_Chart_Average_Max,
  te as Waffle_Chart_Demographics,
  at as __namedExportsOrder,
  et as default
};
