import { r as u, R as l } from "./storybook-index-45401197.es.js";
import { T as d } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as I } from "./storybook-Icon-ed0ee925.es.js";
const D = ({ section: x = null, subsection: b = null, fieldName: S, label: a, options: p, updateField: w, selected: o, limit: n }) => {
  const N = p.filter((e) => o == null ? void 0 : o.includes(e.value)).slice(0, n), [r, v] = u.useState(N), [c, f] = u.useState(!1), m = u.useRef(null);
  u.useEffect(() => {
    const e = (t) => {
      m.current && !m.current.contains(t.target) && f(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  const E = (e) => w(
    x,
    b,
    S,
    e.map((t) => t.value)
  ), y = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter" || n && r.length >= n)
      return;
    const s = [...r, e];
    v(s), E(s);
  }, k = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter")
      return;
    const s = r.filter((h) => h.value !== e.value);
    v(s), E(s);
  }, i = "multiSelect_" + a;
  return /* @__PURE__ */ l.createElement("div", { ref: m, className: "cove-multiselect" }, a && /* @__PURE__ */ l.createElement("span", { id: i, className: "edit-label column-heading" }, a), /* @__PURE__ */ l.createElement("div", { className: "wrapper" }, /* @__PURE__ */ l.createElement("div", { className: "selected" }, r.map((e) => /* @__PURE__ */ l.createElement("div", { key: e.value, "aria-labelledby": a ? i : void 0 }, e.label, /* @__PURE__ */ l.createElement(
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
  ))), /* @__PURE__ */ l.createElement(
    "button",
    {
      "aria-label": c ? "Collapse" : "Expand",
      "aria-labelledby": a ? i : void 0,
      className: "expand",
      onClick: (e) => {
        e.preventDefault(), f(!c);
      }
    },
    /* @__PURE__ */ l.createElement(I, { display: c ? "caretDown" : "caretUp", style: { cursor: "pointer" } })
  )), !!n && /* @__PURE__ */ l.createElement(d, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(d.Target, null, /* @__PURE__ */ l.createElement(I, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(d.Content, null, /* @__PURE__ */ l.createElement("p", null, "Select up to ", n, " items")))), /* @__PURE__ */ l.createElement("ul", { className: "dropdown" + (c ? "" : " hide") }, p.filter((e) => !r.find((t) => t.value === e.value)).map((e) => /* @__PURE__ */ l.createElement(
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
  ))));
};
export {
  D as M
};
