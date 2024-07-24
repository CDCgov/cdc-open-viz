import { T as N } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as F } from "./storybook-Icon-96a1fdd8.es.js";
import { T as P, S as z } from "./storybook-DataTableEditor-5aedf4d7.es.js";
import { _ as y } from "./storybook-lodash-c15d8e1c.es.js";
import { R as e, r as w } from "./storybook-index-45401197.es.js";
import { f as x, D as A, C as V, P as R, a as O, h as D } from "./storybook-Filters-5d371d40.es.js";
const B = ({ fieldName: t, fieldKey: c, fieldType: o, controls: n, deleteField: u, children: b }) => {
  const [E, m] = n, p = E[c], d = (g, a) => {
    m({ ...E, [g]: a });
  };
  return p ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: c }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => d(c, !1) }, /* @__PURE__ */ e.createElement(F, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (g) => {
        g.preventDefault(), u();
      }
    },
    "Remove"
  )), b) : /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => d(c, !0) }, /* @__PURE__ */ e.createElement(F, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", t ? `${t}` : "New " + o));
}, L = ({ config: t, deleteColumn: c, updateField: o, colKey: n, controls: u }) => {
  var a;
  const [b, E] = u, m = (l, s) => {
    if (l === "dataTable" && s === !0) {
      const i = y.cloneDeep(t.columns);
      i[n] = { ...i[n], dataTable: s }, o(null, null, "columns", i);
    } else
      o("columns", n, l, s);
  }, p = (l) => {
    const s = y.cloneDeep(t.columns), C = { ...t.columns[n], name: l, label: l };
    if (C.dataTable === void 0 && (C.dataTable = !0), l !== n) {
      s[l] = C, delete s[n];
      const r = { ...y.cloneDeep(b), [l]: !0 };
      delete r[n], E(r);
    }
    o(null, null, "columns", s);
  }, d = () => {
    var C;
    const l = t.data.flatMap((r) => Object.keys(r).map((h) => h)), s = Object.values(t.columns).map((r) => r.name), i = y.uniq(l).filter((r) => !(t.table.groupBy === r || s.includes(r)));
    return (C = t.columns[n]) != null && C.name && i.push(t.columns[n].name), i;
  }, g = (a = t.columns[n]) == null ? void 0 : a.name;
  return /* @__PURE__ */ e.createElement(B, { fieldName: g, fieldKey: n, fieldType: "Column", controls: u, deleteField: () => c(n) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[n] ? t.columns[n].name : void 0,
      onChange: (l) => {
        p(l.target.value);
      }
    },
    ["-Select-", ...d()].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), t.type !== "table" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[n] ? t.columns[n].series : "",
      onChange: (l) => {
        m("series", l.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Select series"),
    (t.series || []).map((l) => /* @__PURE__ */ e.createElement("option", { key: l.dataKey }, l.dataKey))
  )), /* @__PURE__ */ e.createElement(P, { value: t.columns[n].label, section: "columns", subsection: n, fieldName: "label", label: "Label", updateField: o }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(P, { value: t.columns[n].prefix, section: "columns", subsection: n, fieldName: "prefix", label: "Prefix", updateField: o }), /* @__PURE__ */ e.createElement(P, { value: t.columns[n].suffix, section: "columns", subsection: n, fieldName: "suffix", label: "Suffix", updateField: o }), /* @__PURE__ */ e.createElement(P, { type: "number", value: t.columns[n].roundToPlace, section: "columns", subsection: n, fieldName: "roundToPlace", label: "Round", updateField: o })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[n].commas,
      onChange: (l) => {
        m("commas", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ e.createElement("li", null, t.table.showVertical && /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[n].dataTable ?? !0,
      onChange: (l) => {
        m("dataTable", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Data Table"))), t.visualizationType === "Pie" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[n].showInViz,
      onChange: (l) => {
        m("showInViz", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Visualization"))), t.type !== "table" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[n].tooltips || !1,
      onChange: (l) => {
        o("columns", n, "tooltips", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in tooltip"))), t.visualizationType === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[n].forestPlot || !1,
      onChange: (l) => {
        m("forestPlot", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[n].forestPlotAlignRight || !1,
      onChange: (l) => {
        m("forestPlotAlignRight", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Align Right"))), !t.columns[n].forestPlotAlignRight && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "text" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: t.columns[n].forestPlotStartingPoint || 0,
      onChange: (l) => {
        m("forestPlotStartingPoint", l.target.value);
      }
    }
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (l) => l.currentTarget.blur(), type: "number", min: "1", value: t.columns[n].order, onChange: (l) => o("columns", n, "order", parseInt(l.target.value)) })));
}, W = ({ config: t, updateField: c, deleteColumn: o }) => {
  var E;
  const n = w.useState({}), u = Object.keys(t.columns), b = (m) => {
    const p = `additionalColumn${m}`, d = {
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
    }, [g, a] = n;
    a({ ...g, [p]: !0 }), c("columns", null, p, d);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(F, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), u.map((m, p) => /* @__PURE__ */ e.createElement(L, { key: m + p, controls: n, config: t, deleteColumn: o, updateField: c, colKey: m })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (m) => {
        m.preventDefault(), b(u.length + 1);
      }
    },
    "Add Configuration"
  )), ((E = t.legend) == null ? void 0 : E.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(F, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), t.legend.additionalCategories && t.legend.additionalCategories.map((m, p) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: m }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (d) => {
        d.preventDefault();
        const g = [...t.legend.additionalCategories];
        g.splice(p, 1), c("legend", null, "additionalCategories", g);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement(
    P,
    {
      value: m,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (d, g, a, l) => {
        const s = [...t.legend.additionalCategories];
        s[p] = l, c(d, g, a, s);
      }
    }
  ))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary full-width",
      onClick: (m) => {
        m.preventDefault();
        const p = [...t.legend.additionalCategories || []];
        p.push(""), c("legend", null, "additionalCategories", p);
      }
    },
    "Add Category"
  )));
}, q = ({ filterIndex: t, filter: c, updateFilterProp: o, handleFilterOrder: n }) => /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: c.order ? c.order : "asc", onChange: (u) => o("order", t, u.target.value) }, x.map((u, b) => /* @__PURE__ */ e.createElement("option", { value: u.value, key: `filter-${b}` }, u.label))), c.order === "cust" && /* @__PURE__ */ e.createElement(A, { onDragEnd: ({ source: u, destination: b }) => n(u.index, b.index, t, c) }, /* @__PURE__ */ e.createElement(V, { droppableId: "filter_order" }, (u) => /* @__PURE__ */ e.createElement("ul", { ...u.droppableProps, className: "sort-list", ref: u.innerRef, style: { marginTop: "1em" } }, c == null ? void 0 : c.values.map((b, E) => /* @__PURE__ */ e.createElement(R, { key: b, draggableId: `draggableFilter-${b}`, index: E }, (m, p) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: p.isDragging ? "currently-dragging" : "", style: m.draggableProps.style, ref: m.innerRef, ...m.draggableProps, ...m.dragHandleProps }, b)))), u.placeholder)))), Q = ({ filter: t, updateSubFilterProp: c, handleSubGroupFilterOrderChange: o }) => {
  const n = t.values, u = t == null ? void 0 : t.subGroupingFilter;
  return /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: (u == null ? void 0 : u.order) ?? "asc", onChange: (b) => c({ ...u, order: b.target.value }) }, x.map((b, E) => /* @__PURE__ */ e.createElement("option", { value: b.value, key: `filter-${E}` }, b.label))), u.order === "cust" && n.map((b, E) => {
    const m = u.values[E];
    return /* @__PURE__ */ e.createElement(e.Fragment, null, b, /* @__PURE__ */ e.createElement(A, { onDragEnd: ({ source: p, destination: d }) => o(p.index, d.index, m, E) }, /* @__PURE__ */ e.createElement(V, { droppableId: "subGroupoing_filter_order" }, (p) => /* @__PURE__ */ e.createElement("ul", { ...p.droppableProps, className: "sort-list", ref: p.innerRef, style: { marginTop: "1em" } }, m && m.map((d, g) => /* @__PURE__ */ e.createElement(R, { key: d, draggableId: `draggableFilter-${d}`, index: g }, (a, l) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: l.isDragging ? "currently-dragging" : "", style: a.draggableProps.style, ref: a.innerRef, ...a.draggableProps, ...a.dragHandleProps }, d)))), p.placeholder))));
  }));
}, $ = ({ allFilters: t, dataColumns: c, filter: o, handleFilterOrder: n, filterIndex: u, rawData: b, updateField: E, updateFilterProp: m, updateFilterStyle: p }) => {
  const [d, g] = w.useState(o.subGroupingFilter), a = [];
  t.forEach((r, h) => {
    var v;
    u !== h && (a.push(r.columnName), (v = r.subGroupingFilter) != null && v.columnName && a.push(r.subGroupingFilter.columnName));
  });
  const l = c.filter((r) => !a.includes(r)), s = (r) => {
    E("filters", u, "subGroupingFilter", r);
  }, i = (r) => {
    const h = o.values, v = [];
    h.map((k) => {
      v.push(
        y.uniq(
          y.values(y.cloneDeep(b)).map((S) => S[o.columnName] === k ? S[r] : "").filter((S) => S !== "")
        )
      );
    });
    const f = {
      ...o.subGroupingFilter,
      columnName: r,
      type: "",
      values: v
    };
    g(f), s(f);
  }, C = (r, h, v, f) => {
    const k = v, [S] = k.splice(r, 1);
    k.splice(h, 0, S);
    const T = d.values;
    T[f] = k, g({ ...d, order: "cust", values: T }), s({ ...d, order: "cust", values: T });
  };
  return /* @__PURE__ */ e.createElement("div", { className: "nesteddropdown-editor" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: o.label,
      onChange: (r) => {
        m("label", u, r.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnName,
      onChange: (r) => {
        E("filters", u, "columnName", r.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    l.map((r, h) => /* @__PURE__ */ e.createElement("option", { value: r, key: h }, r))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: (d == null ? void 0 : d.columnName) ?? "",
      onChange: (r) => {
        i(r.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    l.map((r, h) => {
      if (r !== o.columnName)
        return /* @__PURE__ */ e.createElement("option", { value: r, key: h }, r);
    })
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.useQueryParameter,
      "aria-label": "Create query parameters",
      onChange: (r) => {
        m("useQueryParameter", u, r.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", null, " Create query parameters"), o.useQueryParameter && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: o.setByQueryParameter,
      onChange: (r) => {
        m("setByQueryParameter", u, r.target.value);
      }
    }
  ))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-left mt-2" }, "Group"), /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, o.columnName, " "), /* @__PURE__ */ e.createElement(q, { filterIndex: u, filter: o, updateFilterProp: m, handleFilterOrder: n })), o.subGroupingFilter && o.subGroupingFilter.columnName && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-left mt-2" }, "Subgroup"), /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, o.subGroupingFilter.columnName, " "), /* @__PURE__ */ e.createElement(Q, { filter: o, updateSubFilterProp: s, handleSubGroupFilterOrderChange: C })));
}, J = ({ config: t, updateField: c, rawData: o }) => {
  const n = w.useState({}), u = w.useMemo(() => y.uniq(y.flatten(o == null ? void 0 : o.map((a) => Object.keys(a)))), [o]), b = (a) => {
    let l = y.cloneDeep(t.filters);
    l.splice(a, 1), c(null, null, "filters", l);
  }, E = (a, l, s) => {
    c("filters", l, a, s);
  }, m = (a, l) => {
    const s = y.cloneDeep(t.filters), i = s[a];
    i.filterStyle = l, l === "multi-select" ? i.active = Array.isArray(i.active) ? i.active : [i.active] : Array.isArray(i.active) && (i.active = i.active[0]), s[a] = i, c(null, null, "filters", s);
  }, p = (a, l) => {
    const s = y.uniq(o.map((r) => r[l])), i = { ...y.cloneDeep(t.filters[a]), columnName: l, values: s };
    D(i), i.active = i.values[0];
    const C = t.filters.map((r, h) => h === a ? i : r);
    c(null, null, "filters", C);
  }, d = () => {
    const a = t.filters ? [...t.filters] : [], l = { values: [], filterStyle: "dropdown" };
    a.push(l), c(null, null, "filters", a);
  }, g = (a, l, s, i) => {
    const C = [...i.values], [r] = C.splice(a, 1);
    C.splice(l, 0, r);
    const h = y.cloneDeep(t.filters), v = { ...h[s] };
    if (v.values = C, v.orderedValues = C, i.filterStyle !== "nested-dropdown" && (v.active = C[0]), v.order = "cust", i.filterStyle === "nested-dropdown") {
      const f = [...i.subGroupingFilter.values], [k] = f.splice(a, 1);
      f.splice(l, 0, k), v.subGroupingFilter.values = f;
    }
    h[s] = v, c(null, null, "filters", h);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.filters && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    z,
    {
      value: t.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: c,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(F, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((a, l) => a.type === "url" ? /* @__PURE__ */ e.createElement(e.Fragment, null) : /* @__PURE__ */ e.createElement(B, { fieldName: a.columnName, fieldKey: l, fieldType: "Filter", controls: n, deleteField: () => b(l) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: a.filterStyle,
      onChange: (s) => {
        m(l, s.target.value);
      }
    },
    O.map((s, i) => /* @__PURE__ */ e.createElement("option", { key: `filter-style-${i}`, value: s }, s))
  )), a.filterStyle !== "nested-dropdown" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: a.columnName,
      onChange: (s) => {
        p(l, s.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    u.map((s, i) => /* @__PURE__ */ e.createElement("option", { value: s, key: i }, s))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: a.showDropdown === void 0 ? !0 : a.showDropdown,
      onChange: (s) => {
        E("showDropdown", l, s.target.checked);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: a.label,
      onChange: (s) => {
        E("label", l, s.target.value);
      }
    }
  )), a.filterStyle === "multi-select" && /* @__PURE__ */ e.createElement(
    P,
    {
      label: "Select Limit",
      value: a.selectLimit,
      updateField: c,
      section: "filters",
      subsection: l,
      fieldName: "selectLimit",
      type: "number",
      tooltip: /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(F, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: a.setByQueryParameter,
      onChange: (s) => {
        E("setByQueryParameter", l, s.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement(q, { filterIndex: l, filter: a, updateFilterProp: E, handleFilterOrder: g })) : /* @__PURE__ */ e.createElement(
    $,
    {
      allFilters: t.filters,
      dataColumns: u,
      filter: a,
      filterIndex: l,
      filterStyleOptions: O,
      handleFilterOrder: g,
      handleNameChange: p,
      handleSorting: D,
      rawData: o,
      updateField: c,
      updateFilterProp: E,
      updateFilterStyle: m
    }
  ))))), !t.filters && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: d, className: "btn btn-primary full-width" }, "Add Filter"));
}, G = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], j = G.concat(G.map(([t, c]) => [t + t, "Double " + c])), X = y.fromPairs(y.map(j, ([t, c]) => [c, t]));
export {
  W as C,
  B as F,
  J as V,
  X as a,
  j as f
};
