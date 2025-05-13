import { a as s, j as l } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as c } from "./storybook-index-f2fed736.es.js";
import { T as v } from "./storybook-Tooltip-7cf39805.es.js";
import { a as k } from "./storybook-Icon-e250778e.es.js";
import { L as g } from "./storybook-Loader-0256c39d.es.js";
const _ = ({
  section: S = null,
  subsection: E = null,
  fieldName: w,
  label: o,
  options: u,
  updateField: C,
  selected: N = [],
  limit: a,
  tooltip: h,
  loading: d
}) => {
  const L = c.useMemo(() => u.filter((e) => N.includes(e.value)).slice(0, a), [u]), [D, y] = c.useState(), n = D || L, [i, m] = c.useState(!1), p = c.useRef(null);
  c.useEffect(() => {
    const e = (t) => {
      p.current && !p.current.contains(t.target) && m(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []);
  const x = (e) => C(
    S,
    E,
    w,
    e.map((t) => t.value)
  ), I = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter" || a && (n == null ? void 0 : n.length) >= a)
      return;
    const r = [...n, e];
    y(r), x(r);
  }, b = (e, t = null) => {
    if (t && t.type === "keyup" && t.key !== "Enter")
      return;
    const r = n.filter((T) => T.value !== e.value);
    y(r), x(r);
  }, f = "multiSelect_" + o;
  return /* @__PURE__ */ s("div", { ref: p, className: "cove-multiselect", children: [
    h && h,
    /* @__PURE__ */ s("div", { className: "wrapper", children: [
      /* @__PURE__ */ s(
        "div",
        {
          id: f,
          onClick: () => {
            !n.length && !d && m(!0);
          },
          className: "selected",
          "aria-disabled": d,
          children: [
            n.length ? n.map((e) => /* @__PURE__ */ s("div", { "aria-labelledby": o ? f + o : void 0, children: [
              e.label,
              /* @__PURE__ */ l(
                "button",
                {
                  "aria-label": "Remove",
                  onClick: (t) => {
                    t.preventDefault(), b(e);
                  },
                  onKeyUp: (t) => {
                    b(e, t);
                  },
                  children: "x"
                }
              )
            ] }, e.value)) : /* @__PURE__ */ l("span", { className: "pl-1 pt-1", children: d ? "Loading..." : "- Select -" }),
            /* @__PURE__ */ l(
              "button",
              {
                "aria-label": i ? "Collapse" : "Expand",
                "aria-labelledby": o ? f : void 0,
                className: "expand",
                onClick: (e) => {
                  e.preventDefault(), m(!i);
                },
                children: /* @__PURE__ */ l(k, { display: "caretDown", style: { cursor: "pointer" } })
              }
            )
          ]
        }
      ),
      d && /* @__PURE__ */ l(g, { spinnerType: "text-secondary" }),
      !!a && /* @__PURE__ */ s(v, { style: { textTransform: "none" }, children: [
        /* @__PURE__ */ l(v.Target, { children: /* @__PURE__ */ l(k, { display: "question", style: { marginLeft: "0.5rem" } }) }),
        /* @__PURE__ */ l(v.Content, { children: /* @__PURE__ */ s("p", { children: [
          "Select up to ",
          a,
          " items"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ l("ul", { className: "dropdown" + (i ? "" : " d-none"), children: u.filter((e) => !n.find((t) => t.value === e.value)).map((e) => /* @__PURE__ */ l(
      "li",
      {
        className: "cove-multiselect-li",
        role: "option",
        tabIndex: 0,
        onClick: (t) => {
          t.preventDefault(), I(e, t);
        },
        onKeyUp: (t) => I(e, t),
        children: e.label
      },
      e.value
    )) })
  ] });
};
export {
  _ as M
};
