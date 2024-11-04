import { r as u, R as l } from "./storybook-index-45401197.es.js";
import { T as i } from "./storybook-Tooltip-4102bd69.es.js";
import { a as I } from "./storybook-Icon-73ec66ec.es.js";
const T = ({
  section: x = null,
  subsection: S = null,
  fieldName: b,
  label: n,
  options: p,
  updateField: g,
  selected: h = [],
  limit: r,
  tooltip: f
}) => {
  const w = p.filter((e) => h.includes(e.value)).slice(0, r), [a, v] = u.useState(w), [o, m] = u.useState(!1), d = u.useRef(null);
  u.useEffect(() => {
    const e = (t) => {
      d.current && !d.current.contains(t.target) && m(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  const E = (e) => g(
    x,
    S,
    b,
    e.map((t) => t.value)
  ), y = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter" || r && a.length >= r)
      return;
    const c = [...a, e];
    v(c), E(c);
  }, k = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter")
      return;
    const c = a.filter((C) => C.value !== e.value);
    v(c), E(c);
  }, s = "multiSelect_" + n;
  return /* @__PURE__ */ l.createElement(l.Fragment, null, n && /* @__PURE__ */ l.createElement("label", { className: "edit-label column-heading", id: s + n, htmlFor: s }, n), /* @__PURE__ */ l.createElement("div", { ref: d, className: "cove-multiselect" }, f && f, /* @__PURE__ */ l.createElement("div", { className: "wrapper" }, /* @__PURE__ */ l.createElement(
    "div",
    {
      id: s,
      onClick: () => {
        a.length || m(!0);
      },
      className: "selected"
    },
    a.map((e) => /* @__PURE__ */ l.createElement("div", { key: e.value, "aria-labelledby": n ? s + n : void 0 }, e.label, /* @__PURE__ */ l.createElement(
      "button",
      {
        "aria-label": "Remove",
        onClick: (t) => {
          t.preventDefault(), k(e);
        },
        onKeyUp: (t) => {
          k(e, t);
        }
      },
      "x"
    ))),
    /* @__PURE__ */ l.createElement(
      "button",
      {
        "aria-label": o ? "Collapse" : "Expand",
        "aria-labelledby": n ? s : void 0,
        className: "expand",
        onClick: (e) => {
          e.preventDefault(), m(!o);
        }
      },
      /* @__PURE__ */ l.createElement(I, { display: "caretDown", style: { cursor: "pointer" } })
    )
  ), !!r && /* @__PURE__ */ l.createElement(i, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(i.Target, null, /* @__PURE__ */ l.createElement(I, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(i.Content, null, /* @__PURE__ */ l.createElement("p", null, "Select up to ", r, " items")))), /* @__PURE__ */ l.createElement("ul", { className: "dropdown" + (o ? "" : " d-none") }, p.filter((e) => !a.find((t) => t.value === e.value)).map((e) => /* @__PURE__ */ l.createElement(
    "li",
    {
      className: "cove-multiselect-li",
      key: e.value,
      role: "option",
      tabIndex: 0,
      onClick: (t) => {
        t.preventDefault(), y(e, t);
      },
      onKeyUp: (t) => y(e, t)
    },
    e.label
  )))));
};
export {
  T as M
};
