import { a as m, F as u, j as e } from "./storybook-8087091f.es.js";
import { B as t } from "./storybook-8c5d6d8a.es.js";
import "react";
import "./storybook-38eee769.es.js";
import "./storybook-92157f1b.es.js";
const o = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], N = {
  title: "Components/Atoms/Button",
  component: t
}, s = {
  render: (r) => /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ e(t, { ...r, className: o[0], children: "Button" }),
    /* @__PURE__ */ e(t, { ...r, className: o[1], children: "Success" })
  ] })
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
