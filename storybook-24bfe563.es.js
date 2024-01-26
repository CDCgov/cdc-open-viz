import { r as u, R as e } from "./storybook-e61d95ab.es.js";
import { D as b } from "./storybook-c248303f.es.js";
import { A as g, a as f, b as E, c as D, d as P } from "./storybook-9c9b89fe.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-46a89ba7.es.js";
import "./storybook-5071fd94.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-d3e946a2.es.js";
import "./storybook-ca98149f.es.js";
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
  return /* @__PURE__ */ e.createElement(g, null, /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(E, null, /* @__PURE__ */ e.createElement(D, null, "Data Table")), /* @__PURE__ */ e.createElement(P, null, /* @__PURE__ */ e.createElement(b, { config: t, isDashboard: c, updateField: m, isLoadedFromUrl: !1 }))));
}, F = {
  title: "Components/Organisms/EditorPanel",
  component: A
}, a = {
  args: {
    config: {
      table: {
        label: "Data Table",
        show: !0
      },
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
      visualizationType: 'Pie'
    },
    isDashboard: true
  }
}`,
      ...(s = (n = a.parameters) == null ? void 0 : n.docs) == null ? void 0 : s.source
    }
  }
};
const O = ["Primary"];
export {
  a as Primary,
  O as __namedExportsOrder,
  F as default
};
