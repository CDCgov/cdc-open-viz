import { j as o, a as t } from "./storybook-jsx-runtime-ea6e0d87.es.js";
const l = ({ footnotes: e }) => /* @__PURE__ */ o("footer", { className: "col-12 m-3 mt-1 mb-0", children: /* @__PURE__ */ o("ul", { className: "cove-footnotes", children: e.map((s, m) => /* @__PURE__ */ t("li", { className: "mb-1", children: [
  s.symbol && /* @__PURE__ */ o("span", { className: "me-1", children: s.symbol }),
  s.text
] }, `${s.symbol || "footnote-"}${m}`)) }) });
export {
  l as F
};
