import { I as i } from "./storybook-InputSelect-CDWSnKkx.es.js";
import { r as u } from "./storybook-index-9_ikpx_Z.es.js";
const d = ({
  config: r
}) => {
  const [t, c] = u.useState(r), p = (n, f, l, m) => {
    c({
      ...t,
      [n]: {
        ...t[n],
        [l]: m
      }
    });
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(i, {
    label: "Select",
    options: ["apple", "banana", "orange"],
    fieldName: "inputselect",
    updateField: p
  }));
}, E = {
  title: "Components/Atoms/Inputs",
  component: d
}, e = {
  args: {
    config: {}
  }
};
var o, a, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(o = e.parameters) == null ? void 0 : o.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(s = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : s.source
    }
  }
};
const I = ["Select"];
export {
  e as Select,
  I as __namedExportsOrder,
  E as default
};
