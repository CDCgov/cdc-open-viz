import { B as a } from "./storybook-BlurStrokeText-adc27352.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
const c = {
  title: "Components/Atoms/BlurStrokeText",
  component: a
}, e = {
  render: (s) => /* @__PURE__ */ React.createElement("svg", {
    width: "300",
    height: "100",
    style: {
      backgroundColor: "#464646"
    }
  }, /* @__PURE__ */ React.createElement(a, {
    ...s
  }, "A feathered stroke option")),
  args: {
    fontSize: 15,
    y: 50,
    x: 50,
    blurRadius: 1,
    disableStroke: !1
  }
};
var t, r, o;
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
      ...(o = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : o.source
    }
  }
};
const u = ["Default"];
export {
  e as Default,
  u as __namedExportsOrder,
  c as default
};
