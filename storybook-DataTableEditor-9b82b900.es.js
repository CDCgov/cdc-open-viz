import { r as N, R as e } from "./storybook-index-45401197.es.js";
import { T as a } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as T } from "./storybook-Icon-b09f76c0.es.js";
import { u as H } from "./storybook-useDebounce-78f40efd.es.js";
import { M } from "./storybook-MultiSelect-4068d9a0.es.js";
import { _ as k } from "./storybook-lodash-c15d8e1c.es.js";
const D = N.memo((t) => {
  const { label: n, tooltip: p, section: i = null, subsection: r = null, fieldName: u, updateField: d, value: v, type: c = "text", i: C = null, min: E = null, ...h } = t, [m, s] = N.useState(v), [l] = H(m, 500);
  N.useEffect(() => {
    typeof l == "string" && v !== l && d(i, r, u, l, C);
  }, [l]);
  let o = r ? `${i}-${r}-${u}` : `${i}-${r}-${u}`;
  const y = (b) => {
    c !== "number" || E === null || !b.target.value || E <= parseFloat(b.target.value) ? s(b.target.value) : s(E.toString());
  };
  let x = /* @__PURE__ */ e.createElement("input", { type: "text", name: o, onChange: y, ...h, value: m });
  return c === "textarea" && (x = /* @__PURE__ */ e.createElement("textarea", { name: o, onChange: y, ...h, value: m })), c === "number" && (x = /* @__PURE__ */ e.createElement("input", { type: "number", name: o, onChange: y, ...h, value: m })), c === "date" && (x = /* @__PURE__ */ e.createElement("input", { type: "date", name: o, onChange: y, ...h, value: m })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, n, p), x);
}), w = N.memo((t) => {
  const { label: n, value: p, fieldName: i, section: r = null, subsection: u = null, tooltip: d, updateField: v, ...c } = t;
  return /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: i,
      checked: p,
      onChange: (C) => {
        v(r, u, i, !p);
      },
      ...c
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, n, d));
}), q = N.memo((t) => {
  const { label: n, value: p, options: i, fieldName: r, section: u = null, subsection: d = null, required: v = !1, tooltip: c, updateField: C, initial: E, ...h } = t;
  let m = i.map((s, l) => /* @__PURE__ */ e.createElement("option", { value: s, key: l }, s));
  return E && m.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, E)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, n, c), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: v && !p ? "warning" : "",
      name: r,
      value: p,
      onChange: (s) => {
        C(u, d, r, s.target.value);
      },
      ...h
    },
    m
  ));
}), B = "-Select-", R = ({ config: t, updateField: n, isDashboard: p, columns: i }) => {
  var C, E, h, m, s;
  const r = ((C = t.dataKey) == null ? void 0 : C.includes("http://")) || ((E = t == null ? void 0 : t.dataKey) == null ? void 0 : E.includes("https://")), u = N.useMemo(() => Object.keys(t.columns).map((l) => [l, t.columns[l].dataTable]).filter(([l, o]) => !o).map(([l]) => l), [t.columns]), d = N.useMemo(() => {
    const l = t.data.flatMap(Object.keys);
    return k.uniq(l).filter((y) => !0);
  }, [t.data]), v = (l) => {
    l === B && (l = void 0), n("table", null, "groupBy", l);
  }, c = (l, o, y, x) => {
    const b = k.cloneDeep(t.columns), L = [];
    for (let f in b) {
      const S = b[f];
      L.push(S.name), x.includes(S.name) && (b[f].dataTable = !1);
    }
    x.forEach((f) => {
      L.includes(f) || (b[f] = { name: f, dataTable: !1 });
    }), n(null, null, "columns", b);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    D,
    {
      value: t.table.label,
      updateField: n,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    w,
    {
      value: t.table.show,
      fieldName: "show",
      label: "Show Data Table",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), t.visualizationType !== "Box Plot" && t.type !== "table" && /* @__PURE__ */ e.createElement(
    w,
    {
      value: t.table.showVertical,
      fieldName: "showVertical",
      label: "Show Vertical Data",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    D,
    {
      value: t.table.indexLabel,
      section: "table",
      fieldName: "indexLabel",
      label: "Index Column Header",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.")))
    }
  ), /* @__PURE__ */ e.createElement(
    D,
    {
      value: t.table.caption,
      updateField: n,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(w, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: " Limit Table Height", updateField: n }), t.table.limitHeight && /* @__PURE__ */ e.createElement(D, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: n }), (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ e.createElement(M, { key: u.join("") + "excluded", options: i.map((l) => ({ label: l, value: l })), selected: u, fieldName: "dataTable", label: "Exclude Columns", section: "columns", updateField: c }), /* @__PURE__ */ e.createElement(w, { value: t.table.collapsible, fieldName: "collapsible", label: " Collapsible", section: "table", updateField: n }), t.table.collapsible !== !1 && /* @__PURE__ */ e.createElement(w, { value: t.table.expanded, fieldName: "expanded", label: " Expanded by Default", section: "table", updateField: n }), p && t.type !== "table" && /* @__PURE__ */ e.createElement(w, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: n }), r && /* @__PURE__ */ e.createElement(w, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: n }), t.type !== "table" && /* @__PURE__ */ e.createElement(w, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: n }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (l) => n("table", null, "cellMinWidth", l.target.value) })), (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Group By", " ", /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Choose a column to use for grouping data rows. The selected column will not be shown in the data table. You will only be able to choose a column which does not have a column configuration.")))), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.table.groupBy,
      onChange: (l) => {
        v(l.target.value);
      }
    },
    [B, ...d.filter((l) => {
      var o, y;
      return l !== ((o = t.table.pivot) == null ? void 0 : o.columnName) && l !== ((y = t.table.pivot) == null ? void 0 : y.valueColumn);
    })].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), /* @__PURE__ */ e.createElement(
    q,
    {
      label: "Pivot Column: ",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Select a Column whos data values will be pivoted to Column Values."))),
      value: (h = t.table.pivot) == null ? void 0 : h.columnName,
      options: d.filter((l) => {
        var o;
        return l !== t.table.groupBy && l !== ((o = t.table.pivot) == null ? void 0 : o.valueColumn);
      }),
      initial: "-Select-",
      section: "table",
      subsection: "pivot",
      fieldName: "columnName",
      updateField: n
    }
  ), ((m = t.table.pivot) == null ? void 0 : m.columnName) && /* @__PURE__ */ e.createElement(
    q,
    {
      label: "Pivot Value Column: ",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(T, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "The column whos values will be pivoted under the column selected as the Filter."))),
      value: (s = t.table.pivot) == null ? void 0 : s.valueColumn,
      initial: "-Select-",
      section: "table",
      options: d.filter((l) => {
        var o;
        return l !== ((o = t.table.pivot) == null ? void 0 : o.columnName) && l !== t.table.groupBy;
      }),
      subsection: "pivot",
      fieldName: "valueColumn",
      updateField: n
    }
  ));
};
export {
  w as C,
  R as D,
  q as S,
  D as T
};
