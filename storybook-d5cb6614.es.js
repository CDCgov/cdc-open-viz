import { M as i } from "./storybook-9c0deada.es.js";
import { w as r, u as c } from "./storybook-4270bfae.es.js";
import "./storybook-e61d95ab.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-a16f6c8c.es.js";
import "./storybook-2ad7d390.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-398c73a4.es.js";
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
