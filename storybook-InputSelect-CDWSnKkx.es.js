/* empty css                            */
const E = ({ label: n, value: c, options: a, fieldName: r, section: u = null, subsection: m = null, required: o = !1, updateField: p, initial: s, ...y }) => {
  let t = [];
  if (Array.isArray(a))
    t = a.map((e) => {
      if (typeof e == "string")
        return /* @__PURE__ */ React.createElement("option", { value: e, key: e }, e);
      {
        const [l, i] = e;
        return /* @__PURE__ */ React.createElement("option", { value: l, key: i }, i);
      }
    });
  else {
    t = [];
    for (const [e, l] of Object.entries(a))
      t.push(
        /* @__PURE__ */ React.createElement("option", { value: e, key: e }, l)
      );
  }
  return s && t.unshift(
    /* @__PURE__ */ React.createElement("option", { value: "", key: "initial" }, s)
  ), /* @__PURE__ */ React.createElement("label", { style: { width: "100%", display: "block" } }, n && /* @__PURE__ */ React.createElement("span", { className: "edit-label cove-input__label" }, n), /* @__PURE__ */ React.createElement(
    "select",
    {
      className: o && !c ? "warning" : "",
      name: r,
      value: c,
      onChange: (e) => {
        p(u, m, r, e.target.value);
      },
      ...y
    },
    t
  ));
};
export {
  E as I
};
