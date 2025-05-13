import { M as m, I as i, d as p } from "./storybook-index-9158acde.es.js";
import { I as c, a as d } from "./storybook-Icon-e250778e.es.js";
import { j as t, a as g, F as l } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { u as a } from "./storybook-index-d49fd73b.es.js";
import "./storybook-chunk-6E673XPF-1a765264.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-8cf78369.es.js";
import "./storybook-index-83f1a828.es.js";
import "./storybook-extends-0a3e0827.es.js";
import "./storybook-index-aedbac5d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-index-398c73a4.es.js";
function s(o) {
  const r = Object.assign({
    h1: "h1"
  }, a(), o.components);
  return /* @__PURE__ */ g(l, {
    children: [/* @__PURE__ */ t(m, {
      title: "Design Systems/Iconography"
    }), `
`, /* @__PURE__ */ t(r.h1, {
      id: "iconography",
      children: "Iconography"
    }), `
`, /* @__PURE__ */ t(i, {
      children: c.map((n) => /* @__PURE__ */ t(p, {
        name: n,
        children: /* @__PURE__ */ t(d, {
          display: n
        })
      }))
    })]
  });
}
function h(o = {}) {
  const {
    wrapper: r
  } = Object.assign({}, a(), o.components);
  return r ? /* @__PURE__ */ t(r, {
    ...o,
    children: /* @__PURE__ */ t(s, {
      ...o
    })
  }) : s(o);
}
const y = () => {
  throw new Error("Docs-only story");
};
y.parameters = {
  docsOnly: !0
};
const e = {
  title: "Design Systems/Iconography",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
e.parameters = e.parameters || {};
e.parameters.docs = {
  ...e.parameters.docs || {},
  page: h
};
const b = ["__page"];
export {
  b as __namedExportsOrder,
  y as __page,
  e as default
};
