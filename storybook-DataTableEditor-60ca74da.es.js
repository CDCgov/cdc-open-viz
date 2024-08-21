import { r as x, R as e } from "./storybook-index-45401197.es.js";
import { T as a } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as r } from "./storybook-Icon-9a8d8f01.es.js";
import { T as c, C as m, S as N } from "./storybook-Inputs-88e145b4.es.js";
import { M as H } from "./storybook-MultiSelect-d9d792fe.es.js";
import { _ as D } from "./storybook-lodash-c15d8e1c.es.js";
const L = "-Select-", V = ({ config: t, updateField: n, isDashboard: S, columns: f }) => {
  var d, E, h, y, v;
  const k = ((d = t.dataKey) == null ? void 0 : d.includes("http://")) || ((E = t == null ? void 0 : t.dataKey) == null ? void 0 : E.includes("https://")), p = x.useMemo(() => Object.keys(t.columns).map((l) => [l, t.columns[l].dataTable]).filter(([l, o]) => !o).map(([l]) => l), [t.columns]), b = x.useMemo(() => {
    const l = t.data.flatMap(Object.keys);
    return D.uniq(l).filter((u) => !0);
  }, [t.data]), q = (l) => {
    l === L && (l = void 0), n("table", null, "groupBy", l);
  }, B = (l, o, u, T) => {
    const i = D.cloneDeep(t.columns), w = [];
    for (let s in i) {
      const C = i[s];
      w.push(C.name), T.includes(C.name) && (i[s].dataTable = !1);
    }
    T.forEach((s) => {
      w.includes(s) || (i[s] = { name: s, dataTable: !1 });
    }), n(null, null, "columns", i);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    c,
    {
      value: t.table.label,
      updateField: n,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    m,
    {
      value: t.table.show,
      fieldName: "show",
      label: "Show Data Table",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), t.visualizationType !== "Box Plot" && t.type !== "table" && /* @__PURE__ */ e.createElement(
    m,
    {
      value: t.table.showVertical,
      fieldName: "showVertical",
      label: "Show Vertical Data",
      section: "table",
      updateField: n,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), t.type !== "table" && /* @__PURE__ */ e.createElement(
    c,
    {
      value: t.table.indexLabel,
      section: "table",
      fieldName: "indexLabel",
      label: "Index Column Header",
      updateField: n,
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.")))
    }
  ), /* @__PURE__ */ e.createElement(
    c,
    {
      value: t.table.caption,
      updateField: n,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(m, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: " Limit Table Height", updateField: n }), t.table.limitHeight && /* @__PURE__ */ e.createElement(c, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: n }), (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ e.createElement(H, { key: p.join("") + "excluded", options: f.map((l) => ({ label: l, value: l })), selected: p, fieldName: "dataTable", label: "Exclude Columns", section: "columns", updateField: B }), /* @__PURE__ */ e.createElement(m, { value: t.table.collapsible, fieldName: "collapsible", label: " Collapsible", section: "table", updateField: n }), t.table.collapsible !== !1 && /* @__PURE__ */ e.createElement(m, { value: t.table.expanded, fieldName: "expanded", label: " Expanded by Default", section: "table", updateField: n }), S && t.type !== "table" && /* @__PURE__ */ e.createElement(m, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: n }), k && /* @__PURE__ */ e.createElement(m, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: n }), t.type !== "table" && /* @__PURE__ */ e.createElement(m, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: n }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (l) => n("table", null, "cellMinWidth", l.target.value) })), (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Group By", " ", /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Choose a column to use for grouping data rows. The selected column will not be shown in the data table. You will only be able to choose a column which does not have a column configuration.")))), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.table.groupBy,
      onChange: (l) => {
        q(l.target.value);
      }
    },
    [L, ...b.filter((l) => {
      var o, u;
      return l !== ((o = t.table.pivot) == null ? void 0 : o.columnName) && l !== ((u = t.table.pivot) == null ? void 0 : u.valueColumn);
    })].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), /* @__PURE__ */ e.createElement(
    N,
    {
      label: "Pivot Column: ",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Select a Column whos data values will be pivoted to Column Values."))),
      value: (h = t.table.pivot) == null ? void 0 : h.columnName,
      options: b.filter((l) => {
        var o;
        return l !== t.table.groupBy && l !== ((o = t.table.pivot) == null ? void 0 : o.valueColumn);
      }),
      initial: "-Select-",
      section: "table",
      subsection: "pivot",
      fieldName: "columnName",
      updateField: n
    }
  ), ((y = t.table.pivot) == null ? void 0 : y.columnName) && /* @__PURE__ */ e.createElement(
    N,
    {
      label: "Pivot Value Column: ",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(r, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "The column whos values will be pivoted under the column selected as the Filter."))),
      value: (v = t.table.pivot) == null ? void 0 : v.valueColumn,
      initial: "-Select-",
      section: "table",
      options: b.filter((l) => {
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
  V as D
};
