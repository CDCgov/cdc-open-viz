import { r as o, R as a } from "./storybook-index-45401197.es.js";
import { a as _ } from "./storybook-Icon-ed0ee925.es.js";
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
], g = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, S = ({ children: t, isEditor: r }) => {
  const [e, c] = o.useState(!1), [n, d] = o.useState(!1), [l, h] = o.useState(null), [s, p] = o.useState(!1);
  o.useState(!1);
  const [b, x] = o.useState(null), v = o.useRef(null);
  o.useRef(null);
  const E = o.useRef(null), k = o.useCallback(
    (i) => h((m) => m !== i ? i : null),
    [l]
  ), N = (i) => {
    i.code === "KeyL" && i.ctrlKey && c((u) => !u);
    const m = g === "MacOS" ? i.metaKey : i.altKey;
    if (m) {
      let u = i.key;
      isNaN(u) || u <= f.length && (i.preventDefault(), k(f[u - 1]));
    }
    m || (i.code === "KeyG" && d((u) => !u), i.code === "KeyR" && w());
  };
  o.useEffect(() => (document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)), []);
  const w = o.useCallback(() => {
    if (!s && v.current) {
      h(null), p(!0), d(!1), v.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", v.current.style.transform = "rotate(-360deg)";
      const i = setTimeout(() => {
        p(!1), v.current.style.transition = null, v.current.style.transform = "rotate(0deg)", v.current.style.transform = null;
      }, 400);
      return () => clearTimeout(i);
    }
  }, [s]);
  return o.useEffect(() => d(!!l), [l]), o.useEffect(() => {
    if (!E.current)
      return;
    let i = new ResizeObserver((m) => {
      for (let u of m) {
        let { width: z, height: R } = u.contentRect;
        x({ width: z, height: R });
      }
    });
    return i.observe(E.current), () => {
      i && (i.disconnect(), i = null);
    };
  }), !r || !e ? t : /* @__PURE__ */ a.createElement("div", { className: "cove-editor__content", "data-grid": n || null }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor__content-wrap--x", style: l ? { maxWidth: l + "px", minWidth: "unset" } : null }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor__content-wrap--y" }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor-utils__breakpoints--px" }, n && e && /* @__PURE__ */ a.createElement(a.Fragment, null, Math.round(b.width), /* @__PURE__ */ a.createElement("span", { className: "mx-1", style: { fontSize: "0.675rem" } }, "✕"), Math.round(b.height))), /* @__PURE__ */ a.createElement("div", { className: "cove-editor__grid-caret--top", ref: E }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor__grid-caret--bottom" }, t)))), /* @__PURE__ */ a.createElement("div", { className: "cove-editor-utils__hotkeys" }, /* @__PURE__ */ a.createElement("div", { className: "cove-editor-utils__hotkeys--left" }, /* @__PURE__ */ a.createElement("p", { className: e ? "hotkey--active" : null }, "Editor"), /* @__PURE__ */ a.createElement("p", { className: n ? "hotkey--active" : null }, "Grid"), /* @__PURE__ */ a.createElement("p", { className: s ? "hotkey--active" : null }, "Reset"), /* @__PURE__ */ a.createElement("p", { className: l ? "hotkey--active" : null }, "View")), /* @__PURE__ */ a.createElement("div", { className: "cove-editor-utils__hotkeys--right" }, /* @__PURE__ */ a.createElement("p", { className: e ? "hotkey--active" : null }, "esc"), /* @__PURE__ */ a.createElement("p", { className: n ? "hotkey--active" : null }, "G"), /* @__PURE__ */ a.createElement("p", { className: s ? "hotkey--active" : null }, "R"), /* @__PURE__ */ a.createElement("p", { className: l ? "hotkey--active" : null }, g === "MacOS" ? /* @__PURE__ */ a.createElement(_, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt", " + ", l ? f.indexOf(l) + 1 : `[1 - ${f.length}]`))), /* @__PURE__ */ a.createElement("div", { className: "cove-editor-utils__breakpoints" }, /* @__PURE__ */ a.createElement("ul", { className: `cove-editor-utils__breakpoints-list${l ? " has-active" : ""}` }, /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        d((i) => !i);
      }
    },
    /* @__PURE__ */ a.createElement("div", { className: "cove-editor-utils__breakpoints-grid" }, /* @__PURE__ */ a.createElement(_, { display: "grid" }))
  ), f.map((i, m) => /* @__PURE__ */ a.createElement("button", { className: `cove-editor-utils__breakpoints-item${l === i ? " active" : ""}`, onClick: () => k(i), key: m }, i, "px")), /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "cove-editor-utils__breakpoints-item",
      onClick: () => {
        w();
      }
    },
    /* @__PURE__ */ a.createElement("div", { className: "cove-editor-utils__breakpoints-reset", ref: v }, /* @__PURE__ */ a.createElement(_, { display: "rotateLeft" }))
  ))));
};
const D = (t) => {
  const { displayPanel: r = !1, isDashboard: e = !1, title: c = "Configure Visualization", children: n, onBackClick: d } = t, l = () => {
    const s = ["editor-panel", "cove", "sidebar"];
    return r || s.push("hidden"), e && s.push("dashboard"), s;
  }, h = () => {
    const s = [];
    return r && s.push("editor-panel__toggle"), r || s.push("collapsed", "editor-panel__toggle"), s;
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("button", { className: h().join(" "), title: r ? "Collapse Editor" : "Expand Editor", onClick: d }), /* @__PURE__ */ a.createElement("section", { className: l().join(" ") }, /* @__PURE__ */ a.createElement("h2", { className: "editor-panel__title" }, c), /* @__PURE__ */ a.createElement("section", { className: "form-container", "data-html2canvas-ignore": !0 }, n)));
};
const O = o.forwardRef((t, r) => {
  const { config: e = {}, isEditor: c = !1, currentViewport: n = "lg", imageId: d = "", showEditorPanel: l = !0 } = t, h = () => {
    let s = ["cdc-open-viz-module", `${n}`, `font-${e == null ? void 0 : e.fontSize}`, `${e == null ? void 0 : e.theme}`];
    return c && s.push("spacing-wrapper"), c && s.push("isEditor"), c && l && (s = s.filter((p) => p !== "editor-panel--hidden"), s.push("editor-panel--visible")), c && !l && (s = s.filter((p) => p !== "editor-panel--visible"), s.push("editor-panel--hidden")), e.type === "filtered-text" ? (s.push("type-filtered-text"), s = s.filter((p) => p !== "cove-component__content"), s) : e.type === "chart" ? (s.push("type-chart"), (e == null ? void 0 : e.visualizationType) === "Spark Line" && s.push("type-sparkline"), s) : (e.type === "map" && s.push("type-map"), e.type === "data-bite" && (s.push("cdc-open-viz-module", "type-data-bite", n, e.theme, `font-${e.fontSize}`), c && s.push("is-editor")), e.type === "markup-include" && s.push("markup-include", "cdc-open-viz-module"), e.type === "waffle-chart" && (s.push("cove", "cdc-open-viz-module", "type-waffle-chart", n, e.theme, "font-" + e.overallFontSize), c && s.push("is-editor"), s.push("cove-component", "waffle-chart")), s);
  };
  return (
    // prettier-ignore
    /* @__PURE__ */ a.createElement(
      "div",
      {
        ...e.type === "chart" ? { "data-lollipop": e.isLollipopChart } : {},
        className: h().join(" "),
        "data-download-id": d,
        ref: r
      },
      t.children
    )
  );
}), F = {
  Responsive: S,
  Sidebar: D,
  VisualizationWrapper: O
}, P = (t) => {
  t.type === "dashboard" && Object.keys(t.visualizations).forEach((r) => {
    const e = t.visualizations[r];
    e.type === "table" && (e.filters || (e.filters = [], e.filterBehavior = "Filter Change"));
  });
}, A = (t) => {
  const r = "4.24.4", e = y.cloneDeep(t);
  return P(e), e.version = r, e;
}, K = (t) => {
  t.type === "dashboard" && (t.rows = t.rows.map((r) => {
    let e;
    if (r.columns === void 0) {
      e = {};
      const c = r.map((n) => (e.uuid = n.uuid, e.toggle = n.toggle, e.equalHeight = n.equalHeight, y.pick(n, "equalHeight", "width", "hide", "widget", "uuid")));
      e.columns = c;
    }
    return e ?? r;
  }));
}, L = (t) => {
  t.type === "chart" && (t.xAxis.sortDates && (t.xAxis.type = "date-time"), t.table.download = !0, delete t.xAxis.sortDates);
}, W = (t) => {
  t.type === "map" && (t.table.download = !0, t.general.showDownloadButton = !0, t.general.expandDataTable = t.table.expanded);
}, $ = (t) => {
  const r = "4.24.3", e = y.cloneDeep(t);
  return K(e), L(e), W(e), e.version = r, e;
}, M = (t) => {
  t.type === "markup-include" && (t.contentEditor || (t.contentEditor = {
    title: t.title,
    showHeader: t.showHeader,
    srcUrl: t.srcUrl
  }, delete t.title, delete t.showHeader, delete t.srcUrl), t.visual || (t.visual = {}));
}, U = (t) => {
  const r = "4.24.4", e = y.cloneDeep(t);
  return M(e), e.version = r, e;
}, C = (t) => {
  let r = t;
  return r = $(r), r = A(r), r = U(r), r;
}, G = async (t) => await C(t);
export {
  F as L,
  G as a,
  C as c
};
