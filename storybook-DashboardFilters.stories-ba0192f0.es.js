import { D as o } from "./storybook-DashboardFilters-7461a191.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-MultiSelect-fb96d51f.es.js";
import "./storybook-Tooltip-8bb9dfa2.es.js";
import "./storybook-Icon-d8cd8abc.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-c8ea7d17.es.js";
import "./storybook-lodash-a4231e1c.es.js";
const y = {
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
const g = ["Example_1"];
export {
  e as Example_1,
  g as __namedExportsOrder,
  y as default
};
