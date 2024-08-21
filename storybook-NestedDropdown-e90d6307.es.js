import { r as u, R as e } from "./storybook-index-45401197.es.js";
import { I as x } from "./storybook-Icon-9a8d8f01.es.js";
const R = ({ currentOptions: r = [], label: f, handleSubGroupSelect: y, userSelectedLabel: E, userSearchTerm: N }) => {
  const [o, c] = u.useState(!0), w = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  u.useEffect(() => {
    c(N.length > 0 ? !0 : o);
  }, [N]);
  const S = (n) => {
    const i = n.target.className === "selectable-item" ? !0 : !o;
    c(i);
  }, k = (n) => {
    const i = n.target;
    n.key === "ArrowRight" ? c(!0) : n.key === "ArrowLeft" ? (i.className === "selectable-item" && i.parentNode.parentNode.focus(), c(!1)) : n.key === "Enter" && (i.className === "selectable-item" ? y(i.dataset.value) : c(!o));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", { role: "treeitem", key: f, tabIndex: 0, "aria-label": f, onClick: S, onKeyUp: k, className: "nested-dropdown-group" }, /* @__PURE__ */ e.createElement("span", { className: "font-weight-bold" }, f, " "), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, o ? /* @__PURE__ */ e.createElement(x, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(x, { display: "caretFilledDown" })), /* @__PURE__ */ e.createElement("ul", { "aria-expanded": o, role: "group", tabIndex: -1, "aria-labelledby": f, className: o ? "" : "hide" }, r.map((n, i) => {
    const p = f + n, l = p === E;
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        key: p,
        className: "selectable-item",
        tabIndex: 0,
        role: "treeitem",
        "aria-label": p,
        "aria-selected": l,
        "data-value": n,
        onClick: (d) => {
          y(n);
        }
      },
      l ? /* @__PURE__ */ e.createElement("span", { className: "check-mark", "aria-hidden": "true" }, w) : "",
      n
    );
  }))));
}, L = ({ currentFilter: r, listLabel: f, handleSelectedItems: y }) => {
  var C;
  const E = u.useMemo(() => {
    var t;
    return (((t = r.orderedValues) == null ? void 0 : t.filter((s) => r.values.includes(s))) || r.values).map((s) => {
      if (!r.subGrouping)
        return [s, []];
      const { orderedValues: m, values: g } = r.subGrouping.valuesLookup[s], b = (m == null ? void 0 : m.filter((h) => g.includes(h))) || g;
      return [s, b];
    });
  }, [r, r.subGrouping]), N = r.active, o = ((C = r.subGrouping) == null ? void 0 : C.active) ?? "", [c, w] = u.useState(""), [S, k] = u.useState(o !== "" ? `${N} - ${o}` : "Select an Option"), [n, i] = u.useState(!1), [p, l] = u.useState(!1), d = u.useRef(null), A = u.useRef(null), F = (a, t) => {
    d.current.focus();
    const s = `${a} - ${t}`;
    w(""), l(!1), k(s), y([a, t]);
  }, O = (a) => {
    var T;
    const { nodeName: t, className: s, parentNode: m, nextSibling: g, lastChild: b, previousSibling: h } = a.target, U = A.current;
    switch (a.key) {
      case "ArrowDown": {
        t === "INPUT" ? (l(!0), U.firstChild.focus()) : s === "selectable-item" ? (g ?? m.parentNode.nextSibling ?? d.current).focus() : b.className === "hide" ? (g ?? d.current).focus() : (T = b == null ? void 0 : b.firstChild) == null || T.focus();
        break;
      }
      case "ArrowUp": {
        t === "INPUT" ? (l(!0), U.lastChild.lastChild.className === "hide" ? U.lastChild.focus() : U.lastChild.lastChild.lastChild.focus()) : s === "selectable-item" ? (h ?? m.parentNode).focus() : h ? (h.lastChild.className === "hide" ? h : h.lastChild.lastChild).focus() : d == null || d.current.focus();
        break;
      }
      case "ArrowLeft": {
        t === "INPUT" && l(!1);
        break;
      }
      case "ArrowRight": {
        t === "INPUT" && l(!0);
        break;
      }
      case "Escape":
        l(!1), d.current.focus();
        break;
    }
  }, I = u.useMemo(() => {
    if (!c)
      return E;
    const a = new RegExp(`^${c}`, "i");
    return E.filter(([t, s]) => t.match(a) || s.some((m) => String(m).match(a)));
  }, [c]), K = (a) => {
    const t = a.target.value;
    l(!0), w(t), k(t);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { id: "nested-dropdown-container", className: "nested-dropdown", onKeyUp: O }, /* @__PURE__ */ e.createElement("div", { className: "nested-dropdown-input-container", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "search-input",
      ref: d,
      "aria-label": "searchInput",
      "aria-haspopup": "true",
      "aria-hidden": "false",
      tabIndex: 0,
      value: S,
      onChange: K,
      placeholder: "Select or type to search",
      onClick: () => {
        n && l(!p);
      },
      onFocus: () => i(!0),
      onBlur: () => i(!1)
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, p ? /* @__PURE__ */ e.createElement(x, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(x, { display: "caretFilledDown" }))), /* @__PURE__ */ e.createElement("ul", { role: "tree", key: f, tabIndex: -1, "aria-labelledby": "main-nested-dropdown", "aria-expanded": p, ref: A, className: `main-nested-dropdown-container ${p ? "" : "hide"}` }, I != null && I.length ? I.map(([a, t]) => /* @__PURE__ */ e.createElement(
    R,
    {
      currentOptions: t,
      label: a,
      handleSubGroupSelect: (s) => {
        F(a, s);
      },
      userSelectedLabel: N + o,
      userSearchTerm: c
    }
  )) : "There are no matching items")));
};
export {
  L as N
};
