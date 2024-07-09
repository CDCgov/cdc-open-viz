const g = ({ children: e, style: l, isBold: a = !1 }) => /* @__PURE__ */ React.createElement("td", { tabIndex: 0, role: "gridcell", style: l }, a ? /* @__PURE__ */ React.createElement("strong", null, e) : e), h = ({ childRow: e, rowKey: l, wrapColumns: a, cellMinWidth: d = 0, isTotal: R, fontSize: n, viewport: o }) => {
  const E = a ? "unset" : "nowrap", s = d + "px", i = { small: 16, medium: 18, large: 20 }, p = ["sm", "xs", "xxs"].includes(o) ? "11px" : `${i[n]}px`;
  return /* @__PURE__ */ React.createElement("tr", null, e.map((w, c) => /* @__PURE__ */ React.createElement(g, { key: l + "__" + c, style: { whiteSpace: E, minWidth: s, fontSize: p }, isBold: R }, w)));
}, _ = ({ label: e, colSpan: l, data: a }) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { scope: "colgroup", colSpan: l }, e), a && a.map((d, R) => /* @__PURE__ */ React.createElement("th", { key: `${e}-${R}` }, d)));
var y = /* @__PURE__ */ ((e) => (e.row_group = "row_group", e.total = "total", e.row_group_total = "row_group_total", e))(y || {});
const W = ({ childrenMatrix: e, tableName: l, caption: a, stickyHeader: d, headContent: R, tableOptions: n, wrapColumns: o, hasRowType: E, fontSize: s, viewport: i }) => {
  const p = d ? { position: "sticky", top: 0, zIndex: 2 } : {}, w = !Array.isArray(e);
  return /* @__PURE__ */ React.createElement("table", { ...n }, /* @__PURE__ */ React.createElement("caption", { className: "visually-hidden" }, a), /* @__PURE__ */ React.createElement("thead", { style: p }, R), /* @__PURE__ */ React.createElement("tbody", null, w ? Object.keys(e).flatMap((c) => {
    let m = 0;
    const r = e[c].map((u, t) => {
      m = u.length;
      const $ = `${l}-${c}-row-${t}`;
      return /* @__PURE__ */ React.createElement(h, { key: $, rowKey: $, childRow: u, wrapColumns: o, cellMinWidth: n.cellMinWidth, fontSize: s, viewport: i });
    });
    return [/* @__PURE__ */ React.createElement(_, { label: c, colSpan: m, key: `${l}-${c}` }), ...r];
  }) : e.map((c, m) => {
    let r = [...c], u;
    E && (u = r.shift());
    const t = `${l}-row-${m}`;
    if (u === void 0)
      return /* @__PURE__ */ React.createElement(h, { key: t, rowKey: t, childRow: c, wrapColumns: o, cellMinWidth: n.cellMinWidth, fontSize: s, viewport: i });
    switch (u) {
      case y.row_group:
        return /* @__PURE__ */ React.createElement(_, { label: r[0], colSpan: r.length, key: t });
      case y.total:
        return /* @__PURE__ */ React.createElement(h, { key: t, rowKey: t, childRow: r, isTotal: !0, wrapColumns: o, cellMinWidth: n.cellMinWidth, fontSize: s, viewport: i });
      case y.row_group_total:
        return /* @__PURE__ */ React.createElement(_, { label: r[0], colSpan: 1, key: t, data: r.slice(1) });
      default:
        return /* @__PURE__ */ React.createElement(h, { key: t, rowKey: t, childRow: r, wrapColumns: o, cellMinWidth: n.cellMinWidth, fontSize: s, viewport: i });
    }
  })));
};
export {
  W as T
};
