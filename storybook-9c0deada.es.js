import { r as o, R as l } from "./storybook-e61d95ab.es.js";
import { T as p } from "./storybook-a16f6c8c.es.js";
import { a as b } from "./storybook-2ad7d390.es.js";
const T = ({ section: I = null, subsection: x = null, fieldName: S, label: n, options: E, updateField: w, selected: u, limit: a }) => {
  const C = E.filter((e) => u == null ? void 0 : u.includes(e.value)).slice(0, a), [r, v] = o.useState(C), [c, f] = o.useState(!1), m = o.useRef(null);
  o.useEffect(() => {
    const e = (t) => {
      m.current && !m.current.contains(t.target) && f(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  const y = (e) => w(
    I,
    x,
    S,
    e.map((t) => t.value)
  ), k = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter" || a && r.length >= a)
      return;
    const s = [...r, e];
    v(s), y(s);
  }, i = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter")
      return;
    const s = r.filter((N) => N.value !== e.value);
    v(s), y(s);
  }, d = "multiSelect_" + n;
  return /* @__PURE__ */ l.createElement("div", { ref: m, className: "cove-multiselect" }, n && /* @__PURE__ */ l.createElement("label", { id: d, className: "cove-input__label" }, n), /* @__PURE__ */ l.createElement("div", { className: "wrapper" }, /* @__PURE__ */ l.createElement("div", { className: "selected" }, r.map((e) => /* @__PURE__ */ l.createElement("div", { key: e.value, "aria-labelledby": n ? d : void 0, role: "button", onClick: () => i(e), onKeyUp: (t) => i(e, t) }, e.label, /* @__PURE__ */ l.createElement("button", { "aria-label": "Remove", onClick: () => i(e) }, "x"))), /* @__PURE__ */ l.createElement("button", { "aria-label": c ? "Collapse" : "Expand", "aria-labelledby": n ? d : void 0, className: "expand", onClick: () => f(!c) }, /* @__PURE__ */ l.createElement(b, { display: c ? "caretDown" : "caretUp", style: { cursor: "pointer" } }))), !!a && /* @__PURE__ */ l.createElement(p, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(p.Target, null, /* @__PURE__ */ l.createElement(b, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(p.Content, null, /* @__PURE__ */ l.createElement("p", null, "Select up to ", a, " items")))), /* @__PURE__ */ l.createElement("ul", { className: "dropdown-1" + (c ? "" : " hide") }, E.filter((e) => !r.find((t) => t.value === e.value)).map((e) => /* @__PURE__ */ l.createElement("li", { className: "cove-multiselect-li", key: e.value, role: "option", tabIndex: 0, onClick: () => k(e), onKeyUp: (t) => k(e, t) }, e.label))));
};
export {
  T as M
};
