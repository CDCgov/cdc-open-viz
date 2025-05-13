import { j as r } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { I as l } from "./storybook-InputSelect-368b8698.es.js";
import { r as d } from "./storybook-index-f2fed736.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const u = ({
  config: c
}) => {
  const [t, p] = d.useState(c);
  return /* @__PURE__ */ r("div", {
    children: /* @__PURE__ */ r(l, {
      label: "Select",
      options: ["apple", "banana", "orange"],
      fieldName: "inputselect",
      updateField: (o, g, i, m) => {
        p({
          ...t,
          [o]: {
            ...t[o],
            [i]: m
          }
        });
      }
    })
  });
}, j = {
  title: "Components/Atoms/Inputs",
  component: u
}, e = {
  args: {
    config: {}
  }
};
var s, n, a;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(s = e.parameters) == null ? void 0 : s.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(a = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : a.source
    }
  }
};
const C = ["Select"];
export {
  e as Select,
  C as __namedExportsOrder,
  j as default
};
