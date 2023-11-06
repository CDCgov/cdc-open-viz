import { R as e } from "./storybook-e61d95ab.es.js";
import { A as o } from "./storybook-603f8697.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-d6b8e24c.es.js";
import "./storybook-46a89ba7.es.js";
const h = {
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
  render: (t) => /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement(o.Section, { ...t }, /* @__PURE__ */ e.createElement("p", null, "An accordion is used to show (and hide) HTML content."), /* @__PURE__ */ e.createElement("p", null, "Both the element that is used to open the accordion and the accordion's content can be any HTML element.")), /* @__PURE__ */ e.createElement(o.Section, { ...t }, /* @__PURE__ */ e.createElement("p", null, "An accordion is used to show (and hide) HTML content."), /* @__PURE__ */ e.createElement("p", null, "Both the element that is used to open the accordion and the accordion's content can be any HTML element.")))
};
var c, r, a;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(c = n.parameters) == null ? void 0 : c.docs,
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
  render: args => <Accordion>
      <Accordion.Section {...args}>
        <p>An accordion is used to show (and hide) HTML content.</p>
        <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>
      </Accordion.Section>
      <Accordion.Section {...args}>
        <p>An accordion is used to show (and hide) HTML content.</p>
        <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>
      </Accordion.Section>
    </Accordion>
}`,
      ...(a = (r = n.parameters) == null ? void 0 : r.docs) == null ? void 0 : a.source
    }
  }
};
const u = ["Primary"];
export {
  n as Primary,
  u as __namedExportsOrder,
  h as default
};
