import { R as e } from "./storybook-e61d95ab.es.js";
const $ = ({ children: t, style: r, isBold: c = !1 }) => /* @__PURE__ */ e.createElement("td", { tabIndex: 0, role: "gridcell", style: r }, c ? /* @__PURE__ */ e.createElement("strong", null, t) : t), m = ({ childRow: t, rowKey: r, wrapColumns: c, cellMinWidth: u = 0, isTotal: d }) => {
  const o = c ? "unset" : "nowrap", i = u + "px";
  return /* @__PURE__ */ e.createElement("tr", null, t.map((E, p) => /* @__PURE__ */ e.createElement($, { key: r + "__" + p, style: { whiteSpace: o, minWidth: i }, isBold: d }, E)));
}, w = ({ label: t, colSpan: r, data: c }) => /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", { scope: "colgroup", colSpan: r }, t), c && c.map((u, d) => /* @__PURE__ */ e.createElement("th", { key: `${t}-${d}` }, u)));
var y = /* @__PURE__ */ ((t) => (t.row_group = "row_group", t.total = "total", t.row_group_total = "row_group_total", t))(y || {});
const f = ({ childrenMatrix: t, tableName: r, caption: c, stickyHeader: u, headContent: d, tableOptions: o, wrapColumns: i, hasRowType: E }) => {
  const p = u ? { position: "sticky", top: 0, zIndex: 2 } : {}, W = !Array.isArray(t);
  return /* @__PURE__ */ e.createElement("table", { ...o }, /* @__PURE__ */ e.createElement("caption", { className: "visually-hidden" }, c), /* @__PURE__ */ e.createElement("thead", { style: p }, d), /* @__PURE__ */ e.createElement("tbody", null, W ? Object.keys(t).flatMap((a) => {
    let h = 0;
    const n = t[a].map((s, l) => {
      h = s.length;
      const _ = `${r}-${a}-row-${l}`;
      return /* @__PURE__ */ e.createElement(m, { key: _, rowKey: _, childRow: s, wrapColumns: i, cellMinWidth: o.cellMinWidth });
    });
    return [/* @__PURE__ */ e.createElement(w, { label: a, colSpan: h, key: `${r}-${a}` }), ...n];
  }) : t.map((a, h) => {
    let n = [...a], s;
    E && (s = n.shift());
    const l = `${r}-row-${h}`;
    if (s === void 0)
      return /* @__PURE__ */ e.createElement(m, { key: l, rowKey: l, childRow: a, wrapColumns: i, cellMinWidth: o.cellMinWidth });
    switch (s) {
      case y.row_group:
        return /* @__PURE__ */ e.createElement(w, { label: n[0], colSpan: n.length, key: l });
      case y.total:
        return /* @__PURE__ */ e.createElement(m, { key: l, rowKey: l, childRow: n, isTotal: !0, wrapColumns: i, cellMinWidth: o.cellMinWidth });
      case y.row_group_total:
        return /* @__PURE__ */ e.createElement(w, { label: n[0], colSpan: 1, key: l, data: n.slice(1) });
      default:
        return /* @__PURE__ */ e.createElement(m, { key: l, rowKey: l, childRow: n, wrapColumns: i, cellMinWidth: o.cellMinWidth });
    }
  })));
};
export {
  f as T
};
