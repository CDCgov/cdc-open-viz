import { r as V, R as m } from "./storybook-index-45401197.es.js";
import { B as se } from "./storybook-Button-d74e310e.es.js";
import { M as ne } from "./storybook-MultiSelect-d587cce3.es.js";
import { _ as H } from "./storybook-lodash-a4231e1c.es.js";
import { N as oe } from "./storybook-NestedDropdown-59c5aa02.es.js";
function Z(e) {
  const s = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const o = s.get(e.setByQueryParameter);
    if (o && e.values) {
      for (let t = 0; t < e.values.length; t++)
        if (e.values[t] && e.values[t].toLowerCase() === o.toLowerCase())
          return e.values[t];
    }
  }
}
function K() {
  const e = {};
  for (const [s, o] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[s] ? Array.isArray(e[s]) ? e[s].push(o) : e[s] = [e[s], o] : e[s] = o;
  return e;
}
function ge(e) {
  return K()[e];
}
function U(e) {
  const s = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((o) => `${o}=${encodeURIComponent(e[o])}`).join("&")}`;
  window.history.pushState({ path: s }, "", s);
}
function Ae(e, s) {
  const o = K();
  o[e] = s, U(o);
}
const x = (e, s) => {
  if (!s)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return s;
  const o = [];
  return s == null || s.forEach((t) => {
    let a = !0;
    e.filter((n) => n.type !== "url").forEach((n) => {
      if (n.active === void 0)
        return;
      const r = t[n.columnName];
      if (Array.isArray(n.active) ? n.active.includes(r) || (a = !1) : r != n.active && (a = !1), n.filterStyle === "nested-dropdown" && n.subGrouping && a === !0) {
        const u = n.subGrouping.active, h = t[n.subGrouping.columnName];
        if (u === void 0)
          return;
        h != u && (a = !1);
      }
    }), a && o.push(t);
  }), o;
}, re = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([s, { orderedValues: o }]) => o ? [s, { orderedValues: o, values: [] }] : [s, { values: [] }])
), ce = (e, s) => {
  var r, u;
  const o = e.columnName, t = [], a = (r = e.subGrouping) == null ? void 0 : r.columnName, n = re((u = e.subGrouping) == null ? void 0 : u.valuesLookup);
  if (Array.isArray(s))
    s.forEach((h) => {
      const i = h[o];
      if (i !== void 0 && !t.includes(i) && t.push(i), a) {
        const f = h[a];
        if (i === void 0)
          return;
        n[i] || (n[i] = { values: [] }), n[i].values.includes(f) || n[i].values.push(f);
      }
    });
  else {
    if (!s)
      return t;
    Object.values(s).forEach((h) => {
      h.forEach((i) => {
        const f = i[o];
        f !== void 0 && !t.includes(f) && t.push(f);
      });
    });
  }
  e.values = t, a && (e.subGrouping.valuesLookup = n);
}, le = (e, s, o) => {
  let t = Array.isArray(s) ? s : Object.values(s).flat(1);
  return e.parents.forEach((a) => {
    const n = o[a];
    if ((n == null ? void 0 : n.filterStyle) === "nested-dropdown") {
      const { subGrouping: r } = n;
      r != null && r.active && (t = t.filter((u) => {
        const h = n.active == u[n.columnName], i = r.active == u[r.columnName];
        return h && i;
      }));
    } else
      n != null && n.active && (t = t.filter((r) => Array.isArray(n.active) ? n.active.includes(r[n.columnName]) : n.active == r[n.columnName]));
  }), t;
}, I = (e, s) => e.map((o) => String(o)).includes(String(s)), X = (e, s) => {
  const o = H.keyBy(e, "id");
  return e == null ? void 0 : e.map((t) => {
    var u;
    const a = H.cloneDeep(t);
    let n = s;
    const r = !Array.isArray(s);
    if ((u = t.parents) != null && u.length && !r && (n = le(t, s, o)), ce(a, n), a.values.length > 0) {
      const h = Z(a);
      if (h)
        a.active = h;
      else if (a.filterStyle === "multi-select") {
        const i = a.values, f = Array.isArray(a.active) ? a.active : [a.active];
        a.active = f.filter((k) => I(i, k));
      } else {
        const i = a.values[0], f = Array.isArray(a.active) ? a.active[0] : a.active;
        a.active = I(a.values, f) ? f : i;
      }
    }
    if (a.subGrouping) {
      const h = a.active, i = {
        ...a.subGrouping,
        values: a.subGrouping.valuesLookup[h].values
      }, f = Z(i), k = a.active || a.values[0], w = a.subGrouping.valuesLookup[k].values[0], $ = Object.values(a.subGrouping.valuesLookup).flatMap((B) => B.values), j = f || a.subGrouping.active;
      a.subGrouping.active = $.includes(j) ? j : w;
    }
    return a;
  });
}, ue = ({ orderedValues: e, values: s, subGrouping: o }) => (e != null && e.length ? e.filter((n) => s.includes(n)) : s).map((n) => {
  if (!o)
    return [[n], []];
  const { orderedValues: r, values: u } = o.valuesLookup[n], h = (r == null ? void 0 : r.filter((f) => u.includes(f))) || u;
  return [
    [n],
    h.map((f) => [f])
  ];
}), ie = (e) => {
  e.filterStyle === F.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, J = (e) => {
  var t;
  const s = H.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (t = e.orderedValues) != null && t.length ? e.orderedValues : s, e;
  const o = (a, n) => {
    const r = e.order !== "desc";
    return String(r ? a : n).localeCompare(String(r ? n : a), "en", { numeric: !0 });
  };
  return e.values = s.sort(o), e;
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
  const [s, o] = V.useState(!1), { config: t, setConfig: a, filteredData: n, setFilteredData: r, excludedData: u, getUniqueValues: h } = e, { type: i, data: f } = t;
  return {
    handleApplyButton: (E) => {
      let A = !1;
      const v = K();
      E.forEach((g) => {
        g.queuedActive && (ie(g), g.setByQueryParameter && v[g.setByQueryParameter] !== g.active && (v[g.setByQueryParameter] = g.active, A = !0));
      }), A && U(v), a({ ...t, filters: E }), i === "map" && r(E, u), O.includes(t.type) && r(x(E, u)), o(!1);
    },
    changeFilterActive: (E, A) => {
      var g, y, L;
      let v = t.type === "map" ? [...n] : [...t.filters];
      if (t.filterBehavior === "Apply Button")
        v[E].queuedActive = A, o(!0);
      else {
        const c = v[E];
        c.filterStyle !== "nested-dropdown" ? c.active = A : (c.active = A[0], c.subGrouping.active = A[1]);
        const p = K();
        c.setByQueryParameter && p[c.setByQueryParameter] !== c.active && (p[c.setByQueryParameter] = c.active, U(p)), (g = c == null ? void 0 : c.subGrouping) != null && g.setByQueryParameter && p[(y = c == null ? void 0 : c.subGrouping) == null ? void 0 : y.setByQueryParameter] !== (c == null ? void 0 : c.subGrouping.active) && (p[(L = c == null ? void 0 : c.subGrouping) == null ? void 0 : L.setByQueryParameter] = c.subGrouping.active, U(p)), r(v[E]);
      }
      if (t.dynamicSeries || (v = X(v, u), a({
        ...t,
        filters: v
      })), t.type === "map" && t.filterBehavior === "Filter Change" && r(v), O.includes(t.type) && t.filterBehavior === "Filter Change") {
        const c = x(v, u);
        if (r(c), t.dynamicSeries) {
          const p = t.runtime || {};
          p.series = [], p.seriesLabels = {}, p.seriesLabelsAll = [], c && c.length && c.length > 0 && Object.keys(c[0]).forEach((S) => {
            var q;
            S !== t.xAxis.dataKey && c[0][S] && (!t.filters || ((q = t.filters) == null ? void 0 : q.filter((l) => l.columnName === S).length) === 0) && (!t.columns || Object.keys(t.columns).indexOf(S) === -1) && p.series.push({
              dataKey: S,
              type: t.dynamicSeriesType,
              lineType: t.dynamicSeriesLineType,
              tooltip: !0
            });
          }), p.seriesKeys = p.series ? p.series.map((S) => (p.seriesLabels[S.dataKey] = S.name || S.label || S.dataKey, p.seriesLabelsAll.push(S.name || S.dataKey), S.dataKey)) : [], a({
            ...t,
            filters: v,
            runtime: p
          });
        }
      }
    },
    showApplyButton: s,
    handleReset: (E) => {
      let A = [...t.filters];
      E.preventDefault();
      let v = !1;
      const g = K();
      A.forEach((y, L) => {
        (!y.values || y.values.length === 0) && (y.values = h(f, y.columnName)), A[L].active = J(y).values[0], y.setByQueryParameter && g[y.setByQueryParameter] !== y.active && (g[y.setByQueryParameter] = y.active, v = !0);
      }), v && U(g), a({ ...t, filters: A }), i === "map" ? r(A, u) : r(x(A, u));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All"
    },
    filterStyleOptions: me,
    filterOrderOptions: pe,
    handleFilterOrder: (E, A, v, g) => {
      const y = [...g.values], [L] = y.splice(E, 1);
      y.splice(A, 0, L);
      const c = O.includes(t.type) ? [...t.filters] : [...n], p = { ...c[v] };
      p.values = y, p.orderedValues = y, p.active = y[0], p.order = "cust", c[v] = p, t.type === "map" && r(c), a({ ...t, filters: c });
    },
    handleSorting: J
  };
}, Se = (e) => {
  var q;
  const { config: s, filteredData: o, dimensions: t } = e, { filters: a, type: n, general: r, theme: u, filterBehavior: h } = s, [i, f] = V.useState(!1), [k, w] = V.useState(null), $ = V.useId(), {
    handleApplyButton: j,
    changeFilterActive: B,
    showApplyButton: E,
    handleReset: A,
    filterConstants: v,
    handleSorting: g
  } = de(e);
  V.useEffect(() => {
    t && (Number(t[0]) < 768 && (a == null ? void 0 : a.length) > 0 ? f(!0) : f(!1));
  }, [t]), V.useEffect(() => {
    if (k) {
      const l = document.getElementById(k.id);
      l && l.focus();
    }
  }, [B, k]);
  const y = (l) => {
    const { filter: d, index: N } = l;
    return /* @__PURE__ */ m.createElement("section", { className: "single-filters__tab-bar" }, d.values.map((C, G) => {
      const Q = ["button__tab-bar", d.active === C ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ m.createElement(
        "button",
        {
          id: `${C}-${N}-${G}-${$}`,
          className: Q.join(" "),
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
  }, L = (l) => {
    const { index: d, label: N, active: C, filters: G } = l;
    return /* @__PURE__ */ m.createElement(
      "select",
      {
        id: `filter-${d}`,
        name: N,
        "aria-label": `Filter by ${N}`,
        className: "cove-form-select",
        "data-index": "0",
        value: C,
        onChange: (Q) => {
          B(d, Q.target.value);
        }
      },
      G
    );
  }, c = V.useMemo(() => {
    let l = n === "map" ? o : a;
    return l ? (l.fromHash && delete l.fromHash, X(l, s.data)) : [];
  }, [a, o]), p = () => c.map((l, d) => {
    var W, Y;
    if (l.showDropdown === !1)
      return;
    const N = [], C = [], G = [], { active: Q, queuedActive: _, label: T, filterStyle: P } = l;
    g(l), (W = l.values) == null || W.forEach((b, R) => {
      const M = ["pill", Q === b ? "pill--active" : null, u && u], z = ["tab", Q === b && "tab--active", u && u];
      C.push(
        /* @__PURE__ */ m.createElement("div", { className: "pill__wrapper", key: `pill-${R}` }, /* @__PURE__ */ m.createElement(
          "button",
          {
            id: `${b}-${d}-${R}-${$}`,
            className: M.join(" "),
            onKeyDown: (D) => {
              D.keyCode === 13 && (B(d, b), w(D.target));
            },
            onClick: (D) => {
              B(d, b), w(D.target);
            },
            name: T
          },
          b
        ))
      ), N.push(
        /* @__PURE__ */ m.createElement("option", { key: R, value: b, "aria-label": b }, l.labels && l.labels[b] ? l.labels[b] : b)
      ), G.push(
        /* @__PURE__ */ m.createElement(
          "button",
          {
            id: `${b}-${d}-${R}-${$}`,
            className: z.join(" "),
            onClick: (D) => {
              B(d, b), w(D.target);
            },
            onKeyDown: (D) => {
              D.keyCode === 13 && (B(d, b), w(D.target));
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
    return /* @__PURE__ */ m.createElement("div", { className: ee.join(" "), key: d }, /* @__PURE__ */ m.createElement(m.Fragment, null, T && /* @__PURE__ */ m.createElement("label", { className: "font-weight-bold mt-1 mb-0", htmlFor: `filter-${d}` }, T), P === "tab" && !i && G, P === "pill" && !i && C, P === "tab bar" && !i && /* @__PURE__ */ m.createElement(y, { filter: l, index: d }), P === "multi-select" && /* @__PURE__ */ m.createElement(
      ne,
      {
        options: l.values.map((b) => ({ value: b, label: b })),
        fieldName: d,
        updateField: (b, R, M, z) => B(M, z),
        selected: l.active,
        limit: l.selectLimit || 5
      }
    ), P === "nested-dropdown" && /* @__PURE__ */ m.createElement(
      oe,
      {
        activeGroup: l.active || (l.queuedActive || [])[0],
        activeSubGroup: ((Y = l.subGrouping) == null ? void 0 : Y.active) || (l.queuedActive || [])[1],
        filterIndex: d,
        options: ue(l),
        listLabel: T,
        handleSelectedItems: (b) => B(d, b)
      }
    ), ae && /* @__PURE__ */ m.createElement(
      L,
      {
        filter: l,
        index: d,
        label: T,
        active: _ || Q,
        filters: N
      }
    )));
  });
  if (((q = s == null ? void 0 : s.filters) == null ? void 0 : q.length) === 0)
    return;
  const S = () => {
    const { visualizationType: l, legend: d } = s || {}, N = "filters-section", C = n === "map" ? r.headerColor : l === "Spark Line" ? null : u, G = d && !d.hide && d.position === "top" ? "mb-0" : null;
    return [N, C, G].filter(Boolean);
  };
  return /* @__PURE__ */ m.createElement("section", { className: S().join(" ") }, s.filterIntro && /* @__PURE__ */ m.createElement("p", { className: "filters-section__intro-text" }, s.filterIntro), /* @__PURE__ */ m.createElement("div", { className: "d-flex flex-wrap w-100 filters-section__wrapper" }, " ", /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(p, null), h === "Apply Button" ? /* @__PURE__ */ m.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ m.createElement(
    se,
    {
      onClick: (l) => {
        j(a);
      },
      disabled: !E,
      className: [r != null && r.headerColor ? r.headerColor : u, "apply"].join(" ")
    },
    v.buttonText
  ), /* @__PURE__ */ m.createElement("a", { href: "#!", role: "button", onClick: A }, v.resetText)) : /* @__PURE__ */ m.createElement(m.Fragment, null))));
};
export {
  Se as F,
  K as a,
  U as b,
  ge as c,
  ie as d,
  de as e,
  x as f,
  Z as g,
  pe as h,
  J as i,
  me as j,
  X as k,
  Ae as u
};
