import { j as e } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { B as n } from "./storybook-BlurStrokeText-f87cf8cc.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Text-0ce4510d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
const c = {
  title: "Components/Atoms/BlurStrokeText",
  component: n
}, r = {
  render: (a) => /* @__PURE__ */ e("svg", {
    width: "300",
    height: "100",
    style: {
      backgroundColor: "#464646"
    },
    children: /* @__PURE__ */ e(n, {
      ...a,
      children: "A feathered stroke option"
    })
  }),
  args: {
    fontSize: 15,
    y: 50,
    x: 50,
    blurRadius: 1,
    disableStroke: !1
  }
};
var t, o, s;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(t = r.parameters) == null ? void 0 : t.docs,
    source: {
      originalSource: `{
  render: args => <svg width='300' height='100' style={{
    backgroundColor: '#464646'
  }}>\r
      <BlurStrokeText {...args}>A feathered stroke option</BlurStrokeText>\r
    </svg>,
  args: {
    fontSize: 15,
    y: 50,
    x: 50,
    blurRadius: 1,
    disableStroke: false
  }
}`,
      ...(s = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source
    }
  }
};
const g = ["Default"];
export {
  r as Default,
  g as __namedExportsOrder,
  c as default
};
