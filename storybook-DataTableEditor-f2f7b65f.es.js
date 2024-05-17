import { r as C, R as e } from "./storybook-index-45401197.es.js";
import { T as n } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as x } from "./storybook-Icon-48ed169f.es.js";
import { u as L } from "./storybook-useDebounce-78f40efd.es.js";
import { M as k } from "./storybook-MultiSelect-be5791cb.es.js";
import { _ as D } from "./storybook-lodash-c15d8e1c.es.js";
const N = C.memo((t) => {
  const { label: a, tooltip: d, section: i = null, subsection: s = null, fieldName: c, updateField: f, value: h, type: u = "text", i: T = null, min: E = null, ...l } = t, [o, b] = C.useState(h), [r] = L(o, 500);
  C.useEffect(() => {
    typeof r == "string" && h !== r && f(i, s, c, r, T);
  }, [r]);
  let p = s ? `${i}-${s}-${c}` : `${i}-${s}-${c}`;
  const w = (v) => {
    u !== "number" || E === null || !v.target.value || E <= parseFloat(v.target.value) ? b(v.target.value) : b(E.toString());
  };
  let m = /* @__PURE__ */ e.createElement("input", { type: "text", name: p, onChange: w, ...l, value: o });
  return u === "textarea" && (m = /* @__PURE__ */ e.createElement("textarea", { name: p, onChange: w, ...l, value: o })), u === "number" && (m = /* @__PURE__ */ e.createElement("input", { type: "number", name: p, onChange: w, ...l, value: o })), u === "date" && (m = /* @__PURE__ */ e.createElement("input", { type: "date", name: p, onChange: w, ...l, value: o })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, a, d), m);
}), y = C.memo((t) => {
  const { label: a, value: d, fieldName: i, section: s = null, subsection: c = null, tooltip: f, updateField: h, ...u } = t;
  return /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: i,
      checked: d,
      onChange: (T) => {
        h(s, c, i, !d);
      },
      ...u
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, a, f));
}), $ = C.memo((t) => {
  const { label: a, value: d, options: i, fieldName: s, section: c = null, subsection: f = null, required: h = !1, tooltip: u, updateField: T, initial: E, ...l } = t;
  let o = i.map((b, r) => /* @__PURE__ */ e.createElement("option", { value: b, key: r }, b));
  return E && o.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, E)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, a, u), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: h && !d ? "warning" : "",
      name: s,
      value: d,
      onChange: (b) => {
        T(c, f, s, b.target.value);
      },
      ...l
    },
    o
  ));
}), g = "-Select-", I = ({ config: t, updateField: a, isDashboard: d, columns: i }) => {
  var T, E;
  const s = ((T = t.dataKey) == null ? void 0 : T.includes("http://")) || ((E = t == null ? void 0 : t.dataKey) == null ? void 0 : E.includes("https://")), c = C.useMemo(() => Object.keys(t.columns).map((l) => [l, t.columns[l].dataTable]).filter(([l, o]) => !o).map(([l]) => l), [t.columns]), f = () => {
    const l = t.data.flatMap(Object.keys), o = Object.values(t.columns).map((r) => r.name);
    return D.uniq(l).filter((r) => !o.includes(r));
  }, h = (l) => {
    l === g && (l = void 0), a("table", null, "groupBy", l);
  }, u = (l, o, b, r) => {
    const p = D.cloneDeep(t.columns), w = [];
    for (let m in p) {
      const v = p[m];
      w.push(v.name), r.includes(v.name) && (p[m].dataTable = !1);
    }
    r.forEach((m) => {
      w.includes(m) || (p[m] = { name: m, dataTable: !1 });
    }), a(null, null, "columns", p);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    N,
    {
      value: t.table.label,
      updateField: a,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ e.createElement(n, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(n.Target, null, /* @__PURE__ */ e.createElement(x, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(n.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    y,
    {
      value: t.table.show,
      fieldName: "show",
      label: "Show Data Table",
      section: "table",
      updateField: a,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(n, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(n.Target, null, /* @__PURE__ */ e.createElement(x, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(n.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), t.visualizationType !== "Box Plot" && t.type !== "table" && /* @__PURE__ */ e.createElement(
    y,
    {
      value: t.table.showVertical,
      fieldName: "showVertical",
      label: "Show Vertical Data",
      section: "table",
      updateField: a,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(n, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(n.Target, null, /* @__PURE__ */ e.createElement(x, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(n.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    N,
    {
      value: t.table.indexLabel,
      section: "table",
      fieldName: "indexLabel",
      label: "Index Column Header",
      updateField: a,
      tooltip: /* @__PURE__ */ e.createElement(n, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(n.Target, null, /* @__PURE__ */ e.createElement(x, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(n.Content, null, /* @__PURE__ */ e.createElement("p", null, "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.")))
    }
  ), /* @__PURE__ */ e.createElement(
    N,
    {
      value: t.table.caption,
      updateField: a,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ e.createElement(n, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(n.Target, null, /* @__PURE__ */ e.createElement(x, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(n.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(y, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: " Limit Table Height", updateField: a }), t.table.limitHeight && /* @__PURE__ */ e.createElement(N, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: a }), /* @__PURE__ */ e.createElement(k, { key: c.join("") + "excluded", options: i.map((l) => ({ label: l, value: l })), selected: c, fieldName: "dataTable", label: "Exclude Columns", section: "columns", updateField: u }), /* @__PURE__ */ e.createElement(y, { value: t.table.collapsible, fieldName: "collapsible", label: " Collapsible", section: "table", updateField: a }), t.table.collapsible !== !1 && /* @__PURE__ */ e.createElement(y, { value: t.table.expanded, fieldName: "expanded", label: " Expanded by Default", section: "table", updateField: a }), d && t.type !== "table" && /* @__PURE__ */ e.createElement(y, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: a }), s && /* @__PURE__ */ e.createElement(y, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: a }), t.type !== "table" && /* @__PURE__ */ e.createElement(y, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: a }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (l) => a("table", null, "cellMinWidth", l.target.value) })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Group By", " ", /* @__PURE__ */ e.createElement(n, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(n.Target, null, /* @__PURE__ */ e.createElement(x, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(n.Content, null, /* @__PURE__ */ e.createElement("p", null, "Choose a column to use for grouping data rows. The selected column will not be shown in the data table. You will only be able to choose a column which does not have a column configuration.")))), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.table.groupBy,
      onChange: (l) => {
        h(l.target.value);
      }
    },
    [g, ...f()].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )));
};
export {
  y as C,
  I as D,
  $ as S,
  N as T
};
