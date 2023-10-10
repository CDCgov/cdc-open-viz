import { R as e, r as i } from "./storybook-b5af0f4a.es.js";
import { r as c, u as h } from "./storybook-cf399608.es.js";
import { C as u, A as l, H as E, D as d } from "./storybook-cb0819b0.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-48704324.es.js";
import "./storybook-c84489b0.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-398c73a4.es.js";
var x = { code: u, a: l, ...E }, D = class extends i.Component {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(t) {
    let { showException: r } = this.props;
    r(t);
  }
  render() {
    let { hasError: t } = this.state, { children: r } = this.props;
    return t ? null : r;
  }
}, A = class {
  constructor() {
    this.render = async (t, r, o) => {
      let n = { ...x, ...r == null ? void 0 : r.components }, s = d;
      return new Promise((m, p) => {
        import("./storybook-bc189463.es.js").then(({ MDXProvider: a }) => c(e.createElement(D, { showException: p, key: Math.random() }, e.createElement(a, { components: n }, e.createElement(s, { context: t, docsParameter: r }))), o)).then(() => m());
      });
    }, this.unmount = (t) => {
      h(t);
    };
  }
};
export {
  A as DocsRenderer,
  x as defaultComponents
};
