import { r as d, R as e } from "./storybook-index-45401197.es.js";
import { a as F } from "./storybook-Icon-4f5978ba.es.js";
import { L as D } from "./storybook-Loader-f4ec7b29.es.js";
const v = (p, i) => {
  if (p === void 0 || p === "")
    return i || [];
  const s = new RegExp(`^${p}`, "i");
  return i.filter(([m, t]) => {
    const [u, f] = m;
    return String(f || u).match(s) || t.some(([w, n]) => String(n || w).match(s));
  }).map(([m, t]) => {
    const [u, f] = m;
    if (String(f || u).match(s))
      return [m, t];
    const w = t.filter(([n, a]) => String(a || n).match(s));
    return [m, w];
  });
}, _ = ({ subOptions: p, filterIndex: i, label: s, handleSubGroupSelect: o, userSelectedLabel: x, userSearchTerm: m }) => {
  const [t, u] = d.useState(!0), f = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  d.useEffect(() => {
    u(m.length > 0 ? !0 : t);
  }, [m]);
  const N = (n) => {
    const a = n.target.className === `selectable-item-${i}` ? !0 : !t;
    u(a);
  }, w = (n) => {
    const a = n.target;
    n.key === "ArrowRight" ? u(!0) : n.key === "ArrowLeft" ? (a.className === `selectable-item-${i}` && a.parentNode.parentNode.focus(), u(!1)) : n.key === "Enter" && (a.className === `selectable-item-${i}` ? o(a.dataset.value) : u(!t));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "li",
    {
      role: "treeitem",
      key: s,
      tabIndex: 0,
      "aria-label": s,
      onClick: N,
      onKeyUp: w,
      className: `nested-dropdown-group-${i}`
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
      p.map((n) => {
        const [a, O] = n, k = O || a, g = s + a, l = g === x;
        return /* @__PURE__ */ e.createElement(
          "li",
          {
            key: g,
            className: `selectable-item-${i}`,
            tabIndex: 0,
            role: "treeitem",
            "aria-label": g,
            "aria-selected": l,
            "data-value": a,
            onClick: (h) => {
              o(a);
            }
          },
          l ? /* @__PURE__ */ e.createElement("span", { className: "check-mark", "aria-hidden": "true" }, f) : "",
          k
        );
      })
    )
  ));
}, G = ({
  options: p,
  activeGroup: i,
  activeSubGroup: s,
  filterIndex: o,
  listLabel: x,
  handleSelectedItems: m,
  loading: t
}) => {
  const u = d.useId(), [f, N] = d.useState(""), [w, n] = d.useState(""), a = d.useMemo(() => s ? `${i} - ${s}` : "", [s]), [O, k] = d.useState(!1), [g, l] = d.useState(!1), h = d.useRef(null), C = d.useRef(null), I = (r, c) => {
    h.current.focus();
    const y = `${r} - ${c}`;
    N(""), l(!1), n(y), m([String(r), String(c)]);
  }, L = (r) => {
    var K;
    const { nodeName: c, className: y, parentNode: E, nextSibling: $, lastChild: b, previousSibling: T } = r.target, S = C.current;
    switch (r.key) {
      case "ArrowDown": {
        c === "INPUT" ? (l(!0), S.firstChild.focus()) : y === `selectable-item-${o}` ? ($ ?? E.parentNode.nextSibling ?? h.current).focus() : b.className === "hide" ? ($ ?? h.current).focus() : (K = b == null ? void 0 : b.firstChild) == null || K.focus();
        break;
      }
      case "ArrowUp": {
        c === "INPUT" ? (l(!0), S.lastChild.lastChild.className === "hide" ? S.lastChild.focus() : S.lastChild.lastChild.lastChild.focus()) : y === `selectable-item-${o}` ? (T ?? E.parentNode).focus() : T ? (T.lastChild.className === "hide" ? T : T.lastChild.lastChild).focus() : h == null || h.current.focus();
        break;
      }
      case "ArrowLeft": {
        c === "INPUT" && l(!1);
        break;
      }
      case "ArrowRight": {
        c === "INPUT" && l(!0);
        break;
      }
      case "Escape":
        l(!1), h.current.focus();
        break;
    }
  }, A = d.useMemo(() => v(f, p), [f, p]), R = (r) => {
    const c = r.target.value;
    l(!0), N(c), n(c);
  }, V = (r) => {
    (r.relatedTarget === null || ![
      `nested-dropdown-${o}`,
      `nested-dropdown-group-${o}`,
      `selectable-item-${o}`
    ].includes(r.relatedTarget.className)) && (k(!1), l(!1));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      id: u,
      className: `nested-dropdown nested-dropdown-${o} ${g ? "open-filter" : ""}`,
      onKeyUp: L
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
          id: `nested-dropdown-${o}`,
          className: "search-input",
          ref: h,
          "aria-label": "searchInput",
          "aria-haspopup": "true",
          "aria-hidden": "false",
          tabIndex: 0,
          value: w || a,
          onChange: R,
          placeholder: t ? "Loading..." : "- Select -",
          disabled: t || !p.length,
          onClick: () => {
            O && l(!g);
          },
          onFocus: () => k(!0),
          onBlur: (r) => V(r)
        }
      ),
      /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, /* @__PURE__ */ e.createElement(F, { display: "caretDown" }))
    ),
    t && /* @__PURE__ */ e.createElement(D, { spinnerType: "text-secondary" }),
    /* @__PURE__ */ e.createElement(
      "ul",
      {
        role: "tree",
        key: x,
        tabIndex: -1,
        "aria-labelledby": "main-nested-dropdown",
        "aria-expanded": g,
        ref: C,
        className: `main-nested-dropdown-container ${g ? "" : "hide"}`
      },
      A.length ? A.map(([r, c], y) => {
        const [E, $] = r, b = String($ || E);
        return /* @__PURE__ */ e.createElement(
          _,
          {
            key: b + "_" + y,
            subOptions: c,
            filterIndex: o,
            label: b,
            handleSubGroupSelect: (T) => {
              I(E, T);
            },
            userSelectedLabel: i + s,
            userSearchTerm: f
          }
        );
      }) : "There are no matching items"
    )
  ));
};
export {
  G as N
};
