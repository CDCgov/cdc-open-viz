import { r as L } from "./storybook-index-45401197.es.js";
import { B as de } from "./storybook-Button-63da743c.es.js";
import { M as me } from "./storybook-MultiSelect-fb96d51f.es.js";
import { _ as z } from "./storybook-lodash-a4231e1c.es.js";
import { F as te } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as fe } from "./storybook-NestedDropdown-c8ea7d17.es.js";
function X(e) {
  const n = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const o = n.get(e.setByQueryParameter);
    if (o && e.values) {
      for (let t = 0; t < e.values.length; t++)
        if (e.values[t] && e.values[t].toLowerCase() === o.toLowerCase())
          return e.values[t];
    }
  }
}
function M() {
  const e = {};
  for (const [n, o] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[n] ? Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o] : e[n] = o;
  return e;
}
function _e(e) {
  return M()[e];
}
function W(e) {
  const n = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((o) => `${o}=${encodeURIComponent(e[o])}`).join("&")}`;
  window.history.pushState({ path: n }, "", n);
}
function Te(e, n) {
  const o = M();
  o[e] = n, W(o);
}
const K = (e, n) => {
  if (!n)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return n;
  const o = [];
  return n == null || n.forEach((t) => {
    let a = !0;
    e.filter((s) => s.type !== "url").forEach((s) => {
      if (s.active === void 0)
        return;
      const i = t[s.columnName];
      if (Array.isArray(s.active) ? s.active.includes(i) || (a = !1) : i != s.active && (a = !1), s.filterStyle === "nested-dropdown" && s.subGrouping && a === !0) {
        const p = s.subGrouping.active, b = t[s.subGrouping.columnName];
        if (p === void 0)
          return;
        b != p && (a = !1);
      }
    }), a && o.push(t);
  }), o;
}, ve = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([n, { orderedValues: o }]) => o ? [n, { orderedValues: o, values: [] }] : [n, { values: [] }])
), ye = (e, n) => {
  var b, d;
  const o = e.columnName, t = e.orderColumn, a = [], s = [], i = (b = e.subGrouping) == null ? void 0 : b.columnName, p = ve((d = e.subGrouping) == null ? void 0 : d.valuesLookup);
  if (Array.isArray(n))
    n.forEach((u) => {
      const l = u[o];
      if (l !== void 0 && !a.includes(l) && (t && s.push([l, u[t]]), a.push(l)), i) {
        const m = u[i];
        if (l === void 0)
          return;
        p[l] || (p[l] = { values: [] }), p[l].values.includes(m) || p[l].values.push(m);
      }
    });
  else {
    if (!n)
      return a;
    Object.values(n).forEach((u) => {
      u.forEach((l) => {
        const m = l[o];
        m !== void 0 && !a.includes(m) && (t && s.push([m, l[t]]), a.push(m));
      });
    });
  }
  if (t)
    e.values = s.sort((u, l) => typeof u[1] == "number" && typeof l[1] == "number" ? u[1] - l[1] : String(u[1]).localeCompare(String(l[1]))).map(([u]) => u);
  else if (e.order && e.order !== "cust") {
    const u = (l, m) => {
      const C = e.order !== "desc";
      return String(C ? l : m).localeCompare(String(C ? m : l), "en", { numeric: !0 });
    };
    e.values = a.sort(u);
  } else
    e.values = a;
  i && (e.subGrouping.valuesLookup = p);
}, be = (e, n, o) => {
  let t = Array.isArray(n) ? n : Object.values(n).flat(1);
  return e.parents.forEach((a) => {
    const s = o[a] || {}, [i, p] = Array.isArray(s.queuedActive) ? s.queuedActive : [s.queuedActive], b = i || (s == null ? void 0 : s.active);
    if ((s == null ? void 0 : s.filterStyle) === te.nestedDropdown) {
      const { subGrouping: d } = s, u = p || (d == null ? void 0 : d.active);
      u && (t = t.filter((l) => {
        const m = b == l[s.columnName], C = u == l[d.columnName];
        return m && C;
      }));
    } else
      b && (t = t.filter((d) => Array.isArray(b) ? b.includes(d[s.columnName]) : b == d[s.columnName]));
  }), t;
}, F = (e, n) => e.map((o) => String(o)).includes(String(n)), ae = (e, n) => {
  const o = z.keyBy(e, "id");
  return e == null ? void 0 : e.map((t) => {
    var p, b;
    const a = z.cloneDeep(t);
    let s = n;
    const i = !Array.isArray(n);
    if ((p = t.parents) != null && p.length && !i && (s = be(t, n, o)), ye(a, s), ((b = a.values) == null ? void 0 : b.length) > 0) {
      const d = X(a);
      if (d)
        a.active = d;
      else if (a.filterStyle === te.multiSelect) {
        const u = a.values, l = Array.isArray(a.active) ? a.active : [a.active];
        a.active = l.filter((m) => F(u, m));
      } else {
        const u = a.values[0], l = Array.isArray(a.active) ? a.active[0] : a.active;
        a.active = F(a.values, l) ? l : u;
      }
    }
    if (a.subGrouping) {
      const d = a.active, u = {
        ...a.subGrouping,
        values: a.subGrouping.valuesLookup[d].values
      }, l = X(u), m = d || a.values[0], C = a.subGrouping.valuesLookup[m].values[0], _ = l || a.subGrouping.active;
      a.subGrouping.active = _ || C, o[a.id].subGrouping.active = a.subGrouping.active;
    }
    return o[a.id].active = a.active, a;
  });
}, he = ({ orderedValues: e, values: n, subGrouping: o }) => (e != null && e.length ? e.filter((s) => n.includes(s)) : n).map((s) => {
  if (!o)
    return [[s], []];
  const { orderedValues: i, values: p } = o.valuesLookup[s], b = (i == null ? void 0 : i.filter((u) => p.includes(u))) || p;
  return [
    [s],
    b.map((u) => [u])
  ];
}), ge = (e) => {
  e.filterStyle === j.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, ee = (e) => {
  var t;
  const n = z.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (t = e.orderedValues) != null && t.length ? e.orderedValues : n, e;
  if (e.order === "column")
    return e;
  const o = (a, s) => {
    const i = e.order !== "desc";
    return String(i ? a : s).localeCompare(String(i ? s : a), "en", { numeric: !0 });
  };
  return e.values = n.sort(o), e.orderedValues = n.sort(o), e;
}, Se = 60, Ae = 100, Ee = (e, n, o) => Object.entries(e.current).map(([t, a]) => {
  var y;
  if (!a)
    return !1;
  const s = o.find((N) => N.columnName === t), { filterStyle: i, label: p } = s || {};
  if (!i || i !== j.tabSimple)
    return !1;
  const b = (y = a.className.split(" ").find((N) => N.includes(i))) == null ? void 0 : y.split("single-filters--")[1];
  if (!(b && b === i))
    return !1;
  const u = n[t], { height: l, width: m } = a.getBoundingClientRect(), _ = l > (p ? Ae : Se);
  if (!u)
    return [t, { highestWrappedWidth: _ ? m : 0, isDropdown: _ }];
  const { highestWrappedWidth: T, isDropdown: E } = u, S = m <= T, h = m > T, r = Math.max(T, m);
  if ((S || _) && !E)
    return [t, { highestWrappedWidth: r, isDropdown: !0 }];
  if (E && h)
    return [t, { highestWrappedWidth: T, isDropdown: !1 }];
}).filter(Boolean), j = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabSimple: "tab-simple",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, we = Object.values(j), Re = [
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
  },
  { label: "Order By Data Column", value: "column" }
], Ce = (e) => {
  const [n, o] = L.useState(!1), {
    config: t,
    setConfig: a,
    filteredData: s,
    setFilteredData: i,
    excludedData: p,
    getUniqueValues: b,
    standaloneMap: d
  } = e, { data: u } = t;
  return {
    handleApplyButton: (E) => {
      let S = !1;
      const h = M();
      E.forEach((r) => {
        r.queuedActive && (ge(r), r.setByQueryParameter && h[r.setByQueryParameter] !== r.active && (h[r.setByQueryParameter] = r.active, S = !0));
      }), S && W(h), a({ ...t, filters: E }), d ? i(E, p) : i(K(E, p)), o(!1);
    },
    changeFilterActive: (E, S) => {
      var y, N, G;
      let h = d ? [...s] : [...t.filters];
      const r = h[E];
      if (t.filterBehavior === "Apply Button")
        r.queuedActive = S, o(!0);
      else {
        r.filterStyle !== "nested-dropdown" ? r.active = S : (r.active = S[0], r.subGrouping.active = S[1]);
        const g = M();
        r.setByQueryParameter && g[r.setByQueryParameter] !== r.active && (g[r.setByQueryParameter] = r.active, W(g)), (y = r == null ? void 0 : r.subGrouping) != null && y.setByQueryParameter && g[(N = r == null ? void 0 : r.subGrouping) == null ? void 0 : N.setByQueryParameter] !== (r == null ? void 0 : r.subGrouping.active) && (g[(G = r == null ? void 0 : r.subGrouping) == null ? void 0 : G.setByQueryParameter] = r.subGrouping.active, W(g)), i(h);
      }
      if (t.dynamicSeries || (h = ae(h, p), a({
        ...t,
        filters: h
      })), d && t.filterBehavior === "Filter Change" && i(h), !d && t.filterBehavior === "Filter Change") {
        const g = K(h, p);
        if (i(g), t.dynamicSeries) {
          const D = t.runtime || {};
          D.series = [], D.seriesLabels = {}, D.seriesLabelsAll = [], g && g.length && g.length > 0 && Object.keys(g[0]).forEach((R) => {
            var O;
            R !== t.xAxis.dataKey && g[0][R] && (!t.filters || ((O = t.filters) == null ? void 0 : O.filter((x) => x.columnName === R).length) === 0) && (!t.columns || Object.keys(t.columns).indexOf(R) === -1) && D.series.push({
              dataKey: R,
              type: t.dynamicSeriesType,
              lineType: t.dynamicSeriesLineType,
              tooltip: !0
            });
          }), D.seriesKeys = D.series ? D.series.map((R) => (D.seriesLabels[R.dataKey] = R.name || R.label || R.dataKey, D.seriesLabelsAll.push(R.name || R.dataKey), R.dataKey)) : [], a({
            ...t,
            filters: h,
            runtime: D
          });
        }
      }
    },
    showApplyButton: n,
    handleReset: (E) => {
      let S = [...t.filters];
      E.preventDefault();
      let h = !1;
      const r = M();
      S.forEach((y, N) => {
        (!y.values || y.values.length === 0) && (y.values = b(u, y.columnName)), S[N].active = ee(y).values[0], y.setByQueryParameter && r[y.setByQueryParameter] !== y.active && (r[y.setByQueryParameter] = y.active, h = !0);
      }), h && W(r), a({ ...t, filters: S }), d ? i(S, p) : i(K(S, p));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All"
    },
    filterStyleOptions: we,
    filterOrderOptions: Re,
    handleFilterOrder: (E, S, h, r) => {
      const y = [...r.values], [N] = y.splice(E, 1);
      y.splice(S, 0, N);
      const G = d ? [...s] : [...t.filters], g = { ...G[h] };
      g.values = y, g.orderedValues = y, g.active || (g.active = y[0]), g.order = "cust", G[h] = g, d && i(G), a({ ...t, filters: G });
    },
    handleSorting: ee
  };
}, ke = (e) => {
  var Y;
  const { config: n, filteredData: o, dimensions: t, standaloneMap: a } = e, { filters: s, general: i, theme: p, filterBehavior: b } = n, [d, u] = L.useState(!1), [l, m] = L.useState(null), [C, _] = L.useState({}), T = L.useId(), E = L.useRef({}), S = Ee(E, C, s);
  if (S.length) {
    const c = S.filter(Boolean);
    _({ ...C, ...Object.fromEntries(c) });
  }
  const {
    handleApplyButton: h,
    changeFilterActive: r,
    showApplyButton: y,
    handleReset: N,
    filterConstants: G,
    handleSorting: g
  } = Ce(e);
  L.useEffect(() => {
    if (!t)
      return;
    const [c] = t, f = Number(c) < 768, w = s == null ? void 0 : s.some((B) => B.filterStyle === j.tabSimple), A = f && (s == null ? void 0 : s.length) && !w;
    u(A);
  }, [t]), L.useEffect(() => {
    const c = Object.keys(C).filter((f) => {
      const w = s.find((A) => A.columnName === f);
      return w ? w.filterStyle !== j.tabSimple : !1;
    });
    c.length && _(
      Object.fromEntries(
        Object.entries(C).filter(([f]) => !c.includes(f))
      )
    );
  }, [s]), L.useEffect(() => {
    if (l) {
      const c = document.getElementById(l.id);
      c && c.focus();
    }
  }, [r, l]);
  const D = (c) => {
    const { filter: f, index: w } = c;
    return /* @__PURE__ */ React.createElement("section", { className: "single-filters__tab-bar" }, f.values.map((A, B) => {
      const $ = ["button__tab-bar", f.active === A ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          id: `${A}-${w}-${B}-${T}`,
          className: $.join(" "),
          key: A,
          onClick: (Q) => {
            r(w, A), m(Q.target);
          },
          onKeyDown: (Q) => {
            Q.keyCode === 13 && (r(w, A), m(Q.target));
          }
        },
        A
      );
    }));
  }, R = (c) => {
    const { index: f, label: w, active: A, filters: B } = c;
    return /* @__PURE__ */ React.createElement(
      "select",
      {
        id: `filter-${f}`,
        name: w,
        "aria-label": `Filter by ${w}`,
        className: "cove-form-select",
        "data-index": "0",
        value: A,
        onChange: ($) => {
          r(f, $.target.value);
        }
      },
      B
    );
  }, O = L.useMemo(() => {
    let c = a ? o : s;
    return c ? (c.fromHash && delete c.fromHash, ae(c, n.data)) : [];
  }, [s, o]), x = () => O.map((c, f) => {
    var J;
    if (c.showDropdown === !1)
      return;
    const w = [], A = [], B = [], $ = c.filterStyle === "tab-simple", { active: Q, queuedActive: ne, label: V, filterStyle: P, columnName: Z } = c, { isDropdown: re } = C[Z] || {};
    g(c), (J = c.values) == null || J.forEach((v, q) => {
      const H = Q === v, I = ["pill", H ? "pill--active" : null, p && p], pe = ["tab", H && "tab--active", p && p, $ && "tab--simple"];
      A.push(
        /* @__PURE__ */ React.createElement("div", { className: "pill__wrapper", key: `pill-${q}` }, /* @__PURE__ */ React.createElement(
          "button",
          {
            id: `${v}-${f}-${q}-${T}`,
            className: I.join(" "),
            onKeyDown: (k) => {
              k.keyCode === 13 && (r(f, v), m(k.target));
            },
            onClick: (k) => {
              r(f, v), m(k.target);
            },
            name: V
          },
          v
        ))
      ), w.push(
        /* @__PURE__ */ React.createElement("option", { key: q, value: v, "aria-label": v }, c.labels && c.labels[v] ? c.labels[v] : v)
      ), B.push(
        /* @__PURE__ */ React.createElement(
          "button",
          {
            id: `${v}-${f}-${q}-${T}`,
            className: pe.join(" "),
            onClick: (k) => {
              r(f, v), m(k.target);
            },
            onKeyDown: (k) => {
              k.keyCode === 13 && (r(f, v), m(k.target));
            }
          },
          v
        )
      );
    });
    const oe = [
      "single-filters",
      "form-group",
      d ? "single-filters--dropdown" : `single-filters--${P}`
    ], ce = ["nested-dropdown", "multi-select", j.tabSimple].includes(P), U = (P === "dropdown" || d) && !ce || re, [ie, le] = L.useMemo(() => {
      var v;
      return P !== "nested-dropdown" ? [] : c.queuedActive || [c.active, (v = c.subGrouping) == null ? void 0 : v.active];
    }, [c]), ue = $ && !U;
    return /* @__PURE__ */ React.createElement("div", { className: oe.join(" "), key: f, ref: (v) => E.current[Z] = v }, /* @__PURE__ */ React.createElement(React.Fragment, null, V && /* @__PURE__ */ React.createElement("label", { className: `font-weight-bold mb-${ue ? "0" : "2"}`, htmlFor: `filter-${f}` }, V), P === "tab" && !d && B, P === "tab-simple" && !U && /* @__PURE__ */ React.createElement("div", { className: "tab-simple-container d-flex w-100" }, B), P === "pill" && !d && A, P === "tab bar" && !d && /* @__PURE__ */ React.createElement(D, { filter: c, index: f }), P === "multi-select" && /* @__PURE__ */ React.createElement(
      me,
      {
        options: c.values.map((v) => ({ value: v, label: v })),
        fieldName: f,
        updateField: (v, q, H, I) => r(H, I),
        selected: c.active,
        limit: c.selectLimit || 5
      }
    ), P === "nested-dropdown" && /* @__PURE__ */ React.createElement(
      fe,
      {
        activeGroup: ie,
        activeSubGroup: le,
        filterIndex: f,
        options: he(c),
        listLabel: V,
        handleSelectedItems: (v) => r(f, v)
      }
    ), U && /* @__PURE__ */ React.createElement(
      R,
      {
        filter: c,
        index: f,
        label: V,
        active: ne || Q,
        filters: w
      }
    )));
  });
  if (((Y = n == null ? void 0 : n.filters) == null ? void 0 : Y.length) === 0)
    return;
  const se = () => {
    const { visualizationType: c, legend: f } = n || {}, w = "filters-section", A = a ? i.headerColor : c === "Spark Line" ? null : p, B = f && !f.hide && f.position === "top" ? "mb-0" : null;
    return [w, A, B, "w-100"].filter(Boolean);
  };
  return /* @__PURE__ */ React.createElement("section", { className: se().join(" ") }, n.filterIntro && /* @__PURE__ */ React.createElement("p", { className: "filters-section__intro-text mb-3" }, n.filterIntro), /* @__PURE__ */ React.createElement("div", { className: "d-flex flex-wrap w-100 mb-4 pb-2 filters-section__wrapper" }, " ", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(x, null), b === "Apply Button" ? /* @__PURE__ */ React.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ React.createElement(
    de,
    {
      onClick: (c) => {
        h(s);
      },
      disabled: !y,
      className: [i != null && i.headerColor ? i.headerColor : p, "apply"].join(" ")
    },
    G.buttonText
  ), /* @__PURE__ */ React.createElement("a", { href: "#!", role: "button", onClick: N }, G.resetText)) : /* @__PURE__ */ React.createElement(React.Fragment, null))));
};
export {
  ke as F,
  ae as a,
  M as b,
  W as c,
  Re as d,
  _e as e,
  K as f,
  X as g,
  ee as h,
  ge as i,
  we as j,
  Ce as k,
  Te as u
};
