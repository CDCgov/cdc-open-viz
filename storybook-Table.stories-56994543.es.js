import { a as c, j as t, F as l } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { T as d } from "./storybook-Table-7ddd1662.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const u = {
  title: "Components/Molecules/Table",
  component: d
};
function i() {
  const r = ["a", "b", "c"].map((o) => /* @__PURE__ */ t(l, {
    children: o
  }));
  return [r, r];
}
const e = {
  args: {
    childrenMatrix: i(),
    tableName: "COVE Table",
    headContent: /* @__PURE__ */ c("tr", {
      children: [/* @__PURE__ */ t("th", {
        children: "first"
      }), /* @__PURE__ */ t("th", {
        children: "second"
      }), /* @__PURE__ */ t("th", {
        children: "third"
      })]
    }),
    tableOptions: {
      className: "table table-bordered"
    }
  }
};
var a, n, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(a = e.parameters) == null ? void 0 : a.docs,
    source: {
      originalSource: `{
  args: {
    childrenMatrix: createMatrix(),
    tableName: 'COVE Table',
    headContent: <tr>\r
        <th>first</th>\r
        <th>second</th>\r
        <th>third</th>\r
      </tr>,
    tableOptions: {
      className: 'table table-bordered'
    }
  }
}`,
      ...(s = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : s.source
    }
  }
};
const x = ["Ungrouped"];
export {
  e as Ungrouped,
  x as __namedExportsOrder,
  u as default
};
