import { r as u, R as l } from "./storybook-index-45401197.es.js";
import { I as w } from "./storybook-Icon-9a8d8f01.es.js";
import { _ as f } from "./storybook-lodash-c15d8e1c.es.js";
const b = [
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
], x = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, P = ({ children: e, isEditor: a }) => {
  const [t, n] = u.useState(!1), [i, s] = u.useState(!1), [o, c] = u.useState(null), [r, y] = u.useState(!1);
  u.useState(!1);
  const [m, D] = u.useState(null), v = u.useRef(null);
  u.useRef(null);
  const E = u.useRef(null), N = u.useCallback(
    (d) => c((h) => h !== d ? d : null),
    [o]
  ), k = (d) => {
    d.code === "KeyL" && d.ctrlKey && n((p) => !p);
    const h = x === "MacOS" ? d.metaKey : d.altKey;
    if (h) {
      let p = d.key;
      isNaN(p) || p <= b.length && (d.preventDefault(), N(b[p - 1]));
    }
    h || (d.code === "KeyG" && s((p) => !p), d.code === "KeyR" && F());
  };
  u.useEffect(() => (document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k)), []);
  const F = u.useCallback(() => {
    if (!r && v.current) {
      c(null), y(!0), s(!1), v.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", v.current.style.transform = "rotate(-360deg)";
      const d = setTimeout(() => {
        y(!1), v.current.style.transition = null, v.current.style.transform = "rotate(0deg)", v.current.style.transform = null;
      }, 400);
      return () => clearTimeout(d);
    }
  }, [r]);
  return u.useEffect(() => s(!!o), [o]), u.useEffect(() => {
    if (!E.current)
      return;
    let d = new ResizeObserver((h) => {
      for (let p of h) {
        let { width: R, height: M } = p.contentRect;
        D({ width: R, height: M });
      }
    });
    return d.observe(E.current), () => {
      d && (d.disconnect(), d = null);
    };
  }), !a || !t ? e : /* @__PURE__ */ l.createElement("div", { className: "cove-editor__content", "data-grid": i || null }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor__content-wrap--x", style: o ? { maxWidth: o + "px", minWidth: "unset" } : null }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, i && t && /* @__PURE__ */ l.createElement(l.Fragment, null, Math.round(m.width), /* @__PURE__ */ l.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(m.height))), /* @__PURE__ */ l.createElement("div", { className: "cove-editor__grid-caret--top", ref: E }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor__grid-caret--bottom" }, e)))), /* @__PURE__ */ l.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ l.createElement("p", { className: t ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ l.createElement("p", { className: i ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ l.createElement("p", { className: r ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ l.createElement("p", { className: o ? "hotkey--active" : null }, "View")), /* @__PURE__ */ l.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ l.createElement("p", { className: t ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ l.createElement("p", { className: i ? "hotkey--active" : null }, "G"), /* @__PURE__ */ l.createElement("p", { className: r ? "hotkey--active" : null }, "R"), /* @__PURE__ */ l.createElement("p", { className: o ? "hotkey--active" : null }, x === "MacOS" ? /* @__PURE__ */ l.createElement(w, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " + ", o ? b.indexOf(o) + 1 : `[1 - ${b.length}]`))), /* @__PURE__ */ l.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ l.createElement("ul", { className: `cove-editor-utils__breakpoints-list${o ? " has-active" : ""}` }, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        s((d) => !d);
      }
    },
    /* @__PURE__ */ l.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ l.createElement(w, { display: "grid" }))
  ), b.map((d, h) => /* @__PURE__ */ l.createElement("button", { className: `cove-editor-utils__breakpoints-item${o === d ? " active" : ""}`, onClick: () => N(d), key: h }, d, "px")), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        F();
      }
    },
    /* @__PURE__ */ l.createElement("div", { className: "cove-editor-utils__breakpoints-reset", ref: v }, /* @__PURE__ */ l.createElement(w, { display: "rotateLeft" }))
  ))));
};
const g = (e) => {
  const { displayPanel: a = !1, isDashboard: t = !1, title: n = "Configure Visualization", children: i, onBackClick: s } = e, o = () => {
    const r = ["editor-panel", "cove", "sidebar"];
    return a || r.push("hidden"), t && r.push("dashboard"), r;
  }, c = () => {
    const r = [];
    return a && r.push("editor-panel__toggle"), a || r.push("collapsed", "editor-panel__toggle"), r;
  };
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("button", { className: c().join(" "), title: a ? "Collapse Editor" : "Expand Editor", onClick: s }), /* @__PURE__ */ l.createElement("section", { className: o().join(" ") }, /* @__PURE__ */ l.createElement("h2", { className: "editor-panel__title" }, n), /* @__PURE__ */ l.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, i)));
};
const B = u.forwardRef((e, a) => {
  const { config: t = {}, isEditor: n = !1, currentViewport: i = "lg", imageId: s = "", showEditorPanel: o = !0 } = e, c = () => {
    var y;
    let r = ["cdc-open-viz-module", `${i}`, `font-${t == null ? void 0 : t.fontSize}`, `${t == null ? void 0 : t.theme}`];
    return n && r.push("spacing-wrapper"), n && r.push("isEditor"), n && o && (r = r.filter((m) => m !== "editor-panel--hidden"), r.push("editor-panel--visible")), n && !o && (r = r.filter((m) => m !== "editor-panel--visible"), r.push("editor-panel--hidden")), t.type === "filtered-text" ? (r.push("type-filtered-text"), r = r.filter((m) => m !== "cove-component__content"), r) : t.type === "chart" ? (r.push("type-chart"), (t == null ? void 0 : t.visualizationType) === "Spark Line" && r.push("type-sparkline"), r) : (t.type === "map" && (r.push("type-map"), ((y = t == null ? void 0 : t.runtime) == null ? void 0 : y.editorErrorMessage.length) !== 0 && r.push("type-map--has-error")), t.type === "data-bite" && (r.push("cdc-open-viz-module", "type-data-bite", i, t.theme, `font-${t.fontSize}`), n && r.push("is-editor")), t.type === "markup-include" && r.push("markup-include", "cdc-open-viz-module"), t.type === "waffle-chart" && (r.push("cove", "cdc-open-viz-module", "type-waffle-chart", i, t.theme, "font-" + t.overallFontSize), n && r.push("is-editor"), r.push("cove-component", "waffle-chart")), r);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ l.createElement(
      "div",
      {
        ...t.type === "chart" ? { "data-lollipop": t.isLollipopChart } : {},
        className: c().join(" "),
        "data-download-id": s,
        ref: a
      },
      e.children
    )
  );
}), X = {
  Responsive: P,
  Sidebar: g,
  VisualizationWrapper: B
}, I = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((a) => {
    const t = e.visualizations[a];
    t.type === "table" && (t.filters || (t.filters = [], t.filterBehavior = "Filter Change"));
  });
}, L = (e) => {
  const a = "4.24.4", t = f.cloneDeep(e);
  return I(t), t.version = a, t;
}, O = (e) => {
  e.type === "dashboard" && (e.rows = e.rows.map((a) => {
    let t;
    if (a.columns === void 0) {
      t = {};
      const n = a.map((i) => (t.uuid = i.uuid, t.toggle = i.toggle, t.equalHeight = i.equalHeight, f.pick(i, "equalHeight", "width", "hide", "widget", "uuid")));
      t.columns = n;
    }
    return t ?? a;
  }));
}, T = (e) => {
  e.type === "chart" && (e.xAxis.sortDates && (e.xAxis.type = "date-time"), e.table.download = !0, delete e.xAxis.sortDates);
}, j = (e) => {
  e.type === "map" && (e.table.download = !0, e.general.showDownloadButton = !0, e.general.expandDataTable = e.table.expanded);
}, A = (e) => {
  const a = "4.24.3", t = f.cloneDeep(e);
  return O(t), T(t), j(t), t.version = a, t;
}, C = (e) => {
  e.type === "markup-include" && (e.contentEditor || (e.contentEditor = {
    title: e.title,
    showHeader: e.showHeader,
    srcUrl: e.srcUrl
  }, delete e.title, delete e.showHeader, delete e.srcUrl), e.visual || (e.visual = {}));
}, V = (e) => {
  const a = "4.24.5", t = f.cloneDeep(e);
  return C(t), t.version = a, t;
};
function _(e, a) {
  if (!e)
    return !0;
  const [t, n, i] = e.split(".").map(Number), [s, o, c] = a.split(".").map(Number);
  return s > t || s === t && o > n || s === t && o === n && c > i;
}
const U = (e) => {
  if (!e.dashboard)
    return e;
  const a = e, t = {}, n = (a.dashboard.sharedFilters || []).map((i) => {
    var s, o;
    return ((s = i.apiFilter) == null ? void 0 : s.autoLoad) !== void 0 && delete i.apiFilter.autoLoad, ((o = i.apiFilter) == null ? void 0 : o.defaultValue) !== void 0 && delete i.apiFilter.defaultValue, i;
  });
  if (e.dashboard.sharedFilters = n, Object.keys(a.visualizations).forEach((i) => {
    const s = a.visualizations[i];
    s.hide !== void 0 && (s.sharedFilterIndexes = n.map((o, c) => c).filter((o) => !s.hide.includes(o)), s.type = "dashboardFilters", s.autoLoad ? s.filterBehavior = "Filter Change" : s.filterBehavior = "Apply Button", delete s.hide), s.type === "filter-dropdowns" && (s.type = "dashboardFilters", s.visualizationType = "dashboardFilters", s.sharedFilterIndexes || (s.sharedFilterIndexes = e.dashboard.sharedFilters.map((o, c) => c), s.filterBehavior = e.filterBehavior || "Filter Change")), s.type === "dashboardFilters" && !s.sharedFilterIndexes && (s.sharedFilterIndexes = e.dashboard.sharedFilters.map((o, c) => c), s.filterBehavior = e.filterBehavior || "Filter Change"), t[i] = s;
  }), e.dashboard.sharedFilters.length && !Object.values(t).find((i) => i.type === "dashboardFilters")) {
    const i = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: e.dashboard.sharedFilters.map((c, r) => r),
      filterBehavior: e.filterBehavior || "Filter Change"
    }, s = "legacySharedFilters";
    t[s] = i;
    const o = {
      columns: [
        {
          width: 12,
          widget: s
        }
      ]
    };
    e.rows = [o, ...e.rows];
  }
  e.visualizations = t, delete e.filterBehavior;
}, W = (e) => (((t) => {
  t.type === "map" && t.columns.primary.roundToPlace === void 0 && (t.columns.primary.roundToPlace = 0);
})(e), e), $ = (e) => {
  e.useLogScale && e.yAxis.type;
}, H = (e) => {
  const a = "4.24.7", t = f.cloneDeep(e);
  return W(t), U(t), $(t), t.version = _(e.version, a) ? a : e.version, t;
}, K = (e) => {
  var a;
  if (e.type === "dashboard" && Object.values((e == null ? void 0 : e.visualizations) || {}).forEach((t) => {
    var n;
    if (t.type === "map" && ((n = t.general) == null ? void 0 : n.geoType) === "single-state") {
      let i = _(e.version, "4.24.9") ? !1 : t.general.allowMapZoom;
      t.general.allowMapZoom = i;
    }
  }), e.type === "map" && ((a = e.general) == null ? void 0 : a.geoType) === "single-state") {
    let t = _(e.version, "4.24.9") ? !1 : e.general.allowMapZoom;
    e.general.allowMapZoom = t;
  }
}, z = (e) => e == null ? void 0 : e.some((a) => !a.id), Z = (e) => {
  var a;
  e.type === "dashboard" ? e.visualizations = Object.keys(e.visualizations).reduce((t, n) => {
    var s;
    const i = e.visualizations[n];
    return (s = i.filters) != null && s.length && z(i.filters) && (t[n].filters = i.filters.map((o, c) => ({ ...o, id: Date.now() + c }))), t;
  }, e.visualizations) : (a = e.filters) != null && a.length && z(e.filters) && (e.filters = e.filters.map((t, n) => ({ ...t, id: Date.now() + n })));
}, q = (e) => {
  const a = "4.24.9", t = f.cloneDeep(e);
  return K(t), Z(t), t.version = a, t;
}, S = (e) => {
  let a = e;
  return [
    ["4.24.3", A],
    ["4.24.4", L],
    ["4.24.5", V],
    ["4.24.7", H, !0],
    ["4.24.9", q]
  ].forEach(([n, i, s]) => {
    (_(a.version, n) || s) && (a = i(a)), a.multiDashboards && a.multiDashboards.forEach((o, c) => {
      o.type = "dashboard", a.multiDashboards[c] = S(o);
    });
  }), a;
}, Y = async (e) => await S(e);
export {
  X as L,
  Y as a,
  S as c
};
