import { a as v, j as i, F as L } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as l } from "./storybook-index-f2fed736.es.js";
import { a as z } from "./storybook-Icon-e250778e.es.js";
import { i as P } from "./storybook-viewports-61111b6b.es.js";
const k = [
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
], R = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, B = ({ children: a, isEditor: r }) => {
  const [e, c] = l.useState(!1), [d, p] = l.useState(!1), [n, b] = l.useState(null), [h, t] = l.useState(!1);
  l.useState(!1);
  const [o, w] = l.useState(null), m = l.useRef(null);
  l.useRef(null);
  const y = l.useRef(null), u = l.useCallback(
    (s) => b((_) => _ !== s ? s : null),
    [n]
  ), N = (s) => {
    if (!r)
      return s;
    s.code === "KeyL" && s.ctrlKey && c((f) => !f);
    const _ = R === "MacOS" ? s.metaKey : s.altKey;
    if (_) {
      let f = s.key;
      isNaN(f) || f <= k.length && (s.preventDefault(), u(k[f - 1]));
    }
    _ || (s.code === "KeyG" && p((f) => !f), s.code === "KeyR" && C());
  };
  l.useEffect(() => (document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)), []);
  const C = l.useCallback(() => {
    if (!h && m.current) {
      b(null), t(!0), p(!1), m.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", m.current.style.transform = "rotate(-360deg)";
      const s = setTimeout(() => {
        t(!1), m.current.style.transition = null, m.current.style.transform = "rotate(0deg)", m.current.style.transform = null;
      }, 400);
      return () => clearTimeout(s);
    }
  }, [h]);
  return l.useEffect(() => p(!!n), [n]), l.useEffect(() => {
    if (!y.current)
      return;
    let s = new ResizeObserver((_) => {
      for (let f of _) {
        let { width: g, height: S } = f.contentRect;
        w({ width: g, height: S });
      }
    });
    return s.observe(y.current), () => {
      s && (s.disconnect(), s = null);
    };
  }), !r || !e ? a : /* @__PURE__ */ v("div", { className: "cove-editor__content", "data-grid": d || null, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "cove-editor__content-wrap--x",
        style: n ? { maxWidth: n + "px", minWidth: "unset" } : null,
        children: /* @__PURE__ */ v("div", { className: "cove-editor__content-wrap--y", children: [
          /* @__PURE__ */ i("div", { className: "cove-editor-utils__breakpoints--px", children: d && e && /* @__PURE__ */ v(L, { children: [
            Math.round(o.width),
            /* @__PURE__ */ i("span", { className: "mx-1", style: { fontSize: "0.675rem" }, children: "✕" }),
            Math.round(o.height)
          ] }) }),
          /* @__PURE__ */ i("div", { className: "cove-editor__grid-caret--top", ref: y, children: /* @__PURE__ */ i("div", { className: "cove-editor__grid-caret--bottom", children: a }) })
        ] })
      }
    ),
    /* @__PURE__ */ v("div", { className: "cove-editor-utils__hotkeys", children: [
      /* @__PURE__ */ v("div", { className: "cove-editor-utils__hotkeys--left", children: [
        /* @__PURE__ */ i("p", { className: e ? "hotkey--active" : null, children: "Editor" }),
        /* @__PURE__ */ i("p", { className: d ? "hotkey--active" : null, children: "Grid" }),
        /* @__PURE__ */ i("p", { className: h ? "hotkey--active" : null, children: "Reset" }),
        /* @__PURE__ */ i("p", { className: n ? "hotkey--active" : null, children: "View" })
      ] }),
      /* @__PURE__ */ v("div", { className: "cove-editor-utils__hotkeys--right", children: [
        /* @__PURE__ */ i("p", { className: e ? "hotkey--active" : null, children: "esc" }),
        /* @__PURE__ */ i("p", { className: d ? "hotkey--active" : null, children: "G" }),
        /* @__PURE__ */ i("p", { className: h ? "hotkey--active" : null, children: "R" }),
        /* @__PURE__ */ v("p", { className: n ? "hotkey--active" : null, children: [
          R === "MacOS" ? /* @__PURE__ */ i(z, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt",
          " +",
          " ",
          n ? k.indexOf(n) + 1 : `[1 - ${k.length}]`
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "cove-editor-utils__breakpoints", children: /* @__PURE__ */ v("ul", { className: `cove-editor-utils__breakpoints-list${n ? " has-active" : ""}`, children: [
      /* @__PURE__ */ i(
        "button",
        {
          className: "cove-editor-utils__breakpoints-item",
          onClick: () => {
            p((s) => !s);
          },
          children: /* @__PURE__ */ i("div", { className: "cove-editor-utils__breakpoints-grid", children: /* @__PURE__ */ i(z, { display: "grid" }) })
        }
      ),
      k.map((s, _) => /* @__PURE__ */ v(
        "button",
        {
          className: `cove-editor-utils__breakpoints-item${n === s ? " active" : ""}`,
          onClick: () => u(s),
          children: [
            s,
            "px"
          ]
        },
        _
      )),
      /* @__PURE__ */ i(
        "button",
        {
          className: "cove-editor-utils__breakpoints-item",
          onClick: () => {
            C();
          },
          children: /* @__PURE__ */ i("div", { className: "cove-editor-utils__breakpoints-reset", ref: m, children: /* @__PURE__ */ i(z, { display: "rotateLeft" }) })
        }
      )
    ] }) })
  ] });
};
const D = (a) => {
  const { displayPanel: r = !1, isDashboard: e = !1, title: c = "Configure Visualization", children: d, onBackClick: p } = a, n = () => {
    const t = ["editor-panel", "cove", "sidebar"];
    return r || t.push("hidden"), e && t.push("dashboard"), t.join(" ");
  }, b = () => {
    const t = [];
    return r && t.push("editor-panel__toggle"), r || t.push("collapsed", "editor-panel__toggle"), t.join(" ");
  }, h = () => {
    const t = ["editor-panel__title"];
    return r || t.push("collapsed"), t.join(" ");
  };
  return /* @__PURE__ */ v(L, { children: [
    /* @__PURE__ */ i("section", { className: "editor-panel__toggle-wrapper p-absolute", style: { height: "49.75px", width: "350px" }, children: /* @__PURE__ */ i("button", { className: b(), title: r ? "Collapse Editor" : "Expand Editor", onClick: p }) }),
    /* @__PURE__ */ v("section", { className: n(), children: [
      /* @__PURE__ */ i("h2", { className: h(), children: c }),
      /* @__PURE__ */ i("section", { className: "form-container", "data-html2canvas-ignore": !0, children: d })
    ] })
  ] });
};
const O = l.forwardRef((a, r) => {
  const {
    config: e = {},
    isEditor: c = !1,
    currentViewport: d = "lg",
    imageId: p = "",
    showEditorPanel: n = !0,
    className: b
  } = a, h = () => {
    var o;
    let t = ["cdc-open-viz-module", `${d}`, `${e == null ? void 0 : e.theme}`];
    return b && t.push(b), c && t.push("spacing-wrapper"), c && t.push("isEditor"), c && n && (t = t.filter((w) => w !== "editor-panel--hidden"), t.push("editor-panel--visible")), c && !n && (t = t.filter((w) => w !== "editor-panel--visible"), t.push("editor-panel--hidden")), e.type === "filtered-text" ? (t.push("type-filtered-text", `font-${e.fontSize}`), t = t.filter((w) => w !== "cove-component__content"), t) : e.type === "chart" ? (t.push("type-chart"), (e == null ? void 0 : e.visualizationType) === "Spark Line" && t.push("type-sparkline"), t) : (e.type === "map" && (t.push("type-map"), ((o = e == null ? void 0 : e.runtime) == null ? void 0 : o.editorErrorMessage.length) !== 0 && t.push("type-map--has-error")), e.type === "data-bite" && (t.push("cdc-open-viz-module", "type-data-bite", d, e.theme, `font-${e.fontSize}`), c && t.push("is-editor")), e.type === "markup-include" && t.push("markup-include", "cdc-open-viz-module"), e.type === "waffle-chart" && (t.push(
      "cove",
      "cdc-open-viz-module",
      "type-waffle-chart",
      d,
      e.theme,
      "font-" + e.overallFontSize
    ), c && t.push("is-editor"), t.push("cove-component", "waffle-chart")), t);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      ...e.type === "chart" ? { "data-lollipop": e.isLollipopChart } : {},
      className: h().join(" "),
      "data-download-id": p,
      ref: r,
      children: a.children
    }
  );
}), V = {
  Responsive: B,
  Sidebar: D,
  VisualizationWrapper: O
};
function A(a, r) {
  document.addEventListener(a, r);
}
function W(a, r) {
  document.removeEventListener(a, r);
}
function G(a, r) {
  const e = new CustomEvent(a, { detail: r });
  document.dispatchEvent(e);
}
function I(a, r = null) {
  var E;
  const {
    legend: e,
    lineDatapointStyle: c,
    showTitle: d,
    title: p,
    visualizationType: n,
    subtext: b,
    biteStyle: h,
    general: t,
    visual: o,
    shadow: w
  } = a;
  let m = "";
  c === "hover" && (m = " chart-line--hover"), c === "always show" && (m = " chart-line--always");
  let y = ["cove-component__inner"], u = ["cove-component__content"];
  (n === "Spark Line" || n === "chart") && p && d && u.push("component--has-title"), d && u.push("component--has-title"), p && n !== "chart" && n !== "Spark Line" && u.push("component--has-title"), b && y.push("component--has-subtext"), h && y.push(`bite__style--${h}`), t != null && t.isCompactStyle && y.push("component--isCompactStyle"), !(o != null && o.border) && u.push("no-borders"), n === "Spark Line" && u.push("sparkline"), o != null && o.borderColorTheme && u.push("component--has-borderColorTheme"), o != null && o.accent && u.push("component--has-accent"), o != null && o.background && u.push("component--has-background"), o != null && o.hideBackgroundColor && u.push("component--hideBackgroundColor"), w && y.push("shadow"), (E = a == null ? void 0 : a.visual) != null && E.roundedBorders && y.push("bite--has-rounded-borders");
  let N = {
    width: "100%"
  };
  const C = () => (e == null ? void 0 : e.position) === "side" && (e != null && e.singleColumn) ? "legend-container__ul--single-column" : (e == null ? void 0 : e.position) !== "side" && (e != null && e.singleRow) ? "single-row" : e != null && e.verticalSorted && !(e != null && e.singleRow) ? "vertical-sorted" : "", s = () => {
    const x = ["legend-container__ul"];
    return x.push(C()), (e == null ? void 0 : e.style) === "gradient" && x.push("patterns-only"), x;
  }, _ = e != null && e.hideBorder ? "no-border" : "", f = [
    `${e == null ? void 0 : e.position}`,
    `${C()}`,
    "cdcdataviz-sr-focusable",
    `${r}`,
    `${_}`
  ], g = !(e != null && e.hideBorder), S = `m${P("md", r) ? "t" : ""}-3`, $ = {
    aside: f,
    section: ["legend-container", g ? S : ""],
    ul: s(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title fw-bold"],
    description: ["legend-container__description mt-2"],
    div: [(e == null ? void 0 : e.position) === "bottom" && (e != null && e.singleRow) ? "shape-container single-row" : "shape-container"],
    showAllButton: ["legend-container__reset-button"]
  };
  return { innerContainerClasses: y, contentClasses: u, lineDatapointClass: m, sparkLineStyles: N, legendClasses: $ };
}
export {
  V as L,
  W as a,
  G as p,
  A as s,
  I as u
};
