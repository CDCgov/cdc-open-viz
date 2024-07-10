import { R as e } from "./storybook-index-9_ikpx_Z.es.js";
import { C as o } from "./storybook-Card-DY-SPxNI.es.js";
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
  render: args => <>
      <Card {...args}>Card Content Here</Card>
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
