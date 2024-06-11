import { T as C } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as y } from "./storybook-Icon-ed0ee925.es.js";
import { T as v, S } from "./storybook-DataTableEditor-01907213.es.js";
import { _ as E } from "./storybook-lodash-c15d8e1c.es.js";
import { r as T, R as e } from "./storybook-index-45401197.es.js";
import { f as D, a as x, D as A, C as O, P as R, h as F } from "./storybook-Filters-b7b1162e.es.js";
const V = ({ config: t, deleteColumn: c, updateField: b, colKey: a, controls: N }) => {
  var u;
  const [h, f] = N, i = h[a], d = (l, m) => {
    f({ ...h, [l]: m });
  }, r = (l, m) => {
    if (l === "dataTable" && m === !0) {
      const p = E.cloneDeep(t.columns);
      p[a] = { ...p[a], dataTable: m }, b(null, null, "columns", p);
    } else
      b("columns", a, l, m);
  }, s = (l) => {
    const m = E.cloneDeep(t.columns), k = { ...t.columns[a], name: l, label: l };
    if (k.dataTable === void 0 && (k.dataTable = !0), l !== a) {
      m[l] = k, delete m[a];
      const g = { ...E.cloneDeep(h), [l]: !0 };
      delete g[a], f(g);
    }
    b(null, null, "columns", m);
  }, n = () => {
    var k;
    const l = t.data.flatMap((g) => Object.keys(g).map((P) => P)), m = Object.values(t.columns).map((g) => g.name), p = E.uniq(l).filter((g) => !(t.table.groupBy === g || m.includes(g)));
    return (k = t.columns[a]) != null && k.name && p.push(t.columns[a].name), p;
  }, o = (u = t.columns[a]) == null ? void 0 : u.name;
  return i ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: a }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => d(a, !1) }, /* @__PURE__ */ e.createElement(y, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (l) => {
        l.preventDefault(), c(a);
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
  )), /* @__PURE__ */ e.createElement(v, { value: t.columns[a].label, section: "columns", subsection: a, fieldName: "label", label: "Label", updateField: b }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(v, { value: t.columns[a].prefix, section: "columns", subsection: a, fieldName: "prefix", label: "Prefix", updateField: b }), /* @__PURE__ */ e.createElement(v, { value: t.columns[a].suffix, section: "columns", subsection: a, fieldName: "suffix", label: "Suffix", updateField: b }), /* @__PURE__ */ e.createElement(v, { type: "number", value: t.columns[a].roundToPlace, section: "columns", subsection: a, fieldName: "roundToPlace", label: "Round", updateField: b })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
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
        b("columns", a, "tooltips", l.target.checked);
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
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (l) => l.currentTarget.blur(), type: "number", min: "1", value: t.columns[a].order, onChange: (l) => b("columns", a, "order", parseInt(l.target.value)) }))) : /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => d(a, !0) }, /* @__PURE__ */ e.createElement(y, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", o ? `${o}` : "New Column"));
}, Q = ({ config: t, updateField: c, deleteColumn: b }) => {
  var f;
  const a = T.useState({}), N = Object.keys(t.columns), h = (i) => {
    const d = `additionalColumn${i}`, r = {
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
    n({ ...s, [d]: !0 }), c("columns", null, d, r);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(C, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(C.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(C.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), N.map((i, d) => /* @__PURE__ */ e.createElement(V, { key: i + d, controls: a, config: t, deleteColumn: b, updateField: c, colKey: i })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (i) => {
        i.preventDefault(), h(N.length + 1);
      }
    },
    "Add Configuration"
  )), ((f = t.legend) == null ? void 0 : f.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(C, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(C.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(C.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), t.legend.additionalCategories && t.legend.additionalCategories.map((i, d) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: i }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (r) => {
        r.preventDefault();
        const s = [...t.legend.additionalCategories];
        s.splice(d, 1), c("legend", null, "additionalCategories", s);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement(
    v,
    {
      value: i,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (r, s, n, o) => {
        const u = [...t.legend.additionalCategories];
        u[d] = o, c(r, s, n, u);
      }
    }
  ))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary full-width",
      onClick: (i) => {
        i.preventDefault();
        const d = [...t.legend.additionalCategories || []];
        d.push(""), c("legend", null, "additionalCategories", d);
      }
    },
    "Add Category"
  )));
}, Y = ({ config: t, updateField: c, rawData: b }) => {
  const a = () => E.uniq(E.flatten(b.map((r) => Object.keys(r)))), N = (r) => {
    let s = E.cloneDeep(t.filters);
    s.splice(r, 1), c(null, null, "filters", s);
  }, h = (r, s, n) => {
    c("filters", s, r, n);
  }, f = (r, s) => {
    const n = E.uniq(b.map((l) => l[s])), o = { ...E.cloneDeep(t.filters[r]), columnName: s, values: n };
    F(o), o.active = o.values[0];
    const u = t.filters.map((l, m) => m === r ? o : l);
    c(null, null, "filters", u);
  }, i = () => {
    const r = t.filters ? [...t.filters] : [], s = { values: [], filterStyle: "dropdown" };
    r.push(s), c(null, null, "filters", r);
  }, d = (r, s, n, o) => {
    const u = [...o.values], [l] = u.splice(r, 1);
    u.splice(s, 0, l);
    const m = E.cloneDeep(t.filters), p = { ...m[n] };
    p.values = u, p.orderedValues = u, p.active = u[0], p.order = "cust", m[n] = p, c(null, null, "filters", m);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.filters && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    S,
    {
      value: t.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: c,
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
        h("showDropdown", s, n.target.checked);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: r.filterStyle,
      onChange: (n) => {
        h("filterStyle", s, n.target.value);
      }
    },
    D.map((n, o) => /* @__PURE__ */ e.createElement("option", { key: `filter-style-${o}`, value: n }, n))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: r.label,
      onChange: (n) => {
        h("label", s, n.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: r.setByQueryParameter,
      onChange: (n) => {
        h("setByQueryParameter", s, n.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: r.order ? r.order : "asc", onChange: (n) => h("order", s, n.target.value) }, x.map((n, o) => /* @__PURE__ */ e.createElement("option", { value: n.value, key: `filter-${o}` }, n.label))), r.order === "cust" && /* @__PURE__ */ e.createElement(A, { onDragEnd: ({ source: n, destination: o }) => d(n.index, o.index, s, t.filters[s]) }, /* @__PURE__ */ e.createElement(O, { droppableId: "filter_order" }, (n) => {
    var o;
    return /* @__PURE__ */ e.createElement("ul", { ...n.droppableProps, className: "sort-list", ref: n.innerRef, style: { marginTop: "1em" } }, (o = t.filters[s]) == null ? void 0 : o.values.map((u, l) => /* @__PURE__ */ e.createElement(R, { key: u, draggableId: `draggableFilter-${u}`, index: l }, (m, p) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: p.isDragging ? "currently-dragging" : "", style: m.draggableProps.style, ref: m.innerRef, ...m.draggableProps, ...m.dragHandleProps }, u)))), n.placeholder);
  })))))), !t.filters && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: i, className: "btn btn-primary full-width" }, "Add Filter"));
}, w = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], z = w.concat(w.map(([t, c]) => [t + t, "Double " + c])), _ = E.fromPairs(E.map(z, ([t, c]) => [c, t]));
export {
  Q as C,
  Y as V,
  _ as a,
  z as f
};
