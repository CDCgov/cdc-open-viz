import { M as s } from "./storybook-cb0819b0.es.js";
import { j as n, a as o, F as c } from "./storybook-b0cbddea.es.js";
import { u as a } from "./storybook-141275a4.es.js";
import "./storybook-c84489b0.es.js";
import "./storybook-b5af0f4a.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-48704324.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-398c73a4.es.js";
function i(t) {
  const e = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    code: "code",
    strong: "strong",
    pre: "pre"
  }, a(), t.components);
  return /* @__PURE__ */ o(c, {
    children: [/* @__PURE__ */ n(s, {
      title: "Guides/New Components"
    }), `
`, /* @__PURE__ */ n(e.h1, {
      id: "adding-new-components",
      children: "Adding New Components"
    }), `
`, /* @__PURE__ */ n(e.p, {
      children: "This guide will walk you through the process of creating a new component."
    }), `
`, /* @__PURE__ */ n("br", {}), `
`, /* @__PURE__ */ n(e.h2, {
      id: "naming-conventions",
      children: "Naming Conventions"
    }), `
`, /* @__PURE__ */ o(e.ul, {
      children: [`
`, /* @__PURE__ */ o(e.li, {
        children: [`
`, /* @__PURE__ */ o(e.p, {
          children: ["Because the components are imported directly from COVE related files, there is no need to reference ", /* @__PURE__ */ n(e.code, {
            children: "COVE"
          }), " in the component name. For example, ", /* @__PURE__ */ n(e.code, {
            children: "CoveButton"
          }), " should just be named ", /* @__PURE__ */ n(e.code, {
            children: "Button"
          }), "."]
        }), `
`]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [`
`, /* @__PURE__ */ o(e.p, {
          children: ["Components should be named in PascalCase, and should be named after the component itself. For example, a component that renders a button should be named ", /* @__PURE__ */ n(e.code, {
            children: "Button"
          }), ", not ", /* @__PURE__ */ n(e.code, {
            children: "ButtonComponent"
          }), "."]
        }), `
`]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [`
`, /* @__PURE__ */ n(e.p, {
          children: "Subcomponents should include the name of the parent component, then list its variation, subvariation, etc. The file name should have variation separated by a period in the file name."
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: /* @__PURE__ */ n(e.strong, {
            children: "Example"
          })
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-js",
            children: `Map.jsx -> Map.Marker.jsx -> Map.Marker.Icon.jsx
`
          })
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: " "
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-js",
            children: `Map() -> MapMarker() -> MapMarkerIcon()
`
          })
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: " "
        }), `
`]
      }), `
`]
    }), `
`, /* @__PURE__ */ n(e.h2, {
      id: "file-structure",
      children: "File Structure"
    }), `
`, /* @__PURE__ */ o(e.p, {
      children: ["All global components should be placed in its related ", /* @__PURE__ */ n(e.code, {
        children: "./packages/core/components/***"
      }), " directory."]
    }), `
`, /* @__PURE__ */ o(e.p, {
      children: ["The ", /* @__PURE__ */ n(e.code, {
        children: "***"
      }), " directory should be representative of the type of component being created:"]
    }), `
`, /* @__PURE__ */ o(e.ul, {
      children: [`
`, /* @__PURE__ */ o(e.li, {
        children: [/* @__PURE__ */ n(e.code, {
          children: "editor"
        }), " - Components/subcomponents specific to the Editor view of a component, where visualization settings are set/modified."]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [/* @__PURE__ */ n(e.code, {
          children: "element"
        }), " - Elements that are consumed for use in COVE, and can be recycled, but do not necessarily function as a direct part of the UI."]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [/* @__PURE__ */ n(e.code, {
          children: "hoc"
        }), " - Components that are intended to be used as wrappers around other components. These usually provide higher, specific logic or functionality to a component/group of components."]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [/* @__PURE__ */ n(e.code, {
          children: "input"
        }), " - Components that are intended to be used as inputs for Editor Panels, or - in rare cases - as inputs on visualizations."]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [/* @__PURE__ */ n(e.code, {
          children: "loader"
        }), " - Components that are intended to be used as loaders for suspense/lazy loading of components."]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [/* @__PURE__ */ n(e.code, {
          children: "manager"
        }), " - Components specifically intended to be used as tools for managing/interfacing with processed data, usually to interactively modify or manipulate data values or structure."]
      }), `
`, /* @__PURE__ */ o(e.li, {
        children: [/* @__PURE__ */ n(e.code, {
          children: "ui"
        }), " - Not to be confused with ", /* @__PURE__ */ n(e.code, {
          children: "element"
        }), " - UI components are the most basic building blocks of an interface. These control the visual appearance of a component, and are usually the most reusable components in the system."]
      }), `
`]
    }), `
`, /* @__PURE__ */ n(e.p, {
      children: " "
    }), `
`, /* @__PURE__ */ n(e.h2, {
      id: "component-structure",
      children: "Component Structure"
    }), `
`, /* @__PURE__ */ n(e.p, {
      children: "All components should adhere loosely to the following format, using the comments to organize import uses and types:"
    }), `
`, /* @__PURE__ */ n(e.pre, {
      children: /* @__PURE__ */ n(e.code, {
        className: "language-jsx",
        children: `import React from 'react'

// Third Party
// Store
// Context
// Data
// Constants
// Hooks
// Helpers
// Components - Core
// Components - Local
// Styles

// Visualization
const Component = () => {
  return (
    <div>
      <h1>Component</h1>
    </div>
  )
}
export default Component
`
      })
    }), `
`, /* @__PURE__ */ n(e.p, {
      children: "While directly exporting a non-variable function does work, exporting functions this way allows for a cleaner method of attaching memoization, or adding extension optimizations to a component. It allows us to reference the exported const directly, vs wrapping the entire function itself (which can get lengthy, and cluttered with other function wrappers):"
    }), `
`, /* @__PURE__ */ n(e.pre, {
      children: /* @__PURE__ */ n(e.code, {
        className: "language-jsx",
        children: `export default memo(Component)
`
      })
    })]
  });
}
function d(t = {}) {
  const {
    wrapper: e
  } = Object.assign({}, a(), t.components);
  return e ? /* @__PURE__ */ n(e, {
    ...t,
    children: /* @__PURE__ */ n(i, {
      ...t
    })
  }) : i(t);
}
const l = () => {
  throw new Error("Docs-only story");
};
l.parameters = {
  docsOnly: !0
};
const r = {
  title: "Guides/New Components",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
r.parameters = r.parameters || {};
r.parameters.docs = {
  ...r.parameters.docs || {},
  page: d
};
const w = ["__page"];
export {
  w as __namedExportsOrder,
  l as __page,
  r as default
};
