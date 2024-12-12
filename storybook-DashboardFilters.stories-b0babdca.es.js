import { D as o } from "./storybook-DashboardFilters-bd10edb2.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-MultiSelect-d587cce3.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-Icon-4f5978ba.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-NestedDropdown-59c5aa02.es.js";
import "./storybook-lodash-a4231e1c.es.js";
const f = {
  title: "Components/Atoms/Inputs/DashboardFilters",
  component: o
}, e = {
  args: {
    filters: [{
      type: "datafilter",
      key: "label here",
      values: [1, 2, 3, 4]
    }, {
      type: "datafilter",
      key: "something"
    }],
    handleOnChange: () => {
    }
  }
};
var t, r, a;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(t = e.parameters) == null ? void 0 : t.docs,
    source: {
      originalSource: `{
  args: {
    filters: [{
      type: 'datafilter',
      key: 'label here',
      values: [1, 2, 3, 4]
    }, {
      type: 'datafilter',
      key: 'something'
    }],
    handleOnChange: () => {}
  }
}`,
      ...(a = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : a.source
    }
  }
};
const y = ["Example_1"];
export {
  e as Example_1,
  y as __namedExportsOrder,
  f as default
};
