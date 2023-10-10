import { R as r } from "./storybook-b5af0f4a.es.js";
import { D as s } from "./storybook-32e8cca6.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-71ea65e0.es.js";
import "./storybook-38eee769.es.js";
import "./storybook-e756a062.es.js";
const d = {
  title: "Components/Organisms/DataDesigner",
  component: s
}, e = {
  args: {
    configureData: {
      dataDescription: "some description"
    }
  },
  render: (o) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(s, { ...o }, "DataDesigner Content Here"))
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
