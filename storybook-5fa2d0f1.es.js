import { r as w, R as e } from "./storybook-e61d95ab.es.js";
import { T as a } from "./storybook-a16f6c8c.es.js";
import { a as y } from "./storybook-2ad7d390.es.js";
import { u as D } from "./storybook-d3e946a2.es.js";
import { M as g } from "./storybook-9c0deada.es.js";
const C = w.memo((t) => {
  const { label: l, tooltip: m, section: o = null, subsection: n = null, fieldName: r, updateField: c, value: i, type: u = "text", i: f = null, min: p = null, ...E } = t, [b, d] = w.useState(i), [h] = D(b, 500);
  w.useEffect(() => {
    typeof h == "string" && i !== h && c(o, n, r, h, f);
  }, [h]);
  let T = n ? `${o}-${n}-${r}` : `${o}-${n}-${r}`;
  const v = (N) => {
    u !== "number" || p === null || !N.target.value || p <= parseFloat(N.target.value) ? d(N.target.value) : d(p.toString());
  };
  let x = /* @__PURE__ */ e.createElement("input", { type: "text", name: T, onChange: v, ...E, value: b });
  return u === "textarea" && (x = /* @__PURE__ */ e.createElement("textarea", { name: T, onChange: v, ...E, value: b })), u === "number" && (x = /* @__PURE__ */ e.createElement("input", { type: "number", name: T, onChange: v, ...E, value: b })), u === "date" && (x = /* @__PURE__ */ e.createElement("input", { type: "date", name: T, onChange: v, ...E, value: b })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, l, m), x);
}), s = w.memo((t) => {
  const { label: l, value: m, fieldName: o, section: n = null, subsection: r = null, tooltip: c, updateField: i, ...u } = t;
  return /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: o,
      checked: m,
      onChange: (f) => {
        i(n, r, o, !m);
      },
      ...u
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, l, c));
}), V = w.memo((t) => {
  const { label: l, value: m, options: o, fieldName: n, section: r = null, subsection: c = null, required: i = !1, tooltip: u, updateField: f, initial: p, ...E } = t;
  let b = o.map((d, h) => /* @__PURE__ */ e.createElement("option", { value: d, key: h }, d));
  return p && b.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, p)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, l, u), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: i && !m ? "warning" : "",
      name: n,
      value: m,
      onChange: (d) => {
        f(r, c, n, d.target.value);
      },
      ...E
    },
    b
  ));
}), I = ({ config: t, updateField: l, isDashboard: m, columns: o }) => {
  var r, c;
  const n = ((r = t.dataKey) == null ? void 0 : r.includes("http://")) || ((c = t == null ? void 0 : t.dataKey) == null ? void 0 : c.includes("https://"));
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    C,
    {
      value: t.table.label,
      updateField: l,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), /* @__PURE__ */ e.createElement(
    s,
    {
      value: t.table.show,
      fieldName: "show",
      label: "Show Data Table",
      section: "table",
      updateField: l,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), t.visualizationType !== "Box Plot" && /* @__PURE__ */ e.createElement(
    s,
    {
      value: t.table.showVertical,
      fieldName: "showVertical",
      label: "Show Vertical Data",
      section: "table",
      updateField: l,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ e.createElement(C, { value: t.table.indexLabel, section: "table", fieldName: "indexLabel", label: "Index Column Header", updateField: l }), /* @__PURE__ */ e.createElement(
    C,
    {
      value: t.table.caption,
      updateField: l,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(s, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: "Limit Table Height", updateField: l }), t.type !== "table" && /* @__PURE__ */ e.createElement(
    s,
    {
      value: t.table.customTableConfig,
      fieldName: "customTableConfig",
      label: "Customize Table Config",
      section: "table",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will display all available columns in the data set. It will not show any columns where all of the column cells are null.")))
    }
  ), t.table.customTableConfig && /* @__PURE__ */ e.createElement(g, { options: o.map((i) => ({ label: i, value: i })), fieldName: "excludeColumns", label: "Exclude Columns", section: "table", updateField: l }), t.table.limitHeight && /* @__PURE__ */ e.createElement(C, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: l }), /* @__PURE__ */ e.createElement(s, { value: t.table.expanded, fieldName: "expanded", label: "Expanded by Default", section: "table", updateField: l }), m && t.type !== "table" && /* @__PURE__ */ e.createElement(s, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: l }), n && /* @__PURE__ */ e.createElement(s, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: l }), /* @__PURE__ */ e.createElement(s, { value: t.table.download, fieldName: "download", label: "Show Download CSV Link", section: "table", updateField: l }), t.type !== "table" && /* @__PURE__ */ e.createElement(s, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: l }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (i) => l("table", null, "cellMinWidth", i.target.value) })));
};
export {
  s as C,
  I as D,
  V as S,
  C as T
};
