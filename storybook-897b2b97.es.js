import { R as e } from "./storybook-b5af0f4a.es.js";
import { C as n } from "./storybook-e756a062.es.js";
import "./storybook-92157f1b.es.js";
const p = {
  title: "Components/Atoms/Card",
  component: n
}, r = {
  render: (s) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(n, { ...s }, "Card Content Here"))
};
var a, t, o;
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
