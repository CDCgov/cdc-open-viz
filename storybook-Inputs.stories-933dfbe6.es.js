import { I as i } from "./storybook-InputSelect-76dbb8cb.es.js";
import { r as u } from "./storybook-index-45401197.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const d = ({
  config: s
}) => {
  const [t, c] = u.useState(s), p = (o, f, m, l) => {
    c({
      ...t,
      [o]: {
        ...t[o],
        [m]: l
      }
    });
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(i, {
    label: "Select",
    options: ["apple", "banana", "orange"],
    fieldName: "inputselect",
    updateField: p
  }));
}, b = {
  title: "Components/Atoms/Inputs",
  component: d
}, e = {
  args: {
    config: {}
  }
};
var n, r, a;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(n = e.parameters) == null ? void 0 : n.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(a = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : a.source
    }
  }
};
const x = ["Select"];
export {
  e as Select,
  x as __namedExportsOrder,
  b as default
};
