import { d as sn } from "./storybook-2d1b80a2.es.js";
import { g as Z0, c as Op } from "./storybook-92157f1b.es.js";
import WA from "react";
import { s as KA, f as RR, a as BR, c as XA, g as _R, b as JA, i as OR, r as ZA, d as NR, p as kR, e as MR } from "./storybook-11c3872f.es.js";
var nD = { exports: {} }, pu = {}, V0 = { exports: {} }, P1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uA;
function LR() {
  return uA || (uA = 1, function(c) {
    function p(Ee, H) {
      var P = Ee.length;
      Ee.push(H);
      e:
        for (; 0 < P; ) {
          var ge = P - 1 >>> 1, B = Ee[ge];
          if (0 < R(B, H))
            Ee[ge] = H, Ee[P] = B, P = ge;
          else
            break e;
        }
    }
    function m(Ee) {
      return Ee.length === 0 ? null : Ee[0];
    }
    function b(Ee) {
      if (Ee.length === 0)
        return null;
      var H = Ee[0], P = Ee.pop();
      if (P !== H) {
        Ee[0] = P;
        e:
          for (var ge = 0, B = Ee.length, j = B >>> 1; ge < j; ) {
            var Q = 2 * (ge + 1) - 1, Ae = Ee[Q], x = Q + 1, S = Ee[x];
            if (0 > R(Ae, P))
              x < B && 0 > R(S, Ae) ? (Ee[ge] = S, Ee[x] = P, ge = x) : (Ee[ge] = Ae, Ee[Q] = P, ge = Q);
            else if (x < B && 0 > R(S, P))
              Ee[ge] = S, Ee[x] = P, ge = x;
            else
              break e;
          }
      }
      return H;
    }
    function R(Ee, H) {
      var P = Ee.sortIndex - H.sortIndex;
      return P !== 0 ? P : Ee.id - H.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      c.unstable_now = function() {
        return _.now();
      };
    } else {
      var y = Date, le = y.now();
      c.unstable_now = function() {
        return y.now() - le;
      };
    }
    var te = [], ee = [], Ye = 1, ve = null, z = 3, re = !1, ce = !1, se = !1, pe = typeof setTimeout == "function" ? setTimeout : null, Qe = typeof clearTimeout == "function" ? clearTimeout : null, Ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function et(Ee) {
      for (var H = m(ee); H !== null; ) {
        if (H.callback === null)
          b(ee);
        else if (H.startTime <= Ee)
          b(ee), H.sortIndex = H.expirationTime, p(te, H);
        else
          break;
        H = m(ee);
      }
    }
    function Je(Ee) {
      if (se = !1, et(Ee), !ce)
        if (m(te) !== null)
          ce = !0, Ue($);
        else {
          var H = m(ee);
          H !== null && $t(Je, H.startTime - Ee);
        }
    }
    function $(Ee, H) {
      ce = !1, se && (se = !1, Qe(Z), Z = -1), re = !0;
      var P = z;
      try {
        for (et(H), ve = m(te); ve !== null && (!(ve.expirationTime > H) || Ee && !De()); ) {
          var ge = ve.callback;
          if (typeof ge == "function") {
            ve.callback = null, z = ve.priorityLevel;
            var B = ge(ve.expirationTime <= H);
            H = c.unstable_now(), typeof B == "function" ? ve.callback = B : ve === m(te) && b(te), et(H);
          } else
            b(te);
          ve = m(te);
        }
        if (ve !== null)
          var j = !0;
        else {
          var Q = m(ee);
          Q !== null && $t(Je, Q.startTime - H), j = !1;
        }
        return j;
      } finally {
        ve = null, z = P, re = !1;
      }
    }
    var O = !1, ne = null, Z = -1, Pe = 5, we = -1;
    function De() {
      return !(c.unstable_now() - we < Pe);
    }
    function ke() {
      if (ne !== null) {
        var Ee = c.unstable_now();
        we = Ee;
        var H = !0;
        try {
          H = ne(!0, Ee);
        } finally {
          H ? Ke() : (O = !1, ne = null);
        }
      } else
        O = !1;
    }
    var Ke;
    if (typeof Ie == "function")
      Ke = function() {
        Ie(ke);
      };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), xt = ut.port2;
      ut.port1.onmessage = ke, Ke = function() {
        xt.postMessage(null);
      };
    } else
      Ke = function() {
        pe(ke, 0);
      };
    function Ue(Ee) {
      ne = Ee, O || (O = !0, Ke());
    }
    function $t(Ee, H) {
      Z = pe(function() {
        Ee(c.unstable_now());
      }, H);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(Ee) {
      Ee.callback = null;
    }, c.unstable_continueExecution = function() {
      ce || re || (ce = !0, Ue($));
    }, c.unstable_forceFrameRate = function(Ee) {
      0 > Ee || 125 < Ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pe = 0 < Ee ? Math.floor(1e3 / Ee) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, c.unstable_getFirstCallbackNode = function() {
      return m(te);
    }, c.unstable_next = function(Ee) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = z;
      }
      var P = z;
      z = H;
      try {
        return Ee();
      } finally {
        z = P;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(Ee, H) {
      switch (Ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Ee = 3;
      }
      var P = z;
      z = Ee;
      try {
        return H();
      } finally {
        z = P;
      }
    }, c.unstable_scheduleCallback = function(Ee, H, P) {
      var ge = c.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ge + P : ge) : P = ge, Ee) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = P + B, Ee = { id: Ye++, callback: H, priorityLevel: Ee, startTime: P, expirationTime: B, sortIndex: -1 }, P > ge ? (Ee.sortIndex = P, p(ee, Ee), m(te) === null && Ee === m(ee) && (se ? (Qe(Z), Z = -1) : se = !0, $t(Je, P - ge))) : (Ee.sortIndex = B, p(te, Ee), ce || re || (ce = !0, Ue($))), Ee;
    }, c.unstable_shouldYield = De, c.unstable_wrapCallback = function(Ee) {
      var H = z;
      return function() {
        var P = z;
        z = H;
        try {
          return Ee.apply(this, arguments);
        } finally {
          z = P;
        }
      };
    };
  }(P1)), P1;
}
var $1 = {}, aA;
function UR() {
  return aA || (aA = 1, function(c) {
    sn.process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, m = !1, b = 5;
      function R(he, be) {
        var nt = he.length;
        he.push(be), le(he, be, nt);
      }
      function _(he) {
        return he.length === 0 ? null : he[0];
      }
      function y(he) {
        if (he.length === 0)
          return null;
        var be = he[0], nt = he.pop();
        return nt !== be && (he[0] = nt, te(he, nt, 0)), be;
      }
      function le(he, be, nt) {
        for (var gt = nt; gt > 0; ) {
          var Ht = gt - 1 >>> 1, nn = he[Ht];
          if (ee(nn, be) > 0)
            he[Ht] = be, he[gt] = nn, gt = Ht;
          else
            return;
        }
      }
      function te(he, be, nt) {
        for (var gt = nt, Ht = he.length, nn = Ht >>> 1; gt < nn; ) {
          var Yt = (gt + 1) * 2 - 1, fn = he[Yt], Ut = Yt + 1, wu = he[Ut];
          if (ee(fn, be) < 0)
            Ut < Ht && ee(wu, fn) < 0 ? (he[gt] = wu, he[Ut] = be, gt = Ut) : (he[gt] = fn, he[Yt] = be, gt = Yt);
          else if (Ut < Ht && ee(wu, be) < 0)
            he[gt] = wu, he[Ut] = be, gt = Ut;
          else
            return;
        }
      }
      function ee(he, be) {
        var nt = he.sortIndex - be.sortIndex;
        return nt !== 0 ? nt : he.id - be.id;
      }
      var Ye = 1, ve = 2, z = 3, re = 4, ce = 5;
      function se(he, be) {
      }
      var pe = typeof performance == "object" && typeof performance.now == "function";
      if (pe) {
        var Qe = performance;
        c.unstable_now = function() {
          return Qe.now();
        };
      } else {
        var Ie = Date, et = Ie.now();
        c.unstable_now = function() {
          return Ie.now() - et;
        };
      }
      var Je = 1073741823, $ = -1, O = 250, ne = 5e3, Z = 1e4, Pe = Je, we = [], De = [], ke = 1, Ke = null, ut = z, xt = !1, Ue = !1, $t = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ge(he) {
        for (var be = _(De); be !== null; ) {
          if (be.callback === null)
            y(De);
          else if (be.startTime <= he)
            y(De), be.sortIndex = be.expirationTime, R(we, be);
          else
            return;
          be = _(De);
        }
      }
      function B(he) {
        if ($t = !1, ge(he), !Ue)
          if (_(we) !== null)
            Ue = !0, Te(j);
          else {
            var be = _(De);
            be !== null && Oe(B, be.startTime - he);
          }
      }
      function j(he, be) {
        Ue = !1, $t && ($t = !1, $e()), xt = !0;
        var nt = ut;
        try {
          var gt;
          if (!m)
            return Q(he, be);
        } finally {
          Ke = null, ut = nt, xt = !1;
        }
      }
      function Q(he, be) {
        var nt = be;
        for (ge(nt), Ke = _(we); Ke !== null && !p && !(Ke.expirationTime > nt && (!he || de())); ) {
          var gt = Ke.callback;
          if (typeof gt == "function") {
            Ke.callback = null, ut = Ke.priorityLevel;
            var Ht = Ke.expirationTime <= nt, nn = gt(Ht);
            nt = c.unstable_now(), typeof nn == "function" ? Ke.callback = nn : Ke === _(we) && y(we), ge(nt);
          } else
            y(we);
          Ke = _(we);
        }
        if (Ke !== null)
          return !0;
        var Yt = _(De);
        return Yt !== null && Oe(B, Yt.startTime - nt), !1;
      }
      function Ae(he, be) {
        switch (he) {
          case Ye:
          case ve:
          case z:
          case re:
          case ce:
            break;
          default:
            he = z;
        }
        var nt = ut;
        ut = he;
        try {
          return be();
        } finally {
          ut = nt;
        }
      }
      function x(he) {
        var be;
        switch (ut) {
          case Ye:
          case ve:
          case z:
            be = z;
            break;
          default:
            be = ut;
            break;
        }
        var nt = ut;
        ut = be;
        try {
          return he();
        } finally {
          ut = nt;
        }
      }
      function S(he) {
        var be = ut;
        return function() {
          var nt = ut;
          ut = be;
          try {
            return he.apply(this, arguments);
          } finally {
            ut = nt;
          }
        };
      }
      function F(he, be, nt) {
        var gt = c.unstable_now(), Ht;
        if (typeof nt == "object" && nt !== null) {
          var nn = nt.delay;
          typeof nn == "number" && nn > 0 ? Ht = gt + nn : Ht = gt;
        } else
          Ht = gt;
        var Yt;
        switch (he) {
          case Ye:
            Yt = $;
            break;
          case ve:
            Yt = O;
            break;
          case ce:
            Yt = Pe;
            break;
          case re:
            Yt = Z;
            break;
          case z:
          default:
            Yt = ne;
            break;
        }
        var fn = Ht + Yt, Ut = {
          id: ke++,
          callback: be,
          priorityLevel: he,
          startTime: Ht,
          expirationTime: fn,
          sortIndex: -1
        };
        return Ht > gt ? (Ut.sortIndex = Ht, R(De, Ut), _(we) === null && Ut === _(De) && ($t ? $e() : $t = !0, Oe(B, Ht - gt))) : (Ut.sortIndex = fn, R(we, Ut), !Ue && !xt && (Ue = !0, Te(j))), Ut;
      }
      function C() {
      }
      function T() {
        !Ue && !xt && (Ue = !0, Te(j));
      }
      function G() {
        return _(we);
      }
      function ue(he) {
        he.callback = null;
      }
      function xe() {
        return ut;
      }
      var _e = !1, at = null, Rt = -1, tn = b, Gt = -1;
      function de() {
        var he = c.unstable_now() - Gt;
        return !(he < tn);
      }
      function Er() {
      }
      function cn(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? tn = Math.floor(1e3 / he) : tn = b;
      }
      var or = function() {
        if (at !== null) {
          var he = c.unstable_now();
          Gt = he;
          var be = !0, nt = !0;
          try {
            nt = at(be, he);
          } finally {
            nt ? yn() : (_e = !1, at = null);
          }
        } else
          _e = !1;
      }, yn;
      if (typeof P == "function")
        yn = function() {
          P(or);
        };
      else if (typeof MessageChannel < "u") {
        var U = new MessageChannel(), W = U.port2;
        U.port1.onmessage = or, yn = function() {
          W.postMessage(null);
        };
      } else
        yn = function() {
          Ee(or, 0);
        };
      function Te(he) {
        at = he, _e || (_e = !0, yn());
      }
      function Oe(he, be) {
        Rt = Ee(function() {
          he(c.unstable_now());
        }, be);
      }
      function $e() {
        H(Rt), Rt = -1;
      }
      var yt = Er, ct = null;
      c.unstable_IdlePriority = ce, c.unstable_ImmediatePriority = Ye, c.unstable_LowPriority = re, c.unstable_NormalPriority = z, c.unstable_Profiling = ct, c.unstable_UserBlockingPriority = ve, c.unstable_cancelCallback = ue, c.unstable_continueExecution = T, c.unstable_forceFrameRate = cn, c.unstable_getCurrentPriorityLevel = xe, c.unstable_getFirstCallbackNode = G, c.unstable_next = x, c.unstable_pauseExecution = C, c.unstable_requestPaint = yt, c.unstable_runWithPriority = Ae, c.unstable_scheduleCallback = F, c.unstable_shouldYield = de, c.unstable_wrapCallback = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }($1)), $1;
}
var iA;
function eF() {
  return iA || (iA = 1, sn.process.env.NODE_ENV === "production" ? V0.exports = LR() : V0.exports = UR()), V0.exports;
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
var lA;
function zR() {
  if (lA)
    return pu;
  lA = 1;
  var c = WA, p = eF();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, i = 1; i < arguments.length; i++)
      r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var b = /* @__PURE__ */ new Set(), R = {};
  function _(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (R[n] = r, n = 0; n < r.length; n++)
      b.add(r[n]);
  }
  var le = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), te = Object.prototype.hasOwnProperty, ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ye = {}, ve = {};
  function z(n) {
    return te.call(ve, n) ? !0 : te.call(Ye, n) ? !1 : ee.test(n) ? ve[n] = !0 : (Ye[n] = !0, !1);
  }
  function re(n, r, i, o) {
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
  function ce(n, r, i, o) {
    if (r === null || typeof r > "u" || re(n, r, i, o))
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
  function se(n, r, i, o, f, v, D) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = f, this.mustUseProperty = i, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = D;
  }
  var pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pe[n] = new se(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pe[r] = new se(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pe[n] = new se(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pe[n] = new se(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pe[n] = new se(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pe[n] = new se(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pe[n] = new se(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pe[n] = new se(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pe[n] = new se(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Qe = /[\-:]([a-z])/g;
  function Ie(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Qe,
      Ie
    );
    pe[r] = new se(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Qe, Ie);
    pe[r] = new se(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Qe, Ie);
    pe[r] = new se(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pe[n] = new se(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pe.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pe[n] = new se(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function et(n, r, i, o) {
    var f = pe.hasOwnProperty(r) ? pe[r] : null;
    (f !== null ? f.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ce(r, i, f, o) && (i = null), o || f === null ? z(r) && (i === null ? n.removeAttribute(r) : n.setAttribute(r, "" + i)) : f.mustUseProperty ? n[f.propertyName] = i === null ? f.type === 3 ? !1 : "" : i : (r = f.attributeName, o = f.attributeNamespace, i === null ? n.removeAttribute(r) : (f = f.type, i = f === 3 || f === 4 && i === !0 ? "" : "" + i, o ? n.setAttributeNS(o, r, i) : n.setAttribute(r, i))));
  }
  var Je = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = Symbol.for("react.element"), O = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), De = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), Ke = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), $t = Symbol.for("react.offscreen"), Ee = Symbol.iterator;
  function H(n) {
    return n === null || typeof n != "object" ? null : (n = Ee && n[Ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var P = Object.assign, ge;
  function B(n) {
    if (ge === void 0)
      try {
        throw Error();
      } catch (i) {
        var r = i.stack.trim().match(/\n( *(at )?)/);
        ge = r && r[1] || "";
      }
    return `
` + ge + n;
  }
  var j = !1;
  function Q(n, r) {
    if (!n || j)
      return "";
    j = !0;
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
          } catch (J) {
            var o = J;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (J) {
            o = J;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (J) {
          o = J;
        }
        n();
      }
    } catch (J) {
      if (J && o && typeof J.stack == "string") {
        for (var f = J.stack.split(`
`), v = o.stack.split(`
`), D = f.length - 1, w = v.length - 1; 1 <= D && 0 <= w && f[D] !== v[w]; )
          w--;
        for (; 1 <= D && 0 <= w; D--, w--)
          if (f[D] !== v[w]) {
            if (D !== 1 || w !== 1)
              do
                if (D--, w--, 0 > w || f[D] !== v[w]) {
                  var N = `
` + f[D].replace(" at new ", " at ");
                  return n.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", n.displayName)), N;
                }
              while (1 <= D && 0 <= w);
            break;
          }
      }
    } finally {
      j = !1, Error.prepareStackTrace = i;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function Ae(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Q(n.type, !1), n;
      case 11:
        return n = Q(n.type.render, !1), n;
      case 1:
        return n = Q(n.type, !0), n;
      default:
        return "";
    }
  }
  function x(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ne:
        return "Fragment";
      case O:
        return "Portal";
      case Pe:
        return "Profiler";
      case Z:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case De:
          return (n.displayName || "Context") + ".Consumer";
        case we:
          return (n._context.displayName || "Context") + ".Provider";
        case ke:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case xt:
          return r = n.displayName || null, r !== null ? r : x(n.type) || "Memo";
        case Ue:
          r = n._payload, n = n._init;
          try {
            return x(n(r));
          } catch {
          }
      }
    return null;
  }
  function S(n) {
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
        return x(r);
      case 8:
        return r === Z ? "StrictMode" : "Mode";
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
  function F(n) {
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
  function C(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function T(n) {
    var r = C(n) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var f = i.get, v = i.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(D) {
        o = "" + D, v.call(this, D);
      } }), Object.defineProperty(n, r, { enumerable: i.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(D) {
        o = "" + D;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function G(n) {
    n._valueTracker || (n._valueTracker = T(n));
  }
  function ue(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var i = r.getValue(), o = "";
    return n && (o = C(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== i ? (r.setValue(n), !0) : !1;
  }
  function xe(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function _e(n, r) {
    var i = r.checked;
    return P({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? n._wrapperState.initialChecked });
  }
  function at(n, r) {
    var i = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    i = F(r.value != null ? r.value : i), n._wrapperState = { initialChecked: o, initialValue: i, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rt(n, r) {
    r = r.checked, r != null && et(n, "checked", r, !1);
  }
  function tn(n, r) {
    Rt(n, r);
    var i = F(r.value), o = r.type;
    if (i != null)
      o === "number" ? (i === 0 && n.value === "" || n.value != i) && (n.value = "" + i) : n.value !== "" + i && (n.value = "" + i);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? de(n, r.type, i) : r.hasOwnProperty("defaultValue") && de(n, r.type, F(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Gt(n, r, i) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, i || r === n.value || (n.value = r), n.defaultValue = r;
    }
    i = n.name, i !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, i !== "" && (n.name = i);
  }
  function de(n, r, i) {
    (r !== "number" || xe(n.ownerDocument) !== n) && (i == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + i && (n.defaultValue = "" + i));
  }
  var Er = Array.isArray;
  function cn(n, r, i, o) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < i.length; f++)
        r["$" + i[f]] = !0;
      for (i = 0; i < n.length; i++)
        f = r.hasOwnProperty("$" + n[i].value), n[i].selected !== f && (n[i].selected = f), f && o && (n[i].defaultSelected = !0);
    } else {
      for (i = "" + F(i), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === i) {
          n[f].selected = !0, o && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function or(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return P({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yn(n, r) {
    var i = r.value;
    if (i == null) {
      if (i = r.children, r = r.defaultValue, i != null) {
        if (r != null)
          throw Error(m(92));
        if (Er(i)) {
          if (1 < i.length)
            throw Error(m(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), i = r;
    }
    n._wrapperState = { initialValue: F(i) };
  }
  function U(n, r) {
    var i = F(r.value), o = F(r.defaultValue);
    i != null && (i = "" + i, i !== n.value && (n.value = i), r.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i)), o != null && (n.defaultValue = "" + o);
  }
  function W(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Te(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Oe(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Te(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $e, yt = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, i, o, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, i, o, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for ($e = $e || document.createElement("div"), $e.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $e.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ct(n, r) {
    if (r) {
      var i = n.firstChild;
      if (i && i === n.lastChild && i.nodeType === 3) {
        i.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var he = {
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
  }, be = ["Webkit", "ms", "Moz", "O"];
  Object.keys(he).forEach(function(n) {
    be.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), he[r] = he[n];
    });
  });
  function nt(n, r, i) {
    return r == null || typeof r == "boolean" || r === "" ? "" : i || typeof r != "number" || r === 0 || he.hasOwnProperty(n) && he[n] ? ("" + r).trim() : r + "px";
  }
  function gt(n, r) {
    n = n.style;
    for (var i in r)
      if (r.hasOwnProperty(i)) {
        var o = i.indexOf("--") === 0, f = nt(i, r[i], o);
        i === "float" && (i = "cssFloat"), o ? n.setProperty(i, f) : n[i] = f;
      }
  }
  var Ht = P({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function nn(n, r) {
    if (r) {
      if (Ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(m(62));
    }
  }
  function Yt(n, r) {
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
  var fn = null;
  function Ut(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var wu = null, Cn = null, dn = null;
  function jp(n) {
    if (n = yo(n)) {
      if (typeof wu != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = rt(r), wu(n.stateNode, n.type, r));
    }
  }
  function is(n) {
    Cn ? dn ? dn.push(n) : dn = [n] : Cn = n;
  }
  function ls() {
    if (Cn) {
      var n = Cn, r = dn;
      if (dn = Cn = null, jp(n), r)
        for (n = 0; n < r.length; n++)
          jp(r[n]);
    }
  }
  function Pp(n, r) {
    return n(r);
  }
  function $p() {
  }
  var os = !1;
  function ff(n, r, i) {
    if (os)
      return n(r, i);
    os = !0;
    try {
      return Pp(n, r, i);
    } finally {
      os = !1, (Cn !== null || dn !== null) && ($p(), ls());
    }
  }
  function Gl(n, r) {
    var i = n.stateNode;
    if (i === null)
      return null;
    var o = rt(i);
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
      throw Error(m(231, r, typeof i));
    return i;
  }
  var ss = !1;
  if (le)
    try {
      var Ja = {};
      Object.defineProperty(Ja, "passive", { get: function() {
        ss = !0;
      } }), window.addEventListener("test", Ja, Ja), window.removeEventListener("test", Ja, Ja);
    } catch {
      ss = !1;
    }
  function Ii(n, r, i, o, f, v, D, w, N) {
    var J = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(i, J);
    } catch (ye) {
      this.onError(ye);
    }
  }
  var hu = !1, Iu = null, Vi = !1, Yl = null, df = { onError: function(n) {
    hu = !0, Iu = n;
  } };
  function pf(n, r, i, o, f, v, D, w, N) {
    hu = !1, Iu = null, Ii.apply(df, arguments);
  }
  function qi(n, r, i, o, f, v, D, w, N) {
    if (pf.apply(this, arguments), hu) {
      if (hu) {
        var J = Iu;
        hu = !1, Iu = null;
      } else
        throw Error(m(198));
      Vi || (Vi = !0, Yl = J);
    }
  }
  function xu(n) {
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
  function Ql(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Gi(n) {
    if (xu(n) !== n)
      throw Error(m(188));
  }
  function sr(n) {
    var r = n.alternate;
    if (!r) {
      if (r = xu(n), r === null)
        throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var i = n, o = r; ; ) {
      var f = i.return;
      if (f === null)
        break;
      var v = f.alternate;
      if (v === null) {
        if (o = f.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (f.child === v.child) {
        for (v = f.child; v; ) {
          if (v === i)
            return Gi(f), n;
          if (v === o)
            return Gi(f), r;
          v = v.sibling;
        }
        throw Error(m(188));
      }
      if (i.return !== o.return)
        i = f, o = v;
      else {
        for (var D = !1, w = f.child; w; ) {
          if (w === i) {
            D = !0, i = f, o = v;
            break;
          }
          if (w === o) {
            D = !0, o = f, i = v;
            break;
          }
          w = w.sibling;
        }
        if (!D) {
          for (w = v.child; w; ) {
            if (w === i) {
              D = !0, i = v, o = f;
              break;
            }
            if (w === o) {
              D = !0, o = v, i = f;
              break;
            }
            w = w.sibling;
          }
          if (!D)
            throw Error(m(189));
        }
      }
      if (i.alternate !== o)
        throw Error(m(190));
    }
    if (i.tag !== 3)
      throw Error(m(188));
    return i.stateNode.current === i ? n : r;
  }
  function Hp(n) {
    return n = sr(n), n !== null ? Ip(n) : null;
  }
  function Ip(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Ip(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var vf = p.unstable_scheduleCallback, Vp = p.unstable_cancelCallback, lm = p.unstable_shouldYield, om = p.unstable_requestPaint, pn = p.unstable_now, sm = p.unstable_getCurrentPriorityLevel, Vu = p.unstable_ImmediatePriority, St = p.unstable_UserBlockingPriority, ga = p.unstable_NormalPriority, qp = p.unstable_LowPriority, hf = p.unstable_IdlePriority, Wl = null, mu = null;
  function Gp(n) {
    if (mu && typeof mu.onCommitFiberRoot == "function")
      try {
        mu.onCommitFiberRoot(Wl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Yr = Math.clz32 ? Math.clz32 : cm, Yp = Math.log, Qp = Math.LN2;
  function cm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yp(n) / Qp | 0) | 0;
  }
  var cs = 64, Yi = 4194304;
  function Za(n) {
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
  function yu(n, r) {
    var i = n.pendingLanes;
    if (i === 0)
      return 0;
    var o = 0, f = n.suspendedLanes, v = n.pingedLanes, D = i & 268435455;
    if (D !== 0) {
      var w = D & ~f;
      w !== 0 ? o = Za(w) : (v &= D, v !== 0 && (o = Za(v)));
    } else
      D = i & ~f, D !== 0 ? o = Za(D) : v !== 0 && (o = Za(v));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & f) && (f = o & -o, v = r & -r, f >= v || f === 16 && (v & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= i & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        i = 31 - Yr(r), f = 1 << i, o |= n[i], r &= ~f;
    return o;
  }
  function mf(n, r) {
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
  function fs(n, r) {
    for (var i = n.suspendedLanes, o = n.pingedLanes, f = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var D = 31 - Yr(v), w = 1 << D, N = f[D];
      N === -1 ? (!(w & i) || w & o) && (f[D] = mf(w, r)) : N <= r && (n.expiredLanes |= w), v &= ~w;
    }
  }
  function yf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ds() {
    var n = cs;
    return cs <<= 1, !(cs & 4194240) && (cs = 64), n;
  }
  function gf(n) {
    for (var r = [], i = 0; 31 > i; i++)
      r.push(n);
    return r;
  }
  function ei(n, r, i) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Yr(r), n[r] = i;
  }
  function fm(n, r) {
    var i = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < i; ) {
      var f = 31 - Yr(i), v = 1 << f;
      r[f] = 0, o[f] = -1, n[f] = -1, i &= ~v;
    }
  }
  function Kl(n, r) {
    var i = n.entangledLanes |= r;
    for (n = n.entanglements; i; ) {
      var o = 31 - Yr(i), f = 1 << o;
      f & r | n[o] & r && (n[o] |= r), i &= ~f;
    }
  }
  var Lt = 0;
  function Df(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Wp, ps, It, Kp, Ef, mt = !1, Xl = [], Sn = null, Qr = null, Wr = null, Jl = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), zt = [], dm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function gu(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Sn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qr = null;
        break;
      case "mouseover":
      case "mouseout":
        Wr = null;
        break;
      case "pointerover":
      case "pointerout":
        Jl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(r.pointerId);
    }
  }
  function er(n, r, i, o, f, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: i, eventSystemFlags: o, nativeEvent: v, targetContainers: [f] }, r !== null && (r = yo(r), r !== null && ps(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Da(n, r, i, o, f) {
    switch (r) {
      case "focusin":
        return Sn = er(Sn, n, r, i, o, f), !0;
      case "dragenter":
        return Qr = er(Qr, n, r, i, o, f), !0;
      case "mouseover":
        return Wr = er(Wr, n, r, i, o, f), !0;
      case "pointerover":
        var v = f.pointerId;
        return Jl.set(v, er(Jl.get(v) || null, n, r, i, o, f)), !0;
      case "gotpointercapture":
        return v = f.pointerId, wn.set(v, er(wn.get(v) || null, n, r, i, o, f)), !0;
    }
    return !1;
  }
  function Xp(n) {
    var r = Xr(n.target);
    if (r !== null) {
      var i = xu(r);
      if (i !== null) {
        if (r = i.tag, r === 13) {
          if (r = Ql(i), r !== null) {
            n.blockedOn = r, Ef(n.priority, function() {
              It(i);
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
      var i = ms(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (i === null) {
        i = n.nativeEvent;
        var o = new i.constructor(i.type, i);
        fn = o, i.target.dispatchEvent(o), fn = null;
      } else
        return r = yo(i), r !== null && ps(r), n.blockedOn = i, !1;
      r.shift();
    }
    return !0;
  }
  function Cf(n, r, i) {
    Qi(n) && i.delete(r);
  }
  function Jp() {
    mt = !1, Sn !== null && Qi(Sn) && (Sn = null), Qr !== null && Qi(Qr) && (Qr = null), Wr !== null && Qi(Wr) && (Wr = null), Jl.forEach(Cf), wn.forEach(Cf);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, mt || (mt = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Jp)));
  }
  function eo(n) {
    function r(f) {
      return Zl(f, n);
    }
    if (0 < Xl.length) {
      Zl(Xl[0], n);
      for (var i = 1; i < Xl.length; i++) {
        var o = Xl[i];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Sn !== null && Zl(Sn, n), Qr !== null && Zl(Qr, n), Wr !== null && Zl(Wr, n), Jl.forEach(r), wn.forEach(r), i = 0; i < zt.length; i++)
      o = zt[i], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < zt.length && (i = zt[0], i.blockedOn === null); )
      Xp(i), i.blockedOn === null && zt.shift();
  }
  var Wi = Je.ReactCurrentBatchConfig, ti = !0;
  function Zp(n, r, i, o) {
    var f = Lt, v = Wi.transition;
    Wi.transition = null;
    try {
      Lt = 1, hs(n, r, i, o);
    } finally {
      Lt = f, Wi.transition = v;
    }
  }
  function vs(n, r, i, o) {
    var f = Lt, v = Wi.transition;
    Wi.transition = null;
    try {
      Lt = 4, hs(n, r, i, o);
    } finally {
      Lt = f, Wi.transition = v;
    }
  }
  function hs(n, r, i, o) {
    if (ti) {
      var f = ms(n, r, i, o);
      if (f === null)
        xs(n, r, o, to, i), gu(n, o);
      else if (Da(f, n, r, i, o))
        o.stopPropagation();
      else if (gu(n, o), r & 4 && -1 < dm.indexOf(n)) {
        for (; f !== null; ) {
          var v = yo(f);
          if (v !== null && Wp(v), v = ms(n, r, i, o), v === null && xs(n, r, o, to, i), v === f)
            break;
          f = v;
        }
        f !== null && o.stopPropagation();
      } else
        xs(n, r, o, null, i);
    }
  }
  var to = null;
  function ms(n, r, i, o) {
    if (to = null, n = Ut(o), n = Xr(n), n !== null)
      if (r = xu(n), r === null)
        n = null;
      else if (i = r.tag, i === 13) {
        if (n = Ql(r), n !== null)
          return n;
        n = null;
      } else if (i === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return to = n, null;
  }
  function Sf(n) {
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
        switch (sm()) {
          case Vu:
            return 1;
          case St:
            return 4;
          case ga:
          case qp:
            return 16;
          case hf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var qu = null, no = null, ro = null;
  function Af() {
    if (ro)
      return ro;
    var n, r = no, i = r.length, o, f = "value" in qu ? qu.value : qu.textContent, v = f.length;
    for (n = 0; n < i && r[n] === f[n]; n++)
      ;
    var D = i - n;
    for (o = 1; o <= D && r[i - o] === f[v - o]; o++)
      ;
    return ro = f.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Ki(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function uo() {
    return !0;
  }
  function ev() {
    return !1;
  }
  function Mr(n) {
    function r(i, o, f, v, D) {
      this._reactName = i, this._targetInst = f, this.type = o, this.nativeEvent = v, this.target = D, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (i = n[w], this[w] = i ? i(v) : v[w]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? uo : ev, this.isPropagationStopped = ev, this;
    }
    return P(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = uo);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = uo);
    }, persist: function() {
    }, isPersistent: uo }), r;
  }
  var Ea = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ys = Mr(Ea), Xi = P({}, Ea, { view: 0, detail: 0 }), tv = Mr(Xi), gs, Ff, ao, kn = P({}, Xi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ao && (ao && n.type === "mousemove" ? (gs = n.screenX - ao.screenX, Ff = n.screenY - ao.screenY) : Ff = gs = 0, ao = n), gs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Ff;
  } }), Ds = Mr(kn), nv = P({}, kn, { dataTransfer: 0 }), rv = Mr(nv), pm = P({}, Xi, { relatedTarget: 0 }), Ca = Mr(pm), Tf = P({}, Ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uv = Mr(Tf), vm = P({}, Ea, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), hm = Mr(vm), mm = P({}, Ea, { data: 0 }), bf = Mr(mm), wf = {
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
  }, av = {
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
  }, iv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = iv[n]) ? !!r[n] : !1;
  }
  function xf() {
    return lv;
  }
  var Gu = P({}, Xi, { key: function(n) {
    if (n.key) {
      var r = wf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ki(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xf, charCode: function(n) {
    return n.type === "keypress" ? Ki(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ki(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ym = Mr(Gu), Rf = P({}, kn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Es = Mr(Rf), Bf = P({}, Xi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xf }), gm = Mr(Bf), Cs = P({}, Ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ov = Mr(Cs), Cr = P({}, kn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yu = Mr(Cr), An = [9, 13, 27, 32], Du = le && "CompositionEvent" in window, ni = null;
  le && "documentMode" in document && (ni = document.documentMode);
  var Ss = le && "TextEvent" in window && !ni, sv = le && (!Du || ni && 8 < ni && 11 >= ni), Ji = String.fromCharCode(32), cv = !1;
  function fv(n, r) {
    switch (n) {
      case "keyup":
        return An.indexOf(r.keyCode) !== -1;
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
  var Zi = !1;
  function Dm(n, r) {
    switch (n) {
      case "compositionend":
        return As(r);
      case "keypress":
        return r.which !== 32 ? null : (cv = !0, Ji);
      case "textInput":
        return n = r.data, n === Ji && cv ? null : n;
      default:
        return null;
    }
  }
  function Em(n, r) {
    if (Zi)
      return n === "compositionend" || !Du && fv(n, r) ? (n = Af(), ro = no = qu = null, Zi = !1, n) : null;
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
        return sv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var dv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!dv[n.type] : r === "textarea";
  }
  function vv(n, r, i, o) {
    is(o), r = vo(r, "onChange"), 0 < r.length && (i = new ys("onChange", "change", null, i, o), n.push({ event: i, listeners: r }));
  }
  var io = null, el = null;
  function tl(n) {
    ws(n, 0);
  }
  function nl(n) {
    var r = ul(n);
    if (ue(r))
      return n;
  }
  function hv(n, r) {
    if (n === "change")
      return r;
  }
  var _f = !1;
  if (le) {
    var Of;
    if (le) {
      var Nf = "oninput" in document;
      if (!Nf) {
        var mv = document.createElement("div");
        mv.setAttribute("oninput", "return;"), Nf = typeof mv.oninput == "function";
      }
      Of = Nf;
    } else
      Of = !1;
    _f = Of && (!document.documentMode || 9 < document.documentMode);
  }
  function yv() {
    io && (io.detachEvent("onpropertychange", gv), el = io = null);
  }
  function gv(n) {
    if (n.propertyName === "value" && nl(el)) {
      var r = [];
      vv(r, el, n, Ut(n)), ff(tl, r);
    }
  }
  function Cm(n, r, i) {
    n === "focusin" ? (yv(), io = r, el = i, io.attachEvent("onpropertychange", gv)) : n === "focusout" && yv();
  }
  function Sm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return nl(el);
  }
  function Am(n, r) {
    if (n === "click")
      return nl(r);
  }
  function Dv(n, r) {
    if (n === "input" || n === "change")
      return nl(r);
  }
  function Fm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Kr = typeof Object.is == "function" ? Object.is : Fm;
  function lo(n, r) {
    if (Kr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var i = Object.keys(n), o = Object.keys(r);
    if (i.length !== o.length)
      return !1;
    for (o = 0; o < i.length; o++) {
      var f = i[o];
      if (!te.call(r, f) || !Kr(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function Ev(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Cv(n, r) {
    var i = Ev(n);
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
      i = Ev(i);
    }
  }
  function Sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Fs() {
    for (var n = window, r = xe(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i)
        n = r.contentWindow;
      else
        break;
      r = xe(n.document);
    }
    return r;
  }
  function Qu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ts(n) {
    var r = Fs(), i = n.focusedElem, o = n.selectionRange;
    if (r !== i && i && i.ownerDocument && Sv(i.ownerDocument.documentElement, i)) {
      if (o !== null && Qu(i)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in i)
          i.selectionStart = r, i.selectionEnd = Math.min(n, i.value.length);
        else if (n = (r = i.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = i.textContent.length, v = Math.min(o.start, f);
          o = o.end === void 0 ? v : Math.min(o.end, f), !n.extend && v > o && (f = o, o = v, v = f), f = Cv(i, v);
          var D = Cv(
            i,
            o
          );
          f && D && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== D.node || n.focusOffset !== D.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), v > o ? (n.addRange(r), n.extend(D.node, D.offset)) : (r.setEnd(D.node, D.offset), n.addRange(r)));
        }
      }
      for (r = [], n = i; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < r.length; i++)
        n = r[i], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Av = le && "documentMode" in document && 11 >= document.documentMode, Eu = null, kf = null, oo = null, Mf = !1;
  function Fv(n, r, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Mf || Eu == null || Eu !== xe(o) || (o = Eu, "selectionStart" in o && Qu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), oo && lo(oo, o) || (oo = o, o = vo(kf, "onSelect"), 0 < o.length && (r = new ys("onSelect", "select", null, r, i), n.push({ event: r, listeners: o }), r.target = Eu)));
  }
  function bs(n, r) {
    var i = {};
    return i[n.toLowerCase()] = r.toLowerCase(), i["Webkit" + n] = "webkit" + r, i["Moz" + n] = "moz" + r, i;
  }
  var ri = { animationend: bs("Animation", "AnimationEnd"), animationiteration: bs("Animation", "AnimationIteration"), animationstart: bs("Animation", "AnimationStart"), transitionend: bs("Transition", "TransitionEnd") }, Lf = {}, Uf = {};
  le && (Uf = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
  function Mn(n) {
    if (Lf[n])
      return Lf[n];
    if (!ri[n])
      return n;
    var r = ri[n], i;
    for (i in r)
      if (r.hasOwnProperty(i) && i in Uf)
        return Lf[n] = r[i];
    return n;
  }
  var zf = Mn("animationend"), Tv = Mn("animationiteration"), bv = Mn("animationstart"), wv = Mn("transitionend"), xv = /* @__PURE__ */ new Map(), Rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wu(n, r) {
    xv.set(n, r), _(r, [n]);
  }
  for (var so = 0; so < Rv.length; so++) {
    var ui = Rv[so], Tm = ui.toLowerCase(), co = ui[0].toUpperCase() + ui.slice(1);
    Wu(Tm, "on" + co);
  }
  Wu(zf, "onAnimationEnd"), Wu(Tv, "onAnimationIteration"), Wu(bv, "onAnimationStart"), Wu("dblclick", "onDoubleClick"), Wu("focusin", "onFocus"), Wu("focusout", "onBlur"), Wu(wv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), _("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));
  function Bv(n, r, i) {
    var o = n.type || "unknown-event";
    n.currentTarget = i, qi(o, r, void 0, n), n.currentTarget = null;
  }
  function ws(n, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < n.length; i++) {
      var o = n[i], f = o.event;
      o = o.listeners;
      e: {
        var v = void 0;
        if (r)
          for (var D = o.length - 1; 0 <= D; D--) {
            var w = o[D], N = w.instance, J = w.currentTarget;
            if (w = w.listener, N !== v && f.isPropagationStopped())
              break e;
            Bv(f, w, J), v = N;
          }
        else
          for (D = 0; D < o.length; D++) {
            if (w = o[D], N = w.instance, J = w.currentTarget, w = w.listener, N !== v && f.isPropagationStopped())
              break e;
            Bv(f, w, J), v = N;
          }
      }
    }
    if (Vi)
      throw n = Yl, Vi = !1, Yl = null, n;
  }
  function Vt(n, r) {
    var i = r[qf];
    i === void 0 && (i = r[qf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    i.has(o) || (_v(r, n, 2, !1), i.add(o));
  }
  function Sa(n, r, i) {
    var o = 0;
    r && (o |= 4), _v(i, n, o, r);
  }
  var Ku = "_reactListening" + Math.random().toString(36).slice(2);
  function rl(n) {
    if (!n[Ku]) {
      n[Ku] = !0, b.forEach(function(i) {
        i !== "selectionchange" && (bm.has(i) || Sa(i, !1, n), Sa(i, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ku] || (r[Ku] = !0, Sa("selectionchange", !1, r));
    }
  }
  function _v(n, r, i, o) {
    switch (Sf(r)) {
      case 1:
        var f = Zp;
        break;
      case 4:
        f = vs;
        break;
      default:
        f = hs;
    }
    i = f.bind(null, r, i, n), f = void 0, !ss || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), o ? f !== void 0 ? n.addEventListener(r, i, { capture: !0, passive: f }) : n.addEventListener(r, i, !0) : f !== void 0 ? n.addEventListener(r, i, { passive: f }) : n.addEventListener(r, i, !1);
  }
  function xs(n, r, i, o, f) {
    var v = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var D = o.tag;
          if (D === 3 || D === 4) {
            var w = o.stateNode.containerInfo;
            if (w === f || w.nodeType === 8 && w.parentNode === f)
              break;
            if (D === 4)
              for (D = o.return; D !== null; ) {
                var N = D.tag;
                if ((N === 3 || N === 4) && (N = D.stateNode.containerInfo, N === f || N.nodeType === 8 && N.parentNode === f))
                  return;
                D = D.return;
              }
            for (; w !== null; ) {
              if (D = Xr(w), D === null)
                return;
              if (N = D.tag, N === 5 || N === 6) {
                o = v = D;
                continue e;
              }
              w = w.parentNode;
            }
          }
          o = o.return;
        }
    ff(function() {
      var J = v, ye = Ut(i), Ce = [];
      e: {
        var me = xv.get(n);
        if (me !== void 0) {
          var Me = ys, Ve = n;
          switch (n) {
            case "keypress":
              if (Ki(i) === 0)
                break e;
            case "keydown":
            case "keyup":
              Me = ym;
              break;
            case "focusin":
              Ve = "focus", Me = Ca;
              break;
            case "focusout":
              Ve = "blur", Me = Ca;
              break;
            case "beforeblur":
            case "afterblur":
              Me = Ca;
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
              Me = Ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Me = rv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Me = gm;
              break;
            case zf:
            case Tv:
            case bv:
              Me = uv;
              break;
            case wv:
              Me = ov;
              break;
            case "scroll":
              Me = tv;
              break;
            case "wheel":
              Me = Yu;
              break;
            case "copy":
            case "cut":
            case "paste":
              Me = hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Me = Es;
          }
          var We = (r & 4) !== 0, Dn = !We && n === "scroll", I = We ? me !== null ? me + "Capture" : null : me;
          We = [];
          for (var M = J, Y; M !== null; ) {
            Y = M;
            var Fe = Y.stateNode;
            if (Y.tag === 5 && Fe !== null && (Y = Fe, I !== null && (Fe = Gl(M, I), Fe != null && We.push(po(M, Fe, Y)))), Dn)
              break;
            M = M.return;
          }
          0 < We.length && (me = new Me(me, Ve, null, i, ye), Ce.push({ event: me, listeners: We }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (me = n === "mouseover" || n === "pointerover", Me = n === "mouseout" || n === "pointerout", me && i !== fn && (Ve = i.relatedTarget || i.fromElement) && (Xr(Ve) || Ve[Xu]))
            break e;
          if ((Me || me) && (me = ye.window === ye ? ye : (me = ye.ownerDocument) ? me.defaultView || me.parentWindow : window, Me ? (Ve = i.relatedTarget || i.toElement, Me = J, Ve = Ve ? Xr(Ve) : null, Ve !== null && (Dn = xu(Ve), Ve !== Dn || Ve.tag !== 5 && Ve.tag !== 6) && (Ve = null)) : (Me = null, Ve = J), Me !== Ve)) {
            if (We = Ds, Fe = "onMouseLeave", I = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (We = Es, Fe = "onPointerLeave", I = "onPointerEnter", M = "pointer"), Dn = Me == null ? me : ul(Me), Y = Ve == null ? me : ul(Ve), me = new We(Fe, M + "leave", Me, i, ye), me.target = Dn, me.relatedTarget = Y, Fe = null, Xr(ye) === J && (We = new We(I, M + "enter", Ve, i, ye), We.target = Y, We.relatedTarget = Dn, Fe = We), Dn = Fe, Me && Ve)
              t: {
                for (We = Me, I = Ve, M = 0, Y = We; Y; Y = ai(Y))
                  M++;
                for (Y = 0, Fe = I; Fe; Fe = ai(Fe))
                  Y++;
                for (; 0 < M - Y; )
                  We = ai(We), M--;
                for (; 0 < Y - M; )
                  I = ai(I), Y--;
                for (; M--; ) {
                  if (We === I || I !== null && We === I.alternate)
                    break t;
                  We = ai(We), I = ai(I);
                }
                We = null;
              }
            else
              We = null;
            Me !== null && jf(Ce, me, Me, We, !1), Ve !== null && Dn !== null && jf(Ce, Dn, Ve, We, !0);
          }
        }
        e: {
          if (me = J ? ul(J) : window, Me = me.nodeName && me.nodeName.toLowerCase(), Me === "select" || Me === "input" && me.type === "file")
            var Xe = hv;
          else if (pv(me))
            if (_f)
              Xe = Dv;
            else {
              Xe = Sm;
              var qe = Cm;
            }
          else
            (Me = me.nodeName) && Me.toLowerCase() === "input" && (me.type === "checkbox" || me.type === "radio") && (Xe = Am);
          if (Xe && (Xe = Xe(n, J))) {
            vv(Ce, Xe, i, ye);
            break e;
          }
          qe && qe(n, me, J), n === "focusout" && (qe = me._wrapperState) && qe.controlled && me.type === "number" && de(me, "number", me.value);
        }
        switch (qe = J ? ul(J) : window, n) {
          case "focusin":
            (pv(qe) || qe.contentEditable === "true") && (Eu = qe, kf = J, oo = null);
            break;
          case "focusout":
            oo = kf = Eu = null;
            break;
          case "mousedown":
            Mf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mf = !1, Fv(Ce, i, ye);
            break;
          case "selectionchange":
            if (Av)
              break;
          case "keydown":
          case "keyup":
            Fv(Ce, i, ye);
        }
        var tt;
        if (Du)
          e: {
            switch (n) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break e;
              case "compositionend":
                pt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break e;
            }
            pt = void 0;
          }
        else
          Zi ? fv(n, i) && (pt = "onCompositionEnd") : n === "keydown" && i.keyCode === 229 && (pt = "onCompositionStart");
        pt && (sv && i.locale !== "ko" && (Zi || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && Zi && (tt = Af()) : (qu = ye, no = "value" in qu ? qu.value : qu.textContent, Zi = !0)), qe = vo(J, pt), 0 < qe.length && (pt = new bf(pt, n, null, i, ye), Ce.push({ event: pt, listeners: qe }), tt ? pt.data = tt : (tt = As(i), tt !== null && (pt.data = tt)))), (tt = Ss ? Dm(n, i) : Em(n, i)) && (J = vo(J, "onBeforeInput"), 0 < J.length && (ye = new bf("onBeforeInput", "beforeinput", null, i, ye), Ce.push({ event: ye, listeners: J }), ye.data = tt));
      }
      ws(Ce, r);
    });
  }
  function po(n, r, i) {
    return { instance: n, listener: r, currentTarget: i };
  }
  function vo(n, r) {
    for (var i = r + "Capture", o = []; n !== null; ) {
      var f = n, v = f.stateNode;
      f.tag === 5 && v !== null && (f = v, v = Gl(n, i), v != null && o.unshift(po(n, v, f)), v = Gl(n, r), v != null && o.push(po(n, v, f))), n = n.return;
    }
    return o;
  }
  function ai(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function jf(n, r, i, o, f) {
    for (var v = r._reactName, D = []; i !== null && i !== o; ) {
      var w = i, N = w.alternate, J = w.stateNode;
      if (N !== null && N === o)
        break;
      w.tag === 5 && J !== null && (w = J, f ? (N = Gl(i, v), N != null && D.unshift(po(i, N, w))) : f || (N = Gl(i, v), N != null && D.push(po(i, N, w)))), i = i.return;
    }
    D.length !== 0 && n.push({ event: r, listeners: D });
  }
  var Pf = /\r\n?/g, wm = /\u0000|\uFFFD/g;
  function $f(n) {
    return (typeof n == "string" ? n : "" + n).replace(Pf, `
`).replace(wm, "");
  }
  function Rs(n, r, i) {
    if (r = $f(r), $f(n) !== r && i)
      throw Error(m(425));
  }
  function Bs() {
  }
  var Hf = null, ii = null;
  function ho(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var li = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, If = typeof Promise == "function" ? Promise : void 0, Vf = typeof queueMicrotask == "function" ? queueMicrotask : typeof If < "u" ? function(n) {
    return If.resolve(null).then(n).catch(xm);
  } : li;
  function xm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Aa(n, r) {
    var i = r, o = 0;
    do {
      var f = i.nextSibling;
      if (n.removeChild(i), f && f.nodeType === 8)
        if (i = f.data, i === "/$") {
          if (o === 0) {
            n.removeChild(f), eo(r);
            return;
          }
          o--;
        } else
          i !== "$" && i !== "$?" && i !== "$!" || o++;
      i = f;
    } while (i);
    eo(r);
  }
  function Cu(n) {
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
  function mo(n) {
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
  var Fa = Math.random().toString(36).slice(2), Ru = "__reactFiber$" + Fa, oi = "__reactProps$" + Fa, Xu = "__reactContainer$" + Fa, qf = "__reactEvents$" + Fa, Rm = "__reactListeners$" + Fa, Gf = "__reactHandles$" + Fa;
  function Xr(n) {
    var r = n[Ru];
    if (r)
      return r;
    for (var i = n.parentNode; i; ) {
      if (r = i[Xu] || i[Ru]) {
        if (i = r.alternate, r.child !== null || i !== null && i.child !== null)
          for (n = mo(n); n !== null; ) {
            if (i = n[Ru])
              return i;
            n = mo(n);
          }
        return r;
      }
      n = i, i = n.parentNode;
    }
    return null;
  }
  function yo(n) {
    return n = n[Ru] || n[Xu], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ul(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function rt(n) {
    return n[oi] || null;
  }
  var Ta = [], Qt = -1;
  function Dt(n) {
    return { current: n };
  }
  function Nt(n) {
    0 > Qt || (n.current = Ta[Qt], Ta[Qt] = null, Qt--);
  }
  function kt(n, r) {
    Qt++, Ta[Qt] = n.current, n.current = r;
  }
  var Bu = {}, dt = Dt(Bu), vn = Dt(!1), Sr = Bu;
  function Jr(n, r) {
    var i = n.type.contextTypes;
    if (!i)
      return Bu;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var f = {}, v;
    for (v in i)
      f[v] = r[v];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Zt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Zr() {
    Nt(vn), Nt(dt);
  }
  function ba(n, r, i) {
    if (dt.current !== Bu)
      throw Error(m(168));
    kt(dt, r), kt(vn, i);
  }
  function go(n, r, i) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return i;
    o = o.getChildContext();
    for (var f in o)
      if (!(f in r))
        throw Error(m(108, S(n) || "Unknown", f));
    return P({}, i, o);
  }
  function _s(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Bu, Sr = dt.current, kt(dt, n), kt(vn, vn.current), !0;
  }
  function Nv(n, r, i) {
    var o = n.stateNode;
    if (!o)
      throw Error(m(169));
    i ? (n = go(n, r, Sr), o.__reactInternalMemoizedMergedChildContext = n, Nt(vn), Nt(dt), kt(dt, n)) : Nt(vn), kt(vn, i);
  }
  var Lr = null, Ln = !1, Do = !1;
  function Yf(n) {
    Lr === null ? Lr = [n] : Lr.push(n);
  }
  function Qf(n) {
    Ln = !0, Yf(n);
  }
  function Ar() {
    if (!Do && Lr !== null) {
      Do = !0;
      var n = 0, r = Lt;
      try {
        var i = Lr;
        for (Lt = 1; n < i.length; n++) {
          var o = i[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Lr = null, Ln = !1;
      } catch (f) {
        throw Lr !== null && (Lr = Lr.slice(n + 1)), vf(Vu, Ar), f;
      } finally {
        Lt = r, Do = !1;
      }
    }
    return null;
  }
  var wa = [], Fr = 0, si = null, al = 0, Tr = [], tr = 0, eu = null, Hn = 1, Ju = "";
  function Ur(n, r) {
    wa[Fr++] = al, wa[Fr++] = si, si = n, al = r;
  }
  function Wf(n, r, i) {
    Tr[tr++] = Hn, Tr[tr++] = Ju, Tr[tr++] = eu, eu = n;
    var o = Hn;
    n = Ju;
    var f = 32 - Yr(o) - 1;
    o &= ~(1 << f), i += 1;
    var v = 32 - Yr(r) + f;
    if (30 < v) {
      var D = f - f % 5;
      v = (o & (1 << D) - 1).toString(32), o >>= D, f -= D, Hn = 1 << 32 - Yr(r) + f | i << f | o, Ju = v + n;
    } else
      Hn = 1 << v | i << f | o, Ju = n;
  }
  function Os(n) {
    n.return !== null && (Ur(n, 1), Wf(n, 1, 0));
  }
  function Kf(n) {
    for (; n === si; )
      si = wa[--Fr], wa[Fr] = null, al = wa[--Fr], wa[Fr] = null;
    for (; n === eu; )
      eu = Tr[--tr], Tr[tr] = null, Ju = Tr[--tr], Tr[tr] = null, Hn = Tr[--tr], Tr[tr] = null;
  }
  var zr = null, br = null, Wt = !1, tu = null;
  function Xf(n, r) {
    var i = lu(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = r, i.return = n, r = n.deletions, r === null ? (n.deletions = [i], n.flags |= 16) : r.push(i);
  }
  function kv(n, r) {
    switch (n.tag) {
      case 5:
        var i = n.type;
        return r = r.nodeType !== 1 || i.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, zr = n, br = Cu(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, zr = n, br = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (i = eu !== null ? { id: Hn, overflow: Ju } : null, n.memoizedState = { dehydrated: r, treeContext: i, retryLane: 1073741824 }, i = lu(18, null, null, 0), i.stateNode = r, i.return = n, n.child = i, zr = n, br = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ns(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function ks(n) {
    if (Wt) {
      var r = br;
      if (r) {
        var i = r;
        if (!kv(n, r)) {
          if (Ns(n))
            throw Error(m(418));
          r = Cu(i.nextSibling);
          var o = zr;
          r && kv(n, r) ? Xf(o, i) : (n.flags = n.flags & -4097 | 2, Wt = !1, zr = n);
        }
      } else {
        if (Ns(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Wt = !1, zr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    zr = n;
  }
  function Ms(n) {
    if (n !== zr)
      return !1;
    if (!Wt)
      return Mv(n), Wt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ho(n.type, n.memoizedProps)), r && (r = br)) {
      if (Ns(n))
        throw Lv(), Error(m(418));
      for (; r; )
        Xf(n, r), r = Cu(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var i = n.data;
            if (i === "/$") {
              if (r === 0) {
                br = Cu(n.nextSibling);
                break e;
              }
              r--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        br = null;
      }
    } else
      br = zr ? Cu(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Lv() {
    for (var n = br; n; )
      n = Cu(n.nextSibling);
  }
  function rn() {
    br = zr = null, Wt = !1;
  }
  function Jf(n) {
    tu === null ? tu = [n] : tu.push(n);
  }
  var Ls = Je.ReactCurrentBatchConfig;
  function jr(n, r) {
    if (n && n.defaultProps) {
      r = P({}, r), n = n.defaultProps;
      for (var i in n)
        r[i] === void 0 && (r[i] = n[i]);
      return r;
    }
    return r;
  }
  var _u = Dt(null), Us = null, xa = null, Zf = null;
  function ed() {
    Zf = xa = Us = null;
  }
  function Ra(n) {
    var r = _u.current;
    Nt(_u), n._currentValue = r;
  }
  function Un(n, r, i) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === i)
        break;
      n = n.return;
    }
  }
  function Re(n, r) {
    Us = n, Zf = xa = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Fn = !0), n.firstContext = null);
  }
  function gn(n) {
    var r = n._currentValue;
    if (Zf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, xa === null) {
        if (Us === null)
          throw Error(m(308));
        xa = n, Us.dependencies = { lanes: 0, firstContext: n };
      } else
        xa = xa.next = n;
    return r;
  }
  var In = null;
  function td(n) {
    In === null ? In = [n] : In.push(n);
  }
  function Uv(n, r, i, o) {
    var f = r.interleaved;
    return f === null ? (i.next = i, td(r)) : (i.next = f.next, f.next = i), r.interleaved = i, Zu(n, o);
  }
  function Zu(n, r) {
    n.lanes |= r;
    var i = n.alternate;
    for (i !== null && (i.lanes |= r), i = n, n = n.return; n !== null; )
      n.childLanes |= r, i = n.alternate, i !== null && (i.childLanes |= r), i = n, n = n.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var Ba = !1;
  function nd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function xn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ea(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function _a(n, r, i) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, At & 2) {
      var f = o.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), o.pending = r, Zu(n, i);
    }
    return f = o.interleaved, f === null ? (r.next = r, td(o)) : (r.next = f.next, f.next = r), o.interleaved = r, Zu(n, i);
  }
  function zs(n, r, i) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (i & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, i |= o, r.lanes = i, Kl(n, i);
    }
  }
  function rd(n, r) {
    var i = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var f = null, v = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var D = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          v === null ? f = v = D : v = v.next = D, i = i.next;
        } while (i !== null);
        v === null ? f = v = r : v = v.next = r;
      } else
        f = v = r;
      i = { baseState: o.baseState, firstBaseUpdate: f, lastBaseUpdate: v, shared: o.shared, effects: o.effects }, n.updateQueue = i;
      return;
    }
    n = i.lastBaseUpdate, n === null ? i.firstBaseUpdate = r : n.next = r, i.lastBaseUpdate = r;
  }
  function Oa(n, r, i, o) {
    var f = n.updateQueue;
    Ba = !1;
    var v = f.firstBaseUpdate, D = f.lastBaseUpdate, w = f.shared.pending;
    if (w !== null) {
      f.shared.pending = null;
      var N = w, J = N.next;
      N.next = null, D === null ? v = J : D.next = J, D = N;
      var ye = n.alternate;
      ye !== null && (ye = ye.updateQueue, w = ye.lastBaseUpdate, w !== D && (w === null ? ye.firstBaseUpdate = J : w.next = J, ye.lastBaseUpdate = N));
    }
    if (v !== null) {
      var Ce = f.baseState;
      D = 0, ye = J = N = null, w = v;
      do {
        var me = w.lane, Me = w.eventTime;
        if ((o & me) === me) {
          ye !== null && (ye = ye.next = {
            eventTime: Me,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var Ve = n, We = w;
            switch (me = r, Me = i, We.tag) {
              case 1:
                if (Ve = We.payload, typeof Ve == "function") {
                  Ce = Ve.call(Me, Ce, me);
                  break e;
                }
                Ce = Ve;
                break e;
              case 3:
                Ve.flags = Ve.flags & -65537 | 128;
              case 0:
                if (Ve = We.payload, me = typeof Ve == "function" ? Ve.call(Me, Ce, me) : Ve, me == null)
                  break e;
                Ce = P({}, Ce, me);
                break e;
              case 2:
                Ba = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, me = f.effects, me === null ? f.effects = [w] : me.push(w));
        } else
          Me = { eventTime: Me, lane: me, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, ye === null ? (J = ye = Me, N = Ce) : ye = ye.next = Me, D |= me;
        if (w = w.next, w === null) {
          if (w = f.shared.pending, w === null)
            break;
          me = w, w = me.next, me.next = null, f.lastBaseUpdate = me, f.shared.pending = null;
        }
      } while (1);
      if (ye === null && (N = Ce), f.baseState = N, f.firstBaseUpdate = J, f.lastBaseUpdate = ye, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          D |= f.lane, f = f.next;
        while (f !== r);
      } else
        v === null && (f.shared.lanes = 0);
      ua |= D, n.lanes = D, n.memoizedState = Ce;
    }
  }
  function ci(n, r, i) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], f = o.callback;
        if (f !== null) {
          if (o.callback = null, o = i, typeof f != "function")
            throw Error(m(191, f));
          f.call(o);
        }
      }
  }
  var zv = new c.Component().refs;
  function ud(n, r, i, o) {
    r = n.memoizedState, i = i(o, r), i = i == null ? r : P({}, r, i), n.memoizedState = i, n.lanes === 0 && (n.updateQueue.baseState = i);
  }
  var js = { isMounted: function(n) {
    return (n = n._reactInternals) ? xu(n) === n : !1;
  }, enqueueSetState: function(n, r, i) {
    n = n._reactInternals;
    var o = ar(), f = Tn(n), v = ea(o, f);
    v.payload = r, i != null && (v.callback = i), r = _a(n, v, f), r !== null && (ir(r, n, f, o), zs(r, n, f));
  }, enqueueReplaceState: function(n, r, i) {
    n = n._reactInternals;
    var o = ar(), f = Tn(n), v = ea(o, f);
    v.tag = 1, v.payload = r, i != null && (v.callback = i), r = _a(n, v, f), r !== null && (ir(r, n, f, o), zs(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var i = ar(), o = Tn(n), f = ea(i, o);
    f.tag = 2, r != null && (f.callback = r), r = _a(n, f, o), r !== null && (ir(r, n, o, i), zs(r, n, o));
  } };
  function jv(n, r, i, o, f, v, D) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, v, D) : r.prototype && r.prototype.isPureReactComponent ? !lo(i, o) || !lo(f, v) : !0;
  }
  function Pv(n, r, i) {
    var o = !1, f = Bu, v = r.contextType;
    return typeof v == "object" && v !== null ? v = gn(v) : (f = Zt(r) ? Sr : dt.current, o = r.contextTypes, v = (o = o != null) ? Jr(n, f) : Bu), r = new r(i, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = js, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function $v(n, r, i, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(i, o), r.state !== n && js.enqueueReplaceState(r, r.state, null);
  }
  function Ps(n, r, i, o) {
    var f = n.stateNode;
    f.props = i, f.state = n.memoizedState, f.refs = zv, nd(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? f.context = gn(v) : (v = Zt(r) ? Sr : dt.current, f.context = Jr(n, v)), f.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (ud(n, r, v, i), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && js.enqueueReplaceState(f, f.state, null), Oa(n, i, f, o), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function il(n, r, i) {
    if (n = i.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1)
            throw Error(m(309));
          var o = i.stateNode;
        }
        if (!o)
          throw Error(m(147, n));
        var f = o, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(D) {
          var w = f.refs;
          w === zv && (w = f.refs = {}), D === null ? delete w[v] : w[v] = D;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!i._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function $s(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Hv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Iv(n) {
    function r(I, M) {
      if (n) {
        var Y = I.deletions;
        Y === null ? (I.deletions = [M], I.flags |= 16) : Y.push(M);
      }
    }
    function i(I, M) {
      if (!n)
        return null;
      for (; M !== null; )
        r(I, M), M = M.sibling;
      return null;
    }
    function o(I, M) {
      for (I = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? I.set(M.key, M) : I.set(M.index, M), M = M.sibling;
      return I;
    }
    function f(I, M) {
      return I = Pa(I, M), I.index = 0, I.sibling = null, I;
    }
    function v(I, M, Y) {
      return I.index = Y, n ? (Y = I.alternate, Y !== null ? (Y = Y.index, Y < M ? (I.flags |= 2, M) : Y) : (I.flags |= 2, M)) : (I.flags |= 1048576, M);
    }
    function D(I) {
      return n && I.alternate === null && (I.flags |= 2), I;
    }
    function w(I, M, Y, Fe) {
      return M === null || M.tag !== 6 ? (M = zo(Y, I.mode, Fe), M.return = I, M) : (M = f(M, Y), M.return = I, M);
    }
    function N(I, M, Y, Fe) {
      var Xe = Y.type;
      return Xe === ne ? ye(I, M, Y.props.children, Fe, Y.key) : M !== null && (M.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === Ue && Hv(Xe) === M.type) ? (Fe = f(M, Y.props), Fe.ref = il(I, M, Y), Fe.return = I, Fe) : (Fe = Dc(Y.type, Y.key, Y.props, null, I.mode, Fe), Fe.ref = il(I, M, Y), Fe.return = I, Fe);
    }
    function J(I, M, Y, Fe) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== Y.containerInfo || M.stateNode.implementation !== Y.implementation ? (M = Ri(Y, I.mode, Fe), M.return = I, M) : (M = f(M, Y.children || []), M.return = I, M);
    }
    function ye(I, M, Y, Fe, Xe) {
      return M === null || M.tag !== 7 ? (M = xi(Y, I.mode, Fe, Xe), M.return = I, M) : (M = f(M, Y), M.return = I, M);
    }
    function Ce(I, M, Y) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = zo("" + M, I.mode, Y), M.return = I, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case $:
            return Y = Dc(M.type, M.key, M.props, null, I.mode, Y), Y.ref = il(I, null, M), Y.return = I, Y;
          case O:
            return M = Ri(M, I.mode, Y), M.return = I, M;
          case Ue:
            var Fe = M._init;
            return Ce(I, Fe(M._payload), Y);
        }
        if (Er(M) || H(M))
          return M = xi(M, I.mode, Y, null), M.return = I, M;
        $s(I, M);
      }
      return null;
    }
    function me(I, M, Y, Fe) {
      var Xe = M !== null ? M.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number")
        return Xe !== null ? null : w(I, M, "" + Y, Fe);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case $:
            return Y.key === Xe ? N(I, M, Y, Fe) : null;
          case O:
            return Y.key === Xe ? J(I, M, Y, Fe) : null;
          case Ue:
            return Xe = Y._init, me(
              I,
              M,
              Xe(Y._payload),
              Fe
            );
        }
        if (Er(Y) || H(Y))
          return Xe !== null ? null : ye(I, M, Y, Fe, null);
        $s(I, Y);
      }
      return null;
    }
    function Me(I, M, Y, Fe, Xe) {
      if (typeof Fe == "string" && Fe !== "" || typeof Fe == "number")
        return I = I.get(Y) || null, w(M, I, "" + Fe, Xe);
      if (typeof Fe == "object" && Fe !== null) {
        switch (Fe.$$typeof) {
          case $:
            return I = I.get(Fe.key === null ? Y : Fe.key) || null, N(M, I, Fe, Xe);
          case O:
            return I = I.get(Fe.key === null ? Y : Fe.key) || null, J(M, I, Fe, Xe);
          case Ue:
            var qe = Fe._init;
            return Me(I, M, Y, qe(Fe._payload), Xe);
        }
        if (Er(Fe) || H(Fe))
          return I = I.get(Y) || null, ye(M, I, Fe, Xe, null);
        $s(M, Fe);
      }
      return null;
    }
    function Ve(I, M, Y, Fe) {
      for (var Xe = null, qe = null, tt = M, pt = M = 0, Pn = null; tt !== null && pt < Y.length; pt++) {
        tt.index > pt ? (Pn = tt, tt = null) : Pn = tt.sibling;
        var Bt = me(I, tt, Y[pt], Fe);
        if (Bt === null) {
          tt === null && (tt = Pn);
          break;
        }
        n && tt && Bt.alternate === null && r(I, tt), M = v(Bt, M, pt), qe === null ? Xe = Bt : qe.sibling = Bt, qe = Bt, tt = Pn;
      }
      if (pt === Y.length)
        return i(I, tt), Wt && Ur(I, pt), Xe;
      if (tt === null) {
        for (; pt < Y.length; pt++)
          tt = Ce(I, Y[pt], Fe), tt !== null && (M = v(tt, M, pt), qe === null ? Xe = tt : qe.sibling = tt, qe = tt);
        return Wt && Ur(I, pt), Xe;
      }
      for (tt = o(I, tt); pt < Y.length; pt++)
        Pn = Me(tt, I, pt, Y[pt], Fe), Pn !== null && (n && Pn.alternate !== null && tt.delete(Pn.key === null ? pt : Pn.key), M = v(Pn, M, pt), qe === null ? Xe = Pn : qe.sibling = Pn, qe = Pn);
      return n && tt.forEach(function($a) {
        return r(I, $a);
      }), Wt && Ur(I, pt), Xe;
    }
    function We(I, M, Y, Fe) {
      var Xe = H(Y);
      if (typeof Xe != "function")
        throw Error(m(150));
      if (Y = Xe.call(Y), Y == null)
        throw Error(m(151));
      for (var qe = Xe = null, tt = M, pt = M = 0, Pn = null, Bt = Y.next(); tt !== null && !Bt.done; pt++, Bt = Y.next()) {
        tt.index > pt ? (Pn = tt, tt = null) : Pn = tt.sibling;
        var $a = me(I, tt, Bt.value, Fe);
        if ($a === null) {
          tt === null && (tt = Pn);
          break;
        }
        n && tt && $a.alternate === null && r(I, tt), M = v($a, M, pt), qe === null ? Xe = $a : qe.sibling = $a, qe = $a, tt = Pn;
      }
      if (Bt.done)
        return i(
          I,
          tt
        ), Wt && Ur(I, pt), Xe;
      if (tt === null) {
        for (; !Bt.done; pt++, Bt = Y.next())
          Bt = Ce(I, Bt.value, Fe), Bt !== null && (M = v(Bt, M, pt), qe === null ? Xe = Bt : qe.sibling = Bt, qe = Bt);
        return Wt && Ur(I, pt), Xe;
      }
      for (tt = o(I, tt); !Bt.done; pt++, Bt = Y.next())
        Bt = Me(tt, I, pt, Bt.value, Fe), Bt !== null && (n && Bt.alternate !== null && tt.delete(Bt.key === null ? pt : Bt.key), M = v(Bt, M, pt), qe === null ? Xe = Bt : qe.sibling = Bt, qe = Bt);
      return n && tt.forEach(function(Wm) {
        return r(I, Wm);
      }), Wt && Ur(I, pt), Xe;
    }
    function Dn(I, M, Y, Fe) {
      if (typeof Y == "object" && Y !== null && Y.type === ne && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case $:
            e: {
              for (var Xe = Y.key, qe = M; qe !== null; ) {
                if (qe.key === Xe) {
                  if (Xe = Y.type, Xe === ne) {
                    if (qe.tag === 7) {
                      i(I, qe.sibling), M = f(qe, Y.props.children), M.return = I, I = M;
                      break e;
                    }
                  } else if (qe.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === Ue && Hv(Xe) === qe.type) {
                    i(I, qe.sibling), M = f(qe, Y.props), M.ref = il(I, qe, Y), M.return = I, I = M;
                    break e;
                  }
                  i(I, qe);
                  break;
                } else
                  r(I, qe);
                qe = qe.sibling;
              }
              Y.type === ne ? (M = xi(Y.props.children, I.mode, Fe, Y.key), M.return = I, I = M) : (Fe = Dc(Y.type, Y.key, Y.props, null, I.mode, Fe), Fe.ref = il(I, M, Y), Fe.return = I, I = Fe);
            }
            return D(I);
          case O:
            e: {
              for (qe = Y.key; M !== null; ) {
                if (M.key === qe)
                  if (M.tag === 4 && M.stateNode.containerInfo === Y.containerInfo && M.stateNode.implementation === Y.implementation) {
                    i(I, M.sibling), M = f(M, Y.children || []), M.return = I, I = M;
                    break e;
                  } else {
                    i(I, M);
                    break;
                  }
                else
                  r(I, M);
                M = M.sibling;
              }
              M = Ri(Y, I.mode, Fe), M.return = I, I = M;
            }
            return D(I);
          case Ue:
            return qe = Y._init, Dn(I, M, qe(Y._payload), Fe);
        }
        if (Er(Y))
          return Ve(I, M, Y, Fe);
        if (H(Y))
          return We(I, M, Y, Fe);
        $s(I, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, M !== null && M.tag === 6 ? (i(I, M.sibling), M = f(M, Y), M.return = I, I = M) : (i(I, M), M = zo(Y, I.mode, Fe), M.return = I, I = M), D(I)) : i(I, M);
    }
    return Dn;
  }
  var ll = Iv(!0), Vv = Iv(!1), Eo = {}, Su = Dt(Eo), Co = Dt(Eo), ol = Dt(Eo);
  function fi(n) {
    if (n === Eo)
      throw Error(m(174));
    return n;
  }
  function ad(n, r) {
    switch (kt(ol, r), kt(Co, n), kt(Su, Eo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Oe(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Oe(r, n);
    }
    Nt(Su), kt(Su, r);
  }
  function Na() {
    Nt(Su), Nt(Co), Nt(ol);
  }
  function lt(n) {
    fi(ol.current);
    var r = fi(Su.current), i = Oe(r, n.type);
    r !== i && (kt(Co, n), kt(Su, i));
  }
  function Ct(n) {
    Co.current === n && (Nt(Su), Nt(Co));
  }
  var ot = Dt(0);
  function un(n) {
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
  var nu = [];
  function Hs() {
    for (var n = 0; n < nu.length; n++)
      nu[n]._workInProgressVersionPrimary = null;
    nu.length = 0;
  }
  var Is = Je.ReactCurrentDispatcher, id = Je.ReactCurrentBatchConfig, di = 0, Kt = null, oe = null, Tt = null, st = !1, Ou = !1, Pr = 0, pi = 0;
  function Xt() {
    throw Error(m(321));
  }
  function vi(n, r) {
    if (r === null)
      return !1;
    for (var i = 0; i < r.length && i < n.length; i++)
      if (!Kr(n[i], r[i]))
        return !1;
    return !0;
  }
  function ka(n, r, i, o, f, v) {
    if (di = v, Kt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Is.current = n === null || n.memoizedState === null ? _m : Om, n = i(o, f), Ou) {
      v = 0;
      do {
        if (Ou = !1, Pr = 0, 25 <= v)
          throw Error(m(301));
        v += 1, Tt = oe = null, r.updateQueue = null, Is.current = od, n = i(o, f);
      } while (Ou);
    }
    if (Is.current = ac, r = oe !== null && oe.next !== null, di = 0, Tt = oe = Kt = null, st = !1, r)
      throw Error(m(300));
    return n;
  }
  function hi() {
    var n = Pr !== 0;
    return Pr = 0, n;
  }
  function ru() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Tt === null ? Kt.memoizedState = Tt = n : Tt = Tt.next = n, Tt;
  }
  function wr() {
    if (oe === null) {
      var n = Kt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = oe.next;
    var r = Tt === null ? Kt.memoizedState : Tt.next;
    if (r !== null)
      Tt = r, oe = n;
    else {
      if (n === null)
        throw Error(m(310));
      oe = n, n = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, Tt === null ? Kt.memoizedState = Tt = n : Tt = Tt.next = n;
    }
    return Tt;
  }
  function mi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function So(n) {
    var r = wr(), i = r.queue;
    if (i === null)
      throw Error(m(311));
    i.lastRenderedReducer = n;
    var o = oe, f = o.baseQueue, v = i.pending;
    if (v !== null) {
      if (f !== null) {
        var D = f.next;
        f.next = v.next, v.next = D;
      }
      o.baseQueue = f = v, i.pending = null;
    }
    if (f !== null) {
      v = f.next, o = o.baseState;
      var w = D = null, N = null, J = v;
      do {
        var ye = J.lane;
        if ((di & ye) === ye)
          N !== null && (N = N.next = { lane: 0, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }), o = J.hasEagerState ? J.eagerState : n(o, J.action);
        else {
          var Ce = {
            lane: ye,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null
          };
          N === null ? (w = N = Ce, D = o) : N = N.next = Ce, Kt.lanes |= ye, ua |= ye;
        }
        J = J.next;
      } while (J !== null && J !== v);
      N === null ? D = o : N.next = w, Kr(o, r.memoizedState) || (Fn = !0), r.memoizedState = o, r.baseState = D, r.baseQueue = N, i.lastRenderedState = o;
    }
    if (n = i.interleaved, n !== null) {
      f = n;
      do
        v = f.lane, Kt.lanes |= v, ua |= v, f = f.next;
      while (f !== n);
    } else
      f === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function Ao(n) {
    var r = wr(), i = r.queue;
    if (i === null)
      throw Error(m(311));
    i.lastRenderedReducer = n;
    var o = i.dispatch, f = i.pending, v = r.memoizedState;
    if (f !== null) {
      i.pending = null;
      var D = f = f.next;
      do
        v = n(v, D.action), D = D.next;
      while (D !== f);
      Kr(v, r.memoizedState) || (Fn = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), i.lastRenderedState = v;
    }
    return [v, o];
  }
  function Vs() {
  }
  function qs(n, r) {
    var i = Kt, o = wr(), f = r(), v = !Kr(o.memoizedState, f);
    if (v && (o.memoizedState = f, Fn = !0), o = o.queue, Fo(Qs.bind(null, i, o, n), [n]), o.getSnapshot !== r || v || Tt !== null && Tt.memoizedState.tag & 1) {
      if (i.flags |= 2048, yi(9, Ys.bind(null, i, o, f, r), void 0, null), an === null)
        throw Error(m(349));
      di & 30 || Gs(i, r, f);
    }
    return f;
  }
  function Gs(n, r, i) {
    n.flags |= 16384, n = { getSnapshot: r, value: i }, r = Kt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kt.updateQueue = r, r.stores = [n]) : (i = r.stores, i === null ? r.stores = [n] : i.push(n));
  }
  function Ys(n, r, i, o) {
    r.value = i, r.getSnapshot = o, Ws(r) && Ks(n);
  }
  function Qs(n, r, i) {
    return i(function() {
      Ws(r) && Ks(n);
    });
  }
  function Ws(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var i = r();
      return !Kr(n, i);
    } catch {
      return !0;
    }
  }
  function Ks(n) {
    var r = Zu(n, 1);
    r !== null && ir(r, n, 1, -1);
  }
  function Xs(n) {
    var r = ru();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: mi, lastRenderedState: n }, r.queue = n, n = n.dispatch = uc.bind(null, Kt, n), [r.memoizedState, n];
  }
  function yi(n, r, i, o) {
    return n = { tag: n, create: r, destroy: i, deps: o, next: null }, r = Kt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kt.updateQueue = r, r.lastEffect = n.next = n) : (i = r.lastEffect, i === null ? r.lastEffect = n.next = n : (o = i.next, i.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Js() {
    return wr().memoizedState;
  }
  function gi(n, r, i, o) {
    var f = ru();
    Kt.flags |= n, f.memoizedState = yi(1 | r, i, void 0, o === void 0 ? null : o);
  }
  function ta(n, r, i, o) {
    var f = wr();
    o = o === void 0 ? null : o;
    var v = void 0;
    if (oe !== null) {
      var D = oe.memoizedState;
      if (v = D.destroy, o !== null && vi(o, D.deps)) {
        f.memoizedState = yi(r, i, v, o);
        return;
      }
    }
    Kt.flags |= n, f.memoizedState = yi(1 | r, i, v, o);
  }
  function Zs(n, r) {
    return gi(8390656, 8, n, r);
  }
  function Fo(n, r) {
    return ta(2048, 8, n, r);
  }
  function ec(n, r) {
    return ta(4, 2, n, r);
  }
  function tc(n, r) {
    return ta(4, 4, n, r);
  }
  function ld(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function sl(n, r, i) {
    return i = i != null ? i.concat([n]) : null, ta(4, 4, ld.bind(null, r, n), i);
  }
  function nc() {
  }
  function cl(n, r) {
    var i = wr();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    return o !== null && r !== null && vi(r, o[1]) ? o[0] : (i.memoizedState = [n, r], n);
  }
  function Ma(n, r) {
    var i = wr();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    return o !== null && r !== null && vi(r, o[1]) ? o[0] : (n = n(), i.memoizedState = [n, r], n);
  }
  function xr(n, r, i) {
    return di & 21 ? (Kr(i, r) || (i = ds(), Kt.lanes |= i, ua |= i, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Fn = !0), n.memoizedState = i);
  }
  function Bm(n, r) {
    var i = Lt;
    Lt = i !== 0 && 4 > i ? i : 4, n(!0);
    var o = id.transition;
    id.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = i, id.transition = o;
    }
  }
  function qt() {
    return wr().memoizedState;
  }
  function rc(n, r, i) {
    var o = Tn(n);
    if (i = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null }, fl(n))
      To(r, i);
    else if (i = Uv(n, r, i, o), i !== null) {
      var f = ar();
      ir(i, n, o, f), qv(i, r, o);
    }
  }
  function uc(n, r, i) {
    var o = Tn(n), f = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (fl(n))
      To(r, f);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null))
        try {
          var D = r.lastRenderedState, w = v(D, i);
          if (f.hasEagerState = !0, f.eagerState = w, Kr(w, D)) {
            var N = r.interleaved;
            N === null ? (f.next = f, td(r)) : (f.next = N.next, N.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      i = Uv(n, r, f, o), i !== null && (f = ar(), ir(i, n, o, f), qv(i, r, o));
    }
  }
  function fl(n) {
    var r = n.alternate;
    return n === Kt || r !== null && r === Kt;
  }
  function To(n, r) {
    Ou = st = !0;
    var i = n.pending;
    i === null ? r.next = r : (r.next = i.next, i.next = r), n.pending = r;
  }
  function qv(n, r, i) {
    if (i & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, i |= o, r.lanes = i, Kl(n, i);
    }
  }
  var ac = { readContext: gn, useCallback: Xt, useContext: Xt, useEffect: Xt, useImperativeHandle: Xt, useInsertionEffect: Xt, useLayoutEffect: Xt, useMemo: Xt, useReducer: Xt, useRef: Xt, useState: Xt, useDebugValue: Xt, useDeferredValue: Xt, useTransition: Xt, useMutableSource: Xt, useSyncExternalStore: Xt, useId: Xt, unstable_isNewReconciler: !1 }, _m = { readContext: gn, useCallback: function(n, r) {
    return ru().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: gn, useEffect: Zs, useImperativeHandle: function(n, r, i) {
    return i = i != null ? i.concat([n]) : null, gi(
      4194308,
      4,
      ld.bind(null, r, n),
      i
    );
  }, useLayoutEffect: function(n, r) {
    return gi(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return gi(4, 2, n, r);
  }, useMemo: function(n, r) {
    var i = ru();
    return r = r === void 0 ? null : r, n = n(), i.memoizedState = [n, r], n;
  }, useReducer: function(n, r, i) {
    var o = ru();
    return r = i !== void 0 ? i(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = rc.bind(null, Kt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ru();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xs, useDebugValue: nc, useDeferredValue: function(n) {
    return ru().memoizedState = n;
  }, useTransition: function() {
    var n = Xs(!1), r = n[0];
    return n = Bm.bind(null, n[1]), ru().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, i) {
    var o = Kt, f = ru();
    if (Wt) {
      if (i === void 0)
        throw Error(m(407));
      i = i();
    } else {
      if (i = r(), an === null)
        throw Error(m(349));
      di & 30 || Gs(o, r, i);
    }
    f.memoizedState = i;
    var v = { value: i, getSnapshot: r };
    return f.queue = v, Zs(Qs.bind(
      null,
      o,
      v,
      n
    ), [n]), o.flags |= 2048, yi(9, Ys.bind(null, o, v, i, r), void 0, null), i;
  }, useId: function() {
    var n = ru(), r = an.identifierPrefix;
    if (Wt) {
      var i = Ju, o = Hn;
      i = (o & ~(1 << 32 - Yr(o) - 1)).toString(32) + i, r = ":" + r + "R" + i, i = Pr++, 0 < i && (r += "H" + i.toString(32)), r += ":";
    } else
      i = pi++, r = ":" + r + "r" + i.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Om = {
    readContext: gn,
    useCallback: cl,
    useContext: gn,
    useEffect: Fo,
    useImperativeHandle: sl,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: Ma,
    useReducer: So,
    useRef: Js,
    useState: function() {
      return So(mi);
    },
    useDebugValue: nc,
    useDeferredValue: function(n) {
      var r = wr();
      return xr(r, oe.memoizedState, n);
    },
    useTransition: function() {
      var n = So(mi)[0], r = wr().memoizedState;
      return [n, r];
    },
    useMutableSource: Vs,
    useSyncExternalStore: qs,
    useId: qt,
    unstable_isNewReconciler: !1
  }, od = { readContext: gn, useCallback: cl, useContext: gn, useEffect: Fo, useImperativeHandle: sl, useInsertionEffect: ec, useLayoutEffect: tc, useMemo: Ma, useReducer: Ao, useRef: Js, useState: function() {
    return Ao(mi);
  }, useDebugValue: nc, useDeferredValue: function(n) {
    var r = wr();
    return oe === null ? r.memoizedState = n : xr(r, oe.memoizedState, n);
  }, useTransition: function() {
    var n = Ao(mi)[0], r = wr().memoizedState;
    return [n, r];
  }, useMutableSource: Vs, useSyncExternalStore: qs, useId: qt, unstable_isNewReconciler: !1 };
  function dl(n, r) {
    try {
      var i = "", o = r;
      do
        i += Ae(o), o = o.return;
      while (o);
      var f = i;
    } catch (v) {
      f = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function bo(n, r, i) {
    return { value: n, source: null, stack: i ?? null, digest: r ?? null };
  }
  function ic(n, r) {
    try {
      console.error(r.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var Nm = typeof WeakMap == "function" ? WeakMap : Map;
  function Gv(n, r, i) {
    i = ea(-1, i), i.tag = 3, i.payload = { element: null };
    var o = r.value;
    return i.callback = function() {
      pc || (pc = !0, Ai = o), ic(n, r);
    }, i;
  }
  function wo(n, r, i) {
    i = ea(-1, i), i.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = r.value;
      i.payload = function() {
        return o(f);
      }, i.callback = function() {
        ic(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
      ic(n, r), typeof o != "function" && (Mu === null ? Mu = /* @__PURE__ */ new Set([this]) : Mu.add(this));
      var D = r.stack;
      this.componentDidCatch(r.value, { componentStack: D !== null ? D : "" });
    }), i;
  }
  function Yv(n, r, i) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Nm();
      var f = /* @__PURE__ */ new Set();
      o.set(r, f);
    } else
      f = o.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(r, f));
    f.has(i) || (f.add(i), n = Pm.bind(null, n, r, i), r.then(n, n));
  }
  function sd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function cd(n, r, i, o, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (r = ea(-1, 1), r.tag = 2, _a(i, r, 1))), i.lanes |= 1), n);
  }
  var km = Je.ReactCurrentOwner, Fn = !1;
  function Rn(n, r, i, o) {
    r.child = n === null ? Vv(r, null, i, o) : ll(r, n.child, i, o);
  }
  function La(n, r, i, o, f) {
    i = i.render;
    var v = r.ref;
    return Re(r, f), o = ka(n, r, i, o, v, f), i = hi(), n !== null && !Fn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Vn(n, r, f)) : (Wt && i && Os(r), r.flags |= 1, Rn(n, r, o, f), r.child);
  }
  function lc(n, r, i, o, f) {
    if (n === null) {
      var v = i.type;
      return typeof v == "function" && !Rd(v) && v.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (r.tag = 15, r.type = v, Rr(n, r, v, o, f)) : (n = Dc(i.type, null, o, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, !(n.lanes & f)) {
      var D = v.memoizedProps;
      if (i = i.compare, i = i !== null ? i : lo, i(D, o) && n.ref === r.ref)
        return Vn(n, r, f);
    }
    return r.flags |= 1, n = Pa(v, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Rr(n, r, i, o, f) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (lo(v, o) && n.ref === r.ref)
        if (Fn = !1, r.pendingProps = o = v, (n.lanes & f) !== 0)
          n.flags & 131072 && (Fn = !0);
        else
          return r.lanes = n.lanes, Vn(n, r, f);
    }
    return pl(n, r, i, o, f);
  }
  function Di(n, r, i) {
    var o = r.pendingProps, f = o.children, v = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, kt(Dl, $r), $r |= i;
      else {
        if (!(i & 1073741824))
          return n = v !== null ? v.baseLanes | i : i, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, kt(Dl, $r), $r |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = v !== null ? v.baseLanes : i, kt(Dl, $r), $r |= o;
      }
    else
      v !== null ? (o = v.baseLanes | i, r.memoizedState = null) : o = i, kt(Dl, $r), $r |= o;
    return Rn(n, r, f, i), r.child;
  }
  function Et(n, r) {
    var i = r.ref;
    (n === null && i !== null || n !== null && n.ref !== i) && (r.flags |= 512, r.flags |= 2097152);
  }
  function pl(n, r, i, o, f) {
    var v = Zt(i) ? Sr : dt.current;
    return v = Jr(r, v), Re(r, f), i = ka(n, r, i, o, v, f), o = hi(), n !== null && !Fn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Vn(n, r, f)) : (Wt && o && Os(r), r.flags |= 1, Rn(n, r, i, f), r.child);
  }
  function fd(n, r, i, o, f) {
    if (Zt(i)) {
      var v = !0;
      _s(r);
    } else
      v = !1;
    if (Re(r, f), r.stateNode === null)
      nr(n, r), Pv(r, i, o), Ps(r, i, o, f), o = !0;
    else if (n === null) {
      var D = r.stateNode, w = r.memoizedProps;
      D.props = w;
      var N = D.context, J = i.contextType;
      typeof J == "object" && J !== null ? J = gn(J) : (J = Zt(i) ? Sr : dt.current, J = Jr(r, J));
      var ye = i.getDerivedStateFromProps, Ce = typeof ye == "function" || typeof D.getSnapshotBeforeUpdate == "function";
      Ce || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (w !== o || N !== J) && $v(r, D, o, J), Ba = !1;
      var me = r.memoizedState;
      D.state = me, Oa(r, o, D, f), N = r.memoizedState, w !== o || me !== N || vn.current || Ba ? (typeof ye == "function" && (ud(r, i, ye, o), N = r.memoizedState), (w = Ba || jv(r, i, w, o, me, N, J)) ? (Ce || typeof D.UNSAFE_componentWillMount != "function" && typeof D.componentWillMount != "function" || (typeof D.componentWillMount == "function" && D.componentWillMount(), typeof D.UNSAFE_componentWillMount == "function" && D.UNSAFE_componentWillMount()), typeof D.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof D.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = N), D.props = o, D.state = N, D.context = J, o = w) : (typeof D.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      D = r.stateNode, xn(n, r), w = r.memoizedProps, J = r.type === r.elementType ? w : jr(r.type, w), D.props = J, Ce = r.pendingProps, me = D.context, N = i.contextType, typeof N == "object" && N !== null ? N = gn(N) : (N = Zt(i) ? Sr : dt.current, N = Jr(r, N));
      var Me = i.getDerivedStateFromProps;
      (ye = typeof Me == "function" || typeof D.getSnapshotBeforeUpdate == "function") || typeof D.UNSAFE_componentWillReceiveProps != "function" && typeof D.componentWillReceiveProps != "function" || (w !== Ce || me !== N) && $v(r, D, o, N), Ba = !1, me = r.memoizedState, D.state = me, Oa(r, o, D, f);
      var Ve = r.memoizedState;
      w !== Ce || me !== Ve || vn.current || Ba ? (typeof Me == "function" && (ud(r, i, Me, o), Ve = r.memoizedState), (J = Ba || jv(r, i, J, o, me, Ve, N) || !1) ? (ye || typeof D.UNSAFE_componentWillUpdate != "function" && typeof D.componentWillUpdate != "function" || (typeof D.componentWillUpdate == "function" && D.componentWillUpdate(o, Ve, N), typeof D.UNSAFE_componentWillUpdate == "function" && D.UNSAFE_componentWillUpdate(o, Ve, N)), typeof D.componentDidUpdate == "function" && (r.flags |= 4), typeof D.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof D.componentDidUpdate != "function" || w === n.memoizedProps && me === n.memoizedState || (r.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && me === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ve), D.props = o, D.state = Ve, D.context = N, o = J) : (typeof D.componentDidUpdate != "function" || w === n.memoizedProps && me === n.memoizedState || (r.flags |= 4), typeof D.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && me === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Qv(n, r, i, o, v, f);
  }
  function Qv(n, r, i, o, f, v) {
    Et(n, r);
    var D = (r.flags & 128) !== 0;
    if (!o && !D)
      return f && Nv(r, i, !1), Vn(n, r, v);
    o = r.stateNode, km.current = r;
    var w = D && typeof i.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && D ? (r.child = ll(r, n.child, null, v), r.child = ll(r, null, w, v)) : Rn(n, r, w, v), r.memoizedState = o.state, f && Nv(r, i, !0), r.child;
  }
  function Wv(n) {
    var r = n.stateNode;
    r.pendingContext ? ba(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ba(n, r.context, !1), ad(n, r.containerInfo);
  }
  function oc(n, r, i, o, f) {
    return rn(), Jf(f), r.flags |= 256, Rn(n, r, i, o), r.child;
  }
  var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function dd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function pd(n, r, i) {
    var o = r.pendingProps, f = ot.current, v = !1, D = (r.flags & 128) !== 0, w;
    if ((w = D) || (w = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), w ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), kt(ot, f & 1), n === null)
      return ks(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (D = o.children, n = o.fallback, v ? (o = r.mode, v = r.child, D = { mode: "hidden", children: D }, !(o & 1) && v !== null ? (v.childLanes = 0, v.pendingProps = D) : v = Uo(D, o, 0, null), n = xi(n, o, i, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = dd(i), r.memoizedState = Ei, n) : vd(r, D));
    if (f = n.memoizedState, f !== null && (w = f.dehydrated, w !== null))
      return Mm(n, r, D, o, w, f, i);
    if (v) {
      v = o.fallback, D = r.mode, f = n.child, w = f.sibling;
      var N = { mode: "hidden", children: o.children };
      return !(D & 1) && r.child !== f ? (o = r.child, o.childLanes = 0, o.pendingProps = N, r.deletions = null) : (o = Pa(f, N), o.subtreeFlags = f.subtreeFlags & 14680064), w !== null ? v = Pa(w, v) : (v = xi(v, D, i, null), v.flags |= 2), v.return = r, o.return = r, o.sibling = v, r.child = o, o = v, v = r.child, D = n.child.memoizedState, D = D === null ? dd(i) : { baseLanes: D.baseLanes | i, cachePool: null, transitions: D.transitions }, v.memoizedState = D, v.childLanes = n.childLanes & ~i, r.memoizedState = Ei, o;
    }
    return v = n.child, n = v.sibling, o = Pa(v, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = i), o.return = r, o.sibling = null, n !== null && (i = r.deletions, i === null ? (r.deletions = [n], r.flags |= 16) : i.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function vd(n, r) {
    return r = Uo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function vl(n, r, i, o) {
    return o !== null && Jf(o), ll(r, n.child, null, i), n = vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Mm(n, r, i, o, f, v, D) {
    if (i)
      return r.flags & 256 ? (r.flags &= -257, o = bo(Error(m(422))), vl(n, r, D, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = o.fallback, f = r.mode, o = Uo({ mode: "visible", children: o.children }, f, 0, null), v = xi(v, f, D, null), v.flags |= 2, o.return = r, v.return = r, o.sibling = v, r.child = o, r.mode & 1 && ll(r, n.child, null, D), r.child.memoizedState = dd(D), r.memoizedState = Ei, v);
    if (!(r.mode & 1))
      return vl(n, r, D, null);
    if (f.data === "$!") {
      if (o = f.nextSibling && f.nextSibling.dataset, o)
        var w = o.dgst;
      return o = w, v = Error(m(419)), o = bo(v, o, void 0), vl(n, r, D, o);
    }
    if (w = (D & n.childLanes) !== 0, Fn || w) {
      if (o = an, o !== null) {
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
        f = f & (o.suspendedLanes | D) ? 0 : f, f !== 0 && f !== v.retryLane && (v.retryLane = f, Zu(n, f), ir(o, n, f, -1));
      }
      return bd(), o = bo(Error(m(421))), vl(n, r, D, o);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = $m.bind(null, n), f._reactRetry = r, null) : (n = v.treeContext, br = Cu(f.nextSibling), zr = r, Wt = !0, tu = null, n !== null && (Tr[tr++] = Hn, Tr[tr++] = Ju, Tr[tr++] = eu, Hn = n.id, Ju = n.overflow, eu = r), r = vd(r, o.children), r.flags |= 4096, r);
  }
  function hd(n, r, i) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Un(n.return, r, i);
  }
  function sc(n, r, i, o, f) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: i, tailMode: f } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = i, v.tailMode = f);
  }
  function md(n, r, i) {
    var o = r.pendingProps, f = o.revealOrder, v = o.tail;
    if (Rn(n, r, o.children, i), o = ot.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && hd(n, i, r);
            else if (n.tag === 19)
              hd(n, i, r);
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
    if (kt(ot, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (i = r.child, f = null; i !== null; )
            n = i.alternate, n !== null && un(n) === null && (f = i), i = i.sibling;
          i = f, i === null ? (f = r.child, r.child = null) : (f = i.sibling, i.sibling = null), sc(r, !1, f, i, v);
          break;
        case "backwards":
          for (i = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && un(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = i, i = f, f = n;
          }
          sc(r, !0, i, null, v);
          break;
        case "together":
          sc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function nr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Vn(n, r, i) {
    if (n !== null && (r.dependencies = n.dependencies), ua |= r.lanes, !(i & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, i = Pa(n, n.pendingProps), r.child = i, i.return = r; n.sibling !== null; )
        n = n.sibling, i = i.sibling = Pa(n, n.pendingProps), i.return = r;
      i.sibling = null;
    }
    return r.child;
  }
  function na(n, r, i) {
    switch (r.tag) {
      case 3:
        Wv(r), rn();
        break;
      case 5:
        lt(r);
        break;
      case 1:
        Zt(r.type) && _s(r);
        break;
      case 4:
        ad(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, f = r.memoizedProps.value;
        kt(_u, o._currentValue), o._currentValue = f;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (kt(ot, ot.current & 1), r.flags |= 128, null) : i & r.child.childLanes ? pd(n, r, i) : (kt(ot, ot.current & 1), n = Vn(n, r, i), n !== null ? n.sibling : null);
        kt(ot, ot.current & 1);
        break;
      case 19:
        if (o = (i & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return md(n, r, i);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), kt(ot, ot.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Di(n, r, i);
    }
    return Vn(n, r, i);
  }
  var xo, Ci, uu, Bn;
  xo = function(n, r) {
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
  }, Ci = function() {
  }, uu = function(n, r, i, o) {
    var f = n.memoizedProps;
    if (f !== o) {
      n = r.stateNode, fi(Su.current);
      var v = null;
      switch (i) {
        case "input":
          f = _e(n, f), o = _e(n, o), v = [];
          break;
        case "select":
          f = P({}, f, { value: void 0 }), o = P({}, o, { value: void 0 }), v = [];
          break;
        case "textarea":
          f = or(n, f), o = or(n, o), v = [];
          break;
        default:
          typeof f.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Bs);
      }
      nn(i, o);
      var D;
      i = null;
      for (J in f)
        if (!o.hasOwnProperty(J) && f.hasOwnProperty(J) && f[J] != null)
          if (J === "style") {
            var w = f[J];
            for (D in w)
              w.hasOwnProperty(D) && (i || (i = {}), i[D] = "");
          } else
            J !== "dangerouslySetInnerHTML" && J !== "children" && J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && J !== "autoFocus" && (R.hasOwnProperty(J) ? v || (v = []) : (v = v || []).push(J, null));
      for (J in o) {
        var N = o[J];
        if (w = f != null ? f[J] : void 0, o.hasOwnProperty(J) && N !== w && (N != null || w != null))
          if (J === "style")
            if (w) {
              for (D in w)
                !w.hasOwnProperty(D) || N && N.hasOwnProperty(D) || (i || (i = {}), i[D] = "");
              for (D in N)
                N.hasOwnProperty(D) && w[D] !== N[D] && (i || (i = {}), i[D] = N[D]);
            } else
              i || (v || (v = []), v.push(
                J,
                i
              )), i = N;
          else
            J === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, w = w ? w.__html : void 0, N != null && w !== N && (v = v || []).push(J, N)) : J === "children" ? typeof N != "string" && typeof N != "number" || (v = v || []).push(J, "" + N) : J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && (R.hasOwnProperty(J) ? (N != null && J === "onScroll" && Vt("scroll", n), v || w === N || (v = [])) : (v = v || []).push(J, N));
      }
      i && (v = v || []).push("style", i);
      var J = v;
      (r.updateQueue = J) && (r.flags |= 4);
    }
  }, Bn = function(n, r, i, o) {
    i !== o && (r.flags |= 4);
  };
  function Ro(n, r) {
    if (!Wt)
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
  function rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, i = 0, o = 0;
    if (r)
      for (var f = n.child; f !== null; )
        i |= f.lanes | f.childLanes, o |= f.subtreeFlags & 14680064, o |= f.flags & 14680064, f.return = n, f = f.sibling;
    else
      for (f = n.child; f !== null; )
        i |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= o, n.childLanes = i, r;
  }
  function Lm(n, r, i) {
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
        return rr(r), null;
      case 1:
        return Zt(r.type) && Zr(), rr(r), null;
      case 3:
        return o = r.stateNode, Na(), Nt(vn), Nt(dt), Hs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ms(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, tu !== null && (Lo(tu), tu = null))), Ci(n, r), rr(r), null;
      case 5:
        Ct(r);
        var f = fi(ol.current);
        if (i = r.type, n !== null && r.stateNode != null)
          uu(n, r, i, o, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(m(166));
            return rr(r), null;
          }
          if (n = fi(Su.current), Ms(r)) {
            o = r.stateNode, i = r.type;
            var v = r.memoizedProps;
            switch (o[Ru] = r, o[oi] = v, n = (r.mode & 1) !== 0, i) {
              case "dialog":
                Vt("cancel", o), Vt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", o);
                break;
              case "video":
              case "audio":
                for (f = 0; f < fo.length; f++)
                  Vt(fo[f], o);
                break;
              case "source":
                Vt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Vt(
                  "error",
                  o
                ), Vt("load", o);
                break;
              case "details":
                Vt("toggle", o);
                break;
              case "input":
                at(o, v), Vt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!v.multiple }, Vt("invalid", o);
                break;
              case "textarea":
                yn(o, v), Vt("invalid", o);
            }
            nn(i, v), f = null;
            for (var D in v)
              if (v.hasOwnProperty(D)) {
                var w = v[D];
                D === "children" ? typeof w == "string" ? o.textContent !== w && (v.suppressHydrationWarning !== !0 && Rs(o.textContent, w, n), f = ["children", w]) : typeof w == "number" && o.textContent !== "" + w && (v.suppressHydrationWarning !== !0 && Rs(
                  o.textContent,
                  w,
                  n
                ), f = ["children", "" + w]) : R.hasOwnProperty(D) && w != null && D === "onScroll" && Vt("scroll", o);
              }
            switch (i) {
              case "input":
                G(o), Gt(o, v, !0);
                break;
              case "textarea":
                G(o), W(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (o.onclick = Bs);
            }
            o = f, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            D = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Te(i)), n === "http://www.w3.org/1999/xhtml" ? i === "script" ? (n = D.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = D.createElement(i, { is: o.is }) : (n = D.createElement(i), i === "select" && (D = n, o.multiple ? D.multiple = !0 : o.size && (D.size = o.size))) : n = D.createElementNS(n, i), n[Ru] = r, n[oi] = o, xo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (D = Yt(i, o), i) {
                case "dialog":
                  Vt("cancel", n), Vt("close", n), f = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n), f = o;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < fo.length; f++)
                    Vt(fo[f], n);
                  f = o;
                  break;
                case "source":
                  Vt("error", n), f = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt(
                    "error",
                    n
                  ), Vt("load", n), f = o;
                  break;
                case "details":
                  Vt("toggle", n), f = o;
                  break;
                case "input":
                  at(n, o), f = _e(n, o), Vt("invalid", n);
                  break;
                case "option":
                  f = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, f = P({}, o, { value: void 0 }), Vt("invalid", n);
                  break;
                case "textarea":
                  yn(n, o), f = or(n, o), Vt("invalid", n);
                  break;
                default:
                  f = o;
              }
              nn(i, f), w = f;
              for (v in w)
                if (w.hasOwnProperty(v)) {
                  var N = w[v];
                  v === "style" ? gt(n, N) : v === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && yt(n, N)) : v === "children" ? typeof N == "string" ? (i !== "textarea" || N !== "") && ct(n, N) : typeof N == "number" && ct(n, "" + N) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (R.hasOwnProperty(v) ? N != null && v === "onScroll" && Vt("scroll", n) : N != null && et(n, v, N, D));
                }
              switch (i) {
                case "input":
                  G(n), Gt(n, o, !1);
                  break;
                case "textarea":
                  G(n), W(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + F(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, v = o.value, v != null ? cn(n, !!o.multiple, v, !1) : o.defaultValue != null && cn(
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
        return rr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Bn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(m(166));
          if (i = fi(ol.current), fi(Su.current), Ms(r)) {
            if (o = r.stateNode, i = r.memoizedProps, o[Ru] = r, (v = o.nodeValue !== i) && (n = zr, n !== null))
              switch (n.tag) {
                case 3:
                  Rs(o.nodeValue, i, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Rs(o.nodeValue, i, (n.mode & 1) !== 0);
              }
            v && (r.flags |= 4);
          } else
            o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o), o[Ru] = r, r.stateNode = o;
        }
        return rr(r), null;
      case 13:
        if (Nt(ot), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Wt && br !== null && r.mode & 1 && !(r.flags & 128))
            Lv(), rn(), r.flags |= 98560, v = !1;
          else if (v = Ms(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!v)
                throw Error(m(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v)
                throw Error(m(317));
              v[Ru] = r;
            } else
              rn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            rr(r), v = !1;
          } else
            tu !== null && (Lo(tu), tu = null), v = !0;
          if (!v)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = i, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || ot.current & 1 ? On === 0 && (On = 3) : bd())), r.updateQueue !== null && (r.flags |= 4), rr(r), null);
      case 4:
        return Na(), Ci(n, r), n === null && rl(r.stateNode.containerInfo), rr(r), null;
      case 10:
        return Ra(r.type._context), rr(r), null;
      case 17:
        return Zt(r.type) && Zr(), rr(r), null;
      case 19:
        if (Nt(ot), v = r.memoizedState, v === null)
          return rr(r), null;
        if (o = (r.flags & 128) !== 0, D = v.rendering, D === null)
          if (o)
            Ro(v, !1);
          else {
            if (On !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (D = un(n), D !== null) {
                  for (r.flags |= 128, Ro(v, !1), o = D.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = i, i = r.child; i !== null; )
                    v = i, n = o, v.flags &= 14680066, D = v.alternate, D === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = D.childLanes, v.lanes = D.lanes, v.child = D.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = D.memoizedProps, v.memoizedState = D.memoizedState, v.updateQueue = D.updateQueue, v.type = D.type, n = D.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), i = i.sibling;
                  return kt(ot, ot.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            v.tail !== null && pn() > Cl && (r.flags |= 128, o = !0, Ro(v, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = un(D), n !== null) {
              if (r.flags |= 128, o = !0, i = n.updateQueue, i !== null && (r.updateQueue = i, r.flags |= 4), Ro(v, !0), v.tail === null && v.tailMode === "hidden" && !D.alternate && !Wt)
                return rr(r), null;
            } else
              2 * pn() - v.renderingStartTime > Cl && i !== 1073741824 && (r.flags |= 128, o = !0, Ro(v, !1), r.lanes = 4194304);
          v.isBackwards ? (D.sibling = r.child, r.child = D) : (i = v.last, i !== null ? i.sibling = D : r.child = D, v.last = D);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = pn(), r.sibling = null, i = ot.current, kt(ot, o ? i & 1 | 2 : i & 1), r) : (rr(r), null);
      case 22:
      case 23:
        return Td(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? $r & 1073741824 && (rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function yd(n, r) {
    switch (Kf(r), r.tag) {
      case 1:
        return Zt(r.type) && Zr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Na(), Nt(vn), Nt(dt), Hs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ct(r), null;
      case 13:
        if (Nt(ot), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          rn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Nt(ot), null;
      case 4:
        return Na(), null;
      case 10:
        return Ra(r.type._context), null;
      case 22:
      case 23:
        return Td(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bo = !1, _n = !1, Kv = typeof WeakSet == "function" ? WeakSet : Set, He = null;
  function hl(n, r) {
    var i = n.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (o) {
          mn(n, r, o);
        }
      else
        i.current = null;
  }
  function _o(n, r, i) {
    try {
      i();
    } catch (o) {
      mn(n, r, o);
    }
  }
  var Xv = !1;
  function Jv(n, r) {
    if (Hf = ti, n = Fs(), Qu(n)) {
      if ("selectionStart" in n)
        var i = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          i = (i = n.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var f = o.anchorOffset, v = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, v.nodeType;
            } catch {
              i = null;
              break e;
            }
            var D = 0, w = -1, N = -1, J = 0, ye = 0, Ce = n, me = null;
            t:
              for (; ; ) {
                for (var Me; Ce !== i || f !== 0 && Ce.nodeType !== 3 || (w = D + f), Ce !== v || o !== 0 && Ce.nodeType !== 3 || (N = D + o), Ce.nodeType === 3 && (D += Ce.nodeValue.length), (Me = Ce.firstChild) !== null; )
                  me = Ce, Ce = Me;
                for (; ; ) {
                  if (Ce === n)
                    break t;
                  if (me === i && ++J === f && (w = D), me === v && ++ye === o && (N = D), (Me = Ce.nextSibling) !== null)
                    break;
                  Ce = me, me = Ce.parentNode;
                }
                Ce = Me;
              }
            i = w === -1 || N === -1 ? null : { start: w, end: N };
          } else
            i = null;
        }
      i = i || { start: 0, end: 0 };
    } else
      i = null;
    for (ii = { focusedElem: n, selectionRange: i }, ti = !1, He = r; He !== null; )
      if (r = He, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, He = n;
      else
        for (; He !== null; ) {
          r = He;
          try {
            var Ve = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ve !== null) {
                    var We = Ve.memoizedProps, Dn = Ve.memoizedState, I = r.stateNode, M = I.getSnapshotBeforeUpdate(r.elementType === r.type ? We : jr(r.type, We), Dn);
                    I.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var Y = r.stateNode.containerInfo;
                  Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (Fe) {
            mn(r, r.return, Fe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, He = n;
            break;
          }
          He = r.return;
        }
    return Ve = Xv, Xv = !1, Ve;
  }
  function Oo(n, r, i) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var f = o = o.next;
      do {
        if ((f.tag & n) === n) {
          var v = f.destroy;
          f.destroy = void 0, v !== void 0 && _o(r, i, v);
        }
        f = f.next;
      } while (f !== o);
    }
  }
  function No(n, r) {
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
  function gd(n) {
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
  function Dd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Dd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ru], delete r[oi], delete r[qf], delete r[Rm], delete r[Gf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Zv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function cc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Zv(n.return))
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
  function ml(n, r, i) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? i.nodeType === 8 ? i.parentNode.insertBefore(n, r) : i.insertBefore(n, r) : (i.nodeType === 8 ? (r = i.parentNode, r.insertBefore(n, i)) : (r = i, r.appendChild(n)), i = i._reactRootContainer, i != null || r.onclick !== null || (r.onclick = Bs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (ml(n, r, i), n = n.sibling; n !== null; )
        ml(n, r, i), n = n.sibling;
  }
  function Nu(n, r, i) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? i.insertBefore(n, r) : i.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Nu(n, r, i), n = n.sibling; n !== null; )
        Nu(n, r, i), n = n.sibling;
  }
  var en = null, zn = !1;
  function au(n, r, i) {
    for (i = i.child; i !== null; )
      yl(n, r, i), i = i.sibling;
  }
  function yl(n, r, i) {
    if (mu && typeof mu.onCommitFiberUnmount == "function")
      try {
        mu.onCommitFiberUnmount(Wl, i);
      } catch {
      }
    switch (i.tag) {
      case 5:
        _n || hl(i, r);
      case 6:
        var o = en, f = zn;
        en = null, au(n, r, i), en = o, zn = f, en !== null && (zn ? (n = en, i = i.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(i) : n.removeChild(i)) : en.removeChild(i.stateNode));
        break;
      case 18:
        en !== null && (zn ? (n = en, i = i.stateNode, n.nodeType === 8 ? Aa(n.parentNode, i) : n.nodeType === 1 && Aa(n, i), eo(n)) : Aa(en, i.stateNode));
        break;
      case 4:
        o = en, f = zn, en = i.stateNode.containerInfo, zn = !0, au(n, r, i), en = o, zn = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_n && (o = i.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          f = o = o.next;
          do {
            var v = f, D = v.destroy;
            v = v.tag, D !== void 0 && (v & 2 || v & 4) && _o(i, r, D), f = f.next;
          } while (f !== o);
        }
        au(n, r, i);
        break;
      case 1:
        if (!_n && (hl(i, r), o = i.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = i.memoizedProps, o.state = i.memoizedState, o.componentWillUnmount();
          } catch (w) {
            mn(i, r, w);
          }
        au(n, r, i);
        break;
      case 21:
        au(n, r, i);
        break;
      case 22:
        i.mode & 1 ? (_n = (o = _n) || i.memoizedState !== null, au(n, r, i), _n = o) : au(n, r, i);
        break;
      default:
        au(n, r, i);
    }
  }
  function ra(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var i = n.stateNode;
      i === null && (i = n.stateNode = new Kv()), r.forEach(function(o) {
        var f = Hm.bind(null, n, o);
        i.has(o) || (i.add(o), o.then(f, f));
      });
    }
  }
  function Au(n, r) {
    var i = r.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var f = i[o];
        try {
          var v = n, D = r, w = D;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  en = w.stateNode, zn = !1;
                  break e;
                case 3:
                  en = w.stateNode.containerInfo, zn = !0;
                  break e;
                case 4:
                  en = w.stateNode.containerInfo, zn = !0;
                  break e;
              }
              w = w.return;
            }
          if (en === null)
            throw Error(m(160));
          yl(v, D, f), en = null, zn = !1;
          var N = f.alternate;
          N !== null && (N.return = null), f.return = null;
        } catch (J) {
          mn(f, r, J);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        eh(r, n), r = r.sibling;
  }
  function eh(n, r) {
    var i = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Au(r, n), ku(n), o & 4) {
          try {
            Oo(3, n, n.return), No(3, n);
          } catch (We) {
            mn(n, n.return, We);
          }
          try {
            Oo(5, n, n.return);
          } catch (We) {
            mn(n, n.return, We);
          }
        }
        break;
      case 1:
        Au(r, n), ku(n), o & 512 && i !== null && hl(i, i.return);
        break;
      case 5:
        if (Au(r, n), ku(n), o & 512 && i !== null && hl(i, i.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            ct(f, "");
          } catch (We) {
            mn(n, n.return, We);
          }
        }
        if (o & 4 && (f = n.stateNode, f != null)) {
          var v = n.memoizedProps, D = i !== null ? i.memoizedProps : v, w = n.type, N = n.updateQueue;
          if (n.updateQueue = null, N !== null)
            try {
              w === "input" && v.type === "radio" && v.name != null && Rt(f, v), Yt(w, D);
              var J = Yt(w, v);
              for (D = 0; D < N.length; D += 2) {
                var ye = N[D], Ce = N[D + 1];
                ye === "style" ? gt(f, Ce) : ye === "dangerouslySetInnerHTML" ? yt(f, Ce) : ye === "children" ? ct(f, Ce) : et(f, ye, Ce, J);
              }
              switch (w) {
                case "input":
                  tn(f, v);
                  break;
                case "textarea":
                  U(f, v);
                  break;
                case "select":
                  var me = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!v.multiple;
                  var Me = v.value;
                  Me != null ? cn(f, !!v.multiple, Me, !1) : me !== !!v.multiple && (v.defaultValue != null ? cn(
                    f,
                    !!v.multiple,
                    v.defaultValue,
                    !0
                  ) : cn(f, !!v.multiple, v.multiple ? [] : "", !1));
              }
              f[oi] = v;
            } catch (We) {
              mn(n, n.return, We);
            }
        }
        break;
      case 6:
        if (Au(r, n), ku(n), o & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          f = n.stateNode, v = n.memoizedProps;
          try {
            f.nodeValue = v;
          } catch (We) {
            mn(n, n.return, We);
          }
        }
        break;
      case 3:
        if (Au(r, n), ku(n), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            eo(r.containerInfo);
          } catch (We) {
            mn(n, n.return, We);
          }
        break;
      case 4:
        Au(r, n), ku(n);
        break;
      case 13:
        Au(r, n), ku(n), f = n.child, f.flags & 8192 && (v = f.memoizedState !== null, f.stateNode.isHidden = v, !v || f.alternate !== null && f.alternate.memoizedState !== null || (Sd = pn())), o & 4 && ra(n);
        break;
      case 22:
        if (ye = i !== null && i.memoizedState !== null, n.mode & 1 ? (_n = (J = _n) || ye, Au(r, n), _n = J) : Au(r, n), ku(n), o & 8192) {
          if (J = n.memoizedState !== null, (n.stateNode.isHidden = J) && !ye && n.mode & 1)
            for (He = n, ye = n.child; ye !== null; ) {
              for (Ce = He = ye; He !== null; ) {
                switch (me = He, Me = me.child, me.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Oo(4, me, me.return);
                    break;
                  case 1:
                    hl(me, me.return);
                    var Ve = me.stateNode;
                    if (typeof Ve.componentWillUnmount == "function") {
                      o = me, i = me.return;
                      try {
                        r = o, Ve.props = r.memoizedProps, Ve.state = r.memoizedState, Ve.componentWillUnmount();
                      } catch (We) {
                        mn(o, i, We);
                      }
                    }
                    break;
                  case 5:
                    hl(me, me.return);
                    break;
                  case 22:
                    if (me.memoizedState !== null) {
                      Ed(Ce);
                      continue;
                    }
                }
                Me !== null ? (Me.return = me, He = Me) : Ed(Ce);
              }
              ye = ye.sibling;
            }
          e:
            for (ye = null, Ce = n; ; ) {
              if (Ce.tag === 5) {
                if (ye === null) {
                  ye = Ce;
                  try {
                    f = Ce.stateNode, J ? (v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (w = Ce.stateNode, N = Ce.memoizedProps.style, D = N != null && N.hasOwnProperty("display") ? N.display : null, w.style.display = nt("display", D));
                  } catch (We) {
                    mn(n, n.return, We);
                  }
                }
              } else if (Ce.tag === 6) {
                if (ye === null)
                  try {
                    Ce.stateNode.nodeValue = J ? "" : Ce.memoizedProps;
                  } catch (We) {
                    mn(n, n.return, We);
                  }
              } else if ((Ce.tag !== 22 && Ce.tag !== 23 || Ce.memoizedState === null || Ce === n) && Ce.child !== null) {
                Ce.child.return = Ce, Ce = Ce.child;
                continue;
              }
              if (Ce === n)
                break e;
              for (; Ce.sibling === null; ) {
                if (Ce.return === null || Ce.return === n)
                  break e;
                ye === Ce && (ye = null), Ce = Ce.return;
              }
              ye === Ce && (ye = null), Ce.sibling.return = Ce.return, Ce = Ce.sibling;
            }
        }
        break;
      case 19:
        Au(r, n), ku(n), o & 4 && ra(n);
        break;
      case 21:
        break;
      default:
        Au(
          r,
          n
        ), ku(n);
    }
  }
  function ku(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var i = n.return; i !== null; ) {
            if (Zv(i)) {
              var o = i;
              break e;
            }
            i = i.return;
          }
          throw Error(m(160));
        }
        switch (o.tag) {
          case 5:
            var f = o.stateNode;
            o.flags & 32 && (ct(f, ""), o.flags &= -33);
            var v = cc(n);
            Nu(n, v, f);
            break;
          case 3:
          case 4:
            var D = o.stateNode.containerInfo, w = cc(n);
            ml(n, w, D);
            break;
          default:
            throw Error(m(161));
        }
      } catch (N) {
        mn(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function th(n, r, i) {
    He = n, gl(n);
  }
  function gl(n, r, i) {
    for (var o = (n.mode & 1) !== 0; He !== null; ) {
      var f = He, v = f.child;
      if (f.tag === 22 && o) {
        var D = f.memoizedState !== null || Bo;
        if (!D) {
          var w = f.alternate, N = w !== null && w.memoizedState !== null || _n;
          w = Bo;
          var J = _n;
          if (Bo = D, (_n = N) && !J)
            for (He = f; He !== null; )
              D = He, N = D.child, D.tag === 22 && D.memoizedState !== null ? rh(f) : N !== null ? (N.return = D, He = N) : rh(f);
          for (; v !== null; )
            He = v, gl(v), v = v.sibling;
          He = f, Bo = w, _n = J;
        }
        nh(n);
      } else
        f.subtreeFlags & 8772 && v !== null ? (v.return = f, He = v) : nh(n);
    }
  }
  function nh(n) {
    for (; He !== null; ) {
      var r = He;
      if (r.flags & 8772) {
        var i = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                _n || No(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !_n)
                  if (i === null)
                    o.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? i.memoizedProps : jr(r.type, i.memoizedProps);
                    o.componentDidUpdate(f, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var v = r.updateQueue;
                v !== null && ci(r, v, o);
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
                  ci(r, D, i);
                }
                break;
              case 5:
                var w = r.stateNode;
                if (i === null && r.flags & 4) {
                  i = w;
                  var N = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && i.focus();
                      break;
                    case "img":
                      N.src && (i.src = N.src);
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
                  var J = r.alternate;
                  if (J !== null) {
                    var ye = J.memoizedState;
                    if (ye !== null) {
                      var Ce = ye.dehydrated;
                      Ce !== null && eo(Ce);
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
                throw Error(m(163));
            }
          _n || r.flags & 512 && gd(r);
        } catch (me) {
          mn(r, r.return, me);
        }
      }
      if (r === n) {
        He = null;
        break;
      }
      if (i = r.sibling, i !== null) {
        i.return = r.return, He = i;
        break;
      }
      He = r.return;
    }
  }
  function Ed(n) {
    for (; He !== null; ) {
      var r = He;
      if (r === n) {
        He = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, He = i;
        break;
      }
      He = r.return;
    }
  }
  function rh(n) {
    for (; He !== null; ) {
      var r = He;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              No(4, r);
            } catch (N) {
              mn(r, i, N);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var f = r.return;
              try {
                o.componentDidMount();
              } catch (N) {
                mn(r, f, N);
              }
            }
            var v = r.return;
            try {
              gd(r);
            } catch (N) {
              mn(r, v, N);
            }
            break;
          case 5:
            var D = r.return;
            try {
              gd(r);
            } catch (N) {
              mn(r, D, N);
            }
        }
      } catch (N) {
        mn(r, r.return, N);
      }
      if (r === n) {
        He = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, He = w;
        break;
      }
      He = r.return;
    }
  }
  var fc = Math.ceil, ko = Je.ReactCurrentDispatcher, Cd = Je.ReactCurrentOwner, ur = Je.ReactCurrentBatchConfig, At = 0, an = null, hn = null, jn = 0, $r = 0, Dl = Dt(0), On = 0, Mo = null, ua = 0, dc = 0, El = 0, Si = null, cr = null, Sd = 0, Cl = 1 / 0, aa = null, pc = !1, Ai = null, Mu = null, Ua = !1, za = null, vc = 0, Sl = 0, hc = null, Fi = -1, Ti = 0;
  function ar() {
    return At & 6 ? pn() : Fi !== -1 ? Fi : Fi = pn();
  }
  function Tn(n) {
    return n.mode & 1 ? At & 2 && jn !== 0 ? jn & -jn : Ls.transition !== null ? (Ti === 0 && (Ti = ds()), Ti) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Sf(n.type)), n) : 1;
  }
  function ir(n, r, i, o) {
    if (50 < Sl)
      throw Sl = 0, hc = null, Error(m(185));
    ei(n, i, o), (!(At & 2) || n !== an) && (n === an && (!(At & 2) && (dc |= i), On === 4 && iu(n, jn)), lr(n, o), i === 1 && At === 0 && !(r.mode & 1) && (Cl = pn() + 500, Ln && Ar()));
  }
  function lr(n, r) {
    var i = n.callbackNode;
    fs(n, r);
    var o = yu(n, n === an ? jn : 0);
    if (o === 0)
      i !== null && Vp(i), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (i != null && Vp(i), r === 1)
        n.tag === 0 ? Qf(uh.bind(null, n)) : Yf(uh.bind(null, n)), Vf(function() {
          !(At & 6) && Ar();
        }), i = null;
      else {
        switch (Df(o)) {
          case 1:
            i = Vu;
            break;
          case 4:
            i = St;
            break;
          case 16:
            i = ga;
            break;
          case 536870912:
            i = hf;
            break;
          default:
            i = ga;
        }
        i = xd(i, Al.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = i;
    }
  }
  function Al(n, r) {
    if (Fi = -1, Ti = 0, At & 6)
      throw Error(m(327));
    var i = n.callbackNode;
    if (Tl() && n.callbackNode !== i)
      return null;
    var o = yu(n, n === an ? jn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = yc(n, o);
    else {
      r = o;
      var f = At;
      At |= 2;
      var v = mc();
      (an !== n || jn !== r) && (aa = null, Cl = pn() + 500, bi(n, r));
      do
        try {
          zm();
          break;
        } catch (w) {
          ah(n, w);
        }
      while (1);
      ed(), ko.current = v, At = f, hn !== null ? r = 0 : (an = null, jn = 0, r = On);
    }
    if (r !== 0) {
      if (r === 2 && (f = yf(n), f !== 0 && (o = f, r = Ad(n, f))), r === 1)
        throw i = Mo, bi(n, 0), iu(n, o), lr(n, pn()), i;
      if (r === 6)
        iu(n, o);
      else {
        if (f = n.current.alternate, !(o & 30) && !Fd(f) && (r = yc(n, o), r === 2 && (v = yf(n), v !== 0 && (o = v, r = Ad(n, v))), r === 1))
          throw i = Mo, bi(n, 0), iu(n, o), lr(n, pn()), i;
        switch (n.finishedWork = f, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            wi(n, cr, aa);
            break;
          case 3:
            if (iu(n, o), (o & 130023424) === o && (r = Sd + 500 - pn(), 10 < r)) {
              if (yu(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & o) !== o) {
                ar(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = li(wi.bind(null, n, cr, aa), r);
              break;
            }
            wi(n, cr, aa);
            break;
          case 4:
            if (iu(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, f = -1; 0 < o; ) {
              var D = 31 - Yr(o);
              v = 1 << D, D = r[D], D > f && (f = D), o &= ~v;
            }
            if (o = f, o = pn() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * fc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = li(wi.bind(null, n, cr, aa), o);
              break;
            }
            wi(n, cr, aa);
            break;
          case 5:
            wi(n, cr, aa);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return lr(n, pn()), n.callbackNode === i ? Al.bind(null, n) : null;
  }
  function Ad(n, r) {
    var i = Si;
    return n.current.memoizedState.isDehydrated && (bi(n, r).flags |= 256), n = yc(n, r), n !== 2 && (r = cr, cr = i, r !== null && Lo(r)), n;
  }
  function Lo(n) {
    cr === null ? cr = n : cr.push.apply(cr, n);
  }
  function Fd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var i = r.updateQueue;
        if (i !== null && (i = i.stores, i !== null))
          for (var o = 0; o < i.length; o++) {
            var f = i[o], v = f.getSnapshot;
            f = f.value;
            try {
              if (!Kr(v(), f))
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
  function iu(n, r) {
    for (r &= ~El, r &= ~dc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var i = 31 - Yr(r), o = 1 << i;
      n[i] = -1, r &= ~o;
    }
  }
  function uh(n) {
    if (At & 6)
      throw Error(m(327));
    Tl();
    var r = yu(n, 0);
    if (!(r & 1))
      return lr(n, pn()), null;
    var i = yc(n, r);
    if (n.tag !== 0 && i === 2) {
      var o = yf(n);
      o !== 0 && (r = o, i = Ad(n, o));
    }
    if (i === 1)
      throw i = Mo, bi(n, 0), iu(n, r), lr(n, pn()), i;
    if (i === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wi(n, cr, aa), lr(n, pn()), null;
  }
  function Fl(n, r) {
    var i = At;
    At |= 1;
    try {
      return n(r);
    } finally {
      At = i, At === 0 && (Cl = pn() + 500, Ln && Ar());
    }
  }
  function ja(n) {
    za !== null && za.tag === 0 && !(At & 6) && Tl();
    var r = At;
    At |= 1;
    var i = ur.transition, o = Lt;
    try {
      if (ur.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = o, ur.transition = i, At = r, !(At & 6) && Ar();
    }
  }
  function Td() {
    $r = Dl.current, Nt(Dl);
  }
  function bi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var i = n.timeoutHandle;
    if (i !== -1 && (n.timeoutHandle = -1, Ov(i)), hn !== null)
      for (i = hn.return; i !== null; ) {
        var o = i;
        switch (Kf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Zr();
            break;
          case 3:
            Na(), Nt(vn), Nt(dt), Hs();
            break;
          case 5:
            Ct(o);
            break;
          case 4:
            Na();
            break;
          case 13:
            Nt(ot);
            break;
          case 19:
            Nt(ot);
            break;
          case 10:
            Ra(o.type._context);
            break;
          case 22:
          case 23:
            Td();
        }
        i = i.return;
      }
    if (an = n, hn = n = Pa(n.current, null), jn = $r = r, On = 0, Mo = null, El = dc = ua = 0, cr = Si = null, In !== null) {
      for (r = 0; r < In.length; r++)
        if (i = In[r], o = i.interleaved, o !== null) {
          i.interleaved = null;
          var f = o.next, v = i.pending;
          if (v !== null) {
            var D = v.next;
            v.next = f, o.next = D;
          }
          i.pending = o;
        }
      In = null;
    }
    return n;
  }
  function ah(n, r) {
    do {
      var i = hn;
      try {
        if (ed(), Is.current = ac, st) {
          for (var o = Kt.memoizedState; o !== null; ) {
            var f = o.queue;
            f !== null && (f.pending = null), o = o.next;
          }
          st = !1;
        }
        if (di = 0, Tt = oe = Kt = null, Ou = !1, Pr = 0, Cd.current = null, i === null || i.return === null) {
          On = 1, Mo = r, hn = null;
          break;
        }
        e: {
          var v = n, D = i.return, w = i, N = r;
          if (r = jn, w.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var J = N, ye = w, Ce = ye.tag;
            if (!(ye.mode & 1) && (Ce === 0 || Ce === 11 || Ce === 15)) {
              var me = ye.alternate;
              me ? (ye.updateQueue = me.updateQueue, ye.memoizedState = me.memoizedState, ye.lanes = me.lanes) : (ye.updateQueue = null, ye.memoizedState = null);
            }
            var Me = sd(D);
            if (Me !== null) {
              Me.flags &= -257, cd(Me, D, w, v, r), Me.mode & 1 && Yv(v, J, r), r = Me, N = J;
              var Ve = r.updateQueue;
              if (Ve === null) {
                var We = /* @__PURE__ */ new Set();
                We.add(N), r.updateQueue = We;
              } else
                Ve.add(N);
              break e;
            } else {
              if (!(r & 1)) {
                Yv(v, J, r), bd();
                break e;
              }
              N = Error(m(426));
            }
          } else if (Wt && w.mode & 1) {
            var Dn = sd(D);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), cd(Dn, D, w, v, r), Jf(dl(N, w));
              break e;
            }
          }
          v = N = dl(N, w), On !== 4 && (On = 2), Si === null ? Si = [v] : Si.push(v), v = D;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var I = Gv(v, N, r);
                rd(v, I);
                break e;
              case 1:
                w = N;
                var M = v.type, Y = v.stateNode;
                if (!(v.flags & 128) && (typeof M.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (Mu === null || !Mu.has(Y)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var Fe = wo(v, w, r);
                  rd(v, Fe);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        wd(i);
      } catch (Xe) {
        r = Xe, hn === i && i !== null && (hn = i = i.return);
        continue;
      }
      break;
    } while (1);
  }
  function mc() {
    var n = ko.current;
    return ko.current = ac, n === null ? ac : n;
  }
  function bd() {
    (On === 0 || On === 3 || On === 2) && (On = 4), an === null || !(ua & 268435455) && !(dc & 268435455) || iu(an, jn);
  }
  function yc(n, r) {
    var i = At;
    At |= 2;
    var o = mc();
    (an !== n || jn !== r) && (aa = null, bi(n, r));
    do
      try {
        Um();
        break;
      } catch (f) {
        ah(n, f);
      }
    while (1);
    if (ed(), At = i, ko.current = o, hn !== null)
      throw Error(m(261));
    return an = null, jn = 0, On;
  }
  function Um() {
    for (; hn !== null; )
      ih(hn);
  }
  function zm() {
    for (; hn !== null && !lm(); )
      ih(hn);
  }
  function ih(n) {
    var r = oh(n.alternate, n, $r);
    n.memoizedProps = n.pendingProps, r === null ? wd(n) : hn = r, Cd.current = null;
  }
  function wd(n) {
    var r = n;
    do {
      var i = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (i = yd(i, r), i !== null) {
          i.flags &= 32767, hn = i;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          On = 6, hn = null;
          return;
        }
      } else if (i = Lm(i, r, $r), i !== null) {
        hn = i;
        return;
      }
      if (r = r.sibling, r !== null) {
        hn = r;
        return;
      }
      hn = r = n;
    } while (r !== null);
    On === 0 && (On = 5);
  }
  function wi(n, r, i) {
    var o = Lt, f = ur.transition;
    try {
      ur.transition = null, Lt = 1, jm(n, r, i, o);
    } finally {
      ur.transition = f, Lt = o;
    }
    return null;
  }
  function jm(n, r, i, o) {
    do
      Tl();
    while (za !== null);
    if (At & 6)
      throw Error(m(327));
    i = n.finishedWork;
    var f = n.finishedLanes;
    if (i === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, i === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = i.lanes | i.childLanes;
    if (fm(n, v), n === an && (hn = an = null, jn = 0), !(i.subtreeFlags & 2064) && !(i.flags & 2064) || Ua || (Ua = !0, xd(ga, function() {
      return Tl(), null;
    })), v = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || v) {
      v = ur.transition, ur.transition = null;
      var D = Lt;
      Lt = 1;
      var w = At;
      At |= 4, Cd.current = null, Jv(n, i), eh(i, n), Ts(ii), ti = !!Hf, ii = Hf = null, n.current = i, th(i), om(), At = w, Lt = D, ur.transition = v;
    } else
      n.current = i;
    if (Ua && (Ua = !1, za = n, vc = f), v = n.pendingLanes, v === 0 && (Mu = null), Gp(i.stateNode), lr(n, pn()), r !== null)
      for (o = n.onRecoverableError, i = 0; i < r.length; i++)
        f = r[i], o(f.value, { componentStack: f.stack, digest: f.digest });
    if (pc)
      throw pc = !1, n = Ai, Ai = null, n;
    return vc & 1 && n.tag !== 0 && Tl(), v = n.pendingLanes, v & 1 ? n === hc ? Sl++ : (Sl = 0, hc = n) : Sl = 0, Ar(), null;
  }
  function Tl() {
    if (za !== null) {
      var n = Df(vc), r = ur.transition, i = Lt;
      try {
        if (ur.transition = null, Lt = 16 > n ? 16 : n, za === null)
          var o = !1;
        else {
          if (n = za, za = null, vc = 0, At & 6)
            throw Error(m(331));
          var f = At;
          for (At |= 4, He = n.current; He !== null; ) {
            var v = He, D = v.child;
            if (He.flags & 16) {
              var w = v.deletions;
              if (w !== null) {
                for (var N = 0; N < w.length; N++) {
                  var J = w[N];
                  for (He = J; He !== null; ) {
                    var ye = He;
                    switch (ye.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oo(8, ye, v);
                    }
                    var Ce = ye.child;
                    if (Ce !== null)
                      Ce.return = ye, He = Ce;
                    else
                      for (; He !== null; ) {
                        ye = He;
                        var me = ye.sibling, Me = ye.return;
                        if (Dd(ye), ye === J) {
                          He = null;
                          break;
                        }
                        if (me !== null) {
                          me.return = Me, He = me;
                          break;
                        }
                        He = Me;
                      }
                  }
                }
                var Ve = v.alternate;
                if (Ve !== null) {
                  var We = Ve.child;
                  if (We !== null) {
                    Ve.child = null;
                    do {
                      var Dn = We.sibling;
                      We.sibling = null, We = Dn;
                    } while (We !== null);
                  }
                }
                He = v;
              }
            }
            if (v.subtreeFlags & 2064 && D !== null)
              D.return = v, He = D;
            else
              e:
                for (; He !== null; ) {
                  if (v = He, v.flags & 2048)
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oo(9, v, v.return);
                    }
                  var I = v.sibling;
                  if (I !== null) {
                    I.return = v.return, He = I;
                    break e;
                  }
                  He = v.return;
                }
          }
          var M = n.current;
          for (He = M; He !== null; ) {
            D = He;
            var Y = D.child;
            if (D.subtreeFlags & 2064 && Y !== null)
              Y.return = D, He = Y;
            else
              e:
                for (D = M; He !== null; ) {
                  if (w = He, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          No(9, w);
                      }
                    } catch (Xe) {
                      mn(w, w.return, Xe);
                    }
                  if (w === D) {
                    He = null;
                    break e;
                  }
                  var Fe = w.sibling;
                  if (Fe !== null) {
                    Fe.return = w.return, He = Fe;
                    break e;
                  }
                  He = w.return;
                }
          }
          if (At = f, Ar(), mu && typeof mu.onPostCommitFiberRoot == "function")
            try {
              mu.onPostCommitFiberRoot(Wl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Lt = i, ur.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, i) {
    r = dl(i, r), r = Gv(n, r, 1), n = _a(n, r, 1), r = ar(), n !== null && (ei(n, 1, r), lr(n, r));
  }
  function mn(n, r, i) {
    if (n.tag === 3)
      lh(n, n, i);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          lh(r, n, i);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Mu === null || !Mu.has(o))) {
            n = dl(i, n), n = wo(r, n, 1), r = _a(r, n, 1), n = ar(), r !== null && (ei(r, 1, n), lr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Pm(n, r, i) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & i, an === n && (jn & i) === i && (On === 4 || On === 3 && (jn & 130023424) === jn && 500 > pn() - Sd ? bi(n, 0) : El |= i), lr(n, r);
  }
  function gc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Yi, Yi <<= 1, !(Yi & 130023424) && (Yi = 4194304)) : r = 1);
    var i = ar();
    n = Zu(n, r), n !== null && (ei(n, r, i), lr(n, i));
  }
  function $m(n) {
    var r = n.memoizedState, i = 0;
    r !== null && (i = r.retryLane), gc(n, i);
  }
  function Hm(n, r) {
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
        throw Error(m(314));
    }
    o !== null && o.delete(r), gc(n, i);
  }
  var oh;
  oh = function(n, r, i) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || vn.current)
        Fn = !0;
      else {
        if (!(n.lanes & i) && !(r.flags & 128))
          return Fn = !1, na(n, r, i);
        Fn = !!(n.flags & 131072);
      }
    else
      Fn = !1, Wt && r.flags & 1048576 && Wf(r, al, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        nr(n, r), n = r.pendingProps;
        var f = Jr(r, dt.current);
        Re(r, i), f = ka(null, r, o, n, f, i);
        var v = hi();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Zt(o) ? (v = !0, _s(r)) : v = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, nd(r), f.updater = js, r.stateNode = f, f._reactInternals = r, Ps(r, o, n, i), r = Qv(null, r, o, !0, v, i)) : (r.tag = 0, Wt && v && Os(r), Rn(null, r, f, i), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (nr(n, r), n = r.pendingProps, f = o._init, o = f(o._payload), r.type = o, f = r.tag = Vm(o), n = jr(o, n), f) {
            case 0:
              r = pl(null, r, o, n, i);
              break e;
            case 1:
              r = fd(null, r, o, n, i);
              break e;
            case 11:
              r = La(null, r, o, n, i);
              break e;
            case 14:
              r = lc(null, r, o, jr(o.type, n), i);
              break e;
          }
          throw Error(m(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : jr(o, f), pl(n, r, o, f, i);
      case 1:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : jr(o, f), fd(n, r, o, f, i);
      case 3:
        e: {
          if (Wv(r), n === null)
            throw Error(m(387));
          o = r.pendingProps, v = r.memoizedState, f = v.element, xn(n, r), Oa(r, o, null, i);
          var D = r.memoizedState;
          if (o = D.element, v.isDehydrated)
            if (v = { element: o, isDehydrated: !1, cache: D.cache, pendingSuspenseBoundaries: D.pendingSuspenseBoundaries, transitions: D.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
              f = dl(Error(m(423)), r), r = oc(n, r, o, i, f);
              break e;
            } else if (o !== f) {
              f = dl(Error(m(424)), r), r = oc(n, r, o, i, f);
              break e;
            } else
              for (br = Cu(r.stateNode.containerInfo.firstChild), zr = r, Wt = !0, tu = null, i = Vv(r, null, o, i), r.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (rn(), o === f) {
              r = Vn(n, r, i);
              break e;
            }
            Rn(n, r, o, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return lt(r), n === null && ks(r), o = r.type, f = r.pendingProps, v = n !== null ? n.memoizedProps : null, D = f.children, ho(o, f) ? D = null : v !== null && ho(o, v) && (r.flags |= 32), Et(n, r), Rn(n, r, D, i), r.child;
      case 6:
        return n === null && ks(r), null;
      case 13:
        return pd(n, r, i);
      case 4:
        return ad(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ll(r, null, o, i) : Rn(n, r, o, i), r.child;
      case 11:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : jr(o, f), La(n, r, o, f, i);
      case 7:
        return Rn(n, r, r.pendingProps, i), r.child;
      case 8:
        return Rn(n, r, r.pendingProps.children, i), r.child;
      case 12:
        return Rn(n, r, r.pendingProps.children, i), r.child;
      case 10:
        e: {
          if (o = r.type._context, f = r.pendingProps, v = r.memoizedProps, D = f.value, kt(_u, o._currentValue), o._currentValue = D, v !== null)
            if (Kr(v.value, D)) {
              if (v.children === f.children && !vn.current) {
                r = Vn(n, r, i);
                break e;
              }
            } else
              for (v = r.child, v !== null && (v.return = r); v !== null; ) {
                var w = v.dependencies;
                if (w !== null) {
                  D = v.child;
                  for (var N = w.firstContext; N !== null; ) {
                    if (N.context === o) {
                      if (v.tag === 1) {
                        N = ea(-1, i & -i), N.tag = 2;
                        var J = v.updateQueue;
                        if (J !== null) {
                          J = J.shared;
                          var ye = J.pending;
                          ye === null ? N.next = N : (N.next = ye.next, ye.next = N), J.pending = N;
                        }
                      }
                      v.lanes |= i, N = v.alternate, N !== null && (N.lanes |= i), Un(
                        v.return,
                        i,
                        r
                      ), w.lanes |= i;
                      break;
                    }
                    N = N.next;
                  }
                } else if (v.tag === 10)
                  D = v.type === r.type ? null : v.child;
                else if (v.tag === 18) {
                  if (D = v.return, D === null)
                    throw Error(m(341));
                  D.lanes |= i, w = D.alternate, w !== null && (w.lanes |= i), Un(D, i, r), D = v.sibling;
                } else
                  D = v.child;
                if (D !== null)
                  D.return = v;
                else
                  for (D = v; D !== null; ) {
                    if (D === r) {
                      D = null;
                      break;
                    }
                    if (v = D.sibling, v !== null) {
                      v.return = D.return, D = v;
                      break;
                    }
                    D = D.return;
                  }
                v = D;
              }
          Rn(n, r, f.children, i), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, o = r.pendingProps.children, Re(r, i), f = gn(f), o = o(f), r.flags |= 1, Rn(n, r, o, i), r.child;
      case 14:
        return o = r.type, f = jr(o, r.pendingProps), f = jr(o.type, f), lc(n, r, o, f, i);
      case 15:
        return Rr(n, r, r.type, r.pendingProps, i);
      case 17:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : jr(o, f), nr(n, r), r.tag = 1, Zt(o) ? (n = !0, _s(r)) : n = !1, Re(r, i), Pv(r, o, f), Ps(r, o, f, i), Qv(null, r, o, !0, n, i);
      case 19:
        return md(n, r, i);
      case 22:
        return Di(n, r, i);
    }
    throw Error(m(156, r.tag));
  };
  function xd(n, r) {
    return vf(n, r);
  }
  function Im(n, r, i, o) {
    this.tag = n, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lu(n, r, i, o) {
    return new Im(n, r, i, o);
  }
  function Rd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Vm(n) {
    if (typeof n == "function")
      return Rd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ke)
        return 11;
      if (n === xt)
        return 14;
    }
    return 2;
  }
  function Pa(n, r) {
    var i = n.alternate;
    return i === null ? (i = lu(n.tag, r, n.key, n.mode), i.elementType = n.elementType, i.type = n.type, i.stateNode = n.stateNode, i.alternate = n, n.alternate = i) : (i.pendingProps = r, i.type = n.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = n.flags & 14680064, i.childLanes = n.childLanes, i.lanes = n.lanes, i.child = n.child, i.memoizedProps = n.memoizedProps, i.memoizedState = n.memoizedState, i.updateQueue = n.updateQueue, r = n.dependencies, i.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, i.sibling = n.sibling, i.index = n.index, i.ref = n.ref, i;
  }
  function Dc(n, r, i, o, f, v) {
    var D = 2;
    if (o = n, typeof n == "function")
      Rd(n) && (D = 1);
    else if (typeof n == "string")
      D = 5;
    else
      e:
        switch (n) {
          case ne:
            return xi(i.children, f, v, r);
          case Z:
            D = 8, f |= 8;
            break;
          case Pe:
            return n = lu(12, i, r, f | 2), n.elementType = Pe, n.lanes = v, n;
          case Ke:
            return n = lu(13, i, r, f), n.elementType = Ke, n.lanes = v, n;
          case ut:
            return n = lu(19, i, r, f), n.elementType = ut, n.lanes = v, n;
          case $t:
            return Uo(i, f, v, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case we:
                  D = 10;
                  break e;
                case De:
                  D = 9;
                  break e;
                case ke:
                  D = 11;
                  break e;
                case xt:
                  D = 14;
                  break e;
                case Ue:
                  D = 16, o = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = lu(D, i, r, f), r.elementType = n, r.type = o, r.lanes = v, r;
  }
  function xi(n, r, i, o) {
    return n = lu(7, n, o, r), n.lanes = i, n;
  }
  function Uo(n, r, i, o) {
    return n = lu(22, n, o, r), n.elementType = $t, n.lanes = i, n.stateNode = { isHidden: !1 }, n;
  }
  function zo(n, r, i) {
    return n = lu(6, n, null, r), n.lanes = i, n;
  }
  function Ri(n, r, i) {
    return r = lu(4, n.children !== null ? n.children : [], n.key, r), r.lanes = i, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function qm(n, r, i, o, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gf(0), this.expirationTimes = gf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.identifierPrefix = o, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Ec(n, r, i, o, f, v, D, w, N) {
    return n = new qm(n, r, i, w, N), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = lu(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: o, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, nd(v), n;
  }
  function sh(n, r, i) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: O, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: i };
  }
  function Bd(n) {
    if (!n)
      return Bu;
    n = n._reactInternals;
    e: {
      if (xu(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Zt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var i = n.type;
      if (Zt(i))
        return go(n, i, r);
    }
    return r;
  }
  function ch(n, r, i, o, f, v, D, w, N) {
    return n = Ec(i, o, !0, n, f, v, D, w, N), n.context = Bd(null), i = n.current, o = ar(), f = Tn(i), v = ea(o, f), v.callback = r ?? null, _a(i, v, f), n.current.lanes = f, ei(n, f, o), lr(n, o), n;
  }
  function jo(n, r, i, o) {
    var f = r.current, v = ar(), D = Tn(f);
    return i = Bd(i), r.context === null ? r.context = i : r.pendingContext = i, r = ea(v, D), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = _a(f, r, D), n !== null && (ir(n, f, D, v), zs(n, f, D)), D;
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
  function fh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var i = n.retryLane;
      n.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function _d(n, r) {
    fh(n, r), (n = n.alternate) && fh(n, r);
  }
  function dh() {
    return null;
  }
  var Od = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Sc(n) {
    this._internalRoot = n;
  }
  ia.prototype.render = Sc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    jo(n, r, null, null);
  }, ia.prototype.unmount = Sc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      ja(function() {
        jo(null, n, null, null);
      }), r[Xu] = null;
    }
  };
  function ia(n) {
    this._internalRoot = n;
  }
  ia.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Kp();
      n = { blockedOn: null, target: n, priority: r };
      for (var i = 0; i < zt.length && r !== 0 && r < zt[i].priority; i++)
        ;
      zt.splice(i, 0, n), i === 0 && Xp(n);
    }
  };
  function Nd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ac(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function Gm(n, r, i, o, f) {
    if (f) {
      if (typeof o == "function") {
        var v = o;
        o = function() {
          var J = Cc(D);
          v.call(J);
        };
      }
      var D = ch(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = D, n[Xu] = D.current, rl(n.nodeType === 8 ? n.parentNode : n), ja(), D;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof o == "function") {
      var w = o;
      o = function() {
        var J = Cc(N);
        w.call(J);
      };
    }
    var N = Ec(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = N, n[Xu] = N.current, rl(n.nodeType === 8 ? n.parentNode : n), ja(function() {
      jo(r, N, i, o);
    }), N;
  }
  function Fc(n, r, i, o, f) {
    var v = i._reactRootContainer;
    if (v) {
      var D = v;
      if (typeof f == "function") {
        var w = f;
        f = function() {
          var N = Cc(D);
          w.call(N);
        };
      }
      jo(r, D, n, f);
    } else
      D = Gm(i, r, n, f, o);
    return Cc(D);
  }
  Wp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var i = Za(r.pendingLanes);
          i !== 0 && (Kl(r, i | 1), lr(r, pn()), !(At & 6) && (Cl = pn() + 500, Ar()));
        }
        break;
      case 13:
        ja(function() {
          var o = Zu(n, 1);
          if (o !== null) {
            var f = ar();
            ir(o, n, 1, f);
          }
        }), _d(n, 1);
    }
  }, ps = function(n) {
    if (n.tag === 13) {
      var r = Zu(n, 134217728);
      if (r !== null) {
        var i = ar();
        ir(r, n, 134217728, i);
      }
      _d(n, 134217728);
    }
  }, It = function(n) {
    if (n.tag === 13) {
      var r = Tn(n), i = Zu(n, r);
      if (i !== null) {
        var o = ar();
        ir(i, n, r, o);
      }
      _d(n, r);
    }
  }, Kp = function() {
    return Lt;
  }, Ef = function(n, r) {
    var i = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = i;
    }
  }, wu = function(n, r, i) {
    switch (r) {
      case "input":
        if (tn(n, i), r = i.name, i.type === "radio" && r != null) {
          for (i = n; i.parentNode; )
            i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < i.length; r++) {
            var o = i[r];
            if (o !== n && o.form === n.form) {
              var f = rt(o);
              if (!f)
                throw Error(m(90));
              ue(o), tn(o, f);
            }
          }
        }
        break;
      case "textarea":
        U(n, i);
        break;
      case "select":
        r = i.value, r != null && cn(n, !!i.multiple, r, !1);
    }
  }, Pp = Fl, $p = ja;
  var Ym = { usingClientEntryPoint: !1, Events: [yo, ul, rt, is, ls, Fl] }, bl = { findFiberByHostInstance: Xr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Qm = { bundleType: bl.bundleType, version: bl.version, rendererPackageName: bl.rendererPackageName, rendererConfig: bl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Hp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: bl.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tc.isDisabled && Tc.supportsFiber)
      try {
        Wl = Tc.inject(Qm), mu = Tc;
      } catch {
      }
  }
  return pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym, pu.createPortal = function(n, r) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Nd(r))
      throw Error(m(200));
    return sh(n, r, null, i);
  }, pu.createRoot = function(n, r) {
    if (!Nd(n))
      throw Error(m(299));
    var i = !1, o = "", f = Od;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Ec(n, 1, !1, null, null, i, !1, o, f), n[Xu] = r.current, rl(n.nodeType === 8 ? n.parentNode : n), new Sc(r);
  }, pu.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Hp(r), n = n === null ? null : n.stateNode, n;
  }, pu.flushSync = function(n) {
    return ja(n);
  }, pu.hydrate = function(n, r, i) {
    if (!Ac(r))
      throw Error(m(200));
    return Fc(null, n, r, !0, i);
  }, pu.hydrateRoot = function(n, r, i) {
    if (!Nd(n))
      throw Error(m(405));
    var o = i != null && i.hydratedSources || null, f = !1, v = "", D = Od;
    if (i != null && (i.unstable_strictMode === !0 && (f = !0), i.identifierPrefix !== void 0 && (v = i.identifierPrefix), i.onRecoverableError !== void 0 && (D = i.onRecoverableError)), r = ch(r, null, n, 1, i ?? null, f, !1, v, D), n[Xu] = r.current, rl(n), o)
      for (n = 0; n < o.length; n++)
        i = o[n], f = i._getVersion, f = f(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, f] : r.mutableSourceEagerHydrationData.push(
          i,
          f
        );
    return new ia(r);
  }, pu.render = function(n, r, i) {
    if (!Ac(r))
      throw Error(m(200));
    return Fc(null, n, r, !1, i);
  }, pu.unmountComponentAtNode = function(n) {
    if (!Ac(n))
      throw Error(m(40));
    return n._reactRootContainer ? (ja(function() {
      Fc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xu] = null;
      });
    }), !0) : !1;
  }, pu.unstable_batchedUpdates = Fl, pu.unstable_renderSubtreeIntoContainer = function(n, r, i, o) {
    if (!Ac(i))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return Fc(n, r, i, !1, o);
  }, pu.version = "18.2.0-next-9e3b772b8-20220608", pu;
}
var vu = {}, oA;
function jR() {
  return oA || (oA = 1, sn.process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = WA, p = eF(), m = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = !1;
    function R(e) {
      b = e;
    }
    function _(e) {
      if (!b) {
        for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          u[a - 1] = arguments[a];
        le("warn", e, u);
      }
    }
    function y(e) {
      if (!b) {
        for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          u[a - 1] = arguments[a];
        le("error", e, u);
      }
    }
    function le(e, t, u) {
      {
        var a = m.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (t += "%s", u = u.concat([l]));
        var s = u.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var te = 0, ee = 1, Ye = 2, ve = 3, z = 4, re = 5, ce = 6, se = 7, pe = 8, Qe = 9, Ie = 10, et = 11, Je = 12, $ = 13, O = 14, ne = 15, Z = 16, Pe = 17, we = 18, De = 19, ke = 21, Ke = 22, ut = 23, xt = 24, Ue = 25, $t = !0, Ee = !1, H = !1, P = !1, ge = !1, B = !0, j = !1, Q = !1, Ae = !0, x = !0, S = !0, F = /* @__PURE__ */ new Set(), C = {}, T = {};
    function G(e, t) {
      ue(e, t), ue(e + "Capture", t);
    }
    function ue(e, t) {
      C[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), C[e] = t;
      {
        var u = e.toLowerCase();
        T[u] = e, e === "onDoubleClick" && (T.ondblclick = e);
      }
      for (var a = 0; a < t.length; a++)
        F.add(t[a]);
    }
    var xe = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _e = Object.prototype.hasOwnProperty;
    function at(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, u = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function Rt(e) {
      try {
        return tn(e), !1;
      } catch {
        return !0;
      }
    }
    function tn(e) {
      return "" + e;
    }
    function Gt(e, t) {
      if (Rt(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, at(e)), tn(e);
    }
    function de(e) {
      if (Rt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", at(e)), tn(e);
    }
    function Er(e, t) {
      if (Rt(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, at(e)), tn(e);
    }
    function cn(e, t) {
      if (Rt(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, at(e)), tn(e);
    }
    function or(e) {
      if (Rt(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", at(e)), tn(e);
    }
    function yn(e) {
      if (Rt(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", at(e)), tn(e);
    }
    var U = 0, W = 1, Te = 2, Oe = 3, $e = 4, yt = 5, ct = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", nt = new RegExp("^[" + he + "][" + be + "]*$"), gt = {}, Ht = {};
    function nn(e) {
      return _e.call(Ht, e) ? !0 : _e.call(gt, e) ? !1 : nt.test(e) ? (Ht[e] = !0, !0) : (gt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Yt(e, t, u) {
      return t !== null ? t.type === U : u ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, u, a) {
      if (u !== null && u.type === U)
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
    function Ut(e, t, u, a) {
      if (t === null || typeof t > "u" || fn(e, t, u, a))
        return !0;
      if (a)
        return !1;
      if (u !== null)
        switch (u.type) {
          case Oe:
            return !t;
          case $e:
            return t === !1;
          case yt:
            return isNaN(t);
          case ct:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function wu(e) {
      return dn.hasOwnProperty(e) ? dn[e] : null;
    }
    function Cn(e, t, u, a, l, s, d) {
      this.acceptsBooleans = t === Te || t === Oe || t === $e, this.attributeName = a, this.attributeNamespace = l, this.mustUseProperty = u, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var dn = {}, jp = [
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
    jp.forEach(function(e) {
      dn[e] = new Cn(
        e,
        U,
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
      dn[t] = new Cn(
        t,
        W,
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
      dn[e] = new Cn(
        e,
        Te,
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
      dn[e] = new Cn(
        e,
        Te,
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
      dn[e] = new Cn(
        e,
        Oe,
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
      dn[e] = new Cn(
        e,
        Oe,
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
      dn[e] = new Cn(
        e,
        $e,
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
      dn[e] = new Cn(
        e,
        ct,
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
      dn[e] = new Cn(
        e,
        yt,
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
    var is = /[\-\:]([a-z])/g, ls = function(e) {
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
      var t = e.replace(is, ls);
      dn[t] = new Cn(
        t,
        W,
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
      var t = e.replace(is, ls);
      dn[t] = new Cn(
        t,
        W,
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
      var t = e.replace(is, ls);
      dn[t] = new Cn(
        t,
        W,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      dn[e] = new Cn(
        e,
        W,
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
    var Pp = "xlinkHref";
    dn[Pp] = new Cn(
      "xlinkHref",
      W,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      dn[e] = new Cn(
        e,
        W,
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
    var $p = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, os = !1;
    function ff(e) {
      !os && $p.test(e) && (os = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Gl(e, t, u, a) {
      if (a.mustUseProperty) {
        var l = a.propertyName;
        return e[l];
      } else {
        Gt(u, t), a.sanitizeURL && ff("" + u);
        var s = a.attributeName, d = null;
        if (a.type === $e) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : Ut(t, u, a, !1) ? h : h === "" + u ? u : h;
          }
        } else if (e.hasAttribute(s)) {
          if (Ut(t, u, a, !1))
            return e.getAttribute(s);
          if (a.type === Oe)
            return u;
          d = e.getAttribute(s);
        }
        return Ut(t, u, a, !1) ? d === null ? u : d : d === "" + u ? u : d;
      }
    }
    function ss(e, t, u, a) {
      {
        if (!nn(t))
          return;
        if (!e.hasAttribute(t))
          return u === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Gt(u, t), l === "" + u ? u : l;
      }
    }
    function Ja(e, t, u, a) {
      var l = wu(t);
      if (!Yt(t, l, a)) {
        if (Ut(t, u, l, a) && (u = null), a || l === null) {
          if (nn(t)) {
            var s = t;
            u === null ? e.removeAttribute(s) : (Gt(u, t), e.setAttribute(s, "" + u));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var h = l.propertyName;
          if (u === null) {
            var g = l.type;
            e[h] = g === Oe ? !1 : "";
          } else
            e[h] = u;
          return;
        }
        var E = l.attributeName, A = l.attributeNamespace;
        if (u === null)
          e.removeAttribute(E);
        else {
          var L = l.type, k;
          L === Oe || L === $e && u === !0 ? k = "" : (Gt(u, E), k = "" + u, l.sanitizeURL && ff(k.toString())), A ? e.setAttributeNS(A, E, k) : e.setAttribute(E, k);
        }
      }
    }
    var Ii = Symbol.for("react.element"), hu = Symbol.for("react.portal"), Iu = Symbol.for("react.fragment"), Vi = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), df = Symbol.for("react.provider"), pf = Symbol.for("react.context"), qi = Symbol.for("react.forward_ref"), xu = Symbol.for("react.suspense"), Ql = Symbol.for("react.suspense_list"), Gi = Symbol.for("react.memo"), sr = Symbol.for("react.lazy"), Hp = Symbol.for("react.scope"), Ip = Symbol.for("react.debug_trace_mode"), vf = Symbol.for("react.offscreen"), Vp = Symbol.for("react.legacy_hidden"), lm = Symbol.for("react.cache"), om = Symbol.for("react.tracing_marker"), pn = Symbol.iterator, sm = "@@iterator";
    function Vu(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = pn && e[pn] || e[sm];
      return typeof t == "function" ? t : null;
    }
    var St = Object.assign, ga = 0, qp, hf, Wl, mu, Gp, Yr, Yp;
    function Qp() {
    }
    Qp.__reactDisabledLog = !0;
    function cm() {
      {
        if (ga === 0) {
          qp = console.log, hf = console.info, Wl = console.warn, mu = console.error, Gp = console.group, Yr = console.groupCollapsed, Yp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Qp,
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
        ga++;
      }
    }
    function cs() {
      {
        if (ga--, ga === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: St({}, e, {
              value: qp
            }),
            info: St({}, e, {
              value: hf
            }),
            warn: St({}, e, {
              value: Wl
            }),
            error: St({}, e, {
              value: mu
            }),
            group: St({}, e, {
              value: Gp
            }),
            groupCollapsed: St({}, e, {
              value: Yr
            }),
            groupEnd: St({}, e, {
              value: Yp
            })
          });
        }
        ga < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Yi = m.ReactCurrentDispatcher, Za;
    function yu(e, t, u) {
      {
        if (Za === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            Za = a && a[1] || "";
          }
        return `
` + Za + e;
      }
    }
    var mf = !1, fs;
    {
      var yf = typeof WeakMap == "function" ? WeakMap : Map;
      fs = new yf();
    }
    function ds(e, t) {
      if (!e || mf)
        return "";
      {
        var u = fs.get(e);
        if (u !== void 0)
          return u;
      }
      var a;
      mf = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Yi.current, Yi.current = null, cm();
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
            } catch (X) {
              a = X;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (X) {
              a = X;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            a = X;
          }
          e();
        }
      } catch (X) {
        if (X && a && typeof X.stack == "string") {
          for (var h = X.stack.split(`
`), g = a.stack.split(`
`), E = h.length - 1, A = g.length - 1; E >= 1 && A >= 0 && h[E] !== g[A]; )
            A--;
          for (; E >= 1 && A >= 0; E--, A--)
            if (h[E] !== g[A]) {
              if (E !== 1 || A !== 1)
                do
                  if (E--, A--, A < 0 || h[E] !== g[A]) {
                    var L = `
` + h[E].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && fs.set(e, L), L;
                  }
                while (E >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        mf = !1, Yi.current = s, cs(), Error.prepareStackTrace = l;
      }
      var k = e ? e.displayName || e.name : "", K = k ? yu(k) : "";
      return typeof e == "function" && fs.set(e, K), K;
    }
    function gf(e, t, u) {
      return ds(e, !0);
    }
    function ei(e, t, u) {
      return ds(e, !1);
    }
    function fm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Kl(e, t, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ds(e, fm(e));
      if (typeof e == "string")
        return yu(e);
      switch (e) {
        case xu:
          return yu("Suspense");
        case Ql:
          return yu("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case qi:
            return ei(e.render);
          case Gi:
            return Kl(e.type, t, u);
          case sr: {
            var a = e, l = a._payload, s = a._init;
            try {
              return Kl(s(l), t, u);
            } catch {
            }
          }
        }
      return "";
    }
    function Lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case re:
          return yu(e.type);
        case Z:
          return yu("Lazy");
        case $:
          return yu("Suspense");
        case De:
          return yu("SuspenseList");
        case te:
        case Ye:
        case ne:
          return ei(e.type);
        case et:
          return ei(e.type.render);
        case ee:
          return gf(e.type);
        default:
          return "";
      }
    }
    function Df(e) {
      try {
        var t = "", u = e;
        do
          t += Lt(u), u = u.return;
        while (u);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function Wp(e, t, u) {
      var a = e.displayName;
      if (a)
        return a;
      var l = t.displayName || t.name || "";
      return l !== "" ? u + "(" + l + ")" : u;
    }
    function ps(e) {
      return e.displayName || "Context";
    }
    function It(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Iu:
          return "Fragment";
        case hu:
          return "Portal";
        case Yl:
          return "Profiler";
        case Vi:
          return "StrictMode";
        case xu:
          return "Suspense";
        case Ql:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pf:
            var t = e;
            return ps(t) + ".Consumer";
          case df:
            var u = e;
            return ps(u._context) + ".Provider";
          case qi:
            return Wp(e, e.render, "ForwardRef");
          case Gi:
            var a = e.displayName || null;
            return a !== null ? a : It(e.type) || "Memo";
          case sr: {
            var l = e, s = l._payload, d = l._init;
            try {
              return It(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Kp(e, t, u) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? u + "(" + a + ")" : u);
    }
    function Ef(e) {
      return e.displayName || "Context";
    }
    function mt(e) {
      var t = e.tag, u = e.type;
      switch (t) {
        case xt:
          return "Cache";
        case Qe:
          var a = u;
          return Ef(a) + ".Consumer";
        case Ie:
          var l = u;
          return Ef(l._context) + ".Provider";
        case we:
          return "DehydratedFragment";
        case et:
          return Kp(u, u.render, "ForwardRef");
        case se:
          return "Fragment";
        case re:
          return u;
        case z:
          return "Portal";
        case ve:
          return "Root";
        case ce:
          return "Text";
        case Z:
          return It(u);
        case pe:
          return u === Vi ? "StrictMode" : "Mode";
        case Ke:
          return "Offscreen";
        case Je:
          return "Profiler";
        case ke:
          return "Scope";
        case $:
          return "Suspense";
        case De:
          return "SuspenseList";
        case Ue:
          return "TracingMarker";
        case ee:
        case te:
        case Pe:
        case Ye:
        case O:
        case ne:
          if (typeof u == "function")
            return u.displayName || u.name || null;
          if (typeof u == "string")
            return u;
          break;
      }
      return null;
    }
    var Xl = m.ReactDebugCurrentFrame, Sn = null, Qr = !1;
    function Wr() {
      {
        if (Sn === null)
          return null;
        var e = Sn._debugOwner;
        if (e !== null && typeof e < "u")
          return mt(e);
      }
      return null;
    }
    function Jl() {
      return Sn === null ? "" : Df(Sn);
    }
    function wn() {
      Xl.getCurrentStack = null, Sn = null, Qr = !1;
    }
    function zt(e) {
      Xl.getCurrentStack = e === null ? null : Jl, Sn = e, Qr = !1;
    }
    function dm() {
      return Sn;
    }
    function gu(e) {
      Qr = e;
    }
    function er(e) {
      return "" + e;
    }
    function Da(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return yn(e), e;
        default:
          return "";
      }
    }
    var Xp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Qi(e, t) {
      Xp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Cf(e) {
      var t = e.type, u = e.nodeName;
      return u && u.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Jp(e) {
      return e._valueTracker;
    }
    function Zl(e) {
      e._valueTracker = null;
    }
    function eo(e) {
      var t = "";
      return e && (Cf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Wi(e) {
      var t = Cf(e) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      yn(e[t]);
      var a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof u > "u" || typeof u.get != "function" || typeof u.set != "function")) {
        var l = u.get, s = u.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(h) {
            yn(h), a = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: u.enumerable
        });
        var d = {
          getValue: function() {
            return a;
          },
          setValue: function(h) {
            yn(h), a = "" + h;
          },
          stopTracking: function() {
            Zl(e), delete e[t];
          }
        };
        return d;
      }
    }
    function ti(e) {
      Jp(e) || (e._valueTracker = Wi(e));
    }
    function Zp(e) {
      if (!e)
        return !1;
      var t = Jp(e);
      if (!t)
        return !0;
      var u = t.getValue(), a = eo(e);
      return a !== u ? (t.setValue(a), !0) : !1;
    }
    function vs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var hs = !1, to = !1, ms = !1, Sf = !1;
    function qu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function no(e, t) {
      var u = e, a = t.checked, l = St({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? u._wrapperState.initialChecked
      });
      return l;
    }
    function ro(e, t) {
      Qi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !hs && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component", t.type), hs = !0);
      var u = e, a = t.defaultValue == null ? "" : t.defaultValue;
      u._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : a),
        controlled: qu(t)
      };
    }
    function Af(e, t) {
      var u = e, a = t.checked;
      a != null && Ja(u, "checked", a, !1);
    }
    function Ki(e, t) {
      var u = e;
      {
        var a = qu(t);
        !u._wrapperState.controlled && a && !Sf && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Sf = !0), u._wrapperState.controlled && !a && !ms && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ms = !0);
      }
      Af(e, t);
      var l = Da(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && u.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        u.value != l) && (u.value = er(l)) : u.value !== er(l) && (u.value = er(l));
      else if (s === "submit" || s === "reset") {
        u.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ea(u, t.type, l) : t.hasOwnProperty("defaultValue") && Ea(u, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (u.defaultChecked = !!t.defaultChecked);
    }
    function uo(e, t, u) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = er(a._wrapperState.initialValue);
        u || d !== a.value && (a.value = d), a.defaultValue = d;
      }
      var h = a.name;
      h !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, h !== "" && (a.name = h);
    }
    function ev(e, t) {
      var u = e;
      Ki(u, t), Mr(u, t);
    }
    function Mr(e, t) {
      var u = t.name;
      if (t.type === "radio" && u != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        Gt(u, "name");
        for (var l = a.querySelectorAll("input[name=" + JSON.stringify("" + u) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var h = Bh(d);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Zp(d), Ki(d, h);
          }
        }
      }
    }
    function Ea(e, t, u) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || vs(e.ownerDocument) !== e) && (u == null ? e.defaultValue = er(e._wrapperState.initialValue) : e.defaultValue !== er(u) && (e.defaultValue = er(u)));
    }
    var ys = !1, Xi = !1, tv = !1;
    function gs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(u) {
        u != null && (typeof u == "string" || typeof u == "number" || Xi || (Xi = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (tv || (tv = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ys && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ys = !0);
    }
    function Ff(e, t) {
      t.value != null && e.setAttribute("value", er(Da(t.value)));
    }
    var ao = Array.isArray;
    function kn(e) {
      return ao(e);
    }
    var Ds;
    Ds = !1;
    function nv() {
      var e = Wr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var rv = ["value", "defaultValue"];
    function pm(e) {
      {
        Qi("select", e);
        for (var t = 0; t < rv.length; t++) {
          var u = rv[t];
          if (e[u] != null) {
            var a = kn(e[u]);
            e.multiple && !a ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", u, nv()) : !e.multiple && a && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", u, nv());
          }
        }
      }
    }
    function Ca(e, t, u, a) {
      var l = e.options;
      if (t) {
        for (var s = u, d = {}, h = 0; h < s.length; h++)
          d["$" + s[h]] = !0;
        for (var g = 0; g < l.length; g++) {
          var E = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== E && (l[g].selected = E), E && a && (l[g].defaultSelected = !0);
        }
      } else {
        for (var A = er(Da(u)), L = null, k = 0; k < l.length; k++) {
          if (l[k].value === A) {
            l[k].selected = !0, a && (l[k].defaultSelected = !0);
            return;
          }
          L === null && !l[k].disabled && (L = l[k]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function Tf(e, t) {
      return St({}, t, {
        value: void 0
      });
    }
    function uv(e, t) {
      var u = e;
      pm(t), u._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ds && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ds = !0);
    }
    function vm(e, t) {
      var u = e;
      u.multiple = !!t.multiple;
      var a = t.value;
      a != null ? Ca(u, !!t.multiple, a, !1) : t.defaultValue != null && Ca(u, !!t.multiple, t.defaultValue, !0);
    }
    function hm(e, t) {
      var u = e, a = u._wrapperState.wasMultiple;
      u._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Ca(u, !!t.multiple, l, !1) : a !== !!t.multiple && (t.defaultValue != null ? Ca(u, !!t.multiple, t.defaultValue, !0) : Ca(u, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function mm(e, t) {
      var u = e, a = t.value;
      a != null && Ca(u, !!t.multiple, a, !1);
    }
    var bf = !1;
    function wf(e, t) {
      var u = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = St({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: er(u._wrapperState.initialValue)
      });
      return a;
    }
    function av(e, t) {
      var u = e;
      Qi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !bf && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component"), bf = !0);
      var a = t.value;
      if (a == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (kn(l)) {
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
        initialValue: Da(a)
      };
    }
    function iv(e, t) {
      var u = e, a = Da(t.value), l = Da(t.defaultValue);
      if (a != null) {
        var s = er(a);
        s !== u.value && (u.value = s), t.defaultValue == null && u.defaultValue !== s && (u.defaultValue = s);
      }
      l != null && (u.defaultValue = er(l));
    }
    function lv(e, t) {
      var u = e, a = u.textContent;
      a === u._wrapperState.initialValue && a !== "" && a !== null && (u.value = a);
    }
    function xf(e, t) {
      iv(e, t);
    }
    var Gu = "http://www.w3.org/1999/xhtml", ym = "http://www.w3.org/1998/Math/MathML", Rf = "http://www.w3.org/2000/svg";
    function Es(e) {
      switch (e) {
        case "svg":
          return Rf;
        case "math":
          return ym;
        default:
          return Gu;
      }
    }
    function Bf(e, t) {
      return e == null || e === Gu ? Es(t) : e === Rf && t === "foreignObject" ? Gu : e;
    }
    var gm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, u, a, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, u, a, l);
        });
      } : e;
    }, Cs, ov = gm(function(e, t) {
      if (e.namespaceURI === Rf && !("innerHTML" in e)) {
        Cs = Cs || document.createElement("div"), Cs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var u = Cs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; u.firstChild; )
          e.appendChild(u.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Cr = 1, Yu = 3, An = 8, Du = 9, ni = 11, Ss = function(e, t) {
      if (t) {
        var u = e.firstChild;
        if (u && u === e.lastChild && u.nodeType === Yu) {
          u.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, sv = {
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
    }, Ji = {
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
    function cv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var fv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ji).forEach(function(e) {
      fv.forEach(function(t) {
        Ji[cv(t, e)] = Ji[e];
      });
    });
    function As(e, t, u) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !u && typeof t == "number" && t !== 0 && !(Ji.hasOwnProperty(e) && Ji[e]) ? t + "px" : (cn(t, e), ("" + t).trim());
    }
    var Zi = /([A-Z])/g, Dm = /^ms-/;
    function Em(e) {
      return e.replace(Zi, "-$1").toLowerCase().replace(Dm, "-ms-");
    }
    var dv = function() {
    };
    {
      var pv = /^(?:webkit|moz|o)[A-Z]/, vv = /^-ms-/, io = /-(.)/g, el = /;\s*$/, tl = {}, nl = {}, hv = !1, _f = !1, Of = function(e) {
        return e.replace(io, function(t, u) {
          return u.toUpperCase();
        });
      }, Nf = function(e) {
        tl.hasOwnProperty(e) && tl[e] || (tl[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Of(e.replace(vv, "ms-"))
        ));
      }, mv = function(e) {
        tl.hasOwnProperty(e) && tl[e] || (tl[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, yv = function(e, t) {
        nl.hasOwnProperty(t) && nl[t] || (nl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(el, "")));
      }, gv = function(e, t) {
        hv || (hv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Cm = function(e, t) {
        _f || (_f = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      dv = function(e, t) {
        e.indexOf("-") > -1 ? Nf(e) : pv.test(e) ? mv(e) : el.test(t) && yv(e, t), typeof t == "number" && (isNaN(t) ? gv(e, t) : isFinite(t) || Cm(e, t));
      };
    }
    var Sm = dv;
    function Am(e) {
      {
        var t = "", u = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var l = e[a];
            if (l != null) {
              var s = a.indexOf("--") === 0;
              t += u + (s ? a : Em(a)) + ":", t += As(a, l, s), u = ";";
            }
          }
        return t || null;
      }
    }
    function Dv(e, t) {
      var u = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var l = a.indexOf("--") === 0;
          l || Sm(a, t[a]);
          var s = As(a, t[a], l);
          a === "float" && (a = "cssFloat"), l ? u.setProperty(a, s) : u[a] = s;
        }
    }
    function Fm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Kr(e) {
      var t = {};
      for (var u in e)
        for (var a = sv[u] || [u], l = 0; l < a.length; l++)
          t[a[l]] = u;
      return t;
    }
    function lo(e, t) {
      {
        if (!t)
          return;
        var u = Kr(e), a = Kr(t), l = {};
        for (var s in u) {
          var d = u[s], h = a[s];
          if (h && d !== h) {
            var g = d + "," + h;
            if (l[g])
              continue;
            l[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Fm(e[d]) ? "Removing" : "Updating", d, h);
          }
        }
      }
    }
    var Ev = {
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
    }, Cv = St({
      menuitem: !0
    }, Ev), Sv = "__html";
    function Fs(e, t) {
      if (t) {
        if (Cv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Qu(e, t) {
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
    var Ts = {
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
    }, Av = {
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
    }, Eu = {}, kf = new RegExp("^(aria)-[" + be + "]*$"), oo = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function Mf(e, t) {
      {
        if (_e.call(Eu, t) && Eu[t])
          return !0;
        if (oo.test(t)) {
          var u = "aria-" + t.slice(4).toLowerCase(), a = Av.hasOwnProperty(u) ? u : null;
          if (a == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Eu[t] = !0, !0;
          if (t !== a)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), Eu[t] = !0, !0;
        }
        if (kf.test(t)) {
          var l = t.toLowerCase(), s = Av.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Eu[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Eu[t] = !0, !0;
        }
      }
      return !0;
    }
    function Fv(e, t) {
      {
        var u = [];
        for (var a in t) {
          var l = Mf(e, a);
          l || u.push(a);
        }
        var s = u.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        u.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : u.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function bs(e, t) {
      Qu(e, t) || Fv(e, t);
    }
    var ri = !1;
    function Lf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ri && (ri = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Uf = function() {
    };
    {
      var Mn = {}, zf = /^on./, Tv = /^on[^A-Z]/, bv = new RegExp("^(aria)-[" + be + "]*$"), wv = new RegExp("^(aria)[A-Z][" + be + "]*$");
      Uf = function(e, t, u, a) {
        if (_e.call(Mn, t) && Mn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Mn[t] = !0, !0;
        if (a != null) {
          var s = a.registrationNameDependencies, d = a.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = d.hasOwnProperty(l) ? d[l] : null;
          if (h != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, h), Mn[t] = !0, !0;
          if (zf.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Mn[t] = !0, !0;
        } else if (zf.test(t))
          return Tv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Mn[t] = !0, !0;
        if (bv.test(t) || wv.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Mn[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Mn[t] = !0, !0;
        if (l === "is" && u !== null && u !== void 0 && typeof u != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof u), Mn[t] = !0, !0;
        if (typeof u == "number" && isNaN(u))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Mn[t] = !0, !0;
        var g = wu(t), E = g !== null && g.type === U;
        if (Ts.hasOwnProperty(l)) {
          var A = Ts[l];
          if (A !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, A), Mn[t] = !0, !0;
        } else if (!E && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Mn[t] = !0, !0;
        return typeof u == "boolean" && fn(t, u, g, !1) ? (u ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', u, t, t, u, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', u, t, t, u, t, t, t), Mn[t] = !0, !0) : E ? !0 : fn(t, u, g, !1) ? (Mn[t] = !0, !1) : ((u === "false" || u === "true") && g !== null && g.type === Oe && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", u, t, u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, u), Mn[t] = !0), !0);
      };
    }
    var xv = function(e, t, u) {
      {
        var a = [];
        for (var l in t) {
          var s = Uf(e, l, t[l], u);
          s || a.push(l);
        }
        var d = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : a.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Rv(e, t, u) {
      Qu(e, t) || xv(e, t, u);
    }
    var Wu = 1, so = 2, ui = 4, Tm = Wu | so | ui, co = null;
    function fo(e) {
      co !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), co = e;
    }
    function bm() {
      co === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), co = null;
    }
    function Bv(e) {
      return e === co;
    }
    function ws(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yu ? t.parentNode : t;
    }
    var Vt = null, Sa = null, Ku = null;
    function rl(e) {
      var t = Rl(e);
      if (t) {
        if (typeof Vt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var u = t.stateNode;
        if (u) {
          var a = Bh(u);
          Vt(t.stateNode, t.type, a);
        }
      }
    }
    function _v(e) {
      Vt = e;
    }
    function xs(e) {
      Sa ? Ku ? Ku.push(e) : Ku = [e] : Sa = e;
    }
    function po() {
      return Sa !== null || Ku !== null;
    }
    function vo() {
      if (Sa) {
        var e = Sa, t = Ku;
        if (Sa = null, Ku = null, rl(e), t)
          for (var u = 0; u < t.length; u++)
            rl(t[u]);
      }
    }
    var ai = function(e, t) {
      return e(t);
    }, jf = function() {
    }, Pf = !1;
    function wm() {
      var e = po();
      e && (jf(), vo());
    }
    function $f(e, t, u) {
      if (Pf)
        return e(t, u);
      Pf = !0;
      try {
        return ai(e, t, u);
      } finally {
        Pf = !1, wm();
      }
    }
    function Rs(e, t, u) {
      ai = e, jf = u;
    }
    function Bs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Hf(e, t, u) {
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
    function ii(e, t) {
      var u = e.stateNode;
      if (u === null)
        return null;
      var a = Bh(u);
      if (a === null)
        return null;
      var l = a[t];
      if (Hf(t, e.type, a))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ho = !1;
    if (xe)
      try {
        var li = {};
        Object.defineProperty(li, "passive", {
          get: function() {
            ho = !0;
          }
        }), window.addEventListener("test", li, li), window.removeEventListener("test", li, li);
      } catch {
        ho = !1;
      }
    function Ov(e, t, u, a, l, s, d, h, g) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(u, E);
      } catch (A) {
        this.onError(A);
      }
    }
    var If = Ov;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Vf = document.createElement("react");
      If = function(t, u, a, l, s, d, h, g, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var A = document.createEvent("Event"), L = !1, k = !0, K = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function ae() {
          Vf.removeEventListener(ie, it, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = K);
        }
        var ze = Array.prototype.slice.call(arguments, 3);
        function it() {
          L = !0, ae(), u.apply(a, ze), k = !1;
        }
        var Ze, wt = !1, Ft = !1;
        function V(q) {
          if (Ze = q.error, wt = !0, Ze === null && q.colno === 0 && q.lineno === 0 && (Ft = !0), q.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var ie = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", V), Vf.addEventListener(ie, it, !1), A.initEvent(ie, !1, !1), Vf.dispatchEvent(A), X && Object.defineProperty(window, "event", X), L && k && (wt ? Ft && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", V), !L)
          return ae(), Ov.apply(this, arguments);
      };
    }
    var xm = If, Aa = !1, Cu = null, mo = !1, Fa = null, Ru = {
      onError: function(e) {
        Aa = !0, Cu = e;
      }
    };
    function oi(e, t, u, a, l, s, d, h, g) {
      Aa = !1, Cu = null, xm.apply(Ru, arguments);
    }
    function Xu(e, t, u, a, l, s, d, h, g) {
      if (oi.apply(this, arguments), Aa) {
        var E = Gf();
        mo || (mo = !0, Fa = E);
      }
    }
    function qf() {
      if (mo) {
        var e = Fa;
        throw mo = !1, Fa = null, e;
      }
    }
    function Rm() {
      return Aa;
    }
    function Gf() {
      if (Aa) {
        var e = Cu;
        return Aa = !1, Cu = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xr(e) {
      return e._reactInternals;
    }
    function yo(e) {
      return e._reactInternals !== void 0;
    }
    function ul(e, t) {
      e._reactInternals = t;
    }
    var rt = (
      /*                      */
      0
    ), Ta = (
      /*                */
      1
    ), Qt = (
      /*                    */
      2
    ), Dt = (
      /*                       */
      4
    ), Nt = (
      /*                */
      16
    ), kt = (
      /*                 */
      32
    ), Bu = (
      /*                     */
      64
    ), dt = (
      /*                   */
      128
    ), vn = (
      /*            */
      256
    ), Sr = (
      /*                          */
      512
    ), Jr = (
      /*                     */
      1024
    ), Zt = (
      /*                      */
      2048
    ), Zr = (
      /*                    */
      4096
    ), ba = (
      /*                   */
      8192
    ), go = (
      /*             */
      16384
    ), _s = Zt | Dt | Bu | Sr | Jr | go, Nv = (
      /*               */
      32767
    ), Lr = (
      /*                   */
      32768
    ), Ln = (
      /*                */
      65536
    ), Do = (
      /* */
      131072
    ), Yf = (
      /*                       */
      1048576
    ), Qf = (
      /*                    */
      2097152
    ), Ar = (
      /*                 */
      4194304
    ), wa = (
      /*                */
      8388608
    ), Fr = (
      /*               */
      16777216
    ), si = (
      /*              */
      33554432
    ), al = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Dt | Jr | 0
    ), Tr = Qt | Dt | Nt | kt | Sr | Zr | ba, tr = Dt | Bu | Sr | ba, eu = Zt | Nt, Hn = Ar | wa | Qf, Ju = m.ReactCurrentOwner;
    function Ur(e) {
      var t = e, u = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.flags & (Qt | Zr)) !== rt && (u = t.return), a = t.return;
        while (a);
      }
      return t.tag === ve ? u : null;
    }
    function Wf(e) {
      if (e.tag === $) {
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
    function Os(e) {
      return e.tag === ve ? e.stateNode.containerInfo : null;
    }
    function Kf(e) {
      return Ur(e) === e;
    }
    function zr(e) {
      {
        var t = Ju.current;
        if (t !== null && t.tag === ee) {
          var u = t, a = u.stateNode;
          a._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", mt(u) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var l = Xr(e);
      return l ? Ur(l) === l : !1;
    }
    function br(e) {
      if (Ur(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Wt(e) {
      var t = e.alternate;
      if (!t) {
        var u = Ur(e);
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
          for (var g = s.child; g; ) {
            if (g === a)
              return br(s), e;
            if (g === l)
              return br(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== l.return)
          a = s, l = d;
        else {
          for (var E = !1, A = s.child; A; ) {
            if (A === a) {
              E = !0, a = s, l = d;
              break;
            }
            if (A === l) {
              E = !0, l = s, a = d;
              break;
            }
            A = A.sibling;
          }
          if (!E) {
            for (A = d.child; A; ) {
              if (A === a) {
                E = !0, a = d, l = s;
                break;
              }
              if (A === l) {
                E = !0, l = d, a = s;
                break;
              }
              A = A.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== ve)
        throw new Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function tu(e) {
      var t = Wt(e);
      return t !== null ? Xf(t) : null;
    }
    function Xf(e) {
      if (e.tag === re || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var u = Xf(t);
        if (u !== null)
          return u;
        t = t.sibling;
      }
      return null;
    }
    function kv(e) {
      var t = Wt(e);
      return t !== null ? Ns(t) : null;
    }
    function Ns(e) {
      if (e.tag === re || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== z) {
          var u = Ns(t);
          if (u !== null)
            return u;
        }
        t = t.sibling;
      }
      return null;
    }
    var ks = p.unstable_scheduleCallback, Mv = p.unstable_cancelCallback, Ms = p.unstable_shouldYield, Lv = p.unstable_requestPaint, rn = p.unstable_now, Jf = p.unstable_getCurrentPriorityLevel, Ls = p.unstable_ImmediatePriority, jr = p.unstable_UserBlockingPriority, _u = p.unstable_NormalPriority, Us = p.unstable_LowPriority, xa = p.unstable_IdlePriority, Zf = p.unstable_yieldValue, ed = p.unstable_setDisableYieldValue, Ra = null, Un = null, Re = null, gn = !1, In = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function td(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ae && (e = St({}, e, {
          getLaneLabelMap: _a,
          injectProfilingHooks: ea
        })), Ra = t.inject(e), Un = t;
      } catch (u) {
        y("React instrumentation encountered an error: %s.", u);
      }
      return !!t.checkDCE;
    }
    function Uv(e, t) {
      if (Un && typeof Un.onScheduleFiberRoot == "function")
        try {
          Un.onScheduleFiberRoot(Ra, e, t);
        } catch (u) {
          gn || (gn = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Zu(e, t) {
      if (Un && typeof Un.onCommitFiberRoot == "function")
        try {
          var u = (e.current.flags & dt) === dt;
          if (x) {
            var a;
            switch (t) {
              case nr:
                a = Ls;
                break;
              case Vn:
                a = jr;
                break;
              case na:
                a = _u;
                break;
              case xo:
                a = xa;
                break;
              default:
                a = _u;
                break;
            }
            Un.onCommitFiberRoot(Ra, e, a, u);
          }
        } catch (l) {
          gn || (gn = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function Ba(e) {
      if (Un && typeof Un.onPostCommitFiberRoot == "function")
        try {
          Un.onPostCommitFiberRoot(Ra, e);
        } catch (t) {
          gn || (gn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function nd(e) {
      if (Un && typeof Un.onCommitFiberUnmount == "function")
        try {
          Un.onCommitFiberUnmount(Ra, e);
        } catch (t) {
          gn || (gn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function xn(e) {
      if (typeof Zf == "function" && (ed(e), R(e)), Un && typeof Un.setStrictMode == "function")
        try {
          Un.setStrictMode(Ra, e);
        } catch (t) {
          gn || (gn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ea(e) {
      Re = e;
    }
    function _a() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, u = 0; u < Kt; u++) {
          var a = Bm(t);
          e.set(t, a), t *= 2;
        }
        return e;
      }
    }
    function zs(e) {
      Re !== null && typeof Re.markCommitStarted == "function" && Re.markCommitStarted(e);
    }
    function rd() {
      Re !== null && typeof Re.markCommitStopped == "function" && Re.markCommitStopped();
    }
    function Oa(e) {
      Re !== null && typeof Re.markComponentRenderStarted == "function" && Re.markComponentRenderStarted(e);
    }
    function ci() {
      Re !== null && typeof Re.markComponentRenderStopped == "function" && Re.markComponentRenderStopped();
    }
    function zv(e) {
      Re !== null && typeof Re.markComponentPassiveEffectMountStarted == "function" && Re.markComponentPassiveEffectMountStarted(e);
    }
    function ud() {
      Re !== null && typeof Re.markComponentPassiveEffectMountStopped == "function" && Re.markComponentPassiveEffectMountStopped();
    }
    function js(e) {
      Re !== null && typeof Re.markComponentPassiveEffectUnmountStarted == "function" && Re.markComponentPassiveEffectUnmountStarted(e);
    }
    function jv() {
      Re !== null && typeof Re.markComponentPassiveEffectUnmountStopped == "function" && Re.markComponentPassiveEffectUnmountStopped();
    }
    function Pv(e) {
      Re !== null && typeof Re.markComponentLayoutEffectMountStarted == "function" && Re.markComponentLayoutEffectMountStarted(e);
    }
    function $v() {
      Re !== null && typeof Re.markComponentLayoutEffectMountStopped == "function" && Re.markComponentLayoutEffectMountStopped();
    }
    function Ps(e) {
      Re !== null && typeof Re.markComponentLayoutEffectUnmountStarted == "function" && Re.markComponentLayoutEffectUnmountStarted(e);
    }
    function il() {
      Re !== null && typeof Re.markComponentLayoutEffectUnmountStopped == "function" && Re.markComponentLayoutEffectUnmountStopped();
    }
    function $s(e, t, u) {
      Re !== null && typeof Re.markComponentErrored == "function" && Re.markComponentErrored(e, t, u);
    }
    function Hv(e, t, u) {
      Re !== null && typeof Re.markComponentSuspended == "function" && Re.markComponentSuspended(e, t, u);
    }
    function Iv(e) {
      Re !== null && typeof Re.markLayoutEffectsStarted == "function" && Re.markLayoutEffectsStarted(e);
    }
    function ll() {
      Re !== null && typeof Re.markLayoutEffectsStopped == "function" && Re.markLayoutEffectsStopped();
    }
    function Vv(e) {
      Re !== null && typeof Re.markPassiveEffectsStarted == "function" && Re.markPassiveEffectsStarted(e);
    }
    function Eo() {
      Re !== null && typeof Re.markPassiveEffectsStopped == "function" && Re.markPassiveEffectsStopped();
    }
    function Su(e) {
      Re !== null && typeof Re.markRenderStarted == "function" && Re.markRenderStarted(e);
    }
    function Co() {
      Re !== null && typeof Re.markRenderYielded == "function" && Re.markRenderYielded();
    }
    function ol() {
      Re !== null && typeof Re.markRenderStopped == "function" && Re.markRenderStopped();
    }
    function fi(e) {
      Re !== null && typeof Re.markRenderScheduled == "function" && Re.markRenderScheduled(e);
    }
    function ad(e, t) {
      Re !== null && typeof Re.markForceUpdateScheduled == "function" && Re.markForceUpdateScheduled(e, t);
    }
    function Na(e, t) {
      Re !== null && typeof Re.markStateUpdateScheduled == "function" && Re.markStateUpdateScheduled(e, t);
    }
    var lt = (
      /*                         */
      0
    ), Ct = (
      /*                 */
      1
    ), ot = (
      /*                    */
      2
    ), un = (
      /*               */
      8
    ), nu = (
      /*              */
      16
    ), Hs = Math.clz32 ? Math.clz32 : di, Is = Math.log, id = Math.LN2;
    function di(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Is(t) / id | 0) | 0;
    }
    var Kt = 31, oe = (
      /*                        */
      0
    ), Tt = (
      /*                          */
      0
    ), st = (
      /*                        */
      1
    ), Ou = (
      /*    */
      2
    ), Pr = (
      /*             */
      4
    ), pi = (
      /*            */
      8
    ), Xt = (
      /*                     */
      16
    ), vi = (
      /*                */
      32
    ), ka = (
      /*                       */
      4194240
    ), hi = (
      /*                        */
      64
    ), ru = (
      /*                        */
      128
    ), wr = (
      /*                        */
      256
    ), mi = (
      /*                        */
      512
    ), So = (
      /*                        */
      1024
    ), Ao = (
      /*                        */
      2048
    ), Vs = (
      /*                        */
      4096
    ), qs = (
      /*                        */
      8192
    ), Gs = (
      /*                        */
      16384
    ), Ys = (
      /*                       */
      32768
    ), Qs = (
      /*                       */
      65536
    ), Ws = (
      /*                       */
      131072
    ), Ks = (
      /*                       */
      262144
    ), Xs = (
      /*                       */
      524288
    ), yi = (
      /*                       */
      1048576
    ), Js = (
      /*                       */
      2097152
    ), gi = (
      /*                            */
      130023424
    ), ta = (
      /*                             */
      4194304
    ), Zs = (
      /*                             */
      8388608
    ), Fo = (
      /*                             */
      16777216
    ), ec = (
      /*                             */
      33554432
    ), tc = (
      /*                             */
      67108864
    ), ld = ta, sl = (
      /*          */
      134217728
    ), nc = (
      /*                          */
      268435455
    ), cl = (
      /*               */
      268435456
    ), Ma = (
      /*                        */
      536870912
    ), xr = (
      /*                   */
      1073741824
    );
    function Bm(e) {
      {
        if (e & st)
          return "Sync";
        if (e & Ou)
          return "InputContinuousHydration";
        if (e & Pr)
          return "InputContinuous";
        if (e & pi)
          return "DefaultHydration";
        if (e & Xt)
          return "Default";
        if (e & vi)
          return "TransitionHydration";
        if (e & ka)
          return "Transition";
        if (e & gi)
          return "Retry";
        if (e & sl)
          return "SelectiveHydration";
        if (e & cl)
          return "IdleHydration";
        if (e & Ma)
          return "Idle";
        if (e & xr)
          return "Offscreen";
      }
    }
    var qt = -1, rc = hi, uc = ta;
    function fl(e) {
      switch (Fn(e)) {
        case st:
          return st;
        case Ou:
          return Ou;
        case Pr:
          return Pr;
        case pi:
          return pi;
        case Xt:
          return Xt;
        case vi:
          return vi;
        case hi:
        case ru:
        case wr:
        case mi:
        case So:
        case Ao:
        case Vs:
        case qs:
        case Gs:
        case Ys:
        case Qs:
        case Ws:
        case Ks:
        case Xs:
        case yi:
        case Js:
          return e & ka;
        case ta:
        case Zs:
        case Fo:
        case ec:
        case tc:
          return e & gi;
        case sl:
          return sl;
        case cl:
          return cl;
        case Ma:
          return Ma;
        case xr:
          return xr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function To(e, t) {
      var u = e.pendingLanes;
      if (u === oe)
        return oe;
      var a = oe, l = e.suspendedLanes, s = e.pingedLanes, d = u & nc;
      if (d !== oe) {
        var h = d & ~l;
        if (h !== oe)
          a = fl(h);
        else {
          var g = d & s;
          g !== oe && (a = fl(g));
        }
      } else {
        var E = u & ~l;
        E !== oe ? a = fl(E) : s !== oe && (a = fl(s));
      }
      if (a === oe)
        return oe;
      if (t !== oe && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === oe) {
        var A = Fn(a), L = Fn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          A >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          A === Xt && (L & ka) !== oe
        )
          return t;
      }
      (a & Pr) !== oe && (a |= u & Xt);
      var k = e.entangledLanes;
      if (k !== oe)
        for (var K = e.entanglements, X = a & k; X > 0; ) {
          var ae = La(X), ze = 1 << ae;
          a |= K[ae], X &= ~ze;
        }
      return a;
    }
    function qv(e, t) {
      for (var u = e.eventTimes, a = qt; t > 0; ) {
        var l = La(t), s = 1 << l, d = u[l];
        d > a && (a = d), t &= ~s;
      }
      return a;
    }
    function ac(e, t) {
      switch (e) {
        case st:
        case Ou:
        case Pr:
          return t + 250;
        case pi:
        case Xt:
        case vi:
        case hi:
        case ru:
        case wr:
        case mi:
        case So:
        case Ao:
        case Vs:
        case qs:
        case Gs:
        case Ys:
        case Qs:
        case Ws:
        case Ks:
        case Xs:
        case yi:
        case Js:
          return t + 5e3;
        case ta:
        case Zs:
        case Fo:
        case ec:
        case tc:
          return qt;
        case sl:
        case cl:
        case Ma:
        case xr:
          return qt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function _m(e, t) {
      for (var u = e.pendingLanes, a = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = u; d > 0; ) {
        var h = La(d), g = 1 << h, E = s[h];
        E === qt ? ((g & a) === oe || (g & l) !== oe) && (s[h] = ac(g, t)) : E <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function Om(e) {
      return fl(e.pendingLanes);
    }
    function od(e) {
      var t = e.pendingLanes & ~xr;
      return t !== oe ? t : t & xr ? xr : oe;
    }
    function dl(e) {
      return (e & st) !== oe;
    }
    function bo(e) {
      return (e & nc) !== oe;
    }
    function ic(e) {
      return (e & gi) === e;
    }
    function Nm(e) {
      var t = st | Pr | Xt;
      return (e & t) === oe;
    }
    function Gv(e) {
      return (e & ka) === e;
    }
    function wo(e, t) {
      var u = Ou | Pr | pi | Xt;
      return (t & u) !== oe;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== oe;
    }
    function sd(e) {
      return (e & ka) !== oe;
    }
    function cd() {
      var e = rc;
      return rc <<= 1, (rc & ka) === oe && (rc = hi), e;
    }
    function km() {
      var e = uc;
      return uc <<= 1, (uc & gi) === oe && (uc = ta), e;
    }
    function Fn(e) {
      return e & -e;
    }
    function Rn(e) {
      return Fn(e);
    }
    function La(e) {
      return 31 - Hs(e);
    }
    function lc(e) {
      return La(e);
    }
    function Rr(e, t) {
      return (e & t) !== oe;
    }
    function Di(e, t) {
      return (e & t) === t;
    }
    function Et(e, t) {
      return e | t;
    }
    function pl(e, t) {
      return e & ~t;
    }
    function fd(e, t) {
      return e & t;
    }
    function Qv(e) {
      return e;
    }
    function Wv(e, t) {
      return e !== Tt && e < t ? e : t;
    }
    function oc(e) {
      for (var t = [], u = 0; u < Kt; u++)
        t.push(e);
      return t;
    }
    function Ei(e, t, u) {
      e.pendingLanes |= t, t !== Ma && (e.suspendedLanes = oe, e.pingedLanes = oe);
      var a = e.eventTimes, l = lc(t);
      a[l] = u;
    }
    function dd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var u = e.expirationTimes, a = t; a > 0; ) {
        var l = La(a), s = 1 << l;
        u[l] = qt, a &= ~s;
      }
    }
    function pd(e, t, u) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function vd(e, t) {
      var u = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = oe, e.pingedLanes = oe, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = u; d > 0; ) {
        var h = La(d), g = 1 << h;
        a[h] = oe, l[h] = qt, s[h] = qt, d &= ~g;
      }
    }
    function vl(e, t) {
      for (var u = e.entangledLanes |= t, a = e.entanglements, l = u; l; ) {
        var s = La(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[s] & t && (a[s] |= t), l &= ~d;
      }
    }
    function Mm(e, t) {
      var u = Fn(t), a;
      switch (u) {
        case Pr:
          a = Ou;
          break;
        case Xt:
          a = pi;
          break;
        case hi:
        case ru:
        case wr:
        case mi:
        case So:
        case Ao:
        case Vs:
        case qs:
        case Gs:
        case Ys:
        case Qs:
        case Ws:
        case Ks:
        case Xs:
        case yi:
        case Js:
        case ta:
        case Zs:
        case Fo:
        case ec:
        case tc:
          a = vi;
          break;
        case Ma:
          a = cl;
          break;
        default:
          a = Tt;
          break;
      }
      return (a & (e.suspendedLanes | t)) !== Tt ? Tt : a;
    }
    function hd(e, t, u) {
      if (In)
        for (var a = e.pendingUpdatersLaneMap; u > 0; ) {
          var l = lc(u), s = 1 << l, d = a[l];
          d.add(t), u &= ~s;
        }
    }
    function sc(e, t) {
      if (In)
        for (var u = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var l = lc(t), s = 1 << l, d = u[l];
          d.size > 0 && (d.forEach(function(h) {
            var g = h.alternate;
            (g === null || !a.has(g)) && a.add(h);
          }), d.clear()), t &= ~s;
        }
    }
    function md(e, t) {
      return null;
    }
    var nr = st, Vn = Pr, na = Xt, xo = Ma, Ci = Tt;
    function uu() {
      return Ci;
    }
    function Bn(e) {
      Ci = e;
    }
    function Ro(e, t) {
      var u = Ci;
      try {
        return Ci = e, t();
      } finally {
        Ci = u;
      }
    }
    function rr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Lm(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function yd(e, t) {
      return e !== 0 && e < t;
    }
    function Bo(e) {
      var t = Fn(e);
      return yd(nr, t) ? yd(Vn, t) ? bo(t) ? na : xo : Vn : nr;
    }
    function _n(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Kv;
    function He(e) {
      Kv = e;
    }
    function hl(e) {
      Kv(e);
    }
    var _o;
    function Xv(e) {
      _o = e;
    }
    var Jv;
    function Oo(e) {
      Jv = e;
    }
    var No;
    function gd(e) {
      No = e;
    }
    var Dd;
    function Zv(e) {
      Dd = e;
    }
    var cc = !1, ml = [], Nu = null, en = null, zn = null, au = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), ra = [], Au = [
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
    function eh(e) {
      return Au.indexOf(e) > -1;
    }
    function ku(e, t, u, a, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: u,
        nativeEvent: l,
        targetContainers: [a]
      };
    }
    function th(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Nu = null;
          break;
        case "dragenter":
        case "dragleave":
          en = null;
          break;
        case "mouseover":
        case "mouseout":
          zn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var u = t.pointerId;
          au.delete(u);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var a = t.pointerId;
          yl.delete(a);
          break;
        }
      }
    }
    function gl(e, t, u, a, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = ku(t, u, a, l, s);
        if (t !== null) {
          var h = Rl(t);
          h !== null && _o(h);
        }
        return d;
      }
      e.eventSystemFlags |= a;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function nh(e, t, u, a, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Nu = gl(Nu, e, t, u, a, s), !0;
        }
        case "dragenter": {
          var d = l;
          return en = gl(en, e, t, u, a, d), !0;
        }
        case "mouseover": {
          var h = l;
          return zn = gl(zn, e, t, u, a, h), !0;
        }
        case "pointerover": {
          var g = l, E = g.pointerId;
          return au.set(E, gl(au.get(E) || null, e, t, u, a, g)), !0;
        }
        case "gotpointercapture": {
          var A = l, L = A.pointerId;
          return yl.set(L, gl(yl.get(L) || null, e, t, u, a, A)), !0;
        }
      }
      return !1;
    }
    function Ed(e) {
      var t = Ho(e.target);
      if (t !== null) {
        var u = Ur(t);
        if (u !== null) {
          var a = u.tag;
          if (a === $) {
            var l = Wf(u);
            if (l !== null) {
              e.blockedOn = l, Dd(e.priority, function() {
                Jv(u);
              });
              return;
            }
          } else if (a === ve) {
            var s = u.stateNode;
            if (_n(s)) {
              e.blockedOn = Os(u);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function rh(e) {
      for (var t = No(), u = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < ra.length && yd(t, ra[a].priority); a++)
        ;
      ra.splice(a, 0, u), a === 0 && Ed(u);
    }
    function fc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var u = t[0], a = Si(e.domEventName, e.eventSystemFlags, u, e.nativeEvent);
        if (a === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          fo(s), l.target.dispatchEvent(s), bm();
        } else {
          var d = Rl(a);
          return d !== null && _o(d), e.blockedOn = a, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ko(e, t, u) {
      fc(e) && u.delete(t);
    }
    function Cd() {
      cc = !1, Nu !== null && fc(Nu) && (Nu = null), en !== null && fc(en) && (en = null), zn !== null && fc(zn) && (zn = null), au.forEach(ko), yl.forEach(ko);
    }
    function ur(e, t) {
      e.blockedOn === t && (e.blockedOn = null, cc || (cc = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Cd)));
    }
    function At(e) {
      if (ml.length > 0) {
        ur(ml[0], e);
        for (var t = 1; t < ml.length; t++) {
          var u = ml[t];
          u.blockedOn === e && (u.blockedOn = null);
        }
      }
      Nu !== null && ur(Nu, e), en !== null && ur(en, e), zn !== null && ur(zn, e);
      var a = function(h) {
        return ur(h, e);
      };
      au.forEach(a), yl.forEach(a);
      for (var l = 0; l < ra.length; l++) {
        var s = ra[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; ra.length > 0; ) {
        var d = ra[0];
        if (d.blockedOn !== null)
          break;
        Ed(d), d.blockedOn === null && ra.shift();
      }
    }
    var an = m.ReactCurrentBatchConfig, hn = !0;
    function jn(e) {
      hn = !!e;
    }
    function $r() {
      return hn;
    }
    function Dl(e, t, u) {
      var a = cr(t), l;
      switch (a) {
        case nr:
          l = On;
          break;
        case Vn:
          l = Mo;
          break;
        case na:
        default:
          l = ua;
          break;
      }
      return l.bind(null, t, u, e);
    }
    function On(e, t, u, a) {
      var l = uu(), s = an.transition;
      an.transition = null;
      try {
        Bn(nr), ua(e, t, u, a);
      } finally {
        Bn(l), an.transition = s;
      }
    }
    function Mo(e, t, u, a) {
      var l = uu(), s = an.transition;
      an.transition = null;
      try {
        Bn(Vn), ua(e, t, u, a);
      } finally {
        Bn(l), an.transition = s;
      }
    }
    function ua(e, t, u, a) {
      hn && dc(e, t, u, a);
    }
    function dc(e, t, u, a) {
      var l = Si(e, t, u, a);
      if (l === null) {
        ny(e, t, a, El, u), th(e, a);
        return;
      }
      if (nh(l, e, t, u, a)) {
        a.stopPropagation();
        return;
      }
      if (th(e, a), t & ui && eh(e)) {
        for (; l !== null; ) {
          var s = Rl(l);
          s !== null && hl(s);
          var d = Si(e, t, u, a);
          if (d === null && ny(e, t, a, El, u), d === l)
            break;
          l = d;
        }
        l !== null && a.stopPropagation();
        return;
      }
      ny(e, t, a, null, u);
    }
    var El = null;
    function Si(e, t, u, a) {
      El = null;
      var l = ws(a), s = Ho(l);
      if (s !== null) {
        var d = Ur(s);
        if (d === null)
          s = null;
        else {
          var h = d.tag;
          if (h === $) {
            var g = Wf(d);
            if (g !== null)
              return g;
            s = null;
          } else if (h === ve) {
            var E = d.stateNode;
            if (_n(E))
              return Os(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return El = s, null;
    }
    function cr(e) {
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
          return nr;
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
          return Vn;
        case "message": {
          var t = Jf();
          switch (t) {
            case Ls:
              return nr;
            case jr:
              return Vn;
            case _u:
            case Us:
              return na;
            case xa:
              return xo;
            default:
              return na;
          }
        }
        default:
          return na;
      }
    }
    function Sd(e, t, u) {
      return e.addEventListener(t, u, !1), u;
    }
    function Cl(e, t, u) {
      return e.addEventListener(t, u, !0), u;
    }
    function aa(e, t, u, a) {
      return e.addEventListener(t, u, {
        capture: !0,
        passive: a
      }), u;
    }
    function pc(e, t, u, a) {
      return e.addEventListener(t, u, {
        passive: a
      }), u;
    }
    var Ai = null, Mu = null, Ua = null;
    function za(e) {
      return Ai = e, Mu = hc(), !0;
    }
    function vc() {
      Ai = null, Mu = null, Ua = null;
    }
    function Sl() {
      if (Ua)
        return Ua;
      var e, t = Mu, u = t.length, a, l = hc(), s = l.length;
      for (e = 0; e < u && t[e] === l[e]; e++)
        ;
      var d = u - e;
      for (a = 1; a <= d && t[u - a] === l[s - a]; a++)
        ;
      var h = a > 1 ? 1 - a : void 0;
      return Ua = l.slice(e, h), Ua;
    }
    function hc() {
      return "value" in Ai ? Ai.value : Ai.textContent;
    }
    function Fi(e) {
      var t, u = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && u === 13 && (t = 13)) : t = u, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ti() {
      return !0;
    }
    function ar() {
      return !1;
    }
    function Tn(e) {
      function t(u, a, l, s, d) {
        this._reactName = u, this._targetInst = l, this.type = a, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var g = e[h];
            g ? this[h] = g(s) : this[h] = s[h];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = Ti : this.isDefaultPrevented = ar, this.isPropagationStopped = ar, this;
      }
      return St(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ti);
        },
        stopPropagation: function() {
          var u = this.nativeEvent;
          u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ti);
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
        isPersistent: Ti
      }), t;
    }
    var ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, lr = Tn(ir), Al = St({}, ir, {
      view: 0,
      detail: 0
    }), Ad = Tn(Al), Lo, Fd, iu;
    function uh(e) {
      e !== iu && (iu && e.type === "mousemove" ? (Lo = e.screenX - iu.screenX, Fd = e.screenY - iu.screenY) : (Lo = 0, Fd = 0), iu = e);
    }
    var Fl = St({}, Al, {
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
      getModifierState: gc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (uh(e), Lo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fd;
      }
    }), ja = Tn(Fl), Td = St({}, Fl, {
      dataTransfer: 0
    }), bi = Tn(Td), ah = St({}, Al, {
      relatedTarget: 0
    }), mc = Tn(ah), bd = St({}, ir, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), yc = Tn(bd), Um = St({}, ir, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), zm = Tn(Um), ih = St({}, ir, {
      data: 0
    }), wd = Tn(ih), wi = wd, jm = {
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
    }, Tl = {
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
    function lh(e) {
      if (e.key) {
        var t = jm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var u = Fi(e);
        return u === 13 ? "Enter" : String.fromCharCode(u);
      }
      return e.type === "keydown" || e.type === "keyup" ? Tl[e.keyCode] || "Unidentified" : "";
    }
    var mn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Pm(e) {
      var t = this, u = t.nativeEvent;
      if (u.getModifierState)
        return u.getModifierState(e);
      var a = mn[e];
      return a ? !!u[a] : !1;
    }
    function gc(e) {
      return Pm;
    }
    var $m = St({}, Al, {
      key: lh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fi(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Hm = Tn($m), oh = St({}, Fl, {
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
    }), xd = Tn(oh), Im = St({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gc
    }), lu = Tn(Im), Rd = St({}, ir, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Vm = Tn(Rd), Pa = St({}, Fl, {
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
    }), Dc = Tn(Pa), xi = [9, 13, 27, 32], Uo = 229, zo = xe && "CompositionEvent" in window, Ri = null;
    xe && "documentMode" in document && (Ri = document.documentMode);
    var qm = xe && "TextEvent" in window && !Ri, Ec = xe && (!zo || Ri && Ri > 8 && Ri <= 11), sh = 32, Bd = String.fromCharCode(sh);
    function ch() {
      G("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), G("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), G("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), G("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var jo = !1;
    function Cc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function fh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function _d(e, t) {
      return e === "keydown" && t.keyCode === Uo;
    }
    function dh(e, t) {
      switch (e) {
        case "keyup":
          return xi.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Uo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Od(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sc(e) {
      return e.locale === "ko";
    }
    var ia = !1;
    function Nd(e, t, u, a, l) {
      var s, d;
      if (zo ? s = fh(t) : ia ? dh(t, a) && (s = "onCompositionEnd") : _d(t, a) && (s = "onCompositionStart"), !s)
        return null;
      Ec && !Sc(a) && (!ia && s === "onCompositionStart" ? ia = za(l) : s === "onCompositionEnd" && ia && (d = Sl()));
      var h = yh(u, s);
      if (h.length > 0) {
        var g = new wd(s, t, null, a, l);
        if (e.push({
          event: g,
          listeners: h
        }), d)
          g.data = d;
        else {
          var E = Od(a);
          E !== null && (g.data = E);
        }
      }
    }
    function Ac(e, t) {
      switch (e) {
        case "compositionend":
          return Od(t);
        case "keypress":
          var u = t.which;
          return u !== sh ? null : (jo = !0, Bd);
        case "textInput":
          var a = t.data;
          return a === Bd && jo ? null : a;
        default:
          return null;
      }
    }
    function ph(e, t) {
      if (ia) {
        if (e === "compositionend" || !zo && dh(e, t)) {
          var u = Sl();
          return vc(), ia = !1, u;
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
          return Ec && !Sc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Gm(e, t, u, a, l) {
      var s;
      if (qm ? s = Ac(t, a) : s = ph(t, a), !s)
        return null;
      var d = yh(u, "onBeforeInput");
      if (d.length > 0) {
        var h = new wi("onBeforeInput", "beforeinput", null, a, l);
        e.push({
          event: h,
          listeners: d
        }), h.data = s;
      }
    }
    function Fc(e, t, u, a, l, s, d) {
      Nd(e, t, u, a, l), Gm(e, t, u, a, l);
    }
    var Ym = {
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
    function bl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ym[e.type] : t === "textarea";
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
    function Qm(e) {
      if (!xe)
        return !1;
      var t = "on" + e, u = t in document;
      if (!u) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), u = typeof a[t] == "function";
      }
      return u;
    }
    function Tc() {
      G("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, u, a) {
      xs(a);
      var l = yh(t, "onChange");
      if (l.length > 0) {
        var s = new lr("onChange", "change", null, u, a);
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
      n(t, i, e, ws(e)), $f(v, t);
    }
    function v(e) {
      LD(e, 0);
    }
    function D(e) {
      var t = _c(e);
      if (Zp(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var N = !1;
    xe && (N = Qm("input") && (!document.documentMode || document.documentMode > 9));
    function J(e, t) {
      r = e, i = t, r.attachEvent("onpropertychange", Ce);
    }
    function ye() {
      r && (r.detachEvent("onpropertychange", Ce), r = null, i = null);
    }
    function Ce(e) {
      e.propertyName === "value" && D(i) && f(e);
    }
    function me(e, t, u) {
      e === "focusin" ? (ye(), J(t, u)) : e === "focusout" && ye();
    }
    function Me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return D(i);
    }
    function Ve(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function We(e, t) {
      if (e === "click")
        return D(t);
    }
    function Dn(e, t) {
      if (e === "input" || e === "change")
        return D(t);
    }
    function I(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ea(e, "number", e.value);
    }
    function M(e, t, u, a, l, s, d) {
      var h = u ? _c(u) : window, g, E;
      if (o(h) ? g = w : bl(h) ? N ? g = Dn : (g = Me, E = me) : Ve(h) && (g = We), g) {
        var A = g(t, u);
        if (A) {
          n(e, A, a, l);
          return;
        }
      }
      E && E(t, h, u), t === "focusout" && I(h);
    }
    function Y() {
      ue("onMouseEnter", ["mouseout", "mouseover"]), ue("onMouseLeave", ["mouseout", "mouseover"]), ue("onPointerEnter", ["pointerout", "pointerover"]), ue("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Fe(e, t, u, a, l, s, d) {
      var h = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (h && !Bv(a)) {
        var E = a.relatedTarget || a.fromElement;
        if (E && (Ho(E) || Yd(E)))
          return;
      }
      if (!(!g && !h)) {
        var A;
        if (l.window === l)
          A = l;
        else {
          var L = l.ownerDocument;
          L ? A = L.defaultView || L.parentWindow : A = window;
        }
        var k, K;
        if (g) {
          var X = a.relatedTarget || a.toElement;
          if (k = u, K = X ? Ho(X) : null, K !== null) {
            var ae = Ur(K);
            (K !== ae || K.tag !== re && K.tag !== ce) && (K = null);
          }
        } else
          k = null, K = u;
        if (k !== K) {
          var ze = ja, it = "onMouseLeave", Ze = "onMouseEnter", wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ze = xd, it = "onPointerLeave", Ze = "onPointerEnter", wt = "pointer");
          var Ft = k == null ? A : _c(k), V = K == null ? A : _c(K), ie = new ze(it, wt + "leave", k, a, l);
          ie.target = Ft, ie.relatedTarget = V;
          var q = null, Se = Ho(l);
          if (Se === u) {
            var je = new ze(Ze, wt + "enter", K, a, l);
            je.target = V, je.relatedTarget = Ft, q = je;
          }
          oT(e, ie, q, k, K);
        }
      }
    }
    function Xe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var qe = typeof Object.is == "function" ? Object.is : Xe;
    function tt(e, t) {
      if (qe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var u = Object.keys(e), a = Object.keys(t);
      if (u.length !== a.length)
        return !1;
      for (var l = 0; l < u.length; l++) {
        var s = u[l];
        if (!_e.call(t, s) || !qe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function pt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Pn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Bt(e, t) {
      for (var u = pt(e), a = 0, l = 0; u; ) {
        if (u.nodeType === Yu) {
          if (l = a + u.textContent.length, a <= t && l >= t)
            return {
              node: u,
              offset: t - a
            };
          a = l;
        }
        u = pt(Pn(u));
      }
    }
    function $a(e) {
      var t = e.ownerDocument, u = t && t.defaultView || window, a = u.getSelection && u.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var l = a.anchorNode, s = a.anchorOffset, d = a.focusNode, h = a.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return Wm(e, l, s, d, h);
    }
    function Wm(e, t, u, a, l) {
      var s = 0, d = -1, h = -1, g = 0, E = 0, A = e, L = null;
      e:
        for (; ; ) {
          for (var k = null; A === t && (u === 0 || A.nodeType === Yu) && (d = s + u), A === a && (l === 0 || A.nodeType === Yu) && (h = s + l), A.nodeType === Yu && (s += A.nodeValue.length), (k = A.firstChild) !== null; )
            L = A, A = k;
          for (; ; ) {
            if (A === e)
              break e;
            if (L === t && ++g === u && (d = s), L === a && ++E === l && (h = s), (k = A.nextSibling) !== null)
              break;
            A = L, L = A.parentNode;
          }
          A = k;
        }
      return d === -1 || h === -1 ? null : {
        start: d,
        end: h
      };
    }
    function IF(e, t) {
      var u = e.ownerDocument || document, a = u && u.defaultView || window;
      if (a.getSelection) {
        var l = a.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), h = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > h) {
          var g = h;
          h = d, d = g;
        }
        var E = Bt(e, d), A = Bt(e, h);
        if (E && A) {
          if (l.rangeCount === 1 && l.anchorNode === E.node && l.anchorOffset === E.offset && l.focusNode === A.node && l.focusOffset === A.offset)
            return;
          var L = u.createRange();
          L.setStart(E.node, E.offset), l.removeAllRanges(), d > h ? (l.addRange(L), l.extend(A.node, A.offset)) : (L.setEnd(A.node, A.offset), l.addRange(L));
        }
      }
    }
    function FD(e) {
      return e && e.nodeType === Yu;
    }
    function TD(e, t) {
      return !e || !t ? !1 : e === t ? !0 : FD(e) ? !1 : FD(t) ? TD(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function VF(e) {
      return e && e.ownerDocument && TD(e.ownerDocument.documentElement, e);
    }
    function qF(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function bD() {
      for (var e = window, t = vs(); t instanceof e.HTMLIFrameElement; ) {
        if (qF(t))
          e = t.contentWindow;
        else
          return t;
        t = vs(e.document);
      }
      return t;
    }
    function Km(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function GF() {
      var e = bD();
      return {
        focusedElem: e,
        selectionRange: Km(e) ? QF(e) : null
      };
    }
    function YF(e) {
      var t = bD(), u = e.focusedElem, a = e.selectionRange;
      if (t !== u && VF(u)) {
        a !== null && Km(u) && WF(u, a);
        for (var l = [], s = u; s = s.parentNode; )
          s.nodeType === Cr && l.push({
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
    function QF(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = $a(e), t || {
        start: 0,
        end: 0
      };
    }
    function WF(e, t) {
      var u = t.start, a = t.end;
      a === void 0 && (a = u), "selectionStart" in e ? (e.selectionStart = u, e.selectionEnd = Math.min(a, e.value.length)) : IF(e, t);
    }
    var KF = xe && "documentMode" in document && document.documentMode <= 11;
    function XF() {
      G("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var bc = null, Xm = null, kd = null, Jm = !1;
    function JF(e) {
      if ("selectionStart" in e && Km(e))
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
    function ZF(e) {
      return e.window === e ? e.document : e.nodeType === Du ? e : e.ownerDocument;
    }
    function wD(e, t, u) {
      var a = ZF(u);
      if (!(Jm || bc == null || bc !== vs(a))) {
        var l = JF(bc);
        if (!kd || !tt(kd, l)) {
          kd = l;
          var s = yh(Xm, "onSelect");
          if (s.length > 0) {
            var d = new lr("onSelect", "select", null, t, u);
            e.push({
              event: d,
              listeners: s
            }), d.target = bc;
          }
        }
      }
    }
    function eT(e, t, u, a, l, s, d) {
      var h = u ? _c(u) : window;
      switch (t) {
        case "focusin":
          (bl(h) || h.contentEditable === "true") && (bc = h, Xm = u, kd = null);
          break;
        case "focusout":
          bc = null, Xm = null, kd = null;
          break;
        case "mousedown":
          Jm = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jm = !1, wD(e, a, l);
          break;
        case "selectionchange":
          if (KF)
            break;
        case "keydown":
        case "keyup":
          wD(e, a, l);
      }
    }
    function vh(e, t) {
      var u = {};
      return u[e.toLowerCase()] = t.toLowerCase(), u["Webkit" + e] = "webkit" + t, u["Moz" + e] = "moz" + t, u;
    }
    var wc = {
      animationend: vh("Animation", "AnimationEnd"),
      animationiteration: vh("Animation", "AnimationIteration"),
      animationstart: vh("Animation", "AnimationStart"),
      transitionend: vh("Transition", "TransitionEnd")
    }, Zm = {}, xD = {};
    xe && (xD = document.createElement("div").style, "AnimationEvent" in window || (delete wc.animationend.animation, delete wc.animationiteration.animation, delete wc.animationstart.animation), "TransitionEvent" in window || delete wc.transitionend.transition);
    function hh(e) {
      if (Zm[e])
        return Zm[e];
      if (!wc[e])
        return e;
      var t = wc[e];
      for (var u in t)
        if (t.hasOwnProperty(u) && u in xD)
          return Zm[e] = t[u];
      return e;
    }
    var RD = hh("animationend"), BD = hh("animationiteration"), _D = hh("animationstart"), OD = hh("transitionend"), ND = /* @__PURE__ */ new Map(), kD = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wl(e, t) {
      ND.set(e, t), G(t, [e]);
    }
    function tT() {
      for (var e = 0; e < kD.length; e++) {
        var t = kD[e], u = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        wl(u, "on" + a);
      }
      wl(RD, "onAnimationEnd"), wl(BD, "onAnimationIteration"), wl(_D, "onAnimationStart"), wl("dblclick", "onDoubleClick"), wl("focusin", "onFocus"), wl("focusout", "onBlur"), wl(OD, "onTransitionEnd");
    }
    function nT(e, t, u, a, l, s, d) {
      var h = ND.get(t);
      if (h !== void 0) {
        var g = lr, E = t;
        switch (t) {
          case "keypress":
            if (Fi(a) === 0)
              return;
          case "keydown":
          case "keyup":
            g = Hm;
            break;
          case "focusin":
            E = "focus", g = mc;
            break;
          case "focusout":
            E = "blur", g = mc;
            break;
          case "beforeblur":
          case "afterblur":
            g = mc;
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
            g = ja;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = bi;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = lu;
            break;
          case RD:
          case BD:
          case _D:
            g = yc;
            break;
          case OD:
            g = Vm;
            break;
          case "scroll":
            g = Ad;
            break;
          case "wheel":
            g = Dc;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = zm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = xd;
            break;
        }
        var A = (s & ui) !== 0;
        {
          var L = !A && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = iT(u, h, a.type, A, L);
          if (k.length > 0) {
            var K = new g(h, E, null, a, l);
            e.push({
              event: K,
              listeners: k
            });
          }
        }
      }
    }
    tT(), Y(), Tc(), XF(), ch();
    function rT(e, t, u, a, l, s, d) {
      nT(e, t, u, a, l, s);
      var h = (s & Tm) === 0;
      h && (Fe(e, t, u, a, l), M(e, t, u, a, l), eT(e, t, u, a, l), Fc(e, t, u, a, l));
    }
    var Md = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ey = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Md));
    function MD(e, t, u) {
      var a = e.type || "unknown-event";
      e.currentTarget = u, Xu(a, t, void 0, e), e.currentTarget = null;
    }
    function uT(e, t, u) {
      var a;
      if (u)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, h = s.currentTarget, g = s.listener;
          if (d !== a && e.isPropagationStopped())
            return;
          MD(e, g, h), a = d;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var A = t[E], L = A.instance, k = A.currentTarget, K = A.listener;
          if (L !== a && e.isPropagationStopped())
            return;
          MD(e, K, k), a = L;
        }
    }
    function LD(e, t) {
      for (var u = (t & ui) !== 0, a = 0; a < e.length; a++) {
        var l = e[a], s = l.event, d = l.listeners;
        uT(s, d, u);
      }
      qf();
    }
    function aT(e, t, u, a, l) {
      var s = ws(u), d = [];
      rT(d, e, a, u, s, t), LD(d, t);
    }
    function ln(e, t) {
      ey.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var u = !1, a = Mb(t), l = sT(e, u);
      a.has(l) || (UD(t, e, so, u), a.add(l));
    }
    function ty(e, t, u) {
      ey.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= ui), UD(u, e, a, t);
    }
    var mh = "_reactListening" + Math.random().toString(36).slice(2);
    function Ld(e) {
      if (!e[mh]) {
        e[mh] = !0, F.forEach(function(u) {
          u !== "selectionchange" && (ey.has(u) || ty(u, !1, e), ty(u, !0, e));
        });
        var t = e.nodeType === Du ? e : e.ownerDocument;
        t !== null && (t[mh] || (t[mh] = !0, ty("selectionchange", !1, t)));
      }
    }
    function UD(e, t, u, a, l) {
      var s = Dl(e, t, u), d = void 0;
      ho && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, a ? d !== void 0 ? aa(e, t, s, d) : Cl(e, t, s) : d !== void 0 ? pc(e, t, s, d) : Sd(e, t, s);
    }
    function zD(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function ny(e, t, u, a, l) {
      var s = a;
      if (!(t & Wu) && !(t & so)) {
        var d = l;
        if (a !== null) {
          var h = a;
          e:
            for (; ; ) {
              if (h === null)
                return;
              var g = h.tag;
              if (g === ve || g === z) {
                var E = h.stateNode.containerInfo;
                if (zD(E, d))
                  break;
                if (g === z)
                  for (var A = h.return; A !== null; ) {
                    var L = A.tag;
                    if (L === ve || L === z) {
                      var k = A.stateNode.containerInfo;
                      if (zD(k, d))
                        return;
                    }
                    A = A.return;
                  }
                for (; E !== null; ) {
                  var K = Ho(E);
                  if (K === null)
                    return;
                  var X = K.tag;
                  if (X === re || X === ce) {
                    h = s = K;
                    continue e;
                  }
                  E = E.parentNode;
                }
              }
              h = h.return;
            }
        }
      }
      $f(function() {
        return aT(e, t, u, s);
      });
    }
    function Ud(e, t, u) {
      return {
        instance: e,
        listener: t,
        currentTarget: u
      };
    }
    function iT(e, t, u, a, l, s) {
      for (var d = t !== null ? t + "Capture" : null, h = a ? d : t, g = [], E = e, A = null; E !== null; ) {
        var L = E, k = L.stateNode, K = L.tag;
        if (K === re && k !== null && (A = k, h !== null)) {
          var X = ii(E, h);
          X != null && g.push(Ud(E, X, A));
        }
        if (l)
          break;
        E = E.return;
      }
      return g;
    }
    function yh(e, t) {
      for (var u = t + "Capture", a = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, h = s.tag;
        if (h === re && d !== null) {
          var g = d, E = ii(l, u);
          E != null && a.unshift(Ud(l, E, g));
          var A = ii(l, t);
          A != null && a.push(Ud(l, A, g));
        }
        l = l.return;
      }
      return a;
    }
    function xc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== re);
      return e || null;
    }
    function lT(e, t) {
      for (var u = e, a = t, l = 0, s = u; s; s = xc(s))
        l++;
      for (var d = 0, h = a; h; h = xc(h))
        d++;
      for (; l - d > 0; )
        u = xc(u), l--;
      for (; d - l > 0; )
        a = xc(a), d--;
      for (var g = l; g--; ) {
        if (u === a || a !== null && u === a.alternate)
          return u;
        u = xc(u), a = xc(a);
      }
      return null;
    }
    function jD(e, t, u, a, l) {
      for (var s = t._reactName, d = [], h = u; h !== null && h !== a; ) {
        var g = h, E = g.alternate, A = g.stateNode, L = g.tag;
        if (E !== null && E === a)
          break;
        if (L === re && A !== null) {
          var k = A;
          if (l) {
            var K = ii(h, s);
            K != null && d.unshift(Ud(h, K, k));
          } else if (!l) {
            var X = ii(h, s);
            X != null && d.push(Ud(h, X, k));
          }
        }
        h = h.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function oT(e, t, u, a, l) {
      var s = a && l ? lT(a, l) : null;
      a !== null && jD(e, t, a, s, !1), l !== null && u !== null && jD(e, u, l, s, !0);
    }
    function sT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ou = !1, zd = "dangerouslySetInnerHTML", gh = "suppressContentEditableWarning", xl = "suppressHydrationWarning", PD = "autoFocus", Po = "children", $o = "style", Dh = "__html", ry, Eh, jd, $D, Ch, HD, ID;
    ry = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Eh = function(e, t) {
      bs(e, t), Lf(e, t), Rv(e, t, {
        registrationNameDependencies: C,
        possibleRegistrationNames: T
      });
    }, HD = xe && !document.documentMode, jd = function(e, t, u) {
      if (!ou) {
        var a = Sh(u), l = Sh(t);
        l !== a && (ou = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(a)));
      }
    }, $D = function(e) {
      if (!ou) {
        ou = !0;
        var t = [];
        e.forEach(function(u) {
          t.push(u);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Ch = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, ID = function(e, t) {
      var u = e.namespaceURI === Gu ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return u.innerHTML = t, u.innerHTML;
    };
    var cT = /\r\n?/g, fT = /\u0000|\uFFFD/g;
    function Sh(e) {
      or(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(cT, `
`).replace(fT, "");
    }
    function Ah(e, t, u, a) {
      var l = Sh(t), s = Sh(e);
      if (s !== l && (a && (ou || (ou = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), u && $t))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function VD(e) {
      return e.nodeType === Du ? e : e.ownerDocument;
    }
    function dT() {
    }
    function Fh(e) {
      e.onclick = dT;
    }
    function pT(e, t, u, a, l) {
      for (var s in a)
        if (a.hasOwnProperty(s)) {
          var d = a[s];
          if (s === $o)
            d && Object.freeze(d), Dv(t, d);
          else if (s === zd) {
            var h = d ? d[Dh] : void 0;
            h != null && ov(t, h);
          } else if (s === Po)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && Ss(t, d);
            } else
              typeof d == "number" && Ss(t, "" + d);
          else
            s === gh || s === xl || s === PD || (C.hasOwnProperty(s) ? d != null && (typeof d != "function" && Ch(s, d), s === "onScroll" && ln("scroll", t)) : d != null && Ja(t, s, d, l));
        }
    }
    function vT(e, t, u, a) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === $o ? Dv(e, d) : s === zd ? ov(e, d) : s === Po ? Ss(e, d) : Ja(e, s, d, a);
      }
    }
    function hT(e, t, u, a) {
      var l, s = VD(u), d, h = a;
      if (h === Gu && (h = Es(e)), h === Gu) {
        if (l = Qu(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var E = g.firstChild;
          d = g.removeChild(E);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var A = d;
          t.multiple ? A.multiple = !0 : t.size && (A.size = t.size);
        }
      } else
        d = s.createElementNS(h, e);
      return h === Gu && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !_e.call(ry, e) && (ry[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function mT(e, t) {
      return VD(t).createTextNode(e);
    }
    function yT(e, t, u, a) {
      var l = Qu(t, u);
      Eh(t, u);
      var s;
      switch (t) {
        case "dialog":
          ln("cancel", e), ln("close", e), s = u;
          break;
        case "iframe":
        case "object":
        case "embed":
          ln("load", e), s = u;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < Md.length; d++)
            ln(Md[d], e);
          s = u;
          break;
        case "source":
          ln("error", e), s = u;
          break;
        case "img":
        case "image":
        case "link":
          ln("error", e), ln("load", e), s = u;
          break;
        case "details":
          ln("toggle", e), s = u;
          break;
        case "input":
          ro(e, u), s = no(e, u), ln("invalid", e);
          break;
        case "option":
          gs(e, u), s = u;
          break;
        case "select":
          uv(e, u), s = Tf(e, u), ln("invalid", e);
          break;
        case "textarea":
          av(e, u), s = wf(e, u), ln("invalid", e);
          break;
        default:
          s = u;
      }
      switch (Fs(t, s), pT(t, e, a, s, l), t) {
        case "input":
          ti(e), uo(e, u, !1);
          break;
        case "textarea":
          ti(e), lv(e);
          break;
        case "option":
          Ff(e, u);
          break;
        case "select":
          vm(e, u);
          break;
        default:
          typeof s.onClick == "function" && Fh(e);
          break;
      }
    }
    function gT(e, t, u, a, l) {
      Eh(t, a);
      var s = null, d, h;
      switch (t) {
        case "input":
          d = no(e, u), h = no(e, a), s = [];
          break;
        case "select":
          d = Tf(e, u), h = Tf(e, a), s = [];
          break;
        case "textarea":
          d = wf(e, u), h = wf(e, a), s = [];
          break;
        default:
          d = u, h = a, typeof d.onClick != "function" && typeof h.onClick == "function" && Fh(e);
          break;
      }
      Fs(t, h);
      var g, E, A = null;
      for (g in d)
        if (!(h.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === $o) {
            var L = d[g];
            for (E in L)
              L.hasOwnProperty(E) && (A || (A = {}), A[E] = "");
          } else
            g === zd || g === Po || g === gh || g === xl || g === PD || (C.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in h) {
        var k = h[g], K = d != null ? d[g] : void 0;
        if (!(!h.hasOwnProperty(g) || k === K || k == null && K == null))
          if (g === $o)
            if (k && Object.freeze(k), K) {
              for (E in K)
                K.hasOwnProperty(E) && (!k || !k.hasOwnProperty(E)) && (A || (A = {}), A[E] = "");
              for (E in k)
                k.hasOwnProperty(E) && K[E] !== k[E] && (A || (A = {}), A[E] = k[E]);
            } else
              A || (s || (s = []), s.push(g, A)), A = k;
          else if (g === zd) {
            var X = k ? k[Dh] : void 0, ae = K ? K[Dh] : void 0;
            X != null && ae !== X && (s = s || []).push(g, X);
          } else
            g === Po ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(g, "" + k) : g === gh || g === xl || (C.hasOwnProperty(g) ? (k != null && (typeof k != "function" && Ch(g, k), g === "onScroll" && ln("scroll", e)), !s && K !== k && (s = [])) : (s = s || []).push(g, k));
      }
      return A && (lo(A, h[$o]), (s = s || []).push($o, A)), s;
    }
    function DT(e, t, u, a, l) {
      u === "input" && l.type === "radio" && l.name != null && Af(e, l);
      var s = Qu(u, a), d = Qu(u, l);
      switch (vT(e, t, s, d), u) {
        case "input":
          Ki(e, l);
          break;
        case "textarea":
          iv(e, l);
          break;
        case "select":
          hm(e, l);
          break;
      }
    }
    function ET(e) {
      {
        var t = e.toLowerCase();
        return Ts.hasOwnProperty(t) && Ts[t] || null;
      }
    }
    function CT(e, t, u, a, l, s, d) {
      var h, g;
      switch (h = Qu(t, u), Eh(t, u), t) {
        case "dialog":
          ln("cancel", e), ln("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ln("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < Md.length; E++)
            ln(Md[E], e);
          break;
        case "source":
          ln("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ln("error", e), ln("load", e);
          break;
        case "details":
          ln("toggle", e);
          break;
        case "input":
          ro(e, u), ln("invalid", e);
          break;
        case "option":
          gs(e, u);
          break;
        case "select":
          uv(e, u), ln("invalid", e);
          break;
        case "textarea":
          av(e, u), ln("invalid", e);
          break;
      }
      Fs(t, u);
      {
        g = /* @__PURE__ */ new Set();
        for (var A = e.attributes, L = 0; L < A.length; L++) {
          var k = A[L].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(A[L].name);
          }
        }
      }
      var K = null;
      for (var X in u)
        if (u.hasOwnProperty(X)) {
          var ae = u[X];
          if (X === Po)
            typeof ae == "string" ? e.textContent !== ae && (u[xl] !== !0 && Ah(e.textContent, ae, s, d), K = [Po, ae]) : typeof ae == "number" && e.textContent !== "" + ae && (u[xl] !== !0 && Ah(e.textContent, ae, s, d), K = [Po, "" + ae]);
          else if (C.hasOwnProperty(X))
            ae != null && (typeof ae != "function" && Ch(X, ae), X === "onScroll" && ln("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var ze = void 0, it = h && j ? null : wu(X);
            if (u[xl] !== !0) {
              if (!(X === gh || X === xl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === zd) {
                  var Ze = e.innerHTML, wt = ae ? ae[Dh] : void 0;
                  if (wt != null) {
                    var Ft = ID(e, wt);
                    Ft !== Ze && jd(X, Ze, Ft);
                  }
                } else if (X === $o) {
                  if (g.delete(X), HD) {
                    var V = Am(ae);
                    ze = e.getAttribute("style"), V !== ze && jd(X, ze, V);
                  }
                } else if (h && !j)
                  g.delete(X.toLowerCase()), ze = ss(e, X, ae), ae !== ze && jd(X, ze, ae);
                else if (!Yt(X, it, h) && !Ut(X, ae, it, h)) {
                  var ie = !1;
                  if (it !== null)
                    g.delete(it.attributeName), ze = Gl(e, X, ae, it);
                  else {
                    var q = a;
                    if (q === Gu && (q = Es(t)), q === Gu)
                      g.delete(X.toLowerCase());
                    else {
                      var Se = ET(X);
                      Se !== null && Se !== X && (ie = !0, g.delete(Se)), g.delete(X);
                    }
                    ze = ss(e, X, ae);
                  }
                  var je = j;
                  !je && ae !== ze && !ie && jd(X, ze, ae);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && u[xl] !== !0 && $D(g), t) {
        case "input":
          ti(e), uo(e, u, !0);
          break;
        case "textarea":
          ti(e), lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof u.onClick == "function" && Fh(e);
          break;
      }
      return K;
    }
    function ST(e, t, u) {
      var a = e.nodeValue !== t;
      return a;
    }
    function uy(e, t) {
      {
        if (ou)
          return;
        ou = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ay(e, t) {
      {
        if (ou)
          return;
        ou = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function iy(e, t, u) {
      {
        if (ou)
          return;
        ou = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ly(e, t) {
      {
        if (t === "" || ou)
          return;
        ou = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function AT(e, t, u) {
      switch (t) {
        case "input":
          ev(e, u);
          return;
        case "textarea":
          xf(e, u);
          return;
        case "select":
          mm(e, u);
          return;
      }
    }
    var Pd = function() {
    }, $d = function() {
    };
    {
      var FT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], qD = [
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
      ], TT = qD.concat(["button"]), bT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], GD = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      $d = function(e, t) {
        var u = St({}, e || GD), a = {
          tag: t
        };
        return qD.indexOf(t) !== -1 && (u.aTagInScope = null, u.buttonTagInScope = null, u.nobrTagInScope = null), TT.indexOf(t) !== -1 && (u.pTagInButtonScope = null), FT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (u.listItemTagAutoclosing = null, u.dlItemTagAutoclosing = null), u.current = a, t === "form" && (u.formTag = a), t === "a" && (u.aTagInScope = a), t === "button" && (u.buttonTagInScope = a), t === "nobr" && (u.nobrTagInScope = a), t === "p" && (u.pTagInButtonScope = a), t === "li" && (u.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (u.dlItemTagAutoclosing = a), u;
      };
      var wT = function(e, t) {
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
            return bT.indexOf(t) === -1;
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
      }, xT = function(e, t) {
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
      }, YD = {};
      Pd = function(e, t, u) {
        u = u || GD;
        var a = u.current, l = a && a.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = wT(e, l) ? null : a, d = s ? null : xT(e, u), h = s || d;
        if (h) {
          var g = h.tag, E = !!s + "|" + e + "|" + g;
          if (!YD[E]) {
            YD[E] = !0;
            var A = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? A = "Text nodes" : (A = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : A = "<" + e + ">", s) {
              var k = "";
              g === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", A, g, L, k);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", A, g);
          }
        }
      };
    }
    var Th = "suppressHydrationWarning", bh = "$", wh = "/$", Hd = "$?", Id = "$!", RT = "style", oy = null, sy = null;
    function BT(e) {
      var t, u, a = e.nodeType;
      switch (a) {
        case Du:
        case ni: {
          t = a === Du ? "#document" : "#fragment";
          var l = e.documentElement;
          u = l ? l.namespaceURI : Bf(null, "");
          break;
        }
        default: {
          var s = a === An ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, u = Bf(d, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), g = $d(null, h);
        return {
          namespace: u,
          ancestorInfo: g
        };
      }
    }
    function _T(e, t, u) {
      {
        var a = e, l = Bf(a.namespace, t), s = $d(a.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function eM(e) {
      return e;
    }
    function OT(e) {
      oy = $r(), sy = GF();
      var t = null;
      return jn(!1), t;
    }
    function NT(e) {
      YF(sy), jn(oy), oy = null, sy = null;
    }
    function kT(e, t, u, a, l) {
      var s;
      {
        var d = a;
        if (Pd(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, g = $d(d.ancestorInfo, e);
          Pd(null, h, g);
        }
        s = d.namespace;
      }
      var E = hT(e, t, u, s);
      return Gd(l, E), yy(E, t), E;
    }
    function MT(e, t) {
      e.appendChild(t);
    }
    function LT(e, t, u, a, l) {
      switch (yT(e, t, u, a), t) {
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
    function UT(e, t, u, a, l, s) {
      {
        var d = s;
        if (typeof a.children != typeof u.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var h = "" + a.children, g = $d(d.ancestorInfo, t);
          Pd(null, h, g);
        }
      }
      return gT(e, t, u, a);
    }
    function cy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function zT(e, t, u, a) {
      {
        var l = u;
        Pd(null, e, l.ancestorInfo);
      }
      var s = mT(e, t);
      return Gd(a, s), s;
    }
    function jT() {
      var e = window.event;
      return e === void 0 ? na : cr(e.type);
    }
    var fy = typeof setTimeout == "function" ? setTimeout : void 0, PT = typeof clearTimeout == "function" ? clearTimeout : void 0, dy = -1, QD = typeof Promise == "function" ? Promise : void 0, $T = typeof queueMicrotask == "function" ? queueMicrotask : typeof QD < "u" ? function(e) {
      return QD.resolve(null).then(e).catch(HT);
    } : fy;
    function HT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function IT(e, t, u, a) {
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
    function VT(e, t, u, a, l, s) {
      DT(e, t, u, a, l), yy(e, l);
    }
    function WD(e) {
      Ss(e, "");
    }
    function qT(e, t, u) {
      e.nodeValue = u;
    }
    function GT(e, t) {
      e.appendChild(t);
    }
    function YT(e, t) {
      var u;
      e.nodeType === An ? (u = e.parentNode, u.insertBefore(t, e)) : (u = e, u.appendChild(t));
      var a = e._reactRootContainer;
      a == null && u.onclick === null && Fh(u);
    }
    function QT(e, t, u) {
      e.insertBefore(t, u);
    }
    function WT(e, t, u) {
      e.nodeType === An ? e.parentNode.insertBefore(t, u) : e.insertBefore(t, u);
    }
    function KT(e, t) {
      e.removeChild(t);
    }
    function XT(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function py(e, t) {
      var u = t, a = 0;
      do {
        var l = u.nextSibling;
        if (e.removeChild(u), l && l.nodeType === An) {
          var s = l.data;
          if (s === wh)
            if (a === 0) {
              e.removeChild(l), At(t);
              return;
            } else
              a--;
          else
            (s === bh || s === Hd || s === Id) && a++;
        }
        u = l;
      } while (u);
      At(t);
    }
    function JT(e, t) {
      e.nodeType === An ? py(e.parentNode, t) : e.nodeType === Cr && py(e, t), At(e);
    }
    function ZT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function eb(e) {
      e.nodeValue = "";
    }
    function tb(e, t) {
      e = e;
      var u = t[RT], a = u != null && u.hasOwnProperty("display") ? u.display : null;
      e.style.display = As("display", a);
    }
    function nb(e, t) {
      e.nodeValue = t;
    }
    function rb(e) {
      e.nodeType === Cr ? e.textContent = "" : e.nodeType === Du && e.documentElement && e.removeChild(e.documentElement);
    }
    function ub(e, t, u) {
      return e.nodeType !== Cr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ab(e, t) {
      return t === "" || e.nodeType !== Yu ? null : e;
    }
    function ib(e) {
      return e.nodeType !== An ? null : e;
    }
    function KD(e) {
      return e.data === Hd;
    }
    function vy(e) {
      return e.data === Id;
    }
    function lb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, u, a, l;
      return t && (u = t.dgst, a = t.msg, l = t.stck), {
        message: a,
        digest: u,
        stack: l
      };
    }
    function ob(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Cr || t === Yu)
          break;
        if (t === An) {
          var u = e.data;
          if (u === bh || u === Id || u === Hd)
            break;
          if (u === wh)
            return null;
        }
      }
      return e;
    }
    function Vd(e) {
      return xh(e.nextSibling);
    }
    function sb(e) {
      return xh(e.firstChild);
    }
    function cb(e) {
      return xh(e.firstChild);
    }
    function fb(e) {
      return xh(e.nextSibling);
    }
    function db(e, t, u, a, l, s, d) {
      Gd(s, e), yy(e, u);
      var h;
      {
        var g = l;
        h = g.namespace;
      }
      var E = (s.mode & Ct) !== lt;
      return CT(e, t, u, h, a, E, d);
    }
    function pb(e, t, u, a) {
      return Gd(u, e), u.mode & Ct, ST(e, t);
    }
    function vb(e, t) {
      Gd(t, e);
    }
    function hb(e) {
      for (var t = e.nextSibling, u = 0; t; ) {
        if (t.nodeType === An) {
          var a = t.data;
          if (a === wh) {
            if (u === 0)
              return Vd(t);
            u--;
          } else
            (a === bh || a === Id || a === Hd) && u++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function XD(e) {
      for (var t = e.previousSibling, u = 0; t; ) {
        if (t.nodeType === An) {
          var a = t.data;
          if (a === bh || a === Id || a === Hd) {
            if (u === 0)
              return t;
            u--;
          } else
            a === wh && u++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function mb(e) {
      At(e);
    }
    function yb(e) {
      At(e);
    }
    function gb(e) {
      return e !== "head" && e !== "body";
    }
    function Db(e, t, u, a) {
      var l = !0;
      Ah(t.nodeValue, u, a, l);
    }
    function Eb(e, t, u, a, l, s) {
      if (t[Th] !== !0) {
        var d = !0;
        Ah(a.nodeValue, l, s, d);
      }
    }
    function Cb(e, t) {
      t.nodeType === Cr ? uy(e, t) : t.nodeType === An || ay(e, t);
    }
    function Sb(e, t) {
      {
        var u = e.parentNode;
        u !== null && (t.nodeType === Cr ? uy(u, t) : t.nodeType === An || ay(u, t));
      }
    }
    function Ab(e, t, u, a, l) {
      (l || t[Th] !== !0) && (a.nodeType === Cr ? uy(u, a) : a.nodeType === An || ay(u, a));
    }
    function Fb(e, t, u) {
      iy(e, t);
    }
    function Tb(e, t) {
      ly(e, t);
    }
    function bb(e, t, u) {
      {
        var a = e.parentNode;
        a !== null && iy(a, t);
      }
    }
    function wb(e, t) {
      {
        var u = e.parentNode;
        u !== null && ly(u, t);
      }
    }
    function xb(e, t, u, a, l, s) {
      (s || t[Th] !== !0) && iy(u, a);
    }
    function Rb(e, t, u, a, l) {
      (l || t[Th] !== !0) && ly(u, a);
    }
    function Bb(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function _b(e) {
      Ld(e);
    }
    var Rc = Math.random().toString(36).slice(2), Bc = "__reactFiber$" + Rc, hy = "__reactProps$" + Rc, qd = "__reactContainer$" + Rc, my = "__reactEvents$" + Rc, Ob = "__reactListeners$" + Rc, Nb = "__reactHandles$" + Rc;
    function kb(e) {
      delete e[Bc], delete e[hy], delete e[my], delete e[Ob], delete e[Nb];
    }
    function Gd(e, t) {
      t[Bc] = e;
    }
    function Rh(e, t) {
      t[qd] = e;
    }
    function JD(e) {
      e[qd] = null;
    }
    function Yd(e) {
      return !!e[qd];
    }
    function Ho(e) {
      var t = e[Bc];
      if (t)
        return t;
      for (var u = e.parentNode; u; ) {
        if (t = u[qd] || u[Bc], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var l = XD(e); l !== null; ) {
              var s = l[Bc];
              if (s)
                return s;
              l = XD(l);
            }
          return t;
        }
        e = u, u = e.parentNode;
      }
      return null;
    }
    function Rl(e) {
      var t = e[Bc] || e[qd];
      return t && (t.tag === re || t.tag === ce || t.tag === $ || t.tag === ve) ? t : null;
    }
    function _c(e) {
      if (e.tag === re || e.tag === ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Bh(e) {
      return e[hy] || null;
    }
    function yy(e, t) {
      e[hy] = t;
    }
    function Mb(e) {
      var t = e[my];
      return t === void 0 && (t = e[my] = /* @__PURE__ */ new Set()), t;
    }
    var ZD = {}, eE = m.ReactDebugCurrentFrame;
    function _h(e) {
      if (e) {
        var t = e._owner, u = Kl(e.type, e._source, t ? t.type : null);
        eE.setExtraStackFrame(u);
      } else
        eE.setExtraStackFrame(null);
    }
    function la(e, t, u, a, l) {
      {
        var s = Function.call.bind(_e);
        for (var d in e)
          if (s(e, d)) {
            var h = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((a || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              h = e[d](t, d, a, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              h = E;
            }
            h && !(h instanceof Error) && (_h(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", u, d, typeof h), _h(null)), h instanceof Error && !(h.message in ZD) && (ZD[h.message] = !0, _h(l), y("Failed %s type: %s", u, h.message), _h(null));
          }
      }
    }
    var gy = [], Oh;
    Oh = [];
    var Bi = -1;
    function Bl(e) {
      return {
        current: e
      };
    }
    function Br(e, t) {
      if (Bi < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Oh[Bi] && y("Unexpected Fiber popped."), e.current = gy[Bi], gy[Bi] = null, Oh[Bi] = null, Bi--;
    }
    function _r(e, t, u) {
      Bi++, gy[Bi] = e.current, Oh[Bi] = u, e.current = t;
    }
    var Dy;
    Dy = {};
    var Fu = {};
    Object.freeze(Fu);
    var _i = Bl(Fu), Ha = Bl(!1), Ey = Fu;
    function Oc(e, t, u) {
      return u && Ia(t) ? Ey : _i.current;
    }
    function tE(e, t, u) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = u;
      }
    }
    function Nc(e, t) {
      {
        var u = e.type, a = u.contextTypes;
        if (!a)
          return Fu;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in a)
          s[d] = t[d];
        {
          var h = mt(e) || "Unknown";
          la(a, s, "context", h);
        }
        return l && tE(e, t, s), s;
      }
    }
    function Nh() {
      return Ha.current;
    }
    function Ia(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function kh(e) {
      Br(Ha, e), Br(_i, e);
    }
    function Cy(e) {
      Br(Ha, e), Br(_i, e);
    }
    function nE(e, t, u) {
      {
        if (_i.current !== Fu)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        _r(_i, t, e), _r(Ha, u, e);
      }
    }
    function rE(e, t, u) {
      {
        var a = e.stateNode, l = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var s = mt(e) || "Unknown";
            Dy[s] || (Dy[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return u;
        }
        var d = a.getChildContext();
        for (var h in d)
          if (!(h in l))
            throw new Error((mt(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var g = mt(e) || "Unknown";
          la(l, d, "child context", g);
        }
        return St({}, u, d);
      }
    }
    function Mh(e) {
      {
        var t = e.stateNode, u = t && t.__reactInternalMemoizedMergedChildContext || Fu;
        return Ey = _i.current, _r(_i, u, e), _r(Ha, Ha.current, e), !0;
      }
    }
    function uE(e, t, u) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (u) {
          var l = rE(e, t, Ey);
          a.__reactInternalMemoizedMergedChildContext = l, Br(Ha, e), Br(_i, e), _r(_i, l, e), _r(Ha, u, e);
        } else
          Br(Ha, e), _r(Ha, u, e);
      }
    }
    function Lb(e) {
      {
        if (!Kf(e) || e.tag !== ee)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ve:
              return t.stateNode.context;
            case ee: {
              var u = t.type;
              if (Ia(u))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var _l = 0, Lh = 1, Oi = null, Sy = !1, Ay = !1;
    function aE(e) {
      Oi === null ? Oi = [e] : Oi.push(e);
    }
    function Ub(e) {
      Sy = !0, aE(e);
    }
    function iE() {
      Sy && Ol();
    }
    function Ol() {
      if (!Ay && Oi !== null) {
        Ay = !0;
        var e = 0, t = uu();
        try {
          var u = !0, a = Oi;
          for (Bn(nr); e < a.length; e++) {
            var l = a[e];
            do
              l = l(u);
            while (l !== null);
          }
          Oi = null, Sy = !1;
        } catch (s) {
          throw Oi !== null && (Oi = Oi.slice(e + 1)), ks(Ls, Ol), s;
        } finally {
          Bn(t), Ay = !1;
        }
      }
      return null;
    }
    var kc = [], Mc = 0, Uh = null, zh = 0, Lu = [], Uu = 0, Io = null, Ni = 1, ki = "";
    function zb(e) {
      return qo(), (e.flags & Yf) !== rt;
    }
    function jb(e) {
      return qo(), zh;
    }
    function Pb() {
      var e = ki, t = Ni, u = t & ~$b(t);
      return u.toString(32) + e;
    }
    function Vo(e, t) {
      qo(), kc[Mc++] = zh, kc[Mc++] = Uh, Uh = e, zh = t;
    }
    function lE(e, t, u) {
      qo(), Lu[Uu++] = Ni, Lu[Uu++] = ki, Lu[Uu++] = Io, Io = e;
      var a = Ni, l = ki, s = jh(a) - 1, d = a & ~(1 << s), h = u + 1, g = jh(t) + s;
      if (g > 30) {
        var E = s - s % 5, A = (1 << E) - 1, L = (d & A).toString(32), k = d >> E, K = s - E, X = jh(t) + K, ae = h << K, ze = ae | k, it = L + l;
        Ni = 1 << X | ze, ki = it;
      } else {
        var Ze = h << s, wt = Ze | d, Ft = l;
        Ni = 1 << g | wt, ki = Ft;
      }
    }
    function Fy(e) {
      qo();
      var t = e.return;
      if (t !== null) {
        var u = 1, a = 0;
        Vo(e, u), lE(e, u, a);
      }
    }
    function jh(e) {
      return 32 - Hs(e);
    }
    function $b(e) {
      return 1 << jh(e) - 1;
    }
    function Ty(e) {
      for (; e === Uh; )
        Uh = kc[--Mc], kc[Mc] = null, zh = kc[--Mc], kc[Mc] = null;
      for (; e === Io; )
        Io = Lu[--Uu], Lu[Uu] = null, ki = Lu[--Uu], Lu[Uu] = null, Ni = Lu[--Uu], Lu[Uu] = null;
    }
    function Hb() {
      return qo(), Io !== null ? {
        id: Ni,
        overflow: ki
      } : null;
    }
    function Ib(e, t) {
      qo(), Lu[Uu++] = Ni, Lu[Uu++] = ki, Lu[Uu++] = Io, Ni = t.id, ki = t.overflow, Io = e;
    }
    function qo() {
      dr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var fr = null, zu = null, oa = !1, Go = !1, Nl = null;
    function Vb() {
      oa && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function oE() {
      Go = !0;
    }
    function qb() {
      return Go;
    }
    function Gb(e) {
      var t = e.stateNode.containerInfo;
      return zu = cb(t), fr = e, oa = !0, Nl = null, Go = !1, !0;
    }
    function Yb(e, t, u) {
      return zu = fb(t), fr = e, oa = !0, Nl = null, Go = !1, u !== null && Ib(e, u), !0;
    }
    function sE(e, t) {
      switch (e.tag) {
        case ve: {
          Cb(e.stateNode.containerInfo, t);
          break;
        }
        case re: {
          var u = (e.mode & Ct) !== lt;
          Ab(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            u
          );
          break;
        }
        case $: {
          var a = e.memoizedState;
          a.dehydrated !== null && Sb(a.dehydrated, t);
          break;
        }
      }
    }
    function cE(e, t) {
      sE(e, t);
      var u = Kx();
      u.stateNode = t, u.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [u], e.flags |= Nt) : a.push(u);
    }
    function by(e, t) {
      {
        if (Go)
          return;
        switch (e.tag) {
          case ve: {
            var u = e.stateNode.containerInfo;
            switch (t.tag) {
              case re:
                var a = t.type;
                t.pendingProps, Fb(u, a);
                break;
              case ce:
                var l = t.pendingProps;
                Tb(u, l);
                break;
            }
            break;
          }
          case re: {
            var s = e.type, d = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case re: {
                var g = t.type, E = t.pendingProps, A = (e.mode & Ct) !== lt;
                xb(
                  s,
                  d,
                  h,
                  g,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  A
                );
                break;
              }
              case ce: {
                var L = t.pendingProps, k = (e.mode & Ct) !== lt;
                Rb(
                  s,
                  d,
                  h,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case $: {
            var K = e.memoizedState, X = K.dehydrated;
            if (X !== null)
              switch (t.tag) {
                case re:
                  var ae = t.type;
                  t.pendingProps, bb(X, ae);
                  break;
                case ce:
                  var ze = t.pendingProps;
                  wb(X, ze);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function fE(e, t) {
      t.flags = t.flags & ~Zr | Qt, by(e, t);
    }
    function dE(e, t) {
      switch (e.tag) {
        case re: {
          var u = e.type;
          e.pendingProps;
          var a = ub(t, u);
          return a !== null ? (e.stateNode = a, fr = e, zu = sb(a), !0) : !1;
        }
        case ce: {
          var l = e.pendingProps, s = ab(t, l);
          return s !== null ? (e.stateNode = s, fr = e, zu = null, !0) : !1;
        }
        case $: {
          var d = ib(t);
          if (d !== null) {
            var h = {
              dehydrated: d,
              treeContext: Hb(),
              retryLane: xr
            };
            e.memoizedState = h;
            var g = Xx(d);
            return g.return = e, e.child = g, fr = e, zu = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function wy(e) {
      return (e.mode & Ct) !== lt && (e.flags & dt) === rt;
    }
    function xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ry(e) {
      if (oa) {
        var t = zu;
        if (!t) {
          wy(e) && (by(fr, e), xy()), fE(fr, e), oa = !1, fr = e;
          return;
        }
        var u = t;
        if (!dE(e, t)) {
          wy(e) && (by(fr, e), xy()), t = Vd(u);
          var a = fr;
          if (!t || !dE(e, t)) {
            fE(fr, e), oa = !1, fr = e;
            return;
          }
          cE(a, u);
        }
      }
    }
    function Qb(e, t, u) {
      var a = e.stateNode, l = !Go, s = db(a, e.type, e.memoizedProps, t, u, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Wb(e) {
      var t = e.stateNode, u = e.memoizedProps, a = pb(t, u, e);
      if (a) {
        var l = fr;
        if (l !== null)
          switch (l.tag) {
            case ve: {
              var s = l.stateNode.containerInfo, d = (l.mode & Ct) !== lt;
              Db(
                s,
                t,
                u,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case re: {
              var h = l.type, g = l.memoizedProps, E = l.stateNode, A = (l.mode & Ct) !== lt;
              Eb(
                h,
                g,
                E,
                t,
                u,
                // TODO: Delete this argument when we remove the legacy root API.
                A
              );
              break;
            }
          }
      }
      return a;
    }
    function Kb(e) {
      var t = e.memoizedState, u = t !== null ? t.dehydrated : null;
      if (!u)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      vb(u, e);
    }
    function Xb(e) {
      var t = e.memoizedState, u = t !== null ? t.dehydrated : null;
      if (!u)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return hb(u);
    }
    function pE(e) {
      for (var t = e.return; t !== null && t.tag !== re && t.tag !== ve && t.tag !== $; )
        t = t.return;
      fr = t;
    }
    function Ph(e) {
      if (e !== fr)
        return !1;
      if (!oa)
        return pE(e), oa = !0, !1;
      if (e.tag !== ve && (e.tag !== re || gb(e.type) && !cy(e.type, e.memoizedProps))) {
        var t = zu;
        if (t)
          if (wy(e))
            vE(e), xy();
          else
            for (; t; )
              cE(e, t), t = Vd(t);
      }
      return pE(e), e.tag === $ ? zu = Xb(e) : zu = fr ? Vd(e.stateNode) : null, !0;
    }
    function Jb() {
      return oa && zu !== null;
    }
    function vE(e) {
      for (var t = zu; t; )
        sE(e, t), t = Vd(t);
    }
    function Lc() {
      fr = null, zu = null, oa = !1, Go = !1;
    }
    function hE() {
      Nl !== null && (sS(Nl), Nl = null);
    }
    function dr() {
      return oa;
    }
    function By(e) {
      Nl === null ? Nl = [e] : Nl.push(e);
    }
    var Zb = m.ReactCurrentBatchConfig, e2 = null;
    function t2() {
      return Zb.transition;
    }
    var sa = {
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
      var n2 = function(e) {
        for (var t = null, u = e; u !== null; )
          u.mode & un && (t = u), u = u.return;
        return t;
      }, Yo = function(e) {
        var t = [];
        return e.forEach(function(u) {
          t.push(u);
        }), t.sort().join(", ");
      }, Qd = [], Wd = [], Kd = [], Xd = [], Jd = [], Zd = [], Qo = /* @__PURE__ */ new Set();
      sa.recordUnsafeLifecycleWarnings = function(e, t) {
        Qo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Qd.push(e), e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && Wd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Kd.push(e), e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && Xd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Jd.push(e), e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && Zd.push(e));
      }, sa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(k) {
          e.add(mt(k) || "Component"), Qo.add(k.type);
        }), Qd = []);
        var t = /* @__PURE__ */ new Set();
        Wd.length > 0 && (Wd.forEach(function(k) {
          t.add(mt(k) || "Component"), Qo.add(k.type);
        }), Wd = []);
        var u = /* @__PURE__ */ new Set();
        Kd.length > 0 && (Kd.forEach(function(k) {
          u.add(mt(k) || "Component"), Qo.add(k.type);
        }), Kd = []);
        var a = /* @__PURE__ */ new Set();
        Xd.length > 0 && (Xd.forEach(function(k) {
          a.add(mt(k) || "Component"), Qo.add(k.type);
        }), Xd = []);
        var l = /* @__PURE__ */ new Set();
        Jd.length > 0 && (Jd.forEach(function(k) {
          l.add(mt(k) || "Component"), Qo.add(k.type);
        }), Jd = []);
        var s = /* @__PURE__ */ new Set();
        if (Zd.length > 0 && (Zd.forEach(function(k) {
          s.add(mt(k) || "Component"), Qo.add(k.type);
        }), Zd = []), t.size > 0) {
          var d = Yo(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (a.size > 0) {
          var h = Yo(a);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var g = Yo(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var E = Yo(e);
          _(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (u.size > 0) {
          var A = Yo(u);
          _(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
        if (l.size > 0) {
          var L = Yo(l);
          _(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var $h = /* @__PURE__ */ new Map(), mE = /* @__PURE__ */ new Set();
      sa.recordLegacyContextWarning = function(e, t) {
        var u = n2(e);
        if (u === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!mE.has(e.type)) {
          var a = $h.get(u);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], $h.set(u, a)), a.push(e));
        }
      }, sa.flushLegacyContextWarning = function() {
        $h.forEach(function(e, t) {
          if (e.length !== 0) {
            var u = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              a.add(mt(s) || "Component"), mE.add(s.type);
            });
            var l = Yo(a);
            try {
              zt(u), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              wn();
            }
          }
        });
      }, sa.discardPendingWarnings = function() {
        Qd = [], Wd = [], Kd = [], Xd = [], Jd = [], Zd = [], $h = /* @__PURE__ */ new Map();
      };
    }
    function ca(e, t) {
      if (e && e.defaultProps) {
        var u = St({}, t), a = e.defaultProps;
        for (var l in a)
          u[l] === void 0 && (u[l] = a[l]);
        return u;
      }
      return t;
    }
    var _y = Bl(null), Oy;
    Oy = {};
    var Hh = null, Uc = null, Ny = null, Ih = !1;
    function Vh() {
      Hh = null, Uc = null, Ny = null, Ih = !1;
    }
    function yE() {
      Ih = !0;
    }
    function gE() {
      Ih = !1;
    }
    function DE(e, t, u) {
      _r(_y, t._currentValue, e), t._currentValue = u, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Oy && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Oy;
    }
    function ky(e, t) {
      var u = _y.current;
      Br(_y, t), e._currentValue = u;
    }
    function My(e, t, u) {
      for (var a = e; a !== null; ) {
        var l = a.alternate;
        if (Di(a.childLanes, t) ? l !== null && !Di(l.childLanes, t) && (l.childLanes = Et(l.childLanes, t)) : (a.childLanes = Et(a.childLanes, t), l !== null && (l.childLanes = Et(l.childLanes, t))), a === u)
          break;
        a = a.return;
      }
      a !== u && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function r2(e, t, u) {
      u2(e, t, u);
    }
    function u2(e, t, u) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var l = void 0, s = a.dependencies;
        if (s !== null) {
          l = a.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (a.tag === ee) {
                var h = Rn(u), g = Mi(qt, h);
                g.tag = Gh;
                var E = a.updateQueue;
                if (E !== null) {
                  var A = E.shared, L = A.pending;
                  L === null ? g.next = g : (g.next = L.next, L.next = g), A.pending = g;
                }
              }
              a.lanes = Et(a.lanes, u);
              var k = a.alternate;
              k !== null && (k.lanes = Et(k.lanes, u)), My(a.return, u, e), s.lanes = Et(s.lanes, u);
              break;
            }
            d = d.next;
          }
        } else if (a.tag === Ie)
          l = a.type === e.type ? null : a.child;
        else if (a.tag === we) {
          var K = a.return;
          if (K === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          K.lanes = Et(K.lanes, u);
          var X = K.alternate;
          X !== null && (X.lanes = Et(X.lanes, u)), My(K, u, e), l = a.sibling;
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
            var ae = l.sibling;
            if (ae !== null) {
              ae.return = l.return, l = ae;
              break;
            }
            l = l.return;
          }
        a = l;
      }
    }
    function zc(e, t) {
      Hh = e, Uc = null, Ny = null;
      var u = e.dependencies;
      if (u !== null) {
        var a = u.firstContext;
        a !== null && (Rr(u.lanes, t) && pp(), u.firstContext = null);
      }
    }
    function $n(e) {
      Ih && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ny !== e) {
        var u = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Uc === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Uc = u, Hh.dependencies = {
            lanes: oe,
            firstContext: u
          };
        } else
          Uc = Uc.next = u;
      }
      return t;
    }
    var Wo = null;
    function Ly(e) {
      Wo === null ? Wo = [e] : Wo.push(e);
    }
    function a2() {
      if (Wo !== null) {
        for (var e = 0; e < Wo.length; e++) {
          var t = Wo[e], u = t.interleaved;
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
        Wo = null;
      }
    }
    function EE(e, t, u, a) {
      var l = t.interleaved;
      return l === null ? (u.next = u, Ly(t)) : (u.next = l.next, l.next = u), t.interleaved = u, qh(e, a);
    }
    function i2(e, t, u, a) {
      var l = t.interleaved;
      l === null ? (u.next = u, Ly(t)) : (u.next = l.next, l.next = u), t.interleaved = u;
    }
    function l2(e, t, u, a) {
      var l = t.interleaved;
      return l === null ? (u.next = u, Ly(t)) : (u.next = l.next, l.next = u), t.interleaved = u, qh(e, a);
    }
    function su(e, t) {
      return qh(e, t);
    }
    var o2 = qh;
    function qh(e, t) {
      e.lanes = Et(e.lanes, t);
      var u = e.alternate;
      u !== null && (u.lanes = Et(u.lanes, t)), u === null && (e.flags & (Qt | Zr)) !== rt && CS(e);
      for (var a = e, l = e.return; l !== null; )
        l.childLanes = Et(l.childLanes, t), u = l.alternate, u !== null ? u.childLanes = Et(u.childLanes, t) : (l.flags & (Qt | Zr)) !== rt && CS(e), a = l, l = l.return;
      if (a.tag === ve) {
        var s = a.stateNode;
        return s;
      } else
        return null;
    }
    var CE = 0, SE = 1, Gh = 2, Uy = 3, Yh = !1, zy, Qh;
    zy = !1, Qh = null;
    function jy(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: oe
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function AE(e, t) {
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
    function Mi(e, t) {
      var u = {
        eventTime: e,
        lane: t,
        tag: CE,
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
      if (Qh === l && !zy && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), zy = !0), ox()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, o2(e, u);
      } else
        return l2(e, l, t, u);
    }
    function Wh(e, t, u) {
      var a = t.updateQueue;
      if (a !== null) {
        var l = a.shared;
        if (sd(u)) {
          var s = l.lanes;
          s = fd(s, e.pendingLanes);
          var d = Et(s, u);
          l.lanes = d, vl(e, d);
        }
      }
    }
    function Py(e, t) {
      var u = e.updateQueue, a = e.alternate;
      if (a !== null) {
        var l = a.updateQueue;
        if (u === l) {
          var s = null, d = null, h = u.firstBaseUpdate;
          if (h !== null) {
            var g = h;
            do {
              var E = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              d === null ? s = d = E : (d.next = E, d = E), g = g.next;
            } while (g !== null);
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
      var A = u.lastBaseUpdate;
      A === null ? u.firstBaseUpdate = t : A.next = t, u.lastBaseUpdate = t;
    }
    function s2(e, t, u, a, l, s) {
      switch (u.tag) {
        case SE: {
          var d = u.payload;
          if (typeof d == "function") {
            yE();
            var h = d.call(s, a, l);
            {
              if (e.mode & un) {
                xn(!0);
                try {
                  d.call(s, a, l);
                } finally {
                  xn(!1);
                }
              }
              gE();
            }
            return h;
          }
          return d;
        }
        case Uy:
          e.flags = e.flags & ~Ln | dt;
        case CE: {
          var g = u.payload, E;
          if (typeof g == "function") {
            yE(), E = g.call(s, a, l);
            {
              if (e.mode & un) {
                xn(!0);
                try {
                  g.call(s, a, l);
                } finally {
                  xn(!1);
                }
              }
              gE();
            }
          } else
            E = g;
          return E == null ? a : St({}, a, E);
        }
        case Gh:
          return Yh = !0, a;
      }
      return a;
    }
    function Kh(e, t, u, a) {
      var l = e.updateQueue;
      Yh = !1, Qh = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, h = l.shared.pending;
      if (h !== null) {
        l.shared.pending = null;
        var g = h, E = g.next;
        g.next = null, d === null ? s = E : d.next = E, d = g;
        var A = e.alternate;
        if (A !== null) {
          var L = A.updateQueue, k = L.lastBaseUpdate;
          k !== d && (k === null ? L.firstBaseUpdate = E : k.next = E, L.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var K = l.baseState, X = oe, ae = null, ze = null, it = null, Ze = s;
        do {
          var wt = Ze.lane, Ft = Ze.eventTime;
          if (Di(a, wt)) {
            if (it !== null) {
              var ie = {
                eventTime: Ft,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Tt,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              it = it.next = ie;
            }
            K = s2(e, l, Ze, K, t, u);
            var q = Ze.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ze.lane !== Tt) {
              e.flags |= Bu;
              var Se = l.effects;
              Se === null ? l.effects = [Ze] : Se.push(Ze);
            }
          } else {
            var V = {
              eventTime: Ft,
              lane: wt,
              tag: Ze.tag,
              payload: Ze.payload,
              callback: Ze.callback,
              next: null
            };
            it === null ? (ze = it = V, ae = K) : it = it.next = V, X = Et(X, wt);
          }
          if (Ze = Ze.next, Ze === null) {
            if (h = l.shared.pending, h === null)
              break;
            var je = h, Ne = je.next;
            je.next = null, Ze = Ne, l.lastBaseUpdate = je, l.shared.pending = null;
          }
        } while (!0);
        it === null && (ae = K), l.baseState = ae, l.firstBaseUpdate = ze, l.lastBaseUpdate = it;
        var ft = l.shared.interleaved;
        if (ft !== null) {
          var ht = ft;
          do
            X = Et(X, ht.lane), ht = ht.next;
          while (ht !== ft);
        } else
          s === null && (l.shared.lanes = oe);
        Tp(X), e.lanes = X, e.memoizedState = K;
      }
      Qh = null;
    }
    function c2(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function FE() {
      Yh = !1;
    }
    function Xh() {
      return Yh;
    }
    function TE(e, t, u) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var l = 0; l < a.length; l++) {
          var s = a[l], d = s.callback;
          d !== null && (s.callback = null, c2(d, u));
        }
    }
    var $y = {}, bE = new c.Component().refs, Hy, Iy, Vy, qy, Gy, wE, Jh, Yy, Qy, Wy;
    {
      Hy = /* @__PURE__ */ new Set(), Iy = /* @__PURE__ */ new Set(), Vy = /* @__PURE__ */ new Set(), qy = /* @__PURE__ */ new Set(), Yy = /* @__PURE__ */ new Set(), Gy = /* @__PURE__ */ new Set(), Qy = /* @__PURE__ */ new Set(), Wy = /* @__PURE__ */ new Set();
      var xE = /* @__PURE__ */ new Set();
      Jh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var u = t + "_" + e;
          xE.has(u) || (xE.add(u), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, wE = function(e, t) {
        if (t === void 0) {
          var u = It(e) || "Component";
          Gy.has(u) || (Gy.add(u), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", u));
        }
      }, Object.defineProperty($y, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze($y);
    }
    function Ky(e, t, u, a) {
      var l = e.memoizedState, s = u(a, l);
      {
        if (e.mode & un) {
          xn(!0);
          try {
            s = u(a, l);
          } finally {
            xn(!1);
          }
        }
        wE(t, s);
      }
      var d = s == null ? l : St({}, l, s);
      if (e.memoizedState = d, e.lanes === oe) {
        var h = e.updateQueue;
        h.baseState = d;
      }
    }
    var Xy = {
      isMounted: zr,
      enqueueSetState: function(e, t, u) {
        var a = Xr(e), l = Vr(), s = Hl(a), d = Mi(l, s);
        d.payload = t, u != null && (Jh(u, "setState"), d.callback = u);
        var h = kl(a, d, s);
        h !== null && (Jn(h, a, s, l), Wh(h, a, s)), Na(a, s);
      },
      enqueueReplaceState: function(e, t, u) {
        var a = Xr(e), l = Vr(), s = Hl(a), d = Mi(l, s);
        d.tag = SE, d.payload = t, u != null && (Jh(u, "replaceState"), d.callback = u);
        var h = kl(a, d, s);
        h !== null && (Jn(h, a, s, l), Wh(h, a, s)), Na(a, s);
      },
      enqueueForceUpdate: function(e, t) {
        var u = Xr(e), a = Vr(), l = Hl(u), s = Mi(a, l);
        s.tag = Gh, t != null && (Jh(t, "forceUpdate"), s.callback = t);
        var d = kl(u, s, l);
        d !== null && (Jn(d, u, l, a), Wh(d, u, l)), ad(u, l);
      }
    };
    function RE(e, t, u, a, l, s, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var g = h.shouldComponentUpdate(a, s, d);
        {
          if (e.mode & un) {
            xn(!0);
            try {
              g = h.shouldComponentUpdate(a, s, d);
            } finally {
              xn(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", It(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !tt(u, a) || !tt(l, s) : !0;
    }
    function f2(e, t, u) {
      var a = e.stateNode;
      {
        var l = It(t) || "Component", s = a.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), a.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), a.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), a.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Qy.has(t) && (Qy.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof a.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", It(t) || "A pure component"), typeof a.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof a.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof a.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof a.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = a.props !== u;
        a.props !== void 0 && d && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), a.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !Vy.has(t) && (Vy.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", It(t))), typeof a.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof a.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var h = a.state;
        h && (typeof h != "object" || kn(h)) && y("%s.state: must be set to an object or null", l), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function BE(e, t) {
      t.updater = Xy, e.stateNode = t, ul(t, e), t._reactInternalInstance = $y;
    }
    function _E(e, t, u) {
      var a = !1, l = Fu, s = Fu, d = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === pf && d._context === void 0
        );
        if (!h && !Wy.has(t)) {
          Wy.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === df ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", It(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = $n(d);
      else {
        l = Oc(e, t, !0);
        var E = t.contextTypes;
        a = E != null, s = a ? Nc(e, l) : Fu;
      }
      var A = new t(u, s);
      if (e.mode & un) {
        xn(!0);
        try {
          A = new t(u, s);
        } finally {
          xn(!1);
        }
      }
      var L = e.memoizedState = A.state !== null && A.state !== void 0 ? A.state : null;
      BE(e, A);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var k = It(t) || "Component";
          Iy.has(k) || (Iy.add(k), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, A.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof A.getSnapshotBeforeUpdate == "function") {
          var K = null, X = null, ae = null;
          if (typeof A.componentWillMount == "function" && A.componentWillMount.__suppressDeprecationWarning !== !0 ? K = "componentWillMount" : typeof A.UNSAFE_componentWillMount == "function" && (K = "UNSAFE_componentWillMount"), typeof A.componentWillReceiveProps == "function" && A.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof A.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof A.componentWillUpdate == "function" && A.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ae = "componentWillUpdate" : typeof A.UNSAFE_componentWillUpdate == "function" && (ae = "UNSAFE_componentWillUpdate"), K !== null || X !== null || ae !== null) {
            var ze = It(t) || "Component", it = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            qy.has(ze) || (qy.add(ze), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ze, it, K !== null ? `
  ` + K : "", X !== null ? `
  ` + X : "", ae !== null ? `
  ` + ae : ""));
          }
        }
      }
      return a && tE(e, l, s), A;
    }
    function d2(e, t) {
      var u = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), u !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mt(e) || "Component"), Xy.enqueueReplaceState(t, t.state, null));
    }
    function OE(e, t, u, a) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l) {
        {
          var s = mt(e) || "Component";
          Hy.has(s) || (Hy.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Xy.enqueueReplaceState(t, t.state, null);
      }
    }
    function Jy(e, t, u, a) {
      f2(e, t, u);
      var l = e.stateNode;
      l.props = u, l.state = e.memoizedState, l.refs = bE, jy(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = $n(s);
      else {
        var d = Oc(e, t, !0);
        l.context = Nc(e, d);
      }
      {
        if (l.state === u) {
          var h = It(t) || "Component";
          Yy.has(h) || (Yy.add(h), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & un && sa.recordLegacyContextWarning(e, l), sa.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (Ky(e, t, g, u), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (d2(e, l), Kh(e, u, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var E = Dt;
        E |= Ar, (e.mode & nu) !== lt && (E |= Fr), e.flags |= E;
      }
    }
    function p2(e, t, u, a) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, h = t.contextType, g = Fu;
      if (typeof h == "object" && h !== null)
        g = $n(h);
      else {
        var E = Oc(e, t, !0);
        g = Nc(e, E);
      }
      var A = t.getDerivedStateFromProps, L = typeof A == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !L && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== u || d !== g) && OE(e, l, u, g), FE();
      var k = e.memoizedState, K = l.state = k;
      if (Kh(e, u, l, a), K = e.memoizedState, s === u && k === K && !Nh() && !Xh()) {
        if (typeof l.componentDidMount == "function") {
          var X = Dt;
          X |= Ar, (e.mode & nu) !== lt && (X |= Fr), e.flags |= X;
        }
        return !1;
      }
      typeof A == "function" && (Ky(e, t, A, u), K = e.memoizedState);
      var ae = Xh() || RE(e, t, s, u, k, K, g);
      if (ae) {
        if (!L && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var ze = Dt;
          ze |= Ar, (e.mode & nu) !== lt && (ze |= Fr), e.flags |= ze;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var it = Dt;
          it |= Ar, (e.mode & nu) !== lt && (it |= Fr), e.flags |= it;
        }
        e.memoizedProps = u, e.memoizedState = K;
      }
      return l.props = u, l.state = K, l.context = g, ae;
    }
    function v2(e, t, u, a, l) {
      var s = t.stateNode;
      AE(e, t);
      var d = t.memoizedProps, h = t.type === t.elementType ? d : ca(t.type, d);
      s.props = h;
      var g = t.pendingProps, E = s.context, A = u.contextType, L = Fu;
      if (typeof A == "object" && A !== null)
        L = $n(A);
      else {
        var k = Oc(t, u, !0);
        L = Nc(t, k);
      }
      var K = u.getDerivedStateFromProps, X = typeof K == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || E !== L) && OE(t, s, a, L), FE();
      var ae = t.memoizedState, ze = s.state = ae;
      if (Kh(t, a, s, l), ze = t.memoizedState, d === g && ae === ze && !Nh() && !Xh() && !H)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Jr), !1;
      typeof K == "function" && (Ky(t, u, K, a), ze = t.memoizedState);
      var it = Xh() || RE(t, u, h, a, ae, ze, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      H;
      return it ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, ze, L), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(a, ze, L)), typeof s.componentDidUpdate == "function" && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Jr)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Jr), t.memoizedProps = a, t.memoizedState = ze), s.props = a, s.state = ze, s.context = L, it;
    }
    var Zy, eg, tg, ng, rg, NE = function(e, t) {
    };
    Zy = !1, eg = !1, tg = {}, ng = {}, rg = {}, NE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var u = mt(t) || "Component";
        ng[u] || (ng[u] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ep(e, t, u) {
      var a = u.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & un || Q) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(u._owner && u._self && u._owner.stateNode !== u._self)) {
          var l = mt(e) || "Component";
          tg[l] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a), tg[l] = !0);
        }
        if (u._owner) {
          var s = u._owner, d;
          if (s) {
            var h = s;
            if (h.tag !== ee)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = h.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          Er(a, "ref");
          var E = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var A = function(L) {
            var k = g.refs;
            k === bE && (k = g.refs = {}), L === null ? delete k[E] : k[E] = L;
          };
          return A._stringRef = E, A;
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
    function Zh(e, t) {
      var u = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    }
    function e0(e) {
      {
        var t = mt(e) || "Component";
        if (rg[t])
          return;
        rg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function kE(e) {
      var t = e._payload, u = e._init;
      return u(t);
    }
    function ME(e) {
      function t(V, ie) {
        if (e) {
          var q = V.deletions;
          q === null ? (V.deletions = [ie], V.flags |= Nt) : q.push(ie);
        }
      }
      function u(V, ie) {
        if (!e)
          return null;
        for (var q = ie; q !== null; )
          t(V, q), q = q.sibling;
        return null;
      }
      function a(V, ie) {
        for (var q = /* @__PURE__ */ new Map(), Se = ie; Se !== null; )
          Se.key !== null ? q.set(Se.key, Se) : q.set(Se.index, Se), Se = Se.sibling;
        return q;
      }
      function l(V, ie) {
        var q = rs(V, ie);
        return q.index = 0, q.sibling = null, q;
      }
      function s(V, ie, q) {
        if (V.index = q, !e)
          return V.flags |= Yf, ie;
        var Se = V.alternate;
        if (Se !== null) {
          var je = Se.index;
          return je < ie ? (V.flags |= Qt, ie) : je;
        } else
          return V.flags |= Qt, ie;
      }
      function d(V) {
        return e && V.alternate === null && (V.flags |= Qt), V;
      }
      function h(V, ie, q, Se) {
        if (ie === null || ie.tag !== ce) {
          var je = B1(q, V.mode, Se);
          return je.return = V, je;
        } else {
          var Ne = l(ie, q);
          return Ne.return = V, Ne;
        }
      }
      function g(V, ie, q, Se) {
        var je = q.type;
        if (je === Iu)
          return A(V, ie, q.props.children, Se, q.key);
        if (ie !== null && (ie.elementType === je || // Keep this check inline so it only runs on the false path:
        TS(ie, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof je == "object" && je !== null && je.$$typeof === sr && kE(je) === ie.type)) {
          var Ne = l(ie, q.props);
          return Ne.ref = ep(V, ie, q), Ne.return = V, Ne._debugSource = q._source, Ne._debugOwner = q._owner, Ne;
        }
        var ft = R1(q, V.mode, Se);
        return ft.ref = ep(V, ie, q), ft.return = V, ft;
      }
      function E(V, ie, q, Se) {
        if (ie === null || ie.tag !== z || ie.stateNode.containerInfo !== q.containerInfo || ie.stateNode.implementation !== q.implementation) {
          var je = _1(q, V.mode, Se);
          return je.return = V, je;
        } else {
          var Ne = l(ie, q.children || []);
          return Ne.return = V, Ne;
        }
      }
      function A(V, ie, q, Se, je) {
        if (ie === null || ie.tag !== se) {
          var Ne = Vl(q, V.mode, Se, je);
          return Ne.return = V, Ne;
        } else {
          var ft = l(ie, q);
          return ft.return = V, ft;
        }
      }
      function L(V, ie, q) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var Se = B1("" + ie, V.mode, q);
          return Se.return = V, Se;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case Ii: {
              var je = R1(ie, V.mode, q);
              return je.ref = ep(V, null, ie), je.return = V, je;
            }
            case hu: {
              var Ne = _1(ie, V.mode, q);
              return Ne.return = V, Ne;
            }
            case sr: {
              var ft = ie._payload, ht = ie._init;
              return L(V, ht(ft), q);
            }
          }
          if (kn(ie) || Vu(ie)) {
            var Pt = Vl(ie, V.mode, q, null);
            return Pt.return = V, Pt;
          }
          Zh(V, ie);
        }
        return typeof ie == "function" && e0(V), null;
      }
      function k(V, ie, q, Se) {
        var je = ie !== null ? ie.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return je !== null ? null : h(V, ie, "" + q, Se);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ii:
              return q.key === je ? g(V, ie, q, Se) : null;
            case hu:
              return q.key === je ? E(V, ie, q, Se) : null;
            case sr: {
              var Ne = q._payload, ft = q._init;
              return k(V, ie, ft(Ne), Se);
            }
          }
          if (kn(q) || Vu(q))
            return je !== null ? null : A(V, ie, q, Se, null);
          Zh(V, q);
        }
        return typeof q == "function" && e0(V), null;
      }
      function K(V, ie, q, Se, je) {
        if (typeof Se == "string" && Se !== "" || typeof Se == "number") {
          var Ne = V.get(q) || null;
          return h(ie, Ne, "" + Se, je);
        }
        if (typeof Se == "object" && Se !== null) {
          switch (Se.$$typeof) {
            case Ii: {
              var ft = V.get(Se.key === null ? q : Se.key) || null;
              return g(ie, ft, Se, je);
            }
            case hu: {
              var ht = V.get(Se.key === null ? q : Se.key) || null;
              return E(ie, ht, Se, je);
            }
            case sr:
              var Pt = Se._payload, _t = Se._init;
              return K(V, ie, q, _t(Pt), je);
          }
          if (kn(Se) || Vu(Se)) {
            var Nn = V.get(q) || null;
            return A(ie, Nn, Se, je, null);
          }
          Zh(ie, Se);
        }
        return typeof Se == "function" && e0(ie), null;
      }
      function X(V, ie, q) {
        {
          if (typeof V != "object" || V === null)
            return ie;
          switch (V.$$typeof) {
            case Ii:
            case hu:
              NE(V, q);
              var Se = V.key;
              if (typeof Se != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(Se);
                break;
              }
              if (!ie.has(Se)) {
                ie.add(Se);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Se);
              break;
            case sr:
              var je = V._payload, Ne = V._init;
              X(Ne(je), ie, q);
              break;
          }
        }
        return ie;
      }
      function ae(V, ie, q, Se) {
        for (var je = null, Ne = 0; Ne < q.length; Ne++) {
          var ft = q[Ne];
          je = X(ft, je, V);
        }
        for (var ht = null, Pt = null, _t = ie, Nn = 0, Ot = 0, bn = null; _t !== null && Ot < q.length; Ot++) {
          _t.index > Ot ? (bn = _t, _t = null) : bn = _t.sibling;
          var Nr = k(V, _t, q[Ot], Se);
          if (Nr === null) {
            _t === null && (_t = bn);
            break;
          }
          e && _t && Nr.alternate === null && t(V, _t), Nn = s(Nr, Nn, Ot), Pt === null ? ht = Nr : Pt.sibling = Nr, Pt = Nr, _t = bn;
        }
        if (Ot === q.length) {
          if (u(V, _t), dr()) {
            var Dr = Ot;
            Vo(V, Dr);
          }
          return ht;
        }
        if (_t === null) {
          for (; Ot < q.length; Ot++) {
            var bu = L(V, q[Ot], Se);
            bu !== null && (Nn = s(bu, Nn, Ot), Pt === null ? ht = bu : Pt.sibling = bu, Pt = bu);
          }
          if (dr()) {
            var qr = Ot;
            Vo(V, qr);
          }
          return ht;
        }
        for (var Gr = a(V, _t); Ot < q.length; Ot++) {
          var kr = K(Gr, V, Ot, q[Ot], Se);
          kr !== null && (e && kr.alternate !== null && Gr.delete(kr.key === null ? Ot : kr.key), Nn = s(kr, Nn, Ot), Pt === null ? ht = kr : Pt.sibling = kr, Pt = kr);
        }
        if (e && Gr.forEach(function(tf) {
          return t(V, tf);
        }), dr()) {
          var $i = Ot;
          Vo(V, $i);
        }
        return ht;
      }
      function ze(V, ie, q, Se) {
        var je = Vu(q);
        if (typeof je != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (eg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), q.entries === je && (Zy || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zy = !0);
          var Ne = je.call(q);
          if (Ne)
            for (var ft = null, ht = Ne.next(); !ht.done; ht = Ne.next()) {
              var Pt = ht.value;
              ft = X(Pt, ft, V);
            }
        }
        var _t = je.call(q);
        if (_t == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Nn = null, Ot = null, bn = ie, Nr = 0, Dr = 0, bu = null, qr = _t.next(); bn !== null && !qr.done; Dr++, qr = _t.next()) {
          bn.index > Dr ? (bu = bn, bn = null) : bu = bn.sibling;
          var Gr = k(V, bn, qr.value, Se);
          if (Gr === null) {
            bn === null && (bn = bu);
            break;
          }
          e && bn && Gr.alternate === null && t(V, bn), Nr = s(Gr, Nr, Dr), Ot === null ? Nn = Gr : Ot.sibling = Gr, Ot = Gr, bn = bu;
        }
        if (qr.done) {
          if (u(V, bn), dr()) {
            var kr = Dr;
            Vo(V, kr);
          }
          return Nn;
        }
        if (bn === null) {
          for (; !qr.done; Dr++, qr = _t.next()) {
            var $i = L(V, qr.value, Se);
            $i !== null && (Nr = s($i, Nr, Dr), Ot === null ? Nn = $i : Ot.sibling = $i, Ot = $i);
          }
          if (dr()) {
            var tf = Dr;
            Vo(V, tf);
          }
          return Nn;
        }
        for (var Bp = a(V, bn); !qr.done; Dr++, qr = _t.next()) {
          var Xa = K(Bp, V, Dr, qr.value, Se);
          Xa !== null && (e && Xa.alternate !== null && Bp.delete(Xa.key === null ? Dr : Xa.key), Nr = s(Xa, Nr, Dr), Ot === null ? Nn = Xa : Ot.sibling = Xa, Ot = Xa);
        }
        if (e && Bp.forEach(function(xR) {
          return t(V, xR);
        }), dr()) {
          var wR = Dr;
          Vo(V, wR);
        }
        return Nn;
      }
      function it(V, ie, q, Se) {
        if (ie !== null && ie.tag === ce) {
          u(V, ie.sibling);
          var je = l(ie, q);
          return je.return = V, je;
        }
        u(V, ie);
        var Ne = B1(q, V.mode, Se);
        return Ne.return = V, Ne;
      }
      function Ze(V, ie, q, Se) {
        for (var je = q.key, Ne = ie; Ne !== null; ) {
          if (Ne.key === je) {
            var ft = q.type;
            if (ft === Iu) {
              if (Ne.tag === se) {
                u(V, Ne.sibling);
                var ht = l(Ne, q.props.children);
                return ht.return = V, ht._debugSource = q._source, ht._debugOwner = q._owner, ht;
              }
            } else if (Ne.elementType === ft || // Keep this check inline so it only runs on the false path:
            TS(Ne, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ft == "object" && ft !== null && ft.$$typeof === sr && kE(ft) === Ne.type) {
              u(V, Ne.sibling);
              var Pt = l(Ne, q.props);
              return Pt.ref = ep(V, Ne, q), Pt.return = V, Pt._debugSource = q._source, Pt._debugOwner = q._owner, Pt;
            }
            u(V, Ne);
            break;
          } else
            t(V, Ne);
          Ne = Ne.sibling;
        }
        if (q.type === Iu) {
          var _t = Vl(q.props.children, V.mode, Se, q.key);
          return _t.return = V, _t;
        } else {
          var Nn = R1(q, V.mode, Se);
          return Nn.ref = ep(V, ie, q), Nn.return = V, Nn;
        }
      }
      function wt(V, ie, q, Se) {
        for (var je = q.key, Ne = ie; Ne !== null; ) {
          if (Ne.key === je)
            if (Ne.tag === z && Ne.stateNode.containerInfo === q.containerInfo && Ne.stateNode.implementation === q.implementation) {
              u(V, Ne.sibling);
              var ft = l(Ne, q.children || []);
              return ft.return = V, ft;
            } else {
              u(V, Ne);
              break;
            }
          else
            t(V, Ne);
          Ne = Ne.sibling;
        }
        var ht = _1(q, V.mode, Se);
        return ht.return = V, ht;
      }
      function Ft(V, ie, q, Se) {
        var je = typeof q == "object" && q !== null && q.type === Iu && q.key === null;
        if (je && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ii:
              return d(Ze(V, ie, q, Se));
            case hu:
              return d(wt(V, ie, q, Se));
            case sr:
              var Ne = q._payload, ft = q._init;
              return Ft(V, ie, ft(Ne), Se);
          }
          if (kn(q))
            return ae(V, ie, q, Se);
          if (Vu(q))
            return ze(V, ie, q, Se);
          Zh(V, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? d(it(V, ie, "" + q, Se)) : (typeof q == "function" && e0(V), u(V, ie));
      }
      return Ft;
    }
    var jc = ME(!0), LE = ME(!1);
    function h2(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var u = t.child, a = rs(u, u.pendingProps);
        for (t.child = a, a.return = t; u.sibling !== null; )
          u = u.sibling, a = a.sibling = rs(u, u.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function m2(e, t) {
      for (var u = e.child; u !== null; )
        qx(u, t), u = u.sibling;
    }
    var tp = {}, Ml = Bl(tp), np = Bl(tp), t0 = Bl(tp);
    function n0(e) {
      if (e === tp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function UE() {
      var e = n0(t0.current);
      return e;
    }
    function ug(e, t) {
      _r(t0, t, e), _r(np, e, e), _r(Ml, tp, e);
      var u = BT(t);
      Br(Ml, e), _r(Ml, u, e);
    }
    function Pc(e) {
      Br(Ml, e), Br(np, e), Br(t0, e);
    }
    function ag() {
      var e = n0(Ml.current);
      return e;
    }
    function zE(e) {
      n0(t0.current);
      var t = n0(Ml.current), u = _T(t, e.type);
      t !== u && (_r(np, e, e), _r(Ml, u, e));
    }
    function ig(e) {
      np.current === e && (Br(Ml, e), Br(np, e));
    }
    var y2 = 0, jE = 1, PE = 1, rp = 2, fa = Bl(y2);
    function lg(e, t) {
      return (e & t) !== 0;
    }
    function $c(e) {
      return e & jE;
    }
    function og(e, t) {
      return e & jE | t;
    }
    function g2(e, t) {
      return e | t;
    }
    function Ll(e, t) {
      _r(fa, t, e);
    }
    function Hc(e) {
      Br(fa, e);
    }
    function D2(e, t) {
      var u = e.memoizedState;
      return u !== null ? u.dehydrated !== null : (e.memoizedProps, !0);
    }
    function r0(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === $) {
          var u = t.memoizedState;
          if (u !== null) {
            var a = u.dehydrated;
            if (a === null || KD(a) || vy(a))
              return t;
          }
        } else if (t.tag === De && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & dt) !== rt;
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
    var cu = (
      /*   */
      0
    ), qn = (
      /* */
      1
    ), Va = (
      /*  */
      2
    ), Gn = (
      /*    */
      4
    ), pr = (
      /*   */
      8
    ), sg = [];
    function cg() {
      for (var e = 0; e < sg.length; e++) {
        var t = sg[e];
        t._workInProgressVersionPrimary = null;
      }
      sg.length = 0;
    }
    function E2(e, t) {
      var u = t._getVersion, a = u(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var Le = m.ReactCurrentDispatcher, up = m.ReactCurrentBatchConfig, fg, Ic;
    fg = /* @__PURE__ */ new Set();
    var Ko = oe, jt = null, Yn = null, Qn = null, u0 = !1, ap = !1, ip = 0, C2 = 0, S2 = 25, fe = null, ju = null, Ul = -1, dg = !1;
    function Mt() {
      {
        var e = fe;
        ju === null ? ju = [e] : ju.push(e);
      }
    }
    function Be() {
      {
        var e = fe;
        ju !== null && (Ul++, ju[Ul] !== e && A2(e));
      }
    }
    function Vc(e) {
      e != null && !kn(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", fe, typeof e);
    }
    function A2(e) {
      {
        var t = mt(jt);
        if (!fg.has(t) && (fg.add(t), ju !== null)) {
          for (var u = "", a = 30, l = 0; l <= Ul; l++) {
            for (var s = ju[l], d = l === Ul ? e : s, h = l + 1 + ". " + s; h.length < a; )
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
    function Or() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function pg(e, t) {
      if (dg)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", fe), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, fe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var u = 0; u < t.length && u < e.length; u++)
        if (!qe(e[u], t[u]))
          return !1;
      return !0;
    }
    function qc(e, t, u, a, l, s) {
      Ko = s, jt = t, ju = e !== null ? e._debugHookTypes : null, Ul = -1, dg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = oe, e !== null && e.memoizedState !== null ? Le.current = oC : ju !== null ? Le.current = lC : Le.current = iC;
      var d = u(a, l);
      if (ap) {
        var h = 0;
        do {
          if (ap = !1, ip = 0, h >= S2)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, dg = !1, Yn = null, Qn = null, t.updateQueue = null, Ul = -1, Le.current = sC, d = u(a, l);
        } while (ap);
      }
      Le.current = y0, t._debugHookTypes = ju;
      var g = Yn !== null && Yn.next !== null;
      if (Ko = oe, jt = null, Yn = null, Qn = null, fe = null, ju = null, Ul = -1, e !== null && (e.flags & Hn) !== (t.flags & Hn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ct) !== lt && y("Internal React error: Expected static flag was missing. Please notify the React team."), u0 = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Gc() {
      var e = ip !== 0;
      return ip = 0, e;
    }
    function $E(e, t, u) {
      t.updateQueue = e.updateQueue, (t.mode & nu) !== lt ? t.flags &= ~(si | Fr | Zt | Dt) : t.flags &= ~(Zt | Dt), e.lanes = pl(e.lanes, u);
    }
    function HE() {
      if (Le.current = y0, u0) {
        for (var e = jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        u0 = !1;
      }
      Ko = oe, jt = null, Yn = null, Qn = null, ju = null, Ul = -1, fe = null, tC = !1, ap = !1, ip = 0;
    }
    function qa() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Qn === null ? jt.memoizedState = Qn = e : Qn = Qn.next = e, Qn;
    }
    function Pu() {
      var e;
      if (Yn === null) {
        var t = jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Yn.next;
      var u;
      if (Qn === null ? u = jt.memoizedState : u = Qn.next, u !== null)
        Qn = u, u = Qn.next, Yn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Yn = e;
        var a = {
          memoizedState: Yn.memoizedState,
          baseState: Yn.baseState,
          baseQueue: Yn.baseQueue,
          queue: Yn.queue,
          next: null
        };
        Qn === null ? jt.memoizedState = Qn = a : Qn = Qn.next = a;
      }
      return Qn;
    }
    function IE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function vg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function hg(e, t, u) {
      var a = qa(), l;
      u !== void 0 ? l = u(t) : l = t, a.memoizedState = a.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: oe,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      a.queue = s;
      var d = s.dispatch = w2.bind(null, jt, s);
      return [a.memoizedState, d];
    }
    function mg(e, t, u) {
      var a = Pu(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Yn, d = s.baseQueue, h = l.pending;
      if (h !== null) {
        if (d !== null) {
          var g = d.next, E = h.next;
          d.next = E, h.next = g;
        }
        s.baseQueue !== d && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = h, l.pending = null;
      }
      if (d !== null) {
        var A = d.next, L = s.baseState, k = null, K = null, X = null, ae = A;
        do {
          var ze = ae.lane;
          if (Di(Ko, ze)) {
            if (X !== null) {
              var Ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Tt,
                action: ae.action,
                hasEagerState: ae.hasEagerState,
                eagerState: ae.eagerState,
                next: null
              };
              X = X.next = Ze;
            }
            if (ae.hasEagerState)
              L = ae.eagerState;
            else {
              var wt = ae.action;
              L = e(L, wt);
            }
          } else {
            var it = {
              lane: ze,
              action: ae.action,
              hasEagerState: ae.hasEagerState,
              eagerState: ae.eagerState,
              next: null
            };
            X === null ? (K = X = it, k = L) : X = X.next = it, jt.lanes = Et(jt.lanes, ze), Tp(ze);
          }
          ae = ae.next;
        } while (ae !== null && ae !== A);
        X === null ? k = L : X.next = K, qe(L, a.memoizedState) || pp(), a.memoizedState = L, a.baseState = k, a.baseQueue = X, l.lastRenderedState = L;
      }
      var Ft = l.interleaved;
      if (Ft !== null) {
        var V = Ft;
        do {
          var ie = V.lane;
          jt.lanes = Et(jt.lanes, ie), Tp(ie), V = V.next;
        } while (V !== Ft);
      } else
        d === null && (l.lanes = oe);
      var q = l.dispatch;
      return [a.memoizedState, q];
    }
    function yg(e, t, u) {
      var a = Pu(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, h = a.memoizedState;
      if (d !== null) {
        l.pending = null;
        var g = d.next, E = g;
        do {
          var A = E.action;
          h = e(h, A), E = E.next;
        } while (E !== g);
        qe(h, a.memoizedState) || pp(), a.memoizedState = h, a.baseQueue === null && (a.baseState = h), l.lastRenderedState = h;
      }
      return [h, s];
    }
    function tM(e, t, u) {
    }
    function nM(e, t, u) {
    }
    function gg(e, t, u) {
      var a = jt, l = qa(), s, d = dr();
      if (d) {
        if (u === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = u(), Ic || s !== u() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ic = !0);
      } else {
        if (s = t(), !Ic) {
          var h = t();
          qe(s, h) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ic = !0);
        }
        var g = M0();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        wo(g, Ko) || VE(a, t, s);
      }
      l.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return l.queue = E, s0(GE.bind(null, a, E, e), [e]), a.flags |= Zt, lp(qn | pr, qE.bind(null, a, E, s, t), void 0, null), s;
    }
    function a0(e, t, u) {
      var a = jt, l = Pu(), s = t();
      if (!Ic) {
        var d = t();
        qe(s, d) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ic = !0);
      }
      var h = l.memoizedState, g = !qe(h, s);
      g && (l.memoizedState = s, pp());
      var E = l.queue;
      if (sp(GE.bind(null, a, E, e), [e]), E.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Qn !== null && Qn.memoizedState.tag & qn) {
        a.flags |= Zt, lp(qn | pr, qE.bind(null, a, E, s, t), void 0, null);
        var A = M0();
        if (A === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        wo(A, Ko) || VE(a, t, s);
      }
      return s;
    }
    function VE(e, t, u) {
      e.flags |= go;
      var a = {
        getSnapshot: t,
        value: u
      }, l = jt.updateQueue;
      if (l === null)
        l = IE(), jt.updateQueue = l, l.stores = [a];
      else {
        var s = l.stores;
        s === null ? l.stores = [a] : s.push(a);
      }
    }
    function qE(e, t, u, a) {
      t.value = u, t.getSnapshot = a, YE(t) && QE(e);
    }
    function GE(e, t, u) {
      var a = function() {
        YE(t) && QE(e);
      };
      return u(a);
    }
    function YE(e) {
      var t = e.getSnapshot, u = e.value;
      try {
        var a = t();
        return !qe(u, a);
      } catch {
        return !0;
      }
    }
    function QE(e) {
      var t = su(e, st);
      t !== null && Jn(t, e, st, qt);
    }
    function i0(e) {
      var t = qa();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var u = {
        pending: null,
        interleaved: null,
        lanes: oe,
        dispatch: null,
        lastRenderedReducer: vg,
        lastRenderedState: e
      };
      t.queue = u;
      var a = u.dispatch = x2.bind(null, jt, u);
      return [t.memoizedState, a];
    }
    function Dg(e) {
      return mg(vg);
    }
    function Eg(e) {
      return yg(vg);
    }
    function lp(e, t, u, a) {
      var l = {
        tag: e,
        create: t,
        destroy: u,
        deps: a,
        // Circular
        next: null
      }, s = jt.updateQueue;
      if (s === null)
        s = IE(), jt.updateQueue = s, s.lastEffect = l.next = l;
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
    function Cg(e) {
      var t = qa();
      {
        var u = {
          current: e
        };
        return t.memoizedState = u, u;
      }
    }
    function l0(e) {
      var t = Pu();
      return t.memoizedState;
    }
    function op(e, t, u, a) {
      var l = qa(), s = a === void 0 ? null : a;
      jt.flags |= e, l.memoizedState = lp(qn | t, u, void 0, s);
    }
    function o0(e, t, u, a) {
      var l = Pu(), s = a === void 0 ? null : a, d = void 0;
      if (Yn !== null) {
        var h = Yn.memoizedState;
        if (d = h.destroy, s !== null) {
          var g = h.deps;
          if (pg(s, g)) {
            l.memoizedState = lp(t, u, d, s);
            return;
          }
        }
      }
      jt.flags |= e, l.memoizedState = lp(qn | t, u, d, s);
    }
    function s0(e, t) {
      return (jt.mode & nu) !== lt ? op(si | Zt | wa, pr, e, t) : op(Zt | wa, pr, e, t);
    }
    function sp(e, t) {
      return o0(Zt, pr, e, t);
    }
    function Sg(e, t) {
      return op(Dt, Va, e, t);
    }
    function c0(e, t) {
      return o0(Dt, Va, e, t);
    }
    function Ag(e, t) {
      var u = Dt;
      return u |= Ar, (jt.mode & nu) !== lt && (u |= Fr), op(u, Gn, e, t);
    }
    function f0(e, t) {
      return o0(Dt, Gn, e, t);
    }
    function WE(e, t) {
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
    function Fg(e, t, u) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = u != null ? u.concat([e]) : null, l = Dt;
      return l |= Ar, (jt.mode & nu) !== lt && (l |= Fr), op(l, Gn, WE.bind(null, t, e), a);
    }
    function d0(e, t, u) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = u != null ? u.concat([e]) : null;
      return o0(Dt, Gn, WE.bind(null, t, e), a);
    }
    function F2(e, t) {
    }
    var p0 = F2;
    function Tg(e, t) {
      var u = qa(), a = t === void 0 ? null : t;
      return u.memoizedState = [e, a], e;
    }
    function v0(e, t) {
      var u = Pu(), a = t === void 0 ? null : t, l = u.memoizedState;
      if (l !== null && a !== null) {
        var s = l[1];
        if (pg(a, s))
          return l[0];
      }
      return u.memoizedState = [e, a], e;
    }
    function bg(e, t) {
      var u = qa(), a = t === void 0 ? null : t, l = e();
      return u.memoizedState = [l, a], l;
    }
    function h0(e, t) {
      var u = Pu(), a = t === void 0 ? null : t, l = u.memoizedState;
      if (l !== null && a !== null) {
        var s = l[1];
        if (pg(a, s))
          return l[0];
      }
      var d = e();
      return u.memoizedState = [d, a], d;
    }
    function wg(e) {
      var t = qa();
      return t.memoizedState = e, e;
    }
    function KE(e) {
      var t = Pu(), u = Yn, a = u.memoizedState;
      return JE(t, a, e);
    }
    function XE(e) {
      var t = Pu();
      if (Yn === null)
        return t.memoizedState = e, e;
      var u = Yn.memoizedState;
      return JE(t, u, e);
    }
    function JE(e, t, u) {
      var a = !Nm(Ko);
      if (a) {
        if (!qe(u, t)) {
          var l = cd();
          jt.lanes = Et(jt.lanes, l), Tp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, pp()), e.memoizedState = u, u;
    }
    function T2(e, t, u) {
      var a = uu();
      Bn(rr(a, Vn)), e(!0);
      var l = up.transition;
      up.transition = {};
      var s = up.transition;
      up.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Bn(a), up.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && _("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function xg() {
      var e = i0(!1), t = e[0], u = e[1], a = T2.bind(null, u), l = qa();
      return l.memoizedState = a, [t, a];
    }
    function ZE() {
      var e = Dg(), t = e[0], u = Pu(), a = u.memoizedState;
      return [t, a];
    }
    function eC() {
      var e = Eg(), t = e[0], u = Pu(), a = u.memoizedState;
      return [t, a];
    }
    var tC = !1;
    function b2() {
      return tC;
    }
    function Rg() {
      var e = qa(), t = M0(), u = t.identifierPrefix, a;
      if (dr()) {
        var l = Pb();
        a = ":" + u + "R" + l;
        var s = ip++;
        s > 0 && (a += "H" + s.toString(32)), a += ":";
      } else {
        var d = C2++;
        a = ":" + u + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function m0() {
      var e = Pu(), t = e.memoizedState;
      return t;
    }
    function w2(e, t, u) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = Hl(e), l = {
        lane: a,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nC(e))
        rC(t, l);
      else {
        var s = EE(e, t, l, a);
        if (s !== null) {
          var d = Vr();
          Jn(s, e, a, d), uC(s, t, a);
        }
      }
      aC(e, a);
    }
    function x2(e, t, u) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = Hl(e), l = {
        lane: a,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nC(e))
        rC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === oe && (s === null || s.lanes === oe)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var h;
            h = Le.current, Le.current = da;
            try {
              var g = t.lastRenderedState, E = d(g, u);
              if (l.hasEagerState = !0, l.eagerState = E, qe(E, g)) {
                i2(e, t, l, a);
                return;
              }
            } catch {
            } finally {
              Le.current = h;
            }
          }
        }
        var A = EE(e, t, l, a);
        if (A !== null) {
          var L = Vr();
          Jn(A, e, a, L), uC(A, t, a);
        }
      }
      aC(e, a);
    }
    function nC(e) {
      var t = e.alternate;
      return e === jt || t !== null && t === jt;
    }
    function rC(e, t) {
      ap = u0 = !0;
      var u = e.pending;
      u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t;
    }
    function uC(e, t, u) {
      if (sd(u)) {
        var a = t.lanes;
        a = fd(a, e.pendingLanes);
        var l = Et(a, u);
        t.lanes = l, vl(e, l);
      }
    }
    function aC(e, t, u) {
      Na(e, t);
    }
    var y0 = {
      readContext: $n,
      useCallback: Or,
      useContext: Or,
      useEffect: Or,
      useImperativeHandle: Or,
      useInsertionEffect: Or,
      useLayoutEffect: Or,
      useMemo: Or,
      useReducer: Or,
      useRef: Or,
      useState: Or,
      useDebugValue: Or,
      useDeferredValue: Or,
      useTransition: Or,
      useMutableSource: Or,
      useSyncExternalStore: Or,
      useId: Or,
      unstable_isNewReconciler: Ee
    }, iC = null, lC = null, oC = null, sC = null, Ga = null, da = null, g0 = null;
    {
      var Bg = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      iC = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Mt(), Vc(t), Tg(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Mt(), $n(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Mt(), Vc(t), s0(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return fe = "useImperativeHandle", Mt(), Vc(u), Fg(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Mt(), Vc(t), Sg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Mt(), Vc(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Mt(), Vc(t);
          var u = Le.current;
          Le.current = Ga;
          try {
            return bg(e, t);
          } finally {
            Le.current = u;
          }
        },
        useReducer: function(e, t, u) {
          fe = "useReducer", Mt();
          var a = Le.current;
          Le.current = Ga;
          try {
            return hg(e, t, u);
          } finally {
            Le.current = a;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Mt(), Cg(e);
        },
        useState: function(e) {
          fe = "useState", Mt();
          var t = Le.current;
          Le.current = Ga;
          try {
            return i0(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Mt(), wg(e);
        },
        useTransition: function() {
          return fe = "useTransition", Mt(), xg();
        },
        useMutableSource: function(e, t, u) {
          return fe = "useMutableSource", Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return fe = "useSyncExternalStore", Mt(), gg(e, t, u);
        },
        useId: function() {
          return fe = "useId", Mt(), Rg();
        },
        unstable_isNewReconciler: Ee
      }, lC = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Be(), Tg(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Be(), $n(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Be(), s0(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return fe = "useImperativeHandle", Be(), Fg(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Be(), Sg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Be(), Ag(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Be();
          var u = Le.current;
          Le.current = Ga;
          try {
            return bg(e, t);
          } finally {
            Le.current = u;
          }
        },
        useReducer: function(e, t, u) {
          fe = "useReducer", Be();
          var a = Le.current;
          Le.current = Ga;
          try {
            return hg(e, t, u);
          } finally {
            Le.current = a;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Be(), Cg(e);
        },
        useState: function(e) {
          fe = "useState", Be();
          var t = Le.current;
          Le.current = Ga;
          try {
            return i0(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Be(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Be(), wg(e);
        },
        useTransition: function() {
          return fe = "useTransition", Be(), xg();
        },
        useMutableSource: function(e, t, u) {
          return fe = "useMutableSource", Be(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return fe = "useSyncExternalStore", Be(), gg(e, t, u);
        },
        useId: function() {
          return fe = "useId", Be(), Rg();
        },
        unstable_isNewReconciler: Ee
      }, oC = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Be(), v0(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Be(), $n(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Be(), sp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return fe = "useImperativeHandle", Be(), d0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Be(), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Be(), f0(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Be();
          var u = Le.current;
          Le.current = da;
          try {
            return h0(e, t);
          } finally {
            Le.current = u;
          }
        },
        useReducer: function(e, t, u) {
          fe = "useReducer", Be();
          var a = Le.current;
          Le.current = da;
          try {
            return mg(e, t, u);
          } finally {
            Le.current = a;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Be(), l0();
        },
        useState: function(e) {
          fe = "useState", Be();
          var t = Le.current;
          Le.current = da;
          try {
            return Dg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Be(), p0();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Be(), KE(e);
        },
        useTransition: function() {
          return fe = "useTransition", Be(), ZE();
        },
        useMutableSource: function(e, t, u) {
          return fe = "useMutableSource", Be(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return fe = "useSyncExternalStore", Be(), a0(e, t);
        },
        useId: function() {
          return fe = "useId", Be(), m0();
        },
        unstable_isNewReconciler: Ee
      }, sC = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Be(), v0(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Be(), $n(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Be(), sp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return fe = "useImperativeHandle", Be(), d0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Be(), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Be(), f0(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Be();
          var u = Le.current;
          Le.current = g0;
          try {
            return h0(e, t);
          } finally {
            Le.current = u;
          }
        },
        useReducer: function(e, t, u) {
          fe = "useReducer", Be();
          var a = Le.current;
          Le.current = g0;
          try {
            return yg(e, t, u);
          } finally {
            Le.current = a;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Be(), l0();
        },
        useState: function(e) {
          fe = "useState", Be();
          var t = Le.current;
          Le.current = g0;
          try {
            return Eg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Be(), p0();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Be(), XE(e);
        },
        useTransition: function() {
          return fe = "useTransition", Be(), eC();
        },
        useMutableSource: function(e, t, u) {
          return fe = "useMutableSource", Be(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return fe = "useSyncExternalStore", Be(), a0(e, t);
        },
        useId: function() {
          return fe = "useId", Be(), m0();
        },
        unstable_isNewReconciler: Ee
      }, Ga = {
        readContext: function(e) {
          return Bg(), $n(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", vt(), Mt(), Tg(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", vt(), Mt(), $n(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", vt(), Mt(), s0(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return fe = "useImperativeHandle", vt(), Mt(), Fg(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", vt(), Mt(), Sg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", vt(), Mt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", vt(), Mt();
          var u = Le.current;
          Le.current = Ga;
          try {
            return bg(e, t);
          } finally {
            Le.current = u;
          }
        },
        useReducer: function(e, t, u) {
          fe = "useReducer", vt(), Mt();
          var a = Le.current;
          Le.current = Ga;
          try {
            return hg(e, t, u);
          } finally {
            Le.current = a;
          }
        },
        useRef: function(e) {
          return fe = "useRef", vt(), Mt(), Cg(e);
        },
        useState: function(e) {
          fe = "useState", vt(), Mt();
          var t = Le.current;
          Le.current = Ga;
          try {
            return i0(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", vt(), Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", vt(), Mt(), wg(e);
        },
        useTransition: function() {
          return fe = "useTransition", vt(), Mt(), xg();
        },
        useMutableSource: function(e, t, u) {
          return fe = "useMutableSource", vt(), Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return fe = "useSyncExternalStore", vt(), Mt(), gg(e, t, u);
        },
        useId: function() {
          return fe = "useId", vt(), Mt(), Rg();
        },
        unstable_isNewReconciler: Ee
      }, da = {
        readContext: function(e) {
          return Bg(), $n(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", vt(), Be(), v0(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", vt(), Be(), $n(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", vt(), Be(), sp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return fe = "useImperativeHandle", vt(), Be(), d0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", vt(), Be(), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", vt(), Be(), f0(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", vt(), Be();
          var u = Le.current;
          Le.current = da;
          try {
            return h0(e, t);
          } finally {
            Le.current = u;
          }
        },
        useReducer: function(e, t, u) {
          fe = "useReducer", vt(), Be();
          var a = Le.current;
          Le.current = da;
          try {
            return mg(e, t, u);
          } finally {
            Le.current = a;
          }
        },
        useRef: function(e) {
          return fe = "useRef", vt(), Be(), l0();
        },
        useState: function(e) {
          fe = "useState", vt(), Be();
          var t = Le.current;
          Le.current = da;
          try {
            return Dg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", vt(), Be(), p0();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", vt(), Be(), KE(e);
        },
        useTransition: function() {
          return fe = "useTransition", vt(), Be(), ZE();
        },
        useMutableSource: function(e, t, u) {
          return fe = "useMutableSource", vt(), Be(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return fe = "useSyncExternalStore", vt(), Be(), a0(e, t);
        },
        useId: function() {
          return fe = "useId", vt(), Be(), m0();
        },
        unstable_isNewReconciler: Ee
      }, g0 = {
        readContext: function(e) {
          return Bg(), $n(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", vt(), Be(), v0(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", vt(), Be(), $n(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", vt(), Be(), sp(e, t);
        },
        useImperativeHandle: function(e, t, u) {
          return fe = "useImperativeHandle", vt(), Be(), d0(e, t, u);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", vt(), Be(), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", vt(), Be(), f0(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", vt(), Be();
          var u = Le.current;
          Le.current = da;
          try {
            return h0(e, t);
          } finally {
            Le.current = u;
          }
        },
        useReducer: function(e, t, u) {
          fe = "useReducer", vt(), Be();
          var a = Le.current;
          Le.current = da;
          try {
            return yg(e, t, u);
          } finally {
            Le.current = a;
          }
        },
        useRef: function(e) {
          return fe = "useRef", vt(), Be(), l0();
        },
        useState: function(e) {
          fe = "useState", vt(), Be();
          var t = Le.current;
          Le.current = da;
          try {
            return Eg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", vt(), Be(), p0();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", vt(), Be(), XE(e);
        },
        useTransition: function() {
          return fe = "useTransition", vt(), Be(), eC();
        },
        useMutableSource: function(e, t, u) {
          return fe = "useMutableSource", vt(), Be(), void 0;
        },
        useSyncExternalStore: function(e, t, u) {
          return fe = "useSyncExternalStore", vt(), Be(), a0(e, t);
        },
        useId: function() {
          return fe = "useId", vt(), Be(), m0();
        },
        unstable_isNewReconciler: Ee
      };
    }
    var zl = p.unstable_now, cC = 0, D0 = -1, cp = -1, E0 = -1, _g = !1, C0 = !1;
    function fC() {
      return _g;
    }
    function R2() {
      C0 = !0;
    }
    function B2() {
      _g = !1, C0 = !1;
    }
    function _2() {
      _g = C0, C0 = !1;
    }
    function dC() {
      return cC;
    }
    function pC() {
      cC = zl();
    }
    function Og(e) {
      cp = zl(), e.actualStartTime < 0 && (e.actualStartTime = zl());
    }
    function vC(e) {
      cp = -1;
    }
    function S0(e, t) {
      if (cp >= 0) {
        var u = zl() - cp;
        e.actualDuration += u, t && (e.selfBaseDuration = u), cp = -1;
      }
    }
    function Ya(e) {
      if (D0 >= 0) {
        var t = zl() - D0;
        D0 = -1;
        for (var u = e.return; u !== null; ) {
          switch (u.tag) {
            case ve:
              var a = u.stateNode;
              a.effectDuration += t;
              return;
            case Je:
              var l = u.stateNode;
              l.effectDuration += t;
              return;
          }
          u = u.return;
        }
      }
    }
    function Ng(e) {
      if (E0 >= 0) {
        var t = zl() - E0;
        E0 = -1;
        for (var u = e.return; u !== null; ) {
          switch (u.tag) {
            case ve:
              var a = u.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
            case Je:
              var l = u.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          u = u.return;
        }
      }
    }
    function Qa() {
      D0 = zl();
    }
    function kg() {
      E0 = zl();
    }
    function Mg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Xo(e, t) {
      return {
        value: e,
        source: t,
        stack: Df(t),
        digest: null
      };
    }
    function Lg(e, t, u) {
      return {
        value: e,
        source: null,
        stack: u ?? null,
        digest: t ?? null
      };
    }
    function O2(e, t) {
      return !0;
    }
    function Ug(e, t) {
      try {
        var u = O2(e, t);
        if (u === !1)
          return;
        var a = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === ee)
            return;
          console.error(a);
        }
        var h = l ? mt(l) : null, g = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === ve)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var A = mt(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + A + ".");
        }
        var L = g + `
` + d + `

` + ("" + E);
        console.error(L);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var N2 = typeof WeakMap == "function" ? WeakMap : Map;
    function hC(e, t, u) {
      var a = Mi(qt, u);
      a.tag = Uy, a.payload = {
        element: null
      };
      var l = t.value;
      return a.callback = function() {
        Tx(l), Ug(e, t);
      }, a;
    }
    function zg(e, t, u) {
      var a = Mi(qt, u);
      a.tag = Uy;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        a.payload = function() {
          return l(s);
        }, a.callback = function() {
          bS(e), Ug(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (a.callback = function() {
        bS(e), Ug(e, t), typeof l != "function" && Ax(this);
        var g = t.value, E = t.stack;
        this.componentDidCatch(g, {
          componentStack: E !== null ? E : ""
        }), typeof l != "function" && (Rr(e.lanes, st) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", mt(e) || "Unknown"));
      }), a;
    }
    function mC(e, t, u) {
      var a = e.pingCache, l;
      if (a === null ? (a = e.pingCache = new N2(), l = /* @__PURE__ */ new Set(), a.set(t, l)) : (l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l))), !l.has(u)) {
        l.add(u);
        var s = bx.bind(null, e, t, u);
        In && bp(e, u), t.then(s, s);
      }
    }
    function k2(e, t, u, a) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(u), e.updateQueue = s;
      } else
        l.add(u);
    }
    function M2(e, t) {
      var u = e.tag;
      if ((e.mode & Ct) === lt && (u === te || u === et || u === ne)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function yC(e) {
      var t = e;
      do {
        if (t.tag === $ && D2(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function gC(e, t, u, a, l) {
      if ((e.mode & Ct) === lt) {
        if (e === t)
          e.flags |= Ln;
        else {
          if (e.flags |= dt, u.flags |= Do, u.flags &= ~(_s | Lr), u.tag === ee) {
            var s = u.alternate;
            if (s === null)
              u.tag = Pe;
            else {
              var d = Mi(qt, st);
              d.tag = Gh, kl(u, d, st);
            }
          }
          u.lanes = Et(u.lanes, st);
        }
        return e;
      }
      return e.flags |= Ln, e.lanes = l, e;
    }
    function L2(e, t, u, a, l) {
      if (u.flags |= Lr, In && bp(e, l), a !== null && typeof a == "object" && typeof a.then == "function") {
        var s = a;
        M2(u), dr() && u.mode & Ct && oE();
        var d = yC(t);
        if (d !== null) {
          d.flags &= ~vn, gC(d, t, u, e, l), d.mode & Ct && mC(e, s, l), k2(d, e, s);
          return;
        } else {
          if (!dl(l)) {
            mC(e, s, l), y1();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = h;
        }
      } else if (dr() && u.mode & Ct) {
        oE();
        var g = yC(t);
        if (g !== null) {
          (g.flags & Ln) === rt && (g.flags |= vn), gC(g, t, u, e, l), By(Xo(a, u));
          return;
        }
      }
      a = Xo(a, u), hx(a);
      var E = t;
      do {
        switch (E.tag) {
          case ve: {
            var A = a;
            E.flags |= Ln;
            var L = Rn(l);
            E.lanes = Et(E.lanes, L);
            var k = hC(E, A, L);
            Py(E, k);
            return;
          }
          case ee:
            var K = a, X = E.type, ae = E.stateNode;
            if ((E.flags & dt) === rt && (typeof X.getDerivedStateFromError == "function" || ae !== null && typeof ae.componentDidCatch == "function" && !yS(ae))) {
              E.flags |= Ln;
              var ze = Rn(l);
              E.lanes = Et(E.lanes, ze);
              var it = zg(E, K, ze);
              Py(E, it);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function U2() {
      return null;
    }
    var fp = m.ReactCurrentOwner, pa = !1, jg, dp, Pg, $g, Hg, Jo, Ig, A0;
    jg = {}, dp = {}, Pg = {}, $g = {}, Hg = {}, Jo = !1, Ig = {}, A0 = {};
    function Hr(e, t, u, a) {
      e === null ? t.child = LE(t, null, u, a) : t.child = jc(t, e.child, u, a);
    }
    function z2(e, t, u, a) {
      t.child = jc(t, e.child, null, a), t.child = jc(t, null, u, a);
    }
    function DC(e, t, u, a, l) {
      if (t.type !== t.elementType) {
        var s = u.propTypes;
        s && la(
          s,
          a,
          // Resolved props
          "prop",
          It(u)
        );
      }
      var d = u.render, h = t.ref, g, E;
      zc(t, l), Oa(t);
      {
        if (fp.current = t, gu(!0), g = qc(e, t, d, a, h, l), E = Gc(), t.mode & un) {
          xn(!0);
          try {
            g = qc(e, t, d, a, h, l), E = Gc();
          } finally {
            xn(!1);
          }
        }
        gu(!1);
      }
      return ci(), e !== null && !pa ? ($E(e, t, l), Li(e, t, l)) : (dr() && E && Fy(t), t.flags |= Ta, Hr(e, t, g, l), t.child);
    }
    function EC(e, t, u, a, l) {
      if (e === null) {
        var s = u.type;
        if (Ix(s) && u.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        u.defaultProps === void 0) {
          var d = s;
          return d = ef(s), t.tag = ne, t.type = d, Gg(t, s), CC(e, t, d, a, l);
        }
        {
          var h = s.propTypes;
          h && la(
            h,
            a,
            // Resolved props
            "prop",
            It(s)
          );
        }
        var g = x1(u.type, null, a, t, t.mode, l);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var E = u.type, A = E.propTypes;
        A && la(
          A,
          a,
          // Resolved props
          "prop",
          It(E)
        );
      }
      var L = e.child, k = Jg(e, l);
      if (!k) {
        var K = L.memoizedProps, X = u.compare;
        if (X = X !== null ? X : tt, X(K, a) && e.ref === t.ref)
          return Li(e, t, l);
      }
      t.flags |= Ta;
      var ae = rs(L, a);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function CC(e, t, u, a, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === sr) {
          var d = s, h = d._payload, g = d._init;
          try {
            s = g(h);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && la(
            E,
            a,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            It(s)
          );
        }
      }
      if (e !== null) {
        var A = e.memoizedProps;
        if (tt(A, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (pa = !1, t.pendingProps = a = A, Jg(e, l))
            (e.flags & Do) !== rt && (pa = !0);
          else
            return t.lanes = e.lanes, Li(e, t, l);
      }
      return Vg(e, t, u, a, l);
    }
    function SC(e, t, u) {
      var a = t.pendingProps, l = a.children, s = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || P)
        if ((t.mode & Ct) === lt) {
          var d = {
            baseLanes: oe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, L0(t, u);
        } else if (Rr(u, xr)) {
          var L = {
            baseLanes: oe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var k = s !== null ? s.baseLanes : u;
          L0(t, k);
        } else {
          var h = null, g;
          if (s !== null) {
            var E = s.baseLanes;
            g = Et(E, u);
          } else
            g = u;
          t.lanes = t.childLanes = xr;
          var A = {
            baseLanes: g,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = A, t.updateQueue = null, L0(t, g), null;
        }
      else {
        var K;
        s !== null ? (K = Et(s.baseLanes, u), t.memoizedState = null) : K = u, L0(t, K);
      }
      return Hr(e, t, l, u), t.child;
    }
    function j2(e, t, u) {
      var a = t.pendingProps;
      return Hr(e, t, a, u), t.child;
    }
    function P2(e, t, u) {
      var a = t.pendingProps.children;
      return Hr(e, t, a, u), t.child;
    }
    function $2(e, t, u) {
      {
        t.flags |= Dt;
        {
          var a = t.stateNode;
          a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Hr(e, t, s, u), t.child;
    }
    function AC(e, t) {
      var u = t.ref;
      (e === null && u !== null || e !== null && e.ref !== u) && (t.flags |= Sr, t.flags |= Qf);
    }
    function Vg(e, t, u, a, l) {
      if (t.type !== t.elementType) {
        var s = u.propTypes;
        s && la(
          s,
          a,
          // Resolved props
          "prop",
          It(u)
        );
      }
      var d;
      {
        var h = Oc(t, u, !0);
        d = Nc(t, h);
      }
      var g, E;
      zc(t, l), Oa(t);
      {
        if (fp.current = t, gu(!0), g = qc(e, t, u, a, d, l), E = Gc(), t.mode & un) {
          xn(!0);
          try {
            g = qc(e, t, u, a, d, l), E = Gc();
          } finally {
            xn(!1);
          }
        }
        gu(!1);
      }
      return ci(), e !== null && !pa ? ($E(e, t, l), Li(e, t, l)) : (dr() && E && Fy(t), t.flags |= Ta, Hr(e, t, g, l), t.child);
    }
    function FC(e, t, u, a, l) {
      {
        switch (uR(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, h = new d(t.memoizedProps, s.context), g = h.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= dt, t.flags |= Ln;
            var E = new Error("Simulated error coming from DevTools"), A = Rn(l);
            t.lanes = Et(t.lanes, A);
            var L = zg(t, Xo(E, t), A);
            Py(t, L);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = u.propTypes;
          k && la(
            k,
            a,
            // Resolved props
            "prop",
            It(u)
          );
        }
      }
      var K;
      Ia(u) ? (K = !0, Mh(t)) : K = !1, zc(t, l);
      var X = t.stateNode, ae;
      X === null ? (T0(e, t), _E(t, u, a), Jy(t, u, a, l), ae = !0) : e === null ? ae = p2(t, u, a, l) : ae = v2(e, t, u, a, l);
      var ze = qg(e, t, u, ae, K, l);
      {
        var it = t.stateNode;
        ae && it.props !== a && (Jo || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mt(t) || "a component"), Jo = !0);
      }
      return ze;
    }
    function qg(e, t, u, a, l, s) {
      AC(e, t);
      var d = (t.flags & dt) !== rt;
      if (!a && !d)
        return l && uE(t, u, !1), Li(e, t, s);
      var h = t.stateNode;
      fp.current = t;
      var g;
      if (d && typeof u.getDerivedStateFromError != "function")
        g = null, vC();
      else {
        Oa(t);
        {
          if (gu(!0), g = h.render(), t.mode & un) {
            xn(!0);
            try {
              h.render();
            } finally {
              xn(!1);
            }
          }
          gu(!1);
        }
        ci();
      }
      return t.flags |= Ta, e !== null && d ? z2(e, t, g, s) : Hr(e, t, g, s), t.memoizedState = h.state, l && uE(t, u, !0), t.child;
    }
    function TC(e) {
      var t = e.stateNode;
      t.pendingContext ? nE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nE(e, t.context, !1), ug(e, t.containerInfo);
    }
    function H2(e, t, u) {
      if (TC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, l = t.memoizedState, s = l.element;
      AE(e, t), Kh(t, a, null, u);
      var d = t.memoizedState;
      t.stateNode;
      var h = d.element;
      if (l.isDehydrated) {
        var g = {
          element: h,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, E = t.updateQueue;
        if (E.baseState = g, t.memoizedState = g, t.flags & vn) {
          var A = Xo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return bC(e, t, h, u, A);
        } else if (h !== s) {
          var L = Xo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return bC(e, t, h, u, L);
        } else {
          Gb(t);
          var k = LE(t, null, h, u);
          t.child = k;
          for (var K = k; K; )
            K.flags = K.flags & ~Qt | Zr, K = K.sibling;
        }
      } else {
        if (Lc(), h === s)
          return Li(e, t, u);
        Hr(e, t, h, u);
      }
      return t.child;
    }
    function bC(e, t, u, a, l) {
      return Lc(), By(l), t.flags |= vn, Hr(e, t, u, a), t.child;
    }
    function I2(e, t, u) {
      zE(t), e === null && Ry(t);
      var a = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, h = cy(a, l);
      return h ? d = null : s !== null && cy(a, s) && (t.flags |= kt), AC(e, t), Hr(e, t, d, u), t.child;
    }
    function V2(e, t) {
      return e === null && Ry(t), null;
    }
    function q2(e, t, u, a) {
      T0(e, t);
      var l = t.pendingProps, s = u, d = s._payload, h = s._init, g = h(d);
      t.type = g;
      var E = t.tag = Vx(g), A = ca(g, l), L;
      switch (E) {
        case te:
          return Gg(t, g), t.type = g = ef(g), L = Vg(null, t, g, A, a), L;
        case ee:
          return t.type = g = S1(g), L = FC(null, t, g, A, a), L;
        case et:
          return t.type = g = A1(g), L = DC(null, t, g, A, a), L;
        case O: {
          if (t.type !== t.elementType) {
            var k = g.propTypes;
            k && la(
              k,
              A,
              // Resolved for outer only
              "prop",
              It(g)
            );
          }
          return L = EC(
            null,
            t,
            g,
            ca(g.type, A),
            // The inner type can have defaults too
            a
          ), L;
        }
      }
      var K = "";
      throw g !== null && typeof g == "object" && g.$$typeof === sr && (K = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + K));
    }
    function G2(e, t, u, a, l) {
      T0(e, t), t.tag = ee;
      var s;
      return Ia(u) ? (s = !0, Mh(t)) : s = !1, zc(t, l), _E(t, u, a), Jy(t, u, a, l), qg(null, t, u, !0, s, l);
    }
    function Y2(e, t, u, a) {
      T0(e, t);
      var l = t.pendingProps, s;
      {
        var d = Oc(t, u, !1);
        s = Nc(t, d);
      }
      zc(t, a);
      var h, g;
      Oa(t);
      {
        if (u.prototype && typeof u.prototype.render == "function") {
          var E = It(u) || "Unknown";
          jg[E] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), jg[E] = !0);
        }
        t.mode & un && sa.recordLegacyContextWarning(t, null), gu(!0), fp.current = t, h = qc(null, t, u, l, s, a), g = Gc(), gu(!1);
      }
      if (ci(), t.flags |= Ta, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var A = It(u) || "Unknown";
        dp[A] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), dp[A] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var L = It(u) || "Unknown";
          dp[L] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), dp[L] = !0);
        }
        t.tag = ee, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Ia(u) ? (k = !0, Mh(t)) : k = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, jy(t), BE(t, h), Jy(t, u, l, a), qg(null, t, u, !0, k, a);
      } else {
        if (t.tag = te, t.mode & un) {
          xn(!0);
          try {
            h = qc(null, t, u, l, s, a), g = Gc();
          } finally {
            xn(!1);
          }
        }
        return dr() && g && Fy(t), Hr(null, t, h, a), Gg(t, u), t.child;
      }
    }
    function Gg(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var u = "", a = Wr();
          a && (u += `

Check the render method of \`` + a + "`.");
          var l = a || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), Hg[l] || (Hg[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", u));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = It(t) || "Unknown";
          $g[d] || (y("%s: Function components do not support getDerivedStateFromProps.", d), $g[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = It(t) || "Unknown";
          Pg[h] || (y("%s: Function components do not support contextType.", h), Pg[h] = !0);
        }
      }
    }
    var Yg = {
      dehydrated: null,
      treeContext: null,
      retryLane: Tt
    };
    function Qg(e) {
      return {
        baseLanes: e,
        cachePool: U2(),
        transitions: null
      };
    }
    function Q2(e, t) {
      var u = null;
      return {
        baseLanes: Et(e.baseLanes, t),
        cachePool: u,
        transitions: e.transitions
      };
    }
    function W2(e, t, u, a) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return lg(e, rp);
    }
    function K2(e, t) {
      return pl(e.childLanes, t);
    }
    function wC(e, t, u) {
      var a = t.pendingProps;
      aR(t) && (t.flags |= dt);
      var l = fa.current, s = !1, d = (t.flags & dt) !== rt;
      if (d || W2(l, e) ? (s = !0, t.flags &= ~dt) : (e === null || e.memoizedState !== null) && (l = g2(l, PE)), l = $c(l), Ll(t, l), e === null) {
        Ry(t);
        var h = t.memoizedState;
        if (h !== null) {
          var g = h.dehydrated;
          if (g !== null)
            return tw(t, g);
        }
        var E = a.children, A = a.fallback;
        if (s) {
          var L = X2(t, E, A, u), k = t.child;
          return k.memoizedState = Qg(u), t.memoizedState = Yg, L;
        } else
          return Wg(t, E);
      } else {
        var K = e.memoizedState;
        if (K !== null) {
          var X = K.dehydrated;
          if (X !== null)
            return nw(e, t, d, a, X, K, u);
        }
        if (s) {
          var ae = a.fallback, ze = a.children, it = Z2(e, t, ze, ae, u), Ze = t.child, wt = e.child.memoizedState;
          return Ze.memoizedState = wt === null ? Qg(u) : Q2(wt, u), Ze.childLanes = K2(e, u), t.memoizedState = Yg, it;
        } else {
          var Ft = a.children, V = J2(e, t, Ft, u);
          return t.memoizedState = null, V;
        }
      }
    }
    function Wg(e, t, u) {
      var a = e.mode, l = {
        mode: "visible",
        children: t
      }, s = Kg(l, a);
      return s.return = e, e.child = s, s;
    }
    function X2(e, t, u, a) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, h, g;
      return (l & Ct) === lt && s !== null ? (h = s, h.childLanes = oe, h.pendingProps = d, e.mode & ot && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), g = Vl(u, l, a, null)) : (h = Kg(d, l), g = Vl(u, l, a, null)), h.return = e, g.return = e, h.sibling = g, e.child = h, g;
    }
    function Kg(e, t, u) {
      return xS(e, t, oe, null);
    }
    function xC(e, t) {
      return rs(e, t);
    }
    function J2(e, t, u, a) {
      var l = e.child, s = l.sibling, d = xC(l, {
        mode: "visible",
        children: u
      });
      if ((t.mode & Ct) === lt && (d.lanes = a), d.return = t, d.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Nt) : h.push(s);
      }
      return t.child = d, d;
    }
    function Z2(e, t, u, a, l) {
      var s = t.mode, d = e.child, h = d.sibling, g = {
        mode: "hidden",
        children: u
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ct) === lt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var A = t.child;
        E = A, E.childLanes = oe, E.pendingProps = g, t.mode & ot && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = d.selfBaseDuration, E.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        E = xC(d, g), E.subtreeFlags = d.subtreeFlags & Hn;
      var L;
      return h !== null ? L = rs(h, a) : (L = Vl(a, s, l, null), L.flags |= Qt), L.return = t, E.return = t, E.sibling = L, t.child = E, L;
    }
    function F0(e, t, u, a) {
      a !== null && By(a), jc(t, e.child, null, u);
      var l = t.pendingProps, s = l.children, d = Wg(t, s);
      return d.flags |= Qt, t.memoizedState = null, d;
    }
    function ew(e, t, u, a, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: u
      }, h = Kg(d, s), g = Vl(a, s, l, null);
      return g.flags |= Qt, h.return = t, g.return = t, h.sibling = g, t.child = h, (t.mode & Ct) !== lt && jc(t, e.child, null, l), g;
    }
    function tw(e, t, u) {
      return (e.mode & Ct) === lt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = st) : vy(t) ? e.lanes = pi : e.lanes = xr, null;
    }
    function nw(e, t, u, a, l, s, d) {
      if (u)
        if (t.flags & vn) {
          t.flags &= ~vn;
          var V = Lg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return F0(e, t, d, V);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= dt, null;
          var ie = a.children, q = a.fallback, Se = ew(e, t, ie, q, d), je = t.child;
          return je.memoizedState = Qg(d), t.memoizedState = Yg, Se;
        }
      else {
        if (Vb(), (t.mode & Ct) === lt)
          return F0(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (vy(l)) {
          var h, g, E;
          {
            var A = lb(l);
            h = A.digest, g = A.message, E = A.stack;
          }
          var L;
          g ? L = new Error(g) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = Lg(L, h, E);
          return F0(e, t, d, k);
        }
        var K = Rr(d, e.childLanes);
        if (pa || K) {
          var X = M0();
          if (X !== null) {
            var ae = Mm(X, d);
            if (ae !== Tt && ae !== s.retryLane) {
              s.retryLane = ae;
              var ze = qt;
              su(e, ae), Jn(X, e, ae, ze);
            }
          }
          y1();
          var it = Lg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return F0(e, t, d, it);
        } else if (KD(l)) {
          t.flags |= dt, t.child = e.child;
          var Ze = wx.bind(null, e);
          return ob(l, Ze), null;
        } else {
          Yb(t, l, s.treeContext);
          var wt = a.children, Ft = Wg(t, wt);
          return Ft.flags |= Zr, Ft;
        }
      }
    }
    function RC(e, t, u) {
      e.lanes = Et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Et(a.lanes, t)), My(e.return, t, u);
    }
    function rw(e, t, u) {
      for (var a = t; a !== null; ) {
        if (a.tag === $) {
          var l = a.memoizedState;
          l !== null && RC(a, u, e);
        } else if (a.tag === De)
          RC(a, u, e);
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
    function uw(e) {
      for (var t = e, u = null; t !== null; ) {
        var a = t.alternate;
        a !== null && r0(a) === null && (u = t), t = t.sibling;
      }
      return u;
    }
    function aw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Ig[e])
        if (Ig[e] = !0, typeof e == "string")
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
    function iw(e, t) {
      e !== void 0 && !A0[e] && (e !== "collapsed" && e !== "hidden" ? (A0[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (A0[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function BC(e, t) {
      {
        var u = kn(e), a = !u && typeof Vu(e) == "function";
        if (u || a) {
          var l = u ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function lw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kn(e)) {
          for (var u = 0; u < e.length; u++)
            if (!BC(e[u], u))
              return;
        } else {
          var a = Vu(e);
          if (typeof a == "function") {
            var l = a.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!BC(s.value, d))
                  return;
                d++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Xg(e, t, u, a, l) {
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
    function _C(e, t, u) {
      var a = t.pendingProps, l = a.revealOrder, s = a.tail, d = a.children;
      aw(l), iw(s, l), lw(d, l), Hr(e, t, d, u);
      var h = fa.current, g = lg(h, rp);
      if (g)
        h = og(h, rp), t.flags |= dt;
      else {
        var E = e !== null && (e.flags & dt) !== rt;
        E && rw(t, t.child, u), h = $c(h);
      }
      if (Ll(t, h), (t.mode & Ct) === lt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var A = uw(t.child), L;
            A === null ? (L = t.child, t.child = null) : (L = A.sibling, A.sibling = null), Xg(
              t,
              !1,
              // isBackwards
              L,
              A,
              s
            );
            break;
          }
          case "backwards": {
            var k = null, K = t.child;
            for (t.child = null; K !== null; ) {
              var X = K.alternate;
              if (X !== null && r0(X) === null) {
                t.child = K;
                break;
              }
              var ae = K.sibling;
              K.sibling = k, k = K, K = ae;
            }
            Xg(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            Xg(
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
    function ow(e, t, u) {
      ug(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = jc(t, null, a, u) : Hr(e, t, a, u), t.child;
    }
    var OC = !1;
    function sw(e, t, u) {
      var a = t.type, l = a._context, s = t.pendingProps, d = t.memoizedProps, h = s.value;
      {
        "value" in s || OC || (OC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && la(g, s, "prop", "Context.Provider");
      }
      if (DE(t, l, h), d !== null) {
        var E = d.value;
        if (qe(E, h)) {
          if (d.children === s.children && !Nh())
            return Li(e, t, u);
        } else
          r2(t, l, u);
      }
      var A = s.children;
      return Hr(e, t, A, u), t.child;
    }
    var NC = !1;
    function cw(e, t, u) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (NC || (NC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zc(t, u);
      var d = $n(a);
      Oa(t);
      var h;
      return fp.current = t, gu(!0), h = s(d), gu(!1), ci(), t.flags |= Ta, Hr(e, t, h, u), t.child;
    }
    function pp() {
      pa = !0;
    }
    function T0(e, t) {
      (t.mode & Ct) === lt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Qt);
    }
    function Li(e, t, u) {
      return e !== null && (t.dependencies = e.dependencies), vC(), Tp(t.lanes), Rr(u, t.childLanes) ? (h2(e, t), t.child) : null;
    }
    function fw(e, t, u) {
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
        return s === null ? (a.deletions = [e], a.flags |= Nt) : s.push(e), u.flags |= Qt, u;
      }
    }
    function Jg(e, t) {
      var u = e.lanes;
      return !!Rr(u, t);
    }
    function dw(e, t, u) {
      switch (t.tag) {
        case ve:
          TC(t), t.stateNode, Lc();
          break;
        case re:
          zE(t);
          break;
        case ee: {
          var a = t.type;
          Ia(a) && Mh(t);
          break;
        }
        case z:
          ug(t, t.stateNode.containerInfo);
          break;
        case Ie: {
          var l = t.memoizedProps.value, s = t.type._context;
          DE(t, s, l);
          break;
        }
        case Je:
          {
            var d = Rr(u, t.childLanes);
            d && (t.flags |= Dt);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case $: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Ll(t, $c(fa.current)), t.flags |= dt, null;
            var E = t.child, A = E.childLanes;
            if (Rr(u, A))
              return wC(e, t, u);
            Ll(t, $c(fa.current));
            var L = Li(e, t, u);
            return L !== null ? L.sibling : null;
          } else
            Ll(t, $c(fa.current));
          break;
        }
        case De: {
          var k = (e.flags & dt) !== rt, K = Rr(u, t.childLanes);
          if (k) {
            if (K)
              return _C(e, t, u);
            t.flags |= dt;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), Ll(t, fa.current), K)
            break;
          return null;
        }
        case Ke:
        case ut:
          return t.lanes = oe, SC(e, t, u);
      }
      return Li(e, t, u);
    }
    function kC(e, t, u) {
      if (t._debugNeedsRemount && e !== null)
        return fw(e, t, x1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, l = t.pendingProps;
        if (a !== l || Nh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          pa = !0;
        else {
          var s = Jg(e, u);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & dt) === rt)
            return pa = !1, dw(e, t, u);
          (e.flags & Do) !== rt ? pa = !0 : pa = !1;
        }
      } else if (pa = !1, dr() && zb(t)) {
        var d = t.index, h = jb();
        lE(t, h, d);
      }
      switch (t.lanes = oe, t.tag) {
        case Ye:
          return Y2(e, t, t.type, u);
        case Z: {
          var g = t.elementType;
          return q2(e, t, g, u);
        }
        case te: {
          var E = t.type, A = t.pendingProps, L = t.elementType === E ? A : ca(E, A);
          return Vg(e, t, E, L, u);
        }
        case ee: {
          var k = t.type, K = t.pendingProps, X = t.elementType === k ? K : ca(k, K);
          return FC(e, t, k, X, u);
        }
        case ve:
          return H2(e, t, u);
        case re:
          return I2(e, t, u);
        case ce:
          return V2(e, t);
        case $:
          return wC(e, t, u);
        case z:
          return ow(e, t, u);
        case et: {
          var ae = t.type, ze = t.pendingProps, it = t.elementType === ae ? ze : ca(ae, ze);
          return DC(e, t, ae, it, u);
        }
        case se:
          return j2(e, t, u);
        case pe:
          return P2(e, t, u);
        case Je:
          return $2(e, t, u);
        case Ie:
          return sw(e, t, u);
        case Qe:
          return cw(e, t, u);
        case O: {
          var Ze = t.type, wt = t.pendingProps, Ft = ca(Ze, wt);
          if (t.type !== t.elementType) {
            var V = Ze.propTypes;
            V && la(
              V,
              Ft,
              // Resolved for outer only
              "prop",
              It(Ze)
            );
          }
          return Ft = ca(Ze.type, Ft), EC(e, t, Ze, Ft, u);
        }
        case ne:
          return CC(e, t, t.type, t.pendingProps, u);
        case Pe: {
          var ie = t.type, q = t.pendingProps, Se = t.elementType === ie ? q : ca(ie, q);
          return G2(e, t, ie, Se, u);
        }
        case De:
          return _C(e, t, u);
        case ke:
          break;
        case Ke:
          return SC(e, t, u);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Yc(e) {
      e.flags |= Dt;
    }
    function MC(e) {
      e.flags |= Sr, e.flags |= Qf;
    }
    var LC, Zg, UC, zC;
    LC = function(e, t, u, a) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === re || l.tag === ce)
          MT(e, l.stateNode);
        else if (l.tag !== z) {
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
    }, Zg = function(e, t) {
    }, UC = function(e, t, u, a, l) {
      var s = e.memoizedProps;
      if (s !== a) {
        var d = t.stateNode, h = ag(), g = UT(d, u, s, a, l, h);
        t.updateQueue = g, g && Yc(t);
      }
    }, zC = function(e, t, u, a) {
      u !== a && Yc(t);
    };
    function vp(e, t) {
      if (!dr())
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
    function vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, u = oe, a = rt;
      if (t) {
        if ((e.mode & ot) !== lt) {
          for (var g = e.selfBaseDuration, E = e.child; E !== null; )
            u = Et(u, Et(E.lanes, E.childLanes)), a |= E.subtreeFlags & Hn, a |= E.flags & Hn, g += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = g;
        } else
          for (var A = e.child; A !== null; )
            u = Et(u, Et(A.lanes, A.childLanes)), a |= A.subtreeFlags & Hn, a |= A.flags & Hn, A.return = e, A = A.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & ot) !== lt) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            u = Et(u, Et(d.lanes, d.childLanes)), a |= d.subtreeFlags, a |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            u = Et(u, Et(h.lanes, h.childLanes)), a |= h.subtreeFlags, a |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= a;
      }
      return e.childLanes = u, t;
    }
    function pw(e, t, u) {
      if (Jb() && (t.mode & Ct) !== lt && (t.flags & dt) === rt)
        return vE(t), Lc(), t.flags |= vn | Lr | Ln, !1;
      var a = Ph(t);
      if (u !== null && u.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Kb(t), vr(t), (t.mode & ot) !== lt) {
            var l = u !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Lc(), (t.flags & dt) === rt && (t.memoizedState = null), t.flags |= Dt, vr(t), (t.mode & ot) !== lt) {
            var d = u !== null;
            if (d) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return hE(), !0;
    }
    function jC(e, t, u) {
      var a = t.pendingProps;
      switch (Ty(t), t.tag) {
        case Ye:
        case Z:
        case ne:
        case te:
        case et:
        case se:
        case pe:
        case Je:
        case Qe:
        case O:
          return vr(t), null;
        case ee: {
          var l = t.type;
          return Ia(l) && kh(t), vr(t), null;
        }
        case ve: {
          var s = t.stateNode;
          if (Pc(t), Cy(t), cg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = Ph(t);
            if (d)
              Yc(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & vn) !== rt) && (t.flags |= Jr, hE());
            }
          }
          return Zg(e, t), vr(t), null;
        }
        case re: {
          ig(t);
          var g = UE(), E = t.type;
          if (e !== null && t.stateNode != null)
            UC(e, t, E, a, g), e.ref !== t.ref && MC(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return vr(t), null;
            }
            var A = ag(), L = Ph(t);
            if (L)
              Qb(t, g, A) && Yc(t);
            else {
              var k = kT(E, a, g, A, t);
              LC(k, t, !1, !1), t.stateNode = k, LT(k, E, a, g) && Yc(t);
            }
            t.ref !== null && MC(t);
          }
          return vr(t), null;
        }
        case ce: {
          var K = a;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            zC(e, t, X, K);
          } else {
            if (typeof K != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ae = UE(), ze = ag(), it = Ph(t);
            it ? Wb(t) && Yc(t) : t.stateNode = zT(K, ae, ze, t);
          }
          return vr(t), null;
        }
        case $: {
          Hc(t);
          var Ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var wt = pw(e, t, Ze);
            if (!wt)
              return t.flags & Ln ? t : null;
          }
          if ((t.flags & dt) !== rt)
            return t.lanes = u, (t.mode & ot) !== lt && Mg(t), t;
          var Ft = Ze !== null, V = e !== null && e.memoizedState !== null;
          if (Ft !== V && Ft) {
            var ie = t.child;
            if (ie.flags |= ba, (t.mode & Ct) !== lt) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ge);
              q || lg(fa.current, PE) ? vx() : y1();
            }
          }
          var Se = t.updateQueue;
          if (Se !== null && (t.flags |= Dt), vr(t), (t.mode & ot) !== lt && Ft) {
            var je = t.child;
            je !== null && (t.treeBaseDuration -= je.treeBaseDuration);
          }
          return null;
        }
        case z:
          return Pc(t), Zg(e, t), e === null && _b(t.stateNode.containerInfo), vr(t), null;
        case Ie:
          var Ne = t.type._context;
          return ky(Ne, t), vr(t), null;
        case Pe: {
          var ft = t.type;
          return Ia(ft) && kh(t), vr(t), null;
        }
        case De: {
          Hc(t);
          var ht = t.memoizedState;
          if (ht === null)
            return vr(t), null;
          var Pt = (t.flags & dt) !== rt, _t = ht.rendering;
          if (_t === null)
            if (Pt)
              vp(ht, !1);
            else {
              var Nn = mx() && (e === null || (e.flags & dt) === rt);
              if (!Nn)
                for (var Ot = t.child; Ot !== null; ) {
                  var bn = r0(Ot);
                  if (bn !== null) {
                    Pt = !0, t.flags |= dt, vp(ht, !1);
                    var Nr = bn.updateQueue;
                    return Nr !== null && (t.updateQueue = Nr, t.flags |= Dt), t.subtreeFlags = rt, m2(t, u), Ll(t, og(fa.current, rp)), t.child;
                  }
                  Ot = Ot.sibling;
                }
              ht.tail !== null && rn() > iS() && (t.flags |= dt, Pt = !0, vp(ht, !1), t.lanes = ld);
            }
          else {
            if (!Pt) {
              var Dr = r0(_t);
              if (Dr !== null) {
                t.flags |= dt, Pt = !0;
                var bu = Dr.updateQueue;
                if (bu !== null && (t.updateQueue = bu, t.flags |= Dt), vp(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !_t.alternate && !dr())
                  return vr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                rn() * 2 - ht.renderingStartTime > iS() && u !== xr && (t.flags |= dt, Pt = !0, vp(ht, !1), t.lanes = ld);
            }
            if (ht.isBackwards)
              _t.sibling = t.child, t.child = _t;
            else {
              var qr = ht.last;
              qr !== null ? qr.sibling = _t : t.child = _t, ht.last = _t;
            }
          }
          if (ht.tail !== null) {
            var Gr = ht.tail;
            ht.rendering = Gr, ht.tail = Gr.sibling, ht.renderingStartTime = rn(), Gr.sibling = null;
            var kr = fa.current;
            return Pt ? kr = og(kr, rp) : kr = $c(kr), Ll(t, kr), Gr;
          }
          return vr(t), null;
        }
        case ke:
          break;
        case Ke:
        case ut: {
          m1(t);
          var $i = t.memoizedState, tf = $i !== null;
          if (e !== null) {
            var Bp = e.memoizedState, Xa = Bp !== null;
            Xa !== tf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !P && (t.flags |= ba);
          }
          return !tf || (t.mode & Ct) === lt ? vr(t) : Rr(Ka, xr) && (vr(t), t.subtreeFlags & (Qt | Dt) && (t.flags |= ba)), null;
        }
        case xt:
          return null;
        case Ue:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function vw(e, t, u) {
      switch (Ty(t), t.tag) {
        case ee: {
          var a = t.type;
          Ia(a) && kh(t);
          var l = t.flags;
          return l & Ln ? (t.flags = l & ~Ln | dt, (t.mode & ot) !== lt && Mg(t), t) : null;
        }
        case ve: {
          t.stateNode, Pc(t), Cy(t), cg();
          var s = t.flags;
          return (s & Ln) !== rt && (s & dt) === rt ? (t.flags = s & ~Ln | dt, t) : null;
        }
        case re:
          return ig(t), null;
        case $: {
          Hc(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Lc();
          }
          var h = t.flags;
          return h & Ln ? (t.flags = h & ~Ln | dt, (t.mode & ot) !== lt && Mg(t), t) : null;
        }
        case De:
          return Hc(t), null;
        case z:
          return Pc(t), null;
        case Ie:
          var g = t.type._context;
          return ky(g, t), null;
        case Ke:
        case ut:
          return m1(t), null;
        case xt:
          return null;
        default:
          return null;
      }
    }
    function PC(e, t, u) {
      switch (Ty(t), t.tag) {
        case ee: {
          var a = t.type.childContextTypes;
          a != null && kh(t);
          break;
        }
        case ve: {
          t.stateNode, Pc(t), Cy(t), cg();
          break;
        }
        case re: {
          ig(t);
          break;
        }
        case z:
          Pc(t);
          break;
        case $:
          Hc(t);
          break;
        case De:
          Hc(t);
          break;
        case Ie:
          var l = t.type._context;
          ky(l, t);
          break;
        case Ke:
        case ut:
          m1(t);
          break;
      }
    }
    var $C = null;
    $C = /* @__PURE__ */ new Set();
    var b0 = !1, hr = !1, hw = typeof WeakSet == "function" ? WeakSet : Set, Ge = null, Qc = null, Wc = null;
    function mw(e) {
      oi(null, function() {
        throw e;
      }), Gf();
    }
    var yw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ot)
        try {
          Qa(), t.componentWillUnmount();
        } finally {
          Ya(e);
        }
      else
        t.componentWillUnmount();
    };
    function HC(e, t) {
      try {
        jl(Gn, e);
      } catch (u) {
        Jt(e, t, u);
      }
    }
    function e1(e, t, u) {
      try {
        yw(e, u);
      } catch (a) {
        Jt(e, t, a);
      }
    }
    function gw(e, t, u) {
      try {
        u.componentDidMount();
      } catch (a) {
        Jt(e, t, a);
      }
    }
    function IC(e, t) {
      try {
        qC(e);
      } catch (u) {
        Jt(e, t, u);
      }
    }
    function Kc(e, t) {
      var u = e.ref;
      if (u !== null)
        if (typeof u == "function") {
          var a;
          try {
            if (x && S && e.mode & ot)
              try {
                Qa(), a = u(null);
              } finally {
                Ya(e);
              }
            else
              a = u(null);
          } catch (l) {
            Jt(e, t, l);
          }
          typeof a == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", mt(e));
        } else
          u.current = null;
    }
    function w0(e, t, u) {
      try {
        u();
      } catch (a) {
        Jt(e, t, a);
      }
    }
    var VC = !1;
    function Dw(e, t) {
      OT(e.containerInfo), Ge = t, Ew();
      var u = VC;
      return VC = !1, u;
    }
    function Ew() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        (e.subtreeFlags & al) !== rt && t !== null ? (t.return = e, Ge = t) : Cw();
      }
    }
    function Cw() {
      for (; Ge !== null; ) {
        var e = Ge;
        zt(e);
        try {
          Sw(e);
        } catch (u) {
          Jt(e, e.return, u);
        }
        wn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function Sw(e) {
      var t = e.alternate, u = e.flags;
      if ((u & Jr) !== rt) {
        switch (zt(e), e.tag) {
          case te:
          case et:
          case ne:
            break;
          case ee: {
            if (t !== null) {
              var a = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Jo && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? a : ca(e.type, a), l);
              {
                var h = $C;
                d === void 0 && !h.has(e.type) && (h.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", mt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case ve: {
            {
              var g = e.stateNode;
              rb(g.containerInfo);
            }
            break;
          }
          case re:
          case ce:
          case z:
          case Pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        wn();
      }
    }
    function va(e, t, u) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var h = d.destroy;
            d.destroy = void 0, h !== void 0 && ((e & pr) !== cu ? js(t) : (e & Gn) !== cu && Ps(t), (e & Va) !== cu && wp(!0), w0(t, u, h), (e & Va) !== cu && wp(!1), (e & pr) !== cu ? jv() : (e & Gn) !== cu && il());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function jl(e, t) {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var l = a.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & pr) !== cu ? zv(t) : (e & Gn) !== cu && Pv(t);
            var d = s.create;
            (e & Va) !== cu && wp(!0), s.destroy = d(), (e & Va) !== cu && wp(!1), (e & pr) !== cu ? ud() : (e & Gn) !== cu && $v();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var g = void 0;
                (s.tag & Gn) !== rt ? g = "useLayoutEffect" : (s.tag & Va) !== rt ? g = "useInsertionEffect" : g = "useEffect";
                var E = void 0;
                h === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? E = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + h, y("%s must not return anything besides a function, which is used for clean-up.%s", g, E);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function Aw(e, t) {
      if ((t.flags & Dt) !== rt)
        switch (t.tag) {
          case Je: {
            var u = t.stateNode.passiveEffectDuration, a = t.memoizedProps, l = a.id, s = a.onPostCommit, d = dC(), h = t.alternate === null ? "mount" : "update";
            fC() && (h = "nested-update"), typeof s == "function" && s(l, h, u, d);
            var g = t.return;
            e:
              for (; g !== null; ) {
                switch (g.tag) {
                  case ve:
                    var E = g.stateNode;
                    E.passiveEffectDuration += u;
                    break e;
                  case Je:
                    var A = g.stateNode;
                    A.passiveEffectDuration += u;
                    break e;
                }
                g = g.return;
              }
            break;
          }
        }
    }
    function Fw(e, t, u, a) {
      if ((u.flags & tr) !== rt)
        switch (u.tag) {
          case te:
          case et:
          case ne: {
            if (!hr)
              if (u.mode & ot)
                try {
                  Qa(), jl(Gn | qn, u);
                } finally {
                  Ya(u);
                }
              else
                jl(Gn | qn, u);
            break;
          }
          case ee: {
            var l = u.stateNode;
            if (u.flags & Dt && !hr)
              if (t === null)
                if (u.type === u.elementType && !Jo && (l.props !== u.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(u) || "instance"), l.state !== u.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(u) || "instance")), u.mode & ot)
                  try {
                    Qa(), l.componentDidMount();
                  } finally {
                    Ya(u);
                  }
                else
                  l.componentDidMount();
              else {
                var s = u.elementType === u.type ? t.memoizedProps : ca(u.type, t.memoizedProps), d = t.memoizedState;
                if (u.type === u.elementType && !Jo && (l.props !== u.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(u) || "instance"), l.state !== u.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(u) || "instance")), u.mode & ot)
                  try {
                    Qa(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ya(u);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var h = u.updateQueue;
            h !== null && (u.type === u.elementType && !Jo && (l.props !== u.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(u) || "instance"), l.state !== u.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(u) || "instance")), TE(u, h, l));
            break;
          }
          case ve: {
            var g = u.updateQueue;
            if (g !== null) {
              var E = null;
              if (u.child !== null)
                switch (u.child.tag) {
                  case re:
                    E = u.child.stateNode;
                    break;
                  case ee:
                    E = u.child.stateNode;
                    break;
                }
              TE(u, g, E);
            }
            break;
          }
          case re: {
            var A = u.stateNode;
            if (t === null && u.flags & Dt) {
              var L = u.type, k = u.memoizedProps;
              IT(A, L, k);
            }
            break;
          }
          case ce:
            break;
          case z:
            break;
          case Je: {
            {
              var K = u.memoizedProps, X = K.onCommit, ae = K.onRender, ze = u.stateNode.effectDuration, it = dC(), Ze = t === null ? "mount" : "update";
              fC() && (Ze = "nested-update"), typeof ae == "function" && ae(u.memoizedProps.id, Ze, u.actualDuration, u.treeBaseDuration, u.actualStartTime, it);
              {
                typeof X == "function" && X(u.memoizedProps.id, Ze, ze, it), Cx(u);
                var wt = u.return;
                e:
                  for (; wt !== null; ) {
                    switch (wt.tag) {
                      case ve:
                        var Ft = wt.stateNode;
                        Ft.effectDuration += ze;
                        break e;
                      case Je:
                        var V = wt.stateNode;
                        V.effectDuration += ze;
                        break e;
                    }
                    wt = wt.return;
                  }
              }
            }
            break;
          }
          case $: {
            Ow(e, u);
            break;
          }
          case De:
          case Pe:
          case ke:
          case Ke:
          case ut:
          case Ue:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      hr || u.flags & Sr && qC(u);
    }
    function Tw(e) {
      switch (e.tag) {
        case te:
        case et:
        case ne: {
          if (e.mode & ot)
            try {
              Qa(), HC(e, e.return);
            } finally {
              Ya(e);
            }
          else
            HC(e, e.return);
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && gw(e, e.return, t), IC(e, e.return);
          break;
        }
        case re: {
          IC(e, e.return);
          break;
        }
      }
    }
    function bw(e, t) {
      for (var u = null, a = e; ; ) {
        if (a.tag === re) {
          if (u === null) {
            u = a;
            try {
              var l = a.stateNode;
              t ? ZT(l) : tb(a.stateNode, a.memoizedProps);
            } catch (d) {
              Jt(e, e.return, d);
            }
          }
        } else if (a.tag === ce) {
          if (u === null)
            try {
              var s = a.stateNode;
              t ? eb(s) : nb(s, a.memoizedProps);
            } catch (d) {
              Jt(e, e.return, d);
            }
        } else if (!((a.tag === Ke || a.tag === ut) && a.memoizedState !== null && a !== e)) {
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
    function qC(e) {
      var t = e.ref;
      if (t !== null) {
        var u = e.stateNode, a;
        switch (e.tag) {
          case re:
            a = u;
            break;
          default:
            a = u;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & ot)
            try {
              Qa(), l = t(a);
            } finally {
              Ya(e);
            }
          else
            l = t(a);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", mt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", mt(e)), t.current = a;
      }
    }
    function ww(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function GC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, GC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === re) {
          var u = e.stateNode;
          u !== null && kb(u);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function xw(e) {
      for (var t = e.return; t !== null; ) {
        if (YC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function YC(e) {
      return e.tag === re || e.tag === ve || e.tag === z;
    }
    function QC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || YC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== re && t.tag !== ce && t.tag !== we; ) {
            if (t.flags & Qt || t.child === null || t.tag === z)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Qt))
            return t.stateNode;
        }
    }
    function Rw(e) {
      var t = xw(e);
      switch (t.tag) {
        case re: {
          var u = t.stateNode;
          t.flags & kt && (WD(u), t.flags &= ~kt);
          var a = QC(e);
          n1(e, a, u);
          break;
        }
        case ve:
        case z: {
          var l = t.stateNode.containerInfo, s = QC(e);
          t1(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function t1(e, t, u) {
      var a = e.tag, l = a === re || a === ce;
      if (l) {
        var s = e.stateNode;
        t ? WT(u, s, t) : YT(u, s);
      } else if (a !== z) {
        var d = e.child;
        if (d !== null) {
          t1(d, t, u);
          for (var h = d.sibling; h !== null; )
            t1(h, t, u), h = h.sibling;
        }
      }
    }
    function n1(e, t, u) {
      var a = e.tag, l = a === re || a === ce;
      if (l) {
        var s = e.stateNode;
        t ? QT(u, s, t) : GT(u, s);
      } else if (a !== z) {
        var d = e.child;
        if (d !== null) {
          n1(d, t, u);
          for (var h = d.sibling; h !== null; )
            n1(h, t, u), h = h.sibling;
        }
      }
    }
    var mr = null, ha = !1;
    function Bw(e, t, u) {
      {
        var a = t;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case re: {
                mr = a.stateNode, ha = !1;
                break e;
              }
              case ve: {
                mr = a.stateNode.containerInfo, ha = !0;
                break e;
              }
              case z: {
                mr = a.stateNode.containerInfo, ha = !0;
                break e;
              }
            }
            a = a.return;
          }
        if (mr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        WC(e, t, u), mr = null, ha = !1;
      }
      ww(u);
    }
    function Pl(e, t, u) {
      for (var a = u.child; a !== null; )
        WC(e, t, a), a = a.sibling;
    }
    function WC(e, t, u) {
      switch (nd(u), u.tag) {
        case re:
          hr || Kc(u, t);
        case ce: {
          {
            var a = mr, l = ha;
            mr = null, Pl(e, t, u), mr = a, ha = l, mr !== null && (ha ? XT(mr, u.stateNode) : KT(mr, u.stateNode));
          }
          return;
        }
        case we: {
          mr !== null && (ha ? JT(mr, u.stateNode) : py(mr, u.stateNode));
          return;
        }
        case z: {
          {
            var s = mr, d = ha;
            mr = u.stateNode.containerInfo, ha = !0, Pl(e, t, u), mr = s, ha = d;
          }
          return;
        }
        case te:
        case et:
        case O:
        case ne: {
          if (!hr) {
            var h = u.updateQueue;
            if (h !== null) {
              var g = h.lastEffect;
              if (g !== null) {
                var E = g.next, A = E;
                do {
                  var L = A, k = L.destroy, K = L.tag;
                  k !== void 0 && ((K & Va) !== cu ? w0(u, t, k) : (K & Gn) !== cu && (Ps(u), u.mode & ot ? (Qa(), w0(u, t, k), Ya(u)) : w0(u, t, k), il())), A = A.next;
                } while (A !== E);
              }
            }
          }
          Pl(e, t, u);
          return;
        }
        case ee: {
          if (!hr) {
            Kc(u, t);
            var X = u.stateNode;
            typeof X.componentWillUnmount == "function" && e1(u, t, X);
          }
          Pl(e, t, u);
          return;
        }
        case ke: {
          Pl(e, t, u);
          return;
        }
        case Ke: {
          if (
            // TODO: Remove this dead flag
            u.mode & Ct
          ) {
            var ae = hr;
            hr = ae || u.memoizedState !== null, Pl(e, t, u), hr = ae;
          } else
            Pl(e, t, u);
          break;
        }
        default: {
          Pl(e, t, u);
          return;
        }
      }
    }
    function _w(e) {
      e.memoizedState;
    }
    function Ow(e, t) {
      var u = t.memoizedState;
      if (u === null) {
        var a = t.alternate;
        if (a !== null) {
          var l = a.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && yb(s);
          }
        }
      }
    }
    function KC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var u = e.stateNode;
        u === null && (u = e.stateNode = new hw()), t.forEach(function(a) {
          var l = xx.bind(null, e, a);
          if (!u.has(a)) {
            if (u.add(a), In)
              if (Qc !== null && Wc !== null)
                bp(Wc, Qc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(l, l);
          }
        });
      }
    }
    function Nw(e, t, u) {
      Qc = u, Wc = e, zt(t), XC(t, e), zt(t), Qc = null, Wc = null;
    }
    function ma(e, t, u) {
      var a = t.deletions;
      if (a !== null)
        for (var l = 0; l < a.length; l++) {
          var s = a[l];
          try {
            Bw(e, t, s);
          } catch (g) {
            Jt(s, t, g);
          }
        }
      var d = dm();
      if (t.subtreeFlags & Tr)
        for (var h = t.child; h !== null; )
          zt(h), XC(h, e), h = h.sibling;
      zt(d);
    }
    function XC(e, t, u) {
      var a = e.alternate, l = e.flags;
      switch (e.tag) {
        case te:
        case et:
        case O:
        case ne: {
          if (ma(t, e), Wa(e), l & Dt) {
            try {
              va(Va | qn, e, e.return), jl(Va | qn, e);
            } catch (ft) {
              Jt(e, e.return, ft);
            }
            if (e.mode & ot) {
              try {
                Qa(), va(Gn | qn, e, e.return);
              } catch (ft) {
                Jt(e, e.return, ft);
              }
              Ya(e);
            } else
              try {
                va(Gn | qn, e, e.return);
              } catch (ft) {
                Jt(e, e.return, ft);
              }
          }
          return;
        }
        case ee: {
          ma(t, e), Wa(e), l & Sr && a !== null && Kc(a, a.return);
          return;
        }
        case re: {
          ma(t, e), Wa(e), l & Sr && a !== null && Kc(a, a.return);
          {
            if (e.flags & kt) {
              var s = e.stateNode;
              try {
                WD(s);
              } catch (ft) {
                Jt(e, e.return, ft);
              }
            }
            if (l & Dt) {
              var d = e.stateNode;
              if (d != null) {
                var h = e.memoizedProps, g = a !== null ? a.memoizedProps : h, E = e.type, A = e.updateQueue;
                if (e.updateQueue = null, A !== null)
                  try {
                    VT(d, A, E, g, h, e);
                  } catch (ft) {
                    Jt(e, e.return, ft);
                  }
              }
            }
          }
          return;
        }
        case ce: {
          if (ma(t, e), Wa(e), l & Dt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, k = e.memoizedProps, K = a !== null ? a.memoizedProps : k;
            try {
              qT(L, K, k);
            } catch (ft) {
              Jt(e, e.return, ft);
            }
          }
          return;
        }
        case ve: {
          if (ma(t, e), Wa(e), l & Dt && a !== null) {
            var X = a.memoizedState;
            if (X.isDehydrated)
              try {
                mb(t.containerInfo);
              } catch (ft) {
                Jt(e, e.return, ft);
              }
          }
          return;
        }
        case z: {
          ma(t, e), Wa(e);
          return;
        }
        case $: {
          ma(t, e), Wa(e);
          var ae = e.child;
          if (ae.flags & ba) {
            var ze = ae.stateNode, it = ae.memoizedState, Ze = it !== null;
            if (ze.isHidden = Ze, Ze) {
              var wt = ae.alternate !== null && ae.alternate.memoizedState !== null;
              wt || px();
            }
          }
          if (l & Dt) {
            try {
              _w(e);
            } catch (ft) {
              Jt(e, e.return, ft);
            }
            KC(e);
          }
          return;
        }
        case Ke: {
          var Ft = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ct
          ) {
            var V = hr;
            hr = V || Ft, ma(t, e), hr = V;
          } else
            ma(t, e);
          if (Wa(e), l & ba) {
            var ie = e.stateNode, q = e.memoizedState, Se = q !== null, je = e;
            if (ie.isHidden = Se, Se && !Ft && (je.mode & Ct) !== lt) {
              Ge = je;
              for (var Ne = je.child; Ne !== null; )
                Ge = Ne, Mw(Ne), Ne = Ne.sibling;
            }
            bw(je, Se);
          }
          return;
        }
        case De: {
          ma(t, e), Wa(e), l & Dt && KC(e);
          return;
        }
        case ke:
          return;
        default: {
          ma(t, e), Wa(e);
          return;
        }
      }
    }
    function Wa(e) {
      var t = e.flags;
      if (t & Qt) {
        try {
          Rw(e);
        } catch (u) {
          Jt(e, e.return, u);
        }
        e.flags &= ~Qt;
      }
      t & Zr && (e.flags &= ~Zr);
    }
    function kw(e, t, u) {
      Qc = u, Wc = t, Ge = e, JC(e, t, u), Qc = null, Wc = null;
    }
    function JC(e, t, u) {
      for (var a = (e.mode & Ct) !== lt; Ge !== null; ) {
        var l = Ge, s = l.child;
        if (l.tag === Ke && a) {
          var d = l.memoizedState !== null, h = d || b0;
          if (h) {
            r1(e, t, u);
            continue;
          } else {
            var g = l.alternate, E = g !== null && g.memoizedState !== null, A = E || hr, L = b0, k = hr;
            b0 = h, hr = A, hr && !k && (Ge = l, Lw(l));
            for (var K = s; K !== null; )
              Ge = K, JC(
                K,
                // New root; bubble back up to here and stop.
                t,
                u
              ), K = K.sibling;
            Ge = l, b0 = L, hr = k, r1(e, t, u);
            continue;
          }
        }
        (l.subtreeFlags & tr) !== rt && s !== null ? (s.return = l, Ge = s) : r1(e, t, u);
      }
    }
    function r1(e, t, u) {
      for (; Ge !== null; ) {
        var a = Ge;
        if ((a.flags & tr) !== rt) {
          var l = a.alternate;
          zt(a);
          try {
            Fw(t, l, a, u);
          } catch (d) {
            Jt(a, a.return, d);
          }
          wn();
        }
        if (a === e) {
          Ge = null;
          return;
        }
        var s = a.sibling;
        if (s !== null) {
          s.return = a.return, Ge = s;
          return;
        }
        Ge = a.return;
      }
    }
    function Mw(e) {
      for (; Ge !== null; ) {
        var t = Ge, u = t.child;
        switch (t.tag) {
          case te:
          case et:
          case O:
          case ne: {
            if (t.mode & ot)
              try {
                Qa(), va(Gn, t, t.return);
              } finally {
                Ya(t);
              }
            else
              va(Gn, t, t.return);
            break;
          }
          case ee: {
            Kc(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && e1(t, t.return, a);
            break;
          }
          case re: {
            Kc(t, t.return);
            break;
          }
          case Ke: {
            var l = t.memoizedState !== null;
            if (l) {
              ZC(e);
              continue;
            }
            break;
          }
        }
        u !== null ? (u.return = t, Ge = u) : ZC(e);
      }
    }
    function ZC(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        if (t === e) {
          Ge = null;
          return;
        }
        var u = t.sibling;
        if (u !== null) {
          u.return = t.return, Ge = u;
          return;
        }
        Ge = t.return;
      }
    }
    function Lw(e) {
      for (; Ge !== null; ) {
        var t = Ge, u = t.child;
        if (t.tag === Ke) {
          var a = t.memoizedState !== null;
          if (a) {
            eS(e);
            continue;
          }
        }
        u !== null ? (u.return = t, Ge = u) : eS(e);
      }
    }
    function eS(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        zt(t);
        try {
          Tw(t);
        } catch (a) {
          Jt(t, t.return, a);
        }
        if (wn(), t === e) {
          Ge = null;
          return;
        }
        var u = t.sibling;
        if (u !== null) {
          u.return = t.return, Ge = u;
          return;
        }
        Ge = t.return;
      }
    }
    function Uw(e, t, u, a) {
      Ge = t, zw(t, e, u, a);
    }
    function zw(e, t, u, a) {
      for (; Ge !== null; ) {
        var l = Ge, s = l.child;
        (l.subtreeFlags & eu) !== rt && s !== null ? (s.return = l, Ge = s) : jw(e, t, u, a);
      }
    }
    function jw(e, t, u, a) {
      for (; Ge !== null; ) {
        var l = Ge;
        if ((l.flags & Zt) !== rt) {
          zt(l);
          try {
            Pw(t, l, u, a);
          } catch (d) {
            Jt(l, l.return, d);
          }
          wn();
        }
        if (l === e) {
          Ge = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ge = s;
          return;
        }
        Ge = l.return;
      }
    }
    function Pw(e, t, u, a) {
      switch (t.tag) {
        case te:
        case et:
        case ne: {
          if (t.mode & ot) {
            kg();
            try {
              jl(pr | qn, t);
            } finally {
              Ng(t);
            }
          } else
            jl(pr | qn, t);
          break;
        }
      }
    }
    function $w(e) {
      Ge = e, Hw();
    }
    function Hw() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        if ((Ge.flags & Nt) !== rt) {
          var u = e.deletions;
          if (u !== null) {
            for (var a = 0; a < u.length; a++) {
              var l = u[a];
              Ge = l, qw(l, e);
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
            Ge = e;
          }
        }
        (e.subtreeFlags & eu) !== rt && t !== null ? (t.return = e, Ge = t) : Iw();
      }
    }
    function Iw() {
      for (; Ge !== null; ) {
        var e = Ge;
        (e.flags & Zt) !== rt && (zt(e), Vw(e), wn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function Vw(e) {
      switch (e.tag) {
        case te:
        case et:
        case ne: {
          e.mode & ot ? (kg(), va(pr | qn, e, e.return), Ng(e)) : va(pr | qn, e, e.return);
          break;
        }
      }
    }
    function qw(e, t) {
      for (; Ge !== null; ) {
        var u = Ge;
        zt(u), Yw(u, t), wn();
        var a = u.child;
        a !== null ? (a.return = u, Ge = a) : Gw(e);
      }
    }
    function Gw(e) {
      for (; Ge !== null; ) {
        var t = Ge, u = t.sibling, a = t.return;
        if (GC(t), t === e) {
          Ge = null;
          return;
        }
        if (u !== null) {
          u.return = a, Ge = u;
          return;
        }
        Ge = a;
      }
    }
    function Yw(e, t) {
      switch (e.tag) {
        case te:
        case et:
        case ne: {
          e.mode & ot ? (kg(), va(pr, e, t), Ng(e)) : va(pr, e, t);
          break;
        }
      }
    }
    function Qw(e) {
      switch (e.tag) {
        case te:
        case et:
        case ne: {
          try {
            jl(Gn | qn, e);
          } catch (u) {
            Jt(e, e.return, u);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (u) {
            Jt(e, e.return, u);
          }
          break;
        }
      }
    }
    function Ww(e) {
      switch (e.tag) {
        case te:
        case et:
        case ne: {
          try {
            jl(pr | qn, e);
          } catch (t) {
            Jt(e, e.return, t);
          }
          break;
        }
      }
    }
    function Kw(e) {
      switch (e.tag) {
        case te:
        case et:
        case ne: {
          try {
            va(Gn | qn, e, e.return);
          } catch (u) {
            Jt(e, e.return, u);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && e1(e, e.return, t);
          break;
        }
      }
    }
    function Xw(e) {
      switch (e.tag) {
        case te:
        case et:
        case ne:
          try {
            va(pr | qn, e, e.return);
          } catch (t) {
            Jt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var hp = Symbol.for;
      hp("selector.component"), hp("selector.has_pseudo_class"), hp("selector.role"), hp("selector.test_id"), hp("selector.text");
    }
    var Jw = [];
    function Zw() {
      Jw.forEach(function(e) {
        return e();
      });
    }
    var ex = m.ReactCurrentActQueue;
    function tx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), u = typeof jest < "u";
        return u && t !== !1;
      }
    }
    function tS() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && ex.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var nx = Math.ceil, u1 = m.ReactCurrentDispatcher, a1 = m.ReactCurrentOwner, yr = m.ReactCurrentBatchConfig, ya = m.ReactCurrentActQueue, Wn = (
      /*             */
      0
    ), nS = (
      /*               */
      1
    ), gr = (
      /*                */
      2
    ), $u = (
      /*                */
      4
    ), Ui = 0, mp = 1, Zo = 2, x0 = 3, yp = 4, rS = 5, i1 = 6, bt = Wn, Ir = null, En = null, Kn = oe, Ka = oe, l1 = Bl(oe), Xn = Ui, gp = null, R0 = oe, Dp = oe, B0 = oe, Ep = null, fu = null, o1 = 0, uS = 500, aS = 1 / 0, rx = 500, zi = null;
    function Cp() {
      aS = rn() + rx;
    }
    function iS() {
      return aS;
    }
    var _0 = !1, s1 = null, Xc = null, es = !1, $l = null, Sp = oe, c1 = [], f1 = null, ux = 50, Ap = 0, d1 = null, p1 = !1, O0 = !1, ax = 50, Jc = 0, N0 = null, Fp = qt, k0 = oe, lS = !1;
    function M0() {
      return Ir;
    }
    function Vr() {
      return (bt & (gr | $u)) !== Wn ? rn() : (Fp !== qt || (Fp = rn()), Fp);
    }
    function Hl(e) {
      var t = e.mode;
      if ((t & Ct) === lt)
        return st;
      if ((bt & gr) !== Wn && Kn !== oe)
        return Rn(Kn);
      var u = t2() !== e2;
      if (u) {
        if (yr.transition !== null) {
          var a = yr.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return k0 === Tt && (k0 = cd()), k0;
      }
      var l = uu();
      if (l !== Tt)
        return l;
      var s = jT();
      return s;
    }
    function ix(e) {
      var t = e.mode;
      return (t & Ct) === lt ? st : km();
    }
    function Jn(e, t, u, a) {
      Bx(), lS && y("useInsertionEffect must not schedule updates."), p1 && (O0 = !0), Ei(e, u, a), (bt & gr) !== oe && e === Ir ? Nx(t) : (In && hd(e, t, u), kx(t), e === Ir && ((bt & gr) === Wn && (Dp = Et(Dp, u)), Xn === yp && Il(e, Kn)), du(e, a), u === st && bt === Wn && (t.mode & Ct) === lt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ya.isBatchingLegacy && (Cp(), iE()));
    }
    function lx(e, t, u) {
      var a = e.current;
      a.lanes = t, Ei(e, t, u), du(e, u);
    }
    function ox(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & gr) !== Wn
      );
    }
    function du(e, t) {
      var u = e.callbackNode;
      _m(e, t);
      var a = To(e, e === Ir ? Kn : oe);
      if (a === oe) {
        u !== null && AS(u), e.callbackNode = null, e.callbackPriority = Tt;
        return;
      }
      var l = Fn(a), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ya.current !== null && u !== E1)) {
        u == null && s !== st && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      u != null && AS(u);
      var d;
      if (l === st)
        e.tag === _l ? (ya.isBatchingLegacy !== null && (ya.didScheduleLegacyUpdate = !0), Ub(cS.bind(null, e))) : aE(cS.bind(null, e)), ya.current !== null ? ya.current.push(Ol) : $T(function() {
          (bt & (gr | $u)) === Wn && Ol();
        }), d = null;
      else {
        var h;
        switch (Bo(a)) {
          case nr:
            h = Ls;
            break;
          case Vn:
            h = jr;
            break;
          case na:
            h = _u;
            break;
          case xo:
            h = xa;
            break;
          default:
            h = _u;
            break;
        }
        d = C1(h, oS.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function oS(e, t) {
      if (B2(), Fp = qt, k0 = oe, (bt & (gr | $u)) !== Wn)
        throw new Error("Should not already be working.");
      var u = e.callbackNode, a = Pi();
      if (a && e.callbackNode !== u)
        return null;
      var l = To(e, e === Ir ? Kn : oe);
      if (l === oe)
        return null;
      var s = !wo(e, l) && !Yv(e, l) && !t, d = s ? gx(e, l) : U0(e, l);
      if (d !== Ui) {
        if (d === Zo) {
          var h = od(e);
          h !== oe && (l = h, d = v1(e, h));
        }
        if (d === mp) {
          var g = gp;
          throw ts(e, oe), Il(e, l), du(e, rn()), g;
        }
        if (d === i1)
          Il(e, l);
        else {
          var E = !wo(e, l), A = e.current.alternate;
          if (E && !cx(A)) {
            if (d = U0(e, l), d === Zo) {
              var L = od(e);
              L !== oe && (l = L, d = v1(e, L));
            }
            if (d === mp) {
              var k = gp;
              throw ts(e, oe), Il(e, l), du(e, rn()), k;
            }
          }
          e.finishedWork = A, e.finishedLanes = l, sx(e, d, l);
        }
      }
      return du(e, rn()), e.callbackNode === u ? oS.bind(null, e) : null;
    }
    function v1(e, t) {
      var u = Ep;
      if (_n(e)) {
        var a = ts(e, t);
        a.flags |= vn, Bb(e.containerInfo);
      }
      var l = U0(e, t);
      if (l !== Zo) {
        var s = fu;
        fu = u, s !== null && sS(s);
      }
      return l;
    }
    function sS(e) {
      fu === null ? fu = e : fu.push.apply(fu, e);
    }
    function sx(e, t, u) {
      switch (t) {
        case Ui:
        case mp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zo: {
          ns(e, fu, zi);
          break;
        }
        case x0: {
          if (Il(e, u), ic(u) && // do not delay if we're inside an act() scope
          !FS()) {
            var a = o1 + uS - rn();
            if (a > 10) {
              var l = To(e, oe);
              if (l !== oe)
                break;
              var s = e.suspendedLanes;
              if (!Di(s, u)) {
                Vr(), pd(e, s);
                break;
              }
              e.timeoutHandle = fy(ns.bind(null, e, fu, zi), a);
              break;
            }
          }
          ns(e, fu, zi);
          break;
        }
        case yp: {
          if (Il(e, u), Gv(u))
            break;
          if (!FS()) {
            var d = qv(e, u), h = d, g = rn() - h, E = Rx(g) - g;
            if (E > 10) {
              e.timeoutHandle = fy(ns.bind(null, e, fu, zi), E);
              break;
            }
          }
          ns(e, fu, zi);
          break;
        }
        case rS: {
          ns(e, fu, zi);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function cx(e) {
      for (var t = e; ; ) {
        if (t.flags & go) {
          var u = t.updateQueue;
          if (u !== null) {
            var a = u.stores;
            if (a !== null)
              for (var l = 0; l < a.length; l++) {
                var s = a[l], d = s.getSnapshot, h = s.value;
                try {
                  if (!qe(d(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & go && g !== null) {
          g.return = t, t = g;
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
    function Il(e, t) {
      t = pl(t, B0), t = pl(t, Dp), dd(e, t);
    }
    function cS(e) {
      if (_2(), (bt & (gr | $u)) !== Wn)
        throw new Error("Should not already be working.");
      Pi();
      var t = To(e, oe);
      if (!Rr(t, st))
        return du(e, rn()), null;
      var u = U0(e, t);
      if (e.tag !== _l && u === Zo) {
        var a = od(e);
        a !== oe && (t = a, u = v1(e, a));
      }
      if (u === mp) {
        var l = gp;
        throw ts(e, oe), Il(e, t), du(e, rn()), l;
      }
      if (u === i1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ns(e, fu, zi), du(e, rn()), null;
    }
    function fx(e, t) {
      t !== oe && (vl(e, Et(t, st)), du(e, rn()), (bt & (gr | $u)) === Wn && (Cp(), Ol()));
    }
    function h1(e, t) {
      var u = bt;
      bt |= nS;
      try {
        return e(t);
      } finally {
        bt = u, bt === Wn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ya.isBatchingLegacy && (Cp(), iE());
      }
    }
    function dx(e, t, u, a, l) {
      var s = uu(), d = yr.transition;
      try {
        return yr.transition = null, Bn(nr), e(t, u, a, l);
      } finally {
        Bn(s), yr.transition = d, bt === Wn && Cp();
      }
    }
    function ji(e) {
      $l !== null && $l.tag === _l && (bt & (gr | $u)) === Wn && Pi();
      var t = bt;
      bt |= nS;
      var u = yr.transition, a = uu();
      try {
        return yr.transition = null, Bn(nr), e ? e() : void 0;
      } finally {
        Bn(a), yr.transition = u, bt = t, (bt & (gr | $u)) === Wn && Ol();
      }
    }
    function fS() {
      return (bt & (gr | $u)) !== Wn;
    }
    function L0(e, t) {
      _r(l1, Ka, e), Ka = Et(Ka, t);
    }
    function m1(e) {
      Ka = l1.current, Br(l1, e);
    }
    function ts(e, t) {
      e.finishedWork = null, e.finishedLanes = oe;
      var u = e.timeoutHandle;
      if (u !== dy && (e.timeoutHandle = dy, PT(u)), En !== null)
        for (var a = En.return; a !== null; ) {
          var l = a.alternate;
          PC(l, a), a = a.return;
        }
      Ir = e;
      var s = rs(e.current, null);
      return En = s, Kn = Ka = t, Xn = Ui, gp = null, R0 = oe, Dp = oe, B0 = oe, Ep = null, fu = null, a2(), sa.discardPendingWarnings(), s;
    }
    function dS(e, t) {
      do {
        var u = En;
        try {
          if (Vh(), HE(), wn(), a1.current = null, u === null || u.return === null) {
            Xn = mp, gp = t, En = null;
            return;
          }
          if (x && u.mode & ot && S0(u, !0), Ae)
            if (ci(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              Hv(u, a, Kn);
            } else
              $s(u, t, Kn);
          L2(e, u.return, u, t, Kn), mS(u);
        } catch (l) {
          t = l, En === u && u !== null ? (u = u.return, En = u) : u = En;
          continue;
        }
        return;
      } while (!0);
    }
    function pS() {
      var e = u1.current;
      return u1.current = y0, e === null ? y0 : e;
    }
    function vS(e) {
      u1.current = e;
    }
    function px() {
      o1 = rn();
    }
    function Tp(e) {
      R0 = Et(e, R0);
    }
    function vx() {
      Xn === Ui && (Xn = x0);
    }
    function y1() {
      (Xn === Ui || Xn === x0 || Xn === Zo) && (Xn = yp), Ir !== null && (bo(R0) || bo(Dp)) && Il(Ir, Kn);
    }
    function hx(e) {
      Xn !== yp && (Xn = Zo), Ep === null ? Ep = [e] : Ep.push(e);
    }
    function mx() {
      return Xn === Ui;
    }
    function U0(e, t) {
      var u = bt;
      bt |= gr;
      var a = pS();
      if (Ir !== e || Kn !== t) {
        if (In) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (bp(e, Kn), l.clear()), sc(e, t);
        }
        zi = md(), ts(e, t);
      }
      Su(t);
      do
        try {
          yx();
          break;
        } catch (s) {
          dS(e, s);
        }
      while (!0);
      if (Vh(), bt = u, vS(a), En !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ol(), Ir = null, Kn = oe, Xn;
    }
    function yx() {
      for (; En !== null; )
        hS(En);
    }
    function gx(e, t) {
      var u = bt;
      bt |= gr;
      var a = pS();
      if (Ir !== e || Kn !== t) {
        if (In) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (bp(e, Kn), l.clear()), sc(e, t);
        }
        zi = md(), Cp(), ts(e, t);
      }
      Su(t);
      do
        try {
          Dx();
          break;
        } catch (s) {
          dS(e, s);
        }
      while (!0);
      return Vh(), vS(a), bt = u, En !== null ? (Co(), Ui) : (ol(), Ir = null, Kn = oe, Xn);
    }
    function Dx() {
      for (; En !== null && !Ms(); )
        hS(En);
    }
    function hS(e) {
      var t = e.alternate;
      zt(e);
      var u;
      (e.mode & ot) !== lt ? (Og(e), u = g1(t, e, Ka), S0(e, !0)) : u = g1(t, e, Ka), wn(), e.memoizedProps = e.pendingProps, u === null ? mS(e) : En = u, a1.current = null;
    }
    function mS(e) {
      var t = e;
      do {
        var u = t.alternate, a = t.return;
        if ((t.flags & Lr) === rt) {
          zt(t);
          var l = void 0;
          if ((t.mode & ot) === lt ? l = jC(u, t, Ka) : (Og(t), l = jC(u, t, Ka), S0(t, !1)), wn(), l !== null) {
            En = l;
            return;
          }
        } else {
          var s = vw(u, t);
          if (s !== null) {
            s.flags &= Nv, En = s;
            return;
          }
          if ((t.mode & ot) !== lt) {
            S0(t, !1);
            for (var d = t.actualDuration, h = t.child; h !== null; )
              d += h.actualDuration, h = h.sibling;
            t.actualDuration = d;
          }
          if (a !== null)
            a.flags |= Lr, a.subtreeFlags = rt, a.deletions = null;
          else {
            Xn = i1, En = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          En = g;
          return;
        }
        t = a, En = t;
      } while (t !== null);
      Xn === Ui && (Xn = rS);
    }
    function ns(e, t, u) {
      var a = uu(), l = yr.transition;
      try {
        yr.transition = null, Bn(nr), Ex(e, t, u, a);
      } finally {
        yr.transition = l, Bn(a);
      }
      return null;
    }
    function Ex(e, t, u, a) {
      do
        Pi();
      while ($l !== null);
      if (_x(), (bt & (gr | $u)) !== Wn)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (zs(s), l === null)
        return rd(), null;
      if (s === oe && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = oe, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Tt;
      var d = Et(l.lanes, l.childLanes);
      vd(e, d), e === Ir && (Ir = null, En = null, Kn = oe), ((l.subtreeFlags & eu) !== rt || (l.flags & eu) !== rt) && (es || (es = !0, f1 = u, C1(_u, function() {
        return Pi(), null;
      })));
      var h = (l.subtreeFlags & (al | Tr | tr | eu)) !== rt, g = (l.flags & (al | Tr | tr | eu)) !== rt;
      if (h || g) {
        var E = yr.transition;
        yr.transition = null;
        var A = uu();
        Bn(nr);
        var L = bt;
        bt |= $u, a1.current = null, Dw(e, l), pC(), Nw(e, l, s), NT(e.containerInfo), e.current = l, Iv(s), kw(l, e, s), ll(), Lv(), bt = L, Bn(A), yr.transition = E;
      } else
        e.current = l, pC();
      var k = es;
      if (es ? (es = !1, $l = e, Sp = s) : (Jc = 0, N0 = null), d = e.pendingLanes, d === oe && (Xc = null), k || ES(e.current, !1), Zu(l.stateNode, a), In && e.memoizedUpdaters.clear(), Zw(), du(e, rn()), t !== null)
        for (var K = e.onRecoverableError, X = 0; X < t.length; X++) {
          var ae = t[X], ze = ae.stack, it = ae.digest;
          K(ae.value, {
            componentStack: ze,
            digest: it
          });
        }
      if (_0) {
        _0 = !1;
        var Ze = s1;
        throw s1 = null, Ze;
      }
      return Rr(Sp, st) && e.tag !== _l && Pi(), d = e.pendingLanes, Rr(d, st) ? (R2(), e === d1 ? Ap++ : (Ap = 0, d1 = e)) : Ap = 0, Ol(), rd(), null;
    }
    function Pi() {
      if ($l !== null) {
        var e = Bo(Sp), t = Lm(na, e), u = yr.transition, a = uu();
        try {
          return yr.transition = null, Bn(t), Sx();
        } finally {
          Bn(a), yr.transition = u;
        }
      }
      return !1;
    }
    function Cx(e) {
      c1.push(e), es || (es = !0, C1(_u, function() {
        return Pi(), null;
      }));
    }
    function Sx() {
      if ($l === null)
        return !1;
      var e = f1;
      f1 = null;
      var t = $l, u = Sp;
      if ($l = null, Sp = oe, (bt & (gr | $u)) !== Wn)
        throw new Error("Cannot flush passive effects while already rendering.");
      p1 = !0, O0 = !1, Vv(u);
      var a = bt;
      bt |= $u, $w(t.current), Uw(t, t.current, u, e);
      {
        var l = c1;
        c1 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          Aw(t, d);
        }
      }
      Eo(), ES(t.current, !0), bt = a, Ol(), O0 ? t === N0 ? Jc++ : (Jc = 0, N0 = t) : Jc = 0, p1 = !1, O0 = !1, Ba(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function yS(e) {
      return Xc !== null && Xc.has(e);
    }
    function Ax(e) {
      Xc === null ? Xc = /* @__PURE__ */ new Set([e]) : Xc.add(e);
    }
    function Fx(e) {
      _0 || (_0 = !0, s1 = e);
    }
    var Tx = Fx;
    function gS(e, t, u) {
      var a = Xo(u, t), l = hC(e, a, st), s = kl(e, l, st), d = Vr();
      s !== null && (Ei(s, st, d), du(s, d));
    }
    function Jt(e, t, u) {
      if (mw(u), wp(!1), e.tag === ve) {
        gS(e, e, u);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === ve) {
          gS(a, e, u);
          return;
        } else if (a.tag === ee) {
          var l = a.type, s = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !yS(s)) {
            var d = Xo(u, e), h = zg(a, d, st), g = kl(a, h, st), E = Vr();
            g !== null && (Ei(g, st, E), du(g, E));
            return;
          }
        }
        a = a.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, u);
    }
    function bx(e, t, u) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var l = Vr();
      pd(e, u), Mx(e), Ir === e && Di(Kn, u) && (Xn === yp || Xn === x0 && ic(Kn) && rn() - o1 < uS ? ts(e, oe) : B0 = Et(B0, u)), du(e, l);
    }
    function DS(e, t) {
      t === Tt && (t = ix(e));
      var u = Vr(), a = su(e, t);
      a !== null && (Ei(a, t, u), du(a, u));
    }
    function wx(e) {
      var t = e.memoizedState, u = Tt;
      t !== null && (u = t.retryLane), DS(e, u);
    }
    function xx(e, t) {
      var u = Tt, a;
      switch (e.tag) {
        case $:
          a = e.stateNode;
          var l = e.memoizedState;
          l !== null && (u = l.retryLane);
          break;
        case De:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), DS(e, u);
    }
    function Rx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : nx(e / 1960) * 1960;
    }
    function Bx() {
      if (Ap > ux)
        throw Ap = 0, d1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Jc > ax && (Jc = 0, N0 = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function _x() {
      sa.flushLegacyContextWarning(), sa.flushPendingUnsafeLifecycleWarnings();
    }
    function ES(e, t) {
      zt(e), z0(e, Fr, Kw), t && z0(e, si, Xw), z0(e, Fr, Qw), t && z0(e, si, Ww), wn();
    }
    function z0(e, t, u) {
      for (var a = e, l = null; a !== null; ) {
        var s = a.subtreeFlags & t;
        a !== l && a.child !== null && s !== rt ? a = a.child : ((a.flags & t) !== rt && u(a), a.sibling !== null ? a = a.sibling : a = l = a.return);
      }
    }
    var j0 = null;
    function CS(e) {
      {
        if ((bt & gr) !== Wn || !(e.mode & Ct))
          return;
        var t = e.tag;
        if (t !== Ye && t !== ve && t !== ee && t !== te && t !== et && t !== O && t !== ne)
          return;
        var u = mt(e) || "ReactComponent";
        if (j0 !== null) {
          if (j0.has(u))
            return;
          j0.add(u);
        } else
          j0 = /* @__PURE__ */ new Set([u]);
        var a = Sn;
        try {
          zt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? zt(e) : wn();
        }
      }
    }
    var g1;
    {
      var Ox = null;
      g1 = function(e, t, u) {
        var a = RS(Ox, t);
        try {
          return kC(e, t, u);
        } catch (s) {
          if (qb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Vh(), HE(), PC(e, t), RS(t, a), t.mode & ot && Og(t), oi(null, kC, null, e, t, u), Rm()) {
            var l = Gf();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var SS = !1, D1;
    D1 = /* @__PURE__ */ new Set();
    function Nx(e) {
      if (Qr && !b2())
        switch (e.tag) {
          case te:
          case et:
          case ne: {
            var t = En && mt(En) || "Unknown", u = t;
            if (!D1.has(u)) {
              D1.add(u);
              var a = mt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case ee: {
            SS || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), SS = !0);
            break;
          }
        }
    }
    function bp(e, t) {
      if (In) {
        var u = e.memoizedUpdaters;
        u.forEach(function(a) {
          hd(e, a, t);
        });
      }
    }
    var E1 = {};
    function C1(e, t) {
      {
        var u = ya.current;
        return u !== null ? (u.push(t), E1) : ks(e, t);
      }
    }
    function AS(e) {
      if (e !== E1)
        return Mv(e);
    }
    function FS() {
      return ya.current !== null;
    }
    function kx(e) {
      {
        if (e.mode & Ct) {
          if (!tS())
            return;
        } else if (!tx() || bt !== Wn || e.tag !== te && e.tag !== et && e.tag !== ne)
          return;
        if (ya.current === null) {
          var t = Sn;
          try {
            zt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, mt(e));
          } finally {
            t ? zt(e) : wn();
          }
        }
      }
    }
    function Mx(e) {
      e.tag !== _l && tS() && ya.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function wp(e) {
      lS = e;
    }
    var Hu = null, Zc = null, Lx = function(e) {
      Hu = e;
    };
    function ef(e) {
      {
        if (Hu === null)
          return e;
        var t = Hu(e);
        return t === void 0 ? e : t.current;
      }
    }
    function S1(e) {
      return ef(e);
    }
    function A1(e) {
      {
        if (Hu === null)
          return e;
        var t = Hu(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var u = ef(e.render);
            if (e.render !== u) {
              var a = {
                $$typeof: qi,
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
    function TS(e, t) {
      {
        if (Hu === null)
          return !1;
        var u = e.elementType, a = t.type, l = !1, s = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case ee: {
            typeof a == "function" && (l = !0);
            break;
          }
          case te: {
            (typeof a == "function" || s === sr) && (l = !0);
            break;
          }
          case et: {
            (s === qi || s === sr) && (l = !0);
            break;
          }
          case O:
          case ne: {
            (s === Gi || s === sr) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Hu(u);
          if (d !== void 0 && d === Hu(a))
            return !0;
        }
        return !1;
      }
    }
    function bS(e) {
      {
        if (Hu === null || typeof WeakSet != "function")
          return;
        Zc === null && (Zc = /* @__PURE__ */ new WeakSet()), Zc.add(e);
      }
    }
    var Ux = function(e, t) {
      {
        if (Hu === null)
          return;
        var u = t.staleFamilies, a = t.updatedFamilies;
        Pi(), ji(function() {
          F1(e.current, a, u);
        });
      }
    }, zx = function(e, t) {
      {
        if (e.context !== Fu)
          return;
        Pi(), ji(function() {
          xp(t, e, null, null);
        });
      }
    };
    function F1(e, t, u) {
      {
        var a = e.alternate, l = e.child, s = e.sibling, d = e.tag, h = e.type, g = null;
        switch (d) {
          case te:
          case ne:
          case ee:
            g = h;
            break;
          case et:
            g = h.render;
            break;
        }
        if (Hu === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, A = !1;
        if (g !== null) {
          var L = Hu(g);
          L !== void 0 && (u.has(L) ? A = !0 : t.has(L) && (d === ee ? A = !0 : E = !0));
        }
        if (Zc !== null && (Zc.has(e) || a !== null && Zc.has(a)) && (A = !0), A && (e._debugNeedsRemount = !0), A || E) {
          var k = su(e, st);
          k !== null && Jn(k, e, st, qt);
        }
        l !== null && !A && F1(l, t, u), s !== null && F1(s, t, u);
      }
    }
    var jx = function(e, t) {
      {
        var u = /* @__PURE__ */ new Set(), a = new Set(t.map(function(l) {
          return l.current;
        }));
        return T1(e.current, a, u), u;
      }
    };
    function T1(e, t, u) {
      {
        var a = e.child, l = e.sibling, s = e.tag, d = e.type, h = null;
        switch (s) {
          case te:
          case ne:
          case ee:
            h = d;
            break;
          case et:
            h = d.render;
            break;
        }
        var g = !1;
        h !== null && t.has(h) && (g = !0), g ? Px(e, u) : a !== null && T1(a, t, u), l !== null && T1(l, t, u);
      }
    }
    function Px(e, t) {
      {
        var u = $x(e, t);
        if (u)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case re:
              t.add(a.stateNode);
              return;
            case z:
              t.add(a.stateNode.containerInfo);
              return;
            case ve:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function $x(e, t) {
      for (var u = e, a = !1; ; ) {
        if (u.tag === re)
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
    var b1;
    {
      b1 = !1;
      try {
        var wS = Object.preventExtensions({});
      } catch {
        b1 = !0;
      }
    }
    function Hx(e, t, u, a) {
      this.tag = e, this.key = u, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = rt, this.subtreeFlags = rt, this.deletions = null, this.lanes = oe, this.childLanes = oe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !b1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Tu = function(e, t, u, a) {
      return new Hx(e, t, u, a);
    };
    function w1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ix(e) {
      return typeof e == "function" && !w1(e) && e.defaultProps === void 0;
    }
    function Vx(e) {
      if (typeof e == "function")
        return w1(e) ? ee : te;
      if (e != null) {
        var t = e.$$typeof;
        if (t === qi)
          return et;
        if (t === Gi)
          return O;
      }
      return Ye;
    }
    function rs(e, t) {
      var u = e.alternate;
      u === null ? (u = Tu(e.tag, t, e.key, e.mode), u.elementType = e.elementType, u.type = e.type, u.stateNode = e.stateNode, u._debugSource = e._debugSource, u._debugOwner = e._debugOwner, u._debugHookTypes = e._debugHookTypes, u.alternate = e, e.alternate = u) : (u.pendingProps = t, u.type = e.type, u.flags = rt, u.subtreeFlags = rt, u.deletions = null, u.actualDuration = 0, u.actualStartTime = -1), u.flags = e.flags & Hn, u.childLanes = e.childLanes, u.lanes = e.lanes, u.child = e.child, u.memoizedProps = e.memoizedProps, u.memoizedState = e.memoizedState, u.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (u.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, u.sibling = e.sibling, u.index = e.index, u.ref = e.ref, u.selfBaseDuration = e.selfBaseDuration, u.treeBaseDuration = e.treeBaseDuration, u._debugNeedsRemount = e._debugNeedsRemount, u.tag) {
        case Ye:
        case te:
        case ne:
          u.type = ef(e.type);
          break;
        case ee:
          u.type = S1(e.type);
          break;
        case et:
          u.type = A1(e.type);
          break;
      }
      return u;
    }
    function qx(e, t) {
      e.flags &= Hn | Qt;
      var u = e.alternate;
      if (u === null)
        e.childLanes = oe, e.lanes = t, e.child = null, e.subtreeFlags = rt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = u.childLanes, e.lanes = u.lanes, e.child = u.child, e.subtreeFlags = rt, e.deletions = null, e.memoizedProps = u.memoizedProps, e.memoizedState = u.memoizedState, e.updateQueue = u.updateQueue, e.type = u.type;
        var a = u.dependencies;
        e.dependencies = a === null ? null : {
          lanes: a.lanes,
          firstContext: a.firstContext
        }, e.selfBaseDuration = u.selfBaseDuration, e.treeBaseDuration = u.treeBaseDuration;
      }
      return e;
    }
    function Gx(e, t, u) {
      var a;
      return e === Lh ? (a = Ct, t === !0 && (a |= un, a |= nu)) : a = lt, In && (a |= ot), Tu(ve, null, null, a);
    }
    function x1(e, t, u, a, l, s) {
      var d = Ye, h = e;
      if (typeof e == "function")
        w1(e) ? (d = ee, h = S1(h)) : h = ef(h);
      else if (typeof e == "string")
        d = re;
      else
        e:
          switch (e) {
            case Iu:
              return Vl(u.children, l, s, t);
            case Vi:
              d = pe, l |= un, (l & Ct) !== lt && (l |= nu);
              break;
            case Yl:
              return Yx(u, l, s, t);
            case xu:
              return Qx(u, l, s, t);
            case Ql:
              return Wx(u, l, s, t);
            case vf:
              return xS(u, l, s, t);
            case Vp:
            case Hp:
            case lm:
            case om:
            case Ip:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case df:
                    d = Ie;
                    break e;
                  case pf:
                    d = Qe;
                    break e;
                  case qi:
                    d = et, h = A1(h);
                    break e;
                  case Gi:
                    d = O;
                    break e;
                  case sr:
                    d = Z, h = null;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var E = a ? mt(a) : null;
                E && (g += `

Check the render method of \`` + E + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
            }
          }
      var A = Tu(d, u, t, l);
      return A.elementType = e, A.type = h, A.lanes = s, A._debugOwner = a, A;
    }
    function R1(e, t, u) {
      var a = null;
      a = e._owner;
      var l = e.type, s = e.key, d = e.props, h = x1(l, s, d, a, t, u);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function Vl(e, t, u, a) {
      var l = Tu(se, e, a, t);
      return l.lanes = u, l;
    }
    function Yx(e, t, u, a) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Tu(Je, e, a, t | ot);
      return l.elementType = Yl, l.lanes = u, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Qx(e, t, u, a) {
      var l = Tu($, e, a, t);
      return l.elementType = xu, l.lanes = u, l;
    }
    function Wx(e, t, u, a) {
      var l = Tu(De, e, a, t);
      return l.elementType = Ql, l.lanes = u, l;
    }
    function xS(e, t, u, a) {
      var l = Tu(Ke, e, a, t);
      l.elementType = vf, l.lanes = u;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function B1(e, t, u) {
      var a = Tu(ce, e, null, t);
      return a.lanes = u, a;
    }
    function Kx() {
      var e = Tu(re, null, null, lt);
      return e.elementType = "DELETED", e;
    }
    function Xx(e) {
      var t = Tu(we, null, null, lt);
      return t.stateNode = e, t;
    }
    function _1(e, t, u) {
      var a = e.children !== null ? e.children : [], l = Tu(z, a, e.key, t);
      return l.lanes = u, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function RS(e, t) {
      return e === null && (e = Tu(Ye, null, null, lt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Jx(e, t, u, a, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = dy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Tt, this.eventTimes = oc(oe), this.expirationTimes = oc(qt), this.pendingLanes = oe, this.suspendedLanes = oe, this.pingedLanes = oe, this.expiredLanes = oe, this.mutableReadLanes = oe, this.finishedLanes = oe, this.entangledLanes = oe, this.entanglements = oc(oe), this.identifierPrefix = a, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Kt; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Lh:
          this._debugRootType = u ? "hydrateRoot()" : "createRoot()";
          break;
        case _l:
          this._debugRootType = u ? "hydrate()" : "render()";
          break;
      }
    }
    function BS(e, t, u, a, l, s, d, h, g, E) {
      var A = new Jx(e, t, u, h, g), L = Gx(t, s);
      A.current = L, L.stateNode = A;
      {
        var k = {
          element: a,
          isDehydrated: u,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = k;
      }
      return jy(L), A;
    }
    var O1 = "18.2.0";
    function Zx(e, t, u) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return de(a), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: hu,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: u
      };
    }
    var N1, k1;
    N1 = !1, k1 = {};
    function _S(e) {
      if (!e)
        return Fu;
      var t = Xr(e), u = Lb(t);
      if (t.tag === ee) {
        var a = t.type;
        if (Ia(a))
          return rE(t, a, u);
      }
      return u;
    }
    function eR(e, t) {
      {
        var u = Xr(e);
        if (u === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var a = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var l = tu(u);
        if (l === null)
          return null;
        if (l.mode & un) {
          var s = mt(u) || "Component";
          if (!k1[s]) {
            k1[s] = !0;
            var d = Sn;
            try {
              zt(l), u.mode & un ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? zt(d) : wn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function OS(e, t, u, a, l, s, d, h) {
      var g = !1, E = null;
      return BS(e, t, g, E, u, a, l, s, d);
    }
    function NS(e, t, u, a, l, s, d, h, g, E) {
      var A = !0, L = BS(u, a, A, e, l, s, d, h, g);
      L.context = _S(null);
      var k = L.current, K = Vr(), X = Hl(k), ae = Mi(K, X);
      return ae.callback = t ?? null, kl(k, ae, X), lx(L, X, K), L;
    }
    function xp(e, t, u, a) {
      Uv(t, e);
      var l = t.current, s = Vr(), d = Hl(l);
      fi(d);
      var h = _S(u);
      t.context === null ? t.context = h : t.pendingContext = h, Qr && Sn !== null && !N1 && (N1 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, mt(Sn) || "Unknown"));
      var g = Mi(s, d);
      g.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), g.callback = a);
      var E = kl(l, g, d);
      return E !== null && (Jn(E, l, d, s), Wh(E, l, d)), d;
    }
    function P0(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case re:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function tR(e) {
      switch (e.tag) {
        case ve: {
          var t = e.stateNode;
          if (_n(t)) {
            var u = Om(t);
            fx(t, u);
          }
          break;
        }
        case $: {
          ji(function() {
            var l = su(e, st);
            if (l !== null) {
              var s = Vr();
              Jn(l, e, st, s);
            }
          });
          var a = st;
          M1(e, a);
          break;
        }
      }
    }
    function kS(e, t) {
      var u = e.memoizedState;
      u !== null && u.dehydrated !== null && (u.retryLane = Wv(u.retryLane, t));
    }
    function M1(e, t) {
      kS(e, t);
      var u = e.alternate;
      u && kS(u, t);
    }
    function nR(e) {
      if (e.tag === $) {
        var t = sl, u = su(e, t);
        if (u !== null) {
          var a = Vr();
          Jn(u, e, t, a);
        }
        M1(e, t);
      }
    }
    function rR(e) {
      if (e.tag === $) {
        var t = Hl(e), u = su(e, t);
        if (u !== null) {
          var a = Vr();
          Jn(u, e, t, a);
        }
        M1(e, t);
      }
    }
    function MS(e) {
      var t = kv(e);
      return t === null ? null : t.stateNode;
    }
    var LS = function(e) {
      return null;
    };
    function uR(e) {
      return LS(e);
    }
    var US = function(e) {
      return !1;
    };
    function aR(e) {
      return US(e);
    }
    var zS = null, jS = null, PS = null, $S = null, HS = null, IS = null, VS = null, qS = null, GS = null;
    {
      var YS = function(e, t, u) {
        var a = t[u], l = kn(e) ? e.slice() : St({}, e);
        return u + 1 === t.length ? (kn(l) ? l.splice(a, 1) : delete l[a], l) : (l[a] = YS(e[a], t, u + 1), l);
      }, QS = function(e, t) {
        return YS(e, t, 0);
      }, WS = function(e, t, u, a) {
        var l = t[a], s = kn(e) ? e.slice() : St({}, e);
        if (a + 1 === t.length) {
          var d = u[a];
          s[d] = s[l], kn(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = WS(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            u,
            a + 1
          );
        return s;
      }, KS = function(e, t, u) {
        if (t.length !== u.length) {
          _("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < u.length - 1; a++)
            if (t[a] !== u[a]) {
              _("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return WS(e, t, u, 0);
      }, XS = function(e, t, u, a) {
        if (u >= t.length)
          return a;
        var l = t[u], s = kn(e) ? e.slice() : St({}, e);
        return s[l] = XS(e[l], t, u + 1, a), s;
      }, JS = function(e, t, u) {
        return XS(e, t, 0, u);
      }, L1 = function(e, t) {
        for (var u = e.memoizedState; u !== null && t > 0; )
          u = u.next, t--;
        return u;
      };
      zS = function(e, t, u, a) {
        var l = L1(e, t);
        if (l !== null) {
          var s = JS(l.memoizedState, u, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = St({}, e.memoizedProps);
          var d = su(e, st);
          d !== null && Jn(d, e, st, qt);
        }
      }, jS = function(e, t, u) {
        var a = L1(e, t);
        if (a !== null) {
          var l = QS(a.memoizedState, u);
          a.memoizedState = l, a.baseState = l, e.memoizedProps = St({}, e.memoizedProps);
          var s = su(e, st);
          s !== null && Jn(s, e, st, qt);
        }
      }, PS = function(e, t, u, a) {
        var l = L1(e, t);
        if (l !== null) {
          var s = KS(l.memoizedState, u, a);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = St({}, e.memoizedProps);
          var d = su(e, st);
          d !== null && Jn(d, e, st, qt);
        }
      }, $S = function(e, t, u) {
        e.pendingProps = JS(e.memoizedProps, t, u), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = su(e, st);
        a !== null && Jn(a, e, st, qt);
      }, HS = function(e, t) {
        e.pendingProps = QS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var u = su(e, st);
        u !== null && Jn(u, e, st, qt);
      }, IS = function(e, t, u) {
        e.pendingProps = KS(e.memoizedProps, t, u), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = su(e, st);
        a !== null && Jn(a, e, st, qt);
      }, VS = function(e) {
        var t = su(e, st);
        t !== null && Jn(t, e, st, qt);
      }, qS = function(e) {
        LS = e;
      }, GS = function(e) {
        US = e;
      };
    }
    function iR(e) {
      var t = tu(e);
      return t === null ? null : t.stateNode;
    }
    function lR(e) {
      return null;
    }
    function oR() {
      return Sn;
    }
    function sR(e) {
      var t = e.findFiberByHostInstance, u = m.ReactCurrentDispatcher;
      return td({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: zS,
        overrideHookStateDeletePath: jS,
        overrideHookStateRenamePath: PS,
        overrideProps: $S,
        overridePropsDeletePath: HS,
        overridePropsRenamePath: IS,
        setErrorHandler: qS,
        setSuspenseHandler: GS,
        scheduleUpdate: VS,
        currentDispatcherRef: u,
        findHostInstanceByFiber: iR,
        findFiberByHostInstance: t || lR,
        // React Refresh
        findHostInstancesForRefresh: jx,
        scheduleRefresh: Ux,
        scheduleRoot: zx,
        setRefreshHandler: Lx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: oR,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: O1
      });
    }
    var ZS = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function U1(e) {
      this._internalRoot = e;
    }
    $0.prototype.render = U1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : H0(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var u = t.containerInfo;
        if (u.nodeType !== An) {
          var a = MS(t.current);
          a && a.parentNode !== u && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      xp(e, t, null, null);
    }, $0.prototype.unmount = U1.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        fS() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ji(function() {
          xp(null, e, null, null);
        }), JD(t);
      }
    };
    function cR(e, t) {
      if (!H0(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      eA(e);
      var u = !1, a = !1, l = "", s = ZS;
      t != null && (t.hydrate ? _("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ii && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = OS(e, Lh, null, u, a, l, s);
      Rh(d.current, e);
      var h = e.nodeType === An ? e.parentNode : e;
      return Ld(h), new U1(d);
    }
    function $0(e) {
      this._internalRoot = e;
    }
    function fR(e) {
      e && rh(e);
    }
    $0.prototype.unstable_scheduleHydration = fR;
    function dR(e, t, u) {
      if (!H0(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      eA(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = u ?? null, l = u != null && u.hydratedSources || null, s = !1, d = !1, h = "", g = ZS;
      u != null && (u.unstable_strictMode === !0 && (s = !0), u.identifierPrefix !== void 0 && (h = u.identifierPrefix), u.onRecoverableError !== void 0 && (g = u.onRecoverableError));
      var E = NS(t, null, e, Lh, a, s, d, h, g);
      if (Rh(E.current, e), Ld(e), l)
        for (var A = 0; A < l.length; A++) {
          var L = l[A];
          E2(E, L);
        }
      return new $0(E);
    }
    function H0(e) {
      return !!(e && (e.nodeType === Cr || e.nodeType === Du || e.nodeType === ni || !B));
    }
    function Rp(e) {
      return !!(e && (e.nodeType === Cr || e.nodeType === Du || e.nodeType === ni || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function eA(e) {
      e.nodeType === Cr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Yd(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var pR = m.ReactCurrentOwner, tA;
    tA = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = MS(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var u = !!e._reactRootContainer, a = z1(e), l = !!(a && Rl(a));
      l && !u && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Cr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function z1(e) {
      return e ? e.nodeType === Du ? e.documentElement : e.firstChild : null;
    }
    function nA() {
    }
    function vR(e, t, u, a, l) {
      if (l) {
        if (typeof a == "function") {
          var s = a;
          a = function() {
            var k = P0(d);
            s.call(k);
          };
        }
        var d = NS(
          t,
          a,
          e,
          _l,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          nA
        );
        e._reactRootContainer = d, Rh(d.current, e);
        var h = e.nodeType === An ? e.parentNode : e;
        return Ld(h), ji(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof a == "function") {
          var E = a;
          a = function() {
            var k = P0(A);
            E.call(k);
          };
        }
        var A = OS(
          e,
          _l,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          nA
        );
        e._reactRootContainer = A, Rh(A.current, e);
        var L = e.nodeType === An ? e.parentNode : e;
        return Ld(L), ji(function() {
          xp(t, A, u, a);
        }), A;
      }
    }
    function hR(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function I0(e, t, u, a, l) {
      tA(u), hR(l === void 0 ? null : l, "render");
      var s = u._reactRootContainer, d;
      if (!s)
        d = vR(u, t, e, l, a);
      else {
        if (d = s, typeof l == "function") {
          var h = l;
          l = function() {
            var g = P0(d);
            h.call(g);
          };
        }
        xp(t, d, e, l);
      }
      return P0(d);
    }
    function mR(e) {
      {
        var t = pR.current;
        if (t !== null && t.stateNode !== null) {
          var u = t.stateNode._warnedAboutRefsInRender;
          u || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", It(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Cr ? e : eR(e, "findDOMNode");
    }
    function yR(e, t, u) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Yd(t) && t._reactRootContainer === void 0;
        a && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return I0(null, e, t, !0, u);
    }
    function gR(e, t, u) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Yd(t) && t._reactRootContainer === void 0;
        a && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return I0(null, e, t, !1, u);
    }
    function DR(e, t, u, a) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Rp(u))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !yo(e))
        throw new Error("parentComponent must be a valid React Component");
      return I0(e, t, u, !1, a);
    }
    function ER(e) {
      if (!Rp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Yd(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var u = z1(e), a = u && !Rl(u);
          a && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ji(function() {
          I0(null, null, e, !1, function() {
            e._reactRootContainer = null, JD(e);
          });
        }), !0;
      } else {
        {
          var l = z1(e), s = !!(l && Rl(l)), d = e.nodeType === Cr && Rp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    He(tR), Xv(nR), Oo(rR), gd(uu), Zv(Ro), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), _v(AT), Rs(h1, dx, ji);
    function CR(e, t) {
      var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!H0(t))
        throw new Error("Target container is not a DOM element.");
      return Zx(e, t, null, u);
    }
    function SR(e, t, u, a) {
      return DR(e, t, u, a);
    }
    var j1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Rl, _c, Bh, xs, vo, h1]
    };
    function AR(e, t) {
      return j1.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), cR(e, t);
    }
    function FR(e, t, u) {
      return j1.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), dR(e, t, u);
    }
    function TR(e) {
      return fS() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ji(e);
    }
    var bR = sR({
      findFiberByHostInstance: Ho,
      bundleType: 1,
      version: O1,
      rendererPackageName: "react-dom"
    });
    if (!bR && xe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var rA = window.location.protocol;
      /^(https?|file):$/.test(rA) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (rA === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1, vu.createPortal = CR, vu.createRoot = AR, vu.findDOMNode = mR, vu.flushSync = TR, vu.hydrate = yR, vu.hydrateRoot = FR, vu.render = gR, vu.unmountComponentAtNode = ER, vu.unstable_batchedUpdates = h1, vu.unstable_renderSubtreeIntoContainer = SR, vu.version = O1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), vu;
}
function tF() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sn.process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tF);
    } catch (c) {
      console.error(c);
    }
  }
}
sn.process.env.NODE_ENV === "production" ? (tF(), nD.exports = zR()) : nD.exports = jR();
var PR = nD.exports;
const lM = /* @__PURE__ */ Z0(PR);
function $R(c, p) {
  for (var m = -1, b = c == null ? 0 : c.length, R = Array(b); ++m < b; )
    R[m] = p(c[m], m, c);
  return R;
}
var HR = $R;
function IR() {
  this.__data__ = [], this.size = 0;
}
var VR = IR;
function qR(c, p) {
  return c === p || c !== c && p !== p;
}
var nF = qR, GR = nF;
function YR(c, p) {
  for (var m = c.length; m--; )
    if (GR(c[m][0], p))
      return m;
  return -1;
}
var em = YR, QR = em, WR = Array.prototype, KR = WR.splice;
function XR(c) {
  var p = this.__data__, m = QR(p, c);
  if (m < 0)
    return !1;
  var b = p.length - 1;
  return m == b ? p.pop() : KR.call(p, m, 1), --this.size, !0;
}
var JR = XR, ZR = em;
function e3(c) {
  var p = this.__data__, m = ZR(p, c);
  return m < 0 ? void 0 : p[m][1];
}
var t3 = e3, n3 = em;
function r3(c) {
  return n3(this.__data__, c) > -1;
}
var u3 = r3, a3 = em;
function i3(c, p) {
  var m = this.__data__, b = a3(m, c);
  return b < 0 ? (++this.size, m.push([c, p])) : m[b][1] = p, this;
}
var l3 = i3, o3 = VR, s3 = JR, c3 = t3, f3 = u3, d3 = l3;
function af(c) {
  var p = -1, m = c == null ? 0 : c.length;
  for (this.clear(); ++p < m; ) {
    var b = c[p];
    this.set(b[0], b[1]);
  }
}
af.prototype.clear = o3;
af.prototype.delete = s3;
af.prototype.get = c3;
af.prototype.has = f3;
af.prototype.set = d3;
var tm = af, p3 = tm;
function v3() {
  this.__data__ = new p3(), this.size = 0;
}
var h3 = v3;
function m3(c) {
  var p = this.__data__, m = p.delete(c);
  return this.size = p.size, m;
}
var y3 = m3;
function g3(c) {
  return this.__data__.get(c);
}
var D3 = g3;
function E3(c) {
  return this.__data__.has(c);
}
var C3 = E3, S3 = typeof Op == "object" && Op && Op.Object === Object && Op, rF = S3, A3 = rF, F3 = typeof self == "object" && self && self.Object === Object && self, T3 = A3 || F3 || Function("return this")(), Hi = T3, b3 = Hi, w3 = b3.Symbol, nm = w3, sA = nm, uF = Object.prototype, x3 = uF.hasOwnProperty, R3 = uF.toString, _p = sA ? sA.toStringTag : void 0;
function B3(c) {
  var p = x3.call(c, _p), m = c[_p];
  try {
    c[_p] = void 0;
    var b = !0;
  } catch {
  }
  var R = R3.call(c);
  return b && (p ? c[_p] = m : delete c[_p]), R;
}
var _3 = B3, O3 = Object.prototype, N3 = O3.toString;
function k3(c) {
  return N3.call(c);
}
var M3 = k3, cA = nm, L3 = _3, U3 = M3, z3 = "[object Null]", j3 = "[object Undefined]", fA = cA ? cA.toStringTag : void 0;
function P3(c) {
  return c == null ? c === void 0 ? j3 : z3 : fA && fA in Object(c) ? L3(c) : U3(c);
}
var Up = P3;
function $3(c) {
  var p = typeof c;
  return c != null && (p == "object" || p == "function");
}
var fD = $3, H3 = Up, I3 = fD, V3 = "[object AsyncFunction]", q3 = "[object Function]", G3 = "[object GeneratorFunction]", Y3 = "[object Proxy]";
function Q3(c) {
  if (!I3(c))
    return !1;
  var p = H3(c);
  return p == q3 || p == G3 || p == V3 || p == Y3;
}
var dD = Q3;
const oM = /* @__PURE__ */ Z0(dD);
var W3 = Hi, K3 = W3["__core-js_shared__"], X3 = K3, H1 = X3, dA = function() {
  var c = /[^.]+$/.exec(H1 && H1.keys && H1.keys.IE_PROTO || "");
  return c ? "Symbol(src)_1." + c : "";
}();
function J3(c) {
  return !!dA && dA in c;
}
var Z3 = J3, eB = Function.prototype, tB = eB.toString;
function nB(c) {
  if (c != null) {
    try {
      return tB.call(c);
    } catch {
    }
    try {
      return c + "";
    } catch {
    }
  }
  return "";
}
var aF = nB, rB = dD, uB = Z3, aB = fD, iB = aF, lB = /[\\^$.*+?()[\]{}|]/g, oB = /^\[object .+?Constructor\]$/, sB = Function.prototype, cB = Object.prototype, fB = sB.toString, dB = cB.hasOwnProperty, pB = RegExp(
  "^" + fB.call(dB).replace(lB, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vB(c) {
  if (!aB(c) || uB(c))
    return !1;
  var p = rB(c) ? pB : oB;
  return p.test(iB(c));
}
var hB = vB;
function mB(c, p) {
  return c == null ? void 0 : c[p];
}
var yB = mB, gB = hB, DB = yB;
function EB(c, p) {
  var m = DB(c, p);
  return gB(m) ? m : void 0;
}
var as = EB, CB = as, SB = Hi, AB = CB(SB, "Map"), pD = AB, FB = as, TB = FB(Object, "create"), rm = TB, pA = rm;
function bB() {
  this.__data__ = pA ? pA(null) : {}, this.size = 0;
}
var wB = bB;
function xB(c) {
  var p = this.has(c) && delete this.__data__[c];
  return this.size -= p ? 1 : 0, p;
}
var RB = xB, BB = rm, _B = "__lodash_hash_undefined__", OB = Object.prototype, NB = OB.hasOwnProperty;
function kB(c) {
  var p = this.__data__;
  if (BB) {
    var m = p[c];
    return m === _B ? void 0 : m;
  }
  return NB.call(p, c) ? p[c] : void 0;
}
var MB = kB, LB = rm, UB = Object.prototype, zB = UB.hasOwnProperty;
function jB(c) {
  var p = this.__data__;
  return LB ? p[c] !== void 0 : zB.call(p, c);
}
var PB = jB, $B = rm, HB = "__lodash_hash_undefined__";
function IB(c, p) {
  var m = this.__data__;
  return this.size += this.has(c) ? 0 : 1, m[c] = $B && p === void 0 ? HB : p, this;
}
var VB = IB, qB = wB, GB = RB, YB = MB, QB = PB, WB = VB;
function lf(c) {
  var p = -1, m = c == null ? 0 : c.length;
  for (this.clear(); ++p < m; ) {
    var b = c[p];
    this.set(b[0], b[1]);
  }
}
lf.prototype.clear = qB;
lf.prototype.delete = GB;
lf.prototype.get = YB;
lf.prototype.has = QB;
lf.prototype.set = WB;
var KB = lf, vA = KB, XB = tm, JB = pD;
function ZB() {
  this.size = 0, this.__data__ = {
    hash: new vA(),
    map: new (JB || XB)(),
    string: new vA()
  };
}
var e_ = ZB;
function t_(c) {
  var p = typeof c;
  return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? c !== "__proto__" : c === null;
}
var n_ = t_, r_ = n_;
function u_(c, p) {
  var m = c.__data__;
  return r_(p) ? m[typeof p == "string" ? "string" : "hash"] : m.map;
}
var um = u_, a_ = um;
function i_(c) {
  var p = a_(this, c).delete(c);
  return this.size -= p ? 1 : 0, p;
}
var l_ = i_, o_ = um;
function s_(c) {
  return o_(this, c).get(c);
}
var c_ = s_, f_ = um;
function d_(c) {
  return f_(this, c).has(c);
}
var p_ = d_, v_ = um;
function h_(c, p) {
  var m = v_(this, c), b = m.size;
  return m.set(c, p), this.size += m.size == b ? 0 : 1, this;
}
var m_ = h_, y_ = e_, g_ = l_, D_ = c_, E_ = p_, C_ = m_;
function of(c) {
  var p = -1, m = c == null ? 0 : c.length;
  for (this.clear(); ++p < m; ) {
    var b = c[p];
    this.set(b[0], b[1]);
  }
}
of.prototype.clear = y_;
of.prototype.delete = g_;
of.prototype.get = D_;
of.prototype.has = E_;
of.prototype.set = C_;
var vD = of, S_ = tm, A_ = pD, F_ = vD, T_ = 200;
function b_(c, p) {
  var m = this.__data__;
  if (m instanceof S_) {
    var b = m.__data__;
    if (!A_ || b.length < T_ - 1)
      return b.push([c, p]), this.size = ++m.size, this;
    m = this.__data__ = new F_(b);
  }
  return m.set(c, p), this.size = m.size, this;
}
var w_ = b_, x_ = tm, R_ = h3, B_ = y3, __ = D3, O_ = C3, N_ = w_;
function sf(c) {
  var p = this.__data__ = new x_(c);
  this.size = p.size;
}
sf.prototype.clear = R_;
sf.prototype.delete = B_;
sf.prototype.get = __;
sf.prototype.has = O_;
sf.prototype.set = N_;
var iF = sf, k_ = "__lodash_hash_undefined__";
function M_(c) {
  return this.__data__.set(c, k_), this;
}
var L_ = M_;
function U_(c) {
  return this.__data__.has(c);
}
var z_ = U_, j_ = vD, P_ = L_, $_ = z_;
function Y0(c) {
  var p = -1, m = c == null ? 0 : c.length;
  for (this.__data__ = new j_(); ++p < m; )
    this.add(c[p]);
}
Y0.prototype.add = Y0.prototype.push = P_;
Y0.prototype.has = $_;
var H_ = Y0;
function I_(c, p) {
  for (var m = -1, b = c == null ? 0 : c.length; ++m < b; )
    if (p(c[m], m, c))
      return !0;
  return !1;
}
var V_ = I_;
function q_(c, p) {
  return c.has(p);
}
var G_ = q_, Y_ = H_, Q_ = V_, W_ = G_, K_ = 1, X_ = 2;
function J_(c, p, m, b, R, _) {
  var y = m & K_, le = c.length, te = p.length;
  if (le != te && !(y && te > le))
    return !1;
  var ee = _.get(c), Ye = _.get(p);
  if (ee && Ye)
    return ee == p && Ye == c;
  var ve = -1, z = !0, re = m & X_ ? new Y_() : void 0;
  for (_.set(c, p), _.set(p, c); ++ve < le; ) {
    var ce = c[ve], se = p[ve];
    if (b)
      var pe = y ? b(se, ce, ve, p, c, _) : b(ce, se, ve, c, p, _);
    if (pe !== void 0) {
      if (pe)
        continue;
      z = !1;
      break;
    }
    if (re) {
      if (!Q_(p, function(Qe, Ie) {
        if (!W_(re, Ie) && (ce === Qe || R(ce, Qe, m, b, _)))
          return re.push(Ie);
      })) {
        z = !1;
        break;
      }
    } else if (!(ce === se || R(ce, se, m, b, _))) {
      z = !1;
      break;
    }
  }
  return _.delete(c), _.delete(p), z;
}
var lF = J_, Z_ = Hi, eO = Z_.Uint8Array, tO = eO;
function nO(c) {
  var p = -1, m = Array(c.size);
  return c.forEach(function(b, R) {
    m[++p] = [R, b];
  }), m;
}
var rO = nO;
function uO(c) {
  var p = -1, m = Array(c.size);
  return c.forEach(function(b) {
    m[++p] = b;
  }), m;
}
var aO = uO, hA = nm, mA = tO, iO = nF, lO = lF, oO = rO, sO = aO, cO = 1, fO = 2, dO = "[object Boolean]", pO = "[object Date]", vO = "[object Error]", hO = "[object Map]", mO = "[object Number]", yO = "[object RegExp]", gO = "[object Set]", DO = "[object String]", EO = "[object Symbol]", CO = "[object ArrayBuffer]", SO = "[object DataView]", yA = hA ? hA.prototype : void 0, I1 = yA ? yA.valueOf : void 0;
function AO(c, p, m, b, R, _, y) {
  switch (m) {
    case SO:
      if (c.byteLength != p.byteLength || c.byteOffset != p.byteOffset)
        return !1;
      c = c.buffer, p = p.buffer;
    case CO:
      return !(c.byteLength != p.byteLength || !_(new mA(c), new mA(p)));
    case dO:
    case pO:
    case mO:
      return iO(+c, +p);
    case vO:
      return c.name == p.name && c.message == p.message;
    case yO:
    case DO:
      return c == p + "";
    case hO:
      var le = oO;
    case gO:
      var te = b & cO;
      if (le || (le = sO), c.size != p.size && !te)
        return !1;
      var ee = y.get(c);
      if (ee)
        return ee == p;
      b |= fO, y.set(c, p);
      var Ye = lO(le(c), le(p), b, R, _, y);
      return y.delete(c), Ye;
    case EO:
      if (I1)
        return I1.call(c) == I1.call(p);
  }
  return !1;
}
var FO = AO;
function TO(c, p) {
  for (var m = -1, b = p.length, R = c.length; ++m < b; )
    c[R + m] = p[m];
  return c;
}
var bO = TO, wO = Array.isArray, ql = wO, xO = bO, RO = ql;
function BO(c, p, m) {
  var b = p(c);
  return RO(c) ? b : xO(b, m(c));
}
var _O = BO;
function OO(c, p) {
  for (var m = -1, b = c == null ? 0 : c.length, R = 0, _ = []; ++m < b; ) {
    var y = c[m];
    p(y, m, c) && (_[R++] = y);
  }
  return _;
}
var NO = OO;
function kO() {
  return [];
}
var MO = kO, LO = NO, UO = MO, zO = Object.prototype, jO = zO.propertyIsEnumerable, gA = Object.getOwnPropertySymbols, PO = gA ? function(c) {
  return c == null ? [] : (c = Object(c), LO(gA(c), function(p) {
    return jO.call(c, p);
  }));
} : UO, $O = PO;
function HO(c, p) {
  for (var m = -1, b = Array(c); ++m < c; )
    b[m] = p(m);
  return b;
}
var IO = HO;
function VO(c) {
  return c != null && typeof c == "object";
}
var zp = VO, qO = Up, GO = zp, YO = "[object Arguments]";
function QO(c) {
  return GO(c) && qO(c) == YO;
}
var WO = QO, DA = WO, KO = zp, oF = Object.prototype, XO = oF.hasOwnProperty, JO = oF.propertyIsEnumerable, ZO = DA(function() {
  return arguments;
}()) ? DA : function(c) {
  return KO(c) && XO.call(c, "callee") && !JO.call(c, "callee");
}, sF = ZO, Q0 = { exports: {} };
function e8() {
  return !1;
}
var t8 = e8;
Q0.exports;
(function(c, p) {
  var m = Hi, b = t8, R = p && !p.nodeType && p, _ = R && !0 && c && !c.nodeType && c, y = _ && _.exports === R, le = y ? m.Buffer : void 0, te = le ? le.isBuffer : void 0, ee = te || b;
  c.exports = ee;
})(Q0, Q0.exports);
var cF = Q0.exports, n8 = 9007199254740991, r8 = /^(?:0|[1-9]\d*)$/;
function u8(c, p) {
  var m = typeof c;
  return p = p ?? n8, !!p && (m == "number" || m != "symbol" && r8.test(c)) && c > -1 && c % 1 == 0 && c < p;
}
var fF = u8, a8 = 9007199254740991;
function i8(c) {
  return typeof c == "number" && c > -1 && c % 1 == 0 && c <= a8;
}
var hD = i8, l8 = Up, o8 = hD, s8 = zp, c8 = "[object Arguments]", f8 = "[object Array]", d8 = "[object Boolean]", p8 = "[object Date]", v8 = "[object Error]", h8 = "[object Function]", m8 = "[object Map]", y8 = "[object Number]", g8 = "[object Object]", D8 = "[object RegExp]", E8 = "[object Set]", C8 = "[object String]", S8 = "[object WeakMap]", A8 = "[object ArrayBuffer]", F8 = "[object DataView]", T8 = "[object Float32Array]", b8 = "[object Float64Array]", w8 = "[object Int8Array]", x8 = "[object Int16Array]", R8 = "[object Int32Array]", B8 = "[object Uint8Array]", _8 = "[object Uint8ClampedArray]", O8 = "[object Uint16Array]", N8 = "[object Uint32Array]", on = {};
on[T8] = on[b8] = on[w8] = on[x8] = on[R8] = on[B8] = on[_8] = on[O8] = on[N8] = !0;
on[c8] = on[f8] = on[A8] = on[d8] = on[F8] = on[p8] = on[v8] = on[h8] = on[m8] = on[y8] = on[g8] = on[D8] = on[E8] = on[C8] = on[S8] = !1;
function k8(c) {
  return s8(c) && o8(c.length) && !!on[l8(c)];
}
var M8 = k8;
function L8(c) {
  return function(p) {
    return c(p);
  };
}
var U8 = L8, W0 = { exports: {} };
W0.exports;
(function(c, p) {
  var m = rF, b = p && !p.nodeType && p, R = b && !0 && c && !c.nodeType && c, _ = R && R.exports === b, y = _ && m.process, le = function() {
    try {
      var te = R && R.require && R.require("util").types;
      return te || y && y.binding && y.binding("util");
    } catch {
    }
  }();
  c.exports = le;
})(W0, W0.exports);
var z8 = W0.exports, j8 = M8, P8 = U8, EA = z8, CA = EA && EA.isTypedArray, $8 = CA ? P8(CA) : j8, dF = $8, H8 = IO, I8 = sF, V8 = ql, q8 = cF, G8 = fF, Y8 = dF, Q8 = Object.prototype, W8 = Q8.hasOwnProperty;
function K8(c, p) {
  var m = V8(c), b = !m && I8(c), R = !m && !b && q8(c), _ = !m && !b && !R && Y8(c), y = m || b || R || _, le = y ? H8(c.length, String) : [], te = le.length;
  for (var ee in c)
    (p || W8.call(c, ee)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
    (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    R && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    _ && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
    G8(ee, te))) && le.push(ee);
  return le;
}
var X8 = K8, J8 = Object.prototype;
function Z8(c) {
  var p = c && c.constructor, m = typeof p == "function" && p.prototype || J8;
  return c === m;
}
var eN = Z8;
function tN(c, p) {
  return function(m) {
    return c(p(m));
  };
}
var pF = tN, nN = pF, rN = nN(Object.keys, Object), uN = rN, aN = eN, iN = uN, lN = Object.prototype, oN = lN.hasOwnProperty;
function sN(c) {
  if (!aN(c))
    return iN(c);
  var p = [];
  for (var m in Object(c))
    oN.call(c, m) && m != "constructor" && p.push(m);
  return p;
}
var cN = sN, fN = dD, dN = hD;
function pN(c) {
  return c != null && dN(c.length) && !fN(c);
}
var vN = pN, hN = X8, mN = cN, yN = vN;
function gN(c) {
  return yN(c) ? hN(c) : mN(c);
}
var mD = gN, DN = _O, EN = $O, CN = mD;
function SN(c) {
  return DN(c, CN, EN);
}
var AN = SN, SA = AN, FN = 1, TN = Object.prototype, bN = TN.hasOwnProperty;
function wN(c, p, m, b, R, _) {
  var y = m & FN, le = SA(c), te = le.length, ee = SA(p), Ye = ee.length;
  if (te != Ye && !y)
    return !1;
  for (var ve = te; ve--; ) {
    var z = le[ve];
    if (!(y ? z in p : bN.call(p, z)))
      return !1;
  }
  var re = _.get(c), ce = _.get(p);
  if (re && ce)
    return re == p && ce == c;
  var se = !0;
  _.set(c, p), _.set(p, c);
  for (var pe = y; ++ve < te; ) {
    z = le[ve];
    var Qe = c[z], Ie = p[z];
    if (b)
      var et = y ? b(Ie, Qe, z, p, c, _) : b(Qe, Ie, z, c, p, _);
    if (!(et === void 0 ? Qe === Ie || R(Qe, Ie, m, b, _) : et)) {
      se = !1;
      break;
    }
    pe || (pe = z == "constructor");
  }
  if (se && !pe) {
    var Je = c.constructor, $ = p.constructor;
    Je != $ && "constructor" in c && "constructor" in p && !(typeof Je == "function" && Je instanceof Je && typeof $ == "function" && $ instanceof $) && (se = !1);
  }
  return _.delete(c), _.delete(p), se;
}
var xN = wN, RN = as, BN = Hi, _N = RN(BN, "DataView"), ON = _N, NN = as, kN = Hi, MN = NN(kN, "Promise"), LN = MN, UN = as, zN = Hi, jN = UN(zN, "Set"), PN = jN, $N = as, HN = Hi, IN = $N(HN, "WeakMap"), VN = IN, rD = ON, uD = pD, aD = LN, iD = PN, lD = VN, vF = Up, cf = aF, AA = "[object Map]", qN = "[object Object]", FA = "[object Promise]", TA = "[object Set]", bA = "[object WeakMap]", wA = "[object DataView]", GN = cf(rD), YN = cf(uD), QN = cf(aD), WN = cf(iD), KN = cf(lD), us = vF;
(rD && us(new rD(new ArrayBuffer(1))) != wA || uD && us(new uD()) != AA || aD && us(aD.resolve()) != FA || iD && us(new iD()) != TA || lD && us(new lD()) != bA) && (us = function(c) {
  var p = vF(c), m = p == qN ? c.constructor : void 0, b = m ? cf(m) : "";
  if (b)
    switch (b) {
      case GN:
        return wA;
      case YN:
        return AA;
      case QN:
        return FA;
      case WN:
        return TA;
      case KN:
        return bA;
    }
  return p;
});
var XN = us, V1 = iF, JN = lF, ZN = FO, e6 = xN, xA = XN, RA = ql, BA = cF, t6 = dF, n6 = 1, _A = "[object Arguments]", OA = "[object Array]", q0 = "[object Object]", r6 = Object.prototype, NA = r6.hasOwnProperty;
function u6(c, p, m, b, R, _) {
  var y = RA(c), le = RA(p), te = y ? OA : xA(c), ee = le ? OA : xA(p);
  te = te == _A ? q0 : te, ee = ee == _A ? q0 : ee;
  var Ye = te == q0, ve = ee == q0, z = te == ee;
  if (z && BA(c)) {
    if (!BA(p))
      return !1;
    y = !0, Ye = !1;
  }
  if (z && !Ye)
    return _ || (_ = new V1()), y || t6(c) ? JN(c, p, m, b, R, _) : ZN(c, p, te, m, b, R, _);
  if (!(m & n6)) {
    var re = Ye && NA.call(c, "__wrapped__"), ce = ve && NA.call(p, "__wrapped__");
    if (re || ce) {
      var se = re ? c.value() : c, pe = ce ? p.value() : p;
      return _ || (_ = new V1()), R(se, pe, m, b, _);
    }
  }
  return z ? (_ || (_ = new V1()), e6(c, p, m, b, R, _)) : !1;
}
var a6 = u6, i6 = a6, kA = zp;
function hF(c, p, m, b, R) {
  return c === p ? !0 : c == null || p == null || !kA(c) && !kA(p) ? c !== c && p !== p : i6(c, p, m, b, hF, R);
}
var mF = hF, l6 = iF, o6 = mF, s6 = 1, c6 = 2;
function f6(c, p, m, b) {
  var R = m.length, _ = R, y = !b;
  if (c == null)
    return !_;
  for (c = Object(c); R--; ) {
    var le = m[R];
    if (y && le[2] ? le[1] !== c[le[0]] : !(le[0] in c))
      return !1;
  }
  for (; ++R < _; ) {
    le = m[R];
    var te = le[0], ee = c[te], Ye = le[1];
    if (y && le[2]) {
      if (ee === void 0 && !(te in c))
        return !1;
    } else {
      var ve = new l6();
      if (b)
        var z = b(ee, Ye, te, c, p, ve);
      if (!(z === void 0 ? o6(Ye, ee, s6 | c6, b, ve) : z))
        return !1;
    }
  }
  return !0;
}
var d6 = f6, p6 = fD;
function v6(c) {
  return c === c && !p6(c);
}
var yF = v6, h6 = yF, m6 = mD;
function y6(c) {
  for (var p = m6(c), m = p.length; m--; ) {
    var b = p[m], R = c[b];
    p[m] = [b, R, h6(R)];
  }
  return p;
}
var g6 = y6;
function D6(c, p) {
  return function(m) {
    return m == null ? !1 : m[c] === p && (p !== void 0 || c in Object(m));
  };
}
var gF = D6, E6 = d6, C6 = g6, S6 = gF;
function A6(c) {
  var p = C6(c);
  return p.length == 1 && p[0][2] ? S6(p[0][0], p[0][1]) : function(m) {
    return m === c || E6(m, c, p);
  };
}
var F6 = A6, T6 = Up, b6 = zp, w6 = "[object Symbol]";
function x6(c) {
  return typeof c == "symbol" || b6(c) && T6(c) == w6;
}
var yD = x6, R6 = ql, B6 = yD, _6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, O6 = /^\w*$/;
function N6(c, p) {
  if (R6(c))
    return !1;
  var m = typeof c;
  return m == "number" || m == "symbol" || m == "boolean" || c == null || B6(c) ? !0 : O6.test(c) || !_6.test(c) || p != null && c in Object(p);
}
var gD = N6, DF = vD, k6 = "Expected a function";
function DD(c, p) {
  if (typeof c != "function" || p != null && typeof p != "function")
    throw new TypeError(k6);
  var m = function() {
    var b = arguments, R = p ? p.apply(this, b) : b[0], _ = m.cache;
    if (_.has(R))
      return _.get(R);
    var y = c.apply(this, b);
    return m.cache = _.set(R, y) || _, y;
  };
  return m.cache = new (DD.Cache || DF)(), m;
}
DD.Cache = DF;
var M6 = DD, L6 = M6, U6 = 500;
function z6(c) {
  var p = L6(c, function(b) {
    return m.size === U6 && m.clear(), b;
  }), m = p.cache;
  return p;
}
var j6 = z6, P6 = j6, $6 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, H6 = /\\(\\)?/g, I6 = P6(function(c) {
  var p = [];
  return c.charCodeAt(0) === 46 && p.push(""), c.replace($6, function(m, b, R, _) {
    p.push(R ? _.replace(H6, "$1") : b || m);
  }), p;
}), V6 = I6, MA = nm, q6 = HR, G6 = ql, Y6 = yD, Q6 = 1 / 0, LA = MA ? MA.prototype : void 0, UA = LA ? LA.toString : void 0;
function EF(c) {
  if (typeof c == "string")
    return c;
  if (G6(c))
    return q6(c, EF) + "";
  if (Y6(c))
    return UA ? UA.call(c) : "";
  var p = c + "";
  return p == "0" && 1 / c == -Q6 ? "-0" : p;
}
var W6 = EF, K6 = W6;
function X6(c) {
  return c == null ? "" : K6(c);
}
var J6 = X6, Z6 = ql, e4 = gD, t4 = V6, n4 = J6;
function r4(c, p) {
  return Z6(c) ? c : e4(c, p) ? [c] : t4(n4(c));
}
var CF = r4, u4 = yD, a4 = 1 / 0;
function i4(c) {
  if (typeof c == "string" || u4(c))
    return c;
  var p = c + "";
  return p == "0" && 1 / c == -a4 ? "-0" : p;
}
var am = i4, l4 = CF, o4 = am;
function s4(c, p) {
  p = l4(p, c);
  for (var m = 0, b = p.length; c != null && m < b; )
    c = c[o4(p[m++])];
  return m && m == b ? c : void 0;
}
var SF = s4, c4 = SF;
function f4(c, p, m) {
  var b = c == null ? void 0 : c4(c, p);
  return b === void 0 ? m : b;
}
var d4 = f4;
function p4(c, p) {
  return c != null && p in Object(c);
}
var v4 = p4, h4 = CF, m4 = sF, y4 = ql, g4 = fF, D4 = hD, E4 = am;
function C4(c, p, m) {
  p = h4(p, c);
  for (var b = -1, R = p.length, _ = !1; ++b < R; ) {
    var y = E4(p[b]);
    if (!(_ = c != null && m(c, y)))
      break;
    c = c[y];
  }
  return _ || ++b != R ? _ : (R = c == null ? 0 : c.length, !!R && D4(R) && g4(y, R) && (y4(c) || m4(c)));
}
var S4 = C4, A4 = v4, F4 = S4;
function T4(c, p) {
  return c != null && F4(c, p, A4);
}
var b4 = T4, w4 = mF, x4 = d4, R4 = b4, B4 = gD, _4 = yF, O4 = gF, N4 = am, k4 = 1, M4 = 2;
function L4(c, p) {
  return B4(c) && _4(p) ? O4(N4(c), p) : function(m) {
    var b = x4(m, c);
    return b === void 0 && b === p ? R4(m, c) : w4(p, b, k4 | M4);
  };
}
var U4 = L4;
function z4(c) {
  return c;
}
var j4 = z4;
function P4(c) {
  return function(p) {
    return p == null ? void 0 : p[c];
  };
}
var $4 = P4, H4 = SF;
function I4(c) {
  return function(p) {
    return H4(p, c);
  };
}
var V4 = I4, q4 = $4, G4 = V4, Y4 = gD, Q4 = am;
function W4(c) {
  return Y4(c) ? q4(Q4(c)) : G4(c);
}
var K4 = W4, X4 = F6, J4 = U4, Z4 = j4, ek = ql, tk = K4;
function nk(c) {
  return typeof c == "function" ? c : c == null ? Z4 : typeof c == "object" ? ek(c) ? J4(c[0], c[1]) : X4(c) : tk(c);
}
var rk = nk, uk = as, ak = function() {
  try {
    var c = uk(Object, "defineProperty");
    return c({}, "", {}), c;
  } catch {
  }
}(), ik = ak, zA = ik;
function lk(c, p, m) {
  p == "__proto__" && zA ? zA(c, p, {
    configurable: !0,
    enumerable: !0,
    value: m,
    writable: !0
  }) : c[p] = m;
}
var ok = lk, sk = pF, ck = sk(Object.getPrototypeOf, Object), sM = ck;
function fk(c) {
  return function(p, m, b) {
    for (var R = -1, _ = Object(p), y = b(p), le = y.length; le--; ) {
      var te = y[c ? le : ++R];
      if (m(_[te], te, _) === !1)
        break;
    }
    return p;
  };
}
var dk = fk, pk = dk, vk = pk(), hk = vk, mk = hk, yk = mD;
function gk(c, p) {
  return c && mk(c, p, yk);
}
var Dk = gk, Ek = ok, Ck = Dk, Sk = rk;
function Ak(c, p) {
  var m = {};
  return p = Sk(p), Ck(c, function(b, R, _) {
    Ek(m, R, p(b, R, _));
  }), m;
}
var Fk = Ak;
const Tk = /* @__PURE__ */ Z0(Fk);
var AF = {}, Mp = {}, FF = { exports: {} };
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
  function p(y) {
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
  function m(y) {
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
  function b(y) {
    return m(y) || y != null && y.type === "FunctionDeclaration";
  }
  function R(y) {
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
  function _(y) {
    var le;
    if (y.type !== "IfStatement" || y.alternate == null)
      return !1;
    le = y.consequent;
    do {
      if (le.type === "IfStatement" && le.alternate == null)
        return !0;
      le = R(le);
    } while (le);
    return !1;
  }
  FF.exports = {
    isExpression: c,
    isStatement: m,
    isIterationStatement: p,
    isSourceElement: b,
    isProblematicIfStatement: _,
    trailingStatement: R
  };
})();
var bk = FF.exports, TF = { exports: {} };
(function() {
  var c, p, m, b, R, _;
  p = {
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
  function y(pe) {
    return 48 <= pe && pe <= 57;
  }
  function le(pe) {
    return 48 <= pe && pe <= 57 || // 0..9
    97 <= pe && pe <= 102 || // a..f
    65 <= pe && pe <= 70;
  }
  function te(pe) {
    return pe >= 48 && pe <= 55;
  }
  m = [
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
  function ee(pe) {
    return pe === 32 || pe === 9 || pe === 11 || pe === 12 || pe === 160 || pe >= 5760 && m.indexOf(pe) >= 0;
  }
  function Ye(pe) {
    return pe === 10 || pe === 13 || pe === 8232 || pe === 8233;
  }
  function ve(pe) {
    if (pe <= 65535)
      return String.fromCharCode(pe);
    var Qe = String.fromCharCode(Math.floor((pe - 65536) / 1024) + 55296), Ie = String.fromCharCode((pe - 65536) % 1024 + 56320);
    return Qe + Ie;
  }
  for (b = new Array(128), _ = 0; _ < 128; ++_)
    b[_] = _ >= 97 && _ <= 122 || // a..z
    _ >= 65 && _ <= 90 || // A..Z
    _ === 36 || _ === 95;
  for (R = new Array(128), _ = 0; _ < 128; ++_)
    R[_] = _ >= 97 && _ <= 122 || // a..z
    _ >= 65 && _ <= 90 || // A..Z
    _ >= 48 && _ <= 57 || // 0..9
    _ === 36 || _ === 95;
  function z(pe) {
    return pe < 128 ? b[pe] : p.NonAsciiIdentifierStart.test(ve(pe));
  }
  function re(pe) {
    return pe < 128 ? R[pe] : p.NonAsciiIdentifierPart.test(ve(pe));
  }
  function ce(pe) {
    return pe < 128 ? b[pe] : c.NonAsciiIdentifierStart.test(ve(pe));
  }
  function se(pe) {
    return pe < 128 ? R[pe] : c.NonAsciiIdentifierPart.test(ve(pe));
  }
  TF.exports = {
    isDecimalDigit: y,
    isHexDigit: le,
    isOctalDigit: te,
    isWhiteSpace: ee,
    isLineTerminator: Ye,
    isIdentifierStartES5: z,
    isIdentifierPartES5: re,
    isIdentifierStartES6: ce,
    isIdentifierPartES6: se
  };
})();
var bF = TF.exports, wF = { exports: {} };
(function() {
  var c = bF;
  function p(z) {
    switch (z) {
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
  function m(z, re) {
    return !re && z === "yield" ? !1 : b(z, re);
  }
  function b(z, re) {
    if (re && p(z))
      return !0;
    switch (z.length) {
      case 2:
        return z === "if" || z === "in" || z === "do";
      case 3:
        return z === "var" || z === "for" || z === "new" || z === "try";
      case 4:
        return z === "this" || z === "else" || z === "case" || z === "void" || z === "with" || z === "enum";
      case 5:
        return z === "while" || z === "break" || z === "catch" || z === "throw" || z === "const" || z === "yield" || z === "class" || z === "super";
      case 6:
        return z === "return" || z === "typeof" || z === "delete" || z === "switch" || z === "export" || z === "import";
      case 7:
        return z === "default" || z === "finally" || z === "extends";
      case 8:
        return z === "function" || z === "continue" || z === "debugger";
      case 10:
        return z === "instanceof";
      default:
        return !1;
    }
  }
  function R(z, re) {
    return z === "null" || z === "true" || z === "false" || m(z, re);
  }
  function _(z, re) {
    return z === "null" || z === "true" || z === "false" || b(z, re);
  }
  function y(z) {
    return z === "eval" || z === "arguments";
  }
  function le(z) {
    var re, ce, se;
    if (z.length === 0 || (se = z.charCodeAt(0), !c.isIdentifierStartES5(se)))
      return !1;
    for (re = 1, ce = z.length; re < ce; ++re)
      if (se = z.charCodeAt(re), !c.isIdentifierPartES5(se))
        return !1;
    return !0;
  }
  function te(z, re) {
    return (z - 55296) * 1024 + (re - 56320) + 65536;
  }
  function ee(z) {
    var re, ce, se, pe, Qe;
    if (z.length === 0)
      return !1;
    for (Qe = c.isIdentifierStartES6, re = 0, ce = z.length; re < ce; ++re) {
      if (se = z.charCodeAt(re), 55296 <= se && se <= 56319) {
        if (++re, re >= ce || (pe = z.charCodeAt(re), !(56320 <= pe && pe <= 57343)))
          return !1;
        se = te(se, pe);
      }
      if (!Qe(se))
        return !1;
      Qe = c.isIdentifierPartES6;
    }
    return !0;
  }
  function Ye(z, re) {
    return le(z) && !R(z, re);
  }
  function ve(z, re) {
    return ee(z) && !_(z, re);
  }
  wF.exports = {
    isKeywordES5: m,
    isKeywordES6: b,
    isReservedWordES5: R,
    isReservedWordES6: _,
    isRestrictedWord: y,
    isIdentifierNameES5: le,
    isIdentifierNameES6: ee,
    isIdentifierES5: Ye,
    isIdentifierES6: ve
  };
})();
var wk = wF.exports;
(function() {
  Mp.ast = bk, Mp.code = bF, Mp.keyword = wk;
})();
var Np = {}, nf = {};
const xk = "doctrine", Rk = "JSDoc parser", Bk = "https://github.com/eslint/doctrine", _k = "lib/doctrine.js", Ok = "3.0.0", Nk = {
  node: ">=6.0.0"
}, kk = {
  lib: "./lib"
}, Mk = [
  "lib"
], Lk = [
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
], Uk = "eslint/doctrine", zk = {
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
}, jk = "Apache-2.0", Pk = {
  pretest: "npm run lint",
  test: "nyc mocha",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  lint: "eslint lib/",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
}, $k = {
  esutils: "^2.0.2"
}, Hk = {
  name: xk,
  description: Rk,
  homepage: Bk,
  main: _k,
  version: Ok,
  engines: Nk,
  directories: kk,
  files: Mk,
  maintainers: Lk,
  repository: Uk,
  devDependencies: zk,
  license: jk,
  scripts: Pk,
  dependencies: $k
};
var q1 = { exports: {} }, G1 = {}, uf = {}, xF = {}, Ik = Object.prototype.toString, Vk = Function.prototype.toString, qk = /^\s*(?:function)?\*/, RF = KA(), Y1 = Object.getPrototypeOf, Gk = function() {
  if (!RF)
    return !1;
  try {
    return Function("return function*() {}")();
  } catch {
  }
}, Q1, Yk = function(p) {
  if (typeof p != "function")
    return !1;
  if (qk.test(Vk.call(p)))
    return !0;
  if (!RF) {
    var m = Ik.call(p);
    return m === "[object GeneratorFunction]";
  }
  if (!Y1)
    return !1;
  if (typeof Q1 > "u") {
    var b = Gk();
    Q1 = b ? Y1(b) : !1;
  }
  return Y1(p) === Q1;
}, K0 = RR, Qk = BR, jA = JA, ED = XA, G0 = _R, Wk = ED("Object.prototype.toString"), BF = KA(), PA = typeof globalThis > "u" ? Op : globalThis, oD = Qk(), CD = ED("String.prototype.slice"), W1 = Object.getPrototypeOf, Kk = ED("Array.prototype.indexOf", !0) || function(p, m) {
  for (var b = 0; b < p.length; b += 1)
    if (p[b] === m)
      return b;
  return -1;
}, X0 = { __proto__: null };
BF && G0 && W1 ? K0(oD, function(c) {
  var p = new PA[c]();
  if (Symbol.toStringTag in p) {
    var m = W1(p), b = G0(m, Symbol.toStringTag);
    if (!b) {
      var R = W1(m);
      b = G0(R, Symbol.toStringTag);
    }
    X0["$" + c] = jA(b.get);
  }
}) : K0(oD, function(c) {
  var p = new PA[c]();
  X0["$" + c] = jA(p.slice);
});
var Xk = function(p) {
  var m = !1;
  return K0(X0, function(b, R) {
    if (!m)
      try {
        "$" + b(p) === R && (m = CD(R, 1));
      } catch {
      }
  }), m;
}, Jk = function(p) {
  var m = !1;
  return K0(X0, function(b, R) {
    if (!m)
      try {
        b(p), m = CD(R, 1);
      } catch {
      }
  }), m;
}, _F = function(p) {
  if (!p || typeof p != "object")
    return !1;
  if (!BF) {
    var m = CD(Wk(p), 8, -1);
    return Kk(oD, m) > -1 ? m : m !== "Object" ? !1 : Jk(p);
  }
  return G0 ? Xk(p) : null;
}, Zk = _F, e5 = function(p) {
  return !!Zk(p);
};
(function(c) {
  var p = OR, m = Yk, b = _F, R = e5;
  function _(de) {
    return de.call.bind(de);
  }
  var y = typeof BigInt < "u", le = typeof Symbol < "u", te = _(Object.prototype.toString), ee = _(Number.prototype.valueOf), Ye = _(String.prototype.valueOf), ve = _(Boolean.prototype.valueOf);
  if (y)
    var z = _(BigInt.prototype.valueOf);
  if (le)
    var re = _(Symbol.prototype.valueOf);
  function ce(de, Er) {
    if (typeof de != "object")
      return !1;
    try {
      return Er(de), !0;
    } catch {
      return !1;
    }
  }
  c.isArgumentsObject = p, c.isGeneratorFunction = m, c.isTypedArray = R;
  function se(de) {
    return typeof Promise < "u" && de instanceof Promise || de !== null && typeof de == "object" && typeof de.then == "function" && typeof de.catch == "function";
  }
  c.isPromise = se;
  function pe(de) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(de) : R(de) || j(de);
  }
  c.isArrayBufferView = pe;
  function Qe(de) {
    return b(de) === "Uint8Array";
  }
  c.isUint8Array = Qe;
  function Ie(de) {
    return b(de) === "Uint8ClampedArray";
  }
  c.isUint8ClampedArray = Ie;
  function et(de) {
    return b(de) === "Uint16Array";
  }
  c.isUint16Array = et;
  function Je(de) {
    return b(de) === "Uint32Array";
  }
  c.isUint32Array = Je;
  function $(de) {
    return b(de) === "Int8Array";
  }
  c.isInt8Array = $;
  function O(de) {
    return b(de) === "Int16Array";
  }
  c.isInt16Array = O;
  function ne(de) {
    return b(de) === "Int32Array";
  }
  c.isInt32Array = ne;
  function Z(de) {
    return b(de) === "Float32Array";
  }
  c.isFloat32Array = Z;
  function Pe(de) {
    return b(de) === "Float64Array";
  }
  c.isFloat64Array = Pe;
  function we(de) {
    return b(de) === "BigInt64Array";
  }
  c.isBigInt64Array = we;
  function De(de) {
    return b(de) === "BigUint64Array";
  }
  c.isBigUint64Array = De;
  function ke(de) {
    return te(de) === "[object Map]";
  }
  ke.working = typeof Map < "u" && ke(/* @__PURE__ */ new Map());
  function Ke(de) {
    return typeof Map > "u" ? !1 : ke.working ? ke(de) : de instanceof Map;
  }
  c.isMap = Ke;
  function ut(de) {
    return te(de) === "[object Set]";
  }
  ut.working = typeof Set < "u" && ut(/* @__PURE__ */ new Set());
  function xt(de) {
    return typeof Set > "u" ? !1 : ut.working ? ut(de) : de instanceof Set;
  }
  c.isSet = xt;
  function Ue(de) {
    return te(de) === "[object WeakMap]";
  }
  Ue.working = typeof WeakMap < "u" && Ue(/* @__PURE__ */ new WeakMap());
  function $t(de) {
    return typeof WeakMap > "u" ? !1 : Ue.working ? Ue(de) : de instanceof WeakMap;
  }
  c.isWeakMap = $t;
  function Ee(de) {
    return te(de) === "[object WeakSet]";
  }
  Ee.working = typeof WeakSet < "u" && Ee(/* @__PURE__ */ new WeakSet());
  function H(de) {
    return Ee(de);
  }
  c.isWeakSet = H;
  function P(de) {
    return te(de) === "[object ArrayBuffer]";
  }
  P.working = typeof ArrayBuffer < "u" && P(new ArrayBuffer());
  function ge(de) {
    return typeof ArrayBuffer > "u" ? !1 : P.working ? P(de) : de instanceof ArrayBuffer;
  }
  c.isArrayBuffer = ge;
  function B(de) {
    return te(de) === "[object DataView]";
  }
  B.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && B(new DataView(new ArrayBuffer(1), 0, 1));
  function j(de) {
    return typeof DataView > "u" ? !1 : B.working ? B(de) : de instanceof DataView;
  }
  c.isDataView = j;
  var Q = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function Ae(de) {
    return te(de) === "[object SharedArrayBuffer]";
  }
  function x(de) {
    return typeof Q > "u" ? !1 : (typeof Ae.working > "u" && (Ae.working = Ae(new Q())), Ae.working ? Ae(de) : de instanceof Q);
  }
  c.isSharedArrayBuffer = x;
  function S(de) {
    return te(de) === "[object AsyncFunction]";
  }
  c.isAsyncFunction = S;
  function F(de) {
    return te(de) === "[object Map Iterator]";
  }
  c.isMapIterator = F;
  function C(de) {
    return te(de) === "[object Set Iterator]";
  }
  c.isSetIterator = C;
  function T(de) {
    return te(de) === "[object Generator]";
  }
  c.isGeneratorObject = T;
  function G(de) {
    return te(de) === "[object WebAssembly.Module]";
  }
  c.isWebAssemblyCompiledModule = G;
  function ue(de) {
    return ce(de, ee);
  }
  c.isNumberObject = ue;
  function xe(de) {
    return ce(de, Ye);
  }
  c.isStringObject = xe;
  function _e(de) {
    return ce(de, ve);
  }
  c.isBooleanObject = _e;
  function at(de) {
    return y && ce(de, z);
  }
  c.isBigIntObject = at;
  function Rt(de) {
    return le && ce(de, re);
  }
  c.isSymbolObject = Rt;
  function tn(de) {
    return ue(de) || xe(de) || _e(de) || at(de) || Rt(de);
  }
  c.isBoxedPrimitive = tn;
  function Gt(de) {
    return typeof Uint8Array < "u" && (ge(de) || x(de));
  }
  c.isAnyArrayBuffer = Gt, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(de) {
    Object.defineProperty(c, de, {
      enumerable: !1,
      value: function() {
        throw new Error(de + " is not supported in userland");
      }
    });
  });
})(xF);
var t5 = function(p) {
  return p && typeof p == "object" && typeof p.copy == "function" && typeof p.fill == "function" && typeof p.readUInt8 == "function";
}, sD = { exports: {} };
typeof Object.create == "function" ? sD.exports = function(p, m) {
  m && (p.super_ = m, p.prototype = Object.create(m.prototype, {
    constructor: {
      value: p,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : sD.exports = function(p, m) {
  if (m) {
    p.super_ = m;
    var b = function() {
    };
    b.prototype = m.prototype, p.prototype = new b(), p.prototype.constructor = p;
  }
};
var n5 = sD.exports;
(function(c) {
  var p = Object.getOwnPropertyDescriptors || function(j) {
    for (var Q = Object.keys(j), Ae = {}, x = 0; x < Q.length; x++)
      Ae[Q[x]] = Object.getOwnPropertyDescriptor(j, Q[x]);
    return Ae;
  }, m = /%[sdj%]/g;
  c.format = function(B) {
    if (!$(B)) {
      for (var j = [], Q = 0; Q < arguments.length; Q++)
        j.push(y(arguments[Q]));
      return j.join(" ");
    }
    for (var Q = 1, Ae = arguments, x = Ae.length, S = String(B).replace(m, function(C) {
      if (C === "%%")
        return "%";
      if (Q >= x)
        return C;
      switch (C) {
        case "%s":
          return String(Ae[Q++]);
        case "%d":
          return Number(Ae[Q++]);
        case "%j":
          try {
            return JSON.stringify(Ae[Q++]);
          } catch {
            return "[Circular]";
          }
        default:
          return C;
      }
    }), F = Ae[Q]; Q < x; F = Ae[++Q])
      Ie(F) || !Pe(F) ? S += " " + F : S += " " + y(F);
    return S;
  }, c.deprecate = function(B, j) {
    if (typeof sn.process < "u" && sn.process.noDeprecation === !0)
      return B;
    if (typeof sn.process > "u")
      return function() {
        return c.deprecate(B, j).apply(this, arguments);
      };
    var Q = !1;
    function Ae() {
      if (!Q) {
        if (sn.process.throwDeprecation)
          throw new Error(j);
        sn.process.traceDeprecation ? console.trace(j) : console.error(j), Q = !0;
      }
      return B.apply(this, arguments);
    }
    return Ae;
  };
  var b = {}, R = /^$/;
  if (sn.process.env.NODE_DEBUG) {
    var _ = sn.process.env.NODE_DEBUG;
    _ = _.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), R = new RegExp("^" + _ + "$", "i");
  }
  c.debuglog = function(B) {
    if (B = B.toUpperCase(), !b[B])
      if (R.test(B)) {
        var j = sn.process.pid;
        b[B] = function() {
          var Q = c.format.apply(c, arguments);
          console.error("%s %d: %s", B, j, Q);
        };
      } else
        b[B] = function() {
        };
    return b[B];
  };
  function y(B, j) {
    var Q = {
      seen: [],
      stylize: te
    };
    return arguments.length >= 3 && (Q.depth = arguments[2]), arguments.length >= 4 && (Q.colors = arguments[3]), Qe(j) ? Q.showHidden = j : j && c._extend(Q, j), ne(Q.showHidden) && (Q.showHidden = !1), ne(Q.depth) && (Q.depth = 2), ne(Q.colors) && (Q.colors = !1), ne(Q.customInspect) && (Q.customInspect = !0), Q.colors && (Q.stylize = le), Ye(Q, B, Q.depth);
  }
  c.inspect = y, y.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, y.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    // "name": intentionally not styling
    regexp: "red"
  };
  function le(B, j) {
    var Q = y.styles[j];
    return Q ? "\x1B[" + y.colors[Q][0] + "m" + B + "\x1B[" + y.colors[Q][1] + "m" : B;
  }
  function te(B, j) {
    return B;
  }
  function ee(B) {
    var j = {};
    return B.forEach(function(Q, Ae) {
      j[Q] = !0;
    }), j;
  }
  function Ye(B, j, Q) {
    if (B.customInspect && j && ke(j.inspect) && // Filter out the util module, it's inspect function is special
    j.inspect !== c.inspect && // Also filter out any prototype objects using the circular check.
    !(j.constructor && j.constructor.prototype === j)) {
      var Ae = j.inspect(Q, B);
      return $(Ae) || (Ae = Ye(B, Ae, Q)), Ae;
    }
    var x = ve(B, j);
    if (x)
      return x;
    var S = Object.keys(j), F = ee(S);
    if (B.showHidden && (S = Object.getOwnPropertyNames(j)), De(j) && (S.indexOf("message") >= 0 || S.indexOf("description") >= 0))
      return z(j);
    if (S.length === 0) {
      if (ke(j)) {
        var C = j.name ? ": " + j.name : "";
        return B.stylize("[Function" + C + "]", "special");
      }
      if (Z(j))
        return B.stylize(RegExp.prototype.toString.call(j), "regexp");
      if (we(j))
        return B.stylize(Date.prototype.toString.call(j), "date");
      if (De(j))
        return z(j);
    }
    var T = "", G = !1, ue = ["{", "}"];
    if (pe(j) && (G = !0, ue = ["[", "]"]), ke(j)) {
      var xe = j.name ? ": " + j.name : "";
      T = " [Function" + xe + "]";
    }
    if (Z(j) && (T = " " + RegExp.prototype.toString.call(j)), we(j) && (T = " " + Date.prototype.toUTCString.call(j)), De(j) && (T = " " + z(j)), S.length === 0 && (!G || j.length == 0))
      return ue[0] + T + ue[1];
    if (Q < 0)
      return Z(j) ? B.stylize(RegExp.prototype.toString.call(j), "regexp") : B.stylize("[Object]", "special");
    B.seen.push(j);
    var _e;
    return G ? _e = re(B, j, Q, F, S) : _e = S.map(function(at) {
      return ce(B, j, Q, F, at, G);
    }), B.seen.pop(), se(_e, T, ue);
  }
  function ve(B, j) {
    if (ne(j))
      return B.stylize("undefined", "undefined");
    if ($(j)) {
      var Q = "'" + JSON.stringify(j).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return B.stylize(Q, "string");
    }
    if (Je(j))
      return B.stylize("" + j, "number");
    if (Qe(j))
      return B.stylize("" + j, "boolean");
    if (Ie(j))
      return B.stylize("null", "null");
  }
  function z(B) {
    return "[" + Error.prototype.toString.call(B) + "]";
  }
  function re(B, j, Q, Ae, x) {
    for (var S = [], F = 0, C = j.length; F < C; ++F)
      Ee(j, String(F)) ? S.push(ce(
        B,
        j,
        Q,
        Ae,
        String(F),
        !0
      )) : S.push("");
    return x.forEach(function(T) {
      T.match(/^\d+$/) || S.push(ce(
        B,
        j,
        Q,
        Ae,
        T,
        !0
      ));
    }), S;
  }
  function ce(B, j, Q, Ae, x, S) {
    var F, C, T;
    if (T = Object.getOwnPropertyDescriptor(j, x) || { value: j[x] }, T.get ? T.set ? C = B.stylize("[Getter/Setter]", "special") : C = B.stylize("[Getter]", "special") : T.set && (C = B.stylize("[Setter]", "special")), Ee(Ae, x) || (F = "[" + x + "]"), C || (B.seen.indexOf(T.value) < 0 ? (Ie(Q) ? C = Ye(B, T.value, null) : C = Ye(B, T.value, Q - 1), C.indexOf(`
`) > -1 && (S ? C = C.split(`
`).map(function(G) {
      return "  " + G;
    }).join(`
`).slice(2) : C = `
` + C.split(`
`).map(function(G) {
      return "   " + G;
    }).join(`
`))) : C = B.stylize("[Circular]", "special")), ne(F)) {
      if (S && x.match(/^\d+$/))
        return C;
      F = JSON.stringify("" + x), F.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (F = F.slice(1, -1), F = B.stylize(F, "name")) : (F = F.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), F = B.stylize(F, "string"));
    }
    return F + ": " + C;
  }
  function se(B, j, Q) {
    var Ae = B.reduce(function(x, S) {
      return S.indexOf(`
`) >= 0, x + S.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return Ae > 60 ? Q[0] + (j === "" ? "" : j + `
 `) + " " + B.join(`,
  `) + " " + Q[1] : Q[0] + j + " " + B.join(", ") + " " + Q[1];
  }
  c.types = xF;
  function pe(B) {
    return Array.isArray(B);
  }
  c.isArray = pe;
  function Qe(B) {
    return typeof B == "boolean";
  }
  c.isBoolean = Qe;
  function Ie(B) {
    return B === null;
  }
  c.isNull = Ie;
  function et(B) {
    return B == null;
  }
  c.isNullOrUndefined = et;
  function Je(B) {
    return typeof B == "number";
  }
  c.isNumber = Je;
  function $(B) {
    return typeof B == "string";
  }
  c.isString = $;
  function O(B) {
    return typeof B == "symbol";
  }
  c.isSymbol = O;
  function ne(B) {
    return B === void 0;
  }
  c.isUndefined = ne;
  function Z(B) {
    return Pe(B) && ut(B) === "[object RegExp]";
  }
  c.isRegExp = Z, c.types.isRegExp = Z;
  function Pe(B) {
    return typeof B == "object" && B !== null;
  }
  c.isObject = Pe;
  function we(B) {
    return Pe(B) && ut(B) === "[object Date]";
  }
  c.isDate = we, c.types.isDate = we;
  function De(B) {
    return Pe(B) && (ut(B) === "[object Error]" || B instanceof Error);
  }
  c.isError = De, c.types.isNativeError = De;
  function ke(B) {
    return typeof B == "function";
  }
  c.isFunction = ke;
  function Ke(B) {
    return B === null || typeof B == "boolean" || typeof B == "number" || typeof B == "string" || typeof B == "symbol" || // ES6 symbol
    typeof B > "u";
  }
  c.isPrimitive = Ke, c.isBuffer = t5;
  function ut(B) {
    return Object.prototype.toString.call(B);
  }
  function xt(B) {
    return B < 10 ? "0" + B.toString(10) : B.toString(10);
  }
  var Ue = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function $t() {
    var B = /* @__PURE__ */ new Date(), j = [
      xt(B.getHours()),
      xt(B.getMinutes()),
      xt(B.getSeconds())
    ].join(":");
    return [B.getDate(), Ue[B.getMonth()], j].join(" ");
  }
  c.log = function() {
    console.log("%s - %s", $t(), c.format.apply(c, arguments));
  }, c.inherits = n5, c._extend = function(B, j) {
    if (!j || !Pe(j))
      return B;
    for (var Q = Object.keys(j), Ae = Q.length; Ae--; )
      B[Q[Ae]] = j[Q[Ae]];
    return B;
  };
  function Ee(B, j) {
    return Object.prototype.hasOwnProperty.call(B, j);
  }
  var H = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  c.promisify = function(j) {
    if (typeof j != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (H && j[H]) {
      var Q = j[H];
      if (typeof Q != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(Q, H, {
        value: Q,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Q;
    }
    function Q() {
      for (var Ae, x, S = new Promise(function(T, G) {
        Ae = T, x = G;
      }), F = [], C = 0; C < arguments.length; C++)
        F.push(arguments[C]);
      F.push(function(T, G) {
        T ? x(T) : Ae(G);
      });
      try {
        j.apply(this, F);
      } catch (T) {
        x(T);
      }
      return S;
    }
    return Object.setPrototypeOf(Q, Object.getPrototypeOf(j)), H && Object.defineProperty(Q, H, {
      value: Q,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(
      Q,
      p(j)
    );
  }, c.promisify.custom = H;
  function P(B, j) {
    if (!B) {
      var Q = new Error("Promise was rejected with a falsy value");
      Q.reason = B, B = Q;
    }
    return j(B);
  }
  function ge(B) {
    if (typeof B != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function j() {
      for (var Q = [], Ae = 0; Ae < arguments.length; Ae++)
        Q.push(arguments[Ae]);
      var x = Q.pop();
      if (typeof x != "function")
        throw new TypeError("The last argument must be of type Function");
      var S = this, F = function() {
        return x.apply(S, arguments);
      };
      B.apply(this, Q).then(
        function(C) {
          sn.process.nextTick(F.bind(null, null, C));
        },
        function(C) {
          sn.process.nextTick(P.bind(null, C, F));
        }
      );
    }
    return Object.setPrototypeOf(j, Object.getPrototypeOf(B)), Object.defineProperties(
      j,
      p(B)
    ), j;
  }
  c.callbackify = ge;
})(uf);
var $A;
function OF() {
  if ($A)
    return G1;
  $A = 1;
  function c($) {
    "@babel/helpers - typeof";
    return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
      return typeof O;
    } : function(O) {
      return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
    }, c($);
  }
  function p($, O) {
    for (var ne = 0; ne < O.length; ne++) {
      var Z = O[ne];
      Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty($, b(Z.key), Z);
    }
  }
  function m($, O, ne) {
    return O && p($.prototype, O), ne && p($, ne), Object.defineProperty($, "prototype", { writable: !1 }), $;
  }
  function b($) {
    var O = R($, "string");
    return c(O) === "symbol" ? O : String(O);
  }
  function R($, O) {
    if (c($) !== "object" || $ === null)
      return $;
    var ne = $[Symbol.toPrimitive];
    if (ne !== void 0) {
      var Z = ne.call($, O || "default");
      if (c(Z) !== "object")
        return Z;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (O === "string" ? String : Number)($);
  }
  function _($, O) {
    if (!($ instanceof O))
      throw new TypeError("Cannot call a class as a function");
  }
  function y($, O) {
    if (typeof O != "function" && O !== null)
      throw new TypeError("Super expression must either be null or a function");
    $.prototype = Object.create(O && O.prototype, { constructor: { value: $, writable: !0, configurable: !0 } }), Object.defineProperty($, "prototype", { writable: !1 }), O && le($, O);
  }
  function le($, O) {
    return le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(Z, Pe) {
      return Z.__proto__ = Pe, Z;
    }, le($, O);
  }
  function te($) {
    var O = ve();
    return function() {
      var Z = z($), Pe;
      if (O) {
        var we = z(this).constructor;
        Pe = Reflect.construct(Z, arguments, we);
      } else
        Pe = Z.apply(this, arguments);
      return ee(this, Pe);
    };
  }
  function ee($, O) {
    if (O && (c(O) === "object" || typeof O == "function"))
      return O;
    if (O !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return Ye($);
  }
  function Ye($) {
    if ($ === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return $;
  }
  function ve() {
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
  function z($) {
    return z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(ne) {
      return ne.__proto__ || Object.getPrototypeOf(ne);
    }, z($);
  }
  var re = {}, ce, se;
  function pe($, O, ne) {
    ne || (ne = Error);
    function Z(we, De, ke) {
      return typeof O == "string" ? O : O(we, De, ke);
    }
    var Pe = /* @__PURE__ */ function(we) {
      y(ke, we);
      var De = te(ke);
      function ke(Ke, ut, xt) {
        var Ue;
        return _(this, ke), Ue = De.call(this, Z(Ke, ut, xt)), Ue.code = $, Ue;
      }
      return m(ke);
    }(ne);
    re[$] = Pe;
  }
  function Qe($, O) {
    if (Array.isArray($)) {
      var ne = $.length;
      return $ = $.map(function(Z) {
        return String(Z);
      }), ne > 2 ? "one of ".concat(O, " ").concat($.slice(0, ne - 1).join(", "), ", or ") + $[ne - 1] : ne === 2 ? "one of ".concat(O, " ").concat($[0], " or ").concat($[1]) : "of ".concat(O, " ").concat($[0]);
    } else
      return "of ".concat(O, " ").concat(String($));
  }
  function Ie($, O, ne) {
    return $.substr(!ne || ne < 0 ? 0 : +ne, O.length) === O;
  }
  function et($, O, ne) {
    return (ne === void 0 || ne > $.length) && (ne = $.length), $.substring(ne - O.length, ne) === O;
  }
  function Je($, O, ne) {
    return typeof ne != "number" && (ne = 0), ne + O.length > $.length ? !1 : $.indexOf(O, ne) !== -1;
  }
  return pe("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), pe("ERR_INVALID_ARG_TYPE", function($, O, ne) {
    ce === void 0 && (ce = cD()), ce(typeof $ == "string", "'name' must be a string");
    var Z;
    typeof O == "string" && Ie(O, "not ") ? (Z = "must not be", O = O.replace(/^not /, "")) : Z = "must be";
    var Pe;
    if (et($, " argument"))
      Pe = "The ".concat($, " ").concat(Z, " ").concat(Qe(O, "type"));
    else {
      var we = Je($, ".") ? "property" : "argument";
      Pe = 'The "'.concat($, '" ').concat(we, " ").concat(Z, " ").concat(Qe(O, "type"));
    }
    return Pe += ". Received type ".concat(c(ne)), Pe;
  }, TypeError), pe("ERR_INVALID_ARG_VALUE", function($, O) {
    var ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    se === void 0 && (se = uf);
    var Z = se.inspect(O);
    return Z.length > 128 && (Z = "".concat(Z.slice(0, 128), "...")), "The argument '".concat($, "' ").concat(ne, ". Received ").concat(Z);
  }, TypeError), pe("ERR_INVALID_RETURN_VALUE", function($, O, ne) {
    var Z;
    return ne && ne.constructor && ne.constructor.name ? Z = "instance of ".concat(ne.constructor.name) : Z = "type ".concat(c(ne)), "Expected ".concat($, ' to be returned from the "').concat(O, '"') + " function but got ".concat(Z, ".");
  }, TypeError), pe("ERR_MISSING_ARGS", function() {
    for (var $ = arguments.length, O = new Array($), ne = 0; ne < $; ne++)
      O[ne] = arguments[ne];
    ce === void 0 && (ce = cD()), ce(O.length > 0, "At least one arg needs to be specified");
    var Z = "The ", Pe = O.length;
    switch (O = O.map(function(we) {
      return '"'.concat(we, '"');
    }), Pe) {
      case 1:
        Z += "".concat(O[0], " argument");
        break;
      case 2:
        Z += "".concat(O[0], " and ").concat(O[1], " arguments");
        break;
      default:
        Z += O.slice(0, Pe - 1).join(", "), Z += ", and ".concat(O[Pe - 1], " arguments");
        break;
    }
    return "".concat(Z, " must be specified");
  }, TypeError), G1.codes = re, G1;
}
var K1, HA;
function r5() {
  if (HA)
    return K1;
  HA = 1;
  function c(H, P) {
    var ge = Object.keys(H);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(H);
      P && (B = B.filter(function(j) {
        return Object.getOwnPropertyDescriptor(H, j).enumerable;
      })), ge.push.apply(ge, B);
    }
    return ge;
  }
  function p(H) {
    for (var P = 1; P < arguments.length; P++) {
      var ge = arguments[P] != null ? arguments[P] : {};
      P % 2 ? c(Object(ge), !0).forEach(function(B) {
        m(H, B, ge[B]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(ge)) : c(Object(ge)).forEach(function(B) {
        Object.defineProperty(H, B, Object.getOwnPropertyDescriptor(ge, B));
      });
    }
    return H;
  }
  function m(H, P, ge) {
    return P = y(P), P in H ? Object.defineProperty(H, P, { value: ge, enumerable: !0, configurable: !0, writable: !0 }) : H[P] = ge, H;
  }
  function b(H, P) {
    if (!(H instanceof P))
      throw new TypeError("Cannot call a class as a function");
  }
  function R(H, P) {
    for (var ge = 0; ge < P.length; ge++) {
      var B = P[ge];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(H, y(B.key), B);
    }
  }
  function _(H, P, ge) {
    return P && R(H.prototype, P), ge && R(H, ge), Object.defineProperty(H, "prototype", { writable: !1 }), H;
  }
  function y(H) {
    var P = le(H, "string");
    return Ie(P) === "symbol" ? P : String(P);
  }
  function le(H, P) {
    if (Ie(H) !== "object" || H === null)
      return H;
    var ge = H[Symbol.toPrimitive];
    if (ge !== void 0) {
      var B = ge.call(H, P || "default");
      if (Ie(B) !== "object")
        return B;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (P === "string" ? String : Number)(H);
  }
  function te(H, P) {
    if (typeof P != "function" && P !== null)
      throw new TypeError("Super expression must either be null or a function");
    H.prototype = Object.create(P && P.prototype, { constructor: { value: H, writable: !0, configurable: !0 } }), Object.defineProperty(H, "prototype", { writable: !1 }), P && pe(H, P);
  }
  function ee(H) {
    var P = ce();
    return function() {
      var B = Qe(H), j;
      if (P) {
        var Q = Qe(this).constructor;
        j = Reflect.construct(B, arguments, Q);
      } else
        j = B.apply(this, arguments);
      return Ye(this, j);
    };
  }
  function Ye(H, P) {
    if (P && (Ie(P) === "object" || typeof P == "function"))
      return P;
    if (P !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return ve(H);
  }
  function ve(H) {
    if (H === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return H;
  }
  function z(H) {
    var P = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return z = function(B) {
      if (B === null || !se(B))
        return B;
      if (typeof B != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof P < "u") {
        if (P.has(B))
          return P.get(B);
        P.set(B, j);
      }
      function j() {
        return re(B, arguments, Qe(this).constructor);
      }
      return j.prototype = Object.create(B.prototype, { constructor: { value: j, enumerable: !1, writable: !0, configurable: !0 } }), pe(j, B);
    }, z(H);
  }
  function re(H, P, ge) {
    return ce() ? re = Reflect.construct.bind() : re = function(j, Q, Ae) {
      var x = [null];
      x.push.apply(x, Q);
      var S = Function.bind.apply(j, x), F = new S();
      return Ae && pe(F, Ae.prototype), F;
    }, re.apply(null, arguments);
  }
  function ce() {
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
  function se(H) {
    return Function.toString.call(H).indexOf("[native code]") !== -1;
  }
  function pe(H, P) {
    return pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(B, j) {
      return B.__proto__ = j, B;
    }, pe(H, P);
  }
  function Qe(H) {
    return Qe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(ge) {
      return ge.__proto__ || Object.getPrototypeOf(ge);
    }, Qe(H);
  }
  function Ie(H) {
    "@babel/helpers - typeof";
    return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
      return typeof P;
    } : function(P) {
      return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
    }, Ie(H);
  }
  var et = uf, Je = et.inspect, $ = OF(), O = $.codes.ERR_INVALID_ARG_TYPE;
  function ne(H, P, ge) {
    return (ge === void 0 || ge > H.length) && (ge = H.length), H.substring(ge - P.length, ge) === P;
  }
  function Z(H, P) {
    if (P = Math.floor(P), H.length == 0 || P == 0)
      return "";
    var ge = H.length * P;
    for (P = Math.floor(Math.log(P) / Math.log(2)); P; )
      H += H, P--;
    return H += H.substring(0, ge - H.length), H;
  }
  var Pe = "", we = "", De = "", ke = "", Ke = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  }, ut = 10;
  function xt(H) {
    var P = Object.keys(H), ge = Object.create(Object.getPrototypeOf(H));
    return P.forEach(function(B) {
      ge[B] = H[B];
    }), Object.defineProperty(ge, "message", {
      value: H.message
    }), ge;
  }
  function Ue(H) {
    return Je(H, {
      compact: !1,
      customInspect: !1,
      depth: 1e3,
      maxArrayLength: 1 / 0,
      // Assert compares only enumerable properties (with a few exceptions).
      showHidden: !1,
      // Having a long line as error is better than wrapping the line for
      // comparison for now.
      // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
      // have meta information about the inspected properties (i.e., know where
      // in what line the property starts and ends).
      breakLength: 1 / 0,
      // Assert does not detect proxies currently.
      showProxy: !1,
      sorted: !0,
      // Inspect getters as we also check them when comparing entries.
      getters: !0
    });
  }
  function $t(H, P, ge) {
    var B = "", j = "", Q = 0, Ae = "", x = !1, S = Ue(H), F = S.split(`
`), C = Ue(P).split(`
`), T = 0, G = "";
    if (ge === "strictEqual" && Ie(H) === "object" && Ie(P) === "object" && H !== null && P !== null && (ge = "strictEqualObject"), F.length === 1 && C.length === 1 && F[0] !== C[0]) {
      var ue = F[0].length + C[0].length;
      if (ue <= ut) {
        if ((Ie(H) !== "object" || H === null) && (Ie(P) !== "object" || P === null) && (H !== 0 || P !== 0))
          return "".concat(Ke[ge], `

`) + "".concat(F[0], " !== ").concat(C[0], `
`);
      } else if (ge !== "strictEqualObject") {
        var xe = sn.process.stderr && sn.process.stderr.isTTY ? sn.process.stderr.columns : 80;
        if (ue < xe) {
          for (; F[0][T] === C[0][T]; )
            T++;
          T > 2 && (G = `
  `.concat(Z(" ", T), "^"), T = 0);
        }
      }
    }
    for (var _e = F[F.length - 1], at = C[C.length - 1]; _e === at && (T++ < 2 ? Ae = `
  `.concat(_e).concat(Ae) : B = _e, F.pop(), C.pop(), !(F.length === 0 || C.length === 0)); )
      _e = F[F.length - 1], at = C[C.length - 1];
    var Rt = Math.max(F.length, C.length);
    if (Rt === 0) {
      var tn = S.split(`
`);
      if (tn.length > 30)
        for (tn[26] = "".concat(Pe, "...").concat(ke); tn.length > 27; )
          tn.pop();
      return "".concat(Ke.notIdentical, `

`).concat(tn.join(`
`), `
`);
    }
    T > 3 && (Ae = `
`.concat(Pe, "...").concat(ke).concat(Ae), x = !0), B !== "" && (Ae = `
  `.concat(B).concat(Ae), B = "");
    var Gt = 0, de = Ke[ge] + `
`.concat(we, "+ actual").concat(ke, " ").concat(De, "- expected").concat(ke), Er = " ".concat(Pe, "...").concat(ke, " Lines skipped");
    for (T = 0; T < Rt; T++) {
      var cn = T - Q;
      if (F.length < T + 1)
        cn > 1 && T > 2 && (cn > 4 ? (j += `
`.concat(Pe, "...").concat(ke), x = !0) : cn > 3 && (j += `
  `.concat(C[T - 2]), Gt++), j += `
  `.concat(C[T - 1]), Gt++), Q = T, B += `
`.concat(De, "-").concat(ke, " ").concat(C[T]), Gt++;
      else if (C.length < T + 1)
        cn > 1 && T > 2 && (cn > 4 ? (j += `
`.concat(Pe, "...").concat(ke), x = !0) : cn > 3 && (j += `
  `.concat(F[T - 2]), Gt++), j += `
  `.concat(F[T - 1]), Gt++), Q = T, j += `
`.concat(we, "+").concat(ke, " ").concat(F[T]), Gt++;
      else {
        var or = C[T], yn = F[T], U = yn !== or && (!ne(yn, ",") || yn.slice(0, -1) !== or);
        U && ne(or, ",") && or.slice(0, -1) === yn && (U = !1, yn += ","), U ? (cn > 1 && T > 2 && (cn > 4 ? (j += `
`.concat(Pe, "...").concat(ke), x = !0) : cn > 3 && (j += `
  `.concat(F[T - 2]), Gt++), j += `
  `.concat(F[T - 1]), Gt++), Q = T, j += `
`.concat(we, "+").concat(ke, " ").concat(yn), B += `
`.concat(De, "-").concat(ke, " ").concat(or), Gt += 2) : (j += B, B = "", (cn === 1 || T === 0) && (j += `
  `.concat(yn), Gt++));
      }
      if (Gt > 20 && T < Rt - 2)
        return "".concat(de).concat(Er, `
`).concat(j, `
`).concat(Pe, "...").concat(ke).concat(B, `
`) + "".concat(Pe, "...").concat(ke);
    }
    return "".concat(de).concat(x ? Er : "", `
`).concat(j).concat(B).concat(Ae).concat(G);
  }
  var Ee = /* @__PURE__ */ function(H, P) {
    te(B, H);
    var ge = ee(B);
    function B(j) {
      var Q;
      if (b(this, B), Ie(j) !== "object" || j === null)
        throw new O("options", "Object", j);
      var Ae = j.message, x = j.operator, S = j.stackStartFn, F = j.actual, C = j.expected, T = Error.stackTraceLimit;
      if (Error.stackTraceLimit = 0, Ae != null)
        Q = ge.call(this, String(Ae));
      else if (sn.process.stderr && sn.process.stderr.isTTY && (sn.process.stderr && sn.process.stderr.getColorDepth && sn.process.stderr.getColorDepth() !== 1 ? (Pe = "\x1B[34m", we = "\x1B[32m", ke = "\x1B[39m", De = "\x1B[31m") : (Pe = "", we = "", ke = "", De = "")), Ie(F) === "object" && F !== null && Ie(C) === "object" && C !== null && "stack" in F && F instanceof Error && "stack" in C && C instanceof Error && (F = xt(F), C = xt(C)), x === "deepStrictEqual" || x === "strictEqual")
        Q = ge.call(this, $t(F, C, x));
      else if (x === "notDeepStrictEqual" || x === "notStrictEqual") {
        var G = Ke[x], ue = Ue(F).split(`
`);
        if (x === "notStrictEqual" && Ie(F) === "object" && F !== null && (G = Ke.notStrictEqualObject), ue.length > 30)
          for (ue[26] = "".concat(Pe, "...").concat(ke); ue.length > 27; )
            ue.pop();
        ue.length === 1 ? Q = ge.call(this, "".concat(G, " ").concat(ue[0])) : Q = ge.call(this, "".concat(G, `

`).concat(ue.join(`
`), `
`));
      } else {
        var xe = Ue(F), _e = "", at = Ke[x];
        x === "notDeepEqual" || x === "notEqual" ? (xe = "".concat(Ke[x], `

`).concat(xe), xe.length > 1024 && (xe = "".concat(xe.slice(0, 1021), "..."))) : (_e = "".concat(Ue(C)), xe.length > 512 && (xe = "".concat(xe.slice(0, 509), "...")), _e.length > 512 && (_e = "".concat(_e.slice(0, 509), "...")), x === "deepEqual" || x === "equal" ? xe = "".concat(at, `

`).concat(xe, `

should equal

`) : _e = " ".concat(x, " ").concat(_e)), Q = ge.call(this, "".concat(xe).concat(_e));
      }
      return Error.stackTraceLimit = T, Q.generatedMessage = !Ae, Object.defineProperty(ve(Q), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Q.code = "ERR_ASSERTION", Q.actual = F, Q.expected = C, Q.operator = x, Error.captureStackTrace && Error.captureStackTrace(ve(Q), S), Q.stack, Q.name = "AssertionError", Ye(Q);
    }
    return _(B, [{
      key: "toString",
      value: function() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: P,
      value: function(Q, Ae) {
        return Je(this, p(p({}, Ae), {}, {
          customInspect: !1,
          depth: 0
        }));
      }
    }]), B;
  }(/* @__PURE__ */ z(Error), Je.custom);
  return K1 = Ee, K1;
}
var X1, IA;
function NF() {
  return IA || (IA = 1, X1 = function(p) {
    return p !== p;
  }), X1;
}
var J1, VA;
function kF() {
  if (VA)
    return J1;
  VA = 1;
  var c = NF();
  return J1 = function() {
    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : c;
  }, J1;
}
var Z1, qA;
function u5() {
  if (qA)
    return Z1;
  qA = 1;
  var c = ZA(), p = kF();
  return Z1 = function() {
    var b = p();
    return c(Number, { isNaN: b }, {
      isNaN: function() {
        return Number.isNaN !== b;
      }
    }), b;
  }, Z1;
}
var eD, GA;
function a5() {
  if (GA)
    return eD;
  GA = 1;
  var c = JA, p = ZA(), m = NF(), b = kF(), R = u5(), _ = c(b(), Number);
  return p(_, {
    getPolyfill: b,
    implementation: m,
    shim: R
  }), eD = _, eD;
}
var tD, YA;
function i5() {
  if (YA)
    return tD;
  YA = 1;
  function c(U, W) {
    return _(U) || R(U, W) || m(U, W) || p();
  }
  function p() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function m(U, W) {
    if (U) {
      if (typeof U == "string")
        return b(U, W);
      var Te = Object.prototype.toString.call(U).slice(8, -1);
      if (Te === "Object" && U.constructor && (Te = U.constructor.name), Te === "Map" || Te === "Set")
        return Array.from(U);
      if (Te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Te))
        return b(U, W);
    }
  }
  function b(U, W) {
    (W == null || W > U.length) && (W = U.length);
    for (var Te = 0, Oe = new Array(W); Te < W; Te++)
      Oe[Te] = U[Te];
    return Oe;
  }
  function R(U, W) {
    var Te = U == null ? null : typeof Symbol < "u" && U[Symbol.iterator] || U["@@iterator"];
    if (Te != null) {
      var Oe, $e, yt, ct, he = [], be = !0, nt = !1;
      try {
        if (yt = (Te = Te.call(U)).next, W === 0) {
          if (Object(Te) !== Te)
            return;
          be = !1;
        } else
          for (; !(be = (Oe = yt.call(Te)).done) && (he.push(Oe.value), he.length !== W); be = !0)
            ;
      } catch (gt) {
        nt = !0, $e = gt;
      } finally {
        try {
          if (!be && Te.return != null && (ct = Te.return(), Object(ct) !== ct))
            return;
        } finally {
          if (nt)
            throw $e;
        }
      }
      return he;
    }
  }
  function _(U) {
    if (Array.isArray(U))
      return U;
  }
  function y(U) {
    "@babel/helpers - typeof";
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(W) {
      return typeof W;
    } : function(W) {
      return W && typeof Symbol == "function" && W.constructor === Symbol && W !== Symbol.prototype ? "symbol" : typeof W;
    }, y(U);
  }
  var le = /a/g.flags !== void 0, te = function(W) {
    var Te = [];
    return W.forEach(function(Oe) {
      return Te.push(Oe);
    }), Te;
  }, ee = function(W) {
    var Te = [];
    return W.forEach(function(Oe, $e) {
      return Te.push([$e, Oe]);
    }), Te;
  }, Ye = Object.is ? Object.is : NR(), ve = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
  }, z = Number.isNaN ? Number.isNaN : a5();
  function re(U) {
    return U.call.bind(U);
  }
  var ce = re(Object.prototype.hasOwnProperty), se = re(Object.prototype.propertyIsEnumerable), pe = re(Object.prototype.toString), Qe = uf.types, Ie = Qe.isAnyArrayBuffer, et = Qe.isArrayBufferView, Je = Qe.isDate, $ = Qe.isMap, O = Qe.isRegExp, ne = Qe.isSet, Z = Qe.isNativeError, Pe = Qe.isBoxedPrimitive, we = Qe.isNumberObject, De = Qe.isStringObject, ke = Qe.isBooleanObject, Ke = Qe.isBigIntObject, ut = Qe.isSymbolObject, xt = Qe.isFloat32Array, Ue = Qe.isFloat64Array;
  function $t(U) {
    if (U.length === 0 || U.length > 10)
      return !0;
    for (var W = 0; W < U.length; W++) {
      var Te = U.charCodeAt(W);
      if (Te < 48 || Te > 57)
        return !0;
    }
    return U.length === 10 && U >= Math.pow(2, 32);
  }
  function Ee(U) {
    return Object.keys(U).filter($t).concat(ve(U).filter(Object.prototype.propertyIsEnumerable.bind(U)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  function H(U, W) {
    if (U === W)
      return 0;
    for (var Te = U.length, Oe = W.length, $e = 0, yt = Math.min(Te, Oe); $e < yt; ++$e)
      if (U[$e] !== W[$e]) {
        Te = U[$e], Oe = W[$e];
        break;
      }
    return Te < Oe ? -1 : Oe < Te ? 1 : 0;
  }
  var P = !0, ge = !1, B = 0, j = 1, Q = 2, Ae = 3;
  function x(U, W) {
    return le ? U.source === W.source && U.flags === W.flags : RegExp.prototype.toString.call(U) === RegExp.prototype.toString.call(W);
  }
  function S(U, W) {
    if (U.byteLength !== W.byteLength)
      return !1;
    for (var Te = 0; Te < U.byteLength; Te++)
      if (U[Te] !== W[Te])
        return !1;
    return !0;
  }
  function F(U, W) {
    return U.byteLength !== W.byteLength ? !1 : H(new Uint8Array(U.buffer, U.byteOffset, U.byteLength), new Uint8Array(W.buffer, W.byteOffset, W.byteLength)) === 0;
  }
  function C(U, W) {
    return U.byteLength === W.byteLength && H(new Uint8Array(U), new Uint8Array(W)) === 0;
  }
  function T(U, W) {
    return we(U) ? we(W) && Ye(Number.prototype.valueOf.call(U), Number.prototype.valueOf.call(W)) : De(U) ? De(W) && String.prototype.valueOf.call(U) === String.prototype.valueOf.call(W) : ke(U) ? ke(W) && Boolean.prototype.valueOf.call(U) === Boolean.prototype.valueOf.call(W) : Ke(U) ? Ke(W) && BigInt.prototype.valueOf.call(U) === BigInt.prototype.valueOf.call(W) : ut(W) && Symbol.prototype.valueOf.call(U) === Symbol.prototype.valueOf.call(W);
  }
  function G(U, W, Te, Oe) {
    if (U === W)
      return U !== 0 ? !0 : Te ? Ye(U, W) : !0;
    if (Te) {
      if (y(U) !== "object")
        return typeof U == "number" && z(U) && z(W);
      if (y(W) !== "object" || U === null || W === null || Object.getPrototypeOf(U) !== Object.getPrototypeOf(W))
        return !1;
    } else {
      if (U === null || y(U) !== "object")
        return W === null || y(W) !== "object" ? U == W : !1;
      if (W === null || y(W) !== "object")
        return !1;
    }
    var $e = pe(U), yt = pe(W);
    if ($e !== yt)
      return !1;
    if (Array.isArray(U)) {
      if (U.length !== W.length)
        return !1;
      var ct = Ee(U), he = Ee(W);
      return ct.length !== he.length ? !1 : xe(U, W, Te, Oe, j, ct);
    }
    if ($e === "[object Object]" && (!$(U) && $(W) || !ne(U) && ne(W)))
      return !1;
    if (Je(U)) {
      if (!Je(W) || Date.prototype.getTime.call(U) !== Date.prototype.getTime.call(W))
        return !1;
    } else if (O(U)) {
      if (!O(W) || !x(U, W))
        return !1;
    } else if (Z(U) || U instanceof Error) {
      if (U.message !== W.message || U.name !== W.name)
        return !1;
    } else if (et(U)) {
      if (!Te && (xt(U) || Ue(U))) {
        if (!S(U, W))
          return !1;
      } else if (!F(U, W))
        return !1;
      var be = Ee(U), nt = Ee(W);
      return be.length !== nt.length ? !1 : xe(U, W, Te, Oe, B, be);
    } else {
      if (ne(U))
        return !ne(W) || U.size !== W.size ? !1 : xe(U, W, Te, Oe, Q);
      if ($(U))
        return !$(W) || U.size !== W.size ? !1 : xe(U, W, Te, Oe, Ae);
      if (Ie(U)) {
        if (!C(U, W))
          return !1;
      } else if (Pe(U) && !T(U, W))
        return !1;
    }
    return xe(U, W, Te, Oe, B);
  }
  function ue(U, W) {
    return W.filter(function(Te) {
      return se(U, Te);
    });
  }
  function xe(U, W, Te, Oe, $e, yt) {
    if (arguments.length === 5) {
      yt = Object.keys(U);
      var ct = Object.keys(W);
      if (yt.length !== ct.length)
        return !1;
    }
    for (var he = 0; he < yt.length; he++)
      if (!ce(W, yt[he]))
        return !1;
    if (Te && arguments.length === 5) {
      var be = ve(U);
      if (be.length !== 0) {
        var nt = 0;
        for (he = 0; he < be.length; he++) {
          var gt = be[he];
          if (se(U, gt)) {
            if (!se(W, gt))
              return !1;
            yt.push(gt), nt++;
          } else if (se(W, gt))
            return !1;
        }
        var Ht = ve(W);
        if (be.length !== Ht.length && ue(W, Ht).length !== nt)
          return !1;
      } else {
        var nn = ve(W);
        if (nn.length !== 0 && ue(W, nn).length !== 0)
          return !1;
      }
    }
    if (yt.length === 0 && ($e === B || $e === j && U.length === 0 || U.size === 0))
      return !0;
    if (Oe === void 0)
      Oe = {
        val1: /* @__PURE__ */ new Map(),
        val2: /* @__PURE__ */ new Map(),
        position: 0
      };
    else {
      var Yt = Oe.val1.get(U);
      if (Yt !== void 0) {
        var fn = Oe.val2.get(W);
        if (fn !== void 0)
          return Yt === fn;
      }
      Oe.position++;
    }
    Oe.val1.set(U, Oe.position), Oe.val2.set(W, Oe.position);
    var Ut = cn(U, W, Te, yt, Oe, $e);
    return Oe.val1.delete(U), Oe.val2.delete(W), Ut;
  }
  function _e(U, W, Te, Oe) {
    for (var $e = te(U), yt = 0; yt < $e.length; yt++) {
      var ct = $e[yt];
      if (G(W, ct, Te, Oe))
        return U.delete(ct), !0;
    }
    return !1;
  }
  function at(U) {
    switch (y(U)) {
      case "undefined":
        return null;
      case "object":
        return;
      case "symbol":
        return !1;
      case "string":
        U = +U;
      case "number":
        if (z(U))
          return !1;
    }
    return !0;
  }
  function Rt(U, W, Te) {
    var Oe = at(Te);
    return Oe ?? (W.has(Oe) && !U.has(Oe));
  }
  function tn(U, W, Te, Oe, $e) {
    var yt = at(Te);
    if (yt != null)
      return yt;
    var ct = W.get(yt);
    return ct === void 0 && !W.has(yt) || !G(Oe, ct, !1, $e) ? !1 : !U.has(yt) && G(Oe, ct, !1, $e);
  }
  function Gt(U, W, Te, Oe) {
    for (var $e = null, yt = te(U), ct = 0; ct < yt.length; ct++) {
      var he = yt[ct];
      if (y(he) === "object" && he !== null)
        $e === null && ($e = /* @__PURE__ */ new Set()), $e.add(he);
      else if (!W.has(he)) {
        if (Te || !Rt(U, W, he))
          return !1;
        $e === null && ($e = /* @__PURE__ */ new Set()), $e.add(he);
      }
    }
    if ($e !== null) {
      for (var be = te(W), nt = 0; nt < be.length; nt++) {
        var gt = be[nt];
        if (y(gt) === "object" && gt !== null) {
          if (!_e($e, gt, Te, Oe))
            return !1;
        } else if (!Te && !U.has(gt) && !_e($e, gt, Te, Oe))
          return !1;
      }
      return $e.size === 0;
    }
    return !0;
  }
  function de(U, W, Te, Oe, $e, yt) {
    for (var ct = te(U), he = 0; he < ct.length; he++) {
      var be = ct[he];
      if (G(Te, be, $e, yt) && G(Oe, W.get(be), $e, yt))
        return U.delete(be), !0;
    }
    return !1;
  }
  function Er(U, W, Te, Oe) {
    for (var $e = null, yt = ee(U), ct = 0; ct < yt.length; ct++) {
      var he = c(yt[ct], 2), be = he[0], nt = he[1];
      if (y(be) === "object" && be !== null)
        $e === null && ($e = /* @__PURE__ */ new Set()), $e.add(be);
      else {
        var gt = W.get(be);
        if (gt === void 0 && !W.has(be) || !G(nt, gt, Te, Oe)) {
          if (Te || !tn(U, W, be, nt, Oe))
            return !1;
          $e === null && ($e = /* @__PURE__ */ new Set()), $e.add(be);
        }
      }
    }
    if ($e !== null) {
      for (var Ht = ee(W), nn = 0; nn < Ht.length; nn++) {
        var Yt = c(Ht[nn], 2), fn = Yt[0], Ut = Yt[1];
        if (y(fn) === "object" && fn !== null) {
          if (!de($e, U, fn, Ut, Te, Oe))
            return !1;
        } else if (!Te && (!U.has(fn) || !G(U.get(fn), Ut, !1, Oe)) && !de($e, U, fn, Ut, !1, Oe))
          return !1;
      }
      return $e.size === 0;
    }
    return !0;
  }
  function cn(U, W, Te, Oe, $e, yt) {
    var ct = 0;
    if (yt === Q) {
      if (!Gt(U, W, Te, $e))
        return !1;
    } else if (yt === Ae) {
      if (!Er(U, W, Te, $e))
        return !1;
    } else if (yt === j)
      for (; ct < U.length; ct++)
        if (ce(U, ct)) {
          if (!ce(W, ct) || !G(U[ct], W[ct], Te, $e))
            return !1;
        } else {
          if (ce(W, ct))
            return !1;
          for (var he = Object.keys(U); ct < he.length; ct++) {
            var be = he[ct];
            if (!ce(W, be) || !G(U[be], W[be], Te, $e))
              return !1;
          }
          return he.length === Object.keys(W).length;
        }
    for (ct = 0; ct < Oe.length; ct++) {
      var nt = Oe[ct];
      if (!G(U[nt], W[nt], Te, $e))
        return !1;
    }
    return !0;
  }
  function or(U, W) {
    return G(U, W, ge);
  }
  function yn(U, W) {
    return G(U, W, P);
  }
  return tD = {
    isDeepEqual: or,
    isDeepStrictEqual: yn
  }, tD;
}
var QA;
function cD() {
  if (QA)
    return q1.exports;
  QA = 1;
  function c(S) {
    "@babel/helpers - typeof";
    return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(F) {
      return typeof F;
    } : function(F) {
      return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
    }, c(S);
  }
  function p(S, F) {
    for (var C = 0; C < F.length; C++) {
      var T = F[C];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(S, b(T.key), T);
    }
  }
  function m(S, F, C) {
    return F && p(S.prototype, F), C && p(S, C), Object.defineProperty(S, "prototype", { writable: !1 }), S;
  }
  function b(S) {
    var F = R(S, "string");
    return c(F) === "symbol" ? F : String(F);
  }
  function R(S, F) {
    if (c(S) !== "object" || S === null)
      return S;
    var C = S[Symbol.toPrimitive];
    if (C !== void 0) {
      var T = C.call(S, F || "default");
      if (c(T) !== "object")
        return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (F === "string" ? String : Number)(S);
  }
  function _(S, F) {
    if (!(S instanceof F))
      throw new TypeError("Cannot call a class as a function");
  }
  var y = OF(), le = y.codes, te = le.ERR_AMBIGUOUS_ARGUMENT, ee = le.ERR_INVALID_ARG_TYPE, Ye = le.ERR_INVALID_ARG_VALUE, ve = le.ERR_INVALID_RETURN_VALUE, z = le.ERR_MISSING_ARGS, re = r5(), ce = uf, se = ce.inspect, pe = uf.types, Qe = pe.isPromise, Ie = pe.isRegExp, et = kR(), Je = MR(), $ = XA("RegExp.prototype.test"), O, ne;
  function Z() {
    var S = i5();
    O = S.isDeepEqual, ne = S.isDeepStrictEqual;
  }
  var Pe = !1, we = q1.exports = xt, De = {};
  function ke(S) {
    throw S.message instanceof Error ? S.message : new re(S);
  }
  function Ke(S, F, C, T, G) {
    var ue = arguments.length, xe;
    if (ue === 0)
      xe = "Failed";
    else if (ue === 1)
      C = S, S = void 0;
    else {
      if (Pe === !1) {
        Pe = !0;
        var _e = sn.process.emitWarning ? sn.process.emitWarning : console.warn.bind(console);
        _e("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }
      ue === 2 && (T = "!=");
    }
    if (C instanceof Error)
      throw C;
    var at = {
      actual: S,
      expected: F,
      operator: T === void 0 ? "fail" : T,
      stackStartFn: G || Ke
    };
    C !== void 0 && (at.message = C);
    var Rt = new re(at);
    throw xe && (Rt.message = xe, Rt.generatedMessage = !0), Rt;
  }
  we.fail = Ke, we.AssertionError = re;
  function ut(S, F, C, T) {
    if (!C) {
      var G = !1;
      if (F === 0)
        G = !0, T = "No value argument passed to `assert.ok()`";
      else if (T instanceof Error)
        throw T;
      var ue = new re({
        actual: C,
        expected: !0,
        message: T,
        operator: "==",
        stackStartFn: S
      });
      throw ue.generatedMessage = G, ue;
    }
  }
  function xt() {
    for (var S = arguments.length, F = new Array(S), C = 0; C < S; C++)
      F[C] = arguments[C];
    ut.apply(void 0, [xt, F.length].concat(F));
  }
  we.ok = xt, we.equal = function S(F, C, T) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    F != C && ke({
      actual: F,
      expected: C,
      message: T,
      operator: "==",
      stackStartFn: S
    });
  }, we.notEqual = function S(F, C, T) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    F == C && ke({
      actual: F,
      expected: C,
      message: T,
      operator: "!=",
      stackStartFn: S
    });
  }, we.deepEqual = function S(F, C, T) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    O === void 0 && Z(), O(F, C) || ke({
      actual: F,
      expected: C,
      message: T,
      operator: "deepEqual",
      stackStartFn: S
    });
  }, we.notDeepEqual = function S(F, C, T) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    O === void 0 && Z(), O(F, C) && ke({
      actual: F,
      expected: C,
      message: T,
      operator: "notDeepEqual",
      stackStartFn: S
    });
  }, we.deepStrictEqual = function S(F, C, T) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    O === void 0 && Z(), ne(F, C) || ke({
      actual: F,
      expected: C,
      message: T,
      operator: "deepStrictEqual",
      stackStartFn: S
    });
  }, we.notDeepStrictEqual = Ue;
  function Ue(S, F, C) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    O === void 0 && Z(), ne(S, F) && ke({
      actual: S,
      expected: F,
      message: C,
      operator: "notDeepStrictEqual",
      stackStartFn: Ue
    });
  }
  we.strictEqual = function S(F, C, T) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    Je(F, C) || ke({
      actual: F,
      expected: C,
      message: T,
      operator: "strictEqual",
      stackStartFn: S
    });
  }, we.notStrictEqual = function S(F, C, T) {
    if (arguments.length < 2)
      throw new z("actual", "expected");
    Je(F, C) && ke({
      actual: F,
      expected: C,
      message: T,
      operator: "notStrictEqual",
      stackStartFn: S
    });
  };
  var $t = /* @__PURE__ */ m(function S(F, C, T) {
    var G = this;
    _(this, S), C.forEach(function(ue) {
      ue in F && (T !== void 0 && typeof T[ue] == "string" && Ie(F[ue]) && $(F[ue], T[ue]) ? G[ue] = T[ue] : G[ue] = F[ue]);
    });
  });
  function Ee(S, F, C, T, G, ue) {
    if (!(C in S) || !ne(S[C], F[C])) {
      if (!T) {
        var xe = new $t(S, G), _e = new $t(F, G, S), at = new re({
          actual: xe,
          expected: _e,
          operator: "deepStrictEqual",
          stackStartFn: ue
        });
        throw at.actual = S, at.expected = F, at.operator = ue.name, at;
      }
      ke({
        actual: S,
        expected: F,
        message: T,
        operator: ue.name,
        stackStartFn: ue
      });
    }
  }
  function H(S, F, C, T) {
    if (typeof F != "function") {
      if (Ie(F))
        return $(F, S);
      if (arguments.length === 2)
        throw new ee("expected", ["Function", "RegExp"], F);
      if (c(S) !== "object" || S === null) {
        var G = new re({
          actual: S,
          expected: F,
          message: C,
          operator: "deepStrictEqual",
          stackStartFn: T
        });
        throw G.operator = T.name, G;
      }
      var ue = Object.keys(F);
      if (F instanceof Error)
        ue.push("name", "message");
      else if (ue.length === 0)
        throw new Ye("error", F, "may not be an empty object");
      return O === void 0 && Z(), ue.forEach(function(xe) {
        typeof S[xe] == "string" && Ie(F[xe]) && $(F[xe], S[xe]) || Ee(S, F, xe, C, ue, T);
      }), !0;
    }
    return F.prototype !== void 0 && S instanceof F ? !0 : Error.isPrototypeOf(F) ? !1 : F.call({}, S) === !0;
  }
  function P(S) {
    if (typeof S != "function")
      throw new ee("fn", "Function", S);
    try {
      S();
    } catch (F) {
      return F;
    }
    return De;
  }
  function ge(S) {
    return Qe(S) || S !== null && c(S) === "object" && typeof S.then == "function" && typeof S.catch == "function";
  }
  function B(S) {
    return Promise.resolve().then(function() {
      var F;
      if (typeof S == "function") {
        if (F = S(), !ge(F))
          throw new ve("instance of Promise", "promiseFn", F);
      } else if (ge(S))
        F = S;
      else
        throw new ee("promiseFn", ["Function", "Promise"], S);
      return Promise.resolve().then(function() {
        return F;
      }).then(function() {
        return De;
      }).catch(function(C) {
        return C;
      });
    });
  }
  function j(S, F, C, T) {
    if (typeof C == "string") {
      if (arguments.length === 4)
        throw new ee("error", ["Object", "Error", "Function", "RegExp"], C);
      if (c(F) === "object" && F !== null) {
        if (F.message === C)
          throw new te("error/message", 'The error message "'.concat(F.message, '" is identical to the message.'));
      } else if (F === C)
        throw new te("error/message", 'The error "'.concat(F, '" is identical to the message.'));
      T = C, C = void 0;
    } else if (C != null && c(C) !== "object" && typeof C != "function")
      throw new ee("error", ["Object", "Error", "Function", "RegExp"], C);
    if (F === De) {
      var G = "";
      C && C.name && (G += " (".concat(C.name, ")")), G += T ? ": ".concat(T) : ".";
      var ue = S.name === "rejects" ? "rejection" : "exception";
      ke({
        actual: void 0,
        expected: C,
        operator: S.name,
        message: "Missing expected ".concat(ue).concat(G),
        stackStartFn: S
      });
    }
    if (C && !H(F, C, T, S))
      throw F;
  }
  function Q(S, F, C, T) {
    if (F !== De) {
      if (typeof C == "string" && (T = C, C = void 0), !C || H(F, C)) {
        var G = T ? ": ".concat(T) : ".", ue = S.name === "doesNotReject" ? "rejection" : "exception";
        ke({
          actual: F,
          expected: C,
          operator: S.name,
          message: "Got unwanted ".concat(ue).concat(G, `
`) + 'Actual message: "'.concat(F && F.message, '"'),
          stackStartFn: S
        });
      }
      throw F;
    }
  }
  we.throws = function S(F) {
    for (var C = arguments.length, T = new Array(C > 1 ? C - 1 : 0), G = 1; G < C; G++)
      T[G - 1] = arguments[G];
    j.apply(void 0, [S, P(F)].concat(T));
  }, we.rejects = function S(F) {
    for (var C = arguments.length, T = new Array(C > 1 ? C - 1 : 0), G = 1; G < C; G++)
      T[G - 1] = arguments[G];
    return B(F).then(function(ue) {
      return j.apply(void 0, [S, ue].concat(T));
    });
  }, we.doesNotThrow = function S(F) {
    for (var C = arguments.length, T = new Array(C > 1 ? C - 1 : 0), G = 1; G < C; G++)
      T[G - 1] = arguments[G];
    Q.apply(void 0, [S, P(F)].concat(T));
  }, we.doesNotReject = function S(F) {
    for (var C = arguments.length, T = new Array(C > 1 ? C - 1 : 0), G = 1; G < C; G++)
      T[G - 1] = arguments[G];
    return B(F).then(function(ue) {
      return Q.apply(void 0, [S, ue].concat(T));
    });
  }, we.ifError = function S(F) {
    if (F != null) {
      var C = "ifError got unwanted exception: ";
      c(F) === "object" && typeof F.message == "string" ? F.message.length === 0 && F.constructor ? C += F.constructor.name : C += F.message : C += se(F);
      var T = new re({
        actual: F,
        expected: null,
        operator: "ifError",
        message: C,
        stackStartFn: S
      }), G = F.stack;
      if (typeof G == "string") {
        var ue = G.split(`
`);
        ue.shift();
        for (var xe = T.stack.split(`
`), _e = 0; _e < ue.length; _e++) {
          var at = xe.indexOf(ue[_e]);
          if (at !== -1) {
            xe = xe.slice(0, at);
            break;
          }
        }
        T.stack = "".concat(xe.join(`
`), `
`).concat(ue.join(`
`));
      }
      throw T;
    }
  };
  function Ae(S, F, C, T, G) {
    if (!Ie(F))
      throw new ee("regexp", "RegExp", F);
    var ue = G === "match";
    if (typeof S != "string" || $(F, S) !== ue) {
      if (C instanceof Error)
        throw C;
      var xe = !C;
      C = C || (typeof S != "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(c(S), " (").concat(se(S), ")") : (ue ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(se(F), `. Input:

`).concat(se(S), `
`));
      var _e = new re({
        actual: S,
        expected: F,
        message: C,
        operator: G,
        stackStartFn: T
      });
      throw _e.generatedMessage = xe, _e;
    }
  }
  we.match = function S(F, C, T) {
    Ae(F, C, T, S, "match");
  }, we.doesNotMatch = function S(F, C, T) {
    Ae(F, C, T, S, "doesNotMatch");
  };
  function x() {
    for (var S = arguments.length, F = new Array(S), C = 0; C < S; C++)
      F[C] = arguments[C];
    ut.apply(void 0, [x, F.length].concat(F));
  }
  return we.strict = et(x, we, {
    equal: we.strictEqual,
    deepEqual: we.deepStrictEqual,
    notEqual: we.notStrictEqual,
    notDeepEqual: we.notDeepStrictEqual
  }), we.strict.strict = we.strict, q1.exports;
}
(function() {
  var c;
  c = Hk.version, nf.VERSION = c;
  function p(b) {
    this.name = "DoctrineError", this.message = b;
  }
  p.prototype = function() {
    var b = function() {
    };
    return b.prototype = Error.prototype, new b();
  }(), p.prototype.constructor = p, nf.DoctrineError = p;
  function m(b) {
    throw new p(b);
  }
  nf.throwError = m, nf.assert = cD();
})();
(function() {
  var c, p, m, b, R, _, y, le, te, ee, Ye, ve;
  te = Mp, ee = nf, c = {
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
  }, p = {
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
  function z(x) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(x)) === -1 && !te.code.isWhiteSpace(x) && !te.code.isLineTerminator(x);
  }
  function re(x, S, F, C) {
    this._previous = x, this._index = S, this._token = F, this._value = C;
  }
  re.prototype.restore = function() {
    _ = this._previous, R = this._index, y = this._token, le = this._value;
  }, re.save = function() {
    return new re(_, R, y, le);
  };
  function ce(x, S) {
    return ve && (x.range = [S[0] + Ye, S[1] + Ye]), x;
  }
  function se() {
    var x = m.charAt(R);
    return R += 1, x;
  }
  function pe(x) {
    var S, F, C, T = 0;
    for (F = x === "u" ? 4 : 2, S = 0; S < F; ++S)
      if (R < b && te.code.isHexDigit(m.charCodeAt(R)))
        C = se(), T = T * 16 + "0123456789abcdef".indexOf(C.toLowerCase());
      else
        return "";
    return String.fromCharCode(T);
  }
  function Qe() {
    var x = "", S, F, C, T, G;
    for (S = m.charAt(R), ++R; R < b; )
      if (F = se(), F === S) {
        S = "";
        break;
      } else if (F === "\\")
        if (F = se(), te.code.isLineTerminator(F.charCodeAt(0)))
          F === "\r" && m.charCodeAt(R) === 10 && ++R;
        else
          switch (F) {
            case "n":
              x += `
`;
              break;
            case "r":
              x += "\r";
              break;
            case "t":
              x += "	";
              break;
            case "u":
            case "x":
              G = R, T = pe(F), T ? x += T : (R = G, x += F);
              break;
            case "b":
              x += "\b";
              break;
            case "f":
              x += "\f";
              break;
            case "v":
              x += "\v";
              break;
            default:
              te.code.isOctalDigit(F.charCodeAt(0)) ? (C = "01234567".indexOf(F), R < b && te.code.isOctalDigit(m.charCodeAt(R)) && (C = C * 8 + "01234567".indexOf(se()), "0123".indexOf(F) >= 0 && R < b && te.code.isOctalDigit(m.charCodeAt(R)) && (C = C * 8 + "01234567".indexOf(se()))), x += String.fromCharCode(C)) : x += F;
              break;
          }
      else {
        if (te.code.isLineTerminator(F.charCodeAt(0)))
          break;
        x += F;
      }
    return S !== "" && ee.throwError("unexpected quote"), le = x, p.STRING;
  }
  function Ie() {
    var x, S;
    if (x = "", S = m.charCodeAt(R), S !== 46) {
      if (x = se(), S = m.charCodeAt(R), x === "0") {
        if (S === 120 || S === 88) {
          for (x += se(); R < b && (S = m.charCodeAt(R), !!te.code.isHexDigit(S)); )
            x += se();
          return x.length <= 2 && ee.throwError("unexpected token"), R < b && (S = m.charCodeAt(R), te.code.isIdentifierStartES5(S) && ee.throwError("unexpected token")), le = parseInt(x, 16), p.NUMBER;
        }
        if (te.code.isOctalDigit(S)) {
          for (x += se(); R < b && (S = m.charCodeAt(R), !!te.code.isOctalDigit(S)); )
            x += se();
          return R < b && (S = m.charCodeAt(R), (te.code.isIdentifierStartES5(S) || te.code.isDecimalDigit(S)) && ee.throwError("unexpected token")), le = parseInt(x, 8), p.NUMBER;
        }
        te.code.isDecimalDigit(S) && ee.throwError("unexpected token");
      }
      for (; R < b && (S = m.charCodeAt(R), !!te.code.isDecimalDigit(S)); )
        x += se();
    }
    if (S === 46)
      for (x += se(); R < b && (S = m.charCodeAt(R), !!te.code.isDecimalDigit(S)); )
        x += se();
    if (S === 101 || S === 69)
      if (x += se(), S = m.charCodeAt(R), (S === 43 || S === 45) && (x += se()), S = m.charCodeAt(R), te.code.isDecimalDigit(S))
        for (x += se(); R < b && (S = m.charCodeAt(R), !!te.code.isDecimalDigit(S)); )
          x += se();
      else
        ee.throwError("unexpected token");
    return R < b && (S = m.charCodeAt(R), te.code.isIdentifierStartES5(S) && ee.throwError("unexpected token")), le = parseFloat(x), p.NUMBER;
  }
  function et() {
    var x, S;
    for (le = se(); R < b && z(m.charCodeAt(R)); ) {
      if (x = m.charCodeAt(R), x === 46) {
        if (R + 1 >= b)
          return p.ILLEGAL;
        if (S = m.charCodeAt(R + 1), S === 60)
          break;
      }
      le += se();
    }
    return p.NAME;
  }
  function Je() {
    var x;
    for (_ = R; R < b && te.code.isWhiteSpace(m.charCodeAt(R)); )
      se();
    if (R >= b)
      return y = p.EOF, y;
    switch (x = m.charCodeAt(R), x) {
      case 39:
      case 34:
        return y = Qe(), y;
      case 58:
        return se(), y = p.COLON, y;
      case 44:
        return se(), y = p.COMMA, y;
      case 40:
        return se(), y = p.LPAREN, y;
      case 41:
        return se(), y = p.RPAREN, y;
      case 91:
        return se(), y = p.LBRACK, y;
      case 93:
        return se(), y = p.RBRACK, y;
      case 123:
        return se(), y = p.LBRACE, y;
      case 125:
        return se(), y = p.RBRACE, y;
      case 46:
        if (R + 1 < b) {
          if (x = m.charCodeAt(R + 1), x === 60)
            return se(), se(), y = p.DOT_LT, y;
          if (x === 46 && R + 2 < b && m.charCodeAt(R + 2) === 46)
            return se(), se(), se(), y = p.REST, y;
          if (te.code.isDecimalDigit(x))
            return y = Ie(), y;
        }
        return y = p.ILLEGAL, y;
      case 60:
        return se(), y = p.LT, y;
      case 62:
        return se(), y = p.GT, y;
      case 42:
        return se(), y = p.STAR, y;
      case 124:
        return se(), y = p.PIPE, y;
      case 63:
        return se(), y = p.QUESTION, y;
      case 33:
        return se(), y = p.BANG, y;
      case 61:
        return se(), y = p.EQUAL, y;
      case 45:
        return y = Ie(), y;
      default:
        return te.code.isDecimalDigit(x) ? (y = Ie(), y) : (ee.assert(z(x)), y = et(), y);
    }
  }
  function $(x, S) {
    ee.assert(y === x, S || "consumed token not matched"), Je();
  }
  function O(x, S) {
    y !== x && ee.throwError(S || "unexpected token"), Je();
  }
  function ne() {
    var x, S = R - 1;
    if ($(p.LPAREN, "UnionType should start with ("), x = [], y !== p.RPAREN)
      for (; x.push(H()), y !== p.RPAREN; )
        O(p.PIPE);
    return $(p.RPAREN, "UnionType should end with )"), ce({
      type: c.UnionType,
      elements: x
    }, [S, _]);
  }
  function Z() {
    var x, S = R - 1, F;
    for ($(p.LBRACK, "ArrayType should start with ["), x = []; y !== p.RBRACK; ) {
      if (y === p.REST) {
        F = R - 3, $(p.REST), x.push(ce({
          type: c.RestType,
          expression: H()
        }, [F, _]));
        break;
      } else
        x.push(H());
      y !== p.RBRACK && O(p.COMMA);
    }
    return O(p.RBRACK), ce({
      type: c.ArrayType,
      elements: x
    }, [S, _]);
  }
  function Pe() {
    var x = le;
    if (y === p.NAME || y === p.STRING)
      return Je(), x;
    if (y === p.NUMBER)
      return $(p.NUMBER), String(x);
    ee.throwError("unexpected token");
  }
  function we() {
    var x, S = _;
    return x = Pe(), y === p.COLON ? ($(p.COLON), ce({
      type: c.FieldType,
      key: x,
      value: H()
    }, [S, _])) : ce({
      type: c.FieldType,
      key: x,
      value: null
    }, [S, _]);
  }
  function De() {
    var x, S = R - 1, F;
    if ($(p.LBRACE, "RecordType should start with {"), x = [], y === p.COMMA)
      $(p.COMMA);
    else
      for (; y !== p.RBRACE; )
        x.push(we()), y !== p.RBRACE && O(p.COMMA);
    return F = R, O(p.RBRACE), ce({
      type: c.RecordType,
      fields: x
    }, [S, F]);
  }
  function ke() {
    var x = le, S = R - x.length;
    return O(p.NAME), y === p.COLON && (x === "module" || x === "external" || x === "event") && ($(p.COLON), x += ":" + le, O(p.NAME)), ce({
      type: c.NameExpression,
      name: x
    }, [S, _]);
  }
  function Ke() {
    var x = [];
    for (x.push(P()); y === p.COMMA; )
      $(p.COMMA), x.push(P());
    return x;
  }
  function ut() {
    var x, S, F = R - le.length;
    return x = ke(), y === p.DOT_LT || y === p.LT ? (Je(), S = Ke(), O(p.GT), ce({
      type: c.TypeApplication,
      expression: x,
      applications: S
    }, [F, _])) : x;
  }
  function xt() {
    return $(p.COLON, "ResultType should start with :"), y === p.NAME && le === "void" ? ($(p.NAME), {
      type: c.VoidLiteral
    }) : H();
  }
  function Ue() {
    for (var x = [], S = !1, F, C = !1, T, G = R - 3, ue; y !== p.RPAREN; )
      y === p.REST && ($(p.REST), C = !0), T = _, F = H(), F.type === c.NameExpression && y === p.COLON && (ue = _ - F.name.length, $(p.COLON), F = ce({
        type: c.ParameterType,
        name: F.name,
        expression: H()
      }, [ue, _])), y === p.EQUAL ? ($(p.EQUAL), F = ce({
        type: c.OptionalType,
        expression: F
      }, [T, _]), S = !0) : S && ee.throwError("unexpected token"), C && (F = ce({
        type: c.RestType,
        expression: F
      }, [G, _])), x.push(F), y !== p.RPAREN && O(p.COMMA);
    return x;
  }
  function $t() {
    var x, S, F, C, T, G = R - le.length;
    return ee.assert(y === p.NAME && le === "function", "FunctionType should start with 'function'"), $(p.NAME), O(p.LPAREN), x = !1, F = [], S = null, y !== p.RPAREN && (y === p.NAME && (le === "this" || le === "new") ? (x = le === "new", $(p.NAME), O(p.COLON), S = ut(), y === p.COMMA && ($(p.COMMA), F = Ue())) : F = Ue()), O(p.RPAREN), C = null, y === p.COLON && (C = xt()), T = ce({
      type: c.FunctionType,
      params: F,
      result: C
    }, [G, _]), S && (T.this = S, x && (T.new = !0)), T;
  }
  function Ee() {
    var x, S;
    switch (y) {
      case p.STAR:
        return $(p.STAR), ce({
          type: c.AllLiteral
        }, [_ - 1, _]);
      case p.LPAREN:
        return ne();
      case p.LBRACK:
        return Z();
      case p.LBRACE:
        return De();
      case p.NAME:
        if (S = R - le.length, le === "null")
          return $(p.NAME), ce({
            type: c.NullLiteral
          }, [S, _]);
        if (le === "undefined")
          return $(p.NAME), ce({
            type: c.UndefinedLiteral
          }, [S, _]);
        if (le === "true" || le === "false")
          return $(p.NAME), ce({
            type: c.BooleanLiteralType,
            value: le === "true"
          }, [S, _]);
        if (x = re.save(), le === "function")
          try {
            return $t();
          } catch {
            x.restore();
          }
        return ut();
      case p.STRING:
        return Je(), ce({
          type: c.StringLiteralType,
          value: le
        }, [_ - le.length - 2, _]);
      case p.NUMBER:
        return Je(), ce({
          type: c.NumericLiteralType,
          value: le
        }, [_ - String(le).length, _]);
      default:
        ee.throwError("unexpected token");
    }
  }
  function H() {
    var x, S;
    return y === p.QUESTION ? (S = R - 1, $(p.QUESTION), y === p.COMMA || y === p.EQUAL || y === p.RBRACE || y === p.RPAREN || y === p.PIPE || y === p.EOF || y === p.RBRACK || y === p.GT ? ce({
      type: c.NullableLiteral
    }, [S, _]) : ce({
      type: c.NullableType,
      expression: Ee(),
      prefix: !0
    }, [S, _])) : y === p.BANG ? (S = R - 1, $(p.BANG), ce({
      type: c.NonNullableType,
      expression: Ee(),
      prefix: !0
    }, [S, _])) : (S = _, x = Ee(), y === p.BANG ? ($(p.BANG), ce({
      type: c.NonNullableType,
      expression: x,
      prefix: !1
    }, [S, _])) : y === p.QUESTION ? ($(p.QUESTION), ce({
      type: c.NullableType,
      expression: x,
      prefix: !1
    }, [S, _])) : y === p.LBRACK ? ($(p.LBRACK), O(p.RBRACK, "expected an array-style type declaration (" + le + "[])"), ce({
      type: c.TypeApplication,
      expression: ce({
        type: c.NameExpression,
        name: "Array"
      }, [S, _]),
      applications: [x]
    }, [S, _])) : x);
  }
  function P() {
    var x, S;
    if (x = H(), y !== p.PIPE)
      return x;
    for (S = [x], $(p.PIPE); S.push(H()), y === p.PIPE; )
      $(p.PIPE);
    return ce({
      type: c.UnionType,
      elements: S
    }, [0, R]);
  }
  function ge() {
    var x;
    return y === p.REST ? ($(p.REST), ce({
      type: c.RestType,
      expression: P()
    }, [0, R])) : (x = P(), y === p.EQUAL ? ($(p.EQUAL), ce({
      type: c.OptionalType,
      expression: x
    }, [0, R])) : x);
  }
  function B(x, S) {
    var F;
    return m = x, b = m.length, R = 0, _ = 0, ve = S && S.range, Ye = S && S.startIndex || 0, Je(), F = P(), S && S.midstream ? {
      expression: F,
      index: _
    } : (y !== p.EOF && ee.throwError("not reach to EOF"), F);
  }
  function j(x, S) {
    var F;
    return m = x, b = m.length, R = 0, _ = 0, ve = S && S.range, Ye = S && S.startIndex || 0, Je(), F = ge(), S && S.midstream ? {
      expression: F,
      index: _
    } : (y !== p.EOF && ee.throwError("not reach to EOF"), F);
  }
  function Q(x, S, F) {
    var C, T, G;
    switch (x.type) {
      case c.NullableLiteral:
        C = "?";
        break;
      case c.AllLiteral:
        C = "*";
        break;
      case c.NullLiteral:
        C = "null";
        break;
      case c.UndefinedLiteral:
        C = "undefined";
        break;
      case c.VoidLiteral:
        C = "void";
        break;
      case c.UnionType:
        for (F ? C = "" : C = "(", T = 0, G = x.elements.length; T < G; ++T)
          C += Q(x.elements[T], S), T + 1 !== G && (C += S ? "|" : " | ");
        F || (C += ")");
        break;
      case c.ArrayType:
        for (C = "[", T = 0, G = x.elements.length; T < G; ++T)
          C += Q(x.elements[T], S), T + 1 !== G && (C += S ? "," : ", ");
        C += "]";
        break;
      case c.RecordType:
        for (C = "{", T = 0, G = x.fields.length; T < G; ++T)
          C += Q(x.fields[T], S), T + 1 !== G && (C += S ? "," : ", ");
        C += "}";
        break;
      case c.FieldType:
        x.value ? C = x.key + (S ? ":" : ": ") + Q(x.value, S) : C = x.key;
        break;
      case c.FunctionType:
        for (C = S ? "function(" : "function (", x.this && (x.new ? C += S ? "new:" : "new: " : C += S ? "this:" : "this: ", C += Q(x.this, S), x.params.length !== 0 && (C += S ? "," : ", ")), T = 0, G = x.params.length; T < G; ++T)
          C += Q(x.params[T], S), T + 1 !== G && (C += S ? "," : ", ");
        C += ")", x.result && (C += (S ? ":" : ": ") + Q(x.result, S));
        break;
      case c.ParameterType:
        C = x.name + (S ? ":" : ": ") + Q(x.expression, S);
        break;
      case c.RestType:
        C = "...", x.expression && (C += Q(x.expression, S));
        break;
      case c.NonNullableType:
        x.prefix ? C = "!" + Q(x.expression, S) : C = Q(x.expression, S) + "!";
        break;
      case c.OptionalType:
        C = Q(x.expression, S) + "=";
        break;
      case c.NullableType:
        x.prefix ? C = "?" + Q(x.expression, S) : C = Q(x.expression, S) + "?";
        break;
      case c.NameExpression:
        C = x.name;
        break;
      case c.TypeApplication:
        for (C = Q(x.expression, S) + ".<", T = 0, G = x.applications.length; T < G; ++T)
          C += Q(x.applications[T], S), T + 1 !== G && (C += S ? "," : ", ");
        C += ">";
        break;
      case c.StringLiteralType:
        C = '"' + x.value + '"';
        break;
      case c.NumericLiteralType:
        C = String(x.value);
        break;
      case c.BooleanLiteralType:
        C = String(x.value);
        break;
      default:
        ee.throwError("Unknown type " + x.type);
    }
    return C;
  }
  function Ae(x, S) {
    return S == null && (S = {}), Q(x, S.compact, S.topLevel);
  }
  Np.parseType = B, Np.parseParamType = j, Np.stringify = Ae, Np.Syntax = c;
})();
(function(c) {
  (function() {
    var p, m, b, R, _;
    R = Mp, p = Np, m = nf;
    function y(O, ne, Z) {
      return O.slice(ne, Z);
    }
    _ = function() {
      var O = Object.prototype.hasOwnProperty;
      return function(Z, Pe) {
        return O.call(Z, Pe);
      };
    }();
    function le(O) {
      var ne = {}, Z;
      for (Z in O)
        O.hasOwnProperty(Z) && (ne[Z] = O[Z]);
      return ne;
    }
    function te(O) {
      return O >= 97 && O <= 122 || O >= 65 && O <= 90 || O >= 48 && O <= 57;
    }
    function ee(O) {
      return O === "param" || O === "argument" || O === "arg";
    }
    function Ye(O) {
      return O === "return" || O === "returns";
    }
    function ve(O) {
      return O === "property" || O === "prop";
    }
    function z(O) {
      return ee(O) || ve(O) || O === "alias" || O === "this" || O === "mixes" || O === "requires";
    }
    function re(O) {
      return z(O) || O === "const" || O === "constant";
    }
    function ce(O) {
      return ve(O) || ee(O);
    }
    function se(O) {
      return ve(O) || ee(O);
    }
    function pe(O) {
      return ee(O) || Ye(O) || O === "define" || O === "enum" || O === "implements" || O === "this" || O === "type" || O === "typedef" || ve(O);
    }
    function Qe(O) {
      return pe(O) || O === "throws" || O === "const" || O === "constant" || O === "namespace" || O === "member" || O === "var" || O === "module" || O === "constructor" || O === "class" || O === "extends" || O === "augments" || O === "public" || O === "private" || O === "protected";
    }
    var Ie = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]", et = "(" + Ie + "*(?:\\*" + Ie + `?)?)(.+|[\r
\u2028\u2029])`;
    function Je(O) {
      return O.replace(/^\/\*\*?/, "").replace(/\*\/$/, "").replace(new RegExp(et, "g"), "$2").replace(/\s*$/, "");
    }
    function $(O, ne) {
      for (var Z = O.replace(/^\/\*\*?/, ""), Pe = 0, we = new RegExp(et, "g"), De; De = we.exec(Z); )
        if (Pe += De[1].length, De.index + De[0].length > ne + Pe)
          return ne + Pe + O.length - Z.length;
      return O.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function(O) {
      var ne, Z, Pe, we, De, ke, Ke, ut, xt;
      function Ue() {
        var C = De.charCodeAt(Z);
        return Z += 1, R.code.isLineTerminator(C) && !(C === 13 && De.charCodeAt(Z) === 10) && (Pe += 1), String.fromCharCode(C);
      }
      function $t() {
        var C = "";
        for (Ue(); Z < we && te(De.charCodeAt(Z)); )
          C += Ue();
        return C;
      }
      function Ee() {
        var C, T, G = Z;
        for (T = !1; G < we; ) {
          if (C = De.charCodeAt(G), R.code.isLineTerminator(C) && !(C === 13 && De.charCodeAt(G + 1) === 10))
            T = !0;
          else if (T) {
            if (C === 64)
              break;
            R.code.isWhiteSpace(C) || (T = !1);
          }
          G += 1;
        }
        return G;
      }
      function H(C, T, G) {
        for (var ue, xe, _e, at, Rt = !1; Z < T; )
          if (ue = De.charCodeAt(Z), R.code.isWhiteSpace(ue))
            Ue();
          else if (ue === 123) {
            Ue();
            break;
          } else {
            Rt = !0;
            break;
          }
        if (Rt)
          return null;
        for (xe = 1, _e = ""; Z < T; )
          if (ue = De.charCodeAt(Z), R.code.isLineTerminator(ue))
            Ue();
          else {
            if (ue === 125) {
              if (xe -= 1, xe === 0) {
                Ue();
                break;
              }
            } else
              ue === 123 && (xe += 1);
            _e === "" && (at = Z), _e += Ue();
          }
        return xe !== 0 ? m.throwError("Braces are not balanced") : se(C) ? p.parseParamType(_e, { startIndex: Q(at), range: G }) : p.parseType(_e, { startIndex: Q(at), range: G });
      }
      function P(C) {
        var T;
        if (!R.code.isIdentifierStartES5(De.charCodeAt(Z)) && !De[Z].match(/[0-9]/))
          return null;
        for (T = Ue(); Z < C && R.code.isIdentifierPartES5(De.charCodeAt(Z)); )
          T += Ue();
        return T;
      }
      function ge(C) {
        for (; Z < C && (R.code.isWhiteSpace(De.charCodeAt(Z)) || R.code.isLineTerminator(De.charCodeAt(Z))); )
          Ue();
      }
      function B(C, T, G) {
        var ue = "", xe, _e;
        if (ge(C), Z >= C)
          return null;
        if (De.charCodeAt(Z) === 91)
          if (T)
            xe = !0, ue = Ue();
          else
            return null;
        if (ue += P(C), G)
          for (De.charCodeAt(Z) === 58 && (ue === "module" || ue === "external" || ue === "event") && (ue += Ue(), ue += P(C)), De.charCodeAt(Z) === 91 && De.charCodeAt(Z + 1) === 93 && (ue += Ue(), ue += Ue()); De.charCodeAt(Z) === 46 || De.charCodeAt(Z) === 47 || De.charCodeAt(Z) === 35 || De.charCodeAt(Z) === 45 || De.charCodeAt(Z) === 126; )
            ue += Ue(), ue += P(C);
        if (xe) {
          if (ge(C), De.charCodeAt(Z) === 61) {
            ue += Ue(), ge(C);
            for (var at, Rt = 1; Z < C; ) {
              if (at = De.charCodeAt(Z), R.code.isWhiteSpace(at) && (_e || (ge(C), at = De.charCodeAt(Z))), at === 39 && (_e ? _e === "'" && (_e = "") : _e = "'"), at === 34 && (_e ? _e === '"' && (_e = "") : _e = '"'), at === 91)
                Rt++;
              else if (at === 93 && --Rt === 0)
                break;
              ue += Ue();
            }
          }
          if (ge(C), Z >= C || De.charCodeAt(Z) !== 93)
            return null;
          ue += Ue();
        }
        return ue;
      }
      function j() {
        for (; Z < we && De.charCodeAt(Z) !== 64; )
          Ue();
        return Z >= we ? !1 : (m.assert(
          De.charCodeAt(Z) === 64
          /* '@' */
        ), !0);
      }
      function Q(C) {
        return De === ke ? C : $(ke, C);
      }
      function Ae(C, T) {
        this._options = C, this._title = T.toLowerCase(), this._tag = {
          title: T,
          description: null
        }, this._options.lineNumbers && (this._tag.lineNumber = Pe), this._first = Z - T.length - 1, this._last = 0, this._extra = {};
      }
      Ae.prototype.addError = function(T) {
        var G = Array.prototype.slice.call(arguments, 1), ue = T.replace(
          /%(\d)/g,
          function(xe, _e) {
            return m.assert(_e < G.length, "Message reference must be in range"), G[_e];
          }
        );
        return this._tag.errors || (this._tag.errors = []), xt && m.throwError(ue), this._tag.errors.push(ue), Ke;
      }, Ae.prototype.parseType = function() {
        if (pe(this._title))
          try {
            if (this._tag.type = H(this._title, this._last, this._options.range), !this._tag.type && !ee(this._title) && !Ye(this._title) && !this.addError("Missing or invalid tag type"))
              return !1;
          } catch (C) {
            if (this._tag.type = null, !this.addError(C.message))
              return !1;
          }
        else if (Qe(this._title))
          try {
            this._tag.type = H(this._title, this._last, this._options.range);
          } catch {
          }
        return !0;
      }, Ae.prototype._parseNamePath = function(C) {
        var T;
        return T = B(this._last, ut && se(this._title), !0), !T && !C && !this.addError("Missing or invalid tag name") ? !1 : (this._tag.name = T, !0);
      }, Ae.prototype.parseNamePath = function() {
        return this._parseNamePath(!1);
      }, Ae.prototype.parseNamePathOptional = function() {
        return this._parseNamePath(!0);
      }, Ae.prototype.parseName = function() {
        var C, T;
        if (re(this._title))
          if (this._tag.name = B(this._last, ut && se(this._title), ce(this._title)), this._tag.name)
            T = this._tag.name, T.charAt(0) === "[" && T.charAt(T.length - 1) === "]" && (C = T.substring(1, T.length - 1).split("="), C.length > 1 && (this._tag.default = C.slice(1).join("=")), this._tag.name = C[0], this._tag.type && this._tag.type.type !== "OptionalType" && (this._tag.type = {
              type: "OptionalType",
              expression: this._tag.type
            }));
          else {
            if (!z(this._title))
              return !0;
            if (ee(this._title) && this._tag.type && this._tag.type.name)
              this._extra.name = this._tag.type, this._tag.name = this._tag.type.name, this._tag.type = null;
            else if (!this.addError("Missing or invalid tag name"))
              return !1;
          }
        return !0;
      }, Ae.prototype.parseDescription = function() {
        var T = y(De, Z, this._last).trim();
        return T && (/^-\s+/.test(T) && (T = T.substring(2)), this._tag.description = T), !0;
      }, Ae.prototype.parseCaption = function() {
        var T = y(De, Z, this._last).trim(), G = "<caption>", ue = "</caption>", xe = T.indexOf(G), _e = T.indexOf(ue);
        return xe >= 0 && _e >= 0 ? (this._tag.caption = T.substring(
          xe + G.length,
          _e
        ).trim(), this._tag.description = T.substring(_e + ue.length).trim()) : this._tag.description = T, !0;
      }, Ae.prototype.parseKind = function() {
        var T, G;
        return G = {
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
        }, T = y(De, Z, this._last).trim(), this._tag.kind = T, !(!_(G, T) && !this.addError("Invalid kind name '%0'", T));
      }, Ae.prototype.parseAccess = function() {
        var T;
        return T = y(De, Z, this._last).trim(), this._tag.access = T, !(T !== "private" && T !== "protected" && T !== "public" && !this.addError("Invalid access name '%0'", T));
      }, Ae.prototype.parseThis = function() {
        var T = y(De, Z, this._last).trim();
        if (T && T.charAt(0) === "{") {
          var G = this.parseType();
          return G && this._tag.type.type === "NameExpression" || this._tag.type.type === "UnionType" ? (this._tag.name = this._tag.type.name, !0) : this.addError("Invalid name for this");
        } else
          return this.parseNamePath();
      }, Ae.prototype.parseVariation = function() {
        var T, G;
        return G = y(De, Z, this._last).trim(), T = parseFloat(G, 10), this._tag.variation = T, !(isNaN(T) && !this.addError("Invalid variation '%0'", G));
      }, Ae.prototype.ensureEnd = function() {
        var C = y(De, Z, this._last).trim();
        return !(C && !this.addError("Unknown content '%0'", C));
      }, Ae.prototype.epilogue = function() {
        var T;
        return T = this._tag.description, !(se(this._title) && !this._tag.type && T && T.charAt(0) === "[" && (this._tag.type = this._extra.name, this._tag.name || (this._tag.name = void 0), !ut && !this.addError("Missing or invalid tag name")));
      }, ne = {
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
      }, Ae.prototype.parse = function() {
        var T, G, ue, xe;
        if (!this._title && !this.addError("Missing or invalid title"))
          return null;
        for (this._last = Ee(this._title), this._options.range && (this._tag.range = [this._first, De.slice(0, this._last).replace(/\s*$/, "").length].map(Q)), _(ne, this._title) ? ue = ne[this._title] : ue = ["parseType", "parseName", "parseDescription", "epilogue"], T = 0, G = ue.length; T < G; ++T)
          if (xe = ue[T], !this[xe]())
            return null;
        return this._tag;
      };
      function x(C) {
        var T, G, ue;
        if (!j())
          return null;
        for (T = $t(), G = new Ae(C, T), ue = G.parse(); Z < G._last; )
          Ue();
        return ue;
      }
      function S(C) {
        var T = "", G, ue;
        for (ue = !0; Z < we && (G = De.charCodeAt(Z), !(ue && G === 64)); )
          R.code.isLineTerminator(G) ? ue = !0 : ue && !R.code.isWhiteSpace(G) && (ue = !1), T += Ue();
        return C ? T : T.trim();
      }
      function F(C, T) {
        var G = [], ue, xe, _e, at, Rt;
        if (T === void 0 && (T = {}), typeof T.unwrap == "boolean" && T.unwrap ? De = Je(C) : De = C, ke = C, T.tags)
          if (Array.isArray(T.tags))
            for (_e = {}, at = 0, Rt = T.tags.length; at < Rt; at++)
              typeof T.tags[at] == "string" ? _e[T.tags[at]] = !0 : m.throwError('Invalid "tags" parameter: ' + T.tags);
          else
            m.throwError('Invalid "tags" parameter: ' + T.tags);
        for (we = De.length, Z = 0, Pe = 0, Ke = T.recoverable, ut = T.sloppy, xt = T.strict, xe = S(T.preserveWhitespace); ue = x(T), !!ue; )
          (!_e || _e.hasOwnProperty(ue.title)) && G.push(ue);
        return {
          description: xe,
          tags: G
        };
      }
      O.parse = F;
    })(b = {}), c.version = m.VERSION, c.parse = b.parse, c.parseType = p.parseType, c.parseParamType = p.parseParamType, c.unwrapComment = Je, c.Syntax = le(p.Syntax), c.Error = m.DoctrineError, c.type = {
      Syntax: c.Syntax,
      parseType: p.parseType,
      parseParamType: p.parseParamType,
      stringify: p.stringify
    };
  })();
})(AF);
const l5 = /* @__PURE__ */ Z0(AF), { combineParameters: o5 } = __STORYBOOK_MODULE_PREVIEW_API__;
var s5 = (c) => {
  switch (c.type) {
    case "function":
      return { name: "function" };
    case "object":
      let p = {};
      return c.signature.properties.forEach((m) => {
        p[m.key] = J0(m.value);
      }), { name: "object", value: p };
    default:
      throw new Error(`Unknown: ${c}`);
  }
}, J0 = (c) => {
  let { name: p, raw: m } = c, b = {};
  switch (typeof m < "u" && (b.raw = m), c.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...b, name: p };
    case "Array":
      return { ...b, name: "array", value: c.elements.map(J0) };
    case "signature":
      return { ...b, ...s5(c) };
    case "union":
    case "intersection":
      return { ...b, name: p, value: c.elements.map(J0) };
    default:
      return { ...b, name: "other", value: p };
  }
}, c5 = (c) => c.name === "literal", f5 = (c) => c.value.replace(/['|"]/g, ""), d5 = (c) => {
  switch (c.type) {
    case "function":
      return { name: "function" };
    case "object":
      let p = {};
      return c.signature.properties.forEach((m) => {
        p[m.key] = Lp(m.value);
      }), { name: "object", value: p };
    default:
      throw new Error(`Unknown: ${c}`);
  }
}, Lp = (c) => {
  let { name: p, raw: m } = c, b = {};
  switch (typeof m < "u" && (b.raw = m), c.name) {
    case "literal":
      return { ...b, name: "other", value: c.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...b, name: p };
    case "Array":
      return { ...b, name: "array", value: c.elements.map(Lp) };
    case "signature":
      return { ...b, ...d5(c) };
    case "union":
      return c.elements.every(c5) ? { ...b, name: "enum", value: c.elements.map(f5) } : { ...b, name: p, value: c.elements.map(Lp) };
    case "intersection":
      return { ...b, name: p, value: c.elements.map(Lp) };
    default:
      return { ...b, name: "other", value: p };
  }
}, MF = /^['"]|['"]$/g, p5 = (c) => c.replace(MF, ""), v5 = (c) => MF.test(c), h5 = /^\(.*\) => /, kp = (c) => {
  let { name: p, raw: m, computed: b, value: R } = c, _ = {};
  switch (typeof m < "u" && (_.raw = m), p) {
    case "enum": {
      let le = b ? R : R.map((te) => {
        let ee = p5(te.value);
        return v5(te.value) || Number.isNaN(Number(ee)) ? ee : Number(ee);
      });
      return { ..._, name: p, value: le };
    }
    case "string":
    case "number":
    case "symbol":
      return { ..._, name: p };
    case "func":
      return { ..._, name: "function" };
    case "bool":
    case "boolean":
      return { ..._, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ..._, name: "array", value: R && kp(R) };
    case "object":
      return { ..._, name: p };
    case "objectOf":
      return { ..._, name: p, value: kp(R) };
    case "shape":
    case "exact":
      let y = Tk(R, (le) => kp(le));
      return { ..._, name: "object", value: y };
    case "union":
      return { ..._, name: "union", value: R.map((le) => kp(le)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((p == null ? void 0 : p.indexOf("|")) > 0)
        try {
          let ee = p.split("|").map((Ye) => JSON.parse(Ye));
          return { ..._, name: "enum", value: ee };
        } catch {
        }
      let le = R ? `${p}(${R})` : p, te = h5.test(p) ? "function" : "other";
      return { ..._, name: te, value: le };
    }
  }
}, SD = (c) => {
  let { type: p, tsType: m, flowType: b } = c;
  return p != null ? kp(p) : m != null ? J0(m) : b != null ? Lp(b) : null;
}, m5 = ((c) => (c.JAVASCRIPT = "JavaScript", c.FLOW = "Flow", c.TYPESCRIPT = "TypeScript", c.UNKNOWN = "Unknown", c))(m5 || {}), y5 = ["null", "undefined"];
function AD(c) {
  return y5.some((p) => p === c);
}
var g5 = (c) => {
  if (!c)
    return "";
  if (typeof c == "string")
    return c;
  throw new Error(`Description: expected string, got: ${JSON.stringify(c)}`);
};
function LF(c) {
  return !!c.__docgenInfo;
}
function D5(c) {
  return c != null && Object.keys(c).length > 0;
}
function E5(c, p) {
  return LF(c) ? c.__docgenInfo[p] : null;
}
function C5(c) {
  return LF(c) && g5(c.__docgenInfo.description);
}
function S5(c) {
  return c != null && c.includes("@");
}
function A5(c, p) {
  let m;
  try {
    m = l5.parse(c, { tags: p, sloppy: !0 });
  } catch (b) {
    throw console.error(b), new Error("Cannot parse JSDoc tags.");
  }
  return m;
}
var F5 = { tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"] }, T5 = (c, p = F5) => {
  if (!S5(c))
    return { includesJsDoc: !1, ignore: !1 };
  let m = A5(c, p.tags), b = b5(m);
  return b.ignore ? { includesJsDoc: !0, ignore: !0 } : { includesJsDoc: !0, ignore: !1, description: m.description, extractedTags: b };
};
function b5(c) {
  let p = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let m = 0; m < c.tags.length; m += 1) {
    let b = c.tags[m];
    if (b.title === "ignore") {
      p.ignore = !0;
      break;
    } else
      switch (b.title) {
        case "param":
        case "arg":
        case "argument": {
          let R = w5(b);
          R != null && (p.params == null && (p.params = []), p.params.push(R));
          break;
        }
        case "deprecated": {
          let R = x5(b);
          R != null && (p.deprecated = R);
          break;
        }
        case "returns": {
          let R = R5(b);
          R != null && (p.returns = R);
          break;
        }
      }
  }
  return p;
}
function w5(c) {
  let p = c.name;
  return p != null && p !== "null-null" ? { name: c.name, type: c.type, description: c.description, getPrettyName: () => p.includes("null") ? p.replace("-null", "").replace(".null", "") : c.name, getTypeName: () => c.type != null ? rf(c.type) : null } : null;
}
function x5(c) {
  return c.title != null ? c.description : null;
}
function R5(c) {
  return c.type != null ? { type: c.type, description: c.description, getTypeName: () => rf(c.type) } : null;
}
function rf(c) {
  return c.type === "NameExpression" ? c.name : c.type === "RecordType" ? `({${c.fields.map((p) => {
    if (p.value != null) {
      let m = rf(p.value);
      return `${p.key}: ${m}`;
    }
    return p.key;
  }).join(", ")}})` : c.type === "UnionType" ? `(${c.elements.map(rf).join("|")})` : c.type === "ArrayType" ? "[]" : c.type === "TypeApplication" && c.expression != null && c.expression.name === "Array" ? `${rf(c.applications[0])}[]` : c.type === "NullableType" || c.type === "NonNullableType" || c.type === "OptionalType" ? rf(c.expression) : c.type === "AllLiteral" ? "any" : null;
}
function UF(c) {
  return c.length > 90;
}
function B5(c) {
  return c.length > 50;
}
function Zn(c, p) {
  return c === p ? { summary: c } : { summary: c, detail: p };
}
function zF({ name: c, value: p, elements: m, raw: b }) {
  return p ?? (m != null ? m.map(zF).join(" | ") : b ?? c);
}
function _5({ name: c, raw: p, elements: m }) {
  return m != null ? Zn(m.map(zF).join(" | ")) : p != null ? Zn(p.replace(/^\|\s*/, "")) : Zn(c);
}
function O5({ type: c, raw: p }) {
  return p != null ? Zn(p) : Zn(c);
}
function N5({ type: c, raw: p }) {
  return p != null ? UF(p) ? Zn(c, p) : Zn(p) : Zn(c);
}
function k5(c) {
  let { type: p } = c;
  return p === "object" ? N5(c) : O5(c);
}
function M5({ name: c, raw: p }) {
  return p != null ? UF(p) ? Zn(c, p) : Zn(p) : Zn(c);
}
function L5(c) {
  if (c == null)
    return null;
  switch (c.name) {
    case "union":
      return _5(c);
    case "signature":
      return k5(c);
    default:
      return M5(c);
  }
}
function U5(c, p) {
  if (c != null) {
    let { value: m } = c;
    if (!AD(m))
      return B5(m) ? Zn(p.name, m) : Zn(m);
  }
  return null;
}
var z5 = (c, p) => {
  let { flowType: m, description: b, required: R, defaultValue: _ } = p;
  return { name: c, type: L5(m), required: R, description: b, defaultValue: U5(_, m) };
};
function j5({ tsType: c, required: p }) {
  return c == null ? null : Zn(p ? c.name : c.name.replace(" | undefined", ""));
}
function P5({ defaultValue: c }) {
  if (c != null) {
    let { value: p } = c;
    if (!AD(p))
      return Zn(p);
  }
  return null;
}
var $5 = (c, p) => {
  let { description: m, required: b } = p;
  return { name: c, type: j5(p), required: b, description: m, defaultValue: P5(p) };
};
function H5(c) {
  return c != null ? Zn(c.name) : null;
}
function I5(c) {
  let { computed: p, func: m } = c;
  return typeof p > "u" && typeof m > "u";
}
function V5(c) {
  return c ? c.name === "string" ? !0 : c.name === "enum" ? Array.isArray(c.value) && c.value.every(({ value: p }) => typeof p == "string" && p[0] === '"' && p[p.length - 1] === '"') : !1 : !1;
}
function q5(c, p) {
  if (c != null) {
    let { value: m } = c;
    if (!AD(m))
      return I5(c) && V5(p) ? Zn(JSON.stringify(m)) : Zn(m);
  }
  return null;
}
function jF(c, p, m) {
  let { description: b, required: R, defaultValue: _ } = m;
  return { name: c, type: H5(p), required: R, description: b, defaultValue: q5(_, p) };
}
function im(c, p) {
  var m;
  if (p.includesJsDoc) {
    let { description: b, extractedTags: R } = p;
    b != null && (c.description = p.description);
    let _ = { ...R, params: (m = R == null ? void 0 : R.params) == null ? void 0 : m.map((y) => ({ name: y.getPrettyName(), description: y.description })) };
    Object.values(_).filter(Boolean).length > 0 && (c.jsDocTags = _);
  }
  return c;
}
var G5 = (c, p, m) => {
  let b = jF(c, p.type, p);
  return b.sbType = SD(p), im(b, m);
}, Y5 = (c, p, m) => {
  let b = $5(c, p);
  return b.sbType = SD(p), im(b, m);
}, Q5 = (c, p, m) => {
  let b = z5(c, p);
  return b.sbType = SD(p), im(b, m);
}, W5 = (c, p, m) => {
  let b = jF(c, { name: "unknown" }, p);
  return im(b, m);
}, PF = (c) => {
  switch (c) {
    case "JavaScript":
      return G5;
    case "TypeScript":
      return Y5;
    case "Flow":
      return Q5;
    default:
      return W5;
  }
}, $F = (c) => c.type != null ? "JavaScript" : c.flowType != null ? "Flow" : c.tsType != null ? "TypeScript" : "Unknown", K5 = (c) => {
  let p = $F(c[0]), m = PF(p);
  return c.map((b) => {
    var _;
    let R = b;
    return (_ = b.type) != null && _.elements && (R = { ...b, type: { ...b.type, value: b.type.elements } }), HF(R.name, R, p, m);
  });
}, X5 = (c) => {
  let p = Object.keys(c), m = $F(c[p[0]]), b = PF(m);
  return p.map((R) => {
    let _ = c[R];
    return _ != null ? HF(R, _, m, b) : null;
  }).filter(Boolean);
}, cM = (c, p) => {
  let m = E5(c, p);
  return D5(m) ? Array.isArray(m) ? K5(m) : X5(m) : [];
};
function HF(c, p, m, b) {
  let R = T5(p.description);
  return R.includesJsDoc && R.ignore ? null : { propDef: b(c, p, R), jsDocTags: R.extractedTags, docgenInfo: p, typeSystem: m };
}
function fM(c) {
  return c != null && C5(c);
}
var dM = (c) => {
  let { component: p, argTypes: m, parameters: { docs: b = {} } } = c, { extractArgTypes: R } = b, _ = R && p ? R(p) : {};
  return _ ? o5(_, m) : m;
}, J5 = "storybook/docs", pM = `${J5}/snippet-rendered`, Z5 = ((c) => (c.AUTO = "auto", c.CODE = "code", c.DYNAMIC = "dynamic", c))(Z5 || {});
export {
  MO as A,
  eN as B,
  X8 as C,
  vN as D,
  _O as E,
  HR as F,
  rk as G,
  PN as H,
  aO as I,
  H_ as J,
  G_ as K,
  mD as L,
  tO as M,
  nm as N,
  XN as O,
  z8 as P,
  U8 as Q,
  lM as R,
  pM as S,
  m5 as T,
  iF as U,
  cF as V,
  AN as W,
  g5 as X,
  Hi as _,
  yD as a,
  Up as b,
  sM as c,
  zp as d,
  ql as e,
  dM as f,
  fM as g,
  Zn as h,
  fD as i,
  E5 as j,
  Z5 as k,
  oM as l,
  B5 as m,
  LF as n,
  cM as o,
  UF as p,
  ok as q,
  PR as r,
  nF as s,
  CF as t,
  Mp as u,
  fF as v,
  am as w,
  SF as x,
  bO as y,
  $O as z
};
