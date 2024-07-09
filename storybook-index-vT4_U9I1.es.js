import { g as Ok } from "./storybook-_commonjsHelpers-CT_km90n.es.js";
import { r as YE } from "./storybook-index-BmAYD2Ot.es.js";
var r0 = { exports: {} }, $r = {}, Em = { exports: {} }, t0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FE;
function Nk() {
  return FE || (FE = 1, function(ae) {
    function Ve(Y, me) {
      var q = Y.length;
      Y.push(me);
      e:
        for (; 0 < q; ) {
          var Ie = q - 1 >>> 1, Xe = Y[Ie];
          if (0 < Hn(Xe, me))
            Y[Ie] = me, Y[q] = Xe, q = Ie;
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
      var me = Y[0], q = Y.pop();
      if (q !== me) {
        Y[0] = q;
        e:
          for (var Ie = 0, Xe = Y.length, jn = Xe >>> 1; Ie < jn; ) {
            var ar = 2 * (Ie + 1) - 1, ai = Y[ar], wn = ar + 1, ii = Y[wn];
            if (0 > Hn(ai, q))
              wn < Xe && 0 > Hn(ii, ai) ? (Y[Ie] = ii, Y[wn] = q, Ie = wn) : (Y[Ie] = ai, Y[ar] = q, Ie = ar);
            else if (wn < Xe && 0 > Hn(ii, q))
              Y[Ie] = ii, Y[wn] = q, Ie = wn;
            else
              break e;
          }
      }
      return me;
    }
    function Hn(Y, me) {
      var q = Y.sortIndex - me.sortIndex;
      return q !== 0 ? q : Y.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Je = performance;
      ae.unstable_now = function() {
        return Je.now();
      };
    } else {
      var S = Date, Fn = S.now();
      ae.unstable_now = function() {
        return S.now() - Fn;
      };
    }
    var Re = [], de = [], en = 1, ie = null, he = 3, le = !1, be = !1, et = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Ir = typeof clearTimeout == "function" ? clearTimeout : null, pn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ne(Y) {
      for (var me = N(de); me !== null; ) {
        if (me.callback === null)
          gr(de);
        else if (me.startTime <= Y)
          gr(de), me.sortIndex = me.expirationTime, Ve(Re, me);
        else
          break;
        me = N(de);
      }
    }
    function ut(Y) {
      if (et = !1, Ne(Y), !be)
        if (N(Re) !== null)
          be = !0, Ct(ze);
        else {
          var me = N(de);
          me !== null && Cr(ut, me.startTime - Y);
        }
    }
    function ze(Y, me) {
      be = !1, et && (et = !1, Ir(xn), xn = -1), le = !0;
      var q = he;
      try {
        for (Ne(me), ie = N(Re); ie !== null && (!(ie.expirationTime > me) || Y && !it()); ) {
          var Ie = ie.callback;
          if (typeof Ie == "function") {
            ie.callback = null, he = ie.priorityLevel;
            var Xe = Ie(ie.expirationTime <= me);
            me = ae.unstable_now(), typeof Xe == "function" ? ie.callback = Xe : ie === N(Re) && gr(Re), Ne(me);
          } else
            gr(Re);
          ie = N(Re);
        }
        if (ie !== null)
          var jn = !0;
        else {
          var ar = N(de);
          ar !== null && Cr(ut, ar.startTime - me), jn = !1;
        }
        return jn;
      } finally {
        ie = null, he = q, le = !1;
      }
    }
    var ht = !1, ke = null, xn = -1, rr = 5, Lt = -1;
    function it() {
      return !(ae.unstable_now() - Lt < rr);
    }
    function Vn() {
      if (ke !== null) {
        var Y = ae.unstable_now();
        Lt = Y;
        var me = !0;
        try {
          me = ke(!0, Y);
        } finally {
          me ? Ue() : (ht = !1, ke = null);
        }
      } else
        ht = !1;
    }
    var Ue;
    if (typeof pn == "function")
      Ue = function() {
        pn(Vn);
      };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel(), Sr = We.port2;
      We.port1.onmessage = Vn, Ue = function() {
        Sr.postMessage(null);
      };
    } else
      Ue = function() {
        lt(Vn, 0);
      };
    function Ct(Y) {
      ke = Y, ht || (ht = !0, Ue());
    }
    function Cr(Y, me) {
      xn = lt(function() {
        Y(ae.unstable_now());
      }, me);
    }
    ae.unstable_IdlePriority = 5, ae.unstable_ImmediatePriority = 1, ae.unstable_LowPriority = 4, ae.unstable_NormalPriority = 3, ae.unstable_Profiling = null, ae.unstable_UserBlockingPriority = 2, ae.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, ae.unstable_continueExecution = function() {
      be || le || (be = !0, Ct(ze));
    }, ae.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : rr = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, ae.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, ae.unstable_getFirstCallbackNode = function() {
      return N(Re);
    }, ae.unstable_next = function(Y) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = he;
      }
      var q = he;
      he = me;
      try {
        return Y();
      } finally {
        he = q;
      }
    }, ae.unstable_pauseExecution = function() {
    }, ae.unstable_requestPaint = function() {
    }, ae.unstable_runWithPriority = function(Y, me) {
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
      var q = he;
      he = Y;
      try {
        return me();
      } finally {
        he = q;
      }
    }, ae.unstable_scheduleCallback = function(Y, me, q) {
      var Ie = ae.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? Ie + q : Ie) : q = Ie, Y) {
        case 1:
          var Xe = -1;
          break;
        case 2:
          Xe = 250;
          break;
        case 5:
          Xe = 1073741823;
          break;
        case 4:
          Xe = 1e4;
          break;
        default:
          Xe = 5e3;
      }
      return Xe = q + Xe, Y = { id: en++, callback: me, priorityLevel: Y, startTime: q, expirationTime: Xe, sortIndex: -1 }, q > Ie ? (Y.sortIndex = q, Ve(de, Y), N(Re) === null && Y === N(de) && (et ? (Ir(xn), xn = -1) : et = !0, Cr(ut, q - Ie))) : (Y.sortIndex = Xe, Ve(Re, Y), be || le || (be = !0, Ct(ze))), Y;
    }, ae.unstable_shouldYield = it, ae.unstable_wrapCallback = function(Y) {
      var me = he;
      return function() {
        var q = he;
        he = me;
        try {
          return Y.apply(this, arguments);
        } finally {
          he = q;
        }
      };
    };
  }(t0)), t0;
}
var n0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VE;
function zk() {
  return VE || (VE = 1, function(ae) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Ve = !1, N = !1, gr = 5;
      function Hn($, ce) {
        var _e = $.length;
        $.push(ce), Fn($, ce, _e);
      }
      function Je($) {
        return $.length === 0 ? null : $[0];
      }
      function S($) {
        if ($.length === 0)
          return null;
        var ce = $[0], _e = $.pop();
        return _e !== ce && ($[0] = _e, Re($, _e, 0)), ce;
      }
      function Fn($, ce, _e) {
        for (var tt = _e; tt > 0; ) {
          var kt = tt - 1 >>> 1, hn = $[kt];
          if (de(hn, ce) > 0)
            $[kt] = ce, $[tt] = hn, tt = kt;
          else
            return;
        }
      }
      function Re($, ce, _e) {
        for (var tt = _e, kt = $.length, hn = kt >>> 1; tt < hn; ) {
          var Ft = (tt + 1) * 2 - 1, Rr = $[Ft], Et = Ft + 1, fa = $[Et];
          if (de(Rr, ce) < 0)
            Et < kt && de(fa, Rr) < 0 ? ($[tt] = fa, $[Et] = ce, tt = Et) : ($[tt] = Rr, $[Ft] = ce, tt = Ft);
          else if (Et < kt && de(fa, ce) < 0)
            $[tt] = fa, $[Et] = ce, tt = Et;
          else
            return;
        }
      }
      function de($, ce) {
        var _e = $.sortIndex - ce.sortIndex;
        return _e !== 0 ? _e : $.id - ce.id;
      }
      var en = 1, ie = 2, he = 3, le = 4, be = 5;
      function et($, ce) {
      }
      var lt = typeof performance == "object" && typeof performance.now == "function";
      if (lt) {
        var Ir = performance;
        ae.unstable_now = function() {
          return Ir.now();
        };
      } else {
        var pn = Date, Ne = pn.now();
        ae.unstable_now = function() {
          return pn.now() - Ne;
        };
      }
      var ut = 1073741823, ze = -1, ht = 250, ke = 5e3, xn = 1e4, rr = ut, Lt = [], it = [], Vn = 1, Ue = null, We = he, Sr = !1, Ct = !1, Cr = !1, Y = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ie($) {
        for (var ce = Je(it); ce !== null; ) {
          if (ce.callback === null)
            S(it);
          else if (ce.startTime <= $)
            S(it), ce.sortIndex = ce.expirationTime, Hn(Lt, ce);
          else
            return;
          ce = Je(it);
        }
      }
      function Xe($) {
        if (Cr = !1, Ie($), !Ct)
          if (Je(Lt) !== null)
            Ct = !0, oi(jn);
          else {
            var ce = Je(it);
            ce !== null && Pn(Xe, ce.startTime - $);
          }
      }
      function jn($, ce) {
        Ct = !1, Cr && (Cr = !1, qr()), Sr = !0;
        var _e = We;
        try {
          var tt;
          if (!N)
            return ar($, ce);
        } finally {
          Ue = null, We = _e, Sr = !1;
        }
      }
      function ar($, ce) {
        var _e = ce;
        for (Ie(_e), Ue = Je(Lt); Ue !== null && !Ve && !(Ue.expirationTime > _e && (!$ || Al())); ) {
          var tt = Ue.callback;
          if (typeof tt == "function") {
            Ue.callback = null, We = Ue.priorityLevel;
            var kt = Ue.expirationTime <= _e, hn = tt(kt);
            _e = ae.unstable_now(), typeof hn == "function" ? Ue.callback = hn : Ue === Je(Lt) && S(Lt), Ie(_e);
          } else
            S(Lt);
          Ue = Je(Lt);
        }
        if (Ue !== null)
          return !0;
        var Ft = Je(it);
        return Ft !== null && Pn(Xe, Ft.startTime - _e), !1;
      }
      function ai($, ce) {
        switch ($) {
          case en:
          case ie:
          case he:
          case le:
          case be:
            break;
          default:
            $ = he;
        }
        var _e = We;
        We = $;
        try {
          return ce();
        } finally {
          We = _e;
        }
      }
      function wn($) {
        var ce;
        switch (We) {
          case en:
          case ie:
          case he:
            ce = he;
            break;
          default:
            ce = We;
            break;
        }
        var _e = We;
        We = ce;
        try {
          return $();
        } finally {
          We = _e;
        }
      }
      function ii($) {
        var ce = We;
        return function() {
          var _e = We;
          We = ce;
          try {
            return $.apply(this, arguments);
          } finally {
            We = _e;
          }
        };
      }
      function Gr($, ce, _e) {
        var tt = ae.unstable_now(), kt;
        if (typeof _e == "object" && _e !== null) {
          var hn = _e.delay;
          typeof hn == "number" && hn > 0 ? kt = tt + hn : kt = tt;
        } else
          kt = tt;
        var Ft;
        switch ($) {
          case en:
            Ft = ze;
            break;
          case ie:
            Ft = ht;
            break;
          case be:
            Ft = rr;
            break;
          case le:
            Ft = xn;
            break;
          case he:
          default:
            Ft = ke;
            break;
        }
        var Rr = kt + Ft, Et = {
          id: Vn++,
          callback: ce,
          priorityLevel: $,
          startTime: kt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return kt > tt ? (Et.sortIndex = kt, Hn(it, Et), Je(Lt) === null && Et === Je(it) && (Cr ? qr() : Cr = !0, Pn(Xe, kt - tt))) : (Et.sortIndex = Rr, Hn(Lt, Et), !Ct && !Sr && (Ct = !0, oi(jn))), Et;
      }
      function sa() {
      }
      function Vu() {
        !Ct && !Sr && (Ct = !0, oi(jn));
      }
      function Er() {
        return Je(Lt);
      }
      function ka($) {
        $.callback = null;
      }
      function vn() {
        return We;
      }
      var Bn = !1, Tr = null, Wr = -1, ir = gr, ba = -1;
      function Al() {
        var $ = ae.unstable_now() - ba;
        return !($ < ir);
      }
      function $i() {
      }
      function li($) {
        if ($ < 0 || $ > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        $ > 0 ? ir = Math.floor(1e3 / $) : ir = gr;
      }
      var Qi = function() {
        if (Tr !== null) {
          var $ = ae.unstable_now();
          ba = $;
          var ce = !0, _e = !0;
          try {
            _e = Tr(ce, $);
          } finally {
            _e ? Xr() : (Bn = !1, Tr = null);
          }
        } else
          Bn = !1;
      }, Xr;
      if (typeof q == "function")
        Xr = function() {
          q(Qi);
        };
      else if (typeof MessageChannel < "u") {
        var ui = new MessageChannel(), ca = ui.port2;
        ui.port1.onmessage = Qi, Xr = function() {
          ca.postMessage(null);
        };
      } else
        Xr = function() {
          Y(Qi, 0);
        };
      function oi($) {
        Tr = $, Bn || (Bn = !0, Xr());
      }
      function Pn($, ce) {
        Wr = Y(function() {
          $(ae.unstable_now());
        }, ce);
      }
      function qr() {
        me(Wr), Wr = -1;
      }
      var ju = $i, si = null;
      ae.unstable_IdlePriority = be, ae.unstable_ImmediatePriority = en, ae.unstable_LowPriority = le, ae.unstable_NormalPriority = he, ae.unstable_Profiling = si, ae.unstable_UserBlockingPriority = ie, ae.unstable_cancelCallback = ka, ae.unstable_continueExecution = Vu, ae.unstable_forceFrameRate = li, ae.unstable_getCurrentPriorityLevel = vn, ae.unstable_getFirstCallbackNode = Er, ae.unstable_next = wn, ae.unstable_pauseExecution = sa, ae.unstable_requestPaint = ju, ae.unstable_runWithPriority = ai, ae.unstable_scheduleCallback = Gr, ae.unstable_shouldYield = Al, ae.unstable_wrapCallback = ii, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(n0)), n0;
}
var jE;
function $E() {
  return jE || (jE = 1, process.env.NODE_ENV === "production" ? Em.exports = Nk() : Em.exports = zk()), Em.exports;
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
var BE;
function Uk() {
  if (BE)
    return $r;
  BE = 1;
  var ae = YE, Ve = $E();
  function N(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var gr = /* @__PURE__ */ new Set(), Hn = {};
  function Je(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Hn[n] = r, n = 0; n < r.length; n++)
      gr.add(r[n]);
  }
  var Fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Re = Object.prototype.hasOwnProperty, de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, en = {}, ie = {};
  function he(n) {
    return Re.call(ie, n) ? !0 : Re.call(en, n) ? !1 : de.test(n) ? ie[n] = !0 : (en[n] = !0, !1);
  }
  function le(n, r, l, o) {
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
  function be(n, r, l, o) {
    if (r === null || typeof r > "u" || le(n, r, l, o))
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
  function et(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var lt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    lt[n] = new et(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    lt[r] = new et(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    lt[n] = new et(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    lt[n] = new et(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    lt[n] = new et(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    lt[n] = new et(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    lt[n] = new et(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    lt[n] = new et(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    lt[n] = new et(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ir = /[\-:]([a-z])/g;
  function pn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ir,
      pn
    );
    lt[r] = new et(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ir, pn);
    lt[r] = new et(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ir, pn);
    lt[r] = new et(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    lt[n] = new et(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), lt.xlinkHref = new et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    lt[n] = new et(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ne(n, r, l, o) {
    var c = lt.hasOwnProperty(r) ? lt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (be(r, l, c, o) && (l = null), o || c === null ? he(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ut = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ze = Symbol.for("react.element"), ht = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), xn = Symbol.for("react.strict_mode"), rr = Symbol.for("react.profiler"), Lt = Symbol.for("react.provider"), it = Symbol.for("react.context"), Vn = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), Sr = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), Cr = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var q = Object.assign, Ie;
  function Xe(n) {
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
  var jn = !1;
  function ar(n, r) {
    if (!n || jn)
      return "";
    jn = !0;
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
          } catch (M) {
            var o = M;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (M) {
            o = M;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          o = M;
        }
        n();
      }
    } catch (M) {
      if (M && o && typeof M.stack == "string") {
        for (var c = M.stack.split(`
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
      jn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Xe(n) : "";
  }
  function ai(n) {
    switch (n.tag) {
      case 5:
        return Xe(n.type);
      case 16:
        return Xe("Lazy");
      case 13:
        return Xe("Suspense");
      case 19:
        return Xe("SuspenseList");
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
  function wn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ke:
        return "Fragment";
      case ht:
        return "Portal";
      case rr:
        return "Profiler";
      case xn:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case it:
          return (n.displayName || "Context") + ".Consumer";
        case Lt:
          return (n._context.displayName || "Context") + ".Provider";
        case Vn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Sr:
          return r = n.displayName || null, r !== null ? r : wn(n.type) || "Memo";
        case Ct:
          r = n._payload, n = n._init;
          try {
            return wn(n(r));
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
        return wn(r);
      case 8:
        return r === xn ? "StrictMode" : "Mode";
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
  function Vu(n) {
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
    n._valueTracker || (n._valueTracker = Vu(n));
  }
  function ka(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = sa(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
  function Bn(n, r) {
    var l = r.checked;
    return q({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Tr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Gr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wr(n, r) {
    r = r.checked, r != null && Ne(n, "checked", r, !1);
  }
  function ir(n, r) {
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
    (r !== "number" || vn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var $i = Array.isArray;
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
      throw Error(N(91));
    return q({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(N(92));
        if ($i(l)) {
          if (1 < l.length)
            throw Error(N(93));
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
  var qr, ju = function(n) {
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
  var $ = {
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
  }, ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys($).forEach(function(n) {
    ce.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), $[r] = $[n];
    });
  });
  function _e(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || $.hasOwnProperty(n) && $[n] ? ("" + r).trim() : r + "px";
  }
  function tt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = _e(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var kt = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function Ft(n, r) {
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
  function Et(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var fa = null, Ot = null, Tt = null;
  function mp(n) {
    if (n = fo(n)) {
      if (typeof fa != "function")
        throw Error(N(280));
      var r = n.stateNode;
      r && (r = oe(r), fa(n.stateNode, n.type, r));
    }
  }
  function Jo(n) {
    Ot ? Tt ? Tt.push(n) : Tt = [n] : Ot = n;
  }
  function es() {
    if (Ot) {
      var n = Ot, r = Tt;
      if (Tt = Ot = null, mp(n), r)
        for (n = 0; n < r.length; n++)
          mp(r[n]);
    }
  }
  function yp(n, r) {
    return n(r);
  }
  function gp() {
  }
  var ts = !1;
  function Xc(n, r, l) {
    if (ts)
      return n(r, l);
    ts = !0;
    try {
      return yp(n, r, l);
    } finally {
      ts = !1, (Ot !== null || Tt !== null) && (gp(), es());
    }
  }
  function Bu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = oe(l);
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
  if (Fn)
    try {
      var Ii = {};
      Object.defineProperty(Ii, "passive", { get: function() {
        ns = !0;
      } }), window.addEventListener("test", Ii, Ii), window.removeEventListener("test", Ii, Ii);
    } catch {
      ns = !1;
    }
  function Hl(n, r, l, o, c, d, h, g, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (H) {
      this.onError(H);
    }
  }
  var Kr = !1, _a = null, Fl = !1, Pu = null, qc = { onError: function(n) {
    Kr = !0, _a = n;
  } };
  function Kc(n, r, l, o, c, d, h, g, C) {
    Kr = !1, _a = null, Hl.apply(qc, arguments);
  }
  function Vl(n, r, l, o, c, d, h, g, C) {
    if (Kc.apply(this, arguments), Kr) {
      if (Kr) {
        var M = _a;
        Kr = !1, _a = null;
      } else
        throw Error(N(198));
      Fl || (Fl = !0, Pu = M);
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
  function Yu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function jl(n) {
    if (da(n) !== n)
      throw Error(N(188));
  }
  function Dn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = da(n), r === null)
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
            return jl(c), n;
          if (d === o)
            return jl(c), r;
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
  function Sp(n) {
    return n = Dn(n), n !== null ? Cp(n) : null;
  }
  function Cp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Cp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Zc = Ve.unstable_scheduleCallback, Ep = Ve.unstable_cancelCallback, Tm = Ve.unstable_shouldYield, Rm = Ve.unstable_requestPaint, Rt = Ve.unstable_now, xm = Ve.unstable_getCurrentPriorityLevel, Ma = Ve.unstable_ImmediatePriority, Me = Ve.unstable_UserBlockingPriority, ci = Ve.unstable_NormalPriority, Tp = Ve.unstable_LowPriority, Jc = Ve.unstable_IdlePriority, $u = null, Zr = null;
  function Rp(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot($u, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var xr = Math.clz32 ? Math.clz32 : wm, xp = Math.log, wp = Math.LN2;
  function wm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (xp(n) / wp | 0) | 0;
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
  function ef(n, r) {
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
      C === -1 ? (!(g & l) || g & o) && (c[h] = ef(g, r)) : C <= r && (n.expiredLanes |= g), d &= ~g;
    }
  }
  function tf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function is() {
    var n = rs;
    return rs <<= 1, !(rs & 4194240) && (rs = 64), n;
  }
  function nf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Wi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - xr(r), n[r] = l;
  }
  function Dm(n, r) {
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
  var Ge = 0;
  function rf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Dp, ls, nt, kp, af, Te = !1, Iu = [], Nt = null, wr = null, Dr = null, Gu = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), qe = [], km = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Nt = null;
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
        Vt.delete(r.pointerId);
    }
  }
  function mn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = fo(r), r !== null && ls(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function fi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Nt = mn(Nt, n, r, l, o, c), !0;
      case "dragenter":
        return wr = mn(wr, n, r, l, o, c), !0;
      case "mouseover":
        return Dr = mn(Dr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Gu.set(d, mn(Gu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Vt.set(d, mn(Vt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function bp(n) {
    var r = br(n.target);
    if (r !== null) {
      var l = da(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Yu(l), r !== null) {
            n.blockedOn = r, af(n.priority, function() {
              nt(l);
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
  function Pl(n) {
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
  function lf(n, r, l) {
    Pl(n) && l.delete(r);
  }
  function _p() {
    Te = !1, Nt !== null && Pl(Nt) && (Nt = null), wr !== null && Pl(wr) && (wr = null), Dr !== null && Pl(Dr) && (Dr = null), Gu.forEach(lf), Vt.forEach(lf);
  }
  function Wu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Te || (Te = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, _p)));
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
    for (Nt !== null && Wu(Nt, n), wr !== null && Wu(wr, n), Dr !== null && Wu(Dr, n), Gu.forEach(r), Vt.forEach(r), l = 0; l < qe.length; l++)
      o = qe[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < qe.length && (l = qe[0], l.blockedOn === null); )
      bp(l), l.blockedOn === null && qe.shift();
  }
  var Yl = ut.ReactCurrentBatchConfig, Xi = !0;
  function Mp(n, r, l, o) {
    var c = Ge, d = Yl.transition;
    Yl.transition = null;
    try {
      Ge = 1, os(n, r, l, o);
    } finally {
      Ge = c, Yl.transition = d;
    }
  }
  function us(n, r, l, o) {
    var c = Ge, d = Yl.transition;
    Yl.transition = null;
    try {
      Ge = 4, os(n, r, l, o);
    } finally {
      Ge = c, Yl.transition = d;
    }
  }
  function os(n, r, l, o) {
    if (Xi) {
      var c = ss(n, r, l, o);
      if (c === null)
        Es(n, r, o, qu, l), ea(n, o);
      else if (fi(c, n, r, l, o))
        o.stopPropagation();
      else if (ea(n, o), r & 4 && -1 < km.indexOf(n)) {
        for (; c !== null; ) {
          var d = fo(c);
          if (d !== null && Dp(d), d = ss(n, r, l, o), d === null && Es(n, r, o, qu, l), d === c)
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
    if (qu = null, n = Et(o), n = br(n), n !== null)
      if (r = da(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Yu(r), n !== null)
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
  function uf(n) {
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
        switch (xm()) {
          case Ma:
            return 1;
          case Me:
            return 4;
          case ci:
          case Tp:
            return 16;
          case Jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, Ku = null, Zu = null;
  function of() {
    if (Zu)
      return Zu;
    var n, r = Ku, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return Zu = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function $l(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ju() {
    return !0;
  }
  function Lp() {
    return !1;
  }
  function lr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var g in n)
        n.hasOwnProperty(g) && (l = n[g], this[g] = l ? l(d) : d[g]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ju : Lp, this.isPropagationStopped = Lp, this;
    }
    return q(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, cs = lr(di), Ql = q({}, di, { view: 0, detail: 0 }), Op = lr(Ql), fs, sf, eo, It = q({}, Ql, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== eo && (eo && n.type === "mousemove" ? (fs = n.screenX - eo.screenX, sf = n.screenY - eo.screenY) : sf = fs = 0, eo = n), fs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : sf;
  } }), ds = lr(It), Np = q({}, It, { dataTransfer: 0 }), zp = lr(Np), bm = q({}, Ql, { relatedTarget: 0 }), pi = lr(bm), cf = q({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Up = lr(cf), _m = q({}, di, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Mm = lr(_m), Lm = q({}, di, { data: 0 }), ff = lr(Lm), df = {
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
  }, Ap = {
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
  }, Hp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Fp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Hp[n]) ? !!r[n] : !1;
  }
  function pf() {
    return Fp;
  }
  var Oa = q({}, Ql, { key: function(n) {
    if (n.key) {
      var r = df[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = $l(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ap[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pf, charCode: function(n) {
    return n.type === "keypress" ? $l(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $l(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Om = lr(Oa), vf = q({}, It, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ps = lr(vf), hf = q({}, Ql, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pf }), Nm = lr(hf), vs = q({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = lr(vs), Yn = q({}, It, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Na = lr(Yn), zt = [9, 13, 27, 32], ta = Fn && "CompositionEvent" in window, qi = null;
  Fn && "documentMode" in document && (qi = document.documentMode);
  var hs = Fn && "TextEvent" in window && !qi, jp = Fn && (!ta || qi && 8 < qi && 11 >= qi), Il = " ", Bp = !1;
  function Pp(n, r) {
    switch (n) {
      case "keyup":
        return zt.indexOf(r.keyCode) !== -1;
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
  function zm(n, r) {
    switch (n) {
      case "compositionend":
        return ms(r);
      case "keypress":
        return r.which !== 32 ? null : (Bp = !0, Il);
      case "textInput":
        return n = r.data, n === Il && Bp ? null : n;
      default:
        return null;
    }
  }
  function Um(n, r) {
    if (Gl)
      return n === "compositionend" || !ta && Pp(n, r) ? (n = of(), Zu = Ku = La = null, Gl = !1, n) : null;
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
  var Yp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function $p(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Yp[n.type] : r === "textarea";
  }
  function Qp(n, r, l, o) {
    Jo(o), r = oo(r, "onChange"), 0 < r.length && (l = new cs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var to = null, Wl = null;
  function Xl(n) {
    Cs(n, 0);
  }
  function ql(n) {
    var r = Zl(n);
    if (ka(r))
      return n;
  }
  function Ip(n, r) {
    if (n === "change")
      return r;
  }
  var mf = !1;
  if (Fn) {
    var yf;
    if (Fn) {
      var gf = "oninput" in document;
      if (!gf) {
        var Gp = document.createElement("div");
        Gp.setAttribute("oninput", "return;"), gf = typeof Gp.oninput == "function";
      }
      yf = gf;
    } else
      yf = !1;
    mf = yf && (!document.documentMode || 9 < document.documentMode);
  }
  function Wp() {
    to && (to.detachEvent("onpropertychange", Xp), Wl = to = null);
  }
  function Xp(n) {
    if (n.propertyName === "value" && ql(Wl)) {
      var r = [];
      Qp(r, Wl, n, Et(n)), Xc(Xl, r);
    }
  }
  function Am(n, r, l) {
    n === "focusin" ? (Wp(), to = r, Wl = l, to.attachEvent("onpropertychange", Xp)) : n === "focusout" && Wp();
  }
  function Hm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ql(Wl);
  }
  function Fm(n, r) {
    if (n === "click")
      return ql(r);
  }
  function qp(n, r) {
    if (n === "input" || n === "change")
      return ql(r);
  }
  function Vm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var kr = typeof Object.is == "function" ? Object.is : Vm;
  function no(n, r) {
    if (kr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Re.call(r, c) || !kr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Kp(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Zp(n, r) {
    var l = Kp(n);
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
      l = Kp(l);
    }
  }
  function Jp(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Jp(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
  function za(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function gs(n) {
    var r = ys(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Jp(l.ownerDocument.documentElement, l)) {
      if (o !== null && za(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Zp(l, d);
          var h = Zp(
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
  var ev = Fn && "documentMode" in document && 11 >= document.documentMode, na = null, Sf = null, ro = null, Cf = !1;
  function tv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Cf || na == null || na !== vn(o) || (o = na, "selectionStart" in o && za(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ro && no(ro, o) || (ro = o, o = oo(Sf, "onSelect"), 0 < o.length && (r = new cs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = na)));
  }
  function Ss(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ki = { animationend: Ss("Animation", "AnimationEnd"), animationiteration: Ss("Animation", "AnimationIteration"), animationstart: Ss("Animation", "AnimationStart"), transitionend: Ss("Transition", "TransitionEnd") }, Ef = {}, Tf = {};
  Fn && (Tf = document.createElement("div").style, "AnimationEvent" in window || (delete Ki.animationend.animation, delete Ki.animationiteration.animation, delete Ki.animationstart.animation), "TransitionEvent" in window || delete Ki.transitionend.transition);
  function Gt(n) {
    if (Ef[n])
      return Ef[n];
    if (!Ki[n])
      return n;
    var r = Ki[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Tf)
        return Ef[n] = r[l];
    return n;
  }
  var Rf = Gt("animationend"), nv = Gt("animationiteration"), rv = Gt("animationstart"), av = Gt("transitionend"), iv = /* @__PURE__ */ new Map(), lv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    iv.set(n, r), Je(r, [n]);
  }
  for (var ao = 0; ao < lv.length; ao++) {
    var Zi = lv[ao], jm = Zi.toLowerCase(), io = Zi[0].toUpperCase() + Zi.slice(1);
    Ua(jm, "on" + io);
  }
  Ua(Rf, "onAnimationEnd"), Ua(nv, "onAnimationIteration"), Ua(rv, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(av, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Je("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Je("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Je("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));
  function uv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Vl(o, r, void 0, n), n.currentTarget = null;
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
            var g = o[h], C = g.instance, M = g.currentTarget;
            if (g = g.listener, C !== d && c.isPropagationStopped())
              break e;
            uv(c, g, M), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (g = o[h], C = g.instance, M = g.currentTarget, g = g.listener, C !== d && c.isPropagationStopped())
              break e;
            uv(c, g, M), d = C;
          }
      }
    }
    if (Fl)
      throw n = Pu, Fl = !1, Pu = null, n;
  }
  function rt(n, r) {
    var l = r[Mf];
    l === void 0 && (l = r[Mf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ov(r, n, 2, !1), l.add(o));
  }
  function vi(n, r, l) {
    var o = 0;
    r && (o |= 4), ov(l, n, o, r);
  }
  var Aa = "_reactListening" + Math.random().toString(36).slice(2);
  function Kl(n) {
    if (!n[Aa]) {
      n[Aa] = !0, gr.forEach(function(l) {
        l !== "selectionchange" && (Bm.has(l) || vi(l, !1, n), vi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Aa] || (r[Aa] = !0, vi("selectionchange", !1, r));
    }
  }
  function ov(n, r, l, o) {
    switch (uf(r)) {
      case 1:
        var c = Mp;
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
    Xc(function() {
      var M = d, H = Et(l), F = [];
      e: {
        var A = iv.get(n);
        if (A !== void 0) {
          var I = cs, Z = n;
          switch (n) {
            case "keypress":
              if ($l(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              I = Om;
              break;
            case "focusin":
              Z = "focus", I = pi;
              break;
            case "focusout":
              Z = "blur", I = pi;
              break;
            case "beforeblur":
            case "afterblur":
              I = pi;
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
              I = ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = zp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = Nm;
              break;
            case Rf:
            case nv:
            case rv:
              I = Up;
              break;
            case av:
              I = Vp;
              break;
            case "scroll":
              I = Op;
              break;
            case "wheel":
              I = Na;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = Mm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = ps;
          }
          var te = (r & 4) !== 0, _t = !te && n === "scroll", x = te ? A !== null ? A + "Capture" : null : A;
          te = [];
          for (var T = M, k; T !== null; ) {
            k = T;
            var j = k.stateNode;
            if (k.tag === 5 && j !== null && (k = j, x !== null && (j = Bu(T, x), j != null && te.push(uo(T, j, k)))), _t)
              break;
            T = T.return;
          }
          0 < te.length && (A = new I(A, Z, null, l, H), F.push({ event: A, listeners: te }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (A = n === "mouseover" || n === "pointerover", I = n === "mouseout" || n === "pointerout", A && l !== Rr && (Z = l.relatedTarget || l.fromElement) && (br(Z) || Z[Ha]))
            break e;
          if ((I || A) && (A = H.window === H ? H : (A = H.ownerDocument) ? A.defaultView || A.parentWindow : window, I ? (Z = l.relatedTarget || l.toElement, I = M, Z = Z ? br(Z) : null, Z !== null && (_t = da(Z), Z !== _t || Z.tag !== 5 && Z.tag !== 6) && (Z = null)) : (I = null, Z = M), I !== Z)) {
            if (te = ds, j = "onMouseLeave", x = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (te = ps, j = "onPointerLeave", x = "onPointerEnter", T = "pointer"), _t = I == null ? A : Zl(I), k = Z == null ? A : Zl(Z), A = new te(j, T + "leave", I, l, H), A.target = _t, A.relatedTarget = k, j = null, br(H) === M && (te = new te(x, T + "enter", Z, l, H), te.target = k, te.relatedTarget = _t, j = te), _t = j, I && Z)
              t: {
                for (te = I, x = Z, T = 0, k = te; k; k = Ji(k))
                  T++;
                for (k = 0, j = x; j; j = Ji(j))
                  k++;
                for (; 0 < T - k; )
                  te = Ji(te), T--;
                for (; 0 < k - T; )
                  x = Ji(x), k--;
                for (; T--; ) {
                  if (te === x || x !== null && te === x.alternate)
                    break t;
                  te = Ji(te), x = Ji(x);
                }
                te = null;
              }
            else
              te = null;
            I !== null && xf(F, A, I, te, !1), Z !== null && _t !== null && xf(F, _t, Z, te, !0);
          }
        }
        e: {
          if (A = M ? Zl(M) : window, I = A.nodeName && A.nodeName.toLowerCase(), I === "select" || I === "input" && A.type === "file")
            var ne = Ip;
          else if ($p(A))
            if (mf)
              ne = qp;
            else {
              ne = Hm;
              var J = Am;
            }
          else
            (I = A.nodeName) && I.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (ne = Fm);
          if (ne && (ne = ne(n, M))) {
            Qp(F, ne, l, H);
            break e;
          }
          J && J(n, A, M), n === "focusout" && (J = A._wrapperState) && J.controlled && A.type === "number" && Al(A, "number", A.value);
        }
        switch (J = M ? Zl(M) : window, n) {
          case "focusin":
            ($p(J) || J.contentEditable === "true") && (na = J, Sf = M, ro = null);
            break;
          case "focusout":
            ro = Sf = na = null;
            break;
          case "mousedown":
            Cf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cf = !1, tv(F, l, H);
            break;
          case "selectionchange":
            if (ev)
              break;
          case "keydown":
          case "keyup":
            tv(F, l, H);
        }
        var ue;
        if (ta)
          e: {
            switch (n) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          Gl ? Pp(n, l) && (Se = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Se = "onCompositionStart");
        Se && (jp && l.locale !== "ko" && (Gl || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && Gl && (ue = of()) : (La = H, Ku = "value" in La ? La.value : La.textContent, Gl = !0)), J = oo(M, Se), 0 < J.length && (Se = new ff(Se, n, null, l, H), F.push({ event: Se, listeners: J }), ue ? Se.data = ue : (ue = ms(l), ue !== null && (Se.data = ue)))), (ue = hs ? zm(n, l) : Um(n, l)) && (M = oo(M, "onBeforeInput"), 0 < M.length && (H = new ff("onBeforeInput", "beforeinput", null, l, H), F.push({ event: H, listeners: M }), H.data = ue));
      }
      Cs(F, r);
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
  function xf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var g = l, C = g.alternate, M = g.stateNode;
      if (C !== null && C === o)
        break;
      g.tag === 5 && M !== null && (g = M, c ? (C = Bu(l, d), C != null && h.unshift(uo(l, C, g))) : c || (C = Bu(l, d), C != null && h.push(uo(l, C, g)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var wf = /\r\n?/g, Pm = /\u0000|\uFFFD/g;
  function Df(n) {
    return (typeof n == "string" ? n : "" + n).replace(wf, `
`).replace(Pm, "");
  }
  function Ts(n, r, l) {
    if (r = Df(r), Df(n) !== r && l)
      throw Error(N(425));
  }
  function Rs() {
  }
  var kf = null, el = null;
  function so(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tl = typeof setTimeout == "function" ? setTimeout : void 0, sv = typeof clearTimeout == "function" ? clearTimeout : void 0, bf = typeof Promise == "function" ? Promise : void 0, _f = typeof queueMicrotask == "function" ? queueMicrotask : typeof bf < "u" ? function(n) {
    return bf.resolve(null).then(n).catch(Ym);
  } : tl;
  function Ym(n) {
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
  var mi = Math.random().toString(36).slice(2), pa = "__reactFiber$" + mi, nl = "__reactProps$" + mi, Ha = "__reactContainer$" + mi, Mf = "__reactEvents$" + mi, $m = "__reactListeners$" + mi, Lf = "__reactHandles$" + mi;
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
    throw Error(N(33));
  }
  function oe(n) {
    return n[nl] || null;
  }
  var yi = [], ot = -1;
  function xe(n) {
    return { current: n };
  }
  function Ye(n) {
    0 > ot || (n.current = yi[ot], yi[ot] = null, ot--);
  }
  function $e(n, r) {
    ot++, yi[ot] = n.current, n.current = r;
  }
  var va = {}, ge = xe(va), xt = xe(!1), $n = va;
  function _r(n, r) {
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
  function pt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Mr() {
    Ye(xt), Ye(ge);
  }
  function gi(n, r, l) {
    if (ge.current !== va)
      throw Error(N(168));
    $e(ge, r), $e(xt, l);
  }
  function po(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(N(108, ii(n) || "Unknown", c));
    return q({}, l, o);
  }
  function xs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || va, $n = ge.current, $e(ge, n), $e(xt, xt.current), !0;
  }
  function cv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(N(169));
    l ? (n = po(n, r, $n), o.__reactInternalMemoizedMergedChildContext = n, Ye(xt), Ye(ge), $e(ge, n)) : Ye(xt), $e(xt, l);
  }
  var ur = null, Wt = !1, vo = !1;
  function Of(n) {
    ur === null ? ur = [n] : ur.push(n);
  }
  function Nf(n) {
    Wt = !0, Of(n);
  }
  function Qn() {
    if (!vo && ur !== null) {
      vo = !0;
      var n = 0, r = Ge;
      try {
        var l = ur;
        for (Ge = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ur = null, Wt = !1;
      } catch (c) {
        throw ur !== null && (ur = ur.slice(n + 1)), Zc(Ma, Qn), c;
      } finally {
        Ge = r, vo = !1;
      }
    }
    return null;
  }
  var Si = [], In = 0, rl = null, Jl = 0, Gn = [], yn = 0, Lr = null, tn = 1, Fa = "";
  function or(n, r) {
    Si[In++] = Jl, Si[In++] = rl, rl = n, Jl = r;
  }
  function zf(n, r, l) {
    Gn[yn++] = tn, Gn[yn++] = Fa, Gn[yn++] = Lr, Lr = n;
    var o = tn;
    n = Fa;
    var c = 32 - xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - xr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, tn = 1 << 32 - xr(r) + c | l << c | o, Fa = d + n;
    } else
      tn = 1 << d | l << c | o, Fa = n;
  }
  function ws(n) {
    n.return !== null && (or(n, 1), zf(n, 1, 0));
  }
  function Uf(n) {
    for (; n === rl; )
      rl = Si[--In], Si[In] = null, Jl = Si[--In], Si[In] = null;
    for (; n === Lr; )
      Lr = Gn[--yn], Gn[yn] = null, Fa = Gn[--yn], Gn[yn] = null, tn = Gn[--yn], Gn[yn] = null;
  }
  var sr = null, Wn = null, st = !1, Or = null;
  function Af(n, r) {
    var l = Fr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function fv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, sr = n, Wn = ra(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, sr = n, Wn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Lr !== null ? { id: tn, overflow: Fa } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Fr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, sr = n, Wn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ds(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function ks(n) {
    if (st) {
      var r = Wn;
      if (r) {
        var l = r;
        if (!fv(n, r)) {
          if (Ds(n))
            throw Error(N(418));
          r = ra(l.nextSibling);
          var o = sr;
          r && fv(n, r) ? Af(o, l) : (n.flags = n.flags & -4097 | 2, st = !1, sr = n);
        }
      } else {
        if (Ds(n))
          throw Error(N(418));
        n.flags = n.flags & -4097 | 2, st = !1, sr = n;
      }
    }
  }
  function dv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    sr = n;
  }
  function bs(n) {
    if (n !== sr)
      return !1;
    if (!st)
      return dv(n), st = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !so(n.type, n.memoizedProps)), r && (r = Wn)) {
      if (Ds(n))
        throw pv(), Error(N(418));
      for (; r; )
        Af(n, r), r = ra(r.nextSibling);
    }
    if (dv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(N(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Wn = ra(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Wn = null;
      }
    } else
      Wn = sr ? ra(n.stateNode.nextSibling) : null;
    return !0;
  }
  function pv() {
    for (var n = Wn; n; )
      n = ra(n.nextSibling);
  }
  function mt() {
    Wn = sr = null, st = !1;
  }
  function Hf(n) {
    Or === null ? Or = [n] : Or.push(n);
  }
  var _s = ut.ReactCurrentBatchConfig;
  function cr(n, r) {
    if (n && n.defaultProps) {
      r = q({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ha = xe(null), Ms = null, Ci = null, Ff = null;
  function Vf() {
    Ff = Ci = Ms = null;
  }
  function Ei(n) {
    var r = ha.current;
    Ye(ha), n._currentValue = r;
  }
  function Xt(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function B(n, r) {
    Ms = n, Ff = Ci = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Ut = !0), n.firstContext = null);
  }
  function bt(n) {
    var r = n._currentValue;
    if (Ff !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ci === null) {
        if (Ms === null)
          throw Error(N(308));
        Ci = n, Ms.dependencies = { lanes: 0, firstContext: n };
      } else
        Ci = Ci.next = n;
    return r;
  }
  var nn = null;
  function jf(n) {
    nn === null ? nn = [n] : nn.push(n);
  }
  function vv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, jf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Va(n, o);
  }
  function Va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ti = !1;
  function Bf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function jt(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ja(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ri(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Le & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, jf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Va(n, l);
  }
  function Ls(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qu(n, l);
    }
  }
  function Pf(n, r) {
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
      var C = g, M = C.next;
      C.next = null, h === null ? d = M : h.next = M, h = C;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, g = H.lastBaseUpdate, g !== h && (g === null ? H.firstBaseUpdate = M : g.next = M, H.lastBaseUpdate = C));
    }
    if (d !== null) {
      var F = c.baseState;
      h = 0, H = M = C = null, g = d;
      do {
        var A = g.lane, I = g.eventTime;
        if ((o & A) === A) {
          H !== null && (H = H.next = {
            eventTime: I,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var Z = n, te = g;
            switch (A = r, I = l, te.tag) {
              case 1:
                if (Z = te.payload, typeof Z == "function") {
                  F = Z.call(I, F, A);
                  break e;
                }
                F = Z;
                break e;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = te.payload, A = typeof Z == "function" ? Z.call(I, F, A) : Z, A == null)
                  break e;
                F = q({}, F, A);
                break e;
              case 2:
                Ti = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (n.flags |= 64, A = c.effects, A === null ? c.effects = [g] : A.push(g));
        } else
          I = { eventTime: I, lane: A, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, H === null ? (M = H = I, C = F) : H = H.next = I, h |= A;
        if (g = g.next, g === null) {
          if (g = c.shared.pending, g === null)
            break;
          A = g, g = A.next, A.next = null, c.lastBaseUpdate = A, c.shared.pending = null;
        }
      } while (!0);
      if (H === null && (C = F), c.baseState = C, c.firstBaseUpdate = M, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      $a |= h, n.lanes = h, n.memoizedState = F;
    }
  }
  function al(n, r, l) {
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
  var hv = new ae.Component().refs;
  function Yf(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : q({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Os = { isMounted: function(n) {
    return (n = n._reactInternals) ? da(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = En(), c = At(n), d = ja(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (Tn(r, n, c, o), Ls(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = En(), c = At(n), d = ja(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (Tn(r, n, c, o), Ls(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = En(), o = At(n), c = ja(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ri(n, c, o), r !== null && (Tn(r, n, o, l), Ls(r, n, o));
  } };
  function mv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !no(l, o) || !no(c, d) : !0;
  }
  function yv(n, r, l) {
    var o = !1, c = va, d = r.contextType;
    return typeof d == "object" && d !== null ? d = bt(d) : (c = pt(r) ? $n : ge.current, o = r.contextTypes, d = (o = o != null) ? _r(n, c) : va), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Os, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function gv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Os.enqueueReplaceState(r, r.state, null);
  }
  function Ns(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = hv, Bf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = bt(d) : (d = pt(r) ? $n : ge.current, c.context = _r(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Yf(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Os.enqueueReplaceState(c, c.state, null), xi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function eu(n, r, l) {
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
          g === hv && (g = c.refs = {}), h === null ? delete g[d] : g[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(N(284));
      if (!l._owner)
        throw Error(N(290, n));
    }
    return n;
  }
  function zs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(N(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Sv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Cv(n) {
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
      return x = Oi(x, T), x.index = 0, x.sibling = null, x;
    }
    function d(x, T, k) {
      return x.index = k, n ? (k = x.alternate, k !== null ? (k = k.index, k < T ? (x.flags |= 2, T) : k) : (x.flags |= 2, T)) : (x.flags |= 1048576, T);
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function g(x, T, k, j) {
      return T === null || T.tag !== 6 ? (T = No(k, x.mode, j), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function C(x, T, k, j) {
      var ne = k.type;
      return ne === ke ? H(x, T, k.props.children, j, k.key) : T !== null && (T.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Ct && Sv(ne) === T.type) ? (j = c(T, k.props), j.ref = eu(x, T, k), j.return = x, j) : (j = dc(k.type, k.key, k.props, null, x.mode, j), j.ref = eu(x, T, k), j.return = x, j);
    }
    function M(x, T, k, j) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = Rl(k, x.mode, j), T.return = x, T) : (T = c(T, k.children || []), T.return = x, T);
    }
    function H(x, T, k, j, ne) {
      return T === null || T.tag !== 7 ? (T = Tl(k, x.mode, j, ne), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function F(x, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = No("" + T, x.mode, k), T.return = x, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ze:
            return k = dc(T.type, T.key, T.props, null, x.mode, k), k.ref = eu(x, null, T), k.return = x, k;
          case ht:
            return T = Rl(T, x.mode, k), T.return = x, T;
          case Ct:
            var j = T._init;
            return F(x, j(T._payload), k);
        }
        if ($i(T) || me(T))
          return T = Tl(T, x.mode, k, null), T.return = x, T;
        zs(x, T);
      }
      return null;
    }
    function A(x, T, k, j) {
      var ne = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return ne !== null ? null : g(x, T, "" + k, j);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ze:
            return k.key === ne ? C(x, T, k, j) : null;
          case ht:
            return k.key === ne ? M(x, T, k, j) : null;
          case Ct:
            return ne = k._init, A(
              x,
              T,
              ne(k._payload),
              j
            );
        }
        if ($i(k) || me(k))
          return ne !== null ? null : H(x, T, k, j, null);
        zs(x, k);
      }
      return null;
    }
    function I(x, T, k, j, ne) {
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return x = x.get(k) || null, g(T, x, "" + j, ne);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case ze:
            return x = x.get(j.key === null ? k : j.key) || null, C(T, x, j, ne);
          case ht:
            return x = x.get(j.key === null ? k : j.key) || null, M(T, x, j, ne);
          case Ct:
            var J = j._init;
            return I(x, T, k, J(j._payload), ne);
        }
        if ($i(j) || me(j))
          return x = x.get(k) || null, H(T, x, j, ne, null);
        zs(T, j);
      }
      return null;
    }
    function Z(x, T, k, j) {
      for (var ne = null, J = null, ue = T, Se = T = 0, Zt = null; ue !== null && Se < k.length; Se++) {
        ue.index > Se ? (Zt = ue, ue = null) : Zt = ue.sibling;
        var je = A(x, ue, k[Se], j);
        if (je === null) {
          ue === null && (ue = Zt);
          break;
        }
        n && ue && je.alternate === null && r(x, ue), T = d(je, T, Se), J === null ? ne = je : J.sibling = je, J = je, ue = Zt;
      }
      if (Se === k.length)
        return l(x, ue), st && or(x, Se), ne;
      if (ue === null) {
        for (; Se < k.length; Se++)
          ue = F(x, k[Se], j), ue !== null && (T = d(ue, T, Se), J === null ? ne = ue : J.sibling = ue, J = ue);
        return st && or(x, Se), ne;
      }
      for (ue = o(x, ue); Se < k.length; Se++)
        Zt = I(ue, x, Se, k[Se], j), Zt !== null && (n && Zt.alternate !== null && ue.delete(Zt.key === null ? Se : Zt.key), T = d(Zt, T, Se), J === null ? ne = Zt : J.sibling = Zt, J = Zt);
      return n && ue.forEach(function(Ni) {
        return r(x, Ni);
      }), st && or(x, Se), ne;
    }
    function te(x, T, k, j) {
      var ne = me(k);
      if (typeof ne != "function")
        throw Error(N(150));
      if (k = ne.call(k), k == null)
        throw Error(N(151));
      for (var J = ne = null, ue = T, Se = T = 0, Zt = null, je = k.next(); ue !== null && !je.done; Se++, je = k.next()) {
        ue.index > Se ? (Zt = ue, ue = null) : Zt = ue.sibling;
        var Ni = A(x, ue, je.value, j);
        if (Ni === null) {
          ue === null && (ue = Zt);
          break;
        }
        n && ue && Ni.alternate === null && r(x, ue), T = d(Ni, T, Se), J === null ? ne = Ni : J.sibling = Ni, J = Ni, ue = Zt;
      }
      if (je.done)
        return l(
          x,
          ue
        ), st && or(x, Se), ne;
      if (ue === null) {
        for (; !je.done; Se++, je = k.next())
          je = F(x, je.value, j), je !== null && (T = d(je, T, Se), J === null ? ne = je : J.sibling = je, J = je);
        return st && or(x, Se), ne;
      }
      for (ue = o(x, ue); !je.done; Se++, je = k.next())
        je = I(ue, x, Se, je.value, j), je !== null && (n && je.alternate !== null && ue.delete(je.key === null ? Se : je.key), T = d(je, T, Se), J === null ? ne = je : J.sibling = je, J = je);
      return n && ue.forEach(function(cy) {
        return r(x, cy);
      }), st && or(x, Se), ne;
    }
    function _t(x, T, k, j) {
      if (typeof k == "object" && k !== null && k.type === ke && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ze:
            e: {
              for (var ne = k.key, J = T; J !== null; ) {
                if (J.key === ne) {
                  if (ne = k.type, ne === ke) {
                    if (J.tag === 7) {
                      l(x, J.sibling), T = c(J, k.props.children), T.return = x, x = T;
                      break e;
                    }
                  } else if (J.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Ct && Sv(ne) === J.type) {
                    l(x, J.sibling), T = c(J, k.props), T.ref = eu(x, J, k), T.return = x, x = T;
                    break e;
                  }
                  l(x, J);
                  break;
                } else
                  r(x, J);
                J = J.sibling;
              }
              k.type === ke ? (T = Tl(k.props.children, x.mode, j, k.key), T.return = x, x = T) : (j = dc(k.type, k.key, k.props, null, x.mode, j), j.ref = eu(x, T, k), j.return = x, x = j);
            }
            return h(x);
          case ht:
            e: {
              for (J = k.key; T !== null; ) {
                if (T.key === J)
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
              T = Rl(k, x.mode, j), T.return = x, x = T;
            }
            return h(x);
          case Ct:
            return J = k._init, _t(x, T, J(k._payload), j);
        }
        if ($i(k))
          return Z(x, T, k, j);
        if (me(k))
          return te(x, T, k, j);
        zs(x, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(x, T.sibling), T = c(T, k), T.return = x, x = T) : (l(x, T), T = No(k, x.mode, j), T.return = x, x = T), h(x)) : l(x, T);
    }
    return _t;
  }
  var tu = Cv(!0), Ev = Cv(!1), ho = {}, aa = xe(ho), mo = xe(ho), nu = xe(ho);
  function il(n) {
    if (n === ho)
      throw Error(N(174));
    return n;
  }
  function $f(n, r) {
    switch ($e(nu, r), $e(mo, n), $e(aa, ho), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Pn(r, n);
    }
    Ye(aa), $e(aa, r);
  }
  function wi() {
    Ye(aa), Ye(mo), Ye(nu);
  }
  function fe(n) {
    il(nu.current);
    var r = il(aa.current), l = Pn(r, n.type);
    r !== l && ($e(mo, n), $e(aa, l));
  }
  function De(n) {
    mo.current === n && (Ye(aa), Ye(mo));
  }
  var pe = xe(0);
  function yt(n) {
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
  var As = ut.ReactCurrentDispatcher, Qf = ut.ReactCurrentBatchConfig, ll = 0, ct = null, z = null, Ae = null, ve = !1, ma = !1, fr = 0, ul = 0;
  function ft() {
    throw Error(N(321));
  }
  function ol(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!kr(n[l], r[l]))
        return !1;
    return !0;
  }
  function Di(n, r, l, o, c, d) {
    if (ll = d, ct = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, As.current = n === null || n.memoizedState === null ? Im : Gm, n = l(o, c), ma) {
      d = 0;
      do {
        if (ma = !1, fr = 0, 25 <= d)
          throw Error(N(301));
        d += 1, Ae = z = null, r.updateQueue = null, As.current = Gf, n = l(o, c);
      } while (ma);
    }
    if (As.current = Zs, r = z !== null && z.next !== null, ll = 0, Ae = z = ct = null, ve = !1, r)
      throw Error(N(300));
    return n;
  }
  function sl() {
    var n = fr !== 0;
    return fr = 0, n;
  }
  function zr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ae === null ? ct.memoizedState = Ae = n : Ae = Ae.next = n, Ae;
  }
  function Xn() {
    if (z === null) {
      var n = ct.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = z.next;
    var r = Ae === null ? ct.memoizedState : Ae.next;
    if (r !== null)
      Ae = r, z = n;
    else {
      if (n === null)
        throw Error(N(310));
      z = n, n = { memoizedState: z.memoizedState, baseState: z.baseState, baseQueue: z.baseQueue, queue: z.queue, next: null }, Ae === null ? ct.memoizedState = Ae = n : Ae = Ae.next = n;
    }
    return Ae;
  }
  function cl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function yo(n) {
    var r = Xn(), l = r.queue;
    if (l === null)
      throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = z, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var g = h = null, C = null, M = d;
      do {
        var H = M.lane;
        if ((ll & H) === H)
          C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var F = {
            lane: H,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (g = C = F, h = o) : C = C.next = F, ct.lanes |= H, $a |= H;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = g, kr(o, r.memoizedState) || (Ut = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ct.lanes |= d, $a |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function go(n) {
    var r = Xn(), l = r.queue;
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
      kr(d, r.memoizedState) || (Ut = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hs() {
  }
  function Fs(n, r) {
    var l = ct, o = Xn(), c = r(), d = !kr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Ut = !0), o = o.queue, So(Bs.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ae !== null && Ae.memoizedState.tag & 1) {
      if (l.flags |= 2048, fl(9, js.bind(null, l, o, c, r), void 0, null), gt === null)
        throw Error(N(349));
      ll & 30 || Vs(l, r, c);
    }
    return c;
  }
  function Vs(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ct.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ct.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function js(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Ps(r) && Ys(n);
  }
  function Bs(n, r, l) {
    return l(function() {
      Ps(r) && Ys(n);
    });
  }
  function Ps(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !kr(n, l);
    } catch {
      return !0;
    }
  }
  function Ys(n) {
    var r = Va(n, 1);
    r !== null && Tn(r, n, 1, -1);
  }
  function $s(n) {
    var r = zr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ks.bind(null, ct, n), [r.memoizedState, n];
  }
  function fl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ct.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ct.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qs() {
    return Xn().memoizedState;
  }
  function dl(n, r, l, o) {
    var c = zr();
    ct.flags |= n, c.memoizedState = fl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Ba(n, r, l, o) {
    var c = Xn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (z !== null) {
      var h = z.memoizedState;
      if (d = h.destroy, o !== null && ol(o, h.deps)) {
        c.memoizedState = fl(r, l, d, o);
        return;
      }
    }
    ct.flags |= n, c.memoizedState = fl(1 | r, l, d, o);
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
  function If(n, r) {
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
    return l = l != null ? l.concat([n]) : null, Ba(4, 4, If.bind(null, r, n), l);
  }
  function Xs() {
  }
  function au(n, r) {
    var l = Xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ol(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function ki(n, r) {
    var l = Xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ol(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function qn(n, r, l) {
    return ll & 21 ? (kr(l, r) || (l = is(), ct.lanes |= l, $a |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Ut = !0), n.memoizedState = l);
  }
  function Qm(n, r) {
    var l = Ge;
    Ge = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Qf.transition;
    Qf.transition = {};
    try {
      n(!1), r();
    } finally {
      Ge = l, Qf.transition = o;
    }
  }
  function at() {
    return Xn().memoizedState;
  }
  function qs(n, r, l) {
    var o = At(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, iu(n))
      Co(r, l);
    else if (l = vv(n, r, l, o), l !== null) {
      var c = En();
      Tn(l, n, o, c), Tv(l, r, o);
    }
  }
  function Ks(n, r, l) {
    var o = At(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (iu(n))
      Co(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, g = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = g, kr(g, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, jf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = vv(n, r, c, o), l !== null && (c = En(), Tn(l, n, o, c), Tv(l, r, o));
    }
  }
  function iu(n) {
    var r = n.alternate;
    return n === ct || r !== null && r === ct;
  }
  function Co(n, r) {
    ma = ve = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Tv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qu(n, l);
    }
  }
  var Zs = { readContext: bt, useCallback: ft, useContext: ft, useEffect: ft, useImperativeHandle: ft, useInsertionEffect: ft, useLayoutEffect: ft, useMemo: ft, useReducer: ft, useRef: ft, useState: ft, useDebugValue: ft, useDeferredValue: ft, useTransition: ft, useMutableSource: ft, useSyncExternalStore: ft, useId: ft, unstable_isNewReconciler: !1 }, Im = { readContext: bt, useCallback: function(n, r) {
    return zr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: bt, useEffect: Is, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, dl(
      4194308,
      4,
      If.bind(null, r, n),
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = qs.bind(null, ct, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = zr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: $s, useDebugValue: Xs, useDeferredValue: function(n) {
    return zr().memoizedState = n;
  }, useTransition: function() {
    var n = $s(!1), r = n[0];
    return n = Qm.bind(null, n[1]), zr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ct, c = zr();
    if (st) {
      if (l === void 0)
        throw Error(N(407));
      l = l();
    } else {
      if (l = r(), gt === null)
        throw Error(N(349));
      ll & 30 || Vs(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Is(Bs.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, fl(9, js.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = zr(), r = gt.identifierPrefix;
    if (st) {
      var l = Fa, o = tn;
      l = (o & ~(1 << 32 - xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = fr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ul++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Gm = {
    readContext: bt,
    useCallback: au,
    useContext: bt,
    useEffect: So,
    useImperativeHandle: ru,
    useInsertionEffect: Gs,
    useLayoutEffect: Ws,
    useMemo: ki,
    useReducer: yo,
    useRef: Qs,
    useState: function() {
      return yo(cl);
    },
    useDebugValue: Xs,
    useDeferredValue: function(n) {
      var r = Xn();
      return qn(r, z.memoizedState, n);
    },
    useTransition: function() {
      var n = yo(cl)[0], r = Xn().memoizedState;
      return [n, r];
    },
    useMutableSource: Hs,
    useSyncExternalStore: Fs,
    useId: at,
    unstable_isNewReconciler: !1
  }, Gf = { readContext: bt, useCallback: au, useContext: bt, useEffect: So, useImperativeHandle: ru, useInsertionEffect: Gs, useLayoutEffect: Ws, useMemo: ki, useReducer: go, useRef: Qs, useState: function() {
    return go(cl);
  }, useDebugValue: Xs, useDeferredValue: function(n) {
    var r = Xn();
    return z === null ? r.memoizedState = n : qn(r, z.memoizedState, n);
  }, useTransition: function() {
    var n = go(cl)[0], r = Xn().memoizedState;
    return [n, r];
  }, useMutableSource: Hs, useSyncExternalStore: Fs, useId: at, unstable_isNewReconciler: !1 };
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
  var Wm = typeof WeakMap == "function" ? WeakMap : Map;
  function Rv(n, r, l) {
    l = ja(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      lc || (lc = !0, yl = o), Js(n, r);
    }, l;
  }
  function To(n, r, l) {
    l = ja(-1, l), l.tag = 3;
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
  function xv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Wm();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ty.bind(null, n, r, l), r.then(n, n));
  }
  function Wf(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Xf(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ja(-1, 1), r.tag = 2, Ri(l, r, 1))), l.lanes |= 1), n);
  }
  var Xm = ut.ReactCurrentOwner, Ut = !1;
  function Bt(n, r, l, o) {
    r.child = n === null ? Ev(r, null, l, o) : tu(r, n.child, l, o);
  }
  function bi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return B(r, c), o = Di(n, r, l, o, d, c), l = sl(), n !== null && !Ut ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, rn(n, r, c)) : (st && l && ws(r), r.flags |= 1, Bt(n, r, o, c), r.child);
  }
  function ec(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !vd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Kn(n, r, d, o, c)) : (n = dc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : no, l(h, o) && n.ref === r.ref)
        return rn(n, r, c);
    }
    return r.flags |= 1, n = Oi(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Kn(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (no(d, o) && n.ref === r.ref)
        if (Ut = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Ut = !0);
        else
          return r.lanes = n.lanes, rn(n, r, c);
    }
    return uu(n, r, l, o, c);
  }
  function pl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(pu, dr), dr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $e(pu, dr), dr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, $e(pu, dr), dr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, $e(pu, dr), dr |= o;
    return Bt(n, r, c, l), r.child;
  }
  function we(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function uu(n, r, l, o, c) {
    var d = pt(l) ? $n : ge.current;
    return d = _r(r, d), B(r, c), l = Di(n, r, l, o, d, c), o = sl(), n !== null && !Ut ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, rn(n, r, c)) : (st && o && ws(r), r.flags |= 1, Bt(n, r, l, c), r.child);
  }
  function qf(n, r, l, o, c) {
    if (pt(l)) {
      var d = !0;
      xs(r);
    } else
      d = !1;
    if (B(r, c), r.stateNode === null)
      gn(n, r), yv(r, l, o), Ns(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, g = r.memoizedProps;
      h.props = g;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = bt(M) : (M = pt(l) ? $n : ge.current, M = _r(r, M));
      var H = l.getDerivedStateFromProps, F = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      F || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== o || C !== M) && gv(r, h, o, M), Ti = !1;
      var A = r.memoizedState;
      h.state = A, xi(r, o, h, c), C = r.memoizedState, g !== o || A !== C || xt.current || Ti ? (typeof H == "function" && (Yf(r, l, H, o), C = r.memoizedState), (g = Ti || mv(r, l, g, o, A, C, M)) ? (F || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = g) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, jt(n, r), g = r.memoizedProps, M = r.type === r.elementType ? g : cr(r.type, g), h.props = M, F = r.pendingProps, A = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = bt(C) : (C = pt(l) ? $n : ge.current, C = _r(r, C));
      var I = l.getDerivedStateFromProps;
      (H = typeof I == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== F || A !== C) && gv(r, h, o, C), Ti = !1, A = r.memoizedState, h.state = A, xi(r, o, h, c);
      var Z = r.memoizedState;
      g !== F || A !== Z || xt.current || Ti ? (typeof I == "function" && (Yf(r, l, I, o), Z = r.memoizedState), (M = Ti || mv(r, l, M, o, A, Z, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, Z, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, Z, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Z), h.props = o, h.state = Z, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return wv(n, r, l, o, d, c);
  }
  function wv(n, r, l, o, c, d) {
    we(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && cv(r, l, !1), rn(n, r, d);
    o = r.stateNode, Xm.current = r;
    var g = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = tu(r, n.child, null, d), r.child = tu(r, null, g, d)) : Bt(n, r, g, d), r.memoizedState = o.state, c && cv(r, l, !0), r.child;
  }
  function Dv(n) {
    var r = n.stateNode;
    r.pendingContext ? gi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && gi(n, r.context, !1), $f(n, r.containerInfo);
  }
  function tc(n, r, l, o, c) {
    return mt(), Hf(c), r.flags |= 256, Bt(n, r, l, o), r.child;
  }
  var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Zf(n, r, l) {
    var o = r.pendingProps, c = pe.current, d = !1, h = (r.flags & 128) !== 0, g;
    if ((g = h) || (g = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), g ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), $e(pe, c & 1), n === null)
      return ks(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Oo(h, o, 0, null), n = Tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kf(l), r.memoizedState = vl, n) : Jf(r, h));
    if (c = n.memoizedState, c !== null && (g = c.dehydrated, g !== null))
      return qm(n, r, h, o, g, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, g = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Oi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), g !== null ? d = Oi(g, d) : (d = Tl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Kf(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = vl, o;
    }
    return d = n.child, n = d.sibling, o = Oi(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Jf(n, r) {
    return r = Oo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ou(n, r, l, o) {
    return o !== null && Hf(o), tu(r, n.child, null, l), n = Jf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qm(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Eo(Error(N(422))), ou(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Oo({ mode: "visible", children: o.children }, c, 0, null), d = Tl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && tu(r, n.child, null, h), r.child.memoizedState = Kf(h), r.memoizedState = vl, d);
    if (!(r.mode & 1))
      return ou(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var g = o.dgst;
      return o = g, d = Error(N(419)), o = Eo(d, o, void 0), ou(n, r, h, o);
    }
    if (g = (h & n.childLanes) !== 0, Ut || g) {
      if (o = gt, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Va(n, c), Tn(o, n, c, -1));
      }
      return fd(), o = Eo(Error(N(421))), ou(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ny.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Wn = ra(c.nextSibling), sr = r, st = !0, Or = null, n !== null && (Gn[yn++] = tn, Gn[yn++] = Fa, Gn[yn++] = Lr, tn = n.id, Fa = n.overflow, Lr = r), r = Jf(r, o.children), r.flags |= 4096, r);
  }
  function ed(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Xt(n.return, r, l);
  }
  function nc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function td(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Bt(n, r, o.children, l), o = pe.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && ed(n, l, r);
            else if (n.tag === 19)
              ed(n, l, r);
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
    if ($e(pe, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && yt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), nc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yt(n) === null) {
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
  function gn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function rn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), $a |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(N(153));
    if (r.child !== null) {
      for (n = r.child, l = Oi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Oi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Pa(n, r, l) {
    switch (r.tag) {
      case 3:
        Dv(r), mt();
        break;
      case 5:
        fe(r);
        break;
      case 1:
        pt(r.type) && xs(r);
        break;
      case 4:
        $f(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        $e(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? ($e(pe, pe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Zf(n, r, l) : ($e(pe, pe.current & 1), n = rn(n, r, l), n !== null ? n.sibling : null);
        $e(pe, pe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return td(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $e(pe, pe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, pl(n, r, l);
    }
    return rn(n, r, l);
  }
  var Ro, hl, Ur, Pt;
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
          c = Bn(n, c), o = Bn(n, o), d = [];
          break;
        case "select":
          c = q({}, c, { value: void 0 }), o = q({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Qi(n, c), o = Qi(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Rs);
      }
      hn(l, o);
      var h;
      l = null;
      for (M in c)
        if (!o.hasOwnProperty(M) && c.hasOwnProperty(M) && c[M] != null)
          if (M === "style") {
            var g = c[M];
            for (h in g)
              g.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (Hn.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
      for (M in o) {
        var C = o[M];
        if (g = c != null ? c[M] : void 0, o.hasOwnProperty(M) && C !== g && (C != null || g != null))
          if (M === "style")
            if (g) {
              for (h in g)
                !g.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && g[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                M,
                l
              )), l = C;
          else
            M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, g = g ? g.__html : void 0, C != null && g !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (Hn.hasOwnProperty(M) ? (C != null && M === "onScroll" && rt("scroll", n), d || g === C || (d = [])) : (d = d || []).push(M, C));
      }
      l && (d = d || []).push("style", l);
      var M = d;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, Pt = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function xo(n, r) {
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
  function Sn(n) {
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
    switch (Uf(r), r.tag) {
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
        return Sn(r), null;
      case 1:
        return pt(r.type) && Mr(), Sn(r), null;
      case 3:
        return o = r.stateNode, wi(), Ye(xt), Ye(ge), Us(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Or !== null && (Lo(Or), Or = null))), hl(n, r), Sn(r), null;
      case 5:
        De(r);
        var c = il(nu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ur(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(N(166));
            return Sn(r), null;
          }
          if (n = il(aa.current), bs(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[pa] = r, o[nl] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < lo.length; c++)
                  rt(lo[c], o);
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
                Xr(o, d), rt("invalid", o);
            }
            hn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var g = d[h];
                h === "children" ? typeof g == "string" ? o.textContent !== g && (d.suppressHydrationWarning !== !0 && Ts(o.textContent, g, n), c = ["children", g]) : typeof g == "number" && o.textContent !== "" + g && (d.suppressHydrationWarning !== !0 && Ts(
                  o.textContent,
                  g,
                  n
                ), c = ["children", "" + g]) : Hn.hasOwnProperty(h) && g != null && h === "onScroll" && rt("scroll", o);
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
              switch (h = Ft(l, o), l) {
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
                  for (c = 0; c < lo.length; c++)
                    rt(lo[c], n);
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
                  Tr(n, o), c = Bn(n, o), rt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = q({}, o, { value: void 0 }), rt("invalid", n);
                  break;
                case "textarea":
                  Xr(n, o), c = Qi(n, o), rt("invalid", n);
                  break;
                default:
                  c = o;
              }
              hn(l, c), g = c;
              for (d in g)
                if (g.hasOwnProperty(d)) {
                  var C = g[d];
                  d === "style" ? tt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && ju(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && si(n, C) : typeof C == "number" && si(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Hn.hasOwnProperty(d) ? C != null && d === "onScroll" && rt("scroll", n) : C != null && Ne(n, d, C, h));
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
        return Sn(r), null;
      case 6:
        if (n && r.stateNode != null)
          Pt(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(N(166));
          if (l = il(nu.current), il(aa.current), bs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[pa] = r, (d = o.nodeValue !== l) && (n = sr, n !== null))
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
        return Sn(r), null;
      case 13:
        if (Ye(pe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (st && Wn !== null && r.mode & 1 && !(r.flags & 128))
            pv(), mt(), r.flags |= 98560, d = !1;
          else if (d = bs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(N(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(N(317));
              d[pa] = r;
            } else
              mt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Sn(r), d = !1;
          } else
            Or !== null && (Lo(Or), Or = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pe.current & 1 ? $t === 0 && ($t = 3) : fd())), r.updateQueue !== null && (r.flags |= 4), Sn(r), null);
      case 4:
        return wi(), hl(n, r), n === null && Kl(r.stateNode.containerInfo), Sn(r), null;
      case 10:
        return Ei(r.type._context), Sn(r), null;
      case 17:
        return pt(r.type) && Mr(), Sn(r), null;
      case 19:
        if (Ye(pe), d = r.memoizedState, d === null)
          return Sn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            xo(d, !1);
          else {
            if ($t !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = yt(n), h !== null) {
                  for (r.flags |= 128, xo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return $e(pe, pe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Rt() > hu && (r.flags |= 128, o = !0, xo(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yt(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !st)
                return Sn(r), null;
            } else
              2 * Rt() - d.renderingStartTime > hu && l !== 1073741824 && (r.flags |= 128, o = !0, xo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Rt(), r.sibling = null, l = pe.current, $e(pe, o ? l & 1 | 2 : l & 1), r) : (Sn(r), null);
      case 22:
      case 23:
        return cd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? dr & 1073741824 && (Sn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, r.tag));
  }
  function nd(n, r) {
    switch (Uf(r), r.tag) {
      case 1:
        return pt(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wi(), Ye(xt), Ye(ge), Us(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return De(r), null;
      case 13:
        if (Ye(pe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(N(340));
          mt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ye(pe), null;
      case 4:
        return wi(), null;
      case 10:
        return Ei(r.type._context), null;
      case 22:
      case 23:
        return cd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var wo = !1, Yt = !1, kv = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function su(n, r) {
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
  function Do(n, r, l) {
    try {
      l();
    } catch (o) {
      Dt(n, r, o);
    }
  }
  var bv = !1;
  function _v(n, r) {
    if (kf = Xi, n = ys(), za(n)) {
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
            var h = 0, g = -1, C = -1, M = 0, H = 0, F = n, A = null;
            t:
              for (; ; ) {
                for (var I; F !== l || c !== 0 && F.nodeType !== 3 || (g = h + c), F !== d || o !== 0 && F.nodeType !== 3 || (C = h + o), F.nodeType === 3 && (h += F.nodeValue.length), (I = F.firstChild) !== null; )
                  A = F, F = I;
                for (; ; ) {
                  if (F === n)
                    break t;
                  if (A === l && ++M === c && (g = h), A === d && ++H === o && (C = h), (I = F.nextSibling) !== null)
                    break;
                  F = A, A = F.parentNode;
                }
                F = I;
              }
            l = g === -1 || C === -1 ? null : { start: g, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (el = { focusedElem: n, selectionRange: l }, Xi = !1, K = r; K !== null; )
      if (r = K, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, K = n;
      else
        for (; K !== null; ) {
          r = K;
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
                    var te = Z.memoizedProps, _t = Z.memoizedState, x = r.stateNode, T = x.getSnapshotBeforeUpdate(r.elementType === r.type ? te : cr(r.type, te), _t);
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
          } catch (j) {
            Dt(r, r.return, j);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, K = n;
            break;
          }
          K = r.return;
        }
    return Z = bv, bv = !1, Z;
  }
  function ko(n, r, l) {
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
  function rd(n) {
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
  function ad(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ad(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[pa], delete r[nl], delete r[Mf], delete r[$m], delete r[Lf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Mv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function rc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Mv(n.return))
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
  var vt = null, qt = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; )
      fu(n, r, l), l = l.sibling;
  }
  function fu(n, r, l) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function")
      try {
        Zr.onCommitFiberUnmount($u, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Yt || su(l, r);
      case 6:
        var o = vt, c = qt;
        vt = null, Ar(n, r, l), vt = o, qt = c, vt !== null && (qt ? (n = vt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vt.removeChild(l.stateNode));
        break;
      case 18:
        vt !== null && (qt ? (n = vt, l = l.stateNode, n.nodeType === 8 ? hi(n.parentNode, l) : n.nodeType === 1 && hi(n, l), Xu(n)) : hi(vt, l.stateNode));
        break;
      case 4:
        o = vt, c = qt, vt = l.stateNode.containerInfo, qt = !0, Ar(n, r, l), vt = o, qt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Yt && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && Do(l, r, h), c = c.next;
          } while (c !== o);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!Yt && (su(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (g) {
            Dt(l, r, g);
          }
        Ar(n, r, l);
        break;
      case 21:
        Ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Yt = (o = Yt) || l.memoizedState !== null, Ar(n, r, l), Yt = o) : Ar(n, r, l);
        break;
      default:
        Ar(n, r, l);
    }
  }
  function Ya(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new kv()), r.forEach(function(o) {
        var c = ry.bind(null, n, o);
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
          fu(d, h, c), vt = null, qt = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (M) {
          Dt(c, r, M);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Lv(r, n), r = r.sibling;
  }
  function Lv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ia(r, n), ga(n), o & 4) {
          try {
            ko(3, n, n.return), bo(3, n);
          } catch (te) {
            Dt(n, n.return, te);
          }
          try {
            ko(5, n, n.return);
          } catch (te) {
            Dt(n, n.return, te);
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
          } catch (te) {
            Dt(n, n.return, te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, g = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              g === "input" && d.type === "radio" && d.name != null && Wr(c, d), Ft(g, h);
              var M = Ft(g, d);
              for (h = 0; h < C.length; h += 2) {
                var H = C[h], F = C[h + 1];
                H === "style" ? tt(c, F) : H === "dangerouslySetInnerHTML" ? ju(c, F) : H === "children" ? si(c, F) : Ne(c, H, F, M);
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
                  var I = d.value;
                  I != null ? li(c, !!d.multiple, I, !1) : A !== !!d.multiple && (d.defaultValue != null ? li(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : li(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[nl] = d;
            } catch (te) {
              Dt(n, n.return, te);
            }
        }
        break;
      case 6:
        if (ia(r, n), ga(n), o & 4) {
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
        if (ia(r, n), ga(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Xu(r.containerInfo);
          } catch (te) {
            Dt(n, n.return, te);
          }
        break;
      case 4:
        ia(r, n), ga(n);
        break;
      case 13:
        ia(r, n), ga(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (ud = Rt())), o & 4 && Ya(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? (Yt = (M = Yt) || H, ia(r, n), Yt = M) : ia(r, n), ga(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !H && n.mode & 1)
            for (K = n, H = n.child; H !== null; ) {
              for (F = K = H; K !== null; ) {
                switch (A = K, I = A.child, A.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ko(4, A, A.return);
                    break;
                  case 1:
                    su(A, A.return);
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
                    su(A, A.return);
                    break;
                  case 22:
                    if (A.memoizedState !== null) {
                      id(F);
                      continue;
                    }
                }
                I !== null ? (I.return = A, K = I) : id(F);
              }
              H = H.sibling;
            }
          e:
            for (H = null, F = n; ; ) {
              if (F.tag === 5) {
                if (H === null) {
                  H = F;
                  try {
                    c = F.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (g = F.stateNode, C = F.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, g.style.display = _e("display", h));
                  } catch (te) {
                    Dt(n, n.return, te);
                  }
                }
              } else if (F.tag === 6) {
                if (H === null)
                  try {
                    F.stateNode.nodeValue = M ? "" : F.memoizedProps;
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
        ia(r, n), ga(n), o & 4 && Ya(n);
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
            if (Mv(l)) {
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
            var d = rc(n);
            ya(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, g = rc(n);
            cu(n, g, h);
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
  function Ov(n, r, l) {
    K = n, du(n);
  }
  function du(n, r, l) {
    for (var o = (n.mode & 1) !== 0; K !== null; ) {
      var c = K, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || wo;
        if (!h) {
          var g = c.alternate, C = g !== null && g.memoizedState !== null || Yt;
          g = wo;
          var M = Yt;
          if (wo = h, (Yt = C) && !M)
            for (K = c; K !== null; )
              h = K, C = h.child, h.tag === 22 && h.memoizedState !== null ? zv(c) : C !== null ? (C.return = h, K = C) : zv(c);
          for (; d !== null; )
            K = d, du(d), d = d.sibling;
          K = c, wo = g, Yt = M;
        }
        Nv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, K = d) : Nv(n);
    }
  }
  function Nv(n) {
    for (; K !== null; ) {
      var r = K;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Yt || bo(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Yt)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : cr(r.type, l.memoizedProps);
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
                  var M = r.alternate;
                  if (M !== null) {
                    var H = M.memoizedState;
                    if (H !== null) {
                      var F = H.dehydrated;
                      F !== null && Xu(F);
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
          Yt || r.flags & 512 && rd(r);
        } catch (A) {
          Dt(r, r.return, A);
        }
      }
      if (r === n) {
        K = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, K = l;
        break;
      }
      K = r.return;
    }
  }
  function id(n) {
    for (; K !== null; ) {
      var r = K;
      if (r === n) {
        K = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, K = l;
        break;
      }
      K = r.return;
    }
  }
  function zv(n) {
    for (; K !== null; ) {
      var r = K;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              bo(4, r);
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
              rd(r);
            } catch (C) {
              Dt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              rd(r);
            } catch (C) {
              Dt(r, h, C);
            }
        }
      } catch (C) {
        Dt(r, r.return, C);
      }
      if (r === n) {
        K = null;
        break;
      }
      var g = r.sibling;
      if (g !== null) {
        g.return = r.return, K = g;
        break;
      }
      K = r.return;
    }
  }
  var ac = Math.ceil, _o = ut.ReactCurrentDispatcher, ld = ut.ReactCurrentOwner, Cn = ut.ReactCurrentBatchConfig, Le = 0, gt = null, wt = null, Kt = 0, dr = 0, pu = xe(0), $t = 0, Mo = null, $a = 0, ic = 0, vu = 0, ml = null, kn = null, ud = 0, hu = 1 / 0, Qa = null, lc = !1, yl = null, Sa = null, _i = !1, Mi = null, uc = 0, mu = 0, oc = null, gl = -1, Sl = 0;
  function En() {
    return Le & 6 ? Rt() : gl !== -1 ? gl : gl = Rt();
  }
  function At(n) {
    return n.mode & 1 ? Le & 2 && Kt !== 0 ? Kt & -Kt : _s.transition !== null ? (Sl === 0 && (Sl = is()), Sl) : (n = Ge, n !== 0 || (n = window.event, n = n === void 0 ? 16 : uf(n.type)), n) : 1;
  }
  function Tn(n, r, l, o) {
    if (50 < mu)
      throw mu = 0, oc = null, Error(N(185));
    Wi(n, l, o), (!(Le & 2) || n !== gt) && (n === gt && (!(Le & 2) && (ic |= l), $t === 4 && Hr(n, Kt)), Rn(n, o), l === 1 && Le === 0 && !(r.mode & 1) && (hu = Rt() + 500, Wt && Qn()));
  }
  function Rn(n, r) {
    var l = n.callbackNode;
    as(n, r);
    var o = Jr(n, n === gt ? Kt : 0);
    if (o === 0)
      l !== null && Ep(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Ep(l), r === 1)
        n.tag === 0 ? Nf(Uv.bind(null, n)) : Of(Uv.bind(null, n)), _f(function() {
          !(Le & 6) && Qn();
        }), l = null;
      else {
        switch (rf(o)) {
          case 1:
            l = Ma;
            break;
          case 4:
            l = Me;
            break;
          case 16:
            l = ci;
            break;
          case 536870912:
            l = Jc;
            break;
          default:
            l = ci;
        }
        l = pd(l, yu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function yu(n, r) {
    if (gl = -1, Sl = 0, Le & 6)
      throw Error(N(327));
    var l = n.callbackNode;
    if (Su() && n.callbackNode !== l)
      return null;
    var o = Jr(n, n === gt ? Kt : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = cc(n, o);
    else {
      r = o;
      var c = Le;
      Le |= 2;
      var d = sc();
      (gt !== n || Kt !== r) && (Qa = null, hu = Rt() + 500, Cl(n, r));
      do
        try {
          Jm();
          break;
        } catch (g) {
          Av(n, g);
        }
      while (!0);
      Vf(), _o.current = d, Le = c, wt !== null ? r = 0 : (gt = null, Kt = 0, r = $t);
    }
    if (r !== 0) {
      if (r === 2 && (c = tf(n), c !== 0 && (o = c, r = od(n, c))), r === 1)
        throw l = Mo, Cl(n, 0), Hr(n, o), Rn(n, Rt()), l;
      if (r === 6)
        Hr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !sd(c) && (r = cc(n, o), r === 2 && (d = tf(n), d !== 0 && (o = d, r = od(n, d))), r === 1))
          throw l = Mo, Cl(n, 0), Hr(n, o), Rn(n, Rt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            El(n, kn, Qa);
            break;
          case 3:
            if (Hr(n, o), (o & 130023424) === o && (r = ud + 500 - Rt(), 10 < r)) {
              if (Jr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                En(), n.pingedLanes |= n.suspendedLanes & c;
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
            if (o = c, o = Rt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ac(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = tl(El.bind(null, n, kn, Qa), o);
              break;
            }
            El(n, kn, Qa);
            break;
          case 5:
            El(n, kn, Qa);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return Rn(n, Rt()), n.callbackNode === l ? yu.bind(null, n) : null;
  }
  function od(n, r) {
    var l = ml;
    return n.current.memoizedState.isDehydrated && (Cl(n, r).flags |= 256), n = cc(n, r), n !== 2 && (r = kn, kn = l, r !== null && Lo(r)), n;
  }
  function Lo(n) {
    kn === null ? kn = n : kn.push.apply(kn, n);
  }
  function sd(n) {
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
  function Hr(n, r) {
    for (r &= ~vu, r &= ~ic, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - xr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Uv(n) {
    if (Le & 6)
      throw Error(N(327));
    Su();
    var r = Jr(n, 0);
    if (!(r & 1))
      return Rn(n, Rt()), null;
    var l = cc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = tf(n);
      o !== 0 && (r = o, l = od(n, o));
    }
    if (l === 1)
      throw l = Mo, Cl(n, 0), Hr(n, r), Rn(n, Rt()), l;
    if (l === 6)
      throw Error(N(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, El(n, kn, Qa), Rn(n, Rt()), null;
  }
  function gu(n, r) {
    var l = Le;
    Le |= 1;
    try {
      return n(r);
    } finally {
      Le = l, Le === 0 && (hu = Rt() + 500, Wt && Qn());
    }
  }
  function Li(n) {
    Mi !== null && Mi.tag === 0 && !(Le & 6) && Su();
    var r = Le;
    Le |= 1;
    var l = Cn.transition, o = Ge;
    try {
      if (Cn.transition = null, Ge = 1, n)
        return n();
    } finally {
      Ge = o, Cn.transition = l, Le = r, !(Le & 6) && Qn();
    }
  }
  function cd() {
    dr = pu.current, Ye(pu);
  }
  function Cl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, sv(l)), wt !== null)
      for (l = wt.return; l !== null; ) {
        var o = l;
        switch (Uf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Mr();
            break;
          case 3:
            wi(), Ye(xt), Ye(ge), Us();
            break;
          case 5:
            De(o);
            break;
          case 4:
            wi();
            break;
          case 13:
            Ye(pe);
            break;
          case 19:
            Ye(pe);
            break;
          case 10:
            Ei(o.type._context);
            break;
          case 22:
          case 23:
            cd();
        }
        l = l.return;
      }
    if (gt = n, wt = n = Oi(n.current, null), Kt = dr = r, $t = 0, Mo = null, vu = ic = $a = 0, kn = ml = null, nn !== null) {
      for (r = 0; r < nn.length; r++)
        if (l = nn[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      nn = null;
    }
    return n;
  }
  function Av(n, r) {
    do {
      var l = wt;
      try {
        if (Vf(), As.current = Zs, ve) {
          for (var o = ct.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ve = !1;
        }
        if (ll = 0, Ae = z = ct = null, ma = !1, fr = 0, ld.current = null, l === null || l.return === null) {
          $t = 1, Mo = r, wt = null;
          break;
        }
        e: {
          var d = n, h = l.return, g = l, C = r;
          if (r = Kt, g.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var M = C, H = g, F = H.tag;
            if (!(H.mode & 1) && (F === 0 || F === 11 || F === 15)) {
              var A = H.alternate;
              A ? (H.updateQueue = A.updateQueue, H.memoizedState = A.memoizedState, H.lanes = A.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var I = Wf(h);
            if (I !== null) {
              I.flags &= -257, Xf(I, h, g, d, r), I.mode & 1 && xv(d, M, r), r = I, C = M;
              var Z = r.updateQueue;
              if (Z === null) {
                var te = /* @__PURE__ */ new Set();
                te.add(C), r.updateQueue = te;
              } else
                Z.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                xv(d, M, r), fd();
                break e;
              }
              C = Error(N(426));
            }
          } else if (st && g.mode & 1) {
            var _t = Wf(h);
            if (_t !== null) {
              !(_t.flags & 65536) && (_t.flags |= 256), Xf(_t, h, g, d, r), Hf(lu(C, g));
              break e;
            }
          }
          d = C = lu(C, g), $t !== 4 && ($t = 2), ml === null ? ml = [d] : ml.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var x = Rv(d, C, r);
                Pf(d, x);
                break e;
              case 1:
                g = C;
                var T = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Sa === null || !Sa.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var j = To(d, g, r);
                  Pf(d, j);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        dd(l);
      } catch (ne) {
        r = ne, wt === l && l !== null && (wt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sc() {
    var n = _o.current;
    return _o.current = Zs, n === null ? Zs : n;
  }
  function fd() {
    ($t === 0 || $t === 3 || $t === 2) && ($t = 4), gt === null || !($a & 268435455) && !(ic & 268435455) || Hr(gt, Kt);
  }
  function cc(n, r) {
    var l = Le;
    Le |= 2;
    var o = sc();
    (gt !== n || Kt !== r) && (Qa = null, Cl(n, r));
    do
      try {
        Zm();
        break;
      } catch (c) {
        Av(n, c);
      }
    while (!0);
    if (Vf(), Le = l, _o.current = o, wt !== null)
      throw Error(N(261));
    return gt = null, Kt = 0, $t;
  }
  function Zm() {
    for (; wt !== null; )
      Hv(wt);
  }
  function Jm() {
    for (; wt !== null && !Tm(); )
      Hv(wt);
  }
  function Hv(n) {
    var r = Vv(n.alternate, n, dr);
    n.memoizedProps = n.pendingProps, r === null ? dd(n) : wt = r, ld.current = null;
  }
  function dd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = nd(l, r), l !== null) {
          l.flags &= 32767, wt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $t = 6, wt = null;
          return;
        }
      } else if (l = Km(l, r, dr), l !== null) {
        wt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        wt = r;
        return;
      }
      wt = r = n;
    } while (r !== null);
    $t === 0 && ($t = 5);
  }
  function El(n, r, l) {
    var o = Ge, c = Cn.transition;
    try {
      Cn.transition = null, Ge = 1, ey(n, r, l, o);
    } finally {
      Cn.transition = c, Ge = o;
    }
    return null;
  }
  function ey(n, r, l, o) {
    do
      Su();
    while (Mi !== null);
    if (Le & 6)
      throw Error(N(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(N(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Dm(n, d), n === gt && (wt = gt = null, Kt = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || _i || (_i = !0, pd(ci, function() {
      return Su(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Cn.transition, Cn.transition = null;
      var h = Ge;
      Ge = 1;
      var g = Le;
      Le |= 4, ld.current = null, _v(n, l), Lv(l, n), gs(el), Xi = !!kf, el = kf = null, n.current = l, Ov(l), Rm(), Le = g, Ge = h, Cn.transition = d;
    } else
      n.current = l;
    if (_i && (_i = !1, Mi = n, uc = c), d = n.pendingLanes, d === 0 && (Sa = null), Rp(l.stateNode), Rn(n, Rt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (lc)
      throw lc = !1, n = yl, yl = null, n;
    return uc & 1 && n.tag !== 0 && Su(), d = n.pendingLanes, d & 1 ? n === oc ? mu++ : (mu = 0, oc = n) : mu = 0, Qn(), null;
  }
  function Su() {
    if (Mi !== null) {
      var n = rf(uc), r = Cn.transition, l = Ge;
      try {
        if (Cn.transition = null, Ge = 16 > n ? 16 : n, Mi === null)
          var o = !1;
        else {
          if (n = Mi, Mi = null, uc = 0, Le & 6)
            throw Error(N(331));
          var c = Le;
          for (Le |= 4, K = n.current; K !== null; ) {
            var d = K, h = d.child;
            if (K.flags & 16) {
              var g = d.deletions;
              if (g !== null) {
                for (var C = 0; C < g.length; C++) {
                  var M = g[C];
                  for (K = M; K !== null; ) {
                    var H = K;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ko(8, H, d);
                    }
                    var F = H.child;
                    if (F !== null)
                      F.return = H, K = F;
                    else
                      for (; K !== null; ) {
                        H = K;
                        var A = H.sibling, I = H.return;
                        if (ad(H), H === M) {
                          K = null;
                          break;
                        }
                        if (A !== null) {
                          A.return = I, K = A;
                          break;
                        }
                        K = I;
                      }
                  }
                }
                var Z = d.alternate;
                if (Z !== null) {
                  var te = Z.child;
                  if (te !== null) {
                    Z.child = null;
                    do {
                      var _t = te.sibling;
                      te.sibling = null, te = _t;
                    } while (te !== null);
                  }
                }
                K = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, K = h;
            else
              e:
                for (; K !== null; ) {
                  if (d = K, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ko(9, d, d.return);
                    }
                  var x = d.sibling;
                  if (x !== null) {
                    x.return = d.return, K = x;
                    break e;
                  }
                  K = d.return;
                }
          }
          var T = n.current;
          for (K = T; K !== null; ) {
            h = K;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, K = k;
            else
              e:
                for (h = T; K !== null; ) {
                  if (g = K, g.flags & 2048)
                    try {
                      switch (g.tag) {
                        case 0:
                        case 11:
                        case 15:
                          bo(9, g);
                      }
                    } catch (ne) {
                      Dt(g, g.return, ne);
                    }
                  if (g === h) {
                    K = null;
                    break e;
                  }
                  var j = g.sibling;
                  if (j !== null) {
                    j.return = g.return, K = j;
                    break e;
                  }
                  K = g.return;
                }
          }
          if (Le = c, Qn(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot($u, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Ge = l, Cn.transition = r;
      }
    }
    return !1;
  }
  function Fv(n, r, l) {
    r = lu(l, r), r = Rv(n, r, 1), n = Ri(n, r, 1), r = En(), n !== null && (Wi(n, 1, r), Rn(n, r));
  }
  function Dt(n, r, l) {
    if (n.tag === 3)
      Fv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Fv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Sa === null || !Sa.has(o))) {
            n = lu(l, n), n = To(r, n, 1), r = Ri(r, n, 1), n = En(), r !== null && (Wi(r, 1, n), Rn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function ty(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = En(), n.pingedLanes |= n.suspendedLanes & l, gt === n && (Kt & l) === l && ($t === 4 || $t === 3 && (Kt & 130023424) === Kt && 500 > Rt() - ud ? Cl(n, 0) : vu |= l), Rn(n, r);
  }
  function fc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Bl, Bl <<= 1, !(Bl & 130023424) && (Bl = 4194304)) : r = 1);
    var l = En();
    n = Va(n, r), n !== null && (Wi(n, r, l), Rn(n, l));
  }
  function ny(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), fc(n, l);
  }
  function ry(n, r) {
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
    o !== null && o.delete(r), fc(n, l);
  }
  var Vv;
  Vv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || xt.current)
        Ut = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Ut = !1, Pa(n, r, l);
        Ut = !!(n.flags & 131072);
      }
    else
      Ut = !1, st && r.flags & 1048576 && zf(r, Jl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gn(n, r), n = r.pendingProps;
        var c = _r(r, ge.current);
        B(r, l), c = Di(null, r, o, n, c, l);
        var d = sl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, pt(o) ? (d = !0, xs(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Bf(r), c.updater = Os, r.stateNode = c, c._reactInternals = r, Ns(r, o, n, l), r = wv(null, r, o, !0, d, l)) : (r.tag = 0, st && d && ws(r), Bt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = iy(o), n = cr(o, n), c) {
            case 0:
              r = uu(null, r, o, n, l);
              break e;
            case 1:
              r = qf(null, r, o, n, l);
              break e;
            case 11:
              r = bi(null, r, o, n, l);
              break e;
            case 14:
              r = ec(null, r, o, cr(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : cr(o, c), uu(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : cr(o, c), qf(n, r, o, c, l);
      case 3:
        e: {
          if (Dv(r), n === null)
            throw Error(N(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, jt(n, r), xi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = lu(Error(N(423)), r), r = tc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = lu(Error(N(424)), r), r = tc(n, r, o, l, c);
              break e;
            } else
              for (Wn = ra(r.stateNode.containerInfo.firstChild), sr = r, st = !0, Or = null, l = Ev(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (mt(), o === c) {
              r = rn(n, r, l);
              break e;
            }
            Bt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fe(r), n === null && ks(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, so(o, c) ? h = null : d !== null && so(o, d) && (r.flags |= 32), we(n, r), Bt(n, r, h, l), r.child;
      case 6:
        return n === null && ks(r), null;
      case 13:
        return Zf(n, r, l);
      case 4:
        return $f(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = tu(r, null, o, l) : Bt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : cr(o, c), bi(n, r, o, c, l);
      case 7:
        return Bt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Bt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Bt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, $e(ha, o._currentValue), o._currentValue = h, d !== null)
            if (kr(d.value, h)) {
              if (d.children === c.children && !xt.current) {
                r = rn(n, r, l);
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
                        C = ja(-1, l & -l), C.tag = 2;
                        var M = d.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var H = M.pending;
                          H === null ? C.next = C : (C.next = H.next, H.next = C), M.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), Xt(
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
                  h.lanes |= l, g = h.alternate, g !== null && (g.lanes |= l), Xt(h, l, r), h = d.sibling;
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
          Bt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, B(r, l), c = bt(c), o = o(c), r.flags |= 1, Bt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = cr(o, r.pendingProps), c = cr(o.type, c), ec(n, r, o, c, l);
      case 15:
        return Kn(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : cr(o, c), gn(n, r), r.tag = 1, pt(o) ? (n = !0, xs(r)) : n = !1, B(r, l), yv(r, o, c), Ns(r, o, c, l), wv(null, r, o, !0, n, l);
      case 19:
        return td(n, r, l);
      case 22:
        return pl(n, r, l);
    }
    throw Error(N(156, r.tag));
  };
  function pd(n, r) {
    return Zc(n, r);
  }
  function ay(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fr(n, r, l, o) {
    return new ay(n, r, l, o);
  }
  function vd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function iy(n) {
    if (typeof n == "function")
      return vd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vn)
        return 11;
      if (n === Sr)
        return 14;
    }
    return 2;
  }
  function Oi(n, r) {
    var l = n.alternate;
    return l === null ? (l = Fr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function dc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      vd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case ke:
            return Tl(l.children, c, d, r);
          case xn:
            h = 8, c |= 8;
            break;
          case rr:
            return n = Fr(12, l, r, c | 2), n.elementType = rr, n.lanes = d, n;
          case Ue:
            return n = Fr(13, l, r, c), n.elementType = Ue, n.lanes = d, n;
          case We:
            return n = Fr(19, l, r, c), n.elementType = We, n.lanes = d, n;
          case Cr:
            return Oo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Lt:
                  h = 10;
                  break e;
                case it:
                  h = 9;
                  break e;
                case Vn:
                  h = 11;
                  break e;
                case Sr:
                  h = 14;
                  break e;
                case Ct:
                  h = 16, o = null;
                  break e;
              }
            throw Error(N(130, n == null ? n : typeof n, ""));
        }
    return r = Fr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Tl(n, r, l, o) {
    return n = Fr(7, n, o, r), n.lanes = l, n;
  }
  function Oo(n, r, l, o) {
    return n = Fr(22, n, o, r), n.elementType = Cr, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function No(n, r, l) {
    return n = Fr(6, n, null, r), n.lanes = l, n;
  }
  function Rl(n, r, l) {
    return r = Fr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ly(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nf(0), this.expirationTimes = nf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function pc(n, r, l, o, c, d, h, g, C) {
    return n = new ly(n, r, l, g, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Fr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bf(d), n;
  }
  function jv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ht, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function hd(n) {
    if (!n)
      return va;
    n = n._reactInternals;
    e: {
      if (da(n) !== n || n.tag !== 1)
        throw Error(N(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (pt(r.type)) {
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
      if (pt(l))
        return po(n, l, r);
    }
    return r;
  }
  function Bv(n, r, l, o, c, d, h, g, C) {
    return n = pc(l, o, !0, n, c, d, h, g, C), n.context = hd(null), l = n.current, o = En(), c = At(l), d = ja(o, c), d.callback = r ?? null, Ri(l, d, c), n.current.lanes = c, Wi(n, c, o), Rn(n, o), n;
  }
  function zo(n, r, l, o) {
    var c = r.current, d = En(), h = At(c);
    return l = hd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ja(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ri(c, r, h), n !== null && (Tn(n, c, h, d), Ls(n, c, h)), h;
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
  function Pv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function md(n, r) {
    Pv(n, r), (n = n.alternate) && Pv(n, r);
  }
  function Yv() {
    return null;
  }
  var yd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hc(n) {
    this._internalRoot = n;
  }
  Ia.prototype.render = hc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(N(409));
    zo(n, r, null, null);
  }, Ia.prototype.unmount = hc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Li(function() {
        zo(null, n, null, null);
      }), r[Ha] = null;
    }
  };
  function Ia(n) {
    this._internalRoot = n;
  }
  Ia.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = kp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qe.length && r !== 0 && r < qe[l].priority; l++)
        ;
      qe.splice(l, 0, n), l === 0 && bp(n);
    }
  };
  function gd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function mc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function $v() {
  }
  function uy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var M = vc(h);
          d.call(M);
        };
      }
      var h = Bv(r, o, n, 0, null, !1, !1, "", $v);
      return n._reactRootContainer = h, n[Ha] = h.current, Kl(n.nodeType === 8 ? n.parentNode : n), Li(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var g = o;
      o = function() {
        var M = vc(C);
        g.call(M);
      };
    }
    var C = pc(n, 0, !1, null, null, !1, !1, "", $v);
    return n._reactRootContainer = C, n[Ha] = C.current, Kl(n.nodeType === 8 ? n.parentNode : n), Li(function() {
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
      h = uy(l, r, n, c, o);
    return vc(h);
  }
  Dp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Gi(r.pendingLanes);
          l !== 0 && (Qu(r, l | 1), Rn(r, Rt()), !(Le & 6) && (hu = Rt() + 500, Qn()));
        }
        break;
      case 13:
        Li(function() {
          var o = Va(n, 1);
          if (o !== null) {
            var c = En();
            Tn(o, n, 1, c);
          }
        }), md(n, 1);
    }
  }, ls = function(n) {
    if (n.tag === 13) {
      var r = Va(n, 134217728);
      if (r !== null) {
        var l = En();
        Tn(r, n, 134217728, l);
      }
      md(n, 134217728);
    }
  }, nt = function(n) {
    if (n.tag === 13) {
      var r = At(n), l = Va(n, r);
      if (l !== null) {
        var o = En();
        Tn(l, n, r, o);
      }
      md(n, r);
    }
  }, kp = function() {
    return Ge;
  }, af = function(n, r) {
    var l = Ge;
    try {
      return Ge = n, r();
    } finally {
      Ge = l;
    }
  }, fa = function(n, r, l) {
    switch (r) {
      case "input":
        if (ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = oe(o);
              if (!c)
                throw Error(N(90));
              ka(o), ir(o, c);
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
  }, yp = gu, gp = Li;
  var oy = { usingClientEntryPoint: !1, Events: [fo, Zl, oe, Jo, es, gu] }, Cu = { findFiberByHostInstance: br, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, sy = { bundleType: Cu.bundleType, version: Cu.version, rendererPackageName: Cu.rendererPackageName, rendererConfig: Cu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Sp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Cu.findFiberByHostInstance || Yv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gc.isDisabled && gc.supportsFiber)
      try {
        $u = gc.inject(sy), Zr = gc;
      } catch {
      }
  }
  return $r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oy, $r.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gd(r))
      throw Error(N(200));
    return jv(n, r, null, l);
  }, $r.createRoot = function(n, r) {
    if (!gd(n))
      throw Error(N(299));
    var l = !1, o = "", c = yd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = pc(n, 1, !1, null, null, l, !1, o, c), n[Ha] = r.current, Kl(n.nodeType === 8 ? n.parentNode : n), new hc(r);
  }, $r.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(N(188)) : (n = Object.keys(n).join(","), Error(N(268, n)));
    return n = Sp(r), n = n === null ? null : n.stateNode, n;
  }, $r.flushSync = function(n) {
    return Li(n);
  }, $r.hydrate = function(n, r, l) {
    if (!mc(r))
      throw Error(N(200));
    return yc(null, n, r, !0, l);
  }, $r.hydrateRoot = function(n, r, l) {
    if (!gd(n))
      throw Error(N(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = yd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Bv(r, null, n, 1, l ?? null, c, !1, d, h), n[Ha] = r.current, Kl(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ia(r);
  }, $r.render = function(n, r, l) {
    if (!mc(r))
      throw Error(N(200));
    return yc(null, n, r, !1, l);
  }, $r.unmountComponentAtNode = function(n) {
    if (!mc(n))
      throw Error(N(40));
    return n._reactRootContainer ? (Li(function() {
      yc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ha] = null;
      });
    }), !0) : !1;
  }, $r.unstable_batchedUpdates = gu, $r.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mc(l))
      throw Error(N(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(N(38));
    return yc(n, r, l, !1, o);
  }, $r.version = "18.2.0-next-9e3b772b8-20220608", $r;
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
var PE;
function Ak() {
  return PE || (PE = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ae = YE, Ve = $E(), N = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gr = !1;
    function Hn(e) {
      gr = e;
    }
    function Je(e) {
      if (!gr) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fn("warn", e, a);
      }
    }
    function S(e) {
      if (!gr) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fn("error", e, a);
      }
    }
    function Fn(e, t, a) {
      {
        var i = N.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Re = 0, de = 1, en = 2, ie = 3, he = 4, le = 5, be = 6, et = 7, lt = 8, Ir = 9, pn = 10, Ne = 11, ut = 12, ze = 13, ht = 14, ke = 15, xn = 16, rr = 17, Lt = 18, it = 19, Vn = 21, Ue = 22, We = 23, Sr = 24, Ct = 25, Cr = !0, Y = !1, me = !1, q = !1, Ie = !1, Xe = !0, jn = !1, ar = !1, ai = !0, wn = !0, ii = !0, Gr = /* @__PURE__ */ new Set(), sa = {}, Vu = {};
    function Er(e, t) {
      ka(e, t), ka(e + "Capture", t);
    }
    function ka(e, t) {
      sa[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), sa[e] = t;
      {
        var a = e.toLowerCase();
        Vu[a] = e, e === "onDoubleClick" && (Vu.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Gr.add(t[i]);
    }
    var vn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bn = Object.prototype.hasOwnProperty;
    function Tr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wr(e) {
      try {
        return ir(e), !1;
      } catch {
        return !0;
      }
    }
    function ir(e) {
      return "" + e;
    }
    function ba(e, t) {
      if (Wr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), ir(e);
    }
    function Al(e) {
      if (Wr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), ir(e);
    }
    function $i(e, t) {
      if (Wr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), ir(e);
    }
    function li(e, t) {
      if (Wr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), ir(e);
    }
    function Qi(e) {
      if (Wr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), ir(e);
    }
    function Xr(e) {
      if (Wr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tr(e)), ir(e);
    }
    var ui = 0, ca = 1, oi = 2, Pn = 3, qr = 4, ju = 5, si = 6, $ = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ce = $ + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _e = new RegExp("^[" + $ + "][" + ce + "]*$"), tt = {}, kt = {};
    function hn(e) {
      return Bn.call(kt, e) ? !0 : Bn.call(tt, e) ? !1 : _e.test(e) ? (kt[e] = !0, !0) : (tt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function Ft(e, t, a) {
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
    function Et(e, t, a, i) {
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
          case ju:
            return isNaN(t);
          case si:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fa(e) {
      return Tt.hasOwnProperty(e) ? Tt[e] : null;
    }
    function Ot(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === oi || t === Pn || t === qr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Tt = {}, mp = [
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
    mp.forEach(function(e) {
      Tt[e] = new Ot(
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
      Tt[t] = new Ot(
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
      Tt[e] = new Ot(
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
      Tt[e] = new Ot(
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
      Tt[e] = new Ot(
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
      Tt[e] = new Ot(
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
      Tt[e] = new Ot(
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
      Tt[e] = new Ot(
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
      Tt[e] = new Ot(
        e,
        ju,
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
      Tt[t] = new Ot(
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
      Tt[t] = new Ot(
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
      Tt[t] = new Ot(
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
      Tt[e] = new Ot(
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
    var yp = "xlinkHref";
    Tt[yp] = new Ot(
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
      Tt[e] = new Ot(
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
    var gp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ts = !1;
    function Xc(e) {
      !ts && gp.test(e) && (ts = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Bu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        ba(a, t), i.sanitizeURL && Xc("" + a);
        var s = i.attributeName, f = null;
        if (i.type === qr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Et(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Et(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Pn)
            return a;
          f = e.getAttribute(s);
        }
        return Et(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ns(e, t, a, i) {
      {
        if (!hn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return ba(a, t), u === "" + a ? a : u;
      }
    }
    function Ii(e, t, a, i) {
      var u = fa(t);
      if (!Ft(t, u, i)) {
        if (Et(t, a, u, i) && (a = null), i || u === null) {
          if (hn(t)) {
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
          R === Pn || R === qr && a === !0 ? E = "" : (ba(a, m), E = "" + a, u.sanitizeURL && Xc(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var Hl = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), _a = Symbol.for("react.fragment"), Fl = Symbol.for("react.strict_mode"), Pu = Symbol.for("react.profiler"), qc = Symbol.for("react.provider"), Kc = Symbol.for("react.context"), Vl = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), Yu = Symbol.for("react.suspense_list"), jl = Symbol.for("react.memo"), Dn = Symbol.for("react.lazy"), Sp = Symbol.for("react.scope"), Cp = Symbol.for("react.debug_trace_mode"), Zc = Symbol.for("react.offscreen"), Ep = Symbol.for("react.legacy_hidden"), Tm = Symbol.for("react.cache"), Rm = Symbol.for("react.tracing_marker"), Rt = Symbol.iterator, xm = "@@iterator";
    function Ma(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Rt && e[Rt] || e[xm];
      return typeof t == "function" ? t : null;
    }
    var Me = Object.assign, ci = 0, Tp, Jc, $u, Zr, Rp, xr, xp;
    function wp() {
    }
    wp.__reactDisabledLog = !0;
    function wm() {
      {
        if (ci === 0) {
          Tp = console.log, Jc = console.info, $u = console.warn, Zr = console.error, Rp = console.group, xr = console.groupCollapsed, xp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: wp,
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
              value: Tp
            }),
            info: Me({}, e, {
              value: Jc
            }),
            warn: Me({}, e, {
              value: $u
            }),
            error: Me({}, e, {
              value: Zr
            }),
            group: Me({}, e, {
              value: Rp
            }),
            groupCollapsed: Me({}, e, {
              value: xr
            }),
            groupEnd: Me({}, e, {
              value: xp
            })
          });
        }
        ci < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Bl = N.ReactCurrentDispatcher, Gi;
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
    var ef = !1, as;
    {
      var tf = typeof WeakMap == "function" ? WeakMap : Map;
      as = new tf();
    }
    function is(e, t) {
      if (!e || ef)
        return "";
      {
        var a = as.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ef = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Bl.current, Bl.current = null, wm();
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
            } catch (_) {
              i = _;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (_) {
              i = _;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            i = _;
          }
          e();
        }
      } catch (_) {
        if (_ && i && typeof _.stack == "string") {
          for (var p = _.stack.split(`
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
        ef = !1, Bl.current = s, rs(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", b = E ? Jr(E) : "";
      return typeof e == "function" && as.set(e, b), b;
    }
    function nf(e, t, a) {
      return is(e, !0);
    }
    function Wi(e, t, a) {
      return is(e, !1);
    }
    function Dm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Qu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return is(e, Dm(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case da:
          return Jr("Suspense");
        case Yu:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Vl:
            return Wi(e.render);
          case jl:
            return Qu(e.type, t, a);
          case Dn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Qu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ge(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Jr(e.type);
        case xn:
          return Jr("Lazy");
        case ze:
          return Jr("Suspense");
        case it:
          return Jr("SuspenseList");
        case Re:
        case en:
        case ke:
          return Wi(e.type);
        case Ne:
          return Wi(e.type.render);
        case de:
          return nf(e.type);
        default:
          return "";
      }
    }
    function rf(e) {
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
    function Dp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ls(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _a:
          return "Fragment";
        case Kr:
          return "Portal";
        case Pu:
          return "Profiler";
        case Fl:
          return "StrictMode";
        case da:
          return "Suspense";
        case Yu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Kc:
            var t = e;
            return ls(t) + ".Consumer";
          case qc:
            var a = e;
            return ls(a._context) + ".Provider";
          case Vl:
            return Dp(e, e.render, "ForwardRef");
          case jl:
            var i = e.displayName || null;
            return i !== null ? i : nt(e.type) || "Memo";
          case Dn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return nt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function kp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function af(e) {
      return e.displayName || "Context";
    }
    function Te(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Sr:
          return "Cache";
        case Ir:
          var i = a;
          return af(i) + ".Consumer";
        case pn:
          var u = a;
          return af(u._context) + ".Provider";
        case Lt:
          return "DehydratedFragment";
        case Ne:
          return kp(a, a.render, "ForwardRef");
        case et:
          return "Fragment";
        case le:
          return a;
        case he:
          return "Portal";
        case ie:
          return "Root";
        case be:
          return "Text";
        case xn:
          return nt(a);
        case lt:
          return a === Fl ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case ut:
          return "Profiler";
        case Vn:
          return "Scope";
        case ze:
          return "Suspense";
        case it:
          return "SuspenseList";
        case Ct:
          return "TracingMarker";
        case de:
        case Re:
        case rr:
        case en:
        case ht:
        case ke:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Iu = N.ReactDebugCurrentFrame, Nt = null, wr = !1;
    function Dr() {
      {
        if (Nt === null)
          return null;
        var e = Nt._debugOwner;
        if (e !== null && typeof e < "u")
          return Te(e);
      }
      return null;
    }
    function Gu() {
      return Nt === null ? "" : rf(Nt);
    }
    function Vt() {
      Iu.getCurrentStack = null, Nt = null, wr = !1;
    }
    function qe(e) {
      Iu.getCurrentStack = e === null ? null : Gu, Nt = e, wr = !1;
    }
    function km() {
      return Nt;
    }
    function ea(e) {
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
          return Xr(e), e;
        default:
          return "";
      }
    }
    var bp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pl(e, t) {
      bp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function lf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function _p(e) {
      return e._valueTracker;
    }
    function Wu(e) {
      e._valueTracker = null;
    }
    function Xu(e) {
      var t = "";
      return e && (lf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Yl(e) {
      var t = lf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
      _p(e) || (e._valueTracker = Yl(e));
    }
    function Mp(e) {
      if (!e)
        return !1;
      var t = _p(e);
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
    var os = !1, qu = !1, ss = !1, uf = !1;
    function La(e) {
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
      Pl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !qu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), qu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !os && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), os = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fi(t.value != null ? t.value : i),
        controlled: La(t)
      };
    }
    function of(e, t) {
      var a = e, i = t.checked;
      i != null && Ii(a, "checked", i, !1);
    }
    function $l(e, t) {
      var a = e;
      {
        var i = La(t);
        !a._wrapperState.controlled && i && !uf && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uf = !0), a._wrapperState.controlled && !i && !ss && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ss = !0);
      }
      of(e, t);
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
    function Ju(e, t, a) {
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
    function Lp(e, t) {
      var a = e;
      $l(a, t), lr(a, t);
    }
    function lr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        ba(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = uh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Mp(f), $l(f, p);
          }
        }
      }
    }
    function di(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || us(e.ownerDocument) !== e) && (a == null ? e.defaultValue = mn(e._wrapperState.initialValue) : e.defaultValue !== mn(a) && (e.defaultValue = mn(a)));
    }
    var cs = !1, Ql = !1, Op = !1;
    function fs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ae.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ql || (Ql = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Op || (Op = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !cs && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), cs = !0);
    }
    function sf(e, t) {
      t.value != null && e.setAttribute("value", mn(fi(t.value)));
    }
    var eo = Array.isArray;
    function It(e) {
      return eo(e);
    }
    var ds;
    ds = !1;
    function Np() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var zp = ["value", "defaultValue"];
    function bm(e) {
      {
        Pl("select", e);
        for (var t = 0; t < zp.length; t++) {
          var a = zp[t];
          if (e[a] != null) {
            var i = It(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Np()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Np());
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
    function cf(e, t) {
      return Me({}, t, {
        value: void 0
      });
    }
    function Up(e, t) {
      var a = e;
      bm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ds && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ds = !0);
    }
    function _m(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? pi(a, !!t.multiple, i, !1) : t.defaultValue != null && pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Mm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? pi(a, !!t.multiple, t.defaultValue, !0) : pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Lm(e, t) {
      var a = e, i = t.value;
      i != null && pi(a, !!t.multiple, i, !1);
    }
    var ff = !1;
    function df(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: mn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ap(e, t) {
      var a = e;
      Pl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ff && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), ff = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (It(u)) {
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
    function Hp(e, t) {
      var a = e, i = fi(t.value), u = fi(t.defaultValue);
      if (i != null) {
        var s = mn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = mn(u));
    }
    function Fp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function pf(e, t) {
      Hp(e, t);
    }
    var Oa = "http://www.w3.org/1999/xhtml", Om = "http://www.w3.org/1998/Math/MathML", vf = "http://www.w3.org/2000/svg";
    function ps(e) {
      switch (e) {
        case "svg":
          return vf;
        case "math":
          return Om;
        default:
          return Oa;
      }
    }
    function hf(e, t) {
      return e == null || e === Oa ? ps(t) : e === vf && t === "foreignObject" ? Oa : e;
    }
    var Nm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, vs, Vp = Nm(function(e, t) {
      if (e.namespaceURI === vf && !("innerHTML" in e)) {
        vs = vs || document.createElement("div"), vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yn = 1, Na = 3, zt = 8, ta = 9, qi = 11, hs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Na) {
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
    function Bp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Pp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Il).forEach(function(e) {
      Pp.forEach(function(t) {
        Il[Bp(t, e)] = Il[e];
      });
    });
    function ms(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Il.hasOwnProperty(e) && Il[e]) ? t + "px" : (li(t, e), ("" + t).trim());
    }
    var Gl = /([A-Z])/g, zm = /^ms-/;
    function Um(e) {
      return e.replace(Gl, "-$1").toLowerCase().replace(zm, "-ms-");
    }
    var Yp = function() {
    };
    {
      var $p = /^(?:webkit|moz|o)[A-Z]/, Qp = /^-ms-/, to = /-(.)/g, Wl = /;\s*$/, Xl = {}, ql = {}, Ip = !1, mf = !1, yf = function(e) {
        return e.replace(to, function(t, a) {
          return a.toUpperCase();
        });
      }, gf = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          yf(e.replace(Qp, "ms-"))
        ));
      }, Gp = function(e) {
        Xl.hasOwnProperty(e) && Xl[e] || (Xl[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Wp = function(e, t) {
        ql.hasOwnProperty(t) && ql[t] || (ql[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wl, "")));
      }, Xp = function(e, t) {
        Ip || (Ip = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Am = function(e, t) {
        mf || (mf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Yp = function(e, t) {
        e.indexOf("-") > -1 ? gf(e) : $p.test(e) ? Gp(e) : Wl.test(t) && Wp(e, t), typeof t == "number" && (isNaN(t) ? Xp(e, t) : isFinite(t) || Am(e, t));
      };
    }
    var Hm = Yp;
    function Fm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Um(i)) + ":", t += ms(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function qp(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Hm(i, t[i]);
          var s = ms(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Vm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function kr(e) {
      var t = {};
      for (var a in e)
        for (var i = jp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function no(e, t) {
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
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Vm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Kp = {
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
    }, Zp = Me({
      menuitem: !0
    }, Kp), Jp = "__html";
    function ys(e, t) {
      if (t) {
        if (Zp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Jp in t.dangerouslySetInnerHTML))
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
    }, ev = {
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
    }, na = {}, Sf = new RegExp("^(aria)-[" + ce + "]*$"), ro = new RegExp("^(aria)[A-Z][" + ce + "]*$");
    function Cf(e, t) {
      {
        if (Bn.call(na, t) && na[t])
          return !0;
        if (ro.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = ev.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), na[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), na[t] = !0, !0;
        }
        if (Sf.test(t)) {
          var u = t.toLowerCase(), s = ev.hasOwnProperty(u) ? u : null;
          if (s == null)
            return na[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), na[t] = !0, !0;
        }
      }
      return !0;
    }
    function tv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Cf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ss(e, t) {
      za(e, t) || tv(e, t);
    }
    var Ki = !1;
    function Ef(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ki && (Ki = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Tf = function() {
    };
    {
      var Gt = {}, Rf = /^on./, nv = /^on[^A-Z]/, rv = new RegExp("^(aria)-[" + ce + "]*$"), av = new RegExp("^(aria)[A-Z][" + ce + "]*$");
      Tf = function(e, t, a, i) {
        if (Bn.call(Gt, t) && Gt[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Gt[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Gt[t] = !0, !0;
          if (Rf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Gt[t] = !0, !0;
        } else if (Rf.test(t))
          return nv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Gt[t] = !0, !0;
        if (rv.test(t) || av.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Gt[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Gt[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Gt[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Gt[t] = !0, !0;
        var v = fa(t), m = v !== null && v.type === ui;
        if (gs.hasOwnProperty(u)) {
          var y = gs[u];
          if (y !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Gt[t] = !0, !0;
        } else if (!m && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Gt[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Gt[t] = !0, !0) : m ? !0 : Rr(t, a, v, !1) ? (Gt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Gt[t] = !0), !0);
      };
    }
    var iv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Tf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function lv(e, t, a) {
      za(e, t) || iv(e, t, a);
    }
    var Ua = 1, ao = 2, Zi = 4, jm = Ua | ao | Zi, io = null;
    function lo(e) {
      io !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), io = e;
    }
    function Bm() {
      io === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), io = null;
    }
    function uv(e) {
      return e === io;
    }
    function Cs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Na ? t.parentNode : t;
    }
    var rt = null, vi = null, Aa = null;
    function Kl(e) {
      var t = Ru(e);
      if (t) {
        if (typeof rt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = uh(a);
          rt(t.stateNode, t.type, i);
        }
      }
    }
    function ov(e) {
      rt = e;
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
    }, xf = function() {
    }, wf = !1;
    function Pm() {
      var e = uo();
      e && (xf(), oo());
    }
    function Df(e, t, a) {
      if (wf)
        return e(t, a);
      wf = !0;
      try {
        return Ji(e, t, a);
      } finally {
        wf = !1, Pm();
      }
    }
    function Ts(e, t, a) {
      Ji = e, xf = a;
    }
    function Rs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function kf(e, t, a) {
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
      var i = uh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (kf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var so = !1;
    if (vn)
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
    function sv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var bf = sv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var _f = document.createElement("react");
      bf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, b = window.event, _ = Object.getOwnPropertyDescriptor(window, "event");
        function L() {
          _f.removeEventListener(O, se, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = b);
        }
        var W = Array.prototype.slice.call(arguments, 3);
        function se() {
          R = !0, L(), a.apply(i, W), E = !1;
        }
        var re, Fe = !1, Oe = !1;
        function w(D) {
          if (re = D.error, Fe = !0, re === null && D.colno === 0 && D.lineno === 0 && (Oe = !0), D.defaultPrevented && re != null && typeof re == "object")
            try {
              re._suppressLogging = !0;
            } catch {
            }
        }
        var O = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", w), _f.addEventListener(O, se, !1), y.initEvent(O, !1, !1), _f.dispatchEvent(y), _ && Object.defineProperty(window, "event", _), R && E && (Fe ? Oe && (re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(re)), window.removeEventListener("error", w), !R)
          return L(), sv.apply(this, arguments);
      };
    }
    var Ym = bf, hi = !1, ra = null, co = !1, mi = null, pa = {
      onError: function(e) {
        hi = !0, ra = e;
      }
    };
    function nl(e, t, a, i, u, s, f, p, v) {
      hi = !1, ra = null, Ym.apply(pa, arguments);
    }
    function Ha(e, t, a, i, u, s, f, p, v) {
      if (nl.apply(this, arguments), hi) {
        var m = Lf();
        co || (co = !0, mi = m);
      }
    }
    function Mf() {
      if (co) {
        var e = mi;
        throw co = !1, mi = null, e;
      }
    }
    function $m() {
      return hi;
    }
    function Lf() {
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
    var oe = (
      /*                      */
      0
    ), yi = (
      /*                */
      1
    ), ot = (
      /*                    */
      2
    ), xe = (
      /*                       */
      4
    ), Ye = (
      /*                */
      16
    ), $e = (
      /*                 */
      32
    ), va = (
      /*                     */
      64
    ), ge = (
      /*                   */
      128
    ), xt = (
      /*            */
      256
    ), $n = (
      /*                          */
      512
    ), _r = (
      /*                     */
      1024
    ), pt = (
      /*                      */
      2048
    ), Mr = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), po = (
      /*             */
      16384
    ), xs = pt | xe | va | $n | _r | po, cv = (
      /*               */
      32767
    ), ur = (
      /*                   */
      32768
    ), Wt = (
      /*                */
      65536
    ), vo = (
      /* */
      131072
    ), Of = (
      /*                       */
      1048576
    ), Nf = (
      /*                    */
      2097152
    ), Qn = (
      /*                 */
      4194304
    ), Si = (
      /*                */
      8388608
    ), In = (
      /*               */
      16777216
    ), rl = (
      /*              */
      33554432
    ), Jl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      xe | _r | 0
    ), Gn = ot | xe | Ye | $e | $n | Mr | gi, yn = xe | va | $n | gi, Lr = pt | Ye, tn = Qn | Si | Nf, Fa = N.ReactCurrentOwner;
    function or(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ot | Mr)) !== oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ie ? a : null;
    }
    function zf(e) {
      if (e.tag === ze) {
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
      return e.tag === ie ? e.stateNode.containerInfo : null;
    }
    function Uf(e) {
      return or(e) === e;
    }
    function sr(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === de) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Te(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = br(e);
      return u ? or(u) === u : !1;
    }
    function Wn(e) {
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
              return Wn(s), e;
            if (v === u)
              return Wn(s), t;
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
      if (i.tag !== ie)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Or(e) {
      var t = st(e);
      return t !== null ? Af(t) : null;
    }
    function Af(e) {
      if (e.tag === le || e.tag === be)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Af(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function fv(e) {
      var t = st(e);
      return t !== null ? Ds(t) : null;
    }
    function Ds(e) {
      if (e.tag === le || e.tag === be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = Ds(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var ks = Ve.unstable_scheduleCallback, dv = Ve.unstable_cancelCallback, bs = Ve.unstable_shouldYield, pv = Ve.unstable_requestPaint, mt = Ve.unstable_now, Hf = Ve.unstable_getCurrentPriorityLevel, _s = Ve.unstable_ImmediatePriority, cr = Ve.unstable_UserBlockingPriority, ha = Ve.unstable_NormalPriority, Ms = Ve.unstable_LowPriority, Ci = Ve.unstable_IdlePriority, Ff = Ve.unstable_yieldValue, Vf = Ve.unstable_setDisableYieldValue, Ei = null, Xt = null, B = null, bt = !1, nn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function jf(e) {
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
          injectProfilingHooks: ja
        })), Ei = t.inject(e), Xt = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function vv(e, t) {
      if (Xt && typeof Xt.onScheduleFiberRoot == "function")
        try {
          Xt.onScheduleFiberRoot(Ei, e, t);
        } catch (a) {
          bt || (bt = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Va(e, t) {
      if (Xt && typeof Xt.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ge) === ge;
          if (wn) {
            var i;
            switch (t) {
              case gn:
                i = _s;
                break;
              case rn:
                i = cr;
                break;
              case Pa:
                i = ha;
                break;
              case Ro:
                i = Ci;
                break;
              default:
                i = ha;
                break;
            }
            Xt.onCommitFiberRoot(Ei, e, i, a);
          }
        } catch (u) {
          bt || (bt = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ti(e) {
      if (Xt && typeof Xt.onPostCommitFiberRoot == "function")
        try {
          Xt.onPostCommitFiberRoot(Ei, e);
        } catch (t) {
          bt || (bt = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bf(e) {
      if (Xt && typeof Xt.onCommitFiberUnmount == "function")
        try {
          Xt.onCommitFiberUnmount(Ei, e);
        } catch (t) {
          bt || (bt = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function jt(e) {
      if (typeof Ff == "function" && (Vf(e), Hn(e)), Xt && typeof Xt.setStrictMode == "function")
        try {
          Xt.setStrictMode(Ei, e);
        } catch (t) {
          bt || (bt = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ja(e) {
      B = e;
    }
    function Ri() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ct; a++) {
          var i = Qm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ls(e) {
      B !== null && typeof B.markCommitStarted == "function" && B.markCommitStarted(e);
    }
    function Pf() {
      B !== null && typeof B.markCommitStopped == "function" && B.markCommitStopped();
    }
    function xi(e) {
      B !== null && typeof B.markComponentRenderStarted == "function" && B.markComponentRenderStarted(e);
    }
    function al() {
      B !== null && typeof B.markComponentRenderStopped == "function" && B.markComponentRenderStopped();
    }
    function hv(e) {
      B !== null && typeof B.markComponentPassiveEffectMountStarted == "function" && B.markComponentPassiveEffectMountStarted(e);
    }
    function Yf() {
      B !== null && typeof B.markComponentPassiveEffectMountStopped == "function" && B.markComponentPassiveEffectMountStopped();
    }
    function Os(e) {
      B !== null && typeof B.markComponentPassiveEffectUnmountStarted == "function" && B.markComponentPassiveEffectUnmountStarted(e);
    }
    function mv() {
      B !== null && typeof B.markComponentPassiveEffectUnmountStopped == "function" && B.markComponentPassiveEffectUnmountStopped();
    }
    function yv(e) {
      B !== null && typeof B.markComponentLayoutEffectMountStarted == "function" && B.markComponentLayoutEffectMountStarted(e);
    }
    function gv() {
      B !== null && typeof B.markComponentLayoutEffectMountStopped == "function" && B.markComponentLayoutEffectMountStopped();
    }
    function Ns(e) {
      B !== null && typeof B.markComponentLayoutEffectUnmountStarted == "function" && B.markComponentLayoutEffectUnmountStarted(e);
    }
    function eu() {
      B !== null && typeof B.markComponentLayoutEffectUnmountStopped == "function" && B.markComponentLayoutEffectUnmountStopped();
    }
    function zs(e, t, a) {
      B !== null && typeof B.markComponentErrored == "function" && B.markComponentErrored(e, t, a);
    }
    function Sv(e, t, a) {
      B !== null && typeof B.markComponentSuspended == "function" && B.markComponentSuspended(e, t, a);
    }
    function Cv(e) {
      B !== null && typeof B.markLayoutEffectsStarted == "function" && B.markLayoutEffectsStarted(e);
    }
    function tu() {
      B !== null && typeof B.markLayoutEffectsStopped == "function" && B.markLayoutEffectsStopped();
    }
    function Ev(e) {
      B !== null && typeof B.markPassiveEffectsStarted == "function" && B.markPassiveEffectsStarted(e);
    }
    function ho() {
      B !== null && typeof B.markPassiveEffectsStopped == "function" && B.markPassiveEffectsStopped();
    }
    function aa(e) {
      B !== null && typeof B.markRenderStarted == "function" && B.markRenderStarted(e);
    }
    function mo() {
      B !== null && typeof B.markRenderYielded == "function" && B.markRenderYielded();
    }
    function nu() {
      B !== null && typeof B.markRenderStopped == "function" && B.markRenderStopped();
    }
    function il(e) {
      B !== null && typeof B.markRenderScheduled == "function" && B.markRenderScheduled(e);
    }
    function $f(e, t) {
      B !== null && typeof B.markForceUpdateScheduled == "function" && B.markForceUpdateScheduled(e, t);
    }
    function wi(e, t) {
      B !== null && typeof B.markStateUpdateScheduled == "function" && B.markStateUpdateScheduled(e, t);
    }
    var fe = (
      /*                         */
      0
    ), De = (
      /*                 */
      1
    ), pe = (
      /*                    */
      2
    ), yt = (
      /*               */
      8
    ), Nr = (
      /*              */
      16
    ), Us = Math.clz32 ? Math.clz32 : ll, As = Math.log, Qf = Math.LN2;
    function ll(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (As(t) / Qf | 0) | 0;
    }
    var ct = 31, z = (
      /*                        */
      0
    ), Ae = (
      /*                          */
      0
    ), ve = (
      /*                        */
      1
    ), ma = (
      /*    */
      2
    ), fr = (
      /*             */
      4
    ), ul = (
      /*            */
      8
    ), ft = (
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
    ), Xn = (
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
    ), Vs = (
      /*                        */
      16384
    ), js = (
      /*                       */
      32768
    ), Bs = (
      /*                       */
      65536
    ), Ps = (
      /*                       */
      131072
    ), Ys = (
      /*                       */
      262144
    ), $s = (
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
    ), If = Ba, ru = (
      /*          */
      134217728
    ), Xs = (
      /*                          */
      268435455
    ), au = (
      /*               */
      268435456
    ), ki = (
      /*                        */
      536870912
    ), qn = (
      /*                   */
      1073741824
    );
    function Qm(e) {
      {
        if (e & ve)
          return "Sync";
        if (e & ma)
          return "InputContinuousHydration";
        if (e & fr)
          return "InputContinuous";
        if (e & ul)
          return "DefaultHydration";
        if (e & ft)
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
        if (e & ki)
          return "Idle";
        if (e & qn)
          return "Offscreen";
      }
    }
    var at = -1, qs = sl, Ks = Ba;
    function iu(e) {
      switch (Ut(e)) {
        case ve:
          return ve;
        case ma:
          return ma;
        case fr:
          return fr;
        case ul:
          return ul;
        case ft:
          return ft;
        case ol:
          return ol;
        case sl:
        case zr:
        case Xn:
        case cl:
        case yo:
        case go:
        case Hs:
        case Fs:
        case Vs:
        case js:
        case Bs:
        case Ps:
        case Ys:
        case $s:
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
        case ki:
          return ki;
        case qn:
          return qn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Co(e, t) {
      var a = e.pendingLanes;
      if (a === z)
        return z;
      var i = z, u = e.suspendedLanes, s = e.pingedLanes, f = a & Xs;
      if (f !== z) {
        var p = f & ~u;
        if (p !== z)
          i = iu(p);
        else {
          var v = f & s;
          v !== z && (i = iu(v));
        }
      } else {
        var m = a & ~u;
        m !== z ? i = iu(m) : s !== z && (i = iu(s));
      }
      if (i === z)
        return z;
      if (t !== z && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === z) {
        var y = Ut(i), R = Ut(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === ft && (R & Di) !== z
        )
          return t;
      }
      (i & fr) !== z && (i |= a & ft);
      var E = e.entangledLanes;
      if (E !== z)
        for (var b = e.entanglements, _ = i & E; _ > 0; ) {
          var L = bi(_), W = 1 << L;
          i |= b[L], _ &= ~W;
        }
      return i;
    }
    function Tv(e, t) {
      for (var a = e.eventTimes, i = at; t > 0; ) {
        var u = bi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Zs(e, t) {
      switch (e) {
        case ve:
        case ma:
        case fr:
          return t + 250;
        case ul:
        case ft:
        case ol:
        case sl:
        case zr:
        case Xn:
        case cl:
        case yo:
        case go:
        case Hs:
        case Fs:
        case Vs:
        case js:
        case Bs:
        case Ps:
        case Ys:
        case $s:
        case fl:
        case Qs:
          return t + 5e3;
        case Ba:
        case Is:
        case So:
        case Gs:
        case Ws:
          return at;
        case ru:
        case au:
        case ki:
        case qn:
          return at;
        default:
          return S("Should have found matching lanes. This is a bug in React."), at;
      }
    }
    function Im(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p, m = s[p];
        m === at ? ((v & i) === z || (v & u) !== z) && (s[p] = Zs(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Gm(e) {
      return iu(e.pendingLanes);
    }
    function Gf(e) {
      var t = e.pendingLanes & ~qn;
      return t !== z ? t : t & qn ? qn : z;
    }
    function lu(e) {
      return (e & ve) !== z;
    }
    function Eo(e) {
      return (e & Xs) !== z;
    }
    function Js(e) {
      return (e & dl) === e;
    }
    function Wm(e) {
      var t = ve | fr | ft;
      return (e & t) === z;
    }
    function Rv(e) {
      return (e & Di) === e;
    }
    function To(e, t) {
      var a = ma | fr | ul | ft;
      return (t & a) !== z;
    }
    function xv(e, t) {
      return (t & e.expiredLanes) !== z;
    }
    function Wf(e) {
      return (e & Di) !== z;
    }
    function Xf() {
      var e = qs;
      return qs <<= 1, (qs & Di) === z && (qs = sl), e;
    }
    function Xm() {
      var e = Ks;
      return Ks <<= 1, (Ks & dl) === z && (Ks = Ba), e;
    }
    function Ut(e) {
      return e & -e;
    }
    function Bt(e) {
      return Ut(e);
    }
    function bi(e) {
      return 31 - Us(e);
    }
    function ec(e) {
      return bi(e);
    }
    function Kn(e, t) {
      return (e & t) !== z;
    }
    function pl(e, t) {
      return (e & t) === t;
    }
    function we(e, t) {
      return e | t;
    }
    function uu(e, t) {
      return e & ~t;
    }
    function qf(e, t) {
      return e & t;
    }
    function wv(e) {
      return e;
    }
    function Dv(e, t) {
      return e !== Ae && e < t ? e : t;
    }
    function tc(e) {
      for (var t = [], a = 0; a < ct; a++)
        t.push(e);
      return t;
    }
    function vl(e, t, a) {
      e.pendingLanes |= t, t !== ki && (e.suspendedLanes = z, e.pingedLanes = z);
      var i = e.eventTimes, u = ec(t);
      i[u] = a;
    }
    function Kf(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = bi(i), s = 1 << u;
        a[u] = at, i &= ~s;
      }
    }
    function Zf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Jf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = z, e.pingedLanes = z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = bi(f), v = 1 << p;
        i[p] = z, u[p] = at, s[p] = at, f &= ~v;
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
    function qm(e, t) {
      var a = Ut(t), i;
      switch (a) {
        case fr:
          i = ma;
          break;
        case ft:
          i = ul;
          break;
        case sl:
        case zr:
        case Xn:
        case cl:
        case yo:
        case go:
        case Hs:
        case Fs:
        case Vs:
        case js:
        case Bs:
        case Ps:
        case Ys:
        case $s:
        case fl:
        case Qs:
        case Ba:
        case Is:
        case So:
        case Gs:
        case Ws:
          i = ol;
          break;
        case ki:
          i = au;
          break;
        default:
          i = Ae;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ae ? Ae : i;
    }
    function ed(e, t, a) {
      if (nn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ec(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function nc(e, t) {
      if (nn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ec(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function td(e, t) {
      return null;
    }
    var gn = ve, rn = fr, Pa = ft, Ro = ki, hl = Ae;
    function Ur() {
      return hl;
    }
    function Pt(e) {
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
    function Sn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Km(e, t) {
      return e > t ? e : t;
    }
    function nd(e, t) {
      return e !== 0 && e < t;
    }
    function wo(e) {
      var t = Ut(e);
      return nd(gn, t) ? nd(rn, t) ? Eo(t) ? Pa : Ro : rn : gn;
    }
    function Yt(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var kv;
    function K(e) {
      kv = e;
    }
    function su(e) {
      kv(e);
    }
    var Do;
    function bv(e) {
      Do = e;
    }
    var _v;
    function ko(e) {
      _v = e;
    }
    var bo;
    function rd(e) {
      bo = e;
    }
    var ad;
    function Mv(e) {
      ad = e;
    }
    var rc = !1, cu = [], ya = null, vt = null, qt = null, Ar = /* @__PURE__ */ new Map(), fu = /* @__PURE__ */ new Map(), Ya = [], ia = [
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
    function Lv(e) {
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
    function Ov(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ya = null;
          break;
        case "dragenter":
        case "dragleave":
          vt = null;
          break;
        case "mouseover":
        case "mouseout":
          qt = null;
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
    function Nv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ya = du(ya, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return vt = du(vt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return qt = du(qt, e, t, a, i, p), !0;
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
    function id(e) {
      var t = Ho(e.target);
      if (t !== null) {
        var a = or(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ze) {
            var u = zf(a);
            if (u !== null) {
              e.blockedOn = u, ad(e.priority, function() {
                _v(a);
              });
              return;
            }
          } else if (i === ie) {
            var s = a.stateNode;
            if (Yt(s)) {
              e.blockedOn = ws(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function zv(e) {
      for (var t = bo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ya.length && nd(t, Ya[i].priority); i++)
        ;
      Ya.splice(i, 0, a), i === 0 && id(a);
    }
    function ac(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ml(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          lo(s), u.target.dispatchEvent(s), Bm();
        } else {
          var f = Ru(i);
          return f !== null && Do(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _o(e, t, a) {
      ac(e) && a.delete(t);
    }
    function ld() {
      rc = !1, ya !== null && ac(ya) && (ya = null), vt !== null && ac(vt) && (vt = null), qt !== null && ac(qt) && (qt = null), Ar.forEach(_o), fu.forEach(_o);
    }
    function Cn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rc || (rc = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, ld)));
    }
    function Le(e) {
      if (cu.length > 0) {
        Cn(cu[0], e);
        for (var t = 1; t < cu.length; t++) {
          var a = cu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ya !== null && Cn(ya, e), vt !== null && Cn(vt, e), qt !== null && Cn(qt, e);
      var i = function(p) {
        return Cn(p, e);
      };
      Ar.forEach(i), fu.forEach(i);
      for (var u = 0; u < Ya.length; u++) {
        var s = Ya[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ya.length > 0; ) {
        var f = Ya[0];
        if (f.blockedOn !== null)
          break;
        id(f), f.blockedOn === null && Ya.shift();
      }
    }
    var gt = N.ReactCurrentBatchConfig, wt = !0;
    function Kt(e) {
      wt = !!e;
    }
    function dr() {
      return wt;
    }
    function pu(e, t, a) {
      var i = kn(t), u;
      switch (i) {
        case gn:
          u = $t;
          break;
        case rn:
          u = Mo;
          break;
        case Pa:
        default:
          u = $a;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function $t(e, t, a, i) {
      var u = Ur(), s = gt.transition;
      gt.transition = null;
      try {
        Pt(gn), $a(e, t, a, i);
      } finally {
        Pt(u), gt.transition = s;
      }
    }
    function Mo(e, t, a, i) {
      var u = Ur(), s = gt.transition;
      gt.transition = null;
      try {
        Pt(rn), $a(e, t, a, i);
      } finally {
        Pt(u), gt.transition = s;
      }
    }
    function $a(e, t, a, i) {
      wt && ic(e, t, a, i);
    }
    function ic(e, t, a, i) {
      var u = ml(e, t, a, i);
      if (u === null) {
        yy(e, t, i, vu, a), Ov(e, i);
        return;
      }
      if (Nv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Ov(e, i), t & Zi && Lv(e)) {
        for (; u !== null; ) {
          var s = Ru(u);
          s !== null && su(s);
          var f = ml(e, t, a, i);
          if (f === null && yy(e, t, i, vu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      yy(e, t, i, null, a);
    }
    var vu = null;
    function ml(e, t, a, i) {
      vu = null;
      var u = Cs(i), s = Ho(u);
      if (s !== null) {
        var f = or(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ze) {
            var v = zf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ie) {
            var m = f.stateNode;
            if (Yt(m))
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
          return gn;
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
          return rn;
        case "message": {
          var t = Hf();
          switch (t) {
            case _s:
              return gn;
            case cr:
              return rn;
            case ha:
            case Ms:
              return Pa;
            case Ci:
              return Ro;
            default:
              return Pa;
          }
        }
        default:
          return Pa;
      }
    }
    function ud(e, t, a) {
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
    var yl = null, Sa = null, _i = null;
    function Mi(e) {
      return yl = e, Sa = oc(), !0;
    }
    function uc() {
      yl = null, Sa = null, _i = null;
    }
    function mu() {
      if (_i)
        return _i;
      var e, t = Sa, a = t.length, i, u = oc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return _i = u.slice(e, p), _i;
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
    function En() {
      return !1;
    }
    function At(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Sl : this.isDefaultPrevented = En, this.isPropagationStopped = En, this;
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
    var Tn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Rn = At(Tn), yu = Me({}, Tn, {
      view: 0,
      detail: 0
    }), od = At(yu), Lo, sd, Hr;
    function Uv(e) {
      e !== Hr && (Hr && e.type === "mousemove" ? (Lo = e.screenX - Hr.screenX, sd = e.screenY - Hr.screenY) : (Lo = 0, sd = 0), Hr = e);
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
        return "movementX" in e ? e.movementX : (Uv(e), Lo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : sd;
      }
    }), Li = At(gu), cd = Me({}, gu, {
      dataTransfer: 0
    }), Cl = At(cd), Av = Me({}, yu, {
      relatedTarget: 0
    }), sc = At(Av), fd = Me({}, Tn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cc = At(fd), Zm = Me({}, Tn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Jm = At(Zm), Hv = Me({}, Tn, {
      data: 0
    }), dd = At(Hv), El = dd, ey = {
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
    function Fv(e) {
      if (e.key) {
        var t = ey[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = gl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Su[e.keyCode] || "Unidentified" : "";
    }
    var Dt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ty(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Dt[e];
      return i ? !!a[i] : !1;
    }
    function fc(e) {
      return ty;
    }
    var ny = Me({}, yu, {
      key: Fv,
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
    }), ry = At(ny), Vv = Me({}, gu, {
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
    }), pd = At(Vv), ay = Me({}, yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fc
    }), Fr = At(ay), vd = Me({}, Tn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), iy = At(vd), Oi = Me({}, gu, {
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
    }), dc = At(Oi), Tl = [9, 13, 27, 32], Oo = 229, No = vn && "CompositionEvent" in window, Rl = null;
    vn && "documentMode" in document && (Rl = document.documentMode);
    var ly = vn && "TextEvent" in window && !Rl, pc = vn && (!No || Rl && Rl > 8 && Rl <= 11), jv = 32, hd = String.fromCharCode(jv);
    function Bv() {
      Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Er("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var zo = !1;
    function vc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Pv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function md(e, t) {
      return e === "keydown" && t.keyCode === Oo;
    }
    function Yv(e, t) {
      switch (e) {
        case "keyup":
          return Tl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Oo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function yd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hc(e) {
      return e.locale === "ko";
    }
    var Ia = !1;
    function gd(e, t, a, i, u) {
      var s, f;
      if (No ? s = Pv(t) : Ia ? Yv(t, i) && (s = "onCompositionEnd") : md(t, i) && (s = "onCompositionStart"), !s)
        return null;
      pc && !hc(i) && (!Ia && s === "onCompositionStart" ? Ia = Mi(u) : s === "onCompositionEnd" && Ia && (f = mu()));
      var p = Wv(a, s);
      if (p.length > 0) {
        var v = new dd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = yd(i);
          m !== null && (v.data = m);
        }
      }
    }
    function mc(e, t) {
      switch (e) {
        case "compositionend":
          return yd(t);
        case "keypress":
          var a = t.which;
          return a !== jv ? null : (zo = !0, hd);
        case "textInput":
          var i = t.data;
          return i === hd && zo ? null : i;
        default:
          return null;
      }
    }
    function $v(e, t) {
      if (Ia) {
        if (e === "compositionend" || !No && Yv(e, t)) {
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
    function uy(e, t, a, i, u) {
      var s;
      if (ly ? s = mc(t, i) : s = $v(t, i), !s)
        return null;
      var f = Wv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new El("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yc(e, t, a, i, u, s, f) {
      gd(e, t, a, i, u), uy(e, t, a, i, u);
    }
    var oy = {
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
      return t === "input" ? !!oy[e.type] : t === "textarea";
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
    function sy(e) {
      if (!vn)
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
      var u = Wv(t, "onChange");
      if (u.length > 0) {
        var s = new Rn("onChange", "change", null, a, i);
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
      n(t, l, e, Cs(e)), Df(d, t);
    }
    function d(e) {
      m0(e, 0);
    }
    function h(e) {
      var t = xc(e);
      if (Mp(t))
        return e;
    }
    function g(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    vn && (C = sy("input") && (!document.documentMode || document.documentMode > 9));
    function M(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", F);
    }
    function H() {
      r && (r.detachEvent("onpropertychange", F), r = null, l = null);
    }
    function F(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function A(e, t, a) {
      e === "focusin" ? (H(), M(t, a)) : e === "focusout" && H();
    }
    function I(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function Z(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function te(e, t) {
      if (e === "click")
        return h(t);
    }
    function _t(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || di(e, "number", e.value);
    }
    function T(e, t, a, i, u, s, f) {
      var p = a ? xc(a) : window, v, m;
      if (o(p) ? v = g : Cu(p) ? C ? v = _t : (v = I, m = A) : Z(p) && (v = te), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && x(p);
    }
    function k() {
      ka("onMouseEnter", ["mouseout", "mouseover"]), ka("onMouseLeave", ["mouseout", "mouseover"]), ka("onPointerEnter", ["pointerout", "pointerover"]), ka("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function j(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !uv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Ho(m) || Od(m)))
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
          var _ = i.relatedTarget || i.toElement;
          if (E = a, b = _ ? Ho(_) : null, b !== null) {
            var L = or(b);
            (b !== L || b.tag !== le && b.tag !== be) && (b = null);
          }
        } else
          E = null, b = a;
        if (E !== b) {
          var W = Li, se = "onMouseLeave", re = "onMouseEnter", Fe = "mouse";
          (t === "pointerout" || t === "pointerover") && (W = pd, se = "onPointerLeave", re = "onPointerEnter", Fe = "pointer");
          var Oe = E == null ? y : xc(E), w = b == null ? y : xc(b), O = new W(se, Fe + "leave", E, i, u);
          O.target = Oe, O.relatedTarget = w;
          var D = null, V = Ho(u);
          if (V === a) {
            var X = new W(re, Fe + "enter", b, i, u);
            X.target = w, X.relatedTarget = Oe, D = X;
          }
          fT(e, O, D, E, b);
        }
      }
    }
    function ne(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var J = typeof Object.is == "function" ? Object.is : ne;
    function ue(e, t) {
      if (J(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Bn.call(t, s) || !J(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Se(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function je(e, t) {
      for (var a = Se(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Na) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Se(Zt(a));
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
      return cy(e, u, s, f, p);
    }
    function cy(e, t, a, i, u) {
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
    function IE(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = je(e, f), y = je(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function a0(e) {
      return e && e.nodeType === Na;
    }
    function i0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : a0(e) ? !1 : a0(t) ? i0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function GE(e) {
      return e && e.ownerDocument && i0(e.ownerDocument.documentElement, e);
    }
    function WE(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function l0() {
      for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
        if (WE(t))
          e = t.contentWindow;
        else
          return t;
        t = us(e.document);
      }
      return t;
    }
    function fy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function XE() {
      var e = l0();
      return {
        focusedElem: e,
        selectionRange: fy(e) ? KE(e) : null
      };
    }
    function qE(e) {
      var t = l0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && GE(a)) {
        i !== null && fy(a) && ZE(a, i);
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
    function KE(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ni(e), t || {
        start: 0,
        end: 0
      };
    }
    function ZE(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : IE(e, t);
    }
    var JE = vn && "documentMode" in document && document.documentMode <= 11;
    function eT() {
      Er("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sc = null, dy = null, Sd = null, py = !1;
    function tT(e) {
      if ("selectionStart" in e && fy(e))
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
    function nT(e) {
      return e.window === e ? e.document : e.nodeType === ta ? e : e.ownerDocument;
    }
    function u0(e, t, a) {
      var i = nT(a);
      if (!(py || Sc == null || Sc !== us(i))) {
        var u = tT(Sc);
        if (!Sd || !ue(Sd, u)) {
          Sd = u;
          var s = Wv(dy, "onSelect");
          if (s.length > 0) {
            var f = new Rn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sc;
          }
        }
      }
    }
    function rT(e, t, a, i, u, s, f) {
      var p = a ? xc(a) : window;
      switch (t) {
        case "focusin":
          (Cu(p) || p.contentEditable === "true") && (Sc = p, dy = a, Sd = null);
          break;
        case "focusout":
          Sc = null, dy = null, Sd = null;
          break;
        case "mousedown":
          py = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          py = !1, u0(e, i, u);
          break;
        case "selectionchange":
          if (JE)
            break;
        case "keydown":
        case "keyup":
          u0(e, i, u);
      }
    }
    function Qv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Cc = {
      animationend: Qv("Animation", "AnimationEnd"),
      animationiteration: Qv("Animation", "AnimationIteration"),
      animationstart: Qv("Animation", "AnimationStart"),
      transitionend: Qv("Transition", "TransitionEnd")
    }, vy = {}, o0 = {};
    vn && (o0 = document.createElement("div").style, "AnimationEvent" in window || (delete Cc.animationend.animation, delete Cc.animationiteration.animation, delete Cc.animationstart.animation), "TransitionEvent" in window || delete Cc.transitionend.transition);
    function Iv(e) {
      if (vy[e])
        return vy[e];
      if (!Cc[e])
        return e;
      var t = Cc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in o0)
          return vy[e] = t[a];
      return e;
    }
    var s0 = Iv("animationend"), c0 = Iv("animationiteration"), f0 = Iv("animationstart"), d0 = Iv("transitionend"), p0 = /* @__PURE__ */ new Map(), v0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Eu(e, t) {
      p0.set(e, t), Er(t, [e]);
    }
    function aT() {
      for (var e = 0; e < v0.length; e++) {
        var t = v0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Eu(a, "on" + i);
      }
      Eu(s0, "onAnimationEnd"), Eu(c0, "onAnimationIteration"), Eu(f0, "onAnimationStart"), Eu("dblclick", "onDoubleClick"), Eu("focusin", "onFocus"), Eu("focusout", "onBlur"), Eu(d0, "onTransitionEnd");
    }
    function iT(e, t, a, i, u, s, f) {
      var p = p0.get(t);
      if (p !== void 0) {
        var v = Rn, m = t;
        switch (t) {
          case "keypress":
            if (gl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ry;
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
            v = Li;
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
          case s0:
          case c0:
          case f0:
            v = cc;
            break;
          case d0:
            v = iy;
            break;
          case "scroll":
            v = od;
            break;
          case "wheel":
            v = dc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Jm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = pd;
            break;
        }
        var y = (s & Zi) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = sT(a, p, i.type, y, R);
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
    aT(), k(), gc(), eT(), Bv();
    function lT(e, t, a, i, u, s, f) {
      iT(e, t, a, i, u, s);
      var p = (s & jm) === 0;
      p && (j(e, t, a, i, u), T(e, t, a, i, u), rT(e, t, a, i, u), yc(e, t, a, i, u));
    }
    var Cd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], hy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Cd));
    function h0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ha(i, t, void 0, e), e.currentTarget = null;
    }
    function uT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          h0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, b = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          h0(e, b, E), i = R;
        }
    }
    function m0(e, t) {
      for (var a = (t & Zi) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        uT(s, f, a);
      }
      Mf();
    }
    function oT(e, t, a, i, u) {
      var s = Cs(a), f = [];
      lT(f, e, i, a, s, t), m0(f, t);
    }
    function St(e, t) {
      hy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = FR(t), u = dT(e);
      i.has(u) || (y0(t, e, ao, a), i.add(u));
    }
    function my(e, t, a) {
      hy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Zi), y0(a, e, i, t);
    }
    var Gv = "_reactListening" + Math.random().toString(36).slice(2);
    function Ed(e) {
      if (!e[Gv]) {
        e[Gv] = !0, Gr.forEach(function(a) {
          a !== "selectionchange" && (hy.has(a) || my(a, !1, e), my(a, !0, e));
        });
        var t = e.nodeType === ta ? e : e.ownerDocument;
        t !== null && (t[Gv] || (t[Gv] = !0, my("selectionchange", !1, t)));
      }
    }
    function y0(e, t, a, i, u) {
      var s = pu(e, t, a), f = void 0;
      so && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qa(e, t, s, f) : hu(e, t, s) : f !== void 0 ? lc(e, t, s, f) : ud(e, t, s);
    }
    function g0(e, t) {
      return e === t || e.nodeType === zt && e.parentNode === t;
    }
    function yy(e, t, a, i, u) {
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
              if (v === ie || v === he) {
                var m = p.stateNode.containerInfo;
                if (g0(m, f))
                  break;
                if (v === he)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === ie || R === he) {
                      var E = y.stateNode.containerInfo;
                      if (g0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var b = Ho(m);
                  if (b === null)
                    return;
                  var _ = b.tag;
                  if (_ === le || _ === be) {
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
      Df(function() {
        return oT(e, t, a, s);
      });
    }
    function Td(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function sT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, b = R.tag;
        if (b === le && E !== null && (y = E, p !== null)) {
          var _ = el(m, p);
          _ != null && v.push(Td(m, _, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function Wv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, m = el(u, a);
          m != null && i.unshift(Td(u, m, v));
          var y = el(u, t);
          y != null && i.push(Td(u, y, v));
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
      while (e && e.tag !== le);
      return e || null;
    }
    function cT(e, t) {
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
    function S0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === le && y !== null) {
          var E = y;
          if (u) {
            var b = el(p, s);
            b != null && f.unshift(Td(p, b, E));
          } else if (!u) {
            var _ = el(p, s);
            _ != null && f.push(Td(p, _, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function fT(e, t, a, i, u) {
      var s = i && u ? cT(i, u) : null;
      i !== null && S0(e, t, i, s, !1), u !== null && a !== null && S0(e, a, u, s, !0);
    }
    function dT(e, t) {
      return e + "__bubble";
    }
    var Vr = !1, Rd = "dangerouslySetInnerHTML", Xv = "suppressContentEditableWarning", Tu = "suppressHydrationWarning", C0 = "autoFocus", Uo = "children", Ao = "style", qv = "__html", gy, Kv, xd, E0, Zv, T0, R0;
    gy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Kv = function(e, t) {
      Ss(e, t), Ef(e, t), lv(e, t, {
        registrationNameDependencies: sa,
        possibleRegistrationNames: Vu
      });
    }, T0 = vn && !document.documentMode, xd = function(e, t, a) {
      if (!Vr) {
        var i = Jv(a), u = Jv(t);
        u !== i && (Vr = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, E0 = function(e) {
      if (!Vr) {
        Vr = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Zv = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, R0 = function(e, t) {
      var a = e.namespaceURI === Oa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var pT = /\r\n?/g, vT = /\u0000|\uFFFD/g;
    function Jv(e) {
      Qi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(pT, `
`).replace(vT, "");
    }
    function eh(e, t, a, i) {
      var u = Jv(t), s = Jv(e);
      if (s !== u && (i && (Vr || (Vr = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Cr))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function x0(e) {
      return e.nodeType === ta ? e : e.ownerDocument;
    }
    function hT() {
    }
    function th(e) {
      e.onclick = hT;
    }
    function mT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ao)
            f && Object.freeze(f), qp(t, f);
          else if (s === Rd) {
            var p = f ? f[qv] : void 0;
            p != null && Vp(t, p);
          } else if (s === Uo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && hs(t, f);
            } else
              typeof f == "number" && hs(t, "" + f);
          else
            s === Xv || s === Tu || s === C0 || (sa.hasOwnProperty(s) ? f != null && (typeof f != "function" && Zv(s, f), s === "onScroll" && St("scroll", t)) : f != null && Ii(t, s, f, u));
        }
    }
    function yT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ao ? qp(e, f) : s === Rd ? Vp(e, f) : s === Uo ? hs(e, f) : Ii(e, s, f, i);
      }
    }
    function gT(e, t, a, i) {
      var u, s = x0(a), f, p = i;
      if (p === Oa && (p = ps(e)), p === Oa) {
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
      return p === Oa && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Bn.call(gy, e) && (gy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function ST(e, t) {
      return x0(t).createTextNode(e);
    }
    function CT(e, t, a, i) {
      var u = za(t, a);
      Kv(t, a);
      var s;
      switch (t) {
        case "dialog":
          St("cancel", e), St("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          St("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Cd.length; f++)
            St(Cd[f], e);
          s = a;
          break;
        case "source":
          St("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          St("error", e), St("load", e), s = a;
          break;
        case "details":
          St("toggle", e), s = a;
          break;
        case "input":
          Zu(e, a), s = Ku(e, a), St("invalid", e);
          break;
        case "option":
          fs(e, a), s = a;
          break;
        case "select":
          Up(e, a), s = cf(e, a), St("invalid", e);
          break;
        case "textarea":
          Ap(e, a), s = df(e, a), St("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ys(t, s), mT(t, e, i, s, u), t) {
        case "input":
          Xi(e), Ju(e, a, !1);
          break;
        case "textarea":
          Xi(e), Fp(e);
          break;
        case "option":
          sf(e, a);
          break;
        case "select":
          _m(e, a);
          break;
        default:
          typeof s.onClick == "function" && th(e);
          break;
      }
    }
    function ET(e, t, a, i, u) {
      Kv(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ku(e, a), p = Ku(e, i), s = [];
          break;
        case "select":
          f = cf(e, a), p = cf(e, i), s = [];
          break;
        case "textarea":
          f = df(e, a), p = df(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && th(e);
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
            v === Rd || v === Uo || v === Xv || v === Tu || v === C0 || (sa.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
          else if (v === Rd) {
            var _ = E ? E[qv] : void 0, L = b ? b[qv] : void 0;
            _ != null && L !== _ && (s = s || []).push(v, _);
          } else
            v === Uo ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === Xv || v === Tu || (sa.hasOwnProperty(v) ? (E != null && (typeof E != "function" && Zv(v, E), v === "onScroll" && St("scroll", e)), !s && b !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (no(y, p[Ao]), (s = s || []).push(Ao, y)), s;
    }
    function TT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && of(e, u);
      var s = za(a, i), f = za(a, u);
      switch (yT(e, t, s, f), a) {
        case "input":
          $l(e, u);
          break;
        case "textarea":
          Hp(e, u);
          break;
        case "select":
          Mm(e, u);
          break;
      }
    }
    function RT(e) {
      {
        var t = e.toLowerCase();
        return gs.hasOwnProperty(t) && gs[t] || null;
      }
    }
    function xT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = za(t, a), Kv(t, a), t) {
        case "dialog":
          St("cancel", e), St("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          St("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Cd.length; m++)
            St(Cd[m], e);
          break;
        case "source":
          St("error", e);
          break;
        case "img":
        case "image":
        case "link":
          St("error", e), St("load", e);
          break;
        case "details":
          St("toggle", e);
          break;
        case "input":
          Zu(e, a), St("invalid", e);
          break;
        case "option":
          fs(e, a);
          break;
        case "select":
          Up(e, a), St("invalid", e);
          break;
        case "textarea":
          Ap(e, a), St("invalid", e);
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
      for (var _ in a)
        if (a.hasOwnProperty(_)) {
          var L = a[_];
          if (_ === Uo)
            typeof L == "string" ? e.textContent !== L && (a[Tu] !== !0 && eh(e.textContent, L, s, f), b = [Uo, L]) : typeof L == "number" && e.textContent !== "" + L && (a[Tu] !== !0 && eh(e.textContent, L, s, f), b = [Uo, "" + L]);
          else if (sa.hasOwnProperty(_))
            L != null && (typeof L != "function" && Zv(_, L), _ === "onScroll" && St("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var W = void 0, se = p && jn ? null : fa(_);
            if (a[Tu] !== !0) {
              if (!(_ === Xv || _ === Tu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              _ === "value" || _ === "checked" || _ === "selected")) {
                if (_ === Rd) {
                  var re = e.innerHTML, Fe = L ? L[qv] : void 0;
                  if (Fe != null) {
                    var Oe = R0(e, Fe);
                    Oe !== re && xd(_, re, Oe);
                  }
                } else if (_ === Ao) {
                  if (v.delete(_), T0) {
                    var w = Fm(L);
                    W = e.getAttribute("style"), w !== W && xd(_, W, w);
                  }
                } else if (p && !jn)
                  v.delete(_.toLowerCase()), W = ns(e, _, L), L !== W && xd(_, W, L);
                else if (!Ft(_, se, p) && !Et(_, L, se, p)) {
                  var O = !1;
                  if (se !== null)
                    v.delete(se.attributeName), W = Bu(e, _, L, se);
                  else {
                    var D = i;
                    if (D === Oa && (D = ps(t)), D === Oa)
                      v.delete(_.toLowerCase());
                    else {
                      var V = RT(_);
                      V !== null && V !== _ && (O = !0, v.delete(V)), v.delete(_);
                    }
                    W = ns(e, _, L);
                  }
                  var X = jn;
                  !X && L !== W && !O && xd(_, W, L);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Tu] !== !0 && E0(v), t) {
        case "input":
          Xi(e), Ju(e, a, !0);
          break;
        case "textarea":
          Xi(e), Fp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && th(e);
          break;
      }
      return b;
    }
    function wT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Sy(e, t) {
      {
        if (Vr)
          return;
        Vr = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Cy(e, t) {
      {
        if (Vr)
          return;
        Vr = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ey(e, t, a) {
      {
        if (Vr)
          return;
        Vr = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ty(e, t) {
      {
        if (t === "" || Vr)
          return;
        Vr = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function DT(e, t, a) {
      switch (t) {
        case "input":
          Lp(e, a);
          return;
        case "textarea":
          pf(e, a);
          return;
        case "select":
          Lm(e, a);
          return;
      }
    }
    var wd = function() {
    }, Dd = function() {
    };
    {
      var kT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], w0 = [
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
      ], bT = w0.concat(["button"]), _T = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], D0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Dd = function(e, t) {
        var a = Me({}, e || D0), i = {
          tag: t
        };
        return w0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), bT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), kT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var MT = function(e, t) {
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
            return _T.indexOf(t) === -1;
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
      }, LT = function(e, t) {
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
      }, k0 = {};
      wd = function(e, t, a) {
        a = a || D0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = MT(e, u) ? null : i, f = s ? null : LT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!k0[m]) {
            k0[m] = !0;
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
    var nh = "suppressHydrationWarning", rh = "$", ah = "/$", kd = "$?", bd = "$!", OT = "style", Ry = null, xy = null;
    function NT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ta:
        case qi: {
          t = i === ta ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : hf(null, "");
          break;
        }
        default: {
          var s = i === zt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = hf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Dd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function zT(e, t, a) {
      {
        var i = e, u = hf(i.namespace, t), s = Dd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Fk(e) {
      return e;
    }
    function UT(e) {
      Ry = dr(), xy = XE();
      var t = null;
      return Kt(!1), t;
    }
    function AT(e) {
      qE(xy), Kt(Ry), Ry = null, xy = null;
    }
    function HT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (wd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Dd(f.ancestorInfo, e);
          wd(null, p, v);
        }
        s = f.namespace;
      }
      var m = gT(e, t, a, s);
      return Ld(u, m), Oy(m, t), m;
    }
    function FT(e, t) {
      e.appendChild(t);
    }
    function VT(e, t, a, i, u) {
      switch (CT(e, t, a, i), t) {
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
    function jT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Dd(f.ancestorInfo, t);
          wd(null, p, v);
        }
      }
      return ET(e, t, a, i);
    }
    function wy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function BT(e, t, a, i) {
      {
        var u = a;
        wd(null, e, u.ancestorInfo);
      }
      var s = ST(e, t);
      return Ld(i, s), s;
    }
    function PT() {
      var e = window.event;
      return e === void 0 ? Pa : kn(e.type);
    }
    var Dy = typeof setTimeout == "function" ? setTimeout : void 0, YT = typeof clearTimeout == "function" ? clearTimeout : void 0, ky = -1, b0 = typeof Promise == "function" ? Promise : void 0, $T = typeof queueMicrotask == "function" ? queueMicrotask : typeof b0 < "u" ? function(e) {
      return b0.resolve(null).then(e).catch(QT);
    } : Dy;
    function QT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function IT(e, t, a, i) {
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
    function GT(e, t, a, i, u, s) {
      TT(e, t, a, i, u), Oy(e, u);
    }
    function _0(e) {
      hs(e, "");
    }
    function WT(e, t, a) {
      e.nodeValue = a;
    }
    function XT(e, t) {
      e.appendChild(t);
    }
    function qT(e, t) {
      var a;
      e.nodeType === zt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && th(a);
    }
    function KT(e, t, a) {
      e.insertBefore(t, a);
    }
    function ZT(e, t, a) {
      e.nodeType === zt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function JT(e, t) {
      e.removeChild(t);
    }
    function eR(e, t) {
      e.nodeType === zt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function by(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === zt) {
          var s = u.data;
          if (s === ah)
            if (i === 0) {
              e.removeChild(u), Le(t);
              return;
            } else
              i--;
          else
            (s === rh || s === kd || s === bd) && i++;
        }
        a = u;
      } while (a);
      Le(t);
    }
    function tR(e, t) {
      e.nodeType === zt ? by(e.parentNode, t) : e.nodeType === Yn && by(e, t), Le(e);
    }
    function nR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function rR(e) {
      e.nodeValue = "";
    }
    function aR(e, t) {
      e = e;
      var a = t[OT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ms("display", i);
    }
    function iR(e, t) {
      e.nodeValue = t;
    }
    function lR(e) {
      e.nodeType === Yn ? e.textContent = "" : e.nodeType === ta && e.documentElement && e.removeChild(e.documentElement);
    }
    function uR(e, t, a) {
      return e.nodeType !== Yn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function oR(e, t) {
      return t === "" || e.nodeType !== Na ? null : e;
    }
    function sR(e) {
      return e.nodeType !== zt ? null : e;
    }
    function M0(e) {
      return e.data === kd;
    }
    function _y(e) {
      return e.data === bd;
    }
    function cR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function fR(e, t) {
      e._reactRetry = t;
    }
    function ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yn || t === Na)
          break;
        if (t === zt) {
          var a = e.data;
          if (a === rh || a === bd || a === kd)
            break;
          if (a === ah)
            return null;
        }
      }
      return e;
    }
    function _d(e) {
      return ih(e.nextSibling);
    }
    function dR(e) {
      return ih(e.firstChild);
    }
    function pR(e) {
      return ih(e.firstChild);
    }
    function vR(e) {
      return ih(e.nextSibling);
    }
    function hR(e, t, a, i, u, s, f) {
      Ld(s, e), Oy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & De) !== fe;
      return xT(e, t, a, p, i, m, f);
    }
    function mR(e, t, a, i) {
      return Ld(a, e), a.mode & De, wT(e, t);
    }
    function yR(e, t) {
      Ld(t, e);
    }
    function gR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === zt) {
          var i = t.data;
          if (i === ah) {
            if (a === 0)
              return _d(t);
            a--;
          } else
            (i === rh || i === bd || i === kd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function L0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === zt) {
          var i = t.data;
          if (i === rh || i === bd || i === kd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === ah && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function SR(e) {
      Le(e);
    }
    function CR(e) {
      Le(e);
    }
    function ER(e) {
      return e !== "head" && e !== "body";
    }
    function TR(e, t, a, i) {
      var u = !0;
      eh(t.nodeValue, a, i, u);
    }
    function RR(e, t, a, i, u, s) {
      if (t[nh] !== !0) {
        var f = !0;
        eh(i.nodeValue, u, s, f);
      }
    }
    function xR(e, t) {
      t.nodeType === Yn ? Sy(e, t) : t.nodeType === zt || Cy(e, t);
    }
    function wR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yn ? Sy(a, t) : t.nodeType === zt || Cy(a, t));
      }
    }
    function DR(e, t, a, i, u) {
      (u || t[nh] !== !0) && (i.nodeType === Yn ? Sy(a, i) : i.nodeType === zt || Cy(a, i));
    }
    function kR(e, t, a) {
      Ey(e, t);
    }
    function bR(e, t) {
      Ty(e, t);
    }
    function _R(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ey(i, t);
      }
    }
    function MR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ty(a, t);
      }
    }
    function LR(e, t, a, i, u, s) {
      (s || t[nh] !== !0) && Ey(a, i);
    }
    function OR(e, t, a, i, u) {
      (u || t[nh] !== !0) && Ty(a, i);
    }
    function NR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function zR(e) {
      Ed(e);
    }
    var Tc = Math.random().toString(36).slice(2), Rc = "__reactFiber$" + Tc, My = "__reactProps$" + Tc, Md = "__reactContainer$" + Tc, Ly = "__reactEvents$" + Tc, UR = "__reactListeners$" + Tc, AR = "__reactHandles$" + Tc;
    function HR(e) {
      delete e[Rc], delete e[My], delete e[Ly], delete e[UR], delete e[AR];
    }
    function Ld(e, t) {
      t[Rc] = e;
    }
    function lh(e, t) {
      t[Md] = e;
    }
    function O0(e) {
      e[Md] = null;
    }
    function Od(e) {
      return !!e[Md];
    }
    function Ho(e) {
      var t = e[Rc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Md] || a[Rc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = L0(e); u !== null; ) {
              var s = u[Rc];
              if (s)
                return s;
              u = L0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ru(e) {
      var t = e[Rc] || e[Md];
      return t && (t.tag === le || t.tag === be || t.tag === ze || t.tag === ie) ? t : null;
    }
    function xc(e) {
      if (e.tag === le || e.tag === be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function uh(e) {
      return e[My] || null;
    }
    function Oy(e, t) {
      e[My] = t;
    }
    function FR(e) {
      var t = e[Ly];
      return t === void 0 && (t = e[Ly] = /* @__PURE__ */ new Set()), t;
    }
    var N0 = {}, z0 = N.ReactDebugCurrentFrame;
    function oh(e) {
      if (e) {
        var t = e._owner, a = Qu(e.type, e._source, t ? t.type : null);
        z0.setExtraStackFrame(a);
      } else
        z0.setExtraStackFrame(null);
    }
    function Ga(e, t, a, i, u) {
      {
        var s = Function.call.bind(Bn);
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
            p && !(p instanceof Error) && (oh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), oh(null)), p instanceof Error && !(p.message in N0) && (N0[p.message] = !0, oh(u), S("Failed %s type: %s", a, p.message), oh(null));
          }
      }
    }
    var Ny = [], sh;
    sh = [];
    var xl = -1;
    function xu(e) {
      return {
        current: e
      };
    }
    function Zn(e, t) {
      if (xl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== sh[xl] && S("Unexpected Fiber popped."), e.current = Ny[xl], Ny[xl] = null, sh[xl] = null, xl--;
    }
    function Jn(e, t, a) {
      xl++, Ny[xl] = e.current, sh[xl] = a, e.current = t;
    }
    var zy;
    zy = {};
    var la = {};
    Object.freeze(la);
    var wl = xu(la), zi = xu(!1), Uy = la;
    function wc(e, t, a) {
      return a && Ui(t) ? Uy : wl.current;
    }
    function U0(e, t, a) {
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
          var p = Te(e) || "Unknown";
          Ga(i, s, "context", p);
        }
        return u && U0(e, t, s), s;
      }
    }
    function ch() {
      return zi.current;
    }
    function Ui(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function fh(e) {
      Zn(zi, e), Zn(wl, e);
    }
    function Ay(e) {
      Zn(zi, e), Zn(wl, e);
    }
    function A0(e, t, a) {
      {
        if (wl.current !== la)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Jn(wl, t, e), Jn(zi, a, e);
      }
    }
    function H0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Te(e) || "Unknown";
            zy[s] || (zy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Te(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Te(e) || "Unknown";
          Ga(u, f, "child context", v);
        }
        return Me({}, a, f);
      }
    }
    function dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || la;
        return Uy = wl.current, Jn(wl, a, e), Jn(zi, zi.current, e), !0;
      }
    }
    function F0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = H0(e, t, Uy);
          i.__reactInternalMemoizedMergedChildContext = u, Zn(zi, e), Zn(wl, e), Jn(wl, u, e), Jn(zi, a, e);
        } else
          Zn(zi, e), Jn(zi, a, e);
      }
    }
    function VR(e) {
      {
        if (!Uf(e) || e.tag !== de)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ie:
              return t.stateNode.context;
            case de: {
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
    var wu = 0, ph = 1, Dl = null, Hy = !1, Fy = !1;
    function V0(e) {
      Dl === null ? Dl = [e] : Dl.push(e);
    }
    function jR(e) {
      Hy = !0, V0(e);
    }
    function j0() {
      Hy && Du();
    }
    function Du() {
      if (!Fy && Dl !== null) {
        Fy = !0;
        var e = 0, t = Ur();
        try {
          var a = !0, i = Dl;
          for (Pt(gn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Dl = null, Hy = !1;
        } catch (s) {
          throw Dl !== null && (Dl = Dl.slice(e + 1)), ks(_s, Du), s;
        } finally {
          Pt(t), Fy = !1;
        }
      }
      return null;
    }
    var kc = [], bc = 0, vh = null, hh = 0, Ca = [], Ea = 0, Fo = null, kl = 1, bl = "";
    function BR(e) {
      return jo(), (e.flags & Of) !== oe;
    }
    function PR(e) {
      return jo(), hh;
    }
    function YR() {
      var e = bl, t = kl, a = t & ~$R(t);
      return a.toString(32) + e;
    }
    function Vo(e, t) {
      jo(), kc[bc++] = hh, kc[bc++] = vh, vh = e, hh = t;
    }
    function B0(e, t, a) {
      jo(), Ca[Ea++] = kl, Ca[Ea++] = bl, Ca[Ea++] = Fo, Fo = e;
      var i = kl, u = bl, s = mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = mh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, b = s - m, _ = mh(t) + b, L = p << b, W = L | E, se = R + u;
        kl = 1 << _ | W, bl = se;
      } else {
        var re = p << s, Fe = re | f, Oe = u;
        kl = 1 << v | Fe, bl = Oe;
      }
    }
    function Vy(e) {
      jo();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Vo(e, a), B0(e, a, i);
      }
    }
    function mh(e) {
      return 32 - Us(e);
    }
    function $R(e) {
      return 1 << mh(e) - 1;
    }
    function jy(e) {
      for (; e === vh; )
        vh = kc[--bc], kc[bc] = null, hh = kc[--bc], kc[bc] = null;
      for (; e === Fo; )
        Fo = Ca[--Ea], Ca[Ea] = null, bl = Ca[--Ea], Ca[Ea] = null, kl = Ca[--Ea], Ca[Ea] = null;
    }
    function QR() {
      return jo(), Fo !== null ? {
        id: kl,
        overflow: bl
      } : null;
    }
    function IR(e, t) {
      jo(), Ca[Ea++] = kl, Ca[Ea++] = bl, Ca[Ea++] = Fo, kl = t.id, bl = t.overflow, Fo = e;
    }
    function jo() {
      _n() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var bn = null, Ta = null, Wa = !1, Bo = !1, ku = null;
    function GR() {
      Wa && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function P0() {
      Bo = !0;
    }
    function WR() {
      return Bo;
    }
    function XR(e) {
      var t = e.stateNode.containerInfo;
      return Ta = pR(t), bn = e, Wa = !0, ku = null, Bo = !1, !0;
    }
    function qR(e, t, a) {
      return Ta = vR(t), bn = e, Wa = !0, ku = null, Bo = !1, a !== null && IR(e, a), !0;
    }
    function Y0(e, t) {
      switch (e.tag) {
        case ie: {
          xR(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & De) !== fe;
          DR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ze: {
          var i = e.memoizedState;
          i.dehydrated !== null && wR(i.dehydrated, t);
          break;
        }
      }
    }
    function $0(e, t) {
      Y0(e, t);
      var a = JD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ye) : i.push(a);
    }
    function By(e, t) {
      {
        if (Bo)
          return;
        switch (e.tag) {
          case ie: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, kR(a, i);
                break;
              case be:
                var u = t.pendingProps;
                bR(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, m = t.pendingProps, y = (e.mode & De) !== fe;
                LR(
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
              case be: {
                var R = t.pendingProps, E = (e.mode & De) !== fe;
                OR(
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
          case ze: {
            var b = e.memoizedState, _ = b.dehydrated;
            if (_ !== null)
              switch (t.tag) {
                case le:
                  var L = t.type;
                  t.pendingProps, _R(_, L);
                  break;
                case be:
                  var W = t.pendingProps;
                  MR(_, W);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Q0(e, t) {
      t.flags = t.flags & ~Mr | ot, By(e, t);
    }
    function I0(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = uR(t, a);
          return i !== null ? (e.stateNode = i, bn = e, Ta = dR(i), !0) : !1;
        }
        case be: {
          var u = e.pendingProps, s = oR(t, u);
          return s !== null ? (e.stateNode = s, bn = e, Ta = null, !0) : !1;
        }
        case ze: {
          var f = sR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: QR(),
              retryLane: qn
            };
            e.memoizedState = p;
            var v = ek(f);
            return v.return = e, e.child = v, bn = e, Ta = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Py(e) {
      return (e.mode & De) !== fe && (e.flags & ge) === oe;
    }
    function Yy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function $y(e) {
      if (Wa) {
        var t = Ta;
        if (!t) {
          Py(e) && (By(bn, e), Yy()), Q0(bn, e), Wa = !1, bn = e;
          return;
        }
        var a = t;
        if (!I0(e, t)) {
          Py(e) && (By(bn, e), Yy()), t = _d(a);
          var i = bn;
          if (!t || !I0(e, t)) {
            Q0(bn, e), Wa = !1, bn = e;
            return;
          }
          $0(i, a);
        }
      }
    }
    function KR(e, t, a) {
      var i = e.stateNode, u = !Bo, s = hR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function ZR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = mR(t, a, e);
      if (i) {
        var u = bn;
        if (u !== null)
          switch (u.tag) {
            case ie: {
              var s = u.stateNode.containerInfo, f = (u.mode & De) !== fe;
              TR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & De) !== fe;
              RR(
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
    function JR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      yR(a, e);
    }
    function ex(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return gR(a);
    }
    function G0(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== ie && t.tag !== ze; )
        t = t.return;
      bn = t;
    }
    function yh(e) {
      if (e !== bn)
        return !1;
      if (!Wa)
        return G0(e), Wa = !0, !1;
      if (e.tag !== ie && (e.tag !== le || ER(e.type) && !wy(e.type, e.memoizedProps))) {
        var t = Ta;
        if (t)
          if (Py(e))
            W0(e), Yy();
          else
            for (; t; )
              $0(e, t), t = _d(t);
      }
      return G0(e), e.tag === ze ? Ta = ex(e) : Ta = bn ? _d(e.stateNode) : null, !0;
    }
    function tx() {
      return Wa && Ta !== null;
    }
    function W0(e) {
      for (var t = Ta; t; )
        Y0(e, t), t = _d(t);
    }
    function _c() {
      bn = null, Ta = null, Wa = !1, Bo = !1;
    }
    function X0() {
      ku !== null && (YC(ku), ku = null);
    }
    function _n() {
      return Wa;
    }
    function Qy(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    var nx = N.ReactCurrentBatchConfig, rx = null;
    function ax() {
      return nx.transition;
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
      var ix = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yt && (t = a), a = a.return;
        return t;
      }, Po = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Nd = [], zd = [], Ud = [], Ad = [], Hd = [], Fd = [], Yo = /* @__PURE__ */ new Set();
      Xa.recordUnsafeLifecycleWarnings = function(e, t) {
        Yo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Nd.push(e), e.mode & yt && typeof t.UNSAFE_componentWillMount == "function" && zd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ud.push(e), e.mode & yt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ad.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Hd.push(e), e.mode & yt && typeof t.UNSAFE_componentWillUpdate == "function" && Fd.push(e));
      }, Xa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Nd.length > 0 && (Nd.forEach(function(E) {
          e.add(Te(E) || "Component"), Yo.add(E.type);
        }), Nd = []);
        var t = /* @__PURE__ */ new Set();
        zd.length > 0 && (zd.forEach(function(E) {
          t.add(Te(E) || "Component"), Yo.add(E.type);
        }), zd = []);
        var a = /* @__PURE__ */ new Set();
        Ud.length > 0 && (Ud.forEach(function(E) {
          a.add(Te(E) || "Component"), Yo.add(E.type);
        }), Ud = []);
        var i = /* @__PURE__ */ new Set();
        Ad.length > 0 && (Ad.forEach(function(E) {
          i.add(Te(E) || "Component"), Yo.add(E.type);
        }), Ad = []);
        var u = /* @__PURE__ */ new Set();
        Hd.length > 0 && (Hd.forEach(function(E) {
          u.add(Te(E) || "Component"), Yo.add(E.type);
        }), Hd = []);
        var s = /* @__PURE__ */ new Set();
        if (Fd.length > 0 && (Fd.forEach(function(E) {
          s.add(Te(E) || "Component"), Yo.add(E.type);
        }), Fd = []), t.size > 0) {
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
          Je(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = Po(a);
          Je(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = Po(u);
          Je(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var gh = /* @__PURE__ */ new Map(), q0 = /* @__PURE__ */ new Set();
      Xa.recordLegacyContextWarning = function(e, t) {
        var a = ix(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!q0.has(e.type)) {
          var i = gh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], gh.set(a, i)), i.push(e));
        }
      }, Xa.flushLegacyContextWarning = function() {
        gh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Te(s) || "Component"), q0.add(s.type);
            });
            var u = Po(i);
            try {
              qe(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Vt();
            }
          }
        });
      }, Xa.discardPendingWarnings = function() {
        Nd = [], zd = [], Ud = [], Ad = [], Hd = [], Fd = [], gh = /* @__PURE__ */ new Map();
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
    var Iy = xu(null), Gy;
    Gy = {};
    var Sh = null, Mc = null, Wy = null, Ch = !1;
    function Eh() {
      Sh = null, Mc = null, Wy = null, Ch = !1;
    }
    function K0() {
      Ch = !0;
    }
    function Z0() {
      Ch = !1;
    }
    function J0(e, t, a) {
      Jn(Iy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Gy && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Gy;
    }
    function Xy(e, t) {
      var a = Iy.current;
      Zn(Iy, t), e._currentValue = a;
    }
    function qy(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (pl(i.childLanes, t) ? u !== null && !pl(u.childLanes, t) && (u.childLanes = we(u.childLanes, t)) : (i.childLanes = we(i.childLanes, t), u !== null && (u.childLanes = we(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function lx(e, t, a) {
      ux(e, t, a);
    }
    function ux(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === de) {
                var p = Bt(a), v = _l(at, p);
                v.tag = Rh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = we(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = we(E.lanes, a)), qy(i.return, a, e), s.lanes = we(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === pn)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Lt) {
          var b = i.return;
          if (b === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          b.lanes = we(b.lanes, a);
          var _ = b.alternate;
          _ !== null && (_.lanes = we(_.lanes, a)), qy(b, a, e), u = i.sibling;
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
    function Lc(e, t) {
      Sh = e, Mc = null, Wy = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Kn(a.lanes, t) && Zd(), a.firstContext = null);
      }
    }
    function Jt(e) {
      Ch && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wy !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Mc === null) {
          if (Sh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Mc = a, Sh.dependencies = {
            lanes: z,
            firstContext: a
          };
        } else
          Mc = Mc.next = a;
      }
      return t;
    }
    var $o = null;
    function Ky(e) {
      $o === null ? $o = [e] : $o.push(e);
    }
    function ox() {
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
    function e1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Ky(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Th(e, i);
    }
    function sx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Ky(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function cx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Ky(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Th(e, i);
    }
    function jr(e, t) {
      return Th(e, t);
    }
    var fx = Th;
    function Th(e, t) {
      e.lanes = we(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = we(a.lanes, t)), a === null && (e.flags & (ot | Mr)) !== oe && tE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = we(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = we(a.childLanes, t) : (u.flags & (ot | Mr)) !== oe && tE(e), i = u, u = u.return;
      if (i.tag === ie) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var t1 = 0, n1 = 1, Rh = 2, Zy = 3, xh = !1, Jy, wh;
    Jy = !1, wh = null;
    function eg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: z
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function r1(e, t) {
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
    function _l(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: t1,
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
      if (wh === u && !Jy && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Jy = !0), fD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, fx(e, a);
      } else
        return cx(e, u, t, a);
    }
    function Dh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Wf(a)) {
          var s = u.lanes;
          s = qf(s, e.pendingLanes);
          var f = we(s, a);
          u.lanes = f, ou(e, f);
        }
      }
    }
    function tg(e, t) {
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
    function dx(e, t, a, i, u, s) {
      switch (a.tag) {
        case n1: {
          var f = a.payload;
          if (typeof f == "function") {
            K0();
            var p = f.call(s, i, u);
            {
              if (e.mode & yt) {
                jt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  jt(!1);
                }
              }
              Z0();
            }
            return p;
          }
          return f;
        }
        case Zy:
          e.flags = e.flags & ~Wt | ge;
        case t1: {
          var v = a.payload, m;
          if (typeof v == "function") {
            K0(), m = v.call(s, i, u);
            {
              if (e.mode & yt) {
                jt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  jt(!1);
                }
              }
              Z0();
            }
          } else
            m = v;
          return m == null ? i : Me({}, i, m);
        }
        case Rh:
          return xh = !0, i;
      }
      return i;
    }
    function kh(e, t, a, i) {
      var u = e.updateQueue;
      xh = !1, wh = u.shared;
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
        var b = u.baseState, _ = z, L = null, W = null, se = null, re = s;
        do {
          var Fe = re.lane, Oe = re.eventTime;
          if (pl(i, Fe)) {
            if (se !== null) {
              var O = {
                eventTime: Oe,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ae,
                tag: re.tag,
                payload: re.payload,
                callback: re.callback,
                next: null
              };
              se = se.next = O;
            }
            b = dx(e, u, re, b, t, a);
            var D = re.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            re.lane !== Ae) {
              e.flags |= va;
              var V = u.effects;
              V === null ? u.effects = [re] : V.push(re);
            }
          } else {
            var w = {
              eventTime: Oe,
              lane: Fe,
              tag: re.tag,
              payload: re.payload,
              callback: re.callback,
              next: null
            };
            se === null ? (W = se = w, L = b) : se = se.next = w, _ = we(_, Fe);
          }
          if (re = re.next, re === null) {
            if (p = u.shared.pending, p === null)
              break;
            var X = p, Q = X.next;
            X.next = null, re = Q, u.lastBaseUpdate = X, u.shared.pending = null;
          }
        } while (!0);
        se === null && (L = b), u.baseState = L, u.firstBaseUpdate = W, u.lastBaseUpdate = se;
        var ye = u.shared.interleaved;
        if (ye !== null) {
          var Ee = ye;
          do
            _ = we(_, Ee.lane), Ee = Ee.next;
          while (Ee !== ye);
        } else
          s === null && (u.shared.lanes = z);
        cp(_), e.lanes = _, e.memoizedState = b;
      }
      wh = null;
    }
    function px(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function a1() {
      xh = !1;
    }
    function bh() {
      return xh;
    }
    function i1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, px(f, a));
        }
    }
    var ng = {}, l1 = new ae.Component().refs, rg, ag, ig, lg, ug, u1, _h, og, sg, cg;
    {
      rg = /* @__PURE__ */ new Set(), ag = /* @__PURE__ */ new Set(), ig = /* @__PURE__ */ new Set(), lg = /* @__PURE__ */ new Set(), og = /* @__PURE__ */ new Set(), ug = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set();
      var o1 = /* @__PURE__ */ new Set();
      _h = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          o1.has(a) || (o1.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, u1 = function(e, t) {
        if (t === void 0) {
          var a = nt(e) || "Component";
          ug.has(a) || (ug.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(ng, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ng);
    }
    function fg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & yt) {
          jt(!0);
          try {
            s = a(i, u);
          } finally {
            jt(!1);
          }
        }
        u1(t, s);
      }
      var f = s == null ? u : Me({}, u, s);
      if (e.memoizedState = f, e.lanes === z) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var dg = {
      isMounted: sr,
      enqueueSetState: function(e, t, a) {
        var i = br(e), u = hr(), s = Au(i), f = _l(u, s);
        f.payload = t, a != null && (_h(a, "setState"), f.callback = a);
        var p = bu(i, f, s);
        p !== null && (dn(p, i, s, u), Dh(p, i, s)), wi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = br(e), u = hr(), s = Au(i), f = _l(u, s);
        f.tag = n1, f.payload = t, a != null && (_h(a, "replaceState"), f.callback = a);
        var p = bu(i, f, s);
        p !== null && (dn(p, i, s, u), Dh(p, i, s)), wi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = br(e), i = hr(), u = Au(a), s = _l(i, u);
        s.tag = Rh, t != null && (_h(t, "forceUpdate"), s.callback = t);
        var f = bu(a, s, u);
        f !== null && (dn(f, a, u, i), Dh(f, a, u)), $f(a, u);
      }
    };
    function s1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & yt) {
            jt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              jt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", nt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ue(a, i) || !ue(u, s) : !0;
    }
    function vx(e, t, a) {
      var i = e.stateNode;
      {
        var u = nt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !sg.has(t) && (sg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", nt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !ig.has(t) && (ig.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", nt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || It(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function c1(e, t) {
      t.updater = dg, e.stateNode = t, Zl(t, e), t._reactInternalInstance = ng;
    }
    function f1(e, t, a) {
      var i = !1, u = la, s = la, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Kc && f._context === void 0
        );
        if (!p && !cg.has(t)) {
          cg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === qc ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", nt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jt(f);
      else {
        u = wc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Dc(e, u) : la;
      }
      var y = new t(a, s);
      if (e.mode & yt) {
        jt(!0);
        try {
          y = new t(a, s);
        } finally {
          jt(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      c1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = nt(t) || "Component";
          ag.has(E) || (ag.add(E), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var b = null, _ = null, L = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? b = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (b = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? _ = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (_ = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? L = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (L = "UNSAFE_componentWillUpdate"), b !== null || _ !== null || L !== null) {
            var W = nt(t) || "Component", se = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lg.has(W) || (lg.add(W), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, W, se, b !== null ? `
  ` + b : "", _ !== null ? `
  ` + _ : "", L !== null ? `
  ` + L : ""));
          }
        }
      }
      return i && U0(e, u, s), y;
    }
    function hx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Te(e) || "Component"), dg.enqueueReplaceState(t, t.state, null));
    }
    function d1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Te(e) || "Component";
          rg.has(s) || (rg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dg.enqueueReplaceState(t, t.state, null);
      }
    }
    function pg(e, t, a, i) {
      vx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = l1, eg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jt(s);
      else {
        var f = wc(e, t, !0);
        u.context = Dc(e, f);
      }
      {
        if (u.state === a) {
          var p = nt(t) || "Component";
          og.has(p) || (og.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yt && Xa.recordLegacyContextWarning(e, u), Xa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (fg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (hx(e, u), kh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = xe;
        m |= Qn, (e.mode & Nr) !== fe && (m |= In), e.flags |= m;
      }
    }
    function mx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = la;
      if (typeof p == "object" && p !== null)
        v = Jt(p);
      else {
        var m = wc(e, t, !0);
        v = Dc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && d1(e, u, a, v), a1();
      var E = e.memoizedState, b = u.state = E;
      if (kh(e, a, u, i), b = e.memoizedState, s === a && E === b && !ch() && !bh()) {
        if (typeof u.componentDidMount == "function") {
          var _ = xe;
          _ |= Qn, (e.mode & Nr) !== fe && (_ |= In), e.flags |= _;
        }
        return !1;
      }
      typeof y == "function" && (fg(e, t, y, a), b = e.memoizedState);
      var L = bh() || s1(e, t, s, a, E, b, v);
      if (L) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var W = xe;
          W |= Qn, (e.mode & Nr) !== fe && (W |= In), e.flags |= W;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var se = xe;
          se |= Qn, (e.mode & Nr) !== fe && (se |= In), e.flags |= se;
        }
        e.memoizedProps = a, e.memoizedState = b;
      }
      return u.props = a, u.state = b, u.context = v, L;
    }
    function yx(e, t, a, i, u) {
      var s = t.stateNode;
      r1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : qa(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = la;
      if (typeof y == "object" && y !== null)
        R = Jt(y);
      else {
        var E = wc(t, a, !0);
        R = Dc(t, E);
      }
      var b = a.getDerivedStateFromProps, _ = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !_ && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && d1(t, s, i, R), a1();
      var L = t.memoizedState, W = s.state = L;
      if (kh(t, i, s, u), W = t.memoizedState, f === v && L === W && !ch() && !bh() && !me)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= xe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= _r), !1;
      typeof b == "function" && (fg(t, a, b, i), W = t.memoizedState);
      var se = bh() || s1(t, a, p, i, L, W, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      me;
      return se ? (!_ && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, W, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, W, R)), typeof s.componentDidUpdate == "function" && (t.flags |= xe), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= _r)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= xe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= _r), t.memoizedProps = i, t.memoizedState = W), s.props = i, s.state = W, s.context = R, se;
    }
    var vg, hg, mg, yg, gg, p1 = function(e, t) {
    };
    vg = !1, hg = !1, mg = {}, yg = {}, gg = {}, p1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Te(t) || "Component";
        yg[a] || (yg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Vd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yt || ar) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Te(e) || "Component";
          mg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), mg[u] = !0);
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
          $i(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            E === l1 && (E = v.refs = {}), R === null ? delete E[m] : E[m] = R;
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
    function Mh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Lh(e) {
      {
        var t = Te(e) || "Component";
        if (gg[t])
          return;
        gg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function v1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function h1(e) {
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
        for (var D = /* @__PURE__ */ new Map(), V = O; V !== null; )
          V.key !== null ? D.set(V.key, V) : D.set(V.index, V), V = V.sibling;
        return D;
      }
      function u(w, O) {
        var D = Zo(w, O);
        return D.index = 0, D.sibling = null, D;
      }
      function s(w, O, D) {
        if (w.index = D, !e)
          return w.flags |= Of, O;
        var V = w.alternate;
        if (V !== null) {
          var X = V.index;
          return X < O ? (w.flags |= ot, O) : X;
        } else
          return w.flags |= ot, O;
      }
      function f(w) {
        return e && w.alternate === null && (w.flags |= ot), w;
      }
      function p(w, O, D, V) {
        if (O === null || O.tag !== be) {
          var X = QS(D, w.mode, V);
          return X.return = w, X;
        } else {
          var Q = u(O, D);
          return Q.return = w, Q;
        }
      }
      function v(w, O, D, V) {
        var X = D.type;
        if (X === _a)
          return y(w, O, D.props.children, V, D.key);
        if (O !== null && (O.elementType === X || // Keep this check inline so it only runs on the false path:
        iE(O, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof X == "object" && X !== null && X.$$typeof === Dn && v1(X) === O.type)) {
          var Q = u(O, D.props);
          return Q.ref = Vd(w, O, D), Q.return = w, Q._debugSource = D._source, Q._debugOwner = D._owner, Q;
        }
        var ye = $S(D, w.mode, V);
        return ye.ref = Vd(w, O, D), ye.return = w, ye;
      }
      function m(w, O, D, V) {
        if (O === null || O.tag !== he || O.stateNode.containerInfo !== D.containerInfo || O.stateNode.implementation !== D.implementation) {
          var X = IS(D, w.mode, V);
          return X.return = w, X;
        } else {
          var Q = u(O, D.children || []);
          return Q.return = w, Q;
        }
      }
      function y(w, O, D, V, X) {
        if (O === null || O.tag !== et) {
          var Q = Fu(D, w.mode, V, X);
          return Q.return = w, Q;
        } else {
          var ye = u(O, D);
          return ye.return = w, ye;
        }
      }
      function R(w, O, D) {
        if (typeof O == "string" && O !== "" || typeof O == "number") {
          var V = QS("" + O, w.mode, D);
          return V.return = w, V;
        }
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Hl: {
              var X = $S(O, w.mode, D);
              return X.ref = Vd(w, null, O), X.return = w, X;
            }
            case Kr: {
              var Q = IS(O, w.mode, D);
              return Q.return = w, Q;
            }
            case Dn: {
              var ye = O._payload, Ee = O._init;
              return R(w, Ee(ye), D);
            }
          }
          if (It(O) || Ma(O)) {
            var Ze = Fu(O, w.mode, D, null);
            return Ze.return = w, Ze;
          }
          Mh(w, O);
        }
        return typeof O == "function" && Lh(w), null;
      }
      function E(w, O, D, V) {
        var X = O !== null ? O.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return X !== null ? null : p(w, O, "" + D, V);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Hl:
              return D.key === X ? v(w, O, D, V) : null;
            case Kr:
              return D.key === X ? m(w, O, D, V) : null;
            case Dn: {
              var Q = D._payload, ye = D._init;
              return E(w, O, ye(Q), V);
            }
          }
          if (It(D) || Ma(D))
            return X !== null ? null : y(w, O, D, V, null);
          Mh(w, D);
        }
        return typeof D == "function" && Lh(w), null;
      }
      function b(w, O, D, V, X) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var Q = w.get(D) || null;
          return p(O, Q, "" + V, X);
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Hl: {
              var ye = w.get(V.key === null ? D : V.key) || null;
              return v(O, ye, V, X);
            }
            case Kr: {
              var Ee = w.get(V.key === null ? D : V.key) || null;
              return m(O, Ee, V, X);
            }
            case Dn:
              var Ze = V._payload, Be = V._init;
              return b(w, O, D, Be(Ze), X);
          }
          if (It(V) || Ma(V)) {
            var Qt = w.get(D) || null;
            return y(O, Qt, V, X, null);
          }
          Mh(O, V);
        }
        return typeof V == "function" && Lh(O), null;
      }
      function _(w, O, D) {
        {
          if (typeof w != "object" || w === null)
            return O;
          switch (w.$$typeof) {
            case Hl:
            case Kr:
              p1(w, D);
              var V = w.key;
              if (typeof V != "string")
                break;
              if (O === null) {
                O = /* @__PURE__ */ new Set(), O.add(V);
                break;
              }
              if (!O.has(V)) {
                O.add(V);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", V);
              break;
            case Dn:
              var X = w._payload, Q = w._init;
              _(Q(X), O, D);
              break;
          }
        }
        return O;
      }
      function L(w, O, D, V) {
        for (var X = null, Q = 0; Q < D.length; Q++) {
          var ye = D[Q];
          X = _(ye, X, w);
        }
        for (var Ee = null, Ze = null, Be = O, Qt = 0, Pe = 0, Ht = null; Be !== null && Pe < D.length; Pe++) {
          Be.index > Pe ? (Ht = Be, Be = null) : Ht = Be.sibling;
          var tr = E(w, Be, D[Pe], V);
          if (tr === null) {
            Be === null && (Be = Ht);
            break;
          }
          e && Be && tr.alternate === null && t(w, Be), Qt = s(tr, Qt, Pe), Ze === null ? Ee = tr : Ze.sibling = tr, Ze = tr, Be = Ht;
        }
        if (Pe === D.length) {
          if (a(w, Be), _n()) {
            var An = Pe;
            Vo(w, An);
          }
          return Ee;
        }
        if (Be === null) {
          for (; Pe < D.length; Pe++) {
            var oa = R(w, D[Pe], V);
            oa !== null && (Qt = s(oa, Qt, Pe), Ze === null ? Ee = oa : Ze.sibling = oa, Ze = oa);
          }
          if (_n()) {
            var mr = Pe;
            Vo(w, mr);
          }
          return Ee;
        }
        for (var yr = i(w, Be); Pe < D.length; Pe++) {
          var nr = b(yr, w, Pe, D[Pe], V);
          nr !== null && (e && nr.alternate !== null && yr.delete(nr.key === null ? Pe : nr.key), Qt = s(nr, Qt, Pe), Ze === null ? Ee = nr : Ze.sibling = nr, Ze = nr);
        }
        if (e && yr.forEach(function(Wc) {
          return t(w, Wc);
        }), _n()) {
          var Ul = Pe;
          Vo(w, Ul);
        }
        return Ee;
      }
      function W(w, O, D, V) {
        var X = Ma(D);
        if (typeof X != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (hg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hg = !0), D.entries === X && (vg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vg = !0);
          var Q = X.call(D);
          if (Q)
            for (var ye = null, Ee = Q.next(); !Ee.done; Ee = Q.next()) {
              var Ze = Ee.value;
              ye = _(Ze, ye, w);
            }
        }
        var Be = X.call(D);
        if (Be == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qt = null, Pe = null, Ht = O, tr = 0, An = 0, oa = null, mr = Be.next(); Ht !== null && !mr.done; An++, mr = Be.next()) {
          Ht.index > An ? (oa = Ht, Ht = null) : oa = Ht.sibling;
          var yr = E(w, Ht, mr.value, V);
          if (yr === null) {
            Ht === null && (Ht = oa);
            break;
          }
          e && Ht && yr.alternate === null && t(w, Ht), tr = s(yr, tr, An), Pe === null ? Qt = yr : Pe.sibling = yr, Pe = yr, Ht = oa;
        }
        if (mr.done) {
          if (a(w, Ht), _n()) {
            var nr = An;
            Vo(w, nr);
          }
          return Qt;
        }
        if (Ht === null) {
          for (; !mr.done; An++, mr = Be.next()) {
            var Ul = R(w, mr.value, V);
            Ul !== null && (tr = s(Ul, tr, An), Pe === null ? Qt = Ul : Pe.sibling = Ul, Pe = Ul);
          }
          if (_n()) {
            var Wc = An;
            Vo(w, Wc);
          }
          return Qt;
        }
        for (var hp = i(w, Ht); !mr.done; An++, mr = Be.next()) {
          var Yi = b(hp, w, An, mr.value, V);
          Yi !== null && (e && Yi.alternate !== null && hp.delete(Yi.key === null ? An : Yi.key), tr = s(Yi, tr, An), Pe === null ? Qt = Yi : Pe.sibling = Yi, Pe = Yi);
        }
        if (e && hp.forEach(function(Lk) {
          return t(w, Lk);
        }), _n()) {
          var Mk = An;
          Vo(w, Mk);
        }
        return Qt;
      }
      function se(w, O, D, V) {
        if (O !== null && O.tag === be) {
          a(w, O.sibling);
          var X = u(O, D);
          return X.return = w, X;
        }
        a(w, O);
        var Q = QS(D, w.mode, V);
        return Q.return = w, Q;
      }
      function re(w, O, D, V) {
        for (var X = D.key, Q = O; Q !== null; ) {
          if (Q.key === X) {
            var ye = D.type;
            if (ye === _a) {
              if (Q.tag === et) {
                a(w, Q.sibling);
                var Ee = u(Q, D.props.children);
                return Ee.return = w, Ee._debugSource = D._source, Ee._debugOwner = D._owner, Ee;
              }
            } else if (Q.elementType === ye || // Keep this check inline so it only runs on the false path:
            iE(Q, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ye == "object" && ye !== null && ye.$$typeof === Dn && v1(ye) === Q.type) {
              a(w, Q.sibling);
              var Ze = u(Q, D.props);
              return Ze.ref = Vd(w, Q, D), Ze.return = w, Ze._debugSource = D._source, Ze._debugOwner = D._owner, Ze;
            }
            a(w, Q);
            break;
          } else
            t(w, Q);
          Q = Q.sibling;
        }
        if (D.type === _a) {
          var Be = Fu(D.props.children, w.mode, V, D.key);
          return Be.return = w, Be;
        } else {
          var Qt = $S(D, w.mode, V);
          return Qt.ref = Vd(w, O, D), Qt.return = w, Qt;
        }
      }
      function Fe(w, O, D, V) {
        for (var X = D.key, Q = O; Q !== null; ) {
          if (Q.key === X)
            if (Q.tag === he && Q.stateNode.containerInfo === D.containerInfo && Q.stateNode.implementation === D.implementation) {
              a(w, Q.sibling);
              var ye = u(Q, D.children || []);
              return ye.return = w, ye;
            } else {
              a(w, Q);
              break;
            }
          else
            t(w, Q);
          Q = Q.sibling;
        }
        var Ee = IS(D, w.mode, V);
        return Ee.return = w, Ee;
      }
      function Oe(w, O, D, V) {
        var X = typeof D == "object" && D !== null && D.type === _a && D.key === null;
        if (X && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Hl:
              return f(re(w, O, D, V));
            case Kr:
              return f(Fe(w, O, D, V));
            case Dn:
              var Q = D._payload, ye = D._init;
              return Oe(w, O, ye(Q), V);
          }
          if (It(D))
            return L(w, O, D, V);
          if (Ma(D))
            return W(w, O, D, V);
          Mh(w, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(se(w, O, "" + D, V)) : (typeof D == "function" && Lh(w), a(w, O));
      }
      return Oe;
    }
    var Oc = h1(!0), m1 = h1(!1);
    function gx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Zo(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Zo(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Sx(e, t) {
      for (var a = e.child; a !== null; )
        WD(a, t), a = a.sibling;
    }
    var jd = {}, _u = xu(jd), Bd = xu(jd), Oh = xu(jd);
    function Nh(e) {
      if (e === jd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function y1() {
      var e = Nh(Oh.current);
      return e;
    }
    function Sg(e, t) {
      Jn(Oh, t, e), Jn(Bd, e, e), Jn(_u, jd, e);
      var a = NT(t);
      Zn(_u, e), Jn(_u, a, e);
    }
    function Nc(e) {
      Zn(_u, e), Zn(Bd, e), Zn(Oh, e);
    }
    function Cg() {
      var e = Nh(_u.current);
      return e;
    }
    function g1(e) {
      Nh(Oh.current);
      var t = Nh(_u.current), a = zT(t, e.type);
      t !== a && (Jn(Bd, e, e), Jn(_u, a, e));
    }
    function Eg(e) {
      Bd.current === e && (Zn(_u, e), Zn(Bd, e));
    }
    var Cx = 0, S1 = 1, C1 = 1, Pd = 2, Ka = xu(Cx);
    function Tg(e, t) {
      return (e & t) !== 0;
    }
    function zc(e) {
      return e & S1;
    }
    function Rg(e, t) {
      return e & S1 | t;
    }
    function Ex(e, t) {
      return e | t;
    }
    function Mu(e, t) {
      Jn(Ka, t, e);
    }
    function Uc(e) {
      Zn(Ka, e);
    }
    function Tx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function zh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ze) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || M0(i) || _y(i))
              return t;
          }
        } else if (t.tag === it && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ge) !== oe;
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
    ), an = (
      /* */
      1
    ), Ai = (
      /*  */
      2
    ), ln = (
      /*    */
      4
    ), Mn = (
      /*   */
      8
    ), xg = [];
    function wg() {
      for (var e = 0; e < xg.length; e++) {
        var t = xg[e];
        t._workInProgressVersionPrimary = null;
      }
      xg.length = 0;
    }
    function Rx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var G = N.ReactCurrentDispatcher, Yd = N.ReactCurrentBatchConfig, Dg, Ac;
    Dg = /* @__PURE__ */ new Set();
    var Qo = z, Ke = null, un = null, on = null, Uh = !1, $d = !1, Qd = 0, xx = 0, wx = 25, U = null, Ra = null, Lu = -1, kg = !1;
    function Qe() {
      {
        var e = U;
        Ra === null ? Ra = [e] : Ra.push(e);
      }
    }
    function P() {
      {
        var e = U;
        Ra !== null && (Lu++, Ra[Lu] !== e && Dx(e));
      }
    }
    function Hc(e) {
      e != null && !It(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function Dx(e) {
      {
        var t = Te(Ke);
        if (!Dg.has(t) && (Dg.add(t), Ra !== null)) {
          for (var a = "", i = 30, u = 0; u <= Lu; u++) {
            for (var s = Ra[u], f = u === Lu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function bg(e, t) {
      if (kg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!J(e[a], t[a]))
          return !1;
      return !0;
    }
    function Fc(e, t, a, i, u, s) {
      Qo = s, Ke = t, Ra = e !== null ? e._debugHookTypes : null, Lu = -1, kg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = z, e !== null && e.memoizedState !== null ? G.current = P1 : Ra !== null ? G.current = B1 : G.current = j1;
      var f = a(i, u);
      if ($d) {
        var p = 0;
        do {
          if ($d = !1, Qd = 0, p >= wx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, kg = !1, un = null, on = null, t.updateQueue = null, Lu = -1, G.current = Y1, f = a(i, u);
        } while ($d);
      }
      G.current = Wh, t._debugHookTypes = Ra;
      var v = un !== null && un.next !== null;
      if (Qo = z, Ke = null, un = null, on = null, U = null, Ra = null, Lu = -1, e !== null && (e.flags & tn) !== (t.flags & tn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & De) !== fe && S("Internal React error: Expected static flag was missing. Please notify the React team."), Uh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vc() {
      var e = Qd !== 0;
      return Qd = 0, e;
    }
    function E1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nr) !== fe ? t.flags &= ~(rl | In | pt | xe) : t.flags &= ~(pt | xe), e.lanes = uu(e.lanes, a);
    }
    function T1() {
      if (G.current = Wh, Uh) {
        for (var e = Ke.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Uh = !1;
      }
      Qo = z, Ke = null, un = null, on = null, Ra = null, Lu = -1, U = null, U1 = !1, $d = !1, Qd = 0;
    }
    function Hi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return on === null ? Ke.memoizedState = on = e : on = on.next = e, on;
    }
    function xa() {
      var e;
      if (un === null) {
        var t = Ke.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = un.next;
      var a;
      if (on === null ? a = Ke.memoizedState : a = on.next, a !== null)
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
        on === null ? Ke.memoizedState = on = i : on = on.next = i;
      }
      return on;
    }
    function R1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Mg(e, t, a) {
      var i = Hi(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: z,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Mx.bind(null, Ke, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = xa(), u = i.queue;
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
        var y = f.next, R = s.baseState, E = null, b = null, _ = null, L = y;
        do {
          var W = L.lane;
          if (pl(Qo, W)) {
            if (_ !== null) {
              var re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ae,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              };
              _ = _.next = re;
            }
            if (L.hasEagerState)
              R = L.eagerState;
            else {
              var Fe = L.action;
              R = e(R, Fe);
            }
          } else {
            var se = {
              lane: W,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            };
            _ === null ? (b = _ = se, E = R) : _ = _.next = se, Ke.lanes = we(Ke.lanes, W), cp(W);
          }
          L = L.next;
        } while (L !== null && L !== y);
        _ === null ? E = R : _.next = b, J(R, i.memoizedState) || Zd(), i.memoizedState = R, i.baseState = E, i.baseQueue = _, u.lastRenderedState = R;
      }
      var Oe = u.interleaved;
      if (Oe !== null) {
        var w = Oe;
        do {
          var O = w.lane;
          Ke.lanes = we(Ke.lanes, O), cp(O), w = w.next;
        } while (w !== Oe);
      } else
        f === null && (u.lanes = z);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Og(e, t, a) {
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
        J(p, i.memoizedState) || Zd(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Vk(e, t, a) {
    }
    function jk(e, t, a) {
    }
    function Ng(e, t, a) {
      var i = Ke, u = Hi(), s, f = _n();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ac || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ac = !0);
      } else {
        if (s = t(), !Ac) {
          var p = t();
          J(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ac = !0);
        }
        var v = dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        To(v, Qo) || x1(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, jh(D1.bind(null, i, m, e), [e]), i.flags |= pt, Id(an | Mn, w1.bind(null, i, m, s, t), void 0, null), s;
    }
    function Ah(e, t, a) {
      var i = Ke, u = xa(), s = t();
      if (!Ac) {
        var f = t();
        J(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ac = !0);
      }
      var p = u.memoizedState, v = !J(p, s);
      v && (u.memoizedState = s, Zd());
      var m = u.queue;
      if (Wd(D1.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      on !== null && on.memoizedState.tag & an) {
        i.flags |= pt, Id(an | Mn, w1.bind(null, i, m, s, t), void 0, null);
        var y = dm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        To(y, Qo) || x1(i, t, s);
      }
      return s;
    }
    function x1(e, t, a) {
      e.flags |= po;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Ke.updateQueue;
      if (u === null)
        u = R1(), Ke.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function w1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, k1(t) && b1(e);
    }
    function D1(e, t, a) {
      var i = function() {
        k1(t) && b1(e);
      };
      return a(i);
    }
    function k1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !J(a, i);
      } catch {
        return !0;
      }
    }
    function b1(e) {
      var t = jr(e, ve);
      t !== null && dn(t, e, ve, at);
    }
    function Hh(e) {
      var t = Hi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: z,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Lx.bind(null, Ke, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Lg(_g);
    }
    function Ug(e) {
      return Og(_g);
    }
    function Id(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Ke.updateQueue;
      if (s === null)
        s = R1(), Ke.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ag(e) {
      var t = Hi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Fh(e) {
      var t = xa();
      return t.memoizedState;
    }
    function Gd(e, t, a, i) {
      var u = Hi(), s = i === void 0 ? null : i;
      Ke.flags |= e, u.memoizedState = Id(an | t, a, void 0, s);
    }
    function Vh(e, t, a, i) {
      var u = xa(), s = i === void 0 ? null : i, f = void 0;
      if (un !== null) {
        var p = un.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = Id(t, a, f, s);
            return;
          }
        }
      }
      Ke.flags |= e, u.memoizedState = Id(an | t, a, f, s);
    }
    function jh(e, t) {
      return (Ke.mode & Nr) !== fe ? Gd(rl | pt | Si, Mn, e, t) : Gd(pt | Si, Mn, e, t);
    }
    function Wd(e, t) {
      return Vh(pt, Mn, e, t);
    }
    function Hg(e, t) {
      return Gd(xe, Ai, e, t);
    }
    function Bh(e, t) {
      return Vh(xe, Ai, e, t);
    }
    function Fg(e, t) {
      var a = xe;
      return a |= Qn, (Ke.mode & Nr) !== fe && (a |= In), Gd(a, ln, e, t);
    }
    function Ph(e, t) {
      return Vh(xe, ln, e, t);
    }
    function _1(e, t) {
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
    function Vg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = xe;
      return u |= Qn, (Ke.mode & Nr) !== fe && (u |= In), Gd(u, ln, _1.bind(null, t, e), i);
    }
    function Yh(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Vh(xe, ln, _1.bind(null, t, e), i);
    }
    function kx(e, t) {
    }
    var $h = kx;
    function jg(e, t) {
      var a = Hi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Qh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Bg(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Ih(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Pg(e) {
      var t = Hi();
      return t.memoizedState = e, e;
    }
    function M1(e) {
      var t = xa(), a = un, i = a.memoizedState;
      return O1(t, i, e);
    }
    function L1(e) {
      var t = xa();
      if (un === null)
        return t.memoizedState = e, e;
      var a = un.memoizedState;
      return O1(t, a, e);
    }
    function O1(e, t, a) {
      var i = !Wm(Qo);
      if (i) {
        if (!J(a, t)) {
          var u = Xf();
          Ke.lanes = we(Ke.lanes, u), cp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Zd()), e.memoizedState = a, a;
    }
    function bx(e, t, a) {
      var i = Ur();
      Pt(Sn(i, rn)), e(!0);
      var u = Yd.transition;
      Yd.transition = {};
      var s = Yd.transition;
      Yd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pt(i), Yd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Yg() {
      var e = Hh(!1), t = e[0], a = e[1], i = bx.bind(null, a), u = Hi();
      return u.memoizedState = i, [t, i];
    }
    function N1() {
      var e = zg(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    function z1() {
      var e = Ug(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    var U1 = !1;
    function _x() {
      return U1;
    }
    function $g() {
      var e = Hi(), t = dm(), a = t.identifierPrefix, i;
      if (_n()) {
        var u = YR();
        i = ":" + a + "R" + u;
        var s = Qd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = xx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Gh() {
      var e = xa(), t = e.memoizedState;
      return t;
    }
    function Mx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Au(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (A1(e))
        H1(t, u);
      else {
        var s = e1(e, t, u, i);
        if (s !== null) {
          var f = hr();
          dn(s, e, i, f), F1(s, t, i);
        }
      }
      V1(e, i);
    }
    function Lx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Au(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (A1(e))
        H1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === z && (s === null || s.lanes === z)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = G.current, G.current = Za;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, J(m, v)) {
                sx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              G.current = p;
            }
          }
        }
        var y = e1(e, t, u, i);
        if (y !== null) {
          var R = hr();
          dn(y, e, i, R), F1(y, t, i);
        }
      }
      V1(e, i);
    }
    function A1(e) {
      var t = e.alternate;
      return e === Ke || t !== null && t === Ke;
    }
    function H1(e, t) {
      $d = Uh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function F1(e, t, a) {
      if (Wf(a)) {
        var i = t.lanes;
        i = qf(i, e.pendingLanes);
        var u = we(i, a);
        t.lanes = u, ou(e, u);
      }
    }
    function V1(e, t, a) {
      wi(e, t);
    }
    var Wh = {
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
    }, j1 = null, B1 = null, P1 = null, Y1 = null, Fi = null, Za = null, Xh = null;
    {
      var Qg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ce = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      j1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Qe(), Hc(t), jg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Qe(), Jt(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Qe(), Hc(t), jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Qe(), Hc(a), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Qe(), Hc(t), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Qe(), Hc(t), Fg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Qe(), Hc(t);
          var a = G.current;
          G.current = Fi;
          try {
            return Bg(e, t);
          } finally {
            G.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Qe();
          var i = G.current;
          G.current = Fi;
          try {
            return Mg(e, t, a);
          } finally {
            G.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Qe(), Ag(e);
        },
        useState: function(e) {
          U = "useState", Qe();
          var t = G.current;
          G.current = Fi;
          try {
            return Hh(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Qe(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Qe(), Pg(e);
        },
        useTransition: function() {
          return U = "useTransition", Qe(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Qe(), Ng(e, t, a);
        },
        useId: function() {
          return U = "useId", Qe(), $g();
        },
        unstable_isNewReconciler: Y
      }, B1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", P(), jg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", P(), Jt(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", P(), jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", P(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", P(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", P(), Fg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", P();
          var a = G.current;
          G.current = Fi;
          try {
            return Bg(e, t);
          } finally {
            G.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", P();
          var i = G.current;
          G.current = Fi;
          try {
            return Mg(e, t, a);
          } finally {
            G.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", P(), Ag(e);
        },
        useState: function(e) {
          U = "useState", P();
          var t = G.current;
          G.current = Fi;
          try {
            return Hh(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", P(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", P(), Pg(e);
        },
        useTransition: function() {
          return U = "useTransition", P(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", P(), Ng(e, t, a);
        },
        useId: function() {
          return U = "useId", P(), $g();
        },
        unstable_isNewReconciler: Y
      }, P1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", P(), Qh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", P(), Jt(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", P(), Wd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", P(), Yh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", P(), Bh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", P(), Ph(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", P();
          var a = G.current;
          G.current = Za;
          try {
            return Ih(e, t);
          } finally {
            G.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", P();
          var i = G.current;
          G.current = Za;
          try {
            return Lg(e, t, a);
          } finally {
            G.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", P(), Fh();
        },
        useState: function(e) {
          U = "useState", P();
          var t = G.current;
          G.current = Za;
          try {
            return zg(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", P(), $h();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", P(), M1(e);
        },
        useTransition: function() {
          return U = "useTransition", P(), N1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", P(), Ah(e, t);
        },
        useId: function() {
          return U = "useId", P(), Gh();
        },
        unstable_isNewReconciler: Y
      }, Y1 = {
        readContext: function(e) {
          return Jt(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", P(), Qh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", P(), Jt(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", P(), Wd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", P(), Yh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", P(), Bh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", P(), Ph(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", P();
          var a = G.current;
          G.current = Xh;
          try {
            return Ih(e, t);
          } finally {
            G.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", P();
          var i = G.current;
          G.current = Xh;
          try {
            return Og(e, t, a);
          } finally {
            G.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", P(), Fh();
        },
        useState: function(e) {
          U = "useState", P();
          var t = G.current;
          G.current = Xh;
          try {
            return Ug(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", P(), $h();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", P(), L1(e);
        },
        useTransition: function() {
          return U = "useTransition", P(), z1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", P(), Ah(e, t);
        },
        useId: function() {
          return U = "useId", P(), Gh();
        },
        unstable_isNewReconciler: Y
      }, Fi = {
        readContext: function(e) {
          return Qg(), Jt(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ce(), Qe(), jg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ce(), Qe(), Jt(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ce(), Qe(), jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ce(), Qe(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ce(), Qe(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ce(), Qe(), Fg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ce(), Qe();
          var a = G.current;
          G.current = Fi;
          try {
            return Bg(e, t);
          } finally {
            G.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ce(), Qe();
          var i = G.current;
          G.current = Fi;
          try {
            return Mg(e, t, a);
          } finally {
            G.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ce(), Qe(), Ag(e);
        },
        useState: function(e) {
          U = "useState", Ce(), Qe();
          var t = G.current;
          G.current = Fi;
          try {
            return Hh(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ce(), Qe(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ce(), Qe(), Pg(e);
        },
        useTransition: function() {
          return U = "useTransition", Ce(), Qe(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ce(), Qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ce(), Qe(), Ng(e, t, a);
        },
        useId: function() {
          return U = "useId", Ce(), Qe(), $g();
        },
        unstable_isNewReconciler: Y
      }, Za = {
        readContext: function(e) {
          return Qg(), Jt(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ce(), P(), Qh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ce(), P(), Jt(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ce(), P(), Wd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ce(), P(), Yh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ce(), P(), Bh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ce(), P(), Ph(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ce(), P();
          var a = G.current;
          G.current = Za;
          try {
            return Ih(e, t);
          } finally {
            G.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ce(), P();
          var i = G.current;
          G.current = Za;
          try {
            return Lg(e, t, a);
          } finally {
            G.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ce(), P(), Fh();
        },
        useState: function(e) {
          U = "useState", Ce(), P();
          var t = G.current;
          G.current = Za;
          try {
            return zg(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ce(), P(), $h();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ce(), P(), M1(e);
        },
        useTransition: function() {
          return U = "useTransition", Ce(), P(), N1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ce(), P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ce(), P(), Ah(e, t);
        },
        useId: function() {
          return U = "useId", Ce(), P(), Gh();
        },
        unstable_isNewReconciler: Y
      }, Xh = {
        readContext: function(e) {
          return Qg(), Jt(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ce(), P(), Qh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ce(), P(), Jt(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ce(), P(), Wd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ce(), P(), Yh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ce(), P(), Bh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ce(), P(), Ph(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ce(), P();
          var a = G.current;
          G.current = Za;
          try {
            return Ih(e, t);
          } finally {
            G.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ce(), P();
          var i = G.current;
          G.current = Za;
          try {
            return Og(e, t, a);
          } finally {
            G.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ce(), P(), Fh();
        },
        useState: function(e) {
          U = "useState", Ce(), P();
          var t = G.current;
          G.current = Za;
          try {
            return Ug(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ce(), P(), $h();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ce(), P(), L1(e);
        },
        useTransition: function() {
          return U = "useTransition", Ce(), P(), z1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ce(), P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ce(), P(), Ah(e, t);
        },
        useId: function() {
          return U = "useId", Ce(), P(), Gh();
        },
        unstable_isNewReconciler: Y
      };
    }
    var Ou = Ve.unstable_now, $1 = 0, qh = -1, Xd = -1, Kh = -1, Ig = !1, Zh = !1;
    function Q1() {
      return Ig;
    }
    function Ox() {
      Zh = !0;
    }
    function Nx() {
      Ig = !1, Zh = !1;
    }
    function zx() {
      Ig = Zh, Zh = !1;
    }
    function I1() {
      return $1;
    }
    function G1() {
      $1 = Ou();
    }
    function Gg(e) {
      Xd = Ou(), e.actualStartTime < 0 && (e.actualStartTime = Ou());
    }
    function W1(e) {
      Xd = -1;
    }
    function Jh(e, t) {
      if (Xd >= 0) {
        var a = Ou() - Xd;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Xd = -1;
      }
    }
    function Vi(e) {
      if (qh >= 0) {
        var t = Ou() - qh;
        qh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
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
    function Wg(e) {
      if (Kh >= 0) {
        var t = Ou() - Kh;
        Kh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
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
    function ji() {
      qh = Ou();
    }
    function Xg() {
      Kh = Ou();
    }
    function qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Io(e, t) {
      return {
        value: e,
        source: t,
        stack: rf(t),
        digest: null
      };
    }
    function Kg(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Ux(e, t) {
      return !0;
    }
    function Zg(e, t) {
      try {
        var a = Ux(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === de)
            return;
          console.error(i);
        }
        var p = u ? Te(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === ie)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Te(e) || "Anonymous";
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
    var Ax = typeof WeakMap == "function" ? WeakMap : Map;
    function X1(e, t, a) {
      var i = _l(at, a);
      i.tag = Zy, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        bD(u), Zg(e, t);
      }, i;
    }
    function Jg(e, t, a) {
      var i = _l(at, a);
      i.tag = Zy;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          lE(e), Zg(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        lE(e), Zg(e, t), typeof u != "function" && DD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Kn(e.lanes, ve) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Te(e) || "Unknown"));
      }), i;
    }
    function q1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Ax(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = _D.bind(null, e, t, a);
        nn && fp(e, a), t.then(s, s);
      }
    }
    function Hx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Fx(e, t) {
      var a = e.tag;
      if ((e.mode & De) === fe && (a === Re || a === Ne || a === ke)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function K1(e) {
      var t = e;
      do {
        if (t.tag === ze && Tx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Z1(e, t, a, i, u) {
      if ((e.mode & De) === fe) {
        if (e === t)
          e.flags |= Wt;
        else {
          if (e.flags |= ge, a.flags |= vo, a.flags &= ~(xs | ur), a.tag === de) {
            var s = a.alternate;
            if (s === null)
              a.tag = rr;
            else {
              var f = _l(at, ve);
              f.tag = Rh, bu(a, f, ve);
            }
          }
          a.lanes = we(a.lanes, ve);
        }
        return e;
      }
      return e.flags |= Wt, e.lanes = u, e;
    }
    function Vx(e, t, a, i, u) {
      if (a.flags |= ur, nn && fp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Fx(a), _n() && a.mode & De && P0();
        var f = K1(t);
        if (f !== null) {
          f.flags &= ~xt, Z1(f, t, a, e, u), f.mode & De && q1(e, s, u), Hx(f, e, s);
          return;
        } else {
          if (!lu(u)) {
            q1(e, s, u), OS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (_n() && a.mode & De) {
        P0();
        var v = K1(t);
        if (v !== null) {
          (v.flags & Wt) === oe && (v.flags |= xt), Z1(v, t, a, e, u), Qy(Io(i, a));
          return;
        }
      }
      i = Io(i, a), gD(i);
      var m = t;
      do {
        switch (m.tag) {
          case ie: {
            var y = i;
            m.flags |= Wt;
            var R = Bt(u);
            m.lanes = we(m.lanes, R);
            var E = X1(m, y, R);
            tg(m, E);
            return;
          }
          case de:
            var b = i, _ = m.type, L = m.stateNode;
            if ((m.flags & ge) === oe && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && !KC(L))) {
              m.flags |= Wt;
              var W = Bt(u);
              m.lanes = we(m.lanes, W);
              var se = Jg(m, b, W);
              tg(m, se);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function jx() {
      return null;
    }
    var qd = N.ReactCurrentOwner, Ja = !1, eS, Kd, tS, nS, rS, Go, aS, em;
    eS = {}, Kd = {}, tS = {}, nS = {}, rS = {}, Go = !1, aS = {}, em = {};
    function pr(e, t, a, i) {
      e === null ? t.child = m1(t, null, a, i) : t.child = Oc(t, e.child, a, i);
    }
    function Bx(e, t, a, i) {
      t.child = Oc(t, e.child, null, i), t.child = Oc(t, null, a, i);
    }
    function J1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          nt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Lc(t, u), xi(t);
      {
        if (qd.current = t, ea(!0), v = Fc(e, t, f, i, p, u), m = Vc(), t.mode & yt) {
          jt(!0);
          try {
            v = Fc(e, t, f, i, p, u), m = Vc();
          } finally {
            jt(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (E1(e, t, u), Ml(e, t, u)) : (_n() && m && Vy(t), t.flags |= yi, pr(e, t, v, u), t.child);
    }
    function eC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ID(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Gc(s), t.tag = ke, t.type = f, uS(t, s), tC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ga(
            p,
            i,
            // Resolved props
            "prop",
            nt(s)
          );
        }
        var v = YS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && Ga(
          y,
          i,
          // Resolved props
          "prop",
          nt(m)
        );
      }
      var R = e.child, E = pS(e, u);
      if (!E) {
        var b = R.memoizedProps, _ = a.compare;
        if (_ = _ !== null ? _ : ue, _(b, i) && e.ref === t.ref)
          return Ml(e, t, u);
      }
      t.flags |= yi;
      var L = Zo(R, i);
      return L.ref = t.ref, L.return = t, t.child = L, L;
    }
    function tC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Dn) {
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
            nt(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (ue(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ja = !1, t.pendingProps = i = y, pS(e, u))
            (e.flags & vo) !== oe && (Ja = !0);
          else
            return t.lanes = e.lanes, Ml(e, t, u);
      }
      return iS(e, t, a, i, u);
    }
    function nC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || q)
        if ((t.mode & De) === fe) {
          var f = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, pm(t, a);
        } else if (Kn(a, qn)) {
          var R = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          pm(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = we(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = qn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, pm(t, v), null;
        }
      else {
        var b;
        s !== null ? (b = we(s.baseLanes, a), t.memoizedState = null) : b = a, pm(t, b);
      }
      return pr(e, t, u, a), t.child;
    }
    function Px(e, t, a) {
      var i = t.pendingProps;
      return pr(e, t, i, a), t.child;
    }
    function Yx(e, t, a) {
      var i = t.pendingProps.children;
      return pr(e, t, i, a), t.child;
    }
    function $x(e, t, a) {
      {
        t.flags |= xe;
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= $n, t.flags |= Nf);
    }
    function iS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ga(
          s,
          i,
          // Resolved props
          "prop",
          nt(a)
        );
      }
      var f;
      {
        var p = wc(t, a, !0);
        f = Dc(t, p);
      }
      var v, m;
      Lc(t, u), xi(t);
      {
        if (qd.current = t, ea(!0), v = Fc(e, t, a, i, f, u), m = Vc(), t.mode & yt) {
          jt(!0);
          try {
            v = Fc(e, t, a, i, f, u), m = Vc();
          } finally {
            jt(!1);
          }
        }
        ea(!1);
      }
      return al(), e !== null && !Ja ? (E1(e, t, u), Ml(e, t, u)) : (_n() && m && Vy(t), t.flags |= yi, pr(e, t, v, u), t.child);
    }
    function aC(e, t, a, i, u) {
      {
        switch (uk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= ge, t.flags |= Wt;
            var m = new Error("Simulated error coming from DevTools"), y = Bt(u);
            t.lanes = we(t.lanes, y);
            var R = Jg(t, Io(m, t), y);
            tg(t, R);
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
            nt(a)
          );
        }
      }
      var b;
      Ui(a) ? (b = !0, dh(t)) : b = !1, Lc(t, u);
      var _ = t.stateNode, L;
      _ === null ? (nm(e, t), f1(t, a, i), pg(t, a, i, u), L = !0) : e === null ? L = mx(t, a, i, u) : L = yx(e, t, a, i, u);
      var W = lS(e, t, a, L, b, u);
      {
        var se = t.stateNode;
        L && se.props !== i && (Go || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Te(t) || "a component"), Go = !0);
      }
      return W;
    }
    function lS(e, t, a, i, u, s) {
      rC(e, t);
      var f = (t.flags & ge) !== oe;
      if (!i && !f)
        return u && F0(t, a, !1), Ml(e, t, s);
      var p = t.stateNode;
      qd.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, W1();
      else {
        xi(t);
        {
          if (ea(!0), v = p.render(), t.mode & yt) {
            jt(!0);
            try {
              p.render();
            } finally {
              jt(!1);
            }
          }
          ea(!1);
        }
        al();
      }
      return t.flags |= yi, e !== null && f ? Bx(e, t, v, s) : pr(e, t, v, s), t.memoizedState = p.state, u && F0(t, a, !0), t.child;
    }
    function iC(e) {
      var t = e.stateNode;
      t.pendingContext ? A0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && A0(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function Qx(e, t, a) {
      if (iC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      r1(e, t), kh(t, i, null, a);
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
        if (m.baseState = v, t.memoizedState = v, t.flags & xt) {
          var y = Io(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return lC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Io(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return lC(e, t, p, a, R);
        } else {
          XR(t);
          var E = m1(t, null, p, a);
          t.child = E;
          for (var b = E; b; )
            b.flags = b.flags & ~ot | Mr, b = b.sibling;
        }
      } else {
        if (_c(), p === s)
          return Ml(e, t, a);
        pr(e, t, p, a);
      }
      return t.child;
    }
    function lC(e, t, a, i, u) {
      return _c(), Qy(u), t.flags |= xt, pr(e, t, a, i), t.child;
    }
    function Ix(e, t, a) {
      g1(t), e === null && $y(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = wy(i, u);
      return p ? f = null : s !== null && wy(i, s) && (t.flags |= $e), rC(e, t), pr(e, t, f, a), t.child;
    }
    function Gx(e, t) {
      return e === null && $y(t), null;
    }
    function Wx(e, t, a, i) {
      nm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = GD(v), y = qa(v, u), R;
      switch (m) {
        case Re:
          return uS(t, v), t.type = v = Gc(v), R = iS(null, t, v, y, i), R;
        case de:
          return t.type = v = HS(v), R = aC(null, t, v, y, i), R;
        case Ne:
          return t.type = v = FS(v), R = J1(null, t, v, y, i), R;
        case ht: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Ga(
              E,
              y,
              // Resolved for outer only
              "prop",
              nt(v)
            );
          }
          return R = eC(
            null,
            t,
            v,
            qa(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var b = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Dn && (b = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + b));
    }
    function Xx(e, t, a, i, u) {
      nm(e, t), t.tag = de;
      var s;
      return Ui(a) ? (s = !0, dh(t)) : s = !1, Lc(t, u), f1(t, a, i), pg(t, a, i, u), lS(null, t, a, !0, s, u);
    }
    function qx(e, t, a, i) {
      nm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wc(t, a, !1);
        s = Dc(t, f);
      }
      Lc(t, i);
      var p, v;
      xi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = nt(a) || "Unknown";
          eS[m] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), eS[m] = !0);
        }
        t.mode & yt && Xa.recordLegacyContextWarning(t, null), ea(!0), qd.current = t, p = Fc(null, t, a, u, s, i), v = Vc(), ea(!1);
      }
      if (al(), t.flags |= yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = nt(a) || "Unknown";
        Kd[y] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), Kd[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = nt(a) || "Unknown";
          Kd[R] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Kd[R] = !0);
        }
        t.tag = de, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Ui(a) ? (E = !0, dh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, eg(t), c1(t, p), pg(t, a, u, i), lS(null, t, a, !0, E, i);
      } else {
        if (t.tag = Re, t.mode & yt) {
          jt(!0);
          try {
            p = Fc(null, t, a, u, s, i), v = Vc();
          } finally {
            jt(!1);
          }
        }
        return _n() && v && Vy(t), pr(null, t, p, i), uS(t, a), t.child;
      }
    }
    function uS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), rS[u] || (rS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = nt(t) || "Unknown";
          nS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), nS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = nt(t) || "Unknown";
          tS[p] || (S("%s: Function components do not support contextType.", p), tS[p] = !0);
        }
      }
    }
    var oS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ae
    };
    function sS(e) {
      return {
        baseLanes: e,
        cachePool: jx(),
        transitions: null
      };
    }
    function Kx(e, t) {
      var a = null;
      return {
        baseLanes: we(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Zx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Tg(e, Pd);
    }
    function Jx(e, t) {
      return uu(e.childLanes, t);
    }
    function uC(e, t, a) {
      var i = t.pendingProps;
      ok(t) && (t.flags |= ge);
      var u = Ka.current, s = !1, f = (t.flags & ge) !== oe;
      if (f || Zx(u, e) ? (s = !0, t.flags &= ~ge) : (e === null || e.memoizedState !== null) && (u = Ex(u, C1)), u = zc(u), Mu(t, u), e === null) {
        $y(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return aw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = ew(t, m, y, a), E = t.child;
          return E.memoizedState = sS(a), t.memoizedState = oS, R;
        } else
          return cS(t, m);
      } else {
        var b = e.memoizedState;
        if (b !== null) {
          var _ = b.dehydrated;
          if (_ !== null)
            return iw(e, t, f, i, _, b, a);
        }
        if (s) {
          var L = i.fallback, W = i.children, se = nw(e, t, W, L, a), re = t.child, Fe = e.child.memoizedState;
          return re.memoizedState = Fe === null ? sS(a) : Kx(Fe, a), re.childLanes = Jx(e, a), t.memoizedState = oS, se;
        } else {
          var Oe = i.children, w = tw(e, t, Oe, a);
          return t.memoizedState = null, w;
        }
      }
    }
    function cS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = fS(u, i);
      return s.return = e, e.child = s, s;
    }
    function ew(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & De) === fe && s !== null ? (p = s, p.childLanes = z, p.pendingProps = f, e.mode & pe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Fu(a, u, i, null)) : (p = fS(f, u), v = Fu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function fS(e, t, a) {
      return oE(e, t, z, null);
    }
    function oC(e, t) {
      return Zo(e, t);
    }
    function tw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = oC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & De) === fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ye) : p.push(s);
      }
      return t.child = f, f;
    }
    function nw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & De) === fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = z, m.pendingProps = v, t.mode & pe && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = oC(f, v), m.subtreeFlags = f.subtreeFlags & tn;
      var R;
      return p !== null ? R = Zo(p, i) : (R = Fu(i, s, u, null), R.flags |= ot), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function tm(e, t, a, i) {
      i !== null && Qy(i), Oc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = cS(t, s);
      return f.flags |= ot, t.memoizedState = null, f;
    }
    function rw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = fS(f, s), v = Fu(i, s, u, null);
      return v.flags |= ot, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & De) !== fe && Oc(t, e.child, null, u), v;
    }
    function aw(e, t, a) {
      return (e.mode & De) === fe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ve) : _y(t) ? e.lanes = ul : e.lanes = qn, null;
    }
    function iw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & xt) {
          t.flags &= ~xt;
          var w = Kg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return tm(e, t, f, w);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ge, null;
          var O = i.children, D = i.fallback, V = rw(e, t, O, D, f), X = t.child;
          return X.memoizedState = sS(f), t.memoizedState = oS, V;
        }
      else {
        if (GR(), (t.mode & De) === fe)
          return tm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (_y(u)) {
          var p, v, m;
          {
            var y = cR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = Kg(R, p, m);
          return tm(e, t, f, E);
        }
        var b = Kn(f, e.childLanes);
        if (Ja || b) {
          var _ = dm();
          if (_ !== null) {
            var L = qm(_, f);
            if (L !== Ae && L !== s.retryLane) {
              s.retryLane = L;
              var W = at;
              jr(e, L), dn(_, e, L, W);
            }
          }
          OS();
          var se = Kg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return tm(e, t, f, se);
        } else if (M0(u)) {
          t.flags |= ge, t.child = e.child;
          var re = MD.bind(null, e);
          return fR(u, re), null;
        } else {
          qR(t, u, s.treeContext);
          var Fe = i.children, Oe = cS(t, Fe);
          return Oe.flags |= Mr, Oe;
        }
      }
    }
    function sC(e, t, a) {
      e.lanes = we(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = we(i.lanes, t)), qy(e.return, t, a);
    }
    function lw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ze) {
          var u = i.memoizedState;
          u !== null && sC(i, a, e);
        } else if (i.tag === it)
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
    function uw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && zh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ow(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !aS[e])
        if (aS[e] = !0, typeof e == "string")
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
    function sw(e, t) {
      e !== void 0 && !em[e] && (e !== "collapsed" && e !== "hidden" ? (em[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (em[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function cC(e, t) {
      {
        var a = It(e), i = !a && typeof Ma(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function cw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (It(e)) {
          for (var a = 0; a < e.length; a++)
            if (!cC(e[a], a))
              return;
        } else {
          var i = Ma(e);
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
    function dS(e, t, a, i, u) {
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
      ow(u), sw(s, u), cw(f, u), pr(e, t, f, a);
      var p = Ka.current, v = Tg(p, Pd);
      if (v)
        p = Rg(p, Pd), t.flags |= ge;
      else {
        var m = e !== null && (e.flags & ge) !== oe;
        m && lw(t, t.child, a), p = zc(p);
      }
      if (Mu(t, p), (t.mode & De) === fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = uw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), dS(
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
              var _ = b.alternate;
              if (_ !== null && zh(_) === null) {
                t.child = b;
                break;
              }
              var L = b.sibling;
              b.sibling = E, E = b, b = L;
            }
            dS(
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
            dS(
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
    function fw(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Oc(t, null, i, a) : pr(e, t, i, a), t.child;
    }
    var dC = !1;
    function dw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || dC || (dC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ga(v, s, "prop", "Context.Provider");
      }
      if (J0(t, u, p), f !== null) {
        var m = f.value;
        if (J(m, p)) {
          if (f.children === s.children && !ch())
            return Ml(e, t, a);
        } else
          lx(t, u, a);
      }
      var y = s.children;
      return pr(e, t, y, a), t.child;
    }
    var pC = !1;
    function pw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (pC || (pC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Lc(t, a);
      var f = Jt(i);
      xi(t);
      var p;
      return qd.current = t, ea(!0), p = s(f), ea(!1), al(), t.flags |= yi, pr(e, t, p, a), t.child;
    }
    function Zd() {
      Ja = !0;
    }
    function nm(e, t) {
      (t.mode & De) === fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ot);
    }
    function Ml(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), W1(), cp(t.lanes), Kn(a, t.childLanes) ? (gx(e, t), t.child) : null;
    }
    function vw(e, t, a) {
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
    function pS(e, t) {
      var a = e.lanes;
      return !!Kn(a, t);
    }
    function hw(e, t, a) {
      switch (t.tag) {
        case ie:
          iC(t), t.stateNode, _c();
          break;
        case le:
          g1(t);
          break;
        case de: {
          var i = t.type;
          Ui(i) && dh(t);
          break;
        }
        case he:
          Sg(t, t.stateNode.containerInfo);
          break;
        case pn: {
          var u = t.memoizedProps.value, s = t.type._context;
          J0(t, s, u);
          break;
        }
        case ut:
          {
            var f = Kn(a, t.childLanes);
            f && (t.flags |= xe);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ze: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Mu(t, zc(Ka.current)), t.flags |= ge, null;
            var m = t.child, y = m.childLanes;
            if (Kn(a, y))
              return uC(e, t, a);
            Mu(t, zc(Ka.current));
            var R = Ml(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Mu(t, zc(Ka.current));
          break;
        }
        case it: {
          var E = (e.flags & ge) !== oe, b = Kn(a, t.childLanes);
          if (E) {
            if (b)
              return fC(e, t, a);
            t.flags |= ge;
          }
          var _ = t.memoizedState;
          if (_ !== null && (_.rendering = null, _.tail = null, _.lastEffect = null), Mu(t, Ka.current), b)
            break;
          return null;
        }
        case Ue:
        case We:
          return t.lanes = z, nC(e, t, a);
      }
      return Ml(e, t, a);
    }
    function vC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return vw(e, t, YS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || ch() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ja = !0;
        else {
          var s = pS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ge) === oe)
            return Ja = !1, hw(e, t, a);
          (e.flags & vo) !== oe ? Ja = !0 : Ja = !1;
        }
      } else if (Ja = !1, _n() && BR(t)) {
        var f = t.index, p = PR();
        B0(t, p, f);
      }
      switch (t.lanes = z, t.tag) {
        case en:
          return qx(e, t, t.type, a);
        case xn: {
          var v = t.elementType;
          return Wx(e, t, v, a);
        }
        case Re: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : qa(m, y);
          return iS(e, t, m, R, a);
        }
        case de: {
          var E = t.type, b = t.pendingProps, _ = t.elementType === E ? b : qa(E, b);
          return aC(e, t, E, _, a);
        }
        case ie:
          return Qx(e, t, a);
        case le:
          return Ix(e, t, a);
        case be:
          return Gx(e, t);
        case ze:
          return uC(e, t, a);
        case he:
          return fw(e, t, a);
        case Ne: {
          var L = t.type, W = t.pendingProps, se = t.elementType === L ? W : qa(L, W);
          return J1(e, t, L, se, a);
        }
        case et:
          return Px(e, t, a);
        case lt:
          return Yx(e, t, a);
        case ut:
          return $x(e, t, a);
        case pn:
          return dw(e, t, a);
        case Ir:
          return pw(e, t, a);
        case ht: {
          var re = t.type, Fe = t.pendingProps, Oe = qa(re, Fe);
          if (t.type !== t.elementType) {
            var w = re.propTypes;
            w && Ga(
              w,
              Oe,
              // Resolved for outer only
              "prop",
              nt(re)
            );
          }
          return Oe = qa(re.type, Oe), eC(e, t, re, Oe, a);
        }
        case ke:
          return tC(e, t, t.type, t.pendingProps, a);
        case rr: {
          var O = t.type, D = t.pendingProps, V = t.elementType === O ? D : qa(O, D);
          return Xx(e, t, O, V, a);
        }
        case it:
          return fC(e, t, a);
        case Vn:
          break;
        case Ue:
          return nC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jc(e) {
      e.flags |= xe;
    }
    function hC(e) {
      e.flags |= $n, e.flags |= Nf;
    }
    var mC, vS, yC, gC;
    mC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === be)
          FT(e, u.stateNode);
        else if (u.tag !== he) {
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
    }, vS = function(e, t) {
    }, yC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Cg(), v = jT(f, a, s, i, u, p);
        t.updateQueue = v, v && jc(t);
      }
    }, gC = function(e, t, a, i) {
      a !== i && jc(t);
    };
    function Jd(e, t) {
      if (!_n())
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
    function Ln(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = z, i = oe;
      if (t) {
        if ((e.mode & pe) !== fe) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = we(a, we(m.lanes, m.childLanes)), i |= m.subtreeFlags & tn, i |= m.flags & tn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = we(a, we(y.lanes, y.childLanes)), i |= y.subtreeFlags & tn, i |= y.flags & tn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & pe) !== fe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = we(a, we(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = we(a, we(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function mw(e, t, a) {
      if (tx() && (t.mode & De) !== fe && (t.flags & ge) === oe)
        return W0(t), _c(), t.flags |= xt | ur | Wt, !1;
      var i = yh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (JR(t), Ln(t), (t.mode & pe) !== fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_c(), (t.flags & ge) === oe && (t.memoizedState = null), t.flags |= xe, Ln(t), (t.mode & pe) !== fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return X0(), !0;
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      switch (jy(t), t.tag) {
        case en:
        case xn:
        case ke:
        case Re:
        case Ne:
        case et:
        case lt:
        case ut:
        case Ir:
        case ht:
          return Ln(t), null;
        case de: {
          var u = t.type;
          return Ui(u) && fh(t), Ln(t), null;
        }
        case ie: {
          var s = t.stateNode;
          if (Nc(t), Ay(t), wg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = yh(t);
            if (f)
              jc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & xt) !== oe) && (t.flags |= _r, X0());
            }
          }
          return vS(e, t), Ln(t), null;
        }
        case le: {
          Eg(t);
          var v = y1(), m = t.type;
          if (e !== null && t.stateNode != null)
            yC(e, t, m, i, v), e.ref !== t.ref && hC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ln(t), null;
            }
            var y = Cg(), R = yh(t);
            if (R)
              KR(t, v, y) && jc(t);
            else {
              var E = HT(m, i, v, y, t);
              mC(E, t, !1, !1), t.stateNode = E, VT(E, m, i, v) && jc(t);
            }
            t.ref !== null && hC(t);
          }
          return Ln(t), null;
        }
        case be: {
          var b = i;
          if (e && t.stateNode != null) {
            var _ = e.memoizedProps;
            gC(e, t, _, b);
          } else {
            if (typeof b != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var L = y1(), W = Cg(), se = yh(t);
            se ? ZR(t) && jc(t) : t.stateNode = BT(b, L, W, t);
          }
          return Ln(t), null;
        }
        case ze: {
          Uc(t);
          var re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Fe = mw(e, t, re);
            if (!Fe)
              return t.flags & Wt ? t : null;
          }
          if ((t.flags & ge) !== oe)
            return t.lanes = a, (t.mode & pe) !== fe && qg(t), t;
          var Oe = re !== null, w = e !== null && e.memoizedState !== null;
          if (Oe !== w && Oe) {
            var O = t.child;
            if (O.flags |= gi, (t.mode & De) !== fe) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ie);
              D || Tg(Ka.current, C1) ? yD() : OS();
            }
          }
          var V = t.updateQueue;
          if (V !== null && (t.flags |= xe), Ln(t), (t.mode & pe) !== fe && Oe) {
            var X = t.child;
            X !== null && (t.treeBaseDuration -= X.treeBaseDuration);
          }
          return null;
        }
        case he:
          return Nc(t), vS(e, t), e === null && zR(t.stateNode.containerInfo), Ln(t), null;
        case pn:
          var Q = t.type._context;
          return Xy(Q, t), Ln(t), null;
        case rr: {
          var ye = t.type;
          return Ui(ye) && fh(t), Ln(t), null;
        }
        case it: {
          Uc(t);
          var Ee = t.memoizedState;
          if (Ee === null)
            return Ln(t), null;
          var Ze = (t.flags & ge) !== oe, Be = Ee.rendering;
          if (Be === null)
            if (Ze)
              Jd(Ee, !1);
            else {
              var Qt = SD() && (e === null || (e.flags & ge) === oe);
              if (!Qt)
                for (var Pe = t.child; Pe !== null; ) {
                  var Ht = zh(Pe);
                  if (Ht !== null) {
                    Ze = !0, t.flags |= ge, Jd(Ee, !1);
                    var tr = Ht.updateQueue;
                    return tr !== null && (t.updateQueue = tr, t.flags |= xe), t.subtreeFlags = oe, Sx(t, a), Mu(t, Rg(Ka.current, Pd)), t.child;
                  }
                  Pe = Pe.sibling;
                }
              Ee.tail !== null && mt() > jC() && (t.flags |= ge, Ze = !0, Jd(Ee, !1), t.lanes = If);
            }
          else {
            if (!Ze) {
              var An = zh(Be);
              if (An !== null) {
                t.flags |= ge, Ze = !0;
                var oa = An.updateQueue;
                if (oa !== null && (t.updateQueue = oa, t.flags |= xe), Jd(Ee, !0), Ee.tail === null && Ee.tailMode === "hidden" && !Be.alternate && !_n())
                  return Ln(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mt() * 2 - Ee.renderingStartTime > jC() && a !== qn && (t.flags |= ge, Ze = !0, Jd(Ee, !1), t.lanes = If);
            }
            if (Ee.isBackwards)
              Be.sibling = t.child, t.child = Be;
            else {
              var mr = Ee.last;
              mr !== null ? mr.sibling = Be : t.child = Be, Ee.last = Be;
            }
          }
          if (Ee.tail !== null) {
            var yr = Ee.tail;
            Ee.rendering = yr, Ee.tail = yr.sibling, Ee.renderingStartTime = mt(), yr.sibling = null;
            var nr = Ka.current;
            return Ze ? nr = Rg(nr, Pd) : nr = zc(nr), Mu(t, nr), yr;
          }
          return Ln(t), null;
        }
        case Vn:
          break;
        case Ue:
        case We: {
          LS(t);
          var Ul = t.memoizedState, Wc = Ul !== null;
          if (e !== null) {
            var hp = e.memoizedState, Yi = hp !== null;
            Yi !== Wc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !q && (t.flags |= gi);
          }
          return !Wc || (t.mode & De) === fe ? Ln(t) : Kn(Pi, qn) && (Ln(t), t.subtreeFlags & (ot | xe) && (t.flags |= gi)), null;
        }
        case Sr:
          return null;
        case Ct:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function yw(e, t, a) {
      switch (jy(t), t.tag) {
        case de: {
          var i = t.type;
          Ui(i) && fh(t);
          var u = t.flags;
          return u & Wt ? (t.flags = u & ~Wt | ge, (t.mode & pe) !== fe && qg(t), t) : null;
        }
        case ie: {
          t.stateNode, Nc(t), Ay(t), wg();
          var s = t.flags;
          return (s & Wt) !== oe && (s & ge) === oe ? (t.flags = s & ~Wt | ge, t) : null;
        }
        case le:
          return Eg(t), null;
        case ze: {
          Uc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _c();
          }
          var p = t.flags;
          return p & Wt ? (t.flags = p & ~Wt | ge, (t.mode & pe) !== fe && qg(t), t) : null;
        }
        case it:
          return Uc(t), null;
        case he:
          return Nc(t), null;
        case pn:
          var v = t.type._context;
          return Xy(v, t), null;
        case Ue:
        case We:
          return LS(t), null;
        case Sr:
          return null;
        default:
          return null;
      }
    }
    function CC(e, t, a) {
      switch (jy(t), t.tag) {
        case de: {
          var i = t.type.childContextTypes;
          i != null && fh(t);
          break;
        }
        case ie: {
          t.stateNode, Nc(t), Ay(t), wg();
          break;
        }
        case le: {
          Eg(t);
          break;
        }
        case he:
          Nc(t);
          break;
        case ze:
          Uc(t);
          break;
        case it:
          Uc(t);
          break;
        case pn:
          var u = t.type._context;
          Xy(u, t);
          break;
        case Ue:
        case We:
          LS(t);
          break;
      }
    }
    var EC = null;
    EC = /* @__PURE__ */ new Set();
    var rm = !1, On = !1, gw = typeof WeakSet == "function" ? WeakSet : Set, ee = null, Bc = null, Pc = null;
    function Sw(e) {
      nl(null, function() {
        throw e;
      }), Lf();
    }
    var Cw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & pe)
        try {
          ji(), t.componentWillUnmount();
        } finally {
          Vi(e);
        }
      else
        t.componentWillUnmount();
    };
    function TC(e, t) {
      try {
        Nu(ln, e);
      } catch (a) {
        dt(e, t, a);
      }
    }
    function hS(e, t, a) {
      try {
        Cw(e, a);
      } catch (i) {
        dt(e, t, i);
      }
    }
    function Ew(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dt(e, t, i);
      }
    }
    function RC(e, t) {
      try {
        wC(e);
      } catch (a) {
        dt(e, t, a);
      }
    }
    function Yc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (wn && ii && e.mode & pe)
              try {
                ji(), i = a(null);
              } finally {
                Vi(e);
              }
            else
              i = a(null);
          } catch (u) {
            dt(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Te(e));
        } else
          a.current = null;
    }
    function am(e, t, a) {
      try {
        a();
      } catch (i) {
        dt(e, t, i);
      }
    }
    var xC = !1;
    function Tw(e, t) {
      UT(e.containerInfo), ee = t, Rw();
      var a = xC;
      return xC = !1, a;
    }
    function Rw() {
      for (; ee !== null; ) {
        var e = ee, t = e.child;
        (e.subtreeFlags & Jl) !== oe && t !== null ? (t.return = e, ee = t) : xw();
      }
    }
    function xw() {
      for (; ee !== null; ) {
        var e = ee;
        qe(e);
        try {
          ww(e);
        } catch (a) {
          dt(e, e.return, a);
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
    function ww(e) {
      var t = e.alternate, a = e.flags;
      if ((a & _r) !== oe) {
        switch (qe(e), e.tag) {
          case Re:
          case Ne:
          case ke:
            break;
          case de: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Go && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : qa(e.type, i), u);
              {
                var p = EC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Te(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ie: {
            {
              var v = e.stateNode;
              lR(v.containerInfo);
            }
            break;
          }
          case le:
          case be:
          case he:
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
            f.destroy = void 0, p !== void 0 && ((e & Mn) !== Br ? Os(t) : (e & ln) !== Br && Ns(t), (e & Ai) !== Br && dp(!0), am(t, a, p), (e & Ai) !== Br && dp(!1), (e & Mn) !== Br ? mv() : (e & ln) !== Br && eu());
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
            (e & Mn) !== Br ? hv(t) : (e & ln) !== Br && yv(t);
            var f = s.create;
            (e & Ai) !== Br && dp(!0), s.destroy = f(), (e & Ai) !== Br && dp(!1), (e & Mn) !== Br ? Yf() : (e & ln) !== Br && gv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ln) !== oe ? v = "useLayoutEffect" : (s.tag & Ai) !== oe ? v = "useInsertionEffect" : v = "useEffect";
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
    function Dw(e, t) {
      if ((t.flags & xe) !== oe)
        switch (t.tag) {
          case ut: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = I1(), p = t.alternate === null ? "mount" : "update";
            Q1() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case ie:
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
    function kw(e, t, a, i) {
      if ((a.flags & yn) !== oe)
        switch (a.tag) {
          case Re:
          case Ne:
          case ke: {
            if (!On)
              if (a.mode & pe)
                try {
                  ji(), Nu(ln | an, a);
                } finally {
                  Vi(a);
                }
              else
                Nu(ln | an, a);
            break;
          }
          case de: {
            var u = a.stateNode;
            if (a.flags & xe && !On)
              if (t === null)
                if (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(a) || "instance")), a.mode & pe)
                  try {
                    ji(), u.componentDidMount();
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : qa(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(a) || "instance")), a.mode & pe)
                  try {
                    ji(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Go && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(a) || "instance")), i1(a, p, u));
            break;
          }
          case ie: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    m = a.child.stateNode;
                    break;
                  case de:
                    m = a.child.stateNode;
                    break;
                }
              i1(a, v, m);
            }
            break;
          }
          case le: {
            var y = a.stateNode;
            if (t === null && a.flags & xe) {
              var R = a.type, E = a.memoizedProps;
              IT(y, R, E);
            }
            break;
          }
          case be:
            break;
          case he:
            break;
          case ut: {
            {
              var b = a.memoizedProps, _ = b.onCommit, L = b.onRender, W = a.stateNode.effectDuration, se = I1(), re = t === null ? "mount" : "update";
              Q1() && (re = "nested-update"), typeof L == "function" && L(a.memoizedProps.id, re, a.actualDuration, a.treeBaseDuration, a.actualStartTime, se);
              {
                typeof _ == "function" && _(a.memoizedProps.id, re, W, se), xD(a);
                var Fe = a.return;
                e:
                  for (; Fe !== null; ) {
                    switch (Fe.tag) {
                      case ie:
                        var Oe = Fe.stateNode;
                        Oe.effectDuration += W;
                        break e;
                      case ut:
                        var w = Fe.stateNode;
                        w.effectDuration += W;
                        break e;
                    }
                    Fe = Fe.return;
                  }
              }
            }
            break;
          }
          case ze: {
            Uw(e, a);
            break;
          }
          case it:
          case rr:
          case Vn:
          case Ue:
          case We:
          case Ct:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      On || a.flags & $n && wC(a);
    }
    function bw(e) {
      switch (e.tag) {
        case Re:
        case Ne:
        case ke: {
          if (e.mode & pe)
            try {
              ji(), TC(e, e.return);
            } finally {
              Vi(e);
            }
          else
            TC(e, e.return);
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ew(e, e.return, t), RC(e, e.return);
          break;
        }
        case le: {
          RC(e, e.return);
          break;
        }
      }
    }
    function _w(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? nR(u) : aR(i.stateNode, i.memoizedProps);
            } catch (f) {
              dt(e, e.return, f);
            }
          }
        } else if (i.tag === be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? rR(s) : iR(s, i.memoizedProps);
            } catch (f) {
              dt(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === We) && i.memoizedState !== null && i !== e)) {
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
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & pe)
            try {
              ji(), u = t(i);
            } finally {
              Vi(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Te(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Te(e)), t.current = i;
      }
    }
    function Mw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function DC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, DC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && HR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Lw(e) {
      for (var t = e.return; t !== null; ) {
        if (kC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kC(e) {
      return e.tag === le || e.tag === ie || e.tag === he;
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== be && t.tag !== Lt; ) {
            if (t.flags & ot || t.child === null || t.tag === he)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ot))
            return t.stateNode;
        }
    }
    function Ow(e) {
      var t = Lw(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & $e && (_0(a), t.flags &= ~$e);
          var i = bC(e);
          yS(e, i, a);
          break;
        }
        case ie:
        case he: {
          var u = t.stateNode.containerInfo, s = bC(e);
          mS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function mS(e, t, a) {
      var i = e.tag, u = i === le || i === be;
      if (u) {
        var s = e.stateNode;
        t ? ZT(a, s, t) : qT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          mS(f, t, a);
          for (var p = f.sibling; p !== null; )
            mS(p, t, a), p = p.sibling;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.tag, u = i === le || i === be;
      if (u) {
        var s = e.stateNode;
        t ? KT(a, s, t) : XT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          yS(f, t, a);
          for (var p = f.sibling; p !== null; )
            yS(p, t, a), p = p.sibling;
        }
      }
    }
    var Nn = null, ti = !1;
    function Nw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case le: {
                Nn = i.stateNode, ti = !1;
                break e;
              }
              case ie: {
                Nn = i.stateNode.containerInfo, ti = !0;
                break e;
              }
              case he: {
                Nn = i.stateNode.containerInfo, ti = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Nn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        _C(e, t, a), Nn = null, ti = !1;
      }
      Mw(a);
    }
    function zu(e, t, a) {
      for (var i = a.child; i !== null; )
        _C(e, t, i), i = i.sibling;
    }
    function _C(e, t, a) {
      switch (Bf(a), a.tag) {
        case le:
          On || Yc(a, t);
        case be: {
          {
            var i = Nn, u = ti;
            Nn = null, zu(e, t, a), Nn = i, ti = u, Nn !== null && (ti ? eR(Nn, a.stateNode) : JT(Nn, a.stateNode));
          }
          return;
        }
        case Lt: {
          Nn !== null && (ti ? tR(Nn, a.stateNode) : by(Nn, a.stateNode));
          return;
        }
        case he: {
          {
            var s = Nn, f = ti;
            Nn = a.stateNode.containerInfo, ti = !0, zu(e, t, a), Nn = s, ti = f;
          }
          return;
        }
        case Re:
        case Ne:
        case ht:
        case ke: {
          if (!On) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, b = R.tag;
                  E !== void 0 && ((b & Ai) !== Br ? am(a, t, E) : (b & ln) !== Br && (Ns(a), a.mode & pe ? (ji(), am(a, t, E), Vi(a)) : am(a, t, E), eu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          zu(e, t, a);
          return;
        }
        case de: {
          if (!On) {
            Yc(a, t);
            var _ = a.stateNode;
            typeof _.componentWillUnmount == "function" && hS(a, t, _);
          }
          zu(e, t, a);
          return;
        }
        case Vn: {
          zu(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & De
          ) {
            var L = On;
            On = L || a.memoizedState !== null, zu(e, t, a), On = L;
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
    function zw(e) {
      e.memoizedState;
    }
    function Uw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && CR(s);
          }
        }
      }
    }
    function MC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new gw()), t.forEach(function(i) {
          var u = LD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), nn)
              if (Bc !== null && Pc !== null)
                fp(Pc, Bc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Aw(e, t, a) {
      Bc = a, Pc = e, qe(t), LC(t, e), qe(t), Bc = null, Pc = null;
    }
    function ni(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Nw(e, t, s);
          } catch (v) {
            dt(s, t, v);
          }
        }
      var f = km();
      if (t.subtreeFlags & Gn)
        for (var p = t.child; p !== null; )
          qe(p), LC(p, e), p = p.sibling;
      qe(f);
    }
    function LC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Re:
        case Ne:
        case ht:
        case ke: {
          if (ni(t, e), Bi(e), u & xe) {
            try {
              ei(Ai | an, e, e.return), Nu(Ai | an, e);
            } catch (ye) {
              dt(e, e.return, ye);
            }
            if (e.mode & pe) {
              try {
                ji(), ei(ln | an, e, e.return);
              } catch (ye) {
                dt(e, e.return, ye);
              }
              Vi(e);
            } else
              try {
                ei(ln | an, e, e.return);
              } catch (ye) {
                dt(e, e.return, ye);
              }
          }
          return;
        }
        case de: {
          ni(t, e), Bi(e), u & $n && i !== null && Yc(i, i.return);
          return;
        }
        case le: {
          ni(t, e), Bi(e), u & $n && i !== null && Yc(i, i.return);
          {
            if (e.flags & $e) {
              var s = e.stateNode;
              try {
                _0(s);
              } catch (ye) {
                dt(e, e.return, ye);
              }
            }
            if (u & xe) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    GT(f, y, m, v, p, e);
                  } catch (ye) {
                    dt(e, e.return, ye);
                  }
              }
            }
          }
          return;
        }
        case be: {
          if (ni(t, e), Bi(e), u & xe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, b = i !== null ? i.memoizedProps : E;
            try {
              WT(R, b, E);
            } catch (ye) {
              dt(e, e.return, ye);
            }
          }
          return;
        }
        case ie: {
          if (ni(t, e), Bi(e), u & xe && i !== null) {
            var _ = i.memoizedState;
            if (_.isDehydrated)
              try {
                SR(t.containerInfo);
              } catch (ye) {
                dt(e, e.return, ye);
              }
          }
          return;
        }
        case he: {
          ni(t, e), Bi(e);
          return;
        }
        case ze: {
          ni(t, e), Bi(e);
          var L = e.child;
          if (L.flags & gi) {
            var W = L.stateNode, se = L.memoizedState, re = se !== null;
            if (W.isHidden = re, re) {
              var Fe = L.alternate !== null && L.alternate.memoizedState !== null;
              Fe || mD();
            }
          }
          if (u & xe) {
            try {
              zw(e);
            } catch (ye) {
              dt(e, e.return, ye);
            }
            MC(e);
          }
          return;
        }
        case Ue: {
          var Oe = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & De
          ) {
            var w = On;
            On = w || Oe, ni(t, e), On = w;
          } else
            ni(t, e);
          if (Bi(e), u & gi) {
            var O = e.stateNode, D = e.memoizedState, V = D !== null, X = e;
            if (O.isHidden = V, V && !Oe && (X.mode & De) !== fe) {
              ee = X;
              for (var Q = X.child; Q !== null; )
                ee = Q, Fw(Q), Q = Q.sibling;
            }
            _w(X, V);
          }
          return;
        }
        case it: {
          ni(t, e), Bi(e), u & xe && MC(e);
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
      if (t & ot) {
        try {
          Ow(e);
        } catch (a) {
          dt(e, e.return, a);
        }
        e.flags &= ~ot;
      }
      t & Mr && (e.flags &= ~Mr);
    }
    function Hw(e, t, a) {
      Bc = a, Pc = t, ee = e, OC(e, t, a), Bc = null, Pc = null;
    }
    function OC(e, t, a) {
      for (var i = (e.mode & De) !== fe; ee !== null; ) {
        var u = ee, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || rm;
          if (p) {
            gS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || On, R = rm, E = On;
            rm = p, On = y, On && !E && (ee = u, Vw(u));
            for (var b = s; b !== null; )
              ee = b, OC(
                b,
                // New root; bubble back up to here and stop.
                t,
                a
              ), b = b.sibling;
            ee = u, rm = R, On = E, gS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yn) !== oe && s !== null ? (s.return = u, ee = s) : gS(e, t, a);
      }
    }
    function gS(e, t, a) {
      for (; ee !== null; ) {
        var i = ee;
        if ((i.flags & yn) !== oe) {
          var u = i.alternate;
          qe(i);
          try {
            kw(t, u, i, a);
          } catch (f) {
            dt(i, i.return, f);
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
    function Fw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.child;
        switch (t.tag) {
          case Re:
          case Ne:
          case ht:
          case ke: {
            if (t.mode & pe)
              try {
                ji(), ei(ln, t, t.return);
              } finally {
                Vi(t);
              }
            else
              ei(ln, t, t.return);
            break;
          }
          case de: {
            Yc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && hS(t, t.return, i);
            break;
          }
          case le: {
            Yc(t, t.return);
            break;
          }
          case Ue: {
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
    function Vw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.child;
        if (t.tag === Ue) {
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
        qe(t);
        try {
          bw(t);
        } catch (i) {
          dt(t, t.return, i);
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
    function jw(e, t, a, i) {
      ee = t, Bw(t, e, a, i);
    }
    function Bw(e, t, a, i) {
      for (; ee !== null; ) {
        var u = ee, s = u.child;
        (u.subtreeFlags & Lr) !== oe && s !== null ? (s.return = u, ee = s) : Pw(e, t, a, i);
      }
    }
    function Pw(e, t, a, i) {
      for (; ee !== null; ) {
        var u = ee;
        if ((u.flags & pt) !== oe) {
          qe(u);
          try {
            Yw(t, u, a, i);
          } catch (f) {
            dt(u, u.return, f);
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
    function Yw(e, t, a, i) {
      switch (t.tag) {
        case Re:
        case Ne:
        case ke: {
          if (t.mode & pe) {
            Xg();
            try {
              Nu(Mn | an, t);
            } finally {
              Wg(t);
            }
          } else
            Nu(Mn | an, t);
          break;
        }
      }
    }
    function $w(e) {
      ee = e, Qw();
    }
    function Qw() {
      for (; ee !== null; ) {
        var e = ee, t = e.child;
        if ((ee.flags & Ye) !== oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ee = u, Ww(u, e);
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
        (e.subtreeFlags & Lr) !== oe && t !== null ? (t.return = e, ee = t) : Iw();
      }
    }
    function Iw() {
      for (; ee !== null; ) {
        var e = ee;
        (e.flags & pt) !== oe && (qe(e), Gw(e), Vt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ee = t;
          return;
        }
        ee = e.return;
      }
    }
    function Gw(e) {
      switch (e.tag) {
        case Re:
        case Ne:
        case ke: {
          e.mode & pe ? (Xg(), ei(Mn | an, e, e.return), Wg(e)) : ei(Mn | an, e, e.return);
          break;
        }
      }
    }
    function Ww(e, t) {
      for (; ee !== null; ) {
        var a = ee;
        qe(a), qw(a, t), Vt();
        var i = a.child;
        i !== null ? (i.return = a, ee = i) : Xw(e);
      }
    }
    function Xw(e) {
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
    function qw(e, t) {
      switch (e.tag) {
        case Re:
        case Ne:
        case ke: {
          e.mode & pe ? (Xg(), ei(Mn, e, t), Wg(e)) : ei(Mn, e, t);
          break;
        }
      }
    }
    function Kw(e) {
      switch (e.tag) {
        case Re:
        case Ne:
        case ke: {
          try {
            Nu(ln | an, e);
          } catch (a) {
            dt(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dt(e, e.return, a);
          }
          break;
        }
      }
    }
    function Zw(e) {
      switch (e.tag) {
        case Re:
        case Ne:
        case ke: {
          try {
            Nu(Mn | an, e);
          } catch (t) {
            dt(e, e.return, t);
          }
          break;
        }
      }
    }
    function Jw(e) {
      switch (e.tag) {
        case Re:
        case Ne:
        case ke: {
          try {
            ei(ln | an, e, e.return);
          } catch (a) {
            dt(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && hS(e, e.return, t);
          break;
        }
      }
    }
    function eD(e) {
      switch (e.tag) {
        case Re:
        case Ne:
        case ke:
          try {
            ei(Mn | an, e, e.return);
          } catch (t) {
            dt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ep = Symbol.for;
      ep("selector.component"), ep("selector.has_pseudo_class"), ep("selector.role"), ep("selector.test_id"), ep("selector.text");
    }
    var tD = [];
    function nD() {
      tD.forEach(function(e) {
        return e();
      });
    }
    var rD = N.ReactCurrentActQueue;
    function aD(e) {
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
        return !e && rD.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var iD = Math.ceil, SS = N.ReactCurrentDispatcher, CS = N.ReactCurrentOwner, zn = N.ReactCurrentBatchConfig, ri = N.ReactCurrentActQueue, sn = (
      /*             */
      0
    ), AC = (
      /*               */
      1
    ), Un = (
      /*                */
      2
    ), wa = (
      /*                */
      4
    ), Ll = 0, tp = 1, Wo = 2, im = 3, np = 4, HC = 5, ES = 6, He = sn, vr = null, Mt = null, cn = z, Pi = z, TS = xu(z), fn = Ll, rp = null, lm = z, ap = z, um = z, ip = null, Pr = null, RS = 0, FC = 500, VC = 1 / 0, lD = 500, Ol = null;
    function lp() {
      VC = mt() + lD;
    }
    function jC() {
      return VC;
    }
    var om = !1, xS = null, $c = null, Xo = !1, Uu = null, up = z, wS = [], DS = null, uD = 50, op = 0, kS = null, bS = !1, sm = !1, oD = 50, Qc = 0, cm = null, sp = at, fm = z, BC = !1;
    function dm() {
      return vr;
    }
    function hr() {
      return (He & (Un | wa)) !== sn ? mt() : (sp !== at || (sp = mt()), sp);
    }
    function Au(e) {
      var t = e.mode;
      if ((t & De) === fe)
        return ve;
      if ((He & Un) !== sn && cn !== z)
        return Bt(cn);
      var a = ax() !== rx;
      if (a) {
        if (zn.transition !== null) {
          var i = zn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return fm === Ae && (fm = Xf()), fm;
      }
      var u = Ur();
      if (u !== Ae)
        return u;
      var s = PT();
      return s;
    }
    function sD(e) {
      var t = e.mode;
      return (t & De) === fe ? ve : Xm();
    }
    function dn(e, t, a, i) {
      ND(), BC && S("useInsertionEffect must not schedule updates."), bS && (sm = !0), vl(e, a, i), (He & Un) !== z && e === vr ? AD(t) : (nn && ed(e, t, a), HD(t), e === vr && ((He & Un) === sn && (ap = we(ap, a)), fn === np && Hu(e, cn)), Yr(e, i), a === ve && He === sn && (t.mode & De) === fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ri.isBatchingLegacy && (lp(), j0()));
    }
    function cD(e, t, a) {
      var i = e.current;
      i.lanes = t, vl(e, t, a), Yr(e, a);
    }
    function fD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (He & Un) !== sn
      );
    }
    function Yr(e, t) {
      var a = e.callbackNode;
      Im(e, t);
      var i = Co(e, e === vr ? cn : z);
      if (i === z) {
        a !== null && rE(a), e.callbackNode = null, e.callbackPriority = Ae;
        return;
      }
      var u = Ut(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ri.current !== null && a !== US)) {
        a == null && s !== ve && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && rE(a);
      var f;
      if (u === ve)
        e.tag === wu ? (ri.isBatchingLegacy !== null && (ri.didScheduleLegacyUpdate = !0), jR($C.bind(null, e))) : V0($C.bind(null, e)), ri.current !== null ? ri.current.push(Du) : $T(function() {
          (He & (Un | wa)) === sn && Du();
        }), f = null;
      else {
        var p;
        switch (wo(i)) {
          case gn:
            p = _s;
            break;
          case rn:
            p = cr;
            break;
          case Pa:
            p = ha;
            break;
          case Ro:
            p = Ci;
            break;
          default:
            p = ha;
            break;
        }
        f = AS(p, PC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function PC(e, t) {
      if (Nx(), sp = at, fm = z, (He & (Un | wa)) !== sn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = zl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Co(e, e === vr ? cn : z);
      if (u === z)
        return null;
      var s = !To(e, u) && !xv(e, u) && !t, f = s ? ED(e, u) : vm(e, u);
      if (f !== Ll) {
        if (f === Wo) {
          var p = Gf(e);
          p !== z && (u = p, f = _S(e, p));
        }
        if (f === tp) {
          var v = rp;
          throw qo(e, z), Hu(e, u), Yr(e, mt()), v;
        }
        if (f === ES)
          Hu(e, u);
        else {
          var m = !To(e, u), y = e.current.alternate;
          if (m && !pD(y)) {
            if (f = vm(e, u), f === Wo) {
              var R = Gf(e);
              R !== z && (u = R, f = _S(e, R));
            }
            if (f === tp) {
              var E = rp;
              throw qo(e, z), Hu(e, u), Yr(e, mt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, dD(e, f, u);
        }
      }
      return Yr(e, mt()), e.callbackNode === a ? PC.bind(null, e) : null;
    }
    function _S(e, t) {
      var a = ip;
      if (Yt(e)) {
        var i = qo(e, t);
        i.flags |= xt, NR(e.containerInfo);
      }
      var u = vm(e, t);
      if (u !== Wo) {
        var s = Pr;
        Pr = a, s !== null && YC(s);
      }
      return u;
    }
    function YC(e) {
      Pr === null ? Pr = e : Pr.push.apply(Pr, e);
    }
    function dD(e, t, a) {
      switch (t) {
        case Ll:
        case tp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Wo: {
          Ko(e, Pr, Ol);
          break;
        }
        case im: {
          if (Hu(e, a), Js(a) && // do not delay if we're inside an act() scope
          !aE()) {
            var i = RS + FC - mt();
            if (i > 10) {
              var u = Co(e, z);
              if (u !== z)
                break;
              var s = e.suspendedLanes;
              if (!pl(s, a)) {
                hr(), Zf(e, s);
                break;
              }
              e.timeoutHandle = Dy(Ko.bind(null, e, Pr, Ol), i);
              break;
            }
          }
          Ko(e, Pr, Ol);
          break;
        }
        case np: {
          if (Hu(e, a), Rv(a))
            break;
          if (!aE()) {
            var f = Tv(e, a), p = f, v = mt() - p, m = OD(v) - v;
            if (m > 10) {
              e.timeoutHandle = Dy(Ko.bind(null, e, Pr, Ol), m);
              break;
            }
          }
          Ko(e, Pr, Ol);
          break;
        }
        case HC: {
          Ko(e, Pr, Ol);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function pD(e) {
      for (var t = e; ; ) {
        if (t.flags & po) {
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
      t = uu(t, um), t = uu(t, ap), Kf(e, t);
    }
    function $C(e) {
      if (zx(), (He & (Un | wa)) !== sn)
        throw new Error("Should not already be working.");
      zl();
      var t = Co(e, z);
      if (!Kn(t, ve))
        return Yr(e, mt()), null;
      var a = vm(e, t);
      if (e.tag !== wu && a === Wo) {
        var i = Gf(e);
        i !== z && (t = i, a = _S(e, i));
      }
      if (a === tp) {
        var u = rp;
        throw qo(e, z), Hu(e, t), Yr(e, mt()), u;
      }
      if (a === ES)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ko(e, Pr, Ol), Yr(e, mt()), null;
    }
    function vD(e, t) {
      t !== z && (ou(e, we(t, ve)), Yr(e, mt()), (He & (Un | wa)) === sn && (lp(), Du()));
    }
    function MS(e, t) {
      var a = He;
      He |= AC;
      try {
        return e(t);
      } finally {
        He = a, He === sn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ri.isBatchingLegacy && (lp(), j0());
      }
    }
    function hD(e, t, a, i, u) {
      var s = Ur(), f = zn.transition;
      try {
        return zn.transition = null, Pt(gn), e(t, a, i, u);
      } finally {
        Pt(s), zn.transition = f, He === sn && lp();
      }
    }
    function Nl(e) {
      Uu !== null && Uu.tag === wu && (He & (Un | wa)) === sn && zl();
      var t = He;
      He |= AC;
      var a = zn.transition, i = Ur();
      try {
        return zn.transition = null, Pt(gn), e ? e() : void 0;
      } finally {
        Pt(i), zn.transition = a, He = t, (He & (Un | wa)) === sn && Du();
      }
    }
    function QC() {
      return (He & (Un | wa)) !== sn;
    }
    function pm(e, t) {
      Jn(TS, Pi, e), Pi = we(Pi, t);
    }
    function LS(e) {
      Pi = TS.current, Zn(TS, e);
    }
    function qo(e, t) {
      e.finishedWork = null, e.finishedLanes = z;
      var a = e.timeoutHandle;
      if (a !== ky && (e.timeoutHandle = ky, YT(a)), Mt !== null)
        for (var i = Mt.return; i !== null; ) {
          var u = i.alternate;
          CC(u, i), i = i.return;
        }
      vr = e;
      var s = Zo(e.current, null);
      return Mt = s, cn = Pi = t, fn = Ll, rp = null, lm = z, ap = z, um = z, ip = null, Pr = null, ox(), Xa.discardPendingWarnings(), s;
    }
    function IC(e, t) {
      do {
        var a = Mt;
        try {
          if (Eh(), T1(), Vt(), CS.current = null, a === null || a.return === null) {
            fn = tp, rp = t, Mt = null;
            return;
          }
          if (wn && a.mode & pe && Jh(a, !0), ai)
            if (al(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Sv(a, i, cn);
            } else
              zs(a, t, cn);
          Vx(e, a.return, a, t, cn), qC(a);
        } catch (u) {
          t = u, Mt === a && a !== null ? (a = a.return, Mt = a) : a = Mt;
          continue;
        }
        return;
      } while (!0);
    }
    function GC() {
      var e = SS.current;
      return SS.current = Wh, e === null ? Wh : e;
    }
    function WC(e) {
      SS.current = e;
    }
    function mD() {
      RS = mt();
    }
    function cp(e) {
      lm = we(e, lm);
    }
    function yD() {
      fn === Ll && (fn = im);
    }
    function OS() {
      (fn === Ll || fn === im || fn === Wo) && (fn = np), vr !== null && (Eo(lm) || Eo(ap)) && Hu(vr, cn);
    }
    function gD(e) {
      fn !== np && (fn = Wo), ip === null ? ip = [e] : ip.push(e);
    }
    function SD() {
      return fn === Ll;
    }
    function vm(e, t) {
      var a = He;
      He |= Un;
      var i = GC();
      if (vr !== e || cn !== t) {
        if (nn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (fp(e, cn), u.clear()), nc(e, t);
        }
        Ol = td(), qo(e, t);
      }
      aa(t);
      do
        try {
          CD();
          break;
        } catch (s) {
          IC(e, s);
        }
      while (!0);
      if (Eh(), He = a, WC(i), Mt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return nu(), vr = null, cn = z, fn;
    }
    function CD() {
      for (; Mt !== null; )
        XC(Mt);
    }
    function ED(e, t) {
      var a = He;
      He |= Un;
      var i = GC();
      if (vr !== e || cn !== t) {
        if (nn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (fp(e, cn), u.clear()), nc(e, t);
        }
        Ol = td(), lp(), qo(e, t);
      }
      aa(t);
      do
        try {
          TD();
          break;
        } catch (s) {
          IC(e, s);
        }
      while (!0);
      return Eh(), WC(i), He = a, Mt !== null ? (mo(), Ll) : (nu(), vr = null, cn = z, fn);
    }
    function TD() {
      for (; Mt !== null && !bs(); )
        XC(Mt);
    }
    function XC(e) {
      var t = e.alternate;
      qe(e);
      var a;
      (e.mode & pe) !== fe ? (Gg(e), a = NS(t, e, Pi), Jh(e, !0)) : a = NS(t, e, Pi), Vt(), e.memoizedProps = e.pendingProps, a === null ? qC(e) : Mt = a, CS.current = null;
    }
    function qC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ur) === oe) {
          qe(t);
          var u = void 0;
          if ((t.mode & pe) === fe ? u = SC(a, t, Pi) : (Gg(t), u = SC(a, t, Pi), Jh(t, !1)), Vt(), u !== null) {
            Mt = u;
            return;
          }
        } else {
          var s = yw(a, t);
          if (s !== null) {
            s.flags &= cv, Mt = s;
            return;
          }
          if ((t.mode & pe) !== fe) {
            Jh(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ur, i.subtreeFlags = oe, i.deletions = null;
          else {
            fn = ES, Mt = null;
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
      fn === Ll && (fn = HC);
    }
    function Ko(e, t, a) {
      var i = Ur(), u = zn.transition;
      try {
        zn.transition = null, Pt(gn), RD(e, t, a, i);
      } finally {
        zn.transition = u, Pt(i);
      }
      return null;
    }
    function RD(e, t, a, i) {
      do
        zl();
      while (Uu !== null);
      if (zD(), (He & (Un | wa)) !== sn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ls(s), u === null)
        return Pf(), null;
      if (s === z && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = z, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ae;
      var f = we(u.lanes, u.childLanes);
      Jf(e, f), e === vr && (vr = null, Mt = null, cn = z), ((u.subtreeFlags & Lr) !== oe || (u.flags & Lr) !== oe) && (Xo || (Xo = !0, DS = a, AS(ha, function() {
        return zl(), null;
      })));
      var p = (u.subtreeFlags & (Jl | Gn | yn | Lr)) !== oe, v = (u.flags & (Jl | Gn | yn | Lr)) !== oe;
      if (p || v) {
        var m = zn.transition;
        zn.transition = null;
        var y = Ur();
        Pt(gn);
        var R = He;
        He |= wa, CS.current = null, Tw(e, u), G1(), Aw(e, u, s), AT(e.containerInfo), e.current = u, Cv(s), Hw(u, e, s), tu(), pv(), He = R, Pt(y), zn.transition = m;
      } else
        e.current = u, G1();
      var E = Xo;
      if (Xo ? (Xo = !1, Uu = e, up = s) : (Qc = 0, cm = null), f = e.pendingLanes, f === z && ($c = null), E || eE(e.current, !1), Va(u.stateNode, i), nn && e.memoizedUpdaters.clear(), nD(), Yr(e, mt()), t !== null)
        for (var b = e.onRecoverableError, _ = 0; _ < t.length; _++) {
          var L = t[_], W = L.stack, se = L.digest;
          b(L.value, {
            componentStack: W,
            digest: se
          });
        }
      if (om) {
        om = !1;
        var re = xS;
        throw xS = null, re;
      }
      return Kn(up, ve) && e.tag !== wu && zl(), f = e.pendingLanes, Kn(f, ve) ? (Ox(), e === kS ? op++ : (op = 0, kS = e)) : op = 0, Du(), Pf(), null;
    }
    function zl() {
      if (Uu !== null) {
        var e = wo(up), t = Km(Pa, e), a = zn.transition, i = Ur();
        try {
          return zn.transition = null, Pt(t), wD();
        } finally {
          Pt(i), zn.transition = a;
        }
      }
      return !1;
    }
    function xD(e) {
      wS.push(e), Xo || (Xo = !0, AS(ha, function() {
        return zl(), null;
      }));
    }
    function wD() {
      if (Uu === null)
        return !1;
      var e = DS;
      DS = null;
      var t = Uu, a = up;
      if (Uu = null, up = z, (He & (Un | wa)) !== sn)
        throw new Error("Cannot flush passive effects while already rendering.");
      bS = !0, sm = !1, Ev(a);
      var i = He;
      He |= wa, $w(t.current), jw(t, t.current, a, e);
      {
        var u = wS;
        wS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Dw(t, f);
        }
      }
      ho(), eE(t.current, !0), He = i, Du(), sm ? t === cm ? Qc++ : (Qc = 0, cm = t) : Qc = 0, bS = !1, sm = !1, Ti(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function KC(e) {
      return $c !== null && $c.has(e);
    }
    function DD(e) {
      $c === null ? $c = /* @__PURE__ */ new Set([e]) : $c.add(e);
    }
    function kD(e) {
      om || (om = !0, xS = e);
    }
    var bD = kD;
    function ZC(e, t, a) {
      var i = Io(a, t), u = X1(e, i, ve), s = bu(e, u, ve), f = hr();
      s !== null && (vl(s, ve, f), Yr(s, f));
    }
    function dt(e, t, a) {
      if (Sw(a), dp(!1), e.tag === ie) {
        ZC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ie) {
          ZC(i, e, a);
          return;
        } else if (i.tag === de) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !KC(s)) {
            var f = Io(a, e), p = Jg(i, f, ve), v = bu(i, p, ve), m = hr();
            v !== null && (vl(v, ve, m), Yr(v, m));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function _D(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = hr();
      Zf(e, a), FD(e), vr === e && pl(cn, a) && (fn === np || fn === im && Js(cn) && mt() - RS < FC ? qo(e, z) : um = we(um, a)), Yr(e, u);
    }
    function JC(e, t) {
      t === Ae && (t = sD(e));
      var a = hr(), i = jr(e, t);
      i !== null && (vl(i, t, a), Yr(i, a));
    }
    function MD(e) {
      var t = e.memoizedState, a = Ae;
      t !== null && (a = t.retryLane), JC(e, a);
    }
    function LD(e, t) {
      var a = Ae, i;
      switch (e.tag) {
        case ze:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case it:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), JC(e, a);
    }
    function OD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : iD(e / 1960) * 1960;
    }
    function ND() {
      if (op > uD)
        throw op = 0, kS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qc > oD && (Qc = 0, cm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function zD() {
      Xa.flushLegacyContextWarning(), Xa.flushPendingUnsafeLifecycleWarnings();
    }
    function eE(e, t) {
      qe(e), hm(e, In, Jw), t && hm(e, rl, eD), hm(e, In, Kw), t && hm(e, rl, Zw), Vt();
    }
    function hm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== oe ? i = i.child : ((i.flags & t) !== oe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var mm = null;
    function tE(e) {
      {
        if ((He & Un) !== sn || !(e.mode & De))
          return;
        var t = e.tag;
        if (t !== en && t !== ie && t !== de && t !== Re && t !== Ne && t !== ht && t !== ke)
          return;
        var a = Te(e) || "ReactComponent";
        if (mm !== null) {
          if (mm.has(a))
            return;
          mm.add(a);
        } else
          mm = /* @__PURE__ */ new Set([a]);
        var i = Nt;
        try {
          qe(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? qe(e) : Vt();
        }
      }
    }
    var NS;
    {
      var UD = null;
      NS = function(e, t, a) {
        var i = sE(UD, t);
        try {
          return vC(e, t, a);
        } catch (s) {
          if (WR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Eh(), T1(), CC(e, t), sE(t, i), t.mode & pe && Gg(t), nl(null, vC, null, e, t, a), $m()) {
            var u = Lf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var nE = !1, zS;
    zS = /* @__PURE__ */ new Set();
    function AD(e) {
      if (wr && !_x())
        switch (e.tag) {
          case Re:
          case Ne:
          case ke: {
            var t = Mt && Te(Mt) || "Unknown", a = t;
            if (!zS.has(a)) {
              zS.add(a);
              var i = Te(e) || "Unknown";
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
    function fp(e, t) {
      if (nn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ed(e, i, t);
        });
      }
    }
    var US = {};
    function AS(e, t) {
      {
        var a = ri.current;
        return a !== null ? (a.push(t), US) : ks(e, t);
      }
    }
    function rE(e) {
      if (e !== US)
        return dv(e);
    }
    function aE() {
      return ri.current !== null;
    }
    function HD(e) {
      {
        if (e.mode & De) {
          if (!UC())
            return;
        } else if (!aD() || He !== sn || e.tag !== Re && e.tag !== Ne && e.tag !== ke)
          return;
        if (ri.current === null) {
          var t = Nt;
          try {
            qe(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Te(e));
          } finally {
            t ? qe(e) : Vt();
          }
        }
      }
    }
    function FD(e) {
      e.tag !== wu && UC() && ri.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function dp(e) {
      BC = e;
    }
    var Da = null, Ic = null, VD = function(e) {
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
    function HS(e) {
      return Gc(e);
    }
    function FS(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Gc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Vl,
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
        if (Da === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case de: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Re: {
            (typeof i == "function" || s === Dn) && (u = !0);
            break;
          }
          case Ne: {
            (s === Vl || s === Dn) && (u = !0);
            break;
          }
          case ht:
          case ke: {
            (s === jl || s === Dn) && (u = !0);
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
    function lE(e) {
      {
        if (Da === null || typeof WeakSet != "function")
          return;
        Ic === null && (Ic = /* @__PURE__ */ new WeakSet()), Ic.add(e);
      }
    }
    var jD = function(e, t) {
      {
        if (Da === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        zl(), Nl(function() {
          VS(e.current, i, a);
        });
      }
    }, BD = function(e, t) {
      {
        if (e.context !== la)
          return;
        zl(), Nl(function() {
          pp(t, e, null, null);
        });
      }
    };
    function VS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Re:
          case ke:
          case de:
            v = p;
            break;
          case Ne:
            v = p.render;
            break;
        }
        if (Da === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = Da(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === de ? y = !0 : m = !0));
        }
        if (Ic !== null && (Ic.has(e) || i !== null && Ic.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = jr(e, ve);
          E !== null && dn(E, e, ve, at);
        }
        u !== null && !y && VS(u, t, a), s !== null && VS(s, t, a);
      }
    }
    var PD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return jS(e.current, i, a), a;
      }
    };
    function jS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Re:
          case ke:
          case de:
            p = f;
            break;
          case Ne:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? YD(e, a) : i !== null && jS(i, t, a), u !== null && jS(u, t, a);
      }
    }
    function YD(e, t) {
      {
        var a = $D(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case he:
              t.add(i.stateNode.containerInfo);
              return;
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function $D(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
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
    var BS;
    {
      BS = !1;
      try {
        var uE = Object.preventExtensions({});
      } catch {
        BS = !0;
      }
    }
    function QD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = oe, this.subtreeFlags = oe, this.deletions = null, this.lanes = z, this.childLanes = z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !BS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ua = function(e, t, a, i) {
      return new QD(e, t, a, i);
    };
    function PS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ID(e) {
      return typeof e == "function" && !PS(e) && e.defaultProps === void 0;
    }
    function GD(e) {
      if (typeof e == "function")
        return PS(e) ? de : Re;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Vl)
          return Ne;
        if (t === jl)
          return ht;
      }
      return en;
    }
    function Zo(e, t) {
      var a = e.alternate;
      a === null ? (a = ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = oe, a.subtreeFlags = oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case en:
        case Re:
        case ke:
          a.type = Gc(e.type);
          break;
        case de:
          a.type = HS(e.type);
          break;
        case Ne:
          a.type = FS(e.type);
          break;
      }
      return a;
    }
    function WD(e, t) {
      e.flags &= tn | ot;
      var a = e.alternate;
      if (a === null)
        e.childLanes = z, e.lanes = t, e.child = null, e.subtreeFlags = oe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = oe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function XD(e, t, a) {
      var i;
      return e === ph ? (i = De, t === !0 && (i |= yt, i |= Nr)) : i = fe, nn && (i |= pe), ua(ie, null, null, i);
    }
    function YS(e, t, a, i, u, s) {
      var f = en, p = e;
      if (typeof e == "function")
        PS(e) ? (f = de, p = HS(p)) : p = Gc(p);
      else if (typeof e == "string")
        f = le;
      else
        e:
          switch (e) {
            case _a:
              return Fu(a.children, u, s, t);
            case Fl:
              f = lt, u |= yt, (u & De) !== fe && (u |= Nr);
              break;
            case Pu:
              return qD(a, u, s, t);
            case da:
              return KD(a, u, s, t);
            case Yu:
              return ZD(a, u, s, t);
            case Zc:
              return oE(a, u, s, t);
            case Ep:
            case Sp:
            case Tm:
            case Rm:
            case Cp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case qc:
                    f = pn;
                    break e;
                  case Kc:
                    f = Ir;
                    break e;
                  case Vl:
                    f = Ne, p = FS(p);
                    break e;
                  case jl:
                    f = ht;
                    break e;
                  case Dn:
                    f = xn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Te(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = ua(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function $S(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = YS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Fu(e, t, a, i) {
      var u = ua(et, e, i, t);
      return u.lanes = a, u;
    }
    function qD(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ua(ut, e, i, t | pe);
      return u.elementType = Pu, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function KD(e, t, a, i) {
      var u = ua(ze, e, i, t);
      return u.elementType = da, u.lanes = a, u;
    }
    function ZD(e, t, a, i) {
      var u = ua(it, e, i, t);
      return u.elementType = Yu, u.lanes = a, u;
    }
    function oE(e, t, a, i) {
      var u = ua(Ue, e, i, t);
      u.elementType = Zc, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function QS(e, t, a) {
      var i = ua(be, e, null, t);
      return i.lanes = a, i;
    }
    function JD() {
      var e = ua(le, null, null, fe);
      return e.elementType = "DELETED", e;
    }
    function ek(e) {
      var t = ua(Lt, null, null, fe);
      return t.stateNode = e, t;
    }
    function IS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ua(he, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function sE(e, t) {
      return e === null && (e = ua(en, null, null, fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function tk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = ky, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ae, this.eventTimes = tc(z), this.expirationTimes = tc(at), this.pendingLanes = z, this.suspendedLanes = z, this.pingedLanes = z, this.expiredLanes = z, this.mutableReadLanes = z, this.finishedLanes = z, this.entangledLanes = z, this.entanglements = tc(z), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ct; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case ph:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case wu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function cE(e, t, a, i, u, s, f, p, v, m) {
      var y = new tk(e, t, a, p, v), R = XD(t, s);
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
      return eg(R), y;
    }
    var GS = "18.2.0";
    function nk(e, t, a) {
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
    var WS, XS;
    WS = !1, XS = {};
    function fE(e) {
      if (!e)
        return la;
      var t = br(e), a = VR(t);
      if (t.tag === de) {
        var i = t.type;
        if (Ui(i))
          return H0(t, i, a);
      }
      return a;
    }
    function rk(e, t) {
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
        if (u.mode & yt) {
          var s = Te(a) || "Component";
          if (!XS[s]) {
            XS[s] = !0;
            var f = Nt;
            try {
              qe(u), a.mode & yt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? qe(f) : Vt();
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
      var E = R.current, b = hr(), _ = Au(E), L = _l(b, _);
      return L.callback = t ?? null, bu(E, L, _), cD(R, _, b), R;
    }
    function pp(e, t, a, i) {
      vv(t, e);
      var u = t.current, s = hr(), f = Au(u);
      il(f);
      var p = fE(a);
      t.context === null ? t.context = p : t.pendingContext = p, wr && Nt !== null && !WS && (WS = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Te(Nt) || "Unknown"));
      var v = _l(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = bu(u, v, f);
      return m !== null && (dn(m, u, f, s), Dh(m, u, f)), f;
    }
    function ym(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ak(e) {
      switch (e.tag) {
        case ie: {
          var t = e.stateNode;
          if (Yt(t)) {
            var a = Gm(t);
            vD(t, a);
          }
          break;
        }
        case ze: {
          Nl(function() {
            var u = jr(e, ve);
            if (u !== null) {
              var s = hr();
              dn(u, e, ve, s);
            }
          });
          var i = ve;
          qS(e, i);
          break;
        }
      }
    }
    function vE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Dv(a.retryLane, t));
    }
    function qS(e, t) {
      vE(e, t);
      var a = e.alternate;
      a && vE(a, t);
    }
    function ik(e) {
      if (e.tag === ze) {
        var t = ru, a = jr(e, t);
        if (a !== null) {
          var i = hr();
          dn(a, e, t, i);
        }
        qS(e, t);
      }
    }
    function lk(e) {
      if (e.tag === ze) {
        var t = Au(e), a = jr(e, t);
        if (a !== null) {
          var i = hr();
          dn(a, e, t, i);
        }
        qS(e, t);
      }
    }
    function hE(e) {
      var t = fv(e);
      return t === null ? null : t.stateNode;
    }
    var mE = function(e) {
      return null;
    };
    function uk(e) {
      return mE(e);
    }
    var yE = function(e) {
      return !1;
    };
    function ok(e) {
      return yE(e);
    }
    var gE = null, SE = null, CE = null, EE = null, TE = null, RE = null, xE = null, wE = null, DE = null;
    {
      var kE = function(e, t, a) {
        var i = t[a], u = It(e) ? e.slice() : Me({}, e);
        return a + 1 === t.length ? (It(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = kE(e[i], t, a + 1), u);
      }, bE = function(e, t) {
        return kE(e, t, 0);
      }, _E = function(e, t, a, i) {
        var u = t[i], s = It(e) ? e.slice() : Me({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], It(s) ? s.splice(u, 1) : delete s[u];
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
          Je("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Je("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return _E(e, t, a, 0);
      }, LE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = It(e) ? e.slice() : Me({}, e);
        return s[u] = LE(e[u], t, a + 1, i), s;
      }, OE = function(e, t, a) {
        return LE(e, t, 0, a);
      }, KS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      gE = function(e, t, a, i) {
        var u = KS(e, t);
        if (u !== null) {
          var s = OE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Me({}, e.memoizedProps);
          var f = jr(e, ve);
          f !== null && dn(f, e, ve, at);
        }
      }, SE = function(e, t, a) {
        var i = KS(e, t);
        if (i !== null) {
          var u = bE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Me({}, e.memoizedProps);
          var s = jr(e, ve);
          s !== null && dn(s, e, ve, at);
        }
      }, CE = function(e, t, a, i) {
        var u = KS(e, t);
        if (u !== null) {
          var s = ME(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Me({}, e.memoizedProps);
          var f = jr(e, ve);
          f !== null && dn(f, e, ve, at);
        }
      }, EE = function(e, t, a) {
        e.pendingProps = OE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = jr(e, ve);
        i !== null && dn(i, e, ve, at);
      }, TE = function(e, t) {
        e.pendingProps = bE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = jr(e, ve);
        a !== null && dn(a, e, ve, at);
      }, RE = function(e, t, a) {
        e.pendingProps = ME(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = jr(e, ve);
        i !== null && dn(i, e, ve, at);
      }, xE = function(e) {
        var t = jr(e, ve);
        t !== null && dn(t, e, ve, at);
      }, wE = function(e) {
        mE = e;
      }, DE = function(e) {
        yE = e;
      };
    }
    function sk(e) {
      var t = Or(e);
      return t === null ? null : t.stateNode;
    }
    function ck(e) {
      return null;
    }
    function fk() {
      return Nt;
    }
    function dk(e) {
      var t = e.findFiberByHostInstance, a = N.ReactCurrentDispatcher;
      return jf({
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
        findHostInstanceByFiber: sk,
        findFiberByHostInstance: t || ck,
        // React Refresh
        findHostInstancesForRefresh: PD,
        scheduleRefresh: jD,
        scheduleRoot: BD,
        setRefreshHandler: VD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: fk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: GS
      });
    }
    var NE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function ZS(e) {
      this._internalRoot = e;
    }
    gm.prototype.render = ZS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Sm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== zt) {
          var i = hE(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      pp(e, t, null, null);
    }, gm.prototype.unmount = ZS.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        QC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Nl(function() {
          pp(null, e, null, null);
        }), O0(t);
      }
    };
    function pk(e, t) {
      if (!Sm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      zE(e);
      var a = !1, i = !1, u = "", s = NE;
      t != null && (t.hydrate ? Je("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Hl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = dE(e, ph, null, a, i, u, s);
      lh(f.current, e);
      var p = e.nodeType === zt ? e.parentNode : e;
      return Ed(p), new ZS(f);
    }
    function gm(e) {
      this._internalRoot = e;
    }
    function vk(e) {
      e && zv(e);
    }
    gm.prototype.unstable_scheduleHydration = vk;
    function hk(e, t, a) {
      if (!Sm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      zE(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = NE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = pE(t, null, e, ph, i, s, f, p, v);
      if (lh(m.current, e), Ed(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Rx(m, R);
        }
      return new gm(m);
    }
    function Sm(e) {
      return !!(e && (e.nodeType === Yn || e.nodeType === ta || e.nodeType === qi || !Xe));
    }
    function vp(e) {
      return !!(e && (e.nodeType === Yn || e.nodeType === ta || e.nodeType === qi || e.nodeType === zt && e.nodeValue === " react-mount-point-unstable "));
    }
    function zE(e) {
      e.nodeType === Yn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Od(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var mk = N.ReactCurrentOwner, UE;
    UE = function(e) {
      if (e._reactRootContainer && e.nodeType !== zt) {
        var t = hE(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = JS(e), u = !!(i && Ru(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function JS(e) {
      return e ? e.nodeType === ta ? e.documentElement : e.firstChild : null;
    }
    function AE() {
    }
    function yk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = ym(f);
            s.call(E);
          };
        }
        var f = pE(
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
          AE
        );
        e._reactRootContainer = f, lh(f.current, e);
        var p = e.nodeType === zt ? e.parentNode : e;
        return Ed(p), Nl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = ym(y);
            m.call(E);
          };
        }
        var y = dE(
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
          AE
        );
        e._reactRootContainer = y, lh(y.current, e);
        var R = e.nodeType === zt ? e.parentNode : e;
        return Ed(R), Nl(function() {
          pp(t, y, a, i);
        }), y;
      }
    }
    function gk(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Cm(e, t, a, i, u) {
      UE(a), gk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = yk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = ym(f);
            p.call(v);
          };
        }
        pp(t, f, e, u);
      }
      return ym(f);
    }
    function Sk(e) {
      {
        var t = mk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yn ? e : rk(e, "findDOMNode");
    }
    function Ck(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Od(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Cm(null, e, t, !0, a);
    }
    function Ek(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Od(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Cm(null, e, t, !1, a);
    }
    function Tk(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !fo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Cm(e, t, a, !1, i);
    }
    function Rk(e) {
      if (!vp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Od(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = JS(e), i = a && !Ru(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Nl(function() {
          Cm(null, null, e, !1, function() {
            e._reactRootContainer = null, O0(e);
          });
        }), !0;
      } else {
        {
          var u = JS(e), s = !!(u && Ru(u)), f = e.nodeType === Yn && vp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    K(ak), bv(ik), ko(lk), rd(Ur), Mv(xo), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ov(DT), Ts(MS, hD, Nl);
    function xk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Sm(t))
        throw new Error("Target container is not a DOM element.");
      return nk(e, t, null, a);
    }
    function wk(e, t, a, i) {
      return Tk(e, t, a, i);
    }
    var e0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ru, xc, uh, Es, oo, MS]
    };
    function Dk(e, t) {
      return e0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), pk(e, t);
    }
    function kk(e, t, a) {
      return e0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), hk(e, t, a);
    }
    function bk(e) {
      return QC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Nl(e);
    }
    var _k = dk({
      findFiberByHostInstance: Ho,
      bundleType: 1,
      version: GS,
      rendererPackageName: "react-dom"
    });
    if (!_k && vn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var HE = window.location.protocol;
      /^(https?|file):$/.test(HE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (HE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e0, Qr.createPortal = xk, Qr.createRoot = Dk, Qr.findDOMNode = Sk, Qr.flushSync = bk, Qr.hydrate = Ck, Qr.hydrateRoot = kk, Qr.render = Ek, Qr.unmountComponentAtNode = Rk, Qr.unstable_batchedUpdates = MS, Qr.unstable_renderSubtreeIntoContainer = wk, Qr.version = GS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qr;
}
function QE() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QE);
    } catch (ae) {
      console.error(ae);
    }
  }
}
process.env.NODE_ENV === "production" ? (QE(), r0.exports = Uk()) : r0.exports = Ak();
var Hk = r0.exports;
const Yk = /* @__PURE__ */ Ok(Hk);
export {
  Yk as R,
  Hk as r
};
