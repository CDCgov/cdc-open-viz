import { R as t } from "./storybook-b5af0f4a.es.js";
import { B as s } from "./storybook-71ea65e0.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-38eee769.es.js";
const a = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], d = {
  title: "Components/Atoms/Button",
  component: s
}, e = {
  render: (r) => /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(s, { ...r, className: a[0] }, "Button"), /* @__PURE__ */ t.createElement(s, { ...r, className: a[1] }, "Success"))
};
var n, o, c;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(n = e.parameters) == null ? void 0 : n.docs,
    source: {
      originalSource: `{
  render: args => <>\r
      <Button {...args} className={classNames[0]}>\r
        Button\r
      </Button>\r
      <Button {...args} className={classNames[1]}>\r
        Success\r
      </Button>\r
    </>
}`,
      ...(c = (o = e.parameters) == null ? void 0 : o.docs) == null ? void 0 : c.source
    }
  }
};
const i = ["Primary"];
export {
  e as Primary,
  i as __namedExportsOrder,
  d as default
};
