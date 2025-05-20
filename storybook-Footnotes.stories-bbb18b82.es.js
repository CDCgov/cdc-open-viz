import { F as n } from "./storybook-Footnotes-42c638ea.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const p = {
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
const c = ["Primary"];
export {
  o as Primary,
  c as __namedExportsOrder,
  p as default
};
