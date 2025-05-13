import { g as Ak } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { r as QE } from "./storybook-index-f2fed736.es.js";
var a0 = { exports: {} }, Ir = {}, xm = { exports: {} }, n0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VE;
function Hk() {
  return VE || (VE = 1, function(se) {
    function je(Y, ye) {
      var K = Y.length;
      Y.push(ye);
      e:
        for (; 0 < K; ) {
          var Ie = K - 1 >>> 1, qe = Y[Ie];
          if (0 < Un(qe, ye))
            Y[Ie] = ye, Y[K] = qe, K = Ie;
          else
            break e;
        }
    }
    function N(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function gr(Y) {
      if (Y.length === 0)
        return null;
      var ye = Y[0], K = Y.pop();
      if (K !== ye) {
        Y[0] = K;
        e:
          for (var Ie = 0, qe = Y.length, Fn = qe >>> 1; Ie < Fn; ) {
            var ar = 2 * (Ie + 1) - 1, ai = Y[ar], Rn = ar + 1, ii = Y[Rn];
            if (0 > Un(ai, K))
              Rn < qe && 0 > Un(ii, ai) ? (Y[Ie] = ii, Y[Rn] = K, Ie = Rn) : (Y[Ie] = ai, Y[ar] = K, Ie = ar);
            else if (Rn < qe && 0 > Un(ii, K))
              Y[Ie] = ii, Y[Rn] = K, Ie = Rn;
            else
              break e;
          }
      }
      return ye;
    }
    function Un(Y, ye) {
      var K = Y.sortIndex - ye.sortIndex;
      return K !== 0 ? K : Y.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var et = performance;
      se.unstable_now = function() {
        return et.now();
      };
    } else {
      var S = Date, An = S.now();
      se.unstable_now = function() {
        return S.now() - An;
      };
    }
    var we = [], de = [], en = 1, le = null, me = 3, ue = !1, _e = !1, tt = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Wr = typeof clearTimeout == "function" ? clearTimeout : null, pn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ze(Y) {
      for (var ye = N(de); ye !== null; ) {
        if (ye.callback === null)
          gr(de);
        else if (ye.startTime <= Y)
          gr(de), ye.sortIndex = ye.expirationTime, je(we, ye);
        else
          break;
        ye = N(de);
      }
    }
    function ut(Y) {
      if (tt = !1, ze(Y), !_e)
        if (N(we) !== null)
          _e = !0, St(Ue);
        else {
          var ye = N(de);
          ye !== null && Cr(ut, ye.startTime - Y);
        }
    }
    function Ue(Y, ye) {
      _e = !1, tt && (tt = !1, Wr(Tn), Tn = -1), ue = !0;
      var K = me;
      try {
        for (ze(ye), le = N(we); le !== null && (!(le.expirationTime > ye) || Y && !at()); ) {
          var Ie = le.callback;
          if (typeof Ie == "function") {
            le.callback = null, me = le.priorityLevel;
            var qe = Ie(le.expirationTime <= ye);
            ye = se.unstable_now(), typeof qe == "function" ? le.callback = qe : le === N(we) && gr(we), ze(ye);
          } else
            gr(we);
          le = N(we);
        }
        if (le !== null)
          var Fn = !0;
        else {
          var ar = N(de);
          ar !== null && Cr(ut, ar.startTime - ye), Fn = !1;
        }
        return Fn;
      } finally {
        le = null, me = K, ue = !1;
      }
    }
    var ht = !1, be = null, Tn = -1, rr = 5, Ot = -1;
    function at() {
      return !(se.unstable_now() - Ot < rr);
    }
    function Hn() {
      if (be !== null) {
        var Y = se.unstable_now();
        Ot = Y;
        var ye = !0;
        try {
          ye = be(!0, Y);
        } finally {
          ye ? Ae() : (ht = !1, be = null);
        }
      } else
        ht = !1;
    }
    var Ae;
    if (typeof pn == "function")
      Ae = function() {
        pn(Hn);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), Sr = Xe.port2;
      Xe.port1.onmessage = Hn, Ae = function() {
        Sr.postMessage(null);
      };
    } else
      Ae = function() {
        lt(Hn, 0);
      };
    function St(Y) {
      be = Y, ht || (ht = !0, Ae());
    }
    function Cr(Y, ye) {
      Tn = lt(function() {
        Y(se.unstable_now());
      }, ye);
    }
    se.unstable_IdlePriority = 5, se.unstable_ImmediatePriority = 1, se.unstable_LowPriority = 4, se.unstable_NormalPriority = 3, se.unstable_Profiling = null, se.unstable_UserBlockingPriority = 2, se.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, se.unstable_continueExecution = function() {
      _e || ue || (_e = !0, St(Ue));
    }, se.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : rr = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, se.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, se.unstable_getFirstCallbackNode = function() {
      return N(we);
    }, se.unstable_next = function(Y) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = me;
      }
      var K = me;
      me = ye;
      try {
        return Y();
      } finally {
        me = K;
      }
    }, se.unstable_pauseExecution = function() {
    }, se.unstable_requestPaint = function() {
    }, se.unstable_runWithPriority = function(Y, ye) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var K = me;
      me = Y;
      try {
        return ye();
      } finally {
        me = K;
      }
    }, se.unstable_scheduleCallback = function(Y, ye, K) {
      var Ie = se.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Ie + K : Ie) : K = Ie, Y) {
        case 1:
          var qe = -1;
          break;
        case 2:
          qe = 250;
          break;
        case 5:
          qe = 1073741823;
          break;
        case 4:
          qe = 1e4;
          break;
        default:
          qe = 5e3;
      }
      return qe = K + qe, Y = { id: en++, callback: ye, priorityLevel: Y, startTime: K, expirationTime: qe, sortIndex: -1 }, K > Ie ? (Y.sortIndex = K, je(de, Y), N(we) === null && Y === N(de) && (tt ? (Wr(Tn), Tn = -1) : tt = !0, Cr(ut, K - Ie))) : (Y.sortIndex = qe, je(we, Y), _e || ue || (_e = !0, St(Ue))), Y;
    }, se.unstable_shouldYield = at, se.unstable_wrapCallback = function(Y) {
      var ye = me;
      return function() {
        var K = me;
        me = ye;
        try {
          return Y.apply(this, arguments);
        } finally {
          me = K;
        }
      };
    };
  }(n0)), n0;
}
var r0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BE;
function Fk() {
  return BE || (BE = 1, function(se) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var je = !1, N = !1, gr = 5;
      function Un(Q, pe) {
        var Me = Q.length;
        Q.push(pe), An(Q, pe, Me);
      }
      function et(Q) {
        return Q.length === 0 ? null : Q[0];
      }
      function S(Q) {
        if (Q.length === 0)
          return null;
        var pe = Q[0], Me = Q.pop();
        return Me !== pe && (Q[0] = Me, we(Q, Me, 0)), pe;
      }
      function An(Q, pe, Me) {
        for (var nt = Me; nt > 0; ) {
          var kt = nt - 1 >>> 1, hn = Q[kt];
          if (de(hn, pe) > 0)
            Q[kt] = pe, Q[nt] = hn, nt = kt;
          else
            return;
        }
      }
      function we(Q, pe, Me) {
        for (var nt = Me, kt = Q.length, hn = kt >>> 1; nt < hn; ) {
          var jt = (nt + 1) * 2 - 1, Rr = Q[jt], Ct = jt + 1, da = Q[Ct];
          if (de(Rr, pe) < 0)
            Ct < kt && de(da, Rr) < 0 ? (Q[nt] = da, Q[Ct] = pe, nt = Ct) : (Q[nt] = Rr, Q[jt] = pe, nt = jt);
          else if (Ct < kt && de(da, pe) < 0)
            Q[nt] = da, Q[Ct] = pe, nt = Ct;
          else
            return;
        }
      }
      function de(Q, pe) {
        var Me = Q.sortIndex - pe.sortIndex;
        return Me !== 0 ? Me : Q.id - pe.id;
      }
      var en = 1, le = 2, me = 3, ue = 4, _e = 5;
      function tt(Q, pe) {
      }
      var lt = typeof performance == "object" && typeof performance.now == "function";
      if (lt) {
        var Wr = performance;
        se.unstable_now = function() {
          return Wr.now();
        };
      } else {
        var pn = Date, ze = pn.now();
        se.unstable_now = function() {
          return pn.now() - ze;
        };
      }
      var ut = 1073741823, Ue = -1, ht = 250, be = 5e3, Tn = 1e4, rr = ut, Ot = [], at = [], Hn = 1, Ae = null, Xe = me, Sr = !1, St = !1, Cr = !1, Y = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ie(Q) {
        for (var pe = et(at); pe !== null; ) {
          if (pe.callback === null)
            S(at);
          else if (pe.startTime <= Q)
            S(at), pe.sortIndex = pe.expirationTime, Un(Ot, pe);
          else
            return;
          pe = et(at);
        }
      }
      function qe(Q) {
        if (Cr = !1, Ie(Q), !St)
          if (et(Ot) !== null)
            St = !0, oi(Fn);
          else {
            var pe = et(at);
            pe !== null && Vn(qe, pe.startTime - Q);
          }
      }
      function Fn(Q, pe) {
        St = !1, Cr && (Cr = !1, Zr()), Sr = !0;
        var Me = Xe;
        try {
          var nt;
          if (!N)
            return ar(Q, pe);
        } finally {
          Ae = null, Xe = Me, Sr = !1;
        }
      }
      function ar(Q, pe) {
        var Me = pe;
        for (Ie(Me), Ae = et(Ot); Ae !== null && !je && !(Ae.expirationTime > Me && (!Q || kl())); ) {
          var nt = Ae.callback;
          if (typeof nt == "function") {
            Ae.callback = null, Xe = Ae.priorityLevel;
            var kt = Ae.expirationTime <= Me, hn = nt(kt);
            Me = se.unstable_now(), typeof hn == "function" ? Ae.callback = hn : Ae === et(Ot) && S(Ot), Ie(Me);
          } else
            S(Ot);
          Ae = et(Ot);
        }
        if (Ae !== null)
          return !0;
        var jt = et(at);
        return jt !== null && Vn(qe, jt.startTime - Me), !1;
      }
      function ai(Q, pe) {
        switch (Q) {
          case en:
          case le:
          case me:
          case ue:
          case _e:
            break;
          default:
            Q = me;
        }
        var Me = Xe;
        Xe = Q;
        try {
          return pe();
        } finally {
          Xe = Me;
        }
      }
      function Rn(Q) {
        var pe;
        switch (Xe) {
          case en:
          case le:
          case me:
            pe = me;
            break;
          default:
            pe = Xe;
            break;
        }
        var Me = Xe;
        Xe = pe;
        try {
          return Q();
        } finally {
          Xe = Me;
        }
      }
      function ii(Q) {
        var pe = Xe;
        return function() {
          var Me = Xe;
          Xe = pe;
          try {
            return Q.apply(this, arguments);
          } finally {
            Xe = Me;
          }
        };
      }
      function Xr(Q, pe, Me) {
        var nt = se.unstable_now(), kt;
        if (typeof Me == "object" && Me !== null) {
          var hn = Me.delay;
          typeof hn == "number" && hn > 0 ? kt = nt + hn : kt = nt;
        } else
          kt = nt;
        var jt;
        switch (Q) {
          case en:
            jt = Ue;
            break;
          case le:
            jt = ht;
            break;
          case _e:
            jt = rr;
            break;
          case ue:
            jt = Tn;
            break;
          case me:
          default:
            jt = be;
            break;
        }
        var Rr = kt + jt, Ct = {
          id: Hn++,
          callback: pe,
          priorityLevel: Q,
          startTime: kt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return kt > nt ? (Ct.sortIndex = kt, Un(at, Ct), et(Ot) === null && Ct === et(at) && (Cr ? Zr() : Cr = !0, Vn(qe, kt - nt))) : (Ct.sortIndex = Rr, Un(Ot, Ct), !St && !Sr && (St = !0, oi(Fn))), Ct;
      }
      function ca() {
      }
      function Hu() {
        !St && !Sr && (St = !0, oi(Fn));
      }
      function Er() {
        return et(Ot);
      }
      function ba(Q) {
        Q.callback = null;
      }
      function vn() {
        return Xe;
      }
      var jn = !1, Tr = null, qr = -1, ir = gr, _a = -1;
      function kl() {
        var Q = se.unstable_now() - _a;
        return !(Q < ir);
      }
      function ji() {
      }
      function li(Q) {
        if (Q < 0 || Q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Q > 0 ? ir = Math.floor(1e3 / Q) : ir = gr;
      }
      var Vi = function() {
        if (Tr !== null) {
          var Q = se.unstable_now();
          _a = Q;
          var pe = !0, Me = !0;
          try {
            Me = Tr(pe, Q);
          } finally {
            Me ? Kr() : (jn = !1, Tr = null);
          }
        } else
          jn = !1;
      }, Kr;
      if (typeof K == "function")
        Kr = function() {
          K(Vi);
        };
      else if (typeof MessageChannel < "u") {
        var ui = new MessageChannel(), fa = ui.port2;
        ui.port1.onmessage = Vi, Kr = function() {
          fa.postMessage(null);
        };
      } else
        Kr = function() {
          Y(Vi, 0);
        };
      function oi(Q) {
        Tr = Q, jn || (jn = !0, Kr());
      }
      function Vn(Q, pe) {
        qr = Y(function() {
          Q(se.unstable_now());
        }, pe);
      }
      function Zr() {
        ye(qr), qr = -1;
      }
      var Fu = ji, si = null;
      se.unstable_IdlePriority = _e, se.unstable_ImmediatePriority = en, se.unstable_LowPriority = ue, se.unstable_NormalPriority = me, se.unstable_Profiling = si, se.unstable_UserBlockingPriority = le, se.unstable_cancelCallback = ba, se.unstable_continueExecution = Hu, se.unstable_forceFrameRate = li, se.unstable_getCurrentPriorityLevel = vn, se.unstable_getFirstCallbackNode = Er, se.unstable_next = Rn, se.unstable_pauseExecution = ca, se.unstable_requestPaint = Fu, se.unstable_runWithPriority = ai, se.unstable_scheduleCallback = Xr, se.unstable_shouldYield = kl, se.unstable_wrapCallback = ii, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(r0)), r0;
}
var PE;
function IE() {
  return PE || (PE = 1, process.env.NODE_ENV === "production" ? xm.exports = Hk() : xm.exports = Fk()), xm.exports;
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
var YE;
function jk() {
  if (YE)
    return Ir;
  YE = 1;
  var se = QE, je = IE();
  function N(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var gr = /* @__PURE__ */ new Set(), Un = {};
  function et(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Un[n] = r, n = 0; n < r.length; n++)
      gr.add(r[n]);
  }
  var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), we = Object.prototype.hasOwnProperty, de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, en = {}, le = {};
  function me(n) {
    return we.call(le, n) ? !0 : we.call(en, n) ? !1 : de.test(n) ? le[n] = !0 : (en[n] = !0, !1);
  }
  function ue(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function _e(n, r, l, o) {
    if (r === null || typeof r > "u" || ue(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
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
  function tt(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var lt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    lt[n] = new tt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    lt[r] = new tt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    lt[n] = new tt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    lt[n] = new tt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    lt[n] = new tt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    lt[n] = new tt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    lt[n] = new tt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    lt[n] = new tt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    lt[n] = new tt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Wr = /[\-:]([a-z])/g;
  function pn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Wr,
      pn
    );
    lt[r] = new tt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Wr, pn);
    lt[r] = new tt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Wr, pn);
    lt[r] = new tt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    lt[n] = new tt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), lt.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    lt[n] = new tt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ze(n, r, l, o) {
    var c = lt.hasOwnProperty(r) ? lt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (_e(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ut = se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ue = Symbol.for("react.element"), ht = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), Tn = Symbol.for("react.strict_mode"), rr = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), at = Symbol.for("react.context"), Hn = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), Sr = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), Cr = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function ye(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = Object.assign, Ie;
  function qe(n) {
    if (Ie === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        Ie = r && r[1] || "";
      }
    return `
` + Ie + n;
  }
  var Fn = !1;
  function ar(n, r) {
    if (!n || Fn)
      return "";
    Fn = !0;
    var l = Error.prepareStackTrace;
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
          } catch (_) {
            var o = _;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (_) {
            o = _;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          o = _;
        }
        n();
      }
    } catch (_) {
      if (_ && o && typeof _.stack == "string") {
        for (var c = _.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, g = d.length - 1; 1 <= h && 0 <= g && c[h] !== d[g]; )
          g--;
        for (; 1 <= h && 0 <= g; h--, g--)
          if (c[h] !== d[g]) {
            if (h !== 1 || g !== 1)
              do
                if (h--, g--, 0 > g || c[h] !== d[g]) {
                  var C = `
` + c[h].replace(" at new ", " at ");
                  return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
                }
              while (1 <= h && 0 <= g);
            break;
          }
      }
    } finally {
      Fn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? qe(n) : "";
  }
  function ai(n) {
    switch (n.tag) {
      case 5:
        return qe(n.type);
      case 16:
        return qe("Lazy");
      case 13:
        return qe("Suspense");
      case 19:
        return qe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ar(n.type, !1), n;
      case 11:
        return n = ar(n.type.render, !1), n;
      case 1:
        return n = ar(n.type, !0), n;
      default:
        return "";
    }
  }
  function Rn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case be:
        return "Fragment";
      case ht:
        return "Portal";
      case rr:
        return "Profiler";
      case Tn:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case at:
          return (n.displayName || "Context") + ".Consumer";
        case Ot:
          return (n._context.displayName || "Context") + ".Provider";
        case Hn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Sr:
          return r = n.displayName || null, r !== null ? r : Rn(n.type) || "Memo";
        case St:
          r = n._payload, n = n._init;
          try {
            return Rn(n(r));
          } catch {
          }
      }
    return null;
  }
  function ii(n) {
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
        return Rn(r);
      case 8:
        return r === Tn ? "StrictMode" : "Mode";
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
  function Xr(n) {
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
  function ca(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Hu(n) {
    var r = ca(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Er(n) {
    n._valueTracker || (n._valueTracker = Hu(n));
  }
  function ba(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = ca(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function vn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function jn(n, r) {
    var l = r.checked;
    return K({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Tr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Xr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function qr(n, r) {
    r = r.checked, r != null && ze(n, "checked", r, !1);
  }
  function ir(n, r) {
    qr(n, r);
    var l = Xr(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? kl(n, r.type, l) : r.hasOwnProperty("defaultValue") && kl(n, r.type, Xr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function kl(n, r, l) {
    (r !== "number" || vn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ji = Array.isArray;
  function li(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Xr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Vi(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(N(91));
    return K({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Kr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(N(92));
        if (ji(l)) {
          if (1 < l.length)
            throw Error(N(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Xr(l) };
  }
  function ui(n, r) {
    var l = Xr(r.value), o = Xr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function fa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function oi(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? oi(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Zr, Fu = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Zr = Zr || document.createElement("div"), Zr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Zr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function si(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Q = {
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
  }, pe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Q).forEach(function(n) {
    pe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Q[r] = Q[n];
    });
  });
  function Me(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Q.hasOwnProperty(n) && Q[n] ? ("" + r).trim() : r + "px";
  }
  function nt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Me(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var kt = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function hn(n, r) {
    if (r) {
      if (kt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(N(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(N(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(N(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(N(62));
    }
  }
  function jt(n, r) {
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
  var Rr = null;
  function Ct(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var da = null, Nt = null, Et = null;
  function hp(n) {
    if (n = so(n)) {
      if (typeof da != "function")
        throw Error(N(280));
      var r = n.stateNode;
      r && (r = ce(r), da(n.stateNode, n.type, r));
    }
  }
  function Jo(n) {
    Nt ? Et ? Et.push(n) : Et = [n] : Nt = n;
  }
  function es() {
    if (Nt) {
      var n = Nt, r = Et;
      if (Et = Nt = null, hp(n), r)
        for (n = 0; n < r.length; n++)
          hp(r[n]);
    }
  }
  function mp(n, r) {
    return n(r);
  }
  function yp() {
  }
  var ts = !1;
  function Jc(n, r, l) {
    if (ts)
      return n(r, l);
    ts = !0;
    try {
      return mp(n, r, l);
    } finally {
      ts = !1, (Nt !== null || Et !== null) && (yp(), es());
    }
  }
  function ju(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = ce(l);
    if (o === null)
      return null;
    l = o[r];
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
    if (l && typeof l != "function")
      throw Error(N(231, r, typeof l));
    return l;
  }
  var ns = !1;
  if (An)
    try {
      var Bi = {};
      Object.defineProperty(Bi, "passive", { get: function() {
        ns = !0;
      } }), window.addEventListener("test", Bi, Bi), window.removeEventListener("test", Bi, Bi);
    } catch {
      ns = !1;
    }
  function bl(n, r, l, o, c, d, h, g, C) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, _);
    } catch (H) {
      this.onError(H);
    }
  }
  var Jr = !1, Ma = null, _l = !1, Vu = null, ef = { onError: function(n) {
    Jr = !0, Ma = n;
  } };
  function tf(n, r, l, o, c, d, h, g, C) {
    Jr = !1, Ma = null, bl.apply(ef, arguments);
  }
  function Ml(n, r, l, o, c, d, h, g, C) {
    if (tf.apply(this, arguments), Jr) {
      if (Jr) {
        var _ = Ma;
        Jr = !1, Ma = null;
      } else
        throw Error(N(198));
      _l || (_l = !0, Vu = _);
    }
  }
  function pa(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Bu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ll(n) {
    if (pa(n) !== n)
      throw Error(N(188));
  }
  function xn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = pa(n), r === null)
        throw Error(N(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Ll(c), n;
          if (d === o)
            return Ll(c), r;
          d = d.sibling;
        }
        throw Error(N(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var h = !1, g = c.child; g; ) {
          if (g === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (g === o) {
            h = !0, o = c, l = d;
            break;
          }
          g = g.sibling;
        }
        if (!h) {
          for (g = d.child; g; ) {
            if (g === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (g === o) {
              h = !0, o = d, l = c;
              break;
            }
            g = g.sibling;
          }
          if (!h)
            throw Error(N(189));
        }
      }
      if (l.alternate !== o)
        throw Error(N(190));
    }
    if (l.tag !== 3)
      throw Error(N(188));
    return l.stateNode.current === l ? n : r;
  }
  function gp(n) {
    return n = xn(n), n !== null ? Sp(n) : null;
  }
  function Sp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Sp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var nf = je.unstable_scheduleCallback, Cp = je.unstable_cancelCallback, wm = je.unstable_shouldYield, Dm = je.unstable_requestPaint, Tt = je.unstable_now, km = je.unstable_getCurrentPriorityLevel, La = je.unstable_ImmediatePriority, Le = je.unstable_UserBlockingPriority, ci = je.unstable_NormalPriority, Ep = je.unstable_LowPriority, rf = je.unstable_IdlePriority, Pu = null, ea = null;
  function Tp(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function")
      try {
        ea.onCommitFiberRoot(Pu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var xr = Math.clz32 ? Math.clz32 : bm, Rp = Math.log, xp = Math.LN2;
  function bm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Rp(n) / xp | 0) | 0;
  }
  var rs = 64, Ol = 4194304;
  function Pi(n) {
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
  function ta(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var g = h & ~c;
      g !== 0 ? o = Pi(g) : (d &= h, d !== 0 && (o = Pi(d)));
    } else
      h = l & ~c, h !== 0 ? o = Pi(h) : d !== 0 && (o = Pi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - xr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function af(n, r) {
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
  function as(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - xr(d), g = 1 << h, C = c[h];
      C === -1 ? (!(g & l) || g & o) && (c[h] = af(g, r)) : C <= r && (n.expiredLanes |= g), d &= ~g;
    }
  }
  function lf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function is() {
    var n = rs;
    return rs <<= 1, !(rs & 4194240) && (rs = 64), n;
  }
  function uf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Yi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - xr(r), n[r] = l;
  }
  function _m(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - xr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Yu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - xr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ge = 0;
  function of(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wp, ls, We, Dp, sf, Re = !1, $u = [], zt = null, wr = null, Dr = null, Qu = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), Ke = [], Mm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        wr = null;
        break;
      case "mouseover":
      case "mouseout":
        Dr = null;
        break;
      case "pointerover":
      case "pointerout":
        Qu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vt.delete(r.pointerId);
    }
  }
  function mn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = so(r), r !== null && ls(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function fi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return zt = mn(zt, n, r, l, o, c), !0;
      case "dragenter":
        return wr = mn(wr, n, r, l, o, c), !0;
      case "mouseover":
        return Dr = mn(Dr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Qu.set(d, mn(Qu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Vt.set(d, mn(Vt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function kp(n) {
    var r = br(n.target);
    if (r !== null) {
      var l = pa(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Bu(l), r !== null) {
            n.blockedOn = r, sf(n.priority, function() {
              We(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Nl(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ss(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Rr = o, l.target.dispatchEvent(o), Rr = null;
      } else
        return r = so(l), r !== null && ls(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function cf(n, r, l) {
    Nl(n) && l.delete(r);
  }
  function bp() {
    Re = !1, zt !== null && Nl(zt) && (zt = null), wr !== null && Nl(wr) && (wr = null), Dr !== null && Nl(Dr) && (Dr = null), Qu.forEach(cf), Vt.forEach(cf);
  }
  function Iu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Re || (Re = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, bp)));
  }
  function Gu(n) {
    function r(c) {
      return Iu(c, n);
    }
    if (0 < $u.length) {
      Iu($u[0], n);
      for (var l = 1; l < $u.length; l++) {
        var o = $u[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (zt !== null && Iu(zt, n), wr !== null && Iu(wr, n), Dr !== null && Iu(Dr, n), Qu.forEach(r), Vt.forEach(r), l = 0; l < Ke.length; l++)
      o = Ke[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ke.length && (l = Ke[0], l.blockedOn === null); )
      kp(l), l.blockedOn === null && Ke.shift();
  }
  var zl = ut.ReactCurrentBatchConfig, $i = !0;
  function _p(n, r, l, o) {
    var c = Ge, d = zl.transition;
    zl.transition = null;
    try {
      Ge = 1, os(n, r, l, o);
    } finally {
      Ge = c, zl.transition = d;
    }
  }
  function us(n, r, l, o) {
    var c = Ge, d = zl.transition;
    zl.transition = null;
    try {
      Ge = 4, os(n, r, l, o);
    } finally {
      Ge = c, zl.transition = d;
    }
  }
  function os(n, r, l, o) {
    if ($i) {
      var c = ss(n, r, l, o);
      if (c === null)
        Es(n, r, o, Wu, l), na(n, o);
      else if (fi(c, n, r, l, o))
        o.stopPropagation();
      else if (na(n, o), r & 4 && -1 < Mm.indexOf(n)) {
        for (; c !== null; ) {
          var d = so(c);
          if (d !== null && wp(d), d = ss(n, r, l, o), d === null && Es(n, r, o, Wu, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Es(n, r, o, null, l);
    }
  }
  var Wu = null;
  function ss(n, r, l, o) {
    if (Wu = null, n = Ct(o), n = br(n), n !== null)
      if (r = pa(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Bu(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Wu = n, null;
  }
  function ff(n) {
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
        switch (km()) {
          case La:
            return 1;
          case Le:
            return 4;
          case ci:
          case Ep:
            return 16;
          case rf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Oa = null, Xu = null, qu = null;
  function df() {
    if (qu)
      return qu;
    var n, r = Xu, l = r.length, o, c = "value" in Oa ? Oa.value : Oa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return qu = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Ul(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ku() {
    return !0;
  }
  function Mp() {
    return !1;
  }
  function lr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var g in n)
        n.hasOwnProperty(g) && (l = n[g], this[g] = l ? l(d) : d[g]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ku : Mp, this.isPropagationStopped = Mp, this;
    }
    return K(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ku);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ku);
    }, persist: function() {
    }, isPersistent: Ku }), r;
  }
  var di = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, cs = lr(di), Al = K({}, di, { view: 0, detail: 0 }), Lp = lr(Al), fs, pf, Zu, Gt = K({}, Al, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zu && (Zu && n.type === "mousemove" ? (fs = n.screenX - Zu.screenX, pf = n.screenY - Zu.screenY) : pf = fs = 0, Zu = n), fs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : pf;
  } }), ds = lr(Gt), Op = K({}, Gt, { dataTransfer: 0 }), Np = lr(Op), Lm = K({}, Al, { relatedTarget: 0 }), pi = lr(Lm), vf = K({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zp = lr(vf), Om = K({}, di, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Nm = lr(Om), zm = K({}, di, { data: 0 }), hf = lr(zm), mf = {
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
  }, Up = {
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
  }, Ap = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Hp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ap[n]) ? !!r[n] : !1;
  }
  function yf() {
    return Hp;
  }
  var Na = K({}, Al, { key: function(n) {
    if (n.key) {
      var r = mf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ul(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Up[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yf, charCode: function(n) {
    return n.type === "keypress" ? Ul(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ul(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Um = lr(Na), gf = K({}, Gt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ps = lr(gf), Sf = K({}, Al, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yf }), Am = lr(Sf), vs = K({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fp = lr(vs), Bn = K({}, Gt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), za = lr(Bn), Ut = [9, 13, 27, 32], ra = An && "CompositionEvent" in window, Qi = null;
  An && "documentMode" in document && (Qi = document.documentMode);
  var hs = An && "TextEvent" in window && !Qi, jp = An && (!ra || Qi && 8 < Qi && 11 >= Qi), Hl = String.fromCharCode(32), Vp = !1;
  function Bp(n, r) {
    switch (n) {
      case "keyup":
        return Ut.indexOf(r.keyCode) !== -1;
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
  function ms(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Fl = !1;
  function Hm(n, r) {
    switch (n) {
      case "compositionend":
        return ms(r);
      case "keypress":
        return r.which !== 32 ? null : (Vp = !0, Hl);
      case "textInput":
        return n = r.data, n === Hl && Vp ? null : n;
      default:
        return null;
    }
  }
  function Fm(n, r) {
    if (Fl)
      return n === "compositionend" || !ra && Bp(n, r) ? (n = df(), qu = Xu = Oa = null, Fl = !1, n) : null;
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
        return jp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Pp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Yp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Pp[n.type] : r === "textarea";
  }
  function $p(n, r, l, o) {
    Jo(o), r = lo(r, "onChange"), 0 < r.length && (l = new cs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ju = null, jl = null;
  function Vl(n) {
    Cs(n, 0);
  }
  function Bl(n) {
    var r = Yl(n);
    if (ba(r))
      return n;
  }
  function Qp(n, r) {
    if (n === "change")
      return r;
  }
  var Cf = !1;
  if (An) {
    var Ef;
    if (An) {
      var Tf = "oninput" in document;
      if (!Tf) {
        var Ip = document.createElement("div");
        Ip.setAttribute("oninput", "return;"), Tf = typeof Ip.oninput == "function";
      }
      Ef = Tf;
    } else
      Ef = !1;
    Cf = Ef && (!document.documentMode || 9 < document.documentMode);
  }
  function Gp() {
    Ju && (Ju.detachEvent("onpropertychange", Wp), jl = Ju = null);
  }
  function Wp(n) {
    if (n.propertyName === "value" && Bl(jl)) {
      var r = [];
      $p(r, jl, n, Ct(n)), Jc(Vl, r);
    }
  }
  function jm(n, r, l) {
    n === "focusin" ? (Gp(), Ju = r, jl = l, Ju.attachEvent("onpropertychange", Wp)) : n === "focusout" && Gp();
  }
  function Vm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Bl(jl);
  }
  function Bm(n, r) {
    if (n === "click")
      return Bl(r);
  }
  function Xp(n, r) {
    if (n === "input" || n === "change")
      return Bl(r);
  }
  function Pm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var kr = typeof Object.is == "function" ? Object.is : Pm;
  function eo(n, r) {
    if (kr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!we.call(r, c) || !kr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function qp(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Kp(n, r) {
    var l = qp(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = qp(l);
    }
  }
  function Zp(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Zp(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ys() {
    for (var n = window, r = vn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = vn(n.document);
    }
    return r;
  }
  function Ua(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function gs(n) {
    var r = ys(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Zp(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ua(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Kp(l, d);
          var h = Kp(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Jp = An && "documentMode" in document && 11 >= document.documentMode, aa = null, Rf = null, to = null, xf = !1;
  function ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    xf || aa == null || aa !== vn(o) || (o = aa, "selectionStart" in o && Ua(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), to && eo(to, o) || (to = o, o = lo(Rf, "onSelect"), 0 < o.length && (r = new cs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = aa)));
  }
  function Ss(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ii = { animationend: Ss("Animation", "AnimationEnd"), animationiteration: Ss("Animation", "AnimationIteration"), animationstart: Ss("Animation", "AnimationStart"), transitionend: Ss("Transition", "TransitionEnd") }, wf = {}, Df = {};
  An && (Df = document.createElement("div").style, "AnimationEvent" in window || (delete Ii.animationend.animation, delete Ii.animationiteration.animation, delete Ii.animationstart.animation), "TransitionEvent" in window || delete Ii.transitionend.transition);
  function Wt(n) {
    if (wf[n])
      return wf[n];
    if (!Ii[n])
      return n;
    var r = Ii[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Df)
        return wf[n] = r[l];
    return n;
  }
  var kf = Wt("animationend"), tv = Wt("animationiteration"), nv = Wt("animationstart"), rv = Wt("transitionend"), av = /* @__PURE__ */ new Map(), iv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    av.set(n, r), et(r, [n]);
  }
  for (var no = 0; no < iv.length; no++) {
    var Gi = iv[no], Ym = Gi.toLowerCase(), ro = Gi[0].toUpperCase() + Gi.slice(1);
    Aa(Ym, "on" + ro);
  }
  Aa(kf, "onAnimationEnd"), Aa(tv, "onAnimationIteration"), Aa(nv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(rv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), et("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), et("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), et("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), et("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), et("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ao = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $m = new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));
  function lv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Ml(o, r, void 0, n), n.currentTarget = null;
  }
  function Cs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var g = o[h], C = g.instance, _ = g.currentTarget;
            if (g = g.listener, C !== d && c.isPropagationStopped())
              break e;
            lv(c, g, _), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (g = o[h], C = g.instance, _ = g.currentTarget, g = g.listener, C !== d && c.isPropagationStopped())
              break e;
            lv(c, g, _), d = C;
          }
      }
    }
    if (_l)
      throw n = Vu, _l = !1, Vu = null, n;
  }
  function rt(n, r) {
    var l = r[zf];
    l === void 0 && (l = r[zf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (uv(r, n, 2, !1), l.add(o));
  }
  function vi(n, r, l) {
    var o = 0;
    r && (o |= 4), uv(l, n, o, r);
  }
  var Ha = "_reactListening" + Math.random().toString(36).slice(2);
  function Pl(n) {
    if (!n[Ha]) {
      n[Ha] = !0, gr.forEach(function(l) {
        l !== "selectionchange" && ($m.has(l) || vi(l, !1, n), vi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ha] || (r[Ha] = !0, vi("selectionchange", !1, r));
    }
  }
  function uv(n, r, l, o) {
    switch (ff(r)) {
      case 1:
        var c = _p;
        break;
      case 4:
        c = us;
        break;
      default:
        c = os;
    }
    l = c.bind(null, r, l, n), c = void 0, !ns || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Es(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var h = o.tag;
          if (h === 3 || h === 4) {
            var g = o.stateNode.containerInfo;
            if (g === c || g.nodeType === 8 && g.parentNode === c)
              break;
            if (h === 4)
              for (h = o.return; h !== null; ) {
                var C = h.tag;
                if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c))
                  return;
                h = h.return;
              }
            for (; g !== null; ) {
              if (h = br(g), h === null)
                return;
              if (C = h.tag, C === 5 || C === 6) {
                o = d = h;
                continue e;
              }
              g = g.parentNode;
            }
          }
          o = o.return;
        }
    Jc(function() {
      var _ = d, H = Ct(l), F = [];
      e: {
        var A = av.get(n);
        if (A !== void 0) {
          var G = cs, Z = n;
          switch (n) {
            case "keypress":
              if (Ul(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              G = Um;
              break;
            case "focusin":
              Z = "focus", G = pi;
              break;
            case "focusout":
              Z = "blur", G = pi;
              break;
            case "beforeblur":
            case "afterblur":
              G = pi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Np;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Am;
              break;
            case kf:
            case tv:
            case nv:
              G = zp;
              break;
            case rv:
              G = Fp;
              break;
            case "scroll":
              G = Lp;
              break;
            case "wheel":
              G = za;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Nm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = ps;
          }
          var te = (r & 4) !== 0, Mt = !te && n === "scroll", x = te ? A !== null ? A + "Capture" : null : A;
          te = [];
          for (var T = _, k; T !== null; ) {
            k = T;
            var V = k.stateNode;
            if (k.tag === 5 && V !== null && (k = V, x !== null && (V = ju(T, x), V != null && te.push(io(T, V, k)))), Mt)
              break;
            T = T.return;
          }
          0 < te.length && (A = new G(A, Z, null, l, H), F.push({ event: A, listeners: te }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (A = n === "mouseover" || n === "pointerover", G = n === "mouseout" || n === "pointerout", A && l !== Rr && (Z = l.relatedTarget || l.fromElement) && (br(Z) || Z[Fa]))
            break e;
          if ((G || A) && (A = H.window === H ? H : (A = H.ownerDocument) ? A.defaultView || A.parentWindow : window, G ? (Z = l.relatedTarget || l.toElement, G = _, Z = Z ? br(Z) : null, Z !== null && (Mt = pa(Z), Z !== Mt || Z.tag !== 5 && Z.tag !== 6) && (Z = null)) : (G = null, Z = _), G !== Z)) {
            if (te = ds, V = "onMouseLeave", x = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (te = ps, V = "onPointerLeave", x = "onPointerEnter", T = "pointer"), Mt = G == null ? A : Yl(G), k = Z == null ? A : Yl(Z), A = new te(V, T + "leave", G, l, H), A.target = Mt, A.relatedTarget = k, V = null, br(H) === _ && (te = new te(x, T + "enter", Z, l, H), te.target = k, te.relatedTarget = Mt, V = te), Mt = V, G && Z)
              t: {
                for (te = G, x = Z, T = 0, k = te; k; k = Wi(k))
                  T++;
                for (k = 0, V = x; V; V = Wi(V))
                  k++;
                for (; 0 < T - k; )
                  te = Wi(te), T--;
                for (; 0 < k - T; )
                  x = Wi(x), k--;
                for (; T--; ) {
                  if (te === x || x !== null && te === x.alternate)
                    break t;
                  te = Wi(te), x = Wi(x);
                }
                te = null;
              }
            else
              te = null;
            G !== null && bf(F, A, G, te, !1), Z !== null && Mt !== null && bf(F, Mt, Z, te, !0);
          }
        }
        e: {
          if (A = _ ? Yl(_) : window, G = A.nodeName && A.nodeName.toLowerCase(), G === "select" || G === "input" && A.type === "file")
            var re = Qp;
          else if (Yp(A))
            if (Cf)
              re = Xp;
            else {
              re = Vm;
              var ve = jm;
            }
          else
            (G = A.nodeName) && G.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (re = Bm);
          if (re && (re = re(n, _))) {
            $p(F, re, l, H);
            break e;
          }
          ve && ve(n, A, _), n === "focusout" && (ve = A._wrapperState) && ve.controlled && A.type === "number" && kl(A, "number", A.value);
        }
        switch (ve = _ ? Yl(_) : window, n) {
          case "focusin":
            (Yp(ve) || ve.contentEditable === "true") && (aa = ve, Rf = _, to = null);
            break;
          case "focusout":
            to = Rf = aa = null;
            break;
          case "mousedown":
            xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xf = !1, ev(F, l, H);
            break;
          case "selectionchange":
            if (Jp)
              break;
          case "keydown":
          case "keyup":
            ev(F, l, H);
        }
        var J;
        if (ra)
          e: {
            switch (n) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Fl ? Bp(n, l) && (he = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (he = "onCompositionStart");
        he && (jp && l.locale !== "ko" && (Fl || he !== "onCompositionStart" ? he === "onCompositionEnd" && Fl && (J = df()) : (Oa = H, Xu = "value" in Oa ? Oa.value : Oa.textContent, Fl = !0)), ve = lo(_, he), 0 < ve.length && (he = new hf(he, n, null, l, H), F.push({ event: he, listeners: ve }), J ? he.data = J : (J = ms(l), J !== null && (he.data = J)))), (J = hs ? Hm(n, l) : Fm(n, l)) && (_ = lo(_, "onBeforeInput"), 0 < _.length && (H = new hf("onBeforeInput", "beforeinput", null, l, H), F.push({ event: H, listeners: _ }), H.data = J));
      }
      Cs(F, r);
    });
  }
  function io(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function lo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ju(n, l), d != null && o.unshift(io(n, d, c)), d = ju(n, r), d != null && o.push(io(n, d, c))), n = n.return;
    }
    return o;
  }
  function Wi(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var g = l, C = g.alternate, _ = g.stateNode;
      if (C !== null && C === o)
        break;
      g.tag === 5 && _ !== null && (g = _, c ? (C = ju(l, d), C != null && h.unshift(io(l, C, g))) : c || (C = ju(l, d), C != null && h.push(io(l, C, g)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var _f = /\r\n?/g, Qm = /\u0000|\uFFFD/g;
  function Mf(n) {
    return (typeof n == "string" ? n : "" + n).replace(_f, `
`).replace(Qm, "");
  }
  function Ts(n, r, l) {
    if (r = Mf(r), Mf(n) !== r && l)
      throw Error(N(425));
  }
  function Rs() {
  }
  var Lf = null, Xi = null;
  function uo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var qi = typeof setTimeout == "function" ? setTimeout : void 0, ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Of = typeof Promise == "function" ? Promise : void 0, Nf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Of < "u" ? function(n) {
    return Of.resolve(null).then(n).catch(Im);
  } : qi;
  function Im(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function hi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), Gu(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Gu(r);
  }
  function ia(n) {
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
  function oo(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var mi = Math.random().toString(36).slice(2), va = "__reactFiber$" + mi, Ki = "__reactProps$" + mi, Fa = "__reactContainer$" + mi, zf = "__reactEvents$" + mi, Gm = "__reactListeners$" + mi, Uf = "__reactHandles$" + mi;
  function br(n) {
    var r = n[va];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fa] || l[va]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = oo(n); n !== null; ) {
            if (l = n[va])
              return l;
            n = oo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function so(n) {
    return n = n[va] || n[Fa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Yl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(N(33));
  }
  function ce(n) {
    return n[Ki] || null;
  }
  var yi = [], ot = -1;
  function De(n) {
    return { current: n };
  }
  function Ye(n) {
    0 > ot || (n.current = yi[ot], yi[ot] = null, ot--);
  }
  function $e(n, r) {
    ot++, yi[ot] = n.current, n.current = r;
  }
  var ha = {}, Se = De(ha), Rt = De(!1), Pn = ha;
  function _r(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return ha;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function dt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Mr() {
    Ye(Rt), Ye(Se);
  }
  function gi(n, r, l) {
    if (Se.current !== ha)
      throw Error(N(168));
    $e(Se, r), $e(Rt, l);
  }
  function co(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(N(108, ii(n) || "Unknown", c));
    return K({}, l, o);
  }
  function xs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ha, Pn = Se.current, $e(Se, n), $e(Rt, Rt.current), !0;
  }
  function sv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(N(169));
    l ? (n = co(n, r, Pn), o.__reactInternalMemoizedMergedChildContext = n, Ye(Rt), Ye(Se), $e(Se, n)) : Ye(Rt), $e(Rt, l);
  }
  var ur = null, Xt = !1, fo = !1;
  function Af(n) {
    ur === null ? ur = [n] : ur.push(n);
  }
  function Hf(n) {
    Xt = !0, Af(n);
  }
  function Yn() {
    if (!fo && ur !== null) {
      fo = !0;
      var n = 0, r = Ge;
      try {
        var l = ur;
        for (Ge = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ur = null, Xt = !1;
      } catch (c) {
        throw ur !== null && (ur = ur.slice(n + 1)), nf(La, Yn), c;
      } finally {
        Ge = r, fo = !1;
      }
    }
    return null;
  }
  var Si = [], $n = 0, Zi = null, $l = 0, Qn = [], yn = 0, Lr = null, tn = 1, ja = "";
  function or(n, r) {
    Si[$n++] = $l, Si[$n++] = Zi, Zi = n, $l = r;
  }
  function Ff(n, r, l) {
    Qn[yn++] = tn, Qn[yn++] = ja, Qn[yn++] = Lr, Lr = n;
    var o = tn;
    n = ja;
    var c = 32 - xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - xr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, tn = 1 << 32 - xr(r) + c | l << c | o, ja = d + n;
    } else
      tn = 1 << d | l << c | o, ja = n;
  }
  function ws(n) {
    n.return !== null && (or(n, 1), Ff(n, 1, 0));
  }
  function jf(n) {
    for (; n === Zi; )
      Zi = Si[--$n], Si[$n] = null, $l = Si[--$n], Si[$n] = null;
    for (; n === Lr; )
      Lr = Qn[--yn], Qn[yn] = null, ja = Qn[--yn], Qn[yn] = null, tn = Qn[--yn], Qn[yn] = null;
  }
  var sr = null, In = null, st = !1, Or = null;
  function Vf(n, r) {
    var l = Vr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function cv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, sr = n, In = ia(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, sr = n, In = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Lr !== null ? { id: tn, overflow: ja } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Vr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, sr = n, In = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ds(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function ks(n) {
    if (st) {
      var r = In;
      if (r) {
        var l = r;
        if (!cv(n, r)) {
          if (Ds(n))
            throw Error(N(418));
          r = ia(l.nextSibling);
          var o = sr;
          r && cv(n, r) ? Vf(o, l) : (n.flags = n.flags & -4097 | 2, st = !1, sr = n);
        }
      } else {
        if (Ds(n))
          throw Error(N(418));
        n.flags = n.flags & -4097 | 2, st = !1, sr = n;
      }
    }
  }
  function fv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    sr = n;
  }
  function bs(n) {
    if (n !== sr)
      return !1;
    if (!st)
      return fv(n), st = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !uo(n.type, n.memoizedProps)), r && (r = In)) {
      if (Ds(n))
        throw dv(), Error(N(418));
      for (; r; )
        Vf(n, r), r = ia(r.nextSibling);
    }
    if (fv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(N(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                In = ia(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        In = null;
      }
    } else
      In = sr ? ia(n.stateNode.nextSibling) : null;
    return !0;
  }
  function dv() {
    for (var n = In; n; )
      n = ia(n.nextSibling);
  }
  function mt() {
    In = sr = null, st = !1;
  }
  function Bf(n) {
    Or === null ? Or = [n] : Or.push(n);
  }
  var _s = ut.ReactCurrentBatchConfig;
  function Ji(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(N(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(N(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var g = c.refs;
          h === null ? delete g[d] : g[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(N(284));
      if (!l._owner)
        throw Error(N(290, n));
    }
    return n;
  }
  function ma(n, r) {
    throw n = Object.prototype.toString.call(r), Error(N(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function pv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ms(n) {
    function r(x, T) {
      if (n) {
        var k = x.deletions;
        k === null ? (x.deletions = [T], x.flags |= 16) : k.push(T);
      }
    }
    function l(x, T) {
      if (!n)
        return null;
      for (; T !== null; )
        r(x, T), T = T.sibling;
      return null;
    }
    function o(x, T) {
      for (x = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), T = T.sibling;
      return x;
    }
    function c(x, T) {
      return x = ki(x, T), x.index = 0, x.sibling = null, x;
    }
    function d(x, T, k) {
      return x.index = k, n ? (k = x.alternate, k !== null ? (k = k.index, k < T ? (x.flags |= 2, T) : k) : (x.flags |= 2, T)) : (x.flags |= 1048576, T);
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function g(x, T, k, V) {
      return T === null || T.tag !== 6 ? (T = yc(k, x.mode, V), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function C(x, T, k, V) {
      var re = k.type;
      return re === be ? H(x, T, k.props.children, V, k.key) : T !== null && (T.elementType === re || typeof re == "object" && re !== null && re.$$typeof === St && pv(re) === T.type) ? (V = c(T, k.props), V.ref = Ji(x, T, k), V.return = x, V) : (V = hc(k.type, k.key, k.props, null, x.mode, V), V.ref = Ji(x, T, k), V.return = x, V);
    }
    function _(x, T, k, V) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = Mo(k, x.mode, V), T.return = x, T) : (T = c(T, k.children || []), T.return = x, T);
    }
    function H(x, T, k, V, re) {
      return T === null || T.tag !== 7 ? (T = vl(k, x.mode, V, re), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function F(x, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = yc("" + T, x.mode, k), T.return = x, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ue:
            return k = hc(T.type, T.key, T.props, null, x.mode, k), k.ref = Ji(x, null, T), k.return = x, k;
          case ht:
            return T = Mo(T, x.mode, k), T.return = x, T;
          case St:
            var V = T._init;
            return F(x, V(T._payload), k);
        }
        if (ji(T) || ye(T))
          return T = vl(T, x.mode, k, null), T.return = x, T;
        ma(x, T);
      }
      return null;
    }
    function A(x, T, k, V) {
      var re = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return re !== null ? null : g(x, T, "" + k, V);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ue:
            return k.key === re ? C(x, T, k, V) : null;
          case ht:
            return k.key === re ? _(x, T, k, V) : null;
          case St:
            return re = k._init, A(
              x,
              T,
              re(k._payload),
              V
            );
        }
        if (ji(k) || ye(k))
          return re !== null ? null : H(x, T, k, V, null);
        ma(x, k);
      }
      return null;
    }
    function G(x, T, k, V, re) {
      if (typeof V == "string" && V !== "" || typeof V == "number")
        return x = x.get(k) || null, g(T, x, "" + V, re);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Ue:
            return x = x.get(V.key === null ? k : V.key) || null, C(T, x, V, re);
          case ht:
            return x = x.get(V.key === null ? k : V.key) || null, _(T, x, V, re);
          case St:
            var ve = V._init;
            return G(x, T, k, ve(V._payload), re);
        }
        if (ji(V) || ye(V))
          return x = x.get(k) || null, H(T, x, V, re, null);
        ma(T, V);
      }
      return null;
    }
    function Z(x, T, k, V) {
      for (var re = null, ve = null, J = T, he = T = 0, Qt = null; J !== null && he < k.length; he++) {
        J.index > he ? (Qt = J, J = null) : Qt = J.sibling;
        var Ve = A(x, J, k[he], V);
        if (Ve === null) {
          J === null && (J = Qt);
          break;
        }
        n && J && Ve.alternate === null && r(x, J), T = d(Ve, T, he), ve === null ? re = Ve : ve.sibling = Ve, ve = Ve, J = Qt;
      }
      if (he === k.length)
        return l(x, J), st && or(x, he), re;
      if (J === null) {
        for (; he < k.length; he++)
          J = F(x, k[he], V), J !== null && (T = d(J, T, he), ve === null ? re = J : ve.sibling = J, ve = J);
        return st && or(x, he), re;
      }
      for (J = o(x, J); he < k.length; he++)
        Qt = G(J, x, he, k[he], V), Qt !== null && (n && Qt.alternate !== null && J.delete(Qt.key === null ? he : Qt.key), T = d(Qt, T, he), ve === null ? re = Qt : ve.sibling = Qt, ve = Qt);
      return n && J.forEach(function(Ia) {
        return r(x, Ia);
      }), st && or(x, he), re;
    }
    function te(x, T, k, V) {
      var re = ye(k);
      if (typeof re != "function")
        throw Error(N(150));
      if (k = re.call(k), k == null)
        throw Error(N(151));
      for (var ve = re = null, J = T, he = T = 0, Qt = null, Ve = k.next(); J !== null && !Ve.done; he++, Ve = k.next()) {
        J.index > he ? (Qt = J, J = null) : Qt = J.sibling;
        var Ia = A(x, J, Ve.value, V);
        if (Ia === null) {
          J === null && (J = Qt);
          break;
        }
        n && J && Ia.alternate === null && r(x, J), T = d(Ia, T, he), ve === null ? re = Ia : ve.sibling = Ia, ve = Ia, J = Qt;
      }
      if (Ve.done)
        return l(
          x,
          J
        ), st && or(x, he), re;
      if (J === null) {
        for (; !Ve.done; he++, Ve = k.next())
          Ve = F(x, Ve.value, V), Ve !== null && (T = d(Ve, T, he), ve === null ? re = Ve : ve.sibling = Ve, ve = Ve);
        return st && or(x, he), re;
      }
      for (J = o(x, J); !Ve.done; he++, Ve = k.next())
        Ve = G(J, x, he, Ve.value, V), Ve !== null && (n && Ve.alternate !== null && J.delete(Ve.key === null ? he : Ve.key), T = d(Ve, T, he), ve === null ? re = Ve : ve.sibling = Ve, ve = Ve);
      return n && J.forEach(function(fy) {
        return r(x, fy);
      }), st && or(x, he), re;
    }
    function Mt(x, T, k, V) {
      if (typeof k == "object" && k !== null && k.type === be && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ue:
            e: {
              for (var re = k.key, ve = T; ve !== null; ) {
                if (ve.key === re) {
                  if (re = k.type, re === be) {
                    if (ve.tag === 7) {
                      l(x, ve.sibling), T = c(ve, k.props.children), T.return = x, x = T;
                      break e;
                    }
                  } else if (ve.elementType === re || typeof re == "object" && re !== null && re.$$typeof === St && pv(re) === ve.type) {
                    l(x, ve.sibling), T = c(ve, k.props), T.ref = Ji(x, ve, k), T.return = x, x = T;
                    break e;
                  }
                  l(x, ve);
                  break;
                } else
                  r(x, ve);
                ve = ve.sibling;
              }
              k.type === be ? (T = vl(k.props.children, x.mode, V, k.key), T.return = x, x = T) : (V = hc(k.type, k.key, k.props, null, x.mode, V), V.ref = Ji(x, T, k), V.return = x, x = V);
            }
            return h(x);
          case ht:
            e: {
              for (ve = k.key; T !== null; ) {
                if (T.key === ve)
                  if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                    l(x, T.sibling), T = c(T, k.children || []), T.return = x, x = T;
                    break e;
                  } else {
                    l(x, T);
                    break;
                  }
                else
                  r(x, T);
                T = T.sibling;
              }
              T = Mo(k, x.mode, V), T.return = x, x = T;
            }
            return h(x);
          case St:
            return ve = k._init, Mt(x, T, ve(k._payload), V);
        }
        if (ji(k))
          return Z(x, T, k, V);
        if (ye(k))
          return te(x, T, k, V);
        ma(x, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(x, T.sibling), T = c(T, k), T.return = x, x = T) : (l(x, T), T = yc(k, x.mode, V), T.return = x, x = T), h(x)) : l(x, T);
    }
    return Mt;
  }
  var Ql = Ms(!0), vv = Ms(!1), Va = De(null), Bt = null, B = null, Nr = null;
  function cr() {
    Nr = B = Bt = null;
  }
  function Pf(n) {
    var r = Va.current;
    Ye(Va), n._currentValue = r;
  }
  function Yf(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Il(n, r) {
    Bt = n, Nr = B = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Xn = !0), n.firstContext = null);
  }
  function zr(n) {
    var r = n._currentValue;
    if (Nr !== n)
      if (n = { context: n, memoizedValue: r, next: null }, B === null) {
        if (Bt === null)
          throw Error(N(308));
        B = n, Bt.dependencies = { lanes: 0, firstContext: n };
      } else
        B = B.next = n;
    return r;
  }
  var el = null;
  function At(n) {
    el === null ? el = [n] : el.push(n);
  }
  function hv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, At(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ba(n, o);
  }
  function Ba(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ci = !1;
  function Ls(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Gl(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ei(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Oe & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ba(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, At(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ba(n, l);
  }
  function Os(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yu(n, l);
    }
  }
  function mv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ns(n, r, l, o) {
    var c = n.updateQueue;
    Ci = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, g = c.shared.pending;
    if (g !== null) {
      c.shared.pending = null;
      var C = g, _ = C.next;
      C.next = null, h === null ? d = _ : h.next = _, h = C;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, g = H.lastBaseUpdate, g !== h && (g === null ? H.firstBaseUpdate = _ : g.next = _, H.lastBaseUpdate = C));
    }
    if (d !== null) {
      var F = c.baseState;
      h = 0, H = _ = C = null, g = d;
      do {
        var A = g.lane, G = g.eventTime;
        if ((o & A) === A) {
          H !== null && (H = H.next = {
            eventTime: G,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var Z = n, te = g;
            switch (A = r, G = l, te.tag) {
              case 1:
                if (Z = te.payload, typeof Z == "function") {
                  F = Z.call(G, F, A);
                  break e;
                }
                F = Z;
                break e;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = te.payload, A = typeof Z == "function" ? Z.call(G, F, A) : Z, A == null)
                  break e;
                F = K({}, F, A);
                break e;
              case 2:
                Ci = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (n.flags |= 64, A = c.effects, A === null ? c.effects = [g] : A.push(g));
        } else
          G = { eventTime: G, lane: A, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, H === null ? (_ = H = G, C = F) : H = H.next = G, h |= A;
        if (g = g.next, g === null) {
          if (g = c.shared.pending, g === null)
            break;
          A = g, g = A.next, A.next = null, c.lastBaseUpdate = A, c.shared.pending = null;
        }
      } while (1);
      if (H === null && (C = F), c.baseState = C, c.firstBaseUpdate = _, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      cl |= h, n.lanes = h, n.memoizedState = F;
    }
  }
  function yv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(N(191, c));
          c.call(o);
        }
      }
  }
  var po = {}, la = De(po), Wl = De(po), vo = De(po);
  function tl(n) {
    if (n === po)
      throw Error(N(174));
    return n;
  }
  function $f(n, r) {
    switch ($e(vo, r), $e(Wl, n), $e(la, po), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Vn(r, n);
    }
    Ye(la), $e(la, r);
  }
  function Xl() {
    Ye(la), Ye(Wl), Ye(vo);
  }
  function gv(n) {
    tl(vo.current);
    var r = tl(la.current), l = Vn(r, n.type);
    r !== l && ($e(Wl, n), $e(la, l));
  }
  function Qf(n) {
    Wl.current === n && (Ye(la), Ye(Wl));
  }
  var pt = De(0);
  function zs(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
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
  var Us = [];
  function If() {
    for (var n = 0; n < Us.length; n++)
      Us[n]._workInProgressVersionPrimary = null;
    Us.length = 0;
  }
  var As = ut.ReactCurrentDispatcher, ho = ut.ReactCurrentBatchConfig, ne = 0, ae = null, Ce = null, ke = null, fr = !1, ql = !1, mo = 0, Wm = 0;
  function gn() {
    throw Error(N(321));
  }
  function yo(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!kr(n[l], r[l]))
        return !1;
    return !0;
  }
  function U(n, r, l, o, c, d) {
    if (ne = d, ae = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, As.current = n === null || n.memoizedState === null ? Xm : it, n = l(o, c), ql) {
      d = 0;
      do {
        if (ql = !1, mo = 0, 25 <= d)
          throw Error(N(301));
        d += 1, ke = Ce = null, r.updateQueue = null, As.current = Ks, n = l(o, c);
      } while (ql);
    }
    if (As.current = Sn, r = Ce !== null && Ce.next !== null, ne = 0, ke = Ce = ae = null, fr = !1, r)
      throw Error(N(300));
    return n;
  }
  function Ht() {
    var n = mo !== 0;
    return mo = 0, n;
  }
  function oe() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ke === null ? ae.memoizedState = ke = n : ke = ke.next = n, ke;
  }
  function nn() {
    if (Ce === null) {
      var n = ae.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Ce.next;
    var r = ke === null ? ae.memoizedState : ke.next;
    if (r !== null)
      ke = r, Ce = n;
    else {
      if (n === null)
        throw Error(N(310));
      Ce = n, n = { memoizedState: Ce.memoizedState, baseState: Ce.baseState, baseQueue: Ce.baseQueue, queue: Ce.queue, next: null }, ke === null ? ae.memoizedState = ke = n : ke = ke.next = n;
    }
    return ke;
  }
  function dr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Pa(n) {
    var r = nn(), l = r.queue;
    if (l === null)
      throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = Ce, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var g = h = null, C = null, _ = d;
      do {
        var H = _.lane;
        if ((ne & H) === H)
          C !== null && (C = C.next = { lane: 0, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), o = _.hasEagerState ? _.eagerState : n(o, _.action);
        else {
          var F = {
            lane: H,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          };
          C === null ? (g = C = F, h = o) : C = C.next = F, ae.lanes |= H, cl |= H;
        }
        _ = _.next;
      } while (_ !== null && _ !== d);
      C === null ? h = o : C.next = g, kr(o, r.memoizedState) || (Xn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ae.lanes |= d, cl |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ur(n) {
    var r = nn(), l = r.queue;
    if (l === null)
      throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      kr(d, r.memoizedState) || (Xn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Kl() {
  }
  function nl(n, r) {
    var l = ae, o = nn(), c = r(), d = !kr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Xn = !0), o = o.queue, go(Fs.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ke !== null && ke.memoizedState.tag & 1) {
      if (l.flags |= 2048, rl(9, Hs.bind(null, l, o, c, r), void 0, null), wt === null)
        throw Error(N(349));
      ne & 30 || Zl(l, r, c);
    }
    return c;
  }
  function Zl(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ae.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ae.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Hs(n, r, l, o) {
    r.value = l, r.getSnapshot = o, js(r) && Vs(n);
  }
  function Fs(n, r, l) {
    return l(function() {
      js(r) && Vs(n);
    });
  }
  function js(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !kr(n, l);
    } catch {
      return !0;
    }
  }
  function Vs(n) {
    var r = Ba(n, 1);
    r !== null && yt(r, n, 1, -1);
  }
  function Bs(n) {
    var r = oe();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: dr, lastRenderedState: n }, r.queue = n, n = n.dispatch = So.bind(null, ae, n), [r.memoizedState, n];
  }
  function rl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ae.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ae.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ps() {
    return nn().memoizedState;
  }
  function Jl(n, r, l, o) {
    var c = oe();
    ae.flags |= n, c.memoizedState = rl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function eu(n, r, l, o) {
    var c = nn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ce !== null) {
      var h = Ce.memoizedState;
      if (d = h.destroy, o !== null && yo(o, h.deps)) {
        c.memoizedState = rl(r, l, d, o);
        return;
      }
    }
    ae.flags |= n, c.memoizedState = rl(1 | r, l, d, o);
  }
  function Ys(n, r) {
    return Jl(8390656, 8, n, r);
  }
  function go(n, r) {
    return eu(2048, 8, n, r);
  }
  function $s(n, r) {
    return eu(4, 2, n, r);
  }
  function Qs(n, r) {
    return eu(4, 4, n, r);
  }
  function Is(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Gs(n, r, l) {
    return l = l != null ? l.concat([n]) : null, eu(4, 4, Is.bind(null, r, n), l);
  }
  function tu() {
  }
  function al(n, r) {
    var l = nn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && yo(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ws(n, r) {
    var l = nn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && yo(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Xs(n, r, l) {
    return ne & 21 ? (kr(l, r) || (l = is(), ae.lanes |= l, cl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Xn = !0), n.memoizedState = l);
  }
  function Gf(n, r) {
    var l = Ge;
    Ge = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ho.transition;
    ho.transition = {};
    try {
      n(!1), r();
    } finally {
      Ge = l, ho.transition = o;
    }
  }
  function qs() {
    return nn().memoizedState;
  }
  function Sv(n, r, l) {
    var o = Qa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Wf(n))
      nu(r, l);
    else if (l = hv(n, r, l, o), l !== null) {
      var c = Zt();
      yt(l, n, o, c), Ti(l, r, o);
    }
  }
  function So(n, r, l) {
    var o = Qa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Wf(n))
      nu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, g = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = g, kr(g, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, At(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = hv(n, r, c, o), l !== null && (c = Zt(), yt(l, n, o, c), Ti(l, r, o));
    }
  }
  function Wf(n) {
    var r = n.alternate;
    return n === ae || r !== null && r === ae;
  }
  function nu(n, r) {
    ql = fr = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ti(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yu(n, l);
    }
  }
  var Sn = { readContext: zr, useCallback: gn, useContext: gn, useEffect: gn, useImperativeHandle: gn, useInsertionEffect: gn, useLayoutEffect: gn, useMemo: gn, useReducer: gn, useRef: gn, useState: gn, useDebugValue: gn, useDeferredValue: gn, useTransition: gn, useMutableSource: gn, useSyncExternalStore: gn, useId: gn, unstable_isNewReconciler: !1 }, Xm = { readContext: zr, useCallback: function(n, r) {
    return oe().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: zr, useEffect: Ys, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Jl(
      4194308,
      4,
      Is.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Jl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Jl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = oe();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = oe();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Sv.bind(null, ae, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = oe();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Bs, useDebugValue: tu, useDeferredValue: function(n) {
    return oe().memoizedState = n;
  }, useTransition: function() {
    var n = Bs(!1), r = n[0];
    return n = Gf.bind(null, n[1]), oe().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ae, c = oe();
    if (st) {
      if (l === void 0)
        throw Error(N(407));
      l = l();
    } else {
      if (l = r(), wt === null)
        throw Error(N(349));
      ne & 30 || Zl(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ys(Fs.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, rl(9, Hs.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = oe(), r = wt.identifierPrefix;
    if (st) {
      var l = ja, o = tn;
      l = (o & ~(1 << 32 - xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = mo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Wm++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, it = {
    readContext: zr,
    useCallback: al,
    useContext: zr,
    useEffect: go,
    useImperativeHandle: Gs,
    useInsertionEffect: $s,
    useLayoutEffect: Qs,
    useMemo: Ws,
    useReducer: Pa,
    useRef: Ps,
    useState: function() {
      return Pa(dr);
    },
    useDebugValue: tu,
    useDeferredValue: function(n) {
      var r = nn();
      return Xs(r, Ce.memoizedState, n);
    },
    useTransition: function() {
      var n = Pa(dr)[0], r = nn().memoizedState;
      return [n, r];
    },
    useMutableSource: Kl,
    useSyncExternalStore: nl,
    useId: qs,
    unstable_isNewReconciler: !1
  }, Ks = { readContext: zr, useCallback: al, useContext: zr, useEffect: go, useImperativeHandle: Gs, useInsertionEffect: $s, useLayoutEffect: Qs, useMemo: Ws, useReducer: Ur, useRef: Ps, useState: function() {
    return Ur(dr);
  }, useDebugValue: tu, useDeferredValue: function(n) {
    var r = nn();
    return Ce === null ? r.memoizedState = n : Xs(r, Ce.memoizedState, n);
  }, useTransition: function() {
    var n = Ur(dr)[0], r = nn().memoizedState;
    return [n, r];
  }, useMutableSource: Kl, useSyncExternalStore: nl, useId: qs, unstable_isNewReconciler: !1 };
  function Wn(n, r) {
    if (n && n.defaultProps) {
      r = K({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function il(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : K({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var ll = { isMounted: function(n) {
    return (n = n._reactInternals) ? pa(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zt(), c = Qa(n), d = Gn(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ei(n, d, c), r !== null && (yt(r, n, c, o), Os(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zt(), c = Qa(n), d = Gn(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ei(n, d, c), r !== null && (yt(r, n, c, o), Os(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Zt(), o = Qa(n), c = Gn(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ei(n, c, o), r !== null && (yt(r, n, o, l), Os(r, n, o));
  } };
  function Cv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !eo(l, o) || !eo(c, d) : !0;
  }
  function Ev(n, r, l) {
    var o = !1, c = ha, d = r.contextType;
    return typeof d == "object" && d !== null ? d = zr(d) : (c = dt(r) ? Pn : Se.current, o = r.contextTypes, d = (o = o != null) ? _r(n, c) : ha), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ll, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Tv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && ll.enqueueReplaceState(r, r.state, null);
  }
  function Xf(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Ls(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = zr(d) : (d = dt(r) ? Pn : Se.current, c.context = _r(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (il(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && ll.enqueueReplaceState(c, c.state, null), Ns(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ri(n, r) {
    try {
      var l = "", o = r;
      do
        l += ai(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function qf(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Co(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Rv = typeof WeakMap == "function" ? WeakMap : Map;
  function xv(n, r, l) {
    l = Gn(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      sc || (sc = !0, id = o), Co(n, r);
    }, l;
  }
  function wv(n, r, l) {
    l = Gn(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Co(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Co(n, r), typeof o != "function" && (Fr === null ? Fr = /* @__PURE__ */ new Set([this]) : Fr.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function Eo(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Rv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = iy.bind(null, n, r, l), r.then(n, n));
  }
  function Dv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Kf(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Gn(-1, 1), r.tag = 2, Ei(l, r, 1))), l.lanes |= 1), n);
  }
  var kv = ut.ReactCurrentOwner, Xn = !1;
  function bt(n, r, l, o) {
    r.child = n === null ? vv(r, null, l, o) : Ql(r, n.child, l, o);
  }
  function ru(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Il(r, c), o = U(n, r, l, o, d, c), l = Ht(), n !== null && !Xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, _t(n, r, c)) : (st && l && ws(r), r.flags |= 1, bt(n, r, o, c), r.child);
  }
  function xi(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !cd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Zs(n, r, d, o, c)) : (n = hc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : eo, l(h, o) && n.ref === r.ref)
        return _t(n, r, c);
    }
    return r.flags |= 1, n = ki(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Zs(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (eo(d, o) && n.ref === r.ref)
        if (Xn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Xn = !0);
        else
          return r.lanes = n.lanes, _t(n, r, c);
    }
    return xe(n, r, l, o, c);
  }
  function qn(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(pu, Kn), Kn |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $e(pu, Kn), Kn |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, $e(pu, Kn), Kn |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, $e(pu, Kn), Kn |= o;
    return bt(n, r, c, l), r.child;
  }
  function ul(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function xe(n, r, l, o, c) {
    var d = dt(l) ? Pn : Se.current;
    return d = _r(r, d), Il(r, c), l = U(n, r, l, o, d, c), o = Ht(), n !== null && !Xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, _t(n, r, c)) : (st && o && ws(r), r.flags |= 1, bt(n, r, l, c), r.child);
  }
  function To(n, r, l, o, c) {
    if (dt(l)) {
      var d = !0;
      xs(r);
    } else
      d = !1;
    if (Il(r, c), r.stateNode === null)
      xo(n, r), Ev(r, l, o), Xf(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, g = r.memoizedProps;
      h.props = g;
      var C = h.context, _ = l.contextType;
      typeof _ == "object" && _ !== null ? _ = zr(_) : (_ = dt(l) ? Pn : Se.current, _ = _r(r, _));
      var H = l.getDerivedStateFromProps, F = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      F || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== o || C !== _) && Tv(r, h, o, _), Ci = !1;
      var A = r.memoizedState;
      h.state = A, Ns(r, o, h, c), C = r.memoizedState, g !== o || A !== C || Rt.current || Ci ? (typeof H == "function" && (il(r, l, H, o), C = r.memoizedState), (g = Ci || Cv(r, l, g, o, A, C, _)) ? (F || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = _, o = g) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, Gl(n, r), g = r.memoizedProps, _ = r.type === r.elementType ? g : Wn(r.type, g), h.props = _, F = r.pendingProps, A = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = zr(C) : (C = dt(l) ? Pn : Se.current, C = _r(r, C));
      var G = l.getDerivedStateFromProps;
      (H = typeof G == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== F || A !== C) && Tv(r, h, o, C), Ci = !1, A = r.memoizedState, h.state = A, Ns(r, o, h, c);
      var Z = r.memoizedState;
      g !== F || A !== Z || Rt.current || Ci ? (typeof G == "function" && (il(r, l, G, o), Z = r.memoizedState), (_ = Ci || Cv(r, l, _, o, A, Z, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, Z, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, Z, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Z), h.props = o, h.state = Z, h.context = C, o = _) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Js(n, r, l, o, d, c);
  }
  function Js(n, r, l, o, c, d) {
    ul(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && sv(r, l, !1), _t(n, r, d);
    o = r.stateNode, kv.current = r;
    var g = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Ql(r, n.child, null, d), r.child = Ql(r, null, g, d)) : bt(n, r, g, d), r.memoizedState = o.state, c && sv(r, l, !0), r.child;
  }
  function qm(n) {
    var r = n.stateNode;
    r.pendingContext ? gi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && gi(n, r.context, !1), $f(n, r.containerInfo);
  }
  function bv(n, r, l, o, c) {
    return mt(), Bf(c), r.flags |= 256, bt(n, r, l, o), r.child;
  }
  var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ol(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _v(n, r, l) {
    var o = r.pendingProps, c = pt.current, d = !1, h = (r.flags & 128) !== 0, g;
    if ((g = h) || (g = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), g ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), $e(pt, c & 1), n === null)
      return ks(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = mc(h, o, 0, null), n = vl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ol(l), r.memoizedState = Ro, n) : ec(r, h));
    if (c = n.memoizedState, c !== null && (g = c.dehydrated, g !== null))
      return Zf(n, r, h, o, g, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, g = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = ki(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), g !== null ? d = ki(g, d) : (d = vl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? ol(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Ro, o;
    }
    return d = n.child, n = d.sibling, o = ki(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function ec(n, r) {
    return r = mc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function tc(n, r, l, o) {
    return o !== null && Bf(o), Ql(r, n.child, null, l), n = ec(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Zf(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = qf(Error(N(422))), tc(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = mc({ mode: "visible", children: o.children }, c, 0, null), d = vl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ql(r, n.child, null, h), r.child.memoizedState = ol(h), r.memoizedState = Ro, d);
    if (!(r.mode & 1))
      return tc(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var g = o.dgst;
      return o = g, d = Error(N(419)), o = qf(d, o, void 0), tc(n, r, h, o);
    }
    if (g = (h & n.childLanes) !== 0, Xn || g) {
      if (o = wt, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ba(n, c), yt(o, n, c, -1));
      }
      return _o(), o = qf(Error(N(421))), tc(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = sd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, In = ia(c.nextSibling), sr = r, st = !0, Or = null, n !== null && (Qn[yn++] = tn, Qn[yn++] = ja, Qn[yn++] = Lr, tn = n.id, ja = n.overflow, Lr = r), r = ec(r, o.children), r.flags |= 4096, r);
  }
  function Mv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Yf(n.return, r, l);
  }
  function nc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Jf(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (bt(n, r, o.children, l), o = pt.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Mv(n, l, r);
            else if (n.tag === 19)
              Mv(n, l, r);
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
    if ($e(pt, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && zs(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), nc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && zs(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          nc(r, !0, l, null, d);
          break;
        case "together":
          nc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function xo(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function _t(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), cl |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(N(153));
    if (r.child !== null) {
      for (n = r.child, l = ki(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = ki(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ya(n, r, l) {
    switch (r.tag) {
      case 3:
        qm(r), mt();
        break;
      case 5:
        gv(r);
        break;
      case 1:
        dt(r.type) && xs(r);
        break;
      case 4:
        $f(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        $e(Va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? ($e(pt, pt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _v(n, r, l) : ($e(pt, pt.current & 1), n = _t(n, r, l), n !== null ? n.sibling : null);
        $e(pt, pt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Jf(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $e(pt, pt.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, qn(n, r, l);
    }
    return _t(n, r, l);
  }
  var ya, au, iu, Ar;
  ya = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, au = function() {
  }, iu = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, tl(la.current);
      var d = null;
      switch (l) {
        case "input":
          c = jn(n, c), o = jn(n, o), d = [];
          break;
        case "select":
          c = K({}, c, { value: void 0 }), o = K({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Vi(n, c), o = Vi(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Rs);
      }
      hn(l, o);
      var h;
      l = null;
      for (_ in c)
        if (!o.hasOwnProperty(_) && c.hasOwnProperty(_) && c[_] != null)
          if (_ === "style") {
            var g = c[_];
            for (h in g)
              g.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            _ !== "dangerouslySetInnerHTML" && _ !== "children" && _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && _ !== "autoFocus" && (Un.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
      for (_ in o) {
        var C = o[_];
        if (g = c != null ? c[_] : void 0, o.hasOwnProperty(_) && C !== g && (C != null || g != null))
          if (_ === "style")
            if (g) {
              for (h in g)
                !g.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && g[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                _,
                l
              )), l = C;
          else
            _ === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, g = g ? g.__html : void 0, C != null && g !== C && (d = d || []).push(_, C)) : _ === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(_, "" + C) : _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && (Un.hasOwnProperty(_) ? (C != null && _ === "onScroll" && rt("scroll", n), d || g === C || (d = [])) : (d = d || []).push(_, C));
      }
      l && (d = d || []).push("style", l);
      var _ = d;
      (r.updateQueue = _) && (r.flags |= 4);
    }
  }, Ar = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function xt(n, r) {
    if (!st)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Cn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Km(n, r, l) {
    var o = r.pendingProps;
    switch (jf(r), r.tag) {
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
        return Cn(r), null;
      case 1:
        return dt(r.type) && Mr(), Cn(r), null;
      case 3:
        return o = r.stateNode, Xl(), Ye(Rt), Ye(Se), If(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Or !== null && (ld(Or), Or = null))), au(n, r), Cn(r), null;
      case 5:
        Qf(r);
        var c = tl(vo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          iu(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(N(166));
            return Cn(r), null;
          }
          if (n = tl(la.current), bs(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[va] = r, o[Ki] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                rt("cancel", o), rt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                rt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ao.length; c++)
                  rt(ao[c], o);
                break;
              case "source":
                rt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                rt(
                  "error",
                  o
                ), rt("load", o);
                break;
              case "details":
                rt("toggle", o);
                break;
              case "input":
                Tr(o, d), rt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, rt("invalid", o);
                break;
              case "textarea":
                Kr(o, d), rt("invalid", o);
            }
            hn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var g = d[h];
                h === "children" ? typeof g == "string" ? o.textContent !== g && (d.suppressHydrationWarning !== !0 && Ts(o.textContent, g, n), c = ["children", g]) : typeof g == "number" && o.textContent !== "" + g && (d.suppressHydrationWarning !== !0 && Ts(
                  o.textContent,
                  g,
                  n
                ), c = ["children", "" + g]) : Un.hasOwnProperty(h) && g != null && h === "onScroll" && rt("scroll", o);
              }
            switch (l) {
              case "input":
                Er(o), _a(o, d, !0);
                break;
              case "textarea":
                Er(o), fa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Rs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = oi(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[va] = r, n[Ki] = o, ya(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = jt(l, o), l) {
                case "dialog":
                  rt("cancel", n), rt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  rt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ao.length; c++)
                    rt(ao[c], n);
                  c = o;
                  break;
                case "source":
                  rt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  rt(
                    "error",
                    n
                  ), rt("load", n), c = o;
                  break;
                case "details":
                  rt("toggle", n), c = o;
                  break;
                case "input":
                  Tr(n, o), c = jn(n, o), rt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = K({}, o, { value: void 0 }), rt("invalid", n);
                  break;
                case "textarea":
                  Kr(n, o), c = Vi(n, o), rt("invalid", n);
                  break;
                default:
                  c = o;
              }
              hn(l, c), g = c;
              for (d in g)
                if (g.hasOwnProperty(d)) {
                  var C = g[d];
                  d === "style" ? nt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Fu(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && si(n, C) : typeof C == "number" && si(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Un.hasOwnProperty(d) ? C != null && d === "onScroll" && rt("scroll", n) : C != null && ze(n, d, C, h));
                }
              switch (l) {
                case "input":
                  Er(n), _a(n, o, !1);
                  break;
                case "textarea":
                  Er(n), fa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Xr(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? li(n, !!o.multiple, d, !1) : o.defaultValue != null && li(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Rs);
              }
              switch (l) {
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
        return Cn(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ar(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(N(166));
          if (l = tl(vo.current), tl(la.current), bs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[va] = r, (d = o.nodeValue !== l) && (n = sr, n !== null))
              switch (n.tag) {
                case 3:
                  Ts(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ts(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[va] = r, r.stateNode = o;
        }
        return Cn(r), null;
      case 13:
        if (Ye(pt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (st && In !== null && r.mode & 1 && !(r.flags & 128))
            dv(), mt(), r.flags |= 98560, d = !1;
          else if (d = bs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(N(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(N(317));
              d[va] = r;
            } else
              mt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Cn(r), d = !1;
          } else
            Or !== null && (ld(Or), Or = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pt.current & 1 ? Yt === 0 && (Yt = 3) : _o())), r.updateQueue !== null && (r.flags |= 4), Cn(r), null);
      case 4:
        return Xl(), au(n, r), n === null && Pl(r.stateNode.containerInfo), Cn(r), null;
      case 10:
        return Pf(r.type._context), Cn(r), null;
      case 17:
        return dt(r.type) && Mr(), Cn(r), null;
      case 19:
        if (Ye(pt), d = r.memoizedState, d === null)
          return Cn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            xt(d, !1);
          else {
            if (Yt !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = zs(n), h !== null) {
                  for (r.flags |= 128, xt(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return $e(pt, pt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Tt() > hu && (r.flags |= 128, o = !0, xt(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = zs(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xt(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !st)
                return Cn(r), null;
            } else
              2 * Tt() - d.renderingStartTime > hu && l !== 1073741824 && (r.flags |= 128, o = !0, xt(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Tt(), r.sibling = null, l = pt.current, $e(pt, o ? l & 1 | 2 : l & 1), r) : (Cn(r), null);
      case 22:
      case 23:
        return pc(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Kn & 1073741824 && (Cn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Cn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, r.tag));
  }
  function Zm(n, r) {
    switch (jf(r), r.tag) {
      case 1:
        return dt(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Xl(), Ye(Rt), Ye(Se), If(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Qf(r), null;
      case 13:
        if (Ye(pt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(N(340));
          mt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ye(pt), null;
      case 4:
        return Xl(), null;
      case 10:
        return Pf(r.type._context), null;
      case 22:
      case 23:
        return pc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var lu = !1, rn = !1, rc = typeof WeakSet == "function" ? WeakSet : Set, q = null;
  function uu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Dt(n, r, o);
        }
      else
        l.current = null;
  }
  function ed(n, r, l) {
    try {
      l();
    } catch (o) {
      Dt(n, r, o);
    }
  }
  var ac = !1;
  function Jm(n, r) {
    if (Lf = $i, n = ys(), Ua(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0, g = -1, C = -1, _ = 0, H = 0, F = n, A = null;
            t:
              for (; ; ) {
                for (var G; F !== l || c !== 0 && F.nodeType !== 3 || (g = h + c), F !== d || o !== 0 && F.nodeType !== 3 || (C = h + o), F.nodeType === 3 && (h += F.nodeValue.length), (G = F.firstChild) !== null; )
                  A = F, F = G;
                for (; ; ) {
                  if (F === n)
                    break t;
                  if (A === l && ++_ === c && (g = h), A === d && ++H === o && (C = h), (G = F.nextSibling) !== null)
                    break;
                  F = A, A = F.parentNode;
                }
                F = G;
              }
            l = g === -1 || C === -1 ? null : { start: g, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Xi = { focusedElem: n, selectionRange: l }, $i = !1, q = r; q !== null; )
      if (r = q, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, q = n;
      else
        for (; q !== null; ) {
          r = q;
          try {
            var Z = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Z !== null) {
                    var te = Z.memoizedProps, Mt = Z.memoizedState, x = r.stateNode, T = x.getSnapshotBeforeUpdate(r.elementType === r.type ? te : Wn(r.type, te), Mt);
                    x.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var k = r.stateNode.containerInfo;
                  k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(N(163));
              }
          } catch (V) {
            Dt(r, r.return, V);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, q = n;
            break;
          }
          q = r.return;
        }
    return Z = ac, ac = !1, Z;
  }
  function ou(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && ed(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function ic(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function lc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Lv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Lv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[va], delete r[Ki], delete r[zf], delete r[Gm], delete r[Uf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function td(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ov(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || td(n.return))
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
  function wo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Rs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (wo(n, r, l), n = n.sibling; n !== null; )
        wo(n, r, l), n = n.sibling;
  }
  function su(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (su(n, r, l), n = n.sibling; n !== null; )
        su(n, r, l), n = n.sibling;
  }
  var vt = null, qt = !1;
  function wn(n, r, l) {
    for (l = l.child; l !== null; )
      cu(n, r, l), l = l.sibling;
  }
  function cu(n, r, l) {
    if (ea && typeof ea.onCommitFiberUnmount == "function")
      try {
        ea.onCommitFiberUnmount(Pu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        rn || uu(l, r);
      case 6:
        var o = vt, c = qt;
        vt = null, wn(n, r, l), vt = o, qt = c, vt !== null && (qt ? (n = vt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vt.removeChild(l.stateNode));
        break;
      case 18:
        vt !== null && (qt ? (n = vt, l = l.stateNode, n.nodeType === 8 ? hi(n.parentNode, l) : n.nodeType === 1 && hi(n, l), Gu(n)) : hi(vt, l.stateNode));
        break;
      case 4:
        o = vt, c = qt, vt = l.stateNode.containerInfo, qt = !0, wn(n, r, l), vt = o, qt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && ed(l, r, h), c = c.next;
          } while (c !== o);
        }
        wn(n, r, l);
        break;
      case 1:
        if (!rn && (uu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (g) {
            Dt(l, r, g);
          }
        wn(n, r, l);
        break;
      case 21:
        wn(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (rn = (o = rn) || l.memoizedState !== null, wn(n, r, l), rn = o) : wn(n, r, l);
        break;
      default:
        wn(n, r, l);
    }
  }
  function fu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new rc()), r.forEach(function(o) {
        var c = ly.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Kt(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, h = r, g = h;
          e:
            for (; g !== null; ) {
              switch (g.tag) {
                case 5:
                  vt = g.stateNode, qt = !1;
                  break e;
                case 3:
                  vt = g.stateNode.containerInfo, qt = !0;
                  break e;
                case 4:
                  vt = g.stateNode.containerInfo, qt = !0;
                  break e;
              }
              g = g.return;
            }
          if (vt === null)
            throw Error(N(160));
          cu(d, h, c), vt = null, qt = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (_) {
          Dt(c, r, _);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Nv(r, n), r = r.sibling;
  }
  function Nv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Kt(r, n), ga(n), o & 4) {
          try {
            ou(3, n, n.return), ic(3, n);
          } catch (te) {
            Dt(n, n.return, te);
          }
          try {
            ou(5, n, n.return);
          } catch (te) {
            Dt(n, n.return, te);
          }
        }
        break;
      case 1:
        Kt(r, n), ga(n), o & 512 && l !== null && uu(l, l.return);
        break;
      case 5:
        if (Kt(r, n), ga(n), o & 512 && l !== null && uu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            si(c, "");
          } catch (te) {
            Dt(n, n.return, te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, g = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              g === "input" && d.type === "radio" && d.name != null && qr(c, d), jt(g, h);
              var _ = jt(g, d);
              for (h = 0; h < C.length; h += 2) {
                var H = C[h], F = C[h + 1];
                H === "style" ? nt(c, F) : H === "dangerouslySetInnerHTML" ? Fu(c, F) : H === "children" ? si(c, F) : ze(c, H, F, _);
              }
              switch (g) {
                case "input":
                  ir(c, d);
                  break;
                case "textarea":
                  ui(c, d);
                  break;
                case "select":
                  var A = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var G = d.value;
                  G != null ? li(c, !!d.multiple, G, !1) : A !== !!d.multiple && (d.defaultValue != null ? li(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : li(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Ki] = d;
            } catch (te) {
              Dt(n, n.return, te);
            }
        }
        break;
      case 6:
        if (Kt(r, n), ga(n), o & 4) {
          if (n.stateNode === null)
            throw Error(N(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (te) {
            Dt(n, n.return, te);
          }
        }
        break;
      case 3:
        if (Kt(r, n), ga(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Gu(r.containerInfo);
          } catch (te) {
            Dt(n, n.return, te);
          }
        break;
      case 4:
        Kt(r, n), ga(n);
        break;
      case 13:
        Kt(r, n), ga(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (oc = Tt())), o & 4 && fu(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? (rn = (_ = rn) || H, Kt(r, n), rn = _) : Kt(r, n), ga(n), o & 8192) {
          if (_ = n.memoizedState !== null, (n.stateNode.isHidden = _) && !H && n.mode & 1)
            for (q = n, H = n.child; H !== null; ) {
              for (F = q = H; q !== null; ) {
                switch (A = q, G = A.child, A.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ou(4, A, A.return);
                    break;
                  case 1:
                    uu(A, A.return);
                    var Z = A.stateNode;
                    if (typeof Z.componentWillUnmount == "function") {
                      o = A, l = A.return;
                      try {
                        r = o, Z.props = r.memoizedProps, Z.state = r.memoizedState, Z.componentWillUnmount();
                      } catch (te) {
                        Dt(o, l, te);
                      }
                    }
                    break;
                  case 5:
                    uu(A, A.return);
                    break;
                  case 22:
                    if (A.memoizedState !== null) {
                      zv(F);
                      continue;
                    }
                }
                G !== null ? (G.return = A, q = G) : zv(F);
              }
              H = H.sibling;
            }
          e:
            for (H = null, F = n; ; ) {
              if (F.tag === 5) {
                if (H === null) {
                  H = F;
                  try {
                    c = F.stateNode, _ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (g = F.stateNode, C = F.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, g.style.display = Me("display", h));
                  } catch (te) {
                    Dt(n, n.return, te);
                  }
                }
              } else if (F.tag === 6) {
                if (H === null)
                  try {
                    F.stateNode.nodeValue = _ ? "" : F.memoizedProps;
                  } catch (te) {
                    Dt(n, n.return, te);
                  }
              } else if ((F.tag !== 22 && F.tag !== 23 || F.memoizedState === null || F === n) && F.child !== null) {
                F.child.return = F, F = F.child;
                continue;
              }
              if (F === n)
                break e;
              for (; F.sibling === null; ) {
                if (F.return === null || F.return === n)
                  break e;
                H === F && (H = null), F = F.return;
              }
              H === F && (H = null), F.sibling.return = F.return, F = F.sibling;
            }
        }
        break;
      case 19:
        Kt(r, n), ga(n), o & 4 && fu(n);
        break;
      case 21:
        break;
      default:
        Kt(
          r,
          n
        ), ga(n);
    }
  }
  function ga(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (td(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(N(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (si(c, ""), o.flags &= -33);
            var d = Ov(n);
            su(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, g = Ov(n);
            wo(n, g, h);
            break;
          default:
            throw Error(N(161));
        }
      } catch (C) {
        Dt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ey(n, r, l) {
    q = n, nd(n);
  }
  function nd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; q !== null; ) {
      var c = q, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || lu;
        if (!h) {
          var g = c.alternate, C = g !== null && g.memoizedState !== null || rn;
          g = lu;
          var _ = rn;
          if (lu = h, (rn = C) && !_)
            for (q = c; q !== null; )
              h = q, C = h.child, h.tag === 22 && h.memoizedState !== null ? rd(c) : C !== null ? (C.return = h, q = C) : rd(c);
          for (; d !== null; )
            q = d, nd(d), d = d.sibling;
          q = c, lu = g, rn = _;
        }
        du(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, q = d) : du(n);
    }
  }
  function du(n) {
    for (; q !== null; ) {
      var r = q;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                rn || ic(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !rn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Wn(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && yv(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  yv(r, h, l);
                }
                break;
              case 5:
                var g = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = g;
                  var C = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && l.focus();
                      break;
                    case "img":
                      C.src && (l.src = C.src);
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
                  var _ = r.alternate;
                  if (_ !== null) {
                    var H = _.memoizedState;
                    if (H !== null) {
                      var F = H.dehydrated;
                      F !== null && Gu(F);
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
                throw Error(N(163));
            }
          rn || r.flags & 512 && lc(r);
        } catch (A) {
          Dt(r, r.return, A);
        }
      }
      if (r === n) {
        q = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, q = l;
        break;
      }
      q = r.return;
    }
  }
  function zv(n) {
    for (; q !== null; ) {
      var r = q;
      if (r === n) {
        q = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, q = l;
        break;
      }
      q = r.return;
    }
  }
  function rd(n) {
    for (; q !== null; ) {
      var r = q;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              ic(4, r);
            } catch (C) {
              Dt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Dt(r, c, C);
              }
            }
            var d = r.return;
            try {
              lc(r);
            } catch (C) {
              Dt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              lc(r);
            } catch (C) {
              Dt(r, h, C);
            }
        }
      } catch (C) {
        Dt(r, r.return, C);
      }
      if (r === n) {
        q = null;
        break;
      }
      var g = r.sibling;
      if (g !== null) {
        g.return = r.return, q = g;
        break;
      }
      q = r.return;
    }
  }
  var ty = Math.ceil, sl = ut.ReactCurrentDispatcher, uc = ut.ReactCurrentOwner, Hr = ut.ReactCurrentBatchConfig, Oe = 0, wt = null, ct = null, Pt = 0, Kn = 0, pu = De(0), Yt = 0, Do = null, cl = 0, vu = 0, ad = 0, wi = null, En = null, oc = 0, hu = 1 / 0, $a = null, sc = !1, id = null, Fr = null, mu = !1, jr = null, cc = 0, ko = 0, fc = null, bo = -1, fl = 0;
  function Zt() {
    return Oe & 6 ? Tt() : bo !== -1 ? bo : bo = Tt();
  }
  function Qa(n) {
    return n.mode & 1 ? Oe & 2 && Pt !== 0 ? Pt & -Pt : _s.transition !== null ? (fl === 0 && (fl = is()), fl) : (n = Ge, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ff(n.type)), n) : 1;
  }
  function yt(n, r, l, o) {
    if (50 < ko)
      throw ko = 0, fc = null, Error(N(185));
    Yi(n, l, o), (!(Oe & 2) || n !== wt) && (n === wt && (!(Oe & 2) && (vu |= l), Yt === 4 && Sa(n, Pt)), $t(n, o), l === 1 && Oe === 0 && !(r.mode & 1) && (hu = Tt() + 500, Xt && Yn()));
  }
  function $t(n, r) {
    var l = n.callbackNode;
    as(n, r);
    var o = ta(n, n === wt ? Pt : 0);
    if (o === 0)
      l !== null && Cp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Cp(l), r === 1)
        n.tag === 0 ? Hf(yu.bind(null, n)) : Af(yu.bind(null, n)), Nf(function() {
          !(Oe & 6) && Yn();
        }), l = null;
      else {
        switch (of(o)) {
          case 1:
            l = La;
            break;
          case 4:
            l = Le;
            break;
          case 16:
            l = ci;
            break;
          case 536870912:
            l = rf;
            break;
          default:
            l = ci;
        }
        l = Pv(l, dc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function dc(n, r) {
    if (bo = -1, fl = 0, Oe & 6)
      throw Error(N(327));
    var l = n.callbackNode;
    if (gu() && n.callbackNode !== l)
      return null;
    var o = ta(n, n === wt ? Pt : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = vc(n, o);
    else {
      r = o;
      var c = Oe;
      Oe |= 2;
      var d = Av();
      (wt !== n || Pt !== r) && ($a = null, hu = Tt() + 500, pl(n, r));
      do
        try {
          ry();
          break;
        } catch (g) {
          Uv(n, g);
        }
      while (1);
      cr(), sl.current = d, Oe = c, ct !== null ? r = 0 : (wt = null, Pt = 0, r = Yt);
    }
    if (r !== 0) {
      if (r === 2 && (c = lf(n), c !== 0 && (o = c, r = dl(n, c))), r === 1)
        throw l = Do, pl(n, 0), Sa(n, o), $t(n, Tt()), l;
      if (r === 6)
        Sa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !ud(c) && (r = vc(n, o), r === 2 && (d = lf(n), d !== 0 && (o = d, r = dl(n, d))), r === 1))
          throw l = Do, pl(n, 0), Sa(n, o), $t(n, Tt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            Di(n, En, $a);
            break;
          case 3:
            if (Sa(n, o), (o & 130023424) === o && (r = oc + 500 - Tt(), 10 < r)) {
              if (ta(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Zt(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = qi(Di.bind(null, n, En, $a), r);
              break;
            }
            Di(n, En, $a);
            break;
          case 4:
            if (Sa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - xr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = Tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ty(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = qi(Di.bind(null, n, En, $a), o);
              break;
            }
            Di(n, En, $a);
            break;
          case 5:
            Di(n, En, $a);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return $t(n, Tt()), n.callbackNode === l ? dc.bind(null, n) : null;
  }
  function dl(n, r) {
    var l = wi;
    return n.current.memoizedState.isDehydrated && (pl(n, r).flags |= 256), n = vc(n, r), n !== 2 && (r = En, En = l, r !== null && ld(r)), n;
  }
  function ld(n) {
    En === null ? En = n : En.push.apply(En, n);
  }
  function ud(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!kr(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
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
  function Sa(n, r) {
    for (r &= ~ad, r &= ~vu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - xr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function yu(n) {
    if (Oe & 6)
      throw Error(N(327));
    gu();
    var r = ta(n, 0);
    if (!(r & 1))
      return $t(n, Tt()), null;
    var l = vc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = lf(n);
      o !== 0 && (r = o, l = dl(n, o));
    }
    if (l === 1)
      throw l = Do, pl(n, 0), Sa(n, r), $t(n, Tt()), l;
    if (l === 6)
      throw Error(N(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Di(n, En, $a), $t(n, Tt()), null;
  }
  function od(n, r) {
    var l = Oe;
    Oe |= 1;
    try {
      return n(r);
    } finally {
      Oe = l, Oe === 0 && (hu = Tt() + 500, Xt && Yn());
    }
  }
  function Ca(n) {
    jr !== null && jr.tag === 0 && !(Oe & 6) && gu();
    var r = Oe;
    Oe |= 1;
    var l = Hr.transition, o = Ge;
    try {
      if (Hr.transition = null, Ge = 1, n)
        return n();
    } finally {
      Ge = o, Hr.transition = l, Oe = r, !(Oe & 6) && Yn();
    }
  }
  function pc() {
    Kn = pu.current, Ye(pu);
  }
  function pl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ov(l)), ct !== null)
      for (l = ct.return; l !== null; ) {
        var o = l;
        switch (jf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Mr();
            break;
          case 3:
            Xl(), Ye(Rt), Ye(Se), If();
            break;
          case 5:
            Qf(o);
            break;
          case 4:
            Xl();
            break;
          case 13:
            Ye(pt);
            break;
          case 19:
            Ye(pt);
            break;
          case 10:
            Pf(o.type._context);
            break;
          case 22:
          case 23:
            pc();
        }
        l = l.return;
      }
    if (wt = n, ct = n = ki(n.current, null), Pt = Kn = r, Yt = 0, Do = null, ad = vu = cl = 0, En = wi = null, el !== null) {
      for (r = 0; r < el.length; r++)
        if (l = el[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      el = null;
    }
    return n;
  }
  function Uv(n, r) {
    do {
      var l = ct;
      try {
        if (cr(), As.current = Sn, fr) {
          for (var o = ae.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          fr = !1;
        }
        if (ne = 0, ke = Ce = ae = null, ql = !1, mo = 0, uc.current = null, l === null || l.return === null) {
          Yt = 1, Do = r, ct = null;
          break;
        }
        e: {
          var d = n, h = l.return, g = l, C = r;
          if (r = Pt, g.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var _ = C, H = g, F = H.tag;
            if (!(H.mode & 1) && (F === 0 || F === 11 || F === 15)) {
              var A = H.alternate;
              A ? (H.updateQueue = A.updateQueue, H.memoizedState = A.memoizedState, H.lanes = A.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var G = Dv(h);
            if (G !== null) {
              G.flags &= -257, Kf(G, h, g, d, r), G.mode & 1 && Eo(d, _, r), r = G, C = _;
              var Z = r.updateQueue;
              if (Z === null) {
                var te = /* @__PURE__ */ new Set();
                te.add(C), r.updateQueue = te;
              } else
                Z.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Eo(d, _, r), _o();
                break e;
              }
              C = Error(N(426));
            }
          } else if (st && g.mode & 1) {
            var Mt = Dv(h);
            if (Mt !== null) {
              !(Mt.flags & 65536) && (Mt.flags |= 256), Kf(Mt, h, g, d, r), Bf(Ri(C, g));
              break e;
            }
          }
          d = C = Ri(C, g), Yt !== 4 && (Yt = 2), wi === null ? wi = [d] : wi.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var x = xv(d, C, r);
                mv(d, x);
                break e;
              case 1:
                g = C;
                var T = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Fr === null || !Fr.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var V = wv(d, g, r);
                  mv(d, V);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Fv(l);
      } catch (re) {
        r = re, ct === l && l !== null && (ct = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Av() {
    var n = sl.current;
    return sl.current = Sn, n === null ? Sn : n;
  }
  function _o() {
    (Yt === 0 || Yt === 3 || Yt === 2) && (Yt = 4), wt === null || !(cl & 268435455) && !(vu & 268435455) || Sa(wt, Pt);
  }
  function vc(n, r) {
    var l = Oe;
    Oe |= 2;
    var o = Av();
    (wt !== n || Pt !== r) && ($a = null, pl(n, r));
    do
      try {
        ny();
        break;
      } catch (c) {
        Uv(n, c);
      }
    while (1);
    if (cr(), Oe = l, sl.current = o, ct !== null)
      throw Error(N(261));
    return wt = null, Pt = 0, Yt;
  }
  function ny() {
    for (; ct !== null; )
      Hv(ct);
  }
  function ry() {
    for (; ct !== null && !wm(); )
      Hv(ct);
  }
  function Hv(n) {
    var r = Bv(n.alternate, n, Kn);
    n.memoizedProps = n.pendingProps, r === null ? Fv(n) : ct = r, uc.current = null;
  }
  function Fv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Zm(l, r), l !== null) {
          l.flags &= 32767, ct = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yt = 6, ct = null;
          return;
        }
      } else if (l = Km(l, r, Kn), l !== null) {
        ct = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        ct = r;
        return;
      }
      ct = r = n;
    } while (r !== null);
    Yt === 0 && (Yt = 5);
  }
  function Di(n, r, l) {
    var o = Ge, c = Hr.transition;
    try {
      Hr.transition = null, Ge = 1, ay(n, r, l, o);
    } finally {
      Hr.transition = c, Ge = o;
    }
    return null;
  }
  function ay(n, r, l, o) {
    do
      gu();
    while (jr !== null);
    if (Oe & 6)
      throw Error(N(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(N(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (_m(n, d), n === wt && (ct = wt = null, Pt = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || mu || (mu = !0, Pv(ci, function() {
      return gu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Hr.transition, Hr.transition = null;
      var h = Ge;
      Ge = 1;
      var g = Oe;
      Oe |= 4, uc.current = null, Jm(n, l), Nv(l, n), gs(Xi), $i = !!Lf, Xi = Lf = null, n.current = l, ey(l), Dm(), Oe = g, Ge = h, Hr.transition = d;
    } else
      n.current = l;
    if (mu && (mu = !1, jr = n, cc = c), d = n.pendingLanes, d === 0 && (Fr = null), Tp(l.stateNode), $t(n, Tt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (sc)
      throw sc = !1, n = id, id = null, n;
    return cc & 1 && n.tag !== 0 && gu(), d = n.pendingLanes, d & 1 ? n === fc ? ko++ : (ko = 0, fc = n) : ko = 0, Yn(), null;
  }
  function gu() {
    if (jr !== null) {
      var n = of(cc), r = Hr.transition, l = Ge;
      try {
        if (Hr.transition = null, Ge = 16 > n ? 16 : n, jr === null)
          var o = !1;
        else {
          if (n = jr, jr = null, cc = 0, Oe & 6)
            throw Error(N(331));
          var c = Oe;
          for (Oe |= 4, q = n.current; q !== null; ) {
            var d = q, h = d.child;
            if (q.flags & 16) {
              var g = d.deletions;
              if (g !== null) {
                for (var C = 0; C < g.length; C++) {
                  var _ = g[C];
                  for (q = _; q !== null; ) {
                    var H = q;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ou(8, H, d);
                    }
                    var F = H.child;
                    if (F !== null)
                      F.return = H, q = F;
                    else
                      for (; q !== null; ) {
                        H = q;
                        var A = H.sibling, G = H.return;
                        if (Lv(H), H === _) {
                          q = null;
                          break;
                        }
                        if (A !== null) {
                          A.return = G, q = A;
                          break;
                        }
                        q = G;
                      }
                  }
                }
                var Z = d.alternate;
                if (Z !== null) {
                  var te = Z.child;
                  if (te !== null) {
                    Z.child = null;
                    do {
                      var Mt = te.sibling;
                      te.sibling = null, te = Mt;
                    } while (te !== null);
                  }
                }
                q = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, q = h;
            else
              e:
                for (; q !== null; ) {
                  if (d = q, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ou(9, d, d.return);
                    }
                  var x = d.sibling;
                  if (x !== null) {
                    x.return = d.return, q = x;
                    break e;
                  }
                  q = d.return;
                }
          }
          var T = n.current;
          for (q = T; q !== null; ) {
            h = q;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, q = k;
            else
              e:
                for (h = T; q !== null; ) {
                  if (g = q, g.flags & 2048)
                    try {
                      switch (g.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ic(9, g);
                      }
                    } catch (re) {
                      Dt(g, g.return, re);
                    }
                  if (g === h) {
                    q = null;
                    break e;
                  }
                  var V = g.sibling;
                  if (V !== null) {
                    V.return = g.return, q = V;
                    break e;
                  }
                  q = g.return;
                }
          }
          if (Oe = c, Yn(), ea && typeof ea.onPostCommitFiberRoot == "function")
            try {
              ea.onPostCommitFiberRoot(Pu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Ge = l, Hr.transition = r;
      }
    }
    return !1;
  }
  function jv(n, r, l) {
    r = Ri(l, r), r = xv(n, r, 1), n = Ei(n, r, 1), r = Zt(), n !== null && (Yi(n, 1, r), $t(n, r));
  }
  function Dt(n, r, l) {
    if (n.tag === 3)
      jv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          jv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fr === null || !Fr.has(o))) {
            n = Ri(l, n), n = wv(r, n, 1), r = Ei(r, n, 1), n = Zt(), r !== null && (Yi(r, 1, n), $t(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function iy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Zt(), n.pingedLanes |= n.suspendedLanes & l, wt === n && (Pt & l) === l && (Yt === 4 || Yt === 3 && (Pt & 130023424) === Pt && 500 > Tt() - oc ? pl(n, 0) : ad |= l), $t(n, r);
  }
  function Vv(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ol, Ol <<= 1, !(Ol & 130023424) && (Ol = 4194304)) : r = 1);
    var l = Zt();
    n = Ba(n, r), n !== null && (Yi(n, r, l), $t(n, l));
  }
  function sd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Vv(n, l);
  }
  function ly(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(N(314));
    }
    o !== null && o.delete(r), Vv(n, l);
  }
  var Bv;
  Bv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rt.current)
        Xn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Xn = !1, Ya(n, r, l);
        Xn = !!(n.flags & 131072);
      }
    else
      Xn = !1, st && r.flags & 1048576 && Ff(r, $l, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        xo(n, r), n = r.pendingProps;
        var c = _r(r, Se.current);
        Il(r, l), c = U(null, r, o, n, c, l);
        var d = Ht();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, dt(o) ? (d = !0, xs(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ls(r), c.updater = ll, r.stateNode = c, c._reactInternals = r, Xf(r, o, n, l), r = Js(null, r, o, !0, d, l)) : (r.tag = 0, st && d && ws(r), bt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (xo(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = uy(o), n = Wn(o, n), c) {
            case 0:
              r = xe(null, r, o, n, l);
              break e;
            case 1:
              r = To(null, r, o, n, l);
              break e;
            case 11:
              r = ru(null, r, o, n, l);
              break e;
            case 14:
              r = xi(null, r, o, Wn(o.type, n), l);
              break e;
          }
          throw Error(N(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Wn(o, c), xe(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Wn(o, c), To(n, r, o, c, l);
      case 3:
        e: {
          if (qm(r), n === null)
            throw Error(N(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Gl(n, r), Ns(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ri(Error(N(423)), r), r = bv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Ri(Error(N(424)), r), r = bv(n, r, o, l, c);
              break e;
            } else
              for (In = ia(r.stateNode.containerInfo.firstChild), sr = r, st = !0, Or = null, l = vv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (mt(), o === c) {
              r = _t(n, r, l);
              break e;
            }
            bt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return gv(r), n === null && ks(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, uo(o, c) ? h = null : d !== null && uo(o, d) && (r.flags |= 32), ul(n, r), bt(n, r, h, l), r.child;
      case 6:
        return n === null && ks(r), null;
      case 13:
        return _v(n, r, l);
      case 4:
        return $f(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ql(r, null, o, l) : bt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Wn(o, c), ru(n, r, o, c, l);
      case 7:
        return bt(n, r, r.pendingProps, l), r.child;
      case 8:
        return bt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return bt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, $e(Va, o._currentValue), o._currentValue = h, d !== null)
            if (kr(d.value, h)) {
              if (d.children === c.children && !Rt.current) {
                r = _t(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var g = d.dependencies;
                if (g !== null) {
                  h = d.child;
                  for (var C = g.firstContext; C !== null; ) {
                    if (C.context === o) {
                      if (d.tag === 1) {
                        C = Gn(-1, l & -l), C.tag = 2;
                        var _ = d.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var H = _.pending;
                          H === null ? C.next = C : (C.next = H.next, H.next = C), _.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), Yf(
                        d.return,
                        l,
                        r
                      ), g.lanes |= l;
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10)
                  h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (h = d.return, h === null)
                    throw Error(N(341));
                  h.lanes |= l, g = h.alternate, g !== null && (g.lanes |= l), Yf(h, l, r), h = d.sibling;
                } else
                  h = d.child;
                if (h !== null)
                  h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (d = h.sibling, d !== null) {
                      d.return = h.return, h = d;
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          bt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Il(r, l), c = zr(c), o = o(c), r.flags |= 1, bt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Wn(o, r.pendingProps), c = Wn(o.type, c), xi(n, r, o, c, l);
      case 15:
        return Zs(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Wn(o, c), xo(n, r), r.tag = 1, dt(o) ? (n = !0, xs(r)) : n = !1, Il(r, l), Ev(r, o, c), Xf(r, o, c, l), Js(null, r, o, !0, n, l);
      case 19:
        return Jf(n, r, l);
      case 22:
        return qn(n, r, l);
    }
    throw Error(N(156, r.tag));
  };
  function Pv(n, r) {
    return nf(n, r);
  }
  function Yv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vr(n, r, l, o) {
    return new Yv(n, r, l, o);
  }
  function cd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function uy(n) {
    if (typeof n == "function")
      return cd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Hn)
        return 11;
      if (n === Sr)
        return 14;
    }
    return 2;
  }
  function ki(n, r) {
    var l = n.alternate;
    return l === null ? (l = Vr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function hc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      cd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case be:
            return vl(l.children, c, d, r);
          case Tn:
            h = 8, c |= 8;
            break;
          case rr:
            return n = Vr(12, l, r, c | 2), n.elementType = rr, n.lanes = d, n;
          case Ae:
            return n = Vr(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
          case Xe:
            return n = Vr(19, l, r, c), n.elementType = Xe, n.lanes = d, n;
          case Cr:
            return mc(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ot:
                  h = 10;
                  break e;
                case at:
                  h = 9;
                  break e;
                case Hn:
                  h = 11;
                  break e;
                case Sr:
                  h = 14;
                  break e;
                case St:
                  h = 16, o = null;
                  break e;
              }
            throw Error(N(130, n == null ? n : typeof n, ""));
        }
    return r = Vr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function vl(n, r, l, o) {
    return n = Vr(7, n, o, r), n.lanes = l, n;
  }
  function mc(n, r, l, o) {
    return n = Vr(22, n, o, r), n.elementType = Cr, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function yc(n, r, l) {
    return n = Vr(6, n, null, r), n.lanes = l, n;
  }
  function Mo(n, r, l) {
    return r = Vr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Lo(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uf(0), this.expirationTimes = uf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function fd(n, r, l, o, c, d, h, g, C) {
    return n = new Lo(n, r, l, g, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Vr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ls(d), n;
  }
  function $v(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ht, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function dd(n) {
    if (!n)
      return ha;
    n = n._reactInternals;
    e: {
      if (pa(n) !== n || n.tag !== 1)
        throw Error(N(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (dt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(N(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (dt(l))
        return co(n, l, r);
    }
    return r;
  }
  function pd(n, r, l, o, c, d, h, g, C) {
    return n = fd(l, o, !0, n, c, d, h, g, C), n.context = dd(null), l = n.current, o = Zt(), c = Qa(l), d = Gn(o, c), d.callback = r ?? null, Ei(l, d, c), n.current.lanes = c, Yi(n, c, o), $t(n, o), n;
  }
  function gc(n, r, l, o) {
    var c = r.current, d = Zt(), h = Qa(c);
    return l = dd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Gn(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ei(c, r, h), n !== null && (yt(n, c, h, d), Os(n, c, h)), h;
  }
  function Oo(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Qv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function vd(n, r) {
    Qv(n, r), (n = n.alternate) && Qv(n, r);
  }
  function oy() {
    return null;
  }
  var hd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Sc(n) {
    this._internalRoot = n;
  }
  No.prototype.render = Sc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(N(409));
    gc(n, r, null, null);
  }, No.prototype.unmount = Sc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ca(function() {
        gc(null, n, null, null);
      }), r[Fa] = null;
    }
  };
  function No(n) {
    this._internalRoot = n;
  }
  No.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Dp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ke.length && r !== 0 && r < Ke[l].priority; l++)
        ;
      Ke.splice(l, 0, n), l === 0 && kp(n);
    }
  };
  function bi(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Cc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Iv() {
  }
  function sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var _ = Oo(h);
          d.call(_);
        };
      }
      var h = pd(r, o, n, 0, null, !1, !1, "", Iv);
      return n._reactRootContainer = h, n[Fa] = h.current, Pl(n.nodeType === 8 ? n.parentNode : n), Ca(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var g = o;
      o = function() {
        var _ = Oo(C);
        g.call(_);
      };
    }
    var C = fd(n, 0, !1, null, null, !1, !1, "", Iv);
    return n._reactRootContainer = C, n[Fa] = C.current, Pl(n.nodeType === 8 ? n.parentNode : n), Ca(function() {
      gc(r, C, l, o);
    }), C;
  }
  function Ec(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var g = c;
        c = function() {
          var C = Oo(h);
          g.call(C);
        };
      }
      gc(r, h, n, c);
    } else
      h = sy(l, r, n, c, o);
    return Oo(h);
  }
  wp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Pi(r.pendingLanes);
          l !== 0 && (Yu(r, l | 1), $t(r, Tt()), !(Oe & 6) && (hu = Tt() + 500, Yn()));
        }
        break;
      case 13:
        Ca(function() {
          var o = Ba(n, 1);
          if (o !== null) {
            var c = Zt();
            yt(o, n, 1, c);
          }
        }), vd(n, 1);
    }
  }, ls = function(n) {
    if (n.tag === 13) {
      var r = Ba(n, 134217728);
      if (r !== null) {
        var l = Zt();
        yt(r, n, 134217728, l);
      }
      vd(n, 134217728);
    }
  }, We = function(n) {
    if (n.tag === 13) {
      var r = Qa(n), l = Ba(n, r);
      if (l !== null) {
        var o = Zt();
        yt(l, n, r, o);
      }
      vd(n, r);
    }
  }, Dp = function() {
    return Ge;
  }, sf = function(n, r) {
    var l = Ge;
    try {
      return Ge = n, r();
    } finally {
      Ge = l;
    }
  }, da = function(n, r, l) {
    switch (r) {
      case "input":
        if (ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = ce(o);
              if (!c)
                throw Error(N(90));
              ba(o), ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        ui(n, l);
        break;
      case "select":
        r = l.value, r != null && li(n, !!l.multiple, r, !1);
    }
  }, mp = od, yp = Ca;
  var cy = { usingClientEntryPoint: !1, Events: [so, Yl, ce, Jo, es, od] }, zo = { findFiberByHostInstance: br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gv = { bundleType: zo.bundleType, version: zo.version, rendererPackageName: zo.rendererPackageName, rendererConfig: zo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = gp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: zo.findFiberByHostInstance || oy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tc.isDisabled && Tc.supportsFiber)
      try {
        Pu = Tc.inject(Gv), ea = Tc;
      } catch {
      }
  }
  return Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy, Ir.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bi(r))
      throw Error(N(200));
    return $v(n, r, null, l);
  }, Ir.createRoot = function(n, r) {
    if (!bi(n))
      throw Error(N(299));
    var l = !1, o = "", c = hd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = fd(n, 1, !1, null, null, l, !1, o, c), n[Fa] = r.current, Pl(n.nodeType === 8 ? n.parentNode : n), new Sc(r);
  }, Ir.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(N(188)) : (n = Object.keys(n).join(","), Error(N(268, n)));
    return n = gp(r), n = n === null ? null : n.stateNode, n;
  }, Ir.flushSync = function(n) {
    return Ca(n);
  }, Ir.hydrate = function(n, r, l) {
    if (!Cc(r))
      throw Error(N(200));
    return Ec(null, n, r, !0, l);
  }, Ir.hydrateRoot = function(n, r, l) {
    if (!bi(n))
      throw Error(N(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = hd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = pd(r, null, n, 1, l ?? null, c, !1, d, h), n[Fa] = r.current, Pl(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new No(r);
  }, Ir.render = function(n, r, l) {
    if (!Cc(r))
      throw Error(N(200));
    return Ec(null, n, r, !1, l);
  }, Ir.unmountComponentAtNode = function(n) {
    if (!Cc(n))
      throw Error(N(40));
    return n._reactRootContainer ? (Ca(function() {
      Ec(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fa] = null;
      });
    }), !0) : !1;
  }, Ir.unstable_batchedUpdates = od, Ir.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Cc(l))
      throw Error(N(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(N(38));
    return Ec(n, r, l, !1, o);
  }, Ir.version = "18.3.1-next-f1338f8080-20240426", Ir;
}
var Gr = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $E;
function Vk() {
  return $E || ($E = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var se = QE, je = IE(), N = se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gr = !1;
    function Un(e) {
      gr = e;
    }
    function et(e) {
      if (!gr) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        An("warn", e, a);
      }
    }
    function S(e) {
      if (!gr) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        An("error", e, a);
      }
    }
    function An(e, t, a) {
      {
        var i = N.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var we = 0, de = 1, en = 2, le = 3, me = 4, ue = 5, _e = 6, tt = 7, lt = 8, Wr = 9, pn = 10, ze = 11, ut = 12, Ue = 13, ht = 14, be = 15, Tn = 16, rr = 17, Ot = 18, at = 19, Hn = 21, Ae = 22, Xe = 23, Sr = 24, St = 25, Cr = !0, Y = !1, ye = !1, K = !1, Ie = !1, qe = !0, Fn = !1, ar = !0, ai = !0, Rn = !0, ii = !0, Xr = /* @__PURE__ */ new Set(), ca = {}, Hu = {};
    function Er(e, t) {
      ba(e, t), ba(e + "Capture", t);
    }
    function ba(e, t) {
      ca[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ca[e] = t;
      {
        var a = e.toLowerCase();
        Hu[a] = e, e === "onDoubleClick" && (Hu.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Xr.add(t[i]);
    }
    var vn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", jn = Object.prototype.hasOwnProperty;
    function Tr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function qr(e) {
      try {
        return ir(e), !1;
      } catch {
        return !0;
      }
    }
    function ir(e) {
      return "" + e;
    }
    function _a(e, t) {
      if (qr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), ir(e);
    }
    function kl(e) {
      if (qr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), ir(e);
    }
    function ji(e, t) {
      if (qr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), ir(e);
    }
    function li(e, t) {
      if (qr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), ir(e);
    }
    function Vi(e) {
      if (qr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), ir(e);
    }
    function Kr(e) {
      if (qr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tr(e)), ir(e);
    }
    var ui = 0, fa = 1, oi = 2, Vn = 3, Zr = 4, Fu = 5, si = 6, Q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", pe = Q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + Q + "][" + pe + "]*$"), nt = {}, kt = {};
    function hn(e) {
      return jn.call(kt, e) ? !0 : jn.call(nt, e) ? !1 : Me.test(e) ? (kt[e] = !0, !0) : (nt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function jt(e, t, a) {
      return t !== null ? t.type === ui : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, i) {
      if (a !== null && a.type === ui)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ct(e, t, a, i) {
      if (t === null || typeof t > "u" || Rr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Vn:
            return !t;
          case Zr:
            return t === !1;
          case Fu:
            return isNaN(t);
          case si:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function da(e) {
      return Et.hasOwnProperty(e) ? Et[e] : null;
    }
    function Nt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === oi || t === Vn || t === Zr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Et = {}, hp = [
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
    hp.forEach(function(e) {
      Et[e] = new Nt(
        e,
        ui,
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
      var t = e[0], a = e[1];
      Et[t] = new Nt(
        t,
        fa,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Et[e] = new Nt(
        e,
        oi,
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
      Et[e] = new Nt(
        e,
        oi,
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
      Et[e] = new Nt(
        e,
        Vn,
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
      Et[e] = new Nt(
        e,
        Vn,
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
      Et[e] = new Nt(
        e,
        Zr,
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
      Et[e] = new Nt(
        e,
        si,
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
      Et[e] = new Nt(
        e,
        Fu,
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
    var Jo = /[\-\:]([a-z])/g, es = function(e) {
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
      var t = e.replace(Jo, es);
      Et[t] = new Nt(
        t,
        fa,
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
      var t = e.replace(Jo, es);
      Et[t] = new Nt(
        t,
        fa,
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
      var t = e.replace(Jo, es);
      Et[t] = new Nt(
        t,
        fa,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Et[e] = new Nt(
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
    });
    var mp = "xlinkHref";
    Et[mp] = new Nt(
      "xlinkHref",
      fa,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Et[e] = new Nt(
        e,
        fa,
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
    var yp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ts = !1;
    function Jc(e) {
      !ts && yp.test(e) && (ts = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ju(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        _a(a, t), i.sanitizeURL && Jc("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Zr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Ct(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Ct(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Vn)
            return a;
          f = e.getAttribute(s);
        }
        return Ct(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ns(e, t, a, i) {
      {
        if (!hn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return _a(a, t), u === "" + a ? a : u;
      }
    }
    function Bi(e, t, a, i) {
      var u = da(t);
      if (!jt(t, u, i)) {
        if (Ct(t, a, u, i) && (a = null), i || u === null) {
          if (hn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (_a(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Vn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, E;
          R === Vn || R === Zr && a === !0 ? E = "" : (_a(a, m), E = "" + a, u.sanitizeURL && Jc(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var bl = Symbol.for("react.element"), Jr = Symbol.for("react.portal"), Ma = Symbol.for("react.fragment"), _l = Symbol.for("react.strict_mode"), Vu = Symbol.for("react.profiler"), ef = Symbol.for("react.provider"), tf = Symbol.for("react.context"), Ml = Symbol.for("react.forward_ref"), pa = Symbol.for("react.suspense"), Bu = Symbol.for("react.suspense_list"), Ll = Symbol.for("react.memo"), xn = Symbol.for("react.lazy"), gp = Symbol.for("react.scope"), Sp = Symbol.for("react.debug_trace_mode"), nf = Symbol.for("react.offscreen"), Cp = Symbol.for("react.legacy_hidden"), wm = Symbol.for("react.cache"), Dm = Symbol.for("react.tracing_marker"), Tt = Symbol.iterator, km = "@@iterator";
    function La(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Tt && e[Tt] || e[km];
      return typeof t == "function" ? t : null;
    }
    var Le = Object.assign, ci = 0, Ep, rf, Pu, ea, Tp, xr, Rp;
    function xp() {
    }
    xp.__reactDisabledLog = !0;
    function bm() {
      {
        if (ci === 0) {
          Ep = console.log, rf = console.info, Pu = console.warn, ea = console.error, Tp = console.group, xr = console.groupCollapsed, Rp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xp,
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
        ci++;
      }
    }
    function rs() {
      {
        if (ci--, ci === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Le({}, e, {
              value: Ep
            }),
            info: Le({}, e, {
              value: rf
            }),
            warn: Le({}, e, {
              value: Pu
            }),
            error: Le({}, e, {
              value: ea
            }),
            group: Le({}, e, {
              value: Tp
            }),
            groupCollapsed: Le({}, e, {
              value: xr
            }),
            groupEnd: Le({}, e, {
              value: Rp
            })
          });
        }
        ci < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ol = N.ReactCurrentDispatcher, Pi;
    function ta(e, t, a) {
      {
        if (Pi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Pi = i && i[1] || "";
          }
        return `
` + Pi + e;
      }
    }
    var af = !1, as;
    {
      var lf = typeof WeakMap == "function" ? WeakMap : Map;
      as = new lf();
    }
    function is(e, t) {
      if (!e || af)
        return "";
      {
        var a = as.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      af = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ol.current, Ol.current = null, bm();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (M) {
              i = M;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (M) {
              i = M;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            i = M;
          }
          e();
        }
      } catch (M) {
        if (M && i && typeof M.stack == "string") {
          for (var p = M.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var R = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && as.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        af = !1, Ol.current = s, rs(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", b = E ? ta(E) : "";
      return typeof e == "function" && as.set(e, b), b;
    }
    function uf(e, t, a) {
      return is(e, !0);
    }
    function Yi(e, t, a) {
      return is(e, !1);
    }
    function _m(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return is(e, _m(e));
      if (typeof e == "string")
        return ta(e);
      switch (e) {
        case pa:
          return ta("Suspense");
        case Bu:
          return ta("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ml:
            return Yi(e.render);
          case Ll:
            return Yu(e.type, t, a);
          case xn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Yu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ge(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return ta(e.type);
        case Tn:
          return ta("Lazy");
        case Ue:
          return ta("Suspense");
        case at:
          return ta("SuspenseList");
        case we:
        case en:
        case be:
          return Yi(e.type);
        case ze:
          return Yi(e.type.render);
        case de:
          return uf(e.type);
        default:
          return "";
      }
    }
    function of(e) {
      try {
        var t = "", a = e;
        do
          t += Ge(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function wp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ls(e) {
      return e.displayName || "Context";
    }
    function We(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ma:
          return "Fragment";
        case Jr:
          return "Portal";
        case Vu:
          return "Profiler";
        case _l:
          return "StrictMode";
        case pa:
          return "Suspense";
        case Bu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case tf:
            var t = e;
            return ls(t) + ".Consumer";
          case ef:
            var a = e;
            return ls(a._context) + ".Provider";
          case Ml:
            return wp(e, e.render, "ForwardRef");
          case Ll:
            var i = e.displayName || null;
            return i !== null ? i : We(e.type) || "Memo";
          case xn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return We(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Dp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function sf(e) {
      return e.displayName || "Context";
    }
    function Re(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Sr:
          return "Cache";
        case Wr:
          var i = a;
          return sf(i) + ".Consumer";
        case pn:
          var u = a;
          return sf(u._context) + ".Provider";
        case Ot:
          return "DehydratedFragment";
        case ze:
          return Dp(a, a.render, "ForwardRef");
        case tt:
          return "Fragment";
        case ue:
          return a;
        case me:
          return "Portal";
        case le:
          return "Root";
        case _e:
          return "Text";
        case Tn:
          return We(a);
        case lt:
          return a === _l ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case ut:
          return "Profiler";
        case Hn:
          return "Scope";
        case Ue:
          return "Suspense";
        case at:
          return "SuspenseList";
        case St:
          return "TracingMarker";
        case de:
        case we:
        case rr:
        case en:
        case ht:
        case be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var $u = N.ReactDebugCurrentFrame, zt = null, wr = !1;
    function Dr() {
      {
        if (zt === null)
          return null;
        var e = zt._debugOwner;
        if (e !== null && typeof e < "u")
          return Re(e);
      }
      return null;
    }
    function Qu() {
      return zt === null ? "" : of(zt);
    }
    function Vt() {
      $u.getCurrentStack = null, zt = null, wr = !1;
    }
    function Ke(e) {
      $u.getCurrentStack = e === null ? null : Qu, zt = e, wr = !1;
    }
    function Mm() {
      return zt;
    }
    function na(e) {
      wr = e;
    }
    function mn(e) {
      return "" + e;
    }
    function fi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Kr(e), e;
        default:
          return "";
      }
    }
    var kp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Nl(e, t) {
      kp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function cf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function bp(e) {
      return e._valueTracker;
    }
    function Iu(e) {
      e._valueTracker = null;
    }
    function Gu(e) {
      var t = "";
      return e && (cf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function zl(e) {
      var t = cf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Kr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Kr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kr(p), i = "" + p;
          },
          stopTracking: function() {
            Iu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function $i(e) {
      bp(e) || (e._valueTracker = zl(e));
    }
    function _p(e) {
      if (!e)
        return !1;
      var t = bp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Gu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function us(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var os = !1, Wu = !1, ss = !1, ff = !1;
    function Oa(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Xu(e, t) {
      var a = e, i = t.checked, u = Le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function qu(e, t) {
      Nl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Wu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), Wu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !os && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), os = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fi(t.value != null ? t.value : i),
        controlled: Oa(t)
      };
    }
    function df(e, t) {
      var a = e, i = t.checked;
      i != null && Bi(a, "checked", i, !1);
    }
    function Ul(e, t) {
      var a = e;
      {
        var i = Oa(t);
        !a._wrapperState.controlled && i && !ff && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ff = !0), a._wrapperState.controlled && !i && !ss && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ss = !0);
      }
      df(e, t);
      var u = fi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = mn(u)) : a.value !== mn(u) && (a.value = mn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? di(a, t.type, u) : t.hasOwnProperty("defaultValue") && di(a, t.type, fi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ku(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = mn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Mp(e, t) {
      var a = e;
      Ul(a, t), lr(a, t);
    }
    function lr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        _a(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = ch(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            _p(f), Ul(f, p);
          }
        }
      }
    }
    function di(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || us(e.ownerDocument) !== e) && (a == null ? e.defaultValue = mn(e._wrapperState.initialValue) : e.defaultValue !== mn(a) && (e.defaultValue = mn(a)));
    }
    var cs = !1, Al = !1, Lp = !1;
    function fs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? se.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Al || (Al = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Lp || (Lp = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !cs && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), cs = !0);
    }
    function pf(e, t) {
      t.value != null && e.setAttribute("value", mn(fi(t.value)));
    }
    var Zu = Array.isArray;
    function Gt(e) {
      return Zu(e);
    }
    var ds;
    ds = !1;
    function Op() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Np = ["value", "defaultValue"];
    function Lm(e) {
      {
        Nl("select", e);
        for (var t = 0; t < Np.length; t++) {
          var a = Np[t];
          if (e[a] != null) {
            var i = Gt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Op()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Op());
          }
        }
      }
    }
    function pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = mn(fi(a)), R = null, E = 0; E < u.length; E++) {
          if (u[E].value === y) {
            u[E].selected = !0, i && (u[E].defaultSelected = !0);
            return;
          }
          R === null && !u[E].disabled && (R = u[E]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function vf(e, t) {
      return Le({}, t, {
        value: void 0
      });
    }
    function zp(e, t) {
      var a = e;
      Lm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ds && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ds = !0);
    }
    function Om(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? pi(a, !!t.multiple, i, !1) : t.defaultValue != null && pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Nm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? pi(a, !!t.multiple, t.defaultValue, !0) : pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function zm(e, t) {
      var a = e, i = t.value;
      i != null && pi(a, !!t.multiple, i, !1);
    }
    var hf = !1;
    function mf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: mn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Up(e, t) {
      var a = e;
      Nl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !hf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), hf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Gt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: fi(i)
      };
    }
    function Ap(e, t) {
      var a = e, i = fi(t.value), u = fi(t.defaultValue);
      if (i != null) {
        var s = mn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = mn(u));
    }
    function Hp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function yf(e, t) {
      Ap(e, t);
    }
    var Na = "http://www.w3.org/1999/xhtml", Um = "http://www.w3.org/1998/Math/MathML", gf = "http://www.w3.org/2000/svg";
    function ps(e) {
      switch (e) {
        case "svg":
          return gf;
        case "math":
          return Um;
        default:
          return Na;
      }
    }
    function Sf(e, t) {
      return e == null || e === Na ? ps(t) : e === gf && t === "foreignObject" ? Na : e;
    }
    var Am = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, vs, Fp = Am(function(e, t) {
      if (e.namespaceURI === gf && !("innerHTML" in e)) {
        vs = vs || document.createElement("div"), vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Bn = 1, za = 3, Ut = 8, ra = 9, Qi = 11, hs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === za) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, jp = {
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
    }, Hl = {
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
    function Vp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Bp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Hl).forEach(function(e) {
      Bp.forEach(function(t) {
        Hl[Vp(t, e)] = Hl[e];
      });
    });
    function ms(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Hl.hasOwnProperty(e) && Hl[e]) ? t + "px" : (li(t, e), ("" + t).trim());
    }
    var Fl = /([A-Z])/g, Hm = /^ms-/;
    function Fm(e) {
      return e.replace(Fl, "-$1").toLowerCase().replace(Hm, "-ms-");
    }
    var Pp = function() {
    };
    {
      var Yp = /^(?:webkit|moz|o)[A-Z]/, $p = /^-ms-/, Ju = /-(.)/g, jl = /;\s*$/, Vl = {}, Bl = {}, Qp = !1, Cf = !1, Ef = function(e) {
        return e.replace(Ju, function(t, a) {
          return a.toUpperCase();
        });
      }, Tf = function(e) {
        Vl.hasOwnProperty(e) && Vl[e] || (Vl[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ef(e.replace($p, "ms-"))
        ));
      }, Ip = function(e) {
        Vl.hasOwnProperty(e) && Vl[e] || (Vl[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Gp = function(e, t) {
        Bl.hasOwnProperty(t) && Bl[t] || (Bl[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(jl, "")));
      }, Wp = function(e, t) {
        Qp || (Qp = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, jm = function(e, t) {
        Cf || (Cf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Pp = function(e, t) {
        e.indexOf("-") > -1 ? Tf(e) : Yp.test(e) ? Ip(e) : jl.test(t) && Gp(e, t), typeof t == "number" && (isNaN(t) ? Wp(e, t) : isFinite(t) || jm(e, t));
      };
    }
    var Vm = Pp;
    function Bm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Fm(i)) + ":", t += ms(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Xp(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Vm(i, t[i]);
          var s = ms(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Pm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function kr(e) {
      var t = {};
      for (var a in e)
        for (var i = jp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function eo(e, t) {
      {
        if (!t)
          return;
        var a = kr(e), i = kr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Pm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var qp = {
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
    }, Kp = Le({
      menuitem: !0
    }, qp), Zp = "__html";
    function ys(e, t) {
      if (t) {
        if (Kp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Zp in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ua(e, t) {
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
    var gs = {
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
    }, Jp = {
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
    }, aa = {}, Rf = new RegExp("^(aria)-[" + pe + "]*$"), to = new RegExp("^(aria)[A-Z][" + pe + "]*$");
    function xf(e, t) {
      {
        if (jn.call(aa, t) && aa[t])
          return !0;
        if (to.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Jp.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), aa[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), aa[t] = !0, !0;
        }
        if (Rf.test(t)) {
          var u = t.toLowerCase(), s = Jp.hasOwnProperty(u) ? u : null;
          if (s == null)
            return aa[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), aa[t] = !0, !0;
        }
      }
      return !0;
    }
    function ev(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = xf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ss(e, t) {
      Ua(e, t) || ev(e, t);
    }
    var Ii = !1;
    function wf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ii && (Ii = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Df = function() {
    };
    {
      var Wt = {}, kf = /^on./, tv = /^on[^A-Z]/, nv = new RegExp("^(aria)-[" + pe + "]*$"), rv = new RegExp("^(aria)[A-Z][" + pe + "]*$");
      Df = function(e, t, a, i) {
        if (jn.call(Wt, t) && Wt[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wt[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wt[t] = !0, !0;
          if (kf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Wt[t] = !0, !0;
        } else if (kf.test(t))
          return tv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wt[t] = !0, !0;
        if (nv.test(t) || rv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wt[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wt[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wt[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wt[t] = !0, !0;
        var v = da(t), m = v !== null && v.type === ui;
        if (gs.hasOwnProperty(u)) {
          var y = gs[u];
          if (y !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Wt[t] = !0, !0;
        } else if (!m && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wt[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wt[t] = !0, !0) : m ? !0 : Rr(t, a, v, !1) ? (Wt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wt[t] = !0), !0);
      };
    }
    var av = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Df(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function iv(e, t, a) {
      Ua(e, t) || av(e, t, a);
    }
    var Aa = 1, no = 2, Gi = 4, Ym = Aa | no | Gi, ro = null;
    function ao(e) {
      ro !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ro = e;
    }
    function $m() {
      ro === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ro = null;
    }
    function lv(e) {
      return e === ro;
    }
    function Cs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === za ? t.parentNode : t;
    }
    var rt = null, vi = null, Ha = null;
    function Pl(e) {
      var t = Eu(e);
      if (t) {
        if (typeof rt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = ch(a);
          rt(t.stateNode, t.type, i);
        }
      }
    }
    function uv(e) {
      rt = e;
    }
    function Es(e) {
      vi ? Ha ? Ha.push(e) : Ha = [e] : vi = e;
    }
    function io() {
      return vi !== null || Ha !== null;
    }
    function lo() {
      if (vi) {
        var e = vi, t = Ha;
        if (vi = null, Ha = null, Pl(e), t)
          for (var a = 0; a < t.length; a++)
            Pl(t[a]);
      }
    }
    var Wi = function(e, t) {
      return e(t);
    }, bf = function() {
    }, _f = !1;
    function Qm() {
      var e = io();
      e && (bf(), lo());
    }
    function Mf(e, t, a) {
      if (_f)
        return e(t, a);
      _f = !0;
      try {
        return Wi(e, t, a);
      } finally {
        _f = !1, Qm();
      }
    }
    function Ts(e, t, a) {
      Wi = e, bf = a;
    }
    function Rs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Lf(e, t, a) {
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
          return !!(a.disabled && Rs(t));
        default:
          return !1;
      }
    }
    function Xi(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = ch(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Lf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var uo = !1;
    if (vn)
      try {
        var qi = {};
        Object.defineProperty(qi, "passive", {
          get: function() {
            uo = !0;
          }
        }), window.addEventListener("test", qi, qi), window.removeEventListener("test", qi, qi);
      } catch {
        uo = !1;
      }
    function ov(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Of = ov;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nf = document.createElement("react");
      Of = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, b = window.event, M = Object.getOwnPropertyDescriptor(window, "event");
        function L() {
          Nf.removeEventListener(O, fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = b);
        }
        var $ = Array.prototype.slice.call(arguments, 3);
        function fe() {
          R = !0, L(), a.apply(i, $), E = !1;
        }
        var ie, Fe = !1, Ne = !1;
        function w(D) {
          if (ie = D.error, Fe = !0, ie === null && D.colno === 0 && D.lineno === 0 && (Ne = !0), D.defaultPrevented && ie != null && typeof ie == "object")
            try {
              ie._suppressLogging = !0;
            } catch {
            }
        }
        var O = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", w), Nf.addEventListener(O, fe, !1), y.initEvent(O, !1, !1), Nf.dispatchEvent(y), M && Object.defineProperty(window, "event", M), R && E && (Fe ? Ne && (ie = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ie = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ie)), window.removeEventListener("error", w), !R)
          return L(), ov.apply(this, arguments);
      };
    }
    var Im = Of, hi = !1, ia = null, oo = !1, mi = null, va = {
      onError: function(e) {
        hi = !0, ia = e;
      }
    };
    function Ki(e, t, a, i, u, s, f, p, v) {
      hi = !1, ia = null, Im.apply(va, arguments);
    }
    function Fa(e, t, a, i, u, s, f, p, v) {
      if (Ki.apply(this, arguments), hi) {
        var m = Uf();
        oo || (oo = !0, mi = m);
      }
    }
    function zf() {
      if (oo) {
        var e = mi;
        throw oo = !1, mi = null, e;
      }
    }
    function Gm() {
      return hi;
    }
    function Uf() {
      if (hi) {
        var e = ia;
        return hi = !1, ia = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function br(e) {
      return e._reactInternals;
    }
    function so(e) {
      return e._reactInternals !== void 0;
    }
    function Yl(e, t) {
      e._reactInternals = t;
    }
    var ce = (
      /*                      */
      0
    ), yi = (
      /*                */
      1
    ), ot = (
      /*                    */
      2
    ), De = (
      /*                       */
      4
    ), Ye = (
      /*                */
      16
    ), $e = (
      /*                 */
      32
    ), ha = (
      /*                     */
      64
    ), Se = (
      /*                   */
      128
    ), Rt = (
      /*            */
      256
    ), Pn = (
      /*                          */
      512
    ), _r = (
      /*                     */
      1024
    ), dt = (
      /*                      */
      2048
    ), Mr = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), co = (
      /*             */
      16384
    ), xs = dt | De | ha | Pn | _r | co, sv = (
      /*               */
      32767
    ), ur = (
      /*                   */
      32768
    ), Xt = (
      /*                */
      65536
    ), fo = (
      /* */
      131072
    ), Af = (
      /*                       */
      1048576
    ), Hf = (
      /*                    */
      2097152
    ), Yn = (
      /*                 */
      4194304
    ), Si = (
      /*                */
      8388608
    ), $n = (
      /*               */
      16777216
    ), Zi = (
      /*              */
      33554432
    ), $l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      De | _r | 0
    ), Qn = ot | De | Ye | $e | Pn | Mr | gi, yn = De | ha | Pn | gi, Lr = dt | Ye, tn = Yn | Si | Hf, ja = N.ReactCurrentOwner;
    function or(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ot | Mr)) !== ce && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === le ? a : null;
    }
    function Ff(e) {
      if (e.tag === Ue) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function ws(e) {
      return e.tag === le ? e.stateNode.containerInfo : null;
    }
    function jf(e) {
      return or(e) === e;
    }
    function sr(e) {
      {
        var t = ja.current;
        if (t !== null && t.tag === de) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = br(e);
      return u ? or(u) === u : !1;
    }
    function In(e) {
      if (or(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function st(e) {
      var t = e.alternate;
      if (!t) {
        var a = or(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return In(s), e;
            if (v === u)
              return In(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== le)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Or(e) {
      var t = st(e);
      return t !== null ? Vf(t) : null;
    }
    function Vf(e) {
      if (e.tag === ue || e.tag === _e)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Vf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function cv(e) {
      var t = st(e);
      return t !== null ? Ds(t) : null;
    }
    function Ds(e) {
      if (e.tag === ue || e.tag === _e)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = Ds(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var ks = je.unstable_scheduleCallback, fv = je.unstable_cancelCallback, bs = je.unstable_shouldYield, dv = je.unstable_requestPaint, mt = je.unstable_now, Bf = je.unstable_getCurrentPriorityLevel, _s = je.unstable_ImmediatePriority, Ji = je.unstable_UserBlockingPriority, ma = je.unstable_NormalPriority, pv = je.unstable_LowPriority, Ms = je.unstable_IdlePriority, Ql = je.unstable_yieldValue, vv = je.unstable_setDisableYieldValue, Va = null, Bt = null, B = null, Nr = !1, cr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Pf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ai && (e = Le({}, e, {
          getLaneLabelMap: Ba,
          injectProfilingHooks: hv
        })), Va = t.inject(e), Bt = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Yf(e, t) {
      if (Bt && typeof Bt.onScheduleFiberRoot == "function")
        try {
          Bt.onScheduleFiberRoot(Va, e, t);
        } catch (a) {
          Nr || (Nr = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Il(e, t) {
      if (Bt && typeof Bt.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Se) === Se;
          if (Rn) {
            var i;
            switch (t) {
              case _t:
                i = _s;
                break;
              case Ya:
                i = Ji;
                break;
              case ya:
                i = ma;
                break;
              case au:
                i = Ms;
                break;
              default:
                i = ma;
                break;
            }
            Bt.onCommitFiberRoot(Va, e, i, a);
          }
        } catch (u) {
          Nr || (Nr = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function zr(e) {
      if (Bt && typeof Bt.onPostCommitFiberRoot == "function")
        try {
          Bt.onPostCommitFiberRoot(Va, e);
        } catch (t) {
          Nr || (Nr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function el(e) {
      if (Bt && typeof Bt.onCommitFiberUnmount == "function")
        try {
          Bt.onCommitFiberUnmount(Va, e);
        } catch (t) {
          Nr || (Nr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function At(e) {
      if (typeof Ql == "function" && (vv(e), Un(e)), Bt && typeof Bt.setStrictMode == "function")
        try {
          Bt.setStrictMode(Va, e);
        } catch (t) {
          Nr || (Nr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function hv(e) {
      B = e;
    }
    function Ba() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < yo; a++) {
          var i = Xm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ci(e) {
      B !== null && typeof B.markCommitStarted == "function" && B.markCommitStarted(e);
    }
    function Ls() {
      B !== null && typeof B.markCommitStopped == "function" && B.markCommitStopped();
    }
    function Gl(e) {
      B !== null && typeof B.markComponentRenderStarted == "function" && B.markComponentRenderStarted(e);
    }
    function Gn() {
      B !== null && typeof B.markComponentRenderStopped == "function" && B.markComponentRenderStopped();
    }
    function Ei(e) {
      B !== null && typeof B.markComponentPassiveEffectMountStarted == "function" && B.markComponentPassiveEffectMountStarted(e);
    }
    function Os() {
      B !== null && typeof B.markComponentPassiveEffectMountStopped == "function" && B.markComponentPassiveEffectMountStopped();
    }
    function mv(e) {
      B !== null && typeof B.markComponentPassiveEffectUnmountStarted == "function" && B.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ns() {
      B !== null && typeof B.markComponentPassiveEffectUnmountStopped == "function" && B.markComponentPassiveEffectUnmountStopped();
    }
    function yv(e) {
      B !== null && typeof B.markComponentLayoutEffectMountStarted == "function" && B.markComponentLayoutEffectMountStarted(e);
    }
    function po() {
      B !== null && typeof B.markComponentLayoutEffectMountStopped == "function" && B.markComponentLayoutEffectMountStopped();
    }
    function la(e) {
      B !== null && typeof B.markComponentLayoutEffectUnmountStarted == "function" && B.markComponentLayoutEffectUnmountStarted(e);
    }
    function Wl() {
      B !== null && typeof B.markComponentLayoutEffectUnmountStopped == "function" && B.markComponentLayoutEffectUnmountStopped();
    }
    function vo(e, t, a) {
      B !== null && typeof B.markComponentErrored == "function" && B.markComponentErrored(e, t, a);
    }
    function tl(e, t, a) {
      B !== null && typeof B.markComponentSuspended == "function" && B.markComponentSuspended(e, t, a);
    }
    function $f(e) {
      B !== null && typeof B.markLayoutEffectsStarted == "function" && B.markLayoutEffectsStarted(e);
    }
    function Xl() {
      B !== null && typeof B.markLayoutEffectsStopped == "function" && B.markLayoutEffectsStopped();
    }
    function gv(e) {
      B !== null && typeof B.markPassiveEffectsStarted == "function" && B.markPassiveEffectsStarted(e);
    }
    function Qf() {
      B !== null && typeof B.markPassiveEffectsStopped == "function" && B.markPassiveEffectsStopped();
    }
    function pt(e) {
      B !== null && typeof B.markRenderStarted == "function" && B.markRenderStarted(e);
    }
    function zs() {
      B !== null && typeof B.markRenderYielded == "function" && B.markRenderYielded();
    }
    function Us() {
      B !== null && typeof B.markRenderStopped == "function" && B.markRenderStopped();
    }
    function If(e) {
      B !== null && typeof B.markRenderScheduled == "function" && B.markRenderScheduled(e);
    }
    function As(e, t) {
      B !== null && typeof B.markForceUpdateScheduled == "function" && B.markForceUpdateScheduled(e, t);
    }
    function ho(e, t) {
      B !== null && typeof B.markStateUpdateScheduled == "function" && B.markStateUpdateScheduled(e, t);
    }
    var ne = (
      /*                         */
      0
    ), ae = (
      /*                 */
      1
    ), Ce = (
      /*                    */
      2
    ), ke = (
      /*               */
      8
    ), fr = (
      /*              */
      16
    ), ql = Math.clz32 ? Math.clz32 : gn, mo = Math.log, Wm = Math.LN2;
    function gn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (mo(t) / Wm | 0) | 0;
    }
    var yo = 31, U = (
      /*                        */
      0
    ), Ht = (
      /*                          */
      0
    ), oe = (
      /*                        */
      1
    ), nn = (
      /*    */
      2
    ), dr = (
      /*             */
      4
    ), Pa = (
      /*            */
      8
    ), Ur = (
      /*                     */
      16
    ), Kl = (
      /*                */
      32
    ), nl = (
      /*                       */
      4194240
    ), Zl = (
      /*                        */
      64
    ), Hs = (
      /*                        */
      128
    ), Fs = (
      /*                        */
      256
    ), js = (
      /*                        */
      512
    ), Vs = (
      /*                        */
      1024
    ), Bs = (
      /*                        */
      2048
    ), rl = (
      /*                        */
      4096
    ), Ps = (
      /*                        */
      8192
    ), Jl = (
      /*                        */
      16384
    ), eu = (
      /*                       */
      32768
    ), Ys = (
      /*                       */
      65536
    ), go = (
      /*                       */
      131072
    ), $s = (
      /*                       */
      262144
    ), Qs = (
      /*                       */
      524288
    ), Is = (
      /*                       */
      1048576
    ), Gs = (
      /*                       */
      2097152
    ), tu = (
      /*                            */
      130023424
    ), al = (
      /*                             */
      4194304
    ), Ws = (
      /*                             */
      8388608
    ), Xs = (
      /*                             */
      16777216
    ), Gf = (
      /*                             */
      33554432
    ), qs = (
      /*                             */
      67108864
    ), Sv = al, So = (
      /*          */
      134217728
    ), Wf = (
      /*                          */
      268435455
    ), nu = (
      /*               */
      268435456
    ), Ti = (
      /*                        */
      536870912
    ), Sn = (
      /*                   */
      1073741824
    );
    function Xm(e) {
      {
        if (e & oe)
          return "Sync";
        if (e & nn)
          return "InputContinuousHydration";
        if (e & dr)
          return "InputContinuous";
        if (e & Pa)
          return "DefaultHydration";
        if (e & Ur)
          return "Default";
        if (e & Kl)
          return "TransitionHydration";
        if (e & nl)
          return "Transition";
        if (e & tu)
          return "Retry";
        if (e & So)
          return "SelectiveHydration";
        if (e & nu)
          return "IdleHydration";
        if (e & Ti)
          return "Idle";
        if (e & Sn)
          return "Offscreen";
      }
    }
    var it = -1, Ks = Zl, Wn = al;
    function il(e) {
      switch (bt(e)) {
        case oe:
          return oe;
        case nn:
          return nn;
        case dr:
          return dr;
        case Pa:
          return Pa;
        case Ur:
          return Ur;
        case Kl:
          return Kl;
        case Zl:
        case Hs:
        case Fs:
        case js:
        case Vs:
        case Bs:
        case rl:
        case Ps:
        case Jl:
        case eu:
        case Ys:
        case go:
        case $s:
        case Qs:
        case Is:
        case Gs:
          return e & nl;
        case al:
        case Ws:
        case Xs:
        case Gf:
        case qs:
          return e & tu;
        case So:
          return So;
        case nu:
          return nu;
        case Ti:
          return Ti;
        case Sn:
          return Sn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ll(e, t) {
      var a = e.pendingLanes;
      if (a === U)
        return U;
      var i = U, u = e.suspendedLanes, s = e.pingedLanes, f = a & Wf;
      if (f !== U) {
        var p = f & ~u;
        if (p !== U)
          i = il(p);
        else {
          var v = f & s;
          v !== U && (i = il(v));
        }
      } else {
        var m = a & ~u;
        m !== U ? i = il(m) : s !== U && (i = il(s));
      }
      if (i === U)
        return U;
      if (t !== U && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === U) {
        var y = bt(i), R = bt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === Ur && (R & nl) !== U
        )
          return t;
      }
      (i & dr) !== U && (i |= a & Ur);
      var E = e.entangledLanes;
      if (E !== U)
        for (var b = e.entanglements, M = i & E; M > 0; ) {
          var L = xi(M), $ = 1 << L;
          i |= b[L], M &= ~$;
        }
      return i;
    }
    function Cv(e, t) {
      for (var a = e.eventTimes, i = it; t > 0; ) {
        var u = xi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ev(e, t) {
      switch (e) {
        case oe:
        case nn:
        case dr:
          return t + 250;
        case Pa:
        case Ur:
        case Kl:
        case Zl:
        case Hs:
        case Fs:
        case js:
        case Vs:
        case Bs:
        case rl:
        case Ps:
        case Jl:
        case eu:
        case Ys:
        case go:
        case $s:
        case Qs:
        case Is:
        case Gs:
          return t + 5e3;
        case al:
        case Ws:
        case Xs:
        case Gf:
        case qs:
          return it;
        case So:
        case nu:
        case Ti:
        case Sn:
          return it;
        default:
          return S("Should have found matching lanes. This is a bug in React."), it;
      }
    }
    function Tv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xi(f), v = 1 << p, m = s[p];
        m === it ? ((v & i) === U || (v & u) !== U) && (s[p] = Ev(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Xf(e) {
      return il(e.pendingLanes);
    }
    function Ri(e) {
      var t = e.pendingLanes & ~Sn;
      return t !== U ? t : t & Sn ? Sn : U;
    }
    function qf(e) {
      return (e & oe) !== U;
    }
    function Co(e) {
      return (e & Wf) !== U;
    }
    function Rv(e) {
      return (e & tu) === e;
    }
    function xv(e) {
      var t = oe | dr | Ur;
      return (e & t) === U;
    }
    function wv(e) {
      return (e & nl) === e;
    }
    function Eo(e, t) {
      var a = nn | dr | Pa | Ur;
      return (t & a) !== U;
    }
    function Dv(e, t) {
      return (t & e.expiredLanes) !== U;
    }
    function Kf(e) {
      return (e & nl) !== U;
    }
    function kv() {
      var e = Ks;
      return Ks <<= 1, (Ks & nl) === U && (Ks = Zl), e;
    }
    function Xn() {
      var e = Wn;
      return Wn <<= 1, (Wn & tu) === U && (Wn = al), e;
    }
    function bt(e) {
      return e & -e;
    }
    function ru(e) {
      return bt(e);
    }
    function xi(e) {
      return 31 - ql(e);
    }
    function Zs(e) {
      return xi(e);
    }
    function qn(e, t) {
      return (e & t) !== U;
    }
    function ul(e, t) {
      return (e & t) === t;
    }
    function xe(e, t) {
      return e | t;
    }
    function To(e, t) {
      return e & ~t;
    }
    function Js(e, t) {
      return e & t;
    }
    function qm(e) {
      return e;
    }
    function bv(e, t) {
      return e !== Ht && e < t ? e : t;
    }
    function Ro(e) {
      for (var t = [], a = 0; a < yo; a++)
        t.push(e);
      return t;
    }
    function ol(e, t, a) {
      e.pendingLanes |= t, t !== Ti && (e.suspendedLanes = U, e.pingedLanes = U);
      var i = e.eventTimes, u = Zs(t);
      i[u] = a;
    }
    function _v(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = xi(i), s = 1 << u;
        a[u] = it, i &= ~s;
      }
    }
    function ec(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function tc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = U, e.pingedLanes = U, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xi(f), v = 1 << p;
        i[p] = U, u[p] = it, s[p] = it, f &= ~v;
      }
    }
    function Zf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = xi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Mv(e, t) {
      var a = bt(t), i;
      switch (a) {
        case dr:
          i = nn;
          break;
        case Ur:
          i = Pa;
          break;
        case Zl:
        case Hs:
        case Fs:
        case js:
        case Vs:
        case Bs:
        case rl:
        case Ps:
        case Jl:
        case eu:
        case Ys:
        case go:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case al:
        case Ws:
        case Xs:
        case Gf:
        case qs:
          i = Kl;
          break;
        case Ti:
          i = nu;
          break;
        default:
          i = Ht;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ht ? Ht : i;
    }
    function nc(e, t, a) {
      if (cr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Zs(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Jf(e, t) {
      if (cr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Zs(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function xo(e, t) {
      return null;
    }
    var _t = oe, Ya = dr, ya = Ur, au = Ti, iu = Ht;
    function Ar() {
      return iu;
    }
    function xt(e) {
      iu = e;
    }
    function Cn(e, t) {
      var a = iu;
      try {
        return iu = e, t();
      } finally {
        iu = a;
      }
    }
    function Km(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Zm(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function lu(e, t) {
      return e !== 0 && e < t;
    }
    function rn(e) {
      var t = bt(e);
      return lu(_t, t) ? lu(Ya, t) ? Co(t) ? ya : au : Ya : _t;
    }
    function rc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var q;
    function uu(e) {
      q = e;
    }
    function ed(e) {
      q(e);
    }
    var ac;
    function Jm(e) {
      ac = e;
    }
    var ou;
    function ic(e) {
      ou = e;
    }
    var lc;
    function Lv(e) {
      lc = e;
    }
    var td;
    function Ov(e) {
      td = e;
    }
    var wo = !1, su = [], vt = null, qt = null, wn = null, cu = /* @__PURE__ */ new Map(), fu = /* @__PURE__ */ new Map(), Kt = [], Nv = [
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
    function ga(e) {
      return Nv.indexOf(e) > -1;
    }
    function ey(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function nd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          vt = null;
          break;
        case "dragenter":
        case "dragleave":
          qt = null;
          break;
        case "mouseover":
        case "mouseout":
          wn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          cu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          fu.delete(i);
          break;
        }
      }
    }
    function du(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ey(t, a, i, u, s);
        if (t !== null) {
          var p = Eu(t);
          p !== null && ac(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function zv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return vt = du(vt, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return qt = du(qt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return wn = du(wn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return cu.set(m, du(cu.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return fu.set(R, du(fu.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function rd(e) {
      var t = Ho(e.target);
      if (t !== null) {
        var a = or(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ue) {
            var u = Ff(a);
            if (u !== null) {
              e.blockedOn = u, td(e.priority, function() {
                ou(a);
              });
              return;
            }
          } else if (i === le) {
            var s = a.stateNode;
            if (rc(s)) {
              e.blockedOn = ws(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ty(e) {
      for (var t = lc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Kt.length && lu(t, Kt[i].priority); i++)
        ;
      Kt.splice(i, 0, a), i === 0 && rd(a);
    }
    function sl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = En(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ao(s), u.target.dispatchEvent(s), $m();
        } else {
          var f = Eu(i);
          return f !== null && ac(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function uc(e, t, a) {
      sl(e) && a.delete(t);
    }
    function Hr() {
      wo = !1, vt !== null && sl(vt) && (vt = null), qt !== null && sl(qt) && (qt = null), wn !== null && sl(wn) && (wn = null), cu.forEach(uc), fu.forEach(uc);
    }
    function Oe(e, t) {
      e.blockedOn === t && (e.blockedOn = null, wo || (wo = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, Hr)));
    }
    function wt(e) {
      if (su.length > 0) {
        Oe(su[0], e);
        for (var t = 1; t < su.length; t++) {
          var a = su[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      vt !== null && Oe(vt, e), qt !== null && Oe(qt, e), wn !== null && Oe(wn, e);
      var i = function(p) {
        return Oe(p, e);
      };
      cu.forEach(i), fu.forEach(i);
      for (var u = 0; u < Kt.length; u++) {
        var s = Kt[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Kt.length > 0; ) {
        var f = Kt[0];
        if (f.blockedOn !== null)
          break;
        rd(f), f.blockedOn === null && Kt.shift();
      }
    }
    var ct = N.ReactCurrentBatchConfig, Pt = !0;
    function Kn(e) {
      Pt = !!e;
    }
    function pu() {
      return Pt;
    }
    function Yt(e, t, a) {
      var i = oc(t), u;
      switch (i) {
        case _t:
          u = Do;
          break;
        case Ya:
          u = cl;
          break;
        case ya:
        default:
          u = vu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Do(e, t, a, i) {
      var u = Ar(), s = ct.transition;
      ct.transition = null;
      try {
        xt(_t), vu(e, t, a, i);
      } finally {
        xt(u), ct.transition = s;
      }
    }
    function cl(e, t, a, i) {
      var u = Ar(), s = ct.transition;
      ct.transition = null;
      try {
        xt(Ya), vu(e, t, a, i);
      } finally {
        xt(u), ct.transition = s;
      }
    }
    function vu(e, t, a, i) {
      Pt && ad(e, t, a, i);
    }
    function ad(e, t, a, i) {
      var u = En(e, t, a, i);
      if (u === null) {
        gy(e, t, i, wi, a), nd(e, i);
        return;
      }
      if (zv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (nd(e, i), t & Gi && ga(e)) {
        for (; u !== null; ) {
          var s = Eu(u);
          s !== null && ed(s);
          var f = En(e, t, a, i);
          if (f === null && gy(e, t, i, wi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      gy(e, t, i, null, a);
    }
    var wi = null;
    function En(e, t, a, i) {
      wi = null;
      var u = Cs(i), s = Ho(u);
      if (s !== null) {
        var f = or(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ue) {
            var v = Ff(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === le) {
            var m = f.stateNode;
            if (rc(m))
              return ws(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return wi = s, null;
    }
    function oc(e) {
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
          return _t;
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
          return Ya;
        case "message": {
          var t = Bf();
          switch (t) {
            case _s:
              return _t;
            case Ji:
              return Ya;
            case ma:
            case pv:
              return ya;
            case Ms:
              return au;
            default:
              return ya;
          }
        }
        default:
          return ya;
      }
    }
    function hu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function $a(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function sc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function id(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Fr = null, mu = null, jr = null;
    function cc(e) {
      return Fr = e, mu = bo(), !0;
    }
    function ko() {
      Fr = null, mu = null, jr = null;
    }
    function fc() {
      if (jr)
        return jr;
      var e, t = mu, a = t.length, i, u = bo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return jr = u.slice(e, p), jr;
    }
    function bo() {
      return "value" in Fr ? Fr.value : Fr.textContent;
    }
    function fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Zt() {
      return !0;
    }
    function Qa() {
      return !1;
    }
    function yt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Zt : this.isDefaultPrevented = Qa, this.isPropagationStopped = Qa, this;
      }
      return Le(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Zt);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Zt);
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
        isPersistent: Zt
      }), t;
    }
    var $t = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, dc = yt($t), dl = Le({}, $t, {
      view: 0,
      detail: 0
    }), ld = yt(dl), ud, Sa, yu;
    function od(e) {
      e !== yu && (yu && e.type === "mousemove" ? (ud = e.screenX - yu.screenX, Sa = e.screenY - yu.screenY) : (ud = 0, Sa = 0), yu = e);
    }
    var Ca = Le({}, dl, {
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
      getModifierState: sd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (od(e), ud);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Sa;
      }
    }), pc = yt(Ca), pl = Le({}, Ca, {
      dataTransfer: 0
    }), Uv = yt(pl), Av = Le({}, dl, {
      relatedTarget: 0
    }), _o = yt(Av), vc = Le({}, $t, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ny = yt(vc), ry = Le({}, $t, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Hv = yt(ry), Fv = Le({}, $t, {
      data: 0
    }), Di = yt(Fv), ay = Di, gu = {
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
    }, jv = {
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
    function Dt(e) {
      if (e.key) {
        var t = gu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? jv[e.keyCode] || "Unidentified" : "";
    }
    var iy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Vv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = iy[e];
      return i ? !!a[i] : !1;
    }
    function sd(e) {
      return Vv;
    }
    var ly = Le({}, dl, {
      key: Dt,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: sd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Bv = yt(ly), Pv = Le({}, Ca, {
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
    }), Yv = yt(Pv), Vr = Le({}, dl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: sd
    }), cd = yt(Vr), uy = Le({}, $t, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ki = yt(uy), hc = Le({}, Ca, {
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
    }), vl = yt(hc), mc = [9, 13, 27, 32], yc = 229, Mo = vn && "CompositionEvent" in window, Lo = null;
    vn && "documentMode" in document && (Lo = document.documentMode);
    var fd = vn && "TextEvent" in window && !Lo, $v = vn && (!Mo || Lo && Lo > 8 && Lo <= 11), dd = 32, pd = String.fromCharCode(dd);
    function gc() {
      Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Er("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Oo = !1;
    function Qv(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function oy(e, t) {
      return e === "keydown" && t.keyCode === yc;
    }
    function hd(e, t) {
      switch (e) {
        case "keyup":
          return mc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== yc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Sc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function No(e) {
      return e.locale === "ko";
    }
    var bi = !1;
    function Cc(e, t, a, i, u) {
      var s, f;
      if (Mo ? s = vd(t) : bi ? hd(t, i) && (s = "onCompositionEnd") : oy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      $v && !No(i) && (!bi && s === "onCompositionStart" ? bi = cc(u) : s === "onCompositionEnd" && bi && (f = fc()));
      var p = Kv(a, s);
      if (p.length > 0) {
        var v = new Di(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Sc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Iv(e, t) {
      switch (e) {
        case "compositionend":
          return Sc(t);
        case "keypress":
          var a = t.which;
          return a !== dd ? null : (Oo = !0, pd);
        case "textInput":
          var i = t.data;
          return i === pd && Oo ? null : i;
        default:
          return null;
      }
    }
    function sy(e, t) {
      if (bi) {
        if (e === "compositionend" || !Mo && hd(e, t)) {
          var a = fc();
          return ko(), bi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Qv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return $v && !No(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ec(e, t, a, i, u) {
      var s;
      if (fd ? s = Iv(t, i) : s = sy(t, i), !s)
        return null;
      var f = Kv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ay("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function cy(e, t, a, i, u, s, f) {
      Cc(e, t, a, i, u), Ec(e, t, a, i, u);
    }
    var zo = {
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
    function Gv(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!zo[e.type] : t === "textarea";
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
    function Tc(e) {
      if (!vn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Er("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Es(i);
      var u = Kv(t, "onChange");
      if (u.length > 0) {
        var s = new dc("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Cs(e)), Mf(h, t);
    }
    function h(e) {
      y0(e, 0);
    }
    function g(e) {
      var t = bc(e);
      if (_p(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    vn && (_ = Tc("input") && (!document.documentMode || document.documentMode > 9));
    function H(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", A);
    }
    function F() {
      l && (l.detachEvent("onpropertychange", A), l = null, o = null);
    }
    function A(e) {
      e.propertyName === "value" && g(o) && d(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (F(), H(t, a)) : e === "focusout" && F();
    }
    function Z(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return g(o);
    }
    function te(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Mt(e, t) {
      if (e === "click")
        return g(t);
    }
    function x(e, t) {
      if (e === "input" || e === "change")
        return g(t);
    }
    function T(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || di(e, "number", e.value);
    }
    function k(e, t, a, i, u, s, f) {
      var p = a ? bc(a) : window, v, m;
      if (c(p) ? v = C : Gv(p) ? _ ? v = x : (v = Z, m = G) : te(p) && (v = Mt), v) {
        var y = v(t, a);
        if (y) {
          r(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && T(p);
    }
    function V() {
      ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function re(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !lv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Ho(m) || _d(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var R = u.ownerDocument;
          R ? y = R.defaultView || R.parentWindow : y = window;
        }
        var E, b;
        if (v) {
          var M = i.relatedTarget || i.toElement;
          if (E = a, b = M ? Ho(M) : null, b !== null) {
            var L = or(b);
            (b !== L || b.tag !== ue && b.tag !== _e) && (b = null);
          }
        } else
          E = null, b = a;
        if (E !== b) {
          var $ = pc, fe = "onMouseLeave", ie = "onMouseEnter", Fe = "mouse";
          (t === "pointerout" || t === "pointerover") && ($ = Yv, fe = "onPointerLeave", ie = "onPointerEnter", Fe = "pointer");
          var Ne = E == null ? y : bc(E), w = b == null ? y : bc(b), O = new $(fe, Fe + "leave", E, i, u);
          O.target = Ne, O.relatedTarget = w;
          var D = null, j = Ho(u);
          if (j === a) {
            var X = new $(ie, Fe + "enter", b, i, u);
            X.target = w, X.relatedTarget = Ne, D = X;
          }
          vT(e, O, D, E, b);
        }
      }
    }
    function ve(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var J = typeof Object.is == "function" ? Object.is : ve;
    function he(e, t) {
      if (J(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!jn.call(t, s) || !J(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Qt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ve(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ia(e, t) {
      for (var a = Qt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === za) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Qt(Ve(a));
      }
    }
    function fy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return WE(e, u, s, f, p);
    }
    function WE(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e:
        for (; ; ) {
          for (var E = null; y === t && (a === 0 || y.nodeType === za) && (f = s + a), y === i && (u === 0 || y.nodeType === za) && (p = s + u), y.nodeType === za && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
            R = y, y = E;
          for (; ; ) {
            if (y === e)
              break e;
            if (R === t && ++v === a && (f = s), R === i && ++m === u && (p = s), (E = y.nextSibling) !== null)
              break;
            y = R, R = y.parentNode;
          }
          y = E;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function XE(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Ia(e, f), y = Ia(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function i0(e) {
      return e && e.nodeType === za;
    }
    function l0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : i0(e) ? !1 : i0(t) ? l0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function qE(e) {
      return e && e.ownerDocument && l0(e.ownerDocument.documentElement, e);
    }
    function KE(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function u0() {
      for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
        if (KE(t))
          e = t.contentWindow;
        else
          return t;
        t = us(e.document);
      }
      return t;
    }
    function dy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ZE() {
      var e = u0();
      return {
        focusedElem: e,
        selectionRange: dy(e) ? eT(e) : null
      };
    }
    function JE(e) {
      var t = u0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && qE(a)) {
        i !== null && dy(a) && tT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Bn && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function eT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = fy(e), t || {
        start: 0,
        end: 0
      };
    }
    function tT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : XE(e, t);
    }
    var nT = vn && "documentMode" in document && document.documentMode <= 11;
    function rT() {
      Er("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Rc = null, py = null, md = null, vy = !1;
    function aT(e) {
      if ("selectionStart" in e && dy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function iT(e) {
      return e.window === e ? e.document : e.nodeType === ra ? e : e.ownerDocument;
    }
    function o0(e, t, a) {
      var i = iT(a);
      if (!(vy || Rc == null || Rc !== us(i))) {
        var u = aT(Rc);
        if (!md || !he(md, u)) {
          md = u;
          var s = Kv(py, "onSelect");
          if (s.length > 0) {
            var f = new dc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Rc;
          }
        }
      }
    }
    function lT(e, t, a, i, u, s, f) {
      var p = a ? bc(a) : window;
      switch (t) {
        case "focusin":
          (Gv(p) || p.contentEditable === "true") && (Rc = p, py = a, md = null);
          break;
        case "focusout":
          Rc = null, py = null, md = null;
          break;
        case "mousedown":
          vy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vy = !1, o0(e, i, u);
          break;
        case "selectionchange":
          if (nT)
            break;
        case "keydown":
        case "keyup":
          o0(e, i, u);
      }
    }
    function Wv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xc = {
      animationend: Wv("Animation", "AnimationEnd"),
      animationiteration: Wv("Animation", "AnimationIteration"),
      animationstart: Wv("Animation", "AnimationStart"),
      transitionend: Wv("Transition", "TransitionEnd")
    }, hy = {}, s0 = {};
    vn && (s0 = document.createElement("div").style, "AnimationEvent" in window || (delete xc.animationend.animation, delete xc.animationiteration.animation, delete xc.animationstart.animation), "TransitionEvent" in window || delete xc.transitionend.transition);
    function Xv(e) {
      if (hy[e])
        return hy[e];
      if (!xc[e])
        return e;
      var t = xc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in s0)
          return hy[e] = t[a];
      return e;
    }
    var c0 = Xv("animationend"), f0 = Xv("animationiteration"), d0 = Xv("animationstart"), p0 = Xv("transitionend"), v0 = /* @__PURE__ */ new Map(), h0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Su(e, t) {
      v0.set(e, t), Er(t, [e]);
    }
    function uT() {
      for (var e = 0; e < h0.length; e++) {
        var t = h0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Su(a, "on" + i);
      }
      Su(c0, "onAnimationEnd"), Su(f0, "onAnimationIteration"), Su(d0, "onAnimationStart"), Su("dblclick", "onDoubleClick"), Su("focusin", "onFocus"), Su("focusout", "onBlur"), Su(p0, "onTransitionEnd");
    }
    function oT(e, t, a, i, u, s, f) {
      var p = v0.get(t);
      if (p !== void 0) {
        var v = dc, m = t;
        switch (t) {
          case "keypress":
            if (fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Bv;
            break;
          case "focusin":
            m = "focus", v = _o;
            break;
          case "focusout":
            m = "blur", v = _o;
            break;
          case "beforeblur":
          case "afterblur":
            v = _o;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = pc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Uv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = cd;
            break;
          case c0:
          case f0:
          case d0:
            v = ny;
            break;
          case p0:
            v = ki;
            break;
          case "scroll":
            v = ld;
            break;
          case "wheel":
            v = vl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Hv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Yv;
            break;
        }
        var y = (s & Gi) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = dT(a, p, i.type, y, R);
          if (E.length > 0) {
            var b = new v(p, m, null, i, u);
            e.push({
              event: b,
              listeners: E
            });
          }
        }
      }
    }
    uT(), V(), n(), rT(), gc();
    function sT(e, t, a, i, u, s, f) {
      oT(e, t, a, i, u, s);
      var p = (s & Ym) === 0;
      p && (re(e, t, a, i, u), k(e, t, a, i, u), lT(e, t, a, i, u), cy(e, t, a, i, u));
    }
    var yd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], my = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(yd));
    function m0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fa(i, t, void 0, e), e.currentTarget = null;
    }
    function cT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          m0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, b = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          m0(e, b, E), i = R;
        }
    }
    function y0(e, t) {
      for (var a = (t & Gi) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        cT(s, f, a);
      }
      zf();
    }
    function fT(e, t, a, i, u) {
      var s = Cs(a), f = [];
      sT(f, e, i, a, s, t), y0(f, t);
    }
    function gt(e, t) {
      my.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = BR(t), u = hT(e, a);
      i.has(u) || (g0(t, e, no, a), i.add(u));
    }
    function yy(e, t, a) {
      my.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Gi), g0(a, e, i, t);
    }
    var qv = "_reactListening" + Math.random().toString(36).slice(2);
    function gd(e) {
      if (!e[qv]) {
        e[qv] = !0, Xr.forEach(function(a) {
          a !== "selectionchange" && (my.has(a) || yy(a, !1, e), yy(a, !0, e));
        });
        var t = e.nodeType === ra ? e : e.ownerDocument;
        t !== null && (t[qv] || (t[qv] = !0, yy("selectionchange", !1, t)));
      }
    }
    function g0(e, t, a, i, u) {
      var s = Yt(e, t, a), f = void 0;
      uo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? sc(e, t, s, f) : $a(e, t, s) : f !== void 0 ? id(e, t, s, f) : hu(e, t, s);
    }
    function S0(e, t) {
      return e === t || e.nodeType === Ut && e.parentNode === t;
    }
    function gy(e, t, a, i, u) {
      var s = i;
      if (!(t & Aa) && !(t & no)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === le || v === me) {
                var m = p.stateNode.containerInfo;
                if (S0(m, f))
                  break;
                if (v === me)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === le || R === me) {
                      var E = y.stateNode.containerInfo;
                      if (S0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var b = Ho(m);
                  if (b === null)
                    return;
                  var M = b.tag;
                  if (M === ue || M === _e) {
                    p = s = b;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Mf(function() {
        return fT(e, t, a, s);
      });
    }
    function Sd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function dT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, b = R.tag;
        if (b === ue && E !== null && (y = E, p !== null)) {
          var M = Xi(m, p);
          M != null && v.push(Sd(m, M, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function Kv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, m = Xi(u, a);
          m != null && i.unshift(Sd(u, m, v));
          var y = Xi(u, t);
          y != null && i.push(Sd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function wc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function pT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = wc(s))
        u++;
      for (var f = 0, p = i; p; p = wc(p))
        f++;
      for (; u - f > 0; )
        a = wc(a), u--;
      for (; f - u > 0; )
        i = wc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = wc(a), i = wc(i);
      }
      return null;
    }
    function C0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === ue && y !== null) {
          var E = y;
          if (u) {
            var b = Xi(p, s);
            b != null && f.unshift(Sd(p, b, E));
          } else if (!u) {
            var M = Xi(p, s);
            M != null && f.push(Sd(p, M, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function vT(e, t, a, i, u) {
      var s = i && u ? pT(i, u) : null;
      i !== null && C0(e, t, i, s, !1), u !== null && a !== null && C0(e, a, u, s, !0);
    }
    function hT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Br = !1, Cd = "dangerouslySetInnerHTML", Zv = "suppressContentEditableWarning", Cu = "suppressHydrationWarning", E0 = "autoFocus", Uo = "children", Ao = "style", Jv = "__html", Sy, eh, Ed, T0, th, R0, x0;
    Sy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, eh = function(e, t) {
      Ss(e, t), wf(e, t), iv(e, t, {
        registrationNameDependencies: ca,
        possibleRegistrationNames: Hu
      });
    }, R0 = vn && !document.documentMode, Ed = function(e, t, a) {
      if (!Br) {
        var i = nh(a), u = nh(t);
        u !== i && (Br = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, T0 = function(e) {
      if (!Br) {
        Br = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, x0 = function(e, t) {
      var a = e.namespaceURI === Na ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var mT = /\r\n?/g, yT = /\u0000|\uFFFD/g;
    function nh(e) {
      Vi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(mT, `
`).replace(yT, "");
    }
    function rh(e, t, a, i) {
      var u = nh(t), s = nh(e);
      if (s !== u && (i && (Br || (Br = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Cr))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function w0(e) {
      return e.nodeType === ra ? e : e.ownerDocument;
    }
    function gT() {
    }
    function ah(e) {
      e.onclick = gT;
    }
    function ST(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ao)
            f && Object.freeze(f), Xp(t, f);
          else if (s === Cd) {
            var p = f ? f[Jv] : void 0;
            p != null && Fp(t, p);
          } else if (s === Uo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && hs(t, f);
            } else
              typeof f == "number" && hs(t, "" + f);
          else
            s === Zv || s === Cu || s === E0 || (ca.hasOwnProperty(s) ? f != null && (typeof f != "function" && th(s, f), s === "onScroll" && gt("scroll", t)) : f != null && Bi(t, s, f, u));
        }
    }
    function CT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ao ? Xp(e, f) : s === Cd ? Fp(e, f) : s === Uo ? hs(e, f) : Bi(e, s, f, i);
      }
    }
    function ET(e, t, a, i) {
      var u, s = w0(a), f, p = i;
      if (p === Na && (p = ps(e)), p === Na) {
        if (u = Ua(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Na && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !jn.call(Sy, e) && (Sy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function TT(e, t) {
      return w0(t).createTextNode(e);
    }
    function RT(e, t, a, i) {
      var u = Ua(t, a);
      eh(t, a);
      var s;
      switch (t) {
        case "dialog":
          gt("cancel", e), gt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          gt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < yd.length; f++)
            gt(yd[f], e);
          s = a;
          break;
        case "source":
          gt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          gt("error", e), gt("load", e), s = a;
          break;
        case "details":
          gt("toggle", e), s = a;
          break;
        case "input":
          qu(e, a), s = Xu(e, a), gt("invalid", e);
          break;
        case "option":
          fs(e, a), s = a;
          break;
        case "select":
          zp(e, a), s = vf(e, a), gt("invalid", e);
          break;
        case "textarea":
          Up(e, a), s = mf(e, a), gt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ys(t, s), ST(t, e, i, s, u), t) {
        case "input":
          $i(e), Ku(e, a, !1);
          break;
        case "textarea":
          $i(e), Hp(e);
          break;
        case "option":
          pf(e, a);
          break;
        case "select":
          Om(e, a);
          break;
        default:
          typeof s.onClick == "function" && ah(e);
          break;
      }
    }
    function xT(e, t, a, i, u) {
      eh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Xu(e, a), p = Xu(e, i), s = [];
          break;
        case "select":
          f = vf(e, a), p = vf(e, i), s = [];
          break;
        case "textarea":
          f = mf(e, a), p = mf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ah(e);
          break;
      }
      ys(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ao) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === Cd || v === Uo || v === Zv || v === Cu || v === E0 || (ca.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var E = p[v], b = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || E === b || E == null && b == null))
          if (v === Ao)
            if (E && Object.freeze(E), b) {
              for (m in b)
                b.hasOwnProperty(m) && (!E || !E.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in E)
                E.hasOwnProperty(m) && b[m] !== E[m] && (y || (y = {}), y[m] = E[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = E;
          else if (v === Cd) {
            var M = E ? E[Jv] : void 0, L = b ? b[Jv] : void 0;
            M != null && L !== M && (s = s || []).push(v, M);
          } else
            v === Uo ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === Zv || v === Cu || (ca.hasOwnProperty(v) ? (E != null && (typeof E != "function" && th(v, E), v === "onScroll" && gt("scroll", e)), !s && b !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (eo(y, p[Ao]), (s = s || []).push(Ao, y)), s;
    }
    function wT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && df(e, u);
      var s = Ua(a, i), f = Ua(a, u);
      switch (CT(e, t, s, f), a) {
        case "input":
          Ul(e, u);
          break;
        case "textarea":
          Ap(e, u);
          break;
        case "select":
          Nm(e, u);
          break;
      }
    }
    function DT(e) {
      {
        var t = e.toLowerCase();
        return gs.hasOwnProperty(t) && gs[t] || null;
      }
    }
    function kT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ua(t, a), eh(t, a), t) {
        case "dialog":
          gt("cancel", e), gt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < yd.length; m++)
            gt(yd[m], e);
          break;
        case "source":
          gt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gt("error", e), gt("load", e);
          break;
        case "details":
          gt("toggle", e);
          break;
        case "input":
          qu(e, a), gt("invalid", e);
          break;
        case "option":
          fs(e, a);
          break;
        case "select":
          zp(e, a), gt("invalid", e);
          break;
        case "textarea":
          Up(e, a), gt("invalid", e);
          break;
      }
      ys(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, R = 0; R < y.length; R++) {
          var E = y[R].name.toLowerCase();
          switch (E) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[R].name);
          }
        }
      }
      var b = null;
      for (var M in a)
        if (a.hasOwnProperty(M)) {
          var L = a[M];
          if (M === Uo)
            typeof L == "string" ? e.textContent !== L && (a[Cu] !== !0 && rh(e.textContent, L, s, f), b = [Uo, L]) : typeof L == "number" && e.textContent !== "" + L && (a[Cu] !== !0 && rh(e.textContent, L, s, f), b = [Uo, "" + L]);
          else if (ca.hasOwnProperty(M))
            L != null && (typeof L != "function" && th(M, L), M === "onScroll" && gt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var $ = void 0, fe = p && Fn ? null : da(M);
            if (a[Cu] !== !0) {
              if (!(M === Zv || M === Cu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === Cd) {
                  var ie = e.innerHTML, Fe = L ? L[Jv] : void 0;
                  if (Fe != null) {
                    var Ne = x0(e, Fe);
                    Ne !== ie && Ed(M, ie, Ne);
                  }
                } else if (M === Ao) {
                  if (v.delete(M), R0) {
                    var w = Bm(L);
                    $ = e.getAttribute("style"), w !== $ && Ed(M, $, w);
                  }
                } else if (p && !Fn)
                  v.delete(M.toLowerCase()), $ = ns(e, M, L), L !== $ && Ed(M, $, L);
                else if (!jt(M, fe, p) && !Ct(M, L, fe, p)) {
                  var O = !1;
                  if (fe !== null)
                    v.delete(fe.attributeName), $ = ju(e, M, L, fe);
                  else {
                    var D = i;
                    if (D === Na && (D = ps(t)), D === Na)
                      v.delete(M.toLowerCase());
                    else {
                      var j = DT(M);
                      j !== null && j !== M && (O = !0, v.delete(j)), v.delete(M);
                    }
                    $ = ns(e, M, L);
                  }
                  var X = Fn;
                  !X && L !== $ && !O && Ed(M, $, L);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Cu] !== !0 && T0(v), t) {
        case "input":
          $i(e), Ku(e, a, !0);
          break;
        case "textarea":
          $i(e), Hp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ah(e);
          break;
      }
      return b;
    }
    function bT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Cy(e, t) {
      {
        if (Br)
          return;
        Br = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ey(e, t) {
      {
        if (Br)
          return;
        Br = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ty(e, t, a) {
      {
        if (Br)
          return;
        Br = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ry(e, t) {
      {
        if (t === "" || Br)
          return;
        Br = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function _T(e, t, a) {
      switch (t) {
        case "input":
          Mp(e, a);
          return;
        case "textarea":
          yf(e, a);
          return;
        case "select":
          zm(e, a);
          return;
      }
    }
    var Td = function() {
    }, Rd = function() {
    };
    {
      var MT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], D0 = [
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
      ], LT = D0.concat(["button"]), OT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], k0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Rd = function(e, t) {
        var a = Le({}, e || k0), i = {
          tag: t
        };
        return D0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), LT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), MT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var NT = function(e, t) {
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
            return OT.indexOf(t) === -1;
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
      }, zT = function(e, t) {
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
      }, b0 = {};
      Td = function(e, t, a) {
        a = a || k0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = NT(e, u) ? null : i, f = s ? null : zT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!b0[m]) {
            b0[m] = !0;
            var y = e, R = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", R = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var E = "";
              v === "table" && e === "tr" && (E += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, R, E);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var ih = "suppressHydrationWarning", lh = "$", uh = "/$", xd = "$?", wd = "$!", UT = "style", xy = null, wy = null;
    function AT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ra:
        case Qi: {
          t = i === ra ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Sf(null, "");
          break;
        }
        default: {
          var s = i === Ut ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Sf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Rd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function HT(e, t, a) {
      {
        var i = e, u = Sf(i.namespace, t), s = Rd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Pk(e) {
      return e;
    }
    function FT(e) {
      xy = pu(), wy = ZE();
      var t = null;
      return Kn(!1), t;
    }
    function jT(e) {
      JE(wy), Kn(xy), xy = null, wy = null;
    }
    function VT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Td(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Rd(f.ancestorInfo, e);
          Td(null, p, v);
        }
        s = f.namespace;
      }
      var m = ET(e, t, a, s);
      return bd(u, m), Ny(m, t), m;
    }
    function BT(e, t) {
      e.appendChild(t);
    }
    function PT(e, t, a, i, u) {
      switch (RT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function YT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Rd(f.ancestorInfo, t);
          Td(null, p, v);
        }
      }
      return xT(e, t, a, i);
    }
    function Dy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function $T(e, t, a, i) {
      {
        var u = a;
        Td(null, e, u.ancestorInfo);
      }
      var s = TT(e, t);
      return bd(i, s), s;
    }
    function QT() {
      var e = window.event;
      return e === void 0 ? ya : oc(e.type);
    }
    var ky = typeof setTimeout == "function" ? setTimeout : void 0, IT = typeof clearTimeout == "function" ? clearTimeout : void 0, by = -1, _0 = typeof Promise == "function" ? Promise : void 0, GT = typeof queueMicrotask == "function" ? queueMicrotask : typeof _0 < "u" ? function(e) {
      return _0.resolve(null).then(e).catch(WT);
    } : ky;
    function WT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function XT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function qT(e, t, a, i, u, s) {
      wT(e, t, a, i, u), Ny(e, u);
    }
    function M0(e) {
      hs(e, "");
    }
    function KT(e, t, a) {
      e.nodeValue = a;
    }
    function ZT(e, t) {
      e.appendChild(t);
    }
    function JT(e, t) {
      var a;
      e.nodeType === Ut ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && ah(a);
    }
    function eR(e, t, a) {
      e.insertBefore(t, a);
    }
    function tR(e, t, a) {
      e.nodeType === Ut ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function nR(e, t) {
      e.removeChild(t);
    }
    function rR(e, t) {
      e.nodeType === Ut ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function _y(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ut) {
          var s = u.data;
          if (s === uh)
            if (i === 0) {
              e.removeChild(u), wt(t);
              return;
            } else
              i--;
          else
            (s === lh || s === xd || s === wd) && i++;
        }
        a = u;
      } while (a);
      wt(t);
    }
    function aR(e, t) {
      e.nodeType === Ut ? _y(e.parentNode, t) : e.nodeType === Bn && _y(e, t), wt(e);
    }
    function iR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function lR(e) {
      e.nodeValue = "";
    }
    function uR(e, t) {
      e = e;
      var a = t[UT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ms("display", i);
    }
    function oR(e, t) {
      e.nodeValue = t;
    }
    function sR(e) {
      e.nodeType === Bn ? e.textContent = "" : e.nodeType === ra && e.documentElement && e.removeChild(e.documentElement);
    }
    function cR(e, t, a) {
      return e.nodeType !== Bn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function fR(e, t) {
      return t === "" || e.nodeType !== za ? null : e;
    }
    function dR(e) {
      return e.nodeType !== Ut ? null : e;
    }
    function L0(e) {
      return e.data === xd;
    }
    function My(e) {
      return e.data === wd;
    }
    function pR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function vR(e, t) {
      e._reactRetry = t;
    }
    function oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Bn || t === za)
          break;
        if (t === Ut) {
          var a = e.data;
          if (a === lh || a === wd || a === xd)
            break;
          if (a === uh)
            return null;
        }
      }
      return e;
    }
    function Dd(e) {
      return oh(e.nextSibling);
    }
    function hR(e) {
      return oh(e.firstChild);
    }
    function mR(e) {
      return oh(e.firstChild);
    }
    function yR(e) {
      return oh(e.nextSibling);
    }
    function gR(e, t, a, i, u, s, f) {
      bd(s, e), Ny(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & ae) !== ne;
      return kT(e, t, a, p, i, m, f);
    }
    function SR(e, t, a, i) {
      return bd(a, e), a.mode & ae, bT(e, t);
    }
    function CR(e, t) {
      bd(t, e);
    }
    function ER(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ut) {
          var i = t.data;
          if (i === uh) {
            if (a === 0)
              return Dd(t);
            a--;
          } else
            (i === lh || i === wd || i === xd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function O0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ut) {
          var i = t.data;
          if (i === lh || i === wd || i === xd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === uh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function TR(e) {
      wt(e);
    }
    function RR(e) {
      wt(e);
    }
    function xR(e) {
      return e !== "head" && e !== "body";
    }
    function wR(e, t, a, i) {
      var u = !0;
      rh(t.nodeValue, a, i, u);
    }
    function DR(e, t, a, i, u, s) {
      if (t[ih] !== !0) {
        var f = !0;
        rh(i.nodeValue, u, s, f);
      }
    }
    function kR(e, t) {
      t.nodeType === Bn ? Cy(e, t) : t.nodeType === Ut || Ey(e, t);
    }
    function bR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Bn ? Cy(a, t) : t.nodeType === Ut || Ey(a, t));
      }
    }
    function _R(e, t, a, i, u) {
      (u || t[ih] !== !0) && (i.nodeType === Bn ? Cy(a, i) : i.nodeType === Ut || Ey(a, i));
    }
    function MR(e, t, a) {
      Ty(e, t);
    }
    function LR(e, t) {
      Ry(e, t);
    }
    function OR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ty(i, t);
      }
    }
    function NR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ry(a, t);
      }
    }
    function zR(e, t, a, i, u, s) {
      (s || t[ih] !== !0) && Ty(a, i);
    }
    function UR(e, t, a, i, u) {
      (u || t[ih] !== !0) && Ry(a, i);
    }
    function AR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function HR(e) {
      gd(e);
    }
    var Dc = Math.random().toString(36).slice(2), kc = "__reactFiber$" + Dc, Ly = "__reactProps$" + Dc, kd = "__reactContainer$" + Dc, Oy = "__reactEvents$" + Dc, FR = "__reactListeners$" + Dc, jR = "__reactHandles$" + Dc;
    function VR(e) {
      delete e[kc], delete e[Ly], delete e[Oy], delete e[FR], delete e[jR];
    }
    function bd(e, t) {
      t[kc] = e;
    }
    function sh(e, t) {
      t[kd] = e;
    }
    function N0(e) {
      e[kd] = null;
    }
    function _d(e) {
      return !!e[kd];
    }
    function Ho(e) {
      var t = e[kc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[kd] || a[kc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = O0(e); u !== null; ) {
              var s = u[kc];
              if (s)
                return s;
              u = O0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Eu(e) {
      var t = e[kc] || e[kd];
      return t && (t.tag === ue || t.tag === _e || t.tag === Ue || t.tag === le) ? t : null;
    }
    function bc(e) {
      if (e.tag === ue || e.tag === _e)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function ch(e) {
      return e[Ly] || null;
    }
    function Ny(e, t) {
      e[Ly] = t;
    }
    function BR(e) {
      var t = e[Oy];
      return t === void 0 && (t = e[Oy] = /* @__PURE__ */ new Set()), t;
    }
    var z0 = {}, U0 = N.ReactDebugCurrentFrame;
    function fh(e) {
      if (e) {
        var t = e._owner, a = Yu(e.type, e._source, t ? t.type : null);
        U0.setExtraStackFrame(a);
      } else
        U0.setExtraStackFrame(null);
    }
    function Ga(e, t, a, i, u) {
      {
        var s = Function.call.bind(jn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (fh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), fh(null)), p instanceof Error && !(p.message in z0) && (z0[p.message] = !0, fh(u), S("Failed %s type: %s", a, p.message), fh(null));
          }
      }
    }
    var zy = [], dh;
    dh = [];
    var hl = -1;
    function Tu(e) {
      return {
        current: e
      };
    }
    function Zn(e, t) {
      if (hl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== dh[hl] && S("Unexpected Fiber popped."), e.current = zy[hl], zy[hl] = null, dh[hl] = null, hl--;
    }
    function Jn(e, t, a) {
      hl++, zy[hl] = e.current, dh[hl] = a, e.current = t;
    }
    var Uy;
    Uy = {};
    var ua = {};
    Object.freeze(ua);
    var ml = Tu(ua), _i = Tu(!1), Ay = ua;
    function _c(e, t, a) {
      return a && Mi(t) ? Ay : ml.current;
    }
    function A0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Mc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ua;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Re(e) || "Unknown";
          Ga(i, s, "context", p);
        }
        return u && A0(e, t, s), s;
      }
    }
    function ph() {
      return _i.current;
    }
    function Mi(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function vh(e) {
      Zn(_i, e), Zn(ml, e);
    }
    function Hy(e) {
      Zn(_i, e), Zn(ml, e);
    }
    function H0(e, t, a) {
      {
        if (ml.current !== ua)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Jn(ml, t, e), Jn(_i, a, e);
      }
    }
    function F0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Re(e) || "Unknown";
            Uy[s] || (Uy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Re(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Re(e) || "Unknown";
          Ga(u, f, "child context", v);
        }
        return Le({}, a, f);
      }
    }
    function hh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ua;
        return Ay = ml.current, Jn(ml, a, e), Jn(_i, _i.current, e), !0;
      }
    }
    function j0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = F0(e, t, Ay);
          i.__reactInternalMemoizedMergedChildContext = u, Zn(_i, e), Zn(ml, e), Jn(ml, u, e), Jn(_i, a, e);
        } else
          Zn(_i, e), Jn(_i, a, e);
      }
    }
    function PR(e) {
      {
        if (!jf(e) || e.tag !== de)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case le:
              return t.stateNode.context;
            case de: {
              var a = t.type;
              if (Mi(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ru = 0, mh = 1, yl = null, Fy = !1, jy = !1;
    function V0(e) {
      yl === null ? yl = [e] : yl.push(e);
    }
    function YR(e) {
      Fy = !0, V0(e);
    }
    function B0() {
      Fy && xu();
    }
    function xu() {
      if (!jy && yl !== null) {
        jy = !0;
        var e = 0, t = Ar();
        try {
          var a = !0, i = yl;
          for (xt(_t); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          yl = null, Fy = !1;
        } catch (s) {
          throw yl !== null && (yl = yl.slice(e + 1)), ks(_s, xu), s;
        } finally {
          xt(t), jy = !1;
        }
      }
      return null;
    }
    var Lc = [], Oc = 0, yh = null, gh = 0, Ea = [], Ta = 0, Fo = null, gl = 1, Sl = "";
    function $R(e) {
      return Vo(), (e.flags & Af) !== ce;
    }
    function QR(e) {
      return Vo(), gh;
    }
    function IR() {
      var e = Sl, t = gl, a = t & ~GR(t);
      return a.toString(32) + e;
    }
    function jo(e, t) {
      Vo(), Lc[Oc++] = gh, Lc[Oc++] = yh, yh = e, gh = t;
    }
    function P0(e, t, a) {
      Vo(), Ea[Ta++] = gl, Ea[Ta++] = Sl, Ea[Ta++] = Fo, Fo = e;
      var i = gl, u = Sl, s = Sh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Sh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, b = s - m, M = Sh(t) + b, L = p << b, $ = L | E, fe = R + u;
        gl = 1 << M | $, Sl = fe;
      } else {
        var ie = p << s, Fe = ie | f, Ne = u;
        gl = 1 << v | Fe, Sl = Ne;
      }
    }
    function Vy(e) {
      Vo();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        jo(e, a), P0(e, a, i);
      }
    }
    function Sh(e) {
      return 32 - ql(e);
    }
    function GR(e) {
      return 1 << Sh(e) - 1;
    }
    function By(e) {
      for (; e === yh; )
        yh = Lc[--Oc], Lc[Oc] = null, gh = Lc[--Oc], Lc[Oc] = null;
      for (; e === Fo; )
        Fo = Ea[--Ta], Ea[Ta] = null, Sl = Ea[--Ta], Ea[Ta] = null, gl = Ea[--Ta], Ea[Ta] = null;
    }
    function WR() {
      return Vo(), Fo !== null ? {
        id: gl,
        overflow: Sl
      } : null;
    }
    function XR(e, t) {
      Vo(), Ea[Ta++] = gl, Ea[Ta++] = Sl, Ea[Ta++] = Fo, gl = t.id, Sl = t.overflow, Fo = e;
    }
    function Vo() {
      kn() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Dn = null, Ra = null, Wa = !1, Bo = !1, wu = null;
    function qR() {
      Wa && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Y0() {
      Bo = !0;
    }
    function KR() {
      return Bo;
    }
    function ZR(e) {
      var t = e.stateNode.containerInfo;
      return Ra = mR(t), Dn = e, Wa = !0, wu = null, Bo = !1, !0;
    }
    function JR(e, t, a) {
      return Ra = yR(t), Dn = e, Wa = !0, wu = null, Bo = !1, a !== null && XR(e, a), !0;
    }
    function $0(e, t) {
      switch (e.tag) {
        case le: {
          kR(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & ae) !== ne;
          _R(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ue: {
          var i = e.memoizedState;
          i.dehydrated !== null && bR(i.dehydrated, t);
          break;
        }
      }
    }
    function Q0(e, t) {
      $0(e, t);
      var a = rk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ye) : i.push(a);
    }
    function Py(e, t) {
      {
        if (Bo)
          return;
        switch (e.tag) {
          case le: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, MR(a, i);
                break;
              case _e:
                var u = t.pendingProps;
                LR(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, m = t.pendingProps, y = (e.mode & ae) !== ne;
                zR(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  y
                );
                break;
              }
              case _e: {
                var R = t.pendingProps, E = (e.mode & ae) !== ne;
                UR(
                  s,
                  f,
                  p,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
            }
            break;
          }
          case Ue: {
            var b = e.memoizedState, M = b.dehydrated;
            if (M !== null)
              switch (t.tag) {
                case ue:
                  var L = t.type;
                  t.pendingProps, OR(M, L);
                  break;
                case _e:
                  var $ = t.pendingProps;
                  NR(M, $);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function I0(e, t) {
      t.flags = t.flags & ~Mr | ot, Py(e, t);
    }
    function G0(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = cR(t, a);
          return i !== null ? (e.stateNode = i, Dn = e, Ra = hR(i), !0) : !1;
        }
        case _e: {
          var u = e.pendingProps, s = fR(t, u);
          return s !== null ? (e.stateNode = s, Dn = e, Ra = null, !0) : !1;
        }
        case Ue: {
          var f = dR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: WR(),
              retryLane: Sn
            };
            e.memoizedState = p;
            var v = ak(f);
            return v.return = e, e.child = v, Dn = e, Ra = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Yy(e) {
      return (e.mode & ae) !== ne && (e.flags & Se) === ce;
    }
    function $y(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Qy(e) {
      if (Wa) {
        var t = Ra;
        if (!t) {
          Yy(e) && (Py(Dn, e), $y()), I0(Dn, e), Wa = !1, Dn = e;
          return;
        }
        var a = t;
        if (!G0(e, t)) {
          Yy(e) && (Py(Dn, e), $y()), t = Dd(a);
          var i = Dn;
          if (!t || !G0(e, t)) {
            I0(Dn, e), Wa = !1, Dn = e;
            return;
          }
          Q0(i, a);
        }
      }
    }
    function ex(e, t, a) {
      var i = e.stateNode, u = !Bo, s = gR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function tx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = SR(t, a, e);
      if (i) {
        var u = Dn;
        if (u !== null)
          switch (u.tag) {
            case le: {
              var s = u.stateNode.containerInfo, f = (u.mode & ae) !== ne;
              wR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & ae) !== ne;
              DR(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function nx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      CR(a, e);
    }
    function rx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ER(a);
    }
    function W0(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== le && t.tag !== Ue; )
        t = t.return;
      Dn = t;
    }
    function Ch(e) {
      if (e !== Dn)
        return !1;
      if (!Wa)
        return W0(e), Wa = !0, !1;
      if (e.tag !== le && (e.tag !== ue || xR(e.type) && !Dy(e.type, e.memoizedProps))) {
        var t = Ra;
        if (t)
          if (Yy(e))
            X0(e), $y();
          else
            for (; t; )
              Q0(e, t), t = Dd(t);
      }
      return W0(e), e.tag === Ue ? Ra = rx(e) : Ra = Dn ? Dd(e.stateNode) : null, !0;
    }
    function ax() {
      return Wa && Ra !== null;
    }
    function X0(e) {
      for (var t = Ra; t; )
        $0(e, t), t = Dd(t);
    }
    function Nc() {
      Dn = null, Ra = null, Wa = !1, Bo = !1;
    }
    function q0() {
      wu !== null && (YC(wu), wu = null);
    }
    function kn() {
      return Wa;
    }
    function Iy(e) {
      wu === null ? wu = [e] : wu.push(e);
    }
    var ix = N.ReactCurrentBatchConfig, lx = null;
    function ux() {
      return ix.transition;
    }
    var Xa = {
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
      var ox = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ke && (t = a), a = a.return;
        return t;
      }, Po = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Md = [], Ld = [], Od = [], Nd = [], zd = [], Ud = [], Yo = /* @__PURE__ */ new Set();
      Xa.recordUnsafeLifecycleWarnings = function(e, t) {
        Yo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Md.push(e), e.mode & ke && typeof t.UNSAFE_componentWillMount == "function" && Ld.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Od.push(e), e.mode & ke && typeof t.UNSAFE_componentWillReceiveProps == "function" && Nd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zd.push(e), e.mode & ke && typeof t.UNSAFE_componentWillUpdate == "function" && Ud.push(e));
      }, Xa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Md.length > 0 && (Md.forEach(function(E) {
          e.add(Re(E) || "Component"), Yo.add(E.type);
        }), Md = []);
        var t = /* @__PURE__ */ new Set();
        Ld.length > 0 && (Ld.forEach(function(E) {
          t.add(Re(E) || "Component"), Yo.add(E.type);
        }), Ld = []);
        var a = /* @__PURE__ */ new Set();
        Od.length > 0 && (Od.forEach(function(E) {
          a.add(Re(E) || "Component"), Yo.add(E.type);
        }), Od = []);
        var i = /* @__PURE__ */ new Set();
        Nd.length > 0 && (Nd.forEach(function(E) {
          i.add(Re(E) || "Component"), Yo.add(E.type);
        }), Nd = []);
        var u = /* @__PURE__ */ new Set();
        zd.length > 0 && (zd.forEach(function(E) {
          u.add(Re(E) || "Component"), Yo.add(E.type);
        }), zd = []);
        var s = /* @__PURE__ */ new Set();
        if (Ud.length > 0 && (Ud.forEach(function(E) {
          s.add(Re(E) || "Component"), Yo.add(E.type);
        }), Ud = []), t.size > 0) {
          var f = Po(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Po(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Po(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = Po(e);
          et(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = Po(a);
          et(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = Po(u);
          et(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Eh = /* @__PURE__ */ new Map(), K0 = /* @__PURE__ */ new Set();
      Xa.recordLegacyContextWarning = function(e, t) {
        var a = ox(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!K0.has(e.type)) {
          var i = Eh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Eh.set(a, i)), i.push(e));
        }
      }, Xa.flushLegacyContextWarning = function() {
        Eh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Re(s) || "Component"), K0.add(s.type);
            });
            var u = Po(i);
            try {
              Ke(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Vt();
            }
          }
        });
      }, Xa.discardPendingWarnings = function() {
        Md = [], Ld = [], Od = [], Nd = [], zd = [], Ud = [], Eh = /* @__PURE__ */ new Map();
      };
    }
    var Gy, Wy, Xy, qy, Ky, Z0 = function(e, t) {
    };
    Gy = !1, Wy = !1, Xy = {}, qy = {}, Ky = {}, Z0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Re(t) || "Component";
        qy[a] || (qy[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function sx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ad(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ke || ar) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== de) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !sx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Re(e) || "Component";
          Xy[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), Xy[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== de)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ji(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            R === null ? delete E[m] : E[m] = R;
          };
          return y._stringRef = m, y;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Th(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Rh(e) {
      {
        var t = Re(e) || "Component";
        if (Ky[t])
          return;
        Ky[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function J0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function e1(e) {
      function t(w, O) {
        if (e) {
          var D = w.deletions;
          D === null ? (w.deletions = [O], w.flags |= Ye) : D.push(O);
        }
      }
      function a(w, O) {
        if (!e)
          return null;
        for (var D = O; D !== null; )
          t(w, D), D = D.sibling;
        return null;
      }
      function i(w, O) {
        for (var D = /* @__PURE__ */ new Map(), j = O; j !== null; )
          j.key !== null ? D.set(j.key, j) : D.set(j.index, j), j = j.sibling;
        return D;
      }
      function u(w, O) {
        var D = Zo(w, O);
        return D.index = 0, D.sibling = null, D;
      }
      function s(w, O, D) {
        if (w.index = D, !e)
          return w.flags |= Af, O;
        var j = w.alternate;
        if (j !== null) {
          var X = j.index;
          return X < O ? (w.flags |= ot, O) : X;
        } else
          return w.flags |= ot, O;
      }
      function f(w) {
        return e && w.alternate === null && (w.flags |= ot), w;
      }
      function p(w, O, D, j) {
        if (O === null || O.tag !== _e) {
          var X = IS(D, w.mode, j);
          return X.return = w, X;
        } else {
          var I = u(O, D);
          return I.return = w, I;
        }
      }
      function v(w, O, D, j) {
        var X = D.type;
        if (X === Ma)
          return y(w, O, D.props.children, j, D.key);
        if (O !== null && (O.elementType === X || // Keep this check inline so it only runs on the false path:
        iE(O, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof X == "object" && X !== null && X.$$typeof === xn && J0(X) === O.type)) {
          var I = u(O, D.props);
          return I.ref = Ad(w, O, D), I.return = w, I._debugSource = D._source, I._debugOwner = D._owner, I;
        }
        var ge = QS(D, w.mode, j);
        return ge.ref = Ad(w, O, D), ge.return = w, ge;
      }
      function m(w, O, D, j) {
        if (O === null || O.tag !== me || O.stateNode.containerInfo !== D.containerInfo || O.stateNode.implementation !== D.implementation) {
          var X = GS(D, w.mode, j);
          return X.return = w, X;
        } else {
          var I = u(O, D.children || []);
          return I.return = w, I;
        }
      }
      function y(w, O, D, j, X) {
        if (O === null || O.tag !== tt) {
          var I = Au(D, w.mode, j, X);
          return I.return = w, I;
        } else {
          var ge = u(O, D);
          return ge.return = w, ge;
        }
      }
      function R(w, O, D) {
        if (typeof O == "string" && O !== "" || typeof O == "number") {
          var j = IS("" + O, w.mode, D);
          return j.return = w, j;
        }
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case bl: {
              var X = QS(O, w.mode, D);
              return X.ref = Ad(w, null, O), X.return = w, X;
            }
            case Jr: {
              var I = GS(O, w.mode, D);
              return I.return = w, I;
            }
            case xn: {
              var ge = O._payload, Te = O._init;
              return R(w, Te(ge), D);
            }
          }
          if (Gt(O) || La(O)) {
            var Je = Au(O, w.mode, D, null);
            return Je.return = w, Je;
          }
          Th(w, O);
        }
        return typeof O == "function" && Rh(w), null;
      }
      function E(w, O, D, j) {
        var X = O !== null ? O.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return X !== null ? null : p(w, O, "" + D, j);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case bl:
              return D.key === X ? v(w, O, D, j) : null;
            case Jr:
              return D.key === X ? m(w, O, D, j) : null;
            case xn: {
              var I = D._payload, ge = D._init;
              return E(w, O, ge(I), j);
            }
          }
          if (Gt(D) || La(D))
            return X !== null ? null : y(w, O, D, j, null);
          Th(w, D);
        }
        return typeof D == "function" && Rh(w), null;
      }
      function b(w, O, D, j, X) {
        if (typeof j == "string" && j !== "" || typeof j == "number") {
          var I = w.get(D) || null;
          return p(O, I, "" + j, X);
        }
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case bl: {
              var ge = w.get(j.key === null ? D : j.key) || null;
              return v(O, ge, j, X);
            }
            case Jr: {
              var Te = w.get(j.key === null ? D : j.key) || null;
              return m(O, Te, j, X);
            }
            case xn:
              var Je = j._payload, Be = j._init;
              return b(w, O, D, Be(Je), X);
          }
          if (Gt(j) || La(j)) {
            var It = w.get(D) || null;
            return y(O, It, j, X, null);
          }
          Th(O, j);
        }
        return typeof j == "function" && Rh(O), null;
      }
      function M(w, O, D) {
        {
          if (typeof w != "object" || w === null)
            return O;
          switch (w.$$typeof) {
            case bl:
            case Jr:
              Z0(w, D);
              var j = w.key;
              if (typeof j != "string")
                break;
              if (O === null) {
                O = /* @__PURE__ */ new Set(), O.add(j);
                break;
              }
              if (!O.has(j)) {
                O.add(j);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", j);
              break;
            case xn:
              var X = w._payload, I = w._init;
              M(I(X), O, D);
              break;
          }
        }
        return O;
      }
      function L(w, O, D, j) {
        for (var X = null, I = 0; I < D.length; I++) {
          var ge = D[I];
          X = M(ge, X, w);
        }
        for (var Te = null, Je = null, Be = O, It = 0, Pe = 0, Ft = null; Be !== null && Pe < D.length; Pe++) {
          Be.index > Pe ? (Ft = Be, Be = null) : Ft = Be.sibling;
          var tr = E(w, Be, D[Pe], j);
          if (tr === null) {
            Be === null && (Be = Ft);
            break;
          }
          e && Be && tr.alternate === null && t(w, Be), It = s(tr, It, Pe), Je === null ? Te = tr : Je.sibling = tr, Je = tr, Be = Ft;
        }
        if (Pe === D.length) {
          if (a(w, Be), kn()) {
            var zn = Pe;
            jo(w, zn);
          }
          return Te;
        }
        if (Be === null) {
          for (; Pe < D.length; Pe++) {
            var sa = R(w, D[Pe], j);
            sa !== null && (It = s(sa, It, Pe), Je === null ? Te = sa : Je.sibling = sa, Je = sa);
          }
          if (kn()) {
            var mr = Pe;
            jo(w, mr);
          }
          return Te;
        }
        for (var yr = i(w, Be); Pe < D.length; Pe++) {
          var nr = b(yr, w, Pe, D[Pe], j);
          nr !== null && (e && nr.alternate !== null && yr.delete(nr.key === null ? Pe : nr.key), It = s(nr, It, Pe), Je === null ? Te = nr : Je.sibling = nr, Je = nr);
        }
        if (e && yr.forEach(function(Zc) {
          return t(w, Zc);
        }), kn()) {
          var Dl = Pe;
          jo(w, Dl);
        }
        return Te;
      }
      function $(w, O, D, j) {
        var X = La(D);
        if (typeof X != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (Wy || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Wy = !0), D.entries === X && (Gy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gy = !0);
          var I = X.call(D);
          if (I)
            for (var ge = null, Te = I.next(); !Te.done; Te = I.next()) {
              var Je = Te.value;
              ge = M(Je, ge, w);
            }
        }
        var Be = X.call(D);
        if (Be == null)
          throw new Error("An iterable object provided no iterator.");
        for (var It = null, Pe = null, Ft = O, tr = 0, zn = 0, sa = null, mr = Be.next(); Ft !== null && !mr.done; zn++, mr = Be.next()) {
          Ft.index > zn ? (sa = Ft, Ft = null) : sa = Ft.sibling;
          var yr = E(w, Ft, mr.value, j);
          if (yr === null) {
            Ft === null && (Ft = sa);
            break;
          }
          e && Ft && yr.alternate === null && t(w, Ft), tr = s(yr, tr, zn), Pe === null ? It = yr : Pe.sibling = yr, Pe = yr, Ft = sa;
        }
        if (mr.done) {
          if (a(w, Ft), kn()) {
            var nr = zn;
            jo(w, nr);
          }
          return It;
        }
        if (Ft === null) {
          for (; !mr.done; zn++, mr = Be.next()) {
            var Dl = R(w, mr.value, j);
            Dl !== null && (tr = s(Dl, tr, zn), Pe === null ? It = Dl : Pe.sibling = Dl, Pe = Dl);
          }
          if (kn()) {
            var Zc = zn;
            jo(w, Zc);
          }
          return It;
        }
        for (var vp = i(w, Ft); !mr.done; zn++, mr = Be.next()) {
          var Fi = b(vp, w, zn, mr.value, j);
          Fi !== null && (e && Fi.alternate !== null && vp.delete(Fi.key === null ? zn : Fi.key), tr = s(Fi, tr, zn), Pe === null ? It = Fi : Pe.sibling = Fi, Pe = Fi);
        }
        if (e && vp.forEach(function(Uk) {
          return t(w, Uk);
        }), kn()) {
          var zk = zn;
          jo(w, zk);
        }
        return It;
      }
      function fe(w, O, D, j) {
        if (O !== null && O.tag === _e) {
          a(w, O.sibling);
          var X = u(O, D);
          return X.return = w, X;
        }
        a(w, O);
        var I = IS(D, w.mode, j);
        return I.return = w, I;
      }
      function ie(w, O, D, j) {
        for (var X = D.key, I = O; I !== null; ) {
          if (I.key === X) {
            var ge = D.type;
            if (ge === Ma) {
              if (I.tag === tt) {
                a(w, I.sibling);
                var Te = u(I, D.props.children);
                return Te.return = w, Te._debugSource = D._source, Te._debugOwner = D._owner, Te;
              }
            } else if (I.elementType === ge || // Keep this check inline so it only runs on the false path:
            iE(I, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ge == "object" && ge !== null && ge.$$typeof === xn && J0(ge) === I.type) {
              a(w, I.sibling);
              var Je = u(I, D.props);
              return Je.ref = Ad(w, I, D), Je.return = w, Je._debugSource = D._source, Je._debugOwner = D._owner, Je;
            }
            a(w, I);
            break;
          } else
            t(w, I);
          I = I.sibling;
        }
        if (D.type === Ma) {
          var Be = Au(D.props.children, w.mode, j, D.key);
          return Be.return = w, Be;
        } else {
          var It = QS(D, w.mode, j);
          return It.ref = Ad(w, O, D), It.return = w, It;
        }
      }
      function Fe(w, O, D, j) {
        for (var X = D.key, I = O; I !== null; ) {
          if (I.key === X)
            if (I.tag === me && I.stateNode.containerInfo === D.containerInfo && I.stateNode.implementation === D.implementation) {
              a(w, I.sibling);
              var ge = u(I, D.children || []);
              return ge.return = w, ge;
            } else {
              a(w, I);
              break;
            }
          else
            t(w, I);
          I = I.sibling;
        }
        var Te = GS(D, w.mode, j);
        return Te.return = w, Te;
      }
      function Ne(w, O, D, j) {
        var X = typeof D == "object" && D !== null && D.type === Ma && D.key === null;
        if (X && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case bl:
              return f(ie(w, O, D, j));
            case Jr:
              return f(Fe(w, O, D, j));
            case xn:
              var I = D._payload, ge = D._init;
              return Ne(w, O, ge(I), j);
          }
          if (Gt(D))
            return L(w, O, D, j);
          if (La(D))
            return $(w, O, D, j);
          Th(w, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(fe(w, O, "" + D, j)) : (typeof D == "function" && Rh(w), a(w, O));
      }
      return Ne;
    }
    var zc = e1(!0), t1 = e1(!1);
    function cx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Zo(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Zo(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function fx(e, t) {
      for (var a = e.child; a !== null; )
        ZD(a, t), a = a.sibling;
    }
    var Zy = Tu(null), Jy;
    Jy = {};
    var xh = null, Uc = null, eg = null, wh = !1;
    function Dh() {
      xh = null, Uc = null, eg = null, wh = !1;
    }
    function n1() {
      wh = !0;
    }
    function r1() {
      wh = !1;
    }
    function a1(e, t, a) {
      Jn(Zy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Jy && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Jy;
    }
    function tg(e, t) {
      var a = Zy.current;
      Zn(Zy, t), e._currentValue = a;
    }
    function ng(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ul(i.childLanes, t) ? u !== null && !ul(u.childLanes, t) && (u.childLanes = xe(u.childLanes, t)) : (i.childLanes = xe(i.childLanes, t), u !== null && (u.childLanes = xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function dx(e, t, a) {
      px(e, t, a);
    }
    function px(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === de) {
                var p = ru(a), v = Cl(it, p);
                v.tag = bh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = xe(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = xe(E.lanes, a)), ng(i.return, a, e), s.lanes = xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === pn)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ot) {
          var b = i.return;
          if (b === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          b.lanes = xe(b.lanes, a);
          var M = b.alternate;
          M !== null && (M.lanes = xe(M.lanes, a)), ng(b, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var L = u.sibling;
            if (L !== null) {
              L.return = u.return, u = L;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Ac(e, t) {
      xh = e, Uc = null, eg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (qn(a.lanes, t) && Kd(), a.firstContext = null);
      }
    }
    function Jt(e) {
      wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (eg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Uc === null) {
          if (xh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Uc = a, xh.dependencies = {
            lanes: U,
            firstContext: a
          };
        } else
          Uc = Uc.next = a;
      }
      return t;
    }
    var $o = null;
    function rg(e) {
      $o === null ? $o = [e] : $o.push(e);
    }
    function vx() {
      if ($o !== null) {
        for (var e = 0; e < $o.length; e++) {
          var t = $o[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        $o = null;
      }
    }
    function i1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, kh(e, i);
    }
    function hx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function mx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, kh(e, i);
    }
    function Pr(e, t) {
      return kh(e, t);
    }
    var yx = kh;
    function kh(e, t) {
      e.lanes = xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = xe(a.lanes, t)), a === null && (e.flags & (ot | Mr)) !== ce && tE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = xe(a.childLanes, t) : (u.flags & (ot | Mr)) !== ce && tE(e), i = u, u = u.return;
      if (i.tag === le) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var l1 = 0, u1 = 1, bh = 2, ag = 3, _h = !1, ig, Mh;
    ig = !1, Mh = null;
    function lg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: U
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function o1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Cl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: l1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Du(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Mh === u && !ig && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ig = !0), hD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, yx(e, a);
      } else
        return mx(e, u, t, a);
    }
    function Lh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Kf(a)) {
          var s = u.lanes;
          s = Js(s, e.pendingLanes);
          var f = xe(s, a);
          u.lanes = f, Zf(e, f);
        }
      }
    }
    function ug(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function gx(e, t, a, i, u, s) {
      switch (a.tag) {
        case u1: {
          var f = a.payload;
          if (typeof f == "function") {
            n1();
            var p = f.call(s, i, u);
            {
              if (e.mode & ke) {
                At(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  At(!1);
                }
              }
              r1();
            }
            return p;
          }
          return f;
        }
        case ag:
          e.flags = e.flags & ~Xt | Se;
        case l1: {
          var v = a.payload, m;
          if (typeof v == "function") {
            n1(), m = v.call(s, i, u);
            {
              if (e.mode & ke) {
                At(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  At(!1);
                }
              }
              r1();
            }
          } else
            m = v;
          return m == null ? i : Le({}, i, m);
        }
        case bh:
          return _h = !0, i;
      }
      return i;
    }
    function Oh(e, t, a, i) {
      var u = e.updateQueue;
      _h = !1, Mh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var R = y.updateQueue, E = R.lastBaseUpdate;
          E !== f && (E === null ? R.firstBaseUpdate = m : E.next = m, R.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var b = u.baseState, M = U, L = null, $ = null, fe = null, ie = s;
        do {
          var Fe = ie.lane, Ne = ie.eventTime;
          if (ul(i, Fe)) {
            if (fe !== null) {
              var O = {
                eventTime: Ne,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                tag: ie.tag,
                payload: ie.payload,
                callback: ie.callback,
                next: null
              };
              fe = fe.next = O;
            }
            b = gx(e, u, ie, b, t, a);
            var D = ie.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            ie.lane !== Ht) {
              e.flags |= ha;
              var j = u.effects;
              j === null ? u.effects = [ie] : j.push(ie);
            }
          } else {
            var w = {
              eventTime: Ne,
              lane: Fe,
              tag: ie.tag,
              payload: ie.payload,
              callback: ie.callback,
              next: null
            };
            fe === null ? ($ = fe = w, L = b) : fe = fe.next = w, M = xe(M, Fe);
          }
          if (ie = ie.next, ie === null) {
            if (p = u.shared.pending, p === null)
              break;
            var X = p, I = X.next;
            X.next = null, ie = I, u.lastBaseUpdate = X, u.shared.pending = null;
          }
        } while (!0);
        fe === null && (L = b), u.baseState = L, u.firstBaseUpdate = $, u.lastBaseUpdate = fe;
        var ge = u.shared.interleaved;
        if (ge !== null) {
          var Te = ge;
          do
            M = xe(M, Te.lane), Te = Te.next;
          while (Te !== ge);
        } else
          s === null && (u.shared.lanes = U);
        sp(M), e.lanes = M, e.memoizedState = b;
      }
      Mh = null;
    }
    function Sx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function s1() {
      _h = !1;
    }
    function Nh() {
      return _h;
    }
    function c1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Sx(f, a));
        }
    }
    var Hd = {}, ku = Tu(Hd), Fd = Tu(Hd), zh = Tu(Hd);
    function Uh(e) {
      if (e === Hd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function f1() {
      var e = Uh(zh.current);
      return e;
    }
    function og(e, t) {
      Jn(zh, t, e), Jn(Fd, e, e), Jn(ku, Hd, e);
      var a = AT(t);
      Zn(ku, e), Jn(ku, a, e);
    }
    function Hc(e) {
      Zn(ku, e), Zn(Fd, e), Zn(zh, e);
    }
    function sg() {
      var e = Uh(ku.current);
      return e;
    }
    function d1(e) {
      Uh(zh.current);
      var t = Uh(ku.current), a = HT(t, e.type);
      t !== a && (Jn(Fd, e, e), Jn(ku, a, e));
    }
    function cg(e) {
      Fd.current === e && (Zn(ku, e), Zn(Fd, e));
    }
    var Cx = 0, p1 = 1, v1 = 1, jd = 2, qa = Tu(Cx);
    function fg(e, t) {
      return (e & t) !== 0;
    }
    function Fc(e) {
      return e & p1;
    }
    function dg(e, t) {
      return e & p1 | t;
    }
    function Ex(e, t) {
      return e | t;
    }
    function bu(e, t) {
      Jn(qa, t, e);
    }
    function jc(e) {
      Zn(qa, e);
    }
    function Tx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Ah(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ue) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || L0(i) || My(i))
              return t;
          }
        } else if (t.tag === at && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Se) !== ce;
          if (u)
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
    var Yr = (
      /*   */
      0
    ), an = (
      /* */
      1
    ), Li = (
      /*  */
      2
    ), ln = (
      /*    */
      4
    ), bn = (
      /*   */
      8
    ), pg = [];
    function vg() {
      for (var e = 0; e < pg.length; e++) {
        var t = pg[e];
        t._workInProgressVersionPrimary = null;
      }
      pg.length = 0;
    }
    function Rx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var W = N.ReactCurrentDispatcher, Vd = N.ReactCurrentBatchConfig, hg, Vc;
    hg = /* @__PURE__ */ new Set();
    var Qo = U, Ze = null, un = null, on = null, Hh = !1, Bd = !1, Pd = 0, xx = 0, wx = 25, z = null, xa = null, _u = -1, mg = !1;
    function Qe() {
      {
        var e = z;
        xa === null ? xa = [e] : xa.push(e);
      }
    }
    function P() {
      {
        var e = z;
        xa !== null && (_u++, xa[_u] !== e && Dx(e));
      }
    }
    function Bc(e) {
      e != null && !Gt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", z, typeof e);
    }
    function Dx(e) {
      {
        var t = Re(Ze);
        if (!hg.has(t) && (hg.add(t), xa !== null)) {
          for (var a = "", i = 30, u = 0; u <= _u; u++) {
            for (var s = xa[u], f = u === _u ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function er() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function yg(e, t) {
      if (mg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", z), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, z, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!J(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pc(e, t, a, i, u, s) {
      Qo = s, Ze = t, xa = e !== null ? e._debugHookTypes : null, _u = -1, mg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = U, e !== null && e.memoizedState !== null ? W.current = A1 : xa !== null ? W.current = U1 : W.current = z1;
      var f = a(i, u);
      if (Bd) {
        var p = 0;
        do {
          if (Bd = !1, Pd = 0, p >= wx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, mg = !1, un = null, on = null, t.updateQueue = null, _u = -1, W.current = H1, f = a(i, u);
        } while (Bd);
      }
      W.current = qh, t._debugHookTypes = xa;
      var v = un !== null && un.next !== null;
      if (Qo = U, Ze = null, un = null, on = null, z = null, xa = null, _u = -1, e !== null && (e.flags & tn) !== (t.flags & tn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ae) !== ne && S("Internal React error: Expected static flag was missing. Please notify the React team."), Hh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Yc() {
      var e = Pd !== 0;
      return Pd = 0, e;
    }
    function h1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & fr) !== ne ? t.flags &= ~(Zi | $n | dt | De) : t.flags &= ~(dt | De), e.lanes = To(e.lanes, a);
    }
    function m1() {
      if (W.current = qh, Hh) {
        for (var e = Ze.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Hh = !1;
      }
      Qo = U, Ze = null, un = null, on = null, xa = null, _u = -1, z = null, _1 = !1, Bd = !1, Pd = 0;
    }
    function Oi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return on === null ? Ze.memoizedState = on = e : on = on.next = e, on;
    }
    function wa() {
      var e;
      if (un === null) {
        var t = Ze.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = un.next;
      var a;
      if (on === null ? a = Ze.memoizedState : a = on.next, a !== null)
        on = a, a = on.next, un = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        un = e;
        var i = {
          memoizedState: un.memoizedState,
          baseState: un.baseState,
          baseQueue: un.baseQueue,
          queue: un.queue,
          next: null
        };
        on === null ? Ze.memoizedState = on = i : on = on.next = i;
      }
      return on;
    }
    function y1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function gg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Sg(e, t, a) {
      var i = Oi(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Mx.bind(null, Ze, s);
      return [i.memoizedState, f];
    }
    function Cg(e, t, a) {
      var i = wa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = un, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, R = s.baseState, E = null, b = null, M = null, L = y;
        do {
          var $ = L.lane;
          if (ul(Qo, $)) {
            if (M !== null) {
              var ie = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              };
              M = M.next = ie;
            }
            if (L.hasEagerState)
              R = L.eagerState;
            else {
              var Fe = L.action;
              R = e(R, Fe);
            }
          } else {
            var fe = {
              lane: $,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            };
            M === null ? (b = M = fe, E = R) : M = M.next = fe, Ze.lanes = xe(Ze.lanes, $), sp($);
          }
          L = L.next;
        } while (L !== null && L !== y);
        M === null ? E = R : M.next = b, J(R, i.memoizedState) || Kd(), i.memoizedState = R, i.baseState = E, i.baseQueue = M, u.lastRenderedState = R;
      }
      var Ne = u.interleaved;
      if (Ne !== null) {
        var w = Ne;
        do {
          var O = w.lane;
          Ze.lanes = xe(Ze.lanes, O), sp(O), w = w.next;
        } while (w !== Ne);
      } else
        f === null && (u.lanes = U);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Eg(e, t, a) {
      var i = wa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        J(p, i.memoizedState) || Kd(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Yk(e, t, a) {
    }
    function $k(e, t, a) {
    }
    function Tg(e, t, a) {
      var i = Ze, u = Oi(), s, f = kn();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Vc || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Vc = !0);
      } else {
        if (s = t(), !Vc) {
          var p = t();
          J(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Vc = !0);
        }
        var v = hm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Eo(v, Qo) || g1(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Ph(C1.bind(null, i, m, e), [e]), i.flags |= dt, Yd(an | bn, S1.bind(null, i, m, s, t), void 0, null), s;
    }
    function Fh(e, t, a) {
      var i = Ze, u = wa(), s = t();
      if (!Vc) {
        var f = t();
        J(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Vc = !0);
      }
      var p = u.memoizedState, v = !J(p, s);
      v && (u.memoizedState = s, Kd());
      var m = u.queue;
      if (Qd(C1.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      on !== null && on.memoizedState.tag & an) {
        i.flags |= dt, Yd(an | bn, S1.bind(null, i, m, s, t), void 0, null);
        var y = hm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Eo(y, Qo) || g1(i, t, s);
      }
      return s;
    }
    function g1(e, t, a) {
      e.flags |= co;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Ze.updateQueue;
      if (u === null)
        u = y1(), Ze.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function S1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, E1(t) && T1(e);
    }
    function C1(e, t, a) {
      var i = function() {
        E1(t) && T1(e);
      };
      return a(i);
    }
    function E1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !J(a, i);
      } catch {
        return !0;
      }
    }
    function T1(e) {
      var t = Pr(e, oe);
      t !== null && dn(t, e, oe, it);
    }
    function jh(e) {
      var t = Oi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: gg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Lx.bind(null, Ze, a);
      return [t.memoizedState, i];
    }
    function Rg(e) {
      return Cg(gg);
    }
    function xg(e) {
      return Eg(gg);
    }
    function Yd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Ze.updateQueue;
      if (s === null)
        s = y1(), Ze.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function wg(e) {
      var t = Oi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Vh(e) {
      var t = wa();
      return t.memoizedState;
    }
    function $d(e, t, a, i) {
      var u = Oi(), s = i === void 0 ? null : i;
      Ze.flags |= e, u.memoizedState = Yd(an | t, a, void 0, s);
    }
    function Bh(e, t, a, i) {
      var u = wa(), s = i === void 0 ? null : i, f = void 0;
      if (un !== null) {
        var p = un.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (yg(s, v)) {
            u.memoizedState = Yd(t, a, f, s);
            return;
          }
        }
      }
      Ze.flags |= e, u.memoizedState = Yd(an | t, a, f, s);
    }
    function Ph(e, t) {
      return (Ze.mode & fr) !== ne ? $d(Zi | dt | Si, bn, e, t) : $d(dt | Si, bn, e, t);
    }
    function Qd(e, t) {
      return Bh(dt, bn, e, t);
    }
    function Dg(e, t) {
      return $d(De, Li, e, t);
    }
    function Yh(e, t) {
      return Bh(De, Li, e, t);
    }
    function kg(e, t) {
      var a = De;
      return a |= Yn, (Ze.mode & fr) !== ne && (a |= $n), $d(a, ln, e, t);
    }
    function $h(e, t) {
      return Bh(De, ln, e, t);
    }
    function R1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function bg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = De;
      return u |= Yn, (Ze.mode & fr) !== ne && (u |= $n), $d(u, ln, R1.bind(null, t, e), i);
    }
    function Qh(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Bh(De, ln, R1.bind(null, t, e), i);
    }
    function kx(e, t) {
    }
    var Ih = kx;
    function _g(e, t) {
      var a = Oi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Gh(e, t) {
      var a = wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (yg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Mg(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Wh(e, t) {
      var a = wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (yg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Lg(e) {
      var t = Oi();
      return t.memoizedState = e, e;
    }
    function x1(e) {
      var t = wa(), a = un, i = a.memoizedState;
      return D1(t, i, e);
    }
    function w1(e) {
      var t = wa();
      if (un === null)
        return t.memoizedState = e, e;
      var a = un.memoizedState;
      return D1(t, a, e);
    }
    function D1(e, t, a) {
      var i = !xv(Qo);
      if (i) {
        if (!J(a, t)) {
          var u = kv();
          Ze.lanes = xe(Ze.lanes, u), sp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Kd()), e.memoizedState = a, a;
    }
    function bx(e, t, a) {
      var i = Ar();
      xt(Km(i, Ya)), e(!0);
      var u = Vd.transition;
      Vd.transition = {};
      var s = Vd.transition;
      Vd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (xt(i), Vd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Og() {
      var e = jh(!1), t = e[0], a = e[1], i = bx.bind(null, a), u = Oi();
      return u.memoizedState = i, [t, i];
    }
    function k1() {
      var e = Rg(), t = e[0], a = wa(), i = a.memoizedState;
      return [t, i];
    }
    function b1() {
      var e = xg(), t = e[0], a = wa(), i = a.memoizedState;
      return [t, i];
    }
    var _1 = !1;
    function _x() {
      return _1;
    }
    function Ng() {
      var e = Oi(), t = hm(), a = t.identifierPrefix, i;
      if (kn()) {
        var u = IR();
        i = ":" + a + "R" + u;
        var s = Pd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = xx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Xh() {
      var e = wa(), t = e.memoizedState;
      return t;
    }
    function Mx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = zu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (M1(e))
        L1(t, u);
      else {
        var s = i1(e, t, u, i);
        if (s !== null) {
          var f = hr();
          dn(s, e, i, f), O1(s, t, i);
        }
      }
      N1(e, i);
    }
    function Lx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = zu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (M1(e))
        L1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === U && (s === null || s.lanes === U)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = W.current, W.current = Ka;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, J(m, v)) {
                hx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              W.current = p;
            }
          }
        }
        var y = i1(e, t, u, i);
        if (y !== null) {
          var R = hr();
          dn(y, e, i, R), O1(y, t, i);
        }
      }
      N1(e, i);
    }
    function M1(e) {
      var t = e.alternate;
      return e === Ze || t !== null && t === Ze;
    }
    function L1(e, t) {
      Bd = Hh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function O1(e, t, a) {
      if (Kf(a)) {
        var i = t.lanes;
        i = Js(i, e.pendingLanes);
        var u = xe(i, a);
        t.lanes = u, Zf(e, u);
      }
    }
    function N1(e, t, a) {
      ho(e, t);
    }
    var qh = {
      readContext: Jt,
      useCallback: er,
      useContext: er,
      useEffect: er,
      useImperativeHandle: er,
      useInsertionEffect: er,
      useLayoutEffect: er,
      useMemo: er,
      useReducer: er,
      useRef: er,
      useState: er,
      useDebugValue: er,
      useDeferredValue: er,
      useTransition: er,
      useMutableSource: er,
      useSyncExternalStore: er,
      useId: er,
      unstable_isNewReconciler: Y
    }, z1 = null, U1 = null, A1 = null, H1 = null, Ni = null, Ka = null, Kh = null;
    {
      var zg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ee = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      z1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Qe(), Bc(t), _g(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Qe(), Jt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Qe(), Bc(t), Ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Qe(), Bc(a), bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Qe(), Bc(t), Dg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Qe(), Bc(t), kg(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Qe(), Bc(t);
          var a = W.current;
          W.current = Ni;
          try {
            return Mg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Qe();
          var i = W.current;
          W.current = Ni;
          try {
            return Sg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Qe(), wg(e);
        },
        useState: function(e) {
          z = "useState", Qe();
          var t = W.current;
          W.current = Ni;
          try {
            return jh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Qe(), void 0;
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Qe(), Lg(e);
        },
        useTransition: function() {
          return z = "useTransition", Qe(), Og();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Qe(), Tg(e, t, a);
        },
        useId: function() {
          return z = "useId", Qe(), Ng();
        },
        unstable_isNewReconciler: Y
      }, U1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", P(), _g(e, t);
        },
        useContext: function(e) {
          return z = "useContext", P(), Jt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", P(), Ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", P(), bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", P(), Dg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", P(), kg(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", P();
          var a = W.current;
          W.current = Ni;
          try {
            return Mg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", P();
          var i = W.current;
          W.current = Ni;
          try {
            return Sg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", P(), wg(e);
        },
        useState: function(e) {
          z = "useState", P();
          var t = W.current;
          W.current = Ni;
          try {
            return jh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", P(), void 0;
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", P(), Lg(e);
        },
        useTransition: function() {
          return z = "useTransition", P(), Og();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", P(), Tg(e, t, a);
        },
        useId: function() {
          return z = "useId", P(), Ng();
        },
        unstable_isNewReconciler: Y
      }, A1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", P(), Gh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", P(), Jt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", P(), Qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", P(), Qh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", P(), Yh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", P(), $h(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", P();
          var a = W.current;
          W.current = Ka;
          try {
            return Wh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", P();
          var i = W.current;
          W.current = Ka;
          try {
            return Cg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", P(), Vh();
        },
        useState: function(e) {
          z = "useState", P();
          var t = W.current;
          W.current = Ka;
          try {
            return Rg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", P(), Ih();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", P(), x1(e);
        },
        useTransition: function() {
          return z = "useTransition", P(), k1();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", P(), Fh(e, t);
        },
        useId: function() {
          return z = "useId", P(), Xh();
        },
        unstable_isNewReconciler: Y
      }, H1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", P(), Gh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", P(), Jt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", P(), Qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", P(), Qh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", P(), Yh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", P(), $h(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", P();
          var a = W.current;
          W.current = Kh;
          try {
            return Wh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", P();
          var i = W.current;
          W.current = Kh;
          try {
            return Eg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", P(), Vh();
        },
        useState: function(e) {
          z = "useState", P();
          var t = W.current;
          W.current = Kh;
          try {
            return xg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", P(), Ih();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", P(), w1(e);
        },
        useTransition: function() {
          return z = "useTransition", P(), b1();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", P(), Fh(e, t);
        },
        useId: function() {
          return z = "useId", P(), Xh();
        },
        unstable_isNewReconciler: Y
      }, Ni = {
        readContext: function(e) {
          return zg(), Jt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Ee(), Qe(), _g(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Ee(), Qe(), Jt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Ee(), Qe(), Ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Ee(), Qe(), bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Ee(), Qe(), Dg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Ee(), Qe(), kg(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Ee(), Qe();
          var a = W.current;
          W.current = Ni;
          try {
            return Mg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Ee(), Qe();
          var i = W.current;
          W.current = Ni;
          try {
            return Sg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Ee(), Qe(), wg(e);
        },
        useState: function(e) {
          z = "useState", Ee(), Qe();
          var t = W.current;
          W.current = Ni;
          try {
            return jh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Ee(), Qe(), void 0;
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Ee(), Qe(), Lg(e);
        },
        useTransition: function() {
          return z = "useTransition", Ee(), Qe(), Og();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Ee(), Qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Ee(), Qe(), Tg(e, t, a);
        },
        useId: function() {
          return z = "useId", Ee(), Qe(), Ng();
        },
        unstable_isNewReconciler: Y
      }, Ka = {
        readContext: function(e) {
          return zg(), Jt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Ee(), P(), Gh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Ee(), P(), Jt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Ee(), P(), Qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Ee(), P(), Qh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Ee(), P(), Yh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Ee(), P(), $h(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Ee(), P();
          var a = W.current;
          W.current = Ka;
          try {
            return Wh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Ee(), P();
          var i = W.current;
          W.current = Ka;
          try {
            return Cg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Ee(), P(), Vh();
        },
        useState: function(e) {
          z = "useState", Ee(), P();
          var t = W.current;
          W.current = Ka;
          try {
            return Rg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Ee(), P(), Ih();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Ee(), P(), x1(e);
        },
        useTransition: function() {
          return z = "useTransition", Ee(), P(), k1();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Ee(), P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Ee(), P(), Fh(e, t);
        },
        useId: function() {
          return z = "useId", Ee(), P(), Xh();
        },
        unstable_isNewReconciler: Y
      }, Kh = {
        readContext: function(e) {
          return zg(), Jt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Ee(), P(), Gh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Ee(), P(), Jt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Ee(), P(), Qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Ee(), P(), Qh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Ee(), P(), Yh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Ee(), P(), $h(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Ee(), P();
          var a = W.current;
          W.current = Ka;
          try {
            return Wh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Ee(), P();
          var i = W.current;
          W.current = Ka;
          try {
            return Eg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Ee(), P(), Vh();
        },
        useState: function(e) {
          z = "useState", Ee(), P();
          var t = W.current;
          W.current = Ka;
          try {
            return xg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Ee(), P(), Ih();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Ee(), P(), w1(e);
        },
        useTransition: function() {
          return z = "useTransition", Ee(), P(), b1();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Ee(), P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Ee(), P(), Fh(e, t);
        },
        useId: function() {
          return z = "useId", Ee(), P(), Xh();
        },
        unstable_isNewReconciler: Y
      };
    }
    var Mu = je.unstable_now, F1 = 0, Zh = -1, Id = -1, Jh = -1, Ug = !1, em = !1;
    function j1() {
      return Ug;
    }
    function Ox() {
      em = !0;
    }
    function Nx() {
      Ug = !1, em = !1;
    }
    function zx() {
      Ug = em, em = !1;
    }
    function V1() {
      return F1;
    }
    function B1() {
      F1 = Mu();
    }
    function Ag(e) {
      Id = Mu(), e.actualStartTime < 0 && (e.actualStartTime = Mu());
    }
    function P1(e) {
      Id = -1;
    }
    function tm(e, t) {
      if (Id >= 0) {
        var a = Mu() - Id;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Id = -1;
      }
    }
    function zi(e) {
      if (Zh >= 0) {
        var t = Mu() - Zh;
        Zh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case le:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ut:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Hg(e) {
      if (Jh >= 0) {
        var t = Mu() - Jh;
        Jh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case le:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ut:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ui() {
      Zh = Mu();
    }
    function Fg() {
      Jh = Mu();
    }
    function jg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Za(e, t) {
      if (e && e.defaultProps) {
        var a = Le({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Vg = {}, Bg, Pg, Yg, $g, Qg, Y1, nm, Ig, Gg, Wg, Gd;
    {
      Bg = /* @__PURE__ */ new Set(), Pg = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Gd = /* @__PURE__ */ new Set();
      var $1 = /* @__PURE__ */ new Set();
      nm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          $1.has(a) || ($1.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Y1 = function(e, t) {
        if (t === void 0) {
          var a = We(e) || "Component";
          Qg.has(a) || (Qg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Vg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Vg);
    }
    function Xg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & ke) {
          At(!0);
          try {
            s = a(i, u);
          } finally {
            At(!1);
          }
        }
        Y1(t, s);
      }
      var f = s == null ? u : Le({}, u, s);
      if (e.memoizedState = f, e.lanes === U) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var qg = {
      isMounted: sr,
      enqueueSetState: function(e, t, a) {
        var i = br(e), u = hr(), s = zu(i), f = Cl(u, s);
        f.payload = t, a != null && (nm(a, "setState"), f.callback = a);
        var p = Du(i, f, s);
        p !== null && (dn(p, i, s, u), Lh(p, i, s)), ho(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = br(e), u = hr(), s = zu(i), f = Cl(u, s);
        f.tag = u1, f.payload = t, a != null && (nm(a, "replaceState"), f.callback = a);
        var p = Du(i, f, s);
        p !== null && (dn(p, i, s, u), Lh(p, i, s)), ho(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = br(e), i = hr(), u = zu(a), s = Cl(i, u);
        s.tag = bh, t != null && (nm(t, "forceUpdate"), s.callback = t);
        var f = Du(a, s, u);
        f !== null && (dn(f, a, u, i), Lh(f, a, u)), As(a, u);
      }
    };
    function Q1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ke) {
            At(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              At(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", We(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !he(a, i) || !he(u, s) : !0;
    }
    function Ux(e, t, a) {
      var i = e.stateNode;
      {
        var u = We(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Gd.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ke) === ne && (Gd.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Gd.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ke) === ne && (Gd.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Gg.has(t) && (Gg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", We(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Yg.has(t) && (Yg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", We(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Gt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function I1(e, t) {
      t.updater = qg, e.stateNode = t, Yl(t, e), t._reactInternalInstance = Vg;
    }
    function G1(e, t, a) {
      var i = !1, u = ua, s = ua, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === tf && f._context === void 0
        );
        if (!p && !Wg.has(t)) {
          Wg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === ef ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", We(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jt(f);
      else {
        u = _c(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Mc(e, u) : ua;
      }
      var y = new t(a, s);
      if (e.mode & ke) {
        At(!0);
        try {
          y = new t(a, s);
        } finally {
          At(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      I1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = We(t) || "Component";
          Pg.has(E) || (Pg.add(E), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var b = null, M = null, L = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? b = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (b = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? L = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (L = "UNSAFE_componentWillUpdate"), b !== null || M !== null || L !== null) {
            var $ = We(t) || "Component", fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $g.has($) || ($g.add($), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, $, fe, b !== null ? `
  ` + b : "", M !== null ? `
  ` + M : "", L !== null ? `
  ` + L : ""));
          }
        }
      }
      return i && A0(e, u, s), y;
    }
    function Ax(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Re(e) || "Component"), qg.enqueueReplaceState(t, t.state, null));
    }
    function W1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Re(e) || "Component";
          Bg.has(s) || (Bg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        qg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Kg(e, t, a, i) {
      Ux(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, lg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jt(s);
      else {
        var f = _c(e, t, !0);
        u.context = Mc(e, f);
      }
      {
        if (u.state === a) {
          var p = We(t) || "Component";
          Ig.has(p) || (Ig.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ke && Xa.recordLegacyContextWarning(e, u), Xa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Xg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Ax(e, u), Oh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = De;
        m |= Yn, (e.mode & fr) !== ne && (m |= $n), e.flags |= m;
      }
    }
    function Hx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ua;
      if (typeof p == "object" && p !== null)
        v = Jt(p);
      else {
        var m = _c(e, t, !0);
        v = Mc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && W1(e, u, a, v), s1();
      var E = e.memoizedState, b = u.state = E;
      if (Oh(e, a, u, i), b = e.memoizedState, s === a && E === b && !ph() && !Nh()) {
        if (typeof u.componentDidMount == "function") {
          var M = De;
          M |= Yn, (e.mode & fr) !== ne && (M |= $n), e.flags |= M;
        }
        return !1;
      }
      typeof y == "function" && (Xg(e, t, y, a), b = e.memoizedState);
      var L = Nh() || Q1(e, t, s, a, E, b, v);
      if (L) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var $ = De;
          $ |= Yn, (e.mode & fr) !== ne && ($ |= $n), e.flags |= $;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var fe = De;
          fe |= Yn, (e.mode & fr) !== ne && (fe |= $n), e.flags |= fe;
        }
        e.memoizedProps = a, e.memoizedState = b;
      }
      return u.props = a, u.state = b, u.context = v, L;
    }
    function Fx(e, t, a, i, u) {
      var s = t.stateNode;
      o1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Za(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = ua;
      if (typeof y == "object" && y !== null)
        R = Jt(y);
      else {
        var E = _c(t, a, !0);
        R = Mc(t, E);
      }
      var b = a.getDerivedStateFromProps, M = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && W1(t, s, i, R), s1();
      var L = t.memoizedState, $ = s.state = L;
      if (Oh(t, i, s, u), $ = t.memoizedState, f === v && L === $ && !ph() && !Nh() && !ye)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= De), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= _r), !1;
      typeof b == "function" && (Xg(t, a, b, i), $ = t.memoizedState);
      var fe = Nh() || Q1(t, a, p, i, L, $, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ye;
      return fe ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, $, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, $, R)), typeof s.componentDidUpdate == "function" && (t.flags |= De), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= _r)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= De), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= _r), t.memoizedProps = i, t.memoizedState = $), s.props = i, s.state = $, s.context = R, fe;
    }
    function Io(e, t) {
      return {
        value: e,
        source: t,
        stack: of(t),
        digest: null
      };
    }
    function Zg(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function jx(e, t) {
      return !0;
    }
    function Jg(e, t) {
      try {
        var a = jx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === de)
            return;
          console.error(i);
        }
        var p = u ? Re(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === le)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Re(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var R = v + `
` + f + `

` + ("" + m);
        console.error(R);
      } catch (E) {
        setTimeout(function() {
          throw E;
        });
      }
    }
    var Vx = typeof WeakMap == "function" ? WeakMap : Map;
    function X1(e, t, a) {
      var i = Cl(it, a);
      i.tag = ag, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        OD(u), Jg(e, t);
      }, i;
    }
    function eS(e, t, a) {
      var i = Cl(it, a);
      i.tag = ag;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          lE(e), Jg(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        lE(e), Jg(e, t), typeof u != "function" && MD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (qn(e.lanes, oe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Re(e) || "Unknown"));
      }), i;
    }
    function q1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Vx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ND.bind(null, e, t, a);
        cr && cp(e, a), t.then(s, s);
      }
    }
    function Bx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Px(e, t) {
      var a = e.tag;
      if ((e.mode & ae) === ne && (a === we || a === ze || a === be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function K1(e) {
      var t = e;
      do {
        if (t.tag === Ue && Tx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Z1(e, t, a, i, u) {
      if ((e.mode & ae) === ne) {
        if (e === t)
          e.flags |= Xt;
        else {
          if (e.flags |= Se, a.flags |= fo, a.flags &= ~(xs | ur), a.tag === de) {
            var s = a.alternate;
            if (s === null)
              a.tag = rr;
            else {
              var f = Cl(it, oe);
              f.tag = bh, Du(a, f, oe);
            }
          }
          a.lanes = xe(a.lanes, oe);
        }
        return e;
      }
      return e.flags |= Xt, e.lanes = u, e;
    }
    function Yx(e, t, a, i, u) {
      if (a.flags |= ur, cr && cp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Px(a), kn() && a.mode & ae && Y0();
        var f = K1(t);
        if (f !== null) {
          f.flags &= ~Rt, Z1(f, t, a, e, u), f.mode & ae && q1(e, s, u), Bx(f, e, s);
          return;
        } else {
          if (!qf(u)) {
            q1(e, s, u), NS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (kn() && a.mode & ae) {
        Y0();
        var v = K1(t);
        if (v !== null) {
          (v.flags & Xt) === ce && (v.flags |= Rt), Z1(v, t, a, e, u), Iy(Io(i, a));
          return;
        }
      }
      i = Io(i, a), TD(i);
      var m = t;
      do {
        switch (m.tag) {
          case le: {
            var y = i;
            m.flags |= Xt;
            var R = ru(u);
            m.lanes = xe(m.lanes, R);
            var E = X1(m, y, R);
            ug(m, E);
            return;
          }
          case de:
            var b = i, M = m.type, L = m.stateNode;
            if ((m.flags & Se) === ce && (typeof M.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && !KC(L))) {
              m.flags |= Xt;
              var $ = ru(u);
              m.lanes = xe(m.lanes, $);
              var fe = eS(m, b, $);
              ug(m, fe);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function $x() {
      return null;
    }
    var Wd = N.ReactCurrentOwner, Ja = !1, tS, Xd, nS, rS, aS, Go, iS, rm, qd;
    tS = {}, Xd = {}, nS = {}, rS = {}, aS = {}, Go = !1, iS = {}, rm = {}, qd = {};
    function pr(e, t, a, i) {
      e === null ? t.child = t1(t, null, a, i) : t.child = zc(t, e.child, a, i);
    }
    function Qx(e, t, a, i) {
      t.child = zc(t, e.child, null, i), t.child = zc(t, null, a, i);
    }
    function J1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          We(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Ac(t, u), Gl(t);
      {
        if (Wd.current = t, na(!0), v = Pc(e, t, f, i, p, u), m = Yc(), t.mode & ke) {
          At(!0);
          try {
            v = Pc(e, t, f, i, p, u), m = Yc();
          } finally {
            At(!1);
          }
        }
        na(!1);
      }
      return Gn(), e !== null && !Ja ? (h1(e, t, u), El(e, t, u)) : (kn() && m && Vy(t), t.flags |= yi, pr(e, t, v, u), t.child);
    }
    function eC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (qD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Kc(s), t.tag = be, t.type = f, oS(t, s), tC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ga(
            p,
            i,
            // Resolved props
            "prop",
            We(s)
          ), a.defaultProps !== void 0) {
            var v = We(s) || "Unknown";
            qd[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), qd[v] = !0);
          }
        }
        var m = $S(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, R = y.propTypes;
        R && Ga(
          R,
          i,
          // Resolved props
          "prop",
          We(y)
        );
      }
      var E = e.child, b = vS(e, u);
      if (!b) {
        var M = E.memoizedProps, L = a.compare;
        if (L = L !== null ? L : he, L(M, i) && e.ref === t.ref)
          return El(e, t, u);
      }
      t.flags |= yi;
      var $ = Zo(E, i);
      return $.ref = t.ref, $.return = t, t.child = $, $;
    }
    function tC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === xn) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Ga(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            We(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (he(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ja = !1, t.pendingProps = i = y, vS(e, u))
            (e.flags & fo) !== ce && (Ja = !0);
          else
            return t.lanes = e.lanes, El(e, t, u);
      }
      return lS(e, t, a, i, u);
    }
    function nC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || K)
        if ((t.mode & ae) === ne) {
          var f = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, mm(t, a);
        } else if (qn(a, Sn)) {
          var R = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          mm(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = xe(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Sn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, mm(t, v), null;
        }
      else {
        var b;
        s !== null ? (b = xe(s.baseLanes, a), t.memoizedState = null) : b = a, mm(t, b);
      }
      return pr(e, t, u, a), t.child;
    }
    function Ix(e, t, a) {
      var i = t.pendingProps;
      return pr(e, t, i, a), t.child;
    }
    function Gx(e, t, a) {
      var i = t.pendingProps.children;
      return pr(e, t, i, a), t.child;
    }
    function Wx(e, t, a) {
      {
        t.flags |= De;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return pr(e, t, s, a), t.child;
    }
    function rC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Pn, t.flags |= Hf);
    }
    function lS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          We(a)
        );
      }
      var f;
      {
        var p = _c(t, a, !0);
        f = Mc(t, p);
      }
      var v, m;
      Ac(t, u), Gl(t);
      {
        if (Wd.current = t, na(!0), v = Pc(e, t, a, i, f, u), m = Yc(), t.mode & ke) {
          At(!0);
          try {
            v = Pc(e, t, a, i, f, u), m = Yc();
          } finally {
            At(!1);
          }
        }
        na(!1);
      }
      return Gn(), e !== null && !Ja ? (h1(e, t, u), El(e, t, u)) : (kn() && m && Vy(t), t.flags |= yi, pr(e, t, v, u), t.child);
    }
    function aC(e, t, a, i, u) {
      {
        switch (fk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Se, t.flags |= Xt;
            var m = new Error("Simulated error coming from DevTools"), y = ru(u);
            t.lanes = xe(t.lanes, y);
            var R = eS(t, Io(m, t), y);
            ug(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var E = a.propTypes;
          E && Ga(
            E,
            i,
            // Resolved props
            "prop",
            We(a)
          );
        }
      }
      var b;
      Mi(a) ? (b = !0, hh(t)) : b = !1, Ac(t, u);
      var M = t.stateNode, L;
      M === null ? (im(e, t), G1(t, a, i), Kg(t, a, i, u), L = !0) : e === null ? L = Hx(t, a, i, u) : L = Fx(e, t, a, i, u);
      var $ = uS(e, t, a, L, b, u);
      {
        var fe = t.stateNode;
        L && fe.props !== i && (Go || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Re(t) || "a component"), Go = !0);
      }
      return $;
    }
    function uS(e, t, a, i, u, s) {
      rC(e, t);
      var f = (t.flags & Se) !== ce;
      if (!i && !f)
        return u && j0(t, a, !1), El(e, t, s);
      var p = t.stateNode;
      Wd.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, P1();
      else {
        Gl(t);
        {
          if (na(!0), v = p.render(), t.mode & ke) {
            At(!0);
            try {
              p.render();
            } finally {
              At(!1);
            }
          }
          na(!1);
        }
        Gn();
      }
      return t.flags |= yi, e !== null && f ? Qx(e, t, v, s) : pr(e, t, v, s), t.memoizedState = p.state, u && j0(t, a, !0), t.child;
    }
    function iC(e) {
      var t = e.stateNode;
      t.pendingContext ? H0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && H0(e, t.context, !1), og(e, t.containerInfo);
    }
    function Xx(e, t, a) {
      if (iC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      o1(e, t), Oh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & Rt) {
          var y = Io(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return lC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Io(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return lC(e, t, p, a, R);
        } else {
          ZR(t);
          var E = t1(t, null, p, a);
          t.child = E;
          for (var b = E; b; )
            b.flags = b.flags & ~ot | Mr, b = b.sibling;
        }
      } else {
        if (Nc(), p === s)
          return El(e, t, a);
        pr(e, t, p, a);
      }
      return t.child;
    }
    function lC(e, t, a, i, u) {
      return Nc(), Iy(u), t.flags |= Rt, pr(e, t, a, i), t.child;
    }
    function qx(e, t, a) {
      d1(t), e === null && Qy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Dy(i, u);
      return p ? f = null : s !== null && Dy(i, s) && (t.flags |= $e), rC(e, t), pr(e, t, f, a), t.child;
    }
    function Kx(e, t) {
      return e === null && Qy(t), null;
    }
    function Zx(e, t, a, i) {
      im(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = KD(v), y = Za(v, u), R;
      switch (m) {
        case we:
          return oS(t, v), t.type = v = Kc(v), R = lS(null, t, v, y, i), R;
        case de:
          return t.type = v = FS(v), R = aC(null, t, v, y, i), R;
        case ze:
          return t.type = v = jS(v), R = J1(null, t, v, y, i), R;
        case ht: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Ga(
              E,
              y,
              // Resolved for outer only
              "prop",
              We(v)
            );
          }
          return R = eC(
            null,
            t,
            v,
            Za(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var b = "";
      throw v !== null && typeof v == "object" && v.$$typeof === xn && (b = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + b));
    }
    function Jx(e, t, a, i, u) {
      im(e, t), t.tag = de;
      var s;
      return Mi(a) ? (s = !0, hh(t)) : s = !1, Ac(t, u), G1(t, a, i), Kg(t, a, i, u), uS(null, t, a, !0, s, u);
    }
    function ew(e, t, a, i) {
      im(e, t);
      var u = t.pendingProps, s;
      {
        var f = _c(t, a, !1);
        s = Mc(t, f);
      }
      Ac(t, i);
      var p, v;
      Gl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = We(a) || "Unknown";
          tS[m] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), tS[m] = !0);
        }
        t.mode & ke && Xa.recordLegacyContextWarning(t, null), na(!0), Wd.current = t, p = Pc(null, t, a, u, s, i), v = Yc(), na(!1);
      }
      if (Gn(), t.flags |= yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = We(a) || "Unknown";
        Xd[y] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), Xd[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = We(a) || "Unknown";
          Xd[R] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Xd[R] = !0);
        }
        t.tag = de, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Mi(a) ? (E = !0, hh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, lg(t), I1(t, p), Kg(t, a, u, i), uS(null, t, a, !0, E, i);
      } else {
        if (t.tag = we, t.mode & ke) {
          At(!0);
          try {
            p = Pc(null, t, a, u, s, i), v = Yc();
          } finally {
            At(!1);
          }
        }
        return kn() && v && Vy(t), pr(null, t, p, i), oS(t, a), t.child;
      }
    }
    function oS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), aS[u] || (aS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = We(t) || "Unknown";
          qd[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), qd[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = We(t) || "Unknown";
          rS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), rS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = We(t) || "Unknown";
          nS[v] || (S("%s: Function components do not support contextType.", v), nS[v] = !0);
        }
      }
    }
    var sS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ht
    };
    function cS(e) {
      return {
        baseLanes: e,
        cachePool: $x(),
        transitions: null
      };
    }
    function tw(e, t) {
      var a = null;
      return {
        baseLanes: xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function nw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return fg(e, jd);
    }
    function rw(e, t) {
      return To(e.childLanes, t);
    }
    function uC(e, t, a) {
      var i = t.pendingProps;
      dk(t) && (t.flags |= Se);
      var u = qa.current, s = !1, f = (t.flags & Se) !== ce;
      if (f || nw(u, e) ? (s = !0, t.flags &= ~Se) : (e === null || e.memoizedState !== null) && (u = Ex(u, v1)), u = Fc(u), bu(t, u), e === null) {
        Qy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return ow(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = aw(t, m, y, a), E = t.child;
          return E.memoizedState = cS(a), t.memoizedState = sS, R;
        } else
          return fS(t, m);
      } else {
        var b = e.memoizedState;
        if (b !== null) {
          var M = b.dehydrated;
          if (M !== null)
            return sw(e, t, f, i, M, b, a);
        }
        if (s) {
          var L = i.fallback, $ = i.children, fe = lw(e, t, $, L, a), ie = t.child, Fe = e.child.memoizedState;
          return ie.memoizedState = Fe === null ? cS(a) : tw(Fe, a), ie.childLanes = rw(e, a), t.memoizedState = sS, fe;
        } else {
          var Ne = i.children, w = iw(e, t, Ne, a);
          return t.memoizedState = null, w;
        }
      }
    }
    function fS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = dS(u, i);
      return s.return = e, e.child = s, s;
    }
    function aw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ae) === ne && s !== null ? (p = s, p.childLanes = U, p.pendingProps = f, e.mode & Ce && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Au(a, u, i, null)) : (p = dS(f, u), v = Au(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function dS(e, t, a) {
      return oE(e, t, U, null);
    }
    function oC(e, t) {
      return Zo(e, t);
    }
    function iw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = oC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ae) === ne && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ye) : p.push(s);
      }
      return t.child = f, f;
    }
    function lw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ae) === ne && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = U, m.pendingProps = v, t.mode & Ce && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = oC(f, v), m.subtreeFlags = f.subtreeFlags & tn;
      var R;
      return p !== null ? R = Zo(p, i) : (R = Au(i, s, u, null), R.flags |= ot), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function am(e, t, a, i) {
      i !== null && Iy(i), zc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = fS(t, s);
      return f.flags |= ot, t.memoizedState = null, f;
    }
    function uw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = dS(f, s), v = Au(i, s, u, null);
      return v.flags |= ot, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ae) !== ne && zc(t, e.child, null, u), v;
    }
    function ow(e, t, a) {
      return (e.mode & ae) === ne ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = oe) : My(t) ? e.lanes = Pa : e.lanes = Sn, null;
    }
    function sw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rt) {
          t.flags &= ~Rt;
          var w = Zg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return am(e, t, f, w);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Se, null;
          var O = i.children, D = i.fallback, j = uw(e, t, O, D, f), X = t.child;
          return X.memoizedState = cS(f), t.memoizedState = sS, j;
        }
      else {
        if (qR(), (t.mode & ae) === ne)
          return am(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (My(u)) {
          var p, v, m;
          {
            var y = pR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = Zg(R, p, m);
          return am(e, t, f, E);
        }
        var b = qn(f, e.childLanes);
        if (Ja || b) {
          var M = hm();
          if (M !== null) {
            var L = Mv(M, f);
            if (L !== Ht && L !== s.retryLane) {
              s.retryLane = L;
              var $ = it;
              Pr(e, L), dn(M, e, L, $);
            }
          }
          NS();
          var fe = Zg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return am(e, t, f, fe);
        } else if (L0(u)) {
          t.flags |= Se, t.child = e.child;
          var ie = zD.bind(null, e);
          return vR(u, ie), null;
        } else {
          JR(t, u, s.treeContext);
          var Fe = i.children, Ne = fS(t, Fe);
          return Ne.flags |= Mr, Ne;
        }
      }
    }
    function sC(e, t, a) {
      e.lanes = xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = xe(i.lanes, t)), ng(e.return, t, a);
    }
    function cw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ue) {
          var u = i.memoizedState;
          u !== null && sC(i, a, e);
        } else if (i.tag === at)
          sC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function fw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Ah(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function dw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !iS[e])
        if (iS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function pw(e, t) {
      e !== void 0 && !rm[e] && (e !== "collapsed" && e !== "hidden" ? (rm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (rm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function cC(e, t) {
      {
        var a = Gt(e), i = !a && typeof La(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function vw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Gt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!cC(e[a], a))
              return;
        } else {
          var i = La(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!cC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function pS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function fC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      dw(u), pw(s, u), vw(f, u), pr(e, t, f, a);
      var p = qa.current, v = fg(p, jd);
      if (v)
        p = dg(p, jd), t.flags |= Se;
      else {
        var m = e !== null && (e.flags & Se) !== ce;
        m && cw(t, t.child, a), p = Fc(p);
      }
      if (bu(t, p), (t.mode & ae) === ne)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = fw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), pS(
              t,
              !1,
              // isBackwards
              R,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var E = null, b = t.child;
            for (t.child = null; b !== null; ) {
              var M = b.alternate;
              if (M !== null && Ah(M) === null) {
                t.child = b;
                break;
              }
              var L = b.sibling;
              b.sibling = E, E = b, b = L;
            }
            pS(
              t,
              !0,
              // isBackwards
              E,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            pS(
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
    function hw(e, t, a) {
      og(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = zc(t, null, i, a) : pr(e, t, i, a), t.child;
    }
    var dC = !1;
    function mw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || dC || (dC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ga(v, s, "prop", "Context.Provider");
      }
      if (a1(t, u, p), f !== null) {
        var m = f.value;
        if (J(m, p)) {
          if (f.children === s.children && !ph())
            return El(e, t, a);
        } else
          dx(t, u, a);
      }
      var y = s.children;
      return pr(e, t, y, a), t.child;
    }
    var pC = !1;
    function yw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (pC || (pC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ac(t, a);
      var f = Jt(i);
      Gl(t);
      var p;
      return Wd.current = t, na(!0), p = s(f), na(!1), Gn(), t.flags |= yi, pr(e, t, p, a), t.child;
    }
    function Kd() {
      Ja = !0;
    }
    function im(e, t) {
      (t.mode & ae) === ne && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ot);
    }
    function El(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), P1(), sp(t.lanes), qn(a, t.childLanes) ? (cx(e, t), t.child) : null;
    }
    function gw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ye) : s.push(e), a.flags |= ot, a;
      }
    }
    function vS(e, t) {
      var a = e.lanes;
      return !!qn(a, t);
    }
    function Sw(e, t, a) {
      switch (t.tag) {
        case le:
          iC(t), t.stateNode, Nc();
          break;
        case ue:
          d1(t);
          break;
        case de: {
          var i = t.type;
          Mi(i) && hh(t);
          break;
        }
        case me:
          og(t, t.stateNode.containerInfo);
          break;
        case pn: {
          var u = t.memoizedProps.value, s = t.type._context;
          a1(t, s, u);
          break;
        }
        case ut:
          {
            var f = qn(a, t.childLanes);
            f && (t.flags |= De);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ue: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return bu(t, Fc(qa.current)), t.flags |= Se, null;
            var m = t.child, y = m.childLanes;
            if (qn(a, y))
              return uC(e, t, a);
            bu(t, Fc(qa.current));
            var R = El(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            bu(t, Fc(qa.current));
          break;
        }
        case at: {
          var E = (e.flags & Se) !== ce, b = qn(a, t.childLanes);
          if (E) {
            if (b)
              return fC(e, t, a);
            t.flags |= Se;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), bu(t, qa.current), b)
            break;
          return null;
        }
        case Ae:
        case Xe:
          return t.lanes = U, nC(e, t, a);
      }
      return El(e, t, a);
    }
    function vC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return gw(e, t, $S(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || ph() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ja = !0;
        else {
          var s = vS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Se) === ce)
            return Ja = !1, Sw(e, t, a);
          (e.flags & fo) !== ce ? Ja = !0 : Ja = !1;
        }
      } else if (Ja = !1, kn() && $R(t)) {
        var f = t.index, p = QR();
        P0(t, p, f);
      }
      switch (t.lanes = U, t.tag) {
        case en:
          return ew(e, t, t.type, a);
        case Tn: {
          var v = t.elementType;
          return Zx(e, t, v, a);
        }
        case we: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : Za(m, y);
          return lS(e, t, m, R, a);
        }
        case de: {
          var E = t.type, b = t.pendingProps, M = t.elementType === E ? b : Za(E, b);
          return aC(e, t, E, M, a);
        }
        case le:
          return Xx(e, t, a);
        case ue:
          return qx(e, t, a);
        case _e:
          return Kx(e, t);
        case Ue:
          return uC(e, t, a);
        case me:
          return hw(e, t, a);
        case ze: {
          var L = t.type, $ = t.pendingProps, fe = t.elementType === L ? $ : Za(L, $);
          return J1(e, t, L, fe, a);
        }
        case tt:
          return Ix(e, t, a);
        case lt:
          return Gx(e, t, a);
        case ut:
          return Wx(e, t, a);
        case pn:
          return mw(e, t, a);
        case Wr:
          return yw(e, t, a);
        case ht: {
          var ie = t.type, Fe = t.pendingProps, Ne = Za(ie, Fe);
          if (t.type !== t.elementType) {
            var w = ie.propTypes;
            w && Ga(
              w,
              Ne,
              // Resolved for outer only
              "prop",
              We(ie)
            );
          }
          return Ne = Za(ie.type, Ne), eC(e, t, ie, Ne, a);
        }
        case be:
          return tC(e, t, t.type, t.pendingProps, a);
        case rr: {
          var O = t.type, D = t.pendingProps, j = t.elementType === O ? D : Za(O, D);
          return Jx(e, t, O, j, a);
        }
        case at:
          return fC(e, t, a);
        case Hn:
          break;
        case Ae:
          return nC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function $c(e) {
      e.flags |= De;
    }
    function hC(e) {
      e.flags |= Pn, e.flags |= Hf;
    }
    var mC, hS, yC, gC;
    mC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === _e)
          BT(e, u.stateNode);
        else if (u.tag !== me) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, hS = function(e, t) {
    }, yC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = sg(), v = YT(f, a, s, i, u, p);
        t.updateQueue = v, v && $c(t);
      }
    }, gC = function(e, t, a, i) {
      a !== i && $c(t);
    };
    function Zd(e, t) {
      if (!kn())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function _n(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = U, i = ce;
      if (t) {
        if ((e.mode & Ce) !== ne) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = xe(a, xe(m.lanes, m.childLanes)), i |= m.subtreeFlags & tn, i |= m.flags & tn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = xe(a, xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & tn, i |= y.flags & tn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ce) !== ne) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = xe(a, xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = xe(a, xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Cw(e, t, a) {
      if (ax() && (t.mode & ae) !== ne && (t.flags & Se) === ce)
        return X0(t), Nc(), t.flags |= Rt | ur | Xt, !1;
      var i = Ch(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (nx(t), _n(t), (t.mode & Ce) !== ne) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Nc(), (t.flags & Se) === ce && (t.memoizedState = null), t.flags |= De, _n(t), (t.mode & Ce) !== ne) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return q0(), !0;
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      switch (By(t), t.tag) {
        case en:
        case Tn:
        case be:
        case we:
        case ze:
        case tt:
        case lt:
        case ut:
        case Wr:
        case ht:
          return _n(t), null;
        case de: {
          var u = t.type;
          return Mi(u) && vh(t), _n(t), null;
        }
        case le: {
          var s = t.stateNode;
          if (Hc(t), Hy(t), vg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ch(t);
            if (f)
              $c(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rt) !== ce) && (t.flags |= _r, q0());
            }
          }
          return hS(e, t), _n(t), null;
        }
        case ue: {
          cg(t);
          var v = f1(), m = t.type;
          if (e !== null && t.stateNode != null)
            yC(e, t, m, i, v), e.ref !== t.ref && hC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return _n(t), null;
            }
            var y = sg(), R = Ch(t);
            if (R)
              ex(t, v, y) && $c(t);
            else {
              var E = VT(m, i, v, y, t);
              mC(E, t, !1, !1), t.stateNode = E, PT(E, m, i, v) && $c(t);
            }
            t.ref !== null && hC(t);
          }
          return _n(t), null;
        }
        case _e: {
          var b = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            gC(e, t, M, b);
          } else {
            if (typeof b != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var L = f1(), $ = sg(), fe = Ch(t);
            fe ? tx(t) && $c(t) : t.stateNode = $T(b, L, $, t);
          }
          return _n(t), null;
        }
        case Ue: {
          jc(t);
          var ie = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Fe = Cw(e, t, ie);
            if (!Fe)
              return t.flags & Xt ? t : null;
          }
          if ((t.flags & Se) !== ce)
            return t.lanes = a, (t.mode & Ce) !== ne && jg(t), t;
          var Ne = ie !== null, w = e !== null && e.memoizedState !== null;
          if (Ne !== w && Ne) {
            var O = t.child;
            if (O.flags |= gi, (t.mode & ae) !== ne) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ie);
              D || fg(qa.current, v1) ? ED() : NS();
            }
          }
          var j = t.updateQueue;
          if (j !== null && (t.flags |= De), _n(t), (t.mode & Ce) !== ne && Ne) {
            var X = t.child;
            X !== null && (t.treeBaseDuration -= X.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Hc(t), hS(e, t), e === null && HR(t.stateNode.containerInfo), _n(t), null;
        case pn:
          var I = t.type._context;
          return tg(I, t), _n(t), null;
        case rr: {
          var ge = t.type;
          return Mi(ge) && vh(t), _n(t), null;
        }
        case at: {
          jc(t);
          var Te = t.memoizedState;
          if (Te === null)
            return _n(t), null;
          var Je = (t.flags & Se) !== ce, Be = Te.rendering;
          if (Be === null)
            if (Je)
              Zd(Te, !1);
            else {
              var It = RD() && (e === null || (e.flags & Se) === ce);
              if (!It)
                for (var Pe = t.child; Pe !== null; ) {
                  var Ft = Ah(Pe);
                  if (Ft !== null) {
                    Je = !0, t.flags |= Se, Zd(Te, !1);
                    var tr = Ft.updateQueue;
                    return tr !== null && (t.updateQueue = tr, t.flags |= De), t.subtreeFlags = ce, fx(t, a), bu(t, dg(qa.current, jd)), t.child;
                  }
                  Pe = Pe.sibling;
                }
              Te.tail !== null && mt() > VC() && (t.flags |= Se, Je = !0, Zd(Te, !1), t.lanes = Sv);
            }
          else {
            if (!Je) {
              var zn = Ah(Be);
              if (zn !== null) {
                t.flags |= Se, Je = !0;
                var sa = zn.updateQueue;
                if (sa !== null && (t.updateQueue = sa, t.flags |= De), Zd(Te, !0), Te.tail === null && Te.tailMode === "hidden" && !Be.alternate && !kn())
                  return _n(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mt() * 2 - Te.renderingStartTime > VC() && a !== Sn && (t.flags |= Se, Je = !0, Zd(Te, !1), t.lanes = Sv);
            }
            if (Te.isBackwards)
              Be.sibling = t.child, t.child = Be;
            else {
              var mr = Te.last;
              mr !== null ? mr.sibling = Be : t.child = Be, Te.last = Be;
            }
          }
          if (Te.tail !== null) {
            var yr = Te.tail;
            Te.rendering = yr, Te.tail = yr.sibling, Te.renderingStartTime = mt(), yr.sibling = null;
            var nr = qa.current;
            return Je ? nr = dg(nr, jd) : nr = Fc(nr), bu(t, nr), yr;
          }
          return _n(t), null;
        }
        case Hn:
          break;
        case Ae:
        case Xe: {
          OS(t);
          var Dl = t.memoizedState, Zc = Dl !== null;
          if (e !== null) {
            var vp = e.memoizedState, Fi = vp !== null;
            Fi !== Zc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !K && (t.flags |= gi);
          }
          return !Zc || (t.mode & ae) === ne ? _n(t) : qn(Hi, Sn) && (_n(t), t.subtreeFlags & (ot | De) && (t.flags |= gi)), null;
        }
        case Sr:
          return null;
        case St:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ew(e, t, a) {
      switch (By(t), t.tag) {
        case de: {
          var i = t.type;
          Mi(i) && vh(t);
          var u = t.flags;
          return u & Xt ? (t.flags = u & ~Xt | Se, (t.mode & Ce) !== ne && jg(t), t) : null;
        }
        case le: {
          t.stateNode, Hc(t), Hy(t), vg();
          var s = t.flags;
          return (s & Xt) !== ce && (s & Se) === ce ? (t.flags = s & ~Xt | Se, t) : null;
        }
        case ue:
          return cg(t), null;
        case Ue: {
          jc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Nc();
          }
          var p = t.flags;
          return p & Xt ? (t.flags = p & ~Xt | Se, (t.mode & Ce) !== ne && jg(t), t) : null;
        }
        case at:
          return jc(t), null;
        case me:
          return Hc(t), null;
        case pn:
          var v = t.type._context;
          return tg(v, t), null;
        case Ae:
        case Xe:
          return OS(t), null;
        case Sr:
          return null;
        default:
          return null;
      }
    }
    function CC(e, t, a) {
      switch (By(t), t.tag) {
        case de: {
          var i = t.type.childContextTypes;
          i != null && vh(t);
          break;
        }
        case le: {
          t.stateNode, Hc(t), Hy(t), vg();
          break;
        }
        case ue: {
          cg(t);
          break;
        }
        case me:
          Hc(t);
          break;
        case Ue:
          jc(t);
          break;
        case at:
          jc(t);
          break;
        case pn:
          var u = t.type._context;
          tg(u, t);
          break;
        case Ae:
        case Xe:
          OS(t);
          break;
      }
    }
    var EC = null;
    EC = /* @__PURE__ */ new Set();
    var lm = !1, Mn = !1, Tw = typeof WeakSet == "function" ? WeakSet : Set, ee = null, Qc = null, Ic = null;
    function Rw(e) {
      Ki(null, function() {
        throw e;
      }), Uf();
    }
    var xw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ce)
        try {
          Ui(), t.componentWillUnmount();
        } finally {
          zi(e);
        }
      else
        t.componentWillUnmount();
    };
    function TC(e, t) {
      try {
        Lu(ln, e);
      } catch (a) {
        ft(e, t, a);
      }
    }
    function mS(e, t, a) {
      try {
        xw(e, a);
      } catch (i) {
        ft(e, t, i);
      }
    }
    function ww(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        ft(e, t, i);
      }
    }
    function RC(e, t) {
      try {
        wC(e);
      } catch (a) {
        ft(e, t, a);
      }
    }
    function Gc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Rn && ii && e.mode & Ce)
              try {
                Ui(), i = a(null);
              } finally {
                zi(e);
              }
            else
              i = a(null);
          } catch (u) {
            ft(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Re(e));
        } else
          a.current = null;
    }
    function um(e, t, a) {
      try {
        a();
      } catch (i) {
        ft(e, t, i);
      }
    }
    var xC = !1;
    function Dw(e, t) {
      FT(e.containerInfo), ee = t, kw();
      var a = xC;
      return xC = !1, a;
    }
    function kw() {
      for (; ee !== null; ) {
        var e = ee, t = e.child;
        (e.subtreeFlags & $l) !== ce && t !== null ? (t.return = e, ee = t) : bw();
      }
    }
    function bw() {
      for (; ee !== null; ) {
        var e = ee;
        Ke(e);
        try {
          _w(e);
        } catch (a) {
          ft(e, e.return, a);
        }
        Vt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ee = t;
          return;
        }
        ee = e.return;
      }
    }
    function _w(e) {
      var t = e.alternate, a = e.flags;
      if ((a & _r) !== ce) {
        switch (Ke(e), e.tag) {
          case we:
          case ze:
          case be:
            break;
          case de: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Go && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Za(e.type, i), u);
              {
                var p = EC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Re(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case le: {
            {
              var v = e.stateNode;
              sR(v.containerInfo);
            }
            break;
          }
          case ue:
          case _e:
          case me:
          case rr:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Vt();
      }
    }
    function ei(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & bn) !== Yr ? mv(t) : (e & ln) !== Yr && la(t), (e & Li) !== Yr && fp(!0), um(t, a, p), (e & Li) !== Yr && fp(!1), (e & bn) !== Yr ? Ns() : (e & ln) !== Yr && Wl());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Lu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & bn) !== Yr ? Ei(t) : (e & ln) !== Yr && yv(t);
            var f = s.create;
            (e & Li) !== Yr && fp(!0), s.destroy = f(), (e & Li) !== Yr && fp(!1), (e & bn) !== Yr ? Os() : (e & ln) !== Yr && po();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ln) !== ce ? v = "useLayoutEffect" : (s.tag & Li) !== ce ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Mw(e, t) {
      if ((t.flags & De) !== ce)
        switch (t.tag) {
          case ut: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = V1(), p = t.alternate === null ? "mount" : "update";
            j1() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case le:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case ut:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Lw(e, t, a, i) {
      if ((a.flags & yn) !== ce)
        switch (a.tag) {
          case we:
          case ze:
          case be: {
            if (!Mn)
              if (a.mode & Ce)
                try {
                  Ui(), Lu(ln | an, a);
                } finally {
                  zi(a);
                }
              else
                Lu(ln | an, a);
            break;
          }
          case de: {
            var u = a.stateNode;
            if (a.flags & De && !Mn)
              if (t === null)
                if (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), a.mode & Ce)
                  try {
                    Ui(), u.componentDidMount();
                  } finally {
                    zi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Za(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), a.mode & Ce)
                  try {
                    Ui(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    zi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), c1(a, p, u));
            break;
          }
          case le: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    m = a.child.stateNode;
                    break;
                  case de:
                    m = a.child.stateNode;
                    break;
                }
              c1(a, v, m);
            }
            break;
          }
          case ue: {
            var y = a.stateNode;
            if (t === null && a.flags & De) {
              var R = a.type, E = a.memoizedProps;
              XT(y, R, E);
            }
            break;
          }
          case _e:
            break;
          case me:
            break;
          case ut: {
            {
              var b = a.memoizedProps, M = b.onCommit, L = b.onRender, $ = a.stateNode.effectDuration, fe = V1(), ie = t === null ? "mount" : "update";
              j1() && (ie = "nested-update"), typeof L == "function" && L(a.memoizedProps.id, ie, a.actualDuration, a.treeBaseDuration, a.actualStartTime, fe);
              {
                typeof M == "function" && M(a.memoizedProps.id, ie, $, fe), bD(a);
                var Fe = a.return;
                e:
                  for (; Fe !== null; ) {
                    switch (Fe.tag) {
                      case le:
                        var Ne = Fe.stateNode;
                        Ne.effectDuration += $;
                        break e;
                      case ut:
                        var w = Fe.stateNode;
                        w.effectDuration += $;
                        break e;
                    }
                    Fe = Fe.return;
                  }
              }
            }
            break;
          }
          case Ue: {
            jw(e, a);
            break;
          }
          case at:
          case rr:
          case Hn:
          case Ae:
          case Xe:
          case St:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mn || a.flags & Pn && wC(a);
    }
    function Ow(e) {
      switch (e.tag) {
        case we:
        case ze:
        case be: {
          if (e.mode & Ce)
            try {
              Ui(), TC(e, e.return);
            } finally {
              zi(e);
            }
          else
            TC(e, e.return);
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ww(e, e.return, t), RC(e, e.return);
          break;
        }
        case ue: {
          RC(e, e.return);
          break;
        }
      }
    }
    function Nw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? iR(u) : uR(i.stateNode, i.memoizedProps);
            } catch (f) {
              ft(e, e.return, f);
            }
          }
        } else if (i.tag === _e) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? lR(s) : oR(s, i.memoizedProps);
            } catch (f) {
              ft(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function wC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ce)
            try {
              Ui(), u = t(i);
            } finally {
              zi(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Re(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Re(e)), t.current = i;
      }
    }
    function zw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function DC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, DC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && VR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Uw(e) {
      for (var t = e.return; t !== null; ) {
        if (kC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kC(e) {
      return e.tag === ue || e.tag === le || e.tag === me;
    }
    function bC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || kC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== _e && t.tag !== Ot; ) {
            if (t.flags & ot || t.child === null || t.tag === me)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ot))
            return t.stateNode;
        }
    }
    function Aw(e) {
      var t = Uw(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & $e && (M0(a), t.flags &= ~$e);
          var i = bC(e);
          gS(e, i, a);
          break;
        }
        case le:
        case me: {
          var u = t.stateNode.containerInfo, s = bC(e);
          yS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function yS(e, t, a) {
      var i = e.tag, u = i === ue || i === _e;
      if (u) {
        var s = e.stateNode;
        t ? tR(a, s, t) : JT(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          yS(f, t, a);
          for (var p = f.sibling; p !== null; )
            yS(p, t, a), p = p.sibling;
        }
      }
    }
    function gS(e, t, a) {
      var i = e.tag, u = i === ue || i === _e;
      if (u) {
        var s = e.stateNode;
        t ? eR(a, s, t) : ZT(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          gS(f, t, a);
          for (var p = f.sibling; p !== null; )
            gS(p, t, a), p = p.sibling;
        }
      }
    }
    var Ln = null, ti = !1;
    function Hw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ue: {
                Ln = i.stateNode, ti = !1;
                break e;
              }
              case le: {
                Ln = i.stateNode.containerInfo, ti = !0;
                break e;
              }
              case me: {
                Ln = i.stateNode.containerInfo, ti = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ln === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        _C(e, t, a), Ln = null, ti = !1;
      }
      zw(a);
    }
    function Ou(e, t, a) {
      for (var i = a.child; i !== null; )
        _C(e, t, i), i = i.sibling;
    }
    function _C(e, t, a) {
      switch (el(a), a.tag) {
        case ue:
          Mn || Gc(a, t);
        case _e: {
          {
            var i = Ln, u = ti;
            Ln = null, Ou(e, t, a), Ln = i, ti = u, Ln !== null && (ti ? rR(Ln, a.stateNode) : nR(Ln, a.stateNode));
          }
          return;
        }
        case Ot: {
          Ln !== null && (ti ? aR(Ln, a.stateNode) : _y(Ln, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Ln, f = ti;
            Ln = a.stateNode.containerInfo, ti = !0, Ou(e, t, a), Ln = s, ti = f;
          }
          return;
        }
        case we:
        case ze:
        case ht:
        case be: {
          if (!Mn) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, b = R.tag;
                  E !== void 0 && ((b & Li) !== Yr ? um(a, t, E) : (b & ln) !== Yr && (la(a), a.mode & Ce ? (Ui(), um(a, t, E), zi(a)) : um(a, t, E), Wl())), y = y.next;
                } while (y !== m);
              }
            }
          }
          Ou(e, t, a);
          return;
        }
        case de: {
          if (!Mn) {
            Gc(a, t);
            var M = a.stateNode;
            typeof M.componentWillUnmount == "function" && mS(a, t, M);
          }
          Ou(e, t, a);
          return;
        }
        case Hn: {
          Ou(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & ae
          ) {
            var L = Mn;
            Mn = L || a.memoizedState !== null, Ou(e, t, a), Mn = L;
          } else
            Ou(e, t, a);
          break;
        }
        default: {
          Ou(e, t, a);
          return;
        }
      }
    }
    function Fw(e) {
      e.memoizedState;
    }
    function jw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && RR(s);
          }
        }
      }
    }
    function MC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Tw()), t.forEach(function(i) {
          var u = UD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), cr)
              if (Qc !== null && Ic !== null)
                cp(Ic, Qc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Vw(e, t, a) {
      Qc = a, Ic = e, Ke(t), LC(t, e), Ke(t), Qc = null, Ic = null;
    }
    function ni(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Hw(e, t, s);
          } catch (v) {
            ft(s, t, v);
          }
        }
      var f = Mm();
      if (t.subtreeFlags & Qn)
        for (var p = t.child; p !== null; )
          Ke(p), LC(p, e), p = p.sibling;
      Ke(f);
    }
    function LC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case we:
        case ze:
        case ht:
        case be: {
          if (ni(t, e), Ai(e), u & De) {
            try {
              ei(Li | an, e, e.return), Lu(Li | an, e);
            } catch (ge) {
              ft(e, e.return, ge);
            }
            if (e.mode & Ce) {
              try {
                Ui(), ei(ln | an, e, e.return);
              } catch (ge) {
                ft(e, e.return, ge);
              }
              zi(e);
            } else
              try {
                ei(ln | an, e, e.return);
              } catch (ge) {
                ft(e, e.return, ge);
              }
          }
          return;
        }
        case de: {
          ni(t, e), Ai(e), u & Pn && i !== null && Gc(i, i.return);
          return;
        }
        case ue: {
          ni(t, e), Ai(e), u & Pn && i !== null && Gc(i, i.return);
          {
            if (e.flags & $e) {
              var s = e.stateNode;
              try {
                M0(s);
              } catch (ge) {
                ft(e, e.return, ge);
              }
            }
            if (u & De) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    qT(f, y, m, v, p, e);
                  } catch (ge) {
                    ft(e, e.return, ge);
                  }
              }
            }
          }
          return;
        }
        case _e: {
          if (ni(t, e), Ai(e), u & De) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, b = i !== null ? i.memoizedProps : E;
            try {
              KT(R, b, E);
            } catch (ge) {
              ft(e, e.return, ge);
            }
          }
          return;
        }
        case le: {
          if (ni(t, e), Ai(e), u & De && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                TR(t.containerInfo);
              } catch (ge) {
                ft(e, e.return, ge);
              }
          }
          return;
        }
        case me: {
          ni(t, e), Ai(e);
          return;
        }
        case Ue: {
          ni(t, e), Ai(e);
          var L = e.child;
          if (L.flags & gi) {
            var $ = L.stateNode, fe = L.memoizedState, ie = fe !== null;
            if ($.isHidden = ie, ie) {
              var Fe = L.alternate !== null && L.alternate.memoizedState !== null;
              Fe || CD();
            }
          }
          if (u & De) {
            try {
              Fw(e);
            } catch (ge) {
              ft(e, e.return, ge);
            }
            MC(e);
          }
          return;
        }
        case Ae: {
          var Ne = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ae
          ) {
            var w = Mn;
            Mn = w || Ne, ni(t, e), Mn = w;
          } else
            ni(t, e);
          if (Ai(e), u & gi) {
            var O = e.stateNode, D = e.memoizedState, j = D !== null, X = e;
            if (O.isHidden = j, j && !Ne && (X.mode & ae) !== ne) {
              ee = X;
              for (var I = X.child; I !== null; )
                ee = I, Pw(I), I = I.sibling;
            }
            Nw(X, j);
          }
          return;
        }
        case at: {
          ni(t, e), Ai(e), u & De && MC(e);
          return;
        }
        case Hn:
          return;
        default: {
          ni(t, e), Ai(e);
          return;
        }
      }
    }
    function Ai(e) {
      var t = e.flags;
      if (t & ot) {
        try {
          Aw(e);
        } catch (a) {
          ft(e, e.return, a);
        }
        e.flags &= ~ot;
      }
      t & Mr && (e.flags &= ~Mr);
    }
    function Bw(e, t, a) {
      Qc = a, Ic = t, ee = e, OC(e, t, a), Qc = null, Ic = null;
    }
    function OC(e, t, a) {
      for (var i = (e.mode & ae) !== ne; ee !== null; ) {
        var u = ee, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || lm;
          if (p) {
            SS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Mn, R = lm, E = Mn;
            lm = p, Mn = y, Mn && !E && (ee = u, Yw(u));
            for (var b = s; b !== null; )
              ee = b, OC(
                b,
                // New root; bubble back up to here and stop.
                t,
                a
              ), b = b.sibling;
            ee = u, lm = R, Mn = E, SS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yn) !== ce && s !== null ? (s.return = u, ee = s) : SS(e, t, a);
      }
    }
    function SS(e, t, a) {
      for (; ee !== null; ) {
        var i = ee;
        if ((i.flags & yn) !== ce) {
          var u = i.alternate;
          Ke(i);
          try {
            Lw(t, u, i, a);
          } catch (f) {
            ft(i, i.return, f);
          }
          Vt();
        }
        if (i === e) {
          ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ee = s;
          return;
        }
        ee = i.return;
      }
    }
    function Pw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.child;
        switch (t.tag) {
          case we:
          case ze:
          case ht:
          case be: {
            if (t.mode & Ce)
              try {
                Ui(), ei(ln, t, t.return);
              } finally {
                zi(t);
              }
            else
              ei(ln, t, t.return);
            break;
          }
          case de: {
            Gc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && mS(t, t.return, i);
            break;
          }
          case ue: {
            Gc(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              NC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ee = a) : NC(e);
      }
    }
    function NC(e) {
      for (; ee !== null; ) {
        var t = ee;
        if (t === e) {
          ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ee = a;
          return;
        }
        ee = t.return;
      }
    }
    function Yw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            zC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ee = a) : zC(e);
      }
    }
    function zC(e) {
      for (; ee !== null; ) {
        var t = ee;
        Ke(t);
        try {
          Ow(t);
        } catch (i) {
          ft(t, t.return, i);
        }
        if (Vt(), t === e) {
          ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ee = a;
          return;
        }
        ee = t.return;
      }
    }
    function $w(e, t, a, i) {
      ee = t, Qw(t, e, a, i);
    }
    function Qw(e, t, a, i) {
      for (; ee !== null; ) {
        var u = ee, s = u.child;
        (u.subtreeFlags & Lr) !== ce && s !== null ? (s.return = u, ee = s) : Iw(e, t, a, i);
      }
    }
    function Iw(e, t, a, i) {
      for (; ee !== null; ) {
        var u = ee;
        if ((u.flags & dt) !== ce) {
          Ke(u);
          try {
            Gw(t, u, a, i);
          } catch (f) {
            ft(u, u.return, f);
          }
          Vt();
        }
        if (u === e) {
          ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ee = s;
          return;
        }
        ee = u.return;
      }
    }
    function Gw(e, t, a, i) {
      switch (t.tag) {
        case we:
        case ze:
        case be: {
          if (t.mode & Ce) {
            Fg();
            try {
              Lu(bn | an, t);
            } finally {
              Hg(t);
            }
          } else
            Lu(bn | an, t);
          break;
        }
      }
    }
    function Ww(e) {
      ee = e, Xw();
    }
    function Xw() {
      for (; ee !== null; ) {
        var e = ee, t = e.child;
        if ((ee.flags & Ye) !== ce) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ee = u, Zw(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ee = e;
          }
        }
        (e.subtreeFlags & Lr) !== ce && t !== null ? (t.return = e, ee = t) : qw();
      }
    }
    function qw() {
      for (; ee !== null; ) {
        var e = ee;
        (e.flags & dt) !== ce && (Ke(e), Kw(e), Vt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ee = t;
          return;
        }
        ee = e.return;
      }
    }
    function Kw(e) {
      switch (e.tag) {
        case we:
        case ze:
        case be: {
          e.mode & Ce ? (Fg(), ei(bn | an, e, e.return), Hg(e)) : ei(bn | an, e, e.return);
          break;
        }
      }
    }
    function Zw(e, t) {
      for (; ee !== null; ) {
        var a = ee;
        Ke(a), eD(a, t), Vt();
        var i = a.child;
        i !== null ? (i.return = a, ee = i) : Jw(e);
      }
    }
    function Jw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.sibling, i = t.return;
        if (DC(t), t === e) {
          ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, ee = a;
          return;
        }
        ee = i;
      }
    }
    function eD(e, t) {
      switch (e.tag) {
        case we:
        case ze:
        case be: {
          e.mode & Ce ? (Fg(), ei(bn, e, t), Hg(e)) : ei(bn, e, t);
          break;
        }
      }
    }
    function tD(e) {
      switch (e.tag) {
        case we:
        case ze:
        case be: {
          try {
            Lu(ln | an, e);
          } catch (a) {
            ft(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            ft(e, e.return, a);
          }
          break;
        }
      }
    }
    function nD(e) {
      switch (e.tag) {
        case we:
        case ze:
        case be: {
          try {
            Lu(bn | an, e);
          } catch (t) {
            ft(e, e.return, t);
          }
          break;
        }
      }
    }
    function rD(e) {
      switch (e.tag) {
        case we:
        case ze:
        case be: {
          try {
            ei(ln | an, e, e.return);
          } catch (a) {
            ft(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && mS(e, e.return, t);
          break;
        }
      }
    }
    function aD(e) {
      switch (e.tag) {
        case we:
        case ze:
        case be:
          try {
            ei(bn | an, e, e.return);
          } catch (t) {
            ft(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Jd = Symbol.for;
      Jd("selector.component"), Jd("selector.has_pseudo_class"), Jd("selector.role"), Jd("selector.test_id"), Jd("selector.text");
    }
    var iD = [];
    function lD() {
      iD.forEach(function(e) {
        return e();
      });
    }
    var uD = N.ReactCurrentActQueue;
    function oD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function UC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && uD.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var sD = Math.ceil, CS = N.ReactCurrentDispatcher, ES = N.ReactCurrentOwner, On = N.ReactCurrentBatchConfig, ri = N.ReactCurrentActQueue, sn = (
      /*             */
      0
    ), AC = (
      /*               */
      1
    ), Nn = (
      /*                */
      2
    ), Da = (
      /*                */
      4
    ), Tl = 0, ep = 1, Wo = 2, om = 3, tp = 4, HC = 5, TS = 6, He = sn, vr = null, Lt = null, cn = U, Hi = U, RS = Tu(U), fn = Tl, np = null, sm = U, rp = U, cm = U, ap = null, $r = null, xS = 0, FC = 500, jC = 1 / 0, cD = 500, Rl = null;
    function ip() {
      jC = mt() + cD;
    }
    function VC() {
      return jC;
    }
    var fm = !1, wS = null, Wc = null, Xo = !1, Nu = null, lp = U, DS = [], kS = null, fD = 50, up = 0, bS = null, _S = !1, dm = !1, dD = 50, Xc = 0, pm = null, op = it, vm = U, BC = !1;
    function hm() {
      return vr;
    }
    function hr() {
      return (He & (Nn | Da)) !== sn ? mt() : (op !== it || (op = mt()), op);
    }
    function zu(e) {
      var t = e.mode;
      if ((t & ae) === ne)
        return oe;
      if ((He & Nn) !== sn && cn !== U)
        return ru(cn);
      var a = ux() !== lx;
      if (a) {
        if (On.transition !== null) {
          var i = On.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return vm === Ht && (vm = kv()), vm;
      }
      var u = Ar();
      if (u !== Ht)
        return u;
      var s = QT();
      return s;
    }
    function pD(e) {
      var t = e.mode;
      return (t & ae) === ne ? oe : Xn();
    }
    function dn(e, t, a, i) {
      HD(), BC && S("useInsertionEffect must not schedule updates."), _S && (dm = !0), ol(e, a, i), (He & Nn) !== U && e === vr ? VD(t) : (cr && nc(e, t, a), BD(t), e === vr && ((He & Nn) === sn && (rp = xe(rp, a)), fn === tp && Uu(e, cn)), Qr(e, i), a === oe && He === sn && (t.mode & ae) === ne && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ri.isBatchingLegacy && (ip(), B0()));
    }
    function vD(e, t, a) {
      var i = e.current;
      i.lanes = t, ol(e, t, a), Qr(e, a);
    }
    function hD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (He & Nn) !== sn
      );
    }
    function Qr(e, t) {
      var a = e.callbackNode;
      Tv(e, t);
      var i = ll(e, e === vr ? cn : U);
      if (i === U) {
        a !== null && rE(a), e.callbackNode = null, e.callbackPriority = Ht;
        return;
      }
      var u = bt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ri.current !== null && a !== AS)) {
        a == null && s !== oe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && rE(a);
      var f;
      if (u === oe)
        e.tag === Ru ? (ri.isBatchingLegacy !== null && (ri.didScheduleLegacyUpdate = !0), YR($C.bind(null, e))) : V0($C.bind(null, e)), ri.current !== null ? ri.current.push(xu) : GT(function() {
          (He & (Nn | Da)) === sn && xu();
        }), f = null;
      else {
        var p;
        switch (rn(i)) {
          case _t:
            p = _s;
            break;
          case Ya:
            p = Ji;
            break;
          case ya:
            p = ma;
            break;
          case au:
            p = Ms;
            break;
          default:
            p = ma;
            break;
        }
        f = HS(p, PC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function PC(e, t) {
      if (Nx(), op = it, vm = U, (He & (Nn | Da)) !== sn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = wl();
      if (i && e.callbackNode !== a)
        return null;
      var u = ll(e, e === vr ? cn : U);
      if (u === U)
        return null;
      var s = !Eo(e, u) && !Dv(e, u) && !t, f = s ? wD(e, u) : ym(e, u);
      if (f !== Tl) {
        if (f === Wo) {
          var p = Ri(e);
          p !== U && (u = p, f = MS(e, p));
        }
        if (f === ep) {
          var v = np;
          throw qo(e, U), Uu(e, u), Qr(e, mt()), v;
        }
        if (f === TS)
          Uu(e, u);
        else {
          var m = !Eo(e, u), y = e.current.alternate;
          if (m && !yD(y)) {
            if (f = ym(e, u), f === Wo) {
              var R = Ri(e);
              R !== U && (u = R, f = MS(e, R));
            }
            if (f === ep) {
              var E = np;
              throw qo(e, U), Uu(e, u), Qr(e, mt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, mD(e, f, u);
        }
      }
      return Qr(e, mt()), e.callbackNode === a ? PC.bind(null, e) : null;
    }
    function MS(e, t) {
      var a = ap;
      if (rc(e)) {
        var i = qo(e, t);
        i.flags |= Rt, AR(e.containerInfo);
      }
      var u = ym(e, t);
      if (u !== Wo) {
        var s = $r;
        $r = a, s !== null && YC(s);
      }
      return u;
    }
    function YC(e) {
      $r === null ? $r = e : $r.push.apply($r, e);
    }
    function mD(e, t, a) {
      switch (t) {
        case Tl:
        case ep:
          throw new Error("Root did not complete. This is a bug in React.");
        case Wo: {
          Ko(e, $r, Rl);
          break;
        }
        case om: {
          if (Uu(e, a), Rv(a) && // do not delay if we're inside an act() scope
          !aE()) {
            var i = xS + FC - mt();
            if (i > 10) {
              var u = ll(e, U);
              if (u !== U)
                break;
              var s = e.suspendedLanes;
              if (!ul(s, a)) {
                hr(), ec(e, s);
                break;
              }
              e.timeoutHandle = ky(Ko.bind(null, e, $r, Rl), i);
              break;
            }
          }
          Ko(e, $r, Rl);
          break;
        }
        case tp: {
          if (Uu(e, a), wv(a))
            break;
          if (!aE()) {
            var f = Cv(e, a), p = f, v = mt() - p, m = AD(v) - v;
            if (m > 10) {
              e.timeoutHandle = ky(Ko.bind(null, e, $r, Rl), m);
              break;
            }
          }
          Ko(e, $r, Rl);
          break;
        }
        case HC: {
          Ko(e, $r, Rl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function yD(e) {
      for (var t = e; ; ) {
        if (t.flags & co) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!J(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & co && v !== null) {
          v.return = t, t = v;
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
    function Uu(e, t) {
      t = To(t, cm), t = To(t, rp), _v(e, t);
    }
    function $C(e) {
      if (zx(), (He & (Nn | Da)) !== sn)
        throw new Error("Should not already be working.");
      wl();
      var t = ll(e, U);
      if (!qn(t, oe))
        return Qr(e, mt()), null;
      var a = ym(e, t);
      if (e.tag !== Ru && a === Wo) {
        var i = Ri(e);
        i !== U && (t = i, a = MS(e, i));
      }
      if (a === ep) {
        var u = np;
        throw qo(e, U), Uu(e, t), Qr(e, mt()), u;
      }
      if (a === TS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ko(e, $r, Rl), Qr(e, mt()), null;
    }
    function gD(e, t) {
      t !== U && (Zf(e, xe(t, oe)), Qr(e, mt()), (He & (Nn | Da)) === sn && (ip(), xu()));
    }
    function LS(e, t) {
      var a = He;
      He |= AC;
      try {
        return e(t);
      } finally {
        He = a, He === sn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ri.isBatchingLegacy && (ip(), B0());
      }
    }
    function SD(e, t, a, i, u) {
      var s = Ar(), f = On.transition;
      try {
        return On.transition = null, xt(_t), e(t, a, i, u);
      } finally {
        xt(s), On.transition = f, He === sn && ip();
      }
    }
    function xl(e) {
      Nu !== null && Nu.tag === Ru && (He & (Nn | Da)) === sn && wl();
      var t = He;
      He |= AC;
      var a = On.transition, i = Ar();
      try {
        return On.transition = null, xt(_t), e ? e() : void 0;
      } finally {
        xt(i), On.transition = a, He = t, (He & (Nn | Da)) === sn && xu();
      }
    }
    function QC() {
      return (He & (Nn | Da)) !== sn;
    }
    function mm(e, t) {
      Jn(RS, Hi, e), Hi = xe(Hi, t);
    }
    function OS(e) {
      Hi = RS.current, Zn(RS, e);
    }
    function qo(e, t) {
      e.finishedWork = null, e.finishedLanes = U;
      var a = e.timeoutHandle;
      if (a !== by && (e.timeoutHandle = by, IT(a)), Lt !== null)
        for (var i = Lt.return; i !== null; ) {
          var u = i.alternate;
          CC(u, i), i = i.return;
        }
      vr = e;
      var s = Zo(e.current, null);
      return Lt = s, cn = Hi = t, fn = Tl, np = null, sm = U, rp = U, cm = U, ap = null, $r = null, vx(), Xa.discardPendingWarnings(), s;
    }
    function IC(e, t) {
      do {
        var a = Lt;
        try {
          if (Dh(), m1(), Vt(), ES.current = null, a === null || a.return === null) {
            fn = ep, np = t, Lt = null;
            return;
          }
          if (Rn && a.mode & Ce && tm(a, !0), ai)
            if (Gn(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              tl(a, i, cn);
            } else
              vo(a, t, cn);
          Yx(e, a.return, a, t, cn), qC(a);
        } catch (u) {
          t = u, Lt === a && a !== null ? (a = a.return, Lt = a) : a = Lt;
          continue;
        }
        return;
      } while (!0);
    }
    function GC() {
      var e = CS.current;
      return CS.current = qh, e === null ? qh : e;
    }
    function WC(e) {
      CS.current = e;
    }
    function CD() {
      xS = mt();
    }
    function sp(e) {
      sm = xe(e, sm);
    }
    function ED() {
      fn === Tl && (fn = om);
    }
    function NS() {
      (fn === Tl || fn === om || fn === Wo) && (fn = tp), vr !== null && (Co(sm) || Co(rp)) && Uu(vr, cn);
    }
    function TD(e) {
      fn !== tp && (fn = Wo), ap === null ? ap = [e] : ap.push(e);
    }
    function RD() {
      return fn === Tl;
    }
    function ym(e, t) {
      var a = He;
      He |= Nn;
      var i = GC();
      if (vr !== e || cn !== t) {
        if (cr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (cp(e, cn), u.clear()), Jf(e, t);
        }
        Rl = xo(), qo(e, t);
      }
      pt(t);
      do
        try {
          xD();
          break;
        } catch (s) {
          IC(e, s);
        }
      while (!0);
      if (Dh(), He = a, WC(i), Lt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Us(), vr = null, cn = U, fn;
    }
    function xD() {
      for (; Lt !== null; )
        XC(Lt);
    }
    function wD(e, t) {
      var a = He;
      He |= Nn;
      var i = GC();
      if (vr !== e || cn !== t) {
        if (cr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (cp(e, cn), u.clear()), Jf(e, t);
        }
        Rl = xo(), ip(), qo(e, t);
      }
      pt(t);
      do
        try {
          DD();
          break;
        } catch (s) {
          IC(e, s);
        }
      while (!0);
      return Dh(), WC(i), He = a, Lt !== null ? (zs(), Tl) : (Us(), vr = null, cn = U, fn);
    }
    function DD() {
      for (; Lt !== null && !bs(); )
        XC(Lt);
    }
    function XC(e) {
      var t = e.alternate;
      Ke(e);
      var a;
      (e.mode & Ce) !== ne ? (Ag(e), a = zS(t, e, Hi), tm(e, !0)) : a = zS(t, e, Hi), Vt(), e.memoizedProps = e.pendingProps, a === null ? qC(e) : Lt = a, ES.current = null;
    }
    function qC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ur) === ce) {
          Ke(t);
          var u = void 0;
          if ((t.mode & Ce) === ne ? u = SC(a, t, Hi) : (Ag(t), u = SC(a, t, Hi), tm(t, !1)), Vt(), u !== null) {
            Lt = u;
            return;
          }
        } else {
          var s = Ew(a, t);
          if (s !== null) {
            s.flags &= sv, Lt = s;
            return;
          }
          if ((t.mode & Ce) !== ne) {
            tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ur, i.subtreeFlags = ce, i.deletions = null;
          else {
            fn = TS, Lt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Lt = v;
          return;
        }
        t = i, Lt = t;
      } while (t !== null);
      fn === Tl && (fn = HC);
    }
    function Ko(e, t, a) {
      var i = Ar(), u = On.transition;
      try {
        On.transition = null, xt(_t), kD(e, t, a, i);
      } finally {
        On.transition = u, xt(i);
      }
      return null;
    }
    function kD(e, t, a, i) {
      do
        wl();
      while (Nu !== null);
      if (FD(), (He & (Nn | Da)) !== sn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ci(s), u === null)
        return Ls(), null;
      if (s === U && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = U, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ht;
      var f = xe(u.lanes, u.childLanes);
      tc(e, f), e === vr && (vr = null, Lt = null, cn = U), ((u.subtreeFlags & Lr) !== ce || (u.flags & Lr) !== ce) && (Xo || (Xo = !0, kS = a, HS(ma, function() {
        return wl(), null;
      })));
      var p = (u.subtreeFlags & ($l | Qn | yn | Lr)) !== ce, v = (u.flags & ($l | Qn | yn | Lr)) !== ce;
      if (p || v) {
        var m = On.transition;
        On.transition = null;
        var y = Ar();
        xt(_t);
        var R = He;
        He |= Da, ES.current = null, Dw(e, u), B1(), Vw(e, u, s), jT(e.containerInfo), e.current = u, $f(s), Bw(u, e, s), Xl(), dv(), He = R, xt(y), On.transition = m;
      } else
        e.current = u, B1();
      var E = Xo;
      if (Xo ? (Xo = !1, Nu = e, lp = s) : (Xc = 0, pm = null), f = e.pendingLanes, f === U && (Wc = null), E || eE(e.current, !1), Il(u.stateNode, i), cr && e.memoizedUpdaters.clear(), lD(), Qr(e, mt()), t !== null)
        for (var b = e.onRecoverableError, M = 0; M < t.length; M++) {
          var L = t[M], $ = L.stack, fe = L.digest;
          b(L.value, {
            componentStack: $,
            digest: fe
          });
        }
      if (fm) {
        fm = !1;
        var ie = wS;
        throw wS = null, ie;
      }
      return qn(lp, oe) && e.tag !== Ru && wl(), f = e.pendingLanes, qn(f, oe) ? (Ox(), e === bS ? up++ : (up = 0, bS = e)) : up = 0, xu(), Ls(), null;
    }
    function wl() {
      if (Nu !== null) {
        var e = rn(lp), t = Zm(ya, e), a = On.transition, i = Ar();
        try {
          return On.transition = null, xt(t), _D();
        } finally {
          xt(i), On.transition = a;
        }
      }
      return !1;
    }
    function bD(e) {
      DS.push(e), Xo || (Xo = !0, HS(ma, function() {
        return wl(), null;
      }));
    }
    function _D() {
      if (Nu === null)
        return !1;
      var e = kS;
      kS = null;
      var t = Nu, a = lp;
      if (Nu = null, lp = U, (He & (Nn | Da)) !== sn)
        throw new Error("Cannot flush passive effects while already rendering.");
      _S = !0, dm = !1, gv(a);
      var i = He;
      He |= Da, Ww(t.current), $w(t, t.current, a, e);
      {
        var u = DS;
        DS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Mw(t, f);
        }
      }
      Qf(), eE(t.current, !0), He = i, xu(), dm ? t === pm ? Xc++ : (Xc = 0, pm = t) : Xc = 0, _S = !1, dm = !1, zr(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function KC(e) {
      return Wc !== null && Wc.has(e);
    }
    function MD(e) {
      Wc === null ? Wc = /* @__PURE__ */ new Set([e]) : Wc.add(e);
    }
    function LD(e) {
      fm || (fm = !0, wS = e);
    }
    var OD = LD;
    function ZC(e, t, a) {
      var i = Io(a, t), u = X1(e, i, oe), s = Du(e, u, oe), f = hr();
      s !== null && (ol(s, oe, f), Qr(s, f));
    }
    function ft(e, t, a) {
      if (Rw(a), fp(!1), e.tag === le) {
        ZC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === le) {
          ZC(i, e, a);
          return;
        } else if (i.tag === de) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !KC(s)) {
            var f = Io(a, e), p = eS(i, f, oe), v = Du(i, p, oe), m = hr();
            v !== null && (ol(v, oe, m), Qr(v, m));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ND(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = hr();
      ec(e, a), PD(e), vr === e && ul(cn, a) && (fn === tp || fn === om && Rv(cn) && mt() - xS < FC ? qo(e, U) : cm = xe(cm, a)), Qr(e, u);
    }
    function JC(e, t) {
      t === Ht && (t = pD(e));
      var a = hr(), i = Pr(e, t);
      i !== null && (ol(i, t, a), Qr(i, a));
    }
    function zD(e) {
      var t = e.memoizedState, a = Ht;
      t !== null && (a = t.retryLane), JC(e, a);
    }
    function UD(e, t) {
      var a = Ht, i;
      switch (e.tag) {
        case Ue:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case at:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), JC(e, a);
    }
    function AD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : sD(e / 1960) * 1960;
    }
    function HD() {
      if (up > fD)
        throw up = 0, bS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Xc > dD && (Xc = 0, pm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function FD() {
      Xa.flushLegacyContextWarning(), Xa.flushPendingUnsafeLifecycleWarnings();
    }
    function eE(e, t) {
      Ke(e), gm(e, $n, rD), t && gm(e, Zi, aD), gm(e, $n, tD), t && gm(e, Zi, nD), Vt();
    }
    function gm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ce ? i = i.child : ((i.flags & t) !== ce && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Sm = null;
    function tE(e) {
      {
        if ((He & Nn) !== sn || !(e.mode & ae))
          return;
        var t = e.tag;
        if (t !== en && t !== le && t !== de && t !== we && t !== ze && t !== ht && t !== be)
          return;
        var a = Re(e) || "ReactComponent";
        if (Sm !== null) {
          if (Sm.has(a))
            return;
          Sm.add(a);
        } else
          Sm = /* @__PURE__ */ new Set([a]);
        var i = zt;
        try {
          Ke(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ke(e) : Vt();
        }
      }
    }
    var zS;
    {
      var jD = null;
      zS = function(e, t, a) {
        var i = sE(jD, t);
        try {
          return vC(e, t, a);
        } catch (s) {
          if (KR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Dh(), m1(), CC(e, t), sE(t, i), t.mode & Ce && Ag(t), Ki(null, vC, null, e, t, a), Gm()) {
            var u = Uf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var nE = !1, US;
    US = /* @__PURE__ */ new Set();
    function VD(e) {
      if (wr && !_x())
        switch (e.tag) {
          case we:
          case ze:
          case be: {
            var t = Lt && Re(Lt) || "Unknown", a = t;
            if (!US.has(a)) {
              US.add(a);
              var i = Re(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case de: {
            nE || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), nE = !0);
            break;
          }
        }
    }
    function cp(e, t) {
      if (cr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          nc(e, i, t);
        });
      }
    }
    var AS = {};
    function HS(e, t) {
      {
        var a = ri.current;
        return a !== null ? (a.push(t), AS) : ks(e, t);
      }
    }
    function rE(e) {
      if (e !== AS)
        return fv(e);
    }
    function aE() {
      return ri.current !== null;
    }
    function BD(e) {
      {
        if (e.mode & ae) {
          if (!UC())
            return;
        } else if (!oD() || He !== sn || e.tag !== we && e.tag !== ze && e.tag !== be)
          return;
        if (ri.current === null) {
          var t = zt;
          try {
            Ke(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Re(e));
          } finally {
            t ? Ke(e) : Vt();
          }
        }
      }
    }
    function PD(e) {
      e.tag !== Ru && UC() && ri.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function fp(e) {
      BC = e;
    }
    var ka = null, qc = null, YD = function(e) {
      ka = e;
    };
    function Kc(e) {
      {
        if (ka === null)
          return e;
        var t = ka(e);
        return t === void 0 ? e : t.current;
      }
    }
    function FS(e) {
      return Kc(e);
    }
    function jS(e) {
      {
        if (ka === null)
          return e;
        var t = ka(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Kc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ml,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function iE(e, t) {
      {
        if (ka === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case de: {
            typeof i == "function" && (u = !0);
            break;
          }
          case we: {
            (typeof i == "function" || s === xn) && (u = !0);
            break;
          }
          case ze: {
            (s === Ml || s === xn) && (u = !0);
            break;
          }
          case ht:
          case be: {
            (s === Ll || s === xn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ka(a);
          if (f !== void 0 && f === ka(i))
            return !0;
        }
        return !1;
      }
    }
    function lE(e) {
      {
        if (ka === null || typeof WeakSet != "function")
          return;
        qc === null && (qc = /* @__PURE__ */ new WeakSet()), qc.add(e);
      }
    }
    var $D = function(e, t) {
      {
        if (ka === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        wl(), xl(function() {
          VS(e.current, i, a);
        });
      }
    }, QD = function(e, t) {
      {
        if (e.context !== ua)
          return;
        wl(), xl(function() {
          dp(t, e, null, null);
        });
      }
    };
    function VS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case we:
          case be:
          case de:
            v = p;
            break;
          case ze:
            v = p.render;
            break;
        }
        if (ka === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = ka(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === de ? y = !0 : m = !0));
        }
        if (qc !== null && (qc.has(e) || i !== null && qc.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = Pr(e, oe);
          E !== null && dn(E, e, oe, it);
        }
        u !== null && !y && VS(u, t, a), s !== null && VS(s, t, a);
      }
    }
    var ID = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return BS(e.current, i, a), a;
      }
    };
    function BS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case we:
          case be:
          case de:
            p = f;
            break;
          case ze:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? GD(e, a) : i !== null && BS(i, t, a), u !== null && BS(u, t, a);
      }
    }
    function GD(e, t) {
      {
        var a = WD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case le:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function WD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var PS;
    {
      PS = !1;
      try {
        var uE = Object.preventExtensions({});
      } catch {
        PS = !0;
      }
    }
    function XD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ce, this.subtreeFlags = ce, this.deletions = null, this.lanes = U, this.childLanes = U, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !PS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oa = function(e, t, a, i) {
      return new XD(e, t, a, i);
    };
    function YS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function qD(e) {
      return typeof e == "function" && !YS(e) && e.defaultProps === void 0;
    }
    function KD(e) {
      if (typeof e == "function")
        return YS(e) ? de : we;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ml)
          return ze;
        if (t === Ll)
          return ht;
      }
      return en;
    }
    function Zo(e, t) {
      var a = e.alternate;
      a === null ? (a = oa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ce, a.subtreeFlags = ce, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case en:
        case we:
        case be:
          a.type = Kc(e.type);
          break;
        case de:
          a.type = FS(e.type);
          break;
        case ze:
          a.type = jS(e.type);
          break;
      }
      return a;
    }
    function ZD(e, t) {
      e.flags &= tn | ot;
      var a = e.alternate;
      if (a === null)
        e.childLanes = U, e.lanes = t, e.child = null, e.subtreeFlags = ce, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ce, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function JD(e, t, a) {
      var i;
      return e === mh ? (i = ae, t === !0 && (i |= ke, i |= fr)) : i = ne, cr && (i |= Ce), oa(le, null, null, i);
    }
    function $S(e, t, a, i, u, s) {
      var f = en, p = e;
      if (typeof e == "function")
        YS(e) ? (f = de, p = FS(p)) : p = Kc(p);
      else if (typeof e == "string")
        f = ue;
      else
        e:
          switch (e) {
            case Ma:
              return Au(a.children, u, s, t);
            case _l:
              f = lt, u |= ke, (u & ae) !== ne && (u |= fr);
              break;
            case Vu:
              return ek(a, u, s, t);
            case pa:
              return tk(a, u, s, t);
            case Bu:
              return nk(a, u, s, t);
            case nf:
              return oE(a, u, s, t);
            case Cp:
            case gp:
            case wm:
            case Dm:
            case Sp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ef:
                    f = pn;
                    break e;
                  case tf:
                    f = Wr;
                    break e;
                  case Ml:
                    f = ze, p = jS(p);
                    break e;
                  case Ll:
                    f = ht;
                    break e;
                  case xn:
                    f = Tn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Re(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = oa(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function QS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = $S(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Au(e, t, a, i) {
      var u = oa(tt, e, i, t);
      return u.lanes = a, u;
    }
    function ek(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oa(ut, e, i, t | Ce);
      return u.elementType = Vu, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function tk(e, t, a, i) {
      var u = oa(Ue, e, i, t);
      return u.elementType = pa, u.lanes = a, u;
    }
    function nk(e, t, a, i) {
      var u = oa(at, e, i, t);
      return u.elementType = Bu, u.lanes = a, u;
    }
    function oE(e, t, a, i) {
      var u = oa(Ae, e, i, t);
      u.elementType = nf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function IS(e, t, a) {
      var i = oa(_e, e, null, t);
      return i.lanes = a, i;
    }
    function rk() {
      var e = oa(ue, null, null, ne);
      return e.elementType = "DELETED", e;
    }
    function ak(e) {
      var t = oa(Ot, null, null, ne);
      return t.stateNode = e, t;
    }
    function GS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oa(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function sE(e, t) {
      return e === null && (e = oa(en, null, null, ne)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function ik(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = by, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ht, this.eventTimes = Ro(U), this.expirationTimes = Ro(it), this.pendingLanes = U, this.suspendedLanes = U, this.pingedLanes = U, this.expiredLanes = U, this.mutableReadLanes = U, this.finishedLanes = U, this.entangledLanes = U, this.entanglements = Ro(U), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < yo; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case mh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ru:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function cE(e, t, a, i, u, s, f, p, v, m) {
      var y = new ik(e, t, a, p, v), R = JD(t, s);
      y.current = R, R.stateNode = y;
      {
        var E = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        R.memoizedState = E;
      }
      return lg(R), y;
    }
    var WS = "18.3.1";
    function lk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return kl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var XS, qS;
    XS = !1, qS = {};
    function fE(e) {
      if (!e)
        return ua;
      var t = br(e), a = PR(t);
      if (t.tag === de) {
        var i = t.type;
        if (Mi(i))
          return F0(t, i, a);
      }
      return a;
    }
    function uk(e, t) {
      {
        var a = br(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Or(a);
        if (u === null)
          return null;
        if (u.mode & ke) {
          var s = Re(a) || "Component";
          if (!qS[s]) {
            qS[s] = !0;
            var f = zt;
            try {
              Ke(u), a.mode & ke ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ke(f) : Vt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function dE(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return cE(e, t, v, m, a, i, u, s, f);
    }
    function pE(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = cE(a, i, y, e, u, s, f, p, v);
      R.context = fE(null);
      var E = R.current, b = hr(), M = zu(E), L = Cl(b, M);
      return L.callback = t ?? null, Du(E, L, M), vD(R, M, b), R;
    }
    function dp(e, t, a, i) {
      Yf(t, e);
      var u = t.current, s = hr(), f = zu(u);
      If(f);
      var p = fE(a);
      t.context === null ? t.context = p : t.pendingContext = p, wr && zt !== null && !XS && (XS = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Re(zt) || "Unknown"));
      var v = Cl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Du(u, v, f);
      return m !== null && (dn(m, u, f, s), Lh(m, u, f)), f;
    }
    function Cm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ok(e) {
      switch (e.tag) {
        case le: {
          var t = e.stateNode;
          if (rc(t)) {
            var a = Xf(t);
            gD(t, a);
          }
          break;
        }
        case Ue: {
          xl(function() {
            var u = Pr(e, oe);
            if (u !== null) {
              var s = hr();
              dn(u, e, oe, s);
            }
          });
          var i = oe;
          KS(e, i);
          break;
        }
      }
    }
    function vE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = bv(a.retryLane, t));
    }
    function KS(e, t) {
      vE(e, t);
      var a = e.alternate;
      a && vE(a, t);
    }
    function sk(e) {
      if (e.tag === Ue) {
        var t = So, a = Pr(e, t);
        if (a !== null) {
          var i = hr();
          dn(a, e, t, i);
        }
        KS(e, t);
      }
    }
    function ck(e) {
      if (e.tag === Ue) {
        var t = zu(e), a = Pr(e, t);
        if (a !== null) {
          var i = hr();
          dn(a, e, t, i);
        }
        KS(e, t);
      }
    }
    function hE(e) {
      var t = cv(e);
      return t === null ? null : t.stateNode;
    }
    var mE = function(e) {
      return null;
    };
    function fk(e) {
      return mE(e);
    }
    var yE = function(e) {
      return !1;
    };
    function dk(e) {
      return yE(e);
    }
    var gE = null, SE = null, CE = null, EE = null, TE = null, RE = null, xE = null, wE = null, DE = null;
    {
      var kE = function(e, t, a) {
        var i = t[a], u = Gt(e) ? e.slice() : Le({}, e);
        return a + 1 === t.length ? (Gt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = kE(e[i], t, a + 1), u);
      }, bE = function(e, t) {
        return kE(e, t, 0);
      }, _E = function(e, t, a, i) {
        var u = t[i], s = Gt(e) ? e.slice() : Le({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Gt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = _E(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, ME = function(e, t, a) {
        if (t.length !== a.length) {
          et("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              et("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return _E(e, t, a, 0);
      }, LE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Gt(e) ? e.slice() : Le({}, e);
        return s[u] = LE(e[u], t, a + 1, i), s;
      }, OE = function(e, t, a) {
        return LE(e, t, 0, a);
      }, ZS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      gE = function(e, t, a, i) {
        var u = ZS(e, t);
        if (u !== null) {
          var s = OE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Le({}, e.memoizedProps);
          var f = Pr(e, oe);
          f !== null && dn(f, e, oe, it);
        }
      }, SE = function(e, t, a) {
        var i = ZS(e, t);
        if (i !== null) {
          var u = bE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Le({}, e.memoizedProps);
          var s = Pr(e, oe);
          s !== null && dn(s, e, oe, it);
        }
      }, CE = function(e, t, a, i) {
        var u = ZS(e, t);
        if (u !== null) {
          var s = ME(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Le({}, e.memoizedProps);
          var f = Pr(e, oe);
          f !== null && dn(f, e, oe, it);
        }
      }, EE = function(e, t, a) {
        e.pendingProps = OE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pr(e, oe);
        i !== null && dn(i, e, oe, it);
      }, TE = function(e, t) {
        e.pendingProps = bE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Pr(e, oe);
        a !== null && dn(a, e, oe, it);
      }, RE = function(e, t, a) {
        e.pendingProps = ME(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pr(e, oe);
        i !== null && dn(i, e, oe, it);
      }, xE = function(e) {
        var t = Pr(e, oe);
        t !== null && dn(t, e, oe, it);
      }, wE = function(e) {
        mE = e;
      }, DE = function(e) {
        yE = e;
      };
    }
    function pk(e) {
      var t = Or(e);
      return t === null ? null : t.stateNode;
    }
    function vk(e) {
      return null;
    }
    function hk() {
      return zt;
    }
    function mk(e) {
      var t = e.findFiberByHostInstance, a = N.ReactCurrentDispatcher;
      return Pf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: gE,
        overrideHookStateDeletePath: SE,
        overrideHookStateRenamePath: CE,
        overrideProps: EE,
        overridePropsDeletePath: TE,
        overridePropsRenamePath: RE,
        setErrorHandler: wE,
        setSuspenseHandler: DE,
        scheduleUpdate: xE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: pk,
        findFiberByHostInstance: t || vk,
        // React Refresh
        findHostInstancesForRefresh: ID,
        scheduleRefresh: $D,
        scheduleRoot: QD,
        setRefreshHandler: YD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: hk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: WS
      });
    }
    var NE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function JS(e) {
      this._internalRoot = e;
    }
    Em.prototype.render = JS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Tm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ut) {
          var i = hE(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      dp(e, t, null, null);
    }, Em.prototype.unmount = JS.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        QC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), xl(function() {
          dp(null, e, null, null);
        }), N0(t);
      }
    };
    function yk(e, t) {
      if (!Tm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      zE(e);
      var a = !1, i = !1, u = "", s = NE;
      t != null && (t.hydrate ? et("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === bl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = dE(e, mh, null, a, i, u, s);
      sh(f.current, e);
      var p = e.nodeType === Ut ? e.parentNode : e;
      return gd(p), new JS(f);
    }
    function Em(e) {
      this._internalRoot = e;
    }
    function gk(e) {
      e && ty(e);
    }
    Em.prototype.unstable_scheduleHydration = gk;
    function Sk(e, t, a) {
      if (!Tm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      zE(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = NE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = pE(t, null, e, mh, i, s, f, p, v);
      if (sh(m.current, e), gd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Rx(m, R);
        }
      return new Em(m);
    }
    function Tm(e) {
      return !!(e && (e.nodeType === Bn || e.nodeType === ra || e.nodeType === Qi || !qe));
    }
    function pp(e) {
      return !!(e && (e.nodeType === Bn || e.nodeType === ra || e.nodeType === Qi || e.nodeType === Ut && e.nodeValue === " react-mount-point-unstable "));
    }
    function zE(e) {
      e.nodeType === Bn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), _d(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ck = N.ReactCurrentOwner, UE;
    UE = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ut) {
        var t = hE(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = e0(e), u = !!(i && Eu(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Bn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function e0(e) {
      return e ? e.nodeType === ra ? e.documentElement : e.firstChild : null;
    }
    function AE() {
    }
    function Ek(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = Cm(f);
            s.call(E);
          };
        }
        var f = pE(
          t,
          i,
          e,
          Ru,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          AE
        );
        e._reactRootContainer = f, sh(f.current, e);
        var p = e.nodeType === Ut ? e.parentNode : e;
        return gd(p), xl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Cm(y);
            m.call(E);
          };
        }
        var y = dE(
          e,
          Ru,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          AE
        );
        e._reactRootContainer = y, sh(y.current, e);
        var R = e.nodeType === Ut ? e.parentNode : e;
        return gd(R), xl(function() {
          dp(t, y, a, i);
        }), y;
      }
    }
    function Tk(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Rm(e, t, a, i, u) {
      UE(a), Tk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ek(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Cm(f);
            p.call(v);
          };
        }
        dp(t, f, e, u);
      }
      return Cm(f);
    }
    var HE = !1;
    function Rk(e) {
      {
        HE || (HE = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Ck.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Bn ? e : uk(e, "findDOMNode");
    }
    function xk(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _d(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Rm(null, e, t, !0, a);
    }
    function wk(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _d(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Rm(null, e, t, !1, a);
    }
    function Dk(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !so(e))
        throw new Error("parentComponent must be a valid React Component");
      return Rm(e, t, a, !1, i);
    }
    var FE = !1;
    function kk(e) {
      if (FE || (FE = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !pp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = _d(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = e0(e), i = a && !Eu(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return xl(function() {
          Rm(null, null, e, !1, function() {
            e._reactRootContainer = null, N0(e);
          });
        }), !0;
      } else {
        {
          var u = e0(e), s = !!(u && Eu(u)), f = e.nodeType === Bn && pp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    uu(ok), Jm(sk), ic(ck), Lv(Ar), Ov(Cn), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), uv(_T), Ts(LS, SD, xl);
    function bk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Tm(t))
        throw new Error("Target container is not a DOM element.");
      return lk(e, t, null, a);
    }
    function _k(e, t, a, i) {
      return Dk(e, t, a, i);
    }
    var t0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Eu, bc, ch, Es, lo, LS]
    };
    function Mk(e, t) {
      return t0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), yk(e, t);
    }
    function Lk(e, t, a) {
      return t0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Sk(e, t, a);
    }
    function Ok(e) {
      return QC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), xl(e);
    }
    var Nk = mk({
      findFiberByHostInstance: Ho,
      bundleType: 1,
      version: WS,
      rendererPackageName: "react-dom"
    });
    if (!Nk && vn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var jE = window.location.protocol;
      /^(https?|file):$/.test(jE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (jE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t0, Gr.createPortal = bk, Gr.createRoot = Mk, Gr.findDOMNode = Rk, Gr.flushSync = Ok, Gr.hydrate = xk, Gr.hydrateRoot = Lk, Gr.render = wk, Gr.unmountComponentAtNode = kk, Gr.unstable_batchedUpdates = LS, Gr.unstable_renderSubtreeIntoContainer = _k, Gr.version = WS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Gr;
}
function GE() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GE);
    } catch (se) {
      console.error(se);
    }
  }
}
process.env.NODE_ENV === "production" ? (GE(), a0.exports = jk()) : a0.exports = Vk();
var Bk = a0.exports;
const Gk = /* @__PURE__ */ Ak(Bk);
export {
  Gk as R,
  Bk as r
};
