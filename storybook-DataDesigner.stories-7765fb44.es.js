import { R as r } from "./storybook-index-45401197.es.js";
import { D as s } from "./storybook-DataDesigner-31ee8381.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Card-6750b07b.es.js";
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
  render: args => <>
      <DataDesigner {...args}>DataDesigner Content Here</DataDesigner>
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
