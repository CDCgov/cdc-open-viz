import { a as n, j as e, F as ee } from "./storybook-jsx-runtime-36872362.es.js";
import { r as f } from "./storybook-index-45401197.es.js";
import { T as Ee, H as Z } from "./storybook-index-88ba5a71.es.js";
import { f as ze, b as Fe, g as Oe } from "./storybook-getViewport-7dc50c16.es.js";
import { E as Ce, L as Re } from "./storybook-viewports-678eca6e.es.js";
import { A as K } from "./storybook-Accordion-e48d2b15.es.js";
import { B as Pe } from "./storybook-Button-9d1b8d73.es.js";
import { a as ne } from "./storybook-Icon-5df8fab3.es.js";
import { T as P } from "./storybook-Tooltip-b155742f.es.js";
import { I as S, a as V } from "./storybook-editor-8c1f9105.es.js";
import { I as x } from "./storybook-InputSelect-f5896759.es.js";
import { u as Me } from "./storybook-updateFieldFactory-c006040a.es.js";
import { L as ie, c as Ie, p as ke, u as Le } from "./storybook-coveUpdateWorker-f0e4685a.es.js";
import { B as fe, C as Ve, c as We } from "./storybook-linear-bc5fb9aa.es.js";
import { G as ve } from "./storybook-linear-ef79b404.es.js";
const ge = f.createContext({}), Ue = (l) => /* @__PURE__ */ f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...l }, /* @__PURE__ */ f.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Ge = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
f.memo(({ label: l, value: a, fieldName: v, section: T = null, subsection: E = null, tooltip: M, updateField: b, ...D }) => /* @__PURE__ */ n("label", { className: "checkbox", children: [
  /* @__PURE__ */ e(
    "input",
    {
      type: "checkbox",
      name: v,
      checked: a,
      onChange: () => {
        b(T, E, v, !a);
      },
      ...D
    }
  ),
  /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: l }),
  /* @__PURE__ */ e("span", { className: "cove-icon", children: M })
] }));
const Be = f.memo((l) => {
  const { config: a, updateConfig: v, loading: T, data: E, setParentConfig: M, isDashboard: b } = f.useContext(ge), { showConfigConfirm: D } = l, [p, W] = f.useState(!0), F = (o) => o ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, i = Me(a, v, !0);
  f.useEffect(() => {
    if (M) {
      const o = B();
      M(o);
    }
  }, [a]), f.useEffect(() => {
    if (!D) {
      let o = { ...a };
      delete o.newViz, v(o);
    }
  }, []), f.useEffect(() => {
    let o = ["<", ">", "<=", ">="];
    a.dataConditionalComparate !== "" ? o.indexOf(a.dataConditionalOperator) > -1 && isNaN(a.dataConditionalComparate) ? v({ ...a, invalidComparate: !0 }) : a.invalidComparate && v({ ...a, invalidComparate: !1 }) : v({ ...a, invalidComparate: !1 });
  }, [a.dataConditionalOperator, a.dataConditionalComparate]);
  const I = () => {
    W(!p), v({
      ...a,
      showEditorPanel: !p
    });
  }, B = () => {
    let o = JSON.parse(JSON.stringify(a));
    return delete o.newViz, delete o.runtime, o;
  }, k = () => {
    let o = a.filters ? [...a.filters] : [];
    o.push({ values: [] }), v({ ...a, filters: o });
  }, H = (o) => {
    let u = [...a.filters];
    u.splice(o, 1), v({ ...a, filters: u });
  }, O = (o, u, h) => {
    let N = [...a.filters];
    N[u][o] = h, v({ ...a, filters: N });
  }, w = (o = !0) => {
    let u = {};
    return E.map((h) => Object.keys(h).forEach((N) => u[N] = !0)), Object.keys(u);
  }, C = (o) => {
    let u = [];
    const h = a.filters[o].columnName;
    return E && h && (E.forEach(function(N) {
      N[h] !== void 0 && u.indexOf(N[h]) === -1 && u.push(N[h]);
    }), u.sort()), u;
  }, r = ["Waffle", "Gauge"], s = /* @__PURE__ */ n(K, { children: [
    /* @__PURE__ */ n(K.Section, { title: "General", children: [
      /* @__PURE__ */ e("div", { className: "cove-accordion__panel-section", children: /* @__PURE__ */ n("div", { style: { width: "100%", display: "block" }, className: "cove-input-group", children: [
        /* @__PURE__ */ e(x, { value: a.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: i, options: r, className: "cove-input" }),
        a.visualizationType === "Gauge" && /* @__PURE__ */ e(x, { value: a.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: i, options: ["Linear"], className: "cove-input" })
      ] }) }),
      /* @__PURE__ */ e(S, { value: a.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: i }),
      /* @__PURE__ */ e(
        S,
        {
          type: "textarea",
          value: a.content,
          fieldName: "content",
          label: "Message",
          updateField: i,
          tooltip: /* @__PURE__ */ n(P, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ e(P.Target, { children: /* @__PURE__ */ e(ne, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ e(P.Content, { children: /* @__PURE__ */ e("p", { children: "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub." }) })
          ] })
        }
      ),
      /* @__PURE__ */ e(
        S,
        {
          value: a.subtext,
          fieldName: "subtext",
          label: "Subtext/Citation",
          placeholder: "Chart Subtext or Citation",
          updateField: i,
          tooltip: /* @__PURE__ */ n(P, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ e(P.Target, { children: /* @__PURE__ */ e(ne, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ e(P.Content, { children: /* @__PURE__ */ e("p", { children: "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub." }) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ n(K.Section, { icon: !a.dataColumn || !a.dataFunction ? /* @__PURE__ */ e(Ue, { width: "15", className: "warning-icon" }) : "", title: "Data", children: [
      /* @__PURE__ */ e("h4", { style: { fontWeight: "600" }, children: "Numerator" }),
      /* @__PURE__ */ n("div", { className: "cove-accordion__panel-section", children: [
        /* @__PURE__ */ e("div", { className: "cove-input-group", children: /* @__PURE__ */ e(x, { style: F(!a.dataColumn), value: a.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: i, initial: "Select", options: w(), className: "cove-input" }) }),
        /* @__PURE__ */ e("div", { className: "cove-input-group", children: /* @__PURE__ */ e(x, { style: F(!a.dataFunction), value: a.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: i, initial: "Select", options: Ne, className: "cove-input" }) }),
        /* @__PURE__ */ n("div", { className: "cove-input-group", children: [
          /* @__PURE__ */ e("label", { children: /* @__PURE__ */ e("span", { className: "edit-label cove-input__label", children: "Data Conditional" }) }),
          /* @__PURE__ */ n("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", children: [
            /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e(x, { value: a.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: i, initial: "Select", options: w(), className: "cove-input" }) }),
            /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e(x, { value: a.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: i, initial: "Select", options: Ze, className: "cove-input" }) }),
            /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e(S, { value: a.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: i, className: a.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } }) })
          ] })
        ] }),
        a.invalidComparate && /* @__PURE__ */ e("div", { className: "cove-accordion__panel-error", children: "Non-numerical comparate values can only be used with = or ≠." })
      ] }),
      /* @__PURE__ */ n("div", { className: "cove-accordion__panel-row align-center", children: [
        /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e("h4", { style: { fontWeight: "600" }, children: "Denominator" }) }),
        /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ n("div", { style: { display: "flex", justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ e("label", { className: "cove-accordion__panel-label--inline", children: "Select from data" }),
          /* @__PURE__ */ e(V, { size: "small", value: a.customDenom, fieldName: "customDenom", updateField: i })
        ] }) })
      ] }),
      /* @__PURE__ */ n("div", { className: "cove-accordion__panel-section", children: [
        !a.customDenom && /* @__PURE__ */ n("div", { className: "cove-accordion__panel-row align-center", children: [
          /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e(S, { value: a.dataDenom, fieldName: "dataDenom", updateField: i }) }),
          /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ e("label", { className: "cove-accordion__panel-label--muted", children: "default (100)" }) })
        ] }),
        a.customDenom && /* @__PURE__ */ n(ee, { children: [
          /* @__PURE__ */ e(x, { value: a.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: i, initial: "Select", options: w() }),
          /* @__PURE__ */ e(x, { value: a.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: i, initial: "Select", options: Ne })
        ] })
      ] }),
      /* @__PURE__ */ e("ul", { className: "column-edit", children: /* @__PURE__ */ n("li", { className: "three-col", children: [
        /* @__PURE__ */ e("div", { style: { marginRight: "1rem" }, children: /* @__PURE__ */ e(S, { value: a.prefix, fieldName: "prefix", label: "Prefix", updateField: i }) }),
        /* @__PURE__ */ e("div", { style: { marginRight: "1rem" }, children: /* @__PURE__ */ e(S, { value: a.suffix, fieldName: "suffix", label: "Suffix", updateField: i }) }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(S, { type: "number", value: a.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: i }) })
      ] }) }),
      a.visualizationType === "Gauge" && /* @__PURE__ */ n(ee, { children: [
        /* @__PURE__ */ e("hr", { className: "cove-accordion__divider" }),
        /* @__PURE__ */ n("div", { className: "cove-accordion__panel-section reverse-labels", children: [
          /* @__PURE__ */ e(S, { inline: !0, size: "small", value: a.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: i }),
          /* @__PURE__ */ e(V, { inline: !0, size: "small", value: a.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: i }),
          /* @__PURE__ */ e(V, { inline: !0, size: "small", label: "Show Denominator", value: a.showDenominator, fieldName: "showDenominator", updateField: i })
        ] })
      ] }),
      /* @__PURE__ */ n("label", { style: { marginBottom: "1rem" }, children: [
        /* @__PURE__ */ e("span", { className: "edit-label", children: "Data Point Filters" }),
        /* @__PURE__ */ n(P, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ e(P.Target, { children: /* @__PURE__ */ e(ne, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ e(P.Content, { children: /* @__PURE__ */ e("p", { children: 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").' }) })
        ] })
      ] }),
      a.filters && /* @__PURE__ */ e("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" }, children: a.filters.map((o, u) => /* @__PURE__ */ n("fieldset", { className: "edit-block", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "remove-column",
            onClick: () => {
              H(u);
            },
            children: "Remove"
          }
        ),
        /* @__PURE__ */ n("label", { children: [
          /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: "Column" }),
          /* @__PURE__ */ n(
            "select",
            {
              value: o.columnName,
              onChange: (h) => {
                O("columnName", u, h.target.value);
              },
              children: [
                /* @__PURE__ */ e("option", { value: "", children: "- Select Option -" }),
                w().map((h, N) => /* @__PURE__ */ e("option", { value: h, children: h }, N))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ n("label", { children: [
          /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: "Column Value" }),
          /* @__PURE__ */ n(
            "select",
            {
              value: o.columnValue,
              onChange: (h) => {
                O("columnValue", u, h.target.value);
              },
              children: [
                /* @__PURE__ */ e("option", { value: "", children: "- Select Option -" }),
                C(u).map((h, N) => /* @__PURE__ */ e("option", { value: h, children: h }, N))
              ]
            }
          )
        ] })
      ] }, u)) }),
      /* @__PURE__ */ e(Pe, { onClick: k, fluid: !0, children: "Add Filter" })
    ] }),
    /* @__PURE__ */ n(K.Section, { title: "Visual", children: [
      a.visualizationType !== "Gauge" && /* @__PURE__ */ e(x, { value: a.shape, fieldName: "shape", label: "Shape", updateField: i, options: ["circle", "square", "person"], className: "cove-input" }),
      a.visualizationType !== "Gauge" && /* @__PURE__ */ n("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" }, children: [
        /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e(S, { type: "number", value: a.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: i }) }),
        /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e(S, { type: "number", value: a.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: i }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "cove-input-group", children: a.visualizationType !== "Gauge" && /* @__PURE__ */ e(x, { value: a.orientation, fieldName: "orientation", label: "Layout", updateField: i, className: "cove-input", options: ["horizontal", "vertical"] }) }),
      /* @__PURE__ */ n("div", { className: "cove-input-group", children: [
        /* @__PURE__ */ e("label", { children: /* @__PURE__ */ e("span", { className: "edit-label column-heading cove-input__label", children: "Data Point Font Size" }) }),
        /* @__PURE__ */ n("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center", children: [
          /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ e(S, { type: "number", value: a.fontSize, fieldName: "fontSize", updateField: i }) }),
          /* @__PURE__ */ e("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ e("label", { className: "accordion__panel-label--muted", children: " default (50px)" }) })
        ] })
      ] }),
      /* @__PURE__ */ e(x, { value: a.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: i, options: ["small", "medium", "large"], className: "cove-input" }),
      /* @__PURE__ */ n("label", { children: [
        /* @__PURE__ */ e("span", { className: "edit-label cove-input__label", children: "Theme" }),
        /* @__PURE__ */ e("ul", { className: "color-palette", children: Ge.map((o) => /* @__PURE__ */ e(
          "li",
          {
            title: o,
            onClick: () => {
              v({ ...a, theme: o });
            },
            className: a.theme === o ? "selected " + o : o
          },
          o
        )) })
      ] }),
      /* @__PURE__ */ n("div", { className: "cove-accordion__panel-section reverse-labels", children: [
        /* @__PURE__ */ e(V, { inline: !0, size: "small", value: a.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: i }),
        /* @__PURE__ */ e(V, { inline: !0, size: "small", value: a.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: i }),
        /* @__PURE__ */ e(V, { size: "small", value: a.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: i }),
        /* @__PURE__ */ e(V, { size: "small", value: a.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: i }),
        /* @__PURE__ */ e(V, { size: "small", value: a.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: i })
      ] })
    ] })
  ] });
  return T ? null : /* @__PURE__ */ e(Ce, { component: "EditorPanel", children: /* @__PURE__ */ n(ee, { children: [
    /* @__PURE__ */ e(ie.Sidebar, { displayPanel: p, onBackClick: I, isDashboard: b, title: "Configure Waffle Chart", showEditorPanel: p, children: s }),
    l.children
  ] }) });
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
}, He = (l, a) => {
  switch (a.type) {
    case "SET_CONFIG":
      return { ...l, config: a.payload };
    case "SET_LOADING":
      return { ...l, loading: a.payload };
    case "SET_VIEWPORT":
      return { ...l, viewport: a.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...l, coveLoadedHasRan: a.payload };
    case "SET_CONTAINER":
      return { ...l, container: a.payload };
  }
};
const $e = ({ config: l, isEditor: a, link: v = "", showConfigConfirm: T, updateConfig: E }) => {
  const {
    title: M,
    theme: b,
    shape: D,
    nodeWidth: p,
    nodeSpacer: W,
    prefix: F,
    suffix: i,
    subtext: I,
    content: B,
    orientation: k,
    filters: H,
    dataColumn: O,
    dataFunction: w,
    dataConditionalColumn: C,
    dataConditionalOperator: r,
    dataConditionalComparate: s,
    customDenom: o,
    dataDenom: u,
    dataDenomColumn: h,
    dataDenomFunction: N,
    roundToPlace: Q
  } = l, _e = l.visual.colors[l.theme];
  let he = l.fontSize ? { fontSize: l.fontSize + "px" } : null;
  const be = f.useCallback(() => {
    if (!O || !w)
      return "";
    const R = (t) => {
      if (Array.isArray(t) && t.length > 0) {
        const m = t.reduce((A, L) => A + L);
        return c(m);
      }
    }, _ = (t) => {
      const m = t.length > 1 ? t.reduce((A, L) => A + L) / t.length : t[0];
      return c(m);
    }, q = (t) => {
      let m = {}, A = -1 / 0;
      for (let y = 0; y < t.length; y++)
        m[t[y]] ? m[t[y]] += 1 : m[t[y]] = 1, m[t[y]] > A && (A = m[t[y]]);
      let L = [];
      for (let y in m)
        m[y] === A && L.push(y);
      return L;
    }, U = (t) => {
      const m = Math.floor(t.length / 2), A = [...t].sort((y, xe) => y - xe), L = t.length % 2 !== 0 ? A[m] : (A[m - 1] + A[m]) / 2;
      return c(L);
    }, c = (t) => (Q !== "" && !isNaN(Q) && Number(Q) > -1 && (t = Number(t).toFixed(Number(Q))), t);
    let d = l.data;
    H.map((t) => {
      if (t.columnName && t.columnValue)
        d = d.filter(function(m) {
          return m[t.columnName] === t.columnValue;
        });
      else
        return !1;
    });
    let g = [];
    if (C !== "" && r !== "" && s !== "")
      switch (r) {
        case "<":
          g = d.filter((t) => t[C] < s);
          break;
        case ">":
          g = d.filter((t) => t[C] > s);
          break;
        case "<=":
          g = d.filter((t) => t[C] <= s);
          break;
        case ">=":
          g = d.filter((t) => t[C] >= s);
          break;
        case "=":
          isNaN(Number(s)) ? g = d.filter((t) => String(t[C]) === s) : g = d.filter((t) => t[C] === s);
          break;
        case "≠":
          isNaN(Number(s)) ? g = d.filter((t) => String(t[C]) !== s) : g = d.filter((t) => t[C] !== s);
          break;
        default:
          g = [];
      }
    const J = g.length > 0 ? g.map((t) => t[O]) : d.map((t) => t[O]), j = d.map((t) => t[h]);
    let z = J.filter((t) => {
      let m = !1;
      return (Number(t) || Number.isFinite(Number(t))) && (m = !0), m;
    }).map(Number), G = j.filter((t) => {
      let m = !1;
      return (Number(t) || Number.isFinite(Number(t))) && (m = !0), m;
    }).map(Number), le = "";
    le = {
      [re]: String(z.length),
      [ue]: String(R(z)),
      [ce]: String(_(z)),
      [se]: U(z).toString(),
      [oe]: Math.max(...z).toString(),
      [de]: Math.min(...z).toString(),
      [me]: q(z).join(", ")
    }[w];
    let Y = null;
    const Ae = {
      [re]: String(G.length),
      [ue]: String(R(G)),
      [ce]: String(_(G)),
      [se]: U(G).toString(),
      [oe]: Math.max(...G).toString(),
      [de]: Math.min(...G).toString(),
      [me]: q(G).join(", ")
    };
    return o && h && N ? Y = Ae[N] : Y = u > 0 ? u : 100, [
      c(le / Y * 100),
      Y,
      c(le)
    ];
  }, [
    O,
    w,
    l.data,
    H,
    C,
    r,
    s,
    o,
    h,
    N,
    Q,
    u
  ]), [$, ae, pe] = be(), ye = f.useCallback(() => {
    let R = [], _ = parseInt(p, 10), q = parseInt(W, 10);
    const U = (c, d, g, J, j) => {
      let z = d === "x" ? g % 10 : d === "y" ? Math.floor(g / 10) : null;
      return c === "circle" ? z * (J + j) + J / 2 : z * (J + j);
    };
    for (let c = 0; c < 100; c++) {
      let d = {
        shape: D,
        x: U(D, "x", c, _, q),
        y: U(D, "y", c, _, q),
        color: l.visual.colors[b],
        opacity: c + 1 > 100 - Math.round($) ? 1 : 0.35
      };
      R.push(d);
    }
    return R.map(
      (c, d) => c.shape === "square" ? /* @__PURE__ */ e(
        fe,
        {
          className: "cdc-waffle-chart__node",
          style: { transitionDelay: `${0.1 * d}ms` },
          x: c.x,
          y: c.y,
          width: _,
          height: _,
          fill: c.color,
          fillOpacity: c.opacity
        },
        d
      ) : c.shape === "person" ? /* @__PURE__ */ e(
        "path",
        {
          style: {
            transform: `translateX(${c.x + _ / 4}px) translateY(${c.y}px) scale(${_ / 20})`
          },
          fill: c.color,
          fillOpacity: c.opacity,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        },
        d
      ) : /* @__PURE__ */ e(
        Ve,
        {
          className: "cdc-waffle-chart__node",
          style: { transitionDelay: `${0.1 * d}ms` },
          cx: c.x,
          cy: c.y,
          r: _ / 2,
          fill: c.color,
          fillOpacity: c.opacity
        },
        d
      )
    );
  }, [b, $, D, p, W]), te = f.useCallback(() => p * 10 + W * 9, [p, W]), { innerContainerClasses: Ke, contentClasses: Se } = Le(l), Te = We({
    domain: [0, ae],
    range: [0, l.gauge.width]
  }), De = ({ config: R, updateConfig: _ }) => /* @__PURE__ */ e("section", { className: "waiting", children: /* @__PURE__ */ n("section", { className: "waiting-container", children: [
    /* @__PURE__ */ e("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ e("p", { children: R.runtime.editorErrorMessage })
  ] }) }), we = ({ updateConfig: R, config: _ }) => /* @__PURE__ */ e("section", { className: "waiting", children: /* @__PURE__ */ n("section", { className: "waiting-container", children: [
    /* @__PURE__ */ e("h3", { children: "Finish Configuring" }),
    /* @__PURE__ */ e("p", { children: "Set all required options to the left and confirm below to display a preview of the chart." }),
    /* @__PURE__ */ e("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: (U) => {
      U.preventDefault();
      let c = { ..._ };
      delete c.newViz, R(c);
    }, children: "I'm Done" })
  ] }) });
  return /* @__PURE__ */ n("div", { className: "cove-component__content", children: [
    /* @__PURE__ */ e(Ee, { title: M, config: l, classes: ["chart-title", `${l.theme}`, "mb-0"] }),
    /* @__PURE__ */ n("div", { className: Se.join(" "), children: [
      !l.newViz && l.runtime && l.runtime.editorErrorMessage && /* @__PURE__ */ e(De, { updateConfig: E, config: l }),
      l.newViz && T && /* @__PURE__ */ e(we, { updateConfig: E, config: l }),
      /* @__PURE__ */ n("div", { className: "cove-component__content-wrap", children: [
        l.visualizationType === "Gauge" && /* @__PURE__ */ e("div", { className: `cove-gauge-chart${l.overallFontSize ? " font-" + l.overallFontSize : ""}`, children: /* @__PURE__ */ n("div", { className: "cove-gauge-chart__chart", children: [
          /* @__PURE__ */ n("div", { className: "cove-waffle-chart__data--primary", style: he, children: [
            F || " ",
            l.showPercent ? $ : pe,
            i ? i + " " : " ",
            " ",
            l.valueDescription,
            " ",
            l.showDenominator && ae ? ae : " "
          ] }),
          /* @__PURE__ */ e("div", { className: "cove-waffle-chart__data--text", children: Z(B) }),
          /* @__PURE__ */ e("svg", { height: l.gauge.height, width: "100%", children: /* @__PURE__ */ n(ve, { children: [
            /* @__PURE__ */ e(
              "foreignObject",
              {
                style: { border: "1px solid black" },
                x: 0,
                y: 0,
                width: l.gauge.width,
                height: l.gauge.height,
                fill: "#fff"
              }
            ),
            /* @__PURE__ */ e(fe, { x: 0, y: 0, width: Te(pe), height: l.gauge.height, fill: _e })
          ] }) }),
          /* @__PURE__ */ e("div", { className: "cove-waffle-chart__subtext subtext", children: Z(I) })
        ] }) }),
        l.visualizationType !== "Gauge" && /* @__PURE__ */ n(
          "div",
          {
            className: `cove-waffle-chart${k === "vertical" ? " cove-waffle-chart--verical" : ""}${l.overallFontSize ? " font-" + l.overallFontSize : ""}`,
            children: [
              /* @__PURE__ */ e("div", { className: "cove-waffle-chart__chart", style: { width: te() }, children: /* @__PURE__ */ e("svg", { width: te(), height: te(), children: /* @__PURE__ */ e(ve, { children: ye() }) }) }),
              ($ || B) && /* @__PURE__ */ n("div", { className: "cove-waffle-chart__data", children: [
                $ && /* @__PURE__ */ n("div", { className: "cove-waffle-chart__data--primary", style: he, children: [
                  F || null,
                  $,
                  i || null
                ] }),
                /* @__PURE__ */ e("div", { className: "cove-waffle-chart__data--text", children: Z(B) }),
                I && /* @__PURE__ */ e("div", { className: "cove-waffle-chart__subtext subtext", children: Z(I) })
              ] })
            ]
          }
        )
      ] })
    ] }),
    v && v
  ] });
}, va = ({
  configUrl: l,
  config: a,
  isDashboard: v = !1,
  isEditor: T = !1,
  setConfig: E
}) => {
  const [M, b] = f.useReducer(He, {
    config: a ?? X,
    loading: !0,
    preview: !1,
    viewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }), { loading: D, config: p, viewport: W, coveLoadedHasRan: F, container: i } = M, [I, B] = f.useState(!1), k = (r) => {
    Object.keys(X).forEach((s) => {
      r[s] && typeof r[s] == "object" && !Array.isArray(r[s]) && (r[s] = { ...X[s], ...r[s] });
    }), r.runtime = {}, r.runtime.uniqueId = Date.now(), r.runtime.editorErrorMessage = "", b({ type: "SET_CONFIG", payload: r });
  }, H = f.useCallback(async () => {
    let r = a || await (await fetch(l)).json(), s = r.data ?? {};
    r.dataUrl && (s = await ze(r.dataUrl)), r.data = s;
    const o = { ...Ie(r) };
    k({ ...X, ...o }), b({ type: "SET_LOADING", payload: !1 });
  }, []), O = new Fe((r) => {
    for (let s of r) {
      let o = Oe(s.contentRect.width * 2);
      b({ type: "SET_VIEWPORT", payload: o });
    }
  }), w = f.useCallback((r) => {
    r !== null && O.observe(r), b({ type: "SET_CONTAINER", payload: r });
  }, []);
  f.useEffect(() => {
    H().catch((r) => console.log(r));
  }, []), f.useEffect(() => {
    p && !F && i && (ke("cove_loaded", { config: p }), b({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [p, i]), f.useEffect(() => {
    a != null && a.dataUrl || k({ ...X, ...a });
  }, [a == null ? void 0 : a.data]);
  let C = /* @__PURE__ */ e(Re, {});
  if (D === !1) {
    let r = /* @__PURE__ */ e(ie.Responsive, { isEditor: T, children: /* @__PURE__ */ e(
      $e,
      {
        config: p,
        isEditor: T,
        showConfigConfirm: I,
        updateConfig: k
      }
    ) });
    C = /* @__PURE__ */ n(ee, { children: [
      T && /* @__PURE__ */ e(Be, { showConfigConfirm: I, children: r }),
      !T && r
    ] });
  }
  return /* @__PURE__ */ e(Ce, { component: "WaffleChart", children: /* @__PURE__ */ e(
    ge.Provider,
    {
      value: { config: p, updateConfig: k, loading: D, data: p.data, setParentConfig: E, isDashboard: v, outerContainerRef: w },
      children: /* @__PURE__ */ e(
        ie.VisualizationWrapper,
        {
          config: p,
          isEditor: T,
          ref: w,
          showEditorPanel: p == null ? void 0 : p.showEditorPanel,
          children: C
        }
      )
    }
  ) });
}, oe = "Max", re = "Count", ce = "Mean (Average)", se = "Median", de = "Min", me = "Mode", ue = "Sum", Ne = [
  re,
  oe,
  ce,
  se,
  de,
  me,
  ue
], qe = "<", Qe = ">", Je = "<=", Xe = ">=", je = "=", Ye = "≠", Ze = [
  qe,
  Qe,
  Je,
  Xe,
  je,
  Ye
];
export {
  va as C
};
