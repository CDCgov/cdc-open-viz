import { T as a } from "./storybook-index-e5bf02db.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const m = {
  title: "Components/Atoms/Title",
  component: a
}, e = {
  args: {
    title: "My Title",
    superTitle: "My super title",
    isDashboard: !1,
    classes: ["theme-blue"]
  }
};
var s, t, r;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(s = e.parameters) == null ? void 0 : s.docs,
    source: {
      originalSource: `{
  args: {
    title: 'My Title',
    superTitle: 'My super title',
    isDashboard: false,
    classes: ['theme-blue']
  }
}`,
      ...(r = (t = e.parameters) == null ? void 0 : t.docs) == null ? void 0 : r.source
    }
  }
};
const n = ["Primary"];
export {
  e as Primary,
  n as __namedExportsOrder,
  m as default
};
