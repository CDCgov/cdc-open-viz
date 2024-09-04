import { r as N, R as e } from "./storybook-index-45401197.es.js";
import { T as a } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as y } from "./storybook-Icon-b09f76c0.es.js";
import { u as g } from "./storybook-useDebounce-78f40efd.es.js";
import { M as H } from "./storybook-MultiSelect-4068d9a0.es.js";
import { _ as k } from "./storybook-lodash-c15d8e1c.es.js";
const L = N.memo((t) => {
  const { display: n = !0, label: T, tooltip: b, section: u = null, subsection: o = null, fieldName: m, updateField: w, value: h, type: s = "text", i: C = null, min: p = null, ...d } = t, [i, l] = N.useState(h), [r] = g(i, 500);
  N.useEffect(() => {
    typeof r == "string" && h !== r && w(u, o, m, r, C);
  }, [r]);
  let E = o ? `${u}-${o}-${m}` : `${u}-${o}-${m}`;
  const f = (x) => {
    s !== "number" || p === null || !x.target.value || p <= parseFloat(x.target.value) ? l(x.target.value) : l(p.toString());
  };
  let c = /* @__PURE__ */ e.createElement("input", { type: "text", name: E, onChange: f, ...d, value: i });
  return s === "textarea" && (c = /* @__PURE__ */ e.createElement("textarea", { name: E, onChange: f, ...d, value: i })), s === "number" && (c = /* @__PURE__ */ e.createElement("input", { type: "number", name: E, onChange: f, ...d, value: i })), s === "date" && (c = /* @__PURE__ */ e.createElement("input", { type: "date", name: E, onChange: f, ...d, value: i })), n ? /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, T, b), c) : /* @__PURE__ */ e.createElement(e.Fragment, null);
}), v = N.memo((t) => {
  const { display: n = !0, label: T, value: b, fieldName: u, section: o = null, subsection: m = null, tooltip: w, updateField: h, ...s } = t;
  return n ? /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: u,
      checked: b,
      onChange: (C) => {
        h(o, m, u, !b);
      },
      ...s
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, T, w)) : /* @__PURE__ */ e.createElement(e.Fragment, null);
}), q = N.memo((t) => {
  const { display: n = !0, label: T, value: b, options: u, fieldName: o, section: m = null, subsection: w = null, required: h = !1, tooltip: s, updateField: C, initial: p, ...d } = t;
  let i = u.map((l, r) => /* @__PURE__ */ e.createElement("option", { value: l, key: r }, l));
  return p && i.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, p)
  ), n ? /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, T, s), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: h && !b ? "warning" : "",
      name: o,
      value: b,
      onChange: (l) => {
        C(m, w, o, l.target.value);
      },
      ...d
    },
    i
  )) : /* @__PURE__ */ e.createElement(e.Fragment, null);
}), B = "-Select-", R = ({ config: t, updateField: n, isDashboard: T, columns: b }) => {
  var s, C, p, d, i;
  const u = ((s = t.dataKey) == null ? void 0 : s.includes("http://")) || ((C = t == null ? void 0 : t.dataKey) == null ? void 0 : C.includes("https://")), o = N.useMemo(() => Object.keys(t.columns).map((l) => [l, t.columns[l].dataTable]).filter(([l, r]) => !r).map(([l]) => l), [t.columns]), m = N.useMemo(() => {
    const l = t.data.flatMap(Object.keys);
    return k.uniq(l).filter((E) => !0);
  }, [t.data]), w = (l) => {
    l === B && (l = void 0), n("table", null, "groupBy", l);
  }, h = (l, r, E, f) => {
    const c = k.cloneDeep(t.columns), x = [];
    for (let D in c) {
      const S = c[D];
      x.push(S.name), f.includes(S.name) && (c[D].dataTable = !1);
    }
    f.forEach((D) => {
      x.includes(D) || (c[D] = { name: D, dataTable: !1 });
    }), n(null, null, "columns", c);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    L,
    {
      value: t.table.label,
      updateField: n,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    v,
    {
      value: t.table.show,
      fieldName: "show",
      label: "Show Data Table",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), t.visualizationType !== "Box Plot" && t.type !== "table" && /* @__PURE__ */ e.createElement(
    v,
    {
      value: t.table.showVertical,
      fieldName: "showVertical",
      label: "Show Vertical Data",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    L,
    {
      value: t.table.indexLabel,
      section: "table",
      fieldName: "indexLabel",
      label: "Index Column Header",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.")))
    }
  ), /* @__PURE__ */ e.createElement(
    L,
    {
      value: t.table.caption,
      updateField: n,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(v, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: " Limit Table Height", updateField: n }), t.table.limitHeight && /* @__PURE__ */ e.createElement(L, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: n }), (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ e.createElement(H, { key: o.join("") + "excluded", options: b.map((l) => ({ label: l, value: l })), selected: o, fieldName: "dataTable", label: "Exclude Columns", section: "columns", updateField: h }), /* @__PURE__ */ e.createElement(v, { value: t.table.collapsible, fieldName: "collapsible", label: " Collapsible", section: "table", updateField: n }), t.table.collapsible !== !1 && /* @__PURE__ */ e.createElement(v, { value: t.table.expanded, fieldName: "expanded", label: " Expanded by Default", section: "table", updateField: n }), T && t.type !== "table" && /* @__PURE__ */ e.createElement(v, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: n }), u && /* @__PURE__ */ e.createElement(v, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: n }), t.type !== "table" && /* @__PURE__ */ e.createElement(v, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: n }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (l) => n("table", null, "cellMinWidth", l.target.value) })), (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Group By", " ", /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Choose a column to use for grouping data rows. The selected column will not be shown in the data table. You will only be able to choose a column which does not have a column configuration.")))), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.table.groupBy,
      onChange: (l) => {
        w(l.target.value);
      }
    },
    [B, ...m.filter((l) => {
      var r, E;
      return l !== ((r = t.table.pivot) == null ? void 0 : r.columnName) && l !== ((E = t.table.pivot) == null ? void 0 : E.valueColumn);
    })].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), /* @__PURE__ */ e.createElement(
    q,
    {
      label: "Pivot Column: ",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Select a Column whos data values will be pivoted to Column Values."))),
      value: (p = t.table.pivot) == null ? void 0 : p.columnName,
      options: m.filter((l) => {
        var r;
        return l !== t.table.groupBy && l !== ((r = t.table.pivot) == null ? void 0 : r.valueColumn);
      }),
      initial: "-Select-",
      section: "table",
      subsection: "pivot",
      fieldName: "columnName",
      updateField: n
    }
  ), ((d = t.table.pivot) == null ? void 0 : d.columnName) && /* @__PURE__ */ e.createElement(
    q,
    {
      label: "Pivot Value Column: ",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "The column whos values will be pivoted under the column selected as the Filter."))),
      value: (i = t.table.pivot) == null ? void 0 : i.valueColumn,
      initial: "-Select-",
      section: "table",
      options: m.filter((l) => {
        var r;
        return l !== ((r = t.table.pivot) == null ? void 0 : r.columnName) && l !== t.table.groupBy;
      }),
      subsection: "pivot",
      fieldName: "valueColumn",
      updateField: n
    }
  ));
};
export {
  v as C,
  R as D,
  q as S,
  L as T
};
