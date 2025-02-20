import { r as d } from "./storybook-index-45401197.es.js";
import { a as U } from "./storybook-Icon-d8cd8abc.es.js";
import { L as _ } from "./storybook-Loader-f4ec7b29.es.js";
const I = (p, f) => {
  if (p === void 0 || p === "")
    return f || [];
  const r = new RegExp(`^${p}`, "i");
  return f.filter(([m, c]) => {
    const [o, s] = m;
    return String(s || o).match(r) || c.some(([h, g]) => String(g || h).match(r));
  }).map(([m, c]) => {
    const [o, s] = m;
    if (String(s || o).match(r))
      return [m, c];
    const h = c.filter(([g, n]) => String(n || g).match(r));
    return [m, h];
  });
}, V = ({ subOptions: p, handleBlur: f, filterIndex: r, label: t, handleSubGroupSelect: R, userSelectedLabel: m, userSearchTerm: c }) => {
  const [o, s] = d.useState(!0), w = /* @__PURE__ */ React.createElement(React.Fragment, null, "✔");
  d.useEffect(() => {
    s(c.length > 0 ? !0 : o);
  }, [c]);
  const h = (n) => {
    const a = n.target.className === `selectable-item-${r}` ? !0 : !o;
    s(a);
  }, g = (n) => {
    const a = n.target;
    n.key === "ArrowRight" ? s(!0) : n.key === "ArrowLeft" ? (a.className === `selectable-item-${r}` && a.parentNode.parentNode.focus(), s(!1)) : n.key === "Enter" && (a.className === `selectable-item-${r}` ? R(a.dataset.value) : s(!o));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "li",
    {
      role: "treeitem",
      key: t,
      tabIndex: 0,
      "aria-label": t,
      onClick: h,
      onBlur: f,
      onKeyUp: g,
      className: `nested-dropdown-group-${r}`
    },
    /* @__PURE__ */ React.createElement("span", { className: "font-weight-bold" }, t, " "),
    /* @__PURE__ */ React.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, o ? /* @__PURE__ */ React.createElement(U, { display: "caretFilledUp", alt: "arrow pointing up" }) : /* @__PURE__ */ React.createElement(U, { display: "caretFilledDown", alt: "arrow pointing down" })),
    /* @__PURE__ */ React.createElement(
      "ul",
      {
        "aria-expanded": o,
        role: "group",
        tabIndex: -1,
        "aria-labelledby": t,
        className: o ? "" : "hide"
      },
      p.map((n) => {
        const [a, u] = n, x = u || a, l = t + a, N = l === m;
        return /* @__PURE__ */ React.createElement(
          "li",
          {
            key: l,
            className: `selectable-item-${r}`,
            tabIndex: 0,
            role: "treeitem",
            "aria-label": l,
            "aria-selected": N,
            "data-value": a,
            onClick: (F) => {
              R(a);
            }
          },
          N ? /* @__PURE__ */ React.createElement("span", { className: "check-mark", "aria-hidden": "true" }, w) : "",
          x
        );
      })
    )
  ));
}, P = ({
  options: p,
  activeGroup: f,
  activeSubGroup: r,
  filterIndex: t,
  listLabel: R,
  handleSelectedItems: m,
  loading: c
}) => {
  const o = d.useId(), [s, w] = d.useState(null), h = d.useMemo(() => r ? `${f} - ${r}` : "", [f, r]), [g, n] = d.useState(!1), [a, u] = d.useState(!1), x = d.useRef(null), l = d.useRef(null), N = d.useRef(null), F = (e, i) => {
    l.current.focus(), w(null), u(!1), m([String(e), String(i)]);
  }, L = (e) => {
    var K;
    const { nodeName: i, className: E, parentNode: y, nextSibling: O, lastChild: T, previousSibling: b } = e.target, k = N.current;
    switch (e.key) {
      case "ArrowDown": {
        i === "INPUT" ? (u(!0), k.firstChild.focus()) : E === `selectable-item-${t}` ? (O ?? y.parentNode.nextSibling ?? l.current).focus() : T.className === "hide" ? (O ?? l.current).focus() : (K = T == null ? void 0 : T.firstChild) == null || K.focus();
        break;
      }
      case "ArrowUp": {
        i === "INPUT" ? (u(!0), k.lastChild.lastChild.className === "hide" ? k.lastChild.focus() : k.lastChild.lastChild.lastChild.focus()) : E === `selectable-item-${t}` ? (b ?? y.parentNode).focus() : b ? (b.lastChild.className === "hide" ? b : b.lastChild.lastChild).focus() : l == null || l.current.focus();
        break;
      }
      case "ArrowLeft": {
        i === "INPUT" && u(!1);
        break;
      }
      case "ArrowRight": {
        i === "INPUT" && u(!0);
        break;
      }
      case "Escape":
        u(!1), l.current.focus();
        break;
    }
  }, C = d.useMemo(() => I(s || "", p), [s, p]), v = (e) => {
    const i = e.target.value;
    u(!0), w(i);
  }, $ = (e) => {
    e.relatedTarget === null || ![
      `nested-dropdown-${t}`,
      `nested-dropdown-group-${t}`,
      `selectable-item-${t}`,
      `main-nested-dropdown-container-${t}`
    ].includes(e.relatedTarget.className) ? (n(!1), u(!1)) : e.relatedTarget.focus();
  };
  function A(e, i) {
    e == null || e.addEventListener("blur", i);
  }
  return A(l.current, (e) => $(e)), A(N.current, (e) => $(e)), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "div",
    {
      id: o,
      ref: x,
      className: `nested-dropdown nested-dropdown-${t} ${a ? "open-filter" : ""}`,
      onKeyUp: L
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `nested-dropdown-input-container${c || !p.length ? " disabled" : ""}`,
        "aria-label": "searchInput",
        "aria-disabled": c,
        role: "textbox"
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          id: `nested-dropdown-${t}`,
          className: "search-input",
          ref: l,
          "aria-label": "searchInput",
          "aria-haspopup": "true",
          "aria-hidden": "false",
          tabIndex: 0,
          value: s !== null ? s : h,
          onChange: v,
          placeholder: c ? "Loading..." : "- Select -",
          disabled: c || !p.length,
          onClick: () => {
            g && u(!a);
          },
          onFocus: () => n(!0)
        }
      ),
      /* @__PURE__ */ React.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, /* @__PURE__ */ React.createElement(U, { display: "caretDown" }))
    ),
    c && /* @__PURE__ */ React.createElement(_, { spinnerType: "text-secondary" }),
    /* @__PURE__ */ React.createElement(
      "ul",
      {
        role: "tree",
        key: R,
        tabIndex: -1,
        "aria-labelledby": "main-nested-dropdown",
        "aria-expanded": a,
        ref: N,
        className: `main-nested-dropdown-container-${t}${a ? "" : " hide"}`
      },
      C.length ? C.map(([e, i], E) => {
        const [y, O] = e, T = String(O || y);
        return /* @__PURE__ */ React.createElement(
          V,
          {
            key: T + "_" + E,
            handleBlur: $,
            subOptions: i,
            filterIndex: t,
            label: T,
            handleSubGroupSelect: (b) => {
              F(y, b);
            },
            userSelectedLabel: f + r,
            userSearchTerm: s || ""
          }
        );
      }) : "There are no matching items"
    )
  ));
};
export {
  P as N
};
