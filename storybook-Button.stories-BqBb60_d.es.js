import { R as e } from "./storybook-index-BmAYD2Ot.es.js";
import { B as s } from "./storybook-Button-Djy4jtV0.es.js";
const n = ["", "cove-button--success", "cove-button--warn", "cove-button--muted"], l = {
  title: "Components/Atoms/Button",
  component: s
}, t = {
  render: (a) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(s, {
    ...a,
    className: n[0]
  }, "Button"), /* @__PURE__ */ e.createElement(s, {
    ...a,
    className: n[1]
  }, "Success"))
};
var o, r, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(o = t.parameters) == null ? void 0 : o.docs,
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
      ...(c = (r = t.parameters) == null ? void 0 : r.docs) == null ? void 0 : c.source
    }
  }
};
const p = ["Primary"];
export {
  t as Primary,
  p as __namedExportsOrder,
  l as default
};
