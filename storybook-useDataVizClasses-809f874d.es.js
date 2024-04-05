function T(e, n) {
  document.addEventListener(e, n);
}
function L(e, n) {
  document.removeEventListener(e, n);
}
function z(e, n) {
  const t = new CustomEvent(e, { detail: n });
  document.dispatchEvent(t);
}
function B(e, n = null) {
  var u, p, h, c, d, b, m;
  const { legend: t } = e;
  let a = "", i = "";
  e.lineDatapointStyle === "hover" && (a = " chart-line--hover"), e.lineDatapointStyle === "always show" && (a = " chart-line--always"), e.barHasBorder === "false" && (i = " chart-bar--no-border");
  let o = ["cove-component__inner"], s = ["cove-component__content"];
  const { visualizationType: r, title: C, showTitle: _ } = e;
  (r === "Spark Line" || r === "chart") && C && _ && s.push("component--has-title"), e.showTitle && s.push("component--has-title"), e.title && e.visualizationType !== "chart" && e.visualizationType !== "Spark Line" && s.push("component--has-title"), e.subtext && o.push("component--has-subtext"), e.biteStyle && o.push(`bite__style--${e.biteStyle}`), (u = e.general) != null && u.isCompactStyle && o.push("component--isCompactStyle"), !((p = e.visual) != null && p.border) && s.push("no-borders"), e.visualizationType === "Spark Line" && s.push("sparkline"), (h = e.visual) != null && h.borderColorTheme && s.push("component--has-borderColorTheme"), (c = e.visual) != null && c.accent && s.push("component--has-accent"), (d = e.visual) != null && d.background && s.push("component--has-background"), (b = e.visual) != null && b.hideBackgroundColor && s.push("component--hideBackgroundColor"), e.shadow && o.push("shadow"), (m = e == null ? void 0 : e.visual) != null && m.roundedBorders && o.push("bite--has-rounded-borders");
  let w = {
    width: "100%"
  };
  const l = () => (t == null ? void 0 : t.position) === "side" && (t != null && t.singleColumn) ? "legend-container__ul--single-column" : (t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "single-row" : t != null && t.verticalSorted && !(t != null && t.singleRow) ? "vertical-sorted" : "", y = () => {
    const v = ["legend-container__ul"];
    return v.push(l()), v;
  }, S = {
    aside: [`${t == null ? void 0 : t.position}`, `${l()}`, "cdcdataviz-sr-focusable", `${n}`],
    section: ["legend-container"],
    ul: y(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title"],
    description: ["legend-container__description"],
    div: [(t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "shape-container single-row" : "shape-container"]
  };
  return { innerContainerClasses: o, contentClasses: s, barBorderClass: i, lineDatapointClass: a, sparkLineStyles: w, legendClasses: S };
}
export {
  L as a,
  z as p,
  T as s,
  B as u
};
