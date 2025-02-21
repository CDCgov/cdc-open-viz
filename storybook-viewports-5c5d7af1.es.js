import { R as e } from "./storybook-index-45401197.es.js";
class i extends e.Component {
  constructor(n) {
    super(n), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(n) {
    return { hasError: !0 };
  }
  componentDidCatch(n, o) {
    console.warn(n, o);
  }
  render() {
    return this.state.hasError ? this.props.component ? /* @__PURE__ */ e.createElement("h1", null, "Something went wrong with component ", this.props.component, ".") : /* @__PURE__ */ e.createElement("h1", null, "Something went wrong.") : this.props.children;
  }
}
function l({ viewport: t = "lg" }) {
  return /* @__PURE__ */ e.createElement("section", { className: "loading", "aria-live": "assertive" }, /* @__PURE__ */ e.createElement("span", { className: "sr-only", style: { display: "none" } }, "Content is loading."), /* @__PURE__ */ e.createElement("div", { className: `la-ball-beat la-dark ${t}` }, /* @__PURE__ */ e.createElement("div", null), /* @__PURE__ */ e.createElement("div", null), /* @__PURE__ */ e.createElement("div", null)));
}
const r = ["xxs", "xs", "sm", "md", "lg"], s = (t, n) => r.indexOf(n) < r.indexOf(t), c = (t) => s("sm", t), m = (t) => s("sm", t);
export {
  i as E,
  l as L,
  c as a,
  m as b,
  s as i
};
