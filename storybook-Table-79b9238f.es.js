import { R as e } from "./storybook-index-45401197.es.js";
const f = ({ children: t, style: a, isBold: r = !1, ariaLabel: s }) => /* @__PURE__ */ e.createElement("td", { "aria-label": s, tabIndex: 0, role: "gridcell", style: a }, r ? /* @__PURE__ */ e.createElement("strong", null, t) : t), w = (t) => {
  const { childRow: a, rowKey: r, wrapColumns: s, cellMinWidth: h = 0, isTotal: _, viewport: u, preliminaryData: n } = t, g = s ? "unset" : "nowrap", d = h + "px";
  return /* @__PURE__ */ e.createElement("tr", null, a.map((i, W) => {
    const m = (n == null ? void 0 : n.some(
      (l) => l.type === "suppression" && i === l.iconCode && l.displayGray && l.displayTable
    )) && { color: "#777772" } || {};
    return /* @__PURE__ */ e.createElement(
      f,
      {
        ariaLabel: m != null && m.color ? "suppressed data" : "",
        key: r + "__" + W,
        style: { whiteSpace: g, minWidth: d, ...m },
        isBold: _
      },
      i
    );
  }));
}, $ = ({ label: t, colSpan: a, data: r }) => /* @__PURE__ */ e.createElement("tr", { className: "row-group" }, /* @__PURE__ */ e.createElement("th", { scope: "colgroup", colSpan: a }, t), r && r.map((s, h) => /* @__PURE__ */ e.createElement("th", { key: `${t}-${h}` }, s)));
var p = /* @__PURE__ */ ((t) => (t.row_group = "row_group", t.total = "total", t.row_group_total = "row_group_total", t))(p || {});
const R = ({
  childrenMatrix: t,
  noData: a,
  tableName: r,
  caption: s,
  stickyHeader: h,
  headContent: _,
  tableOptions: u,
  wrapColumns: n,
  hasRowType: g,
  viewport: d,
  preliminaryData: i
}) => {
  const W = h ? { position: "sticky", top: 0, zIndex: 2 } : {}, m = !Array.isArray(t);
  return /* @__PURE__ */ e.createElement("table", { ...u }, /* @__PURE__ */ e.createElement("caption", { className: "visually-hidden" }, s), a ? /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", { className: "py-5 text-center" }, "No Data")) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("thead", { style: W }, _), /* @__PURE__ */ e.createElement("tbody", null, m ? Object.keys(t).flatMap((l) => {
    let y = 0;
    const c = t[l].map((E, o) => {
      y = E.length;
      const M = `${r}-${l}-row-${o}`;
      return /* @__PURE__ */ e.createElement(
        w,
        {
          preliminaryData: i,
          key: M,
          rowKey: M,
          childRow: E,
          wrapColumns: n,
          cellMinWidth: u.cellMinWidth,
          viewport: d
        }
      );
    });
    return [/* @__PURE__ */ e.createElement($, { label: l, colSpan: y, key: `${r}-${l}` }), ...c];
  }) : t.map((l, y) => {
    let c = [...l], E;
    g && (E = c.shift());
    const o = `${r}-row-${y}`;
    if (E === void 0)
      return /* @__PURE__ */ e.createElement(
        w,
        {
          preliminaryData: i,
          key: o,
          rowKey: o,
          childRow: l,
          wrapColumns: n,
          cellMinWidth: u.cellMinWidth,
          viewport: d
        }
      );
    switch (E) {
      case p.row_group:
        return /* @__PURE__ */ e.createElement($, { label: c[0], colSpan: c.length, key: o });
      case p.total:
        return /* @__PURE__ */ e.createElement(
          w,
          {
            preliminaryData: i,
            key: o,
            rowKey: o,
            childRow: c,
            isTotal: !0,
            wrapColumns: n,
            cellMinWidth: u.cellMinWidth,
            viewport: d
          }
        );
      case p.row_group_total:
        return /* @__PURE__ */ e.createElement($, { label: c[0], colSpan: 1, key: o, data: c.slice(1) });
      default:
        return /* @__PURE__ */ e.createElement(
          w,
          {
            preliminaryData: i,
            key: o,
            rowKey: o,
            childRow: c,
            wrapColumns: n,
            cellMinWidth: u.cellMinWidth,
            viewport: d
          }
        );
    }
  }))));
};
export {
  R as T
};
