import { j as e, F as i } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { D as s } from "./storybook-DataDesigner-9363c314.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Button-f953e457.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Card-3d4604ee.es.js";
const f = {
  title: "Components/Organisms/DataDesigner",
  component: s
}, r = {
  args: {
    configureData: {
      dataDescription: "some description"
    }
  },
  render: (o) => /* @__PURE__ */ e(i, {
    children: /* @__PURE__ */ e(s, {
      ...o,
      children: "DataDesigner Content Here"
    })
  })
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
