import { R as r } from "./storybook-e61d95ab.es.js";
import { D as s } from "./storybook-0d7692d1.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-8d78bf52.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-c11e9ca9.es.js";
const d = {
  title: "Components/Organisms/DataDesigner",
  component: s
}, e = {
  args: {
    configureData: {
      dataDescription: "some description"
    }
  },
  render: (o) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(s, {
    ...o
  }, "DataDesigner Content Here"))
};
var a, t, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(a = e.parameters) == null ? void 0 : a.docs,
    source: {
      originalSource: `{
  args: {
    configureData: {
      dataDescription: 'some description'
    }
  },
  render: args => <>\r
      <DataDesigner {...args}>DataDesigner Content Here</DataDesigner>\r
    </>
}`,
      ...(n = (t = e.parameters) == null ? void 0 : t.docs) == null ? void 0 : n.source
    }
  }
};
const l = ["Primary"];
export {
  e as Primary,
  l as __namedExportsOrder,
  d as default
};
