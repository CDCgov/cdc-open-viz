import { M as a } from "./storybook-index-c89c941e.es.js";
import { j as t, a as o, F as l } from "./storybook-jsx-runtime-36872362.es.js";
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
function i(n) {
  const e = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    strong: "strong",
    h2: "h2",
    ul: "ul",
    li: "li",
    ol: "ol",
    em: "em"
  }, s(), n.components);
  return /* @__PURE__ */ o(l, {
    children: [/* @__PURE__ */ t(a, {
      title: "Guides/New Stories"
    }), `
`, /* @__PURE__ */ t(e.h1, {
      id: "adding-new-stories",
      children: "Adding New Stories"
    }), `
`, /* @__PURE__ */ o(e.p, {
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
`, /* @__PURE__ */ o(e.ul, {
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
    }), `
`, /* @__PURE__ */ t(e.h2, {
      id: "should-you-create-a-new-story",
      children: "Should you create a new Story?:"
    }), `
`, /* @__PURE__ */ o(e.ol, {
      children: [`
`, /* @__PURE__ */ t(e.li, {
        children: "Is the feature a new UI component which will be public facing?"
      }), `
`, /* @__PURE__ */ t(e.li, {
        children: "Can the feature be categorized as an Atom, Molecule, Organism, Template, or Page?"
      }), `
`, /* @__PURE__ */ t(e.li, {
        children: "Does the feature need to be regression/smoke tested by other developers before PRs?"
      }), `
`, /* @__PURE__ */ t(e.li, {
        children: "Does the story open directly to the state you wish to show without the need for user interaction?"
      }), `
`]
    }), `
`, /* @__PURE__ */ t(e.p, {
      children: /* @__PURE__ */ t(e.em, {
        children: "If the answer to any of the above is true consider adding a story. If you are considering building or have built a new story and you can't answer yes to any of the above then the story is probably not needed"
      })
    })]
  });
}
function c(n = {}) {
  const {
    wrapper: e
  } = Object.assign({}, s(), n.components);
  return e ? /* @__PURE__ */ t(e, {
    ...n,
    children: /* @__PURE__ */ t(i, {
      ...n
    })
  }) : i(n);
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
const D = ["__page"];
export {
  D as __namedExportsOrder,
  d as __page,
  r as default
};
