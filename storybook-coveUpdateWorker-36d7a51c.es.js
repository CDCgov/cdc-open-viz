import { r as o, R as t } from "./storybook-index-45401197.es.js";
import { a as E } from "./storybook-Icon-48ed169f.es.js";
import { _ } from "./storybook-lodash-c15d8e1c.es.js";
const h = [
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
], k = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, S = ({ children: a, isEditor: r }) => {
  const [e, c] = o.useState(!1), [l, d] = o.useState(!1), [n, v] = o.useState(null), [s, f] = o.useState(!1);
  o.useState(!1);
  const [b, x] = o.useState(null), p = o.useRef(null);
  o.useRef(null);
  const y = o.useRef(null), w = o.useCallback(
    (i) => v((m) => m !== i ? i : null),
    [n]
  ), N = (i) => {
    i.code === "KeyL" && i.ctrlKey && c((u) => !u);
    const m = k === "MacOS" ? i.metaKey : i.altKey;
    if (m) {
      let u = i.key;
      isNaN(u) || u <= h.length && (i.preventDefault(), w(h[u - 1]));
    }
    m || (i.code === "KeyG" && d((u) => !u), i.code === "KeyR" && g());
  };
  o.useEffect(() => (document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)), []);
  const g = o.useCallback(() => {
    if (!s && p.current) {
      v(null), f(!0), d(!1), p.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", p.current.style.transform = "rotate(-360deg)";
      const i = setTimeout(() => {
        f(!1), p.current.style.transition = null, p.current.style.transform = "rotate(0deg)", p.current.style.transform = null;
      }, 400);
      return () => clearTimeout(i);
    }
  }, [s]);
  return o.useEffect(() => d(!!n), [n]), o.useEffect(() => {
    if (!y.current)
      return;
    let i = new ResizeObserver((m) => {
      for (let u of m) {
        let { width: z, height: R } = u.contentRect;
        x({ width: z, height: R });
      }
    });
    return i.observe(y.current), () => {
      i && (i.disconnect(), i = null);
    };
  }), !r || !e ? a : /* @__PURE__ */ t.createElement("div", { className: "cove-editor__content", "data-grid": l || null }, /* @__PURE__ */ t.createElement("div", { className: "cove-editor__content-wrap--x", style: n ? { maxWidth: n + "px", minWidth: "unset" } : null }, /* @__PURE__ */ t.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ t.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, l && e && /* @__PURE__ */ t.createElement(t.Fragment, null, Math.round(b.width), /* @__PURE__ */ t.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(b.height))), /* @__PURE__ */ t.createElement("div", { className: "cove-editor__grid-caret--top", ref: y }, /* @__PURE__ */ t.createElement("div", { className: "cove-editor__grid-caret--bottom" }, a)))), /* @__PURE__ */ t.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ t.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ t.createElement("p", { className: e ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ t.createElement("p", { className: l ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ t.createElement("p", { className: s ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ t.createElement("p", { className: n ? "hotkey--active" : null }, "View")), /* @__PURE__ */ t.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ t.createElement("p", { className: e ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ t.createElement("p", { className: l ? "hotkey--active" : null }, "G"), /* @__PURE__ */ t.createElement("p", { className: s ? "hotkey--active" : null }, "R"), /* @__PURE__ */ t.createElement("p", { className: n ? "hotkey--active" : null }, k === "MacOS" ? /* @__PURE__ */ t.createElement(E, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " + ", n ? h.indexOf(n) + 1 : `[1 - ${h.length}]`))), /* @__PURE__ */ t.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ t.createElement("ul", { className: `cove-editor-utils__breakpoints-list${n ? " has-active" : ""}` }, /* @__PURE__ */ t.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        d((i) => !i);
      }
    },
    /* @__PURE__ */ t.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ t.createElement(E, { display: "grid" }))
  ), h.map((i, m) => /* @__PURE__ */ t.createElement("button", { className: `cove-editor-utils__breakpoints-item${n === i ? " active" : ""}`, onClick: () => w(i), key: m }, i, "px")), /* @__PURE__ */ t.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        g();
      }
    },
    /* @__PURE__ */ t.createElement("div", { className: "cove-editor-utils__breakpoints-reset", ref: p }, /* @__PURE__ */ t.createElement(E, { display: "rotateLeft" }))
  ))));
};
const C = (a) => {
  const { displayPanel: r = !1, isDashboard: e = !1, title: c = "Configure Visualization", children: l, onBackClick: d } = a, n = () => {
    const s = ["editor-panel", "cove", "sidebar"];
    return r || s.push("hidden"), e && s.push("dashboard"), s;
  }, v = () => {
    const s = [];
    return r && s.push("editor-panel__toggle"), r || s.push("collapsed", "editor-panel__toggle"), s;
  };
  return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("button", { className: v().join(" "), title: r ? "Collapse Editor" : "Expand Editor", onClick: d }), /* @__PURE__ */ t.createElement("section", { className: n().join(" ") }, /* @__PURE__ */ t.createElement("h2", { className: "editor-panel__title" }, c), /* @__PURE__ */ t.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, l)));
};
const D = o.forwardRef((a, r) => {
  const { config: e = {}, isEditor: c = !1, currentViewport: l = "lg", imageId: d = "", showEditorPanel: n = !0 } = a, v = () => {
    let s = ["cdc-open-viz-module", `${l}`, `font-${e == null ? void 0 : e.fontSize}`, `${e == null ? void 0 : e.theme}`];
    return c && s.push("spacing-wrapper"), c && s.push("isEditor"), c && n && (s = s.filter((f) => f !== "editor-panel--hidden"), s.push("editor-panel--visible")), c && !n && (s = s.filter((f) => f !== "editor-panel--visible"), s.push("editor-panel--hidden")), e.type === "chart" ? (s.push("type-chart"), (e == null ? void 0 : e.visualizationType) === "Spark Line" && s.push("type-sparkline"), s) : (e.type === "map" && s.push("type-map"), e.type === "data-bite" && (s.push("cdc-open-viz-module", "type-data-bite", l, e.theme, `font-${e.fontSize}`), c && s.push("is-editor")), e.type === "markup-include" && s.push("markup-include", "cdc-open-viz-module"), e.type === "waffle-chart" && (s.push("cove", "cdc-open-viz-module", "type-waffle-chart", l, e.theme, "font-" + e.overallFontSize), c && s.push("is-editor"), s.push("cove-component", "waffle-chart")), s);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ t.createElement(
      "div",
      {
        ...e.type === "chart" ? { "data-lollipop": e.isLollipopChart } : {},
        className: v().join(" "),
        "data-download-id": d,
        ref: r
      },
      a.children
    )
  );
}), F = {
  Responsive: S,
  Sidebar: C,
  VisualizationWrapper: D
}, O = (a) => {
  a.type === "dashboard" && Object.keys(a.visualizations).forEach((r) => {
    const e = a.visualizations[r];
    e.type === "table" && (e.filters || (e.filters = [], e.filterBehavior = "Filter Change"));
  });
}, P = (a) => {
  const r = "4.24.4", e = _.cloneDeep(a);
  return O(e), e.version = r, e;
}, A = (a) => {
  a.type === "dashboard" && (a.rows = a.rows.map((r) => {
    let e;
    if (r.columns === void 0) {
      e = {};
      const c = r.map((l) => (e.uuid = l.uuid, e.toggle = l.toggle, e.equalHeight = l.equalHeight, _.pick(l, "equalHeight", "width", "hide", "widget", "uuid")));
      e.columns = c;
    }
    return e ?? r;
  }));
}, K = (a) => {
  a.type === "chart" && (a.xAxis.sortDates && (a.xAxis.type = "date-time"), a.table.download = !0, delete a.xAxis.sortDates);
}, L = (a) => {
  a.type === "map" && (a.table.download = !0, a.general.showDownloadButton = !0, a.general.expandDataTable = a.table.expanded);
}, W = (a) => {
  const r = "4.24.3", e = _.cloneDeep(a);
  return A(e), K(e), L(e), e.version = r, e;
}, $ = (a) => {
  let r = a;
  return r = W(r), r = P(r), r;
}, G = async (a) => await $(a);
export {
  F as L,
  G as a,
  $ as c
};
