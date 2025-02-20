import { j as r } from "./storybook-jsx-runtime-36872362.es.js";
import { B as n } from "./storybook-BlurStrokeText-7561b486.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
const c = {
  title: "Components/Atoms/BlurStrokeText",
  component: n
}, e = {
  render: (a) => /* @__PURE__ */ r("svg", {
    width: "300",
    height: "100",
    style: {
      backgroundColor: "#464646"
    },
    children: /* @__PURE__ */ r(n, {
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
e.parameters = {
  ...e.parameters,
  docs: {
    ...(t = e.parameters) == null ? void 0 : t.docs,
    source: {
      originalSource: `{
  render: args => <svg width='300' height='100' style={{
    backgroundColor: '#464646'
  }}>
      <BlurStrokeText {...args}>A feathered stroke option</BlurStrokeText>
    </svg>,
  args: {
    fontSize: 15,
    y: 50,
    x: 50,
    blurRadius: 1,
    disableStroke: false
  }
}`,
      ...(s = (o = e.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source
    }
  }
};
const g = ["Default"];
export {
  e as Default,
  g as __namedExportsOrder,
  c as default
};
