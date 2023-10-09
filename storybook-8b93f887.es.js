import { a as m, F as u, j as e } from "./storybook-a1762952.es.js";
import { B as t } from "./storybook-9d47a96f.es.js";
import "./storybook-2d1b80a2.es.js";
import "react";
import "./storybook-8ffdcfbc.es.js";
import "./storybook-92157f1b.es.js";
const o = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], g = {
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
const x = ["Primary"];
export {
  s as Primary,
  x as __namedExportsOrder,
  g as default
};
