import { M as i } from "./storybook-MultiSelect-Bb0EhWsv.es.js";
import { w as r, u as c } from "./storybook-index-BBRfx4py.es.js";
const p = {
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
    updateField: (a, o, n, u) => {
    }
  },
  play: async ({
    canvasElement: a
  }) => {
    const n = r(a).getByRole("dialog");
    await c.hover(n);
  }
};
var l, t, s;
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
      ...(s = (t = e.parameters) == null ? void 0 : t.docs) == null ? void 0 : s.source
    }
  }
};
const d = ["Primary"];
export {
  e as Primary,
  d as __namedExportsOrder,
  p as default
};
