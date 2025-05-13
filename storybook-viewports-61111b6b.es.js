import { a as o, j as e } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { R as a } from "./storybook-index-f2fed736.es.js";
class d extends a.Component {
  constructor(s) {
    super(s), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(s) {
    return { hasError: !0 };
  }
  componentDidCatch(s, i) {
    console.warn(s, i);
  }
  render() {
    return this.state.hasError ? this.props.component ? /* @__PURE__ */ o("h1", { children: [
      "Something went wrong with component ",
      this.props.component,
      "."
    ] }) : /* @__PURE__ */ e("h1", { children: "Something went wrong." }) : this.props.children;
  }
}
function p({ viewport: r = "lg" }) {
  return /* @__PURE__ */ o("section", { className: "loading", "aria-live": "assertive", children: [
    /* @__PURE__ */ e("span", { className: "sr-only", style: { display: "none" }, children: "Content is loading." }),
    /* @__PURE__ */ o("div", { className: `la-ball-beat la-dark ${r}`, children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", {})
    ] })
  ] });
}
const n = ["xxs", "xs", "sm", "md", "lg"], t = (r, s) => n.indexOf(s) < n.indexOf(r), h = (r) => t("sm", r), m = (r) => t("sm", r), g = (r) => t("md", r), w = (r) => t("sm", r);
export {
  d as E,
  p as L,
  h as a,
  m as b,
  w as c,
  g as d,
  t as i
};
