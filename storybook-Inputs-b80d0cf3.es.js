import { r as E, R as e } from "./storybook-index-45401197.es.js";
import { u as F } from "./storybook-useDebounce-78f40efd.es.js";
const $ = E.memo((p) => {
  const {
    display: f = !0,
    label: b,
    tooltip: u,
    section: a = null,
    subsection: l = null,
    fieldName: s,
    updateField: d,
    value: c,
    type: n = "text",
    i: g = null,
    min: m = null,
    ...o
  } = p, [r, t] = E.useState(c), [i] = F(r, 500);
  E.useEffect(() => {
    typeof i == "string" && c !== i && d(a, l, s, i, g);
  }, [i]);
  let v = l ? `${a}-${l}-${s}` : `${a}-${l}-${s}`;
  const y = (x) => {
    n !== "number" || m === null || !x.target.value || m <= parseFloat(x.target.value) ? t(x.target.value) : t(m.toString());
  };
  let h = /* @__PURE__ */ e.createElement("input", { type: "text", name: v, onChange: y, ...o, value: r });
  return n === "textarea" && (h = /* @__PURE__ */ e.createElement("textarea", { name: v, onChange: y, ...o, value: r })), n === "number" && (h = /* @__PURE__ */ e.createElement("input", { type: "number", name: v, onChange: y, ...o, value: r })), n === "date" && (h = /* @__PURE__ */ e.createElement("input", { type: "date", name: v, onChange: y, ...o, value: r })), f ? /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, b, u), h) : /* @__PURE__ */ e.createElement(e.Fragment, null);
}), C = E.memo((p) => {
  const {
    display: f = !0,
    label: b,
    value: u,
    fieldName: a,
    section: l = null,
    subsection: s = null,
    tooltip: d,
    updateField: c,
    ...n
  } = p;
  return f ? /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: a,
      checked: u,
      onChange: (g) => {
        c(l, s, a, !u);
      },
      ...n
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, b, d)) : /* @__PURE__ */ e.createElement(e.Fragment, null);
}), S = E.memo((p) => {
  const {
    display: f = !0,
    label: b,
    value: u,
    options: a,
    fieldName: l,
    section: s = null,
    subsection: d = null,
    required: c = !1,
    tooltip: n,
    updateField: g,
    initial: m,
    ...o
  } = p, r = a.map((t, i) => typeof t == "string" ? /* @__PURE__ */ e.createElement("option", { value: t, key: i }, t) : /* @__PURE__ */ e.createElement("option", { value: t.value, key: i }, t.label));
  return m && r.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, m)
  ), f ? /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, b, n), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: `cove-form-select ${c && !u ? "warning" : ""}`,
      name: l,
      value: u,
      onChange: (t) => {
        g(s, d, l, t.target.value);
      },
      ...o
    },
    r
  )) : /* @__PURE__ */ e.createElement(e.Fragment, null);
});
export {
  C,
  S,
  $ as T
};
