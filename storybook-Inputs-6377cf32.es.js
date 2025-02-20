import { r as d } from "./storybook-index-45401197.es.js";
import { u as h } from "./storybook-useDebounce-78f40efd.es.js";
const N = d.memo((o) => {
  const {
    display: p = !0,
    label: f,
    tooltip: c,
    section: a = null,
    subsection: t = null,
    fieldName: r,
    updateField: b,
    value: s,
    type: l = "text",
    i: E = null,
    min: i = null,
    ...m
  } = o, [n, e] = d.useState(s), [u] = h(n, 500);
  d.useEffect(() => {
    typeof u == "string" && s !== u && b(a, t, r, u, E);
  }, [u]);
  let R = t ? `${a}-${t}-${r}` : `${a}-${t}-${r}`;
  const g = (y) => {
    l !== "number" || i === null || !y.target.value || i <= parseFloat(y.target.value) ? e(y.target.value) : e(i.toString());
  };
  let v = /* @__PURE__ */ React.createElement("input", { type: "text", name: R, onChange: g, ...m, value: n });
  return l === "textarea" && (v = /* @__PURE__ */ React.createElement("textarea", { name: R, onChange: g, ...m, value: n })), l === "number" && (v = /* @__PURE__ */ React.createElement("input", { type: "number", name: R, onChange: g, ...m, value: n })), l === "date" && (v = /* @__PURE__ */ React.createElement("input", { type: "date", name: R, onChange: g, ...m, value: n })), p ? /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, f, c), v) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}), k = d.memo((o) => {
  const {
    display: p = !0,
    label: f,
    value: c,
    fieldName: a,
    section: t = null,
    subsection: r = null,
    tooltip: b,
    updateField: s,
    ...l
  } = o;
  return p ? /* @__PURE__ */ React.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      name: a,
      checked: c,
      onChange: (E) => {
        s(t, r, a, !c);
      },
      ...l
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, f, b)) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}), $ = d.memo((o) => {
  const {
    display: p = !0,
    label: f,
    value: c,
    options: a,
    fieldName: t,
    section: r = null,
    subsection: b = null,
    required: s = !1,
    tooltip: l,
    updateField: E,
    initial: i,
    ...m
  } = o, n = a.map((e, u) => typeof e == "string" ? /* @__PURE__ */ React.createElement("option", { value: e, key: u }, e) : /* @__PURE__ */ React.createElement("option", { value: e.value, key: u }, e.label));
  return i && n.unshift(
    /* @__PURE__ */ React.createElement("option", { value: "", key: "initial" }, i)
  ), p ? /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, f, l), /* @__PURE__ */ React.createElement(
    "select",
    {
      className: `cove-form-select ${s && !c ? "warning" : ""}`,
      name: t,
      value: c,
      onChange: (e) => {
        E(r, b, t, e.target.value);
      },
      ...m
    },
    n
  )) : /* @__PURE__ */ React.createElement(React.Fragment, null);
});
export {
  k as C,
  $ as S,
  N as T
};
