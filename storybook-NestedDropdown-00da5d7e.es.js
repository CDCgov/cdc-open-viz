import { r as i, R as e } from "./storybook-index-45401197.es.js";
import { a as I } from "./storybook-Icon-96a1fdd8.es.js";
const L = ({ currentOptions: y = [], label: p, handleSecondTierSelect: g, tierOneIndex: E, userSelectedTierTwoLabel: U, userSearchTerm: d }) => {
  const [r, l] = i.useState(!0), f = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  i.useEffect(() => {
    l(d.length > 0 ? !0 : r);
  }, [d]);
  const w = (s) => {
    const c = s.target.className === "selectable-item" ? !0 : !r;
    l(c);
  }, S = (s) => {
    const c = s.target;
    s.key === "ArrowRight" ? l(!0) : s.key === "ArrowLeft" ? (c.className === "selectable-item" && c.parentNode.parentNode.focus(), l(!1)) : s.key === "Enter" && (c.className === "selectable-item" ? g(c.dataset.value) : l(!r));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", { role: "treeitem", key: p, tabIndex: 0, "aria-label": p, onClick: w, onKeyUp: S, className: "nested-dropdown-group" }, /* @__PURE__ */ e.createElement("span", { className: "font-weight-bold" }, p, " "), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, r ? /* @__PURE__ */ e.createElement(I, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(I, { display: "caretFilledDown" })), /* @__PURE__ */ e.createElement("ul", { "aria-expanded": r, role: "group", tabIndex: -1, "aria-labelledby": p, className: r ? "" : "hide" }, y.map((s, c) => {
    const h = p + s, m = h === U;
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        key: h,
        className: "selectable-item",
        tabIndex: 0,
        role: "treeitem",
        "aria-label": h,
        "aria-selected": m,
        "data-value": s,
        onClick: (o) => {
          g(s);
        }
      },
      m ? /* @__PURE__ */ e.createElement("span", { className: "check-mark", "aria-hidden": "true" }, f) : "",
      s
    );
  }))));
}, M = ({ currentFilter: y, listLabel: p, handleSelectedItems: g, valueOrder: E = [], subGroupingValueOrder: U = [] }) => {
  var K;
  const d = {}, r = y.active, l = ((K = y.subGroupingFilter) == null ? void 0 : K.active) ?? "";
  E.forEach((t, a) => {
    d[t] = U[a];
  });
  const [f, w] = i.useState(""), [S, s] = i.useState(l !== "" ? `${r} - ${l}` : "Select an Option"), [c, h] = i.useState(!1), [m, o] = i.useState(!1), u = i.useRef(null), A = i.useRef(null), R = (t, a) => {
    u.current.focus();
    const n = `${t} - ${a}`;
    w(""), o(!1), s(n), g([t, a]);
  }, D = (t) => {
    var v;
    const { nodeName: a, className: n, parentNode: b, nextSibling: k, lastChild: x, previousSibling: N } = t.target, F = A.current;
    switch (t.key) {
      case "ArrowDown": {
        a === "INPUT" ? (o(!0), F.firstChild.focus()) : n === "selectable-item" ? (k ?? b.parentNode.nextSibling ?? u.current).focus() : x.className === "hide" ? (k ?? u.current).focus() : (v = x == null ? void 0 : x.firstChild) == null || v.focus();
        break;
      }
      case "ArrowUp": {
        a === "INPUT" ? (o(!0), F.lastChild.lastChild.className === "hide" ? F.lastChild.focus() : F.lastChild.lastChild.lastChild.focus()) : n === "selectable-item" ? (N ?? b.parentNode).focus() : N ? (N.lastChild.className === "hide" ? N : N.lastChild.lastChild).focus() : u == null || u.current.focus();
        break;
      }
      case "ArrowLeft": {
        a === "INPUT" && o(!1);
        break;
      }
      case "ArrowRight": {
        a === "INPUT" && o(!0);
        break;
      }
      case "Escape":
        o(!1), u.current.focus();
        break;
    }
  }, T = i.useMemo(() => {
    if (!f)
      return d;
    const t = {}, a = new RegExp(`^${f}`, "i");
    for (const n in d)
      if (n.match(a))
        t[n] = [...d[n]];
      else {
        const b = d[n].filter((k) => String(k).match(a));
        b.length > 0 && (t[n] = b);
      }
    return t;
  }, [f]), C = E.length === 0 ? Object.keys(T) : E, $ = (t) => {
    const a = t.target.value;
    o(!0), w(a), s(a);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { id: "nested-dropdown-container", className: "nested-dropdown", onKeyUp: D }, /* @__PURE__ */ e.createElement("div", { className: "nested-dropdown-input-container", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "search-input",
      ref: u,
      "aria-label": "searchInput",
      "aria-haspopup": "true",
      "aria-hidden": "false",
      tabIndex: 0,
      value: S,
      onChange: $,
      placeholder: "Select or type to search",
      onClick: () => {
        c && o(!m);
      },
      onFocus: () => h(!0),
      onBlur: () => h(!1)
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, m ? /* @__PURE__ */ e.createElement(I, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(I, { display: "caretFilledDown" }))), /* @__PURE__ */ e.createElement("ul", { role: "tree", key: p, tabIndex: -1, "aria-labelledby": "main-nested-dropdown", "aria-expanded": m, ref: A, className: `main-nested-dropdown-container ${m ? "" : "hide"}` }, T && C.length > 0 ? C.map((t, a) => /* @__PURE__ */ e.createElement(
    L,
    {
      currentOptions: T[t],
      label: t,
      handleSecondTierSelect: (n) => {
        R(t, n);
      },
      tierOneIndex: a,
      userSelectedTierTwoLabel: r + l,
      userSearchTerm: f
    }
  )) : "There are no matching items")));
};
export {
  M as N
};
