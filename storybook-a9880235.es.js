function L(e, s) {
  document.addEventListener(e, s);
}
function z(e, s) {
  document.removeEventListener(e, s);
}
function B(e, s) {
  const t = new CustomEvent(e, { detail: s });
  document.dispatchEvent(t);
}
function D(e, s = null) {
  var u, p, c, h, d, v, b;
  const { legend: t } = e;
  let o = "", r = "";
  e.lineDatapointStyle === "hover" && (o = " chart-line--hover"), e.lineDatapointStyle === "always show" && (o = " chart-line--always"), e.barHasBorder === "false" && (r = " chart-bar--no-border");
  let a = ["cove-component__inner"], n = ["cove-component__content"];
  const { visualizationType: i, title: C, showTitle: _ } = e;
  (i === "Spark Line" || i === "chart") && C && _ && n.push("component--has-title"), e.showTitle && n.push("component--has-title"), e.title && e.visualizationType !== "chart" && e.visualizationType !== "Spark Line" && n.push("component--has-title"), e.subtext && a.push("component--has-subtext"), e.biteStyle && a.push(`bite__style--${e.biteStyle}`), (u = e.general) != null && u.isCompactStyle && a.push("component--isCompactStyle"), !((p = e.visual) != null && p.border) && n.push("no-borders"), e.visualizationType === "Spark Line" && n.push("sparkline"), (c = e.visual) != null && c.borderColorTheme && n.push("component--has-borderColorTheme"), (h = e.visual) != null && h.accent && n.push("component--has-accent"), (d = e.visual) != null && d.background && n.push("component--has-background"), (v = e.visual) != null && v.hideBackgroundColor && n.push("component--hideBackgroundColor"), e.shadow && a.push("shadow"), (b = e == null ? void 0 : e.visual) != null && b.roundedBorders && a.push("bite--has-rounded-borders");
  let y = {
    width: "100%"
  };
  const l = () => (t == null ? void 0 : t.position) === "side" && (t != null && t.singleColumn) ? "legend-container__ul--single-column" : (t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "single-row" : t != null && t.verticalSorted && !(t != null && t.singleRow) ? "vertical-sorted" : "", w = () => {
    const m = ["legend-container__ul"];
    return m.push(l()), m;
  }, S = {
    aside: [`${t == null ? void 0 : t.position}`, `${l()}`, "cdcdataviz-sr-focusable", `${s}`],
    section: ["legend-container"],
    ul: w(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title"],
    resetButton: ["legend-container__reset-button", "btn", "clear"],
    description: ["legend-container__description"]
  };
  return { innerContainerClasses: a, contentClasses: n, barBorderClass: r, lineDatapointClass: o, sparkLineStyles: y, legendClasses: S };
}
const k = async (e) => {
  let t = { ...e };
  return t.validated = 4.23, t;
}, E = async (e) => {
  let s = e;
  return s = await k(s), s;
};
export {
  z as a,
  E as c,
  B as p,
  L as s,
  D as u
};
