import { R as e } from "./storybook-index-BmAYD2Ot.es.js";
import { B as s } from "./storybook-Button-Djy4jtV0.es.js";
const a = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], l = {
  title: "Components/Atoms/Button",
  component: s
}, t = {
  render: (r) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(s, {
    ...r,
    className: a[0]
  }, "Button"), /* @__PURE__ */ e.createElement(s, {
    ...r,
    className: a[1]
  }, "Success"))
};
var n, o, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(n = t.parameters) == null ? void 0 : n.docs,
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
      ...(c = (o = t.parameters) == null ? void 0 : o.docs) == null ? void 0 : c.source
    }
  }
};
const p = ["Primary"];
export {
  t as Primary,
  p as __namedExportsOrder,
  l as default
};
