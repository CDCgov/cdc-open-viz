const M = ({ children: e, style: n, isBold: t = !1, ariaLabel: s }) => /* @__PURE__ */ React.createElement("td", { "aria-label": s, tabIndex: 0, role: "gridcell", style: n }, t ? /* @__PURE__ */ React.createElement("strong", null, e) : e), p = (e) => {
  const {
    childRow: n,
    rowKey: t,
    wrapColumns: s,
    cellMinWidth: y = 0,
    isTotal: W,
    viewport: i,
    preliminaryData: o,
    rightAlignedCols: h
  } = e, R = s ? "unset" : "nowrap", d = y + "px";
  return /* @__PURE__ */ React.createElement("tr", null, n.map((u, w) => {
    const m = (o == null ? void 0 : o.some(
      (r) => r.type === "suppression" && u === r.iconCode && r.displayGray && r.displayTable
    )) && { color: "#777772" } || {}, l = h && h[w] ? "right" : "";
    return /* @__PURE__ */ React.createElement(
      M,
      {
        ariaLabel: m != null && m.color ? "suppressed data" : "",
        key: t + "__" + w,
        style: { whiteSpace: R, minWidth: d, textAlign: l, ...m },
        isBold: W
      },
      u
    );
  }));
}, g = ({ label: e, colSpan: n, data: t }) => /* @__PURE__ */ React.createElement("tr", { className: "row-group" }, /* @__PURE__ */ React.createElement("th", { scope: "colgroup", colSpan: n }, e), t && t.map((s, y) => /* @__PURE__ */ React.createElement("th", { key: `${e}-${y}` }, s)));
var _ = /* @__PURE__ */ ((e) => (e.row_group = "row_group", e.total = "total", e.row_group_total = "row_group_total", e))(_ || {});
const f = ({
  childrenMatrix: e,
  noData: n,
  tableName: t,
  caption: s,
  stickyHeader: y,
  headContent: W,
  tableOptions: i,
  wrapColumns: o,
  hasRowType: h,
  viewport: R,
  preliminaryData: d,
  rightAlignedCols: u
}) => {
  const w = y ? { position: "sticky", top: 0, zIndex: 2 } : {}, m = !Array.isArray(e);
  return /* @__PURE__ */ React.createElement("table", { ...i }, /* @__PURE__ */ React.createElement("caption", { className: "visually-hidden" }, s), n ? /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", { className: "py-5 text-center" }, "No Data")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("thead", { style: w }, W), /* @__PURE__ */ React.createElement("tbody", null, m ? Array.from(e.keys()).flatMap((l) => {
    let r = 0;
    const a = e.get(l).map((E, c) => {
      r = E.length;
      const $ = `${t}-${l}-row-${c}`;
      return /* @__PURE__ */ React.createElement(
        p,
        {
          preliminaryData: d,
          key: $,
          rowKey: $,
          childRow: E,
          wrapColumns: o,
          cellMinWidth: i.cellMinWidth,
          viewport: R,
          rightAlignedCols: u
        }
      );
    });
    return [/* @__PURE__ */ React.createElement(g, { label: l, colSpan: r, key: `${t}-${l}` }), ...a];
  }) : e.map((l, r) => {
    let a = [...l], E;
    h && (E = a.shift());
    const c = `${t}-row-${r}`;
    if (E === void 0)
      return /* @__PURE__ */ React.createElement(
        p,
        {
          preliminaryData: d,
          key: c,
          rowKey: c,
          childRow: l,
          wrapColumns: o,
          cellMinWidth: i.cellMinWidth,
          viewport: R,
          rightAlignedCols: u
        }
      );
    switch (E) {
      case _.row_group:
        return /* @__PURE__ */ React.createElement(g, { label: a[0], colSpan: a.length, key: c });
      case _.total:
        return /* @__PURE__ */ React.createElement(
          p,
          {
            preliminaryData: d,
            key: c,
            rowKey: c,
            childRow: a,
            isTotal: !0,
            wrapColumns: o,
            cellMinWidth: i.cellMinWidth,
            viewport: R,
            rightAlignedCols: u
          }
        );
      case _.row_group_total:
        return /* @__PURE__ */ React.createElement(g, { label: a[0], colSpan: 1, key: c, data: a.slice(1) });
      default:
        return /* @__PURE__ */ React.createElement(
          p,
          {
            preliminaryData: d,
            key: c,
            rowKey: c,
            childRow: a,
            wrapColumns: o,
            cellMinWidth: i.cellMinWidth,
            viewport: R,
            rightAlignedCols: u
          }
        );
    }
  }))));
};
export {
  f as T
};
