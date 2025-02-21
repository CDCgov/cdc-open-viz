import { a as o, F as d, j as i } from "./storybook-jsx-runtime-36872362.es.js";
import { T as t } from "./storybook-Text-c19e6344.es.js";
const c = ({
  blurRadius: l = 1,
  stroke: r = "white",
  strokeWidth: s = 8,
  strokeMiterLimit: a = 2,
  disableStroke: f = !1,
  disableBlur: n = !1,
  ...e
}) => /* @__PURE__ */ o(d, { children: [
  /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("filter", { id: "blur", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ i("feGaussianBlur", { in: "SourceGraphic", stdDeviation: l }) }) }),
  !f && /* @__PURE__ */ i(
    t,
    {
      ...e,
      filter: n ? void 0 : "url(#blur)",
      fill: r,
      stroke: r,
      strokeWidth: s,
      strokeMiterlimit: a
    }
  ),
  /* @__PURE__ */ i(t, { ...e })
] });
export {
  c as B
};
