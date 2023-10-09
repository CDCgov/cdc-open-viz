import { j as e, F as i } from "./storybook-a1762952.es.js";
import { D as s } from "./storybook-01609c38.es.js";
import "./storybook-2d1b80a2.es.js";
import "react";
import "./storybook-9d47a96f.es.js";
import "./storybook-8ffdcfbc.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-ea2aee40.es.js";
const l = {
  title: "Components/Organisms/DataDesigner",
  component: s
}, r = {
  args: {
    configureData: {
      dataDescription: "some description"
    }
  },
  render: (o) => /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(s, { ...o, children: "DataDesigner Content Here" }) })
};
var a, t, n;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(a = r.parameters) == null ? void 0 : a.docs,
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
      ...(n = (t = r.parameters) == null ? void 0 : t.docs) == null ? void 0 : n.source
    }
  }
};
const x = ["Primary"];
export {
  r as Primary,
  x as __namedExportsOrder,
  l as default
};
