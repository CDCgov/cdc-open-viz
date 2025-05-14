import { M as i } from "./storybook-MultiSelect-cda00383.es.js";
import { w as r, u as c } from "./storybook-index-c7c10200.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Tooltip-7cf39805.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-index-398c73a4.es.js";
const w = {
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
const T = ["Primary"];
export {
  e as Primary,
  T as __namedExportsOrder,
  w as default
};
