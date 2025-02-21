import { R as t } from "./storybook-index-45401197.es.js";
import { B as s } from "./storybook-Button-63da743c.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-43433e35.es.js";
const n = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], d = {
  title: "Components/Atoms/Button",
  component: s
}, e = {
  render: (a) => /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(s, {
    ...a,
    className: n[0]
  }, "Button"), /* @__PURE__ */ t.createElement(s, {
    ...a,
    className: n[1]
  }, "Success"))
};
var o, r, c;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(o = e.parameters) == null ? void 0 : o.docs,
    source: {
      originalSource: `{
  render: args => <>
      <Button {...args} className={classNames[0]}>
        Button
      </Button>
      <Button {...args} className={classNames[1]}>
        Success
      </Button>
    </>
}`,
      ...(c = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : c.source
    }
  }
};
const i = ["Primary"];
export {
  e as Primary,
  i as __namedExportsOrder,
  d as default
};
