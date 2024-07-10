import { R as t } from "./storybook-index-45401197.es.js";
import "./storybook-index-4ed993c7.es.js";
const k = ({ label: r, value: s, options: l, fieldName: c, section: o = null, subsection: u = null, required: p = !1, updateField: y, initial: i, ...f }) => {
  let a = [];
  if (Array.isArray(l))
    a = l.map((e) => {
      if (typeof e == "string")
        return /* @__PURE__ */ t.createElement("option", { value: e, key: e }, e);
      {
        const [n, m] = e;
        return /* @__PURE__ */ t.createElement("option", { value: n, key: m }, m);
      }
    });
  else {
    a = [];
    for (const [e, n] of Object.entries(l))
      a.push(
        /* @__PURE__ */ t.createElement("option", { value: e, key: e }, n)
      );
  }
  return i && a.unshift(
    /* @__PURE__ */ t.createElement("option", { value: "", key: "initial" }, i)
  ), /* @__PURE__ */ t.createElement("label", { style: { width: "100%", display: "block" } }, r && /* @__PURE__ */ t.createElement("span", { className: "edit-label cove-input__label" }, r), /* @__PURE__ */ t.createElement(
    "select",
    {
      className: p && !s ? "warning" : "",
      name: c,
      value: s,
      onChange: (e) => {
        y(o, u, c, e.target.value);
      },
      ...f
    },
    a
  ));
};
export {
  k as I
};
