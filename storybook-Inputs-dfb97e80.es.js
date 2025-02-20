import { j as e, F as $, a as d } from "./storybook-jsx-runtime-36872362.es.js";
import { r as g } from "./storybook-index-45401197.es.js";
import { u as C } from "./storybook-useDebounce-78f40efd.es.js";
const j = g.memo((p) => {
  const {
    display: f = !0,
    label: b,
    tooltip: s,
    section: a = null,
    subsection: l = null,
    fieldName: u,
    updateField: h,
    value: o,
    type: n = "text",
    i: v = null,
    min: c = null,
    ...m
  } = p, [i, t] = g.useState(o), [r] = C(i, 500);
  g.useEffect(() => {
    typeof r == "string" && o !== r && h(a, l, u, r, v);
  }, [r]);
  let x = l ? `${a}-${l}-${u}` : `${a}-${l}-${u}`;
  const y = (F) => {
    n !== "number" || c === null || !F.target.value || c <= parseFloat(F.target.value) ? t(F.target.value) : t(c.toString());
  };
  let N = /* @__PURE__ */ e("input", { type: "text", name: x, onChange: y, ...m, value: i });
  return n === "textarea" && (N = /* @__PURE__ */ e("textarea", { name: x, onChange: y, ...m, value: i })), n === "number" && (N = /* @__PURE__ */ e("input", { type: "number", name: x, onChange: y, ...m, value: i })), n === "date" && (N = /* @__PURE__ */ e("input", { type: "date", name: x, onChange: y, ...m, value: i })), f ? /* @__PURE__ */ d("label", { children: [
    /* @__PURE__ */ d("span", { className: "edit-label column-heading", children: [
      b,
      s
    ] }),
    N
  ] }) : /* @__PURE__ */ e($, {});
}), E = g.memo((p) => {
  const {
    display: f = !0,
    label: b,
    value: s,
    fieldName: a,
    section: l = null,
    subsection: u = null,
    tooltip: h,
    updateField: o,
    ...n
  } = p;
  return f ? /* @__PURE__ */ d("label", { className: "checkbox column-heading", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: a,
        checked: s,
        onChange: (v) => {
          o(l, u, a, !s);
        },
        ...n
      }
    ),
    /* @__PURE__ */ d("span", { className: "edit-label", children: [
      b,
      h
    ] })
  ] }) : /* @__PURE__ */ e($, {});
}), T = g.memo((p) => {
  const {
    display: f = !0,
    label: b,
    value: s,
    options: a,
    fieldName: l,
    section: u = null,
    subsection: h = null,
    required: o = !1,
    tooltip: n,
    updateField: v,
    initial: c,
    ...m
  } = p, i = a.map((t, r) => typeof t == "string" ? /* @__PURE__ */ e("option", { value: t, children: t }, r) : /* @__PURE__ */ e("option", { value: t.value, children: t.label }, r));
  return c && i.unshift(
    /* @__PURE__ */ e("option", { value: "", children: c }, "initial")
  ), f ? /* @__PURE__ */ d("label", { children: [
    /* @__PURE__ */ d("span", { className: "edit-label", children: [
      b,
      n
    ] }),
    /* @__PURE__ */ e(
      "select",
      {
        className: `cove-form-select ${o && !s ? "warning" : ""}`,
        name: l,
        value: s,
        onChange: (t) => {
          v(u, h, l, t.target.value);
        },
        ...m,
        children: i
      }
    )
  ] }) : /* @__PURE__ */ e($, {});
});
export {
  E as C,
  T as S,
  j as T
};
