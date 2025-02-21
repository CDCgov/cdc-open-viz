import { a as f, j as c, F as R } from "./storybook-jsx-runtime-36872362.es.js";
import { r as h } from "./storybook-index-45401197.es.js";
import { a as B } from "./storybook-Icon-5df8fab3.es.js";
import { i as T } from "./storybook-viewports-678eca6e.es.js";
import { _ as F } from "./storybook-lodash-a4231e1c.es.js";
const x = [
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
], L = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, O = ({ children: e, isEditor: s }) => {
  const [t, l] = h.useState(!1), [a, r] = h.useState(!1), [i, n] = h.useState(null), [p, o] = h.useState(!1);
  h.useState(!1);
  const [u, w] = h.useState(null), v = h.useRef(null);
  h.useRef(null);
  const y = h.useRef(null), m = h.useCallback(
    (d) => n((_) => _ !== d ? d : null),
    [i]
  ), N = (d) => {
    if (!s)
      return d;
    d.code === "KeyL" && d.ctrlKey && l((b) => !b);
    const _ = L === "MacOS" ? d.metaKey : d.altKey;
    if (_) {
      let b = d.key;
      isNaN(b) || b <= x.length && (d.preventDefault(), m(x[b - 1]));
    }
    _ || (d.code === "KeyG" && r((b) => !b), d.code === "KeyR" && k());
  };
  h.useEffect(() => (document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)), []);
  const k = h.useCallback(() => {
    if (!p && v.current) {
      n(null), o(!0), r(!1), v.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", v.current.style.transform = "rotate(-360deg)";
      const d = setTimeout(() => {
        o(!1), v.current.style.transition = null, v.current.style.transform = "rotate(0deg)", v.current.style.transform = null;
      }, 400);
      return () => clearTimeout(d);
    }
  }, [p]);
  return h.useEffect(() => r(!!i), [i]), h.useEffect(() => {
    if (!y.current)
      return;
    let d = new ResizeObserver((_) => {
      for (let b of _) {
        let { width: z, height: C } = b.contentRect;
        w({ width: z, height: C });
      }
    });
    return d.observe(y.current), () => {
      d && (d.disconnect(), d = null);
    };
  }), !s || !t ? e : /* @__PURE__ */ f("div", { className: "cove-editor__content", "data-grid": a || null, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "cove-editor__content-wrap--x",
        style: i ? { maxWidth: i + "px", minWidth: "unset" } : null,
        children: /* @__PURE__ */ f("div", { className: "cove-editor__content-wrap--y", children: [
          /* @__PURE__ */ c("div", { className: "cove-editor-utils__breakpoints--px", children: a && t && /* @__PURE__ */ f(R, { children: [
            Math.round(u.width),
            /* @__PURE__ */ c("span", { className: "mx-1", style: { fontSize: "0.675rem" }, children: "✕" }),
            Math.round(u.height)
          ] }) }),
          /* @__PURE__ */ c("div", { className: "cove-editor__grid-caret--top", ref: y, children: /* @__PURE__ */ c("div", { className: "cove-editor__grid-caret--bottom", children: e }) })
        ] })
      }
    ),
    /* @__PURE__ */ f("div", { className: "cove-editor-utils__hotkeys", children: [
      /* @__PURE__ */ f("div", { className: "cove-editor-utils__hotkeys--left", children: [
        /* @__PURE__ */ c("p", { className: t ? "hotkey--active" : null, children: "Editor" }),
        /* @__PURE__ */ c("p", { className: a ? "hotkey--active" : null, children: "Grid" }),
        /* @__PURE__ */ c("p", { className: p ? "hotkey--active" : null, children: "Reset" }),
        /* @__PURE__ */ c("p", { className: i ? "hotkey--active" : null, children: "View" })
      ] }),
      /* @__PURE__ */ f("div", { className: "cove-editor-utils__hotkeys--right", children: [
        /* @__PURE__ */ c("p", { className: t ? "hotkey--active" : null, children: "esc" }),
        /* @__PURE__ */ c("p", { className: a ? "hotkey--active" : null, children: "G" }),
        /* @__PURE__ */ c("p", { className: p ? "hotkey--active" : null, children: "R" }),
        /* @__PURE__ */ f("p", { className: i ? "hotkey--active" : null, children: [
          L === "MacOS" ? /* @__PURE__ */ c(B, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt",
          " +",
          " ",
          i ? x.indexOf(i) + 1 : `[1 - ${x.length}]`
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "cove-editor-utils__breakpoints", children: /* @__PURE__ */ f("ul", { className: `cove-editor-utils__breakpoints-list${i ? " has-active" : ""}`, children: [
      /* @__PURE__ */ c(
        "button",
        {
          className: "cove-editor-utils__breakpoints-item",
          onClick: () => {
            r((d) => !d);
          },
          children: /* @__PURE__ */ c("div", { className: "cove-editor-utils__breakpoints-grid", children: /* @__PURE__ */ c(B, { display: "grid" }) })
        }
      ),
      x.map((d, _) => /* @__PURE__ */ f(
        "button",
        {
          className: `cove-editor-utils__breakpoints-item${i === d ? " active" : ""}`,
          onClick: () => m(d),
          children: [
            d,
            "px"
          ]
        },
        _
      )),
      /* @__PURE__ */ c(
        "button",
        {
          className: "cove-editor-utils__breakpoints-item",
          onClick: () => {
            k();
          },
          children: /* @__PURE__ */ c("div", { className: "cove-editor-utils__breakpoints-reset", ref: v, children: /* @__PURE__ */ c(B, { display: "rotateLeft" }) })
        }
      )
    ] }) })
  ] });
};
const j = (e) => {
  const { displayPanel: s = !1, isDashboard: t = !1, title: l = "Configure Visualization", children: a, onBackClick: r } = e, i = () => {
    const o = ["editor-panel", "cove", "sidebar"];
    return s || o.push("hidden"), t && o.push("dashboard"), o.join(" ");
  }, n = () => {
    const o = [];
    return s && o.push("editor-panel__toggle"), s || o.push("collapsed", "editor-panel__toggle"), o.join(" ");
  }, p = () => {
    const o = ["editor-panel__title"];
    return s || o.push("collapsed"), o.join(" ");
  };
  return /* @__PURE__ */ f(R, { children: [
    /* @__PURE__ */ c("section", { className: "editor-panel__toggle-wrapper p-absolute", style: { height: "49.75px", width: "350px" }, children: /* @__PURE__ */ c("button", { className: n(), title: s ? "Collapse Editor" : "Expand Editor", onClick: r }) }),
    /* @__PURE__ */ f("section", { className: i(), children: [
      /* @__PURE__ */ c("h2", { className: p(), children: l }),
      /* @__PURE__ */ c("section", { className: "form-container", "data-html2canvas-ignore": !0, children: a })
    ] })
  ] });
};
const I = h.forwardRef((e, s) => {
  const {
    config: t = {},
    isEditor: l = !1,
    currentViewport: a = "lg",
    imageId: r = "",
    showEditorPanel: i = !0,
    className: n
  } = e, p = () => {
    var u;
    let o = ["cdc-open-viz-module", `${a}`, `${t == null ? void 0 : t.theme}`];
    return n && o.push(n), l && o.push("spacing-wrapper"), l && o.push("isEditor"), l && i && (o = o.filter((w) => w !== "editor-panel--hidden"), o.push("editor-panel--visible")), l && !i && (o = o.filter((w) => w !== "editor-panel--visible"), o.push("editor-panel--hidden")), t.type === "filtered-text" ? (o.push("type-filtered-text", `font-${t.fontSize}`), o = o.filter((w) => w !== "cove-component__content"), o) : t.type === "chart" ? (o.push("type-chart"), (t == null ? void 0 : t.visualizationType) === "Spark Line" && o.push("type-sparkline"), o) : (t.type === "map" && (o.push("type-map"), ((u = t == null ? void 0 : t.runtime) == null ? void 0 : u.editorErrorMessage.length) !== 0 && o.push("type-map--has-error")), t.type === "data-bite" && (o.push("cdc-open-viz-module", "type-data-bite", a, t.theme, `font-${t.fontSize}`), l && o.push("is-editor")), t.type === "markup-include" && o.push("markup-include", "cdc-open-viz-module"), t.type === "waffle-chart" && (o.push(
      "cove",
      "cdc-open-viz-module",
      "type-waffle-chart",
      a,
      t.theme,
      "font-" + t.overallFontSize
    ), l && o.push("is-editor"), o.push("cove-component", "waffle-chart")), o);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ c(
      "div",
      {
        ...t.type === "chart" ? { "data-lollipop": t.isLollipopChart } : {},
        className: p().join(" "),
        "data-download-id": r,
        ref: s,
        children: e.children
      }
    )
  );
}), be = {
  Responsive: O,
  Sidebar: j,
  VisualizationWrapper: I
};
function fe(e, s) {
  document.addEventListener(e, s);
}
function ye(e, s) {
  document.removeEventListener(e, s);
}
function _e(e, s) {
  const t = new CustomEvent(e, { detail: s });
  document.dispatchEvent(t);
}
function we(e, s = null) {
  var E;
  const {
    legend: t,
    lineDatapointStyle: l,
    showTitle: a,
    title: r,
    visualizationType: i,
    subtext: n,
    biteStyle: p,
    general: o,
    visual: u,
    shadow: w
  } = e;
  let v = "";
  l === "hover" && (v = " chart-line--hover"), l === "always show" && (v = " chart-line--always");
  let y = ["cove-component__inner"], m = ["cove-component__content"];
  (i === "Spark Line" || i === "chart") && r && a && m.push("component--has-title"), a && m.push("component--has-title"), r && i !== "chart" && i !== "Spark Line" && m.push("component--has-title"), n && y.push("component--has-subtext"), p && y.push(`bite__style--${p}`), o != null && o.isCompactStyle && y.push("component--isCompactStyle"), !(u != null && u.border) && m.push("no-borders"), i === "Spark Line" && m.push("sparkline"), u != null && u.borderColorTheme && m.push("component--has-borderColorTheme"), u != null && u.accent && m.push("component--has-accent"), u != null && u.background && m.push("component--has-background"), u != null && u.hideBackgroundColor && m.push("component--hideBackgroundColor"), w && y.push("shadow"), (E = e == null ? void 0 : e.visual) != null && E.roundedBorders && y.push("bite--has-rounded-borders");
  let N = {
    width: "100%"
  };
  const k = () => (t == null ? void 0 : t.position) === "side" && (t != null && t.singleColumn) ? "legend-container__ul--single-column" : (t == null ? void 0 : t.position) !== "side" && (t != null && t.singleRow) ? "single-row" : t != null && t.verticalSorted && !(t != null && t.singleRow) ? "vertical-sorted" : "", d = () => {
    const D = ["legend-container__ul"];
    return D.push(k()), (t == null ? void 0 : t.style) === "gradient" && D.push("patterns-only"), D;
  }, _ = t != null && t.hideBorder ? "no-border" : "", b = [
    `${t == null ? void 0 : t.position}`,
    `${k()}`,
    "cdcdataviz-sr-focusable",
    `${s}`,
    `${_}`
  ], z = !(t != null && t.hideBorder), C = `m${T("md", s) ? "t" : ""}-3`, P = {
    aside: b,
    section: ["legend-container", z ? C : ""],
    ul: d(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title fw-bold"],
    description: ["legend-container__description mt-2"],
    div: [(t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "shape-container single-row" : "shape-container"],
    showAllButton: ["legend-container__reset-button"]
  };
  return { innerContainerClasses: y, contentClasses: m, lineDatapointClass: v, sparkLineStyles: N, legendClasses: P };
}
const A = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((s) => {
    const t = e.visualizations[s];
    t.type === "table" && (t.filters || (t.filters = [], t.filterBehavior = "Filter Change"));
  });
}, $ = (e) => {
  const s = "4.24.4", t = F.cloneDeep(e);
  return A(t), t.version = s, t;
}, V = (e) => {
  e.type === "dashboard" && (e.rows = e.rows.map((s) => {
    let t;
    if (s.columns === void 0) {
      t = {};
      const l = s.map((a) => (t.uuid = a.uuid, t.toggle = a.toggle, t.equalHeight = a.equalHeight, F.pick(a, "equalHeight", "width", "hide", "widget", "uuid")));
      t.columns = l;
    }
    return t ?? s;
  }));
}, U = (e) => {
  e.type === "chart" && (e.xAxis.sortDates && (e.xAxis.type = "date-time"), e.table.download = !0, delete e.xAxis.sortDates);
}, g = (e) => {
  e.type === "map" && (e.table.download = !0, e.general.showDownloadButton = !0, e.general.expandDataTable = e.table.expanded);
}, Z = (e) => {
  const s = "4.24.3", t = F.cloneDeep(e);
  return V(t), U(t), g(t), t.version = s, t;
}, H = (e) => {
  e.type === "markup-include" && (e.contentEditor || (e.contentEditor = {
    title: e.title,
    showHeader: e.showHeader,
    srcUrl: e.srcUrl
  }, delete e.title, delete e.showHeader, delete e.srcUrl), e.visual || (e.visual = {}));
}, K = (e) => {
  const s = "4.24.5", t = F.cloneDeep(e);
  return H(t), t.version = s, t;
};
function S(e, s) {
  if (!e)
    return !0;
  const [t, l, a] = e.split(".").map(Number), [r, i, n] = s.split(".").map(Number);
  return r > t || r === t && i > l || r === t && i === l && n > a;
}
const W = (e) => {
  if (!e.dashboard)
    return e;
  const s = e, t = {}, l = (s.dashboard.sharedFilters || []).map((a) => {
    var r, i;
    return ((r = a.apiFilter) == null ? void 0 : r.autoLoad) !== void 0 && delete a.apiFilter.autoLoad, ((i = a.apiFilter) == null ? void 0 : i.defaultValue) !== void 0 && delete a.apiFilter.defaultValue, a;
  });
  if (e.dashboard.sharedFilters = l, Object.keys(s.visualizations).forEach((a) => {
    const r = s.visualizations[a];
    r.hide !== void 0 && (r.sharedFilterIndexes = l.map((i, n) => n).filter((i) => !r.hide.includes(i)), r.type = "dashboardFilters", r.autoLoad ? r.filterBehavior = "Filter Change" : r.filterBehavior = "Apply Button", delete r.hide), r.type === "filter-dropdowns" && (r.type = "dashboardFilters", r.visualizationType = "dashboardFilters", r.sharedFilterIndexes || (r.sharedFilterIndexes = e.dashboard.sharedFilters.map((i, n) => n), r.filterBehavior = e.filterBehavior || "Filter Change")), r.type === "dashboardFilters" && !r.sharedFilterIndexes && (r.sharedFilterIndexes = e.dashboard.sharedFilters.map((i, n) => n), r.filterBehavior = e.filterBehavior || "Filter Change"), t[a] = r;
  }), e.dashboard.sharedFilters.length && !Object.values(t).find((a) => a.type === "dashboardFilters")) {
    const a = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: e.dashboard.sharedFilters.map((n, p) => p),
      filterBehavior: e.filterBehavior || "Filter Change"
    }, r = "legacySharedFilters";
    t[r] = a;
    const i = {
      columns: [
        {
          width: 12,
          widget: r
        }
      ]
    };
    e.rows = [i, ...e.rows], e.dashboard.sharedFilters = e.dashboard.sharedFilters.map((n) => (n.usedBy && (n.usedBy = n.usedBy.map((p) => parseInt(p) > -1 ? String(parseInt(p) + 1) : p)), n));
  }
  e.visualizations = t, delete e.filterBehavior;
}, q = (e) => (((t) => {
  t.type === "map" && t.columns.primary.roundToPlace === void 0 && (t.columns.primary.roundToPlace = 0);
})(e), e), G = (e) => {
  e.useLogScale && e.yAxis.type;
}, X = (e) => {
  const s = "4.24.7", t = F.cloneDeep(e);
  return q(t), W(t), G(t), t.version = S(e.version, s) ? s : e.version, t;
}, J = (e) => {
  var s;
  if (e.type === "dashboard" && Object.values((e == null ? void 0 : e.visualizations) || {}).forEach((t) => {
    var l;
    if (t.type === "map" && ((l = t.general) == null ? void 0 : l.geoType) === "single-state") {
      let a = S(e.version, "4.24.9") ? !1 : t.general.allowMapZoom;
      t.general.allowMapZoom = a;
    }
  }), e.type === "map" && ((s = e.general) == null ? void 0 : s.geoType) === "single-state") {
    let t = S(e.version, "4.24.9") ? !1 : e.general.allowMapZoom;
    e.general.allowMapZoom = t;
  }
}, M = (e) => e == null ? void 0 : e.some((s) => !s.id), Q = (e) => {
  var s;
  e.type === "dashboard" ? e.visualizations = Object.keys(e.visualizations).reduce((t, l) => {
    var r;
    const a = e.visualizations[l];
    return (r = a.filters) != null && r.length && M(a.filters) && (t[l].filters = a.filters.map((i, n) => ({ ...i, id: Date.now() + n }))), t;
  }, e.visualizations) : (s = e.filters) != null && s.length && M(e.filters) && (e.filters = e.filters.map((t, l) => ({ ...t, id: Date.now() + l })));
}, Y = (e) => {
  var s;
  (s = e.legend) != null && s.lineMode && (e.legend.style = "lines");
}, ee = (e) => {
  const s = "4.24.9", t = F.cloneDeep(e);
  return J(t), Q(t), Y(e), t.version = s, t;
}, te = (e) => {
  var s;
  e.type === "dashboard" && ((s = e.dashboard) == null || s.sharedFilters.forEach((t, l) => {
    t.multiSelect && (e.dashboard.sharedFilters[l].filterStyle = "multi-select", delete e.dashboard.sharedFilters[l].multiSelect);
  }));
}, se = (e) => {
  var s, t;
  return e.type === "dashboard" && Object.keys(e.visualizations).forEach((l) => {
    var r, i;
    const a = e.visualizations[l];
    (i = (r = a.table) == null ? void 0 : r.pivot) != null && i.valueColumn && (e.visualizations[l].table.pivot.valueColumns = [a.table.pivot.valueColumn], delete e.visualizations[l].table.pivot.valueColumn);
  }), (t = (s = e.table) == null ? void 0 : s.pivot) != null && t.valueColumn && (e.table.pivot.valueColumns = [e.table.pivot.valueColumn], delete e.table.pivot.valueColumn), e;
}, re = (e) => {
  var s;
  (s = e.xAxis) != null && s.labelOffset && (e.xAxis.labelOffset = 0);
}, ae = (e) => {
  e.filters && (e.filters = e.filters.map((s) => (s.filterStyle || (s.filterStyle = "dropdown"), s)));
}, ie = (e) => {
  const s = "4.24.10", t = F.cloneDeep(e);
  return re(t), se(t), te(t), ae(t), t.version = s, t;
}, oe = (e) => (e.migrations = e.migrations || {}, e.migrations.addColorMigration = !0, e), le = (e) => {
  const s = "4.24.11", t = F.cloneDeep(e);
  return oe(t), t.version = s, t;
}, ne = (e) => {
  var s;
  return (s = e.general) != null && s.territoriesLabel && delete e.general.territoriesLabel, e;
}, de = (e) => {
  const s = "4.25.1", t = F.cloneDeep(e);
  return ne(t), t.version = s, t;
}, ce = (e) => {
  let s = e;
  return [
    ["4.24.3", Z],
    ["4.24.4", $],
    ["4.24.5", K],
    ["4.24.7", X, !0],
    ["4.24.9", ee],
    ["4.24.10", ie, !0],
    ["4.24.11", le],
    ["4.25.1", de]
  ].forEach(([l, a, r]) => {
    (S(s.version, l) || r) && (s = a(s)), s.multiDashboards && s.multiDashboards.forEach((i, n) => {
      i.type = "dashboard", s.multiDashboards[n] = ce(i);
    });
  }), s;
};
export {
  be as L,
  ye as a,
  ce as c,
  _e as p,
  fe as s,
  we as u
};
