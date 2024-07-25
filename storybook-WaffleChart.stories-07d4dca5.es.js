import { r as p, R as e } from "./storybook-index-45401197.es.js";
import { T as ta, H as Z } from "./storybook-index-e5bf02db.es.js";
import { a as na, g as la } from "./storybook-isSolr-cb863e7a.es.js";
import { f as ra } from "./storybook-fetchRemoteData-8fd8b50f.es.js";
import { E as je, L as oa } from "./storybook-Loading-f180d060.es.js";
import { A as K } from "./storybook-Accordion-0408a951.es.js";
import { B as sa } from "./storybook-Button-d74e310e.es.js";
import { a as me } from "./storybook-Icon-96a1fdd8.es.js";
import { T as R } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as _, a as L } from "./storybook-editor-8c6d0e73.es.js";
import { I as T } from "./storybook-InputSelect-20478396.es.js";
import { u as ia } from "./storybook-updateFieldFactory-c006040a.es.js";
import { L as ue, a as ca } from "./storybook-coveUpdateWorker-83f86c17.es.js";
import { p as ma, u as ua } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { B as be, C as da, c as pa } from "./storybook-Circle-4d1a558c.es.js";
import { G as _e } from "./storybook-Group-e6c0d0df.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-icon-check-0ef17e76.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-year-24bd1dc7.es.js";
const He = p.createContext({}), fa = (t) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...t }, /* @__PURE__ */ p.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), ha = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
p.memo(({ label: t, value: a, fieldName: h, section: w = null, subsection: x = null, tooltip: k, updateField: N, ...y }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: h,
    checked: a,
    onChange: () => {
      N(w, x, h, !a);
    },
    ...y
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, k)));
const va = p.memo((t) => {
  const { config: a, updateConfig: h, loading: w, data: x, setParentConfig: k, isDashboard: N } = p.useContext(He), { showConfigConfirm: y } = t, [f, U] = p.useState(!0), O = (r) => r ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, l = ia(a, h, !0);
  p.useEffect(() => {
    if (k) {
      const r = j();
      k(r);
    }
  }, [a]), p.useEffect(() => {
    if (!y) {
      let r = { ...a };
      delete r.newViz, h(r);
    }
  }, []), p.useEffect(() => {
    let r = ["<", ">", "<=", ">="];
    a.dataConditionalComparate !== "" ? r.indexOf(a.dataConditionalOperator) > -1 && isNaN(a.dataConditionalComparate) ? h({ ...a, invalidComparate: !0 }) : a.invalidComparate && h({ ...a, invalidComparate: !1 }) : h({ ...a, invalidComparate: !1 });
  }, [a.dataConditionalOperator, a.dataConditionalComparate]);
  const W = () => {
    U(!f), h({
      ...a,
      showEditorPanel: !f
    });
  }, j = () => {
    let r = JSON.parse(JSON.stringify(a));
    return delete r.newViz, delete r.runtime, r;
  }, P = () => {
    let r = a.filters ? [...a.filters] : [];
    r.push({ values: [] }), h({ ...a, filters: r });
  }, G = (r) => {
    let u = [...a.filters];
    u.splice(r, 1), h({ ...a, filters: u });
  }, z = (r, u, d) => {
    let v = [...a.filters];
    v[u][r] = d, h({ ...a, filters: v });
  }, D = (r = !0) => {
    let u = {};
    return x.map((d) => Object.keys(d).forEach((v) => u[v] = !0)), Object.keys(u);
  }, g = (r) => {
    let u = [];
    const d = a.filters[r].columnName;
    return x && d && (x.forEach(function(v) {
      v[d] !== void 0 && u.indexOf(v[d]) === -1 && u.push(v[d]);
    }), u.sort()), u;
  }, o = ["Waffle", "Gauge"], i = /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(K.Section, { title: "General" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ e.createElement(T, { value: a.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: l, options: o, className: "cove-input" }), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(T, { value: a.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: l, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ e.createElement(_, { value: a.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: l }), /* @__PURE__ */ e.createElement(
    _,
    {
      type: "textarea",
      value: a.content,
      fieldName: "content",
      label: "Message",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(me, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    _,
    {
      value: a.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(me, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ e.createElement(K.Section, { icon: !a.dataColumn || !a.dataFunction ? /* @__PURE__ */ e.createElement(fa, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(T, { style: O(!a.dataColumn), value: a.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: l, initial: "Select", options: D(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement(T, { style: O(!a.dataFunction), value: a.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: l, initial: "Select", options: we, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { value: a.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: l, initial: "Select", options: D(), className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(T, { value: a.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: l, initial: "Select", options: Da, className: "cove-input" })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { value: a.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: l, className: a.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), a.invalidComparate && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ e.createElement(L, { size: "small", value: a.customDenom, fieldName: "customDenom", updateField: l })))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section" }, !a.customDenom && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { value: a.dataDenom, fieldName: "dataDenom", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), a.customDenom && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(T, { value: a.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: l, initial: "Select", options: D() }), /* @__PURE__ */ e.createElement(T, { value: a.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: l, initial: "Select", options: we }))), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(_, { value: a.prefix, fieldName: "prefix", label: "Prefix", updateField: l })), /* @__PURE__ */ e.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ e.createElement(_, { value: a.suffix, fieldName: "suffix", label: "Suffix", updateField: l })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(_, { type: "number", value: a.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: l })))), a.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(_, { inline: !0, size: "small", value: a.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: l }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", value: a.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: l }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", label: "Show Denominator", value: a.showDenominator, fieldName: "showDenominator", updateField: l }))), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(me, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), a.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, a.filters.map((r, u) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: u }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        G(u);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnName,
      onChange: (d) => {
        z("columnName", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    D().map((d, v) => /* @__PURE__ */ e.createElement("option", { value: d, key: v }, d))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnValue,
      onChange: (d) => {
        z("columnValue", u, d.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    g(u).map((d, v) => /* @__PURE__ */ e.createElement("option", { value: d, key: v }, d))
  ))))), /* @__PURE__ */ e.createElement(sa, { onClick: P, fluid: !0 }, "Add Filter")), /* @__PURE__ */ e.createElement(K.Section, { title: "Visual" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(T, { value: a.shape, fieldName: "shape", label: "Shape", updateField: l, options: ["circle", "square", "person"], className: "cove-input" }), a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { type: "number", value: a.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { type: "number", value: a.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: l }))), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, a.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement(T, { value: a.orientation, fieldName: "orientation", label: "Layout", updateField: l, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ e.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ e.createElement(_, { type: "number", value: a.fontSize, fieldName: "fontSize", updateField: l })), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ e.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ e.createElement(T, { value: a.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: l, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, ha.map((r) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: r,
      key: r,
      onClick: () => {
        h({ ...a, theme: r });
      },
      className: a.theme === r ? "selected " + r : r
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", value: a.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: l }), /* @__PURE__ */ e.createElement(L, { inline: !0, size: "small", value: a.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: l }), /* @__PURE__ */ e.createElement(L, { size: "small", value: a.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: l }), /* @__PURE__ */ e.createElement(L, { size: "small", value: a.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: l }), /* @__PURE__ */ e.createElement(L, { size: "small", value: a.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: l }))));
  return w ? null : /* @__PURE__ */ e.createElement(je, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(ue.Sidebar, { displayPanel: f, onBackClick: W, isDashboard: N, title: "Configure Waffle Chart", showEditorPanel: f }, i), t.children));
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
const Ea = ({ config: t, isEditor: a, link: h = "", showConfigConfirm: w, updateConfig: x }) => {
  const { title: k, theme: N, shape: y, nodeWidth: f, nodeSpacer: U, prefix: O, suffix: l, subtext: W, content: j, orientation: P, filters: G, dataColumn: z, dataFunction: D, dataConditionalColumn: g, dataConditionalOperator: o, dataConditionalComparate: i, customDenom: r, dataDenom: u, dataDenomColumn: d, dataDenomFunction: v, roundToPlace: $ } = t, $e = t.visual.colors[t.theme];
  let Ce = t.fontSize ? { fontSize: t.fontSize + "px" } : null;
  const qe = p.useCallback(() => {
    if (!z || !D)
      return "";
    const F = (n) => {
      if (Array.isArray(n) && n.length > 0) {
        const m = n.reduce((S, M) => S + M);
        return s(m);
      }
    }, C = (n) => {
      const m = n.length > 1 ? n.reduce((S, M) => S + M) / n.length : n[0];
      return s(m);
    }, V = (n) => {
      let m = {}, S = -1 / 0;
      for (let b = 0; b < n.length; b++)
        m[n[b]] ? m[n[b]] += 1 : m[n[b]] = 1, m[n[b]] > S && (S = m[n[b]]);
      let M = [];
      for (let b in m)
        m[b] === S && M.push(b);
      return M;
    }, Y = (n) => {
      const m = Math.floor(n.length / 2), S = [...n].sort((b, aa) => b - aa), M = n.length % 2 !== 0 ? S[m] : (S[m - 1] + S[m]) / 2;
      return s(M);
    }, s = (n) => ($ !== "" && !isNaN($) && Number($) > -1 && (n = Number(n).toFixed(Number($))), n);
    let c = t.data;
    G.map((n) => {
      if (n.columnName && n.columnValue)
        c = c.filter(function(m) {
          return m[n.columnName] === n.columnValue;
        });
      else
        return !1;
    });
    let E = [];
    if (g !== "" && o !== "" && i !== "")
      switch (o) {
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
    const q = E.length > 0 ? E.map((n) => n[z]) : c.map((n) => n[z]), J = c.map((n) => n[d]);
    let A = q.filter((n) => {
      let m = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (m = !0), m;
    }).map(Number), B = J.filter((n) => {
      let m = !1;
      return (Number(n) || Number.isFinite(Number(n))) && (m = !0), m;
    }).map(Number), ce = "";
    ce = {
      [pe]: String(A.length),
      [Ee]: String(F(A)),
      [fe]: String(C(A)),
      [he]: Y(A).toString(),
      [de]: Math.max(...A).toString(),
      [ve]: Math.min(...A).toString(),
      [ge]: V(A).join(", ")
    }[D];
    let X = null;
    const ea = {
      [pe]: String(B.length),
      [Ee]: String(F(B)),
      [fe]: String(C(B)),
      [he]: Y(B).toString(),
      [de]: Math.max(...B).toString(),
      [ve]: Math.min(...B).toString(),
      [ge]: V(B).join(", ")
    };
    return r && d && v ? X = ea[v] : X = u > 0 ? u : 100, [s(ce / X * 100), X, s(ce)];
  }, [z, D, t.data, G, g, o, i, r, d, v, $, u]), [H, se, Ne] = qe(), Qe = p.useCallback(() => {
    let F = [], C = parseInt(f, 10), V = parseInt(U, 10);
    const Y = (s, c, E, q, J) => {
      let A = c === "x" ? E % 10 : c === "y" ? Math.floor(E / 10) : null;
      return s === "circle" ? A * (q + J) + q / 2 : A * (q + J);
    };
    for (let s = 0; s < 100; s++) {
      let c = {
        shape: y,
        x: Y(y, "x", s, C, V),
        y: Y(y, "y", s, C, V),
        color: t.visual.colors[N],
        opacity: s + 1 > 100 - Math.round(H) ? 1 : 0.35
      };
      F.push(c);
    }
    return F.map(
      (s, c) => s.shape === "square" ? /* @__PURE__ */ e.createElement(be, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * c}ms` }, x: s.x, y: s.y, width: C, height: C, fill: s.color, fillOpacity: s.opacity, key: c }) : s.shape === "person" ? /* @__PURE__ */ e.createElement(
        "path",
        {
          style: { transform: `translateX(${s.x + C / 4}px) translateY(${s.y}px) scale(${C / 20})` },
          fill: s.color,
          fillOpacity: s.opacity,
          key: c,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,\r
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,\r
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ e.createElement(da, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * c}ms` }, cx: s.x, cy: s.y, r: C / 2, fill: s.color, fillOpacity: s.opacity, key: c })
    );
  }, [N, H, y, f, U]), ie = p.useCallback(() => f * 10 + U * 9, [f, U]), { innerContainerClasses: Sa, contentClasses: Je } = ua(t), Xe = pa({
    domain: [0, se],
    range: [0, t.gauge.width]
  }), Ze = ({ config: F, updateConfig: C }) => /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, F.runtime.editorErrorMessage))), Ke = ({ updateConfig: F, config: C }) => {
    const V = (Y) => {
      Y.preventDefault();
      let s = { ...C };
      delete s.newViz, F(s);
    };
    return /* @__PURE__ */ e.createElement("section", { className: "waiting" }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: V }, "I'm Done")));
  };
  return /* @__PURE__ */ e.createElement("div", { className: "cove-component__content" }, /* @__PURE__ */ e.createElement(ta, { title: k, config: t, classes: ["chart-title", `${t.theme}`, "mb-0"] }), /* @__PURE__ */ e.createElement("div", { className: Je.join(" ") }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(Ze, { updateConfig: x, config: t }), t.newViz && w && /* @__PURE__ */ e.createElement(Ke, { updateConfig: x, config: t }), /* @__PURE__ */ e.createElement("div", { className: "cove-component__content-wrap" }, t.visualizationType === "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-gauge-chart${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: Ce }, O || " ", t.showPercent ? H : Ne, l ? l + " " : " ", " ", t.valueDescription, " ", t.showDenominator && se ? se : " "), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Z(j)), /* @__PURE__ */ e.createElement("svg", { height: t.gauge.height, width: "100%" }, /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: t.gauge.width, height: t.gauge.height, fill: "#fff" }), /* @__PURE__ */ e.createElement(be, { x: 0, y: 0, width: Xe(Ne), height: t.gauge.height, fill: $e }))), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Z(W)))), t.visualizationType !== "Gauge" && /* @__PURE__ */ e.createElement("div", { className: `cove-waffle-chart${P === "vertical" ? " cove-waffle-chart--verical" : ""}${t.overallFontSize ? " font-" + t.overallFontSize : ""}` }, /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__chart", style: { width: ie() } }, /* @__PURE__ */ e.createElement("svg", { width: ie(), height: ie() }, /* @__PURE__ */ e.createElement(_e, null, Qe()))), (H || j) && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data" }, H && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--primary", style: Ce }, O || null, H, l || null), /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__data--text" }, Z(j)), W && /* @__PURE__ */ e.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Z(W)))))), h && h);
}, I = ({ configUrl: t, config: a, isDashboard: h = !1, isEditor: w = !1, setConfig: x }) => {
  const [k, N] = p.useReducer(ga, { config: a ?? Q, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: y, config: f, viewport: U, coveLoadedHasRan: O, container: l } = k, [W, j] = p.useState(!1), P = (o) => {
    Object.keys(Q).forEach((i) => {
      o[i] && typeof o[i] == "object" && !Array.isArray(o[i]) && (o[i] = { ...Q[i], ...o[i] });
    }), o.runtime = {}, o.runtime.uniqueId = Date.now(), o.runtime.editorErrorMessage = "", N({ type: "SET_CONFIG", payload: o });
  }, G = p.useCallback(async () => {
    let o = a || await (await fetch(t)).json(), i = o.data ?? {};
    o.dataUrl && (i = await ra(o.dataUrl)), o.data = i;
    const r = { ...await ca(o) };
    P({ ...Q, ...r }), N({ type: "SET_LOADING", payload: !1 });
  }, []), z = new na((o) => {
    for (let i of o) {
      let r = la(i.contentRect.width * 2);
      N({ type: "SET_VIEWPORT", payload: r });
    }
  }), D = p.useCallback((o) => {
    o !== null && z.observe(o), N({ type: "SET_CONTAINER", payload: o });
  }, []);
  p.useEffect(() => {
    G().catch((o) => console.log(o));
  }, []), p.useEffect(() => {
    f && !O && l && (ma("cove_loaded", { config: f }), N({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [f, l]), p.useEffect(() => {
    G().catch((o) => console.log(o));
  }, []), a && p.useEffect(() => {
    a.dataUrl || P({ ...Q, ...a });
  }, [a.data]);
  let g = /* @__PURE__ */ e.createElement(oa, null);
  if (y === !1) {
    let o = /* @__PURE__ */ e.createElement(ue.Responsive, { isEditor: w }, /* @__PURE__ */ e.createElement(Ea, { config: f, isEditor: w, showConfigConfirm: W, updateConfig: P }));
    g = /* @__PURE__ */ e.createElement(e.Fragment, null, w && /* @__PURE__ */ e.createElement(va, { showConfigConfirm: W }, o), !w && o);
  }
  return /* @__PURE__ */ e.createElement(je, { component: "WaffleChart" }, /* @__PURE__ */ e.createElement(He.Provider, { value: { config: f, updateConfig: P, loading: y, data: f.data, setParentConfig: x, isDashboard: h, outerContainerRef: D } }, /* @__PURE__ */ e.createElement(ue.VisualizationWrapper, { config: f, isEditor: w, ref: D, showEditorPanel: f == null ? void 0 : f.showEditorPanel }, g)));
}, de = "Max", pe = "Count", fe = "Mean (Average)", he = "Median", ve = "Min", ge = "Mode", Ee = "Sum", we = [pe, de, fe, he, ve, ge, Ee], Ca = "<", Na = ">", ba = "<=", _a = ">=", wa = "=", ya = "≠", Da = [Ca, Na, ba, _a, wa, ya], et = {
  title: "Components/Templates/WaffleChart",
  component: I
}, ee = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(I, {
    ...t
  }))
}, ae = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(I, {
    ...t
  }))
}, te = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(I, {
    ...t
  }))
}, ne = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(I, {
    ...t
  }))
}, le = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json"
  },
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(I, {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(I, {
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
  render: (t) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(I, {
    ...t
  }))
};
var ye, De, Se;
ee.parameters = {
  ...ee.parameters,
  docs: {
    ...(ye = ee.parameters) == null ? void 0 : ye.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Se = (De = ee.parameters) == null ? void 0 : De.docs) == null ? void 0 : Se.source
    }
  }
};
var Te, xe, Ae;
ae.parameters = {
  ...ae.parameters,
  docs: {
    ...(Te = ae.parameters) == null ? void 0 : Te.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Ae = (xe = ae.parameters) == null ? void 0 : xe.docs) == null ? void 0 : Ae.source
    }
  }
};
var Oe, ze, Fe;
te.parameters = {
  ...te.parameters,
  docs: {
    ...(Oe = te.parameters) == null ? void 0 : Oe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Fe = (ze = te.parameters) == null ? void 0 : ze.docs) == null ? void 0 : Fe.source
    }
  }
};
var Re, ke, We;
ne.parameters = {
  ...ne.parameters,
  docs: {
    ...(Re = ne.parameters) == null ? void 0 : Re.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(We = (ke = ne.parameters) == null ? void 0 : ke.docs) == null ? void 0 : We.source
    }
  }
};
var Pe, Me, Le;
le.parameters = {
  ...le.parameters,
  docs: {
    ...(Pe = le.parameters) == null ? void 0 : Pe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(Le = (Me = le.parameters) == null ? void 0 : Me.docs) == null ? void 0 : Le.source
    }
  }
};
var Ie, Ue, Ge;
re.parameters = {
  ...re.parameters,
  docs: {
    ...(Ie = re.parameters) == null ? void 0 : Ie.docs,
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
      ...(Ge = (Ue = re.parameters) == null ? void 0 : Ue.docs) == null ? void 0 : Ge.source
    }
  }
};
var Ve, Ye, Be;
oe.parameters = {
  ...oe.parameters,
  docs: {
    ...(Ve = oe.parameters) == null ? void 0 : Ve.docs,
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
      ...(Be = (Ye = oe.parameters) == null ? void 0 : Ye.docs) == null ? void 0 : Be.source
    }
  }
};
const at = ["Example_Waffle_Chart_Count", "Waffle_Chart_Average_Max", "Waffle_Chart_Demographics", "Linear_Gauge", "Linear_Gauge_With_Message", "Person", "Gauge"];
export {
  ee as Example_Waffle_Chart_Count,
  oe as Gauge,
  ne as Linear_Gauge,
  le as Linear_Gauge_With_Message,
  re as Person,
  ae as Waffle_Chart_Average_Max,
  te as Waffle_Chart_Demographics,
  at as __namedExportsOrder,
  et as default
};
