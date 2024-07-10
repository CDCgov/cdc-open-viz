import { R as r } from "./storybook-index-9_ikpx_Z.es.js";
import { D as s } from "./storybook-DataDesigner-CBLZCJO_.es.js";
const c = {
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
var a, n, t;
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
      ...(t = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : t.source
    }
  }
};
const D = ["Primary"];
export {
  e as Primary,
  D as __namedExportsOrder,
  c as default
};
