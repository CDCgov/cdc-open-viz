import { r as d, R as r } from "./storybook-index-45401197.es.js";
import { a as _ } from "./storybook-Icon-96a1fdd8.es.js";
import { _ as y } from "./storybook-lodash-c15d8e1c.es.js";
const f = [
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
], z = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, g = ({ children: t, isEditor: s }) => {
  const [e, c] = d.useState(!1), [l, i] = d.useState(!1), [o, u] = d.useState(null), [a, m] = d.useState(!1);
  d.useState(!1);
  const [E, x] = d.useState(null), v = d.useRef(null);
  d.useRef(null);
  const b = d.useRef(null), k = d.useCallback(
    (n) => u((h) => h !== n ? n : null),
    [o]
  ), w = (n) => {
    n.code === "KeyL" && n.ctrlKey && c((p) => !p);
    const h = z === "MacOS" ? n.metaKey : n.altKey;
    if (h) {
      let p = n.key;
      isNaN(p) || p <= f.length && (n.preventDefault(), k(f[p - 1]));
    }
    h || (n.code === "KeyG" && i((p) => !p), n.code === "KeyR" && N());
  };
  d.useEffect(() => (document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w)), []);
  const N = d.useCallback(() => {
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
        let { width: R, height: S } = p.contentRect;
        x({ width: R, height: S });
      }
    });
    return n.observe(b.current), () => {
      n && (n.disconnect(), n = null);
    };
  }), !s || !e ? t : /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content", "data-grid": l || null }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content-wrap--x", style: o ? { maxWidth: o + "px", minWidth: "unset" } : null }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, l && e && /* @__PURE__ */ r.createElement(r.Fragment, null, Math.round(E.width), /* @__PURE__ */ r.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(E.height))), /* @__PURE__ */ r.createElement("div", { className: "cove-editor__grid-caret--top", ref: b }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__grid-caret--bottom" }, t)))), /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ r.createElement("p", { className: e ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ r.createElement("p", { className: l ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ r.createElement("p", { className: a ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ r.createElement("p", { className: o ? "hotkey--active" : null }, "View")), /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ r.createElement("p", { className: e ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ r.createElement("p", { className: l ? "hotkey--active" : null }, "G"), /* @__PURE__ */ r.createElement("p", { className: a ? "hotkey--active" : null }, "R"), /* @__PURE__ */ r.createElement("p", { className: o ? "hotkey--active" : null }, z === "MacOS" ? /* @__PURE__ */ r.createElement(_, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " + ", o ? f.indexOf(o) + 1 : `[1 - ${f.length}]`))), /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ r.createElement("ul", { className: `cove-editor-utils__breakpoints-list${o ? " has-active" : ""}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        i((n) => !n);
      }
    },
    /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ r.createElement(_, { display: "grid" }))
  ), f.map((n, h) => /* @__PURE__ */ r.createElement("button", { className: `cove-editor-utils__breakpoints-item${o === n ? " active" : ""}`, onClick: () => k(n), key: h }, n, "px")), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        N();
      }
    },
    /* @__PURE__ */ r.createElement("div", { className: "cove-editor-utils__breakpoints-reset", ref: v }, /* @__PURE__ */ r.createElement(_, { display: "rotateLeft" }))
  ))));
};
const D = (t) => {
  const { displayPanel: s = !1, isDashboard: e = !1, title: c = "Configure Visualization", children: l, onBackClick: i } = t, o = () => {
    const a = ["editor-panel", "cove", "sidebar"];
    return s || a.push("hidden"), e && a.push("dashboard"), a;
  }, u = () => {
    const a = [];
    return s && a.push("editor-panel__toggle"), s || a.push("collapsed", "editor-panel__toggle"), a;
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("button", { className: u().join(" "), title: s ? "Collapse Editor" : "Expand Editor", onClick: i }), /* @__PURE__ */ r.createElement("section", { className: o().join(" ") }, /* @__PURE__ */ r.createElement("h2", { className: "editor-panel__title" }, c), /* @__PURE__ */ r.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, l)));
};
const P = d.forwardRef((t, s) => {
  const { config: e = {}, isEditor: c = !1, currentViewport: l = "lg", imageId: i = "", showEditorPanel: o = !0 } = t, u = () => {
    let a = ["cdc-open-viz-module", `${l}`, `font-${e == null ? void 0 : e.fontSize}`, `${e == null ? void 0 : e.theme}`];
    return c && a.push("spacing-wrapper"), c && a.push("isEditor"), c && o && (a = a.filter((m) => m !== "editor-panel--hidden"), a.push("editor-panel--visible")), c && !o && (a = a.filter((m) => m !== "editor-panel--visible"), a.push("editor-panel--hidden")), e.type === "filtered-text" ? (a.push("type-filtered-text"), a = a.filter((m) => m !== "cove-component__content"), a) : e.type === "chart" ? (a.push("type-chart"), (e == null ? void 0 : e.visualizationType) === "Spark Line" && a.push("type-sparkline"), a) : (e.type === "map" && a.push("type-map"), e.type === "data-bite" && (a.push("cdc-open-viz-module", "type-data-bite", l, e.theme, `font-${e.fontSize}`), c && a.push("is-editor")), e.type === "markup-include" && a.push("markup-include", "cdc-open-viz-module"), e.type === "waffle-chart" && (a.push("cove", "cdc-open-viz-module", "type-waffle-chart", l, e.theme, "font-" + e.overallFontSize), c && a.push("is-editor"), a.push("cove-component", "waffle-chart")), a);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ r.createElement(
      "div",
      {
        ...e.type === "chart" ? { "data-lollipop": e.isLollipopChart } : {},
        className: u().join(" "),
        "data-download-id": i,
        ref: s
      },
      t.children
    )
  );
}), H = {
  Responsive: g,
  Sidebar: D,
  VisualizationWrapper: P
}, L = (t) => {
  t.type === "dashboard" && Object.keys(t.visualizations).forEach((s) => {
    const e = t.visualizations[s];
    e.type === "table" && (e.filters || (e.filters = [], e.filterBehavior = "Filter Change"));
  });
}, O = (t) => {
  const s = "4.24.4", e = y.cloneDeep(t);
  return L(e), e.version = s, e;
}, T = (t) => {
  t.type === "dashboard" && (t.rows = t.rows.map((s) => {
    let e;
    if (s.columns === void 0) {
      e = {};
      const c = s.map((l) => (e.uuid = l.uuid, e.toggle = l.toggle, e.equalHeight = l.equalHeight, y.pick(l, "equalHeight", "width", "hide", "widget", "uuid")));
      e.columns = c;
    }
    return e ?? s;
  }));
}, V = (t) => {
  t.type === "chart" && (t.xAxis.sortDates && (t.xAxis.type = "date-time"), t.table.download = !0, delete t.xAxis.sortDates);
}, A = (t) => {
  t.type === "map" && (t.table.download = !0, t.general.showDownloadButton = !0, t.general.expandDataTable = t.table.expanded);
}, B = (t) => {
  const s = "4.24.3", e = y.cloneDeep(t);
  return T(e), V(e), A(e), e.version = s, e;
}, $ = (t) => {
  t.type === "markup-include" && (t.contentEditor || (t.contentEditor = {
    title: t.title,
    showHeader: t.showHeader,
    srcUrl: t.srcUrl
  }, delete t.title, delete t.showHeader, delete t.srcUrl), t.visual || (t.visual = {}));
}, M = (t) => {
  const s = "4.24.4", e = y.cloneDeep(t);
  return $(e), e.version = s, e;
}, U = (t) => {
  if (!t.dashboard)
    return t;
  const s = t, e = {}, c = (s.dashboard.sharedFilters || []).map((l) => {
    var i, o;
    return ((i = l.apiFilter) == null ? void 0 : i.autoLoad) !== void 0 && delete l.apiFilter.autoLoad, ((o = l.apiFilter) == null ? void 0 : o.defaultValue) !== void 0 && delete l.apiFilter.defaultValue, l;
  });
  if (t.dashboard.sharedFilters = c, Object.keys(s.visualizations).forEach((l) => {
    const i = s.visualizations[l];
    i.hide !== void 0 && (i.sharedFilterIndexes = c.map((o, u) => u).filter((o) => !i.hide.includes(o)), i.type = "dashboardFilters", i.autoLoad ? i.filterBehavior = "Filter Change" : i.filterBehavior = "Apply Button", delete i.hide), i.type === "filter-dropdowns" && (i.type = "dashboardFilters"), i.visualizationType === "filter-dropdowns" && (i.visualizationType = "dashboardFilters"), e[l] = i;
  }), t.dashboard.sharedFilters.length && !Object.values(e).find((l) => l.type === "dashboardFilters")) {
    const l = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: t.dashboard.sharedFilters.map((u, a) => a),
      filterBehavior: t.filterBehavior || "Filter Change"
    }, i = "legacySharedFilters";
    e[i] = l;
    const o = {
      columns: [
        {
          width: 12,
          widget: i
        }
      ]
    };
    t.rows = [o, ...t.rows];
  }
  t.visualizations = e;
}, W = (t) => (((e) => {
  e.type === "map" && e.columns.primary.roundToPlace === void 0 && (e.columns.primary.roundToPlace = 0);
})(t), t), C = (t) => {
  const s = "4.24.7", e = y.cloneDeep(t);
  return W(e), U(e), e.version = s, e;
}, F = (t) => {
  t.multiDashboards && t.multiDashboards.forEach((e, c) => {
    t.multiDashboards[c] = F(e);
  });
  let s = t;
  return s = B(s), s = O(s), s = M(s), s = C(s), s;
}, q = async (t) => await F(t);
export {
  H as L,
  q as a,
  F as c
};
