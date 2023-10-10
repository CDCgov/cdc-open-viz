import { M as a } from "./storybook-cb0819b0.es.js";
import { j as n, a as i, F as l } from "./storybook-b0cbddea.es.js";
import { u as s } from "./storybook-141275a4.es.js";
import "./storybook-c84489b0.es.js";
import "./storybook-b5af0f4a.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-48704324.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-398c73a4.es.js";
function o(t) {
  const e = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    strong: "strong",
    h2: "h2",
    ul: "ul",
    li: "li"
  }, s(), t.components);
  return /* @__PURE__ */ i(l, {
    children: [/* @__PURE__ */ n(a, {
      title: "Guides/New Stories"
    }), `
`, /* @__PURE__ */ n(e.h1, {
      id: "adding-new-stories",
      children: "Adding New Stories"
    }), `
`, /* @__PURE__ */ i(e.p, {
      children: ["This library is organized flowing ", /* @__PURE__ */ n(e.a, {
        href: "https://bradfrost.com/blog/post/atomic-web-design/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Atomic Design"
      }), " principals"]
    }), `
`, /* @__PURE__ */ n(e.p, {
      children: /* @__PURE__ */ n(e.strong, {
        children: "ensure that main.ts createEntries function includes that package where the story lives"
      })
    }), `
`, /* @__PURE__ */ n(e.h2, {
      id: "overview",
      children: "Overview:"
    }), `
`, /* @__PURE__ */ i(e.ul, {
      children: [`
`, /* @__PURE__ */ n(e.li, {
        children: "Atoms: Smallest building block"
      }), `
`, /* @__PURE__ */ n(e.li, {
        children: "Molecules: created from Atoms"
      }), `
`, /* @__PURE__ */ n(e.li, {
        children: "Organisms: Made of Atoms and Molecules while still being a modular building block"
      }), `
`, /* @__PURE__ */ n(e.li, {
        children: "Templates: Can be use to make pages"
      }), `
`, /* @__PURE__ */ n(e.li, {
        children: "Pages: Largest building block which can be isolated from an application"
      }), `
`]
    })]
  });
}
function c(t = {}) {
  const {
    wrapper: e
  } = Object.assign({}, s(), t.components);
  return e ? /* @__PURE__ */ n(e, {
    ...t,
    children: /* @__PURE__ */ n(o, {
      ...t
    })
  }) : o(t);
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
const M = ["__page"];
export {
  M as __namedExportsOrder,
  d as __page,
  r as default
};
