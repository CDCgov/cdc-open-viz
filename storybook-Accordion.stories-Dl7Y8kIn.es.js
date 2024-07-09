import { R as e } from "./storybook-index-BmAYD2Ot.es.js";
import { A as o } from "./storybook-Accordion-BJt7AwfQ.es.js";
const d = {
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
var c, a, r;
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
      ...(r = (a = n.parameters) == null ? void 0 : a.docs) == null ? void 0 : r.source
    }
  }
};
const l = ["Primary"];
export {
  n as Primary,
  l as __namedExportsOrder,
  d as default
};
