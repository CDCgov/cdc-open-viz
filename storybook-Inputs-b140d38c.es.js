import { j as t, F as $, a as p } from "./storybook-jsx-runtime-36872362.es.js";
import { r as d } from "./storybook-index-45401197.es.js";
import { u as C } from "./storybook-useDebounce-78f40efd.es.js";
const V = d.memo((f) => {
  const {
    display: b = !0,
    label: h,
    tooltip: u,
    section: a = null,
    subsection: l = null,
    fieldName: r,
    updateField: g,
    value: n,
    type: i = "text",
    i: v = null,
    min: c = null,
    ...m
  } = f, [s, e] = d.useState(n), [o] = C(s, 500);
  d.useEffect(() => {
    typeof o == "string" && n !== o && g(a, l, r, o, v);
  }, [o]), d.useEffect(() => {
    e(n);
  }, [n]);
  let x = l ? `${a}-${l}-${r}` : `${a}-${l}-${r}`;
  const y = (F) => {
    i !== "number" || c === null || !F.target.value || c <= parseFloat(F.target.value) ? e(F.target.value) : e(c.toString());
  };
  let N = /* @__PURE__ */ t("input", { type: "text", name: x, onChange: y, ...m, value: s });
  return i === "textarea" && (N = /* @__PURE__ */ t("textarea", { name: x, onChange: y, ...m, value: s })), i === "number" && (N = /* @__PURE__ */ t("input", { type: "number", name: x, onChange: y, ...m, value: s })), i === "date" && (N = /* @__PURE__ */ t("input", { type: "date", name: x, onChange: y, ...m, value: s })), b ? /* @__PURE__ */ p("label", { children: [
    /* @__PURE__ */ p("span", { className: "edit-label column-heading", children: [
      h,
      u
    ] }),
    N
  ] }) : /* @__PURE__ */ t($, {});
}), j = d.memo((f) => {
  const {
    display: b = !0,
    label: h,
    value: u,
    fieldName: a,
    section: l = null,
    subsection: r = null,
    tooltip: g,
    updateField: n,
    ...i
  } = f;
  return b ? /* @__PURE__ */ p("label", { className: "checkbox column-heading", children: [
    /* @__PURE__ */ t(
      "input",
      {
        type: "checkbox",
        name: a,
        checked: u,
        onChange: (v) => {
          n(l, r, a, !u);
        },
        ...i
      }
    ),
    /* @__PURE__ */ p("span", { className: "edit-label", children: [
      h,
      g
    ] })
  ] }) : /* @__PURE__ */ t($, {});
}), T = d.memo((f) => {
  const {
    display: b = !0,
    label: h,
    value: u,
    options: a,
    fieldName: l,
    section: r = null,
    subsection: g = null,
    required: n = !1,
    tooltip: i,
    updateField: v,
    initial: c,
    ...m
  } = f, s = a.map((e, o) => typeof e == "string" ? /* @__PURE__ */ t("option", { value: e, children: e }, o) : /* @__PURE__ */ t("option", { value: e.value, children: e.label }, o));
  return c && s.unshift(
    /* @__PURE__ */ t("option", { value: "", children: c }, "initial")
  ), b ? /* @__PURE__ */ p("label", { children: [
    /* @__PURE__ */ p("span", { className: "edit-label", children: [
      h,
      i
    ] }),
    /* @__PURE__ */ t(
      "select",
      {
        className: `cove-form-select ${n && !u ? "warning" : ""}`,
        name: l,
        value: u,
        onChange: (e) => {
          v(r, g, l, e.target.value);
        },
        ...m,
        children: s
      }
    )
  ] }) : /* @__PURE__ */ t($, {});
});
export {
  j as C,
  T as S,
  V as T
};
