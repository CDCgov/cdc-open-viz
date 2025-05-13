import { R as e, r as a } from "./storybook-index-f2fed736.es.js";
import { r as c, u as h } from "./storybook-react-18-aeab0ec0.es.js";
import { e as l, A as u, H as E, D as d } from "./storybook-index-9158acde.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-8cf78369.es.js";
import "./storybook-chunk-6E673XPF-1a765264.es.js";
import "./storybook-index-83f1a828.es.js";
import "./storybook-extends-0a3e0827.es.js";
import "./storybook-index-aedbac5d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-index-398c73a4.es.js";
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
}, k = class {
  constructor() {
    this.render = async (t, r, o) => {
      let n = { ...x, ...r == null ? void 0 : r.components }, s = d;
      return new Promise((m, p) => {
        import("./storybook-index-8a3e0d80.es.js").then(({ MDXProvider: i }) => c(e.createElement(D, { showException: p, key: Math.random() }, e.createElement(i, { components: n }, e.createElement(s, { context: t, docsParameter: r }))), o)).then(() => m());
      });
    }, this.unmount = (t) => {
      h(t);
    };
  }
};
export {
  k as DocsRenderer,
  x as defaultComponents
};
