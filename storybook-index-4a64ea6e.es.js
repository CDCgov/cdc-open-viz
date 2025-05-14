import { a, j as c } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { p as r } from "./storybook-index-31bf6905.es.js";
const p = (e) => {
  const { isDashboard: o, title: s, superTitle: t, classes: l = [], showTitle: i = !0, ariaLevel: d = 2 } = e, n = ["cove-component__header", "component__header", "mb-3", ...l];
  return s && i && /* @__PURE__ */ a("header", { className: n.join(" "), style: e.style, children: [
    t && /* @__PURE__ */ c("sup", { children: r(t) }),
    /* @__PURE__ */ a("h2", { children: [
      r(s),
      " ",
      o
    ] })
  ] });
};
export {
  p as T
};
