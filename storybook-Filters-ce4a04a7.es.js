import { r as $, R as p } from "./storybook-index-45401197.es.js";
import { B as ne } from "./storybook-Button-63da743c.es.js";
import { M as re } from "./storybook-MultiSelect-d587cce3.es.js";
import { _ as O } from "./storybook-lodash-a4231e1c.es.js";
import { F as Z } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as oe } from "./storybook-NestedDropdown-bc9acc77.es.js";
function W(e) {
  const s = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const r = s.get(e.setByQueryParameter);
    if (r && e.values) {
      for (let a = 0; a < e.values.length; a++)
        if (e.values[a] && e.values[a].toLowerCase() === r.toLowerCase())
          return e.values[a];
    }
  }
}
function M() {
  const e = {};
  for (const [s, r] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[s] ? Array.isArray(e[s]) ? e[s].push(r) : e[s] = [e[s], r] : e[s] = r;
  return e;
}
function Se(e) {
  return M()[e];
}
function R(e) {
  const s = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((r) => `${r}=${encodeURIComponent(e[r])}`).join("&")}`;
  window.history.pushState({ path: s }, "", s);
}
function Ee(e, s) {
  const r = M();
  r[e] = s, R(r);
}
const z = (e, s) => {
  if (!s)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return s;
  const r = [];
  return s == null || s.forEach((a) => {
    let t = !0;
    e.filter((n) => n.type !== "url").forEach((n) => {
      if (n.active === void 0)
        return;
      const l = a[n.columnName];
      if (Array.isArray(n.active) ? n.active.includes(l) || (t = !1) : l != n.active && (t = !1), n.filterStyle === "nested-dropdown" && n.subGrouping && t === !0) {
        const d = n.subGrouping.active, A = a[n.subGrouping.columnName];
        if (d === void 0)
          return;
        A != d && (t = !1);
      }
    }), t && r.push(a);
  }), r;
}, ue = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([s, { orderedValues: r }]) => r ? [s, { orderedValues: r, values: [] }] : [s, { values: [] }])
), ce = (e, s) => {
  var A, i;
  const r = e.columnName, a = e.orderColumn, t = [], n = [], l = (A = e.subGrouping) == null ? void 0 : A.columnName, d = ue((i = e.subGrouping) == null ? void 0 : i.valuesLookup);
  if (Array.isArray(s))
    s.forEach((m) => {
      const c = m[r];
      if (c !== void 0 && !t.includes(c) && (a && n.push([c, m[a]]), t.push(c)), l) {
        const f = m[l];
        if (c === void 0)
          return;
        d[c] || (d[c] = { values: [] }), d[c].values.includes(f) || d[c].values.push(f);
      }
    });
  else {
    if (!s)
      return t;
    Object.values(s).forEach((m) => {
      m.forEach((c) => {
        const f = c[r];
        f !== void 0 && !t.includes(f) && (a && n.push([f, c[a]]), t.push(f));
      });
    });
  }
  if (a)
    e.values = n.sort((m, c) => typeof m[1] == "number" && typeof c[1] == "number" ? m[1] - c[1] : String(m[1]).localeCompare(String(c[1]))).map(([m]) => m);
  else if (e.order && e.order !== "cust") {
    const m = (c, f) => {
      const w = e.order !== "desc";
      return String(w ? c : f).localeCompare(String(w ? f : c), "en", { numeric: !0 });
    };
    e.values = t.sort(m);
  } else
    e.values = t;
  l && (e.subGrouping.valuesLookup = d);
}, le = (e, s, r) => {
  let a = Array.isArray(s) ? s : Object.values(s).flat(1);
  return e.parents.forEach((t) => {
    const n = r[t] || {}, [l, d] = Array.isArray(n.queuedActive) ? n.queuedActive : [n.queuedActive], A = l || (n == null ? void 0 : n.active);
    if ((n == null ? void 0 : n.filterStyle) === Z.nestedDropdown) {
      const { subGrouping: i } = n, m = d || (i == null ? void 0 : i.active);
      m && (a = a.filter((c) => {
        const f = A == c[n.columnName], w = m == c[i.columnName];
        return f && w;
      }));
    } else
      A && (a = a.filter((i) => Array.isArray(A) ? A.includes(i[n.columnName]) : A == i[n.columnName]));
  }), a;
}, Y = (e, s) => e.map((r) => String(r)).includes(String(s)), J = (e, s) => {
  const r = O.keyBy(e, "id");
  return e == null ? void 0 : e.map((a) => {
    var d, A;
    const t = O.cloneDeep(a);
    let n = s;
    const l = !Array.isArray(s);
    if ((d = a.parents) != null && d.length && !l && (n = le(a, s, r)), ce(t, n), ((A = t.values) == null ? void 0 : A.length) > 0) {
      const i = W(t);
      if (i)
        t.active = i;
      else if (t.filterStyle === Z.multiSelect) {
        const m = t.values, c = Array.isArray(t.active) ? t.active : [t.active];
        t.active = c.filter((f) => Y(m, f));
      } else {
        const m = t.values[0], c = Array.isArray(t.active) ? t.active[0] : t.active;
        t.active = Y(t.values, c) ? c : m;
      }
    }
    if (t.subGrouping) {
      const i = t.active, m = {
        ...t.subGrouping,
        values: t.subGrouping.valuesLookup[i].values
      }, c = W(m), f = i || t.values[0], w = t.subGrouping.valuesLookup[f].values[0], U = c || t.subGrouping.active;
      t.subGrouping.active = U || w, r[t.id].subGrouping.active = t.subGrouping.active;
    }
    return r[t.id].active = t.active, t;
  });
}, ie = ({ orderedValues: e, values: s, subGrouping: r }) => (e != null && e.length ? e.filter((n) => s.includes(n)) : s).map((n) => {
  if (!r)
    return [[n], []];
  const { orderedValues: l, values: d } = r.valuesLookup[n], A = (l == null ? void 0 : l.filter((m) => d.includes(m))) || d;
  return [
    [n],
    A.map((m) => [m])
  ];
}), me = (e) => {
  e.filterStyle === X.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, I = (e) => {
  var a;
  const s = O.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (a = e.orderedValues) != null && a.length ? e.orderedValues : s, e;
  if (e.order === "column")
    return e;
  const r = (t, n) => {
    const l = e.order !== "desc";
    return String(l ? t : n).localeCompare(String(l ? n : t), "en", { numeric: !0 });
  };
  return e.values = s.sort(r), e;
}, X = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, de = Object.values(X), pe = [
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
], ve = (e) => {
  const [s, r] = $.useState(!1), {
    config: a,
    setConfig: t,
    filteredData: n,
    setFilteredData: l,
    excludedData: d,
    getUniqueValues: A,
    standaloneMap: i
  } = e, { data: m } = a;
  return {
    handleApplyButton: (B) => {
      let S = !1;
      const b = M();
      B.forEach((o) => {
        o.queuedActive && (me(o), o.setByQueryParameter && b[o.setByQueryParameter] !== o.active && (b[o.setByQueryParameter] = o.active, S = !0));
      }), S && R(b), t({ ...a, filters: B }), i ? l(B, d) : l(z(B, d)), r(!1);
    },
    changeFilterActive: (B, S) => {
      var h, Q, L;
      let b = i ? [...n] : [...a.filters];
      const o = b[B];
      if (a.filterBehavior === "Apply Button")
        o.queuedActive = S, r(!0);
      else {
        o.filterStyle !== "nested-dropdown" ? o.active = S : (o.active = S[0], o.subGrouping.active = S[1]);
        const g = M();
        o.setByQueryParameter && g[o.setByQueryParameter] !== o.active && (g[o.setByQueryParameter] = o.active, R(g)), (h = o == null ? void 0 : o.subGrouping) != null && h.setByQueryParameter && g[(Q = o == null ? void 0 : o.subGrouping) == null ? void 0 : Q.setByQueryParameter] !== (o == null ? void 0 : o.subGrouping.active) && (g[(L = o == null ? void 0 : o.subGrouping) == null ? void 0 : L.setByQueryParameter] = o.subGrouping.active, R(g)), l(b);
      }
      if (a.dynamicSeries || (b = J(b, d), t({
        ...a,
        filters: b
      })), i && a.filterBehavior === "Filter Change" && l(b), !i && a.filterBehavior === "Filter Change") {
        const g = z(b, d);
        if (l(g), a.dynamicSeries) {
          const N = a.runtime || {};
          N.series = [], N.seriesLabels = {}, N.seriesLabelsAll = [], g && g.length && g.length > 0 && Object.keys(g[0]).forEach((E) => {
            var u;
            E !== a.xAxis.dataKey && g[0][E] && (!a.filters || ((u = a.filters) == null ? void 0 : u.filter((v) => v.columnName === E).length) === 0) && (!a.columns || Object.keys(a.columns).indexOf(E) === -1) && N.series.push({
              dataKey: E,
              type: a.dynamicSeriesType,
              lineType: a.dynamicSeriesLineType,
              tooltip: !0
            });
          }), N.seriesKeys = N.series ? N.series.map((E) => (N.seriesLabels[E.dataKey] = E.name || E.label || E.dataKey, N.seriesLabelsAll.push(E.name || E.dataKey), E.dataKey)) : [], t({
            ...a,
            filters: b,
            runtime: N
          });
        }
      }
    },
    showApplyButton: s,
    handleReset: (B) => {
      let S = [...a.filters];
      B.preventDefault();
      let b = !1;
      const o = M();
      S.forEach((h, Q) => {
        (!h.values || h.values.length === 0) && (h.values = A(m, h.columnName)), S[Q].active = I(h).values[0], h.setByQueryParameter && o[h.setByQueryParameter] !== h.active && (o[h.setByQueryParameter] = h.active, b = !0);
      }), b && R(o), t({ ...a, filters: S }), i ? l(S, d) : l(z(S, d));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All"
    },
    filterStyleOptions: de,
    filterOrderOptions: pe,
    handleFilterOrder: (B, S, b, o) => {
      const h = [...o.values], [Q] = h.splice(B, 1);
      h.splice(S, 0, Q);
      const L = i ? [...n] : [...a.filters], g = { ...L[b] };
      g.values = h, g.orderedValues = h, g.active = h[0], g.order = "cust", L[b] = g, i && l(L), t({ ...a, filters: L });
    },
    handleSorting: I
  };
}, Ce = (e) => {
  var E;
  const { config: s, filteredData: r, dimensions: a, standaloneMap: t } = e, { filters: n, general: l, theme: d, filterBehavior: A } = s, [i, m] = $.useState(!1), [c, f] = $.useState(null), w = $.useId(), {
    handleApplyButton: U,
    changeFilterActive: D,
    showApplyButton: B,
    handleReset: S,
    filterConstants: b,
    handleSorting: o
  } = ve(e);
  $.useEffect(() => {
    a && (Number(a[0]) < 768 && (n == null ? void 0 : n.length) > 0 ? m(!0) : m(!1));
  }, [a]), $.useEffect(() => {
    if (c) {
      const u = document.getElementById(c.id);
      u && u.focus();
    }
  }, [D, c]);
  const h = (u) => {
    const { filter: v, index: G } = u;
    return /* @__PURE__ */ p.createElement("section", { className: "single-filters__tab-bar" }, v.values.map((C, V) => {
      const _ = ["button__tab-bar", v.active === C ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ p.createElement(
        "button",
        {
          id: `${C}-${G}-${V}-${w}`,
          className: _.join(" "),
          key: C,
          onClick: (q) => {
            D(G, C), f(q.target);
          },
          onKeyDown: (q) => {
            q.keyCode === 13 && (D(G, C), f(q.target));
          }
        },
        C
      );
    }));
  }, Q = (u) => {
    const { index: v, label: G, active: C, filters: V } = u;
    return /* @__PURE__ */ p.createElement(
      "select",
      {
        id: `filter-${v}`,
        name: G,
        "aria-label": `Filter by ${G}`,
        className: "cove-form-select",
        "data-index": "0",
        value: C,
        onChange: (_) => {
          D(v, _.target.value);
        }
      },
      V
    );
  }, L = $.useMemo(() => {
    let u = t ? r : n;
    return u ? (u.fromHash && delete u.fromHash, J(u, s.data)) : [];
  }, [n, r]), g = () => L.map((u, v) => {
    var H;
    if (u.showDropdown === !1)
      return;
    const G = [], C = [], V = [], { active: _, queuedActive: q, label: j, filterStyle: P } = u;
    o(u), (H = u.values) == null || H.forEach((y, T) => {
      const x = ["pill", _ === y ? "pill--active" : null, d && d], K = ["tab", _ === y && "tab--active", d && d];
      C.push(
        /* @__PURE__ */ p.createElement("div", { className: "pill__wrapper", key: `pill-${T}` }, /* @__PURE__ */ p.createElement(
          "button",
          {
            id: `${y}-${v}-${T}-${w}`,
            className: x.join(" "),
            onKeyDown: (k) => {
              k.keyCode === 13 && (D(v, y), f(k.target));
            },
            onClick: (k) => {
              D(v, y), f(k.target);
            },
            name: j
          },
          y
        ))
      ), G.push(
        /* @__PURE__ */ p.createElement("option", { key: T, value: y, "aria-label": y }, u.labels && u.labels[y] ? u.labels[y] : y)
      ), V.push(
        /* @__PURE__ */ p.createElement(
          "button",
          {
            id: `${y}-${v}-${T}-${w}`,
            className: K.join(" "),
            onClick: (k) => {
              D(v, y), f(k.target);
            },
            onKeyDown: (k) => {
              k.keyCode === 13 && (D(v, y), f(k.target));
            }
          },
          y
        )
      );
    });
    const F = [
      "single-filters",
      "form-group",
      i ? "single-filters--dropdown" : `single-filters--${P}`
    ], ee = ["nested-dropdown", "multi-select"].includes(P), te = (P === "dropdown" || i) && !ee, [ae, se] = $.useMemo(() => {
      var y;
      return P !== "nested-dropdown" ? [] : u.queuedActive || [u.active, (y = u.subGrouping) == null ? void 0 : y.active];
    }, [u]);
    return /* @__PURE__ */ p.createElement("div", { className: F.join(" "), key: v }, /* @__PURE__ */ p.createElement(p.Fragment, null, j && /* @__PURE__ */ p.createElement("label", { className: "font-weight-bold mb-2", htmlFor: `filter-${v}` }, j), P === "tab" && !i && V, P === "pill" && !i && C, P === "tab bar" && !i && /* @__PURE__ */ p.createElement(h, { filter: u, index: v }), P === "multi-select" && /* @__PURE__ */ p.createElement(
      re,
      {
        options: u.values.map((y) => ({ value: y, label: y })),
        fieldName: v,
        updateField: (y, T, x, K) => D(x, K),
        selected: u.active,
        limit: u.selectLimit || 5
      }
    ), P === "nested-dropdown" && /* @__PURE__ */ p.createElement(
      oe,
      {
        activeGroup: ae,
        activeSubGroup: se,
        filterIndex: v,
        options: ie(u),
        listLabel: j,
        handleSelectedItems: (y) => D(v, y)
      }
    ), te && /* @__PURE__ */ p.createElement(
      Q,
      {
        filter: u,
        index: v,
        label: j,
        active: q || _,
        filters: G
      }
    )));
  });
  if (((E = s == null ? void 0 : s.filters) == null ? void 0 : E.length) === 0)
    return;
  const N = () => {
    const { visualizationType: u, legend: v } = s || {}, G = "filters-section", C = t ? l.headerColor : u === "Spark Line" ? null : d, V = v && !v.hide && v.position === "top" ? "mb-0" : null;
    return [G, C, V, "w-100"].filter(Boolean);
  };
  return /* @__PURE__ */ p.createElement("section", { className: N().join(" ") }, s.filterIntro && /* @__PURE__ */ p.createElement("p", { className: "filters-section__intro-text mb-3" }, s.filterIntro), /* @__PURE__ */ p.createElement("div", { className: "d-flex flex-wrap w-100 mb-4 pb-2 filters-section__wrapper" }, " ", /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(g, null), A === "Apply Button" ? /* @__PURE__ */ p.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ p.createElement(
    ne,
    {
      onClick: (u) => {
        U(n);
      },
      disabled: !B,
      className: [l != null && l.headerColor ? l.headerColor : d, "apply"].join(" ")
    },
    b.buttonText
  ), /* @__PURE__ */ p.createElement("a", { href: "#!", role: "button", onClick: S }, b.resetText)) : /* @__PURE__ */ p.createElement(p.Fragment, null))));
};
export {
  Ce as F,
  J as a,
  M as b,
  R as c,
  Se as d,
  me as e,
  z as f,
  W as g,
  pe as h,
  I as i,
  de as j,
  ve as k,
  Ee as u
};
