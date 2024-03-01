import { r as c, R as e } from "./storybook-e61d95ab.es.js";
import "./storybook-c5d32002.es.js";
const D = ({ currentOptions: E, label: l, handleSecondTierSelect: N, userSelectedTierTwoLabel: U, userSearchTerm: y }) => {
  const [o, d] = c.useState(!0);
  c.useEffect(() => {
    d(y.length > 0 ? !0 : o);
  }, [y]);
  const C = (r) => {
    const a = r.target.className === "selectableItem" ? !0 : !o;
    d(a);
  }, p = (r) => {
    N(r);
  }, h = (r) => {
    const a = r.target;
    r.key === "ArrowRight" ? d(!0) : r.key === "ArrowLeft" ? (a.className === "selectableItem" && a.parentNode.parentNode.focus(), d(!1)) : r.key === "Enter" && (a.className === "selectableItem" ? p(a.dataset.value) : d(!o));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("li", { role: "treeitem", key: l, tabIndex: 0, "aria-label": l, onClick: C, onKeyUp: h, className: o ? "nested-dropdown__group" : "nested-dropdown__group--hidden" }, /* @__PURE__ */ e.createElement("span", { id: l }, l), " ", /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " ", o ? /* @__PURE__ */ e.createElement(e.Fragment, null, "▾") : /* @__PURE__ */ e.createElement(e.Fragment, null, "▴")), /* @__PURE__ */ e.createElement("ul", { className: "", "aria-expanded": o, role: "group", tabIndex: -1, "aria-labelledby": l }, E.map((r) => {
    const a = l + r;
    let I = a === U;
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        key: a,
        className: "selectableItem",
        tabIndex: 0,
        role: "treeitem",
        "aria-label": a,
        "aria-selected": I,
        "data-value": r,
        onClick: (T) => {
          p(r);
        }
      },
      I ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, "✔") : "",
      r
    );
  }))));
}, M = ({ data: E, tiers: [l, N], listLabel: U, handleSelectedItems: y }) => {
  const o = {};
  E.forEach((n) => {
    const t = n[l], s = n[N];
    o[t] ? o[t].push(s) : o[t] = [s];
  });
  const [d, C] = c.useState(null), [p, h] = c.useState(""), [r, a] = c.useState(""), [I, T] = c.useState(!1), [S, i] = c.useState(!1), u = c.useRef(null), m = c.useRef(null), L = (n, t) => {
    u.current.focus();
    const s = t;
    C(n + t), h(""), i(!1), a(s), y(n, t);
  }, v = (n) => {
    var O;
    const { nodeName: t, className: s, parentNode: g, nextSibling: b, lastChild: R, previousSibling: f } = n.target;
    switch (n.key) {
      case "ArrowDown": {
        t === "INPUT" ? (i(!0), m.current.firstChild.focus()) : s === "selectableItem" ? (b ?? g.parentNode.nextSibling ?? u.current).focus() : s === "nested-dropdown__group--hidden" ? (b ?? u.current).focus() : (O = R == null ? void 0 : R.firstChild) == null || O.focus();
        break;
      }
      case "ArrowUp": {
        t === "INPUT" ? (i(!0), m.current.lastChild.className === "nested-dropdown__group--hidden" ? m.current.lastChild.focus() : m.current.lastChild.lastChild.lastChild.focus()) : s === "selectableItem" ? (f ?? g.parentNode).focus() : f ? (f.className === "nested-dropdown__group--hidden" ? f : f.lastChild.lastChild).focus() : u == null || u.current.focus();
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
  }, A = c.useMemo(() => {
    if (!p)
      return o;
    const n = {}, t = new RegExp(`^${p}`, "i");
    for (const s in o) {
      const g = o[s].filter((b) => String(b).match(t));
      g.length > 0 ? n[s] = g : s.match(t) && (n[s] = [...o[s]]);
    }
    return n;
  }, [p]), F = Object.keys(A), P = (n) => {
    const t = n.target.value;
    i(!0), h(t), a(t);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { id: "main-nested-dropdown", className: "nested-dropdown", onKeyUp: v }, /* @__PURE__ */ e.createElement("div", { className: "nested-dropdown__option", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "searchInput",
      ref: u,
      "aria-label": "searchInput",
      "aria-haspopup": "true",
      "aria-hidden": "false",
      tabIndex: 0,
      value: r,
      onChange: P,
      placeholder: "Select or type to search",
      onClick: () => {
        I && i(!S);
      },
      onFocus: () => T(!0),
      onBlur: () => T(!1)
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "listArrow", "aria-hidden": !0 }, S ? /* @__PURE__ */ e.createElement(e.Fragment, null, "▼") : /* @__PURE__ */ e.createElement(e.Fragment, null, "▲"))), /* @__PURE__ */ e.createElement("ul", { role: "tree", key: U, tabIndex: -1, "aria-labelledby": "main-nested-dropdown", "aria-expanded": S, ref: m, className: `nested-dropdown__option ${S === !0 ? "" : " hide"}` }, A && F.length > 0 ? F.map((n) => /* @__PURE__ */ e.createElement(
    D,
    {
      currentOptions: A[n],
      label: n,
      handleSecondTierSelect: (t) => {
        L(n, t);
      },
      userSelectedTierTwoLabel: d,
      userSearchTerm: p
    }
  )) : "There are no matching items")));
}, W = {
  title: "Components/Molecules/NestedDropdown",
  component: M
}, w = {
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
var k, _, K;
w.parameters = {
  ...w.parameters,
  docs: {
    ...(k = w.parameters) == null ? void 0 : k.docs,
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
      ...(K = (_ = w.parameters) == null ? void 0 : _.docs) == null ? void 0 : K.source
    }
  }
};
const $ = ["Primary"];
export {
  w as Primary,
  $ as __namedExportsOrder,
  W as default
};
