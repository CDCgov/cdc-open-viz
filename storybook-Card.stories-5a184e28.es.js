import { j as e, F as m } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { C as n } from "./storybook-Card-3d4604ee.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const C = {
  title: "Components/Atoms/Card",
  component: n
}, r = {
  render: (s) => /* @__PURE__ */ e(m, {
    children: /* @__PURE__ */ e(n, {
      ...s,
      children: "Card Content Here"
    })
  })
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
