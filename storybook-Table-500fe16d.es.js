import { R as e } from "./storybook-index-45401197.es.js";
const f = ({ children: t, style: a, isBold: r = !1, ariaLabel: s }) => /* @__PURE__ */ e.createElement("td", { "aria-label": s, tabIndex: 0, role: "gridcell", style: a }, r ? /* @__PURE__ */ e.createElement("strong", null, t) : t), g = (t) => {
  const { childRow: a, rowKey: r, wrapColumns: s, cellMinWidth: p = 0, isTotal: W, fontSize: i, viewport: u, preliminaryData: y } = t, d = s ? "unset" : "nowrap", m = p + "px", E = { small: 16, medium: 18, large: 20 }, $ = ["xs", "xxs"].includes(u) ? "12px" : `${E[i]}px`;
  return /* @__PURE__ */ e.createElement("tr", null, a.map((w, c) => {
    const n = (y == null ? void 0 : y.some(
      (l) => l.type === "suppression" && w === l.iconCode && l.displayGray && l.displayTable
    )) && { color: "#777772" } || {};
    return /* @__PURE__ */ e.createElement(
      f,
      {
        ariaLabel: n != null && n.color ? "suppressed data" : "",
        key: r + "__" + c,
        style: { whiteSpace: d, minWidth: m, fontSize: $, ...n },
        isBold: W
      },
      w
    );
  }));
}, x = ({ label: t, colSpan: a, data: r }) => /* @__PURE__ */ e.createElement("tr", { className: "row-group" }, /* @__PURE__ */ e.createElement("th", { scope: "colgroup", colSpan: a }, t), r && r.map((s, p) => /* @__PURE__ */ e.createElement("th", { key: `${t}-${p}` }, s)));
var _ = /* @__PURE__ */ ((t) => (t.row_group = "row_group", t.total = "total", t.row_group_total = "row_group_total", t))(_ || {});
const R = ({
  childrenMatrix: t,
  noData: a,
  tableName: r,
  caption: s,
  stickyHeader: p,
  headContent: W,
  tableOptions: i,
  wrapColumns: u,
  hasRowType: y,
  fontSize: d,
  viewport: m,
  preliminaryData: E
}) => {
  const $ = p ? { position: "sticky", top: 0, zIndex: 2 } : {}, w = !Array.isArray(t);
  return /* @__PURE__ */ e.createElement("table", { ...i }, /* @__PURE__ */ e.createElement("caption", { className: "visually-hidden" }, s), a ? /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", { className: "py-5 text-center" }, "No Data")) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("thead", { style: $ }, W), /* @__PURE__ */ e.createElement("tbody", null, w ? Object.keys(t).flatMap((c) => {
    let n = 0;
    const l = t[c].map((h, o) => {
      n = h.length;
      const M = `${r}-${c}-row-${o}`;
      return /* @__PURE__ */ e.createElement(
        g,
        {
          preliminaryData: E,
          key: M,
          rowKey: M,
          childRow: h,
          wrapColumns: u,
          cellMinWidth: i.cellMinWidth,
          fontSize: d,
          viewport: m
        }
      );
    });
    return [/* @__PURE__ */ e.createElement(x, { label: c, colSpan: n, key: `${r}-${c}` }), ...l];
  }) : t.map((c, n) => {
    let l = [...c], h;
    y && (h = l.shift());
    const o = `${r}-row-${n}`;
    if (h === void 0)
      return /* @__PURE__ */ e.createElement(
        g,
        {
          preliminaryData: E,
          key: o,
          rowKey: o,
          childRow: c,
          wrapColumns: u,
          cellMinWidth: i.cellMinWidth,
          fontSize: d,
          viewport: m
        }
      );
    switch (h) {
      case _.row_group:
        return /* @__PURE__ */ e.createElement(x, { label: l[0], colSpan: l.length, key: o });
      case _.total:
        return /* @__PURE__ */ e.createElement(
          g,
          {
            preliminaryData: E,
            key: o,
            rowKey: o,
            childRow: l,
            isTotal: !0,
            wrapColumns: u,
            cellMinWidth: i.cellMinWidth,
            fontSize: d,
            viewport: m
          }
        );
      case _.row_group_total:
        return /* @__PURE__ */ e.createElement(x, { label: l[0], colSpan: 1, key: o, data: l.slice(1) });
      default:
        return /* @__PURE__ */ e.createElement(
          g,
          {
            preliminaryData: E,
            key: o,
            rowKey: o,
            childRow: l,
            wrapColumns: u,
            cellMinWidth: i.cellMinWidth,
            fontSize: d,
            viewport: m
          }
        );
    }
  }))));
};
export {
  R as T
};
