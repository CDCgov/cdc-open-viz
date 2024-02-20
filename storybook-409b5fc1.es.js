import { r as u, R as n } from "./storybook-e61d95ab.es.js";
import { I as d } from "./storybook-deb084b6.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-4ed993c7.es.js";
const f = ({
  config: c
}) => {
  const [t, p] = u.useState(c), m = (o, g, l, i) => {
    p({
      ...t,
      [o]: {
        ...t[o],
        [l]: i
      }
    });
  };
  return /* @__PURE__ */ n.createElement("div", null, /* @__PURE__ */ n.createElement(d, {
    label: "Select",
    options: ["apple", "banana", "orange"],
    fieldName: "inputselect",
    updateField: m
  }));
}, x = {
  title: "Components/Atoms/Inputs",
  component: f
}, e = {
  args: {
    config: {}
  }
};
var r, s, a;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(r = e.parameters) == null ? void 0 : r.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(a = (s = e.parameters) == null ? void 0 : s.docs) == null ? void 0 : a.source
    }
  }
};
const _ = ["Select"];
export {
  e as Select,
  _ as __namedExportsOrder,
  x as default
};
