import { r as u, R as g } from "./storybook-index-45401197.es.js";
import { P as _ } from "./storybook-index-43433e35.es.js";
import { a as Y } from "./storybook-Icon-4f5978ba.es.js";
import { T as C } from "./storybook-Tooltip-4102bd69.es.js";
function H(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function N(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? H(Object(t), !0).forEach(function(r) {
      s(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function A(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Z(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function y(e, n, t) {
  return n && Z(e.prototype, n), t && Z(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function s(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function v() {
  return v = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, v.apply(this, arguments);
}
function M(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && T(e, n);
}
function x(e) {
  return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, x(e);
}
function T(e, n) {
  return T = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, T(e, n);
}
function ee() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function te(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function w(e, n) {
  if (e == null)
    return {};
  var t = te(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function m(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ne(e, n) {
  if (n && (typeof n == "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return m(e);
}
function R(e) {
  var n = ee();
  return function() {
    var r = x(e), a;
    if (n) {
      var o = x(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ne(this, a);
  };
}
function re(e, n) {
  return ie(e) || de(e, n) || $(e, n) || ue();
}
function ae(e) {
  return oe(e) || le(e) || $(e) || ce();
}
function oe(e) {
  if (Array.isArray(e))
    return D(e);
}
function ie(e) {
  if (Array.isArray(e))
    return e;
}
function le(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function de(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, l, d;
    try {
      for (t = t.call(e); !(a = (l = t.next()).done) && (r.push(l.value), !(n && r.length === n)); a = !0)
        ;
    } catch (c) {
      o = !0, d = c;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o)
          throw d;
      }
    }
    return r;
  }
}
function $(e, n) {
  if (e) {
    if (typeof e == "string")
      return D(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return D(e, n);
  }
}
function D(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function ce() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ue() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var se = /* @__PURE__ */ y(function e(n) {
  var t = this, r = n.expanded, a = r === void 0 ? [] : r, o = n.allowMultipleExpanded, l = o === void 0 ? !1 : o, d = n.allowZeroExpanded, c = d === void 0 ? !1 : d;
  A(this, e), s(this, "expanded", void 0), s(this, "allowMultipleExpanded", void 0), s(this, "allowZeroExpanded", void 0), s(this, "toggleExpanded", function(i) {
    if (t.isItemDisabled(i))
      return t;
    var p = t.isItemExpanded(i);
    return p ? t.augment({
      expanded: t.expanded.filter(function(f) {
        return f !== i;
      })
    }) : t.augment({
      expanded: t.allowMultipleExpanded ? [].concat(ae(t.expanded), [i]) : [i]
    });
  }), s(this, "isItemDisabled", function(i) {
    var p = t.isItemExpanded(i), f = t.expanded.length === 1;
    return !!(p && !t.allowZeroExpanded && f);
  }), s(this, "isItemExpanded", function(i) {
    return t.expanded.indexOf(i) !== -1;
  }), s(this, "getPanelAttributes", function(i, p) {
    var f = p ?? t.isItemExpanded(i);
    return {
      role: t.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": t.allowMultipleExpanded ? !f : void 0,
      "aria-labelledby": t.getButtonId(i),
      id: t.getPanelId(i),
      hidden: f ? void 0 : !0
    };
  }), s(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), s(this, "getButtonAttributes", function(i, p) {
    var f = p ?? t.isItemExpanded(i), b = t.isItemDisabled(i);
    return {
      id: t.getButtonId(i),
      "aria-disabled": b,
      "aria-expanded": f,
      "aria-controls": t.getPanelId(i),
      role: "button",
      tabIndex: 0
    };
  }), s(this, "getPanelId", function(i) {
    return "accordion__panel-".concat(i);
  }), s(this, "getButtonId", function(i) {
    return "accordion__heading-".concat(i);
  }), s(this, "augment", function(i) {
    return new e(N({
      expanded: t.expanded,
      allowMultipleExpanded: t.allowMultipleExpanded,
      allowZeroExpanded: t.allowZeroExpanded
    }, i));
  }), this.expanded = a, this.allowMultipleExpanded = l, this.allowZeroExpanded = c;
}), W = /* @__PURE__ */ u.createContext(null), L = /* @__PURE__ */ function(e) {
  M(t, e);
  var n = R(t);
  function t() {
    var r;
    A(this, t);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "state", new se({
      expanded: r.props.preExpanded,
      allowMultipleExpanded: r.props.allowMultipleExpanded,
      allowZeroExpanded: r.props.allowZeroExpanded
    })), s(m(r), "toggleExpanded", function(d) {
      r.setState(function(c) {
        return c.toggleExpanded(d);
      }, function() {
        r.props.onChange && r.props.onChange(r.state.expanded);
      });
    }), s(m(r), "isItemDisabled", function(d) {
      return r.state.isItemDisabled(d);
    }), s(m(r), "isItemExpanded", function(d) {
      return r.state.isItemExpanded(d);
    }), s(m(r), "getPanelAttributes", function(d, c) {
      return r.state.getPanelAttributes(d, c);
    }), s(m(r), "getHeadingAttributes", function() {
      return r.state.getHeadingAttributes();
    }), s(m(r), "getButtonAttributes", function(d, c) {
      return r.state.getButtonAttributes(d, c);
    }), r;
  }
  return y(t, [{
    key: "render",
    value: function() {
      var a = this.state, o = a.allowZeroExpanded, l = a.allowMultipleExpanded;
      return /* @__PURE__ */ u.createElement(W.Provider, {
        value: {
          allowMultipleExpanded: l,
          allowZeroExpanded: o,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]), t;
}(u.PureComponent);
s(L, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var k = /* @__PURE__ */ function(e) {
  M(t, e);
  var n = R(t);
  function t() {
    var r;
    A(this, t);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "renderChildren", function(d) {
      return d ? r.props.children(d) : null;
    }), r;
  }
  return y(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ u.createElement(W.Consumer, null, this.renderChildren);
    }
  }]), t;
}(u.PureComponent), pe = ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"], fe = function(n) {
  var t = n.className, r = t === void 0 ? "accordion" : t, a = n.allowMultipleExpanded, o = n.allowZeroExpanded, l = n.onChange, d = n.preExpanded, c = w(n, pe);
  return /* @__PURE__ */ u.createElement(L, {
    preExpanded: d,
    allowMultipleExpanded: a,
    allowZeroExpanded: o,
    onChange: l
  }, /* @__PURE__ */ u.createElement("div", v({
    "data-accordion-component": "Accordion",
    className: r
  }, c)));
}, j;
(function(e) {
  e.Accordion = "Accordion", e.AccordionItem = "AccordionItem", e.AccordionItemButton = "AccordionItemButton", e.AccordionItemHeading = "AccordionItemHeading", e.AccordionItemPanel = "AccordionItemPanel";
})(j || (j = {}));
var U = j, S = 0;
function me() {
  var e = S;
  return S = S + 1, "raa-".concat(e);
}
var ve = u.useId || me, ge = /[\u0009\u000a\u000c\u000d\u0020]/g;
function h(e) {
  return e === "" || ge.test(e) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(e, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var V = /* @__PURE__ */ u.createContext(null), Ee = function(n) {
  var t = n.children, r = n.uuid, a = n.accordionContext, o = n.dangerouslySetExpanded, l = function() {
    a.toggleExpanded(r);
  }, d = function(i) {
    var p = o ?? i.isItemExpanded(r), f = i.isItemDisabled(r), b = i.getPanelAttributes(r, o), B = i.getHeadingAttributes(r), O = i.getButtonAttributes(r, o);
    return /* @__PURE__ */ u.createElement(V.Provider, {
      value: {
        uuid: r,
        expanded: p,
        disabled: f,
        toggleExpanded: l,
        panelAttributes: b,
        headingAttributes: B,
        buttonAttributes: O
      }
    }, t);
  };
  return /* @__PURE__ */ u.createElement(k, null, d);
}, be = function(n) {
  return /* @__PURE__ */ u.createElement(k, null, function(t) {
    return /* @__PURE__ */ u.createElement(Ee, v({}, n, {
      accordionContext: t
    }));
  });
}, I = function(n) {
  var t = n.children, r = function(o) {
    return o ? t(o) : null;
  };
  return /* @__PURE__ */ u.createElement(V.Consumer, null, r);
}, he = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"], F = function(n) {
  var t = n.uuid, r = n.dangerouslySetExpanded, a = n.className, o = a === void 0 ? "accordion__item" : a, l = n.activeClassName, d = w(n, he), c = u.useState(ve()), i = re(c, 1), p = i[0], f = t ?? p, b = function(O) {
    var Q = O.expanded, X = Q && l ? l : o;
    return /* @__PURE__ */ u.createElement("div", v({
      "data-accordion-component": "AccordionItem",
      className: X
    }, d));
  };
  return h(f.toString()), d.id && h(d.id), /* @__PURE__ */ u.createElement(be, {
    uuid: f,
    dangerouslySetExpanded: r
  }, /* @__PURE__ */ u.createElement(I, null, b));
};
F.displayName = U.AccordionItem;
function K(e) {
  return e && (e.matches('[data-accordion-component="Accordion"]') ? e : K(e.parentElement));
}
function P(e) {
  var n = K(e);
  return n && Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function xe(e) {
  var n = P(e) || [], t = n[0];
  t && t.focus();
}
function Ae(e) {
  var n = P(e) || [], t = n[n.length - 1];
  t && t.focus();
}
function ye(e) {
  var n = P(e) || [], t = n.indexOf(e);
  if (t !== -1) {
    var r = n[t + 1];
    r && r.focus();
  }
}
function we(e) {
  var n = P(e) || [], t = n.indexOf(e);
  if (t !== -1) {
    var r = n[t - 1];
    r && r.focus();
  }
}
var E = {
  END: "End",
  ENTER: "Enter",
  HOME: "Home",
  SPACE: " ",
  SPACE_DEPRECATED: "Spacebar",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
}, Ie = ["toggleExpanded", "className"], Pe = function(n) {
  var t = n.toggleExpanded, r = n.className, a = r === void 0 ? "accordion__button" : r, o = w(n, Ie), l = function(c) {
    var i = c.key;
    if ((i === E.ENTER || i === E.SPACE || i === E.SPACE_DEPRECATED) && (c.preventDefault(), t()), c.target instanceof HTMLElement)
      switch (i) {
        case E.HOME: {
          c.preventDefault(), xe(c.target);
          break;
        }
        case E.END: {
          c.preventDefault(), Ae(c.target);
          break;
        }
        case E.LEFT:
        case E.UP: {
          c.preventDefault(), we(c.target);
          break;
        }
        case E.RIGHT:
        case E.DOWN: {
          c.preventDefault(), ye(c.target);
          break;
        }
      }
  };
  return o.id && h(o.id), /* @__PURE__ */ u.createElement("div", v({
    className: a
  }, o, {
    role: "button",
    tabIndex: 0,
    onClick: t,
    onKeyDown: l,
    "data-accordion-component": "AccordionItemButton"
  }));
}, Oe = function(n) {
  return /* @__PURE__ */ u.createElement(I, null, function(t) {
    var r = t.toggleExpanded, a = t.buttonAttributes;
    return /* @__PURE__ */ u.createElement(Pe, v({
      toggleExpanded: r
    }, n, a));
  });
}, _e = {
  className: "accordion__heading",
  "aria-level": 3
}, Ce = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, G = /* @__PURE__ */ function(e) {
  M(t, e);
  var n = R(t);
  function t() {
    var r;
    A(this, t);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "ref", void 0), s(m(r), "setRef", function(d) {
      r.ref = d;
    }), r;
  }
  return y(t, [{
    key: "componentDidUpdate",
    value: function() {
      t.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      t.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ u.createElement("div", v({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function(a) {
      if (a === void 0)
        throw new Error("ref is undefined");
      if (!(a.childElementCount === 1 && a.firstElementChild && a.firstElementChild.getAttribute("data-accordion-component") === "AccordionItemButton"))
        throw new Error(Ce);
    }
  }]), t;
}(u.PureComponent);
s(G, "defaultProps", _e);
var q = function(n) {
  return /* @__PURE__ */ u.createElement(I, null, function(t) {
    var r = t.headingAttributes;
    return n.id && h(n.id), /* @__PURE__ */ u.createElement(G, v({}, n, r));
  });
};
q.displayName = U.AccordionItemHeading;
var Se = ["className", "region", "id"], Ne = function(n) {
  var t = n.className, r = t === void 0 ? "accordion__panel" : t, a = n.region, o = n.id, l = w(n, Se), d = function(i) {
    var p = i.panelAttributes;
    o && h(o);
    var f = N(N({}, p), {}, {
      "aria-labelledby": a ? p["aria-labelledby"] : void 0
    });
    return /* @__PURE__ */ u.createElement("div", v({
      "data-accordion-component": "AccordionItemPanel",
      className: r
    }, l, f, {
      role: a ? "region" : void 0
    }));
  };
  return /* @__PURE__ */ u.createElement(I, null, d);
};
const z = (e) => e, J = ({ children: e }) => {
  const t = u.Children.toArray(e).filter((r) => (r == null ? void 0 : r.type) === z);
  return /* @__PURE__ */ g.createElement(fe, { allowZeroExpanded: !0 }, t && t.map((r, a) => /* @__PURE__ */ g.createElement(F, { className: "cove-accordion__item", key: a }, /* @__PURE__ */ g.createElement(q, { className: "cove-accordion__heading" }, /* @__PURE__ */ g.createElement(Oe, { className: "cove-accordion__button" }, r.props.icon, r.props.title, r.props.tooltipText ? /* @__PURE__ */ g.createElement(C, { position: "bottom" }, /* @__PURE__ */ g.createElement(C.Target, null, /* @__PURE__ */ g.createElement(Y, { display: "question", size: 14 })), /* @__PURE__ */ g.createElement(C.Content, null, r.props.tooltipText)) : null)), /* @__PURE__ */ g.createElement(Ne, { className: "cove-accordion__panel" }, r.props.children))));
};
J.Section = z;
J.Section.propTypes = {
  /* Icon for the accordion label */
  icon: _.node,
  /* Title for the accordion label*/
  title: _.string,
  /* Tooltip for the accordion label*/
  tooltipText: _.object
};
export {
  J as A,
  fe as a,
  F as b,
  q as c,
  Oe as d,
  Ne as e
};
