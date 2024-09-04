import { T as f } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as N } from "./storybook-Icon-b09f76c0.es.js";
import { T as v, S as w } from "./storybook-DataTableEditor-72372c95.es.js";
import { _ as g } from "./storybook-lodash-c15d8e1c.es.js";
import { R as e, r as S } from "./storybook-index-45401197.es.js";
import { f as x, D as A, C as D, P as F, a as O, h as R } from "./storybook-Filters-4331f963.es.js";
const T = ({ fieldName: t, fieldKey: s, fieldType: m, controls: a, deleteField: i, children: d }) => {
  const [E, o] = a, u = E[s], C = (b, r) => {
    o({ ...E, [b]: r });
  };
  return u ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: s }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => C(s, !1) }, /* @__PURE__ */ e.createElement(N, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (b) => {
        b.preventDefault(), i();
      }
    },
    "Remove"
  )), d) : /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => C(s, !0) }, /* @__PURE__ */ e.createElement(N, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", t ? `${t}` : "New " + m));
}, V = ({ config: t, deleteColumn: s, updateField: m, colKey: a, controls: i }) => {
  var r;
  const [d, E] = i, o = (l, n) => {
    if (l === "dataTable" && n === !0) {
      const c = g.cloneDeep(t.columns);
      c[a] = { ...c[a], dataTable: n }, m(null, null, "columns", c);
    } else
      m("columns", a, l, n);
  }, u = (l) => {
    const n = g.cloneDeep(t.columns), h = { ...t.columns[a], name: l, label: l };
    if (h.dataTable === void 0 && (h.dataTable = !0), l !== a) {
      n[l] = h, delete n[a];
      const p = { ...g.cloneDeep(d), [l]: !0 };
      delete p[a], E(p);
    }
    m(null, null, "columns", n);
  }, C = () => {
    var h;
    const l = t.data.flatMap((p) => Object.keys(p).map((y) => y)), n = Object.values(t.columns).map((p) => p.name), c = g.uniq(l).filter((p) => !(t.table.groupBy === p || n.includes(p)));
    return (h = t.columns[a]) != null && h.name && c.push(t.columns[a].name), c;
  }, b = (r = t.columns[a]) == null ? void 0 : r.name;
  return /* @__PURE__ */ e.createElement(T, { fieldName: b, fieldKey: a, fieldType: "Column", controls: i, deleteField: () => s(a) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
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
        o("series", l.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Select series"),
    (t.series || []).map((l) => /* @__PURE__ */ e.createElement("option", { key: l.dataKey }, l.dataKey))
  )), /* @__PURE__ */ e.createElement(v, { value: t.columns[a].label, section: "columns", subsection: a, fieldName: "label", label: "Label", updateField: m }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(v, { value: t.columns[a].prefix, section: "columns", subsection: a, fieldName: "prefix", label: "Prefix", updateField: m }), /* @__PURE__ */ e.createElement(v, { value: t.columns[a].suffix, section: "columns", subsection: a, fieldName: "suffix", label: "Suffix", updateField: m }), /* @__PURE__ */ e.createElement(v, { type: "number", value: t.columns[a].roundToPlace, section: "columns", subsection: a, fieldName: "roundToPlace", label: "Round", updateField: m })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].commas,
      onChange: (l) => {
        o("commas", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ e.createElement("li", null, t.table.showVertical && /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].dataTable ?? !0,
      onChange: (l) => {
        o("dataTable", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Data Table"))), t.visualizationType === "Pie" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].showInViz,
      onChange: (l) => {
        o("showInViz", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Visualization"))), t.type !== "table" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].tooltips || !1,
      onChange: (l) => {
        m("columns", a, "tooltips", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in tooltip"))), t.visualizationType === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].forestPlot || !1,
      onChange: (l) => {
        o("forestPlot", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].forestPlotAlignRight || !1,
      onChange: (l) => {
        o("forestPlotAlignRight", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Align Right"))), !t.columns[a].forestPlotAlignRight && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "text" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: t.columns[a].forestPlotStartingPoint || 0,
      onChange: (l) => {
        o("forestPlotStartingPoint", l.target.value);
      }
    }
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (l) => l.currentTarget.blur(), type: "number", min: "1", value: t.columns[a].order, onChange: (l) => m("columns", a, "order", parseInt(l.target.value)) })));
}, M = ({ config: t, updateField: s, deleteColumn: m }) => {
  var E;
  const a = S.useState({}), i = Object.keys(t.columns), d = (o) => {
    const u = `additionalColumn${o}`, C = {
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
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(N, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), i.map((o, u) => /* @__PURE__ */ e.createElement(V, { key: o + u, controls: a, config: t, deleteColumn: m, updateField: s, colKey: o })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (o) => {
        o.preventDefault(), d(i.length + 1);
      }
    },
    "Add Configuration"
  )), ((E = t.legend) == null ? void 0 : E.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(N, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), t.legend.additionalCategories && t.legend.additionalCategories.map((o, u) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: o }, /* @__PURE__ */ e.createElement(
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
    v,
    {
      value: o,
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
      onClick: (o) => {
        o.preventDefault();
        const u = [...t.legend.additionalCategories || []];
        u.push(""), s("legend", null, "additionalCategories", u);
      }
    },
    "Add Category"
  )));
}, z = ({ filterIndex: t, filter: s, updateFilterProp: m, handleFilterOrder: a }) => /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: s.order ? s.order : "asc", onChange: (i) => m("order", t, i.target.value) }, x.map((i, d) => /* @__PURE__ */ e.createElement("option", { value: i.value, key: `filter-${d}` }, i.label))), s.order === "cust" && /* @__PURE__ */ e.createElement(A, { onDragEnd: ({ source: i, destination: d }) => a(i.index, d.index, t, s) }, /* @__PURE__ */ e.createElement(D, { droppableId: "filter_order" }, (i) => /* @__PURE__ */ e.createElement("ul", { ...i.droppableProps, className: "sort-list", ref: i.innerRef, style: { marginTop: "1em" } }, s == null ? void 0 : s.values.map((d, E) => /* @__PURE__ */ e.createElement(F, { key: d, draggableId: `draggableFilter-${d}`, index: E }, (o, u) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: u.isDragging ? "currently-dragging" : "", style: o.draggableProps.style, ref: o.innerRef, ...o.draggableProps, ...o.dragHandleProps }, d)))), i.placeholder)))), Y = ({ config: t, updateField: s, rawData: m }) => {
  const a = S.useState({}), i = S.useMemo(() => g.uniq(g.flatten(m == null ? void 0 : m.map((r) => Object.keys(r)))), [m]), d = (r) => {
    let l = g.cloneDeep(t.filters);
    l.splice(r, 1), s(null, null, "filters", l);
  }, E = (r, l, n) => {
    s("filters", l, r, n);
  }, o = (r, l) => {
    const n = g.cloneDeep(t.filters), c = n[r];
    c.filterStyle = l, l === "multi-select" ? c.active = Array.isArray(c.active) ? c.active : [c.active] : Array.isArray(c.active) && (c.active = c.active[0]), n[r] = c, s(null, null, "filters", n);
  }, u = (r, l) => {
    const n = g.uniq(m.map((p) => p[l])), c = { ...g.cloneDeep(t.filters[r]), columnName: l, values: n };
    R(c), c.active = c.values[0];
    const h = t.filters.map((p, y) => y === r ? c : p);
    s(null, null, "filters", h);
  }, C = () => {
    const r = t.filters ? [...t.filters] : [], l = { values: [], filterStyle: "dropdown" };
    r.push(l), s(null, null, "filters", r);
  }, b = (r, l, n, c) => {
    const h = [...c.values], [p] = h.splice(r, 1);
    h.splice(l, 0, p);
    const y = g.cloneDeep(t.filters), k = { ...y[n] };
    k.values = h, k.orderedValues = h, k.active = h[0], k.order = "cust", y[n] = k, s(null, null, "filters", y);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.filters && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    w,
    {
      value: t.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: s,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(N, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((r, l) => r.type === "url" ? /* @__PURE__ */ e.createElement(e.Fragment, null) : /* @__PURE__ */ e.createElement(T, { fieldName: r.columnName, fieldKey: l, fieldType: "Filter", controls: a, deleteField: () => d(l) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnName,
      onChange: (n) => {
        u(l, n.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    i.map((n, c) => /* @__PURE__ */ e.createElement("option", { value: n, key: c }, n))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: r.showDropdown === void 0 ? !0 : r.showDropdown,
      onChange: (n) => {
        E("showDropdown", l, n.target.checked);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.filterStyle,
      onChange: (n) => {
        o(l, n.target.value);
      }
    },
    O.map((n, c) => /* @__PURE__ */ e.createElement("option", { key: `filter-style-${c}`, value: n }, n))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: r.label,
      onChange: (n) => {
        E("label", l, n.target.value);
      }
    }
  )), r.filterStyle === "multi-select" && /* @__PURE__ */ e.createElement(
    v,
    {
      label: "Select Limit",
      value: r.selectLimit,
      updateField: s,
      section: "filters",
      subsection: l,
      fieldName: "selectLimit",
      type: "number",
      tooltip: /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(N, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: r.setByQueryParameter,
      onChange: (n) => {
        E("setByQueryParameter", l, n.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement(z, { filterIndex: l, filter: r, updateFilterProp: E, handleFilterOrder: b }))))), !t.filters && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: C, className: "btn btn-primary full-width" }, "Add Filter"));
}, P = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], B = P.concat(P.map(([t, s]) => [t + t, "Double " + s])), _ = g.fromPairs(g.map(B, ([t, s]) => [s, t]));
export {
  M as C,
  T as F,
  Y as V,
  _ as a,
  B as f
};
