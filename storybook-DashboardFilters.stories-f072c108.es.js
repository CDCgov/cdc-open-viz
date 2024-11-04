import { D as n } from "./storybook-DashboardFilters-2d094f5f.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-MultiSelect-25c4ae51.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-Icon-73ec66ec.es.js";
import "./storybook-NestedDropdown-7810a864.es.js";
const c = {
  title: "Components/Atoms/Inputs/DashboardFilters",
  component: n
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
var t, a, r;
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
      ...(r = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : r.source
    }
  }
};
const h = ["Example_1"];
export {
  e as Example_1,
  h as __namedExportsOrder,
  c as default
};
