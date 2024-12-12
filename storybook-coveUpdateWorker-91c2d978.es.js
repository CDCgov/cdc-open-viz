import { r as h, R as n } from "./storybook-index-45401197.es.js";
import { a as C } from "./storybook-Icon-4f5978ba.es.js";
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
], B = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, R = ({ children: t, isEditor: s }) => {
  const [e, l] = h.useState(!1), [r, a] = h.useState(!1), [i, d] = h.useState(null), [p, o] = h.useState(!1);
  h.useState(!1);
  const [u, _] = h.useState(null), v = h.useRef(null);
  h.useRef(null);
  const y = h.useRef(null), m = h.useCallback(
    (c) => d((f) => f !== c ? c : null),
    [i]
  ), N = (c) => {
    if (!s)
      return c;
    c.code === "KeyL" && c.ctrlKey && l((b) => !b);
    const f = B === "MacOS" ? c.metaKey : c.altKey;
    if (f) {
      let b = c.key;
      isNaN(b) || b <= F.length && (c.preventDefault(), m(F[b - 1]));
    }
    f || (c.code === "KeyG" && a((b) => !b), c.code === "KeyR" && w());
  };
  h.useEffect(() => (document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)), []);
  const w = h.useCallback(() => {
    if (!p && v.current) {
      d(null), o(!0), a(!1), v.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", v.current.style.transform = "rotate(-360deg)";
      const c = setTimeout(() => {
        o(!1), v.current.style.transition = null, v.current.style.transform = "rotate(0deg)", v.current.style.transform = null;
      }, 400);
      return () => clearTimeout(c);
    }
  }, [p]);
  return h.useEffect(() => a(!!i), [i]), h.useEffect(() => {
    if (!y.current)
      return;
    let c = new ResizeObserver((f) => {
      for (let b of f) {
        let { width: x, height: z } = b.contentRect;
        _({ width: x, height: z });
      }
    });
    return c.observe(y.current), () => {
      c && (c.disconnect(), c = null);
    };
  }), !s || !e ? t : /* @__PURE__ */ n.createElement("div", { className: "cove-editor__content", "data-grid": r || null }, /* @__PURE__ */ n.createElement(
    "div",
    {
      className: "cove-editor__content-wrap--x",
      style: i ? { maxWidth: i + "px", minWidth: "unset" } : null
    },
    /* @__PURE__ */ n.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, r && e && /* @__PURE__ */ n.createElement(n.Fragment, null, Math.round(u.width), /* @__PURE__ */ n.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(u.height))), /* @__PURE__ */ n.createElement("div", { className: "cove-editor__grid-caret--top", ref: y }, /* @__PURE__ */ n.createElement("div", { className: "cove-editor__grid-caret--bottom" }, t)))
  ), /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ n.createElement("p", { className: e ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ n.createElement("p", { className: r ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ n.createElement("p", { className: p ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ n.createElement("p", { className: i ? "hotkey--active" : null }, "View")), /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ n.createElement("p", { className: e ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ n.createElement("p", { className: r ? "hotkey--active" : null }, "G"), /* @__PURE__ */ n.createElement("p", { className: p ? "hotkey--active" : null }, "R"), /* @__PURE__ */ n.createElement("p", { className: i ? "hotkey--active" : null }, B === "MacOS" ? /* @__PURE__ */ n.createElement(C, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " +", " ", i ? F.indexOf(i) + 1 : `[1 - ${F.length}]`))), /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ n.createElement("ul", { className: `cove-editor-utils__breakpoints-list${i ? " has-active" : ""}` }, /* @__PURE__ */ n.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        a((c) => !c);
      }
    },
    /* @__PURE__ */ n.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ n.createElement(C, { display: "grid" }))
  ), F.map((c, f) => /* @__PURE__ */ n.createElement(
    "button",
    {
      className: `cove-editor-utils__breakpoints-item${i === c ? " active" : ""}`,
      onClick: () => m(c),
      key: f
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
const M = (t) => {
  const { displayPanel: s = !1, isDashboard: e = !1, title: l = "Configure Visualization", children: r, onBackClick: a } = t, i = () => {
    const o = ["editor-panel", "cove", "sidebar"];
    return s || o.push("hidden"), e && o.push("dashboard"), o.join(" ");
  }, d = () => {
    const o = [];
    return s && o.push("editor-panel__toggle"), s || o.push("collapsed", "editor-panel__toggle"), o.join(" ");
  }, p = () => {
    const o = ["editor-panel__title"];
    return s || o.push("collapsed"), o.join(" ");
  };
  return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("section", { className: "editor-panel__toggle-wrapper p-absolute", style: { height: "49.75px", width: "350px" } }, /* @__PURE__ */ n.createElement("button", { className: d(), title: s ? "Collapse Editor" : "Expand Editor", onClick: a })), /* @__PURE__ */ n.createElement("section", { className: i() }, /* @__PURE__ */ n.createElement("h2", { className: p() }, l), /* @__PURE__ */ n.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, r)));
};
const O = h.forwardRef((t, s) => {
  const { config: e = {}, isEditor: l = !1, currentViewport: r = "lg", imageId: a = "", showEditorPanel: i = !0, className: d } = t, p = () => {
    var u;
    let o = ["cdc-open-viz-module", `${r}`, `font-${e == null ? void 0 : e.fontSize}`, `${e == null ? void 0 : e.theme}`];
    return d && o.push(d), l && o.push("spacing-wrapper"), l && o.push("isEditor"), l && i && (o = o.filter((_) => _ !== "editor-panel--hidden"), o.push("editor-panel--visible")), l && !i && (o = o.filter((_) => _ !== "editor-panel--visible"), o.push("editor-panel--hidden")), e.type === "filtered-text" ? (o.push("type-filtered-text"), o = o.filter((_) => _ !== "cove-component__content"), o) : e.type === "chart" ? (o.push("type-chart"), (e == null ? void 0 : e.visualizationType) === "Spark Line" && o.push("type-sparkline"), o) : (e.type === "map" && (o.push("type-map"), ((u = e == null ? void 0 : e.runtime) == null ? void 0 : u.editorErrorMessage.length) !== 0 && o.push("type-map--has-error")), e.type === "data-bite" && (o.push("cdc-open-viz-module", "type-data-bite", r, e.theme, `font-${e.fontSize}`), l && o.push("is-editor")), e.type === "markup-include" && o.push("markup-include", "cdc-open-viz-module"), e.type === "waffle-chart" && (o.push("cove", "cdc-open-viz-module", "type-waffle-chart", r, e.theme, "font-" + e.overallFontSize), l && o.push("is-editor"), o.push("cove-component", "waffle-chart")), o);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ n.createElement(
      "div",
      {
        ...e.type === "chart" ? { "data-lollipop": e.isLollipopChart } : {},
        className: p().join(" "),
        "data-download-id": a,
        ref: s
      },
      t.children
    )
  );
}), ie = {
  Responsive: R,
  Sidebar: M,
  VisualizationWrapper: O
};
function oe(t, s) {
  document.addEventListener(t, s);
}
function le(t, s) {
  document.removeEventListener(t, s);
}
function ne(t, s) {
  const e = new CustomEvent(t, { detail: s });
  document.dispatchEvent(e);
}
function de(t, s = null) {
  var D;
  const {
    legend: e,
    lineDatapointStyle: l,
    showTitle: r,
    title: a,
    visualizationType: i,
    subtext: d,
    biteStyle: p,
    general: o,
    visual: u,
    shadow: _
  } = t;
  let v = "";
  l === "hover" && (v = " chart-line--hover"), l === "always show" && (v = " chart-line--always");
  let y = ["cove-component__inner"], m = ["cove-component__content"];
  (i === "Spark Line" || i === "chart") && a && r && m.push("component--has-title"), r && m.push("component--has-title"), a && i !== "chart" && i !== "Spark Line" && m.push("component--has-title"), d && y.push("component--has-subtext"), p && y.push(`bite__style--${p}`), o != null && o.isCompactStyle && y.push("component--isCompactStyle"), !(u != null && u.border) && m.push("no-borders"), i === "Spark Line" && m.push("sparkline"), u != null && u.borderColorTheme && m.push("component--has-borderColorTheme"), u != null && u.accent && m.push("component--has-accent"), u != null && u.background && m.push("component--has-background"), u != null && u.hideBackgroundColor && m.push("component--hideBackgroundColor"), _ && y.push("shadow"), (D = t == null ? void 0 : t.visual) != null && D.roundedBorders && y.push("bite--has-rounded-borders");
  let N = {
    width: "100%"
  };
  const w = () => (e == null ? void 0 : e.position) === "side" && (e != null && e.singleColumn) ? "legend-container__ul--single-column" : (e == null ? void 0 : e.position) !== "side" && (e != null && e.singleRow) ? "single-row" : e != null && e.verticalSorted && !(e != null && e.singleRow) ? "vertical-sorted" : "", c = () => {
    const S = ["legend-container__ul"];
    return S.push(w()), (e == null ? void 0 : e.style) === "gradient" && S.push("patterns-only"), S;
  }, f = e != null && e.hideBorder ? "no-border" : "", b = [
    `${e == null ? void 0 : e.position}`,
    `${w()}`,
    "cdcdataviz-sr-focusable",
    `${s}`,
    `${f}`
  ], x = !(e != null && e.hideBorder), z = {
    aside: b,
    section: ["legend-container", x ? "legend-padding" : ""],
    ul: c(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title"],
    description: ["legend-container__description"],
    div: [(e == null ? void 0 : e.position) === "bottom" && (e != null && e.singleRow) ? "shape-container single-row" : "shape-container"],
    resetButton: ["legend-container__reset-button"]
  };
  return { innerContainerClasses: y, contentClasses: m, lineDatapointClass: v, sparkLineStyles: N, legendClasses: z };
}
const P = (t) => {
  t.type === "dashboard" && Object.keys(t.visualizations).forEach((s) => {
    const e = t.visualizations[s];
    e.type === "table" && (e.filters || (e.filters = [], e.filterBehavior = "Filter Change"));
  });
}, T = (t) => {
  const s = "4.24.4", e = E.cloneDeep(t);
  return P(e), e.version = s, e;
}, I = (t) => {
  t.type === "dashboard" && (t.rows = t.rows.map((s) => {
    let e;
    if (s.columns === void 0) {
      e = {};
      const l = s.map((r) => (e.uuid = r.uuid, e.toggle = r.toggle, e.equalHeight = r.equalHeight, E.pick(r, "equalHeight", "width", "hide", "widget", "uuid")));
      e.columns = l;
    }
    return e ?? s;
  }));
}, A = (t) => {
  t.type === "chart" && (t.xAxis.sortDates && (t.xAxis.type = "date-time"), t.table.download = !0, delete t.xAxis.sortDates);
}, V = (t) => {
  t.type === "map" && (t.table.download = !0, t.general.showDownloadButton = !0, t.general.expandDataTable = t.table.expanded);
}, $ = (t) => {
  const s = "4.24.3", e = E.cloneDeep(t);
  return I(e), A(e), V(e), e.version = s, e;
}, j = (t) => {
  t.type === "markup-include" && (t.contentEditor || (t.contentEditor = {
    title: t.title,
    showHeader: t.showHeader,
    srcUrl: t.srcUrl
  }, delete t.title, delete t.showHeader, delete t.srcUrl), t.visual || (t.visual = {}));
}, U = (t) => {
  const s = "4.24.5", e = E.cloneDeep(t);
  return j(e), e.version = s, e;
};
function k(t, s) {
  if (!t)
    return !0;
  const [e, l, r] = t.split(".").map(Number), [a, i, d] = s.split(".").map(Number);
  return a > e || a === e && i > l || a === e && i === l && d > r;
}
const ce = k, Z = (t) => {
  if (!t.dashboard)
    return t;
  const s = t, e = {}, l = (s.dashboard.sharedFilters || []).map((r) => {
    var a, i;
    return ((a = r.apiFilter) == null ? void 0 : a.autoLoad) !== void 0 && delete r.apiFilter.autoLoad, ((i = r.apiFilter) == null ? void 0 : i.defaultValue) !== void 0 && delete r.apiFilter.defaultValue, r;
  });
  if (t.dashboard.sharedFilters = l, Object.keys(s.visualizations).forEach((r) => {
    const a = s.visualizations[r];
    a.hide !== void 0 && (a.sharedFilterIndexes = l.map((i, d) => d).filter((i) => !a.hide.includes(i)), a.type = "dashboardFilters", a.autoLoad ? a.filterBehavior = "Filter Change" : a.filterBehavior = "Apply Button", delete a.hide), a.type === "filter-dropdowns" && (a.type = "dashboardFilters", a.visualizationType = "dashboardFilters", a.sharedFilterIndexes || (a.sharedFilterIndexes = t.dashboard.sharedFilters.map((i, d) => d), a.filterBehavior = t.filterBehavior || "Filter Change")), a.type === "dashboardFilters" && !a.sharedFilterIndexes && (a.sharedFilterIndexes = t.dashboard.sharedFilters.map((i, d) => d), a.filterBehavior = t.filterBehavior || "Filter Change"), e[r] = a;
  }), t.dashboard.sharedFilters.length && !Object.values(e).find((r) => r.type === "dashboardFilters")) {
    const r = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: t.dashboard.sharedFilters.map((d, p) => p),
      filterBehavior: t.filterBehavior || "Filter Change"
    }, a = "legacySharedFilters";
    e[a] = r;
    const i = {
      columns: [
        {
          width: 12,
          widget: a
        }
      ]
    };
    t.rows = [i, ...t.rows], t.dashboard.sharedFilters = t.dashboard.sharedFilters.map((d) => (d.usedBy && (d.usedBy = d.usedBy.map((p) => parseInt(p) > -1 ? String(parseInt(p) + 1) : p)), d));
  }
  t.visualizations = e, delete t.filterBehavior;
}, H = (t) => (((e) => {
  e.type === "map" && e.columns.primary.roundToPlace === void 0 && (e.columns.primary.roundToPlace = 0);
})(t), t), K = (t) => {
  t.useLogScale && t.yAxis.type;
}, W = (t) => {
  const s = "4.24.7", e = E.cloneDeep(t);
  return H(e), Z(e), K(e), e.version = k(t.version, s) ? s : t.version, e;
}, g = (t) => {
  var s;
  if (t.type === "dashboard" && Object.values((t == null ? void 0 : t.visualizations) || {}).forEach((e) => {
    var l;
    if (e.type === "map" && ((l = e.general) == null ? void 0 : l.geoType) === "single-state") {
      let r = k(t.version, "4.24.9") ? !1 : e.general.allowMapZoom;
      e.general.allowMapZoom = r;
    }
  }), t.type === "map" && ((s = t.general) == null ? void 0 : s.geoType) === "single-state") {
    let e = k(t.version, "4.24.9") ? !1 : t.general.allowMapZoom;
    t.general.allowMapZoom = e;
  }
}, L = (t) => t == null ? void 0 : t.some((s) => !s.id), q = (t) => {
  var s;
  t.type === "dashboard" ? t.visualizations = Object.keys(t.visualizations).reduce((e, l) => {
    var a;
    const r = t.visualizations[l];
    return (a = r.filters) != null && a.length && L(r.filters) && (e[l].filters = r.filters.map((i, d) => ({ ...i, id: Date.now() + d }))), e;
  }, t.visualizations) : (s = t.filters) != null && s.length && L(t.filters) && (t.filters = t.filters.map((e, l) => ({ ...e, id: Date.now() + l })));
}, G = (t) => {
  var s;
  (s = t.legend) != null && s.lineMode && (t.legend.style = "lines");
}, X = (t) => {
  const s = "4.24.9", e = E.cloneDeep(t);
  return g(e), q(e), G(t), e.version = s, e;
}, J = (t) => {
  var s;
  t.type === "dashboard" && ((s = t.dashboard) == null || s.sharedFilters.forEach((e, l) => {
    e.multiSelect && (t.dashboard.sharedFilters[l].filterStyle = "multi-select", delete t.dashboard.sharedFilters[l].multiSelect);
  }));
}, Q = (t) => {
  var s, e;
  return t.type === "dashboard" && Object.keys(t.visualizations).forEach((l) => {
    var a, i;
    const r = t.visualizations[l];
    (i = (a = r.table) == null ? void 0 : a.pivot) != null && i.valueColumn && (t.visualizations[l].table.pivot.valueColumns = [r.table.pivot.valueColumn], delete t.visualizations[l].table.pivot.valueColumn);
  }), (e = (s = t.table) == null ? void 0 : s.pivot) != null && e.valueColumn && (t.table.pivot.valueColumns = [t.table.pivot.valueColumn], delete t.table.pivot.valueColumn), t;
}, Y = (t) => {
  var s;
  (s = t.xAxis) != null && s.labelOffset && (t.xAxis.labelOffset = 0);
}, ee = (t) => {
  const s = "4.24.10", e = E.cloneDeep(t);
  return Y(e), Q(e), J(e), e.version = s, e;
}, te = (t) => {
  let s = t;
  return [
    ["4.24.3", $],
    ["4.24.4", T],
    ["4.24.5", U],
    ["4.24.7", W, !0],
    ["4.24.9", X],
    ["4.24.10", ee]
  ].forEach(([l, r, a]) => {
    (k(s.version, l) || a) && (s = r(s)), s.multiDashboards && s.multiDashboards.forEach((i, d) => {
      i.type = "dashboard", s.multiDashboards[d] = te(i);
    });
  }), s;
};
export {
  ie as L,
  le as a,
  te as c,
  ce as i,
  ne as p,
  oe as s,
  de as u
};
