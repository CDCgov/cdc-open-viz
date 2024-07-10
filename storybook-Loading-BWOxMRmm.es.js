import { R as e } from "./storybook-index-9_ikpx_Z.es.js";
class o extends e.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, n) {
    console.warn(t, n);
  }
  render() {
    return this.state.hasError ? this.props.component ? /* @__PURE__ */ e.createElement("h1", null, "Something went wrong with component ", this.props.component, ".") : /* @__PURE__ */ e.createElement("h1", null, "Something went wrong.") : this.props.children;
  }
}
function s({ viewport: r = "lg" }) {
  return /* @__PURE__ */ e.createElement("section", { className: "loading", "aria-live": "assertive" }, /* @__PURE__ */ e.createElement("span", { className: "sr-only", style: { display: "none" } }, "Content is loading."), /* @__PURE__ */ e.createElement("div", { className: `la-ball-beat la-dark ${r}` }, /* @__PURE__ */ e.createElement("div", null), /* @__PURE__ */ e.createElement("div", null), /* @__PURE__ */ e.createElement("div", null)));
}
export {
  o as E,
  s as L
};
