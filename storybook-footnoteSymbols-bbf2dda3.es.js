import { T as N } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as w } from "./storybook-Icon-96a1fdd8.es.js";
import { T as P, S as q } from "./storybook-DataTableEditor-5aedf4d7.es.js";
import { _ as C } from "./storybook-lodash-c15d8e1c.es.js";
import { R as e, r as F } from "./storybook-index-45401197.es.js";
import { f as z, D as O, C as x, P as A, a as G, h as V } from "./storybook-Filters-35ab43ae.es.js";
const B = ({ fieldName: l, fieldKey: u, fieldType: o, controls: s, deleteField: d, children: v }) => {
  const [g, i] = s, E = g[u], m = (p, n) => {
    i({ ...g, [p]: n });
  };
  return E ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: u }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => m(u, !1) }, /* @__PURE__ */ e.createElement(w, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (p) => {
        p.preventDefault(), d();
      }
    },
    "Remove"
  )), v) : /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => m(u, !0) }, /* @__PURE__ */ e.createElement(w, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", l ? `${l}` : "New " + o));
}, L = ({ config: l, deleteColumn: u, updateField: o, colKey: s, controls: d }) => {
  var n;
  const [v, g] = d, i = (t, a) => {
    if (t === "dataTable" && a === !0) {
      const c = C.cloneDeep(l.columns);
      c[s] = { ...c[s], dataTable: a }, o(null, null, "columns", c);
    } else
      o("columns", s, t, a);
  }, E = (t) => {
    const a = C.cloneDeep(l.columns), b = { ...l.columns[s], name: t, label: t };
    if (b.dataTable === void 0 && (b.dataTable = !0), t !== s) {
      a[t] = b, delete a[s];
      const r = { ...C.cloneDeep(v), [t]: !0 };
      delete r[s], g(r);
    }
    o(null, null, "columns", a);
  }, m = () => {
    var b;
    const t = l.data.flatMap((r) => Object.keys(r).map((h) => h)), a = Object.values(l.columns).map((r) => r.name), c = C.uniq(t).filter((r) => !(l.table.groupBy === r || a.includes(r)));
    return (b = l.columns[s]) != null && b.name && c.push(l.columns[s].name), c;
  }, p = (n = l.columns[s]) == null ? void 0 : n.name;
  return /* @__PURE__ */ e.createElement(B, { fieldName: p, fieldKey: s, fieldType: "Column", controls: d, deleteField: () => u(s) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columns[s] ? l.columns[s].name : void 0,
      onChange: (t) => {
        E(t.target.value);
      }
    },
    ["-Select-", ...m()].map((t) => /* @__PURE__ */ e.createElement("option", { key: t }, t))
  )), l.type !== "table" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columns[s] ? l.columns[s].series : "",
      onChange: (t) => {
        i("series", t.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Select series"),
    (l.series || []).map((t) => /* @__PURE__ */ e.createElement("option", { key: t.dataKey }, t.dataKey))
  )), /* @__PURE__ */ e.createElement(P, { value: l.columns[s].label, section: "columns", subsection: s, fieldName: "label", label: "Label", updateField: o }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(P, { value: l.columns[s].prefix, section: "columns", subsection: s, fieldName: "prefix", label: "Prefix", updateField: o }), /* @__PURE__ */ e.createElement(P, { value: l.columns[s].suffix, section: "columns", subsection: s, fieldName: "suffix", label: "Suffix", updateField: o }), /* @__PURE__ */ e.createElement(P, { type: "number", value: l.columns[s].roundToPlace, section: "columns", subsection: s, fieldName: "roundToPlace", label: "Round", updateField: o })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[s].commas,
      onChange: (t) => {
        i("commas", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ e.createElement("li", null, l.table.showVertical && /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[s].dataTable ?? !0,
      onChange: (t) => {
        i("dataTable", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Data Table"))), l.visualizationType === "Pie" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[s].showInViz,
      onChange: (t) => {
        i("showInViz", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Visualization"))), l.type !== "table" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[s].tooltips || !1,
      onChange: (t) => {
        o("columns", s, "tooltips", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in tooltip"))), l.visualizationType === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[s].forestPlot || !1,
      onChange: (t) => {
        i("forestPlot", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[s].forestPlotAlignRight || !1,
      onChange: (t) => {
        i("forestPlotAlignRight", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Align Right"))), !l.columns[s].forestPlotAlignRight && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "text" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.columns[s].forestPlotStartingPoint || 0,
      onChange: (t) => {
        i("forestPlotStartingPoint", t.target.value);
      }
    }
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (t) => t.currentTarget.blur(), type: "number", min: "1", value: l.columns[s].order, onChange: (t) => o("columns", s, "order", parseInt(t.target.value)) })));
}, Y = ({ config: l, updateField: u, deleteColumn: o }) => {
  var g;
  const s = F.useState({}), d = Object.keys(l.columns), v = (i) => {
    const E = `additionalColumn${i}`, m = {
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
    }, [p, n] = s;
    n({ ...p, [E]: !0 }), u("columns", null, E, m);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, l.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), d.map((i, E) => /* @__PURE__ */ e.createElement(L, { key: i + E, controls: s, config: l, deleteColumn: o, updateField: u, colKey: i })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (i) => {
        i.preventDefault(), v(d.length + 1);
      }
    },
    "Add Configuration"
  )), ((g = l.legend) == null ? void 0 : g.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), l.legend.additionalCategories && l.legend.additionalCategories.map((i, E) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: i }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (m) => {
        m.preventDefault();
        const p = [...l.legend.additionalCategories];
        p.splice(E, 1), u("legend", null, "additionalCategories", p);
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
      updateField: (m, p, n, t) => {
        const a = [...l.legend.additionalCategories];
        a[E] = t, u(m, p, n, a);
      }
    }
  ))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary full-width",
      onClick: (i) => {
        i.preventDefault();
        const E = [...l.legend.additionalCategories || []];
        E.push(""), u("legend", null, "additionalCategories", E);
      }
    },
    "Add Category"
  )));
}, D = ({ filter: l, filterIndex: u, groupIndex: o, handleFilterOrder: s, handleSubGroupFilterOrderChange: d, subGroupingFilter: v, subGroupingFilterOrder: g, updateFilterProp: i }) => {
  const E = l.values;
  return /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: l.order ? l.order : "asc", onChange: (m) => i("order", u, m.target.value) }, z.map((m, p) => /* @__PURE__ */ e.createElement("option", { value: m.value, key: `filter-${p}` }, m.label))), l.order === "cust" && !g && /* @__PURE__ */ e.createElement(O, { onDragEnd: ({ source: m, destination: p }) => s(m.index, p.index, u, l) }, /* @__PURE__ */ e.createElement(x, { droppableId: "filter_order" }, (m) => /* @__PURE__ */ e.createElement("ul", { ...m.droppableProps, className: "sort-list", ref: m.innerRef, style: { marginTop: "1em" } }, l == null ? void 0 : l.values.map((p, n) => /* @__PURE__ */ e.createElement(A, { key: p, draggableId: `draggableFilter-${p}`, index: n }, (t, a) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: a.isDragging ? "currently-dragging" : "", style: t.draggableProps.style, ref: t.innerRef, ...t.draggableProps, ...t.dragHandleProps }, p)))), m.placeholder))), l.order === "cust" && g && E.map((m, p) => {
    const n = v.values[p];
    return /* @__PURE__ */ e.createElement(e.Fragment, null, m, /* @__PURE__ */ e.createElement(O, { onDragEnd: ({ source: t, destination: a }) => d(t.index, a.index, n, p) }, /* @__PURE__ */ e.createElement(x, { droppableId: "subGroupoing_filter_order" }, (t) => /* @__PURE__ */ e.createElement("ul", { ...t.droppableProps, className: "sort-list", ref: t.innerRef, style: { marginTop: "1em" } }, n && n.map((a, c) => /* @__PURE__ */ e.createElement(A, { key: a, draggableId: `draggableFilter-${a}`, index: c }, (b, r) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: r.isDragging ? "currently-dragging" : "", style: b.draggableProps.style, ref: b.innerRef, ...b.draggableProps, ...b.dragHandleProps }, a)))), t.placeholder))));
  }));
}, Q = ({ allFilters: l, dataColumns: u, filter: o, handleFilterOrder: s, filterIndex: d, rawData: v, updateField: g, updateFilterProp: i, updateFilterStyle: E }) => {
  const [m, p] = F.useState(o.subGroupingFilter), n = [];
  l.forEach((r, h) => {
    var y;
    d !== h && (n.push(r.columnName), (y = r.subGroupingFilter) != null && y.columnName && n.push(r.subGroupingFilter.columnName));
  });
  const t = u.filter((r) => !n.includes(r)), a = (r) => {
    g("filters", d, "subGroupingFilter", r);
  }, c = (r) => {
    const h = o.values, y = [];
    h.map((k) => {
      y.push(
        C.uniq(
          C.values(C.cloneDeep(v)).map((S) => S[o.columnName] === k ? S[r] : "").filter((S) => S !== "")
        )
      );
    });
    const f = {
      ...o.subGroupingFilter,
      columnName: r,
      type: "",
      values: y
    };
    p(f), a(f);
  }, b = (r, h, y, f) => {
    const k = y, [S] = k.splice(r, 1);
    k.splice(h, 0, S);
    const T = m.values;
    T[f] = k, p({ ...m, order: "cust", values: T }), a({ ...m, order: "cust", values: T });
  };
  return /* @__PURE__ */ e.createElement("div", { className: "nesteddropdown-editor" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: o.label,
      onChange: (r) => {
        i("label", d, r.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: o.columnName,
      onChange: (r) => {
        g("filters", d, "columnName", r.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    t.map((r, h) => /* @__PURE__ */ e.createElement("option", { value: r, key: h }, r))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: (m == null ? void 0 : m.columnName) ?? "",
      onChange: (r) => {
        c(r.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    t.map((r, h) => {
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
        i("useQueryParameter", d, r.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", null, " Create query parameters"), o.useQueryParameter && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: o.setByQueryParameter,
      onChange: (r) => {
        i("setByQueryParameter", d, r.target.value);
      }
    }
  ))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-left mt-2" }, "Group"), /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, o.columnName, " "), /* @__PURE__ */ e.createElement(D, { filterIndex: d, filter: o, updateFilterProp: i, handleFilterOrder: s })), o.subGroupingFilter && o.subGroupingFilter.columnName && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-left mt-2" }, "Subgroup"), /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, o.subGroupingFilter.columnName, " "), /* @__PURE__ */ e.createElement(D, { filterIndex: d, filter: o, updateFilterProp: a, handleSubGroupFilterOrderChange: b })));
}, W = ({ config: l, updateField: u, rawData: o }) => {
  const s = F.useState({}), d = F.useMemo(() => C.uniq(C.flatten(o == null ? void 0 : o.map((n) => Object.keys(n)))), [o]), v = (n) => {
    let t = C.cloneDeep(l.filters);
    t.splice(n, 1), u(null, null, "filters", t);
  }, g = (n, t, a) => {
    u("filters", t, n, a);
  }, i = (n, t) => {
    const a = C.cloneDeep(l.filters), c = a[n];
    c.filterStyle = t, t === "multi-select" ? c.active = Array.isArray(c.active) ? c.active : [c.active] : Array.isArray(c.active) && (c.active = c.active[0]), a[n] = c, u(null, null, "filters", a);
  }, E = (n, t) => {
    const a = C.uniq(o.map((r) => r[t])), c = { ...C.cloneDeep(l.filters[n]), columnName: t, values: a };
    V(c), c.active = c.values[0];
    const b = l.filters.map((r, h) => h === n ? c : r);
    u(null, null, "filters", b);
  }, m = () => {
    const n = l.filters ? [...l.filters] : [], t = { values: [], filterStyle: "dropdown" };
    n.push(t), u(null, null, "filters", n);
  }, p = (n, t, a, c) => {
    const b = [...c.values], [r] = b.splice(n, 1);
    b.splice(t, 0, r);
    const h = C.cloneDeep(l.filters), y = { ...h[a] };
    if (y.values = b, y.orderedValues = b, c.filterStyle !== "nested-dropdown" && (y.active = b[0]), y.order = "cust", c.filterStyle === "nested-dropdown") {
      const f = [...c.subGroupingFilter.values], [k] = f.splice(n, 1);
      f.splice(t, 0, k), y.subGroupingFilter.values = f;
    }
    h[a] = y, u(null, null, "filters", h);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, l.filters && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    q,
    {
      value: l.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: u,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, l.filters.map((n, t) => n.type === "url" ? /* @__PURE__ */ e.createElement(e.Fragment, null) : /* @__PURE__ */ e.createElement(B, { fieldName: n.columnName, fieldKey: t, fieldType: "Filter", controls: s, deleteField: () => v(t) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: n.filterStyle,
      onChange: (a) => {
        i(t, a.target.value);
      }
    },
    G.map((a, c) => /* @__PURE__ */ e.createElement("option", { key: `filter-style-${c}`, value: a }, a))
  )), n.filterStyle !== "nested-dropdown" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: n.columnName,
      onChange: (a) => {
        E(t, a.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    d.map((a, c) => /* @__PURE__ */ e.createElement("option", { value: a, key: c }, a))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: n.showDropdown === void 0 ? !0 : n.showDropdown,
      onChange: (a) => {
        g("showDropdown", t, a.target.checked);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: n.label,
      onChange: (a) => {
        g("label", t, a.target.value);
      }
    }
  )), n.filterStyle === "multi-select" && /* @__PURE__ */ e.createElement(
    P,
    {
      label: "Select Limit",
      value: n.selectLimit,
      updateField: u,
      section: "filters",
      subsection: t,
      fieldName: "selectLimit",
      type: "number",
      tooltip: /* @__PURE__ */ e.createElement(N, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(N.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(N.Content, null, /* @__PURE__ */ e.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: n.setByQueryParameter,
      onChange: (a) => {
        g("setByQueryParameter", t, a.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement(D, { filterIndex: t, filter: n, updateFilterProp: g, handleFilterOrder: p })) : /* @__PURE__ */ e.createElement(
    Q,
    {
      allFilters: l.filters,
      dataColumns: d,
      filter: n,
      filterIndex: t,
      filterStyleOptions: G,
      handleFilterOrder: p,
      handleNameChange: E,
      handleSorting: V,
      rawData: o,
      updateField: u,
      updateFilterProp: g,
      updateFilterStyle: i
    }
  ))))), !l.filters && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: m, className: "btn btn-primary full-width" }, "Add Filter"));
}, R = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], $ = R.concat(R.map(([l, u]) => [l + l, "Double " + u])), J = C.fromPairs(C.map($, ([l, u]) => [u, l]));
export {
  Y as C,
  B as F,
  W as V,
  J as a,
  $ as f
};
