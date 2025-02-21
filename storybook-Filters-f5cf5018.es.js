import { r as L } from "./storybook-index-45401197.es.js";
import { B as de } from "./storybook-Button-63da743c.es.js";
import { M as me } from "./storybook-MultiSelect-fb96d51f.es.js";
import { _ as z } from "./storybook-lodash-a4231e1c.es.js";
import { F as te } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as fe } from "./storybook-NestedDropdown-c8ea7d17.es.js";
function X(e) {
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
function V() {
  const e = {};
  for (const [s, o] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[s] ? Array.isArray(e[s]) ? e[s].push(o) : e[s] = [e[s], o] : e[s] = o;
  return e;
}
function _e(e) {
  return V()[e];
}
function j(e) {
  const s = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((o) => `${o}=${encodeURIComponent(e[o])}`).join("&")}`;
  window.history.pushState({ path: s }, "", s);
}
function Te(e, s) {
  const o = V();
  o[e] = s, j(o);
}
function ke(e) {
  const s = V();
  delete s[e], j(s);
}
const K = (e, s) => {
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
      const i = t[n.columnName];
      if (Array.isArray(n.active) ? n.active.includes(i) || (a = !1) : i != n.active && (a = !1), n.filterStyle === "nested-dropdown" && n.subGrouping && a === !0) {
        const p = n.subGrouping.active, b = t[n.subGrouping.columnName];
        if (p === void 0)
          return;
        b != p && (a = !1);
      }
    }), a && o.push(t);
  }), o;
}, ve = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([s, { orderedValues: o }]) => o ? [s, { orderedValues: o, values: [] }] : [s, { values: [] }])
), ye = (e, s) => {
  var b, d;
  const o = e.columnName, t = e.orderColumn, a = [], n = [], i = (b = e.subGrouping) == null ? void 0 : b.columnName, p = ve((d = e.subGrouping) == null ? void 0 : d.valuesLookup);
  if (Array.isArray(s))
    s.forEach((u) => {
      const l = u[o];
      if (l !== void 0 && !a.includes(l) && (t && n.push([l, u[t]]), a.push(l)), i) {
        const m = u[i];
        if (l === void 0)
          return;
        p[l] || (p[l] = { values: [] }), p[l].values.includes(m) || p[l].values.push(m);
      }
    });
  else {
    if (!s)
      return a;
    Object.values(s).forEach((u) => {
      u.forEach((l) => {
        const m = l[o];
        m !== void 0 && !a.includes(m) && (t && n.push([m, l[t]]), a.push(m));
      });
    });
  }
  if (t)
    e.values = n.sort((u, l) => typeof u[1] == "number" && typeof l[1] == "number" ? u[1] - l[1] : String(u[1]).localeCompare(String(l[1]))).map(([u]) => u);
  else if (e.order && e.order !== "cust") {
    const u = (l, m) => {
      const C = e.order !== "desc";
      return String(C ? l : m).localeCompare(String(C ? m : l), "en", { numeric: !0 });
    };
    e.values = a.sort(u);
  } else
    e.values = a;
  i && (e.subGrouping.valuesLookup = p);
}, be = (e, s, o) => {
  let t = Array.isArray(s) ? s : Object.values(s).flat(1);
  return e.parents.forEach((a) => {
    const n = o[a] || {}, [i, p] = Array.isArray(n.queuedActive) ? n.queuedActive : [n.queuedActive], b = i || (n == null ? void 0 : n.active);
    if ((n == null ? void 0 : n.filterStyle) === te.nestedDropdown) {
      const { subGrouping: d } = n, u = p || (d == null ? void 0 : d.active);
      u && (t = t.filter((l) => {
        const m = b == l[n.columnName], C = u == l[d.columnName];
        return m && C;
      }));
    } else
      b && (t = t.filter((d) => Array.isArray(b) ? b.includes(d[n.columnName]) : b == d[n.columnName]));
  }), t;
}, F = (e, s) => e.map((o) => String(o)).includes(String(s)), ae = (e, s) => {
  const o = z.keyBy(e, "id");
  return e == null ? void 0 : e.map((t) => {
    var p, b;
    const a = z.cloneDeep(t);
    let n = s;
    const i = !Array.isArray(s);
    if ((p = t.parents) != null && p.length && !i && (n = be(t, s, o)), ye(a, n), ((b = a.values) == null ? void 0 : b.length) > 0) {
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
}, he = ({ orderedValues: e, values: s, subGrouping: o }) => (e != null && e.length ? e.filter((n) => s.includes(n)) : s).map((n) => {
  if (!o)
    return [[n], []];
  const { orderedValues: i, values: p } = o.valuesLookup[n], b = (i == null ? void 0 : i.filter((u) => p.includes(u))) || p;
  return [
    [n],
    b.map((u) => [u])
  ];
}), ge = (e) => {
  e.filterStyle === q.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, ee = (e) => {
  var t;
  const s = z.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (t = e.orderedValues) != null && t.length ? e.orderedValues : s, e;
  if (e.order === "column")
    return e;
  const o = (a, n) => {
    const i = e.order !== "desc";
    return String(i ? a : n).localeCompare(String(i ? n : a), "en", { numeric: !0 });
  };
  return e.values = s.sort(o), e.orderedValues = s.sort(o), e;
}, Se = 60, Ae = 100, Ee = (e, s, o) => Object.entries(e.current).map(([t, a]) => {
  var y;
  if (!a)
    return !1;
  const n = o.find((N) => N.columnName === t), { filterStyle: i, label: p } = n || {};
  if (!i || i !== q.tabSimple)
    return !1;
  const b = (y = a.className.split(" ").find((N) => N.includes(i))) == null ? void 0 : y.split("single-filters--")[1];
  if (!(b && b === i))
    return !1;
  const u = s[t], { height: l, width: m } = a.getBoundingClientRect(), _ = l > (p ? Ae : Se);
  if (!u)
    return [t, { highestWrappedWidth: _ ? m : 0, isDropdown: _ }];
  const { highestWrappedWidth: T, isDropdown: E } = u, S = m <= T, h = m > T, r = Math.max(T, m);
  if ((S || _) && !E)
    return [t, { highestWrappedWidth: r, isDropdown: !0 }];
  if (E && h)
    return [t, { highestWrappedWidth: T, isDropdown: !1 }];
}).filter(Boolean), q = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabSimple: "tab-simple",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, we = Object.values(q), Re = [
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
  const [s, o] = L.useState(!1), {
    config: t,
    setConfig: a,
    filteredData: n,
    setFilteredData: i,
    excludedData: p,
    getUniqueValues: b,
    standaloneMap: d
  } = e, { data: u } = t;
  return {
    handleApplyButton: (E) => {
      let S = !1;
      const h = V();
      E.forEach((r) => {
        r.queuedActive && (ge(r), r.setByQueryParameter && h[r.setByQueryParameter] !== r.active && (h[r.setByQueryParameter] = r.active, S = !0));
      }), S && j(h), a({ ...t, filters: E }), d ? i(E, p) : i(K(E, p)), o(!1);
    },
    changeFilterActive: (E, S) => {
      var y, N, G;
      let h = d ? [...n] : [...t.filters];
      const r = h[E];
      if (t.filterBehavior === "Apply Button")
        r.queuedActive = S, o(!0);
      else {
        r.filterStyle !== "nested-dropdown" ? r.active = S : (r.active = S[0], r.subGrouping.active = S[1]);
        const g = V();
        r.setByQueryParameter && g[r.setByQueryParameter] !== r.active && (g[r.setByQueryParameter] = r.active, j(g)), (y = r == null ? void 0 : r.subGrouping) != null && y.setByQueryParameter && g[(N = r == null ? void 0 : r.subGrouping) == null ? void 0 : N.setByQueryParameter] !== (r == null ? void 0 : r.subGrouping.active) && (g[(G = r == null ? void 0 : r.subGrouping) == null ? void 0 : G.setByQueryParameter] = r.subGrouping.active, j(g)), i(h);
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
    showApplyButton: s,
    handleReset: (E) => {
      let S = [...t.filters];
      E.preventDefault();
      let h = !1;
      const r = V();
      S.forEach((y, N) => {
        (!y.values || y.values.length === 0) && (y.values = b(u, y.columnName)), S[N].active = ee(y).values[0], y.setByQueryParameter && r[y.setByQueryParameter] !== y.active && (r[y.setByQueryParameter] = y.active, h = !0);
      }), h && j(r), a({ ...t, filters: S }), d ? i(S, p) : i(K(S, p));
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
      const G = d ? [...n] : [...t.filters], g = { ...G[h] };
      g.values = y, g.orderedValues = y, g.active || (g.active = y[0]), g.order = "cust", G[h] = g, d && i(G), a({ ...t, filters: G });
    },
    handleSorting: ee
  };
}, Qe = (e) => {
  var Y;
  const { config: s, filteredData: o, dimensions: t, standaloneMap: a } = e, { filters: n, general: i, theme: p, filterBehavior: b } = s, [d, u] = L.useState(!1), [l, m] = L.useState(null), [C, _] = L.useState({}), T = L.useId(), E = L.useRef({}), S = Ee(E, C, n);
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
    const [c] = t, f = Number(c) < 768, w = n == null ? void 0 : n.some((B) => B.filterStyle === q.tabSimple), A = f && (n == null ? void 0 : n.length) && !w;
    u(A);
  }, [t]), L.useEffect(() => {
    const c = Object.keys(C).filter((f) => {
      const w = n.find((A) => A.columnName === f);
      return w ? w.filterStyle !== q.tabSimple : !1;
    });
    c.length && _(
      Object.fromEntries(
        Object.entries(C).filter(([f]) => !c.includes(f))
      )
    );
  }, [n]), L.useEffect(() => {
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
    let c = a ? o : n;
    return c ? (c.fromHash && delete c.fromHash, ae(c, s.data)) : [];
  }, [n, o]), x = () => O.map((c, f) => {
    var J;
    if (c.showDropdown === !1)
      return;
    const w = [], A = [], B = [], $ = c.filterStyle === "tab-simple", { active: Q, queuedActive: ne, label: W, filterStyle: P, columnName: Z } = c, { isDropdown: re } = C[Z] || {};
    g(c), (J = c.values) == null || J.forEach((v, M) => {
      const H = Q === v, I = ["pill", H ? "pill--active" : null, p && p], pe = ["tab", H && "tab--active", p && p, $ && "tab--simple"];
      A.push(
        /* @__PURE__ */ React.createElement("div", { className: "pill__wrapper", key: `pill-${M}` }, /* @__PURE__ */ React.createElement(
          "button",
          {
            id: `${v}-${f}-${M}-${T}`,
            className: I.join(" "),
            onKeyDown: (k) => {
              k.keyCode === 13 && (r(f, v), m(k.target));
            },
            onClick: (k) => {
              r(f, v), m(k.target);
            },
            name: W
          },
          v
        ))
      ), w.push(
        /* @__PURE__ */ React.createElement("option", { key: M, value: v, "aria-label": v }, c.labels && c.labels[v] ? c.labels[v] : v)
      ), B.push(
        /* @__PURE__ */ React.createElement(
          "button",
          {
            id: `${v}-${f}-${M}-${T}`,
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
    ], ce = ["nested-dropdown", "multi-select", q.tabSimple].includes(P), U = (P === "dropdown" || d) && !ce || re, [ie, le] = L.useMemo(() => {
      var v;
      return P !== "nested-dropdown" ? [] : c.queuedActive || [c.active, (v = c.subGrouping) == null ? void 0 : v.active];
    }, [c]), ue = $ && !U;
    return /* @__PURE__ */ React.createElement("div", { className: oe.join(" "), key: f, ref: (v) => E.current[Z] = v }, /* @__PURE__ */ React.createElement(React.Fragment, null, W && /* @__PURE__ */ React.createElement("label", { className: `font-weight-bold mb-${ue ? "0" : "2"}`, htmlFor: `filter-${f}` }, W), P === "tab" && !d && B, P === "tab-simple" && !U && /* @__PURE__ */ React.createElement("div", { className: "tab-simple-container d-flex w-100" }, B), P === "pill" && !d && A, P === "tab bar" && !d && /* @__PURE__ */ React.createElement(D, { filter: c, index: f }), P === "multi-select" && /* @__PURE__ */ React.createElement(
      me,
      {
        options: c.values.map((v) => ({ value: v, label: v })),
        fieldName: f,
        updateField: (v, M, H, I) => r(H, I),
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
        listLabel: W,
        handleSelectedItems: (v) => r(f, v)
      }
    ), U && /* @__PURE__ */ React.createElement(
      R,
      {
        filter: c,
        index: f,
        label: W,
        active: ne || Q,
        filters: w
      }
    )));
  });
  if (((Y = s == null ? void 0 : s.filters) == null ? void 0 : Y.length) === 0)
    return;
  const se = () => {
    const { visualizationType: c, legend: f } = s || {}, w = "filters-section", A = a ? i.headerColor : c === "Spark Line" ? null : p, B = f && !f.hide && f.position === "top" ? "mb-0" : null;
    return [w, A, B, "w-100"].filter(Boolean);
  };
  return /* @__PURE__ */ React.createElement("section", { className: se().join(" ") }, s.filterIntro && /* @__PURE__ */ React.createElement("p", { className: "filters-section__intro-text mb-3" }, s.filterIntro), /* @__PURE__ */ React.createElement("div", { className: "d-flex flex-wrap w-100 mb-4 pb-2 filters-section__wrapper align-items-end" }, " ", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(x, null), b === "Apply Button" ? /* @__PURE__ */ React.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ React.createElement(
    de,
    {
      onClick: (c) => {
        h(n);
      },
      disabled: !y,
      className: [i != null && i.headerColor ? i.headerColor : p, "apply"].join(" ")
    },
    G.buttonText
  ), /* @__PURE__ */ React.createElement("a", { href: "#!", role: "button", onClick: N }, G.resetText)) : /* @__PURE__ */ React.createElement(React.Fragment, null))));
};
export {
  Qe as F,
  ae as a,
  V as b,
  j as c,
  Re as d,
  _e as e,
  K as f,
  X as g,
  ee as h,
  ge as i,
  we as j,
  Ce as k,
  ke as r,
  Te as u
};
