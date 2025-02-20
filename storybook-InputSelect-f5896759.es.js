import { j as l, a as m } from "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-index-4ed993c7.es.js";
const b = ({ label: t, value: s, options: a, fieldName: i, section: u = null, subsection: h = null, required: p = !1, updateField: d, initial: c, ...f }) => {
  let n = [];
  if (Array.isArray(a))
    n = a.map((e) => {
      if (typeof e == "string")
        return /* @__PURE__ */ l("option", { value: e, children: e }, e);
      {
        const [r, o] = e;
        return /* @__PURE__ */ l("option", { value: r, children: o }, o);
      }
    });
  else {
    n = [];
    for (const [e, r] of Object.entries(a))
      n.push(
        /* @__PURE__ */ l("option", { value: e, children: r }, e)
      );
  }
  return c && n.unshift(
    /* @__PURE__ */ l("option", { value: "", children: c }, "initial")
  ), /* @__PURE__ */ m("label", { style: { width: "100%", display: "block" }, children: [
    t && /* @__PURE__ */ l("span", { className: "edit-label cove-input__label", children: t }),
    /* @__PURE__ */ l(
      "select",
      {
        className: p && !s ? "warning" : "",
        name: i,
        value: s,
        onChange: (e) => {
          d(u, h, i, e.target.value);
        },
        ...f,
        children: n
      }
    )
  ] });
};
export {
  b as I
};
