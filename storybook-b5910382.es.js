import { a as t, j as n } from "./storybook-a1762952.es.js";
import { A as e } from "./storybook-505d9a24.es.js";
import "./storybook-2d1b80a2.es.js";
import "react";
import "./storybook-8ffdcfbc.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-ba379c3c.es.js";
import "./storybook-7d6e2240.es.js";
const A = {
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
  render: (r) => /* @__PURE__ */ t(e, { children: [
    /* @__PURE__ */ t(e.Section, { ...r, children: [
      /* @__PURE__ */ n("p", { children: "An accordion is used to show (and hide) HTML content." }),
      /* @__PURE__ */ n("p", { children: "Both the element that is used to open the accordion and the accordion's content can be any HTML element." })
    ] }),
    /* @__PURE__ */ t(e.Section, { ...r, children: [
      /* @__PURE__ */ n("p", { children: "An accordion is used to show (and hide) HTML content." }),
      /* @__PURE__ */ n("p", { children: "Both the element that is used to open the accordion and the accordion's content can be any HTML element." })
    ] })
  ] })
};
var c, i, a;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(c = o.parameters) == null ? void 0 : c.docs,
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
      ...(a = (i = o.parameters) == null ? void 0 : i.docs) == null ? void 0 : a.source
    }
  }
};
const g = ["Primary"];
export {
  o as Primary,
  g as __namedExportsOrder,
  A as default
};
