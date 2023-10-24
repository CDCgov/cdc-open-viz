import { R as e, r as c } from "./storybook-e61d95ab.es.js";
import { r as i, u as h } from "./storybook-84ae6211.es.js";
import { C as l, A as u, H as E, D as d } from "./storybook-558abfd4.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-5f195cba.es.js";
import "./storybook-e988567b.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-398c73a4.es.js";
var x = { code: l, a: u, ...E }, D = class extends c.Component {
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
}, A = class {
  constructor() {
    this.render = async (t, r, o) => {
      let n = { ...x, ...r == null ? void 0 : r.components }, s = d;
      return new Promise((m, a) => {
        import("./storybook-da687b0c.es.js").then(({ MDXProvider: p }) => i(e.createElement(D, { showException: a, key: Math.random() }, e.createElement(p, { components: n }, e.createElement(s, { context: t, docsParameter: r }))), o)).then(() => m());
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
