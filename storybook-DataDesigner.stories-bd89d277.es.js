import { j as e, F as i } from "./storybook-jsx-runtime-36872362.es.js";
import { D as s } from "./storybook-DataDesigner-246dc688.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Button-9d1b8d73.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Card-060dcfc3.es.js";
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
  render: args => <>
      <DataDesigner {...args}>DataDesigner Content Here</DataDesigner>
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
