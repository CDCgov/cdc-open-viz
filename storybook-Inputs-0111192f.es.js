import { r as o } from "./storybook-index-45401197.es.js";
import { u as h } from "./storybook-useDebounce-78f40efd.es.js";
const N = o.memo((p) => {
  const {
    display: f = !0,
    label: b,
    tooltip: r,
    section: a = null,
    subsection: t = null,
    fieldName: u,
    updateField: d,
    value: l,
    type: n = "text",
    i: E = null,
    min: i = null,
    ...m
  } = p, [c, e] = o.useState(l), [s] = h(c, 500);
  o.useEffect(() => {
    typeof s == "string" && l !== s && d(a, t, u, s, E);
  }, [s]), o.useEffect(() => {
    e(l);
  }, [l]);
  let R = t ? `${a}-${t}-${u}` : `${a}-${t}-${u}`;
  const g = (y) => {
    n !== "number" || i === null || !y.target.value || i <= parseFloat(y.target.value) ? e(y.target.value) : e(i.toString());
  };
  let v = /* @__PURE__ */ React.createElement("input", { type: "text", name: R, onChange: g, ...m, value: c });
  return n === "textarea" && (v = /* @__PURE__ */ React.createElement("textarea", { name: R, onChange: g, ...m, value: c })), n === "number" && (v = /* @__PURE__ */ React.createElement("input", { type: "number", name: R, onChange: g, ...m, value: c })), n === "date" && (v = /* @__PURE__ */ React.createElement("input", { type: "date", name: R, onChange: g, ...m, value: c })), f ? /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, b, r), v) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}), k = o.memo((p) => {
  const {
    display: f = !0,
    label: b,
    value: r,
    fieldName: a,
    section: t = null,
    subsection: u = null,
    tooltip: d,
    updateField: l,
    ...n
  } = p;
  return f ? /* @__PURE__ */ React.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      name: a,
      checked: r,
      onChange: (E) => {
        l(t, u, a, !r);
      },
      ...n
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, b, d)) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}), $ = o.memo((p) => {
  const {
    display: f = !0,
    label: b,
    value: r,
    options: a,
    fieldName: t,
    section: u = null,
    subsection: d = null,
    required: l = !1,
    tooltip: n,
    updateField: E,
    initial: i,
    ...m
  } = p, c = a.map((e, s) => typeof e == "string" ? /* @__PURE__ */ React.createElement("option", { value: e, key: s }, e) : /* @__PURE__ */ React.createElement("option", { value: e.value, key: s }, e.label));
  return i && c.unshift(
    /* @__PURE__ */ React.createElement("option", { value: "", key: "initial" }, i)
  ), f ? /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, b, n), /* @__PURE__ */ React.createElement(
    "select",
    {
      className: `cove-form-select ${l && !r ? "warning" : ""}`,
      name: t,
      value: r,
      onChange: (e) => {
        E(u, d, t, e.target.value);
      },
      ...m
    },
    c
  )) : /* @__PURE__ */ React.createElement(React.Fragment, null);
});
export {
  k as C,
  $ as S,
  N as T
};
