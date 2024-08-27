import { r as o, R as e } from "./storybook-index-45401197.es.js";
import { I as x } from "./storybook-Icon-9a8d8f01.es.js";
const R = ({ currentOptions: l = [], label: p, handleSubGroupSelect: y, userSelectedLabel: v, userSearchTerm: b }) => {
  const [c, i] = o.useState(!0), N = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  o.useEffect(() => {
    i(b.length > 0 ? !0 : c);
  }, [b]);
  const k = (a) => {
    const u = a.target.className === "selectable-item" ? !0 : !c;
    i(u);
  }, S = (a) => {
    const u = a.target;
    a.key === "ArrowRight" ? i(!0) : a.key === "ArrowLeft" ? (u.className === "selectable-item" && u.parentNode.parentNode.focus(), i(!1)) : a.key === "Enter" && (u.className === "selectable-item" ? y(u.dataset.value) : i(!c));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", { role: "treeitem", key: p, tabIndex: 0, "aria-label": p, onClick: k, onKeyUp: S, className: "nested-dropdown-group" }, /* @__PURE__ */ e.createElement("span", { className: "font-weight-bold" }, p, " "), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, c ? /* @__PURE__ */ e.createElement(x, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(x, { display: "caretFilledDown" })), /* @__PURE__ */ e.createElement("ul", { "aria-expanded": c, role: "group", tabIndex: -1, "aria-labelledby": p, className: c ? "" : "hide" }, l.map((a, u) => {
    const g = p + a, f = g === v;
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        key: g,
        className: "selectable-item",
        tabIndex: 0,
        role: "treeitem",
        "aria-label": g,
        "aria-selected": f,
        "data-value": a,
        onClick: (d) => {
          y(a);
        }
      },
      f ? /* @__PURE__ */ e.createElement("span", { className: "check-mark", "aria-hidden": "true" }, N) : "",
      a
    );
  }))));
}, L = ({ currentFilter: l, filterIndex: p, listLabel: y, handleSelectedItems: v }) => {
  var T;
  const b = o.useMemo(() => {
    var t;
    return (((t = l.orderedValues) == null ? void 0 : t.filter((n) => l.values.includes(n))) || l.values || []).map((n) => {
      if (!l.subGrouping)
        return [n, []];
      const { orderedValues: r, values: w } = l.subGrouping.valuesLookup[n], E = (r == null ? void 0 : r.filter((h) => w.includes(h))) || w;
      return [n, E];
    });
  }, [l, l.subGrouping]), c = l.active, i = ((T = l.subGrouping) == null ? void 0 : T.active) ?? "", [N, k] = o.useState(""), [S, a] = o.useState(i !== "" ? `${c} - ${i}` : ""), [u, g] = o.useState(!1), [f, d] = o.useState(!1), m = o.useRef(null), C = o.useRef(null), K = (s, t) => {
    m.current.focus();
    const n = `${s} - ${t}`;
    k(""), d(!1), a(n);
    const r = { ...l, columnName: s, subGrouping: { ...l.subGrouping, columnName: t } };
    v(null, null, p, r);
  }, O = (s) => {
    var F;
    const { nodeName: t, className: n, parentNode: r, nextSibling: w, lastChild: E, previousSibling: h } = s.target, U = C.current;
    switch (s.key) {
      case "ArrowDown": {
        t === "INPUT" ? (d(!0), U.firstChild.focus()) : n === "selectable-item" ? (w ?? r.parentNode.nextSibling ?? m.current).focus() : E.className === "hide" ? (w ?? m.current).focus() : (F = E == null ? void 0 : E.firstChild) == null || F.focus();
        break;
      }
      case "ArrowUp": {
        t === "INPUT" ? (d(!0), U.lastChild.lastChild.className === "hide" ? U.lastChild.focus() : U.lastChild.lastChild.lastChild.focus()) : n === "selectable-item" ? (h ?? r.parentNode).focus() : h ? (h.lastChild.className === "hide" ? h : h.lastChild.lastChild).focus() : m == null || m.current.focus();
        break;
      }
      case "ArrowLeft": {
        t === "INPUT" && d(!1);
        break;
      }
      case "ArrowRight": {
        t === "INPUT" && d(!0);
        break;
      }
      case "Escape":
        d(!1), m.current.focus();
        break;
    }
  }, I = o.useMemo(() => {
    if (!N)
      return b;
    const s = new RegExp(`^${N}`, "i");
    return b.filter(([t, n]) => t.match(s) || n.some((r) => String(r).match(s)));
  }, [N, b]), G = (s) => {
    const t = s.target.value;
    d(!0), k(t), a(t);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("label", null, y, /* @__PURE__ */ e.createElement("div", { id: "nested-dropdown-container", className: "nested-dropdown", onKeyUp: O }, /* @__PURE__ */ e.createElement("div", { className: "nested-dropdown-input-container", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "search-input",
      ref: m,
      "aria-label": "searchInput",
      "aria-haspopup": "true",
      "aria-hidden": "false",
      tabIndex: 0,
      value: S,
      onChange: G,
      placeholder: "Select or type to search",
      onClick: () => {
        u && d(!f);
      },
      onFocus: () => g(!0),
      onBlur: () => g(!1)
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, f ? /* @__PURE__ */ e.createElement(x, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(x, { display: "caretFilledDown" }))), /* @__PURE__ */ e.createElement("ul", { role: "tree", key: y, tabIndex: -1, "aria-labelledby": "main-nested-dropdown", "aria-expanded": f, ref: C, className: `main-nested-dropdown-container ${f ? "" : "hide"}` }, I != null && I.length ? I.map(([s, t]) => /* @__PURE__ */ e.createElement(
    R,
    {
      currentOptions: t,
      label: s,
      handleSubGroupSelect: (n) => {
        K(s, n);
      },
      userSelectedLabel: c + i,
      userSearchTerm: N
    }
  )) : "There are no matching items"))));
};
export {
  L as N
};
