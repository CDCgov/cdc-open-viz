import { M as t } from "./storybook-index-9158acde.es.js";
import { j as n, a as i, F as d } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { u as c } from "./storybook-index-d49fd73b.es.js";
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
function l(r) {
  const e = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    strong: "strong",
    pre: "pre",
    code: "code",
    em: "em",
    ol: "ol"
  }, c(), r.components);
  return /* @__PURE__ */ i(d, {
    children: [/* @__PURE__ */ n(t, {
      title: "Guides/New Icons"
    }), `
`, /* @__PURE__ */ n(e.h1, {
      id: "adding-new-icons",
      children: "Adding New Icons"
    }), `
`, /* @__PURE__ */ n("br", {}), `
`, /* @__PURE__ */ n(e.h2, {
      id: "svg-formatting--markup",
      children: "SVG Formatting & Markup"
    }), `
`, /* @__PURE__ */ n(e.p, {
      children: "New icon svgs should adhere to the following guidelines:"
    }), `
`, /* @__PURE__ */ i(e.ul, {
      children: [`
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ n(e.p, {
          children: "Should be sized properly with vetor editing software, with extraneous, unnecessary padding removed."
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ n(e.p, {
          children: "Should be monotone, with any white sections either removed, or clipped/masked to transparency."
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ n(e.p, {
          children: "Should have its paths snapped to 1px increments, with whole number width/height dimensions to reduce subpixel malformations."
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ n(e.p, {
          children: "Should have all ids, classes, inline css, unnecessary markup, and any other extraneous code, completely removed:"
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: /* @__PURE__ */ n(e.strong, {
            children: "Markup Example (Bad)"
          })
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-html",
            children: `<?xml version="1.0" encoding="UTF-8"?>\r
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" <style>.cls-1{fill:none;}</style> viewBox="0 0 20.556 20.566">\r
...\r
</svg>
`
          })
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: /* @__PURE__ */ n(e.strong, {
            children: "Markup Example (Good)"
          })
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-html",
            children: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">...</svg>
`
          })
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: " "
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ i(e.p, {
          children: ["Should be supplied with the accessibility-specific attributes ", /* @__PURE__ */ n(e.code, {
            children: 'aria-hidden="true" focusable="false" role="img"'
          }), " to ensure proper 508 compliance:"]
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-html",
            children: `<svg ... aria-hidden="true" focusable="false" role="img"></svg>
`
          })
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: " "
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ i(e.p, {
          children: ["Should be supplied with ", /* @__PURE__ */ n(e.code, {
            children: 'fill="currentColor"'
          }), " to support font color inheritance from parent for fill:"]
        }), `
`, /* @__PURE__ */ i(e.p, {
          children: [` \r
[`, /* @__PURE__ */ i(e.em, {
            children: ["Note: Some icons may require that the ", /* @__PURE__ */ n(e.code, {
              children: "<path>"
            }), " receive the fill, instead of the top-level ", /* @__PURE__ */ n(e.code, {
              children: "<svg>"
            }), "; this entirely depends on whether clipping mask paths exist on the image."]
          }), "]"]
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-html",
            children: `<svg ... fill="currentColor"></svg>
`
          })
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: " "
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ n(e.p, {
          children: "Your final svg output should look like the following:"
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-html",
            children: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" focusable="false" role="img" fill="currentColor">...</svg>
`
          })
        }), `
`, /* @__PURE__ */ n("br", {}), `
`]
      }), `
`]
    }), `
`, /* @__PURE__ */ n(e.h2, {
      id: "filename--directory",
      children: "Filename & Directory"
    }), `
`, /* @__PURE__ */ i(e.p, {
      children: ["All new icons should be named using the following convention: ", /* @__PURE__ */ n(e.code, {
        children: "icon-"
      }), " ", /* @__PURE__ */ n(e.code, {
        children: "kebab-case-name"
      }), " (", /* @__PURE__ */ n(e.code, {
        children: "-variation"
      }), ")", /* @__PURE__ */ n(e.code, {
        children: ".svg"
      }), "."]
    }), `
`, /* @__PURE__ */ i(e.p, {
      children: ["Once all of the above steps are completed, the new icon should be placed in the ", /* @__PURE__ */ n(e.code, {
        children: "./packages/core/assets"
      }), " directory."]
    }), `
`, /* @__PURE__ */ n("br", {}), `
`, /* @__PURE__ */ n(e.h2, {
      id: "adding-icons-to-the-icon-component",
      children: "Adding Icons to the Icon Component"
    }), `
`, /* @__PURE__ */ i(e.ol, {
      children: [`
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ i(e.p, {
          children: ["Open the ", /* @__PURE__ */ n(e.code, {
            children: "./packages/core/data/iconHash.js"
          }), " file to access the hash list."]
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ i(e.p, {
          children: ["Import your new svg at the top of the file, maintaining alphabetical order of text following the ", /* @__PURE__ */ n(e.code, {
            children: "icon"
          }), " prefix."]
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ i(e.p, {
          children: ["Assign an import name using the following convention: ", /* @__PURE__ */ n(e.code, {
            children: "icon"
          }), " ", /* @__PURE__ */ n(e.code, {
            children: "KebabToPascal"
          }), "."]
        }), `
`, /* @__PURE__ */ i(e.p, {
          children: [/* @__PURE__ */ n(e.strong, {
            children: "Example:"
          }), " If you've created a file named ", /* @__PURE__ */ n(e.code, {
            children: "icon-square-filled.svg"
          }), ", your import name should be ", /* @__PURE__ */ n(e.code, {
            children: "iconSquareFilled"
          }), "..."]
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-js",
            children: `import iconSquareFilled from '../assets/icon-square-filled.svg'
`
          })
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: " "
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ i(e.p, {
          children: ["Add the new icon and its hash to the hash object, maintaining alphabetical order; the ", /* @__PURE__ */ n(e.code, {
            children: "icon"
          }), " prefix should be removed for the key and converted to camelCase:"]
        }), `
`, /* @__PURE__ */ n(e.p, {
          children: /* @__PURE__ */ n(e.strong, {
            children: "Example"
          })
        }), `
`, /* @__PURE__ */ n(e.pre, {
          children: /* @__PURE__ */ n(e.code, {
            className: "language-js",
            children: `const iconHash = {\r
  ...\r
  'squareFilled': iconSquareFilled,\r
  ...\r
}
`
          })
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ i(e.p, {
          children: ["Add your new icon to the Icon component documentation located at ", /* @__PURE__ */ n(e.code, {
            children: "./packages/core/components/ui/_stories/Icon.stories.mdx"
          }), " and test to ensure it is functioning properly."]
        }), `
`]
      }), `
`, /* @__PURE__ */ i(e.li, {
        children: [`
`, /* @__PURE__ */ n(e.p, {
          children: "You're done!"
        }), `
`]
      }), `
`]
    })]
  });
}
function s(r = {}) {
  const {
    wrapper: e
  } = Object.assign({}, c(), r.components);
  return e ? /* @__PURE__ */ n(e, {
    ...r,
    children: /* @__PURE__ */ n(l, {
      ...r
    })
  }) : l(r);
}
const a = () => {
  throw new Error("Docs-only story");
};
a.parameters = {
  docsOnly: !0
};
const o = {
  title: "Guides/New Icons",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
o.parameters = o.parameters || {};
o.parameters.docs = {
  ...o.parameters.docs || {},
  page: s
};
const S = ["__page"];
export {
  S as __namedExportsOrder,
  a as __page,
  o as default
};
