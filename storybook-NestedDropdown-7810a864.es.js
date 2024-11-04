import { r as p, R as e } from "./storybook-index-45401197.es.js";
import { a as U } from "./storybook-Icon-73ec66ec.es.js";
const R = (m, c) => {
  if (m === void 0 || m === "")
    return c || [];
  const i = new RegExp(`^${m}`, "i");
  return c.filter(([a, r]) => {
    const [u, f] = a;
    return String(f || u).match(i) || r.some(([n, t]) => String(t || n).match(i));
  }).map(([a, r]) => {
    const [u, f] = a;
    if (String(f || u).match(i))
      return [a, r];
    const n = r.filter(([t, h]) => String(h || t).match(i));
    return [a, n];
  });
}, D = ({ subOptions: m, label: c, handleSubGroupSelect: i, userSelectedLabel: w, userSearchTerm: T }) => {
  const [a, r] = p.useState(!0), u = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  p.useEffect(() => {
    r(T.length > 0 ? !0 : a);
  }, [T]);
  const f = (n) => {
    const t = n.target.className === "selectable-item" ? !0 : !a;
    r(t);
  }, E = (n) => {
    const t = n.target;
    n.key === "ArrowRight" ? r(!0) : n.key === "ArrowLeft" ? (t.className === "selectable-item" && t.parentNode.parentNode.focus(), r(!1)) : n.key === "Enter" && (t.className === "selectable-item" ? i(t.dataset.value) : r(!a));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "li",
    {
      role: "treeitem",
      key: c,
      tabIndex: 0,
      "aria-label": c,
      onClick: f,
      onKeyUp: E,
      className: "nested-dropdown-group"
    },
    /* @__PURE__ */ e.createElement("span", { className: "font-weight-bold" }, c, " "),
    /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, a ? /* @__PURE__ */ e.createElement(U, { display: "caretFilledUp", alt: "arrow pointing up" }) : /* @__PURE__ */ e.createElement(U, { display: "caretFilledDown", alt: "arrow pointing down" })),
    /* @__PURE__ */ e.createElement(
      "ul",
      {
        "aria-expanded": a,
        role: "group",
        tabIndex: -1,
        "aria-labelledby": c,
        className: a ? "" : "hide"
      },
      m.map((n) => {
        const [t, h] = n, g = h || t, s = c + t, l = s === w;
        return /* @__PURE__ */ e.createElement(
          "li",
          {
            key: s,
            className: "selectable-item",
            tabIndex: 0,
            role: "treeitem",
            "aria-label": s,
            "aria-selected": l,
            "data-value": t,
            onClick: (k) => {
              i(t);
            }
          },
          l ? /* @__PURE__ */ e.createElement("span", { className: "check-mark", "aria-hidden": "true" }, u) : "",
          g
        );
      })
    )
  ));
}, $ = ({
  options: m,
  activeGroup: c,
  activeSubGroup: i,
  listLabel: w,
  handleSelectedItems: T
}) => {
  const a = c, r = i || "", [u, f] = p.useState(""), [E, n] = p.useState(
    r !== "" ? `${a} - ${r}` : ""
  ), [t, h] = p.useState(!1), [g, s] = p.useState(!1), l = p.useRef(null), k = p.useRef(null), C = (d, o) => {
    l.current.focus();
    const N = `${d} - ${o}`;
    f(""), s(!1), n(N), T([String(d), String(o)]);
  }, v = (d) => {
    var A;
    const { nodeName: o, className: N, parentNode: y, nextSibling: O, lastChild: b, previousSibling: x } = d.target, S = k.current;
    switch (d.key) {
      case "ArrowDown": {
        o === "INPUT" ? (s(!0), S.firstChild.focus()) : N === "selectable-item" ? (O ?? y.parentNode.nextSibling ?? l.current).focus() : b.className === "hide" ? (O ?? l.current).focus() : (A = b == null ? void 0 : b.firstChild) == null || A.focus();
        break;
      }
      case "ArrowUp": {
        o === "INPUT" ? (s(!0), S.lastChild.lastChild.className === "hide" ? S.lastChild.focus() : S.lastChild.lastChild.lastChild.focus()) : N === "selectable-item" ? (x ?? y.parentNode).focus() : x ? (x.lastChild.className === "hide" ? x : x.lastChild.lastChild).focus() : l == null || l.current.focus();
        break;
      }
      case "ArrowLeft": {
        o === "INPUT" && s(!1);
        break;
      }
      case "ArrowRight": {
        o === "INPUT" && s(!0);
        break;
      }
      case "Escape":
        s(!1), l.current.focus();
        break;
    }
  }, I = p.useMemo(() => R(u, m), [u, m]), K = (d) => {
    const o = d.target.value;
    s(!0), f(o), n(o);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, w && /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, w), /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "nested-dropdown-container",
      className: `nested-dropdown ${g ? "open-filter" : ""}`,
      onKeyUp: v
    },
    /* @__PURE__ */ e.createElement("div", { className: "nested-dropdown-input-container", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        className: "search-input",
        ref: l,
        "aria-label": "searchInput",
        "aria-haspopup": "true",
        "aria-hidden": "false",
        tabIndex: 0,
        value: E,
        onChange: K,
        placeholder: "Select an Option",
        onClick: () => {
          t && s(!g);
        },
        onFocus: () => h(!0),
        onBlur: () => h(!1)
      }
    ), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, /* @__PURE__ */ e.createElement(U, { display: "caretDown" }))),
    /* @__PURE__ */ e.createElement(
      "ul",
      {
        role: "tree",
        key: w,
        tabIndex: -1,
        "aria-labelledby": "main-nested-dropdown",
        "aria-expanded": g,
        ref: k,
        className: `main-nested-dropdown-container ${g ? "" : "hide"}`
      },
      I.length ? I.map(([d, o], N) => {
        const [y, O] = d, b = String(O || y);
        return /* @__PURE__ */ e.createElement(
          D,
          {
            key: b + "_" + N,
            subOptions: o,
            label: b,
            handleSubGroupSelect: (x) => {
              C(y, x);
            },
            userSelectedLabel: a + r,
            userSearchTerm: u
          }
        );
      }) : "There are no matching items"
    )
  ));
};
export {
  $ as N
};
