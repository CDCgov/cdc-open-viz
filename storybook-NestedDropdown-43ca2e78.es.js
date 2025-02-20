import { j as o, F as K, a as U } from "./storybook-jsx-runtime-36872362.es.js";
import { r as p } from "./storybook-index-45401197.es.js";
import { a as E } from "./storybook-Icon-5df8fab3.es.js";
import { L as B } from "./storybook-Loader-2db99cd1.es.js";
const D = (h, f) => {
  if (h === void 0 || h === "")
    return f || [];
  const r = new RegExp(`^${h}`, "i");
  return f.filter(([m, l]) => {
    const [i, a] = m;
    return String(a || i).match(r) || l.some(([w, N]) => String(N || w).match(r));
  }).map(([m, l]) => {
    const [i, a] = m;
    if (String(a || i).match(r))
      return [m, l];
    const w = l.filter(([N, n]) => String(n || N).match(r));
    return [m, w];
  });
}, M = ({ subOptions: h, handleBlur: f, filterIndex: r, label: t, handleSubGroupSelect: O, userSelectedLabel: m, userSearchTerm: l }) => {
  const [i, a] = p.useState(!0), b = /* @__PURE__ */ o(K, { children: "✔" });
  return p.useEffect(() => {
    a(l.length > 0 ? !0 : i);
  }, [l]), /* @__PURE__ */ o(K, { children: /* @__PURE__ */ U(
    "li",
    {
      role: "treeitem",
      tabIndex: 0,
      "aria-label": t,
      onClick: (n) => {
        const s = n.target.className === `selectable-item-${r}` ? !0 : !i;
        a(s);
      },
      onBlur: f,
      onKeyUp: (n) => {
        const s = n.target;
        n.key === "ArrowRight" ? a(!0) : n.key === "ArrowLeft" ? (s.className === `selectable-item-${r}` && s.parentNode.parentNode.focus(), a(!1)) : n.key === "Enter" && (s.className === `selectable-item-${r}` ? O(s.dataset.value) : a(!i));
      },
      className: `nested-dropdown-group-${r}`,
      children: [
        /* @__PURE__ */ U("span", { className: "font-weight-bold", children: [
          t,
          " "
        ] }),
        /* @__PURE__ */ o("span", { className: "list-arrow", "aria-hidden": "true", children: i ? /* @__PURE__ */ o(E, { display: "caretFilledUp", alt: "arrow pointing up" }) : /* @__PURE__ */ o(E, { display: "caretFilledDown", alt: "arrow pointing down" }) }),
        /* @__PURE__ */ o(
          "ul",
          {
            "aria-expanded": i,
            role: "group",
            tabIndex: -1,
            "aria-labelledby": t,
            className: i ? "" : "hide",
            children: h.map((n) => {
              const [s, u] = n, C = u || s, c = t + s, y = c === m;
              return /* @__PURE__ */ U(
                "li",
                {
                  className: `selectable-item-${r}`,
                  tabIndex: 0,
                  role: "treeitem",
                  "aria-label": c,
                  "aria-selected": y,
                  "data-value": s,
                  onClick: (L) => {
                    O(s);
                  },
                  children: [
                    y ? /* @__PURE__ */ o("span", { className: "check-mark", "aria-hidden": "true", children: b }) : "",
                    C
                  ]
                },
                c
              );
            })
          }
        )
      ]
    },
    t
  ) });
}, q = ({
  options: h,
  activeGroup: f,
  activeSubGroup: r,
  filterIndex: t,
  listLabel: O,
  handleSelectedItems: m,
  loading: l
}) => {
  const i = p.useId(), [a, b] = p.useState(null), w = p.useMemo(() => r ? `${f} - ${r}` : "", [f, r]), [N, n] = p.useState(!1), [s, u] = p.useState(!1), C = p.useRef(null), c = p.useRef(null), y = p.useRef(null), L = (e, d) => {
    c.current.focus(), b(null), u(!1), m([String(e), String(d)]);
  }, I = (e) => {
    var _;
    const { nodeName: d, className: $, parentNode: x, nextSibling: S, lastChild: g, previousSibling: T } = e.target, k = y.current;
    switch (e.key) {
      case "ArrowDown": {
        d === "INPUT" ? (u(!0), k.firstChild.focus()) : $ === `selectable-item-${t}` ? (S ?? x.parentNode.nextSibling ?? c.current).focus() : g.className === "hide" ? (S ?? c.current).focus() : (_ = g == null ? void 0 : g.firstChild) == null || _.focus();
        break;
      }
      case "ArrowUp": {
        d === "INPUT" ? (u(!0), k.lastChild.lastChild.className === "hide" ? k.lastChild.focus() : k.lastChild.lastChild.lastChild.focus()) : $ === `selectable-item-${t}` ? (T ?? x.parentNode).focus() : T ? (T.lastChild.className === "hide" ? T : T.lastChild.lastChild).focus() : c == null || c.current.focus();
        break;
      }
      case "ArrowLeft": {
        d === "INPUT" && u(!1);
        break;
      }
      case "ArrowRight": {
        d === "INPUT" && u(!0);
        break;
      }
      case "Escape":
        u(!1), c.current.focus();
        break;
    }
  }, R = p.useMemo(() => D(a || "", h), [a, h]), V = (e) => {
    const d = e.target.value;
    u(!0), b(d);
  }, F = (e) => {
    e.relatedTarget === null || ![
      `nested-dropdown-${t}`,
      `nested-dropdown-group-${t}`,
      `selectable-item-${t}`,
      `main-nested-dropdown-container-${t}`
    ].includes(e.relatedTarget.className) ? (n(!1), u(!1)) : e.relatedTarget.focus();
  };
  function v(e, d) {
    e == null || e.addEventListener("blur", d);
  }
  return v(c.current, (e) => F(e)), v(y.current, (e) => F(e)), /* @__PURE__ */ o(K, { children: /* @__PURE__ */ U(
    "div",
    {
      id: i,
      ref: C,
      className: `nested-dropdown nested-dropdown-${t} ${s ? "open-filter" : ""}`,
      onKeyUp: I,
      children: [
        /* @__PURE__ */ U(
          "div",
          {
            className: `nested-dropdown-input-container${l || !h.length ? " disabled" : ""}`,
            "aria-label": "searchInput",
            "aria-disabled": l,
            role: "textbox",
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  id: `nested-dropdown-${t}`,
                  className: "search-input",
                  ref: c,
                  "aria-label": "searchInput",
                  "aria-haspopup": "true",
                  "aria-hidden": "false",
                  tabIndex: 0,
                  value: a !== null ? a : w,
                  onChange: V,
                  placeholder: l ? "Loading..." : "- Select -",
                  disabled: l || !h.length,
                  onClick: () => {
                    N && u(!s);
                  },
                  onFocus: () => n(!0)
                }
              ),
              /* @__PURE__ */ o("span", { className: "list-arrow", "aria-hidden": !0, children: /* @__PURE__ */ o(E, { display: "caretDown" }) })
            ]
          }
        ),
        l && /* @__PURE__ */ o(B, { spinnerType: "text-secondary" }),
        /* @__PURE__ */ o(
          "ul",
          {
            role: "tree",
            tabIndex: -1,
            "aria-labelledby": "main-nested-dropdown",
            "aria-expanded": s,
            ref: y,
            className: `main-nested-dropdown-container-${t}${s ? "" : " hide"}`,
            children: R.length ? R.map(([e, d], $) => {
              const [x, S] = e, g = String(S || x);
              return /* @__PURE__ */ o(
                M,
                {
                  handleBlur: F,
                  subOptions: d,
                  filterIndex: t,
                  label: g,
                  handleSubGroupSelect: (T) => {
                    L(x, T);
                  },
                  userSelectedLabel: f + r,
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
