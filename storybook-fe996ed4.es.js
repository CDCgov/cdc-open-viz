import { R as e } from "./storybook-e61d95ab.es.js";
const $ = ({ children: t }) => /* @__PURE__ */ e.createElement("td", { tabIndex: 0, role: "gridcell" }, t), m = ({ childRow: t, rowKey: r }) => /* @__PURE__ */ e.createElement("tr", null, t.map((o, a) => /* @__PURE__ */ e.createElement($, { key: r + "__" + a }, o))), i = ({ label: t, colSpan: r }) => /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", { scope: "colgroup", colSpan: r }, t)), R = ({ childrenMatrix: t, tableName: r, caption: o, stickyHeader: a, headContent: E, tableOptions: p }) => {
  const u = a ? { position: "sticky", top: 0, zIndex: 999 } : {}, d = !Array.isArray(t);
  return /* @__PURE__ */ e.createElement("table", { ...p }, /* @__PURE__ */ e.createElement("caption", { className: "visually-hidden" }, o), /* @__PURE__ */ e.createElement("thead", { style: u }, E), /* @__PURE__ */ e.createElement("tbody", null, d ? Object.keys(t).flatMap((n) => {
    let l = 0;
    const c = t[n].map((s, w) => {
      l = s.length;
      const y = `${r}-${n}-row-${w}`;
      return /* @__PURE__ */ e.createElement(m, { key: y, rowKey: y, childRow: s });
    });
    return [/* @__PURE__ */ e.createElement(i, { label: n, colSpan: l, key: `${r}-${n}` }), ...c];
  }) : t.map((n, l) => {
    const c = `${r}-row-${l}`;
    return /* @__PURE__ */ e.createElement(m, { key: c, rowKey: c, childRow: n });
  })));
};
export {
  R as T
};
