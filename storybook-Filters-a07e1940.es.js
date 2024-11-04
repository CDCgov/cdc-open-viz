import { r as $, R as m } from "./storybook-index-45401197.es.js";
import { B as se } from "./storybook-Button-d74e310e.es.js";
import { M as ne } from "./storybook-MultiSelect-25c4ae51.es.js";
import { _ as H } from "./storybook-lodash-a4231e1c.es.js";
import { N as oe } from "./storybook-NestedDropdown-7810a864.es.js";
function Z(e) {
  const n = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const c = n.get(e.setByQueryParameter);
    if (c && e.values) {
      for (let t = 0; t < e.values.length; t++)
        if (e.values[t] && e.values[t].toLowerCase() === c.toLowerCase())
          return e.values[t];
    }
  }
}
function z() {
  const e = {};
  for (const [n, c] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[n] = c;
  return e;
}
function x(e) {
  const n = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((c) => `${c}=${encodeURIComponent(e[c])}`).join("&")}`;
  window.history.pushState({ path: n }, "", n);
}
function ge(e, n) {
  const c = z();
  c[e] = n, x(c);
}
const K = (e, n) => {
  if (!n)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return n;
  const c = [];
  return n == null || n.forEach((t) => {
    let a = !0;
    e.filter((s) => s.type !== "url").forEach((s) => {
      if (s.active === void 0)
        return;
      const o = t[s.columnName];
      if (Array.isArray(s.active) ? s.active.includes(o) || (a = !1) : o != s.active && (a = !1), s.filterStyle === "nested-dropdown" && s.subGrouping && a === !0) {
        const u = s.subGrouping.active, h = t[s.subGrouping.columnName];
        if (u === void 0)
          return;
        h != u && (a = !1);
      }
    }), a && c.push(t);
  }), c;
}, re = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([n, { orderedValues: c }]) => c ? [n, { orderedValues: c, values: [] }] : [n, { values: [] }])
), ce = (e, n) => {
  var o, u;
  const c = e.columnName, t = [], a = (o = e.subGrouping) == null ? void 0 : o.columnName, s = re((u = e.subGrouping) == null ? void 0 : u.valuesLookup);
  if (Array.isArray(n))
    n.forEach((h) => {
      const i = h[c];
      if (i !== void 0 && !t.includes(i) && t.push(i), a) {
        const v = h[a];
        if (i === void 0)
          return;
        s[i] || (s[i] = { values: [] }), s[i].values.includes(v) || s[i].values.push(v);
      }
    });
  else {
    if (!n)
      return t;
    Object.values(n).forEach((h) => {
      h.forEach((i) => {
        const v = i[c];
        v !== void 0 && !t.includes(v) && t.push(v);
      });
    });
  }
  e.values = t, a && (e.subGrouping.valuesLookup = s);
}, le = (e, n, c) => {
  let t = Array.isArray(n) ? n : Object.values(n).flat(1);
  return e.parents.forEach((a) => {
    const s = c[a];
    if ((s == null ? void 0 : s.filterStyle) === "nested-dropdown") {
      const { subGrouping: o } = s;
      o != null && o.active && (t = t.filter((u) => {
        const h = s.active == u[s.columnName], i = o.active == u[o.columnName];
        return h && i;
      }));
    } else
      s != null && s.active && (t = t.filter((o) => Array.isArray(s.active) ? s.active.includes(o[s.columnName]) : s.active == o[s.columnName]));
  }), t;
}, J = (e, n) => e.map((c) => String(c)).includes(String(n)), I = (e, n) => {
  const c = H.keyBy(e, "id");
  return e == null ? void 0 : e.map((t) => {
    var u;
    const a = H.cloneDeep(t);
    let s = n;
    const o = !Array.isArray(n);
    if ((u = t.parents) != null && u.length && !o && (s = le(t, n, c)), ce(a, s), a.values.length > 0) {
      const h = Z(a);
      if (h)
        a.active = h;
      else if (a.filterStyle === "multi-select") {
        const i = a.values, v = Array.isArray(a.active) ? a.active : [a.active];
        a.active = v.filter((k) => J(i, k));
      } else {
        const i = a.values[0], v = Array.isArray(a.active) ? a.active[0] : a.active;
        a.active = J(a.values, v) ? v : i;
      }
    }
    if (a.subGrouping) {
      const h = a.active, i = {
        ...a.subGrouping,
        values: a.subGrouping.valuesLookup[h].values
      }, v = Z(i), k = a.active || a.values[0], w = a.subGrouping.valuesLookup[k].values[0], Q = Object.values(a.subGrouping.valuesLookup).flatMap((B) => B.values), j = v || a.subGrouping.active;
      a.subGrouping.active = Q.includes(j) ? j : w;
    }
    return a;
  });
}, ue = ({ orderedValues: e, values: n, subGrouping: c }) => (e != null && e.length ? e.filter((s) => n.includes(s)) : n).map((s) => {
  if (!c)
    return [[s], []];
  const { orderedValues: o, values: u } = c.valuesLookup[s], h = (o == null ? void 0 : o.filter((v) => u.includes(v))) || u;
  return [
    [s],
    h.map((v) => [v])
  ];
}), ie = (e) => {
  e.filterStyle === F.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, X = (e) => {
  var t;
  const n = H.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (t = e.orderedValues) != null && t.length ? e.orderedValues : n, e;
  const c = (a, s) => {
    const o = e.order !== "desc";
    return String(o ? a : s).localeCompare(String(o ? s : a), "en", { numeric: !0 });
  };
  return e.values = n.sort(c), e;
}, F = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, me = Object.values(F), pe = [
  {
    label: "Ascending Alphanumeric",
    value: "asc"
  },
  {
    label: "Descending Alphanumeric",
    value: "desc"
  },
  {
    label: "Custom",
    value: "cust"
  }
], O = ["chart", "table"], de = (e) => {
  const [n, c] = $.useState(!1), { config: t, setConfig: a, filteredData: s, setFilteredData: o, excludedData: u, getUniqueValues: h } = e, { type: i, data: v } = t;
  return {
    handleApplyButton: (E) => {
      let A = !1;
      const d = z();
      E.forEach((g) => {
        g.queuedActive && (ie(g), g.setByQueryParameter && d[g.setByQueryParameter] !== g.active && (d[g.setByQueryParameter] = g.active, A = !0));
      }), A && x(d), a({ ...t, filters: E }), i === "map" && o(E, u), O.includes(t.type) && o(K(E, u)), c(!1);
    },
    changeFilterActive: (E, A) => {
      var g, y, L;
      let d = t.type === "map" ? [...s] : [...t.filters];
      if (t.filterBehavior === "Apply Button")
        d[E].queuedActive = A, c(!0);
      else {
        const l = d[E];
        l.filterStyle !== "nested-dropdown" ? l.active = A : (l.active = A[0], l.subGrouping.active = A[1]);
        const p = z();
        l.setByQueryParameter && p[l.setByQueryParameter] !== l.active && (p[l.setByQueryParameter] = l.active, x(p)), (g = l == null ? void 0 : l.subGrouping) != null && g.setByQueryParameter && p[(y = l == null ? void 0 : l.subGrouping) == null ? void 0 : y.setByQueryParameter] !== (l == null ? void 0 : l.subGrouping.active) && (p[(L = l == null ? void 0 : l.subGrouping) == null ? void 0 : L.setByQueryParameter] = l.subGrouping.active, x(p)), o(d[E]);
      }
      if (t.dynamicSeries || (d = I(d, u), a({
        ...t,
        filters: d
      })), t.type === "map" && t.filterBehavior === "Filter Change" && o(d), O.includes(t.type) && t.filterBehavior === "Filter Change") {
        const l = K(d, u);
        if (o(l), t.dynamicSeries) {
          const p = t.runtime || {};
          p.series = [], p.seriesLabels = {}, p.seriesLabelsAll = [], l && l.length && l.length > 0 && Object.keys(l[0]).forEach((S) => {
            var T;
            S !== t.xAxis.dataKey && l[0][S] && (!t.filters || ((T = t.filters) == null ? void 0 : T.filter((r) => r.columnName === S).length) === 0) && (!t.columns || Object.keys(t.columns).indexOf(S) === -1) && p.series.push({
              dataKey: S,
              type: t.dynamicSeriesType,
              lineType: t.dynamicSeriesLineType,
              tooltip: !0
            });
          }), p.seriesKeys = p.series ? p.series.map((S) => (p.seriesLabels[S.dataKey] = S.name || S.label || S.dataKey, p.seriesLabelsAll.push(S.name || S.dataKey), S.dataKey)) : [], a({
            ...t,
            filters: d,
            runtime: p
          });
        }
      }
    },
    showApplyButton: n,
    handleReset: (E) => {
      let A = [...t.filters];
      E.preventDefault();
      let d = !1;
      const g = z();
      A.forEach((y, L) => {
        (!y.values || y.values.length === 0) && (y.values = h(v, y.columnName)), A[L].active = X(y).values[0], y.setByQueryParameter && g[y.setByQueryParameter] !== y.active && (g[y.setByQueryParameter] = y.active, d = !0);
      }), d && x(g), a({ ...t, filters: A }), i === "map" ? o(A, u) : o(K(A, u));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: me,
    filterOrderOptions: pe,
    handleFilterOrder: (E, A, d, g) => {
      const y = [...g.values], [L] = y.splice(E, 1);
      y.splice(A, 0, L);
      const l = O.includes(t.type) ? [...t.filters] : [...s], p = { ...l[d] };
      p.values = y, p.orderedValues = y, p.active = y[0], p.order = "cust", l[d] = p, t.type === "map" && o(l), a({ ...t, filters: l });
    },
    handleSorting: X
  };
}, Ae = (e) => {
  var T;
  const { config: n, filteredData: c, dimensions: t } = e, { filters: a, type: s, general: o, theme: u, filterBehavior: h } = n, [i, v] = $.useState(!1), [k, w] = $.useState(null), Q = $.useId(), {
    handleApplyButton: j,
    changeFilterActive: B,
    showApplyButton: E,
    handleReset: A,
    filterConstants: d,
    handleSorting: g
  } = de(e);
  $.useEffect(() => {
    t && (Number(t[0]) < 768 && (a == null ? void 0 : a.length) > 0 ? v(!0) : v(!1));
  }, [t]), $.useEffect(() => {
    if (k) {
      const r = document.getElementById(k.id);
      r && r.focus();
    }
  }, [B, k]);
  const y = (r) => {
    const { filter: f, index: N } = r;
    return /* @__PURE__ */ m.createElement("section", { className: "single-filters__tab-bar" }, f.values.map((C, G) => {
      const V = ["button__tab-bar", f.active === C ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ m.createElement(
        "button",
        {
          id: `${C}-${N}-${G}-${Q}`,
          className: V.join(" "),
          key: C,
          onClick: (_) => {
            B(N, C), w(_.target);
          },
          onKeyDown: (_) => {
            _.keyCode === 13 && (B(N, C), w(_.target));
          }
        },
        C
      );
    }));
  }, L = (r) => {
    const { index: f, label: N, active: C, filters: G } = r;
    return /* @__PURE__ */ m.createElement(
      "select",
      {
        id: `filter-${f}`,
        name: N,
        "aria-label": `Filter by ${N}`,
        className: "form-control",
        "data-index": "0",
        value: C,
        onChange: (V) => {
          B(f, V.target.value);
        }
      },
      G
    );
  }, l = $.useMemo(() => {
    let r = s === "map" ? c : a;
    return r ? (r.fromHash && delete r.fromHash, I(r, n.data)) : [];
  }, [a, c]), p = () => l.map((r, f) => {
    var W, Y;
    if (r.showDropdown === !1)
      return;
    const N = [], C = [], G = [], { active: V, queuedActive: _, label: q, filterStyle: P } = r;
    g(r), (W = r.values) == null || W.forEach((b, R) => {
      const M = ["pill", V === b ? "pill--active" : null, u && u], U = ["tab", V === b && "tab--active", u && u];
      C.push(
        /* @__PURE__ */ m.createElement("div", { className: "pill__wrapper", key: `pill-${R}` }, /* @__PURE__ */ m.createElement(
          "button",
          {
            id: `${b}-${f}-${R}-${Q}`,
            className: M.join(" "),
            onKeyDown: (D) => {
              D.keyCode === 13 && (B(f, b), w(D.target));
            },
            onClick: (D) => {
              B(f, b), w(D.target);
            },
            name: q
          },
          b
        ))
      ), N.push(
        /* @__PURE__ */ m.createElement("option", { key: R, value: b, "aria-label": b }, r.labels && r.labels[b] ? r.labels[b] : b)
      ), G.push(
        /* @__PURE__ */ m.createElement(
          "button",
          {
            id: `${b}-${f}-${R}-${Q}`,
            className: U.join(" "),
            onClick: (D) => {
              B(f, b), w(D.target);
            },
            onKeyDown: (D) => {
              D.keyCode === 13 && (B(f, b), w(D.target));
            }
          },
          b
        )
      );
    });
    const ee = [
      "single-filters",
      "form-group mr-3",
      i ? "single-filters--dropdown" : `single-filters--${P}`
    ], te = ["nested-dropdown", "multi-select"].includes(P), ae = (P === "dropdown" || i) && !te;
    return /* @__PURE__ */ m.createElement("div", { className: ee.join(" "), key: f }, /* @__PURE__ */ m.createElement(m.Fragment, null, q && /* @__PURE__ */ m.createElement("label", { className: "text-capitalize font-weight-bold mt-1 mb-0", htmlFor: `filter-${f}` }, q), P === "tab" && !i && G, P === "pill" && !i && C, P === "tab bar" && !i && /* @__PURE__ */ m.createElement(y, { filter: r, index: f }), P === "multi-select" && /* @__PURE__ */ m.createElement(
      ne,
      {
        options: r.values.map((b) => ({ value: b, label: b })),
        fieldName: f,
        updateField: (b, R, M, U) => B(M, U),
        selected: r.active,
        limit: r.selectLimit || 5
      }
    ), P === "nested-dropdown" && /* @__PURE__ */ m.createElement(
      oe,
      {
        activeGroup: r.active || (r.queuedActive || [])[0],
        activeSubGroup: ((Y = r.subGrouping) == null ? void 0 : Y.active) || (r.queuedActive || [])[1],
        options: ue(r),
        listLabel: q,
        handleSelectedItems: (b) => B(f, b)
      }
    ), ae && /* @__PURE__ */ m.createElement(
      L,
      {
        filter: r,
        index: f,
        label: q,
        active: _ || V,
        filters: N
      }
    )));
  });
  if (((T = n == null ? void 0 : n.filters) == null ? void 0 : T.length) === 0)
    return;
  const S = () => {
    const { visualizationType: r, legend: f } = n || {}, N = "filters-section", C = s === "map" ? o.headerColor : r === "Spark Line" ? null : u, G = f && !f.hide && f.position === "top" ? "mb-0" : null;
    return [N, C, G].filter(Boolean);
  };
  return /* @__PURE__ */ m.createElement("section", { className: S().join(" ") }, /* @__PURE__ */ m.createElement("p", { className: "filters-section__intro-text" }, a != null && a.some((r) => r.active && r.columnName) ? d.introText : "", " ", n.filterBehavior === "Apply Button" && d.applyText), /* @__PURE__ */ m.createElement("div", { className: "d-flex flex-wrap filters-section__wrapper" }, " ", /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(p, null), h === "Apply Button" ? /* @__PURE__ */ m.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ m.createElement(
    se,
    {
      onClick: (r) => {
        j(a);
      },
      disabled: !E,
      className: [o != null && o.headerColor ? o.headerColor : u, "apply"].join(" ")
    },
    d.buttonText
  ), /* @__PURE__ */ m.createElement("a", { href: "#!", role: "button", onClick: A }, d.resetText)) : /* @__PURE__ */ m.createElement(m.Fragment, null))));
};
export {
  Ae as F,
  z as a,
  x as b,
  ie as c,
  de as d,
  pe as e,
  K as f,
  Z as g,
  X as h,
  me as i,
  I as j,
  ge as u
};
