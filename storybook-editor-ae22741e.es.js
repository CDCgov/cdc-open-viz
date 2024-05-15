import { r as c, R as a } from "./storybook-index-45401197.es.js";
import { u as A } from "./storybook-useDebounce-b9224b8d.es.js";
import "./storybook-index-4ed993c7.es.js";
const b = c.memo(({ label: g, section: l = null, subsection: t = null, fieldName: r, updateField: u, value: o, type: m = "input", tooltip: x, placeholder: F, i: v = null, min: p = null, max: I = null, className: E, ...R }) => {
  const [$, s] = c.useState(o), [n] = A($, 500);
  c.useEffect(() => {
    typeof n == "string" && o !== n && u && u(l, t, r, n, v);
  }, [n, l, t, r, v, o, u]);
  let S = t ? `${l}-${t}-${r}` : `${l}-${t}-${r}`;
  const _ = (e) => {
    m !== "number" || p === null || !e.target.value || parseFloat(p) <= parseFloat(e.target.value) & parseFloat(I) >= parseFloat(e.target.value) ? s(e.target.value) : s(p.toString());
  };
  let f = {
    className: `cove-input${E ? " " + E : ""}`,
    type: m,
    name: S,
    placeholder: F,
    onChange: _,
    value: $,
    ...R
  }, h = m === "textarea" ? /* @__PURE__ */ a.createElement("textarea", { ...f }) : /* @__PURE__ */ a.createElement("input", { ...f });
  return /* @__PURE__ */ a.createElement(a.Fragment, null, g && /* @__PURE__ */ a.createElement("label", { className: "cove-input__label" }, g), x, h);
});
export {
  b as I
};
