import { r as c } from "./storybook-index-f2fed736.es.js";
function A(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function T(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function _(t, n, e) {
  return n && T(t.prototype, n), e && T(t, e), t;
}
function s(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function g() {
  return g = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, g.apply(this, arguments);
}
function M(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function V(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? M(Object(e), !0).forEach(function(r) {
      s(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : M(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
function D(t, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), n && O(t, n);
}
function b(t) {
  return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, b(t);
}
function O(t, n) {
  return O = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, O(t, n);
}
function K() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function G(t, n) {
  if (t == null)
    return {};
  var e = {}, r = Object.keys(t), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (e[a] = t[a]);
  return e;
}
function x(t, n) {
  if (t == null)
    return {};
  var e = G(t, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      r = o[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (e[r] = t[r]);
  }
  return e;
}
function m(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function q(t, n) {
  return n && (typeof n == "object" || typeof n == "function") ? n : m(t);
}
function N(t) {
  var n = K();
  return function() {
    var r = b(t), a;
    if (n) {
      var o = b(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return q(this, a);
  };
}
function z(t, n) {
  return X(t) || ee(t, n) || R(t, n) || ne();
}
function J(t) {
  return Q(t) || Y(t) || R(t) || te();
}
function Q(t) {
  if (Array.isArray(t))
    return C(t);
}
function X(t) {
  if (Array.isArray(t))
    return t;
}
function Y(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t))
    return Array.from(t);
}
function ee(t, n) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
    var e = [], r = !0, a = !1, o = void 0;
    try {
      for (var d = t[Symbol.iterator](), l; !(r = (l = d.next()).done) && (e.push(l.value), !(n && e.length === n)); r = !0)
        ;
    } catch (u) {
      a = !0, o = u;
    } finally {
      try {
        !r && d.return != null && d.return();
      } finally {
        if (a)
          throw o;
      }
    }
    return e;
  }
}
function R(t, n) {
  if (t) {
    if (typeof t == "string")
      return C(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return C(t, n);
  }
}
function C(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = new Array(n); e < n; e++)
    r[e] = t[e];
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
var re = function t(n) {
  var e = this, r = n.expanded, a = r === void 0 ? [] : r, o = n.allowMultipleExpanded, d = o === void 0 ? !1 : o, l = n.allowZeroExpanded, u = l === void 0 ? !1 : l;
  A(this, t), s(this, "expanded", void 0), s(this, "allowMultipleExpanded", void 0), s(this, "allowZeroExpanded", void 0), s(this, "toggleExpanded", function(i) {
    if (e.isItemDisabled(i))
      return e;
    var p = e.isItemExpanded(i);
    return p ? e.augment({
      expanded: e.expanded.filter(function(f) {
        return f !== i;
      })
    }) : e.augment({
      expanded: e.allowMultipleExpanded ? [].concat(J(e.expanded), [i]) : [i]
    });
  }), s(this, "isItemDisabled", function(i) {
    var p = e.isItemExpanded(i), f = e.expanded.length === 1;
    return !!(p && !e.allowZeroExpanded && f);
  }), s(this, "isItemExpanded", function(i) {
    return e.expanded.indexOf(i) !== -1;
  }), s(this, "getPanelAttributes", function(i, p) {
    var f = p ?? e.isItemExpanded(i);
    return {
      role: e.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": e.allowMultipleExpanded ? !f : void 0,
      "aria-labelledby": e.getButtonId(i),
      id: e.getPanelId(i),
      hidden: f ? void 0 : !0
    };
  }), s(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), s(this, "getButtonAttributes", function(i, p) {
    var f = p ?? e.isItemExpanded(i), h = e.isItemDisabled(i);
    return {
      id: e.getButtonId(i),
      "aria-disabled": h,
      "aria-expanded": f,
      "aria-controls": e.getPanelId(i),
      role: "button",
      tabIndex: 0
    };
  }), s(this, "getPanelId", function(i) {
    return "accordion__panel-".concat(i);
  }), s(this, "getButtonId", function(i) {
    return "accordion__heading-".concat(i);
  }), s(this, "augment", function(i) {
    return new t(V({
      expanded: e.expanded,
      allowMultipleExpanded: e.allowMultipleExpanded,
      allowZeroExpanded: e.allowZeroExpanded
    }, i));
  }), this.expanded = a, this.allowMultipleExpanded = d, this.allowZeroExpanded = u;
}, H = /* @__PURE__ */ c.createContext(null), B = /* @__PURE__ */ function(t) {
  D(e, t);
  var n = N(e);
  function e() {
    var r;
    A(this, e);
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
  return _(e, [{
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
  }]), e;
}(c.PureComponent);
s(B, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var Z = /* @__PURE__ */ function(t) {
  D(e, t);
  var n = N(e);
  function e() {
    var r;
    A(this, e);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "renderChildren", function(l) {
      return l ? r.props.children(l) : null;
    }), r;
  }
  return _(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ c.createElement(H.Consumer, null, this.renderChildren);
    }
  }]), e;
}(c.PureComponent), be = function(n) {
  var e = n.className, r = e === void 0 ? "accordion" : e, a = n.allowMultipleExpanded, o = n.allowZeroExpanded, d = n.onChange, l = n.preExpanded, u = x(n, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);
  return /* @__PURE__ */ c.createElement(B, {
    preExpanded: l,
    allowMultipleExpanded: a,
    allowZeroExpanded: o,
    onChange: d
  }, /* @__PURE__ */ c.createElement("div", g({
    "data-accordion-component": "Accordion",
    className: r
  }, u)));
}, S;
(function(t) {
  t.Accordion = "Accordion", t.AccordionItem = "AccordionItem", t.AccordionItemButton = "AccordionItemButton", t.AccordionItemHeading = "AccordionItemHeading", t.AccordionItemPanel = "AccordionItemPanel";
})(S || (S = {}));
var L = S, ae = 0, P = ae;
function oe() {
  var t = P;
  return P = P + 1, "raa-".concat(t);
}
var ie = /[\u0009\u000a\u000c\u000d\u0020]/g;
function E(t) {
  return t === "" || ie.test(t) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(t, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var W = /* @__PURE__ */ c.createContext(null), de = function(n) {
  var e = n.children, r = n.uuid, a = n.accordionContext, o = n.dangerouslySetExpanded, d = function() {
    a.toggleExpanded(r);
  }, l = function(i) {
    var p = o ?? i.isItemExpanded(r), f = i.isItemDisabled(r), h = i.getPanelAttributes(r, o), j = i.getHeadingAttributes(r), I = i.getButtonAttributes(r, o);
    return /* @__PURE__ */ c.createElement(W.Provider, {
      value: {
        uuid: r,
        expanded: p,
        disabled: f,
        toggleExpanded: d,
        panelAttributes: h,
        headingAttributes: j,
        buttonAttributes: I
      }
    }, e);
  };
  return /* @__PURE__ */ c.createElement(Z, null, l);
}, le = function(n) {
  return /* @__PURE__ */ c.createElement(Z, null, function(e) {
    return /* @__PURE__ */ c.createElement(de, g({}, n, {
      accordionContext: e
    }));
  });
}, y = function(n) {
  var e = n.children, r = function(o) {
    return o ? e(o) : null;
  };
  return /* @__PURE__ */ c.createElement(W.Consumer, null, r);
}, ue = function(n) {
  var e = n.uuid, r = n.dangerouslySetExpanded, a = n.className, o = a === void 0 ? "accordion__item" : a, d = n.activeClassName, l = x(n, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]), u = c.useState(oe()), i = z(u, 1), p = i[0], f = e ?? p, h = function(I) {
    var k = I.expanded, F = k && d ? d : o;
    return /* @__PURE__ */ c.createElement("div", g({
      "data-accordion-component": "AccordionItem",
      className: F
    }, l));
  };
  return E(f.toString()), l.id && E(l.id), /* @__PURE__ */ c.createElement(le, {
    uuid: f,
    dangerouslySetExpanded: r
  }, /* @__PURE__ */ c.createElement(y, null, h));
};
ue.displayName = L.AccordionItem;
function $(t) {
  return t && (t.matches('[data-accordion-component="Accordion"]') ? t : $(t.parentElement));
}
function w(t) {
  var n = $(t);
  return n && Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function ce(t) {
  var n = w(t) || [], e = n[0];
  e && e.focus();
}
function se(t) {
  var n = w(t) || [], e = n[n.length - 1];
  e && e.focus();
}
function pe(t) {
  var n = w(t) || [], e = n.indexOf(t);
  if (e !== -1) {
    var r = n[e + 1];
    r && r.focus();
  }
}
function fe(t) {
  var n = w(t) || [], e = n.indexOf(t);
  if (e !== -1) {
    var r = n[e - 1];
    r && r.focus();
  }
}
var v = {
  END: "End",
  ENTER: "Enter",
  HOME: "Home",
  SPACE: " ",
  SPACE_DEPRECATED: "Spacebar",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
}, me = function(n) {
  var e = n.toggleExpanded, r = n.className, a = r === void 0 ? "accordion__button" : r, o = x(n, ["toggleExpanded", "className"]), d = function(u) {
    var i = u.key;
    if ((i === v.ENTER || i === v.SPACE || i === v.SPACE_DEPRECATED) && (u.preventDefault(), e()), u.target instanceof HTMLElement)
      switch (i) {
        case v.HOME: {
          u.preventDefault(), ce(u.target);
          break;
        }
        case v.END: {
          u.preventDefault(), se(u.target);
          break;
        }
        case v.LEFT:
        case v.UP: {
          u.preventDefault(), fe(u.target);
          break;
        }
        case v.RIGHT:
        case v.DOWN: {
          u.preventDefault(), pe(u.target);
          break;
        }
      }
  };
  return o.id && E(o.id), /* @__PURE__ */ c.createElement("div", g({
    className: a
  }, o, {
    role: "button",
    tabIndex: 0,
    onClick: e,
    onKeyDown: d,
    "data-accordion-component": "AccordionItemButton"
  }));
}, Ae = function(n) {
  return /* @__PURE__ */ c.createElement(y, null, function(e) {
    var r = e.toggleExpanded, a = e.buttonAttributes;
    return /* @__PURE__ */ c.createElement(me, g({
      toggleExpanded: r
    }, n, a));
  });
}, ge = {
  className: "accordion__heading",
  "aria-level": 3
}, ve = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, U = /* @__PURE__ */ function(t) {
  D(e, t);
  var n = N(e);
  function e() {
    var r;
    A(this, e);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "ref", void 0), s(m(r), "setRef", function(l) {
      r.ref = l;
    }), r;
  }
  return _(e, [{
    key: "componentDidUpdate",
    value: function() {
      e.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      e.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ c.createElement("div", g({
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
        throw new Error(ve);
    }
  }]), e;
}(c.PureComponent);
s(U, "defaultProps", ge);
var he = function(n) {
  return /* @__PURE__ */ c.createElement(y, null, function(e) {
    var r = e.headingAttributes;
    return n.id && E(n.id), /* @__PURE__ */ c.createElement(U, g({}, n, r));
  });
};
he.displayName = L.AccordionItemHeading;
var xe = function(n) {
  var e = n.className, r = e === void 0 ? "accordion__panel" : e, a = n.id, o = x(n, ["className", "id"]), d = function(u) {
    var i = u.panelAttributes;
    return a && E(a), /* @__PURE__ */ c.createElement("div", g({
      "data-accordion-component": "AccordionItemPanel",
      className: r
    }, o, i));
  };
  return /* @__PURE__ */ c.createElement(y, null, d);
};
export {
  be as A,
  ue as a,
  he as b,
  Ae as c,
  xe as d
};
