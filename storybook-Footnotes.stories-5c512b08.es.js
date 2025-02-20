import { F as n } from "./storybook-Footnotes-864326bc.es.js";
const a = {
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
const i = ["Primary"];
export {
  o as Primary,
  i as __namedExportsOrder,
  a as default
};
