import { a as t, j as n } from "./storybook-jsx-runtime-36872362.es.js";
import { A as e } from "./storybook-Accordion-e48d2b15.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Icon-5df8fab3.es.js";
import "./storybook-Tooltip-b155742f.es.js";
const T = {
  title: "Components/Molecules/Accordion",
  component: e
}, o = {
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
  render: (c) => /* @__PURE__ */ t(e, {
    children: [/* @__PURE__ */ t(e.Section, {
      ...c,
      children: [/* @__PURE__ */ n("p", {
        children: "An accordion is used to show (and hide) HTML content."
      }), /* @__PURE__ */ n("p", {
        children: "Both the element that is used to open the accordion and the accordion's content can be any HTML element."
      })]
    }), /* @__PURE__ */ t(e.Section, {
      ...c,
      children: [/* @__PURE__ */ n("p", {
        children: "An accordion is used to show (and hide) HTML content."
      }), /* @__PURE__ */ n("p", {
        children: "Both the element that is used to open the accordion and the accordion's content can be any HTML element."
      })]
    })]
  })
};
var r, a, i;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(r = o.parameters) == null ? void 0 : r.docs,
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
      ...(i = (a = o.parameters) == null ? void 0 : a.docs) == null ? void 0 : i.source
    }
  }
};
const A = ["Primary"];
export {
  o as Primary,
  A as __namedExportsOrder,
  T as default
};
