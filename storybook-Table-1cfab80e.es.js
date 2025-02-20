import { j as t, a as K, F as k } from "./storybook-jsx-runtime-36872362.es.js";
const R = ({ children: e, style: i, isBold: r = !1, ariaLabel: d }) => /* @__PURE__ */ t("td", { "aria-label": d, tabIndex: 0, role: "gridcell", style: i, children: r ? /* @__PURE__ */ t("strong", { children: e }) : e }), $ = (e) => {
  const {
    childRow: i,
    rowKey: r,
    wrapColumns: d,
    cellMinWidth: _ = 0,
    isTotal: M,
    viewport: h,
    preliminaryData: s,
    rightAlignedCols: W
  } = e, u = d ? "unset" : "nowrap", w = _ + "px";
  return /* @__PURE__ */ t("tr", { children: i.map((a, g) => {
    const p = (s == null ? void 0 : s.some(
      (c) => c.type === "suppression" && a === c.iconCode && c.displayGray && c.displayTable
    )) && { color: "#777772" } || {}, l = W && W[g] ? "right" : "";
    return /* @__PURE__ */ t(
      R,
      {
        ariaLabel: p != null && p.color ? "suppressed data" : "",
        style: { whiteSpace: u, minWidth: w, textAlign: l, ...p },
        isBold: M,
        children: a
      },
      r + "__" + g
    );
  }) });
}, x = ({ label: e, colSpan: i, data: r }) => /* @__PURE__ */ K("tr", { className: "row-group", children: [
  /* @__PURE__ */ t("th", { scope: "colgroup", colSpan: i, children: e }),
  r && r.map((d, _) => /* @__PURE__ */ t("th", { children: d }, `${e}-${_}`))
] });
var f = /* @__PURE__ */ ((e) => (e.row_group = "row_group", e.total = "total", e.row_group_total = "row_group_total", e))(f || {});
const b = ({
  childrenMatrix: e,
  noData: i,
  tableName: r,
  caption: d,
  stickyHeader: _,
  headContent: M,
  tableOptions: h,
  wrapColumns: s,
  hasRowType: W,
  viewport: u,
  preliminaryData: w,
  rightAlignedCols: a
}) => {
  const g = _ ? { position: "sticky", top: 0, zIndex: 2 } : {}, p = !Array.isArray(e);
  return /* @__PURE__ */ K("table", { ...h, children: [
    /* @__PURE__ */ t("caption", { className: "visually-hidden", children: d }),
    i ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { className: "py-5 text-center", children: "No Data" }) }) : /* @__PURE__ */ K(k, { children: [
      /* @__PURE__ */ t("thead", { style: g, children: M }),
      /* @__PURE__ */ t("tbody", { children: p ? Array.from(e.keys()).flatMap((l) => {
        let c = 0;
        const n = e.get(l).map((y, o) => {
          c = y.length;
          const S = `${r}-${l}-row-${o}`;
          return /* @__PURE__ */ t(
            $,
            {
              preliminaryData: w,
              rowKey: S,
              childRow: y,
              wrapColumns: s,
              cellMinWidth: h.cellMinWidth,
              viewport: u,
              rightAlignedCols: a
            },
            S
          );
        });
        return [/* @__PURE__ */ t(x, { label: l, colSpan: c }, `${r}-${l}`), ...n];
      }) : e.map((l, c) => {
        let n = [...l], y;
        W && (y = n.shift());
        const o = `${r}-row-${c}`;
        if (y === void 0)
          return /* @__PURE__ */ t(
            $,
            {
              preliminaryData: w,
              rowKey: o,
              childRow: l,
              wrapColumns: s,
              cellMinWidth: h.cellMinWidth,
              viewport: u,
              rightAlignedCols: a
            },
            o
          );
        switch (y) {
          case f.row_group:
            return /* @__PURE__ */ t(x, { label: n[0], colSpan: n.length }, o);
          case f.total:
            return /* @__PURE__ */ t(
              $,
              {
                preliminaryData: w,
                rowKey: o,
                childRow: n,
                isTotal: !0,
                wrapColumns: s,
                cellMinWidth: h.cellMinWidth,
                viewport: u,
                rightAlignedCols: a
              },
              o
            );
          case f.row_group_total:
            return /* @__PURE__ */ t(x, { label: n[0], colSpan: 1, data: n.slice(1) }, o);
          default:
            return /* @__PURE__ */ t(
              $,
              {
                preliminaryData: w,
                rowKey: o,
                childRow: n,
                wrapColumns: s,
                cellMinWidth: h.cellMinWidth,
                viewport: u,
                rightAlignedCols: a
              },
              o
            );
        }
      }) })
    ] })
  ] });
};
export {
  b as T
};
