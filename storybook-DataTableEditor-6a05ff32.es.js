import { r as x, R as e } from "./storybook-index-45401197.es.js";
import { T as a } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as b } from "./storybook-Icon-736fb775.es.js";
import { u as B } from "./storybook-useDebounce-78f40efd.es.js";
import { M as H } from "./storybook-MultiSelect-5b27422b.es.js";
import { _ as k } from "./storybook-lodash-c15d8e1c.es.js";
const L = x.memo((t) => {
  const { label: n, tooltip: d, section: i = null, subsection: o = null, fieldName: u, updateField: E, value: T, type: c = "text", i: f = null, min: h = null, ...y } = t, [r, m] = x.useState(T), [v] = B(r, 500);
  x.useEffect(() => {
    typeof v == "string" && T !== v && E(i, o, u, v, f);
  }, [v]);
  let l = o ? `${i}-${o}-${u}` : `${i}-${o}-${u}`;
  const s = (C) => {
    c !== "number" || h === null || !C.target.value || h <= parseFloat(C.target.value) ? m(C.target.value) : m(h.toString());
  };
  let w = /* @__PURE__ */ e.createElement("input", { type: "text", name: l, onChange: s, ...y, value: r });
  return c === "textarea" && (w = /* @__PURE__ */ e.createElement("textarea", { name: l, onChange: s, ...y, value: r })), c === "number" && (w = /* @__PURE__ */ e.createElement("input", { type: "number", name: l, onChange: s, ...y, value: r })), c === "date" && (w = /* @__PURE__ */ e.createElement("input", { type: "date", name: l, onChange: s, ...y, value: r })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, n, d), w);
}), p = x.memo((t) => {
  const { label: n, value: d, fieldName: i, section: o = null, subsection: u = null, tooltip: E, updateField: T, ...c } = t;
  return /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: i,
      checked: d,
      onChange: (f) => {
        T(o, u, i, !d);
      },
      ...c
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, n, E));
}), q = x.memo((t) => {
  const { label: n, value: d, options: i, fieldName: o, section: u = null, subsection: E = null, required: T = !1, tooltip: c, updateField: f, initial: h, ...y } = t;
  let r = i.map((m, v) => /* @__PURE__ */ e.createElement("option", { value: m, key: v }, m));
  return h && r.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, h)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, n, c), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: T && !d ? "warning" : "",
      name: o,
      value: d,
      onChange: (m) => {
        f(u, E, o, m.target.value);
      },
      ...y
    },
    r
  ));
}), M = "-Select-", A = ({ config: t, updateField: n, isDashboard: d, columns: i }) => {
  var f, h, y, r, m, v;
  const o = ((f = t.dataKey) == null ? void 0 : f.includes("http://")) || ((h = t == null ? void 0 : t.dataKey) == null ? void 0 : h.includes("https://")), u = x.useMemo(() => Object.keys(t.columns).map((l) => [l, t.columns[l].dataTable]).filter(([l, s]) => !s).map(([l]) => l), [t.columns]), E = x.useMemo(() => {
    const l = t.data.flatMap(Object.keys);
    return k.uniq(l).filter((w) => !0);
  }, [t.data]), T = (l) => {
    l === M && (l = void 0), n("table", null, "groupBy", l);
  }, c = (l, s, w, C) => {
    const D = k.cloneDeep(t.columns), S = [];
    for (let N in D) {
      const g = D[N];
      S.push(g.name), C.includes(g.name) && (D[N].dataTable = !1);
    }
    C.forEach((N) => {
      S.includes(N) || (D[N] = { name: N, dataTable: !1 });
    }), n(null, null, "columns", D);
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
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
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
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
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
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    p,
    {
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, " Selecting this option will display 'N/A' on the data table as an indication of missing or undefined data values."))),
      value: t.table.showMissingDataLabel,
      section: "table",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: n
    }
  ), ((y = t == null ? void 0 : t.preliminaryData) == null ? void 0 : y.some((l) => l.value && l.type === "suppression")) && /* @__PURE__ */ e.createElement(
    p,
    {
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, 'Selecting this option will display "suppressed data symbol" on the data table where suppressed data values are indicated in the Data Series, unless a different symbol was chosen from the data series (e.g., suppression symbol) menu.'))),
      value: t.table.showSuppressedSymbol,
      section: "table",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" symbol',
      updateField: n
    }
  )), t.type !== "table" && /* @__PURE__ */ e.createElement(
    L,
    {
      value: t.table.indexLabel,
      section: "table",
      fieldName: "indexLabel",
      label: "Index Column Header",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.")))
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
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(p, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: " Limit Table Height", updateField: n }), t.table.limitHeight && /* @__PURE__ */ e.createElement(L, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: n }), /* @__PURE__ */ e.createElement(H, { key: u.join("") + "excluded", options: i.map((l) => ({ label: l, value: l })), selected: u, fieldName: "dataTable", label: "Exclude Columns", section: "columns", updateField: c }), /* @__PURE__ */ e.createElement(p, { value: t.table.collapsible, fieldName: "collapsible", label: " Collapsible", section: "table", updateField: n }), t.table.collapsible !== !1 && /* @__PURE__ */ e.createElement(p, { value: t.table.expanded, fieldName: "expanded", label: " Expanded by Default", section: "table", updateField: n }), d && t.type !== "table" && /* @__PURE__ */ e.createElement(p, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: n }), o && /* @__PURE__ */ e.createElement(p, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: n }), t.type !== "table" && /* @__PURE__ */ e.createElement(p, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: n }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (l) => n("table", null, "cellMinWidth", l.target.value) })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Group By", " ", /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Choose a column to use for grouping data rows. The selected column will not be shown in the data table. You will only be able to choose a column which does not have a column configuration.")))), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.table.groupBy,
      onChange: (l) => {
        T(l.target.value);
      }
    },
    [M, ...E.filter((l) => {
      var s, w;
      return l !== ((s = t.table.pivot) == null ? void 0 : s.columnName) && l !== ((w = t.table.pivot) == null ? void 0 : w.valueColumn);
    })].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), /* @__PURE__ */ e.createElement(
    q,
    {
      label: "Pivot Column: ",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Select a Column whos data values will be pivoted to Column Values."))),
      value: (r = t.table.pivot) == null ? void 0 : r.columnName,
      options: E.filter((l) => {
        var s;
        return l !== t.table.groupBy && l !== ((s = t.table.pivot) == null ? void 0 : s.valueColumn);
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
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "The column whos values will be pivoted under the column selected as the Filter."))),
      value: (v = t.table.pivot) == null ? void 0 : v.valueColumn,
      initial: "-Select-",
      section: "table",
      options: E.filter((l) => {
        var s;
        return l !== ((s = t.table.pivot) == null ? void 0 : s.columnName) && l !== t.table.groupBy;
      }),
      subsection: "pivot",
      fieldName: "valueColumn",
      updateField: n
    }
  ));
};
export {
  p as C,
  A as D,
  q as S,
  L as T
};