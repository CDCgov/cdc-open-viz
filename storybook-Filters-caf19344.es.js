import { j as h, F as j, a as O } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as A } from "./storybook-index-f2fed736.es.js";
import { B as H } from "./storybook-Button-f953e457.es.js";
import { M as ae } from "./storybook-MultiSelect-cda00383.es.js";
import { _ as E } from "./storybook-lodash-a4231e1c.es.js";
import { F as X } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as ce } from "./storybook-NestedDropdown-92b50717.es.js";
import { a as ne } from "./storybook-Dropdown-1c93166f.es.js";
const K = (e) => {
  var a;
  const s = E.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (a = e.orderedValues) != null && a.length ? e.orderedValues : s, e;
  if (e.order === "column")
    return e;
  const o = (r, t) => {
    const p = e.order !== "desc";
    return String(p ? r : t).localeCompare(String(p ? t : r), "en", { numeric: !0 });
  };
  return e.values = s == null ? void 0 : s.sort(o), e.orderedValues = s == null ? void 0 : s.sort(o), e;
};
function U(e) {
  const s = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const o = s.get(e.setByQueryParameter);
    if (o && e.values) {
      for (let a = 0; a < e.values.length; a++)
        if (e.values[a] && e.values[a].toLowerCase() === o.toLowerCase())
          return e.values[a];
    }
  }
}
function G() {
  const e = {};
  for (const [s, o] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[s] ? Array.isArray(e[s]) ? e[s].push(o) : e[s] = [e[s], o] : e[s] = o;
  return e;
}
function Pe(e) {
  return G()[e];
}
function L(e) {
  const s = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((o) => `${o}=${encodeURIComponent(e[o])}`).join("&")}`;
  window.history.pushState({ path: s }, "", s);
}
function _e(e, s) {
  if (!e)
    return;
  const o = G();
  o[e] = s, L(o);
}
function Ee(e) {
  const s = G();
  delete s[e], L(s);
}
const ue = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([s, { orderedValues: o }]) => o ? [s, { orderedValues: o, values: [] }] : [s, { values: [] }])
), ie = (e, s) => {
  var c, n;
  const o = e.columnName, a = e.orderColumn, r = [], t = [], p = (c = e.subGrouping) == null ? void 0 : c.columnName, f = ue((n = e.subGrouping) == null ? void 0 : n.valuesLookup);
  if (Array.isArray(s))
    s.forEach((i) => {
      const u = i[o];
      if (u !== void 0 && !r.includes(u) && (a && t.push([u, i[a]]), r.push(u)), p) {
        const y = i[p];
        if (u === void 0)
          return;
        f[u] || (f[u] = { values: [] }), f[u].values.includes(y) || f[u].values.push(y);
      }
    });
  else {
    if (!s)
      return r;
    Object.values(s).forEach((i) => {
      i.forEach((u) => {
        const y = u[o];
        y !== void 0 && !r.includes(y) && (a && t.push([y, u[a]]), r.push(y));
      });
    });
  }
  if (a)
    e.values = t.sort((i, u) => typeof i[1] == "number" && typeof u[1] == "number" ? i[1] - u[1] : String(i[1]).localeCompare(String(u[1]))).map(([i]) => i);
  else if (e.order && e.order !== "cust") {
    const i = (u, y) => {
      const S = e.order !== "desc";
      return String(S ? u : y).localeCompare(String(S ? y : u), "en", { numeric: !0 });
    };
    e.values = r.sort(i);
  } else
    e.values = r;
  p && (e.subGrouping.valuesLookup = f);
}, le = (e, s, o) => {
  let a = Array.isArray(s) ? s : Object.values(s).flat(1);
  return e.parents.forEach((r) => {
    const t = o[r] || {}, [p, f] = Array.isArray(t.queuedActive) ? t.queuedActive : [t.queuedActive], c = p || (t == null ? void 0 : t.active);
    if ((t == null ? void 0 : t.filterStyle) === X.nestedDropdown) {
      const { subGrouping: n } = t, i = f || (n == null ? void 0 : n.active);
      i && (a = a.filter((u) => {
        const y = c == u[t.columnName], S = i == u[n.columnName];
        return y && S;
      }));
    } else
      c && (a = a.filter((n) => Array.isArray(c) ? c.includes(n[t.columnName]) : c == n[t.columnName]));
  }), a;
}, x = (e, s) => e.map((o) => String(o)).includes(String(s)), I = (e, s) => {
  const o = E.keyBy(e, "id");
  return e == null ? void 0 : e.map((a) => {
    var f, c;
    const r = E.cloneDeep(a);
    let t = s;
    const p = !Array.isArray(s);
    if ((f = a.parents) != null && f.length && !p && (t = le(a, s, o)), ie(r, t), ((c = r.values) == null ? void 0 : c.length) > 0) {
      const n = U(r);
      if (n)
        r.active = n;
      else if (r.filterStyle === X.multiSelect) {
        const i = r.values, u = Array.isArray(r.active) ? r.active : [r.active];
        r.active = u.filter((y) => x(i, y));
      } else {
        const i = r.defaultValue || r.values[0], u = Array.isArray(r.active) ? r.active[0] : r.active;
        r.active = x(r.values, u) ? u : i;
      }
    }
    if (r.subGrouping) {
      const n = r.active, i = {
        ...r.subGrouping,
        values: r.subGrouping.valuesLookup[n].values
      }, u = U(i), y = n || r.values[0], S = r.subGrouping.valuesLookup[y].values[0], w = u || r.subGrouping.active;
      r.subGrouping.active = w || S, o[r.id].subGrouping.active = r.subGrouping.active;
    }
    return o[r.id].active = r.active, r;
  });
}, pe = ({ orderedValues: e, values: s, subGrouping: o }) => (e != null && e.length ? e.filter((t) => s.includes(t)) : s).map((t) => {
  if (!o)
    return [[t], []];
  const { orderedValues: p, values: f } = o.valuesLookup[t], c = (p == null ? void 0 : p.filter((i) => f.includes(i))) || f;
  return [
    [t],
    c.map((i) => [i])
  ];
}), de = 60, me = 100, fe = (e, s, o) => Object.entries(e.current).map(([a, r]) => {
  var Q;
  if (!r)
    return !1;
  const t = o.find((_) => _.columnName === a), { filterStyle: p, label: f } = t || {};
  if (!p || p !== T.tabSimple)
    return !1;
  const c = (Q = r.className.split(" ").find((_) => _.includes(p))) == null ? void 0 : Q.split("single-filters--")[1];
  if (!(c && c === p))
    return !1;
  const i = s[a], { height: u, width: y } = r.getBoundingClientRect(), w = u > (f ? me : de);
  if (!i)
    return [a, { highestWrappedWidth: w ? y : 0, isDropdown: w }];
  const { highestWrappedWidth: B, isDropdown: P } = i, k = y <= B, q = y > B, g = Math.max(B, y);
  if ((k || w) && !P)
    return [a, { highestWrappedWidth: g, isDropdown: !0 }];
  if (P && q)
    return [a, { highestWrappedWidth: B, isDropdown: !1 }];
}).filter(Boolean), ye = (e, s, o, a) => {
  var p, f, c;
  const r = E.cloneDeep(e), t = r[s];
  if (a === "Apply Button")
    t.queuedActive = o;
  else {
    t.filterStyle !== "nested-dropdown" ? t.active = o : (t.active = o[0], t.subGrouping.active = o[1]);
    const n = G();
    t.setByQueryParameter && n[t.setByQueryParameter] !== t.active && (n[t.setByQueryParameter] = t.active, L(n)), (p = t == null ? void 0 : t.subGrouping) != null && p.setByQueryParameter && n[(f = t == null ? void 0 : t.subGrouping) == null ? void 0 : f.setByQueryParameter] !== (t == null ? void 0 : t.subGrouping.active) && (n[(c = t == null ? void 0 : t.subGrouping) == null ? void 0 : c.setByQueryParameter] = t.subGrouping.active, L(n));
  }
  return r;
}, ve = (e, s) => {
  const o = E.cloneDeep(e.runtime) || {};
  o.series = [], o.seriesLabels = {}, o.seriesLabelsAll = [];
  const { filters: a, columns: r, dynamicSeriesType: t, dynamicSeriesLineType: p, xAxis: f } = e;
  return s != null && s.length && Object.keys(s[0]).forEach((n) => {
    const i = f.dataKey !== n, u = !a || !(a != null && a.find((S) => S.columnName === n)), y = !r || Object.keys(r).indexOf(n) === -1;
    i && u && y && o.series.push({
      dataKey: n,
      type: t,
      lineType: p,
      tooltip: !0
    });
  }), o.seriesKeys = o.series ? o.series.map((c) => (o.seriesLabels[c.dataKey] = c.name || c.label || c.dataKey, o.seriesLabelsAll.push(c.name || c.dataKey), c.dataKey)) : [], o;
}, V = (e, s) => {
  if (!s)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return s;
  const o = [];
  return s == null || s.forEach((a) => {
    let r = !0;
    e.filter((t) => t.type !== "url").forEach((t) => {
      if (t.active === void 0)
        return;
      const p = a[t.columnName];
      if (Array.isArray(t.active) ? t.active.includes(p) || (r = !1) : p != t.active && (r = !1), t.filterStyle === "nested-dropdown" && t.subGrouping && r === !0) {
        const f = t.subGrouping.active, c = a[t.subGrouping.columnName];
        if (f === void 0)
          return;
        c != f && (r = !1);
      }
    }), r && o.push(a);
  }), o;
}, be = (e) => {
  e.filterStyle === T.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, M = ({ filter: e, index: s, changeFilterActive: o, theme: a }) => {
  const [r, t] = A.useState(null), p = A.useId();
  A.useEffect(() => {
    if (r) {
      const n = document.getElementById(r.id);
      n && n.focus();
    }
  }, [r]);
  const f = (n) => {
    const i = e.active === n;
    let u = [];
    switch (e.filterStyle) {
      case "tab bar":
        u = ["button__tab-bar", i && "button__tab-bar--active"];
        break;
      case "pill":
        u = ["pill", i && "pill--active", a && a];
        break;
      default:
        const y = e.filterStyle === "tab-simple" && "tab--simple";
        u = ["tab", i && "tab--active", a && a, y];
        break;
    }
    return u.filter(Boolean).join(" ");
  }, c = e.values.map((n, i) => /* @__PURE__ */ h(
    "button",
    {
      id: `${n}-${s}-${i}-${p}`,
      className: f(n),
      onClick: (u) => {
        o(s, n), t(u.target);
      },
      onKeyDown: (u) => {
        u.keyCode === 13 && (o(s, n), t(u.target));
      },
      children: n
    }
  ));
  switch (e.filterStyle) {
    case "tab bar":
      return /* @__PURE__ */ h("section", { className: "single-filters__tab-bar", children: c });
    case "tab-simple":
      return /* @__PURE__ */ h("div", { className: "tab-simple-container d-flex w-100", children: c });
    case "pill":
      return /* @__PURE__ */ h(j, { children: c.map((n, i) => /* @__PURE__ */ h("div", { className: "pill__wrapper", children: n }, `pill-${i}`)) });
    default:
      return /* @__PURE__ */ h(j, { children: c });
  }
}, T = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabSimple: "tab-simple",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, Te = Object.values(T), C = {
  apply: "Apply",
  resetText: "Clear Filters"
}, Qe = ({
  config: e,
  filteredData: s,
  dimensions: o,
  standaloneMap: a,
  setConfig: r,
  setFilteredData: t,
  excludedData: p,
  getUniqueValues: f
}) => {
  var $;
  const { filters: c, general: n, theme: i, filterBehavior: u } = e, [y, S] = A.useState(!1), [w, B] = A.useState({}), P = A.useRef({});
  A.useEffect(() => {
    const l = fe(P, w, c);
    if (l.length) {
      const d = l.filter(Boolean);
      B({ ...w, ...Object.fromEntries(d) });
    }
  }, [c, o == null ? void 0 : o[0]]);
  const k = A.useMemo(() => s ? c.map((l) => l.active) : [], []), q = A.useMemo(() => {
    const l = c.map((d) => d.active);
    return k.every((d) => l.includes(d));
  }, [c]), g = (l, d) => {
    let v = a ? [...s] : [...e.filters];
    if (v = ye(v, l, d, e.filterBehavior), e.filterBehavior === "Apply Button" && S(!0), !e.dynamicSeries) {
      const m = I(v, p);
      r({
        ...e,
        filters: m
      });
    }
    if (e.filterBehavior === "Filter Change")
      if (a)
        t(v);
      else {
        const m = V(v, p);
        if (t(m), e.dynamicSeries) {
          const b = ve(e, m);
          r({
            ...e,
            filters: v,
            runtime: b
          });
        }
      }
  }, Q = (l) => {
    let d = !1;
    const v = G();
    l.forEach((m) => {
      m.queuedActive && (be(m), m.setByQueryParameter && v[m.setByQueryParameter] !== m.active && (v[m.setByQueryParameter] = m.active, d = !0));
    }), d && L(v), r({ ...e, filters: l }), a ? t(l, p) : t(V(l, p)), S(!1);
  }, _ = (l) => {
    let d = [...e.filters];
    l.preventDefault();
    let v = !1;
    const m = G();
    d.forEach((b, D) => {
      (!b.values || b.values.length === 0) && (b.values = f(e.data, b.columnName)), d[D].active = K(b).values[0], b.setByQueryParameter && m[b.setByQueryParameter] !== b.active && (m[b.setByQueryParameter] = b.active, v = !0);
    }), v && L(m), r({ ...e, filters: d }), a ? t(d, p) : t(V(d, p));
  }, W = A.useMemo(() => {
    const [l] = o || [], d = Number(l) < 768, v = c == null ? void 0 : c.some((m) => m.filterStyle === T.tabSimple);
    return d && (c == null ? void 0 : c.length) && !v;
  }, [o == null ? void 0 : o[0]]), Y = A.useMemo(() => {
    let l = a ? s : c;
    return l ? (l.fromHash && delete l.fromHash, I(l, e.data)) : [];
  }, [c, s]);
  if ((($ = e == null ? void 0 : e.filters) == null ? void 0 : $.length) === 0)
    return;
  const Z = () => {
    const { visualizationType: l, legend: d } = e || {}, v = "filters-section", m = a ? n.headerColor : l === "Spark Line" ? null : i, b = d && !d.hide && d.position === "top" ? "mb-0" : null;
    return [v, m, b, "w-100"].filter(Boolean);
  }, J = (l) => {
    var d;
    return l.filterStyle !== "nested-dropdown" ? [] : l.queuedActive || [l.active, (d = l.subGrouping) == null ? void 0 : d.active];
  };
  return /* @__PURE__ */ O("section", { className: Z().join(" "), children: [
    e.filterIntro && /* @__PURE__ */ h("p", { className: "filters-section__intro-text mb-3", children: e.filterIntro }),
    /* @__PURE__ */ h("div", { className: "d-flex flex-wrap w-100 filters-section__wrapper align-items-end", children: /* @__PURE__ */ O(j, { children: [
      Y.map((l, d) => {
        if (l.showDropdown === !1)
          return;
        const { label: v, filterStyle: m, columnName: b } = l;
        K(l);
        const D = [
          "single-filters",
          "form-group",
          W ? "single-filters--dropdown" : `single-filters--${m}`
        ], z = ["nested-dropdown", "multi-select", T.tabSimple].includes(m), { isDropdown: F } = w[b] || {}, R = (m === "dropdown" || W) && !z || F, [ee, te] = J(l), se = l.filterStyle === "tab-simple" && !R;
        return /* @__PURE__ */ O(
          "div",
          {
            className: D.join(" "),
            ref: (N) => P.current[b] = N,
            children: [
              v && /* @__PURE__ */ h(
                "label",
                {
                  className: `font-weight-bold mb-${se ? "0" : "2"}`,
                  htmlFor: `filter-${d}`,
                  children: v
                }
              ),
              R && /* @__PURE__ */ h(
                ne,
                {
                  filter: l,
                  index: d,
                  label: v,
                  changeFilterActive: g
                }
              ),
              ["tab", "tab bar", "pill"].includes(m) && !W && /* @__PURE__ */ h(
                M,
                {
                  filter: l,
                  index: d,
                  changeFilterActive: g,
                  theme: i
                }
              ),
              m === "tab-simple" && !R && /* @__PURE__ */ h(
                M,
                {
                  filter: l,
                  index: d,
                  changeFilterActive: g,
                  theme: i
                }
              ),
              m === "multi-select" && /* @__PURE__ */ h(
                ae,
                {
                  options: l.values.map((N) => ({ value: N, label: N })),
                  fieldName: d,
                  updateField: (N, he, re, oe) => g(re, oe),
                  selected: l.active,
                  limit: l.selectLimit || 5
                }
              ),
              m === "nested-dropdown" && /* @__PURE__ */ h(
                ce,
                {
                  activeGroup: ee,
                  activeSubGroup: te,
                  filterIndex: d,
                  options: pe(l),
                  listLabel: v,
                  handleSelectedItems: (N) => g(d, N)
                }
              )
            ]
          },
          d
        );
      }),
      u === "Apply Button" ? /* @__PURE__ */ O("div", { className: "filters-section__buttons", children: [
        /* @__PURE__ */ h(
          H,
          {
            onClick: (l) => {
              Q(c);
            },
            disabled: !y,
            className: [n != null && n.headerColor ? n.headerColor : i, "apply", "me-2"].join(" "),
            children: C.apply
          }
        ),
        /* @__PURE__ */ h(H, { secondary: !0, disabled: q, onClick: _, children: C.resetText })
      ] }) : /* @__PURE__ */ h(j, {})
    ] }) })
  ] });
};
export {
  Qe as F,
  I as a,
  G as b,
  L as c,
  Pe as d,
  be as e,
  V as f,
  U as g,
  K as h,
  Te as i,
  Ee as r,
  _e as u
};
