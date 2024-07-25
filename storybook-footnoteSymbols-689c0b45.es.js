import { T as v } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as w } from "./storybook-Icon-96a1fdd8.es.js";
import { T as P, S as q } from "./storybook-DataTableEditor-5aedf4d7.es.js";
import { _ as C } from "./storybook-lodash-c15d8e1c.es.js";
import { R as e, r as F } from "./storybook-index-45401197.es.js";
import { f as z, D as G, C as O, P as A, a as x, h as V } from "./storybook-Filters-c4ed9d96.es.js";
const B = ({ fieldName: t, fieldKey: u, fieldType: o, controls: s, deleteField: b, children: N }) => {
  const [g, i] = s, p = g[u], d = (m, a) => {
    i({ ...g, [m]: a });
  };
  return p ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: u }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => d(u, !1) }, /* @__PURE__ */ e.createElement(w, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (m) => {
        m.preventDefault(), b();
      }
    },
    "Remove"
  )), N) : /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => d(u, !0) }, /* @__PURE__ */ e.createElement(w, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", t ? `${t}` : "New " + o));
}, L = ({ config: t, deleteColumn: u, updateField: o, colKey: s, controls: b }) => {
  var a;
  const [N, g] = b, i = (l, n) => {
    if (l === "dataTable" && n === !0) {
      const c = C.cloneDeep(t.columns);
      c[s] = { ...c[s], dataTable: n }, o(null, null, "columns", c);
    } else
      o("columns", s, l, n);
  }, p = (l) => {
    const n = C.cloneDeep(t.columns), h = { ...t.columns[s], name: l, label: l };
    if (h.dataTable === void 0 && (h.dataTable = !0), l !== s) {
      n[l] = h, delete n[s];
      const r = { ...C.cloneDeep(N), [l]: !0 };
      delete r[s], g(r);
    }
    o(null, null, "columns", n);
  }, d = () => {
    var h;
    const l = t.data.flatMap((r) => Object.keys(r).map((E) => E)), n = Object.values(t.columns).map((r) => r.name), c = C.uniq(l).filter((r) => !(t.table.groupBy === r || n.includes(r)));
    return (h = t.columns[s]) != null && h.name && c.push(t.columns[s].name), c;
  }, m = (a = t.columns[s]) == null ? void 0 : a.name;
  return /* @__PURE__ */ e.createElement(B, { fieldName: m, fieldKey: s, fieldType: "Column", controls: b, deleteField: () => u(s) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[s] ? t.columns[s].name : void 0,
      onChange: (l) => {
        p(l.target.value);
      }
    },
    ["-Select-", ...d()].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), t.type !== "table" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[s] ? t.columns[s].series : "",
      onChange: (l) => {
        i("series", l.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Select series"),
    (t.series || []).map((l) => /* @__PURE__ */ e.createElement("option", { key: l.dataKey }, l.dataKey))
  )), /* @__PURE__ */ e.createElement(P, { value: t.columns[s].label, section: "columns", subsection: s, fieldName: "label", label: "Label", updateField: o }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(P, { value: t.columns[s].prefix, section: "columns", subsection: s, fieldName: "prefix", label: "Prefix", updateField: o }), /* @__PURE__ */ e.createElement(P, { value: t.columns[s].suffix, section: "columns", subsection: s, fieldName: "suffix", label: "Suffix", updateField: o }), /* @__PURE__ */ e.createElement(P, { type: "number", value: t.columns[s].roundToPlace, section: "columns", subsection: s, fieldName: "roundToPlace", label: "Round", updateField: o })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[s].commas,
      onChange: (l) => {
        i("commas", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ e.createElement("li", null, t.table.showVertical && /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[s].dataTable ?? !0,
      onChange: (l) => {
        i("dataTable", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Data Table"))), t.visualizationType === "Pie" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[s].showInViz,
      onChange: (l) => {
        i("showInViz", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Visualization"))), t.type !== "table" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[s].tooltips || !1,
      onChange: (l) => {
        o("columns", s, "tooltips", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in tooltip"))), t.visualizationType === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[s].forestPlot || !1,
      onChange: (l) => {
        i("forestPlot", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[s].forestPlotAlignRight || !1,
      onChange: (l) => {
        i("forestPlotAlignRight", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Align Right"))), !t.columns[s].forestPlotAlignRight && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "text" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: t.columns[s].forestPlotStartingPoint || 0,
      onChange: (l) => {
        i("forestPlotStartingPoint", l.target.value);
      }
    }
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (l) => l.currentTarget.blur(), type: "number", min: "1", value: t.columns[s].order, onChange: (l) => o("columns", s, "order", parseInt(l.target.value)) })));
}, Y = ({ config: t, updateField: u, deleteColumn: o }) => {
  var g;
  const s = F.useState({}), b = Object.keys(t.columns), N = (i) => {
    const p = `additionalColumn${i}`, d = {
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
    }, [m, a] = s;
    a({ ...m, [p]: !0 }), u("columns", null, p, d);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(v, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(v.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(v.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), b.map((i, p) => /* @__PURE__ */ e.createElement(L, { key: i + p, controls: s, config: t, deleteColumn: o, updateField: u, colKey: i })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (i) => {
        i.preventDefault(), N(b.length + 1);
      }
    },
    "Add Configuration"
  )), ((g = t.legend) == null ? void 0 : g.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(v, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(v.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(v.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), t.legend.additionalCategories && t.legend.additionalCategories.map((i, p) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: i }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (d) => {
        d.preventDefault();
        const m = [...t.legend.additionalCategories];
        m.splice(p, 1), u("legend", null, "additionalCategories", m);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement(
    P,
    {
      value: i,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (d, m, a, l) => {
        const n = [...t.legend.additionalCategories];
        n[p] = l, u(d, m, a, n);
      }
    }
  ))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary full-width",
      onClick: (i) => {
        i.preventDefault();
        const p = [...t.legend.additionalCategories || []];
        p.push(""), u("legend", null, "additionalCategories", p);
      }
    },
    "Add Category"
  )));
}, D = ({ filter: t, filterIndex: u, isSubFilter: o = !1, handleFilterOrder: s, updateFilterProp: b, handleSubGroupFilterOrderChange: N, updateSubFilterProp: g }) => {
  const i = t.values, p = t == null ? void 0 : t.subGroupingFilter, d = o ? p : t;
  return /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: `edit-filterOrder column-heading${t.filterStyle === "nested-dropdown" ? " d-none " : ""}` }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: d.order ? d.order : "asc", onChange: (m) => o ? g({ ...p, order: m.target.value }) : b("order", u, m.target.value) }, z.map((m, a) => /* @__PURE__ */ e.createElement("option", { value: m.value, key: `filter-${a}` }, m.label))), !o && t.order === "cust" && /* @__PURE__ */ e.createElement(G, { onDragEnd: ({ source: m, destination: a }) => s(m.index, a.index, u, t) }, /* @__PURE__ */ e.createElement(O, { droppableId: "filter_order" }, (m) => /* @__PURE__ */ e.createElement("ul", { ...m.droppableProps, className: "sort-list", ref: m.innerRef, style: { marginTop: "1em" } }, t == null ? void 0 : t.values.map((a, l) => /* @__PURE__ */ e.createElement(A, { key: a, draggableId: `draggableFilter-${a}`, index: l }, (n, c) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: c.isDragging ? "currently-dragging" : "", style: n.draggableProps.style, ref: n.innerRef, ...n.draggableProps, ...n.dragHandleProps }, a)))), m.placeholder))), o && p.order === "cust" && i.map((m, a) => {
    const l = p.values[a];
    return /* @__PURE__ */ e.createElement(e.Fragment, null, m, /* @__PURE__ */ e.createElement(G, { onDragEnd: ({ source: n, destination: c }) => N(n.index, c.index, l, a) }, /* @__PURE__ */ e.createElement(O, { droppableId: "subGroupoing_filter_order" }, (n) => /* @__PURE__ */ e.createElement("ul", { ...n.droppableProps, className: "sort-list", ref: n.innerRef, style: { marginTop: "1em" } }, l && l.map((c, h) => /* @__PURE__ */ e.createElement(A, { key: c, draggableId: `draggableFilter-${c}`, index: h }, (r, E) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: E.isDragging ? "currently-dragging" : "", style: r.draggableProps.style, ref: r.innerRef, ...r.draggableProps, ...r.dragHandleProps }, c)))), n.placeholder))));
  }));
}, Q = ({ allFilters: t, dataColumns: u, filter: o, handleFilterOrder: s, filterIndex: b, rawData: N, updateField: g, updateFilterProp: i, updateFilterStyle: p }) => {
  const [d, m] = F.useState(o.subGroupingFilter), a = [];
  t.forEach((r, E) => {
    var y;
    b !== E && (a.push(r.columnName), (y = r.subGroupingFilter) != null && y.columnName && a.push(r.subGroupingFilter.columnName));
  });
  const l = u.filter((r) => !a.includes(r)), n = (r) => {
    g("filters", b, "subGroupingFilter", r);
  }, c = (r) => {
    const E = o.values, y = [];
    E.map((k) => {
      y.push(
        C.uniq(
          C.values(C.cloneDeep(N)).map((S) => S[o.columnName] === k ? S[r] : "").filter((S) => S !== "")
        )
      );
    });
    const f = {
      ...o.subGroupingFilter,
      columnName: r,
      type: "",
      values: y
    };
    m(f), n(f);
  }, h = (r, E, y, f) => {
    const k = y, [S] = k.splice(r, 1);
    k.splice(E, 0, S);
    const T = d.values;
    T[f] = k, m({ ...d, order: "cust", values: T }), n({ ...d, order: "cust", values: T });
  };
  return /* @__PURE__ */ e.createElement("div", { className: "nesteddropdown-editor" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: o.label,
      onChange: (r) => {
        i("label", b, r.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnName,
      onChange: (r) => {
        g("filters", b, "columnName", r.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    l.map((r, E) => /* @__PURE__ */ e.createElement("option", { value: r, key: E }, r))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: (d == null ? void 0 : d.columnName) ?? "",
      onChange: (r) => {
        c(r.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    l.map((r, E) => {
      if (r !== o.columnName)
        return /* @__PURE__ */ e.createElement("option", { value: r, key: E }, r);
    })
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.useQueryParameter,
      "aria-label": "Create query parameters",
      onChange: (r) => {
        i("useQueryParameter", b, r.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", null, " Create query parameters"), o.useQueryParameter && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: o.setByQueryParameter,
      onChange: (r) => {
        i("setByQueryParameter", b, r.target.value);
      }
    }
  ))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-left mt-2" }, "Group"), /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, o.columnName, " "), /* @__PURE__ */ e.createElement(D, { filter: o, filterIndex: b, updateFilterProp: i, handleFilterOrder: s })), o.subGroupingFilter && o.subGroupingFilter.columnName && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-left mt-2" }, "Subgroup"), /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, o.subGroupingFilter.columnName, " "), /* @__PURE__ */ e.createElement(D, { filter: o, filterIndex: b, isSubFilter: !0, updateSubFilterProp: n, handleSubGroupFilterOrderChange: h })));
}, W = ({ config: t, updateField: u, rawData: o }) => {
  const s = F.useState({}), b = F.useMemo(() => C.uniq(C.flatten(o == null ? void 0 : o.map((a) => Object.keys(a)))), [o]), N = (a) => {
    let l = C.cloneDeep(t.filters);
    l.splice(a, 1), u(null, null, "filters", l);
  }, g = (a, l, n) => {
    u("filters", l, a, n);
  }, i = (a, l) => {
    const n = C.cloneDeep(t.filters), c = n[a];
    c.filterStyle = l, l === "multi-select" ? c.active = Array.isArray(c.active) ? c.active : [c.active] : Array.isArray(c.active) && (c.active = c.active[0]), n[a] = c, u(null, null, "filters", n);
  }, p = (a, l) => {
    const n = C.uniq(o.map((r) => r[l])), c = { ...C.cloneDeep(t.filters[a]), columnName: l, values: n };
    V(c), c.active = c.values[0];
    const h = t.filters.map((r, E) => E === a ? c : r);
    u(null, null, "filters", h);
  }, d = () => {
    const a = t.filters ? [...t.filters] : [], l = { values: [], filterStyle: "dropdown" };
    a.push(l), u(null, null, "filters", a);
  }, m = (a, l, n, c) => {
    const h = [...c.values], [r] = h.splice(a, 1);
    h.splice(l, 0, r);
    const E = C.cloneDeep(t.filters), y = { ...E[n] };
    if (y.values = h, y.orderedValues = h, c.filterStyle !== "nested-dropdown" && (y.active = h[0]), y.order = "cust", c.filterStyle === "nested-dropdown") {
      const f = [...c.subGroupingFilter.values], [k] = f.splice(a, 1);
      f.splice(l, 0, k), y.subGroupingFilter.values = f;
    }
    E[n] = y, u(null, null, "filters", E);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.filters && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    q,
    {
      value: t.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: u,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ e.createElement(v, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(v.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(v.Content, null, /* @__PURE__ */ e.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((a, l) => a.type === "url" ? /* @__PURE__ */ e.createElement(e.Fragment, null) : /* @__PURE__ */ e.createElement(B, { fieldName: a.columnName, fieldKey: l, fieldType: "Filter", controls: s, deleteField: () => N(l) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: a.filterStyle,
      onChange: (n) => {
        i(l, n.target.value);
      }
    },
    x.map((n, c) => /* @__PURE__ */ e.createElement("option", { key: `filter-style-${c}`, value: n }, n))
  )), a.filterStyle !== "nested-dropdown" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: a.columnName,
      onChange: (n) => {
        p(l, n.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    b.map((n, c) => /* @__PURE__ */ e.createElement("option", { value: n, key: c }, n))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: a.showDropdown === void 0 ? !0 : a.showDropdown,
      onChange: (n) => {
        g("showDropdown", l, n.target.checked);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: a.label,
      onChange: (n) => {
        g("label", l, n.target.value);
      }
    }
  )), a.filterStyle === "multi-select" && /* @__PURE__ */ e.createElement(
    P,
    {
      label: "Select Limit",
      value: a.selectLimit,
      updateField: u,
      section: "filters",
      subsection: l,
      fieldName: "selectLimit",
      type: "number",
      tooltip: /* @__PURE__ */ e.createElement(v, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(v.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(v.Content, null, /* @__PURE__ */ e.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: a.setByQueryParameter,
      onChange: (n) => {
        g("setByQueryParameter", l, n.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement(D, { filterIndex: l, filter: a, updateFilterProp: g, handleFilterOrder: m })) : /* @__PURE__ */ e.createElement(
    Q,
    {
      allFilters: t.filters,
      dataColumns: b,
      filter: a,
      filterIndex: l,
      filterStyleOptions: x,
      handleFilterOrder: m,
      handleNameChange: p,
      handleSorting: V,
      rawData: o,
      updateField: u,
      updateFilterProp: g,
      updateFilterStyle: i
    }
  ))))), !t.filters && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: d, className: "btn btn-primary full-width" }, "Add Filter"));
}, R = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], $ = R.concat(R.map(([t, u]) => [t + t, "Double " + u])), J = C.fromPairs(C.map($, ([t, u]) => [u, t]));
export {
  Y as C,
  B as F,
  W as V,
  J as a,
  $ as f
};
