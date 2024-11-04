import { R as e } from "./storybook-index-45401197.es.js";
import { T as l } from "./storybook-Text-c19e6344.es.js";
const o = ({
  blurRadius: i = 1,
  stroke: t = "white",
  strokeWidth: a = 8,
  strokeMiterLimit: n = 2,
  disableStroke: m = !1,
  disableBlur: c = !1,
  ...r
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("defs", null, /* @__PURE__ */ e.createElement("filter", { id: "blur", x: "-50%", y: "-50%", width: "200%", height: "200%" }, /* @__PURE__ */ e.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: i }))), !m && /* @__PURE__ */ e.createElement(
  l,
  {
    ...r,
    filter: c ? void 0 : "url(#blur)",
    fill: t,
    stroke: t,
    strokeWidth: a,
    strokeMiterlimit: n
  }
), /* @__PURE__ */ e.createElement(l, { ...r }));
export {
  o as B
};
