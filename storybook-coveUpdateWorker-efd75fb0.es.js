import { r as d, R as r } from "./storybook-index-45401197.es.js";
import { a as _ } from "./storybook-Icon-b09f76c0.es.js";
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
], z = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, R = ({ children: e, isEditor: s }) => {
  const [t, c] = d.useState(!1), [l, i] = d.useState(!1), [o, u] = d.useState(null), [a, m] = d.useState(!1);
  d.useState(!1);
  const [E, x] = d.useState(null), v = d.useRef(null);
  d.useRef(null);
  const b = d.useRef(null), N = d.useCallback(
    (n) => u((h) => h !== n ? n : null),
    [o]
  ), k = (n) => {
    n.code === "KeyL" && n.ctrlKey && c((p) => !p);
    const h = z === "MacOS" ? n.metaKey : n.altKey;
    if (h) {
      let p = n.key;
      isNaN(p) || p <= y.length && (n.preventDefault(), N(y[p - 1]));
    }
    h || (n.code === "KeyG" && i((p) => !p), n.code === "KeyR" && w());
  };
  d.useEffect(() => (document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k)), []);
  const w = d.useCallback(() => {
    if (!a && v.current) {
      u(null), m(!0), i(!1), v.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", v.current.style.transform = "rotate(-360deg)";
      const n = setTimeout(() => {
        m(!1), v.current.style.transition = null, v.current.style.transform = "rotate(0deg)", v.current.style.transform = null;
      }, 400);
      return () => clearTimeout(n);
    }
  }, [a]);
  return d.useEffect(() => i(!!o), [o]), d.useEffect(() => {
    if (!b.current)
      return;
    let n = new ResizeObserver((h) => {
      for (let p of h) {
        let { width: g, height: S } = p.contentRect;
        x({ width: g, height: S });
      }
    });
    return n.observe(b.current), () => {
      n && (n.disconnect(), n = null);
    };
  }), !s || !t ? e : /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content", "data-grid": l || null }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content-wrap--x", style: o ? { maxWidth: o + "px", minWidth: "unset" } : null }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, l && t && /* @__PURE__ */ r.createElement(r.Fragment, null, Math.round(E.width), /* @__PURE__ */ r.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(E.height))), /* @__PURE__ */ r.createElement("div", { className: "cove-editor__grid-caret--top", ref: b }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__grid-caret--bottom" }, e)))), /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ r.createElement("p", { className: t ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ r.createElement("p", { className: l ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ r.createElement("p", { className: a ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ r.createElement("p", { className: o ? "hotkey--active" : null }, "View")), /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ r.createElement("p", { className: t ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ r.createElement("p", { className: l ? "hotkey--active" : null }, "G"), /* @__PURE__ */ r.createElement("p", { className: a ? "hotkey--active" : null }, "R"), /* @__PURE__ */ r.createElement("p", { className: o ? "hotkey--active" : null }, z === "MacOS" ? /* @__PURE__ */ r.createElement(_, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " + ", o ? y.indexOf(o) + 1 : `[1 - ${y.length}]`))), /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ r.createElement("ul", { className: `cove-editor-utils__breakpoints-list${o ? " has-active" : ""}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        i((n) => !n);
      }
    },
    /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ r.createElement(_, { display: "grid" }))
  ), y.map((n, h) => /* @__PURE__ */ r.createElement("button", { className: `cove-editor-utils__breakpoints-item${o === n ? " active" : ""}`, onClick: () => N(n), key: h }, n, "px")), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        w();
      }
    },
    /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints-reset", ref: v }, /* @__PURE__ */ r.createElement(_, { display: "rotateLeft" }))
  ))));
};
const D = (e) => {
  const { displayPanel: s = !1, isDashboard: t = !1, title: c = "Configure Visualization", children: l, onBackClick: i } = e, o = () => {
    const a = ["editor-panel", "cove", "sidebar"];
    return s || a.push("hidden"), t && a.push("dashboard"), a;
  }, u = () => {
    const a = [];
    return s && a.push("editor-panel__toggle"), s || a.push("collapsed", "editor-panel__toggle"), a;
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("button", { className: u().join(" "), title: s ? "Collapse Editor" : "Expand Editor", onClick: i }), /* @__PURE__ */ r.createElement("section", { className: o().join(" ") }, /* @__PURE__ */ r.createElement("h2", { className: "editor-panel__title" }, c), /* @__PURE__ */ r.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, l)));
};
const P = d.forwardRef((e, s) => {
  const { config: t = {}, isEditor: c = !1, currentViewport: l = "lg", imageId: i = "", showEditorPanel: o = !0 } = e, u = () => {
    let a = ["cdc-open-viz-module", `${l}`, `font-${t == null ? void 0 : t.fontSize}`, `${t == null ? void 0 : t.theme}`];
    return c && a.push("spacing-wrapper"), c && a.push("isEditor"), c && o && (a = a.filter((m) => m !== "editor-panel--hidden"), a.push("editor-panel--visible")), c && !o && (a = a.filter((m) => m !== "editor-panel--visible"), a.push("editor-panel--hidden")), t.type === "filtered-text" ? (a.push("type-filtered-text"), a = a.filter((m) => m !== "cove-component__content"), a) : t.type === "chart" ? (a.push("type-chart"), (t == null ? void 0 : t.visualizationType) === "Spark Line" && a.push("type-sparkline"), a) : (t.type === "map" && a.push("type-map"), t.type === "data-bite" && (a.push("cdc-open-viz-module", "type-data-bite", l, t.theme, `font-${t.fontSize}`), c && a.push("is-editor")), t.type === "markup-include" && a.push("markup-include", "cdc-open-viz-module"), t.type === "waffle-chart" && (a.push("cove", "cdc-open-viz-module", "type-waffle-chart", l, t.theme, "font-" + t.overallFontSize), c && a.push("is-editor"), a.push("cove-component", "waffle-chart")), a);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ r.createElement(
      "div",
      {
        ...t.type === "chart" ? { "data-lollipop": t.isLollipopChart } : {},
        className: u().join(" "),
        "data-download-id": i,
        ref: s
      },
      e.children
    )
  );
}), Z = {
  Responsive: R,
  Sidebar: D,
  VisualizationWrapper: P
}, M = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((s) => {
    const t = e.visualizations[s];
    t.type === "table" && (t.filters || (t.filters = [], t.filterBehavior = "Filter Change"));
  });
}, T = (e) => {
  const s = "4.24.4", t = f.cloneDeep(e);
  return M(t), t.version = s, t;
}, L = (e) => {
  e.type === "dashboard" && (e.rows = e.rows.map((s) => {
    let t;
    if (s.columns === void 0) {
      t = {};
      const c = s.map((l) => (t.uuid = l.uuid, t.toggle = l.toggle, t.equalHeight = l.equalHeight, f.pick(l, "equalHeight", "width", "hide", "widget", "uuid")));
      t.columns = c;
    }
    return t ?? s;
  }));
}, O = (e) => {
  e.type === "chart" && (e.xAxis.sortDates && (e.xAxis.type = "date-time"), e.table.download = !0, delete e.xAxis.sortDates);
}, U = (e) => {
  e.type === "map" && (e.table.download = !0, e.general.showDownloadButton = !0, e.general.expandDataTable = e.table.expanded);
}, V = (e) => {
  const s = "4.24.3", t = f.cloneDeep(e);
  return L(t), O(t), U(t), t.version = s, t;
}, A = (e) => {
  e.type === "markup-include" && (e.contentEditor || (e.contentEditor = {
    title: e.title,
    showHeader: e.showHeader,
    srcUrl: e.srcUrl
  }, delete e.title, delete e.showHeader, delete e.srcUrl), e.visual || (e.visual = {}));
}, B = (e) => {
  const s = "4.24.5", t = f.cloneDeep(e);
  return A(t), t.version = s, t;
}, j = (e) => {
  if (!e.dashboard)
    return e;
  const s = e, t = {}, c = (s.dashboard.sharedFilters || []).map((l) => {
    var i, o;
    return ((i = l.apiFilter) == null ? void 0 : i.autoLoad) !== void 0 && delete l.apiFilter.autoLoad, ((o = l.apiFilter) == null ? void 0 : o.defaultValue) !== void 0 && delete l.apiFilter.defaultValue, l;
  });
  if (e.dashboard.sharedFilters = c, Object.keys(s.visualizations).forEach((l) => {
    const i = s.visualizations[l];
    i.hide !== void 0 && (i.sharedFilterIndexes = c.map((o, u) => u).filter((o) => !i.hide.includes(o)), i.type = "dashboardFilters", i.autoLoad ? i.filterBehavior = "Filter Change" : i.filterBehavior = "Apply Button", delete i.hide), i.type === "filter-dropdowns" && (i.type = "dashboardFilters"), i.visualizationType === "filter-dropdowns" && (i.visualizationType = "dashboardFilters"), t[l] = i;
  }), e.dashboard.sharedFilters.length && !Object.values(t).find((l) => l.type === "dashboardFilters")) {
    const l = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: e.dashboard.sharedFilters.map((u, a) => a),
      filterBehavior: e.filterBehavior || "Filter Change"
    }, i = "legacySharedFilters";
    t[i] = l;
    const o = {
      columns: [
        {
          width: 12,
          widget: i
        }
      ]
    };
    e.rows = [o, ...e.rows];
  }
  e.visualizations = t;
}, W = (e) => (((t) => {
  t.type === "map" && t.columns.primary.roundToPlace === void 0 && (t.columns.primary.roundToPlace = 0);
})(e), e), $ = (e) => {
  const s = "4.24.7", t = f.cloneDeep(e);
  return W(t), j(t), t.version = s, t;
}, I = (e) => {
  e.type === "map" && e.general.geoType === "single-state" && (e.general.allowMapZoom = !1);
}, K = (e) => {
  const s = "4.24.9", t = f.cloneDeep(e);
  return I(t), t.version = s, t;
};
function C(e, s) {
  if (!e)
    return !0;
  const [t, c, l] = e.split(".").map(Number), [i, o, u] = s.split(".").map(Number);
  return i > t || i === t && o > c || i === t && o === c && u > l;
}
const F = (e) => {
  e.multiDashboards && e.multiDashboards.forEach((c, l) => {
    c.type = "dashboard", e.multiDashboards[l] = F(c);
  });
  let s = e;
  return (() => {
    [
      ["4.24.3", V],
      ["4.24.4", T],
      ["4.24.5", B],
      ["4.24.7", $],
      ["4.24.9", K]
    ].forEach(([l, i]) => {
      C(s.version, l) && (s = i(s));
    });
  })(), s;
}, J = async (e) => await F(e);
export {
  Z as L,
  J as a,
  F as c
};
