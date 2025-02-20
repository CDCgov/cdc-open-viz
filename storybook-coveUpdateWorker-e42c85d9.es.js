import { r as m, R as n } from "./storybook-index-45401197.es.js";
import { a as C } from "./storybook-Icon-d8cd8abc.es.js";
import { i as M } from "./storybook-viewports-5c5d7af1.es.js";
import { _ as E } from "./storybook-lodash-a4231e1c.es.js";
const F = [
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
], B = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, P = ({ children: e, isEditor: s }) => {
  const [t, l] = m.useState(!1), [r, a] = m.useState(!1), [i, d] = m.useState(null), [p, o] = m.useState(!1);
  m.useState(!1);
  const [u, _] = m.useState(null), v = m.useRef(null);
  m.useRef(null);
  const f = m.useRef(null), h = m.useCallback(
    (c) => d((y) => y !== c ? c : null),
    [i]
  ), k = (c) => {
    if (!s)
      return c;
    c.code === "KeyL" && c.ctrlKey && l((b) => !b);
    const y = B === "MacOS" ? c.metaKey : c.altKey;
    if (y) {
      let b = c.key;
      isNaN(b) || b <= F.length && (c.preventDefault(), h(F[b - 1]));
    }
    y || (c.code === "KeyG" && a((b) => !b), c.code === "KeyR" && w());
  };
  m.useEffect(() => (document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k)), []);
  const w = m.useCallback(() => {
    if (!p && v.current) {
      d(null), o(!0), a(!1), v.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", v.current.style.transform = "rotate(-360deg)";
      const c = setTimeout(() => {
        o(!1), v.current.style.transition = null, v.current.style.transform = "rotate(0deg)", v.current.style.transform = null;
      }, 400);
      return () => clearTimeout(c);
    }
  }, [p]);
  return m.useEffect(() => a(!!i), [i]), m.useEffect(() => {
    if (!f.current)
      return;
    let c = new ResizeObserver((y) => {
      for (let b of y) {
        let { width: S, height: x } = b.contentRect;
        _({ width: S, height: x });
      }
    });
    return c.observe(f.current), () => {
      c && (c.disconnect(), c = null);
    };
  }), !s || !t ? e : /* @__PURE__ */ n.createElement("div", { className: "cove-editor__content", "data-grid": r || null }, /* @__PURE__ */ n.createElement(
    "div",
    {
      className: "cove-editor__content-wrap--x",
      style: i ? { maxWidth: i + "px", minWidth: "unset" } : null
    },
    /* @__PURE__ */ n.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, r && t && /* @__PURE__ */ n.createElement(n.Fragment, null, Math.round(u.width), /* @__PURE__ */ n.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(u.height))), /* @__PURE__ */ n.createElement("div", { className: "cove-editor__grid-caret--top", ref: f }, /* @__PURE__ */ n.createElement("div", { className: "cove-editor__grid-caret--bottom" }, e)))
  ), /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ n.createElement("p", { className: t ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ n.createElement("p", { className: r ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ n.createElement("p", { className: p ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ n.createElement("p", { className: i ? "hotkey--active" : null }, "View")), /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ n.createElement("p", { className: t ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ n.createElement("p", { className: r ? "hotkey--active" : null }, "G"), /* @__PURE__ */ n.createElement("p", { className: p ? "hotkey--active" : null }, "R"), /* @__PURE__ */ n.createElement("p", { className: i ? "hotkey--active" : null }, B === "MacOS" ? /* @__PURE__ */ n.createElement(C, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " +", " ", i ? F.indexOf(i) + 1 : `[1 - ${F.length}]`))), /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ n.createElement("ul", { className: `cove-editor-utils__breakpoints-list${i ? " has-active" : ""}` }, /* @__PURE__ */ n.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        a((c) => !c);
      }
    },
    /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ n.createElement(C, { display: "grid" }))
  ), F.map((c, y) => /* @__PURE__ */ n.createElement(
    "button",
    {
      className: `cove-editor-utils__breakpoints-item${i === c ? " active" : ""}`,
      onClick: () => h(c),
      key: y
    },
    c,
    "px"
  )), /* @__PURE__ */ n.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        w();
      }
    },
    /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__breakpoints-reset", ref: v }, /* @__PURE__ */ n.createElement(C, { display: "rotateLeft" }))
  ))));
};
const T = (e) => {
  const { displayPanel: s = !1, isDashboard: t = !1, title: l = "Configure Visualization", children: r, onBackClick: a } = e, i = () => {
    const o = ["editor-panel", "cove", "sidebar"];
    return s || o.push("hidden"), t && o.push("dashboard"), o.join(" ");
  }, d = () => {
    const o = [];
    return s && o.push("editor-panel__toggle"), s || o.push("collapsed", "editor-panel__toggle"), o.join(" ");
  }, p = () => {
    const o = ["editor-panel__title"];
    return s || o.push("collapsed"), o.join(" ");
  };
  return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("section", { className: "editor-panel__toggle-wrapper p-absolute", style: { height: "49.75px", width: "350px" } }, /* @__PURE__ */ n.createElement("button", { className: d(), title: s ? "Collapse Editor" : "Expand Editor", onClick: a })), /* @__PURE__ */ n.createElement("section", { className: i() }, /* @__PURE__ */ n.createElement("h2", { className: p() }, l), /* @__PURE__ */ n.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, r)));
};
const O = m.forwardRef((e, s) => {
  const {
    config: t = {},
    isEditor: l = !1,
    currentViewport: r = "lg",
    imageId: a = "",
    showEditorPanel: i = !0,
    className: d
  } = e, p = () => {
    var u;
    let o = ["cdc-open-viz-module", `${r}`, `${t == null ? void 0 : t.theme}`];
    return d && o.push(d), l && o.push("spacing-wrapper"), l && o.push("isEditor"), l && i && (o = o.filter((_) => _ !== "editor-panel--hidden"), o.push("editor-panel--visible")), l && !i && (o = o.filter((_) => _ !== "editor-panel--visible"), o.push("editor-panel--hidden")), t.type === "filtered-text" ? (o.push("type-filtered-text", `font-${t.fontSize}`), o = o.filter((_) => _ !== "cove-component__content"), o) : t.type === "chart" ? (o.push("type-chart"), (t == null ? void 0 : t.visualizationType) === "Spark Line" && o.push("type-sparkline"), o) : (t.type === "map" && (o.push("type-map"), ((u = t == null ? void 0 : t.runtime) == null ? void 0 : u.editorErrorMessage.length) !== 0 && o.push("type-map--has-error")), t.type === "data-bite" && (o.push("cdc-open-viz-module", "type-data-bite", r, t.theme, `font-${t.fontSize}`), l && o.push("is-editor")), t.type === "markup-include" && o.push("markup-include", "cdc-open-viz-module"), t.type === "waffle-chart" && (o.push(
      "cove",
      "cdc-open-viz-module",
      "type-waffle-chart",
      r,
      t.theme,
      "font-" + t.overallFontSize
    ), l && o.push("is-editor"), o.push("cove-component", "waffle-chart")), o);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ n.createElement(
      "div",
      {
        ...t.type === "chart" ? { "data-lollipop": t.isLollipopChart } : {},
        className: p().join(" "),
        "data-download-id": a,
        ref: s
      },
      e.children
    )
  );
}), me = {
  Responsive: P,
  Sidebar: T,
  VisualizationWrapper: O
};
function he(e, s) {
  document.addEventListener(e, s);
}
function ve(e, s) {
  document.removeEventListener(e, s);
}
function be(e, s) {
  const t = new CustomEvent(e, { detail: s });
  document.dispatchEvent(t);
}
function fe(e, s = null) {
  var D;
  const {
    legend: t,
    lineDatapointStyle: l,
    showTitle: r,
    title: a,
    visualizationType: i,
    subtext: d,
    biteStyle: p,
    general: o,
    visual: u,
    shadow: _
  } = e;
  let v = "";
  l === "hover" && (v = " chart-line--hover"), l === "always show" && (v = " chart-line--always");
  let f = ["cove-component__inner"], h = ["cove-component__content"];
  (i === "Spark Line" || i === "chart") && a && r && h.push("component--has-title"), r && h.push("component--has-title"), a && i !== "chart" && i !== "Spark Line" && h.push("component--has-title"), d && f.push("component--has-subtext"), p && f.push(`bite__style--${p}`), o != null && o.isCompactStyle && f.push("component--isCompactStyle"), !(u != null && u.border) && h.push("no-borders"), i === "Spark Line" && h.push("sparkline"), u != null && u.borderColorTheme && h.push("component--has-borderColorTheme"), u != null && u.accent && h.push("component--has-accent"), u != null && u.background && h.push("component--has-background"), u != null && u.hideBackgroundColor && h.push("component--hideBackgroundColor"), _ && f.push("shadow"), (D = e == null ? void 0 : e.visual) != null && D.roundedBorders && f.push("bite--has-rounded-borders");
  let k = {
    width: "100%"
  };
  const w = () => (t == null ? void 0 : t.position) === "side" && (t != null && t.singleColumn) ? "legend-container__ul--single-column" : (t == null ? void 0 : t.position) !== "side" && (t != null && t.singleRow) ? "single-row" : t != null && t.verticalSorted && !(t != null && t.singleRow) ? "vertical-sorted" : "", c = () => {
    const z = ["legend-container__ul"];
    return z.push(w()), (t == null ? void 0 : t.style) === "gradient" && z.push("patterns-only"), z;
  }, y = t != null && t.hideBorder ? "no-border" : "", b = [
    `${t == null ? void 0 : t.position}`,
    `${w()}`,
    "cdcdataviz-sr-focusable",
    `${s}`,
    `${y}`
  ], S = !(t != null && t.hideBorder), x = `m${M("md", s) ? "t" : ""}-3`, R = {
    aside: b,
    section: ["legend-container", S ? x : ""],
    ul: c(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title fw-bold"],
    description: ["legend-container__description mt-2"],
    div: [(t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "shape-container single-row" : "shape-container"],
    showAllButton: ["legend-container__reset-button"]
  };
  return { innerContainerClasses: f, contentClasses: h, lineDatapointClass: v, sparkLineStyles: k, legendClasses: R };
}
const I = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((s) => {
    const t = e.visualizations[s];
    t.type === "table" && (t.filters || (t.filters = [], t.filterBehavior = "Filter Change"));
  });
}, A = (e) => {
  const s = "4.24.4", t = E.cloneDeep(e);
  return I(t), t.version = s, t;
}, $ = (e) => {
  e.type === "dashboard" && (e.rows = e.rows.map((s) => {
    let t;
    if (s.columns === void 0) {
      t = {};
      const l = s.map((r) => (t.uuid = r.uuid, t.toggle = r.toggle, t.equalHeight = r.equalHeight, E.pick(r, "equalHeight", "width", "hide", "widget", "uuid")));
      t.columns = l;
    }
    return t ?? s;
  }));
}, j = (e) => {
  e.type === "chart" && (e.xAxis.sortDates && (e.xAxis.type = "date-time"), e.table.download = !0, delete e.xAxis.sortDates);
}, V = (e) => {
  e.type === "map" && (e.table.download = !0, e.general.showDownloadButton = !0, e.general.expandDataTable = e.table.expanded);
}, g = (e) => {
  const s = "4.24.3", t = E.cloneDeep(e);
  return $(t), j(t), V(t), t.version = s, t;
}, U = (e) => {
  e.type === "markup-include" && (e.contentEditor || (e.contentEditor = {
    title: e.title,
    showHeader: e.showHeader,
    srcUrl: e.srcUrl
  }, delete e.title, delete e.showHeader, delete e.srcUrl), e.visual || (e.visual = {}));
}, Z = (e) => {
  const s = "4.24.5", t = E.cloneDeep(e);
  return U(t), t.version = s, t;
};
function N(e, s) {
  if (!e)
    return !0;
  const [t, l, r] = e.split(".").map(Number), [a, i, d] = s.split(".").map(Number);
  return a > t || a === t && i > l || a === t && i === l && d > r;
}
const H = (e) => {
  if (!e.dashboard)
    return e;
  const s = e, t = {}, l = (s.dashboard.sharedFilters || []).map((r) => {
    var a, i;
    return ((a = r.apiFilter) == null ? void 0 : a.autoLoad) !== void 0 && delete r.apiFilter.autoLoad, ((i = r.apiFilter) == null ? void 0 : i.defaultValue) !== void 0 && delete r.apiFilter.defaultValue, r;
  });
  if (e.dashboard.sharedFilters = l, Object.keys(s.visualizations).forEach((r) => {
    const a = s.visualizations[r];
    a.hide !== void 0 && (a.sharedFilterIndexes = l.map((i, d) => d).filter((i) => !a.hide.includes(i)), a.type = "dashboardFilters", a.autoLoad ? a.filterBehavior = "Filter Change" : a.filterBehavior = "Apply Button", delete a.hide), a.type === "filter-dropdowns" && (a.type = "dashboardFilters", a.visualizationType = "dashboardFilters", a.sharedFilterIndexes || (a.sharedFilterIndexes = e.dashboard.sharedFilters.map((i, d) => d), a.filterBehavior = e.filterBehavior || "Filter Change")), a.type === "dashboardFilters" && !a.sharedFilterIndexes && (a.sharedFilterIndexes = e.dashboard.sharedFilters.map((i, d) => d), a.filterBehavior = e.filterBehavior || "Filter Change"), t[r] = a;
  }), e.dashboard.sharedFilters.length && !Object.values(t).find((r) => r.type === "dashboardFilters")) {
    const r = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: e.dashboard.sharedFilters.map((d, p) => p),
      filterBehavior: e.filterBehavior || "Filter Change"
    }, a = "legacySharedFilters";
    t[a] = r;
    const i = {
      columns: [
        {
          width: 12,
          widget: a
        }
      ]
    };
    e.rows = [i, ...e.rows], e.dashboard.sharedFilters = e.dashboard.sharedFilters.map((d) => (d.usedBy && (d.usedBy = d.usedBy.map((p) => parseInt(p) > -1 ? String(parseInt(p) + 1) : p)), d));
  }
  e.visualizations = t, delete e.filterBehavior;
}, K = (e) => (((t) => {
  t.type === "map" && t.columns.primary.roundToPlace === void 0 && (t.columns.primary.roundToPlace = 0);
})(e), e), W = (e) => {
  e.useLogScale && e.yAxis.type;
}, q = (e) => {
  const s = "4.24.7", t = E.cloneDeep(e);
  return K(t), H(t), W(t), t.version = N(e.version, s) ? s : e.version, t;
}, G = (e) => {
  var s;
  if (e.type === "dashboard" && Object.values((e == null ? void 0 : e.visualizations) || {}).forEach((t) => {
    var l;
    if (t.type === "map" && ((l = t.general) == null ? void 0 : l.geoType) === "single-state") {
      let r = N(e.version, "4.24.9") ? !1 : t.general.allowMapZoom;
      t.general.allowMapZoom = r;
    }
  }), e.type === "map" && ((s = e.general) == null ? void 0 : s.geoType) === "single-state") {
    let t = N(e.version, "4.24.9") ? !1 : e.general.allowMapZoom;
    e.general.allowMapZoom = t;
  }
}, L = (e) => e == null ? void 0 : e.some((s) => !s.id), X = (e) => {
  var s;
  e.type === "dashboard" ? e.visualizations = Object.keys(e.visualizations).reduce((t, l) => {
    var a;
    const r = e.visualizations[l];
    return (a = r.filters) != null && a.length && L(r.filters) && (t[l].filters = r.filters.map((i, d) => ({ ...i, id: Date.now() + d }))), t;
  }, e.visualizations) : (s = e.filters) != null && s.length && L(e.filters) && (e.filters = e.filters.map((t, l) => ({ ...t, id: Date.now() + l })));
}, J = (e) => {
  var s;
  (s = e.legend) != null && s.lineMode && (e.legend.style = "lines");
}, Q = (e) => {
  const s = "4.24.9", t = E.cloneDeep(e);
  return G(t), X(t), J(e), t.version = s, t;
}, Y = (e) => {
  var s;
  e.type === "dashboard" && ((s = e.dashboard) == null || s.sharedFilters.forEach((t, l) => {
    t.multiSelect && (e.dashboard.sharedFilters[l].filterStyle = "multi-select", delete e.dashboard.sharedFilters[l].multiSelect);
  }));
}, ee = (e) => {
  var s, t;
  return e.type === "dashboard" && Object.keys(e.visualizations).forEach((l) => {
    var a, i;
    const r = e.visualizations[l];
    (i = (a = r.table) == null ? void 0 : a.pivot) != null && i.valueColumn && (e.visualizations[l].table.pivot.valueColumns = [r.table.pivot.valueColumn], delete e.visualizations[l].table.pivot.valueColumn);
  }), (t = (s = e.table) == null ? void 0 : s.pivot) != null && t.valueColumn && (e.table.pivot.valueColumns = [e.table.pivot.valueColumn], delete e.table.pivot.valueColumn), e;
}, te = (e) => {
  var s;
  (s = e.xAxis) != null && s.labelOffset && (e.xAxis.labelOffset = 0);
}, se = (e) => {
  e.filters && (e.filters = e.filters.map((s) => (s.filterStyle || (s.filterStyle = "dropdown"), s)));
}, ae = (e) => {
  const s = "4.24.10", t = E.cloneDeep(e);
  return te(t), ee(t), Y(t), se(t), t.version = s, t;
}, re = (e) => (e.migrations = e.migrations || {}, e.migrations.addColorMigration = !0, e), ie = (e) => {
  const s = "4.24.11", t = E.cloneDeep(e);
  return re(t), t.version = s, t;
}, oe = (e) => {
  var s;
  return (s = e.general) != null && s.territoriesLabel && delete e.general.territoriesLabel, e;
}, le = (e) => {
  const s = "4.25.1", t = E.cloneDeep(e);
  return oe(t), t.version = s, t;
}, ne = (e) => {
  let s = e;
  return [
    ["4.24.3", g],
    ["4.24.4", A],
    ["4.24.5", Z],
    ["4.24.7", q, !0],
    ["4.24.9", Q],
    ["4.24.10", ae, !0],
    ["4.24.11", ie],
    ["4.25.1", le]
  ].forEach(([l, r, a]) => {
    (N(s.version, l) || a) && (s = r(s)), s.multiDashboards && s.multiDashboards.forEach((i, d) => {
      i.type = "dashboard", s.multiDashboards[d] = ne(i);
    });
  }), s;
};
export {
  me as L,
  ve as a,
  ne as c,
  be as p,
  he as s,
  fe as u
};
