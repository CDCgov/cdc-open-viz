import { j as t } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { T as n } from "./storybook-index-4a64ea6e.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-31bf6905.es.js";
const c = {
  title: "Components/Atoms/Title",
  component: n,
  decorators: [(o) => /* @__PURE__ */ t("div", {
    className: "cdc-open-viz-module",
    children: /* @__PURE__ */ t(o, {})
  })]
}, e = {
  args: {
    title: "My Title",
    superTitle: "My super title",
    isDashboard: !1
  },
  argTypes: {
    theme: {
      control: "select",
      // or 'inline-radio' for horizontal layout
      options: ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber", "theme-grayscale"],
      defaultValue: "theme-blue"
    }
  }
};
var r, a, m;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(r = e.parameters) == null ? void 0 : r.docs,
    source: {
      originalSource: `{
  args: {
    title: 'My Title',
    superTitle: 'My super title',
    isDashboard: false
  },
  argTypes: {
    theme: {
      control: 'select',
      // or 'inline-radio' for horizontal layout
      options: ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber', 'theme-grayscale'],
      defaultValue: 'theme-blue'
    }
  }
}`,
      ...(m = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : m.source
    }
  }
};
const u = ["Primary"];
export {
  e as Primary,
  u as __namedExportsOrder,
  c as default
};
