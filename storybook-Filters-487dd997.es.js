import { a as M, j as A, F as Y } from "./storybook-jsx-runtime-36872362.es.js";
import { r as P } from "./storybook-index-45401197.es.js";
import { B as me } from "./storybook-Button-9d1b8d73.es.js";
import { M as ve } from "./storybook-MultiSelect-09077870.es.js";
import { _ as J } from "./storybook-lodash-a4231e1c.es.js";
import { F as ne } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as be } from "./storybook-NestedDropdown-43ca2e78.es.js";
function te(e) {
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
function H() {
  const e = {};
  for (const [n, o] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[n] ? Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o] : e[n] = o;
  return e;
}
function ke(e) {
  return H()[e];
}
function O(e) {
  const n = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((o) => `${o}=${encodeURIComponent(e[o])}`).join("&")}`;
  window.history.pushState({ path: n }, "", n);
}
function Ve(e, n) {
  const o = H();
  o[e] = n, O(o);
}
const Z = (e, n) => {
  if (!n)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return n;
  const o = [];
  return n == null || n.forEach((t) => {
    let s = !0;
    e.filter((a) => a.type !== "url").forEach((a) => {
      if (a.active === void 0)
        return;
      const c = t[a.columnName];
      if (Array.isArray(a.active) ? a.active.includes(c) || (s = !1) : c != a.active && (s = !1), a.filterStyle === "nested-dropdown" && a.subGrouping && s === !0) {
        const d = a.subGrouping.active, h = t[a.subGrouping.columnName];
        if (d === void 0)
          return;
        h != d && (s = !1);
      }
    }), s && o.push(t);
  }), o;
}, he = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([n, { orderedValues: o }]) => o ? [n, { orderedValues: o, values: [] }] : [n, { values: [] }])
), ye = (e, n) => {
  var h, p;
  const o = e.columnName, t = e.orderColumn, s = [], a = [], c = (h = e.subGrouping) == null ? void 0 : h.columnName, d = he((p = e.subGrouping) == null ? void 0 : p.valuesLookup);
  if (Array.isArray(n))
    n.forEach((u) => {
      const l = u[o];
      if (l !== void 0 && !s.includes(l) && (t && a.push([l, u[t]]), s.push(l)), c) {
        const f = u[c];
        if (l === void 0)
          return;
        d[l] || (d[l] = { values: [] }), d[l].values.includes(f) || d[l].values.push(f);
      }
    });
  else {
    if (!n)
      return s;
    Object.values(n).forEach((u) => {
      u.forEach((l) => {
        const f = l[o];
        f !== void 0 && !s.includes(f) && (t && a.push([f, l[t]]), s.push(f));
      });
    });
  }
  if (t)
    e.values = a.sort((u, l) => typeof u[1] == "number" && typeof l[1] == "number" ? u[1] - l[1] : String(u[1]).localeCompare(String(l[1]))).map(([u]) => u);
  else if (e.order && e.order !== "cust") {
    const u = (l, f) => {
      const B = e.order !== "desc";
      return String(B ? l : f).localeCompare(String(B ? f : l), "en", { numeric: !0 });
    };
    e.values = s.sort(u);
  } else
    e.values = s;
  c && (e.subGrouping.valuesLookup = d);
}, ge = (e, n, o) => {
  let t = Array.isArray(n) ? n : Object.values(n).flat(1);
  return e.parents.forEach((s) => {
    const a = o[s] || {}, [c, d] = Array.isArray(a.queuedActive) ? a.queuedActive : [a.queuedActive], h = c || (a == null ? void 0 : a.active);
    if ((a == null ? void 0 : a.filterStyle) === ne.nestedDropdown) {
      const { subGrouping: p } = a, u = d || (p == null ? void 0 : p.active);
      u && (t = t.filter((l) => {
        const f = h == l[a.columnName], B = u == l[p.columnName];
        return f && B;
      }));
    } else
      h && (t = t.filter((p) => Array.isArray(h) ? h.includes(p[a.columnName]) : h == p[a.columnName]));
  }), t;
}, se = (e, n) => e.map((o) => String(o)).includes(String(n)), re = (e, n) => {
  const o = J.keyBy(e, "id");
  return e == null ? void 0 : e.map((t) => {
    var d, h;
    const s = J.cloneDeep(t);
    let a = n;
    const c = !Array.isArray(n);
    if ((d = t.parents) != null && d.length && !c && (a = ge(t, n, o)), ye(s, a), ((h = s.values) == null ? void 0 : h.length) > 0) {
      const p = te(s);
      if (p)
        s.active = p;
      else if (s.filterStyle === ne.multiSelect) {
        const u = s.values, l = Array.isArray(s.active) ? s.active : [s.active];
        s.active = l.filter((f) => se(u, f));
      } else {
        const u = s.values[0], l = Array.isArray(s.active) ? s.active[0] : s.active;
        s.active = se(s.values, l) ? l : u;
      }
    }
    if (s.subGrouping) {
      const p = s.active, u = {
        ...s.subGrouping,
        values: s.subGrouping.valuesLookup[p].values
      }, l = te(u), f = p || s.values[0], B = s.subGrouping.valuesLookup[f].values[0], j = l || s.subGrouping.active;
      s.subGrouping.active = j || B, o[s.id].subGrouping.active = s.subGrouping.active;
    }
    return o[s.id].active = s.active, s;
  });
}, Se = ({ orderedValues: e, values: n, subGrouping: o }) => (e != null && e.length ? e.filter((a) => n.includes(a)) : n).map((a) => {
  if (!o)
    return [[a], []];
  const { orderedValues: c, values: d } = o.valuesLookup[a], h = (c == null ? void 0 : c.filter((u) => d.includes(u))) || d;
  return [
    [a],
    h.map((u) => [u])
  ];
}), Ae = (e) => {
  e.filterStyle === q.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, ae = (e) => {
  var t;
  const n = J.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (t = e.orderedValues) != null && t.length ? e.orderedValues : n, e;
  if (e.order === "column")
    return e;
  const o = (s, a) => {
    const c = e.order !== "desc";
    return String(c ? s : a).localeCompare(String(c ? a : s), "en", { numeric: !0 });
  };
  return e.values = n.sort(o), e.orderedValues = n.sort(o), e;
}, we = 60, Ce = 100, Ne = (e, n, o) => Object.entries(e.current).map(([t, s]) => {
  var b;
  if (!s)
    return !1;
  const a = o.find((L) => L.columnName === t), { filterStyle: c, label: d } = a || {};
  if (!c || c !== q.tabSimple)
    return !1;
  const h = (b = s.className.split(" ").find((L) => L.includes(c))) == null ? void 0 : b.split("single-filters--")[1];
  if (!(h && h === c))
    return !1;
  const u = n[t], { height: l, width: f } = s.getBoundingClientRect(), j = l > (d ? Ce : we);
  if (!u)
    return [t, { highestWrappedWidth: j ? f : 0, isDropdown: j }];
  const { highestWrappedWidth: Q, isDropdown: C } = u, S = f <= Q, y = f > Q, r = Math.max(Q, f);
  if ((S || j) && !C)
    return [t, { highestWrappedWidth: r, isDropdown: !0 }];
  if (C && y)
    return [t, { highestWrappedWidth: Q, isDropdown: !1 }];
}).filter(Boolean), q = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabSimple: "tab-simple",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, De = Object.values(q), Be = [
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
], Le = (e) => {
  const [n, o] = P.useState(!1), {
    config: t,
    setConfig: s,
    filteredData: a,
    setFilteredData: c,
    excludedData: d,
    getUniqueValues: h,
    standaloneMap: p
  } = e, { data: u } = t;
  return {
    handleApplyButton: (C) => {
      let S = !1;
      const y = H();
      C.forEach((r) => {
        r.queuedActive && (Ae(r), r.setByQueryParameter && y[r.setByQueryParameter] !== r.active && (y[r.setByQueryParameter] = r.active, S = !0));
      }), S && O(y), s({ ...t, filters: C }), p ? c(C, d) : c(Z(C, d)), o(!1);
    },
    changeFilterActive: (C, S) => {
      var b, L, _;
      let y = p ? [...a] : [...t.filters];
      const r = y[C];
      if (t.filterBehavior === "Apply Button")
        r.queuedActive = S, o(!0);
      else {
        r.filterStyle !== "nested-dropdown" ? r.active = S : (r.active = S[0], r.subGrouping.active = S[1]);
        const g = H();
        r.setByQueryParameter && g[r.setByQueryParameter] !== r.active && (g[r.setByQueryParameter] = r.active, O(g)), (b = r == null ? void 0 : r.subGrouping) != null && b.setByQueryParameter && g[(L = r == null ? void 0 : r.subGrouping) == null ? void 0 : L.setByQueryParameter] !== (r == null ? void 0 : r.subGrouping.active) && (g[(_ = r == null ? void 0 : r.subGrouping) == null ? void 0 : _.setByQueryParameter] = r.subGrouping.active, O(g)), c(y);
      }
      if (t.dynamicSeries || (y = re(y, d), s({
        ...t,
        filters: y
      })), p && t.filterBehavior === "Filter Change" && c(y), !p && t.filterBehavior === "Filter Change") {
        const g = Z(y, d);
        if (c(g), t.dynamicSeries) {
          const G = t.runtime || {};
          G.series = [], G.seriesLabels = {}, G.seriesLabelsAll = [], g && g.length && g.length > 0 && Object.keys(g[0]).forEach((D) => {
            var x;
            D !== t.xAxis.dataKey && g[0][D] && (!t.filters || ((x = t.filters) == null ? void 0 : x.filter((I) => I.columnName === D).length) === 0) && (!t.columns || Object.keys(t.columns).indexOf(D) === -1) && G.series.push({
              dataKey: D,
              type: t.dynamicSeriesType,
              lineType: t.dynamicSeriesLineType,
              tooltip: !0
            });
          }), G.seriesKeys = G.series ? G.series.map((D) => (G.seriesLabels[D.dataKey] = D.name || D.label || D.dataKey, G.seriesLabelsAll.push(D.name || D.dataKey), D.dataKey)) : [], s({
            ...t,
            filters: y,
            runtime: G
          });
        }
      }
    },
    showApplyButton: n,
    handleReset: (C) => {
      let S = [...t.filters];
      C.preventDefault();
      let y = !1;
      const r = H();
      S.forEach((b, L) => {
        (!b.values || b.values.length === 0) && (b.values = h(u, b.columnName)), S[L].active = ae(b).values[0], b.setByQueryParameter && r[b.setByQueryParameter] !== b.active && (r[b.setByQueryParameter] = b.active, y = !0);
      }), y && O(r), s({ ...t, filters: S }), p ? c(S, d) : c(Z(S, d));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All"
    },
    filterStyleOptions: De,
    filterOrderOptions: Be,
    handleFilterOrder: (C, S, y, r) => {
      const b = [...r.values], [L] = b.splice(C, 1);
      b.splice(S, 0, L);
      const _ = p ? [...a] : [...t.filters], g = { ..._[y] };
      g.values = b, g.orderedValues = b, g.active || (g.active = b[0]), g.order = "cust", _[y] = g, p && c(_), s({ ...t, filters: _ });
    },
    handleSorting: ae
  };
}, qe = (e) => {
  var X;
  const { config: n, filteredData: o, dimensions: t, standaloneMap: s } = e, { filters: a, general: c, theme: d, filterBehavior: h } = n, [p, u] = P.useState(!1), [l, f] = P.useState(null), [B, j] = P.useState({}), Q = P.useId(), C = P.useRef({}), S = Ne(C, B, a);
  if (S.length) {
    const i = S.filter(Boolean);
    j({ ...B, ...Object.fromEntries(i) });
  }
  const {
    handleApplyButton: y,
    changeFilterActive: r,
    showApplyButton: b,
    handleReset: L,
    filterConstants: _,
    handleSorting: g
  } = Le(e);
  P.useEffect(() => {
    if (!t)
      return;
    const [i] = t, m = Number(i) < 768, N = a == null ? void 0 : a.some((E) => E.filterStyle === q.tabSimple), w = m && (a == null ? void 0 : a.length) && !N;
    u(w);
  }, [t]), P.useEffect(() => {
    const i = Object.keys(B).filter((m) => {
      const N = a.find((w) => w.columnName === m);
      return N ? N.filterStyle !== q.tabSimple : !1;
    });
    i.length && j(
      Object.fromEntries(
        Object.entries(B).filter(([m]) => !i.includes(m))
      )
    );
  }, [a]), P.useEffect(() => {
    if (l) {
      const i = document.getElementById(l.id);
      i && i.focus();
    }
  }, [r, l]);
  const G = (i) => {
    const { filter: m, index: N } = i;
    return /* @__PURE__ */ A("section", { className: "single-filters__tab-bar", children: m.values.map((w, E) => {
      const V = ["button__tab-bar", m.active === w ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ A(
        "button",
        {
          id: `${w}-${N}-${E}-${Q}`,
          className: V.join(" "),
          onClick: (k) => {
            r(N, w), f(k.target);
          },
          onKeyDown: (k) => {
            k.keyCode === 13 && (r(N, w), f(k.target));
          },
          children: w
        },
        w
      );
    }) });
  }, D = (i) => {
    const { index: m, label: N, active: w, filters: E } = i;
    return /* @__PURE__ */ A(
      "select",
      {
        id: `filter-${m}`,
        name: N,
        "aria-label": `Filter by ${N}`,
        className: "cove-form-select",
        "data-index": "0",
        value: w,
        onChange: (V) => {
          r(m, V.target.value);
        },
        children: E
      }
    );
  }, x = P.useMemo(() => {
    let i = s ? o : a;
    return i ? (i.fromHash && delete i.fromHash, re(i, n.data)) : [];
  }, [a, o]), I = () => x.map((i, m) => {
    var ee;
    if (i.showDropdown === !1)
      return;
    const N = [], w = [], E = [], V = i.filterStyle === "tab-simple", { active: k, queuedActive: oe, label: R, filterStyle: T, columnName: F } = i, { isDropdown: ie } = B[F] || {};
    g(i), (ee = i.values) == null || ee.forEach((v, W) => {
      const U = k === v, z = ["pill", U ? "pill--active" : null, d && d], fe = ["tab", U && "tab--active", d && d, V && "tab--simple"];
      w.push(
        /* @__PURE__ */ A("div", { className: "pill__wrapper", children: /* @__PURE__ */ A(
          "button",
          {
            id: `${v}-${m}-${W}-${Q}`,
            className: z.join(" "),
            onKeyDown: ($) => {
              $.keyCode === 13 && (r(m, v), f($.target));
            },
            onClick: ($) => {
              r(m, v), f($.target);
            },
            name: R,
            children: v
          }
        ) }, `pill-${W}`)
      ), N.push(
        /* @__PURE__ */ A("option", { value: v, "aria-label": v, children: i.labels && i.labels[v] ? i.labels[v] : v }, W)
      ), E.push(
        /* @__PURE__ */ A(
          "button",
          {
            id: `${v}-${m}-${W}-${Q}`,
            className: fe.join(" "),
            onClick: ($) => {
              r(m, v), f($.target);
            },
            onKeyDown: ($) => {
              $.keyCode === 13 && (r(m, v), f($.target));
            },
            children: v
          }
        )
      );
    });
    const ce = [
      "single-filters",
      "form-group",
      p ? "single-filters--dropdown" : `single-filters--${T}`
    ], le = ["nested-dropdown", "multi-select", q.tabSimple].includes(T), K = (T === "dropdown" || p) && !le || ie, [ue, de] = P.useMemo(() => {
      var v;
      return T !== "nested-dropdown" ? [] : i.queuedActive || [i.active, (v = i.subGrouping) == null ? void 0 : v.active];
    }, [i]), pe = V && !K;
    return /* @__PURE__ */ A("div", { className: ce.join(" "), ref: (v) => C.current[F] = v, children: /* @__PURE__ */ M(Y, { children: [
      R && /* @__PURE__ */ A("label", { className: `font-weight-bold mb-${pe ? "0" : "2"}`, htmlFor: `filter-${m}`, children: R }),
      T === "tab" && !p && E,
      T === "tab-simple" && !K && /* @__PURE__ */ A("div", { className: "tab-simple-container d-flex w-100", children: E }),
      T === "pill" && !p && w,
      T === "tab bar" && !p && /* @__PURE__ */ A(G, { filter: i, index: m }),
      T === "multi-select" && /* @__PURE__ */ A(
        ve,
        {
          options: i.values.map((v) => ({ value: v, label: v })),
          fieldName: m,
          updateField: (v, W, U, z) => r(U, z),
          selected: i.active,
          limit: i.selectLimit || 5
        }
      ),
      T === "nested-dropdown" && /* @__PURE__ */ A(
        be,
        {
          activeGroup: ue,
          activeSubGroup: de,
          filterIndex: m,
          options: Se(i),
          listLabel: R,
          handleSelectedItems: (v) => r(m, v)
        }
      ),
      K && /* @__PURE__ */ A(
        D,
        {
          filter: i,
          index: m,
          label: R,
          active: oe || k,
          filters: N
        }
      )
    ] }) }, m);
  });
  return ((X = n == null ? void 0 : n.filters) == null ? void 0 : X.length) === 0 ? void 0 : /* @__PURE__ */ M("section", { className: (() => {
    const { visualizationType: i, legend: m } = n || {}, N = "filters-section", w = s ? c.headerColor : i === "Spark Line" ? null : d, E = m && !m.hide && m.position === "top" ? "mb-0" : null;
    return [N, w, E, "w-100"].filter(Boolean);
  })().join(" "), children: [
    n.filterIntro && /* @__PURE__ */ A("p", { className: "filters-section__intro-text mb-3", children: n.filterIntro }),
    /* @__PURE__ */ M("div", { className: "d-flex flex-wrap w-100 mb-4 pb-2 filters-section__wrapper", children: [
      " ",
      /* @__PURE__ */ M(Y, { children: [
        /* @__PURE__ */ A(I, {}),
        h === "Apply Button" ? /* @__PURE__ */ M("div", { className: "filters-section__buttons", children: [
          /* @__PURE__ */ A(
            me,
            {
              onClick: (i) => {
                y(a);
              },
              disabled: !b,
              className: [c != null && c.headerColor ? c.headerColor : d, "apply"].join(" "),
              children: _.buttonText
            }
          ),
          /* @__PURE__ */ A("a", { href: "#!", role: "button", onClick: L, children: _.resetText })
        ] }) : /* @__PURE__ */ A(Y, {})
      ] })
    ] })
  ] });
};
export {
  qe as F,
  re as a,
  H as b,
  O as c,
  Be as d,
  ke as e,
  Z as f,
  te as g,
  ae as h,
  Ae as i,
  De as j,
  Le as k,
  Ve as u
};
