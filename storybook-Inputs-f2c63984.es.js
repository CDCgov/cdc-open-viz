import { j as t, F, a as f } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as d } from "./storybook-index-f2fed736.es.js";
import { u as S } from "./storybook-useDebounce-5d0290fd.es.js";
import { D as C } from "./storybook-Dropdown-1c93166f.es.js";
const j = d.memo((p) => {
  const {
    display: b = !0,
    label: h,
    tooltip: s,
    section: l = null,
    subsection: n = null,
    fieldName: u,
    updateField: g,
    value: i,
    type: r = "text",
    i: v = null,
    min: o = null,
    ...m
  } = p, [a, e] = d.useState(i), [c] = S(a, 500);
  d.useEffect(() => {
    typeof c == "string" && i !== c && g(l, n, u, c, v);
  }, [c]), d.useEffect(() => {
    e(i);
  }, [i]);
  let x = n ? `${l}-${n}-${u}` : `${l}-${n}-${u}`;
  const y = ($) => {
    r !== "number" || o === null || !$.target.value || o <= parseFloat($.target.value) ? e($.target.value) : e(o.toString());
  };
  let N = /* @__PURE__ */ t("input", { type: "text", name: x, onChange: y, ...m, value: a });
  return r === "textarea" && (N = /* @__PURE__ */ t("textarea", { name: x, onChange: y, ...m, value: a })), r === "number" && (N = /* @__PURE__ */ t("input", { type: "number", name: x, onChange: y, ...m, value: a })), r === "date" && (N = /* @__PURE__ */ t("input", { type: "date", name: x, onChange: y, ...m, value: a })), b ? /* @__PURE__ */ f("label", { children: [
    /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: [
      h,
      s
    ] }),
    N
  ] }) : /* @__PURE__ */ t(F, {});
}), T = d.memo((p) => {
  const {
    display: b = !0,
    label: h,
    value: s,
    fieldName: l,
    section: n = null,
    subsection: u = null,
    tooltip: g,
    updateField: i,
    ...r
  } = p;
  return b ? /* @__PURE__ */ f("label", { className: "checkbox column-heading", children: [
    /* @__PURE__ */ t(
      "input",
      {
        type: "checkbox",
        name: l,
        checked: s,
        onChange: (v) => {
          i(n, u, l, !s);
        },
        ...r
      }
    ),
    /* @__PURE__ */ f("span", { className: "edit-label", children: [
      h,
      g
    ] })
  ] }) : /* @__PURE__ */ t(F, {});
}), O = d.memo((p) => {
  const {
    display: b = !0,
    label: h,
    value: s,
    options: l,
    fieldName: n,
    section: u = null,
    subsection: g = null,
    required: i = !1,
    tooltip: r,
    updateField: v,
    initial: o,
    ...m
  } = p, a = l == null ? void 0 : l.map((e, c) => typeof e == "string" ? /* @__PURE__ */ t("option", { value: e, children: e }, c) : /* @__PURE__ */ t("option", { value: e.value, children: e.label }, c));
  return o && (a == null || a.unshift(
    /* @__PURE__ */ t("option", { value: "", children: o }, "initial")
  )), b ? /* @__PURE__ */ f("label", { children: [
    /* @__PURE__ */ f("span", { className: "edit-label", children: [
      h,
      r
    ] }),
    /* @__PURE__ */ t(
      "select",
      {
        className: `cove-form-select ${i && !s ? "warning" : ""} ${C}`,
        name: n,
        value: s,
        onChange: (e) => {
          v(u, g, n, e.target.value);
        },
        ...m,
        children: a
      }
    )
  ] }) : /* @__PURE__ */ t(F, {});
});
export {
  T as C,
  O as S,
  j as T
};
