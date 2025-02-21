import { a as H, j as A, F as Y } from "./storybook-jsx-runtime-36872362.es.js";
import { r as E } from "./storybook-index-45401197.es.js";
import { B as me } from "./storybook-Button-9d1b8d73.es.js";
import { M as ve } from "./storybook-MultiSelect-09077870.es.js";
import { _ as J } from "./storybook-lodash-a4231e1c.es.js";
import { F as ne } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as be } from "./storybook-NestedDropdown-43ca2e78.es.js";
function te(e) {
  const a = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const o = a.get(e.setByQueryParameter);
    if (o && e.values) {
      for (let t = 0; t < e.values.length; t++)
        if (e.values[t] && e.values[t].toLowerCase() === o.toLowerCase())
          return e.values[t];
    }
  }
}
function R() {
  const e = {};
  for (const [a, o] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[a] ? Array.isArray(e[a]) ? e[a].push(o) : e[a] = [e[a], o] : e[a] = o;
  return e;
}
function ke(e) {
  return R()[e];
}
function q(e) {
  const a = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((o) => `${o}=${encodeURIComponent(e[o])}`).join("&")}`;
  window.history.pushState({ path: a }, "", a);
}
function Ve(e, a) {
  const o = R();
  o[e] = a, q(o);
}
function qe(e) {
  const a = R();
  delete a[e], q(a);
}
const Z = (e, a) => {
  if (!a)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return a;
  const o = [];
  return a == null || a.forEach((t) => {
    let s = !0;
    e.filter((n) => n.type !== "url").forEach((n) => {
      if (n.active === void 0)
        return;
      const c = t[n.columnName];
      if (Array.isArray(n.active) ? n.active.includes(c) || (s = !1) : c != n.active && (s = !1), n.filterStyle === "nested-dropdown" && n.subGrouping && s === !0) {
        const d = n.subGrouping.active, y = t[n.subGrouping.columnName];
        if (d === void 0)
          return;
        y != d && (s = !1);
      }
    }), s && o.push(t);
  }), o;
}, ye = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([a, { orderedValues: o }]) => o ? [a, { orderedValues: o, values: [] }] : [a, { values: [] }])
), he = (e, a) => {
  var y, p;
  const o = e.columnName, t = e.orderColumn, s = [], n = [], c = (y = e.subGrouping) == null ? void 0 : y.columnName, d = ye((p = e.subGrouping) == null ? void 0 : p.valuesLookup);
  if (Array.isArray(a))
    a.forEach((u) => {
      const l = u[o];
      if (l !== void 0 && !s.includes(l) && (t && n.push([l, u[t]]), s.push(l)), c) {
        const f = u[c];
        if (l === void 0)
          return;
        d[l] || (d[l] = { values: [] }), d[l].values.includes(f) || d[l].values.push(f);
      }
    });
  else {
    if (!a)
      return s;
    Object.values(a).forEach((u) => {
      u.forEach((l) => {
        const f = l[o];
        f !== void 0 && !s.includes(f) && (t && n.push([f, l[t]]), s.push(f));
      });
    });
  }
  if (t)
    e.values = n.sort((u, l) => typeof u[1] == "number" && typeof l[1] == "number" ? u[1] - l[1] : String(u[1]).localeCompare(String(l[1]))).map(([u]) => u);
  else if (e.order && e.order !== "cust") {
    const u = (l, f) => {
      const B = e.order !== "desc";
      return String(B ? l : f).localeCompare(String(B ? f : l), "en", { numeric: !0 });
    };
    e.values = s.sort(u);
  } else
    e.values = s;
  c && (e.subGrouping.valuesLookup = d);
}, ge = (e, a, o) => {
  let t = Array.isArray(a) ? a : Object.values(a).flat(1);
  return e.parents.forEach((s) => {
    const n = o[s] || {}, [c, d] = Array.isArray(n.queuedActive) ? n.queuedActive : [n.queuedActive], y = c || (n == null ? void 0 : n.active);
    if ((n == null ? void 0 : n.filterStyle) === ne.nestedDropdown) {
      const { subGrouping: p } = n, u = d || (p == null ? void 0 : p.active);
      u && (t = t.filter((l) => {
        const f = y == l[n.columnName], B = u == l[p.columnName];
        return f && B;
      }));
    } else
      y && (t = t.filter((p) => Array.isArray(y) ? y.includes(p[n.columnName]) : y == p[n.columnName]));
  }), t;
}, se = (e, a) => e.map((o) => String(o)).includes(String(a)), re = (e, a) => {
  const o = J.keyBy(e, "id");
  return e == null ? void 0 : e.map((t) => {
    var d, y;
    const s = J.cloneDeep(t);
    let n = a;
    const c = !Array.isArray(a);
    if ((d = t.parents) != null && d.length && !c && (n = ge(t, a, o)), he(s, n), ((y = s.values) == null ? void 0 : y.length) > 0) {
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
      }, l = te(u), f = p || s.values[0], B = s.subGrouping.valuesLookup[f].values[0], Q = l || s.subGrouping.active;
      s.subGrouping.active = Q || B, o[s.id].subGrouping.active = s.subGrouping.active;
    }
    return o[s.id].active = s.active, s;
  });
}, Se = ({ orderedValues: e, values: a, subGrouping: o }) => (e != null && e.length ? e.filter((n) => a.includes(n)) : a).map((n) => {
  if (!o)
    return [[n], []];
  const { orderedValues: c, values: d } = o.valuesLookup[n], y = (c == null ? void 0 : c.filter((u) => d.includes(u))) || d;
  return [
    [n],
    y.map((u) => [u])
  ];
}), Ae = (e) => {
  e.filterStyle === W.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, ae = (e) => {
  var t;
  const a = J.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (t = e.orderedValues) != null && t.length ? e.orderedValues : a, e;
  if (e.order === "column")
    return e;
  const o = (s, n) => {
    const c = e.order !== "desc";
    return String(c ? s : n).localeCompare(String(c ? n : s), "en", { numeric: !0 });
  };
  return e.values = a.sort(o), e.orderedValues = a.sort(o), e;
}, we = 60, Ce = 100, Ne = (e, a, o) => Object.entries(e.current).map(([t, s]) => {
  var b;
  if (!s)
    return !1;
  const n = o.find((L) => L.columnName === t), { filterStyle: c, label: d } = n || {};
  if (!c || c !== W.tabSimple)
    return !1;
  const y = (b = s.className.split(" ").find((L) => L.includes(c))) == null ? void 0 : b.split("single-filters--")[1];
  if (!(y && y === c))
    return !1;
  const u = a[t], { height: l, width: f } = s.getBoundingClientRect(), Q = l > (d ? Ce : we);
  if (!u)
    return [t, { highestWrappedWidth: Q ? f : 0, isDropdown: Q }];
  const { highestWrappedWidth: j, isDropdown: C } = u, S = f <= j, h = f > j, r = Math.max(j, f);
  if ((S || Q) && !C)
    return [t, { highestWrappedWidth: r, isDropdown: !0 }];
  if (C && h)
    return [t, { highestWrappedWidth: j, isDropdown: !1 }];
}).filter(Boolean), W = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabSimple: "tab-simple",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, De = Object.values(W), Be = [
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
  const [a, o] = E.useState(!1), {
    config: t,
    setConfig: s,
    filteredData: n,
    setFilteredData: c,
    excludedData: d,
    getUniqueValues: y,
    standaloneMap: p
  } = e, { data: u } = t;
  return {
    handleApplyButton: (C) => {
      let S = !1;
      const h = R();
      C.forEach((r) => {
        r.queuedActive && (Ae(r), r.setByQueryParameter && h[r.setByQueryParameter] !== r.active && (h[r.setByQueryParameter] = r.active, S = !0));
      }), S && q(h), s({ ...t, filters: C }), p ? c(C, d) : c(Z(C, d)), o(!1);
    },
    changeFilterActive: (C, S) => {
      var b, L, _;
      let h = p ? [...n] : [...t.filters];
      const r = h[C];
      if (t.filterBehavior === "Apply Button")
        r.queuedActive = S, o(!0);
      else {
        r.filterStyle !== "nested-dropdown" ? r.active = S : (r.active = S[0], r.subGrouping.active = S[1]);
        const g = R();
        r.setByQueryParameter && g[r.setByQueryParameter] !== r.active && (g[r.setByQueryParameter] = r.active, q(g)), (b = r == null ? void 0 : r.subGrouping) != null && b.setByQueryParameter && g[(L = r == null ? void 0 : r.subGrouping) == null ? void 0 : L.setByQueryParameter] !== (r == null ? void 0 : r.subGrouping.active) && (g[(_ = r == null ? void 0 : r.subGrouping) == null ? void 0 : _.setByQueryParameter] = r.subGrouping.active, q(g)), c(h);
      }
      if (t.dynamicSeries || (h = re(h, d), s({
        ...t,
        filters: h
      })), p && t.filterBehavior === "Filter Change" && c(h), !p && t.filterBehavior === "Filter Change") {
        const g = Z(h, d);
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
            filters: h,
            runtime: G
          });
        }
      }
    },
    showApplyButton: a,
    handleReset: (C) => {
      let S = [...t.filters];
      C.preventDefault();
      let h = !1;
      const r = R();
      S.forEach((b, L) => {
        (!b.values || b.values.length === 0) && (b.values = y(u, b.columnName)), S[L].active = ae(b).values[0], b.setByQueryParameter && r[b.setByQueryParameter] !== b.active && (r[b.setByQueryParameter] = b.active, h = !0);
      }), h && q(r), s({ ...t, filters: S }), p ? c(S, d) : c(Z(S, d));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All"
    },
    filterStyleOptions: De,
    filterOrderOptions: Be,
    handleFilterOrder: (C, S, h, r) => {
      const b = [...r.values], [L] = b.splice(C, 1);
      b.splice(S, 0, L);
      const _ = p ? [...n] : [...t.filters], g = { ..._[h] };
      g.values = b, g.orderedValues = b, g.active || (g.active = b[0]), g.order = "cust", _[h] = g, p && c(_), s({ ...t, filters: _ });
    },
    handleSorting: ae
  };
}, Re = (e) => {
  var X;
  const { config: a, filteredData: o, dimensions: t, standaloneMap: s } = e, { filters: n, general: c, theme: d, filterBehavior: y } = a, [p, u] = E.useState(!1), [l, f] = E.useState(null), [B, Q] = E.useState({}), j = E.useId(), C = E.useRef({}), S = Ne(C, B, n);
  if (S.length) {
    const i = S.filter(Boolean);
    Q({ ...B, ...Object.fromEntries(i) });
  }
  const {
    handleApplyButton: h,
    changeFilterActive: r,
    showApplyButton: b,
    handleReset: L,
    filterConstants: _,
    handleSorting: g
  } = Le(e);
  E.useEffect(() => {
    if (!t)
      return;
    const [i] = t, m = Number(i) < 768, N = n == null ? void 0 : n.some((P) => P.filterStyle === W.tabSimple), w = m && (n == null ? void 0 : n.length) && !N;
    u(w);
  }, [t]), E.useEffect(() => {
    const i = Object.keys(B).filter((m) => {
      const N = n.find((w) => w.columnName === m);
      return N ? N.filterStyle !== W.tabSimple : !1;
    });
    i.length && Q(
      Object.fromEntries(
        Object.entries(B).filter(([m]) => !i.includes(m))
      )
    );
  }, [n]), E.useEffect(() => {
    if (l) {
      const i = document.getElementById(l.id);
      i && i.focus();
    }
  }, [r, l]);
  const G = (i) => {
    const { filter: m, index: N } = i;
    return /* @__PURE__ */ A("section", { className: "single-filters__tab-bar", children: m.values.map((w, P) => {
      const V = ["button__tab-bar", m.active === w ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ A(
        "button",
        {
          id: `${w}-${N}-${P}-${j}`,
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
    const { index: m, label: N, active: w, filters: P } = i;
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
        children: P
      }
    );
  }, x = E.useMemo(() => {
    let i = s ? o : n;
    return i ? (i.fromHash && delete i.fromHash, re(i, a.data)) : [];
  }, [n, o]), I = () => x.map((i, m) => {
    var ee;
    if (i.showDropdown === !1)
      return;
    const N = [], w = [], P = [], V = i.filterStyle === "tab-simple", { active: k, queuedActive: oe, label: M, filterStyle: T, columnName: F } = i, { isDropdown: ie } = B[F] || {};
    g(i), (ee = i.values) == null || ee.forEach((v, O) => {
      const U = k === v, z = ["pill", U ? "pill--active" : null, d && d], fe = ["tab", U && "tab--active", d && d, V && "tab--simple"];
      w.push(
        /* @__PURE__ */ A("div", { className: "pill__wrapper", children: /* @__PURE__ */ A(
          "button",
          {
            id: `${v}-${m}-${O}-${j}`,
            className: z.join(" "),
            onKeyDown: ($) => {
              $.keyCode === 13 && (r(m, v), f($.target));
            },
            onClick: ($) => {
              r(m, v), f($.target);
            },
            name: M,
            children: v
          }
        ) }, `pill-${O}`)
      ), N.push(
        /* @__PURE__ */ A("option", { value: v, "aria-label": v, children: i.labels && i.labels[v] ? i.labels[v] : v }, O)
      ), P.push(
        /* @__PURE__ */ A(
          "button",
          {
            id: `${v}-${m}-${O}-${j}`,
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
    ], le = ["nested-dropdown", "multi-select", W.tabSimple].includes(T), K = (T === "dropdown" || p) && !le || ie, [ue, de] = E.useMemo(() => {
      var v;
      return T !== "nested-dropdown" ? [] : i.queuedActive || [i.active, (v = i.subGrouping) == null ? void 0 : v.active];
    }, [i]), pe = V && !K;
    return /* @__PURE__ */ A("div", { className: ce.join(" "), ref: (v) => C.current[F] = v, children: /* @__PURE__ */ H(Y, { children: [
      M && /* @__PURE__ */ A("label", { className: `font-weight-bold mb-${pe ? "0" : "2"}`, htmlFor: `filter-${m}`, children: M }),
      T === "tab" && !p && P,
      T === "tab-simple" && !K && /* @__PURE__ */ A("div", { className: "tab-simple-container d-flex w-100", children: P }),
      T === "pill" && !p && w,
      T === "tab bar" && !p && /* @__PURE__ */ A(G, { filter: i, index: m }),
      T === "multi-select" && /* @__PURE__ */ A(
        ve,
        {
          options: i.values.map((v) => ({ value: v, label: v })),
          fieldName: m,
          updateField: (v, O, U, z) => r(U, z),
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
          listLabel: M,
          handleSelectedItems: (v) => r(m, v)
        }
      ),
      K && /* @__PURE__ */ A(
        D,
        {
          filter: i,
          index: m,
          label: M,
          active: oe || k,
          filters: N
        }
      )
    ] }) }, m);
  });
  return ((X = a == null ? void 0 : a.filters) == null ? void 0 : X.length) === 0 ? void 0 : /* @__PURE__ */ H("section", { className: (() => {
    const { visualizationType: i, legend: m } = a || {}, N = "filters-section", w = s ? c.headerColor : i === "Spark Line" ? null : d, P = m && !m.hide && m.position === "top" ? "mb-0" : null;
    return [N, w, P, "w-100"].filter(Boolean);
  })().join(" "), children: [
    a.filterIntro && /* @__PURE__ */ A("p", { className: "filters-section__intro-text mb-3", children: a.filterIntro }),
    /* @__PURE__ */ H("div", { className: "d-flex flex-wrap w-100 mb-4 pb-2 filters-section__wrapper align-items-end", children: [
      " ",
      /* @__PURE__ */ H(Y, { children: [
        /* @__PURE__ */ A(I, {}),
        y === "Apply Button" ? /* @__PURE__ */ H("div", { className: "filters-section__buttons", children: [
          /* @__PURE__ */ A(
            me,
            {
              onClick: (i) => {
                h(n);
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
  Re as F,
  re as a,
  R as b,
  q as c,
  Be as d,
  ke as e,
  Z as f,
  te as g,
  ae as h,
  Ae as i,
  De as j,
  Le as k,
  qe as r,
  Ve as u
};
