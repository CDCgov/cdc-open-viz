import { R as e } from "./storybook-index-45401197.es.js";
import { A as o } from "./storybook-Accordion-dbc41a5b.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Icon-b09f76c0.es.js";
import "./storybook-Tooltip-edc0f7ab.es.js";
const u = {
  title: "Components/Molecules/Accordion",
  component: o
}, n = {
  args: {
    title: "Collapsed Section Content",
    warnIf: !0,
    tooltipText: "This is an <strong>example</strong> tooltip."
  },
  argTypes: {
    warnIf: {
      control: "boolean"
    }
  },
  render: (t) => /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement(o.Section, {
    ...t
  }, /* @__PURE__ */ e.createElement("p", null, "An accordion is used to show (and hide) HTML content."), /* @__PURE__ */ e.createElement("p", null, "Both the element that is used to open the accordion and the accordion's content can be any HTML element.")), /* @__PURE__ */ e.createElement(o.Section, {
    ...t
  }, /* @__PURE__ */ e.createElement("p", null, "An accordion is used to show (and hide) HTML content."), /* @__PURE__ */ e.createElement("p", null, "Both the element that is used to open the accordion and the accordion's content can be any HTML element.")))
};
var r, c, a;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(r = n.parameters) == null ? void 0 : r.docs,
    source: {
      originalSource: `{
  args: {
    title: 'Collapsed Section Content',
    warnIf: 1 === 1,
    tooltipText: 'This is an <strong>example</strong> tooltip.'
  },
  argTypes: {
    warnIf: {
      control: 'boolean'
    }
  },
  render: args => <Accordion>\r
      <Accordion.Section {...args}>\r
        <p>An accordion is used to show (and hide) HTML content.</p>\r
        <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>\r
      </Accordion.Section>\r
      <Accordion.Section {...args}>\r
        <p>An accordion is used to show (and hide) HTML content.</p>\r
        <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>\r
      </Accordion.Section>\r
    </Accordion>
}`,
      ...(a = (c = n.parameters) == null ? void 0 : c.docs) == null ? void 0 : a.source
    }
  }
};
const T = ["Primary"];
export {
  n as Primary,
  T as __namedExportsOrder,
  u as default
};
