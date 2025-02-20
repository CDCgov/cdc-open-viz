import { R as e } from "./storybook-index-45401197.es.js";
import { C as n } from "./storybook-Card-6750b07b.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const p = {
  title: "Components/Atoms/Card",
  component: n
}, r = {
  render: (s) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(n, {
    ...s
  }, "Card Content Here"))
};
var a, t, o;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(a = r.parameters) == null ? void 0 : a.docs,
    source: {
      originalSource: `{
  render: args => <>
      <Card {...args}>Card Content Here</Card>
    </>
}`,
      ...(o = (t = r.parameters) == null ? void 0 : t.docs) == null ? void 0 : o.source
    }
  }
};
const C = ["Primary"];
export {
  r as Primary,
  C as __namedExportsOrder,
  p as default
};
