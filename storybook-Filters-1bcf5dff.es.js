import { j as y, F as _, a as T } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as S } from "./storybook-index-f2fed736.es.js";
import { B as R } from "./storybook-Button-f953e457.es.js";
import { M as te } from "./storybook-MultiSelect-2a170cbd.es.js";
import { _ as j } from "./storybook-lodash-a4231e1c.es.js";
import { F as U } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as se } from "./storybook-NestedDropdown-92b50717.es.js";
import { a as re } from "./storybook-Dropdown-1c93166f.es.js";
const $ = (e) => {
  var c;
  const t = j.cloneDeep(e.values);
  if (e.order === "cust" && e.filterStyle !== "nested-dropdown")
    return e.values = (c = e.orderedValues) != null && c.length ? e.orderedValues : t, e;
  if (e.order === "column")
    return e;
  const a = (r, s) => {
    const o = e.order !== "desc";
    return String(o ? r : s).localeCompare(String(o ? s : r), "en", { numeric: !0 });
  };
  return e.values = t == null ? void 0 : t.sort(a), e.orderedValues = t == null ? void 0 : t.sort(a), e;
};
function M(e) {
  const t = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const a = t.get(e.setByQueryParameter);
    if (a && e.values) {
      for (let c = 0; c < e.values.length; c++)
        if (e.values[c] && e.values[c].toLowerCase() === a.toLowerCase())
          return e.values[c];
    }
  }
}
function D() {
  const e = {};
  for (const [t, a] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[t] ? Array.isArray(e[t]) ? e[t].push(a) : e[t] = [e[t], a] : e[t] = a;
  return e;
}
function Ne(e) {
  return D()[e];
}
function G(e) {
  const t = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((a) => `${a}=${encodeURIComponent(e[a])}`).join("&")}`;
  window.history.pushState({ path: t }, "", t);
}
function Be(e, t) {
  if (!e)
    return;
  const a = D();
  a[e] = t, G(a);
}
function Pe(e) {
  const t = D();
  delete t[e], G(t);
}
const ae = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([t, { orderedValues: a }]) => a ? [t, { orderedValues: a, values: [] }] : [t, { values: [] }])
), oe = (e, t) => {
  var d, u;
  const a = e.columnName, c = e.orderColumn, r = [], s = [], o = (d = e.subGrouping) == null ? void 0 : d.columnName, f = ae((u = e.subGrouping) == null ? void 0 : u.valuesLookup);
  if (Array.isArray(t))
    t.forEach((i) => {
      const n = i[a];
      if (n !== void 0 && !r.includes(n) && (c && s.push([n, i[c]]), r.push(n)), o) {
        const m = i[o];
        if (n === void 0)
          return;
        f[n] || (f[n] = { values: [] }), f[n].values.includes(m) || f[n].values.push(m);
      }
    });
  else {
    if (!t)
      return r;
    Object.values(t).forEach((i) => {
      i.forEach((n) => {
        const m = n[a];
        m !== void 0 && !r.includes(m) && (c && s.push([m, n[c]]), r.push(m));
      });
    });
  }
  if (c)
    e.values = s.sort((i, n) => typeof i[1] == "number" && typeof n[1] == "number" ? i[1] - n[1] : String(i[1]).localeCompare(String(n[1]))).map(([i]) => i);
  else if (e.order && e.order !== "cust") {
    const i = (n, m) => {
      const g = e.order !== "desc";
      return String(g ? n : m).localeCompare(String(g ? m : n), "en", { numeric: !0 });
    };
    e.values = r.sort(i);
  } else
    e.values = r;
  o && (e.subGrouping.valuesLookup = f);
}, ne = (e, t, a) => {
  let c = Array.isArray(t) ? t : Object.values(t).flat(1);
  return e.parents.forEach((r) => {
    const s = a[r] || {}, [o, f] = Array.isArray(s.queuedActive) ? s.queuedActive : [s.queuedActive], d = o || (s == null ? void 0 : s.active);
    if ((s == null ? void 0 : s.filterStyle) === U.nestedDropdown) {
      const { subGrouping: u } = s, i = f || (u == null ? void 0 : u.active);
      i && (c = c.filter((n) => {
        const m = d == n[s.columnName], g = i == n[u.columnName];
        return m && g;
      }));
    } else
      d && (c = c.filter((u) => Array.isArray(d) ? d.includes(u[s.columnName]) : d == u[s.columnName]));
  }), c;
}, H = (e, t) => e.map((a) => String(a)).includes(String(t)), ce = (e, t) => {
  const a = j.keyBy(e, "id");
  return e == null ? void 0 : e.map((c) => {
    var f, d;
    const r = j.cloneDeep(c);
    let s = t;
    const o = !Array.isArray(t);
    if ((f = c.parents) != null && f.length && !o && (s = ne(c, t, a)), oe(r, s), ((d = r.values) == null ? void 0 : d.length) > 0) {
      const u = M(r);
      if (u)
        r.active = u;
      else if (r.filterStyle === U.multiSelect) {
        const i = r.values, n = Array.isArray(r.active) ? r.active : [r.active];
        r.active = n.filter((m) => H(i, m));
      } else {
        const i = r.defaultValue || r.values[0], n = Array.isArray(r.active) ? r.active[0] : r.active;
        r.active = H(r.values, n) ? n : i;
      }
    }
    if (r.subGrouping) {
      const u = r.active, i = {
        ...r.subGrouping,
        values: r.subGrouping.valuesLookup[u].values
      }, n = M(i), m = u || r.values[0], g = r.subGrouping.valuesLookup[m].values[0], w = n || r.subGrouping.active;
      r.subGrouping.active = w || g, a[r.id].subGrouping.active = r.subGrouping.active;
    }
    return a[r.id].active = r.active, r;
  });
}, ue = ({ orderedValues: e, values: t, subGrouping: a }) => (e != null && e.length ? e.filter((s) => t.includes(s)) : t).map((s) => {
  if (!a)
    return [[s], []];
  const { orderedValues: o, values: f } = a.valuesLookup[s], d = (o == null ? void 0 : o.filter((i) => f.includes(i))) || f;
  return [
    [s],
    d.map((i) => [i])
  ];
}), ie = 60, le = 100, pe = (e, t, a) => Object.entries(e.current).map(([c, r]) => {
  var P;
  if (!r)
    return !1;
  const s = a.find((L) => L.columnName === c), { filterStyle: o, label: f } = s || {};
  if (!o || o !== Q.tabSimple)
    return !1;
  const d = (P = r.className.split(" ").find((L) => L.includes(o))) == null ? void 0 : P.split("single-filters--")[1];
  if (!(d && d === o))
    return !1;
  const i = t[c], { height: n, width: m } = r.getBoundingClientRect(), w = n > (f ? le : ie);
  if (!i)
    return [c, { highestWrappedWidth: w ? m : 0, isDropdown: w }];
  const { highestWrappedWidth: B, isDropdown: E } = i, A = m <= B, k = m > B, q = Math.max(B, m);
  if ((A || w) && !E)
    return [c, { highestWrappedWidth: q, isDropdown: !0 }];
  if (E && k)
    return [c, { highestWrappedWidth: B, isDropdown: !1 }];
}).filter(Boolean), de = (e, t, a, c) => {
  var o, f, d;
  const r = j.cloneDeep(e), s = r[t];
  if (c === "Apply Button")
    s.queuedActive = a;
  else {
    s.filterStyle !== "nested-dropdown" ? s.active = a : (s.active = a[0], s.subGrouping.active = a[1]);
    const u = D();
    s.setByQueryParameter && u[s.setByQueryParameter] !== s.active && (u[s.setByQueryParameter] = s.active, G(u)), (o = s == null ? void 0 : s.subGrouping) != null && o.setByQueryParameter && u[(f = s == null ? void 0 : s.subGrouping) == null ? void 0 : f.setByQueryParameter] !== (s == null ? void 0 : s.subGrouping.active) && (u[(d = s == null ? void 0 : s.subGrouping) == null ? void 0 : d.setByQueryParameter] = s.subGrouping.active, G(u));
  }
  return r;
}, me = (e) => {
  e.filterStyle === Q.nestedDropdown ? (e.active = e.queuedActive[0], e.subGrouping.active = e.queuedActive[1]) : e.active = e.queuedActive, delete e.queuedActive;
}, V = ({ filter: e, index: t, changeFilterActive: a, theme: c }) => {
  const [r, s] = S.useState(null), o = S.useId();
  S.useEffect(() => {
    if (r) {
      const u = document.getElementById(r.id);
      u && u.focus();
    }
  }, [r]);
  const f = (u) => {
    const i = e.active === u;
    let n = [];
    switch (e.filterStyle) {
      case "tab bar":
        n = ["button__tab-bar", i && "button__tab-bar--active"];
        break;
      case "pill":
        n = ["pill", i && "pill--active", c && c];
        break;
      default:
        const m = e.filterStyle === "tab-simple" && "tab--simple";
        n = ["tab", i && "tab--active", c && c, m];
        break;
    }
    return n.filter(Boolean).join(" ");
  }, d = e.values.map((u, i) => /* @__PURE__ */ y(
    "button",
    {
      id: `${u}-${t}-${i}-${o}`,
      className: f(u),
      onClick: (n) => {
        a(t, u), s(n.target);
      },
      onKeyDown: (n) => {
        n.keyCode === 13 && (a(t, u), s(n.target));
      },
      children: u
    }
  ));
  switch (e.filterStyle) {
    case "tab bar":
      return /* @__PURE__ */ y("section", { className: "single-filters__tab-bar", children: d });
    case "tab-simple":
      return /* @__PURE__ */ y("div", { className: "tab-simple-container d-flex w-100", children: d });
    case "pill":
      return /* @__PURE__ */ y(_, { children: d.map((u, i) => /* @__PURE__ */ y("div", { className: "pill__wrapper", children: u }, `pill-${i}`)) });
    default:
      return /* @__PURE__ */ y(_, { children: d });
  }
}, Q = {
  dropdown: "dropdown",
  nestedDropdown: "nested-dropdown",
  pill: "pill",
  tab: "tab",
  tabSimple: "tab-simple",
  tabBar: "tab bar",
  multiSelect: "multi-select"
}, De = Object.values(Q), x = {
  apply: "Apply",
  resetText: "Clear Filters"
}, Ge = ({
  config: e,
  dimensions: t,
  standaloneMap: a,
  setFilters: c,
  excludedData: r,
  getUniqueValues: s
}) => {
  var O;
  const { filters: o, general: f, theme: d, filterBehavior: u } = e, [i, n] = S.useState(!1), [m, g] = S.useState({}), w = S.useRef({});
  S.useEffect(() => {
    const l = pe(w, m, o);
    if (l.length) {
      const p = l.filter(Boolean);
      g({ ...m, ...Object.fromEntries(p) });
    }
  }, [o, t == null ? void 0 : t[0]]);
  const B = S.useMemo(() => o.map((l) => l.active), []), E = S.useMemo(() => {
    const l = o.map((p) => p.active);
    return B.every((p) => l.includes(p));
  }, [o]), A = (l, p) => {
    u === "Apply Button" && n(!0);
    const b = de([...o], l, p, u);
    c(b);
  }, k = (l) => {
    let p = !1;
    const b = D();
    l.forEach((v) => {
      v.queuedActive && (me(v), v.setByQueryParameter && b[v.setByQueryParameter] !== v.active && (b[v.setByQueryParameter] = v.active, p = !0));
    }), p && G(b), c(l), n(!1);
  }, q = (l) => {
    let p = [...o];
    l.preventDefault();
    let b = !1;
    const v = D();
    p.forEach((h, C) => {
      (!h.values || h.values.length === 0) && (h.values = s(e.data, h.columnName)), p[C].active = $(h).values[0], h.setByQueryParameter && v[h.setByQueryParameter] !== h.active && (v[h.setByQueryParameter] = h.active, b = !0);
    }), b && G(v), c(p);
  }, P = S.useMemo(() => {
    if (!t)
      return !1;
    const [l] = t, p = Number(l) < 768, b = o == null ? void 0 : o.some((v) => v.filterStyle === Q.tabSimple);
    return p && (o == null ? void 0 : o.length) && !b;
  }, [t == null ? void 0 : t[0]]), L = S.useMemo(() => o ? (o.fromHash && delete o.fromHash, ce(o, e.data)) : [], [o]);
  if (((O = e == null ? void 0 : e.filters) == null ? void 0 : O.length) === 0)
    return /* @__PURE__ */ y(_, {});
  const I = () => {
    const { visualizationType: l, legend: p } = e || {}, b = "filters-section", v = a ? f.headerColor : l === "Spark Line" ? null : d, h = p && !p.hide && p.position === "top" ? "mb-0" : null;
    return [b, v, h, "w-100"].filter(Boolean);
  }, Y = (l) => {
    var p;
    return l.filterStyle !== "nested-dropdown" ? [] : l.queuedActive || [l.active, (p = l.subGrouping) == null ? void 0 : p.active];
  };
  return /* @__PURE__ */ T("section", { className: I().join(" "), children: [
    e.filterIntro && /* @__PURE__ */ y("p", { className: "filters-section__intro-text mb-3", children: e.filterIntro }),
    /* @__PURE__ */ y("div", { className: "d-flex flex-wrap w-100 filters-section__wrapper align-items-end", children: /* @__PURE__ */ T(_, { children: [
      L.map((l, p) => {
        if (l.showDropdown === !1)
          return;
        const { label: b, filterStyle: v, columnName: h } = l, [C, K] = Y(l);
        $(l);
        const X = [
          "single-filters",
          "form-group",
          P ? "single-filters--dropdown" : `single-filters--${v}`
        ], Z = ["nested-dropdown", "multi-select", Q.tabSimple].includes(v), { isDropdown: J } = m[h] || {}, W = (v === "dropdown" || P) && !Z || J, z = l.filterStyle === "tab-simple" && !W;
        return /* @__PURE__ */ T(
          "div",
          {
            className: X.join(" "),
            ref: (N) => w.current[h] = N,
            children: [
              b && /* @__PURE__ */ y(
                "label",
                {
                  className: `font-weight-bold mb-${z ? "0" : "2"}`,
                  htmlFor: `filter-${p}`,
                  children: b
                }
              ),
              W && /* @__PURE__ */ y(
                re,
                {
                  filter: l,
                  index: p,
                  label: b,
                  changeFilterActive: A
                }
              ),
              ["tab", "tab bar", "pill"].includes(v) && !P && /* @__PURE__ */ y(
                V,
                {
                  filter: l,
                  index: p,
                  changeFilterActive: A,
                  theme: d
                }
              ),
              v === "tab-simple" && !W && /* @__PURE__ */ y(
                V,
                {
                  filter: l,
                  index: p,
                  changeFilterActive: A,
                  theme: d
                }
              ),
              v === "multi-select" && /* @__PURE__ */ y(
                te,
                {
                  options: l.values.map((N) => ({ value: N, label: N })),
                  fieldName: p,
                  updateField: (N, fe, F, ee) => A(F, ee),
                  selected: l.active,
                  limit: l.selectLimit || 5
                }
              ),
              v === "nested-dropdown" && /* @__PURE__ */ y(
                se,
                {
                  activeGroup: C,
                  activeSubGroup: K,
                  filterIndex: p,
                  options: ue(l),
                  listLabel: b,
                  handleSelectedItems: (N) => A(p, N)
                }
              )
            ]
          },
          p
        );
      }),
      u === "Apply Button" ? /* @__PURE__ */ T("div", { className: "filters-section__buttons", children: [
        /* @__PURE__ */ y(
          R,
          {
            onClick: (l) => {
              k(o);
            },
            disabled: !i,
            className: [f != null && f.headerColor ? f.headerColor : d, "apply", "me-2"].join(" "),
            children: x.apply
          }
        ),
        /* @__PURE__ */ y(R, { secondary: !0, disabled: E, onClick: q, children: x.resetText })
      ] }) : /* @__PURE__ */ y(_, {})
    ] }) })
  ] });
};
export {
  Ge as F,
  ce as a,
  D as b,
  G as c,
  Ne as d,
  me as e,
  De as f,
  M as g,
  $ as h,
  Pe as r,
  Be as u
};
