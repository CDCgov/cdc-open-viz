import { j as h, a as _ } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as u } from "./storybook-index-f2fed736.es.js";
import { P as C } from "./storybook-index-43433e35.es.js";
import { a as ee } from "./storybook-Icon-e250778e.es.js";
import { T as S } from "./storybook-Tooltip-5b6ee371.es.js";
function Z(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function T(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Z(Object(t), !0).forEach(function(r) {
      s(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function A(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function $(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function y(e, n, t) {
  return n && $(e.prototype, n), t && $(e, t), Object.defineProperty(e, "prototype", {
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
function R(e, n) {
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
  }), n && D(e, n);
}
function x(e) {
  return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, x(e);
}
function D(e, n) {
  return D = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, D(e, n);
}
function te() {
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
function ne(e, n) {
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
  var t = ne(e, n), r, a;
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
function re(e, n) {
  if (n && (typeof n == "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return m(e);
}
function B(e) {
  var n = te();
  return function() {
    var r = x(e), a;
    if (n) {
      var o = x(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return re(this, a);
  };
}
function ae(e, n) {
  return de(e) || ce(e, n) || W(e, n) || se();
}
function oe(e) {
  return ie(e) || le(e) || W(e) || ue();
}
function ie(e) {
  if (Array.isArray(e))
    return j(e);
}
function de(e) {
  if (Array.isArray(e))
    return e;
}
function le(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ce(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, d, l;
    try {
      for (t = t.call(e); !(a = (d = t.next()).done) && (r.push(d.value), !(n && r.length === n)); a = !0)
        ;
    } catch (c) {
      o = !0, l = c;
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
function W(e, n) {
  if (e) {
    if (typeof e == "string")
      return j(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return j(e, n);
  }
}
function j(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function ue() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pe = /* @__PURE__ */ y(function e(n) {
  var t = this, r = n.expanded, a = r === void 0 ? [] : r, o = n.allowMultipleExpanded, d = o === void 0 ? !1 : o, l = n.allowZeroExpanded, c = l === void 0 ? !1 : l;
  A(this, e), s(this, "expanded", void 0), s(this, "allowMultipleExpanded", void 0), s(this, "allowZeroExpanded", void 0), s(this, "toggleExpanded", function(i) {
    if (t.isItemDisabled(i))
      return t;
    var p = t.isItemExpanded(i);
    return p ? t.augment({
      expanded: t.expanded.filter(function(f) {
        return f !== i;
      })
    }) : t.augment({
      expanded: t.allowMultipleExpanded ? [].concat(oe(t.expanded), [i]) : [i]
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
    return new e(T({
      expanded: t.expanded,
      allowMultipleExpanded: t.allowMultipleExpanded,
      allowZeroExpanded: t.allowZeroExpanded
    }, i));
  }), this.expanded = a, this.allowMultipleExpanded = d, this.allowZeroExpanded = c;
}), L = /* @__PURE__ */ u.createContext(null), k = /* @__PURE__ */ function(e) {
  R(t, e);
  var n = B(t);
  function t() {
    var r;
    A(this, t);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "state", new pe({
      expanded: r.props.preExpanded,
      allowMultipleExpanded: r.props.allowMultipleExpanded,
      allowZeroExpanded: r.props.allowZeroExpanded
    })), s(m(r), "toggleExpanded", function(l) {
      r.setState(function(c) {
        return c.toggleExpanded(l);
      }, function() {
        r.props.onChange && r.props.onChange(r.state.expanded);
      });
    }), s(m(r), "isItemDisabled", function(l) {
      return r.state.isItemDisabled(l);
    }), s(m(r), "isItemExpanded", function(l) {
      return r.state.isItemExpanded(l);
    }), s(m(r), "getPanelAttributes", function(l, c) {
      return r.state.getPanelAttributes(l, c);
    }), s(m(r), "getHeadingAttributes", function() {
      return r.state.getHeadingAttributes();
    }), s(m(r), "getButtonAttributes", function(l, c) {
      return r.state.getButtonAttributes(l, c);
    }), r;
  }
  return y(t, [{
    key: "render",
    value: function() {
      var a = this.state, o = a.allowZeroExpanded, d = a.allowMultipleExpanded;
      return /* @__PURE__ */ u.createElement(L.Provider, {
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
}(u.PureComponent);
s(k, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var U = /* @__PURE__ */ function(e) {
  R(t, e);
  var n = B(t);
  function t() {
    var r;
    A(this, t);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "renderChildren", function(l) {
      return l ? r.props.children(l) : null;
    }), r;
  }
  return y(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ u.createElement(L.Consumer, null, this.renderChildren);
    }
  }]), t;
}(u.PureComponent), fe = ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"], me = function(n) {
  var t = n.className, r = t === void 0 ? "accordion" : t, a = n.allowMultipleExpanded, o = n.allowZeroExpanded, d = n.onChange, l = n.preExpanded, c = w(n, fe);
  return /* @__PURE__ */ u.createElement(k, {
    preExpanded: l,
    allowMultipleExpanded: a,
    allowZeroExpanded: o,
    onChange: d
  }, /* @__PURE__ */ u.createElement("div", v({
    "data-accordion-component": "Accordion",
    className: r
  }, c)));
}, M;
(function(e) {
  e.Accordion = "Accordion", e.AccordionItem = "AccordionItem", e.AccordionItemButton = "AccordionItemButton", e.AccordionItemHeading = "AccordionItemHeading", e.AccordionItemPanel = "AccordionItemPanel";
})(M || (M = {}));
var V = M, N = 0;
function ve() {
  var e = N;
  return N = N + 1, "raa-".concat(e);
}
var ge = u.useId || ve, he = /[\u0009\u000a\u000c\u000d\u0020]/g;
function E(e) {
  return e === "" || he.test(e) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(e, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var F = /* @__PURE__ */ u.createContext(null), be = function(n) {
  var t = n.children, r = n.uuid, a = n.accordionContext, o = n.dangerouslySetExpanded, d = function() {
    a.toggleExpanded(r);
  }, l = function(i) {
    var p = o ?? i.isItemExpanded(r), f = i.isItemDisabled(r), b = i.getPanelAttributes(r, o), H = i.getHeadingAttributes(r), O = i.getButtonAttributes(r, o);
    return /* @__PURE__ */ u.createElement(F.Provider, {
      value: {
        uuid: r,
        expanded: p,
        disabled: f,
        toggleExpanded: d,
        panelAttributes: b,
        headingAttributes: H,
        buttonAttributes: O
      }
    }, t);
  };
  return /* @__PURE__ */ u.createElement(U, null, l);
}, Ee = function(n) {
  return /* @__PURE__ */ u.createElement(U, null, function(t) {
    return /* @__PURE__ */ u.createElement(be, v({}, n, {
      accordionContext: t
    }));
  });
}, I = function(n) {
  var t = n.children, r = function(o) {
    return o ? t(o) : null;
  };
  return /* @__PURE__ */ u.createElement(F.Consumer, null, r);
}, xe = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"], K = function(n) {
  var t = n.uuid, r = n.dangerouslySetExpanded, a = n.className, o = a === void 0 ? "accordion__item" : a, d = n.activeClassName, l = w(n, xe), c = u.useState(ge()), i = ae(c, 1), p = i[0], f = t ?? p, b = function(O) {
    var X = O.expanded, Y = X && d ? d : o;
    return /* @__PURE__ */ u.createElement("div", v({
      "data-accordion-component": "AccordionItem",
      className: Y
    }, l));
  };
  return E(f.toString()), l.id && E(l.id), /* @__PURE__ */ u.createElement(Ee, {
    uuid: f,
    dangerouslySetExpanded: r
  }, /* @__PURE__ */ u.createElement(I, null, b));
};
K.displayName = V.AccordionItem;
function G(e) {
  return e && (e.matches('[data-accordion-component="Accordion"]') ? e : G(e.parentElement));
}
function P(e) {
  var n = G(e);
  return n && Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function Ae(e) {
  var n = P(e) || [], t = n[0];
  t && t.focus();
}
function ye(e) {
  var n = P(e) || [], t = n[n.length - 1];
  t && t.focus();
}
function we(e) {
  var n = P(e) || [], t = n.indexOf(e);
  if (t !== -1) {
    var r = n[t + 1];
    r && r.focus();
  }
}
function Ie(e) {
  var n = P(e) || [], t = n.indexOf(e);
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
}, Pe = ["toggleExpanded", "className"], Oe = function(n) {
  var t = n.toggleExpanded, r = n.className, a = r === void 0 ? "accordion__button" : r, o = w(n, Pe), d = function(c) {
    var i = c.key;
    if ((i === g.ENTER || i === g.SPACE || i === g.SPACE_DEPRECATED) && (c.preventDefault(), t()), c.target instanceof HTMLElement)
      switch (i) {
        case g.HOME: {
          c.preventDefault(), Ae(c.target);
          break;
        }
        case g.END: {
          c.preventDefault(), ye(c.target);
          break;
        }
        case g.LEFT:
        case g.UP: {
          c.preventDefault(), Ie(c.target);
          break;
        }
        case g.RIGHT:
        case g.DOWN: {
          c.preventDefault(), we(c.target);
          break;
        }
      }
  };
  return o.id && E(o.id), /* @__PURE__ */ u.createElement("div", v({
    className: a
  }, o, {
    role: "button",
    tabIndex: 0,
    onClick: t,
    onKeyDown: d,
    "data-accordion-component": "AccordionItemButton"
  }));
}, _e = function(n) {
  return /* @__PURE__ */ u.createElement(I, null, function(t) {
    var r = t.toggleExpanded, a = t.buttonAttributes;
    return /* @__PURE__ */ u.createElement(Oe, v({
      toggleExpanded: r
    }, n, a));
  });
}, Ce = {
  className: "accordion__heading",
  "aria-level": 3
}, Se = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, q = /* @__PURE__ */ function(e) {
  R(t, e);
  var n = B(t);
  function t() {
    var r;
    A(this, t);
    for (var a = arguments.length, o = new Array(a), d = 0; d < a; d++)
      o[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(o)), s(m(r), "ref", void 0), s(m(r), "setRef", function(l) {
      r.ref = l;
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
        throw new Error(Se);
    }
  }]), t;
}(u.PureComponent);
s(q, "defaultProps", Ce);
var z = function(n) {
  return /* @__PURE__ */ u.createElement(I, null, function(t) {
    var r = t.headingAttributes;
    return n.id && E(n.id), /* @__PURE__ */ u.createElement(q, v({}, n, r));
  });
};
z.displayName = V.AccordionItemHeading;
var Ne = ["className", "region", "id"], Te = function(n) {
  var t = n.className, r = t === void 0 ? "accordion__panel" : t, a = n.region, o = n.id, d = w(n, Ne), l = function(i) {
    var p = i.panelAttributes;
    o && E(o);
    var f = T(T({}, p), {}, {
      "aria-labelledby": a ? p["aria-labelledby"] : void 0
    });
    return /* @__PURE__ */ u.createElement("div", v({
      "data-accordion-component": "AccordionItemPanel",
      className: r
    }, d, f, {
      role: a ? "region" : void 0
    }));
  };
  return /* @__PURE__ */ u.createElement(I, null, l);
};
const J = (e) => e, Q = ({ children: e }) => {
  const t = u.Children.toArray(e).filter((r) => (r == null ? void 0 : r.type) === J);
  return /* @__PURE__ */ h(me, { allowZeroExpanded: !0, children: t && t.map((r, a) => /* @__PURE__ */ _(K, { className: "cove-accordion__item", children: [
    /* @__PURE__ */ h(z, { className: "cove-accordion__heading", children: /* @__PURE__ */ _(_e, { className: "cove-accordion__button", children: [
      r.props.icon,
      r.props.title,
      r.props.tooltipText ? /* @__PURE__ */ _(S, { position: "bottom", children: [
        /* @__PURE__ */ h(S.Target, { children: /* @__PURE__ */ h(ee, { display: "question", size: 14 }) }),
        /* @__PURE__ */ h(S.Content, { children: r.props.tooltipText })
      ] }) : null
    ] }) }),
    /* @__PURE__ */ h(Te, { className: "cove-accordion__panel", children: r.props.children })
  ] }, a)) });
};
Q.Section = J;
Q.Section.propTypes = {
  /* Icon for the accordion label */
  icon: C.node,
  /* Title for the accordion label*/
  title: C.string,
  /* Tooltip for the accordion label*/
  tooltipText: C.object
};
export {
  Q as A,
  me as a,
  K as b,
  z as c,
  _e as d,
  Te as e
};
