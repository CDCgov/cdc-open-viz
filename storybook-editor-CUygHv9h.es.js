import { r as u, R as e } from "./storybook-index-9_ikpx_Z.es.js";
import { P as x } from "./storybook-index-Dm4aM_I4.es.js";
import { S } from "./storybook-icon-check-DEIbPWJf.es.js";
/* empty css                            */
import { u as I } from "./storybook-useDebounce-YhAjjpBi.es.js";
const T = u.memo(
  ({
    label: s,
    size: n = "small",
    activeColor: t = null,
    activeCheckColor: m = null,
    section: c = null,
    subsection: r = null,
    fieldName: o,
    updateField: f,
    value: a,
    i = null,
    min: E = null,
    max: k = null,
    ...h
  }) => {
    const [l, p] = u.useState(a);
    let v = r ? `${c}-${r}-${o}` : `${c}-${r}-${o}`;
    return u.useEffect(() => {
      a !== void 0 && a !== l && p(a);
    }, [a]), u.useEffect(() => {
      a !== void 0 && a !== l && f && f(c, r, o, l, i);
    }, [l]), /* @__PURE__ */ e.createElement("div", { className: "input-group" }, s && /* @__PURE__ */ e.createElement("label", null, s), /* @__PURE__ */ e.createElement("div", { className: "cove-input__checkbox" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + (l ? " active" : ""), onClick: () => p(!l) }, /* @__PURE__ */ e.createElement("div", { className: `cove-input__checkbox-box${t ? " custom-color" : ""}`, style: l && t ? { backgroundColor: t } : null }, /* @__PURE__ */ e.createElement(S, { className: "cove-input__checkbox-check", style: { fill: m || "#025eaa" } })), /* @__PURE__ */ e.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: v, checked: l || !1, readOnly: !0 })));
  }
);
T.propTypes = {
  label: x.string,
  size: x.oneOf(["small", "medium", "large"]),
  activeColor: x.string,
  activeCheckColor: x.string
};
const A = u.memo(({ label: s, section: n = null, subsection: t = null, fieldName: m, updateField: c, value: r, type: o = "input", tooltip: f, placeholder: a, i = null, min: E = null, max: k = null, className: h, ...l }) => {
  const [p, v] = u.useState(r), [$] = I(p, 500);
  u.useEffect(() => {
    typeof $ == "string" && r !== $ && c && c(n, t, m, $, i);
  }, [$, n, t, m, i, r, c]);
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
  return /* @__PURE__ */ e.createElement(e.Fragment, null, s && /* @__PURE__ */ e.createElement("label", { className: "cove-input__label" }, s), f, y);
});
export {
  A as I,
  T as a
};
