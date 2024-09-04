import { r as u, R as i } from "./storybook-index-45401197.es.js";
import { a as E } from "./storybook-Icon-b09f76c0.es.js";
import { _ as f } from "./storybook-lodash-c15d8e1c.es.js";
const y = [
  "360",
  // xxs (mobile) 0 - 360
  "480",
  // xs
  "768",
  // sm
  "960",
  // md
  "1170",
  // lg
  "1280"
  // xl
], x = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, g = ({ children: e, isEditor: r }) => {
  const [t, n] = u.useState(!1), [l, a] = u.useState(!1), [o, c] = u.useState(null), [s, m] = u.useState(!1);
  u.useState(!1);
  const [w, S] = u.useState(null), v = u.useRef(null);
  u.useRef(null);
  const _ = u.useRef(null), N = u.useCallback(
    (d) => c((h) => h !== d ? d : null),
    [o]
  ), k = (d) => {
    d.code === "KeyL" && d.ctrlKey && n((p) => !p);
    const h = x === "MacOS" ? d.metaKey : d.altKey;
    if (h) {
      let p = d.key;
      isNaN(p) || p <= y.length && (d.preventDefault(), N(y[p - 1]));
    }
    h || (d.code === "KeyG" && a((p) => !p), d.code === "KeyR" && F());
  };
  u.useEffect(() => (document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k)), []);
  const F = u.useCallback(() => {
    if (!s && v.current) {
      c(null), m(!0), a(!1), v.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", v.current.style.transform = "rotate(-360deg)";
      const d = setTimeout(() => {
        m(!1), v.current.style.transition = null, v.current.style.transform = "rotate(0deg)", v.current.style.transform = null;
      }, 400);
      return () => clearTimeout(d);
    }
  }, [s]);
  return u.useEffect(() => a(!!o), [o]), u.useEffect(() => {
    if (!_.current)
      return;
    let d = new ResizeObserver((h) => {
      for (let p of h) {
        let { width: R, height: D } = p.contentRect;
        S({ width: R, height: D });
      }
    });
    return d.observe(_.current), () => {
      d && (d.disconnect(), d = null);
    };
  }), !r || !t ? e : /* @__PURE__ */ i.createElement("div", { className: "cove-editor__content", "data-grid": l || null }, /* @__PURE__ */ i.createElement("div", { className: "cove-editor__content-wrap--x", style: o ? { maxWidth: o + "px", minWidth: "unset" } : null }, /* @__PURE__ */ i.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ i.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, l && t && /* @__PURE__ */ i.createElement(i.Fragment, null, Math.round(w.width), /* @__PURE__ */ i.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(w.height))), /* @__PURE__ */ i.createElement("div", { className: "cove-editor__grid-caret--top", ref: _ }, /* @__PURE__ */ i.createElement("div", { className: "cove-editor__grid-caret--bottom" }, e)))), /* @__PURE__ */ i.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ i.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ i.createElement("p", { className: t ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ i.createElement("p", { className: l ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ i.createElement("p", { className: s ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ i.createElement("p", { className: o ? "hotkey--active" : null }, "View")), /* @__PURE__ */ i.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ i.createElement("p", { className: t ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ i.createElement("p", { className: l ? "hotkey--active" : null }, "G"), /* @__PURE__ */ i.createElement("p", { className: s ? "hotkey--active" : null }, "R"), /* @__PURE__ */ i.createElement("p", { className: o ? "hotkey--active" : null }, x === "MacOS" ? /* @__PURE__ */ i.createElement(E, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " + ", o ? y.indexOf(o) + 1 : `[1 - ${y.length}]`))), /* @__PURE__ */ i.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ i.createElement("ul", { className: `cove-editor-utils__breakpoints-list${o ? " has-active" : ""}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        a((d) => !d);
      }
    },
    /* @__PURE__ */ i.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ i.createElement(E, { display: "grid" }))
  ), y.map((d, h) => /* @__PURE__ */ i.createElement("button", { className: `cove-editor-utils__breakpoints-item${o === d ? " active" : ""}`, onClick: () => N(d), key: h }, d, "px")), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        F();
      }
    },
    /* @__PURE__ */ i.createElement("div", { className: "cove-editor-utils__breakpoints-reset", ref: v }, /* @__PURE__ */ i.createElement(E, { display: "rotateLeft" }))
  ))));
};
const M = (e) => {
  const { displayPanel: r = !1, isDashboard: t = !1, title: n = "Configure Visualization", children: l, onBackClick: a } = e, o = () => {
    const s = ["editor-panel", "cove", "sidebar"];
    return r || s.push("hidden"), t && s.push("dashboard"), s;
  }, c = () => {
    const s = [];
    return r && s.push("editor-panel__toggle"), r || s.push("collapsed", "editor-panel__toggle"), s;
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("button", { className: c().join(" "), title: r ? "Collapse Editor" : "Expand Editor", onClick: a }), /* @__PURE__ */ i.createElement("section", { className: o().join(" ") }, /* @__PURE__ */ i.createElement("h2", { className: "editor-panel__title" }, n), /* @__PURE__ */ i.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, l)));
};
const P = u.forwardRef((e, r) => {
  const { config: t = {}, isEditor: n = !1, currentViewport: l = "lg", imageId: a = "", showEditorPanel: o = !0 } = e, c = () => {
    let s = ["cdc-open-viz-module", `${l}`, `font-${t == null ? void 0 : t.fontSize}`, `${t == null ? void 0 : t.theme}`];
    return n && s.push("spacing-wrapper"), n && s.push("isEditor"), n && o && (s = s.filter((m) => m !== "editor-panel--hidden"), s.push("editor-panel--visible")), n && !o && (s = s.filter((m) => m !== "editor-panel--visible"), s.push("editor-panel--hidden")), t.type === "filtered-text" ? (s.push("type-filtered-text"), s = s.filter((m) => m !== "cove-component__content"), s) : t.type === "chart" ? (s.push("type-chart"), (t == null ? void 0 : t.visualizationType) === "Spark Line" && s.push("type-sparkline"), s) : (t.type === "map" && s.push("type-map"), t.type === "data-bite" && (s.push("cdc-open-viz-module", "type-data-bite", l, t.theme, `font-${t.fontSize}`), n && s.push("is-editor")), t.type === "markup-include" && s.push("markup-include", "cdc-open-viz-module"), t.type === "waffle-chart" && (s.push("cove", "cdc-open-viz-module", "type-waffle-chart", l, t.theme, "font-" + t.overallFontSize), n && s.push("is-editor"), s.push("cove-component", "waffle-chart")), s);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ i.createElement(
      "div",
      {
        ...t.type === "chart" ? { "data-lollipop": t.isLollipopChart } : {},
        className: c().join(" "),
        "data-download-id": a,
        ref: r
      },
      e.children
    )
  );
}), J = {
  Responsive: g,
  Sidebar: M,
  VisualizationWrapper: P
}, B = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((r) => {
    const t = e.visualizations[r];
    t.type === "table" && (t.filters || (t.filters = [], t.filterBehavior = "Filter Change"));
  });
}, L = (e) => {
  const r = "4.24.4", t = f.cloneDeep(e);
  return B(t), t.version = r, t;
}, O = (e) => {
  e.type === "dashboard" && (e.rows = e.rows.map((r) => {
    let t;
    if (r.columns === void 0) {
      t = {};
      const n = r.map((l) => (t.uuid = l.uuid, t.toggle = l.toggle, t.equalHeight = l.equalHeight, f.pick(l, "equalHeight", "width", "hide", "widget", "uuid")));
      t.columns = n;
    }
    return t ?? r;
  }));
}, T = (e) => {
  e.type === "chart" && (e.xAxis.sortDates && (e.xAxis.type = "date-time"), e.table.download = !0, delete e.xAxis.sortDates);
}, I = (e) => {
  e.type === "map" && (e.table.download = !0, e.general.showDownloadButton = !0, e.general.expandDataTable = e.table.expanded);
}, U = (e) => {
  const r = "4.24.3", t = f.cloneDeep(e);
  return O(t), T(t), I(t), t.version = r, t;
}, V = (e) => {
  e.type === "markup-include" && (e.contentEditor || (e.contentEditor = {
    title: e.title,
    showHeader: e.showHeader,
    srcUrl: e.srcUrl
  }, delete e.title, delete e.showHeader, delete e.srcUrl), e.visual || (e.visual = {}));
}, A = (e) => {
  const r = "4.24.5", t = f.cloneDeep(e);
  return V(t), t.version = r, t;
};
function b(e, r) {
  if (!e)
    return !0;
  const [t, n, l] = e.split(".").map(Number), [a, o, c] = r.split(".").map(Number);
  return a > t || a === t && o > n || a === t && o === n && c > l;
}
const C = (e) => {
  if (!e.dashboard)
    return e;
  const r = e, t = {}, n = (r.dashboard.sharedFilters || []).map((l) => {
    var a, o;
    return ((a = l.apiFilter) == null ? void 0 : a.autoLoad) !== void 0 && delete l.apiFilter.autoLoad, ((o = l.apiFilter) == null ? void 0 : o.defaultValue) !== void 0 && delete l.apiFilter.defaultValue, l;
  });
  if (e.dashboard.sharedFilters = n, Object.keys(r.visualizations).forEach((l) => {
    const a = r.visualizations[l];
    a.hide !== void 0 && (a.sharedFilterIndexes = n.map((o, c) => c).filter((o) => !a.hide.includes(o)), a.type = "dashboardFilters", a.autoLoad ? a.filterBehavior = "Filter Change" : a.filterBehavior = "Apply Button", delete a.hide), a.type === "filter-dropdowns" && (a.type = "dashboardFilters", a.visualizationType = "dashboardFilters", a.sharedFilterIndexes || (a.sharedFilterIndexes = e.dashboard.sharedFilters.map((o, c) => c), a.filterBehavior = e.filterBehavior || "Filter Change")), a.type === "dashboardFilters" && !a.sharedFilterIndexes && (a.sharedFilterIndexes = e.dashboard.sharedFilters.map((o, c) => c), a.filterBehavior = e.filterBehavior || "Filter Change"), t[l] = a;
  }), e.dashboard.sharedFilters.length && !Object.values(t).find((l) => l.type === "dashboardFilters")) {
    const l = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: e.dashboard.sharedFilters.map((c, s) => s),
      filterBehavior: e.filterBehavior || "Filter Change"
    }, a = "legacySharedFilters";
    t[a] = l;
    const o = {
      columns: [
        {
          width: 12,
          widget: a
        }
      ]
    };
    e.rows = [o, ...e.rows];
  }
  e.visualizations = t;
}, j = (e) => (((t) => {
  t.type === "map" && t.columns.primary.roundToPlace === void 0 && (t.columns.primary.roundToPlace = 0);
})(e), e), W = (e) => {
  e.useLogScale && e.yAxis.type;
}, $ = (e) => {
  const r = "4.24.7", t = f.cloneDeep(e);
  return j(t), C(t), W(t), t.version = b(e.version, r) ? r : e.version, t;
}, K = (e) => {
  var r;
  if (e.type === "dashboard" && Object.values((e == null ? void 0 : e.visualizations) || {}).forEach((t) => {
    var n;
    if (t.type === "map" && ((n = t.general) == null ? void 0 : n.geoType) === "single-state") {
      let l = b(e.version, "4.24.9") ? !1 : t.general.allowMapZoom;
      t.general.allowMapZoom = l;
    }
  }), e.type === "map" && ((r = e.general) == null ? void 0 : r.geoType) === "single-state") {
    let t = b(e.version, "4.24.9") ? !1 : e.general.allowMapZoom;
    e.general.allowMapZoom = t;
  }
}, Z = (e) => {
  const r = "4.24.9", t = f.cloneDeep(e);
  return K(t), t.version = r, t;
}, z = (e) => {
  e.multiDashboards && e.multiDashboards.forEach((n, l) => {
    n.type = "dashboard", e.multiDashboards[l] = z(n);
  });
  let r = e;
  return (() => {
    [
      ["4.24.3", U],
      ["4.24.4", L],
      ["4.24.5", A],
      ["4.24.7", $, !0],
      ["4.24.9", Z]
    ].forEach(([l, a, o]) => {
      (b(r.version, l) || o) && (r = a(r));
    });
  })(), r;
}, Q = async (e) => await z(e);
export {
  J as L,
  Q as a,
  z as c
};
