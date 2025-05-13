import { j as n, F as E, a as U } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as h } from "./storybook-index-f2fed736.es.js";
import { a as C } from "./storybook-Icon-e250778e.es.js";
import { L as B } from "./storybook-Loader-0256c39d.es.js";
const D = (l, f) => {
  if (l === void 0 || l === "")
    return f || [];
  const s = new RegExp(`^${l}`, "i");
  return f.filter(([m, c]) => {
    const [d, a] = m;
    return String(a || d).match(s) || c.some(([b, N]) => String(N || b).match(s));
  }).map(([m, c]) => {
    const [d, a] = m;
    if (String(a || d).match(s))
      return [m, c];
    const b = c.filter(([N, o]) => String(o || N).match(s));
    return [m, b];
  });
}, M = ({ subOptions: l, handleBlur: f, filterIndex: s, label: r, handleSubGroupSelect: O, userSelectedLabel: m, userSearchTerm: c }) => {
  const [d, a] = h.useState(!0), T = /* @__PURE__ */ n(E, { children: "✔" });
  return h.useEffect(() => {
    a(c.length > 0 ? !0 : d);
  }, [c]), /* @__PURE__ */ n(E, { children: /* @__PURE__ */ U(
    "li",
    {
      role: "treeitem",
      tabIndex: 0,
      "aria-label": r,
      onClick: (o) => {
        const t = o.target.className === `selectable-item-${s}` ? !0 : !d;
        a(t);
      },
      onBlur: f,
      onKeyUp: (o) => {
        const t = o.target;
        o.key === "ArrowRight" ? a(!0) : o.key === "ArrowLeft" ? (t.className === `selectable-item-${s}` && t.parentNode.parentNode.focus(), a(!1)) : o.key === "Enter" && (t.className === `selectable-item-${s}` ? O(t.dataset.value) : a(!d));
      },
      className: `nested-dropdown-group-${s}`,
      children: [
        /* @__PURE__ */ U("span", { className: "font-weight-bold", children: [
          r,
          " "
        ] }),
        /* @__PURE__ */ n("span", { className: "list-arrow", "aria-hidden": "true", children: d ? /* @__PURE__ */ n(C, { display: "caretFilledUp", alt: "arrow pointing up" }) : /* @__PURE__ */ n(C, { display: "caretFilledDown", alt: "arrow pointing down" }) }),
        /* @__PURE__ */ n(
          "ul",
          {
            "aria-expanded": d,
            role: "group",
            tabIndex: -1,
            "aria-labelledby": r,
            className: d ? "" : "hide",
            children: l.map((o) => {
              const [t, p] = o, F = p || t, i = r + t, y = i === m;
              return /* @__PURE__ */ U(
                "li",
                {
                  className: `selectable-item-${s}`,
                  tabIndex: 0,
                  role: "treeitem",
                  "aria-label": i,
                  "aria-selected": y,
                  "data-value": t,
                  onClick: (L) => {
                    O(t);
                  },
                  children: [
                    y ? /* @__PURE__ */ n("span", { className: "check-mark", "aria-hidden": "true", children: T }) : "",
                    F
                  ]
                },
                i
              );
            })
          }
        )
      ]
    },
    r
  ) });
}, q = ({
  options: l,
  activeGroup: f,
  activeSubGroup: s,
  filterIndex: r,
  listLabel: O,
  handleSelectedItems: m,
  loading: c
}) => {
  const d = h.useId(), [a, T] = h.useState(null), b = h.useMemo(() => s ? `${f} - ${s}` : "", [f, s]), [N, o] = h.useState(!1), [t, p] = h.useState(!1), F = h.useRef(null), i = h.useRef(null), y = h.useRef(null), L = (e, u) => {
    i.current.focus(), T(null), p(!1), m([String(e), String(u)]);
  }, I = (e) => {
    var _;
    const { nodeName: u, className: $, parentNode: x, nextSibling: S, lastChild: g, previousSibling: w } = e.target, k = y.current;
    switch (e.key) {
      case "ArrowDown": {
        u === "INPUT" ? (p(!0), k.firstChild.focus()) : $ === `selectable-item-${r}` ? (S ?? x.parentNode.nextSibling ?? i.current).focus() : g.className === "hide" ? (S ?? i.current).focus() : (_ = g == null ? void 0 : g.firstChild) == null || _.focus();
        break;
      }
      case "ArrowUp": {
        u === "INPUT" ? (p(!0), k.lastChild.lastChild.className === "hide" ? k.lastChild.focus() : k.lastChild.lastChild.lastChild.focus()) : $ === `selectable-item-${r}` ? (w ?? x.parentNode).focus() : w ? (w.lastChild.className === "hide" ? w : w.lastChild.lastChild).focus() : i == null || i.current.focus();
        break;
      }
      case "ArrowLeft": {
        u === "INPUT" && p(!1);
        break;
      }
      case "ArrowRight": {
        u === "INPUT" && p(!0);
        break;
      }
      case "Escape":
        p(!1), i.current.focus();
        break;
    }
  }, R = h.useMemo(() => D(a || "", l), [a, l]), V = (e) => {
    const u = e.target.value;
    p(!0), T(u);
  }, A = (e) => {
    e.relatedTarget === null || ![
      `nested-dropdown-${r}`,
      `nested-dropdown-group-${r}`,
      `selectable-item-${r}`,
      `main-nested-dropdown-container-${r}`
    ].includes(e.relatedTarget.className) ? (o(!1), p(!1)) : e.relatedTarget.focus();
  };
  function v(e, u) {
    e == null || e.addEventListener("blur", u);
  }
  return v(i.current, (e) => A(e)), v(y.current, (e) => A(e)), /* @__PURE__ */ n(E, { children: /* @__PURE__ */ U(
    "div",
    {
      id: d,
      ref: F,
      className: `nested-dropdown nested-dropdown-${r} ${t ? "open-filter" : ""}`,
      onKeyUp: I,
      children: [
        /* @__PURE__ */ U(
          "div",
          {
            className: `nested-dropdown-input-container${c || !(l != null && l.length) ? " disabled" : ""}`,
            "aria-label": "searchInput",
            "aria-disabled": c,
            role: "textbox",
            children: [
              /* @__PURE__ */ n(
                "input",
                {
                  id: `nested-dropdown-${r}`,
                  className: "search-input",
                  ref: i,
                  "aria-label": "searchInput",
                  "aria-haspopup": "true",
                  "aria-hidden": "false",
                  tabIndex: 0,
                  value: a !== null ? a : b,
                  onChange: V,
                  placeholder: c ? "Loading..." : "- Select -",
                  disabled: c || !(l != null && l.length),
                  onClick: () => {
                    N && p(!t);
                  },
                  onFocus: () => o(!0)
                }
              ),
              /* @__PURE__ */ n("span", { className: "list-arrow", "aria-hidden": !0, children: t ? /* @__PURE__ */ n(C, { display: "caretUp", alt: "arrow pointing up" }) : /* @__PURE__ */ n(C, { display: "caretDown", alt: "arrow pointing down" }) })
            ]
          }
        ),
        c && /* @__PURE__ */ n(B, { spinnerType: "text-secondary" }),
        /* @__PURE__ */ n(
          "ul",
          {
            role: "tree",
            tabIndex: -1,
            "aria-labelledby": "main-nested-dropdown",
            "aria-expanded": t,
            ref: y,
            className: `main-nested-dropdown-container-${r}${t ? "" : " hide"}`,
            children: R.length ? R.map(([e, u], $) => {
              const [x, S] = e, g = String(S || x);
              return /* @__PURE__ */ n(
                M,
                {
                  handleBlur: A,
                  subOptions: u,
                  filterIndex: r,
                  label: g,
                  handleSubGroupSelect: (w) => {
                    L(x, w);
                  },
                  userSelectedLabel: f + s,
                  userSearchTerm: a || ""
                },
                g + "_" + $
              );
            }) : "There are no matching items"
          },
          O
        )
      ]
    }
  ) });
};
export {
  q as N
};
