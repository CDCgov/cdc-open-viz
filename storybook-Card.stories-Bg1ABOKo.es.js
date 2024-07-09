import { R as e } from "./storybook-index-BmAYD2Ot.es.js";
import { C as o } from "./storybook-Card-BJIBA-PW.es.js";
const c = {
  title: "Components/Atoms/Card",
  component: o
}, r = {
  render: (s) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(o, {
    ...s
  }, "Card Content Here"))
};
var a, t, n;
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
      ...(n = (t = r.parameters) == null ? void 0 : t.docs) == null ? void 0 : n.source
    }
  }
};
const p = ["Primary"];
export {
  r as Primary,
  p as __namedExportsOrder,
  c as default
};
