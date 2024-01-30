import { r as c, R as l } from "./storybook-e61d95ab.es.js";
import { a as y } from "./storybook-60d140a8.es.js";
const w = ({ section: v = null, subsection: E = null, fieldName: f, label: a, options: b, updateField: I }) => {
  const [n, m] = c.useState([]), [s, u] = c.useState(!1), o = c.useRef(null);
  c.useEffect(() => {
    const e = (t) => {
      o.current && !o.current.contains(t.target) && u(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  const d = (e) => I(
    v,
    E,
    f,
    e.map((t) => t.value)
  ), i = (e) => {
    const t = [...n, e];
    m(t), d(t);
  }, r = (e) => {
    const t = n.filter((x) => x.value !== e.value);
    m(t), d(t);
  }, p = "multiSelect_" + a;
  return /* @__PURE__ */ l.createElement("div", { ref: o, className: "cove-multiselect" }, a && /* @__PURE__ */ l.createElement("span", { id: p, className: "edit-label cove-input__label" }, a), /* @__PURE__ */ l.createElement("div", { "aria-labelledby": a ? p : void 0, className: "selected" }, n.map((e) => /* @__PURE__ */ l.createElement("div", { key: e.value, role: "button", tabIndex: 0, onClick: () => r(e), onKeyUp: () => r(e) }, e.label, /* @__PURE__ */ l.createElement("button", { "aria-label": "Remove", onClick: () => r(e) }, "x"))), /* @__PURE__ */ l.createElement("button", { "aria-label": s ? "Collapse" : "Expand", className: "expand", onClick: () => u(!s) }, /* @__PURE__ */ l.createElement(y, { display: s ? "caretDown" : "caretUp", style: { cursor: "pointer" } }))), /* @__PURE__ */ l.createElement("ul", { className: "dropdown" + (s ? "" : " hide") }, b.filter((e) => !n.find((t) => t.value === e.value)).map((e) => /* @__PURE__ */ l.createElement("li", { className: "cove-multiselect-li", key: e.value, role: "option", tabIndex: 0, onClick: () => i(e), onKeyUp: () => i(e) }, e.label))));
};
export {
  w as M
};
