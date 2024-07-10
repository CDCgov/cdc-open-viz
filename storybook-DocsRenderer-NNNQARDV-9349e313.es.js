import { R as e, r as a } from "./storybook-index-45401197.es.js";
import { r as c, u as h } from "./storybook-react-18-495ca78c.es.js";
import { C as l, A as u, H as E, D as d } from "./storybook-index-c89c941e.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-chunk-ZGA76URP-bf7717af.es.js";
import "./storybook-index-83f1a828.es.js";
import "./storybook-extends-70f3d2a3.es.js";
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
        import("./storybook-index-4552ed8e.es.js").then(({ MDXProvider: i }) => c(e.createElement(D, { showException: p, key: Math.random() }, e.createElement(i, { components: n }, e.createElement(s, { context: t, docsParameter: r }))), o)).then(() => m());
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
