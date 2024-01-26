import { R as e, r as a } from "./storybook-e61d95ab.es.js";
import { r as c, u as h } from "./storybook-48546907.es.js";
import { C as l, A as u, H as E, D as d } from "./storybook-8f2af20c.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-504ac493.es.js";
import "./storybook-e988567b.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-70f3d2a3.es.js";
import "./storybook-af295018.es.js";
import "./storybook-7709dd1c.es.js";
import "./storybook-398c73a4.es.js";
var x = { code: l, a: u, ...E }, D = class extends a.Component {
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
    return t ? null : e.createElement(e.Fragment, null, r);
  }
}, S = class {
  constructor() {
    this.render = async (t, r, o) => {
      let n = { ...x, ...r == null ? void 0 : r.components }, s = d;
      return new Promise((m, p) => {
        import("./storybook-da687b0c.es.js").then(({ MDXProvider: i }) => c(e.createElement(D, { showException: p, key: Math.random() }, e.createElement(i, { components: n }, e.createElement(s, { context: t, docsParameter: r }))), o)).then(() => m());
      });
    }, this.unmount = (t) => {
      h(t);
    };
  }
};
export {
  S as DocsRenderer,
  x as defaultComponents
};
