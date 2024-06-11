import { r as l, R as e } from "./storybook-index-45401197.es.js";
import { a as U } from "./storybook-Icon-ed0ee925.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-43433e35.es.js";
const _ = ({ currentOptions: C, label: c, handleSecondTierSelect: y, userSelectedTierTwoLabel: A, userSearchTerm: g }) => {
  const [r, d] = l.useState(!0), F = /* @__PURE__ */ e.createElement(e.Fragment, null, "✔");
  l.useEffect(() => {
    d(g.length > 0 ? !0 : r);
  }, [g]);
  const p = (o) => {
    const a = o.target.className === "selectable-item" ? !0 : !r;
    d(a);
  }, h = (o) => {
    const a = o.target;
    o.key === "ArrowRight" ? d(!0) : o.key === "ArrowLeft" ? (a.className === "selectable-item" && a.parentNode.parentNode.focus(), d(!1)) : o.key === "Enter" && (a.className === "selectable-item" ? y(a.dataset.value) : d(!r));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", { role: "treeitem", key: c, tabIndex: 0, "aria-label": c, onClick: p, onKeyUp: h, className: "nested-dropdown-group" }, /* @__PURE__ */ e.createElement("span", { id: c }, c, " "), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, r ? /* @__PURE__ */ e.createElement(U, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(U, { display: "caretFilledDown" })), /* @__PURE__ */ e.createElement("ul", { "aria-expanded": r, role: "group", tabIndex: -1, "aria-labelledby": c, className: r ? "" : "hide" }, C.map((o) => {
    const a = c + o;
    let N = a === A;
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        key: a,
        className: "selectable-item",
        tabIndex: 0,
        role: "treeitem",
        "aria-label": a,
        "aria-selected": N,
        "data-value": o,
        onClick: (R) => {
          y(o);
        }
      },
      N ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, F) : "",
      o
    );
  }))));
}, H = ({ data: C, tiers: [c, y], listLabel: A, handleSelectedItems: g }) => {
  const r = {};
  C.forEach((n) => {
    const t = n[c], s = n[y];
    r[t] ? r[t].push(s) : r[t] = [s];
  });
  const [d, F] = l.useState(null), [p, h] = l.useState(""), [o, a] = l.useState(""), [N, R] = l.useState(!1), [b, i] = l.useState(!1), u = l.useRef(null), x = l.useRef(null), P = (n, t) => {
    u.current.focus();
    const s = t;
    F(n + t), h(""), i(!1), a(s), g(n, t);
  }, M = (n) => {
    var K;
    const { nodeName: t, className: s, parentNode: m, nextSibling: E, lastChild: S, previousSibling: f } = n.target, w = x.current;
    switch (n.key) {
      case "ArrowDown": {
        t === "INPUT" ? (i(!0), w.firstChild.focus()) : s === "selectable-item" ? (E ?? m.parentNode.nextSibling ?? u.current).focus() : S.className === "hide" ? (E ?? u.current).focus() : (K = S == null ? void 0 : S.firstChild) == null || K.focus();
        break;
      }
      case "ArrowUp": {
        t === "INPUT" ? (i(!0), w.lastChild.lastChild.className === "hide" ? w.lastChild.focus() : w.lastChild.lastChild.lastChild.focus()) : s === "selectable-item" ? (f ?? m.parentNode).focus() : f ? (f.lastChild.className === "hide" ? f : f.lastChild.lastChild).focus() : u == null || u.current.focus();
        break;
      }
      case "ArrowLeft": {
        t === "INPUT" && i(!1);
        break;
      }
      case "ArrowRight": {
        t === "INPUT" && i(!0);
        break;
      }
      case "Escape":
        i(!1), u.current.focus();
        break;
    }
  }, T = l.useMemo(() => {
    if (!p)
      return r;
    const n = {}, t = new RegExp(`^${p}`, "i");
    for (const s in r)
      if (s.match(t))
        n[s] = [...r[s]];
      else {
        const m = r[s].filter((E) => String(E).match(t));
        m.length > 0 && (n[s] = m);
      }
    return n;
  }, [p]), O = Object.keys(T), V = (n) => {
    const t = n.target.value;
    i(!0), h(t), a(t);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { id: "nested-dropdown-container", className: "nested-dropdown", onKeyUp: M }, /* @__PURE__ */ e.createElement("div", { className: "nested-dropdown-input-container", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "search-input",
      ref: u,
      "aria-label": "searchInput",
      "aria-haspopup": "true",
      "aria-hidden": "false",
      tabIndex: 0,
      value: o,
      onChange: V,
      placeholder: "Select or type to search",
      onClick: () => {
        N && i(!b);
      },
      onFocus: () => R(!0),
      onBlur: () => R(!1)
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, b ? /* @__PURE__ */ e.createElement(U, { display: "caretFilledUp" }) : /* @__PURE__ */ e.createElement(U, { display: "caretFilledDown" }))), /* @__PURE__ */ e.createElement("ul", { role: "tree", key: A, tabIndex: -1, "aria-labelledby": "main-nested-dropdown", "aria-expanded": b, ref: x, className: `main-nested-dropdown-container ${b ? "" : "hide"}` }, T && O.length > 0 ? O.map((n) => /* @__PURE__ */ e.createElement(
    _,
    {
      currentOptions: T[n],
      label: n,
      handleSecondTierSelect: (t) => {
        P(n, t);
      },
      userSelectedTierTwoLabel: d,
      userSearchTerm: p
    }
  )) : "There are no matching items")));
}, G = {
  title: "Components/Molecules/NestedDropdown",
  component: H
}, I = {
  args: {
    data: [{
      country: "USA",
      region: "Region1"
    }, {
      country: "USA",
      region: "Florida"
    }, {
      country: "USA",
      region: "Iowa"
    }, {
      country: "Country2",
      region: "Region1"
    }, {
      country: "Country2",
      region: "Region2"
    }, {
      country: "Country2",
      region: "Region3"
    }, {
      country: "Italy",
      region: "Region1"
    }, {
      country: "Italy",
      region: "Naples"
    }, {
      country: "Italy",
      region: "Region3"
    }],
    tiers: ["country", "region"],
    listLabel: "Countries of the World",
    handleSelectedItems: console.log
  }
};
var D, L, v;
I.parameters = {
  ...I.parameters,
  docs: {
    ...(D = I.parameters) == null ? void 0 : D.docs,
    source: {
      originalSource: `{
  args: {
    data: [{
      country: 'USA',
      region: 'Region1'
    }, {
      country: 'USA',
      region: 'Florida'
    }, {
      country: 'USA',
      region: 'Iowa'
    }, {
      country: 'Country2',
      region: 'Region1'
    }, {
      country: 'Country2',
      region: 'Region2'
    }, {
      country: 'Country2',
      region: 'Region3'
    }, {
      country: 'Italy',
      region: 'Region1'
    }, {
      country: 'Italy',
      region: 'Naples'
    }, {
      country: 'Italy',
      region: 'Region3'
    }],
    tiers: ['country', 'region'],
    listLabel: 'Countries of the World',
    handleSelectedItems: console.log
  }
}`,
      ...(v = (L = I.parameters) == null ? void 0 : L.docs) == null ? void 0 : v.source
    }
  }
};
const q = ["Primary"];
export {
  I as Primary,
  q as __namedExportsOrder,
  G as default
};
