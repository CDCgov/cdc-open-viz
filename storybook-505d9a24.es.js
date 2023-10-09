import { j as h, a as _ } from "./storybook-a1762952.es.js";
import { createElement as s, useState as ne, PureComponent as R, useId as re, createContext as L, Children as oe } from "react";
import { P as C } from "./storybook-8ffdcfbc.es.js";
import { I as ae } from "./storybook-ba379c3c.es.js";
import { T as S } from "./storybook-7d6e2240.es.js";
function $(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function T(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $(Object(t), !0).forEach(function(r) {
      c(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function A(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function W(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function y(e, n, t) {
  return n && W(e.prototype, n), t && W(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function c(e, n, t) {
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
function B(e, n) {
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
function E(e) {
  return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, E(e);
}
function D(e, n) {
  return D = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, D(e, n);
}
function ie() {
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
function de(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function w(e, n) {
  if (e == null)
    return {};
  var t = de(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function m(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function le(e, n) {
  if (n && (typeof n == "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return m(e);
}
function H(e) {
  var n = ie();
  return function() {
    var r = E(e), o;
    if (n) {
      var a = E(this).constructor;
      o = Reflect.construct(r, arguments, a);
    } else
      o = r.apply(this, arguments);
    return le(this, o);
  };
}
function ue(e, n) {
  return pe(e) || me(e, n) || k(e, n) || ge();
}
function ce(e) {
  return se(e) || fe(e) || k(e) || ve();
}
function se(e) {
  if (Array.isArray(e))
    return j(e);
}
function pe(e) {
  if (Array.isArray(e))
    return e;
}
function fe(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function me(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, a = !1, d, l;
    try {
      for (t = t.call(e); !(o = (d = t.next()).done) && (r.push(d.value), !(n && r.length === n)); o = !0)
        ;
    } catch (u) {
      a = !0, l = u;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a)
          throw l;
      }
    }
    return r;
  }
}
function k(e, n) {
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
function ve() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var he = /* @__PURE__ */ y(function e(n) {
  var t = this, r = n.expanded, o = r === void 0 ? [] : r, a = n.allowMultipleExpanded, d = a === void 0 ? !1 : a, l = n.allowZeroExpanded, u = l === void 0 ? !1 : l;
  A(this, e), c(this, "expanded", void 0), c(this, "allowMultipleExpanded", void 0), c(this, "allowZeroExpanded", void 0), c(this, "toggleExpanded", function(i) {
    if (t.isItemDisabled(i))
      return t;
    var p = t.isItemExpanded(i);
    return p ? t.augment({
      expanded: t.expanded.filter(function(f) {
        return f !== i;
      })
    }) : t.augment({
      expanded: t.allowMultipleExpanded ? [].concat(ce(t.expanded), [i]) : [i]
    });
  }), c(this, "isItemDisabled", function(i) {
    var p = t.isItemExpanded(i), f = t.expanded.length === 1;
    return !!(p && !t.allowZeroExpanded && f);
  }), c(this, "isItemExpanded", function(i) {
    return t.expanded.indexOf(i) !== -1;
  }), c(this, "getPanelAttributes", function(i, p) {
    var f = p ?? t.isItemExpanded(i);
    return {
      role: t.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": t.allowMultipleExpanded ? !f : void 0,
      "aria-labelledby": t.getButtonId(i),
      id: t.getPanelId(i),
      hidden: f ? void 0 : !0
    };
  }), c(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), c(this, "getButtonAttributes", function(i, p) {
    var f = p ?? t.isItemExpanded(i), b = t.isItemDisabled(i);
    return {
      id: t.getButtonId(i),
      "aria-disabled": b,
      "aria-expanded": f,
      "aria-controls": t.getPanelId(i),
      role: "button",
      tabIndex: 0
    };
  }), c(this, "getPanelId", function(i) {
    return "accordion__panel-".concat(i);
  }), c(this, "getButtonId", function(i) {
    return "accordion__heading-".concat(i);
  }), c(this, "augment", function(i) {
    return new e(T({
      expanded: t.expanded,
      allowMultipleExpanded: t.allowMultipleExpanded,
      allowZeroExpanded: t.allowZeroExpanded
    }, i));
  }), this.expanded = o, this.allowMultipleExpanded = d, this.allowZeroExpanded = u;
}), U = /* @__PURE__ */ L(null), V = /* @__PURE__ */ function(e) {
  B(t, e);
  var n = H(t);
  function t() {
    var r;
    A(this, t);
    for (var o = arguments.length, a = new Array(o), d = 0; d < o; d++)
      a[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(a)), c(m(r), "state", new he({
      expanded: r.props.preExpanded,
      allowMultipleExpanded: r.props.allowMultipleExpanded,
      allowZeroExpanded: r.props.allowZeroExpanded
    })), c(m(r), "toggleExpanded", function(l) {
      r.setState(function(u) {
        return u.toggleExpanded(l);
      }, function() {
        r.props.onChange && r.props.onChange(r.state.expanded);
      });
    }), c(m(r), "isItemDisabled", function(l) {
      return r.state.isItemDisabled(l);
    }), c(m(r), "isItemExpanded", function(l) {
      return r.state.isItemExpanded(l);
    }), c(m(r), "getPanelAttributes", function(l, u) {
      return r.state.getPanelAttributes(l, u);
    }), c(m(r), "getHeadingAttributes", function() {
      return r.state.getHeadingAttributes();
    }), c(m(r), "getButtonAttributes", function(l, u) {
      return r.state.getButtonAttributes(l, u);
    }), r;
  }
  return y(t, [{
    key: "render",
    value: function() {
      var o = this.state, a = o.allowZeroExpanded, d = o.allowMultipleExpanded;
      return /* @__PURE__ */ s(U.Provider, {
        value: {
          allowMultipleExpanded: d,
          allowZeroExpanded: a,
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
}(R);
c(V, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var F = /* @__PURE__ */ function(e) {
  B(t, e);
  var n = H(t);
  function t() {
    var r;
    A(this, t);
    for (var o = arguments.length, a = new Array(o), d = 0; d < o; d++)
      a[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(a)), c(m(r), "renderChildren", function(l) {
      return l ? r.props.children(l) : null;
    }), r;
  }
  return y(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ s(U.Consumer, null, this.renderChildren);
    }
  }]), t;
}(R), be = ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"], xe = function(n) {
  var t = n.className, r = t === void 0 ? "accordion" : t, o = n.allowMultipleExpanded, a = n.allowZeroExpanded, d = n.onChange, l = n.preExpanded, u = w(n, be);
  return /* @__PURE__ */ s(V, {
    preExpanded: l,
    allowMultipleExpanded: o,
    allowZeroExpanded: a,
    onChange: d
  }, /* @__PURE__ */ s("div", v({
    "data-accordion-component": "Accordion",
    className: r
  }, u)));
}, M;
(function(e) {
  e.Accordion = "Accordion", e.AccordionItem = "AccordionItem", e.AccordionItemButton = "AccordionItemButton", e.AccordionItemHeading = "AccordionItemHeading", e.AccordionItemPanel = "AccordionItemPanel";
})(M || (M = {}));
var K = M, N = 0;
function Ee() {
  var e = N;
  return N = N + 1, "raa-".concat(e);
}
var Ae = re || Ee, ye = /[\u0009\u000a\u000c\u000d\u0020]/g;
function x(e) {
  return e === "" || ye.test(e) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(e, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var G = /* @__PURE__ */ L(null), we = function(n) {
  var t = n.children, r = n.uuid, o = n.accordionContext, a = n.dangerouslySetExpanded, d = function() {
    o.toggleExpanded(r);
  }, l = function(i) {
    var p = a ?? i.isItemExpanded(r), f = i.isItemDisabled(r), b = i.getPanelAttributes(r, a), Z = i.getHeadingAttributes(r), O = i.getButtonAttributes(r, a);
    return /* @__PURE__ */ s(G.Provider, {
      value: {
        uuid: r,
        expanded: p,
        disabled: f,
        toggleExpanded: d,
        panelAttributes: b,
        headingAttributes: Z,
        buttonAttributes: O
      }
    }, t);
  };
  return /* @__PURE__ */ s(F, null, l);
}, Ie = function(n) {
  return /* @__PURE__ */ s(F, null, function(t) {
    return /* @__PURE__ */ s(we, v({}, n, {
      accordionContext: t
    }));
  });
}, I = function(n) {
  var t = n.children, r = function(a) {
    return a ? t(a) : null;
  };
  return /* @__PURE__ */ s(G.Consumer, null, r);
}, Pe = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"], q = function(n) {
  var t = n.uuid, r = n.dangerouslySetExpanded, o = n.className, a = o === void 0 ? "accordion__item" : o, d = n.activeClassName, l = w(n, Pe), u = ne(Ae()), i = ue(u, 1), p = i[0], f = t ?? p, b = function(O) {
    var ee = O.expanded, te = ee && d ? d : a;
    return /* @__PURE__ */ s("div", v({
      "data-accordion-component": "AccordionItem",
      className: te
    }, l));
  };
  return x(f.toString()), l.id && x(l.id), /* @__PURE__ */ s(Ie, {
    uuid: f,
    dangerouslySetExpanded: r
  }, /* @__PURE__ */ s(I, null, b));
};
q.displayName = K.AccordionItem;
function z(e) {
  return e && (e.matches('[data-accordion-component="Accordion"]') ? e : z(e.parentElement));
}
function P(e) {
  var n = z(e);
  return n && Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function Oe(e) {
  var n = P(e) || [], t = n[0];
  t && t.focus();
}
function _e(e) {
  var n = P(e) || [], t = n[n.length - 1];
  t && t.focus();
}
function Ce(e) {
  var n = P(e) || [], t = n.indexOf(e);
  if (t !== -1) {
    var r = n[t + 1];
    r && r.focus();
  }
}
function Se(e) {
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
}, Ne = ["toggleExpanded", "className"], Te = function(n) {
  var t = n.toggleExpanded, r = n.className, o = r === void 0 ? "accordion__button" : r, a = w(n, Ne), d = function(u) {
    var i = u.key;
    if ((i === g.ENTER || i === g.SPACE || i === g.SPACE_DEPRECATED) && (u.preventDefault(), t()), u.target instanceof HTMLElement)
      switch (i) {
        case g.HOME: {
          u.preventDefault(), Oe(u.target);
          break;
        }
        case g.END: {
          u.preventDefault(), _e(u.target);
          break;
        }
        case g.LEFT:
        case g.UP: {
          u.preventDefault(), Se(u.target);
          break;
        }
        case g.RIGHT:
        case g.DOWN: {
          u.preventDefault(), Ce(u.target);
          break;
        }
      }
  };
  return a.id && x(a.id), /* @__PURE__ */ s("div", v({
    className: o
  }, a, {
    role: "button",
    tabIndex: 0,
    onClick: t,
    onKeyDown: d,
    "data-accordion-component": "AccordionItemButton"
  }));
}, De = function(n) {
  return /* @__PURE__ */ s(I, null, function(t) {
    var r = t.toggleExpanded, o = t.buttonAttributes;
    return /* @__PURE__ */ s(Te, v({
      toggleExpanded: r
    }, n, o));
  });
}, je = {
  className: "accordion__heading",
  "aria-level": 3
}, Me = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, J = /* @__PURE__ */ function(e) {
  B(t, e);
  var n = H(t);
  function t() {
    var r;
    A(this, t);
    for (var o = arguments.length, a = new Array(o), d = 0; d < o; d++)
      a[d] = arguments[d];
    return r = n.call.apply(n, [this].concat(a)), c(m(r), "ref", void 0), c(m(r), "setRef", function(l) {
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
      return /* @__PURE__ */ s("div", v({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function(o) {
      if (o === void 0)
        throw new Error("ref is undefined");
      if (!(o.childElementCount === 1 && o.firstElementChild && o.firstElementChild.getAttribute("data-accordion-component") === "AccordionItemButton"))
        throw new Error(Me);
    }
  }]), t;
}(R);
c(J, "defaultProps", je);
var Q = function(n) {
  return /* @__PURE__ */ s(I, null, function(t) {
    var r = t.headingAttributes;
    return n.id && x(n.id), /* @__PURE__ */ s(J, v({}, n, r));
  });
};
Q.displayName = K.AccordionItemHeading;
var Re = ["className", "region", "id"], Be = function(n) {
  var t = n.className, r = t === void 0 ? "accordion__panel" : t, o = n.region, a = n.id, d = w(n, Re), l = function(i) {
    var p = i.panelAttributes;
    a && x(a);
    var f = T(T({}, p), {}, {
      "aria-labelledby": o ? p["aria-labelledby"] : void 0
    });
    return /* @__PURE__ */ s("div", v({
      "data-accordion-component": "AccordionItemPanel",
      className: r
    }, d, f, {
      role: o ? "region" : void 0
    }));
  };
  return /* @__PURE__ */ s(I, null, l);
};
const X = (e) => e, Y = ({ children: e }) => {
  const t = oe.toArray(e).filter((r) => (r == null ? void 0 : r.type) === X);
  return /* @__PURE__ */ h(xe, { allowZeroExpanded: !0, children: t && t.map((r, o) => /* @__PURE__ */ _(q, { className: "cove-accordion__item", children: [
    /* @__PURE__ */ h(Q, { className: "cove-accordion__heading", children: /* @__PURE__ */ _(De, { className: "cove-accordion__button", children: [
      r.props.icon,
      r.props.title,
      r.props.tooltipText ? /* @__PURE__ */ _(S, { position: "bottom", children: [
        /* @__PURE__ */ h(S.Target, { children: /* @__PURE__ */ h(ae, { display: "question", size: 14 }) }),
        /* @__PURE__ */ h(S.Content, { children: r.props.tooltipText })
      ] }) : null
    ] }) }),
    /* @__PURE__ */ h(Be, { className: "cove-accordion__panel", children: r.props.children })
  ] }, o)) });
};
Y.Section = X;
Y.Section.propTypes = {
  /* Icon for the accordion label */
  icon: C.node,
  /* Title for the accordion label*/
  title: C.string,
  /* Tooltip for the accordion label*/
  tooltipText: C.object
};
export {
  Y as A
};
