import e, { Component as a } from "react";
import { r as c, u } from "./storybook-2740ed3d.es.js";
import { C as h, A as l, H as d, D as E } from "./storybook-24c7e847.es.js";
import "./storybook-2d1b80a2.es.js";
import "./storybook-991eacfa.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-11c3872f.es.js";
import "./storybook-c84489b0.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-398c73a4.es.js";
var x = { code: h, a: l, ...d }, f = class extends a {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(r) {
    let { showException: t } = this.props;
    t(r);
  }
  render() {
    let { hasError: r } = this.state, { children: t } = this.props;
    return r ? null : t;
  }
}, R = class {
  constructor() {
    this.render = async (r, t, o) => {
      let n = { ...x, ...t == null ? void 0 : t.components }, s = E;
      return new Promise((m, i) => {
        import("./storybook-51b72eea.es.js").then(({ MDXProvider: p }) => c(e.createElement(f, { showException: i, key: Math.random() }, e.createElement(p, { components: n }, e.createElement(s, { context: r, docsParameter: t }))), o)).then(() => m());
      });
    }, this.unmount = (r) => {
      u(r);
    };
  }
};
export {
  R as DocsRenderer,
  x as defaultComponents
};
