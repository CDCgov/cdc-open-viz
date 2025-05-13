import { a as d, F as S, j as c } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as u } from "./storybook-index-f2fed736.es.js";
import { u as I } from "./storybook-useDebounce-5d0290fd.es.js";
import "./storybook-index-4ed993c7.es.js";
import { P as $ } from "./storybook-index-43433e35.es.js";
import { S as j } from "./storybook-Icon-e250778e.es.js";
const q = u.memo(({ label: m, section: t = null, subsection: e = null, fieldName: s, updateField: n, value: a, type: o = "input", tooltip: g, placeholder: r, i: h = null, min: f = null, max: _ = null, className: k, ...l }) => {
  const [p, i] = u.useState(a), [x] = I(p, 500);
  u.useEffect(() => {
    typeof x == "string" && a !== x && n && n(t, e, s, x, h);
  }, [x, t, e, s, h, a, n]);
  let C = e ? `${t}-${e}-${s}` : `${t}-${e}-${s}`;
  const y = (v) => {
    o !== "number" || f === null || !v.target.value || parseFloat(f) <= parseFloat(v.target.value) & parseFloat(_) >= parseFloat(v.target.value) ? i(v.target.value) : i(f.toString());
  };
  let b = {
    className: `cove-input${k ? " " + k : ""}`,
    type: o,
    name: C,
    placeholder: r,
    onChange: y,
    value: p,
    ...l
  }, E = o === "textarea" ? /* @__PURE__ */ c("textarea", { ...b }) : /* @__PURE__ */ c("input", { ...b });
  return /* @__PURE__ */ d(S, { children: [
    m && /* @__PURE__ */ c("label", { className: "cove-input__label", children: m }),
    g,
    E
  ] });
}), F = u.memo(
  ({
    label: m,
    size: t = "small",
    activeColor: e = null,
    activeCheckColor: s = null,
    section: n = null,
    subsection: a = null,
    fieldName: o,
    updateField: g,
    value: r,
    i: h = null,
    min: f = null,
    max: _ = null,
    ...k
  }) => {
    const [l, p] = u.useState(r);
    let i = a ? `${n}-${a}-${o}` : `${n}-${a}-${o}`;
    return u.useEffect(() => {
      r !== void 0 && r !== l && p(r);
    }, [r]), u.useEffect(() => {
      r !== void 0 && r !== l && g && g(n, a, o, l, h);
    }, [l]), /* @__PURE__ */ d("div", { className: "input-group", children: [
      m && /* @__PURE__ */ c("label", { children: m }),
      /* @__PURE__ */ d("div", { className: "cove-input__checkbox" + (t === "small" ? "--small" : t === "large" ? "--large" : "") + (l ? " active" : ""), onClick: () => p(!l), children: [
        /* @__PURE__ */ c("div", { className: `cove-input__checkbox-box${e ? " custom-color" : ""}`, style: l && e ? { backgroundColor: e } : null, children: /* @__PURE__ */ c(j, { className: "cove-input__checkbox-check", style: { fill: s || "#025eaa" } }) }),
        /* @__PURE__ */ c("input", { className: "cove-input--hidden", type: "checkbox", name: i, checked: l || !1, readOnly: !0 })
      ] })
    ] });
  }
);
F.propTypes = {
  label: $.string,
  size: $.oneOf(["small", "medium", "large"]),
  activeColor: $.string,
  activeCheckColor: $.string
};
export {
  q as I,
  F as a
};
