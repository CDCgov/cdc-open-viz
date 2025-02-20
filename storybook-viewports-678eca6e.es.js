import { a as n, j as e } from "./storybook-jsx-runtime-36872362.es.js";
import { R as a } from "./storybook-index-45401197.es.js";
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
    return this.state.hasError ? this.props.component ? /* @__PURE__ */ n("h1", { children: [
      "Something went wrong with component ",
      this.props.component,
      "."
    ] }) : /* @__PURE__ */ e("h1", { children: "Something went wrong." }) : this.props.children;
  }
}
function h({ viewport: r = "lg" }) {
  return /* @__PURE__ */ n("section", { className: "loading", "aria-live": "assertive", children: [
    /* @__PURE__ */ e("span", { className: "sr-only", style: { display: "none" }, children: "Content is loading." }),
    /* @__PURE__ */ n("div", { className: `la-ball-beat la-dark ${r}`, children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", {})
    ] })
  ] });
}
const t = ["xxs", "xs", "sm", "md", "lg"], o = (r, s) => t.indexOf(s) < t.indexOf(r), p = (r) => o("sm", r), m = (r) => o("sm", r);
export {
  d as E,
  h as L,
  p as a,
  m as b,
  o as i
};
