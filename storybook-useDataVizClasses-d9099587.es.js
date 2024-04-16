function k(t, n) {
  document.addEventListener(t, n);
}
function T(t, n) {
  document.removeEventListener(t, n);
}
function L(t, n) {
  const e = new CustomEvent(t, { detail: n });
  document.dispatchEvent(e);
}
function z(t, n = null) {
  var u, p, c, h, d, m, v;
  const { legend: e } = t;
  let a = "";
  t.lineDatapointStyle === "hover" && (a = " chart-line--hover"), t.lineDatapointStyle === "always show" && (a = " chart-line--always");
  let o = ["cove-component__inner"], s = ["cove-component__content"];
  const { visualizationType: r, title: b, showTitle: C } = t;
  (r === "Spark Line" || r === "chart") && b && C && s.push("component--has-title"), t.type === "markup-include" && (s = s.filter((i) => i !== "cove-component__content")), t.showTitle && s.push("component--has-title"), t.title && t.visualizationType !== "chart" && t.visualizationType !== "Spark Line" && s.push("component--has-title"), t.subtext && o.push("component--has-subtext"), t.biteStyle && o.push(`bite__style--${t.biteStyle}`), (u = t.general) != null && u.isCompactStyle && o.push("component--isCompactStyle"), !((p = t.visual) != null && p.border) && s.push("no-borders"), t.visualizationType === "Spark Line" && s.push("sparkline"), (c = t.visual) != null && c.borderColorTheme && s.push("component--has-borderColorTheme"), (h = t.visual) != null && h.accent && s.push("component--has-accent"), (d = t.visual) != null && d.background && s.push("component--has-background"), (m = t.visual) != null && m.hideBackgroundColor && s.push("component--hideBackgroundColor"), t.shadow && o.push("shadow"), (v = t == null ? void 0 : t.visual) != null && v.roundedBorders && o.push("bite--has-rounded-borders");
  let _ = {
    width: "100%"
  };
  const l = () => (e == null ? void 0 : e.position) === "side" && (e != null && e.singleColumn) ? "legend-container__ul--single-column" : (e == null ? void 0 : e.position) === "bottom" && (e != null && e.singleRow) ? "single-row" : e != null && e.verticalSorted && !(e != null && e.singleRow) ? "vertical-sorted" : "", y = () => {
    const i = ["legend-container__ul"];
    return i.push(l()), i;
  }, w = {
    aside: [`${e == null ? void 0 : e.position}`, `${l()}`, "cdcdataviz-sr-focusable", `${n}`],
    section: ["legend-container"],
    ul: y(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title"],
    description: ["legend-container__description"],
    div: [(e == null ? void 0 : e.position) === "bottom" && (e != null && e.singleRow) ? "shape-container single-row" : "shape-container"]
  };
  return { innerContainerClasses: o, contentClasses: s, lineDatapointClass: a, sparkLineStyles: _, legendClasses: w };
}
export {
  T as a,
  L as p,
  k as s,
  z as u
};
