import { D as u } from "./storybook-DataTableEditor-BUtAyse4.es.js";
import { A as p, a as b, b as g, c as f, d as E } from "./storybook-index-S2sDPfKi.es.js";
import { r as D } from "./storybook-index-BmAYD2Ot.es.js";
const P = () => {
  const {
    config: s,
    isDashboard: c
  } = e.args, [a, l] = D.useState(s), i = (t, A, m, d) => {
    l({
      ...a,
      [t]: {
        ...a[t],
        [m]: d
      }
    });
  };
  return /* @__PURE__ */ React.createElement(p, null, /* @__PURE__ */ React.createElement(b, null, /* @__PURE__ */ React.createElement(g, null, /* @__PURE__ */ React.createElement(f, null, "Data Table")), /* @__PURE__ */ React.createElement(E, null, /* @__PURE__ */ React.createElement(u, {
    config: a,
    isDashboard: c,
    updateField: i,
    isLoadedFromUrl: !1
  }))));
}, y = {
  title: "Components/Organisms/EditorPanel",
  component: P
}, e = {
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
var r, n, o;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(r = e.parameters) == null ? void 0 : r.docs,
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
      ...(o = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : o.source
    }
  }
};
const I = ["Primary"];
export {
  e as Primary,
  I as __namedExportsOrder,
  y as default
};
