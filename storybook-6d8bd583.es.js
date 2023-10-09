import e, { Component as a } from "react";
import { r as c, u } from "./storybook-7ed79bb0.es.js";
import { C as h, A as l, H as d, D as E } from "./storybook-6f4c0a9b.es.js";
import "./storybook-86ede3a4.es.js";
import "./storybook-92157f1b.es.js";
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
}, A = class {
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
  A as DocsRenderer,
  x as defaultComponents
};
