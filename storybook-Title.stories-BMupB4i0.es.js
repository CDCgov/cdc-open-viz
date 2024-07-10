import { T as a } from "./storybook-index-BQ51CJ1t.es.js";
const l = {
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
const i = ["Primary"];
export {
  e as Primary,
  i as __namedExportsOrder,
  l as default
};
