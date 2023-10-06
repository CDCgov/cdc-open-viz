import { j as e, F as m } from "./storybook-8087091f.es.js";
import { C as n } from "./storybook-90f6dc9a.es.js";
import "react";
const i = {
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
const C = ["Primary"];
export {
  r as Primary,
  C as __namedExportsOrder,
  i as default
};
