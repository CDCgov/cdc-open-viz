import { M as i } from "./storybook-MultiSelect-6122f1ba.es.js";
import { w as r, u as c } from "./storybook-index-71edeac5.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Tooltip-5f8a49cd.es.js";
import "./storybook-Icon-48ed169f.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-index-398c73a4.es.js";
const h = {
  title: "Components/Molecules/MultiSelect",
  component: i
}, e = {
  args: {
    options: [{
      value: "1",
      label: "One"
    }, {
      value: "2",
      label: "Two"
    }, {
      value: "3",
      label: "Three"
    }, {
      value: "4",
      label: "This is a really long option"
    }],
    selected: ["1", "2"],
    limit: 3,
    label: "MultiSelect",
    updateField: (a, s, n, u) => {
    }
  },
  play: async ({
    canvasElement: a
  }) => {
    const n = r(a).getByRole("dialog");
    await c.hover(n);
  }
};
var l, t, o;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(l = e.parameters) == null ? void 0 : l.docs,
    source: {
      originalSource: `{
  args: {
    options: [{
      value: '1',
      label: 'One'
    }, {
      value: '2',
      label: 'Two'
    }, {
      value: '3',
      label: 'Three'
    }, {
      value: '4',
      label: 'This is a really long option'
    }],
    selected: ['1', '2'],
    limit: 3,
    label: 'MultiSelect',
    updateField: (section, subsection, fieldName, value) => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const questionMark = canvas.getByRole('dialog');
    await userEvent.hover(questionMark);
  }
}`,
      ...(o = (t = e.parameters) == null ? void 0 : t.docs) == null ? void 0 : o.source
    }
  }
};
const w = ["Primary"];
export {
  e as Primary,
  w as __namedExportsOrder,
  h as default
};
