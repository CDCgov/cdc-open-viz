import { a as m, F as u, j as e } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { B as t } from "./storybook-Button-f953e457.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-43433e35.es.js";
const o = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], N = {
  title: "Components/Atoms/Button",
  component: t
}, s = {
  render: (r) => /* @__PURE__ */ m(u, {
    children: [/* @__PURE__ */ e(t, {
      ...r,
      className: o[0],
      children: "Button"
    }), /* @__PURE__ */ e(t, {
      ...r,
      className: o[1],
      children: "Success"
    })]
  })
};
var a, n, c;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(a = s.parameters) == null ? void 0 : a.docs,
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
