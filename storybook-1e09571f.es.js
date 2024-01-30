import "./storybook-196f19d9.es.js";
import { r as w, R as I } from "./storybook-e61d95ab.es.js";
import { B as bi } from "./storybook-8d78bf52.es.js";
import { P as Z } from "./storybook-b8c9afe4.es.js";
import { r as pn, R as yi, m as Ei } from "./storybook-ac19c974.es.js";
import { c as Di, b as Un, a as Si, d as Ci } from "./storybook-62da31fb.es.js";
import { _ as Be } from "./storybook-70f3d2a3.es.js";
import { g as zr } from "./storybook-c5d32002.es.js";
import { i as Hn } from "./storybook-9f3340e2.es.js";
import "./storybook-4ed993c7.es.js";
function fn(e) {
  delete e.qualitative9;
  let t = {};
  for (const [n, r] of Object.entries(e)) {
    const o = String(n);
    if (o.endsWith("reverse"))
      t = { ...e };
    else {
      let i = o.concat("reverse");
      t[i] = [...r].reverse();
    }
  }
  return { ...t, ...e };
}
const wi = {
  yelloworangered: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  yelloworangebrown: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  pinkpurple: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  bluegreen: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  orangered: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  red: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  greenblue: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#267BA6", "#0868ac", "#084081"],
  yellowpurple: ["#FFF0B0", "#F5CC76", "#EDAE4B", "#E3683C", "#BF2A48", "#6D2059", "#8F0C4B", "#310958", "#0E0943"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  qualitative9: ["#497d0c", "#84BC49", "#88c3ea", "#fcad90", "#f26b4f", "#c31b1f", "#c31b1f"],
  "sequential-blue-2(MPX)": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "sequential-orange(MPX)": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"]
}, xi = {
  "qualitative-bold": ["#377eb8", "#ff7f00", "#4daf4a", "#984ea3", "#e41a1c", "#ffff33", "#a65628", "#f781bf", "#3399CC"],
  "qualitative-soft": ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#ACA9EB"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  "sequential-blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "sequential-blue-2-(MPX)": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "sequential-orange-(MPX)": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "sequential-green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, Ni = {
  "monochrome-1": ["#A6CEE3", "#15017A"],
  "monochrome-2": ["#C2C0FC", "#15017A"],
  "monochrome-3": ["#cab2d6", "#6a3d9a"],
  "monochrome-4": ["#C2C0FC", "#6a3d9a"],
  "monochrome-5": ["#fedab8", "#bf5b17"],
  "cool-1": ["#b2df8a", "#1f78b4"],
  "cool-2": ["#a6cee3", "#72D66B"],
  "cool-3": ["#C2C0FC", "#386cb0"],
  "cool-4": ["#72D66B", "#6a3d9a"],
  "cool-5": ["#a6cee3", "#6a3d9a"],
  "warm-1": ["#e31a1c", "#fedab8"],
  "complementary-1": ["#1f78b4", "#e6ab02"],
  "complementary-2": ["#1f78b4", "#ff7f00"],
  "complementary-3": ["#6a3d9a", "#ff7f00"],
  "complementary-4": ["#6a3d9a", "#e6ab02"],
  "complementary-5": ["#df168c", "#1EB386"]
}, Oi = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, fp = Oi, gp = fn(xi), mp = fn(wi), hp = fn(Ni), Ii = (e) => {
  const [t, n] = w.useState(!1), { config: r, setConfig: o, filteredData: i, setFilteredData: a, excludedData: s, filterData: l } = e, { type: c, filterBehavior: p, filters: u } = r, d = ["dropdown", "pill", "tab", "tab bar"], f = [
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
  ], h = (v, C, N, _) => {
    const x = [..._.values], [O] = x.splice(v, 1);
    x.splice(C, 0, O);
    const B = r.type === "chart" ? [...r.filters] : [...i], T = { ...B[N] };
    T.values = x, T.orderedValues = x, T.active = x[0], T.order = "cust", B[N] = T, r.type === "map" && a(B), o({ ...r, filters: B });
  }, b = (v) => {
  }, m = (v, C) => {
    let N = r.type === "map" ? [...i] : [...r.filters];
    N[v].active = C, o({ ...r }), r.filterBehavior === "Apply Button" && n(!0), r.filterBehavior !== "Apply Button" && o({
      ...r,
      filters: N
    }), r.type === "map" && r.filterBehavior === "Filter Change" && a(N), r.type === "chart" && r.filterBehavior === "Filter Change" && a(l(N, s));
  }, S = (v) => {
    o({ ...r, filters: v }), c === "map" && a(v, s), c === "chart" && a(l(v, s)), n(!1);
  }, D = (v) => {
    let C = [...r.filters];
    v.preventDefault(), C.map((N) => (N = E(N), N.active = N.values[0], N)), c === "map" ? a(C, s) : a(l(C, s)), o({ ...r, filters: C });
  }, y = {
    buttonText: "Apply Filters",
    resetText: "Reset All",
    introText: "Make a selection from the filters to change the visualization information.",
    applyText: "Select the apply button to update the visualization information."
  }, E = (v) => {
    const { order: C } = v, N = (x, O) => x.toString().localeCompare(O.toString(), "en", { numeric: !0 }), _ = (x, O) => O.toString().localeCompare(x.toString(), "en", { numeric: !0 });
    return (!C || C === "") && (v.order = "asc"), C === "desc" && (v.values = v.values.sort(_)), C === "asc" && (v.values = v.values.sort(N)), v;
  };
  return {
    handleApplyButton: S,
    changeFilterActive: m,
    announceChange: b,
    showApplyButton: t,
    handleReset: D,
    filterConstants: y,
    filterStyleOptions: d,
    filterOrderOptions: f,
    handleFilterOrder: h,
    handleSorting: E
  };
}, Ai = (e) => {
  var N;
  const { config: t, filteredData: n, dimensions: r } = e, { filters: o, type: i, general: a, theme: s, filterBehavior: l } = t, [c, p] = w.useState(!1), [u, d] = w.useState(""), f = w.useId(), {
    handleApplyButton: h,
    changeFilterActive: b,
    announceChange: m,
    showApplyButton: S,
    handleReset: D,
    filterConstants: y,
    handleSorting: E
  } = Ii(e);
  w.useEffect(() => {
    r && (r[0] < 768 && (o == null ? void 0 : o.length) > 0 ? p(!0) : p(!1));
  }, [r]), w.useEffect(() => {
    if (u) {
      let _ = document.getElementById(u.id);
      _ && _.focus();
    }
  }, [b, u]);
  const v = (_) => _.children, C = ["filters-section", i === "map" ? a.headerColor : s];
  if (v.Section = (_) => /* @__PURE__ */ I.createElement("section", { className: C.join(" ") }, /* @__PURE__ */ I.createElement("p", { className: "filters-section__intro-text" }, y.introText, " ", t.filterBehavior === "Apply Button" && y.applyText), /* @__PURE__ */ I.createElement("div", { className: "filters-section__wrapper" }, _.children)), v.ApplyBehavior = (_) => {
    if (l !== "Apply Button")
      return;
    const x = [a != null && a.headerColor ? a.headerColor : s, "apply"];
    return /* @__PURE__ */ I.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ I.createElement(bi, { onClick: () => h(o), disabled: !S, className: x.join(" ") }, y.buttonText), /* @__PURE__ */ I.createElement("a", { href: "#!", role: "button", onClick: D }, y.resetText));
  }, v.TabBar = (_) => {
    const { filter: x, index: O } = _;
    return /* @__PURE__ */ I.createElement("section", { className: "single-filters__tab-bar" }, x.values.map((B, T) => {
      const $ = ["button__tab-bar", x.active === B ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ I.createElement(
        "button",
        {
          id: `${B}-${O}-${T}-${f}`,
          className: $.join(" "),
          key: B,
          onClick: (W) => {
            b(O, B), d(W.target);
          },
          onKeyDown: (W) => {
            W.keyCode === 13 && (b(O, B), d(W.target));
          }
        },
        B
      );
    }));
  }, v.Pills = (_) => _.pills, v.Tabs = (_) => _.tabs, v.Dropdown = (_) => {
    const { index: x, label: O, active: B, filters: T } = _;
    return /* @__PURE__ */ I.createElement(
      "select",
      {
        id: `filter-${x}`,
        name: O,
        "aria-label": O,
        className: "filter-select",
        "data-index": "0",
        value: B,
        onChange: ($) => {
          b(x, $.target.value), m(`Filter ${O} value has been changed to ${$.target.value}, please reference the data table to see updated values.`);
        }
      },
      T
    );
  }, v.Style = () => {
    if (o || n) {
      let _ = i === "map" ? n : o;
      return delete _.fromHash, _.map((x, O) => {
        if (x.showDropdown === !1)
          return;
        const B = [], T = [], $ = [], { active: W, queuedActive: q, label: K, filterStyle: X } = x;
        E(x), x.values.forEach((H, ae) => {
          const me = ["pill", W === H ? "pill--active" : null, s && s], he = ["tab", W === H && "tab--active", s && s];
          T.push(
            /* @__PURE__ */ I.createElement("div", { className: "pill__wrapper", key: `pill-${ae}` }, /* @__PURE__ */ I.createElement(
              "button",
              {
                id: `${H}-${O}-${ae}-${f}`,
                className: me.join(" "),
                onKeyDown: (z) => {
                  z.keyCode === 13 && (b(O, H), d(z.target));
                },
                onClick: (z) => {
                  b(O, H), d(z.target);
                },
                name: K
              },
              H
            ))
          ), B.push(
            /* @__PURE__ */ I.createElement("option", { key: ae, value: H }, x.labels && x.labels[H] ? x.labels[H] : H)
          ), $.push(
            /* @__PURE__ */ I.createElement(
              "button",
              {
                id: `${H}-${O}-${ae}-${f}`,
                className: he.join(" "),
                onClick: (z) => {
                  b(O, H), d(z.target);
                },
                onKeyDown: (z) => {
                  z.keyCode === 13 && (b(O, H), d(z.target));
                }
              },
              H
            )
          );
        });
        const re = ["single-filters", c ? "single-filters--dropdown" : `single-filters--${X}`];
        return /* @__PURE__ */ I.createElement("div", { className: re.join(" "), key: O }, /* @__PURE__ */ I.createElement(I.Fragment, null, K && /* @__PURE__ */ I.createElement("label", { htmlFor: `filter-${O}` }, K), X === "tab" && !c && /* @__PURE__ */ I.createElement(v.Tabs, { tabs: $ }), X === "pill" && !c && /* @__PURE__ */ I.createElement(v.Pills, { pills: T }), X === "tab bar" && !c && /* @__PURE__ */ I.createElement(v.TabBar, { filter: x, index: O }), (X === "dropdown" || c) && /* @__PURE__ */ I.createElement(v.Dropdown, { filter: x, index: O, label: K, active: q || W, filters: B })));
      });
    }
  }, ((N = t == null ? void 0 : t.filters) == null ? void 0 : N.length) !== 0)
    return /* @__PURE__ */ I.createElement(v, null, /* @__PURE__ */ I.createElement(v.Section, null, /* @__PURE__ */ I.createElement(v.Style, null), /* @__PURE__ */ I.createElement(v.ApplyBehavior, null)));
};
Ai.propTypes = {
  // runtimeFilters in place
  filteredData: Z.array,
  // function for updating the runtime filters
  setFilteredData: Z.func,
  // the full apps config
  config: Z.object,
  // updating function for setting fitlerBehavior
  setConfig: Z.func,
  // exclusions
  excludedData: Z.array,
  // function for filtering the data
  filterData: Z.func,
  dimensions: Z.array
};
var jr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, qn = I.createContext && I.createContext(jr), be = globalThis && globalThis.__assign || function() {
  return be = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, be.apply(this, arguments);
}, _i = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Yr(e) {
  return e && e.map(function(t, n) {
    return I.createElement(t.tag, be({
      key: n
    }, t.attr), Yr(t.child));
  });
}
function vp(e) {
  return function(t) {
    return I.createElement(Pi, be({
      attr: be({}, e.attr)
    }, t), Yr(e.child));
  };
}
function Pi(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, i = e.title, a = _i(e, ["attr", "size", "title"]), s = o || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), I.createElement("svg", be({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, a, {
      className: l,
      style: be(be({
        color: e.color || n.color
      }, n.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && I.createElement("title", null, i), e.children);
  };
  return qn !== void 0 ? I.createElement(qn.Consumer, null, function(n) {
    return t(n);
  }) : t(jr);
}
var Jt = { exports: {} }, _t = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function Ri() {
  if (zn)
    return _t;
  zn = 1;
  var e = w;
  function t(u, d) {
    return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(u, d) {
    var f = d(), h = r({ inst: { value: f, getSnapshot: d } }), b = h[0].inst, m = h[1];
    return i(function() {
      b.value = f, b.getSnapshot = d, l(b) && m({ inst: b });
    }, [u, f, d]), o(function() {
      return l(b) && m({ inst: b }), u(function() {
        l(b) && m({ inst: b });
      });
    }, [u]), a(f), f;
  }
  function l(u) {
    var d = u.getSnapshot;
    u = u.value;
    try {
      var f = d();
      return !n(u, f);
    } catch {
      return !0;
    }
  }
  function c(u, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return _t.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, _t;
}
var Pt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function Ti() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = w, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var E = arguments.length, v = new Array(E > 1 ? E - 1 : 0), C = 1; C < E; C++)
          v[C - 1] = arguments[C];
        r("error", y, v);
      }
    }
    function r(y, E, v) {
      {
        var C = t.ReactDebugCurrentFrame, N = C.getStackAddendum();
        N !== "" && (E += "%s", v = v.concat([N]));
        var _ = v.map(function(x) {
          return String(x);
        });
        _.unshift("Warning: " + E), Function.prototype.apply.call(console[y], console, _);
      }
    }
    function o(y, E) {
      return y === E && (y !== 0 || 1 / y === 1 / E) || y !== y && E !== E;
    }
    var i = typeof Object.is == "function" ? Object.is : o, a = e.useState, s = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, p = !1, u = !1;
    function d(y, E, v) {
      p || e.startTransition !== void 0 && (p = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var C = E();
      if (!u) {
        var N = E();
        i(C, N) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var _ = a({
        inst: {
          value: C,
          getSnapshot: E
        }
      }), x = _[0].inst, O = _[1];
      return l(function() {
        x.value = C, x.getSnapshot = E, f(x) && O({
          inst: x
        });
      }, [y, C, E]), s(function() {
        f(x) && O({
          inst: x
        });
        var B = function() {
          f(x) && O({
            inst: x
          });
        };
        return y(B);
      }, [y]), c(C), C;
    }
    function f(y) {
      var E = y.getSnapshot, v = y.value;
      try {
        var C = E();
        return !i(v, C);
      } catch {
        return !0;
      }
    }
    function h(y, E, v) {
      return E();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !b, S = m ? h : d, D = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : S;
    Pt.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Jt.exports = Ri() : Jt.exports = Ti();
var gn = Jt.exports, Rt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function Bi() {
  if (Yn)
    return Rt;
  Yn = 1;
  var e = w, t = gn;
  function n(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Rt.useSyncExternalStoreWithSelector = function(c, p, u, d, f) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else
      b = h.current;
    h = s(function() {
      function S(C) {
        if (!D) {
          if (D = !0, y = C, C = d(C), f !== void 0 && b.hasValue) {
            var N = b.value;
            if (f(N, C))
              return E = N;
          }
          return E = C;
        }
        if (N = E, r(y, C))
          return N;
        var _ = d(C);
        return f !== void 0 && f(N, _) ? N : (y = C, E = _);
      }
      var D = !1, y, E, v = u === void 0 ? null : u;
      return [function() {
        return S(p());
      }, v === null ? void 0 : function() {
        return S(v());
      }];
    }, [p, u, d, f]);
    var m = o(c, h[0], h[1]);
    return a(function() {
      b.hasValue = !0, b.value = m;
    }, [m]), l(m), m;
  }, Rt;
}
var Tt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function Mi() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = w, t = gn;
    function n(p, u) {
      return p === u && (p !== 0 || 1 / p === 1 / u) || p !== p && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
    function c(p, u, d, f, h) {
      var b = i(null), m;
      b.current === null ? (m = {
        hasValue: !1,
        value: null
      }, b.current = m) : m = b.current;
      var S = s(function() {
        var v = !1, C, N, _ = function(T) {
          if (!v) {
            v = !0, C = T;
            var $ = f(T);
            if (h !== void 0 && m.hasValue) {
              var W = m.value;
              if (h(W, $))
                return N = W, W;
            }
            return N = $, $;
          }
          var q = C, K = N;
          if (r(q, T))
            return K;
          var X = f(T);
          return h !== void 0 && h(K, X) ? K : (C = T, N = X, X);
        }, x = d === void 0 ? null : d, O = function() {
          return _(u());
        }, B = x === null ? void 0 : function() {
          return _(x());
        };
        return [O, B];
      }, [u, d, f, h]), D = S[0], y = S[1], E = o(p, D, y);
      return a(function() {
        m.hasValue = !0, m.value = E;
      }, [E]), l(E), E;
    }
    Tt.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Tt;
}
process.env.NODE_ENV === "production" ? Bi() : Mi();
function $i(e) {
  e();
}
let Kr = $i;
const Fi = (e) => Kr = e, Li = () => Kr, Xn = Symbol.for("react-redux-context"), Jn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Vi() {
  var e;
  if (!w.createContext)
    return {};
  const t = (e = Jn[Xn]) != null ? e : Jn[Xn] = /* @__PURE__ */ new Map();
  let n = t.get(w.createContext);
  return n || (n = w.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(w.createContext, n)), n;
}
const Xr = /* @__PURE__ */ Vi(), Gi = () => {
  throw new Error("uSES not initialized!");
};
function Jr(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Zt = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function ki() {
  if (Zn)
    return L;
  Zn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var C = v.$$typeof;
      switch (C) {
        case t:
          switch (v = v.type, v) {
            case l:
            case c:
            case r:
            case i:
            case o:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case p:
                case h:
                case f:
                case a:
                  return v;
                default:
                  return C;
              }
          }
        case n:
          return C;
      }
    }
  }
  function E(v) {
    return y(v) === c;
  }
  return L.AsyncMode = l, L.ConcurrentMode = c, L.ContextConsumer = s, L.ContextProvider = a, L.Element = t, L.ForwardRef = p, L.Fragment = r, L.Lazy = h, L.Memo = f, L.Portal = n, L.Profiler = i, L.StrictMode = o, L.Suspense = u, L.isAsyncMode = function(v) {
    return E(v) || y(v) === l;
  }, L.isConcurrentMode = E, L.isContextConsumer = function(v) {
    return y(v) === s;
  }, L.isContextProvider = function(v) {
    return y(v) === a;
  }, L.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, L.isForwardRef = function(v) {
    return y(v) === p;
  }, L.isFragment = function(v) {
    return y(v) === r;
  }, L.isLazy = function(v) {
    return y(v) === h;
  }, L.isMemo = function(v) {
    return y(v) === f;
  }, L.isPortal = function(v) {
    return y(v) === n;
  }, L.isProfiler = function(v) {
    return y(v) === i;
  }, L.isStrictMode = function(v) {
    return y(v) === o;
  }, L.isSuspense = function(v) {
    return y(v) === u;
  }, L.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === c || v === i || v === o || v === u || v === d || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === a || v.$$typeof === s || v.$$typeof === p || v.$$typeof === m || v.$$typeof === S || v.$$typeof === D || v.$$typeof === b);
  }, L.typeOf = y, L;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Wi() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function y(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === c || A === i || A === o || A === u || A === d || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === f || A.$$typeof === a || A.$$typeof === s || A.$$typeof === p || A.$$typeof === m || A.$$typeof === S || A.$$typeof === D || A.$$typeof === b);
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var de = A.$$typeof;
        switch (de) {
          case t:
            var R = A.type;
            switch (R) {
              case l:
              case c:
              case r:
              case i:
              case o:
              case u:
                return R;
              default:
                var Re = R && R.$$typeof;
                switch (Re) {
                  case s:
                  case p:
                  case h:
                  case f:
                  case a:
                    return Re;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var v = l, C = c, N = s, _ = a, x = t, O = p, B = r, T = h, $ = f, W = n, q = i, K = o, X = u, re = !1;
    function H(A) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ae(A) || E(A) === l;
    }
    function ae(A) {
      return E(A) === c;
    }
    function me(A) {
      return E(A) === s;
    }
    function he(A) {
      return E(A) === a;
    }
    function z(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function _e(A) {
      return E(A) === p;
    }
    function Ce(A) {
      return E(A) === r;
    }
    function we(A) {
      return E(A) === h;
    }
    function Pe(A) {
      return E(A) === f;
    }
    function Ge(A) {
      return E(A) === n;
    }
    function ve(A) {
      return E(A) === i;
    }
    function xe(A) {
      return E(A) === o;
    }
    function ut(A) {
      return E(A) === u;
    }
    V.AsyncMode = v, V.ConcurrentMode = C, V.ContextConsumer = N, V.ContextProvider = _, V.Element = x, V.ForwardRef = O, V.Fragment = B, V.Lazy = T, V.Memo = $, V.Portal = W, V.Profiler = q, V.StrictMode = K, V.Suspense = X, V.isAsyncMode = H, V.isConcurrentMode = ae, V.isContextConsumer = me, V.isContextProvider = he, V.isElement = z, V.isForwardRef = _e, V.isFragment = Ce, V.isLazy = we, V.isMemo = Pe, V.isPortal = Ge, V.isProfiler = ve, V.isStrictMode = xe, V.isSuspense = ut, V.isValidElementType = y, V.typeOf = E;
  }()), V;
}
process.env.NODE_ENV === "production" ? Zt.exports = ki() : Zt.exports = Wi();
var Ui = Zt.exports, mn = Ui, Hi = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, qi = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, zi = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Zr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hn = {};
hn[mn.ForwardRef] = zi;
hn[mn.Memo] = Zr;
function er(e) {
  return mn.isMemo(e) ? Zr : hn[e.$$typeof] || Hi;
}
var ji = Object.defineProperty, Yi = Object.getOwnPropertyNames, tr = Object.getOwnPropertySymbols, Ki = Object.getOwnPropertyDescriptor, Xi = Object.getPrototypeOf, nr = Object.prototype;
function Qr(e, t, n) {
  if (typeof t != "string") {
    if (nr) {
      var r = Xi(t);
      r && r !== nr && Qr(e, r, n);
    }
    var o = Yi(t);
    tr && (o = o.concat(tr(t)));
    for (var i = er(e), a = er(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!qi[l] && !(n && n[l]) && !(a && a[l]) && !(i && i[l])) {
        var c = Ki(t, l);
        try {
          ji(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ji = Qr;
const rr = /* @__PURE__ */ zr(Ji);
var Qt = { exports: {} }, G = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Zi() {
  if (or)
    return G;
  or = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case c:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case l:
                case d:
                case u:
                case i:
                  return m;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return G.ContextConsumer = a, G.ContextProvider = i, G.Element = e, G.ForwardRef = l, G.Fragment = n, G.Lazy = d, G.Memo = u, G.Portal = t, G.Profiler = o, G.StrictMode = r, G.Suspense = c, G.SuspenseList = p, G.isAsyncMode = function() {
    return !1;
  }, G.isConcurrentMode = function() {
    return !1;
  }, G.isContextConsumer = function(m) {
    return b(m) === a;
  }, G.isContextProvider = function(m) {
    return b(m) === i;
  }, G.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, G.isForwardRef = function(m) {
    return b(m) === l;
  }, G.isFragment = function(m) {
    return b(m) === n;
  }, G.isLazy = function(m) {
    return b(m) === d;
  }, G.isMemo = function(m) {
    return b(m) === u;
  }, G.isPortal = function(m) {
    return b(m) === t;
  }, G.isProfiler = function(m) {
    return b(m) === o;
  }, G.isStrictMode = function(m) {
    return b(m) === r;
  }, G.isSuspense = function(m) {
    return b(m) === c;
  }, G.isSuspenseList = function(m) {
    return b(m) === p;
  }, G.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === c || m === p || m === f || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === u || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === h || m.getModuleId !== void 0);
  }, G.typeOf = b, G;
}
var k = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Qi() {
  return ir || (ir = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), h = !1, b = !1, m = !1, S = !1, D = !1, y;
    y = Symbol.for("react.module.reference");
    function E(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === o || D || R === r || R === c || R === p || S || R === f || h || b || m || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === u || R.$$typeof === i || R.$$typeof === a || R.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === y || R.getModuleId !== void 0));
    }
    function v(R) {
      if (typeof R == "object" && R !== null) {
        var Re = R.$$typeof;
        switch (Re) {
          case e:
            var dt = R.type;
            switch (dt) {
              case n:
              case o:
              case r:
              case c:
              case p:
                return dt;
              default:
                var Wn = dt && dt.$$typeof;
                switch (Wn) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case u:
                  case i:
                    return Wn;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var C = a, N = i, _ = e, x = l, O = n, B = d, T = u, $ = t, W = o, q = r, K = c, X = p, re = !1, H = !1;
    function ae(R) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function me(R) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(R) {
      return v(R) === a;
    }
    function z(R) {
      return v(R) === i;
    }
    function _e(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function Ce(R) {
      return v(R) === l;
    }
    function we(R) {
      return v(R) === n;
    }
    function Pe(R) {
      return v(R) === d;
    }
    function Ge(R) {
      return v(R) === u;
    }
    function ve(R) {
      return v(R) === t;
    }
    function xe(R) {
      return v(R) === o;
    }
    function ut(R) {
      return v(R) === r;
    }
    function A(R) {
      return v(R) === c;
    }
    function de(R) {
      return v(R) === p;
    }
    k.ContextConsumer = C, k.ContextProvider = N, k.Element = _, k.ForwardRef = x, k.Fragment = O, k.Lazy = B, k.Memo = T, k.Portal = $, k.Profiler = W, k.StrictMode = q, k.Suspense = K, k.SuspenseList = X, k.isAsyncMode = ae, k.isConcurrentMode = me, k.isContextConsumer = he, k.isContextProvider = z, k.isElement = _e, k.isForwardRef = Ce, k.isFragment = we, k.isLazy = Pe, k.isMemo = Ge, k.isPortal = ve, k.isProfiler = xe, k.isStrictMode = ut, k.isSuspense = A, k.isSuspenseList = de, k.isValidElementType = E, k.typeOf = v;
  }()), k;
}
process.env.NODE_ENV === "production" ? Qt.exports = Zi() : Qt.exports = Qi();
var sr = Qt.exports;
function vn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Bt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || vn(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function es(e, t, n) {
  Bt(e, "mapStateToProps"), Bt(t, "mapDispatchToProps"), Bt(n, "mergeProps");
}
const ts = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function ns(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, c, p, u, d;
  function f(D, y) {
    return l = D, c = y, p = e(l, c), u = t(r, c), d = n(p, u, c), s = !0, d;
  }
  function h() {
    return p = e(l, c), t.dependsOnOwnProps && (u = t(r, c)), d = n(p, u, c), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, c)), t.dependsOnOwnProps && (u = t(r, c)), d = n(p, u, c), d;
  }
  function m() {
    const D = e(l, c), y = !a(D, p);
    return p = D, y && (d = n(p, u, c)), d;
  }
  function S(D, y) {
    const E = !i(y, c), v = !o(D, l, y, c);
    return l = D, c = y, E && v ? h() : E ? b() : v ? m() : d;
  }
  return function(y, E) {
    return s ? S(y, E) : f(y, E);
  };
}
function rs(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = Jr(t, ts);
  const a = n(e, i), s = r(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && es(a, s, l), ns(a, s, l, e, i);
}
function os(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function is(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function eo(e, t, n) {
  is(e) || vn(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function en(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function ar(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function to(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = ar(e);
      let c = i(s, l);
      return typeof c == "function" && (i.mapToProps = c, i.dependsOnOwnProps = ar(c), c = i(s, l)), process.env.NODE_ENV !== "production" && eo(c, o, t), c;
    }, i;
  };
}
function bn(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function ss(e) {
  return e && typeof e == "object" ? en((t) => (
    // @ts-ignore
    os(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    to(e, "mapDispatchToProps")
  ) : bn(e, "mapDispatchToProps") : en((t) => ({
    dispatch: t
  }));
}
function as(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    to(e, "mapStateToProps")
  ) : bn(e, "mapStateToProps") : en(() => ({}));
}
function ls(e, t, n) {
  return Be({}, n, e, t);
}
function cs(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, c, p) {
      const u = e(l, c, p);
      return i ? o(u, a) || (a = u) : (i = !0, a = u, process.env.NODE_ENV !== "production" && eo(a, r, "mergeProps")), a;
    };
  };
}
function us(e) {
  return e ? typeof e == "function" ? cs(e) : bn(e, "mergeProps") : () => ls;
}
function ds() {
  const e = Li();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], o = t;
      for (; o; )
        r.push(o), o = o.next;
      return r;
    },
    subscribe(r) {
      let o = !0, i = n = {
        callback: r,
        next: null,
        prev: n
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !o || t === null || (o = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const lr = {
  notify() {
  },
  get: () => []
};
function no(e, t) {
  let n, r = lr, o = 0, i = !1;
  function a(b) {
    p();
    const m = r.subscribe(b);
    let S = !1;
    return () => {
      S || (S = !0, m(), u());
    };
  }
  function s() {
    r.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return i;
  }
  function p() {
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = ds());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = lr);
  }
  function d() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, u());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => r
  };
  return h;
}
const ps = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bt = ps ? w.useLayoutEffect : w.useEffect;
function cr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Mt(e, t) {
  if (cr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !cr(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const fs = ["reactReduxForwardedRef"];
let ro = Gi;
const gs = (e) => {
  ro = e;
}, ms = [null, null], hs = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function vs(e, t, n) {
  bt(() => e(...t), n);
}
function bs(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function ys(e, t, n, r, o, i, a, s, l, c, p) {
  if (!e)
    return () => {
    };
  let u = !1, d = null;
  const f = () => {
    if (u || !s.current)
      return;
    const b = t.getState();
    let m, S;
    try {
      m = r(b, o.current);
    } catch (D) {
      S = D, d = D;
    }
    S || (d = null), m === i.current ? a.current || c() : (i.current = m, l.current = m, a.current = !0, p());
  };
  return n.onStateChange = f, n.trySubscribe(), f(), () => {
    if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, d)
      throw d;
  };
}
function Es(e, t) {
  return e === t;
}
let ur = !1;
function oo(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Es,
  areOwnPropsEqual: i = Mt,
  areStatePropsEqual: a = Mt,
  areMergedPropsEqual: s = Mt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: c = Xr
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !ur && (ur = !0, vn('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = c, u = as(e), d = ss(t), f = us(n), h = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !sr.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${hs(m)}`);
    const S = m.displayName || m.name || "Component", D = `Connect(${S})`, y = {
      shouldHandleStateChanges: h,
      displayName: D,
      wrappedComponentName: S,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: u,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(N) {
      const [_, x, O] = w.useMemo(() => {
        const {
          reactReduxForwardedRef: A
        } = N, de = Jr(N, fs);
        return [N.context, A, de];
      }, [N]), B = w.useMemo(() => _ && _.Consumer && // @ts-ignore
      sr.isContextConsumer(/* @__PURE__ */ w.createElement(_.Consumer, null)) ? _ : p, [_, p]), T = w.useContext(B), $ = !!N.store && !!N.store.getState && !!N.store.dispatch, W = !!T && !!T.store;
      if (process.env.NODE_ENV !== "production" && !$ && !W)
        throw new Error(`Could not find "store" in the context of "${D}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${D} in connect options.`);
      const q = $ ? N.store : T.store, K = W ? T.getServerState : q.getState, X = w.useMemo(() => rs(q.dispatch, y), [q]), [re, H] = w.useMemo(() => {
        if (!h)
          return ms;
        const A = no(q, $ ? void 0 : T.subscription), de = A.notifyNestedSubs.bind(A);
        return [A, de];
      }, [q, $, T]), ae = w.useMemo(() => $ ? T : Be({}, T, {
        subscription: re
      }), [$, T, re]), me = w.useRef(), he = w.useRef(O), z = w.useRef(), _e = w.useRef(!1);
      w.useRef(!1);
      const Ce = w.useRef(!1), we = w.useRef();
      bt(() => (Ce.current = !0, () => {
        Ce.current = !1;
      }), []);
      const Pe = w.useMemo(() => () => z.current && O === he.current ? z.current : X(q.getState(), O), [q, O]), Ge = w.useMemo(() => (de) => re ? ys(
        h,
        q,
        re,
        // @ts-ignore
        X,
        he,
        me,
        _e,
        Ce,
        z,
        H,
        de
      ) : () => {
      }, [re]);
      vs(bs, [he, me, _e, O, z, H]);
      let ve;
      try {
        ve = ro(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ge,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Pe,
          K ? () => X(K(), O) : Pe
        );
      } catch (A) {
        throw we.current && (A.message += `
The error may be correlated with this previous error:
${we.current.stack}

`), A;
      }
      bt(() => {
        we.current = void 0, z.current = void 0, me.current = ve;
      });
      const xe = w.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ w.createElement(m, Be({}, ve, {
          ref: x
        }))
      ), [x, m, ve]);
      return w.useMemo(() => h ? /* @__PURE__ */ w.createElement(B.Provider, {
        value: ae
      }, xe) : xe, [B, xe, ae]);
    }
    const C = w.memo(E);
    if (C.WrappedComponent = m, C.displayName = E.displayName = D, l) {
      const _ = w.forwardRef(function(O, B) {
        return /* @__PURE__ */ w.createElement(C, Be({}, O, {
          reactReduxForwardedRef: B
        }));
      });
      return _.displayName = D, _.WrappedComponent = m, rr(_, m);
    }
    return rr(C, m);
  };
}
function Ds({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = w.useMemo(() => {
    const c = no(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), s = w.useMemo(() => e.getState(), [e]);
  bt(() => {
    const {
      subscription: c
    } = a;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), s !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || Xr;
  return /* @__PURE__ */ w.createElement(l.Provider, {
    value: a
  }, n);
}
gs(gn.useSyncExternalStore);
Fi(pn.unstable_batchedUpdates);
function Ss(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function io(e, t) {
  var n = w.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = w.useRef(!0), o = w.useRef(n), i = r.current || !!(t && o.current.inputs && Ss(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return w.useEffect(function() {
    r.current = !1, o.current = a;
  }, [a]), a.result;
}
function Cs(e, t) {
  return io(function() {
    return e;
  }, t);
}
var F = io, P = Cs, fe = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, a = r - i, s = o - n, l = {
    top: n,
    right: r,
    bottom: o,
    left: i,
    width: a,
    height: s,
    x: i,
    y: n,
    center: {
      x: (r + i) / 2,
      y: (o + n) / 2
    }
  };
  return l;
}, yn = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, dr = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, ws = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, $t = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, En = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? $t : r, i = t.border, a = i === void 0 ? $t : i, s = t.padding, l = s === void 0 ? $t : s, c = fe(yn(n, o)), p = fe(dr(n, a)), u = fe(dr(p, l));
  return {
    marginBox: c,
    borderBox: fe(n),
    paddingBox: p,
    contentBox: u,
    margin: o,
    border: a,
    padding: l
  };
}, le = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Hn(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Hn(!1)), o;
}, xs = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, yt = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = ws(r, n);
  return En({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Et = function(t, n) {
  return n === void 0 && (n = xs()), yt(t, n);
}, so = function(t, n) {
  var r = {
    top: le(n.marginTop),
    right: le(n.marginRight),
    bottom: le(n.marginBottom),
    left: le(n.marginLeft)
  }, o = {
    top: le(n.paddingTop),
    right: le(n.paddingRight),
    bottom: le(n.paddingBottom),
    left: le(n.paddingLeft)
  }, i = {
    top: le(n.borderTopWidth),
    right: le(n.borderRightWidth),
    bottom: le(n.borderBottomWidth),
    left: le(n.borderLeftWidth)
  };
  return En({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, ao = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return so(n, r);
}, pr = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Ns(e, t) {
  return !!(e === t || pr(e) && pr(t));
}
function Os(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Ns(e[n], t[n]))
      return !1;
  return !0;
}
function j(e, t) {
  t === void 0 && (t = Os);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, o);
    return n = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var Is = function(t) {
  var n = [], r = null, o = function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    n = s, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Ke = Is, As = process.env.NODE_ENV === "production", _s = /[ \t]{2,}/g, Ps = /^[ \t]*/gm, fr = (e) => e.replace(_s, " ").replace(Ps, "").trim(), Rs = (e) => fr(`
  %c@hello-pangea/dnd

  %c${fr(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Ts = (e) => [Rs(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Bs = "__@hello-pangea/dnd-disable-dev-warnings";
function lo(e, t) {
  As || typeof window < "u" && window[Bs] || console[e](...Ts(t));
}
const U = lo.bind(null, "warn"), tn = lo.bind(null, "error");
function ye() {
}
function Ms(e, t) {
  return {
    ...e,
    ...t
  };
}
function ce(e, t, n) {
  const r = t.map((o) => {
    const i = Ms(n, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    r.forEach((i) => {
      i();
    });
  };
}
const $s = process.env.NODE_ENV === "production", gr = "Invariant failed";
class Xe extends Error {
}
Xe.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  if (!e)
    throw $s ? new Xe(gr) : new Xe(`${gr}: ${t || ""}`);
}
class Fs extends I.Component {
  constructor() {
    super(...arguments), this.callbacks = null, this.unbind = ye, this.onWindowError = (t) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && U(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const r = t.error;
      r instanceof Xe && (t.preventDefault(), process.env.NODE_ENV !== "production" && tn(r.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (t) => {
      this.callbacks = t;
    };
  }
  componentDidMount() {
    this.unbind = ce(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Xe) {
      process.env.NODE_ENV !== "production" && tn(t.message), this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const Ls = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Dt = (e) => e + 1, Vs = (e) => `
  You have lifted an item in position ${Dt(e.source.index)}
`, co = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Dt(e.index), o = Dt(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, uo = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, Gs = (e) => {
  const t = e.destination;
  if (t)
    return co(e.source, t);
  const n = e.combine;
  return n ? uo(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, mr = (e) => `
  The item has returned to its starting position
  of ${Dt(e.index)}
`, ks = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${mr(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${co(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${uo(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${mr(e.source)}
  `;
}, Ws = {
  dragHandleUsageInstructions: Ls,
  onDragStart: Vs,
  onDragUpdate: Gs,
  onDragEnd: ks
};
var vt = Ws;
const Y = {
  x: 0,
  y: 0
}, J = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), oe = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Ee = (e, t) => e.x === t.x && e.y === t.y, Le = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ie = function(e, t, n) {
  return n === void 0 && (n = 0), e === "x" ? {
    x: t,
    y: n
  } : {
    x: n,
    y: t
  };
}, Je = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), hr = (e, t) => Math.min(...t.map((n) => Je(e, n))), po = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Us = (e, t) => {
  const n = fe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const ot = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), vr = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], Hs = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, qs = (e, t) => t ? ot(e, t.scroll.diff.displacement) : e, zs = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, js = (e, t) => t && t.shouldClipSubject ? Us(t.pageMarginBox, e) : fe(e);
var Me = (e) => {
  let {
    page: t,
    withPlaceholder: n,
    axis: r,
    frame: o
  } = e;
  const i = qs(t.marginBox, o), a = zs(i, r, n), s = js(a, o);
  return {
    page: t,
    withPlaceholder: n,
    active: s
  };
}, Dn = (e, t) => {
  e.frame || (process.env.NODE_ENV, g(!1));
  const n = e.frame, r = oe(t, n.scroll.initial), o = Le(r), i = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: n.scroll.max
    }
  }, a = Me({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: a
  };
};
const fo = j((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), go = j((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), wt = j((e) => Object.values(e)), Ys = j((e) => Object.values(e));
var Ae = j((e, t) => Ys(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Sn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function xt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Nt = j((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Ks = (e) => {
  let {
    isMovingForward: t,
    draggable: n,
    destination: r,
    insideDestination: o,
    previousImpact: i
  } = e;
  if (!r.isCombineEnabled || !Sn(i))
    return null;
  function s(h) {
    const b = {
      type: "COMBINE",
      combine: {
        draggableId: h,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...i,
      at: b
    };
  }
  const l = i.displaced.all, c = l.length ? l[0] : null;
  if (t)
    return c ? s(c) : null;
  const p = Nt(n, o);
  if (!c) {
    if (!p.length)
      return null;
    const h = p[p.length - 1];
    return s(h.descriptor.id);
  }
  const u = p.findIndex((h) => h.descriptor.id === c);
  u === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find displaced item in set") : g(!1));
  const d = u - 1;
  if (d < 0)
    return null;
  const f = p[d];
  return s(f.descriptor.id);
}, Ve = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const mo = {
  point: Y,
  value: 0
}, Ze = {
  invisible: {},
  visible: {},
  all: []
}, Xs = {
  displaced: Ze,
  displacedBy: mo,
  at: null
};
var Js = Xs, ue = (e, t) => (n) => e <= n && n <= t, ho = (e) => {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), a = n(r.left) || n(r.right);
    if (i && a)
      return !0;
    const l = r.top < e.top && r.bottom > e.bottom, c = r.left < e.left && r.right > e.right;
    return l && c ? !0 : l && a || c && i;
  };
}, Zs = (e) => {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Cn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, vo = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var Qs = (e) => (t) => {
  const n = ue(t.top, t.bottom), r = ue(t.left, t.right);
  return (o) => e === Cn ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const ea = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : Y;
  return ot(e, n);
}, ta = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, na = (e, t, n) => n(t)(e), wn = (e) => {
  let {
    target: t,
    destination: n,
    viewport: r,
    withDroppableDisplacement: o,
    isVisibleThroughFrameFn: i
  } = e;
  const a = o ? ea(t, n) : t;
  return ta(a, n, i) && na(a, r, i);
}, ra = (e) => wn({
  ...e,
  isVisibleThroughFrameFn: ho
}), bo = (e) => wn({
  ...e,
  isVisibleThroughFrameFn: Zs
}), oa = (e) => wn({
  ...e,
  isVisibleThroughFrameFn: Qs(e.destination.axis)
}), ia = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: o
  } = t;
  if (r[e])
    return !1;
  const i = o[e];
  return i ? i.shouldAnimate : !0;
};
function sa(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return fe(yn(n, r));
}
function Qe(e) {
  let {
    afterDragging: t,
    destination: n,
    displacedBy: r,
    viewport: o,
    forceShouldAnimate: i,
    last: a
  } = e;
  return t.reduce(function(l, c) {
    const p = sa(c, r), u = c.descriptor.id;
    if (l.all.push(u), !ra({
      target: p,
      destination: n,
      viewport: o,
      withDroppableDisplacement: !0
    }))
      return l.invisible[c.descriptor.id] = !0, l;
    const f = ia(u, a, i), h = {
      draggableId: u,
      shouldAnimate: f
    };
    return l.visible[u] = h, l;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function aa(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function br(e) {
  let {
    insideDestination: t,
    inHomeList: n,
    displacedBy: r,
    destination: o
  } = e;
  const i = aa(t, {
    inHomeList: n
  });
  return {
    displaced: Ze,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: {
        droppableId: o.descriptor.id,
        index: i
      }
    }
  };
}
function St(e) {
  let {
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: o,
    displacedBy: i,
    last: a,
    index: s,
    forceShouldAnimate: l
  } = e;
  const c = Ve(t, r);
  if (s == null)
    return br({
      insideDestination: n,
      inHomeList: c,
      displacedBy: i,
      destination: r
    });
  const p = n.find((b) => b.descriptor.index === s);
  if (!p)
    return br({
      insideDestination: n,
      inHomeList: c,
      displacedBy: i,
      destination: r
    });
  const u = Nt(t, n), d = n.indexOf(p), f = u.slice(d);
  return {
    displaced: Qe({
      afterDragging: f,
      destination: r,
      displacedBy: i,
      last: a,
      viewport: o.frame,
      forceShouldAnimate: l
    }),
    displacedBy: i,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: s
      }
    }
  };
}
function Se(e, t) {
  return !!t.effected[e];
}
var la = (e) => {
  let {
    isMovingForward: t,
    destination: n,
    draggables: r,
    combine: o,
    afterCritical: i
  } = e;
  if (!n.isCombineEnabled)
    return null;
  const a = o.draggableId, l = r[a].descriptor.index;
  return Se(a, i) ? t ? l : l - 1 : t ? l + 1 : l;
}, ca = (e) => {
  let {
    isMovingForward: t,
    isInHomeList: n,
    insideDestination: r,
    location: o
  } = e;
  if (!r.length)
    return null;
  const i = o.index, a = t ? i + 1 : i - 1, s = r[0].descriptor.index, l = r[r.length - 1].descriptor.index, c = n ? l : l + 1;
  return a < s || a > c ? null : a;
}, ua = (e) => {
  let {
    isMovingForward: t,
    isInHomeList: n,
    draggable: r,
    draggables: o,
    destination: i,
    insideDestination: a,
    previousImpact: s,
    viewport: l,
    afterCritical: c
  } = e;
  const p = s.at;
  if (p || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot move in direction without previous impact location") : g(!1)), p.type === "REORDER") {
    const d = ca({
      isMovingForward: t,
      isInHomeList: n,
      location: p.destination,
      insideDestination: a
    });
    return d == null ? null : St({
      draggable: r,
      insideDestination: a,
      destination: i,
      viewport: l,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = la({
    isMovingForward: t,
    destination: i,
    displaced: s.displaced,
    draggables: o,
    combine: p.combine,
    afterCritical: c
  });
  return u == null ? null : St({
    draggable: r,
    insideDestination: a,
    destination: i,
    viewport: l,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, da = (e) => {
  let {
    displaced: t,
    afterCritical: n,
    combineWith: r,
    displacedBy: o
  } = e;
  const i = !!(t.visible[r] || t.invisible[r]);
  return Se(r, n) ? i ? Y : Le(o.point) : i ? o.point : Y;
}, pa = (e) => {
  let {
    afterCritical: t,
    impact: n,
    draggables: r
  } = e;
  const o = xt(n);
  o || (process.env.NODE_ENV, g(!1));
  const i = o.draggableId, a = r[i].page.borderBox.center, s = da({
    displaced: n.displaced,
    afterCritical: t,
    combineWith: i,
    displacedBy: n.displacedBy
  });
  return J(a, s);
};
const yo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, fa = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, xn = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, yr = (e) => {
  let {
    axis: t,
    moveRelativeTo: n,
    isMoving: r
  } = e;
  return Ie(t.line, n.marginBox[t.end] + yo(t, r), xn(t, n.marginBox, r));
}, Er = (e) => {
  let {
    axis: t,
    moveRelativeTo: n,
    isMoving: r
  } = e;
  return Ie(t.line, n.marginBox[t.start] - fa(t, r), xn(t, n.marginBox, r));
}, ga = (e) => {
  let {
    axis: t,
    moveInto: n,
    isMoving: r
  } = e;
  return Ie(t.line, n.contentBox[t.start] + yo(t, r), xn(t, n.contentBox, r));
};
var ma = (e) => {
  let {
    impact: t,
    draggable: n,
    draggables: r,
    droppable: o,
    afterCritical: i
  } = e;
  const a = Ae(o.descriptor.id, r), s = n.page, l = o.axis;
  if (!a.length)
    return ga({
      axis: l,
      moveInto: o.page,
      isMoving: s
    });
  const {
    displaced: c,
    displacedBy: p
  } = t, u = c.all[0];
  if (u) {
    const f = r[u];
    if (Se(u, i))
      return Er({
        axis: l,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const h = yt(f.page, p.point);
    return Er({
      axis: l,
      moveRelativeTo: h,
      isMoving: s
    });
  }
  const d = a[a.length - 1];
  if (d.descriptor.id === n.descriptor.id)
    return s.borderBox.center;
  if (Se(d.descriptor.id, i)) {
    const f = yt(d.page, Le(i.displacedBy.point));
    return yr({
      axis: l,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return yr({
    axis: l,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, nn = (e, t) => {
  const n = e.frame;
  return n ? J(t, n.scroll.diff.displacement) : t;
};
const ha = (e) => {
  let {
    impact: t,
    draggable: n,
    droppable: r,
    draggables: o,
    afterCritical: i
  } = e;
  const a = n.page.borderBox.center, s = t.at;
  return !r || !s ? a : s.type === "REORDER" ? ma({
    impact: t,
    draggable: n,
    draggables: o,
    droppable: r,
    afterCritical: i
  }) : pa({
    impact: t,
    draggables: o,
    afterCritical: i
  });
};
var Ot = (e) => {
  const t = ha(e), n = e.droppable;
  return n ? nn(n, t) : t;
}, Eo = (e, t) => {
  const n = oe(t, e.scroll.initial), r = Le(n);
  return {
    frame: fe({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: n,
        displacement: r
      }
    }
  };
};
function Dr(e, t) {
  return e.map((n) => t[n]);
}
function va(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var ba = (e) => {
  let {
    impact: t,
    viewport: n,
    destination: r,
    draggables: o,
    maxScrollChange: i
  } = e;
  const a = Eo(n, J(n.scroll.current, i)), s = r.frame ? Dn(r, J(r.frame.scroll.current, i)) : r, l = t.displaced, c = Qe({
    afterDragging: Dr(l.all, o),
    destination: r,
    displacedBy: t.displacedBy,
    viewport: a.frame,
    last: l,
    forceShouldAnimate: !1
  }), p = Qe({
    afterDragging: Dr(l.all, o),
    destination: s,
    displacedBy: t.displacedBy,
    viewport: n.frame,
    last: l,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [l, c, p];
  return l.all.forEach((b) => {
    const m = va(b, f);
    if (m) {
      d[b] = m;
      return;
    }
    u[b] = !0;
  }), {
    ...t,
    displaced: {
      all: l.all,
      invisible: u,
      visible: d
    }
  };
}, ya = (e, t) => J(e.scroll.diff.displacement, t), Nn = (e) => {
  let {
    pageBorderBoxCenter: t,
    draggable: n,
    viewport: r
  } = e;
  const o = ya(r, t), i = oe(o, n.page.borderBox.center);
  return J(n.client.borderBox.center, i);
}, Do = (e) => {
  let {
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: r,
    viewport: o,
    withDroppableDisplacement: i,
    onlyOnMainAxis: a = !1
  } = e;
  const s = oe(r, t.page.borderBox.center), c = {
    target: ot(t.page.borderBox, s),
    destination: n,
    withDroppableDisplacement: i,
    viewport: o
  };
  return a ? oa(c) : bo(c);
}, Ea = (e) => {
  let {
    isMovingForward: t,
    draggable: n,
    destination: r,
    draggables: o,
    previousImpact: i,
    viewport: a,
    previousPageBorderBoxCenter: s,
    previousClientSelection: l,
    afterCritical: c
  } = e;
  if (!r.isEnabled)
    return null;
  const p = Ae(r.descriptor.id, o), u = Ve(n, r), d = Ks({
    isMovingForward: t,
    draggable: n,
    destination: r,
    insideDestination: p,
    previousImpact: i
  }) || ua({
    isMovingForward: t,
    isInHomeList: u,
    draggable: n,
    draggables: o,
    destination: r,
    insideDestination: p,
    previousImpact: i,
    viewport: a,
    afterCritical: c
  });
  if (!d)
    return null;
  const f = Ot({
    impact: d,
    draggable: n,
    droppable: r,
    draggables: o,
    afterCritical: c
  });
  if (Do({
    draggable: n,
    destination: r,
    newPageBorderBoxCenter: f,
    viewport: a.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Nn({
        pageBorderBoxCenter: f,
        draggable: n,
        viewport: a
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const b = oe(f, s), m = ba({
    impact: d,
    viewport: a,
    destination: r,
    draggables: o,
    maxScrollChange: b
  });
  return {
    clientSelection: l,
    impact: m,
    scrollJumpRequest: b
  };
};
const Q = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get clipped area from droppable") : g(!1)), t;
};
var Da = (e) => {
  let {
    isMovingForward: t,
    pageBorderBoxCenter: n,
    source: r,
    droppables: o,
    viewport: i
  } = e;
  const a = r.subject.active;
  if (!a)
    return null;
  const s = r.axis, l = ue(a[s.start], a[s.end]), c = wt(o).filter((u) => u !== r).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => ho(i.frame)(Q(u))).filter((u) => {
    const d = Q(u);
    return t ? a[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < a[s.crossAxisStart];
  }).filter((u) => {
    const d = Q(u), f = ue(d[s.start], d[s.end]);
    return l(d[s.start]) || l(d[s.end]) || f(a[s.start]) || f(a[s.end]);
  }).sort((u, d) => {
    const f = Q(u)[s.crossAxisStart], h = Q(d)[s.crossAxisStart];
    return t ? f - h : h - f;
  }).filter((u, d, f) => Q(u)[s.crossAxisStart] === Q(f[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const p = c.filter((u) => ue(Q(u)[s.start], Q(u)[s.end])(n[s.line]));
  return p.length === 1 ? p[0] : p.length > 1 ? p.sort((u, d) => Q(u)[s.start] - Q(d)[s.start])[0] : c.sort((u, d) => {
    const f = hr(n, vr(Q(u))), h = hr(n, vr(Q(d)));
    return f !== h ? f - h : Q(u)[s.start] - Q(d)[s.start];
  })[0];
};
const Sr = (e, t) => {
  const n = e.page.borderBox.center;
  return Se(e.descriptor.id, t) ? oe(n, t.displacedBy.point) : n;
}, Sa = (e, t) => {
  const n = e.page.borderBox;
  return Se(e.descriptor.id, t) ? ot(n, Le(t.displacedBy.point)) : n;
};
var Ca = (e) => {
  let {
    pageBorderBoxCenter: t,
    viewport: n,
    destination: r,
    insideDestination: o,
    afterCritical: i
  } = e;
  return o.filter((s) => bo({
    target: Sa(s, i),
    destination: r,
    viewport: n.frame,
    withDroppableDisplacement: !0
  })).sort((s, l) => {
    const c = Je(t, nn(r, Sr(s, i))), p = Je(t, nn(r, Sr(l, i)));
    return c < p ? -1 : p < c ? 1 : s.descriptor.index - l.descriptor.index;
  })[0] || null;
}, it = j(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ie(t.line, r)
  };
});
const wa = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ie(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], l = Ae(e.descriptor.id, n).reduce((c, p) => c + p.client.marginBox[r.size], 0) + t[r.line] - o;
  return l <= 0 ? null : Ie(r.line, l);
}, So = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Co = (e, t, n) => {
  const r = e.frame;
  Ve(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g(!1));
  const o = it(e.axis, t.displaceBy).point, i = wa(e, o, n), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const p = Me({
      page: e.subject.page,
      withPlaceholder: a,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: p
    };
  }
  const s = i ? J(r.scroll.max, i) : r.scroll.max, l = So(r, s), c = Me({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: l
  });
  return {
    ...e,
    subject: c,
    frame: l
  };
}, xa = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot remove placeholder form subject when there was none") : g(!1));
  const n = e.frame;
  if (!n) {
    const a = Me({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: a
    };
  }
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? g(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : g(!1));
  const o = So(n, r), i = Me({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: i,
    frame: o
  };
};
var Na = (e) => {
  let {
    previousPageBorderBoxCenter: t,
    moveRelativeTo: n,
    insideDestination: r,
    draggable: o,
    draggables: i,
    destination: a,
    viewport: s,
    afterCritical: l
  } = e;
  if (!n) {
    if (r.length)
      return null;
    const d = {
      displaced: Ze,
      displacedBy: mo,
      at: {
        type: "REORDER",
        destination: {
          droppableId: a.descriptor.id,
          index: 0
        }
      }
    }, f = Ot({
      impact: d,
      draggable: o,
      droppable: a,
      draggables: i,
      afterCritical: l
    }), h = Ve(o, a) ? a : Co(a, o, i);
    return Do({
      draggable: o,
      destination: h,
      newPageBorderBoxCenter: f,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? d : null;
  }
  const c = t[a.axis.line] <= n.page.borderBox.center[a.axis.line], p = (() => {
    const d = n.descriptor.index;
    return n.descriptor.id === o.descriptor.id || c ? d : d + 1;
  })(), u = it(a.axis, o.displaceBy);
  return St({
    draggable: o,
    insideDestination: r,
    destination: a,
    viewport: s,
    displacedBy: u,
    last: Ze,
    index: p
  });
}, Oa = (e) => {
  let {
    isMovingForward: t,
    previousPageBorderBoxCenter: n,
    draggable: r,
    isOver: o,
    draggables: i,
    droppables: a,
    viewport: s,
    afterCritical: l
  } = e;
  const c = Da({
    isMovingForward: t,
    pageBorderBoxCenter: n,
    source: o,
    droppables: a,
    viewport: s
  });
  if (!c)
    return null;
  const p = Ae(c.descriptor.id, i), u = Ca({
    pageBorderBoxCenter: n,
    viewport: s,
    destination: c,
    insideDestination: p,
    afterCritical: l
  }), d = Na({
    previousPageBorderBoxCenter: n,
    destination: c,
    draggable: r,
    draggables: i,
    moveRelativeTo: u,
    insideDestination: p,
    viewport: s,
    afterCritical: l
  });
  if (!d)
    return null;
  const f = Ot({
    impact: d,
    draggable: r,
    droppable: c,
    draggables: i,
    afterCritical: l
  });
  return {
    clientSelection: Nn({
      pageBorderBoxCenter: f,
      draggable: r,
      viewport: s
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, ie = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Ia = (e, t) => {
  const n = ie(e);
  return n ? t[n] : null;
};
var Aa = (e) => {
  let {
    state: t,
    type: n
  } = e;
  const r = Ia(t.impact, t.dimensions.droppables), o = !!r, i = t.dimensions.droppables[t.critical.droppable.id], a = r || i, s = a.axis.direction, l = s === "vertical" && (n === "MOVE_UP" || n === "MOVE_DOWN") || s === "horizontal" && (n === "MOVE_LEFT" || n === "MOVE_RIGHT");
  if (l && !o)
    return null;
  const c = n === "MOVE_DOWN" || n === "MOVE_RIGHT", p = t.dimensions.draggables[t.critical.draggable.id], u = t.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = t.dimensions;
  return l ? Ea({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: p,
    destination: a,
    draggables: d,
    viewport: t.viewport,
    previousClientSelection: t.current.client.selection,
    previousImpact: t.impact,
    afterCritical: t.afterCritical
  }) : Oa({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: p,
    isOver: a,
    draggables: d,
    droppables: f,
    viewport: t.viewport,
    afterCritical: t.afterCritical
  });
};
function Oe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function wo(e) {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function _a(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Pa(e) {
  let {
    pageBorderBox: t,
    draggable: n,
    candidates: r
  } = e;
  const o = n.page.borderBox.center, i = r.map((a) => {
    const s = a.axis, l = Ie(a.axis.line, t.center[s.line], a.page.borderBox.center[s.crossAxisLine]);
    return {
      id: a.descriptor.id,
      distance: Je(o, l)
    };
  }).sort((a, s) => s.distance - a.distance);
  return i[0] ? i[0].id : null;
}
function Ra(e) {
  let {
    pageBorderBox: t,
    draggable: n,
    droppables: r
  } = e;
  const o = wt(r).filter((i) => {
    if (!i.isEnabled)
      return !1;
    const a = i.subject.active;
    if (!a || !_a(t, a))
      return !1;
    if (wo(a)(t.center))
      return !0;
    const s = i.axis, l = a.center[s.crossAxisLine], c = t[s.crossAxisStart], p = t[s.crossAxisEnd], u = ue(a[s.crossAxisStart], a[s.crossAxisEnd]), d = u(c), f = u(p);
    return !d && !f ? !0 : d ? c < l : p > l;
  });
  return o.length ? o.length === 1 ? o[0].descriptor.id : Pa({
    pageBorderBox: t,
    draggable: n,
    candidates: o
  }) : null;
}
const xo = (e, t) => fe(ot(e, t));
var Ta = (e, t) => {
  const n = e.frame;
  return n ? xo(t, n.scroll.diff.value) : t;
};
function No(e) {
  let {
    displaced: t,
    id: n
  } = e;
  return !!(t.visible[n] || t.invisible[n]);
}
function Ba(e) {
  let {
    draggable: t,
    closest: n,
    inHomeList: r
  } = e;
  return n ? r && n.descriptor.index > t.descriptor.index ? n.descriptor.index - 1 : n.descriptor.index : null;
}
var Ma = (e) => {
  let {
    pageBorderBoxWithDroppableScroll: t,
    draggable: n,
    destination: r,
    insideDestination: o,
    last: i,
    viewport: a,
    afterCritical: s
  } = e;
  const l = r.axis, c = it(r.axis, n.displaceBy), p = c.value, u = t[l.start], d = t[l.end], h = Nt(n, o).find((m) => {
    const S = m.descriptor.id, D = m.page.borderBox.center[l.line], y = Se(S, s), E = No({
      displaced: i,
      id: S
    });
    return y ? E ? d <= D : u < D - p : E ? d <= D + p : u < D;
  }) || null, b = Ba({
    draggable: n,
    closest: h,
    inHomeList: Ve(n, r)
  });
  return St({
    draggable: n,
    insideDestination: o,
    destination: r,
    viewport: a,
    last: i,
    displacedBy: c,
    index: b
  });
};
const $a = 4;
var Fa = (e) => {
  let {
    draggable: t,
    pageBorderBoxWithDroppableScroll: n,
    previousImpact: r,
    destination: o,
    insideDestination: i,
    afterCritical: a
  } = e;
  if (!o.isCombineEnabled)
    return null;
  const s = o.axis, l = it(o.axis, t.displaceBy), c = l.value, p = n[s.start], u = n[s.end], f = Nt(t, i).find((b) => {
    const m = b.descriptor.id, S = b.page.borderBox, y = S[s.size] / $a, E = Se(m, a), v = No({
      displaced: r.displaced,
      id: m
    });
    return E ? v ? u > S[s.start] + y && u < S[s.end] - y : p > S[s.start] - c + y && p < S[s.end] - c - y : v ? u > S[s.start] + c + y && u < S[s.end] + c - y : p > S[s.start] + y && p < S[s.end] - y;
  });
  return f ? {
    displacedBy: l,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: f.descriptor.id,
        droppableId: o.descriptor.id
      }
    }
  } : null;
}, Oo = (e) => {
  let {
    pageOffset: t,
    draggable: n,
    draggables: r,
    droppables: o,
    previousImpact: i,
    viewport: a,
    afterCritical: s
  } = e;
  const l = xo(n.page.borderBox, t), c = Ra({
    pageBorderBox: l,
    draggable: n,
    droppables: o
  });
  if (!c)
    return Js;
  const p = o[c], u = Ae(p.descriptor.id, r), d = Ta(p, l);
  return Fa({
    pageBorderBoxWithDroppableScroll: d,
    draggable: n,
    previousImpact: i,
    destination: p,
    insideDestination: u,
    afterCritical: s
  }) || Ma({
    pageBorderBoxWithDroppableScroll: d,
    draggable: n,
    destination: p,
    insideDestination: u,
    last: i.displaced,
    viewport: a,
    afterCritical: s
  });
}, On = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const La = (e) => {
  let {
    previousImpact: t,
    impact: n,
    droppables: r
  } = e;
  const o = ie(t), i = ie(n);
  if (!o || o === i)
    return r;
  const a = r[o];
  if (!a.subject.withPlaceholder)
    return r;
  const s = xa(a);
  return On(r, s);
};
var Va = (e) => {
  let {
    draggable: t,
    draggables: n,
    droppables: r,
    previousImpact: o,
    impact: i
  } = e;
  const a = La({
    previousImpact: o,
    impact: i,
    droppables: r
  }), s = ie(i);
  if (!s)
    return a;
  const l = r[s];
  if (Ve(t, l) || l.subject.withPlaceholder)
    return a;
  const c = Co(l, t, n);
  return On(a, c);
}, ze = (e) => {
  let {
    state: t,
    clientSelection: n,
    dimensions: r,
    viewport: o,
    impact: i,
    scrollJumpRequest: a
  } = e;
  const s = o || t.viewport, l = r || t.dimensions, c = n || t.current.client.selection, p = oe(c, t.initial.client.selection), u = {
    offset: p,
    selection: c,
    borderBoxCenter: J(t.initial.client.borderBoxCenter, p)
  }, d = {
    selection: J(u.selection, s.scroll.current),
    borderBoxCenter: J(u.borderBoxCenter, s.scroll.current),
    offset: J(u.offset, s.scroll.diff.value)
  }, f = {
    client: u,
    page: d
  };
  if (t.phase === "COLLECTING")
    return {
      ...t,
      dimensions: l,
      viewport: s,
      current: f
    };
  const h = l.draggables[t.critical.draggable.id], b = i || Oo({
    pageOffset: d.offset,
    draggable: h,
    draggables: l.draggables,
    droppables: l.droppables,
    previousImpact: t.impact,
    viewport: s,
    afterCritical: t.afterCritical
  }), m = Va({
    draggable: h,
    impact: b,
    previousImpact: t.impact,
    draggables: l.draggables,
    droppables: l.droppables
  });
  return {
    ...t,
    current: f,
    dimensions: {
      draggables: l.draggables,
      droppables: m
    },
    impact: b,
    viewport: s,
    scrollJumpRequest: a || null,
    forceShouldAnimate: a ? !1 : null
  };
};
function Ga(e, t) {
  return e.map((n) => t[n]);
}
var Io = (e) => {
  let {
    impact: t,
    viewport: n,
    draggables: r,
    destination: o,
    forceShouldAnimate: i
  } = e;
  const a = t.displaced, s = Ga(a.all, r), l = Qe({
    afterDragging: s,
    destination: o,
    displacedBy: t.displacedBy,
    viewport: n.frame,
    forceShouldAnimate: i,
    last: a
  });
  return {
    ...t,
    displaced: l
  };
}, Ao = (e) => {
  let {
    impact: t,
    draggable: n,
    droppable: r,
    draggables: o,
    viewport: i,
    afterCritical: a
  } = e;
  const s = Ot({
    impact: t,
    draggable: n,
    draggables: o,
    droppable: r,
    afterCritical: a
  });
  return Nn({
    pageBorderBoxCenter: s,
    draggable: n,
    viewport: i
  });
}, _o = (e) => {
  let {
    state: t,
    dimensions: n,
    viewport: r
  } = e;
  t.movementMode !== "SNAP" && (process.env.NODE_ENV, g(!1));
  const o = t.impact, i = r || t.viewport, a = n || t.dimensions, {
    draggables: s,
    droppables: l
  } = a, c = s[t.critical.draggable.id], p = ie(o);
  p || (process.env.NODE_ENV !== "production" ? g(!1, "Must be over a destination in SNAP movement mode") : g(!1));
  const u = l[p], d = Io({
    impact: o,
    viewport: i,
    destination: u,
    draggables: s
  }), f = Ao({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: s,
    viewport: i,
    afterCritical: t.afterCritical
  });
  return ze({
    impact: d,
    clientSelection: f,
    state: t,
    dimensions: a,
    viewport: i
  });
}, ka = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Po = (e) => {
  let {
    draggable: t,
    home: n,
    draggables: r,
    viewport: o
  } = e;
  const i = it(n.axis, t.displaceBy), a = Ae(n.descriptor.id, r), s = a.indexOf(t);
  s === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Expected draggable to be inside home list") : g(!1));
  const l = a.slice(s + 1), c = l.reduce((f, h) => (f[h.descriptor.id] = !0, f), {}), p = {
    inVirtualList: n.descriptor.mode === "virtual",
    displacedBy: i,
    effected: c
  };
  return {
    impact: {
      displaced: Qe({
        afterDragging: l,
        destination: n,
        displacedBy: i,
        last: null,
        viewport: o.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: i,
      at: {
        type: "REORDER",
        destination: ka(t.descriptor)
      }
    },
    afterCritical: p
  };
}, Wa = (e, t) => ({
  draggables: e.draggables,
  droppables: On(e.droppables, t)
});
const st = (e) => {
  process.env.NODE_ENV;
}, at = (e) => {
  process.env.NODE_ENV;
};
var Ua = (e) => {
  let {
    draggable: t,
    offset: n,
    initialWindowScroll: r
  } = e;
  const o = yt(t.client, n), i = Et(o, r);
  return {
    ...t,
    placeholder: {
      ...t.placeholder,
      client: o
    },
    client: o,
    page: i
  };
}, Ha = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g(!1)), t;
}, qa = (e) => {
  let {
    additions: t,
    updatedDroppables: n,
    viewport: r
  } = e;
  const o = r.scroll.diff.value;
  return t.map((i) => {
    const a = i.descriptor.droppableId, s = n[a], c = Ha(s).scroll.diff.value, p = J(o, c);
    return Ua({
      draggable: i,
      offset: p,
      initialWindowScroll: r.scroll.initial
    });
  });
}, za = (e) => {
  let {
    state: t,
    published: n
  } = e;
  st();
  const r = n.modified.map((D) => {
    const y = t.dimensions.droppables[D.droppableId];
    return Dn(y, D.scroll);
  }), o = {
    ...t.dimensions.droppables,
    ...fo(r)
  }, i = go(qa({
    additions: n.additions,
    updatedDroppables: o,
    viewport: t.viewport
  })), a = {
    ...t.dimensions.draggables,
    ...i
  };
  n.removals.forEach((D) => {
    delete a[D];
  });
  const s = {
    droppables: o,
    draggables: a
  }, l = ie(t.impact), c = l ? s.droppables[l] : null, p = s.draggables[t.critical.draggable.id], u = s.droppables[t.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = Po({
    draggable: p,
    home: u,
    draggables: a,
    viewport: t.viewport
  }), h = c && c.isCombineEnabled ? t.impact : d, b = Oo({
    pageOffset: t.current.page.offset,
    draggable: s.draggables[t.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: h,
    viewport: t.viewport,
    afterCritical: f
  });
  at();
  const m = {
    ...t,
    phase: "DRAGGING",
    impact: b,
    onLiftImpact: d,
    dimensions: s,
    afterCritical: f,
    forceShouldAnimate: !1
  };
  return t.phase === "COLLECTING" ? m : {
    ...m,
    phase: "DROP_PENDING",
    reason: t.reason,
    isWaiting: !1
  };
};
const rn = (e) => e.movementMode === "SNAP", Ft = (e, t, n) => {
  const r = Wa(e.dimensions, t);
  return !rn(e) || n ? ze({
    state: e,
    dimensions: r
  }) : _o({
    state: e,
    dimensions: r
  });
};
function Lt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Cr = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var ja = function(e, t) {
  if (e === void 0 && (e = Cr), t.type === "FLUSH")
    return {
      ...Cr,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "INITIAL_PUBLISH must come after a IDLE phase") : g(!1));
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[n.draggable.id], l = i.droppables[n.droppable.id], c = {
      selection: r,
      borderBoxCenter: s.client.borderBox.center,
      offset: Y
    }, p = {
      client: c,
      page: {
        selection: J(c.selection, o.scroll.initial),
        borderBoxCenter: J(c.selection, o.scroll.initial),
        offset: J(c.selection, o.scroll.diff.value)
      }
    }, u = wt(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: f
    } = Po({
      draggable: s,
      home: l,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: a,
      dimensions: i,
      initial: p,
      current: p,
      isWindowScrollAllowed: u,
      impact: d,
      afterCritical: f,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `Collection cannot start from phase ${e.phase}`) : g(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g(!1)), za({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g(!1));
    const {
      client: n
    } = t.payload;
    return Ee(n, e.current.client.selection) ? e : ze({
      state: e,
      clientSelection: n,
      impact: rn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Lt(e);
    Oe(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Dn(o, r);
    return Ft(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : g(!1)), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? g(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : g(!1));
    const i = {
      ...o,
      isEnabled: r
    };
    return Ft(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : g(!1)), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? g(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : g(!1));
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Ft(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot move by window in phase ${e.phase}`) : g(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? g(!1, "Window scrolling is currently not supported for fixed lists") : g(!1));
    const n = t.payload.newScroll;
    if (Ee(e.viewport.scroll.current, n))
      return Lt(e);
    const r = Eo(e.viewport, n);
    return rn(e) ? _o({
      state: e,
      viewport: r
    }) : ze({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Oe(e))
      return e;
    const n = t.payload.maxScroll;
    if (Ee(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} received while not in DRAGGING phase`) : g(!1));
    const n = Aa({
      state: e,
      type: t.type
    });
    return n ? ze({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? g(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : g(!1)), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot animate drop from phase ${e.phase}`) : g(!1)), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
const Ya = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Ka = (e) => ({
  type: "LIFT",
  payload: e
}), Xa = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Ja = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Za = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Qa = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), el = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), tl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Ro = (e) => ({
  type: "MOVE",
  payload: e
}), nl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), rl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ol = () => ({
  type: "MOVE_UP",
  payload: null
}), il = () => ({
  type: "MOVE_DOWN",
  payload: null
}), sl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), al = () => ({
  type: "MOVE_LEFT",
  payload: null
}), In = () => ({
  type: "FLUSH",
  payload: null
}), ll = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), An = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), To = (e) => ({
  type: "DROP",
  payload: e
}), cl = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Bo = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function ul(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), n = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], a = t[o - 1];
    i !== a + 1 && (n[i] = !0);
  }
  if (!Object.keys(n).length)
    return;
  const r = t.map((o) => !!n[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && U(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function dl(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ae(e.droppable.id, t.draggables);
    ul(n);
  }
}
var pl = (e) => (t) => {
  let {
    getState: n,
    dispatch: r
  } = t;
  return (o) => (i) => {
    if (i.type !== "LIFT") {
      o(i);
      return;
    }
    const {
      id: a,
      clientSelection: s,
      movementMode: l
    } = i.payload, c = n();
    c.phase === "DROP_ANIMATING" && r(An({
      completed: c.completed
    })), n().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g(!1)), r(In()), r(Ya({
      draggableId: a,
      movementMode: l
    }));
    const u = {
      draggableId: a,
      scrollOptions: {
        shouldPublishImmediately: l === "SNAP"
      }
    }, {
      critical: d,
      dimensions: f,
      viewport: h
    } = e.startPublishing(u);
    dl(d, f), r(Xa({
      critical: d,
      dimensions: f,
      clientSelection: s,
      movementMode: l,
      viewport: h
    }));
  };
}, fl = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const _n = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, et = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Mo = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ne = `${Mo.outOfTheWay}s ${_n.outOfTheWay}`, je = {
  fluid: `opacity ${Ne}`,
  snap: `transform ${Ne}, opacity ${Ne}`,
  drop: (e) => {
    const t = `${e}s ${_n.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ne}`,
  placeholder: `height ${Ne}, width ${Ne}, margin ${Ne}`
}, wr = (e) => Ee(e, Y) ? void 0 : `translate(${e.x}px, ${e.y}px)`, on = {
  moveTo: wr,
  drop: (e, t) => {
    const n = wr(e);
    if (n)
      return t ? `${n} scale(${et.scale.drop})` : n;
  }
}, {
  minDropTime: sn,
  maxDropTime: $o
} = Mo, gl = $o - sn, xr = 1500, ml = 0.6;
var hl = (e) => {
  let {
    current: t,
    destination: n,
    reason: r
  } = e;
  const o = Je(t, n);
  if (o <= 0)
    return sn;
  if (o >= xr)
    return $o;
  const i = o / xr, a = sn + gl * i, s = r === "CANCEL" ? a * ml : a;
  return Number(s.toFixed(2));
}, vl = (e) => {
  let {
    impact: t,
    draggable: n,
    dimensions: r,
    viewport: o,
    afterCritical: i
  } = e;
  const {
    draggables: a,
    droppables: s
  } = r, l = ie(t), c = l ? s[l] : null, p = s[n.descriptor.droppableId], u = Ao({
    impact: t,
    draggable: n,
    draggables: a,
    afterCritical: i,
    droppable: c || p,
    viewport: o
  });
  return oe(u, n.client.borderBox.center);
}, bl = (e) => {
  let {
    draggables: t,
    reason: n,
    lastImpact: r,
    home: o,
    viewport: i,
    onLiftImpact: a
  } = e;
  return !r.at || n !== "DROP" ? {
    impact: Io({
      draggables: t,
      impact: a,
      destination: o,
      viewport: i,
      forceShouldAnimate: !0
    }),
    didDropInsideDroppable: !1
  } : r.at.type === "REORDER" ? {
    impact: r,
    didDropInsideDroppable: !0
  } : {
    impact: {
      ...r,
      displaced: Ze
    },
    didDropInsideDroppable: !0
  };
};
const yl = (e) => {
  let {
    getState: t,
    dispatch: n
  } = e;
  return (r) => (o) => {
    if (o.type !== "DROP") {
      r(o);
      return;
    }
    const i = t(), a = o.payload.reason;
    if (i.phase === "COLLECTING") {
      n(cl({
        reason: a
      }));
      return;
    }
    if (i.phase === "IDLE")
      return;
    i.phase === "DROP_PENDING" && i.isWaiting && (process.env.NODE_ENV !== "production" ? g(!1, "A DROP action occurred while DROP_PENDING and still waiting") : g(!1)), i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot drop in phase: ${i.phase}`) : g(!1));
    const l = i.critical, c = i.dimensions, p = c.draggables[i.critical.draggable.id], {
      impact: u,
      didDropInsideDroppable: d
    } = bl({
      reason: a,
      lastImpact: i.impact,
      afterCritical: i.afterCritical,
      onLiftImpact: i.onLiftImpact,
      home: i.dimensions.droppables[i.critical.droppable.id],
      viewport: i.viewport,
      draggables: i.dimensions.draggables
    }), f = d ? Sn(u) : null, h = d ? xt(u) : null, b = {
      index: l.draggable.index,
      droppableId: l.droppable.id
    }, m = {
      draggableId: p.descriptor.id,
      type: p.descriptor.type,
      source: b,
      reason: a,
      mode: i.movementMode,
      destination: f,
      combine: h
    }, S = vl({
      impact: u,
      draggable: p,
      dimensions: c,
      viewport: i.viewport,
      afterCritical: i.afterCritical
    }), D = {
      critical: i.critical,
      afterCritical: i.afterCritical,
      result: m,
      impact: u
    };
    if (!(!Ee(i.current.client.offset, S) || !!m.combine)) {
      n(An({
        completed: D
      }));
      return;
    }
    const E = hl({
      current: i.current.client.offset,
      destination: S,
      reason: a
    });
    n(ll({
      newHomeClientOffset: S,
      dropDuration: E,
      completed: D
    }));
  };
};
var El = yl, Fo = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Dl(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function Sl(e) {
  let {
    onWindowScroll: t
  } = e;
  function n() {
    t(Fo());
  }
  const r = Ke(n), o = Dl(r);
  let i = ye;
  function a() {
    return i !== ye;
  }
  function s() {
    a() && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start scroll listener when already active") : g(!1)), i = ce(window, [o]);
  }
  function l() {
    a() || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop scroll listener when not active") : g(!1)), r.cancel(), i(), i = ye;
  }
  return {
    start: s,
    stop: l,
    isActive: a
  };
}
const Cl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", wl = (e) => {
  const t = Sl({
    onWindowScroll: (n) => {
      e.dispatch(nl({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Cl(r) && t.stop(), n(r);
  };
};
var xl = wl, Nl = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && U("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && U(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Ol = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find timer") : g(!1));
    const [a] = e.splice(i, 1);
    a.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), a = {
        timerId: i,
        callback: o
      };
      e.push(a);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((i) => {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
};
const Il = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Al = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, _l = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, ke = (e, t) => {
  st(), t(), at();
}, pt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Vt(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Nl(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var Pl = (e, t) => {
  const n = Ol();
  let r = null;
  const o = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : g(!1)), ke("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: u,
        mode: d
      });
    });
  }, i = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g(!1)), ke("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(pt(u, d));
    });
  }, a = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g(!1));
    const f = pt(u, d);
    r = {
      mode: d,
      lastCritical: u,
      lastLocation: f.source,
      lastCombine: null
    }, n.add(() => {
      ke("onDragStart", () => Vt(e().onDragStart, f, t, vt.onDragStart));
    });
  }, s = (u, d) => {
    const f = Sn(d), h = xt(d);
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g(!1));
    const b = !_l(u, r.lastCritical);
    b && (r.lastCritical = u);
    const m = !Il(r.lastLocation, f);
    m && (r.lastLocation = f);
    const S = !Al(r.lastCombine, h);
    if (S && (r.lastCombine = h), !b && !m && !S)
      return;
    const D = {
      ...pt(u, r.mode),
      combine: h,
      destination: f
    };
    n.add(() => {
      ke("onDragUpdate", () => Vt(e().onDragUpdate, D, t, vt.onDragUpdate));
    });
  }, l = () => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Can only flush responders while dragging") : g(!1)), n.flush();
  }, c = (u) => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : g(!1)), r = null, ke("onDragEnd", () => Vt(e().onDragEnd, u, t, vt.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: a,
    update: s,
    flush: l,
    drop: c,
    abort: () => {
      if (!r)
        return;
      const u = {
        ...pt(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      c(u);
    }
  };
}, Rl = (e, t) => {
  const n = Pl(e, t);
  return (r) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const s = i.payload.critical;
      n.beforeStart(s, i.payload.movementMode), o(i), n.start(s, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const s = i.payload.completed.result;
      n.flush(), o(i), n.drop(s);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      n.abort();
      return;
    }
    const a = r.getState();
    a.phase === "DRAGGING" && n.update(a.critical, a.impact);
  };
};
const Tl = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g(!1)), e.dispatch(An({
    completed: r.completed
  }));
};
var Bl = Tl;
const Ml = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && r(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Bo());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = ce(window, [a]);
    });
  };
};
var $l = Ml, Fl = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, Ll = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (r.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (r.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (r.type === "DROP_COMPLETE") {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Vl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Gl = (e) => (t) => (n) => (r) => {
  if (Vl(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : g(!1)), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const kl = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(To({
    reason: r.reason
  })));
};
var Wl = kl;
const Ul = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Di;
var Hl = (e) => {
  let {
    dimensionMarshal: t,
    focusMarshal: n,
    styleMarshal: r,
    getResponders: o,
    announce: i,
    autoScroller: a
  } = e;
  return Si(ja, Ul(Ci(fl(r), Fl(t), pl(t), El, Bl, $l, Wl, Gl(a), xl, Ll(n), Rl(o, i))));
};
const Gt = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function ql(e) {
  let {
    registry: t,
    callbacks: n
  } = e, r = Gt(), o = null;
  const i = () => {
    o || (n.collectionStarting(), o = requestAnimationFrame(() => {
      o = null, st();
      const {
        additions: c,
        removals: p,
        modified: u
      } = r, d = Object.keys(c).map((b) => t.draggable.getById(b).getDimension(Y)).sort((b, m) => b.descriptor.index - m.descriptor.index), f = Object.keys(u).map((b) => {
        const S = t.droppable.getById(b).callbacks.getScrollWhileDragging();
        return {
          droppableId: b,
          scroll: S
        };
      }), h = {
        additions: d,
        removals: Object.keys(p),
        modified: f
      };
      r = Gt(), at(), n.publish(h);
    }));
  };
  return {
    add: (c) => {
      const p = c.descriptor.id;
      r.additions[p] = c, r.modified[c.descriptor.droppableId] = !0, r.removals[p] && delete r.removals[p], i();
    },
    remove: (c) => {
      const p = c.descriptor;
      r.removals[p.id] = !0, r.modified[p.droppableId] = !0, r.additions[p.id] && delete r.additions[p.id], i();
    },
    stop: () => {
      o && (cancelAnimationFrame(o), o = null, r = Gt());
    }
  };
}
var Lo = (e) => {
  let {
    scrollHeight: t,
    scrollWidth: n,
    height: r,
    width: o
  } = e;
  const i = oe({
    x: n,
    y: t
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, i.x),
    y: Math.max(0, i.y)
  };
}, Vo = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.documentElement") : g(!1)), e;
}, Go = () => {
  const e = Vo();
  return Lo({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, zl = () => {
  const e = Fo(), t = Go(), n = e.y, r = e.x, o = Vo(), i = o.clientWidth, a = o.clientHeight, s = r + i, l = n + a;
  return {
    frame: fe({
      top: n,
      left: r,
      right: s,
      bottom: l
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: Y,
        displacement: Y
      }
    }
  };
}, jl = (e) => {
  let {
    critical: t,
    scrollOptions: n,
    registry: r
  } = e;
  st();
  const o = zl(), i = o.scroll.current, a = t.droppable, s = r.droppable.getAllByType(a.type).map((u) => u.callbacks.getDimensionAndWatchScroll(i, n)), l = r.draggable.getAllByType(t.draggable.type).map((u) => u.getDimension(i)), c = {
    draggables: go(l),
    droppables: fo(s)
  };
  return at(), {
    dimensions: c,
    critical: t,
    viewport: o
  };
};
function Nr(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && U(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Yl = (e, t) => {
  let n = null;
  const r = ql({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, f) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : g(!1)), n && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: f
    });
  }, i = (d, f) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : g(!1)), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: f
    }));
  }, a = (d, f) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : g(!1)), t.updateDroppableScroll({
      id: d,
      newScroll: f
    }));
  }, s = (d, f) => {
    n && e.droppable.getById(d).callbacks.scroll(f);
  }, l = () => {
    if (!n)
      return;
    r.stop();
    const d = n.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((f) => f.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, c = (d) => {
    n || (process.env.NODE_ENV !== "production" ? g(!1, "Should only be subscribed when a collection is occurring") : g(!1));
    const f = n.critical.draggable;
    d.type === "ADDITION" && Nr(e, f, d.value) && r.add(d.value), d.type === "REMOVAL" && Nr(e, f, d.value) && r.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start capturing critical dimensions as there is already a collection") : g(!1));
      const f = e.draggable.getById(d.draggableId), h = e.droppable.getById(f.descriptor.droppableId), b = {
        draggable: f.descriptor,
        droppable: h.descriptor
      }, m = e.subscribe(c);
      return n = {
        critical: b,
        unsubscribe: m
      }, jl({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: l
  };
}, ko = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Kl = (e) => {
  window.scrollBy(e.x, e.y);
};
const Xl = j((e) => wt(e).filter((t) => !(!t.isEnabled || !t.frame))), Jl = (e, t) => Xl(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g(!1)), wo(r.frame.pageMarginBox)(e))) || null;
var Zl = (e) => {
  let {
    center: t,
    destination: n,
    droppables: r
  } = e;
  if (n) {
    const i = r[n];
    return i.frame ? i : null;
  }
  return Jl(t, r);
};
const tt = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var Ql = function(e, t, n) {
  n === void 0 && (n = () => tt);
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Wo = (e) => {
  let {
    startOfRange: t,
    endOfRange: n,
    current: r
  } = e;
  const o = n - t;
  return o === 0 ? (process.env.NODE_ENV !== "production" && U(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - t) / o;
}, Pn = 1, ec = function(e, t, n) {
  n === void 0 && (n = () => tt);
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Pn;
  const i = 1 - Wo({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = r.maxPixelScroll * r.ease(i);
  return Math.ceil(a);
}, tc = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, a = t, s = i, c = Date.now() - a;
  if (c >= i)
    return e;
  if (c < o)
    return Pn;
  const p = Wo({
    startOfRange: o,
    endOfRange: s,
    current: c
  }), u = e * r.ease(p);
  return Math.ceil(u);
}, Or = (e) => {
  let {
    distanceToEdge: t,
    thresholds: n,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  } = e;
  const a = ec(t, n, i);
  return a === 0 ? 0 : o ? Math.max(tc(a, r, i), Pn) : a;
}, Ir = (e) => {
  let {
    container: t,
    distanceToEdges: n,
    dragStartTime: r,
    axis: o,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  } = e;
  const s = Ql(t, o, a);
  return n[o.end] < n[o.start] ? Or({
    distanceToEdge: n[o.end],
    thresholds: s,
    dragStartTime: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  }) : -1 * Or({
    distanceToEdge: n[o.start],
    thresholds: s,
    dragStartTime: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  });
}, nc = (e) => {
  let {
    container: t,
    subject: n,
    proposedScroll: r
  } = e;
  const o = n.height > t.height, i = n.width > t.width;
  return !i && !o ? r : i && o ? null : {
    x: i ? 0 : r.x,
    y: o ? 0 : r.y
  };
};
const rc = po((e) => e === 0 ? 0 : e);
var Uo = (e) => {
  let {
    dragStartTime: t,
    container: n,
    subject: r,
    center: o,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  } = e;
  const s = {
    top: o.y - n.top,
    right: n.right - o.x,
    bottom: n.bottom - o.y,
    left: o.x - n.left
  }, l = Ir({
    container: n,
    distanceToEdges: s,
    dragStartTime: t,
    axis: Cn,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  }), c = Ir({
    container: n,
    distanceToEdges: s,
    dragStartTime: t,
    axis: vo,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  }), p = rc({
    x: c,
    y: l
  });
  if (Ee(p, Y))
    return null;
  const u = nc({
    container: n,
    subject: r,
    proposedScroll: p
  });
  return u ? Ee(u, Y) ? null : u : null;
};
const oc = po((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Rn = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return (t) => {
    let {
      current: n,
      max: r,
      change: o
    } = t;
    const i = J(n, o), a = {
      x: e(i.x, r.x),
      y: e(i.y, r.y)
    };
    return Ee(a, Y) ? null : a;
  };
})(), Ho = (e) => {
  let {
    max: t,
    current: n,
    change: r
  } = e;
  const o = {
    x: Math.max(n.x, t.x),
    y: Math.max(n.y, t.y)
  }, i = oc(r), a = Rn({
    max: o,
    current: n,
    change: i
  });
  return !a || i.x !== 0 && a.x === 0 || i.y !== 0 && a.y === 0;
}, Tn = (e, t) => Ho({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), ic = (e, t) => {
  if (!Tn(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Rn({
    current: r,
    max: n,
    change: t
  });
}, Bn = (e, t) => {
  const n = e.frame;
  return n ? Ho({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, sc = (e, t) => {
  const n = e.frame;
  return !n || !Bn(e, t) ? null : Rn({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var ac = (e) => {
  let {
    viewport: t,
    subject: n,
    center: r,
    dragStartTime: o,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  } = e;
  const s = Uo({
    dragStartTime: o,
    container: t.frame,
    subject: n,
    center: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  });
  return s && Tn(t, s) ? s : null;
}, lc = (e) => {
  let {
    droppable: t,
    subject: n,
    center: r,
    dragStartTime: o,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  } = e;
  const s = t.frame;
  if (!s)
    return null;
  const l = Uo({
    dragStartTime: o,
    container: s.pageMarginBox,
    subject: n,
    center: r,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: a
  });
  return l && Bn(t, l) ? l : null;
}, Ar = (e) => {
  let {
    state: t,
    dragStartTime: n,
    shouldUseTimeDampening: r,
    scrollWindow: o,
    scrollDroppable: i,
    getAutoScrollerOptions: a
  } = e;
  const s = t.current.page.borderBoxCenter, c = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
  if (t.isWindowScrollAllowed) {
    const d = t.viewport, f = ac({
      dragStartTime: n,
      viewport: d,
      subject: c,
      center: s,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: a
    });
    if (f) {
      o(f);
      return;
    }
  }
  const p = Zl({
    center: s,
    destination: ie(t.impact),
    droppables: t.dimensions.droppables
  });
  if (!p)
    return;
  const u = lc({
    dragStartTime: n,
    droppable: p,
    subject: c,
    center: s,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: a
  });
  u && i(p.descriptor.id, u);
}, cc = (e) => {
  let {
    scrollWindow: t,
    scrollDroppable: n,
    getAutoScrollerOptions: r = () => tt
  } = e;
  const o = Ke(t), i = Ke(n);
  let a = null;
  const s = (p) => {
    a || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fluid scroll if not dragging") : g(!1));
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = a;
    Ar({
      state: p,
      scrollWindow: o,
      scrollDroppable: i,
      dragStartTime: d,
      shouldUseTimeDampening: u,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (p) => {
      st(), a && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start auto scrolling when already started") : g(!1));
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      Ar({
        state: p,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: r
      }), a = {
        dragStartTime: u,
        shouldUseTimeDampening: d
      }, at(), d && s(p);
    },
    stop: () => {
      a && (o.cancel(), i.cancel(), a = null);
    },
    scroll: s
  };
}, uc = (e) => {
  let {
    move: t,
    scrollDroppable: n,
    scrollWindow: r
  } = e;
  const o = (l, c) => {
    const p = J(l.current.client.selection, c);
    t({
      client: p
    });
  }, i = (l, c) => {
    if (!Bn(l, c))
      return c;
    const p = sc(l, c);
    if (!p)
      return n(l.descriptor.id, c), null;
    const u = oe(c, p);
    return n(l.descriptor.id, u), oe(c, u);
  }, a = (l, c, p) => {
    if (!l || !Tn(c, p))
      return p;
    const u = ic(c, p);
    if (!u)
      return r(p), null;
    const d = oe(p, u);
    return r(d), oe(p, d);
  };
  return (l) => {
    const c = l.scrollJumpRequest;
    if (!c)
      return;
    const p = ie(l.impact);
    p || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g(!1));
    const u = i(l.dimensions.droppables[p], c);
    if (!u)
      return;
    const d = l.viewport, f = a(l.isWindowScrollAllowed, d, u);
    f && o(l, f);
  };
}, dc = (e) => {
  let {
    scrollDroppable: t,
    scrollWindow: n,
    move: r,
    getAutoScrollerOptions: o
  } = e;
  const i = cc({
    scrollWindow: n,
    scrollDroppable: t,
    getAutoScrollerOptions: o
  }), a = uc({
    move: r,
    scrollWindow: n,
    scrollDroppable: t
  });
  return {
    scroll: (c) => {
      if (!(o().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          i.scroll(c);
          return;
        }
        c.scrollJumpRequest && a(c);
      }
    },
    start: i.start,
    stop: i.stop
  };
};
const $e = "data-rfd", Fe = (() => {
  const e = `${$e}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), an = (() => {
  const e = `${$e}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), pc = (() => {
  const e = `${$e}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), _r = {
  contextId: `${$e}-scroll-container-context-id`
}, fc = (e) => (t) => `[${t}="${e}"]`, We = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), gc = "pointer-events: none;";
var mc = (e) => {
  const t = fc(e), n = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Fe.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: gc,
        dropAnimating: s
      }
    };
  })(), r = (() => {
    const s = `
      transition: ${je.outOfTheWay};
    `;
    return {
      selector: t(an.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(pc.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, a = [r, n, o, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: We(a, "always"),
    resting: We(a, "resting"),
    dragging: We(a, "dragging"),
    dropAnimating: We(a, "dropAnimating"),
    userCancel: We(a, "userCancel")
  };
};
const hc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? w.useLayoutEffect : w.useEffect;
var se = hc;
const kt = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g(!1)), e;
}, Pr = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function vc(e, t) {
  const n = F(() => mc(e), [e]), r = w.useRef(null), o = w.useRef(null), i = P(j((u) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g(!1)), d.textContent = u;
  }), []), a = P((u) => {
    const d = r.current;
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g(!1)), d.textContent = u;
  }, []);
  se(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g(!1));
    const u = Pr(t), d = Pr(t);
    return r.current = u, o.current = d, u.setAttribute(`${$e}-always`, e), d.setAttribute(`${$e}-dynamic`, e), kt().appendChild(u), kt().appendChild(d), a(n.always), i(n.resting), () => {
      const f = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g(!1)), kt().removeChild(b), h.current = null;
      };
      f(r), f(o);
    };
  }, [t, a, i, n.always, n.resting, e]);
  const s = P(() => i(n.dragging), [i, n.dragging]), l = P((u) => {
    if (u === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), c = P(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return F(() => ({
    dragging: s,
    dropping: l,
    resting: c
  }), [s, l, c]);
}
function qo(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var zo = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) || window;
};
function lt(e) {
  return e instanceof zo(e).HTMLElement;
}
function jo(e, t) {
  const n = `[${Fe.contextId}="${e}"]`, r = qo(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && U(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(Fe.draggableId) === t);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && U(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function bc(e) {
  const t = w.useRef({}), n = w.useRef(null), r = w.useRef(null), o = w.useRef(!1), i = P(function(d, f) {
    const h = {
      id: d,
      focus: f
    };
    return t.current[d] = h, function() {
      const m = t.current;
      m[d] !== h && delete m[d];
    };
  }, []), a = P(function(d) {
    const f = jo(e, d);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = P(function(d, f) {
    n.current === d && (n.current = f);
  }, []), l = P(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const d = n.current;
      d && a(d);
    }));
  }, [a]), c = P(function(d) {
    n.current = null;
    const f = document.activeElement;
    f && f.getAttribute(Fe.draggableId) === d && (n.current = d);
  }, []);
  return se(() => (o.current = !0, function() {
    o.current = !1;
    const d = r.current;
    d && cancelAnimationFrame(d);
  }), []), F(() => ({
    register: i,
    tryRecordFocus: c,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, c, l, s]);
}
function yc() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(u) {
    return t.push(u), function() {
      const f = t.indexOf(u);
      f !== -1 && t.splice(f, 1);
    };
  }
  function r(u) {
    t.length && t.forEach((d) => d(u));
  }
  function o(u) {
    return e.draggables[u] || null;
  }
  function i(u) {
    const d = o(u);
    return d || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find draggable entry with id [${u}]`) : g(!1)), d;
  }
  const a = {
    register: (u) => {
      e.draggables[u.descriptor.id] = u, r({
        type: "ADDITION",
        value: u
      });
    },
    update: (u, d) => {
      const f = e.draggables[d.descriptor.id];
      f && f.uniqueId === u.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[u.descriptor.id] = u);
    },
    unregister: (u) => {
      const d = u.descriptor.id, f = o(d);
      f && u.uniqueId === f.uniqueId && (delete e.draggables[d], e.droppables[u.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: u
      }));
    },
    getById: i,
    findById: o,
    exists: (u) => !!o(u),
    getAllByType: (u) => Object.values(e.draggables).filter((d) => d.descriptor.type === u)
  };
  function s(u) {
    return e.droppables[u] || null;
  }
  function l(u) {
    const d = s(u);
    return d || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find droppable entry with id [${u}]`) : g(!1)), d;
  }
  const c = {
    register: (u) => {
      e.droppables[u.descriptor.id] = u;
    },
    unregister: (u) => {
      const d = s(u.descriptor.id);
      d && u.uniqueId === d.uniqueId && delete e.droppables[u.descriptor.id];
    },
    getById: l,
    findById: s,
    exists: (u) => !!s(u),
    getAllByType: (u) => Object.values(e.droppables).filter((d) => d.descriptor.type === u)
  };
  function p() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: c,
    subscribe: n,
    clean: p
  };
}
function Ec() {
  const e = F(yc, []);
  return w.useEffect(() => function() {
    I.version.startsWith("16") || I.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Mn = I.createContext(null), nt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g(!1)), e;
};
const Dc = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var Sc = Dc;
const Cc = (e) => `rfd-announcement-${e}`;
function wc(e) {
  const t = F(() => Cc(e), [e]), n = w.useRef(null);
  return w.useEffect(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Be(i.style, Sc), nt().appendChild(i), function() {
      setTimeout(function() {
        const l = nt();
        l.contains(i) && l.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), P((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && U(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let xc = 0;
const Yo = {
  separator: "::"
};
function Nc(e, t) {
  return t === void 0 && (t = Yo), F(() => `${e}${t.separator}${xc++}`, [t.separator, e]);
}
function Oc(e, t) {
  t === void 0 && (t = Yo);
  const n = I.useId();
  return F(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var $n = "useId" in I ? Oc : Nc;
function Ic(e) {
  let {
    contextId: t,
    uniqueId: n
  } = e;
  return `rfd-hidden-text-${t}-${n}`;
}
function Ac(e) {
  let {
    contextId: t,
    text: n
  } = e;
  const r = $n("hidden-text", {
    separator: "-"
  }), o = F(() => Ic({
    contextId: t,
    uniqueId: r
  }), [r, t]);
  return w.useEffect(function() {
    const a = document.createElement("div");
    return a.id = o, a.textContent = n, a.style.display = "none", nt().appendChild(a), function() {
      const l = nt();
      l.contains(a) && l.removeChild(a);
    };
  }, [o, n]), o;
}
var It = I.createContext(null), _c = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Pc = /(\d+)\.(\d+)\.(\d+)/, Rr = (e) => {
  const t = Pc.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Rc = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Tc = (e, t) => {
  const n = Rr(e), r = Rr(t);
  Rc(n, r) || process.env.NODE_ENV !== "production" && U(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Wt = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Bc = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && U(`
      No <!doctype html> found.

      ${Wt}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> found: (${t.name})

      ${Wt}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Wt}
    `);
};
function Fn(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ct(e, t) {
  Fn(() => {
    w.useEffect(() => {
      try {
        e();
      } catch (n) {
        tn(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Mc() {
  ct(() => {
    Tc(_c.react, I.version), Bc(document);
  }, []);
}
function Ln(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }), t;
}
function $c() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(a) {
    return a === e;
  }
  function r(a) {
    e && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot claim lock as it is already claimed") : g(!1));
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot release lock when there is no lock") : g(!1)), e = null;
  }
  function i() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: i
  };
}
function rt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Fc = 9, Lc = 13, Vn = 27, Ko = 32, Vc = 33, Gc = 34, kc = 35, Wc = 36, Uc = 37, Hc = 38, qc = 39, zc = 40, jc = {
  [Lc]: !0,
  [Fc]: !0
};
var Xo = (e) => {
  jc[e.keyCode] && e.preventDefault();
};
const Yc = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var At = Yc;
const Jo = 0, Tr = 5;
function Kc(e, t) {
  return Math.abs(t.x - e.x) >= Tr || Math.abs(t.y - e.y) >= Tr;
}
const Br = {
  type: "IDLE"
};
function Xc(e) {
  let {
    cancel: t,
    completed: n,
    getPhase: r,
    setPhase: o
  } = e;
  return [{
    eventName: "mousemove",
    fn: (i) => {
      const {
        button: a,
        clientX: s,
        clientY: l
      } = i;
      if (a !== Jo)
        return;
      const c = {
        x: s,
        y: l
      }, p = r();
      if (p.type === "DRAGGING") {
        i.preventDefault(), p.actions.move(c);
        return;
      }
      p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot be IDLE") : g(!1));
      const u = p.point;
      if (!Kc(u, c))
        return;
      i.preventDefault();
      const d = p.actions.fluidLift(c);
      o({
        type: "DRAGGING",
        actions: d
      });
    }
  }, {
    eventName: "mouseup",
    fn: (i) => {
      const a = r();
      if (a.type !== "DRAGGING") {
        t();
        return;
      }
      i.preventDefault(), a.actions.drop({
        shouldBlockNextClick: !0
      }), n();
    }
  }, {
    eventName: "mousedown",
    fn: (i) => {
      r().type === "DRAGGING" && i.preventDefault(), t();
    }
  }, {
    eventName: "keydown",
    fn: (i) => {
      if (r().type === "PENDING") {
        t();
        return;
      }
      if (i.keyCode === Vn) {
        i.preventDefault(), t();
        return;
      }
      Xo(i);
    }
  }, {
    eventName: "resize",
    fn: t
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      r().type === "PENDING" && t();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (i) => {
      const a = r();
      if (a.type === "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase") : g(!1)), a.actions.shouldRespectForcePress()) {
        t();
        return;
      }
      i.preventDefault();
    }
  }, {
    eventName: At,
    fn: t
  }];
}
function Jc(e) {
  const t = w.useRef(Br), n = w.useRef(ye), r = F(() => ({
    eventName: "mousedown",
    fn: function(u) {
      if (u.defaultPrevented || u.button !== Jo || u.ctrlKey || u.metaKey || u.shiftKey || u.altKey)
        return;
      const d = e.findClosestDraggableId(u);
      if (!d)
        return;
      const f = e.tryGetLock(d, a, {
        sourceEvent: u
      });
      if (!f)
        return;
      u.preventDefault();
      const h = {
        x: u.clientX,
        y: u.clientY
      };
      n.current(), c(f, h);
    }
  }), [e]), o = F(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (p) => {
      if (p.defaultPrevented)
        return;
      const u = e.findClosestDraggableId(p);
      if (!u)
        return;
      const d = e.findOptionsForDraggable(u);
      d && (d.shouldRespectForcePress || e.canGetLock(u) && p.preventDefault());
    }
  }), [e]), i = P(function() {
    const u = {
      passive: !1,
      capture: !0
    };
    n.current = ce(window, [o, r], u);
  }, [o, r]), a = P(() => {
    t.current.type !== "IDLE" && (t.current = Br, n.current(), i());
  }, [i]), s = P(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), l = P(function() {
    const u = {
      capture: !0,
      passive: !1
    }, d = Xc({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    n.current = ce(window, d, u);
  }, [s, a]), c = P(function(u, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: u
    }, l();
  }, [l]);
  se(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function Zc() {
}
const Qc = {
  [Gc]: !0,
  [Vc]: !0,
  [Wc]: !0,
  [kc]: !0
};
function eu(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Vn) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Ko) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === zc) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Hc) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === qc) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Uc) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Qc[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Xo(o);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: At,
    fn: n
  }];
}
function tu(e) {
  const t = w.useRef(Zc), n = F(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Ko)
        return;
      const a = e.findClosestDraggableId(i);
      if (!a)
        return;
      const s = e.tryGetLock(a, p, {
        sourceEvent: i
      });
      if (!s)
        return;
      i.preventDefault();
      let l = !0;
      const c = s.snapLift();
      t.current();
      function p() {
        l || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop capturing a keyboard drag when not capturing") : g(!1)), l = !1, t.current(), r();
      }
      t.current = ce(window, eu(c, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = P(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = ce(window, [n], i);
  }, [n]);
  se(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Ut = {
  type: "IDLE"
}, nu = 120, ru = 0.15;
function ou(e) {
  let {
    cancel: t,
    getPhase: n
  } = e;
  return [{
    eventName: "orientationchange",
    fn: t
  }, {
    eventName: "resize",
    fn: t
  }, {
    eventName: "contextmenu",
    fn: (r) => {
      r.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        t();
        return;
      }
      r.keyCode === Vn && r.preventDefault(), t();
    }
  }, {
    eventName: At,
    fn: t
  }];
}
function iu(e) {
  let {
    cancel: t,
    completed: n,
    getPhase: r
  } = e;
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (o) => {
      const i = r();
      if (i.type !== "DRAGGING") {
        t();
        return;
      }
      i.hasMoved = !0;
      const {
        clientX: a,
        clientY: s
      } = o.touches[0], l = {
        x: a,
        y: s
      };
      o.preventDefault(), i.actions.move(l);
    }
  }, {
    eventName: "touchend",
    fn: (o) => {
      const i = r();
      if (i.type !== "DRAGGING") {
        t();
        return;
      }
      o.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), n();
    }
  }, {
    eventName: "touchcancel",
    fn: (o) => {
      if (r().type !== "DRAGGING") {
        t();
        return;
      }
      o.preventDefault(), t();
    }
  }, {
    eventName: "touchforcechange",
    fn: (o) => {
      const i = r();
      i.type === "IDLE" && (process.env.NODE_ENV, g(!1));
      const a = o.touches[0];
      if (!a || !(a.force >= ru))
        return;
      const l = i.actions.shouldRespectForcePress();
      if (i.type === "PENDING") {
        l && t();
        return;
      }
      if (l) {
        if (i.hasMoved) {
          o.preventDefault();
          return;
        }
        t();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: At,
    fn: t
  }];
}
function su(e) {
  const t = w.useRef(Ut), n = w.useRef(ye), r = P(function() {
    return t.current;
  }, []), o = P(function(f) {
    t.current = f;
  }, []), i = F(() => ({
    eventName: "touchstart",
    fn: function(f) {
      if (f.defaultPrevented)
        return;
      const h = e.findClosestDraggableId(f);
      if (!h)
        return;
      const b = e.tryGetLock(h, s, {
        sourceEvent: f
      });
      if (!b)
        return;
      const m = f.touches[0], {
        clientX: S,
        clientY: D
      } = m, y = {
        x: S,
        y: D
      };
      n.current(), u(b, y);
    }
  }), [e]), a = P(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    n.current = ce(window, [i], f);
  }, [i]), s = P(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Ut), n.current(), a());
  }, [a, o]), l = P(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), c = P(function() {
    const f = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: s,
      getPhase: r
    }, b = ce(window, iu(h), f), m = ce(window, ou(h), f);
    n.current = function() {
      b(), m();
    };
  }, [l, r, s]), p = P(function() {
    const f = r();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, `Cannot start dragging from phase ${f.type}`) : g(!1));
    const h = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [r, o]), u = P(function(f, h) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g(!1));
    const b = setTimeout(p, nu);
    o({
      type: "PENDING",
      point: h,
      actions: f,
      longPressTimerId: b
    }), c();
  }, [c, r, o, p]);
  se(function() {
    return a(), function() {
      n.current();
      const h = r();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(Ut));
    };
  }, [r, a, o]), se(function() {
    return ce(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function au(e) {
  Fn(() => {
    const t = Ln(e);
    ct(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const lu = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Zo(e, t) {
  if (t == null)
    return !1;
  if (lu.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Zo(e, t.parentElement);
}
function cu(e, t) {
  const n = t.target;
  return lt(n) ? Zo(e, n) : !1;
}
var uu = (e) => fe(e.getBoundingClientRect()).center;
function du(e) {
  return e instanceof zo(e).Element;
}
const pu = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Qo(e, t) {
  return e == null ? null : e[pu](t) ? e : Qo(e.parentElement, t);
}
function fu(e, t) {
  return e.closest ? e.closest(t) : Qo(e, t);
}
function gu(e) {
  return `[${Fe.contextId}="${e}"]`;
}
function mu(e, t) {
  const n = t.target;
  if (!du(n))
    return process.env.NODE_ENV !== "production" && U("event.target must be a Element"), null;
  const r = gu(e), o = fu(n, r);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle must be a HTMLElement"), null) : null;
}
function hu(e, t) {
  const n = mu(e, t);
  return n ? n.getAttribute(Fe.draggableId) : null;
}
function vu(e, t) {
  const n = `[${an.contextId}="${e}"]`, o = qo(document, n).find((i) => i.getAttribute(an.id) === t);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("Draggable element is not a HTMLElement"), null) : null;
}
function bu(e) {
  e.preventDefault();
}
function ft(e) {
  let {
    expected: t,
    phase: n,
    isLockActive: r,
    shouldWarn: o
  } = e;
  return r() ? t !== n ? (o && process.env.NODE_ENV !== "production" && U(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${t}
        You called an action from outdated phase: ${n}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (o && process.env.NODE_ENV !== "production" && U(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function ei(e) {
  let {
    lockAPI: t,
    store: n,
    registry: r,
    draggableId: o
  } = e;
  if (t.isClaimed())
    return !1;
  const i = r.draggable.findById(o);
  return i ? !(!i.options.isEnabled || !ko(n.getState(), o)) : (process.env.NODE_ENV !== "production" && U(`Unable to find draggable with id: ${o}`), !1);
}
function yu(e) {
  let {
    lockAPI: t,
    contextId: n,
    store: r,
    registry: o,
    draggableId: i,
    forceSensorStop: a,
    sourceEvent: s
  } = e;
  if (!ei({
    lockAPI: t,
    store: r,
    registry: o,
    draggableId: i
  }))
    return null;
  const c = o.draggable.getById(i), p = vu(n, c.descriptor.id);
  if (!p)
    return process.env.NODE_ENV !== "production" && U(`Unable to find draggable element with id: ${i}`), null;
  if (s && !c.options.canDragInteractiveElements && cu(p, s))
    return null;
  const u = t.claim(a || ye);
  let d = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function h() {
    return t.isActive(u);
  }
  function b(C, N) {
    ft({
      expected: C,
      phase: d,
      isLockActive: h,
      shouldWarn: !0
    }) && r.dispatch(N());
  }
  const m = b.bind(null, "DRAGGING");
  function S(C) {
    function N() {
      t.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (N(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${d}`) : g(!1)), r.dispatch(Ka(C.liftActionArgs)), d = "DRAGGING";
    function _(x, O) {
      if (O === void 0 && (O = {
        shouldBlockNextClick: !1
      }), C.cleanup(), O.shouldBlockNextClick) {
        const B = ce(window, [{
          eventName: "click",
          fn: bu,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(B);
      }
      N(), r.dispatch(To({
        reason: x
      }));
    }
    return {
      isActive: () => ft({
        expected: "DRAGGING",
        phase: d,
        isLockActive: h,
        shouldWarn: !1
      }),
      shouldRespectForcePress: f,
      drop: (x) => _("DROP", x),
      cancel: (x) => _("CANCEL", x),
      ...C.actions
    };
  }
  function D(C) {
    const N = Ke((x) => {
      m(() => Ro({
        client: x
      }));
    });
    return {
      ...S({
        liftActionArgs: {
          id: i,
          clientSelection: C,
          movementMode: "FLUID"
        },
        cleanup: () => N.cancel(),
        actions: {
          move: N
        }
      }),
      move: N
    };
  }
  function y() {
    const C = {
      moveUp: () => m(ol),
      moveRight: () => m(sl),
      moveDown: () => m(il),
      moveLeft: () => m(al)
    };
    return S({
      liftActionArgs: {
        id: i,
        clientSelection: uu(p),
        movementMode: "SNAP"
      },
      cleanup: ye,
      actions: C
    });
  }
  function E() {
    ft({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: h,
      shouldWarn: !0
    }) && t.release();
  }
  return {
    isActive: () => ft({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: h,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: D,
    snapLift: y,
    abort: E
  };
}
const Eu = [Jc, tu, su];
function Du(e) {
  let {
    contextId: t,
    store: n,
    registry: r,
    customSensors: o,
    enableDefaultSensors: i
  } = e;
  const a = [...i ? Eu : [], ...o || []], s = w.useState(() => $c())[0], l = P(function(S, D) {
    rt(S) && !rt(D) && s.tryAbandon();
  }, [s]);
  se(function() {
    let S = n.getState();
    return n.subscribe(() => {
      const y = n.getState();
      l(S, y), S = y;
    });
  }, [s, n, l]), se(() => s.tryAbandon, [s.tryAbandon]);
  const c = P((m) => ei({
    lockAPI: s,
    registry: r,
    store: n,
    draggableId: m
  }), [s, r, n]), p = P((m, S, D) => yu({
    lockAPI: s,
    registry: r,
    contextId: t,
    store: n,
    draggableId: m,
    forceSensorStop: S || null,
    sourceEvent: D && D.sourceEvent ? D.sourceEvent : null
  }), [t, s, r, n]), u = P((m) => hu(t, m), [t]), d = P((m) => {
    const S = r.draggable.findById(m);
    return S ? S.options : null;
  }, [r.draggable]), f = P(function() {
    s.isClaimed() && (s.tryAbandon(), n.getState().phase !== "IDLE" && n.dispatch(In()));
  }, [s, n]), h = P(() => s.isClaimed(), [s]), b = F(() => ({
    canGetLock: c,
    tryGetLock: p,
    findClosestDraggableId: u,
    findOptionsForDraggable: d,
    tryReleaseLock: f,
    isLockClaimed: h
  }), [c, p, u, d, f, h]);
  au(a);
  for (let m = 0; m < a.length; m++)
    a[m](b);
}
const Su = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    I.version.startsWith("16") || I.version.startsWith("17") ? n() : pn.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Cu = (e) => ({
  ...tt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...tt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Ue(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find store from lazy ref") : g(!1)), e.current;
}
function wu(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = w.useRef(null);
  Mc();
  const s = Ln(e), l = P(() => Su(s.current), [s]), c = P(() => Cu(s.current), [s]), p = wc(t), u = Ac({
    contextId: t,
    text: i
  }), d = vc(t, o), f = P((O) => {
    Ue(a).dispatch(O);
  }, []), h = F(() => Un({
    publishWhileDragging: Ja,
    updateDroppableScroll: Qa,
    updateDroppableIsEnabled: el,
    updateDroppableIsCombineEnabled: tl,
    collectionStarting: Za
  }, f), [f]), b = Ec(), m = F(() => Yl(b, h), [b, h]), S = F(() => dc({
    scrollWindow: Kl,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: c,
    ...Un({
      move: Ro
    }, f)
  }), [m.scrollDroppable, f, c]), D = bc(t), y = F(() => Hl({
    announce: p,
    autoScroller: S,
    dimensionMarshal: m,
    focusMarshal: D,
    getResponders: l,
    styleMarshal: d
  }), [p, S, m, D, l, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== y && process.env.NODE_ENV !== "production" && U("unexpected store change"), a.current = y;
  const E = P(() => {
    const O = Ue(a);
    O.getState().phase !== "IDLE" && O.dispatch(In());
  }, []), v = P(() => {
    const O = Ue(a).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), C = F(() => ({
    isDragging: v,
    tryAbort: E
  }), [v, E]);
  n(C);
  const N = P((O) => ko(Ue(a).getState(), O), []), _ = P(() => Oe(Ue(a).getState()), []), x = F(() => ({
    marshal: m,
    focus: D,
    contextId: t,
    canLift: N,
    isMovementAllowed: _,
    dragHandleUsageInstructionsId: u,
    registry: b
  }), [t, m, u, D, N, _, b]);
  return Du({
    contextId: t,
    store: y,
    registry: b,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), w.useEffect(() => E, [E]), I.createElement(It.Provider, {
    value: x
  }, I.createElement(Ds, {
    context: Mn,
    store: y
  }, e.children));
}
let xu = 0;
function Nu() {
  return F(() => `${xu++}`, []);
}
function Ou() {
  return I.useId();
}
var Iu = "useId" in I ? Ou : Nu;
function bp(e) {
  const t = Iu(), n = e.dragHandleUsageInstructions || vt.dragHandleUsageInstructions;
  return I.createElement(Fs, null, (r) => I.createElement(wu, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const Mr = {
  dragging: 5e3,
  dropAnimating: 4500
}, Au = (e, t) => t ? je.drop(t.duration) : e ? je.snap : je.fluid, _u = (e, t) => {
  if (e)
    return t ? et.opacity.drop : et.opacity.combining;
}, Pu = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Ru(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Pu(e), l = !!i, c = l ? on.drop(r, a) : on.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Au(s, i),
    transform: c,
    opacity: _u(a, l),
    zIndex: l ? Mr.dropAnimating : Mr.dragging,
    pointerEvents: "none"
  };
}
function Tu(e) {
  return {
    transform: on.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Bu(e) {
  return e.type === "DRAGGING" ? Ru(e) : Tu(e);
}
function Mu(e, t, n) {
  n === void 0 && (n = Y);
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = so(o, r), a = Et(i, n), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, l = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: s,
    displaceBy: l,
    client: i,
    page: a
  };
}
function $u(e) {
  const t = $n("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = F(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), c = P((f) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g(!1)), Mu(n, h, f);
  }, [n, o]), p = F(() => ({
    uniqueId: t,
    descriptor: n,
    options: l,
    getDimension: c
  }), [n, c, l, t]), u = w.useRef(p), d = w.useRef(!0);
  se(() => (r.draggable.register(u.current), () => r.draggable.unregister(u.current)), [r.draggable]), se(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const f = u.current;
    u.current = p, r.draggable.update(p, f);
  }, [p, r.draggable]);
}
var Gn = I.createContext(null);
function ti(e) {
  e && lt(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g(!1));
}
function Fu(e, t, n) {
  ct(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && (ti(n()), e.isEnabled && (jo(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${r(o)} Unable to find drag handle`) : g(!1))));
  });
}
function Lu(e) {
  Fn(() => {
    const t = w.useRef(e);
    ct(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function Ct(e) {
  const t = w.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g(!1)), t;
}
function Vu(e) {
  e.preventDefault();
}
const Gu = (e) => {
  const t = w.useRef(null), n = P(function(C) {
    C === void 0 && (C = null), t.current = C;
  }, []), r = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ct(It), {
    type: s,
    droppableId: l
  } = Ct(Gn), c = F(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: u,
    isEnabled: d,
    shouldRespectForcePress: f,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: m,
    dropAnimationFinished: S
  } = e;
  if (Fu(e, o, r), Lu(b), !b) {
    const C = F(() => ({
      descriptor: c,
      registry: a,
      getDraggableRef: r,
      canDragInteractiveElements: h,
      shouldRespectForcePress: f,
      isEnabled: d
    }), [c, a, r, h, f, d]);
    $u(C);
  }
  const D = F(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": u,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Vu
  } : null, [o, i, u, d]), y = P((C) => {
    m.type === "DRAGGING" && m.dropping && C.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? S() : pn.flushSync(S));
  }, [S, m]), E = F(() => {
    const C = Bu(m), N = m.type === "DRAGGING" && m.dropping ? y : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": u,
        style: C,
        onTransitionEnd: N
      },
      dragHandleProps: D
    };
  }, [o, D, u, m, y, n]), v = F(() => ({
    draggableId: c.id,
    type: c.type,
    source: {
      index: c.index,
      droppableId: c.droppableId
    }
  }), [c.droppableId, c.id, c.index, c.type]);
  return I.createElement(I.Fragment, null, p(E, m.snapshot, v));
};
var ku = Gu, ni = (e, t) => e === t, ri = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Wu = (e) => e.combine ? e.combine.draggableId : null, Uu = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Hu() {
  const e = j((o, i) => ({
    x: o,
    y: i
  })), t = j(function(o, i, a, s, l) {
    return a === void 0 && (a = null), s === void 0 && (s = null), l === void 0 && (l = null), {
      isDragging: !0,
      isClone: i,
      isDropAnimating: !!l,
      dropAnimation: l,
      mode: o,
      draggingOver: a,
      combineWith: s,
      combineTargetFor: null
    };
  }), n = j(function(o, i, a, s, l, c, p) {
    return l === void 0 && (l = null), c === void 0 && (c = null), p === void 0 && (p = null), {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: l,
        combineWith: c,
        mode: i,
        offset: o,
        dimension: a,
        forceShouldAnimate: p,
        snapshot: t(i, s, l, c, null)
      }
    };
  });
  return (o, i) => {
    if (rt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = ie(o.impact), c = Uu(o.impact), p = o.forceShouldAnimate;
      return n(e(a.x, a.y), o.movementMode, s, i.isClone, l, c, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], c = a.result, p = c.mode, u = ri(c), d = Wu(c), h = {
        duration: o.dropDuration,
        curve: _n.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? et.opacity.drop : null,
        scale: d ? et.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
          dropping: h,
          draggingOver: u,
          combineWith: d,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, u, d, h)
        }
      };
    }
    return null;
  };
}
function oi(e) {
  return e === void 0 && (e = null), {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const qu = {
  mapped: {
    type: "SECONDARY",
    offset: Y,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: oi(null)
  }
};
function zu() {
  const e = j((a, s) => ({
    x: a,
    y: s
  })), t = j(oi), n = j(function(a, s, l) {
    return s === void 0 && (s = null), {
      mapped: {
        type: "SECONDARY",
        offset: a,
        combineTargetFor: s,
        shouldAnimateDisplacement: l,
        snapshot: t(s)
      }
    };
  }), r = (a) => a ? n(Y, a, !0) : null, o = (a, s, l, c) => {
    const p = l.displaced.visible[a], u = !!(c.inVirtualList && c.effected[a]), d = xt(l), f = d && d.draggableId === a ? s : null;
    if (!p) {
      if (!u)
        return r(f);
      if (l.displaced.invisible[a])
        return null;
      const m = Le(c.displacedBy.point), S = e(m.x, m.y);
      return n(S, f, !0);
    }
    if (u)
      return r(f);
    const h = l.displacedBy.point, b = e(h.x, h.y);
    return n(b, f, p.shouldAnimate);
  };
  return (a, s) => {
    if (rt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const ju = () => {
  const e = Hu(), t = zu();
  return (r, o) => e(r, o) || t(r, o) || qu;
}, Yu = {
  dropAnimationFinished: Bo
}, Ku = oo(ju, Yu, null, {
  context: Mn,
  areStatePropsEqual: ni
})(ku);
var Xu = Ku;
function ii(e) {
  return Ct(Gn).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(Xu, e);
}
function yp(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return I.createElement(ii, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const kn = (e) => (t) => e === t, Ju = kn("scroll"), Zu = kn("auto"), Qu = kn("visible"), $r = (e, t) => t(e.overflowX) || t(e.overflowY), ed = (e, t) => t(e.overflowX) && t(e.overflowY), si = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return $r(n, Ju) || $r(n, Zu);
}, td = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = nt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g(!1)), !si(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return ed(r, Qu) || process.env.NODE_ENV !== "production" && U(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ai = (e) => e == null ? null : e === document.body ? td() ? e : null : e === document.documentElement ? null : si(e) ? e : ai(e.parentElement);
var li = ai, nd = (e) => {
  !e || !li(e.parentElement) || process.env.NODE_ENV !== "production" && U(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ln = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ci = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ci(e.parentElement) : !1;
var rd = (e) => {
  const t = li(e), n = ci(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, od = (e) => {
  let {
    descriptor: t,
    isEnabled: n,
    isCombineEnabled: r,
    isFixedOnPage: o,
    direction: i,
    client: a,
    page: s,
    closest: l
  } = e;
  const c = (() => {
    if (!l)
      return null;
    const {
      scrollSize: f,
      client: h
    } = l, b = Lo({
      scrollHeight: f.scrollHeight,
      scrollWidth: f.scrollWidth,
      height: h.paddingBox.height,
      width: h.paddingBox.width
    });
    return {
      pageMarginBox: l.page.marginBox,
      frameClient: h,
      scrollSize: f,
      shouldClipSubject: l.shouldClipSubject,
      scroll: {
        initial: l.scroll,
        current: l.scroll,
        max: b,
        diff: {
          value: Y,
          displacement: Y
        }
      }
    };
  })(), p = i === "vertical" ? Cn : vo, u = Me({
    page: s,
    withPlaceholder: null,
    axis: p,
    frame: c
  });
  return {
    descriptor: t,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: p,
    isEnabled: n,
    client: a,
    page: s,
    frame: c,
    subject: u
  };
};
const id = (e, t) => {
  const n = ao(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, a = o + t.scrollWidth, l = yn({
    top: r,
    right: a,
    bottom: i,
    left: o
  }, n.border);
  return En({
    borderBox: l,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var sd = (e) => {
  let {
    ref: t,
    descriptor: n,
    env: r,
    windowScroll: o,
    direction: i,
    isDropDisabled: a,
    isCombineEnabled: s,
    shouldClipSubject: l
  } = e;
  const c = r.closestScrollable, p = id(t, c), u = Et(p, o), d = (() => {
    if (!c)
      return null;
    const h = ao(c), b = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: h,
      page: Et(h, o),
      scroll: ln(c),
      scrollSize: b,
      shouldClipSubject: l
    };
  })();
  return od({
    descriptor: n,
    isEnabled: !a,
    isCombineEnabled: s,
    isFixedOnPage: r.isFixedOnPage,
    direction: i,
    client: p,
    page: u,
    closest: d
  });
};
const ad = {
  passive: !1
}, ld = {
  passive: !0
};
var Fr = (e) => e.shouldPublishImmediately ? ad : ld;
const gt = (e) => e && e.env.closestScrollable || null;
function cd(e) {
  const t = w.useRef(null), n = Ct(It), r = $n("droppable"), {
    registry: o,
    marshal: i
  } = n, a = Ln(e), s = F(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = w.useRef(s), c = F(() => j((E, v) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g(!1));
    const C = {
      x: E,
      y: v
    };
    i.updateDroppableScroll(s.id, C);
  }), [s.id, i]), p = P(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? Y : ln(E.env.closestScrollable);
  }, []), u = P(() => {
    const E = p();
    c(E.x, E.y);
  }, [p, c]), d = F(() => Ke(u), [u]), f = P(() => {
    const E = t.current, v = gt(E);
    if (E && v || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g(!1)), E.scrollOptions.shouldPublishImmediately) {
      u();
      return;
    }
    d();
  }, [d, u]), h = P((E, v) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g(!1));
    const C = a.current, N = C.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g(!1));
    const _ = rd(N), x = {
      ref: N,
      descriptor: s,
      env: _,
      scrollOptions: v
    };
    t.current = x;
    const O = sd({
      ref: N,
      descriptor: s,
      env: _,
      windowScroll: E,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), B = _.closestScrollable;
    return B && (B.setAttribute(_r.contextId, n.contextId), B.addEventListener("scroll", f, Fr(x.scrollOptions)), process.env.NODE_ENV !== "production" && nd(B)), O;
  }, [n.contextId, s, f, a]), b = P(() => {
    const E = t.current, v = gt(E);
    return E && v || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g(!1)), ln(v);
  }, []), m = P(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g(!1));
    const v = gt(E);
    t.current = null, v && (d.cancel(), v.removeAttribute(_r.contextId), v.removeEventListener("scroll", f, Fr(E.scrollOptions)));
  }, [f, d]), S = P((E) => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g(!1));
    const C = gt(v);
    C || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g(!1)), C.scrollTop += E.y, C.scrollLeft += E.x;
  }, []), D = F(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: m,
    scroll: S
  }), [m, h, b, S]), y = F(() => ({
    uniqueId: r,
    descriptor: s,
    callbacks: D
  }), [D, s, r]);
  se(() => (l.current = y.descriptor, o.droppable.register(y), () => {
    t.current && (process.env.NODE_ENV !== "production" && U("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(y);
  }), [D, s, m, y, i, o.droppable]), se(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), se(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ht() {
}
const Lr = {
  width: 0,
  height: 0,
  margin: Hs
}, ud = (e) => {
  let {
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: r
  } = e;
  return t || r === "close" ? Lr : {
    height: n.client.borderBox.height,
    width: n.client.borderBox.width,
    margin: n.client.margin
  };
}, dd = (e) => {
  let {
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: r
  } = e;
  const o = ud({
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: r
  });
  return {
    display: n.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? je.placeholder : null
  };
}, pd = (e) => {
  const t = w.useRef(null), n = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = w.useState(e.animate === "open");
  w.useEffect(() => s ? r !== "open" ? (n(), l(!1), Ht) : t.current ? Ht : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), n) : Ht, [r, s, n]);
  const c = P((u) => {
    u.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), p = dd({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: c,
    ref: e.innerRef
  });
};
var fd = I.memo(pd);
function qt(e) {
  return typeof e == "boolean";
}
function zt(e, t) {
  t.forEach((n) => n(e));
}
const gd = [function(t) {
  let {
    props: n
  } = t;
  n.droppableId || (process.env.NODE_ENV !== "production" ? g(!1, "A Droppable requires a droppableId prop") : g(!1)), typeof n.droppableId != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof n.droppableId}]`) : g(!1));
}, function(t) {
  let {
    props: n
  } = t;
  qt(n.isDropDisabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isDropDisabled must be a boolean") : g(!1)), qt(n.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isCombineEnabled must be a boolean") : g(!1)), qt(n.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? g(!1, "ignoreContainerClipping must be a boolean") : g(!1));
}, function(t) {
  let {
    getDroppableRef: n
  } = t;
  ti(n());
}], md = [function(t) {
  let {
    props: n,
    getPlaceholderRef: r
  } = t;
  !n.placeholder || r() || process.env.NODE_ENV !== "production" && U(`
      Droppable setup issue [droppableId: "${n.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], hd = [function(t) {
  let {
    props: n
  } = t;
  n.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g(!1));
}, function(t) {
  let {
    getPlaceholderRef: n
  } = t;
  n() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g(!1));
}];
function vd(e) {
  ct(() => {
    zt(e, gd), e.props.mode === "standard" && zt(e, md), e.props.mode === "virtual" && zt(e, hd);
  });
}
class bd extends I.PureComponent {
  constructor() {
    super(...arguments), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const yd = (e) => {
  const t = w.useContext(It);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = w.useRef(null), i = w.useRef(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: c,
    direction: p,
    ignoreContainerClipping: u,
    isDropDisabled: d,
    isCombineEnabled: f,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: m,
    getContainerForClone: S
  } = e, D = P(() => o.current, []), y = P(function(T) {
    T === void 0 && (T = null), o.current = T;
  }, []), E = P(() => i.current, []), v = P(function(T) {
    T === void 0 && (T = null), i.current = T;
  }, []);
  vd({
    props: e,
    getDroppableRef: D,
    getPlaceholderRef: E
  });
  const C = P(() => {
    r() && m({
      maxScroll: Go()
    });
  }, [r, m]);
  cd({
    droppableId: s,
    type: l,
    mode: c,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: f,
    ignoreContainerClipping: u,
    getDroppableRef: D
  });
  const N = F(() => I.createElement(bd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, (T) => {
    let {
      onClose: $,
      data: W,
      animate: q
    } = T;
    return I.createElement(fd, {
      placeholder: W,
      onClose: $,
      innerRef: v,
      animate: q,
      contextId: n,
      onTransitionEnd: C
    });
  }), [n, C, e.placeholder, e.shouldAnimatePlaceholder, v]), _ = F(() => ({
    innerRef: y,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": n
    }
  }), [n, s, N, y]), x = b ? b.dragging.draggableId : null, O = F(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: x
  }), [s, x, l]);
  function B() {
    if (!b)
      return null;
    const {
      dragging: T,
      render: $
    } = b, W = I.createElement(ii, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (q, K) => $(q, K, T));
    return yi.createPortal(W, S());
  }
  return I.createElement(Gn.Provider, {
    value: O
  }, a(_, h), B());
};
var Ed = yd;
function Dd() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g(!1)), document.body;
}
const Vr = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Dd
}, ui = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Vr)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Vr[n]
    });
  return t;
}, jt = (e, t) => e === t.droppable.type, Gr = (e, t) => t.draggables[e.draggable.id], Sd = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, n = j((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = j((i, a, s, l, c, p) => {
    const u = c.descriptor.id;
    if (c.descriptor.droppableId === i) {
      const h = p ? {
        render: p,
        dragging: n(c.descriptor)
      } : null, b = {
        isDraggingOver: s,
        draggingOverWith: s ? u : null,
        draggingFromThisWith: u,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
        useClone: h
      };
    }
    if (!a)
      return t;
    if (!l)
      return e;
    const f = {
      isDraggingOver: s,
      draggingOverWith: u,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: f,
      useClone: null
    };
  });
  return (i, a) => {
    const s = ui(a), l = s.droppableId, c = s.type, p = !s.isDropDisabled, u = s.renderClone;
    if (rt(i)) {
      const d = i.critical;
      if (!jt(c, d))
        return t;
      const f = Gr(d, i.dimensions), h = ie(i.impact) === l;
      return r(l, p, h, h, f, u);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!jt(c, d.critical))
        return t;
      const f = Gr(d.critical, i.dimensions);
      return r(l, p, ri(d.result) === l, ie(d.impact) === l, f, u);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!jt(c, d.critical))
        return t;
      const f = ie(d.impact) === l, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === l;
      return f ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, Cd = {
  updateViewportMaxScroll: rl
}, wd = oo(Sd, Cd, (e, t, n) => ({
  ...ui(n),
  ...e,
  ...t
}), {
  context: Mn,
  areStatePropsEqual: ni
})(Ed);
var Ep = wd;
const xd = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: r = null,
  section: o = null,
  subsection: i = null,
  fieldName: a,
  updateField: s,
  value: l,
  i: c = null,
  min: p = null,
  max: u = null,
  onClick: d,
  ...f
}) => {
  const [h, b] = w.useState(l);
  let m = () => {
    let y = "";
    return o && (y += o + "-"), i && (y += i + "-"), a && (y += a), y;
  };
  const S = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  w.useEffect(() => {
    l !== void 0 && l !== h && b(l);
  }, [l]), w.useEffect(() => {
    l !== void 0 && l !== h && s && s(o, i, a, h, c);
  }, [h]);
  const D = (y) => {
    b(!h), d && d(y);
  };
  return /* @__PURE__ */ I.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ I.createElement("label", null, e), /* @__PURE__ */ I.createElement("div", { className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + S() + (h ? " active" : ""), onClick: D }, /* @__PURE__ */ I.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ I.createElement("div", { className: "cove-input__slider-track", style: h && r ? { backgroundColor: r } : null }), /* @__PURE__ */ I.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: m(), checked: h || !1, readOnly: !0 })));
};
xd.propTypes = {
  /** Add label to the input field */
  label: Z.string,
  /** Select the preferred display style of the slider */
  sliderType: Z.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: Z.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: Z.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: Z.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: Z.string,
  /** Key value of targeted config option */
  fieldName: Z.string,
  /** Prop drill down of the updateField function */
  updateField: Z.func,
  /** Current value of the input, usually the current config option value */
  stateValue: Z.object
};
var Nd = di;
function di(e, t, n) {
  e instanceof RegExp && (e = kr(e, n)), t instanceof RegExp && (t = kr(t, n));
  var r = pi(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function kr(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
di.range = pi;
function pi(e, t, n) {
  var r, o, i, a, s, l = n.indexOf(e), c = n.indexOf(t, l + 1), p = l;
  if (l >= 0 && c > 0) {
    for (r = [], i = n.length; p >= 0 && !s; )
      p == l ? (r.push(p), l = n.indexOf(e, p + 1)) : r.length == 1 ? s = [r.pop(), c] : (o = r.pop(), o < i && (i = o, a = c), c = n.indexOf(t, p + 1)), p = l < c && l >= 0 ? l : c;
    r.length && (s = [i, a]);
  }
  return s;
}
var Od = fi;
function fi(e, t, n) {
  e instanceof RegExp && (e = Wr(e, n)), t instanceof RegExp && (t = Wr(t, n));
  var r = gi(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function Wr(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
fi.range = gi;
function gi(e, t, n) {
  var r, o, i, a, s, l = n.indexOf(e), c = n.indexOf(t, l + 1), p = l;
  if (l >= 0 && c > 0) {
    if (e === t)
      return [l, c];
    for (r = [], i = n.length; p >= 0 && !s; )
      p == l ? (r.push(p), l = n.indexOf(e, p + 1)) : r.length == 1 ? s = [r.pop(), c] : (o = r.pop(), o < i && (i = o, a = c), c = n.indexOf(t, p + 1)), p = l < c && l >= 0 ? l : c;
    r.length && (s = [i, a]);
  }
  return s;
}
var Id = Od, Ad = mi;
function mi(e, t, n) {
  var r = e;
  return _d(e, t).reduce(function(o, i) {
    return o.replace(i.functionIdentifier + "(" + i.matches.body + ")", Pd(i.matches.body, i.functionIdentifier, n, r, t));
  }, e);
}
function _d(e, t) {
  var n = [], r = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var o = r.exec(e);
    if (!o)
      return n;
    if (o[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var i = o[1], a = o.index, s = Id("(", ")", e.substring(a));
    if (!s || s.start !== o[0].length - 1)
      throw new SyntaxError(i + "(): missing closing ')' in the value '" + e + "'");
    n.push({ matches: s, functionIdentifier: i }), e = s.post;
  } while (r.test(e));
  return n;
}
function Pd(e, t, n, r, o) {
  return n(mi(e, o, n), t, r);
}
var te = function(e) {
  this.value = e;
};
te.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(e) {
    return te.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function(e, t) {
    return e + t;
  },
  asin: function(e) {
    return te.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function(e) {
    return te.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
  },
  acosh: function(e) {
    return Math.log(e + Math.sqrt(e * e - 1));
  },
  asinh: function(e) {
    return Math.log(e + Math.sqrt(e * e + 1));
  },
  atanh: function(e) {
    return Math.log((1 + e) / (1 - e));
  },
  C: function(e, t) {
    var n = 1, r = e - t, o = t;
    o < r && (o = r, r = t);
    for (var i = o + 1; i <= e; i++)
      n *= i;
    return n / te.math.fact(r);
  },
  changeSign: function(e) {
    return -e;
  },
  cos: function(e) {
    return te.math.isDegree && (e = te.math.toRadian(e)), Math.cos(e);
  },
  cosh: function(e) {
    return (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e)) / 2;
  },
  div: function(e, t) {
    return e / t;
  },
  fact: function(e) {
    if (e % 1 !== 0)
      return "NaN";
    for (var t = 1, n = 2; n <= e; n++)
      t *= n;
    return t;
  },
  inverse: function(e) {
    return 1 / e;
  },
  log: function(e) {
    return Math.log(e) / Math.log(10);
  },
  mod: function(e, t) {
    return e % t;
  },
  mul: function(e, t) {
    return e * t;
  },
  P: function(e, t) {
    for (var n = 1, r = Math.floor(e) - Math.floor(t) + 1; r <= Math.floor(e); r++)
      n *= r;
    return n;
  },
  Pi: function(e, t, n) {
    for (var r = 1, o = e; o <= t; o++)
      r *= Number(n.postfixEval({
        n: o
      }));
    return r;
  },
  pow10x: function(e) {
    for (var t = 1; e--; )
      t *= 10;
    return t;
  },
  sigma: function(e, t, n) {
    for (var r = 0, o = e; o <= t; o++)
      r += Number(n.postfixEval({
        n: o
      }));
    return r;
  },
  sin: function(e) {
    return te.math.isDegree && (e = te.math.toRadian(e)), Math.sin(e);
  },
  sinh: function(e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function(e, t) {
    return e - t;
  },
  tan: function(e) {
    return te.math.isDegree && (e = te.math.toRadian(e)), Math.tan(e);
  },
  tanh: function(e) {
    return te.sinha(e) / te.cosha(e);
  },
  toRadian: function(e) {
    return e * Math.PI / 180;
  },
  and: function(e, t) {
    return e & t;
  }
};
te.Exception = function(e) {
  this.message = e;
};
var Rd = te, M = Rd;
function ee(e, t) {
  for (var n = 0; n < e.length; n++)
    e[n] += t;
  return e;
}
var De = [
  { token: "sin", show: "sin", type: 0, value: M.math.sin },
  { token: "cos", show: "cos", type: 0, value: M.math.cos },
  { token: "tan", show: "tan", type: 0, value: M.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: M.math.P },
  { token: "C", show: "C", type: 10, value: M.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: M.math.asin },
  { token: "acos", show: "acos", type: 0, value: M.math.acos },
  { token: "atan", show: "atan", type: 0, value: M.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: M.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: M.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: M.math.div },
  { token: "!", show: "!", type: 7, value: M.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: M.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: M.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: M.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: M.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: M.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: M.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: M.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: M.math.add },
  { token: "-", show: "-", type: 9, value: M.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: M.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: M.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: M.math.and }
], cn = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0,
  14: -1,
  15: 11
  // will be filtered after lexer
};
for (var mt = 0; mt < De.length; mt++)
  De[mt].precedence = cn[De[mt].type];
var ge = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  9: !0,
  12: !0,
  13: !0,
  14: !0,
  15: !0
}, Te = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
  10: !0,
  11: !0,
  12: !0,
  13: !0,
  15: !0
}, Td = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, pe = {}, He = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Bd = {
  1: !0
}, ne = [
  [],
  [
    "1",
    "2",
    "3",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
    "^",
    "!",
    "P",
    "C",
    "e",
    "0",
    ".",
    ",",
    "n",
    " ",
    "&"
  ],
  ["pi", "ln", "Pi"],
  ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
  ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
  ["acosh", "atanh", "asinh", "Sigma"]
];
function Md(e, t, n, r) {
  for (var o = 0; o < r; o++)
    if (e[n + o] !== t[o])
      return !1;
  return !0;
}
M.tokenTypes = {
  FUNCTION_WITH_ONE_ARG: 0,
  NUMBER: 1,
  BINARY_OPERATOR_HIGH_PRECENDENCE: 2,
  CONSTANT: 3,
  OPENING_PARENTHESIS: 4,
  CLOSING_PARENTHESIS: 5,
  DECIMAL: 6,
  POSTFIX_FUNCTION_WITH_ONE_ARG: 7,
  FUNCTION_WITH_N_ARGS: 8,
  BINARY_OPERATOR_LOW_PRECENDENCE: 9,
  BINARY_OPERATOR_PERMUTATION: 10,
  COMMA: 11,
  EVALUATED_FUNCTION: 12,
  EVALUATED_FUNCTION_PARAMETER: 13,
  SPACE: 14
};
M.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t].token.length, r = -1;
    e[t].type === M.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), ne[n] = ne[n] || [];
    for (var o = 0; o < ne[n].length; o++)
      if (e[t].token === ne[n][o]) {
        r = hi(ne[n][o], De);
        break;
      }
    r === -1 ? (De.push(e[t]), e[t].precedence = cn[e[t].type], ne.length <= e[t].token.length && (ne[e[t].token.length] = []), ne[e[t].token.length].push(e[t].token)) : (De[r] = e[t], e[t].precedence = cn[e[t].type]);
  }
};
function hi(e, t) {
  for (var n = 0; n < t.length; n++)
    if (t[n].token === e)
      return n;
  return -1;
}
function $d(e) {
  for (var t = [], n = e.length, r, o, i, a = 0; a < n; a++)
    if (!(a < n - 1 && e[a] === " " && e[a + 1] === " ")) {
      for (r = "", o = e.length - a > ne.length - 2 ? ne.length - 1 : e.length - a; o > 0; o--)
        if (ne[o] !== void 0)
          for (i = 0; i < ne[o].length; i++)
            Md(e, ne[o][i], a, o) && (r = ne[o][i], i = ne[o].length, o = 0);
      if (a += r.length - 1, r === "")
        throw new M.Exception("Can't understand after " + e.slice(a));
      t.push(De[hi(r, De)]);
    }
  return t;
}
var Fd = {
  value: M.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, ht = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, qe = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
M.lex = function(e, t) {
  var n = [qe], r = [], o = e, i = ge, a = 0, s = pe, l = "", c;
  typeof t < "u" && M.addToken(t);
  var p = {}, u = $d(o);
  for (c = 0; c < u.length; c++) {
    var d = u[c];
    if (d.type === 14) {
      if (c > 0 && c < u.length - 1 && u[c + 1].type === 1 && (u[c - 1].type === 1 || u[c - 1].type === 6))
        throw new M.Exception("Unexpected Space");
      continue;
    }
    var f = d.token, h = d.type, b = d.value, m = d.precedence, S = d.show, D = n[n.length - 1], y;
    for (y = r.length; y-- && r[y] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(h) !== -1) {
        if (i[h] !== !0)
          throw new M.Exception(f + " is not allowed after " + l);
        n.push(ht), i = Te, s = He, r.pop();
      }
    if (i[h] !== !0)
      throw new M.Exception(f + " is not allowed after " + l);
    if (s[h] === !0 && (h = 2, b = M.math.mul, S = "&times;", m = 3, c = c - 1), p = {
      value: b,
      type: h,
      pre: m,
      show: S,
      numberOfArguments: d.numberOfArguments
    }, h === 0)
      i = ge, s = pe, ee(r, 2), n.push(p), u[c + 1].type !== 4 && (n.push(qe), r.push(2));
    else if (h === 1)
      D.type === 1 ? (D.value += b, ee(r, 1)) : n.push(p), i = Te, s = Td;
    else if (h === 2)
      i = ge, s = pe, ee(r, 2), n.push(p);
    else if (h === 3)
      n.push(p), i = Te, s = He;
    else if (h === 4)
      ee(r, 1), a++, i = ge, s = pe, n.push(p);
    else if (h === 5) {
      if (!a)
        throw new M.Exception("Closing parenthesis are more than opening one, wait What!!!");
      a--, i = Te, s = He, n.push(p), ee(r, 1);
    } else if (h === 6) {
      if (D.hasDec)
        throw new M.Exception("Two decimals are not allowed in one number");
      D.type !== 1 && (D = {
        value: 0,
        type: 1,
        pre: 0
      }, n.push(D)), i = Bd, ee(r, 1), s = pe, D.value += b, D.hasDec = !0;
    } else
      h === 7 && (i = Te, s = He, ee(r, 1), n.push(p));
    h === 8 ? (i = ge, s = pe, ee(r, d.numberOfArguments + 2), n.push(p), u[c + 1].type !== 4 && (n.push(qe), r.push(d.numberOfArguments + 2))) : h === 9 ? (D.type === 9 ? D.value === M.math.add ? (D.value = b, D.show = S, ee(r, 1)) : D.value === M.math.sub && S === "-" && (D.value = M.math.add, D.show = "+", ee(r, 1)) : D.type !== 5 && D.type !== 7 && D.type !== 1 && D.type !== 3 && D.type !== 13 ? f === "-" && (i = ge, s = pe, ee(r, 2).push(2), n.push(Fd), n.push(qe)) : (n.push(p), ee(r, 2)), i = ge, s = pe) : h === 10 ? (i = ge, s = pe, ee(r, 2), n.push(p)) : h === 11 ? (i = ge, s = pe, n.push(p)) : h === 12 ? (i = ge, s = pe, ee(r, 6), n.push(p), u[c + 1].type !== 4 && (n.push(qe), r.push(6))) : h === 13 && (i = Te, s = He, n.push(p)), ee(r, -1), l = f;
  }
  for (y = r.length; y--; )
    n.push(ht);
  if (i[5] !== !0)
    throw new M.Exception("complete the expression");
  for (; a--; )
    n.push(ht);
  return n.push(ht), new M(n);
};
var Ld = M, un = Ld;
un.prototype.toPostfix = function() {
  for (var e = [], t, n, r, o, i, a = [{ value: "(", type: 4, pre: 0 }], s = this.value, l = 1; l < s.length; l++)
    if (s[l].type === 1 || s[l].type === 3 || s[l].type === 13)
      s[l].type === 1 && (s[l].value = Number(s[l].value)), e.push(s[l]);
    else if (s[l].type === 4)
      a.push(s[l]);
    else if (s[l].type === 5)
      for (; (n = a.pop()).type !== 4; )
        e.push(n);
    else if (s[l].type === 11) {
      for (; (n = a.pop()).type !== 4; )
        e.push(n);
      a.push(n);
    } else {
      t = s[l], o = t.pre, i = a[a.length - 1], r = i.pre;
      var c = i.value == "Math.pow" && t.value == "Math.pow";
      if (o > r)
        a.push(t);
      else {
        for (; r >= o && !c || c && o < r; )
          n = a.pop(), i = a[a.length - 1], e.push(n), r = i.pre, c = t.value == "Math.pow" && i.value == "Math.pow";
        a.push(t);
      }
    }
  return new un(e);
};
var Vd = un, Ye = Vd;
Ye.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var t = [], n, r, o, i = this.value, a = typeof e.n < "u", s = 0; s < i.length; s++)
    if (i[s].type === 1)
      t.push({ value: i[s].value, type: 1 });
    else if (i[s].type === 3)
      t.push({ value: e[i[s].value], type: 1 });
    else if (i[s].type === 0)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(i[s]) : t[t.length - 1].value = i[s].value(t[t.length - 1].value);
    else if (i[s].type === 7)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(i[s]) : t[t.length - 1].value = i[s].value(t[t.length - 1].value);
    else if (i[s].type === 8) {
      for (var l = [], c = 0; c < i[s].numberOfArguments; c++)
        l.push(t.pop().value);
      t.push({ type: 1, value: i[s].value.apply(i[s], l.reverse()) });
    } else
      i[s].type === 10 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r.value = r.concat(n), r.value.push(i[s]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(i[s]), t.push(n)) : t.push({ type: 1, value: i[s].value(r.value, n.value) })) : i[s].type === 2 || i[s].type === 9 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r = r.concat(n), r.push(i[s]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(i[s]), t.push(n)) : t.push({ type: 1, value: i[s].value(r.value, n.value) })) : i[s].type === 12 ? (n = t.pop(), typeof n.type < "u" && (n = [n]), r = t.pop(), o = t.pop(), t.push({ type: 1, value: i[s].value(o.value, r.value, new Ye(n)) })) : i[s].type === 13 && (a ? t.push({ value: e[i[s].value], type: 3 }) : t.push([i[s]]));
  if (t.length > 1)
    throw new Ye.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
Ye.eval = function(e, t, n) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof n > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
var Gd = Ye, vi = Gd;
vi.prototype.formulaEval = function() {
  for (var e, t, n, r = [], o = this.value, i = 0; i < o.length; i++)
    o[i].type === 1 || o[i].type === 3 ? r.push({ value: o[i].type === 3 ? o[i].show : o[i].value, type: 1 }) : o[i].type === 13 ? r.push({ value: o[i].show, type: 1 }) : o[i].type === 0 ? r[r.length - 1] = { value: o[i].show + (o[i].show != "-" ? "(" : "") + r[r.length - 1].value + (o[i].show != "-" ? ")" : ""), type: 0 } : o[i].type === 7 ? r[r.length - 1] = { value: (r[r.length - 1].type != 1 ? "(" : "") + r[r.length - 1].value + (r[r.length - 1].type != 1 ? ")" : "") + o[i].show, type: 7 } : o[i].type === 10 ? (e = r.pop(), t = r.pop(), o[i].show === "P" || o[i].show === "C" ? r.push({ value: "<sup>" + t.value + "</sup>" + o[i].show + "<sub>" + e.value + "</sub>", type: 10 }) : r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : o[i].type === 2 || o[i].type === 9 ? (e = r.pop(), t = r.pop(), r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + o[i].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: o[i].type })) : o[i].type === 12 && (e = r.pop(), t = r.pop(), n = r.pop(), r.push({ value: o[i].show + "(" + n.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return r[0].value;
};
var kd = vi, Wd = Nd, Ud = Ad, Hd = kd, qd = 100, zd = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, Yt, jd = Yd;
function Yd(e, t) {
  Yt = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function n(o, i, a) {
    if (Yt++ > qd)
      throw Yt = 0, new Error("Call stack overflow for " + a);
    if (o === "")
      throw new Error(i + "(): '" + a + "' must contain a non-whitespace string");
    o = r(o, a);
    var s = Kd(o);
    if (s.length > 1 || o.indexOf("var(") > -1)
      return i + "(" + o + ")";
    var l = s[0] || "";
    l === "%" && (o = o.replace(/\b[0-9\.]+%/g, function(u) {
      return parseFloat(u.slice(0, -1)) * 0.01;
    }));
    var c = o.replace(new RegExp(l, "gi"), ""), p;
    try {
      p = Hd.eval(c);
    } catch {
      return i + "(" + o + ")";
    }
    return l === "%" && (p *= 100), (i.length || l === "%") && (p = Math.round(p * t) / t), p += l, p;
  }
  function r(o, i) {
    o = o.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var a = "", s = o, l; l = zd.exec(s); ) {
      l[0].index > 0 && (a += s.substring(0, l[0].index));
      var c = Wd("(", ")", s.substring([0].index));
      if (c.body === "")
        throw new Error("'" + o + "' must contain a non-whitespace string");
      var p = n(c.body, "", i);
      a += c.pre + p, s = c.post;
    }
    return a + s;
  }
  return Ud(e, /((?:\-[a-z]+\-)?calc)\(/, n);
}
function Kd(e) {
  for (var t = [], n = [], r = /[\.0-9]([%a-z]+)/gi, o = r.exec(e); o; )
    !o || !o[1] || (n.indexOf(o[1].toLowerCase()) === -1 && (t.push(o[1]), n.push(o[1].toLowerCase())), o = r.exec(e));
  return t;
}
const Kt = /* @__PURE__ */ zr(jd);
var Ur = "__react_svg_text_measurement_id";
function Xd(e, t) {
  try {
    var n = document.getElementById(Ur);
    if (!n) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("aria-hidden", "true"), r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", Ur), r.appendChild(n), document.body.appendChild(r);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const Hr = Ei(Xd, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var Jd = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function Zd(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Xt(e) {
  return typeof e == "number";
}
function qr(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function Qd(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, r = e.scaleToFit, o = r === void 0 ? !1 : r, i = e.angle, a = e.width, s = e.lineHeight, l = s === void 0 ? "1em" : s, c = e.capHeight, p = c === void 0 ? "0.71em" : c, u = e.children, d = e.style, f = Zd(e, Jd), h = f.x, b = h === void 0 ? 0 : h, m = f.y, S = m === void 0 ? 0 : m, D = !qr(b) || !qr(S), y = w.useMemo(function() {
    var x = u == null ? [] : u.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: x.map(function(O) {
        return {
          word: O,
          wordWidth: Hr(O, d) || 0
        };
      }),
      spaceWidth: Hr(" ", d) || 0
    };
  }, [u, d]), E = y.wordsWithWidth, v = y.spaceWidth, C = w.useMemo(function() {
    return D ? [] : a || o ? E.reduce(function(x, O) {
      var B = O.word, T = O.wordWidth, $ = x[x.length - 1];
      if ($ && (a == null || o || ($.width || 0) + T + v < a))
        $.words.push(B), $.width = $.width || 0, $.width += T + v;
      else {
        var W = {
          words: [B],
          width: T
        };
        x.push(W);
      }
      return x;
    }, []) : [{
      words: u == null ? [] : u.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [D, a, o, u, E, v]), N = w.useMemo(function() {
    var x = D ? "" : Kt(n === "start" ? "calc(" + p + ")" : n === "middle" ? "calc(" + (C.length - 1) / 2 + " * -" + l + " + (" + p + " / 2))" : "calc(" + (C.length - 1) + " * -" + l + ")");
    return x;
  }, [D, n, p, C.length, l]), _ = w.useMemo(function() {
    var x = [];
    if (D)
      return "";
    if (Xt(b) && Xt(S) && Xt(a) && o && C.length > 0) {
      var O = C[0].width || 1, B = o === "shrink-only" ? Math.min(a / O, 1) : a / O, T = B, $ = b - B * b, W = S - T * S;
      x.push("matrix(" + B + ", 0, 0, " + T + ", " + $ + ", " + W + ")");
    }
    return i && x.push("rotate(" + i + ", " + b + ", " + S + ")"), x.length > 0 ? x.join(" ") : "";
  }, [D, b, S, a, o, C, i]);
  return {
    wordsByLines: C,
    startDy: N,
    transform: _
  };
}
var ep = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function dn() {
  return dn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, dn.apply(this, arguments);
}
function tp(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var np = {
  overflow: "visible"
};
function Dp(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, r = e.dy, o = r === void 0 ? 0 : r, i = e.textAnchor, a = i === void 0 ? "start" : i, s = e.innerRef, l = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var c = e.lineHeight, p = c === void 0 ? "1em" : c;
  e.scaleToFit, e.capHeight, e.width;
  var u = tp(e, ep), d = u.x, f = d === void 0 ? 0 : d, h = u.fontSize, b = Qd(e), m = b.wordsByLines, S = b.startDy, D = b.transform;
  return /* @__PURE__ */ I.createElement("svg", {
    ref: s,
    x: n,
    y: o,
    fontSize: h,
    style: np
  }, m.length > 0 ? /* @__PURE__ */ I.createElement("text", dn({
    ref: l,
    transform: D
  }, u, {
    textAnchor: a
  }), m.map(function(y, E) {
    return /* @__PURE__ */ I.createElement("tspan", {
      key: E,
      x: f,
      dy: E === 0 ? S : p
    }, y.words.join(" "));
  })) : null);
}
export {
  Ep as C,
  bp as D,
  Ai as F,
  vp as G,
  xd as I,
  yp as P,
  Dp as T,
  Jr as _,
  gp as a,
  mp as c,
  fp as s,
  hp as t,
  Ii as u
};
