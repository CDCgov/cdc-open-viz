import { F as n } from "./storybook-Footnotes-108c3a2d.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const m = {
  title: "Components/Organisms/Footnotes",
  component: n
}, o = {
  args: {
    footnotes: [{
      symbol: "*",
      text: "This is a footnote"
    }, {
      symbol: "†",
      text: "This is another footnote"
    }, {
      text: "This is a third footnote"
    }]
  }
};
var t, s, e;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(t = o.parameters) == null ? void 0 : t.docs,
    source: {
      originalSource: `{
  args: {
    footnotes: [{
      symbol: '*',
      text: 'This is a footnote'
    }, {
      symbol: '†',
      text: 'This is another footnote'
    }, {
      text: 'This is a third footnote'
    }]
  }
}`,
      ...(e = (s = o.parameters) == null ? void 0 : s.docs) == null ? void 0 : e.source
    }
  }
};
const p = ["Primary"];
export {
  o as Primary,
  p as __namedExportsOrder,
  m as default
};
