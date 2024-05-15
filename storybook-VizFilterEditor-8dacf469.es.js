import { T as C } from "./storybook-Tooltip-5f8a49cd.es.js";
import { a as y } from "./storybook-Icon-48ed169f.es.js";
import { T as k, S as P } from "./storybook-DataTableEditor-e2d92ec0.es.js";
import { _ as h } from "./storybook-lodash-c15d8e1c.es.js";
import { r as T, R as e } from "./storybook-index-45401197.es.js";
import { f as S, a as x, D, C as A, P as O, h as R } from "./storybook-Filters-353637cd.es.js";
const F = ({ config: t, deleteColumn: p, updateField: E, colKey: a, controls: N }) => {
  var c;
  const [b, f] = N, u = b[a], i = (l, m) => {
    f({ ...b, [l]: m });
  }, r = (l, m) => {
    if (l === "dataTable" && m === !0) {
      const d = h.cloneDeep(t.columns);
      d[a] = { ...d[a], dataTable: m }, E(null, null, "columns", d);
    } else
      E("columns", a, l, m);
  }, s = (l) => {
    const m = h.cloneDeep(t.columns), v = { ...t.columns[a], name: l, label: l };
    if (v.dataTable === void 0 && (v.dataTable = !0), l !== a) {
      m[l] = v, delete m[a];
      const g = { ...h.cloneDeep(b), [l]: !0 };
      delete g[a], f(g);
    }
    E(null, null, "columns", m);
  }, n = () => {
    var v;
    const l = t.data.flatMap((g) => Object.keys(g).map((w) => w)), m = Object.values(t.columns).map((g) => g.name), d = h.uniq(l).filter((g) => !(t.table.groupBy === g || m.includes(g)));
    return (v = t.columns[a]) != null && v.name && d.push(t.columns[a].name), d;
  }, o = (c = t.columns[a]) == null ? void 0 : c.name;
  return u ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: a }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => i(a, !1) }, /* @__PURE__ */ e.createElement(y, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (l) => {
        l.preventDefault(), p(a);
      }
    },
    "Remove"
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[a] ? t.columns[a].name : void 0,
      onChange: (l) => {
        s(l.target.value);
      }
    },
    ["-Select-", ...n()].map((l) => /* @__PURE__ */ e.createElement("option", { key: l }, l))
  )), t.type !== "table" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columns[a] ? t.columns[a].series : "",
      onChange: (l) => {
        r("series", l.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Select series"),
    (t.series || []).map((l) => /* @__PURE__ */ e.createElement("option", { key: l.dataKey }, l.dataKey))
  )), /* @__PURE__ */ e.createElement(k, { value: t.columns[a].label, section: "columns", subsection: a, fieldName: "label", label: "Label", updateField: E }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(k, { value: t.columns[a].prefix, section: "columns", subsection: a, fieldName: "prefix", label: "Prefix", updateField: E }), /* @__PURE__ */ e.createElement(k, { value: t.columns[a].suffix, section: "columns", subsection: a, fieldName: "suffix", label: "Suffix", updateField: E }), /* @__PURE__ */ e.createElement(k, { type: "number", value: t.columns[a].roundToPlace, section: "columns", subsection: a, fieldName: "roundToPlace", label: "Round", updateField: E })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].commas,
      onChange: (l) => {
        r("commas", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ e.createElement("li", null, t.table.showVertical && /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].dataTable ?? !0,
      onChange: (l) => {
        r("dataTable", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Data Table"))), t.visualizationType === "Pie" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].showInViz,
      onChange: (l) => {
        r("showInViz", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Visualization"))), t.type !== "table" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].tooltips || !1,
      onChange: (l) => {
        E("columns", a, "tooltips", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in tooltip"))), t.visualizationType === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].forestPlot || !1,
      onChange: (l) => {
        r("forestPlot", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.columns[a].forestPlotAlignRight || !1,
      onChange: (l) => {
        r("forestPlotAlignRight", l.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Align Right"))), !t.columns[a].forestPlotAlignRight && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "text" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: t.columns[a].forestPlotStartingPoint || 0,
      onChange: (l) => {
        r("forestPlotStartingPoint", l.target.value);
      }
    }
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (l) => l.currentTarget.blur(), type: "number", min: "1", value: t.columns[a].order, onChange: (l) => E("columns", a, "order", parseInt(l.target.value)) }))) : /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => i(a, !0) }, /* @__PURE__ */ e.createElement(y, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", o ? `${o}` : "New Column"));
}, j = ({ config: t, updateField: p, deleteColumn: E }) => {
  var f;
  const a = T.useState({}), N = Object.keys(t.columns), b = (u) => {
    const i = `additionalColumn${u}`, r = {
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
    }, [s, n] = a;
    n({ ...s, [i]: !0 }), p("columns", null, i, r);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(C, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(C.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(C.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), N.map((u, i) => /* @__PURE__ */ e.createElement(F, { key: u + i, controls: a, config: t, deleteColumn: E, updateField: p, colKey: u })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (u) => {
        u.preventDefault(), b(N.length + 1);
      }
    },
    "Add Configuration"
  )), ((f = t.legend) == null ? void 0 : f.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(C, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(C.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(C.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), t.legend.additionalCategories && t.legend.additionalCategories.map((u, i) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: u }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (r) => {
        r.preventDefault();
        const s = [...t.legend.additionalCategories];
        s.splice(i, 1), p("legend", null, "additionalCategories", s);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement(
    k,
    {
      value: u,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (r, s, n, o) => {
        const c = [...t.legend.additionalCategories];
        c[i] = o, p(r, s, n, c);
      }
    }
  ))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary full-width",
      onClick: (u) => {
        u.preventDefault();
        const i = [...t.legend.additionalCategories || []];
        i.push(""), p("legend", null, "additionalCategories", i);
      }
    },
    "Add Category"
  )));
}, L = ({ config: t, updateField: p, rawData: E }) => {
  const a = () => h.uniq(h.flatten(E.map((r) => Object.keys(r)))), N = (r) => {
    let s = h.cloneDeep(t.filters);
    s.splice(r, 1), p(null, null, "filters", s);
  }, b = (r, s, n) => {
    p("filters", s, r, n);
  }, f = (r, s) => {
    const n = h.uniq(E.map((l) => l[s])), o = { ...h.cloneDeep(t.filters[r]), columnName: s, values: n };
    R(o), o.active = o.values[0];
    const c = t.filters.map((l, m) => m === r ? o : l);
    p(null, null, "filters", c);
  }, u = () => {
    const r = t.filters ? [...t.filters] : [], s = { values: [], filterStyle: "dropdown" };
    r.push(s), p(null, null, "filters", r);
  }, i = (r, s, n, o) => {
    const c = [...o.values], [l] = c.splice(r, 1);
    c.splice(s, 0, l);
    const m = h.cloneDeep(t.filters), d = { ...m[n] };
    d.values = c, d.orderedValues = c, d.active = c[0], d.order = "cust", m[n] = d, p(null, null, "filters", m);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.filters && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    P,
    {
      value: t.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: p,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ e.createElement(C, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(C.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(C.Content, null, /* @__PURE__ */ e.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ e.createElement("br", null)), t.filters && /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, t.filters.map((r, s) => r.type === "url" ? /* @__PURE__ */ e.createElement(e.Fragment, null) : /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: s }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        N(s);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.columnName,
      onChange: (n) => {
        f(s, n.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    a().map((n, o) => /* @__PURE__ */ e.createElement("option", { value: n, key: o }, n))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: r.showDropdown === void 0 ? !0 : r.showDropdown,
      onChange: (n) => {
        b("showDropdown", s, n.target.checked);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.filterStyle,
      onChange: (n) => {
        b("filterStyle", s, n.target.value);
      }
    },
    S.map((n, o) => /* @__PURE__ */ e.createElement("option", { key: `filter-style-${o}`, value: n }, n))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: r.label,
      onChange: (n) => {
        b("label", s, n.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: r.setByQueryParameter,
      onChange: (n) => {
        b("setByQueryParameter", s, n.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: r.order ? r.order : "asc", onChange: (n) => b("order", s, n.target.value) }, x.map((n, o) => /* @__PURE__ */ e.createElement("option", { value: n.value, key: `filter-${o}` }, n.label))), r.order === "cust" && /* @__PURE__ */ e.createElement(D, { onDragEnd: ({ source: n, destination: o }) => i(n.index, o.index, s, t.filters[s]) }, /* @__PURE__ */ e.createElement(A, { droppableId: "filter_order" }, (n) => {
    var o;
    return /* @__PURE__ */ e.createElement("ul", { ...n.droppableProps, className: "sort-list", ref: n.innerRef, style: { marginTop: "1em" } }, (o = t.filters[s]) == null ? void 0 : o.values.map((c, l) => /* @__PURE__ */ e.createElement(O, { key: c, draggableId: `draggableFilter-${c}`, index: l }, (m, d) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: d.isDragging ? "currently-dragging" : "", style: m.draggableProps.style, ref: m.innerRef, ...m.draggableProps, ...m.dragHandleProps }, c)))), n.placeholder);
  })))))), !t.filters && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: u, className: "btn btn-primary full-width" }, "Add Filter"));
};
export {
  j as C,
  L as V
};
