import { d as q } from "./storybook-2d1b80a2.es.js";
import { g as ge } from "./storybook-92157f1b.es.js";
var ce = { exports: {} }, N = { exports: {} }, m = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function Se() {
  if (ue)
    return m;
  ue = 1;
  var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, O = o ? Symbol.for("react.portal") : 60106, p = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, P = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, E = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, x = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, j = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, U = o ? Symbol.for("react.scope") : 60119;
  function A(t) {
    if (typeof t == "object" && t !== null) {
      var W = t.$$typeof;
      switch (W) {
        case I:
          switch (t = t.type, t) {
            case _:
            case g:
            case p:
            case a:
            case S:
            case E:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case l:
                case b:
                case M:
                case x:
                case P:
                  return t;
                default:
                  return W;
              }
          }
        case O:
          return W;
      }
    }
  }
  function w(t) {
    return A(t) === g;
  }
  return m.AsyncMode = _, m.ConcurrentMode = g, m.ContextConsumer = l, m.ContextProvider = P, m.Element = I, m.ForwardRef = b, m.Fragment = p, m.Lazy = M, m.Memo = x, m.Portal = O, m.Profiler = a, m.StrictMode = S, m.Suspense = E, m.isAsyncMode = function(t) {
    return w(t) || A(t) === _;
  }, m.isConcurrentMode = w, m.isContextConsumer = function(t) {
    return A(t) === l;
  }, m.isContextProvider = function(t) {
    return A(t) === P;
  }, m.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === I;
  }, m.isForwardRef = function(t) {
    return A(t) === b;
  }, m.isFragment = function(t) {
    return A(t) === p;
  }, m.isLazy = function(t) {
    return A(t) === M;
  }, m.isMemo = function(t) {
    return A(t) === x;
  }, m.isPortal = function(t) {
    return A(t) === O;
  }, m.isProfiler = function(t) {
    return A(t) === a;
  }, m.isStrictMode = function(t) {
    return A(t) === S;
  }, m.isSuspense = function(t) {
    return A(t) === E;
  }, m.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === p || t === g || t === a || t === S || t === E || t === C || typeof t == "object" && t !== null && (t.$$typeof === M || t.$$typeof === x || t.$$typeof === P || t.$$typeof === l || t.$$typeof === b || t.$$typeof === j || t.$$typeof === Y || t.$$typeof === U || t.$$typeof === R);
  }, m.typeOf = A, m;
}
var T = {}, le;
function Pe() {
  return le || (le = 1, q.process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, O = o ? Symbol.for("react.portal") : 60106, p = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, P = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, E = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, x = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, j = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, U = o ? Symbol.for("react.scope") : 60119;
    function A(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === p || r === g || r === a || r === S || r === E || r === C || typeof r == "object" && r !== null && (r.$$typeof === M || r.$$typeof === x || r.$$typeof === P || r.$$typeof === l || r.$$typeof === b || r.$$typeof === j || r.$$typeof === Y || r.$$typeof === U || r.$$typeof === R);
    }
    function w(r) {
      if (typeof r == "object" && r !== null) {
        var k = r.$$typeof;
        switch (k) {
          case I:
            var V = r.type;
            switch (V) {
              case _:
              case g:
              case p:
              case a:
              case S:
              case E:
                return V;
              default:
                var fe = V && V.$$typeof;
                switch (fe) {
                  case l:
                  case b:
                  case M:
                  case x:
                  case P:
                    return fe;
                  default:
                    return k;
                }
            }
          case O:
            return k;
        }
      }
    }
    var t = _, W = g, H = l, J = P, X = I, G = b, z = p, K = M, Z = x, F = O, Q = a, D = S, L = E, B = !1;
    function ee(r) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(r) || w(r) === _;
    }
    function e(r) {
      return w(r) === g;
    }
    function n(r) {
      return w(r) === l;
    }
    function u(r) {
      return w(r) === P;
    }
    function s(r) {
      return typeof r == "object" && r !== null && r.$$typeof === I;
    }
    function i(r) {
      return w(r) === b;
    }
    function y(r) {
      return w(r) === p;
    }
    function c(r) {
      return w(r) === M;
    }
    function f(r) {
      return w(r) === x;
    }
    function d(r) {
      return w(r) === O;
    }
    function h(r) {
      return w(r) === a;
    }
    function v(r) {
      return w(r) === S;
    }
    function $(r) {
      return w(r) === E;
    }
    T.AsyncMode = t, T.ConcurrentMode = W, T.ContextConsumer = H, T.ContextProvider = J, T.Element = X, T.ForwardRef = G, T.Fragment = z, T.Lazy = K, T.Memo = Z, T.Portal = F, T.Profiler = Q, T.StrictMode = D, T.Suspense = L, T.isAsyncMode = ee, T.isConcurrentMode = e, T.isContextConsumer = n, T.isContextProvider = u, T.isElement = s, T.isForwardRef = i, T.isFragment = y, T.isLazy = c, T.isMemo = f, T.isPortal = d, T.isProfiler = h, T.isStrictMode = v, T.isSuspense = $, T.isValidElementType = A, T.typeOf = w;
  }()), T;
}
var pe;
function he() {
  return pe || (pe = 1, q.process.env.NODE_ENV === "production" ? N.exports = Se() : N.exports = Pe()), N.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var re, ye;
function Oe() {
  if (ye)
    return re;
  ye = 1;
  var o = Object.getOwnPropertySymbols, I = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
  function p(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function S() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var P = {}, l = 0; l < 10; l++)
        P["_" + String.fromCharCode(l)] = l;
      var _ = Object.getOwnPropertyNames(P).map(function(b) {
        return P[b];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        g[b] = b;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return re = S() ? Object.assign : function(a, P) {
    for (var l, _ = p(a), g, b = 1; b < arguments.length; b++) {
      l = Object(arguments[b]);
      for (var E in l)
        I.call(l, E) && (_[E] = l[E]);
      if (o) {
        g = o(l);
        for (var C = 0; C < g.length; C++)
          O.call(l, g[C]) && (_[g[C]] = l[g[C]]);
      }
    }
    return _;
  }, re;
}
var te, de;
function se() {
  if (de)
    return te;
  de = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return te = o, te;
}
var ne, ve;
function Ee() {
  return ve || (ve = 1, ne = Function.call.bind(Object.prototype.hasOwnProperty)), ne;
}
var oe, be;
function _e() {
  if (be)
    return oe;
  be = 1;
  var o = function() {
  };
  if (q.process.env.NODE_ENV !== "production") {
    var I = se(), O = {}, p = Ee();
    o = function(a) {
      var P = "Warning: " + a;
      typeof console < "u" && console.error(P);
      try {
        throw new Error(P);
      } catch {
      }
    };
  }
  function S(a, P, l, _, g) {
    if (q.process.env.NODE_ENV !== "production") {
      for (var b in a)
        if (p(a, b)) {
          var E;
          try {
            if (typeof a[b] != "function") {
              var C = Error(
                (_ || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            E = a[b](P, b, _, l, null, I);
          } catch (M) {
            E = M;
          }
          if (E && !(E instanceof Error) && o(
            (_ || "React class") + ": type specification of " + l + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in O)) {
            O[E.message] = !0;
            var x = g ? g() : "";
            o(
              "Failed " + l + " type: " + E.message + (x ?? "")
            );
          }
        }
    }
  }
  return S.resetWarningCache = function() {
    q.process.env.NODE_ENV !== "production" && (O = {});
  }, oe = S, oe;
}
var ie, me;
function Re() {
  if (me)
    return ie;
  me = 1;
  var o = he(), I = Oe(), O = se(), p = Ee(), S = _e(), a = function() {
  };
  q.process.env.NODE_ENV !== "production" && (a = function(l) {
    var _ = "Warning: " + l;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function P() {
    return null;
  }
  return ie = function(l, _) {
    var g = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function E(e) {
      var n = e && (g && e[g] || e[b]);
      if (typeof n == "function")
        return n;
    }
    var C = "<<anonymous>>", x = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: U(),
      arrayOf: A,
      element: w(),
      elementType: t(),
      instanceOf: W,
      node: G(),
      objectOf: J,
      oneOf: H,
      oneOfType: X,
      shape: K,
      exact: Z
    };
    function M(e, n) {
      return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
    }
    function R(e, n) {
      this.message = e, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function j(e) {
      if (q.process.env.NODE_ENV !== "production")
        var n = {}, u = 0;
      function s(y, c, f, d, h, v, $) {
        if (d = d || C, v = v || f, $ !== O) {
          if (_) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
          } else if (q.process.env.NODE_ENV !== "production" && typeof console < "u") {
            var k = d + ":" + f;
            !n[k] && // Avoid spamming the console because they are often not actionable except for lib authors
            u < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + v + "` prop on `" + d + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[k] = !0, u++);
          }
        }
        return c[f] == null ? y ? c[f] === null ? new R("The " + h + " `" + v + "` is marked as required " + ("in `" + d + "`, but its value is `null`.")) : new R("The " + h + " `" + v + "` is marked as required in " + ("`" + d + "`, but its value is `undefined`.")) : null : e(c, f, d, h, v);
      }
      var i = s.bind(null, !1);
      return i.isRequired = s.bind(null, !0), i;
    }
    function Y(e) {
      function n(u, s, i, y, c, f) {
        var d = u[s], h = D(d);
        if (h !== e) {
          var v = L(d);
          return new R(
            "Invalid " + y + " `" + c + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return j(n);
    }
    function U() {
      return j(P);
    }
    function A(e) {
      function n(u, s, i, y, c) {
        if (typeof e != "function")
          return new R("Property `" + c + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var f = u[s];
        if (!Array.isArray(f)) {
          var d = D(f);
          return new R("Invalid " + y + " `" + c + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected an array."));
        }
        for (var h = 0; h < f.length; h++) {
          var v = e(f, h, i, y, c + "[" + h + "]", O);
          if (v instanceof Error)
            return v;
        }
        return null;
      }
      return j(n);
    }
    function w() {
      function e(n, u, s, i, y) {
        var c = n[u];
        if (!l(c)) {
          var f = D(c);
          return new R("Invalid " + i + " `" + y + "` of type " + ("`" + f + "` supplied to `" + s + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(e);
    }
    function t() {
      function e(n, u, s, i, y) {
        var c = n[u];
        if (!o.isValidElementType(c)) {
          var f = D(c);
          return new R("Invalid " + i + " `" + y + "` of type " + ("`" + f + "` supplied to `" + s + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(e);
    }
    function W(e) {
      function n(u, s, i, y, c) {
        if (!(u[s] instanceof e)) {
          var f = e.name || C, d = ee(u[s]);
          return new R("Invalid " + y + " `" + c + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected ") + ("instance of `" + f + "`."));
        }
        return null;
      }
      return j(n);
    }
    function H(e) {
      if (!Array.isArray(e))
        return q.process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), P;
      function n(u, s, i, y, c) {
        for (var f = u[s], d = 0; d < e.length; d++)
          if (M(f, e[d]))
            return null;
        var h = JSON.stringify(e, function($, r) {
          var k = L(r);
          return k === "symbol" ? String(r) : r;
        });
        return new R("Invalid " + y + " `" + c + "` of value `" + String(f) + "` " + ("supplied to `" + i + "`, expected one of " + h + "."));
      }
      return j(n);
    }
    function J(e) {
      function n(u, s, i, y, c) {
        if (typeof e != "function")
          return new R("Property `" + c + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var f = u[s], d = D(f);
        if (d !== "object")
          return new R("Invalid " + y + " `" + c + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected an object."));
        for (var h in f)
          if (p(f, h)) {
            var v = e(f, h, i, y, c + "." + h, O);
            if (v instanceof Error)
              return v;
          }
        return null;
      }
      return j(n);
    }
    function X(e) {
      if (!Array.isArray(e))
        return q.process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), P;
      for (var n = 0; n < e.length; n++) {
        var u = e[n];
        if (typeof u != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(u) + " at index " + n + "."
          ), P;
      }
      function s(i, y, c, f, d) {
        for (var h = [], v = 0; v < e.length; v++) {
          var $ = e[v], r = $(i, y, c, f, d, O);
          if (r == null)
            return null;
          r.data && p(r.data, "expectedType") && h.push(r.data.expectedType);
        }
        var k = h.length > 0 ? ", expected one of type [" + h.join(", ") + "]" : "";
        return new R("Invalid " + f + " `" + d + "` supplied to " + ("`" + c + "`" + k + "."));
      }
      return j(s);
    }
    function G() {
      function e(n, u, s, i, y) {
        return F(n[u]) ? null : new R("Invalid " + i + " `" + y + "` supplied to " + ("`" + s + "`, expected a ReactNode."));
      }
      return j(e);
    }
    function z(e, n, u, s, i) {
      return new R(
        (e || "React class") + ": " + n + " type `" + u + "." + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function K(e) {
      function n(u, s, i, y, c) {
        var f = u[s], d = D(f);
        if (d !== "object")
          return new R("Invalid " + y + " `" + c + "` of type `" + d + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var h in e) {
          var v = e[h];
          if (typeof v != "function")
            return z(i, y, c, h, L(v));
          var $ = v(f, h, i, y, c + "." + h, O);
          if ($)
            return $;
        }
        return null;
      }
      return j(n);
    }
    function Z(e) {
      function n(u, s, i, y, c) {
        var f = u[s], d = D(f);
        if (d !== "object")
          return new R("Invalid " + y + " `" + c + "` of type `" + d + "` " + ("supplied to `" + i + "`, expected `object`."));
        var h = I({}, u[s], e);
        for (var v in h) {
          var $ = e[v];
          if (p(e, v) && typeof $ != "function")
            return z(i, y, c, v, L($));
          if (!$)
            return new R(
              "Invalid " + y + " `" + c + "` key `" + v + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(u[s], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var r = $(f, v, i, y, c + "." + v, O);
          if (r)
            return r;
        }
        return null;
      }
      return j(n);
    }
    function F(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(F);
          if (e === null || l(e))
            return !0;
          var n = E(e);
          if (n) {
            var u = n.call(e), s;
            if (n !== e.entries) {
              for (; !(s = u.next()).done; )
                if (!F(s.value))
                  return !1;
            } else
              for (; !(s = u.next()).done; ) {
                var i = s.value;
                if (i && !F(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(e, n) {
      return e === "symbol" ? !0 : n ? n["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && n instanceof Symbol : !1;
    }
    function D(e) {
      var n = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : Q(n, e) ? "symbol" : n;
    }
    function L(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var n = D(e);
      if (n === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function B(e) {
      var n = L(e);
      switch (n) {
        case "array":
        case "object":
          return "an " + n;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + n;
        default:
          return n;
      }
    }
    function ee(e) {
      return !e.constructor || !e.constructor.name ? C : e.constructor.name;
    }
    return x.checkPropTypes = S, x.resetWarningCache = S.resetWarningCache, x.PropTypes = x, x;
  }, ie;
}
var ae, Te;
function Ce() {
  if (Te)
    return ae;
  Te = 1;
  var o = se();
  function I() {
  }
  function O() {
  }
  return O.resetWarningCache = I, ae = function() {
    function p(P, l, _, g, b, E) {
      if (E !== o) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    p.isRequired = p;
    function S() {
      return p;
    }
    var a = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: S,
      element: p,
      elementType: p,
      instanceOf: S,
      node: p,
      objectOf: S,
      oneOf: S,
      oneOfType: S,
      shape: S,
      exact: S,
      checkPropTypes: O,
      resetWarningCache: I
    };
    return a.PropTypes = a, a;
  }, ae;
}
if (q.process.env.NODE_ENV !== "production") {
  var xe = he(), we = !0;
  ce.exports = Re()(xe.isElement, we);
} else
  ce.exports = Ce()();
var Ae = ce.exports;
const $e = /* @__PURE__ */ ge(Ae);
export {
  $e as P
};
