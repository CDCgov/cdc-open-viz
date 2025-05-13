import { a as l, j as h } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { p as o } from "./storybook-index-31bf6905.es.js";
const u = (e) => {
  const { isDashboard: i, title: s, superTitle: t, classes: n = [], showTitle: c = !0, ariaLevel: m = 2, theme: a = "theme-blue" } = e, r = ["cove-component__header", "component__header", "mb-3", ...n];
  return a && r.push(a), s && c && /* @__PURE__ */ l("header", { className: r.join(" "), style: e.style, children: [
    t && /* @__PURE__ */ h("sup", { children: o(t) }),
    /* @__PURE__ */ l("h2", { children: [
      o(s),
      " ",
      i
    ] })
  ] });
};
export {
  u as T
};
