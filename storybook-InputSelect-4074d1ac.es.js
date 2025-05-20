import { j as l, a as m } from "./storybook-jsx-runtime-ea6e0d87.es.js";
const x = ({ label: t, value: r, options: a, fieldName: i, section: u = null, subsection: h = null, required: d = !1, updateField: p, initial: c, ...f }) => {
  let n = [];
  if (Array.isArray(a))
    n = a.map((e) => {
      if (typeof e == "string")
        return /* @__PURE__ */ l("option", { value: e, children: e }, e);
      {
        const [s, o] = e;
        return /* @__PURE__ */ l("option", { value: s, children: o }, o);
      }
    });
  else {
    n = [];
    for (const [e, s] of Object.entries(a))
      n.push(
        /* @__PURE__ */ l("option", { value: e, children: s }, e)
      );
  }
  return c && n.unshift(
    /* @__PURE__ */ l("option", { value: "", children: c }, "initial")
  ), /* @__PURE__ */ m("label", { style: { width: "100%", display: "block" }, children: [
    t && /* @__PURE__ */ l("span", { className: "edit-label cove-input__label", children: t }),
    /* @__PURE__ */ l(
      "select",
      {
        className: d && !r ? "warning" : "",
        name: i,
        value: r,
        onChange: (e) => {
          p(u, h, i, e.target.value);
        },
        ...f,
        children: n
      }
    )
  ] });
};
export {
  x as I
};
