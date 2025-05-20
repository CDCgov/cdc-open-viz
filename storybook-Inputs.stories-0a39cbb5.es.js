import { j as s } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { I as l } from "./storybook-InputSelect-4074d1ac.es.js";
import { r as d } from "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const u = ({
  config: c
}) => {
  const [t, p] = d.useState(c);
  return /* @__PURE__ */ s("div", {
    children: /* @__PURE__ */ s(l, {
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
}, _ = {
  title: "Components/Atoms/Inputs",
  component: u
}, e = {
  args: {
    config: {}
  }
};
var r, n, a;
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
      ...(a = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : a.source
    }
  }
};
const j = ["Select"];
export {
  e as Select,
  j as __namedExportsOrder,
  _ as default
};
