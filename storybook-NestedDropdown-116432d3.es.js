import { r as c, R as e } from "./storybook-index-45401197.es.js";
import { a as I } from "./storybook-Icon-96a1fdd8.es.js";
const P = ({ currentOptions: T, label: u, handleSecondTierSelect: h, tierOneIndex: O, userSelectedTierTwoLabel: U, userSearchTerm: p }) => {
  if (T === void 0)
    return;
  const [o, r] = c.useState(!0), g = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  c.useEffect(() => {
    r(p.length > 0 ? !0 : o);
  }, [p]);
  const N = (s) => {
    const l = s.target.className === "selectable-item" ? !0 : !o;
    r(l);
  }, m = (s) => {
    const l = s.target;
    s.key === "ArrowRight" ? r(!0) : s.key === "ArrowLeft" ? (l.className === "selectable-item" && l.parentNode.parentNode.focus(), r(!1)) : s.key === "Enter" && (l.className === "selectable-item" ? h(l.dataset.value) : r(!o));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", { role: "treeitem", key: u, tabIndex: 0, "aria-label": u, onClick: N, onKeyUp: m, className: "nested-dropdown-group" }, /* @__PURE__ */ e.createElement("span", { className: "groupTitle" }, u, " "), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, o ? /* @__PURE__ */ e.createElement(I, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(I, { display: "caretFilledDown" })), /* @__PURE__ */ e.createElement("ul", { "aria-expanded": o, role: "group", tabIndex: -1, "aria-labelledby": u, className: o ? "" : "hide" }, T.map((s, l) => {
    const f = u + s, E = f === U;
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        key: f,
        className: "selectable-item",
        tabIndex: 0,
        role: "treeitem",
        "aria-label": f,
        "aria-selected": E,
        "data-value": s,
        onClick: (S) => {
          h(s);
        }
      },
      E ? /* @__PURE__ */ e.createElement("span", { className: "checkMark", "aria-hidden": "true" }, g) : "",
      s
    );
  }))));
}, H = ({ data: T, index: u, currentFilter: h, listLabel: O, handleSelectedItems: U, valueOrder: p = [], subGroupingValueOrder: o = [] }) => {
  var R;
  const r = {}, g = h.active, N = ((R = h.subGroupingFilter) == null ? void 0 : R.active) ?? "";
  p.forEach((t, a) => {
    r[t] = o[a];
  });
  const [m, s] = c.useState(""), [l, f] = c.useState(N !== "" ? `${g} - ${N}` : "Select an Option"), [E, S] = c.useState(!1), [w, i] = c.useState(!1), d = c.useRef(null), K = c.useRef(null), $ = (t, a) => {
    d.current.focus();
    const n = `${t} - ${a}`;
    s(""), i(!1), f(n), U(u, [t, a]);
  }, L = (t) => {
    var D;
    const { nodeName: a, className: n, parentNode: b, nextSibling: k, lastChild: x, previousSibling: y } = t.target, F = K.current;
    switch (t.key) {
      case "ArrowDown": {
        a === "INPUT" ? (i(!0), F.firstChild.focus()) : n === "selectable-item" ? (k ?? b.parentNode.nextSibling ?? d.current).focus() : x.className === "hide" ? (k ?? d.current).focus() : (D = x == null ? void 0 : x.firstChild) == null || D.focus();
        break;
      }
      case "ArrowUp": {
        a === "INPUT" ? (i(!0), F.lastChild.lastChild.className === "hide" ? F.lastChild.focus() : F.lastChild.lastChild.lastChild.focus()) : n === "selectable-item" ? (y ?? b.parentNode).focus() : y ? (y.lastChild.className === "hide" ? y : y.lastChild.lastChild).focus() : d == null || d.current.focus();
        break;
      }
      case "ArrowLeft": {
        a === "INPUT" && i(!1);
        break;
      }
      case "ArrowRight": {
        a === "INPUT" && i(!0);
        break;
      }
      case "Escape":
        i(!1), d.current.focus();
        break;
    }
  }, A = c.useMemo(() => {
    if (!m)
      return r;
    const t = {}, a = new RegExp(`^${m}`, "i");
    for (const n in r)
      if (n.match(a))
        t[n] = [...r[n]];
      else {
        const b = r[n].filter((k) => String(k).match(a));
        b.length > 0 && (t[n] = b);
      }
    return t;
  }, [m]), v = p.length === 0 ? Object.keys(A) : p, M = (t) => {
    const a = t.target.value;
    i(!0), s(a), f(a);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { id: "nested-dropdown-container", className: "nested-dropdown", onKeyUp: L }, /* @__PURE__ */ e.createElement("div", { className: "nested-dropdown-input-container", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "search-input",
      ref: d,
      "aria-label": "searchInput",
      "aria-haspopup": "true",
      "aria-hidden": "false",
      tabIndex: 0,
      value: l,
      onChange: M,
      placeholder: "Select or type to search",
      onClick: () => {
        E && i(!w);
      },
      onFocus: () => S(!0),
      onBlur: () => S(!1)
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, w ? /* @__PURE__ */ e.createElement(I, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(I, { display: "caretFilledDown" }))), /* @__PURE__ */ e.createElement("ul", { role: "tree", key: O, tabIndex: -1, "aria-labelledby": "main-nested-dropdown", "aria-expanded": w, ref: K, className: `main-nested-dropdown-container ${w ? "" : "hide"}` }, A && v.length > 0 ? v.map((t, a) => /* @__PURE__ */ e.createElement(
    P,
    {
      currentOptions: A[t],
      label: t,
      handleSecondTierSelect: (n) => {
        $(t, n);
      },
      tierOneIndex: a,
      userSelectedTierTwoLabel: g + N,
      userSearchTerm: m
    }
  )) : "There are no matching items")));
};
export {
  H as N
};
