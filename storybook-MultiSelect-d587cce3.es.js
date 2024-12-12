import { r as s, R as l } from "./storybook-index-45401197.es.js";
import { T as f } from "./storybook-Tooltip-4102bd69.es.js";
import { a as I } from "./storybook-Icon-4f5978ba.es.js";
import { L as D } from "./storybook-Loader-f4ec7b29.es.js";
const U = ({
  section: b = null,
  subsection: S = null,
  fieldName: w,
  label: c,
  options: o,
  updateField: C,
  selected: N = [],
  limit: a,
  tooltip: v,
  loading: u
}) => {
  const h = s.useMemo(() => o.filter((e) => N.includes(e.value)).slice(0, a), [o]), [L, E] = s.useState(), n = L || h, [m, d] = s.useState(!1), i = s.useRef(null);
  s.useEffect(() => {
    const e = (t) => {
      i.current && !i.current.contains(t.target) && d(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  const y = (e) => C(
    b,
    S,
    w,
    e.map((t) => t.value)
  ), k = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter" || a && (n == null ? void 0 : n.length) >= a)
      return;
    const r = [...n, e];
    E(r), y(r);
  }, x = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter")
      return;
    const r = n.filter((R) => R.value !== e.value);
    E(r), y(r);
  }, p = "multiSelect_" + c;
  return /* @__PURE__ */ l.createElement("div", { ref: i, className: "cove-multiselect" }, v && v, /* @__PURE__ */ l.createElement("div", { className: "wrapper" }, /* @__PURE__ */ l.createElement(
    "div",
    {
      id: p,
      onClick: () => {
        !n.length && !u && d(!0);
      },
      className: "selected",
      "aria-disabled": u
    },
    n.length ? n.map((e) => /* @__PURE__ */ l.createElement("div", { key: e.value, "aria-labelledby": c ? p + c : void 0 }, e.label, /* @__PURE__ */ l.createElement(
      "button",
      {
        "aria-label": "Remove",
        onClick: (t) => {
          t.preventDefault(), x(e);
        },
        onKeyUp: (t) => {
          x(e, t);
        }
      },
      "x"
    ))) : /* @__PURE__ */ l.createElement("span", { className: "pl-1 pt-1" }, u ? "Loading..." : "- Select -"),
    /* @__PURE__ */ l.createElement(
      "button",
      {
        "aria-label": m ? "Collapse" : "Expand",
        "aria-labelledby": c ? p : void 0,
        className: "expand",
        onClick: (e) => {
          e.preventDefault(), d(!m);
        }
      },
      /* @__PURE__ */ l.createElement(I, { display: "caretDown", style: { cursor: "pointer" } })
    )
  ), u && /* @__PURE__ */ l.createElement(D, { spinnerType: "text-secondary" }), !!a && /* @__PURE__ */ l.createElement(f, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(f.Target, null, /* @__PURE__ */ l.createElement(I, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(f.Content, null, /* @__PURE__ */ l.createElement("p", null, "Select up to ", a, " items")))), /* @__PURE__ */ l.createElement("ul", { className: "dropdown" + (m ? "" : " d-none") }, o.filter((e) => !n.find((t) => t.value === e.value)).map((e) => /* @__PURE__ */ l.createElement(
    "li",
    {
      className: "cove-multiselect-li",
      key: e.value,
      role: "option",
      tabIndex: 0,
      onClick: (t) => {
        t.preventDefault(), k(e, t);
      },
      onKeyUp: (t) => k(e, t)
    },
    e.label
  ))));
};
export {
  U as M
};
