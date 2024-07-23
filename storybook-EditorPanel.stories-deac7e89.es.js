import { r as u, R as e } from "./storybook-index-45401197.es.js";
import { D as b } from "./storybook-DataTableEditor-5aedf4d7.es.js";
import { A as g, a as f, b as E, c as D, d as P } from "./storybook-index-e502eacf.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Tooltip-edc0f7ab.es.js";
import "./storybook-Icon-96a1fdd8.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-MultiSelect-1c07e577.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
const A = () => {
  const {
    config: i,
    isDashboard: c
  } = a.args, [t, l] = u.useState(i), m = (r, T, p, d) => {
    l({
      ...t,
      [r]: {
        ...t[r],
        [p]: d
      }
    });
  };
  return /* @__PURE__ */ e.createElement(g, null, /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(E, null, /* @__PURE__ */ e.createElement(D, null, "Data Table")), /* @__PURE__ */ e.createElement(P, null, /* @__PURE__ */ e.createElement(b, {
    config: t,
    isDashboard: c,
    updateField: m,
    isLoadedFromUrl: !1
  }))));
}, O = {
  title: "Components/Organisms/EditorPanel",
  component: A
}, a = {
  args: {
    config: {
      table: {
        label: "Data Table",
        show: !0
      },
      columns: {},
      visualizationType: "Pie"
    },
    isDashboard: !0
  }
};
var o, n, s;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(o = a.parameters) == null ? void 0 : o.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      table: {
        label: 'Data Table',
        show: true
      },
      columns: {},
      visualizationType: 'Pie'
    },
    isDashboard: true
  }
}`,
      ...(s = (n = a.parameters) == null ? void 0 : n.docs) == null ? void 0 : s.source
    }
  }
};
const R = ["Primary"];
export {
  a as Primary,
  R as __namedExportsOrder,
  O as default
};
