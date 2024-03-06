import { R as t } from "./storybook-index-45401197.es.js";
import "./storybook-index-4ed993c7.es.js";
const b = ({ label: n, value: r, options: l, fieldName: s, section: i = null, subsection: o = null, required: m = !1, updateField: p, initial: c, ...u }) => {
  let a = [];
  if (Array.isArray(l))
    a = l.map((e) => /* @__PURE__ */ t.createElement("option", { value: e, key: e }, e));
  else {
    a = [];
    for (const [e, y] of Object.entries(l))
      a.push(
        /* @__PURE__ */ t.createElement("option", { value: e, key: e }, y)
      );
  }
  return c && a.unshift(
    /* @__PURE__ */ t.createElement("option", { value: "", key: "initial" }, c)
  ), /* @__PURE__ */ t.createElement("label", { style: { width: "100%", display: "block" } }, n && /* @__PURE__ */ t.createElement("span", { className: "edit-label cove-input__label" }, n), /* @__PURE__ */ t.createElement(
    "select",
    {
      className: m && !r ? "warning" : "",
      name: s,
      value: r,
      onChange: (e) => {
        p(i, o, s, e.target.value);
      },
      ...u
    },
    a
  ));
};
export {
  b as I
};
