import { T as R } from "./storybook-Tooltip-DCJgUFyx.es.js";
import { a as v } from "./storybook-Icon-avKQaL8M.es.js";
import { T as y, S as w } from "./storybook-DataTableEditor-mPZXMSdK.es.js";
import { _ as g } from "./storybook-lodash-ClpRvLhc.es.js";
import { r as k, R as e } from "./storybook-index-9_ikpx_Z.es.js";
import { f as T, D as x, C as D, P as A, a as F, h as O } from "./storybook-Filters-C6YONPbZ.es.js";
const P = ({ fieldName: t, fieldKey: s, fieldType: i, controls: a, deleteField: m, children: d }) => {
  const [E, c] = a, u = E[s], C = (b, r) => {
    c({ ...E, [b]: r });
  };
  return u ? /* @__PURE__ */ React.createElement("fieldset", { className: "edit-block mb-1", key: s }, /* @__PURE__ */ React.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ React.createElement("button", { onClick: () => C(s, !1) }, /* @__PURE__ */ React.createElement(v, { display: "caretUp" })), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (b) => {
        b.preventDefault(), m();
      }
    },
    "Remove"
  )), d) : /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => C(s, !0) }, /* @__PURE__ */ React.createElement(v, { display: "caretDown" })), /* @__PURE__ */ React.createElement("span", null, " ", t ? `${t}` : "New " + i));
}, V = ({ config: t, deleteColumn: s, updateField: i, colKey: a, controls: m }) => {
  var r;
  const [d, E] = m, c = (l, n) => {
    if (l === "dataTable" && n === !0) {
      const o = g.cloneDeep(t.columns);
      o[a] = { ...o[a], dataTable: n }, i(null, null, "columns", o);
    } else
      i("columns", a, l, n);
  }, u = (l) => {
    const n = g.cloneDeep(t.columns), h = { ...t.columns[a], name: l, label: l };
    if (h.dataTable === void 0 && (h.dataTable = !0), l !== a) {
      n[l] = h, delete n[a];
      const p = { ...g.cloneDeep(d), [l]: !0 };
      delete p[a], E(p);
    }
    i(null, null, "columns", n);
  }, C = () => {
    var h;
    const l = t.data.flatMap((p) => Object.keys(p).map((f) => f)), n = Object.values(t.columns).map((p) => p.name), o = g.uniq(l).filter((p) => !(t.table.groupBy === p || n.includes(p)));
    return (h = t.columns[a]) != null && h.name && o.push(t.columns[a].name), o;
  }, b = (r = t.columns[a]) == null ? void 0 : r.name;
  return /* @__PURE__ */ e.createElement(P, { fieldName: b, fieldKey: a, fieldType: "Column", controls: m, deleteField: () => s(a) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[a] ? t.columns[a].name : void 0,
      onChange: (l) => {
        u(l.target.value);
      }
    },
    ["-Select-", ...C()].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), t.type !== "table" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[a] ? t.columns[a].series : "",
      onChange: (l) => {
        c("series", l.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Select series"),
    (t.series || []).map((l) => /* @__PURE__ */ e.createElement("option", { key: l.dataKey }, l.dataKey))
  )), /* @__PURE__ */ e.createElement(y, { value: t.columns[a].label, section: "columns", subsection: a, fieldName: "label", label: "Label", updateField: i }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(y, { value: t.columns[a].prefix, section: "columns", subsection: a, fieldName: "prefix", label: "Prefix", updateField: i }), /* @__PURE__ */ e.createElement(y, { value: t.columns[a].suffix, section: "columns", subsection: a, fieldName: "suffix", label: "Suffix", updateField: i }), /* @__PURE__ */ e.createElement(y, { type: "number", value: t.columns[a].roundToPlace, section: "columns", subsection: a, fieldName: "roundToPlace", label: "Round", updateField: i })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].commas,
      onChange: (l) => {
        c("commas", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ e.createElement("li", null, t.table.showVertical && /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].dataTable ?? !0,
      onChange: (l) => {
        c("dataTable", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Data Table"))), t.visualizationType === "Pie" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].showInViz,
      onChange: (l) => {
        c("showInViz", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Visualization"))), t.type !== "table" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].tooltips || !1,
      onChange: (l) => {
        i("columns", a, "tooltips", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in tooltip"))), t.visualizationType === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].forestPlot || !1,
      onChange: (l) => {
        c("forestPlot", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].forestPlotAlignRight || !1,
      onChange: (l) => {
        c("forestPlotAlignRight", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Align Right"))), !t.columns[a].forestPlotAlignRight && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "text" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: t.columns[a].forestPlotStartingPoint || 0,
      onChange: (l) => {
        c("forestPlotStartingPoint", l.target.value);
      }
    }
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (l) => l.currentTarget.blur(), type: "number", min: "1", value: t.columns[a].order, onChange: (l) => i("columns", a, "order", parseInt(l.target.value)) })));
}, M = ({ config: t, updateField: s, deleteColumn: i }) => {
  var E;
  const a = k.useState({}), m = Object.keys(t.columns), d = (c) => {
    const u = `additionalColumn${c}`, C = {
      label: "New Column",
      dataTable: !0,
      tooltips: !1,
      prefix: "",
      suffix: "",
      forestPlot: !1,
      startingPoint: "0",
      forestPlotAlignRight: !1,
      roundToPlace: 0,
      commas: !1,
      showInViz: !1,
      forestPlotStartingPoint: 0
    }, [b, r] = a;
    r({ ...b, [u]: !0 }), s("columns", null, u, C);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(v, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), m.map((c, u) => /* @__PURE__ */ e.createElement(V, { key: c + u, controls: a, config: t, deleteColumn: i, updateField: s, colKey: c })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (c) => {
        c.preventDefault(), d(m.length + 1);
      }
    },
    "Add Configuration"
  )), ((E = t.legend) == null ? void 0 : E.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(R.Target, null, /* @__PURE__ */ e.createElement(v, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(R.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), t.legend.additionalCategories && t.legend.additionalCategories.map((c, u) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: c }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (C) => {
        C.preventDefault();
        const b = [...t.legend.additionalCategories];
        b.splice(u, 1), s("legend", null, "additionalCategories", b);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement(
    y,
    {
      value: c,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (C, b, r, l) => {
        const n = [...t.legend.additionalCategories];
        n[u] = l, s(C, b, r, n);
      }
    }
  ))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary full-width",
      onClick: (c) => {
        c.preventDefault();
        const u = [...t.legend.additionalCategories || []];
        u.push(""), s("legend", null, "additionalCategories", u);
      }
    },
    "Add Category"
  )));
}, z = ({ filterIndex: t, filter: s, updateFilterProp: i, handleFilterOrder: a }) => /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ React.createElement("select", { value: s.order ? s.order : "asc", onChange: (m) => i("order", t, m.target.value) }, T.map((m, d) => /* @__PURE__ */ React.createElement("option", { value: m.value, key: `filter-${d}` }, m.label))), s.order === "cust" && /* @__PURE__ */ React.createElement(x, { onDragEnd: ({ source: m, destination: d }) => a(m.index, d.index, t, s) }, /* @__PURE__ */ React.createElement(D, { droppableId: "filter_order" }, (m) => /* @__PURE__ */ React.createElement("ul", { ...m.droppableProps, className: "sort-list", ref: m.innerRef, style: { marginTop: "1em" } }, s == null ? void 0 : s.values.map((d, E) => /* @__PURE__ */ React.createElement(A, { key: d, draggableId: `draggableFilter-${d}`, index: E }, (c, u) => /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", { className: u.isDragging ? "currently-dragging" : "", style: c.draggableProps.style, ref: c.innerRef, ...c.draggableProps, ...c.dragHandleProps }, d)))), m.placeholder)))), Y = ({ config: t, updateField: s, rawData: i }) => {
  const a = k.useState({}), m = k.useMemo(() => g.uniq(g.flatten(i.map((r) => Object.keys(r)))), [i]), d = (r) => {
    let l = g.cloneDeep(t.filters);
    l.splice(r, 1), s(null, null, "filters", l);
  }, E = (r, l, n) => {
    s("filters", l, r, n);
  }, c = (r, l) => {
    const n = g.cloneDeep(t.filters), o = n[r];
    o.filterStyle = l, l === "multi-select" ? o.active = Array.isArray(o.active) ? o.active : [o.active] : Array.isArray(o.active) && (o.active = o.active[0]), n[r] = o, s(null, null, "filters", n);
  }, u = (r, l) => {
    const n = g.uniq(i.map((p) => p[l])), o = { ...g.cloneDeep(t.filters[r]), columnName: l, values: n };
    O(o), o.active = o.values[0];
    const h = t.filters.map((p, f) => f === r ? o : p);
    s(null, null, "filters", h);
  }, C = () => {
    const r = t.filters ? [...t.filters] : [], l = { values: [], filterStyle: "dropdown" };
    r.push(l), s(null, null, "filters", r);
  }, b = (r, l, n, o) => {
    const h = [...o.values], [p] = h.splice(r, 1);
    h.splice(l, 0, p);
    const f = g.cloneDeep(t.filters), N = { ...f[n] };
    N.values = h, N.orderedValues = h, N.active = h[0], N.order = "cust", f[n] = N, s(null, null, "filters", f);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, t.filters && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    w,
    {
      value: t.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: s,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ React.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(R.Target, null, /* @__PURE__ */ React.createElement(v, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(R.Content, null, /* @__PURE__ */ React.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("ul", { className: "filters-list" }, t.filters.map((r, l) => r.type === "url" ? /* @__PURE__ */ React.createElement(React.Fragment, null) : /* @__PURE__ */ React.createElement(P, { fieldName: r.columnName, fieldKey: l, fieldType: "Filter", controls: a, deleteField: () => d(l) }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: r.columnName,
      onChange: (n) => {
        u(l, n.target.value);
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"),
    m.map((n, o) => /* @__PURE__ */ React.createElement("option", { value: n, key: o }, n))
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      checked: r.showDropdown === void 0 ? !0 : r.showDropdown,
      onChange: (n) => {
        E("showDropdown", l, n.target.checked);
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: r.filterStyle,
      onChange: (n) => {
        c(l, n.target.value);
      }
    },
    F.map((n, o) => /* @__PURE__ */ React.createElement("option", { key: `filter-style-${o}`, value: n }, n))
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: r.label,
      onChange: (n) => {
        E("label", l, n.target.value);
      }
    }
  )), r.filterStyle === "multi-select" && /* @__PURE__ */ React.createElement(
    y,
    {
      label: "Select Limit",
      value: r.selectLimit,
      updateField: s,
      section: "filters",
      subsection: l,
      fieldName: "selectLimit",
      type: "number",
      tooltip: /* @__PURE__ */ React.createElement(R, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(R.Target, null, /* @__PURE__ */ React.createElement(v, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(R.Content, null, /* @__PURE__ */ React.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: r.setByQueryParameter,
      onChange: (n) => {
        E("setByQueryParameter", l, n.target.value);
      }
    }
  )), /* @__PURE__ */ React.createElement(z, { filterIndex: l, filter: r, updateFilterProp: E, handleFilterOrder: b }))))), !t.filters && /* @__PURE__ */ React.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: C, className: "btn btn-primary full-width" }, "Add Filter"));
}, S = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], B = S.concat(S.map(([t, s]) => [t + t, "Double " + s])), _ = g.fromPairs(g.map(B, ([t, s]) => [s, t]));
export {
  M as C,
  Y as V,
  _ as a,
  B as f
};
