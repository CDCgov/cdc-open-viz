import { M as a } from "./storybook-cdd77059.es.js";
import { j as t, a as i, F as l } from "./storybook-96bcff98.es.js";
import { u as s } from "./storybook-c733c29e.es.js";
import "./storybook-e988567b.es.js";
import "./storybook-e61d95ab.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-ac19c974.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-70f3d2a3.es.js";
import "./storybook-2a203c68.es.js";
import "./storybook-21ad7f25.es.js";
import "./storybook-398c73a4.es.js";
function o(n) {
  const e = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    strong: "strong",
    h2: "h2",
    ul: "ul",
    li: "li"
  }, s(), n.components);
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
function c(n = {}) {
  const {
    wrapper: e
  } = Object.assign({}, s(), n.components);
  return e ? /* @__PURE__ */ t(e, {
    ...n,
    children: /* @__PURE__ */ t(o, {
      ...n
    })
  }) : o(n);
}
const d = () => {
  throw new Error("Docs-only story");
};
d.parameters = {
  docsOnly: !0
};
const r = {
  title: "Guides/New Stories",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
r.parameters = r.parameters || {};
r.parameters.docs = {
  ...r.parameters.docs || {},
  page: c
};
const y = ["__page"];
export {
  y as __namedExportsOrder,
  d as __page,
  r as default
};
