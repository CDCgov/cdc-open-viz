import { R as t } from "./storybook-e61d95ab.es.js";
class s extends t.Component {
  constructor(r) {
    super(r), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0 };
  }
  componentDidCatch(r, e) {
    console.warn(r, e);
  }
  render() {
    return this.state.hasError ? this.props.component ? /* @__PURE__ */ t.createElement("h1", null, "Something went wrong with component ", this.props.component, ".") : /* @__PURE__ */ t.createElement("h1", null, "Something went wrong.") : this.props.children;
  }
}
export {
  s as E
};
