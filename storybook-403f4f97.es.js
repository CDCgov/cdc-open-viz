import { j as e, F as i } from "./storybook-8087091f.es.js";
import { D as s } from "./storybook-a2b81ceb.es.js";
import "react";
import "./storybook-8c5d6d8a.es.js";
import "./storybook-38eee769.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-90f6dc9a.es.js";
const f = {
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
const l = ["Primary"];
export {
  r as Primary,
  l as __namedExportsOrder,
  f as default
};
