import { a as m, F as u, j as o } from "./storybook-jsx-runtime-36872362.es.js";
import { B as t } from "./storybook-Button-9d1b8d73.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-43433e35.es.js";
const a = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], N = {
  title: "Components/Atoms/Button",
  component: t
}, s = {
  render: (e) => /* @__PURE__ */ m(u, {
    children: [/* @__PURE__ */ o(t, {
      ...e,
      className: a[0],
      children: "Button"
    }), /* @__PURE__ */ o(t, {
      ...e,
      className: a[1],
      children: "Success"
    })]
  })
};
var r, n, c;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(r = s.parameters) == null ? void 0 : r.docs,
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
      ...(c = (n = s.parameters) == null ? void 0 : n.docs) == null ? void 0 : c.source
    }
  }
};
const g = ["Primary"];
export {
  s as Primary,
  g as __namedExportsOrder,
  N as default
};
