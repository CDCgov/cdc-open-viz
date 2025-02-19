import { T as m } from "./storybook-Table-437adc6c.es.js";
const u = {
  title: "Components/Molecules/Table",
  component: m
};
function i() {
  const e = ["a", "b", "c"].map((r) => /* @__PURE__ */ React.createElement(React.Fragment, null, r));
  return [e, e];
}
const t = {
  args: {
    childrenMatrix: i(),
    tableName: "COVE Table",
    headContent: /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "first"), /* @__PURE__ */ React.createElement("th", null, "second"), /* @__PURE__ */ React.createElement("th", null, "third")),
    tableOptions: {
      className: "table table-bordered"
    }
  }
};
function b() {
  const e = ["a", "b", "c"].map((r) => /* @__PURE__ */ React.createElement(React.Fragment, null, r));
  return {
    group_1: [e, e],
    group_2: [e, e]
  };
}
const a = {
  args: {
    childrenMatrix: b(),
    tableName: "COVE Table",
    headContent: /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "first"), /* @__PURE__ */ React.createElement("th", null, "second"), /* @__PURE__ */ React.createElement("th", null, "third")),
    tableOptions: {
      className: "table table-bordered"
    }
  }
};
var n, l, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(n = t.parameters) == null ? void 0 : n.docs,
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
      ...(c = (l = t.parameters) == null ? void 0 : l.docs) == null ? void 0 : c.source
    }
  }
};
var o, s, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(o = a.parameters) == null ? void 0 : o.docs,
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
      ...(d = (s = a.parameters) == null ? void 0 : s.docs) == null ? void 0 : d.source
    }
  }
};
const p = ["Ungrouped", "Grouped"];
export {
  a as Grouped,
  t as Ungrouped,
  p as __namedExportsOrder,
  u as default
};
