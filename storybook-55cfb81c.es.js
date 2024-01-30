import { r as y, R as e } from "./storybook-e61d95ab.es.js";
import { T as a } from "./storybook-46a89ba7.es.js";
import { a as f } from "./storybook-60d140a8.es.js";
import { u as C } from "./storybook-d3e946a2.es.js";
import { M as D } from "./storybook-eb5df9b6.es.js";
const N = y.memo((t) => {
  const { label: l, tooltip: r, section: o = null, subsection: i = null, fieldName: n, updateField: h, value: b, type: s = "text", i: w = null, min: d = null, ...p } = t, [c, u] = y.useState(b), [E] = C(c, 500);
  y.useEffect(() => {
    typeof E == "string" && b !== E && h(o, i, n, E, w);
  }, [E]);
  let T = i ? `${o}-${i}-${n}` : `${o}-${i}-${n}`;
  const v = (x) => {
    s !== "number" || d === null || !x.target.value || d <= parseFloat(x.target.value) ? u(x.target.value) : u(d.toString());
  };
  let g = /* @__PURE__ */ e.createElement("input", { type: "text", name: T, onChange: v, ...p, value: c });
  return s === "textarea" && (g = /* @__PURE__ */ e.createElement("textarea", { name: T, onChange: v, ...p, value: c })), s === "number" && (g = /* @__PURE__ */ e.createElement("input", { type: "number", name: T, onChange: v, ...p, value: c })), s === "date" && (g = /* @__PURE__ */ e.createElement("input", { type: "date", name: T, onChange: v, ...p, value: c })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, l, r), g);
}), m = y.memo((t) => {
  const { label: l, value: r, fieldName: o, section: i = null, subsection: n = null, tooltip: h, updateField: b, ...s } = t;
  return /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: o,
      checked: r,
      onChange: (w) => {
        b(i, n, o, !r);
      },
      ...s
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, l, h));
}), V = y.memo((t) => {
  const { label: l, value: r, options: o, fieldName: i, section: n = null, subsection: h = null, required: b = !1, tooltip: s, updateField: w, initial: d, ...p } = t;
  let c = o.map((u, E) => /* @__PURE__ */ e.createElement("option", { value: u, key: E }, u));
  return d && c.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, d)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, l, s), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: b && !r ? "warning" : "",
      name: i,
      value: r,
      onChange: (u) => {
        w(n, h, i, u.target.value);
      },
      ...p
    },
    c
  ));
}), I = ({ config: t, updateField: l, isDashboard: r, isLoadedFromUrl: o, columns: i }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
  N,
  {
    value: t.table.label,
    updateField: l,
    section: "table",
    fieldName: "table-label",
    id: "tableLabel",
    label: "Data Table Title",
    placeholder: "Data Table",
    tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(f, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
  }
), /* @__PURE__ */ e.createElement(
  m,
  {
    value: t.table.show,
    fieldName: "show",
    label: "Show Data Table",
    section: "table",
    updateField: l,
    className: "column-heading",
    tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(f, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
  }
), t.visualizationType !== "Box Plot" && /* @__PURE__ */ e.createElement(
  m,
  {
    value: t.table.showVertical,
    fieldName: "showVertical",
    label: "Show Vertical Data",
    section: "table",
    updateField: l,
    className: "column-heading",
    tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(f, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
  }
), /* @__PURE__ */ e.createElement(N, { value: t.table.indexLabel, section: "table", fieldName: "indexLabel", label: "Index Column Header", updateField: l }), /* @__PURE__ */ e.createElement(
  N,
  {
    value: t.table.caption,
    updateField: l,
    section: "table",
    type: "textarea",
    fieldName: "caption",
    label: "Screen Reader Description",
    placeholder: " Data table",
    tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(f, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
  }
), /* @__PURE__ */ e.createElement(m, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: "Limit Table Height", updateField: l }), /* @__PURE__ */ e.createElement(
  m,
  {
    value: t.table.customTableConfig,
    fieldName: "customTableConfig",
    label: "Customize Table Config",
    section: "table",
    updateField: l,
    tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(f, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will display all available columns in the data set. It will not show any columns where all of the column cells are null.")))
  }
), t.table.customTableConfig && /* @__PURE__ */ e.createElement(D, { options: i.map((n) => ({ label: n, value: n })), fieldName: "excludeColumns", label: "Exclude Columns", section: "table", updateField: l }), t.table.limitHeight && /* @__PURE__ */ e.createElement(N, { value: t.table.height, fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: l }), /* @__PURE__ */ e.createElement(m, { value: t.table.expanded, fieldName: "expanded", label: "Expanded by Default", section: "table", updateField: l }), r && /* @__PURE__ */ e.createElement(m, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: l }), o && /* @__PURE__ */ e.createElement(m, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: l }), /* @__PURE__ */ e.createElement(m, { value: t.table.download, fieldName: "download", label: "Show Download CSV Link", section: "table", updateField: l }), /* @__PURE__ */ e.createElement(m, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: l }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (n) => l("table", null, "cellMinWidth", n.target.value) })));
export {
  m as C,
  I as D,
  V as S,
  N as T
};
