import { j as t, a as K, F as b } from "./storybook-jsx-runtime-ea6e0d87.es.js";
const k = ({ children: e, style: i, isBold: r = !1, ariaLabel: a }) => /* @__PURE__ */ t("td", { "aria-label": a, tabIndex: 0, role: "gridcell", style: i, children: r ? /* @__PURE__ */ t("strong", { children: e }) : e }), g = (e) => {
  const {
    childRow: i,
    rowKey: r,
    wrapColumns: a,
    cellMinWidth: _ = 0,
    isTotal: M,
    viewport: h,
    preliminaryData: n,
    rightAlignedCols: W
  } = e, u = a ? "unset" : "nowrap", w = _ + "px";
  return /* @__PURE__ */ t("tr", { children: i.map((d, f) => {
    const p = (n == null ? void 0 : n.some(
      (c) => c.type === "suppression" && d === c.iconCode && c.displayGray && c.displayTable
    )) && { color: "#777772" } || {}, l = W && W[f] ? "right" : "";
    return /* @__PURE__ */ t(
      k,
      {
        ariaLabel: p != null && p.color ? "suppressed data" : "",
        style: { whiteSpace: u, minWidth: w, textAlign: l, textOverflow: "ellipsis", ...p },
        isBold: M,
        children: d
      },
      r + "__" + f
    );
  }) });
}, x = ({ label: e, colSpan: i, data: r }) => /* @__PURE__ */ K("tr", { className: "row-group", children: [
  /* @__PURE__ */ t("th", { scope: "colgroup", colSpan: i, children: e }),
  r && r.map((a, _) => /* @__PURE__ */ t("th", { children: a }, `${e}-${_}`))
] });
var $ = /* @__PURE__ */ ((e) => (e.row_group = "row_group", e.total = "total", e.row_group_total = "row_group_total", e))($ || {});
const T = ({
  childrenMatrix: e,
  noData: i,
  tableName: r,
  caption: a,
  stickyHeader: _,
  headContent: M,
  tableOptions: h,
  wrapColumns: n,
  hasRowType: W,
  viewport: u,
  preliminaryData: w,
  rightAlignedCols: d
}) => {
  const f = _ ? { position: "sticky", top: 0, zIndex: 2 } : {}, p = !Array.isArray(e);
  return /* @__PURE__ */ K("table", { ...h, children: [
    /* @__PURE__ */ t("caption", { className: "visually-hidden", children: a }),
    i ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { className: "py-5 text-center", children: "No Data" }) }) : /* @__PURE__ */ K(b, { children: [
      /* @__PURE__ */ t("thead", { style: f, children: M }),
      /* @__PURE__ */ t("tbody", { children: p ? Array.from(e.keys()).flatMap((l) => {
        let c = 0;
        const s = e.get(l).map((y, o) => {
          c = y.length;
          const S = `${r}-${l}-row-${o}`;
          return /* @__PURE__ */ t(
            g,
            {
              preliminaryData: w,
              rowKey: S,
              childRow: y,
              wrapColumns: n,
              cellMinWidth: h.cellMinWidth,
              viewport: u,
              rightAlignedCols: d
            },
            S
          );
        });
        return [/* @__PURE__ */ t(x, { label: l, colSpan: c }, `${r}-${l}`), ...s];
      }) : e.map((l, c) => {
        let s = [...l], y;
        W && (y = s.shift());
        const o = `${r}-row-${c}`;
        if (y === void 0)
          return /* @__PURE__ */ t(
            g,
            {
              preliminaryData: w,
              rowKey: o,
              childRow: l,
              wrapColumns: n,
              cellMinWidth: h.cellMinWidth,
              viewport: u,
              rightAlignedCols: d
            },
            o
          );
        switch (y) {
          case $.row_group:
            return /* @__PURE__ */ t(x, { label: s[0], colSpan: s.length }, o);
          case $.total:
            return /* @__PURE__ */ t(
              g,
              {
                preliminaryData: w,
                rowKey: o,
                childRow: s,
                isTotal: !0,
                wrapColumns: n,
                cellMinWidth: h.cellMinWidth,
                viewport: u,
                rightAlignedCols: d
              },
              o
            );
          case $.row_group_total:
            return /* @__PURE__ */ t(x, { label: s[0], colSpan: 1, data: s.slice(1) }, o);
          default:
            return /* @__PURE__ */ t(
              g,
              {
                preliminaryData: w,
                rowKey: o,
                childRow: s,
                wrapColumns: n,
                cellMinWidth: h.cellMinWidth,
                viewport: u,
                rightAlignedCols: d
              },
              o
            );
        }
      }) })
    ] })
  ] });
};
export {
  T
};
