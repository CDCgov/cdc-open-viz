import { R as e } from "./storybook-index-45401197.es.js";
const k = ({ children: t, style: r, isBold: o = !1 }) => /* @__PURE__ */ e.createElement("td", { tabIndex: 0, role: "gridcell", style: r }, o ? /* @__PURE__ */ e.createElement("strong", null, t) : t), E = ({ childRow: t, rowKey: r, wrapColumns: o, cellMinWidth: m = 0, isTotal: h, fontSize: a, viewport: s }) => {
  const w = o ? "unset" : "nowrap", i = m + "px", u = { small: 16, medium: 18, large: 20 }, _ = ["sm", "xs", "xxs"].includes(s) ? "11px" : `${u[a]}px`;
  return /* @__PURE__ */ e.createElement("tr", null, t.map(($, n) => /* @__PURE__ */ e.createElement(k, { key: r + "__" + n, style: { whiteSpace: w, minWidth: i, fontSize: _ }, isBold: h }, $)));
}, g = ({ label: t, colSpan: r, data: o }) => /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", { scope: "colgroup", colSpan: r }, t), o && o.map((m, h) => /* @__PURE__ */ e.createElement("th", { key: `${t}-${h}` }, m)));
var p = /* @__PURE__ */ ((t) => (t.row_group = "row_group", t.total = "total", t.row_group_total = "row_group_total", t))(p || {});
const M = ({ childrenMatrix: t, tableName: r, caption: o, stickyHeader: m, headContent: h, tableOptions: a, wrapColumns: s, hasRowType: w, fontSize: i, viewport: u }) => {
  const _ = m ? { position: "sticky", top: 0, zIndex: 2 } : {}, $ = !Array.isArray(t);
  return /* @__PURE__ */ e.createElement("table", { ...a }, /* @__PURE__ */ e.createElement("caption", { className: "visually-hidden" }, o), /* @__PURE__ */ e.createElement("thead", { style: _ }, h), /* @__PURE__ */ e.createElement("tbody", null, $ ? Object.keys(t).flatMap((n) => {
    let y = 0;
    const c = t[n].map((d, l) => {
      y = d.length;
      const W = `${r}-${n}-row-${l}`;
      return /* @__PURE__ */ e.createElement(E, { key: W, rowKey: W, childRow: d, wrapColumns: s, cellMinWidth: a.cellMinWidth, fontSize: i, viewport: u });
    });
    return [/* @__PURE__ */ e.createElement(g, { label: n, colSpan: y, key: `${r}-${n}` }), ...c];
  }) : t.map((n, y) => {
    let c = [...n], d;
    w && (d = c.shift());
    const l = `${r}-row-${y}`;
    if (d === void 0)
      return /* @__PURE__ */ e.createElement(E, { key: l, rowKey: l, childRow: n, wrapColumns: s, cellMinWidth: a.cellMinWidth, fontSize: i, viewport: u });
    switch (d) {
      case p.row_group:
        return /* @__PURE__ */ e.createElement(g, { label: c[0], colSpan: c.length, key: l });
      case p.total:
        return /* @__PURE__ */ e.createElement(E, { key: l, rowKey: l, childRow: c, isTotal: !0, wrapColumns: s, cellMinWidth: a.cellMinWidth, fontSize: i, viewport: u });
      case p.row_group_total:
        return /* @__PURE__ */ e.createElement(g, { label: c[0], colSpan: 1, key: l, data: c.slice(1) });
      default:
        return /* @__PURE__ */ e.createElement(E, { key: l, rowKey: l, childRow: c, wrapColumns: s, cellMinWidth: a.cellMinWidth, fontSize: i, viewport: u });
    }
  })));
};
export {
  M as T
};
