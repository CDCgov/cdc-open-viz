import { T as f } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as w } from "./storybook-Icon-9a8d8f01.es.js";
import { T as O, S as G } from "./storybook-Inputs-88e145b4.es.js";
import { _ as v } from "./storybook-lodash-c15d8e1c.es.js";
import { R as e, r as V } from "./storybook-index-45401197.es.js";
import { D as $, C as Q, P as R, f as F, h as A, a as q } from "./storybook-Filters-87c6c34b.es.js";
import { M as z } from "./storybook-MultiSelect-d9d792fe.es.js";
const L = ({ fieldName: l, fieldKey: i, fieldType: d, controls: n, deleteField: E, children: N }) => {
  const [b, s] = n, c = b[i], y = (h, S) => {
    s({ ...b, [h]: S });
  };
  return c ? /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block mb-1", key: i }, /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => y(i, !1) }, /* @__PURE__ */ e.createElement(w, { display: "caretUp" })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (h) => {
        h.preventDefault(), E();
      }
    },
    "Remove"
  )), N) : /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, /* @__PURE__ */ e.createElement("button", { onClick: () => y(i, !0) }, /* @__PURE__ */ e.createElement(w, { display: "caretDown" })), /* @__PURE__ */ e.createElement("span", null, " ", l ? `${l}` : "New " + d));
}, j = ({ config: l, deleteColumn: i, updateField: d, colKey: n, controls: E }) => {
  var S;
  const [N, b] = E, s = (t, o) => {
    if (t === "dataTable" && o === !0) {
      const r = v.cloneDeep(l.columns);
      r[n] = { ...r[n], dataTable: o }, d(null, null, "columns", r);
    } else
      d("columns", n, t, o);
  }, c = (t) => {
    const o = v.cloneDeep(l.columns), u = { ...l.columns[n], name: t, label: t };
    if (u.dataTable === void 0 && (u.dataTable = !0), t !== n) {
      o[t] = u, delete o[n];
      const p = { ...v.cloneDeep(N), [t]: !0 };
      delete p[n], b(p);
    }
    d(null, null, "columns", o);
  }, y = () => {
    var u;
    const t = l.data.flatMap((p) => Object.keys(p).map((a) => a)), o = Object.values(l.columns).map((p) => p.name), r = v.uniq(t).filter((p) => !(l.table.groupBy === p || o.includes(p)));
    return (u = l.columns[n]) != null && u.name && r.push(l.columns[n].name), r;
  }, h = (S = l.columns[n]) == null ? void 0 : S.name;
  return /* @__PURE__ */ e.createElement(L, { fieldName: h, fieldKey: n, fieldType: "Column", controls: E, deleteField: () => i(n) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columns[n] ? l.columns[n].name : void 0,
      onChange: (t) => {
        c(t.target.value);
      }
    },
    ["-Select-", ...y()].map((t) => /* @__PURE__ */ e.createElement("option", { key: t }, t))
  )), l.type !== "table" && /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: l.columns[n] ? l.columns[n].series : "",
      onChange: (t) => {
        s("series", t.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Select series"),
    (l.series || []).map((t) => /* @__PURE__ */ e.createElement("option", { key: t.dataKey }, t.dataKey))
  )), /* @__PURE__ */ e.createElement(O, { value: l.columns[n].label, section: "columns", subsection: n, fieldName: "label", label: "Label", updateField: d }), /* @__PURE__ */ e.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ e.createElement("li", { className: "three-col" }, /* @__PURE__ */ e.createElement(O, { value: l.columns[n].prefix, section: "columns", subsection: n, fieldName: "prefix", label: "Prefix", updateField: d }), /* @__PURE__ */ e.createElement(O, { value: l.columns[n].suffix, section: "columns", subsection: n, fieldName: "suffix", label: "Suffix", updateField: d }), /* @__PURE__ */ e.createElement(O, { type: "number", value: l.columns[n].roundToPlace, section: "columns", subsection: n, fieldName: "roundToPlace", label: "Round", updateField: d })), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[n].commas,
      onChange: (t) => {
        s("commas", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ e.createElement("li", null, l.table.showVertical && /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[n].dataTable ?? !0,
      onChange: (t) => {
        s("dataTable", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Data Table"))), l.visualizationType === "Pie" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[n].showInViz,
      onChange: (t) => {
        s("showInViz", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Visualization"))), l.type !== "table" && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[n].tooltips || !1,
      onChange: (t) => {
        d("columns", n, "tooltips", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in tooltip"))), l.visualizationType === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[n].forestPlot || !1,
      onChange: (t) => {
        s("forestPlot", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "checkbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: l.columns[n].forestPlotAlignRight || !1,
      onChange: (t) => {
        s("forestPlotAlignRight", t.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Align Right"))), !l.columns[n].forestPlotAlignRight && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("label", { className: "text" }, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.columns[n].forestPlotStartingPoint || 0,
      onChange: (t) => {
        s("forestPlotStartingPoint", t.target.value);
      }
    }
  ))))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Order"), /* @__PURE__ */ e.createElement("input", { onWheel: (t) => t.currentTarget.blur(), type: "number", min: "1", value: l.columns[n].order, onChange: (t) => d("columns", n, "order", parseInt(t.target.value)) })));
}, I = ({ config: l, updateField: i, deleteColumn: d }) => {
  var b;
  const n = V.useState({}), E = Object.keys(l.columns), N = (s) => {
    const c = `additionalColumn${s}`, y = {
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
    }, [h, S] = n;
    S({ ...h, [c]: !0 }), i("columns", null, c, y);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, l.type !== "navigation" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Configurations", /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), E.map((s, c) => /* @__PURE__ */ e.createElement(j, { key: s + c, controls: n, config: l, deleteColumn: d, updateField: i, colKey: s })), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: (s) => {
        s.preventDefault(), N(E.length + 1);
      }
    },
    "Add Configuration"
  )), ((b = l.legend) == null ? void 0 : b.type) === "category" && /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), l.legend.additionalCategories && l.legend.additionalCategories.map((s, c) => /* @__PURE__ */ e.createElement("fieldset", { className: "edit-block", key: s }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (y) => {
        y.preventDefault();
        const h = [...l.legend.additionalCategories];
        h.splice(c, 1), i("legend", null, "additionalCategories", h);
      }
    },
    "Remove"
  ), /* @__PURE__ */ e.createElement(
    O,
    {
      value: s,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (y, h, S, t) => {
        const o = [...l.legend.additionalCategories];
        o[c] = t, i(y, h, S, o);
      }
    }
  ))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn-primary full-width",
      onClick: (s) => {
        s.preventDefault();
        const c = [...l.legend.additionalCategories || []];
        c.push(""), i("legend", null, "additionalCategories", c);
      }
    },
    "Add Category"
  )));
}, B = ({ orderedValues: l, handleFilterOrder: i }) => /* @__PURE__ */ e.createElement($, { onDragEnd: ({ source: d, destination: n }) => i(d.index, n.index) }, /* @__PURE__ */ e.createElement(Q, { droppableId: "filter_order" }, (d) => /* @__PURE__ */ e.createElement("ul", { ...d.droppableProps, className: "sort-list", ref: d.innerRef, style: { marginTop: "1em" } }, l == null ? void 0 : l.map((n, E) => /* @__PURE__ */ e.createElement(R, { key: n, draggableId: `draggableFilter-${n}`, index: E }, (N, b) => /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("div", { className: b.isDragging ? "currently-dragging" : "", style: N.draggableProps.style, ref: N.innerRef, ...N.draggableProps, ...N.dragHandleProps }, n)))), d.placeholder))), _ = ({ config: l, dataColumns: i, handleGroupingCustomOrder: d, handleNameChange: n, filterIndex: E, rawData: N, updateField: b }) => {
  const s = l.filters[E], c = s == null ? void 0 : s.subGrouping, y = [];
  l.filters.forEach((a, m) => {
    E !== m && (y.push(a.columnName), c != null && c.columnName && y.push(c.columnName));
  });
  const h = (a, m) => {
    b("filters", E, a, m);
  }, S = (a) => {
    const m = {
      values: v.cloneDeep(s.values),
      order: a
    }, g = A(m).values, C = v.cloneDeep(l.filters);
    C[E] = { ...s, values: g, order: a }, a === "cust" ? C[E].orderedValues = g : delete C[E].orderedValues, b(null, null, "filters", C);
  }, t = (a) => {
    b("filters", E, "subGrouping", a);
  }, o = (a) => {
    const g = (s.orderedValues ?? s.values).reduce((k, T) => {
      const P = v.uniq(
        N.map((D) => D[s.columnName] === T ? D[a] : "").filter((D) => D !== "")
      ).sort();
      return k[T] = {
        values: P
        // add temp values when column changes
      }, k;
    }, {}), C = {
      ...c,
      columnName: a,
      valuesLookup: g
    };
    t(C);
  }, r = (a) => {
    const m = Object.keys(c.valuesLookup).reduce((C, k) => {
      const T = c.valuesLookup[k], { values: P } = A({ values: T.values, order: a });
      return C[k] = {
        values: P
      }, a === "cust" ? C[k].orderedValues = P : delete C[k].orderedValues, C;
    }, {}), g = { ...c, order: a, valuesLookup: m };
    t(g);
  }, u = (a, m, g, C) => {
    const k = v.cloneDeep(g), [T] = k.splice(a, 1);
    k.splice(m, 0, T);
    const P = v.cloneDeep(c);
    P.valuesLookup[C].values = k, P.valuesLookup[C].orderedValues = k, t({ ...P, order: "cust" });
  }, p = i.filter((a) => !y.includes(a));
  return /* @__PURE__ */ e.createElement("div", { className: "nesteddropdown-editor" }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: s.label,
      onChange: (a) => {
        h("label", a.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement("select", { value: s.columnName, onChange: (a) => n(a.target.value) }, /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"), p.map((a, m) => /* @__PURE__ */ e.createElement("option", { value: a, key: m }, a)))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ e.createElement("span", null)), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: (c == null ? void 0 : c.columnName) ?? "",
      onChange: (a) => {
        o(a.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    p.map((a, m) => {
      if (a !== s.columnName)
        return /* @__PURE__ */ e.createElement("option", { value: a, key: m }, a);
    })
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: !!s.setByQueryParameter,
      "aria-label": "Create query parameters",
      onChange: (a) => {
        h("setByQueryParameter", s.columnName), t({ ...c, setByQueryParameter: c.columnName });
      }
    }
  ), /* @__PURE__ */ e.createElement("span", null, " Create query parameters"), !!s.setByQueryParameter && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "Grouping: Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: s.setByQueryParameter,
      onChange: (a) => {
        h("setByQueryParameter", a.target.value);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading mt-2" }, "SubGrouping: Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: c.setByQueryParameter,
      onChange: (a) => {
        const m = a.target.value;
        t({ ...c, setByQueryParameter: m });
      }
    }
  ))), /* @__PURE__ */ e.createElement("label", { className: "mt-2" }, /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, s.columnName, " "), /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading " }, "Group Order"), /* @__PURE__ */ e.createElement("select", { value: s.order, onChange: (a) => S(a.target.value) }, F.map((a, m) => /* @__PURE__ */ e.createElement("option", { value: a.value, key: `filter-${a.label}-${m}` }, a.label))), s.order === "cust" && /* @__PURE__ */ e.createElement(
    B,
    {
      orderedValues: s.orderedValues,
      handleFilterOrder: (a, m) => {
        d(a, m, E, s);
      }
    }
  )), (c == null ? void 0 : c.columnName) && /* @__PURE__ */ e.createElement("label", { className: "mt-2" }, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "SubGrouping Order"), /* @__PURE__ */ e.createElement("div", { className: "edit-label column-heading float-right" }, c.columnName, " "), /* @__PURE__ */ e.createElement("select", { value: c.order ? c.order : "asc", onChange: (a) => r(a.target.value) }, F.map((a, m) => /* @__PURE__ */ e.createElement("option", { value: a.value, key: `filter-${m}` }, a.label))), (c == null ? void 0 : c.order) === "cust" && s.values.map((a, m) => {
    const g = c.valuesLookup[a].orderedValues;
    return /* @__PURE__ */ e.createElement("div", { key: `group-subgroup-values-${a}-${m}` }, /* @__PURE__ */ e.createElement("span", { className: "font-weight-bold" }, a), /* @__PURE__ */ e.createElement(
      B,
      {
        key: `subgroup-values-${a}-${m}`,
        orderedValues: g,
        handleFilterOrder: (C, k) => {
          u(C, k, g, a);
        }
      }
    ));
  })));
}, K = ({ config: l, updateField: i, rawData: d }) => {
  const n = V.useState({}), E = V.useMemo(() => v.uniq(v.flatten(d == null ? void 0 : d.map((t) => Object.keys(t)))), [d]), N = (t) => {
    let o = v.cloneDeep(l.filters);
    o.splice(t, 1), i(null, null, "filters", o);
  }, b = (t, o, r) => {
    i("filters", o, t, r);
  }, s = (t, o) => {
    const r = v.cloneDeep(l.filters), u = { ...r[t], orderedValues: r[t].values };
    u.filterStyle = o, o === "multi-select" ? u.active = Array.isArray(u.active) ? u.active : [u.active] : Array.isArray(u.active) && (u.active = u.active[0]), r[t] = u, i(null, null, "filters", r);
  }, c = (t, o) => {
    const r = v.uniq(d.map((m) => m[o])), u = r, p = { ...v.cloneDeep(l.filters[t]), columnName: o, values: r, orderedValues: u };
    A(p), p.active = p.values[0];
    const a = l.filters.map((m, g) => g === t ? p : m);
    i(null, null, "filters", a);
  }, y = () => {
    const t = l.filters ? [...l.filters] : [], o = { values: [], filterStyle: "dropdown", id: Date.now() };
    t.push(o), i(null, null, "filters", t);
  }, h = (t, o, r, u) => {
    const p = [...u.values], [a] = p.splice(t, 1);
    p.splice(o, 0, a);
    const m = v.cloneDeep(l.filters), g = { ...m[r] };
    g.active = p[0], g.orderedValues = p, g.active = p[0], g.order = "cust", m[r] = g, i(null, null, "filters", m);
  }, S = (t) => l.filters.filter((o, r) => r !== t).map(({ label: o, columnName: r, id: u }) => ({ label: o || r, value: u }));
  return /* @__PURE__ */ e.createElement(e.Fragment, null, l.filters && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    G,
    {
      value: l.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: i,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("ul", { className: "filters-list" }, l.filters.map((t, o) => t.type === "url" ? /* @__PURE__ */ e.createElement(e.Fragment, null) : /* @__PURE__ */ e.createElement(L, { key: t.columnName, fieldName: t.columnName, fieldKey: o, fieldType: "Filter", controls: n, deleteField: () => N(o) }, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.filterStyle,
      onChange: (r) => {
        s(o, r.target.value);
      }
    },
    q.map((r, u) => /* @__PURE__ */ e.createElement("option", { key: `filter-style-${u}`, value: r }, r))
  )), t.filterStyle !== "nested-dropdown" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ e.createElement(
    "select",
    {
      value: t.columnName,
      onChange: (r) => {
        c(o, r.target.value);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "- Select Option -"),
    E.map((r, u) => /* @__PURE__ */ e.createElement("option", { value: r, key: u }, r))
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.showDropdown === void 0 ? !0 : t.showDropdown,
      onChange: (r) => {
        b("showDropdown", o, r.target.checked);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: t.label,
      onChange: (r) => {
        b("label", o, r.target.value);
      }
    }
  )), t.filterStyle === "multi-select" && /* @__PURE__ */ e.createElement(
    O,
    {
      label: "Select Limit",
      value: t.selectLimit,
      updateField: i,
      section: "filters",
      subsection: o,
      fieldName: "selectLimit",
      type: "number",
      tooltip: /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: t.setByQueryParameter,
      onChange: (r) => {
        b("setByQueryParameter", o, r.target.value);
      }
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ e.createElement("select", { value: t.order ? t.order : "asc", onChange: (r) => b("order", o, r.target.value) }, F.map((r, u) => /* @__PURE__ */ e.createElement("option", { value: r.value, key: `filter-${u}` }, r.label))), t.order === "cust" && /* @__PURE__ */ e.createElement(B, { orderedValues: t.orderedValues, handleFilterOrder: h }))) : /* @__PURE__ */ e.createElement(
    _,
    {
      config: l,
      dataColumns: E,
      filterIndex: o,
      rawData: d,
      handleGroupingCustomOrder: h,
      handleNameChange: (r) => c(o, r),
      updateField: i,
      updateFilterStyle: s
    }
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Filter Parents", " ", /* @__PURE__ */ e.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(f.Target, null, /* @__PURE__ */ e.createElement(w, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(f.Content, null, /* @__PURE__ */ e.createElement("p", null, "A selected parent's value will be used to filter the available options of this child filter.")))), /* @__PURE__ */ e.createElement(
    z,
    {
      fieldName: "parents",
      updateField: (r, u, p, a) => {
        b("parents", o, a);
      },
      options: S(o)
    }
  )))))), !l.filters && /* @__PURE__ */ e.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: y, className: "btn btn-primary full-width" }, "Add Filter"));
}, x = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], M = x.concat(x.map(([l, i]) => [l + l, "Double " + i])), ee = v.fromPairs(v.map(M, ([l, i]) => [i, l]));
export {
  I as C,
  L as F,
  K as V,
  ee as a,
  M as f
};
