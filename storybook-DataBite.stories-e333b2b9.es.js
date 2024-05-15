import { r as C, R as e } from "./storybook-index-45401197.es.js";
import { A as $e, a as ae, b as le, c as ne, d as re } from "./storybook-index-a12b60a7.es.js";
import { u as We } from "./storybook-useDebounce-b9224b8d.es.js";
import { a as pe, S as Ze } from "./storybook-Icon-48ed169f.es.js";
import { T as j } from "./storybook-Tooltip-5f8a49cd.es.js";
import { E as Je, L as Qe } from "./storybook-Loading-f180d060.es.js";
import { u as Xe } from "./storybook-updateFieldFactory-c006040a.es.js";
import { L as ee, a as Ye } from "./storybook-coveUpdateWorker-36d7a51c.es.js";
import { T as Ke, H as fe } from "./storybook-index-e5bf02db.es.js";
import { c as et } from "./storybook-chroma-b564050a.es.js";
import { a as tt, g as at } from "./storybook-isSolr-6a0136d5.es.js";
import { D as lt } from "./storybook-DataTransform-b554456e.es.js";
import { n as nt } from "./storybook-numberFromString-24623c03.es.js";
import { f as rt } from "./storybook-fetchRemoteData-6254352f.es.js";
import { u as ot, p as Ee } from "./storybook-useDataVizClasses-d9099587.es.js";
import { c as it } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
const oe = {
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
}, Ie = C.createContext({}), P = C.memo(({ label: t, section: c = null, subsection: h = null, fieldName: y, updateField: b, value: R, tooltip: M, type: x = "input", i: U = null, min: s = null, max: l = null, ...D }) => {
  const [L, q] = C.useState(R), [z] = We(L, 500);
  C.useEffect(() => {
    typeof z == "string" && R !== z && b(c, h, y, z, U);
  }, [z, c, h, y, U, R, b]);
  let G = h ? `${c}-${h}-${y}` : `${c}-${h}-${y}`;
  const V = (T) => {
    x !== "number" || s === null || !T.target.value || parseFloat(s) <= parseFloat(T.target.value) & parseFloat(l) >= parseFloat(T.target.value) ? q(T.target.value) : q(s.toString());
  };
  let A = /* @__PURE__ */ e.createElement("input", { type: "text", name: G, onChange: V, ...D, value: L });
  return x === "textarea" && (A = /* @__PURE__ */ e.createElement("textarea", { name: G, onChange: V, ...D, value: L })), x === "number" && (A = /* @__PURE__ */ e.createElement("input", { type: "number", name: G, onChange: V, ...D, value: L })), /* @__PURE__ */ e.createElement(e.Fragment, null, t && t.length > 0 && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t, M), A), (!t || t.length === 0) && A);
}), J = C.memo(({ label: t, value: c, fieldName: h, section: y = null, subsection: b = null, tooltip: R, updateField: M, ...x }) => /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
  "input",
  {
    type: "checkbox",
    name: h,
    checked: c,
    onChange: () => {
      M(y, b, h, !c);
    },
    ...x
  }
), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, t), /* @__PURE__ */ e.createElement("span", { className: "cove-icon" }, R))), X = C.memo(({ label: t, value: c, options: h, fieldName: y, section: b = null, subsection: R = null, required: M = !1, updateField: x, initial: U, ...s }) => {
  let l = "";
  if (Array.isArray(h))
    l = h.map((D) => /* @__PURE__ */ e.createElement("option", { value: D, key: D }, D));
  else {
    l = [];
    for (const [D, L] of Object.entries(h))
      l.push(
        /* @__PURE__ */ e.createElement("option", { value: D, key: D }, L)
      );
  }
  return U && l.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, U)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, t), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: M && !c ? "warning" : "",
      name: y,
      value: c,
      onChange: (D) => {
        x(b, R, y, D.target.value);
      },
      ...s
    },
    l
  ));
}), ct = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], he = C.memo(() => {
  var F, te, Y, de, K;
  const { config: t, updateConfig: c, loading: h, data: y, setParentConfig: b, isDashboard: R, isEditor: M } = C.useContext(Ie), [x, U] = C.useState(!0), s = Xe(t, c, !0);
  C.useEffect(() => {
    if (b) {
      const n = D();
      delete n.newViz, b(n);
    }
  }, [t]);
  const l = () => {
    U(!x), c({
      ...t,
      showEditorPanel: !x
    });
  }, D = () => {
    let n = JSON.parse(JSON.stringify(t));
    return delete n.runtime, n;
  }, L = (n) => {
    let r = [...t.filters];
    r.splice(n, 1), c({ ...t, filters: r });
  }, q = (n, r, m) => {
    let p = [...t.filters];
    p[r][n] = m, c({ ...t, filters: p });
  }, z = () => {
    let n = t.filters ? [...t.filters] : [];
    n.push({ values: [] }), c({ ...t, filters: n });
  }, G = (n = !0) => {
    let r = {};
    return y.length && y.map((m) => Object.keys(m).forEach((p) => r[p] = !0)), Object.keys(r);
  }, V = (n) => {
    let r = [];
    const m = t.filters[n].columnName;
    return y && m && (y.forEach(function(p) {
      p[m] !== void 0 && r.indexOf(p[m]) === -1 && r.push(p[m]);
    }), r.sort()), r;
  }, A = (n, r, m = null, p) => {
    let v = [...t.imageData.options];
    m === null ? v[r][n] = p : v[r].arguments[m][n] = p;
    let B = { ...t.imageData, options: v };
    c({ ...t, imageData: B });
  }, T = (n, r, m) => {
    let p = [...t.imageData.options[n].arguments];
    p[1] = { ...p[1], [r]: m };
    let v = { ...t.imageData.options[n], arguments: p }, B = [...t.imageData.options];
    B[n] = v;
    let g = { ...t.imageData, options: B };
    c({ ...t, imageData: g });
  }, ue = (n) => {
    if (t.imageData.options[n].arguments.length > 1) {
      let r = [...t.imageData.options[n].arguments];
      r.pop();
      let m = { ...t.imageData.options[n], arguments: r }, p = [...t.imageData.options];
      p[n] = m;
      let v = { ...t.imageData, options: p };
      c({ ...t, imageData: v });
    }
  }, H = () => {
    let n = t.imageData.options ? [...t.imageData.options] : [];
    n.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let r = { ...t.imageData, options: n };
    c({ ...t, imageData: r });
  }, $ = (n) => {
    let r = [...t.imageData.options];
    r.splice(n, 1);
    let m = { ...t.imageData, options: r };
    c({ ...t, imageData: m });
  };
  return h ? null : /* @__PURE__ */ e.createElement(Je, { component: "EditorPanel" }, /* @__PURE__ */ e.createElement(ee.Sidebar, { isEditor: !0, config: t, title: "Configure Data Bites", onBackClick: l, displayPanel: x }, /* @__PURE__ */ e.createElement("section", { className: "form-container" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement($e, { allowZeroExpanded: !0 }, /* @__PURE__ */ e.createElement(ae, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(ne, null, "General")), /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(X, { value: t.biteStyle, fieldName: "biteStyle", label: "Data Bite Style", updateField: s, options: pt, initial: "Select" }), /* @__PURE__ */ e.createElement(P, { value: t.title, fieldName: "title", label: "Title", placeholder: "Data Bite Title", updateField: s }), /* @__PURE__ */ e.createElement(
    P,
    {
      type: "textarea",
      value: t.biteBody,
      fieldName: "biteBody",
      label: "Message",
      updateField: s,
      tooltip: /* @__PURE__ */ e.createElement(j, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(j.Target, null, /* @__PURE__ */ e.createElement(pe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(j.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ e.createElement(
    P,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Data Bite Subtext or Citation",
      updateField: s,
      tooltip: /* @__PURE__ */ e.createElement(j, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(j.Target, null, /* @__PURE__ */ e.createElement(pe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(j.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ))), /* @__PURE__ */ e.createElement(ae, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(ne, null, "Data ", (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e.createElement(Ze, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "two-col" }, /* @__PURE__ */ e.createElement(X, { value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: s, initial: "Select", required: !0, options: G() }), /* @__PURE__ */ e.createElement(X, { value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: s, initial: "Select", required: !0, options: dt }))), /* @__PURE__ */ e.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(P, { value: t.dataFormat.prefix, section: "dataFormat", fieldName: "prefix", label: "Prefix", updateField: s }), /* @__PURE__ */ e.createElement(P, { value: t.dataFormat.suffix, section: "dataFormat", fieldName: "suffix", label: "Suffix", updateField: s }), /* @__PURE__ */ e.createElement(P, { type: "number", value: t.dataFormat.roundToPlace, section: "dataFormat", fieldName: "roundToPlace", label: "Round", updateField: s, min: "0", max: "99" }))), /* @__PURE__ */ e.createElement(J, { value: t.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: s }), /* @__PURE__ */ e.createElement(J, { value: t.dataFormat.ignoreZeros, section: "dataFormat", fieldName: "ignoreZeros", label: "Ignore Zeros", updateField: s }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ e.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ e.createElement(j, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(j.Target, null, /* @__PURE__ */ e.createElement(pe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(j.Content, null, /* @__PURE__ */ e.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((n, r) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: r }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        L(r);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: n.columnName ? n.columnName : "",
      onChange: (m) => {
        q("columnName", r, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    G().map((m, p) => /* @__PURE__ */ e.createElement("option", { value: m, key: p }, m))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: n.columnValue,
      onChange: (m) => {
        q("columnValue", r, m.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    V(r).map((m, p) => /* @__PURE__ */ e.createElement("option", { value: m, key: p }, m))
  ))))), (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: z, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ e.createElement(ae, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(ne, null, "Visual")), /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(P, { type: "number", value: t.biteFontSize, fieldName: "biteFontSize", label: "Bite Font Size", updateField: s, min: "17", max: "65" }), /* @__PURE__ */ e.createElement(X, { value: t.fontSize, fieldName: "fontSize", label: "Overall Font Size", updateField: s, options: ["small", "medium", "large"] }), /* @__PURE__ */ e.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ e.createElement(J, { value: (F = t.visual) == null ? void 0 : F.border, section: "visual", fieldName: "border", label: "Display Border", updateField: s }), /* @__PURE__ */ e.createElement(J, { value: (te = t.visual) == null ? void 0 : te.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ e.createElement(J, { value: (Y = t.visual) == null ? void 0 : Y.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ e.createElement(J, { value: (de = t.visual) == null ? void 0 : de.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ e.createElement(J, { value: (K = t.visual) == null ? void 0 : K.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ e.createElement("ul", { className: "color-palette" }, ct.map((n) => /* @__PURE__ */ e.createElement(
    "li",
    {
      title: n,
      key: n,
      onClick: () => {
        c({ ...t, theme: n });
      },
      className: t.theme === n ? "selected " + n : n
    }
  )))))), ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ e.createElement(ae, null, " ", /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(ne, null, "Image", ["dynamic"].includes(t.imageData.display) && "s")), /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(X, { value: t.imageData.display || "", section: "imageData", fieldName: "display", label: "Image Display Type", updateField: s, options: ["none", "static", "dynamic"] }), /* @__PURE__ */ e.createElement(X, { value: t.bitePosition || "", fieldName: "bitePosition", label: "Image/Graphic Position", updateField: s, initial: "Select", options: gt }), ["static"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, { value: t.imageData.url, section: "imageData", fieldName: "url", label: "Image URL", updateField: s }), /* @__PURE__ */ e.createElement(P, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text", updateField: s })), ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(P, { value: t.imageData.url || "", section: "imageData", fieldName: "url", label: "Image URL (default)", updateField: s }), /* @__PURE__ */ e.createElement(P, { value: t.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text (default)", updateField: s }), /* @__PURE__ */ e.createElement("hr", { className: "accordion__divider" }), (!t.imageData.options || t.imageData.options.length === 0) && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no dynamic images."), t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", null, t.imageData.options.map((n, r) => {
    var m, p, v, B;
    return /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: r }, /* @__PURE__ */ e.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: () => {
          $(r);
        }
      },
      "Remove"
    ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, /* @__PURE__ */ e.createElement("strong", null, "Image #" + (r + 1))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((m = n.arguments[0]) == null ? void 0 : m.operator) || "",
        onChange: (g) => {
          A("operator", r, 0, g.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      ve.map((g, Q) => /* @__PURE__ */ e.createElement("option", { value: g, key: Q }, g))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((p = n.arguments[0]) == null ? void 0 : p.threshold) || "",
        onChange: (g) => {
          A("threshold", r, 0, g.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        className: "border-dashed text-center",
        value: n.secondArgument ? "and" : "then",
        onChange: (g) => {
          g.target.value === "then" && (A("secondArgument", r, null, !1), ue(r)), g.target.value === "and" && A("secondArgument", r, null, !0);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "then" }, "Then"),
      /* @__PURE__ */ e.createElement("option", { value: "and" }, "And")
    ))), n.secondArgument && n.secondArgument === !0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ e.createElement(
      "select",
      {
        value: ((v = n.arguments[1]) == null ? void 0 : v.operator) || "",
        onChange: (g) => {
          T(r, "operator", g.target.value);
        }
      },
      /* @__PURE__ */ e.createElement("option", { value: "", disabled: !0 }),
      ve.map((g, Q) => /* @__PURE__ */ e.createElement("option", { value: g, key: Q }, g))
    )), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "number",
        value: ((B = n.arguments[1]) == null ? void 0 : B.threshold) || "",
        onChange: (g) => {
          T(r, "threshold", g.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: n.source || "",
        onChange: (g) => {
          A("source", r, null, g.target.value);
        }
      }
    ))), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ e.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: n.alt || "",
        onChange: (g) => {
          A("alt", r, null, g.target.value);
        }
      }
    )))));
  }))), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: H, className: "btn full-width" }, "Add Dynamic Image")))))))));
}), be = {
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
}, ye = ({ text: t, theme: c = "theme-blue", dataFormat: h, biteFontSize: y }) => {
  const b = {
    outerRing: {
      fill: be[c].primary
    },
    innerRing: {
      fill: et(be[c].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ e.createElement("circle", { cx: "50", cy: "50", r: "45", style: b.innerRing, strokeWidth: "10", stroke: b.outerRing.fill }), /* @__PURE__ */ e.createElement("text", { y: "50%", x: "50%", fontSize: y, style: b.text, textAnchor: "middle", dominantBaseline: "central" }, t));
};
const st = ({ label: t, value: c }) => /* @__PURE__ */ e.createElement("div", { className: "cove-component__content kpi-container" }, /* @__PURE__ */ e.createElement("div", { className: "kpi-content" }, /* @__PURE__ */ e.createElement("div", { className: "label-container" }, /* @__PURE__ */ e.createElement("span", { className: "label" }, /* @__PURE__ */ e.createElement("strong", null, t))), /* @__PURE__ */ e.createElement("div", { className: "value-container" }, /* @__PURE__ */ e.createElement("span", { className: "value" }, /* @__PURE__ */ e.createElement("strong", null, c))))), mt = (t, c) => {
  switch (c.type) {
    case "SET_CONFIG":
      return { ...t, config: c.payload };
    case "SET_LOADING":
      return { ...t, loading: c.payload };
    case "SET_CURRENT_VIEWPORT":
      return { ...t, currentViewport: c.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...t, coveLoadedHasRan: c.payload };
    case "SET_CONTAINER":
      return { ...t, container: c.payload };
  }
};
const ut = (t) => {
  const { configUrl: c, config: h, isDashboard: y = !1, isEditor: b = !1, setConfig: R, link: M } = t, x = {
    config: h ?? oe,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [U, s] = C.useReducer(mt, x), { config: l, loading: D, currentViewport: L, coveLoadedHasRan: q, container: z } = U, { title: G, dataColumn: V, dataFunction: A, imageData: T, biteBody: ue, biteFontSize: H, dataFormat: $, biteStyle: F, filters: te, subtext: Y } = l, { innerContainerClasses: de, contentClasses: K } = ot(l), n = new lt(), r = new tt((i) => {
    for (let u of i) {
      let O = at(u.contentRect.width * 2);
      s({ type: "SET_CURRENT_VIEWPORT", payload: O });
    }
  }), m = (i) => {
    Object.keys(oe).forEach((u) => {
      i[u] && typeof i[u] == "object" && !Array.isArray(i[u]) && (i[u] = { ...oe[u], ...i[u] });
    }), i.runtime = {}, i.runtime.uniqueId = Date.now(), i.runtime.editorErrorMessage = "", s({ type: "SET_CONFIG", payload: i });
  }, p = async () => {
    let i = h || await (await fetch(c)).json(), u = i.data ?? [];
    if (i.dataUrl) {
      i.dataUrl = `${i.dataUrl}?${it()}`;
      let w = await rt(i.dataUrl);
      w && i.dataDescription && (w = n.autoStandardize(w), w = n.developerStandardize(w, i.dataDescription)), w && (u = w);
    }
    i.data = u;
    const O = { ...await Ye(i) };
    m({ ...oe, ...O }), s({ type: "SET_LOADING", payload: !1 });
  }, v = (i = !0) => {
    if (!V || !A)
      return "";
    const u = (a) => {
      if (a == null) {
        console.error('Enter correct value to "applyPrecision()" function ');
        return;
      }
      if (Number.isNaN(a)) {
        console.error(' Argunment isNaN, "applyPrecision()" function ');
        return;
      }
      let o = a, f = Number(l.dataFormat.roundToPlace);
      if (f < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ');
        return;
      }
      return typeof f == "number" && f > -1 && (o = Number(o).toFixed(f)), String(o);
    }, O = (a) => (l.dataFormat.ignoreZeros && (E = E.filter((o) => o && o)), E.length), w = (a) => {
      if (a == null) {
        console.error("Enter valid value for getColumnSum function ");
        return;
      }
      if (a.length === 0 || !Array.isArray(a)) {
        console.error("Arguments are not valid getColumnSum function ");
        return;
      }
      let o = 0;
      return a.length > 1 ? o = a.map((f) => Number(f)).reduce((f, S) => f + S) : o = Number(a[0]), u(o);
    }, _ = (a) => {
      if (a == null || !Array.isArray(a)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      l.dataFormat.ignoreZeros && (a = a.filter((f) => f !== 0));
      let o = 0;
      return a.length > 1 ? o = a.map((f) => Number(f)).reduce((f, S) => f + S) / a.length : o = Number(a[0]), u(o);
    }, N = (a = []) => {
      let o = {}, f = -1 / 0;
      for (let k = 0; k < a.length; k++)
        o[a[k]] ? o[a[k]] += 1 : o[a[k]] = 1, o[a[k]] > f && (f = o[a[k]]);
      let S = [];
      for (let k in o)
        o[k] === f && S.push(k);
      return S;
    }, I = (a) => {
      if (!a.length)
        return;
      const o = Math.floor(a.length / 2), f = [...a].sort((k, He) => k - He), S = a.length % 2 !== 0 ? f[o] : (f[o - 1] + f[o]) / 2;
      return u(S);
    }, W = (a) => {
      if (a == null)
        return;
      (Number.isNaN(a) || typeof a == "number") && (a = String(a));
      const o = "en-US";
      let f = parseFloat(a).toLocaleString(o, {
        useGrouping: !0,
        maximumFractionDigits: 6
      });
      const S = a.match(/\.\d*?(0*)$/);
      return S && (f += /[1-9]/.test(S[0]) ? S[1] : S[0]), f;
    };
    let d = "", Z = l.data;
    te.map((a) => a.columnName && a.columnValue ? Z = Z.filter(function(o) {
      return o[a.columnName] === a.columnValue;
    }) : !1);
    let E = [];
    switch (Z.length ? Z.forEach((a) => {
      let o = nt(a[V]);
      typeof o == "number" && E.push(o);
    }) : l.dataColumn && l.data && (E = l.data.map((a) => Number(a[l.dataColumn]))), A) {
      case Re:
        d = O();
        break;
      case ze:
        d = w(E);
        break;
      case Be:
        d = _(E);
        break;
      case Me:
        d = I(E);
        break;
      case Pe:
        d = Math.max(...E);
        break;
      case Ue:
        d = Math.min(...E);
        break;
      case Le:
        d = N(E).join("");
        break;
      case ge:
        let a = Math.min(...E), o = Math.max(...E);
        a = u(a), o = u(o), l.dataFormat.commas && (a = W(a), o = W(o)), d = l.dataFormat.prefix + a + l.dataFormat.suffix + " - " + l.dataFormat.prefix + o + l.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + A);
    }
    return A !== ge && (d = u(d), l.dataFormat.commas && (d = W(d))), i ? $.prefix + d + $.suffix : d;
  }, B = C.useCallback((i) => {
    i !== null && r.observe(i), s({ type: "SET_CONTAINER", payload: i });
  }, []);
  C.useEffect(() => {
    p(), Ee("cove_loaded", { loadConfigHasRun: !0 });
  }, []), C.useEffect(() => {
    l && !q && z && (Ee("cove_loaded", { config: l }), s({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [l, z]), h && l && JSON.stringify(h.data) !== JSON.stringify(l.data) && p();
  let g = /* @__PURE__ */ e.createElement(Qe, null);
  const Q = C.useCallback(() => {
    var w;
    let i = {
      "<": (_, N) => _ < N,
      ">": (_, N) => _ > N,
      "<=": (_, N) => _ <= N,
      ">=": (_, N) => _ >= N,
      "≠": (_, N) => _ !== N,
      "=": (_, N) => _ === N
    }, u = T.url, O = T.alt;
    if (T.display === "dynamic" && T.options && ((w = T.options) == null ? void 0 : w.length) > 0) {
      let _ = Number(v(!1)), N = !1;
      T.options.forEach((I, W) => {
        var a, o;
        let d = I.arguments, { source: Z, alt: E } = I;
        N === !1 && d.length > 0 && d[0].operator.length > 0 && d[0].threshold.length > 0 && i[d[0].operator](_, d[0].threshold) && (d[1] !== void 0 ? ((a = d[1].operator) == null ? void 0 : a.length) > 0 && ((o = d[1].threshold) == null ? void 0 : o.length) > 0 && i[d[1].operator](_, d[1].threshold) && (u = Z, E !== "" && E !== void 0 && (O = E), N = !0) : (u = Z, E !== "" && E !== void 0 && (O = E), N = !0));
      });
    }
    return u.length > 0 && F !== "graphic" && T.display !== "none" ? /* @__PURE__ */ e.createElement("img", { alt: O, src: u, className: "bite-image callout" }) : null;
  }, [T]);
  if (D === !1) {
    let i = [], u = !1, O = !1;
    switch (l.bitePosition) {
      case Ve:
        i.push("bite-left"), u = !0;
        break;
      case je:
        i.push("bite-right"), u = !0;
        break;
      case qe:
        i.push("bite-top"), u = !0;
        break;
      case Ge:
        i.push("bite-bottom"), O = !0;
        break;
    }
    const w = () => !1, _ = () => {
      const W = {
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
      return /* @__PURE__ */ e.createElement("section", { className: "waiting", style: W }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ e.createElement("p", null, l.runtime.editorErrorMessage)));
    }, N = () => {
      const W = {
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
      return /* @__PURE__ */ e.createElement("section", { className: "waiting", style: W }, /* @__PURE__ */ e.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ e.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ e.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ e.createElement(
        "button",
        {
          className: "btn",
          style: { margin: "1em auto" },
          disabled: w(),
          onClick: (d) => {
            d.preventDefault(), m({ ...l, newViz: !1 });
          }
        },
        "I'm Done"
      )));
    }, I = V !== void 0 && A !== void 0;
    g = /* @__PURE__ */ e.createElement(e.Fragment, null, b && /* @__PURE__ */ e.createElement(he, null), /* @__PURE__ */ e.createElement(ee.Responsive, { isEditor: b }, /* @__PURE__ */ e.createElement("div", { className: `${K.join(" ")}` }, !l.newViz && l.runtime && l.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(_, null), (!l.dataColumn || !l.dataFunction) && /* @__PURE__ */ e.createElement(N, null), /* @__PURE__ */ e.createElement(Ke, { config: l, title: G, isDashboard: y, classes: ["bite-header", `${l.theme}`] }), /* @__PURE__ */ e.createElement("div", { className: `bite ${i.join(" ")}` }, /* @__PURE__ */ e.createElement("div", { className: `bite-content-container ${K.join(" ")}` }, I && F === "graphic" && u && /* @__PURE__ */ e.createElement(ye, { theme: l.theme, text: v(), biteFontSize: H, dataFormat: $ }), u && /* @__PURE__ */ e.createElement(Q, null), /* @__PURE__ */ e.createElement("div", { className: "bite-content" }, I && F === "title" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: H + "px" } }, v()), I && F === "split" && /* @__PURE__ */ e.createElement("div", { className: "bite-value", style: { fontSize: H + "px" } }, v()), /* @__PURE__ */ e.createElement(C.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ e.createElement("p", { className: "bite-text" }, I && F === "body" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: H + "px" } }, v()), fe(ue)), I && F === "end" && /* @__PURE__ */ e.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: H + "px" } }, v()), Y && !l.general.isCompactStyle && /* @__PURE__ */ e.createElement("p", { className: "bite-subtext" }, fe(Y))))), O && /* @__PURE__ */ e.createElement(Q, null), I && F === "graphic" && !u && /* @__PURE__ */ e.createElement(ye, { theme: l.theme, text: v(), biteFontSize: H, dataFormat: $ })))), M && M));
  }
  return /* @__PURE__ */ e.createElement(Ie.Provider, { value: { config: l, updateConfig: m, loading: D, data: l.data, setParentConfig: R, isDashboard: y } }, F !== "gradient" && /* @__PURE__ */ e.createElement(ee.VisualizationWrapper, { ref: B, config: l, isEditor: b, showEditorPanel: l == null ? void 0 : l.showEditorPanel }, g), F === "gradient" && /* @__PURE__ */ e.createElement(ee.VisualizationWrapper, { ref: B, config: l, isEditor: b, showEditorPanel: l == null ? void 0 : l.showEditorPanel }, b && /* @__PURE__ */ e.createElement(he, null), /* @__PURE__ */ e.createElement(ee.Responsive, { isEditor: b }, !l.newViz && l.runtime && l.runtime.editorErrorMessage && /* @__PURE__ */ e.createElement(Error, null), (!l.dataColumn || !l.dataFunction) && /* @__PURE__ */ e.createElement(Confirm, null), /* @__PURE__ */ e.createElement(st, { label: l.title, value: v() }))));
}, Pe = "Max", Re = "Count", Be = "Mean (Average)", Me = "Median", Ue = "Min", Le = "Mode", ge = "Range", ze = "Sum", dt = [Re, Pe, Be, Me, Ue, Le, ge, ze], pt = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message",
  gradient: "Gradient"
}, Ve = "Left", je = "Right", qe = "Top", Ge = "Bottom", gt = [Ve, je, qe, Ge], ft = "<", Et = ">", ht = "<=", bt = ">=", yt = "=", vt = "≠", ve = [ft, Et, ht, bt, yt, vt], Vt = {
  title: "Components/Templates/Data Bite",
  component: ut
}, ie = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json"
  }
}, ce = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json"
  }
}, se = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json"
  }
}, me = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json"
  }
};
var Ne, _e, De;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...(Ne = ie.parameters) == null ? void 0 : Ne.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json'
  }
}`,
      ...(De = (_e = ie.parameters) == null ? void 0 : _e.docs) == null ? void 0 : De.source
    }
  }
};
var Ae, Te, Ce;
ce.parameters = {
  ...ce.parameters,
  docs: {
    ...(Ae = ce.parameters) == null ? void 0 : Ae.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json'
  }
}`,
      ...(Ce = (Te = ce.parameters) == null ? void 0 : Te.docs) == null ? void 0 : Ce.source
    }
  }
};
var we, xe, Se;
se.parameters = {
  ...se.parameters,
  docs: {
    ...(we = se.parameters) == null ? void 0 : we.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json'
  }
}`,
      ...(Se = (xe = se.parameters) == null ? void 0 : xe.docs) == null ? void 0 : Se.source
    }
  }
};
var Fe, Oe, ke;
me.parameters = {
  ...me.parameters,
  docs: {
    ...(Fe = me.parameters) == null ? void 0 : Fe.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json'
  }
}`,
      ...(ke = (Oe = me.parameters) == null ? void 0 : Oe.docs) == null ? void 0 : ke.source
    }
  }
};
const jt = ["Data_Bite_Circle_Average", "Data_Bite_Text_Max_Pic", "Data_Bite_Circle_Sum", "Data_Bite_Text_Average_Pic"];
export {
  ie as Data_Bite_Circle_Average,
  se as Data_Bite_Circle_Sum,
  me as Data_Bite_Text_Average_Pic,
  ce as Data_Bite_Text_Max_Pic,
  jt as __namedExportsOrder,
  Vt as default
};
