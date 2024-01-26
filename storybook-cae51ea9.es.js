import { M as o } from "./storybook-ca98149f.es.js";
import "./storybook-e61d95ab.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-5071fd94.es.js";
import "./storybook-b8c9afe4.es.js";
const b = {
  title: "Components/Molecules/MultiSelect",
  component: o
}, e = {
  args: {
    options: [{
      value: "1",
      label: "One"
    }, {
      value: "2",
      label: "Two"
    }, {
      value: "3",
      label: "Three"
    }],
    label: "MultiSelect",
    updateField: (n, r, s, i) => {
    }
  }
};
var l, a, t;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(l = e.parameters) == null ? void 0 : l.docs,
    source: {
      originalSource: `{
  args: {
    options: [{
      value: '1',
      label: 'One'
    }, {
      value: '2',
      label: 'Two'
    }, {
      value: '3',
      label: 'Three'
    }],
    label: 'MultiSelect',
    updateField: (section, subsection, fieldName, value) => {}
  }
}`,
      ...(t = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : t.source
    }
  }
};
const v = ["Primary"];
export {
  e as Primary,
  v as __namedExportsOrder,
  b as default
};
