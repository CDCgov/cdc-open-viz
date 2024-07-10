import { M as a } from "./storybook-index-c89c941e.es.js";
import { j as t, a as i, F as l } from "./storybook-jsx-runtime-36872362.es.js";
import { u as s } from "./storybook-index-f3c032d5.es.js";
import "./storybook-chunk-ZGA76URP-bf7717af.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-index-83f1a828.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-index-aedbac5d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-index-398c73a4.es.js";
function o(r) {
  const e = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    strong: "strong",
    h2: "h2",
    ul: "ul",
    li: "li"
  }, s(), r.components);
  return /* @__PURE__ */ i(l, {
    children: [/* @__PURE__ */ t(a, {
      title: "Guides/New Stories"
    }), `
`, /* @__PURE__ */ t(e.h1, {
      id: "adding-new-stories",
      children: "Adding New Stories"
    }), `
`, /* @__PURE__ */ i(e.p, {
      children: ["This library is organized flowing ", /* @__PURE__ */ t(e.a, {
        href: "https://bradfrost.com/blog/post/atomic-web-design/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Atomic Design"
      }), " principals"]
    }), `
`, /* @__PURE__ */ t(e.p, {
      children: /* @__PURE__ */ t(e.strong, {
        children: "ensure that main.ts createEntries function includes that package where the story lives"
      })
    }), `
`, /* @__PURE__ */ t(e.h2, {
      id: "overview",
      children: "Overview:"
    }), `
`, /* @__PURE__ */ i(e.ul, {
      children: [`
`, /* @__PURE__ */ t(e.li, {
        children: "Atoms: Smallest building block"
      }), `
`, /* @__PURE__ */ t(e.li, {
        children: "Molecules: created from Atoms"
      }), `
`, /* @__PURE__ */ t(e.li, {
        children: "Organisms: Made of Atoms and Molecules while still being a modular building block"
      }), `
`, /* @__PURE__ */ t(e.li, {
        children: "Templates: Can be use to make pages"
      }), `
`, /* @__PURE__ */ t(e.li, {
        children: "Pages: Largest building block which can be isolated from an application"
      }), `
`]
    })]
  });
}
function c(r = {}) {
  const {
    wrapper: e
  } = Object.assign({}, s(), r.components);
  return e ? /* @__PURE__ */ t(e, {
    ...r,
    children: /* @__PURE__ */ t(o, {
      ...r
    })
  }) : o(r);
}
const d = () => {
  throw new Error("Docs-only story");
};
d.parameters = {
  docsOnly: !0
};
const n = {
  title: "Guides/New Stories",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
n.parameters = n.parameters || {};
n.parameters.docs = {
  ...n.parameters.docs || {},
  page: c
};
const O = ["__page"];
export {
  O as __namedExportsOrder,
  d as __page,
  n as default
};
