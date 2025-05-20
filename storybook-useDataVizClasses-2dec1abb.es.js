import { P as B, i as j } from "./storybook-viewports-6b80499f.es.js";
import { a as y, j as a, F as P } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as p } from "./storybook-index-f2fed736.es.js";
import { a as z } from "./storybook-Icon-e250778e.es.js";
const R = (s) => !!(s != null && s.includes("wt=csv")), G = (s) => !!(s != null && s.includes("wt=json"));
function T(s) {
  let o = new URL(s, window.location.origin);
  const e = o.pathname;
  return /(?:\.([^.]+))?$/.exec(e)[1] === "csv" || R(s) ? fetch(o.href).then((n) => n.text()).then((n) => (n = n.replace(/(".*?")|,/g, (...h) => h[1] || "|"), n = n.replace(/["]+/g, ""), B.parse(n, {
    //quotes: "true",  // dont need these
    //quoteChar: "'",  // has no effect that I can tell
    header: !0,
    skipEmptyLines: !0,
    delimiter: "|",
    // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
    dynamicTyping: !1
  }).data)) : fetch(R(s) ? s : o.href).then((n) => n.ok ? n.json() : Promise.reject(n));
}
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
], L = navigator.userAgent.indexOf("Win") !== -1 ? "Win" : navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : null, D = ({ children: s, isEditor: o }) => {
  const [e, c] = p.useState(!1), [d, n] = p.useState(!1), [i, h] = p.useState(null), [u, t] = p.useState(!1);
  p.useState(!1);
  const [l, w] = p.useState(null), f = p.useRef(null);
  p.useRef(null);
  const _ = p.useRef(null), m = p.useCallback(
    (r) => h((b) => b !== r ? r : null),
    [i]
  ), g = (r) => {
    if (!o)
      return r;
    r.code === "KeyL" && r.ctrlKey && c((v) => !v);
    const b = L === "MacOS" ? r.metaKey : r.altKey;
    if (b) {
      let v = r.key;
      isNaN(v) || v <= k.length && (r.preventDefault(), m(k[v - 1]));
    }
    b || (r.code === "KeyG" && n((v) => !v), r.code === "KeyR" && C());
  };
  p.useEffect(() => (document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g)), []);
  const C = p.useCallback(() => {
    if (!u && f.current) {
      h(null), t(!0), n(!1), f.current.style.transition = "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)", f.current.style.transform = "rotate(-360deg)";
      const r = setTimeout(() => {
        t(!1), f.current.style.transition = null, f.current.style.transform = "rotate(0deg)", f.current.style.transform = null;
      }, 400);
      return () => clearTimeout(r);
    }
  }, [u]);
  return p.useEffect(() => n(!!i), [i]), p.useEffect(() => {
    if (!_.current)
      return;
    let r = new ResizeObserver((b) => {
      for (let v of b) {
        let { width: N, height: S } = v.contentRect;
        w({ width: N, height: S });
      }
    });
    return r.observe(_.current), () => {
      r && (r.disconnect(), r = null);
    };
  }), !o || !e ? s : /* @__PURE__ */ y("div", { className: "cove-editor__content", "data-grid": d || null, children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "cove-editor__content-wrap--x",
        style: i ? { maxWidth: i + "px", minWidth: "unset" } : null,
        children: /* @__PURE__ */ y("div", { className: "cove-editor__content-wrap--y", children: [
          /* @__PURE__ */ a("div", { className: "cove-editor-utils__breakpoints--px", children: d && e && /* @__PURE__ */ y(P, { children: [
            Math.round(l.width),
            /* @__PURE__ */ a("span", { className: "mx-1", style: { fontSize: "0.675rem" }, children: "✕" }),
            Math.round(l.height)
          ] }) }),
          /* @__PURE__ */ a("div", { className: "cove-editor__grid-caret--top", ref: _, children: /* @__PURE__ */ a("div", { className: "cove-editor__grid-caret--bottom", children: s }) })
        ] })
      }
    ),
    /* @__PURE__ */ y("div", { className: "cove-editor-utils__hotkeys", children: [
      /* @__PURE__ */ y("div", { className: "cove-editor-utils__hotkeys--left", children: [
        /* @__PURE__ */ a("p", { className: e ? "hotkey--active" : null, children: "Editor" }),
        /* @__PURE__ */ a("p", { className: d ? "hotkey--active" : null, children: "Grid" }),
        /* @__PURE__ */ a("p", { className: u ? "hotkey--active" : null, children: "Reset" }),
        /* @__PURE__ */ a("p", { className: i ? "hotkey--active" : null, children: "View" })
      ] }),
      /* @__PURE__ */ y("div", { className: "cove-editor-utils__hotkeys--right", children: [
        /* @__PURE__ */ a("p", { className: e ? "hotkey--active" : null, children: "esc" }),
        /* @__PURE__ */ a("p", { className: d ? "hotkey--active" : null, children: "G" }),
        /* @__PURE__ */ a("p", { className: u ? "hotkey--active" : null, children: "R" }),
        /* @__PURE__ */ y("p", { className: i ? "hotkey--active" : null, children: [
          L === "MacOS" ? /* @__PURE__ */ a(z, { style: { marginRight: "0.25rem" }, display: "command", size: 12 }) : "Alt",
          " +",
          " ",
          i ? k.indexOf(i) + 1 : `[1 - ${k.length}]`
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "cove-editor-utils__breakpoints", children: /* @__PURE__ */ y("ul", { className: `cove-editor-utils__breakpoints-list${i ? " has-active" : ""}`, children: [
      /* @__PURE__ */ a(
        "button",
        {
          className: "cove-editor-utils__breakpoints-item",
          onClick: () => {
            n((r) => !r);
          },
          children: /* @__PURE__ */ a("div", { className: "cove-editor-utils__breakpoints-grid", children: /* @__PURE__ */ a(z, { display: "grid" }) })
        }
      ),
      k.map((r, b) => /* @__PURE__ */ y(
        "button",
        {
          className: `cove-editor-utils__breakpoints-item${i === r ? " active" : ""}`,
          onClick: () => m(r),
          children: [
            r,
            "px"
          ]
        },
        b
      )),
      /* @__PURE__ */ a(
        "button",
        {
          className: "cove-editor-utils__breakpoints-item",
          onClick: () => {
            C();
          },
          children: /* @__PURE__ */ a("div", { className: "cove-editor-utils__breakpoints-reset", ref: f, children: /* @__PURE__ */ a(z, { display: "rotateLeft" }) })
        }
      )
    ] }) })
  ] });
};
const A = (s) => {
  const { displayPanel: o = !1, isDashboard: e = !1, title: c = "Configure Visualization", children: d, onBackClick: n } = s, i = () => {
    const t = ["editor-panel", "cove", "sidebar"];
    return o || t.push("hidden"), e && t.push("dashboard"), t.join(" ");
  }, h = () => {
    const t = [];
    return o && t.push("editor-panel__toggle"), o || t.push("collapsed", "editor-panel__toggle"), t.join(" ");
  }, u = () => {
    const t = ["editor-panel__title"];
    return o || t.push("collapsed"), t.join(" ");
  };
  return /* @__PURE__ */ y(P, { children: [
    /* @__PURE__ */ a("section", { className: "editor-panel__toggle-wrapper p-absolute", style: { height: "49.75px", width: "350px" }, children: /* @__PURE__ */ a("button", { className: h(), title: o ? "Collapse Editor" : "Expand Editor", onClick: n }) }),
    /* @__PURE__ */ y("section", { className: i(), children: [
      /* @__PURE__ */ a("h2", { className: u(), children: c }),
      /* @__PURE__ */ a("section", { className: "form-container", "data-html2canvas-ignore": !0, children: d })
    ] })
  ] });
};
const O = p.forwardRef((s, o) => {
  const {
    config: e = {},
    isEditor: c = !1,
    currentViewport: d = "lg",
    imageId: n = "",
    showEditorPanel: i = !0,
    className: h
  } = s, u = () => {
    var l;
    let t = ["cdc-open-viz-module", `${d}`, `${e == null ? void 0 : e.theme}`];
    return h && t.push(h), c && t.push("spacing-wrapper"), c && t.push("isEditor"), c && i && (t = t.filter((w) => w !== "editor-panel--hidden"), t.push("editor-panel--visible")), c && !i && (t = t.filter((w) => w !== "editor-panel--visible"), t.push("editor-panel--hidden")), e.type === "filtered-text" ? (t.push("type-filtered-text", `font-${e.fontSize}`), t = t.filter((w) => w !== "cove-component__content"), t) : e.type === "chart" ? (t.push("type-chart"), (e == null ? void 0 : e.visualizationType) === "Spark Line" && t.push("type-sparkline"), t) : (e.type === "map" && (t.push("type-map"), ((l = e == null ? void 0 : e.runtime) == null ? void 0 : l.editorErrorMessage.length) !== 0 && t.push("type-map--has-error")), e.type === "data-bite" && (t.push("cdc-open-viz-module", "type-data-bite", d, e.theme, `font-${e.fontSize}`), c && t.push("is-editor")), e.type === "markup-include" && t.push("markup-include", "cdc-open-viz-module"), e.type === "waffle-chart" && (t.push(
      "cove",
      "cdc-open-viz-module",
      "type-waffle-chart",
      d,
      e.theme,
      "font-" + e.overallFontSize
    ), c && t.push("is-editor"), t.push("cove-component", "waffle-chart")), t);
  };
  return /* @__PURE__ */ a(
    "div",
    {
      ...e.type === "chart" ? { "data-lollipop": e.isLollipopChart } : {},
      className: u().join(" "),
      "data-download-id": n,
      ref: o,
      children: s.children
    }
  );
}), I = {
  Responsive: D,
  Sidebar: A,
  VisualizationWrapper: O
}, V = (s, o, e = !1) => (c, d, n, i) => {
  if (c === null && d === null) {
    const l = { ...s, [n]: i };
    n === "filterColumn" && (l.filterValue = ""), o(l);
    return;
  }
  const h = Array.isArray(s[c]);
  let u = h ? [...s[c], i] : { ...s[c], [n]: i };
  !n && !e && (u = i), d !== null && (h ? (u = [...s[c]], u[d] = { ...u[d], [n]: i }) : typeof i == "string" && e ? u[d] = i : u = { ...s[c], [d]: { ...s[c][d], [n]: i } });
  const t = { ...s, [c]: u };
  o(t);
};
function J(s, o) {
  document.addEventListener(s, o);
}
function q(s, o) {
  document.removeEventListener(s, o);
}
function H(s, o) {
  const e = new CustomEvent(s, { detail: o });
  document.dispatchEvent(e);
}
function Q(s, o = null) {
  var E;
  const {
    legend: e,
    lineDatapointStyle: c,
    showTitle: d,
    title: n,
    visualizationType: i,
    subtext: h,
    biteStyle: u,
    general: t,
    visual: l,
    shadow: w
  } = s;
  let f = "";
  c === "hover" && (f = " chart-line--hover"), c === "always show" && (f = " chart-line--always");
  let _ = ["cove-component__inner"], m = ["cove-component__content"];
  (i === "Spark Line" || i === "chart") && n && d && m.push("component--has-title"), d && m.push("component--has-title"), n && i !== "chart" && i !== "Spark Line" && m.push("component--has-title"), h && _.push("component--has-subtext"), u && _.push(`bite__style--${u}`), t != null && t.isCompactStyle && _.push("component--isCompactStyle"), !(l != null && l.border) && m.push("no-borders"), i === "Spark Line" && m.push("sparkline"), l != null && l.borderColorTheme && m.push("component--has-borderColorTheme"), l != null && l.accent && m.push("component--has-accent"), l != null && l.background && m.push("component--has-background"), l != null && l.hideBackgroundColor && m.push("component--hideBackgroundColor"), w && _.push("shadow"), (E = s == null ? void 0 : s.visual) != null && E.roundedBorders && _.push("bite--has-rounded-borders");
  let g = {
    width: "100%"
  };
  const C = () => (e == null ? void 0 : e.position) === "side" && (e != null && e.singleColumn) ? "legend-container__ul--single-column" : (e == null ? void 0 : e.position) !== "side" && (e != null && e.singleRow) ? "single-row" : e != null && e.verticalSorted && !(e != null && e.singleRow) ? "vertical-sorted" : "", r = () => {
    const x = ["legend-container__ul"];
    return x.push(C()), (e == null ? void 0 : e.style) === "gradient" && x.push("patterns-only"), x;
  }, b = e != null && e.hideBorder ? "no-border" : "", v = [
    `${e == null ? void 0 : e.position}`,
    `${C()}`,
    "cdcdataviz-sr-focusable",
    `${o}`,
    `${b}`
  ], N = !(e != null && e.hideBorder), S = `m${j("md", o) ? "t" : ""}-3`, $ = {
    aside: v,
    section: ["legend-container", N ? S : ""],
    ul: r(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title fw-bold"],
    description: ["legend-container__description mt-2"],
    div: [(e == null ? void 0 : e.position) === "bottom" && (e != null && e.singleRow) ? "shape-container single-row" : "shape-container"],
    showAllButton: ["legend-container__reset-button"]
  };
  return { innerContainerClasses: _, contentClasses: m, lineDatapointClass: f, sparkLineStyles: g, legendClasses: $ };
}
export {
  I as L,
  G as a,
  Q as b,
  q as c,
  T as f,
  R as i,
  H as p,
  J as s,
  V as u
};
