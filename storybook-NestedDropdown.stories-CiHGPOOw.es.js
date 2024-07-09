import { r as s } from "./storybook-index-BmAYD2Ot.es.js";
import { a as I } from "./storybook-Icon-B5TlldJZ.es.js";
const V = ({ currentOptions: w, label: c, handleSecondTierSelect: f, userSelectedTierTwoLabel: U, userSearchTerm: y }) => {
  const [n, u] = s.useState(!0), C = /* @__PURE__ */ React.createElement(React.Fragment, null, "✔");
  s.useEffect(() => {
    u(y.length > 0 ? !0 : n);
  }, [y]);
  const d = (a) => {
    const r = a.target.className === "selectable-item" ? !0 : !n;
    u(r);
  }, g = (a) => {
    const r = a.target;
    a.key === "ArrowRight" ? u(!0) : a.key === "ArrowLeft" ? (r.className === "selectable-item" && r.parentNode.parentNode.focus(), u(!1)) : a.key === "Enter" && (r.className === "selectable-item" ? f(r.dataset.value) : u(!n));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", { role: "treeitem", key: c, tabIndex: 0, "aria-label": c, onClick: d, onKeyUp: g, className: "nested-dropdown-group" }, /* @__PURE__ */ React.createElement("span", { id: c }, c, " "), /* @__PURE__ */ React.createElement("span", { className: "list-arrow", "aria-hidden": "true" }, n ? /* @__PURE__ */ React.createElement(I, { display: "caretFilledUp" }) : /* @__PURE__ */ React.createElement(I, { display: "caretFilledDown" })), /* @__PURE__ */ React.createElement("ul", { "aria-expanded": n, role: "group", tabIndex: -1, "aria-labelledby": c, className: n ? "" : "hide" }, w.map((a) => {
    const r = c + a;
    let h = r === U;
    return /* @__PURE__ */ React.createElement(
      "li",
      {
        key: r,
        className: "selectable-item",
        tabIndex: 0,
        role: "treeitem",
        "aria-label": r,
        "aria-selected": h,
        "data-value": a,
        onClick: (A) => {
          f(a);
        }
      },
      h ? /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, C) : "",
      a
    );
  }))));
}, H = ({ data: w, tiers: [c, f], listLabel: U, handleSelectedItems: y }) => {
  const n = {};
  w.forEach((t) => {
    const e = t[c], o = t[f];
    n[e] ? n[e].push(o) : n[e] = [o];
  });
  const [u, C] = s.useState(null), [d, g] = s.useState(""), [a, r] = s.useState(""), [h, A] = s.useState(!1), [R, l] = s.useState(!1), i = s.useRef(null), k = s.useRef(null), v = (t, e) => {
    i.current.focus();
    const o = e;
    C(t + e), g(""), l(!1), r(o), y(t, e);
  }, P = (t) => {
    var O;
    const { nodeName: e, className: o, parentNode: p, nextSibling: N, lastChild: b, previousSibling: m } = t.target, E = k.current;
    switch (t.key) {
      case "ArrowDown": {
        e === "INPUT" ? (l(!0), E.firstChild.focus()) : o === "selectable-item" ? (N ?? p.parentNode.nextSibling ?? i.current).focus() : b.className === "hide" ? (N ?? i.current).focus() : (O = b == null ? void 0 : b.firstChild) == null || O.focus();
        break;
      }
      case "ArrowUp": {
        e === "INPUT" ? (l(!0), E.lastChild.lastChild.className === "hide" ? E.lastChild.focus() : E.lastChild.lastChild.lastChild.focus()) : o === "selectable-item" ? (m ?? p.parentNode).focus() : m ? (m.lastChild.className === "hide" ? m : m.lastChild.lastChild).focus() : i == null || i.current.focus();
        break;
      }
      case "ArrowLeft": {
        e === "INPUT" && l(!1);
        break;
      }
      case "ArrowRight": {
        e === "INPUT" && l(!0);
        break;
      }
      case "Escape":
        l(!1), i.current.focus();
        break;
    }
  }, F = s.useMemo(() => {
    if (!d)
      return n;
    const t = {}, e = new RegExp(`^${d}`, "i");
    for (const o in n)
      if (o.match(e))
        t[o] = [...n[o]];
      else {
        const p = n[o].filter((N) => String(N).match(e));
        p.length > 0 && (t[o] = p);
      }
    return t;
  }, [d]), x = Object.keys(F), M = (t) => {
    const e = t.target.value;
    l(!0), g(e), r(e);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { id: "nested-dropdown-container", className: "nested-dropdown", onKeyUp: P }, /* @__PURE__ */ React.createElement("div", { className: "nested-dropdown-input-container", "aria-label": "searchInput", role: "textbox" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "search-input",
      ref: i,
      "aria-label": "searchInput",
      "aria-haspopup": "true",
      "aria-hidden": "false",
      tabIndex: 0,
      value: a,
      onChange: M,
      placeholder: "Select or type to search",
      onClick: () => {
        h && l(!R);
      },
      onFocus: () => A(!0),
      onBlur: () => A(!1)
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "list-arrow", "aria-hidden": !0 }, R ? /* @__PURE__ */ React.createElement(I, { display: "caretFilledUp" }) : /* @__PURE__ */ React.createElement(I, { display: "caretFilledDown" }))), /* @__PURE__ */ React.createElement("ul", { role: "tree", key: U, tabIndex: -1, "aria-labelledby": "main-nested-dropdown", "aria-expanded": R, ref: k, className: `main-nested-dropdown-container ${R ? "" : "hide"}` }, F && x.length > 0 ? x.map((t) => /* @__PURE__ */ React.createElement(
    V,
    {
      currentOptions: F[t],
      label: t,
      handleSecondTierSelect: (e) => {
        v(t, e);
      },
      userSelectedTierTwoLabel: u,
      userSearchTerm: d
    }
  )) : "There are no matching items")));
}, $ = {
  title: "Components/Molecules/NestedDropdown",
  component: H
}, S = {
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
var K, D, L;
S.parameters = {
  ...S.parameters,
  docs: {
    ...(K = S.parameters) == null ? void 0 : K.docs,
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
      ...(L = (D = S.parameters) == null ? void 0 : D.docs) == null ? void 0 : L.source
    }
  }
};
const j = ["Primary"];
export {
  S as Primary,
  j as __namedExportsOrder,
  $ as default
};
