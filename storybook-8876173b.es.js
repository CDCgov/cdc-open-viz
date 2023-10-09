import { a as t, j as n } from "./storybook-8087091f.es.js";
import { A as e } from "./storybook-7fb66883.es.js";
import "react";
import "./storybook-38eee769.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-d1acf01b.es.js";
import "./storybook-4c9e0b29.es.js";
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
var c, a, i;
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
