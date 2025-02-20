import { r as u, R as e } from "./storybook-index-45401197.es.js";
import { u as S } from "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-4ed993c7.es.js";
import { P as x } from "./storybook-index-43433e35.es.js";
import { S as I } from "./storybook-Icon-d8cd8abc.es.js";
const A = u.memo(({ label: s, section: n = null, subsection: t = null, fieldName: m, updateField: c, value: r, type: o = "input", tooltip: i, placeholder: a, i: f = null, min: E = null, max: k = null, className: h, ...l }) => {
  const [p, v] = u.useState(r), [$] = S(p, 500);
  u.useEffect(() => {
    typeof $ == "string" && r !== $ && c && c(n, t, m, $, f);
  }, [$, n, t, m, f, r, c]);
  let b = t ? `${n}-${t}-${m}` : `${n}-${t}-${m}`;
  const C = (g) => {
    o !== "number" || E === null || !g.target.value || parseFloat(E) <= parseFloat(g.target.value) & parseFloat(k) >= parseFloat(g.target.value) ? v(g.target.value) : v(E.toString());
  };
  let _ = {
    className: `cove-input${h ? " " + h : ""}`,
    type: o,
    name: b,
    placeholder: a,
    onChange: C,
    value: p,
    ...l
  }, y = o === "textarea" ? /* @__PURE__ */ e.createElement("textarea", { ..._ }) : /* @__PURE__ */ e.createElement("input", { ..._ });
  return /* @__PURE__ */ e.createElement(e.Fragment, null, s && /* @__PURE__ */ e.createElement("label", { className: "cove-input__label" }, s), i, y);
}), d = u.memo(
  ({
    label: s,
    size: n = "small",
    activeColor: t = null,
    activeCheckColor: m = null,
    section: c = null,
    subsection: r = null,
    fieldName: o,
    updateField: i,
    value: a,
    i: f = null,
    min: E = null,
    max: k = null,
    ...h
  }) => {
    const [l, p] = u.useState(a);
    let v = r ? `${c}-${r}-${o}` : `${c}-${r}-${o}`;
    return u.useEffect(() => {
      a !== void 0 && a !== l && p(a);
    }, [a]), u.useEffect(() => {
      a !== void 0 && a !== l && i && i(c, r, o, l, f);
    }, [l]), /* @__PURE__ */ e.createElement("div", { className: "input-group" }, s && /* @__PURE__ */ e.createElement("label", null, s), /* @__PURE__ */ e.createElement("div", { className: "cove-input__checkbox" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + (l ? " active" : ""), onClick: () => p(!l) }, /* @__PURE__ */ e.createElement("div", { className: `cove-input__checkbox-box${t ? " custom-color" : ""}`, style: l && t ? { backgroundColor: t } : null }, /* @__PURE__ */ e.createElement(I, { className: "cove-input__checkbox-check", style: { fill: m || "#025eaa" } })), /* @__PURE__ */ e.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: v, checked: l || !1, readOnly: !0 })));
  }
);
d.propTypes = {
  label: x.string,
  size: x.oneOf(["small", "medium", "large"]),
  activeColor: x.string,
  activeCheckColor: x.string
};
export {
  A as I,
  d as a
};
