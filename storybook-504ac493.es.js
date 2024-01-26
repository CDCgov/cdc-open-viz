import { g as p0, c as wm } from "./storybook-c5d32002.es.js";
import { r as uT } from "./storybook-e61d95ab.es.js";
var d0 = { exports: {} }, Yr = {}, Dm = { exports: {} }, s0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qE;
function nb() {
  return qE || (qE = 1, function(b) {
    function H(Q, ye) {
      var Z = Q.length;
      Q.push(ye);
      e:
        for (; 0 < Z; ) {
          var We = Z - 1 >>> 1, Ke = Q[We];
          if (0 < Lt(Ke, ye))
            Q[We] = ye, Q[Z] = Ke, Z = We;
          else
            break e;
        }
    }
    function x(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function Ve(Q) {
      if (Q.length === 0)
        return null;
      var ye = Q[0], Z = Q.pop();
      if (Z !== ye) {
        Q[0] = Z;
        e:
          for (var We = 0, Ke = Q.length, Bn = Ke >>> 1; We < Bn; ) {
            var ir = 2 * (We + 1) - 1, ai = Q[ir], _n = ir + 1, ii = Q[_n];
            if (0 > Lt(ai, Z))
              _n < Ke && 0 > Lt(ii, ai) ? (Q[We] = ii, Q[_n] = Z, We = _n) : (Q[We] = ai, Q[ir] = Z, We = ir);
            else if (_n < Ke && 0 > Lt(ii, Z))
              Q[We] = ii, Q[_n] = Z, We = _n;
            else
              break e;
          }
      }
      return ye;
    }
    function Lt(Q, ye) {
      var Z = Q.sortIndex - ye.sortIndex;
      return Z !== 0 ? Z : Q.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Be = performance;
      b.unstable_now = function() {
        return Be.now();
      };
    } else {
      var S = Date, jn = S.now();
      b.unstable_now = function() {
        return S.now() - jn;
      };
    }
    var xe = [], pe = [], nn = 1, le = null, me = 3, ue = !1, ke = !1, tt = !1, ut = typeof setTimeout == "function" ? setTimeout : null, Ir = typeof clearTimeout == "function" ? clearTimeout : null, hn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ze(Q) {
      for (var ye = x(pe); ye !== null; ) {
        if (ye.callback === null)
          Ve(pe);
        else if (ye.startTime <= Q)
          Ve(pe), ye.sortIndex = ye.expirationTime, H(xe, ye);
        else
          break;
        ye = x(pe);
      }
    }
    function ot(Q) {
      if (tt = !1, ze(Q), !ke)
        if (x(xe) !== null)
          ke = !0, Et(Ue);
        else {
          var ye = x(pe);
          ye !== null && Cr(ot, ye.startTime - Q);
        }
    }
    function Ue(Q, ye) {
      ke = !1, tt && (tt = !1, Ir(Dn), Dn = -1), ue = !0;
      var Z = me;
      try {
        for (ze(ye), le = x(xe); le !== null && (!(le.expirationTime > ye) || Q && !lt()); ) {
          var We = le.callback;
          if (typeof We == "function") {
            le.callback = null, me = le.priorityLevel;
            var Ke = We(le.expirationTime <= ye);
            ye = b.unstable_now(), typeof Ke == "function" ? le.callback = Ke : le === x(xe) && Ve(xe), ze(ye);
          } else
            Ve(xe);
          le = x(xe);
        }
        if (le !== null)
          var Bn = !0;
        else {
          var ir = x(pe);
          ir !== null && Cr(ot, ir.startTime - ye), Bn = !1;
        }
        return Bn;
      } finally {
        le = null, me = Z, ue = !1;
      }
    }
    var mt = !1, be = null, Dn = -1, ar = 5, Nt = -1;
    function lt() {
      return !(b.unstable_now() - Nt < ar);
    }
    function Vn() {
      if (be !== null) {
        var Q = b.unstable_now();
        Nt = Q;
        var ye = !0;
        try {
          ye = be(!0, Q);
        } finally {
          ye ? Ae() : (mt = !1, be = null);
        }
      } else
        mt = !1;
    }
    var Ae;
    if (typeof hn == "function")
      Ae = function() {
        hn(Vn);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Sr = qe.port2;
      qe.port1.onmessage = Vn, Ae = function() {
        Sr.postMessage(null);
      };
    } else
      Ae = function() {
        ut(Vn, 0);
      };
    function Et(Q) {
      be = Q, mt || (mt = !0, Ae());
    }
    function Cr(Q, ye) {
      Dn = ut(function() {
        Q(b.unstable_now());
      }, ye);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, b.unstable_continueExecution = function() {
      ke || ue || (ke = !0, Et(Ue));
    }, b.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ar = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, b.unstable_getFirstCallbackNode = function() {
      return x(xe);
    }, b.unstable_next = function(Q) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = me;
      }
      var Z = me;
      me = ye;
      try {
        return Q();
      } finally {
        me = Z;
      }
    }, b.unstable_pauseExecution = function() {
    }, b.unstable_requestPaint = function() {
    }, b.unstable_runWithPriority = function(Q, ye) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var Z = me;
      me = Q;
      try {
        return ye();
      } finally {
        me = Z;
      }
    }, b.unstable_scheduleCallback = function(Q, ye, Z) {
      var We = b.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? We + Z : We) : Z = We, Q) {
        case 1:
          var Ke = -1;
          break;
        case 2:
          Ke = 250;
          break;
        case 5:
          Ke = 1073741823;
          break;
        case 4:
          Ke = 1e4;
          break;
        default:
          Ke = 5e3;
      }
      return Ke = Z + Ke, Q = { id: nn++, callback: ye, priorityLevel: Q, startTime: Z, expirationTime: Ke, sortIndex: -1 }, Z > We ? (Q.sortIndex = Z, H(pe, Q), x(xe) === null && Q === x(pe) && (tt ? (Ir(Dn), Dn = -1) : tt = !0, Cr(ot, Z - We))) : (Q.sortIndex = Ke, H(xe, Q), ke || ue || (ke = !0, Et(Ue))), Q;
    }, b.unstable_shouldYield = lt, b.unstable_wrapCallback = function(Q) {
      var ye = me;
      return function() {
        var Z = me;
        me = ye;
        try {
          return Q.apply(this, arguments);
        } finally {
          me = Z;
        }
      };
    };
  }(s0)), s0;
}
var c0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KE;
function rb() {
  return KE || (KE = 1, function(b) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var H = !1, x = !1, Ve = 5;
      function Lt(I, fe) {
        var Oe = I.length;
        I.push(fe), jn(I, fe, Oe);
      }
      function Be(I) {
        return I.length === 0 ? null : I[0];
      }
      function S(I) {
        if (I.length === 0)
          return null;
        var fe = I[0], Oe = I.pop();
        return Oe !== fe && (I[0] = Oe, xe(I, Oe, 0)), fe;
      }
      function jn(I, fe, Oe) {
        for (var nt = Oe; nt > 0; ) {
          var bt = nt - 1 >>> 1, yn = I[bt];
          if (pe(yn, fe) > 0)
            I[bt] = fe, I[nt] = yn, nt = bt;
          else
            return;
        }
      }
      function xe(I, fe, Oe) {
        for (var nt = Oe, bt = I.length, yn = bt >>> 1; nt < yn; ) {
          var Vt = (nt + 1) * 2 - 1, Rr = I[Vt], Tt = Vt + 1, fa = I[Tt];
          if (pe(Rr, fe) < 0)
            Tt < bt && pe(fa, Rr) < 0 ? (I[nt] = fa, I[Tt] = fe, nt = Tt) : (I[nt] = Rr, I[Vt] = fe, nt = Vt);
          else if (Tt < bt && pe(fa, fe) < 0)
            I[nt] = fa, I[Tt] = fe, nt = Tt;
          else
            return;
        }
      }
      function pe(I, fe) {
        var Oe = I.sortIndex - fe.sortIndex;
        return Oe !== 0 ? Oe : I.id - fe.id;
      }
      var nn = 1, le = 2, me = 3, ue = 4, ke = 5;
      function tt(I, fe) {
      }
      var ut = typeof performance == "object" && typeof performance.now == "function";
      if (ut) {
        var Ir = performance;
        b.unstable_now = function() {
          return Ir.now();
        };
      } else {
        var hn = Date, ze = hn.now();
        b.unstable_now = function() {
          return hn.now() - ze;
        };
      }
      var ot = 1073741823, Ue = -1, mt = 250, be = 5e3, Dn = 1e4, ar = ot, Nt = [], lt = [], Vn = 1, Ae = null, qe = me, Sr = !1, Et = !1, Cr = !1, Q = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function We(I) {
        for (var fe = Be(lt); fe !== null; ) {
          if (fe.callback === null)
            S(lt);
          else if (fe.startTime <= I)
            S(lt), fe.sortIndex = fe.expirationTime, Lt(Nt, fe);
          else
            return;
          fe = Be(lt);
        }
      }
      function Ke(I) {
        if (Cr = !1, We(I), !Et)
          if (Be(Nt) !== null)
            Et = !0, oi(Bn);
          else {
            var fe = Be(lt);
            fe !== null && Pn(Ke, fe.startTime - I);
          }
      }
      function Bn(I, fe) {
        Et = !1, Cr && (Cr = !1, qr()), Sr = !0;
        var Oe = qe;
        try {
          var nt;
          if (!x)
            return ir(I, fe);
        } finally {
          Ae = null, qe = Oe, Sr = !1;
        }
      }
      function ir(I, fe) {
        var Oe = fe;
        for (We(Oe), Ae = Be(Nt); Ae !== null && !H && !(Ae.expirationTime > Oe && (!I || Al())); ) {
          var nt = Ae.callback;
          if (typeof nt == "function") {
            Ae.callback = null, qe = Ae.priorityLevel;
            var bt = Ae.expirationTime <= Oe, yn = nt(bt);
            Oe = b.unstable_now(), typeof yn == "function" ? Ae.callback = yn : Ae === Be(Nt) && S(Nt), We(Oe);
          } else
            S(Nt);
          Ae = Be(Nt);
        }
        if (Ae !== null)
          return !0;
        var Vt = Be(lt);
        return Vt !== null && Pn(Ke, Vt.startTime - Oe), !1;
      }
      function ai(I, fe) {
        switch (I) {
          case nn:
          case le:
          case me:
          case ue:
          case ke:
            break;
          default:
            I = me;
        }
        var Oe = qe;
        qe = I;
        try {
          return fe();
        } finally {
          qe = Oe;
        }
      }
      function _n(I) {
        var fe;
        switch (qe) {
          case nn:
          case le:
          case me:
            fe = me;
            break;
          default:
            fe = qe;
            break;
        }
        var Oe = qe;
        qe = fe;
        try {
          return I();
        } finally {
          qe = Oe;
        }
      }
      function ii(I) {
        var fe = qe;
        return function() {
          var Oe = qe;
          qe = fe;
          try {
            return I.apply(this, arguments);
          } finally {
            qe = Oe;
          }
        };
      }
      function Gr(I, fe, Oe) {
        var nt = b.unstable_now(), bt;
        if (typeof Oe == "object" && Oe !== null) {
          var yn = Oe.delay;
          typeof yn == "number" && yn > 0 ? bt = nt + yn : bt = nt;
        } else
          bt = nt;
        var Vt;
        switch (I) {
          case nn:
            Vt = Ue;
            break;
          case le:
            Vt = mt;
            break;
          case ke:
            Vt = ar;
            break;
          case ue:
            Vt = Dn;
            break;
          case me:
          default:
            Vt = be;
            break;
        }
        var Rr = bt + Vt, Tt = {
          id: Vn++,
          callback: fe,
          priorityLevel: I,
          startTime: bt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return bt > nt ? (Tt.sortIndex = bt, Lt(lt, Tt), Be(Nt) === null && Tt === Be(lt) && (Cr ? qr() : Cr = !0, Pn(Ke, bt - nt))) : (Tt.sortIndex = Rr, Lt(Nt, Tt), !Et && !Sr && (Et = !0, oi(Bn))), Tt;
      }
      function sa() {
      }
      function ju() {
        !Et && !Sr && (Et = !0, oi(Bn));
      }
      function Er() {
        return Be(Nt);
      }
      function _a(I) {
        I.callback = null;
      }
      function mn() {
        return qe;
      }
      var $n = !1, Tr = null, Wr = -1, lr = Ve, ba = -1;
      function Al() {
        var I = b.unstable_now() - ba;
        return !(I < lr);
      }
      function Yi() {
      }
      function li(I) {
        if (I < 0 || I > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        I > 0 ? lr = Math.floor(1e3 / I) : lr = Ve;
      }
      var Qi = function() {
        if (Tr !== null) {
          var I = b.unstable_now();
          ba = I;
          var fe = !0, Oe = !0;
          try {
            Oe = Tr(fe, I);
          } finally {
            Oe ? Xr() : ($n = !1, Tr = null);
          }
        } else
          $n = !1;
      }, Xr;
      if (typeof Z == "function")
        Xr = function() {
          Z(Qi);
        };
      else if (typeof MessageChannel < "u") {
        var ui = new MessageChannel(), ca = ui.port2;
        ui.port1.onmessage = Qi, Xr = function() {
          ca.postMessage(null);
        };
      } else
        Xr = function() {
          Q(Qi, 0);
        };
      function oi(I) {
        Tr = I, $n || ($n = !0, Xr());
      }
      function Pn(I, fe) {
        Wr = Q(function() {
          I(b.unstable_now());
        }, fe);
      }
      function qr() {
        ye(Wr), Wr = -1;
      }
      var Vu = Yi, si = null;
      b.unstable_IdlePriority = ke, b.unstable_ImmediatePriority = nn, b.unstable_LowPriority = ue, b.unstable_NormalPriority = me, b.unstable_Profiling = si, b.unstable_UserBlockingPriority = le, b.unstable_cancelCallback = _a, b.unstable_continueExecution = ju, b.unstable_forceFrameRate = li, b.unstable_getCurrentPriorityLevel = mn, b.unstable_getFirstCallbackNode = Er, b.unstable_next = _n, b.unstable_pauseExecution = sa, b.unstable_requestPaint = Vu, b.unstable_runWithPriority = ai, b.unstable_scheduleCallback = Gr, b.unstable_shouldYield = Al, b.unstable_wrapCallback = ii, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(c0)), c0;
}
var ZE;
function oT() {
  return ZE || (ZE = 1, process.env.NODE_ENV === "production" ? Dm.exports = nb() : Dm.exports = rb()), Dm.exports;
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
var JE;
function ab() {
  if (JE)
    return Yr;
  JE = 1;
  var b = uT, H = oT();
  function x(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ve = /* @__PURE__ */ new Set(), Lt = {};
  function Be(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Lt[n] = r, n = 0; n < r.length; n++)
      Ve.add(r[n]);
  }
  var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xe = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nn = {}, le = {};
  function me(n) {
    return xe.call(le, n) ? !0 : xe.call(nn, n) ? !1 : pe.test(n) ? le[n] = !0 : (nn[n] = !0, !1);
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
  function ke(n, r, l, o) {
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
  var ut = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ut[n] = new tt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ut[r] = new tt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ut[n] = new tt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ut[n] = new tt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ut[n] = new tt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ut[n] = new tt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ut[n] = new tt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ut[n] = new tt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ut[n] = new tt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ir = /[\-:]([a-z])/g;
  function hn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ir,
      hn
    );
    ut[r] = new tt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ir, hn);
    ut[r] = new tt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ir, hn);
    ut[r] = new tt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ut[n] = new tt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ut.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ut[n] = new tt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ze(n, r, l, o) {
    var c = ut.hasOwnProperty(r) ? ut[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ke(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ot = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ue = Symbol.for("react.element"), mt = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), Dn = Symbol.for("react.strict_mode"), ar = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), lt = Symbol.for("react.context"), Vn = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), Sr = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), Cr = Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function ye(n) {
    return n === null || typeof n != "object" ? null : (n = Q && n[Q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Z = Object.assign, We;
  function Ke(n) {
    if (We === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        We = r && r[1] || "";
      }
    return `
` + We + n;
  }
  var Bn = !1;
  function ir(n, r) {
    if (!n || Bn)
      return "";
    Bn = !0;
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
          } catch (L) {
            var o = L;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (L) {
            o = L;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          o = L;
        }
        n();
      }
    } catch (L) {
      if (L && o && typeof L.stack == "string") {
        for (var c = L.stack.split(`
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
      Bn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Ke(n) : "";
  }
  function ai(n) {
    switch (n.tag) {
      case 5:
        return Ke(n.type);
      case 16:
        return Ke("Lazy");
      case 13:
        return Ke("Suspense");
      case 19:
        return Ke("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ir(n.type, !1), n;
      case 11:
        return n = ir(n.type.render, !1), n;
      case 1:
        return n = ir(n.type, !0), n;
      default:
        return "";
    }
  }
  function _n(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case be:
        return "Fragment";
      case mt:
        return "Portal";
      case ar:
        return "Profiler";
      case Dn:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case lt:
          return (n.displayName || "Context") + ".Consumer";
        case Nt:
          return (n._context.displayName || "Context") + ".Provider";
        case Vn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Sr:
          return r = n.displayName || null, r !== null ? r : _n(n.type) || "Memo";
        case Et:
          r = n._payload, n = n._init;
          try {
            return _n(n(r));
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
        return _n(r);
      case 8:
        return r === Dn ? "StrictMode" : "Mode";
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
  function Gr(n) {
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
  function sa(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ju(n) {
    var r = sa(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    n._valueTracker || (n._valueTracker = ju(n));
  }
  function _a(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = sa(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function mn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function $n(n, r) {
    var l = r.checked;
    return Z({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Tr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Gr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wr(n, r) {
    r = r.checked, r != null && ze(n, "checked", r, !1);
  }
  function lr(n, r) {
    Wr(n, r);
    var l = Gr(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Al(n, r.type, l) : r.hasOwnProperty("defaultValue") && Al(n, r.type, Gr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ba(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Al(n, r, l) {
    (r !== "number" || mn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Yi = Array.isArray;
  function li(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Gr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Qi(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(x(91));
    return Z({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(x(92));
        if (Yi(l)) {
          if (1 < l.length)
            throw Error(x(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Gr(l) };
  }
  function ui(n, r) {
    var l = Gr(r.value), o = Gr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ca(n) {
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
  function Pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? oi(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var qr, Vu = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = qr.firstChild; n.firstChild; )
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
  var I = {
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
  }, fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(I).forEach(function(n) {
    fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), I[r] = I[n];
    });
  });
  function Oe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || I.hasOwnProperty(n) && I[n] ? ("" + r).trim() : r + "px";
  }
  function nt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Oe(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var bt = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function yn(n, r) {
    if (r) {
      if (bt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(x(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(x(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(x(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(x(62));
    }
  }
  function Vt(n, r) {
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
  function Tt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var fa = null, zt = null, Rt = null;
  function Cp(n) {
    if (n = fo(n)) {
      if (typeof fa != "function")
        throw Error(x(280));
      var r = n.stateNode;
      r && (r = se(r), fa(n.stateNode, n.type, r));
    }
  }
  function Jo(n) {
    zt ? Rt ? Rt.push(n) : Rt = [n] : zt = n;
  }
  function es() {
    if (zt) {
      var n = zt, r = Rt;
      if (Rt = zt = null, Cp(n), r)
        for (n = 0; n < r.length; n++)
          Cp(r[n]);
    }
  }
  function Ep(n, r) {
    return n(r);
  }
  function Tp() {
  }
  var ts = !1;
  function Zc(n, r, l) {
    if (ts)
      return n(r, l);
    ts = !0;
    try {
      return Ep(n, r, l);
    } finally {
      ts = !1, (zt !== null || Rt !== null) && (Tp(), es());
    }
  }
  function Bu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = se(l);
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
      throw Error(x(231, r, typeof l));
    return l;
  }
  var ns = !1;
  if (jn)
    try {
      var Ii = {};
      Object.defineProperty(Ii, "passive", { get: function() {
        ns = !0;
      } }), window.addEventListener("test", Ii, Ii), window.removeEventListener("test", Ii, Ii);
    } catch {
      ns = !1;
    }
  function Hl(n, r, l, o, c, d, h, g, C) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, L);
    } catch (j) {
      this.onError(j);
    }
  }
  var Kr = !1, ka = null, Fl = !1, $u = null, Jc = { onError: function(n) {
    Kr = !0, ka = n;
  } };
  function ef(n, r, l, o, c, d, h, g, C) {
    Kr = !1, ka = null, Hl.apply(Jc, arguments);
  }
  function jl(n, r, l, o, c, d, h, g, C) {
    if (ef.apply(this, arguments), Kr) {
      if (Kr) {
        var L = ka;
        Kr = !1, ka = null;
      } else
        throw Error(x(198));
      Fl || (Fl = !0, $u = L);
    }
  }
  function da(n) {
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
  function Pu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Vl(n) {
    if (da(n) !== n)
      throw Error(x(188));
  }
  function bn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = da(n), r === null)
        throw Error(x(188));
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
            return Vl(c), n;
          if (d === o)
            return Vl(c), r;
          d = d.sibling;
        }
        throw Error(x(188));
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
            throw Error(x(189));
        }
      }
      if (l.alternate !== o)
        throw Error(x(190));
    }
    if (l.tag !== 3)
      throw Error(x(188));
    return l.stateNode.current === l ? n : r;
  }
  function Rp(n) {
    return n = bn(n), n !== null ? xp(n) : null;
  }
  function xp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = xp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var tf = H.unstable_scheduleCallback, wp = H.unstable_cancelCallback, Om = H.unstable_shouldYield, Mm = H.unstable_requestPaint, xt = H.unstable_now, Lm = H.unstable_getCurrentPriorityLevel, Oa = H.unstable_ImmediatePriority, Me = H.unstable_UserBlockingPriority, ci = H.unstable_NormalPriority, Dp = H.unstable_LowPriority, nf = H.unstable_IdlePriority, Yu = null, Zr = null;
  function _p(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(Yu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var xr = Math.clz32 ? Math.clz32 : Nm, bp = Math.log, kp = Math.LN2;
  function Nm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (bp(n) / kp | 0) | 0;
  }
  var rs = 64, Bl = 4194304;
  function Gi(n) {
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
  function Jr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var g = h & ~c;
      g !== 0 ? o = Gi(g) : (d &= h, d !== 0 && (o = Gi(d)));
    } else
      h = l & ~c, h !== 0 ? o = Gi(h) : d !== 0 && (o = Gi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - xr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function rf(n, r) {
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
      C === -1 ? (!(g & l) || g & o) && (c[h] = rf(g, r)) : C <= r && (n.expiredLanes |= g), d &= ~g;
    }
  }
  function af(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function is() {
    var n = rs;
    return rs <<= 1, !(rs & 4194240) && (rs = 64), n;
  }
  function lf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Wi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - xr(r), n[r] = l;
  }
  function zm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - xr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Qu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - xr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Xe = 0;
  function uf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Op, ls, rt, Mp, of, Re = !1, Iu = [], Ut = null, wr = null, Dr = null, Gu = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Ze = [], Um = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ut = null;
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
        Gu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(r.pointerId);
    }
  }
  function gn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = fo(r), r !== null && ls(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function fi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Ut = gn(Ut, n, r, l, o, c), !0;
      case "dragenter":
        return wr = gn(wr, n, r, l, o, c), !0;
      case "mouseover":
        return Dr = gn(Dr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Gu.set(d, gn(Gu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Bt.set(d, gn(Bt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Lp(n) {
    var r = br(n.target);
    if (r !== null) {
      var l = da(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Pu(l), r !== null) {
            n.blockedOn = r, of(n.priority, function() {
              rt(l);
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
  function $l(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ss(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Rr = o, l.target.dispatchEvent(o), Rr = null;
      } else
        return r = fo(l), r !== null && ls(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function sf(n, r, l) {
    $l(n) && l.delete(r);
  }
  function Np() {
    Re = !1, Ut !== null && $l(Ut) && (Ut = null), wr !== null && $l(wr) && (wr = null), Dr !== null && $l(Dr) && (Dr = null), Gu.forEach(sf), Bt.forEach(sf);
  }
  function Wu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Re || (Re = !0, H.unstable_scheduleCallback(H.unstable_NormalPriority, Np)));
  }
  function Xu(n) {
    function r(c) {
      return Wu(c, n);
    }
    if (0 < Iu.length) {
      Wu(Iu[0], n);
      for (var l = 1; l < Iu.length; l++) {
        var o = Iu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ut !== null && Wu(Ut, n), wr !== null && Wu(wr, n), Dr !== null && Wu(Dr, n), Gu.forEach(r), Bt.forEach(r), l = 0; l < Ze.length; l++)
      o = Ze[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ze.length && (l = Ze[0], l.blockedOn === null); )
      Lp(l), l.blockedOn === null && Ze.shift();
  }
  var Pl = ot.ReactCurrentBatchConfig, Xi = !0;
  function zp(n, r, l, o) {
    var c = Xe, d = Pl.transition;
    Pl.transition = null;
    try {
      Xe = 1, os(n, r, l, o);
    } finally {
      Xe = c, Pl.transition = d;
    }
  }
  function us(n, r, l, o) {
    var c = Xe, d = Pl.transition;
    Pl.transition = null;
    try {
      Xe = 4, os(n, r, l, o);
    } finally {
      Xe = c, Pl.transition = d;
    }
  }
  function os(n, r, l, o) {
    if (Xi) {
      var c = ss(n, r, l, o);
      if (c === null)
        Es(n, r, o, qu, l), ea(n, o);
      else if (fi(c, n, r, l, o))
        o.stopPropagation();
      else if (ea(n, o), r & 4 && -1 < Um.indexOf(n)) {
        for (; c !== null; ) {
          var d = fo(c);
          if (d !== null && Op(d), d = ss(n, r, l, o), d === null && Es(n, r, o, qu, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Es(n, r, o, null, l);
    }
  }
  var qu = null;
  function ss(n, r, l, o) {
    if (qu = null, n = Tt(o), n = br(n), n !== null)
      if (r = da(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Pu(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return qu = n, null;
  }
  function cf(n) {
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
        switch (Lm()) {
          case Oa:
            return 1;
          case Me:
            return 4;
          case ci:
          case Dp:
            return 16;
          case nf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ma = null, Ku = null, Zu = null;
  function ff() {
    if (Zu)
      return Zu;
    var n, r = Ku, l = r.length, o, c = "value" in Ma ? Ma.value : Ma.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return Zu = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Yl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ju() {
    return !0;
  }
  function Up() {
    return !1;
  }
  function ur(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var g in n)
        n.hasOwnProperty(g) && (l = n[g], this[g] = l ? l(d) : d[g]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ju : Up, this.isPropagationStopped = Up, this;
    }
    return Z(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ju);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ju);
    }, persist: function() {
    }, isPersistent: Ju }), r;
  }
  var di = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, cs = ur(di), Ql = Z({}, di, { view: 0, detail: 0 }), Ap = ur(Ql), fs, df, eo, Wt = Z({}, Ql, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== eo && (eo && n.type === "mousemove" ? (fs = n.screenX - eo.screenX, df = n.screenY - eo.screenY) : df = fs = 0, eo = n), fs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : df;
  } }), ds = ur(Wt), Hp = Z({}, Wt, { dataTransfer: 0 }), Fp = ur(Hp), Am = Z({}, Ql, { relatedTarget: 0 }), pi = ur(Am), pf = Z({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jp = ur(pf), Hm = Z({}, di, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fm = ur(Hm), jm = Z({}, di, { data: 0 }), vf = ur(jm), hf = {
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
  }, Vp = {
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
  }, Bp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $p(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Bp[n]) ? !!r[n] : !1;
  }
  function mf() {
    return $p;
  }
  var La = Z({}, Ql, { key: function(n) {
    if (n.key) {
      var r = hf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Yl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Vp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mf, charCode: function(n) {
    return n.type === "keypress" ? Yl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Yl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Vm = ur(La), yf = Z({}, Wt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ps = ur(yf), gf = Z({}, Ql, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mf }), Bm = ur(gf), vs = Z({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pp = ur(vs), Yn = Z({}, Wt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Na = ur(Yn), At = [9, 13, 27, 32], ta = jn && "CompositionEvent" in window, qi = null;
  jn && "documentMode" in document && (qi = document.documentMode);
  var hs = jn && "TextEvent" in window && !qi, Yp = jn && (!ta || qi && 8 < qi && 11 >= qi), Il = String.fromCharCode(32), Qp = !1;
  function Ip(n, r) {
    switch (n) {
      case "keyup":
        return At.indexOf(r.keyCode) !== -1;
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
  var Gl = !1;
  function $m(n, r) {
    switch (n) {
      case "compositionend":
        return ms(r);
      case "keypress":
        return r.which !== 32 ? null : (Qp = !0, Il);
      case "textInput":
        return n = r.data, n === Il && Qp ? null : n;
      default:
        return null;
    }
  }
  function Pm(n, r) {
    if (Gl)
      return n === "compositionend" || !ta && Ip(n, r) ? (n = ff(), Zu = Ku = Ma = null, Gl = !1, n) : null;
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
        return Yp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Gp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Wp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Gp[n.type] : r === "textarea";
  }
  function Xp(n, r, l, o) {
    Jo(o), r = oo(r, "onChange"), 0 < r.length && (l = new cs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var to = null, Wl = null;
  function Xl(n) {
    Cs(n, 0);
  }
  function ql(n) {
    var r = Zl(n);
    if (_a(r))
      return n;
  }
  function qp(n, r) {
    if (n === "change")
      return r;
  }
  var Sf = !1;
  if (jn) {
    var Cf;
    if (jn) {
      var Ef = "oninput" in document;
      if (!Ef) {
        var Kp = document.createElement("div");
        Kp.setAttribute("oninput", "return;"), Ef = typeof Kp.oninput == "function";
      }
      Cf = Ef;
    } else
      Cf = !1;
    Sf = Cf && (!document.documentMode || 9 < document.documentMode);
  }
  function Zp() {
    to && (to.detachEvent("onpropertychange", Jp), Wl = to = null);
  }
  function Jp(n) {
    if (n.propertyName === "value" && ql(Wl)) {
      var r = [];
      Xp(r, Wl, n, Tt(n)), Zc(Xl, r);
    }
  }
  function Ym(n, r, l) {
    n === "focusin" ? (Zp(), to = r, Wl = l, to.attachEvent("onpropertychange", Jp)) : n === "focusout" && Zp();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ql(Wl);
  }
  function Im(n, r) {
    if (n === "click")
      return ql(r);
  }
  function ev(n, r) {
    if (n === "input" || n === "change")
      return ql(r);
  }
  function Gm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var _r = typeof Object.is == "function" ? Object.is : Gm;
  function no(n, r) {
    if (_r(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!xe.call(r, c) || !_r(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function tv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function nv(n, r) {
    var l = tv(n);
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
      l = tv(l);
    }
  }
  function rv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? rv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ys() {
    for (var n = window, r = mn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = mn(n.document);
    }
    return r;
  }
  function za(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function gs(n) {
    var r = ys(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && rv(l.ownerDocument.documentElement, l)) {
      if (o !== null && za(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = nv(l, d);
          var h = nv(
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
  var av = jn && "documentMode" in document && 11 >= document.documentMode, na = null, Tf = null, ro = null, Rf = !1;
  function iv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rf || na == null || na !== mn(o) || (o = na, "selectionStart" in o && za(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ro && no(ro, o) || (ro = o, o = oo(Tf, "onSelect"), 0 < o.length && (r = new cs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = na)));
  }
  function Ss(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ki = { animationend: Ss("Animation", "AnimationEnd"), animationiteration: Ss("Animation", "AnimationIteration"), animationstart: Ss("Animation", "AnimationStart"), transitionend: Ss("Transition", "TransitionEnd") }, xf = {}, wf = {};
  jn && (wf = document.createElement("div").style, "AnimationEvent" in window || (delete Ki.animationend.animation, delete Ki.animationiteration.animation, delete Ki.animationstart.animation), "TransitionEvent" in window || delete Ki.transitionend.transition);
  function Xt(n) {
    if (xf[n])
      return xf[n];
    if (!Ki[n])
      return n;
    var r = Ki[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in wf)
        return xf[n] = r[l];
    return n;
  }
  var Df = Xt("animationend"), lv = Xt("animationiteration"), uv = Xt("animationstart"), ov = Xt("transitionend"), sv = /* @__PURE__ */ new Map(), cv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    sv.set(n, r), Be(r, [n]);
  }
  for (var ao = 0; ao < cv.length; ao++) {
    var Zi = cv[ao], Wm = Zi.toLowerCase(), io = Zi[0].toUpperCase() + Zi.slice(1);
    Ua(Wm, "on" + io);
  }
  Ua(Df, "onAnimationEnd"), Ua(lv, "onAnimationIteration"), Ua(uv, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(ov, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Be("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Be("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Be("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Be("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Be("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));
  function fv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, jl(o, r, void 0, n), n.currentTarget = null;
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
            var g = o[h], C = g.instance, L = g.currentTarget;
            if (g = g.listener, C !== d && c.isPropagationStopped())
              break e;
            fv(c, g, L), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (g = o[h], C = g.instance, L = g.currentTarget, g = g.listener, C !== d && c.isPropagationStopped())
              break e;
            fv(c, g, L), d = C;
          }
      }
    }
    if (Fl)
      throw n = $u, Fl = !1, $u = null, n;
  }
  function at(n, r) {
    var l = r[Nf];
    l === void 0 && (l = r[Nf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (dv(r, n, 2, !1), l.add(o));
  }
  function vi(n, r, l) {
    var o = 0;
    r && (o |= 4), dv(l, n, o, r);
  }
  var Aa = "_reactListening" + Math.random().toString(36).slice(2);
  function Kl(n) {
    if (!n[Aa]) {
      n[Aa] = !0, Ve.forEach(function(l) {
        l !== "selectionchange" && (Xm.has(l) || vi(l, !1, n), vi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Aa] || (r[Aa] = !0, vi("selectionchange", !1, r));
    }
  }
  function dv(n, r, l, o) {
    switch (cf(r)) {
      case 1:
        var c = zp;
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
    Zc(function() {
      var L = d, j = Tt(l), V = [];
      e: {
        var F = sv.get(n);
        if (F !== void 0) {
          var W = cs, ee = n;
          switch (n) {
            case "keypress":
              if (Yl(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              W = Vm;
              break;
            case "focusin":
              ee = "focus", W = pi;
              break;
            case "focusout":
              ee = "blur", W = pi;
              break;
            case "beforeblur":
            case "afterblur":
              W = pi;
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
              W = ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Fp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = Bm;
              break;
            case Df:
            case lv:
            case uv:
              W = jp;
              break;
            case ov:
              W = Pp;
              break;
            case "scroll":
              W = Ap;
              break;
            case "wheel":
              W = Na;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = Fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = ps;
          }
          var re = (r & 4) !== 0, Ot = !re && n === "scroll", w = re ? F !== null ? F + "Capture" : null : F;
          re = [];
          for (var T = L, k; T !== null; ) {
            k = T;
            var $ = k.stateNode;
            if (k.tag === 5 && $ !== null && (k = $, w !== null && ($ = Bu(T, w), $ != null && re.push(uo(T, $, k)))), Ot)
              break;
            T = T.return;
          }
          0 < re.length && (F = new W(F, ee, null, l, j), V.push({ event: F, listeners: re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (F = n === "mouseover" || n === "pointerover", W = n === "mouseout" || n === "pointerout", F && l !== Rr && (ee = l.relatedTarget || l.fromElement) && (br(ee) || ee[Ha]))
            break e;
          if ((W || F) && (F = j.window === j ? j : (F = j.ownerDocument) ? F.defaultView || F.parentWindow : window, W ? (ee = l.relatedTarget || l.toElement, W = L, ee = ee ? br(ee) : null, ee !== null && (Ot = da(ee), ee !== Ot || ee.tag !== 5 && ee.tag !== 6) && (ee = null)) : (W = null, ee = L), W !== ee)) {
            if (re = ds, $ = "onMouseLeave", w = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (re = ps, $ = "onPointerLeave", w = "onPointerEnter", T = "pointer"), Ot = W == null ? F : Zl(W), k = ee == null ? F : Zl(ee), F = new re($, T + "leave", W, l, j), F.target = Ot, F.relatedTarget = k, $ = null, br(j) === L && (re = new re(w, T + "enter", ee, l, j), re.target = k, re.relatedTarget = Ot, $ = re), Ot = $, W && ee)
              t: {
                for (re = W, w = ee, T = 0, k = re; k; k = Ji(k))
                  T++;
                for (k = 0, $ = w; $; $ = Ji($))
                  k++;
                for (; 0 < T - k; )
                  re = Ji(re), T--;
                for (; 0 < k - T; )
                  w = Ji(w), k--;
                for (; T--; ) {
                  if (re === w || w !== null && re === w.alternate)
                    break t;
                  re = Ji(re), w = Ji(w);
                }
                re = null;
              }
            else
              re = null;
            W !== null && _f(V, F, W, re, !1), ee !== null && Ot !== null && _f(V, Ot, ee, re, !0);
          }
        }
        e: {
          if (F = L ? Zl(L) : window, W = F.nodeName && F.nodeName.toLowerCase(), W === "select" || W === "input" && F.type === "file")
            var ae = qp;
          else if (Wp(F))
            if (Sf)
              ae = ev;
            else {
              ae = Qm;
              var te = Ym;
            }
          else
            (W = F.nodeName) && W.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (ae = Im);
          if (ae && (ae = ae(n, L))) {
            Xp(V, ae, l, j);
            break e;
          }
          te && te(n, F, L), n === "focusout" && (te = F._wrapperState) && te.controlled && F.type === "number" && Al(F, "number", F.value);
        }
        switch (te = L ? Zl(L) : window, n) {
          case "focusin":
            (Wp(te) || te.contentEditable === "true") && (na = te, Tf = L, ro = null);
            break;
          case "focusout":
            ro = Tf = na = null;
            break;
          case "mousedown":
            Rf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rf = !1, iv(V, l, j);
            break;
          case "selectionchange":
            if (av)
              break;
          case "keydown":
          case "keyup":
            iv(V, l, j);
        }
        var oe;
        if (ta)
          e: {
            switch (n) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Gl ? Ip(n, l) && (Ce = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Yp && l.locale !== "ko" && (Gl || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Gl && (oe = ff()) : (Ma = j, Ku = "value" in Ma ? Ma.value : Ma.textContent, Gl = !0)), te = oo(L, Ce), 0 < te.length && (Ce = new vf(Ce, n, null, l, j), V.push({ event: Ce, listeners: te }), oe ? Ce.data = oe : (oe = ms(l), oe !== null && (Ce.data = oe)))), (oe = hs ? $m(n, l) : Pm(n, l)) && (L = oo(L, "onBeforeInput"), 0 < L.length && (j = new vf("onBeforeInput", "beforeinput", null, l, j), V.push({ event: j, listeners: L }), j.data = oe));
      }
      Cs(V, r);
    });
  }
  function uo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function oo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Bu(n, l), d != null && o.unshift(uo(n, d, c)), d = Bu(n, r), d != null && o.push(uo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Ji(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function _f(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var g = l, C = g.alternate, L = g.stateNode;
      if (C !== null && C === o)
        break;
      g.tag === 5 && L !== null && (g = L, c ? (C = Bu(l, d), C != null && h.unshift(uo(l, C, g))) : c || (C = Bu(l, d), C != null && h.push(uo(l, C, g)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var bf = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function kf(n) {
    return (typeof n == "string" ? n : "" + n).replace(bf, `
`).replace(qm, "");
  }
  function Ts(n, r, l) {
    if (r = kf(r), kf(n) !== r && l)
      throw Error(x(425));
  }
  function Rs() {
  }
  var Of = null, el = null;
  function so(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tl = typeof setTimeout == "function" ? setTimeout : void 0, pv = typeof clearTimeout == "function" ? clearTimeout : void 0, Mf = typeof Promise == "function" ? Promise : void 0, Lf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mf < "u" ? function(n) {
    return Mf.resolve(null).then(n).catch(Km);
  } : tl;
  function Km(n) {
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
            n.removeChild(c), Xu(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Xu(r);
  }
  function ra(n) {
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
  function co(n) {
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
  var mi = Math.random().toString(36).slice(2), pa = "__reactFiber$" + mi, nl = "__reactProps$" + mi, Ha = "__reactContainer$" + mi, Nf = "__reactEvents$" + mi, Zm = "__reactListeners$" + mi, zf = "__reactHandles$" + mi;
  function br(n) {
    var r = n[pa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ha] || l[pa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = co(n); n !== null; ) {
            if (l = n[pa])
              return l;
            n = co(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function fo(n) {
    return n = n[pa] || n[Ha], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Zl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(x(33));
  }
  function se(n) {
    return n[nl] || null;
  }
  var yi = [], st = -1;
  function we(n) {
    return { current: n };
  }
  function Qe(n) {
    0 > st || (n.current = yi[st], yi[st] = null, st--);
  }
  function Ie(n, r) {
    st++, yi[st] = n.current, n.current = r;
  }
  var va = {}, Se = we(va), wt = we(!1), Qn = va;
  function kr(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return va;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function vt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Or() {
    Qe(wt), Qe(Se);
  }
  function gi(n, r, l) {
    if (Se.current !== va)
      throw Error(x(168));
    Ie(Se, r), Ie(wt, l);
  }
  function po(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(x(108, ii(n) || "Unknown", c));
    return Z({}, l, o);
  }
  function xs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || va, Qn = Se.current, Ie(Se, n), Ie(wt, wt.current), !0;
  }
  function vv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(x(169));
    l ? (n = po(n, r, Qn), o.__reactInternalMemoizedMergedChildContext = n, Qe(wt), Qe(Se), Ie(Se, n)) : Qe(wt), Ie(wt, l);
  }
  var or = null, qt = !1, vo = !1;
  function Uf(n) {
    or === null ? or = [n] : or.push(n);
  }
  function Af(n) {
    qt = !0, Uf(n);
  }
  function In() {
    if (!vo && or !== null) {
      vo = !0;
      var n = 0, r = Xe;
      try {
        var l = or;
        for (Xe = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        or = null, qt = !1;
      } catch (c) {
        throw or !== null && (or = or.slice(n + 1)), tf(Oa, In), c;
      } finally {
        Xe = r, vo = !1;
      }
    }
    return null;
  }
  var Si = [], Gn = 0, rl = null, Jl = 0, Wn = [], Sn = 0, Mr = null, rn = 1, Fa = "";
  function sr(n, r) {
    Si[Gn++] = Jl, Si[Gn++] = rl, rl = n, Jl = r;
  }
  function Hf(n, r, l) {
    Wn[Sn++] = rn, Wn[Sn++] = Fa, Wn[Sn++] = Mr, Mr = n;
    var o = rn;
    n = Fa;
    var c = 32 - xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - xr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, rn = 1 << 32 - xr(r) + c | l << c | o, Fa = d + n;
    } else
      rn = 1 << d | l << c | o, Fa = n;
  }
  function ws(n) {
    n.return !== null && (sr(n, 1), Hf(n, 1, 0));
  }
  function Ff(n) {
    for (; n === rl; )
      rl = Si[--Gn], Si[Gn] = null, Jl = Si[--Gn], Si[Gn] = null;
    for (; n === Mr; )
      Mr = Wn[--Sn], Wn[Sn] = null, Fa = Wn[--Sn], Wn[Sn] = null, rn = Wn[--Sn], Wn[Sn] = null;
  }
  var cr = null, Xn = null, ct = !1, Lr = null;
  function jf(n, r) {
    var l = Fr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, cr = n, Xn = ra(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, cr = n, Xn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Mr !== null ? { id: rn, overflow: Fa } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Fr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, cr = n, Xn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ds(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _s(n) {
    if (ct) {
      var r = Xn;
      if (r) {
        var l = r;
        if (!hv(n, r)) {
          if (Ds(n))
            throw Error(x(418));
          r = ra(l.nextSibling);
          var o = cr;
          r && hv(n, r) ? jf(o, l) : (n.flags = n.flags & -4097 | 2, ct = !1, cr = n);
        }
      } else {
        if (Ds(n))
          throw Error(x(418));
        n.flags = n.flags & -4097 | 2, ct = !1, cr = n;
      }
    }
  }
  function mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    cr = n;
  }
  function bs(n) {
    if (n !== cr)
      return !1;
    if (!ct)
      return mv(n), ct = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !so(n.type, n.memoizedProps)), r && (r = Xn)) {
      if (Ds(n))
        throw yv(), Error(x(418));
      for (; r; )
        jf(n, r), r = ra(r.nextSibling);
    }
    if (mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(x(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xn = ra(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xn = null;
      }
    } else
      Xn = cr ? ra(n.stateNode.nextSibling) : null;
    return !0;
  }
  function yv() {
    for (var n = Xn; n; )
      n = ra(n.nextSibling);
  }
  function yt() {
    Xn = cr = null, ct = !1;
  }
  function Vf(n) {
    Lr === null ? Lr = [n] : Lr.push(n);
  }
  var ks = ot.ReactCurrentBatchConfig;
  function fr(n, r) {
    if (n && n.defaultProps) {
      r = Z({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ha = we(null), Os = null, Ci = null, Bf = null;
  function $f() {
    Bf = Ci = Os = null;
  }
  function Ei(n) {
    var r = ha.current;
    Qe(ha), n._currentValue = r;
  }
  function Kt(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function P(n, r) {
    Os = n, Bf = Ci = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Ht = !0), n.firstContext = null);
  }
  function kt(n) {
    var r = n._currentValue;
    if (Bf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ci === null) {
        if (Os === null)
          throw Error(x(308));
        Ci = n, Os.dependencies = { lanes: 0, firstContext: n };
      } else
        Ci = Ci.next = n;
    return r;
  }
  var an = null;
  function Pf(n) {
    an === null ? an = [n] : an.push(n);
  }
  function gv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Pf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ja(n, o);
  }
  function ja(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ti = !1;
  function Yf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $t(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Va(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ri(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Le & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ja(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Pf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ja(n, l);
  }
  function Ms(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qu(n, l);
    }
  }
  function Qf(n, r) {
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
  function xi(n, r, l, o) {
    var c = n.updateQueue;
    Ti = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, g = c.shared.pending;
    if (g !== null) {
      c.shared.pending = null;
      var C = g, L = C.next;
      C.next = null, h === null ? d = L : h.next = L, h = C;
      var j = n.alternate;
      j !== null && (j = j.updateQueue, g = j.lastBaseUpdate, g !== h && (g === null ? j.firstBaseUpdate = L : g.next = L, j.lastBaseUpdate = C));
    }
    if (d !== null) {
      var V = c.baseState;
      h = 0, j = L = C = null, g = d;
      do {
        var F = g.lane, W = g.eventTime;
        if ((o & F) === F) {
          j !== null && (j = j.next = {
            eventTime: W,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var ee = n, re = g;
            switch (F = r, W = l, re.tag) {
              case 1:
                if (ee = re.payload, typeof ee == "function") {
                  V = ee.call(W, V, F);
                  break e;
                }
                V = ee;
                break e;
              case 3:
                ee.flags = ee.flags & -65537 | 128;
              case 0:
                if (ee = re.payload, F = typeof ee == "function" ? ee.call(W, V, F) : ee, F == null)
                  break e;
                V = Z({}, V, F);
                break e;
              case 2:
                Ti = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (n.flags |= 64, F = c.effects, F === null ? c.effects = [g] : F.push(g));
        } else
          W = { eventTime: W, lane: F, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, j === null ? (L = j = W, C = V) : j = j.next = W, h |= F;
        if (g = g.next, g === null) {
          if (g = c.shared.pending, g === null)
            break;
          F = g, g = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (1);
      if (j === null && (C = V), c.baseState = C, c.firstBaseUpdate = L, c.lastBaseUpdate = j, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ya |= h, n.lanes = h, n.memoizedState = V;
    }
  }
  function al(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(x(191, c));
          c.call(o);
        }
      }
  }
  var Sv = new b.Component().refs;
  function If(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : Z({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ls = { isMounted: function(n) {
    return (n = n._reactInternals) ? da(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Rn(), c = Ft(n), d = Va(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (xn(r, n, c, o), Ms(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Rn(), c = Ft(n), d = Va(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (xn(r, n, c, o), Ms(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Rn(), o = Ft(n), c = Va(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ri(n, c, o), r !== null && (xn(r, n, o, l), Ms(r, n, o));
  } };
  function Cv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !no(l, o) || !no(c, d) : !0;
  }
  function Ev(n, r, l) {
    var o = !1, c = va, d = r.contextType;
    return typeof d == "object" && d !== null ? d = kt(d) : (c = vt(r) ? Qn : Se.current, o = r.contextTypes, d = (o = o != null) ? kr(n, c) : va), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ls, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Tv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ls.enqueueReplaceState(r, r.state, null);
  }
  function Ns(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Sv, Yf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = kt(d) : (d = vt(r) ? Qn : Se.current, c.context = kr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (If(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ls.enqueueReplaceState(c, c.state, null), xi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function eu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(x(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(x(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var g = c.refs;
          g === Sv && (g = c.refs = {}), h === null ? delete g[d] : g[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(x(284));
      if (!l._owner)
        throw Error(x(290, n));
    }
    return n;
  }
  function zs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(x(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Rv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function xv(n) {
    function r(w, T) {
      if (n) {
        var k = w.deletions;
        k === null ? (w.deletions = [T], w.flags |= 16) : k.push(T);
      }
    }
    function l(w, T) {
      if (!n)
        return null;
      for (; T !== null; )
        r(w, T), T = T.sibling;
      return null;
    }
    function o(w, T) {
      for (w = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? w.set(T.key, T) : w.set(T.index, T), T = T.sibling;
      return w;
    }
    function c(w, T) {
      return w = Li(w, T), w.index = 0, w.sibling = null, w;
    }
    function d(w, T, k) {
      return w.index = k, n ? (k = w.alternate, k !== null ? (k = k.index, k < T ? (w.flags |= 2, T) : k) : (w.flags |= 2, T)) : (w.flags |= 1048576, T);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function g(w, T, k, $) {
      return T === null || T.tag !== 6 ? (T = No(k, w.mode, $), T.return = w, T) : (T = c(T, k), T.return = w, T);
    }
    function C(w, T, k, $) {
      var ae = k.type;
      return ae === be ? j(w, T, k.props.children, $, k.key) : T !== null && (T.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Et && Rv(ae) === T.type) ? ($ = c(T, k.props), $.ref = eu(w, T, k), $.return = w, $) : ($ = dc(k.type, k.key, k.props, null, w.mode, $), $.ref = eu(w, T, k), $.return = w, $);
    }
    function L(w, T, k, $) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = Rl(k, w.mode, $), T.return = w, T) : (T = c(T, k.children || []), T.return = w, T);
    }
    function j(w, T, k, $, ae) {
      return T === null || T.tag !== 7 ? (T = Tl(k, w.mode, $, ae), T.return = w, T) : (T = c(T, k), T.return = w, T);
    }
    function V(w, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = No("" + T, w.mode, k), T.return = w, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ue:
            return k = dc(T.type, T.key, T.props, null, w.mode, k), k.ref = eu(w, null, T), k.return = w, k;
          case mt:
            return T = Rl(T, w.mode, k), T.return = w, T;
          case Et:
            var $ = T._init;
            return V(w, $(T._payload), k);
        }
        if (Yi(T) || ye(T))
          return T = Tl(T, w.mode, k, null), T.return = w, T;
        zs(w, T);
      }
      return null;
    }
    function F(w, T, k, $) {
      var ae = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return ae !== null ? null : g(w, T, "" + k, $);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ue:
            return k.key === ae ? C(w, T, k, $) : null;
          case mt:
            return k.key === ae ? L(w, T, k, $) : null;
          case Et:
            return ae = k._init, F(
              w,
              T,
              ae(k._payload),
              $
            );
        }
        if (Yi(k) || ye(k))
          return ae !== null ? null : j(w, T, k, $, null);
        zs(w, k);
      }
      return null;
    }
    function W(w, T, k, $, ae) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return w = w.get(k) || null, g(T, w, "" + $, ae);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Ue:
            return w = w.get($.key === null ? k : $.key) || null, C(T, w, $, ae);
          case mt:
            return w = w.get($.key === null ? k : $.key) || null, L(T, w, $, ae);
          case Et:
            var te = $._init;
            return W(w, T, k, te($._payload), ae);
        }
        if (Yi($) || ye($))
          return w = w.get(k) || null, j(T, w, $, ae, null);
        zs(T, $);
      }
      return null;
    }
    function ee(w, T, k, $) {
      for (var ae = null, te = null, oe = T, Ce = T = 0, en = null; oe !== null && Ce < k.length; Ce++) {
        oe.index > Ce ? (en = oe, oe = null) : en = oe.sibling;
        var $e = F(w, oe, k[Ce], $);
        if ($e === null) {
          oe === null && (oe = en);
          break;
        }
        n && oe && $e.alternate === null && r(w, oe), T = d($e, T, Ce), te === null ? ae = $e : te.sibling = $e, te = $e, oe = en;
      }
      if (Ce === k.length)
        return l(w, oe), ct && sr(w, Ce), ae;
      if (oe === null) {
        for (; Ce < k.length; Ce++)
          oe = V(w, k[Ce], $), oe !== null && (T = d(oe, T, Ce), te === null ? ae = oe : te.sibling = oe, te = oe);
        return ct && sr(w, Ce), ae;
      }
      for (oe = o(w, oe); Ce < k.length; Ce++)
        en = W(oe, w, Ce, k[Ce], $), en !== null && (n && en.alternate !== null && oe.delete(en.key === null ? Ce : en.key), T = d(en, T, Ce), te === null ? ae = en : te.sibling = en, te = en);
      return n && oe.forEach(function(Ni) {
        return r(w, Ni);
      }), ct && sr(w, Ce), ae;
    }
    function re(w, T, k, $) {
      var ae = ye(k);
      if (typeof ae != "function")
        throw Error(x(150));
      if (k = ae.call(k), k == null)
        throw Error(x(151));
      for (var te = ae = null, oe = T, Ce = T = 0, en = null, $e = k.next(); oe !== null && !$e.done; Ce++, $e = k.next()) {
        oe.index > Ce ? (en = oe, oe = null) : en = oe.sibling;
        var Ni = F(w, oe, $e.value, $);
        if (Ni === null) {
          oe === null && (oe = en);
          break;
        }
        n && oe && Ni.alternate === null && r(w, oe), T = d(Ni, T, Ce), te === null ? ae = Ni : te.sibling = Ni, te = Ni, oe = en;
      }
      if ($e.done)
        return l(
          w,
          oe
        ), ct && sr(w, Ce), ae;
      if (oe === null) {
        for (; !$e.done; Ce++, $e = k.next())
          $e = V(w, $e.value, $), $e !== null && (T = d($e, T, Ce), te === null ? ae = $e : te.sibling = $e, te = $e);
        return ct && sr(w, Ce), ae;
      }
      for (oe = o(w, oe); !$e.done; Ce++, $e = k.next())
        $e = W(oe, w, Ce, $e.value, $), $e !== null && (n && $e.alternate !== null && oe.delete($e.key === null ? Ce : $e.key), T = d($e, T, Ce), te === null ? ae = $e : te.sibling = $e, te = $e);
      return n && oe.forEach(function(gy) {
        return r(w, gy);
      }), ct && sr(w, Ce), ae;
    }
    function Ot(w, T, k, $) {
      if (typeof k == "object" && k !== null && k.type === be && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ue:
            e: {
              for (var ae = k.key, te = T; te !== null; ) {
                if (te.key === ae) {
                  if (ae = k.type, ae === be) {
                    if (te.tag === 7) {
                      l(w, te.sibling), T = c(te, k.props.children), T.return = w, w = T;
                      break e;
                    }
                  } else if (te.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Et && Rv(ae) === te.type) {
                    l(w, te.sibling), T = c(te, k.props), T.ref = eu(w, te, k), T.return = w, w = T;
                    break e;
                  }
                  l(w, te);
                  break;
                } else
                  r(w, te);
                te = te.sibling;
              }
              k.type === be ? (T = Tl(k.props.children, w.mode, $, k.key), T.return = w, w = T) : ($ = dc(k.type, k.key, k.props, null, w.mode, $), $.ref = eu(w, T, k), $.return = w, w = $);
            }
            return h(w);
          case mt:
            e: {
              for (te = k.key; T !== null; ) {
                if (T.key === te)
                  if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                    l(w, T.sibling), T = c(T, k.children || []), T.return = w, w = T;
                    break e;
                  } else {
                    l(w, T);
                    break;
                  }
                else
                  r(w, T);
                T = T.sibling;
              }
              T = Rl(k, w.mode, $), T.return = w, w = T;
            }
            return h(w);
          case Et:
            return te = k._init, Ot(w, T, te(k._payload), $);
        }
        if (Yi(k))
          return ee(w, T, k, $);
        if (ye(k))
          return re(w, T, k, $);
        zs(w, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(w, T.sibling), T = c(T, k), T.return = w, w = T) : (l(w, T), T = No(k, w.mode, $), T.return = w, w = T), h(w)) : l(w, T);
    }
    return Ot;
  }
  var tu = xv(!0), wv = xv(!1), ho = {}, aa = we(ho), mo = we(ho), nu = we(ho);
  function il(n) {
    if (n === ho)
      throw Error(x(174));
    return n;
  }
  function Gf(n, r) {
    switch (Ie(nu, r), Ie(mo, n), Ie(aa, ho), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Pn(r, n);
    }
    Qe(aa), Ie(aa, r);
  }
  function wi() {
    Qe(aa), Qe(mo), Qe(nu);
  }
  function de(n) {
    il(nu.current);
    var r = il(aa.current), l = Pn(r, n.type);
    r !== l && (Ie(mo, n), Ie(aa, l));
  }
  function _e(n) {
    mo.current === n && (Qe(aa), Qe(mo));
  }
  var ve = we(0);
  function gt(n) {
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
  var Nr = [];
  function Us() {
    for (var n = 0; n < Nr.length; n++)
      Nr[n]._workInProgressVersionPrimary = null;
    Nr.length = 0;
  }
  var As = ot.ReactCurrentDispatcher, Wf = ot.ReactCurrentBatchConfig, ll = 0, ft = null, U = null, He = null, he = !1, ma = !1, dr = 0, ul = 0;
  function dt() {
    throw Error(x(321));
  }
  function ol(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!_r(n[l], r[l]))
        return !1;
    return !0;
  }
  function Di(n, r, l, o, c, d) {
    if (ll = d, ft = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, As.current = n === null || n.memoizedState === null ? ey : ty, n = l(o, c), ma) {
      d = 0;
      do {
        if (ma = !1, dr = 0, 25 <= d)
          throw Error(x(301));
        d += 1, He = U = null, r.updateQueue = null, As.current = qf, n = l(o, c);
      } while (ma);
    }
    if (As.current = Zs, r = U !== null && U.next !== null, ll = 0, He = U = ft = null, he = !1, r)
      throw Error(x(300));
    return n;
  }
  function sl() {
    var n = dr !== 0;
    return dr = 0, n;
  }
  function zr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return He === null ? ft.memoizedState = He = n : He = He.next = n, He;
  }
  function qn() {
    if (U === null) {
      var n = ft.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = U.next;
    var r = He === null ? ft.memoizedState : He.next;
    if (r !== null)
      He = r, U = n;
    else {
      if (n === null)
        throw Error(x(310));
      U = n, n = { memoizedState: U.memoizedState, baseState: U.baseState, baseQueue: U.baseQueue, queue: U.queue, next: null }, He === null ? ft.memoizedState = He = n : He = He.next = n;
    }
    return He;
  }
  function cl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function yo(n) {
    var r = qn(), l = r.queue;
    if (l === null)
      throw Error(x(311));
    l.lastRenderedReducer = n;
    var o = U, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var g = h = null, C = null, L = d;
      do {
        var j = L.lane;
        if ((ll & j) === j)
          C !== null && (C = C.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), o = L.hasEagerState ? L.eagerState : n(o, L.action);
        else {
          var V = {
            lane: j,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          C === null ? (g = C = V, h = o) : C = C.next = V, ft.lanes |= j, Ya |= j;
        }
        L = L.next;
      } while (L !== null && L !== d);
      C === null ? h = o : C.next = g, _r(o, r.memoizedState) || (Ht = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ft.lanes |= d, Ya |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function go(n) {
    var r = qn(), l = r.queue;
    if (l === null)
      throw Error(x(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      _r(d, r.memoizedState) || (Ht = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hs() {
  }
  function Fs(n, r) {
    var l = ft, o = qn(), c = r(), d = !_r(o.memoizedState, c);
    if (d && (o.memoizedState = c, Ht = !0), o = o.queue, So(Bs.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || He !== null && He.memoizedState.tag & 1) {
      if (l.flags |= 2048, fl(9, Vs.bind(null, l, o, c, r), void 0, null), St === null)
        throw Error(x(349));
      ll & 30 || js(l, r, c);
    }
    return c;
  }
  function js(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ft.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Vs(n, r, l, o) {
    r.value = l, r.getSnapshot = o, $s(r) && Ps(n);
  }
  function Bs(n, r, l) {
    return l(function() {
      $s(r) && Ps(n);
    });
  }
  function $s(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !_r(n, l);
    } catch {
      return !0;
    }
  }
  function Ps(n) {
    var r = ja(n, 1);
    r !== null && xn(r, n, 1, -1);
  }
  function Ys(n) {
    var r = zr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ks.bind(null, ft, n), [r.memoizedState, n];
  }
  function fl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ft.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qs() {
    return qn().memoizedState;
  }
  function dl(n, r, l, o) {
    var c = zr();
    ft.flags |= n, c.memoizedState = fl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Ba(n, r, l, o) {
    var c = qn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (U !== null) {
      var h = U.memoizedState;
      if (d = h.destroy, o !== null && ol(o, h.deps)) {
        c.memoizedState = fl(r, l, d, o);
        return;
      }
    }
    ft.flags |= n, c.memoizedState = fl(1 | r, l, d, o);
  }
  function Is(n, r) {
    return dl(8390656, 8, n, r);
  }
  function So(n, r) {
    return Ba(2048, 8, n, r);
  }
  function Gs(n, r) {
    return Ba(4, 2, n, r);
  }
  function Ws(n, r) {
    return Ba(4, 4, n, r);
  }
  function Xf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function ru(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ba(4, 4, Xf.bind(null, r, n), l);
  }
  function Xs() {
  }
  function au(n, r) {
    var l = qn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ol(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function _i(n, r) {
    var l = qn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ol(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Kn(n, r, l) {
    return ll & 21 ? (_r(l, r) || (l = is(), ft.lanes |= l, Ya |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Ht = !0), n.memoizedState = l);
  }
  function Jm(n, r) {
    var l = Xe;
    Xe = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Wf.transition;
    Wf.transition = {};
    try {
      n(!1), r();
    } finally {
      Xe = l, Wf.transition = o;
    }
  }
  function it() {
    return qn().memoizedState;
  }
  function qs(n, r, l) {
    var o = Ft(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, iu(n))
      Co(r, l);
    else if (l = gv(n, r, l, o), l !== null) {
      var c = Rn();
      xn(l, n, o, c), Dv(l, r, o);
    }
  }
  function Ks(n, r, l) {
    var o = Ft(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (iu(n))
      Co(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, g = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = g, _r(g, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, Pf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = gv(n, r, c, o), l !== null && (c = Rn(), xn(l, n, o, c), Dv(l, r, o));
    }
  }
  function iu(n) {
    var r = n.alternate;
    return n === ft || r !== null && r === ft;
  }
  function Co(n, r) {
    ma = he = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qu(n, l);
    }
  }
  var Zs = { readContext: kt, useCallback: dt, useContext: dt, useEffect: dt, useImperativeHandle: dt, useInsertionEffect: dt, useLayoutEffect: dt, useMemo: dt, useReducer: dt, useRef: dt, useState: dt, useDebugValue: dt, useDeferredValue: dt, useTransition: dt, useMutableSource: dt, useSyncExternalStore: dt, useId: dt, unstable_isNewReconciler: !1 }, ey = { readContext: kt, useCallback: function(n, r) {
    return zr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: kt, useEffect: Is, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, dl(
      4194308,
      4,
      Xf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return dl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return dl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = zr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = zr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = qs.bind(null, ft, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = zr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ys, useDebugValue: Xs, useDeferredValue: function(n) {
    return zr().memoizedState = n;
  }, useTransition: function() {
    var n = Ys(!1), r = n[0];
    return n = Jm.bind(null, n[1]), zr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ft, c = zr();
    if (ct) {
      if (l === void 0)
        throw Error(x(407));
      l = l();
    } else {
      if (l = r(), St === null)
        throw Error(x(349));
      ll & 30 || js(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Is(Bs.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, fl(9, Vs.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = zr(), r = St.identifierPrefix;
    if (ct) {
      var l = Fa, o = rn;
      l = (o & ~(1 << 32 - xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = dr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ul++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ty = {
    readContext: kt,
    useCallback: au,
    useContext: kt,
    useEffect: So,
    useImperativeHandle: ru,
    useInsertionEffect: Gs,
    useLayoutEffect: Ws,
    useMemo: _i,
    useReducer: yo,
    useRef: Qs,
    useState: function() {
      return yo(cl);
    },
    useDebugValue: Xs,
    useDeferredValue: function(n) {
      var r = qn();
      return Kn(r, U.memoizedState, n);
    },
    useTransition: function() {
      var n = yo(cl)[0], r = qn().memoizedState;
      return [n, r];
    },
    useMutableSource: Hs,
    useSyncExternalStore: Fs,
    useId: it,
    unstable_isNewReconciler: !1
  }, qf = { readContext: kt, useCallback: au, useContext: kt, useEffect: So, useImperativeHandle: ru, useInsertionEffect: Gs, useLayoutEffect: Ws, useMemo: _i, useReducer: go, useRef: Qs, useState: function() {
    return go(cl);
  }, useDebugValue: Xs, useDeferredValue: function(n) {
    var r = qn();
    return U === null ? r.memoizedState = n : Kn(r, U.memoizedState, n);
  }, useTransition: function() {
    var n = go(cl)[0], r = qn().memoizedState;
    return [n, r];
  }, useMutableSource: Hs, useSyncExternalStore: Fs, useId: it, unstable_isNewReconciler: !1 };
  function lu(n, r) {
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
  function Eo(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Js(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ny = typeof WeakMap == "function" ? WeakMap : Map;
  function _v(n, r, l) {
    l = Va(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      lc || (lc = !0, yl = o), Js(n, r);
    }, l;
  }
  function To(n, r, l) {
    l = Va(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Js(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Js(n, r), typeof o != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([this]) : Sa.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function bv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ny();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = sy.bind(null, n, r, l), r.then(n, n));
  }
  function Kf(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Zf(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Va(-1, 1), r.tag = 2, Ri(l, r, 1))), l.lanes |= 1), n);
  }
  var ry = ot.ReactCurrentOwner, Ht = !1;
  function Pt(n, r, l, o) {
    r.child = n === null ? wv(r, null, l, o) : tu(r, n.child, l, o);
  }
  function bi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return P(r, c), o = Di(n, r, l, o, d, c), l = sl(), n !== null && !Ht ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ln(n, r, c)) : (ct && l && ws(r), r.flags |= 1, Pt(n, r, o, c), r.child);
  }
  function ec(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Zn(n, r, d, o, c)) : (n = dc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : no, l(h, o) && n.ref === r.ref)
        return ln(n, r, c);
    }
    return r.flags |= 1, n = Li(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Zn(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (no(d, o) && n.ref === r.ref)
        if (Ht = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Ht = !0);
        else
          return r.lanes = n.lanes, ln(n, r, c);
    }
    return uu(n, r, l, o, c);
  }
  function pl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ie(pu, pr), pr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ie(pu, pr), pr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ie(pu, pr), pr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ie(pu, pr), pr |= o;
    return Pt(n, r, c, l), r.child;
  }
  function De(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function uu(n, r, l, o, c) {
    var d = vt(l) ? Qn : Se.current;
    return d = kr(r, d), P(r, c), l = Di(n, r, l, o, d, c), o = sl(), n !== null && !Ht ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ln(n, r, c)) : (ct && o && ws(r), r.flags |= 1, Pt(n, r, l, c), r.child);
  }
  function Jf(n, r, l, o, c) {
    if (vt(l)) {
      var d = !0;
      xs(r);
    } else
      d = !1;
    if (P(r, c), r.stateNode === null)
      Cn(n, r), Ev(r, l, o), Ns(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, g = r.memoizedProps;
      h.props = g;
      var C = h.context, L = l.contextType;
      typeof L == "object" && L !== null ? L = kt(L) : (L = vt(l) ? Qn : Se.current, L = kr(r, L));
      var j = l.getDerivedStateFromProps, V = typeof j == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      V || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== o || C !== L) && Tv(r, h, o, L), Ti = !1;
      var F = r.memoizedState;
      h.state = F, xi(r, o, h, c), C = r.memoizedState, g !== o || F !== C || wt.current || Ti ? (typeof j == "function" && (If(r, l, j, o), C = r.memoizedState), (g = Ti || Cv(r, l, g, o, F, C, L)) ? (V || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = L, o = g) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, $t(n, r), g = r.memoizedProps, L = r.type === r.elementType ? g : fr(r.type, g), h.props = L, V = r.pendingProps, F = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = kt(C) : (C = vt(l) ? Qn : Se.current, C = kr(r, C));
      var W = l.getDerivedStateFromProps;
      (j = typeof W == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== V || F !== C) && Tv(r, h, o, C), Ti = !1, F = r.memoizedState, h.state = F, xi(r, o, h, c);
      var ee = r.memoizedState;
      g !== V || F !== ee || wt.current || Ti ? (typeof W == "function" && (If(r, l, W, o), ee = r.memoizedState), (L = Ti || Cv(r, l, L, o, F, ee, C) || !1) ? (j || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, ee, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, ee, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ee), h.props = o, h.state = ee, h.context = C, o = L) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return kv(n, r, l, o, d, c);
  }
  function kv(n, r, l, o, c, d) {
    De(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && vv(r, l, !1), ln(n, r, d);
    o = r.stateNode, ry.current = r;
    var g = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = tu(r, n.child, null, d), r.child = tu(r, null, g, d)) : Pt(n, r, g, d), r.memoizedState = o.state, c && vv(r, l, !0), r.child;
  }
  function Ov(n) {
    var r = n.stateNode;
    r.pendingContext ? gi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && gi(n, r.context, !1), Gf(n, r.containerInfo);
  }
  function tc(n, r, l, o, c) {
    return yt(), Vf(c), r.flags |= 256, Pt(n, r, l, o), r.child;
  }
  var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ed(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function td(n, r, l) {
    var o = r.pendingProps, c = ve.current, d = !1, h = (r.flags & 128) !== 0, g;
    if ((g = h) || (g = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), g ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ie(ve, c & 1), n === null)
      return _s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Lo(h, o, 0, null), n = Tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ed(l), r.memoizedState = vl, n) : nd(r, h));
    if (c = n.memoizedState, c !== null && (g = c.dehydrated, g !== null))
      return ay(n, r, h, o, g, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, g = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Li(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), g !== null ? d = Li(g, d) : (d = Tl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? ed(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = vl, o;
    }
    return d = n.child, n = d.sibling, o = Li(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function nd(n, r) {
    return r = Lo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ou(n, r, l, o) {
    return o !== null && Vf(o), tu(r, n.child, null, l), n = nd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ay(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Eo(Error(x(422))), ou(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Lo({ mode: "visible", children: o.children }, c, 0, null), d = Tl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && tu(r, n.child, null, h), r.child.memoizedState = ed(h), r.memoizedState = vl, d);
    if (!(r.mode & 1))
      return ou(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var g = o.dgst;
      return o = g, d = Error(x(419)), o = Eo(d, o, void 0), ou(n, r, h, o);
    }
    if (g = (h & n.childLanes) !== 0, Ht || g) {
      if (o = St, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ja(n, c), xn(o, n, c, -1));
      }
      return vd(), o = Eo(Error(x(421))), ou(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xn = ra(c.nextSibling), cr = r, ct = !0, Lr = null, n !== null && (Wn[Sn++] = rn, Wn[Sn++] = Fa, Wn[Sn++] = Mr, rn = n.id, Fa = n.overflow, Mr = r), r = nd(r, o.children), r.flags |= 4096, r);
  }
  function rd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Kt(n.return, r, l);
  }
  function nc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ad(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Pt(n, r, o.children, l), o = ve.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && rd(n, l, r);
            else if (n.tag === 19)
              rd(n, l, r);
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
    if (Ie(ve, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && gt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), nc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && gt(n) === null) {
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
  function Cn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ln(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ya |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(x(153));
    if (r.child !== null) {
      for (n = r.child, l = Li(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Li(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function $a(n, r, l) {
    switch (r.tag) {
      case 3:
        Ov(r), yt();
        break;
      case 5:
        de(r);
        break;
      case 1:
        vt(r.type) && xs(r);
        break;
      case 4:
        Gf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ie(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ie(ve, ve.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? td(n, r, l) : (Ie(ve, ve.current & 1), n = ln(n, r, l), n !== null ? n.sibling : null);
        Ie(ve, ve.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return ad(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ie(ve, ve.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, pl(n, r, l);
    }
    return ln(n, r, l);
  }
  var Ro, hl, Ur, Yt;
  Ro = function(n, r) {
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
  }, hl = function() {
  }, Ur = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, il(aa.current);
      var d = null;
      switch (l) {
        case "input":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        case "select":
          c = Z({}, c, { value: void 0 }), o = Z({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Qi(n, c), o = Qi(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Rs);
      }
      yn(l, o);
      var h;
      l = null;
      for (L in c)
        if (!o.hasOwnProperty(L) && c.hasOwnProperty(L) && c[L] != null)
          if (L === "style") {
            var g = c[L];
            for (h in g)
              g.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (Lt.hasOwnProperty(L) ? d || (d = []) : (d = d || []).push(L, null));
      for (L in o) {
        var C = o[L];
        if (g = c != null ? c[L] : void 0, o.hasOwnProperty(L) && C !== g && (C != null || g != null))
          if (L === "style")
            if (g) {
              for (h in g)
                !g.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && g[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                L,
                l
              )), l = C;
          else
            L === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, g = g ? g.__html : void 0, C != null && g !== C && (d = d || []).push(L, C)) : L === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(L, "" + C) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (Lt.hasOwnProperty(L) ? (C != null && L === "onScroll" && at("scroll", n), d || g === C || (d = [])) : (d = d || []).push(L, C));
      }
      l && (d = d || []).push("style", l);
      var L = d;
      (r.updateQueue = L) && (r.flags |= 4);
    }
  }, Yt = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function xo(n, r) {
    if (!ct)
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
  function En(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function iy(n, r, l) {
    var o = r.pendingProps;
    switch (Ff(r), r.tag) {
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
        return En(r), null;
      case 1:
        return vt(r.type) && Or(), En(r), null;
      case 3:
        return o = r.stateNode, wi(), Qe(wt), Qe(Se), Us(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Lr !== null && (Mo(Lr), Lr = null))), hl(n, r), En(r), null;
      case 5:
        _e(r);
        var c = il(nu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ur(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(x(166));
            return En(r), null;
          }
          if (n = il(aa.current), bs(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[pa] = r, o[nl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                at("cancel", o), at("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                at("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < lo.length; c++)
                  at(lo[c], o);
                break;
              case "source":
                at("error", o);
                break;
              case "img":
              case "image":
              case "link":
                at(
                  "error",
                  o
                ), at("load", o);
                break;
              case "details":
                at("toggle", o);
                break;
              case "input":
                Tr(o, d), at("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, at("invalid", o);
                break;
              case "textarea":
                Xr(o, d), at("invalid", o);
            }
            yn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var g = d[h];
                h === "children" ? typeof g == "string" ? o.textContent !== g && (d.suppressHydrationWarning !== !0 && Ts(o.textContent, g, n), c = ["children", g]) : typeof g == "number" && o.textContent !== "" + g && (d.suppressHydrationWarning !== !0 && Ts(
                  o.textContent,
                  g,
                  n
                ), c = ["children", "" + g]) : Lt.hasOwnProperty(h) && g != null && h === "onScroll" && at("scroll", o);
              }
            switch (l) {
              case "input":
                Er(o), ba(o, d, !0);
                break;
              case "textarea":
                Er(o), ca(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Rs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = oi(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[pa] = r, n[nl] = o, Ro(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Vt(l, o), l) {
                case "dialog":
                  at("cancel", n), at("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  at("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < lo.length; c++)
                    at(lo[c], n);
                  c = o;
                  break;
                case "source":
                  at("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  at(
                    "error",
                    n
                  ), at("load", n), c = o;
                  break;
                case "details":
                  at("toggle", n), c = o;
                  break;
                case "input":
                  Tr(n, o), c = $n(n, o), at("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = Z({}, o, { value: void 0 }), at("invalid", n);
                  break;
                case "textarea":
                  Xr(n, o), c = Qi(n, o), at("invalid", n);
                  break;
                default:
                  c = o;
              }
              yn(l, c), g = c;
              for (d in g)
                if (g.hasOwnProperty(d)) {
                  var C = g[d];
                  d === "style" ? nt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Vu(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && si(n, C) : typeof C == "number" && si(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Lt.hasOwnProperty(d) ? C != null && d === "onScroll" && at("scroll", n) : C != null && ze(n, d, C, h));
                }
              switch (l) {
                case "input":
                  Er(n), ba(n, o, !1);
                  break;
                case "textarea":
                  Er(n), ca(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Gr(o.value));
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
        return En(r), null;
      case 6:
        if (n && r.stateNode != null)
          Yt(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(x(166));
          if (l = il(nu.current), il(aa.current), bs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[pa] = r, (d = o.nodeValue !== l) && (n = cr, n !== null))
              switch (n.tag) {
                case 3:
                  Ts(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ts(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[pa] = r, r.stateNode = o;
        }
        return En(r), null;
      case 13:
        if (Qe(ve), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ct && Xn !== null && r.mode & 1 && !(r.flags & 128))
            yv(), yt(), r.flags |= 98560, d = !1;
          else if (d = bs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(x(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(x(317));
              d[pa] = r;
            } else
              yt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            En(r), d = !1;
          } else
            Lr !== null && (Mo(Lr), Lr = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || ve.current & 1 ? It === 0 && (It = 3) : vd())), r.updateQueue !== null && (r.flags |= 4), En(r), null);
      case 4:
        return wi(), hl(n, r), n === null && Kl(r.stateNode.containerInfo), En(r), null;
      case 10:
        return Ei(r.type._context), En(r), null;
      case 17:
        return vt(r.type) && Or(), En(r), null;
      case 19:
        if (Qe(ve), d = r.memoizedState, d === null)
          return En(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            xo(d, !1);
          else {
            if (It !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = gt(n), h !== null) {
                  for (r.flags |= 128, xo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ie(ve, ve.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && xt() > hu && (r.flags |= 128, o = !0, xo(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = gt(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !ct)
                return En(r), null;
            } else
              2 * xt() - d.renderingStartTime > hu && l !== 1073741824 && (r.flags |= 128, o = !0, xo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = xt(), r.sibling = null, l = ve.current, Ie(ve, o ? l & 1 | 2 : l & 1), r) : (En(r), null);
      case 22:
      case 23:
        return pd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? pr & 1073741824 && (En(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : En(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(x(156, r.tag));
  }
  function id(n, r) {
    switch (Ff(r), r.tag) {
      case 1:
        return vt(r.type) && Or(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wi(), Qe(wt), Qe(Se), Us(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return _e(r), null;
      case 13:
        if (Qe(ve), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(x(340));
          yt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qe(ve), null;
      case 4:
        return wi(), null;
      case 10:
        return Ei(r.type._context), null;
      case 22:
      case 23:
        return pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var wo = !1, Qt = !1, Mv = typeof WeakSet == "function" ? WeakSet : Set, J = null;
  function su(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          _t(n, r, o);
        }
      else
        l.current = null;
  }
  function Do(n, r, l) {
    try {
      l();
    } catch (o) {
      _t(n, r, o);
    }
  }
  var Lv = !1;
  function Nv(n, r) {
    if (Of = Xi, n = ys(), za(n)) {
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
            var h = 0, g = -1, C = -1, L = 0, j = 0, V = n, F = null;
            t:
              for (; ; ) {
                for (var W; V !== l || c !== 0 && V.nodeType !== 3 || (g = h + c), V !== d || o !== 0 && V.nodeType !== 3 || (C = h + o), V.nodeType === 3 && (h += V.nodeValue.length), (W = V.firstChild) !== null; )
                  F = V, V = W;
                for (; ; ) {
                  if (V === n)
                    break t;
                  if (F === l && ++L === c && (g = h), F === d && ++j === o && (C = h), (W = V.nextSibling) !== null)
                    break;
                  V = F, F = V.parentNode;
                }
                V = W;
              }
            l = g === -1 || C === -1 ? null : { start: g, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (el = { focusedElem: n, selectionRange: l }, Xi = !1, J = r; J !== null; )
      if (r = J, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, J = n;
      else
        for (; J !== null; ) {
          r = J;
          try {
            var ee = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var re = ee.memoizedProps, Ot = ee.memoizedState, w = r.stateNode, T = w.getSnapshotBeforeUpdate(r.elementType === r.type ? re : fr(r.type, re), Ot);
                    w.__reactInternalSnapshotBeforeUpdate = T;
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
                  throw Error(x(163));
              }
          } catch ($) {
            _t(r, r.return, $);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, J = n;
            break;
          }
          J = r.return;
        }
    return ee = Lv, Lv = !1, ee;
  }
  function _o(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Do(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function bo(n, r) {
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
  function ld(n) {
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
  function ud(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ud(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[pa], delete r[nl], delete r[Nf], delete r[Zm], delete r[zf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function zv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function rc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || zv(n.return))
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
  function cu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Rs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (cu(n, r, l), n = n.sibling; n !== null; )
        cu(n, r, l), n = n.sibling;
  }
  function ya(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ya(n, r, l), n = n.sibling; n !== null; )
        ya(n, r, l), n = n.sibling;
  }
  var ht = null, Zt = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; )
      fu(n, r, l), l = l.sibling;
  }
  function fu(n, r, l) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function")
      try {
        Zr.onCommitFiberUnmount(Yu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Qt || su(l, r);
      case 6:
        var o = ht, c = Zt;
        ht = null, Ar(n, r, l), ht = o, Zt = c, ht !== null && (Zt ? (n = ht, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : ht.removeChild(l.stateNode));
        break;
      case 18:
        ht !== null && (Zt ? (n = ht, l = l.stateNode, n.nodeType === 8 ? hi(n.parentNode, l) : n.nodeType === 1 && hi(n, l), Xu(n)) : hi(ht, l.stateNode));
        break;
      case 4:
        o = ht, c = Zt, ht = l.stateNode.containerInfo, Zt = !0, Ar(n, r, l), ht = o, Zt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qt && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && Do(l, r, h), c = c.next;
          } while (c !== o);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!Qt && (su(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (g) {
            _t(l, r, g);
          }
        Ar(n, r, l);
        break;
      case 21:
        Ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Qt = (o = Qt) || l.memoizedState !== null, Ar(n, r, l), Qt = o) : Ar(n, r, l);
        break;
      default:
        Ar(n, r, l);
    }
  }
  function Pa(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Mv()), r.forEach(function(o) {
        var c = fy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ia(n, r) {
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
                  ht = g.stateNode, Zt = !1;
                  break e;
                case 3:
                  ht = g.stateNode.containerInfo, Zt = !0;
                  break e;
                case 4:
                  ht = g.stateNode.containerInfo, Zt = !0;
                  break e;
              }
              g = g.return;
            }
          if (ht === null)
            throw Error(x(160));
          fu(d, h, c), ht = null, Zt = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (L) {
          _t(c, r, L);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Uv(r, n), r = r.sibling;
  }
  function Uv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ia(r, n), ga(n), o & 4) {
          try {
            _o(3, n, n.return), bo(3, n);
          } catch (re) {
            _t(n, n.return, re);
          }
          try {
            _o(5, n, n.return);
          } catch (re) {
            _t(n, n.return, re);
          }
        }
        break;
      case 1:
        ia(r, n), ga(n), o & 512 && l !== null && su(l, l.return);
        break;
      case 5:
        if (ia(r, n), ga(n), o & 512 && l !== null && su(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            si(c, "");
          } catch (re) {
            _t(n, n.return, re);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, g = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              g === "input" && d.type === "radio" && d.name != null && Wr(c, d), Vt(g, h);
              var L = Vt(g, d);
              for (h = 0; h < C.length; h += 2) {
                var j = C[h], V = C[h + 1];
                j === "style" ? nt(c, V) : j === "dangerouslySetInnerHTML" ? Vu(c, V) : j === "children" ? si(c, V) : ze(c, j, V, L);
              }
              switch (g) {
                case "input":
                  lr(c, d);
                  break;
                case "textarea":
                  ui(c, d);
                  break;
                case "select":
                  var F = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var W = d.value;
                  W != null ? li(c, !!d.multiple, W, !1) : F !== !!d.multiple && (d.defaultValue != null ? li(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : li(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[nl] = d;
            } catch (re) {
              _t(n, n.return, re);
            }
        }
        break;
      case 6:
        if (ia(r, n), ga(n), o & 4) {
          if (n.stateNode === null)
            throw Error(x(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (re) {
            _t(n, n.return, re);
          }
        }
        break;
      case 3:
        if (ia(r, n), ga(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Xu(r.containerInfo);
          } catch (re) {
            _t(n, n.return, re);
          }
        break;
      case 4:
        ia(r, n), ga(n);
        break;
      case 13:
        ia(r, n), ga(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (cd = xt())), o & 4 && Pa(n);
        break;
      case 22:
        if (j = l !== null && l.memoizedState !== null, n.mode & 1 ? (Qt = (L = Qt) || j, ia(r, n), Qt = L) : ia(r, n), ga(n), o & 8192) {
          if (L = n.memoizedState !== null, (n.stateNode.isHidden = L) && !j && n.mode & 1)
            for (J = n, j = n.child; j !== null; ) {
              for (V = J = j; J !== null; ) {
                switch (F = J, W = F.child, F.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _o(4, F, F.return);
                    break;
                  case 1:
                    su(F, F.return);
                    var ee = F.stateNode;
                    if (typeof ee.componentWillUnmount == "function") {
                      o = F, l = F.return;
                      try {
                        r = o, ee.props = r.memoizedProps, ee.state = r.memoizedState, ee.componentWillUnmount();
                      } catch (re) {
                        _t(o, l, re);
                      }
                    }
                    break;
                  case 5:
                    su(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      od(V);
                      continue;
                    }
                }
                W !== null ? (W.return = F, J = W) : od(V);
              }
              j = j.sibling;
            }
          e:
            for (j = null, V = n; ; ) {
              if (V.tag === 5) {
                if (j === null) {
                  j = V;
                  try {
                    c = V.stateNode, L ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (g = V.stateNode, C = V.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, g.style.display = Oe("display", h));
                  } catch (re) {
                    _t(n, n.return, re);
                  }
                }
              } else if (V.tag === 6) {
                if (j === null)
                  try {
                    V.stateNode.nodeValue = L ? "" : V.memoizedProps;
                  } catch (re) {
                    _t(n, n.return, re);
                  }
              } else if ((V.tag !== 22 && V.tag !== 23 || V.memoizedState === null || V === n) && V.child !== null) {
                V.child.return = V, V = V.child;
                continue;
              }
              if (V === n)
                break e;
              for (; V.sibling === null; ) {
                if (V.return === null || V.return === n)
                  break e;
                j === V && (j = null), V = V.return;
              }
              j === V && (j = null), V.sibling.return = V.return, V = V.sibling;
            }
        }
        break;
      case 19:
        ia(r, n), ga(n), o & 4 && Pa(n);
        break;
      case 21:
        break;
      default:
        ia(
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
            if (zv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(x(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (si(c, ""), o.flags &= -33);
            var d = rc(n);
            ya(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, g = rc(n);
            cu(n, g, h);
            break;
          default:
            throw Error(x(161));
        }
      } catch (C) {
        _t(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Av(n, r, l) {
    J = n, du(n);
  }
  function du(n, r, l) {
    for (var o = (n.mode & 1) !== 0; J !== null; ) {
      var c = J, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || wo;
        if (!h) {
          var g = c.alternate, C = g !== null && g.memoizedState !== null || Qt;
          g = wo;
          var L = Qt;
          if (wo = h, (Qt = C) && !L)
            for (J = c; J !== null; )
              h = J, C = h.child, h.tag === 22 && h.memoizedState !== null ? Fv(c) : C !== null ? (C.return = h, J = C) : Fv(c);
          for (; d !== null; )
            J = d, du(d), d = d.sibling;
          J = c, wo = g, Qt = L;
        }
        Hv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, J = d) : Hv(n);
    }
  }
  function Hv(n) {
    for (; J !== null; ) {
      var r = J;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Qt || bo(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Qt)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : fr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && al(r, d, o);
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
                  al(r, h, l);
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
                  var L = r.alternate;
                  if (L !== null) {
                    var j = L.memoizedState;
                    if (j !== null) {
                      var V = j.dehydrated;
                      V !== null && Xu(V);
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
                throw Error(x(163));
            }
          Qt || r.flags & 512 && ld(r);
        } catch (F) {
          _t(r, r.return, F);
        }
      }
      if (r === n) {
        J = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, J = l;
        break;
      }
      J = r.return;
    }
  }
  function od(n) {
    for (; J !== null; ) {
      var r = J;
      if (r === n) {
        J = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, J = l;
        break;
      }
      J = r.return;
    }
  }
  function Fv(n) {
    for (; J !== null; ) {
      var r = J;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              bo(4, r);
            } catch (C) {
              _t(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                _t(r, c, C);
              }
            }
            var d = r.return;
            try {
              ld(r);
            } catch (C) {
              _t(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              ld(r);
            } catch (C) {
              _t(r, h, C);
            }
        }
      } catch (C) {
        _t(r, r.return, C);
      }
      if (r === n) {
        J = null;
        break;
      }
      var g = r.sibling;
      if (g !== null) {
        g.return = r.return, J = g;
        break;
      }
      J = r.return;
    }
  }
  var ac = Math.ceil, ko = ot.ReactCurrentDispatcher, sd = ot.ReactCurrentOwner, Tn = ot.ReactCurrentBatchConfig, Le = 0, St = null, Dt = null, Jt = 0, pr = 0, pu = we(0), It = 0, Oo = null, Ya = 0, ic = 0, vu = 0, ml = null, kn = null, cd = 0, hu = 1 / 0, Qa = null, lc = !1, yl = null, Sa = null, ki = !1, Oi = null, uc = 0, mu = 0, oc = null, gl = -1, Sl = 0;
  function Rn() {
    return Le & 6 ? xt() : gl !== -1 ? gl : gl = xt();
  }
  function Ft(n) {
    return n.mode & 1 ? Le & 2 && Jt !== 0 ? Jt & -Jt : ks.transition !== null ? (Sl === 0 && (Sl = is()), Sl) : (n = Xe, n !== 0 || (n = window.event, n = n === void 0 ? 16 : cf(n.type)), n) : 1;
  }
  function xn(n, r, l, o) {
    if (50 < mu)
      throw mu = 0, oc = null, Error(x(185));
    Wi(n, l, o), (!(Le & 2) || n !== St) && (n === St && (!(Le & 2) && (ic |= l), It === 4 && Hr(n, Jt)), wn(n, o), l === 1 && Le === 0 && !(r.mode & 1) && (hu = xt() + 500, qt && In()));
  }
  function wn(n, r) {
    var l = n.callbackNode;
    as(n, r);
    var o = Jr(n, n === St ? Jt : 0);
    if (o === 0)
      l !== null && wp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && wp(l), r === 1)
        n.tag === 0 ? Af(jv.bind(null, n)) : Uf(jv.bind(null, n)), Lf(function() {
          !(Le & 6) && In();
        }), l = null;
      else {
        switch (uf(o)) {
          case 1:
            l = Oa;
            break;
          case 4:
            l = Me;
            break;
          case 16:
            l = ci;
            break;
          case 536870912:
            l = nf;
            break;
          default:
            l = ci;
        }
        l = md(l, yu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function yu(n, r) {
    if (gl = -1, Sl = 0, Le & 6)
      throw Error(x(327));
    var l = n.callbackNode;
    if (Su() && n.callbackNode !== l)
      return null;
    var o = Jr(n, n === St ? Jt : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = cc(n, o);
    else {
      r = o;
      var c = Le;
      Le |= 2;
      var d = sc();
      (St !== n || Jt !== r) && (Qa = null, hu = xt() + 500, Cl(n, r));
      do
        try {
          uy();
          break;
        } catch (g) {
          Vv(n, g);
        }
      while (1);
      $f(), ko.current = d, Le = c, Dt !== null ? r = 0 : (St = null, Jt = 0, r = It);
    }
    if (r !== 0) {
      if (r === 2 && (c = af(n), c !== 0 && (o = c, r = fd(n, c))), r === 1)
        throw l = Oo, Cl(n, 0), Hr(n, o), wn(n, xt()), l;
      if (r === 6)
        Hr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !dd(c) && (r = cc(n, o), r === 2 && (d = af(n), d !== 0 && (o = d, r = fd(n, d))), r === 1))
          throw l = Oo, Cl(n, 0), Hr(n, o), wn(n, xt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(x(345));
          case 2:
            El(n, kn, Qa);
            break;
          case 3:
            if (Hr(n, o), (o & 130023424) === o && (r = cd + 500 - xt(), 10 < r)) {
              if (Jr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Rn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = tl(El.bind(null, n, kn, Qa), r);
              break;
            }
            El(n, kn, Qa);
            break;
          case 4:
            if (Hr(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - xr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = xt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ac(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = tl(El.bind(null, n, kn, Qa), o);
              break;
            }
            El(n, kn, Qa);
            break;
          case 5:
            El(n, kn, Qa);
            break;
          default:
            throw Error(x(329));
        }
      }
    }
    return wn(n, xt()), n.callbackNode === l ? yu.bind(null, n) : null;
  }
  function fd(n, r) {
    var l = ml;
    return n.current.memoizedState.isDehydrated && (Cl(n, r).flags |= 256), n = cc(n, r), n !== 2 && (r = kn, kn = l, r !== null && Mo(r)), n;
  }
  function Mo(n) {
    kn === null ? kn = n : kn.push.apply(kn, n);
  }
  function dd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!_r(d(), c))
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
  function Hr(n, r) {
    for (r &= ~vu, r &= ~ic, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - xr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function jv(n) {
    if (Le & 6)
      throw Error(x(327));
    Su();
    var r = Jr(n, 0);
    if (!(r & 1))
      return wn(n, xt()), null;
    var l = cc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = af(n);
      o !== 0 && (r = o, l = fd(n, o));
    }
    if (l === 1)
      throw l = Oo, Cl(n, 0), Hr(n, r), wn(n, xt()), l;
    if (l === 6)
      throw Error(x(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, El(n, kn, Qa), wn(n, xt()), null;
  }
  function gu(n, r) {
    var l = Le;
    Le |= 1;
    try {
      return n(r);
    } finally {
      Le = l, Le === 0 && (hu = xt() + 500, qt && In());
    }
  }
  function Mi(n) {
    Oi !== null && Oi.tag === 0 && !(Le & 6) && Su();
    var r = Le;
    Le |= 1;
    var l = Tn.transition, o = Xe;
    try {
      if (Tn.transition = null, Xe = 1, n)
        return n();
    } finally {
      Xe = o, Tn.transition = l, Le = r, !(Le & 6) && In();
    }
  }
  function pd() {
    pr = pu.current, Qe(pu);
  }
  function Cl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pv(l)), Dt !== null)
      for (l = Dt.return; l !== null; ) {
        var o = l;
        switch (Ff(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Or();
            break;
          case 3:
            wi(), Qe(wt), Qe(Se), Us();
            break;
          case 5:
            _e(o);
            break;
          case 4:
            wi();
            break;
          case 13:
            Qe(ve);
            break;
          case 19:
            Qe(ve);
            break;
          case 10:
            Ei(o.type._context);
            break;
          case 22:
          case 23:
            pd();
        }
        l = l.return;
      }
    if (St = n, Dt = n = Li(n.current, null), Jt = pr = r, It = 0, Oo = null, vu = ic = Ya = 0, kn = ml = null, an !== null) {
      for (r = 0; r < an.length; r++)
        if (l = an[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      an = null;
    }
    return n;
  }
  function Vv(n, r) {
    do {
      var l = Dt;
      try {
        if ($f(), As.current = Zs, he) {
          for (var o = ft.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          he = !1;
        }
        if (ll = 0, He = U = ft = null, ma = !1, dr = 0, sd.current = null, l === null || l.return === null) {
          It = 1, Oo = r, Dt = null;
          break;
        }
        e: {
          var d = n, h = l.return, g = l, C = r;
          if (r = Jt, g.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var L = C, j = g, V = j.tag;
            if (!(j.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var F = j.alternate;
              F ? (j.updateQueue = F.updateQueue, j.memoizedState = F.memoizedState, j.lanes = F.lanes) : (j.updateQueue = null, j.memoizedState = null);
            }
            var W = Kf(h);
            if (W !== null) {
              W.flags &= -257, Zf(W, h, g, d, r), W.mode & 1 && bv(d, L, r), r = W, C = L;
              var ee = r.updateQueue;
              if (ee === null) {
                var re = /* @__PURE__ */ new Set();
                re.add(C), r.updateQueue = re;
              } else
                ee.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                bv(d, L, r), vd();
                break e;
              }
              C = Error(x(426));
            }
          } else if (ct && g.mode & 1) {
            var Ot = Kf(h);
            if (Ot !== null) {
              !(Ot.flags & 65536) && (Ot.flags |= 256), Zf(Ot, h, g, d, r), Vf(lu(C, g));
              break e;
            }
          }
          d = C = lu(C, g), It !== 4 && (It = 2), ml === null ? ml = [d] : ml.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = _v(d, C, r);
                Qf(d, w);
                break e;
              case 1:
                g = C;
                var T = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Sa === null || !Sa.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var $ = To(d, g, r);
                  Qf(d, $);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        hd(l);
      } catch (ae) {
        r = ae, Dt === l && l !== null && (Dt = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function sc() {
    var n = ko.current;
    return ko.current = Zs, n === null ? Zs : n;
  }
  function vd() {
    (It === 0 || It === 3 || It === 2) && (It = 4), St === null || !(Ya & 268435455) && !(ic & 268435455) || Hr(St, Jt);
  }
  function cc(n, r) {
    var l = Le;
    Le |= 2;
    var o = sc();
    (St !== n || Jt !== r) && (Qa = null, Cl(n, r));
    do
      try {
        ly();
        break;
      } catch (c) {
        Vv(n, c);
      }
    while (1);
    if ($f(), Le = l, ko.current = o, Dt !== null)
      throw Error(x(261));
    return St = null, Jt = 0, It;
  }
  function ly() {
    for (; Dt !== null; )
      Bv(Dt);
  }
  function uy() {
    for (; Dt !== null && !Om(); )
      Bv(Dt);
  }
  function Bv(n) {
    var r = Pv(n.alternate, n, pr);
    n.memoizedProps = n.pendingProps, r === null ? hd(n) : Dt = r, sd.current = null;
  }
  function hd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = id(l, r), l !== null) {
          l.flags &= 32767, Dt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          It = 6, Dt = null;
          return;
        }
      } else if (l = iy(l, r, pr), l !== null) {
        Dt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Dt = r;
        return;
      }
      Dt = r = n;
    } while (r !== null);
    It === 0 && (It = 5);
  }
  function El(n, r, l) {
    var o = Xe, c = Tn.transition;
    try {
      Tn.transition = null, Xe = 1, oy(n, r, l, o);
    } finally {
      Tn.transition = c, Xe = o;
    }
    return null;
  }
  function oy(n, r, l, o) {
    do
      Su();
    while (Oi !== null);
    if (Le & 6)
      throw Error(x(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(x(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (zm(n, d), n === St && (Dt = St = null, Jt = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ki || (ki = !0, md(ci, function() {
      return Su(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Tn.transition, Tn.transition = null;
      var h = Xe;
      Xe = 1;
      var g = Le;
      Le |= 4, sd.current = null, Nv(n, l), Uv(l, n), gs(el), Xi = !!Of, el = Of = null, n.current = l, Av(l), Mm(), Le = g, Xe = h, Tn.transition = d;
    } else
      n.current = l;
    if (ki && (ki = !1, Oi = n, uc = c), d = n.pendingLanes, d === 0 && (Sa = null), _p(l.stateNode), wn(n, xt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (lc)
      throw lc = !1, n = yl, yl = null, n;
    return uc & 1 && n.tag !== 0 && Su(), d = n.pendingLanes, d & 1 ? n === oc ? mu++ : (mu = 0, oc = n) : mu = 0, In(), null;
  }
  function Su() {
    if (Oi !== null) {
      var n = uf(uc), r = Tn.transition, l = Xe;
      try {
        if (Tn.transition = null, Xe = 16 > n ? 16 : n, Oi === null)
          var o = !1;
        else {
          if (n = Oi, Oi = null, uc = 0, Le & 6)
            throw Error(x(331));
          var c = Le;
          for (Le |= 4, J = n.current; J !== null; ) {
            var d = J, h = d.child;
            if (J.flags & 16) {
              var g = d.deletions;
              if (g !== null) {
                for (var C = 0; C < g.length; C++) {
                  var L = g[C];
                  for (J = L; J !== null; ) {
                    var j = J;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, j, d);
                    }
                    var V = j.child;
                    if (V !== null)
                      V.return = j, J = V;
                    else
                      for (; J !== null; ) {
                        j = J;
                        var F = j.sibling, W = j.return;
                        if (ud(j), j === L) {
                          J = null;
                          break;
                        }
                        if (F !== null) {
                          F.return = W, J = F;
                          break;
                        }
                        J = W;
                      }
                  }
                }
                var ee = d.alternate;
                if (ee !== null) {
                  var re = ee.child;
                  if (re !== null) {
                    ee.child = null;
                    do {
                      var Ot = re.sibling;
                      re.sibling = null, re = Ot;
                    } while (re !== null);
                  }
                }
                J = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, J = h;
            else
              e:
                for (; J !== null; ) {
                  if (d = J, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(9, d, d.return);
                    }
                  var w = d.sibling;
                  if (w !== null) {
                    w.return = d.return, J = w;
                    break e;
                  }
                  J = d.return;
                }
          }
          var T = n.current;
          for (J = T; J !== null; ) {
            h = J;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, J = k;
            else
              e:
                for (h = T; J !== null; ) {
                  if (g = J, g.flags & 2048)
                    try {
                      switch (g.tag) {
                        case 0:
                        case 11:
                        case 15:
                          bo(9, g);
                      }
                    } catch (ae) {
                      _t(g, g.return, ae);
                    }
                  if (g === h) {
                    J = null;
                    break e;
                  }
                  var $ = g.sibling;
                  if ($ !== null) {
                    $.return = g.return, J = $;
                    break e;
                  }
                  J = g.return;
                }
          }
          if (Le = c, In(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot(Yu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Xe = l, Tn.transition = r;
      }
    }
    return !1;
  }
  function $v(n, r, l) {
    r = lu(l, r), r = _v(n, r, 1), n = Ri(n, r, 1), r = Rn(), n !== null && (Wi(n, 1, r), wn(n, r));
  }
  function _t(n, r, l) {
    if (n.tag === 3)
      $v(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          $v(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Sa === null || !Sa.has(o))) {
            n = lu(l, n), n = To(r, n, 1), r = Ri(r, n, 1), n = Rn(), r !== null && (Wi(r, 1, n), wn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Rn(), n.pingedLanes |= n.suspendedLanes & l, St === n && (Jt & l) === l && (It === 4 || It === 3 && (Jt & 130023424) === Jt && 500 > xt() - cd ? Cl(n, 0) : vu |= l), wn(n, r);
  }
  function fc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Bl, Bl <<= 1, !(Bl & 130023424) && (Bl = 4194304)) : r = 1);
    var l = Rn();
    n = ja(n, r), n !== null && (Wi(n, r, l), wn(n, l));
  }
  function cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), fc(n, l);
  }
  function fy(n, r) {
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
        throw Error(x(314));
    }
    o !== null && o.delete(r), fc(n, l);
  }
  var Pv;
  Pv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || wt.current)
        Ht = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Ht = !1, $a(n, r, l);
        Ht = !!(n.flags & 131072);
      }
    else
      Ht = !1, ct && r.flags & 1048576 && Hf(r, Jl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Cn(n, r), n = r.pendingProps;
        var c = kr(r, Se.current);
        P(r, l), c = Di(null, r, o, n, c, l);
        var d = sl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, vt(o) ? (d = !0, xs(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Yf(r), c.updater = Ls, r.stateNode = c, c._reactInternals = r, Ns(r, o, n, l), r = kv(null, r, o, !0, d, l)) : (r.tag = 0, ct && d && ws(r), Pt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Cn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = fr(o, n), c) {
            case 0:
              r = uu(null, r, o, n, l);
              break e;
            case 1:
              r = Jf(null, r, o, n, l);
              break e;
            case 11:
              r = bi(null, r, o, n, l);
              break e;
            case 14:
              r = ec(null, r, o, fr(o.type, n), l);
              break e;
          }
          throw Error(x(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), uu(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), Jf(n, r, o, c, l);
      case 3:
        e: {
          if (Ov(r), n === null)
            throw Error(x(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, $t(n, r), xi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = lu(Error(x(423)), r), r = tc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = lu(Error(x(424)), r), r = tc(n, r, o, l, c);
              break e;
            } else
              for (Xn = ra(r.stateNode.containerInfo.firstChild), cr = r, ct = !0, Lr = null, l = wv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (yt(), o === c) {
              r = ln(n, r, l);
              break e;
            }
            Pt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return de(r), n === null && _s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, so(o, c) ? h = null : d !== null && so(o, d) && (r.flags |= 32), De(n, r), Pt(n, r, h, l), r.child;
      case 6:
        return n === null && _s(r), null;
      case 13:
        return td(n, r, l);
      case 4:
        return Gf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = tu(r, null, o, l) : Pt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), bi(n, r, o, c, l);
      case 7:
        return Pt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Pt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Pt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Ie(ha, o._currentValue), o._currentValue = h, d !== null)
            if (_r(d.value, h)) {
              if (d.children === c.children && !wt.current) {
                r = ln(n, r, l);
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
                        C = Va(-1, l & -l), C.tag = 2;
                        var L = d.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var j = L.pending;
                          j === null ? C.next = C : (C.next = j.next, j.next = C), L.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), Kt(
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
                    throw Error(x(341));
                  h.lanes |= l, g = h.alternate, g !== null && (g.lanes |= l), Kt(h, l, r), h = d.sibling;
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
          Pt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, P(r, l), c = kt(c), o = o(c), r.flags |= 1, Pt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = fr(o, r.pendingProps), c = fr(o.type, c), ec(n, r, o, c, l);
      case 15:
        return Zn(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), Cn(n, r), r.tag = 1, vt(o) ? (n = !0, xs(r)) : n = !1, P(r, l), Ev(r, o, c), Ns(r, o, c, l), kv(null, r, o, !0, n, l);
      case 19:
        return ad(n, r, l);
      case 22:
        return pl(n, r, l);
    }
    throw Error(x(156, r.tag));
  };
  function md(n, r) {
    return tf(n, r);
  }
  function dy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fr(n, r, l, o) {
    return new dy(n, r, l, o);
  }
  function yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function")
      return yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vn)
        return 11;
      if (n === Sr)
        return 14;
    }
    return 2;
  }
  function Li(n, r) {
    var l = n.alternate;
    return l === null ? (l = Fr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function dc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      yd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case be:
            return Tl(l.children, c, d, r);
          case Dn:
            h = 8, c |= 8;
            break;
          case ar:
            return n = Fr(12, l, r, c | 2), n.elementType = ar, n.lanes = d, n;
          case Ae:
            return n = Fr(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
          case qe:
            return n = Fr(19, l, r, c), n.elementType = qe, n.lanes = d, n;
          case Cr:
            return Lo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Nt:
                  h = 10;
                  break e;
                case lt:
                  h = 9;
                  break e;
                case Vn:
                  h = 11;
                  break e;
                case Sr:
                  h = 14;
                  break e;
                case Et:
                  h = 16, o = null;
                  break e;
              }
            throw Error(x(130, n == null ? n : typeof n, ""));
        }
    return r = Fr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Tl(n, r, l, o) {
    return n = Fr(7, n, o, r), n.lanes = l, n;
  }
  function Lo(n, r, l, o) {
    return n = Fr(22, n, o, r), n.elementType = Cr, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function No(n, r, l) {
    return n = Fr(6, n, null, r), n.lanes = l, n;
  }
  function Rl(n, r, l) {
    return r = Fr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function vy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lf(0), this.expirationTimes = lf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function pc(n, r, l, o, c, d, h, g, C) {
    return n = new vy(n, r, l, g, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Fr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yf(d), n;
  }
  function Yv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: mt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function gd(n) {
    if (!n)
      return va;
    n = n._reactInternals;
    e: {
      if (da(n) !== n || n.tag !== 1)
        throw Error(x(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (vt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(x(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (vt(l))
        return po(n, l, r);
    }
    return r;
  }
  function Qv(n, r, l, o, c, d, h, g, C) {
    return n = pc(l, o, !0, n, c, d, h, g, C), n.context = gd(null), l = n.current, o = Rn(), c = Ft(l), d = Va(o, c), d.callback = r ?? null, Ri(l, d, c), n.current.lanes = c, Wi(n, c, o), wn(n, o), n;
  }
  function zo(n, r, l, o) {
    var c = r.current, d = Rn(), h = Ft(c);
    return l = gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Va(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ri(c, r, h), n !== null && (xn(n, c, h, d), Ms(n, c, h)), h;
  }
  function vc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Iv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Sd(n, r) {
    Iv(n, r), (n = n.alternate) && Iv(n, r);
  }
  function Gv() {
    return null;
  }
  var Cd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hc(n) {
    this._internalRoot = n;
  }
  Ia.prototype.render = hc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(x(409));
    zo(n, r, null, null);
  }, Ia.prototype.unmount = hc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mi(function() {
        zo(null, n, null, null);
      }), r[Ha] = null;
    }
  };
  function Ia(n) {
    this._internalRoot = n;
  }
  Ia.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Mp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ze.length && r !== 0 && r < Ze[l].priority; l++)
        ;
      Ze.splice(l, 0, n), l === 0 && Lp(n);
    }
  };
  function Ed(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function mc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Wv() {
  }
  function hy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var L = vc(h);
          d.call(L);
        };
      }
      var h = Qv(r, o, n, 0, null, !1, !1, "", Wv);
      return n._reactRootContainer = h, n[Ha] = h.current, Kl(n.nodeType === 8 ? n.parentNode : n), Mi(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var g = o;
      o = function() {
        var L = vc(C);
        g.call(L);
      };
    }
    var C = pc(n, 0, !1, null, null, !1, !1, "", Wv);
    return n._reactRootContainer = C, n[Ha] = C.current, Kl(n.nodeType === 8 ? n.parentNode : n), Mi(function() {
      zo(r, C, l, o);
    }), C;
  }
  function yc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var g = c;
        c = function() {
          var C = vc(h);
          g.call(C);
        };
      }
      zo(r, h, n, c);
    } else
      h = hy(l, r, n, c, o);
    return vc(h);
  }
  Op = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Gi(r.pendingLanes);
          l !== 0 && (Qu(r, l | 1), wn(r, xt()), !(Le & 6) && (hu = xt() + 500, In()));
        }
        break;
      case 13:
        Mi(function() {
          var o = ja(n, 1);
          if (o !== null) {
            var c = Rn();
            xn(o, n, 1, c);
          }
        }), Sd(n, 1);
    }
  }, ls = function(n) {
    if (n.tag === 13) {
      var r = ja(n, 134217728);
      if (r !== null) {
        var l = Rn();
        xn(r, n, 134217728, l);
      }
      Sd(n, 134217728);
    }
  }, rt = function(n) {
    if (n.tag === 13) {
      var r = Ft(n), l = ja(n, r);
      if (l !== null) {
        var o = Rn();
        xn(l, n, r, o);
      }
      Sd(n, r);
    }
  }, Mp = function() {
    return Xe;
  }, of = function(n, r) {
    var l = Xe;
    try {
      return Xe = n, r();
    } finally {
      Xe = l;
    }
  }, fa = function(n, r, l) {
    switch (r) {
      case "input":
        if (lr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = se(o);
              if (!c)
                throw Error(x(90));
              _a(o), lr(o, c);
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
  }, Ep = gu, Tp = Mi;
  var my = { usingClientEntryPoint: !1, Events: [fo, Zl, se, Jo, es, gu] }, Cu = { findFiberByHostInstance: br, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, yy = { bundleType: Cu.bundleType, version: Cu.version, rendererPackageName: Cu.rendererPackageName, rendererConfig: Cu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Cu.findFiberByHostInstance || Gv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gc.isDisabled && gc.supportsFiber)
      try {
        Yu = gc.inject(yy), Zr = gc;
      } catch {
      }
  }
  return Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = my, Yr.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ed(r))
      throw Error(x(200));
    return Yv(n, r, null, l);
  }, Yr.createRoot = function(n, r) {
    if (!Ed(n))
      throw Error(x(299));
    var l = !1, o = "", c = Cd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = pc(n, 1, !1, null, null, l, !1, o, c), n[Ha] = r.current, Kl(n.nodeType === 8 ? n.parentNode : n), new hc(r);
  }, Yr.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(x(188)) : (n = Object.keys(n).join(","), Error(x(268, n)));
    return n = Rp(r), n = n === null ? null : n.stateNode, n;
  }, Yr.flushSync = function(n) {
    return Mi(n);
  }, Yr.hydrate = function(n, r, l) {
    if (!mc(r))
      throw Error(x(200));
    return yc(null, n, r, !0, l);
  }, Yr.hydrateRoot = function(n, r, l) {
    if (!Ed(n))
      throw Error(x(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Cd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Qv(r, null, n, 1, l ?? null, c, !1, d, h), n[Ha] = r.current, Kl(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ia(r);
  }, Yr.render = function(n, r, l) {
    if (!mc(r))
      throw Error(x(200));
    return yc(null, n, r, !1, l);
  }, Yr.unmountComponentAtNode = function(n) {
    if (!mc(n))
      throw Error(x(40));
    return n._reactRootContainer ? (Mi(function() {
      yc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ha] = null;
      });
    }), !0) : !1;
  }, Yr.unstable_batchedUpdates = gu, Yr.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mc(l))
      throw Error(x(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(x(38));
    return yc(n, r, l, !1, o);
  }, Yr.version = "18.2.0-next-9e3b772b8-20220608", Yr;
}
var Qr = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function ib() {
  return eT || (eT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var b = uT, H = oT(), x = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ve = !1;
    function Lt(e) {
      Ve = e;
    }
    function Be(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        jn("warn", e, a);
      }
    }
    function S(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        jn("error", e, a);
      }
    }
    function jn(e, t, a) {
      {
        var i = x.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var xe = 0, pe = 1, nn = 2, le = 3, me = 4, ue = 5, ke = 6, tt = 7, ut = 8, Ir = 9, hn = 10, ze = 11, ot = 12, Ue = 13, mt = 14, be = 15, Dn = 16, ar = 17, Nt = 18, lt = 19, Vn = 21, Ae = 22, qe = 23, Sr = 24, Et = 25, Cr = !0, Q = !1, ye = !1, Z = !1, We = !1, Ke = !0, Bn = !1, ir = !1, ai = !0, _n = !0, ii = !0, Gr = /* @__PURE__ */ new Set(), sa = {}, ju = {};
    function Er(e, t) {
      _a(e, t), _a(e + "Capture", t);
    }
    function _a(e, t) {
      sa[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), sa[e] = t;
      {
        var a = e.toLowerCase();
        ju[a] = e, e === "onDoubleClick" && (ju.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Gr.add(t[i]);
    }
    var mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $n = Object.prototype.hasOwnProperty;
    function Tr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wr(e) {
      try {
        return lr(e), !1;
      } catch {
        return !0;
      }
    }
    function lr(e) {
      return "" + e;
    }
    function ba(e, t) {
      if (Wr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), lr(e);
    }
    function Al(e) {
      if (Wr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), lr(e);
    }
    function Yi(e, t) {
      if (Wr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), lr(e);
    }
    function li(e, t) {
      if (Wr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), lr(e);
    }
    function Qi(e) {
      if (Wr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), lr(e);
    }
    function Xr(e) {
      if (Wr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tr(e)), lr(e);
    }
    var ui = 0, ca = 1, oi = 2, Pn = 3, qr = 4, Vu = 5, si = 6, I = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = I + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Oe = new RegExp("^[" + I + "][" + fe + "]*$"), nt = {}, bt = {};
    function yn(e) {
      return $n.call(bt, e) ? !0 : $n.call(nt, e) ? !1 : Oe.test(e) ? (bt[e] = !0, !0) : (nt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function Vt(e, t, a) {
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
    function Tt(e, t, a, i) {
      if (t === null || typeof t > "u" || Rr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Pn:
            return !t;
          case qr:
            return t === !1;
          case Vu:
            return isNaN(t);
          case si:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fa(e) {
      return Rt.hasOwnProperty(e) ? Rt[e] : null;
    }
    function zt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === oi || t === Pn || t === qr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Rt = {}, Cp = [
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
    Cp.forEach(function(e) {
      Rt[e] = new zt(
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
      Rt[t] = new zt(
        t,
        ca,
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
      Rt[e] = new zt(
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
      Rt[e] = new zt(
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
      Rt[e] = new zt(
        e,
        Pn,
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
      Rt[e] = new zt(
        e,
        Pn,
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
      Rt[e] = new zt(
        e,
        qr,
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
      Rt[e] = new zt(
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
      Rt[e] = new zt(
        e,
        Vu,
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
      Rt[t] = new zt(
        t,
        ca,
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
      Rt[t] = new zt(
        t,
        ca,
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
      Rt[t] = new zt(
        t,
        ca,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Rt[e] = new zt(
        e,
        ca,
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
    var Ep = "xlinkHref";
    Rt[Ep] = new zt(
      "xlinkHref",
      ca,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Rt[e] = new zt(
        e,
        ca,
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
    var Tp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ts = !1;
    function Zc(e) {
      !ts && Tp.test(e) && (ts = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Bu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        ba(a, t), i.sanitizeURL && Zc("" + a);
        var s = i.attributeName, f = null;
        if (i.type === qr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Tt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Tt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Pn)
            return a;
          f = e.getAttribute(s);
        }
        return Tt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ns(e, t, a, i) {
      {
        if (!yn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return ba(a, t), u === "" + a ? a : u;
      }
    }
    function Ii(e, t, a, i) {
      var u = fa(t);
      if (!Vt(t, u, i)) {
        if (Tt(t, a, u, i) && (a = null), i || u === null) {
          if (yn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (ba(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, E;
          R === Pn || R === qr && a === !0 ? E = "" : (ba(a, m), E = "" + a, u.sanitizeURL && Zc(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var Hl = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), ka = Symbol.for("react.fragment"), Fl = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), Jc = Symbol.for("react.provider"), ef = Symbol.for("react.context"), jl = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), Pu = Symbol.for("react.suspense_list"), Vl = Symbol.for("react.memo"), bn = Symbol.for("react.lazy"), Rp = Symbol.for("react.scope"), xp = Symbol.for("react.debug_trace_mode"), tf = Symbol.for("react.offscreen"), wp = Symbol.for("react.legacy_hidden"), Om = Symbol.for("react.cache"), Mm = Symbol.for("react.tracing_marker"), xt = Symbol.iterator, Lm = "@@iterator";
    function Oa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = xt && e[xt] || e[Lm];
      return typeof t == "function" ? t : null;
    }
    var Me = Object.assign, ci = 0, Dp, nf, Yu, Zr, _p, xr, bp;
    function kp() {
    }
    kp.__reactDisabledLog = !0;
    function Nm() {
      {
        if (ci === 0) {
          Dp = console.log, nf = console.info, Yu = console.warn, Zr = console.error, _p = console.group, xr = console.groupCollapsed, bp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kp,
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
            log: Me({}, e, {
              value: Dp
            }),
            info: Me({}, e, {
              value: nf
            }),
            warn: Me({}, e, {
              value: Yu
            }),
            error: Me({}, e, {
              value: Zr
            }),
            group: Me({}, e, {
              value: _p
            }),
            groupCollapsed: Me({}, e, {
              value: xr
            }),
            groupEnd: Me({}, e, {
              value: bp
            })
          });
        }
        ci < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Bl = x.ReactCurrentDispatcher, Gi;
    function Jr(e, t, a) {
      {
        if (Gi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Gi = i && i[1] || "";
          }
        return `
` + Gi + e;
      }
    }
    var rf = !1, as;
    {
      var af = typeof WeakMap == "function" ? WeakMap : Map;
      as = new af();
    }
    function is(e, t) {
      if (!e || rf)
        return "";
      {
        var a = as.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      rf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Bl.current, Bl.current = null, Nm();
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
        rf = !1, Bl.current = s, rs(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", O = E ? Jr(E) : "";
      return typeof e == "function" && as.set(e, O), O;
    }
    function lf(e, t, a) {
      return is(e, !0);
    }
    function Wi(e, t, a) {
      return is(e, !1);
    }
    function zm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Qu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return is(e, zm(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case da:
          return Jr("Suspense");
        case Pu:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case jl:
            return Wi(e.render);
          case Vl:
            return Qu(e.type, t, a);
          case bn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Qu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Xe(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return Jr(e.type);
        case Dn:
          return Jr("Lazy");
        case Ue:
          return Jr("Suspense");
        case lt:
          return Jr("SuspenseList");
        case xe:
        case nn:
        case be:
          return Wi(e.type);
        case ze:
          return Wi(e.type.render);
        case pe:
          return lf(e.type);
        default:
          return "";
      }
    }
    function uf(e) {
      try {
        var t = "", a = e;
        do
          t += Xe(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Op(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ls(e) {
      return e.displayName || "Context";
    }
    function rt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ka:
          return "Fragment";
        case Kr:
          return "Portal";
        case $u:
          return "Profiler";
        case Fl:
          return "StrictMode";
        case da:
          return "Suspense";
        case Pu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ef:
            var t = e;
            return ls(t) + ".Consumer";
          case Jc:
            var a = e;
            return ls(a._context) + ".Provider";
          case jl:
            return Op(e, e.render, "ForwardRef");
          case Vl:
            var i = e.displayName || null;
            return i !== null ? i : rt(e.type) || "Memo";
          case bn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return rt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Mp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function of(e) {
      return e.displayName || "Context";
    }
    function Re(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Sr:
          return "Cache";
        case Ir:
          var i = a;
          return of(i) + ".Consumer";
        case hn:
          var u = a;
          return of(u._context) + ".Provider";
        case Nt:
          return "DehydratedFragment";
        case ze:
          return Mp(a, a.render, "ForwardRef");
        case tt:
          return "Fragment";
        case ue:
          return a;
        case me:
          return "Portal";
        case le:
          return "Root";
        case ke:
          return "Text";
        case Dn:
          return rt(a);
        case ut:
          return a === Fl ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case ot:
          return "Profiler";
        case Vn:
          return "Scope";
        case Ue:
          return "Suspense";
        case lt:
          return "SuspenseList";
        case Et:
          return "TracingMarker";
        case pe:
        case xe:
        case ar:
        case nn:
        case mt:
        case be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Iu = x.ReactDebugCurrentFrame, Ut = null, wr = !1;
    function Dr() {
      {
        if (Ut === null)
          return null;
        var e = Ut._debugOwner;
        if (e !== null && typeof e < "u")
          return Re(e);
      }
      return null;
    }
    function Gu() {
      return Ut === null ? "" : uf(Ut);
    }
    function Bt() {
      Iu.getCurrentStack = null, Ut = null, wr = !1;
    }
    function Ze(e) {
      Iu.getCurrentStack = e === null ? null : Gu, Ut = e, wr = !1;
    }
    function Um() {
      return Ut;
    }
    function ea(e) {
      wr = e;
    }
    function gn(e) {
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
          return Xr(e), e;
        default:
          return "";
      }
    }
    var Lp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $l(e, t) {
      Lp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function sf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Np(e) {
      return e._valueTracker;
    }
    function Wu(e) {
      e._valueTracker = null;
    }
    function Xu(e) {
      var t = "";
      return e && (sf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Pl(e) {
      var t = sf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Xr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Xr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Xr(p), i = "" + p;
          },
          stopTracking: function() {
            Wu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Xi(e) {
      Np(e) || (e._valueTracker = Pl(e));
    }
    function zp(e) {
      if (!e)
        return !1;
      var t = Np(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Xu(e);
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
    var os = !1, qu = !1, ss = !1, cf = !1;
    function Ma(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ku(e, t) {
      var a = e, i = t.checked, u = Me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Zu(e, t) {
      $l("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !qu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), qu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !os && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), os = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fi(t.value != null ? t.value : i),
        controlled: Ma(t)
      };
    }
    function ff(e, t) {
      var a = e, i = t.checked;
      i != null && Ii(a, "checked", i, !1);
    }
    function Yl(e, t) {
      var a = e;
      {
        var i = Ma(t);
        !a._wrapperState.controlled && i && !cf && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cf = !0), a._wrapperState.controlled && !i && !ss && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ss = !0);
      }
      ff(e, t);
      var u = fi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = gn(u)) : a.value !== gn(u) && (a.value = gn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? di(a, t.type, u) : t.hasOwnProperty("defaultValue") && di(a, t.type, fi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ju(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = gn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Up(e, t) {
      var a = e;
      Yl(a, t), ur(a, t);
    }
    function ur(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        ba(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = fh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            zp(f), Yl(f, p);
          }
        }
      }
    }
    function di(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || us(e.ownerDocument) !== e) && (a == null ? e.defaultValue = gn(e._wrapperState.initialValue) : e.defaultValue !== gn(a) && (e.defaultValue = gn(a)));
    }
    var cs = !1, Ql = !1, Ap = !1;
    function fs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? b.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ql || (Ql = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ap || (Ap = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !cs && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), cs = !0);
    }
    function df(e, t) {
      t.value != null && e.setAttribute("value", gn(fi(t.value)));
    }
    var eo = Array.isArray;
    function Wt(e) {
      return eo(e);
    }
    var ds;
    ds = !1;
    function Hp() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Fp = ["value", "defaultValue"];
    function Am(e) {
      {
        $l("select", e);
        for (var t = 0; t < Fp.length; t++) {
          var a = Fp[t];
          if (e[a] != null) {
            var i = Wt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Hp()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Hp());
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
        for (var y = gn(fi(a)), R = null, E = 0; E < u.length; E++) {
          if (u[E].value === y) {
            u[E].selected = !0, i && (u[E].defaultSelected = !0);
            return;
          }
          R === null && !u[E].disabled && (R = u[E]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function pf(e, t) {
      return Me({}, t, {
        value: void 0
      });
    }
    function jp(e, t) {
      var a = e;
      Am(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ds && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ds = !0);
    }
    function Hm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? pi(a, !!t.multiple, i, !1) : t.defaultValue != null && pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Fm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? pi(a, !!t.multiple, t.defaultValue, !0) : pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function jm(e, t) {
      var a = e, i = t.value;
      i != null && pi(a, !!t.multiple, i, !1);
    }
    var vf = !1;
    function hf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: gn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Vp(e, t) {
      var a = e;
      $l("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), vf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Wt(u)) {
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
    function Bp(e, t) {
      var a = e, i = fi(t.value), u = fi(t.defaultValue);
      if (i != null) {
        var s = gn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = gn(u));
    }
    function $p(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function mf(e, t) {
      Bp(e, t);
    }
    var La = "http://www.w3.org/1999/xhtml", Vm = "http://www.w3.org/1998/Math/MathML", yf = "http://www.w3.org/2000/svg";
    function ps(e) {
      switch (e) {
        case "svg":
          return yf;
        case "math":
          return Vm;
        default:
          return La;
      }
    }
    function gf(e, t) {
      return e == null || e === La ? ps(t) : e === yf && t === "foreignObject" ? La : e;
    }
    var Bm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, vs, Pp = Bm(function(e, t) {
      if (e.namespaceURI === yf && !("innerHTML" in e)) {
        vs = vs || document.createElement("div"), vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yn = 1, Na = 3, At = 8, ta = 9, qi = 11, hs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Na) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Yp = {
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
    }, Il = {
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
    function Qp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ip = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Il).forEach(function(e) {
      Ip.forEach(function(t) {
        Il[Qp(t, e)] = Il[e];
      });
    });
    function ms(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Il.hasOwnProperty(e) && Il[e]) ? t + "px" : (li(t, e), ("" + t).trim());
    }
    var Gl = /([A-Z])/g, $m = /^ms-/;
    function Pm(e) {
      return e.replace(Gl, "-$1").toLowerCase().replace($m, "-ms-");
    }
    var Gp = function() {
    };
    {
      var Wp = /^(?:webkit|moz|o)[A-Z]/, Xp = /^-ms-/, to = /-(.)/g, Wl = /;\s*$/, Xl = {}, ql = {}, qp = !1, Sf = !1, Cf = function(e) {
        return e.replace(to, function(t, a) {
          return a.toUpperCase();
        });
      }, Ef = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Cf(e.replace(Xp, "ms-"))
        ));
      }, Kp = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Zp = function(e, t) {
        ql.hasOwnProperty(t) && ql[t] || (ql[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wl, "")));
      }, Jp = function(e, t) {
        qp || (qp = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ym = function(e, t) {
        Sf || (Sf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gp = function(e, t) {
        e.indexOf("-") > -1 ? Ef(e) : Wp.test(e) ? Kp(e) : Wl.test(t) && Zp(e, t), typeof t == "number" && (isNaN(t) ? Jp(e, t) : isFinite(t) || Ym(e, t));
      };
    }
    var Qm = Gp;
    function Im(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Pm(i)) + ":", t += ms(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ev(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Qm(i, t[i]);
          var s = ms(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Gm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function _r(e) {
      var t = {};
      for (var a in e)
        for (var i = Yp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function no(e, t) {
      {
        if (!t)
          return;
        var a = _r(e), i = _r(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Gm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var tv = {
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
    }, nv = Me({
      menuitem: !0
    }, tv), rv = "__html";
    function ys(e, t) {
      if (t) {
        if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(rv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function za(e, t) {
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
    }, av = {
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
    }, na = {}, Tf = new RegExp("^(aria)-[" + fe + "]*$"), ro = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function Rf(e, t) {
      {
        if ($n.call(na, t) && na[t])
          return !0;
        if (ro.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = av.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), na[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), na[t] = !0, !0;
        }
        if (Tf.test(t)) {
          var u = t.toLowerCase(), s = av.hasOwnProperty(u) ? u : null;
          if (s == null)
            return na[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), na[t] = !0, !0;
        }
      }
      return !0;
    }
    function iv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Rf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ss(e, t) {
      za(e, t) || iv(e, t);
    }
    var Ki = !1;
    function xf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ki && (Ki = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wf = function() {
    };
    {
      var Xt = {}, Df = /^on./, lv = /^on[^A-Z]/, uv = new RegExp("^(aria)-[" + fe + "]*$"), ov = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      wf = function(e, t, a, i) {
        if ($n.call(Xt, t) && Xt[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xt[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xt[t] = !0, !0;
          if (Df.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Xt[t] = !0, !0;
        } else if (Df.test(t))
          return lv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xt[t] = !0, !0;
        if (uv.test(t) || ov.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xt[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xt[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xt[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xt[t] = !0, !0;
        var v = fa(t), m = v !== null && v.type === ui;
        if (gs.hasOwnProperty(u)) {
          var y = gs[u];
          if (y !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Xt[t] = !0, !0;
        } else if (!m && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xt[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xt[t] = !0, !0) : m ? !0 : Rr(t, a, v, !1) ? (Xt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xt[t] = !0), !0);
      };
    }
    var sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = wf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function cv(e, t, a) {
      za(e, t) || sv(e, t, a);
    }
    var Ua = 1, ao = 2, Zi = 4, Wm = Ua | ao | Zi, io = null;
    function lo(e) {
      io !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), io = e;
    }
    function Xm() {
      io === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), io = null;
    }
    function fv(e) {
      return e === io;
    }
    function Cs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Na ? t.parentNode : t;
    }
    var at = null, vi = null, Aa = null;
    function Kl(e) {
      var t = Ru(e);
      if (t) {
        if (typeof at != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = fh(a);
          at(t.stateNode, t.type, i);
        }
      }
    }
    function dv(e) {
      at = e;
    }
    function Es(e) {
      vi ? Aa ? Aa.push(e) : Aa = [e] : vi = e;
    }
    function uo() {
      return vi !== null || Aa !== null;
    }
    function oo() {
      if (vi) {
        var e = vi, t = Aa;
        if (vi = null, Aa = null, Kl(e), t)
          for (var a = 0; a < t.length; a++)
            Kl(t[a]);
      }
    }
    var Ji = function(e, t) {
      return e(t);
    }, _f = function() {
    }, bf = !1;
    function qm() {
      var e = uo();
      e && (_f(), oo());
    }
    function kf(e, t, a) {
      if (bf)
        return e(t, a);
      bf = !0;
      try {
        return Ji(e, t, a);
      } finally {
        bf = !1, qm();
      }
    }
    function Ts(e, t, a) {
      Ji = e, _f = a;
    }
    function Rs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Of(e, t, a) {
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
    function el(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = fh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Of(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var so = !1;
    if (mn)
      try {
        var tl = {};
        Object.defineProperty(tl, "passive", {
          get: function() {
            so = !0;
          }
        }), window.addEventListener("test", tl, tl), window.removeEventListener("test", tl, tl);
      } catch {
        so = !1;
      }
    function pv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Mf = pv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Lf = document.createElement("react");
      Mf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, O = window.event, M = Object.getOwnPropertyDescriptor(window, "event");
        function N() {
          Lf.removeEventListener(z, ce, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O);
        }
        var q = Array.prototype.slice.call(arguments, 3);
        function ce() {
          R = !0, N(), a.apply(i, q), E = !1;
        }
        var ie, je = !1, Ne = !1;
        function D(_) {
          if (ie = _.error, je = !0, ie === null && _.colno === 0 && _.lineno === 0 && (Ne = !0), _.defaultPrevented && ie != null && typeof ie == "object")
            try {
              ie._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), Lf.addEventListener(z, ce, !1), y.initEvent(z, !1, !1), Lf.dispatchEvent(y), M && Object.defineProperty(window, "event", M), R && E && (je ? Ne && (ie = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ie = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ie)), window.removeEventListener("error", D), !R)
          return N(), pv.apply(this, arguments);
      };
    }
    var Km = Mf, hi = !1, ra = null, co = !1, mi = null, pa = {
      onError: function(e) {
        hi = !0, ra = e;
      }
    };
    function nl(e, t, a, i, u, s, f, p, v) {
      hi = !1, ra = null, Km.apply(pa, arguments);
    }
    function Ha(e, t, a, i, u, s, f, p, v) {
      if (nl.apply(this, arguments), hi) {
        var m = zf();
        co || (co = !0, mi = m);
      }
    }
    function Nf() {
      if (co) {
        var e = mi;
        throw co = !1, mi = null, e;
      }
    }
    function Zm() {
      return hi;
    }
    function zf() {
      if (hi) {
        var e = ra;
        return hi = !1, ra = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function br(e) {
      return e._reactInternals;
    }
    function fo(e) {
      return e._reactInternals !== void 0;
    }
    function Zl(e, t) {
      e._reactInternals = t;
    }
    var se = (
      /*                      */
      0
    ), yi = (
      /*                */
      1
    ), st = (
      /*                    */
      2
    ), we = (
      /*                       */
      4
    ), Qe = (
      /*                */
      16
    ), Ie = (
      /*                 */
      32
    ), va = (
      /*                     */
      64
    ), Se = (
      /*                   */
      128
    ), wt = (
      /*            */
      256
    ), Qn = (
      /*                          */
      512
    ), kr = (
      /*                     */
      1024
    ), vt = (
      /*                      */
      2048
    ), Or = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), po = (
      /*             */
      16384
    ), xs = vt | we | va | Qn | kr | po, vv = (
      /*               */
      32767
    ), or = (
      /*                   */
      32768
    ), qt = (
      /*                */
      65536
    ), vo = (
      /* */
      131072
    ), Uf = (
      /*                       */
      1048576
    ), Af = (
      /*                    */
      2097152
    ), In = (
      /*                 */
      4194304
    ), Si = (
      /*                */
      8388608
    ), Gn = (
      /*               */
      16777216
    ), rl = (
      /*              */
      33554432
    ), Jl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      we | kr | 0
    ), Wn = st | we | Qe | Ie | Qn | Or | gi, Sn = we | va | Qn | gi, Mr = vt | Qe, rn = In | Si | Af, Fa = x.ReactCurrentOwner;
    function sr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (st | Or)) !== se && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === le ? a : null;
    }
    function Hf(e) {
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
    function Ff(e) {
      return sr(e) === e;
    }
    function cr(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = br(e);
      return u ? sr(u) === u : !1;
    }
    function Xn(e) {
      if (sr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ct(e) {
      var t = e.alternate;
      if (!t) {
        var a = sr(e);
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
              return Xn(s), e;
            if (v === u)
              return Xn(s), t;
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
    function Lr(e) {
      var t = ct(e);
      return t !== null ? jf(t) : null;
    }
    function jf(e) {
      if (e.tag === ue || e.tag === ke)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = jf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hv(e) {
      var t = ct(e);
      return t !== null ? Ds(t) : null;
    }
    function Ds(e) {
      if (e.tag === ue || e.tag === ke)
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
    var _s = H.unstable_scheduleCallback, mv = H.unstable_cancelCallback, bs = H.unstable_shouldYield, yv = H.unstable_requestPaint, yt = H.unstable_now, Vf = H.unstable_getCurrentPriorityLevel, ks = H.unstable_ImmediatePriority, fr = H.unstable_UserBlockingPriority, ha = H.unstable_NormalPriority, Os = H.unstable_LowPriority, Ci = H.unstable_IdlePriority, Bf = H.unstable_yieldValue, $f = H.unstable_setDisableYieldValue, Ei = null, Kt = null, P = null, kt = !1, an = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Pf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ai && (e = Me({}, e, {
          getLaneLabelMap: Ri,
          injectProfilingHooks: Va
        })), Ei = t.inject(e), Kt = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gv(e, t) {
      if (Kt && typeof Kt.onScheduleFiberRoot == "function")
        try {
          Kt.onScheduleFiberRoot(Ei, e, t);
        } catch (a) {
          kt || (kt = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function ja(e, t) {
      if (Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Se) === Se;
          if (_n) {
            var i;
            switch (t) {
              case Cn:
                i = ks;
                break;
              case ln:
                i = fr;
                break;
              case $a:
                i = ha;
                break;
              case Ro:
                i = Ci;
                break;
              default:
                i = ha;
                break;
            }
            Kt.onCommitFiberRoot(Ei, e, i, a);
          }
        } catch (u) {
          kt || (kt = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ti(e) {
      if (Kt && typeof Kt.onPostCommitFiberRoot == "function")
        try {
          Kt.onPostCommitFiberRoot(Ei, e);
        } catch (t) {
          kt || (kt = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Yf(e) {
      if (Kt && typeof Kt.onCommitFiberUnmount == "function")
        try {
          Kt.onCommitFiberUnmount(Ei, e);
        } catch (t) {
          kt || (kt = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function $t(e) {
      if (typeof Bf == "function" && ($f(e), Lt(e)), Kt && typeof Kt.setStrictMode == "function")
        try {
          Kt.setStrictMode(Ei, e);
        } catch (t) {
          kt || (kt = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Va(e) {
      P = e;
    }
    function Ri() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ft; a++) {
          var i = Jm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ms(e) {
      P !== null && typeof P.markCommitStarted == "function" && P.markCommitStarted(e);
    }
    function Qf() {
      P !== null && typeof P.markCommitStopped == "function" && P.markCommitStopped();
    }
    function xi(e) {
      P !== null && typeof P.markComponentRenderStarted == "function" && P.markComponentRenderStarted(e);
    }
    function al() {
      P !== null && typeof P.markComponentRenderStopped == "function" && P.markComponentRenderStopped();
    }
    function Sv(e) {
      P !== null && typeof P.markComponentPassiveEffectMountStarted == "function" && P.markComponentPassiveEffectMountStarted(e);
    }
    function If() {
      P !== null && typeof P.markComponentPassiveEffectMountStopped == "function" && P.markComponentPassiveEffectMountStopped();
    }
    function Ls(e) {
      P !== null && typeof P.markComponentPassiveEffectUnmountStarted == "function" && P.markComponentPassiveEffectUnmountStarted(e);
    }
    function Cv() {
      P !== null && typeof P.markComponentPassiveEffectUnmountStopped == "function" && P.markComponentPassiveEffectUnmountStopped();
    }
    function Ev(e) {
      P !== null && typeof P.markComponentLayoutEffectMountStarted == "function" && P.markComponentLayoutEffectMountStarted(e);
    }
    function Tv() {
      P !== null && typeof P.markComponentLayoutEffectMountStopped == "function" && P.markComponentLayoutEffectMountStopped();
    }
    function Ns(e) {
      P !== null && typeof P.markComponentLayoutEffectUnmountStarted == "function" && P.markComponentLayoutEffectUnmountStarted(e);
    }
    function eu() {
      P !== null && typeof P.markComponentLayoutEffectUnmountStopped == "function" && P.markComponentLayoutEffectUnmountStopped();
    }
    function zs(e, t, a) {
      P !== null && typeof P.markComponentErrored == "function" && P.markComponentErrored(e, t, a);
    }
    function Rv(e, t, a) {
      P !== null && typeof P.markComponentSuspended == "function" && P.markComponentSuspended(e, t, a);
    }
    function xv(e) {
      P !== null && typeof P.markLayoutEffectsStarted == "function" && P.markLayoutEffectsStarted(e);
    }
    function tu() {
      P !== null && typeof P.markLayoutEffectsStopped == "function" && P.markLayoutEffectsStopped();
    }
    function wv(e) {
      P !== null && typeof P.markPassiveEffectsStarted == "function" && P.markPassiveEffectsStarted(e);
    }
    function ho() {
      P !== null && typeof P.markPassiveEffectsStopped == "function" && P.markPassiveEffectsStopped();
    }
    function aa(e) {
      P !== null && typeof P.markRenderStarted == "function" && P.markRenderStarted(e);
    }
    function mo() {
      P !== null && typeof P.markRenderYielded == "function" && P.markRenderYielded();
    }
    function nu() {
      P !== null && typeof P.markRenderStopped == "function" && P.markRenderStopped();
    }
    function il(e) {
      P !== null && typeof P.markRenderScheduled == "function" && P.markRenderScheduled(e);
    }
    function Gf(e, t) {
      P !== null && typeof P.markForceUpdateScheduled == "function" && P.markForceUpdateScheduled(e, t);
    }
    function wi(e, t) {
      P !== null && typeof P.markStateUpdateScheduled == "function" && P.markStateUpdateScheduled(e, t);
    }
    var de = (
      /*                         */
      0
    ), _e = (
      /*                 */
      1
    ), ve = (
      /*                    */
      2
    ), gt = (
      /*               */
      8
    ), Nr = (
      /*              */
      16
    ), Us = Math.clz32 ? Math.clz32 : ll, As = Math.log, Wf = Math.LN2;
    function ll(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (As(t) / Wf | 0) | 0;
    }
    var ft = 31, U = (
      /*                        */
      0
    ), He = (
      /*                          */
      0
    ), he = (
      /*                        */
      1
    ), ma = (
      /*    */
      2
    ), dr = (
      /*             */
      4
    ), ul = (
      /*            */
      8
    ), dt = (
      /*                     */
      16
    ), ol = (
      /*                */
      32
    ), Di = (
      /*                       */
      4194240
    ), sl = (
      /*                        */
      64
    ), zr = (
      /*                        */
      128
    ), qn = (
      /*                        */
      256
    ), cl = (
      /*                        */
      512
    ), yo = (
      /*                        */
      1024
    ), go = (
      /*                        */
      2048
    ), Hs = (
      /*                        */
      4096
    ), Fs = (
      /*                        */
      8192
    ), js = (
      /*                        */
      16384
    ), Vs = (
      /*                       */
      32768
    ), Bs = (
      /*                       */
      65536
    ), $s = (
      /*                       */
      131072
    ), Ps = (
      /*                       */
      262144
    ), Ys = (
      /*                       */
      524288
    ), fl = (
      /*                       */
      1048576
    ), Qs = (
      /*                       */
      2097152
    ), dl = (
      /*                            */
      130023424
    ), Ba = (
      /*                             */
      4194304
    ), Is = (
      /*                             */
      8388608
    ), So = (
      /*                             */
      16777216
    ), Gs = (
      /*                             */
      33554432
    ), Ws = (
      /*                             */
      67108864
    ), Xf = Ba, ru = (
      /*          */
      134217728
    ), Xs = (
      /*                          */
      268435455
    ), au = (
      /*               */
      268435456
    ), _i = (
      /*                        */
      536870912
    ), Kn = (
      /*                   */
      1073741824
    );
    function Jm(e) {
      {
        if (e & he)
          return "Sync";
        if (e & ma)
          return "InputContinuousHydration";
        if (e & dr)
          return "InputContinuous";
        if (e & ul)
          return "DefaultHydration";
        if (e & dt)
          return "Default";
        if (e & ol)
          return "TransitionHydration";
        if (e & Di)
          return "Transition";
        if (e & dl)
          return "Retry";
        if (e & ru)
          return "SelectiveHydration";
        if (e & au)
          return "IdleHydration";
        if (e & _i)
          return "Idle";
        if (e & Kn)
          return "Offscreen";
      }
    }
    var it = -1, qs = sl, Ks = Ba;
    function iu(e) {
      switch (Ht(e)) {
        case he:
          return he;
        case ma:
          return ma;
        case dr:
          return dr;
        case ul:
          return ul;
        case dt:
          return dt;
        case ol:
          return ol;
        case sl:
        case zr:
        case qn:
        case cl:
        case yo:
        case go:
        case Hs:
        case Fs:
        case js:
        case Vs:
        case Bs:
        case $s:
        case Ps:
        case Ys:
        case fl:
        case Qs:
          return e & Di;
        case Ba:
        case Is:
        case So:
        case Gs:
        case Ws:
          return e & dl;
        case ru:
          return ru;
        case au:
          return au;
        case _i:
          return _i;
        case Kn:
          return Kn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Co(e, t) {
      var a = e.pendingLanes;
      if (a === U)
        return U;
      var i = U, u = e.suspendedLanes, s = e.pingedLanes, f = a & Xs;
      if (f !== U) {
        var p = f & ~u;
        if (p !== U)
          i = iu(p);
        else {
          var v = f & s;
          v !== U && (i = iu(v));
        }
      } else {
        var m = a & ~u;
        m !== U ? i = iu(m) : s !== U && (i = iu(s));
      }
      if (i === U)
        return U;
      if (t !== U && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === U) {
        var y = Ht(i), R = Ht(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === dt && (R & Di) !== U
        )
          return t;
      }
      (i & dr) !== U && (i |= a & dt);
      var E = e.entangledLanes;
      if (E !== U)
        for (var O = e.entanglements, M = i & E; M > 0; ) {
          var N = bi(M), q = 1 << N;
          i |= O[N], M &= ~q;
        }
      return i;
    }
    function Dv(e, t) {
      for (var a = e.eventTimes, i = it; t > 0; ) {
        var u = bi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Zs(e, t) {
      switch (e) {
        case he:
        case ma:
        case dr:
          return t + 250;
        case ul:
        case dt:
        case ol:
        case sl:
        case zr:
        case qn:
        case cl:
        case yo:
        case go:
        case Hs:
        case Fs:
        case js:
        case Vs:
        case Bs:
        case $s:
        case Ps:
        case Ys:
        case fl:
        case Qs:
          return t + 5e3;
        case Ba:
        case Is:
        case So:
        case Gs:
        case Ws:
          return it;
        case ru:
        case au:
        case _i:
        case Kn:
          return it;
        default:
          return S("Should have found matching lanes. This is a bug in React."), it;
      }
    }
    function ey(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p, m = s[p];
        m === it ? ((v & i) === U || (v & u) !== U) && (s[p] = Zs(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ty(e) {
      return iu(e.pendingLanes);
    }
    function qf(e) {
      var t = e.pendingLanes & ~Kn;
      return t !== U ? t : t & Kn ? Kn : U;
    }
    function lu(e) {
      return (e & he) !== U;
    }
    function Eo(e) {
      return (e & Xs) !== U;
    }
    function Js(e) {
      return (e & dl) === e;
    }
    function ny(e) {
      var t = he | dr | dt;
      return (e & t) === U;
    }
    function _v(e) {
      return (e & Di) === e;
    }
    function To(e, t) {
      var a = ma | dr | ul | dt;
      return (t & a) !== U;
    }
    function bv(e, t) {
      return (t & e.expiredLanes) !== U;
    }
    function Kf(e) {
      return (e & Di) !== U;
    }
    function Zf() {
      var e = qs;
      return qs <<= 1, (qs & Di) === U && (qs = sl), e;
    }
    function ry() {
      var e = Ks;
      return Ks <<= 1, (Ks & dl) === U && (Ks = Ba), e;
    }
    function Ht(e) {
      return e & -e;
    }
    function Pt(e) {
      return Ht(e);
    }
    function bi(e) {
      return 31 - Us(e);
    }
    function ec(e) {
      return bi(e);
    }
    function Zn(e, t) {
      return (e & t) !== U;
    }
    function pl(e, t) {
      return (e & t) === t;
    }
    function De(e, t) {
      return e | t;
    }
    function uu(e, t) {
      return e & ~t;
    }
    function Jf(e, t) {
      return e & t;
    }
    function kv(e) {
      return e;
    }
    function Ov(e, t) {
      return e !== He && e < t ? e : t;
    }
    function tc(e) {
      for (var t = [], a = 0; a < ft; a++)
        t.push(e);
      return t;
    }
    function vl(e, t, a) {
      e.pendingLanes |= t, t !== _i && (e.suspendedLanes = U, e.pingedLanes = U);
      var i = e.eventTimes, u = ec(t);
      i[u] = a;
    }
    function ed(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = bi(i), s = 1 << u;
        a[u] = it, i &= ~s;
      }
    }
    function td(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function nd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = U, e.pingedLanes = U, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p;
        i[p] = U, u[p] = it, s[p] = it, f &= ~v;
      }
    }
    function ou(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = bi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ay(e, t) {
      var a = Ht(t), i;
      switch (a) {
        case dr:
          i = ma;
          break;
        case dt:
          i = ul;
          break;
        case sl:
        case zr:
        case qn:
        case cl:
        case yo:
        case go:
        case Hs:
        case Fs:
        case js:
        case Vs:
        case Bs:
        case $s:
        case Ps:
        case Ys:
        case fl:
        case Qs:
        case Ba:
        case Is:
        case So:
        case Gs:
        case Ws:
          i = ol;
          break;
        case _i:
          i = au;
          break;
        default:
          i = He;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== He ? He : i;
    }
    function rd(e, t, a) {
      if (an)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ec(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function nc(e, t) {
      if (an)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ec(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ad(e, t) {
      return null;
    }
    var Cn = he, ln = dr, $a = dt, Ro = _i, hl = He;
    function Ur() {
      return hl;
    }
    function Yt(e) {
      hl = e;
    }
    function xo(e, t) {
      var a = hl;
      try {
        return hl = e, t();
      } finally {
        hl = a;
      }
    }
    function En(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function iy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function id(e, t) {
      return e !== 0 && e < t;
    }
    function wo(e) {
      var t = Ht(e);
      return id(Cn, t) ? id(ln, t) ? Eo(t) ? $a : Ro : ln : Cn;
    }
    function Qt(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Mv;
    function J(e) {
      Mv = e;
    }
    function su(e) {
      Mv(e);
    }
    var Do;
    function Lv(e) {
      Do = e;
    }
    var Nv;
    function _o(e) {
      Nv = e;
    }
    var bo;
    function ld(e) {
      bo = e;
    }
    var ud;
    function zv(e) {
      ud = e;
    }
    var rc = !1, cu = [], ya = null, ht = null, Zt = null, Ar = /* @__PURE__ */ new Map(), fu = /* @__PURE__ */ new Map(), Pa = [], ia = [
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
    function Uv(e) {
      return ia.indexOf(e) > -1;
    }
    function ga(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Av(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ya = null;
          break;
        case "dragenter":
        case "dragleave":
          ht = null;
          break;
        case "mouseover":
        case "mouseout":
          Zt = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ar.delete(a);
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
        var f = ga(t, a, i, u, s);
        if (t !== null) {
          var p = Ru(t);
          p !== null && Do(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Hv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ya = du(ya, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ht = du(ht, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Zt = du(Zt, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Ar.set(m, du(Ar.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return fu.set(R, du(fu.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function od(e) {
      var t = Ho(e.target);
      if (t !== null) {
        var a = sr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ue) {
            var u = Hf(a);
            if (u !== null) {
              e.blockedOn = u, ud(e.priority, function() {
                Nv(a);
              });
              return;
            }
          } else if (i === le) {
            var s = a.stateNode;
            if (Qt(s)) {
              e.blockedOn = ws(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Fv(e) {
      for (var t = bo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Pa.length && id(t, Pa[i].priority); i++)
        ;
      Pa.splice(i, 0, a), i === 0 && od(a);
    }
    function ac(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ml(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          lo(s), u.target.dispatchEvent(s), Xm();
        } else {
          var f = Ru(i);
          return f !== null && Do(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ko(e, t, a) {
      ac(e) && a.delete(t);
    }
    function sd() {
      rc = !1, ya !== null && ac(ya) && (ya = null), ht !== null && ac(ht) && (ht = null), Zt !== null && ac(Zt) && (Zt = null), Ar.forEach(ko), fu.forEach(ko);
    }
    function Tn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rc || (rc = !0, H.unstable_scheduleCallback(H.unstable_NormalPriority, sd)));
    }
    function Le(e) {
      if (cu.length > 0) {
        Tn(cu[0], e);
        for (var t = 1; t < cu.length; t++) {
          var a = cu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ya !== null && Tn(ya, e), ht !== null && Tn(ht, e), Zt !== null && Tn(Zt, e);
      var i = function(p) {
        return Tn(p, e);
      };
      Ar.forEach(i), fu.forEach(i);
      for (var u = 0; u < Pa.length; u++) {
        var s = Pa[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Pa.length > 0; ) {
        var f = Pa[0];
        if (f.blockedOn !== null)
          break;
        od(f), f.blockedOn === null && Pa.shift();
      }
    }
    var St = x.ReactCurrentBatchConfig, Dt = !0;
    function Jt(e) {
      Dt = !!e;
    }
    function pr() {
      return Dt;
    }
    function pu(e, t, a) {
      var i = kn(t), u;
      switch (i) {
        case Cn:
          u = It;
          break;
        case ln:
          u = Oo;
          break;
        case $a:
        default:
          u = Ya;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function It(e, t, a, i) {
      var u = Ur(), s = St.transition;
      St.transition = null;
      try {
        Yt(Cn), Ya(e, t, a, i);
      } finally {
        Yt(u), St.transition = s;
      }
    }
    function Oo(e, t, a, i) {
      var u = Ur(), s = St.transition;
      St.transition = null;
      try {
        Yt(ln), Ya(e, t, a, i);
      } finally {
        Yt(u), St.transition = s;
      }
    }
    function Ya(e, t, a, i) {
      Dt && ic(e, t, a, i);
    }
    function ic(e, t, a, i) {
      var u = ml(e, t, a, i);
      if (u === null) {
        wy(e, t, i, vu, a), Av(e, i);
        return;
      }
      if (Hv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Av(e, i), t & Zi && Uv(e)) {
        for (; u !== null; ) {
          var s = Ru(u);
          s !== null && su(s);
          var f = ml(e, t, a, i);
          if (f === null && wy(e, t, i, vu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var vu = null;
    function ml(e, t, a, i) {
      vu = null;
      var u = Cs(i), s = Ho(u);
      if (s !== null) {
        var f = sr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ue) {
            var v = Hf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === le) {
            var m = f.stateNode;
            if (Qt(m))
              return ws(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return vu = s, null;
    }
    function kn(e) {
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
          return Cn;
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
          return ln;
        case "message": {
          var t = Vf();
          switch (t) {
            case ks:
              return Cn;
            case fr:
              return ln;
            case ha:
            case Os:
              return $a;
            case Ci:
              return Ro;
            default:
              return $a;
          }
        }
        default:
          return $a;
      }
    }
    function cd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function hu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qa(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function lc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var yl = null, Sa = null, ki = null;
    function Oi(e) {
      return yl = e, Sa = oc(), !0;
    }
    function uc() {
      yl = null, Sa = null, ki = null;
    }
    function mu() {
      if (ki)
        return ki;
      var e, t = Sa, a = t.length, i, u = oc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ki = u.slice(e, p), ki;
    }
    function oc() {
      return "value" in yl ? yl.value : yl.textContent;
    }
    function gl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Sl() {
      return !0;
    }
    function Rn() {
      return !1;
    }
    function Ft(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Sl : this.isDefaultPrevented = Rn, this.isPropagationStopped = Rn, this;
      }
      return Me(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Sl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Sl);
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
        isPersistent: Sl
      }), t;
    }
    var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, wn = Ft(xn), yu = Me({}, xn, {
      view: 0,
      detail: 0
    }), fd = Ft(yu), Mo, dd, Hr;
    function jv(e) {
      e !== Hr && (Hr && e.type === "mousemove" ? (Mo = e.screenX - Hr.screenX, dd = e.screenY - Hr.screenY) : (Mo = 0, dd = 0), Hr = e);
    }
    var gu = Me({}, yu, {
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
      getModifierState: fc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (jv(e), Mo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dd;
      }
    }), Mi = Ft(gu), pd = Me({}, gu, {
      dataTransfer: 0
    }), Cl = Ft(pd), Vv = Me({}, yu, {
      relatedTarget: 0
    }), sc = Ft(Vv), vd = Me({}, xn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cc = Ft(vd), ly = Me({}, xn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = Ft(ly), Bv = Me({}, xn, {
      data: 0
    }), hd = Ft(Bv), El = hd, oy = {
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
    }, Su = {
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
    function $v(e) {
      if (e.key) {
        var t = oy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = gl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Su[e.keyCode] || "Unidentified" : "";
    }
    var _t = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = _t[e];
      return i ? !!a[i] : !1;
    }
    function fc(e) {
      return sy;
    }
    var cy = Me({}, yu, {
      key: $v,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? gl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), fy = Ft(cy), Pv = Me({}, gu, {
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
    }), md = Ft(Pv), dy = Me({}, yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fc
    }), Fr = Ft(dy), yd = Me({}, xn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), py = Ft(yd), Li = Me({}, gu, {
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
    }), dc = Ft(Li), Tl = [9, 13, 27, 32], Lo = 229, No = mn && "CompositionEvent" in window, Rl = null;
    mn && "documentMode" in document && (Rl = document.documentMode);
    var vy = mn && "TextEvent" in window && !Rl, pc = mn && (!No || Rl && Rl > 8 && Rl <= 11), Yv = 32, gd = String.fromCharCode(Yv);
    function Qv() {
      Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Er("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var zo = !1;
    function vc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Iv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Sd(e, t) {
      return e === "keydown" && t.keyCode === Lo;
    }
    function Gv(e, t) {
      switch (e) {
        case "keyup":
          return Tl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Lo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Cd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hc(e) {
      return e.locale === "ko";
    }
    var Ia = !1;
    function Ed(e, t, a, i, u) {
      var s, f;
      if (No ? s = Iv(t) : Ia ? Gv(t, i) && (s = "onCompositionEnd") : Sd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      pc && !hc(i) && (!Ia && s === "onCompositionStart" ? Ia = Oi(u) : s === "onCompositionEnd" && Ia && (f = mu()));
      var p = Zv(a, s);
      if (p.length > 0) {
        var v = new hd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Cd(i);
          m !== null && (v.data = m);
        }
      }
    }
    function mc(e, t) {
      switch (e) {
        case "compositionend":
          return Cd(t);
        case "keypress":
          var a = t.which;
          return a !== Yv ? null : (zo = !0, gd);
        case "textInput":
          var i = t.data;
          return i === gd && zo ? null : i;
        default:
          return null;
      }
    }
    function Wv(e, t) {
      if (Ia) {
        if (e === "compositionend" || !No && Gv(e, t)) {
          var a = mu();
          return uc(), Ia = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!vc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return pc && !hc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hy(e, t, a, i, u) {
      var s;
      if (vy ? s = mc(t, i) : s = Wv(t, i), !s)
        return null;
      var f = Zv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new El("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yc(e, t, a, i, u, s, f) {
      Ed(e, t, a, i, u), hy(e, t, a, i, u);
    }
    var my = {
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
    function Cu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!my[e.type] : t === "textarea";
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
    function yy(e) {
      if (!mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gc() {
      Er("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Es(i);
      var u = Zv(t, "onChange");
      if (u.length > 0) {
        var s = new wn("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, Cs(e)), kf(d, t);
    }
    function d(e) {
      b0(e, 0);
    }
    function h(e) {
      var t = xc(e);
      if (zp(t))
        return e;
    }
    function g(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    mn && (C = yy("input") && (!document.documentMode || document.documentMode > 9));
    function L(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", V);
    }
    function j() {
      r && (r.detachEvent("onpropertychange", V), r = null, l = null);
    }
    function V(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function F(e, t, a) {
      e === "focusin" ? (j(), L(t, a)) : e === "focusout" && j();
    }
    function W(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function re(e, t) {
      if (e === "click")
        return h(t);
    }
    function Ot(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function w(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || di(e, "number", e.value);
    }
    function T(e, t, a, i, u, s, f) {
      var p = a ? xc(a) : window, v, m;
      if (o(p) ? v = g : Cu(p) ? C ? v = Ot : (v = W, m = F) : ee(p) && (v = re), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && w(p);
    }
    function k() {
      _a("onMouseEnter", ["mouseout", "mouseover"]), _a("onMouseLeave", ["mouseout", "mouseover"]), _a("onPointerEnter", ["pointerout", "pointerover"]), _a("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function $(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !fv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Ho(m) || Ud(m)))
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
        var E, O;
        if (v) {
          var M = i.relatedTarget || i.toElement;
          if (E = a, O = M ? Ho(M) : null, O !== null) {
            var N = sr(O);
            (O !== N || O.tag !== ue && O.tag !== ke) && (O = null);
          }
        } else
          E = null, O = a;
        if (E !== O) {
          var q = Mi, ce = "onMouseLeave", ie = "onMouseEnter", je = "mouse";
          (t === "pointerout" || t === "pointerover") && (q = md, ce = "onPointerLeave", ie = "onPointerEnter", je = "pointer");
          var Ne = E == null ? y : xc(E), D = O == null ? y : xc(O), z = new q(ce, je + "leave", E, i, u);
          z.target = Ne, z.relatedTarget = D;
          var _ = null, B = Ho(u);
          if (B === a) {
            var K = new q(ie, je + "enter", O, i, u);
            K.target = D, K.relatedTarget = Ne, _ = K;
          }
          UT(e, z, _, E, O);
        }
      }
    }
    function ae(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var te = typeof Object.is == "function" ? Object.is : ae;
    function oe(e, t) {
      if (te(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!$n.call(t, s) || !te(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ce(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function en(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function $e(e, t) {
      for (var a = Ce(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Na) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ce(en(a));
      }
    }
    function Ni(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return gy(e, u, s, f, p);
    }
    function gy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e:
        for (; ; ) {
          for (var E = null; y === t && (a === 0 || y.nodeType === Na) && (f = s + a), y === i && (u === 0 || y.nodeType === Na) && (p = s + u), y.nodeType === Na && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
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
    function mT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = $e(e, f), y = $e(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function m0(e) {
      return e && e.nodeType === Na;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : m0(e) ? !1 : m0(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function yT(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function gT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
        if (gT(t))
          e = t.contentWindow;
        else
          return t;
        t = us(e.document);
      }
      return t;
    }
    function Sy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ST() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Sy(e) ? ET(e) : null
      };
    }
    function CT(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && yT(a)) {
        i !== null && Sy(a) && TT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Yn && u.push({
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
    function ET(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ni(e), t || {
        start: 0,
        end: 0
      };
    }
    function TT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : mT(e, t);
    }
    var RT = mn && "documentMode" in document && document.documentMode <= 11;
    function xT() {
      Er("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sc = null, Cy = null, Td = null, Ey = !1;
    function wT(e) {
      if ("selectionStart" in e && Sy(e))
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
    function DT(e) {
      return e.window === e ? e.document : e.nodeType === ta ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = DT(a);
      if (!(Ey || Sc == null || Sc !== us(i))) {
        var u = wT(Sc);
        if (!Td || !oe(Td, u)) {
          Td = u;
          var s = Zv(Cy, "onSelect");
          if (s.length > 0) {
            var f = new wn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sc;
          }
        }
      }
    }
    function _T(e, t, a, i, u, s, f) {
      var p = a ? xc(a) : window;
      switch (t) {
        case "focusin":
          (Cu(p) || p.contentEditable === "true") && (Sc = p, Cy = a, Td = null);
          break;
        case "focusout":
          Sc = null, Cy = null, Td = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, S0(e, i, u);
          break;
        case "selectionchange":
          if (RT)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function Xv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Cc = {
      animationend: Xv("Animation", "AnimationEnd"),
      animationiteration: Xv("Animation", "AnimationIteration"),
      animationstart: Xv("Animation", "AnimationStart"),
      transitionend: Xv("Transition", "TransitionEnd")
    }, Ty = {}, C0 = {};
    mn && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete Cc.animationend.animation, delete Cc.animationiteration.animation, delete Cc.animationstart.animation), "TransitionEvent" in window || delete Cc.transitionend.transition);
    function qv(e) {
      if (Ty[e])
        return Ty[e];
      if (!Cc[e])
        return e;
      var t = Cc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return Ty[e] = t[a];
      return e;
    }
    var E0 = qv("animationend"), T0 = qv("animationiteration"), R0 = qv("animationstart"), x0 = qv("transitionend"), w0 = /* @__PURE__ */ new Map(), D0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Eu(e, t) {
      w0.set(e, t), Er(t, [e]);
    }
    function bT() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Eu(a, "on" + i);
      }
      Eu(E0, "onAnimationEnd"), Eu(T0, "onAnimationIteration"), Eu(R0, "onAnimationStart"), Eu("dblclick", "onDoubleClick"), Eu("focusin", "onFocus"), Eu("focusout", "onBlur"), Eu(x0, "onTransitionEnd");
    }
    function kT(e, t, a, i, u, s, f) {
      var p = w0.get(t);
      if (p !== void 0) {
        var v = wn, m = t;
        switch (t) {
          case "keypress":
            if (gl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = fy;
            break;
          case "focusin":
            m = "focus", v = sc;
            break;
          case "focusout":
            m = "blur", v = sc;
            break;
          case "beforeblur":
          case "afterblur":
            v = sc;
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
            v = Mi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Cl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Fr;
            break;
          case E0:
          case T0:
          case R0:
            v = cc;
            break;
          case x0:
            v = py;
            break;
          case "scroll":
            v = fd;
            break;
          case "wheel":
            v = dc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = md;
            break;
        }
        var y = (s & Zi) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = NT(a, p, i.type, y, R);
          if (E.length > 0) {
            var O = new v(p, m, null, i, u);
            e.push({
              event: O,
              listeners: E
            });
          }
        }
      }
    }
    bT(), k(), gc(), xT(), Qv();
    function OT(e, t, a, i, u, s, f) {
      kT(e, t, a, i, u, s);
      var p = (s & Wm) === 0;
      p && ($(e, t, a, i, u), T(e, t, a, i, u), _T(e, t, a, i, u), yc(e, t, a, i, u));
    }
    var Rd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Rd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ha(i, t, void 0, e), e.currentTarget = null;
    }
    function MT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, O = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          _0(e, O, E), i = R;
        }
    }
    function b0(e, t) {
      for (var a = (t & Zi) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        MT(s, f, a);
      }
      Nf();
    }
    function LT(e, t, a, i, u) {
      var s = Cs(a), f = [];
      OT(f, e, i, a, s, t), b0(f, t);
    }
    function Ct(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ox(t), u = AT(e, a);
      i.has(u) || (k0(t, e, ao, a), i.add(u));
    }
    function xy(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Zi), k0(a, e, i, t);
    }
    var Kv = "_reactListening" + Math.random().toString(36).slice(2);
    function xd(e) {
      if (!e[Kv]) {
        e[Kv] = !0, Gr.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === ta ? e : e.ownerDocument;
        t !== null && (t[Kv] || (t[Kv] = !0, xy("selectionchange", !1, t)));
      }
    }
    function k0(e, t, a, i, u) {
      var s = pu(e, t, a), f = void 0;
      so && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qa(e, t, s, f) : hu(e, t, s) : f !== void 0 ? lc(e, t, s, f) : cd(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === At && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & Ua) && !(t & ao)) {
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
                if (O0(m, f))
                  break;
                if (v === me)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === le || R === me) {
                      var E = y.stateNode.containerInfo;
                      if (O0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var O = Ho(m);
                  if (O === null)
                    return;
                  var M = O.tag;
                  if (M === ue || M === ke) {
                    p = s = O;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      kf(function() {
        return LT(e, t, a, s);
      });
    }
    function wd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function NT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, O = R.tag;
        if (O === ue && E !== null && (y = E, p !== null)) {
          var M = el(m, p);
          M != null && v.push(wd(m, M, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function Zv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, m = el(u, a);
          m != null && i.unshift(wd(u, m, v));
          var y = el(u, t);
          y != null && i.push(wd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ec(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function zT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ec(s))
        u++;
      for (var f = 0, p = i; p; p = Ec(p))
        f++;
      for (; u - f > 0; )
        a = Ec(a), u--;
      for (; f - u > 0; )
        i = Ec(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ec(a), i = Ec(i);
      }
      return null;
    }
    function M0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === ue && y !== null) {
          var E = y;
          if (u) {
            var O = el(p, s);
            O != null && f.unshift(wd(p, O, E));
          } else if (!u) {
            var M = el(p, s);
            M != null && f.push(wd(p, M, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function UT(e, t, a, i, u) {
      var s = i && u ? zT(i, u) : null;
      i !== null && M0(e, t, i, s, !1), u !== null && a !== null && M0(e, a, u, s, !0);
    }
    function AT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var jr = !1, Dd = "dangerouslySetInnerHTML", Jv = "suppressContentEditableWarning", Tu = "suppressHydrationWarning", L0 = "autoFocus", Uo = "children", Ao = "style", eh = "__html", Dy, th, _d, N0, nh, z0, U0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, th = function(e, t) {
      Ss(e, t), xf(e, t), cv(e, t, {
        registrationNameDependencies: sa,
        possibleRegistrationNames: ju
      });
    }, z0 = mn && !document.documentMode, _d = function(e, t, a) {
      if (!jr) {
        var i = rh(a), u = rh(t);
        u !== i && (jr = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, N0 = function(e) {
      if (!jr) {
        jr = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, nh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === La ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var HT = /\r\n?/g, FT = /\u0000|\uFFFD/g;
    function rh(e) {
      Qi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(HT, `
`).replace(FT, "");
    }
    function ah(e, t, a, i) {
      var u = rh(t), s = rh(e);
      if (s !== u && (i && (jr || (jr = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Cr))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === ta ? e : e.ownerDocument;
    }
    function jT() {
    }
    function ih(e) {
      e.onclick = jT;
    }
    function VT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ao)
            f && Object.freeze(f), ev(t, f);
          else if (s === Dd) {
            var p = f ? f[eh] : void 0;
            p != null && Pp(t, p);
          } else if (s === Uo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && hs(t, f);
            } else
              typeof f == "number" && hs(t, "" + f);
          else
            s === Jv || s === Tu || s === L0 || (sa.hasOwnProperty(s) ? f != null && (typeof f != "function" && nh(s, f), s === "onScroll" && Ct("scroll", t)) : f != null && Ii(t, s, f, u));
        }
    }
    function BT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ao ? ev(e, f) : s === Dd ? Pp(e, f) : s === Uo ? hs(e, f) : Ii(e, s, f, i);
      }
    }
    function $T(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === La && (p = ps(e)), p === La) {
        if (u = za(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === La && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !$n.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function PT(e, t) {
      return A0(t).createTextNode(e);
    }
    function YT(e, t, a, i) {
      var u = za(t, a);
      th(t, a);
      var s;
      switch (t) {
        case "dialog":
          Ct("cancel", e), Ct("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Ct("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Rd.length; f++)
            Ct(Rd[f], e);
          s = a;
          break;
        case "source":
          Ct("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Ct("error", e), Ct("load", e), s = a;
          break;
        case "details":
          Ct("toggle", e), s = a;
          break;
        case "input":
          Zu(e, a), s = Ku(e, a), Ct("invalid", e);
          break;
        case "option":
          fs(e, a), s = a;
          break;
        case "select":
          jp(e, a), s = pf(e, a), Ct("invalid", e);
          break;
        case "textarea":
          Vp(e, a), s = hf(e, a), Ct("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ys(t, s), VT(t, e, i, s, u), t) {
        case "input":
          Xi(e), Ju(e, a, !1);
          break;
        case "textarea":
          Xi(e), $p(e);
          break;
        case "option":
          df(e, a);
          break;
        case "select":
          Hm(e, a);
          break;
        default:
          typeof s.onClick == "function" && ih(e);
          break;
      }
    }
    function QT(e, t, a, i, u) {
      th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ku(e, a), p = Ku(e, i), s = [];
          break;
        case "select":
          f = pf(e, a), p = pf(e, i), s = [];
          break;
        case "textarea":
          f = hf(e, a), p = hf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ih(e);
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
            v === Dd || v === Uo || v === Jv || v === Tu || v === L0 || (sa.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var E = p[v], O = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || E === O || E == null && O == null))
          if (v === Ao)
            if (E && Object.freeze(E), O) {
              for (m in O)
                O.hasOwnProperty(m) && (!E || !E.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in E)
                E.hasOwnProperty(m) && O[m] !== E[m] && (y || (y = {}), y[m] = E[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = E;
          else if (v === Dd) {
            var M = E ? E[eh] : void 0, N = O ? O[eh] : void 0;
            M != null && N !== M && (s = s || []).push(v, M);
          } else
            v === Uo ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === Jv || v === Tu || (sa.hasOwnProperty(v) ? (E != null && (typeof E != "function" && nh(v, E), v === "onScroll" && Ct("scroll", e)), !s && O !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (no(y, p[Ao]), (s = s || []).push(Ao, y)), s;
    }
    function IT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && ff(e, u);
      var s = za(a, i), f = za(a, u);
      switch (BT(e, t, s, f), a) {
        case "input":
          Yl(e, u);
          break;
        case "textarea":
          Bp(e, u);
          break;
        case "select":
          Fm(e, u);
          break;
      }
    }
    function GT(e) {
      {
        var t = e.toLowerCase();
        return gs.hasOwnProperty(t) && gs[t] || null;
      }
    }
    function WT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = za(t, a), th(t, a), t) {
        case "dialog":
          Ct("cancel", e), Ct("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ct("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Rd.length; m++)
            Ct(Rd[m], e);
          break;
        case "source":
          Ct("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Ct("error", e), Ct("load", e);
          break;
        case "details":
          Ct("toggle", e);
          break;
        case "input":
          Zu(e, a), Ct("invalid", e);
          break;
        case "option":
          fs(e, a);
          break;
        case "select":
          jp(e, a), Ct("invalid", e);
          break;
        case "textarea":
          Vp(e, a), Ct("invalid", e);
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
      var O = null;
      for (var M in a)
        if (a.hasOwnProperty(M)) {
          var N = a[M];
          if (M === Uo)
            typeof N == "string" ? e.textContent !== N && (a[Tu] !== !0 && ah(e.textContent, N, s, f), O = [Uo, N]) : typeof N == "number" && e.textContent !== "" + N && (a[Tu] !== !0 && ah(e.textContent, N, s, f), O = [Uo, "" + N]);
          else if (sa.hasOwnProperty(M))
            N != null && (typeof N != "function" && nh(M, N), M === "onScroll" && Ct("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var q = void 0, ce = p && Bn ? null : fa(M);
            if (a[Tu] !== !0) {
              if (!(M === Jv || M === Tu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === Dd) {
                  var ie = e.innerHTML, je = N ? N[eh] : void 0;
                  if (je != null) {
                    var Ne = U0(e, je);
                    Ne !== ie && _d(M, ie, Ne);
                  }
                } else if (M === Ao) {
                  if (v.delete(M), z0) {
                    var D = Im(N);
                    q = e.getAttribute("style"), D !== q && _d(M, q, D);
                  }
                } else if (p && !Bn)
                  v.delete(M.toLowerCase()), q = ns(e, M, N), N !== q && _d(M, q, N);
                else if (!Vt(M, ce, p) && !Tt(M, N, ce, p)) {
                  var z = !1;
                  if (ce !== null)
                    v.delete(ce.attributeName), q = Bu(e, M, N, ce);
                  else {
                    var _ = i;
                    if (_ === La && (_ = ps(t)), _ === La)
                      v.delete(M.toLowerCase());
                    else {
                      var B = GT(M);
                      B !== null && B !== M && (z = !0, v.delete(B)), v.delete(M);
                    }
                    q = ns(e, M, N);
                  }
                  var K = Bn;
                  !K && N !== q && !z && _d(M, q, N);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Tu] !== !0 && N0(v), t) {
        case "input":
          Xi(e), Ju(e, a, !0);
          break;
        case "textarea":
          Xi(e), $p(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ih(e);
          break;
      }
      return O;
    }
    function XT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function _y(e, t) {
      {
        if (jr)
          return;
        jr = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function by(e, t) {
      {
        if (jr)
          return;
        jr = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t, a) {
      {
        if (jr)
          return;
        jr = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (t === "" || jr)
          return;
        jr = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function qT(e, t, a) {
      switch (t) {
        case "input":
          Up(e, a);
          return;
        case "textarea":
          mf(e, a);
          return;
        case "select":
          jm(e, a);
          return;
      }
    }
    var bd = function() {
    }, kd = function() {
    };
    {
      var KT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], H0 = [
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
      ], ZT = H0.concat(["button"]), JT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      kd = function(e, t) {
        var a = Me({}, e || F0), i = {
          tag: t
        };
        return H0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ZT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), KT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var eR = function(e, t) {
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
            return JT.indexOf(t) === -1;
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
      }, tR = function(e, t) {
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
      }, j0 = {};
      bd = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = eR(e, u) ? null : i, f = s ? null : tR(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!j0[m]) {
            j0[m] = !0;
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
    var lh = "suppressHydrationWarning", uh = "$", oh = "/$", Od = "$?", Md = "$!", nR = "style", My = null, Ly = null;
    function rR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ta:
        case qi: {
          t = i === ta ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : gf(null, "");
          break;
        }
        default: {
          var s = i === At ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = gf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = kd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function aR(e, t, a) {
      {
        var i = e, u = gf(i.namespace, t), s = kd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function VO(e) {
      return e;
    }
    function iR(e) {
      My = pr(), Ly = ST();
      var t = null;
      return Jt(!1), t;
    }
    function lR(e) {
      CT(Ly), Jt(My), My = null, Ly = null;
    }
    function uR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (bd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = kd(f.ancestorInfo, e);
          bd(null, p, v);
        }
        s = f.namespace;
      }
      var m = $T(e, t, a, s);
      return zd(u, m), Vy(m, t), m;
    }
    function oR(e, t) {
      e.appendChild(t);
    }
    function sR(e, t, a, i, u) {
      switch (YT(e, t, a, i), t) {
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
    function cR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = kd(f.ancestorInfo, t);
          bd(null, p, v);
        }
      }
      return QT(e, t, a, i);
    }
    function Ny(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fR(e, t, a, i) {
      {
        var u = a;
        bd(null, e, u.ancestorInfo);
      }
      var s = PT(e, t);
      return zd(i, s), s;
    }
    function dR() {
      var e = window.event;
      return e === void 0 ? $a : kn(e.type);
    }
    var zy = typeof setTimeout == "function" ? setTimeout : void 0, pR = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = -1, V0 = typeof Promise == "function" ? Promise : void 0, vR = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
      return V0.resolve(null).then(e).catch(hR);
    } : zy;
    function hR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mR(e, t, a, i) {
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
    function yR(e, t, a, i, u, s) {
      IT(e, t, a, i, u), Vy(e, u);
    }
    function B0(e) {
      hs(e, "");
    }
    function gR(e, t, a) {
      e.nodeValue = a;
    }
    function SR(e, t) {
      e.appendChild(t);
    }
    function CR(e, t) {
      var a;
      e.nodeType === At ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && ih(a);
    }
    function ER(e, t, a) {
      e.insertBefore(t, a);
    }
    function TR(e, t, a) {
      e.nodeType === At ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function RR(e, t) {
      e.removeChild(t);
    }
    function xR(e, t) {
      e.nodeType === At ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ay(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === At) {
          var s = u.data;
          if (s === oh)
            if (i === 0) {
              e.removeChild(u), Le(t);
              return;
            } else
              i--;
          else
            (s === uh || s === Od || s === Md) && i++;
        }
        a = u;
      } while (a);
      Le(t);
    }
    function wR(e, t) {
      e.nodeType === At ? Ay(e.parentNode, t) : e.nodeType === Yn && Ay(e, t), Le(e);
    }
    function DR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _R(e) {
      e.nodeValue = "";
    }
    function bR(e, t) {
      e = e;
      var a = t[nR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ms("display", i);
    }
    function kR(e, t) {
      e.nodeValue = t;
    }
    function OR(e) {
      e.nodeType === Yn ? e.textContent = "" : e.nodeType === ta && e.documentElement && e.removeChild(e.documentElement);
    }
    function MR(e, t, a) {
      return e.nodeType !== Yn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function LR(e, t) {
      return t === "" || e.nodeType !== Na ? null : e;
    }
    function NR(e) {
      return e.nodeType !== At ? null : e;
    }
    function $0(e) {
      return e.data === Od;
    }
    function Hy(e) {
      return e.data === Md;
    }
    function zR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function UR(e, t) {
      e._reactRetry = t;
    }
    function sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yn || t === Na)
          break;
        if (t === At) {
          var a = e.data;
          if (a === uh || a === Md || a === Od)
            break;
          if (a === oh)
            return null;
        }
      }
      return e;
    }
    function Ld(e) {
      return sh(e.nextSibling);
    }
    function AR(e) {
      return sh(e.firstChild);
    }
    function HR(e) {
      return sh(e.firstChild);
    }
    function FR(e) {
      return sh(e.nextSibling);
    }
    function jR(e, t, a, i, u, s, f) {
      zd(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & _e) !== de;
      return WT(e, t, a, p, i, m, f);
    }
    function VR(e, t, a, i) {
      return zd(a, e), a.mode & _e, XT(e, t);
    }
    function BR(e, t) {
      zd(t, e);
    }
    function $R(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === At) {
          var i = t.data;
          if (i === oh) {
            if (a === 0)
              return Ld(t);
            a--;
          } else
            (i === uh || i === Md || i === Od) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function P0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === At) {
          var i = t.data;
          if (i === uh || i === Md || i === Od) {
            if (a === 0)
              return t;
            a--;
          } else
            i === oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function PR(e) {
      Le(e);
    }
    function YR(e) {
      Le(e);
    }
    function QR(e) {
      return e !== "head" && e !== "body";
    }
    function IR(e, t, a, i) {
      var u = !0;
      ah(t.nodeValue, a, i, u);
    }
    function GR(e, t, a, i, u, s) {
      if (t[lh] !== !0) {
        var f = !0;
        ah(i.nodeValue, u, s, f);
      }
    }
    function WR(e, t) {
      t.nodeType === Yn ? _y(e, t) : t.nodeType === At || by(e, t);
    }
    function XR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yn ? _y(a, t) : t.nodeType === At || by(a, t));
      }
    }
    function qR(e, t, a, i, u) {
      (u || t[lh] !== !0) && (i.nodeType === Yn ? _y(a, i) : i.nodeType === At || by(a, i));
    }
    function KR(e, t, a) {
      ky(e, t);
    }
    function ZR(e, t) {
      Oy(e, t);
    }
    function JR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ky(i, t);
      }
    }
    function ex(e, t) {
      {
        var a = e.parentNode;
        a !== null && Oy(a, t);
      }
    }
    function tx(e, t, a, i, u, s) {
      (s || t[lh] !== !0) && ky(a, i);
    }
    function nx(e, t, a, i, u) {
      (u || t[lh] !== !0) && Oy(a, i);
    }
    function rx(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ax(e) {
      xd(e);
    }
    var Tc = Math.random().toString(36).slice(2), Rc = "__reactFiber$" + Tc, Fy = "__reactProps$" + Tc, Nd = "__reactContainer$" + Tc, jy = "__reactEvents$" + Tc, ix = "__reactListeners$" + Tc, lx = "__reactHandles$" + Tc;
    function ux(e) {
      delete e[Rc], delete e[Fy], delete e[jy], delete e[ix], delete e[lx];
    }
    function zd(e, t) {
      t[Rc] = e;
    }
    function ch(e, t) {
      t[Nd] = e;
    }
    function Y0(e) {
      e[Nd] = null;
    }
    function Ud(e) {
      return !!e[Nd];
    }
    function Ho(e) {
      var t = e[Rc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Nd] || a[Rc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = P0(e); u !== null; ) {
              var s = u[Rc];
              if (s)
                return s;
              u = P0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ru(e) {
      var t = e[Rc] || e[Nd];
      return t && (t.tag === ue || t.tag === ke || t.tag === Ue || t.tag === le) ? t : null;
    }
    function xc(e) {
      if (e.tag === ue || e.tag === ke)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function fh(e) {
      return e[Fy] || null;
    }
    function Vy(e, t) {
      e[Fy] = t;
    }
    function ox(e) {
      var t = e[jy];
      return t === void 0 && (t = e[jy] = /* @__PURE__ */ new Set()), t;
    }
    var Q0 = {}, I0 = x.ReactDebugCurrentFrame;
    function dh(e) {
      if (e) {
        var t = e._owner, a = Qu(e.type, e._source, t ? t.type : null);
        I0.setExtraStackFrame(a);
      } else
        I0.setExtraStackFrame(null);
    }
    function Ga(e, t, a, i, u) {
      {
        var s = Function.call.bind($n);
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
            p && !(p instanceof Error) && (dh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), dh(null)), p instanceof Error && !(p.message in Q0) && (Q0[p.message] = !0, dh(u), S("Failed %s type: %s", a, p.message), dh(null));
          }
      }
    }
    var By = [], ph;
    ph = [];
    var xl = -1;
    function xu(e) {
      return {
        current: e
      };
    }
    function Jn(e, t) {
      if (xl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== ph[xl] && S("Unexpected Fiber popped."), e.current = By[xl], By[xl] = null, ph[xl] = null, xl--;
    }
    function er(e, t, a) {
      xl++, By[xl] = e.current, ph[xl] = a, e.current = t;
    }
    var $y;
    $y = {};
    var la = {};
    Object.freeze(la);
    var wl = xu(la), zi = xu(!1), Py = la;
    function wc(e, t, a) {
      return a && Ui(t) ? Py : wl.current;
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Dc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return la;
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
        return u && G0(e, t, s), s;
      }
    }
    function vh() {
      return zi.current;
    }
    function Ui(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function hh(e) {
      Jn(zi, e), Jn(wl, e);
    }
    function Yy(e) {
      Jn(zi, e), Jn(wl, e);
    }
    function W0(e, t, a) {
      {
        if (wl.current !== la)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        er(wl, t, e), er(zi, a, e);
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Re(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
        return Me({}, a, f);
      }
    }
    function mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || la;
        return Py = wl.current, er(wl, a, e), er(zi, zi.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = X0(e, t, Py);
          i.__reactInternalMemoizedMergedChildContext = u, Jn(zi, e), Jn(wl, e), er(wl, u, e), er(zi, a, e);
        } else
          Jn(zi, e), er(zi, a, e);
      }
    }
    function sx(e) {
      {
        if (!Ff(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case le:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (Ui(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var wu = 0, yh = 1, Dl = null, Qy = !1, Iy = !1;
    function K0(e) {
      Dl === null ? Dl = [e] : Dl.push(e);
    }
    function cx(e) {
      Qy = !0, K0(e);
    }
    function Z0() {
      Qy && Du();
    }
    function Du() {
      if (!Iy && Dl !== null) {
        Iy = !0;
        var e = 0, t = Ur();
        try {
          var a = !0, i = Dl;
          for (Yt(Cn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Dl = null, Qy = !1;
        } catch (s) {
          throw Dl !== null && (Dl = Dl.slice(e + 1)), _s(ks, Du), s;
        } finally {
          Yt(t), Iy = !1;
        }
      }
      return null;
    }
    var _c = [], bc = 0, gh = null, Sh = 0, Ca = [], Ea = 0, Fo = null, _l = 1, bl = "";
    function fx(e) {
      return Vo(), (e.flags & Uf) !== se;
    }
    function dx(e) {
      return Vo(), Sh;
    }
    function px() {
      var e = bl, t = _l, a = t & ~vx(t);
      return a.toString(32) + e;
    }
    function jo(e, t) {
      Vo(), _c[bc++] = Sh, _c[bc++] = gh, gh = e, Sh = t;
    }
    function J0(e, t, a) {
      Vo(), Ca[Ea++] = _l, Ca[Ea++] = bl, Ca[Ea++] = Fo, Fo = e;
      var i = _l, u = bl, s = Ch(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ch(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, O = s - m, M = Ch(t) + O, N = p << O, q = N | E, ce = R + u;
        _l = 1 << M | q, bl = ce;
      } else {
        var ie = p << s, je = ie | f, Ne = u;
        _l = 1 << v | je, bl = Ne;
      }
    }
    function Gy(e) {
      Vo();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        jo(e, a), J0(e, a, i);
      }
    }
    function Ch(e) {
      return 32 - Us(e);
    }
    function vx(e) {
      return 1 << Ch(e) - 1;
    }
    function Wy(e) {
      for (; e === gh; )
        gh = _c[--bc], _c[bc] = null, Sh = _c[--bc], _c[bc] = null;
      for (; e === Fo; )
        Fo = Ca[--Ea], Ca[Ea] = null, bl = Ca[--Ea], Ca[Ea] = null, _l = Ca[--Ea], Ca[Ea] = null;
    }
    function hx() {
      return Vo(), Fo !== null ? {
        id: _l,
        overflow: bl
      } : null;
    }
    function mx(e, t) {
      Vo(), Ca[Ea++] = _l, Ca[Ea++] = bl, Ca[Ea++] = Fo, _l = t.id, bl = t.overflow, Fo = e;
    }
    function Vo() {
      Mn() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var On = null, Ta = null, Wa = !1, Bo = !1, _u = null;
    function yx() {
      Wa && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function e1() {
      Bo = !0;
    }
    function gx() {
      return Bo;
    }
    function Sx(e) {
      var t = e.stateNode.containerInfo;
      return Ta = HR(t), On = e, Wa = !0, _u = null, Bo = !1, !0;
    }
    function Cx(e, t, a) {
      return Ta = FR(t), On = e, Wa = !0, _u = null, Bo = !1, a !== null && mx(e, a), !0;
    }
    function t1(e, t) {
      switch (e.tag) {
        case le: {
          WR(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & _e) !== de;
          qR(
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
          i.dehydrated !== null && XR(i.dehydrated, t);
          break;
        }
      }
    }
    function n1(e, t) {
      t1(e, t);
      var a = R_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Qe) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Bo)
          return;
        switch (e.tag) {
          case le: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, KR(a, i);
                break;
              case ke:
                var u = t.pendingProps;
                ZR(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, m = t.pendingProps, y = (e.mode & _e) !== de;
                tx(
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
              case ke: {
                var R = t.pendingProps, E = (e.mode & _e) !== de;
                nx(
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
            var O = e.memoizedState, M = O.dehydrated;
            if (M !== null)
              switch (t.tag) {
                case ue:
                  var N = t.type;
                  t.pendingProps, JR(M, N);
                  break;
                case ke:
                  var q = t.pendingProps;
                  ex(M, q);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function r1(e, t) {
      t.flags = t.flags & ~Or | st, Xy(e, t);
    }
    function a1(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = MR(t, a);
          return i !== null ? (e.stateNode = i, On = e, Ta = AR(i), !0) : !1;
        }
        case ke: {
          var u = e.pendingProps, s = LR(t, u);
          return s !== null ? (e.stateNode = s, On = e, Ta = null, !0) : !1;
        }
        case Ue: {
          var f = NR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: hx(),
              retryLane: Kn
            };
            e.memoizedState = p;
            var v = x_(f);
            return v.return = e, e.child = v, On = e, Ta = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qy(e) {
      return (e.mode & _e) !== de && (e.flags & Se) === se;
    }
    function Ky(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (Wa) {
        var t = Ta;
        if (!t) {
          qy(e) && (Xy(On, e), Ky()), r1(On, e), Wa = !1, On = e;
          return;
        }
        var a = t;
        if (!a1(e, t)) {
          qy(e) && (Xy(On, e), Ky()), t = Ld(a);
          var i = On;
          if (!t || !a1(e, t)) {
            r1(On, e), Wa = !1, On = e;
            return;
          }
          n1(i, a);
        }
      }
    }
    function Ex(e, t, a) {
      var i = e.stateNode, u = !Bo, s = jR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Tx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = VR(t, a, e);
      if (i) {
        var u = On;
        if (u !== null)
          switch (u.tag) {
            case le: {
              var s = u.stateNode.containerInfo, f = (u.mode & _e) !== de;
              IR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & _e) !== de;
              GR(
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
    function Rx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      BR(a, e);
    }
    function xx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return $R(a);
    }
    function i1(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== le && t.tag !== Ue; )
        t = t.return;
      On = t;
    }
    function Eh(e) {
      if (e !== On)
        return !1;
      if (!Wa)
        return i1(e), Wa = !0, !1;
      if (e.tag !== le && (e.tag !== ue || QR(e.type) && !Ny(e.type, e.memoizedProps))) {
        var t = Ta;
        if (t)
          if (qy(e))
            l1(e), Ky();
          else
            for (; t; )
              n1(e, t), t = Ld(t);
      }
      return i1(e), e.tag === Ue ? Ta = xx(e) : Ta = On ? Ld(e.stateNode) : null, !0;
    }
    function wx() {
      return Wa && Ta !== null;
    }
    function l1(e) {
      for (var t = Ta; t; )
        t1(e, t), t = Ld(t);
    }
    function kc() {
      On = null, Ta = null, Wa = !1, Bo = !1;
    }
    function u1() {
      _u !== null && (tE(_u), _u = null);
    }
    function Mn() {
      return Wa;
    }
    function Jy(e) {
      _u === null ? _u = [e] : _u.push(e);
    }
    var Dx = x.ReactCurrentBatchConfig, _x = null;
    function bx() {
      return Dx.transition;
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
      var kx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & gt && (t = a), a = a.return;
        return t;
      }, $o = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ad = [], Hd = [], Fd = [], jd = [], Vd = [], Bd = [], Po = /* @__PURE__ */ new Set();
      Xa.recordUnsafeLifecycleWarnings = function(e, t) {
        Po.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ad.push(e), e.mode & gt && typeof t.UNSAFE_componentWillMount == "function" && Hd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Fd.push(e), e.mode & gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && jd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vd.push(e), e.mode & gt && typeof t.UNSAFE_componentWillUpdate == "function" && Bd.push(e));
      }, Xa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ad.length > 0 && (Ad.forEach(function(E) {
          e.add(Re(E) || "Component"), Po.add(E.type);
        }), Ad = []);
        var t = /* @__PURE__ */ new Set();
        Hd.length > 0 && (Hd.forEach(function(E) {
          t.add(Re(E) || "Component"), Po.add(E.type);
        }), Hd = []);
        var a = /* @__PURE__ */ new Set();
        Fd.length > 0 && (Fd.forEach(function(E) {
          a.add(Re(E) || "Component"), Po.add(E.type);
        }), Fd = []);
        var i = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(E) {
          i.add(Re(E) || "Component"), Po.add(E.type);
        }), jd = []);
        var u = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(E) {
          u.add(Re(E) || "Component"), Po.add(E.type);
        }), Vd = []);
        var s = /* @__PURE__ */ new Set();
        if (Bd.length > 0 && (Bd.forEach(function(E) {
          s.add(Re(E) || "Component"), Po.add(E.type);
        }), Bd = []), t.size > 0) {
          var f = $o(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = $o(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = $o(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = $o(e);
          Be(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = $o(a);
          Be(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = $o(u);
          Be(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Th = /* @__PURE__ */ new Map(), o1 = /* @__PURE__ */ new Set();
      Xa.recordLegacyContextWarning = function(e, t) {
        var a = kx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!o1.has(e.type)) {
          var i = Th.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Th.set(a, i)), i.push(e));
        }
      }, Xa.flushLegacyContextWarning = function() {
        Th.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Re(s) || "Component"), o1.add(s.type);
            });
            var u = $o(i);
            try {
              Ze(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Bt();
            }
          }
        });
      }, Xa.discardPendingWarnings = function() {
        Ad = [], Hd = [], Fd = [], jd = [], Vd = [], Bd = [], Th = /* @__PURE__ */ new Map();
      };
    }
    function qa(e, t) {
      if (e && e.defaultProps) {
        var a = Me({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var eg = xu(null), tg;
    tg = {};
    var Rh = null, Oc = null, ng = null, xh = !1;
    function wh() {
      Rh = null, Oc = null, ng = null, xh = !1;
    }
    function s1() {
      xh = !0;
    }
    function c1() {
      xh = !1;
    }
    function f1(e, t, a) {
      er(eg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== tg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = tg;
    }
    function rg(e, t) {
      var a = eg.current;
      Jn(eg, t), e._currentValue = a;
    }
    function ag(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (pl(i.childLanes, t) ? u !== null && !pl(u.childLanes, t) && (u.childLanes = De(u.childLanes, t)) : (i.childLanes = De(i.childLanes, t), u !== null && (u.childLanes = De(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ox(e, t, a) {
      Mx(e, t, a);
    }
    function Mx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = Pt(a), v = kl(it, p);
                v.tag = _h;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = De(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = De(E.lanes, a)), ag(i.return, a, e), s.lanes = De(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === hn)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Nt) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = De(O.lanes, a);
          var M = O.alternate;
          M !== null && (M.lanes = De(M.lanes, a)), ag(O, a, e), u = i.sibling;
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
            var N = u.sibling;
            if (N !== null) {
              N.return = u.return, u = N;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Mc(e, t) {
      Rh = e, Oc = null, ng = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zn(a.lanes, t) && tp(), a.firstContext = null);
      }
    }
    function tn(e) {
      xh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ng !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Oc === null) {
          if (Rh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Oc = a, Rh.dependencies = {
            lanes: U,
            firstContext: a
          };
        } else
          Oc = Oc.next = a;
      }
      return t;
    }
    var Yo = null;
    function ig(e) {
      Yo === null ? Yo = [e] : Yo.push(e);
    }
    function Lx() {
      if (Yo !== null) {
        for (var e = 0; e < Yo.length; e++) {
          var t = Yo[e], a = t.interleaved;
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
        Yo = null;
      }
    }
    function d1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Dh(e, i);
    }
    function Nx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function zx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Dh(e, i);
    }
    function Vr(e, t) {
      return Dh(e, t);
    }
    var Ux = Dh;
    function Dh(e, t) {
      e.lanes = De(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = De(a.lanes, t)), a === null && (e.flags & (st | Or)) !== se && pE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = De(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = De(a.childLanes, t) : (u.flags & (st | Or)) !== se && pE(e), i = u, u = u.return;
      if (i.tag === le) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var p1 = 0, v1 = 1, _h = 2, lg = 3, bh = !1, ug, kh;
    ug = !1, kh = null;
    function og(e) {
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
    function h1(e, t) {
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
    function kl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: p1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function bu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (kh === u && !ug && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ug = !0), UD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Ux(e, a);
      } else
        return zx(e, u, t, a);
    }
    function Oh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Kf(a)) {
          var s = u.lanes;
          s = Jf(s, e.pendingLanes);
          var f = De(s, a);
          u.lanes = f, ou(e, f);
        }
      }
    }
    function sg(e, t) {
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
    function Ax(e, t, a, i, u, s) {
      switch (a.tag) {
        case v1: {
          var f = a.payload;
          if (typeof f == "function") {
            s1();
            var p = f.call(s, i, u);
            {
              if (e.mode & gt) {
                $t(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  $t(!1);
                }
              }
              c1();
            }
            return p;
          }
          return f;
        }
        case lg:
          e.flags = e.flags & ~qt | Se;
        case p1: {
          var v = a.payload, m;
          if (typeof v == "function") {
            s1(), m = v.call(s, i, u);
            {
              if (e.mode & gt) {
                $t(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  $t(!1);
                }
              }
              c1();
            }
          } else
            m = v;
          return m == null ? i : Me({}, i, m);
        }
        case _h:
          return bh = !0, i;
      }
      return i;
    }
    function Mh(e, t, a, i) {
      var u = e.updateQueue;
      bh = !1, kh = u.shared;
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
        var O = u.baseState, M = U, N = null, q = null, ce = null, ie = s;
        do {
          var je = ie.lane, Ne = ie.eventTime;
          if (pl(i, je)) {
            if (ce !== null) {
              var z = {
                eventTime: Ne,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: He,
                tag: ie.tag,
                payload: ie.payload,
                callback: ie.callback,
                next: null
              };
              ce = ce.next = z;
            }
            O = Ax(e, u, ie, O, t, a);
            var _ = ie.callback;
            if (_ !== null && // If the update was already committed, we should not queue its
            // callback again.
            ie.lane !== He) {
              e.flags |= va;
              var B = u.effects;
              B === null ? u.effects = [ie] : B.push(ie);
            }
          } else {
            var D = {
              eventTime: Ne,
              lane: je,
              tag: ie.tag,
              payload: ie.payload,
              callback: ie.callback,
              next: null
            };
            ce === null ? (q = ce = D, N = O) : ce = ce.next = D, M = De(M, je);
          }
          if (ie = ie.next, ie === null) {
            if (p = u.shared.pending, p === null)
              break;
            var K = p, G = K.next;
            K.next = null, ie = G, u.lastBaseUpdate = K, u.shared.pending = null;
          }
        } while (!0);
        ce === null && (N = O), u.baseState = N, u.firstBaseUpdate = q, u.lastBaseUpdate = ce;
        var ge = u.shared.interleaved;
        if (ge !== null) {
          var Te = ge;
          do
            M = De(M, Te.lane), Te = Te.next;
          while (Te !== ge);
        } else
          s === null && (u.shared.lanes = U);
        pp(M), e.lanes = M, e.memoizedState = O;
      }
      kh = null;
    }
    function Hx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function m1() {
      bh = !1;
    }
    function Lh() {
      return bh;
    }
    function y1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Hx(f, a));
        }
    }
    var cg = {}, g1 = new b.Component().refs, fg, dg, pg, vg, hg, S1, Nh, mg, yg, gg;
    {
      fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set();
      var C1 = /* @__PURE__ */ new Set();
      Nh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          C1.has(a) || (C1.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, S1 = function(e, t) {
        if (t === void 0) {
          var a = rt(e) || "Component";
          hg.has(a) || (hg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(cg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(cg);
    }
    function Sg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & gt) {
          $t(!0);
          try {
            s = a(i, u);
          } finally {
            $t(!1);
          }
        }
        S1(t, s);
      }
      var f = s == null ? u : Me({}, u, s);
      if (e.memoizedState = f, e.lanes === U) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Cg = {
      isMounted: cr,
      enqueueSetState: function(e, t, a) {
        var i = br(e), u = mr(), s = Au(i), f = kl(u, s);
        f.payload = t, a != null && (Nh(a, "setState"), f.callback = a);
        var p = bu(i, f, s);
        p !== null && (vn(p, i, s, u), Oh(p, i, s)), wi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = br(e), u = mr(), s = Au(i), f = kl(u, s);
        f.tag = v1, f.payload = t, a != null && (Nh(a, "replaceState"), f.callback = a);
        var p = bu(i, f, s);
        p !== null && (vn(p, i, s, u), Oh(p, i, s)), wi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = br(e), i = mr(), u = Au(a), s = kl(i, u);
        s.tag = _h, t != null && (Nh(t, "forceUpdate"), s.callback = t);
        var f = bu(a, s, u);
        f !== null && (vn(f, a, u, i), Oh(f, a, u)), Gf(a, u);
      }
    };
    function E1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & gt) {
            $t(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              $t(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", rt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !oe(a, i) || !oe(u, s) : !0;
    }
    function Fx(e, t, a) {
      var i = e.stateNode;
      {
        var u = rt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !yg.has(t) && (yg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", rt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !pg.has(t) && (pg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", rt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Wt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function T1(e, t) {
      t.updater = Cg, e.stateNode = t, Zl(t, e), t._reactInternalInstance = cg;
    }
    function R1(e, t, a) {
      var i = !1, u = la, s = la, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ef && f._context === void 0
        );
        if (!p && !gg.has(t)) {
          gg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Jc ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", rt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tn(f);
      else {
        u = wc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Dc(e, u) : la;
      }
      var y = new t(a, s);
      if (e.mode & gt) {
        $t(!0);
        try {
          y = new t(a, s);
        } finally {
          $t(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      T1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = rt(t) || "Component";
          dg.has(E) || (dg.add(E), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, M = null, N = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? N = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (N = "UNSAFE_componentWillUpdate"), O !== null || M !== null || N !== null) {
            var q = rt(t) || "Component", ce = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            vg.has(q) || (vg.add(q), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, q, ce, O !== null ? `
  ` + O : "", M !== null ? `
  ` + M : "", N !== null ? `
  ` + N : ""));
          }
        }
      }
      return i && G0(e, u, s), y;
    }
    function jx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Re(e) || "Component"), Cg.enqueueReplaceState(t, t.state, null));
    }
    function x1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Re(e) || "Component";
          fg.has(s) || (fg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Cg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Eg(e, t, a, i) {
      Fx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = g1, og(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tn(s);
      else {
        var f = wc(e, t, !0);
        u.context = Dc(e, f);
      }
      {
        if (u.state === a) {
          var p = rt(t) || "Component";
          mg.has(p) || (mg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & gt && Xa.recordLegacyContextWarning(e, u), Xa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Sg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (jx(e, u), Mh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = we;
        m |= In, (e.mode & Nr) !== de && (m |= Gn), e.flags |= m;
      }
    }
    function Vx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = la;
      if (typeof p == "object" && p !== null)
        v = tn(p);
      else {
        var m = wc(e, t, !0);
        v = Dc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && x1(e, u, a, v), m1();
      var E = e.memoizedState, O = u.state = E;
      if (Mh(e, a, u, i), O = e.memoizedState, s === a && E === O && !vh() && !Lh()) {
        if (typeof u.componentDidMount == "function") {
          var M = we;
          M |= In, (e.mode & Nr) !== de && (M |= Gn), e.flags |= M;
        }
        return !1;
      }
      typeof y == "function" && (Sg(e, t, y, a), O = e.memoizedState);
      var N = Lh() || E1(e, t, s, a, E, O, v);
      if (N) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var q = we;
          q |= In, (e.mode & Nr) !== de && (q |= Gn), e.flags |= q;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ce = we;
          ce |= In, (e.mode & Nr) !== de && (ce |= Gn), e.flags |= ce;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, N;
    }
    function Bx(e, t, a, i, u) {
      var s = t.stateNode;
      h1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : qa(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = la;
      if (typeof y == "object" && y !== null)
        R = tn(y);
      else {
        var E = wc(t, a, !0);
        R = Dc(t, E);
      }
      var O = a.getDerivedStateFromProps, M = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && x1(t, s, i, R), m1();
      var N = t.memoizedState, q = s.state = N;
      if (Mh(t, i, s, u), q = t.memoizedState, f === v && N === q && !vh() && !Lh() && !ye)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= kr), !1;
      typeof O == "function" && (Sg(t, a, O, i), q = t.memoizedState);
      var ce = Lh() || E1(t, a, p, i, N, q, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ye;
      return ce ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, q, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, q, R)), typeof s.componentDidUpdate == "function" && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= kr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= kr), t.memoizedProps = i, t.memoizedState = q), s.props = i, s.state = q, s.context = R, ce;
    }
    var Tg, Rg, xg, wg, Dg, w1 = function(e, t) {
    };
    Tg = !1, Rg = !1, xg = {}, wg = {}, Dg = {}, w1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Re(t) || "Component";
        wg[a] || (wg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function $d(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & gt || ir) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Re(e) || "Component";
          xg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Yi(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            E === g1 && (E = v.refs = {}), R === null ? delete E[m] : E[m] = R;
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
    function zh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Uh(e) {
      {
        var t = Re(e) || "Component";
        if (Dg[t])
          return;
        Dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function D1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function _1(e) {
      function t(D, z) {
        if (e) {
          var _ = D.deletions;
          _ === null ? (D.deletions = [z], D.flags |= Qe) : _.push(z);
        }
      }
      function a(D, z) {
        if (!e)
          return null;
        for (var _ = z; _ !== null; )
          t(D, _), _ = _.sibling;
        return null;
      }
      function i(D, z) {
        for (var _ = /* @__PURE__ */ new Map(), B = z; B !== null; )
          B.key !== null ? _.set(B.key, B) : _.set(B.index, B), B = B.sibling;
        return _;
      }
      function u(D, z) {
        var _ = Zo(D, z);
        return _.index = 0, _.sibling = null, _;
      }
      function s(D, z, _) {
        if (D.index = _, !e)
          return D.flags |= Uf, z;
        var B = D.alternate;
        if (B !== null) {
          var K = B.index;
          return K < z ? (D.flags |= st, z) : K;
        } else
          return D.flags |= st, z;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= st), D;
      }
      function p(D, z, _, B) {
        if (z === null || z.tag !== ke) {
          var K = JS(_, D.mode, B);
          return K.return = D, K;
        } else {
          var G = u(z, _);
          return G.return = D, G;
        }
      }
      function v(D, z, _, B) {
        var K = _.type;
        if (K === ka)
          return y(D, z, _.props.children, B, _.key);
        if (z !== null && (z.elementType === K || // Keep this check inline so it only runs on the false path:
        yE(z, _) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof K == "object" && K !== null && K.$$typeof === bn && D1(K) === z.type)) {
          var G = u(z, _.props);
          return G.ref = $d(D, z, _), G.return = D, G._debugSource = _._source, G._debugOwner = _._owner, G;
        }
        var ge = ZS(_, D.mode, B);
        return ge.ref = $d(D, z, _), ge.return = D, ge;
      }
      function m(D, z, _, B) {
        if (z === null || z.tag !== me || z.stateNode.containerInfo !== _.containerInfo || z.stateNode.implementation !== _.implementation) {
          var K = e0(_, D.mode, B);
          return K.return = D, K;
        } else {
          var G = u(z, _.children || []);
          return G.return = D, G;
        }
      }
      function y(D, z, _, B, K) {
        if (z === null || z.tag !== tt) {
          var G = Fu(_, D.mode, B, K);
          return G.return = D, G;
        } else {
          var ge = u(z, _);
          return ge.return = D, ge;
        }
      }
      function R(D, z, _) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var B = JS("" + z, D.mode, _);
          return B.return = D, B;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Hl: {
              var K = ZS(z, D.mode, _);
              return K.ref = $d(D, null, z), K.return = D, K;
            }
            case Kr: {
              var G = e0(z, D.mode, _);
              return G.return = D, G;
            }
            case bn: {
              var ge = z._payload, Te = z._init;
              return R(D, Te(ge), _);
            }
          }
          if (Wt(z) || Oa(z)) {
            var et = Fu(z, D.mode, _, null);
            return et.return = D, et;
          }
          zh(D, z);
        }
        return typeof z == "function" && Uh(D), null;
      }
      function E(D, z, _, B) {
        var K = z !== null ? z.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
          return K !== null ? null : p(D, z, "" + _, B);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Hl:
              return _.key === K ? v(D, z, _, B) : null;
            case Kr:
              return _.key === K ? m(D, z, _, B) : null;
            case bn: {
              var G = _._payload, ge = _._init;
              return E(D, z, ge(G), B);
            }
          }
          if (Wt(_) || Oa(_))
            return K !== null ? null : y(D, z, _, B, null);
          zh(D, _);
        }
        return typeof _ == "function" && Uh(D), null;
      }
      function O(D, z, _, B, K) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var G = D.get(_) || null;
          return p(z, G, "" + B, K);
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Hl: {
              var ge = D.get(B.key === null ? _ : B.key) || null;
              return v(z, ge, B, K);
            }
            case Kr: {
              var Te = D.get(B.key === null ? _ : B.key) || null;
              return m(z, Te, B, K);
            }
            case bn:
              var et = B._payload, Pe = B._init;
              return O(D, z, _, Pe(et), K);
          }
          if (Wt(B) || Oa(B)) {
            var Gt = D.get(_) || null;
            return y(z, Gt, B, K, null);
          }
          zh(z, B);
        }
        return typeof B == "function" && Uh(z), null;
      }
      function M(D, z, _) {
        {
          if (typeof D != "object" || D === null)
            return z;
          switch (D.$$typeof) {
            case Hl:
            case Kr:
              w1(D, _);
              var B = D.key;
              if (typeof B != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add(B);
                break;
              }
              if (!z.has(B)) {
                z.add(B);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", B);
              break;
            case bn:
              var K = D._payload, G = D._init;
              M(G(K), z, _);
              break;
          }
        }
        return z;
      }
      function N(D, z, _, B) {
        for (var K = null, G = 0; G < _.length; G++) {
          var ge = _[G];
          K = M(ge, K, D);
        }
        for (var Te = null, et = null, Pe = z, Gt = 0, Ye = 0, jt = null; Pe !== null && Ye < _.length; Ye++) {
          Pe.index > Ye ? (jt = Pe, Pe = null) : jt = Pe.sibling;
          var nr = E(D, Pe, _[Ye], B);
          if (nr === null) {
            Pe === null && (Pe = jt);
            break;
          }
          e && Pe && nr.alternate === null && t(D, Pe), Gt = s(nr, Gt, Ye), et === null ? Te = nr : et.sibling = nr, et = nr, Pe = jt;
        }
        if (Ye === _.length) {
          if (a(D, Pe), Mn()) {
            var Fn = Ye;
            jo(D, Fn);
          }
          return Te;
        }
        if (Pe === null) {
          for (; Ye < _.length; Ye++) {
            var oa = R(D, _[Ye], B);
            oa !== null && (Gt = s(oa, Gt, Ye), et === null ? Te = oa : et.sibling = oa, et = oa);
          }
          if (Mn()) {
            var yr = Ye;
            jo(D, yr);
          }
          return Te;
        }
        for (var gr = i(D, Pe); Ye < _.length; Ye++) {
          var rr = O(gr, D, Ye, _[Ye], B);
          rr !== null && (e && rr.alternate !== null && gr.delete(rr.key === null ? Ye : rr.key), Gt = s(rr, Gt, Ye), et === null ? Te = rr : et.sibling = rr, et = rr);
        }
        if (e && gr.forEach(function(Wc) {
          return t(D, Wc);
        }), Mn()) {
          var Ul = Ye;
          jo(D, Ul);
        }
        return Te;
      }
      function q(D, z, _, B) {
        var K = Oa(_);
        if (typeof K != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          _[Symbol.toStringTag] === "Generator" && (Rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Rg = !0), _.entries === K && (Tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tg = !0);
          var G = K.call(_);
          if (G)
            for (var ge = null, Te = G.next(); !Te.done; Te = G.next()) {
              var et = Te.value;
              ge = M(et, ge, D);
            }
        }
        var Pe = K.call(_);
        if (Pe == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gt = null, Ye = null, jt = z, nr = 0, Fn = 0, oa = null, yr = Pe.next(); jt !== null && !yr.done; Fn++, yr = Pe.next()) {
          jt.index > Fn ? (oa = jt, jt = null) : oa = jt.sibling;
          var gr = E(D, jt, yr.value, B);
          if (gr === null) {
            jt === null && (jt = oa);
            break;
          }
          e && jt && gr.alternate === null && t(D, jt), nr = s(gr, nr, Fn), Ye === null ? Gt = gr : Ye.sibling = gr, Ye = gr, jt = oa;
        }
        if (yr.done) {
          if (a(D, jt), Mn()) {
            var rr = Fn;
            jo(D, rr);
          }
          return Gt;
        }
        if (jt === null) {
          for (; !yr.done; Fn++, yr = Pe.next()) {
            var Ul = R(D, yr.value, B);
            Ul !== null && (nr = s(Ul, nr, Fn), Ye === null ? Gt = Ul : Ye.sibling = Ul, Ye = Ul);
          }
          if (Mn()) {
            var Wc = Fn;
            jo(D, Wc);
          }
          return Gt;
        }
        for (var gp = i(D, jt); !yr.done; Fn++, yr = Pe.next()) {
          var Pi = O(gp, D, Fn, yr.value, B);
          Pi !== null && (e && Pi.alternate !== null && gp.delete(Pi.key === null ? Fn : Pi.key), nr = s(Pi, nr, Fn), Ye === null ? Gt = Pi : Ye.sibling = Pi, Ye = Pi);
        }
        if (e && gp.forEach(function(tb) {
          return t(D, tb);
        }), Mn()) {
          var eb = Fn;
          jo(D, eb);
        }
        return Gt;
      }
      function ce(D, z, _, B) {
        if (z !== null && z.tag === ke) {
          a(D, z.sibling);
          var K = u(z, _);
          return K.return = D, K;
        }
        a(D, z);
        var G = JS(_, D.mode, B);
        return G.return = D, G;
      }
      function ie(D, z, _, B) {
        for (var K = _.key, G = z; G !== null; ) {
          if (G.key === K) {
            var ge = _.type;
            if (ge === ka) {
              if (G.tag === tt) {
                a(D, G.sibling);
                var Te = u(G, _.props.children);
                return Te.return = D, Te._debugSource = _._source, Te._debugOwner = _._owner, Te;
              }
            } else if (G.elementType === ge || // Keep this check inline so it only runs on the false path:
            yE(G, _) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ge == "object" && ge !== null && ge.$$typeof === bn && D1(ge) === G.type) {
              a(D, G.sibling);
              var et = u(G, _.props);
              return et.ref = $d(D, G, _), et.return = D, et._debugSource = _._source, et._debugOwner = _._owner, et;
            }
            a(D, G);
            break;
          } else
            t(D, G);
          G = G.sibling;
        }
        if (_.type === ka) {
          var Pe = Fu(_.props.children, D.mode, B, _.key);
          return Pe.return = D, Pe;
        } else {
          var Gt = ZS(_, D.mode, B);
          return Gt.ref = $d(D, z, _), Gt.return = D, Gt;
        }
      }
      function je(D, z, _, B) {
        for (var K = _.key, G = z; G !== null; ) {
          if (G.key === K)
            if (G.tag === me && G.stateNode.containerInfo === _.containerInfo && G.stateNode.implementation === _.implementation) {
              a(D, G.sibling);
              var ge = u(G, _.children || []);
              return ge.return = D, ge;
            } else {
              a(D, G);
              break;
            }
          else
            t(D, G);
          G = G.sibling;
        }
        var Te = e0(_, D.mode, B);
        return Te.return = D, Te;
      }
      function Ne(D, z, _, B) {
        var K = typeof _ == "object" && _ !== null && _.type === ka && _.key === null;
        if (K && (_ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Hl:
              return f(ie(D, z, _, B));
            case Kr:
              return f(je(D, z, _, B));
            case bn:
              var G = _._payload, ge = _._init;
              return Ne(D, z, ge(G), B);
          }
          if (Wt(_))
            return N(D, z, _, B);
          if (Oa(_))
            return q(D, z, _, B);
          zh(D, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" ? f(ce(D, z, "" + _, B)) : (typeof _ == "function" && Uh(D), a(D, z));
      }
      return Ne;
    }
    var Lc = _1(!0), b1 = _1(!1);
    function $x(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Zo(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Zo(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Px(e, t) {
      for (var a = e.child; a !== null; )
        g_(a, t), a = a.sibling;
    }
    var Pd = {}, ku = xu(Pd), Yd = xu(Pd), Ah = xu(Pd);
    function Hh(e) {
      if (e === Pd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function k1() {
      var e = Hh(Ah.current);
      return e;
    }
    function _g(e, t) {
      er(Ah, t, e), er(Yd, e, e), er(ku, Pd, e);
      var a = rR(t);
      Jn(ku, e), er(ku, a, e);
    }
    function Nc(e) {
      Jn(ku, e), Jn(Yd, e), Jn(Ah, e);
    }
    function bg() {
      var e = Hh(ku.current);
      return e;
    }
    function O1(e) {
      Hh(Ah.current);
      var t = Hh(ku.current), a = aR(t, e.type);
      t !== a && (er(Yd, e, e), er(ku, a, e));
    }
    function kg(e) {
      Yd.current === e && (Jn(ku, e), Jn(Yd, e));
    }
    var Yx = 0, M1 = 1, L1 = 1, Qd = 2, Ka = xu(Yx);
    function Og(e, t) {
      return (e & t) !== 0;
    }
    function zc(e) {
      return e & M1;
    }
    function Mg(e, t) {
      return e & M1 | t;
    }
    function Qx(e, t) {
      return e | t;
    }
    function Ou(e, t) {
      er(Ka, t, e);
    }
    function Uc(e) {
      Jn(Ka, e);
    }
    function Ix(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Fh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ue) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === lt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Se) !== se;
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
    var Br = (
      /*   */
      0
    ), un = (
      /* */
      1
    ), Ai = (
      /*  */
      2
    ), on = (
      /*    */
      4
    ), Ln = (
      /*   */
      8
    ), Lg = [];
    function Ng() {
      for (var e = 0; e < Lg.length; e++) {
        var t = Lg[e];
        t._workInProgressVersionPrimary = null;
      }
      Lg.length = 0;
    }
    function Gx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var X = x.ReactCurrentDispatcher, Id = x.ReactCurrentBatchConfig, zg, Ac;
    zg = /* @__PURE__ */ new Set();
    var Qo = U, Je = null, sn = null, cn = null, jh = !1, Gd = !1, Wd = 0, Wx = 0, Xx = 25, A = null, Ra = null, Mu = -1, Ug = !1;
    function Ge() {
      {
        var e = A;
        Ra === null ? Ra = [e] : Ra.push(e);
      }
    }
    function Y() {
      {
        var e = A;
        Ra !== null && (Mu++, Ra[Mu] !== e && qx(e));
      }
    }
    function Hc(e) {
      e != null && !Wt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", A, typeof e);
    }
    function qx(e) {
      {
        var t = Re(Je);
        if (!zg.has(t) && (zg.add(t), Ra !== null)) {
          for (var a = "", i = 30, u = 0; u <= Mu; u++) {
            for (var s = Ra[u], f = u === Mu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function tr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ag(e, t) {
      if (Ug)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", A), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, A, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!te(e[a], t[a]))
          return !1;
      return !0;
    }
    function Fc(e, t, a, i, u, s) {
      Qo = s, Je = t, Ra = e !== null ? e._debugHookTypes : null, Mu = -1, Ug = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = U, e !== null && e.memoizedState !== null ? X.current = eC : Ra !== null ? X.current = J1 : X.current = Z1;
      var f = a(i, u);
      if (Gd) {
        var p = 0;
        do {
          if (Gd = !1, Wd = 0, p >= Xx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ug = !1, sn = null, cn = null, t.updateQueue = null, Mu = -1, X.current = tC, f = a(i, u);
        } while (Gd);
      }
      X.current = Zh, t._debugHookTypes = Ra;
      var v = sn !== null && sn.next !== null;
      if (Qo = U, Je = null, sn = null, cn = null, A = null, Ra = null, Mu = -1, e !== null && (e.flags & rn) !== (t.flags & rn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & _e) !== de && S("Internal React error: Expected static flag was missing. Please notify the React team."), jh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jc() {
      var e = Wd !== 0;
      return Wd = 0, e;
    }
    function N1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nr) !== de ? t.flags &= ~(rl | Gn | vt | we) : t.flags &= ~(vt | we), e.lanes = uu(e.lanes, a);
    }
    function z1() {
      if (X.current = Zh, jh) {
        for (var e = Je.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        jh = !1;
      }
      Qo = U, Je = null, sn = null, cn = null, Ra = null, Mu = -1, A = null, G1 = !1, Gd = !1, Wd = 0;
    }
    function Hi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return cn === null ? Je.memoizedState = cn = e : cn = cn.next = e, cn;
    }
    function xa() {
      var e;
      if (sn === null) {
        var t = Je.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = sn.next;
      var a;
      if (cn === null ? a = Je.memoizedState : a = cn.next, a !== null)
        cn = a, a = cn.next, sn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        sn = e;
        var i = {
          memoizedState: sn.memoizedState,
          baseState: sn.baseState,
          baseQueue: sn.baseQueue,
          queue: sn.queue,
          next: null
        };
        cn === null ? Je.memoizedState = cn = i : cn = cn.next = i;
      }
      return cn;
    }
    function U1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Fg(e, t, a) {
      var i = Hi(), u;
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
      var f = s.dispatch = ew.bind(null, Je, s);
      return [i.memoizedState, f];
    }
    function jg(e, t, a) {
      var i = xa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = sn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, R = s.baseState, E = null, O = null, M = null, N = y;
        do {
          var q = N.lane;
          if (pl(Qo, q)) {
            if (M !== null) {
              var ie = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: He,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              };
              M = M.next = ie;
            }
            if (N.hasEagerState)
              R = N.eagerState;
            else {
              var je = N.action;
              R = e(R, je);
            }
          } else {
            var ce = {
              lane: q,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
            M === null ? (O = M = ce, E = R) : M = M.next = ce, Je.lanes = De(Je.lanes, q), pp(q);
          }
          N = N.next;
        } while (N !== null && N !== y);
        M === null ? E = R : M.next = O, te(R, i.memoizedState) || tp(), i.memoizedState = R, i.baseState = E, i.baseQueue = M, u.lastRenderedState = R;
      }
      var Ne = u.interleaved;
      if (Ne !== null) {
        var D = Ne;
        do {
          var z = D.lane;
          Je.lanes = De(Je.lanes, z), pp(z), D = D.next;
        } while (D !== Ne);
      } else
        f === null && (u.lanes = U);
      var _ = u.dispatch;
      return [i.memoizedState, _];
    }
    function Vg(e, t, a) {
      var i = xa(), u = i.queue;
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
        te(p, i.memoizedState) || tp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function BO(e, t, a) {
    }
    function $O(e, t, a) {
    }
    function Bg(e, t, a) {
      var i = Je, u = Hi(), s, f = Mn();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ac || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ac = !0);
      } else {
        if (s = t(), !Ac) {
          var p = t();
          te(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ac = !0);
        }
        var v = mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        To(v, Qo) || A1(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Yh(F1.bind(null, i, m, e), [e]), i.flags |= vt, Xd(un | Ln, H1.bind(null, i, m, s, t), void 0, null), s;
    }
    function Vh(e, t, a) {
      var i = Je, u = xa(), s = t();
      if (!Ac) {
        var f = t();
        te(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ac = !0);
      }
      var p = u.memoizedState, v = !te(p, s);
      v && (u.memoizedState = s, tp());
      var m = u.queue;
      if (Kd(F1.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      cn !== null && cn.memoizedState.tag & un) {
        i.flags |= vt, Xd(un | Ln, H1.bind(null, i, m, s, t), void 0, null);
        var y = mm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        To(y, Qo) || A1(i, t, s);
      }
      return s;
    }
    function A1(e, t, a) {
      e.flags |= po;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Je.updateQueue;
      if (u === null)
        u = U1(), Je.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function H1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, j1(t) && V1(e);
    }
    function F1(e, t, a) {
      var i = function() {
        j1(t) && V1(e);
      };
      return a(i);
    }
    function j1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !te(a, i);
      } catch {
        return !0;
      }
    }
    function V1(e) {
      var t = Vr(e, he);
      t !== null && vn(t, e, he, it);
    }
    function Bh(e) {
      var t = Hi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = tw.bind(null, Je, a);
      return [t.memoizedState, i];
    }
    function $g(e) {
      return jg(Hg);
    }
    function Pg(e) {
      return Vg(Hg);
    }
    function Xd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Je.updateQueue;
      if (s === null)
        s = U1(), Je.updateQueue = s, s.lastEffect = u.next = u;
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
    function Yg(e) {
      var t = Hi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function $h(e) {
      var t = xa();
      return t.memoizedState;
    }
    function qd(e, t, a, i) {
      var u = Hi(), s = i === void 0 ? null : i;
      Je.flags |= e, u.memoizedState = Xd(un | t, a, void 0, s);
    }
    function Ph(e, t, a, i) {
      var u = xa(), s = i === void 0 ? null : i, f = void 0;
      if (sn !== null) {
        var p = sn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ag(s, v)) {
            u.memoizedState = Xd(t, a, f, s);
            return;
          }
        }
      }
      Je.flags |= e, u.memoizedState = Xd(un | t, a, f, s);
    }
    function Yh(e, t) {
      return (Je.mode & Nr) !== de ? qd(rl | vt | Si, Ln, e, t) : qd(vt | Si, Ln, e, t);
    }
    function Kd(e, t) {
      return Ph(vt, Ln, e, t);
    }
    function Qg(e, t) {
      return qd(we, Ai, e, t);
    }
    function Qh(e, t) {
      return Ph(we, Ai, e, t);
    }
    function Ig(e, t) {
      var a = we;
      return a |= In, (Je.mode & Nr) !== de && (a |= Gn), qd(a, on, e, t);
    }
    function Ih(e, t) {
      return Ph(we, on, e, t);
    }
    function B1(e, t) {
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
    function Gg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = we;
      return u |= In, (Je.mode & Nr) !== de && (u |= Gn), qd(u, on, B1.bind(null, t, e), i);
    }
    function Gh(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Ph(we, on, B1.bind(null, t, e), i);
    }
    function Kx(e, t) {
    }
    var Wh = Kx;
    function Wg(e, t) {
      var a = Hi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Xh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ag(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Xg(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function qh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ag(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function qg(e) {
      var t = Hi();
      return t.memoizedState = e, e;
    }
    function $1(e) {
      var t = xa(), a = sn, i = a.memoizedState;
      return Y1(t, i, e);
    }
    function P1(e) {
      var t = xa();
      if (sn === null)
        return t.memoizedState = e, e;
      var a = sn.memoizedState;
      return Y1(t, a, e);
    }
    function Y1(e, t, a) {
      var i = !ny(Qo);
      if (i) {
        if (!te(a, t)) {
          var u = Zf();
          Je.lanes = De(Je.lanes, u), pp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tp()), e.memoizedState = a, a;
    }
    function Zx(e, t, a) {
      var i = Ur();
      Yt(En(i, ln)), e(!0);
      var u = Id.transition;
      Id.transition = {};
      var s = Id.transition;
      Id.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yt(i), Id.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Be("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Kg() {
      var e = Bh(!1), t = e[0], a = e[1], i = Zx.bind(null, a), u = Hi();
      return u.memoizedState = i, [t, i];
    }
    function Q1() {
      var e = $g(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    function I1() {
      var e = Pg(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    var G1 = !1;
    function Jx() {
      return G1;
    }
    function Zg() {
      var e = Hi(), t = mm(), a = t.identifierPrefix, i;
      if (Mn()) {
        var u = px();
        i = ":" + a + "R" + u;
        var s = Wd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Wx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Kh() {
      var e = xa(), t = e.memoizedState;
      return t;
    }
    function ew(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Au(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (W1(e))
        X1(t, u);
      else {
        var s = d1(e, t, u, i);
        if (s !== null) {
          var f = mr();
          vn(s, e, i, f), q1(s, t, i);
        }
      }
      K1(e, i);
    }
    function tw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Au(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (W1(e))
        X1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === U && (s === null || s.lanes === U)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = X.current, X.current = Za;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, te(m, v)) {
                Nx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              X.current = p;
            }
          }
        }
        var y = d1(e, t, u, i);
        if (y !== null) {
          var R = mr();
          vn(y, e, i, R), q1(y, t, i);
        }
      }
      K1(e, i);
    }
    function W1(e) {
      var t = e.alternate;
      return e === Je || t !== null && t === Je;
    }
    function X1(e, t) {
      Gd = jh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function q1(e, t, a) {
      if (Kf(a)) {
        var i = t.lanes;
        i = Jf(i, e.pendingLanes);
        var u = De(i, a);
        t.lanes = u, ou(e, u);
      }
    }
    function K1(e, t, a) {
      wi(e, t);
    }
    var Zh = {
      readContext: tn,
      useCallback: tr,
      useContext: tr,
      useEffect: tr,
      useImperativeHandle: tr,
      useInsertionEffect: tr,
      useLayoutEffect: tr,
      useMemo: tr,
      useReducer: tr,
      useRef: tr,
      useState: tr,
      useDebugValue: tr,
      useDeferredValue: tr,
      useTransition: tr,
      useMutableSource: tr,
      useSyncExternalStore: tr,
      useId: tr,
      unstable_isNewReconciler: Q
    }, Z1 = null, J1 = null, eC = null, tC = null, Fi = null, Za = null, Jh = null;
    {
      var Jg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ee = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Z1 = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Ge(), Hc(t), Wg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Ge(), tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Ge(), Hc(t), Yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Ge(), Hc(a), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Ge(), Hc(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Ge(), Hc(t), Ig(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Ge(), Hc(t);
          var a = X.current;
          X.current = Fi;
          try {
            return Xg(e, t);
          } finally {
            X.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Ge();
          var i = X.current;
          X.current = Fi;
          try {
            return Fg(e, t, a);
          } finally {
            X.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Ge(), Yg(e);
        },
        useState: function(e) {
          A = "useState", Ge();
          var t = X.current;
          X.current = Fi;
          try {
            return Bh(e);
          } finally {
            X.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Ge(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Ge(), qg(e);
        },
        useTransition: function() {
          return A = "useTransition", Ge(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Ge(), Bg(e, t, a);
        },
        useId: function() {
          return A = "useId", Ge(), Zg();
        },
        unstable_isNewReconciler: Q
      }, J1 = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Y(), Wg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Y(), tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Y(), Yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Y(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Y(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Y(), Ig(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Y();
          var a = X.current;
          X.current = Fi;
          try {
            return Xg(e, t);
          } finally {
            X.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Y();
          var i = X.current;
          X.current = Fi;
          try {
            return Fg(e, t, a);
          } finally {
            X.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Y(), Yg(e);
        },
        useState: function(e) {
          A = "useState", Y();
          var t = X.current;
          X.current = Fi;
          try {
            return Bh(e);
          } finally {
            X.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Y(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Y(), qg(e);
        },
        useTransition: function() {
          return A = "useTransition", Y(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Y(), Bg(e, t, a);
        },
        useId: function() {
          return A = "useId", Y(), Zg();
        },
        unstable_isNewReconciler: Q
      }, eC = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Y(), Xh(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Y(), tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Y(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Y(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Y(), Ih(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Y();
          var a = X.current;
          X.current = Za;
          try {
            return qh(e, t);
          } finally {
            X.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Y();
          var i = X.current;
          X.current = Za;
          try {
            return jg(e, t, a);
          } finally {
            X.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Y(), $h();
        },
        useState: function(e) {
          A = "useState", Y();
          var t = X.current;
          X.current = Za;
          try {
            return $g(e);
          } finally {
            X.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Y(), Wh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Y(), $1(e);
        },
        useTransition: function() {
          return A = "useTransition", Y(), Q1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Y(), Vh(e, t);
        },
        useId: function() {
          return A = "useId", Y(), Kh();
        },
        unstable_isNewReconciler: Q
      }, tC = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Y(), Xh(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Y(), tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Y(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Y(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Y(), Ih(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Y();
          var a = X.current;
          X.current = Jh;
          try {
            return qh(e, t);
          } finally {
            X.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Y();
          var i = X.current;
          X.current = Jh;
          try {
            return Vg(e, t, a);
          } finally {
            X.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Y(), $h();
        },
        useState: function(e) {
          A = "useState", Y();
          var t = X.current;
          X.current = Jh;
          try {
            return Pg(e);
          } finally {
            X.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Y(), Wh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Y(), P1(e);
        },
        useTransition: function() {
          return A = "useTransition", Y(), I1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Y(), Vh(e, t);
        },
        useId: function() {
          return A = "useId", Y(), Kh();
        },
        unstable_isNewReconciler: Q
      }, Fi = {
        readContext: function(e) {
          return Jg(), tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Ee(), Ge(), Wg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Ee(), Ge(), tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Ee(), Ge(), Yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Ee(), Ge(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Ee(), Ge(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Ee(), Ge(), Ig(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Ee(), Ge();
          var a = X.current;
          X.current = Fi;
          try {
            return Xg(e, t);
          } finally {
            X.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Ee(), Ge();
          var i = X.current;
          X.current = Fi;
          try {
            return Fg(e, t, a);
          } finally {
            X.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Ee(), Ge(), Yg(e);
        },
        useState: function(e) {
          A = "useState", Ee(), Ge();
          var t = X.current;
          X.current = Fi;
          try {
            return Bh(e);
          } finally {
            X.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Ee(), Ge(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Ee(), Ge(), qg(e);
        },
        useTransition: function() {
          return A = "useTransition", Ee(), Ge(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Ee(), Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Ee(), Ge(), Bg(e, t, a);
        },
        useId: function() {
          return A = "useId", Ee(), Ge(), Zg();
        },
        unstable_isNewReconciler: Q
      }, Za = {
        readContext: function(e) {
          return Jg(), tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Ee(), Y(), Xh(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Ee(), Y(), tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Ee(), Y(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Ee(), Y(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Ee(), Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Ee(), Y(), Ih(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Ee(), Y();
          var a = X.current;
          X.current = Za;
          try {
            return qh(e, t);
          } finally {
            X.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Ee(), Y();
          var i = X.current;
          X.current = Za;
          try {
            return jg(e, t, a);
          } finally {
            X.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Ee(), Y(), $h();
        },
        useState: function(e) {
          A = "useState", Ee(), Y();
          var t = X.current;
          X.current = Za;
          try {
            return $g(e);
          } finally {
            X.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Ee(), Y(), Wh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Ee(), Y(), $1(e);
        },
        useTransition: function() {
          return A = "useTransition", Ee(), Y(), Q1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Ee(), Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Ee(), Y(), Vh(e, t);
        },
        useId: function() {
          return A = "useId", Ee(), Y(), Kh();
        },
        unstable_isNewReconciler: Q
      }, Jh = {
        readContext: function(e) {
          return Jg(), tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Ee(), Y(), Xh(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Ee(), Y(), tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Ee(), Y(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Ee(), Y(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Ee(), Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Ee(), Y(), Ih(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Ee(), Y();
          var a = X.current;
          X.current = Za;
          try {
            return qh(e, t);
          } finally {
            X.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Ee(), Y();
          var i = X.current;
          X.current = Za;
          try {
            return Vg(e, t, a);
          } finally {
            X.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Ee(), Y(), $h();
        },
        useState: function(e) {
          A = "useState", Ee(), Y();
          var t = X.current;
          X.current = Za;
          try {
            return Pg(e);
          } finally {
            X.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Ee(), Y(), Wh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Ee(), Y(), P1(e);
        },
        useTransition: function() {
          return A = "useTransition", Ee(), Y(), I1();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Ee(), Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Ee(), Y(), Vh(e, t);
        },
        useId: function() {
          return A = "useId", Ee(), Y(), Kh();
        },
        unstable_isNewReconciler: Q
      };
    }
    var Lu = H.unstable_now, nC = 0, em = -1, Zd = -1, tm = -1, eS = !1, nm = !1;
    function rC() {
      return eS;
    }
    function nw() {
      nm = !0;
    }
    function rw() {
      eS = !1, nm = !1;
    }
    function aw() {
      eS = nm, nm = !1;
    }
    function aC() {
      return nC;
    }
    function iC() {
      nC = Lu();
    }
    function tS(e) {
      Zd = Lu(), e.actualStartTime < 0 && (e.actualStartTime = Lu());
    }
    function lC(e) {
      Zd = -1;
    }
    function rm(e, t) {
      if (Zd >= 0) {
        var a = Lu() - Zd;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Zd = -1;
      }
    }
    function ji(e) {
      if (em >= 0) {
        var t = Lu() - em;
        em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case le:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ot:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function nS(e) {
      if (tm >= 0) {
        var t = Lu() - tm;
        tm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case le:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ot:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Vi() {
      em = Lu();
    }
    function rS() {
      tm = Lu();
    }
    function aS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Io(e, t) {
      return {
        value: e,
        source: t,
        stack: uf(t),
        digest: null
      };
    }
    function iS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function iw(e, t) {
      return !0;
    }
    function lS(e, t) {
      try {
        var a = iw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
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
    var lw = typeof WeakMap == "function" ? WeakMap : Map;
    function uC(e, t, a) {
      var i = kl(it, a);
      i.tag = lg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        ZD(u), lS(e, t);
      }, i;
    }
    function uS(e, t, a) {
      var i = kl(it, a);
      i.tag = lg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          gE(e), lS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        gE(e), lS(e, t), typeof u != "function" && qD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Zn(e.lanes, he) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Re(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new lw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = JD.bind(null, e, t, a);
        an && vp(e, a), t.then(s, s);
      }
    }
    function uw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ow(e, t) {
      var a = e.tag;
      if ((e.mode & _e) === de && (a === xe || a === ze || a === be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function sC(e) {
      var t = e;
      do {
        if (t.tag === Ue && Ix(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function cC(e, t, a, i, u) {
      if ((e.mode & _e) === de) {
        if (e === t)
          e.flags |= qt;
        else {
          if (e.flags |= Se, a.flags |= vo, a.flags &= ~(xs | or), a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = ar;
            else {
              var f = kl(it, he);
              f.tag = _h, bu(a, f, he);
            }
          }
          a.lanes = De(a.lanes, he);
        }
        return e;
      }
      return e.flags |= qt, e.lanes = u, e;
    }
    function sw(e, t, a, i, u) {
      if (a.flags |= or, an && vp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ow(a), Mn() && a.mode & _e && e1();
        var f = sC(t);
        if (f !== null) {
          f.flags &= ~wt, cC(f, t, a, e, u), f.mode & _e && oC(e, s, u), uw(f, e, s);
          return;
        } else {
          if (!lu(u)) {
            oC(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Mn() && a.mode & _e) {
        e1();
        var v = sC(t);
        if (v !== null) {
          (v.flags & qt) === se && (v.flags |= wt), cC(v, t, a, e, u), Jy(Io(i, a));
          return;
        }
      }
      i = Io(i, a), $D(i);
      var m = t;
      do {
        switch (m.tag) {
          case le: {
            var y = i;
            m.flags |= qt;
            var R = Pt(u);
            m.lanes = De(m.lanes, R);
            var E = uC(m, y, R);
            sg(m, E);
            return;
          }
          case pe:
            var O = i, M = m.type, N = m.stateNode;
            if ((m.flags & Se) === se && (typeof M.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && !sE(N))) {
              m.flags |= qt;
              var q = Pt(u);
              m.lanes = De(m.lanes, q);
              var ce = uS(m, O, q);
              sg(m, ce);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function cw() {
      return null;
    }
    var Jd = x.ReactCurrentOwner, Ja = !1, oS, ep, sS, cS, fS, Go, dS, am;
    oS = {}, ep = {}, sS = {}, cS = {}, fS = {}, Go = !1, dS = {}, am = {};
    function vr(e, t, a, i) {
      e === null ? t.child = b1(t, null, a, i) : t.child = Lc(t, e.child, a, i);
    }
    function fw(e, t, a, i) {
      t.child = Lc(t, e.child, null, i), t.child = Lc(t, null, a, i);
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          rt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Mc(t, u), xi(t);
      {
        if (Jd.current = t, ea(!0), v = Fc(e, t, f, i, p, u), m = jc(), t.mode & gt) {
          $t(!0);
          try {
            v = Fc(e, t, f, i, p, u), m = jc();
          } finally {
            $t(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (N1(e, t, u), Ol(e, t, u)) : (Mn() && m && Gy(t), t.flags |= yi, vr(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (m_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Gc(s), t.tag = be, t.type = f, hS(t, s), pC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ga(
            p,
            i,
            // Resolved props
            "prop",
            rt(s)
          );
        }
        var v = KS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && Ga(
          y,
          i,
          // Resolved props
          "prop",
          rt(m)
        );
      }
      var R = e.child, E = ES(e, u);
      if (!E) {
        var O = R.memoizedProps, M = a.compare;
        if (M = M !== null ? M : oe, M(O, i) && e.ref === t.ref)
          return Ol(e, t, u);
      }
      t.flags |= yi;
      var N = Zo(R, i);
      return N.ref = t.ref, N.return = t, t.child = N, N;
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === bn) {
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
            rt(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (oe(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ja = !1, t.pendingProps = i = y, ES(e, u))
            (e.flags & vo) !== se && (Ja = !0);
          else
            return t.lanes = e.lanes, Ol(e, t, u);
      }
      return pS(e, t, a, i, u);
    }
    function vC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Z)
        if ((t.mode & _e) === de) {
          var f = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ym(t, a);
        } else if (Zn(a, Kn)) {
          var R = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          ym(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = De(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Kn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, ym(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = De(s.baseLanes, a), t.memoizedState = null) : O = a, ym(t, O);
      }
      return vr(e, t, u, a), t.child;
    }
    function dw(e, t, a) {
      var i = t.pendingProps;
      return vr(e, t, i, a), t.child;
    }
    function pw(e, t, a) {
      var i = t.pendingProps.children;
      return vr(e, t, i, a), t.child;
    }
    function vw(e, t, a) {
      {
        t.flags |= we;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return vr(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Qn, t.flags |= Af);
    }
    function pS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          rt(a)
        );
      }
      var f;
      {
        var p = wc(t, a, !0);
        f = Dc(t, p);
      }
      var v, m;
      Mc(t, u), xi(t);
      {
        if (Jd.current = t, ea(!0), v = Fc(e, t, a, i, f, u), m = jc(), t.mode & gt) {
          $t(!0);
          try {
            v = Fc(e, t, a, i, f, u), m = jc();
          } finally {
            $t(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (N1(e, t, u), Ol(e, t, u)) : (Mn() && m && Gy(t), t.flags |= yi, vr(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      {
        switch (M_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Se, t.flags |= qt;
            var m = new Error("Simulated error coming from DevTools"), y = Pt(u);
            t.lanes = De(t.lanes, y);
            var R = uS(t, Io(m, t), y);
            sg(t, R);
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
            rt(a)
          );
        }
      }
      var O;
      Ui(a) ? (O = !0, mh(t)) : O = !1, Mc(t, u);
      var M = t.stateNode, N;
      M === null ? (lm(e, t), R1(t, a, i), Eg(t, a, i, u), N = !0) : e === null ? N = Vx(t, a, i, u) : N = Bx(e, t, a, i, u);
      var q = vS(e, t, a, N, O, u);
      {
        var ce = t.stateNode;
        N && ce.props !== i && (Go || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Re(t) || "a component"), Go = !0);
      }
      return q;
    }
    function vS(e, t, a, i, u, s) {
      hC(e, t);
      var f = (t.flags & Se) !== se;
      if (!i && !f)
        return u && q0(t, a, !1), Ol(e, t, s);
      var p = t.stateNode;
      Jd.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, lC();
      else {
        xi(t);
        {
          if (ea(!0), v = p.render(), t.mode & gt) {
            $t(!0);
            try {
              p.render();
            } finally {
              $t(!1);
            }
          }
          ea(!1);
        }
        al();
      }
      return t.flags |= yi, e !== null && f ? fw(e, t, v, s) : vr(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function yC(e) {
      var t = e.stateNode;
      t.pendingContext ? W0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && W0(e, t.context, !1), _g(e, t.containerInfo);
    }
    function hw(e, t, a) {
      if (yC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      h1(e, t), Mh(t, i, null, a);
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
        if (m.baseState = v, t.memoizedState = v, t.flags & wt) {
          var y = Io(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return gC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Io(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return gC(e, t, p, a, R);
        } else {
          Sx(t);
          var E = b1(t, null, p, a);
          t.child = E;
          for (var O = E; O; )
            O.flags = O.flags & ~st | Or, O = O.sibling;
        }
      } else {
        if (kc(), p === s)
          return Ol(e, t, a);
        vr(e, t, p, a);
      }
      return t.child;
    }
    function gC(e, t, a, i, u) {
      return kc(), Jy(u), t.flags |= wt, vr(e, t, a, i), t.child;
    }
    function mw(e, t, a) {
      O1(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ny(i, u);
      return p ? f = null : s !== null && Ny(i, s) && (t.flags |= Ie), hC(e, t), vr(e, t, f, a), t.child;
    }
    function yw(e, t) {
      return e === null && Zy(t), null;
    }
    function gw(e, t, a, i) {
      lm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = y_(v), y = qa(v, u), R;
      switch (m) {
        case xe:
          return hS(t, v), t.type = v = Gc(v), R = pS(null, t, v, y, i), R;
        case pe:
          return t.type = v = QS(v), R = mC(null, t, v, y, i), R;
        case ze:
          return t.type = v = IS(v), R = fC(null, t, v, y, i), R;
        case mt: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Ga(
              E,
              y,
              // Resolved for outer only
              "prop",
              rt(v)
            );
          }
          return R = dC(
            null,
            t,
            v,
            qa(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var O = "";
      throw v !== null && typeof v == "object" && v.$$typeof === bn && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function Sw(e, t, a, i, u) {
      lm(e, t), t.tag = pe;
      var s;
      return Ui(a) ? (s = !0, mh(t)) : s = !1, Mc(t, u), R1(t, a, i), Eg(t, a, i, u), vS(null, t, a, !0, s, u);
    }
    function Cw(e, t, a, i) {
      lm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wc(t, a, !1);
        s = Dc(t, f);
      }
      Mc(t, i);
      var p, v;
      xi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = rt(a) || "Unknown";
          oS[m] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), oS[m] = !0);
        }
        t.mode & gt && Xa.recordLegacyContextWarning(t, null), ea(!0), Jd.current = t, p = Fc(null, t, a, u, s, i), v = jc(), ea(!1);
      }
      if (al(), t.flags |= yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = rt(a) || "Unknown";
        ep[y] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), ep[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = rt(a) || "Unknown";
          ep[R] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), ep[R] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Ui(a) ? (E = !0, mh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, og(t), T1(t, p), Eg(t, a, u, i), vS(null, t, a, !0, E, i);
      } else {
        if (t.tag = xe, t.mode & gt) {
          $t(!0);
          try {
            p = Fc(null, t, a, u, s, i), v = jc();
          } finally {
            $t(!1);
          }
        }
        return Mn() && v && Gy(t), vr(null, t, p, i), hS(t, a), t.child;
      }
    }
    function hS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), fS[u] || (fS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = rt(t) || "Unknown";
          cS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), cS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = rt(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support contextType.", p), sS[p] = !0);
        }
      }
    }
    var mS = {
      dehydrated: null,
      treeContext: null,
      retryLane: He
    };
    function yS(e) {
      return {
        baseLanes: e,
        cachePool: cw(),
        transitions: null
      };
    }
    function Ew(e, t) {
      var a = null;
      return {
        baseLanes: De(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Tw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Og(e, Qd);
    }
    function Rw(e, t) {
      return uu(e.childLanes, t);
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      L_(t) && (t.flags |= Se);
      var u = Ka.current, s = !1, f = (t.flags & Se) !== se;
      if (f || Tw(u, e) ? (s = !0, t.flags &= ~Se) : (e === null || e.memoizedState !== null) && (u = Qx(u, L1)), u = zc(u), Ou(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return bw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = xw(t, m, y, a), E = t.child;
          return E.memoizedState = yS(a), t.memoizedState = mS, R;
        } else
          return gS(t, m);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var M = O.dehydrated;
          if (M !== null)
            return kw(e, t, f, i, M, O, a);
        }
        if (s) {
          var N = i.fallback, q = i.children, ce = Dw(e, t, q, N, a), ie = t.child, je = e.child.memoizedState;
          return ie.memoizedState = je === null ? yS(a) : Ew(je, a), ie.childLanes = Rw(e, a), t.memoizedState = mS, ce;
        } else {
          var Ne = i.children, D = ww(e, t, Ne, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function gS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = SS(u, i);
      return s.return = e, e.child = s, s;
    }
    function xw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & _e) === de && s !== null ? (p = s, p.childLanes = U, p.pendingProps = f, e.mode & ve && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Fu(a, u, i, null)) : (p = SS(f, u), v = Fu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function SS(e, t, a) {
      return CE(e, t, U, null);
    }
    function CC(e, t) {
      return Zo(e, t);
    }
    function ww(e, t, a, i) {
      var u = e.child, s = u.sibling, f = CC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & _e) === de && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Qe) : p.push(s);
      }
      return t.child = f, f;
    }
    function Dw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & _e) === de && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = U, m.pendingProps = v, t.mode & ve && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = CC(f, v), m.subtreeFlags = f.subtreeFlags & rn;
      var R;
      return p !== null ? R = Zo(p, i) : (R = Fu(i, s, u, null), R.flags |= st), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function im(e, t, a, i) {
      i !== null && Jy(i), Lc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = gS(t, s);
      return f.flags |= st, t.memoizedState = null, f;
    }
    function _w(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = SS(f, s), v = Fu(i, s, u, null);
      return v.flags |= st, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & _e) !== de && Lc(t, e.child, null, u), v;
    }
    function bw(e, t, a) {
      return (e.mode & _e) === de ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = he) : Hy(t) ? e.lanes = ul : e.lanes = Kn, null;
    }
    function kw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wt) {
          t.flags &= ~wt;
          var D = iS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return im(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Se, null;
          var z = i.children, _ = i.fallback, B = _w(e, t, z, _, f), K = t.child;
          return K.memoizedState = yS(f), t.memoizedState = mS, B;
        }
      else {
        if (yx(), (t.mode & _e) === de)
          return im(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, m;
          {
            var y = zR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = iS(R, p, m);
          return im(e, t, f, E);
        }
        var O = Zn(f, e.childLanes);
        if (Ja || O) {
          var M = mm();
          if (M !== null) {
            var N = ay(M, f);
            if (N !== He && N !== s.retryLane) {
              s.retryLane = N;
              var q = it;
              Vr(e, N), vn(M, e, N, q);
            }
          }
          VS();
          var ce = iS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return im(e, t, f, ce);
        } else if ($0(u)) {
          t.flags |= Se, t.child = e.child;
          var ie = e_.bind(null, e);
          return UR(u, ie), null;
        } else {
          Cx(t, u, s.treeContext);
          var je = i.children, Ne = gS(t, je);
          return Ne.flags |= Or, Ne;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = De(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = De(i.lanes, t)), ag(e.return, t, a);
    }
    function Ow(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ue) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === lt)
          EC(i, a, e);
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
    function Mw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Fh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Lw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !dS[e])
        if (dS[e] = !0, typeof e == "string")
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
    function Nw(e, t) {
      e !== void 0 && !am[e] && (e !== "collapsed" && e !== "hidden" ? (am[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (am[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function TC(e, t) {
      {
        var a = Wt(e), i = !a && typeof Oa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function zw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Wt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!TC(e[a], a))
              return;
        } else {
          var i = Oa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!TC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
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
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Lw(u), Nw(s, u), zw(f, u), vr(e, t, f, a);
      var p = Ka.current, v = Og(p, Qd);
      if (v)
        p = Mg(p, Qd), t.flags |= Se;
      else {
        var m = e !== null && (e.flags & Se) !== se;
        m && Ow(t, t.child, a), p = zc(p);
      }
      if (Ou(t, p), (t.mode & _e) === de)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Mw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), CS(
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
            var E = null, O = t.child;
            for (t.child = null; O !== null; ) {
              var M = O.alternate;
              if (M !== null && Fh(M) === null) {
                t.child = O;
                break;
              }
              var N = O.sibling;
              O.sibling = E, E = O, O = N;
            }
            CS(
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
            CS(
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
    function Uw(e, t, a) {
      _g(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lc(t, null, i, a) : vr(e, t, i, a), t.child;
    }
    var xC = !1;
    function Aw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || xC || (xC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ga(v, s, "prop", "Context.Provider");
      }
      if (f1(t, u, p), f !== null) {
        var m = f.value;
        if (te(m, p)) {
          if (f.children === s.children && !vh())
            return Ol(e, t, a);
        } else
          Ox(t, u, a);
      }
      var y = s.children;
      return vr(e, t, y, a), t.child;
    }
    var wC = !1;
    function Hw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mc(t, a);
      var f = tn(i);
      xi(t);
      var p;
      return Jd.current = t, ea(!0), p = s(f), ea(!1), al(), t.flags |= yi, vr(e, t, p, a), t.child;
    }
    function tp() {
      Ja = !0;
    }
    function lm(e, t) {
      (t.mode & _e) === de && e !== null && (e.alternate = null, t.alternate = null, t.flags |= st);
    }
    function Ol(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), lC(), pp(t.lanes), Zn(a, t.childLanes) ? ($x(e, t), t.child) : null;
    }
    function Fw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Qe) : s.push(e), a.flags |= st, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!Zn(a, t);
    }
    function jw(e, t, a) {
      switch (t.tag) {
        case le:
          yC(t), t.stateNode, kc();
          break;
        case ue:
          O1(t);
          break;
        case pe: {
          var i = t.type;
          Ui(i) && mh(t);
          break;
        }
        case me:
          _g(t, t.stateNode.containerInfo);
          break;
        case hn: {
          var u = t.memoizedProps.value, s = t.type._context;
          f1(t, s, u);
          break;
        }
        case ot:
          {
            var f = Zn(a, t.childLanes);
            f && (t.flags |= we);
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
              return Ou(t, zc(Ka.current)), t.flags |= Se, null;
            var m = t.child, y = m.childLanes;
            if (Zn(a, y))
              return SC(e, t, a);
            Ou(t, zc(Ka.current));
            var R = Ol(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Ou(t, zc(Ka.current));
          break;
        }
        case lt: {
          var E = (e.flags & Se) !== se, O = Zn(a, t.childLanes);
          if (E) {
            if (O)
              return RC(e, t, a);
            t.flags |= Se;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), Ou(t, Ka.current), O)
            break;
          return null;
        }
        case Ae:
        case qe:
          return t.lanes = U, vC(e, t, a);
      }
      return Ol(e, t, a);
    }
    function DC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Fw(e, t, KS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || vh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ja = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Se) === se)
            return Ja = !1, jw(e, t, a);
          (e.flags & vo) !== se ? Ja = !0 : Ja = !1;
        }
      } else if (Ja = !1, Mn() && fx(t)) {
        var f = t.index, p = dx();
        J0(t, p, f);
      }
      switch (t.lanes = U, t.tag) {
        case nn:
          return Cw(e, t, t.type, a);
        case Dn: {
          var v = t.elementType;
          return gw(e, t, v, a);
        }
        case xe: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : qa(m, y);
          return pS(e, t, m, R, a);
        }
        case pe: {
          var E = t.type, O = t.pendingProps, M = t.elementType === E ? O : qa(E, O);
          return mC(e, t, E, M, a);
        }
        case le:
          return hw(e, t, a);
        case ue:
          return mw(e, t, a);
        case ke:
          return yw(e, t);
        case Ue:
          return SC(e, t, a);
        case me:
          return Uw(e, t, a);
        case ze: {
          var N = t.type, q = t.pendingProps, ce = t.elementType === N ? q : qa(N, q);
          return fC(e, t, N, ce, a);
        }
        case tt:
          return dw(e, t, a);
        case ut:
          return pw(e, t, a);
        case ot:
          return vw(e, t, a);
        case hn:
          return Aw(e, t, a);
        case Ir:
          return Hw(e, t, a);
        case mt: {
          var ie = t.type, je = t.pendingProps, Ne = qa(ie, je);
          if (t.type !== t.elementType) {
            var D = ie.propTypes;
            D && Ga(
              D,
              Ne,
              // Resolved for outer only
              "prop",
              rt(ie)
            );
          }
          return Ne = qa(ie.type, Ne), dC(e, t, ie, Ne, a);
        }
        case be:
          return pC(e, t, t.type, t.pendingProps, a);
        case ar: {
          var z = t.type, _ = t.pendingProps, B = t.elementType === z ? _ : qa(z, _);
          return Sw(e, t, z, B, a);
        }
        case lt:
          return RC(e, t, a);
        case Vn:
          break;
        case Ae:
          return vC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vc(e) {
      e.flags |= we;
    }
    function _C(e) {
      e.flags |= Qn, e.flags |= Af;
    }
    var bC, TS, kC, OC;
    bC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === ke)
          oR(e, u.stateNode);
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
    }, TS = function(e, t) {
    }, kC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = bg(), v = cR(f, a, s, i, u, p);
        t.updateQueue = v, v && Vc(t);
      }
    }, OC = function(e, t, a, i) {
      a !== i && Vc(t);
    };
    function np(e, t) {
      if (!Mn())
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
    function Nn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = U, i = se;
      if (t) {
        if ((e.mode & ve) !== de) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = De(a, De(m.lanes, m.childLanes)), i |= m.subtreeFlags & rn, i |= m.flags & rn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = De(a, De(y.lanes, y.childLanes)), i |= y.subtreeFlags & rn, i |= y.flags & rn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ve) !== de) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = De(a, De(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = De(a, De(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Vw(e, t, a) {
      if (wx() && (t.mode & _e) !== de && (t.flags & Se) === se)
        return l1(t), kc(), t.flags |= wt | or | qt, !1;
      var i = Eh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Rx(t), Nn(t), (t.mode & ve) !== de) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kc(), (t.flags & Se) === se && (t.memoizedState = null), t.flags |= we, Nn(t), (t.mode & ve) !== de) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return u1(), !0;
    }
    function MC(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case nn:
        case Dn:
        case be:
        case xe:
        case ze:
        case tt:
        case ut:
        case ot:
        case Ir:
        case mt:
          return Nn(t), null;
        case pe: {
          var u = t.type;
          return Ui(u) && hh(t), Nn(t), null;
        }
        case le: {
          var s = t.stateNode;
          if (Nc(t), Yy(t), Ng(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Eh(t);
            if (f)
              Vc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wt) !== se) && (t.flags |= kr, u1());
            }
          }
          return TS(e, t), Nn(t), null;
        }
        case ue: {
          kg(t);
          var v = k1(), m = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, m, i, v), e.ref !== t.ref && _C(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Nn(t), null;
            }
            var y = bg(), R = Eh(t);
            if (R)
              Ex(t, v, y) && Vc(t);
            else {
              var E = uR(m, i, v, y, t);
              bC(E, t, !1, !1), t.stateNode = E, sR(E, m, i, v) && Vc(t);
            }
            t.ref !== null && _C(t);
          }
          return Nn(t), null;
        }
        case ke: {
          var O = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            OC(e, t, M, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var N = k1(), q = bg(), ce = Eh(t);
            ce ? Tx(t) && Vc(t) : t.stateNode = fR(O, N, q, t);
          }
          return Nn(t), null;
        }
        case Ue: {
          Uc(t);
          var ie = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var je = Vw(e, t, ie);
            if (!je)
              return t.flags & qt ? t : null;
          }
          if ((t.flags & Se) !== se)
            return t.lanes = a, (t.mode & ve) !== de && aS(t), t;
          var Ne = ie !== null, D = e !== null && e.memoizedState !== null;
          if (Ne !== D && Ne) {
            var z = t.child;
            if (z.flags |= gi, (t.mode & _e) !== de) {
              var _ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !We);
              _ || Og(Ka.current, L1) ? BD() : VS();
            }
          }
          var B = t.updateQueue;
          if (B !== null && (t.flags |= we), Nn(t), (t.mode & ve) !== de && Ne) {
            var K = t.child;
            K !== null && (t.treeBaseDuration -= K.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Nc(t), TS(e, t), e === null && ax(t.stateNode.containerInfo), Nn(t), null;
        case hn:
          var G = t.type._context;
          return rg(G, t), Nn(t), null;
        case ar: {
          var ge = t.type;
          return Ui(ge) && hh(t), Nn(t), null;
        }
        case lt: {
          Uc(t);
          var Te = t.memoizedState;
          if (Te === null)
            return Nn(t), null;
          var et = (t.flags & Se) !== se, Pe = Te.rendering;
          if (Pe === null)
            if (et)
              np(Te, !1);
            else {
              var Gt = PD() && (e === null || (e.flags & Se) === se);
              if (!Gt)
                for (var Ye = t.child; Ye !== null; ) {
                  var jt = Fh(Ye);
                  if (jt !== null) {
                    et = !0, t.flags |= Se, np(Te, !1);
                    var nr = jt.updateQueue;
                    return nr !== null && (t.updateQueue = nr, t.flags |= we), t.subtreeFlags = se, Px(t, a), Ou(t, Mg(Ka.current, Qd)), t.child;
                  }
                  Ye = Ye.sibling;
                }
              Te.tail !== null && yt() > ZC() && (t.flags |= Se, et = !0, np(Te, !1), t.lanes = Xf);
            }
          else {
            if (!et) {
              var Fn = Fh(Pe);
              if (Fn !== null) {
                t.flags |= Se, et = !0;
                var oa = Fn.updateQueue;
                if (oa !== null && (t.updateQueue = oa, t.flags |= we), np(Te, !0), Te.tail === null && Te.tailMode === "hidden" && !Pe.alternate && !Mn())
                  return Nn(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                yt() * 2 - Te.renderingStartTime > ZC() && a !== Kn && (t.flags |= Se, et = !0, np(Te, !1), t.lanes = Xf);
            }
            if (Te.isBackwards)
              Pe.sibling = t.child, t.child = Pe;
            else {
              var yr = Te.last;
              yr !== null ? yr.sibling = Pe : t.child = Pe, Te.last = Pe;
            }
          }
          if (Te.tail !== null) {
            var gr = Te.tail;
            Te.rendering = gr, Te.tail = gr.sibling, Te.renderingStartTime = yt(), gr.sibling = null;
            var rr = Ka.current;
            return et ? rr = Mg(rr, Qd) : rr = zc(rr), Ou(t, rr), gr;
          }
          return Nn(t), null;
        }
        case Vn:
          break;
        case Ae:
        case qe: {
          jS(t);
          var Ul = t.memoizedState, Wc = Ul !== null;
          if (e !== null) {
            var gp = e.memoizedState, Pi = gp !== null;
            Pi !== Wc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Z && (t.flags |= gi);
          }
          return !Wc || (t.mode & _e) === de ? Nn(t) : Zn($i, Kn) && (Nn(t), t.subtreeFlags & (st | we) && (t.flags |= gi)), null;
        }
        case Sr:
          return null;
        case Et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bw(e, t, a) {
      switch (Wy(t), t.tag) {
        case pe: {
          var i = t.type;
          Ui(i) && hh(t);
          var u = t.flags;
          return u & qt ? (t.flags = u & ~qt | Se, (t.mode & ve) !== de && aS(t), t) : null;
        }
        case le: {
          t.stateNode, Nc(t), Yy(t), Ng();
          var s = t.flags;
          return (s & qt) !== se && (s & Se) === se ? (t.flags = s & ~qt | Se, t) : null;
        }
        case ue:
          return kg(t), null;
        case Ue: {
          Uc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kc();
          }
          var p = t.flags;
          return p & qt ? (t.flags = p & ~qt | Se, (t.mode & ve) !== de && aS(t), t) : null;
        }
        case lt:
          return Uc(t), null;
        case me:
          return Nc(t), null;
        case hn:
          var v = t.type._context;
          return rg(v, t), null;
        case Ae:
        case qe:
          return jS(t), null;
        case Sr:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (Wy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && hh(t);
          break;
        }
        case le: {
          t.stateNode, Nc(t), Yy(t), Ng();
          break;
        }
        case ue: {
          kg(t);
          break;
        }
        case me:
          Nc(t);
          break;
        case Ue:
          Uc(t);
          break;
        case lt:
          Uc(t);
          break;
        case hn:
          var u = t.type._context;
          rg(u, t);
          break;
        case Ae:
        case qe:
          jS(t);
          break;
      }
    }
    var NC = null;
    NC = /* @__PURE__ */ new Set();
    var um = !1, zn = !1, $w = typeof WeakSet == "function" ? WeakSet : Set, ne = null, Bc = null, $c = null;
    function Pw(e) {
      nl(null, function() {
        throw e;
      }), zf();
    }
    var Yw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ve)
        try {
          Vi(), t.componentWillUnmount();
        } finally {
          ji(e);
        }
      else
        t.componentWillUnmount();
    };
    function zC(e, t) {
      try {
        Nu(on, e);
      } catch (a) {
        pt(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Yw(e, a);
      } catch (i) {
        pt(e, t, i);
      }
    }
    function Qw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pt(e, t, i);
      }
    }
    function UC(e, t) {
      try {
        HC(e);
      } catch (a) {
        pt(e, t, a);
      }
    }
    function Pc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (_n && ii && e.mode & ve)
              try {
                Vi(), i = a(null);
              } finally {
                ji(e);
              }
            else
              i = a(null);
          } catch (u) {
            pt(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Re(e));
        } else
          a.current = null;
    }
    function om(e, t, a) {
      try {
        a();
      } catch (i) {
        pt(e, t, i);
      }
    }
    var AC = !1;
    function Iw(e, t) {
      iR(e.containerInfo), ne = t, Gw();
      var a = AC;
      return AC = !1, a;
    }
    function Gw() {
      for (; ne !== null; ) {
        var e = ne, t = e.child;
        (e.subtreeFlags & Jl) !== se && t !== null ? (t.return = e, ne = t) : Ww();
      }
    }
    function Ww() {
      for (; ne !== null; ) {
        var e = ne;
        Ze(e);
        try {
          Xw(e);
        } catch (a) {
          pt(e, e.return, a);
        }
        Bt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ne = t;
          return;
        }
        ne = e.return;
      }
    }
    function Xw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & kr) !== se) {
        switch (Ze(e), e.tag) {
          case xe:
          case ze:
          case be:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Go && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : qa(e.type, i), u);
              {
                var p = NC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Re(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case le: {
            {
              var v = e.stateNode;
              OR(v.containerInfo);
            }
            break;
          }
          case ue:
          case ke:
          case me:
          case ar:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Bt();
      }
    }
    function ei(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ln) !== Br ? Ls(t) : (e & on) !== Br && Ns(t), (e & Ai) !== Br && hp(!0), om(t, a, p), (e & Ai) !== Br && hp(!1), (e & Ln) !== Br ? Cv() : (e & on) !== Br && eu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Nu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ln) !== Br ? Sv(t) : (e & on) !== Br && Ev(t);
            var f = s.create;
            (e & Ai) !== Br && hp(!0), s.destroy = f(), (e & Ai) !== Br && hp(!1), (e & Ln) !== Br ? If() : (e & on) !== Br && Tv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & on) !== se ? v = "useLayoutEffect" : (s.tag & Ai) !== se ? v = "useInsertionEffect" : v = "useEffect";
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
    function qw(e, t) {
      if ((t.flags & we) !== se)
        switch (t.tag) {
          case ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = aC(), p = t.alternate === null ? "mount" : "update";
            rC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case le:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case ot:
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
    function Kw(e, t, a, i) {
      if ((a.flags & Sn) !== se)
        switch (a.tag) {
          case xe:
          case ze:
          case be: {
            if (!zn)
              if (a.mode & ve)
                try {
                  Vi(), Nu(on | un, a);
                } finally {
                  ji(a);
                }
              else
                Nu(on | un, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & we && !zn)
              if (t === null)
                if (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), a.mode & ve)
                  try {
                    Vi(), u.componentDidMount();
                  } finally {
                    ji(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : qa(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), a.mode & ve)
                  try {
                    Vi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ji(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), y1(a, p, u));
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
                  case pe:
                    m = a.child.stateNode;
                    break;
                }
              y1(a, v, m);
            }
            break;
          }
          case ue: {
            var y = a.stateNode;
            if (t === null && a.flags & we) {
              var R = a.type, E = a.memoizedProps;
              mR(y, R, E);
            }
            break;
          }
          case ke:
            break;
          case me:
            break;
          case ot: {
            {
              var O = a.memoizedProps, M = O.onCommit, N = O.onRender, q = a.stateNode.effectDuration, ce = aC(), ie = t === null ? "mount" : "update";
              rC() && (ie = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, ie, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ce);
              {
                typeof M == "function" && M(a.memoizedProps.id, ie, q, ce), WD(a);
                var je = a.return;
                e:
                  for (; je !== null; ) {
                    switch (je.tag) {
                      case le:
                        var Ne = je.stateNode;
                        Ne.effectDuration += q;
                        break e;
                      case ot:
                        var D = je.stateNode;
                        D.effectDuration += q;
                        break e;
                    }
                    je = je.return;
                  }
              }
            }
            break;
          }
          case Ue: {
            iD(e, a);
            break;
          }
          case lt:
          case ar:
          case Vn:
          case Ae:
          case qe:
          case Et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zn || a.flags & Qn && HC(a);
    }
    function Zw(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          if (e.mode & ve)
            try {
              Vi(), zC(e, e.return);
            } finally {
              ji(e);
            }
          else
            zC(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Qw(e, e.return, t), UC(e, e.return);
          break;
        }
        case ue: {
          UC(e, e.return);
          break;
        }
      }
    }
    function Jw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? DR(u) : bR(i.stateNode, i.memoizedProps);
            } catch (f) {
              pt(e, e.return, f);
            }
          }
        } else if (i.tag === ke) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _R(s) : kR(s, i.memoizedProps);
            } catch (f) {
              pt(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === qe) && i.memoizedState !== null && i !== e)) {
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
    function HC(e) {
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
          if (e.mode & ve)
            try {
              Vi(), u = t(i);
            } finally {
              ji(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Re(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Re(e)), t.current = i;
      }
    }
    function eD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function FC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, FC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && ux(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function tD(e) {
      for (var t = e.return; t !== null; ) {
        if (jC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function jC(e) {
      return e.tag === ue || e.tag === le || e.tag === me;
    }
    function VC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || jC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== ke && t.tag !== Nt; ) {
            if (t.flags & st || t.child === null || t.tag === me)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & st))
            return t.stateNode;
        }
    }
    function nD(e) {
      var t = tD(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Ie && (B0(a), t.flags &= ~Ie);
          var i = VC(e);
          wS(e, i, a);
          break;
        }
        case le:
        case me: {
          var u = t.stateNode.containerInfo, s = VC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ue || i === ke;
      if (u) {
        var s = e.stateNode;
        t ? TR(a, s, t) : CR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === ue || i === ke;
      if (u) {
        var s = e.stateNode;
        t ? ER(a, s, t) : SR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Un = null, ti = !1;
    function rD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ue: {
                Un = i.stateNode, ti = !1;
                break e;
              }
              case le: {
                Un = i.stateNode.containerInfo, ti = !0;
                break e;
              }
              case me: {
                Un = i.stateNode.containerInfo, ti = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Un === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        BC(e, t, a), Un = null, ti = !1;
      }
      eD(a);
    }
    function zu(e, t, a) {
      for (var i = a.child; i !== null; )
        BC(e, t, i), i = i.sibling;
    }
    function BC(e, t, a) {
      switch (Yf(a), a.tag) {
        case ue:
          zn || Pc(a, t);
        case ke: {
          {
            var i = Un, u = ti;
            Un = null, zu(e, t, a), Un = i, ti = u, Un !== null && (ti ? xR(Un, a.stateNode) : RR(Un, a.stateNode));
          }
          return;
        }
        case Nt: {
          Un !== null && (ti ? wR(Un, a.stateNode) : Ay(Un, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Un, f = ti;
            Un = a.stateNode.containerInfo, ti = !0, zu(e, t, a), Un = s, ti = f;
          }
          return;
        }
        case xe:
        case ze:
        case mt:
        case be: {
          if (!zn) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, O = R.tag;
                  E !== void 0 && ((O & Ai) !== Br ? om(a, t, E) : (O & on) !== Br && (Ns(a), a.mode & ve ? (Vi(), om(a, t, E), ji(a)) : om(a, t, E), eu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          zu(e, t, a);
          return;
        }
        case pe: {
          if (!zn) {
            Pc(a, t);
            var M = a.stateNode;
            typeof M.componentWillUnmount == "function" && RS(a, t, M);
          }
          zu(e, t, a);
          return;
        }
        case Vn: {
          zu(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & _e
          ) {
            var N = zn;
            zn = N || a.memoizedState !== null, zu(e, t, a), zn = N;
          } else
            zu(e, t, a);
          break;
        }
        default: {
          zu(e, t, a);
          return;
        }
      }
    }
    function aD(e) {
      e.memoizedState;
    }
    function iD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && YR(s);
          }
        }
      }
    }
    function $C(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new $w()), t.forEach(function(i) {
          var u = t_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), an)
              if (Bc !== null && $c !== null)
                vp($c, Bc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function lD(e, t, a) {
      Bc = a, $c = e, Ze(t), PC(t, e), Ze(t), Bc = null, $c = null;
    }
    function ni(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            rD(e, t, s);
          } catch (v) {
            pt(s, t, v);
          }
        }
      var f = Um();
      if (t.subtreeFlags & Wn)
        for (var p = t.child; p !== null; )
          Ze(p), PC(p, e), p = p.sibling;
      Ze(f);
    }
    function PC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case xe:
        case ze:
        case mt:
        case be: {
          if (ni(t, e), Bi(e), u & we) {
            try {
              ei(Ai | un, e, e.return), Nu(Ai | un, e);
            } catch (ge) {
              pt(e, e.return, ge);
            }
            if (e.mode & ve) {
              try {
                Vi(), ei(on | un, e, e.return);
              } catch (ge) {
                pt(e, e.return, ge);
              }
              ji(e);
            } else
              try {
                ei(on | un, e, e.return);
              } catch (ge) {
                pt(e, e.return, ge);
              }
          }
          return;
        }
        case pe: {
          ni(t, e), Bi(e), u & Qn && i !== null && Pc(i, i.return);
          return;
        }
        case ue: {
          ni(t, e), Bi(e), u & Qn && i !== null && Pc(i, i.return);
          {
            if (e.flags & Ie) {
              var s = e.stateNode;
              try {
                B0(s);
              } catch (ge) {
                pt(e, e.return, ge);
              }
            }
            if (u & we) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    yR(f, y, m, v, p, e);
                  } catch (ge) {
                    pt(e, e.return, ge);
                  }
              }
            }
          }
          return;
        }
        case ke: {
          if (ni(t, e), Bi(e), u & we) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, O = i !== null ? i.memoizedProps : E;
            try {
              gR(R, O, E);
            } catch (ge) {
              pt(e, e.return, ge);
            }
          }
          return;
        }
        case le: {
          if (ni(t, e), Bi(e), u & we && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                PR(t.containerInfo);
              } catch (ge) {
                pt(e, e.return, ge);
              }
          }
          return;
        }
        case me: {
          ni(t, e), Bi(e);
          return;
        }
        case Ue: {
          ni(t, e), Bi(e);
          var N = e.child;
          if (N.flags & gi) {
            var q = N.stateNode, ce = N.memoizedState, ie = ce !== null;
            if (q.isHidden = ie, ie) {
              var je = N.alternate !== null && N.alternate.memoizedState !== null;
              je || VD();
            }
          }
          if (u & we) {
            try {
              aD(e);
            } catch (ge) {
              pt(e, e.return, ge);
            }
            $C(e);
          }
          return;
        }
        case Ae: {
          var Ne = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & _e
          ) {
            var D = zn;
            zn = D || Ne, ni(t, e), zn = D;
          } else
            ni(t, e);
          if (Bi(e), u & gi) {
            var z = e.stateNode, _ = e.memoizedState, B = _ !== null, K = e;
            if (z.isHidden = B, B && !Ne && (K.mode & _e) !== de) {
              ne = K;
              for (var G = K.child; G !== null; )
                ne = G, oD(G), G = G.sibling;
            }
            Jw(K, B);
          }
          return;
        }
        case lt: {
          ni(t, e), Bi(e), u & we && $C(e);
          return;
        }
        case Vn:
          return;
        default: {
          ni(t, e), Bi(e);
          return;
        }
      }
    }
    function Bi(e) {
      var t = e.flags;
      if (t & st) {
        try {
          nD(e);
        } catch (a) {
          pt(e, e.return, a);
        }
        e.flags &= ~st;
      }
      t & Or && (e.flags &= ~Or);
    }
    function uD(e, t, a) {
      Bc = a, $c = t, ne = e, YC(e, t, a), Bc = null, $c = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & _e) !== de; ne !== null; ) {
        var u = ne, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || um;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || zn, R = um, E = zn;
            um = p, zn = y, zn && !E && (ne = u, sD(u));
            for (var O = s; O !== null; )
              ne = O, YC(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            ne = u, um = R, zn = E, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sn) !== se && s !== null ? (s.return = u, ne = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; ne !== null; ) {
        var i = ne;
        if ((i.flags & Sn) !== se) {
          var u = i.alternate;
          Ze(i);
          try {
            Kw(t, u, i, a);
          } catch (f) {
            pt(i, i.return, f);
          }
          Bt();
        }
        if (i === e) {
          ne = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ne = s;
          return;
        }
        ne = i.return;
      }
    }
    function oD(e) {
      for (; ne !== null; ) {
        var t = ne, a = t.child;
        switch (t.tag) {
          case xe:
          case ze:
          case mt:
          case be: {
            if (t.mode & ve)
              try {
                Vi(), ei(on, t, t.return);
              } finally {
                ji(t);
              }
            else
              ei(on, t, t.return);
            break;
          }
          case pe: {
            Pc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case ue: {
            Pc(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              QC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ne = a) : QC(e);
      }
    }
    function QC(e) {
      for (; ne !== null; ) {
        var t = ne;
        if (t === e) {
          ne = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ne = a;
          return;
        }
        ne = t.return;
      }
    }
    function sD(e) {
      for (; ne !== null; ) {
        var t = ne, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            IC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ne = a) : IC(e);
      }
    }
    function IC(e) {
      for (; ne !== null; ) {
        var t = ne;
        Ze(t);
        try {
          Zw(t);
        } catch (i) {
          pt(t, t.return, i);
        }
        if (Bt(), t === e) {
          ne = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ne = a;
          return;
        }
        ne = t.return;
      }
    }
    function cD(e, t, a, i) {
      ne = t, fD(t, e, a, i);
    }
    function fD(e, t, a, i) {
      for (; ne !== null; ) {
        var u = ne, s = u.child;
        (u.subtreeFlags & Mr) !== se && s !== null ? (s.return = u, ne = s) : dD(e, t, a, i);
      }
    }
    function dD(e, t, a, i) {
      for (; ne !== null; ) {
        var u = ne;
        if ((u.flags & vt) !== se) {
          Ze(u);
          try {
            pD(t, u, a, i);
          } catch (f) {
            pt(u, u.return, f);
          }
          Bt();
        }
        if (u === e) {
          ne = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ne = s;
          return;
        }
        ne = u.return;
      }
    }
    function pD(e, t, a, i) {
      switch (t.tag) {
        case xe:
        case ze:
        case be: {
          if (t.mode & ve) {
            rS();
            try {
              Nu(Ln | un, t);
            } finally {
              nS(t);
            }
          } else
            Nu(Ln | un, t);
          break;
        }
      }
    }
    function vD(e) {
      ne = e, hD();
    }
    function hD() {
      for (; ne !== null; ) {
        var e = ne, t = e.child;
        if ((ne.flags & Qe) !== se) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ne = u, gD(u, e);
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
            ne = e;
          }
        }
        (e.subtreeFlags & Mr) !== se && t !== null ? (t.return = e, ne = t) : mD();
      }
    }
    function mD() {
      for (; ne !== null; ) {
        var e = ne;
        (e.flags & vt) !== se && (Ze(e), yD(e), Bt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ne = t;
          return;
        }
        ne = e.return;
      }
    }
    function yD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          e.mode & ve ? (rS(), ei(Ln | un, e, e.return), nS(e)) : ei(Ln | un, e, e.return);
          break;
        }
      }
    }
    function gD(e, t) {
      for (; ne !== null; ) {
        var a = ne;
        Ze(a), CD(a, t), Bt();
        var i = a.child;
        i !== null ? (i.return = a, ne = i) : SD(e);
      }
    }
    function SD(e) {
      for (; ne !== null; ) {
        var t = ne, a = t.sibling, i = t.return;
        if (FC(t), t === e) {
          ne = null;
          return;
        }
        if (a !== null) {
          a.return = i, ne = a;
          return;
        }
        ne = i;
      }
    }
    function CD(e, t) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          e.mode & ve ? (rS(), ei(Ln, e, t), nS(e)) : ei(Ln, e, t);
          break;
        }
      }
    }
    function ED(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          try {
            Nu(on | un, e);
          } catch (a) {
            pt(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pt(e, e.return, a);
          }
          break;
        }
      }
    }
    function TD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          try {
            Nu(Ln | un, e);
          } catch (t) {
            pt(e, e.return, t);
          }
          break;
        }
      }
    }
    function RD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          try {
            ei(on | un, e, e.return);
          } catch (a) {
            pt(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function xD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be:
          try {
            ei(Ln | un, e, e.return);
          } catch (t) {
            pt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rp = Symbol.for;
      rp("selector.component"), rp("selector.has_pseudo_class"), rp("selector.role"), rp("selector.test_id"), rp("selector.text");
    }
    var wD = [];
    function DD() {
      wD.forEach(function(e) {
        return e();
      });
    }
    var _D = x.ReactCurrentActQueue;
    function bD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function GC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && _D.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var kD = Math.ceil, _S = x.ReactCurrentDispatcher, bS = x.ReactCurrentOwner, An = x.ReactCurrentBatchConfig, ri = x.ReactCurrentActQueue, fn = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Hn = (
      /*                */
      2
    ), wa = (
      /*                */
      4
    ), Ml = 0, ap = 1, Wo = 2, sm = 3, ip = 4, XC = 5, kS = 6, Fe = fn, hr = null, Mt = null, dn = U, $i = U, OS = xu(U), pn = Ml, lp = null, cm = U, up = U, fm = U, op = null, $r = null, MS = 0, qC = 500, KC = 1 / 0, OD = 500, Ll = null;
    function sp() {
      KC = yt() + OD;
    }
    function ZC() {
      return KC;
    }
    var dm = !1, LS = null, Yc = null, Xo = !1, Uu = null, cp = U, NS = [], zS = null, MD = 50, fp = 0, US = null, AS = !1, pm = !1, LD = 50, Qc = 0, vm = null, dp = it, hm = U, JC = !1;
    function mm() {
      return hr;
    }
    function mr() {
      return (Fe & (Hn | wa)) !== fn ? yt() : (dp !== it || (dp = yt()), dp);
    }
    function Au(e) {
      var t = e.mode;
      if ((t & _e) === de)
        return he;
      if ((Fe & Hn) !== fn && dn !== U)
        return Pt(dn);
      var a = bx() !== _x;
      if (a) {
        if (An.transition !== null) {
          var i = An.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return hm === He && (hm = Zf()), hm;
      }
      var u = Ur();
      if (u !== He)
        return u;
      var s = dR();
      return s;
    }
    function ND(e) {
      var t = e.mode;
      return (t & _e) === de ? he : ry();
    }
    function vn(e, t, a, i) {
      r_(), JC && S("useInsertionEffect must not schedule updates."), AS && (pm = !0), vl(e, a, i), (Fe & Hn) !== U && e === hr ? l_(t) : (an && rd(e, t, a), u_(t), e === hr && ((Fe & Hn) === fn && (up = De(up, a)), pn === ip && Hu(e, dn)), Pr(e, i), a === he && Fe === fn && (t.mode & _e) === de && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ri.isBatchingLegacy && (sp(), Z0()));
    }
    function zD(e, t, a) {
      var i = e.current;
      i.lanes = t, vl(e, t, a), Pr(e, a);
    }
    function UD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Fe & Hn) !== fn
      );
    }
    function Pr(e, t) {
      var a = e.callbackNode;
      ey(e, t);
      var i = Co(e, e === hr ? dn : U);
      if (i === U) {
        a !== null && hE(a), e.callbackNode = null, e.callbackPriority = He;
        return;
      }
      var u = Ht(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ri.current !== null && a !== PS)) {
        a == null && s !== he && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hE(a);
      var f;
      if (u === he)
        e.tag === wu ? (ri.isBatchingLegacy !== null && (ri.didScheduleLegacyUpdate = !0), cx(nE.bind(null, e))) : K0(nE.bind(null, e)), ri.current !== null ? ri.current.push(Du) : vR(function() {
          (Fe & (Hn | wa)) === fn && Du();
        }), f = null;
      else {
        var p;
        switch (wo(i)) {
          case Cn:
            p = ks;
            break;
          case ln:
            p = fr;
            break;
          case $a:
            p = ha;
            break;
          case Ro:
            p = Ci;
            break;
          default:
            p = ha;
            break;
        }
        f = YS(p, eE.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function eE(e, t) {
      if (rw(), dp = it, hm = U, (Fe & (Hn | wa)) !== fn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = zl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Co(e, e === hr ? dn : U);
      if (u === U)
        return null;
      var s = !To(e, u) && !bv(e, u) && !t, f = s ? QD(e, u) : gm(e, u);
      if (f !== Ml) {
        if (f === Wo) {
          var p = qf(e);
          p !== U && (u = p, f = HS(e, p));
        }
        if (f === ap) {
          var v = lp;
          throw qo(e, U), Hu(e, u), Pr(e, yt()), v;
        }
        if (f === kS)
          Hu(e, u);
        else {
          var m = !To(e, u), y = e.current.alternate;
          if (m && !HD(y)) {
            if (f = gm(e, u), f === Wo) {
              var R = qf(e);
              R !== U && (u = R, f = HS(e, R));
            }
            if (f === ap) {
              var E = lp;
              throw qo(e, U), Hu(e, u), Pr(e, yt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, AD(e, f, u);
        }
      }
      return Pr(e, yt()), e.callbackNode === a ? eE.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = op;
      if (Qt(e)) {
        var i = qo(e, t);
        i.flags |= wt, rx(e.containerInfo);
      }
      var u = gm(e, t);
      if (u !== Wo) {
        var s = $r;
        $r = a, s !== null && tE(s);
      }
      return u;
    }
    function tE(e) {
      $r === null ? $r = e : $r.push.apply($r, e);
    }
    function AD(e, t, a) {
      switch (t) {
        case Ml:
        case ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case Wo: {
          Ko(e, $r, Ll);
          break;
        }
        case sm: {
          if (Hu(e, a), Js(a) && // do not delay if we're inside an act() scope
          !mE()) {
            var i = MS + qC - yt();
            if (i > 10) {
              var u = Co(e, U);
              if (u !== U)
                break;
              var s = e.suspendedLanes;
              if (!pl(s, a)) {
                mr(), td(e, s);
                break;
              }
              e.timeoutHandle = zy(Ko.bind(null, e, $r, Ll), i);
              break;
            }
          }
          Ko(e, $r, Ll);
          break;
        }
        case ip: {
          if (Hu(e, a), _v(a))
            break;
          if (!mE()) {
            var f = Dv(e, a), p = f, v = yt() - p, m = n_(v) - v;
            if (m > 10) {
              e.timeoutHandle = zy(Ko.bind(null, e, $r, Ll), m);
              break;
            }
          }
          Ko(e, $r, Ll);
          break;
        }
        case XC: {
          Ko(e, $r, Ll);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function HD(e) {
      for (var t = e; ; ) {
        if (t.flags & po) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!te(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & po && v !== null) {
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
    function Hu(e, t) {
      t = uu(t, fm), t = uu(t, up), ed(e, t);
    }
    function nE(e) {
      if (aw(), (Fe & (Hn | wa)) !== fn)
        throw new Error("Should not already be working.");
      zl();
      var t = Co(e, U);
      if (!Zn(t, he))
        return Pr(e, yt()), null;
      var a = gm(e, t);
      if (e.tag !== wu && a === Wo) {
        var i = qf(e);
        i !== U && (t = i, a = HS(e, i));
      }
      if (a === ap) {
        var u = lp;
        throw qo(e, U), Hu(e, t), Pr(e, yt()), u;
      }
      if (a === kS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ko(e, $r, Ll), Pr(e, yt()), null;
    }
    function FD(e, t) {
      t !== U && (ou(e, De(t, he)), Pr(e, yt()), (Fe & (Hn | wa)) === fn && (sp(), Du()));
    }
    function FS(e, t) {
      var a = Fe;
      Fe |= WC;
      try {
        return e(t);
      } finally {
        Fe = a, Fe === fn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ri.isBatchingLegacy && (sp(), Z0());
      }
    }
    function jD(e, t, a, i, u) {
      var s = Ur(), f = An.transition;
      try {
        return An.transition = null, Yt(Cn), e(t, a, i, u);
      } finally {
        Yt(s), An.transition = f, Fe === fn && sp();
      }
    }
    function Nl(e) {
      Uu !== null && Uu.tag === wu && (Fe & (Hn | wa)) === fn && zl();
      var t = Fe;
      Fe |= WC;
      var a = An.transition, i = Ur();
      try {
        return An.transition = null, Yt(Cn), e ? e() : void 0;
      } finally {
        Yt(i), An.transition = a, Fe = t, (Fe & (Hn | wa)) === fn && Du();
      }
    }
    function rE() {
      return (Fe & (Hn | wa)) !== fn;
    }
    function ym(e, t) {
      er(OS, $i, e), $i = De($i, t);
    }
    function jS(e) {
      $i = OS.current, Jn(OS, e);
    }
    function qo(e, t) {
      e.finishedWork = null, e.finishedLanes = U;
      var a = e.timeoutHandle;
      if (a !== Uy && (e.timeoutHandle = Uy, pR(a)), Mt !== null)
        for (var i = Mt.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      hr = e;
      var s = Zo(e.current, null);
      return Mt = s, dn = $i = t, pn = Ml, lp = null, cm = U, up = U, fm = U, op = null, $r = null, Lx(), Xa.discardPendingWarnings(), s;
    }
    function aE(e, t) {
      do {
        var a = Mt;
        try {
          if (wh(), z1(), Bt(), bS.current = null, a === null || a.return === null) {
            pn = ap, lp = t, Mt = null;
            return;
          }
          if (_n && a.mode & ve && rm(a, !0), ai)
            if (al(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Rv(a, i, dn);
            } else
              zs(a, t, dn);
          sw(e, a.return, a, t, dn), oE(a);
        } catch (u) {
          t = u, Mt === a && a !== null ? (a = a.return, Mt = a) : a = Mt;
          continue;
        }
        return;
      } while (!0);
    }
    function iE() {
      var e = _S.current;
      return _S.current = Zh, e === null ? Zh : e;
    }
    function lE(e) {
      _S.current = e;
    }
    function VD() {
      MS = yt();
    }
    function pp(e) {
      cm = De(e, cm);
    }
    function BD() {
      pn === Ml && (pn = sm);
    }
    function VS() {
      (pn === Ml || pn === sm || pn === Wo) && (pn = ip), hr !== null && (Eo(cm) || Eo(up)) && Hu(hr, dn);
    }
    function $D(e) {
      pn !== ip && (pn = Wo), op === null ? op = [e] : op.push(e);
    }
    function PD() {
      return pn === Ml;
    }
    function gm(e, t) {
      var a = Fe;
      Fe |= Hn;
      var i = iE();
      if (hr !== e || dn !== t) {
        if (an) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vp(e, dn), u.clear()), nc(e, t);
        }
        Ll = ad(), qo(e, t);
      }
      aa(t);
      do
        try {
          YD();
          break;
        } catch (s) {
          aE(e, s);
        }
      while (!0);
      if (wh(), Fe = a, lE(i), Mt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return nu(), hr = null, dn = U, pn;
    }
    function YD() {
      for (; Mt !== null; )
        uE(Mt);
    }
    function QD(e, t) {
      var a = Fe;
      Fe |= Hn;
      var i = iE();
      if (hr !== e || dn !== t) {
        if (an) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vp(e, dn), u.clear()), nc(e, t);
        }
        Ll = ad(), sp(), qo(e, t);
      }
      aa(t);
      do
        try {
          ID();
          break;
        } catch (s) {
          aE(e, s);
        }
      while (!0);
      return wh(), lE(i), Fe = a, Mt !== null ? (mo(), Ml) : (nu(), hr = null, dn = U, pn);
    }
    function ID() {
      for (; Mt !== null && !bs(); )
        uE(Mt);
    }
    function uE(e) {
      var t = e.alternate;
      Ze(e);
      var a;
      (e.mode & ve) !== de ? (tS(e), a = BS(t, e, $i), rm(e, !0)) : a = BS(t, e, $i), Bt(), e.memoizedProps = e.pendingProps, a === null ? oE(e) : Mt = a, bS.current = null;
    }
    function oE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & or) === se) {
          Ze(t);
          var u = void 0;
          if ((t.mode & ve) === de ? u = MC(a, t, $i) : (tS(t), u = MC(a, t, $i), rm(t, !1)), Bt(), u !== null) {
            Mt = u;
            return;
          }
        } else {
          var s = Bw(a, t);
          if (s !== null) {
            s.flags &= vv, Mt = s;
            return;
          }
          if ((t.mode & ve) !== de) {
            rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= or, i.subtreeFlags = se, i.deletions = null;
          else {
            pn = kS, Mt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mt = v;
          return;
        }
        t = i, Mt = t;
      } while (t !== null);
      pn === Ml && (pn = XC);
    }
    function Ko(e, t, a) {
      var i = Ur(), u = An.transition;
      try {
        An.transition = null, Yt(Cn), GD(e, t, a, i);
      } finally {
        An.transition = u, Yt(i);
      }
      return null;
    }
    function GD(e, t, a, i) {
      do
        zl();
      while (Uu !== null);
      if (a_(), (Fe & (Hn | wa)) !== fn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ms(s), u === null)
        return Qf(), null;
      if (s === U && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = U, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = He;
      var f = De(u.lanes, u.childLanes);
      nd(e, f), e === hr && (hr = null, Mt = null, dn = U), ((u.subtreeFlags & Mr) !== se || (u.flags & Mr) !== se) && (Xo || (Xo = !0, zS = a, YS(ha, function() {
        return zl(), null;
      })));
      var p = (u.subtreeFlags & (Jl | Wn | Sn | Mr)) !== se, v = (u.flags & (Jl | Wn | Sn | Mr)) !== se;
      if (p || v) {
        var m = An.transition;
        An.transition = null;
        var y = Ur();
        Yt(Cn);
        var R = Fe;
        Fe |= wa, bS.current = null, Iw(e, u), iC(), lD(e, u, s), lR(e.containerInfo), e.current = u, xv(s), uD(u, e, s), tu(), yv(), Fe = R, Yt(y), An.transition = m;
      } else
        e.current = u, iC();
      var E = Xo;
      if (Xo ? (Xo = !1, Uu = e, cp = s) : (Qc = 0, vm = null), f = e.pendingLanes, f === U && (Yc = null), E || dE(e.current, !1), ja(u.stateNode, i), an && e.memoizedUpdaters.clear(), DD(), Pr(e, yt()), t !== null)
        for (var O = e.onRecoverableError, M = 0; M < t.length; M++) {
          var N = t[M], q = N.stack, ce = N.digest;
          O(N.value, {
            componentStack: q,
            digest: ce
          });
        }
      if (dm) {
        dm = !1;
        var ie = LS;
        throw LS = null, ie;
      }
      return Zn(cp, he) && e.tag !== wu && zl(), f = e.pendingLanes, Zn(f, he) ? (nw(), e === US ? fp++ : (fp = 0, US = e)) : fp = 0, Du(), Qf(), null;
    }
    function zl() {
      if (Uu !== null) {
        var e = wo(cp), t = iy($a, e), a = An.transition, i = Ur();
        try {
          return An.transition = null, Yt(t), XD();
        } finally {
          Yt(i), An.transition = a;
        }
      }
      return !1;
    }
    function WD(e) {
      NS.push(e), Xo || (Xo = !0, YS(ha, function() {
        return zl(), null;
      }));
    }
    function XD() {
      if (Uu === null)
        return !1;
      var e = zS;
      zS = null;
      var t = Uu, a = cp;
      if (Uu = null, cp = U, (Fe & (Hn | wa)) !== fn)
        throw new Error("Cannot flush passive effects while already rendering.");
      AS = !0, pm = !1, wv(a);
      var i = Fe;
      Fe |= wa, vD(t.current), cD(t, t.current, a, e);
      {
        var u = NS;
        NS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          qw(t, f);
        }
      }
      ho(), dE(t.current, !0), Fe = i, Du(), pm ? t === vm ? Qc++ : (Qc = 0, vm = t) : Qc = 0, AS = !1, pm = !1, Ti(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function sE(e) {
      return Yc !== null && Yc.has(e);
    }
    function qD(e) {
      Yc === null ? Yc = /* @__PURE__ */ new Set([e]) : Yc.add(e);
    }
    function KD(e) {
      dm || (dm = !0, LS = e);
    }
    var ZD = KD;
    function cE(e, t, a) {
      var i = Io(a, t), u = uC(e, i, he), s = bu(e, u, he), f = mr();
      s !== null && (vl(s, he, f), Pr(s, f));
    }
    function pt(e, t, a) {
      if (Pw(a), hp(!1), e.tag === le) {
        cE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === le) {
          cE(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sE(s)) {
            var f = Io(a, e), p = uS(i, f, he), v = bu(i, p, he), m = mr();
            v !== null && (vl(v, he, m), Pr(v, m));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function JD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = mr();
      td(e, a), o_(e), hr === e && pl(dn, a) && (pn === ip || pn === sm && Js(dn) && yt() - MS < qC ? qo(e, U) : fm = De(fm, a)), Pr(e, u);
    }
    function fE(e, t) {
      t === He && (t = ND(e));
      var a = mr(), i = Vr(e, t);
      i !== null && (vl(i, t, a), Pr(i, a));
    }
    function e_(e) {
      var t = e.memoizedState, a = He;
      t !== null && (a = t.retryLane), fE(e, a);
    }
    function t_(e, t) {
      var a = He, i;
      switch (e.tag) {
        case Ue:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case lt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), fE(e, a);
    }
    function n_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : kD(e / 1960) * 1960;
    }
    function r_() {
      if (fp > MD)
        throw fp = 0, US = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qc > LD && (Qc = 0, vm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function a_() {
      Xa.flushLegacyContextWarning(), Xa.flushPendingUnsafeLifecycleWarnings();
    }
    function dE(e, t) {
      Ze(e), Sm(e, Gn, RD), t && Sm(e, rl, xD), Sm(e, Gn, ED), t && Sm(e, rl, TD), Bt();
    }
    function Sm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== se ? i = i.child : ((i.flags & t) !== se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Cm = null;
    function pE(e) {
      {
        if ((Fe & Hn) !== fn || !(e.mode & _e))
          return;
        var t = e.tag;
        if (t !== nn && t !== le && t !== pe && t !== xe && t !== ze && t !== mt && t !== be)
          return;
        var a = Re(e) || "ReactComponent";
        if (Cm !== null) {
          if (Cm.has(a))
            return;
          Cm.add(a);
        } else
          Cm = /* @__PURE__ */ new Set([a]);
        var i = Ut;
        try {
          Ze(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ze(e) : Bt();
        }
      }
    }
    var BS;
    {
      var i_ = null;
      BS = function(e, t, a) {
        var i = EE(i_, t);
        try {
          return DC(e, t, a);
        } catch (s) {
          if (gx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (wh(), z1(), LC(e, t), EE(t, i), t.mode & ve && tS(t), nl(null, DC, null, e, t, a), Zm()) {
            var u = zf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vE = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function l_(e) {
      if (wr && !Jx())
        switch (e.tag) {
          case xe:
          case ze:
          case be: {
            var t = Mt && Re(Mt) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Re(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            vE || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vE = !0);
            break;
          }
        }
    }
    function vp(e, t) {
      if (an) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rd(e, i, t);
        });
      }
    }
    var PS = {};
    function YS(e, t) {
      {
        var a = ri.current;
        return a !== null ? (a.push(t), PS) : _s(e, t);
      }
    }
    function hE(e) {
      if (e !== PS)
        return mv(e);
    }
    function mE() {
      return ri.current !== null;
    }
    function u_(e) {
      {
        if (e.mode & _e) {
          if (!GC())
            return;
        } else if (!bD() || Fe !== fn || e.tag !== xe && e.tag !== ze && e.tag !== be)
          return;
        if (ri.current === null) {
          var t = Ut;
          try {
            Ze(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Re(e));
          } finally {
            t ? Ze(e) : Bt();
          }
        }
      }
    }
    function o_(e) {
      e.tag !== wu && GC() && ri.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function hp(e) {
      JC = e;
    }
    var Da = null, Ic = null, s_ = function(e) {
      Da = e;
    };
    function Gc(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return Gc(e);
    }
    function IS(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Gc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: jl,
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
    function yE(e, t) {
      {
        if (Da === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case xe: {
            (typeof i == "function" || s === bn) && (u = !0);
            break;
          }
          case ze: {
            (s === jl || s === bn) && (u = !0);
            break;
          }
          case mt:
          case be: {
            (s === Vl || s === bn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Da(a);
          if (f !== void 0 && f === Da(i))
            return !0;
        }
        return !1;
      }
    }
    function gE(e) {
      {
        if (Da === null || typeof WeakSet != "function")
          return;
        Ic === null && (Ic = /* @__PURE__ */ new WeakSet()), Ic.add(e);
      }
    }
    var c_ = function(e, t) {
      {
        if (Da === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        zl(), Nl(function() {
          GS(e.current, i, a);
        });
      }
    }, f_ = function(e, t) {
      {
        if (e.context !== la)
          return;
        zl(), Nl(function() {
          mp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case xe:
          case be:
          case pe:
            v = p;
            break;
          case ze:
            v = p.render;
            break;
        }
        if (Da === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = Da(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === pe ? y = !0 : m = !0));
        }
        if (Ic !== null && (Ic.has(e) || i !== null && Ic.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = Vr(e, he);
          E !== null && vn(E, e, he, it);
        }
        u !== null && !y && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var d_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case xe:
          case be:
          case pe:
            p = f;
            break;
          case ze:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? p_(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function p_(e, t) {
      {
        var a = v_(e, t);
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
    function v_(e, t) {
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
    var XS;
    {
      XS = !1;
      try {
        var SE = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function h_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = se, this.subtreeFlags = se, this.deletions = null, this.lanes = U, this.childLanes = U, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ua = function(e, t, a, i) {
      return new h_(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function m_(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function y_(e) {
      if (typeof e == "function")
        return qS(e) ? pe : xe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === jl)
          return ze;
        if (t === Vl)
          return mt;
      }
      return nn;
    }
    function Zo(e, t) {
      var a = e.alternate;
      a === null ? (a = ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = se, a.subtreeFlags = se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & rn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case nn:
        case xe:
        case be:
          a.type = Gc(e.type);
          break;
        case pe:
          a.type = QS(e.type);
          break;
        case ze:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function g_(e, t) {
      e.flags &= rn | st;
      var a = e.alternate;
      if (a === null)
        e.childLanes = U, e.lanes = t, e.child = null, e.subtreeFlags = se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = se, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function S_(e, t, a) {
      var i;
      return e === yh ? (i = _e, t === !0 && (i |= gt, i |= Nr)) : i = de, an && (i |= ve), ua(le, null, null, i);
    }
    function KS(e, t, a, i, u, s) {
      var f = nn, p = e;
      if (typeof e == "function")
        qS(e) ? (f = pe, p = QS(p)) : p = Gc(p);
      else if (typeof e == "string")
        f = ue;
      else
        e:
          switch (e) {
            case ka:
              return Fu(a.children, u, s, t);
            case Fl:
              f = ut, u |= gt, (u & _e) !== de && (u |= Nr);
              break;
            case $u:
              return C_(a, u, s, t);
            case da:
              return E_(a, u, s, t);
            case Pu:
              return T_(a, u, s, t);
            case tf:
              return CE(a, u, s, t);
            case wp:
            case Rp:
            case Om:
            case Mm:
            case xp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Jc:
                    f = hn;
                    break e;
                  case ef:
                    f = Ir;
                    break e;
                  case jl:
                    f = ze, p = IS(p);
                    break e;
                  case Vl:
                    f = mt;
                    break e;
                  case bn:
                    f = Dn, p = null;
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
      var y = ua(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = KS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Fu(e, t, a, i) {
      var u = ua(tt, e, i, t);
      return u.lanes = a, u;
    }
    function C_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ua(ot, e, i, t | ve);
      return u.elementType = $u, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function E_(e, t, a, i) {
      var u = ua(Ue, e, i, t);
      return u.elementType = da, u.lanes = a, u;
    }
    function T_(e, t, a, i) {
      var u = ua(lt, e, i, t);
      return u.elementType = Pu, u.lanes = a, u;
    }
    function CE(e, t, a, i) {
      var u = ua(Ae, e, i, t);
      u.elementType = tf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function JS(e, t, a) {
      var i = ua(ke, e, null, t);
      return i.lanes = a, i;
    }
    function R_() {
      var e = ua(ue, null, null, de);
      return e.elementType = "DELETED", e;
    }
    function x_(e) {
      var t = ua(Nt, null, null, de);
      return t.stateNode = e, t;
    }
    function e0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ua(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function EE(e, t) {
      return e === null && (e = ua(nn, null, null, de)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function w_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Uy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = He, this.eventTimes = tc(U), this.expirationTimes = tc(it), this.pendingLanes = U, this.suspendedLanes = U, this.pingedLanes = U, this.expiredLanes = U, this.mutableReadLanes = U, this.finishedLanes = U, this.entangledLanes = U, this.entanglements = tc(U), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ft; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case yh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case wu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function TE(e, t, a, i, u, s, f, p, v, m) {
      var y = new w_(e, t, a, p, v), R = S_(t, s);
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
      return og(R), y;
    }
    var t0 = "18.2.0";
    function D_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Al(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Kr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var n0, r0;
    n0 = !1, r0 = {};
    function RE(e) {
      if (!e)
        return la;
      var t = br(e), a = sx(t);
      if (t.tag === pe) {
        var i = t.type;
        if (Ui(i))
          return X0(t, i, a);
      }
      return a;
    }
    function __(e, t) {
      {
        var a = br(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Lr(a);
        if (u === null)
          return null;
        if (u.mode & gt) {
          var s = Re(a) || "Component";
          if (!r0[s]) {
            r0[s] = !0;
            var f = Ut;
            try {
              Ze(u), a.mode & gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ze(f) : Bt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function xE(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return TE(e, t, v, m, a, i, u, s, f);
    }
    function wE(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = TE(a, i, y, e, u, s, f, p, v);
      R.context = RE(null);
      var E = R.current, O = mr(), M = Au(E), N = kl(O, M);
      return N.callback = t ?? null, bu(E, N, M), zD(R, M, O), R;
    }
    function mp(e, t, a, i) {
      gv(t, e);
      var u = t.current, s = mr(), f = Au(u);
      il(f);
      var p = RE(a);
      t.context === null ? t.context = p : t.pendingContext = p, wr && Ut !== null && !n0 && (n0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Re(Ut) || "Unknown"));
      var v = kl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = bu(u, v, f);
      return m !== null && (vn(m, u, f, s), Oh(m, u, f)), f;
    }
    function Em(e) {
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
    function b_(e) {
      switch (e.tag) {
        case le: {
          var t = e.stateNode;
          if (Qt(t)) {
            var a = ty(t);
            FD(t, a);
          }
          break;
        }
        case Ue: {
          Nl(function() {
            var u = Vr(e, he);
            if (u !== null) {
              var s = mr();
              vn(u, e, he, s);
            }
          });
          var i = he;
          a0(e, i);
          break;
        }
      }
    }
    function DE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ov(a.retryLane, t));
    }
    function a0(e, t) {
      DE(e, t);
      var a = e.alternate;
      a && DE(a, t);
    }
    function k_(e) {
      if (e.tag === Ue) {
        var t = ru, a = Vr(e, t);
        if (a !== null) {
          var i = mr();
          vn(a, e, t, i);
        }
        a0(e, t);
      }
    }
    function O_(e) {
      if (e.tag === Ue) {
        var t = Au(e), a = Vr(e, t);
        if (a !== null) {
          var i = mr();
          vn(a, e, t, i);
        }
        a0(e, t);
      }
    }
    function _E(e) {
      var t = hv(e);
      return t === null ? null : t.stateNode;
    }
    var bE = function(e) {
      return null;
    };
    function M_(e) {
      return bE(e);
    }
    var kE = function(e) {
      return !1;
    };
    function L_(e) {
      return kE(e);
    }
    var OE = null, ME = null, LE = null, NE = null, zE = null, UE = null, AE = null, HE = null, FE = null;
    {
      var jE = function(e, t, a) {
        var i = t[a], u = Wt(e) ? e.slice() : Me({}, e);
        return a + 1 === t.length ? (Wt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = jE(e[i], t, a + 1), u);
      }, VE = function(e, t) {
        return jE(e, t, 0);
      }, BE = function(e, t, a, i) {
        var u = t[i], s = Wt(e) ? e.slice() : Me({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Wt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = BE(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $E = function(e, t, a) {
        if (t.length !== a.length) {
          Be("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Be("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BE(e, t, a, 0);
      }, PE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Wt(e) ? e.slice() : Me({}, e);
        return s[u] = PE(e[u], t, a + 1, i), s;
      }, YE = function(e, t, a) {
        return PE(e, t, 0, a);
      }, i0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      OE = function(e, t, a, i) {
        var u = i0(e, t);
        if (u !== null) {
          var s = YE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Me({}, e.memoizedProps);
          var f = Vr(e, he);
          f !== null && vn(f, e, he, it);
        }
      }, ME = function(e, t, a) {
        var i = i0(e, t);
        if (i !== null) {
          var u = VE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Me({}, e.memoizedProps);
          var s = Vr(e, he);
          s !== null && vn(s, e, he, it);
        }
      }, LE = function(e, t, a, i) {
        var u = i0(e, t);
        if (u !== null) {
          var s = $E(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Me({}, e.memoizedProps);
          var f = Vr(e, he);
          f !== null && vn(f, e, he, it);
        }
      }, NE = function(e, t, a) {
        e.pendingProps = YE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Vr(e, he);
        i !== null && vn(i, e, he, it);
      }, zE = function(e, t) {
        e.pendingProps = VE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Vr(e, he);
        a !== null && vn(a, e, he, it);
      }, UE = function(e, t, a) {
        e.pendingProps = $E(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Vr(e, he);
        i !== null && vn(i, e, he, it);
      }, AE = function(e) {
        var t = Vr(e, he);
        t !== null && vn(t, e, he, it);
      }, HE = function(e) {
        bE = e;
      }, FE = function(e) {
        kE = e;
      };
    }
    function N_(e) {
      var t = Lr(e);
      return t === null ? null : t.stateNode;
    }
    function z_(e) {
      return null;
    }
    function U_() {
      return Ut;
    }
    function A_(e) {
      var t = e.findFiberByHostInstance, a = x.ReactCurrentDispatcher;
      return Pf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: OE,
        overrideHookStateDeletePath: ME,
        overrideHookStateRenamePath: LE,
        overrideProps: NE,
        overridePropsDeletePath: zE,
        overridePropsRenamePath: UE,
        setErrorHandler: HE,
        setSuspenseHandler: FE,
        scheduleUpdate: AE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: N_,
        findFiberByHostInstance: t || z_,
        // React Refresh
        findHostInstancesForRefresh: d_,
        scheduleRefresh: c_,
        scheduleRoot: f_,
        setRefreshHandler: s_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: U_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: t0
      });
    }
    var QE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function l0(e) {
      this._internalRoot = e;
    }
    Tm.prototype.render = l0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Rm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== At) {
          var i = _E(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      mp(e, t, null, null);
    }, Tm.prototype.unmount = l0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rE() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Nl(function() {
          mp(null, e, null, null);
        }), Y0(t);
      }
    };
    function H_(e, t) {
      if (!Rm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IE(e);
      var a = !1, i = !1, u = "", s = QE;
      t != null && (t.hydrate ? Be("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Hl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = xE(e, yh, null, a, i, u, s);
      ch(f.current, e);
      var p = e.nodeType === At ? e.parentNode : e;
      return xd(p), new l0(f);
    }
    function Tm(e) {
      this._internalRoot = e;
    }
    function F_(e) {
      e && Fv(e);
    }
    Tm.prototype.unstable_scheduleHydration = F_;
    function j_(e, t, a) {
      if (!Rm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IE(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = wE(t, null, e, yh, i, s, f, p, v);
      if (ch(m.current, e), xd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Gx(m, R);
        }
      return new Tm(m);
    }
    function Rm(e) {
      return !!(e && (e.nodeType === Yn || e.nodeType === ta || e.nodeType === qi || !Ke));
    }
    function yp(e) {
      return !!(e && (e.nodeType === Yn || e.nodeType === ta || e.nodeType === qi || e.nodeType === At && e.nodeValue === " react-mount-point-unstable "));
    }
    function IE(e) {
      e.nodeType === Yn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ud(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var V_ = x.ReactCurrentOwner, GE;
    GE = function(e) {
      if (e._reactRootContainer && e.nodeType !== At) {
        var t = _E(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = u0(e), u = !!(i && Ru(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function u0(e) {
      return e ? e.nodeType === ta ? e.documentElement : e.firstChild : null;
    }
    function WE() {
    }
    function B_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = Em(f);
            s.call(E);
          };
        }
        var f = wE(
          t,
          i,
          e,
          wu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WE
        );
        e._reactRootContainer = f, ch(f.current, e);
        var p = e.nodeType === At ? e.parentNode : e;
        return xd(p), Nl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Em(y);
            m.call(E);
          };
        }
        var y = xE(
          e,
          wu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WE
        );
        e._reactRootContainer = y, ch(y.current, e);
        var R = e.nodeType === At ? e.parentNode : e;
        return xd(R), Nl(function() {
          mp(t, y, a, i);
        }), y;
      }
    }
    function $_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function xm(e, t, a, i, u) {
      GE(a), $_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = B_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Em(f);
            p.call(v);
          };
        }
        mp(t, f, e, u);
      }
      return Em(f);
    }
    function P_(e) {
      {
        var t = V_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yn ? e : __(e, "findDOMNode");
    }
    function Y_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ud(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return xm(null, e, t, !0, a);
    }
    function Q_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ud(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return xm(null, e, t, !1, a);
    }
    function I_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !fo(e))
        throw new Error("parentComponent must be a valid React Component");
      return xm(e, t, a, !1, i);
    }
    function G_(e) {
      if (!yp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ud(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = u0(e), i = a && !Ru(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Nl(function() {
          xm(null, null, e, !1, function() {
            e._reactRootContainer = null, Y0(e);
          });
        }), !0;
      } else {
        {
          var u = u0(e), s = !!(u && Ru(u)), f = e.nodeType === Yn && yp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    J(b_), Lv(k_), _o(O_), ld(Ur), zv(xo), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), dv(qT), Ts(FS, jD, Nl);
    function W_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Rm(t))
        throw new Error("Target container is not a DOM element.");
      return D_(e, t, null, a);
    }
    function X_(e, t, a, i) {
      return I_(e, t, a, i);
    }
    var o0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ru, xc, fh, Es, oo, FS]
    };
    function q_(e, t) {
      return o0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), H_(e, t);
    }
    function K_(e, t, a) {
      return o0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), j_(e, t, a);
    }
    function Z_(e) {
      return rE() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Nl(e);
    }
    var J_ = A_({
      findFiberByHostInstance: Ho,
      bundleType: 1,
      version: t0,
      rendererPackageName: "react-dom"
    });
    if (!J_ && mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XE = window.location.protocol;
      /^(https?|file):$/.test(XE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0, Qr.createPortal = W_, Qr.createRoot = q_, Qr.findDOMNode = P_, Qr.flushSync = Z_, Qr.hydrate = Y_, Qr.hydrateRoot = K_, Qr.render = Q_, Qr.unmountComponentAtNode = G_, Qr.unstable_batchedUpdates = FS, Qr.unstable_renderSubtreeIntoContainer = X_, Qr.version = t0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qr;
}
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (b) {
      console.error(b);
    }
  }
}
process.env.NODE_ENV === "production" ? (sT(), d0.exports = ab()) : d0.exports = ib();
var lb = d0.exports;
const QO = /* @__PURE__ */ p0(lb);
function ub() {
  this.__data__ = [], this.size = 0;
}
var ob = ub;
function sb(b, H) {
  return b === H || b !== b && H !== H;
}
var cb = sb, fb = cb;
function db(b, H) {
  for (var x = b.length; x--; )
    if (fb(b[x][0], H))
      return x;
  return -1;
}
var _m = db, pb = _m, vb = Array.prototype, hb = vb.splice;
function mb(b) {
  var H = this.__data__, x = pb(H, b);
  if (x < 0)
    return !1;
  var Ve = H.length - 1;
  return x == Ve ? H.pop() : hb.call(H, x, 1), --this.size, !0;
}
var yb = mb, gb = _m;
function Sb(b) {
  var H = this.__data__, x = gb(H, b);
  return x < 0 ? void 0 : H[x][1];
}
var Cb = Sb, Eb = _m;
function Tb(b) {
  return Eb(this.__data__, b) > -1;
}
var Rb = Tb, xb = _m;
function wb(b, H) {
  var x = this.__data__, Ve = xb(x, b);
  return Ve < 0 ? (++this.size, x.push([b, H])) : x[Ve][1] = H, this;
}
var Db = wb, _b = ob, bb = yb, kb = Cb, Ob = Rb, Mb = Db;
function Xc(b) {
  var H = -1, x = b == null ? 0 : b.length;
  for (this.clear(); ++H < x; ) {
    var Ve = b[H];
    this.set(Ve[0], Ve[1]);
  }
}
Xc.prototype.clear = _b;
Xc.prototype.delete = bb;
Xc.prototype.get = kb;
Xc.prototype.has = Ob;
Xc.prototype.set = Mb;
var Lb = Xc, Nb = typeof wm == "object" && wm && wm.Object === Object && wm, zb = Nb, Ub = zb, Ab = typeof self == "object" && self && self.Object === Object && self, Hb = Ub || Ab || Function("return this")(), v0 = Hb, Fb = v0, jb = Fb.Symbol, cT = jb, tT = cT, fT = Object.prototype, Vb = fT.hasOwnProperty, Bb = fT.toString, Sp = tT ? tT.toStringTag : void 0;
function $b(b) {
  var H = Vb.call(b, Sp), x = b[Sp];
  try {
    b[Sp] = void 0;
    var Ve = !0;
  } catch {
  }
  var Lt = Bb.call(b);
  return Ve && (H ? b[Sp] = x : delete b[Sp]), Lt;
}
var Pb = $b, Yb = Object.prototype, Qb = Yb.toString;
function Ib(b) {
  return Qb.call(b);
}
var Gb = Ib, nT = cT, Wb = Pb, Xb = Gb, qb = "[object Null]", Kb = "[object Undefined]", rT = nT ? nT.toStringTag : void 0;
function Zb(b) {
  return b == null ? b === void 0 ? Kb : qb : rT && rT in Object(b) ? Wb(b) : Xb(b);
}
var Jb = Zb;
function ek(b) {
  var H = typeof b;
  return b != null && (H == "object" || H == "function");
}
var dT = ek, tk = Jb, nk = dT, rk = "[object AsyncFunction]", ak = "[object Function]", ik = "[object GeneratorFunction]", lk = "[object Proxy]";
function uk(b) {
  if (!nk(b))
    return !1;
  var H = tk(b);
  return H == ak || H == ik || H == rk || H == lk;
}
var pT = uk;
const IO = /* @__PURE__ */ p0(pT);
var ok = v0, sk = ok["__core-js_shared__"], ck = sk, f0 = ck, aT = function() {
  var b = /[^.]+$/.exec(f0 && f0.keys && f0.keys.IE_PROTO || "");
  return b ? "Symbol(src)_1." + b : "";
}();
function fk(b) {
  return !!aT && aT in b;
}
var dk = fk, pk = Function.prototype, vk = pk.toString;
function hk(b) {
  if (b != null) {
    try {
      return vk.call(b);
    } catch {
    }
    try {
      return b + "";
    } catch {
    }
  }
  return "";
}
var mk = hk, yk = pT, gk = dk, Sk = dT, Ck = mk, Ek = /[\\^$.*+?()[\]{}|]/g, Tk = /^\[object .+?Constructor\]$/, Rk = Function.prototype, xk = Object.prototype, wk = Rk.toString, Dk = xk.hasOwnProperty, _k = RegExp(
  "^" + wk.call(Dk).replace(Ek, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bk(b) {
  if (!Sk(b) || gk(b))
    return !1;
  var H = yk(b) ? _k : Tk;
  return H.test(Ck(b));
}
var kk = bk;
function Ok(b, H) {
  return b == null ? void 0 : b[H];
}
var Mk = Ok, Lk = kk, Nk = Mk;
function zk(b, H) {
  var x = Nk(b, H);
  return Lk(x) ? x : void 0;
}
var vT = zk, Uk = vT, Ak = v0, Hk = Uk(Ak, "Map"), Fk = Hk, jk = vT, Vk = jk(Object, "create"), bm = Vk, iT = bm;
function Bk() {
  this.__data__ = iT ? iT(null) : {}, this.size = 0;
}
var $k = Bk;
function Pk(b) {
  var H = this.has(b) && delete this.__data__[b];
  return this.size -= H ? 1 : 0, H;
}
var Yk = Pk, Qk = bm, Ik = "__lodash_hash_undefined__", Gk = Object.prototype, Wk = Gk.hasOwnProperty;
function Xk(b) {
  var H = this.__data__;
  if (Qk) {
    var x = H[b];
    return x === Ik ? void 0 : x;
  }
  return Wk.call(H, b) ? H[b] : void 0;
}
var qk = Xk, Kk = bm, Zk = Object.prototype, Jk = Zk.hasOwnProperty;
function eO(b) {
  var H = this.__data__;
  return Kk ? H[b] !== void 0 : Jk.call(H, b);
}
var tO = eO, nO = bm, rO = "__lodash_hash_undefined__";
function aO(b, H) {
  var x = this.__data__;
  return this.size += this.has(b) ? 0 : 1, x[b] = nO && H === void 0 ? rO : H, this;
}
var iO = aO, lO = $k, uO = Yk, oO = qk, sO = tO, cO = iO;
function qc(b) {
  var H = -1, x = b == null ? 0 : b.length;
  for (this.clear(); ++H < x; ) {
    var Ve = b[H];
    this.set(Ve[0], Ve[1]);
  }
}
qc.prototype.clear = lO;
qc.prototype.delete = uO;
qc.prototype.get = oO;
qc.prototype.has = sO;
qc.prototype.set = cO;
var fO = qc, lT = fO, dO = Lb, pO = Fk;
function vO() {
  this.size = 0, this.__data__ = {
    hash: new lT(),
    map: new (pO || dO)(),
    string: new lT()
  };
}
var hO = vO;
function mO(b) {
  var H = typeof b;
  return H == "string" || H == "number" || H == "symbol" || H == "boolean" ? b !== "__proto__" : b === null;
}
var yO = mO, gO = yO;
function SO(b, H) {
  var x = b.__data__;
  return gO(H) ? x[typeof H == "string" ? "string" : "hash"] : x.map;
}
var km = SO, CO = km;
function EO(b) {
  var H = CO(this, b).delete(b);
  return this.size -= H ? 1 : 0, H;
}
var TO = EO, RO = km;
function xO(b) {
  return RO(this, b).get(b);
}
var wO = xO, DO = km;
function _O(b) {
  return DO(this, b).has(b);
}
var bO = _O, kO = km;
function OO(b, H) {
  var x = kO(this, b), Ve = x.size;
  return x.set(b, H), this.size += x.size == Ve ? 0 : 1, this;
}
var MO = OO, LO = hO, NO = TO, zO = wO, UO = bO, AO = MO;
function Kc(b) {
  var H = -1, x = b == null ? 0 : b.length;
  for (this.clear(); ++H < x; ) {
    var Ve = b[H];
    this.set(Ve[0], Ve[1]);
  }
}
Kc.prototype.clear = LO;
Kc.prototype.delete = NO;
Kc.prototype.get = zO;
Kc.prototype.has = UO;
Kc.prototype.set = AO;
var HO = Kc, hT = HO, FO = "Expected a function";
function h0(b, H) {
  if (typeof b != "function" || H != null && typeof H != "function")
    throw new TypeError(FO);
  var x = function() {
    var Ve = arguments, Lt = H ? H.apply(this, Ve) : Ve[0], Be = x.cache;
    if (Be.has(Lt))
      return Be.get(Lt);
    var S = b.apply(this, Ve);
    return x.cache = Be.set(Lt, S) || Be, S;
  };
  return x.cache = new (h0.Cache || hT)(), x;
}
h0.Cache = hT;
var jO = h0;
const GO = /* @__PURE__ */ p0(jO);
export {
  QO as R,
  Jb as _,
  v0 as a,
  IO as b,
  cT as c,
  Lb as d,
  cb as e,
  Fk as f,
  HO as g,
  zb as h,
  dT as i,
  pT as j,
  vT as k,
  mk as l,
  jO as m,
  GO as n,
  lb as r
};
