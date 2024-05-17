import { r as c } from "./storybook-index-45401197.es.js";
function M(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function _(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? M(Object(t), !0).forEach(function(r) {
      s(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function x(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function R(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function A(e, n, t) {
  return n && R(e.prototype, n), t && R(e, t), Object.defineProperty(e, "prototype", {
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
function N(e, n) {
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
  }), n && C(e, n);
}
function E(e) {
  return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, E(e);
}
function C(e, n) {
  return C = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, C(e, n);
}
function K() {
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
function G(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function y(e, n) {
  if (e == null)
    return {};
  var t = G(e, n), r, a;
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
function q(e, n) {
  if (n && (typeof n == "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return m(e);
}
function j(e) {
  var n = K();
  return function() {
    var r = E(e), a;
    if (n) {
      var o = E(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return q(this, a);
  };
}
function z(e, n) {
  return X(e) || ee(e, n) || B(e, n) || ne();
}
function J(e) {
  return Q(e) || Y(e) || B(e) || te();
}
function Q(e) {
  if (Array.isArray(e))
    return S(e);
}
function X(e) {
  if (Array.isArray(e))
    return e;
}
function Y(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ee(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, d, l;
    try {
      for (t = t.call(e); !(a = (d = t.next()).done) && (r.push(d.value), !(n && r.length === n)); a = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return r;
  }
}
function B(e, n) {
  if (e) {
    if (typeof e == "string")
      return S(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return S(e, n);
  }
}
function S(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function te() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var re = /* @__PURE__ */ A(function e(n) {
  var t = this, r = n.expanded, a = r === void 0 ? [] : r, o = n.allowMultipleExpanded, d = o === void 0 ? !1 : o, l = n.allowZeroExpanded, u = l === void 0 ? !1 : l;
  x(this, e), s(this, "expanded", void 0), s(this, "allowMultipleExpanded", void 0), s(this, "allowZeroExpanded", void 0), s(this, "toggleExpanded", function(i) {
    if (t.isItemDisabled(i))
      return t;
    var p = t.isItemExpanded(i);
    return p ? t.augment({
      expanded: t.expanded.filter(function(f) {
        return f !== i;
      })
    }) : t.augment({
      expanded: t.allowMultipleExpanded ? [].concat(J(t.expanded), [i]) : [i]
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
    var f = p ?? t.isItemExpanded(i), h = t.isItemDisabled(i);
    return {
      id: t.getButtonId(i),
      "aria-disabled": h,
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
    return new e(_({
      expanded: t.expanded,
      allowMultipleExpanded: t.allowMultipleExpanded,
      allowZeroExpanded: t.allowZeroExpanded
    }, i));
  }), this.expanded = a, this.allowMultipleExpanded = d, this.allowZeroExpanded = u;
}), H = /* @__PURE__ */ c.createContext(null), Z = /* @__PURE__ */ function(e) {
  N(t, e);
  var n = j(t);
  function t() {
    var r;
    x(this, t);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "state", new re({
      expanded: r.props.preExpanded,
      allowMultipleExpanded: r.props.allowMultipleExpanded,
      allowZeroExpanded: r.props.allowZeroExpanded
    })), s(m(r), "toggleExpanded", function(l) {
      r.setState(function(u) {
        return u.toggleExpanded(l);
      }, function() {
        r.props.onChange && r.props.onChange(r.state.expanded);
      });
    }), s(m(r), "isItemDisabled", function(l) {
      return r.state.isItemDisabled(l);
    }), s(m(r), "isItemExpanded", function(l) {
      return r.state.isItemExpanded(l);
    }), s(m(r), "getPanelAttributes", function(l, u) {
      return r.state.getPanelAttributes(l, u);
    }), s(m(r), "getHeadingAttributes", function() {
      return r.state.getHeadingAttributes();
    }), s(m(r), "getButtonAttributes", function(l, u) {
      return r.state.getButtonAttributes(l, u);
    }), r;
  }
  return A(t, [{
    key: "render",
    value: function() {
      var a = this.state, o = a.allowZeroExpanded, d = a.allowMultipleExpanded;
      return /* @__PURE__ */ c.createElement(H.Provider, {
        value: {
          allowMultipleExpanded: d,
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
}(c.PureComponent);
s(Z, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var $ = /* @__PURE__ */ function(e) {
  N(t, e);
  var n = j(t);
  function t() {
    var r;
    x(this, t);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "renderChildren", function(l) {
      return l ? r.props.children(l) : null;
    }), r;
  }
  return A(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ c.createElement(H.Consumer, null, this.renderChildren);
    }
  }]), t;
}(c.PureComponent), ae = ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"], we = function(n) {
  var t = n.className, r = t === void 0 ? "accordion" : t, a = n.allowMultipleExpanded, o = n.allowZeroExpanded, d = n.onChange, l = n.preExpanded, u = y(n, ae);
  return /* @__PURE__ */ c.createElement(Z, {
    preExpanded: l,
    allowMultipleExpanded: a,
    allowZeroExpanded: o,
    onChange: d
  }, /* @__PURE__ */ c.createElement("div", v({
    "data-accordion-component": "Accordion",
    className: r
  }, u)));
}, D;
(function(e) {
  e.Accordion = "Accordion", e.AccordionItem = "AccordionItem", e.AccordionItemButton = "AccordionItemButton", e.AccordionItemHeading = "AccordionItemHeading", e.AccordionItemPanel = "AccordionItemPanel";
})(D || (D = {}));
var W = D, O = 0;
function oe() {
  var e = O;
  return O = O + 1, "raa-".concat(e);
}
var ie = c.useId || oe, de = /[\u0009\u000a\u000c\u000d\u0020]/g;
function b(e) {
  return e === "" || de.test(e) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(e, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var L = /* @__PURE__ */ c.createContext(null), le = function(n) {
  var t = n.children, r = n.uuid, a = n.accordionContext, o = n.dangerouslySetExpanded, d = function() {
    a.toggleExpanded(r);
  }, l = function(i) {
    var p = o ?? i.isItemExpanded(r), f = i.isItemDisabled(r), h = i.getPanelAttributes(r, o), T = i.getHeadingAttributes(r), P = i.getButtonAttributes(r, o);
    return /* @__PURE__ */ c.createElement(L.Provider, {
      value: {
        uuid: r,
        expanded: p,
        disabled: f,
        toggleExpanded: d,
        panelAttributes: h,
        headingAttributes: T,
        buttonAttributes: P
      }
    }, t);
  };
  return /* @__PURE__ */ c.createElement($, null, l);
}, ue = function(n) {
  return /* @__PURE__ */ c.createElement($, null, function(t) {
    return /* @__PURE__ */ c.createElement(le, v({}, n, {
      accordionContext: t
    }));
  });
}, w = function(n) {
  var t = n.children, r = function(o) {
    return o ? t(o) : null;
  };
  return /* @__PURE__ */ c.createElement(L.Consumer, null, r);
}, ce = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"], se = function(n) {
  var t = n.uuid, r = n.dangerouslySetExpanded, a = n.className, o = a === void 0 ? "accordion__item" : a, d = n.activeClassName, l = y(n, ce), u = c.useState(ie()), i = z(u, 1), p = i[0], f = t ?? p, h = function(P) {
    var V = P.expanded, F = V && d ? d : o;
    return /* @__PURE__ */ c.createElement("div", v({
      "data-accordion-component": "AccordionItem",
      className: F
    }, l));
  };
  return b(f.toString()), l.id && b(l.id), /* @__PURE__ */ c.createElement(ue, {
    uuid: f,
    dangerouslySetExpanded: r
  }, /* @__PURE__ */ c.createElement(w, null, h));
};
se.displayName = W.AccordionItem;
function k(e) {
  return e && (e.matches('[data-accordion-component="Accordion"]') ? e : k(e.parentElement));
}
function I(e) {
  var n = k(e);
  return n && Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function pe(e) {
  var n = I(e) || [], t = n[0];
  t && t.focus();
}
function fe(e) {
  var n = I(e) || [], t = n[n.length - 1];
  t && t.focus();
}
function me(e) {
  var n = I(e) || [], t = n.indexOf(e);
  if (t !== -1) {
    var r = n[t + 1];
    r && r.focus();
  }
}
function ve(e) {
  var n = I(e) || [], t = n.indexOf(e);
  if (t !== -1) {
    var r = n[t - 1];
    r && r.focus();
  }
}
var g = {
  END: "End",
  ENTER: "Enter",
  HOME: "Home",
  SPACE: " ",
  SPACE_DEPRECATED: "Spacebar",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
}, ge = ["toggleExpanded", "className"], he = function(n) {
  var t = n.toggleExpanded, r = n.className, a = r === void 0 ? "accordion__button" : r, o = y(n, ge), d = function(u) {
    var i = u.key;
    if ((i === g.ENTER || i === g.SPACE || i === g.SPACE_DEPRECATED) && (u.preventDefault(), t()), u.target instanceof HTMLElement)
      switch (i) {
        case g.HOME: {
          u.preventDefault(), pe(u.target);
          break;
        }
        case g.END: {
          u.preventDefault(), fe(u.target);
          break;
        }
        case g.LEFT:
        case g.UP: {
          u.preventDefault(), ve(u.target);
          break;
        }
        case g.RIGHT:
        case g.DOWN: {
          u.preventDefault(), me(u.target);
          break;
        }
      }
  };
  return o.id && b(o.id), /* @__PURE__ */ c.createElement("div", v({
    className: a
  }, o, {
    role: "button",
    tabIndex: 0,
    onClick: t,
    onKeyDown: d,
    "data-accordion-component": "AccordionItemButton"
  }));
}, Ie = function(n) {
  return /* @__PURE__ */ c.createElement(w, null, function(t) {
    var r = t.toggleExpanded, a = t.buttonAttributes;
    return /* @__PURE__ */ c.createElement(he, v({
      toggleExpanded: r
    }, n, a));
  });
}, be = {
  className: "accordion__heading",
  "aria-level": 3
}, Ee = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, U = /* @__PURE__ */ function(e) {
  N(t, e);
  var n = j(t);
  function t() {
    var r;
    x(this, t);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "ref", void 0), s(m(r), "setRef", function(l) {
      r.ref = l;
    }), r;
  }
  return A(t, [{
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
      return /* @__PURE__ */ c.createElement("div", v({
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
        throw new Error(Ee);
    }
  }]), t;
}(c.PureComponent);
s(U, "defaultProps", be);
var xe = function(n) {
  return /* @__PURE__ */ c.createElement(w, null, function(t) {
    var r = t.headingAttributes;
    return n.id && b(n.id), /* @__PURE__ */ c.createElement(U, v({}, n, r));
  });
};
xe.displayName = W.AccordionItemHeading;
var Ae = ["className", "region", "id"], Pe = function(n) {
  var t = n.className, r = t === void 0 ? "accordion__panel" : t, a = n.region, o = n.id, d = y(n, Ae), l = function(i) {
    var p = i.panelAttributes;
    o && b(o);
    var f = _(_({}, p), {}, {
      "aria-labelledby": a ? p["aria-labelledby"] : void 0
    });
    return /* @__PURE__ */ c.createElement("div", v({
      "data-accordion-component": "AccordionItemPanel",
      className: r
    }, d, f, {
      role: a ? "region" : void 0
    }));
  };
  return /* @__PURE__ */ c.createElement(w, null, l);
};
export {
  we as A,
  se as a,
  xe as b,
  Ie as c,
  Pe as d
};
