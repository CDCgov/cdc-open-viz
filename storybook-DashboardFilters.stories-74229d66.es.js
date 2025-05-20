import { D as o } from "./storybook-DashboardFilters-e10b86fa.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-MultiSelect-2a170cbd.es.js";
import "./storybook-Tooltip-5b6ee371.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-Dropdown-1c93166f.es.js";
const u = {
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
const b = ["Example_1"];
export {
  e as Example_1,
  b as __namedExportsOrder,
  u as default
};
