import { R as e } from "./storybook-index-45401197.es.js";
import { T as i } from "./storybook-Table-12c53202.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const g = {
  title: "Components/Molecules/Table",
  component: i
};
function b() {
  const t = ["a", "b", "c"].map((n) => /* @__PURE__ */ e.createElement(e.Fragment, null, n));
  return [t, t];
}
const r = {
  args: {
    childrenMatrix: b(),
    tableName: "COVE Table",
    headContent: /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "first"), /* @__PURE__ */ e.createElement("th", null, "second"), /* @__PURE__ */ e.createElement("th", null, "third")),
    tableOptions: {
      className: "table table-bordered"
    }
  }
};
function h() {
  const t = ["a", "b", "c"].map((n) => /* @__PURE__ */ e.createElement(e.Fragment, null, n));
  return {
    group_1: [t, t],
    group_2: [t, t]
  };
}
const a = {
  args: {
    childrenMatrix: h(),
    tableName: "COVE Table",
    headContent: /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "first"), /* @__PURE__ */ e.createElement("th", null, "second"), /* @__PURE__ */ e.createElement("th", null, "third")),
    tableOptions: {
      className: "table table-bordered"
    }
  }
};
var l, o, s;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(l = r.parameters) == null ? void 0 : l.docs,
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
      ...(s = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source
    }
  }
};
var c, m, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(c = a.parameters) == null ? void 0 : c.docs,
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
      ...(d = (m = a.parameters) == null ? void 0 : m.docs) == null ? void 0 : d.source
    }
  }
};
const x = ["Ungrouped", "Grouped"];
export {
  a as Grouped,
  r as Ungrouped,
  x as __namedExportsOrder,
  g as default
};
