import { r as D, R as e } from "./storybook-index-45401197.es.js";
import { T as a } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as w } from "./storybook-Icon-ed0ee925.es.js";
import { u as S } from "./storybook-useDebounce-78f40efd.es.js";
import { M as k } from "./storybook-MultiSelect-97f9e57b.es.js";
import { _ as C } from "./storybook-lodash-c15d8e1c.es.js";
const N = D.memo((t) => {
  const { label: n, tooltip: d, section: i = null, subsection: r = null, fieldName: c, updateField: T, value: y, type: u = "text", i: v = null, min: E = null, ...h } = t, [l, s] = D.useState(y), [f] = S(l, 500);
  D.useEffect(() => {
    typeof f == "string" && y !== f && T(i, r, c, f, v);
  }, [f]);
  let o = r ? `${i}-${r}-${c}` : `${i}-${r}-${c}`;
  const b = (m) => {
    u !== "number" || E === null || !m.target.value || E <= parseFloat(m.target.value) ? s(m.target.value) : s(E.toString());
  };
  let x = /* @__PURE__ */ e.createElement("input", { type: "text", name: o, onChange: b, ...h, value: l });
  return u === "textarea" && (x = /* @__PURE__ */ e.createElement("textarea", { name: o, onChange: b, ...h, value: l })), u === "number" && (x = /* @__PURE__ */ e.createElement("input", { type: "number", name: o, onChange: b, ...h, value: l })), u === "date" && (x = /* @__PURE__ */ e.createElement("input", { type: "date", name: o, onChange: b, ...h, value: l })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, n, d), x);
}), p = D.memo((t) => {
  const { label: n, value: d, fieldName: i, section: r = null, subsection: c = null, tooltip: T, updateField: y, ...u } = t;
  return /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: i,
      checked: d,
      onChange: (v) => {
        y(r, c, i, !d);
      },
      ...u
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, n, T));
}), I = D.memo((t) => {
  const { label: n, value: d, options: i, fieldName: r, section: c = null, subsection: T = null, required: y = !1, tooltip: u, updateField: v, initial: E, ...h } = t;
  let l = i.map((s, f) => /* @__PURE__ */ e.createElement("option", { value: s, key: f }, s));
  return E && l.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, E)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, n, u), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: y && !d ? "warning" : "",
      name: r,
      value: d,
      onChange: (s) => {
        v(c, T, r, s.target.value);
      },
      ...h
    },
    l
  ));
}), L = "-Select-", R = ({ config: t, updateField: n, isDashboard: d, columns: i }) => {
  var v, E, h;
  const r = ((v = t.dataKey) == null ? void 0 : v.includes("http://")) || ((E = t == null ? void 0 : t.dataKey) == null ? void 0 : E.includes("https://")), c = D.useMemo(() => Object.keys(t.columns).map((l) => [l, t.columns[l].dataTable]).filter(([l, s]) => !s).map(([l]) => l), [t.columns]), T = () => {
    const l = t.data.flatMap(Object.keys), s = Object.values(t.columns).map((o) => o.name);
    return C.uniq(l).filter((o) => !s.includes(o));
  }, y = (l) => {
    l === L && (l = void 0), n("table", null, "groupBy", l);
  }, u = (l, s, f, o) => {
    const b = C.cloneDeep(t.columns), x = [];
    for (let m in b) {
      const g = b[m];
      x.push(g.name), o.includes(g.name) && (b[m].dataTable = !1);
    }
    o.forEach((m) => {
      x.includes(m) || (b[m] = { name: m, dataTable: !1 });
    }), n(null, null, "columns", b);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    N,
    {
      value: t.table.label,
      updateField: n,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    p,
    {
      value: t.table.show,
      fieldName: "show",
      label: "Show Data Table",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), t.visualizationType !== "Box Plot" && t.type !== "table" && /* @__PURE__ */ e.createElement(
    p,
    {
      value: t.table.showVertical,
      fieldName: "showVertical",
      label: "Show Vertical Data",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    p,
    {
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, " Selecting this option will display 'N/A' on the data table as an indication of missing or undefined data values."))),
      value: t.table.showMissingDataLabel,
      section: "table",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: n
    }
  ), ((h = t == null ? void 0 : t.preliminaryData) == null ? void 0 : h.some((l) => l.value && l.type === "suppression")) && /* @__PURE__ */ e.createElement(
    p,
    {
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, 'Selecting this option will display "suppressed data symbol" on the data table where suppressed data values are indicated in the Data Series, unless a different symbol was chosen from the data series (e.g., suppression symbol) menu.'))),
      value: t.table.showSuppressedSymbol,
      section: "table",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" symbol',
      updateField: n
    }
  )), t.type !== "table" && /* @__PURE__ */ e.createElement(
    N,
    {
      value: t.table.indexLabel,
      section: "table",
      fieldName: "indexLabel",
      label: "Index Column Header",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.")))
    }
  ), /* @__PURE__ */ e.createElement(
    N,
    {
      value: t.table.caption,
      updateField: n,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(p, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: " Limit Table Height", updateField: n }), t.table.limitHeight && /* @__PURE__ */ e.createElement(N, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: n }), /* @__PURE__ */ e.createElement(k, { key: c.join("") + "excluded", options: i.map((l) => ({ label: l, value: l })), selected: c, fieldName: "dataTable", label: "Exclude Columns", section: "columns", updateField: u }), /* @__PURE__ */ e.createElement(p, { value: t.table.collapsible, fieldName: "collapsible", label: " Collapsible", section: "table", updateField: n }), t.table.collapsible !== !1 && /* @__PURE__ */ e.createElement(p, { value: t.table.expanded, fieldName: "expanded", label: " Expanded by Default", section: "table", updateField: n }), d && t.type !== "table" && /* @__PURE__ */ e.createElement(p, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: n }), r && /* @__PURE__ */ e.createElement(p, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: n }), t.type !== "table" && /* @__PURE__ */ e.createElement(p, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: n }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (l) => n("table", null, "cellMinWidth", l.target.value) })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Group By", " ", /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Choose a column to use for grouping data rows. The selected column will not be shown in the data table. You will only be able to choose a column which does not have a column configuration.")))), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.table.groupBy,
      onChange: (l) => {
        y(l.target.value);
      }
    },
    [L, ...T()].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )));
};
export {
  p as C,
  R as D,
  I as S,
  N as T
};
