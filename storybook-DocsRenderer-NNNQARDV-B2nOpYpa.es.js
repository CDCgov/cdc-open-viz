import { R as t, r as p } from "./storybook-index-BmAYD2Ot.es.js";
import { r as h, u as i } from "./storybook-react-18-w8SYIn1B.es.js";
import { C as l, A as u, H as E, D as d } from "./storybook-WithTooltip-V3YHNWJZ-DZnB6Z0t.es.js";
var x = { code: l, a: u, ...E }, D = class extends p.Component {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(r) {
    let { showException: e } = this.props;
    e(r);
  }
  render() {
    let { hasError: r } = this.state, { children: e } = this.props;
    return r ? null : t.createElement(t.Fragment, null, e);
  }
}, g = class {
  constructor() {
    this.render = async (r, e, n) => {
      let o = { ...x, ...e == null ? void 0 : e.components }, s = d;
      return new Promise((a, c) => {
        import("./storybook-index-BZdgOCd1.es.js").then(({ MDXProvider: m }) => h(t.createElement(D, { showException: c, key: Math.random() }, t.createElement(m, { components: o }, t.createElement(s, { context: r, docsParameter: e }))), n)).then(() => a());
      });
    }, this.unmount = (r) => {
      i(r);
    };
  }
};
export {
  g as DocsRenderer,
  x as defaultComponents
};
