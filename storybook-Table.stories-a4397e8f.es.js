import { a as h, j as e, F as b } from "./storybook-jsx-runtime-36872362.es.js";
import { T as p } from "./storybook-Table-1cfab80e.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const M = {
  title: "Components/Molecules/Table",
  component: p
};
function m() {
  const t = ["a", "b", "c"].map((n) => /* @__PURE__ */ e(b, {
    children: n
  }));
  return [t, t];
}
const r = {
  args: {
    childrenMatrix: m(),
    tableName: "COVE Table",
    headContent: /* @__PURE__ */ h("tr", {
      children: [/* @__PURE__ */ e("th", {
        children: "first"
      }), /* @__PURE__ */ e("th", {
        children: "second"
      }), /* @__PURE__ */ e("th", {
        children: "third"
      })]
    }),
    tableOptions: {
      className: "table table-bordered"
    }
  }
};
function u() {
  const t = ["a", "b", "c"].map((n) => /* @__PURE__ */ e(b, {
    children: n
  }));
  return {
    group_1: [t, t],
    group_2: [t, t]
  };
}
const a = {
  args: {
    childrenMatrix: u(),
    tableName: "COVE Table",
    headContent: /* @__PURE__ */ h("tr", {
      children: [/* @__PURE__ */ e("th", {
        children: "first"
      }), /* @__PURE__ */ e("th", {
        children: "second"
      }), /* @__PURE__ */ e("th", {
        children: "third"
      })]
    }),
    tableOptions: {
      className: "table table-bordered"
    }
  }
};
var s, o, c;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(s = r.parameters) == null ? void 0 : s.docs,
    source: {
      originalSource: `{
  args: {
    childrenMatrix: createMatrix(),
    tableName: 'COVE Table',
    headContent: <tr>
        <th>first</th>
        <th>second</th>
        <th>third</th>
      </tr>,
    tableOptions: {
      className: 'table table-bordered'
    }
  }
}`,
      ...(c = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : c.source
    }
  }
};
var d, l, i;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(d = a.parameters) == null ? void 0 : d.docs,
    source: {
      originalSource: `{
  args: {
    childrenMatrix: createGroupMatrix(),
    tableName: 'COVE Table',
    headContent: <tr>
        <th>first</th>
        <th>second</th>
        <th>third</th>
      </tr>,
    tableOptions: {
      className: 'table table-bordered'
    }
  }
}`,
      ...(i = (l = a.parameters) == null ? void 0 : l.docs) == null ? void 0 : i.source
    }
  }
};
const O = ["Ungrouped", "Grouped"];
export {
  a as Grouped,
  r as Ungrouped,
  O as __namedExportsOrder,
  M as default
};
