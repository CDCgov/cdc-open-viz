import { r as o, R as l } from "./storybook-index-9_ikpx_Z.es.js";
import { T as d } from "./storybook-Tooltip-DCJgUFyx.es.js";
import { a as k } from "./storybook-Icon-avKQaL8M.es.js";
const D = ({ section: I = null, subsection: x = null, fieldName: b, label: n, options: i, updateField: S, selected: w = [], limit: a }) => {
  const N = i.filter((e) => w.includes(e.value)).slice(0, a), [r, p] = o.useState(N), [c, v] = o.useState(!1), u = o.useRef(null);
  o.useEffect(() => {
    const e = (t) => {
      u.current && !u.current.contains(t.target) && v(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  const f = (e) => S(
    I,
    x,
    b,
    e.map((t) => t.value)
  ), E = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter" || a && r.length >= a) return;
    const s = [...r, e];
    p(s), f(s);
  }, y = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter") return;
    const s = r.filter((C) => C.value !== e.value);
    p(s), f(s);
  }, m = "multiSelect_" + n;
  return /* @__PURE__ */ l.createElement("div", { ref: u, className: "cove-multiselect" }, n && /* @__PURE__ */ l.createElement("span", { id: m, className: "edit-label column-heading" }, n), /* @__PURE__ */ l.createElement("div", { className: "wrapper" }, /* @__PURE__ */ l.createElement("div", { className: "selected" }, r.map((e) => /* @__PURE__ */ l.createElement("div", { key: e.value, "aria-labelledby": n ? m : void 0 }, e.label, /* @__PURE__ */ l.createElement(
    "button",
    {
      "aria-label": "Remove",
      onClick: (t) => {
        t.preventDefault(), y(e);
      },
      onKeyUp: (t) => {
        y(e, t);
      }
    },
    "x"
  ))), /* @__PURE__ */ l.createElement(
    "button",
    {
      "aria-label": c ? "Collapse" : "Expand",
      "aria-labelledby": n ? m : void 0,
      className: "expand",
      onClick: (e) => {
        e.preventDefault(), v(!c);
      }
    },
    /* @__PURE__ */ l.createElement(k, { display: c ? "caretDown" : "caretUp", style: { cursor: "pointer" } })
  )), !!a && /* @__PURE__ */ l.createElement(d, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(d.Target, null, /* @__PURE__ */ l.createElement(k, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(d.Content, null, /* @__PURE__ */ l.createElement("p", null, "Select up to ", a, " items")))), /* @__PURE__ */ l.createElement("ul", { className: "dropdown" + (c ? "" : " d-none") }, i.filter((e) => !r.find((t) => t.value === e.value)).map((e) => /* @__PURE__ */ l.createElement(
    "li",
    {
      className: "cove-multiselect-li",
      key: e.value,
      role: "option",
      tabIndex: 0,
      onClick: (t) => {
        t.preventDefault(), E(e, t);
      },
      onKeyUp: (t) => E(e, t)
    },
    e.label
  ))));
};
export {
  D as M
};
