import { g as K0, c as P0 } from "./storybook-92157f1b.es.js";
import { r as gS } from "./storybook-b5af0f4a.es.js";
var $1 = { exports: {} }, eu = {}, j0 = { exports: {} }, L1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var UA;
function P3() {
  return UA || (UA = 1, function(c) {
    function v(ie, Te) {
      var ce = ie.length;
      ie.push(Te);
      e:
        for (; 0 < ce; ) {
          var Ze = ce - 1 >>> 1, ft = ie[Ze];
          if (0 < F(ft, Te))
            ie[Ze] = Te, ie[ce] = ft, ce = Ze;
          else
            break e;
        }
    }
    function g(ie) {
      return ie.length === 0 ? null : ie[0];
    }
    function S(ie) {
      if (ie.length === 0)
        return null;
      var Te = ie[0], ce = ie.pop();
      if (ce !== Te) {
        ie[0] = ce;
        e:
          for (var Ze = 0, ft = ie.length, mn = ft >>> 1; Ze < mn; ) {
            var at = 2 * (Ze + 1) - 1, Tt = ie[at], _ = at + 1, L = ie[_];
            if (0 > F(Tt, ce))
              _ < ft && 0 > F(L, Tt) ? (ie[Ze] = L, ie[_] = ce, Ze = _) : (ie[Ze] = Tt, ie[at] = ce, Ze = at);
            else if (_ < ft && 0 > F(L, ce))
              ie[Ze] = L, ie[_] = ce, Ze = _;
            else
              break e;
          }
      }
      return Te;
    }
    function F(ie, Te) {
      var ce = ie.sortIndex - Te.sortIndex;
      return ce !== 0 ? ce : ie.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      c.unstable_now = function() {
        return R.now();
      };
    } else {
      var y = Date, q = y.now();
      c.unstable_now = function() {
        return y.now() - q;
      };
    }
    var K = [], G = [], Ve = 1, re = null, M = 3, W = !1, ue = !1, Z = !1, ne = typeof setTimeout == "function" ? setTimeout : null, Ct = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ge(ie) {
      for (var Te = g(G); Te !== null; ) {
        if (Te.callback === null)
          S(G);
        else if (Te.startTime <= ie)
          S(G), Te.sortIndex = Te.expirationTime, v(K, Te);
        else
          break;
        Te = g(G);
      }
    }
    function We(ie) {
      if (Z = !1, Ge(ie), !ue)
        if (g(K) !== null)
          ue = !0, Pe(de);
        else {
          var Te = g(G);
          Te !== null && zn(We, Te.startTime - ie);
        }
    }
    function de(ie, Te) {
      ue = !1, Z && (Z = !1, Ct(le), le = -1), W = !0;
      var ce = M;
      try {
        for (Ge(Te), re = g(K); re !== null && (!(re.expirationTime > Te) || ie && !pe()); ) {
          var Ze = re.callback;
          if (typeof Ze == "function") {
            re.callback = null, M = re.priorityLevel;
            var ft = Ze(re.expirationTime <= Te);
            Te = c.unstable_now(), typeof ft == "function" ? re.callback = ft : re === g(K) && S(K), Ge(Te);
          } else
            S(K);
          re = g(K);
        }
        if (re !== null)
          var mn = !0;
        else {
          var at = g(G);
          at !== null && zn(We, at.startTime - Te), mn = !1;
        }
        return mn;
      } finally {
        re = null, M = ce, W = !1;
      }
    }
    var Y = !1, Oe = null, le = -1, _t = 5, ht = -1;
    function pe() {
      return !(c.unstable_now() - ht < _t);
    }
    function Zt() {
      if (Oe !== null) {
        var ie = c.unstable_now();
        ht = ie;
        var Te = !0;
        try {
          Te = Oe(!0, ie);
        } finally {
          Te ? Xe() : (Y = !1, Oe = null);
        }
      } else
        Y = !1;
    }
    var Xe;
    if (typeof ct == "function")
      Xe = function() {
        ct(Zt);
      };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), Tn = ut.port2;
      ut.port1.onmessage = Zt, Xe = function() {
        Tn.postMessage(null);
      };
    } else
      Xe = function() {
        ne(Zt, 0);
      };
    function Pe(ie) {
      Oe = ie, Y || (Y = !0, Xe());
    }
    function zn(ie, Te) {
      le = ne(function() {
        ie(c.unstable_now());
      }, Te);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, c.unstable_continueExecution = function() {
      ue || W || (ue = !0, Pe(de));
    }, c.unstable_forceFrameRate = function(ie) {
      0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _t = 0 < ie ? Math.floor(1e3 / ie) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, c.unstable_getFirstCallbackNode = function() {
      return g(K);
    }, c.unstable_next = function(ie) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = M;
      }
      var ce = M;
      M = Te;
      try {
        return ie();
      } finally {
        M = ce;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ie, Te) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ie = 3;
      }
      var ce = M;
      M = ie;
      try {
        return Te();
      } finally {
        M = ce;
      }
    }, c.unstable_scheduleCallback = function(ie, Te, ce) {
      var Ze = c.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? Ze + ce : Ze) : ce = Ze, ie) {
        case 1:
          var ft = -1;
          break;
        case 2:
          ft = 250;
          break;
        case 5:
          ft = 1073741823;
          break;
        case 4:
          ft = 1e4;
          break;
        default:
          ft = 5e3;
      }
      return ft = ce + ft, ie = { id: Ve++, callback: Te, priorityLevel: ie, startTime: ce, expirationTime: ft, sortIndex: -1 }, ce > Ze ? (ie.sortIndex = ce, v(G, ie), g(K) === null && ie === g(G) && (Z ? (Ct(le), le = -1) : Z = !0, zn(We, ce - Ze))) : (ie.sortIndex = ft, v(K, ie), ue || W || (ue = !0, Pe(de))), ie;
    }, c.unstable_shouldYield = pe, c.unstable_wrapCallback = function(ie) {
      var Te = M;
      return function() {
        var ce = M;
        M = Te;
        try {
          return ie.apply(this, arguments);
        } finally {
          M = ce;
        }
      };
    };
  }(L1)), L1;
}
var M1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zA;
function j3() {
  return zA || (zA = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, g = !1, S = 5;
      function F(ve, Ne) {
        var et = ve.length;
        ve.push(Ne), q(ve, Ne, et);
      }
      function R(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function y(ve) {
        if (ve.length === 0)
          return null;
        var Ne = ve[0], et = ve.pop();
        return et !== Ne && (ve[0] = et, K(ve, et, 0)), Ne;
      }
      function q(ve, Ne, et) {
        for (var xt = et; xt > 0; ) {
          var Wt = xt - 1 >>> 1, Hn = ve[Wt];
          if (G(Hn, Ne) > 0)
            ve[Wt] = Ne, ve[xt] = Hn, xt = Wt;
          else
            return;
        }
      }
      function K(ve, Ne, et) {
        for (var xt = et, Wt = ve.length, Hn = Wt >>> 1; xt < Hn; ) {
          var on = (xt + 1) * 2 - 1, Or = ve[on], Vt = on + 1, yu = ve[Vt];
          if (G(Or, Ne) < 0)
            Vt < Wt && G(yu, Or) < 0 ? (ve[xt] = yu, ve[Vt] = Ne, xt = Vt) : (ve[xt] = Or, ve[on] = Ne, xt = on);
          else if (Vt < Wt && G(yu, Ne) < 0)
            ve[xt] = yu, ve[Vt] = Ne, xt = Vt;
          else
            return;
        }
      }
      function G(ve, Ne) {
        var et = ve.sortIndex - Ne.sortIndex;
        return et !== 0 ? et : ve.id - Ne.id;
      }
      var Ve = 1, re = 2, M = 3, W = 4, ue = 5;
      function Z(ve, Ne) {
      }
      var ne = typeof performance == "object" && typeof performance.now == "function";
      if (ne) {
        var Ct = performance;
        c.unstable_now = function() {
          return Ct.now();
        };
      } else {
        var ct = Date, Ge = ct.now();
        c.unstable_now = function() {
          return ct.now() - Ge;
        };
      }
      var We = 1073741823, de = -1, Y = 250, Oe = 5e3, le = 1e4, _t = We, ht = [], pe = [], Zt = 1, Xe = null, ut = M, Tn = !1, Pe = !1, zn = !1, ie = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ze(ve) {
        for (var Ne = R(pe); Ne !== null; ) {
          if (Ne.callback === null)
            y(pe);
          else if (Ne.startTime <= ve)
            y(pe), Ne.sortIndex = Ne.expirationTime, F(ht, Ne);
          else
            return;
          Ne = R(pe);
        }
      }
      function ft(ve) {
        if (zn = !1, Ze(ve), !Pe)
          if (R(ht) !== null)
            Pe = !0, fa(mn);
          else {
            var Ne = R(pe);
            Ne !== null && ar(ft, Ne.startTime - ve);
          }
      }
      function mn(ve, Ne) {
        Pe = !1, zn && (zn = !1, ru()), Tn = !0;
        var et = ut;
        try {
          var xt;
          if (!g)
            return at(ve, Ne);
        } finally {
          Xe = null, ut = et, Tn = !1;
        }
      }
      function at(ve, Ne) {
        var et = Ne;
        for (Ze(et), Xe = R(ht); Xe !== null && !v && !(Xe.expirationTime > et && (!ve || $i())); ) {
          var xt = Xe.callback;
          if (typeof xt == "function") {
            Xe.callback = null, ut = Xe.priorityLevel;
            var Wt = Xe.expirationTime <= et, Hn = xt(Wt);
            et = c.unstable_now(), typeof Hn == "function" ? Xe.callback = Hn : Xe === R(ht) && y(ht), Ze(et);
          } else
            y(ht);
          Xe = R(ht);
        }
        if (Xe !== null)
          return !0;
        var on = R(pe);
        return on !== null && ar(ft, on.startTime - et), !1;
      }
      function Tt(ve, Ne) {
        switch (ve) {
          case Ve:
          case re:
          case M:
          case W:
          case ue:
            break;
          default:
            ve = M;
        }
        var et = ut;
        ut = ve;
        try {
          return Ne();
        } finally {
          ut = et;
        }
      }
      function _(ve) {
        var Ne;
        switch (ut) {
          case Ve:
          case re:
          case M:
            Ne = M;
            break;
          default:
            Ne = ut;
            break;
        }
        var et = ut;
        ut = Ne;
        try {
          return ve();
        } finally {
          ut = et;
        }
      }
      function L(ve) {
        var Ne = ut;
        return function() {
          var et = ut;
          ut = Ne;
          try {
            return ve.apply(this, arguments);
          } finally {
            ut = et;
          }
        };
      }
      function me(ve, Ne, et) {
        var xt = c.unstable_now(), Wt;
        if (typeof et == "object" && et !== null) {
          var Hn = et.delay;
          typeof Hn == "number" && Hn > 0 ? Wt = xt + Hn : Wt = xt;
        } else
          Wt = xt;
        var on;
        switch (ve) {
          case Ve:
            on = de;
            break;
          case re:
            on = Y;
            break;
          case ue:
            on = _t;
            break;
          case W:
            on = le;
            break;
          case M:
          default:
            on = Oe;
            break;
        }
        var Or = Wt + on, Vt = {
          id: Zt++,
          callback: Ne,
          priorityLevel: ve,
          startTime: Wt,
          expirationTime: Or,
          sortIndex: -1
        };
        return Wt > xt ? (Vt.sortIndex = Wt, F(pe, Vt), R(ht) === null && Vt === R(pe) && (zn ? ru() : zn = !0, ar(ft, Wt - xt))) : (Vt.sortIndex = Or, F(ht, Vt), !Pe && !Tn && (Pe = !0, fa(mn))), Vt;
      }
      function $() {
      }
      function P() {
        !Pe && !Tn && (Pe = !0, fa(mn));
      }
      function fe() {
        return R(ht);
      }
      function Re(ve) {
        ve.callback = null;
      }
      function it() {
        return ut;
      }
      var qe = !1, yt = null, en = -1, Cr = S, Ou = -1;
      function $i() {
        var ve = c.unstable_now() - Ou;
        return !(ve < Cr);
      }
      function Ya() {
      }
      function sa(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? Cr = Math.floor(1e3 / ve) : Cr = S;
      }
      var Ka = function() {
        if (yt !== null) {
          var ve = c.unstable_now();
          Ou = ve;
          var Ne = !0, et = !0;
          try {
            et = yt(Ne, ve);
          } finally {
            et ? nu() : (qe = !1, yt = null);
          }
        } else
          qe = !1;
      }, nu;
      if (typeof ce == "function")
        nu = function() {
          ce(Ka);
        };
      else if (typeof MessageChannel < "u") {
        var ca = new MessageChannel(), mu = ca.port2;
        ca.port1.onmessage = Ka, nu = function() {
          mu.postMessage(null);
        };
      } else
        nu = function() {
          ie(Ka, 0);
        };
      function fa(ve) {
        yt = ve, qe || (qe = !0, nu());
      }
      function ar(ve, Ne) {
        en = ie(function() {
          ve(c.unstable_now());
        }, Ne);
      }
      function ru() {
        Te(en), en = -1;
      }
      var Il = Ya, da = null;
      c.unstable_IdlePriority = ue, c.unstable_ImmediatePriority = Ve, c.unstable_LowPriority = W, c.unstable_NormalPriority = M, c.unstable_Profiling = da, c.unstable_UserBlockingPriority = re, c.unstable_cancelCallback = Re, c.unstable_continueExecution = P, c.unstable_forceFrameRate = sa, c.unstable_getCurrentPriorityLevel = it, c.unstable_getFirstCallbackNode = fe, c.unstable_next = _, c.unstable_pauseExecution = $, c.unstable_requestPaint = Il, c.unstable_runWithPriority = Tt, c.unstable_scheduleCallback = me, c.unstable_shouldYield = $i, c.unstable_wrapCallback = L, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(M1)), M1;
}
var HA;
function DS() {
  return HA || (HA = 1, process.env.NODE_ENV === "production" ? j0.exports = P3() : j0.exports = j3()), j0.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $A;
function V3() {
  if ($A)
    return eu;
  $A = 1;
  var c = gS, v = DS();
  function g(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, i = 1; i < arguments.length; i++)
      r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), F = {};
  function R(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (F[n] = r, n = 0; n < r.length; n++)
      S.add(r[n]);
  }
  var q = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), K = Object.prototype.hasOwnProperty, G = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ve = {}, re = {};
  function M(n) {
    return K.call(re, n) ? !0 : K.call(Ve, n) ? !1 : G.test(n) ? re[n] = !0 : (Ve[n] = !0, !1);
  }
  function W(n, r, i, o) {
    if (i !== null && i.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : i !== null ? !i.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ue(n, r, i, o) {
    if (r === null || typeof r > "u" || W(n, r, i, o))
      return !0;
    if (o)
      return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Z(n, r, i, o, f, p, D) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = f, this.mustUseProperty = i, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = D;
  }
  var ne = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ne[n] = new Z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ne[r] = new Z(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ne[n] = new Z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ne[n] = new Z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ne[n] = new Z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ne[n] = new Z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ne[n] = new Z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ne[n] = new Z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ne[n] = new Z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ct = /[\-:]([a-z])/g;
  function ct(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ct,
      ct
    );
    ne[r] = new Z(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ct, ct);
    ne[r] = new Z(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ct, ct);
    ne[r] = new Z(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ne[n] = new Z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ne.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ne[n] = new Z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ge(n, r, i, o) {
    var f = ne.hasOwnProperty(r) ? ne[r] : null;
    (f !== null ? f.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ue(r, i, f, o) && (i = null), o || f === null ? M(r) && (i === null ? n.removeAttribute(r) : n.setAttribute(r, "" + i)) : f.mustUseProperty ? n[f.propertyName] = i === null ? f.type === 3 ? !1 : "" : i : (r = f.attributeName, o = f.attributeNamespace, i === null ? n.removeAttribute(r) : (f = f.type, i = f === 3 || f === 4 && i === !0 ? "" : "" + i, o ? n.setAttributeNS(o, r, i) : n.setAttribute(r, i))));
  }
  var We = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, de = Symbol.for("react.element"), Y = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), le = Symbol.for("react.strict_mode"), _t = Symbol.for("react.profiler"), ht = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Zt = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), Tn = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), zn = Symbol.for("react.offscreen"), ie = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = ie && n[ie] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ce = Object.assign, Ze;
  function ft(n) {
    if (Ze === void 0)
      try {
        throw Error();
      } catch (i) {
        var r = i.stack.trim().match(/\n( *(at )?)/);
        Ze = r && r[1] || "";
      }
    return `
` + Ze + n;
  }
  var mn = !1;
  function at(n, r) {
    if (!n || mn)
      return "";
    mn = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (H) {
            var o = H;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (H) {
            o = H;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (H) {
          o = H;
        }
        n();
      }
    } catch (H) {
      if (H && o && typeof H.stack == "string") {
        for (var f = H.stack.split(`
`), p = o.stack.split(`
`), D = f.length - 1, A = p.length - 1; 1 <= D && 0 <= A && f[D] !== p[A]; )
          A--;
        for (; 1 <= D && 0 <= A; D--, A--)
          if (f[D] !== p[A]) {
            if (D !== 1 || A !== 1)
              do
                if (D--, A--, 0 > A || f[D] !== p[A]) {
                  var T = `
` + f[D].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= D && 0 <= A);
            break;
          }
      }
    } finally {
      mn = !1, Error.prepareStackTrace = i;
    }
    return (n = n ? n.displayName || n.name : "") ? ft(n) : "";
  }
  function Tt(n) {
    switch (n.tag) {
      case 5:
        return ft(n.type);
      case 16:
        return ft("Lazy");
      case 13:
        return ft("Suspense");
      case 19:
        return ft("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = at(n.type, !1), n;
      case 11:
        return n = at(n.type.render, !1), n;
      case 1:
        return n = at(n.type, !0), n;
      default:
        return "";
    }
  }
  function _(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Oe:
        return "Fragment";
      case Y:
        return "Portal";
      case _t:
        return "Profiler";
      case le:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case pe:
          return (n.displayName || "Context") + ".Consumer";
        case ht:
          return (n._context.displayName || "Context") + ".Provider";
        case Zt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Tn:
          return r = n.displayName || null, r !== null ? r : _(n.type) || "Memo";
        case Pe:
          r = n._payload, n = n._init;
          try {
            return _(n(r));
          } catch {
          }
      }
    return null;
  }
  function L(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _(r);
      case 8:
        return r === le ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function me(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function $(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function P(n) {
    var r = $(n) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var f = i.get, p = i.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(D) {
        o = "" + D, p.call(this, D);
      } }), Object.defineProperty(n, r, { enumerable: i.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(D) {
        o = "" + D;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function fe(n) {
    n._valueTracker || (n._valueTracker = P(n));
  }
  function Re(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var i = r.getValue(), o = "";
    return n && (o = $(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== i ? (r.setValue(n), !0) : !1;
  }
  function it(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function qe(n, r) {
    var i = r.checked;
    return ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? n._wrapperState.initialChecked });
  }
  function yt(n, r) {
    var i = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    i = me(r.value != null ? r.value : i), n._wrapperState = { initialChecked: o, initialValue: i, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function en(n, r) {
    r = r.checked, r != null && Ge(n, "checked", r, !1);
  }
  function Cr(n, r) {
    en(n, r);
    var i = me(r.value), o = r.type;
    if (i != null)
      o === "number" ? (i === 0 && n.value === "" || n.value != i) && (n.value = "" + i) : n.value !== "" + i && (n.value = "" + i);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $i(n, r.type, i) : r.hasOwnProperty("defaultValue") && $i(n, r.type, me(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ou(n, r, i) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, i || r === n.value || (n.value = r), n.defaultValue = r;
    }
    i = n.name, i !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, i !== "" && (n.name = i);
  }
  function $i(n, r, i) {
    (r !== "number" || it(n.ownerDocument) !== n) && (i == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + i && (n.defaultValue = "" + i));
  }
  var Ya = Array.isArray;
  function sa(n, r, i, o) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < i.length; f++)
        r["$" + i[f]] = !0;
      for (i = 0; i < n.length; i++)
        f = r.hasOwnProperty("$" + n[i].value), n[i].selected !== f && (n[i].selected = f), f && o && (n[i].defaultSelected = !0);
    } else {
      for (i = "" + me(i), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === i) {
          n[f].selected = !0, o && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ka(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(g(91));
    return ce({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function nu(n, r) {
    var i = r.value;
    if (i == null) {
      if (i = r.children, r = r.defaultValue, i != null) {
        if (r != null)
          throw Error(g(92));
        if (Ya(i)) {
          if (1 < i.length)
            throw Error(g(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), i = r;
    }
    n._wrapperState = { initialValue: me(i) };
  }
  function ca(n, r) {
    var i = me(r.value), o = me(r.defaultValue);
    i != null && (i = "" + i, i !== n.value && (n.value = i), r.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i)), o != null && (n.defaultValue = "" + o);
  }
  function mu(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function fa(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ar(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? fa(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ru, Il = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, i, o, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, i, o, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (ru = ru || document.createElement("div"), ru.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ru.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var i = n.firstChild;
      if (i && i === n.lastChild && i.nodeType === 3) {
        i.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ve = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ve).forEach(function(n) {
    Ne.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ve[r] = ve[n];
    });
  });
  function et(n, r, i) {
    return r == null || typeof r == "boolean" || r === "" ? "" : i || typeof r != "number" || r === 0 || ve.hasOwnProperty(n) && ve[n] ? ("" + r).trim() : r + "px";
  }
  function xt(n, r) {
    n = n.style;
    for (var i in r)
      if (r.hasOwnProperty(i)) {
        var o = i.indexOf("--") === 0, f = et(i, r[i], o);
        i === "float" && (i = "cssFloat"), o ? n.setProperty(i, f) : n[i] = f;
      }
  }
  var Wt = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Hn(n, r) {
    if (r) {
      if (Wt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(g(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(g(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(g(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(g(62));
    }
  }
  function on(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Or = null;
  function Vt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var yu = null, tn = null, It = null;
  function Mp(n) {
    if (n = mo(n)) {
      if (typeof yu != "function")
        throw Error(g(280));
      var r = n.stateNode;
      r && (r = be(r), yu(n.stateNode, n.type, r));
    }
  }
  function as(n) {
    tn ? It ? It.push(n) : It = [n] : tn = n;
  }
  function is() {
    if (tn) {
      var n = tn, r = It;
      if (It = tn = null, Mp(n), r)
        for (n = 0; n < r.length; n++)
          Mp(r[n]);
    }
  }
  function Up(n, r) {
    return n(r);
  }
  function zp() {
  }
  var ls = !1;
  function sf(n, r, i) {
    if (ls)
      return n(r, i);
    ls = !0;
    try {
      return Up(n, r, i);
    } finally {
      ls = !1, (tn !== null || It !== null) && (zp(), is());
    }
  }
  function Gl(n, r) {
    var i = n.stateNode;
    if (i === null)
      return null;
    var o = be(i);
    if (o === null)
      return null;
    i = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (i && typeof i != "function")
      throw Error(g(231, r, typeof i));
    return i;
  }
  var os = !1;
  if (q)
    try {
      var Wa = {};
      Object.defineProperty(Wa, "passive", { get: function() {
        os = !0;
      } }), window.addEventListener("test", Wa, Wa), window.removeEventListener("test", Wa, Wa);
    } catch {
      os = !1;
    }
  function Pi(n, r, i, o, f, p, D, A, T) {
    var H = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(i, H);
    } catch (J) {
      this.onError(J);
    }
  }
  var uu = !1, Nu = null, ji = !1, Ql = null, cf = { onError: function(n) {
    uu = !0, Nu = n;
  } };
  function ff(n, r, i, o, f, p, D, A, T) {
    uu = !1, Nu = null, Pi.apply(cf, arguments);
  }
  function Vi(n, r, i, o, f, p, D, A, T) {
    if (ff.apply(this, arguments), uu) {
      if (uu) {
        var H = Nu;
        uu = !1, Nu = null;
      } else
        throw Error(g(198));
      ji || (ji = !0, Ql = H);
    }
  }
  function gu(n) {
    var r = n, i = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (i = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? i : null;
  }
  function Yl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ii(n) {
    if (gu(n) !== n)
      throw Error(g(188));
  }
  function Kn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = gu(n), r === null)
        throw Error(g(188));
      return r !== n ? null : n;
    }
    for (var i = n, o = r; ; ) {
      var f = i.return;
      if (f === null)
        break;
      var p = f.alternate;
      if (p === null) {
        if (o = f.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === i)
            return Ii(f), n;
          if (p === o)
            return Ii(f), r;
          p = p.sibling;
        }
        throw Error(g(188));
      }
      if (i.return !== o.return)
        i = f, o = p;
      else {
        for (var D = !1, A = f.child; A; ) {
          if (A === i) {
            D = !0, i = f, o = p;
            break;
          }
          if (A === o) {
            D = !0, o = f, i = p;
            break;
          }
          A = A.sibling;
        }
        if (!D) {
          for (A = p.child; A; ) {
            if (A === i) {
              D = !0, i = p, o = f;
              break;
            }
            if (A === o) {
              D = !0, o = p, i = f;
              break;
            }
            A = A.sibling;
          }
          if (!D)
            throw Error(g(189));
        }
      }
      if (i.alternate !== o)
        throw Error(g(190));
    }
    if (i.tag !== 3)
      throw Error(g(188));
    return i.stateNode.current === i ? n : r;
  }
  function Hp(n) {
    return n = Kn(n), n !== null ? $p(n) : null;
  }
  function $p(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = $p(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var df = v.unstable_scheduleCallback, Pp = v.unstable_cancelCallback, nm = v.unstable_shouldYield, rm = v.unstable_requestPaint, Gt = v.unstable_now, um = v.unstable_getCurrentPriorityLevel, Lu = v.unstable_ImmediatePriority, tt = v.unstable_UserBlockingPriority, pa = v.unstable_NormalPriority, jp = v.unstable_LowPriority, pf = v.unstable_IdlePriority, Kl = null, au = null;
  function Vp(n) {
    if (au && typeof au.onCommitFiberRoot == "function")
      try {
        au.onCommitFiberRoot(Kl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Nr = Math.clz32 ? Math.clz32 : am, Ip = Math.log, Gp = Math.LN2;
  function am(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ip(n) / Gp | 0) | 0;
  }
  var ss = 64, Gi = 4194304;
  function qa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function iu(n, r) {
    var i = n.pendingLanes;
    if (i === 0)
      return 0;
    var o = 0, f = n.suspendedLanes, p = n.pingedLanes, D = i & 268435455;
    if (D !== 0) {
      var A = D & ~f;
      A !== 0 ? o = qa(A) : (p &= D, p !== 0 && (o = qa(p)));
    } else
      D = i & ~f, D !== 0 ? o = qa(D) : p !== 0 && (o = qa(p));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & f) && (f = o & -o, p = r & -r, f >= p || f === 16 && (p & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= i & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        i = 31 - Nr(r), f = 1 << i, o |= n[i], r &= ~f;
    return o;
  }
  function vf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cs(n, r) {
    for (var i = n.suspendedLanes, o = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var D = 31 - Nr(p), A = 1 << D, T = f[D];
      T === -1 ? (!(A & i) || A & o) && (f[D] = vf(A, r)) : T <= r && (n.expiredLanes |= A), p &= ~A;
    }
  }
  function hf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function fs() {
    var n = ss;
    return ss <<= 1, !(ss & 4194240) && (ss = 64), n;
  }
  function mf(n) {
    for (var r = [], i = 0; 31 > i; i++)
      r.push(n);
    return r;
  }
  function Xa(n, r, i) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = i;
  }
  function im(n, r) {
    var i = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < i; ) {
      var f = 31 - Nr(i), p = 1 << f;
      r[f] = 0, o[f] = -1, n[f] = -1, i &= ~p;
    }
  }
  function Wl(n, r) {
    var i = n.entangledLanes |= r;
    for (n = n.entanglements; i; ) {
      var o = 31 - Nr(i), f = 1 << o;
      f & r | n[o] & r && (n[o] |= r), i &= ~f;
    }
  }
  var Et = 0;
  function yf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Qp, ds, Rt, Yp, gf, Qe = !1, ql = [], nn = null, Lr = null, Mr = null, Xl = /* @__PURE__ */ new Map(), sn = /* @__PURE__ */ new Map(), At = [], lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function lu(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        nn = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
        break;
      case "mouseover":
      case "mouseout":
        Mr = null;
        break;
      case "pointerover":
      case "pointerout":
        Xl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sn.delete(r.pointerId);
    }
  }
  function $n(n, r, i, o, f, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: i, eventSystemFlags: o, nativeEvent: p, targetContainers: [f] }, r !== null && (r = mo(r), r !== null && ds(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function va(n, r, i, o, f) {
    switch (r) {
      case "focusin":
        return nn = $n(nn, n, r, i, o, f), !0;
      case "dragenter":
        return Lr = $n(Lr, n, r, i, o, f), !0;
      case "mouseover":
        return Mr = $n(Mr, n, r, i, o, f), !0;
      case "pointerover":
        var p = f.pointerId;
        return Xl.set(p, $n(Xl.get(p) || null, n, r, i, o, f)), !0;
      case "gotpointercapture":
        return p = f.pointerId, sn.set(p, $n(sn.get(p) || null, n, r, i, o, f)), !0;
    }
    return !1;
  }
  function Kp(n) {
    var r = zr(n.target);
    if (r !== null) {
      var i = gu(r);
      if (i !== null) {
        if (r = i.tag, r === 13) {
          if (r = Yl(i), r !== null) {
            n.blockedOn = r, gf(n.priority, function() {
              Rt(i);
            });
            return;
          }
        } else if (r === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Qi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var i = hs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (i === null) {
        i = n.nativeEvent;
        var o = new i.constructor(i.type, i);
        Or = o, i.target.dispatchEvent(o), Or = null;
      } else
        return r = mo(i), r !== null && ds(r), n.blockedOn = i, !1;
      r.shift();
    }
    return !0;
  }
  function Df(n, r, i) {
    Qi(n) && i.delete(r);
  }
  function Wp() {
    Qe = !1, nn !== null && Qi(nn) && (nn = null), Lr !== null && Qi(Lr) && (Lr = null), Mr !== null && Qi(Mr) && (Mr = null), Xl.forEach(Df), sn.forEach(Df);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Qe || (Qe = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Wp)));
  }
  function Zl(n) {
    function r(f) {
      return Jl(f, n);
    }
    if (0 < ql.length) {
      Jl(ql[0], n);
      for (var i = 1; i < ql.length; i++) {
        var o = ql[i];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (nn !== null && Jl(nn, n), Lr !== null && Jl(Lr, n), Mr !== null && Jl(Mr, n), Xl.forEach(r), sn.forEach(r), i = 0; i < At.length; i++)
      o = At[i], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < At.length && (i = At[0], i.blockedOn === null); )
      Kp(i), i.blockedOn === null && At.shift();
  }
  var Yi = We.ReactCurrentBatchConfig, Ja = !0;
  function qp(n, r, i, o) {
    var f = Et, p = Yi.transition;
    Yi.transition = null;
    try {
      Et = 1, vs(n, r, i, o);
    } finally {
      Et = f, Yi.transition = p;
    }
  }
  function ps(n, r, i, o) {
    var f = Et, p = Yi.transition;
    Yi.transition = null;
    try {
      Et = 4, vs(n, r, i, o);
    } finally {
      Et = f, Yi.transition = p;
    }
  }
  function vs(n, r, i, o) {
    if (Ja) {
      var f = hs(n, r, i, o);
      if (f === null)
        Rs(n, r, o, eo, i), lu(n, o);
      else if (va(f, n, r, i, o))
        o.stopPropagation();
      else if (lu(n, o), r & 4 && -1 < lm.indexOf(n)) {
        for (; f !== null; ) {
          var p = mo(f);
          if (p !== null && Qp(p), p = hs(n, r, i, o), p === null && Rs(n, r, o, eo, i), p === f)
            break;
          f = p;
        }
        f !== null && o.stopPropagation();
      } else
        Rs(n, r, o, null, i);
    }
  }
  var eo = null;
  function hs(n, r, i, o) {
    if (eo = null, n = Vt(o), n = zr(n), n !== null)
      if (r = gu(n), r === null)
        n = null;
      else if (i = r.tag, i === 13) {
        if (n = Yl(r), n !== null)
          return n;
        n = null;
      } else if (i === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return eo = n, null;
  }
  function Cf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (um()) {
          case Lu:
            return 1;
          case tt:
            return 4;
          case pa:
          case jp:
            return 16;
          case pf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mu = null, to = null, no = null;
  function Ef() {
    if (no)
      return no;
    var n, r = to, i = r.length, o, f = "value" in Mu ? Mu.value : Mu.textContent, p = f.length;
    for (n = 0; n < i && r[n] === f[n]; n++)
      ;
    var D = i - n;
    for (o = 1; o <= D && r[i - o] === f[p - o]; o++)
      ;
    return no = f.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Ki(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ro() {
    return !0;
  }
  function Xp() {
    return !1;
  }
  function Er(n) {
    function r(i, o, f, p, D) {
      this._reactName = i, this._targetInst = f, this.type = o, this.nativeEvent = p, this.target = D, this.currentTarget = null;
      for (var A in n)
        n.hasOwnProperty(A) && (i = n[A], this[A] = i ? i(p) : p[A]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ro : Xp, this.isPropagationStopped = Xp, this;
    }
    return ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = ro);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = ro);
    }, persist: function() {
    }, isPersistent: ro }), r;
  }
  var ha = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ms = Er(ha), Wi = ce({}, ha, { view: 0, detail: 0 }), Jp = Er(Wi), ys, Af, uo, yn = ce({}, Wi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== uo && (uo && n.type === "mousemove" ? (ys = n.screenX - uo.screenX, Af = n.screenY - uo.screenY) : Af = ys = 0, uo = n), ys);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Af;
  } }), gs = Er(yn), Zp = ce({}, yn, { dataTransfer: 0 }), ev = Er(Zp), om = ce({}, Wi, { relatedTarget: 0 }), ma = Er(om), Sf = ce({}, ha, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tv = Er(Sf), sm = ce({}, ha, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cm = Er(sm), fm = ce({}, ha, { data: 0 }), Ff = Er(fm), Tf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, nv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function uv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = rv[n]) ? !!r[n] : !1;
  }
  function xf() {
    return uv;
  }
  var Uu = ce({}, Wi, { key: function(n) {
    if (n.key) {
      var r = Tf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ki(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xf, charCode: function(n) {
    return n.type === "keypress" ? Ki(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ki(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), dm = Er(Uu), Rf = ce({}, yn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ds = Er(Rf), wf = ce({}, Wi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xf }), pm = Er(wf), Cs = ce({}, ha, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), av = Er(Cs), ir = ce({}, yn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zu = Er(ir), rn = [9, 13, 27, 32], ou = q && "CompositionEvent" in window, Za = null;
  q && "documentMode" in document && (Za = document.documentMode);
  var Es = q && "TextEvent" in window && !Za, iv = q && (!ou || Za && 8 < Za && 11 >= Za), qi = String.fromCharCode(32), lv = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return rn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function As(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Xi = !1;
  function vm(n, r) {
    switch (n) {
      case "compositionend":
        return As(r);
      case "keypress":
        return r.which !== 32 ? null : (lv = !0, qi);
      case "textInput":
        return n = r.data, n === qi && lv ? null : n;
      default:
        return null;
    }
  }
  function hm(n, r) {
    if (Xi)
      return n === "compositionend" || !ou && ov(n, r) ? (n = Ef(), no = to = Mu = null, Xi = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return iv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var sv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!sv[n.type] : r === "textarea";
  }
  function fv(n, r, i, o) {
    as(o), r = po(r, "onChange"), 0 < r.length && (i = new ms("onChange", "change", null, i, o), n.push({ event: i, listeners: r }));
  }
  var ao = null, Ji = null;
  function Zi(n) {
    xs(n, 0);
  }
  function el(n) {
    var r = nl(n);
    if (Re(r))
      return n;
  }
  function dv(n, r) {
    if (n === "change")
      return r;
  }
  var Bf = !1;
  if (q) {
    var _f;
    if (q) {
      var bf = "oninput" in document;
      if (!bf) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), bf = typeof pv.oninput == "function";
      }
      _f = bf;
    } else
      _f = !1;
    Bf = _f && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    ao && (ao.detachEvent("onpropertychange", hv), Ji = ao = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && el(Ji)) {
      var r = [];
      fv(r, Ji, n, Vt(n)), sf(Zi, r);
    }
  }
  function mm(n, r, i) {
    n === "focusin" ? (vv(), ao = r, Ji = i, ao.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function ym(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return el(Ji);
  }
  function gm(n, r) {
    if (n === "click")
      return el(r);
  }
  function mv(n, r) {
    if (n === "input" || n === "change")
      return el(r);
  }
  function Dm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ur = typeof Object.is == "function" ? Object.is : Dm;
  function io(n, r) {
    if (Ur(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var i = Object.keys(n), o = Object.keys(r);
    if (i.length !== o.length)
      return !1;
    for (o = 0; o < i.length; o++) {
      var f = i[o];
      if (!K.call(r, f) || !Ur(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var i = yv(n);
    n = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = n + i.textContent.length, n <= r && o >= r)
          return { node: i, offset: r - n };
        n = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = yv(i);
    }
  }
  function Dv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Dv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ss() {
    for (var n = window, r = it(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i)
        n = r.contentWindow;
      else
        break;
      r = it(n.document);
    }
    return r;
  }
  function Hu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Fs(n) {
    var r = Ss(), i = n.focusedElem, o = n.selectionRange;
    if (r !== i && i && i.ownerDocument && Dv(i.ownerDocument.documentElement, i)) {
      if (o !== null && Hu(i)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in i)
          i.selectionStart = r, i.selectionEnd = Math.min(n, i.value.length);
        else if (n = (r = i.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = i.textContent.length, p = Math.min(o.start, f);
          o = o.end === void 0 ? p : Math.min(o.end, f), !n.extend && p > o && (f = o, o = p, p = f), f = gv(i, p);
          var D = gv(
            i,
            o
          );
          f && D && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== D.node || n.focusOffset !== D.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), p > o ? (n.addRange(r), n.extend(D.node, D.offset)) : (r.setEnd(D.node, D.offset), n.addRange(r)));
        }
      }
      for (r = [], n = i; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < r.length; i++)
        n = r[i], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Cv = q && "documentMode" in document && 11 >= document.documentMode, su = null, kf = null, lo = null, Of = !1;
  function Ev(n, r, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Of || su == null || su !== it(o) || (o = su, "selectionStart" in o && Hu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), lo && io(lo, o) || (lo = o, o = po(kf, "onSelect"), 0 < o.length && (r = new ms("onSelect", "select", null, r, i), n.push({ event: r, listeners: o }), r.target = su)));
  }
  function Ts(n, r) {
    var i = {};
    return i[n.toLowerCase()] = r.toLowerCase(), i["Webkit" + n] = "webkit" + r, i["Moz" + n] = "moz" + r, i;
  }
  var ei = { animationend: Ts("Animation", "AnimationEnd"), animationiteration: Ts("Animation", "AnimationIteration"), animationstart: Ts("Animation", "AnimationStart"), transitionend: Ts("Transition", "TransitionEnd") }, Nf = {}, Lf = {};
  q && (Lf = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
  function gn(n) {
    if (Nf[n])
      return Nf[n];
    if (!ei[n])
      return n;
    var r = ei[n], i;
    for (i in r)
      if (r.hasOwnProperty(i) && i in Lf)
        return Nf[n] = r[i];
    return n;
  }
  var Mf = gn("animationend"), Av = gn("animationiteration"), Sv = gn("animationstart"), Fv = gn("transitionend"), Tv = /* @__PURE__ */ new Map(), xv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function $u(n, r) {
    Tv.set(n, r), R(r, [n]);
  }
  for (var oo = 0; oo < xv.length; oo++) {
    var ti = xv[oo], Cm = ti.toLowerCase(), so = ti[0].toUpperCase() + ti.slice(1);
    $u(Cm, "on" + so);
  }
  $u(Mf, "onAnimationEnd"), $u(Av, "onAnimationIteration"), $u(Sv, "onAnimationStart"), $u("dblclick", "onDoubleClick"), $u("focusin", "onFocus"), $u("focusout", "onBlur"), $u(Fv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Em = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
  function Rv(n, r, i) {
    var o = n.type || "unknown-event";
    n.currentTarget = i, Vi(o, r, void 0, n), n.currentTarget = null;
  }
  function xs(n, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < n.length; i++) {
      var o = n[i], f = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var D = o.length - 1; 0 <= D; D--) {
            var A = o[D], T = A.instance, H = A.currentTarget;
            if (A = A.listener, T !== p && f.isPropagationStopped())
              break e;
            Rv(f, A, H), p = T;
          }
        else
          for (D = 0; D < o.length; D++) {
            if (A = o[D], T = A.instance, H = A.currentTarget, A = A.listener, T !== p && f.isPropagationStopped())
              break e;
            Rv(f, A, H), p = T;
          }
      }
    }
    if (ji)
      throw n = Ql, ji = !1, Ql = null, n;
  }
  function wt(n, r) {
    var i = r[Vf];
    i === void 0 && (i = r[Vf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    i.has(o) || (wv(r, n, 2, !1), i.add(o));
  }
  function ya(n, r, i) {
    var o = 0;
    r && (o |= 4), wv(i, n, o, r);
  }
  var Pu = "_reactListening" + Math.random().toString(36).slice(2);
  function tl(n) {
    if (!n[Pu]) {
      n[Pu] = !0, S.forEach(function(i) {
        i !== "selectionchange" && (Em.has(i) || ya(i, !1, n), ya(i, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Pu] || (r[Pu] = !0, ya("selectionchange", !1, r));
    }
  }
  function wv(n, r, i, o) {
    switch (Cf(r)) {
      case 1:
        var f = qp;
        break;
      case 4:
        f = ps;
        break;
      default:
        f = vs;
    }
    i = f.bind(null, r, i, n), f = void 0, !os || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), o ? f !== void 0 ? n.addEventListener(r, i, { capture: !0, passive: f }) : n.addEventListener(r, i, !0) : f !== void 0 ? n.addEventListener(r, i, { passive: f }) : n.addEventListener(r, i, !1);
  }
  function Rs(n, r, i, o, f) {
    var p = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var D = o.tag;
          if (D === 3 || D === 4) {
            var A = o.stateNode.containerInfo;
            if (A === f || A.nodeType === 8 && A.parentNode === f)
              break;
            if (D === 4)
              for (D = o.return; D !== null; ) {
                var T = D.tag;
                if ((T === 3 || T === 4) && (T = D.stateNode.containerInfo, T === f || T.nodeType === 8 && T.parentNode === f))
                  return;
                D = D.return;
              }
            for (; A !== null; ) {
              if (D = zr(A), D === null)
                return;
              if (T = D.tag, T === 5 || T === 6) {
                o = p = D;
                continue e;
              }
              A = A.parentNode;
            }
          }
          o = o.return;
        }
    sf(function() {
      var H = p, J = Vt(i), ee = [];
      e: {
        var X = Tv.get(n);
        if (X !== void 0) {
          var ye = ms, Ae = n;
          switch (n) {
            case "keypress":
              if (Ki(i) === 0)
                break e;
            case "keydown":
            case "keyup":
              ye = dm;
              break;
            case "focusin":
              Ae = "focus", ye = ma;
              break;
            case "focusout":
              Ae = "blur", ye = ma;
              break;
            case "beforeblur":
            case "afterblur":
              ye = ma;
              break;
            case "click":
              if (i.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ye = gs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ye = ev;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ye = pm;
              break;
            case Mf:
            case Av:
            case Sv:
              ye = tv;
              break;
            case Fv:
              ye = av;
              break;
            case "scroll":
              ye = Jp;
              break;
            case "wheel":
              ye = zu;
              break;
            case "copy":
            case "cut":
            case "paste":
              ye = cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ye = Ds;
          }
          var xe = (r & 4) !== 0, Xt = !xe && n === "scroll", b = xe ? X !== null ? X + "Capture" : null : X;
          xe = [];
          for (var w = H, N; w !== null; ) {
            N = w;
            var ae = N.stateNode;
            if (N.tag === 5 && ae !== null && (N = ae, b !== null && (ae = Gl(w, b), ae != null && xe.push(fo(w, ae, N)))), Xt)
              break;
            w = w.return;
          }
          0 < xe.length && (X = new ye(X, Ae, null, i, J), ee.push({ event: X, listeners: xe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (X = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", X && i !== Or && (Ae = i.relatedTarget || i.fromElement) && (zr(Ae) || Ae[ju]))
            break e;
          if ((ye || X) && (X = J.window === J ? J : (X = J.ownerDocument) ? X.defaultView || X.parentWindow : window, ye ? (Ae = i.relatedTarget || i.toElement, ye = H, Ae = Ae ? zr(Ae) : null, Ae !== null && (Xt = gu(Ae), Ae !== Xt || Ae.tag !== 5 && Ae.tag !== 6) && (Ae = null)) : (ye = null, Ae = H), ye !== Ae)) {
            if (xe = gs, ae = "onMouseLeave", b = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (xe = Ds, ae = "onPointerLeave", b = "onPointerEnter", w = "pointer"), Xt = ye == null ? X : nl(ye), N = Ae == null ? X : nl(Ae), X = new xe(ae, w + "leave", ye, i, J), X.target = Xt, X.relatedTarget = N, ae = null, zr(J) === H && (xe = new xe(b, w + "enter", Ae, i, J), xe.target = N, xe.relatedTarget = Xt, ae = xe), Xt = ae, ye && Ae)
              t: {
                for (xe = ye, b = Ae, w = 0, N = xe; N; N = ni(N))
                  w++;
                for (N = 0, ae = b; ae; ae = ni(ae))
                  N++;
                for (; 0 < w - N; )
                  xe = ni(xe), w--;
                for (; 0 < N - w; )
                  b = ni(b), N--;
                for (; w--; ) {
                  if (xe === b || b !== null && xe === b.alternate)
                    break t;
                  xe = ni(xe), b = ni(b);
                }
                xe = null;
              }
            else
              xe = null;
            ye !== null && Uf(ee, X, ye, xe, !1), Ae !== null && Xt !== null && Uf(ee, Xt, Ae, xe, !0);
          }
        }
        e: {
          if (X = H ? nl(H) : window, ye = X.nodeName && X.nodeName.toLowerCase(), ye === "select" || ye === "input" && X.type === "file")
            var we = dv;
          else if (cv(X))
            if (Bf)
              we = mv;
            else {
              we = ym;
              var Se = mm;
            }
          else
            (ye = X.nodeName) && ye.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (we = gm);
          if (we && (we = we(n, H))) {
            fv(ee, we, i, J);
            break e;
          }
          Se && Se(n, X, H), n === "focusout" && (Se = X._wrapperState) && Se.controlled && X.type === "number" && $i(X, "number", X.value);
        }
        switch (Se = H ? nl(H) : window, n) {
          case "focusin":
            (cv(Se) || Se.contentEditable === "true") && (su = Se, kf = H, lo = null);
            break;
          case "focusout":
            lo = kf = su = null;
            break;
          case "mousedown":
            Of = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Of = !1, Ev(ee, i, J);
            break;
          case "selectionchange":
            if (Cv)
              break;
          case "keydown":
          case "keyup":
            Ev(ee, i, J);
        }
        var _e;
        if (ou)
          e: {
            switch (n) {
              case "compositionstart":
                var $e = "onCompositionStart";
                break e;
              case "compositionend":
                $e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $e = "onCompositionUpdate";
                break e;
            }
            $e = void 0;
          }
        else
          Xi ? ov(n, i) && ($e = "onCompositionEnd") : n === "keydown" && i.keyCode === 229 && ($e = "onCompositionStart");
        $e && (iv && i.locale !== "ko" && (Xi || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && Xi && (_e = Ef()) : (Mu = J, to = "value" in Mu ? Mu.value : Mu.textContent, Xi = !0)), Se = po(H, $e), 0 < Se.length && ($e = new Ff($e, n, null, i, J), ee.push({ event: $e, listeners: Se }), _e ? $e.data = _e : (_e = As(i), _e !== null && ($e.data = _e)))), (_e = Es ? vm(n, i) : hm(n, i)) && (H = po(H, "onBeforeInput"), 0 < H.length && (J = new Ff("onBeforeInput", "beforeinput", null, i, J), ee.push({ event: J, listeners: H }), J.data = _e));
      }
      xs(ee, r);
    });
  }
  function fo(n, r, i) {
    return { instance: n, listener: r, currentTarget: i };
  }
  function po(n, r) {
    for (var i = r + "Capture", o = []; n !== null; ) {
      var f = n, p = f.stateNode;
      f.tag === 5 && p !== null && (f = p, p = Gl(n, i), p != null && o.unshift(fo(n, p, f)), p = Gl(n, r), p != null && o.push(fo(n, p, f))), n = n.return;
    }
    return o;
  }
  function ni(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Uf(n, r, i, o, f) {
    for (var p = r._reactName, D = []; i !== null && i !== o; ) {
      var A = i, T = A.alternate, H = A.stateNode;
      if (T !== null && T === o)
        break;
      A.tag === 5 && H !== null && (A = H, f ? (T = Gl(i, p), T != null && D.unshift(fo(i, T, A))) : f || (T = Gl(i, p), T != null && D.push(fo(i, T, A)))), i = i.return;
    }
    D.length !== 0 && n.push({ event: r, listeners: D });
  }
  var zf = /\r\n?/g, Am = /\u0000|\uFFFD/g;
  function Hf(n) {
    return (typeof n == "string" ? n : "" + n).replace(zf, `
`).replace(Am, "");
  }
  function ws(n, r, i) {
    if (r = Hf(r), Hf(n) !== r && i)
      throw Error(g(425));
  }
  function Bs() {
  }
  var $f = null, ri = null;
  function vo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ui = typeof setTimeout == "function" ? setTimeout : void 0, Bv = typeof clearTimeout == "function" ? clearTimeout : void 0, Pf = typeof Promise == "function" ? Promise : void 0, jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pf < "u" ? function(n) {
    return Pf.resolve(null).then(n).catch(Sm);
  } : ui;
  function Sm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ga(n, r) {
    var i = r, o = 0;
    do {
      var f = i.nextSibling;
      if (n.removeChild(i), f && f.nodeType === 8)
        if (i = f.data, i === "/$") {
          if (o === 0) {
            n.removeChild(f), Zl(r);
            return;
          }
          o--;
        } else
          i !== "$" && i !== "$?" && i !== "$!" || o++;
      i = f;
    } while (i);
    Zl(r);
  }
  function cu(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ho(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var i = n.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          i === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Da = Math.random().toString(36).slice(2), Du = "__reactFiber$" + Da, ai = "__reactProps$" + Da, ju = "__reactContainer$" + Da, Vf = "__reactEvents$" + Da, Fm = "__reactListeners$" + Da, If = "__reactHandles$" + Da;
  function zr(n) {
    var r = n[Du];
    if (r)
      return r;
    for (var i = n.parentNode; i; ) {
      if (r = i[ju] || i[Du]) {
        if (i = r.alternate, r.child !== null || i !== null && i.child !== null)
          for (n = ho(n); n !== null; ) {
            if (i = n[Du])
              return i;
            n = ho(n);
          }
        return r;
      }
      n = i, i = n.parentNode;
    }
    return null;
  }
  function mo(n) {
    return n = n[Du] || n[ju], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function nl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(g(33));
  }
  function be(n) {
    return n[ai] || null;
  }
  var Ca = [], bt = -1;
  function Ye(n) {
    return { current: n };
  }
  function mt(n) {
    0 > bt || (n.current = Ca[bt], Ca[bt] = null, bt--);
  }
  function gt(n, r) {
    bt++, Ca[bt] = n.current, n.current = r;
  }
  var Cu = {}, He = Ye(Cu), Qt = Ye(!1), lr = Cu;
  function Hr(n, r) {
    var i = n.type.contextTypes;
    if (!i)
      return Cu;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var f = {}, p;
    for (p in i)
      f[p] = r[p];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Mt(n) {
    return n = n.childContextTypes, n != null;
  }
  function $r() {
    mt(Qt), mt(He);
  }
  function Ea(n, r, i) {
    if (He.current !== Cu)
      throw Error(g(168));
    gt(He, r), gt(Qt, i);
  }
  function yo(n, r, i) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return i;
    o = o.getChildContext();
    for (var f in o)
      if (!(f in r))
        throw Error(g(108, L(n) || "Unknown", f));
    return ce({}, i, o);
  }
  function _s(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cu, lr = He.current, gt(He, n), gt(Qt, Qt.current), !0;
  }
  function _v(n, r, i) {
    var o = n.stateNode;
    if (!o)
      throw Error(g(169));
    i ? (n = yo(n, r, lr), o.__reactInternalMemoizedMergedChildContext = n, mt(Qt), mt(He), gt(He, n)) : mt(Qt), gt(Qt, i);
  }
  var Ar = null, Dn = !1, go = !1;
  function Gf(n) {
    Ar === null ? Ar = [n] : Ar.push(n);
  }
  function Qf(n) {
    Dn = !0, Gf(n);
  }
  function or() {
    if (!go && Ar !== null) {
      go = !0;
      var n = 0, r = Et;
      try {
        var i = Ar;
        for (Et = 1; n < i.length; n++) {
          var o = i[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ar = null, Dn = !1;
      } catch (f) {
        throw Ar !== null && (Ar = Ar.slice(n + 1)), df(Lu, or), f;
      } finally {
        Et = r, go = !1;
      }
    }
    return null;
  }
  var Aa = [], sr = 0, ii = null, rl = 0, cr = [], Pn = 0, Pr = null, xn = 1, Vu = "";
  function Sr(n, r) {
    Aa[sr++] = rl, Aa[sr++] = ii, ii = n, rl = r;
  }
  function Yf(n, r, i) {
    cr[Pn++] = xn, cr[Pn++] = Vu, cr[Pn++] = Pr, Pr = n;
    var o = xn;
    n = Vu;
    var f = 32 - Nr(o) - 1;
    o &= ~(1 << f), i += 1;
    var p = 32 - Nr(r) + f;
    if (30 < p) {
      var D = f - f % 5;
      p = (o & (1 << D) - 1).toString(32), o >>= D, f -= D, xn = 1 << 32 - Nr(r) + f | i << f | o, Vu = p + n;
    } else
      xn = 1 << p | i << f | o, Vu = n;
  }
  function bs(n) {
    n.return !== null && (Sr(n, 1), Yf(n, 1, 0));
  }
  function Kf(n) {
    for (; n === ii; )
      ii = Aa[--sr], Aa[sr] = null, rl = Aa[--sr], Aa[sr] = null;
    for (; n === Pr; )
      Pr = cr[--Pn], cr[Pn] = null, Vu = cr[--Pn], cr[Pn] = null, xn = cr[--Pn], cr[Pn] = null;
  }
  var Fr = null, fr = null, kt = !1, jr = null;
  function Wf(n, r) {
    var i = Kr(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = r, i.return = n, r = n.deletions, r === null ? (n.deletions = [i], n.flags |= 16) : r.push(i);
  }
  function bv(n, r) {
    switch (n.tag) {
      case 5:
        var i = n.type;
        return r = r.nodeType !== 1 || i.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Fr = n, fr = cu(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Fr = n, fr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (i = Pr !== null ? { id: xn, overflow: Vu } : null, n.memoizedState = { dehydrated: r, treeContext: i, retryLane: 1073741824 }, i = Kr(18, null, null, 0), i.stateNode = r, i.return = n, n.child = i, Fr = n, fr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ks(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Os(n) {
    if (kt) {
      var r = fr;
      if (r) {
        var i = r;
        if (!bv(n, r)) {
          if (ks(n))
            throw Error(g(418));
          r = cu(i.nextSibling);
          var o = Fr;
          r && bv(n, r) ? Wf(o, i) : (n.flags = n.flags & -4097 | 2, kt = !1, Fr = n);
        }
      } else {
        if (ks(n))
          throw Error(g(418));
        n.flags = n.flags & -4097 | 2, kt = !1, Fr = n;
      }
    }
  }
  function kv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Fr = n;
  }
  function Ns(n) {
    if (n !== Fr)
      return !1;
    if (!kt)
      return kv(n), kt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !vo(n.type, n.memoizedProps)), r && (r = fr)) {
      if (ks(n))
        throw Ov(), Error(g(418));
      for (; r; )
        Wf(n, r), r = cu(r.nextSibling);
    }
    if (kv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(g(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var i = n.data;
            if (i === "/$") {
              if (r === 0) {
                fr = cu(n.nextSibling);
                break e;
              }
              r--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        fr = null;
      }
    } else
      fr = Fr ? cu(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ov() {
    for (var n = fr; n; )
      n = cu(n.nextSibling);
  }
  function zt() {
    fr = Fr = null, kt = !1;
  }
  function qf(n) {
    jr === null ? jr = [n] : jr.push(n);
  }
  var Ls = We.ReactCurrentBatchConfig;
  function Tr(n, r) {
    if (n && n.defaultProps) {
      r = ce({}, r), n = n.defaultProps;
      for (var i in n)
        r[i] === void 0 && (r[i] = n[i]);
      return r;
    }
    return r;
  }
  var Eu = Ye(null), Ms = null, Sa = null, Xf = null;
  function Jf() {
    Xf = Sa = Ms = null;
  }
  function Fa(n) {
    var r = Eu.current;
    mt(Eu), n._currentValue = r;
  }
  function Cn(n, r, i) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === i)
        break;
      n = n.return;
    }
  }
  function oe(n, r) {
    Ms = n, Xf = Sa = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (un = !0), n.firstContext = null);
  }
  function qt(n) {
    var r = n._currentValue;
    if (Xf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Sa === null) {
        if (Ms === null)
          throw Error(g(308));
        Sa = n, Ms.dependencies = { lanes: 0, firstContext: n };
      } else
        Sa = Sa.next = n;
    return r;
  }
  var Rn = null;
  function Zf(n) {
    Rn === null ? Rn = [n] : Rn.push(n);
  }
  function Nv(n, r, i, o) {
    var f = r.interleaved;
    return f === null ? (i.next = i, Zf(r)) : (i.next = f.next, f.next = i), r.interleaved = i, Iu(n, o);
  }
  function Iu(n, r) {
    n.lanes |= r;
    var i = n.alternate;
    for (i !== null && (i.lanes |= r), i = n, n = n.return; n !== null; )
      n.childLanes |= r, i = n.alternate, i !== null && (i.childLanes |= r), i = n, n = n.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var Ta = !1;
  function ed(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function cn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gu(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function xa(n, r, i) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, nt & 2) {
      var f = o.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), o.pending = r, Iu(n, i);
    }
    return f = o.interleaved, f === null ? (r.next = r, Zf(o)) : (r.next = f.next, f.next = r), o.interleaved = r, Iu(n, i);
  }
  function Us(n, r, i) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (i & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, i |= o, r.lanes = i, Wl(n, i);
    }
  }
  function td(n, r) {
    var i = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var f = null, p = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var D = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          p === null ? f = p = D : p = p.next = D, i = i.next;
        } while (i !== null);
        p === null ? f = p = r : p = p.next = r;
      } else
        f = p = r;
      i = { baseState: o.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: o.shared, effects: o.effects }, n.updateQueue = i;
      return;
    }
    n = i.lastBaseUpdate, n === null ? i.firstBaseUpdate = r : n.next = r, i.lastBaseUpdate = r;
  }
  function Ra(n, r, i, o) {
    var f = n.updateQueue;
    Ta = !1;
    var p = f.firstBaseUpdate, D = f.lastBaseUpdate, A = f.shared.pending;
    if (A !== null) {
      f.shared.pending = null;
      var T = A, H = T.next;
      T.next = null, D === null ? p = H : D.next = H, D = T;
      var J = n.alternate;
      J !== null && (J = J.updateQueue, A = J.lastBaseUpdate, A !== D && (A === null ? J.firstBaseUpdate = H : A.next = H, J.lastBaseUpdate = T));
    }
    if (p !== null) {
      var ee = f.baseState;
      D = 0, J = H = T = null, A = p;
      do {
        var X = A.lane, ye = A.eventTime;
        if ((o & X) === X) {
          J !== null && (J = J.next = {
            eventTime: ye,
            lane: 0,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null
          });
          e: {
            var Ae = n, xe = A;
            switch (X = r, ye = i, xe.tag) {
              case 1:
                if (Ae = xe.payload, typeof Ae == "function") {
                  ee = Ae.call(ye, ee, X);
                  break e;
                }
                ee = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = xe.payload, X = typeof Ae == "function" ? Ae.call(ye, ee, X) : Ae, X == null)
                  break e;
                ee = ce({}, ee, X);
                break e;
              case 2:
                Ta = !0;
            }
          }
          A.callback !== null && A.lane !== 0 && (n.flags |= 64, X = f.effects, X === null ? f.effects = [A] : X.push(A));
        } else
          ye = { eventTime: ye, lane: X, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, J === null ? (H = J = ye, T = ee) : J = J.next = ye, D |= X;
        if (A = A.next, A === null) {
          if (A = f.shared.pending, A === null)
            break;
          X = A, A = X.next, X.next = null, f.lastBaseUpdate = X, f.shared.pending = null;
        }
      } while (1);
      if (J === null && (T = ee), f.baseState = T, f.firstBaseUpdate = H, f.lastBaseUpdate = J, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          D |= f.lane, f = f.next;
        while (f !== r);
      } else
        p === null && (f.shared.lanes = 0);
      Wu |= D, n.lanes = D, n.memoizedState = ee;
    }
  }
  function li(n, r, i) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], f = o.callback;
        if (f !== null) {
          if (o.callback = null, o = i, typeof f != "function")
            throw Error(g(191, f));
          f.call(o);
        }
      }
  }
  var Lv = new c.Component().refs;
  function nd(n, r, i, o) {
    r = n.memoizedState, i = i(o, r), i = i == null ? r : ce({}, r, i), n.memoizedState = i, n.lanes === 0 && (n.updateQueue.baseState = i);
  }
  var zs = { isMounted: function(n) {
    return (n = n._reactInternals) ? gu(n) === n : !1;
  }, enqueueSetState: function(n, r, i) {
    n = n._reactInternals;
    var o = Gn(), f = an(n), p = Gu(o, f);
    p.payload = r, i != null && (p.callback = i), r = xa(n, p, f), r !== null && (Qn(r, n, f, o), Us(r, n, f));
  }, enqueueReplaceState: function(n, r, i) {
    n = n._reactInternals;
    var o = Gn(), f = an(n), p = Gu(o, f);
    p.tag = 1, p.payload = r, i != null && (p.callback = i), r = xa(n, p, f), r !== null && (Qn(r, n, f, o), Us(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var i = Gn(), o = an(n), f = Gu(i, o);
    f.tag = 2, r != null && (f.callback = r), r = xa(n, f, o), r !== null && (Qn(r, n, o, i), Us(r, n, o));
  } };
  function Mv(n, r, i, o, f, p, D) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, p, D) : r.prototype && r.prototype.isPureReactComponent ? !io(i, o) || !io(f, p) : !0;
  }
  function Uv(n, r, i) {
    var o = !1, f = Cu, p = r.contextType;
    return typeof p == "object" && p !== null ? p = qt(p) : (f = Mt(r) ? lr : He.current, o = r.contextTypes, p = (o = o != null) ? Hr(n, f) : Cu), r = new r(i, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function zv(n, r, i, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(i, o), r.state !== n && zs.enqueueReplaceState(r, r.state, null);
  }
  function Hs(n, r, i, o) {
    var f = n.stateNode;
    f.props = i, f.state = n.memoizedState, f.refs = Lv, ed(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? f.context = qt(p) : (p = Mt(r) ? lr : He.current, f.context = Hr(n, p)), f.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (nd(n, r, p, i), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && zs.enqueueReplaceState(f, f.state, null), Ra(n, i, f, o), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ul(n, r, i) {
    if (n = i.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1)
            throw Error(g(309));
          var o = i.stateNode;
        }
        if (!o)
          throw Error(g(147, n));
        var f = o, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(D) {
          var A = f.refs;
          A === Lv && (A = f.refs = {}), D === null ? delete A[p] : A[p] = D;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(g(284));
      if (!i._owner)
        throw Error(g(290, n));
    }
    return n;
  }
  function $s(n, r) {
    throw n = Object.prototype.toString.call(r), Error(g(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Hv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function $v(n) {
    function r(b, w) {
      if (n) {
        var N = b.deletions;
        N === null ? (b.deletions = [w], b.flags |= 16) : N.push(w);
      }
    }
    function i(b, w) {
      if (!n)
        return null;
      for (; w !== null; )
        r(b, w), w = w.sibling;
      return null;
    }
    function o(b, w) {
      for (b = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? b.set(w.key, w) : b.set(w.index, w), w = w.sibling;
      return b;
    }
    function f(b, w) {
      return b = La(b, w), b.index = 0, b.sibling = null, b;
    }
    function p(b, w, N) {
      return b.index = N, n ? (N = b.alternate, N !== null ? (N = N.index, N < w ? (b.flags |= 2, w) : N) : (b.flags |= 2, w)) : (b.flags |= 1048576, w);
    }
    function D(b) {
      return n && b.alternate === null && (b.flags |= 2), b;
    }
    function A(b, w, N, ae) {
      return w === null || w.tag !== 6 ? (w = Uo(N, b.mode, ae), w.return = b, w) : (w = f(w, N), w.return = b, w);
    }
    function T(b, w, N, ae) {
      var we = N.type;
      return we === Oe ? J(b, w, N.props.children, ae, N.key) : w !== null && (w.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Pe && Hv(we) === w.type) ? (ae = f(w, N.props), ae.ref = ul(b, w, N), ae.return = b, ae) : (ae = gc(N.type, N.key, N.props, null, b.mode, ae), ae.ref = ul(b, w, N), ae.return = b, ae);
    }
    function H(b, w, N, ae) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = xi(N, b.mode, ae), w.return = b, w) : (w = f(w, N.children || []), w.return = b, w);
    }
    function J(b, w, N, ae, we) {
      return w === null || w.tag !== 7 ? (w = Ti(N, b.mode, ae, we), w.return = b, w) : (w = f(w, N), w.return = b, w);
    }
    function ee(b, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return w = Uo("" + w, b.mode, N), w.return = b, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case de:
            return N = gc(w.type, w.key, w.props, null, b.mode, N), N.ref = ul(b, null, w), N.return = b, N;
          case Y:
            return w = xi(w, b.mode, N), w.return = b, w;
          case Pe:
            var ae = w._init;
            return ee(b, ae(w._payload), N);
        }
        if (Ya(w) || Te(w))
          return w = Ti(w, b.mode, N, null), w.return = b, w;
        $s(b, w);
      }
      return null;
    }
    function X(b, w, N, ae) {
      var we = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return we !== null ? null : A(b, w, "" + N, ae);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case de:
            return N.key === we ? T(b, w, N, ae) : null;
          case Y:
            return N.key === we ? H(b, w, N, ae) : null;
          case Pe:
            return we = N._init, X(
              b,
              w,
              we(N._payload),
              ae
            );
        }
        if (Ya(N) || Te(N))
          return we !== null ? null : J(b, w, N, ae, null);
        $s(b, N);
      }
      return null;
    }
    function ye(b, w, N, ae, we) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number")
        return b = b.get(N) || null, A(w, b, "" + ae, we);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case de:
            return b = b.get(ae.key === null ? N : ae.key) || null, T(w, b, ae, we);
          case Y:
            return b = b.get(ae.key === null ? N : ae.key) || null, H(w, b, ae, we);
          case Pe:
            var Se = ae._init;
            return ye(b, w, N, Se(ae._payload), we);
        }
        if (Ya(ae) || Te(ae))
          return b = b.get(N) || null, J(w, b, ae, we, null);
        $s(w, ae);
      }
      return null;
    }
    function Ae(b, w, N, ae) {
      for (var we = null, Se = null, _e = w, $e = w = 0, Sn = null; _e !== null && $e < N.length; $e++) {
        _e.index > $e ? (Sn = _e, _e = null) : Sn = _e.sibling;
        var dt = X(b, _e, N[$e], ae);
        if (dt === null) {
          _e === null && (_e = Sn);
          break;
        }
        n && _e && dt.alternate === null && r(b, _e), w = p(dt, w, $e), Se === null ? we = dt : Se.sibling = dt, Se = dt, _e = Sn;
      }
      if ($e === N.length)
        return i(b, _e), kt && Sr(b, $e), we;
      if (_e === null) {
        for (; $e < N.length; $e++)
          _e = ee(b, N[$e], ae), _e !== null && (w = p(_e, w, $e), Se === null ? we = _e : Se.sibling = _e, Se = _e);
        return kt && Sr(b, $e), we;
      }
      for (_e = o(b, _e); $e < N.length; $e++)
        Sn = ye(_e, b, $e, N[$e], ae), Sn !== null && (n && Sn.alternate !== null && _e.delete(Sn.key === null ? $e : Sn.key), w = p(Sn, w, $e), Se === null ? we = Sn : Se.sibling = Sn, Se = Sn);
      return n && _e.forEach(function(Ma) {
        return r(b, Ma);
      }), kt && Sr(b, $e), we;
    }
    function xe(b, w, N, ae) {
      var we = Te(N);
      if (typeof we != "function")
        throw Error(g(150));
      if (N = we.call(N), N == null)
        throw Error(g(151));
      for (var Se = we = null, _e = w, $e = w = 0, Sn = null, dt = N.next(); _e !== null && !dt.done; $e++, dt = N.next()) {
        _e.index > $e ? (Sn = _e, _e = null) : Sn = _e.sibling;
        var Ma = X(b, _e, dt.value, ae);
        if (Ma === null) {
          _e === null && (_e = Sn);
          break;
        }
        n && _e && Ma.alternate === null && r(b, _e), w = p(Ma, w, $e), Se === null ? we = Ma : Se.sibling = Ma, Se = Ma, _e = Sn;
      }
      if (dt.done)
        return i(
          b,
          _e
        ), kt && Sr(b, $e), we;
      if (_e === null) {
        for (; !dt.done; $e++, dt = N.next())
          dt = ee(b, dt.value, ae), dt !== null && (w = p(dt, w, $e), Se === null ? we = dt : Se.sibling = dt, Se = dt);
        return kt && Sr(b, $e), we;
      }
      for (_e = o(b, _e); !dt.done; $e++, dt = N.next())
        dt = ye(_e, b, $e, dt.value, ae), dt !== null && (n && dt.alternate !== null && _e.delete(dt.key === null ? $e : dt.key), w = p(dt, w, $e), Se === null ? we = dt : Se.sibling = dt, Se = dt);
      return n && _e.forEach(function(Im) {
        return r(b, Im);
      }), kt && Sr(b, $e), we;
    }
    function Xt(b, w, N, ae) {
      if (typeof N == "object" && N !== null && N.type === Oe && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case de:
            e: {
              for (var we = N.key, Se = w; Se !== null; ) {
                if (Se.key === we) {
                  if (we = N.type, we === Oe) {
                    if (Se.tag === 7) {
                      i(b, Se.sibling), w = f(Se, N.props.children), w.return = b, b = w;
                      break e;
                    }
                  } else if (Se.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Pe && Hv(we) === Se.type) {
                    i(b, Se.sibling), w = f(Se, N.props), w.ref = ul(b, Se, N), w.return = b, b = w;
                    break e;
                  }
                  i(b, Se);
                  break;
                } else
                  r(b, Se);
                Se = Se.sibling;
              }
              N.type === Oe ? (w = Ti(N.props.children, b.mode, ae, N.key), w.return = b, b = w) : (ae = gc(N.type, N.key, N.props, null, b.mode, ae), ae.ref = ul(b, w, N), ae.return = b, b = ae);
            }
            return D(b);
          case Y:
            e: {
              for (Se = N.key; w !== null; ) {
                if (w.key === Se)
                  if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                    i(b, w.sibling), w = f(w, N.children || []), w.return = b, b = w;
                    break e;
                  } else {
                    i(b, w);
                    break;
                  }
                else
                  r(b, w);
                w = w.sibling;
              }
              w = xi(N, b.mode, ae), w.return = b, b = w;
            }
            return D(b);
          case Pe:
            return Se = N._init, Xt(b, w, Se(N._payload), ae);
        }
        if (Ya(N))
          return Ae(b, w, N, ae);
        if (Te(N))
          return xe(b, w, N, ae);
        $s(b, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, w !== null && w.tag === 6 ? (i(b, w.sibling), w = f(w, N), w.return = b, b = w) : (i(b, w), w = Uo(N, b.mode, ae), w.return = b, b = w), D(b)) : i(b, w);
    }
    return Xt;
  }
  var al = $v(!0), Pv = $v(!1), Do = {}, fu = Ye(Do), Co = Ye(Do), il = Ye(Do);
  function oi(n) {
    if (n === Do)
      throw Error(g(174));
    return n;
  }
  function rd(n, r) {
    switch (gt(il, r), gt(Co, n), gt(fu, Do), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ar(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ar(r, n);
    }
    mt(fu), gt(fu, r);
  }
  function wa() {
    mt(fu), mt(Co), mt(il);
  }
  function Le(n) {
    oi(il.current);
    var r = oi(fu.current), i = ar(r, n.type);
    r !== i && (gt(Co, n), gt(fu, i));
  }
  function Je(n) {
    Co.current === n && (mt(fu), mt(Co));
  }
  var Me = Ye(0);
  function Ht(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var i = r.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Vr = [];
  function Ps() {
    for (var n = 0; n < Vr.length; n++)
      Vr[n]._workInProgressVersionPrimary = null;
    Vr.length = 0;
  }
  var js = We.ReactCurrentDispatcher, ud = We.ReactCurrentBatchConfig, si = 0, Ot = null, I = null, lt = null, Ue = !1, Au = !1, xr = 0, ci = 0;
  function Nt() {
    throw Error(g(321));
  }
  function fi(n, r) {
    if (r === null)
      return !1;
    for (var i = 0; i < r.length && i < n.length; i++)
      if (!Ur(n[i], r[i]))
        return !1;
    return !0;
  }
  function Ba(n, r, i, o, f, p) {
    if (si = p, Ot = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, js.current = n === null || n.memoizedState === null ? xm : Rm, n = i(o, f), Au) {
      p = 0;
      do {
        if (Au = !1, xr = 0, 25 <= p)
          throw Error(g(301));
        p += 1, lt = I = null, r.updateQueue = null, js.current = id, n = i(o, f);
      } while (Au);
    }
    if (js.current = uc, r = I !== null && I.next !== null, si = 0, lt = I = Ot = null, Ue = !1, r)
      throw Error(g(300));
    return n;
  }
  function di() {
    var n = xr !== 0;
    return xr = 0, n;
  }
  function Ir() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Ot.memoizedState = lt = n : lt = lt.next = n, lt;
  }
  function dr() {
    if (I === null) {
      var n = Ot.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = I.next;
    var r = lt === null ? Ot.memoizedState : lt.next;
    if (r !== null)
      lt = r, I = n;
    else {
      if (n === null)
        throw Error(g(310));
      I = n, n = { memoizedState: I.memoizedState, baseState: I.baseState, baseQueue: I.baseQueue, queue: I.queue, next: null }, lt === null ? Ot.memoizedState = lt = n : lt = lt.next = n;
    }
    return lt;
  }
  function pi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Eo(n) {
    var r = dr(), i = r.queue;
    if (i === null)
      throw Error(g(311));
    i.lastRenderedReducer = n;
    var o = I, f = o.baseQueue, p = i.pending;
    if (p !== null) {
      if (f !== null) {
        var D = f.next;
        f.next = p.next, p.next = D;
      }
      o.baseQueue = f = p, i.pending = null;
    }
    if (f !== null) {
      p = f.next, o = o.baseState;
      var A = D = null, T = null, H = p;
      do {
        var J = H.lane;
        if ((si & J) === J)
          T !== null && (T = T.next = { lane: 0, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }), o = H.hasEagerState ? H.eagerState : n(o, H.action);
        else {
          var ee = {
            lane: J,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          };
          T === null ? (A = T = ee, D = o) : T = T.next = ee, Ot.lanes |= J, Wu |= J;
        }
        H = H.next;
      } while (H !== null && H !== p);
      T === null ? D = o : T.next = A, Ur(o, r.memoizedState) || (un = !0), r.memoizedState = o, r.baseState = D, r.baseQueue = T, i.lastRenderedState = o;
    }
    if (n = i.interleaved, n !== null) {
      f = n;
      do
        p = f.lane, Ot.lanes |= p, Wu |= p, f = f.next;
      while (f !== n);
    } else
      f === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function Ao(n) {
    var r = dr(), i = r.queue;
    if (i === null)
      throw Error(g(311));
    i.lastRenderedReducer = n;
    var o = i.dispatch, f = i.pending, p = r.memoizedState;
    if (f !== null) {
      i.pending = null;
      var D = f = f.next;
      do
        p = n(p, D.action), D = D.next;
      while (D !== f);
      Ur(p, r.memoizedState) || (un = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), i.lastRenderedState = p;
    }
    return [p, o];
  }
  function Vs() {
  }
  function Is(n, r) {
    var i = Ot, o = dr(), f = r(), p = !Ur(o.memoizedState, f);
    if (p && (o.memoizedState = f, un = !0), o = o.queue, So(Ys.bind(null, i, o, n), [n]), o.getSnapshot !== r || p || lt !== null && lt.memoizedState.tag & 1) {
      if (i.flags |= 2048, vi(9, Qs.bind(null, i, o, f, r), void 0, null), $t === null)
        throw Error(g(349));
      si & 30 || Gs(i, r, f);
    }
    return f;
  }
  function Gs(n, r, i) {
    n.flags |= 16384, n = { getSnapshot: r, value: i }, r = Ot.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ot.updateQueue = r, r.stores = [n]) : (i = r.stores, i === null ? r.stores = [n] : i.push(n));
  }
  function Qs(n, r, i, o) {
    r.value = i, r.getSnapshot = o, Ks(r) && Ws(n);
  }
  function Ys(n, r, i) {
    return i(function() {
      Ks(r) && Ws(n);
    });
  }
  function Ks(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var i = r();
      return !Ur(n, i);
    } catch {
      return !0;
    }
  }
  function Ws(n) {
    var r = Iu(n, 1);
    r !== null && Qn(r, n, 1, -1);
  }
  function qs(n) {
    var r = Ir();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pi, lastRenderedState: n }, r.queue = n, n = n.dispatch = rc.bind(null, Ot, n), [r.memoizedState, n];
  }
  function vi(n, r, i, o) {
    return n = { tag: n, create: r, destroy: i, deps: o, next: null }, r = Ot.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ot.updateQueue = r, r.lastEffect = n.next = n) : (i = r.lastEffect, i === null ? r.lastEffect = n.next = n : (o = i.next, i.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Xs() {
    return dr().memoizedState;
  }
  function hi(n, r, i, o) {
    var f = Ir();
    Ot.flags |= n, f.memoizedState = vi(1 | r, i, void 0, o === void 0 ? null : o);
  }
  function Qu(n, r, i, o) {
    var f = dr();
    o = o === void 0 ? null : o;
    var p = void 0;
    if (I !== null) {
      var D = I.memoizedState;
      if (p = D.destroy, o !== null && fi(o, D.deps)) {
        f.memoizedState = vi(r, i, p, o);
        return;
      }
    }
    Ot.flags |= n, f.memoizedState = vi(1 | r, i, p, o);
  }
  function Js(n, r) {
    return hi(8390656, 8, n, r);
  }
  function So(n, r) {
    return Qu(2048, 8, n, r);
  }
  function Zs(n, r) {
    return Qu(4, 2, n, r);
  }
  function ec(n, r) {
    return Qu(4, 4, n, r);
  }
  function ad(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function ll(n, r, i) {
    return i = i != null ? i.concat([n]) : null, Qu(4, 4, ad.bind(null, r, n), i);
  }
  function tc() {
  }
  function ol(n, r) {
    var i = dr();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    return o !== null && r !== null && fi(r, o[1]) ? o[0] : (i.memoizedState = [n, r], n);
  }
  function _a(n, r) {
    var i = dr();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    return o !== null && r !== null && fi(r, o[1]) ? o[0] : (n = n(), i.memoizedState = [n, r], n);
  }
  function pr(n, r, i) {
    return si & 21 ? (Ur(i, r) || (i = fs(), Ot.lanes |= i, Wu |= i, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, un = !0), n.memoizedState = i);
  }
  function Tm(n, r) {
    var i = Et;
    Et = i !== 0 && 4 > i ? i : 4, n(!0);
    var o = ud.transition;
    ud.transition = {};
    try {
      n(!1), r();
    } finally {
      Et = i, ud.transition = o;
    }
  }
  function Bt() {
    return dr().memoizedState;
  }
  function nc(n, r, i) {
    var o = an(n);
    if (i = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null }, sl(n))
      Fo(r, i);
    else if (i = Nv(n, r, i, o), i !== null) {
      var f = Gn();
      Qn(i, n, o, f), jv(i, r, o);
    }
  }
  function rc(n, r, i) {
    var o = an(n), f = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (sl(n))
      Fo(r, f);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var D = r.lastRenderedState, A = p(D, i);
          if (f.hasEagerState = !0, f.eagerState = A, Ur(A, D)) {
            var T = r.interleaved;
            T === null ? (f.next = f, Zf(r)) : (f.next = T.next, T.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      i = Nv(n, r, f, o), i !== null && (f = Gn(), Qn(i, n, o, f), jv(i, r, o));
    }
  }
  function sl(n) {
    var r = n.alternate;
    return n === Ot || r !== null && r === Ot;
  }
  function Fo(n, r) {
    Au = Ue = !0;
    var i = n.pending;
    i === null ? r.next = r : (r.next = i.next, i.next = r), n.pending = r;
  }
  function jv(n, r, i) {
    if (i & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, i |= o, r.lanes = i, Wl(n, i);
    }
  }
  var uc = { readContext: qt, useCallback: Nt, useContext: Nt, useEffect: Nt, useImperativeHandle: Nt, useInsertionEffect: Nt, useLayoutEffect: Nt, useMemo: Nt, useReducer: Nt, useRef: Nt, useState: Nt, useDebugValue: Nt, useDeferredValue: Nt, useTransition: Nt, useMutableSource: Nt, useSyncExternalStore: Nt, useId: Nt, unstable_isNewReconciler: !1 }, xm = { readContext: qt, useCallback: function(n, r) {
    return Ir().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: qt, useEffect: Js, useImperativeHandle: function(n, r, i) {
    return i = i != null ? i.concat([n]) : null, hi(
      4194308,
      4,
      ad.bind(null, r, n),
      i
    );
  }, useLayoutEffect: function(n, r) {
    return hi(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return hi(4, 2, n, r);
  }, useMemo: function(n, r) {
    var i = Ir();
    return r = r === void 0 ? null : r, n = n(), i.memoizedState = [n, r], n;
  }, useReducer: function(n, r, i) {
    var o = Ir();
    return r = i !== void 0 ? i(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = nc.bind(null, Ot, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ir();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qs, useDebugValue: tc, useDeferredValue: function(n) {
    return Ir().memoizedState = n;
  }, useTransition: function() {
    var n = qs(!1), r = n[0];
    return n = Tm.bind(null, n[1]), Ir().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, i) {
    var o = Ot, f = Ir();
    if (kt) {
      if (i === void 0)
        throw Error(g(407));
      i = i();
    } else {
      if (i = r(), $t === null)
        throw Error(g(349));
      si & 30 || Gs(o, r, i);
    }
    f.memoizedState = i;
    var p = { value: i, getSnapshot: r };
    return f.queue = p, Js(Ys.bind(
      null,
      o,
      p,
      n
    ), [n]), o.flags |= 2048, vi(9, Qs.bind(null, o, p, i, r), void 0, null), i;
  }, useId: function() {
    var n = Ir(), r = $t.identifierPrefix;
    if (kt) {
      var i = Vu, o = xn;
      i = (o & ~(1 << 32 - Nr(o) - 1)).toString(32) + i, r = ":" + r + "R" + i, i = xr++, 0 < i && (r += "H" + i.toString(32)), r += ":";
    } else
      i = ci++, r = ":" + r + "r" + i.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Rm = {
    readContext: qt,
    useCallback: ol,
    useContext: qt,
    useEffect: So,
    useImperativeHandle: ll,
    useInsertionEffect: Zs,
    useLayoutEffect: ec,
    useMemo: _a,
    useReducer: Eo,
    useRef: Xs,
    useState: function() {
      return Eo(pi);
    },
    useDebugValue: tc,
    useDeferredValue: function(n) {
      var r = dr();
      return pr(r, I.memoizedState, n);
    },
    useTransition: function() {
      var n = Eo(pi)[0], r = dr().memoizedState;
      return [n, r];
    },
    useMutableSource: Vs,
    useSyncExternalStore: Is,
    useId: Bt,
    unstable_isNewReconciler: !1
  }, id = { readContext: qt, useCallback: ol, useContext: qt, useEffect: So, useImperativeHandle: ll, useInsertionEffect: Zs, useLayoutEffect: ec, useMemo: _a, useReducer: Ao, useRef: Xs, useState: function() {
    return Ao(pi);
  }, useDebugValue: tc, useDeferredValue: function(n) {
    var r = dr();
    return I === null ? r.memoizedState = n : pr(r, I.memoizedState, n);
  }, useTransition: function() {
    var n = Ao(pi)[0], r = dr().memoizedState;
    return [n, r];
  }, useMutableSource: Vs, useSyncExternalStore: Is, useId: Bt, unstable_isNewReconciler: !1 };
  function cl(n, r) {
    try {
      var i = "", o = r;
      do
        i += Tt(o), o = o.return;
      while (o);
      var f = i;
    } catch (p) {
      f = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function To(n, r, i) {
    return { value: n, source: null, stack: i ?? null, digest: r ?? null };
  }
  function ac(n, r) {
    try {
      console.error(r.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var wm = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, i) {
    i = Gu(-1, i), i.tag = 3, i.payload = { element: null };
    var o = r.value;
    return i.callback = function() {
      dc || (dc = !0, Ci = o), ac(n, r);
    }, i;
  }
  function xo(n, r, i) {
    i = Gu(-1, i), i.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = r.value;
      i.payload = function() {
        return o(f);
      }, i.callback = function() {
        ac(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
      ac(n, r), typeof o != "function" && (Tu === null ? Tu = /* @__PURE__ */ new Set([this]) : Tu.add(this));
      var D = r.stack;
      this.componentDidCatch(r.value, { componentStack: D !== null ? D : "" });
    }), i;
  }
  function Iv(n, r, i) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new wm();
      var f = /* @__PURE__ */ new Set();
      o.set(r, f);
    } else
      f = o.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(r, f));
    f.has(i) || (f.add(i), n = Lm.bind(null, n, r, i), r.then(n, n));
  }
  function ld(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function od(n, r, i, o, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (r = Gu(-1, 1), r.tag = 2, xa(i, r, 1))), i.lanes |= 1), n);
  }
  var Bm = We.ReactCurrentOwner, un = !1;
  function fn(n, r, i, o) {
    r.child = n === null ? Pv(r, null, i, o) : al(r, n.child, i, o);
  }
  function ba(n, r, i, o, f) {
    i = i.render;
    var p = r.ref;
    return oe(r, f), o = Ba(n, r, i, o, p, f), i = di(), n !== null && !un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, wn(n, r, f)) : (kt && i && bs(r), r.flags |= 1, fn(n, r, o, f), r.child);
  }
  function ic(n, r, i, o, f) {
    if (n === null) {
      var p = i.type;
      return typeof p == "function" && !Rd(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (r.tag = 15, r.type = p, vr(n, r, p, o, f)) : (n = gc(i.type, null, o, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & f)) {
      var D = p.memoizedProps;
      if (i = i.compare, i = i !== null ? i : io, i(D, o) && n.ref === r.ref)
        return wn(n, r, f);
    }
    return r.flags |= 1, n = La(p, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function vr(n, r, i, o, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (io(p, o) && n.ref === r.ref)
        if (un = !1, r.pendingProps = o = p, (n.lanes & f) !== 0)
          n.flags & 131072 && (un = !0);
        else
          return r.lanes = n.lanes, wn(n, r, f);
    }
    return fl(n, r, i, o, f);
  }
  function mi(n, r, i) {
    var o = r.pendingProps, f = o.children, p = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, gt(yl, Rr), Rr |= i;
      else {
        if (!(i & 1073741824))
          return n = p !== null ? p.baseLanes | i : i, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, gt(yl, Rr), Rr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = p !== null ? p.baseLanes : i, gt(yl, Rr), Rr |= o;
      }
    else
      p !== null ? (o = p.baseLanes | i, r.memoizedState = null) : o = i, gt(yl, Rr), Rr |= o;
    return fn(n, r, f, i), r.child;
  }
  function Ke(n, r) {
    var i = r.ref;
    (n === null && i !== null || n !== null && n.ref !== i) && (r.flags |= 512, r.flags |= 2097152);
  }
  function fl(n, r, i, o, f) {
    var p = Mt(i) ? lr : He.current;
    return p = Hr(r, p), oe(r, f), i = Ba(n, r, i, o, p, f), o = di(), n !== null && !un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, wn(n, r, f)) : (kt && o && bs(r), r.flags |= 1, fn(n, r, i, f), r.child);
  }
  function sd(n, r, i, o, f) {
    if (Mt(i)) {
      var p = !0;
      _s(r);
    } else
      p = !1;
    if (oe(r, f), r.stateNode === null)
      jn(n, r), Uv(r, i, o), Hs(r, i, o, f), o = !0;
    else if (n === null) {
      var D = r.stateNode, A = r.memoizedProps;
      D.props = A;
      var T = D.context, H = i.contextType;
      typeof H == "object" && H !== null ? H = qt(H) : (H = Mt(i) ? lr : He.current, H = Hr(r, H));
      var J = i.getDerivedStateFromProps, ee = typeof J == "function" || typeof D.getSnapshotBeforeUpdate == "function";
      ee || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (A !== o || T !== H) && zv(r, D, o, H), Ta = !1;
      var X = r.memoizedState;
      D.state = X, Ra(r, o, D, f), T = r.memoizedState, A !== o || X !== T || Qt.current || Ta ? (typeof J == "function" && (nd(r, i, J, o), T = r.memoizedState), (A = Ta || Mv(r, i, A, o, X, T, H)) ? (ee || typeof D.UNSAFE_componentWillMount != "function" && typeof D.componentWillMount != "function" || (typeof D.componentWillMount == "function" && D.componentWillMount(), typeof D.UNSAFE_componentWillMount == "function" && D.UNSAFE_componentWillMount()), typeof D.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof D.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), D.props = o, D.state = T, D.context = H, o = A) : (typeof D.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      D = r.stateNode, cn(n, r), A = r.memoizedProps, H = r.type === r.elementType ? A : Tr(r.type, A), D.props = H, ee = r.pendingProps, X = D.context, T = i.contextType, typeof T == "object" && T !== null ? T = qt(T) : (T = Mt(i) ? lr : He.current, T = Hr(r, T));
      var ye = i.getDerivedStateFromProps;
      (J = typeof ye == "function" || typeof D.getSnapshotBeforeUpdate == "function") || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (A !== ee || X !== T) && zv(r, D, o, T), Ta = !1, X = r.memoizedState, D.state = X, Ra(r, o, D, f);
      var Ae = r.memoizedState;
      A !== ee || X !== Ae || Qt.current || Ta ? (typeof ye == "function" && (nd(r, i, ye, o), Ae = r.memoizedState), (H = Ta || Mv(r, i, H, o, X, Ae, T) || !1) ? (J || typeof D.UNSAFE_componentWillUpdate != "function" && typeof D.componentWillUpdate != "function" || (typeof D.componentWillUpdate == "function" && D.componentWillUpdate(o, Ae, T), typeof D.UNSAFE_componentWillUpdate == "function" && D.UNSAFE_componentWillUpdate(o, Ae, T)), typeof D.componentDidUpdate == "function" && (r.flags |= 4), typeof D.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof D.componentDidUpdate != "function" || A === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ae), D.props = o, D.state = Ae, D.context = T, o = H) : (typeof D.componentDidUpdate != "function" || A === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Gv(n, r, i, o, p, f);
  }
  function Gv(n, r, i, o, f, p) {
    Ke(n, r);
    var D = (r.flags & 128) !== 0;
    if (!o && !D)
      return f && _v(r, i, !1), wn(n, r, p);
    o = r.stateNode, Bm.current = r;
    var A = D && typeof i.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && D ? (r.child = al(r, n.child, null, p), r.child = al(r, null, A, p)) : fn(n, r, A, p), r.memoizedState = o.state, f && _v(r, i, !0), r.child;
  }
  function Qv(n) {
    var r = n.stateNode;
    r.pendingContext ? Ea(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ea(n, r.context, !1), rd(n, r.containerInfo);
  }
  function lc(n, r, i, o, f) {
    return zt(), qf(f), r.flags |= 256, fn(n, r, i, o), r.child;
  }
  var yi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function fd(n, r, i) {
    var o = r.pendingProps, f = Me.current, p = !1, D = (r.flags & 128) !== 0, A;
    if ((A = D) || (A = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), A ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), gt(Me, f & 1), n === null)
      return Os(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (D = o.children, n = o.fallback, p ? (o = r.mode, p = r.child, D = { mode: "hidden", children: D }, !(o & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = D) : p = Mo(D, o, 0, null), n = Ti(n, o, i, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = cd(i), r.memoizedState = yi, n) : dd(r, D));
    if (f = n.memoizedState, f !== null && (A = f.dehydrated, A !== null))
      return _m(n, r, D, o, A, f, i);
    if (p) {
      p = o.fallback, D = r.mode, f = n.child, A = f.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(D & 1) && r.child !== f ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = La(f, T), o.subtreeFlags = f.subtreeFlags & 14680064), A !== null ? p = La(A, p) : (p = Ti(p, D, i, null), p.flags |= 2), p.return = r, o.return = r, o.sibling = p, r.child = o, o = p, p = r.child, D = n.child.memoizedState, D = D === null ? cd(i) : { baseLanes: D.baseLanes | i, cachePool: null, transitions: D.transitions }, p.memoizedState = D, p.childLanes = n.childLanes & ~i, r.memoizedState = yi, o;
    }
    return p = n.child, n = p.sibling, o = La(p, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = i), o.return = r, o.sibling = null, n !== null && (i = r.deletions, i === null ? (r.deletions = [n], r.flags |= 16) : i.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function dd(n, r) {
    return r = Mo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function dl(n, r, i, o) {
    return o !== null && qf(o), al(r, n.child, null, i), n = dd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function _m(n, r, i, o, f, p, D) {
    if (i)
      return r.flags & 256 ? (r.flags &= -257, o = To(Error(g(422))), dl(n, r, D, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = o.fallback, f = r.mode, o = Mo({ mode: "visible", children: o.children }, f, 0, null), p = Ti(p, f, D, null), p.flags |= 2, o.return = r, p.return = r, o.sibling = p, r.child = o, r.mode & 1 && al(r, n.child, null, D), r.child.memoizedState = cd(D), r.memoizedState = yi, p);
    if (!(r.mode & 1))
      return dl(n, r, D, null);
    if (f.data === "$!") {
      if (o = f.nextSibling && f.nextSibling.dataset, o)
        var A = o.dgst;
      return o = A, p = Error(g(419)), o = To(p, o, void 0), dl(n, r, D, o);
    }
    if (A = (D & n.childLanes) !== 0, un || A) {
      if (o = $t, o !== null) {
        switch (D & -D) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (o.suspendedLanes | D) ? 0 : f, f !== 0 && f !== p.retryLane && (p.retryLane = f, Iu(n, f), Qn(o, n, f, -1));
      }
      return Fd(), o = To(Error(g(421))), dl(n, r, D, o);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Mm.bind(null, n), f._reactRetry = r, null) : (n = p.treeContext, fr = cu(f.nextSibling), Fr = r, kt = !0, jr = null, n !== null && (cr[Pn++] = xn, cr[Pn++] = Vu, cr[Pn++] = Pr, xn = n.id, Vu = n.overflow, Pr = r), r = dd(r, o.children), r.flags |= 4096, r);
  }
  function pd(n, r, i) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cn(n.return, r, i);
  }
  function oc(n, r, i, o, f) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: i, tailMode: f } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = i, p.tailMode = f);
  }
  function vd(n, r, i) {
    var o = r.pendingProps, f = o.revealOrder, p = o.tail;
    if (fn(n, r, o.children, i), o = Me.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && pd(n, i, r);
            else if (n.tag === 19)
              pd(n, i, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (gt(Me, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (i = r.child, f = null; i !== null; )
            n = i.alternate, n !== null && Ht(n) === null && (f = i), i = i.sibling;
          i = f, i === null ? (f = r.child, r.child = null) : (f = i.sibling, i.sibling = null), oc(r, !1, f, i, p);
          break;
        case "backwards":
          for (i = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && Ht(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = i, i = f, f = n;
          }
          oc(r, !0, i, null, p);
          break;
        case "together":
          oc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function jn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function wn(n, r, i) {
    if (n !== null && (r.dependencies = n.dependencies), Wu |= r.lanes, !(i & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(g(153));
    if (r.child !== null) {
      for (n = r.child, i = La(n, n.pendingProps), r.child = i, i.return = r; n.sibling !== null; )
        n = n.sibling, i = i.sibling = La(n, n.pendingProps), i.return = r;
      i.sibling = null;
    }
    return r.child;
  }
  function Yu(n, r, i) {
    switch (r.tag) {
      case 3:
        Qv(r), zt();
        break;
      case 5:
        Le(r);
        break;
      case 1:
        Mt(r.type) && _s(r);
        break;
      case 4:
        rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, f = r.memoizedProps.value;
        gt(Eu, o._currentValue), o._currentValue = f;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (gt(Me, Me.current & 1), r.flags |= 128, null) : i & r.child.childLanes ? fd(n, r, i) : (gt(Me, Me.current & 1), n = wn(n, r, i), n !== null ? n.sibling : null);
        gt(Me, Me.current & 1);
        break;
      case 19:
        if (o = (i & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return vd(n, r, i);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), gt(Me, Me.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, mi(n, r, i);
    }
    return wn(n, r, i);
  }
  var Ro, gi, Gr, dn;
  Ro = function(n, r) {
    for (var i = r.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6)
        n.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === r)
        break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === r)
          return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, gi = function() {
  }, Gr = function(n, r, i, o) {
    var f = n.memoizedProps;
    if (f !== o) {
      n = r.stateNode, oi(fu.current);
      var p = null;
      switch (i) {
        case "input":
          f = qe(n, f), o = qe(n, o), p = [];
          break;
        case "select":
          f = ce({}, f, { value: void 0 }), o = ce({}, o, { value: void 0 }), p = [];
          break;
        case "textarea":
          f = Ka(n, f), o = Ka(n, o), p = [];
          break;
        default:
          typeof f.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Bs);
      }
      Hn(i, o);
      var D;
      i = null;
      for (H in f)
        if (!o.hasOwnProperty(H) && f.hasOwnProperty(H) && f[H] != null)
          if (H === "style") {
            var A = f[H];
            for (D in A)
              A.hasOwnProperty(D) && (i || (i = {}), i[D] = "");
          } else
            H !== "dangerouslySetInnerHTML" && H !== "children" && H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && H !== "autoFocus" && (F.hasOwnProperty(H) ? p || (p = []) : (p = p || []).push(H, null));
      for (H in o) {
        var T = o[H];
        if (A = f != null ? f[H] : void 0, o.hasOwnProperty(H) && T !== A && (T != null || A != null))
          if (H === "style")
            if (A) {
              for (D in A)
                !A.hasOwnProperty(D) || T && T.hasOwnProperty(D) || (i || (i = {}), i[D] = "");
              for (D in T)
                T.hasOwnProperty(D) && A[D] !== T[D] && (i || (i = {}), i[D] = T[D]);
            } else
              i || (p || (p = []), p.push(
                H,
                i
              )), i = T;
          else
            H === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, A = A ? A.__html : void 0, T != null && A !== T && (p = p || []).push(H, T)) : H === "children" ? typeof T != "string" && typeof T != "number" || (p = p || []).push(H, "" + T) : H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && (F.hasOwnProperty(H) ? (T != null && H === "onScroll" && wt("scroll", n), p || A === T || (p = [])) : (p = p || []).push(H, T));
      }
      i && (p = p || []).push("style", i);
      var H = p;
      (r.updateQueue = H) && (r.flags |= 4);
    }
  }, dn = function(n, r, i, o) {
    i !== o && (r.flags |= 4);
  };
  function wo(n, r) {
    if (!kt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), r = r.sibling;
          i === null ? n.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = n.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Vn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, i = 0, o = 0;
    if (r)
      for (var f = n.child; f !== null; )
        i |= f.lanes | f.childLanes, o |= f.subtreeFlags & 14680064, o |= f.flags & 14680064, f.return = n, f = f.sibling;
    else
      for (f = n.child; f !== null; )
        i |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= o, n.childLanes = i, r;
  }
  function bm(n, r, i) {
    var o = r.pendingProps;
    switch (Kf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Vn(r), null;
      case 1:
        return Mt(r.type) && $r(), Vn(r), null;
      case 3:
        return o = r.stateNode, wa(), mt(Qt), mt(He), Ps(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ns(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, jr !== null && (Lo(jr), jr = null))), gi(n, r), Vn(r), null;
      case 5:
        Je(r);
        var f = oi(il.current);
        if (i = r.type, n !== null && r.stateNode != null)
          Gr(n, r, i, o, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(g(166));
            return Vn(r), null;
          }
          if (n = oi(fu.current), Ns(r)) {
            o = r.stateNode, i = r.type;
            var p = r.memoizedProps;
            switch (o[Du] = r, o[ai] = p, n = (r.mode & 1) !== 0, i) {
              case "dialog":
                wt("cancel", o), wt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                wt("load", o);
                break;
              case "video":
              case "audio":
                for (f = 0; f < co.length; f++)
                  wt(co[f], o);
                break;
              case "source":
                wt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                wt(
                  "error",
                  o
                ), wt("load", o);
                break;
              case "details":
                wt("toggle", o);
                break;
              case "input":
                yt(o, p), wt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!p.multiple }, wt("invalid", o);
                break;
              case "textarea":
                nu(o, p), wt("invalid", o);
            }
            Hn(i, p), f = null;
            for (var D in p)
              if (p.hasOwnProperty(D)) {
                var A = p[D];
                D === "children" ? typeof A == "string" ? o.textContent !== A && (p.suppressHydrationWarning !== !0 && ws(o.textContent, A, n), f = ["children", A]) : typeof A == "number" && o.textContent !== "" + A && (p.suppressHydrationWarning !== !0 && ws(
                  o.textContent,
                  A,
                  n
                ), f = ["children", "" + A]) : F.hasOwnProperty(D) && A != null && D === "onScroll" && wt("scroll", o);
              }
            switch (i) {
              case "input":
                fe(o), Ou(o, p, !0);
                break;
              case "textarea":
                fe(o), mu(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (o.onclick = Bs);
            }
            o = f, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            D = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = fa(i)), n === "http://www.w3.org/1999/xhtml" ? i === "script" ? (n = D.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = D.createElement(i, { is: o.is }) : (n = D.createElement(i), i === "select" && (D = n, o.multiple ? D.multiple = !0 : o.size && (D.size = o.size))) : n = D.createElementNS(n, i), n[Du] = r, n[ai] = o, Ro(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (D = on(i, o), i) {
                case "dialog":
                  wt("cancel", n), wt("close", n), f = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  wt("load", n), f = o;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < co.length; f++)
                    wt(co[f], n);
                  f = o;
                  break;
                case "source":
                  wt("error", n), f = o;
                  break;
                case "img":
                case "image":
                case "link":
                  wt(
                    "error",
                    n
                  ), wt("load", n), f = o;
                  break;
                case "details":
                  wt("toggle", n), f = o;
                  break;
                case "input":
                  yt(n, o), f = qe(n, o), wt("invalid", n);
                  break;
                case "option":
                  f = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, f = ce({}, o, { value: void 0 }), wt("invalid", n);
                  break;
                case "textarea":
                  nu(n, o), f = Ka(n, o), wt("invalid", n);
                  break;
                default:
                  f = o;
              }
              Hn(i, f), A = f;
              for (p in A)
                if (A.hasOwnProperty(p)) {
                  var T = A[p];
                  p === "style" ? xt(n, T) : p === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Il(n, T)) : p === "children" ? typeof T == "string" ? (i !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (F.hasOwnProperty(p) ? T != null && p === "onScroll" && wt("scroll", n) : T != null && Ge(n, p, T, D));
                }
              switch (i) {
                case "input":
                  fe(n), Ou(n, o, !1);
                  break;
                case "textarea":
                  fe(n), mu(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + me(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, p = o.value, p != null ? sa(n, !!o.multiple, p, !1) : o.defaultValue != null && sa(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Bs);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Vn(r), null;
      case 6:
        if (n && r.stateNode != null)
          dn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(g(166));
          if (i = oi(il.current), oi(fu.current), Ns(r)) {
            if (o = r.stateNode, i = r.memoizedProps, o[Du] = r, (p = o.nodeValue !== i) && (n = Fr, n !== null))
              switch (n.tag) {
                case 3:
                  ws(o.nodeValue, i, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && ws(o.nodeValue, i, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o), o[Du] = r, r.stateNode = o;
        }
        return Vn(r), null;
      case 13:
        if (mt(Me), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kt && fr !== null && r.mode & 1 && !(r.flags & 128))
            Ov(), zt(), r.flags |= 98560, p = !1;
          else if (p = Ns(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(g(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(g(317));
              p[Du] = r;
            } else
              zt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Vn(r), p = !1;
          } else
            jr !== null && (Lo(jr), jr = null), p = !0;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = i, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Me.current & 1 ? vn === 0 && (vn = 3) : Fd())), r.updateQueue !== null && (r.flags |= 4), Vn(r), null);
      case 4:
        return wa(), gi(n, r), n === null && tl(r.stateNode.containerInfo), Vn(r), null;
      case 10:
        return Fa(r.type._context), Vn(r), null;
      case 17:
        return Mt(r.type) && $r(), Vn(r), null;
      case 19:
        if (mt(Me), p = r.memoizedState, p === null)
          return Vn(r), null;
        if (o = (r.flags & 128) !== 0, D = p.rendering, D === null)
          if (o)
            wo(p, !1);
          else {
            if (vn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (D = Ht(n), D !== null) {
                  for (r.flags |= 128, wo(p, !1), o = D.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = i, i = r.child; i !== null; )
                    p = i, n = o, p.flags &= 14680066, D = p.alternate, D === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = D.childLanes, p.lanes = D.lanes, p.child = D.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = D.memoizedProps, p.memoizedState = D.memoizedState, p.updateQueue = D.updateQueue, p.type = D.type, n = D.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), i = i.sibling;
                  return gt(Me, Me.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && Gt() > Dl && (r.flags |= 128, o = !0, wo(p, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Ht(D), n !== null) {
              if (r.flags |= 128, o = !0, i = n.updateQueue, i !== null && (r.updateQueue = i, r.flags |= 4), wo(p, !0), p.tail === null && p.tailMode === "hidden" && !D.alternate && !kt)
                return Vn(r), null;
            } else
              2 * Gt() - p.renderingStartTime > Dl && i !== 1073741824 && (r.flags |= 128, o = !0, wo(p, !1), r.lanes = 4194304);
          p.isBackwards ? (D.sibling = r.child, r.child = D) : (i = p.last, i !== null ? i.sibling = D : r.child = D, p.last = D);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = Gt(), r.sibling = null, i = Me.current, gt(Me, o ? i & 1 | 2 : i & 1), r) : (Vn(r), null);
      case 22:
      case 23:
        return Sd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Rr & 1073741824 && (Vn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Vn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(g(156, r.tag));
  }
  function hd(n, r) {
    switch (Kf(r), r.tag) {
      case 1:
        return Mt(r.type) && $r(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wa(), mt(Qt), mt(He), Ps(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Je(r), null;
      case 13:
        if (mt(Me), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(g(340));
          zt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return mt(Me), null;
      case 4:
        return wa(), null;
      case 10:
        return Fa(r.type._context), null;
      case 22:
      case 23:
        return Sd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bo = !1, pn = !1, Yv = typeof WeakSet == "function" ? WeakSet : Set, Ee = null;
  function pl(n, r) {
    var i = n.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (o) {
          Kt(n, r, o);
        }
      else
        i.current = null;
  }
  function _o(n, r, i) {
    try {
      i();
    } catch (o) {
      Kt(n, r, o);
    }
  }
  var Kv = !1;
  function Wv(n, r) {
    if ($f = Ja, n = Ss(), Hu(n)) {
      if ("selectionStart" in n)
        var i = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          i = (i = n.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var f = o.anchorOffset, p = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, p.nodeType;
            } catch {
              i = null;
              break e;
            }
            var D = 0, A = -1, T = -1, H = 0, J = 0, ee = n, X = null;
            t:
              for (; ; ) {
                for (var ye; ee !== i || f !== 0 && ee.nodeType !== 3 || (A = D + f), ee !== p || o !== 0 && ee.nodeType !== 3 || (T = D + o), ee.nodeType === 3 && (D += ee.nodeValue.length), (ye = ee.firstChild) !== null; )
                  X = ee, ee = ye;
                for (; ; ) {
                  if (ee === n)
                    break t;
                  if (X === i && ++H === f && (A = D), X === p && ++J === o && (T = D), (ye = ee.nextSibling) !== null)
                    break;
                  ee = X, X = ee.parentNode;
                }
                ee = ye;
              }
            i = A === -1 || T === -1 ? null : { start: A, end: T };
          } else
            i = null;
        }
      i = i || { start: 0, end: 0 };
    } else
      i = null;
    for (ri = { focusedElem: n, selectionRange: i }, Ja = !1, Ee = r; Ee !== null; )
      if (r = Ee, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ee = n;
      else
        for (; Ee !== null; ) {
          r = Ee;
          try {
            var Ae = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ae !== null) {
                    var xe = Ae.memoizedProps, Xt = Ae.memoizedState, b = r.stateNode, w = b.getSnapshotBeforeUpdate(r.elementType === r.type ? xe : Tr(r.type, xe), Xt);
                    b.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var N = r.stateNode.containerInfo;
                  N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(g(163));
              }
          } catch (ae) {
            Kt(r, r.return, ae);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ee = n;
            break;
          }
          Ee = r.return;
        }
    return Ae = Kv, Kv = !1, Ae;
  }
  function bo(n, r, i) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var f = o = o.next;
      do {
        if ((f.tag & n) === n) {
          var p = f.destroy;
          f.destroy = void 0, p !== void 0 && _o(r, i, p);
        }
        f = f.next;
      } while (f !== o);
    }
  }
  function ko(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & n) === n) {
          var o = i.create;
          i.destroy = o();
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function md(n) {
    var r = n.ref;
    if (r !== null) {
      var i = n.stateNode;
      switch (n.tag) {
        case 5:
          n = i;
          break;
        default:
          n = i;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function yd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, yd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Du], delete r[ai], delete r[Vf], delete r[Fm], delete r[If])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function qv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function sc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || qv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function vl(n, r, i) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? i.nodeType === 8 ? i.parentNode.insertBefore(n, r) : i.insertBefore(n, r) : (i.nodeType === 8 ? (r = i.parentNode, r.insertBefore(n, i)) : (r = i, r.appendChild(n)), i = i._reactRootContainer, i != null || r.onclick !== null || (r.onclick = Bs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (vl(n, r, i), n = n.sibling; n !== null; )
        vl(n, r, i), n = n.sibling;
  }
  function Su(n, r, i) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? i.insertBefore(n, r) : i.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Su(n, r, i), n = n.sibling; n !== null; )
        Su(n, r, i), n = n.sibling;
  }
  var Ut = null, En = !1;
  function Qr(n, r, i) {
    for (i = i.child; i !== null; )
      hl(n, r, i), i = i.sibling;
  }
  function hl(n, r, i) {
    if (au && typeof au.onCommitFiberUnmount == "function")
      try {
        au.onCommitFiberUnmount(Kl, i);
      } catch {
      }
    switch (i.tag) {
      case 5:
        pn || pl(i, r);
      case 6:
        var o = Ut, f = En;
        Ut = null, Qr(n, r, i), Ut = o, En = f, Ut !== null && (En ? (n = Ut, i = i.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(i) : n.removeChild(i)) : Ut.removeChild(i.stateNode));
        break;
      case 18:
        Ut !== null && (En ? (n = Ut, i = i.stateNode, n.nodeType === 8 ? ga(n.parentNode, i) : n.nodeType === 1 && ga(n, i), Zl(n)) : ga(Ut, i.stateNode));
        break;
      case 4:
        o = Ut, f = En, Ut = i.stateNode.containerInfo, En = !0, Qr(n, r, i), Ut = o, En = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!pn && (o = i.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          f = o = o.next;
          do {
            var p = f, D = p.destroy;
            p = p.tag, D !== void 0 && (p & 2 || p & 4) && _o(i, r, D), f = f.next;
          } while (f !== o);
        }
        Qr(n, r, i);
        break;
      case 1:
        if (!pn && (pl(i, r), o = i.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = i.memoizedProps, o.state = i.memoizedState, o.componentWillUnmount();
          } catch (A) {
            Kt(i, r, A);
          }
        Qr(n, r, i);
        break;
      case 21:
        Qr(n, r, i);
        break;
      case 22:
        i.mode & 1 ? (pn = (o = pn) || i.memoizedState !== null, Qr(n, r, i), pn = o) : Qr(n, r, i);
        break;
      default:
        Qr(n, r, i);
    }
  }
  function Ku(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var i = n.stateNode;
      i === null && (i = n.stateNode = new Yv()), r.forEach(function(o) {
        var f = Um.bind(null, n, o);
        i.has(o) || (i.add(o), o.then(f, f));
      });
    }
  }
  function du(n, r) {
    var i = r.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var f = i[o];
        try {
          var p = n, D = r, A = D;
          e:
            for (; A !== null; ) {
              switch (A.tag) {
                case 5:
                  Ut = A.stateNode, En = !1;
                  break e;
                case 3:
                  Ut = A.stateNode.containerInfo, En = !0;
                  break e;
                case 4:
                  Ut = A.stateNode.containerInfo, En = !0;
                  break e;
              }
              A = A.return;
            }
          if (Ut === null)
            throw Error(g(160));
          hl(p, D, f), Ut = null, En = !1;
          var T = f.alternate;
          T !== null && (T.return = null), f.return = null;
        } catch (H) {
          Kt(f, r, H);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Xv(r, n), r = r.sibling;
  }
  function Xv(n, r) {
    var i = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (du(r, n), Fu(n), o & 4) {
          try {
            bo(3, n, n.return), ko(3, n);
          } catch (xe) {
            Kt(n, n.return, xe);
          }
          try {
            bo(5, n, n.return);
          } catch (xe) {
            Kt(n, n.return, xe);
          }
        }
        break;
      case 1:
        du(r, n), Fu(n), o & 512 && i !== null && pl(i, i.return);
        break;
      case 5:
        if (du(r, n), Fu(n), o & 512 && i !== null && pl(i, i.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            da(f, "");
          } catch (xe) {
            Kt(n, n.return, xe);
          }
        }
        if (o & 4 && (f = n.stateNode, f != null)) {
          var p = n.memoizedProps, D = i !== null ? i.memoizedProps : p, A = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              A === "input" && p.type === "radio" && p.name != null && en(f, p), on(A, D);
              var H = on(A, p);
              for (D = 0; D < T.length; D += 2) {
                var J = T[D], ee = T[D + 1];
                J === "style" ? xt(f, ee) : J === "dangerouslySetInnerHTML" ? Il(f, ee) : J === "children" ? da(f, ee) : Ge(f, J, ee, H);
              }
              switch (A) {
                case "input":
                  Cr(f, p);
                  break;
                case "textarea":
                  ca(f, p);
                  break;
                case "select":
                  var X = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!p.multiple;
                  var ye = p.value;
                  ye != null ? sa(f, !!p.multiple, ye, !1) : X !== !!p.multiple && (p.defaultValue != null ? sa(
                    f,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : sa(f, !!p.multiple, p.multiple ? [] : "", !1));
              }
              f[ai] = p;
            } catch (xe) {
              Kt(n, n.return, xe);
            }
        }
        break;
      case 6:
        if (du(r, n), Fu(n), o & 4) {
          if (n.stateNode === null)
            throw Error(g(162));
          f = n.stateNode, p = n.memoizedProps;
          try {
            f.nodeValue = p;
          } catch (xe) {
            Kt(n, n.return, xe);
          }
        }
        break;
      case 3:
        if (du(r, n), Fu(n), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Zl(r.containerInfo);
          } catch (xe) {
            Kt(n, n.return, xe);
          }
        break;
      case 4:
        du(r, n), Fu(n);
        break;
      case 13:
        du(r, n), Fu(n), f = n.child, f.flags & 8192 && (p = f.memoizedState !== null, f.stateNode.isHidden = p, !p || f.alternate !== null && f.alternate.memoizedState !== null || (Cd = Gt())), o & 4 && Ku(n);
        break;
      case 22:
        if (J = i !== null && i.memoizedState !== null, n.mode & 1 ? (pn = (H = pn) || J, du(r, n), pn = H) : du(r, n), Fu(n), o & 8192) {
          if (H = n.memoizedState !== null, (n.stateNode.isHidden = H) && !J && n.mode & 1)
            for (Ee = n, J = n.child; J !== null; ) {
              for (ee = Ee = J; Ee !== null; ) {
                switch (X = Ee, ye = X.child, X.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bo(4, X, X.return);
                    break;
                  case 1:
                    pl(X, X.return);
                    var Ae = X.stateNode;
                    if (typeof Ae.componentWillUnmount == "function") {
                      o = X, i = X.return;
                      try {
                        r = o, Ae.props = r.memoizedProps, Ae.state = r.memoizedState, Ae.componentWillUnmount();
                      } catch (xe) {
                        Kt(o, i, xe);
                      }
                    }
                    break;
                  case 5:
                    pl(X, X.return);
                    break;
                  case 22:
                    if (X.memoizedState !== null) {
                      gd(ee);
                      continue;
                    }
                }
                ye !== null ? (ye.return = X, Ee = ye) : gd(ee);
              }
              J = J.sibling;
            }
          e:
            for (J = null, ee = n; ; ) {
              if (ee.tag === 5) {
                if (J === null) {
                  J = ee;
                  try {
                    f = ee.stateNode, H ? (p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (A = ee.stateNode, T = ee.memoizedProps.style, D = T != null && T.hasOwnProperty("display") ? T.display : null, A.style.display = et("display", D));
                  } catch (xe) {
                    Kt(n, n.return, xe);
                  }
                }
              } else if (ee.tag === 6) {
                if (J === null)
                  try {
                    ee.stateNode.nodeValue = H ? "" : ee.memoizedProps;
                  } catch (xe) {
                    Kt(n, n.return, xe);
                  }
              } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === n) && ee.child !== null) {
                ee.child.return = ee, ee = ee.child;
                continue;
              }
              if (ee === n)
                break e;
              for (; ee.sibling === null; ) {
                if (ee.return === null || ee.return === n)
                  break e;
                J === ee && (J = null), ee = ee.return;
              }
              J === ee && (J = null), ee.sibling.return = ee.return, ee = ee.sibling;
            }
        }
        break;
      case 19:
        du(r, n), Fu(n), o & 4 && Ku(n);
        break;
      case 21:
        break;
      default:
        du(
          r,
          n
        ), Fu(n);
    }
  }
  function Fu(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var i = n.return; i !== null; ) {
            if (qv(i)) {
              var o = i;
              break e;
            }
            i = i.return;
          }
          throw Error(g(160));
        }
        switch (o.tag) {
          case 5:
            var f = o.stateNode;
            o.flags & 32 && (da(f, ""), o.flags &= -33);
            var p = sc(n);
            Su(n, p, f);
            break;
          case 3:
          case 4:
            var D = o.stateNode.containerInfo, A = sc(n);
            vl(n, A, D);
            break;
          default:
            throw Error(g(161));
        }
      } catch (T) {
        Kt(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Jv(n, r, i) {
    Ee = n, ml(n);
  }
  function ml(n, r, i) {
    for (var o = (n.mode & 1) !== 0; Ee !== null; ) {
      var f = Ee, p = f.child;
      if (f.tag === 22 && o) {
        var D = f.memoizedState !== null || Bo;
        if (!D) {
          var A = f.alternate, T = A !== null && A.memoizedState !== null || pn;
          A = Bo;
          var H = pn;
          if (Bo = D, (pn = T) && !H)
            for (Ee = f; Ee !== null; )
              D = Ee, T = D.child, D.tag === 22 && D.memoizedState !== null ? eh(f) : T !== null ? (T.return = D, Ee = T) : eh(f);
          for (; p !== null; )
            Ee = p, ml(p), p = p.sibling;
          Ee = f, Bo = A, pn = H;
        }
        Zv(n);
      } else
        f.subtreeFlags & 8772 && p !== null ? (p.return = f, Ee = p) : Zv(n);
    }
  }
  function Zv(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r.flags & 8772) {
        var i = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                pn || ko(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !pn)
                  if (i === null)
                    o.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? i.memoizedProps : Tr(r.type, i.memoizedProps);
                    o.componentDidUpdate(f, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && li(r, p, o);
                break;
              case 3:
                var D = r.updateQueue;
                if (D !== null) {
                  if (i = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        i = r.child.stateNode;
                        break;
                      case 1:
                        i = r.child.stateNode;
                    }
                  li(r, D, i);
                }
                break;
              case 5:
                var A = r.stateNode;
                if (i === null && r.flags & 4) {
                  i = A;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && i.focus();
                      break;
                    case "img":
                      T.src && (i.src = T.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var H = r.alternate;
                  if (H !== null) {
                    var J = H.memoizedState;
                    if (J !== null) {
                      var ee = J.dehydrated;
                      ee !== null && Zl(ee);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(g(163));
            }
          pn || r.flags & 512 && md(r);
        } catch (X) {
          Kt(r, r.return, X);
        }
      }
      if (r === n) {
        Ee = null;
        break;
      }
      if (i = r.sibling, i !== null) {
        i.return = r.return, Ee = i;
        break;
      }
      Ee = r.return;
    }
  }
  function gd(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r === n) {
        Ee = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, Ee = i;
        break;
      }
      Ee = r.return;
    }
  }
  function eh(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              ko(4, r);
            } catch (T) {
              Kt(r, i, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var f = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Kt(r, f, T);
              }
            }
            var p = r.return;
            try {
              md(r);
            } catch (T) {
              Kt(r, p, T);
            }
            break;
          case 5:
            var D = r.return;
            try {
              md(r);
            } catch (T) {
              Kt(r, D, T);
            }
        }
      } catch (T) {
        Kt(r, r.return, T);
      }
      if (r === n) {
        Ee = null;
        break;
      }
      var A = r.sibling;
      if (A !== null) {
        A.return = r.return, Ee = A;
        break;
      }
      Ee = r.return;
    }
  }
  var cc = Math.ceil, Oo = We.ReactCurrentDispatcher, Dd = We.ReactCurrentOwner, In = We.ReactCurrentBatchConfig, nt = 0, $t = null, Yt = null, An = 0, Rr = 0, yl = Ye(0), vn = 0, No = null, Wu = 0, fc = 0, gl = 0, Di = null, Wn = null, Cd = 0, Dl = 1 / 0, qu = null, dc = !1, Ci = null, Tu = null, ka = !1, Oa = null, pc = 0, Cl = 0, vc = null, Ei = -1, Ai = 0;
  function Gn() {
    return nt & 6 ? Gt() : Ei !== -1 ? Ei : Ei = Gt();
  }
  function an(n) {
    return n.mode & 1 ? nt & 2 && An !== 0 ? An & -An : Ls.transition !== null ? (Ai === 0 && (Ai = fs()), Ai) : (n = Et, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Cf(n.type)), n) : 1;
  }
  function Qn(n, r, i, o) {
    if (50 < Cl)
      throw Cl = 0, vc = null, Error(g(185));
    Xa(n, i, o), (!(nt & 2) || n !== $t) && (n === $t && (!(nt & 2) && (fc |= i), vn === 4 && Yr(n, An)), Yn(n, o), i === 1 && nt === 0 && !(r.mode & 1) && (Dl = Gt() + 500, Dn && or()));
  }
  function Yn(n, r) {
    var i = n.callbackNode;
    cs(n, r);
    var o = iu(n, n === $t ? An : 0);
    if (o === 0)
      i !== null && Pp(i), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (i != null && Pp(i), r === 1)
        n.tag === 0 ? Qf(th.bind(null, n)) : Gf(th.bind(null, n)), jf(function() {
          !(nt & 6) && or();
        }), i = null;
      else {
        switch (yf(o)) {
          case 1:
            i = Lu;
            break;
          case 4:
            i = tt;
            break;
          case 16:
            i = pa;
            break;
          case 536870912:
            i = pf;
            break;
          default:
            i = pa;
        }
        i = xd(i, El.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = i;
    }
  }
  function El(n, r) {
    if (Ei = -1, Ai = 0, nt & 6)
      throw Error(g(327));
    var i = n.callbackNode;
    if (Sl() && n.callbackNode !== i)
      return null;
    var o = iu(n, n === $t ? An : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = mc(n, o);
    else {
      r = o;
      var f = nt;
      nt |= 2;
      var p = hc();
      ($t !== n || An !== r) && (qu = null, Dl = Gt() + 500, Si(n, r));
      do
        try {
          Om();
          break;
        } catch (A) {
          nh(n, A);
        }
      while (1);
      Jf(), Oo.current = p, nt = f, Yt !== null ? r = 0 : ($t = null, An = 0, r = vn);
    }
    if (r !== 0) {
      if (r === 2 && (f = hf(n), f !== 0 && (o = f, r = Ed(n, f))), r === 1)
        throw i = No, Si(n, 0), Yr(n, o), Yn(n, Gt()), i;
      if (r === 6)
        Yr(n, o);
      else {
        if (f = n.current.alternate, !(o & 30) && !Ad(f) && (r = mc(n, o), r === 2 && (p = hf(n), p !== 0 && (o = p, r = Ed(n, p))), r === 1))
          throw i = No, Si(n, 0), Yr(n, o), Yn(n, Gt()), i;
        switch (n.finishedWork = f, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(g(345));
          case 2:
            Fi(n, Wn, qu);
            break;
          case 3:
            if (Yr(n, o), (o & 130023424) === o && (r = Cd + 500 - Gt(), 10 < r)) {
              if (iu(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = ui(Fi.bind(null, n, Wn, qu), r);
              break;
            }
            Fi(n, Wn, qu);
            break;
          case 4:
            if (Yr(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, f = -1; 0 < o; ) {
              var D = 31 - Nr(o);
              p = 1 << D, D = r[D], D > f && (f = D), o &= ~p;
            }
            if (o = f, o = Gt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ui(Fi.bind(null, n, Wn, qu), o);
              break;
            }
            Fi(n, Wn, qu);
            break;
          case 5:
            Fi(n, Wn, qu);
            break;
          default:
            throw Error(g(329));
        }
      }
    }
    return Yn(n, Gt()), n.callbackNode === i ? El.bind(null, n) : null;
  }
  function Ed(n, r) {
    var i = Di;
    return n.current.memoizedState.isDehydrated && (Si(n, r).flags |= 256), n = mc(n, r), n !== 2 && (r = Wn, Wn = i, r !== null && Lo(r)), n;
  }
  function Lo(n) {
    Wn === null ? Wn = n : Wn.push.apply(Wn, n);
  }
  function Ad(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var i = r.updateQueue;
        if (i !== null && (i = i.stores, i !== null))
          for (var o = 0; o < i.length; o++) {
            var f = i[o], p = f.getSnapshot;
            f = f.value;
            try {
              if (!Ur(p(), f))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (i = r.child, r.subtreeFlags & 16384 && i !== null)
        i.return = r, r = i;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Yr(n, r) {
    for (r &= ~gl, r &= ~fc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var i = 31 - Nr(r), o = 1 << i;
      n[i] = -1, r &= ~o;
    }
  }
  function th(n) {
    if (nt & 6)
      throw Error(g(327));
    Sl();
    var r = iu(n, 0);
    if (!(r & 1))
      return Yn(n, Gt()), null;
    var i = mc(n, r);
    if (n.tag !== 0 && i === 2) {
      var o = hf(n);
      o !== 0 && (r = o, i = Ed(n, o));
    }
    if (i === 1)
      throw i = No, Si(n, 0), Yr(n, r), Yn(n, Gt()), i;
    if (i === 6)
      throw Error(g(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Fi(n, Wn, qu), Yn(n, Gt()), null;
  }
  function Al(n, r) {
    var i = nt;
    nt |= 1;
    try {
      return n(r);
    } finally {
      nt = i, nt === 0 && (Dl = Gt() + 500, Dn && or());
    }
  }
  function Na(n) {
    Oa !== null && Oa.tag === 0 && !(nt & 6) && Sl();
    var r = nt;
    nt |= 1;
    var i = In.transition, o = Et;
    try {
      if (In.transition = null, Et = 1, n)
        return n();
    } finally {
      Et = o, In.transition = i, nt = r, !(nt & 6) && or();
    }
  }
  function Sd() {
    Rr = yl.current, mt(yl);
  }
  function Si(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var i = n.timeoutHandle;
    if (i !== -1 && (n.timeoutHandle = -1, Bv(i)), Yt !== null)
      for (i = Yt.return; i !== null; ) {
        var o = i;
        switch (Kf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && $r();
            break;
          case 3:
            wa(), mt(Qt), mt(He), Ps();
            break;
          case 5:
            Je(o);
            break;
          case 4:
            wa();
            break;
          case 13:
            mt(Me);
            break;
          case 19:
            mt(Me);
            break;
          case 10:
            Fa(o.type._context);
            break;
          case 22:
          case 23:
            Sd();
        }
        i = i.return;
      }
    if ($t = n, Yt = n = La(n.current, null), An = Rr = r, vn = 0, No = null, gl = fc = Wu = 0, Wn = Di = null, Rn !== null) {
      for (r = 0; r < Rn.length; r++)
        if (i = Rn[r], o = i.interleaved, o !== null) {
          i.interleaved = null;
          var f = o.next, p = i.pending;
          if (p !== null) {
            var D = p.next;
            p.next = f, o.next = D;
          }
          i.pending = o;
        }
      Rn = null;
    }
    return n;
  }
  function nh(n, r) {
    do {
      var i = Yt;
      try {
        if (Jf(), js.current = uc, Ue) {
          for (var o = Ot.memoizedState; o !== null; ) {
            var f = o.queue;
            f !== null && (f.pending = null), o = o.next;
          }
          Ue = !1;
        }
        if (si = 0, lt = I = Ot = null, Au = !1, xr = 0, Dd.current = null, i === null || i.return === null) {
          vn = 1, No = r, Yt = null;
          break;
        }
        e: {
          var p = n, D = i.return, A = i, T = r;
          if (r = An, A.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var H = T, J = A, ee = J.tag;
            if (!(J.mode & 1) && (ee === 0 || ee === 11 || ee === 15)) {
              var X = J.alternate;
              X ? (J.updateQueue = X.updateQueue, J.memoizedState = X.memoizedState, J.lanes = X.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var ye = ld(D);
            if (ye !== null) {
              ye.flags &= -257, od(ye, D, A, p, r), ye.mode & 1 && Iv(p, H, r), r = ye, T = H;
              var Ae = r.updateQueue;
              if (Ae === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(T), r.updateQueue = xe;
              } else
                Ae.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Iv(p, H, r), Fd();
                break e;
              }
              T = Error(g(426));
            }
          } else if (kt && A.mode & 1) {
            var Xt = ld(D);
            if (Xt !== null) {
              !(Xt.flags & 65536) && (Xt.flags |= 256), od(Xt, D, A, p, r), qf(cl(T, A));
              break e;
            }
          }
          p = T = cl(T, A), vn !== 4 && (vn = 2), Di === null ? Di = [p] : Di.push(p), p = D;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var b = Vv(p, T, r);
                td(p, b);
                break e;
              case 1:
                A = T;
                var w = p.type, N = p.stateNode;
                if (!(p.flags & 128) && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Tu === null || !Tu.has(N)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var ae = xo(p, A, r);
                  td(p, ae);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Td(i);
      } catch (we) {
        r = we, Yt === i && i !== null && (Yt = i = i.return);
        continue;
      }
      break;
    } while (1);
  }
  function hc() {
    var n = Oo.current;
    return Oo.current = uc, n === null ? uc : n;
  }
  function Fd() {
    (vn === 0 || vn === 3 || vn === 2) && (vn = 4), $t === null || !(Wu & 268435455) && !(fc & 268435455) || Yr($t, An);
  }
  function mc(n, r) {
    var i = nt;
    nt |= 2;
    var o = hc();
    ($t !== n || An !== r) && (qu = null, Si(n, r));
    do
      try {
        km();
        break;
      } catch (f) {
        nh(n, f);
      }
    while (1);
    if (Jf(), nt = i, Oo.current = o, Yt !== null)
      throw Error(g(261));
    return $t = null, An = 0, vn;
  }
  function km() {
    for (; Yt !== null; )
      rh(Yt);
  }
  function Om() {
    for (; Yt !== null && !nm(); )
      rh(Yt);
  }
  function rh(n) {
    var r = ah(n.alternate, n, Rr);
    n.memoizedProps = n.pendingProps, r === null ? Td(n) : Yt = r, Dd.current = null;
  }
  function Td(n) {
    var r = n;
    do {
      var i = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (i = hd(i, r), i !== null) {
          i.flags &= 32767, Yt = i;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          vn = 6, Yt = null;
          return;
        }
      } else if (i = bm(i, r, Rr), i !== null) {
        Yt = i;
        return;
      }
      if (r = r.sibling, r !== null) {
        Yt = r;
        return;
      }
      Yt = r = n;
    } while (r !== null);
    vn === 0 && (vn = 5);
  }
  function Fi(n, r, i) {
    var o = Et, f = In.transition;
    try {
      In.transition = null, Et = 1, Nm(n, r, i, o);
    } finally {
      In.transition = f, Et = o;
    }
    return null;
  }
  function Nm(n, r, i, o) {
    do
      Sl();
    while (Oa !== null);
    if (nt & 6)
      throw Error(g(327));
    i = n.finishedWork;
    var f = n.finishedLanes;
    if (i === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, i === n.current)
      throw Error(g(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = i.lanes | i.childLanes;
    if (im(n, p), n === $t && (Yt = $t = null, An = 0), !(i.subtreeFlags & 2064) && !(i.flags & 2064) || ka || (ka = !0, xd(pa, function() {
      return Sl(), null;
    })), p = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || p) {
      p = In.transition, In.transition = null;
      var D = Et;
      Et = 1;
      var A = nt;
      nt |= 4, Dd.current = null, Wv(n, i), Xv(i, n), Fs(ri), Ja = !!$f, ri = $f = null, n.current = i, Jv(i), rm(), nt = A, Et = D, In.transition = p;
    } else
      n.current = i;
    if (ka && (ka = !1, Oa = n, pc = f), p = n.pendingLanes, p === 0 && (Tu = null), Vp(i.stateNode), Yn(n, Gt()), r !== null)
      for (o = n.onRecoverableError, i = 0; i < r.length; i++)
        f = r[i], o(f.value, { componentStack: f.stack, digest: f.digest });
    if (dc)
      throw dc = !1, n = Ci, Ci = null, n;
    return pc & 1 && n.tag !== 0 && Sl(), p = n.pendingLanes, p & 1 ? n === vc ? Cl++ : (Cl = 0, vc = n) : Cl = 0, or(), null;
  }
  function Sl() {
    if (Oa !== null) {
      var n = yf(pc), r = In.transition, i = Et;
      try {
        if (In.transition = null, Et = 16 > n ? 16 : n, Oa === null)
          var o = !1;
        else {
          if (n = Oa, Oa = null, pc = 0, nt & 6)
            throw Error(g(331));
          var f = nt;
          for (nt |= 4, Ee = n.current; Ee !== null; ) {
            var p = Ee, D = p.child;
            if (Ee.flags & 16) {
              var A = p.deletions;
              if (A !== null) {
                for (var T = 0; T < A.length; T++) {
                  var H = A[T];
                  for (Ee = H; Ee !== null; ) {
                    var J = Ee;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bo(8, J, p);
                    }
                    var ee = J.child;
                    if (ee !== null)
                      ee.return = J, Ee = ee;
                    else
                      for (; Ee !== null; ) {
                        J = Ee;
                        var X = J.sibling, ye = J.return;
                        if (yd(J), J === H) {
                          Ee = null;
                          break;
                        }
                        if (X !== null) {
                          X.return = ye, Ee = X;
                          break;
                        }
                        Ee = ye;
                      }
                  }
                }
                var Ae = p.alternate;
                if (Ae !== null) {
                  var xe = Ae.child;
                  if (xe !== null) {
                    Ae.child = null;
                    do {
                      var Xt = xe.sibling;
                      xe.sibling = null, xe = Xt;
                    } while (xe !== null);
                  }
                }
                Ee = p;
              }
            }
            if (p.subtreeFlags & 2064 && D !== null)
              D.return = p, Ee = D;
            else
              e:
                for (; Ee !== null; ) {
                  if (p = Ee, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bo(9, p, p.return);
                    }
                  var b = p.sibling;
                  if (b !== null) {
                    b.return = p.return, Ee = b;
                    break e;
                  }
                  Ee = p.return;
                }
          }
          var w = n.current;
          for (Ee = w; Ee !== null; ) {
            D = Ee;
            var N = D.child;
            if (D.subtreeFlags & 2064 && N !== null)
              N.return = D, Ee = N;
            else
              e:
                for (D = w; Ee !== null; ) {
                  if (A = Ee, A.flags & 2048)
                    try {
                      switch (A.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ko(9, A);
                      }
                    } catch (we) {
                      Kt(A, A.return, we);
                    }
                  if (A === D) {
                    Ee = null;
                    break e;
                  }
                  var ae = A.sibling;
                  if (ae !== null) {
                    ae.return = A.return, Ee = ae;
                    break e;
                  }
                  Ee = A.return;
                }
          }
          if (nt = f, or(), au && typeof au.onPostCommitFiberRoot == "function")
            try {
              au.onPostCommitFiberRoot(Kl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Et = i, In.transition = r;
      }
    }
    return !1;
  }
  function uh(n, r, i) {
    r = cl(i, r), r = Vv(n, r, 1), n = xa(n, r, 1), r = Gn(), n !== null && (Xa(n, 1, r), Yn(n, r));
  }
  function Kt(n, r, i) {
    if (n.tag === 3)
      uh(n, n, i);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          uh(r, n, i);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Tu === null || !Tu.has(o))) {
            n = cl(i, n), n = xo(r, n, 1), r = xa(r, n, 1), n = Gn(), r !== null && (Xa(r, 1, n), Yn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Lm(n, r, i) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & i, $t === n && (An & i) === i && (vn === 4 || vn === 3 && (An & 130023424) === An && 500 > Gt() - Cd ? Si(n, 0) : gl |= i), Yn(n, r);
  }
  function yc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Gi, Gi <<= 1, !(Gi & 130023424) && (Gi = 4194304)) : r = 1);
    var i = Gn();
    n = Iu(n, r), n !== null && (Xa(n, r, i), Yn(n, i));
  }
  function Mm(n) {
    var r = n.memoizedState, i = 0;
    r !== null && (i = r.retryLane), yc(n, i);
  }
  function Um(n, r) {
    var i = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, f = n.memoizedState;
        f !== null && (i = f.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(g(314));
    }
    o !== null && o.delete(r), yc(n, i);
  }
  var ah;
  ah = function(n, r, i) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Qt.current)
        un = !0;
      else {
        if (!(n.lanes & i) && !(r.flags & 128))
          return un = !1, Yu(n, r, i);
        un = !!(n.flags & 131072);
      }
    else
      un = !1, kt && r.flags & 1048576 && Yf(r, rl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        jn(n, r), n = r.pendingProps;
        var f = Hr(r, He.current);
        oe(r, i), f = Ba(null, r, o, n, f, i);
        var p = di();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mt(o) ? (p = !0, _s(r)) : p = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, ed(r), f.updater = zs, r.stateNode = f, f._reactInternals = r, Hs(r, o, n, i), r = Gv(null, r, o, !0, p, i)) : (r.tag = 0, kt && p && bs(r), fn(null, r, f, i), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (jn(n, r), n = r.pendingProps, f = o._init, o = f(o._payload), r.type = o, f = r.tag = Hm(o), n = Tr(o, n), f) {
            case 0:
              r = fl(null, r, o, n, i);
              break e;
            case 1:
              r = sd(null, r, o, n, i);
              break e;
            case 11:
              r = ba(null, r, o, n, i);
              break e;
            case 14:
              r = ic(null, r, o, Tr(o.type, n), i);
              break e;
          }
          throw Error(g(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Tr(o, f), fl(n, r, o, f, i);
      case 1:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Tr(o, f), sd(n, r, o, f, i);
      case 3:
        e: {
          if (Qv(r), n === null)
            throw Error(g(387));
          o = r.pendingProps, p = r.memoizedState, f = p.element, cn(n, r), Ra(r, o, null, i);
          var D = r.memoizedState;
          if (o = D.element, p.isDehydrated)
            if (p = { element: o, isDehydrated: !1, cache: D.cache, pendingSuspenseBoundaries: D.pendingSuspenseBoundaries, transitions: D.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              f = cl(Error(g(423)), r), r = lc(n, r, o, i, f);
              break e;
            } else if (o !== f) {
              f = cl(Error(g(424)), r), r = lc(n, r, o, i, f);
              break e;
            } else
              for (fr = cu(r.stateNode.containerInfo.firstChild), Fr = r, kt = !0, jr = null, i = Pv(r, null, o, i), r.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (zt(), o === f) {
              r = wn(n, r, i);
              break e;
            }
            fn(n, r, o, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Le(r), n === null && Os(r), o = r.type, f = r.pendingProps, p = n !== null ? n.memoizedProps : null, D = f.children, vo(o, f) ? D = null : p !== null && vo(o, p) && (r.flags |= 32), Ke(n, r), fn(n, r, D, i), r.child;
      case 6:
        return n === null && Os(r), null;
      case 13:
        return fd(n, r, i);
      case 4:
        return rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = al(r, null, o, i) : fn(n, r, o, i), r.child;
      case 11:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Tr(o, f), ba(n, r, o, f, i);
      case 7:
        return fn(n, r, r.pendingProps, i), r.child;
      case 8:
        return fn(n, r, r.pendingProps.children, i), r.child;
      case 12:
        return fn(n, r, r.pendingProps.children, i), r.child;
      case 10:
        e: {
          if (o = r.type._context, f = r.pendingProps, p = r.memoizedProps, D = f.value, gt(Eu, o._currentValue), o._currentValue = D, p !== null)
            if (Ur(p.value, D)) {
              if (p.children === f.children && !Qt.current) {
                r = wn(n, r, i);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var A = p.dependencies;
                if (A !== null) {
                  D = p.child;
                  for (var T = A.firstContext; T !== null; ) {
                    if (T.context === o) {
                      if (p.tag === 1) {
                        T = Gu(-1, i & -i), T.tag = 2;
                        var H = p.updateQueue;
                        if (H !== null) {
                          H = H.shared;
                          var J = H.pending;
                          J === null ? T.next = T : (T.next = J.next, J.next = T), H.pending = T;
                        }
                      }
                      p.lanes |= i, T = p.alternate, T !== null && (T.lanes |= i), Cn(
                        p.return,
                        i,
                        r
                      ), A.lanes |= i;
                      break;
                    }
                    T = T.next;
                  }
                } else if (p.tag === 10)
                  D = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (D = p.return, D === null)
                    throw Error(g(341));
                  D.lanes |= i, A = D.alternate, A !== null && (A.lanes |= i), Cn(D, i, r), D = p.sibling;
                } else
                  D = p.child;
                if (D !== null)
                  D.return = p;
                else
                  for (D = p; D !== null; ) {
                    if (D === r) {
                      D = null;
                      break;
                    }
                    if (p = D.sibling, p !== null) {
                      p.return = D.return, D = p;
                      break;
                    }
                    D = D.return;
                  }
                p = D;
              }
          fn(n, r, f.children, i), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, o = r.pendingProps.children, oe(r, i), f = qt(f), o = o(f), r.flags |= 1, fn(n, r, o, i), r.child;
      case 14:
        return o = r.type, f = Tr(o, r.pendingProps), f = Tr(o.type, f), ic(n, r, o, f, i);
      case 15:
        return vr(n, r, r.type, r.pendingProps, i);
      case 17:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : Tr(o, f), jn(n, r), r.tag = 1, Mt(o) ? (n = !0, _s(r)) : n = !1, oe(r, i), Uv(r, o, f), Hs(r, o, f, i), Gv(null, r, o, !0, n, i);
      case 19:
        return vd(n, r, i);
      case 22:
        return mi(n, r, i);
    }
    throw Error(g(156, r.tag));
  };
  function xd(n, r) {
    return df(n, r);
  }
  function zm(n, r, i, o) {
    this.tag = n, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kr(n, r, i, o) {
    return new zm(n, r, i, o);
  }
  function Rd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Hm(n) {
    if (typeof n == "function")
      return Rd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Zt)
        return 11;
      if (n === Tn)
        return 14;
    }
    return 2;
  }
  function La(n, r) {
    var i = n.alternate;
    return i === null ? (i = Kr(n.tag, r, n.key, n.mode), i.elementType = n.elementType, i.type = n.type, i.stateNode = n.stateNode, i.alternate = n, n.alternate = i) : (i.pendingProps = r, i.type = n.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = n.flags & 14680064, i.childLanes = n.childLanes, i.lanes = n.lanes, i.child = n.child, i.memoizedProps = n.memoizedProps, i.memoizedState = n.memoizedState, i.updateQueue = n.updateQueue, r = n.dependencies, i.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, i.sibling = n.sibling, i.index = n.index, i.ref = n.ref, i;
  }
  function gc(n, r, i, o, f, p) {
    var D = 2;
    if (o = n, typeof n == "function")
      Rd(n) && (D = 1);
    else if (typeof n == "string")
      D = 5;
    else
      e:
        switch (n) {
          case Oe:
            return Ti(i.children, f, p, r);
          case le:
            D = 8, f |= 8;
            break;
          case _t:
            return n = Kr(12, i, r, f | 2), n.elementType = _t, n.lanes = p, n;
          case Xe:
            return n = Kr(13, i, r, f), n.elementType = Xe, n.lanes = p, n;
          case ut:
            return n = Kr(19, i, r, f), n.elementType = ut, n.lanes = p, n;
          case zn:
            return Mo(i, f, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case ht:
                  D = 10;
                  break e;
                case pe:
                  D = 9;
                  break e;
                case Zt:
                  D = 11;
                  break e;
                case Tn:
                  D = 14;
                  break e;
                case Pe:
                  D = 16, o = null;
                  break e;
              }
            throw Error(g(130, n == null ? n : typeof n, ""));
        }
    return r = Kr(D, i, r, f), r.elementType = n, r.type = o, r.lanes = p, r;
  }
  function Ti(n, r, i, o) {
    return n = Kr(7, n, o, r), n.lanes = i, n;
  }
  function Mo(n, r, i, o) {
    return n = Kr(22, n, o, r), n.elementType = zn, n.lanes = i, n.stateNode = { isHidden: !1 }, n;
  }
  function Uo(n, r, i) {
    return n = Kr(6, n, null, r), n.lanes = i, n;
  }
  function xi(n, r, i) {
    return r = Kr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = i, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function $m(n, r, i, o, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mf(0), this.expirationTimes = mf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mf(0), this.identifierPrefix = o, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Dc(n, r, i, o, f, p, D, A, T) {
    return n = new $m(n, r, i, A, T), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = Kr(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: o, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ed(p), n;
  }
  function ih(n, r, i) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: i };
  }
  function wd(n) {
    if (!n)
      return Cu;
    n = n._reactInternals;
    e: {
      if (gu(n) !== n || n.tag !== 1)
        throw Error(g(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(g(171));
    }
    if (n.tag === 1) {
      var i = n.type;
      if (Mt(i))
        return yo(n, i, r);
    }
    return r;
  }
  function lh(n, r, i, o, f, p, D, A, T) {
    return n = Dc(i, o, !0, n, f, p, D, A, T), n.context = wd(null), i = n.current, o = Gn(), f = an(i), p = Gu(o, f), p.callback = r ?? null, xa(i, p, f), n.current.lanes = f, Xa(n, f, o), Yn(n, o), n;
  }
  function zo(n, r, i, o) {
    var f = r.current, p = Gn(), D = an(f);
    return i = wd(i), r.context === null ? r.context = i : r.pendingContext = i, r = Gu(p, D), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = xa(f, r, D), n !== null && (Qn(n, f, D, p), Us(n, f, D)), D;
  }
  function Cc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function oh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var i = n.retryLane;
      n.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function Bd(n, r) {
    oh(n, r), (n = n.alternate) && oh(n, r);
  }
  function sh() {
    return null;
  }
  var _d = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ec(n) {
    this._internalRoot = n;
  }
  Xu.prototype.render = Ec.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(g(409));
    zo(n, r, null, null);
  }, Xu.prototype.unmount = Ec.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Na(function() {
        zo(null, n, null, null);
      }), r[ju] = null;
    }
  };
  function Xu(n) {
    this._internalRoot = n;
  }
  Xu.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Yp();
      n = { blockedOn: null, target: n, priority: r };
      for (var i = 0; i < At.length && r !== 0 && r < At[i].priority; i++)
        ;
      At.splice(i, 0, n), i === 0 && Kp(n);
    }
  };
  function bd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ac(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ch() {
  }
  function Pm(n, r, i, o, f) {
    if (f) {
      if (typeof o == "function") {
        var p = o;
        o = function() {
          var H = Cc(D);
          p.call(H);
        };
      }
      var D = lh(r, o, n, 0, null, !1, !1, "", ch);
      return n._reactRootContainer = D, n[ju] = D.current, tl(n.nodeType === 8 ? n.parentNode : n), Na(), D;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof o == "function") {
      var A = o;
      o = function() {
        var H = Cc(T);
        A.call(H);
      };
    }
    var T = Dc(n, 0, !1, null, null, !1, !1, "", ch);
    return n._reactRootContainer = T, n[ju] = T.current, tl(n.nodeType === 8 ? n.parentNode : n), Na(function() {
      zo(r, T, i, o);
    }), T;
  }
  function Sc(n, r, i, o, f) {
    var p = i._reactRootContainer;
    if (p) {
      var D = p;
      if (typeof f == "function") {
        var A = f;
        f = function() {
          var T = Cc(D);
          A.call(T);
        };
      }
      zo(r, D, n, f);
    } else
      D = Pm(i, r, n, f, o);
    return Cc(D);
  }
  Qp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var i = qa(r.pendingLanes);
          i !== 0 && (Wl(r, i | 1), Yn(r, Gt()), !(nt & 6) && (Dl = Gt() + 500, or()));
        }
        break;
      case 13:
        Na(function() {
          var o = Iu(n, 1);
          if (o !== null) {
            var f = Gn();
            Qn(o, n, 1, f);
          }
        }), Bd(n, 1);
    }
  }, ds = function(n) {
    if (n.tag === 13) {
      var r = Iu(n, 134217728);
      if (r !== null) {
        var i = Gn();
        Qn(r, n, 134217728, i);
      }
      Bd(n, 134217728);
    }
  }, Rt = function(n) {
    if (n.tag === 13) {
      var r = an(n), i = Iu(n, r);
      if (i !== null) {
        var o = Gn();
        Qn(i, n, r, o);
      }
      Bd(n, r);
    }
  }, Yp = function() {
    return Et;
  }, gf = function(n, r) {
    var i = Et;
    try {
      return Et = n, r();
    } finally {
      Et = i;
    }
  }, yu = function(n, r, i) {
    switch (r) {
      case "input":
        if (Cr(n, i), r = i.name, i.type === "radio" && r != null) {
          for (i = n; i.parentNode; )
            i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < i.length; r++) {
            var o = i[r];
            if (o !== n && o.form === n.form) {
              var f = be(o);
              if (!f)
                throw Error(g(90));
              Re(o), Cr(o, f);
            }
          }
        }
        break;
      case "textarea":
        ca(n, i);
        break;
      case "select":
        r = i.value, r != null && sa(n, !!i.multiple, r, !1);
    }
  }, Up = Al, zp = Na;
  var jm = { usingClientEntryPoint: !1, Events: [mo, nl, be, as, is, Al] }, Fl = { findFiberByHostInstance: zr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Vm = { bundleType: Fl.bundleType, version: Fl.version, rendererPackageName: Fl.rendererPackageName, rendererConfig: Fl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: We.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Hp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Fl.findFiberByHostInstance || sh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fc.isDisabled && Fc.supportsFiber)
      try {
        Kl = Fc.inject(Vm), au = Fc;
      } catch {
      }
  }
  return eu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm, eu.createPortal = function(n, r) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bd(r))
      throw Error(g(200));
    return ih(n, r, null, i);
  }, eu.createRoot = function(n, r) {
    if (!bd(n))
      throw Error(g(299));
    var i = !1, o = "", f = _d;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Dc(n, 1, !1, null, null, i, !1, o, f), n[ju] = r.current, tl(n.nodeType === 8 ? n.parentNode : n), new Ec(r);
  }, eu.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(g(188)) : (n = Object.keys(n).join(","), Error(g(268, n)));
    return n = Hp(r), n = n === null ? null : n.stateNode, n;
  }, eu.flushSync = function(n) {
    return Na(n);
  }, eu.hydrate = function(n, r, i) {
    if (!Ac(r))
      throw Error(g(200));
    return Sc(null, n, r, !0, i);
  }, eu.hydrateRoot = function(n, r, i) {
    if (!bd(n))
      throw Error(g(405));
    var o = i != null && i.hydratedSources || null, f = !1, p = "", D = _d;
    if (i != null && (i.unstable_strictMode === !0 && (f = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (D = i.onRecoverableError)), r = lh(r, null, n, 1, i ?? null, f, !1, p, D), n[ju] = r.current, tl(n), o)
      for (n = 0; n < o.length; n++)
        i = o[n], f = i._getVersion, f = f(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, f] : r.mutableSourceEagerHydrationData.push(
          i,
          f
        );
    return new Xu(r);
  }, eu.render = function(n, r, i) {
    if (!Ac(r))
      throw Error(g(200));
    return Sc(null, n, r, !1, i);
  }, eu.unmountComponentAtNode = function(n) {
    if (!Ac(n))
      throw Error(g(40));
    return n._reactRootContainer ? (Na(function() {
      Sc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ju] = null;
      });
    }), !0) : !1;
  }, eu.unstable_batchedUpdates = Al, eu.unstable_renderSubtreeIntoContainer = function(n, r, i, o) {
    if (!Ac(i))
      throw Error(g(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(g(38));
    return Sc(n, r, i, !1, o);
  }, eu.version = "18.2.0-next-9e3b772b8-20220608", eu;
}
var tu = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PA;
function I3() {
  return PA || (PA = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = gS, v = DS(), g = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function F(e) {
      S = e;
    }
    function R(e) {
      if (!S) {
        for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          u[a - 1] = arguments[a];
        q("warn", e, u);
      }
    }
    function y(e) {
      if (!S) {
        for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          u[a - 1] = arguments[a];
        q("error", e, u);
      }
    }
    function q(e, t, u) {
      {
        var a = g.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (t += "%s", u = u.concat([l]));
        var s = u.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var K = 0, G = 1, Ve = 2, re = 3, M = 4, W = 5, ue = 6, Z = 7, ne = 8, Ct = 9, ct = 10, Ge = 11, We = 12, de = 13, Y = 14, Oe = 15, le = 16, _t = 17, ht = 18, pe = 19, Zt = 21, Xe = 22, ut = 23, Tn = 24, Pe = 25, zn = !0, ie = !1, Te = !1, ce = !1, Ze = !1, ft = !0, mn = !1, at = !1, Tt = !0, _ = !0, L = !0, me = /* @__PURE__ */ new Set(), $ = {}, P = {};
    function fe(e, t) {
      Re(e, t), Re(e + "Capture", t);
    }
    function Re(e, t) {
      $[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), $[e] = t;
      {
        var u = e.toLowerCase();
        P[u] = e, e === "onDoubleClick" && (P.ondblclick = e);
      }
      for (var a = 0; a < t.length; a++)
        me.add(t[a]);
    }
    var it = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qe = Object.prototype.hasOwnProperty;
    function yt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, u = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function en(e) {
      try {
        return Cr(e), !1;
      } catch {
        return !0;
      }
    }
    function Cr(e) {
      return "" + e;
    }
    function Ou(e, t) {
      if (en(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), Cr(e);
    }
    function $i(e) {
      if (en(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), Cr(e);
    }
    function Ya(e, t) {
      if (en(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), Cr(e);
    }
    function sa(e, t) {
      if (en(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yt(e)), Cr(e);
    }
    function Ka(e) {
      if (en(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), Cr(e);
    }
    function nu(e) {
      if (en(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", yt(e)), Cr(e);
    }
    var ca = 0, mu = 1, fa = 2, ar = 3, ru = 4, Il = 5, da = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", et = new RegExp("^[" + ve + "][" + Ne + "]*$"), xt = {}, Wt = {};
    function Hn(e) {
      return qe.call(Wt, e) ? !0 : qe.call(xt, e) ? !1 : et.test(e) ? (Wt[e] = !0, !0) : (xt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function on(e, t, u) {
      return t !== null ? t.type === ca : u ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Or(e, t, u, a) {
      if (u !== null && u.type === ca)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
            return !1;
          if (u !== null)
            return !u.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Vt(e, t, u, a) {
      if (t === null || typeof t > "u" || Or(e, t, u, a))
        return !0;
      if (a)
        return !1;
      if (u !== null)
        switch (u.type) {
          case ar:
            return !t;
          case ru:
            return t === !1;
          case Il:
            return isNaN(t);
          case da:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function yu(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function tn(e, t, u, a, l, s, d) {
      this.acceptsBooleans = t === fa || t === ar || t === ru, this.attributeName = a, this.attributeNamespace = l, this.mustUseProperty = u, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var It = {}, Mp = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Mp.forEach(function(e) {
      It[e] = new tn(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], u = e[1];
      It[t] = new tn(
        t,
        mu,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      It[e] = new tn(
        e,
        fa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      It[e] = new tn(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      It[e] = new tn(
        e,
        ar,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new tn(
        e,
        ar,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new tn(
        e,
        ru,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new tn(
        e,
        da,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      It[e] = new tn(
        e,
        Il,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var as = /[\-\:]([a-z])/g, is = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(as, is);
      It[t] = new tn(
        t,
        mu,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(as, is);
      It[t] = new tn(
        t,
        mu,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(as, is);
      It[t] = new tn(
        t,
        mu,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      It[e] = new tn(
        e,
        mu,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Up = "xlinkHref";
    It[Up] = new tn(
      "xlinkHref",
      mu,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      It[e] = new tn(
        e,
        mu,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var zp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ls = !1;
    function sf(e) {
      !ls && zp.test(e) && (ls = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Gl(e, t, u, a) {
      if (a.mustUseProperty) {
        var l = a.propertyName;
        return e[l];
      } else {
        Ou(u, t), a.sanitizeURL && sf("" + u);
        var s = a.attributeName, d = null;
        if (a.type === ru) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : Vt(t, u, a, !1) ? h : h === "" + u ? u : h;
          }
        } else if (e.hasAttribute(s)) {
          if (Vt(t, u, a, !1))
            return e.getAttribute(s);
          if (a.type === ar)
            return u;
          d = e.getAttribute(s);
        }
        return Vt(t, u, a, !1) ? d === null ? u : d : d === "" + u ? u : d;
      }
    }
    function os(e, t, u, a) {
      {
        if (!Hn(t))
          return;
        if (!e.hasAttribute(t))
          return u === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Ou(u, t), l === "" + u ? u : l;
      }
    }
    function Wa(e, t, u, a) {
      var l = yu(t);
      if (!on(t, l, a)) {
        if (Vt(t, u, l, a) && (u = null), a || l === null) {
          if (Hn(t)) {
            var s = t;
            u === null ? e.removeAttribute(s) : (Ou(u, t), e.setAttribute(s, "" + u));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var h = l.propertyName;
          if (u === null) {
            var m = l.type;
            e[h] = m === ar ? !1 : "";
          } else
            e[h] = u;
          return;
        }
        var C = l.attributeName, E = l.attributeNamespace;
        if (u === null)
          e.removeAttribute(C);
        else {
          var B = l.type, x;
          B === ar || B === ru && u === !0 ? x = "" : (Ou(u, C), x = "" + u, l.sanitizeURL && sf(x.toString())), E ? e.setAttributeNS(E, C, x) : e.setAttribute(C, x);
        }
      }
    }
    var Pi = Symbol.for("react.element"), uu = Symbol.for("react.portal"), Nu = Symbol.for("react.fragment"), ji = Symbol.for("react.strict_mode"), Ql = Symbol.for("react.profiler"), cf = Symbol.for("react.provider"), ff = Symbol.for("react.context"), Vi = Symbol.for("react.forward_ref"), gu = Symbol.for("react.suspense"), Yl = Symbol.for("react.suspense_list"), Ii = Symbol.for("react.memo"), Kn = Symbol.for("react.lazy"), Hp = Symbol.for("react.scope"), $p = Symbol.for("react.debug_trace_mode"), df = Symbol.for("react.offscreen"), Pp = Symbol.for("react.legacy_hidden"), nm = Symbol.for("react.cache"), rm = Symbol.for("react.tracing_marker"), Gt = Symbol.iterator, um = "@@iterator";
    function Lu(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Gt && e[Gt] || e[um];
      return typeof t == "function" ? t : null;
    }
    var tt = Object.assign, pa = 0, jp, pf, Kl, au, Vp, Nr, Ip;
    function Gp() {
    }
    Gp.__reactDisabledLog = !0;
    function am() {
      {
        if (pa === 0) {
          jp = console.log, pf = console.info, Kl = console.warn, au = console.error, Vp = console.group, Nr = console.groupCollapsed, Ip = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Gp,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        pa++;
      }
    }
    function ss() {
      {
        if (pa--, pa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, e, {
              value: jp
            }),
            info: tt({}, e, {
              value: pf
            }),
            warn: tt({}, e, {
              value: Kl
            }),
            error: tt({}, e, {
              value: au
            }),
            group: tt({}, e, {
              value: Vp
            }),
            groupCollapsed: tt({}, e, {
              value: Nr
            }),
            groupEnd: tt({}, e, {
              value: Ip
            })
          });
        }
        pa < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gi = g.ReactCurrentDispatcher, qa;
    function iu(e, t, u) {
      {
        if (qa === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            qa = a && a[1] || "";
          }
        return `
` + qa + e;
      }
    }
    var vf = !1, cs;
    {
      var hf = typeof WeakMap == "function" ? WeakMap : Map;
      cs = new hf();
    }
    function fs(e, t) {
      if (!e || vf)
        return "";
      {
        var u = cs.get(e);
        if (u !== void 0)
          return u;
      }
      var a;
      vf = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gi.current, Gi.current = null, am();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (z) {
              a = z;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (z) {
              a = z;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            a = z;
          }
          e();
        }
      } catch (z) {
        if (z && a && typeof z.stack == "string") {
          for (var h = z.stack.split(`
`), m = a.stack.split(`
`), C = h.length - 1, E = m.length - 1; C >= 1 && E >= 0 && h[C] !== m[E]; )
            E--;
          for (; C >= 1 && E >= 0; C--, E--)
            if (h[C] !== m[E]) {
              if (C !== 1 || E !== 1)
                do
                  if (C--, E--, E < 0 || h[C] !== m[E]) {
                    var B = `
` + h[C].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && cs.set(e, B), B;
                  }
                while (C >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        vf = !1, Gi.current = s, ss(), Error.prepareStackTrace = l;
      }
      var x = e ? e.displayName || e.name : "", U = x ? iu(x) : "";
      return typeof e == "function" && cs.set(e, U), U;
    }
    function mf(e, t, u) {
      return fs(e, !0);
    }
    function Xa(e, t, u) {
      return fs(e, !1);
    }
    function im(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Wl(e, t, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fs(e, im(e));
      if (typeof e == "string")
        return iu(e);
      switch (e) {
        case gu:
          return iu("Suspense");
        case Yl:
          return iu("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Vi:
            return Xa(e.render);
          case Ii:
            return Wl(e.type, t, u);
          case Kn: {
            var a = e, l = a._payload, s = a._init;
            try {
              return Wl(s(l), t, u);
            } catch {
            }
          }
        }
      return "";
    }
    function Et(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case W:
          return iu(e.type);
        case le:
          return iu("Lazy");
        case de:
          return iu("Suspense");
        case pe:
          return iu("SuspenseList");
        case K:
        case Ve:
        case Oe:
          return Xa(e.type);
        case Ge:
          return Xa(e.type.render);
        case G:
          return mf(e.type);
        default:
          return "";
      }
    }
    function yf(e) {
      try {
        var t = "", u = e;
        do
          t += Et(u), u = u.return;
        while (u);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function Qp(e, t, u) {
      var a = e.displayName;
      if (a)
        return a;
      var l = t.displayName || t.name || "";
      return l !== "" ? u + "(" + l + ")" : u;
    }
    function ds(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Nu:
          return "Fragment";
        case uu:
          return "Portal";
        case Ql:
          return "Profiler";
        case ji:
          return "StrictMode";
        case gu:
          return "Suspense";
        case Yl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ff:
            var t = e;
            return ds(t) + ".Consumer";
          case cf:
            var u = e;
            return ds(u._context) + ".Provider";
          case Vi:
            return Qp(e, e.render, "ForwardRef");
          case Ii:
            var a = e.displayName || null;
            return a !== null ? a : Rt(e.type) || "Memo";
          case Kn: {
            var l = e, s = l._payload, d = l._init;
            try {
              return Rt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Yp(e, t, u) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? u + "(" + a + ")" : u);
    }
    function gf(e) {
      return e.displayName || "Context";
    }
    function Qe(e) {
      var t = e.tag, u = e.type;
      switch (t) {
        case Tn:
          return "Cache";
        case Ct:
          var a = u;
          return gf(a) + ".Consumer";
        case ct:
          var l = u;
          return gf(l._context) + ".Provider";
        case ht:
          return "DehydratedFragment";
        case Ge:
          return Yp(u, u.render, "ForwardRef");
        case Z:
          return "Fragment";
        case W:
          return u;
        case M:
          return "Portal";
        case re:
          return "Root";
        case ue:
          return "Text";
        case le:
          return Rt(u);
        case ne:
          return u === ji ? "StrictMode" : "Mode";
        case Xe:
          return "Offscreen";
        case We:
          return "Profiler";
        case Zt:
          return "Scope";
        case de:
          return "Suspense";
        case pe:
          return "SuspenseList";
        case Pe:
          return "TracingMarker";
        case G:
        case K:
        case _t:
        case Ve:
        case Y:
        case Oe:
          if (typeof u == "function")
            return u.displayName || u.name || null;
          if (typeof u == "string")
            return u;
          break;
      }
      return null;
    }
    var ql = g.ReactDebugCurrentFrame, nn = null, Lr = !1;
    function Mr() {
      {
        if (nn === null)
          return null;
        var e = nn._debugOwner;
        if (e !== null && typeof e < "u")
          return Qe(e);
      }
      return null;
    }
    function Xl() {
      return nn === null ? "" : yf(nn);
    }
    function sn() {
      ql.getCurrentStack = null, nn = null, Lr = !1;
    }
    function At(e) {
      ql.getCurrentStack = e === null ? null : Xl, nn = e, Lr = !1;
    }
    function lm() {
      return nn;
    }
    function lu(e) {
      Lr = e;
    }
    function $n(e) {
      return "" + e;
    }
    function va(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return nu(e), e;
        default:
          return "";
      }
    }
    var Kp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Qi(e, t) {
      Kp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Df(e) {
      var t = e.type, u = e.nodeName;
      return u && u.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Wp(e) {
      return e._valueTracker;
    }
    function Jl(e) {
      e._valueTracker = null;
    }
    function Zl(e) {
      var t = "";
      return e && (Df(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Yi(e) {
      var t = Df(e) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      nu(e[t]);
      var a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof u > "u" || typeof u.get != "function" || typeof u.set != "function")) {
        var l = u.get, s = u.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(h) {
            nu(h), a = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: u.enumerable
        });
        var d = {
          getValue: function() {
            return a;
          },
          setValue: function(h) {
            nu(h), a = "" + h;
          },
          stopTracking: function() {
            Jl(e), delete e[t];
          }
        };
        return d;
      }
    }
    function Ja(e) {
      Wp(e) || (e._valueTracker = Yi(e));
    }
    function qp(e) {
      if (!e)
        return !1;
      var t = Wp(e);
      if (!t)
        return !0;
      var u = t.getValue(), a = Zl(e);
      return a !== u ? (t.setValue(a), !0) : !1;
    }
    function ps(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var vs = !1, eo = !1, hs = !1, Cf = !1;
    function Mu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function to(e, t) {
      var u = e, a = t.checked, l = tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? u._wrapperState.initialChecked
      });
      return l;
    }
    function no(e, t) {
      Qi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eo && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), eo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !vs && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), vs = !0);
      var u = e, a = t.defaultValue == null ? "" : t.defaultValue;
      u._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: va(t.value != null ? t.value : a),
        controlled: Mu(t)
      };
    }
    function Ef(e, t) {
      var u = e, a = t.checked;
      a != null && Wa(u, "checked", a, !1);
    }
    function Ki(e, t) {
      var u = e;
      {
        var a = Mu(t);
        !u._wrapperState.controlled && a && !Cf && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cf = !0), u._wrapperState.controlled && !a && !hs && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), hs = !0);
      }
      Ef(e, t);
      var l = va(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && u.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        u.value != l) && (u.value = $n(l)) : u.value !== $n(l) && (u.value = $n(l));
      else if (s === "submit" || s === "reset") {
        u.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ha(u, t.type, l) : t.hasOwnProperty("defaultValue") && ha(u, t.type, va(t.defaultValue)), t.checked == null && t.defaultChecked != null && (u.defaultChecked = !!t.defaultChecked);
    }
    function ro(e, t, u) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = $n(a._wrapperState.initialValue);
        u || d !== a.value && (a.value = d), a.defaultValue = d;
      }
      var h = a.name;
      h !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, h !== "" && (a.name = h);
    }
    function Xp(e, t) {
      var u = e;
      Ki(u, t), Er(u, t);
    }
    function Er(e, t) {
      var u = t.name;
      if (t.type === "radio" && u != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        Ou(u, "name");
        for (var l = a.querySelectorAll("input[name=" + JSON.stringify("" + u) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var h = Rh(d);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            qp(d), Ki(d, h);
          }
        }
      }
    }
    function ha(e, t, u) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ps(e.ownerDocument) !== e) && (u == null ? e.defaultValue = $n(e._wrapperState.initialValue) : e.defaultValue !== $n(u) && (e.defaultValue = $n(u)));
    }
    var ms = !1, Wi = !1, Jp = !1;
    function ys(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(u) {
        u != null && (typeof u == "string" || typeof u == "number" || Wi || (Wi = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Jp || (Jp = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ms && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ms = !0);
    }
    function Af(e, t) {
      t.value != null && e.setAttribute("value", $n(va(t.value)));
    }
    var uo = Array.isArray;
    function yn(e) {
      return uo(e);
    }
    var gs;
    gs = !1;
    function Zp() {
      var e = Mr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ev = ["value", "defaultValue"];
    function om(e) {
      {
        Qi("select", e);
        for (var t = 0; t < ev.length; t++) {
          var u = ev[t];
          if (e[u] != null) {
            var a = yn(e[u]);
            e.multiple && !a ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", u, Zp()) : !e.multiple && a && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", u, Zp());
          }
        }
      }
    }
    function ma(e, t, u, a) {
      var l = e.options;
      if (t) {
        for (var s = u, d = {}, h = 0; h < s.length; h++)
          d["$" + s[h]] = !0;
        for (var m = 0; m < l.length; m++) {
          var C = d.hasOwnProperty("$" + l[m].value);
          l[m].selected !== C && (l[m].selected = C), C && a && (l[m].defaultSelected = !0);
        }
      } else {
        for (var E = $n(va(u)), B = null, x = 0; x < l.length; x++) {
          if (l[x].value === E) {
            l[x].selected = !0, a && (l[x].defaultSelected = !0);
            return;
          }
          B === null && !l[x].disabled && (B = l[x]);
        }
        B !== null && (B.selected = !0);
      }
    }
    function Sf(e, t) {
      return tt({}, t, {
        value: void 0
      });
    }
    function tv(e, t) {
      var u = e;
      om(t), u._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !gs && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), gs = !0);
    }
    function sm(e, t) {
      var u = e;
      u.multiple = !!t.multiple;
      var a = t.value;
      a != null ? ma(u, !!t.multiple, a, !1) : t.defaultValue != null && ma(u, !!t.multiple, t.defaultValue, !0);
    }
    function cm(e, t) {
      var u = e, a = u._wrapperState.wasMultiple;
      u._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ma(u, !!t.multiple, l, !1) : a !== !!t.multiple && (t.defaultValue != null ? ma(u, !!t.multiple, t.defaultValue, !0) : ma(u, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function fm(e, t) {
      var u = e, a = t.value;
      a != null && ma(u, !!t.multiple, a, !1);
    }
    var Ff = !1;
    function Tf(e, t) {
      var u = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $n(u._wrapperState.initialValue)
      });
      return a;
    }
    function nv(e, t) {
      var u = e;
      Qi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ff && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), Ff = !0);
      var a = t.value;
      if (a == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (yn(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), a = s;
      }
      u._wrapperState = {
        initialValue: va(a)
      };
    }
    function rv(e, t) {
      var u = e, a = va(t.value), l = va(t.defaultValue);
      if (a != null) {
        var s = $n(a);
        s !== u.value && (u.value = s), t.defaultValue == null && u.defaultValue !== s && (u.defaultValue = s);
      }
      l != null && (u.defaultValue = $n(l));
    }
    function uv(e, t) {
      var u = e, a = u.textContent;
      a === u._wrapperState.initialValue && a !== "" && a !== null && (u.value = a);
    }
    function xf(e, t) {
      rv(e, t);
    }
    var Uu = "http://www.w3.org/1999/xhtml", dm = "http://www.w3.org/1998/Math/MathML", Rf = "http://www.w3.org/2000/svg";
    function Ds(e) {
      switch (e) {
        case "svg":
          return Rf;
        case "math":
          return dm;
        default:
          return Uu;
      }
    }
    function wf(e, t) {
      return e == null || e === Uu ? Ds(t) : e === Rf && t === "foreignObject" ? Uu : e;
    }
    var pm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, u, a, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, u, a, l);
        });
      } : e;
    }, Cs, av = pm(function(e, t) {
      if (e.namespaceURI === Rf && !("innerHTML" in e)) {
        Cs = Cs || document.createElement("div"), Cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var u = Cs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; u.firstChild; )
          e.appendChild(u.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ir = 1, zu = 3, rn = 8, ou = 9, Za = 11, Es = function(e, t) {
      if (t) {
        var u = e.firstChild;
        if (u && u === e.lastChild && u.nodeType === zu) {
          u.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, iv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, qi = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qi).forEach(function(e) {
      ov.forEach(function(t) {
        qi[lv(t, e)] = qi[e];
      });
    });
    function As(e, t, u) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !u && typeof t == "number" && t !== 0 && !(qi.hasOwnProperty(e) && qi[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var Xi = /([A-Z])/g, vm = /^ms-/;
    function hm(e) {
      return e.replace(Xi, "-$1").toLowerCase().replace(vm, "-ms-");
    }
    var sv = function() {
    };
    {
      var cv = /^(?:webkit|moz|o)[A-Z]/, fv = /^-ms-/, ao = /-(.)/g, Ji = /;\s*$/, Zi = {}, el = {}, dv = !1, Bf = !1, _f = function(e) {
        return e.replace(ao, function(t, u) {
          return u.toUpperCase();
        });
      }, bf = function(e) {
        Zi.hasOwnProperty(e) && Zi[e] || (Zi[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          _f(e.replace(fv, "ms-"))
        ));
      }, pv = function(e) {
        Zi.hasOwnProperty(e) && Zi[e] || (Zi[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        el.hasOwnProperty(t) && el[t] || (el[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ji, "")));
      }, hv = function(e, t) {
        dv || (dv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mm = function(e, t) {
        Bf || (Bf = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? bf(e) : cv.test(e) ? pv(e) : Ji.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mm(e, t));
      };
    }
    var ym = sv;
    function gm(e) {
      {
        var t = "", u = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var l = e[a];
            if (l != null) {
              var s = a.indexOf("--") === 0;
              t += u + (s ? a : hm(a)) + ":", t += As(a, l, s), u = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var u = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var l = a.indexOf("--") === 0;
          l || ym(a, t[a]);
          var s = As(a, t[a], l);
          a === "float" && (a = "cssFloat"), l ? u.setProperty(a, s) : u[a] = s;
        }
    }
    function Dm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ur(e) {
      var t = {};
      for (var u in e)
        for (var a = iv[u] || [u], l = 0; l < a.length; l++)
          t[a[l]] = u;
      return t;
    }
    function io(e, t) {
      {
        if (!t)
          return;
        var u = Ur(e), a = Ur(t), l = {};
        for (var s in u) {
          var d = u[s], h = a[s];
          if (h && d !== h) {
            var m = d + "," + h;
            if (l[m])
              continue;
            l[m] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Dm(e[d]) ? "Removing" : "Updating", d, h);
          }
        }
      }
    }
    var yv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, gv = tt({
      menuitem: !0
    }, yv), Dv = "__html";
    function Ss(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Dv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Hu(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Fs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Cv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, su = {}, kf = new RegExp("^(aria)-[" + Ne + "]*$"), lo = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function Of(e, t) {
      {
        if (qe.call(su, t) && su[t])
          return !0;
        if (lo.test(t)) {
          var u = "aria-" + t.slice(4).toLowerCase(), a = Cv.hasOwnProperty(u) ? u : null;
          if (a == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), su[t] = !0, !0;
          if (t !== a)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), su[t] = !0, !0;
        }
        if (kf.test(t)) {
          var l = t.toLowerCase(), s = Cv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return su[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), su[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ev(e, t) {
      {
        var u = [];
        for (var a in t) {
          var l = Of(e, a);
          l || u.push(a);
        }
        var s = u.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        u.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : u.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ts(e, t) {
      Hu(e, t) || Ev(e, t);
    }
    var ei = !1;
    function Nf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ei && (ei = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Lf = function() {
    };
    {
      var gn = {}, Mf = /^on./, Av = /^on[^A-Z]/, Sv = new RegExp("^(aria)-[" + Ne + "]*$"), Fv = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      Lf = function(e, t, u, a) {
        if (qe.call(gn, t) && gn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), gn[t] = !0, !0;
        if (a != null) {
          var s = a.registrationNameDependencies, d = a.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = d.hasOwnProperty(l) ? d[l] : null;
          if (h != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, h), gn[t] = !0, !0;
          if (Mf.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), gn[t] = !0, !0;
        } else if (Mf.test(t))
          return Av.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), gn[t] = !0, !0;
        if (Sv.test(t) || Fv.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), gn[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), gn[t] = !0, !0;
        if (l === "is" && u !== null && u !== void 0 && typeof u != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof u), gn[t] = !0, !0;
        if (typeof u == "number" && isNaN(u))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), gn[t] = !0, !0;
        var m = yu(t), C = m !== null && m.type === ca;
        if (Fs.hasOwnProperty(l)) {
          var E = Fs[l];
          if (E !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, E), gn[t] = !0, !0;
        } else if (!C && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), gn[t] = !0, !0;
        return typeof u == "boolean" && Or(t, u, m, !1) ? (u ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', u, t, t, u, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', u, t, t, u, t, t, t), gn[t] = !0, !0) : C ? !0 : Or(t, u, m, !1) ? (gn[t] = !0, !1) : ((u === "false" || u === "true") && m !== null && m.type === ar && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", u, t, u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, u), gn[t] = !0), !0);
      };
    }
    var Tv = function(e, t, u) {
      {
        var a = [];
        for (var l in t) {
          var s = Lf(e, l, t[l], u);
          s || a.push(l);
        }
        var d = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : a.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function xv(e, t, u) {
      Hu(e, t) || Tv(e, t, u);
    }
    var $u = 1, oo = 2, ti = 4, Cm = $u | oo | ti, so = null;
    function co(e) {
      so !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), so = e;
    }
    function Em() {
      so === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), so = null;
    }
    function Rv(e) {
      return e === so;
    }
    function xs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === zu ? t.parentNode : t;
    }
    var wt = null, ya = null, Pu = null;
    function tl(e) {
      var t = Rl(e);
      if (t) {
        if (typeof wt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var u = t.stateNode;
        if (u) {
          var a = Rh(u);
          wt(t.stateNode, t.type, a);
        }
      }
    }
    function wv(e) {
      wt = e;
    }
    function Rs(e) {
      ya ? Pu ? Pu.push(e) : Pu = [e] : ya = e;
    }
    function fo() {
      return ya !== null || Pu !== null;
    }
    function po() {
      if (ya) {
        var e = ya, t = Pu;
        if (ya = null, Pu = null, tl(e), t)
          for (var u = 0; u < t.length; u++)
            tl(t[u]);
      }
    }
    var ni = function(e, t) {
      return e(t);
    }, Uf = function() {
    }, zf = !1;
    function Am() {
      var e = fo();
      e && (Uf(), po());
    }
    function Hf(e, t, u) {
      if (zf)
        return e(t, u);
      zf = !0;
      try {
        return ni(e, t, u);
      } finally {
        zf = !1, Am();
      }
    }
    function ws(e, t, u) {
      ni = e, Uf = u;
    }
    function Bs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function $f(e, t, u) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(u.disabled && Bs(t));
        default:
          return !1;
      }
    }
    function ri(e, t) {
      var u = e.stateNode;
      if (u === null)
        return null;
      var a = Rh(u);
      if (a === null)
        return null;
      var l = a[t];
      if ($f(t, e.type, a))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var vo = !1;
    if (it)
      try {
        var ui = {};
        Object.defineProperty(ui, "passive", {
          get: function() {
            vo = !0;
          }
        }), window.addEventListener("test", ui, ui), window.removeEventListener("test", ui, ui);
      } catch {
        vo = !1;
      }
    function Bv(e, t, u, a, l, s, d, h, m) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(u, C);
      } catch (E) {
        this.onError(E);
      }
    }
    var Pf = Bv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var jf = document.createElement("react");
      Pf = function(t, u, a, l, s, d, h, m, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), B = !1, x = !0, U = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          jf.removeEventListener(V, ke, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function ke() {
          B = !0, j(), u.apply(a, De), x = !1;
        }
        var Be, st = !1, rt = !1;
        function k(O) {
          if (Be = O.error, st = !0, Be === null && O.colno === 0 && O.lineno === 0 && (rt = !0), O.defaultPrevented && Be != null && typeof Be == "object")
            try {
              Be._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), jf.addEventListener(V, ke, !1), E.initEvent(V, !1, !1), jf.dispatchEvent(E), z && Object.defineProperty(window, "event", z), B && x && (st ? rt && (Be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Be)), window.removeEventListener("error", k), !B)
          return j(), Bv.apply(this, arguments);
      };
    }
    var Sm = Pf, ga = !1, cu = null, ho = !1, Da = null, Du = {
      onError: function(e) {
        ga = !0, cu = e;
      }
    };
    function ai(e, t, u, a, l, s, d, h, m) {
      ga = !1, cu = null, Sm.apply(Du, arguments);
    }
    function ju(e, t, u, a, l, s, d, h, m) {
      if (ai.apply(this, arguments), ga) {
        var C = If();
        ho || (ho = !0, Da = C);
      }
    }
    function Vf() {
      if (ho) {
        var e = Da;
        throw ho = !1, Da = null, e;
      }
    }
    function Fm() {
      return ga;
    }
    function If() {
      if (ga) {
        var e = cu;
        return ga = !1, cu = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zr(e) {
      return e._reactInternals;
    }
    function mo(e) {
      return e._reactInternals !== void 0;
    }
    function nl(e, t) {
      e._reactInternals = t;
    }
    var be = (
      /*                      */
      0
    ), Ca = (
      /*                */
      1
    ), bt = (
      /*                    */
      2
    ), Ye = (
      /*                       */
      4
    ), mt = (
      /*                */
      16
    ), gt = (
      /*                 */
      32
    ), Cu = (
      /*                     */
      64
    ), He = (
      /*                   */
      128
    ), Qt = (
      /*            */
      256
    ), lr = (
      /*                          */
      512
    ), Hr = (
      /*                     */
      1024
    ), Mt = (
      /*                      */
      2048
    ), $r = (
      /*                    */
      4096
    ), Ea = (
      /*                   */
      8192
    ), yo = (
      /*             */
      16384
    ), _s = Mt | Ye | Cu | lr | Hr | yo, _v = (
      /*               */
      32767
    ), Ar = (
      /*                   */
      32768
    ), Dn = (
      /*                */
      65536
    ), go = (
      /* */
      131072
    ), Gf = (
      /*                       */
      1048576
    ), Qf = (
      /*                    */
      2097152
    ), or = (
      /*                 */
      4194304
    ), Aa = (
      /*                */
      8388608
    ), sr = (
      /*               */
      16777216
    ), ii = (
      /*              */
      33554432
    ), rl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ye | Hr | 0
    ), cr = bt | Ye | mt | gt | lr | $r | Ea, Pn = Ye | Cu | lr | Ea, Pr = Mt | mt, xn = or | Aa | Qf, Vu = g.ReactCurrentOwner;
    function Sr(e) {
      var t = e, u = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.flags & (bt | $r)) !== be && (u = t.return), a = t.return;
        while (a);
      }
      return t.tag === re ? u : null;
    }
    function Yf(e) {
      if (e.tag === de) {
        var t = e.memoizedState;
        if (t === null) {
          var u = e.alternate;
          u !== null && (t = u.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function bs(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function Kf(e) {
      return Sr(e) === e;
    }
    function Fr(e) {
      {
        var t = Vu.current;
        if (t !== null && t.tag === G) {
          var u = t, a = u.stateNode;
          a._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qe(u) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var l = zr(e);
      return l ? Sr(l) === l : !1;
    }
    function fr(e) {
      if (Sr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function kt(e) {
      var t = e.alternate;
      if (!t) {
        var u = Sr(e);
        if (u === null)
          throw new Error("Unable to find node on an unmounted component.");
        return u !== e ? null : e;
      }
      for (var a = e, l = t; ; ) {
        var s = a.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var h = s.return;
          if (h !== null) {
            a = l = h;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var m = s.child; m; ) {
            if (m === a)
              return fr(s), e;
            if (m === l)
              return fr(s), t;
            m = m.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== l.return)
          a = s, l = d;
        else {
          for (var C = !1, E = s.child; E; ) {
            if (E === a) {
              C = !0, a = s, l = d;
              break;
            }
            if (E === l) {
              C = !0, l = s, a = d;
              break;
            }
            E = E.sibling;
          }
          if (!C) {
            for (E = d.child; E; ) {
              if (E === a) {
                C = !0, a = d, l = s;
                break;
              }
              if (E === l) {
                C = !0, l = d, a = s;
                break;
              }
              E = E.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== re)
        throw new Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function jr(e) {
      var t = kt(e);
      return t !== null ? Wf(t) : null;
    }
    function Wf(e) {
      if (e.tag === W || e.tag === ue)
        return e;
      for (var t = e.child; t !== null; ) {
        var u = Wf(t);
        if (u !== null)
          return u;
        t = t.sibling;
      }
      return null;
    }
    function bv(e) {
      var t = kt(e);
      return t !== null ? ks(t) : null;
    }
    function ks(e) {
      if (e.tag === W || e.tag === ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== M) {
          var u = ks(t);
          if (u !== null)
            return u;
        }
        t = t.sibling;
      }
      return null;
    }
    var Os = v.unstable_scheduleCallback, kv = v.unstable_cancelCallback, Ns = v.unstable_shouldYield, Ov = v.unstable_requestPaint, zt = v.unstable_now, qf = v.unstable_getCurrentPriorityLevel, Ls = v.unstable_ImmediatePriority, Tr = v.unstable_UserBlockingPriority, Eu = v.unstable_NormalPriority, Ms = v.unstable_LowPriority, Sa = v.unstable_IdlePriority, Xf = v.unstable_yieldValue, Jf = v.unstable_setDisableYieldValue, Fa = null, Cn = null, oe = null, qt = !1, Rn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Zf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Tt && (e = tt({}, e, {
          getLaneLabelMap: xa,
          injectProfilingHooks: Gu
        })), Fa = t.inject(e), Cn = t;
      } catch (u) {
        y("React instrumentation encountered an error: %s.", u);
      }
      return !!t.checkDCE;
    }
    function Nv(e, t) {
      if (Cn && typeof Cn.onScheduleFiberRoot == "function")
        try {
          Cn.onScheduleFiberRoot(Fa, e, t);
        } catch (u) {
          qt || (qt = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Iu(e, t) {
      if (Cn && typeof Cn.onCommitFiberRoot == "function")
        try {
          var u = (e.current.flags & He) === He;
          if (_) {
            var a;
            switch (t) {
              case jn:
                a = Ls;
                break;
              case wn:
                a = Tr;
                break;
              case Yu:
                a = Eu;
                break;
              case Ro:
                a = Sa;
                break;
              default:
                a = Eu;
                break;
            }
            Cn.onCommitFiberRoot(Fa, e, a, u);
          }
        } catch (l) {
          qt || (qt = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function Ta(e) {
      if (Cn && typeof Cn.onPostCommitFiberRoot == "function")
        try {
          Cn.onPostCommitFiberRoot(Fa, e);
        } catch (t) {
          qt || (qt = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ed(e) {
      if (Cn && typeof Cn.onCommitFiberUnmount == "function")
        try {
          Cn.onCommitFiberUnmount(Fa, e);
        } catch (t) {
          qt || (qt = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function cn(e) {
      if (typeof Xf == "function" && (Jf(e), F(e)), Cn && typeof Cn.setStrictMode == "function")
        try {
          Cn.setStrictMode(Fa, e);
        } catch (t) {
          qt || (qt = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Gu(e) {
      oe = e;
    }
    function xa() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, u = 0; u < Ot; u++) {
          var a = Tm(t);
          e.set(t, a), t *= 2;
        }
        return e;
      }
    }
    function Us(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function td() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function Ra(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function li() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Lv(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function nd() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function zs(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Mv() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function Uv(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function zv() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function Hs(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function ul() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function $s(e, t, u) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, u);
    }
    function Hv(e, t, u) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, u);
    }
    function $v(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function al() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Pv(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function Do() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function fu(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function Co() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function il() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function oi(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function rd(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function wa(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var Le = (
      /*                         */
      0
    ), Je = (
      /*                 */
      1
    ), Me = (
      /*                    */
      2
    ), Ht = (
      /*               */
      8
    ), Vr = (
      /*              */
      16
    ), Ps = Math.clz32 ? Math.clz32 : si, js = Math.log, ud = Math.LN2;
    function si(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (js(t) / ud | 0) | 0;
    }
    var Ot = 31, I = (
      /*                        */
      0
    ), lt = (
      /*                          */
      0
    ), Ue = (
      /*                        */
      1
    ), Au = (
      /*    */
      2
    ), xr = (
      /*             */
      4
    ), ci = (
      /*            */
      8
    ), Nt = (
      /*                     */
      16
    ), fi = (
      /*                */
      32
    ), Ba = (
      /*                       */
      4194240
    ), di = (
      /*                        */
      64
    ), Ir = (
      /*                        */
      128
    ), dr = (
      /*                        */
      256
    ), pi = (
      /*                        */
      512
    ), Eo = (
      /*                        */
      1024
    ), Ao = (
      /*                        */
      2048
    ), Vs = (
      /*                        */
      4096
    ), Is = (
      /*                        */
      8192
    ), Gs = (
      /*                        */
      16384
    ), Qs = (
      /*                       */
      32768
    ), Ys = (
      /*                       */
      65536
    ), Ks = (
      /*                       */
      131072
    ), Ws = (
      /*                       */
      262144
    ), qs = (
      /*                       */
      524288
    ), vi = (
      /*                       */
      1048576
    ), Xs = (
      /*                       */
      2097152
    ), hi = (
      /*                            */
      130023424
    ), Qu = (
      /*                             */
      4194304
    ), Js = (
      /*                             */
      8388608
    ), So = (
      /*                             */
      16777216
    ), Zs = (
      /*                             */
      33554432
    ), ec = (
      /*                             */
      67108864
    ), ad = Qu, ll = (
      /*          */
      134217728
    ), tc = (
      /*                          */
      268435455
    ), ol = (
      /*               */
      268435456
    ), _a = (
      /*                        */
      536870912
    ), pr = (
      /*                   */
      1073741824
    );
    function Tm(e) {
      {
        if (e & Ue)
          return "Sync";
        if (e & Au)
          return "InputContinuousHydration";
        if (e & xr)
          return "InputContinuous";
        if (e & ci)
          return "DefaultHydration";
        if (e & Nt)
          return "Default";
        if (e & fi)
          return "TransitionHydration";
        if (e & Ba)
          return "Transition";
        if (e & hi)
          return "Retry";
        if (e & ll)
          return "SelectiveHydration";
        if (e & ol)
          return "IdleHydration";
        if (e & _a)
          return "Idle";
        if (e & pr)
          return "Offscreen";
      }
    }
    var Bt = -1, nc = di, rc = Qu;
    function sl(e) {
      switch (un(e)) {
        case Ue:
          return Ue;
        case Au:
          return Au;
        case xr:
          return xr;
        case ci:
          return ci;
        case Nt:
          return Nt;
        case fi:
          return fi;
        case di:
        case Ir:
        case dr:
        case pi:
        case Eo:
        case Ao:
        case Vs:
        case Is:
        case Gs:
        case Qs:
        case Ys:
        case Ks:
        case Ws:
        case qs:
        case vi:
        case Xs:
          return e & Ba;
        case Qu:
        case Js:
        case So:
        case Zs:
        case ec:
          return e & hi;
        case ll:
          return ll;
        case ol:
          return ol;
        case _a:
          return _a;
        case pr:
          return pr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Fo(e, t) {
      var u = e.pendingLanes;
      if (u === I)
        return I;
      var a = I, l = e.suspendedLanes, s = e.pingedLanes, d = u & tc;
      if (d !== I) {
        var h = d & ~l;
        if (h !== I)
          a = sl(h);
        else {
          var m = d & s;
          m !== I && (a = sl(m));
        }
      } else {
        var C = u & ~l;
        C !== I ? a = sl(C) : s !== I && (a = sl(s));
      }
      if (a === I)
        return I;
      if (t !== I && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === I) {
        var E = un(a), B = un(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= B || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === Nt && (B & Ba) !== I
        )
          return t;
      }
      (a & xr) !== I && (a |= u & Nt);
      var x = e.entangledLanes;
      if (x !== I)
        for (var U = e.entanglements, z = a & x; z > 0; ) {
          var j = ba(z), De = 1 << j;
          a |= U[j], z &= ~De;
        }
      return a;
    }
    function jv(e, t) {
      for (var u = e.eventTimes, a = Bt; t > 0; ) {
        var l = ba(t), s = 1 << l, d = u[l];
        d > a && (a = d), t &= ~s;
      }
      return a;
    }
    function uc(e, t) {
      switch (e) {
        case Ue:
        case Au:
        case xr:
          return t + 250;
        case ci:
        case Nt:
        case fi:
        case di:
        case Ir:
        case dr:
        case pi:
        case Eo:
        case Ao:
        case Vs:
        case Is:
        case Gs:
        case Qs:
        case Ys:
        case Ks:
        case Ws:
        case qs:
        case vi:
        case Xs:
          return t + 5e3;
        case Qu:
        case Js:
        case So:
        case Zs:
        case ec:
          return Bt;
        case ll:
        case ol:
        case _a:
        case pr:
          return Bt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Bt;
      }
    }
    function xm(e, t) {
      for (var u = e.pendingLanes, a = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = u; d > 0; ) {
        var h = ba(d), m = 1 << h, C = s[h];
        C === Bt ? ((m & a) === I || (m & l) !== I) && (s[h] = uc(m, t)) : C <= t && (e.expiredLanes |= m), d &= ~m;
      }
    }
    function Rm(e) {
      return sl(e.pendingLanes);
    }
    function id(e) {
      var t = e.pendingLanes & ~pr;
      return t !== I ? t : t & pr ? pr : I;
    }
    function cl(e) {
      return (e & Ue) !== I;
    }
    function To(e) {
      return (e & tc) !== I;
    }
    function ac(e) {
      return (e & hi) === e;
    }
    function wm(e) {
      var t = Ue | xr | Nt;
      return (e & t) === I;
    }
    function Vv(e) {
      return (e & Ba) === e;
    }
    function xo(e, t) {
      var u = Au | xr | ci | Nt;
      return (t & u) !== I;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function ld(e) {
      return (e & Ba) !== I;
    }
    function od() {
      var e = nc;
      return nc <<= 1, (nc & Ba) === I && (nc = di), e;
    }
    function Bm() {
      var e = rc;
      return rc <<= 1, (rc & hi) === I && (rc = Qu), e;
    }
    function un(e) {
      return e & -e;
    }
    function fn(e) {
      return un(e);
    }
    function ba(e) {
      return 31 - Ps(e);
    }
    function ic(e) {
      return ba(e);
    }
    function vr(e, t) {
      return (e & t) !== I;
    }
    function mi(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function fl(e, t) {
      return e & ~t;
    }
    function sd(e, t) {
      return e & t;
    }
    function Gv(e) {
      return e;
    }
    function Qv(e, t) {
      return e !== lt && e < t ? e : t;
    }
    function lc(e) {
      for (var t = [], u = 0; u < Ot; u++)
        t.push(e);
      return t;
    }
    function yi(e, t, u) {
      e.pendingLanes |= t, t !== _a && (e.suspendedLanes = I, e.pingedLanes = I);
      var a = e.eventTimes, l = ic(t);
      a[l] = u;
    }
    function cd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var u = e.expirationTimes, a = t; a > 0; ) {
        var l = ba(a), s = 1 << l;
        u[l] = Bt, a &= ~s;
      }
    }
    function fd(e, t, u) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function dd(e, t) {
      var u = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = u; d > 0; ) {
        var h = ba(d), m = 1 << h;
        a[h] = I, l[h] = Bt, s[h] = Bt, d &= ~m;
      }
    }
    function dl(e, t) {
      for (var u = e.entangledLanes |= t, a = e.entanglements, l = u; l; ) {
        var s = ba(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[s] & t && (a[s] |= t), l &= ~d;
      }
    }
    function _m(e, t) {
      var u = un(t), a;
      switch (u) {
        case xr:
          a = Au;
          break;
        case Nt:
          a = ci;
          break;
        case di:
        case Ir:
        case dr:
        case pi:
        case Eo:
        case Ao:
        case Vs:
        case Is:
        case Gs:
        case Qs:
        case Ys:
        case Ks:
        case Ws:
        case qs:
        case vi:
        case Xs:
        case Qu:
        case Js:
        case So:
        case Zs:
        case ec:
          a = fi;
          break;
        case _a:
          a = ol;
          break;
        default:
          a = lt;
          break;
      }
      return (a & (e.suspendedLanes | t)) !== lt ? lt : a;
    }
    function pd(e, t, u) {
      if (Rn)
        for (var a = e.pendingUpdatersLaneMap; u > 0; ) {
          var l = ic(u), s = 1 << l, d = a[l];
          d.add(t), u &= ~s;
        }
    }
    function oc(e, t) {
      if (Rn)
        for (var u = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var l = ic(t), s = 1 << l, d = u[l];
          d.size > 0 && (d.forEach(function(h) {
            var m = h.alternate;
            (m === null || !a.has(m)) && a.add(h);
          }), d.clear()), t &= ~s;
        }
    }
    function vd(e, t) {
      return null;
    }
    var jn = Ue, wn = xr, Yu = Nt, Ro = _a, gi = lt;
    function Gr() {
      return gi;
    }
    function dn(e) {
      gi = e;
    }
    function wo(e, t) {
      var u = gi;
      try {
        return gi = e, t();
      } finally {
        gi = u;
      }
    }
    function Vn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function bm(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function hd(e, t) {
      return e !== 0 && e < t;
    }
    function Bo(e) {
      var t = un(e);
      return hd(jn, t) ? hd(wn, t) ? To(t) ? Yu : Ro : wn : jn;
    }
    function pn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Yv;
    function Ee(e) {
      Yv = e;
    }
    function pl(e) {
      Yv(e);
    }
    var _o;
    function Kv(e) {
      _o = e;
    }
    var Wv;
    function bo(e) {
      Wv = e;
    }
    var ko;
    function md(e) {
      ko = e;
    }
    var yd;
    function qv(e) {
      yd = e;
    }
    var sc = !1, vl = [], Su = null, Ut = null, En = null, Qr = /* @__PURE__ */ new Map(), hl = /* @__PURE__ */ new Map(), Ku = [], du = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Xv(e) {
      return du.indexOf(e) > -1;
    }
    function Fu(e, t, u, a, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: u,
        nativeEvent: l,
        targetContainers: [a]
      };
    }
    function Jv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Su = null;
          break;
        case "dragenter":
        case "dragleave":
          Ut = null;
          break;
        case "mouseover":
        case "mouseout":
          En = null;
          break;
        case "pointerover":
        case "pointerout": {
          var u = t.pointerId;
          Qr.delete(u);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var a = t.pointerId;
          hl.delete(a);
          break;
        }
      }
    }
    function ml(e, t, u, a, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Fu(t, u, a, l, s);
        if (t !== null) {
          var h = Rl(t);
          h !== null && _o(h);
        }
        return d;
      }
      e.eventSystemFlags |= a;
      var m = e.targetContainers;
      return l !== null && m.indexOf(l) === -1 && m.push(l), e;
    }
    function Zv(e, t, u, a, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Su = ml(Su, e, t, u, a, s), !0;
        }
        case "dragenter": {
          var d = l;
          return Ut = ml(Ut, e, t, u, a, d), !0;
        }
        case "mouseover": {
          var h = l;
          return En = ml(En, e, t, u, a, h), !0;
        }
        case "pointerover": {
          var m = l, C = m.pointerId;
          return Qr.set(C, ml(Qr.get(C) || null, e, t, u, a, m)), !0;
        }
        case "gotpointercapture": {
          var E = l, B = E.pointerId;
          return hl.set(B, ml(hl.get(B) || null, e, t, u, a, E)), !0;
        }
      }
      return !1;
    }
    function gd(e) {
      var t = Po(e.target);
      if (t !== null) {
        var u = Sr(t);
        if (u !== null) {
          var a = u.tag;
          if (a === de) {
            var l = Yf(u);
            if (l !== null) {
              e.blockedOn = l, yd(e.priority, function() {
                Wv(u);
              });
              return;
            }
          } else if (a === re) {
            var s = u.stateNode;
            if (pn(s)) {
              e.blockedOn = bs(u);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function eh(e) {
      for (var t = ko(), u = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < Ku.length && hd(t, Ku[a].priority); a++)
        ;
      Ku.splice(a, 0, u), a === 0 && gd(u);
    }
    function cc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var u = t[0], a = Di(e.domEventName, e.eventSystemFlags, u, e.nativeEvent);
        if (a === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          co(s), l.target.dispatchEvent(s), Em();
        } else {
          var d = Rl(a);
          return d !== null && _o(d), e.blockedOn = a, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Oo(e, t, u) {
      cc(e) && u.delete(t);
    }
    function Dd() {
      sc = !1, Su !== null && cc(Su) && (Su = null), Ut !== null && cc(Ut) && (Ut = null), En !== null && cc(En) && (En = null), Qr.forEach(Oo), hl.forEach(Oo);
    }
    function In(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sc || (sc = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Dd)));
    }
    function nt(e) {
      if (vl.length > 0) {
        In(vl[0], e);
        for (var t = 1; t < vl.length; t++) {
          var u = vl[t];
          u.blockedOn === e && (u.blockedOn = null);
        }
      }
      Su !== null && In(Su, e), Ut !== null && In(Ut, e), En !== null && In(En, e);
      var a = function(h) {
        return In(h, e);
      };
      Qr.forEach(a), hl.forEach(a);
      for (var l = 0; l < Ku.length; l++) {
        var s = Ku[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ku.length > 0; ) {
        var d = Ku[0];
        if (d.blockedOn !== null)
          break;
        gd(d), d.blockedOn === null && Ku.shift();
      }
    }
    var $t = g.ReactCurrentBatchConfig, Yt = !0;
    function An(e) {
      Yt = !!e;
    }
    function Rr() {
      return Yt;
    }
    function yl(e, t, u) {
      var a = Wn(t), l;
      switch (a) {
        case jn:
          l = vn;
          break;
        case wn:
          l = No;
          break;
        case Yu:
        default:
          l = Wu;
          break;
      }
      return l.bind(null, t, u, e);
    }
    function vn(e, t, u, a) {
      var l = Gr(), s = $t.transition;
      $t.transition = null;
      try {
        dn(jn), Wu(e, t, u, a);
      } finally {
        dn(l), $t.transition = s;
      }
    }
    function No(e, t, u, a) {
      var l = Gr(), s = $t.transition;
      $t.transition = null;
      try {
        dn(wn), Wu(e, t, u, a);
      } finally {
        dn(l), $t.transition = s;
      }
    }
    function Wu(e, t, u, a) {
      Yt && fc(e, t, u, a);
    }
    function fc(e, t, u, a) {
      var l = Di(e, t, u, a);
      if (l === null) {
        Xm(e, t, a, gl, u), Jv(e, a);
        return;
      }
      if (Zv(l, e, t, u, a)) {
        a.stopPropagation();
        return;
      }
      if (Jv(e, a), t & ti && Xv(e)) {
        for (; l !== null; ) {
          var s = Rl(l);
          s !== null && pl(s);
          var d = Di(e, t, u, a);
          if (d === null && Xm(e, t, a, gl, u), d === l)
            break;
          l = d;
        }
        l !== null && a.stopPropagation();
        return;
      }
      Xm(e, t, a, null, u);
    }
    var gl = null;
    function Di(e, t, u, a) {
      gl = null;
      var l = xs(a), s = Po(l);
      if (s !== null) {
        var d = Sr(s);
        if (d === null)
          s = null;
        else {
          var h = d.tag;
          if (h === de) {
            var m = Yf(d);
            if (m !== null)
              return m;
            s = null;
          } else if (h === re) {
            var C = d.stateNode;
            if (pn(C))
              return bs(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return gl = s, null;
    }
    function Wn(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return jn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return wn;
        case "message": {
          var t = qf();
          switch (t) {
            case Ls:
              return jn;
            case Tr:
              return wn;
            case Eu:
            case Ms:
              return Yu;
            case Sa:
              return Ro;
            default:
              return Yu;
          }
        }
        default:
          return Yu;
      }
    }
    function Cd(e, t, u) {
      return e.addEventListener(t, u, !1), u;
    }
    function Dl(e, t, u) {
      return e.addEventListener(t, u, !0), u;
    }
    function qu(e, t, u, a) {
      return e.addEventListener(t, u, {
        capture: !0,
        passive: a
      }), u;
    }
    function dc(e, t, u, a) {
      return e.addEventListener(t, u, {
        passive: a
      }), u;
    }
    var Ci = null, Tu = null, ka = null;
    function Oa(e) {
      return Ci = e, Tu = vc(), !0;
    }
    function pc() {
      Ci = null, Tu = null, ka = null;
    }
    function Cl() {
      if (ka)
        return ka;
      var e, t = Tu, u = t.length, a, l = vc(), s = l.length;
      for (e = 0; e < u && t[e] === l[e]; e++)
        ;
      var d = u - e;
      for (a = 1; a <= d && t[u - a] === l[s - a]; a++)
        ;
      var h = a > 1 ? 1 - a : void 0;
      return ka = l.slice(e, h), ka;
    }
    function vc() {
      return "value" in Ci ? Ci.value : Ci.textContent;
    }
    function Ei(e) {
      var t, u = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && u === 13 && (t = 13)) : t = u, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ai() {
      return !0;
    }
    function Gn() {
      return !1;
    }
    function an(e) {
      function t(u, a, l, s, d) {
        this._reactName = u, this._targetInst = l, this.type = a, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var m = e[h];
            m ? this[h] = m(s) : this[h] = s[h];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Ai : this.isDefaultPrevented = Gn, this.isPropagationStopped = Gn, this;
      }
      return tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ai);
        },
        stopPropagation: function() {
          var u = this.nativeEvent;
          u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ai);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Ai
      }), t;
    }
    var Qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Yn = an(Qn), El = tt({}, Qn, {
      view: 0,
      detail: 0
    }), Ed = an(El), Lo, Ad, Yr;
    function th(e) {
      e !== Yr && (Yr && e.type === "mousemove" ? (Lo = e.screenX - Yr.screenX, Ad = e.screenY - Yr.screenY) : (Lo = 0, Ad = 0), Yr = e);
    }
    var Al = tt({}, El, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (th(e), Lo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ad;
      }
    }), Na = an(Al), Sd = tt({}, Al, {
      dataTransfer: 0
    }), Si = an(Sd), nh = tt({}, El, {
      relatedTarget: 0
    }), hc = an(nh), Fd = tt({}, Qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), mc = an(Fd), km = tt({}, Qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Om = an(km), rh = tt({}, Qn, {
      data: 0
    }), Td = an(rh), Fi = Td, Nm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Sl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function uh(e) {
      if (e.key) {
        var t = Nm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var u = Ei(e);
        return u === 13 ? "Enter" : String.fromCharCode(u);
      }
      return e.type === "keydown" || e.type === "keyup" ? Sl[e.keyCode] || "Unidentified" : "";
    }
    var Kt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Lm(e) {
      var t = this, u = t.nativeEvent;
      if (u.getModifierState)
        return u.getModifierState(e);
      var a = Kt[e];
      return a ? !!u[a] : !1;
    }
    function yc(e) {
      return Lm;
    }
    var Mm = tt({}, El, {
      key: uh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ei(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ei(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Um = an(Mm), ah = tt({}, Al, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), xd = an(ah), zm = tt({}, El, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yc
    }), Kr = an(zm), Rd = tt({}, Qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Hm = an(Rd), La = tt({}, Al, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), gc = an(La), Ti = [9, 13, 27, 32], Mo = 229, Uo = it && "CompositionEvent" in window, xi = null;
    it && "documentMode" in document && (xi = document.documentMode);
    var $m = it && "TextEvent" in window && !xi, Dc = it && (!Uo || xi && xi > 8 && xi <= 11), ih = 32, wd = String.fromCharCode(ih);
    function lh() {
      fe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), fe("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), fe("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), fe("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var zo = !1;
    function Cc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function oh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Bd(e, t) {
      return e === "keydown" && t.keyCode === Mo;
    }
    function sh(e, t) {
      switch (e) {
        case "keyup":
          return Ti.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Mo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function _d(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ec(e) {
      return e.locale === "ko";
    }
    var Xu = !1;
    function bd(e, t, u, a, l) {
      var s, d;
      if (Uo ? s = oh(t) : Xu ? sh(t, a) && (s = "onCompositionEnd") : Bd(t, a) && (s = "onCompositionStart"), !s)
        return null;
      Dc && !Ec(a) && (!Xu && s === "onCompositionStart" ? Xu = Oa(l) : s === "onCompositionEnd" && Xu && (d = Cl()));
      var h = vh(u, s);
      if (h.length > 0) {
        var m = new Td(s, t, null, a, l);
        if (e.push({
          event: m,
          listeners: h
        }), d)
          m.data = d;
        else {
          var C = _d(a);
          C !== null && (m.data = C);
        }
      }
    }
    function Ac(e, t) {
      switch (e) {
        case "compositionend":
          return _d(t);
        case "keypress":
          var u = t.which;
          return u !== ih ? null : (zo = !0, wd);
        case "textInput":
          var a = t.data;
          return a === wd && zo ? null : a;
        default:
          return null;
      }
    }
    function ch(e, t) {
      if (Xu) {
        if (e === "compositionend" || !Uo && sh(e, t)) {
          var u = Cl();
          return pc(), Xu = !1, u;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Cc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Dc && !Ec(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Pm(e, t, u, a, l) {
      var s;
      if ($m ? s = Ac(t, a) : s = ch(t, a), !s)
        return null;
      var d = vh(u, "onBeforeInput");
      if (d.length > 0) {
        var h = new Fi("onBeforeInput", "beforeinput", null, a, l);
        e.push({
          event: h,
          listeners: d
        }), h.data = s;
      }
    }
    function Sc(e, t, u, a, l, s, d) {
      bd(e, t, u, a, l), Pm(e, t, u, a, l);
    }
    var jm = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Fl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!jm[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Vm(e) {
      if (!it)
        return !1;
      var t = "on" + e, u = t in document;
      if (!u) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), u = typeof a[t] == "function";
      }
      return u;
    }
    function Fc() {
      fe("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, u, a) {
      Rs(a);
      var l = vh(t, "onChange");
      if (l.length > 0) {
        var s = new Yn("onChange", "change", null, u, a);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var r = null, i = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function f(e) {
      var t = [];
      n(t, i, e, xs(e)), Hf(p, t);
    }
    function p(e) {
      hD(e, 0);
    }
    function D(e) {
      var t = _c(e);
      if (qp(t))
        return e;
    }
    function A(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    it && (T = Vm("input") && (!document.documentMode || document.documentMode > 9));
    function H(e, t) {
      r = e, i = t, r.attachEvent("onpropertychange", ee);
    }
    function J() {
      r && (r.detachEvent("onpropertychange", ee), r = null, i = null);
    }
    function ee(e) {
      e.propertyName === "value" && D(i) && f(e);
    }
    function X(e, t, u) {
      e === "focusin" ? (J(), H(t, u)) : e === "focusout" && J();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return D(i);
    }
    function Ae(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function xe(e, t) {
      if (e === "click")
        return D(t);
    }
    function Xt(e, t) {
      if (e === "input" || e === "change")
        return D(t);
    }
    function b(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ha(e, "number", e.value);
    }
    function w(e, t, u, a, l, s, d) {
      var h = u ? _c(u) : window, m, C;
      if (o(h) ? m = A : Fl(h) ? T ? m = Xt : (m = ye, C = X) : Ae(h) && (m = xe), m) {
        var E = m(t, u);
        if (E) {
          n(e, E, a, l);
          return;
        }
      }
      C && C(t, h, u), t === "focusout" && b(h);
    }
    function N() {
      Re("onMouseEnter", ["mouseout", "mouseover"]), Re("onMouseLeave", ["mouseout", "mouseover"]), Re("onPointerEnter", ["pointerout", "pointerover"]), Re("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ae(e, t, u, a, l, s, d) {
      var h = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout";
      if (h && !Rv(a)) {
        var C = a.relatedTarget || a.fromElement;
        if (C && (Po(C) || Gd(C)))
          return;
      }
      if (!(!m && !h)) {
        var E;
        if (l.window === l)
          E = l;
        else {
          var B = l.ownerDocument;
          B ? E = B.defaultView || B.parentWindow : E = window;
        }
        var x, U;
        if (m) {
          var z = a.relatedTarget || a.toElement;
          if (x = u, U = z ? Po(z) : null, U !== null) {
            var j = Sr(U);
            (U !== j || U.tag !== W && U.tag !== ue) && (U = null);
          }
        } else
          x = null, U = u;
        if (x !== U) {
          var De = Na, ke = "onMouseLeave", Be = "onMouseEnter", st = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = xd, ke = "onPointerLeave", Be = "onPointerEnter", st = "pointer");
          var rt = x == null ? E : _c(x), k = U == null ? E : _c(U), V = new De(ke, st + "leave", x, a, l);
          V.target = rt, V.relatedTarget = k;
          var O = null, te = Po(l);
          if (te === u) {
            var Ce = new De(Be, st + "enter", U, a, l);
            Ce.target = k, Ce.relatedTarget = rt, O = Ce;
          }
          CF(e, V, O, x, U);
        }
      }
    }
    function we(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : we;
    function _e(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var u = Object.keys(e), a = Object.keys(t);
      if (u.length !== a.length)
        return !1;
      for (var l = 0; l < u.length; l++) {
        var s = u[l];
        if (!qe.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function $e(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Sn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function dt(e, t) {
      for (var u = $e(e), a = 0, l = 0; u; ) {
        if (u.nodeType === zu) {
          if (l = a + u.textContent.length, a <= t && l >= t)
            return {
              node: u,
              offset: t - a
            };
          a = l;
        }
        u = $e(Sn(u));
      }
    }
    function Ma(e) {
      var t = e.ownerDocument, u = t && t.defaultView || window, a = u.getSelection && u.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var l = a.anchorNode, s = a.anchorOffset, d = a.focusNode, h = a.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return Im(e, l, s, d, h);
    }
    function Im(e, t, u, a, l) {
      var s = 0, d = -1, h = -1, m = 0, C = 0, E = e, B = null;
      e:
        for (; ; ) {
          for (var x = null; E === t && (u === 0 || E.nodeType === zu) && (d = s + u), E === a && (l === 0 || E.nodeType === zu) && (h = s + l), E.nodeType === zu && (s += E.nodeValue.length), (x = E.firstChild) !== null; )
            B = E, E = x;
          for (; ; ) {
            if (E === e)
              break e;
            if (B === t && ++m === u && (d = s), B === a && ++C === l && (h = s), (x = E.nextSibling) !== null)
              break;
            E = B, B = E.parentNode;
          }
          E = x;
        }
      return d === -1 || h === -1 ? null : {
        start: d,
        end: h
      };
    }
    function tF(e, t) {
      var u = e.ownerDocument || document, a = u && u.defaultView || window;
      if (a.getSelection) {
        var l = a.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), h = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > h) {
          var m = h;
          h = d, d = m;
        }
        var C = dt(e, d), E = dt(e, h);
        if (C && E) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === E.node && l.focusOffset === E.offset)
            return;
          var B = u.createRange();
          B.setStart(C.node, C.offset), l.removeAllRanges(), d > h ? (l.addRange(B), l.extend(E.node, E.offset)) : (B.setEnd(E.node, E.offset), l.addRange(B));
        }
      }
    }
    function rD(e) {
      return e && e.nodeType === zu;
    }
    function uD(e, t) {
      return !e || !t ? !1 : e === t ? !0 : rD(e) ? !1 : rD(t) ? uD(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function nF(e) {
      return e && e.ownerDocument && uD(e.ownerDocument.documentElement, e);
    }
    function rF(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function aD() {
      for (var e = window, t = ps(); t instanceof e.HTMLIFrameElement; ) {
        if (rF(t))
          e = t.contentWindow;
        else
          return t;
        t = ps(e.document);
      }
      return t;
    }
    function Gm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function uF() {
      var e = aD();
      return {
        focusedElem: e,
        selectionRange: Gm(e) ? iF(e) : null
      };
    }
    function aF(e) {
      var t = aD(), u = e.focusedElem, a = e.selectionRange;
      if (t !== u && nF(u)) {
        a !== null && Gm(u) && lF(u, a);
        for (var l = [], s = u; s = s.parentNode; )
          s.nodeType === ir && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof u.focus == "function" && u.focus();
        for (var d = 0; d < l.length; d++) {
          var h = l[d];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function iF(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ma(e), t || {
        start: 0,
        end: 0
      };
    }
    function lF(e, t) {
      var u = t.start, a = t.end;
      a === void 0 && (a = u), "selectionStart" in e ? (e.selectionStart = u, e.selectionEnd = Math.min(a, e.value.length)) : tF(e, t);
    }
    var oF = it && "documentMode" in document && document.documentMode <= 11;
    function sF() {
      fe("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Tc = null, Qm = null, kd = null, Ym = !1;
    function cF(e) {
      if ("selectionStart" in e && Gm(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, u = t.getSelection();
      return {
        anchorNode: u.anchorNode,
        anchorOffset: u.anchorOffset,
        focusNode: u.focusNode,
        focusOffset: u.focusOffset
      };
    }
    function fF(e) {
      return e.window === e ? e.document : e.nodeType === ou ? e : e.ownerDocument;
    }
    function iD(e, t, u) {
      var a = fF(u);
      if (!(Ym || Tc == null || Tc !== ps(a))) {
        var l = cF(Tc);
        if (!kd || !_e(kd, l)) {
          kd = l;
          var s = vh(Qm, "onSelect");
          if (s.length > 0) {
            var d = new Yn("onSelect", "select", null, t, u);
            e.push({
              event: d,
              listeners: s
            }), d.target = Tc;
          }
        }
      }
    }
    function dF(e, t, u, a, l, s, d) {
      var h = u ? _c(u) : window;
      switch (t) {
        case "focusin":
          (Fl(h) || h.contentEditable === "true") && (Tc = h, Qm = u, kd = null);
          break;
        case "focusout":
          Tc = null, Qm = null, kd = null;
          break;
        case "mousedown":
          Ym = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ym = !1, iD(e, a, l);
          break;
        case "selectionchange":
          if (oF)
            break;
        case "keydown":
        case "keyup":
          iD(e, a, l);
      }
    }
    function fh(e, t) {
      var u = {};
      return u[e.toLowerCase()] = t.toLowerCase(), u["Webkit" + e] = "webkit" + t, u["Moz" + e] = "moz" + t, u;
    }
    var xc = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, Km = {}, lD = {};
    it && (lD = document.createElement("div").style, "AnimationEvent" in window || (delete xc.animationend.animation, delete xc.animationiteration.animation, delete xc.animationstart.animation), "TransitionEvent" in window || delete xc.transitionend.transition);
    function dh(e) {
      if (Km[e])
        return Km[e];
      if (!xc[e])
        return e;
      var t = xc[e];
      for (var u in t)
        if (t.hasOwnProperty(u) && u in lD)
          return Km[e] = t[u];
      return e;
    }
    var oD = dh("animationend"), sD = dh("animationiteration"), cD = dh("animationstart"), fD = dh("transitionend"), dD = /* @__PURE__ */ new Map(), pD = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Tl(e, t) {
      dD.set(e, t), fe(t, [e]);
    }
    function pF() {
      for (var e = 0; e < pD.length; e++) {
        var t = pD[e], u = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        Tl(u, "on" + a);
      }
      Tl(oD, "onAnimationEnd"), Tl(sD, "onAnimationIteration"), Tl(cD, "onAnimationStart"), Tl("dblclick", "onDoubleClick"), Tl("focusin", "onFocus"), Tl("focusout", "onBlur"), Tl(fD, "onTransitionEnd");
    }
    function vF(e, t, u, a, l, s, d) {
      var h = dD.get(t);
      if (h !== void 0) {
        var m = Yn, C = t;
        switch (t) {
          case "keypress":
            if (Ei(a) === 0)
              return;
          case "keydown":
          case "keyup":
            m = Um;
            break;
          case "focusin":
            C = "focus", m = hc;
            break;
          case "focusout":
            C = "blur", m = hc;
            break;
          case "beforeblur":
          case "afterblur":
            m = hc;
            break;
          case "click":
            if (a.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Na;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Si;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Kr;
            break;
          case oD:
          case sD:
          case cD:
            m = mc;
            break;
          case fD:
            m = Hm;
            break;
          case "scroll":
            m = Ed;
            break;
          case "wheel":
            m = gc;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = xd;
            break;
        }
        var E = (s & ti) !== 0;
        {
          var B = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = gF(u, h, a.type, E, B);
          if (x.length > 0) {
            var U = new m(h, C, null, a, l);
            e.push({
              event: U,
              listeners: x
            });
          }
        }
      }
    }
    pF(), N(), Fc(), sF(), lh();
    function hF(e, t, u, a, l, s, d) {
      vF(e, t, u, a, l, s);
      var h = (s & Cm) === 0;
      h && (ae(e, t, u, a, l), w(e, t, u, a, l), dF(e, t, u, a, l), Sc(e, t, u, a, l));
    }
    var Od = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Wm = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Od));
    function vD(e, t, u) {
      var a = e.type || "unknown-event";
      e.currentTarget = u, ju(a, t, void 0, e), e.currentTarget = null;
    }
    function mF(e, t, u) {
      var a;
      if (u)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, h = s.currentTarget, m = s.listener;
          if (d !== a && e.isPropagationStopped())
            return;
          vD(e, m, h), a = d;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var E = t[C], B = E.instance, x = E.currentTarget, U = E.listener;
          if (B !== a && e.isPropagationStopped())
            return;
          vD(e, U, x), a = B;
        }
    }
    function hD(e, t) {
      for (var u = (t & ti) !== 0, a = 0; a < e.length; a++) {
        var l = e[a], s = l.event, d = l.listeners;
        mF(s, d, u);
      }
      Vf();
    }
    function yF(e, t, u, a, l) {
      var s = xs(u), d = [];
      hF(d, e, a, u, s, t), hD(d, t);
    }
    function Pt(e, t) {
      Wm.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var u = !1, a = YT(t), l = EF(e, u);
      a.has(l) || (mD(t, e, oo, u), a.add(l));
    }
    function qm(e, t, u) {
      Wm.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= ti), mD(u, e, a, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function Nd(e) {
      if (!e[ph]) {
        e[ph] = !0, me.forEach(function(u) {
          u !== "selectionchange" && (Wm.has(u) || qm(u, !1, e), qm(u, !0, e));
        });
        var t = e.nodeType === ou ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, qm("selectionchange", !1, t)));
      }
    }
    function mD(e, t, u, a, l) {
      var s = yl(e, t, u), d = void 0;
      vo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, a ? d !== void 0 ? qu(e, t, s, d) : Dl(e, t, s) : d !== void 0 ? dc(e, t, s, d) : Cd(e, t, s);
    }
    function yD(e, t) {
      return e === t || e.nodeType === rn && e.parentNode === t;
    }
    function Xm(e, t, u, a, l) {
      var s = a;
      if (!(t & $u) && !(t & oo)) {
        var d = l;
        if (a !== null) {
          var h = a;
          e:
            for (; ; ) {
              if (h === null)
                return;
              var m = h.tag;
              if (m === re || m === M) {
                var C = h.stateNode.containerInfo;
                if (yD(C, d))
                  break;
                if (m === M)
                  for (var E = h.return; E !== null; ) {
                    var B = E.tag;
                    if (B === re || B === M) {
                      var x = E.stateNode.containerInfo;
                      if (yD(x, d))
                        return;
                    }
                    E = E.return;
                  }
                for (; C !== null; ) {
                  var U = Po(C);
                  if (U === null)
                    return;
                  var z = U.tag;
                  if (z === W || z === ue) {
                    h = s = U;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              h = h.return;
            }
        }
      }
      Hf(function() {
        return yF(e, t, u, s);
      });
    }
    function Ld(e, t, u) {
      return {
        instance: e,
        listener: t,
        currentTarget: u
      };
    }
    function gF(e, t, u, a, l, s) {
      for (var d = t !== null ? t + "Capture" : null, h = a ? d : t, m = [], C = e, E = null; C !== null; ) {
        var B = C, x = B.stateNode, U = B.tag;
        if (U === W && x !== null && (E = x, h !== null)) {
          var z = ri(C, h);
          z != null && m.push(Ld(C, z, E));
        }
        if (l)
          break;
        C = C.return;
      }
      return m;
    }
    function vh(e, t) {
      for (var u = t + "Capture", a = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, h = s.tag;
        if (h === W && d !== null) {
          var m = d, C = ri(l, u);
          C != null && a.unshift(Ld(l, C, m));
          var E = ri(l, t);
          E != null && a.push(Ld(l, E, m));
        }
        l = l.return;
      }
      return a;
    }
    function Rc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== W);
      return e || null;
    }
    function DF(e, t) {
      for (var u = e, a = t, l = 0, s = u; s; s = Rc(s))
        l++;
      for (var d = 0, h = a; h; h = Rc(h))
        d++;
      for (; l - d > 0; )
        u = Rc(u), l--;
      for (; d - l > 0; )
        a = Rc(a), d--;
      for (var m = l; m--; ) {
        if (u === a || a !== null && u === a.alternate)
          return u;
        u = Rc(u), a = Rc(a);
      }
      return null;
    }
    function gD(e, t, u, a, l) {
      for (var s = t._reactName, d = [], h = u; h !== null && h !== a; ) {
        var m = h, C = m.alternate, E = m.stateNode, B = m.tag;
        if (C !== null && C === a)
          break;
        if (B === W && E !== null) {
          var x = E;
          if (l) {
            var U = ri(h, s);
            U != null && d.unshift(Ld(h, U, x));
          } else if (!l) {
            var z = ri(h, s);
            z != null && d.push(Ld(h, z, x));
          }
        }
        h = h.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function CF(e, t, u, a, l) {
      var s = a && l ? DF(a, l) : null;
      a !== null && gD(e, t, a, s, !1), l !== null && u !== null && gD(e, u, l, s, !0);
    }
    function EF(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Wr = !1, Md = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", xl = "suppressHydrationWarning", DD = "autoFocus", Ho = "children", $o = "style", mh = "__html", Jm, yh, Ud, CD, gh, ED, AD;
    Jm = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yh = function(e, t) {
      Ts(e, t), Nf(e, t), xv(e, t, {
        registrationNameDependencies: $,
        possibleRegistrationNames: P
      });
    }, ED = it && !document.documentMode, Ud = function(e, t, u) {
      if (!Wr) {
        var a = Dh(u), l = Dh(t);
        l !== a && (Wr = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(a)));
      }
    }, CD = function(e) {
      if (!Wr) {
        Wr = !0;
        var t = [];
        e.forEach(function(u) {
          t.push(u);
        }), y("Extra attributes from the server: %s", t);
      }
    }, gh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, AD = function(e, t) {
      var u = e.namespaceURI === Uu ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return u.innerHTML = t, u.innerHTML;
    };
    var AF = /\r\n?/g, SF = /\u0000|\uFFFD/g;
    function Dh(e) {
      Ka(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(AF, `
`).replace(SF, "");
    }
    function Ch(e, t, u, a) {
      var l = Dh(t), s = Dh(e);
      if (s !== l && (a && (Wr || (Wr = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), u && zn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function SD(e) {
      return e.nodeType === ou ? e : e.ownerDocument;
    }
    function FF() {
    }
    function Eh(e) {
      e.onclick = FF;
    }
    function TF(e, t, u, a, l) {
      for (var s in a)
        if (a.hasOwnProperty(s)) {
          var d = a[s];
          if (s === $o)
            d && Object.freeze(d), mv(t, d);
          else if (s === Md) {
            var h = d ? d[mh] : void 0;
            h != null && av(t, h);
          } else if (s === Ho)
            if (typeof d == "string") {
              var m = e !== "textarea" || d !== "";
              m && Es(t, d);
            } else
              typeof d == "number" && Es(t, "" + d);
          else
            s === hh || s === xl || s === DD || ($.hasOwnProperty(s) ? d != null && (typeof d != "function" && gh(s, d), s === "onScroll" && Pt("scroll", t)) : d != null && Wa(t, s, d, l));
        }
    }
    function xF(e, t, u, a) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === $o ? mv(e, d) : s === Md ? av(e, d) : s === Ho ? Es(e, d) : Wa(e, s, d, a);
      }
    }
    function RF(e, t, u, a) {
      var l, s = SD(u), d, h = a;
      if (h === Uu && (h = Ds(e)), h === Uu) {
        if (l = Hu(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var m = s.createElement("div");
          m.innerHTML = "<script><\/script>";
          var C = m.firstChild;
          d = m.removeChild(C);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var E = d;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        d = s.createElementNS(h, e);
      return h === Uu && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !qe.call(Jm, e) && (Jm[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function wF(e, t) {
      return SD(t).createTextNode(e);
    }
    function BF(e, t, u, a) {
      var l = Hu(t, u);
      yh(t, u);
      var s;
      switch (t) {
        case "dialog":
          Pt("cancel", e), Pt("close", e), s = u;
          break;
        case "iframe":
        case "object":
        case "embed":
          Pt("load", e), s = u;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < Od.length; d++)
            Pt(Od[d], e);
          s = u;
          break;
        case "source":
          Pt("error", e), s = u;
          break;
        case "img":
        case "image":
        case "link":
          Pt("error", e), Pt("load", e), s = u;
          break;
        case "details":
          Pt("toggle", e), s = u;
          break;
        case "input":
          no(e, u), s = to(e, u), Pt("invalid", e);
          break;
        case "option":
          ys(e, u), s = u;
          break;
        case "select":
          tv(e, u), s = Sf(e, u), Pt("invalid", e);
          break;
        case "textarea":
          nv(e, u), s = Tf(e, u), Pt("invalid", e);
          break;
        default:
          s = u;
      }
      switch (Ss(t, s), TF(t, e, a, s, l), t) {
        case "input":
          Ja(e), ro(e, u, !1);
          break;
        case "textarea":
          Ja(e), uv(e);
          break;
        case "option":
          Af(e, u);
          break;
        case "select":
          sm(e, u);
          break;
        default:
          typeof s.onClick == "function" && Eh(e);
          break;
      }
    }
    function _F(e, t, u, a, l) {
      yh(t, a);
      var s = null, d, h;
      switch (t) {
        case "input":
          d = to(e, u), h = to(e, a), s = [];
          break;
        case "select":
          d = Sf(e, u), h = Sf(e, a), s = [];
          break;
        case "textarea":
          d = Tf(e, u), h = Tf(e, a), s = [];
          break;
        default:
          d = u, h = a, typeof d.onClick != "function" && typeof h.onClick == "function" && Eh(e);
          break;
      }
      Ss(t, h);
      var m, C, E = null;
      for (m in d)
        if (!(h.hasOwnProperty(m) || !d.hasOwnProperty(m) || d[m] == null))
          if (m === $o) {
            var B = d[m];
            for (C in B)
              B.hasOwnProperty(C) && (E || (E = {}), E[C] = "");
          } else
            m === Md || m === Ho || m === hh || m === xl || m === DD || ($.hasOwnProperty(m) ? s || (s = []) : (s = s || []).push(m, null));
      for (m in h) {
        var x = h[m], U = d != null ? d[m] : void 0;
        if (!(!h.hasOwnProperty(m) || x === U || x == null && U == null))
          if (m === $o)
            if (x && Object.freeze(x), U) {
              for (C in U)
                U.hasOwnProperty(C) && (!x || !x.hasOwnProperty(C)) && (E || (E = {}), E[C] = "");
              for (C in x)
                x.hasOwnProperty(C) && U[C] !== x[C] && (E || (E = {}), E[C] = x[C]);
            } else
              E || (s || (s = []), s.push(m, E)), E = x;
          else if (m === Md) {
            var z = x ? x[mh] : void 0, j = U ? U[mh] : void 0;
            z != null && j !== z && (s = s || []).push(m, z);
          } else
            m === Ho ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(m, "" + x) : m === hh || m === xl || ($.hasOwnProperty(m) ? (x != null && (typeof x != "function" && gh(m, x), m === "onScroll" && Pt("scroll", e)), !s && U !== x && (s = [])) : (s = s || []).push(m, x));
      }
      return E && (io(E, h[$o]), (s = s || []).push($o, E)), s;
    }
    function bF(e, t, u, a, l) {
      u === "input" && l.type === "radio" && l.name != null && Ef(e, l);
      var s = Hu(u, a), d = Hu(u, l);
      switch (xF(e, t, s, d), u) {
        case "input":
          Ki(e, l);
          break;
        case "textarea":
          rv(e, l);
          break;
        case "select":
          cm(e, l);
          break;
      }
    }
    function kF(e) {
      {
        var t = e.toLowerCase();
        return Fs.hasOwnProperty(t) && Fs[t] || null;
      }
    }
    function OF(e, t, u, a, l, s, d) {
      var h, m;
      switch (h = Hu(t, u), yh(t, u), t) {
        case "dialog":
          Pt("cancel", e), Pt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Pt("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < Od.length; C++)
            Pt(Od[C], e);
          break;
        case "source":
          Pt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Pt("error", e), Pt("load", e);
          break;
        case "details":
          Pt("toggle", e);
          break;
        case "input":
          no(e, u), Pt("invalid", e);
          break;
        case "option":
          ys(e, u);
          break;
        case "select":
          tv(e, u), Pt("invalid", e);
          break;
        case "textarea":
          nv(e, u), Pt("invalid", e);
          break;
      }
      Ss(t, u);
      {
        m = /* @__PURE__ */ new Set();
        for (var E = e.attributes, B = 0; B < E.length; B++) {
          var x = E[B].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              m.add(E[B].name);
          }
        }
      }
      var U = null;
      for (var z in u)
        if (u.hasOwnProperty(z)) {
          var j = u[z];
          if (z === Ho)
            typeof j == "string" ? e.textContent !== j && (u[xl] !== !0 && Ch(e.textContent, j, s, d), U = [Ho, j]) : typeof j == "number" && e.textContent !== "" + j && (u[xl] !== !0 && Ch(e.textContent, j, s, d), U = [Ho, "" + j]);
          else if ($.hasOwnProperty(z))
            j != null && (typeof j != "function" && gh(z, j), z === "onScroll" && Pt("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var De = void 0, ke = h && mn ? null : yu(z);
            if (u[xl] !== !0) {
              if (!(z === hh || z === xl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === Md) {
                  var Be = e.innerHTML, st = j ? j[mh] : void 0;
                  if (st != null) {
                    var rt = AD(e, st);
                    rt !== Be && Ud(z, Be, rt);
                  }
                } else if (z === $o) {
                  if (m.delete(z), ED) {
                    var k = gm(j);
                    De = e.getAttribute("style"), k !== De && Ud(z, De, k);
                  }
                } else if (h && !mn)
                  m.delete(z.toLowerCase()), De = os(e, z, j), j !== De && Ud(z, De, j);
                else if (!on(z, ke, h) && !Vt(z, j, ke, h)) {
                  var V = !1;
                  if (ke !== null)
                    m.delete(ke.attributeName), De = Gl(e, z, j, ke);
                  else {
                    var O = a;
                    if (O === Uu && (O = Ds(t)), O === Uu)
                      m.delete(z.toLowerCase());
                    else {
                      var te = kF(z);
                      te !== null && te !== z && (V = !0, m.delete(te)), m.delete(z);
                    }
                    De = os(e, z, j);
                  }
                  var Ce = mn;
                  !Ce && j !== De && !V && Ud(z, De, j);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      m.size > 0 && u[xl] !== !0 && CD(m), t) {
        case "input":
          Ja(e), ro(e, u, !0);
          break;
        case "textarea":
          Ja(e), uv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof u.onClick == "function" && Eh(e);
          break;
      }
      return U;
    }
    function NF(e, t, u) {
      var a = e.nodeValue !== t;
      return a;
    }
    function Zm(e, t) {
      {
        if (Wr)
          return;
        Wr = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ey(e, t) {
      {
        if (Wr)
          return;
        Wr = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ty(e, t, u) {
      {
        if (Wr)
          return;
        Wr = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ny(e, t) {
      {
        if (t === "" || Wr)
          return;
        Wr = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function LF(e, t, u) {
      switch (t) {
        case "input":
          Xp(e, u);
          return;
        case "textarea":
          xf(e, u);
          return;
        case "select":
          fm(e, u);
          return;
      }
    }
    var zd = function() {
    }, Hd = function() {
    };
    {
      var MF = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], FD = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], UF = FD.concat(["button"]), zF = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], TD = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Hd = function(e, t) {
        var u = tt({}, e || TD), a = {
          tag: t
        };
        return FD.indexOf(t) !== -1 && (u.aTagInScope = null, u.buttonTagInScope = null, u.nobrTagInScope = null), UF.indexOf(t) !== -1 && (u.pTagInButtonScope = null), MF.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (u.listItemTagAutoclosing = null, u.dlItemTagAutoclosing = null), u.current = a, t === "form" && (u.formTag = a), t === "a" && (u.aTagInScope = a), t === "button" && (u.buttonTagInScope = a), t === "nobr" && (u.nobrTagInScope = a), t === "p" && (u.pTagInButtonScope = a), t === "li" && (u.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (u.dlItemTagAutoclosing = a), u;
      };
      var HF = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return zF.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, $F = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, xD = {};
      zd = function(e, t, u) {
        u = u || TD;
        var a = u.current, l = a && a.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = HF(e, l) ? null : a, d = s ? null : $F(e, u), h = s || d;
        if (h) {
          var m = h.tag, C = !!s + "|" + e + "|" + m;
          if (!xD[C]) {
            xD[C] = !0;
            var E = e, B = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", B = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var x = "";
              m === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, m, B, x);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, m);
          }
        }
      };
    }
    var Ah = "suppressHydrationWarning", Sh = "$", Fh = "/$", $d = "$?", Pd = "$!", PF = "style", ry = null, uy = null;
    function jF(e) {
      var t, u, a = e.nodeType;
      switch (a) {
        case ou:
        case Za: {
          t = a === ou ? "#document" : "#fragment";
          var l = e.documentElement;
          u = l ? l.namespaceURI : wf(null, "");
          break;
        }
        default: {
          var s = a === rn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, u = wf(d, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), m = Hd(null, h);
        return {
          namespace: u,
          ancestorInfo: m
        };
      }
    }
    function VF(e, t, u) {
      {
        var a = e, l = wf(a.namespace, t), s = Hd(a.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function V5(e) {
      return e;
    }
    function IF(e) {
      ry = Rr(), uy = uF();
      var t = null;
      return An(!1), t;
    }
    function GF(e) {
      aF(uy), An(ry), ry = null, uy = null;
    }
    function QF(e, t, u, a, l) {
      var s;
      {
        var d = a;
        if (zd(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, m = Hd(d.ancestorInfo, e);
          zd(null, h, m);
        }
        s = d.namespace;
      }
      var C = RF(e, t, u, s);
      return Id(l, C), dy(C, t), C;
    }
    function YF(e, t) {
      e.appendChild(t);
    }
    function KF(e, t, u, a, l) {
      switch (BF(e, t, u, a), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!u.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function WF(e, t, u, a, l, s) {
      {
        var d = s;
        if (typeof a.children != typeof u.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var h = "" + a.children, m = Hd(d.ancestorInfo, t);
          zd(null, h, m);
        }
      }
      return _F(e, t, u, a);
    }
    function ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function qF(e, t, u, a) {
      {
        var l = u;
        zd(null, e, l.ancestorInfo);
      }
      var s = wF(e, t);
      return Id(a, s), s;
    }
    function XF() {
      var e = window.event;
      return e === void 0 ? Yu : Wn(e.type);
    }
    var iy = typeof setTimeout == "function" ? setTimeout : void 0, JF = typeof clearTimeout == "function" ? clearTimeout : void 0, ly = -1, RD = typeof Promise == "function" ? Promise : void 0, ZF = typeof queueMicrotask == "function" ? queueMicrotask : typeof RD < "u" ? function(e) {
      return RD.resolve(null).then(e).catch(eT);
    } : iy;
    function eT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function tT(e, t, u, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && e.focus();
          return;
        case "img": {
          u.src && (e.src = u.src);
          return;
        }
      }
    }
    function nT(e, t, u, a, l, s) {
      bF(e, t, u, a, l), dy(e, l);
    }
    function wD(e) {
      Es(e, "");
    }
    function rT(e, t, u) {
      e.nodeValue = u;
    }
    function uT(e, t) {
      e.appendChild(t);
    }
    function aT(e, t) {
      var u;
      e.nodeType === rn ? (u = e.parentNode, u.insertBefore(t, e)) : (u = e, u.appendChild(t));
      var a = e._reactRootContainer;
      a == null && u.onclick === null && Eh(u);
    }
    function iT(e, t, u) {
      e.insertBefore(t, u);
    }
    function lT(e, t, u) {
      e.nodeType === rn ? e.parentNode.insertBefore(t, u) : e.insertBefore(t, u);
    }
    function oT(e, t) {
      e.removeChild(t);
    }
    function sT(e, t) {
      e.nodeType === rn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function oy(e, t) {
      var u = t, a = 0;
      do {
        var l = u.nextSibling;
        if (e.removeChild(u), l && l.nodeType === rn) {
          var s = l.data;
          if (s === Fh)
            if (a === 0) {
              e.removeChild(l), nt(t);
              return;
            } else
              a--;
          else
            (s === Sh || s === $d || s === Pd) && a++;
        }
        u = l;
      } while (u);
      nt(t);
    }
    function cT(e, t) {
      e.nodeType === rn ? oy(e.parentNode, t) : e.nodeType === ir && oy(e, t), nt(e);
    }
    function fT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function dT(e) {
      e.nodeValue = "";
    }
    function pT(e, t) {
      e = e;
      var u = t[PF], a = u != null && u.hasOwnProperty("display") ? u.display : null;
      e.style.display = As("display", a);
    }
    function vT(e, t) {
      e.nodeValue = t;
    }
    function hT(e) {
      e.nodeType === ir ? e.textContent = "" : e.nodeType === ou && e.documentElement && e.removeChild(e.documentElement);
    }
    function mT(e, t, u) {
      return e.nodeType !== ir || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function yT(e, t) {
      return t === "" || e.nodeType !== zu ? null : e;
    }
    function gT(e) {
      return e.nodeType !== rn ? null : e;
    }
    function BD(e) {
      return e.data === $d;
    }
    function sy(e) {
      return e.data === Pd;
    }
    function DT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, u, a, l;
      return t && (u = t.dgst, a = t.msg, l = t.stck), {
        message: a,
        digest: u,
        stack: l
      };
    }
    function CT(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ir || t === zu)
          break;
        if (t === rn) {
          var u = e.data;
          if (u === Sh || u === Pd || u === $d)
            break;
          if (u === Fh)
            return null;
        }
      }
      return e;
    }
    function jd(e) {
      return Th(e.nextSibling);
    }
    function ET(e) {
      return Th(e.firstChild);
    }
    function AT(e) {
      return Th(e.firstChild);
    }
    function ST(e) {
      return Th(e.nextSibling);
    }
    function FT(e, t, u, a, l, s, d) {
      Id(s, e), dy(e, u);
      var h;
      {
        var m = l;
        h = m.namespace;
      }
      var C = (s.mode & Je) !== Le;
      return OF(e, t, u, h, a, C, d);
    }
    function TT(e, t, u, a) {
      return Id(u, e), u.mode & Je, NF(e, t);
    }
    function xT(e, t) {
      Id(t, e);
    }
    function RT(e) {
      for (var t = e.nextSibling, u = 0; t; ) {
        if (t.nodeType === rn) {
          var a = t.data;
          if (a === Fh) {
            if (u === 0)
              return jd(t);
            u--;
          } else
            (a === Sh || a === Pd || a === $d) && u++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function _D(e) {
      for (var t = e.previousSibling, u = 0; t; ) {
        if (t.nodeType === rn) {
          var a = t.data;
          if (a === Sh || a === Pd || a === $d) {
            if (u === 0)
              return t;
            u--;
          } else
            a === Fh && u++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function wT(e) {
      nt(e);
    }
    function BT(e) {
      nt(e);
    }
    function _T(e) {
      return e !== "head" && e !== "body";
    }
    function bT(e, t, u, a) {
      var l = !0;
      Ch(t.nodeValue, u, a, l);
    }
    function kT(e, t, u, a, l, s) {
      if (t[Ah] !== !0) {
        var d = !0;
        Ch(a.nodeValue, l, s, d);
      }
    }
    function OT(e, t) {
      t.nodeType === ir ? Zm(e, t) : t.nodeType === rn || ey(e, t);
    }
    function NT(e, t) {
      {
        var u = e.parentNode;
        u !== null && (t.nodeType === ir ? Zm(u, t) : t.nodeType === rn || ey(u, t));
      }
    }
    function LT(e, t, u, a, l) {
      (l || t[Ah] !== !0) && (a.nodeType === ir ? Zm(u, a) : a.nodeType === rn || ey(u, a));
    }
    function MT(e, t, u) {
      ty(e, t);
    }
    function UT(e, t) {
      ny(e, t);
    }
    function zT(e, t, u) {
      {
        var a = e.parentNode;
        a !== null && ty(a, t);
      }
    }
    function HT(e, t) {
      {
        var u = e.parentNode;
        u !== null && ny(u, t);
      }
    }
    function $T(e, t, u, a, l, s) {
      (s || t[Ah] !== !0) && ty(u, a);
    }
    function PT(e, t, u, a, l) {
      (l || t[Ah] !== !0) && ny(u, a);
    }
    function jT(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function VT(e) {
      Nd(e);
    }
    var wc = Math.random().toString(36).slice(2), Bc = "__reactFiber$" + wc, cy = "__reactProps$" + wc, Vd = "__reactContainer$" + wc, fy = "__reactEvents$" + wc, IT = "__reactListeners$" + wc, GT = "__reactHandles$" + wc;
    function QT(e) {
      delete e[Bc], delete e[cy], delete e[fy], delete e[IT], delete e[GT];
    }
    function Id(e, t) {
      t[Bc] = e;
    }
    function xh(e, t) {
      t[Vd] = e;
    }
    function bD(e) {
      e[Vd] = null;
    }
    function Gd(e) {
      return !!e[Vd];
    }
    function Po(e) {
      var t = e[Bc];
      if (t)
        return t;
      for (var u = e.parentNode; u; ) {
        if (t = u[Vd] || u[Bc], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var l = _D(e); l !== null; ) {
              var s = l[Bc];
              if (s)
                return s;
              l = _D(l);
            }
          return t;
        }
        e = u, u = e.parentNode;
      }
      return null;
    }
    function Rl(e) {
      var t = e[Bc] || e[Vd];
      return t && (t.tag === W || t.tag === ue || t.tag === de || t.tag === re) ? t : null;
    }
    function _c(e) {
      if (e.tag === W || e.tag === ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rh(e) {
      return e[cy] || null;
    }
    function dy(e, t) {
      e[cy] = t;
    }
    function YT(e) {
      var t = e[fy];
      return t === void 0 && (t = e[fy] = /* @__PURE__ */ new Set()), t;
    }
    var kD = {}, OD = g.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, u = Wl(e.type, e._source, t ? t.type : null);
        OD.setExtraStackFrame(u);
      } else
        OD.setExtraStackFrame(null);
    }
    function Ju(e, t, u, a, l) {
      {
        var s = Function.call.bind(qe);
        for (var d in e)
          if (s(e, d)) {
            var h = void 0;
            try {
              if (typeof e[d] != "function") {
                var m = Error((a || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              h = e[d](t, d, a, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              h = C;
            }
            h && !(h instanceof Error) && (wh(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", u, d, typeof h), wh(null)), h instanceof Error && !(h.message in kD) && (kD[h.message] = !0, wh(l), y("Failed %s type: %s", u, h.message), wh(null));
          }
      }
    }
    var py = [], Bh;
    Bh = [];
    var Ri = -1;
    function wl(e) {
      return {
        current: e
      };
    }
    function hr(e, t) {
      if (Ri < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Bh[Ri] && y("Unexpected Fiber popped."), e.current = py[Ri], py[Ri] = null, Bh[Ri] = null, Ri--;
    }
    function mr(e, t, u) {
      Ri++, py[Ri] = e.current, Bh[Ri] = u, e.current = t;
    }
    var vy;
    vy = {};
    var pu = {};
    Object.freeze(pu);
    var wi = wl(pu), Ua = wl(!1), hy = pu;
    function bc(e, t, u) {
      return u && za(t) ? hy : wi.current;
    }
    function ND(e, t, u) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = u;
      }
    }
    function kc(e, t) {
      {
        var u = e.type, a = u.contextTypes;
        if (!a)
          return pu;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in a)
          s[d] = t[d];
        {
          var h = Qe(e) || "Unknown";
          Ju(a, s, "context", h);
        }
        return l && ND(e, t, s), s;
      }
    }
    function _h() {
      return Ua.current;
    }
    function za(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function bh(e) {
      hr(Ua, e), hr(wi, e);
    }
    function my(e) {
      hr(Ua, e), hr(wi, e);
    }
    function LD(e, t, u) {
      {
        if (wi.current !== pu)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        mr(wi, t, e), mr(Ua, u, e);
      }
    }
    function MD(e, t, u) {
      {
        var a = e.stateNode, l = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var s = Qe(e) || "Unknown";
            vy[s] || (vy[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return u;
        }
        var d = a.getChildContext();
        for (var h in d)
          if (!(h in l))
            throw new Error((Qe(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var m = Qe(e) || "Unknown";
          Ju(l, d, "child context", m);
        }
        return tt({}, u, d);
      }
    }
    function kh(e) {
      {
        var t = e.stateNode, u = t && t.__reactInternalMemoizedMergedChildContext || pu;
        return hy = wi.current, mr(wi, u, e), mr(Ua, Ua.current, e), !0;
      }
    }
    function UD(e, t, u) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (u) {
          var l = MD(e, t, hy);
          a.__reactInternalMemoizedMergedChildContext = l, hr(Ua, e), hr(wi, e), mr(wi, l, e), mr(Ua, u, e);
        } else
          hr(Ua, e), mr(Ua, u, e);
      }
    }
    function KT(e) {
      {
        if (!Kf(e) || e.tag !== G)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case G: {
              var u = t.type;
              if (za(u))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Bl = 0, Oh = 1, Bi = null, yy = !1, gy = !1;
    function zD(e) {
      Bi === null ? Bi = [e] : Bi.push(e);
    }
    function WT(e) {
      yy = !0, zD(e);
    }
    function HD() {
      yy && _l();
    }
    function _l() {
      if (!gy && Bi !== null) {
        gy = !0;
        var e = 0, t = Gr();
        try {
          var u = !0, a = Bi;
          for (dn(jn); e < a.length; e++) {
            var l = a[e];
            do
              l = l(u);
            while (l !== null);
          }
          Bi = null, yy = !1;
        } catch (s) {
          throw Bi !== null && (Bi = Bi.slice(e + 1)), Os(Ls, _l), s;
        } finally {
          dn(t), gy = !1;
        }
      }
      return null;
    }
    var Oc = [], Nc = 0, Nh = null, Lh = 0, xu = [], Ru = 0, jo = null, _i = 1, bi = "";
    function qT(e) {
      return Io(), (e.flags & Gf) !== be;
    }
    function XT(e) {
      return Io(), Lh;
    }
    function JT() {
      var e = bi, t = _i, u = t & ~ZT(t);
      return u.toString(32) + e;
    }
    function Vo(e, t) {
      Io(), Oc[Nc++] = Lh, Oc[Nc++] = Nh, Nh = e, Lh = t;
    }
    function $D(e, t, u) {
      Io(), xu[Ru++] = _i, xu[Ru++] = bi, xu[Ru++] = jo, jo = e;
      var a = _i, l = bi, s = Mh(a) - 1, d = a & ~(1 << s), h = u + 1, m = Mh(t) + s;
      if (m > 30) {
        var C = s - s % 5, E = (1 << C) - 1, B = (d & E).toString(32), x = d >> C, U = s - C, z = Mh(t) + U, j = h << U, De = j | x, ke = B + l;
        _i = 1 << z | De, bi = ke;
      } else {
        var Be = h << s, st = Be | d, rt = l;
        _i = 1 << m | st, bi = rt;
      }
    }
    function Dy(e) {
      Io();
      var t = e.return;
      if (t !== null) {
        var u = 1, a = 0;
        Vo(e, u), $D(e, u, a);
      }
    }
    function Mh(e) {
      return 32 - Ps(e);
    }
    function ZT(e) {
      return 1 << Mh(e) - 1;
    }
    function Cy(e) {
      for (; e === Nh; )
        Nh = Oc[--Nc], Oc[Nc] = null, Lh = Oc[--Nc], Oc[Nc] = null;
      for (; e === jo; )
        jo = xu[--Ru], xu[Ru] = null, bi = xu[--Ru], xu[Ru] = null, _i = xu[--Ru], xu[Ru] = null;
    }
    function e2() {
      return Io(), jo !== null ? {
        id: _i,
        overflow: bi
      } : null;
    }
    function t2(e, t) {
      Io(), xu[Ru++] = _i, xu[Ru++] = bi, xu[Ru++] = jo, _i = t.id, bi = t.overflow, jo = e;
    }
    function Io() {
      Xn() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var qn = null, wu = null, Zu = !1, Go = !1, bl = null;
    function n2() {
      Zu && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function PD() {
      Go = !0;
    }
    function r2() {
      return Go;
    }
    function u2(e) {
      var t = e.stateNode.containerInfo;
      return wu = AT(t), qn = e, Zu = !0, bl = null, Go = !1, !0;
    }
    function a2(e, t, u) {
      return wu = ST(t), qn = e, Zu = !0, bl = null, Go = !1, u !== null && t2(e, u), !0;
    }
    function jD(e, t) {
      switch (e.tag) {
        case re: {
          OT(e.stateNode.containerInfo, t);
          break;
        }
        case W: {
          var u = (e.mode & Je) !== Le;
          LT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            u
          );
          break;
        }
        case de: {
          var a = e.memoizedState;
          a.dehydrated !== null && NT(a.dehydrated, t);
          break;
        }
      }
    }
    function VD(e, t) {
      jD(e, t);
      var u = o3();
      u.stateNode = t, u.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [u], e.flags |= mt) : a.push(u);
    }
    function Ey(e, t) {
      {
        if (Go)
          return;
        switch (e.tag) {
          case re: {
            var u = e.stateNode.containerInfo;
            switch (t.tag) {
              case W:
                var a = t.type;
                t.pendingProps, MT(u, a);
                break;
              case ue:
                var l = t.pendingProps;
                UT(u, l);
                break;
            }
            break;
          }
          case W: {
            var s = e.type, d = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case W: {
                var m = t.type, C = t.pendingProps, E = (e.mode & Je) !== Le;
                $T(
                  s,
                  d,
                  h,
                  m,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case ue: {
                var B = t.pendingProps, x = (e.mode & Je) !== Le;
                PT(
                  s,
                  d,
                  h,
                  B,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case de: {
            var U = e.memoizedState, z = U.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case W:
                  var j = t.type;
                  t.pendingProps, zT(z, j);
                  break;
                case ue:
                  var De = t.pendingProps;
                  HT(z, De);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function ID(e, t) {
      t.flags = t.flags & ~$r | bt, Ey(e, t);
    }
    function GD(e, t) {
      switch (e.tag) {
        case W: {
          var u = e.type;
          e.pendingProps;
          var a = mT(t, u);
          return a !== null ? (e.stateNode = a, qn = e, wu = ET(a), !0) : !1;
        }
        case ue: {
          var l = e.pendingProps, s = yT(t, l);
          return s !== null ? (e.stateNode = s, qn = e, wu = null, !0) : !1;
        }
        case de: {
          var d = gT(t);
          if (d !== null) {
            var h = {
              dehydrated: d,
              treeContext: e2(),
              retryLane: pr
            };
            e.memoizedState = h;
            var m = s3(d);
            return m.return = e, e.child = m, qn = e, wu = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ay(e) {
      return (e.mode & Je) !== Le && (e.flags & He) === be;
    }
    function Sy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Fy(e) {
      if (Zu) {
        var t = wu;
        if (!t) {
          Ay(e) && (Ey(qn, e), Sy()), ID(qn, e), Zu = !1, qn = e;
          return;
        }
        var u = t;
        if (!GD(e, t)) {
          Ay(e) && (Ey(qn, e), Sy()), t = jd(u);
          var a = qn;
          if (!t || !GD(e, t)) {
            ID(qn, e), Zu = !1, qn = e;
            return;
          }
          VD(a, u);
        }
      }
    }
    function i2(e, t, u) {
      var a = e.stateNode, l = !Go, s = FT(a, e.type, e.memoizedProps, t, u, e, l);
      return e.updateQueue = s, s !== null;
    }
    function l2(e) {
      var t = e.stateNode, u = e.memoizedProps, a = TT(t, u, e);
      if (a) {
        var l = qn;
        if (l !== null)
          switch (l.tag) {
            case re: {
              var s = l.stateNode.containerInfo, d = (l.mode & Je) !== Le;
              bT(
                s,
                t,
                u,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case W: {
              var h = l.type, m = l.memoizedProps, C = l.stateNode, E = (l.mode & Je) !== Le;
              kT(
                h,
                m,
                C,
                t,
                u,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return a;
    }
    function o2(e) {
      var t = e.memoizedState, u = t !== null ? t.dehydrated : null;
      if (!u)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      xT(u, e);
    }
    function s2(e) {
      var t = e.memoizedState, u = t !== null ? t.dehydrated : null;
      if (!u)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return RT(u);
    }
    function QD(e) {
      for (var t = e.return; t !== null && t.tag !== W && t.tag !== re && t.tag !== de; )
        t = t.return;
      qn = t;
    }
    function Uh(e) {
      if (e !== qn)
        return !1;
      if (!Zu)
        return QD(e), Zu = !0, !1;
      if (e.tag !== re && (e.tag !== W || _T(e.type) && !ay(e.type, e.memoizedProps))) {
        var t = wu;
        if (t)
          if (Ay(e))
            YD(e), Sy();
          else
            for (; t; )
              VD(e, t), t = jd(t);
      }
      return QD(e), e.tag === de ? wu = s2(e) : wu = qn ? jd(e.stateNode) : null, !0;
    }
    function c2() {
      return Zu && wu !== null;
    }
    function YD(e) {
      for (var t = wu; t; )
        jD(e, t), t = jd(t);
    }
    function Lc() {
      qn = null, wu = null, Zu = !1, Go = !1;
    }
    function KD() {
      bl !== null && (jE(bl), bl = null);
    }
    function Xn() {
      return Zu;
    }
    function Ty(e) {
      bl === null ? bl = [e] : bl.push(e);
    }
    var f2 = g.ReactCurrentBatchConfig, d2 = null;
    function p2() {
      return f2.transition;
    }
    var ea = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var v2 = function(e) {
        for (var t = null, u = e; u !== null; )
          u.mode & Ht && (t = u), u = u.return;
        return t;
      }, Qo = function(e) {
        var t = [];
        return e.forEach(function(u) {
          t.push(u);
        }), t.sort().join(", ");
      }, Qd = [], Yd = [], Kd = [], Wd = [], qd = [], Xd = [], Yo = /* @__PURE__ */ new Set();
      ea.recordUnsafeLifecycleWarnings = function(e, t) {
        Yo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Qd.push(e), e.mode & Ht && typeof t.UNSAFE_componentWillMount == "function" && Yd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Kd.push(e), e.mode & Ht && typeof t.UNSAFE_componentWillReceiveProps == "function" && Wd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && qd.push(e), e.mode & Ht && typeof t.UNSAFE_componentWillUpdate == "function" && Xd.push(e));
      }, ea.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(x) {
          e.add(Qe(x) || "Component"), Yo.add(x.type);
        }), Qd = []);
        var t = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(x) {
          t.add(Qe(x) || "Component"), Yo.add(x.type);
        }), Yd = []);
        var u = /* @__PURE__ */ new Set();
        Kd.length > 0 && (Kd.forEach(function(x) {
          u.add(Qe(x) || "Component"), Yo.add(x.type);
        }), Kd = []);
        var a = /* @__PURE__ */ new Set();
        Wd.length > 0 && (Wd.forEach(function(x) {
          a.add(Qe(x) || "Component"), Yo.add(x.type);
        }), Wd = []);
        var l = /* @__PURE__ */ new Set();
        qd.length > 0 && (qd.forEach(function(x) {
          l.add(Qe(x) || "Component"), Yo.add(x.type);
        }), qd = []);
        var s = /* @__PURE__ */ new Set();
        if (Xd.length > 0 && (Xd.forEach(function(x) {
          s.add(Qe(x) || "Component"), Yo.add(x.type);
        }), Xd = []), t.size > 0) {
          var d = Qo(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (a.size > 0) {
          var h = Qo(a);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var m = Qo(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, m);
        }
        if (e.size > 0) {
          var C = Qo(e);
          R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (u.size > 0) {
          var E = Qo(u);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (l.size > 0) {
          var B = Qo(l);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, B);
        }
      };
      var zh = /* @__PURE__ */ new Map(), WD = /* @__PURE__ */ new Set();
      ea.recordLegacyContextWarning = function(e, t) {
        var u = v2(e);
        if (u === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!WD.has(e.type)) {
          var a = zh.get(u);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], zh.set(u, a)), a.push(e));
        }
      }, ea.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var u = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              a.add(Qe(s) || "Component"), WD.add(s.type);
            });
            var l = Qo(a);
            try {
              At(u), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              sn();
            }
          }
        });
      }, ea.discardPendingWarnings = function() {
        Qd = [], Yd = [], Kd = [], Wd = [], qd = [], Xd = [], zh = /* @__PURE__ */ new Map();
      };
    }
    function ta(e, t) {
      if (e && e.defaultProps) {
        var u = tt({}, t), a = e.defaultProps;
        for (var l in a)
          u[l] === void 0 && (u[l] = a[l]);
        return u;
      }
      return t;
    }
    var xy = wl(null), Ry;
    Ry = {};
    var Hh = null, Mc = null, wy = null, $h = !1;
    function Ph() {
      Hh = null, Mc = null, wy = null, $h = !1;
    }
    function qD() {
      $h = !0;
    }
    function XD() {
      $h = !1;
    }
    function JD(e, t, u) {
      mr(xy, t._currentValue, e), t._currentValue = u, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ry && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ry;
    }
    function By(e, t) {
      var u = xy.current;
      hr(xy, t), e._currentValue = u;
    }
    function _y(e, t, u) {
      for (var a = e; a !== null; ) {
        var l = a.alternate;
        if (mi(a.childLanes, t) ? l !== null && !mi(l.childLanes, t) && (l.childLanes = Ke(l.childLanes, t)) : (a.childLanes = Ke(a.childLanes, t), l !== null && (l.childLanes = Ke(l.childLanes, t))), a === u)
          break;
        a = a.return;
      }
      a !== u && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function h2(e, t, u) {
      m2(e, t, u);
    }
    function m2(e, t, u) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var l = void 0, s = a.dependencies;
        if (s !== null) {
          l = a.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (a.tag === G) {
                var h = fn(u), m = ki(Bt, h);
                m.tag = Vh;
                var C = a.updateQueue;
                if (C !== null) {
                  var E = C.shared, B = E.pending;
                  B === null ? m.next = m : (m.next = B.next, B.next = m), E.pending = m;
                }
              }
              a.lanes = Ke(a.lanes, u);
              var x = a.alternate;
              x !== null && (x.lanes = Ke(x.lanes, u)), _y(a.return, u, e), s.lanes = Ke(s.lanes, u);
              break;
            }
            d = d.next;
          }
        } else if (a.tag === ct)
          l = a.type === e.type ? null : a.child;
        else if (a.tag === ht) {
          var U = a.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = Ke(U.lanes, u);
          var z = U.alternate;
          z !== null && (z.lanes = Ke(z.lanes, u)), _y(U, u, e), l = a.sibling;
        } else
          l = a.child;
        if (l !== null)
          l.return = a;
        else
          for (l = a; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var j = l.sibling;
            if (j !== null) {
              j.return = l.return, l = j;
              break;
            }
            l = l.return;
          }
        a = l;
      }
    }
    function Uc(e, t) {
      Hh = e, Mc = null, wy = null;
      var u = e.dependencies;
      if (u !== null) {
        var a = u.firstContext;
        a !== null && (vr(u.lanes, t) && fp(), u.firstContext = null);
      }
    }
    function Fn(e) {
      $h && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (wy !== e) {
        var u = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Mc === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Mc = u, Hh.dependencies = {
            lanes: I,
            firstContext: u
          };
        } else
          Mc = Mc.next = u;
      }
      return t;
    }
    var Ko = null;
    function by(e) {
      Ko === null ? Ko = [e] : Ko.push(e);
    }
    function y2() {
      if (Ko !== null) {
        for (var e = 0; e < Ko.length; e++) {
          var t = Ko[e], u = t.interleaved;
          if (u !== null) {
            t.interleaved = null;
            var a = u.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = a, u.next = s;
            }
            t.pending = u;
          }
        }
        Ko = null;
      }
    }
    function ZD(e, t, u, a) {
      var l = t.interleaved;
      return l === null ? (u.next = u, by(t)) : (u.next = l.next, l.next = u), t.interleaved = u, jh(e, a);
    }
    function g2(e, t, u, a) {
      var l = t.interleaved;
      l === null ? (u.next = u, by(t)) : (u.next = l.next, l.next = u), t.interleaved = u;
    }
    function D2(e, t, u, a) {
      var l = t.interleaved;
      return l === null ? (u.next = u, by(t)) : (u.next = l.next, l.next = u), t.interleaved = u, jh(e, a);
    }
    function qr(e, t) {
      return jh(e, t);
    }
    var C2 = jh;
    function jh(e, t) {
      e.lanes = Ke(e.lanes, t);
      var u = e.alternate;
      u !== null && (u.lanes = Ke(u.lanes, t)), u === null && (e.flags & (bt | $r)) !== be && eA(e);
      for (var a = e, l = e.return; l !== null; )
        l.childLanes = Ke(l.childLanes, t), u = l.alternate, u !== null ? u.childLanes = Ke(u.childLanes, t) : (l.flags & (bt | $r)) !== be && eA(e), a = l, l = l.return;
      if (a.tag === re) {
        var s = a.stateNode;
        return s;
      } else
        return null;
    }
    var eC = 0, tC = 1, Vh = 2, ky = 3, Ih = !1, Oy, Gh;
    Oy = !1, Gh = null;
    function Ny(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function nC(e, t) {
      var u = t.updateQueue, a = e.updateQueue;
      if (u === a) {
        var l = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          effects: a.effects
        };
        t.updateQueue = l;
      }
    }
    function ki(e, t) {
      var u = {
        eventTime: e,
        lane: t,
        tag: eC,
        payload: null,
        callback: null,
        next: null
      };
      return u;
    }
    function kl(e, t, u) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      var l = a.shared;
      if (Gh === l && !Oy && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Oy = !0), CR()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, C2(e, u);
      } else
        return D2(e, l, t, u);
    }
    function Qh(e, t, u) {
      var a = t.updateQueue;
      if (a !== null) {
        var l = a.shared;
        if (ld(u)) {
          var s = l.lanes;
          s = sd(s, e.pendingLanes);
          var d = Ke(s, u);
          l.lanes = d, dl(e, d);
        }
      }
    }
    function Ly(e, t) {
      var u = e.updateQueue, a = e.alternate;
      if (a !== null) {
        var l = a.updateQueue;
        if (u === l) {
          var s = null, d = null, h = u.firstBaseUpdate;
          if (h !== null) {
            var m = h;
            do {
              var C = {
                eventTime: m.eventTime,
                lane: m.lane,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              };
              d === null ? s = d = C : (d.next = C, d = C), m = m.next;
            } while (m !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          u = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = u;
          return;
        }
      }
      var E = u.lastBaseUpdate;
      E === null ? u.firstBaseUpdate = t : E.next = t, u.lastBaseUpdate = t;
    }
    function E2(e, t, u, a, l, s) {
      switch (u.tag) {
        case tC: {
          var d = u.payload;
          if (typeof d == "function") {
            qD();
            var h = d.call(s, a, l);
            {
              if (e.mode & Ht) {
                cn(!0);
                try {
                  d.call(s, a, l);
                } finally {
                  cn(!1);
                }
              }
              XD();
            }
            return h;
          }
          return d;
        }
        case ky:
          e.flags = e.flags & ~Dn | He;
        case eC: {
          var m = u.payload, C;
          if (typeof m == "function") {
            qD(), C = m.call(s, a, l);
            {
              if (e.mode & Ht) {
                cn(!0);
                try {
                  m.call(s, a, l);
                } finally {
                  cn(!1);
                }
              }
              XD();
            }
          } else
            C = m;
          return C == null ? a : tt({}, a, C);
        }
        case Vh:
          return Ih = !0, a;
      }
      return a;
    }
    function Yh(e, t, u, a) {
      var l = e.updateQueue;
      Ih = !1, Gh = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, h = l.shared.pending;
      if (h !== null) {
        l.shared.pending = null;
        var m = h, C = m.next;
        m.next = null, d === null ? s = C : d.next = C, d = m;
        var E = e.alternate;
        if (E !== null) {
          var B = E.updateQueue, x = B.lastBaseUpdate;
          x !== d && (x === null ? B.firstBaseUpdate = C : x.next = C, B.lastBaseUpdate = m);
        }
      }
      if (s !== null) {
        var U = l.baseState, z = I, j = null, De = null, ke = null, Be = s;
        do {
          var st = Be.lane, rt = Be.eventTime;
          if (mi(a, st)) {
            if (ke !== null) {
              var V = {
                eventTime: rt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: lt,
                tag: Be.tag,
                payload: Be.payload,
                callback: Be.callback,
                next: null
              };
              ke = ke.next = V;
            }
            U = E2(e, l, Be, U, t, u);
            var O = Be.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Be.lane !== lt) {
              e.flags |= Cu;
              var te = l.effects;
              te === null ? l.effects = [Be] : te.push(Be);
            }
          } else {
            var k = {
              eventTime: rt,
              lane: st,
              tag: Be.tag,
              payload: Be.payload,
              callback: Be.callback,
              next: null
            };
            ke === null ? (De = ke = k, j = U) : ke = ke.next = k, z = Ke(z, st);
          }
          if (Be = Be.next, Be === null) {
            if (h = l.shared.pending, h === null)
              break;
            var Ce = h, he = Ce.next;
            Ce.next = null, Be = he, l.lastBaseUpdate = Ce, l.shared.pending = null;
          }
        } while (!0);
        ke === null && (j = U), l.baseState = j, l.firstBaseUpdate = De, l.lastBaseUpdate = ke;
        var ze = l.shared.interleaved;
        if (ze !== null) {
          var Ie = ze;
          do
            z = Ke(z, Ie.lane), Ie = Ie.next;
          while (Ie !== ze);
        } else
          s === null && (l.shared.lanes = I);
        Sp(z), e.lanes = z, e.memoizedState = U;
      }
      Gh = null;
    }
    function A2(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function rC() {
      Ih = !1;
    }
    function Kh() {
      return Ih;
    }
    function uC(e, t, u) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var l = 0; l < a.length; l++) {
          var s = a[l], d = s.callback;
          d !== null && (s.callback = null, A2(d, u));
        }
    }
    var My = {}, aC = new c.Component().refs, Uy, zy, Hy, $y, Py, iC, Wh, jy, Vy, Iy;
    {
      Uy = /* @__PURE__ */ new Set(), zy = /* @__PURE__ */ new Set(), Hy = /* @__PURE__ */ new Set(), $y = /* @__PURE__ */ new Set(), jy = /* @__PURE__ */ new Set(), Py = /* @__PURE__ */ new Set(), Vy = /* @__PURE__ */ new Set(), Iy = /* @__PURE__ */ new Set();
      var lC = /* @__PURE__ */ new Set();
      Wh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var u = t + "_" + e;
          lC.has(u) || (lC.add(u), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, iC = function(e, t) {
        if (t === void 0) {
          var u = Rt(e) || "Component";
          Py.has(u) || (Py.add(u), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", u));
        }
      }, Object.defineProperty(My, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(My);
    }
    function Gy(e, t, u, a) {
      var l = e.memoizedState, s = u(a, l);
      {
        if (e.mode & Ht) {
          cn(!0);
          try {
            s = u(a, l);
          } finally {
            cn(!1);
          }
        }
        iC(t, s);
      }
      var d = s == null ? l : tt({}, l, s);
      if (e.memoizedState = d, e.lanes === I) {
        var h = e.updateQueue;
        h.baseState = d;
      }
    }
    var Qy = {
      isMounted: Fr,
      enqueueSetState: function(e, t, u) {
        var a = zr(e), l = _r(), s = $l(a), d = ki(l, s);
        d.payload = t, u != null && (Wh(u, "setState"), d.callback = u);
        var h = kl(a, d, s);
        h !== null && (Mn(h, a, s, l), Qh(h, a, s)), wa(a, s);
      },
      enqueueReplaceState: function(e, t, u) {
        var a = zr(e), l = _r(), s = $l(a), d = ki(l, s);
        d.tag = tC, d.payload = t, u != null && (Wh(u, "replaceState"), d.callback = u);
        var h = kl(a, d, s);
        h !== null && (Mn(h, a, s, l), Qh(h, a, s)), wa(a, s);
      },
      enqueueForceUpdate: function(e, t) {
        var u = zr(e), a = _r(), l = $l(u), s = ki(a, l);
        s.tag = Vh, t != null && (Wh(t, "forceUpdate"), s.callback = t);
        var d = kl(u, s, l);
        d !== null && (Mn(d, u, l, a), Qh(d, u, l)), rd(u, l);
      }
    };
    function oC(e, t, u, a, l, s, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var m = h.shouldComponentUpdate(a, s, d);
        {
          if (e.mode & Ht) {
            cn(!0);
            try {
              m = h.shouldComponentUpdate(a, s, d);
            } finally {
              cn(!1);
            }
          }
          m === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Rt(t) || "Component");
        }
        return m;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_e(u, a) || !_e(l, s) : !0;
    }
    function S2(e, t, u) {
      var a = e.stateNode;
      {
        var l = Rt(t) || "Component", s = a.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), a.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), a.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), a.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Vy.has(t) && (Vy.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof a.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Rt(t) || "A pure component"), typeof a.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof a.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof a.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof a.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = a.props !== u;
        a.props !== void 0 && d && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), a.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !Hy.has(t) && (Hy.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Rt(t))), typeof a.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof a.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var h = a.state;
        h && (typeof h != "object" || yn(h)) && y("%s.state: must be set to an object or null", l), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function sC(e, t) {
      t.updater = Qy, e.stateNode = t, nl(t, e), t._reactInternalInstance = My;
    }
    function cC(e, t, u) {
      var a = !1, l = pu, s = pu, d = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === ff && d._context === void 0
        );
        if (!h && !Iy.has(t)) {
          Iy.add(t);
          var m = "";
          d === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? m = " However, it is set to a " + typeof d + "." : d.$$typeof === cf ? m = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Rt(t) || "Component", m);
        }
      }
      if (typeof d == "object" && d !== null)
        s = Fn(d);
      else {
        l = bc(e, t, !0);
        var C = t.contextTypes;
        a = C != null, s = a ? kc(e, l) : pu;
      }
      var E = new t(u, s);
      if (e.mode & Ht) {
        cn(!0);
        try {
          E = new t(u, s);
        } finally {
          cn(!1);
        }
      }
      var B = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      sC(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && B === null) {
          var x = Rt(t) || "Component";
          zy.has(x) || (zy.add(x), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, E.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var U = null, z = null, j = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), U !== null || z !== null || j !== null) {
            var De = Rt(t) || "Component", ke = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $y.has(De) || ($y.add(De), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, ke, U !== null ? `
  ` + U : "", z !== null ? `
  ` + z : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return a && ND(e, l, s), E;
    }
    function F2(e, t) {
      var u = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), u !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Qe(e) || "Component"), Qy.enqueueReplaceState(t, t.state, null));
    }
    function fC(e, t, u, a) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l) {
        {
          var s = Qe(e) || "Component";
          Uy.has(s) || (Uy.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Qy.enqueueReplaceState(t, t.state, null);
      }
    }
    function Yy(e, t, u, a) {
      S2(e, t, u);
      var l = e.stateNode;
      l.props = u, l.state = e.memoizedState, l.refs = aC, Ny(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = Fn(s);
      else {
        var d = bc(e, t, !0);
        l.context = kc(e, d);
      }
      {
        if (l.state === u) {
          var h = Rt(t) || "Component";
          jy.has(h) || (jy.add(h), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & Ht && ea.recordLegacyContextWarning(e, l), ea.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var m = t.getDerivedStateFromProps;
      if (typeof m == "function" && (Gy(e, t, m, u), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (F2(e, l), Yh(e, u, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Ye;
        C |= or, (e.mode & Vr) !== Le && (C |= sr), e.flags |= C;
      }
    }
    function T2(e, t, u, a) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, h = t.contextType, m = pu;
      if (typeof h == "object" && h !== null)
        m = Fn(h);
      else {
        var C = bc(e, t, !0);
        m = kc(e, C);
      }
      var E = t.getDerivedStateFromProps, B = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !B && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== u || d !== m) && fC(e, l, u, m), rC();
      var x = e.memoizedState, U = l.state = x;
      if (Yh(e, u, l, a), U = e.memoizedState, s === u && x === U && !_h() && !Kh()) {
        if (typeof l.componentDidMount == "function") {
          var z = Ye;
          z |= or, (e.mode & Vr) !== Le && (z |= sr), e.flags |= z;
        }
        return !1;
      }
      typeof E == "function" && (Gy(e, t, E, u), U = e.memoizedState);
      var j = Kh() || oC(e, t, s, u, x, U, m);
      if (j) {
        if (!B && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var De = Ye;
          De |= or, (e.mode & Vr) !== Le && (De |= sr), e.flags |= De;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ke = Ye;
          ke |= or, (e.mode & Vr) !== Le && (ke |= sr), e.flags |= ke;
        }
        e.memoizedProps = u, e.memoizedState = U;
      }
      return l.props = u, l.state = U, l.context = m, j;
    }
    function x2(e, t, u, a, l) {
      var s = t.stateNode;
      nC(e, t);
      var d = t.memoizedProps, h = t.type === t.elementType ? d : ta(t.type, d);
      s.props = h;
      var m = t.pendingProps, C = s.context, E = u.contextType, B = pu;
      if (typeof E == "object" && E !== null)
        B = Fn(E);
      else {
        var x = bc(t, u, !0);
        B = kc(t, x);
      }
      var U = u.getDerivedStateFromProps, z = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== m || C !== B) && fC(t, s, a, B), rC();
      var j = t.memoizedState, De = s.state = j;
      if (Yh(t, a, s, l), De = t.memoizedState, d === m && j === De && !_h() && !Kh() && !Te)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ye), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Hr), !1;
      typeof U == "function" && (Gy(t, u, U, a), De = t.memoizedState);
      var ke = Kh() || oC(t, u, h, a, j, De, B) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Te;
      return ke ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, De, B), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(a, De, B)), typeof s.componentDidUpdate == "function" && (t.flags |= Ye), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Hr)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ye), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Hr), t.memoizedProps = a, t.memoizedState = De), s.props = a, s.state = De, s.context = B, ke;
    }
    var Ky, Wy, qy, Xy, Jy, dC = function(e, t) {
    };
    Ky = !1, Wy = !1, qy = {}, Xy = {}, Jy = {}, dC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var u = Qe(t) || "Component";
        Xy[u] || (Xy[u] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Jd(e, t, u) {
      var a = u.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & Ht || at) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(u._owner && u._self && u._owner.stateNode !== u._self)) {
          var l = Qe(e) || "Component";
          qy[l] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a), qy[l] = !0);
        }
        if (u._owner) {
          var s = u._owner, d;
          if (s) {
            var h = s;
            if (h.tag !== G)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = h.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var m = d;
          Ya(a, "ref");
          var C = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var E = function(B) {
            var x = m.refs;
            x === aC && (x = m.refs = {}), B === null ? delete x[C] : x[C] = B;
          };
          return E._stringRef = C, E;
        } else {
          if (typeof a != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!u._owner)
            throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return a;
    }
    function qh(e, t) {
      var u = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Xh(e) {
      {
        var t = Qe(e) || "Component";
        if (Jy[t])
          return;
        Jy[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function pC(e) {
      var t = e._payload, u = e._init;
      return u(t);
    }
    function vC(e) {
      function t(k, V) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [V], k.flags |= mt) : O.push(V);
        }
      }
      function u(k, V) {
        if (!e)
          return null;
        for (var O = V; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function a(k, V) {
        for (var O = /* @__PURE__ */ new Map(), te = V; te !== null; )
          te.key !== null ? O.set(te.key, te) : O.set(te.index, te), te = te.sibling;
        return O;
      }
      function l(k, V) {
        var O = ns(k, V);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, V, O) {
        if (k.index = O, !e)
          return k.flags |= Gf, V;
        var te = k.alternate;
        if (te !== null) {
          var Ce = te.index;
          return Ce < V ? (k.flags |= bt, V) : Ce;
        } else
          return k.flags |= bt, V;
      }
      function d(k) {
        return e && k.alternate === null && (k.flags |= bt), k;
      }
      function h(k, V, O, te) {
        if (V === null || V.tag !== ue) {
          var Ce = T1(O, k.mode, te);
          return Ce.return = k, Ce;
        } else {
          var he = l(V, O);
          return he.return = k, he;
        }
      }
      function m(k, V, O, te) {
        var Ce = O.type;
        if (Ce === Nu)
          return E(k, V, O.props.children, te, O.key);
        if (V !== null && (V.elementType === Ce || // Keep this check inline so it only runs on the false path:
        uA(V, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === Kn && pC(Ce) === V.type)) {
          var he = l(V, O.props);
          return he.ref = Jd(k, V, O), he.return = k, he._debugSource = O._source, he._debugOwner = O._owner, he;
        }
        var ze = F1(O, k.mode, te);
        return ze.ref = Jd(k, V, O), ze.return = k, ze;
      }
      function C(k, V, O, te) {
        if (V === null || V.tag !== M || V.stateNode.containerInfo !== O.containerInfo || V.stateNode.implementation !== O.implementation) {
          var Ce = x1(O, k.mode, te);
          return Ce.return = k, Ce;
        } else {
          var he = l(V, O.children || []);
          return he.return = k, he;
        }
      }
      function E(k, V, O, te, Ce) {
        if (V === null || V.tag !== Z) {
          var he = jl(O, k.mode, te, Ce);
          return he.return = k, he;
        } else {
          var ze = l(V, O);
          return ze.return = k, ze;
        }
      }
      function B(k, V, O) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var te = T1("" + V, k.mode, O);
          return te.return = k, te;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Pi: {
              var Ce = F1(V, k.mode, O);
              return Ce.ref = Jd(k, null, V), Ce.return = k, Ce;
            }
            case uu: {
              var he = x1(V, k.mode, O);
              return he.return = k, he;
            }
            case Kn: {
              var ze = V._payload, Ie = V._init;
              return B(k, Ie(ze), O);
            }
          }
          if (yn(V) || Lu(V)) {
            var Ft = jl(V, k.mode, O, null);
            return Ft.return = k, Ft;
          }
          qh(k, V);
        }
        return typeof V == "function" && Xh(k), null;
      }
      function x(k, V, O, te) {
        var Ce = V !== null ? V.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return Ce !== null ? null : h(k, V, "" + O, te);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Pi:
              return O.key === Ce ? m(k, V, O, te) : null;
            case uu:
              return O.key === Ce ? C(k, V, O, te) : null;
            case Kn: {
              var he = O._payload, ze = O._init;
              return x(k, V, ze(he), te);
            }
          }
          if (yn(O) || Lu(O))
            return Ce !== null ? null : E(k, V, O, te, null);
          qh(k, O);
        }
        return typeof O == "function" && Xh(k), null;
      }
      function U(k, V, O, te, Ce) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var he = k.get(O) || null;
          return h(V, he, "" + te, Ce);
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Pi: {
              var ze = k.get(te.key === null ? O : te.key) || null;
              return m(V, ze, te, Ce);
            }
            case uu: {
              var Ie = k.get(te.key === null ? O : te.key) || null;
              return C(V, Ie, te, Ce);
            }
            case Kn:
              var Ft = te._payload, pt = te._init;
              return U(k, V, O, pt(Ft), Ce);
          }
          if (yn(te) || Lu(te)) {
            var hn = k.get(O) || null;
            return E(V, hn, te, Ce, null);
          }
          qh(V, te);
        }
        return typeof te == "function" && Xh(V), null;
      }
      function z(k, V, O) {
        {
          if (typeof k != "object" || k === null)
            return V;
          switch (k.$$typeof) {
            case Pi:
            case uu:
              dC(k, O);
              var te = k.key;
              if (typeof te != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(te);
                break;
              }
              if (!V.has(te)) {
                V.add(te);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", te);
              break;
            case Kn:
              var Ce = k._payload, he = k._init;
              z(he(Ce), V, O);
              break;
          }
        }
        return V;
      }
      function j(k, V, O, te) {
        for (var Ce = null, he = 0; he < O.length; he++) {
          var ze = O[he];
          Ce = z(ze, Ce, k);
        }
        for (var Ie = null, Ft = null, pt = V, hn = 0, vt = 0, ln = null; pt !== null && vt < O.length; vt++) {
          pt.index > vt ? (ln = pt, pt = null) : ln = pt.sibling;
          var gr = x(k, pt, O[vt], te);
          if (gr === null) {
            pt === null && (pt = ln);
            break;
          }
          e && pt && gr.alternate === null && t(k, pt), hn = s(gr, hn, vt), Ft === null ? Ie = gr : Ft.sibling = gr, Ft = gr, pt = ln;
        }
        if (vt === O.length) {
          if (u(k, pt), Xn()) {
            var ur = vt;
            Vo(k, ur);
          }
          return Ie;
        }
        if (pt === null) {
          for (; vt < O.length; vt++) {
            var hu = B(k, O[vt], te);
            hu !== null && (hn = s(hu, hn, vt), Ft === null ? Ie = hu : Ft.sibling = hu, Ft = hu);
          }
          if (Xn()) {
            var br = vt;
            Vo(k, br);
          }
          return Ie;
        }
        for (var kr = a(k, pt); vt < O.length; vt++) {
          var Dr = U(kr, k, vt, O[vt], te);
          Dr !== null && (e && Dr.alternate !== null && kr.delete(Dr.key === null ? vt : Dr.key), hn = s(Dr, hn, vt), Ft === null ? Ie = Dr : Ft.sibling = Dr, Ft = Dr);
        }
        if (e && kr.forEach(function(ef) {
          return t(k, ef);
        }), Xn()) {
          var zi = vt;
          Vo(k, zi);
        }
        return Ie;
      }
      function De(k, V, O, te) {
        var Ce = Lu(O);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (Wy || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Wy = !0), O.entries === Ce && (Ky || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ky = !0);
          var he = Ce.call(O);
          if (he)
            for (var ze = null, Ie = he.next(); !Ie.done; Ie = he.next()) {
              var Ft = Ie.value;
              ze = z(Ft, ze, k);
            }
        }
        var pt = Ce.call(O);
        if (pt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var hn = null, vt = null, ln = V, gr = 0, ur = 0, hu = null, br = pt.next(); ln !== null && !br.done; ur++, br = pt.next()) {
          ln.index > ur ? (hu = ln, ln = null) : hu = ln.sibling;
          var kr = x(k, ln, br.value, te);
          if (kr === null) {
            ln === null && (ln = hu);
            break;
          }
          e && ln && kr.alternate === null && t(k, ln), gr = s(kr, gr, ur), vt === null ? hn = kr : vt.sibling = kr, vt = kr, ln = hu;
        }
        if (br.done) {
          if (u(k, ln), Xn()) {
            var Dr = ur;
            Vo(k, Dr);
          }
          return hn;
        }
        if (ln === null) {
          for (; !br.done; ur++, br = pt.next()) {
            var zi = B(k, br.value, te);
            zi !== null && (gr = s(zi, gr, ur), vt === null ? hn = zi : vt.sibling = zi, vt = zi);
          }
          if (Xn()) {
            var ef = ur;
            Vo(k, ef);
          }
          return hn;
        }
        for (var wp = a(k, ln); !br.done; ur++, br = pt.next()) {
          var Qa = U(wp, k, ur, br.value, te);
          Qa !== null && (e && Qa.alternate !== null && wp.delete(Qa.key === null ? ur : Qa.key), gr = s(Qa, gr, ur), vt === null ? hn = Qa : vt.sibling = Qa, vt = Qa);
        }
        if (e && wp.forEach(function($3) {
          return t(k, $3);
        }), Xn()) {
          var H3 = ur;
          Vo(k, H3);
        }
        return hn;
      }
      function ke(k, V, O, te) {
        if (V !== null && V.tag === ue) {
          u(k, V.sibling);
          var Ce = l(V, O);
          return Ce.return = k, Ce;
        }
        u(k, V);
        var he = T1(O, k.mode, te);
        return he.return = k, he;
      }
      function Be(k, V, O, te) {
        for (var Ce = O.key, he = V; he !== null; ) {
          if (he.key === Ce) {
            var ze = O.type;
            if (ze === Nu) {
              if (he.tag === Z) {
                u(k, he.sibling);
                var Ie = l(he, O.props.children);
                return Ie.return = k, Ie._debugSource = O._source, Ie._debugOwner = O._owner, Ie;
              }
            } else if (he.elementType === ze || // Keep this check inline so it only runs on the false path:
            uA(he, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ze == "object" && ze !== null && ze.$$typeof === Kn && pC(ze) === he.type) {
              u(k, he.sibling);
              var Ft = l(he, O.props);
              return Ft.ref = Jd(k, he, O), Ft.return = k, Ft._debugSource = O._source, Ft._debugOwner = O._owner, Ft;
            }
            u(k, he);
            break;
          } else
            t(k, he);
          he = he.sibling;
        }
        if (O.type === Nu) {
          var pt = jl(O.props.children, k.mode, te, O.key);
          return pt.return = k, pt;
        } else {
          var hn = F1(O, k.mode, te);
          return hn.ref = Jd(k, V, O), hn.return = k, hn;
        }
      }
      function st(k, V, O, te) {
        for (var Ce = O.key, he = V; he !== null; ) {
          if (he.key === Ce)
            if (he.tag === M && he.stateNode.containerInfo === O.containerInfo && he.stateNode.implementation === O.implementation) {
              u(k, he.sibling);
              var ze = l(he, O.children || []);
              return ze.return = k, ze;
            } else {
              u(k, he);
              break;
            }
          else
            t(k, he);
          he = he.sibling;
        }
        var Ie = x1(O, k.mode, te);
        return Ie.return = k, Ie;
      }
      function rt(k, V, O, te) {
        var Ce = typeof O == "object" && O !== null && O.type === Nu && O.key === null;
        if (Ce && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Pi:
              return d(Be(k, V, O, te));
            case uu:
              return d(st(k, V, O, te));
            case Kn:
              var he = O._payload, ze = O._init;
              return rt(k, V, ze(he), te);
          }
          if (yn(O))
            return j(k, V, O, te);
          if (Lu(O))
            return De(k, V, O, te);
          qh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? d(ke(k, V, "" + O, te)) : (typeof O == "function" && Xh(k), u(k, V));
      }
      return rt;
    }
    var zc = vC(!0), hC = vC(!1);
    function R2(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var u = t.child, a = ns(u, u.pendingProps);
        for (t.child = a, a.return = t; u.sibling !== null; )
          u = u.sibling, a = a.sibling = ns(u, u.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function w2(e, t) {
      for (var u = e.child; u !== null; )
        r3(u, t), u = u.sibling;
    }
    var Zd = {}, Ol = wl(Zd), ep = wl(Zd), Jh = wl(Zd);
    function Zh(e) {
      if (e === Zd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function mC() {
      var e = Zh(Jh.current);
      return e;
    }
    function Zy(e, t) {
      mr(Jh, t, e), mr(ep, e, e), mr(Ol, Zd, e);
      var u = jF(t);
      hr(Ol, e), mr(Ol, u, e);
    }
    function Hc(e) {
      hr(Ol, e), hr(ep, e), hr(Jh, e);
    }
    function eg() {
      var e = Zh(Ol.current);
      return e;
    }
    function yC(e) {
      Zh(Jh.current);
      var t = Zh(Ol.current), u = VF(t, e.type);
      t !== u && (mr(ep, e, e), mr(Ol, u, e));
    }
    function tg(e) {
      ep.current === e && (hr(Ol, e), hr(ep, e));
    }
    var B2 = 0, gC = 1, DC = 1, tp = 2, na = wl(B2);
    function ng(e, t) {
      return (e & t) !== 0;
    }
    function $c(e) {
      return e & gC;
    }
    function rg(e, t) {
      return e & gC | t;
    }
    function _2(e, t) {
      return e | t;
    }
    function Nl(e, t) {
      mr(na, t, e);
    }
    function Pc(e) {
      hr(na, e);
    }
    function b2(e, t) {
      var u = e.memoizedState;
      return u !== null ? u.dehydrated !== null : (e.memoizedProps, !0);
    }
    function e0(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === de) {
          var u = t.memoizedState;
          if (u !== null) {
            var a = u.dehydrated;
            if (a === null || BD(a) || sy(a))
              return t;
          }
        } else if (t.tag === pe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & He) !== be;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Xr = (
      /*   */
      0
    ), Bn = (
      /* */
      1
    ), Ha = (
      /*  */
      2
    ), _n = (
      /*    */
      4
    ), Jn = (
      /*   */
      8
    ), ug = [];
    function ag() {
      for (var e = 0; e < ug.length; e++) {
        var t = ug[e];
        t._workInProgressVersionPrimary = null;
      }
      ug.length = 0;
    }
    function k2(e, t) {
      var u = t._getVersion, a = u(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var ge = g.ReactCurrentDispatcher, np = g.ReactCurrentBatchConfig, ig, jc;
    ig = /* @__PURE__ */ new Set();
    var Wo = I, St = null, bn = null, kn = null, t0 = !1, rp = !1, up = 0, O2 = 0, N2 = 25, Q = null, Bu = null, Ll = -1, lg = !1;
    function Dt() {
      {
        var e = Q;
        Bu === null ? Bu = [e] : Bu.push(e);
      }
    }
    function se() {
      {
        var e = Q;
        Bu !== null && (Ll++, Bu[Ll] !== e && L2(e));
      }
    }
    function Vc(e) {
      e != null && !yn(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Q, typeof e);
    }
    function L2(e) {
      {
        var t = Qe(St);
        if (!ig.has(t) && (ig.add(t), Bu !== null)) {
          for (var u = "", a = 30, l = 0; l <= Ll; l++) {
            for (var s = Bu[l], d = l === Ll ? e : s, h = l + 1 + ". " + s; h.length < a; )
              h += " ";
            h += d + `
`, u += h;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, u);
        }
      }
    }
    function yr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function og(e, t) {
      if (lg)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Q), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var u = 0; u < t.length && u < e.length; u++)
        if (!Se(e[u], t[u]))
          return !1;
      return !0;
    }
    function Ic(e, t, u, a, l, s) {
      Wo = s, St = t, Bu = e !== null ? e._debugHookTypes : null, Ll = -1, lg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? ge.current = PC : Bu !== null ? ge.current = $C : ge.current = HC;
      var d = u(a, l);
      if (rp) {
        var h = 0;
        do {
          if (rp = !1, up = 0, h >= N2)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, lg = !1, bn = null, kn = null, t.updateQueue = null, Ll = -1, ge.current = jC, d = u(a, l);
        } while (rp);
      }
      ge.current = v0, t._debugHookTypes = Bu;
      var m = bn !== null && bn.next !== null;
      if (Wo = I, St = null, bn = null, kn = null, Q = null, Bu = null, Ll = -1, e !== null && (e.flags & xn) !== (t.flags & xn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Je) !== Le && y("Internal React error: Expected static flag was missing. Please notify the React team."), t0 = !1, m)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Gc() {
      var e = up !== 0;
      return up = 0, e;
    }
    function CC(e, t, u) {
      t.updateQueue = e.updateQueue, (t.mode & Vr) !== Le ? t.flags &= ~(ii | sr | Mt | Ye) : t.flags &= ~(Mt | Ye), e.lanes = fl(e.lanes, u);
    }
    function EC() {
      if (ge.current = v0, t0) {
        for (var e = St.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        t0 = !1;
      }
      Wo = I, St = null, bn = null, kn = null, Bu = null, Ll = -1, Q = null, NC = !1, rp = !1, up = 0;
    }
    function $a() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return kn === null ? St.memoizedState = kn = e : kn = kn.next = e, kn;
    }
    function _u() {
      var e;
      if (bn === null) {
        var t = St.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = bn.next;
      var u;
      if (kn === null ? u = St.memoizedState : u = kn.next, u !== null)
        kn = u, u = kn.next, bn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        bn = e;
        var a = {
          memoizedState: bn.memoizedState,
          baseState: bn.baseState,
          baseQueue: bn.baseQueue,
          queue: bn.queue,
          next: null
        };
        kn === null ? St.memoizedState = kn = a : kn = kn.next = a;
      }
      return kn;
    }
    function AC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function sg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function cg(e, t, u) {
      var a = $a(), l;
      u !== void 0 ? l = u(t) : l = t, a.memoizedState = a.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      a.queue = s;
      var d = s.dispatch = H2.bind(null, St, s);
      return [a.memoizedState, d];
    }
    function fg(e, t, u) {
      var a = _u(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = bn, d = s.baseQueue, h = l.pending;
      if (h !== null) {
        if (d !== null) {
          var m = d.next, C = h.next;
          d.next = C, h.next = m;
        }
        s.baseQueue !== d && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = h, l.pending = null;
      }
      if (d !== null) {
        var E = d.next, B = s.baseState, x = null, U = null, z = null, j = E;
        do {
          var De = j.lane;
          if (mi(Wo, De)) {
            if (z !== null) {
              var Be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: lt,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              z = z.next = Be;
            }
            if (j.hasEagerState)
              B = j.eagerState;
            else {
              var st = j.action;
              B = e(B, st);
            }
          } else {
            var ke = {
              lane: De,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            z === null ? (U = z = ke, x = B) : z = z.next = ke, St.lanes = Ke(St.lanes, De), Sp(De);
          }
          j = j.next;
        } while (j !== null && j !== E);
        z === null ? x = B : z.next = U, Se(B, a.memoizedState) || fp(), a.memoizedState = B, a.baseState = x, a.baseQueue = z, l.lastRenderedState = B;
      }
      var rt = l.interleaved;
      if (rt !== null) {
        var k = rt;
        do {
          var V = k.lane;
          St.lanes = Ke(St.lanes, V), Sp(V), k = k.next;
        } while (k !== rt);
      } else
        d === null && (l.lanes = I);
      var O = l.dispatch;
      return [a.memoizedState, O];
    }
    function dg(e, t, u) {
      var a = _u(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, h = a.memoizedState;
      if (d !== null) {
        l.pending = null;
        var m = d.next, C = m;
        do {
          var E = C.action;
          h = e(h, E), C = C.next;
        } while (C !== m);
        Se(h, a.memoizedState) || fp(), a.memoizedState = h, a.baseQueue === null && (a.baseState = h), l.lastRenderedState = h;
      }
      return [h, s];
    }
    function I5(e, t, u) {
    }
    function G5(e, t, u) {
    }
    function pg(e, t, u) {
      var a = St, l = $a(), s, d = Xn();
      if (d) {
        if (u === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = u(), jc || s !== u() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), jc = !0);
      } else {
        if (s = t(), !jc) {
          var h = t();
          Se(s, h) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), jc = !0);
        }
        var m = k0();
        if (m === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(m, Wo) || SC(a, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, i0(TC.bind(null, a, C, e), [e]), a.flags |= Mt, ap(Bn | Jn, FC.bind(null, a, C, s, t), void 0, null), s;
    }
    function n0(e, t, u) {
      var a = St, l = _u(), s = t();
      if (!jc) {
        var d = t();
        Se(s, d) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), jc = !0);
      }
      var h = l.memoizedState, m = !Se(h, s);
      m && (l.memoizedState = s, fp());
      var C = l.queue;
      if (lp(TC.bind(null, a, C, e), [e]), C.getSnapshot !== t || m || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      kn !== null && kn.memoizedState.tag & Bn) {
        a.flags |= Mt, ap(Bn | Jn, FC.bind(null, a, C, s, t), void 0, null);
        var E = k0();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(E, Wo) || SC(a, t, s);
      }
      return s;
    }
    function SC(e, t, u) {
      e.flags |= yo;
      var a = {
        getSnapshot: t,
        value: u
      }, l = St.updateQueue;
      if (l === null)
        l = AC(), St.updateQueue = l, l.stores = [a];
      else {
        var s = l.stores;
        s === null ? l.stores = [a] : s.push(a);
      }
    }
    function FC(e, t, u, a) {
      t.value = u, t.getSnapshot = a, xC(t) && RC(e);
    }
    function TC(e, t, u) {
      var a = function() {
        xC(t) && RC(e);
      };
      return u(a);
    }
    function xC(e) {
      var t = e.getSnapshot, u = e.value;
      try {
        var a = t();
        return !Se(u, a);
      } catch {
        return !0;
      }
    }
    function RC(e) {
      var t = qr(e, Ue);
      t !== null && Mn(t, e, Ue, Bt);
    }
    function r0(e) {
      var t = $a();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var u = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: sg,
        lastRenderedState: e
      };
      t.queue = u;
      var a = u.dispatch = $2.bind(null, St, u);
      return [t.memoizedState, a];
    }
    function vg(e) {
      return fg(sg);
    }
    function hg(e) {
      return dg(sg);
    }
    function ap(e, t, u, a) {
      var l = {
        tag: e,
        create: t,
        destroy: u,
        deps: a,
        // Circular
        next: null
      }, s = St.updateQueue;
      if (s === null)
        s = AC(), St.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = l.next = l;
        else {
          var h = d.next;
          d.next = l, l.next = h, s.lastEffect = l;
        }
      }
      return l;
    }
    function mg(e) {
      var t = $a();
      {
        var u = {
          current: e
        };
        return t.memoizedState = u, u;
      }
    }
    function u0(e) {
      var t = _u();
      return t.memoizedState;
    }
    function ip(e, t, u, a) {
      var l = $a(), s = a === void 0 ? null : a;
      St.flags |= e, l.memoizedState = ap(Bn | t, u, void 0, s);
    }
    function a0(e, t, u, a) {
      var l = _u(), s = a === void 0 ? null : a, d = void 0;
      if (bn !== null) {
        var h = bn.memoizedState;
        if (d = h.destroy, s !== null) {
          var m = h.deps;
          if (og(s, m)) {
            l.memoizedState = ap(t, u, d, s);
            return;
          }
        }
      }
      St.flags |= e, l.memoizedState = ap(Bn | t, u, d, s);
    }
    function i0(e, t) {
      return (St.mode & Vr) !== Le ? ip(ii | Mt | Aa, Jn, e, t) : ip(Mt | Aa, Jn, e, t);
    }
    function lp(e, t) {
      return a0(Mt, Jn, e, t);
    }
    function yg(e, t) {
      return ip(Ye, Ha, e, t);
    }
    function l0(e, t) {
      return a0(Ye, Ha, e, t);
    }
    function gg(e, t) {
      var u = Ye;
      return u |= or, (St.mode & Vr) !== Le && (u |= sr), ip(u, _n, e, t);
    }
    function o0(e, t) {
      return a0(Ye, _n, e, t);
    }
    function wC(e, t) {
      if (typeof t == "function") {
        var u = t, a = e();
        return u(a), function() {
          u(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function Dg(e, t, u) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = u != null ? u.concat([e]) : null, l = Ye;
      return l |= or, (St.mode & Vr) !== Le && (l |= sr), ip(l, _n, wC.bind(null, t, e), a);
    }
    function s0(e, t, u) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = u != null ? u.concat([e]) : null;
      return a0(Ye, _n, wC.bind(null, t, e), a);
    }
    function M2(e, t) {
    }
    var c0 = M2;
    function Cg(e, t) {
      var u = $a(), a = t === void 0 ? null : t;
      return u.memoizedState = [e, a], e;
    }
    function f0(e, t) {
      var u = _u(), a = t === void 0 ? null : t, l = u.memoizedState;
      if (l !== null && a !== null) {
        var s = l[1];
        if (og(a, s))
          return l[0];
      }
      return u.memoizedState = [e, a], e;
    }
    function Eg(e, t) {
      var u = $a(), a = t === void 0 ? null : t, l = e();
      return u.memoizedState = [l, a], l;
    }
    function d0(e, t) {
      var u = _u(), a = t === void 0 ? null : t, l = u.memoizedState;
      if (l !== null && a !== null) {
        var s = l[1];
        if (og(a, s))
          return l[0];
      }
      var d = e();
      return u.memoizedState = [d, a], d;
    }
    function Ag(e) {
      var t = $a();
      return t.memoizedState = e, e;
    }
    function BC(e) {
      var t = _u(), u = bn, a = u.memoizedState;
      return bC(t, a, e);
    }
    function _C(e) {
      var t = _u();
      if (bn === null)
        return t.memoizedState = e, e;
      var u = bn.memoizedState;
      return bC(t, u, e);
    }
    function bC(e, t, u) {
      var a = !wm(Wo);
      if (a) {
        if (!Se(u, t)) {
          var l = od();
          St.lanes = Ke(St.lanes, l), Sp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, fp()), e.memoizedState = u, u;
    }
    function U2(e, t, u) {
      var a = Gr();
      dn(Vn(a, wn)), e(!0);
      var l = np.transition;
      np.transition = {};
      var s = np.transition;
      np.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (dn(a), np.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Sg() {
      var e = r0(!1), t = e[0], u = e[1], a = U2.bind(null, u), l = $a();
      return l.memoizedState = a, [t, a];
    }
    function kC() {
      var e = vg(), t = e[0], u = _u(), a = u.memoizedState;
      return [t, a];
    }
    function OC() {
      var e = hg(), t = e[0], u = _u(), a = u.memoizedState;
      return [t, a];
    }
    var NC = !1;
    function z2() {
      return NC;
    }
    function Fg() {
      var e = $a(), t = k0(), u = t.identifierPrefix, a;
      if (Xn()) {
        var l = JT();
        a = ":" + u + "R" + l;
        var s = up++;
        s > 0 && (a += "H" + s.toString(32)), a += ":";
      } else {
        var d = O2++;
        a = ":" + u + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function p0() {
      var e = _u(), t = e.memoizedState;
      return t;
    }
    function H2(e, t, u) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = $l(e), l = {
        lane: a,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (LC(e))
        MC(t, l);
      else {
        var s = ZD(e, t, l, a);
        if (s !== null) {
          var d = _r();
          Mn(s, e, a, d), UC(s, t, a);
        }
      }
      zC(e, a);
    }
    function $2(e, t, u) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = $l(e), l = {
        lane: a,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (LC(e))
        MC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var h;
            h = ge.current, ge.current = ra;
            try {
              var m = t.lastRenderedState, C = d(m, u);
              if (l.hasEagerState = !0, l.eagerState = C, Se(C, m)) {
                g2(e, t, l, a);
                return;
              }
            } catch {
            } finally {
              ge.current = h;
            }
          }
        }
        var E = ZD(e, t, l, a);
        if (E !== null) {
          var B = _r();
          Mn(E, e, a, B), UC(E, t, a);
        }
      }
      zC(e, a);
    }
    function LC(e) {
      var t = e.alternate;
      return e === St || t !== null && t === St;
    }
    function MC(e, t) {
      rp = t0 = !0;
      var u = e.pending;
      u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t;
    }
    function UC(e, t, u) {
      if (ld(u)) {
        var a = t.lanes;
        a = sd(a, e.pendingLanes);
        var l = Ke(a, u);
        t.lanes = l, dl(e, l);
      }
    }
    function zC(e, t, u) {
      wa(e, t);
    }
    var v0 = {
      readContext: Fn,
      useCallback: yr,
      useContext: yr,
      useEffect: yr,
      useImperativeHandle: yr,
      useInsertionEffect: yr,
      useLayoutEffect: yr,
      useMemo: yr,
      useReducer: yr,
      useRef: yr,
      useState: yr,
      useDebugValue: yr,
      useDeferredValue: yr,
      useTransition: yr,
      useMutableSource: yr,
      useSyncExternalStore: yr,
      useId: yr,
      unstable_isNewReconciler: ie
    }, HC = null, $C = null, PC = null, jC = null, Pa = null, ra = null, h0 = null;
    {
      var Tg = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, je = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      HC = {
        readContext: function(e) {
          return Fn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Dt(), Vc(t), Cg(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Dt(), Fn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Dt(), Vc(t), i0(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return Q = "useImperativeHandle", Dt(), Vc(u), Dg(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Dt(), Vc(t), yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Dt(), Vc(t), gg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Dt(), Vc(t);
          var u = ge.current;
          ge.current = Pa;
          try {
            return Eg(e, t);
          } finally {
            ge.current = u;
          }
        },
        useReducer: function(e, t, u) {
          Q = "useReducer", Dt();
          var a = ge.current;
          ge.current = Pa;
          try {
            return cg(e, t, u);
          } finally {
            ge.current = a;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Dt(), mg(e);
        },
        useState: function(e) {
          Q = "useState", Dt();
          var t = ge.current;
          ge.current = Pa;
          try {
            return r0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Dt(), Ag(e);
        },
        useTransition: function() {
          return Q = "useTransition", Dt(), Sg();
        },
        useMutableSource: function(e, t, u) {
          return Q = "useMutableSource", Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return Q = "useSyncExternalStore", Dt(), pg(e, t, u);
        },
        useId: function() {
          return Q = "useId", Dt(), Fg();
        },
        unstable_isNewReconciler: ie
      }, $C = {
        readContext: function(e) {
          return Fn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", se(), Cg(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", se(), Fn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", se(), i0(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return Q = "useImperativeHandle", se(), Dg(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", se(), yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", se(), gg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", se();
          var u = ge.current;
          ge.current = Pa;
          try {
            return Eg(e, t);
          } finally {
            ge.current = u;
          }
        },
        useReducer: function(e, t, u) {
          Q = "useReducer", se();
          var a = ge.current;
          ge.current = Pa;
          try {
            return cg(e, t, u);
          } finally {
            ge.current = a;
          }
        },
        useRef: function(e) {
          return Q = "useRef", se(), mg(e);
        },
        useState: function(e) {
          Q = "useState", se();
          var t = ge.current;
          ge.current = Pa;
          try {
            return r0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", se(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", se(), Ag(e);
        },
        useTransition: function() {
          return Q = "useTransition", se(), Sg();
        },
        useMutableSource: function(e, t, u) {
          return Q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return Q = "useSyncExternalStore", se(), pg(e, t, u);
        },
        useId: function() {
          return Q = "useId", se(), Fg();
        },
        unstable_isNewReconciler: ie
      }, PC = {
        readContext: function(e) {
          return Fn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", se(), f0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", se(), Fn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", se(), lp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return Q = "useImperativeHandle", se(), s0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", se(), l0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", se(), o0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", se();
          var u = ge.current;
          ge.current = ra;
          try {
            return d0(e, t);
          } finally {
            ge.current = u;
          }
        },
        useReducer: function(e, t, u) {
          Q = "useReducer", se();
          var a = ge.current;
          ge.current = ra;
          try {
            return fg(e, t, u);
          } finally {
            ge.current = a;
          }
        },
        useRef: function(e) {
          return Q = "useRef", se(), u0();
        },
        useState: function(e) {
          Q = "useState", se();
          var t = ge.current;
          ge.current = ra;
          try {
            return vg(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", se(), c0();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", se(), BC(e);
        },
        useTransition: function() {
          return Q = "useTransition", se(), kC();
        },
        useMutableSource: function(e, t, u) {
          return Q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return Q = "useSyncExternalStore", se(), n0(e, t);
        },
        useId: function() {
          return Q = "useId", se(), p0();
        },
        unstable_isNewReconciler: ie
      }, jC = {
        readContext: function(e) {
          return Fn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", se(), f0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", se(), Fn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", se(), lp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return Q = "useImperativeHandle", se(), s0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", se(), l0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", se(), o0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", se();
          var u = ge.current;
          ge.current = h0;
          try {
            return d0(e, t);
          } finally {
            ge.current = u;
          }
        },
        useReducer: function(e, t, u) {
          Q = "useReducer", se();
          var a = ge.current;
          ge.current = h0;
          try {
            return dg(e, t, u);
          } finally {
            ge.current = a;
          }
        },
        useRef: function(e) {
          return Q = "useRef", se(), u0();
        },
        useState: function(e) {
          Q = "useState", se();
          var t = ge.current;
          ge.current = h0;
          try {
            return hg(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", se(), c0();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", se(), _C(e);
        },
        useTransition: function() {
          return Q = "useTransition", se(), OC();
        },
        useMutableSource: function(e, t, u) {
          return Q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return Q = "useSyncExternalStore", se(), n0(e, t);
        },
        useId: function() {
          return Q = "useId", se(), p0();
        },
        unstable_isNewReconciler: ie
      }, Pa = {
        readContext: function(e) {
          return Tg(), Fn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", je(), Dt(), Cg(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", je(), Dt(), Fn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", je(), Dt(), i0(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return Q = "useImperativeHandle", je(), Dt(), Dg(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", je(), Dt(), yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", je(), Dt(), gg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", je(), Dt();
          var u = ge.current;
          ge.current = Pa;
          try {
            return Eg(e, t);
          } finally {
            ge.current = u;
          }
        },
        useReducer: function(e, t, u) {
          Q = "useReducer", je(), Dt();
          var a = ge.current;
          ge.current = Pa;
          try {
            return cg(e, t, u);
          } finally {
            ge.current = a;
          }
        },
        useRef: function(e) {
          return Q = "useRef", je(), Dt(), mg(e);
        },
        useState: function(e) {
          Q = "useState", je(), Dt();
          var t = ge.current;
          ge.current = Pa;
          try {
            return r0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", je(), Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", je(), Dt(), Ag(e);
        },
        useTransition: function() {
          return Q = "useTransition", je(), Dt(), Sg();
        },
        useMutableSource: function(e, t, u) {
          return Q = "useMutableSource", je(), Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return Q = "useSyncExternalStore", je(), Dt(), pg(e, t, u);
        },
        useId: function() {
          return Q = "useId", je(), Dt(), Fg();
        },
        unstable_isNewReconciler: ie
      }, ra = {
        readContext: function(e) {
          return Tg(), Fn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", je(), se(), f0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", je(), se(), Fn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", je(), se(), lp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return Q = "useImperativeHandle", je(), se(), s0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", je(), se(), l0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", je(), se(), o0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", je(), se();
          var u = ge.current;
          ge.current = ra;
          try {
            return d0(e, t);
          } finally {
            ge.current = u;
          }
        },
        useReducer: function(e, t, u) {
          Q = "useReducer", je(), se();
          var a = ge.current;
          ge.current = ra;
          try {
            return fg(e, t, u);
          } finally {
            ge.current = a;
          }
        },
        useRef: function(e) {
          return Q = "useRef", je(), se(), u0();
        },
        useState: function(e) {
          Q = "useState", je(), se();
          var t = ge.current;
          ge.current = ra;
          try {
            return vg(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", je(), se(), c0();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", je(), se(), BC(e);
        },
        useTransition: function() {
          return Q = "useTransition", je(), se(), kC();
        },
        useMutableSource: function(e, t, u) {
          return Q = "useMutableSource", je(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return Q = "useSyncExternalStore", je(), se(), n0(e, t);
        },
        useId: function() {
          return Q = "useId", je(), se(), p0();
        },
        unstable_isNewReconciler: ie
      }, h0 = {
        readContext: function(e) {
          return Tg(), Fn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", je(), se(), f0(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", je(), se(), Fn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", je(), se(), lp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return Q = "useImperativeHandle", je(), se(), s0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", je(), se(), l0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", je(), se(), o0(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", je(), se();
          var u = ge.current;
          ge.current = ra;
          try {
            return d0(e, t);
          } finally {
            ge.current = u;
          }
        },
        useReducer: function(e, t, u) {
          Q = "useReducer", je(), se();
          var a = ge.current;
          ge.current = ra;
          try {
            return dg(e, t, u);
          } finally {
            ge.current = a;
          }
        },
        useRef: function(e) {
          return Q = "useRef", je(), se(), u0();
        },
        useState: function(e) {
          Q = "useState", je(), se();
          var t = ge.current;
          ge.current = ra;
          try {
            return hg(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", je(), se(), c0();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", je(), se(), _C(e);
        },
        useTransition: function() {
          return Q = "useTransition", je(), se(), OC();
        },
        useMutableSource: function(e, t, u) {
          return Q = "useMutableSource", je(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return Q = "useSyncExternalStore", je(), se(), n0(e, t);
        },
        useId: function() {
          return Q = "useId", je(), se(), p0();
        },
        unstable_isNewReconciler: ie
      };
    }
    var Ml = v.unstable_now, VC = 0, m0 = -1, op = -1, y0 = -1, xg = !1, g0 = !1;
    function IC() {
      return xg;
    }
    function P2() {
      g0 = !0;
    }
    function j2() {
      xg = !1, g0 = !1;
    }
    function V2() {
      xg = g0, g0 = !1;
    }
    function GC() {
      return VC;
    }
    function QC() {
      VC = Ml();
    }
    function Rg(e) {
      op = Ml(), e.actualStartTime < 0 && (e.actualStartTime = Ml());
    }
    function YC(e) {
      op = -1;
    }
    function D0(e, t) {
      if (op >= 0) {
        var u = Ml() - op;
        e.actualDuration += u, t && (e.selfBaseDuration = u), op = -1;
      }
    }
    function ja(e) {
      if (m0 >= 0) {
        var t = Ml() - m0;
        m0 = -1;
        for (var u = e.return; u !== null; ) {
          switch (u.tag) {
            case re:
              var a = u.stateNode;
              a.effectDuration += t;
              return;
            case We:
              var l = u.stateNode;
              l.effectDuration += t;
              return;
          }
          u = u.return;
        }
      }
    }
    function wg(e) {
      if (y0 >= 0) {
        var t = Ml() - y0;
        y0 = -1;
        for (var u = e.return; u !== null; ) {
          switch (u.tag) {
            case re:
              var a = u.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
            case We:
              var l = u.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          u = u.return;
        }
      }
    }
    function Va() {
      m0 = Ml();
    }
    function Bg() {
      y0 = Ml();
    }
    function _g(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function qo(e, t) {
      return {
        value: e,
        source: t,
        stack: yf(t),
        digest: null
      };
    }
    function bg(e, t, u) {
      return {
        value: e,
        source: null,
        stack: u ?? null,
        digest: t ?? null
      };
    }
    function I2(e, t) {
      return !0;
    }
    function kg(e, t) {
      try {
        var u = I2(e, t);
        if (u === !1)
          return;
        var a = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === G)
            return;
          console.error(a);
        }
        var h = l ? Qe(l) : null, m = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === re)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = Qe(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var B = m + `
` + d + `

` + ("" + C);
        console.error(B);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var G2 = typeof WeakMap == "function" ? WeakMap : Map;
    function KC(e, t, u) {
      var a = ki(Bt, u);
      a.tag = ky, a.payload = {
        element: null
      };
      var l = t.value;
      return a.callback = function() {
        UR(l), kg(e, t);
      }, a;
    }
    function Og(e, t, u) {
      var a = ki(Bt, u);
      a.tag = ky;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        a.payload = function() {
          return l(s);
        }, a.callback = function() {
          aA(e), kg(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (a.callback = function() {
        aA(e), kg(e, t), typeof l != "function" && LR(this);
        var m = t.value, C = t.stack;
        this.componentDidCatch(m, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (vr(e.lanes, Ue) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Qe(e) || "Unknown"));
      }), a;
    }
    function WC(e, t, u) {
      var a = e.pingCache, l;
      if (a === null ? (a = e.pingCache = new G2(), l = /* @__PURE__ */ new Set(), a.set(t, l)) : (l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l))), !l.has(u)) {
        l.add(u);
        var s = zR.bind(null, e, t, u);
        Rn && Fp(e, u), t.then(s, s);
      }
    }
    function Q2(e, t, u, a) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(u), e.updateQueue = s;
      } else
        l.add(u);
    }
    function Y2(e, t) {
      var u = e.tag;
      if ((e.mode & Je) === Le && (u === K || u === Ge || u === Oe)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function qC(e) {
      var t = e;
      do {
        if (t.tag === de && b2(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function XC(e, t, u, a, l) {
      if ((e.mode & Je) === Le) {
        if (e === t)
          e.flags |= Dn;
        else {
          if (e.flags |= He, u.flags |= go, u.flags &= ~(_s | Ar), u.tag === G) {
            var s = u.alternate;
            if (s === null)
              u.tag = _t;
            else {
              var d = ki(Bt, Ue);
              d.tag = Vh, kl(u, d, Ue);
            }
          }
          u.lanes = Ke(u.lanes, Ue);
        }
        return e;
      }
      return e.flags |= Dn, e.lanes = l, e;
    }
    function K2(e, t, u, a, l) {
      if (u.flags |= Ar, Rn && Fp(e, l), a !== null && typeof a == "object" && typeof a.then == "function") {
        var s = a;
        Y2(u), Xn() && u.mode & Je && PD();
        var d = qC(t);
        if (d !== null) {
          d.flags &= ~Qt, XC(d, t, u, e, l), d.mode & Je && WC(e, s, l), Q2(d, e, s);
          return;
        } else {
          if (!cl(l)) {
            WC(e, s, l), d1();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = h;
        }
      } else if (Xn() && u.mode & Je) {
        PD();
        var m = qC(t);
        if (m !== null) {
          (m.flags & Dn) === be && (m.flags |= Qt), XC(m, t, u, e, l), Ty(qo(a, u));
          return;
        }
      }
      a = qo(a, u), RR(a);
      var C = t;
      do {
        switch (C.tag) {
          case re: {
            var E = a;
            C.flags |= Dn;
            var B = fn(l);
            C.lanes = Ke(C.lanes, B);
            var x = KC(C, E, B);
            Ly(C, x);
            return;
          }
          case G:
            var U = a, z = C.type, j = C.stateNode;
            if ((C.flags & He) === be && (typeof z.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !qE(j))) {
              C.flags |= Dn;
              var De = fn(l);
              C.lanes = Ke(C.lanes, De);
              var ke = Og(C, U, De);
              Ly(C, ke);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function W2() {
      return null;
    }
    var sp = g.ReactCurrentOwner, ua = !1, Ng, cp, Lg, Mg, Ug, Xo, zg, C0;
    Ng = {}, cp = {}, Lg = {}, Mg = {}, Ug = {}, Xo = !1, zg = {}, C0 = {};
    function wr(e, t, u, a) {
      e === null ? t.child = hC(t, null, u, a) : t.child = zc(t, e.child, u, a);
    }
    function q2(e, t, u, a) {
      t.child = zc(t, e.child, null, a), t.child = zc(t, null, u, a);
    }
    function JC(e, t, u, a, l) {
      if (t.type !== t.elementType) {
        var s = u.propTypes;
        s && Ju(
          s,
          a,
          // Resolved props
          "prop",
          Rt(u)
        );
      }
      var d = u.render, h = t.ref, m, C;
      Uc(t, l), Ra(t);
      {
        if (sp.current = t, lu(!0), m = Ic(e, t, d, a, h, l), C = Gc(), t.mode & Ht) {
          cn(!0);
          try {
            m = Ic(e, t, d, a, h, l), C = Gc();
          } finally {
            cn(!1);
          }
        }
        lu(!1);
      }
      return li(), e !== null && !ua ? (CC(e, t, l), Oi(e, t, l)) : (Xn() && C && Dy(t), t.flags |= Ca, wr(e, t, m, l), t.child);
    }
    function ZC(e, t, u, a, l) {
      if (e === null) {
        var s = u.type;
        if (t3(s) && u.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        u.defaultProps === void 0) {
          var d = s;
          return d = Zc(s), t.tag = Oe, t.type = d, Pg(t, s), eE(e, t, d, a, l);
        }
        {
          var h = s.propTypes;
          h && Ju(
            h,
            a,
            // Resolved props
            "prop",
            Rt(s)
          );
        }
        var m = S1(u.type, null, a, t, t.mode, l);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var C = u.type, E = C.propTypes;
        E && Ju(
          E,
          a,
          // Resolved props
          "prop",
          Rt(C)
        );
      }
      var B = e.child, x = Yg(e, l);
      if (!x) {
        var U = B.memoizedProps, z = u.compare;
        if (z = z !== null ? z : _e, z(U, a) && e.ref === t.ref)
          return Oi(e, t, l);
      }
      t.flags |= Ca;
      var j = ns(B, a);
      return j.ref = t.ref, j.return = t, t.child = j, j;
    }
    function eE(e, t, u, a, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Kn) {
          var d = s, h = d._payload, m = d._init;
          try {
            s = m(h);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && Ju(
            C,
            a,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Rt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (_e(E, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ua = !1, t.pendingProps = a = E, Yg(e, l))
            (e.flags & go) !== be && (ua = !0);
          else
            return t.lanes = e.lanes, Oi(e, t, l);
      }
      return Hg(e, t, u, a, l);
    }
    function tE(e, t, u) {
      var a = t.pendingProps, l = a.children, s = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || ce)
        if ((t.mode & Je) === Le) {
          var d = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, O0(t, u);
        } else if (vr(u, pr)) {
          var B = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = B;
          var x = s !== null ? s.baseLanes : u;
          O0(t, x);
        } else {
          var h = null, m;
          if (s !== null) {
            var C = s.baseLanes;
            m = Ke(C, u);
          } else
            m = u;
          t.lanes = t.childLanes = pr;
          var E = {
            baseLanes: m,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, O0(t, m), null;
        }
      else {
        var U;
        s !== null ? (U = Ke(s.baseLanes, u), t.memoizedState = null) : U = u, O0(t, U);
      }
      return wr(e, t, l, u), t.child;
    }
    function X2(e, t, u) {
      var a = t.pendingProps;
      return wr(e, t, a, u), t.child;
    }
    function J2(e, t, u) {
      var a = t.pendingProps.children;
      return wr(e, t, a, u), t.child;
    }
    function Z2(e, t, u) {
      {
        t.flags |= Ye;
        {
          var a = t.stateNode;
          a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return wr(e, t, s, u), t.child;
    }
    function nE(e, t) {
      var u = t.ref;
      (e === null && u !== null || e !== null && e.ref !== u) && (t.flags |= lr, t.flags |= Qf);
    }
    function Hg(e, t, u, a, l) {
      if (t.type !== t.elementType) {
        var s = u.propTypes;
        s && Ju(
          s,
          a,
          // Resolved props
          "prop",
          Rt(u)
        );
      }
      var d;
      {
        var h = bc(t, u, !0);
        d = kc(t, h);
      }
      var m, C;
      Uc(t, l), Ra(t);
      {
        if (sp.current = t, lu(!0), m = Ic(e, t, u, a, d, l), C = Gc(), t.mode & Ht) {
          cn(!0);
          try {
            m = Ic(e, t, u, a, d, l), C = Gc();
          } finally {
            cn(!1);
          }
        }
        lu(!1);
      }
      return li(), e !== null && !ua ? (CC(e, t, l), Oi(e, t, l)) : (Xn() && C && Dy(t), t.flags |= Ca, wr(e, t, m, l), t.child);
    }
    function rE(e, t, u, a, l) {
      {
        switch (m3(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, h = new d(t.memoizedProps, s.context), m = h.state;
            s.updater.enqueueSetState(s, m, null);
            break;
          }
          case !0: {
            t.flags |= He, t.flags |= Dn;
            var C = new Error("Simulated error coming from DevTools"), E = fn(l);
            t.lanes = Ke(t.lanes, E);
            var B = Og(t, qo(C, t), E);
            Ly(t, B);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = u.propTypes;
          x && Ju(
            x,
            a,
            // Resolved props
            "prop",
            Rt(u)
          );
        }
      }
      var U;
      za(u) ? (U = !0, kh(t)) : U = !1, Uc(t, l);
      var z = t.stateNode, j;
      z === null ? (A0(e, t), cC(t, u, a), Yy(t, u, a, l), j = !0) : e === null ? j = T2(t, u, a, l) : j = x2(e, t, u, a, l);
      var De = $g(e, t, u, j, U, l);
      {
        var ke = t.stateNode;
        j && ke.props !== a && (Xo || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Qe(t) || "a component"), Xo = !0);
      }
      return De;
    }
    function $g(e, t, u, a, l, s) {
      nE(e, t);
      var d = (t.flags & He) !== be;
      if (!a && !d)
        return l && UD(t, u, !1), Oi(e, t, s);
      var h = t.stateNode;
      sp.current = t;
      var m;
      if (d && typeof u.getDerivedStateFromError != "function")
        m = null, YC();
      else {
        Ra(t);
        {
          if (lu(!0), m = h.render(), t.mode & Ht) {
            cn(!0);
            try {
              h.render();
            } finally {
              cn(!1);
            }
          }
          lu(!1);
        }
        li();
      }
      return t.flags |= Ca, e !== null && d ? q2(e, t, m, s) : wr(e, t, m, s), t.memoizedState = h.state, l && UD(t, u, !0), t.child;
    }
    function uE(e) {
      var t = e.stateNode;
      t.pendingContext ? LD(e, t.pendingContext, t.pendingContext !== t.context) : t.context && LD(e, t.context, !1), Zy(e, t.containerInfo);
    }
    function ex(e, t, u) {
      if (uE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, l = t.memoizedState, s = l.element;
      nC(e, t), Yh(t, a, null, u);
      var d = t.memoizedState;
      t.stateNode;
      var h = d.element;
      if (l.isDehydrated) {
        var m = {
          element: h,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, C = t.updateQueue;
        if (C.baseState = m, t.memoizedState = m, t.flags & Qt) {
          var E = qo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return aE(e, t, h, u, E);
        } else if (h !== s) {
          var B = qo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return aE(e, t, h, u, B);
        } else {
          u2(t);
          var x = hC(t, null, h, u);
          t.child = x;
          for (var U = x; U; )
            U.flags = U.flags & ~bt | $r, U = U.sibling;
        }
      } else {
        if (Lc(), h === s)
          return Oi(e, t, u);
        wr(e, t, h, u);
      }
      return t.child;
    }
    function aE(e, t, u, a, l) {
      return Lc(), Ty(l), t.flags |= Qt, wr(e, t, u, a), t.child;
    }
    function tx(e, t, u) {
      yC(t), e === null && Fy(t);
      var a = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, h = ay(a, l);
      return h ? d = null : s !== null && ay(a, s) && (t.flags |= gt), nE(e, t), wr(e, t, d, u), t.child;
    }
    function nx(e, t) {
      return e === null && Fy(t), null;
    }
    function rx(e, t, u, a) {
      A0(e, t);
      var l = t.pendingProps, s = u, d = s._payload, h = s._init, m = h(d);
      t.type = m;
      var C = t.tag = n3(m), E = ta(m, l), B;
      switch (C) {
        case K:
          return Pg(t, m), t.type = m = Zc(m), B = Hg(null, t, m, E, a), B;
        case G:
          return t.type = m = y1(m), B = rE(null, t, m, E, a), B;
        case Ge:
          return t.type = m = g1(m), B = JC(null, t, m, E, a), B;
        case Y: {
          if (t.type !== t.elementType) {
            var x = m.propTypes;
            x && Ju(
              x,
              E,
              // Resolved for outer only
              "prop",
              Rt(m)
            );
          }
          return B = ZC(
            null,
            t,
            m,
            ta(m.type, E),
            // The inner type can have defaults too
            a
          ), B;
        }
      }
      var U = "";
      throw m !== null && typeof m == "object" && m.$$typeof === Kn && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + m + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function ux(e, t, u, a, l) {
      A0(e, t), t.tag = G;
      var s;
      return za(u) ? (s = !0, kh(t)) : s = !1, Uc(t, l), cC(t, u, a), Yy(t, u, a, l), $g(null, t, u, !0, s, l);
    }
    function ax(e, t, u, a) {
      A0(e, t);
      var l = t.pendingProps, s;
      {
        var d = bc(t, u, !1);
        s = kc(t, d);
      }
      Uc(t, a);
      var h, m;
      Ra(t);
      {
        if (u.prototype && typeof u.prototype.render == "function") {
          var C = Rt(u) || "Unknown";
          Ng[C] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), Ng[C] = !0);
        }
        t.mode & Ht && ea.recordLegacyContextWarning(t, null), lu(!0), sp.current = t, h = Ic(null, t, u, l, s, a), m = Gc(), lu(!1);
      }
      if (li(), t.flags |= Ca, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var E = Rt(u) || "Unknown";
        cp[E] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), cp[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var B = Rt(u) || "Unknown";
          cp[B] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", B, B, B), cp[B] = !0);
        }
        t.tag = G, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return za(u) ? (x = !0, kh(t)) : x = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Ny(t), sC(t, h), Yy(t, u, l, a), $g(null, t, u, !0, x, a);
      } else {
        if (t.tag = K, t.mode & Ht) {
          cn(!0);
          try {
            h = Ic(null, t, u, l, s, a), m = Gc();
          } finally {
            cn(!1);
          }
        }
        return Xn() && m && Dy(t), wr(null, t, h, a), Pg(t, u), t.child;
      }
    }
    function Pg(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var u = "", a = Mr();
          a && (u += `

Check the render method of \`` + a + "`.");
          var l = a || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), Ug[l] || (Ug[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", u));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Rt(t) || "Unknown";
          Mg[d] || (y("%s: Function components do not support getDerivedStateFromProps.", d), Mg[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Rt(t) || "Unknown";
          Lg[h] || (y("%s: Function components do not support contextType.", h), Lg[h] = !0);
        }
      }
    }
    var jg = {
      dehydrated: null,
      treeContext: null,
      retryLane: lt
    };
    function Vg(e) {
      return {
        baseLanes: e,
        cachePool: W2(),
        transitions: null
      };
    }
    function ix(e, t) {
      var u = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: u,
        transitions: e.transitions
      };
    }
    function lx(e, t, u, a) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return ng(e, tp);
    }
    function ox(e, t) {
      return fl(e.childLanes, t);
    }
    function iE(e, t, u) {
      var a = t.pendingProps;
      y3(t) && (t.flags |= He);
      var l = na.current, s = !1, d = (t.flags & He) !== be;
      if (d || lx(l, e) ? (s = !0, t.flags &= ~He) : (e === null || e.memoizedState !== null) && (l = _2(l, DC)), l = $c(l), Nl(t, l), e === null) {
        Fy(t);
        var h = t.memoizedState;
        if (h !== null) {
          var m = h.dehydrated;
          if (m !== null)
            return px(t, m);
        }
        var C = a.children, E = a.fallback;
        if (s) {
          var B = sx(t, C, E, u), x = t.child;
          return x.memoizedState = Vg(u), t.memoizedState = jg, B;
        } else
          return Ig(t, C);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var z = U.dehydrated;
          if (z !== null)
            return vx(e, t, d, a, z, U, u);
        }
        if (s) {
          var j = a.fallback, De = a.children, ke = fx(e, t, De, j, u), Be = t.child, st = e.child.memoizedState;
          return Be.memoizedState = st === null ? Vg(u) : ix(st, u), Be.childLanes = ox(e, u), t.memoizedState = jg, ke;
        } else {
          var rt = a.children, k = cx(e, t, rt, u);
          return t.memoizedState = null, k;
        }
      }
    }
    function Ig(e, t, u) {
      var a = e.mode, l = {
        mode: "visible",
        children: t
      }, s = Gg(l, a);
      return s.return = e, e.child = s, s;
    }
    function sx(e, t, u, a) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, h, m;
      return (l & Je) === Le && s !== null ? (h = s, h.childLanes = I, h.pendingProps = d, e.mode & Me && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), m = jl(u, l, a, null)) : (h = Gg(d, l), m = jl(u, l, a, null)), h.return = e, m.return = e, h.sibling = m, e.child = h, m;
    }
    function Gg(e, t, u) {
      return lA(e, t, I, null);
    }
    function lE(e, t) {
      return ns(e, t);
    }
    function cx(e, t, u, a) {
      var l = e.child, s = l.sibling, d = lE(l, {
        mode: "visible",
        children: u
      });
      if ((t.mode & Je) === Le && (d.lanes = a), d.return = t, d.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= mt) : h.push(s);
      }
      return t.child = d, d;
    }
    function fx(e, t, u, a, l) {
      var s = t.mode, d = e.child, h = d.sibling, m = {
        mode: "hidden",
        children: u
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Je) === Le && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var E = t.child;
        C = E, C.childLanes = I, C.pendingProps = m, t.mode & Me && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = d.selfBaseDuration, C.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        C = lE(d, m), C.subtreeFlags = d.subtreeFlags & xn;
      var B;
      return h !== null ? B = ns(h, a) : (B = jl(a, s, l, null), B.flags |= bt), B.return = t, C.return = t, C.sibling = B, t.child = C, B;
    }
    function E0(e, t, u, a) {
      a !== null && Ty(a), zc(t, e.child, null, u);
      var l = t.pendingProps, s = l.children, d = Ig(t, s);
      return d.flags |= bt, t.memoizedState = null, d;
    }
    function dx(e, t, u, a, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: u
      }, h = Gg(d, s), m = jl(a, s, l, null);
      return m.flags |= bt, h.return = t, m.return = t, h.sibling = m, t.child = h, (t.mode & Je) !== Le && zc(t, e.child, null, l), m;
    }
    function px(e, t, u) {
      return (e.mode & Je) === Le ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ue) : sy(t) ? e.lanes = ci : e.lanes = pr, null;
    }
    function vx(e, t, u, a, l, s, d) {
      if (u)
        if (t.flags & Qt) {
          t.flags &= ~Qt;
          var k = bg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return E0(e, t, d, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= He, null;
          var V = a.children, O = a.fallback, te = dx(e, t, V, O, d), Ce = t.child;
          return Ce.memoizedState = Vg(d), t.memoizedState = jg, te;
        }
      else {
        if (n2(), (t.mode & Je) === Le)
          return E0(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (sy(l)) {
          var h, m, C;
          {
            var E = DT(l);
            h = E.digest, m = E.message, C = E.stack;
          }
          var B;
          m ? B = new Error(m) : B = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = bg(B, h, C);
          return E0(e, t, d, x);
        }
        var U = vr(d, e.childLanes);
        if (ua || U) {
          var z = k0();
          if (z !== null) {
            var j = _m(z, d);
            if (j !== lt && j !== s.retryLane) {
              s.retryLane = j;
              var De = Bt;
              qr(e, j), Mn(z, e, j, De);
            }
          }
          d1();
          var ke = bg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return E0(e, t, d, ke);
        } else if (BD(l)) {
          t.flags |= He, t.child = e.child;
          var Be = HR.bind(null, e);
          return CT(l, Be), null;
        } else {
          a2(t, l, s.treeContext);
          var st = a.children, rt = Ig(t, st);
          return rt.flags |= $r, rt;
        }
      }
    }
    function oE(e, t, u) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), _y(e.return, t, u);
    }
    function hx(e, t, u) {
      for (var a = t; a !== null; ) {
        if (a.tag === de) {
          var l = a.memoizedState;
          l !== null && oE(a, u, e);
        } else if (a.tag === pe)
          oE(a, u, e);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function mx(e) {
      for (var t = e, u = null; t !== null; ) {
        var a = t.alternate;
        a !== null && e0(a) === null && (u = t), t = t.sibling;
      }
      return u;
    }
    function yx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !zg[e])
        if (zg[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function gx(e, t) {
      e !== void 0 && !C0[e] && (e !== "collapsed" && e !== "hidden" ? (C0[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (C0[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function sE(e, t) {
      {
        var u = yn(e), a = !u && typeof Lu(e) == "function";
        if (u || a) {
          var l = u ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function Dx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (yn(e)) {
          for (var u = 0; u < e.length; u++)
            if (!sE(e[u], u))
              return;
        } else {
          var a = Lu(e);
          if (typeof a == "function") {
            var l = a.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!sE(s.value, d))
                  return;
                d++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Qg(e, t, u, a, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: u,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = u, s.tailMode = l);
    }
    function cE(e, t, u) {
      var a = t.pendingProps, l = a.revealOrder, s = a.tail, d = a.children;
      yx(l), gx(s, l), Dx(d, l), wr(e, t, d, u);
      var h = na.current, m = ng(h, tp);
      if (m)
        h = rg(h, tp), t.flags |= He;
      else {
        var C = e !== null && (e.flags & He) !== be;
        C && hx(t, t.child, u), h = $c(h);
      }
      if (Nl(t, h), (t.mode & Je) === Le)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var E = mx(t.child), B;
            E === null ? (B = t.child, t.child = null) : (B = E.sibling, E.sibling = null), Qg(
              t,
              !1,
              // isBackwards
              B,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var z = U.alternate;
              if (z !== null && e0(z) === null) {
                t.child = U;
                break;
              }
              var j = U.sibling;
              U.sibling = x, x = U, U = j;
            }
            Qg(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            Qg(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Cx(e, t, u) {
      Zy(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = zc(t, null, a, u) : wr(e, t, a, u), t.child;
    }
    var fE = !1;
    function Ex(e, t, u) {
      var a = t.type, l = a._context, s = t.pendingProps, d = t.memoizedProps, h = s.value;
      {
        "value" in s || fE || (fE = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var m = t.type.propTypes;
        m && Ju(m, s, "prop", "Context.Provider");
      }
      if (JD(t, l, h), d !== null) {
        var C = d.value;
        if (Se(C, h)) {
          if (d.children === s.children && !_h())
            return Oi(e, t, u);
        } else
          h2(t, l, u);
      }
      var E = s.children;
      return wr(e, t, E, u), t.child;
    }
    var dE = !1;
    function Ax(e, t, u) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (dE || (dE = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Uc(t, u);
      var d = Fn(a);
      Ra(t);
      var h;
      return sp.current = t, lu(!0), h = s(d), lu(!1), li(), t.flags |= Ca, wr(e, t, h, u), t.child;
    }
    function fp() {
      ua = !0;
    }
    function A0(e, t) {
      (t.mode & Je) === Le && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bt);
    }
    function Oi(e, t, u) {
      return e !== null && (t.dependencies = e.dependencies), YC(), Sp(t.lanes), vr(u, t.childLanes) ? (R2(e, t), t.child) : null;
    }
    function Sx(e, t, u) {
      {
        var a = t.return;
        if (a === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, u.index = t.index, u.sibling = t.sibling, u.return = t.return, u.ref = t.ref, t === a.child)
          a.child = u;
        else {
          var l = a.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = u;
        }
        var s = a.deletions;
        return s === null ? (a.deletions = [e], a.flags |= mt) : s.push(e), u.flags |= bt, u;
      }
    }
    function Yg(e, t) {
      var u = e.lanes;
      return !!vr(u, t);
    }
    function Fx(e, t, u) {
      switch (t.tag) {
        case re:
          uE(t), t.stateNode, Lc();
          break;
        case W:
          yC(t);
          break;
        case G: {
          var a = t.type;
          za(a) && kh(t);
          break;
        }
        case M:
          Zy(t, t.stateNode.containerInfo);
          break;
        case ct: {
          var l = t.memoizedProps.value, s = t.type._context;
          JD(t, s, l);
          break;
        }
        case We:
          {
            var d = vr(u, t.childLanes);
            d && (t.flags |= Ye);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case de: {
          var m = t.memoizedState;
          if (m !== null) {
            if (m.dehydrated !== null)
              return Nl(t, $c(na.current)), t.flags |= He, null;
            var C = t.child, E = C.childLanes;
            if (vr(u, E))
              return iE(e, t, u);
            Nl(t, $c(na.current));
            var B = Oi(e, t, u);
            return B !== null ? B.sibling : null;
          } else
            Nl(t, $c(na.current));
          break;
        }
        case pe: {
          var x = (e.flags & He) !== be, U = vr(u, t.childLanes);
          if (x) {
            if (U)
              return cE(e, t, u);
            t.flags |= He;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Nl(t, na.current), U)
            break;
          return null;
        }
        case Xe:
        case ut:
          return t.lanes = I, tE(e, t, u);
      }
      return Oi(e, t, u);
    }
    function pE(e, t, u) {
      if (t._debugNeedsRemount && e !== null)
        return Sx(e, t, S1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, l = t.pendingProps;
        if (a !== l || _h() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ua = !0;
        else {
          var s = Yg(e, u);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & He) === be)
            return ua = !1, Fx(e, t, u);
          (e.flags & go) !== be ? ua = !0 : ua = !1;
        }
      } else if (ua = !1, Xn() && qT(t)) {
        var d = t.index, h = XT();
        $D(t, h, d);
      }
      switch (t.lanes = I, t.tag) {
        case Ve:
          return ax(e, t, t.type, u);
        case le: {
          var m = t.elementType;
          return rx(e, t, m, u);
        }
        case K: {
          var C = t.type, E = t.pendingProps, B = t.elementType === C ? E : ta(C, E);
          return Hg(e, t, C, B, u);
        }
        case G: {
          var x = t.type, U = t.pendingProps, z = t.elementType === x ? U : ta(x, U);
          return rE(e, t, x, z, u);
        }
        case re:
          return ex(e, t, u);
        case W:
          return tx(e, t, u);
        case ue:
          return nx(e, t);
        case de:
          return iE(e, t, u);
        case M:
          return Cx(e, t, u);
        case Ge: {
          var j = t.type, De = t.pendingProps, ke = t.elementType === j ? De : ta(j, De);
          return JC(e, t, j, ke, u);
        }
        case Z:
          return X2(e, t, u);
        case ne:
          return J2(e, t, u);
        case We:
          return Z2(e, t, u);
        case ct:
          return Ex(e, t, u);
        case Ct:
          return Ax(e, t, u);
        case Y: {
          var Be = t.type, st = t.pendingProps, rt = ta(Be, st);
          if (t.type !== t.elementType) {
            var k = Be.propTypes;
            k && Ju(
              k,
              rt,
              // Resolved for outer only
              "prop",
              Rt(Be)
            );
          }
          return rt = ta(Be.type, rt), ZC(e, t, Be, rt, u);
        }
        case Oe:
          return eE(e, t, t.type, t.pendingProps, u);
        case _t: {
          var V = t.type, O = t.pendingProps, te = t.elementType === V ? O : ta(V, O);
          return ux(e, t, V, te, u);
        }
        case pe:
          return cE(e, t, u);
        case Zt:
          break;
        case Xe:
          return tE(e, t, u);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qc(e) {
      e.flags |= Ye;
    }
    function vE(e) {
      e.flags |= lr, e.flags |= Qf;
    }
    var hE, Kg, mE, yE;
    hE = function(e, t, u, a) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === W || l.tag === ue)
          YF(e, l.stateNode);
        else if (l.tag !== M) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, Kg = function(e, t) {
    }, mE = function(e, t, u, a, l) {
      var s = e.memoizedProps;
      if (s !== a) {
        var d = t.stateNode, h = eg(), m = WF(d, u, s, a, l, h);
        t.updateQueue = m, m && Qc(t);
      }
    }, yE = function(e, t, u, a) {
      u !== a && Qc(t);
    };
    function dp(e, t) {
      if (!Xn())
        switch (e.tailMode) {
          case "hidden": {
            for (var u = e.tail, a = null; u !== null; )
              u.alternate !== null && (a = u), u = u.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Zn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, u = I, a = be;
      if (t) {
        if ((e.mode & Me) !== Le) {
          for (var m = e.selfBaseDuration, C = e.child; C !== null; )
            u = Ke(u, Ke(C.lanes, C.childLanes)), a |= C.subtreeFlags & xn, a |= C.flags & xn, m += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = m;
        } else
          for (var E = e.child; E !== null; )
            u = Ke(u, Ke(E.lanes, E.childLanes)), a |= E.subtreeFlags & xn, a |= E.flags & xn, E.return = e, E = E.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & Me) !== Le) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            u = Ke(u, Ke(d.lanes, d.childLanes)), a |= d.subtreeFlags, a |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            u = Ke(u, Ke(h.lanes, h.childLanes)), a |= h.subtreeFlags, a |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= a;
      }
      return e.childLanes = u, t;
    }
    function Tx(e, t, u) {
      if (c2() && (t.mode & Je) !== Le && (t.flags & He) === be)
        return YD(t), Lc(), t.flags |= Qt | Ar | Dn, !1;
      var a = Uh(t);
      if (u !== null && u.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (o2(t), Zn(t), (t.mode & Me) !== Le) {
            var l = u !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Lc(), (t.flags & He) === be && (t.memoizedState = null), t.flags |= Ye, Zn(t), (t.mode & Me) !== Le) {
            var d = u !== null;
            if (d) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return KD(), !0;
    }
    function gE(e, t, u) {
      var a = t.pendingProps;
      switch (Cy(t), t.tag) {
        case Ve:
        case le:
        case Oe:
        case K:
        case Ge:
        case Z:
        case ne:
        case We:
        case Ct:
        case Y:
          return Zn(t), null;
        case G: {
          var l = t.type;
          return za(l) && bh(t), Zn(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (Hc(t), my(t), ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = Uh(t);
            if (d)
              Qc(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Qt) !== be) && (t.flags |= Hr, KD());
            }
          }
          return Kg(e, t), Zn(t), null;
        }
        case W: {
          tg(t);
          var m = mC(), C = t.type;
          if (e !== null && t.stateNode != null)
            mE(e, t, C, a, m), e.ref !== t.ref && vE(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Zn(t), null;
            }
            var E = eg(), B = Uh(t);
            if (B)
              i2(t, m, E) && Qc(t);
            else {
              var x = QF(C, a, m, E, t);
              hE(x, t, !1, !1), t.stateNode = x, KF(x, C, a, m) && Qc(t);
            }
            t.ref !== null && vE(t);
          }
          return Zn(t), null;
        }
        case ue: {
          var U = a;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            yE(e, t, z, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = mC(), De = eg(), ke = Uh(t);
            ke ? l2(t) && Qc(t) : t.stateNode = qF(U, j, De, t);
          }
          return Zn(t), null;
        }
        case de: {
          Pc(t);
          var Be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var st = Tx(e, t, Be);
            if (!st)
              return t.flags & Dn ? t : null;
          }
          if ((t.flags & He) !== be)
            return t.lanes = u, (t.mode & Me) !== Le && _g(t), t;
          var rt = Be !== null, k = e !== null && e.memoizedState !== null;
          if (rt !== k && rt) {
            var V = t.child;
            if (V.flags |= Ea, (t.mode & Je) !== Le) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ze);
              O || ng(na.current, DC) ? xR() : d1();
            }
          }
          var te = t.updateQueue;
          if (te !== null && (t.flags |= Ye), Zn(t), (t.mode & Me) !== Le && rt) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case M:
          return Hc(t), Kg(e, t), e === null && VT(t.stateNode.containerInfo), Zn(t), null;
        case ct:
          var he = t.type._context;
          return By(he, t), Zn(t), null;
        case _t: {
          var ze = t.type;
          return za(ze) && bh(t), Zn(t), null;
        }
        case pe: {
          Pc(t);
          var Ie = t.memoizedState;
          if (Ie === null)
            return Zn(t), null;
          var Ft = (t.flags & He) !== be, pt = Ie.rendering;
          if (pt === null)
            if (Ft)
              dp(Ie, !1);
            else {
              var hn = wR() && (e === null || (e.flags & He) === be);
              if (!hn)
                for (var vt = t.child; vt !== null; ) {
                  var ln = e0(vt);
                  if (ln !== null) {
                    Ft = !0, t.flags |= He, dp(Ie, !1);
                    var gr = ln.updateQueue;
                    return gr !== null && (t.updateQueue = gr, t.flags |= Ye), t.subtreeFlags = be, w2(t, u), Nl(t, rg(na.current, tp)), t.child;
                  }
                  vt = vt.sibling;
                }
              Ie.tail !== null && zt() > HE() && (t.flags |= He, Ft = !0, dp(Ie, !1), t.lanes = ad);
            }
          else {
            if (!Ft) {
              var ur = e0(pt);
              if (ur !== null) {
                t.flags |= He, Ft = !0;
                var hu = ur.updateQueue;
                if (hu !== null && (t.updateQueue = hu, t.flags |= Ye), dp(Ie, !0), Ie.tail === null && Ie.tailMode === "hidden" && !pt.alternate && !Xn())
                  return Zn(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                zt() * 2 - Ie.renderingStartTime > HE() && u !== pr && (t.flags |= He, Ft = !0, dp(Ie, !1), t.lanes = ad);
            }
            if (Ie.isBackwards)
              pt.sibling = t.child, t.child = pt;
            else {
              var br = Ie.last;
              br !== null ? br.sibling = pt : t.child = pt, Ie.last = pt;
            }
          }
          if (Ie.tail !== null) {
            var kr = Ie.tail;
            Ie.rendering = kr, Ie.tail = kr.sibling, Ie.renderingStartTime = zt(), kr.sibling = null;
            var Dr = na.current;
            return Ft ? Dr = rg(Dr, tp) : Dr = $c(Dr), Nl(t, Dr), kr;
          }
          return Zn(t), null;
        }
        case Zt:
          break;
        case Xe:
        case ut: {
          f1(t);
          var zi = t.memoizedState, ef = zi !== null;
          if (e !== null) {
            var wp = e.memoizedState, Qa = wp !== null;
            Qa !== ef && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ce && (t.flags |= Ea);
          }
          return !ef || (t.mode & Je) === Le ? Zn(t) : vr(Ga, pr) && (Zn(t), t.subtreeFlags & (bt | Ye) && (t.flags |= Ea)), null;
        }
        case Tn:
          return null;
        case Pe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xx(e, t, u) {
      switch (Cy(t), t.tag) {
        case G: {
          var a = t.type;
          za(a) && bh(t);
          var l = t.flags;
          return l & Dn ? (t.flags = l & ~Dn | He, (t.mode & Me) !== Le && _g(t), t) : null;
        }
        case re: {
          t.stateNode, Hc(t), my(t), ag();
          var s = t.flags;
          return (s & Dn) !== be && (s & He) === be ? (t.flags = s & ~Dn | He, t) : null;
        }
        case W:
          return tg(t), null;
        case de: {
          Pc(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Lc();
          }
          var h = t.flags;
          return h & Dn ? (t.flags = h & ~Dn | He, (t.mode & Me) !== Le && _g(t), t) : null;
        }
        case pe:
          return Pc(t), null;
        case M:
          return Hc(t), null;
        case ct:
          var m = t.type._context;
          return By(m, t), null;
        case Xe:
        case ut:
          return f1(t), null;
        case Tn:
          return null;
        default:
          return null;
      }
    }
    function DE(e, t, u) {
      switch (Cy(t), t.tag) {
        case G: {
          var a = t.type.childContextTypes;
          a != null && bh(t);
          break;
        }
        case re: {
          t.stateNode, Hc(t), my(t), ag();
          break;
        }
        case W: {
          tg(t);
          break;
        }
        case M:
          Hc(t);
          break;
        case de:
          Pc(t);
          break;
        case pe:
          Pc(t);
          break;
        case ct:
          var l = t.type._context;
          By(l, t);
          break;
        case Xe:
        case ut:
          f1(t);
          break;
      }
    }
    var CE = null;
    CE = /* @__PURE__ */ new Set();
    var S0 = !1, er = !1, Rx = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, Yc = null, Kc = null;
    function wx(e) {
      ai(null, function() {
        throw e;
      }), If();
    }
    var Bx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Me)
        try {
          Va(), t.componentWillUnmount();
        } finally {
          ja(e);
        }
      else
        t.componentWillUnmount();
    };
    function EE(e, t) {
      try {
        Ul(_n, e);
      } catch (u) {
        Lt(e, t, u);
      }
    }
    function Wg(e, t, u) {
      try {
        Bx(e, u);
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function _x(e, t, u) {
      try {
        u.componentDidMount();
      } catch (a) {
        Lt(e, t, a);
      }
    }
    function AE(e, t) {
      try {
        FE(e);
      } catch (u) {
        Lt(e, t, u);
      }
    }
    function Wc(e, t) {
      var u = e.ref;
      if (u !== null)
        if (typeof u == "function") {
          var a;
          try {
            if (_ && L && e.mode & Me)
              try {
                Va(), a = u(null);
              } finally {
                ja(e);
              }
            else
              a = u(null);
          } catch (l) {
            Lt(e, t, l);
          }
          typeof a == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          u.current = null;
    }
    function F0(e, t, u) {
      try {
        u();
      } catch (a) {
        Lt(e, t, a);
      }
    }
    var SE = !1;
    function bx(e, t) {
      IF(e.containerInfo), Fe = t, kx();
      var u = SE;
      return SE = !1, u;
    }
    function kx() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & rl) !== be && t !== null ? (t.return = e, Fe = t) : Ox();
      }
    }
    function Ox() {
      for (; Fe !== null; ) {
        var e = Fe;
        At(e);
        try {
          Nx(e);
        } catch (u) {
          Lt(e, e.return, u);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function Nx(e) {
      var t = e.alternate, u = e.flags;
      if ((u & Hr) !== be) {
        switch (At(e), e.tag) {
          case K:
          case Ge:
          case Oe:
            break;
          case G: {
            if (t !== null) {
              var a = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Xo && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? a : ta(e.type, a), l);
              {
                var h = CE;
                d === void 0 && !h.has(e.type) && (h.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case re: {
            {
              var m = e.stateNode;
              hT(m.containerInfo);
            }
            break;
          }
          case W:
          case ue:
          case M:
          case _t:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function aa(e, t, u) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var h = d.destroy;
            d.destroy = void 0, h !== void 0 && ((e & Jn) !== Xr ? zs(t) : (e & _n) !== Xr && Hs(t), (e & Ha) !== Xr && Tp(!0), F0(t, u, h), (e & Ha) !== Xr && Tp(!1), (e & Jn) !== Xr ? Mv() : (e & _n) !== Xr && ul());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Ul(e, t) {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var l = a.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Jn) !== Xr ? Lv(t) : (e & _n) !== Xr && Uv(t);
            var d = s.create;
            (e & Ha) !== Xr && Tp(!0), s.destroy = d(), (e & Ha) !== Xr && Tp(!1), (e & Jn) !== Xr ? nd() : (e & _n) !== Xr && zv();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var m = void 0;
                (s.tag & _n) !== be ? m = "useLayoutEffect" : (s.tag & Ha) !== be ? m = "useInsertionEffect" : m = "useEffect";
                var C = void 0;
                h === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? C = `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + h, y("%s must not return anything besides a function, which is used for clean-up.%s", m, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function Lx(e, t) {
      if ((t.flags & Ye) !== be)
        switch (t.tag) {
          case We: {
            var u = t.stateNode.passiveEffectDuration, a = t.memoizedProps, l = a.id, s = a.onPostCommit, d = GC(), h = t.alternate === null ? "mount" : "update";
            IC() && (h = "nested-update"), typeof s == "function" && s(l, h, u, d);
            var m = t.return;
            e:
              for (; m !== null; ) {
                switch (m.tag) {
                  case re:
                    var C = m.stateNode;
                    C.passiveEffectDuration += u;
                    break e;
                  case We:
                    var E = m.stateNode;
                    E.passiveEffectDuration += u;
                    break e;
                }
                m = m.return;
              }
            break;
          }
        }
    }
    function Mx(e, t, u, a) {
      if ((u.flags & Pn) !== be)
        switch (u.tag) {
          case K:
          case Ge:
          case Oe: {
            if (!er)
              if (u.mode & Me)
                try {
                  Va(), Ul(_n | Bn, u);
                } finally {
                  ja(u);
                }
              else
                Ul(_n | Bn, u);
            break;
          }
          case G: {
            var l = u.stateNode;
            if (u.flags & Ye && !er)
              if (t === null)
                if (u.type === u.elementType && !Xo && (l.props !== u.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(u) || "instance"), l.state !== u.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(u) || "instance")), u.mode & Me)
                  try {
                    Va(), l.componentDidMount();
                  } finally {
                    ja(u);
                  }
                else
                  l.componentDidMount();
              else {
                var s = u.elementType === u.type ? t.memoizedProps : ta(u.type, t.memoizedProps), d = t.memoizedState;
                if (u.type === u.elementType && !Xo && (l.props !== u.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(u) || "instance"), l.state !== u.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(u) || "instance")), u.mode & Me)
                  try {
                    Va(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ja(u);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var h = u.updateQueue;
            h !== null && (u.type === u.elementType && !Xo && (l.props !== u.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(u) || "instance"), l.state !== u.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(u) || "instance")), uC(u, h, l));
            break;
          }
          case re: {
            var m = u.updateQueue;
            if (m !== null) {
              var C = null;
              if (u.child !== null)
                switch (u.child.tag) {
                  case W:
                    C = u.child.stateNode;
                    break;
                  case G:
                    C = u.child.stateNode;
                    break;
                }
              uC(u, m, C);
            }
            break;
          }
          case W: {
            var E = u.stateNode;
            if (t === null && u.flags & Ye) {
              var B = u.type, x = u.memoizedProps;
              tT(E, B, x);
            }
            break;
          }
          case ue:
            break;
          case M:
            break;
          case We: {
            {
              var U = u.memoizedProps, z = U.onCommit, j = U.onRender, De = u.stateNode.effectDuration, ke = GC(), Be = t === null ? "mount" : "update";
              IC() && (Be = "nested-update"), typeof j == "function" && j(u.memoizedProps.id, Be, u.actualDuration, u.treeBaseDuration, u.actualStartTime, ke);
              {
                typeof z == "function" && z(u.memoizedProps.id, Be, De, ke), OR(u);
                var st = u.return;
                e:
                  for (; st !== null; ) {
                    switch (st.tag) {
                      case re:
                        var rt = st.stateNode;
                        rt.effectDuration += De;
                        break e;
                      case We:
                        var k = st.stateNode;
                        k.effectDuration += De;
                        break e;
                    }
                    st = st.return;
                  }
              }
            }
            break;
          }
          case de: {
            Ix(e, u);
            break;
          }
          case pe:
          case _t:
          case Zt:
          case Xe:
          case ut:
          case Pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      er || u.flags & lr && FE(u);
    }
    function Ux(e) {
      switch (e.tag) {
        case K:
        case Ge:
        case Oe: {
          if (e.mode & Me)
            try {
              Va(), EE(e, e.return);
            } finally {
              ja(e);
            }
          else
            EE(e, e.return);
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && _x(e, e.return, t), AE(e, e.return);
          break;
        }
        case W: {
          AE(e, e.return);
          break;
        }
      }
    }
    function zx(e, t) {
      for (var u = null, a = e; ; ) {
        if (a.tag === W) {
          if (u === null) {
            u = a;
            try {
              var l = a.stateNode;
              t ? fT(l) : pT(a.stateNode, a.memoizedProps);
            } catch (d) {
              Lt(e, e.return, d);
            }
          }
        } else if (a.tag === ue) {
          if (u === null)
            try {
              var s = a.stateNode;
              t ? dT(s) : vT(s, a.memoizedProps);
            } catch (d) {
              Lt(e, e.return, d);
            }
        } else if (!((a.tag === Xe || a.tag === ut) && a.memoizedState !== null && a !== e)) {
          if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          u === a && (u = null), a = a.return;
        }
        u === a && (u = null), a.sibling.return = a.return, a = a.sibling;
      }
    }
    function FE(e) {
      var t = e.ref;
      if (t !== null) {
        var u = e.stateNode, a;
        switch (e.tag) {
          case W:
            a = u;
            break;
          default:
            a = u;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Me)
            try {
              Va(), l = t(a);
            } finally {
              ja(e);
            }
          else
            l = t(a);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Qe(e)), t.current = a;
      }
    }
    function Hx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function TE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, TE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === W) {
          var u = e.stateNode;
          u !== null && QT(u);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function $x(e) {
      for (var t = e.return; t !== null; ) {
        if (xE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xE(e) {
      return e.tag === W || e.tag === re || e.tag === M;
    }
    function RE(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || xE(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== W && t.tag !== ue && t.tag !== ht; ) {
            if (t.flags & bt || t.child === null || t.tag === M)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & bt))
            return t.stateNode;
        }
    }
    function Px(e) {
      var t = $x(e);
      switch (t.tag) {
        case W: {
          var u = t.stateNode;
          t.flags & gt && (wD(u), t.flags &= ~gt);
          var a = RE(e);
          Xg(e, a, u);
          break;
        }
        case re:
        case M: {
          var l = t.stateNode.containerInfo, s = RE(e);
          qg(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function qg(e, t, u) {
      var a = e.tag, l = a === W || a === ue;
      if (l) {
        var s = e.stateNode;
        t ? lT(u, s, t) : aT(u, s);
      } else if (a !== M) {
        var d = e.child;
        if (d !== null) {
          qg(d, t, u);
          for (var h = d.sibling; h !== null; )
            qg(h, t, u), h = h.sibling;
        }
      }
    }
    function Xg(e, t, u) {
      var a = e.tag, l = a === W || a === ue;
      if (l) {
        var s = e.stateNode;
        t ? iT(u, s, t) : uT(u, s);
      } else if (a !== M) {
        var d = e.child;
        if (d !== null) {
          Xg(d, t, u);
          for (var h = d.sibling; h !== null; )
            Xg(h, t, u), h = h.sibling;
        }
      }
    }
    var tr = null, ia = !1;
    function jx(e, t, u) {
      {
        var a = t;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case W: {
                tr = a.stateNode, ia = !1;
                break e;
              }
              case re: {
                tr = a.stateNode.containerInfo, ia = !0;
                break e;
              }
              case M: {
                tr = a.stateNode.containerInfo, ia = !0;
                break e;
              }
            }
            a = a.return;
          }
        if (tr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        wE(e, t, u), tr = null, ia = !1;
      }
      Hx(u);
    }
    function zl(e, t, u) {
      for (var a = u.child; a !== null; )
        wE(e, t, a), a = a.sibling;
    }
    function wE(e, t, u) {
      switch (ed(u), u.tag) {
        case W:
          er || Wc(u, t);
        case ue: {
          {
            var a = tr, l = ia;
            tr = null, zl(e, t, u), tr = a, ia = l, tr !== null && (ia ? sT(tr, u.stateNode) : oT(tr, u.stateNode));
          }
          return;
        }
        case ht: {
          tr !== null && (ia ? cT(tr, u.stateNode) : oy(tr, u.stateNode));
          return;
        }
        case M: {
          {
            var s = tr, d = ia;
            tr = u.stateNode.containerInfo, ia = !0, zl(e, t, u), tr = s, ia = d;
          }
          return;
        }
        case K:
        case Ge:
        case Y:
        case Oe: {
          if (!er) {
            var h = u.updateQueue;
            if (h !== null) {
              var m = h.lastEffect;
              if (m !== null) {
                var C = m.next, E = C;
                do {
                  var B = E, x = B.destroy, U = B.tag;
                  x !== void 0 && ((U & Ha) !== Xr ? F0(u, t, x) : (U & _n) !== Xr && (Hs(u), u.mode & Me ? (Va(), F0(u, t, x), ja(u)) : F0(u, t, x), ul())), E = E.next;
                } while (E !== C);
              }
            }
          }
          zl(e, t, u);
          return;
        }
        case G: {
          if (!er) {
            Wc(u, t);
            var z = u.stateNode;
            typeof z.componentWillUnmount == "function" && Wg(u, t, z);
          }
          zl(e, t, u);
          return;
        }
        case Zt: {
          zl(e, t, u);
          return;
        }
        case Xe: {
          if (
            // TODO: Remove this dead flag
            u.mode & Je
          ) {
            var j = er;
            er = j || u.memoizedState !== null, zl(e, t, u), er = j;
          } else
            zl(e, t, u);
          break;
        }
        default: {
          zl(e, t, u);
          return;
        }
      }
    }
    function Vx(e) {
      e.memoizedState;
    }
    function Ix(e, t) {
      var u = t.memoizedState;
      if (u === null) {
        var a = t.alternate;
        if (a !== null) {
          var l = a.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && BT(s);
          }
        }
      }
    }
    function BE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var u = e.stateNode;
        u === null && (u = e.stateNode = new Rx()), t.forEach(function(a) {
          var l = $R.bind(null, e, a);
          if (!u.has(a)) {
            if (u.add(a), Rn)
              if (Yc !== null && Kc !== null)
                Fp(Kc, Yc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(l, l);
          }
        });
      }
    }
    function Gx(e, t, u) {
      Yc = u, Kc = e, At(t), _E(t, e), At(t), Yc = null, Kc = null;
    }
    function la(e, t, u) {
      var a = t.deletions;
      if (a !== null)
        for (var l = 0; l < a.length; l++) {
          var s = a[l];
          try {
            jx(e, t, s);
          } catch (m) {
            Lt(s, t, m);
          }
        }
      var d = lm();
      if (t.subtreeFlags & cr)
        for (var h = t.child; h !== null; )
          At(h), _E(h, e), h = h.sibling;
      At(d);
    }
    function _E(e, t, u) {
      var a = e.alternate, l = e.flags;
      switch (e.tag) {
        case K:
        case Ge:
        case Y:
        case Oe: {
          if (la(t, e), Ia(e), l & Ye) {
            try {
              aa(Ha | Bn, e, e.return), Ul(Ha | Bn, e);
            } catch (ze) {
              Lt(e, e.return, ze);
            }
            if (e.mode & Me) {
              try {
                Va(), aa(_n | Bn, e, e.return);
              } catch (ze) {
                Lt(e, e.return, ze);
              }
              ja(e);
            } else
              try {
                aa(_n | Bn, e, e.return);
              } catch (ze) {
                Lt(e, e.return, ze);
              }
          }
          return;
        }
        case G: {
          la(t, e), Ia(e), l & lr && a !== null && Wc(a, a.return);
          return;
        }
        case W: {
          la(t, e), Ia(e), l & lr && a !== null && Wc(a, a.return);
          {
            if (e.flags & gt) {
              var s = e.stateNode;
              try {
                wD(s);
              } catch (ze) {
                Lt(e, e.return, ze);
              }
            }
            if (l & Ye) {
              var d = e.stateNode;
              if (d != null) {
                var h = e.memoizedProps, m = a !== null ? a.memoizedProps : h, C = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    nT(d, E, C, m, h, e);
                  } catch (ze) {
                    Lt(e, e.return, ze);
                  }
              }
            }
          }
          return;
        }
        case ue: {
          if (la(t, e), Ia(e), l & Ye) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var B = e.stateNode, x = e.memoizedProps, U = a !== null ? a.memoizedProps : x;
            try {
              rT(B, U, x);
            } catch (ze) {
              Lt(e, e.return, ze);
            }
          }
          return;
        }
        case re: {
          if (la(t, e), Ia(e), l & Ye && a !== null) {
            var z = a.memoizedState;
            if (z.isDehydrated)
              try {
                wT(t.containerInfo);
              } catch (ze) {
                Lt(e, e.return, ze);
              }
          }
          return;
        }
        case M: {
          la(t, e), Ia(e);
          return;
        }
        case de: {
          la(t, e), Ia(e);
          var j = e.child;
          if (j.flags & Ea) {
            var De = j.stateNode, ke = j.memoizedState, Be = ke !== null;
            if (De.isHidden = Be, Be) {
              var st = j.alternate !== null && j.alternate.memoizedState !== null;
              st || TR();
            }
          }
          if (l & Ye) {
            try {
              Vx(e);
            } catch (ze) {
              Lt(e, e.return, ze);
            }
            BE(e);
          }
          return;
        }
        case Xe: {
          var rt = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Je
          ) {
            var k = er;
            er = k || rt, la(t, e), er = k;
          } else
            la(t, e);
          if (Ia(e), l & Ea) {
            var V = e.stateNode, O = e.memoizedState, te = O !== null, Ce = e;
            if (V.isHidden = te, te && !rt && (Ce.mode & Je) !== Le) {
              Fe = Ce;
              for (var he = Ce.child; he !== null; )
                Fe = he, Yx(he), he = he.sibling;
            }
            zx(Ce, te);
          }
          return;
        }
        case pe: {
          la(t, e), Ia(e), l & Ye && BE(e);
          return;
        }
        case Zt:
          return;
        default: {
          la(t, e), Ia(e);
          return;
        }
      }
    }
    function Ia(e) {
      var t = e.flags;
      if (t & bt) {
        try {
          Px(e);
        } catch (u) {
          Lt(e, e.return, u);
        }
        e.flags &= ~bt;
      }
      t & $r && (e.flags &= ~$r);
    }
    function Qx(e, t, u) {
      Yc = u, Kc = t, Fe = e, bE(e, t, u), Yc = null, Kc = null;
    }
    function bE(e, t, u) {
      for (var a = (e.mode & Je) !== Le; Fe !== null; ) {
        var l = Fe, s = l.child;
        if (l.tag === Xe && a) {
          var d = l.memoizedState !== null, h = d || S0;
          if (h) {
            Jg(e, t, u);
            continue;
          } else {
            var m = l.alternate, C = m !== null && m.memoizedState !== null, E = C || er, B = S0, x = er;
            S0 = h, er = E, er && !x && (Fe = l, Kx(l));
            for (var U = s; U !== null; )
              Fe = U, bE(
                U,
                // New root; bubble back up to here and stop.
                t,
                u
              ), U = U.sibling;
            Fe = l, S0 = B, er = x, Jg(e, t, u);
            continue;
          }
        }
        (l.subtreeFlags & Pn) !== be && s !== null ? (s.return = l, Fe = s) : Jg(e, t, u);
      }
    }
    function Jg(e, t, u) {
      for (; Fe !== null; ) {
        var a = Fe;
        if ((a.flags & Pn) !== be) {
          var l = a.alternate;
          At(a);
          try {
            Mx(t, l, a, u);
          } catch (d) {
            Lt(a, a.return, d);
          }
          sn();
        }
        if (a === e) {
          Fe = null;
          return;
        }
        var s = a.sibling;
        if (s !== null) {
          s.return = a.return, Fe = s;
          return;
        }
        Fe = a.return;
      }
    }
    function Yx(e) {
      for (; Fe !== null; ) {
        var t = Fe, u = t.child;
        switch (t.tag) {
          case K:
          case Ge:
          case Y:
          case Oe: {
            if (t.mode & Me)
              try {
                Va(), aa(_n, t, t.return);
              } finally {
                ja(t);
              }
            else
              aa(_n, t, t.return);
            break;
          }
          case G: {
            Wc(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && Wg(t, t.return, a);
            break;
          }
          case W: {
            Wc(t, t.return);
            break;
          }
          case Xe: {
            var l = t.memoizedState !== null;
            if (l) {
              kE(e);
              continue;
            }
            break;
          }
        }
        u !== null ? (u.return = t, Fe = u) : kE(e);
      }
    }
    function kE(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var u = t.sibling;
        if (u !== null) {
          u.return = t.return, Fe = u;
          return;
        }
        Fe = t.return;
      }
    }
    function Kx(e) {
      for (; Fe !== null; ) {
        var t = Fe, u = t.child;
        if (t.tag === Xe) {
          var a = t.memoizedState !== null;
          if (a) {
            OE(e);
            continue;
          }
        }
        u !== null ? (u.return = t, Fe = u) : OE(e);
      }
    }
    function OE(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        At(t);
        try {
          Ux(t);
        } catch (a) {
          Lt(t, t.return, a);
        }
        if (sn(), t === e) {
          Fe = null;
          return;
        }
        var u = t.sibling;
        if (u !== null) {
          u.return = t.return, Fe = u;
          return;
        }
        Fe = t.return;
      }
    }
    function Wx(e, t, u, a) {
      Fe = t, qx(t, e, u, a);
    }
    function qx(e, t, u, a) {
      for (; Fe !== null; ) {
        var l = Fe, s = l.child;
        (l.subtreeFlags & Pr) !== be && s !== null ? (s.return = l, Fe = s) : Xx(e, t, u, a);
      }
    }
    function Xx(e, t, u, a) {
      for (; Fe !== null; ) {
        var l = Fe;
        if ((l.flags & Mt) !== be) {
          At(l);
          try {
            Jx(t, l, u, a);
          } catch (d) {
            Lt(l, l.return, d);
          }
          sn();
        }
        if (l === e) {
          Fe = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Fe = s;
          return;
        }
        Fe = l.return;
      }
    }
    function Jx(e, t, u, a) {
      switch (t.tag) {
        case K:
        case Ge:
        case Oe: {
          if (t.mode & Me) {
            Bg();
            try {
              Ul(Jn | Bn, t);
            } finally {
              wg(t);
            }
          } else
            Ul(Jn | Bn, t);
          break;
        }
      }
    }
    function Zx(e) {
      Fe = e, eR();
    }
    function eR() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & mt) !== be) {
          var u = e.deletions;
          if (u !== null) {
            for (var a = 0; a < u.length; a++) {
              var l = u[a];
              Fe = l, rR(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var h = d.sibling;
                    d.sibling = null, d = h;
                  } while (d !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & Pr) !== be && t !== null ? (t.return = e, Fe = t) : tR();
      }
    }
    function tR() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & Mt) !== be && (At(e), nR(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function nR(e) {
      switch (e.tag) {
        case K:
        case Ge:
        case Oe: {
          e.mode & Me ? (Bg(), aa(Jn | Bn, e, e.return), wg(e)) : aa(Jn | Bn, e, e.return);
          break;
        }
      }
    }
    function rR(e, t) {
      for (; Fe !== null; ) {
        var u = Fe;
        At(u), aR(u, t), sn();
        var a = u.child;
        a !== null ? (a.return = u, Fe = a) : uR(e);
      }
    }
    function uR(e) {
      for (; Fe !== null; ) {
        var t = Fe, u = t.sibling, a = t.return;
        if (TE(t), t === e) {
          Fe = null;
          return;
        }
        if (u !== null) {
          u.return = a, Fe = u;
          return;
        }
        Fe = a;
      }
    }
    function aR(e, t) {
      switch (e.tag) {
        case K:
        case Ge:
        case Oe: {
          e.mode & Me ? (Bg(), aa(Jn, e, t), wg(e)) : aa(Jn, e, t);
          break;
        }
      }
    }
    function iR(e) {
      switch (e.tag) {
        case K:
        case Ge:
        case Oe: {
          try {
            Ul(_n | Bn, e);
          } catch (u) {
            Lt(e, e.return, u);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (u) {
            Lt(e, e.return, u);
          }
          break;
        }
      }
    }
    function lR(e) {
      switch (e.tag) {
        case K:
        case Ge:
        case Oe: {
          try {
            Ul(Jn | Bn, e);
          } catch (t) {
            Lt(e, e.return, t);
          }
          break;
        }
      }
    }
    function oR(e) {
      switch (e.tag) {
        case K:
        case Ge:
        case Oe: {
          try {
            aa(_n | Bn, e, e.return);
          } catch (u) {
            Lt(e, e.return, u);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Wg(e, e.return, t);
          break;
        }
      }
    }
    function sR(e) {
      switch (e.tag) {
        case K:
        case Ge:
        case Oe:
          try {
            aa(Jn | Bn, e, e.return);
          } catch (t) {
            Lt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var pp = Symbol.for;
      pp("selector.component"), pp("selector.has_pseudo_class"), pp("selector.role"), pp("selector.test_id"), pp("selector.text");
    }
    var cR = [];
    function fR() {
      cR.forEach(function(e) {
        return e();
      });
    }
    var dR = g.ReactCurrentActQueue;
    function pR(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), u = typeof jest < "u";
        return u && t !== !1;
      }
    }
    function NE() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && dR.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var vR = Math.ceil, Zg = g.ReactCurrentDispatcher, e1 = g.ReactCurrentOwner, nr = g.ReactCurrentBatchConfig, oa = g.ReactCurrentActQueue, On = (
      /*             */
      0
    ), LE = (
      /*               */
      1
    ), rr = (
      /*                */
      2
    ), bu = (
      /*                */
      4
    ), Ni = 0, vp = 1, Jo = 2, T0 = 3, hp = 4, ME = 5, t1 = 6, ot = On, Br = null, Jt = null, Nn = I, Ga = I, n1 = wl(I), Ln = Ni, mp = null, x0 = I, yp = I, R0 = I, gp = null, Jr = null, r1 = 0, UE = 500, zE = 1 / 0, hR = 500, Li = null;
    function Dp() {
      zE = zt() + hR;
    }
    function HE() {
      return zE;
    }
    var w0 = !1, u1 = null, qc = null, Zo = !1, Hl = null, Cp = I, a1 = [], i1 = null, mR = 50, Ep = 0, l1 = null, o1 = !1, B0 = !1, yR = 50, Xc = 0, _0 = null, Ap = Bt, b0 = I, $E = !1;
    function k0() {
      return Br;
    }
    function _r() {
      return (ot & (rr | bu)) !== On ? zt() : (Ap !== Bt || (Ap = zt()), Ap);
    }
    function $l(e) {
      var t = e.mode;
      if ((t & Je) === Le)
        return Ue;
      if ((ot & rr) !== On && Nn !== I)
        return fn(Nn);
      var u = p2() !== d2;
      if (u) {
        if (nr.transition !== null) {
          var a = nr.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return b0 === lt && (b0 = od()), b0;
      }
      var l = Gr();
      if (l !== lt)
        return l;
      var s = XF();
      return s;
    }
    function gR(e) {
      var t = e.mode;
      return (t & Je) === Le ? Ue : Bm();
    }
    function Mn(e, t, u, a) {
      jR(), $E && y("useInsertionEffect must not schedule updates."), o1 && (B0 = !0), yi(e, u, a), (ot & rr) !== I && e === Br ? GR(t) : (Rn && pd(e, t, u), QR(t), e === Br && ((ot & rr) === On && (yp = Ke(yp, u)), Ln === hp && Pl(e, Nn)), Zr(e, a), u === Ue && ot === On && (t.mode & Je) === Le && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !oa.isBatchingLegacy && (Dp(), HD()));
    }
    function DR(e, t, u) {
      var a = e.current;
      a.lanes = t, yi(e, t, u), Zr(e, u);
    }
    function CR(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ot & rr) !== On
      );
    }
    function Zr(e, t) {
      var u = e.callbackNode;
      xm(e, t);
      var a = Fo(e, e === Br ? Nn : I);
      if (a === I) {
        u !== null && nA(u), e.callbackNode = null, e.callbackPriority = lt;
        return;
      }
      var l = un(a), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(oa.current !== null && u !== h1)) {
        u == null && s !== Ue && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      u != null && nA(u);
      var d;
      if (l === Ue)
        e.tag === Bl ? (oa.isBatchingLegacy !== null && (oa.didScheduleLegacyUpdate = !0), WT(VE.bind(null, e))) : zD(VE.bind(null, e)), oa.current !== null ? oa.current.push(_l) : ZF(function() {
          (ot & (rr | bu)) === On && _l();
        }), d = null;
      else {
        var h;
        switch (Bo(a)) {
          case jn:
            h = Ls;
            break;
          case wn:
            h = Tr;
            break;
          case Yu:
            h = Eu;
            break;
          case Ro:
            h = Sa;
            break;
          default:
            h = Eu;
            break;
        }
        d = m1(h, PE.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function PE(e, t) {
      if (j2(), Ap = Bt, b0 = I, (ot & (rr | bu)) !== On)
        throw new Error("Should not already be working.");
      var u = e.callbackNode, a = Ui();
      if (a && e.callbackNode !== u)
        return null;
      var l = Fo(e, e === Br ? Nn : I);
      if (l === I)
        return null;
      var s = !xo(e, l) && !Iv(e, l) && !t, d = s ? _R(e, l) : N0(e, l);
      if (d !== Ni) {
        if (d === Jo) {
          var h = id(e);
          h !== I && (l = h, d = s1(e, h));
        }
        if (d === vp) {
          var m = mp;
          throw es(e, I), Pl(e, l), Zr(e, zt()), m;
        }
        if (d === t1)
          Pl(e, l);
        else {
          var C = !xo(e, l), E = e.current.alternate;
          if (C && !AR(E)) {
            if (d = N0(e, l), d === Jo) {
              var B = id(e);
              B !== I && (l = B, d = s1(e, B));
            }
            if (d === vp) {
              var x = mp;
              throw es(e, I), Pl(e, l), Zr(e, zt()), x;
            }
          }
          e.finishedWork = E, e.finishedLanes = l, ER(e, d, l);
        }
      }
      return Zr(e, zt()), e.callbackNode === u ? PE.bind(null, e) : null;
    }
    function s1(e, t) {
      var u = gp;
      if (pn(e)) {
        var a = es(e, t);
        a.flags |= Qt, jT(e.containerInfo);
      }
      var l = N0(e, t);
      if (l !== Jo) {
        var s = Jr;
        Jr = u, s !== null && jE(s);
      }
      return l;
    }
    function jE(e) {
      Jr === null ? Jr = e : Jr.push.apply(Jr, e);
    }
    function ER(e, t, u) {
      switch (t) {
        case Ni:
        case vp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Jo: {
          ts(e, Jr, Li);
          break;
        }
        case T0: {
          if (Pl(e, u), ac(u) && // do not delay if we're inside an act() scope
          !rA()) {
            var a = r1 + UE - zt();
            if (a > 10) {
              var l = Fo(e, I);
              if (l !== I)
                break;
              var s = e.suspendedLanes;
              if (!mi(s, u)) {
                _r(), fd(e, s);
                break;
              }
              e.timeoutHandle = iy(ts.bind(null, e, Jr, Li), a);
              break;
            }
          }
          ts(e, Jr, Li);
          break;
        }
        case hp: {
          if (Pl(e, u), Vv(u))
            break;
          if (!rA()) {
            var d = jv(e, u), h = d, m = zt() - h, C = PR(m) - m;
            if (C > 10) {
              e.timeoutHandle = iy(ts.bind(null, e, Jr, Li), C);
              break;
            }
          }
          ts(e, Jr, Li);
          break;
        }
        case ME: {
          ts(e, Jr, Li);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function AR(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var u = t.updateQueue;
          if (u !== null) {
            var a = u.stores;
            if (a !== null)
              for (var l = 0; l < a.length; l++) {
                var s = a[l], d = s.getSnapshot, h = s.value;
                try {
                  if (!Se(d(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var m = t.child;
        if (t.subtreeFlags & yo && m !== null) {
          m.return = t, t = m;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Pl(e, t) {
      t = fl(t, R0), t = fl(t, yp), cd(e, t);
    }
    function VE(e) {
      if (V2(), (ot & (rr | bu)) !== On)
        throw new Error("Should not already be working.");
      Ui();
      var t = Fo(e, I);
      if (!vr(t, Ue))
        return Zr(e, zt()), null;
      var u = N0(e, t);
      if (e.tag !== Bl && u === Jo) {
        var a = id(e);
        a !== I && (t = a, u = s1(e, a));
      }
      if (u === vp) {
        var l = mp;
        throw es(e, I), Pl(e, t), Zr(e, zt()), l;
      }
      if (u === t1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ts(e, Jr, Li), Zr(e, zt()), null;
    }
    function SR(e, t) {
      t !== I && (dl(e, Ke(t, Ue)), Zr(e, zt()), (ot & (rr | bu)) === On && (Dp(), _l()));
    }
    function c1(e, t) {
      var u = ot;
      ot |= LE;
      try {
        return e(t);
      } finally {
        ot = u, ot === On && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !oa.isBatchingLegacy && (Dp(), HD());
      }
    }
    function FR(e, t, u, a, l) {
      var s = Gr(), d = nr.transition;
      try {
        return nr.transition = null, dn(jn), e(t, u, a, l);
      } finally {
        dn(s), nr.transition = d, ot === On && Dp();
      }
    }
    function Mi(e) {
      Hl !== null && Hl.tag === Bl && (ot & (rr | bu)) === On && Ui();
      var t = ot;
      ot |= LE;
      var u = nr.transition, a = Gr();
      try {
        return nr.transition = null, dn(jn), e ? e() : void 0;
      } finally {
        dn(a), nr.transition = u, ot = t, (ot & (rr | bu)) === On && _l();
      }
    }
    function IE() {
      return (ot & (rr | bu)) !== On;
    }
    function O0(e, t) {
      mr(n1, Ga, e), Ga = Ke(Ga, t);
    }
    function f1(e) {
      Ga = n1.current, hr(n1, e);
    }
    function es(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var u = e.timeoutHandle;
      if (u !== ly && (e.timeoutHandle = ly, JF(u)), Jt !== null)
        for (var a = Jt.return; a !== null; ) {
          var l = a.alternate;
          DE(l, a), a = a.return;
        }
      Br = e;
      var s = ns(e.current, null);
      return Jt = s, Nn = Ga = t, Ln = Ni, mp = null, x0 = I, yp = I, R0 = I, gp = null, Jr = null, y2(), ea.discardPendingWarnings(), s;
    }
    function GE(e, t) {
      do {
        var u = Jt;
        try {
          if (Ph(), EC(), sn(), e1.current = null, u === null || u.return === null) {
            Ln = vp, mp = t, Jt = null;
            return;
          }
          if (_ && u.mode & Me && D0(u, !0), Tt)
            if (li(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              Hv(u, a, Nn);
            } else
              $s(u, t, Nn);
          K2(e, u.return, u, t, Nn), WE(u);
        } catch (l) {
          t = l, Jt === u && u !== null ? (u = u.return, Jt = u) : u = Jt;
          continue;
        }
        return;
      } while (!0);
    }
    function QE() {
      var e = Zg.current;
      return Zg.current = v0, e === null ? v0 : e;
    }
    function YE(e) {
      Zg.current = e;
    }
    function TR() {
      r1 = zt();
    }
    function Sp(e) {
      x0 = Ke(e, x0);
    }
    function xR() {
      Ln === Ni && (Ln = T0);
    }
    function d1() {
      (Ln === Ni || Ln === T0 || Ln === Jo) && (Ln = hp), Br !== null && (To(x0) || To(yp)) && Pl(Br, Nn);
    }
    function RR(e) {
      Ln !== hp && (Ln = Jo), gp === null ? gp = [e] : gp.push(e);
    }
    function wR() {
      return Ln === Ni;
    }
    function N0(e, t) {
      var u = ot;
      ot |= rr;
      var a = QE();
      if (Br !== e || Nn !== t) {
        if (Rn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Fp(e, Nn), l.clear()), oc(e, t);
        }
        Li = vd(), es(e, t);
      }
      fu(t);
      do
        try {
          BR();
          break;
        } catch (s) {
          GE(e, s);
        }
      while (!0);
      if (Ph(), ot = u, YE(a), Jt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return il(), Br = null, Nn = I, Ln;
    }
    function BR() {
      for (; Jt !== null; )
        KE(Jt);
    }
    function _R(e, t) {
      var u = ot;
      ot |= rr;
      var a = QE();
      if (Br !== e || Nn !== t) {
        if (Rn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Fp(e, Nn), l.clear()), oc(e, t);
        }
        Li = vd(), Dp(), es(e, t);
      }
      fu(t);
      do
        try {
          bR();
          break;
        } catch (s) {
          GE(e, s);
        }
      while (!0);
      return Ph(), YE(a), ot = u, Jt !== null ? (Co(), Ni) : (il(), Br = null, Nn = I, Ln);
    }
    function bR() {
      for (; Jt !== null && !Ns(); )
        KE(Jt);
    }
    function KE(e) {
      var t = e.alternate;
      At(e);
      var u;
      (e.mode & Me) !== Le ? (Rg(e), u = p1(t, e, Ga), D0(e, !0)) : u = p1(t, e, Ga), sn(), e.memoizedProps = e.pendingProps, u === null ? WE(e) : Jt = u, e1.current = null;
    }
    function WE(e) {
      var t = e;
      do {
        var u = t.alternate, a = t.return;
        if ((t.flags & Ar) === be) {
          At(t);
          var l = void 0;
          if ((t.mode & Me) === Le ? l = gE(u, t, Ga) : (Rg(t), l = gE(u, t, Ga), D0(t, !1)), sn(), l !== null) {
            Jt = l;
            return;
          }
        } else {
          var s = xx(u, t);
          if (s !== null) {
            s.flags &= _v, Jt = s;
            return;
          }
          if ((t.mode & Me) !== Le) {
            D0(t, !1);
            for (var d = t.actualDuration, h = t.child; h !== null; )
              d += h.actualDuration, h = h.sibling;
            t.actualDuration = d;
          }
          if (a !== null)
            a.flags |= Ar, a.subtreeFlags = be, a.deletions = null;
          else {
            Ln = t1, Jt = null;
            return;
          }
        }
        var m = t.sibling;
        if (m !== null) {
          Jt = m;
          return;
        }
        t = a, Jt = t;
      } while (t !== null);
      Ln === Ni && (Ln = ME);
    }
    function ts(e, t, u) {
      var a = Gr(), l = nr.transition;
      try {
        nr.transition = null, dn(jn), kR(e, t, u, a);
      } finally {
        nr.transition = l, dn(a);
      }
      return null;
    }
    function kR(e, t, u, a) {
      do
        Ui();
      while (Hl !== null);
      if (VR(), (ot & (rr | bu)) !== On)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Us(s), l === null)
        return td(), null;
      if (s === I && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = lt;
      var d = Ke(l.lanes, l.childLanes);
      dd(e, d), e === Br && (Br = null, Jt = null, Nn = I), ((l.subtreeFlags & Pr) !== be || (l.flags & Pr) !== be) && (Zo || (Zo = !0, i1 = u, m1(Eu, function() {
        return Ui(), null;
      })));
      var h = (l.subtreeFlags & (rl | cr | Pn | Pr)) !== be, m = (l.flags & (rl | cr | Pn | Pr)) !== be;
      if (h || m) {
        var C = nr.transition;
        nr.transition = null;
        var E = Gr();
        dn(jn);
        var B = ot;
        ot |= bu, e1.current = null, bx(e, l), QC(), Gx(e, l, s), GF(e.containerInfo), e.current = l, $v(s), Qx(l, e, s), al(), Ov(), ot = B, dn(E), nr.transition = C;
      } else
        e.current = l, QC();
      var x = Zo;
      if (Zo ? (Zo = !1, Hl = e, Cp = s) : (Xc = 0, _0 = null), d = e.pendingLanes, d === I && (qc = null), x || ZE(e.current, !1), Iu(l.stateNode, a), Rn && e.memoizedUpdaters.clear(), fR(), Zr(e, zt()), t !== null)
        for (var U = e.onRecoverableError, z = 0; z < t.length; z++) {
          var j = t[z], De = j.stack, ke = j.digest;
          U(j.value, {
            componentStack: De,
            digest: ke
          });
        }
      if (w0) {
        w0 = !1;
        var Be = u1;
        throw u1 = null, Be;
      }
      return vr(Cp, Ue) && e.tag !== Bl && Ui(), d = e.pendingLanes, vr(d, Ue) ? (P2(), e === l1 ? Ep++ : (Ep = 0, l1 = e)) : Ep = 0, _l(), td(), null;
    }
    function Ui() {
      if (Hl !== null) {
        var e = Bo(Cp), t = bm(Yu, e), u = nr.transition, a = Gr();
        try {
          return nr.transition = null, dn(t), NR();
        } finally {
          dn(a), nr.transition = u;
        }
      }
      return !1;
    }
    function OR(e) {
      a1.push(e), Zo || (Zo = !0, m1(Eu, function() {
        return Ui(), null;
      }));
    }
    function NR() {
      if (Hl === null)
        return !1;
      var e = i1;
      i1 = null;
      var t = Hl, u = Cp;
      if (Hl = null, Cp = I, (ot & (rr | bu)) !== On)
        throw new Error("Cannot flush passive effects while already rendering.");
      o1 = !0, B0 = !1, Pv(u);
      var a = ot;
      ot |= bu, Zx(t.current), Wx(t, t.current, u, e);
      {
        var l = a1;
        a1 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          Lx(t, d);
        }
      }
      Do(), ZE(t.current, !0), ot = a, _l(), B0 ? t === _0 ? Xc++ : (Xc = 0, _0 = t) : Xc = 0, o1 = !1, B0 = !1, Ta(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function qE(e) {
      return qc !== null && qc.has(e);
    }
    function LR(e) {
      qc === null ? qc = /* @__PURE__ */ new Set([e]) : qc.add(e);
    }
    function MR(e) {
      w0 || (w0 = !0, u1 = e);
    }
    var UR = MR;
    function XE(e, t, u) {
      var a = qo(u, t), l = KC(e, a, Ue), s = kl(e, l, Ue), d = _r();
      s !== null && (yi(s, Ue, d), Zr(s, d));
    }
    function Lt(e, t, u) {
      if (wx(u), Tp(!1), e.tag === re) {
        XE(e, e, u);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === re) {
          XE(a, e, u);
          return;
        } else if (a.tag === G) {
          var l = a.type, s = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !qE(s)) {
            var d = qo(u, e), h = Og(a, d, Ue), m = kl(a, h, Ue), C = _r();
            m !== null && (yi(m, Ue, C), Zr(m, C));
            return;
          }
        }
        a = a.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, u);
    }
    function zR(e, t, u) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var l = _r();
      fd(e, u), YR(e), Br === e && mi(Nn, u) && (Ln === hp || Ln === T0 && ac(Nn) && zt() - r1 < UE ? es(e, I) : R0 = Ke(R0, u)), Zr(e, l);
    }
    function JE(e, t) {
      t === lt && (t = gR(e));
      var u = _r(), a = qr(e, t);
      a !== null && (yi(a, t, u), Zr(a, u));
    }
    function HR(e) {
      var t = e.memoizedState, u = lt;
      t !== null && (u = t.retryLane), JE(e, u);
    }
    function $R(e, t) {
      var u = lt, a;
      switch (e.tag) {
        case de:
          a = e.stateNode;
          var l = e.memoizedState;
          l !== null && (u = l.retryLane);
          break;
        case pe:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), JE(e, u);
    }
    function PR(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : vR(e / 1960) * 1960;
    }
    function jR() {
      if (Ep > mR)
        throw Ep = 0, l1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Xc > yR && (Xc = 0, _0 = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function VR() {
      ea.flushLegacyContextWarning(), ea.flushPendingUnsafeLifecycleWarnings();
    }
    function ZE(e, t) {
      At(e), L0(e, sr, oR), t && L0(e, ii, sR), L0(e, sr, iR), t && L0(e, ii, lR), sn();
    }
    function L0(e, t, u) {
      for (var a = e, l = null; a !== null; ) {
        var s = a.subtreeFlags & t;
        a !== l && a.child !== null && s !== be ? a = a.child : ((a.flags & t) !== be && u(a), a.sibling !== null ? a = a.sibling : a = l = a.return);
      }
    }
    var M0 = null;
    function eA(e) {
      {
        if ((ot & rr) !== On || !(e.mode & Je))
          return;
        var t = e.tag;
        if (t !== Ve && t !== re && t !== G && t !== K && t !== Ge && t !== Y && t !== Oe)
          return;
        var u = Qe(e) || "ReactComponent";
        if (M0 !== null) {
          if (M0.has(u))
            return;
          M0.add(u);
        } else
          M0 = /* @__PURE__ */ new Set([u]);
        var a = nn;
        try {
          At(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? At(e) : sn();
        }
      }
    }
    var p1;
    {
      var IR = null;
      p1 = function(e, t, u) {
        var a = oA(IR, t);
        try {
          return pE(e, t, u);
        } catch (s) {
          if (r2() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ph(), EC(), DE(e, t), oA(t, a), t.mode & Me && Rg(t), ai(null, pE, null, e, t, u), Fm()) {
            var l = If();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var tA = !1, v1;
    v1 = /* @__PURE__ */ new Set();
    function GR(e) {
      if (Lr && !z2())
        switch (e.tag) {
          case K:
          case Ge:
          case Oe: {
            var t = Jt && Qe(Jt) || "Unknown", u = t;
            if (!v1.has(u)) {
              v1.add(u);
              var a = Qe(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case G: {
            tA || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), tA = !0);
            break;
          }
        }
    }
    function Fp(e, t) {
      if (Rn) {
        var u = e.memoizedUpdaters;
        u.forEach(function(a) {
          pd(e, a, t);
        });
      }
    }
    var h1 = {};
    function m1(e, t) {
      {
        var u = oa.current;
        return u !== null ? (u.push(t), h1) : Os(e, t);
      }
    }
    function nA(e) {
      if (e !== h1)
        return kv(e);
    }
    function rA() {
      return oa.current !== null;
    }
    function QR(e) {
      {
        if (e.mode & Je) {
          if (!NE())
            return;
        } else if (!pR() || ot !== On || e.tag !== K && e.tag !== Ge && e.tag !== Oe)
          return;
        if (oa.current === null) {
          var t = nn;
          try {
            At(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Qe(e));
          } finally {
            t ? At(e) : sn();
          }
        }
      }
    }
    function YR(e) {
      e.tag !== Bl && NE() && oa.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Tp(e) {
      $E = e;
    }
    var ku = null, Jc = null, KR = function(e) {
      ku = e;
    };
    function Zc(e) {
      {
        if (ku === null)
          return e;
        var t = ku(e);
        return t === void 0 ? e : t.current;
      }
    }
    function y1(e) {
      return Zc(e);
    }
    function g1(e) {
      {
        if (ku === null)
          return e;
        var t = ku(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var u = Zc(e.render);
            if (e.render !== u) {
              var a = {
                $$typeof: Vi,
                render: u
              };
              return e.displayName !== void 0 && (a.displayName = e.displayName), a;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function uA(e, t) {
      {
        if (ku === null)
          return !1;
        var u = e.elementType, a = t.type, l = !1, s = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case G: {
            typeof a == "function" && (l = !0);
            break;
          }
          case K: {
            (typeof a == "function" || s === Kn) && (l = !0);
            break;
          }
          case Ge: {
            (s === Vi || s === Kn) && (l = !0);
            break;
          }
          case Y:
          case Oe: {
            (s === Ii || s === Kn) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = ku(u);
          if (d !== void 0 && d === ku(a))
            return !0;
        }
        return !1;
      }
    }
    function aA(e) {
      {
        if (ku === null || typeof WeakSet != "function")
          return;
        Jc === null && (Jc = /* @__PURE__ */ new WeakSet()), Jc.add(e);
      }
    }
    var WR = function(e, t) {
      {
        if (ku === null)
          return;
        var u = t.staleFamilies, a = t.updatedFamilies;
        Ui(), Mi(function() {
          D1(e.current, a, u);
        });
      }
    }, qR = function(e, t) {
      {
        if (e.context !== pu)
          return;
        Ui(), Mi(function() {
          xp(t, e, null, null);
        });
      }
    };
    function D1(e, t, u) {
      {
        var a = e.alternate, l = e.child, s = e.sibling, d = e.tag, h = e.type, m = null;
        switch (d) {
          case K:
          case Oe:
          case G:
            m = h;
            break;
          case Ge:
            m = h.render;
            break;
        }
        if (ku === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, E = !1;
        if (m !== null) {
          var B = ku(m);
          B !== void 0 && (u.has(B) ? E = !0 : t.has(B) && (d === G ? E = !0 : C = !0));
        }
        if (Jc !== null && (Jc.has(e) || a !== null && Jc.has(a)) && (E = !0), E && (e._debugNeedsRemount = !0), E || C) {
          var x = qr(e, Ue);
          x !== null && Mn(x, e, Ue, Bt);
        }
        l !== null && !E && D1(l, t, u), s !== null && D1(s, t, u);
      }
    }
    var XR = function(e, t) {
      {
        var u = /* @__PURE__ */ new Set(), a = new Set(t.map(function(l) {
          return l.current;
        }));
        return C1(e.current, a, u), u;
      }
    };
    function C1(e, t, u) {
      {
        var a = e.child, l = e.sibling, s = e.tag, d = e.type, h = null;
        switch (s) {
          case K:
          case Oe:
          case G:
            h = d;
            break;
          case Ge:
            h = d.render;
            break;
        }
        var m = !1;
        h !== null && t.has(h) && (m = !0), m ? JR(e, u) : a !== null && C1(a, t, u), l !== null && C1(l, t, u);
      }
    }
    function JR(e, t) {
      {
        var u = ZR(e, t);
        if (u)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case W:
              t.add(a.stateNode);
              return;
            case M:
              t.add(a.stateNode.containerInfo);
              return;
            case re:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function ZR(e, t) {
      for (var u = e, a = !1; ; ) {
        if (u.tag === W)
          a = !0, t.add(u.stateNode);
        else if (u.child !== null) {
          u.child.return = u, u = u.child;
          continue;
        }
        if (u === e)
          return a;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === e)
            return a;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
      return !1;
    }
    var E1;
    {
      E1 = !1;
      try {
        var iA = Object.preventExtensions({});
      } catch {
        E1 = !0;
      }
    }
    function e3(e, t, u, a) {
      this.tag = e, this.key = u, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = be, this.subtreeFlags = be, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !E1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vu = function(e, t, u, a) {
      return new e3(e, t, u, a);
    };
    function A1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function t3(e) {
      return typeof e == "function" && !A1(e) && e.defaultProps === void 0;
    }
    function n3(e) {
      if (typeof e == "function")
        return A1(e) ? G : K;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Vi)
          return Ge;
        if (t === Ii)
          return Y;
      }
      return Ve;
    }
    function ns(e, t) {
      var u = e.alternate;
      u === null ? (u = vu(e.tag, t, e.key, e.mode), u.elementType = e.elementType, u.type = e.type, u.stateNode = e.stateNode, u._debugSource = e._debugSource, u._debugOwner = e._debugOwner, u._debugHookTypes = e._debugHookTypes, u.alternate = e, e.alternate = u) : (u.pendingProps = t, u.type = e.type, u.flags = be, u.subtreeFlags = be, u.deletions = null, u.actualDuration = 0, u.actualStartTime = -1), u.flags = e.flags & xn, u.childLanes = e.childLanes, u.lanes = e.lanes, u.child = e.child, u.memoizedProps = e.memoizedProps, u.memoizedState = e.memoizedState, u.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (u.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, u.sibling = e.sibling, u.index = e.index, u.ref = e.ref, u.selfBaseDuration = e.selfBaseDuration, u.treeBaseDuration = e.treeBaseDuration, u._debugNeedsRemount = e._debugNeedsRemount, u.tag) {
        case Ve:
        case K:
        case Oe:
          u.type = Zc(e.type);
          break;
        case G:
          u.type = y1(e.type);
          break;
        case Ge:
          u.type = g1(e.type);
          break;
      }
      return u;
    }
    function r3(e, t) {
      e.flags &= xn | bt;
      var u = e.alternate;
      if (u === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = be, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = u.childLanes, e.lanes = u.lanes, e.child = u.child, e.subtreeFlags = be, e.deletions = null, e.memoizedProps = u.memoizedProps, e.memoizedState = u.memoizedState, e.updateQueue = u.updateQueue, e.type = u.type;
        var a = u.dependencies;
        e.dependencies = a === null ? null : {
          lanes: a.lanes,
          firstContext: a.firstContext
        }, e.selfBaseDuration = u.selfBaseDuration, e.treeBaseDuration = u.treeBaseDuration;
      }
      return e;
    }
    function u3(e, t, u) {
      var a;
      return e === Oh ? (a = Je, t === !0 && (a |= Ht, a |= Vr)) : a = Le, Rn && (a |= Me), vu(re, null, null, a);
    }
    function S1(e, t, u, a, l, s) {
      var d = Ve, h = e;
      if (typeof e == "function")
        A1(e) ? (d = G, h = y1(h)) : h = Zc(h);
      else if (typeof e == "string")
        d = W;
      else
        e:
          switch (e) {
            case Nu:
              return jl(u.children, l, s, t);
            case ji:
              d = ne, l |= Ht, (l & Je) !== Le && (l |= Vr);
              break;
            case Ql:
              return a3(u, l, s, t);
            case gu:
              return i3(u, l, s, t);
            case Yl:
              return l3(u, l, s, t);
            case df:
              return lA(u, l, s, t);
            case Pp:
            case Hp:
            case nm:
            case rm:
            case $p:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case cf:
                    d = ct;
                    break e;
                  case ff:
                    d = Ct;
                    break e;
                  case Vi:
                    d = Ge, h = g1(h);
                    break e;
                  case Ii:
                    d = Y;
                    break e;
                  case Kn:
                    d = le, h = null;
                    break e;
                }
              var m = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = a ? Qe(a) : null;
                C && (m += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + m));
            }
          }
      var E = vu(d, u, t, l);
      return E.elementType = e, E.type = h, E.lanes = s, E._debugOwner = a, E;
    }
    function F1(e, t, u) {
      var a = null;
      a = e._owner;
      var l = e.type, s = e.key, d = e.props, h = S1(l, s, d, a, t, u);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function jl(e, t, u, a) {
      var l = vu(Z, e, a, t);
      return l.lanes = u, l;
    }
    function a3(e, t, u, a) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = vu(We, e, a, t | Me);
      return l.elementType = Ql, l.lanes = u, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function i3(e, t, u, a) {
      var l = vu(de, e, a, t);
      return l.elementType = gu, l.lanes = u, l;
    }
    function l3(e, t, u, a) {
      var l = vu(pe, e, a, t);
      return l.elementType = Yl, l.lanes = u, l;
    }
    function lA(e, t, u, a) {
      var l = vu(Xe, e, a, t);
      l.elementType = df, l.lanes = u;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function T1(e, t, u) {
      var a = vu(ue, e, null, t);
      return a.lanes = u, a;
    }
    function o3() {
      var e = vu(W, null, null, Le);
      return e.elementType = "DELETED", e;
    }
    function s3(e) {
      var t = vu(ht, null, null, Le);
      return t.stateNode = e, t;
    }
    function x1(e, t, u) {
      var a = e.children !== null ? e.children : [], l = vu(M, a, e.key, t);
      return l.lanes = u, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function oA(e, t) {
      return e === null && (e = vu(Ve, null, null, Le)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function c3(e, t, u, a, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = ly, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = lt, this.eventTimes = lc(I), this.expirationTimes = lc(Bt), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = lc(I), this.identifierPrefix = a, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Ot; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Oh:
          this._debugRootType = u ? "hydrateRoot()" : "createRoot()";
          break;
        case Bl:
          this._debugRootType = u ? "hydrate()" : "render()";
          break;
      }
    }
    function sA(e, t, u, a, l, s, d, h, m, C) {
      var E = new c3(e, t, u, h, m), B = u3(t, s);
      E.current = B, B.stateNode = E;
      {
        var x = {
          element: a,
          isDehydrated: u,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        B.memoizedState = x;
      }
      return Ny(B), E;
    }
    var R1 = "18.2.0";
    function f3(e, t, u) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $i(a), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: uu,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: u
      };
    }
    var w1, B1;
    w1 = !1, B1 = {};
    function cA(e) {
      if (!e)
        return pu;
      var t = zr(e), u = KT(t);
      if (t.tag === G) {
        var a = t.type;
        if (za(a))
          return MD(t, a, u);
      }
      return u;
    }
    function d3(e, t) {
      {
        var u = zr(e);
        if (u === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var a = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var l = jr(u);
        if (l === null)
          return null;
        if (l.mode & Ht) {
          var s = Qe(u) || "Component";
          if (!B1[s]) {
            B1[s] = !0;
            var d = nn;
            try {
              At(l), u.mode & Ht ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? At(d) : sn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function fA(e, t, u, a, l, s, d, h) {
      var m = !1, C = null;
      return sA(e, t, m, C, u, a, l, s, d);
    }
    function dA(e, t, u, a, l, s, d, h, m, C) {
      var E = !0, B = sA(u, a, E, e, l, s, d, h, m);
      B.context = cA(null);
      var x = B.current, U = _r(), z = $l(x), j = ki(U, z);
      return j.callback = t ?? null, kl(x, j, z), DR(B, z, U), B;
    }
    function xp(e, t, u, a) {
      Nv(t, e);
      var l = t.current, s = _r(), d = $l(l);
      oi(d);
      var h = cA(u);
      t.context === null ? t.context = h : t.pendingContext = h, Lr && nn !== null && !w1 && (w1 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Qe(nn) || "Unknown"));
      var m = ki(s, d);
      m.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), m.callback = a);
      var C = kl(l, m, d);
      return C !== null && (Mn(C, l, d, s), Qh(C, l, d)), d;
    }
    function U0(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case W:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function p3(e) {
      switch (e.tag) {
        case re: {
          var t = e.stateNode;
          if (pn(t)) {
            var u = Rm(t);
            SR(t, u);
          }
          break;
        }
        case de: {
          Mi(function() {
            var l = qr(e, Ue);
            if (l !== null) {
              var s = _r();
              Mn(l, e, Ue, s);
            }
          });
          var a = Ue;
          _1(e, a);
          break;
        }
      }
    }
    function pA(e, t) {
      var u = e.memoizedState;
      u !== null && u.dehydrated !== null && (u.retryLane = Qv(u.retryLane, t));
    }
    function _1(e, t) {
      pA(e, t);
      var u = e.alternate;
      u && pA(u, t);
    }
    function v3(e) {
      if (e.tag === de) {
        var t = ll, u = qr(e, t);
        if (u !== null) {
          var a = _r();
          Mn(u, e, t, a);
        }
        _1(e, t);
      }
    }
    function h3(e) {
      if (e.tag === de) {
        var t = $l(e), u = qr(e, t);
        if (u !== null) {
          var a = _r();
          Mn(u, e, t, a);
        }
        _1(e, t);
      }
    }
    function vA(e) {
      var t = bv(e);
      return t === null ? null : t.stateNode;
    }
    var hA = function(e) {
      return null;
    };
    function m3(e) {
      return hA(e);
    }
    var mA = function(e) {
      return !1;
    };
    function y3(e) {
      return mA(e);
    }
    var yA = null, gA = null, DA = null, CA = null, EA = null, AA = null, SA = null, FA = null, TA = null;
    {
      var xA = function(e, t, u) {
        var a = t[u], l = yn(e) ? e.slice() : tt({}, e);
        return u + 1 === t.length ? (yn(l) ? l.splice(a, 1) : delete l[a], l) : (l[a] = xA(e[a], t, u + 1), l);
      }, RA = function(e, t) {
        return xA(e, t, 0);
      }, wA = function(e, t, u, a) {
        var l = t[a], s = yn(e) ? e.slice() : tt({}, e);
        if (a + 1 === t.length) {
          var d = u[a];
          s[d] = s[l], yn(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = wA(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            u,
            a + 1
          );
        return s;
      }, BA = function(e, t, u) {
        if (t.length !== u.length) {
          R("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < u.length - 1; a++)
            if (t[a] !== u[a]) {
              R("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return wA(e, t, u, 0);
      }, _A = function(e, t, u, a) {
        if (u >= t.length)
          return a;
        var l = t[u], s = yn(e) ? e.slice() : tt({}, e);
        return s[l] = _A(e[l], t, u + 1, a), s;
      }, bA = function(e, t, u) {
        return _A(e, t, 0, u);
      }, b1 = function(e, t) {
        for (var u = e.memoizedState; u !== null && t > 0; )
          u = u.next, t--;
        return u;
      };
      yA = function(e, t, u, a) {
        var l = b1(e, t);
        if (l !== null) {
          var s = bA(l.memoizedState, u, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var d = qr(e, Ue);
          d !== null && Mn(d, e, Ue, Bt);
        }
      }, gA = function(e, t, u) {
        var a = b1(e, t);
        if (a !== null) {
          var l = RA(a.memoizedState, u);
          a.memoizedState = l, a.baseState = l, e.memoizedProps = tt({}, e.memoizedProps);
          var s = qr(e, Ue);
          s !== null && Mn(s, e, Ue, Bt);
        }
      }, DA = function(e, t, u, a) {
        var l = b1(e, t);
        if (l !== null) {
          var s = BA(l.memoizedState, u, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var d = qr(e, Ue);
          d !== null && Mn(d, e, Ue, Bt);
        }
      }, CA = function(e, t, u) {
        e.pendingProps = bA(e.memoizedProps, t, u), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = qr(e, Ue);
        a !== null && Mn(a, e, Ue, Bt);
      }, EA = function(e, t) {
        e.pendingProps = RA(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var u = qr(e, Ue);
        u !== null && Mn(u, e, Ue, Bt);
      }, AA = function(e, t, u) {
        e.pendingProps = BA(e.memoizedProps, t, u), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = qr(e, Ue);
        a !== null && Mn(a, e, Ue, Bt);
      }, SA = function(e) {
        var t = qr(e, Ue);
        t !== null && Mn(t, e, Ue, Bt);
      }, FA = function(e) {
        hA = e;
      }, TA = function(e) {
        mA = e;
      };
    }
    function g3(e) {
      var t = jr(e);
      return t === null ? null : t.stateNode;
    }
    function D3(e) {
      return null;
    }
    function C3() {
      return nn;
    }
    function E3(e) {
      var t = e.findFiberByHostInstance, u = g.ReactCurrentDispatcher;
      return Zf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: yA,
        overrideHookStateDeletePath: gA,
        overrideHookStateRenamePath: DA,
        overrideProps: CA,
        overridePropsDeletePath: EA,
        overridePropsRenamePath: AA,
        setErrorHandler: FA,
        setSuspenseHandler: TA,
        scheduleUpdate: SA,
        currentDispatcherRef: u,
        findHostInstanceByFiber: g3,
        findFiberByHostInstance: t || D3,
        // React Refresh
        findHostInstancesForRefresh: XR,
        scheduleRefresh: WR,
        scheduleRoot: qR,
        setRefreshHandler: KR,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: C3,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: R1
      });
    }
    var kA = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function k1(e) {
      this._internalRoot = e;
    }
    z0.prototype.render = k1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : H0(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var u = t.containerInfo;
        if (u.nodeType !== rn) {
          var a = vA(t.current);
          a && a.parentNode !== u && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      xp(e, t, null, null);
    }, z0.prototype.unmount = k1.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        IE() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Mi(function() {
          xp(null, e, null, null);
        }), bD(t);
      }
    };
    function A3(e, t) {
      if (!H0(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      OA(e);
      var u = !1, a = !1, l = "", s = kA;
      t != null && (t.hydrate ? R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Pi && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = fA(e, Oh, null, u, a, l, s);
      xh(d.current, e);
      var h = e.nodeType === rn ? e.parentNode : e;
      return Nd(h), new k1(d);
    }
    function z0(e) {
      this._internalRoot = e;
    }
    function S3(e) {
      e && eh(e);
    }
    z0.prototype.unstable_scheduleHydration = S3;
    function F3(e, t, u) {
      if (!H0(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      OA(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = u ?? null, l = u != null && u.hydratedSources || null, s = !1, d = !1, h = "", m = kA;
      u != null && (u.unstable_strictMode === !0 && (s = !0), u.identifierPrefix !== void 0 && (h = u.identifierPrefix), u.onRecoverableError !== void 0 && (m = u.onRecoverableError));
      var C = dA(t, null, e, Oh, a, s, d, h, m);
      if (xh(C.current, e), Nd(e), l)
        for (var E = 0; E < l.length; E++) {
          var B = l[E];
          k2(C, B);
        }
      return new z0(C);
    }
    function H0(e) {
      return !!(e && (e.nodeType === ir || e.nodeType === ou || e.nodeType === Za || !ft));
    }
    function Rp(e) {
      return !!(e && (e.nodeType === ir || e.nodeType === ou || e.nodeType === Za || e.nodeType === rn && e.nodeValue === " react-mount-point-unstable "));
    }
    function OA(e) {
      e.nodeType === ir && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Gd(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var T3 = g.ReactCurrentOwner, NA;
    NA = function(e) {
      if (e._reactRootContainer && e.nodeType !== rn) {
        var t = vA(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var u = !!e._reactRootContainer, a = O1(e), l = !!(a && Rl(a));
      l && !u && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ir && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function O1(e) {
      return e ? e.nodeType === ou ? e.documentElement : e.firstChild : null;
    }
    function LA() {
    }
    function x3(e, t, u, a, l) {
      if (l) {
        if (typeof a == "function") {
          var s = a;
          a = function() {
            var x = U0(d);
            s.call(x);
          };
        }
        var d = dA(
          t,
          a,
          e,
          Bl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          LA
        );
        e._reactRootContainer = d, xh(d.current, e);
        var h = e.nodeType === rn ? e.parentNode : e;
        return Nd(h), Mi(), d;
      } else {
        for (var m; m = e.lastChild; )
          e.removeChild(m);
        if (typeof a == "function") {
          var C = a;
          a = function() {
            var x = U0(E);
            C.call(x);
          };
        }
        var E = fA(
          e,
          Bl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          LA
        );
        e._reactRootContainer = E, xh(E.current, e);
        var B = e.nodeType === rn ? e.parentNode : e;
        return Nd(B), Mi(function() {
          xp(t, E, u, a);
        }), E;
      }
    }
    function R3(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $0(e, t, u, a, l) {
      NA(u), R3(l === void 0 ? null : l, "render");
      var s = u._reactRootContainer, d;
      if (!s)
        d = x3(u, t, e, l, a);
      else {
        if (d = s, typeof l == "function") {
          var h = l;
          l = function() {
            var m = U0(d);
            h.call(m);
          };
        }
        xp(t, d, e, l);
      }
      return U0(d);
    }
    function w3(e) {
      {
        var t = T3.current;
        if (t !== null && t.stateNode !== null) {
          var u = t.stateNode._warnedAboutRefsInRender;
          u || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ir ? e : d3(e, "findDOMNode");
    }
    function B3(e, t, u) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Gd(t) && t._reactRootContainer === void 0;
        a && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $0(null, e, t, !0, u);
    }
    function _3(e, t, u) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Gd(t) && t._reactRootContainer === void 0;
        a && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $0(null, e, t, !1, u);
    }
    function b3(e, t, u, a) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rp(u))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !mo(e))
        throw new Error("parentComponent must be a valid React Component");
      return $0(e, t, u, !1, a);
    }
    function k3(e) {
      if (!Rp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Gd(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var u = O1(e), a = u && !Rl(u);
          a && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Mi(function() {
          $0(null, null, e, !1, function() {
            e._reactRootContainer = null, bD(e);
          });
        }), !0;
      } else {
        {
          var l = O1(e), s = !!(l && Rl(l)), d = e.nodeType === ir && Rp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ee(p3), Kv(v3), bo(h3), md(Gr), qv(wo), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), wv(LF), ws(c1, FR, Mi);
    function O3(e, t) {
      var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!H0(t))
        throw new Error("Target container is not a DOM element.");
      return f3(e, t, null, u);
    }
    function N3(e, t, u, a) {
      return b3(e, t, u, a);
    }
    var N1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Rl, _c, Rh, Rs, po, c1]
    };
    function L3(e, t) {
      return N1.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), A3(e, t);
    }
    function M3(e, t, u) {
      return N1.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), F3(e, t, u);
    }
    function U3(e) {
      return IE() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Mi(e);
    }
    var z3 = E3({
      findFiberByHostInstance: Po,
      bundleType: 1,
      version: R1,
      rendererPackageName: "react-dom"
    });
    if (!z3 && it && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var MA = window.location.protocol;
      /^(https?|file):$/.test(MA) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (MA === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N1, tu.createPortal = O3, tu.createRoot = L3, tu.findDOMNode = w3, tu.flushSync = U3, tu.hydrate = B3, tu.hydrateRoot = M3, tu.render = _3, tu.unmountComponentAtNode = k3, tu.unstable_batchedUpdates = c1, tu.unstable_renderSubtreeIntoContainer = N3, tu.version = R1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), tu;
}
function CS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(CS);
    } catch (c) {
      console.error(c);
    }
  }
}
process.env.NODE_ENV === "production" ? (CS(), $1.exports = V3()) : $1.exports = I3();
var G3 = $1.exports;
const K5 = /* @__PURE__ */ K0(G3);
function Q3(c, v) {
  for (var g = -1, S = c == null ? 0 : c.length, F = Array(S); ++g < S; )
    F[g] = v(c[g], g, c);
  return F;
}
var Y3 = Q3;
function K3() {
  this.__data__ = [], this.size = 0;
}
var W3 = K3;
function q3(c, v) {
  return c === v || c !== c && v !== v;
}
var ES = q3, X3 = ES;
function J3(c, v) {
  for (var g = c.length; g--; )
    if (X3(c[g][0], v))
      return g;
  return -1;
}
var W0 = J3, Z3 = W0, ew = Array.prototype, tw = ew.splice;
function nw(c) {
  var v = this.__data__, g = Z3(v, c);
  if (g < 0)
    return !1;
  var S = v.length - 1;
  return g == S ? v.pop() : tw.call(v, g, 1), --this.size, !0;
}
var rw = nw, uw = W0;
function aw(c) {
  var v = this.__data__, g = uw(v, c);
  return g < 0 ? void 0 : v[g][1];
}
var iw = aw, lw = W0;
function ow(c) {
  return lw(this.__data__, c) > -1;
}
var sw = ow, cw = W0;
function fw(c, v) {
  var g = this.__data__, S = cw(g, c);
  return S < 0 ? (++this.size, g.push([c, v])) : g[S][1] = v, this;
}
var dw = fw, pw = W3, vw = rw, hw = iw, mw = sw, yw = dw;
function rf(c) {
  var v = -1, g = c == null ? 0 : c.length;
  for (this.clear(); ++v < g; ) {
    var S = c[v];
    this.set(S[0], S[1]);
  }
}
rf.prototype.clear = pw;
rf.prototype.delete = vw;
rf.prototype.get = hw;
rf.prototype.has = mw;
rf.prototype.set = yw;
var q0 = rf, gw = q0;
function Dw() {
  this.__data__ = new gw(), this.size = 0;
}
var Cw = Dw;
function Ew(c) {
  var v = this.__data__, g = v.delete(c);
  return this.size = v.size, g;
}
var Aw = Ew;
function Sw(c) {
  return this.__data__.get(c);
}
var Fw = Sw;
function Tw(c) {
  return this.__data__.has(c);
}
var xw = Tw, Rw = typeof P0 == "object" && P0 && P0.Object === Object && P0, AS = Rw, ww = AS, Bw = typeof self == "object" && self && self.Object === Object && self, _w = ww || Bw || Function("return this")(), Hi = _w, bw = Hi, kw = bw.Symbol, X0 = kw, jA = X0, SS = Object.prototype, Ow = SS.hasOwnProperty, Nw = SS.toString, Bp = jA ? jA.toStringTag : void 0;
function Lw(c) {
  var v = Ow.call(c, Bp), g = c[Bp];
  try {
    c[Bp] = void 0;
    var S = !0;
  } catch {
  }
  var F = Nw.call(c);
  return S && (v ? c[Bp] = g : delete c[Bp]), F;
}
var Mw = Lw, Uw = Object.prototype, zw = Uw.toString;
function Hw(c) {
  return zw.call(c);
}
var $w = Hw, VA = X0, Pw = Mw, jw = $w, Vw = "[object Null]", Iw = "[object Undefined]", IA = VA ? VA.toStringTag : void 0;
function Gw(c) {
  return c == null ? c === void 0 ? Iw : Vw : IA && IA in Object(c) ? Pw(c) : jw(c);
}
var Np = Gw;
function Qw(c) {
  var v = typeof c;
  return c != null && (v == "object" || v == "function");
}
var Q1 = Qw, Yw = Np, Kw = Q1, Ww = "[object AsyncFunction]", qw = "[object Function]", Xw = "[object GeneratorFunction]", Jw = "[object Proxy]";
function Zw(c) {
  if (!Kw(c))
    return !1;
  var v = Yw(c);
  return v == qw || v == Xw || v == Ww || v == Jw;
}
var Y1 = Zw;
const W5 = /* @__PURE__ */ K0(Y1);
var eB = Hi, tB = eB["__core-js_shared__"], nB = tB, U1 = nB, GA = function() {
  var c = /[^.]+$/.exec(U1 && U1.keys && U1.keys.IE_PROTO || "");
  return c ? "Symbol(src)_1." + c : "";
}();
function rB(c) {
  return !!GA && GA in c;
}
var uB = rB, aB = Function.prototype, iB = aB.toString;
function lB(c) {
  if (c != null) {
    try {
      return iB.call(c);
    } catch {
    }
    try {
      return c + "";
    } catch {
    }
  }
  return "";
}
var FS = lB, oB = Y1, sB = uB, cB = Q1, fB = FS, dB = /[\\^$.*+?()[\]{}|]/g, pB = /^\[object .+?Constructor\]$/, vB = Function.prototype, hB = Object.prototype, mB = vB.toString, yB = hB.hasOwnProperty, gB = RegExp(
  "^" + mB.call(yB).replace(dB, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function DB(c) {
  if (!cB(c) || sB(c))
    return !1;
  var v = oB(c) ? gB : pB;
  return v.test(fB(c));
}
var CB = DB;
function EB(c, v) {
  return c == null ? void 0 : c[v];
}
var AB = EB, SB = CB, FB = AB;
function TB(c, v) {
  var g = FB(c, v);
  return SB(g) ? g : void 0;
}
var us = TB, xB = us, RB = Hi, wB = xB(RB, "Map"), K1 = wB, BB = us, _B = BB(Object, "create"), J0 = _B, QA = J0;
function bB() {
  this.__data__ = QA ? QA(null) : {}, this.size = 0;
}
var kB = bB;
function OB(c) {
  var v = this.has(c) && delete this.__data__[c];
  return this.size -= v ? 1 : 0, v;
}
var NB = OB, LB = J0, MB = "__lodash_hash_undefined__", UB = Object.prototype, zB = UB.hasOwnProperty;
function HB(c) {
  var v = this.__data__;
  if (LB) {
    var g = v[c];
    return g === MB ? void 0 : g;
  }
  return zB.call(v, c) ? v[c] : void 0;
}
var $B = HB, PB = J0, jB = Object.prototype, VB = jB.hasOwnProperty;
function IB(c) {
  var v = this.__data__;
  return PB ? v[c] !== void 0 : VB.call(v, c);
}
var GB = IB, QB = J0, YB = "__lodash_hash_undefined__";
function KB(c, v) {
  var g = this.__data__;
  return this.size += this.has(c) ? 0 : 1, g[c] = QB && v === void 0 ? YB : v, this;
}
var WB = KB, qB = kB, XB = NB, JB = $B, ZB = GB, e_ = WB;
function uf(c) {
  var v = -1, g = c == null ? 0 : c.length;
  for (this.clear(); ++v < g; ) {
    var S = c[v];
    this.set(S[0], S[1]);
  }
}
uf.prototype.clear = qB;
uf.prototype.delete = XB;
uf.prototype.get = JB;
uf.prototype.has = ZB;
uf.prototype.set = e_;
var t_ = uf, YA = t_, n_ = q0, r_ = K1;
function u_() {
  this.size = 0, this.__data__ = {
    hash: new YA(),
    map: new (r_ || n_)(),
    string: new YA()
  };
}
var a_ = u_;
function i_(c) {
  var v = typeof c;
  return v == "string" || v == "number" || v == "symbol" || v == "boolean" ? c !== "__proto__" : c === null;
}
var l_ = i_, o_ = l_;
function s_(c, v) {
  var g = c.__data__;
  return o_(v) ? g[typeof v == "string" ? "string" : "hash"] : g.map;
}
var Z0 = s_, c_ = Z0;
function f_(c) {
  var v = c_(this, c).delete(c);
  return this.size -= v ? 1 : 0, v;
}
var d_ = f_, p_ = Z0;
function v_(c) {
  return p_(this, c).get(c);
}
var h_ = v_, m_ = Z0;
function y_(c) {
  return m_(this, c).has(c);
}
var g_ = y_, D_ = Z0;
function C_(c, v) {
  var g = D_(this, c), S = g.size;
  return g.set(c, v), this.size += g.size == S ? 0 : 1, this;
}
var E_ = C_, A_ = a_, S_ = d_, F_ = h_, T_ = g_, x_ = E_;
function af(c) {
  var v = -1, g = c == null ? 0 : c.length;
  for (this.clear(); ++v < g; ) {
    var S = c[v];
    this.set(S[0], S[1]);
  }
}
af.prototype.clear = A_;
af.prototype.delete = S_;
af.prototype.get = F_;
af.prototype.has = T_;
af.prototype.set = x_;
var W1 = af, R_ = q0, w_ = K1, B_ = W1, __ = 200;
function b_(c, v) {
  var g = this.__data__;
  if (g instanceof R_) {
    var S = g.__data__;
    if (!w_ || S.length < __ - 1)
      return S.push([c, v]), this.size = ++g.size, this;
    g = this.__data__ = new B_(S);
  }
  return g.set(c, v), this.size = g.size, this;
}
var k_ = b_, O_ = q0, N_ = Cw, L_ = Aw, M_ = Fw, U_ = xw, z_ = k_;
function lf(c) {
  var v = this.__data__ = new O_(c);
  this.size = v.size;
}
lf.prototype.clear = N_;
lf.prototype.delete = L_;
lf.prototype.get = M_;
lf.prototype.has = U_;
lf.prototype.set = z_;
var TS = lf, H_ = "__lodash_hash_undefined__";
function $_(c) {
  return this.__data__.set(c, H_), this;
}
var P_ = $_;
function j_(c) {
  return this.__data__.has(c);
}
var V_ = j_, I_ = W1, G_ = P_, Q_ = V_;
function I0(c) {
  var v = -1, g = c == null ? 0 : c.length;
  for (this.__data__ = new I_(); ++v < g; )
    this.add(c[v]);
}
I0.prototype.add = I0.prototype.push = G_;
I0.prototype.has = Q_;
var Y_ = I0;
function K_(c, v) {
  for (var g = -1, S = c == null ? 0 : c.length; ++g < S; )
    if (v(c[g], g, c))
      return !0;
  return !1;
}
var W_ = K_;
function q_(c, v) {
  return c.has(v);
}
var X_ = q_, J_ = Y_, Z_ = W_, eb = X_, tb = 1, nb = 2;
function rb(c, v, g, S, F, R) {
  var y = g & tb, q = c.length, K = v.length;
  if (q != K && !(y && K > q))
    return !1;
  var G = R.get(c), Ve = R.get(v);
  if (G && Ve)
    return G == v && Ve == c;
  var re = -1, M = !0, W = g & nb ? new J_() : void 0;
  for (R.set(c, v), R.set(v, c); ++re < q; ) {
    var ue = c[re], Z = v[re];
    if (S)
      var ne = y ? S(Z, ue, re, v, c, R) : S(ue, Z, re, c, v, R);
    if (ne !== void 0) {
      if (ne)
        continue;
      M = !1;
      break;
    }
    if (W) {
      if (!Z_(v, function(Ct, ct) {
        if (!eb(W, ct) && (ue === Ct || F(ue, Ct, g, S, R)))
          return W.push(ct);
      })) {
        M = !1;
        break;
      }
    } else if (!(ue === Z || F(ue, Z, g, S, R))) {
      M = !1;
      break;
    }
  }
  return R.delete(c), R.delete(v), M;
}
var xS = rb, ub = Hi, ab = ub.Uint8Array, ib = ab;
function lb(c) {
  var v = -1, g = Array(c.size);
  return c.forEach(function(S, F) {
    g[++v] = [F, S];
  }), g;
}
var ob = lb;
function sb(c) {
  var v = -1, g = Array(c.size);
  return c.forEach(function(S) {
    g[++v] = S;
  }), g;
}
var cb = sb, KA = X0, WA = ib, fb = ES, db = xS, pb = ob, vb = cb, hb = 1, mb = 2, yb = "[object Boolean]", gb = "[object Date]", Db = "[object Error]", Cb = "[object Map]", Eb = "[object Number]", Ab = "[object RegExp]", Sb = "[object Set]", Fb = "[object String]", Tb = "[object Symbol]", xb = "[object ArrayBuffer]", Rb = "[object DataView]", qA = KA ? KA.prototype : void 0, z1 = qA ? qA.valueOf : void 0;
function wb(c, v, g, S, F, R, y) {
  switch (g) {
    case Rb:
      if (c.byteLength != v.byteLength || c.byteOffset != v.byteOffset)
        return !1;
      c = c.buffer, v = v.buffer;
    case xb:
      return !(c.byteLength != v.byteLength || !R(new WA(c), new WA(v)));
    case yb:
    case gb:
    case Eb:
      return fb(+c, +v);
    case Db:
      return c.name == v.name && c.message == v.message;
    case Ab:
    case Fb:
      return c == v + "";
    case Cb:
      var q = pb;
    case Sb:
      var K = S & hb;
      if (q || (q = vb), c.size != v.size && !K)
        return !1;
      var G = y.get(c);
      if (G)
        return G == v;
      S |= mb, y.set(c, v);
      var Ve = db(q(c), q(v), S, F, R, y);
      return y.delete(c), Ve;
    case Tb:
      if (z1)
        return z1.call(c) == z1.call(v);
  }
  return !1;
}
var Bb = wb;
function _b(c, v) {
  for (var g = -1, S = v.length, F = c.length; ++g < S; )
    c[F + g] = v[g];
  return c;
}
var bb = _b, kb = Array.isArray, Vl = kb, Ob = bb, Nb = Vl;
function Lb(c, v, g) {
  var S = v(c);
  return Nb(c) ? S : Ob(S, g(c));
}
var Mb = Lb;
function Ub(c, v) {
  for (var g = -1, S = c == null ? 0 : c.length, F = 0, R = []; ++g < S; ) {
    var y = c[g];
    v(y, g, c) && (R[F++] = y);
  }
  return R;
}
var zb = Ub;
function Hb() {
  return [];
}
var $b = Hb, Pb = zb, jb = $b, Vb = Object.prototype, Ib = Vb.propertyIsEnumerable, XA = Object.getOwnPropertySymbols, Gb = XA ? function(c) {
  return c == null ? [] : (c = Object(c), Pb(XA(c), function(v) {
    return Ib.call(c, v);
  }));
} : jb, Qb = Gb;
function Yb(c, v) {
  for (var g = -1, S = Array(c); ++g < c; )
    S[g] = v(g);
  return S;
}
var Kb = Yb;
function Wb(c) {
  return c != null && typeof c == "object";
}
var Lp = Wb, qb = Np, Xb = Lp, Jb = "[object Arguments]";
function Zb(c) {
  return Xb(c) && qb(c) == Jb;
}
var e8 = Zb, JA = e8, t8 = Lp, RS = Object.prototype, n8 = RS.hasOwnProperty, r8 = RS.propertyIsEnumerable, u8 = JA(function() {
  return arguments;
}()) ? JA : function(c) {
  return t8(c) && n8.call(c, "callee") && !r8.call(c, "callee");
}, wS = u8, G0 = { exports: {} };
function a8() {
  return !1;
}
var i8 = a8;
G0.exports;
(function(c, v) {
  var g = Hi, S = i8, F = v && !v.nodeType && v, R = F && !0 && c && !c.nodeType && c, y = R && R.exports === F, q = y ? g.Buffer : void 0, K = q ? q.isBuffer : void 0, G = K || S;
  c.exports = G;
})(G0, G0.exports);
var BS = G0.exports, l8 = 9007199254740991, o8 = /^(?:0|[1-9]\d*)$/;
function s8(c, v) {
  var g = typeof c;
  return v = v ?? l8, !!v && (g == "number" || g != "symbol" && o8.test(c)) && c > -1 && c % 1 == 0 && c < v;
}
var _S = s8, c8 = 9007199254740991;
function f8(c) {
  return typeof c == "number" && c > -1 && c % 1 == 0 && c <= c8;
}
var q1 = f8, d8 = Np, p8 = q1, v8 = Lp, h8 = "[object Arguments]", m8 = "[object Array]", y8 = "[object Boolean]", g8 = "[object Date]", D8 = "[object Error]", C8 = "[object Function]", E8 = "[object Map]", A8 = "[object Number]", S8 = "[object Object]", F8 = "[object RegExp]", T8 = "[object Set]", x8 = "[object String]", R8 = "[object WeakMap]", w8 = "[object ArrayBuffer]", B8 = "[object DataView]", _8 = "[object Float32Array]", b8 = "[object Float64Array]", k8 = "[object Int8Array]", O8 = "[object Int16Array]", N8 = "[object Int32Array]", L8 = "[object Uint8Array]", M8 = "[object Uint8ClampedArray]", U8 = "[object Uint16Array]", z8 = "[object Uint32Array]", jt = {};
jt[_8] = jt[b8] = jt[k8] = jt[O8] = jt[N8] = jt[L8] = jt[M8] = jt[U8] = jt[z8] = !0;
jt[h8] = jt[m8] = jt[w8] = jt[y8] = jt[B8] = jt[g8] = jt[D8] = jt[C8] = jt[E8] = jt[A8] = jt[S8] = jt[F8] = jt[T8] = jt[x8] = jt[R8] = !1;
function H8(c) {
  return v8(c) && p8(c.length) && !!jt[d8(c)];
}
var $8 = H8;
function P8(c) {
  return function(v) {
    return c(v);
  };
}
var j8 = P8, Q0 = { exports: {} };
Q0.exports;
(function(c, v) {
  var g = AS, S = v && !v.nodeType && v, F = S && !0 && c && !c.nodeType && c, R = F && F.exports === S, y = R && g.process, q = function() {
    try {
      var K = F && F.require && F.require("util").types;
      return K || y && y.binding && y.binding("util");
    } catch {
    }
  }();
  c.exports = q;
})(Q0, Q0.exports);
var V8 = Q0.exports, I8 = $8, G8 = j8, ZA = V8, eS = ZA && ZA.isTypedArray, Q8 = eS ? G8(eS) : I8, bS = Q8, Y8 = Kb, K8 = wS, W8 = Vl, q8 = BS, X8 = _S, J8 = bS, Z8 = Object.prototype, e6 = Z8.hasOwnProperty;
function t6(c, v) {
  var g = W8(c), S = !g && K8(c), F = !g && !S && q8(c), R = !g && !S && !F && J8(c), y = g || S || F || R, q = y ? Y8(c.length, String) : [], K = q.length;
  for (var G in c)
    (v || e6.call(c, G)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
    (G == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    F && (G == "offset" || G == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    R && (G == "buffer" || G == "byteLength" || G == "byteOffset") || // Skip index properties.
    X8(G, K))) && q.push(G);
  return q;
}
var n6 = t6, r6 = Object.prototype;
function u6(c) {
  var v = c && c.constructor, g = typeof v == "function" && v.prototype || r6;
  return c === g;
}
var a6 = u6;
function i6(c, v) {
  return function(g) {
    return c(v(g));
  };
}
var kS = i6, l6 = kS, o6 = l6(Object.keys, Object), s6 = o6, c6 = a6, f6 = s6, d6 = Object.prototype, p6 = d6.hasOwnProperty;
function v6(c) {
  if (!c6(c))
    return f6(c);
  var v = [];
  for (var g in Object(c))
    p6.call(c, g) && g != "constructor" && v.push(g);
  return v;
}
var h6 = v6, m6 = Y1, y6 = q1;
function g6(c) {
  return c != null && y6(c.length) && !m6(c);
}
var D6 = g6, C6 = n6, E6 = h6, A6 = D6;
function S6(c) {
  return A6(c) ? C6(c) : E6(c);
}
var X1 = S6, F6 = Mb, T6 = Qb, x6 = X1;
function R6(c) {
  return F6(c, x6, T6);
}
var w6 = R6, tS = w6, B6 = 1, _6 = Object.prototype, b6 = _6.hasOwnProperty;
function k6(c, v, g, S, F, R) {
  var y = g & B6, q = tS(c), K = q.length, G = tS(v), Ve = G.length;
  if (K != Ve && !y)
    return !1;
  for (var re = K; re--; ) {
    var M = q[re];
    if (!(y ? M in v : b6.call(v, M)))
      return !1;
  }
  var W = R.get(c), ue = R.get(v);
  if (W && ue)
    return W == v && ue == c;
  var Z = !0;
  R.set(c, v), R.set(v, c);
  for (var ne = y; ++re < K; ) {
    M = q[re];
    var Ct = c[M], ct = v[M];
    if (S)
      var Ge = y ? S(ct, Ct, M, v, c, R) : S(Ct, ct, M, c, v, R);
    if (!(Ge === void 0 ? Ct === ct || F(Ct, ct, g, S, R) : Ge)) {
      Z = !1;
      break;
    }
    ne || (ne = M == "constructor");
  }
  if (Z && !ne) {
    var We = c.constructor, de = v.constructor;
    We != de && "constructor" in c && "constructor" in v && !(typeof We == "function" && We instanceof We && typeof de == "function" && de instanceof de) && (Z = !1);
  }
  return R.delete(c), R.delete(v), Z;
}
var O6 = k6, N6 = us, L6 = Hi, M6 = N6(L6, "DataView"), U6 = M6, z6 = us, H6 = Hi, $6 = z6(H6, "Promise"), P6 = $6, j6 = us, V6 = Hi, I6 = j6(V6, "Set"), G6 = I6, Q6 = us, Y6 = Hi, K6 = Q6(Y6, "WeakMap"), W6 = K6, P1 = U6, j1 = K1, V1 = P6, I1 = G6, G1 = W6, OS = Np, of = FS, nS = "[object Map]", q6 = "[object Object]", rS = "[object Promise]", uS = "[object Set]", aS = "[object WeakMap]", iS = "[object DataView]", X6 = of(P1), J6 = of(j1), Z6 = of(V1), e4 = of(I1), t4 = of(G1), rs = OS;
(P1 && rs(new P1(new ArrayBuffer(1))) != iS || j1 && rs(new j1()) != nS || V1 && rs(V1.resolve()) != rS || I1 && rs(new I1()) != uS || G1 && rs(new G1()) != aS) && (rs = function(c) {
  var v = OS(c), g = v == q6 ? c.constructor : void 0, S = g ? of(g) : "";
  if (S)
    switch (S) {
      case X6:
        return iS;
      case J6:
        return nS;
      case Z6:
        return rS;
      case e4:
        return uS;
      case t4:
        return aS;
    }
  return v;
});
var n4 = rs, H1 = TS, r4 = xS, u4 = Bb, a4 = O6, lS = n4, oS = Vl, sS = BS, i4 = bS, l4 = 1, cS = "[object Arguments]", fS = "[object Array]", V0 = "[object Object]", o4 = Object.prototype, dS = o4.hasOwnProperty;
function s4(c, v, g, S, F, R) {
  var y = oS(c), q = oS(v), K = y ? fS : lS(c), G = q ? fS : lS(v);
  K = K == cS ? V0 : K, G = G == cS ? V0 : G;
  var Ve = K == V0, re = G == V0, M = K == G;
  if (M && sS(c)) {
    if (!sS(v))
      return !1;
    y = !0, Ve = !1;
  }
  if (M && !Ve)
    return R || (R = new H1()), y || i4(c) ? r4(c, v, g, S, F, R) : u4(c, v, K, g, S, F, R);
  if (!(g & l4)) {
    var W = Ve && dS.call(c, "__wrapped__"), ue = re && dS.call(v, "__wrapped__");
    if (W || ue) {
      var Z = W ? c.value() : c, ne = ue ? v.value() : v;
      return R || (R = new H1()), F(Z, ne, g, S, R);
    }
  }
  return M ? (R || (R = new H1()), a4(c, v, g, S, F, R)) : !1;
}
var c4 = s4, f4 = c4, pS = Lp;
function NS(c, v, g, S, F) {
  return c === v ? !0 : c == null || v == null || !pS(c) && !pS(v) ? c !== c && v !== v : f4(c, v, g, S, NS, F);
}
var LS = NS, d4 = TS, p4 = LS, v4 = 1, h4 = 2;
function m4(c, v, g, S) {
  var F = g.length, R = F, y = !S;
  if (c == null)
    return !R;
  for (c = Object(c); F--; ) {
    var q = g[F];
    if (y && q[2] ? q[1] !== c[q[0]] : !(q[0] in c))
      return !1;
  }
  for (; ++F < R; ) {
    q = g[F];
    var K = q[0], G = c[K], Ve = q[1];
    if (y && q[2]) {
      if (G === void 0 && !(K in c))
        return !1;
    } else {
      var re = new d4();
      if (S)
        var M = S(G, Ve, K, c, v, re);
      if (!(M === void 0 ? p4(Ve, G, v4 | h4, S, re) : M))
        return !1;
    }
  }
  return !0;
}
var y4 = m4, g4 = Q1;
function D4(c) {
  return c === c && !g4(c);
}
var MS = D4, C4 = MS, E4 = X1;
function A4(c) {
  for (var v = E4(c), g = v.length; g--; ) {
    var S = v[g], F = c[S];
    v[g] = [S, F, C4(F)];
  }
  return v;
}
var S4 = A4;
function F4(c, v) {
  return function(g) {
    return g == null ? !1 : g[c] === v && (v !== void 0 || c in Object(g));
  };
}
var US = F4, T4 = y4, x4 = S4, R4 = US;
function w4(c) {
  var v = x4(c);
  return v.length == 1 && v[0][2] ? R4(v[0][0], v[0][1]) : function(g) {
    return g === c || T4(g, c, v);
  };
}
var B4 = w4, _4 = Np, b4 = Lp, k4 = "[object Symbol]";
function O4(c) {
  return typeof c == "symbol" || b4(c) && _4(c) == k4;
}
var J1 = O4, N4 = Vl, L4 = J1, M4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, U4 = /^\w*$/;
function z4(c, v) {
  if (N4(c))
    return !1;
  var g = typeof c;
  return g == "number" || g == "symbol" || g == "boolean" || c == null || L4(c) ? !0 : U4.test(c) || !M4.test(c) || v != null && c in Object(v);
}
var Z1 = z4, zS = W1, H4 = "Expected a function";
function eD(c, v) {
  if (typeof c != "function" || v != null && typeof v != "function")
    throw new TypeError(H4);
  var g = function() {
    var S = arguments, F = v ? v.apply(this, S) : S[0], R = g.cache;
    if (R.has(F))
      return R.get(F);
    var y = c.apply(this, S);
    return g.cache = R.set(F, y) || R, y;
  };
  return g.cache = new (eD.Cache || zS)(), g;
}
eD.Cache = zS;
var $4 = eD, P4 = $4, j4 = 500;
function V4(c) {
  var v = P4(c, function(S) {
    return g.size === j4 && g.clear(), S;
  }), g = v.cache;
  return v;
}
var I4 = V4, G4 = I4, Q4 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Y4 = /\\(\\)?/g, K4 = G4(function(c) {
  var v = [];
  return c.charCodeAt(0) === 46 && v.push(""), c.replace(Q4, function(g, S, F, R) {
    v.push(F ? R.replace(Y4, "$1") : S || g);
  }), v;
}), W4 = K4, vS = X0, q4 = Y3, X4 = Vl, J4 = J1, Z4 = 1 / 0, hS = vS ? vS.prototype : void 0, mS = hS ? hS.toString : void 0;
function HS(c) {
  if (typeof c == "string")
    return c;
  if (X4(c))
    return q4(c, HS) + "";
  if (J4(c))
    return mS ? mS.call(c) : "";
  var v = c + "";
  return v == "0" && 1 / c == -Z4 ? "-0" : v;
}
var ek = HS, tk = ek;
function nk(c) {
  return c == null ? "" : tk(c);
}
var rk = nk, uk = Vl, ak = Z1, ik = W4, lk = rk;
function ok(c, v) {
  return uk(c) ? c : ak(c, v) ? [c] : ik(lk(c));
}
var $S = ok, sk = J1, ck = 1 / 0;
function fk(c) {
  if (typeof c == "string" || sk(c))
    return c;
  var v = c + "";
  return v == "0" && 1 / c == -ck ? "-0" : v;
}
var em = fk, dk = $S, pk = em;
function vk(c, v) {
  v = dk(v, c);
  for (var g = 0, S = v.length; c != null && g < S; )
    c = c[pk(v[g++])];
  return g && g == S ? c : void 0;
}
var PS = vk, hk = PS;
function mk(c, v, g) {
  var S = c == null ? void 0 : hk(c, v);
  return S === void 0 ? g : S;
}
var yk = mk;
function gk(c, v) {
  return c != null && v in Object(c);
}
var Dk = gk, Ck = $S, Ek = wS, Ak = Vl, Sk = _S, Fk = q1, Tk = em;
function xk(c, v, g) {
  v = Ck(v, c);
  for (var S = -1, F = v.length, R = !1; ++S < F; ) {
    var y = Tk(v[S]);
    if (!(R = c != null && g(c, y)))
      break;
    c = c[y];
  }
  return R || ++S != F ? R : (F = c == null ? 0 : c.length, !!F && Fk(F) && Sk(y, F) && (Ak(c) || Ek(c)));
}
var Rk = xk, wk = Dk, Bk = Rk;
function _k(c, v) {
  return c != null && Bk(c, v, wk);
}
var bk = _k, kk = LS, Ok = yk, Nk = bk, Lk = Z1, Mk = MS, Uk = US, zk = em, Hk = 1, $k = 2;
function Pk(c, v) {
  return Lk(c) && Mk(v) ? Uk(zk(c), v) : function(g) {
    var S = Ok(g, c);
    return S === void 0 && S === v ? Nk(g, c) : kk(v, S, Hk | $k);
  };
}
var jk = Pk;
function Vk(c) {
  return c;
}
var Ik = Vk;
function Gk(c) {
  return function(v) {
    return v == null ? void 0 : v[c];
  };
}
var Qk = Gk, Yk = PS;
function Kk(c) {
  return function(v) {
    return Yk(v, c);
  };
}
var Wk = Kk, qk = Qk, Xk = Wk, Jk = Z1, Zk = em;
function eO(c) {
  return Jk(c) ? qk(Zk(c)) : Xk(c);
}
var tO = eO, nO = B4, rO = jk, uO = Ik, aO = Vl, iO = tO;
function lO(c) {
  return typeof c == "function" ? c : c == null ? uO : typeof c == "object" ? aO(c) ? rO(c[0], c[1]) : nO(c) : iO(c);
}
var oO = lO, sO = us, cO = function() {
  try {
    var c = sO(Object, "defineProperty");
    return c({}, "", {}), c;
  } catch {
  }
}(), fO = cO, yS = fO;
function dO(c, v, g) {
  v == "__proto__" && yS ? yS(c, v, {
    configurable: !0,
    enumerable: !0,
    value: g,
    writable: !0
  }) : c[v] = g;
}
var pO = dO, vO = kS, hO = vO(Object.getPrototypeOf, Object), q5 = hO;
function mO(c) {
  return function(v, g, S) {
    for (var F = -1, R = Object(v), y = S(v), q = y.length; q--; ) {
      var K = y[c ? q : ++F];
      if (g(R[K], K, R) === !1)
        break;
    }
    return v;
  };
}
var yO = mO, gO = yO, DO = gO(), CO = DO, EO = CO, AO = X1;
function SO(c, v) {
  return c && EO(c, v, AO);
}
var FO = SO, TO = pO, xO = FO, RO = oO;
function wO(c, v) {
  var g = {};
  return v = RO(v), xO(c, function(S, F, R) {
    TO(g, F, v(S, F, R));
  }), g;
}
var BO = wO;
const _O = /* @__PURE__ */ K0(BO);
var jS = {}, kp = {}, VS = { exports: {} };
(function() {
  function c(y) {
    if (y == null)
      return !1;
    switch (y.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function v(y) {
    if (y == null)
      return !1;
    switch (y.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function g(y) {
    if (y == null)
      return !1;
    switch (y.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function S(y) {
    return g(y) || y != null && y.type === "FunctionDeclaration";
  }
  function F(y) {
    switch (y.type) {
      case "IfStatement":
        return y.alternate != null ? y.alternate : y.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return y.body;
    }
    return null;
  }
  function R(y) {
    var q;
    if (y.type !== "IfStatement" || y.alternate == null)
      return !1;
    q = y.consequent;
    do {
      if (q.type === "IfStatement" && q.alternate == null)
        return !0;
      q = F(q);
    } while (q);
    return !1;
  }
  VS.exports = {
    isExpression: c,
    isStatement: g,
    isIterationStatement: v,
    isSourceElement: S,
    isProblematicIfStatement: R,
    trailingStatement: F
  };
})();
var bO = VS.exports, IS = { exports: {} };
(function() {
  var c, v, g, S, F, R;
  v = {
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  }, c = {
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };
  function y(ne) {
    return 48 <= ne && ne <= 57;
  }
  function q(ne) {
    return 48 <= ne && ne <= 57 || // 0..9
    97 <= ne && ne <= 102 || // a..f
    65 <= ne && ne <= 70;
  }
  function K(ne) {
    return ne >= 48 && ne <= 55;
  }
  g = [
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8239,
    8287,
    12288,
    65279
  ];
  function G(ne) {
    return ne === 32 || ne === 9 || ne === 11 || ne === 12 || ne === 160 || ne >= 5760 && g.indexOf(ne) >= 0;
  }
  function Ve(ne) {
    return ne === 10 || ne === 13 || ne === 8232 || ne === 8233;
  }
  function re(ne) {
    if (ne <= 65535)
      return String.fromCharCode(ne);
    var Ct = String.fromCharCode(Math.floor((ne - 65536) / 1024) + 55296), ct = String.fromCharCode((ne - 65536) % 1024 + 56320);
    return Ct + ct;
  }
  for (S = new Array(128), R = 0; R < 128; ++R)
    S[R] = R >= 97 && R <= 122 || // a..z
    R >= 65 && R <= 90 || // A..Z
    R === 36 || R === 95;
  for (F = new Array(128), R = 0; R < 128; ++R)
    F[R] = R >= 97 && R <= 122 || // a..z
    R >= 65 && R <= 90 || // A..Z
    R >= 48 && R <= 57 || // 0..9
    R === 36 || R === 95;
  function M(ne) {
    return ne < 128 ? S[ne] : v.NonAsciiIdentifierStart.test(re(ne));
  }
  function W(ne) {
    return ne < 128 ? F[ne] : v.NonAsciiIdentifierPart.test(re(ne));
  }
  function ue(ne) {
    return ne < 128 ? S[ne] : c.NonAsciiIdentifierStart.test(re(ne));
  }
  function Z(ne) {
    return ne < 128 ? F[ne] : c.NonAsciiIdentifierPart.test(re(ne));
  }
  IS.exports = {
    isDecimalDigit: y,
    isHexDigit: q,
    isOctalDigit: K,
    isWhiteSpace: G,
    isLineTerminator: Ve,
    isIdentifierStartES5: M,
    isIdentifierPartES5: W,
    isIdentifierStartES6: ue,
    isIdentifierPartES6: Z
  };
})();
var GS = IS.exports, QS = { exports: {} };
(function() {
  var c = GS;
  function v(M) {
    switch (M) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function g(M, W) {
    return !W && M === "yield" ? !1 : S(M, W);
  }
  function S(M, W) {
    if (W && v(M))
      return !0;
    switch (M.length) {
      case 2:
        return M === "if" || M === "in" || M === "do";
      case 3:
        return M === "var" || M === "for" || M === "new" || M === "try";
      case 4:
        return M === "this" || M === "else" || M === "case" || M === "void" || M === "with" || M === "enum";
      case 5:
        return M === "while" || M === "break" || M === "catch" || M === "throw" || M === "const" || M === "yield" || M === "class" || M === "super";
      case 6:
        return M === "return" || M === "typeof" || M === "delete" || M === "switch" || M === "export" || M === "import";
      case 7:
        return M === "default" || M === "finally" || M === "extends";
      case 8:
        return M === "function" || M === "continue" || M === "debugger";
      case 10:
        return M === "instanceof";
      default:
        return !1;
    }
  }
  function F(M, W) {
    return M === "null" || M === "true" || M === "false" || g(M, W);
  }
  function R(M, W) {
    return M === "null" || M === "true" || M === "false" || S(M, W);
  }
  function y(M) {
    return M === "eval" || M === "arguments";
  }
  function q(M) {
    var W, ue, Z;
    if (M.length === 0 || (Z = M.charCodeAt(0), !c.isIdentifierStartES5(Z)))
      return !1;
    for (W = 1, ue = M.length; W < ue; ++W)
      if (Z = M.charCodeAt(W), !c.isIdentifierPartES5(Z))
        return !1;
    return !0;
  }
  function K(M, W) {
    return (M - 55296) * 1024 + (W - 56320) + 65536;
  }
  function G(M) {
    var W, ue, Z, ne, Ct;
    if (M.length === 0)
      return !1;
    for (Ct = c.isIdentifierStartES6, W = 0, ue = M.length; W < ue; ++W) {
      if (Z = M.charCodeAt(W), 55296 <= Z && Z <= 56319) {
        if (++W, W >= ue || (ne = M.charCodeAt(W), !(56320 <= ne && ne <= 57343)))
          return !1;
        Z = K(Z, ne);
      }
      if (!Ct(Z))
        return !1;
      Ct = c.isIdentifierPartES6;
    }
    return !0;
  }
  function Ve(M, W) {
    return q(M) && !F(M, W);
  }
  function re(M, W) {
    return G(M) && !R(M, W);
  }
  QS.exports = {
    isKeywordES5: g,
    isKeywordES6: S,
    isReservedWordES5: F,
    isReservedWordES6: R,
    isRestrictedWord: y,
    isIdentifierNameES5: q,
    isIdentifierNameES6: G,
    isIdentifierES5: Ve,
    isIdentifierES6: re
  };
})();
var kO = QS.exports;
(function() {
  kp.ast = bO, kp.code = GS, kp.keyword = kO;
})();
var _p = {}, tf = {};
const OO = "doctrine", NO = "JSDoc parser", LO = "https://github.com/eslint/doctrine", MO = "lib/doctrine.js", UO = "3.0.0", zO = {
  node: ">=6.0.0"
}, HO = {
  lib: "./lib"
}, $O = [
  "lib"
], PO = [
  {
    name: "Nicholas C. Zakas",
    email: "nicholas+npm@nczconsulting.com",
    web: "https://www.nczonline.net"
  },
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "https://github.com/Constellation"
  }
], jO = "eslint/doctrine", VO = {
  coveralls: "^3.0.1",
  dateformat: "^1.0.11",
  eslint: "^1.10.3",
  "eslint-release": "^1.0.0",
  linefix: "^0.1.1",
  mocha: "^3.4.2",
  "npm-license": "^0.3.1",
  nyc: "^10.3.2",
  semver: "^5.0.3",
  shelljs: "^0.5.3",
  "shelljs-nodecli": "^0.1.1",
  should: "^5.0.1"
}, IO = "Apache-2.0", GO = {
  pretest: "npm run lint",
  test: "nyc mocha",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  lint: "eslint lib/",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
}, QO = {
  esutils: "^2.0.2"
}, YO = {
  name: OO,
  description: NO,
  homepage: LO,
  main: MO,
  version: UO,
  engines: zO,
  directories: HO,
  files: $O,
  maintainers: PO,
  repository: jO,
  devDependencies: VO,
  license: IO,
  scripts: GO,
  dependencies: QO
};
function KO(c, v) {
  if (!c)
    throw new Error(v || "unknown assertion error");
}
var WO = KO;
(function() {
  var c;
  c = YO.version, tf.VERSION = c;
  function v(S) {
    this.name = "DoctrineError", this.message = S;
  }
  v.prototype = function() {
    var S = function() {
    };
    return S.prototype = Error.prototype, new S();
  }(), v.prototype.constructor = v, tf.DoctrineError = v;
  function g(S) {
    throw new v(S);
  }
  tf.throwError = g, tf.assert = WO;
})();
(function() {
  var c, v, g, S, F, R, y, q, K, G, Ve, re;
  K = kp, G = tf, c = {
    NullableLiteral: "NullableLiteral",
    AllLiteral: "AllLiteral",
    NullLiteral: "NullLiteral",
    UndefinedLiteral: "UndefinedLiteral",
    VoidLiteral: "VoidLiteral",
    UnionType: "UnionType",
    ArrayType: "ArrayType",
    RecordType: "RecordType",
    FieldType: "FieldType",
    FunctionType: "FunctionType",
    ParameterType: "ParameterType",
    RestType: "RestType",
    NonNullableType: "NonNullableType",
    OptionalType: "OptionalType",
    NullableType: "NullableType",
    NameExpression: "NameExpression",
    TypeApplication: "TypeApplication",
    StringLiteralType: "StringLiteralType",
    NumericLiteralType: "NumericLiteralType",
    BooleanLiteralType: "BooleanLiteralType"
  }, v = {
    ILLEGAL: 0,
    // ILLEGAL
    DOT_LT: 1,
    // .<
    REST: 2,
    // ...
    LT: 3,
    // <
    GT: 4,
    // >
    LPAREN: 5,
    // (
    RPAREN: 6,
    // )
    LBRACE: 7,
    // {
    RBRACE: 8,
    // }
    LBRACK: 9,
    // [
    RBRACK: 10,
    // ]
    COMMA: 11,
    // ,
    COLON: 12,
    // :
    STAR: 13,
    // *
    PIPE: 14,
    // |
    QUESTION: 15,
    // ?
    BANG: 16,
    // !
    EQUAL: 17,
    // =
    NAME: 18,
    // name token
    STRING: 19,
    // string
    NUMBER: 20,
    // number
    EOF: 21
  };
  function M(_) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(_)) === -1 && !K.code.isWhiteSpace(_) && !K.code.isLineTerminator(_);
  }
  function W(_, L, me, $) {
    this._previous = _, this._index = L, this._token = me, this._value = $;
  }
  W.prototype.restore = function() {
    R = this._previous, F = this._index, y = this._token, q = this._value;
  }, W.save = function() {
    return new W(R, F, y, q);
  };
  function ue(_, L) {
    return re && (_.range = [L[0] + Ve, L[1] + Ve]), _;
  }
  function Z() {
    var _ = g.charAt(F);
    return F += 1, _;
  }
  function ne(_) {
    var L, me, $, P = 0;
    for (me = _ === "u" ? 4 : 2, L = 0; L < me; ++L)
      if (F < S && K.code.isHexDigit(g.charCodeAt(F)))
        $ = Z(), P = P * 16 + "0123456789abcdef".indexOf($.toLowerCase());
      else
        return "";
    return String.fromCharCode(P);
  }
  function Ct() {
    var _ = "", L, me, $, P, fe;
    for (L = g.charAt(F), ++F; F < S; )
      if (me = Z(), me === L) {
        L = "";
        break;
      } else if (me === "\\")
        if (me = Z(), K.code.isLineTerminator(me.charCodeAt(0)))
          me === "\r" && g.charCodeAt(F) === 10 && ++F;
        else
          switch (me) {
            case "n":
              _ += `
`;
              break;
            case "r":
              _ += "\r";
              break;
            case "t":
              _ += "	";
              break;
            case "u":
            case "x":
              fe = F, P = ne(me), P ? _ += P : (F = fe, _ += me);
              break;
            case "b":
              _ += "\b";
              break;
            case "f":
              _ += "\f";
              break;
            case "v":
              _ += "\v";
              break;
            default:
              K.code.isOctalDigit(me.charCodeAt(0)) ? ($ = "01234567".indexOf(me), F < S && K.code.isOctalDigit(g.charCodeAt(F)) && ($ = $ * 8 + "01234567".indexOf(Z()), "0123".indexOf(me) >= 0 && F < S && K.code.isOctalDigit(g.charCodeAt(F)) && ($ = $ * 8 + "01234567".indexOf(Z()))), _ += String.fromCharCode($)) : _ += me;
              break;
          }
      else {
        if (K.code.isLineTerminator(me.charCodeAt(0)))
          break;
        _ += me;
      }
    return L !== "" && G.throwError("unexpected quote"), q = _, v.STRING;
  }
  function ct() {
    var _, L;
    if (_ = "", L = g.charCodeAt(F), L !== 46) {
      if (_ = Z(), L = g.charCodeAt(F), _ === "0") {
        if (L === 120 || L === 88) {
          for (_ += Z(); F < S && (L = g.charCodeAt(F), !!K.code.isHexDigit(L)); )
            _ += Z();
          return _.length <= 2 && G.throwError("unexpected token"), F < S && (L = g.charCodeAt(F), K.code.isIdentifierStartES5(L) && G.throwError("unexpected token")), q = parseInt(_, 16), v.NUMBER;
        }
        if (K.code.isOctalDigit(L)) {
          for (_ += Z(); F < S && (L = g.charCodeAt(F), !!K.code.isOctalDigit(L)); )
            _ += Z();
          return F < S && (L = g.charCodeAt(F), (K.code.isIdentifierStartES5(L) || K.code.isDecimalDigit(L)) && G.throwError("unexpected token")), q = parseInt(_, 8), v.NUMBER;
        }
        K.code.isDecimalDigit(L) && G.throwError("unexpected token");
      }
      for (; F < S && (L = g.charCodeAt(F), !!K.code.isDecimalDigit(L)); )
        _ += Z();
    }
    if (L === 46)
      for (_ += Z(); F < S && (L = g.charCodeAt(F), !!K.code.isDecimalDigit(L)); )
        _ += Z();
    if (L === 101 || L === 69)
      if (_ += Z(), L = g.charCodeAt(F), (L === 43 || L === 45) && (_ += Z()), L = g.charCodeAt(F), K.code.isDecimalDigit(L))
        for (_ += Z(); F < S && (L = g.charCodeAt(F), !!K.code.isDecimalDigit(L)); )
          _ += Z();
      else
        G.throwError("unexpected token");
    return F < S && (L = g.charCodeAt(F), K.code.isIdentifierStartES5(L) && G.throwError("unexpected token")), q = parseFloat(_), v.NUMBER;
  }
  function Ge() {
    var _, L;
    for (q = Z(); F < S && M(g.charCodeAt(F)); ) {
      if (_ = g.charCodeAt(F), _ === 46) {
        if (F + 1 >= S)
          return v.ILLEGAL;
        if (L = g.charCodeAt(F + 1), L === 60)
          break;
      }
      q += Z();
    }
    return v.NAME;
  }
  function We() {
    var _;
    for (R = F; F < S && K.code.isWhiteSpace(g.charCodeAt(F)); )
      Z();
    if (F >= S)
      return y = v.EOF, y;
    switch (_ = g.charCodeAt(F), _) {
      case 39:
      case 34:
        return y = Ct(), y;
      case 58:
        return Z(), y = v.COLON, y;
      case 44:
        return Z(), y = v.COMMA, y;
      case 40:
        return Z(), y = v.LPAREN, y;
      case 41:
        return Z(), y = v.RPAREN, y;
      case 91:
        return Z(), y = v.LBRACK, y;
      case 93:
        return Z(), y = v.RBRACK, y;
      case 123:
        return Z(), y = v.LBRACE, y;
      case 125:
        return Z(), y = v.RBRACE, y;
      case 46:
        if (F + 1 < S) {
          if (_ = g.charCodeAt(F + 1), _ === 60)
            return Z(), Z(), y = v.DOT_LT, y;
          if (_ === 46 && F + 2 < S && g.charCodeAt(F + 2) === 46)
            return Z(), Z(), Z(), y = v.REST, y;
          if (K.code.isDecimalDigit(_))
            return y = ct(), y;
        }
        return y = v.ILLEGAL, y;
      case 60:
        return Z(), y = v.LT, y;
      case 62:
        return Z(), y = v.GT, y;
      case 42:
        return Z(), y = v.STAR, y;
      case 124:
        return Z(), y = v.PIPE, y;
      case 63:
        return Z(), y = v.QUESTION, y;
      case 33:
        return Z(), y = v.BANG, y;
      case 61:
        return Z(), y = v.EQUAL, y;
      case 45:
        return y = ct(), y;
      default:
        return K.code.isDecimalDigit(_) ? (y = ct(), y) : (G.assert(M(_)), y = Ge(), y);
    }
  }
  function de(_, L) {
    G.assert(y === _, L || "consumed token not matched"), We();
  }
  function Y(_, L) {
    y !== _ && G.throwError(L || "unexpected token"), We();
  }
  function Oe() {
    var _, L = F - 1;
    if (de(v.LPAREN, "UnionType should start with ("), _ = [], y !== v.RPAREN)
      for (; _.push(Te()), y !== v.RPAREN; )
        Y(v.PIPE);
    return de(v.RPAREN, "UnionType should end with )"), ue({
      type: c.UnionType,
      elements: _
    }, [L, R]);
  }
  function le() {
    var _, L = F - 1, me;
    for (de(v.LBRACK, "ArrayType should start with ["), _ = []; y !== v.RBRACK; ) {
      if (y === v.REST) {
        me = F - 3, de(v.REST), _.push(ue({
          type: c.RestType,
          expression: Te()
        }, [me, R]));
        break;
      } else
        _.push(Te());
      y !== v.RBRACK && Y(v.COMMA);
    }
    return Y(v.RBRACK), ue({
      type: c.ArrayType,
      elements: _
    }, [L, R]);
  }
  function _t() {
    var _ = q;
    if (y === v.NAME || y === v.STRING)
      return We(), _;
    if (y === v.NUMBER)
      return de(v.NUMBER), String(_);
    G.throwError("unexpected token");
  }
  function ht() {
    var _, L = R;
    return _ = _t(), y === v.COLON ? (de(v.COLON), ue({
      type: c.FieldType,
      key: _,
      value: Te()
    }, [L, R])) : ue({
      type: c.FieldType,
      key: _,
      value: null
    }, [L, R]);
  }
  function pe() {
    var _, L = F - 1, me;
    if (de(v.LBRACE, "RecordType should start with {"), _ = [], y === v.COMMA)
      de(v.COMMA);
    else
      for (; y !== v.RBRACE; )
        _.push(ht()), y !== v.RBRACE && Y(v.COMMA);
    return me = F, Y(v.RBRACE), ue({
      type: c.RecordType,
      fields: _
    }, [L, me]);
  }
  function Zt() {
    var _ = q, L = F - _.length;
    return Y(v.NAME), y === v.COLON && (_ === "module" || _ === "external" || _ === "event") && (de(v.COLON), _ += ":" + q, Y(v.NAME)), ue({
      type: c.NameExpression,
      name: _
    }, [L, R]);
  }
  function Xe() {
    var _ = [];
    for (_.push(ce()); y === v.COMMA; )
      de(v.COMMA), _.push(ce());
    return _;
  }
  function ut() {
    var _, L, me = F - q.length;
    return _ = Zt(), y === v.DOT_LT || y === v.LT ? (We(), L = Xe(), Y(v.GT), ue({
      type: c.TypeApplication,
      expression: _,
      applications: L
    }, [me, R])) : _;
  }
  function Tn() {
    return de(v.COLON, "ResultType should start with :"), y === v.NAME && q === "void" ? (de(v.NAME), {
      type: c.VoidLiteral
    }) : Te();
  }
  function Pe() {
    for (var _ = [], L = !1, me, $ = !1, P, fe = F - 3, Re; y !== v.RPAREN; )
      y === v.REST && (de(v.REST), $ = !0), P = R, me = Te(), me.type === c.NameExpression && y === v.COLON && (Re = R - me.name.length, de(v.COLON), me = ue({
        type: c.ParameterType,
        name: me.name,
        expression: Te()
      }, [Re, R])), y === v.EQUAL ? (de(v.EQUAL), me = ue({
        type: c.OptionalType,
        expression: me
      }, [P, R]), L = !0) : L && G.throwError("unexpected token"), $ && (me = ue({
        type: c.RestType,
        expression: me
      }, [fe, R])), _.push(me), y !== v.RPAREN && Y(v.COMMA);
    return _;
  }
  function zn() {
    var _, L, me, $, P, fe = F - q.length;
    return G.assert(y === v.NAME && q === "function", "FunctionType should start with 'function'"), de(v.NAME), Y(v.LPAREN), _ = !1, me = [], L = null, y !== v.RPAREN && (y === v.NAME && (q === "this" || q === "new") ? (_ = q === "new", de(v.NAME), Y(v.COLON), L = ut(), y === v.COMMA && (de(v.COMMA), me = Pe())) : me = Pe()), Y(v.RPAREN), $ = null, y === v.COLON && ($ = Tn()), P = ue({
      type: c.FunctionType,
      params: me,
      result: $
    }, [fe, R]), L && (P.this = L, _ && (P.new = !0)), P;
  }
  function ie() {
    var _, L;
    switch (y) {
      case v.STAR:
        return de(v.STAR), ue({
          type: c.AllLiteral
        }, [R - 1, R]);
      case v.LPAREN:
        return Oe();
      case v.LBRACK:
        return le();
      case v.LBRACE:
        return pe();
      case v.NAME:
        if (L = F - q.length, q === "null")
          return de(v.NAME), ue({
            type: c.NullLiteral
          }, [L, R]);
        if (q === "undefined")
          return de(v.NAME), ue({
            type: c.UndefinedLiteral
          }, [L, R]);
        if (q === "true" || q === "false")
          return de(v.NAME), ue({
            type: c.BooleanLiteralType,
            value: q === "true"
          }, [L, R]);
        if (_ = W.save(), q === "function")
          try {
            return zn();
          } catch {
            _.restore();
          }
        return ut();
      case v.STRING:
        return We(), ue({
          type: c.StringLiteralType,
          value: q
        }, [R - q.length - 2, R]);
      case v.NUMBER:
        return We(), ue({
          type: c.NumericLiteralType,
          value: q
        }, [R - String(q).length, R]);
      default:
        G.throwError("unexpected token");
    }
  }
  function Te() {
    var _, L;
    return y === v.QUESTION ? (L = F - 1, de(v.QUESTION), y === v.COMMA || y === v.EQUAL || y === v.RBRACE || y === v.RPAREN || y === v.PIPE || y === v.EOF || y === v.RBRACK || y === v.GT ? ue({
      type: c.NullableLiteral
    }, [L, R]) : ue({
      type: c.NullableType,
      expression: ie(),
      prefix: !0
    }, [L, R])) : y === v.BANG ? (L = F - 1, de(v.BANG), ue({
      type: c.NonNullableType,
      expression: ie(),
      prefix: !0
    }, [L, R])) : (L = R, _ = ie(), y === v.BANG ? (de(v.BANG), ue({
      type: c.NonNullableType,
      expression: _,
      prefix: !1
    }, [L, R])) : y === v.QUESTION ? (de(v.QUESTION), ue({
      type: c.NullableType,
      expression: _,
      prefix: !1
    }, [L, R])) : y === v.LBRACK ? (de(v.LBRACK), Y(v.RBRACK, "expected an array-style type declaration (" + q + "[])"), ue({
      type: c.TypeApplication,
      expression: ue({
        type: c.NameExpression,
        name: "Array"
      }, [L, R]),
      applications: [_]
    }, [L, R])) : _);
  }
  function ce() {
    var _, L;
    if (_ = Te(), y !== v.PIPE)
      return _;
    for (L = [_], de(v.PIPE); L.push(Te()), y === v.PIPE; )
      de(v.PIPE);
    return ue({
      type: c.UnionType,
      elements: L
    }, [0, F]);
  }
  function Ze() {
    var _;
    return y === v.REST ? (de(v.REST), ue({
      type: c.RestType,
      expression: ce()
    }, [0, F])) : (_ = ce(), y === v.EQUAL ? (de(v.EQUAL), ue({
      type: c.OptionalType,
      expression: _
    }, [0, F])) : _);
  }
  function ft(_, L) {
    var me;
    return g = _, S = g.length, F = 0, R = 0, re = L && L.range, Ve = L && L.startIndex || 0, We(), me = ce(), L && L.midstream ? {
      expression: me,
      index: R
    } : (y !== v.EOF && G.throwError("not reach to EOF"), me);
  }
  function mn(_, L) {
    var me;
    return g = _, S = g.length, F = 0, R = 0, re = L && L.range, Ve = L && L.startIndex || 0, We(), me = Ze(), L && L.midstream ? {
      expression: me,
      index: R
    } : (y !== v.EOF && G.throwError("not reach to EOF"), me);
  }
  function at(_, L, me) {
    var $, P, fe;
    switch (_.type) {
      case c.NullableLiteral:
        $ = "?";
        break;
      case c.AllLiteral:
        $ = "*";
        break;
      case c.NullLiteral:
        $ = "null";
        break;
      case c.UndefinedLiteral:
        $ = "undefined";
        break;
      case c.VoidLiteral:
        $ = "void";
        break;
      case c.UnionType:
        for (me ? $ = "" : $ = "(", P = 0, fe = _.elements.length; P < fe; ++P)
          $ += at(_.elements[P], L), P + 1 !== fe && ($ += L ? "|" : " | ");
        me || ($ += ")");
        break;
      case c.ArrayType:
        for ($ = "[", P = 0, fe = _.elements.length; P < fe; ++P)
          $ += at(_.elements[P], L), P + 1 !== fe && ($ += L ? "," : ", ");
        $ += "]";
        break;
      case c.RecordType:
        for ($ = "{", P = 0, fe = _.fields.length; P < fe; ++P)
          $ += at(_.fields[P], L), P + 1 !== fe && ($ += L ? "," : ", ");
        $ += "}";
        break;
      case c.FieldType:
        _.value ? $ = _.key + (L ? ":" : ": ") + at(_.value, L) : $ = _.key;
        break;
      case c.FunctionType:
        for ($ = L ? "function(" : "function (", _.this && (_.new ? $ += L ? "new:" : "new: " : $ += L ? "this:" : "this: ", $ += at(_.this, L), _.params.length !== 0 && ($ += L ? "," : ", ")), P = 0, fe = _.params.length; P < fe; ++P)
          $ += at(_.params[P], L), P + 1 !== fe && ($ += L ? "," : ", ");
        $ += ")", _.result && ($ += (L ? ":" : ": ") + at(_.result, L));
        break;
      case c.ParameterType:
        $ = _.name + (L ? ":" : ": ") + at(_.expression, L);
        break;
      case c.RestType:
        $ = "...", _.expression && ($ += at(_.expression, L));
        break;
      case c.NonNullableType:
        _.prefix ? $ = "!" + at(_.expression, L) : $ = at(_.expression, L) + "!";
        break;
      case c.OptionalType:
        $ = at(_.expression, L) + "=";
        break;
      case c.NullableType:
        _.prefix ? $ = "?" + at(_.expression, L) : $ = at(_.expression, L) + "?";
        break;
      case c.NameExpression:
        $ = _.name;
        break;
      case c.TypeApplication:
        for ($ = at(_.expression, L) + ".<", P = 0, fe = _.applications.length; P < fe; ++P)
          $ += at(_.applications[P], L), P + 1 !== fe && ($ += L ? "," : ", ");
        $ += ">";
        break;
      case c.StringLiteralType:
        $ = '"' + _.value + '"';
        break;
      case c.NumericLiteralType:
        $ = String(_.value);
        break;
      case c.BooleanLiteralType:
        $ = String(_.value);
        break;
      default:
        G.throwError("Unknown type " + _.type);
    }
    return $;
  }
  function Tt(_, L) {
    return L == null && (L = {}), at(_, L.compact, L.topLevel);
  }
  _p.parseType = ft, _p.parseParamType = mn, _p.stringify = Tt, _p.Syntax = c;
})();
(function(c) {
  (function() {
    var v, g, S, F, R;
    F = kp, v = _p, g = tf;
    function y(Y, Oe, le) {
      return Y.slice(Oe, le);
    }
    R = function() {
      var Y = Object.prototype.hasOwnProperty;
      return function(le, _t) {
        return Y.call(le, _t);
      };
    }();
    function q(Y) {
      var Oe = {}, le;
      for (le in Y)
        Y.hasOwnProperty(le) && (Oe[le] = Y[le]);
      return Oe;
    }
    function K(Y) {
      return Y >= 97 && Y <= 122 || Y >= 65 && Y <= 90 || Y >= 48 && Y <= 57;
    }
    function G(Y) {
      return Y === "param" || Y === "argument" || Y === "arg";
    }
    function Ve(Y) {
      return Y === "return" || Y === "returns";
    }
    function re(Y) {
      return Y === "property" || Y === "prop";
    }
    function M(Y) {
      return G(Y) || re(Y) || Y === "alias" || Y === "this" || Y === "mixes" || Y === "requires";
    }
    function W(Y) {
      return M(Y) || Y === "const" || Y === "constant";
    }
    function ue(Y) {
      return re(Y) || G(Y);
    }
    function Z(Y) {
      return re(Y) || G(Y);
    }
    function ne(Y) {
      return G(Y) || Ve(Y) || Y === "define" || Y === "enum" || Y === "implements" || Y === "this" || Y === "type" || Y === "typedef" || re(Y);
    }
    function Ct(Y) {
      return ne(Y) || Y === "throws" || Y === "const" || Y === "constant" || Y === "namespace" || Y === "member" || Y === "var" || Y === "module" || Y === "constructor" || Y === "class" || Y === "extends" || Y === "augments" || Y === "public" || Y === "private" || Y === "protected";
    }
    var ct = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]", Ge = "(" + ct + "*(?:\\*" + ct + `?)?)(.+|[\r
\u2028\u2029])`;
    function We(Y) {
      return Y.replace(/^\/\*\*?/, "").replace(/\*\/$/, "").replace(new RegExp(Ge, "g"), "$2").replace(/\s*$/, "");
    }
    function de(Y, Oe) {
      for (var le = Y.replace(/^\/\*\*?/, ""), _t = 0, ht = new RegExp(Ge, "g"), pe; pe = ht.exec(le); )
        if (_t += pe[1].length, pe.index + pe[0].length > Oe + _t)
          return Oe + _t + Y.length - le.length;
      return Y.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function(Y) {
      var Oe, le, _t, ht, pe, Zt, Xe, ut, Tn;
      function Pe() {
        var $ = pe.charCodeAt(le);
        return le += 1, F.code.isLineTerminator($) && !($ === 13 && pe.charCodeAt(le) === 10) && (_t += 1), String.fromCharCode($);
      }
      function zn() {
        var $ = "";
        for (Pe(); le < ht && K(pe.charCodeAt(le)); )
          $ += Pe();
        return $;
      }
      function ie() {
        var $, P, fe = le;
        for (P = !1; fe < ht; ) {
          if ($ = pe.charCodeAt(fe), F.code.isLineTerminator($) && !($ === 13 && pe.charCodeAt(fe + 1) === 10))
            P = !0;
          else if (P) {
            if ($ === 64)
              break;
            F.code.isWhiteSpace($) || (P = !1);
          }
          fe += 1;
        }
        return fe;
      }
      function Te($, P, fe) {
        for (var Re, it, qe, yt, en = !1; le < P; )
          if (Re = pe.charCodeAt(le), F.code.isWhiteSpace(Re))
            Pe();
          else if (Re === 123) {
            Pe();
            break;
          } else {
            en = !0;
            break;
          }
        if (en)
          return null;
        for (it = 1, qe = ""; le < P; )
          if (Re = pe.charCodeAt(le), F.code.isLineTerminator(Re))
            Pe();
          else {
            if (Re === 125) {
              if (it -= 1, it === 0) {
                Pe();
                break;
              }
            } else
              Re === 123 && (it += 1);
            qe === "" && (yt = le), qe += Pe();
          }
        return it !== 0 ? g.throwError("Braces are not balanced") : Z($) ? v.parseParamType(qe, { startIndex: at(yt), range: fe }) : v.parseType(qe, { startIndex: at(yt), range: fe });
      }
      function ce($) {
        var P;
        if (!F.code.isIdentifierStartES5(pe.charCodeAt(le)) && !pe[le].match(/[0-9]/))
          return null;
        for (P = Pe(); le < $ && F.code.isIdentifierPartES5(pe.charCodeAt(le)); )
          P += Pe();
        return P;
      }
      function Ze($) {
        for (; le < $ && (F.code.isWhiteSpace(pe.charCodeAt(le)) || F.code.isLineTerminator(pe.charCodeAt(le))); )
          Pe();
      }
      function ft($, P, fe) {
        var Re = "", it, qe;
        if (Ze($), le >= $)
          return null;
        if (pe.charCodeAt(le) === 91)
          if (P)
            it = !0, Re = Pe();
          else
            return null;
        if (Re += ce($), fe)
          for (pe.charCodeAt(le) === 58 && (Re === "module" || Re === "external" || Re === "event") && (Re += Pe(), Re += ce($)), pe.charCodeAt(le) === 91 && pe.charCodeAt(le + 1) === 93 && (Re += Pe(), Re += Pe()); pe.charCodeAt(le) === 46 || pe.charCodeAt(le) === 47 || pe.charCodeAt(le) === 35 || pe.charCodeAt(le) === 45 || pe.charCodeAt(le) === 126; )
            Re += Pe(), Re += ce($);
        if (it) {
          if (Ze($), pe.charCodeAt(le) === 61) {
            Re += Pe(), Ze($);
            for (var yt, en = 1; le < $; ) {
              if (yt = pe.charCodeAt(le), F.code.isWhiteSpace(yt) && (qe || (Ze($), yt = pe.charCodeAt(le))), yt === 39 && (qe ? qe === "'" && (qe = "") : qe = "'"), yt === 34 && (qe ? qe === '"' && (qe = "") : qe = '"'), yt === 91)
                en++;
              else if (yt === 93 && --en === 0)
                break;
              Re += Pe();
            }
          }
          if (Ze($), le >= $ || pe.charCodeAt(le) !== 93)
            return null;
          Re += Pe();
        }
        return Re;
      }
      function mn() {
        for (; le < ht && pe.charCodeAt(le) !== 64; )
          Pe();
        return le >= ht ? !1 : (g.assert(
          pe.charCodeAt(le) === 64
          /* '@' */
        ), !0);
      }
      function at($) {
        return pe === Zt ? $ : de(Zt, $);
      }
      function Tt($, P) {
        this._options = $, this._title = P.toLowerCase(), this._tag = {
          title: P,
          description: null
        }, this._options.lineNumbers && (this._tag.lineNumber = _t), this._first = le - P.length - 1, this._last = 0, this._extra = {};
      }
      Tt.prototype.addError = function(P) {
        var fe = Array.prototype.slice.call(arguments, 1), Re = P.replace(
          /%(\d)/g,
          function(it, qe) {
            return g.assert(qe < fe.length, "Message reference must be in range"), fe[qe];
          }
        );
        return this._tag.errors || (this._tag.errors = []), Tn && g.throwError(Re), this._tag.errors.push(Re), Xe;
      }, Tt.prototype.parseType = function() {
        if (ne(this._title))
          try {
            if (this._tag.type = Te(this._title, this._last, this._options.range), !this._tag.type && !G(this._title) && !Ve(this._title) && !this.addError("Missing or invalid tag type"))
              return !1;
          } catch ($) {
            if (this._tag.type = null, !this.addError($.message))
              return !1;
          }
        else if (Ct(this._title))
          try {
            this._tag.type = Te(this._title, this._last, this._options.range);
          } catch {
          }
        return !0;
      }, Tt.prototype._parseNamePath = function($) {
        var P;
        return P = ft(this._last, ut && Z(this._title), !0), !P && !$ && !this.addError("Missing or invalid tag name") ? !1 : (this._tag.name = P, !0);
      }, Tt.prototype.parseNamePath = function() {
        return this._parseNamePath(!1);
      }, Tt.prototype.parseNamePathOptional = function() {
        return this._parseNamePath(!0);
      }, Tt.prototype.parseName = function() {
        var $, P;
        if (W(this._title))
          if (this._tag.name = ft(this._last, ut && Z(this._title), ue(this._title)), this._tag.name)
            P = this._tag.name, P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" && ($ = P.substring(1, P.length - 1).split("="), $.length > 1 && (this._tag.default = $.slice(1).join("=")), this._tag.name = $[0], this._tag.type && this._tag.type.type !== "OptionalType" && (this._tag.type = {
              type: "OptionalType",
              expression: this._tag.type
            }));
          else {
            if (!M(this._title))
              return !0;
            if (G(this._title) && this._tag.type && this._tag.type.name)
              this._extra.name = this._tag.type, this._tag.name = this._tag.type.name, this._tag.type = null;
            else if (!this.addError("Missing or invalid tag name"))
              return !1;
          }
        return !0;
      }, Tt.prototype.parseDescription = function() {
        var P = y(pe, le, this._last).trim();
        return P && (/^-\s+/.test(P) && (P = P.substring(2)), this._tag.description = P), !0;
      }, Tt.prototype.parseCaption = function() {
        var P = y(pe, le, this._last).trim(), fe = "<caption>", Re = "</caption>", it = P.indexOf(fe), qe = P.indexOf(Re);
        return it >= 0 && qe >= 0 ? (this._tag.caption = P.substring(
          it + fe.length,
          qe
        ).trim(), this._tag.description = P.substring(qe + Re.length).trim()) : this._tag.description = P, !0;
      }, Tt.prototype.parseKind = function() {
        var P, fe;
        return fe = {
          class: !0,
          constant: !0,
          event: !0,
          external: !0,
          file: !0,
          function: !0,
          member: !0,
          mixin: !0,
          module: !0,
          namespace: !0,
          typedef: !0
        }, P = y(pe, le, this._last).trim(), this._tag.kind = P, !(!R(fe, P) && !this.addError("Invalid kind name '%0'", P));
      }, Tt.prototype.parseAccess = function() {
        var P;
        return P = y(pe, le, this._last).trim(), this._tag.access = P, !(P !== "private" && P !== "protected" && P !== "public" && !this.addError("Invalid access name '%0'", P));
      }, Tt.prototype.parseThis = function() {
        var P = y(pe, le, this._last).trim();
        if (P && P.charAt(0) === "{") {
          var fe = this.parseType();
          return fe && this._tag.type.type === "NameExpression" || this._tag.type.type === "UnionType" ? (this._tag.name = this._tag.type.name, !0) : this.addError("Invalid name for this");
        } else
          return this.parseNamePath();
      }, Tt.prototype.parseVariation = function() {
        var P, fe;
        return fe = y(pe, le, this._last).trim(), P = parseFloat(fe, 10), this._tag.variation = P, !(isNaN(P) && !this.addError("Invalid variation '%0'", fe));
      }, Tt.prototype.ensureEnd = function() {
        var $ = y(pe, le, this._last).trim();
        return !($ && !this.addError("Unknown content '%0'", $));
      }, Tt.prototype.epilogue = function() {
        var P;
        return P = this._tag.description, !(Z(this._title) && !this._tag.type && P && P.charAt(0) === "[" && (this._tag.type = this._extra.name, this._tag.name || (this._tag.name = void 0), !ut && !this.addError("Missing or invalid tag name")));
      }, Oe = {
        // http://usejsdoc.org/tags-access.html
        access: ["parseAccess"],
        // http://usejsdoc.org/tags-alias.html
        alias: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-augments.html
        augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-constructor.html
        constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-constructor.html
        class: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-extends.html
        extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-example.html
        example: ["parseCaption"],
        // http://usejsdoc.org/tags-deprecated.html
        deprecated: ["parseDescription"],
        // http://usejsdoc.org/tags-global.html
        global: ["ensureEnd"],
        // http://usejsdoc.org/tags-inner.html
        inner: ["ensureEnd"],
        // http://usejsdoc.org/tags-instance.html
        instance: ["ensureEnd"],
        // http://usejsdoc.org/tags-kind.html
        kind: ["parseKind"],
        // http://usejsdoc.org/tags-mixes.html
        mixes: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-mixin.html
        mixin: ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-member.html
        member: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-method.html
        method: ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-module.html
        module: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        func: ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        function: ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-member.html
        var: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-name.html
        name: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-namespace.html
        namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-private.html
        private: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-protected.html
        protected: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-public.html
        public: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-readonly.html
        readonly: ["ensureEnd"],
        // http://usejsdoc.org/tags-requires.html
        requires: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-since.html
        since: ["parseDescription"],
        // http://usejsdoc.org/tags-static.html
        static: ["ensureEnd"],
        // http://usejsdoc.org/tags-summary.html
        summary: ["parseDescription"],
        // http://usejsdoc.org/tags-this.html
        this: ["parseThis", "ensureEnd"],
        // http://usejsdoc.org/tags-todo.html
        todo: ["parseDescription"],
        // http://usejsdoc.org/tags-typedef.html
        typedef: ["parseType", "parseNamePathOptional"],
        // http://usejsdoc.org/tags-variation.html
        variation: ["parseVariation"],
        // http://usejsdoc.org/tags-version.html
        version: ["parseDescription"]
      }, Tt.prototype.parse = function() {
        var P, fe, Re, it;
        if (!this._title && !this.addError("Missing or invalid title"))
          return null;
        for (this._last = ie(this._title), this._options.range && (this._tag.range = [this._first, pe.slice(0, this._last).replace(/\s*$/, "").length].map(at)), R(Oe, this._title) ? Re = Oe[this._title] : Re = ["parseType", "parseName", "parseDescription", "epilogue"], P = 0, fe = Re.length; P < fe; ++P)
          if (it = Re[P], !this[it]())
            return null;
        return this._tag;
      };
      function _($) {
        var P, fe, Re;
        if (!mn())
          return null;
        for (P = zn(), fe = new Tt($, P), Re = fe.parse(); le < fe._last; )
          Pe();
        return Re;
      }
      function L($) {
        var P = "", fe, Re;
        for (Re = !0; le < ht && (fe = pe.charCodeAt(le), !(Re && fe === 64)); )
          F.code.isLineTerminator(fe) ? Re = !0 : Re && !F.code.isWhiteSpace(fe) && (Re = !1), P += Pe();
        return $ ? P : P.trim();
      }
      function me($, P) {
        var fe = [], Re, it, qe, yt, en;
        if (P === void 0 && (P = {}), typeof P.unwrap == "boolean" && P.unwrap ? pe = We($) : pe = $, Zt = $, P.tags)
          if (Array.isArray(P.tags))
            for (qe = {}, yt = 0, en = P.tags.length; yt < en; yt++)
              typeof P.tags[yt] == "string" ? qe[P.tags[yt]] = !0 : g.throwError('Invalid "tags" parameter: ' + P.tags);
          else
            g.throwError('Invalid "tags" parameter: ' + P.tags);
        for (ht = pe.length, le = 0, _t = 0, Xe = P.recoverable, ut = P.sloppy, Tn = P.strict, it = L(P.preserveWhitespace); Re = _(P), !!Re; )
          (!qe || qe.hasOwnProperty(Re.title)) && fe.push(Re);
        return {
          description: it,
          tags: fe
        };
      }
      Y.parse = me;
    })(S = {}), c.version = g.VERSION, c.parse = S.parse, c.parseType = v.parseType, c.parseParamType = v.parseParamType, c.unwrapComment = We, c.Syntax = q(v.Syntax), c.Error = g.DoctrineError, c.type = {
      Syntax: c.Syntax,
      parseType: v.parseType,
      parseParamType: v.parseParamType,
      stringify: v.stringify
    };
  })();
})(jS);
const qO = /* @__PURE__ */ K0(jS), { combineParameters: XO } = __STORYBOOK_MODULE_PREVIEW_API__;
var JO = (c) => {
  switch (c.type) {
    case "function":
      return { name: "function" };
    case "object":
      let v = {};
      return c.signature.properties.forEach((g) => {
        v[g.key] = Y0(g.value);
      }), { name: "object", value: v };
    default:
      throw new Error(`Unknown: ${c}`);
  }
}, Y0 = (c) => {
  let { name: v, raw: g } = c, S = {};
  switch (typeof g < "u" && (S.raw = g), c.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...S, name: v };
    case "Array":
      return { ...S, name: "array", value: c.elements.map(Y0) };
    case "signature":
      return { ...S, ...JO(c) };
    case "union":
    case "intersection":
      return { ...S, name: v, value: c.elements.map(Y0) };
    default:
      return { ...S, name: "other", value: v };
  }
}, ZO = (c) => c.name === "literal", e5 = (c) => c.value.replace(/['|"]/g, ""), t5 = (c) => {
  switch (c.type) {
    case "function":
      return { name: "function" };
    case "object":
      let v = {};
      return c.signature.properties.forEach((g) => {
        v[g.key] = Op(g.value);
      }), { name: "object", value: v };
    default:
      throw new Error(`Unknown: ${c}`);
  }
}, Op = (c) => {
  let { name: v, raw: g } = c, S = {};
  switch (typeof g < "u" && (S.raw = g), c.name) {
    case "literal":
      return { ...S, name: "other", value: c.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...S, name: v };
    case "Array":
      return { ...S, name: "array", value: c.elements.map(Op) };
    case "signature":
      return { ...S, ...t5(c) };
    case "union":
      return c.elements.every(ZO) ? { ...S, name: "enum", value: c.elements.map(e5) } : { ...S, name: v, value: c.elements.map(Op) };
    case "intersection":
      return { ...S, name: v, value: c.elements.map(Op) };
    default:
      return { ...S, name: "other", value: v };
  }
}, YS = /^['"]|['"]$/g, n5 = (c) => c.replace(YS, ""), r5 = (c) => YS.test(c), u5 = /^\(.*\) => /, bp = (c) => {
  let { name: v, raw: g, computed: S, value: F } = c, R = {};
  switch (typeof g < "u" && (R.raw = g), v) {
    case "enum": {
      let q = S ? F : F.map((K) => {
        let G = n5(K.value);
        return r5(K.value) || Number.isNaN(Number(G)) ? G : Number(G);
      });
      return { ...R, name: v, value: q };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...R, name: v };
    case "func":
      return { ...R, name: "function" };
    case "bool":
    case "boolean":
      return { ...R, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...R, name: "array", value: F && bp(F) };
    case "object":
      return { ...R, name: v };
    case "objectOf":
      return { ...R, name: v, value: bp(F) };
    case "shape":
    case "exact":
      let y = _O(F, (q) => bp(q));
      return { ...R, name: "object", value: y };
    case "union":
      return { ...R, name: "union", value: F.map((q) => bp(q)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((v == null ? void 0 : v.indexOf("|")) > 0)
        try {
          let G = v.split("|").map((Ve) => JSON.parse(Ve));
          return { ...R, name: "enum", value: G };
        } catch {
        }
      let q = F ? `${v}(${F})` : v, K = u5.test(v) ? "function" : "other";
      return { ...R, name: K, value: q };
    }
  }
}, tD = (c) => {
  let { type: v, tsType: g, flowType: S } = c;
  return v != null ? bp(v) : g != null ? Y0(g) : S != null ? Op(S) : null;
}, a5 = ((c) => (c.JAVASCRIPT = "JavaScript", c.FLOW = "Flow", c.TYPESCRIPT = "TypeScript", c.UNKNOWN = "Unknown", c))(a5 || {}), i5 = ["null", "undefined"];
function nD(c) {
  return i5.some((v) => v === c);
}
var l5 = (c) => {
  if (!c)
    return "";
  if (typeof c == "string")
    return c;
  throw new Error(`Description: expected string, got: ${JSON.stringify(c)}`);
};
function KS(c) {
  return !!c.__docgenInfo;
}
function o5(c) {
  return c != null && Object.keys(c).length > 0;
}
function s5(c, v) {
  return KS(c) ? c.__docgenInfo[v] : null;
}
function c5(c) {
  return KS(c) && l5(c.__docgenInfo.description);
}
function f5(c) {
  return c != null && c.includes("@");
}
function d5(c, v) {
  let g;
  try {
    g = qO.parse(c, { tags: v, sloppy: !0 });
  } catch (S) {
    throw console.error(S), new Error("Cannot parse JSDoc tags.");
  }
  return g;
}
var p5 = { tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"] }, v5 = (c, v = p5) => {
  if (!f5(c))
    return { includesJsDoc: !1, ignore: !1 };
  let g = d5(c, v.tags), S = h5(g);
  return S.ignore ? { includesJsDoc: !0, ignore: !0 } : { includesJsDoc: !0, ignore: !1, description: g.description, extractedTags: S };
};
function h5(c) {
  let v = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let g = 0; g < c.tags.length; g += 1) {
    let S = c.tags[g];
    if (S.title === "ignore") {
      v.ignore = !0;
      break;
    } else
      switch (S.title) {
        case "param":
        case "arg":
        case "argument": {
          let F = m5(S);
          F != null && (v.params == null && (v.params = []), v.params.push(F));
          break;
        }
        case "deprecated": {
          let F = y5(S);
          F != null && (v.deprecated = F);
          break;
        }
        case "returns": {
          let F = g5(S);
          F != null && (v.returns = F);
          break;
        }
      }
  }
  return v;
}
function m5(c) {
  let v = c.name;
  return v != null && v !== "null-null" ? { name: c.name, type: c.type, description: c.description, getPrettyName: () => v.includes("null") ? v.replace("-null", "").replace(".null", "") : c.name, getTypeName: () => c.type != null ? nf(c.type) : null } : null;
}
function y5(c) {
  return c.title != null ? c.description : null;
}
function g5(c) {
  return c.type != null ? { type: c.type, description: c.description, getTypeName: () => nf(c.type) } : null;
}
function nf(c) {
  return c.type === "NameExpression" ? c.name : c.type === "RecordType" ? `({${c.fields.map((v) => {
    if (v.value != null) {
      let g = nf(v.value);
      return `${v.key}: ${g}`;
    }
    return v.key;
  }).join(", ")}})` : c.type === "UnionType" ? `(${c.elements.map(nf).join("|")})` : c.type === "ArrayType" ? "[]" : c.type === "TypeApplication" && c.expression != null && c.expression.name === "Array" ? `${nf(c.applications[0])}[]` : c.type === "NullableType" || c.type === "NonNullableType" || c.type === "OptionalType" ? nf(c.expression) : c.type === "AllLiteral" ? "any" : null;
}
function WS(c) {
  return c.length > 90;
}
function D5(c) {
  return c.length > 50;
}
function Un(c, v) {
  return c === v ? { summary: c } : { summary: c, detail: v };
}
function qS({ name: c, value: v, elements: g, raw: S }) {
  return v ?? (g != null ? g.map(qS).join(" | ") : S ?? c);
}
function C5({ name: c, raw: v, elements: g }) {
  return g != null ? Un(g.map(qS).join(" | ")) : v != null ? Un(v.replace(/^\|\s*/, "")) : Un(c);
}
function E5({ type: c, raw: v }) {
  return v != null ? Un(v) : Un(c);
}
function A5({ type: c, raw: v }) {
  return v != null ? WS(v) ? Un(c, v) : Un(v) : Un(c);
}
function S5(c) {
  let { type: v } = c;
  return v === "object" ? A5(c) : E5(c);
}
function F5({ name: c, raw: v }) {
  return v != null ? WS(v) ? Un(c, v) : Un(v) : Un(c);
}
function T5(c) {
  if (c == null)
    return null;
  switch (c.name) {
    case "union":
      return C5(c);
    case "signature":
      return S5(c);
    default:
      return F5(c);
  }
}
function x5(c, v) {
  if (c != null) {
    let { value: g } = c;
    if (!nD(g))
      return D5(g) ? Un(v.name, g) : Un(g);
  }
  return null;
}
var R5 = (c, v) => {
  let { flowType: g, description: S, required: F, defaultValue: R } = v;
  return { name: c, type: T5(g), required: F, description: S, defaultValue: x5(R, g) };
};
function w5({ tsType: c, required: v }) {
  return c == null ? null : Un(v ? c.name : c.name.replace(" | undefined", ""));
}
function B5({ defaultValue: c }) {
  if (c != null) {
    let { value: v } = c;
    if (!nD(v))
      return Un(v);
  }
  return null;
}
var _5 = (c, v) => {
  let { description: g, required: S } = v;
  return { name: c, type: w5(v), required: S, description: g, defaultValue: B5(v) };
};
function b5(c) {
  return c != null ? Un(c.name) : null;
}
function k5(c) {
  let { computed: v, func: g } = c;
  return typeof v > "u" && typeof g > "u";
}
function O5(c) {
  return c ? c.name === "string" ? !0 : c.name === "enum" ? Array.isArray(c.value) && c.value.every(({ value: v }) => typeof v == "string" && v[0] === '"' && v[v.length - 1] === '"') : !1 : !1;
}
function N5(c, v) {
  if (c != null) {
    let { value: g } = c;
    if (!nD(g))
      return k5(c) && O5(v) ? Un(JSON.stringify(g)) : Un(g);
  }
  return null;
}
function XS(c, v, g) {
  let { description: S, required: F, defaultValue: R } = g;
  return { name: c, type: b5(v), required: F, description: S, defaultValue: N5(R, v) };
}
function tm(c, v) {
  var g;
  if (v.includesJsDoc) {
    let { description: S, extractedTags: F } = v;
    S != null && (c.description = v.description);
    let R = { ...F, params: (g = F == null ? void 0 : F.params) == null ? void 0 : g.map((y) => ({ name: y.getPrettyName(), description: y.description })) };
    Object.values(R).filter(Boolean).length > 0 && (c.jsDocTags = R);
  }
  return c;
}
var L5 = (c, v, g) => {
  let S = XS(c, v.type, v);
  return S.sbType = tD(v), tm(S, g);
}, M5 = (c, v, g) => {
  let S = _5(c, v);
  return S.sbType = tD(v), tm(S, g);
}, U5 = (c, v, g) => {
  let S = R5(c, v);
  return S.sbType = tD(v), tm(S, g);
}, z5 = (c, v, g) => {
  let S = XS(c, { name: "unknown" }, v);
  return tm(S, g);
}, JS = (c) => {
  switch (c) {
    case "JavaScript":
      return L5;
    case "TypeScript":
      return M5;
    case "Flow":
      return U5;
    default:
      return z5;
  }
}, ZS = (c) => c.type != null ? "JavaScript" : c.flowType != null ? "Flow" : c.tsType != null ? "TypeScript" : "Unknown", H5 = (c) => {
  let v = ZS(c[0]), g = JS(v);
  return c.map((S) => {
    var R;
    let F = S;
    return (R = S.type) != null && R.elements && (F = { ...S, type: { ...S.type, value: S.type.elements } }), eF(F.name, F, v, g);
  });
}, $5 = (c) => {
  let v = Object.keys(c), g = ZS(c[v[0]]), S = JS(g);
  return v.map((F) => {
    let R = c[F];
    return R != null ? eF(F, R, g, S) : null;
  }).filter(Boolean);
}, X5 = (c, v) => {
  let g = s5(c, v);
  return o5(g) ? Array.isArray(g) ? H5(g) : $5(g) : [];
};
function eF(c, v, g, S) {
  let F = v5(v.description);
  return F.includesJsDoc && F.ignore ? null : { propDef: S(c, v, F), jsDocTags: F.extractedTags, docgenInfo: v, typeSystem: g };
}
function J5(c) {
  return c != null && c5(c);
}
var Z5 = (c) => {
  let { component: v, argTypes: g, parameters: { docs: S = {} } } = c, { extractArgTypes: F } = S, R = F && v ? F(v) : {};
  return R ? XO(R, g) : g;
}, P5 = "storybook/docs", eN = `${P5}/snippet-rendered`, j5 = ((c) => (c.AUTO = "auto", c.CODE = "code", c.DYNAMIC = "dynamic", c))(j5 || {});
export {
  $b as A,
  a6 as B,
  n6 as C,
  D6 as D,
  Mb as E,
  Y3 as F,
  oO as G,
  G6 as H,
  cb as I,
  Y_ as J,
  X_ as K,
  X1 as L,
  ib as M,
  X0 as N,
  n4 as O,
  V8 as P,
  j8 as Q,
  K5 as R,
  eN as S,
  a5 as T,
  TS as U,
  BS as V,
  w6 as W,
  l5 as X,
  Hi as _,
  J1 as a,
  Np as b,
  q5 as c,
  Lp as d,
  Vl as e,
  Z5 as f,
  J5 as g,
  Un as h,
  Q1 as i,
  s5 as j,
  j5 as k,
  W5 as l,
  D5 as m,
  KS as n,
  X5 as o,
  WS as p,
  pO as q,
  G3 as r,
  ES as s,
  $S as t,
  kp as u,
  _S as v,
  em as w,
  PS as x,
  bb as y,
  Qb as z
};
