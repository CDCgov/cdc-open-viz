function k(e, n) {
  document.addEventListener(e, n);
}
function T(e, n) {
  document.removeEventListener(e, n);
}
function L(e, n) {
  const t = new CustomEvent(e, { detail: n });
  document.dispatchEvent(t);
}
function z(e, n = null) {
  var l, u, p, h, c, d, m;
  const { legend: t } = e;
  let i = "";
  e.lineDatapointStyle === "hover" && (i = " chart-line--hover"), e.lineDatapointStyle === "always show" && (i = " chart-line--always");
  let o = ["cove-component__inner"], s = ["cove-component__content"];
  const { visualizationType: a, title: b, showTitle: C } = e;
  (a === "Spark Line" || a === "chart") && b && C && s.push("component--has-title"), e.showTitle && s.push("component--has-title"), e.title && e.visualizationType !== "chart" && e.visualizationType !== "Spark Line" && s.push("component--has-title"), e.subtext && o.push("component--has-subtext"), e.biteStyle && o.push(`bite__style--${e.biteStyle}`), (l = e.general) != null && l.isCompactStyle && o.push("component--isCompactStyle"), !((u = e.visual) != null && u.border) && s.push("no-borders"), e.visualizationType === "Spark Line" && s.push("sparkline"), (p = e.visual) != null && p.borderColorTheme && s.push("component--has-borderColorTheme"), (h = e.visual) != null && h.accent && s.push("component--has-accent"), (c = e.visual) != null && c.background && s.push("component--has-background"), (d = e.visual) != null && d.hideBackgroundColor && s.push("component--hideBackgroundColor"), e.shadow && o.push("shadow"), (m = e == null ? void 0 : e.visual) != null && m.roundedBorders && o.push("bite--has-rounded-borders");
  let _ = {
    width: "100%"
  };
  const r = () => (t == null ? void 0 : t.position) === "side" && (t != null && t.singleColumn) ? "legend-container__ul--single-column" : (t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "single-row" : t != null && t.verticalSorted && !(t != null && t.singleRow) ? "vertical-sorted" : "", w = () => {
    const v = ["legend-container__ul"];
    return v.push(r()), v;
  }, y = {
    aside: [`${t == null ? void 0 : t.position}`, `${r()}`, "cdcdataviz-sr-focusable", `${n}`],
    section: ["legend-container"],
    ul: w(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title"],
    description: ["legend-container__description"],
    div: [(t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "shape-container single-row" : "shape-container"]
  };
  return { innerContainerClasses: o, contentClasses: s, lineDatapointClass: i, sparkLineStyles: _, legendClasses: y };
}
export {
  T as a,
  L as p,
  k as s,
  z as u
};
