import { M as f, C as i, b as s } from "./storybook-index-9158acde.es.js";
import { c } from "./storybook-colorPalettes-bc80e395.es.js";
import { j as t, a as g, F as h } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { u as d } from "./storybook-index-d49fd73b.es.js";
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
const S = Object.keys(c).sort().reduce((e, r) => (e[r] = c[r], e), {}), b = {
  yelloworangered: "Yellow Orange Red",
  yelloworangebrown: "Yellow Orange Brown",
  pinkpurple: "Pink Purple",
  bluegreen: "Blue Green",
  orangered: "Orange Red",
  red: "Red Scale",
  greenblue: "Green Blue",
  yellowpurple: "Yellow Purple",
  "qualitative-bold": "Bold Multi-Color",
  "qualitative-soft": "Soft Multi-Color",
  qualitative1: "Multi-Color Set 1",
  qualitative2: "Multi-Color Set 2",
  qualitative3: "Multi-Color Set 3",
  qualitative4: "Multi-Color Set 4",
  "sequential-blue": "Blue Sequential",
  "sequential-blue-2-(MPX)": "Blue Sequential Alt",
  "sequential-blue-2(MPX)": "Blue Sequential Alt",
  "sequential-orange-(MPX)": "Orange Sequential",
  "sequential-orange(MPX)": "Orange Sequential",
  "sequential-green": "Green Sequential",
  "Sequential Blue": "Blue Sequential",
  "Sequential Blue Two": "Blue Sequential Alt",
  "Sequential Blue Three": "Blue Sequential Extended",
  "Sequential Orange": "Orange Sequential",
  "Sequential Orange Two": "Orange Sequential Extended",
  "Sequential Green": "Green Sequential",
  "monochrome-1": "Blue Mono",
  "monochrome-2": "Purple Mono",
  "monochrome-3": "Lavender Mono",
  "monochrome-4": "Violet Mono",
  "monochrome-5": "Brown Mono",
  "cool-1": "Cool Green Blue",
  "cool-2": "Cool Blue Green",
  "cool-3": "Cool Purple Blue",
  "cool-4": "Cool Green Purple",
  "cool-5": "Cool Blue Purple",
  "warm-1": "Warm Red Peach",
  "complementary-1": "Blue Gold",
  "complementary-2": "Blue Orange",
  "complementary-3": "Purple Orange",
  "complementary-4": "Purple Gold",
  "complementary-5": "Pink Teal",
  colorblindsafe: "Colorblind Safe"
}, P = (e) => {
  const r = e.endsWith("reverse"), o = r ? e.slice(0, -7) : e, a = o.toLowerCase().replace(/\s+/g, "-").replace(/-/g, " ").replace(/\(mpx\)/gi, " (MonkeyPox)"), m = b[a] || o.replace(/-/g, " ").replace(/\(mpx\)/gi, " (MonkeyPox)"), n = ((p) => p.replace(/\b\w/g, (y) => y.toUpperCase()))(m);
  return r ? `${n} (Reversed)` : n;
};
function u(e) {
  const r = Object.assign({
    h1: "h1",
    p: "p"
  }, d(), e.components);
  return /* @__PURE__ */ g(h, {
    children: [/* @__PURE__ */ t(f, {
      title: "Design Systems/Colors"
    }), `
`, /* @__PURE__ */ t(r.h1, {
      id: "visualization-color-palettes",
      children: "Visualization Color Palettes"
    }), `
`, /* @__PURE__ */ t(r.p, {
      children: "The color palettes are predefined sets of colors organized into categories like sequential, qualitative, and complementary groups. These groups are designed with visual clarity in mind to ensure a cohesive and effective representation of data. The palettes are listed alphabetically, with reversed versions placed directly next to their original counterparts to maintain consistency across the application. In the codebase, these palettes are dynamically applied to generate and display color schemes in various UI components, such as charts and visualizations."
    }), `
`, /* @__PURE__ */ t(i, {
      children: Object.entries(S).map(([o, a]) => /* @__PURE__ */ t(s, {
        title: P(o),
        colors: a
      }, o))
    }), `
`, /* @__PURE__ */ t(r.h1, {
      id: "cdc-specific--additional-colors",
      children: "CDC Specific & Additional Colors"
    }), `
`, /* @__PURE__ */ t(r.p, {
      children: "These are additional color palettes that can be used for various UI components. When using these consult CDC Level documentation."
    }), `
`, /* @__PURE__ */ t(i, {
      children: [{
        title: "Blue",
        colors: {
          Primary: "#005eaa",
          Secondary: "#88c3ea",
          Tertiary: "#c0e9ff",
          Quaternary: "#edf9ff"
        }
      }, {
        title: "Purple",
        colors: {
          Primary: "#712177",
          Secondary: "#b890bb",
          Tertiary: "#e3d3e4",
          Quaternary: "#f7f2f7"
        }
      }, {
        title: "Brown",
        colors: {
          Primary: "#705043",
          Secondary: "#ad907b",
          Tertiary: "#d7ccc8",
          Quaternary: "#f2ebe8"
        }
      }, {
        title: "Teal",
        colors: {
          Primary: "#00695c",
          Secondary: "#4ebaaa",
          Tertiary: "#ceece7",
          Quaternary: "#ebf7f5"
        }
      }, {
        title: "Pink",
        colors: {
          Primary: "#af4448",
          Secondary: "#e57373",
          Tertiary: "#ffc2c2",
          Quaternary: "#ffe7e7"
        }
      }, {
        title: "Orange",
        colors: {
          Primary: "#bb4d00",
          Secondary: "#ffad42",
          Tertiary: "#ffe97d",
          Quaternary: "#fff4cf"
        }
      }, {
        title: "Slate",
        colors: {
          Primary: "#29434e",
          Secondary: "#7e9ba5",
          Tertiary: "#b6c6d2",
          Quaternary: "#e2e8ed"
        }
      }, {
        title: "Indigo",
        colors: {
          Primary: "#26418f",
          Secondary: "#92a6dd",
          Tertiary: "#dee8ff",
          Quaternary: "#f2f6ff"
        }
      }, {
        title: "Cyan",
        colors: {
          Primary: "#006778",
          Secondary: "#65b0bd",
          Tertiary: "#cce5e9",
          Quaternary: "#ebf5f6"
        }
      }, {
        title: "Green",
        colors: {
          Primary: "#4b830d",
          Secondary: "#84bc49",
          Tertiary: "#dcedc8",
          Quaternary: "#f1f8e9"
        }
      }, {
        title: "Amber",
        colors: {
          Primary: "#fbab18",
          Secondary: "#ffd54f",
          Tertiary: "#ffecb3",
          Quaternary: "#fff7e1"
        }
      }, {
        title: "Grayscale",
        colors: {
          "Base Color": "#333",
          "Lightest Gray": "#f2f2f2",
          "Light Gray": "#c7c7c7",
          "Medium Gray": "#565656",
          "Dark Gray": "#333"
        }
      }, {
        title: "White",
        colors: ["#FFF"]
      }, {
        title: "Red",
        colors: ["#d8000c"]
      }].map(({
        title: o,
        colors: a
      }) => /* @__PURE__ */ t(s, {
        title: o,
        colors: a,
        subtitle: "test"
      }, o))
    })]
  });
}
function q(e = {}) {
  const {
    wrapper: r
  } = Object.assign({}, d(), e.components);
  return r ? /* @__PURE__ */ t(r, {
    ...e,
    children: /* @__PURE__ */ t(u, {
      ...e
    })
  }) : u(e);
}
const C = () => {
  throw new Error("Docs-only story");
};
C.parameters = {
  docsOnly: !0
};
const l = {
  title: "Design Systems/Colors",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
l.parameters = l.parameters || {};
l.parameters.docs = {
  ...l.parameters.docs || {},
  page: q
};
const R = ["orderedPalettes", "paletteFriendlyNames", "getPaletteName", "__page"];
export {
  R as __namedExportsOrder,
  C as __page,
  l as default,
  P as getPaletteName,
  S as orderedPalettes,
  b as paletteFriendlyNames
};
