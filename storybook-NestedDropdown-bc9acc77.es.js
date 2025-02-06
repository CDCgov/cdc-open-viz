import { r as h, R as e } from "./storybook-index-45401197.es.js";
import { a as F } from "./storybook-Icon-4f5978ba.es.js";
import { L as D } from "./storybook-Loader-f4ec7b29.es.js";
const I = (p, o) => {
  if (p === void 0 || p === "")
    return o || [];
  const s = new RegExp(`^${p}`, "i");
  return o.filter(([m, t]) => {
    const [i, u] = m;
    return String(u || i).match(s) || t.some(([g, r]) => String(r || g).match(s));
  }).map(([m, t]) => {
    const [i, u] = m;
    if (String(u || i).match(s))
      return [m, t];
    const g = t.filter(([r, a]) => String(a || r).match(s));
    return [m, g];
  });
}, _ = ({ subOptions: p, filterIndex: o, label: s, handleSubGroupSelect: l, userSelectedLabel: O, userSearchTerm: m }) => {
  const [t, i] = h.useState(!0), u = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  h.useEffect(() => {
    i(m.length > 0 ? !0 : t);
  }, [m]);
  const N = (r) => {
    const a = r.target.className === `selectable-item-${o}` ? !0 : !t;
    i(a);
  }, g = (r) => {
    const a = r.target;
    r.key === "ArrowRight" ? i(!0) : r.key === "ArrowLeft" ? (a.className === `selectable-item-${o}` && a.parentNode.parentNode.focus(), i(!1)) : r.key === "Enter" && (a.className === `selectable-item-${o}` ? l(a.dataset.value) : i(!t));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "li",
    {
      role: "treeitem",
      key: s,
      tabIndex: 0,
      "aria-label": s,
      onClick: N,
      onKeyUp: g,
      className: `nested-dropdown-group-${o}`
    },
    /* @__PURE__ */ e.createElement("span", { className: "font-weight-bold" }, s, " "),
    /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, t ? /* @__PURE__ */ e.createElement(F, { display: "caretFilledUp", alt: "arrow pointing up" }) : /* @__PURE__ */ e.createElement(F, { display: "caretFilledDown", alt: "arrow pointing down" })),
    /* @__PURE__ */ e.createElement(
      "ul",
      {
        "aria-expanded": t,
        role: "group",
        tabIndex: -1,
        "aria-labelledby": s,
        className: t ? "" : "hide"
      },
      p.map((r) => {
        const [a, w] = r, d = w || a, c = s + a, y = c === O;
        return /* @__PURE__ */ e.createElement(
          "li",
          {
            key: c,
            className: `selectable-item-${o}`,
            tabIndex: 0,
            role: "treeitem",
            "aria-label": c,
            "aria-selected": y,
            "data-value": a,
            onClick: ($) => {
              l(a);
            }
          },
          y ? /* @__PURE__ */ e.createElement("span", { className: "check-mark", "aria-hidden": "true" }, u) : "",
          d
        );
      })
    )
  ));
}, P = ({
  options: p,
  activeGroup: o,
  activeSubGroup: s,
  filterIndex: l,
  listLabel: O,
  handleSelectedItems: m,
  loading: t
}) => {
  const i = h.useId(), [u, N] = h.useState(null), g = h.useMemo(() => s ? `${o} - ${s}` : "", [o, s]), [r, a] = h.useState(!1), [w, d] = h.useState(!1), c = h.useRef(null), y = h.useRef(null), $ = (n, f) => {
    c.current.focus(), N(null), d(!1), m([String(n), String(f)]);
  }, K = (n) => {
    var A;
    const { nodeName: f, className: x, parentNode: E, nextSibling: k, lastChild: T, previousSibling: b } = n.target, S = y.current;
    switch (n.key) {
      case "ArrowDown": {
        f === "INPUT" ? (d(!0), S.firstChild.focus()) : x === `selectable-item-${l}` ? (k ?? E.parentNode.nextSibling ?? c.current).focus() : T.className === "hide" ? (k ?? c.current).focus() : (A = T == null ? void 0 : T.firstChild) == null || A.focus();
        break;
      }
      case "ArrowUp": {
        f === "INPUT" ? (d(!0), S.lastChild.lastChild.className === "hide" ? S.lastChild.focus() : S.lastChild.lastChild.lastChild.focus()) : x === `selectable-item-${l}` ? (b ?? E.parentNode).focus() : b ? (b.lastChild.className === "hide" ? b : b.lastChild.lastChild).focus() : c == null || c.current.focus();
        break;
      }
      case "ArrowLeft": {
        f === "INPUT" && d(!1);
        break;
      }
      case "ArrowRight": {
        f === "INPUT" && d(!0);
        break;
      }
      case "Escape":
        d(!1), c.current.focus();
        break;
    }
  }, C = h.useMemo(() => I(u || "", p), [u, p]), L = (n) => {
    const f = n.target.value;
    d(!0), N(f);
  }, R = (n) => {
    (n.relatedTarget === null || ![
      `nested-dropdown-${l}`,
      `nested-dropdown-group-${l}`,
      `selectable-item-${l}`
    ].includes(n.relatedTarget.className)) && (a(!1), d(!1));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      id: i,
      className: `nested-dropdown nested-dropdown-${l} ${w ? "open-filter" : ""}`,
      onKeyUp: K
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: `nested-dropdown-input-container${t || !p.length ? " disabled" : ""}`,
        "aria-label": "searchInput",
        "aria-disabled": t,
        role: "textbox"
      },
      /* @__PURE__ */ e.createElement(
        "input",
        {
          id: `nested-dropdown-${l}`,
          className: "search-input",
          ref: c,
          "aria-label": "searchInput",
          "aria-haspopup": "true",
          "aria-hidden": "false",
          tabIndex: 0,
          value: u !== null ? u : g,
          onChange: L,
          placeholder: t ? "Loading..." : "- Select -",
          disabled: t || !p.length,
          onClick: () => {
            r && d(!w);
          },
          onFocus: () => a(!0),
          onBlur: (n) => R(n)
        }
      ),
      /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, /* @__PURE__ */ e.createElement(F, { display: "caretDown" }))
    ),
    t && /* @__PURE__ */ e.createElement(D, { spinnerType: "text-secondary" }),
    /* @__PURE__ */ e.createElement(
      "ul",
      {
        role: "tree",
        key: O,
        tabIndex: -1,
        "aria-labelledby": "main-nested-dropdown",
        "aria-expanded": w,
        ref: y,
        className: `main-nested-dropdown-container ${w ? "" : "hide"}`
      },
      C.length ? C.map(([n, f], x) => {
        const [E, k] = n, T = String(k || E);
        return /* @__PURE__ */ e.createElement(
          _,
          {
            key: T + "_" + x,
            subOptions: f,
            filterIndex: l,
            label: T,
            handleSubGroupSelect: (b) => {
              $(E, b);
            },
            userSelectedLabel: o + s,
            userSearchTerm: u || ""
          }
        );
      }) : "There are no matching items"
    )
  ));
};
export {
  P as N
};
