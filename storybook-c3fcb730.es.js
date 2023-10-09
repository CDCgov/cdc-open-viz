import { j as e, F as m } from "./storybook-a1762952.es.js";
import { C as n } from "./storybook-ea2aee40.es.js";
import "./storybook-2d1b80a2.es.js";
import "react";
const C = {
  title: "Components/Atoms/Card",
  component: n
}, r = {
  render: (s) => /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(n, { ...s, children: "Card Content Here" }) })
};
var a, o, t;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(a = r.parameters) == null ? void 0 : a.docs,
    source: {
      originalSource: `{
  render: args => <>\r
      <Card {...args}>Card Content Here</Card>\r
    </>
}`,
      ...(t = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : t.source
    }
  }
};
const l = ["Primary"];
export {
  r as Primary,
  l as __namedExportsOrder,
  C as default
};
