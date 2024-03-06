import { r as s } from "./storybook-index-45401197.es.js";
class be {
  constructor() {
    this.applySuppression = (n, e) => !e || e.length === 0 ? n : n.map((o) => {
      const a = { ...o };
      for (let l = 0; l < e.length; l++)
        a[e[l].column] && a[e[l].column] === e[l].value && (a[e[l].column] = e[l].label);
      return a;
    }), this.constants = {
      errorMessageEmtpyData: "Your data file is empty.",
      errorMessageFormat: "Your datatype is not supported.",
      descriptionHeader: 1,
      descriptionRoot: 2,
      descriptionSeriesFilter: 3
    };
  }
  //Performs standardizations that can be completed automatically without use input
  autoStandardize(n) {
    const e = [];
    if ((!n || n.length === 0) && e.push(this.constants.errorMessageEmptyData), (!(n != null && n.filter) || n.filter((t) => typeof t != "object").length > 0) && e.push(this.constants.errorMessageFormat), e.length > 0) {
      console.error(e);
      return;
    }
    if (n.filter((t) => t.constructor !== Object).length > 0) {
      let t = [];
      for (let o = 1; o < n.length; o++) {
        let a = {};
        n[o].forEach((l, i) => {
          a[n[0][i]] = l;
        }), t.push(a);
      }
      n = t;
    }
    return n;
  }
  //Performs standardizations based on developer provided description of the data
  developerStandardize(n, e) {
    if (!n)
      return [];
    if (e && !(e.horizontal === void 0 || e.series === void 0) && !(e.series === !0 && e.horizontal === !1 && e.singleRow === void 0)) {
      if (e.horizontal === !0)
        if (e.series === !0) {
          if (!e.seriesKey)
            return;
          let t = {}, o = [];
          return n.forEach((a) => {
            let l = [];
            Object.keys(a).forEach((i) => {
              i !== e.seriesKey && isNaN(parseFloat(a[i])) && l.push(i);
            }), Object.keys(a).forEach((i) => {
              if (i !== e.seriesKey && l.indexOf(i) === -1) {
                let d = i + "|" + l.map((u) => u + "=" + a[u]);
                t[d] || (t[d] = { [a[e.seriesKey]]: a[i], key: i }, l.forEach((u) => {
                  t[d][u] = a[u];
                })), t[d][a[e.seriesKey]] = a[i];
              }
            });
          }), Object.keys(t).forEach((a) => {
            o.push(t[a]);
          }), o;
        } else {
          let t = [];
          return n.forEach((o) => {
            let a = [];
            Object.keys(o).forEach((l) => {
              isNaN(parseFloat(o[l])) && a.push(l);
            }), Object.keys(o).forEach((l) => {
              if (a.indexOf(l) === -1) {
                let i = { key: l, value: o[l] };
                a.forEach((d) => {
                  i[d] = o[d];
                }), t.push(i);
              }
            });
          }), t;
        }
      else if (e.series === !0 && e.singleRow === !1)
        if (e.seriesKey !== void 0 && e.xKey !== void 0 && (e.valueKey !== void 0 || e.valueKeys !== void 0 && e.valueKeys.length > 0 || e.valueKeysTallSupport !== void 0 && e.valueKeysTallSupport.length > 0))
          if (e.valueKeysTallSupport !== void 0) {
            let t = {}, o = [];
            return n.forEach((a) => {
              let l = a[e.xKey];
              Object.keys(a).forEach((i) => {
                i !== e.xKey && i !== e.seriesKey && e.valueKeysTallSupport.indexOf(i) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(i) === -1) && (l += "|" + a[i]);
              }), t[l] || (t[l] = { [e.xKey]: a[e.xKey] }), Object.keys(a).forEach((i) => {
                i !== e.xKey && i !== e.seriesKey && e.valueKeysTallSupport.indexOf(i) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(i) === -1) && (t[l][i] = a[i]);
              }), e.valueKeysTallSupport.forEach((i) => {
                t[l][a[e.seriesKey] + "-" + i] = a[i];
              });
            }), o = Object.keys(t).map((a) => t[a]), o;
          } else if (e.valueKeys !== void 0) {
            let t = {}, o = [], a = e.valueKeys;
            return e.ignoredKeys && e.ignoredKeys.length > 0 && (a = a.concat(e.ignoredKeys)), n.forEach((l) => {
              a.forEach((i) => {
                let d = [], u = l[e.xKey] + "|" + i;
                Object.keys(l).forEach((c) => {
                  c !== e.xKey && c !== e.seriesKey && a.indexOf(c) === -1 && (u += "|" + c + "=" + l[c], d.push(c));
                }), t[u] || (t[u] = { [e.xKey]: l[e.xKey], "**Numeric Value Property**": i }, d.forEach((c) => {
                  t[u][c] = l[c];
                })), t[u][l[e.seriesKey]] = l[i];
              });
            }), Object.keys(t).forEach((l) => {
              (!e.ignoredKeys || e.ignoredKeys.indexOf(t[l]["**Numeric Value Property**"]) === -1) && o.push(t[l]);
            }), o;
          } else {
            let t = {}, o = [];
            return n.forEach((a) => {
              let l = [], i = a[e.xKey];
              Object.keys(a).forEach((d) => {
                d !== e.xKey && d !== e.seriesKey && d !== e.valueKey && (i += "|" + d + "=" + a[d], l.push(d));
              }), t[i] ? t[i][a[e.seriesKey]] = a[e.valueKey] : (t[i] = { [e.xKey]: a[e.xKey], [a[e.seriesKey]]: a[e.valueKey] }, l.forEach((d) => {
                t[i][d] = a[d];
              }));
            }), Object.keys(t).forEach((a) => {
              o.push(t[a]);
            }), o;
          }
        else
          return;
      return n;
    }
  }
  /**
     * cleanData
     *
    // This cleans a data set by:
    // - removing commas and $ signs from any numbers to try to plot the point
    // - removing any data points that are NOT composed of of all digits (but allow a decimal point)
    // Without this the charts "break" and do not render
    *
    * Inputs: data as array, excludeKey indicates which key to use to NOT clean
    *                        Example: "Date" should not be cleaned if part of the data
    *
    * Output: returns the cleanedData
    *
    * Set testing = true if you need to see before and after data
    *
    */
  cleanData(n, e, t = !1) {
    let o = [];
    if (!Array.isArray(n))
      debugger;
    return t && console.log("## Data to clean=", n), e === void 0 ? (console.log("COVE: cleanData excludeKey undefined"), n) : (n.forEach(function(a, l) {
      t && console.log("clean", l, " d", a);
      let i = {};
      Object.keys(a).forEach(function(d) {
        const u = a[d];
        if (d === e)
          i[d] = u;
        else {
          t && console.log("typeof value is ", typeof u);
          let c = "";
          typeof u == "string" ? c = u ? ((E) => E.replace(/[,\$]/g, ""))(u) : "" : c = u || "";
          const v = (E) => /\d+\.?\d*/.test(E);
          !isNaN(parseFloat(c)) || v(c) ? i[d] = c : i[d] = "";
        }
      }), t && console.log("cleaned=", i), o.push(i);
    }), t && console.log("## cleanedData =", o), o);
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(n, e = !1) {
    e && console.log("clean", n);
    let t = "";
    return typeof n == "string" ? t = n !== null && n !== "" ? n.replace(/[,\$\%]/g, "") : "" : t = n !== null && n !== "" ? n : "", e && console.log("## cleanedData =", t), t;
  }
}
function x(r, n) {
  if (!(r instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _(r, n) {
  for (var e = 0; e < n.length; e++) {
    var t = n[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function j(r, n, e) {
  return n && _(r.prototype, n), e && _(r, e), r;
}
function f(r, n, e) {
  return n in r ? Object.defineProperty(r, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[n] = e, r;
}
function h() {
  return h = Object.assign || function(r) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    }
    return r;
  }, h.apply(this, arguments);
}
function M(r, n) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    n && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function U(r) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? M(Object(e), !0).forEach(function(t) {
      f(r, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : M(Object(e)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return r;
}
function D(r, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), n && K(r, n);
}
function y(r) {
  return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, y(r);
}
function K(r, n) {
  return K = Object.setPrototypeOf || function(t, o) {
    return t.__proto__ = o, t;
  }, K(r, n);
}
function V() {
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
function q(r, n) {
  if (r == null)
    return {};
  var e = {}, t = Object.keys(r), o, a;
  for (a = 0; a < t.length; a++)
    o = t[a], !(n.indexOf(o) >= 0) && (e[o] = r[o]);
  return e;
}
function A(r, n) {
  if (r == null)
    return {};
  var e = q(r, n), t, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (o = 0; o < a.length; o++)
      t = a[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(r, t) && (e[t] = r[t]);
  }
  return e;
}
function m(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function G(r, n) {
  return n && (typeof n == "object" || typeof n == "function") ? n : m(r);
}
function N(r) {
  var n = V();
  return function() {
    var t = y(r), o;
    if (n) {
      var a = y(this).constructor;
      o = Reflect.construct(t, arguments, a);
    } else
      o = t.apply(this, arguments);
    return G(this, o);
  };
}
function Y(r, n) {
  return X(r) || ee(r, n) || T(r, n) || ne();
}
function J(r) {
  return Q(r) || k(r) || T(r) || te();
}
function Q(r) {
  if (Array.isArray(r))
    return S(r);
}
function X(r) {
  if (Array.isArray(r))
    return r;
}
function k(r) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(r))
    return Array.from(r);
}
function ee(r, n) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(r)))) {
    var e = [], t = !0, o = !1, a = void 0;
    try {
      for (var l = r[Symbol.iterator](), i; !(t = (i = l.next()).done) && (e.push(i.value), !(n && e.length === n)); t = !0)
        ;
    } catch (d) {
      o = !0, a = d;
    } finally {
      try {
        !t && l.return != null && l.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return e;
  }
}
function T(r, n) {
  if (r) {
    if (typeof r == "string")
      return S(r, n);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set")
      return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return S(r, n);
  }
}
function S(r, n) {
  (n == null || n > r.length) && (n = r.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = r[e];
  return t;
}
function te() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var re = function r(n) {
  var e = this, t = n.expanded, o = t === void 0 ? [] : t, a = n.allowMultipleExpanded, l = a === void 0 ? !1 : a, i = n.allowZeroExpanded, d = i === void 0 ? !1 : i;
  x(this, r), f(this, "expanded", void 0), f(this, "allowMultipleExpanded", void 0), f(this, "allowZeroExpanded", void 0), f(this, "toggleExpanded", function(u) {
    if (e.isItemDisabled(u))
      return e;
    var c = e.isItemExpanded(u);
    return c ? e.augment({
      expanded: e.expanded.filter(function(p) {
        return p !== u;
      })
    }) : e.augment({
      expanded: e.allowMultipleExpanded ? [].concat(J(e.expanded), [u]) : [u]
    });
  }), f(this, "isItemDisabled", function(u) {
    var c = e.isItemExpanded(u), p = e.expanded.length === 1;
    return !!(c && !e.allowZeroExpanded && p);
  }), f(this, "isItemExpanded", function(u) {
    return e.expanded.indexOf(u) !== -1;
  }), f(this, "getPanelAttributes", function(u, c) {
    var p = c ?? e.isItemExpanded(u);
    return {
      role: e.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": e.allowMultipleExpanded ? !p : void 0,
      "aria-labelledby": e.getButtonId(u),
      id: e.getPanelId(u),
      hidden: p ? void 0 : !0
    };
  }), f(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), f(this, "getButtonAttributes", function(u, c) {
    var p = c ?? e.isItemExpanded(u), v = e.isItemDisabled(u);
    return {
      id: e.getButtonId(u),
      "aria-disabled": v,
      "aria-expanded": p,
      "aria-controls": e.getPanelId(u),
      role: "button",
      tabIndex: 0
    };
  }), f(this, "getPanelId", function(u) {
    return "accordion__panel-".concat(u);
  }), f(this, "getButtonId", function(u) {
    return "accordion__heading-".concat(u);
  }), f(this, "augment", function(u) {
    return new r(U({
      expanded: e.expanded,
      allowMultipleExpanded: e.allowMultipleExpanded,
      allowZeroExpanded: e.allowZeroExpanded
    }, u));
  }), this.expanded = o, this.allowMultipleExpanded = l, this.allowZeroExpanded = d;
}, R = /* @__PURE__ */ s.createContext(null), H = /* @__PURE__ */ function(r) {
  D(e, r);
  var n = N(e);
  function e() {
    var t;
    x(this, e);
    for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return t = n.call.apply(n, [this].concat(a)), f(m(t), "state", new re({
      expanded: t.props.preExpanded,
      allowMultipleExpanded: t.props.allowMultipleExpanded,
      allowZeroExpanded: t.props.allowZeroExpanded
    })), f(m(t), "toggleExpanded", function(i) {
      t.setState(function(d) {
        return d.toggleExpanded(i);
      }, function() {
        t.props.onChange && t.props.onChange(t.state.expanded);
      });
    }), f(m(t), "isItemDisabled", function(i) {
      return t.state.isItemDisabled(i);
    }), f(m(t), "isItemExpanded", function(i) {
      return t.state.isItemExpanded(i);
    }), f(m(t), "getPanelAttributes", function(i, d) {
      return t.state.getPanelAttributes(i, d);
    }), f(m(t), "getHeadingAttributes", function() {
      return t.state.getHeadingAttributes();
    }), f(m(t), "getButtonAttributes", function(i, d) {
      return t.state.getButtonAttributes(i, d);
    }), t;
  }
  return j(e, [{
    key: "render",
    value: function() {
      var o = this.state, a = o.allowZeroExpanded, l = o.allowMultipleExpanded;
      return /* @__PURE__ */ s.createElement(R.Provider, {
        value: {
          allowMultipleExpanded: l,
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
  }]), e;
}(s.PureComponent);
f(H, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var B = /* @__PURE__ */ function(r) {
  D(e, r);
  var n = N(e);
  function e() {
    var t;
    x(this, e);
    for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return t = n.call.apply(n, [this].concat(a)), f(m(t), "renderChildren", function(i) {
      return i ? t.props.children(i) : null;
    }), t;
  }
  return j(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ s.createElement(R.Consumer, null, this.renderChildren);
    }
  }]), e;
}(s.PureComponent), ye = function(n) {
  var e = n.className, t = e === void 0 ? "accordion" : e, o = n.allowMultipleExpanded, a = n.allowZeroExpanded, l = n.onChange, i = n.preExpanded, d = A(n, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);
  return /* @__PURE__ */ s.createElement(H, {
    preExpanded: i,
    allowMultipleExpanded: o,
    allowZeroExpanded: a,
    onChange: l
  }, /* @__PURE__ */ s.createElement("div", h({
    "data-accordion-component": "Accordion",
    className: t
  }, d)));
}, C;
(function(r) {
  r.Accordion = "Accordion", r.AccordionItem = "AccordionItem", r.AccordionItemButton = "AccordionItemButton", r.AccordionItemHeading = "AccordionItemHeading", r.AccordionItemPanel = "AccordionItemPanel";
})(C || (C = {}));
var Z = C, ae = 0, w = ae;
function oe() {
  var r = w;
  return w = w + 1, "raa-".concat(r);
}
var ie = /[\u0009\u000a\u000c\u000d\u0020]/g;
function b(r) {
  return r === "" || ie.test(r) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(r, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var z = /* @__PURE__ */ s.createContext(null), le = function(n) {
  var e = n.children, t = n.uuid, o = n.accordionContext, a = n.dangerouslySetExpanded, l = function() {
    o.toggleExpanded(t);
  }, i = function(u) {
    var c = a ?? u.isItemExpanded(t), p = u.isItemDisabled(t), v = u.getPanelAttributes(t, a), E = u.getHeadingAttributes(t), P = u.getButtonAttributes(t, a);
    return /* @__PURE__ */ s.createElement(z.Provider, {
      value: {
        uuid: t,
        expanded: c,
        disabled: p,
        toggleExpanded: l,
        panelAttributes: v,
        headingAttributes: E,
        buttonAttributes: P
      }
    }, e);
  };
  return /* @__PURE__ */ s.createElement(B, null, i);
}, ue = function(n) {
  return /* @__PURE__ */ s.createElement(B, null, function(e) {
    return /* @__PURE__ */ s.createElement(le, h({}, n, {
      accordionContext: e
    }));
  });
}, O = function(n) {
  var e = n.children, t = function(a) {
    return a ? e(a) : null;
  };
  return /* @__PURE__ */ s.createElement(z.Consumer, null, t);
}, de = function(n) {
  var e = n.uuid, t = n.dangerouslySetExpanded, o = n.className, a = o === void 0 ? "accordion__item" : o, l = n.activeClassName, i = A(n, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]), d = s.useState(oe()), u = Y(d, 1), c = u[0], p = e ?? c, v = function(P) {
    var L = P.expanded, W = L && l ? l : a;
    return /* @__PURE__ */ s.createElement("div", h({
      "data-accordion-component": "AccordionItem",
      className: W
    }, i));
  };
  return b(p.toString()), i.id && b(i.id), /* @__PURE__ */ s.createElement(ue, {
    uuid: p,
    dangerouslySetExpanded: t
  }, /* @__PURE__ */ s.createElement(O, null, v));
};
de.displayName = Z.AccordionItem;
function $(r) {
  return r && (r.matches('[data-accordion-component="Accordion"]') ? r : $(r.parentElement));
}
function I(r) {
  var n = $(r);
  return n && Array.from(n.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function ce(r) {
  var n = I(r) || [], e = n[0];
  e && e.focus();
}
function se(r) {
  var n = I(r) || [], e = n[n.length - 1];
  e && e.focus();
}
function fe(r) {
  var n = I(r) || [], e = n.indexOf(r);
  if (e !== -1) {
    var t = n[e + 1];
    t && t.focus();
  }
}
function pe(r) {
  var n = I(r) || [], e = n.indexOf(r);
  if (e !== -1) {
    var t = n[e - 1];
    t && t.focus();
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
}, me = function(n) {
  var e = n.toggleExpanded, t = n.className, o = t === void 0 ? "accordion__button" : t, a = A(n, ["toggleExpanded", "className"]), l = function(d) {
    var u = d.key;
    if ((u === g.ENTER || u === g.SPACE || u === g.SPACE_DEPRECATED) && (d.preventDefault(), e()), d.target instanceof HTMLElement)
      switch (u) {
        case g.HOME: {
          d.preventDefault(), ce(d.target);
          break;
        }
        case g.END: {
          d.preventDefault(), se(d.target);
          break;
        }
        case g.LEFT:
        case g.UP: {
          d.preventDefault(), pe(d.target);
          break;
        }
        case g.RIGHT:
        case g.DOWN: {
          d.preventDefault(), fe(d.target);
          break;
        }
      }
  };
  return a.id && b(a.id), /* @__PURE__ */ s.createElement("div", h({
    className: o
  }, a, {
    role: "button",
    tabIndex: 0,
    onClick: e,
    onKeyDown: l,
    "data-accordion-component": "AccordionItemButton"
  }));
}, xe = function(n) {
  return /* @__PURE__ */ s.createElement(O, null, function(e) {
    var t = e.toggleExpanded, o = e.buttonAttributes;
    return /* @__PURE__ */ s.createElement(me, h({
      toggleExpanded: t
    }, n, o));
  });
}, he = {
  className: "accordion__heading",
  "aria-level": 3
}, ge = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, F = /* @__PURE__ */ function(r) {
  D(e, r);
  var n = N(e);
  function e() {
    var t;
    x(this, e);
    for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return t = n.call.apply(n, [this].concat(a)), f(m(t), "ref", void 0), f(m(t), "setRef", function(i) {
      t.ref = i;
    }), t;
  }
  return j(e, [{
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
      return /* @__PURE__ */ s.createElement("div", h({
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
        throw new Error(ge);
    }
  }]), e;
}(s.PureComponent);
f(F, "defaultProps", he);
var ve = function(n) {
  return /* @__PURE__ */ s.createElement(O, null, function(e) {
    var t = e.headingAttributes;
    return n.id && b(n.id), /* @__PURE__ */ s.createElement(F, h({}, n, t));
  });
};
ve.displayName = Z.AccordionItemHeading;
var Ae = function(n) {
  var e = n.className, t = e === void 0 ? "accordion__panel" : e, o = n.id, a = A(n, ["className", "id"]), l = function(d) {
    var u = d.panelAttributes;
    return o && b(o), /* @__PURE__ */ s.createElement("div", h({
      "data-accordion-component": "AccordionItemPanel",
      className: t
    }, a, u));
  };
  return /* @__PURE__ */ s.createElement(O, null, l);
};
export {
  ye as A,
  be as D,
  de as a,
  ve as b,
  xe as c,
  Ae as d
};
